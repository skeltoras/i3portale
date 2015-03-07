//@since v0.1.1
Router.configure({
  layoutTemplate: 'global',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound',
});

//-- frontend
//Router.route('/', function () {
//  this.render('home');
//});

//-- backend
//Router.route('/acp', function () {
//  this.render('dashboardAdmin')
//});

Router.onBeforeAction('loading');