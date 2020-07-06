import { Octokit } from "@octokit/core";
import { GET_ORGS, GET_REPOS, GET_ERROR } from "./types";
import { createOrgPromise } from "./utils/actions";

export const getOrgs = (username) => (dispatch) => {
  const octokit = new Octokit();
  octokit
    .request("GET /users/{username}/orgs", {
      username: username,
    })
    .then(async (res) => {
      const promises = [];
      let orgs = [];
      res.data.forEach((org, index) => {
        promises.push(createOrgPromise(org));
      });
      orgs = await Promise.all(promises);
      dispatch({
        type: GET_ORGS,
        payload: orgs,
      });
    })
    .catch((err) => {
      console.log("err");
      dispatch({
        type: GET_ERROR,
        payload: "Profile doesn't exist",
      });
    });
};

export const getRepos = (username) => (dispatch) => {
  const octokit = new Octokit();
  octokit
    .request("GET /users/{username}/repos?per_page=100", {
      username: username,
    })
    .then((res) => {
      dispatch({
        type: GET_REPOS,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log("err");
      dispatch({
        type: GET_ERROR,
        payload: "Profile doesn't exist",
      });
    });
};
