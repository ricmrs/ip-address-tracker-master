// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { ip } = req.query

  res.status(200).json({
    ip: ip,
    location: 'Brookylyn, NY 10001',
    timezone: 'UTC -05:00',
    isp: `${Number(ip) > 3 ? 'Stardew' : 'SpaceX Starlink'}`
  })
}
