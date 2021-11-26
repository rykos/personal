import React, { Component } from 'react';
import './App.scss';
import { SkillsSegment } from './views/SkillsSegment';
import { TopSegment } from './views/TopSegment';
import { ProjectsSegment } from './views/ProjectsSegment';

class App extends Component {
  render(): React.ReactNode {
    return (
      <div className='relative'>
        {/* <MasterScroll></MasterScroll> */}
        <TopSegment></TopSegment>
        <SkillsSegment></SkillsSegment>
        <ProjectsSegment></ProjectsSegment>
      </div>
    )
  }
}

export default App;
