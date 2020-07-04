import { GET_REPOS } from "../actions/types";

const initialState = {
  repos: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_REPOS:
      return {
        repos: action.payload,
      };
    default:
      return state;
  }
}
