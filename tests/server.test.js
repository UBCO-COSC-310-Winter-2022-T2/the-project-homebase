const request = require("supertest");
const { MongoMemoryServer } = require("mongodb-memory-server");
const mongoose = require("mongoose");
const app = require("../app.js");
const User = require("../models/User");
const Server = require("../models/Server");

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

//Joining and leaving a server
describe("POST /server", () => {
    it("should join a server", async () => {
        const user = new User({
            username: "newuser",
            email: "newuser@example.com",
            password: "newpassword",
            bio: "hello",
            avatar: "https://cdn1.iconfinder.com/data/icons/basic-ui-set-v5-user-outline/64/Account_profile_user_avatar_small-512.png", //TEMP
        });

        await user.save();

        const server = new Server({
            name: "newserver",
            ownerId: user.id,
            channels: [
                {
                    name: "general",
                },
            ],
            members: [{}], //TEMP
        });

        await server.save();

        const response = await request(app)
            .post(`/server/${server.name}/join`)
            .send({ user });

        expect(response.statusCode).toBe(200);
        expect(server.members).toContain(user.id);
    });

    it("should leave a server", async () => {
        const user = new User({
            username: "newuser",
            email: "newuser@example.com",
            password: "newpassword",
            bio: "hello",
            avatar: "https://cdn1.iconfinder.com/data/icons/basic-ui-set-v5-user-outline/64/Account_profile_user_avatar_small-512.png", //TEMP
        });

        await user.save();

        const server = new Server({
            name: "newserver",
            ownerId: user.id,
            channels: [
                {
                    name: "general",
                },
            ],
            members: [user],
        });

        await server.save();

        const response = await request(app)
            .post(`/server/${server.name}/leave`)
            .send({ user });

        expect(response.statusCode).toBe(200);
        expect(server.members).not.toContain(user);
    });

    it("should not join a server that doesn't exist", async () => {
        const user = new User({
            username: "newuser",
            email: "newuser@gmail.com",
            password: "newpassword",
            bio: "hello",
            avatar: "https://cdn1.iconfinder.com/data/icons/basic-ui-set-v5-user-outline/64/Account_profile_user_avatar_small-512.png", //TEMP
        });

        await user.save();

        const response = await request(app)
            .post(`/server/doesntexist/join`)
            .send({ user });

        expect(response.statusCode).toBe(404);
    });

    it("should not leave a server that doesn't exist", async () => {
        const user = new User({
            username: "newuser",
            email: "newuser@gmail.com",
            password: "newpassword",
            bio: "hello",
            avatar: "https://cdn1.iconfinder.com/data/icons/basic-ui-set-v5-user-outline/64/Account_profile_user_avatar_small-512.png", //TEMP
        });

        await user.save();

        const response = await request(app)
            .post(`/server/doesntexist/leave`)
            .send({ user });

        expect(response.statusCode).toBe(404);
    });

    it("should be able to create a server", async () => {
        const user = new User({
            username: "newuser",
            email: "newuser@gmail.com",
            password: "newpassword",
            bio: "hello",
            avatar: "https://cdn1.iconfinder.com/data/icons/basic-ui-set-v5-user-outline/64/Account_profile_user_avatar_small-512.png", //TEMP
        });
        
        const serverName = "newserver"; 
        
        await user.save();

        const response = await request(app)
            .post("/server/create")
            .send({ user }, serverName);

        expect(response.statusCode).toBe(200);
        
        const server = await Server.findOne({ name: serverName });
        expect(server).toBeDefined();
        expect(server.ownerId).toBe(user.id);
    });

    it("should not be able to create a server with an existing name", async () => {
        const user = new User({
            username: "newuser",
            email: "newuser@gmail.com",
            password: "newpassword",
            bio: "hello",
            avatar: "https://cdn1.iconfinder.com/data/icons/basic-ui-set-v5-user-outline/64/Account_profile_user_avatar_small-512.png", //TEMP
        });

        const server = new Server({
            name: "newserver",
            ownerId: user.id,
            channels: [
                {
                    name: "general",
                },
            ],
            members: [user],
        });

        await server.save();
        await user.save();

        const response = await request(app)
            .post("/server/create")
            .send({ user }, "newserver");
        
        expect(response.statusCode).toBe(400);
    });

    it("should be able to delete a server", async () => {
        const user = new User({
            username: "newuser",
            email: "newuser@gmail.com",
            password: "newpassword",
            bio: "hello",
            avatar: "https://cdn1.iconfinder.com/data/icons/basic-ui-set-v5-user-outline/64/Account_profile_user_avatar_small-512.png", //TEMP
        });

        const server = new Server({
            name: "newserver",
            ownerId: user.id,
            channels: [
                {
                    name: "general",
                },
            ],
            members: [user],
        });

        await server.save();
        await user.save();

        const response = await request(app)
            .post("/server/delete")
            .send({ user }, serverName);

        expect(response.statusCode).toBe(200);
        expect(server).not.toBeDefined();
    });

    it("should not be able to delete a server that doesn't exist", async () => {
        const user = new User({
            username: "newuser",
            email: "newuser@gmail.com",
            password: "newpassword",
            bio: "hello",
            avatar: "https://cdn1.iconfinder.com/data/icons/basic-ui-set-v5-user-outline/64/Account_profile_user_avatar_small-512.png", //TEMP
        });

        await user.save();

        const response = await request(app)
            .post("/server/delete")
            .send({ user }, "doesntexist");
        
        expect(response.statusCode).toBe(404);
    });
});
