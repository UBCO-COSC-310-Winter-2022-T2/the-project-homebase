if(process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}


const express = require('express')
const jwt = require('jsonwebtoken')
const app = express()
const User = require('./models/User')



app.set('view engine', 'ejs')
app.use(express.static(__dirname + '/public'))
app.use(express.urlencoded({extended: false})) // For body parsing


const mongoose = require('mongoose')
mongoose.set('strictQuery', true)
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true }) // Will fail until we set up a DB on MongoDB Atlas

mongoose.connection
db.on('error', error => console.error(error))
db.once('open', () => console.log('Connected to Mongoose'))

const JWT_SECRET = process.env.JWT_SECRET


app.get('/', (req, res) => {
    res.render('index')
})

app.get('/login', (req, res) => {
    res.render('login')
})
app.get('/registerPage', (req, res) => {
    res.render('registerPage')
})
app.get('/deleteAccount', (req, res) => {
    res.render('deleteAccount')
})
app.get('/home', (req, res) => {
    const username = req.query.username
    res.render('home', { username })
})

//forgot password
app.get('/forgotPassword',(req,res,next) =>{
    res.render('forgotPassword')
})

app.post('/forgotPassword', async(req,res,next) =>{
    const {email} = req.body
    
    
    try{
        
        
        //check if user exists in database    
        const user = await User.findOne({ email })
        if(!user){
        res.send('user not registered')
        return
        }

        //user exists create one time link for 15 minutes
        const secret = JWT_SECRET + user.password //unique for each user
        const payload = {
            email: user.email,
            id: user.id
        }
        const token = jwt.sign(payload, secret, {expiresIn: '15m'})
        const link = `http://localhost:3000/resetPassword/${user.id}/${token}`
        console.log(link) //should actually send link to client. for right now just sending it to the console
        res.send('Password Reset link has been sent to your email')

    }catch{
        res.send("error") 
    }
})

app.get('/resetPassword/:id/:token',async (req,res,next) => {
    const {id, token} = req.params
    
    //check if id exists in the database
    const user = await User.findOne({ id })
    if(!user){
        res.send('inalid ID')
        return
    }

    //we have valid id, and valid user with this id
    const secret = JWT_SECRET + user.password
    try {
        const payload = jwt.verify(token, secret)
        res.render('resetPassword', {email: user.email})

    } catch (error) {
        console.log(error.message)
        res.send(error.message)
    }
})

app.post('/resetPassword/:id/:token',async (req,res,next) => {
    const {id, token} = req.params
    const {password,password2} = req.body
    const user = await User.findOne({ id })
    
    //check if id exists in database
    if(!user){
        res.send('inalid ID')
        return
    }

    //verify token
    const secret = JWT_SECRET + user.password
    try {
        const payload = jwt.verify(token,secret)

        //validate password and password2 match
        if (password !== password2) {
            res.send('Passwords do not match')
            return
        }
        //find user with payload email and id and update with new password
        //hash password if we are going to do that?
        user.password = password
        await user.save();
        res.render('index')

    } catch (error) { //invalid token
        console.log(error.message)
        res.send(error.message)
    }
})

//register

app.post('/registerPage',async (req,res)=>{
    //get data from form
    const data = {
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    }
    // check if user already exists
    const user = await User.findOne({ email: data.email })
    if (user) {
        res.send('User already exists')
        return
    }

    //give data to mongo
    //if have time should probably hash the password
    await User.insertMany([data])

    //redirect to homepage 
    res.render('index')

    
})


//login
app.post('/login',async (req,res)=>{
    
    try {
        //search username
        const check = await User.findOne({username:req.body.username}) 
        
        //check if password is the same as in database
        if(check.password === req.body.password){
            
            
            res.render('home', { username: check.username }) //direct to homepage

        }else{
            res.send("wrong password") //inform user wrong password
        }
    } catch {
        res.send("wrong account details") //inform user wrong account details
    }

})

//delete account
app.post('/deleteAccount', async (req, res) => {
    const { username, password } = req.body;
    try {
      // Find the user in the database
      const user = await User.findOne({ username });
      if (!user) {
        // User not found in the database
        return res.status(404).send('User not found');
      }
      // Check if the password is correct
      if (user.password !== password) {
        // Incorrect password
        return res.status(401).send('Incorrect password');
      }
      // Delete the user from the database
      await User.deleteOne({ username });
      // Redirect to the home page
      res.render('index')

    } catch (error) {
      // Handle any errors that may occur
      console.error(error);
      res.status(500).send('Internal server error');
    }
  });
  
// TESTING STUFF
function sum(a, b) {
    return a + b;
}
module.exports = sum;



/*-------------- ROUTES --------------*/
const apiRouter = require('./routes/api')
app.use('/api', apiRouter)






app.listen(process.env.PORT || 3000)