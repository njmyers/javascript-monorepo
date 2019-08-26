import { camelCaseName } from "../args";

const reduxReducerFile = (kebab-case, options) => `
import type { Action } from './${kebab-case}-actions'

export type State = {
  +key: string,
}

export const initialState = {
  key: 'value'
}

const ${camelCaseName(
  kebab-case
)}Reducer = (state: State = initialState, action: Action) => {
  switch(action.type) {
    default:
      return state;
  }
}

export default ${camelCaseName(kebab-case)}Reducer
`;

export default reduxReducerFile;
