const parse = require("csv-parse/lib/sync");
const fs = require("fs");

const parser = parse(fs.createReadStream("./products-2021-02-02.csv"));
