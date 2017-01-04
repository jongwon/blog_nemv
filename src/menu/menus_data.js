const local = process.env.local || '';
module.exports = [
    {
        name: 'myhome',
        path: local+'/blog_nemv/myhome',
        icon: 'home',
        title: 'My Home'
    }, {
        name: 'settings',
        path: local+'/blog_nemv/settings',
        icon: 'build',
        title: '설정'
    }
];
