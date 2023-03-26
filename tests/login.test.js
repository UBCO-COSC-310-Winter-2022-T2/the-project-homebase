const request = require("supertest");
const { MongoClient } = require("mongodb");
const app = require("../app.js");
const User = require("../models/User");

describe("GET /login", () => {
  it("should render login", async () => {
    const response = await request(app).get("/login");
    expect(response.statusCode).toBe(200);
  });
});

describe("GET /deleteAccount", () => {
  it("should render deleteAccount", async () => {
    const response = await request(app).get("/deleteAccount");
    expect(response.statusCode).toBe(200);
  });
});

describe("GET /forgotPassword", () => {
  it("should render forgotPassword", async () => {
    const response = await request(app).get("/forgotPassword");
    expect(response.statusCode).toBe(200);
  });
});

describe("POST /registerPage", () => {
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

    const response = await request(app).post("/registerPage").send(newUser);

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

    const response = await request(app).post("/registerPage").send(anotherUser);

    expect(response.statusCode).toBe(200);

    const response2 = await request(app).post("/registerPage").send(anotherUser);

    expect(response2.statusCode).toBe(400);
  });
});

// describe("POST /forgotPassword", () => {
//   let connection;
//   let db;

//   beforeAll(async () => {
//     // connect to a new in-memory database before running any tests
//     connection = await MongoClient.connect(globalThis.__MONGO_URI__, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     db = await connection.db(globalThis.__MONGO_DB_NAME__);
//   });

//   afterAll(async () => {
//     // clear database and close connection
//     await User.deleteMany({});
//     await connection.close();
//   });
// });