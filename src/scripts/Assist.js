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

    this.labels = [
      'help wanted',
      // 'help-wanted',
      // 'fix wanted',
    ].join(',');

    this.state = {
      username: null,
      loading: false,
      ready: false,
      limited: false,
      error: null,
      repos: [],
    };
  }

  submitUsername(event) {
    let username = event.target.username.value.trim();

    event.preventDefault();

    if (!username.length) {
      this.setState({error: 'Please type in a username.'});

      return;
    }

    this.setState({username: username}, () => this.getRepos());
  }

  getRepos() {
    get(`/users/${this.state.username}/starred?per_page=100`, (res, err) => {

      // Rate limit reached
      if (err && err === 403) {
        this.setState({limited: true, error: 'Rate limit reached.'});

        return;
      }

      this.setState({ready: false, repos: res}, () => this.getIssues());
    });
  }

  getIssues() {
    let repos = this.state.repos;
    let length = repos.length;

    repos.map((repo, i) => {

      // Don't send a request if there are no issues
      if (repo.open_issues_count > 0) {

        if (!this.state.limited) {

          // Get the issues of each repo
          get(`/repos/${repo.full_name}/issues?labels=${this.labels}`, (res, err) => {

            // Rate limit reached
            if (err && err === 403) {
              this.setState({limited: true, error: 'Rate limit reached.'});

              return;
            }

            repo.issues = res;

            // Modify the state when we get to the last repo
            if (i === length - 1) {
              repos = repos.filter(this.hasIssues);

              this.setState({ready: true, repos: repos});
            }
          });
        }
      }
    });
  }

  hasIssues(repo) {
    return !!repo.issues && repo.issues.length > 0;
  }

  render() {
    let error = this.state.error;
    let loading = this.state.loading;
    let content = <UsernameInput error={error} loading={loading} onSubmit={this.submitUsername.bind(this)} />;

    if (this.state.ready) {
      content = <RepoList repos={this.state.repos} />;
    }

    return content;
  }
}

ReactDOM.render(<Assist />, document.getElementById('container'));
