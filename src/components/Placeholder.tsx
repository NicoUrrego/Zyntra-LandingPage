interface Props {
  src?: string
  alt?: string
  label?: string
  className?: string
  width: number
  height: number
}

/** Muestra la imagen si existe; si no, un bloque de relleno. */
export default function Media({ src, alt = '', label = 'Tu imagen aquí', className, width, height }: Props) {
  if (src) {
    return <img src={src} alt={alt} className={className} width={width} height={height} loading="lazy" decoding="async" />
  }
  return <div className={`img-placeholder ${className ?? ''}`}>{label}</div>
}
