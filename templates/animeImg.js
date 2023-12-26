export default () => {
  return {
    type: 'bubble',
    body: {
      type: 'box',
      layout: 'vertical',
      contents: [
        {
          type: 'image',
          url: 'https://scdn.line-apps.com/n/channel_devcenter/img/flexsnapshot/clip/clip3.jpg',
          size: 'full',
          aspectMode: 'cover',
          aspectRatio: '1:1',
          gravity: 'center'
        }
      ],
      paddingAll: '0px'
    }
  }
}
