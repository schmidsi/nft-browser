import { validateConfig, processConfig } from '@graphql-mesh/config'
import { getMesh } from '@graphql-mesh/runtime'

import rawMeshConfig from '../mesh.config'

const preImports = {
  '@graphql-mesh/transform-naming-convention': require('@graphql-mesh/transform-naming-convention'),
  '@graphql-mesh/graphql': require('@graphql-mesh/graphql'),
  [`${process.cwd()}/mesh/additionalResolvers`]: require('../../mesh/additionalResolvers'),
}

const importFn = (moduleId: string) => {
  if (preImports[moduleId]) {
    console.log('importFn pre imported', moduleId)
    return preImports[moduleId]
  } else {
    console.log('importFn not pre imported', moduleId)
    return import(moduleId)
  }
}

const createMesh = async () => {
  validateConfig(rawMeshConfig)
  const meshConfig = await processConfig(rawMeshConfig, { dir: process.cwd(), importFn })
  return await getMesh(meshConfig)
}

export default createMesh
