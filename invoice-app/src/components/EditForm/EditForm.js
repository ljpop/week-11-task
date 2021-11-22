import { useState } from "react";
import { _getSingleInvoiceByID } from "../../utils/inovice-utils";
import "./EditForm.css";

const EditForm = (props) => {
  const invoice = _getSingleInvoiceByID(props.id, props.data);
  const [state, setState] = useState(invoice);
  const handleChange = (e) => {
    let value = e.target.value;
    let name = e.target.name;
    setState({
      ...state,
      [name]: value,
    });
  };

  let jsx = null;
  if (invoice) {
    jsx = (
      <>
        <input
          name="description"
          onChange={handleChange}
          value={state.description}
        />
        <br />
        <input
          name="clientName"
          onChange={handleChange}
          value={state.clientName}
        />
        <br />
        <input name="total" onChange={handleChange} value={state.total} />
        <br />
        <input name="status" onChange={handleChange} value={state.status} />
        <br />
        <input
          name="clientEmail"
          onChange={handleChange}
          value={state.clientEmail}
        />
        <br />
        <input
          name="paymentDue"
          onChange={handleChange}
          value={state.paymentDue}
        />
        <br />
        <input
          name="createdAt"
          onChange={handleChange}
          value={state.createdAt}
        />
        <br />

        <input value={invoice.paymentTerms} />
        <button
          onClick={(e) => {
            e.preventDefault();
            props.updateItem(props.id, state);
          }}
        >
          Submit
        </button>
      </>
    );
  }
  return (
    <div className="new-invoice-form">
      <form>
        Edit Invoice {props.id}
        {jsx}
      </form>
      <div className="close-form" onClick={props.closeForm}>
        X
      </div>
    </div>
  );
};

export default EditForm;
