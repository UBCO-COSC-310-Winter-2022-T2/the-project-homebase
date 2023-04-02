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