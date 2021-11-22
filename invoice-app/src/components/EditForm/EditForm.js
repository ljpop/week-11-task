import { useState } from "react";
import { _getSingleInvoiceByID } from "../../utils/inovice-utils";
import Input from "../Input/Input";
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
        <Input
          name="description"
          handleChange={handleChange}
          value={state.description}
        />

        <Input
          name="clientName"
          handleChange={handleChange}
          value={state.clientName}
        />

        <Input name="total" handleChange={handleChange} value={state.total} />

        <Input name="status" handleChange={handleChange} value={state.status} />

        <Input
          name="clientEmail"
          handleChange={handleChange}
          value={state.clientEmail}
        />

        <Input
          name="paymentDue"
          handleChange={handleChange}
          value={state.paymentDue}
        />

        <Input
          name="createdAt"
          handleChange={handleChange}
          value={state.createdAt}
        />

        <Input value={invoice.paymentTerms} />
        <button
          onClick={(e) => {
            e.preventDefault();
            props.updateItem(props.id, state);
            props.closeForm();
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