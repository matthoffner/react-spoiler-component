 react-spoiler-component

React spoiler component is a component API that allows you to manage a server rendered loading component with a suspended one.

Using a Spoiler Component provides a more immediate loading experience for pages with dynamic imports or slow network calls.

## Usage:

```
yarn add react-spoiler-component
```

```
import React, { Component, Fragment, Suspense } from 'react';
import { bool, func } from 'prop-types';
import Spoiler from 'react-spoiler-component ';
import SlowComponent from './slow-component';

const LoadingComponent = "<div>Loading...</div>";

export default class SlowComponentLoader extends Component {
    static propTypes = {
        fetchModal: func,
        slowComponentIsLoaded: bool
    };
    componentDidMount() {
        this.props.fetchModal();
    }
    render() {
        return (
            <Spoiler
                shell={<LoadingComponent />}
                selector={'loading-component-id'}
                live={this.props.slowComponentIsLoaded}
            >
                <Suspense fallback={<LoadingComponent />}> 
                    <SlowComponent />
                </Suspense>
            </Spoiler>
        );
    }
}
```

## How it works

`SpoilerComponent` is just a server rendered component with a promise that only runs on the client. If the prop set as `live` is true and the server rendered component is loaded then the innerHTML gets cleared.

### Prop Types

- `shell` - react component placeholder that will be server rendered
- `selector` - top level selector that is removed after rendering
- `live` - boolean for determining when component is loaded
- `delayMs` - transition time for removing spoiler component, default is 1000ms

## Inspiration:

- <a href="https://github.com/ctrlplusb/react-async-component/issues/30">SSR + SEO: render on server but defer client loading #30</a>
- <a href="https://github.com/facebook/react/issues/6985">Render component only on the server, without "mounting" on the client #6985</a>
- <a href="https://github.com/theKashey/react-prerendered-component/tree/master/src">React Prerendered Component</a>
