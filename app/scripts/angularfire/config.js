angular.module('firebase.config', [])
  .constant('FBURL', 'https://myatm.firebaseio.com')
  .constant('SIMPLE_LOGIN_PROVIDERS', ['password','facebook','google'])

  .constant('loginRedirectPath', '/login');