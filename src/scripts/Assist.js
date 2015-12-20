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

    this.state = {
      repos: [
        {
          id: 1,
          name: 'Cool repo one',
          desc: 'This is the repo description. It is nothing but some text',
          issues: [
            {id: 1, title: 'this is issue #195', creator: 'Jaden Dessureault'},
            {id: 2, title: 'Some other issue'},
          ],
        },
        {
          id: 2,
          name: 'Yo another repo',
          desc: 'Another cool repo that does very cool things',
          issues: [
            {id: 1, title: 'Some very interesting issue'},
            {id: 2, title: 'Someone help this issue out'},
          ],
        },
      ],
    };
  }

  render() {
    return (
      <div>
        <RepoList repos={this.state.repos} />
      </div>
    );
  }
}

ReactDOM.render(<Assist />, document.getElementById('container'));
