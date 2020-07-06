import { GET_ORGS, GET_REPOS } from "./types";

const initialState = {
  orgs: [],
  repos: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_ORGS:
      return {
        ...state,
        orgs: action.payload,
      };
    case GET_REPOS:
      return {
        ...state,
        repos: action.payload,
      };
    default:
      return state;
  }
}
