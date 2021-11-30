import { useMemo } from 'react';
import { useCallback, useState } from 'react';
import Wallet from 'services/Wallet';

import { setUserAddress } from 'store/user/actions';

import { useAppDispatch } from './useAppDispatch';
import useWalletAddress from './useWalletAdress';

export const useUserState = () => {
  const dispatch = useAppDispatch();
  const address = useWalletAddress();
  const [loading, setLoading] = useState<boolean>(false);

  const handleConnect = useCallback(async () => {
    setLoading(true);
    const connectedAddress = await Wallet.connect();
    if (connectedAddress) {
      dispatch(setUserAddress(connectedAddress));
    }
    setLoading(false);
  }, []);

  const tonBalance = useMemo(() => (address ? '10.8932' : ''), [address]);

  return {
    address,
    loading,
    handleConnect,
    tonBalance,
  };
};
