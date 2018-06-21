import React from 'react';
import StatusSwitch from '../StatusSwitch';
import ErrorMessage from '../../ErrorMessage';
import Loading from '../../Loading';

import renderer from 'react-test-renderer';

const Null = (props) => null;
const Child = (props) => <p>This is some test material.</p>;

const nullTree = renderer.create(<Null />).toJSON();
const childTree = renderer.create(<Child />).toJSON();
const errorTree = renderer.create(<ErrorMessage />).toJSON();
const loadingTree = renderer.create(<Loading />).toJSON();

describe('the status switch works', () => {
  test('it renders without crashing', () => {
    const component = renderer.create(<StatusSwitch />);
    const tree = component.toJSON();
    // should be null
    expect(tree).toBe(nullTree);
  });

  test('it renders children correctly with no prop', () => {
    const component = renderer.create(
      <StatusSwitch>
        <Child />
      </StatusSwitch>
    );
    const tree = component.toJSON();
    expect(tree).toMatchObject(childTree);
  });

  test('it renders children correctly with prop of initial', () => {
    const component = renderer.create(
      <StatusSwitch status="initial">
        <Child />
      </StatusSwitch>
    );
    const tree = component.toJSON();
    expect(tree).toMatchObject(childTree);
  });

  test('it renders children correctly with prop of resolved', () => {
    const component = renderer.create(
      <StatusSwitch status="initial">
        <Child />
      </StatusSwitch>
    );
    const tree = component.toJSON();
    expect(tree).toMatchObject(childTree);
  });

  test('it renders default error message correctly when prop of error', () => {
    const component = renderer.create(
      <StatusSwitch status="error">
        <Child />
      </StatusSwitch>
    );
    const tree = component.toJSON();
    expect(tree).toMatchObject(errorTree);
  });

  test('it renders default spinner correctly when adding prop of loading', () => {
    const component = renderer.create(
      <StatusSwitch status="loading">
        <Child />
      </StatusSwitch>
    );
    const tree = component.toJSON();
    expect(tree).toMatchObject(loadingTree);
  });

  test('it renders default spinner correctly when adding inline render prop for error', () => {
    const ErrorInline = (props) => <p>Error</p>;
    const inlineTree = renderer.create(<ErrorInline />).toJSON();

    const component = renderer.create(
      <StatusSwitch status="error" error={ErrorInline}>
        <Child />
      </StatusSwitch>
    );
    const tree = component.toJSON();
    expect(tree).toMatchObject(inlineTree);
  });

  test('it renders default spinner correctly when adding inline render prop for loading', () => {
    const LoadingInline = (props) => <p>Loading</p>;
    const inlineTree = renderer.create(<LoadingInline />).toJSON();

    const component = renderer.create(
      <StatusSwitch status="error" error={LoadingInline}>
        <Child />
      </StatusSwitch>
    );
    const tree = component.toJSON();
    expect(tree).toMatchObject(inlineTree);
  });

  test('it renders different content on changing states', () => {
    class Stateful extends React.Component {
      state = {
        status: 'inline',
      };

      render() {
        return (
          <StatusSwitch status={this.state.status}>
            <Child onClick={this.isLoading} />
          </StatusSwitch>
        );
      }
    }

    const component = renderer.create(<Stateful />);

    // display children
    expect(component.toJSON()).toMatchObject(childTree);
    // set state directly to loading
    component.root.instance.setState({ status: 'loading' });
    expect(component.toJSON()).toMatchObject(loadingTree);
    // set state directly to error
    component.root.instance.setState({ status: 'error' });
    expect(component.toJSON()).toMatchObject(errorTree);
    // set state directly to resolved
    component.root.instance.setState({ status: 'resolved' });
    expect(component.toJSON()).toMatchObject(childTree);
  });

  test('it renders loading state override when using array of status', () => {
    const component = renderer.create(
      <StatusSwitch status={['loading', 'resolved', 'initial']}>
        <Child />
      </StatusSwitch>
    );
    const tree = component.toJSON();
    expect(tree).toMatchObject(loadingTree);
  });

  test('it renders error state override when using array of status', () => {
    const component = renderer.create(
      <StatusSwitch status={['loading', 'resolved', 'initial', 'error']}>
        <Child />
      </StatusSwitch>
    );
    const tree = component.toJSON();
    expect(tree).toMatchObject(errorTree);
  });
});
