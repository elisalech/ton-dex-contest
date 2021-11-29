import { confirmTransaction } from 'mocks/confirmService';
import { MOCK_ADDRESS } from 'mocks/wallet';

class WalletService {
  async connect() {
    try {
      const connected = await confirmTransaction(
        'Dou you want to connect your Ton wallet?',
      );
      if (connected) {
        return MOCK_ADDRESS;
      }
      return false;
    } catch (e) {
      return false;
    }
  }
}

export default new WalletService();
