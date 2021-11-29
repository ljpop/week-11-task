import './EmptyList.css';
import Empty from "../../assets/illustration-empty.svg";

const EmptyList = () => {
    return (
        <div className='empty-list'>
            <img className='light-img img-empty'
              src={Empty} alt=''/>
            <div className='text-container'>
            <h2>There is nothing here</h2>
            <p>Create an invoice by clickling the <strong>New Invoice</strong> button and get started </p>
            </div>
        </div>
    )
}

export default EmptyList
