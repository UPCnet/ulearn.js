'use strict';

GenwebApp.config(['$translateProvider', '$stateProvider', '$urlRouterProvider', '$locationProvider', function ($translateProvider, $stateProvider,$urlRouterProvider,$locationProvider) {

    $urlRouterProvider.otherwise('/');
    $stateProvider
            .state('root', {
              url: '/',
              resolve: {
                showportlets: function(){
                      angular.element('#angular-route-view').siblings().show()
                      angular.element('#home-angular-route-view').parent().parent().find('> * > *').show()
                      angular.element('#searchinputusers #search').val("")
                      return;
                  }
              }
            })
            .state('search', {
              url: '/search?search',
              controller: 'SearchUsersController as ctrl',
              resolve: {
                hideportlets: function(){
                      angular.element('#angular-route-view').siblings().hide()
                      angular.element('#home-angular-route-view').parent().parent().find('> * > *').hide()
                      return;
                  }
              },
              templateUrl: '++ulearn++app/templates/searchusers.html'
            })

  $translateProvider.translations('en', {
    'COMMON': {
      'SAVE': 'Save'
    },
    'COMMUNITY_SUBSCRIBE': {
      'TITLE': 'Do you want to get subscribed to this community?',
      'CANCELBTN': 'Cancel',
      'SUCCESSBTN': 'Subscribe',
      'DONE': 'Subscription succeeded',
      'ERROR': 'There was an error while subscribing to the community.',
    },
    'COMMUNITY_ACL': {
      'USERS': 'Users',
      'GROUPS': 'Groups',
      'SEARCHUSERS': 'Search user...',
      'SEARCHGROUPS': 'Search group...',
      'USERNAME': 'Username',
      'GROUPNAME': 'Group',
      'DISPLAYNAME': 'Name',
      'READER': 'Reader',
      'WRITER': 'Writer',
      'OWNER': 'Owner',
      'ACTIONS': 'Actions'
    },
    'ALLCOMMUNITIES_VIEW': {
      'FAVORITEDERROR': 'There was an error while favoriting/unfavoriting the community.',
      'SUBSCRIBEERROR': 'There was an error while subscribing the community.',
      'UNSUBSCRIBEERROR': 'There was an error while unsubscribing the community.',
      'CONFIRMDELETE': 'Are you sure that you want to delete this community?',
      'CONFIRMDELETEBTN': 'Delete',
      'DELETEDONE': 'Successfully deleted the community.',
      'DELETEERROR': 'There was an error while deleting the community.',
      'FAVORITE': 'Favorite',
      'SUBSCRIBE': 'Subscribe',
      'UNSUBSCRIBE': 'Unsubscribe',
      'EDIT': 'Edit',
      'DELETE': 'Delete'
    },
    'EDITACL_VIEW': {
      'DESCRIPTION': 'There was an error while changing permissions on the current community. Please try again later.'
    },
    'CHANGECOMMUNITYTYPE_VIEW': {
      'TITLE': 'Change the community type',
      'CLOSED': 'Closed',
      'OPEN': 'Open',
      'ORGANIZATIVE': 'Organizative',
      'CLOSEDDESC': 'Sólo puede suscribirte el propietario de la comunidad, pero puedes desuscribirte.',
      'OPENDESC': 'Pública (la ve todo el mundo) y te puedes suscribir y desuscribirte.',
      'ORGANIZATIVEDESC': 'Sólo puede suscribirte un administrador y no puedes desuscribirte.',
      'ERROR': 'There was an error while changing the community type, please try again later.'
    },
    'SEARCHUSERS':{
      'THINNKERS': 'Thinnkers',
      'USE_THE_SEARCH_INPUT_TO_FIND_MORE_PEOPLE1': 'Use the search input to find people. ',
      'USE_THE_SEARCH_INPUT_TO_FIND_MORE_PEOPLE2': 'Showing 100 out of ',
      'SEARCH': 'Search'
    }
  });

  $translateProvider.translations('es', {
    'COMMON': {
      'SAVE': 'Guardar'
    },
    'COMMUNITY_SUBSCRIBE': {
        'TITLE': '¿Quieres suscribirte a esta comunidad?',
        'CANCELBTN': 'Cancel',
        'SUCCESSBTN': 'Suscribirme',
        'DONE': 'La suscripción se ha realizado con éxito.',
        'ERROR': 'Se ha producido un error al intentar suscribirle a la comunidad.',
    },
    'COMMUNITY_ACL': {
      'USERS': 'Usuarios',
      'GROUPS': 'Grupos',
      'SEARCHUSERS': 'Buscar usuario...',
      'SEARCHGROUPS': 'Buscar grupo...',
      'USERNAME': 'Usuario',
      'GROUPNAME': 'Grupo',
      'DISPLAYNAME': 'Nombre',
      'READER': 'Lector',
      'WRITER': 'Editor',
      'OWNER': 'Propietario',
      'ACTIONS': 'Acciones'
    },
    'ALLCOMMUNITIES_VIEW': {
      'FAVORITEDERROR': 'Se ha producido un error al intentar hacer favorita a la comunidad.',
      'SUBSCRIBEERROR': 'Se ha producido un error al intentar suscribirle a la comunidad.',
      'UNSUBSCRIBEERROR': 'Se ha producido un error al intentar desuscribirle a la comunidad.',
      'CONFIRMDELETE': '¿Está seguro que quiere eliminar esta comunidad?',
      'CONFIRMDELETEBTN': 'Eliminar',
      'DELETEDONE': 'Se ha eliminado la comunidad.',
      'DELETEERROR': 'Se ha producido un error al intentar eliminar la comunidad.',
      'FAVORITE': 'Favorito',
      'SUBSCRIBE': 'Suscribir',
      'UNSUBSCRIBE': 'Desuscribir',
      'EDIT': 'Editar',
      'DELETE': 'Borrar'
    },
    'EDITACL_VIEW': {
      'DESCRIPTION': 'Se ha producido un error al intentar cambiar los permisos a la comunidad. Por favor, inténtelo de nuevo más tarde.'
    },
    'CHANGECOMMUNITYTYPE_VIEW': {
      'TITLE': 'Cambiar el tipo de comunidad',
      'CLOSED': 'Cerrada',
      'OPEN': 'Abierta',
      'ORGANIZATIVE': 'Organizativa',
      'CLOSEDDESC': 'Sólo puede suscribirte el propietario de la comunidad, pero puedes desuscribirte.',
      'OPENDESC': 'Pública (la ve todo el mundo) y te puedes suscribir y desuscribirte.',
      'ORGANIZATIVEDESC': 'Sólo puede suscribirte un administrador y no puedes desuscribirte.',
      'ERROR': 'Se ha producido un error al intentar cambiar el tipo de la comunidad. Por favor, inténtelo de nuevo más tarde.'
    },
    'SEARCHUSERS':{
      'THINNKERS': 'Personas',
      'USE_THE_SEARCH_INPUT_TO_FIND_MORE_PEOPLE1': 'Usa el buscador para encontrar personas. ',
      'USE_THE_SEARCH_INPUT_TO_FIND_MORE_PEOPLE2': 'Mostrando 100 de ',
      'SEARCH': 'Busca'
    }
  });

  $translateProvider.translations('ca', {
    'COMMON': {
      'SAVE': 'Desa'
    },
    'COMMUNITY_SUBSCRIBE': {
        'TITLE': 'Voleu subscrivir-vos a aquesta comunitat?',
        'CANCELBTN': 'Cancel',
        'SUCCESSBTN': 'Subscriu-me',
        'DONE': 'La subscripció s\'ha realitzat amb èxit.',
        'ERROR': 'S\'ha produit un error al intentar subscriure\'l a la comunitat.',
    },
    'COMMUNITY_ACL': {
      'USERS': 'Usuaris',
      'GROUPS': 'Grups',
      'SEARCHUSERS': 'Cerca usuari...',
      'SEARCHGROUPS': 'Cerca grup...',
      'USERNAME': 'Usuari',
      'GROUPNAME': 'Grup',
      'DISPLAYNAME': 'Nom',
      'READER': 'Lector',
      'WRITER': 'Editor',
      'OWNER': 'Propietari',
      'ACTIONS': 'Acciones'
    },
    'ALLCOMMUNITIES_VIEW': {
      'FAVORITEDERROR': 'S\'ha produit un error al intentar fer favorita a la comunitat.',
      'SUBSCRIBEERROR': 'S\'ha produit un error al intentar suscriure\'l a la comunitat.',
      'UNSUBSCRIBEERROR': 'S\'ha produit un error al intentar desuscriure\'l a la comunitat.',
      'CONFIRMDELETE': 'Esteu segurs que voleu esborrar aquesta comunitat?',
      'CONFIRMDELETEBTN': 'Esborra',
      'DELETEDONE': 'S\'ha esborrat la comunitat.',
      'DELETEERROR': 'S\'ha produit un error al intentar esborrar la comunitat.',
      'FAVORITE': 'Favorit',
      'SUBSCRIBE': 'Subscriu',
      'UNSUBSCRIBE': 'Desubscriu',
      'EDIT': 'Edita',
      'DELETE': 'Esborra'
    },
    'EDITACL_VIEW': {
      'DESCRIPTION': 'S\'ha produit un error al intentar canviar els permisos de la comunitat. Si us plau, torneu a intentar-ho més tard.'
    },
    'CHANGECOMMUNITYTYPE_VIEW': {
      'TITLE': 'Canvia el tipus de comunitat',
      'CLOSED': 'Tancada',
      'OPEN': 'Oberta',
      'ORGANIZATIVE': 'Organitzativa',
      'CLOSEDDESC': 'Sólo puede suscribirte el propietario de la comunidad, pero puedes desuscribirte.',
      'OPENDESC': 'Pública (la ve todo el mundo) y te puedes suscribir y desuscribirte.',
      'ORGANIZATIVEDESC': 'Sólo puede suscribirte un administrador y no puedes desuscribirte.',
      'ERROR': 'S\'ha produit un error al intentar canviar el tipus de la comunitat. Si us plau, torneu a intentar-ho més tard.'
    },
    'SEARCHUSERS':{
      'THINNKERS': 'Persones',
      'USE_THE_SEARCH_INPUT_TO_FIND_MORE_PEOPLE1': 'Utilitza el cercador per trobar persones. ',
      'USE_THE_SEARCH_INPUT_TO_FIND_MORE_PEOPLE2': 'Mostrant 100 de ',
      'SEARCH': 'Cerca'
    }
  });

  // $translateProvider.preferredLanguage('en');
  $translateProvider.determinePreferredLanguage(function () {
    return angular.element('html').attr('lang');
  });
}]);

