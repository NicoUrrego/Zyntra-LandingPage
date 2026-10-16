interface Props {
  src?: string
  alt?: string
  label?: string
  className?: string
}

/** Muestra la imagen si existe; si no, un bloque de relleno. */
export default function Media({ src, alt = '', label = 'Tu imagen aquí', className }: Props) {
  if (src) return <img src={src} alt={alt} className={className} loading="lazy" />
  return <div className={`img-placeholder ${className ?? ''}`}>{label}</div>
}
