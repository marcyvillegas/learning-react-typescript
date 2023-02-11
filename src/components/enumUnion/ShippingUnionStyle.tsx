import {useState} from 'react';

type CheckoutStepType = "Details" | "Shipping" | "Payment";

function ShippingUnionStyle() {
    const [checkoutStep, setCheckoutStep] = useState<CheckoutStepType>("Details");

    return (
      <>
        {checkoutStep === "Details" && (
          <>
            <h1>Details</h1>
            <button type="button" onClick={() => setCheckoutStep("Shipping")}>
              Next
            </button>
          </>
        )}
  
        {checkoutStep === "Shipping" && (
          <>
            <h1>Shipping</h1>
            <button type="button" onClick={() => setCheckoutStep("Payment")}>
              Next
            </button>
          </>
        )}
  
        {checkoutStep === "Payment" && (
          <>
            <h1>Payment</h1>
          </>
        )}
      </>
    );
}

export default ShippingUnionStyle;
