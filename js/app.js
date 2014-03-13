App = Ember.Application.create();

var sites = [{
    id: '1',
    title: 'test',
  }, {
    id: '2',
    title: 'two',
}];

App.Router.map(function() {
  this.resource('sites', function() {
    this.resource('site', { path: ':site_id' });
  });
  this.resource('about');
});

App.SitesRoute = Ember.Route.extend({
  model: function() {
    return sites;
  }
});

App.SiteRoute = Ember.Route.extend({
  model: function(params) {
    return sites.findBy('id', params.site_id);
  }
});

App.SiteAdapter = DS.RESTAdapter.extend({
    host: 'http://localhost/'
});
