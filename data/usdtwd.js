import axios from 'axios'

export const update = async () => {
  try {
    const { data } = await axios.get('https://tw.rter.info/capi.php')
    Object.entries(data).map(([keys, values]) => {
      return {
        OutsideKeys: keys,
        Exrate: values.Exrate,
        UTC: values.UTC
      }
    })
  } catch (error) {
    console.log(error)
  }
}
