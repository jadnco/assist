import React from 'react';

export class UsernameInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      placeholder: 'Enter your GitHub username',
    };
  }

  submit(event) {
    event.preventDefault();
    console.log(event.target);
  }

  render() {
    console.log(this);
    return (
      <form id='start-form' onSubmit={this.submit}>
        <input type='text' className='username-input' placeholder={this.state.placeholder} />
        <input type='submit' />
      </form>
    );
  }

}
