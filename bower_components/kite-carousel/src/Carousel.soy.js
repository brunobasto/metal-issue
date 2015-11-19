/* jshint ignore:start */
import Component from 'bower:metal/src/component/Component';
import ComponentRegistry from 'bower:metal/src/component/ComponentRegistry';
import SoyAop from 'bower:metal/src/soy/SoyAop';
import SoyRenderer from 'bower:metal/src/soy/SoyRenderer';
import SoyTemplates from 'bower:metal/src/soy/SoyTemplates';
var Templates = SoyTemplates.get();
// This file was automatically generated from Carousel.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Templates.Carousel.
 */

if (typeof Templates.Carousel == 'undefined') { Templates.Carousel = {}; }


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
Templates.Carousel.content = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml('<div id="' + soy.$$escapeHtmlAttribute(opt_data.id) + '" class="carousel slide" data-ride="carousel">' + Templates.Carousel.indicators(opt_data, null, opt_ijData) + Templates.Carousel.items(opt_data, null, opt_ijData) + Templates.Carousel.controls(opt_data, null, opt_ijData) + '</div>');
};
if (goog.DEBUG) {
  Templates.Carousel.content.soyTemplateName = 'Templates.Carousel.content';
}


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
Templates.Carousel.controls = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml('<a class="left carousel-control" data-onclick="prev" href="javascript:;" role="button"><span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span><span class="sr-only">Previous</span></a><a class="right carousel-control" data-onclick="next" href="javascript:;" role="button"><span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span><span class="sr-only">Next</span></a>');
};
if (goog.DEBUG) {
  Templates.Carousel.controls.soyTemplateName = 'Templates.Carousel.controls';
}


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
Templates.Carousel.indicators = function(opt_data, opt_ignored, opt_ijData) {
  var output = '<ol class="carousel-indicators">';
  var itemList14 = opt_data.items;
  var itemListLen14 = itemList14.length;
  for (var itemIndex14 = 0; itemIndex14 < itemListLen14; itemIndex14++) {
    var itemData14 = itemList14[itemIndex14];
    output += '<li ' + ((itemIndex14 == opt_data.selectedIndex) ? 'class="active"' : '') + ' data-onclick="_onClickIndicator"></li>';
  }
  output += '</ol>';
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(output);
};
if (goog.DEBUG) {
  Templates.Carousel.indicators.soyTemplateName = 'Templates.Carousel.indicators';
}


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
Templates.Carousel.items = function(opt_data, opt_ignored, opt_ijData) {
  var output = '<div class="carousel-inner" role="listbox">';
  var itemList24 = opt_data.items;
  var itemListLen24 = itemList24.length;
  for (var itemIndex24 = 0; itemIndex24 < itemListLen24; itemIndex24++) {
    var itemData24 = itemList24[itemIndex24];
    output += '<div class="' + ((itemIndex24 == opt_data.selectedIndex) ? 'active' : '') + ' item item-' + soy.$$escapeHtmlAttribute(itemIndex24) + '" style="background-image: url(' + soy.$$escapeHtmlAttribute(soy.$$filterNormalizeUri(itemData24.src)) + '); height: ' + soy.$$escapeHtmlAttribute(soy.$$filterCssValue(opt_data.height)) + ';"><div class="carousel-caption"><h1 class="headline">' + soy.$$escapeHtml(itemData24.headline) + '</h1><p class="body">' + soy.$$escapeHtml(itemData24.body) + '</p></div></div>';
  }
  output += '</div>';
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(output);
};
if (goog.DEBUG) {
  Templates.Carousel.items.soyTemplateName = 'Templates.Carousel.items';
}

Templates.Carousel.content.params = ["height","id","items","selectedIndex"];
Templates.Carousel.controls.params = [];
Templates.Carousel.indicators.params = ["items","selectedIndex"];
Templates.Carousel.items.params = ["height","items","selectedIndex"];

class Carousel extends Component {
  static setImpl(ctor) {
    ComponentRegistry.register(ctor, 'Carousel');
  }
}
Carousel.RENDERER = SoyRenderer;
Carousel.setImpl(Carousel);
SoyAop.registerTemplates('Carousel');
export default Carousel;
/* jshint ignore:end */
