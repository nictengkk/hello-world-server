const request = require("supertest");
// const students = require("../../routes/students");
const app = require("../../app");

const studentsData = [
  { name: "Bob", subjects: ["science", "math"] },
  { name: "Marley", subjects: ["art", "english"] },
  { name: "Cry", subjects: ["history", "english"] }
];

describe("Students", () => {
  describe("/students", () => {
    let route = "/students";
    test("Gets all students", () => {
      return request(app)
        .get(route)
        .expect(200)
        .expect("Content-type", /json/) //expect is part of superTest
        .expect(studentsData);
    });

    test("Adds a new student", () => {
      return (
        request(app)
          .post(route)
          .send({ name: "Tom" }) //setting fake data
          .set("Accept", "application/json") //when do we use set? set is an API method for SuperAgent lib.
          .expect(201)
          //.then(res => {
          //expect(res.body.id).toEqual(expect.any(String)) //Jest syntax
          //expect(res.subjects).toEqual(expect.any(Array)) //Jest syntax
          //expect(res.body.name).toEqual("bobun") //Jest syntax
          //})
          .expect({ id: "123", name: "Tom" })
      ); //superTest syntax
    });
  });

  describe("/students/123", () => {
    let route = "/students/123";
    test("Update a student's name", async () => {
      await request(app)
        .put(route)
        .send({ name: "Alfred" })
        // .set("Content-type", /json/)
        .expect(202)
        .expect({ name: "Alfred" });
    });

    test("Delete a student's record", async () => {
      await request(app)
        .delete(route)
        .expect(202);
    });
  });
});
