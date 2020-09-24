export function compose(...[fn, ...fns]: Function[]): Function {
  // All arguments have been exhausted
  if (fns.length === 0) {
    return fn;
  }

  // Reduce arguments
  return async (...args: any[]) => fn(await compose(...fns)(...args));
}

export function pipe(...[fn, ...fns]: Function[]): Function {
  // All arguments have been exhausted
  if (fns.length === 0) {
    return fn;
  }

  // Reduce arguments
  return async (...args: any[]) => pipe(...fns)(await fn(...args));
}
export default { compose, pipe };
