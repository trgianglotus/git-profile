import chai from "chai";
import { formatDate } from "../../../utils/formatters";

const should = chai.should();

describe("Date Time Formatter", function () {
  it("should return a date time object with valid input", function () {
    const rawText = "2016-02-11T17:27:46Z";
    formatDate(rawText).should.equal("12-Feb-2016");
  });

  it("should return null on a bad date and time", function () {
    const rawText = "bad input %$@";
    should.not.exist(formatDate(rawText));
  });
});
