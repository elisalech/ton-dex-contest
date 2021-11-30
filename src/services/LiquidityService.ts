import { confirmTransaction } from 'mocks/confirmService';

class LiquidityService {
  async createTransaction() {
    confirmTransaction('Dou you want to create liquidity?');
  }
}

export default new LiquidityService();
