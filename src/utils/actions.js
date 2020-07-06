import request from "request";

export const createOrgPromise = (org) => {
  const options = {
    url: `https://api.github.com/orgs/${org.login}`,
    headers: {
      "User-Agent": "request",
    },
  };
  return new Promise((resolve, reject) => {
    request(options, function (error, response, body) {
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

export const compareObjects = (object1, object2) => {
  let equal = true;
  if (object1 === {}) {
    return equal;
  }
  Object.keys(object1[0]).forEach((i) => {
    if (!Object.keys(object2[0]).includes(i)) {
      equal = false;
      return equal;
    }
  });
  return equal;
};
