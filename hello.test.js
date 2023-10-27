const hello = require("./hello");
describe("My hello", () => {
  test("works", () => {
    expect(hello.hello()).toEqual("Hello World from Jason Blevins MITCTO October 2023");
  });
});
