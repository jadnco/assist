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

    return (
      <div className='issue'>
        <h2 className='issue-title'>{data.title}</h2>
        <div className='issue-info'>Opened on {data.date} by {data.creator}</div>
      </div>
    );
  }

}
