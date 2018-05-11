import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';
import * as actions from '../actions';

const Payments = (props) => {
  return (
    <StripeCheckout   // similar to DatePicker
      name="Emaily"
      description="$5 for 5 email credits"
      amount={500}
      token={token => props.handleToken(token)} // a callback funtion
      stripeKey={process.env.REACT_APP_STRIPE_KEY}
    > 
      <button className="btn">  
        Add Credits
      </button>
    </StripeCheckout> // child component
  );
};

export default connect(null, actions)(Payments);
