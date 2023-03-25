const sum = require('../app.js');
const request = require('supertest');

beforeAll(done => {
    done()
})
  
afterAll(done => {
    // Closing the DB connection allows Jest to exit successfully.
    mongoose.connection.close()
    done()
})

// Test test lol
test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});

