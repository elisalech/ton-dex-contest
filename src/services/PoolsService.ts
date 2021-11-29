import { PoolData } from 'types';

class PoolsService {
  async getPools(): Promise<PoolData[]> {
    const res = await fetch(
      'https://governance.1inch.io/v1.2/56/protocol/pairs',
    );
    const json = await res.json();

    return json as PoolData[];
  }
}

export default new PoolsService();
