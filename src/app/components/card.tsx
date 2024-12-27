"use client";

import React, { useState } from "react";
import styled from "styled-components";

interface Product {
  name: string;
  price: number;
}

const Cart: React.FC = () => {
  // Cart state
  const [cart, setCart] = useState<Product[]>([
    { name: "Product 1", price: 20 },
    { name: "Product 2", price: 30 },
  ]);

  // Function to add a new item to the cart
  const addItemToCart = () => {
    const newItem: Product = { name: `Product ${cart.length + 1}`, price: Math.floor(Math.random() * 100) + 1 };
    setCart((prevCart) => [...prevCart, newItem]);
  };

  // Function to remove an item from the cart
  const removeItemFromCart = (index: number) => {
    setCart((prevCart) => prevCart.filter((_, i) => i !== index));
  };

  return (
    <Container>
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        cart.map((item, index) => (
          <CartItem key={index}>
            <span>{item.name}</span>
            <span>${item.price}</span>
            <button onClick={() => removeItemFromCart(index)}>Remove</button>
          </CartItem>
        ))
      )}
      <AddButton onClick={addItemToCart}>Add Item</AddButton>
    </Container>
  );
};

export default Cart;

const Container = styled.div`
  padding: 2rem;
`;

const CartItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid #ddd;

  button {
    background-color: #ff4d4d;
    border: none;
    color: white;
    padding: 0.5rem 1rem;
    cursor: pointer;
    border-radius: 4px;

    &:hover {
      background-color: #e60000;
    }
  }
`;

const AddButton = styled.button`
  margin-top: 1rem;
  background-color: #4caf50;
  border: none;
  color: white;
  padding: 0.75rem 1.5rem;
  cursor: pointer;
  border-radius: 4px;

  &:hover {
    background-color: #45a049;
  }
`;
