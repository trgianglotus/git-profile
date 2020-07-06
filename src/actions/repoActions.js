import { Octokit } from "@octokit/core";
import { GET_REPOS } from "./types";

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
