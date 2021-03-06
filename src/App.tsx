import React, { Component } from 'react';
import './App.scss';
import { SkillsSegment } from './views/SkillsSegment';
import { TopSegment } from './views/TopSegment';
import { ProjectsSegment } from './views/ProjectsSegment';
import { ContactSegment } from './views/ContactSegment';
import { MoreSegment } from './views/MoreSegment';

class App extends Component {
  render(): React.ReactNode {
    return (
      <div className='relative overflow-x-hidden'>
        {/* <MasterScroll></MasterScroll> */}
        <TopSegment></TopSegment>
        <SkillsSegment></SkillsSegment>
        <ProjectsSegment></ProjectsSegment>
        <MoreSegment></MoreSegment>
        <ContactSegment></ContactSegment>
      </div>
    )
  }
}

export default App;
