module.exports = {
    title: "WUI DOC SITE",
    description: "WUI文档站",
    dest: "./public",
    themeConfig: {
        logo: "/roxy_crying.jpg",
        nav: [{
            text: "首页", link: "/"
        },{
            text: "组件", link: "/guide/"
        }],
        sidebar: {
            "/guide/" :[{
                title: "组件列表",
                children: [
                    'button', 'checkbox', 'form',
                    'icon', 'input', 'message', 'message-box',
                    'modal', 'radio', 'toast'
                ]
            }]
        }
    }
}
