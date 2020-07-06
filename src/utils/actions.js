import request from "request";

export const createOrgPromise = (org) => {
  return new Promise((resolve, reject) => {
    request(`https://api.github.com/orgs/${org.login}`, function (
      error,
      response,
      body
    ) {
      if (error) reject(error);
      else resolve(JSON.parse(body));
    });
  });
};

export const createOrgPromises = async (data) => {
  const promises = [];
  let orgs = [];
  data.forEach((org, index) => {
    promises.push(createOrgPromise(org));
  });
  orgs = await Promise.all(promises);
};
