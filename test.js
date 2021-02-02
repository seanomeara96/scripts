const parse = require("csv-parse/lib/sync");
const fs = require("fs");
fs.createReadStream("./products-2021-02-02.csv")
  .on("readable", (row) => {
    parse(row);
  })
  .on("end", () => {
    console.log("processed");
  });
