const data = require("./bf-filters.json");
const fs = require("fs");
const filtersApplied = data.map((el) => {
  let filters = [];
  for (let key in el) {
    if (el[key] == "TRUE") {
      filters.push(`"Skin Concerns=${key}"`);
    }
  }
  el.filters = filters.join(";");
  return el;
});
console.log(filtersApplied);
fs.writeFile("filtersApplied.json", JSON.stringify(filtersApplied), (err) => {
  if (err) throw Error(err);
});
