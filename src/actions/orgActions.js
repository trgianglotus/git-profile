import { Octokit } from "@octokit/core";
import { GET_ORGS } from "./types";

export const getOrgs = (username) => (dispatch) => {
  const octokit = new Octokit();
  //   dispatch({ type: SET_LOADING_ON });
  octokit
    .request("GET /users/{username}/orgs", {
      username: username,
    })
    .then((res) => {
      console.log(res.data);
      dispatch({
        type: GET_ORGS,
        payload: res.data,
      });
      //   dispatch({ type: SET_LOADING_OFF });
    })
    .catch((err) => {
      console.log("err");
    });
};
