export const _getSingleInvoiceByID = (id, data) => {
  let inv = false;
  data.forEach((item, index) => {
    if (item.id === id) {
      inv = item;
    }
  });
  return inv;
};
