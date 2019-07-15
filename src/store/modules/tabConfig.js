
let state = {
  count: 0,
  tabIconFontTitles: [
    {
      title: '日程',
      codePoint: '\ue7f4',
      color: '#FF9900'
    },
    {
      title: '愿望清单',
      codePoint: '\ue7df',
      color: '#FF5000'
    },
    {
      title: '我的',
      codePoint: '\ue7ae',
      dot: true,
      color: '#FF0000'
    }
  ],
  tabIconFontStyles: {
    bgColor: '#FFFFFF',
    titleColor: '#666666',
    activeTitleColor: '#f00',
    activeBgColor: '#FFFFFF',
    isActiveTitleBold: true,
    width: 160,
    height: 115,
    fontSize: 22,
    textPaddingLeft: 10,
    textPaddingRight: 10,
    iconFontSize: 45,
    iconFontMarginBottom: 8,
    iconFontColor: '#666666',
    activeIconFontColor: 'red',
    iconFontUrl: '//at.alicdn.com/t/font_1293485_qaexcjzc3wr.ttf'
  }
}
let mutations = {
  increment (state) {
    state.count++
  },
  showSelectedTitle (state, payload) {
    state.tabIconFontTitles[payload.id].title = payload.title
  }
}
// console.log(state.tabIconFontTitles[0].title)
const tabConfig = {
  namespaced: true,
  state,
  mutations,
}

export default tabConfig