import React, { useState } from "react";
import styled from "styled-components";

const CheckoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 14px;
  align-items: normal;
`;

const CheckoutButton = styled.button`
  background-color: #d51b1b;
  color: white;
  border: none;
  padding: 5px 8px;
  cursor: pointer;
  font-weight: 700;
  border-radius: 2px;
  margin-top: 10px;
`;

const CouponInput = styled.input`
  margin-top: 10px;
  padding: 5px;
`;

const ApplyCouponButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 5px 8px;
  cursor: pointer;
  font-weight: 700;
  border-radius: 2px;
  margin-top: 10 px;
`;

const GenerateCouponButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 5px 8px;
  cursor: pointer;
  font-weight: 700;
  border-radius: 2px;
`;

const Checkout = ({ checkout, cart }) => {
  const [coupon, setCoupon] = useState("");
  const [couponGenerated, setCouponGenerated] = useState(false);
  const [couponApplied, setCouponApplied] = useState(false);
  const [discountApplied, setDiscountApplied] = useState(false);

  const handleCouponGeneration = () => {
    // Call backend API to to generate coupon, Assuming that this api is for generating coupon.
    // axios.post('/api/cart/generate/coupon', { userId:product.id})
    //   .then(response => {
    //     alert("Coupon code generated successfully!");
    //   })
    //   .catch(error => {
    //     console.error('Error in generating code.', error);
    //   });
    // For simplicity, let's just toggle the state
    setCouponGenerated(!couponGenerated);
    alert(
      "Calling backend API to generate coupon code...Coupon code generated successfully! Your coupon code is 12345"
    );
  };

  const handleApplyCoupon = () => {
    // Call backend API to validate coupon, Assuming that this api is for validating coupon.
    // axios.post('/api/cart/generate/coupon', {coupon})
    //   .then(response => {
    //     alert("Coupon code applied successfully!");
    //   })
    //   .catch(error => {
    //     console.error('Invalid coupon code.', error);
    //   });
    if (coupon === "12345") {
      setCouponApplied(true);
      setDiscountApplied(true);
    } else {
      alert("Invalid coupon code.");
    }
  };

  const calculateDiscountedTotal = () => {
    let total = 0;
    cart.forEach((item) => {
      total += item.price;
    });

    if (discountApplied) {
      // Apply 10% discount
      total -= total * 0.1;
    }

    return total;
  };

  return (
    <CheckoutContainer className="checkout">
      {couponGenerated ? (
        <>
          {!couponApplied ? (
            <>
              <CouponInput
                type="text"
                placeholder="Enter 5-digit coupon"
                value={coupon}
                maxLength={5}
                onChange={(e) => setCoupon(e.target.value)}
              />
              <ApplyCouponButton onClick={handleApplyCoupon}>
                Apply Coupon
              </ApplyCouponButton>
            </>
          ) : (
            <React.Fragment>
              {cart.length === 0 ? null : (
                <p>Coupon applied successfully! You get 10% discount.</p>
              )}
            </React.Fragment>
          )}
          {cart.length === 0 ? null : (
            <CheckoutButton onClick={checkout}>
              Checkout ({discountApplied ? "Discounted" : ""} Total: $
              {calculateDiscountedTotal().toFixed(2)})
            </CheckoutButton>
          )}
        </>
      ) : (
        <React.Fragment>
          {cart.length === 0 ? null : (
            <GenerateCouponButton onClick={handleCouponGeneration}>
              Generate Coupon
            </GenerateCouponButton>
          )}
        </React.Fragment>
      )}
    </CheckoutContainer>
  );
};

export default Checkout;
