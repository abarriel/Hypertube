/* eslint-disable */
module.exports = {
    ui: {
        port: 3001,
        weinre: {
            port: 8080
        }
    },
    files: './public',
    watchEvents: [
        change
    ],
    watchOptions: {
        ignoreInitial: true
    },
    server: {
      baseDir: 'public',
      index: 'index.html'
    },
    proxy: false,
    port: 8080,
    middleware: false,
    serveStatic: [],
    ghostMode: {
        clicks: true,
        scroll: true,
        location: true,
        forms: {
            submit: true,
            inputs: true,
            toggles: true
        }
    },
    snippetOptions: {
      blacklist: '*',
      rule: {
        match: /<\/body>/i,
        fn: (snippet) => '',
      }
    },
    logLevel: 'info',
    logPrefix: 'Browsersync',
    logConnections: false,
    logFileChanges: true,
    logSnippet: true,
    rewriteRules: [],
    open: 'local',
    browser: 'default',
    cors: false,
    xip: false,
    hostnameSuffix: false,
    reloadOnRestart: false,
    notify: true,
    scrollProportionally: true,
    scrollThrottle: 0,
    scrollRestoreTechnique: 'window.name',
    scrollElements: [],
    scrollElementMapping: [],
    reloadDelay: 0,
    reloadDebounce: 0,
    reloadThrottle: 0,
    plugins: [],
    injectChanges: true,
    startPath: null,
    minify: true,
    host: null,
    localOnly: false,
    codeSync: true,
    timestamps: true,
    clientEvents: [
        'scroll',
        'scroll:element',
        'input:text',
        'input:toggles',
        'form:submit',
        'form:reset',
        'click'
    ],
    socket: {
        socketIoOptions: {
            log: false
        },
        socketIoClientConfig: {
            reconnectionAttempts: 50
        },
        path:'/browser-sync/socket.io',
        clientPath: '/browser-sync',
        namespace: '/browser-sync',
        clients: {
            heartbeatTimeout: 5000
        }
    },
    tagNames: {
        less: 'link',
        scss: 'link',
        css: 'link',
        jpg: 'img',
        jpeg: 'img',
        png: 'img',
        svg: 'img',
        gif: 'img',
        js: 'script'
    }
};
