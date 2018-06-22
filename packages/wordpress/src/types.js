export type PostData = {
  loadedAt: number,
  status: string,
  data: Array<{}>,
  fetchedPages: [],
  filter: string,
};

export type State = {
  postTypes: Array<PostData>,
};
