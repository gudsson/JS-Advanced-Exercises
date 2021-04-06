/* eslint-disable consistent-return */
/* eslint-disable no-unused-expressions */
/* eslint-disable max-lines-per-function */
//////////////////////////////////////
// Mini Inventory Management System //
//////////////////////////////////////

// In this exercise, you'll build a simple inventory management
// system. The system is composed of an item creator, an items
// manager, and a reports manager. The item creator makes sure
// that all necessary information are present and valid. The
// item manager is responsible for creating items, updating
// information about items, deleting items, and querying
// information about the items. Finally, the report manager
// generates reports for a specific item or ALL items. Reports
// for specific items are generated from report objects created
// from the report manager. The report manager is responsible for
// reports for all items.

let ItemCreator = (function() {
  let validName = function(itemName) {
    return itemName.replace(/\s/g,'').length > 4;
  };
  let validCategory = function(itemName) {
    return itemName.length > 4 && !itemName.match(/\s/);
  };
  let validQuantity = function(quantity) {
    return quantity !== undefined;
  };
  let generateSku = function(obj) {
    return (obj.name.replace(/\s/g,'').slice(0,3) + obj.category.slice(0,2)).toUpperCase();
  };

  return function(name, category, quantity) {
    if (validName(name) && validCategory(category) && validQuantity(quantity)) {
      this.name = name;
      this.category = category;
      this.quantity = quantity;
      this.skuCode = generateSku(this);
    } else {
      return { notValid: true };
    }
  };
})();

let ItemManager = {
  items: [],

  create(name, category, quantity) {
    let item = new ItemCreator(name, category, quantity);
    if (item.notValid) {
      return false;
    } else {
      this.items.push(item);
    }
  },
  getItem(sku) {
    return this.items.filter(item => item.skuCode === sku)[0];
  },
  update(sku, object) {
    Object.assign(this.getItem(sku), object);
  },
  delete(sku) {
    this.items.splice(this.items.indexOf(this.getItem(sku)), 1);
  },
  inStock() {
    return this.items.filter(item => item.quantity > 0);
  },
  itemsInCategory(category) {
    return this.items.filter(item => item.category === category);
  }
};

let ReportManager = {
  items: null,

  init(ItemManager) {
    this.items = ItemManager;
  },
  createReporter(sku) {
    let item = this.items.getItem(sku);
    return {
      itemInfo() {
        for (let prop in item) {
          console.log(`${prop}: ${item[prop]}`);
        }
      }
    };
  },
  reportInStock() {
    console.log(this.items.inStock().map(item => item.name).join(', '));
  }
};

ItemManager.create('basket ball', 'sports', 0);           // valid item
ItemManager.create('asd', 'sports', 0);
ItemManager.create('soccer ball', 'sports', 5);           // valid item
ItemManager.create('football', 'sports');
ItemManager.create('football', 'sports', 3);              // valid item
ItemManager.create('kitchen pot', 'cooking items', 0);
ItemManager.create('kitchen pot', 'cooking', 3);          // valid item
// returns list with the 4 valid items
console.log(ItemManager.items);

ReportManager.init(ItemManager);
// logs soccer ball,football,kitchen pot
ReportManager.reportInStock();

ItemManager.update('SOCSP', { quantity: 0 });
// returns list with the item objects for football and kitchen pot
console.log(ItemManager.inStock());
// football,kitchen pot
ReportManager.reportInStock();

// returns list with the item objects for basket ball, soccer ball, and football
console.log(ItemManager.itemsInCategory('sports'));

ItemManager.delete('SOCSP');
// returns list the remaining 3 valid items (soccer ball is removed from the list)
console.log(ItemManager.items);

let kitchenPotReporter = ReportManager.createReporter('KITCO');
kitchenPotReporter.itemInfo();
// logs
// skuCode: KITCO
// itemName: kitchen pot
// category: cooking
// quantity: 3

ItemManager.update('KITCO', { quantity: 10 });
kitchenPotReporter.itemInfo();
// // logs
// // skuCode: KITCO
// // itemName: kitchen pot
// // category: cooking
// // quantity: 10