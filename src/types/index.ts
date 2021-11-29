export type Address = string;

export interface Currency {
  name: string;
  symbol: string;
  address: Address;
  decimals: number;
  logoURI: string;
}

type MapAddressToType<T> = { [address: Address]: T | undefined };

export type CurrencyMap = MapAddressToType<Currency>;

export interface TokenAmount {
  currency: Currency;
  amount: string;
}

export type TokenAmountMap = MapAddressToType<TokenAmount>;

// 1-1 from 1inch
export interface PoolData {
  pair: Address;
  token0: {
    address: Address;
    symbol: string;
    decimals: string;
    derivedETH: string;
  };
  token1: {
    address: Address;
    symbol: string;
    decimals: string;
    derivedETH: string;
  };
  reserveUSD: string;
  volumeUSD: string;
  createdAtBlockNumber: string;
  apy: string;
  reserve0: string;
  reserve1: string;
  totalSupply: string;
  lpExtraFeeInToken0: string;
  lpExtraFeeInToken1: string;
  swapEarningsUSD24h: string;
  swapEarningsPercent24h: string;
  volumeUSD24h: string;
}

export type PoolsMap = MapAddressToType<PoolData>;
