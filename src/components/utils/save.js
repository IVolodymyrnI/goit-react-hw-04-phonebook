export function save(key, value) {
  const stringified = JSON.stringify(value);
  localStorage.setItem(key, stringified);
}
