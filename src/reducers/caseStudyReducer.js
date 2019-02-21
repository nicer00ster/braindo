import * as types from '../constants';

const initialState = {
  screenWidth: typeof window === 'object' ? window.innerWidth : null,
  navOpen: false,
  isTop: true,
  caseStudies: [],
  activeTag: 'All',
  tags: [],
  isLoading: true,
  error: false,
};

export default function caseStudyReducer(state = initialState, action = {}) {
  switch (action.type) {
    case types.SCREEN_RESIZE:
      return Object.assign({}, state, {
        screenWidth: action.width,
    });
    case types.SCROLLED_NAV:
      return {
        ...state,
        isTop: !state.isTop,
      }
    case types.TOGGLE_NAV:
      return {
        ...state,
        navOpen: !state.navOpen,
      }
    case types.FETCH_CASE_STUDIES:
      return {
        ...state,
        isLoading: false,
        caseStudies: action.data,
        activeTag: 'All',
      }
    case types.FILTER_STUDIES:
      return {
        ...state,
        caseStudies: state.caseStudies.map(item => {
          if(item._id === action.filtered._id) {
            return {
              ...item,
              isFiltered: true,
            }
          } else {
            return item;
          }
        }),
        activeTag: action.activeTag,
      }
    case types.SET_TAGS:
      return {
        ...state,
        tags: action.tags,
      }
    default:
      return state;
  }
}
