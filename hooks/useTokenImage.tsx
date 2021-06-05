import { useEffect, useState } from 'react'
import fetch from 'cross-fetch'

import ipfsReplacer from '../utils/ipfsReplacer'

export const useTokenImage = ({ id = '', uri = '' } = {}) => {
  const [image, setImage] = useState('')

  useEffect(() => {
    if (uri) {
      fetch(ipfsReplacer(uri)).then(
        async (response) => {
          const text = await response.text()
          try {
            const json = JSON.parse(text)

            setImage(ipfsReplacer(json.image || json.image_url))
          } catch (error) {
            setImage(text)
          }
        },
        async (reason) => {
          // Try through API to circumvent CORS
          const response = await fetch(`/api/metadata/${id}`)
          const text = await response.text()

          try {
            const json = JSON.parse(text)

            setImage(ipfsReplacer(json.image || json.image_url))
          } catch (error) {
            setImage(text)
          }
        },
      )
    }
  }, [uri])

  return image
}
