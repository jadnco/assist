import React from 'react';
import {expect} from 'chai';

import {shallow} from 'enzyme';

// Components
import {Repo} from '../src/scripts/components/Repo';
import {RepoList} from '../src/scripts/components/RepoList';

import {Issue} from '../src/scripts/components/Issue';
import {IssueList} from '../src/scripts/components/IssueList';

import {Label} from '../src/scripts/components/Label';
import {LabelList} from '../src/scripts/components/LabelList';

// Data
import repos from './repos';

describe('<RepoList />', () => {
  const wrapper = shallow(<RepoList repos={repos} />);

  it('renders at least one <Repo /> component', () => {
    expect(wrapper.find(Repo)).to.have.length.of.at.least(1);
  });
});

describe('<Repo />', () => {
  const wrapper = shallow(<Repo data={repos[0]} />);

  it('renders one <IssueList /> component', () => {
    expect(wrapper.find(IssueList)).to.have.length(1);
  });

  it('has a data property object', () => {
    expect(wrapper.instance().props.data).to.be.an('object');
  });

  it('has necessary data keys', () => {
    const keys = [
      'html_url',
      'full_name',
      'stargazers_count',
      'language',
      'description',
      'issues',
    ];

    expect(wrapper.instance().props.data).to.contain.all.keys(keys);
  });
});

describe('<IssueList />', () => {
  const wrapper = shallow(<IssueList issues={repos[0].issues} />);

  it('renders at least one <Issue /> component', () => {
    expect(wrapper.find(Issue)).to.have.length.of.at.least(1);
  });
});

describe('<Issue />', () => {
  const wrapper = shallow(<Issue data={repos[0].issues[0]} />);

  it('renders one <LabelList /> component', () => {
    expect(wrapper.find(LabelList)).to.have.length(1);
  });

  it('has a data property object', () => {
    expect(wrapper.instance().props.data).to.be.an('object');
  });

  it('has necessary data keys', () => {
    const keys = [
      'html_url',
      'title',
      'created_at',
      'user',
      'labels',
    ];

    expect(wrapper.instance().props.data).to.contain.all.keys(keys);
  });
});

describe('<LabelList />', () => {
  const wrapper = shallow(<LabelList labels={repos[0].issues[0].labels} />);

  it('renders at least one <Label /> component', () => {
    expect(wrapper.find(Label)).to.have.length.of.at.least(1);
  });
});

describe('<Label />', () => {
  const wrapper = shallow(<Label data={repos[0].issues[0].labels[0]} />);

  it('has a data property object', () => {
    expect(wrapper.instance().props.data).to.be.an('object');
  });

  it('has necessary data keys', () => {
    const keys = [
      'color',
      'name',
    ];

    expect(wrapper.instance().props.data).to.contain.all.keys(keys);
  });
});
