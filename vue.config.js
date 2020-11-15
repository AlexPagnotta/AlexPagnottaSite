//vue.config.js
module.exports = {
    chainWebpack: config => {
        config
            .plugin('html')
            .tap(args => {
                args[0].title = "Alex Pagnotta"; //Set Site Title Here!
                return args;
            })
    }
}