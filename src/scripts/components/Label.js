import React from 'react';

export class Label extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let data = this.props.data;

    return (
      <li className='issue-label' style={{borderColor: '#' + data.color}}>{data.name}</li>
    );
  }
}
