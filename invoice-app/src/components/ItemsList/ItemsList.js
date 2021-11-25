// const ItemsList = (invoice) => {
//   const invoiceEx = invoice;

//   return (
//     <div className="items-list">
//       <div>Items List Header</div>
//       {console.log(invoiceEx.invoice.items[0])}
//     </div>
//   );
// };

// export default ItemsList;

import "./ItemsList.css";

const ItemsList = ({ itemsList }) => {
  const lista = itemsList;
  return (
    <div className="items-list">
      <div className="items-list-header">
        <div className="item-name item-header">Item Name</div>
        <div className="item-qty item-header">QTY.</div>
        <div className="item-price item-header">Price</div>
        <div className="item-total item-header">Total</div>
      </div>

      {lista.map((singleListItem, index) => (
        <div className="single-item-list" key={index}>
  
      
          <div className="item-name item-main">{singleListItem.name}</div>
          <div className="item-qty item-main">{singleListItem.quantity}</div>
          <div className="item-price item-main">
            {singleListItem.price
              ? "£" + Number(singleListItem.price).toFixed(2)
              : " "}
          </div>
          
          <div className="item-total item-main">
            {singleListItem.total
              ? "£" + Number(singleListItem.total).toFixed(2)
              : " "}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemsList;
