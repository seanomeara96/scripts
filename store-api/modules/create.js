const store = require("../config/axios-config");

const applyFilter = (productId, name, value) => {
  const data = {
    name,
    value,
  };
  return new Promise(async (resolve, reject) => {
    try {
      const { status } = await store.post(
        `/catalog/products/${productId}/custom-fields`,
        data
      );
      resolve(status);
    } catch (err) {
      reject(err);
    }
  });
};

const applyFilterToMany = (productIds, name, value) => {
  return new Promise((resolve, reject) => {
    let promises = [];
    productIds.forEach((product) => {
      const idKey = Object.keys(product)[0];
      promises.push(applyFilter(product[idKey], name, value));
    });
    Promise.allSettled(promises)
      .then((results) => resolve(results))
      .catch(reject);
  });
};

const applyManyFilters = (productId, filters) => {
  return new Promise((resolve, reject) => {
    let promises = [];
    filters.forEach(({ name, value }) => {
      promises.push(applyFilter(productId, name, value));
    });
    Promise.allSettled(promises)
      .then((results) => resolve(results))
      .catch(reject);
  });
};

const applyManyFiltersToMany = (productIds, filters) => {
  return new Promise((resolve, reject) => {
    let promises = [];
    productIds.forEach((product) => {
      const idKey = Object.keys(product);
      promises.push(applyManyFilters(product[idKey], filters));
    });
    Promise.allSettled(promises)
      .then((results) => resolve(results))
      .catch(reject);
  });
};

exports.applyFilter = applyFilter;
exports.applyFilterToMany = applyFilterToMany;
exports.applyManyFilters = applyManyFilters;
exports.applyManyFiltersToMany = applyManyFiltersToMany;
