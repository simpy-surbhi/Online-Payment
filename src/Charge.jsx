// stripe.button.component.jsx
import React from "react";
import StripeCheckout from "react-stripe-checkout";

const Charge = ({ price }) => {
  const priceForStripe = price * 100;

  const publishableKey =
    "pk_test_51GvvaGF693jtJiO0NAvb4RHhO4p4VCXt0hiTsQNXTQq2SAmM3tOmbtuOXyHHZaUwSqExyNwyMQdrTCIKSJj2aQxT00LoN9Y7nx";

  const onToken = (token) => {
    console.log(token);
    alert("Payment Succesful!");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="Welcome to Donate Company"
      billingAddress
      shippingAddress
      // image="https://www.freakyjolly.com/wp-content/uploads/2020/04/fj-logo.png"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default Charge;
