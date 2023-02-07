import { useEffect, useState } from 'react';
import { useWeb3Context } from '../../context';
import type { MockMekaApesERC721Poly } from '../typechain-types';
import { MockMekaApesERC721Poly__factory } from '../typechain-types';
import { mumbai } from './contractAddress';

const useMockMekaApesERC = () => {
  const { address, provider, web3Provider } = useWeb3Context();
  const [contract, setContract] = useState<MockMekaApesERC721Poly | null>(null);

  useEffect(() => {
    if (address && provider && web3Provider) {
      const MekaApesERCFactory = new MockMekaApesERC721Poly__factory();

      const MockMekaApesERC721Contract = MekaApesERCFactory.attach(mumbai.MekaApes);

      setContract(MockMekaApesERC721Contract.connect(web3Provider.getSigner()));
    }
  }, [address, provider, web3Provider]);

  return { contract };
};

export default useMockMekaApesERC;
