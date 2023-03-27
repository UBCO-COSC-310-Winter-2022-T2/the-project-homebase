const request = require("supertest");
const { MongoClient } = require("mongodb");
const app = require("../app.js");
const User = require("../models/User");

describe("GET /deleteAccount", () => {
    it("should render deleteAccount", async () => {
      const response = await request(app).get("/deleteAccount");
      expect(response.statusCode).toBe(200);
    });
});