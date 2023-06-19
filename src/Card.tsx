interface ICard {
  header: string;
  text: string;
  price: number;
}
export const Card = ({ header, text, price }: ICard) => {
  return (
    <>
      <h4>{header}</h4>
      <h6>{text}</h6>
      <h6>{price + " руб"}</h6>
    </>
  );
};
