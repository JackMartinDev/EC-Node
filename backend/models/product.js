import fs from "fs"
import path from "path"

const p = "/Users/jackmartin/NodeJs/00-starting-setup/data/products.json"
//path.join(
  //path.dirname(require.main.filename),
  //'data',
  //'products.json'
//);
const getProductsFromFile = cb => {
  fs.readFile(p, (err, fileContent) => {
    if (err) {
      cb([]);
    } else {
      cb(JSON.parse(fileContent));
    }
  });
};

export default class Product {
  constructor(title, imageUrl, description, price) {
    this.id = crypto.randomUUID();
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }

  save() {
    getProductsFromFile(products => {
      products.push(this);
      fs.writeFile(p, JSON.stringify(products), err => {
        console.log(err);
      });
    });
  }

  static fetchAll(cb) {
    getProductsFromFile(cb);
  }
};
