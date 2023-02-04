import { useWeb3Context } from "../../context";
import {
  MockMekawarsItemsERC1155__factory,
  MockMekawarsItemsERC1155,
} from "../typechain-types";
import { useEffect, useState } from "react";

const useMockMekaWarsERC1155Items = () => {
  const { address, provider, web3Provider } = useWeb3Context();
  const [contract, setContract] = useState<MockMekawarsItemsERC1155 | null>(
    null
  );

  useEffect(() => {
    if (address && provider && web3Provider) {
      const MockMekaWarsERC1155ItemsFactory =
        new MockMekawarsItemsERC1155__factory();

      const MockMekaWarsERC1155ItemsContract =
        MockMekaWarsERC1155ItemsFactory.attach(
          process.env.NEXT_PUBLIC_MEKAWARS_ITEMS_CONTRACT_ADDRESS as string
        );

      setContract(
        MockMekaWarsERC1155ItemsContract.connect(web3Provider.getSigner())
      );
    }
  }, [address, provider, web3Provider]);

  return { contract };
};

export default useMockMekaWarsERC1155Items;
