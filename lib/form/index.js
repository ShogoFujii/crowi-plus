module.exports = {
  login: require('./login'),
  register: require('./register'),
  invited: require('./invited'),
  revision: require('./revision'),
  comment: require('./comment'),
  me: {
    user: require('./me/user'),
    password: require('./me/password'),
    imagetype: require('./me/imagetype'),
    apiToken: require('./me/apiToken'),
  },
  admin: {
    app: require('./admin/app'),
    sec: require('./admin/sec'),
    mail: require('./admin/mail'),
    aws: require('./admin/aws'),
    google: require('./admin/google'),
    plugin: require('./admin/plugin'),
    markdown: require('./admin/markdown'),
    customcss: require('./admin/customcss'),
    customscript: require('./admin/customscript'),
    custombehavior: require('./admin/custombehavior'),
    customlayout: require('./admin/customlayout'),
    customfeatures: require('./admin/customfeatures'),
    userInvite: require('./admin/userInvite'),
    slackIwhSetting: require('./admin/slackIwhSetting'),
    slackSetting: require('./admin/slackSetting'),
  },
};