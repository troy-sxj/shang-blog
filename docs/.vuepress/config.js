module.exports = {
    base: '/shang-blog/',
    title: 'shang-demo',
    description: 'Shang blog',
    head: [
        ['link', { rel: 'icon', href: '/img/vue-logo.png' }]
    ],
    themeConfig: {
        // 你的GitHub仓库
        repo: 'https://github.com/troy-sxj/shang-blog',
        // 自定义仓库链接文字。
        repoLabel: 'My GitHub',
        sidebarDepth: 4, // e'b将同时提取markdown中h2 和 h3 标题，显示在侧边栏上。
        lastUpdated: 'Last Updated' ,// 文档更新时间：每个文件git最后提交的时间,
        searchMaxSuggestoins: 10,
        serviceWorker: {
            updatePopup: {
                message: "New content is available.",
                buttonText: 'Refresh'
            }
        },

        //顶部导航
        nav: [
            // 单项 text：显示文字，link：指向链接
            // 这里的'/' 指的是 docs文件夹路径
            // [以 '/' 结尾的默认指向该路径下README.md文件]
            { text: '首页', link: '/' },
            { text: 'FirstBlog', link: '/blog/README.md' }
        ],

        //侧边栏
        sidebar: [
            ['/', '首页'],
            ['/blog/FirstBlog.md', '我的第一篇博客']
        ]
    }
}