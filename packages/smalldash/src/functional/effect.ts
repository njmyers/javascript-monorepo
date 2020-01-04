// @ts-nocheck

/**
 * This function allows a side effect to be put into a chain of functional
 * arguments. This is useful for debugging or developing in a compositional
 * functional style. The effect will run using a single argument and will return
 * the same argument after running the effect.
 */
function effect(effectFunction) {
  return arg => {
    effectFunction(arg);
    return arg;
  };
}

export default effect;
