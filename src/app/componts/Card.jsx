function Card({ title, price, id }) {
  return (
    <div>
      <li>{title}</li>
      <li>{price}</li>
      <li>{id}</li>
    </div>
  );
}

export default Card;
