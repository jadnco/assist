/**
 * Issue properties:
 * - Issue name/title
 * - Labels
 * - Comment count
 * - Creator
 * - Open date
 * - Link
 */

import React from 'react';

export class Label extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let data = this.props.data;

    return (
      <li className='issue-label' style={{borderBottom: '2px solid #' + data.color}}>{data.name}</li>
    );
  }

}
