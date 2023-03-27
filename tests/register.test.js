const request = require("supertest");
const { MongoMemoryServer  } = require("mongodb-memory-server");
const mongoose = require("mongoose");
const app = require("../app.js");
const User = require("../models/User");


describe("POST /register", () => {
    let connection;
    let db;
  
    beforeAll(async () => {
      // connect to a new in-memory database before running any tests
      mongo = await MongoMemoryServer.create();
      const uri = mongo.getUri();

      connection = await mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
    });
  
    afterAll(async () => {
      // clear database and close connection
      await mongoose.connection.dropDatabase();
      await mongoose.connection.close();
      await mongo.stop();
    });
  
    it("should register a new user", async () => {
      const newUser = {
        username: "newuser",
        email: "newuser@example.com",
        password: "newpassword",
      };
  
      const response = await request(app).post("/register").send(newUser);
  
      expect(response.statusCode).toBe(200);
  
      const user = await User.findOne({ email: newUser.email });
      expect(user).toBeDefined();
      expect(user.username).toBe(newUser.username);
      expect(user.password).toBe(newUser.password);
    });
  
    it("should not register a user with an existing email", async () => {
      const anotherUser = {
        username: "anotheruser",
        email: "anotheruser@gmail.com",
        password: "anotherpassword",
      };
  
      const response = await request(app).post("/register").send(anotherUser);
  
      expect(response.statusCode).toBe(200);
  
      const response2 = await request(app).post("/register").send(anotherUser);
  
      expect(response2.statusCode).toBe(400);
    });
});