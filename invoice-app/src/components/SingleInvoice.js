import './SingleInvoice.css';

const SingleInvoice = ({singledata}) => {
    return (
        <div className='single-invoice'>
            <div>This is a single invoice id:  {singledata.id}</div>
           <div>Text:  {singledata.text}     </div>
        </div>
    )
}

export default SingleInvoice
