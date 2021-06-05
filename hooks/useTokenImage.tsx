import { useEffect, useState } from 'react'
import fetch from 'cross-fetch'

export const useTokenImage = (uri) => {
  const [image, setImage] = useState('')

  useEffect(() => {
    if (uri) {
      fetch(uri).then(
        async (response) => {
          const text = await response.text()
          try {
            const json = JSON.parse(text)

            setImage(json.image || json.image_url)
            // console.log('json', json)
          } catch (error) {
            setImage(text)
          }
        },
        (reason) => console.warn(reason),
      )
    }
  }, [uri])

  return image
}
