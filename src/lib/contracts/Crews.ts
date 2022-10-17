import { Crews, Crews__factory } from '../typechain-types';

class Contract {
  crews: Crews;

  constructor() {
    this.crews = new Crews__factory().attach(process.env.NEXT_PUBLIC_CREWS_ADDRESS as string);
  }
}

const Crew = new Contract();

export default Crew;
