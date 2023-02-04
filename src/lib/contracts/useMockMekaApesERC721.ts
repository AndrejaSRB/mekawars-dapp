import { useWeb3Context } from "../../context";
import {
  MockMekaApesERC721Poly__factory,
  MockMekaApesERC721Poly,
} from "../typechain-types";
import { useEffect, useState } from "react";

const useMockMekaApesERC = () => {
  const { address, provider, web3Provider } = useWeb3Context();
  const [contract, setContract] = useState<MockMekaApesERC721Poly | null>(null);

  useEffect(() => {
    if (address && provider && web3Provider) {
      const MekaApesERCFactory = new MockMekaApesERC721Poly__factory();

      const MockMekaApesERC721Contract = MekaApesERCFactory.attach(
        process.env.NEXT_PUBLIC_MEKAAPES_CONTRACT_ADDRESS as string
      );

      setContract(MockMekaApesERC721Contract.connect(web3Provider.getSigner()));
    }
  }, [address, provider, web3Provider]);

  return { contract };
};

export default useMockMekaApesERC;
