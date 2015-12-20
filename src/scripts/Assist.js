/*!
 * (c) 2015 Jaden Dessureault
 * This code is licensed under MIT license (see LICENSE for details)
 */

// React
import React from 'react';
import ReactDOM from 'react-dom';

// Components
import {UsernameInput} from './components/UsernameInput';

import {Issue} from './components/Issue';
import {IssueList} from './components/IssueList';

import {Repo} from './components/Repo';
import {RepoList} from './components/RepoList';

import {get} from './functions';

class Assist extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: null,
      loading: false,
      ready: false,
      repos: [],
    };
  }

  submitUsername(event) {
    let username = event.target.username.value.trim();

    event.preventDefault();

    // TODO: validation

    this.setState({username: username}, () => this.getRepos());
  }

  getRepos() {
    !this.state.loading && this.setState({loading: true});

    get(`/users/${this.state.username}/starred`, res => {
      this.setState({loading: true, ready: false, repos: res}, () => this.getIssues());
    });
  }

  getIssues() {
    let repos = this.state.repos;

    !this.state.loading && this.setState({loading: true});

    repos.map((repo, i) => {

      //Get the issues of each repo
      get(`/repos/${repo.full_name}/issues`, res => {
        repo.issues.push(res);

        // Modify the state when we get to the last repo
        if (i === repos.length - 1) {
          console.log('All the repos', repos);

          // TODO: Update state

          //this.setState({loading: false, ready: true, repos: repos});
        }
      });
    });
  }

  render() {
    let content = <UsernameInput onSubmit={this.submitUsername.bind(this)} />;

    if (this.state.loading) {
      content = <div>Loading...</div>;
    } else if (this.state.ready) {
      content = <RepoList repos={this.state.repos} />;
    }

    return content;
  }
}

ReactDOM.render(<Assist />, document.getElementById('container'));
