const request = require("supertest");
const app = require("../app.js");

describe("GET /", () => {
    it("should render index", async () => {
        const response = await request(app).get("/");
        expect(response.statusCode).toBe(200);
    });
});

// describe("GET /home", () => {
//     it("should render home", async () => {
//         const response = await request(app).get("/home");
//         expect(response.statusCode).toBe(200);
//     });

//     it("should render home wi   th username", async () => {
//         const response = await request(app).get("/home").query({username: "test"});
//         expect(response.username).toBe("test");
//         expect(response.statusCode).toBe(200);
//     });
// });
