import React from 'react';
import { connect } from 'react-redux';
import data from '../data.json';
import CaseStudyItem from './CaseStudyItem';
import Tag from './Tag';
import {
  screenResize,
  fetchCaseStudies,
  setTags,
  scrolledNav,
} from '../actions';

class CaseStudy extends React.Component {
  componentDidMount() {
    window.addEventListener('resize', this.updateDimensions.bind(this));
    window.addEventListener('scroll', () => {
      let isTop = window.scrollY < 100;
      if(isTop !== this.props.data.isTop) {
        return this.props.scrolledNav();
      }
    })
    setTimeout(() => {
      this.props.fetchCaseStudies(data);
    }, 2000);
    this.props.setTags(["All", "Digital Marketing", "Analytics", "UX & Design", "Web Development"]);
  }
  filterArray(arr) {
    arr.filter((item, index) => {
      return arr.indexOf(item) === index
    })
  }
  updateDimensions() {
    this.props.screenResize(window.innerWidth);
  }
  render() {
    let tags = [];
    if(this.props.data.isLoading) {
      return <span>Loading...</span>
    }
    return (
      <div className="case_study">
        <div className="case_study__tags">
          {this.props.data.tags.map((tag, key) =>
            <Tag
              data={this.props.data.caseStudies}
              tag={tag}
              activeTag={this.props.data.activeTag === tag}
              title={tag}
              key={key} />)}
        </div>
        <div className="case_study__grid">
          {this.props.data.caseStudies.map((item, key) => {
            if(!item.isFiltered) {
              return (
                <CaseStudyItem
                  title={item.title}
                  picture={item.picture}
                  tags={item.tags}
                  key={key} />
              );
            }
          }
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ data }) => ({
  data,
});

const mapDispatchToProps = {
  screenResize,
  fetchCaseStudies,
  setTags,
  scrolledNav,
};

export default connect(mapStateToProps, mapDispatchToProps)(CaseStudy);
