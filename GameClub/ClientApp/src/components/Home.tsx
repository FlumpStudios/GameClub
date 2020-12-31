import React from 'react';
import {ImageRotator}  from './ImageRotator'

export class Home extends React.Component {
  static displayName = Home.name;

  render () {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h3>Welcome Game club!!!</h3>        
        <ImageRotator/>
      </div>
    );
  }
}
