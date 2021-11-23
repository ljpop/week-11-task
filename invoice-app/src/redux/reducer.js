import data from "../data";

const initialState = {
  editorOpened: false,
  currentEditingID: false,
  invoicesData: data,
};

export const myReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CLOSE_FORM":
      return {
        ...state,
        editorOpened: false,
        currentEditingID: false,
      };

    case "OPEN_FORM":
      return {
        ...state,
        editorOpened: true,
        currentEditingID: action.payload,
      };

    case "DELETE_INVOICE":
      let editedInvoices = state.invoicesData.filter((item) => {
        if (item.id === action.payload) {
          return false;
        }
        return true;
      });
      return {
        ...state,
        invoicesData: editedInvoices,
      };

    case "UPDATE_INVOICE":
      let editedInvoices2 = state.invoicesData.map((item) => {
        if (item.id === action.payload.id) {
          // return item; // izmenjen item
          return {
            ...item,
            ...action.payload.editedValues,
            id: item.id, // za svaki slcuaj da item ne bi ostao bez svog id-a
          }; // izmenjen item
        }
        return item; // neizmenjen item
      });
      return {
        ...state,
        invoicesData: editedInvoices2,
      };

    case "UPDATE_INVOICE_STATUS":
      let editedInvoices3 = state.invoicesData.map((item) => {
        if (item.id === action.payload) {
          // return item; // izmenjen item
          return {
            ...item,
            status: "paid",
          }; // izmenjen item
        }
        return item; // neizmenjen item
      });
      return {
        ...state,
        invoicesData: editedInvoices3,
      };

    default:
      return state;
  }
};

// let editedState = invoicesData.map((item) => {
//   if (item.id === id) {
//     // return item; // izmenjen item
//     return {
//       ...item,
//       status: "paid",
//     }; // izmenjen item
//   }
//   return item; // neizmenjen item
// });
// // i sad kad smo dobbili novi niz koji je skracen, upisujemo ga u state
// // setState(editedState);
