const { applyFilter } = require("./index");

applyFilter(178, "Proceive", "Men & Women")
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
