/** @flow */
import { kebabToSnake } from "smalldash";

const reduxActionsFile = (kebab, options) => `/** @flow */
type $ExtractReturn<Fn> = $Call<<T>((...Array<any>) => T) => T, Fn>;

export const createAction = (value: string) => ({
  type: "@${kebabToSnake(kebab).toUpperCase()}/CREATE_ACTION"
});

export const deleteAction = (value: string) => ({
  type: "@${kebabToSnake(kebab).toUpperCase()}/DELETE_ACTION"
});

export type Action =
  | $ExtractReturn<typeof createAction>
  | $ExtractReturn<typeof deleteAction>;
`;

export default reduxActionsFile;
