export default class Storage {
  constructor(storage) {
    this.storage = storage;
  }

  set(key, value) {
    this.storage.setItem(key, JSON.stringify(value));
  }

  get(key) {
    return JSON.parse(this.storage.getItem(key));
  }

  has(key) {
    return this.storage.getItem(key) !== null;
  }

  remove(key) {
    this.storage.removeItem(key);
  }

  clear() {
    this.storage.clear();
  }
}
