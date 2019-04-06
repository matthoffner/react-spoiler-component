import React from 'react';
import Spoiler from '../src/index';

const Loading = () => {
    return (
        <div id="test">Loading...</div>
    );
};

test('No prop type errors', () => {
    const component = <Spoiler path="./test/component.js" selector="test"><Loading /></Spoiler>;
    expect(component).toMatchSnapshot();
});