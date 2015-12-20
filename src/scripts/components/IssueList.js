import React from 'react';

import {Issue} from './Issue';

export class IssueList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    let issues = this.props.issues;

    return (
      <ul>
        {issues.map(issue => {
          return <Issue key={issue.id} title={issue.title} />;
        })}
      </ul>
    );
  }

}
