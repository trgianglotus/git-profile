import { GET_ORGS, GET_REPOS, GET_ERROR } from "./types";

const initialState = {
  orgs: [],
  repos: [],
  error: "",
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_ORGS:
      return {
        ...state,
        orgs: action.payload,
        error: "",
      };
    case GET_REPOS:
      return {
        ...state,
        repos: action.payload,
        error: "",
      };
    case GET_ERROR:
      return { ...initialState, error: action.payload };
    default:
      return state;
  }
}
