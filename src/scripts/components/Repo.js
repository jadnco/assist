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
    let data = this.props.data;

    return (
      <div className='repo'>
        <h2><b>{data.full_name}</b></h2>
        <div className='repo-desc'>{data.description}</div>

        <IssueList issues={data.issues} />
      </div>
    );
  }

}
