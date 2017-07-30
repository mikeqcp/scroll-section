# scroll-section

React component that detects when it is in the middle of the viewport.

```js
import Section from 'scroll-section';

// ...

<Section
  className="your-classname"
  onBecomeActive={() => onBecomeActive()}
>
  // any section content
</Section>

// ...
```

### Options
* onBecomeActive [function]: is invoked when the section becomes active
