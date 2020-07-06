import { Octokit } from "@octokit/core";
import { GET_ORGS, GET_REPOS } from "./types";
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
    });
};

export const getRepos = (username) => (dispatch) => {
  const octokit = new Octokit();
  octokit
    .request("GET /users/{username}/repos", {
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
    });
};
