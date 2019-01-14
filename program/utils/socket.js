let socket = null,
 socketOpenid = null,
 socketToken = null,
 socketChatid = null,
 socketTouid = null,
 reConnectCount = 0,
 lastConnectTime = 0;
// let socketMessageList = {};

//建立连接
const connectSocket = (chat_id, to_uid, openid, reload,token) => {
  socketOpenid = openid;
  
//   let url = `wss://renren.dian68.net/wss?openid=${openid}`;
  let url = `wss://renren.dian68.net/wss`;
//   if ( to_uid ) {
//     socketTouid = to_uid;
//     url += `&to_uid=${to_uid}`;
//   }
    if(token) socketToken =token;
 if ( chat_id ) {
    socketChatid = chat_id;
    url += `?chat_id=${chat_id}`;
  }
//   else return false;

  url += `&reload=${reload}`;
  return wx.connectSocket({
    url: url,
    header:{
      'content-type': 'application/json',
      token
    },
    success: res => {
      console.log('初始化链接成功',res);
     
    },
    fail: res => {
      console.log('初始化链接失败');
    }
  });
}

const reConnect = callback => {
  //重连5次 不再重连
  if ( reConnectCount > 5 ){
    wx.showToast({ title : '加载失败' });
    return null;
  }

  setTimeout (_ => {
    //30秒内重连 才算是重连
    if ( lastConnectTime < new Date().getTime()-30000 ) 
      reConnectCount++;
    
    if ( socket ) wx.closeSocket();
    socket = connectSocket(socketChatid, socketTouid,socketOpenid, 1,socketToken);
    console.log('链接重连');  
    addListen(socket, callback);
  }, 300);
}

const addListen = (SocketTask, callback) => {
  SocketTask.onOpen( res => {
    console.log('链接成功');
    reConnectCount = 0;
    lastConnectTime = new Date().getTime();
  });

  SocketTask.onError( res => {
    console.log('链接失败');
    let pages = getCurrentPages(),currentPage = pages[pages.length-1];
    console.log(res);
    if ( socket && currentPage.route == 'pages/chat/chat' ) {
      socket = null;
    //   reConnect(callback);
    }
    
    socket = null;
  });

  SocketTask.onMessage(res => {
    console.log('收到信息');
    res.data = JSON.parse(res.data);
    console.log(res.data);
    callback(res.data);
  });

  SocketTask.onClose(res => {
    console.log('链接关闭');
    console.log(res);
    
    let pages = getCurrentPages(),currentPage = pages[pages.length-1];
    if ( socket && currentPage.route == 'pages/chat/chat' ) {
      socket = null;
      reConnect(callback);
    }
    socket = null;
  });
}

exports.socket = (chat_id, to_uid, openid, callback,token) => {
  reConnectCount = 0;
  if ( socket ) return socket;
  socket = connectSocket(chat_id, to_uid, openid, 0,token);
  addListen(socket, callback);
  return socket;
}

exports.close = _ => {
  reConnectCount = 0;
  if ( socket ) {
    wx.closeSocket();
    socket = null;
  }
}