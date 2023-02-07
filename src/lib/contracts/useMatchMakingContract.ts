import { useState, useEffect } from 'react';
import { useWeb3Context } from '../../context';
import type { Crews } from '../typechain-types';
import { Matchmaking__factory, Matchmaking } from '../typechain-types';
import { mumbai } from './contractAddress';

const useMatchMakingContract = () => {
  const { address, provider, web3Provider } = useWeb3Context();
  const [contract, setContract] = useState<Matchmaking | null>(null);

  useEffect(() => {
    if (address && provider && web3Provider) {
      const MatchMakingFactory = new Matchmaking__factory();

      const MatchMakingContract = MatchMakingFactory.attach(mumbai.MatchMaking);

      setContract(MatchMakingContract.connect(web3Provider.getSigner()));
    }
  }, [address, provider, web3Provider]);

  return { contract };
};

export default useMatchMakingContract;
