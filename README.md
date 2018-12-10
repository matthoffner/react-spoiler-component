# react-spoiler-component

React spoiler component allows you to server render html and support removing the html after client rendering. Warning, this is pretty hacky and will eventually be done much better in future versions of React.

Using a Spoiler Component provides a more immediate loading experience for pages with dynamic imports or slow network calls.

## Usage:

```
yarn add react-spoiler-component
```

```
import React, { Component, Fragment } from 'react';
import { bool, func } from 'prop-types';
import Spoiler from 'react-async-component';
import SuspenseModal from './suspense-modal';

const Skeleton = "<div>Loading...</div>";

export default class Modal extends Component {
    static propTypes = {
        fetchModal: func,
        showModal: bool
    };
    componentDidMount() {
        this.props.fetchModal();
    }
    render() {
        return (
            <Fragment>
                <div data-spoiler-component="spoiler">
                    <Spoiler
                        html={Skeleton}
                        selector={'[data-spoiler-component=spoiler]'}
                        live={this.props.showModal}
                    />
                </div>
                <SuspenseModal />
            </Fragment>
        );
    }
}
```

## How it works

`SpoilerComponent` is just a server rendered component with a promise that only runs on the client. If the prop set as `live` is true and the server rendered component is loaded then the innerHTML gets cleared.

### Prop Types

- `html` - html string that is server rendered
- `selector` - top level selector that is removed after rendering
- `live` - boolean for determining when component is loaded
- `delayMs` - transition time for removing spoiler component, default is 1000ms

## Inspiration:

- <a href="https://github.com/ctrlplusb/react-async-component/issues/30">SSR + SEO: render on server but defer client loading #30</a>
- <a href="https://github.com/facebook/react/issues/6985">Render component only on the server, without "mounting" on the client #6985</a>
- <a href="https://github.com/theKashey/react-prerendered-component/tree/master/src">React Prerendered Component</a>
