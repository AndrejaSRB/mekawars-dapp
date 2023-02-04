import { useWeb3Context } from "../../context";
import { MockNTPouch, MockNTPouch__factory } from "../typechain-types";
import { useEffect, useState } from "react";

const useMockNTPouchContract = () => {
  const { address, provider, web3Provider } = useWeb3Context();
  const [contract, setContract] = useState<MockNTPouch | null>(null);

  useEffect(() => {
    if (address && provider && web3Provider) {
      const NTPouchFactory = new MockNTPouch__factory();

      const NTPouchContract = NTPouchFactory.attach(
        process.env.NEXT_PUBLIC_NTPOUCH_CONTRACT_ADDRESS as string
      );

      setContract(NTPouchContract.connect(web3Provider.getSigner()));
    }
  }, [address, provider, web3Provider]);

  return { contract };
};

export default useMockNTPouchContract;
