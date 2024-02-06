const test = require("node:test");
const assert = require("node:assert");
const { listStudentsWithProjects } = require("../model.js");

test("can list all students with locations", () => {
  const students = listStudentsWithProjects();
  const expected = [
    { name: "FACX Machine", student_username: "oliverjam" },
    { name: "FACX Machine", student_username: "yvonne-liu" },
    { name: "Hamster Hotel", student_username: "oliverjam" },
    { name: "Hamster Hotel", student_username: "starsuit" },
    { name: "Agony Yaunt", student_username: "starsuit" },
    { name: "Agony Yaunt", student_username: "bobbysebolao" },
  ];
  assert.deepEqual(students, expected);
});
