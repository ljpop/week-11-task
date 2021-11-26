import "./SingleInvoice.css";
import ArrowRight from "../../assets/icon-arrow-right.svg";
import { useNavigate } from "react-router-dom";

const SingleInvoice = ({ singledata }) => {
  const navigate = useNavigate();

  const _click = (id) => {
    navigate("/invoice/" + singledata.id);
  };

  const options = { year: "numeric", month: "short", day: "numeric" };
  return (
    <div
      className="single-invoice"
      onClick={(e) => {
        _click(singledata.id);
      }}
    >
      <div className="flex-column">
        <div className="flex-row">
          <div className="singleItem id">
            <span className="hash">#</span>
            {singledata.id}
          </div>
          <div className="singleItem date ">
            {singledata.paymentDue
              ? "Due " +
                new Date(singledata.paymentDue).toLocaleString("en-GB", options)
              : "Not defined "}{" "}
          </div>
        </div>
        <div className="singleItem name ">
          {singledata.clientName ? singledata.clientName : "Not defined "}{" "}
        </div>
      </div>
      <div className="flex-column">
        <div className="singleItem total  total-mob">
          {singledata.total
            ? "£" + Number(singledata.total).toFixed(2)
            : "Not defined "}
        </div>
        <div
          className={`singleItem status status-mob ${singledata.status}`}
          style={{
            textTransform: "capitalize",
          }}
        >
          <span className="little-circle">•</span>{" "}
          {singledata.status
            ? singledata.status
            : (singledata.status = "draft")}
        </div>
      </div>
      <div>
        <img className="arrow-right arrow-mob" src={ArrowRight} alt="" />
      </div>
    </div>
  );
};

export default SingleInvoice;
