import React, { Component } from "react";
import StripeCheckout from "react-stripe-checkout";
import { connect } from "react-redux";
import * as actions from "../actions/index.js";

class Stripe_billing extends Component {
    render() {   
        return (
            <StripeCheckout 
             name="Survey App"
             description="Get new extra credits for $5."
             amount={500}
             token={token => this.props.handle_token(token)}
             stripeKey={process.env.REACT_APP_STRIPE_KEY}
            >
                <button className="btn-flat white-text">Add Credits</button>
            </StripeCheckout>
        )
    }
}

export default connect(null, actions)(Stripe_billing);