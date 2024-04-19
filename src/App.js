// App.js
import React, { Component } from "react";
import Cart from "./Components/Uniblox_Assignment/Cart";
import Checkout from "./Components/Uniblox_Assignment/CheckOut";
import DummyProductList from "./Components/Uniblox_Assignment/DummyProductList";
import {
  AppContainer,
  Navbar,
  MainContent,
  ProductListContainer,
  CartContainer,
  ProductGrid,
  ProductCard,
} from "./Components/Uniblox_Assignment/StyledComponents"; // Import styled-components

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: [],
      total: 0,
    };
  }

  addToCart = (product) => {
    const { cart } = this.state;
    const existingItemIndex = cart.findIndex((item) => item.id === product.id);
    if (existingItemIndex !== -1) {
      // If the item is already in the cart, remove it
      this.removeFromCart(existingItemIndex);
    } else {
      // If the item is not in the cart, add it
      this.setState((prevState) => ({
        cart: [...prevState.cart, product],
        total: prevState.total + product.price,
      }));
    }
    alert(
      "Calling backend API to add item in cart...item added in cart successfully!"
    );

    // Call backend API to add item to cart, Assuming that this api is for adding item in cart, only to show will integrate api like this
    // axios.post('/api/cart/add', { itemId:product.id, quantity:product.quantity })
    //   .then(response => {
    //     alert("Item added in cart successfully!");
    //   })
    //   .catch(error => {
    //     console.error('Error adding item to cart:', error);
    //   });
  };

  removeFromCart = (productId) => {
    const updatedCart = this.state.cart.filter((item) => item.id !== productId);
    const removedItem = this.state.cart.find((item) => item.id === productId);
    if (removedItem) {
      this.setState((prevState) => ({
        cart: updatedCart,
        total: prevState.total - removedItem.price,
      }));
    }
  };

  checkout = () => {
    // Call backend API to to checkout coupon, Assuming that this api is for checkout.
    // axios.post('/api/cart/checkout', { required data})
    //   .then(response => {
    //     alert("Order placed successfully!");
    //   })
    //   .catch(error => {
    //     console.error('Error in checkout.', error);

    // For simplicity, let's just toggle the state
    alert("Calling checkout api...Order placed successfully!");
    this.setState({ cart: [], total: 0 });
  };

  render() {
    const { cart, total } = this.state;

    return (
      <AppContainer>
        <Navbar>
          <h1>Uniblox Assignment</h1>
        </Navbar>
        <MainContent>
          <ProductListContainer>
            <h2>Product Details</h2>
            <ProductGrid>
              {DummyProductList.map((product) => (
                <ProductCard key={product.id}>
                  <img src={product.image} alt={product.name} />
                  <div>
                    <h4>{product.name}</h4>
                    {/* <p>Rating: {product.rating}/5</p> */}
                    <h2>${product.price}</h2>
                    <button
                      onClick={() => this.addToCart(product)}
                      // Change button text based on whether the item is in the cart
                      style={{
                        backgroundColor: cart.some(
                          (item) => item.id === product.id
                        )
                          ? "gray"
                          : "#222e53",
                      }}
                    >
                      {cart.some((item) => item.id === product.id)
                        ? "Added to Cart"
                        : "Add to Cart"}
                    </button>
                  </div>
                </ProductCard>
              ))}
            </ProductGrid>
          </ProductListContainer>
          <CartContainer>
            <h2>Cart Details</h2>
            <Cart
              cart={cart}
              total={total}
              removeFromCart={this.removeFromCart}
            />
            <p>
              I am assuming a discount code will be provided on each order.
            </p>
            <Checkout checkout={this.checkout} cart={cart} />
          </CartContainer>
        </MainContent>
      </AppContainer>
    );
  }
}

export default App;
