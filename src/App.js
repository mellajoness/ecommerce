import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ProductScreen from './component/product';
import CheckoutScreen from './component/checkout';
import PaymentScreen from './component/payment'
const App = () => (
  <Router>
    <Route exact path="/" component={ProductScreen} />
    <Route path="/checkout" component={CheckoutScreen} />
    <Route path="/payment" component={PaymentScreen} />
  </Router>
);
export default App;
// render(<App />, document.getElementById('root'));