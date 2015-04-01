'use strict';

GenwebApp.config(['$translateProvider', function ($translateProvider) {
  $translateProvider.translations('en', {
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
      'DELETEERROR': 'There was an error while deleting the community.'
    }
  });

  $translateProvider.translations('es', {
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
      'DELETEERROR': 'Se ha producido un error al intentar eliminar la comunidad.'
    }
  });

  $translateProvider.translations('ca', {
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
      'DELETEERROR': 'S\'ha produit un error al intentar esborrar la comunitat.'
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
