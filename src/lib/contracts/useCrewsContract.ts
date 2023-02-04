import { useWeb3Context } from "../../context";
import { Crews, Crews__factory } from "../typechain-types";
import { useState, useEffect } from "react";

const useCrewsContract = () => {
  const { address, provider, web3Provider } = useWeb3Context();
  const [contract, setContract] = useState<Crews | null>(null);

  useEffect(() => {
    if (address && provider && web3Provider) {
      const CrewsFactory = new Crews__factory();

      const CrewsContract = CrewsFactory.attach(
        process.env.NEXT_PUBLIC_CREWS_CONTRACT_ADDRESS as string
      );

      setContract(CrewsContract.connect(web3Provider.getSigner()));
    }
  }, [address, provider, web3Provider]);

  return { contract };
};

export default useCrewsContract;
