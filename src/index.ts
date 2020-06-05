export function compose(...[fn, ...fns]: Function[]): Function {
  // All arguments have been exhausted
  if (fns.length === 0) {
    return async (...args: any[]) => fn(...args);
  }

  // Reduce arguments
  return async (...args: any[]) => compose(...fns)(await fn(...args));
}

export default compose;
