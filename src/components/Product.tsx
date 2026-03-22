// src/components/Product.tsx
interface ProductProps {
  name: string;
  imgUrl: string;
  price: number;
}

export default function Product({ name, imgUrl, price }: ProductProps) {
  return (
    <div>
      <h2 style={{ padding: "12px 16px", color: "white" }}>{name}</h2>
      <img src={imgUrl} alt={name} width="300" />
      <p>Price: {price} credits</p>
    </div>
  );
}
