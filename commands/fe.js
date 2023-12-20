export default async (event) => {
  try {
    const { data } = await axios.get('https://odws.hccg.gov.tw/001/Upload/25/opendataback/9059/961/0bd4f175-3c79-40f9-9aed-df9a1d407ad5.json')
  } catch (error) {

  }
}
