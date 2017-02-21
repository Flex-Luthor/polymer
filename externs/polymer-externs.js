/**
 * @fileoverview Externs for Polymer
 * @externs
 */

/**
 * @param {!{is: string}} init
 * @return {!CustomElement}
 */
function Polymer(init){}

/**
 * @typedef {{
 * properties: (Object<string, ({
 *   value: *,
 *   type: (Function | undefined),
 *   readOnly: (boolean | undefined),
 *   computed: (string | undefined),
 *   reflectToAttribute: (boolean | undefined),
 *   notify: (boolean | undefined),
 *   observer: (string | undefined)
 * } | Function)> | undefined),
 * observers: (!Array<string> | undefined)
 * }}
 */
let ElementConfiguration;

/**
 * @typedef {{
 *   is: string,
 *   extends: (string | undefined),
 *   config: (ElementConfiguration | undefined),
 *   template: (HTMLTemplateElement | undefined)
 * }}
 */
let PolymerElementInterface;