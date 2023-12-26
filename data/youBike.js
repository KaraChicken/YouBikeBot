import axios from 'axios'

export const update = async () => {
  try {
    const { data } = await axios.get('https://tcgbusfs.blob.core.windows.net/dotapp/youbike/v2/youbike_immediate.json')
    const ObjectItem = data.map(function () {
      return {
        total: '全部車位共' + data.tot + '個'
      }
    })
    console.log(ObjectItem)
  } catch (error) {
    console.log(error)
  }
}
