import reducers from "../../reducers";
import testRepos from "../data/repos.json";
import * as types from "../../types";

describe("Reducers", () => {
  describe("Repo Reducer", function () {
    it("should return the initial state", function () {
      reducers(undefined, []).should.deep.equal({
        orgs: [],
        repos: [],
        error: "",
      });
    });

    it("should handle GET_REPOS", function () {
      reducers(
        {
          orgs: [],
          repos: [],
          error: "",
        },
        {
          type: types.GET_REPOS,
          payload: testRepos,
        }
      ).should.deep.equal({
        repos: testRepos,
        orgs: [],
        error: "",
      });

      reducers(
        { repos: testRepos[0], orgs: [] },
        {
          type: types.GET_REPOS,
          payload: [testRepos[1]],
        }
      ).should.deep.equal({
        repos: [testRepos[1]],
        orgs: [],
        error: "",
      });
    });
  });
});
