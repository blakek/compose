const { compose } = require('.');
const { get } = require('../deep');

const fetchUsers = () =>
  Promise.resolve([
    { sites: { github: { username: 'blakek' } } },
    { sites: { github: { username: 'gsandf' } } },
    { sites: { github: { username: 'google' } } }
  ]);

const getUsername = user => get(user, 'sites.github.username');

const getCompletedForUser = compose(fetchUsers, users =>
  users.map(getUsername)
);

getCompletedForUser(5).then(console.log);
