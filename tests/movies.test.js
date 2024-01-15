const request = require("supertest");
const app = require("../app");

describe("GET /api/movies", () => {
it("should return all movies", async () => {
const response = await request(app).get("/api/movies");

expect(response.headers["content-type"]).toMatch(/json/);
expect(response.status).toEqual(200);
});
});

describe("GET /api/movies/:id", () => {
it("should return status 200 for valid movie ID", async () => {
    const response = await request(app).get("/api/movies/1");
    expect(response.status).toBe(200);
    expect(response.headers["content-type"]).toMatch(/json/);
});


it("should return status 404 for invalid movie ID", async () => {
    const response = await request(app).get("/api/movies/0");
    expect(response.status).toBe(404);
});
});
