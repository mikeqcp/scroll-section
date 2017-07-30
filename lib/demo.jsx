import React, { Component } from 'react';
import Section from './scroll-section.jsx';

export default class Demo extends Component {
  renderSection(content, id) {
    return (
      <Section
        className="section"
        key={id}
        onBecomeActive={() => {console.log(`${id} become active`)}}
        onBecomeInactive={() => {console.log(`${id} become inactive`)}}
      >
        {content}
      </Section>
    );
  }

  render() {
    return (
      <div>
        {Array.from(Array(5).keys()).map(this.renderSection)}
      </div>
    );
  }
}
