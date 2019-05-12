/** @flow */
import { kebabToSnake } from "smalldash";

const reduxActionsFile = (kebab, options) =>
  `export const createAction = (value: string) => ({
  type: "@${kebabToSnake(kebab).toUpperCase()}/CREATE_ACTION"
});

export const deleteAction = (value: string) => ({
  type: "@${kebabToSnake(kebab).toUpperCase()}/DELETE_ACTION"
});
`;

export default reduxActionsFile;
