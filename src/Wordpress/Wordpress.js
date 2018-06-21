// @flow
import * as React from 'react';
import * as redux from 'redux';

import createPostType from './post-type';

import async from './async';
import log from './log';
import createRootReducer from './create-root-reducer';

type Props = {
  children?: React.Node,
};

type State = {
  store: {},
  postTypes: Array<string>,
  createPostType: Function,
};

// Declare initial shape of state
const Context = React.createContext({
  store: redux.createStore({}),
  postTypes: [],
  createPostType: () => {},
});

class Wordpress extends React.Component<Props, State> {
  middlwares: Array<Function> = [log, async];

  /** Update Array of Initialized PostTypes */
  createPostType = (postType: string) => {
    this.setState((state) => {
      const postTypes = [...state.postTypes, postType];
      const rootReducer = createRootReducer(postTypes);
      const store = redux.createStore(rootReducer);

      return { store, postTypes };
    });
  };

  state = {
    store: {},
    postTypes: [],
    createPostType: this.createPostType,
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

const withWordpress = (Wrapped) => (props: {}) => (
  <Wordpress>
    <Context.Consumer>
      {(context) => <Wrapped {...props} wordpress={context} />}
    </Context.Consumer>
  </Wordpress>
);

// const withWordpressData = (postTypes: Array<string> | string) => (Wrapped) =>
//   class WordpressData extends React.Component {
//     // coerce passed in argument to array
//     postTypes = Array.isArray(postTypes) ? postTypes : [postTypes];

//     mapAllNewPostTypes = (context: State) => {
//       this.postTypes.forEach((type) => context.createPostType(type));
//     };

//     render() {
//       return (
//         <Wordpress>
//           <Context.Consumer>
//             {(context) => {
//               this.mapAllNewPostTypes(context);
//               return <Wrapped {...this.props} wordpress={context} />;
//             }}
//           </Context.Consumer>
//         </Wordpress>
//       );
//     }
//   };

class MountPostTypes extends React.Component {
  state = {
    subscribe: null,
  };

  componentDidMount() {
    this.props.wordpress.createPostType('posts');
    this.props.onAction(this.props.wordpress.store.getState());
  }

  componentDidUpdate() {
    this.props.onAction(this.props.wordpress.store.getState());
  }

  render() {
    return <p>{JSON.stringify(this.props.wordpress)}</p>;
  }
}

export default withWordpress(MountPostTypes);
