(function () {

  var global = global || this || self || window;
  var nativeBind = Function.prototype.bind;
  var FUNCTION = 'function';

  //polyfill for bind:
  if (typeof nativeBind !== FUNCTION) {
    Function.prototype.bind = function (inContext) {
      var fn = this;
      var args = arguments;
      return function () {
        return fn
          .call
          .apply(fn, args);
      };
    };
  }

}());
