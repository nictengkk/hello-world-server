const request = require("supertest");
const app = require("./app");

describe("Name of the group", () => {
  test("should return Hello with status code 200", done => {
    request(app)
      .get("/")
      .expect(200)
      .expect("Hello", done);
  });

  test("should return welcome students with status code 200", async () => {
    await request(app)
      .get("/students")
      .expect(200)
      .expect("welcome students");
  });

  //use return, they know to wait for the async to return.
  test("should return welcome students with status code 200", () => {
    return request(app)
      .get("/students")
      .expect(200)
      .expect("welcome students");
  });
});