// angular-datatables custom translations
GenwebApp.value('DTTranslations', {
    es: {
      'sProcessing':     'Procesando...',
      'sLengthMenu':     'Mostrar _MENU_ registros',
      'sZeroRecords':    'No se encontraron resultados',
      'sEmptyTable':     'Ningún dato disponible en esta tabla',
      'sInfo':           'Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros',
      'sInfoEmpty':      'Mostrando registros del 0 al 0 de un total de 0 registros',
      'sInfoFiltered':   '(filtrado de un total de _MAX_ registros)',
      'sInfoPostFix':    '',
      'sSearch':         'Buscar:',
      'sUrl':            '',
      'sInfoThousands':  '.',
      'sLoadingRecords': 'Cargando...',
      'oPaginate': {
        'sFirst':    'Primero',
        'sLast':     'Último',
        'sNext':     'Siguiente',
        'sPrevious': 'Anterior'
      },
      'oAria': {
        'sSortAscending':  ': Activar para ordenar la columna de manera ascendente',
        'sSortDescending': ': Activar para ordenar la columna de manera descendente'
      }
    },
    ca: {
      'sProcessing':   'Processant...',
      'sLengthMenu':   'Mostra _MENU_ registres',
      'sZeroRecords':  'No s\'han trobat registres.',
      'sEmptyTable':   'No hi ha cap dada disponible en aquesta taula',
      'sInfo':         'Mostrant de _START_ a _END_ de _TOTAL_ registres',
      'sInfoEmpty':    'Mostrant de 0 a 0 de 0 registres',
      'sInfoFiltered': '(filtrat de _MAX_ total registres)',
      'sInfoPostFix':  '',
      'sSearch':       'Filtrar:',
      'sUrl':          '',
      'sInfoThousands':  '.',
      'sLoadingRecords': 'Carregant...',
      'oPaginate': {
        'sFirst':    'Primer',
        'sPrevious': 'Anterior',
        'sNext':     'Següent',
        'sLast':     'Últim'
      },
      'oAria': {
        'sSortAscending':  ': Activa per ordenar la columna de manera ascendente',
        'sSortDescending': ': Activa per ordenar la columna de manera descendente'
      }
    },
    en: {
      'sEmptyTable':     'No data available in table',
      'sInfo':           'Showing _START_ to _END_ of _TOTAL_ entries',
      'sInfoEmpty':      'Showing 0 to 0 of 0 entries',
      'sInfoFiltered':   '(filtered from _MAX_ total entries)',
      'sInfoPostFix':    '',
      'sInfoThousands':  ',',
      'sLengthMenu':     'Show _MENU_ entries',
      'sLoadingRecords': 'Loading...',
      'sProcessing':     'Processing...',
      'sSearch':         'Search:',
      'sZeroRecords':    'No matching records found',
      'oPaginate': {
        'sFirst':    'First',
        'sLast':     'Last',
        'sNext':     'Next',
        'sPrevious': 'Previous'
      },
      'oAria': {
        'sSortAscending':  ': activate to sort column ascending',
        'sSortDescending': ': activate to sort column descending'
      }
    }
});
