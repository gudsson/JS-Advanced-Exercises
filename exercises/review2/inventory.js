//////////////////////////////////////
// Mini Inventory Management System //
//////////////////////////////////////

// In this exercise, you'll build a simple inventory management system.
// The system is composed of an item creator, an items manager, and a
// reports manager. The item creator makes sure that all necessary
// information are present and valid. The item manager is responsible
// for creating items, updating information about items, deleting items,
// and querying information about the items. Finally, the report manager
// generates reports for a specific item or ALL items. Reports for specific
// items are generated from report objects created from the report manager.
// The report manager is responsible for reports for all items.


let ItemCreator = (function() {
  function generateSku(name, category) {
    // SKU code: This is the unique identifier for a product. It consists of the
    // first 3 letters of the item and the first 2 letters of the category. If
    // the item name consists of two words and the first word consists of two
    // letters only, the next letter is taken from the next word.
    return `${name.replace(/\s/g, '').slice(0, 3)}${category.slice(0,2)}`.toUpperCase();
  };

  function isValidName(name) {
    // Item name: This is the name of the item. It must consist of a minimum
    // of 5 characters. Spaces are not counted as characters.
    return name.replace(/\s/g, '').length > 4;
  };

  function isValidCategory(category) {
    // Category: This is the category that the item belongs to. It must consist
    // of a minimum of 5 characters and be only one word.
    return !category.includes(' ') && category.length > 4;
  };

  function isValidQuantity(quantity) {
    // Quantity: This is the quantity in stock of an item. This must not be blank.
    // You may assume that a valid number will be provided.
    return quantity !== undefined;
  }
  
  return function(name, category, quantity) {
    if (isValidName(name) && isValidCategory(category) && isValidQuantity(quantity)) {
      this.skuCode = generateSku(name, category);
      this.itemName = name;
      this.category = category;
      this.quantity = quantity;
    } else {
      return { notValid: true };
    }
  };
})();

// The following are the methods that the items manager can perform:

const ItemManager = {
  items: [],
  getItem(sku) {
      return this.items.filter(item => item.skuCode === sku)[0];
  },
  create(name, category, quantity) {
    // create: This method creates a new item. Returns false if creation is not
    // successful.
    let item = new ItemCreator(name, category, quantity);

    if (!item.notValid) {
      this.items.push(item);
    } else return false;
  },
  update(sku, obj) {
    // update: This method accepts an SKU Code and an object as an argument and
    // updates any of the information on an item. You may assume valid values
    // will be provided.
    Object.assign(this.getItem(sku), obj);
  },
  delete(sku) {
    // delete: This method accepts an SKU Code and deletes the item from the
    // list. You may assume a valid SKU code is provided.
    this.items.splice(this.items.indexOf(this.getItem(sku)), 1);
  },
  inStock() {
    // inStock: This method list all the items that have a quantity greater
    // than 0.
    return this.items.filter(item => item.quantity > 0);
  },
  itemsInCategory(category) {
    // itemsInCategory: This method list all the items for a given category
    return this.items.filter(item => item.category === category);
  },
};

// ItemManager.update('ABC', {name: 'friend'});


// The following are the methods on the reports managers:
const ReportManager = (function() {
  let items;
  
  return {
    init(manager) {
      // init: This method accepts the ItemManager object as an argument and
      // assigns it to the items property.
      items = manager;
    },
    createReporter(sku) {
      // createReporter: This method accepts an SKU code as an argument and
      // returns an object.
      // The returned object has one method, itemInfo. It logs to the console
      // all the properties of an object as "key:value" pairs (one pair per line).
      // There are no other properties or methods on the returned object (except
      // for properties/methods inherited from Object.prototype).
      let item = items.getItem(sku);
      
      return (function() {
        return {
          itemInfo() {
            for (let prop in item) {
              console.log(`${prop}: ${item[prop]}`);
            }
          }
        }
      })();
    },
    reportInStock() {
      // reportInStock: Logs to the console the item names of all the items that
      // are in stock as a comma separated values.
      console.log(items.inStock().map(item => item.itemName).join(', '));
    }
  };
})();




// Notes:
// There's no need to add the ability to validate the uniqueness of the
// SKU code. Given the current description, it's possible that a
// duplicate will exist.
// Each required piece of information for an item corresponds to one
// property.
// If any of the require information provided is not valid, the item
// creator returns an object with a notValid property with a value of
// true.
// The created item objects should not have any methods/properties on
// them other than the required information above and those inherited
// from Object.prototype.
// You may add methods to the item manager as you deem necessary.
// Here is a sample run that you can use a reference:

ItemManager.create('basket ball', 'sports', 0);           // valid item
ItemManager.create('asd', 'sports', 0);
ItemManager.create('soccer ball', 'sports', 5);           // valid item
ItemManager.create('football', 'sports');
ItemManager.create('football', 'sports', 3);              // valid item
ItemManager.create('kitchen pot', 'cooking items', 0);
ItemManager.create('kitchen pot', 'cooking', 3);          // valid item
// // returns list with the 4 valid items
console.log(ItemManager.items);

ReportManager.init(ItemManager);
// logs soccer ball,football,kitchen pot
ReportManager.reportInStock();

ItemManager.update('SOCSP', { quantity: 0 });
// // returns list with the item objects for football and kitchen pot
console.log(ItemManager.inStock());
// // football,kitchen pot
ReportManager.reportInStock();

// // returns list with the item objects for basket ball, soccer ball, and football
console.log(ItemManager.itemsInCategory('sports'));

ItemManager.delete('SOCSP');
// // returns list the remaining 3 valid items (soccer ball is removed from the list)
console.log(ItemManager.items);

let kitchenPotReporter = ReportManager.createReporter('KITCO');
kitchenPotReporter.itemInfo();
// // logs
// // skuCode: KITCO
// // itemName: kitchen pot
// // category: cooking
// // quantity: 3

ItemManager.update('KITCO', { quantity: 10 });
kitchenPotReporter.itemInfo();
// // logs
// // skuCode: KITCO
// // itemName: kitchen pot
// // category: cooking
// // quantity: 10