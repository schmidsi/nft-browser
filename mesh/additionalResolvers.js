const resolvers = {
  Token: {
    standard: async (root, args, { EIP721, EIP1155 }) => {
      console.log('additionalResovers:standard', root, args, EIP1155, EIP721)

      return 'erc1155'
    },
  },
}

module.exports = { resolvers }
