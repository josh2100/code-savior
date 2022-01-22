const {format_plural, format_date} = require("../utils/helpers");

// Testing that the testing works
var assert = require("assert");

describe("Array", function () {
  describe("#indexOf()", function () {
    it("should return -1 when the value is not present", function () {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
});

// Helpers
describe("format_plural() returns pluralized", () => {
  it("should be plural if amount is not one", () => {
    const word1 = format_plural("comment", 1);
    const word2 = format_plural("post", 2);

    assert(word1 === "comment");
    assert(word2 === "posts");
  });
});

describe("format_date returns date in MM/DD/YYYY format", () => {
    it("should be plural if amount is not one", () => {
      const date = new Date("2020-03-20 16:12:03");
      const formattedDate = format_date(date);
  
      assert(formattedDate === "3/20/2020");
    });
  });

// Quiz
