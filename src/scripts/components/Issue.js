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
    return (
      <div className='issue'>
        <h2 className='issue-title'>{this.props.title}</h2>
        <div className='issue-info'>Opened on {this.props.date} by {this.props.creator}</div>
      </div>
    );
  }

}
