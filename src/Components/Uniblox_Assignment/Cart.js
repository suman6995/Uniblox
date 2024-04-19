import React from "react";
import styled from "styled-components";
const CartContainer = styled.div`
  border: 1px solid #ccc;
  padding: 10px;
  background-color: #fff;
`;

const CartItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 4px 0;
  p {
    margin: 0;
  }
`;

const RemoveButton = styled.button`
  background-color: #d51b1b;
  color: white;
  border: none;
  padding: 5px 8px;
  cursor: pointer;
  font-weight: 700;
  border-radius: 2px;
`;
const TotalCart = styled.div`
  display: flex;
  justify-content: space-between;
  p {
    margin: 0;
    font-weight: 600;
    color: #1c3ef5;
    margin: 14px 0 0 0;
  }
  h4 {
    color: #1c3ef5;
    margin: 14px 14px 0 0;
  }
`;
const Cart = ({ cart, total, removeFromCart }) => {
  return (
    <CartContainer>
      {cart.length === 0 ? (
        <div>No item in cart</div>
      ) : (
        <div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              borderBottom: "1px solid #ccc",
              paddingBottom: "5px",
            }}
          >
            <strong>Product Name</strong>
            <strong>Price</strong>
          </div>
          {cart.map((item) => (
            <CartItem key={item.id}>
              <p>{item.name}</p>
              <div style={{ display: "flex", gap: "8px" }}>
                <p>${item.price}</p>
                <RemoveButton onClick={() => removeFromCart(item.id)}>
                  X
                </RemoveButton>
              </div>
            </CartItem>
          ))}
          <TotalCart>
            <p>Total</p>
            <h4> ${total}</h4>
          </TotalCart>
         
        </div>
      )}
    </CartContainer>
  );
};

export default Cart;
