type Contracts = 'Crews' | 'MekaApes' | 'MekaWarsItems' | 'Box' | 'MatchMaking' | 'NTPouch';

export const mumbai: Record<Contracts, `0x${string}`> = {
  Crews: '0x9F02e49286349089D4d389607cbdb40411b9ED0A',
  MekaApes: '0x0f9F97E72361c6a8BB66c75607BEf41D55D2B20F',
  MekaWarsItems: '0x837d0f5f0B9a653d27733416Ef56D83d57f04f3b',
  Box: '0x870c07a187DC4b3962fb54cB89CDe7a5AAeec33E',
  MatchMaking: '0x0748f8C4267fd72787B376C7Bf89C5A2e51d40bC',
  NTPouch: '0xcf85ee034f56558F702305704BFDdC9C1c8ca025',
};
