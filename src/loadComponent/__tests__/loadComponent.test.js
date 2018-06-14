import React from 'react';
import TestComponent from '../TestComponent';
import loadComponent from '../loadComponent';

import renderer from 'react-test-renderer';

const timeout = (time = 500) =>
  new Promise((res, rej) => {
    setTimeout(() => res(), time);
  });

describe('tests for asynchronously loading a component', () => {
  test('it displays a loader while loading a component', () => {
    const Loading = () => 'loading';
    const LoadedTest = loadComponent(() => import('../TestComponent'));
    const loadedComponent = renderer.create(<LoadedTest />);
    const component = renderer.create(<Loading />);

    expect(loadedComponent.toJSON()).toBe(component.toJSON());
    expect(loadedComponent.toJSON()).toMatchSnapshot();
  });

  test("it displays an error when imported file doesn't exist", () => {
    const ErrorComponent = () => 'error';
    const LoadedTest = loadComponent(() => import('../NotExist'));
    const loadedComponent = renderer.create(<LoadedTest />);
    const component = renderer.create(<ErrorComponent />);

    return timeout(100).then(() => {
      expect(loadedComponent.toJSON()).toBe(component.toJSON());
      expect(loadedComponent.toJSON()).toMatchSnapshot();
    });
  });

  test('it loads a component', () => {
    const LoadedTest = loadComponent(() => import('../TestComponent'));
    const loadedComponent = renderer.create(<LoadedTest />);
    const component = renderer.create(<TestComponent />);

    return timeout(100).then(() => {
      expect(loadedComponent.toJSON()).toMatchObject(component.toJSON());
      expect(loadedComponent.toJSON()).toMatchSnapshot();
    });
  });

  test('it passes props', () => {
    const LoadedTest = loadComponent(() => import('../TestComponent'));
    const loadedComponent = renderer.create(<LoadedTest value="value" />);
    const component = renderer.create(<TestComponent value="value" />);

    return timeout(100).then(() => {
      expect(loadedComponent.toJSON()).toMatchObject(component.toJSON());
      expect(loadedComponent.toJSON()).toMatchSnapshot();
    });
  });

  test('it overwrites custom loader', () => {
    const CustomLoader = () => 'some loading thing';
    const LoadedTest = loadComponent(() => import('../TestComponent'), {
      loading: CustomLoader,
    });

    const loadedComponent = renderer.create(<LoadedTest />);
    const component = renderer.create(<CustomLoader />);

    expect(loadedComponent.toJSON()).toBe(component.toJSON());
    expect(loadedComponent.toJSON()).toMatchSnapshot();
  });
});
