import React from 'react';

import {IssueList} from './IssueList';

export class Repo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let data = this.props.data;

    return (
      <li className='repo'>
        <h2 className='repo-title'><a href={data.html_url} target='_blank'>{data.full_name}</a></h2>
        <span className='repo-stars'>{data.stargazers_count}</span>
        <span className='repo-lang'>{data.language}</span>
        <div className='repo-desc'>{data.description}</div>

        <IssueList issues={data.issues} />
      </li>
    );
  }
}
