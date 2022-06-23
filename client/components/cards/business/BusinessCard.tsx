export interface IBusinessCard {
  name: string;
  location: string;
  numReviews: number;
  avgRating: number;
  status?: string;
}

function BusinessCard(props: IBusinessCard) {
  return <div>{props.name}</div>;
}

export default BusinessCard;
