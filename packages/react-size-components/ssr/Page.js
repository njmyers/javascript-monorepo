import React, { Component } from 'react';
import Size from '../src';

const LoremIpsum = ({ sizes } = {}) => {
  const style = {
    boxSizing: 'border-box',
    background: '#7f3535',
    width: '100%',
    padding: '30px',
  };

  console.log(sizes);

  return (
    <React.Fragment>
      <article style={style}>
        <h2>Sized Component</h2>
        <h3>Component</h3>
        <li>width: {sizes.component.width}</li>
        <li>height: {sizes.component.height}</li>
        <h3>Window</h3>
        <li>innerWidth: {sizes.window.innerWidth}</li>
        <li>innerHeight: {sizes.window.innerHeight}</li>
        <li>outerWidth: {sizes.window.outerWidth}</li>
        <li>outerHeight: {sizes.window.outerHeight}</li>
        <h3>Breakpoints</h3>
        <li>tablet: {sizes.tablet.toString()}</li>
        <li>laptop: {sizes.laptop.toString()}</li>
        <li>mobile: {sizes.mobile.toString()}</li>
        <li>orientation: {sizes.orientation}</li>
        <h3>Position</h3>
        <li>component is in view: {sizes.inView.toString()}</li>
        <p>
          <i>note: check the console for callbacks</i>
        </p>
      </article>
    </React.Fragment>
  );
};

// Define some custom size flags
const tablet = (node) => window.innerWidth < 1440 && window.innerWidth >= 768;
const laptop = (node) => window.innerWidth >= 1440;

// custom flags for our options object
const custom = [
  {
    name: 'tablet',
    fn: tablet,
    schema: '',
    subscriptions: {
      resize: true,
    },
  },
  {
    name: 'laptop',
    fn: laptop,
    schema: '',
    subscriptions: {
      resize: true,
    },
  },
];

// Lets enable all modes so we can test all of the code for SSR functionality.
const SizedLorem = Size({
  measureWindow: true,
  component: true,
  mobile: true,
  orientation: true,
  inView: true,
  custom,
})(LoremIpsum);

/**
 * Demo Component to test RSC with SSR
 */
class Page extends Component {
  constructor(props) {
    super(props);
    // just inline some basic styles so we don't have to compile any css with webpack
    this.article = {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'flex-start',
      padding: '0 5rem',
      color: 'white',
      background: '#65655c',
      minHeight: '100vh',
    };
  }
  // Testing CB function with SSR
  onSize = (sizes) => {
    console.log(sizes);
  };

  render() {
    return (
      <section style={this.article}>
        <h1>Server Side Rendering Demo</h1>
        <SizedLorem onSize={this.onSize} />
      </section>
    );
  }
}

export default Page;
