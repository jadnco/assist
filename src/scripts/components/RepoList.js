import React from 'react';

import {Repo} from './Repo';

export class RepoList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let repos = this.props.repos;

    return (
      <ul>
        {repos.map(repo => {
          return <Repo key={repo.id} data={repo} />;
        })}
      </ul>
    );
  }
}
