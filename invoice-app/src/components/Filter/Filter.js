import "./Filter.css";
import ArrowUp from "../../assets/icon-arrow-down.svg";

const Filter = () => {
  return (
    <>
    <div className="filter desktop">
      Filter by status
      <img className="arrow-up" src={ArrowUp} alt="" />
    </div>
    <div className="filter mob">
      Filter
      <img className="arrow-up" src={ArrowUp} alt="" />
    </div>
    </>
  );
};

export default Filter;
