import { serialize, CookieSerializeOptions } from 'cookie'
import type { NextApiResponse } from 'next'

const cookieOptions: CookieSerializeOptions = {
    maxAge: 86400,
    sameSite: "strict",
    path: "/api",
    secure: true
}

export const setCookie = (
    res: NextApiResponse,
    name: string,
    value: unknown,
    options: CookieSerializeOptions = cookieOptions
  ) => {
    const stringValue =
      typeof value === 'object' ? 'j:' + JSON.stringify(value) : String(value)
  
    if ('maxAge' in options) {
        //@ts-ignore
      options.expires = new Date(Date.now() + options.maxAge)
    }
  
    res.setHeader('Set-Cookie', serialize(name, stringValue, options))
  }


