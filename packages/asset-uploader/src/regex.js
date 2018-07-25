export const isLocalURL = (url) => {
  const regex = /https?:\/\/localhost:\d{3,4}\/\?[a-zA-Z0-9\-\._~:\/?#\[\]@!$&'\(\)*+,;=%]*/gi;

  return regex.test(url);
};

export const localURLs = (string) => {
  const regex = /https?:\/\/localhost:\d{3,4}\/\?[a-zA-Z0-9\-\._~:\/?#\[\]@!$&'\(\)*+,;=%]*/gi;

  return string.match(regex);
};

export const queryString = (url) => {
  const regex = /https?:\/\/localhost:\d{3,4}\/?\??(.*)$/gi;
  const results = regex.exec(url);

  return results[results.length - 1];
};
