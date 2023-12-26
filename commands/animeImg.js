import axios from 'axios'
import * as cheerio from 'cheerio'
import imgTemplate from '../templates/animeImg.js'

export default async (event) => {
  try {
    const { data } = await axios.get('https://api.sretna.cn/comic.php')
    const $ = cheerio.load(data)
    const replies = {}
    $('img').each(function () {
      const imgUrl = new URL('https://api.sretna.cn/comic.php')
      const template = imgTemplate()
      template.hero.url = imgUrl
      replies.push(template)
    })

    const result = await event.reply({
      type: 'flex',
      altText: '動漫圖片',
      contents: {
        type: 'carousel',
        content: replies
      }
    })
    console.log(result)
  } catch (error) {
    console(error)
  }
}
