import './SingleInvoice.css';

const SingleInvoice = ({singledata}) => {
    return (
        <div className='single-invoice'>
            <div className = 'singleItem id'><span className='hash'>#</span>{singledata.id}</div>
           <div className = 'singleItem name-date '>Due {singledata.paymentDue} </div>
           <div className = 'singleItem name-date '>{singledata.clientName} </div>
           <div className = 'singleItem total'>{singledata.total} </div>

{/* /*TODO: draft light */}
           <div className = 'singleItem status' style = {{textTransform:'capitalize', color: singledata.status==='paid'? '#33D69F' : (singledata.status==='draft' ? '#373B53': '#FF8F00'), backgroundColor: singledata.status==='paid'? 'rgb(243, 253, 250)' :(singledata.status==='draft' ? 'rgb(244,244,245)': 'rgb(255,249,240)') }}> <span className='little-circle'>•</span> {singledata.status}  </div>
        </div>
    )
}

export default SingleInvoice

// rgb(255,249,240)