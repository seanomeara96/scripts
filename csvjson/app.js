const parse = require("csv-parser");
const fs = require("fs");
fs.readFile("./products.csv", { encoding: "utf8" }, (err, data) => {
  // console.log(data);
  parse(data, (d) => {
    console.log(d);
  });
});
