# Wordpresser

Utility and cli for getting wordpress posts. Install locally or globally if you want to use the cli

`npm install (-g) @njmyers/wordpresser`

## Module Usage

To use in a project simply import the module using es6 modules or commonjs.

```js
import Wordpresser from '@njmyers/wordpresser';
const Wordpressesr = require('@njmyers/wordpresser');

const api = new Wordpresser({ wpBase: 'api.wordpress.com' });

// use async await
try {
  const response = await api.getPostTypes('posts');
  const data = api.getData();

  /*
    data will look like this
    data = {
      posts: {
        [postID]: {
          ...postContent
        },
        [nextPostID]: {
          ..nextPostContent
        }
      }
    }
   */
} catch (e) {
  // handle error
}

// or use promises
api
  .getPostTypes('posts')
  .then((response) => {
    api.getData();
  })
  .catch((error) => {
    // handle error
  });
```

The value returned by the promise is that actual response. To get the data you must use `getData()` or `getJSON()` functions. You can also call next.

```js
try {
  await api.getNext();
  const data = api.getData();
} catch (e) {
  // handle error
}
```

Now your data will contain the next group of posts. You can pass in multiple data types as well.

```js
try {
  await api.getPostTypes(['posts', 'categories']);
  const data = api.getData();

  /*
    data will look like this
    data = {
      posts: {
        [postID]: {
          ...postContent
        },
        [nextPostID]: {
          ..nextPostContent
        }
      },
      categories: {
        [categoryID]: {
          ...categoryContent
        },
        [nextCategoryID]: {
          ..nextCategorysContent
        }
      }
    }
   */
} catch (e) {
  // handle error
}
```

You can pass in options. The only option currently supported is a recursive option which fetches all the data of that type by recursively calling `getNext()` data types as well.

```js
try {
  await api.getPostTypes(['posts', 'categories', 'authors', 'books'], {
    recursive: true,
  });
  const data = api.getData();
} catch (e) {}
```

Cool now we downloaded the entire site from wordpress... Nice for jam stack or site building processes.

## CLI Usage

Installs a command `wordpresser` to your shell.

```bash
wordpresser -h
# displays all options
wordpresser -v
# display version
wordpresser -w api.wordpress.com
# specificies the wpi-api domain name
wordpresser -f data.json
# outputs the data as a json file in your current directory
wordpresser postTypes
# the types to fetch use with space seperated arguments like this

# ...SO here is a real command
wordpresser -r -w api.wordpress.com -f data.json posts categories authors books
# This will recursively fetch all of the data from posts, categories, authors, books and write it to the file data.json in your current directory
```
