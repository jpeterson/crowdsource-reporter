﻿
/*
 | Copyright 2014 Esri
 |
 | Licensed under the Apache License, Version 2.0 (the "License");
 | you may not use this file except in compliance with the License.
 | You may obtain a copy of the License at
 |
 |    http://www.apache.org/licenses/LICENSE-2.0
 |
 | Unless required by applicable law or agreed to in writing, software
 | distributed under the License is distributed on an "AS IS" BASIS,
 | WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 | See the License for the specific language governing permissions and
 | limitations under the License.
 */
define({
  'map': {
    'error': 'No se puede crear el mapa',
    'zoomInTooltip': 'Acercar',
    'zoomOutTooltip': 'Alejar',
    'geolocationTooltip': 'Ubicación actual'
  },
  'main': {
    'noGroup': 'No hay ningún grupo configurado',
    'submitReportButtonText': 'Enviar un informe',
    'gotoListViewTooltip': 'Vista de lista',
    'noFeatureGeomtery': 'No se puede mostrar la entidad',
    'featureOutsideAOIMessage': 'á_Feature cannot be added outside study area______________Ó'
  },
  'signin': {
    'guestSigninText': 'Continuar como invitado',
    'signInOrText': 'O',
    'signinOptionsText': 'Inicia sesión con:',
    'noGroupNameText': 'Inicia sesión',
    'guestLoginTooltip': 'Inicia sesión como invitado',
    'facebookLoginTooltip': 'Inicia sesión con Facebook',
    'twitterLoginTooltip': 'Inicia sesión con Twitter',
    'googlePlusLoginTooltip': 'Inicia sesión con Google+',
    'agolLoginTooltip': 'Inicia sesión en ArcGIS'
  },
  'webMapList': {
    'owner': 'Propietario',
    'created': 'Fecha creada',
    'modified': 'Fecha de modificación',
    'description': 'Descripción',
    'snippet': 'Resumen',
    'licenseInfo': 'Restricciones de acceso y uso',
    'accessInformation': 'Créditos',
    'tags': 'Etiquetas',
    'numViews': 'Número de vistas',
    'avgRating': 'Calificación',
    'noWebMapInGroup': 'El grupo configurado no es válido o todavía no se han compartido elementos con este grupo.',
    'infoBtnToolTip': 'Información del mapa'
  },
  'issueWall': {
    'noResultsFound': 'No se ha encontrado ninguna entidad',
    'noResultsFoundInCurrentBuffer': 'No se encontraron entidades cerca de ti',
    'unableToFetchFeatureError': 'No se puede completar la operación',
    'gotoWebmapListTooltip': 'Ir a lista principal',
    'gotoMapViewTooltip': 'Vista del mapa'
  },
  'appHeader': {
    'myReport': 'Mis informes',
    'signIn': 'Iniciar sesión',
    'signOut': 'Cerrar sesión',
    'signInTooltip': 'Iniciar sesión',
    'signOutTooltip': 'Cerrar sesión',
    'myReportTooltip': 'Ver mis informes'
  },
  'geoform': {
    'enterInformation': 'Detalles',
    'selectAttachments': 'Adjuntos',
    'selectFileText': 'Examinar',
    'enterLocation': 'Ubicación',
    'reportItButton': 'Informar',
    'editReportButton': 'á_Update___Ó',
    'cancelButton': 'Cancelar',
    'requiredField': '(necesario)',
    'selectDefaultText': 'Seleccionar&hellip;',
    'invalidInputValue': 'Introduce un valor válido.',
    'noFieldsConfiguredMessage': 'Los campos de la capa no están configurados para capturar datos',
    'invalidSmallNumber': 'Introduce un entero',
    'invalidNumber': 'Introduce un entero',
    'invalidFloat': 'Por favor, entre un número',
    'invalidDouble': 'Por favor, entre un número',
    'requiredFields': 'Indica valores para todos los campos obligatorios',
    'selectLocation': 'Selecciona la ubicación para el informe',
    'numericRangeHintMessage': '${openStrong}Sugerencia:${closeStrong} Valor mínimo ${minValue} y valor máximo ${maxValue}',
    'dateRangeHintMessage': '${openStrong}Sugerencia:${closeStrong} Fecha mínima ${minValue} y fecha máxima ${maxValue}',
    'errorsInApplyEdits': 'No se pudo enviar el informe',
    'attachmentSelectedMsg': 'adjuntos seleccionados',
    'attachmentUploadStatus': 'Error al cargar ${failed} de ${total} adjuntos',
    'geoLocationError': 'Ubicación actual no disponible',
    'geoLocationOutOfExtent': 'La ubicación actual está fuera de la extensión del mapa base',
    'submitButtonTooltip': 'Enviar',
    'cancelButtonTooltip': 'Cancelar',
    'geoformBackButtonTooltip': 'Volver a la lista de informes'
  },
  'locator': {
    'addressText': 'Dirección:',
    'usngText': 'USNG',
    'mgrsText': 'MGRS',
    'latLongText': 'Latitud/longitud',
    'invalidSearch': 'Ningún resultado encontrado',
    'locatorPlaceholder': 'Introduce una dirección para buscar',
    'locationOutOfExtent': 'La dirección localizada está fuera de la extensión del mapa base',
    'searchButtonTooltip': 'Búsqueda',
    'clearButtonTooltip': 'Borrar valor de búsqueda'
  },
  'myIssues': {
    'title': 'Mis informes',
    'myIssuesTooltip': 'Mis informes',
    'noResultsFound': 'No se encontraron informes'
  },
  'itemDetails': {
    'likeButtonLabel': '',
    'likeButtonTooltip': 'á_I agree___Ó',
    'commentButtonLabel': '',
    'commentButtonTooltip': 'á_Leave a reply_____Ó',
    'galleryButtonLabel': '',
    'galleryButtonTooltip': 'Ver documentos adjuntos',
    'mapButtonLabel': 'Ver en mapa',
    'mapButtonTooltip': 'Ver la ubicación de este informe',
    'commentsListHeading': 'Comentarios',
    'unableToUpdateVoteField': 'No es posible contar tu voto en este momento.',
    'gotoIssueListTooltip': 'Ir a lista de informes',
    'deleteMessage': 'á_Are you sure you want to delete___________Ó?'
  },
  'itemList': {
    'likesForThisItemTooltip': 'Vota este informe',
    'loadMoreButtonText': 'Cargar más...'
  },
  'comment': {
    'commentsFormHeading': 'á_Comment___Ó',
    'commentsFormSubmitButton': 'Enviar comentario',
    'commentsFormEditButton': 'á_Update Comment_____Ó',
    'commentsFormCancelButton': 'Cancelar',
    'errorInSubmittingComment': 'No se pudo enviar el comentario.',
    'emptyCommentMessage': 'Introduzca un comentario.',
    'placeHolderText': 'Escribe un comentario',
    'noCommentsAvailableText': 'No hay comentarios disponibles',
    'remainingTextCount': '${0} caracteres restantes',
    'showNoText': 'No',
    'selectAttachments': 'á_Attachments____Ó',
    'selectFileText': 'á_Browse___Ó',
    'attachmentSelectedMsg': 'á_attachment(s) selected________Ó',
    'attachmentHeaderText': 'á_Attachments____Ó',
    'unknownCommentAttachment': 'á_FILE__Ó',
    'editRecordText': 'á_Edit__Ó',
    'deleteRecordText': 'á_Delete___Ó',
    'deleteCommentFailedMessage': 'á_Unable to delete comment________Ó'
  },
  'gallery': {
    'galleryHeaderText': 'Galería',
    'noAttachmentsAvailableText': 'No se encontraron adjuntos'
  }
});