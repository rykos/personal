import React, { Component } from 'react';
import './App.css';
import { MasterScroll } from './components/MasterScroll';
import { SkillsSegment } from './components/SkillsSegment';
import { TopSegment } from './components/TopSegment';
import { Element } from 'react-scroll';

class App extends Component {
  render(): React.ReactNode {
    return (
      <div>
        <MasterScroll></MasterScroll>
        <TopSegment></TopSegment>
        <SkillsSegment></SkillsSegment>
      </div>
    )
  }
}

export default App;
