import { useState } from "react";
import { connect, useDispatch } from "react-redux";
import { _getSingleInvoiceByID } from "../../utils/inovice-utils";
import Input from "../Input/Input";
import "./EditForm.css";

const EditForm = (props) => {
  const invoice = _getSingleInvoiceByID(props.id, props.invoicesData);
  const [state, setState] = useState(invoice);

  const dispatch = useDispatch();
  const handleChange = (e) => {
    let value = e.target.value;
    let name = e.target.name;
    setState({
      ...state,
      [name]: value,
    });
  };

  const _close = () => {
    dispatch({
      type: "CLOSE_FORM",
    });
  };

  let jsx = null;
  if (invoice) {
    jsx = (
      <>
        <div>
          <label>Bill from </label>
          <br />
          <label>Description </label>
          <br />

          <Input
            name="description"
            handleChange={handleChange}
            value={state.description}
          />
          <label>Client Name </label>
          <br />
          <Input
            name="clientName"
            handleChange={handleChange}
            value={state.clientName}
          />
        </div>
        <label>Total </label>
        <br />

        <Input name="total" handleChange={handleChange} value={state.total} />

        <label>Status </label>
        <br />
        <Input name="status" handleChange={handleChange} value={state.status} />
        <label>Client E-mail </label>
        <br />
        <Input
          name="clientEmail"
          handleChange={handleChange}
          value={state.clientEmail}
        />
        <label>Payment Due </label>
        <br />

        <Input
          name="paymentDue"
          handleChange={handleChange}
          value={state.paymentDue}
        />
        <label>Created At </label>
        <br />

        <Input
          name="createdAt"
          handleChange={handleChange}
          value={state.createdAt}
        />

        <button
          onClick={(e) => {
            e.preventDefault();
            dispatch({
              type: "UPDATE_INVOICE",
              payload: {
                id: props.id,
                editedValues: state,
              },
            });
            dispatch({ type: "CLOSE_FORM" });
          }}
        >
          Submit
        </button>
      </>
    );
  }
  return (
    <div className="edit-invoice-form">
      <form>
        <div className="edit-form-header">Edit #{props.id}</div>
        {jsx}
      </form>
      <div className="close-form" onClick={_close}>
        X
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    id: state.currentEditingID,
    invoicesData: state.invoicesData,
  };
};
export default connect(mapStateToProps)(EditForm);
