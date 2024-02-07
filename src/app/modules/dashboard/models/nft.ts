export interface Nft {
  id: number;
  title?: string;
  last_bid?: number;
  price?: string;
  creator?: string;
  avatar?: string;
  instant_price?: number;
  ending_in?: string;
  image?: string;
}

export interface Vehiculo {
  id?: number;
  title?: string;
  subtitle?: string;
  last_bid?: number;
  price?: number;
  creator?: string;
  avatar?: string;
  instant_price?: number;
  ending_in?: string;
  image?: string;
}
