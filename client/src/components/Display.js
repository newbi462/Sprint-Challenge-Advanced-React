import React from 'react';

export const Display = (props) => {
  return (
    <>
    {props.stateProps.fetchmeData.map(function(item, index ) {
        return (
          <>
          <div className="data-card">
            <h2>{item.name}</h2>
            <span>Country: {item.country}</span>
            <span>Searches: {item.searches}</span>
          </div>
          </>
        );
      })}
    </>
  );
};
