const request = require('supertest')
const mongoose = require('mongoose')
const {MongoClient} = require('mongodb');
const app = require('../app.js')
const User = require('../models/User')

it('should render index', async () => {
  const response = await request(app).get('/')
  expect(response.statusCode).toBe(200)
})

// describe('POST /registerPage', () => {
//   let connection;
//   let db;

//   beforeAll(async () => {
//     connection = await MongoClient.connect(globalThis.__MONGO_URI__, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     db = await connection.db(globalThis.__MONGO_DB_NAME__);
//   });

//   afterAll(async () => {
//     await connection.close();
//   });

//   it('should register a new user', async () => {
//     const newUser = {
//     username: 'testuser',
//     email: 'testuser@example.com',
//     password: 'testpassword'
//     }

//     const response = await request(app)
//     .post('/registerPage')
//     .send({
//         username: 'testuser',
//         email: 'testuser@example.com',
//         password: 'testpassword'
//         }
//     )

//     expect(response.statusCode).toBe(200)

//     const user = await User.findOne({ email: newUser.email })
//     expect(user).toBeDefined()
//     expect(user.username).toBe(newUser.username)
//     expect(user.password).toBe(newUser.password)
//   })

//   it('should not register a user with an existing email', async () => {
//     const existingUser = {
//     username: 'existinguser',
//     email: 'existinguser@example.com',
//     password: 'existingpassword'
//     }

//     // Insert an existing user into the database
//     await User.insertMany([existingUser])

//     // Try to register a new user with the same email
//     const newUser = {
//     username: 'testuser',
//     email: 'existinguser@example.com',
//     password: 'testpassword'
//     }

//     // Send a POST request to the /registerPage endpoint
//     const response = await request(app)
//     .post('/registerPage')
//     .send(newUser)

//     expect(response.statusCode).toBe(200)
//     expect(response.text).toBe('User already exists')

//     // Check that the existing user was not overwritten in the database
//     const users = await User.find()
//     expect(users.length).toBe(1)
//     expect(users[0].email).toBe(existingUser.email)
//   })

// });
