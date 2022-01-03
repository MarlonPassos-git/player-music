import type { NextApiRequest, NextApiResponse } from 'next'
import api from '../../services/server'


export default function handler(req: NextApiRequest, res: NextApiResponse) {

  const infos: [{}?] = []

  api.get('infos').then(response => {

    const data = response.data

    res.statusCode = 200
    res.json(data)
  })
}
