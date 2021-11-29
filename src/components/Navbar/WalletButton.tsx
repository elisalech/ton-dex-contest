import { Button } from 'components/Button/Button';
import IWallet from 'components/Icons/IWallet';
import { useUserState } from 'hooks/useUserState';
import truncateHash from 'utils/truncateHash';

export default function WalletButton() {
  const { address, handleConnect, loading } = useUserState();

  console.log('address', address);

  return address ? (
    <Button
      loading={loading}
      // onClick={handleConnect}
      startIcon={<IWallet width={24} height={24} />}>
      {truncateHash(address)}
    </Button>
  ) : (
    <Button loading={loading} onClick={handleConnect}>
      Connect wallet
    </Button>
  );
}
