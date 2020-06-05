# compose

> 🛠 Compose functions and promises

Code can become complex when several functions wrap others or `reduce()` is used
to combine a list of funtions.

This is an alternative that allows composing a pipeline of functions. It calls
each in order and passes the output from the previous to the next.

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
import { compose } from '@blakek/compose';

const fetchUsers = () =>
  Promise.resolve([
    { sites: { github: { username: 'blakek' } } },
    { sites: { github: { username: 'gsandf' } } },
    { sites: { github: { username: 'google' } } }
  ]);

const getUsers = compose(
  fetchUsers,
  users => users.map(user => user.sites.github.username)
);

getUsers().then(console.log); //» [ 'blakek', 'gsandf', 'google' ]
```

## API

### `compose`

```ts
function compose(...[fn, ...fns]: Function[]): Function;
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
