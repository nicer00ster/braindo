import React from 'react';
import { connect } from 'react-redux';

import { filterStudies, fetchCaseStudies } from '../actions';
import data from '../data.json';

class Tag extends React.Component {
  filterStudies(tag, e) {
    this.props.fetchCaseStudies(data);
    this.props.data.map((item, index) => {
      if(!item.tags.includes(e.target.dataset.tag)) {
        this.props.filterStudies(item, e.target.dataset.tag);
      }
    });
  }
  handleClick(tag, e) {
    if(tag === 'All') {
      return this.props.fetchCaseStudies(data);
    } else {
      this.filterStudies(this.props.tag, e);
    }
  }
  render() {
    return (
      <a onClick={e => this.handleClick(this.props.tag, e)}
        data-tag={this.props.tag}
        data-active={this.props.activeTag}
        className={"case_study_tag"}
        href="#">
        {this.props.title}
      </a>
    );
  }
}

const mapDispatchToProps = {
  filterStudies,
  fetchCaseStudies,
};

export default connect(null, mapDispatchToProps)(Tag);
