angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('garON', {
    url: '/inicial',
    templateUrl: 'templates/garON.html',
    controller: 'garONCtrl'
  })

  .state('login', {
    url: '/page2',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('cadastro', {
    url: '/cadastro',
    templateUrl: 'templates/cadastro.html',
    controller: 'cadastroCtrl'
  })

  .state('qualSuaMesa', {
    url: '/mesa',
    templateUrl: 'templates/qualSuaMesa.html',
    controller: 'qualSuaMesaCtrl'
  })

  .state('escolhaAOpO', {
    url: '/escolha',
    templateUrl: 'templates/escolhaAOpO.html',
    controller: 'escolhaAOpOCtrl'
  })

  .state('mostrarCardapio', {
    url: '/cardapio',
    templateUrl: 'templates/mostrarCardapio.html',
    controller: 'mostrarCardapioCtrl'
  })

  .state('garON2', {
    url: '/garcon',
    templateUrl: 'templates/garON2.html',
    controller: 'garON2Ctrl'
  })

  .state('avaliaODoCliente', {
    url: '/avaliacao',
    templateUrl: 'templates/avaliaODoCliente.html',
    controller: 'avaliaODoClienteCtrl'
  })

  .state('ruim', {
    url: '/avaliacaoruim',
    templateUrl: 'templates/ruim.html',
    controller: 'ruimCtrl'
  })

  .state('maisOuMenos', {
    url: '/maisoumenos',
    templateUrl: 'templates/maisOuMenos.html',
    controller: 'maisOuMenosCtrl'
  })

  .state('bom', {
    url: '/bom',
    templateUrl: 'templates/bom.html',
    controller: 'bomCtrl'
  })

  .state('garON3', {
    url: '/avaliacaogacon',
    templateUrl: 'templates/garON3.html',
    controller: 'garON3Ctrl'
  })

  .state('termoDeResponsabilidade', {
    url: '/termo',
    templateUrl: 'templates/termoDeResponsabilidade.html',
    controller: 'termoDeResponsabilidadeCtrl'
  })

  .state('modoADM', {
    url: '/modoadm',
    templateUrl: 'templates/modoADM.html',
    controller: 'modoADMCtrl'
  })

$urlRouterProvider.otherwise('/inicial')

  

});