
let state = {
  tabCurrentTarget: 0,
  indexOpacity: 1,
  tabIconFontTitles: [
    {
      title: '愿望清单',
      codePoint: '\ue7df',
      color: '#FF9900',
      child: [{
        title: '技能',
        codePoint: '\ue87a',
      }, {
        title: '物质',
        codePoint: '\ue780',
      }]
    },
    {
      title: '日程',
      codePoint: '\ue798',
      color: '#FF5000'
    },
    
  ],
  popupIconFontTitles: [{
    title: '我的',
    codePoint: '\ue7ae',
    dot: true,
    color: '#FF0000'
  }],
  tabIconFontStyles: {
    bgColor: '#FFFFFF',
    titleColor: '#666666',
    activeTitleColor: '#FF9900',
    activeBgColor: '#FFFFFF',
    isActiveTitleBold: true,
    width: 160,
    height: 115,
    fontSize: 40,
    textPaddingLeft: 10,
    textPaddingRight: 10,
    iconFontSize: 50,
    iconFontMarginBottom: 8,
    iconFontColor: '#AAA',
    activeIconFontColor: '#FF5500',
    iconFontUrl: 'http://at.alicdn.com/t/font_1293485_li3gh2d7bi.ttf',
  }
}
let mutations = {
  increment (state) {
    state.count++
  },
  showSelectedTitle (state, payload) {
    state.tabIconFontTitles[payload.id].title = payload.title
  },
  setOpacity (state) {
    state.indexOpacity = 0;
  }
}
// console.log(state.tabIconFontTitles[0].title)
const tabConfig = {
  namespaced: true,
  state,
  mutations,
}

export default tabConfig