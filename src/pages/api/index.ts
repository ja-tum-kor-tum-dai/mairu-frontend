import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  quote: string
  quote_by: string
  ref: string
  media_url: string
  media_type: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({
    quote: 'ไม่รู้ๆๆๆ ผมไม่รู้',
    quote_by: '',
    ref: '',
    media_url: '',
    media_type: '',
  })
}
