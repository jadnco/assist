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

import {LabelList} from './LabelList';

export class Issue extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let data = this.props.data;

    return (
      <div className='issue'>
        <h3><a href={data.html_url} target='_blank'>{data.title}</a></h3>
        <div className='issue-info'>Opened on {data.created_at} by {data.user.login}</div>
        <LabelList labels={data.labels} />
      </div>
    );
  }

}
