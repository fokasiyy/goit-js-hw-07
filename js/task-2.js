class Storage {
  #items = [];
  constructor(items) {
      this.#items = items;
  }

  getItems() {
      return this.#items;
  }

  addItem(newItem) {
      this.#items.push(newItem);
      // console.log(`pushing ${newItem} items`);
  }

  removeItem(itemToRemove) {
      const index = this.#items.indexOf(itemToRemove);
      // console.log(`searching for ${itemToRemove} items`);
      // console.log(`removing ${index} items`);
      if (index > -1) {
          this.#items.splice(index, 1);
      }
  }
}

const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]

storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]

storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

storage.removeItem("Scaner");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]