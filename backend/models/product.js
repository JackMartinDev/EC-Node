import fs from "fs"

//const p = "/home/jack/Projects/EC-Node/backend/data/products.json"
const p = "/Users/jackmartin/Programming/EC-Node/backend/data/products.json"

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

  static fetchById(id, cb){
    getProductsFromFile(products => {
      const product = products.find(product => product.id === id)
      cb(product)
    })
  }
};
