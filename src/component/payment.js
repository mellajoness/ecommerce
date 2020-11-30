import React,{Component} from 'react';
import '../shared/css/payment.css';
import {GET_SERVICE} from "../shared/backend";
import { PaystackButton } from 'react-paystack'

class PaymentScreen extends Component {
  state={ 
        amount:1000000,
        email:'',
        name:'',
        phone:'',
        loading: false,  
      }

      
        async componentDidMount(){
        
  }

   componentProps = {
    email:this.state.email,
    amount:this.state.amount,
    metadata: {
      name:this.state.name,
      phone:this.state.phone,
    },
 
    publicKey:'pk_test_beefe67a6144e4aadd37a23bedeaef99085b3d9d',
    text: "Pay Now",
    
    
    onSuccess: () =>
      alert("Thanks for doing business with us! Come back soon!!"),
    onClose: () => alert("Wait! You need this oil, don't go!!!!"),
  }
  
  handleClick(product) {
    this.props.history.push('/checkout',{
        state:product
  });
  localStorage.setItem('product', JSON.stringify(product));
  }

  render(){
  return (


<div className="App">
  <div className="paycontainer">
    <div className="item">
      <div className="overlay-effect"></div>
      <img
        className="item-image"
        src="https://images.unsplash.com/photo-1526947425960-945c6e72858f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
        alt="product"
      />
      <div className="item-details">
        <p className="item-details__title">AGBADA</p>
        <p className="item-details__amount">NGN {this.state.amount / 100}</p>
      </div>
    </div>
    <div className="checkout">
      <div className="checkout-form">
        <div className="checkout-field">
          <label>Name</label>
         <input 
           type="text"
           id="name"
           onChange={(name) => this.setState({name:name})}
          />
        </div>
        <div className="checkout-field">
          <label>Email</label>
          <input
            type="text"
            id="email"
            onChange={(email) => this.setState({email:email})}
            // onChange={(e) => this.setState(e.target.value)}
          />
        </div>
        <div className="checkout-field">
          <label>Phone</label>
          <input
           type="text"
           id="phone"
           onChange={(phone) => this.setState({phone:phone})}
        
          />
        </div>

      <PaystackButton className="paystack-button" {...this.componentProps} />
      </div>
    </div>
  </div>
</div>
  )}}
  export default PaymentScreen;