export type Address = string;

export interface Currency {
  name: string;
  symbol: string;
  address: Address;
  decimals: number;
  logoURI: string;
}

export type CurrencyMap = { [address: Address]: Currency };
