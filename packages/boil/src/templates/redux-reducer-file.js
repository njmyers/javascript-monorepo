/** @flow */
import { camelName } from "../args";

const reduxReducerFile = (kebab, options) => `/** @flow */
import type { Action } from './${kebab}-actions'

export type State = {
  +key: string,
}

export const initialState = {
  key: 'value'
}

const ${camelName(
  kebab
)}Reducer = (state: State = initialState, action: Action) => {
  switch(action.type) {
    default:
      return state;
  }
}

export default ${camelName(kebab)}Reducer
`;

export default reduxReducerFile;
