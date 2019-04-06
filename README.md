 react-spoiler-component

WIP Server render wrapper for React Suspense and lazy

## Usage:

```
yarn add react-spoiler-component
```

```
import React from 'react';
import SlowComponent from './slow-component';
import Spoiler from 'react-spoiler-component';

function LoadingComponent() {
    return (
        <div>Loading...</div>
    );
}

export default function SlowComponentLoader() {
    return (
        <Spoiler path="./slow-component-to-load" selector="loading-component-selector">
            <LoadingComponent />
        </Spoiler>
    );
}
```

### Prop Types

- `selector` - top level selector that is removed after rendering
- `path` - path of component that is passed to lazy and rendered

## Inspiration:

- <a href="https://github.com/ctrlplusb/react-async-component/issues/30">SSR + SEO: render on server but defer client loading #30</a>
- <a href="https://github.com/facebook/react/issues/6985">Render component only on the server, without "mounting" on the client #6985</a>
- <a href="https://github.com/theKashey/react-prerendered-component/tree/master/src">React Prerendered Component</a>
