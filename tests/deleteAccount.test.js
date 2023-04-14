const request = require("supertest");
const { MongoMemoryServer } = require("mongodb-memory-server");
const mongoose = require("mongoose");
const app = require("../app.js");
const User = require("../models/User");

let connection;

beforeAll(async () => {
    // Connect to a new in-memory database before running any tests
    mongo = await MongoMemoryServer.create();
    const uri = mongo.getUri();

    connection = await mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
});

afterAll(async () => {
    // Clear database and close connection
    await mongoose.connection.dropDatabase();
    await mongoose.connection.close();
    await mongo.stop();
});

describe("GET /deleteAccount", () => {
    it("should render deleteAccount", async () => {
        const response = await request(app).get("/deleteAccount");
        expect(response.statusCode).toBe(200);
    });
});

//Should delete the user from the database
describe("POST /deleteAccount", () => {
    it("should delete the user from the database", async () => {
        // Create a new user in the database
        const newUser = {
            username: "newuser",
            email: "newuser@example.com",
            password: "newpassword",
        };

        let response = await request(app).post("/register").send(newUser);
        expect(response.statusCode).toBe(200);

        let user = await User.findOne({ email: newUser.email });
        expect(user).toBeDefined();
        expect(user.username).toBe(newUser.username);
        expect(user.password).toBe(newUser.password);

        // Delete the user from the database
        response = await request(app).post("/deleteAccount").send(newUser);
        expect(response.statusCode).toBe(200);

        user = await User.findOne({ email: newUser.email });
        expect(user).toBeNull();
    });
});
