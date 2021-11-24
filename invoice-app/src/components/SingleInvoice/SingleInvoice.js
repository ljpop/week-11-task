import "./SingleInvoice.css";
import ArrowRight from "../../assets/icon-arrow-right.svg";
// import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const SingleInvoice = ({ singledata }) => {
  const navigate = useNavigate();

  const _click = (id) => {
    // console.log("klik", id);
    navigate("/invoice/" + singledata.id);
  };

  const options = { year: "numeric", month: "short", day: "numeric" };
  // const pathZaSingleInvocePage = "/invoice/" + singledata.id;
  return (
    <div
      className="single-invoice"
      onClick={(e) => {
        _click(singledata.id);
      }}
    >
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
      <div className="singleItem name ">
        {singledata.clientName ? singledata.clientName : "Not defined "}{" "}
      </div>
      <div className="singleItem total">
        {singledata.total
          ? "£" + Number(singledata.total).toFixed(2)
          : "Not defined "}
      </div>
      {/* <div
        className="singleItem status"
        style={{
          textTransform: "capitalize",
          color:
            singledata.status === "paid"
              ? "#33D69F"
              : singledata.status === "draft"
              ? "#373B53"
              : "#FF8F00",
          backgroundColor:
            singledata.status === "paid"
              ? "rgb(243, 253, 250)"
              : singledata.status === "draft"
              ? "rgb(244,244,245)"
              : "rgb(255,249,240)",
        }}
      >
        <span className="little-circle">•</span>{" "}
        {singledata.status ? singledata.status : (singledata.status = "Draft")}
      </div> */}
      <div
        className={`singleItem status ${singledata.status}`}
        style={{
          textTransform: "capitalize",
        }}
      >
        <span className="little-circle">•</span>{" "}
        {singledata.status ? singledata.status : (singledata.status = "draft")}
      </div>
      <div>
        <img className="arrow-right" src={ArrowRight} alt="" />
      </div>
    </div>
  );
};

export default SingleInvoice;

// rgb(255,249,240)
