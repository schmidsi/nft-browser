import { useEffect, useState } from 'react'
import fetch from 'cross-fetch'

export const Token = ({ id, uri, registry }) => {
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
            // console.log('text', text)
          }
        },
        (reason) => console.warn(reason),
      )
    }
  }, [uri])

  return (
    <div>
      {id} {registry.name}
      <img src={image} />
      <style jsx>{`
        div {
          position: relative;
          display: inline-block;
          height: 140px;
          width: 140px;
          margin: 5px;
          overflow: hidden;
        }

        img {
          position: absolute;
          top: 0;
          left: 0;
          max-width: 100%;
          max-height: 100%;
        }
      `}</style>
    </div>
  )
}
