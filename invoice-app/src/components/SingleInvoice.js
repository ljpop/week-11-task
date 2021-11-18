import './SingleInvoice.css';

const SingleInvoice = ({singledata}) => {
    return (
        <div className='single-invoice'>
            <div className = 'singleItem'>{singledata.id}</div>
           <div className = 'singleItem'>Due {singledata.paymentDue} </div>
           <div className = 'singleItem'>{singledata.clientName} </div>
           <div className = 'singleItem'>{singledata.total} </div>

{/* /*TODO: draft light */}
           <div className = 'singleItem' style = {{textTransform:'capitalize', color: singledata.status==='paid'? '#33D69F' : (singledata.status==='pending' ? '#FF8F00': '#373B53')}}> <span className='little-circle'>•</span> {singledata.status}  </div>
        </div>
    )
}

export default SingleInvoice
