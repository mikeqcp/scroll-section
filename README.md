# scroll-section

React component that detects when it is in the middle of the viewport.

```js
import Section from 'scroll-section';

// ...

<Section
  className="your-classname"
  onBecomeActive={() => onBecomeActive()}
  onBecomeInactive={() => onBecomeInactive()}
>
  // any section content
</Section>

// ...
```

### Options
* onBecomeActive [function]: is called when the section becomes active
* onBecomeInactive [function]: is called when the section becomes inactive
