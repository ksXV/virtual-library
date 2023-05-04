import type { LayoutServerLoad } from './$types'

export const load = (ctx => {
  const userAgent = ctx.request.headers.get('user-agent')
  if (userAgent === null) {
    return {
      width: 0
    }
  }
  if (
    userAgent.includes('Android') ||
    userAgent.includes('iPhone') ||
    userAgent.includes('Mobile')
  ) {
    return {
      width: 500
    }
  }
  if (
    userAgent.includes('Windows') ||
    userAgent.includes('Mac OS') ||
    userAgent.includes('Linux')
  ) {
    return {
      width: 1000
    }
  }

  return {
    width: 1000
  }
}) satisfies LayoutServerLoad
