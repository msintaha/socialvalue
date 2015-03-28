Router.route('/', function () {
  this.render('home');
 
});

Router.map(function(){
    this.route('home', {path: '/home'});
this.route('social', {path: '/social'});
  this.route('admin', {path: '/admin'});   
});

