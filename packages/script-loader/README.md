# Script Loader

Lazy load your browser vendor APIs from a CDN with this script loader. No need to worry about window globals or adding annoying script tags to your html. Modern `Promise` based API that adds your tags in a non-blocking way and returns a cacheable reference to the global API object.

## Installation

`npm install @njmyers/script-loader`

or

`yarn add @njmyers/script-loader`

## Usage

For a realistic example, we will use a popular payment gateway Stripe. After inspecting the (documentation)[https://stripe.com/docs/stripe-js/reference#including-stripejs] we see that their API is available from `https://js.stripe.com/v3/`. After downloading their API via a `<script>` tag they will make it available via the global object `window.Stripe`. So you add this code to your index.html

```html
<script src="https://js.stripe.com/v3/" />
```

After running a performance report on your side you may see an error report that complains about (render blocking resources)[https://developers.google.com/web/tools/lighthouse/audits/blocking-resources]. Oh no! I don't want to block my rendering. So for your next step you add the suggested attributes.

```html
<script src="https://js.stripe.com/v3/" async defer />
```

But then later you start seeing errors. `Uncaught TypeError: window.Stripe is not a function`. It seems your code is trying to initialize Stripe before it has properly loaded. So how we download these vendor scripts in a non-blocking way and also ensure references at the right times?

1. Promises
2. No Globals

Or just use this handy script loader so that these are all done for you :)

```js
import createScriptLoader from '@njmyers/script-loader';

const loadStrip = createScriptLoader({
  src: 'https://js.stripe.com/v3/',
  id: 'stripe-loader',
  initialize(window) {
    // this will be whatever the documentation says
    // https://stripe.com/docs/stripe-js/reference#stripe-function
    return window.Stripe('pk_test_TYooMQauvdEDq54NiTphI7jx');
  },
});

loadStripe().then(Stripe => {
  // have fun with Stripe!
});
```

That's all there is to it.
