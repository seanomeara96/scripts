const csv = require("csvtojson");
const products = "./products.csv";
const skinTypes = [`"Skin Type=Normal / Combination"`, `"Skin Type=Sensitive"`];
const stringify = require("csv-stringify");
const fs = require("fs");
csv()
  .fromFile(products)
  .then((doc) => {
    doc.forEach((item) => {
      let currentFilters = item["Product Custom Fields"]
        .split(";")
        .map((filter) => {
          if (!filter.startsWith('"')) {
            return `"${filter}"`;
          } else {
            return filter;
          }
        })
        .filter((item) => item != `""`);
      skinTypes.forEach((type) => currentFilters.push(type));
      item["Product Custom Fields"] = currentFilters.join(";");
      console.log(currentFilters);
    });

    stringify(doc, { header: true }, (err, output) => {
      if (err) {
        throw new Error(err);
      }
      fs.writeFile("./ouput.csv", output, (err) => {
        if (err) {
          throw new Error(err);
        }
      });
    });
  });
