import React from 'react';

import {LabelList} from './LabelList';

import {formatDate} from '../functions';

export class Issue extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let data = this.props.data;
    let user = data.user;

    return (
      <li className='issue'>
        <h3><a href={data.html_url} target='_blank'>{data.title}</a></h3>
        <div className='issue-info'>
          Opened on {formatDate(data.created_at) + ' '}
          by <a href={user.html_url} target='_blank'>{user.login}</a>
        </div>
        <LabelList labels={data.labels} />
      </li>
    );
  }
}
