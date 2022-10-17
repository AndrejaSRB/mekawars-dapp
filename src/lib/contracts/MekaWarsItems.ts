import { MekawarsItemsERC721, MekawarsItemsERC721__factory } from '../typechain-types';

class Contract {
  mekaWarsItems: MekawarsItemsERC721;

  constructor() {
    this.mekaWarsItems = new MekawarsItemsERC721__factory().attach(
      process.env.NEXT_PUBLIC_MEKAWARS_ITEMS_ADDRESS as string,
    );
  }
}

const MekaWarsItems = new Contract();

export default MekaWarsItems;
