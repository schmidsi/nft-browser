module.exports = {
  sources: [
    {
      name: 'EIP721',
      handler: {
        graphql: {
          endpoint: 'https://api.thegraph.com/subgraphs/name/amxx/eip721-subgraph',
        },
      },
    },
    {
      name: 'EIP1155',
      handler: {
        graphql: {
          endpoint: 'https://api.thegraph.com/subgraphs/name/amxx/eip1155-subgraph',
        },
      },
    },
  ],
  transforms: [
    {
      namingConvention: {
        typeNames: 'pascalCase',
        enumValues: 'camelCase',
        fieldNames: 'camelCase',
      },
    },
  ],
  additionalTypeDefs:
    'enum Standard {\n' +
    '  erc721\n' +
    '  erc1155\n' +
    '}\n' +
    'extend type Token {\n' +
    '  standard: Standard!\n' +
    '}\n',
  additionalResolvers: ['./mesh/additionalResolvers'],
}
