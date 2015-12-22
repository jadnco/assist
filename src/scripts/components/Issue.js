/**
 * Issue properties:
 * - Issue name/title
 * - Labels
 * - Comment count
 * - Creator
 * - Open date
 * - Link
 */

import React from 'react';

export class Issue extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let data = this.props.data;
    let labels = data.labels;

    return (
      <div className='issue'>
        <h3>{data.title}</h3>
        <div className='issue-info'>Opened on {data.created_at} by {data.user.login}</div>

        {labels.map(label => {
          return <div color={'#' + label.color}>{label.name}</div>;
        })}
      </div>
    );
  }

}
