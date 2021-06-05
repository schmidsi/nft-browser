import { useEffect, useState } from 'react'
import fetch from 'cross-fetch'

export const useTokenImage = ({ id = '', uri = '' } = {}) => {
  const [image, setImage] = useState('')

  useEffect(() => {
    if (uri) {
      fetch(uri).then(
        async (response) => {
          const text = await response.text()
          try {
            const json = JSON.parse(text)

            setImage(json.image || json.image_url)
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

            setImage(json.image || json.image_url)
          } catch (error) {
            setImage(text)
          }
        },
      )
    }
  }, [uri])

  return image
}
