const store = require("../../config/axios-config");
const addLine = (productId, lineToAdd) =>
  new Promise(async (resolve, reject) => {
    validateParams(productId, lineToAdd, reject);
    try {
      const productDescription = await getProductDescription(productId);
      const updatedProductDescription = lineToAdd + productDescription;
      await updateProductDescription(productId, updatedProductDescription);
      resolve();
    } catch (err) {
      reject(err);
    }
  });

const removeLine = (productId, lineToRemove) =>
  new Promise(async (resolve, reject) => {
    validateParams(productId, lineToRemove, reject);
    try {
      const productDescription = await getProductDescription(productId);
      const updatedProductDescription = productDescription.replace(
        lineToRemove,
        ""
      );
      await updateProductDescription(productId, updatedProductDescription);
      resolve();
    } catch (err) {
      reject(err);
    }
  });

exports.addLine = addLine;
exports.removeLine = removeLine;

function getProductDescription(id) {
  return new Promise(async (resolve, reject) => {
    try {
      const product = await store.get(`/catalog/products/${id}`);
      const productDescription = product.data.data.description;
      resolve(productDescription);
    } catch (err) {
      reject(err);
    }
  });
}

function updateProductDescription(productId, updatedProductDescription) {
  return new Promise((resolve, reject) => {
    store
      .put(`/catalog/products/${productId}`, {
        description: updatedProductDescription,
      })
      .then(resolve)
      .catch((err) => reject(err));
  });
}

function validateParams(numero, sentence, cb) {
  if (typeof sentence !== "string") cb("lineToAdd must be a string");
  if (typeof numero !== "number") cb("product id must be a number");
}
