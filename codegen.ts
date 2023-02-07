import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: 'https://api.thegraph.com/subgraphs/name/duxxud/mekawars-mumbai',

  config: {
    namingConvention: {
      enumValues: 'keep',
    },
    strictScalars: true,
    scalars: {
      BigInt: 'string',
      Bytes32: 'string',
      Bytes: 'string',
      Time: 'string',
      BigDecimal: 'string',
    },
  },

  generates: {
    'src/lib/graphql/schema.graphql': {
      plugins: ['schema-ast'],
    },
    'src/lib/graphql/types.ts': {
      plugins: ['typescript'],
    },
    'src/lib/graphql/': {
      documents: 'src/lib/graphql/**/*.graphql',
      preset: 'near-operation-file',
      presetConfig: {
        extension: '.generated.ts',
        baseTypesPath: 'types.ts',
      },
      plugins: ['typescript-operations', 'typescript-react-apollo'],
    },
  },
};

export default config;
