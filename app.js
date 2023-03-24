if(process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}

const express = require('express')
const app = express()
app.set('view engine', 'ejs')
app.use(express.static(__dirname + '/public'))
app.use(express.urlencoded({extended: false})) // For body parsing

const mongoose = require('mongoose')
mongoose.set('strictQuery', true)
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true }) // Will fail until we set up a DB on MongoDB Atlas

const db = mongoose.connection
db.on('error', error => console.error(error))
db.once('open', () => console.log('Connected to Mongoose'))

app.get('/', (req, res) => {
    res.render('index')
})


app.get('/register', (req, res) => {
    res.render('register')
})
  

/*-------------- ROUTES --------------*/





app.listen(process.env.PORT || 3000)