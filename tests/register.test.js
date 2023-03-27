const request = require("supertest");
const { MongoClient } = require("mongodb");
const app = require("../app.js");
const User = require("../models/User");


describe("POST /register", () => {
    let connection;
    let db;
  
    beforeAll(async () => {
      // connect to a new in-memory database before running any tests
      connection = await MongoClient.connect(globalThis.__MONGO_URI__, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      db = await connection.db(globalThis.__MONGO_DB_NAME__);
    });
  
    afterAll(async () => {
      // clear database and close connection
      await User.deleteMany({});
      await connection.close();
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