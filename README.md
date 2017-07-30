# scroll section

Get the AMD module located at `scroll-section.js` and include it in your project.

Here is a sample integration:

```js
require.config({
  paths: {
    'react': 'vendor/bower_components/react/react',
    'ScrollSection': 'scroll-section'
  }
});

require(['react', 'ScrollSection'], function(React, ScrollSection) {

  React.render(React.createElement(ScrollSection), document.getElementById('widget-container'));

});
```

## Development

* Development server `npm start`.
* Continuously run tests on file changes `npm run watch-test`;
* Run tests: `npm test`;
* Build `npm run build`;
