// StyledComponents.js
import styled from "styled-components";

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Navbar = styled.nav`
  position: sticky;
  top: 0;
  background: linear-gradient(
    to right,
    #233159,
    #1b1928
  ); /* Add gradient background */
  color: white;
  width: 100%;
  z-index: 999; /* Ensure Navbar appears above other content */
  h1 {
    padding-left: 24px;
    font-weight: 600;
  }
`;

export const MainContent = styled.div`
  display: flex;
  width: 100%;
`;

export const ProductListContainer = styled.div`
  width: 70%;
  overflow-y: auto;
  margin: 0 14px 24px;
  h2 {
    font-size: 18px;
  }
`;

export const CartContainer = styled.div`
  width: 25%;
  position: fixed; /* Set position to fixed */
  right: 0; /* Align to the right side */
  height: 100vh; /* Set height to full viewport height */
  background-color: #f2f2f2;
  padding: 10px 1rem;
  border-left: 2px solid #233158;
  h2 {
    font-size: 18px;
    padding-bottom: 18px;
    margin: 0;
  }
  p {
    margin: 0;
    font-size: 12px;
    color: #2121be;
    padding: 4px;
  }
`;

export const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
`;

export const ProductCard = styled.div`
  border: 2px solid #3c5192;
  display: flex;
  gap: 14px;
  background: #f3f6ff;
  border-radius: 3px;
  h4 {
    margin: 0;
    padding: 4px;
    text-align: left;
    font-size: 16px;
    font-weight: 500;
  }
  p {
    margin: 0;
    font-size: 14px;
    text-align: left;
    padding: 4px;
  }
  h2 {
    margin: 0;
    text-align: left;
    padding: 4px;
    font-size: 24px;
  }
  img {
    height: 120px;
    width: 150px;
  }
  button {
    color: white;
    padding: 4px 12px;
    border-radius: 3px;
    cursor: pointer;
    margin-top: 12px;
  }
`;

export const Cart = styled.div`
  background-color: #fff;
  border: 1px solid #ccc;
  padding: 1rem;
`;
