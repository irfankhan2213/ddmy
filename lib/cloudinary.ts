/**
 * Utility to optimize Cloudinary image URLs for ultra-fast delivery.
 * Automatically injects f_auto (format auto WebP/AVIF based on browser),
 * q_auto (intelligent quality compression), and dynamic dimension resizing.
 * Payload sizes drop by 85-95% while keeping crystal-clear high fidelity.
 */
export function optimizeCloudinaryUrl(
  url: string,
  options: { width?: number; quality?: string | number; format?: string } = {}
): string {
  if (!url || typeof url !== 'string' || !url.includes('res.cloudinary.com')) {
    return url
  }

  const { width, quality = 'auto', format = 'auto' } = options
  const transforms: string[] = [`f_${format}`, `q_${quality}`]
  if (width) {
    transforms.push(`w_${width}`)
  }
  const transformString = transforms.join(',')

  const parts = url.split('/image/upload/')
  if (parts.length !== 2) return url

  const prefix = parts[0] + '/image/upload/'
  const rest = parts[1]

  const segments = rest.split('/')
  const firstSegment = segments[0]

  // Detect if the first segment is an existing transformation string
  const isTransformSegment =
    firstSegment.includes(',') ||
    /^(?:[a-z]{1,3}_|fl_|pg_|so_|eo_)/.test(firstSegment)

  if (isTransformSegment) {
    segments[0] = transformString
    return prefix + segments.join('/')
  } else {
    return `${prefix}${transformString}/${rest}`
  }
}

/** 80-120px mini thumbnails (2-5 KB) */
export function getCloudinaryThumbnail(url: string, size = 120): string {
  return optimizeCloudinaryUrl(url, { width: size })
}

/** 400-600px product card images (20-40 KB) */
export function getCloudinaryCard(url: string, width = 550): string {
  return optimizeCloudinaryUrl(url, { width })
}

/** 900-1100px high-resolution product detail view (60-120 KB) */
export function getCloudinaryDetail(url: string, width = 1000): string {
  return optimizeCloudinaryUrl(url, { width })
}

/** 1600-1920px full-width hero banners (150-280 KB) */
export function getCloudinaryHero(url: string, width = 1920): string {
  return optimizeCloudinaryUrl(url, { width })
}
