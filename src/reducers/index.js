import { combineReducers } from "redux";

import repoRducers from "./repoReducers";
import orgReducers from "./orgReducers";

export default combineReducers({
  repos: repoRducers,
  orgs: orgReducers,
});

// export default function (state = initialState, action) {
//   switch (action.type) {
//     case GET_ORGS:
//       return {
//         orgs: action.payload,
//       };
//     case GET_REPOS:
//       return {
//         repos: action.payload,
//       };
//     default:
//       return state;
//   }
// }
