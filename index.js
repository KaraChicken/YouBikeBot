import 'dotenv/config'
import linebot from 'linebot'
import fe from './commands/fe.js'

const bot = linebot({
  channelId: process.env.CHANNEL_ID,
  channelSecret: process.env.CHANNEL_SECRET,
  channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN
})

bot.on('message', event => {
  console.log(event)
  if (event.message.type === 'text') {
    if (event.message.text === '前端') {
      fe(event)
    }
  }
})

bot.listen('/', process.env.PORT || 3000, () => {
  console.log('機器人已啟動')
})
