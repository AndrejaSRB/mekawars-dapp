import { useWeb3Context } from "../../context";
import type { Crews } from "../typechain-types";
import { Matchmaking__factory, Matchmaking } from "../typechain-types";
import { useState, useEffect } from "react";

const useMatchMakingContract = () => {
  const { address, provider, web3Provider } = useWeb3Context();
  const [contract, setContract] = useState<Matchmaking | null>(null);

  useEffect(() => {
    if (address && provider && web3Provider) {
      const MatchMakingFactory = new Matchmaking__factory();

      const MatchMakingContract = MatchMakingFactory.attach(
        process.env.NEXT_PUBLIC_MATCHMAKING_CONTRACT_ADDRESS as string
      );

      setContract(MatchMakingContract.connect(web3Provider.getSigner()));
    }
  }, [address, provider, web3Provider]);

  return { contract };
};

export default useMatchMakingContract;
