import configureStore from "redux-mock-store";
import * as camelActions from "../kebab-actions";
import { initialState } from "../kebab-reducer";

const middlewares = [];
const mockStore = configureStore(middlewares);
const store = mockStore(initialState);

describe("it creates actions", () => {
  beforeEach(() => {
    store.clearActions();
  });

  test("it is a function type", () => {
    Object.values(camelActions).forEach(action => {
      expect(typeof action).toBe("function");
    });
  });

  test("it returns a plain object with a type property", () => {
    Object.values(camelActions).forEach(action => {
      expect(action()).toHaveProperty("type");
    });
  });

  Object.values(camelActions).forEach(action => {
    const type = action().type;

    test(`it dispatches ${type} type action from a mock store`, () => {
      store.dispatch(action());
      const actions = store.getActions();

      expect(actions[0].type).toBe(type);
    });
  });
});
