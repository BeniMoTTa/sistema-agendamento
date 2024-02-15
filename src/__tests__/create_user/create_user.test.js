const request = require("supertest");
const app = require("../../app");

import { User } from "../models/User";

describe("POST /users", () => {
  it("should create a new user", async () => {
    const user = {
      name: "John Doe",
      email: "johndoe@example.com",
    };

    const response = await request(app).post("/users").send(user);

    expect(response.statusCode).toBe(201);
    expect(response.body).toHaveProperty("id");
    expect(response.body).toHaveProperty("name", user.name);
    expect(response.body).toHaveProperty("email", user.email);
  });
});
