import { useEffect, useState } from 'react';
import { useWeb3Context } from '../../context';
import type { MockNTPouch } from '../typechain-types';
import { MockNTPouch__factory } from '../typechain-types';
import { mumbai } from './contractAddress';

const useMockNTPouchContract = () => {
  const { address, provider, web3Provider } = useWeb3Context();
  const [contract, setContract] = useState<MockNTPouch | null>(null);

  useEffect(() => {
    if (address && provider && web3Provider) {
      const NTPouchFactory = new MockNTPouch__factory();

      const NTPouchContract = NTPouchFactory.attach(mumbai.NTPouch);

      setContract(NTPouchContract.connect(web3Provider.getSigner()));
    }
  }, [address, provider, web3Provider]);

  return { contract };
};

export default useMockNTPouchContract;
