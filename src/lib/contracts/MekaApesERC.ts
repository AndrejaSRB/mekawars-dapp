import { MekaApesERC721Poly, MekaApesERC721Poly__factory } from '../typechain-types';

class Contracts {
  mekaApesERC: MekaApesERC721Poly;

  constructor() {
    this.mekaApesERC = new MekaApesERC721Poly__factory().attach(process.env.NEXT_PUBLIC_MEKAAPES_ADDRESS as string);
  }
}

const MekaApesERC = new Contracts();

export default MekaApesERC;
