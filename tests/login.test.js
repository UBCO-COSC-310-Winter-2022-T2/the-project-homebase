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

// describe("POST /resetPassword", () => {
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
