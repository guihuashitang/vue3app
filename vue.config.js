module.exports = {
    chainWebpack: config => {
      config
        .plugin('html')
        .tap(args => {
          args[0].title= '网易芸音乐';
          return args
        })
    }
  }
 