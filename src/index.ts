type GenericFunction = (...args: any[]) => any;

export function compose(...[fn, ...fns]: GenericFunction[]): GenericFunction {
  // All arguments have been exhausted
  if (fns.length === 0) {
    return fn;
  }

  // Reduce arguments
  return async (...args: any[]) => fn(await compose(...fns)(...args));
}

export function pipe(...[fn, ...fns]: GenericFunction[]): GenericFunction {
  // All arguments have been exhausted
  if (fns.length === 0) {
    return fn;
  }

  // Reduce arguments
  return async (...args: any[]) => pipe(...fns)(await fn(...args));
}

export default { compose, pipe };
