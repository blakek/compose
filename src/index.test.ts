import test from 'ava';
import { compose } from './index';

test('passes output from function-to-function', async t => {
  const addSeven = (n: number) => n + 7;
  const timesThree = (n: number) => n * 3;

  const run = compose(addSeven, timesThree);

  t.is(typeof run, 'function');
  t.is(await run(8), 45);
});

test('works with Promises', async t => {
  const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
  const todos = [{ title: 'be cool' }, { title: 'enjoy life' }];
  const fetchTodos = () => delay(60).then(() => todos);
  const count = (arr: any[]) => arr.length;

  const run = compose(fetchTodos, count);

  t.is(typeof run, 'function');
  t.is(await run(), 2);
});
