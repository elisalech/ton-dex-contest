import { PoolData } from 'types';

class PoolsService {
  async getPools(): Promise<PoolData[]> {
    const res = await fetch(
      'https://governance.1inch.io/v1.2/56/protocol/pairs',
    );
    const poolsData: PoolData[] = await res.json();

    // just to simplify demo presentation
    const selectedPools = poolsData
      .sort((a, b) => parseFloat(b.reserveUSD) - parseFloat(a.reserveUSD))
      .slice(0, 100);

    return selectedPools;
  }
}

export default new PoolsService();
