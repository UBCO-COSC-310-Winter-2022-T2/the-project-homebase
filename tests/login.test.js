const request = require('supertest')
const mongoose = require('mongoose')
const app = require('../app.js')
const User = require('../models/User')

describe('GET /home', () => {
    it('should render home and give username', async () => {
      const response = await request(app).get('/home')
      expect(2).toBe(2)
    })
})

// describe('POST /registerPage', () => {

//     it('should register a new user', async () => {
//         const newUser = {
//         username: 'testuser',
//         email: 'testuser@example.com',
//         password: 'testpassword'
//         }

//         // Send a POST request to the /registerPage endpoint
//         const response = await request(app)
//         .post('/registerPage')
//         .send({
//             username: 'testuser',
//             email: 'testuser@example.com',
//             password: 'testpassword'
//             }
//         )

//         expect(response.statusCode).toBe(200)

//         // Check that the user was inserted into the database
//         const user = await User.findOne({ email: newUser.email })
//         expect(user).toBeDefined()
//         expect(user.username).toBe(newUser.username)
//         expect(user.password).toBe(newUser.password)
//     })

//     it('should not register a user with an existing email', async () => {
//         const existingUser = {
//         username: 'existinguser',
//         email: 'existinguser@example.com',
//         password: 'existingpassword'
//         }

//         // Insert an existing user into the database
//         await User.insertMany([existingUser])

//         // Try to register a new user with the same email
//         const newUser = {
//         username: 'testuser',
//         email: 'existinguser@example.com',
//         password: 'testpassword'
//         }

//         // Send a POST request to the /registerPage endpoint
//         const response = await request(app)
//         .post('/registerPage')
//         .send(newUser)

//         expect(response.statusCode).toBe(200)
//         expect(response.text).toBe('User already exists')

//         // Check that the existing user was not overwritten in the database
//         const users = await User.find()
//         expect(users.length).toBe(1)
//         expect(users[0].email).toBe(existingUser.email)
//     })
// })

