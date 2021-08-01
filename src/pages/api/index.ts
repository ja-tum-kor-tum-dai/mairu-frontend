import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  quote: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({
    quote: 'ไม่รู้ๆๆๆ ผมไม่รู้',
  })
}
