import React from 'react';

export class UsernameInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      placeholder: 'Enter your GitHub username',
    };
  }

  render() {
    return (
      <form id='start-form' onSubmit={this.props.onSubmit}>
        <input type='text' className='username-input' name='username' placeholder={this.state.placeholder} />
        <input type='submit' />
      </form>
    );
  }

}
