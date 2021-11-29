import { useAppSelector } from './useAppSelector';

const useWalletAddress = () => useAppSelector(store => store.user.address);

export default useWalletAddress;
