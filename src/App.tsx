import React, { Component } from 'react';
import './App.css';
import { SkillsSegment } from './components/SkillsSegment';
import { TopSegment } from './components/TopSegment';

class App extends Component {
  render(): React.ReactNode {
    return (
      <div>
        <TopSegment></TopSegment>
        <SkillsSegment></SkillsSegment>
      </div>
    )
  }
}

export default App;
