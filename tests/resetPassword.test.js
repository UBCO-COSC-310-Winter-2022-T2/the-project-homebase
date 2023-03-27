const request = require("supertest");
const { MongoClient } = require("mongodb");
const app = require("../app.js");
const User = require("../models/User");

describe("GET /resetPassword", () => {
    it("should render resetPassword", async () => {
      const response = await request(app).get("/resetPassword");
      expect(response.statusCode).toBe(200);
    });
});