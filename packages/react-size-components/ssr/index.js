import React from 'react';
import { hydrate } from 'react-dom';
import Page from './Page';

// React 16 uses hydrate function instead of render. Compares the pre-rendered html strings to the expected content.
hydrate(<Page />, document.getElementById('root'));
