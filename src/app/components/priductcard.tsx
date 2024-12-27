"use client" 
// components/ProductCard.js
import styled from 'styled-components';
export interface Producttype  {
name:string;
price:string;
image:string;


}
interface Productprops{
    product:Producttype;
}

const ProductCard : React.FC<Productprops>=({product}) => {
  return (
    <Card>
      <Image src={product.image} alt={product.name} />
      <Details>
        <h3>{product.name}</h3>
        <p>${product.price}</p>
      </Details>
    </Card>
  );
};

export default ProductCard;

const Card = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  width: 200px;
  margin: 1rem;
  padding: 1rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Image = styled.img`
  width: 100%;
  height: auto;
`;

const Details = styled.div`
  margin-top: 1rem;
  text-align: center;
`;