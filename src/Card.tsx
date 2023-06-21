interface ICard {
  header: string;
  text: string;
  price: number;
}
export const Card = ({ header, text, price }: ICard) => {
  return (
    <>
      <div className="col-lg-2 col-md-3 col-sm-8 col-9 mb-4  col-11 bg-secondary  text-white	 opacity-75 card	  rounded ">
        <h4 className="text-break m-0">{header}</h4>
        <hr />
        <h6 className="text-break m-0">{text}</h6>
        <hr />
        <h6 className="text-break mb-2">{"Ценна: " + price + " руб"}</h6>
      </div>
    </>
  );
};
