import * as types from '../constants';

export function screenResize(width) {
  return {
    type: types.SCREEN_RESIZE,
    width,
  };
}

export function toggleNav() {
  return {
    type: types.TOGGLE_NAV,
  };
}

export function scrolledNav() {
  return {
    type: types.SCROLLED_NAV,
  };
}

export function filterStudies(filtered, activeTag) {
  return {
    type: types.FILTER_STUDIES,
    filtered,
    activeTag,
  };
}

export function fetchCaseStudies(data) {
  return {
    type: types.FETCH_CASE_STUDIES,
    data,
  };
}

export function setTags(tags) {
  return {
    type: types.SET_TAGS,
    tags,
  };
}
