import { useMemo, type CSSProperties } from 'react'

type FogDensity = 'dense' | 'light'

interface FogOverlayProps {
  active: boolean
  density?: FogDensity
}

const FogOverlay: React.FC<FogOverlayProps> = ({ active, density = 'dense' }) => {
  const layers = useMemo(() => {
    const layerCount = density === 'dense' ? 7 : 4
    const baseOpacity = density === 'dense' ? 0.23 : 0.16

    return Array.from({ length: layerCount }, (_, index) => ({
      opacity: Math.min(baseOpacity + index * (density === 'dense' ? 0.045 : 0.035), 0.48),
      blur: density === 'dense' ? 32 + index * 10 : 24 + index * 8,
      duration: density === 'dense' ? 24 + index * 5 : 30 + index * 4,
      delay: -index * 3.5,
      scale: 1 + index * 0.1,
      horizontal: density === 'dense' ? 18 + index * 4 : 14 + index * 3
    }))
  }, [density])

  if (!active) {
    return null
  }

  return (
    <div className={`global-fog ${density === 'dense' ? 'global-fog--dense' : 'global-fog--light'}`}>
      {layers.map((layer, index) => (
        <span
          key={index}
          className="global-fog__layer"
          style={
            {
              '--fog-opacity': layer.opacity.toString(),
              '--fog-blur': `${layer.blur}px`,
              '--fog-duration': `${layer.duration}s`,
              '--fog-delay': `${layer.delay}s`,
              '--fog-scale': layer.scale.toString(),
              '--fog-horizontal': `${layer.horizontal}%`
            } as CSSProperties
          }
        />
      ))}
    </div>
  )
}

export default FogOverlay
