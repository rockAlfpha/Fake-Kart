import React from 'react';

class AddItem extends React.Component {
    
    render() { 
        return (

            <>
            <div className="mb-3 row">
        <label htmlFor="inputname" className="col-sm-2 col-form-label">
        Name
        </label>
        <div className="col-sm-10">
        <input type="text" className="form-control" id="inputname" />
        </div>
    </div>
    <div className="mb-3 row">
        <label htmlFor="inputPassword" className="col-sm-2 col-form-label">
        price
        </label>
        <div className="col-sm-10">
        <input type="text" className="form-control" id="inputPassword" />
        </div>
    </div>
    <button type='submit' className='btn btn-primary' onClick={()=>{this.props.AddItem()}}>Add item</button>
   

            </>
        );
    }
}
 
export default AddItem;