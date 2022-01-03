// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import api from '../../services/server'



export default function handler(req: NextApiRequest, res: NextApiResponse) {

  const popularSounds: [{}?] = []

  api.get('chart').then(response => {

    const data = response.data

    for (let category of Object.keys(data)) {

      const categorySounds = {
        category: translateCategories(category),
        data: data[category].data
      }

      popularSounds.push(categorySounds)
    }

    res.statusCode = 200
    res.json(popularSounds)
  })
}


function translateCategories(name: string) { 
  switch (name) { 
    case 'tracks':
      return 'musicas'
      break    
    case 'artists':
      return 'artistas'
      break
    case 'albums':
      return 'álbums' 
      break
    default:
      return name
  }
}
