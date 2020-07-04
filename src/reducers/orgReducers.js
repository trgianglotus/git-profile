import { GET_ORGS } from "../actions/types";

const initialState = {
  orgs: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_ORGS:
      return {
        repos: action.payload,
      };
    default:
      return state;
  }
}
