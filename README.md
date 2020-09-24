# compose

> 🛠 Compose functions and promises

Code can become complex when several functions wrap others or `reduce()` is used
to combine a list of funtions.

This allows composing a pipeline of functions. `compose` calls each function
from right-to-left and passes the output from the previous to the next. `pipe`
is the same, but works from left-to-right.

## Install

Using [Yarn]:

```bash
$ yarn add @blakek/compose
```

…or using [npm]:

```bash
$ npm i --save @blakek/compose
```

## Usage

```js
import { compose, pipe } from '@blakek/compose';

const fetchUsers = () =>
  Promise.resolve([
    { sites: { github: { username: 'blakek' } } },
    { sites: { github: { username: 'gsandf' } } },
    { sites: { github: { username: 'google' } } }
  ]);

// using `compose`
const getUsers = compose(
  users => users.map(user => user.sites.github.username),
  fetchUsers
);

// using `pipe`
const getUsersPipe = pipe(fetchUsers, users =>
  users.map(user => user.sites.github.username)
);

getUsers().then(console.log); //» [ 'blakek', 'gsandf', 'google' ]

// NOTE: awaiting is only required if one of the arguments is a Promise
pipe(
  n => n + 2,
  n => n * 3
)(3); //» 15

await pipe(
  () => delay(500),
  n => n + 2,
  n => n * 3
)(3); //» 15
```

## API

### `compose`

```ts
function compose(...[fn, ...fns]: Function[]): Function;
```

### `pipe`

```ts
function pipe(...[fn, ...fns]: Function[]): Function;
```

## Contributing

[Node.js] and [Yarn] are required to work with this project.

To install all dependencies, run:

```bash
yarn
```

### Useful Commands

|                     |                                                 |
| ------------------- | ----------------------------------------------- |
| `yarn build`        | Builds the project to `./dist`                  |
| `yarn format`       | Format the source following the Prettier styles |
| `yarn test`         | Run project tests                               |
| `yarn test --watch` | Run project tests, watching for file changes    |

## License

MIT

[node.js]: https://nodejs.org/
[npm]: https://npmjs.com/
[yarn]: https://yarnpkg.com/en/docs/
