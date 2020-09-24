import { isPromise } from '@blakek/is-promise';

type GenericFunction = (...args: any[]) => any;

export function compose(...[fn, ...fns]: GenericFunction[]): GenericFunction {
  // All arguments have been exhausted
  if (fns.length === 0) {
    return fn;
  }

  // Reduce arguments
  return (...args: any[]) => {
    const value = compose(...fns)(...args);

    if (isPromise(value)) {
      return Promise.resolve(value).then(value => fn(value));
    }

    return fn(value);
  };
}

export function pipe(...[fn, ...fns]: GenericFunction[]): GenericFunction {
  // All arguments have been exhausted
  if (fns.length === 0) {
    return fn;
  }

  // Reduce arguments
  return (...args: any[]) => {
    const value = fn(...args);

    if (isPromise(value)) {
      return Promise.resolve(value).then(value => pipe(...fns)(value));
    }

    return pipe(...fns)(value);
  };
}

export default { compose, pipe };
