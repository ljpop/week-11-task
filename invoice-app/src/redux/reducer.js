const initialState = {
  editorOpened: false,
  currentEditingID: false,
  nesto: "bla bla",
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
    default:
      return state;
  }
};
