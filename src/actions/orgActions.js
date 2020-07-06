import { Octokit } from "@octokit/core";
import { GET_ORGS } from "./types";
import request from "request";

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
        promises.push(
          new Promise((resolve, reject) => {
            request(`https://api.github.com/orgs/${org.login}`, function (
              error,
              response,
              body
            ) {
              if (error) reject(error);
              else resolve(JSON.parse(body));
            });
          })
        );
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
