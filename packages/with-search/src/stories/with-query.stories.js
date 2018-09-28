import * as React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { storiesOf } from '@storybook/react';

import withSearch from '../with-search';

const Thing = (props) => <p>{JSON.stringify(props.search)}</p>;
const ThingWithSearch = withSearch(Thing);

storiesOf('@njmyers-with-search', module).add('Demo', () => (
  <Router>
    <ThingWithSearch />
  </Router>
));
