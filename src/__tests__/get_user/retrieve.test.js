describe("GET /users/:id", () => {
  it("should get a user by id", async () => {
    const user = await User.create({
      name: "Jane Doe",
      email: "janedoe@example.com",
    });

    const response = await request(app).get(`/users/${user.id}`);

    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty("id", user.id);
    expect(response.body).toHaveProperty("name", user.name);
    expect(response.body).toHaveProperty("email", user.email);
  });
});
