import { SORT_ASC } from '../actions/types';

export default function(state = { sortByAsc: false }, action) {  
  switch (action.type) {
    case SORT_ASC:
      return { sortByAsc: !state.sortByAsc };
    default:
      return state;
  }
}