
let state = {
  minibar: {
    height: '90px',
    backgroundColor: 'white',
    borderBottomWidth: '0.01rem',
    borderBottomColor: '#EEE',
    // boxShadow: '0 1px 20px #eee',
  },
  minibarDetail: {
    height: '90px',
    backgroundColor: 'white',
  },
  minibarTodo: {
    height: '90px',
    backgroundColor: 'white',
  },
  pageTodo: {
    ref: {},
  },
  pageDetail: {
    ref: {},
  },
  pageDetailMask: {
    ref: {},
    title: '',
    isBottomShow: false,
  },
  pageTest: {
    ref: {}
  },
  dolistItemUAct: {
    color: '#555',
    fontSize: '31px',
  },
  dolistItemAct: {
    color: '#EE8800',
    fontSize: '33px',
    fontWeight: 600
  },
  dolistItemDone: {
    color: '#EE8800',
    fontSize: '31px',
  },
  contentHeight: 0,
}
let mutations = {
  setContentHeight(state, value) {
    state.contentHeight = value
  },
  setPageRef (state, {page, ref}) {
    state[page].ref = ref
  },
  setPageTitle (state, {page, title}) {
    state[page].title = title
  },
  setDetailMaskShow (state, bool) {
    state.pageDetailMask.isBottomShow = bool
  }
}
let getters = {
  getDolistStyle: (state) => (status) => {
    if (status === 0) return state.dolistItemUAct
    if (status === 1) return state.dolistItemAct
    if (status === 2) return state.dolistItemDone
  }
}
// console.log(state.tabIconFontTitles[0].title)
const pageConfig = {
  namespaced: true,
  state,
  getters,
  mutations,

}

export default pageConfig