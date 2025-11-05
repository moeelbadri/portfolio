/*
   Copyright (C), 2023-2024, Sara Echeverria (bl33h)
   Author: Sara Echeverria
   FileName: PreloadMedia.jsx
   Version: I
   Creation: 02/06/2023
   Last modification: 03/06/2023
*/

import { useEffect, useMemo, useState } from 'react'
import Loader from './Loader';

const MINIMUM_LOADER_DURATION_MS = 1250

const PreloadMedia = ({ images = [], children, minimumDuration = MINIMUM_LOADER_DURATION_MS }) => {
  const [assetsReady, setAssetsReady] = useState(false)
  const [minimumElapsed, setMinimumElapsed] = useState(false)

  const serializedImages = useMemo(() => JSON.stringify(images ?? []), [images])

  useEffect(() => {
    let isCancelled = false
    setAssetsReady(false)

    const sources = JSON.parse(serializedImages)
      .filter(Boolean)

    if (sources.length === 0) {
      setAssetsReady(true)
      return () => {
        isCancelled = true
      }
    }

    let loadedCount = 0

    const handleAssetSettled = () => {
      loadedCount += 1
      if (!isCancelled && loadedCount >= sources.length) {
        setAssetsReady(true)
      }
    }

    const imagesCache = sources.map((src) => {
      const img = new Image()
      img.src = src

      if (img.complete) {
        handleAssetSettled()
      } else {
        img.onload = handleAssetSettled
        img.onerror = handleAssetSettled
      }

      return img
    })

    return () => {
      isCancelled = true
      imagesCache.forEach((img) => {
        img.onload = null
        img.onerror = null
      })
    }
  }, [serializedImages])

  useEffect(() => {
    setMinimumElapsed(false)
    const timer = setTimeout(() => {
      setMinimumElapsed(true)
    }, minimumDuration)

    return () => clearTimeout(timer)
  }, [minimumDuration, serializedImages])

  const shouldRenderChildren = assetsReady && minimumElapsed

  return shouldRenderChildren ? children : <Loader />
}

export default PreloadMedia;