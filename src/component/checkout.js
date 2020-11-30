import React, { Component } from 'react';
import '../shared/css/checkout.css';
const initialState = {
  counter:0
};
class CheckoutScreen extends Component {
  state={ 
     item:[{}],
    loading: false,  
    counter:0,
  }

 

 
  increment=()=>{
    this.setState({counter:this.state.counter+1})
    localStorage.setItem('increment', JSON.stringify(this.state.counter));
  }

  decrement=()=>{
    this.setState({counter:this.state.counter-1})
    localStorage.setItem('increment', JSON.stringify(this.state.counter));
  }
  reset=()=>{
    this.setState(initialState)
    localStorage.clear('increment',(this.state.counter));
  }
  handleClick() {
    this.props.history.push('/');
  }item
  payment=()=>{
   
    this.props.history.push("/payment")

  }

  componentDidMount(){
    this.setState({item:JSON.parse(localStorage.getItem('product'))})
    console.log('pushed data ',this.state.item)

    // localStorage.getItem('product', JSON.stringify(product));
    // localStorage.getItem('increment', JSON.stringify(increment));
    // console.log('my storagae data',product)
  }
  render() {
  console.log('object array',this.state.item)
  let ab=JSON.parse(localStorage.getItem('increment'))===null ? 0 : JSON.parse(localStorage.getItem('increment'))
  
  console.log('number',ab)
    return (
      <div>
        <div className="navbar">
        
           <div>LOGO</div>
           
          
          <div className="cartno"  onClick={()=>this.reset()}>
          <div className="carttext">Cart</div>
    <div className="itemnumb">{ab}</div>
          </div>
        </div>
        <div className="rowcheckout">
           <div className="productimage">
            <img src={this.state.item.image} className="image" alt={this.state.item.description}/>  
           </div>

           <div className="productdetails">
          <div>{this.state.item.title}</div>
              <div className="checkoutprice">₦{this.state.item.price}</div>

              <div className="btndiv">
              <button className="btn" onClick={()=>this.increment()}>
                 +
              </button>

    <div className="counter">{ab}</div>

              <button disabled={JSON.parse(localStorage.getItem('increment'))===0} className="btn" onClick={()=>this.decrement()}>
                 -
              </button>
              
           </div>
           <button className="deletebtn" onClick={()=>this.payment()}>Payment</button>
           </div>

          
        </div>
       
       {/* <button type="button" onClick={() => this.handleClick()}>
        Checkoutpage
      </button>  */}
     
      </div>
    );
  }
};

export default CheckoutScreen;