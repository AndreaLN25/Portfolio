// src/components/WorkItem.jsx
import React from 'react';

const WorkItem = ({ year, title, duration, details }) => {
  return (
    <div section id='work-item'>
      <ol>
        <ul className='work-item-list-item'>
          <div className='work-item-circle' />
          <p className='work-item-details'>
            <span className='work-item-year'>{year}</span>
            <span className='work-item-title'>{title}</span>
            <span className='work-item-duration'>{duration}</span>
          </p>
          <p className='work-item-description'>{details}</p>
        </ul>
      </ol>
    </div>
  );
};

export default WorkItem;
