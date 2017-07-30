import React from 'react/addons';
import ScrollSection from '../lib/scroll-section.jsx';

describe('ScrollSection', function() {
  var component;

  beforeEach(function() {
    component = React.addons.TestUtils.renderIntoDocument(
      <ScrollSection/>
    );
  });

  it('should render', function() {
    expect(component.getDOMNode().className).toEqual('scroll-section');
  });
});
