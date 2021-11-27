type Value = string | number | boolean | undefined | null;
type Mapping = Record<string, unknown>;
type Argument = Value | Mapping | ArgumentArray;
interface ArgumentArray extends Array<Argument> {}

/**
 * copy-paste implementation of https://github.com/JedWatson/classnames/
 */
export default function classnames(...args: ArgumentArray): string {
  const classes = [];

  for (const arg of args) {
    if (!arg) continue;

    const argType = typeof arg;

    if (argType === 'string' || argType === 'number') {
      classes.push(arg);
    } else if (Array.isArray(arg)) {
      if (arg.length) {
        const inner = classnames.apply(null, arg);
        if (inner) {
          classes.push(inner);
        }
      }
    } else if (argType === 'object') {
      if (arg.toString === Object.prototype.toString) {
        for (const key in arg as Mapping) {
          if (
            Object.prototype.hasOwnProperty.call(arg, key) &&
            (arg as Mapping)[key]
          ) {
            classes.push(key);
          }
        }
      } else {
        classes.push(arg.toString());
      }
    }
  }

  return classes.join(' ');
}
