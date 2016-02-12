'use strict';

var $ = require('jquery');
var now = require('lodash/date/now');

var Mojular = require('mojular');

Mojular
  .use([
    require('mojular-moj-elements/modules/conditional-subfields'),
    require('mojular-moj-elements/modules/label-select'),
    require('mojular-moj-elements/modules/label-focus')
  ])
  .init();

console.log('jQuery', $.fn.jquery, now());

var moduleNames = Object.keys(Mojular.Modules);
if(moduleNames.length) {
  var moduleList = moduleNames.map(function(i) {
    return '• ' + i;
  }).join('\n').replace(/^\s+/, '');
  console.log('The following modules are loaded:\n' + moduleList);
}
;
