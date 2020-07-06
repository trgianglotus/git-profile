import chai from "chai";
import { Octokit } from "@octokit/core";

import { createOrgPromise, compareObjects } from "../../utils/actions";
import testOrgs from "../data/orgs.json";
import reducers from "../../reducers";
import * as types from "../../types";

const expect = chai.expect;
const should = chai.should();

const promises = [];
const state = {
  orgs: [],
  repos: [],
  error: "",
};

let newState = null;
let response = null;
let orgs = [];

describe("Organizations", function () {
  describe("Actions", function () {
    before(async function () {
      const username = "nick";
      const octokit = new Octokit();
      response = await octokit.request("GET /users/{username}/orgs", {
        username: username,
      });
    });

    it("should have the same structure as server's response", function () {
      response.status.should.equal(200);
      compareObjects(response.data, testOrgs).should.equal(true);
    });

    it("should create promises and get data", async function () {
      testOrgs.forEach((org, index) => {
        promises.push(createOrgPromise(org));
      });
      orgs = await Promise.all(promises);
      orgs.length.should.equal(2);
    });
  });
  describe("Reducers", function () {
    it("should update state", function () {
      newState = reducers(state, {
        type: types.GET_ORGS,
        payload: orgs,
      });
      newState.should.deep.equal({
        orgs: orgs,
        repos: [],
        error: "",
      });
    });
  });
});
