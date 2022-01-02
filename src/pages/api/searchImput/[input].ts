import type { NextApiRequest, NextApiResponse } from 'next'
import api from '../../../services/server'



export default function handler(req: NextApiRequest, res: NextApiResponse) {

    const input = req.query.input.toLocaleString().replace(/\s/g, '%20')
    

   api.get(`search?q=${input}`).then(response => {

       const data = response.data
       const totalData = data.total

        res.statusCode = 200
        res.json(data)
  }) 
}