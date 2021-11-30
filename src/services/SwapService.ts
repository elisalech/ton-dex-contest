import { confirmTransaction } from 'mocks/confirmService';

class SwapService {
  async createTransaction() {
    confirmTransaction('Dou you want to swap tokens?');
  }
}

export default new SwapService();
