export default function canIterate(arg) {
  if (arg) {
    return Boolean(arg[Symbol.iterator]);
  }
  return false;
}
