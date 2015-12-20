/**
 * Repo Properties:
 * - title/name
 * - author
 * - Star count
 * - fork count
 * - description
 * - website
 * - many issues (IssueList)
 * - Link
 */

import React from 'react';

import {IssueList} from './IssueList';

export class Repo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='repo'>
        <h2><b>{this.props.name}</b></h2>
        <IssueList issues={this.props.issues} />
      </div>
    );
  }

}
