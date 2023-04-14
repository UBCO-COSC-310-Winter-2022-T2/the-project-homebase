const request = require("supertest");
const { MongoMemoryServer } = require("mongodb-memory-server");
const mongoose = require("mongoose");
const app = require("../app.js");
const User = require("../models/User");
const io = require("socket.io-client");

describe("GET /chatRooms /chat", () => {
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

    it("Should render the chatRooms page for a given user", async () => {
        const newUser = new User({
            username: "newuser",
            email: "newuser@example.com",
            password: "newpassword",
            bio: "hello",
        });
        await newUser.save();

        const response = await request(app).get("/chatRooms");
        expect(response.statusCode).toBe(200);
    });

    it("Should render a chat", async () => {
        const response = await request(app).get("/chat");
        expect(response.statusCode).toBe(200);
    });
});

describe("Socket.IO Events", () => {
  let socket;

  beforeAll((done) => {
    // Connect to the Socket.IO server before running any tests
    socket = io.connect("http://localhost:3000");

    // Wait for the socket to connect
    socket.on("connect", () => {
      done();
    });
  });

  afterAll(() => {
    // Disconnect the socket after all tests are done
    socket.disconnect();
  });

  it("Should join a room and receive welcome message", (done) => {
    // Emit "joinRoom" event with mock data
    socket.emit("joinRoom", { username: "John", room: "room1" });

    // Listen for "message" event
    socket.on("message", (message) => {
      // Assert that the message event was received with expected data
      expect(message.username).toBe("Bot");
      expect(message.text).toBe("Welcome to chat");

      done();
    });
  });

  it("Should send chat message and receive the same message", (done) => {
    // Emit "chatMessage" event with mock data
    socket.emit("chatMessage", "Hello, world!");

    // Listen for "message" event
    socket.on("message", (message) => {
      // Assert that the message event was received with expected data
      expect(message.username).toBe("John");
      expect(message.text).toBe("Hello, world!");

      done();
    });
  });

  it("Should disconnect and receive user disconnected message", (done) => {
    // Emit "disconnect" event
    socket.emit("disconnect");

    // Listen for "message" event
    socket.on("message", (message) => {
      // Assert that the message event was received with expected data
      expect(message.username).toBe("Bot");
      expect(message.text).toBe("John disconnected");

      done();
    });
  });
});
