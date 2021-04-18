const store = require("../config/axios-config");
const { getFilters } = require("./read");
const removeFilter = (productId, name, value) => {
  return new Promise(async (resolve, reject) => {
    try {
      const filters = await getFilters(productId);
      const filterToDelete = filters.find(
        (filter) => filter.name === name && filter.value === value
      );
      store
        .delete(
          `/catalog/products/${productId}/custom-fields/${filterToDelete.id}`
        )
        .then(resolve)
        .catch(reject);
    } catch (err) {
      reject(err);
    }
  });
};

const removeManyFilters = (productId, filters) => {
  return new Promise((resolve, reject) => {
    let promises = [];
    filters.forEach(({ name, value }) => {
      promises.push(removeFilter(productId, name, value));
    });
    Promise.allSettled(promises).then(resolve).catch(reject);
  });
};

const removeFiltersFromMany = () => {};

const removeManyFiltersFromMany = () => {};

exports.removeFilter = removeFilter;
exports.removeManyFilters = removeManyFilters;
