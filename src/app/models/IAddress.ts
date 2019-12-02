import Geo from "./IGeo";

export default interface Address {
  street: string;
  suite: string;
  city: string;
  zipcde: string;
  geo: Geo;
}
