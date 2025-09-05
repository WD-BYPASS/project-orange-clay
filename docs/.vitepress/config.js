export default {
    title: "Project Orange Clay",
    description: "Info about a very mean orange guy.",
    base: "/project-orange-clay/",
    themeConfig: {
        siteTitle: "Project Orange Clay",
        footer: {
            message: "Released under the CC BY-NC-ND 4.0 License.",
            copyright: "Copyright © 2025-present WD_Bypass",
        },
        nav: [
        ],
        sidebar: [
        ],

        socialLinks: [
            { icon: "github", link: "https://github.com/WD-BYPASS" },
        ],

        lastUpdated: {
              text: 'Updated at',
              formatOptions: {
                    dateStyle: 'full',
                    timeStyle: 'medium'
              }
        },
        search: {
              provider: 'local'
        },
    },
    head: [
        ['link', { rel: 'icon', type: 'image/x-icon', href: 'docs/public/favicon.ico' }]
    ],
};
