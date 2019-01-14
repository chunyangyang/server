const recorderManager = wx.getRecorderManager();
const innerAudioContext = wx.createInnerAudioContext();

let tempFilePath;

recorderManager.onStart(_ => {
  console.log('recorder start')
});

recorderManager.onPause(_ => {
  console.log('recorder pause')
});

recorderManager.onFrameRecorded(res => {
  const { frameBuffer } = res
  console.log('frameBuffer.byteLength', frameBuffer.byteLength)
});

const start = options => {
  let _options = {
    duration: 10000,
    sampleRate: 44100,
    numberOfChannels: 1,
    encodeBitRate: 192000,
    format: 'aac',
    frameSize: 50
  }

  let unfind = 'undefined';

  if ( typeof(options.duration) != unfind ) _options.duration = options.duration;
  if ( typeof(options.sampleRate) != unfind ) _options.sampleRate = options.sampleRate;
  if ( typeof(options.numberOfChannels) != unfind ) _options.numberOfChannels = options.numberOfChannels;
  if ( typeof(options.encodeBitRate) != unfind ) _options.encodeBitRate = options.encodeBitRate;
  if ( typeof(options.format) != unfind ) _options.format = options.format;
  if ( typeof(options.frameSize) != unfind ) _options.frameSize = options.frameSize;

  recorderManager.start(_options);
}

const stop = callback => {
  recorderManager.onStop(res => {
    callback(res);
    tempFilePath = res.tempFilePath;
  })
  recorderManager.stop();
}

const play = _ => {
  innerAudioContext.autoplay = true;
  innerAudioContext.src = tempFilePath,
  innerAudioContext.onPlay(_ => {
    console.log('开始播放')
  });
  innerAudioContext.onError(res => {
    console.log(tempFilePath)
    console.log(res.errMsg)
    console.log(res.errCode)
  });
}

exports.start = start;
exports.stop = stop;
exports.play = play;
