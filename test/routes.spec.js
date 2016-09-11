describe('Routes', function () {

  it('should map login route to login controller', function () {
    inject(function ($route) {
      expect($route.routes['/login'].controller).toBe('LoginCtrl');
      expect($route.routes['/login'].templateUrl).toEqual('templates/login.html');
    });
  });

});