import React, { Component } from 'react';

export default class Body extends Component {
  render() {
    return <body data-spy="scroll" data-target="#navbar" data-offset="98">
      {this.props.children}
    </body>
  }
}