'use strict';

describe('Controller: MovieDeleteCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var MovieDeleteCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MovieDeleteCtrl = $controller('MovieDeleteCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(MovieDeleteCtrl.awesomeThings.length).toBe(3);
  });
});
