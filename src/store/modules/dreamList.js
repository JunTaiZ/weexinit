
let state = {
  popupZindex: 200,
  status: 4,
  statusArr: [0, 1, 2, 3, 4],
  statusIcon: ['\ue844', '\ue848', '\ue848', '\ue847', '\ue629'],
  statusList: [{
    status: 0,
    statusName: '已完成',
    statusIcon: '\ue844',
    color: '#33EE33',
  }, {
    status: 1,
    statusName: '进行中',
    statusIcon: '\ue848',
    color: '#EE3333',
  }, {
    status: 2,
    statusName: '未开始',
    statusIcon: '\ue848',
    color: '#888',
  }, {
    status: 3,
    statusName: '已取消',
    statusIcon: '\ue847',
    color: '#555',
  }, {
    status: 4,
    statusName: '全部',
    statusIcon: '\ue629',
    color: '#FF9900',
  }, ],
  classify: 1, // 1 代表物质
  currentList: {
    key: 0,
    bgColor: '#CC4422',
    status: 0, // 0-已完成 1-进行中 2-未开始 3-已取消
    classify: 1,
    dream: 'sc01把写梦书app做出来并发布',
    describe: '使用weex写的用来帮助人们管理自己的梦想的app',
    picture: '',
    dolist: [],
  },
  currentTodoItem: {
    createdate: '',
    begindate: '',
    section: 0,
    finishdate: '',
    desc: '',
    status: 0, // 0-未开始 1-进行中 2-完成
    title: '',
  },
  sectionItems: [
    '08:00-09:00', 
    '09:30-11:00', 
    '13:00-15:00',
    '16:00-17:00',
    '19:00-20:00',
    '21:00-22:00',
  ],
  list: [{
    key: 0,
    bgColor: '#CC4422',
    status: 0, // 
    classify: 1,
    dream: 'sc01把写梦书app做出来并发布',
    describe: '使用weex写的用来帮助人们管理自己的梦想的app',
    picture: '',
    dolist: [{
      'createdate': '2017-05-20 21:09:09',
      'begindate': '2017-05-24',
      'section': 5,
      'finishdate': '2017-05-25 20:10:29',
      'desc': '',
      'status': 2,
      'title': '初始化weex项目',
    }, {
      'createdate': '2017-05-22 21:09:09',
      'begindate': '2017-05-24',
      'section': 4,
      'finishdate': '2017-05-25 20:10:29',
      'desc': '',
      'status': 2,
      'title': '初始化weex项目导航栏',
    }, {
      'createdate': '2017-05-23 01:09:09',
      'begindate': '2017-05-25',
      'section': 5,
      'finishdate': '',
      'desc': '',
      'status': 1,
      'title': '导航栏修改'
    }, {
      'createdate': '2017-05-22 21:09:09',
      'begindate': '',
      'section': 2,
      'finishdate': '',
      'desc': '您已确定了方案', 
      'status': 0,
      'title': '显示愿望清单'
    }, {
      'createdate': '2017-05-23 21:09:09',
      'begindate': '2017-05-23',
      'section': 4,
      'finishdate': '2017-05-24 21:09:09',
      'desc': '您已确定了方案', 
      'status': 2,
      'title': 'hi2'
    }, {
      'createdate': '2017-05-23 20:09:09',
      'begindate': '2017-05-23',
      'section': 1,
      'finishdate': '2017-05-24 21:09:09',
      'desc': '您已确定了方案', 
      'status': 2,
      'title': 'h2i'
    }, ], 
  }, {
    key: 1,
    bgColor: '#44FF22',
    status: 0,
    classify: 1,
    dream: '写下vue初始化项目',
    describe: '使用vue写下包括顶部导航或侧边导航的开始项目',
    picture: '',
    dolist: [], 
  }, {
    key: 2,
    bgColor: '#BB7700',
    status: 0,
    classify: 1,
    dream: 'title',
    describe: '',
    picture: '',
    dolist: [], 
  }, {
    key: 3,
    bgColor: '#FF0022',
    status: 0,
    classify: 1,
    dream: 'title',
    describe: '',
    picture: '',
    dolist: [], 
  }, {
    key: 4,
    bgColor: '#FF0022',
    status: 0,
    classify: 1,
    dream: 'title',
    describe: '',
    picture: '',
    dolist: [], 
  }, {
    key: 5,
    bgColor: '#FF0022',
    status: 0,
    classify: 1,
    dream: 'title',
    describe: '',
    picture: '',
    dolist: [], 
  }, {
    key: 6,
    bgColor: '#FF0022',
    status: 2,
    classify: 1,
    dream: 'title',
    describe: '',
    picture: '',
    dolist: [], 
  }, {
    key: 7,
    bgColor: '#FF0022',
    status: 2,
    classify: 1,
    dream: 'title',
    describe: '',
    picture: '',
    dolist: [], 
  }, {
    key: 8,
    bgColor: '#FF0022',
    status: 2,
    classify: 1,
    dream: 'title',
    describe: '',
    picture: '',
    dolist: [], 
  }, {
    key: 9,
    bgColor: '#FF0022',
    status: 1,
    classify: 1,
    dream: 'title',
    describe: '',
    picture: '',
    dolist: [], 
  }, {
    key: 10,
    bgColor: '#FF0022',
    status: 1,
    classify: 1,
    dream: 'title',
    describe: '',
    picture: '',
    dolist: [{

    }], 
  }, {
    key: 11,
    bgColor: '#FF0022',
    status: 1,
    classify: 1,
    dream: 'title',
    describe: '',
    picture: '',
    dolist: [{

    }], 
  }, {
    key: 12,
    bgColor: '#FF0022',
    status: 3,
    classify: 1,
    dream: 'title',
    describe: '',
    picture: '',
    dolist: [{

    }], 
  }, {
    key: 13,
    bgColor: '#FF0022',
    status: 3,
    classify: 1,
    dream: 'title',
    describe: '',
    picture: '',
    dolist: [{

    }], 
  }, {
    key: 14,
    bgColor: '#FF0022',
    status: 3,
    classify: 1,
    dream: 'title',
    describe: '',
    picture: '',
    dolist: [{

    }], 
  }, {
    key: 15,
    bgColor: '#FF0022',
    status: 3,
    classify: 1,
    dream: 'title',
    describe: '',
    picture: '',
    dolist: [{

    }], 
  }, {
    key: 16,
    bgColor: '#CC4422',
    status: 0,
    classify: 0,
    dream: '把写梦书app做出来并发布',
    describe: '使用weex写的用来帮助人们管理自己的梦想的app',
    picture: '',
    dolist: [{

    }], 
  }, {
    key: 17,
    bgColor: '#44FF22',
    status: 0,
    classify: 0,
    dream: '写下vue初始化项目',
    describe: '使用vue写下包括顶部导航或侧边导航的开始项目',
    picture: '',
    dolist: [{

    }], 
  }, {
    key: 18,
    bgColor: '#BB7700',
    status: 0,
    classify: 0,
    dream: 'title',
    describe: '',
    picture: '',
    dolist: [{

    }], 
  }, {
    key: 19,
    bgColor: '#FF0022',
    status: 0,
    classify: 0,
    dream: 'title',
    describe: '',
    picture: '',
    dolist: [{

    }], 
  }, {
    key: 20,
    bgColor: '#FF0022',
    status: 0,
    classify: 0,
    dream: 'title',
    describe: '',
    picture: '',
    dolist: [{

    }], 
  }, {
    key: 21,
    bgColor: '#FF0022',
    status: 0,
    classify: 0,
    dream: 'title',
    describe: '',
    picture: '',
    dolist: [{

    }], 
  }, {
    key: 22,
    bgColor: '#FF0022',
    status: 2,
    classify: 0,
    dream: 'title',
    describe: '',
    picture: '',
    dolist: [{

    }], 
  }, {
    key: 23,
    bgColor: '#FF0022',
    status: 2,
    classify: 0,
    dream: 'title',
    describe: '',
    picture: '',
    dolist: [{

    }], 
  }, {
    key: 24,
    bgColor: '#FF0022',
    status: 2,
    classify: 0,
    dream: 'title',
    describe: '',
    picture: '',
    dolist: [{

    }], 
  }, {
    key: 25,
    bgColor: '#FF0022',
    status: 1,
    classify: 0,
    dream: 'title',
    describe: '',
    picture: '',
    dolist: [{

    }], 
  }, {
    key: 26,
    bgColor: '#FF0022',
    status: 1,
    classify: 0,
    dream: 'title',
    describe: '',
    picture: '',
    dolist: [{

    }], 
  }, {
    key: 27,
    bgColor: '#FF0022',
    status: 1,
    classify: 0,
    dream: 'title',
    describe: '',
    picture: '',
    dolist: [{

    }], 
  }, {
    key: 28,
    bgColor: '#FF0022',
    status: 3,
    classify: 0,
    dream: 'title',
    describe: '',
    picture: '',
    dolist: [{

    }], 
  }, {
    key: 29,
    bgColor: '#FF0022',
    status: 3,
    classify: 0,
    dream: 'title',
    describe: '',
    picture: '',
    dolist: [{

    }], 
  }, {
    key: 30,
    bgColor: '#FF0022',
    status: 3,
    classify: 0,
    dream: 'title',
    describe: '',
    picture: '',
    dolist: [{

    }], 
  }, {
    key: 31,
    bgColor: '#FF0022',
    status: 3,
    classify: 0,
    dream: 'title',
    describe: '',
    picture: '',
    dolist: [{

    }], 
  },]
}
let mutations = {
  setCurrentList (state, payload) {
    let { currentList } = payload
    state.currentList = currentList
  },
  increment (state) {
    state.count++
  },
  setClassify (state, value) {
    state.classify = value
  },
  setStatus (state, value) {
    state.status = value
  },
  setPopupZ (state) {
    state.popupZindex = 200;
  },
  setCurrentTodoItem (state, {item}) {
    state.currentTodoItem = item
  },
  setTodoItemByDream (state, {dream, item}) {
    let listItem = state.list.filter((value) => {
      return value.dream === dream;
    })[0]
    let dolistItem = listItem.dolist.filter((value, index) => {
      // console.log(value);
      return value.createdate === item.createdate 
    })[0]
    let newDolistItem = {}
    Object.assign(newDolistItem, dolistItem, item)
    
    // console.log(dream)
    // console.log(item);
    // console.log(dolistItem);
    // console.log(newDolistItem);
    Object.assign(dolistItem, newDolistItem)
    
    // let currentDolistItem = state.currentList.dolist
    console.log(listItem)
  },
  addTodoItemByDream (state, {dream, item}) {
    let listItem = state.list.filter((value) => {
      return value.dream === dream;
    })[0]
    let todoLen = listItem.dolist.length
    listItem.dolist[todoLen] = item
    console.log(listItem)
  },
  setItemClassify (state, {key, value}) {
    state.list[key].classify = value
  },
  deleteDolistByKey (state, {dream, createdate}) {
    let listItem = state.list.filter((value, index) => {
      return value.dream === dream
    })
    // console.log(dream, createdate)
    listItem[0].dolist = listItem[0].dolist.filter((value, index) => {
      // console.log(value);
      return value.createdate !== createdate 
    })
  }
}
let getters = {
  getListByStatusClassify: state => {
    return state.list.filter((value) => {
      if (state.status !== 4) {
        return value.status === state.status 
          && value.classify === state.classify 
      } else {
        return value.classify === state.classify
      }
    })
  },
  gettersTest: state => {
    return state.list;
  },
  getIconByStatus: (state) => (status) => {
    
  }
}
// console.log(state.tabIconFontTitles[0].title)
const tabConfig = {
  namespaced: true,
  state,
  getters,
  mutations,
}

export default tabConfig