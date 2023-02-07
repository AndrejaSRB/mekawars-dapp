import { useState, useEffect } from 'react';
import { useWeb3Context } from '../../context';
import type { Crews } from '../typechain-types';
import { Crews__factory } from '../typechain-types';
import { mumbai } from './contractAddress';

const useCrewsContract = () => {
  const { address, provider, web3Provider } = useWeb3Context();
  const [contract, setContract] = useState<Crews | null>(null);

  useEffect(() => {
    if (address && provider && web3Provider) {
      const CrewsFactory = new Crews__factory();

      const CrewsContract = CrewsFactory.attach(mumbai.Crews);

      setContract(CrewsContract.connect(web3Provider.getSigner()));
    }
  }, [address, provider, web3Provider]);

  return { contract };
};

export default useCrewsContract;
