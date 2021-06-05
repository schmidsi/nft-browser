const ipfsReplacer = (uri = '') =>
  uri
    .replace('ipfs://ipfs', 'https://ipfs.io/ipfs')
    .replace('ipfs://', 'https://ipfs.io/ipfs/')

export default ipfsReplacer
