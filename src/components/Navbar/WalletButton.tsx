import { useUserState } from 'hooks/useUserState';

import truncateHash from 'utils/truncateHash';

import { Button } from 'components/Button/Button';

export default function WalletButton() {
  const { address, handleConnect, loading } = useUserState();

  return address ? (
    <Button>{truncateHash(address)}</Button>
  ) : (
    <Button loading={loading} onClick={handleConnect}>
      Connect wallet
    </Button>
  );
}
