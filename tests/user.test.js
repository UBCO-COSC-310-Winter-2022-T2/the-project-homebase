const request = require("supertest");
const { MongoMemoryServer  } = require("mongodb-memory-server");
const mongoose = require("mongoose");
const app = require("../app.js");
const User = require("../models/User");


describe("POST /user/edit/:id", () => {
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

    it("should edit a user", async () => {

        const user = new User({
            username: "newuser",
            email: "newuser@example.com",
            password: "newpassword",
            bio: "hello",
            avatar: "https://cdn1.iconfinder.com/data/icons/basic-ui-set-v5-user-outline/64/Account_profile_user_avatar_small-512.png", //TEMP
        });

        await user.save();

        const response = await request(app).post(`/user/edit/${user.id}`).send({
          user: user,
          username: "newuser2",
          avatar: "new avatar",
          bio: "new bio"
        });

        expect(response.statusCode).toBe(200);
        });
});