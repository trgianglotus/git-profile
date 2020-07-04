# Project plan

1. Objectives
2. Scope
3. Tools
4. Dev plan
5. Tests
6. Deployment

## 1. Objectives

https://github.com/trgianglotus/perx-react-interview

## 2. Scope

2.1 Github API

| Endpoint               |            Purpose            |                                                                             |
| ---------------------- | :---------------------------: | --------------------------------------------------------------------------- |
| /users/:username/orgs  | List organizations for a user | [Link](https://developer.github.com/v3/orgs/#list-organizations-for-a-user) |
| /users/:username/repos | List repositories for a user  | [Link](https://developer.github.com/v3/repos/#list-repositories-for-a-user) |

base:

```
https://api.github.com/
```

Js :

```js
await octokit.request("GET /users/{username}/repos", {
  username: "username",
});
```

```js
await octokit.request("GET /users/{username}/orgs", {
  username: "username",
});
```

## 3. Tools

React
