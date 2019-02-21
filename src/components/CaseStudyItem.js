import React from 'react';

const CaseStudyItem = props =>
  <div className="case_study__grid--item">
    <img src={props.picture} alt={props.title} />
    <h4>{props.tags.join(', ')}</h4>
    <h2>{props.title}</h2>
  </div>

export default CaseStudyItem;
