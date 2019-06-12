import { STORY_ARCHIVE } from "../constants/actionTypes";

const INITIAL_STATE = [];

function applyArchiveStory(state, action) {
  return [...state, action.id];
}

function archiveReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case STORY_ARCHIVE:
      return applyArchiveStory(state, action);
    default:
      return state;
  }
}

export default archiveReducer;
