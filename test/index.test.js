import React, { Suspense } from 'react';
import renderer from 'react-test-renderer';
import Spoiler from '../src/index';

const Loaded = () => {
    return (
        <div>Loaded!</div>
    );
};

const Loading = () => {
    return (
        <div id="test">Loading...</div>
    );
};

const SlowComponent = () => {
    return (
        <Loaded />
    );
}

test('No prop type errors', () => {
    const component = renderer.create(
        <Spoiler shell={<Loading />} live={false} selector="test">
            <Suspense fallback={<Loading />}>
            </Suspense>
        </Spoiler>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});

test('Shows loading for expected duration', () => {
    const serverComponent = renderer.create(
        <Spoiler shell={<Loading />} live={false} selector="test">
            <Suspense fallback={<Loading />}>
            </Suspense>
        </Spoiler>
    );
    const componentLoading = serverComponent.toJSON();
    expect(componentLoading).toMatchSnapshot();

    const clientComponent = renderer.create(
        <Spoiler shell={<Loading />} live={true} selector="test">
            <Suspense fallback={<Loading />}>
                <SlowComponent />
            </Suspense>
        </Spoiler>
    );
    const componentLoaded = clientComponent.toJSON();
    expect(componentLoaded).toMatchSnapshot();
});