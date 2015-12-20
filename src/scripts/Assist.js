/*!
 * (c) 2015 Jaden Dessureault
 * This code is licensed under MIT license (see LICENSE for details)
 */

import React from 'react';
import ReactDOM from 'react-dom';

// Components
import {UsernameInput} from './components/UsernameInput';

import {Issue} from './components/Issue';
import {IssueList} from './components/IssueList';

import {Repo} from './components/Repo';
import {RepoList} from './components/RepoList';

class Assist extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <UsernameInput />
    );
  }
}

ReactDOM.render(<Assist />, document.getElementById('container'));
