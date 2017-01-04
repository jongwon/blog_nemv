const local = process.env.local || '';
module.exports = [
    {
        name: 'myhome',
        path: local+'/blog_nemv/bloghome',
        icon: 'home',
        title: 'My Home'
    }, {
        name: 'techs',
        path: local+'/blog_nemv/techs',
        icon: 'build',
        title: '기술 블로그'
    }
];
