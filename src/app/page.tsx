"use client" 
import Navbar from '../app/components/navbar';
import ProductCard from '../app/components/priductcard';
import styled from 'styled-components';

interface Product {
  name: string;
  price: string;
  image: string;
}

const Home: React.FC = () => {
  const products: Product[] = [
    {
      name: 'Laptop',
      price: '799',
      image: '/images/laptop.jpg',
    },
    {
      name: 'Phone',
      price: '499',
      image: '/images/phone.jpg',
    },
    {
      name: 'Headphones',
      price: '199',
      image: '/images/headphones.jpg',
    },
  ];

  return (
    <>
      <Navbar />
      <Container>
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </Container>
    </>
  );
};

export default Home;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 2rem;
`;
