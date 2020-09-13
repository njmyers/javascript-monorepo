import { withKnobs } from '@storybook/addon-knobs';
import { withLayout } from './decorators';

export const globalTypes = {
  theme: {
    brandTitle: '@njmyers NPM Documentation',
    brandUrl: 'https://njmyers.netlify.com',
  },
};

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};

export const decorators = [withKnobs, withLayout];
