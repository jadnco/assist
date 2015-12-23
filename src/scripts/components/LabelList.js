import React from 'react';

import {Label} from './Label';

export class LabelList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let labels = this.props.labels || [];

    return (
      <ul>
        {labels.map((label, i)=> {
          return <Label key={i} data={label} />;
        })}
      </ul>
    );
  }

}
