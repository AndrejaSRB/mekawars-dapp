import { useState, useEffect } from 'react';
import { useWeb3Context } from '../../context';
import type { Box } from '../typechain-types';
import { Box__factory } from '../typechain-types';
import { mumbai } from './contractAddress';

const useBoxContract = () => {
  const { address, provider, web3Provider } = useWeb3Context();
  const [contract, setContract] = useState<Box | null>(null);

  useEffect(() => {
    if (address && provider && web3Provider) {
      const BoxFactory = new Box__factory();

      const BoxContract = BoxFactory.attach(mumbai.Box);

      setContract(BoxContract.connect(web3Provider.getSigner()));
    }
  }, [address, provider, web3Provider]);

  return { contract };
};

export default useBoxContract;
