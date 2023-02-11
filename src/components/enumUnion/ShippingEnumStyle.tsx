import {useState} from 'react';

enum CheckoutStepType {
    Enum_Details = 'Details',
    Enum_Shipping = 'Shipping',
    Enum_Payment = 'Payment'
}
// Problem with enums is that you will always to import it

function ShippingEnumStyle() {
    const [checkoutStep, setCheckoutStep] = useState<CheckoutStepType>(CheckoutStepType.Enum_Details);

    return (
      <>
        {checkoutStep === "Details" && (
          <>
            <h1>Details</h1>
            <button type="button" onClick={() => setCheckoutStep(CheckoutStepType.Enum_Shipping)}>
              Next
            </button>
          </>
        )}
  
        {checkoutStep === "Shipping" && (
          <>
            <h1>Shipping</h1>
            <button type="button" onClick={() => setCheckoutStep(CheckoutStepType.Enum_Payment)}>
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

export default ShippingEnumStyle;
