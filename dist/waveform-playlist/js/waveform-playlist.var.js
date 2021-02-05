var WaveformPlaylist;WaveformPlaylist =
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
  \**********************************************************************/
/***/ ((module) => {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/asyncToGenerator.js ***!
  \*****************************************************************/
/***/ ((module) => {

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

module.exports = _asyncToGenerator;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/***/ ((module) => {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/***/ ((module) => {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/get.js":
/*!****************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/get.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var superPropBase = __webpack_require__(/*! ./superPropBase */ "./node_modules/@babel/runtime/helpers/superPropBase.js");

function _get(target, property, receiver) {
  if (typeof Reflect !== "undefined" && Reflect.get) {
    module.exports = _get = Reflect.get;
  } else {
    module.exports = _get = function _get(target, property, receiver) {
      var base = superPropBase(target, property);
      if (!base) return;
      var desc = Object.getOwnPropertyDescriptor(base, property);

      if (desc.get) {
        return desc.get.call(receiver);
      }

      return desc.value;
    };
  }

  return _get(target, property, receiver || target);
}

module.exports = _get;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/getPrototypeOf.js ***!
  \***************************************************************/
/***/ ((module) => {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/inherits.js":
/*!*********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/inherits.js ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js ***!
  \**************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \***************************************************************/
/***/ ((module) => {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/superPropBase.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/superPropBase.js ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getPrototypeOf = __webpack_require__(/*! ./getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");

function _superPropBase(object, property) {
  while (!Object.prototype.hasOwnProperty.call(object, property)) {
    object = getPrototypeOf(object);
    if (object === null) break;
  }

  return object;
}

module.exports = _superPropBase;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/***/ ((module) => {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/@babel/runtime/node_modules/regenerator-runtime/runtime.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime/node_modules/regenerator-runtime/runtime.js ***!
  \*********************************************************************************/
/***/ ((module) => {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : 0
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}


/***/ }),

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/@babel/runtime/node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "./src/Playlist.js":
/*!*************************!*\
  !*** ./src/Playlist.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _default)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash_defaults__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash.defaults */ "./node_modules/lodash.defaults/index.js");
/* harmony import */ var lodash_defaults__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_defaults__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var virtual_dom_h__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! virtual-dom/h */ "./node_modules/virtual-dom/h.js");
/* harmony import */ var virtual_dom_h__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(virtual_dom_h__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var virtual_dom_diff__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! virtual-dom/diff */ "./node_modules/virtual-dom/diff.js");
/* harmony import */ var virtual_dom_diff__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(virtual_dom_diff__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var virtual_dom_patch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! virtual-dom/patch */ "./node_modules/virtual-dom/patch.js");
/* harmony import */ var virtual_dom_patch__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(virtual_dom_patch__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var inline_worker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! inline-worker */ "./node_modules/inline-worker/index.js");
/* harmony import */ var inline_worker__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(inline_worker__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _utils_conversions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./utils/conversions */ "./src/utils/conversions.js");
/* harmony import */ var _track_loader_LoaderFactory__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./track/loader/LoaderFactory */ "./src/track/loader/LoaderFactory.js");
/* harmony import */ var _render_ScrollHook__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./render/ScrollHook */ "./src/render/ScrollHook.js");
/* harmony import */ var _TimeScale__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./TimeScale */ "./src/TimeScale.js");
/* harmony import */ var _Track__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Track */ "./src/Track.js");
/* harmony import */ var _Playout__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./Playout */ "./src/Playout.js");
/* harmony import */ var _annotation_AnnotationList__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./annotation/AnnotationList */ "./src/annotation/AnnotationList.js");
/* harmony import */ var worker_loader_utils_exportogg_worker_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! worker-loader!./utils/exportogg.worker.js */ "./node_modules/worker-loader/dist/cjs.js!./src/utils/exportogg.worker.js");
/* harmony import */ var _utils_exportWavWorker__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./utils/exportWavWorker */ "./src/utils/exportWavWorker.js");
/* harmony import */ var _Undoer__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./Undoer */ "./src/Undoer.js");





















var _default = /*#__PURE__*/function () {
  function _default() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, _default);

    this.tracks = [];
    this.soloedTracks = [];
    this.mutedTracks = [];
    this.playoutPromises = [];
    this.cursor = 0;
    this.playbackSeconds = 0;
    this.duration = 0;
    this.scrollLeft = 0;
    this.scrollTimer = undefined;
    this.showTimescale = false; // whether a user is scrolling the waveform

    this.isScrolling = false;
    this.fadeType = 'logarithmic';
    this.masterGain = 1;
    this.annotations = [];
    this.durationFormat = 'hh:mm:ss.uuu';
    this.isAutomaticScroll = false;
    this.resetDrawTimer = undefined;
    this.undoer = new _Undoer__WEBPACK_IMPORTED_MODULE_19__.default();
  } // TODO extract into a plugin


  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(_default, [{
    key: "initExporter",
    value: function initExporter() {
      this.wavExportWorker = new (inline_worker__WEBPACK_IMPORTED_MODULE_8___default())(_utils_exportWavWorker__WEBPACK_IMPORTED_MODULE_18__.default);
      this.oggExportWorker = new worker_loader_utils_exportogg_worker_js__WEBPACK_IMPORTED_MODULE_17__.default();
    } // TODO extract into a plugin

  }, {
    key: "initRecorder",
    value: function initRecorder(stream) {
      var _this = this;

      this.mediaRecorder = new window.MediaRecorder(stream);

      this.mediaRecorder.onstart = function () {
        var track = new _Track__WEBPACK_IMPORTED_MODULE_14__.default();
        track.setName('Recording');
        track.setEnabledStates();
        track.setEventEmitter(_this.ee);
        _this.recordingTrack = track;

        _this.tracks.push(track);

        _this.chunks = [];
        _this.working = false;
      };

      this.mediaRecorder.ondataavailable = function (e) {
        _this.chunks.push(e.data); // throttle peaks calculation


        if (!_this.working) {
          var recording = new Blob(_this.chunks, {
            type: 'audio/ogg; codecs=opus'
          });
          var loader = _track_loader_LoaderFactory__WEBPACK_IMPORTED_MODULE_11__.default.createLoader(recording, _this.ac);
          loader.load().then(function (audioBuffer) {
            // ask web worker for peaks.
            _this.recorderWorker.postMessage({
              samples: audioBuffer.getChannelData(0),
              samplesPerPixel: _this.samplesPerPixel
            });

            _this.recordingTrack.setCues(0, audioBuffer.duration);

            _this.recordingTrack.setBuffer(audioBuffer);

            _this.recordingTrack.setPlayout(new _Playout__WEBPACK_IMPORTED_MODULE_15__.default(_this.ac, audioBuffer));

            _this.adjustDuration();
          })["catch"](function () {
            _this.working = false;
          });
          _this.working = true;
        }
      };

      this.mediaRecorder.onstop = function () {
        _this.chunks = [];
        _this.working = false;
      };

      this.recorderWorker = new (inline_worker__WEBPACK_IMPORTED_MODULE_8___default())(RecorderWorkerFunction); // use a worker for calculating recording peaks.

      this.recorderWorker.onmessage = function (e) {
        _this.recordingTrack.setPeaks(e.data);

        _this.working = false;

        _this.drawRequest();
      };
    }
  }, {
    key: "setShowTimeScale",
    value: function setShowTimeScale(show) {
      this.showTimescale = show;
    }
  }, {
    key: "setMono",
    value: function setMono(mono) {
      this.mono = mono;
    }
  }, {
    key: "setExclSolo",
    value: function setExclSolo(exclSolo) {
      this.exclSolo = exclSolo;
    }
  }, {
    key: "setSeekStyle",
    value: function setSeekStyle(style) {
      this.seekStyle = style;
    }
  }, {
    key: "getSeekStyle",
    value: function getSeekStyle() {
      return this.seekStyle;
    }
  }, {
    key: "setSampleRate",
    value: function setSampleRate(sampleRate) {
      this.sampleRate = sampleRate;
    }
  }, {
    key: "setSamplesPerPixel",
    value: function setSamplesPerPixel(samplesPerPixel) {
      this.samplesPerPixel = samplesPerPixel;
    }
  }, {
    key: "setAudioContext",
    value: function setAudioContext(ac) {
      this.ac = ac;
    }
  }, {
    key: "setControlOptions",
    value: function setControlOptions(controlOptions) {
      this.controls = controlOptions;
    }
  }, {
    key: "setWaveHeight",
    value: function setWaveHeight(height) {
      this.waveHeight = height;
    }
  }, {
    key: "setColors",
    value: function setColors(colors) {
      this.colors = colors;
    }
  }, {
    key: "setAnnotations",
    value: function setAnnotations(config) {
      this.annotationList = new _annotation_AnnotationList__WEBPACK_IMPORTED_MODULE_16__.default(this, config.annotations, config.controls, config.editable, config.linkEndpoints, config.isContinuousPlay);
    }
  }, {
    key: "setEventEmitter",
    value: function setEventEmitter(ee) {
      this.ee = ee;
    }
  }, {
    key: "getEventEmitter",
    value: function getEventEmitter() {
      return this.ee;
    }
  }, {
    key: "setUpEventEmitter",
    value: function setUpEventEmitter() {
      var _this2 = this;

      var ee = this.ee;

      function arrayMove(arr, fromIndex, toIndex) {
        var element = arr[fromIndex];
        arr.splice(fromIndex, 1);
        arr.splice(toIndex, 0, element);
      }

      ee.on('moveUp', function (track) {
        var idx = _this2.tracks.indexOf(track);

        if (idx > 0) {
          arrayMove(_this2.tracks, idx, idx - 1);

          _this2.drawRequest();
        }
      });
      ee.on('moveDown', function (track) {
        var idx = _this2.tracks.indexOf(track);

        if (idx < _this2.tracks.length - 1) {
          arrayMove(_this2.tracks, idx, idx + 1);

          _this2.drawRequest();
        }
      });
      ee.on('undo', function (val) {
        _this2.undoer.pop();

        console.log('undo');
      });
      ee.on('redo', function (val) {
        console.log('redo'); // todo
      });
      ee.on('load', function (val) {
        _this2.undoer.clear();

        console.log('load'); // todo
      });
      ee.on('save', /*#__PURE__*/function () {
        var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(val) {
          var blob;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  console.log('save');
                  blob = new Blob([JSON.stringify(_this2.tracks, null)], {
                    type: "text/plain;charset=utf-8"
                  });
                  file_saver__WEBPACK_IMPORTED_MODULE_9___default().saveAs(blob, "playlist.json"); // todo

                case 3:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));

        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }());
      ee.on('draw', function (val) {
        _this2.drawRequest();
      });
      ee.on('duplicate', /*#__PURE__*/function () {
        var _ref2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2(track) {
          var self, dupTrack, undo;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  self = _this2; // todo it does not duplicate ease in and out, should it do it?

                  _context2.next = 3;
                  return track.duplicateTrack(track, track.startTime, track.cueIn, track.cueOut, 1);

                case 3:
                  dupTrack = _context2.sent;

                  undo = function undo() {
                    self.removeTrack(dupTrack);
                  };

                  _this2.undoer.push(undo);

                case 6:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2);
        }));

        return function (_x2) {
          return _ref2.apply(this, arguments);
        };
      }());
      ee.on('delete', /*#__PURE__*/function () {
        var _ref3 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee3(track) {
          var self, undo;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  self = _this2;

                  _this2.removeTrack(track);

                  undo = function undo() {//const dupTrack = await track.duplicateTrack(track, track.startTime, track.cueIn, track.cueOut, 1);
                    // todo
                  };

                  _this2.undoer.push(undo); // todo we should also receive the duration of the audio, the audio duration might be shorter we removed the track


                  _this2.drawRequest();

                case 5:
                case "end":
                  return _context3.stop();
              }
            }
          }, _callee3);
        }));

        return function (_x3) {
          return _ref3.apply(this, arguments);
        };
      }());
      ee.on('add', /*#__PURE__*/function () {
        var _ref4 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee4(file) {
          var track, self, undo;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee4$(_context4) {
            while (1) {
              switch (_context4.prev = _context4.next) {
                case 0:
                  _context4.next = 2;
                  return _this2.load([{
                    src: file,
                    name: file.name
                  }]);

                case 2:
                  track = _context4.sent[0];
                  self = _this2;

                  undo = function undo() {
                    self.removeTrack(track);
                    self.drawRequest();
                  };

                  _this2.undoer.push(undo);

                case 6:
                case "end":
                  return _context4.stop();
              }
            }
          }, _callee4);
        }));

        return function (_x4) {
          return _ref4.apply(this, arguments);
        };
      }());
      ee.on('automaticscroll', function (val) {
        _this2.isAutomaticScroll = val;
      });
      ee.on('durationformat', function (format) {
        _this2.durationFormat = format;

        _this2.drawRequest();
      });
      ee.on('select', function (start, end, track) {
        if (_this2.isPlaying()) {
          _this2.lastSeeked = start;
          _this2.pausedAt = undefined;

          _this2.restartPlayFrom(start);
        } else {
          // reset if it was paused.
          _this2.seek(start, end, track);

          _this2.ee.emit('timeupdate', start);

          _this2.drawRequest();
        }
      });
      ee.on('startaudiorendering', function (type) {
        _this2.startOfflineRender(type);
      });
      ee.on('statechange', function (state) {
        _this2.setState(state);

        _this2.drawRequest();
      });
      ee.on('shift', function (deltaTime, track) {
        track.setStartTime(track.getStartTime() + deltaTime);

        _this2.adjustDuration();

        _this2.drawRequest();
      });
      ee.on('shiftbegin', function (deltaTime, track) {});
      ee.on('shiftend', function (deltaTime, track, undo) {
        var startTime = track.getStartTime();

        _this2.undoer.push(function () {
          undo();
          track.setStartTime(startTime - deltaTime);

          _this2.adjustDuration();

          _this2.drawRequest();
        });
      });
      ee.on('record', function () {
        _this2.record();
      });
      ee.on('play', function (start, end) {
        _this2.play(start, end);
      });
      ee.on('pause', function () {
        _this2.pause();
      });
      ee.on('stop', function () {
        _this2.stop();
      });
      ee.on('rewind', function () {
        _this2.rewind();
      });
      ee.on('fastforward', function () {
        _this2.fastForward();
      });
      ee.on('clear', function () {
        _this2.clear().then(function () {
          _this2.drawRequest();
        });
      });
      ee.on('solo', function (track) {
        _this2.soloTrack(track);

        _this2.adjustTrackPlayout();

        _this2.drawRequest();
      });
      ee.on('mute', function (track) {
        _this2.muteTrack(track);

        _this2.adjustTrackPlayout();

        _this2.drawRequest();
      });
      ee.on('volumechange', function (volume, track) {
        track.setGainLevel(volume / 100);
      });
      ee.on('mastervolumechange', function (volume) {
        _this2.masterGain = volume / 100;

        _this2.tracks.forEach(function (track) {
          track.setMasterGainLevel(_this2.masterGain);
        });
      });
      ee.on('fadein', function (duration, track) {
        var fadeEnd = 0;

        if (track.fades && track.fadeIn && track.fades[track.fadeIn]) {
          fadeEnd = track.fades[track.fadeIn].end;
        }

        var fadeType = _this2.fadeType;

        var undo = function undo() {
          track.setFadeIn(fadeEnd, fadeType);

          _this2.drawRequest();
        };

        _this2.undoer.push(undo);

        track.setFadeIn(duration, _this2.fadeType);

        _this2.drawRequest();
      });
      ee.on('fadeout', function (duration, track) {
        var fadeBegin = 0;

        if (track.fades && track.fadeIn && track.fades[track.fadeIn]) {
          fadeBegin = track.fades[track.fadeIn].end;
        }

        var fadeType = _this2.fadeType;

        var undo = function undo() {
          track.setFadeOut(fadeBegin, fadeType);

          _this2.drawRequest();
        };

        _this2.undoer.push(undo);

        track.setFadeOut(duration, _this2.fadeType);

        _this2.drawRequest();
      });
      ee.on('stereopan', function (panvalue, track) {
        track.setStereoPanValue(panvalue);
      });
      ee.on('fadetype', function (type) {
        _this2.fadeType = type;
      });
      ee.on('duplicateTrack', function (track, start, cueIn, cueOut, trackOffset) {
        track.duplicateTrack(track, start, cueIn, cueOut, trackOffset);
      });
      ee.on('trim', /*#__PURE__*/_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee5() {
        var track, timeSelection, undo;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                track = _this2.getActiveTrack();
                timeSelection = _this2.getTimeSelection();
                _context5.next = 4;
                return track.trim(timeSelection.start, timeSelection.end);

              case 4:
                undo = _context5.sent;
                track.calculatePeaks(_this2.samplesPerPixel, _this2.sampleRate);

                _this2.setTimeSelection(0, 0);

                _this2.drawRequest();

                _this2.undoer.push(undo);

              case 9:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      })));
      ee.on('zoomin', function () {
        var zoomIndex = Math.max(0, _this2.zoomIndex - 1);
        var zoom = _this2.zoomLevels[zoomIndex];

        if (zoom !== _this2.samplesPerPixel) {
          _this2.setZoom(zoom);

          _this2.drawRequest();
        }
      });
      ee.on('zoomout', function () {
        var zoomIndex = Math.min(_this2.zoomLevels.length - 1, _this2.zoomIndex + 1);
        var zoom = _this2.zoomLevels[zoomIndex];

        if (zoom !== _this2.samplesPerPixel) {
          _this2.setZoom(zoom);

          _this2.drawRequest();
        }
      });
      ee.on('scroll', function () {
        _this2.isScrolling = true;

        _this2.drawRequest();

        clearTimeout(_this2.scrollTimer);
        _this2.scrollTimer = setTimeout(function () {
          _this2.isScrolling = false;
        }, 200);
      });
    }
  }, {
    key: "removeTrack",
    value: function removeTrack(track) {
      this.tracks = this.tracks.filter(function (t) {
        return t !== track;
      });
    }
  }, {
    key: "load",
    value: function load(trackList) {
      var _this3 = this;

      var loadPromises = trackList.map(function (trackInfo) {
        var loader = _track_loader_LoaderFactory__WEBPACK_IMPORTED_MODULE_11__.default.createLoader(trackInfo.src, _this3.ac, _this3.ee);
        return loader.load();
      });
      var newTrack;
      var trackOffset;
      var isTrackDuplication = false;
      return Promise.all(loadPromises).then(function (audioBuffers) {
        _this3.ee.emit('audiosourcesloaded');

        var tracks = audioBuffers.map(function (audioBuffer, index) {
          var info = trackList[index];
          var trck = info.track || undefined;
          isTrackDuplication = trck !== undefined;
          var name = info.name || 'Untitled';
          var start = info.start || 0;
          var states = info.states || {};
          var fadeIn = info.fadeIn;
          var fadeOut = info.fadeOut;
          var cueIn = info.cueIn || 0;
          var cueOut = info.cueOut || audioBuffer.duration;
          var gain = info.gain || 1;
          var muted = info.muted || false;
          var soloed = info.soloed || false;
          var selection = info.selected;
          var peaks = info.peaks || {
            type: 'WebAudio',
            mono: _this3.mono
          };
          var customClass = info.customClass || undefined;
          var waveOutlineColor = info.waveOutlineColor || undefined;
          var stereoPan = info.stereoPan || 0;
          var duplicationNumber = info.duplicationNumber || 0;
          trackOffset = info.trackOffset || 0; // webaudio specific playout for now.

          var playout = new _Playout__WEBPACK_IMPORTED_MODULE_15__.default(_this3.ac, audioBuffer);
          var track = new _Track__WEBPACK_IMPORTED_MODULE_14__.default();
          track.setSrc(info.src);
          track.setBuffer(audioBuffer);
          track.setSrcTrack(trck);
          track.setDuplicationNumber(trck === undefined ? duplicationNumber : trck.srcTrack === undefined ? trck.duplicationNumber + 1 : trck.srcTrack.duplicationNumber + 1);
          track.setName(name);
          track.setEventEmitter(_this3.ee);
          track.setEnabledStates(states);
          track.setCues(cueIn, cueOut);
          track.setCustomClass(customClass);
          track.setWaveOutlineColor(waveOutlineColor);

          if (fadeIn !== undefined) {
            track.setFadeIn(fadeIn.duration, fadeIn.shape);
          }

          if (fadeOut !== undefined) {
            track.setFadeOut(fadeOut.duration, fadeOut.shape);
          }

          if (selection !== undefined) {
            _this3.setActiveTrack(track);

            _this3.setTimeSelection(selection.start, selection.end);
          }

          if (peaks !== undefined) {
            track.setPeakData(peaks);
          }

          track.setState(_this3.getState());
          track.setStartTime(start);
          track.setPlayout(playout);
          track.setGainLevel(gain);
          track.setStereoPanValue(stereoPan);

          if (muted) {
            _this3.muteTrack(track);
          }

          if (soloed) {
            _this3.soloTrack(track);
          } // extract peaks with AudioContext for now.


          track.calculatePeaks(_this3.samplesPerPixel, _this3.sampleRate);
          newTrack = track;
          return track;
        });

        if (tracks.length > 1) {
          _this3.tracks = _this3.tracks.concat(tracks);
        } else if (isTrackDuplication) {
          _this3.tracks.splice(_this3.tracks.indexOf(_this3.getActiveTrack()) + _this3.getActiveTrack().duplicationNumber - newTrack.duplicationNumber + trackOffset, 0, newTrack);
        } else {
          _this3.tracks.push(tracks[0]);
        }

        _this3.adjustDuration();

        _this3.draw(_this3.render());

        _this3.ee.emit('audiosourcesrendered');

        return tracks;
      })["catch"](function (e) {
        _this3.ee.emit('audiosourceserror', e);

        return [];
      });
    }
  }, {
    key: "virtualLoad",
    value: function virtualLoad(trackList) {
      var _this4 = this;

      var loadPromises = trackList.map(function (trackInfo) {
        var loader = _track_loader_LoaderFactory__WEBPACK_IMPORTED_MODULE_11__.default.createLoader(trackInfo.src, _this4.ac, _this4.ee);
        return loader.load();
      });
      var newTrack = undefined;
      var trackOffset = undefined;
      var isTrackDuplication = false;
      return Promise.all(loadPromises).then(function (audioBuffers) {
        _this4.ee.emit('audiosourcesloaded');

        var tracks = audioBuffers.map(function (audioBuffer, index) {
          var info = trackList[index];
          var trck = info.track || undefined;
          isTrackDuplication = trck !== undefined;
          var name = info.name || 'Untitled';
          var start = info.start || 0;
          var states = info.states || {};
          var fadeIn = info.fadeIn;
          var fadeOut = info.fadeOut;
          var cueIn = info.cueIn || 0;
          var cueOut = info.cueOut || audioBuffer.duration;
          var gain = info.gain || 1;
          var muted = info.muted || false;
          var soloed = info.soloed || false;
          var selection = info.selected;
          var peaks = info.peaks || {
            type: 'WebAudio',
            mono: _this4.mono
          };
          var customClass = info.customClass || undefined;
          var waveOutlineColor = info.waveOutlineColor || undefined;
          var stereoPan = info.stereoPan || 0;
          var duplicationNumber = info.duplicationNumber || 0;
          trackOffset = info.trackOffset || 0; // webaudio specific playout for now.

          var playout = new _Playout__WEBPACK_IMPORTED_MODULE_15__.default(_this4.ac, audioBuffer);
          var track = new _Track__WEBPACK_IMPORTED_MODULE_14__.default();
          track.setSrc(info.src);
          track.setBuffer(audioBuffer);
          track.setSrcTrack(trck);
          track.setDuplicationNumber(trck === undefined ? duplicationNumber : trck.srcTrack === undefined ? trck.duplicationNumber + 1 : trck.srcTrack.duplicationNumber + 1);
          track.setName(name);
          track.setEventEmitter(_this4.ee);
          track.setEnabledStates(states);
          track.setCues(cueIn, cueOut);
          track.setCustomClass(customClass);
          track.setWaveOutlineColor(waveOutlineColor);

          if (fadeIn !== undefined) {
            track.setFadeIn(fadeIn.duration, fadeIn.shape);
          }

          if (fadeOut !== undefined) {
            track.setFadeOut(fadeOut.duration, fadeOut.shape);
          }

          if (selection !== undefined) {
            _this4.setActiveTrack(track);

            _this4.setTimeSelection(selection.start, selection.end);
          }

          if (peaks !== undefined) {
            track.setPeakData(peaks);
          }

          track.setState(_this4.getState());
          track.setStartTime(start);
          track.setPlayout(playout);
          track.setGainLevel(gain);
          track.setStereoPanValue(stereoPan);

          if (muted) {
            _this4.muteTrack(track);
          }

          if (soloed) {
            _this4.soloTrack(track);
          } // extract peaks with AudioContext for now.


          track.calculatePeaks(_this4.samplesPerPixel, _this4.sampleRate);
          newTrack = track;
          return track;
        });

        if (tracks.length > 1) {
          _this4.tracks = _this4.tracks.concat(tracks);
        } else if (isTrackDuplication) {
          _this4.tracks.splice(_this4.tracks.indexOf(_this4.getActiveTrack()) + _this4.getActiveTrack().duplicationNumber - newTrack.duplicationNumber + trackOffset, 0, newTrack);
        }

        _this4.adjustDuration();

        _this4.draw(_this4.render());

        _this4.ee.emit('audiosourcesrendered');
      })["catch"](function (e) {
        _this4.ee.emit('audiosourceserror', e);
      });
    }
    /*
      track instance of Track.
    */

  }, {
    key: "setActiveTrack",
    value: function setActiveTrack(track) {
      this.activeTrack = track;
    }
  }, {
    key: "getActiveTrack",
    value: function getActiveTrack() {
      return this.activeTrack;
    }
  }, {
    key: "isSegmentSelection",
    value: function isSegmentSelection() {
      return this.timeSelection.start !== this.timeSelection.end;
    }
    /*
      start, end in seconds.
    */

  }, {
    key: "setTimeSelection",
    value: function setTimeSelection() {
      var start = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var end = arguments.length > 1 ? arguments[1] : undefined;
      this.timeSelection = {
        start: start,
        end: end === undefined ? start : end
      };
      this.cursor = start;
    }
  }, {
    key: "startOfflineRender",
    value: function startOfflineRender(type) {
      var _this5 = this;

      if (this.isRendering) {
        return;
      }

      this.isRendering = true;
      this.offlineAudioContext = new OfflineAudioContext(2, 44100 * this.duration, 44100);
      var currentTime = this.offlineAudioContext.currentTime;
      this.tracks.forEach(function (track) {
        track.setOfflinePlayout(new _Playout__WEBPACK_IMPORTED_MODULE_15__.default(_this5.offlineAudioContext, track.buffer));
        track.schedulePlay(currentTime, 0, 0, {
          shouldPlay: _this5.shouldTrackPlay(track),
          masterGain: 1,
          isOffline: true
        });
      });
      /*
        TODO cleanup of different audio playouts handling.
      */

      this.offlineAudioContext.startRendering().then(function (audioBuffer) {
        if (type === 'buffer') {
          _this5.ee.emit('audiorenderingfinished', type, audioBuffer);

          _this5.isRendering = false;
        } else if (type === 'ogg') {
          // callback for `encodeOGG`
          _this5.oggExportWorker.onmessage = function (e) {
            _this5.ee.emit('audiorenderingfinished', type, e.data);

            _this5.isRendering = false;
          }; // ask the worker for a OGG


          _this5.oggExportWorker.postMessage({
            command: 'encodeOGG',
            buffer: [// todo check if mono or stereo
            audioBuffer.getChannelData(0), audioBuffer.getChannelData(1)],
            sampleRate: audioBuffer.sampleRate,
            numberOfChannels: audioBuffer.numberOfChannels,
            quality: 0.5,
            tags: {}
          });
        } else if (type === 'wav') {
          _this5.wavExportWorker.postMessage({
            command: 'init',
            config: {
              sampleRate: 44100
            }
          }); // callback for `exportWAV`


          _this5.wavExportWorker.onmessage = function (e) {
            _this5.ee.emit('audiorenderingfinished', type, e.data);

            _this5.isRendering = false; // clear out the buffer for next renderings.

            _this5.wavExportWorker.postMessage({
              command: 'clear'
            });
          }; // send the channel data from our buffer to the worker


          _this5.wavExportWorker.postMessage({
            command: 'record',
            buffer: [audioBuffer.getChannelData(0), audioBuffer.getChannelData(1)]
          }); // ask the worker for a WAV


          _this5.wavExportWorker.postMessage({
            command: 'exportWAV',
            type: 'audio/wav'
          });
        }
      })["catch"](function (e) {
        throw e;
      });
    }
  }, {
    key: "getTimeSelection",
    value: function getTimeSelection() {
      return this.timeSelection;
    }
  }, {
    key: "setState",
    value: function setState(state) {
      this.state = state;
      this.tracks.forEach(function (track) {
        track.setState(state);
      });
    }
  }, {
    key: "getState",
    value: function getState() {
      return this.state;
    }
  }, {
    key: "setZoomIndex",
    value: function setZoomIndex(index) {
      this.zoomIndex = index;
    }
  }, {
    key: "setZoomLevels",
    value: function setZoomLevels(levels) {
      this.zoomLevels = levels;
    }
  }, {
    key: "setZoom",
    value: function setZoom(zoom) {
      var _this6 = this;

      this.samplesPerPixel = zoom;
      this.zoomIndex = this.zoomLevels.indexOf(zoom);
      this.tracks.forEach(function (track) {
        track.calculatePeaks(zoom, _this6.sampleRate);
      });
    }
  }, {
    key: "muteTrack",
    value: function muteTrack(track) {
      var index = this.mutedTracks.indexOf(track);

      if (index > -1) {
        this.mutedTracks.splice(index, 1);
      } else {
        this.mutedTracks.push(track);
      }
    }
  }, {
    key: "soloTrack",
    value: function soloTrack(track) {
      var index = this.soloedTracks.indexOf(track);

      if (index > -1) {
        this.soloedTracks.splice(index, 1);
      } else if (this.exclSolo) {
        this.soloedTracks = [track];
      } else {
        this.soloedTracks.push(track);
      }
    }
  }, {
    key: "adjustTrackPlayout",
    value: function adjustTrackPlayout() {
      var _this7 = this;

      this.tracks.forEach(function (track) {
        track.setShouldPlay(_this7.shouldTrackPlay(track));
      });
    }
  }, {
    key: "adjustDuration",
    value: function adjustDuration() {
      this.duration = this.tracks.reduce(function (duration, track) {
        return Math.max(duration, track.getEndTime());
      }, 0);
    }
  }, {
    key: "shouldTrackPlay",
    value: function shouldTrackPlay(track) {
      var shouldPlay; // if there are solo tracks, only they should play.

      if (this.soloedTracks.length > 0) {
        shouldPlay = false;

        if (this.soloedTracks.indexOf(track) > -1) {
          shouldPlay = true;
        }
      } else {
        // play all tracks except any muted tracks.
        shouldPlay = true;

        if (this.mutedTracks.indexOf(track) > -1) {
          shouldPlay = false;
        }
      }

      return shouldPlay;
    }
  }, {
    key: "isPlaying",
    value: function isPlaying() {
      return this.tracks.reduce(function (isPlaying, track) {
        return isPlaying || track.isPlaying();
      }, false);
    }
    /*
    *   returns the current point of time in the playlist in seconds.
    */

  }, {
    key: "getCurrentTime",
    value: function getCurrentTime() {
      var cursorPos = this.lastSeeked || this.pausedAt || this.cursor;
      return cursorPos + this.getElapsedTime();
    }
  }, {
    key: "getElapsedTime",
    value: function getElapsedTime() {
      return this.ac.currentTime - this.lastPlay;
    }
  }, {
    key: "setMasterGain",
    value: function setMasterGain(gain) {
      this.ee.emit('mastervolumechange', gain);
    }
  }, {
    key: "restartPlayFrom",
    value: function restartPlayFrom(start, end) {
      this.stopAnimation();
      this.tracks.forEach(function (editor) {
        editor.scheduleStop();
      });
      return Promise.all(this.playoutPromises).then(this.play.bind(this, start, end));
    }
  }, {
    key: "play",
    value: function play(startTime, endTime) {
      var _this8 = this;

      clearTimeout(this.resetDrawTimer);
      var currentTime = this.ac.currentTime;
      var selected = this.getTimeSelection();
      var playoutPromises = [];
      var start = startTime || this.pausedAt || this.cursor;
      var end = endTime;

      if (!end && selected.end !== selected.start && selected.end > start) {
        end = selected.end;
      }

      if (this.isPlaying()) {
        return this.restartPlayFrom(start, end);
      }

      this.tracks.forEach(function (track) {
        track.setState('cursor');
        playoutPromises.push(track.schedulePlay(currentTime, start, end, {
          shouldPlay: _this8.shouldTrackPlay(track),
          masterGain: _this8.masterGain
        }));
      });
      this.lastPlay = currentTime; // use these to track when the playlist has fully stopped.

      this.playoutPromises = playoutPromises;
      this.startAnimation(start);
      return Promise.all(this.playoutPromises);
    }
  }, {
    key: "pause",
    value: function pause() {
      if (!this.isPlaying()) {
        return Promise.all(this.playoutPromises);
      }

      this.pausedAt = this.getCurrentTime();
      return this.playbackReset();
    }
  }, {
    key: "stop",
    value: function stop() {
      if (this.mediaRecorder && this.mediaRecorder.state === 'recording') {
        this.mediaRecorder.stop();
      }

      this.pausedAt = undefined;
      this.playbackSeconds = 0;
      return this.playbackReset();
    }
  }, {
    key: "playbackReset",
    value: function playbackReset() {
      var _this9 = this;

      this.lastSeeked = undefined;
      this.stopAnimation();
      this.tracks.forEach(function (track) {
        track.scheduleStop();
        track.setState(_this9.getState());
      });
      this.drawRequest();
      return Promise.all(this.playoutPromises);
    }
  }, {
    key: "rewind",
    value: function rewind() {
      var _this10 = this;

      return this.stop().then(function () {
        _this10.scrollLeft = 0;

        _this10.ee.emit('select', 0, 0);
      });
    }
  }, {
    key: "fastForward",
    value: function fastForward() {
      var _this11 = this;

      return this.stop().then(function () {
        if (_this11.viewDuration < _this11.duration) {
          _this11.scrollLeft = _this11.duration - _this11.viewDuration;
        } else {
          _this11.scrollLeft = 0;
        }

        _this11.ee.emit('select', _this11.duration, _this11.duration);
      });
    }
  }, {
    key: "clear",
    value: function clear() {
      var _this12 = this;

      return this.stop().then(function () {
        _this12.tracks = [];
        _this12.soloedTracks = [];
        _this12.mutedTracks = [];
        _this12.playoutPromises = [];
        _this12.cursor = 0;
        _this12.playbackSeconds = 0;
        _this12.duration = 0;
        _this12.scrollLeft = 0;

        _this12.seek(0, 0, undefined);
      });
    }
  }, {
    key: "record",
    value: function record() {
      var _this13 = this;

      var playoutPromises = [];
      this.mediaRecorder.start(300);
      this.tracks.forEach(function (track) {
        track.setState('none');
        playoutPromises.push(track.schedulePlay(_this13.ac.currentTime, 0, undefined, {
          shouldPlay: _this13.shouldTrackPlay(track)
        }));
      });
      this.playoutPromises = playoutPromises;
    }
  }, {
    key: "startAnimation",
    value: function startAnimation(startTime) {
      var _this14 = this;

      this.lastDraw = this.ac.currentTime;
      this.animationRequest = window.requestAnimationFrame(function () {
        _this14.updateEditor(startTime);
      });
    }
  }, {
    key: "stopAnimation",
    value: function stopAnimation() {
      window.cancelAnimationFrame(this.animationRequest);
      this.lastDraw = undefined;
    }
  }, {
    key: "seek",
    value: function seek(start, end, track) {
      if (this.isPlaying()) {
        this.lastSeeked = start;
        this.pausedAt = undefined;
        this.restartPlayFrom(start);
      } else {
        // reset if it was paused.
        this.setActiveTrack(track || this.tracks[0]);
        this.pausedAt = start;
        this.setTimeSelection(start, end);

        if (this.getSeekStyle() === 'fill') {
          this.playbackSeconds = start;
        }
      }
    }
    /*
    * Animation function for the playlist.
    * Keep under 16.7 milliseconds based on a typical screen refresh rate of 60fps.
    */

  }, {
    key: "updateEditor",
    value: function updateEditor(cursor) {
      var _this15 = this;

      var currentTime = this.ac.currentTime;
      var selection = this.getTimeSelection();
      var cursorPos = cursor || this.cursor;
      var elapsed = currentTime - this.lastDraw;

      if (this.isPlaying()) {
        var playbackSeconds = cursorPos + elapsed;
        this.ee.emit('timeupdate', playbackSeconds);
        this.animationRequest = window.requestAnimationFrame(function () {
          _this15.updateEditor(playbackSeconds);
        });
        this.playbackSeconds = playbackSeconds;
        this.draw(this.render());
        this.lastDraw = currentTime;
      } else {
        if (cursorPos + elapsed >= (this.isSegmentSelection() ? selection.end : this.duration)) {
          this.ee.emit('finished');
        }

        this.stopAnimation();
        this.resetDrawTimer = setTimeout(function () {
          _this15.pausedAt = undefined;
          _this15.lastSeeked = undefined;

          _this15.setState(_this15.getState());

          _this15.playbackSeconds = 0;

          _this15.draw(_this15.render());
        }, 0);
      }
    }
  }, {
    key: "drawRequest",
    value: function drawRequest() {
      var _this16 = this;

      window.requestAnimationFrame(function () {
        _this16.draw(_this16.render());
      });
    }
  }, {
    key: "draw",
    value: function draw(newTree) {
      var patches = virtual_dom_diff__WEBPACK_IMPORTED_MODULE_6___default()(this.tree, newTree);
      this.rootNode = virtual_dom_patch__WEBPACK_IMPORTED_MODULE_7___default()(this.rootNode, patches);
      this.tree = newTree; // use for fast forwarding.

      this.viewDuration = (0,_utils_conversions__WEBPACK_IMPORTED_MODULE_10__.pixelsToSeconds)(this.rootNode.clientWidth - this.controls.width, this.samplesPerPixel, this.sampleRate);
    }
  }, {
    key: "getTrackRenderData",
    value: function getTrackRenderData() {
      var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var defaults = {
        height: this.waveHeight,
        resolution: this.samplesPerPixel,
        sampleRate: this.sampleRate,
        controls: this.controls,
        isActive: false,
        timeSelection: this.getTimeSelection(),
        playlistLength: this.duration,
        playbackSeconds: this.playbackSeconds,
        colors: this.colors
      };
      return lodash_defaults__WEBPACK_IMPORTED_MODULE_4___default()(data, defaults);
    }
  }, {
    key: "isActiveTrack",
    value: function isActiveTrack(track) {
      var activeTrack = this.getActiveTrack();

      if (this.isSegmentSelection()) {
        return activeTrack === track;
      }

      return true;
    }
  }, {
    key: "renderAnnotations",
    value: function renderAnnotations() {
      return this.annotationList.render();
    }
  }, {
    key: "renderTimeScale",
    value: function renderTimeScale() {
      var controlWidth = this.controls.show ? this.controls.width : 0;
      var timeScale = new _TimeScale__WEBPACK_IMPORTED_MODULE_13__.default(this.duration, this.scrollLeft, this.samplesPerPixel, this.sampleRate, controlWidth, this.colors);
      return timeScale.render();
    }
  }, {
    key: "renderTrackSection",
    value: function renderTrackSection() {
      var _this17 = this;

      var trackElements = this.tracks.map(function (track) {
        return track.render(_this17.getTrackRenderData({
          isActive: _this17.isActiveTrack(track),
          shouldPlay: _this17.shouldTrackPlay(track),
          soloed: _this17.soloedTracks.indexOf(track) > -1,
          muted: _this17.mutedTracks.indexOf(track) > -1
        }));
      });
      return virtual_dom_h__WEBPACK_IMPORTED_MODULE_5___default()('div.playlist-tracks', {
        attributes: {
          style: 'overflow: auto;'
        },
        onscroll: function onscroll(e) {
          _this17.scrollLeft = (0,_utils_conversions__WEBPACK_IMPORTED_MODULE_10__.pixelsToSeconds)(e.target.scrollLeft, _this17.samplesPerPixel, _this17.sampleRate);

          _this17.ee.emit('scroll', _this17.scrollLeft);
        },
        hook: new _render_ScrollHook__WEBPACK_IMPORTED_MODULE_12__.default(this)
      }, trackElements);
    }
  }, {
    key: "render",
    value: function render() {
      var containerChildren = [];

      if (this.showTimescale) {
        containerChildren.push(this.renderTimeScale());
      }

      containerChildren.push(this.renderTrackSection());

      if (this.annotationList.length) {
        containerChildren.push(this.renderAnnotations());
      }

      return virtual_dom_h__WEBPACK_IMPORTED_MODULE_5___default()('div.playlist', {
        attributes: {
          style: 'overflow: hidden; position: relative;'
        }
      }, containerChildren);
    }
  }, {
    key: "getInfo",
    value: function getInfo() {
      var info = [];
      this.tracks.forEach(function (track) {
        info.push(track.getTrackDetails());
      });
      return info;
    }
  }]);

  return _default;
}();



/***/ }),

/***/ "./src/Playout.js":
/*!************************!*\
  !*** ./src/Playout.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _default)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var fade_maker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! fade-maker */ "./node_modules/fade-maker/index.js");




var _default = /*#__PURE__*/function () {
  function _default(ac, buffer) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, _default);

    this.ac = ac;
    this.gain = 1;
    this.buffer = buffer;
    this.destination = this.ac.destination;
    this.ac.createStereoPanner = ac.createStereoPanner || ac.createPanner;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(_default, [{
    key: "applyFade",
    value: function applyFade(type, start, duration) {
      var shape = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'logarithmic';

      if (type === fade_maker__WEBPACK_IMPORTED_MODULE_2__.FADEIN) {
        (0,fade_maker__WEBPACK_IMPORTED_MODULE_2__.createFadeIn)(this.fadeGain.gain, shape, start, duration);
      } else if (type === fade_maker__WEBPACK_IMPORTED_MODULE_2__.FADEOUT) {
        (0,fade_maker__WEBPACK_IMPORTED_MODULE_2__.createFadeOut)(this.fadeGain.gain, shape, start, duration);
      } else {
        throw new Error('Unsupported fade type');
      }
    }
  }, {
    key: "applyFadeIn",
    value: function applyFadeIn(start, duration) {
      var shape = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'logarithmic';
      this.applyFade(fade_maker__WEBPACK_IMPORTED_MODULE_2__.FADEIN, start, duration, shape);
    }
  }, {
    key: "applyFadeOut",
    value: function applyFadeOut(start, duration) {
      var shape = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'logarithmic';
      this.applyFade(fade_maker__WEBPACK_IMPORTED_MODULE_2__.FADEOUT, start, duration, shape);
    }
  }, {
    key: "isPlaying",
    value: function isPlaying() {
      return this.source !== undefined;
    }
  }, {
    key: "getDuration",
    value: function getDuration() {
      return this.buffer.duration;
    }
  }, {
    key: "setAudioContext",
    value: function setAudioContext(ac) {
      this.ac = ac;
      this.ac.createStereoPanner = ac.createStereoPanner || ac.createPanner;
      this.destination = this.ac.destination;
    }
  }, {
    key: "setUpSource",
    value: function setUpSource() {
      var _this = this;

      this.source = this.ac.createBufferSource();
      this.source.buffer = this.buffer;
      var sourcePromise = new Promise(function (resolve) {
        // keep track of the buffer state.
        _this.source.onended = function () {
          _this.source.disconnect();

          _this.fadeGain.disconnect();

          _this.volumeGain.disconnect();

          _this.shouldPlayGain.disconnect();

          _this.panner.disconnect();

          _this.masterGain.disconnect();

          _this.source = undefined;
          _this.fadeGain = undefined;
          _this.volumeGain = undefined;
          _this.shouldPlayGain = undefined;
          _this.panner = undefined;
          _this.masterGain = undefined;
          resolve();
        };
      });
      this.fadeGain = this.ac.createGain(); // used for track volume slider

      this.volumeGain = this.ac.createGain(); // used for solo/mute

      this.shouldPlayGain = this.ac.createGain();
      this.masterGain = this.ac.createGain();
      this.panner = this.ac.createStereoPanner();
      this.source.connect(this.fadeGain);
      this.fadeGain.connect(this.volumeGain);
      this.volumeGain.connect(this.shouldPlayGain);
      this.shouldPlayGain.connect(this.masterGain);
      this.masterGain.connect(this.panner);
      this.panner.connect(this.destination);
      return sourcePromise;
    }
  }, {
    key: "setVolumeGainLevel",
    value: function setVolumeGainLevel(level) {
      if (this.volumeGain) {
        this.volumeGain.gain.value = level;
      }
    }
  }, {
    key: "setShouldPlay",
    value: function setShouldPlay(bool) {
      if (this.shouldPlayGain) {
        this.shouldPlayGain.gain.value = bool ? 1 : 0;
      }
    }
  }, {
    key: "setMasterGainLevel",
    value: function setMasterGainLevel(level) {
      if (this.masterGain) {
        this.masterGain.gain.value = level;
      }
    }
  }, {
    key: "setStereoPanValue",
    value: function setStereoPanValue(value) {
      var pan = value === undefined ? 0 : value;

      if (this.panner) {
        if (this.panner.pan !== undefined) {
          this.panner.pan.value = pan;
        } else {
          this.panner.panningModel = 'equalpower';
          this.panner.setPosition(pan, 0, 1 - Math.abs(pan));
        }
      }
    }
    /*
      source.start is picky when passing the end time.
      If rounding error causes a number to make the source think
      it is playing slightly more samples than it has it won't play at all.
      Unfortunately it doesn't seem to work if you just give it a start time.
    */

  }, {
    key: "play",
    value: function play(when, start, duration) {
      this.source.start(when, start, duration);
    }
  }, {
    key: "stop",
    value: function stop() {
      var when = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

      if (this.source) {
        this.source.stop(when);
      }
    }
  }]);

  return _default;
}();



/***/ }),

/***/ "./src/TimeScale.js":
/*!**************************!*\
  !*** ./src/TimeScale.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var virtual_dom_h__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! virtual-dom/h */ "./node_modules/virtual-dom/h.js");
/* harmony import */ var virtual_dom_h__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(virtual_dom_h__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_conversions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/conversions */ "./src/utils/conversions.js");
/* harmony import */ var _render_TimeScaleHook__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./render/TimeScaleHook */ "./src/render/TimeScaleHook.js");






var TimeScale = /*#__PURE__*/function () {
  function TimeScale(duration, offset, samplesPerPixel, sampleRate) {
    var marginLeft = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
    var colors = arguments.length > 5 ? arguments[5] : undefined;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, TimeScale);

    this.duration = duration;
    this.offset = offset;
    this.samplesPerPixel = samplesPerPixel;
    this.sampleRate = sampleRate;
    this.marginLeft = marginLeft;
    this.colors = colors;
    this.timeinfo = {
      20000: {
        marker: 30000,
        bigStep: 10000,
        smallStep: 5000,
        secondStep: 5
      },
      12000: {
        marker: 15000,
        bigStep: 5000,
        smallStep: 1000,
        secondStep: 1
      },
      10000: {
        marker: 10000,
        bigStep: 5000,
        smallStep: 1000,
        secondStep: 1
      },
      5000: {
        marker: 5000,
        bigStep: 1000,
        smallStep: 500,
        secondStep: 1 / 2
      },
      2500: {
        marker: 2000,
        bigStep: 1000,
        smallStep: 500,
        secondStep: 1 / 2
      },
      1500: {
        marker: 2000,
        bigStep: 1000,
        smallStep: 200,
        secondStep: 1 / 5
      },
      700: {
        marker: 1000,
        bigStep: 500,
        smallStep: 100,
        secondStep: 1 / 10
      }
    };
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(TimeScale, [{
    key: "getScaleInfo",
    value: function getScaleInfo(resolution) {
      var keys = Object.keys(this.timeinfo).map(function (item) {
        return parseInt(item, 10);
      }); // make sure keys are numerically sorted.

      keys = keys.sort(function (a, b) {
        return a - b;
      });

      for (var i = 0; i < keys.length; i += 1) {
        if (resolution <= keys[i]) {
          return this.timeinfo[keys[i]];
        }
      }

      return this.timeinfo[keys[0]];
    }
    /*
      Return time in format mm:ss
    */

  }, {
    key: "render",
    value: function render() {
      var widthX = (0,_utils_conversions__WEBPACK_IMPORTED_MODULE_3__.secondsToPixels)(this.duration, this.samplesPerPixel, this.sampleRate);
      var pixPerSec = this.sampleRate / this.samplesPerPixel;
      var pixOffset = (0,_utils_conversions__WEBPACK_IMPORTED_MODULE_3__.secondsToPixels)(this.offset, this.samplesPerPixel, this.sampleRate);
      var scaleInfo = this.getScaleInfo(this.samplesPerPixel);
      var canvasInfo = {};
      var timeMarkers = [];
      var end = widthX + pixOffset;
      var counter = 0;

      for (var i = 0; i < end; i += pixPerSec * scaleInfo.secondStep) {
        var pixIndex = Math.floor(i);
        var pix = pixIndex - pixOffset;

        if (pixIndex >= pixOffset) {
          // put a timestamp every 30 seconds.
          if (scaleInfo.marker && counter % scaleInfo.marker === 0) {
            timeMarkers.push(virtual_dom_h__WEBPACK_IMPORTED_MODULE_2___default()('div.time', {
              attributes: {
                style: "position: absolute; left: ".concat(pix, "px;")
              }
            }, [TimeScale.formatTime(counter)]));
            canvasInfo[pix] = 10;
          } else if (scaleInfo.bigStep && counter % scaleInfo.bigStep === 0) {
            canvasInfo[pix] = 5;
          } else if (scaleInfo.smallStep && counter % scaleInfo.smallStep === 0) {
            canvasInfo[pix] = 2;
          }
        }

        counter += 1000 * scaleInfo.secondStep;
      }

      return virtual_dom_h__WEBPACK_IMPORTED_MODULE_2___default()('div.playlist-time-scale', {
        attributes: {
          style: "position: relative; left: 0; right: 0; margin-left: ".concat(this.marginLeft, "px;")
        }
      }, [timeMarkers, virtual_dom_h__WEBPACK_IMPORTED_MODULE_2___default()('canvas', {
        attributes: {
          width: widthX,
          height: 30,
          style: 'position: absolute; left: 0; right: 0; top: 0; bottom: 0;'
        },
        hook: new _render_TimeScaleHook__WEBPACK_IMPORTED_MODULE_4__.default(canvasInfo, this.offset, this.samplesPerPixel, this.duration, this.colors)
      })]);
    }
  }], [{
    key: "formatTime",
    value: function formatTime(milliseconds) {
      var seconds = milliseconds / 1000;
      var s = seconds % 60;
      var m = (seconds - s) / 60;

      if (s < 10) {
        s = "0".concat(s);
      }

      return "".concat(m, ":").concat(s);
    }
  }]);

  return TimeScale;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TimeScale);

/***/ }),

/***/ "./src/Track.js":
/*!**********************!*\
  !*** ./src/Track.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _default)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash_assign__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash.assign */ "./node_modules/lodash.assign/index.js");
/* harmony import */ var lodash_assign__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_assign__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var lodash_forown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash.forown */ "./node_modules/lodash.forown/index.js");
/* harmony import */ var lodash_forown__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash_forown__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v4.js");
/* harmony import */ var lodash_clonedeep__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash.clonedeep */ "./node_modules/lodash.clonedeep/index.js");
/* harmony import */ var lodash_clonedeep__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash_clonedeep__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var virtual_dom_h__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! virtual-dom/h */ "./node_modules/virtual-dom/h.js");
/* harmony import */ var virtual_dom_h__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(virtual_dom_h__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var webaudio_peaks__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! webaudio-peaks */ "./node_modules/webaudio-peaks/index.js");
/* harmony import */ var webaudio_peaks__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(webaudio_peaks__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var fade_maker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! fade-maker */ "./node_modules/fade-maker/index.js");
/* harmony import */ var _utils_conversions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./utils/conversions */ "./src/utils/conversions.js");
/* harmony import */ var _track_states__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./track/states */ "./src/track/states.js");
/* harmony import */ var _render_CanvasHook__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./render/CanvasHook */ "./src/render/CanvasHook.js");
/* harmony import */ var _render_FadeCanvasHook__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./render/FadeCanvasHook */ "./src/render/FadeCanvasHook.js");
/* harmony import */ var _render_VolumeSliderHook__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./render/VolumeSliderHook */ "./src/render/VolumeSliderHook.js");
















var MAX_CANVAS_WIDTH = 1000;

var _default = /*#__PURE__*/function () {
  function _default() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, _default);

    this.name = 'Untitled';
    this.id = 'i' + (0,uuid__WEBPACK_IMPORTED_MODULE_15__.default)(); // must start with a letter to be a valid css id

    this.taggedName = this.name;
    this.customClass = undefined;
    this.waveOutlineColor = undefined;
    this.gain = 1;
    this.fades = {};
    this.peakData = {
      type: 'WebAudio',
      mono: false
    };
    this.cueIn = 0;
    this.cueOut = 0;
    this.duration = 0;
    this.startTime = 0;
    this.endTime = 0;
    this.stereoPan = 0;
    this.src = undefined;
    this.duplicationNumber = 0;
    this.srcTrack = undefined;
    this.scale = window.devicePixelRatio;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(_default, [{
    key: "setSrc",
    value: function setSrc(src) {
      this.src = src;
    }
  }, {
    key: "setSrcTrack",
    value: function setSrcTrack(track) {
      if (this.srcTrack === undefined) {
        this.srcTrack = track;
      }
    }
  }, {
    key: "setTaggedName",
    value: function setTaggedName() {
      if (this.duplicationNumber !== undefined && this.duplicationNumber !== 0) {
        this.taggedName = this.name + '#' + this.duplicationNumber;
      } else {
        this.taggedName = this.name;
      }
    }
  }, {
    key: "setEventEmitter",
    value: function setEventEmitter(ee) {
      this.ee = ee;
    }
  }, {
    key: "setName",
    value: function setName(name) {
      this.name = name;
      this.setTaggedName();
    }
  }, {
    key: "setCustomClass",
    value: function setCustomClass(className) {
      this.customClass = className;
    }
  }, {
    key: "setWaveOutlineColor",
    value: function setWaveOutlineColor(color) {
      this.waveOutlineColor = color;
    }
  }, {
    key: "setCues",
    value: function setCues(cueIn, cueOut) {
      if (cueOut < cueIn) {
        throw new Error('cue out cannot be less than cue in');
      }

      this.cueIn = cueIn;
      this.cueOut = cueOut;
      this.duration = this.cueOut - this.cueIn;
      this.endTime = this.startTime + this.duration;
    }
    /*
    *   start, end in seconds relative to the entire playlist.
    */

  }, {
    key: "trim",
    value: function () {
      var _trim = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(start, end) {
        var trackStart, trackEnd, offset, self, middleTrack, endTrack, trackOffset, cueIn, cueOut, peaks, undo;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                trackStart = this.getStartTime();
                trackEnd = this.getEndTime();
                offset = this.cueIn - trackStart;
                self = this;
                middleTrack = null;
                endTrack = null;
                trackOffset = 0;

                if (!(trackStart <= start && trackEnd >= start || trackStart <= end && trackEnd >= end)) {
                  _context.next = 24;
                  break;
                }

                cueIn = trackStart;
                cueOut = start < trackStart ? end : start;
                this.setCues(cueIn + offset, cueOut + offset);

                if (start > trackStart) {
                  this.setStartTime(trackStart);
                }

                if (!(start > trackStart)) {
                  _context.next = 18;
                  break;
                }

                cueIn = start < trackStart ? trackStart : start;
                cueOut = end > trackEnd ? trackEnd : end;
                _context.next = 17;
                return this.duplicateTrack(this, start, cueIn + offset, cueOut + offset, ++trackOffset);

              case 17:
                middleTrack = _context.sent;

              case 18:
                if (!(end < trackEnd)) {
                  _context.next = 24;
                  break;
                }

                cueIn = end;
                cueOut = trackEnd;
                _context.next = 23;
                return this.duplicateTrack(this, end, cueIn + offset, cueOut + offset, ++trackOffset);

              case 23:
                endTrack = _context.sent;

              case 24:
                peaks = lodash_clonedeep__WEBPACK_IMPORTED_MODULE_6___default()(this.peaks);

                undo = function undo() {
                  // todo replace with playlist.load and remove peaks
                  self.setCues(trackStart, trackEnd);
                  self.setPeaks(peaks);
                  playlist.removeTrack(middleTrack);
                  playlist.removeTrack(endTrack);
                  playlist.setTimeSelection(0, 0);
                  playlist.adjustDuration();
                  playlist.draw(playlist.render());
                };

                return _context.abrupt("return", undo);

              case 27:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function trim(_x, _x2) {
        return _trim.apply(this, arguments);
      }

      return trim;
    }()
  }, {
    key: "duplicateTrack",
    value: function () {
      var _duplicateTrack = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2(track, start, cueIn, cueOut, trackOffset) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                playlist.setActiveTrack(track); // it duplicates the current active track

                _context2.next = 3;
                return playlist.load([{
                  track: track,
                  src: track.src,
                  name: track.name,
                  start: start,
                  states: track.states,
                  cueIn: cueIn,
                  cueOut: cueOut,
                  gain: track.gain,
                  muted: track.muted,
                  soloed: track.soloed,
                  selection: track.selection,
                  peaks: track.peaks,
                  customClass: track.customClass,
                  waveOutlineColor: track.waveOutlineColor,
                  stereoPan: track.stereoPan,
                  duplicationNumber: track.duplicationNumber,
                  trackOffset: trackOffset
                }]);

              case 3:
                return _context2.abrupt("return", _context2.sent[0]);

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function duplicateTrack(_x3, _x4, _x5, _x6, _x7) {
        return _duplicateTrack.apply(this, arguments);
      }

      return duplicateTrack;
    }()
  }, {
    key: "setStartTime",
    value: function setStartTime(start) {
      this.startTime = start;
      this.endTime = start + this.duration;
    }
  }, {
    key: "setPlayout",
    value: function setPlayout(playout) {
      this.playout = playout;
    }
  }, {
    key: "setOfflinePlayout",
    value: function setOfflinePlayout(playout) {
      this.offlinePlayout = playout;
    }
  }, {
    key: "setEnabledStates",
    value: function setEnabledStates() {
      var enabledStates = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var defaultStatesEnabled = {
        cursor: true,
        fadein: true,
        fadeout: true,
        select: true,
        shift: true
      };
      this.enabledStates = lodash_assign__WEBPACK_IMPORTED_MODULE_4___default()({}, defaultStatesEnabled, enabledStates);
    }
  }, {
    key: "setFadeIn",
    value: function setFadeIn(duration) {
      var shape = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'logarithmic';

      if (duration > this.duration) {
        throw new Error('Invalid Fade In');
      }

      var fade = {
        shape: shape,
        start: 0,
        end: duration
      };

      if (this.fadeIn) {
        this.removeFade(this.fadeIn);
        this.fadeIn = undefined;
      }

      this.fadeIn = this.saveFade(fade_maker__WEBPACK_IMPORTED_MODULE_9__.FADEIN, fade.shape, fade.start, fade.end);
    }
  }, {
    key: "setFadeOut",
    value: function setFadeOut(duration) {
      var shape = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'logarithmic';

      if (duration > this.duration) {
        throw new Error('Invalid Fade Out');
      }

      var fade = {
        shape: shape,
        start: this.duration - duration,
        end: this.duration
      };

      if (this.fadeOut) {
        this.removeFade(this.fadeOut);
        this.fadeOut = undefined;
      }

      this.fadeOut = this.saveFade(fade_maker__WEBPACK_IMPORTED_MODULE_9__.FADEOUT, fade.shape, fade.start, fade.end);
    }
  }, {
    key: "saveFade",
    value: function saveFade(type, shape, start, end) {
      var id = (0,uuid__WEBPACK_IMPORTED_MODULE_15__.default)();
      this.fades[id] = {
        type: type,
        shape: shape,
        start: start,
        end: end
      };
      return id;
    }
  }, {
    key: "removeFade",
    value: function removeFade(id) {
      delete this.fades[id];
    }
  }, {
    key: "setBuffer",
    value: function setBuffer(buffer) {
      this.buffer = buffer;
    }
  }, {
    key: "setPeakData",
    value: function setPeakData(data) {
      this.peakData = data;
    }
  }, {
    key: "calculatePeaks",
    value: function calculatePeaks(samplesPerPixel, sampleRate) {
      var cueIn = (0,_utils_conversions__WEBPACK_IMPORTED_MODULE_10__.secondsToSamples)(this.cueIn, sampleRate);
      var cueOut = (0,_utils_conversions__WEBPACK_IMPORTED_MODULE_10__.secondsToSamples)(this.cueOut, sampleRate);
      this.setPeaks(webaudio_peaks__WEBPACK_IMPORTED_MODULE_8___default()(this.buffer, samplesPerPixel, this.peakData.mono, cueIn, cueOut));
    }
  }, {
    key: "setPeaks",
    value: function setPeaks(peaks) {
      this.peaks = peaks;
    }
  }, {
    key: "setState",
    value: function setState(state) {
      this.state = state;

      if (this.state && this.enabledStates[this.state]) {
        var StateClass = _track_states__WEBPACK_IMPORTED_MODULE_11__.default[this.state];
        this.stateObj = new StateClass(this);
      } else {
        this.stateObj = undefined;
      }
    }
  }, {
    key: "getStartTime",
    value: function getStartTime() {
      return this.startTime;
    }
  }, {
    key: "getEndTime",
    value: function getEndTime() {
      return this.endTime;
    }
  }, {
    key: "getDuration",
    value: function getDuration() {
      return this.duration;
    }
  }, {
    key: "isPlaying",
    value: function isPlaying() {
      return this.playout.isPlaying();
    }
  }, {
    key: "setShouldPlay",
    value: function setShouldPlay(bool) {
      this.playout.setShouldPlay(bool);
    }
  }, {
    key: "setGainLevel",
    value: function setGainLevel(level) {
      this.gain = level;
      this.playout.setVolumeGainLevel(level);
    }
  }, {
    key: "setMasterGainLevel",
    value: function setMasterGainLevel(level) {
      this.playout.setMasterGainLevel(level);
    }
  }, {
    key: "setStereoPanValue",
    value: function setStereoPanValue(value) {
      this.stereoPan = value;
      this.playout.setStereoPanValue(value);
    }
    /*
      startTime, endTime in seconds (float).
      segment is for a highlighted section in the UI.
        returns a Promise that will resolve when the AudioBufferSource
      is either stopped or plays out naturally.
    */

  }, {
    key: "schedulePlay",
    value: function schedulePlay(now, startTime, endTime, config) {
      var start;
      var duration;
      var when = now;
      var segment = endTime ? endTime - startTime : undefined;
      var defaultOptions = {
        shouldPlay: true,
        masterGain: 1,
        isOffline: false
      };

      var options = lodash_assign__WEBPACK_IMPORTED_MODULE_4___default()({}, defaultOptions, config);

      var playoutSystem = options.isOffline ? this.offlinePlayout : this.playout; // 1) track has no content to play.
      // 2) track does not play in this selection.

      if (this.endTime <= startTime || segment && startTime + segment < this.startTime) {
        // return a resolved promise since this track is technically "stopped".
        return Promise.resolve();
      } // track should have something to play if it gets here.
      // the track starts in the future or on the cursor position


      if (this.startTime >= startTime) {
        start = 0; // schedule additional delay for this audio node.

        when += this.startTime - startTime;

        if (endTime) {
          segment -= this.startTime - startTime;
          duration = Math.min(segment, this.duration);
        } else {
          duration = this.duration;
        }
      } else {
        start = startTime - this.startTime;

        if (endTime) {
          duration = Math.min(segment, this.duration - start);
        } else {
          duration = this.duration - start;
        }
      }

      start += this.cueIn;
      var relPos = startTime - this.startTime;
      var sourcePromise = playoutSystem.setUpSource(); // param relPos: cursor position in seconds relative to this track.
      // can be negative if the cursor is placed before the start of this track etc.

      lodash_forown__WEBPACK_IMPORTED_MODULE_5___default()(this.fades, function (fade) {
        var fadeStart;
        var fadeDuration; // only apply fade if it's ahead of the cursor.

        if (relPos < fade.end) {
          if (relPos <= fade.start) {
            fadeStart = now + (fade.start - relPos);
            fadeDuration = fade.end - fade.start;
          } else if (relPos > fade.start && relPos < fade.end) {
            fadeStart = now - (relPos - fade.start);
            fadeDuration = fade.end - fade.start;
          }

          switch (fade.type) {
            case fade_maker__WEBPACK_IMPORTED_MODULE_9__.FADEIN:
              {
                playoutSystem.applyFadeIn(fadeStart, fadeDuration, fade.shape);
                break;
              }

            case fade_maker__WEBPACK_IMPORTED_MODULE_9__.FADEOUT:
              {
                playoutSystem.applyFadeOut(fadeStart, fadeDuration, fade.shape);
                break;
              }

            default:
              {
                throw new Error('Invalid fade type saved on track.');
              }
          }
        }
      });

      playoutSystem.setVolumeGainLevel(this.gain);
      playoutSystem.setShouldPlay(options.shouldPlay);
      playoutSystem.setMasterGainLevel(options.masterGain);
      playoutSystem.setStereoPanValue(this.stereoPan);
      playoutSystem.play(when, start, duration);
      return sourcePromise;
    }
  }, {
    key: "scheduleStop",
    value: function scheduleStop() {
      var when = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      this.playout.stop(when);
    }
  }, {
    key: "renderOverlay",
    value: function renderOverlay(data) {
      var _this = this;

      var channelPixels = (0,_utils_conversions__WEBPACK_IMPORTED_MODULE_10__.secondsToPixels)(data.playlistLength, data.resolution, data.sampleRate);
      var config = {
        attributes: {
          style: "position: absolute; top: 0; right: 0; bottom: 0; left: 0; width: ".concat(channelPixels, "px; z-index: 9;")
        }
      };
      var overlayClass = '';

      if (this.stateObj) {
        this.stateObj.setup(data.resolution, data.sampleRate);
        var StateClass = _track_states__WEBPACK_IMPORTED_MODULE_11__.default[this.state];
        var events = StateClass.getEvents();
        events.forEach(function (event) {
          config["on".concat(event)] = _this.stateObj[event].bind(_this.stateObj);
        });
        overlayClass = StateClass.getClass();
      } // use this overlay for track event cursor position calculations.


      return virtual_dom_h__WEBPACK_IMPORTED_MODULE_7___default()("div.playlist-overlay".concat(overlayClass), config);
    }
  }, {
    key: "renderControls",
    value: function renderControls(data) {
      var _this2 = this;

      var muteClass = data.muted ? '.active' : '';
      var soloClass = data.soloed ? '.active' : '';
      var numChan = this.peaks.data.length;
      return virtual_dom_h__WEBPACK_IMPORTED_MODULE_7___default()('div.controls', {
        attributes: {
          style: "height: ".concat(numChan * data.height, "px; width: ").concat(data.controls.width, "px; position: absolute; left: 0; z-index: 10;"),
          id: this.id + 'Controls'
        }
      }, [virtual_dom_h__WEBPACK_IMPORTED_MODULE_7___default()('header', [this.taggedName]), virtual_dom_h__WEBPACK_IMPORTED_MODULE_7___default()('div.btn-group', [virtual_dom_h__WEBPACK_IMPORTED_MODULE_7___default()("span.btn.btn-default.i.fa.fa-volume-off", {
        onclick: function onclick() {
          _this2.ee.emit('mute', _this2);
        }
      }), virtual_dom_h__WEBPACK_IMPORTED_MODULE_7___default()("span.btn.btn-default.i.fa.fa-crosshairs", {
        onclick: function onclick() {
          _this2.ee.emit('solo', _this2);
        }
      }), virtual_dom_h__WEBPACK_IMPORTED_MODULE_7___default()("span.btn.btn-default.i.fa.fa-chevron-up", {
        onclick: function onclick() {
          _this2.ee.emit('moveUp', _this2);
        }
      }), virtual_dom_h__WEBPACK_IMPORTED_MODULE_7___default()("span.btn.btn-default.i.fa.fa-chevron-down", {
        onclick: function onclick() {
          _this2.ee.emit('moveDown', _this2);
        }
      }), virtual_dom_h__WEBPACK_IMPORTED_MODULE_7___default()("span.btn.btn-default.i.fa.fa-times", {
        onclick: function onclick() {
          _this2.ee.emit('delete', _this2);
        }
      }), virtual_dom_h__WEBPACK_IMPORTED_MODULE_7___default()("span.btn.btn-default.i.fa.fa-files-o", {
        onclick: function onclick() {
          _this2.ee.emit('duplicate', _this2);
        }
      }), virtual_dom_h__WEBPACK_IMPORTED_MODULE_7___default()("span.btn.btn-default.i.fa.fa-compress}", {
        onclick: function onclick() {
          document.querySelector("#" + _this2.id + 'Controls').style.display = "none";
          document.querySelector("#" + _this2.id + "Card").style.display = "none";
          document.querySelector("#" + _this2.id + "Header").style.display = "block";
        }
      })]), virtual_dom_h__WEBPACK_IMPORTED_MODULE_7___default()('label', [virtual_dom_h__WEBPACK_IMPORTED_MODULE_7___default()('input.volume-slider', {
        attributes: {
          type: 'range',
          min: 0,
          max: 100,
          value: 100
        },
        hook: new _render_VolumeSliderHook__WEBPACK_IMPORTED_MODULE_14__.default(this.gain),
        oninput: function oninput(e) {
          _this2.ee.emit('volumechange', e.target.value, _this2);
        }
      })])]);
    }
  }, {
    key: "render",
    value: function render(data) {
      var _this3 = this;

      var width = this.peaks.length;
      var playbackX = (0,_utils_conversions__WEBPACK_IMPORTED_MODULE_10__.secondsToPixels)(data.playbackSeconds, data.resolution, data.sampleRate);
      var startX = (0,_utils_conversions__WEBPACK_IMPORTED_MODULE_10__.secondsToPixels)(this.startTime, data.resolution, data.sampleRate);
      var endX = (0,_utils_conversions__WEBPACK_IMPORTED_MODULE_10__.secondsToPixels)(this.endTime, data.resolution, data.sampleRate);
      var progressWidth = 0;
      var numChan = this.peaks.data.length;
      var oldScale = this.scale;
      this.scale = window.devicePixelRatio;

      if (playbackX > 0 && playbackX > startX) {
        if (playbackX < endX) {
          progressWidth = playbackX - startX;
        } else {
          progressWidth = width;
        }
      }

      var waveformChildren = [virtual_dom_h__WEBPACK_IMPORTED_MODULE_7___default()('div.cursor', {
        attributes: {
          style: "position: absolute; width: 1px; margin: 0; padding: 0; top: 0; left: ".concat(playbackX, "px; bottom: 0; z-index: 5;")
        }
      })];
      var channels = Object.keys(this.peaks.data).map(function (channelNum) {
        var channelChildren = [virtual_dom_h__WEBPACK_IMPORTED_MODULE_7___default()('div.channel-progress', {
          attributes: {
            style: "position: absolute; width: ".concat(progressWidth, "px; height: ").concat(data.height, "px; z-index: 2;")
          }
        })];
        var offset = 0;
        var totalWidth = width;
        var peaks = _this3.peaks.data[channelNum];

        while (totalWidth > 0) {
          var currentWidth = Math.min(totalWidth, MAX_CANVAS_WIDTH);
          var canvasColor = _this3.waveOutlineColor ? _this3.waveOutlineColor : data.colors.waveOutlineColor;
          channelChildren.push(virtual_dom_h__WEBPACK_IMPORTED_MODULE_7___default()('canvas', {
            attributes: {
              width: currentWidth * _this3.scale,
              height: data.height * _this3.scale,
              style: "float: left; position: relative; margin: 0; padding: 0; z-index: 3; width: ".concat(currentWidth, "px; height: ").concat(data.height, "px;")
            },
            hook: new _render_CanvasHook__WEBPACK_IMPORTED_MODULE_12__.default(peaks, offset, _this3.peaks.bits, canvasColor, _this3.scale, _this3.scale !== oldScale)
          }));
          totalWidth -= currentWidth;
          offset += MAX_CANVAS_WIDTH;
        } // if there are fades, display them.


        if (_this3.fadeIn) {
          var fadeIn = _this3.fades[_this3.fadeIn];
          var fadeWidth = (0,_utils_conversions__WEBPACK_IMPORTED_MODULE_10__.secondsToPixels)(fadeIn.end - fadeIn.start, data.resolution, data.sampleRate);
          channelChildren.push(virtual_dom_h__WEBPACK_IMPORTED_MODULE_7___default()('div.wp-fade.wp-fadein', {
            attributes: {
              style: "position: absolute; height: ".concat(data.height, "px; width: ").concat(fadeWidth, "px; top: 0; left: 0; z-index: 4;")
            }
          }, [virtual_dom_h__WEBPACK_IMPORTED_MODULE_7___default()('canvas', {
            attributes: {
              width: fadeWidth,
              height: data.height
            },
            hook: new _render_FadeCanvasHook__WEBPACK_IMPORTED_MODULE_13__.default(fadeIn.type, fadeIn.shape, fadeIn.end - fadeIn.start, data.resolution)
          })]));
        }

        if (_this3.fadeOut) {
          var fadeOut = _this3.fades[_this3.fadeOut];

          var _fadeWidth = (0,_utils_conversions__WEBPACK_IMPORTED_MODULE_10__.secondsToPixels)(fadeOut.end - fadeOut.start, data.resolution, data.sampleRate);

          channelChildren.push(virtual_dom_h__WEBPACK_IMPORTED_MODULE_7___default()('div.wp-fade.wp-fadeout', {
            attributes: {
              style: "position: absolute; height: ".concat(data.height, "px; width: ").concat(_fadeWidth, "px; top: 0; right: 0; z-index: 4;")
            }
          }, [virtual_dom_h__WEBPACK_IMPORTED_MODULE_7___default()('canvas', {
            attributes: {
              width: _fadeWidth,
              height: data.height
            },
            hook: new _render_FadeCanvasHook__WEBPACK_IMPORTED_MODULE_13__.default(fadeOut.type, fadeOut.shape, fadeOut.end - fadeOut.start, data.resolution)
          })]));
        }

        return virtual_dom_h__WEBPACK_IMPORTED_MODULE_7___default()("div.channel.channel-".concat(channelNum), {
          attributes: {
            style: "height: ".concat(data.height, "px; width: ").concat(width, "px; top: ").concat(channelNum * data.height, "px; left: ").concat(startX, "px; position: absolute; margin: 0; padding: 0; z-index: 1;")
          }
        }, channelChildren);
      });
      waveformChildren.push(channels);
      waveformChildren.push(this.renderOverlay(data)); // draw cursor selection on active track.

      if (data.isActive === true) {
        var cStartX = (0,_utils_conversions__WEBPACK_IMPORTED_MODULE_10__.secondsToPixels)(data.timeSelection.start, data.resolution, data.sampleRate);
        var cEndX = (0,_utils_conversions__WEBPACK_IMPORTED_MODULE_10__.secondsToPixels)(data.timeSelection.end, data.resolution, data.sampleRate);
        var cWidth = cEndX - cStartX + 1;
        var cClassName = cWidth > 1 ? '.segment' : '.point';
        waveformChildren.push(virtual_dom_h__WEBPACK_IMPORTED_MODULE_7___default()("div.selection".concat(cClassName), {
          attributes: {
            style: "position: absolute; width: ".concat(cWidth, "px; bottom: 0; top: 0; left: ").concat(cStartX, "px; z-index: 4;")
          }
        }));
      }

      var waveform = virtual_dom_h__WEBPACK_IMPORTED_MODULE_7___default()('div.waveform', {
        attributes: {
          style: "height: ".concat(numChan * data.height, "px; position: relative;")
        }
      }, waveformChildren);
      var channelChildren = [];
      var channelMargin = 0;

      if (data.controls.show) {
        channelChildren.push(this.renderControls(data));
        channelMargin = data.controls.width;
      }

      channelChildren.push(waveform);
      var audibleClass = data.shouldPlay ? '' : '.silent';
      var customClass = this.customClass === undefined ? '' : ".".concat(this.customClass);
      var full = virtual_dom_h__WEBPACK_IMPORTED_MODULE_7___default()("div.channel-wrapper".concat(audibleClass).concat(customClass), {
        attributes: {
          style: "margin-left: ".concat(channelMargin, "px; height: ").concat(data.height * numChan, "px;"),
          id: this.id + 'Card'
        }
      }, channelChildren);
      var collapseButton = virtual_dom_h__WEBPACK_IMPORTED_MODULE_7___default()("span.btn.btn-default.i.fa.fa-expand}", {
        onclick: function onclick() {
          document.querySelector("#" + _this3.id + 'Controls').style.display = "block";
          document.querySelector("#" + _this3.id + "Card").style.display = "block";
          document.querySelector("#" + _this3.id + "Header").style.display = "none";
        }
      });
      var collapse = virtual_dom_h__WEBPACK_IMPORTED_MODULE_7___default()("div.controls", {
        attributes: {
          style: "display: none; text-align: left;",
          id: this.id + 'Header'
        }
      }, [virtual_dom_h__WEBPACK_IMPORTED_MODULE_7___default()('header', [this.taggedName, collapseButton])]);
      return virtual_dom_h__WEBPACK_IMPORTED_MODULE_7___default()('', [collapse, full]);
    }
  }, {
    key: "getTrackDetails",
    value: function getTrackDetails() {
      var info = {
        src: this.src,
        start: this.startTime,
        end: this.endTime,
        name: this.name,
        customClass: this.customClass,
        cueIn: this.cueIn,
        cueOut: this.cueOut
      };

      if (this.fadeIn) {
        var fadeIn = this.fades[this.fadeIn];
        info.fadeIn = {
          shape: fadeIn.shape,
          duration: fadeIn.end - fadeIn.start
        };
      }

      if (this.fadeOut) {
        var fadeOut = this.fades[this.fadeOut];
        info.fadeOut = {
          shape: fadeOut.shape,
          duration: fadeOut.end - fadeOut.start
        };
      }

      return info;
    }
  }, {
    key: "setDuplicationNumber",
    value: function setDuplicationNumber(duplicationNumber) {
      if (duplicationNumber === undefined) {
        duplicationNumber = 0;
      }

      if (this.srcTrack !== undefined) {
        this.srcTrack.setDuplicationNumber(duplicationNumber);
      }

      this.duplicationNumber = duplicationNumber;
    }
  }]);

  return _default;
}();



/***/ }),

/***/ "./src/Undoer.js":
/*!***********************!*\
  !*** ./src/Undoer.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Undoer)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);



var Undoer = /*#__PURE__*/function () {
  function Undoer() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Undoer);

    this.events = [];
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Undoer, [{
    key: "push",
    value: function push(event) {
      this.events.push(event);
    }
  }, {
    key: "pop",
    value: function pop() {
      if (this.events.length > 0) {
        this.events.pop()();
      }
    }
  }, {
    key: "clear",
    value: function clear() {
      this.events.clear();
    }
  }]);

  return Undoer;
}();



/***/ }),

/***/ "./src/annotation/AnnotationList.js":
/*!******************************************!*\
  !*** ./src/annotation/AnnotationList.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var virtual_dom_h__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! virtual-dom/h */ "./node_modules/virtual-dom/h.js");
/* harmony import */ var virtual_dom_h__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(virtual_dom_h__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _input_aeneas__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./input/aeneas */ "./src/annotation/input/aeneas.js");
/* harmony import */ var _output_aeneas__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./output/aeneas */ "./src/annotation/output/aeneas.js");
/* harmony import */ var _utils_conversions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/conversions */ "./src/utils/conversions.js");
/* harmony import */ var _interaction_DragInteraction__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../interaction/DragInteraction */ "./src/interaction/DragInteraction.js");
/* harmony import */ var _render_ScrollTopHook__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./render/ScrollTopHook */ "./src/annotation/render/ScrollTopHook.js");
/* harmony import */ var _utils_timeformat__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/timeformat */ "./src/utils/timeformat.js");










var AnnotationList = /*#__PURE__*/function () {
  function AnnotationList(playlist, annotations) {
    var controls = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
    var editable = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
    var linkEndpoints = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
    var isContinuousPlay = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, AnnotationList);

    this.playlist = playlist;
    this.resizeHandlers = [];
    this.editable = editable;
    this.annotations = annotations.map(function (a) {
      return (// TODO support different formats later on.
        (0,_input_aeneas__WEBPACK_IMPORTED_MODULE_3__.default)(a)
      );
    });
    this.setupInteractions();
    this.controls = controls;
    this.setupEE(playlist.ee); // TODO actually make a real plugin system that's not terrible.

    this.playlist.isContinuousPlay = isContinuousPlay;
    this.playlist.linkEndpoints = linkEndpoints;
    this.length = this.annotations.length;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(AnnotationList, [{
    key: "setupInteractions",
    value: function setupInteractions() {
      var _this = this;

      this.annotations.forEach(function (a, i) {
        var leftShift = new _interaction_DragInteraction__WEBPACK_IMPORTED_MODULE_6__.default(_this.playlist, {
          direction: 'left',
          index: i
        });
        var rightShift = new _interaction_DragInteraction__WEBPACK_IMPORTED_MODULE_6__.default(_this.playlist, {
          direction: 'right',
          index: i
        });

        _this.resizeHandlers.push(leftShift);

        _this.resizeHandlers.push(rightShift);
      });
    }
  }, {
    key: "setupEE",
    value: function setupEE(ee) {
      var _this2 = this;

      ee.on('dragged', function (deltaTime, data) {
        var annotationIndex = data.index;
        var annotations = _this2.annotations;
        var note = annotations[annotationIndex]; // resizing to the left

        if (data.direction === 'left') {
          var originalVal = note.start;
          note.start += deltaTime;

          if (note.start < 0) {
            note.start = 0;
          }

          if (annotationIndex && annotations[annotationIndex - 1].end > note.start) {
            annotations[annotationIndex - 1].end = note.start;
          }

          if (_this2.playlist.linkEndpoints && annotationIndex && annotations[annotationIndex - 1].end === originalVal) {
            annotations[annotationIndex - 1].end = note.start;
          }
        } else {
          // resizing to the right
          var _originalVal = note.end;
          note.end += deltaTime;

          if (note.end > _this2.playlist.duration) {
            note.end = _this2.playlist.duration;
          }

          if (annotationIndex < annotations.length - 1 && annotations[annotationIndex + 1].start < note.end) {
            annotations[annotationIndex + 1].start = note.end;
          }

          if (_this2.playlist.linkEndpoints && annotationIndex < annotations.length - 1 && annotations[annotationIndex + 1].start === _originalVal) {
            annotations[annotationIndex + 1].start = note.end;
          }
        }

        _this2.playlist.drawRequest();
      });
      ee.on('continuousplay', function (val) {
        _this2.playlist.isContinuousPlay = val;
      });
      ee.on('linkendpoints', function (val) {
        _this2.playlist.linkEndpoints = val;
      });
      ee.on('annotationsrequest', function () {
        _this2["export"]();
      });
      return ee;
    }
  }, {
    key: "export",
    value: function _export() {
      var output = this.annotations.map(function (a) {
        return (0,_output_aeneas__WEBPACK_IMPORTED_MODULE_4__.default)(a);
      });
      var dataStr = "data:text/json;charset=utf-8,".concat(encodeURIComponent(JSON.stringify(output)));
      var a = document.createElement('a');
      document.body.appendChild(a);
      a.href = dataStr;
      a.download = 'annotations.json';
      a.click();
      document.body.removeChild(a);
    }
  }, {
    key: "renderResizeLeft",
    value: function renderResizeLeft(i) {
      var events = _interaction_DragInteraction__WEBPACK_IMPORTED_MODULE_6__.default.getEvents();
      var config = {
        attributes: {
          style: 'position: absolute; height: 30px; width: 10px; top: 0; left: -2px',
          draggable: true
        }
      };
      var handler = this.resizeHandlers[i * 2];
      events.forEach(function (event) {
        config["on".concat(event)] = handler[event].bind(handler);
      });
      return virtual_dom_h__WEBPACK_IMPORTED_MODULE_2___default()('div.resize-handle.resize-w', config);
    }
  }, {
    key: "renderResizeRight",
    value: function renderResizeRight(i) {
      var events = _interaction_DragInteraction__WEBPACK_IMPORTED_MODULE_6__.default.getEvents();
      var config = {
        attributes: {
          style: 'position: absolute; height: 30px; width: 10px; top: 0; right: -2px',
          draggable: true
        }
      };
      var handler = this.resizeHandlers[i * 2 + 1];
      events.forEach(function (event) {
        config["on".concat(event)] = handler[event].bind(handler);
      });
      return virtual_dom_h__WEBPACK_IMPORTED_MODULE_2___default()('div.resize-handle.resize-e', config);
    }
  }, {
    key: "renderControls",
    value: function renderControls(note, i) {
      var _this3 = this;

      // seems to be a bug with references, or I'm missing something.
      var that = this;
      return this.controls.map(function (ctrl) {
        return virtual_dom_h__WEBPACK_IMPORTED_MODULE_2___default()("i.".concat(ctrl["class"]), {
          attributes: {
            title: ctrl.title
          },
          onclick: function onclick() {
            ctrl.action(note, i, that.annotations, {
              linkEndpoints: that.playlist.linkEndpoints
            });

            _this3.setupInteractions();

            that.playlist.drawRequest();
          }
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      var boxes = virtual_dom_h__WEBPACK_IMPORTED_MODULE_2___default()('div.annotations-boxes', {
        attributes: {
          style: 'height: 30px;'
        }
      }, this.annotations.map(function (note, i) {
        var samplesPerPixel = _this4.playlist.samplesPerPixel;
        var sampleRate = _this4.playlist.sampleRate;
        var pixPerSec = sampleRate / samplesPerPixel;
        var pixOffset = (0,_utils_conversions__WEBPACK_IMPORTED_MODULE_5__.secondsToPixels)(_this4.playlist.scrollLeft, samplesPerPixel, sampleRate);
        var left = Math.floor(note.start * pixPerSec - pixOffset);
        var width = Math.ceil(note.end * pixPerSec - note.start * pixPerSec);
        return virtual_dom_h__WEBPACK_IMPORTED_MODULE_2___default()('div.annotation-box', {
          attributes: {
            style: "position: absolute; height: 30px; width: ".concat(width, "px; left: ").concat(left, "px"),
            'data-id': note.id
          }
        }, [_this4.renderResizeLeft(i), virtual_dom_h__WEBPACK_IMPORTED_MODULE_2___default()('span.id', {
          onclick: function onclick() {
            if (_this4.playlist.isContinuousPlay) {
              _this4.playlist.ee.emit('play', _this4.annotations[i].start);
            } else {
              _this4.playlist.ee.emit('play', _this4.annotations[i].start, _this4.annotations[i].end);
            }
          }
        }, [note.id]), _this4.renderResizeRight(i)]);
      }));
      var boxesWrapper = virtual_dom_h__WEBPACK_IMPORTED_MODULE_2___default()('div.annotations-boxes-wrapper', {
        attributes: {
          style: 'overflow: hidden;'
        }
      }, [boxes]);
      var text = virtual_dom_h__WEBPACK_IMPORTED_MODULE_2___default()('div.annotations-text', {
        hook: new _render_ScrollTopHook__WEBPACK_IMPORTED_MODULE_7__.default()
      }, this.annotations.map(function (note, i) {
        var format = (0,_utils_timeformat__WEBPACK_IMPORTED_MODULE_8__.default)(_this4.playlist.durationFormat);
        var start = format(note.start);
        var end = format(note.end);
        var segmentClass = '';

        if (_this4.playlist.isPlaying() && _this4.playlist.playbackSeconds >= note.start && _this4.playlist.playbackSeconds <= note.end) {
          segmentClass = '.current';
        }

        var editableConfig = {
          attributes: {
            contenteditable: true
          },
          oninput: function oninput(e) {
            // needed currently for references
            // eslint-disable-next-line no-param-reassign
            note.lines = [e.target.innerText];
          },
          onkeypress: function onkeypress(e) {
            if (e.which === 13 || e.keyCode === 13) {
              e.target.blur();
              e.preventDefault();
            }
          }
        };
        var linesConfig = _this4.editable ? editableConfig : {};
        return virtual_dom_h__WEBPACK_IMPORTED_MODULE_2___default()("div.annotation".concat(segmentClass), [virtual_dom_h__WEBPACK_IMPORTED_MODULE_2___default()('span.annotation-id', [note.id]), virtual_dom_h__WEBPACK_IMPORTED_MODULE_2___default()('span.annotation-start', [start]), virtual_dom_h__WEBPACK_IMPORTED_MODULE_2___default()('span.annotation-end', [end]), virtual_dom_h__WEBPACK_IMPORTED_MODULE_2___default()('span.annotation-lines', linesConfig, [note.lines]), virtual_dom_h__WEBPACK_IMPORTED_MODULE_2___default()('span.annotation-actions', _this4.renderControls(note, i))]);
      }));
      return virtual_dom_h__WEBPACK_IMPORTED_MODULE_2___default()('div.annotations', [boxesWrapper, text]);
    }
  }]);

  return AnnotationList;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AnnotationList);

/***/ }),

/***/ "./src/annotation/input/aeneas.js":
/*!****************************************!*\
  !*** ./src/annotation/input/aeneas.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v4.js");
/*
{
  "begin": "5.759",
  "end": "9.155",
  "id": "002",
  "language": "en",
  "lines": [
    "I just wanted to hold"
  ]
},
 */

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(aeneas) {
  var annotation = {
    id: aeneas.id || uuid__WEBPACK_IMPORTED_MODULE_0__.default.v4(),
    start: Number(aeneas.begin) || 0,
    end: Number(aeneas.end) || 0,
    lines: aeneas.lines || [''],
    lang: aeneas.language || 'en'
  };
  return annotation;
}

/***/ }),

/***/ "./src/annotation/output/aeneas.js":
/*!*****************************************!*\
  !*** ./src/annotation/output/aeneas.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/*
{
  "begin": "5.759",
  "end": "9.155",
  "id": "002",
  "language": "en",
  "lines": [
    "I just wanted to hold"
  ]
},
 */
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(annotation) {
  return {
    begin: String(annotation.start.toFixed(3)),
    end: String(annotation.end.toFixed(3)),
    id: String(annotation.id),
    language: annotation.lang,
    lines: annotation.lines
  };
}

/***/ }),

/***/ "./src/annotation/render/ScrollTopHook.js":
/*!************************************************!*\
  !*** ./src/annotation/render/ScrollTopHook.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/*
* virtual-dom hook for scrolling to the text annotation.
*/
var Hook = function ScrollTopHook() {};

Hook.prototype.hook = function hook(node) {
  var el = node.querySelector('.current');

  if (el) {
    var box = node.getBoundingClientRect();
    var row = el.getBoundingClientRect();
    var diff = row.top - box.top;
    var list = node;
    list.scrollTop += diff;
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Hook);

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "init": () => (/* binding */ init),
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash.assign */ "./node_modules/lodash.assign/index.js");
/* harmony import */ var lodash_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var virtual_dom_create_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! virtual-dom/create-element */ "./node_modules/virtual-dom/create-element.js");
/* harmony import */ var virtual_dom_create_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(virtual_dom_create_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var event_emitter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! event-emitter */ "./node_modules/event-emitter/index.js");
/* harmony import */ var event_emitter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(event_emitter__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Playlist__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Playlist */ "./src/Playlist.js");
/* harmony import */ var regenerator_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! regenerator-runtime/runtime.js */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime__WEBPACK_IMPORTED_MODULE_4__);






function init() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var ee = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : event_emitter__WEBPACK_IMPORTED_MODULE_2___default()();

  if (options.container === undefined) {
    throw new Error('DOM element container must be given.');
  }

  window.OfflineAudioContext = window.OfflineAudioContext || window.webkitOfflineAudioContext;
  window.AudioContext = window.AudioContext || window.webkitAudioContext;
  var audioContext = new window.AudioContext();
  var defaults = {
    ac: audioContext,
    sampleRate: audioContext.sampleRate,
    samplesPerPixel: 4096,
    mono: true,
    fadeType: 'logarithmic',
    exclSolo: false,
    timescale: false,
    controls: {
      show: false,
      width: 150
    },
    colors: {
      waveOutlineColor: 'white',
      timeColor: 'grey',
      fadeColor: 'black'
    },
    seekStyle: 'line',
    waveHeight: 128,
    state: 'cursor',
    zoomLevels: [512, 1024, 2048, 4096],
    annotationList: {
      annotations: [],
      controls: [],
      editable: false,
      linkEndpoints: false,
      isContinuousPlay: false
    },
    isAutomaticScroll: false
  };

  var config = lodash_assign__WEBPACK_IMPORTED_MODULE_0___default()(defaults, options);

  var zoomIndex = config.zoomLevels.indexOf(config.samplesPerPixel);

  if (zoomIndex === -1) {
    throw new Error('initial samplesPerPixel must be included in array zoomLevels');
  }

  var playlist = new _Playlist__WEBPACK_IMPORTED_MODULE_3__.default();
  playlist.setSampleRate(config.sampleRate);
  playlist.setSamplesPerPixel(config.samplesPerPixel);
  playlist.setAudioContext(config.ac);
  playlist.setEventEmitter(ee);
  playlist.setUpEventEmitter();
  playlist.setTimeSelection(0, 0);
  playlist.setState(config.state);
  playlist.setControlOptions(config.controls);
  playlist.setWaveHeight(config.waveHeight);
  playlist.setColors(config.colors);
  playlist.setZoomLevels(config.zoomLevels);
  playlist.setZoomIndex(zoomIndex);
  playlist.setMono(config.mono);
  playlist.setExclSolo(config.exclSolo);
  playlist.setShowTimeScale(config.timescale);
  playlist.setSeekStyle(config.seekStyle);
  playlist.setAnnotations(config.annotationList);
  playlist.isAutomaticScroll = config.isAutomaticScroll;
  playlist.isContinuousPlay = config.isContinuousPlay;
  playlist.linkedEndpoints = config.linkedEndpoints; // take care of initial virtual dom rendering.

  var tree = playlist.render();
  var rootNode = virtual_dom_create_element__WEBPACK_IMPORTED_MODULE_1___default()(tree);
  config.container.appendChild(rootNode);
  playlist.tree = tree;
  playlist.rootNode = rootNode;
  return playlist;
}
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var ee = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : event_emitter__WEBPACK_IMPORTED_MODULE_2___default()();
  return init(options, ee);
}

/***/ }),

/***/ "./src/interaction/DragInteraction.js":
/*!********************************************!*\
  !*** ./src/interaction/DragInteraction.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _default)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_conversions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/conversions */ "./src/utils/conversions.js");




var _default = /*#__PURE__*/function () {
  function _default(playlist) {
    var _this = this;

    var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, _default);

    this.playlist = playlist;
    this.data = data;
    this.active = false;

    this.ondragover = function (e) {
      if (_this.active) {
        e.preventDefault();

        _this.emitDrag(e.clientX);
      }
    };
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(_default, [{
    key: "emitDrag",
    value: function emitDrag(x) {
      var deltaX = x - this.prevX; // emit shift event if not 0

      if (deltaX) {
        var deltaTime = (0,_utils_conversions__WEBPACK_IMPORTED_MODULE_2__.pixelsToSeconds)(deltaX, this.playlist.samplesPerPixel, this.playlist.sampleRate);
        this.prevX = x;
        this.playlist.ee.emit('dragged', deltaTime, this.data);
      }
    }
  }, {
    key: "complete",
    value: function complete() {
      this.active = false;
      document.removeEventListener('dragover', this.ondragover);
    }
  }, {
    key: "dragstart",
    value: function dragstart(e) {
      var ev = e;
      this.active = true;
      this.prevX = e.clientX;
      ev.dataTransfer.dropEffect = 'move';
      ev.dataTransfer.effectAllowed = 'move';
      ev.dataTransfer.setData('text/plain', '');
      document.addEventListener('dragover', this.ondragover);
    }
  }, {
    key: "dragend",
    value: function dragend(e) {
      if (this.active) {
        e.preventDefault();
        this.complete();
      }
    }
  }], [{
    key: "getClass",
    value: function getClass() {
      return '.shift';
    }
  }, {
    key: "getEvents",
    value: function getEvents() {
      return ['dragstart', 'dragend'];
    }
  }]);

  return _default;
}();



/***/ }),

/***/ "./src/render/CanvasHook.js":
/*!**********************************!*\
  !*** ./src/render/CanvasHook.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);



/*
* virtual-dom hook for drawing to the canvas element.
*/
var CanvasHook = /*#__PURE__*/function () {
  function CanvasHook(peaks, offset, bits, color, scale, forceDraw) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, CanvasHook);

    this.peaks = peaks; // http://stackoverflow.com/questions/6081483/maximum-size-of-a-canvas-element

    this.offset = offset;
    this.color = color;
    this.bits = bits;
    this.scale = scale;
    this.forceDraw = forceDraw;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(CanvasHook, [{
    key: "hook",
    value: function hook(canvas, prop, prev) {
      // canvas is up to date
      if (!this.forceDraw && prev !== undefined && prev.peaks === this.peaks) {
        return;
      }

      if (this.forceDraw) {
        this.forceDraw = false;
      }

      var scale = this.scale;
      var len = canvas.width / scale;
      var cc = canvas.getContext('2d');
      var h2 = canvas.height / scale / 2;
      var maxValue = Math.pow(2, this.bits - 1);
      cc.clearRect(0, 0, canvas.width, canvas.height);
      cc.fillStyle = this.color;
      cc.scale(scale, scale);

      for (var i = 0; i < len; i += 1) {
        var minPeak = this.peaks[(i + this.offset) * 2] / maxValue;
        var maxPeak = this.peaks[(i + this.offset) * 2 + 1] / maxValue;
        CanvasHook.drawFrame(cc, h2, i, minPeak, maxPeak);
      }
    }
  }], [{
    key: "drawFrame",
    value: function drawFrame(cc, h2, x, minPeak, maxPeak) {
      var min = Math.abs(minPeak * h2);
      var max = Math.abs(maxPeak * h2); // draw max

      cc.fillRect(x, 0, 1, h2 - max); // draw min

      cc.fillRect(x, h2 + min, 1, h2 - min);
    }
  }]);

  return CanvasHook;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CanvasHook);

/***/ }),

/***/ "./src/render/FadeCanvasHook.js":
/*!**************************************!*\
  !*** ./src/render/FadeCanvasHook.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var fade_maker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! fade-maker */ "./node_modules/fade-maker/index.js");
/* harmony import */ var fade_curves__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! fade-curves */ "./node_modules/fade-curves/index.js");




/*
* virtual-dom hook for drawing the fade curve to the canvas element.
*/

var FadeCanvasHook = /*#__PURE__*/function () {
  function FadeCanvasHook(type, shape, duration, samplesPerPixel) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, FadeCanvasHook);

    this.type = type;
    this.shape = shape;
    this.duration = duration;
    this.samplesPerPixel = samplesPerPixel;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(FadeCanvasHook, [{
    key: "hook",
    value: function hook(canvas, prop, prev) {
      // node is up to date.
      if (prev !== undefined && prev.shape === this.shape && prev.type === this.type && prev.duration === this.duration && prev.samplesPerPixel === this.samplesPerPixel) {
        return;
      }

      var ctx = canvas.getContext('2d');
      var width = canvas.width;
      var height = canvas.height;
      var curve = FadeCanvasHook.createCurve(this.shape, this.type, width);
      var len = curve.length;
      var y = height - curve[0] * height;
      ctx.strokeStyle = 'black';
      ctx.beginPath();
      ctx.moveTo(0, y);

      for (var i = 1; i < len; i += 1) {
        y = height - curve[i] * height;
        ctx.lineTo(i, y);
      }

      ctx.stroke();
    }
  }], [{
    key: "createCurve",
    value: function createCurve(shape, type, width) {
      var reflection;
      var curve;

      switch (type) {
        case fade_maker__WEBPACK_IMPORTED_MODULE_2__.FADEIN:
          {
            reflection = 1;
            break;
          }

        case fade_maker__WEBPACK_IMPORTED_MODULE_2__.FADEOUT:
          {
            reflection = -1;
            break;
          }

        default:
          {
            throw new Error('Unsupported fade type.');
          }
      }

      switch (shape) {
        case fade_maker__WEBPACK_IMPORTED_MODULE_2__.SCURVE:
          {
            curve = (0,fade_curves__WEBPACK_IMPORTED_MODULE_3__.sCurve)(width, reflection);
            break;
          }

        case fade_maker__WEBPACK_IMPORTED_MODULE_2__.LINEAR:
          {
            curve = (0,fade_curves__WEBPACK_IMPORTED_MODULE_3__.linear)(width, reflection);
            break;
          }

        case fade_maker__WEBPACK_IMPORTED_MODULE_2__.EXPONENTIAL:
          {
            curve = (0,fade_curves__WEBPACK_IMPORTED_MODULE_3__.exponential)(width, reflection);
            break;
          }

        case fade_maker__WEBPACK_IMPORTED_MODULE_2__.LOGARITHMIC:
          {
            curve = (0,fade_curves__WEBPACK_IMPORTED_MODULE_3__.logarithmic)(width, 10, reflection);
            break;
          }

        default:
          {
            throw new Error('Unsupported fade shape');
          }
      }

      return curve;
    }
  }]);

  return FadeCanvasHook;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FadeCanvasHook);

/***/ }),

/***/ "./src/render/ScrollHook.js":
/*!**********************************!*\
  !*** ./src/render/ScrollHook.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _default)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_conversions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/conversions */ "./src/utils/conversions.js");



/*
 * virtual-dom hook for scrolling the track container.
 */

var _default = /*#__PURE__*/function () {
  function _default(playlist) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, _default);

    this.playlist = playlist;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(_default, [{
    key: "hook",
    value: function hook(node) {
      var playlist = this.playlist;

      if (!playlist.isScrolling) {
        var el = node;

        if (playlist.isAutomaticScroll && node.querySelector('.cursor')) {
          var rect = node.getBoundingClientRect();
          var cursorRect = node.querySelector('.cursor').getBoundingClientRect();

          if (cursorRect.right > rect.right || cursorRect.right < 0) {
            var controlWidth = playlist.controls.show ? playlist.controls.width : 0;
            var width = (0,_utils_conversions__WEBPACK_IMPORTED_MODULE_2__.pixelsToSeconds)(rect.right - rect.left, playlist.samplesPerPixel, playlist.sampleRate);
            playlist.scrollLeft = Math.min(playlist.playbackSeconds, playlist.duration - (width - controlWidth));
          }
        }

        var left = (0,_utils_conversions__WEBPACK_IMPORTED_MODULE_2__.secondsToPixels)(playlist.scrollLeft, playlist.samplesPerPixel, playlist.sampleRate);
        el.scrollLeft = left;
      }
    }
  }]);

  return _default;
}();



/***/ }),

/***/ "./src/render/TimeScaleHook.js":
/*!*************************************!*\
  !*** ./src/render/TimeScaleHook.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _default)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);



/*
* virtual-dom hook for rendering the time scale canvas.
*/
var _default = /*#__PURE__*/function () {
  function _default(tickInfo, offset, samplesPerPixel, duration, colors) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, _default);

    this.tickInfo = tickInfo;
    this.offset = offset;
    this.samplesPerPixel = samplesPerPixel;
    this.duration = duration;
    this.colors = colors;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(_default, [{
    key: "hook",
    value: function hook(canvas, prop, prev) {
      var _this = this;

      // canvas is up to date
      if (prev !== undefined && prev.offset === this.offset && prev.duration === this.duration && prev.samplesPerPixel === this.samplesPerPixel) {
        return;
      }

      var width = canvas.width;
      var height = canvas.height;
      var ctx = canvas.getContext('2d');
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = this.colors.timeColor;
      Object.keys(this.tickInfo).forEach(function (x) {
        var scaleHeight = _this.tickInfo[x];
        var scaleY = height - scaleHeight;
        ctx.fillRect(x, scaleY, 1, scaleHeight);
      });
    }
  }]);

  return _default;
}();



/***/ }),

/***/ "./src/render/VolumeSliderHook.js":
/*!****************************************!*\
  !*** ./src/render/VolumeSliderHook.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _default)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);



/*
* virtual-dom hook for setting the volume input programmatically.
*/
var _default = /*#__PURE__*/function () {
  function _default(gain) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, _default);

    this.gain = gain;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(_default, [{
    key: "hook",
    value: function hook(volumeInput) {
      volumeInput.setAttribute('value', this.gain * 100);
    }
  }]);

  return _default;
}();



/***/ }),

/***/ "./src/track/loader/BlobLoader.js":
/*!****************************************!*\
  !*** ./src/track/loader/BlobLoader.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _default)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/get */ "./node_modules/@babel/runtime/helpers/get.js");
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Loader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Loader */ "./src/track/loader/Loader.js");







function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }



var _default = /*#__PURE__*/function (_Loader) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default()(_default, _Loader);

  var _super = _createSuper(_default);

  function _default() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, _default);

    return _super.apply(this, arguments);
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(_default, [{
    key: "load",

    /*
    * Loads an audio file via a FileReader
    */
    value: function load() {
      var _this = this;

      return new Promise(function (resolve, reject) {
        if (_this.src.type.match(/audio.*/) || // added for problems with Firefox mime types + ogg.
        _this.src.type.match(/video\/ogg/)) {
          var fr = new FileReader();
          fr.readAsArrayBuffer(_this.src);
          fr.addEventListener('progress', function (e) {
            _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(_default.prototype), "fileProgress", _this).call(_this, e);
          });
          fr.addEventListener('load', function (e) {
            var decoderPromise = _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(_default.prototype), "fileLoad", _this).call(_this, e);

            decoderPromise.then(function (audioBuffer) {
              resolve(audioBuffer);
            })["catch"](reject);
          });
          fr.addEventListener('error', reject);
        } else {
          reject(Error("Unsupported file type ".concat(_this.src.type)));
        }
      });
    }
  }]);

  return _default;
}(_Loader__WEBPACK_IMPORTED_MODULE_6__.default);



/***/ }),

/***/ "./src/track/loader/Loader.js":
/*!************************************!*\
  !*** ./src/track/loader/Loader.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "STATE_UNINITIALIZED": () => (/* binding */ STATE_UNINITIALIZED),
/* harmony export */   "STATE_LOADING": () => (/* binding */ STATE_LOADING),
/* harmony export */   "STATE_DECODING": () => (/* binding */ STATE_DECODING),
/* harmony export */   "STATE_FINISHED": () => (/* binding */ STATE_FINISHED),
/* harmony export */   "default": () => (/* binding */ _default)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var event_emitter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! event-emitter */ "./node_modules/event-emitter/index.js");
/* harmony import */ var event_emitter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(event_emitter__WEBPACK_IMPORTED_MODULE_2__);



var STATE_UNINITIALIZED = 0;
var STATE_LOADING = 1;
var STATE_DECODING = 2;
var STATE_FINISHED = 3;

var _default = /*#__PURE__*/function () {
  function _default(src, audioContext) {
    var ee = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : event_emitter__WEBPACK_IMPORTED_MODULE_2___default()();

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, _default);

    this.src = src;
    this.ac = audioContext;
    this.audioRequestState = STATE_UNINITIALIZED;
    this.ee = ee;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(_default, [{
    key: "setStateChange",
    value: function setStateChange(state) {
      this.audioRequestState = state;
      this.ee.emit('audiorequeststatechange', this.audioRequestState, this.src);
    }
  }, {
    key: "fileProgress",
    value: function fileProgress(e) {
      var percentComplete = 0;

      if (this.audioRequestState === STATE_UNINITIALIZED) {
        this.setStateChange(STATE_LOADING);
      }

      if (e.lengthComputable) {
        percentComplete = e.loaded / e.total * 100;
      }

      this.ee.emit('loadprogress', percentComplete, this.src);
    }
  }, {
    key: "fileLoad",
    value: function fileLoad(e) {
      var _this = this;

      var audioData = e.target.response || e.target.result;
      this.setStateChange(STATE_DECODING);
      return new Promise(function (resolve, reject) {
        _this.ac.decodeAudioData(audioData, function (audioBuffer) {
          _this.audioBuffer = audioBuffer;

          _this.setStateChange(STATE_FINISHED);

          resolve(audioBuffer);
        }, function (err) {
          if (err === null) {
            // Safari issues with null error
            reject(Error('MediaDecodeAudioDataUnknownContentType'));
          } else {
            reject(err);
          }
        });
      });
    }
  }]);

  return _default;
}();



/***/ }),

/***/ "./src/track/loader/LoaderFactory.js":
/*!*******************************************!*\
  !*** ./src/track/loader/LoaderFactory.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _default)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _BlobLoader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BlobLoader */ "./src/track/loader/BlobLoader.js");
/* harmony import */ var _XHRLoader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./XHRLoader */ "./src/track/loader/XHRLoader.js");





var _default = /*#__PURE__*/function () {
  function _default() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, _default);
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(_default, null, [{
    key: "createLoader",
    value: function createLoader(src, audioContext, ee) {
      if (src instanceof Blob) {
        return new _BlobLoader__WEBPACK_IMPORTED_MODULE_2__.default(src, audioContext, ee);
      } else if (typeof src === 'string') {
        return new _XHRLoader__WEBPACK_IMPORTED_MODULE_3__.default(src, audioContext, ee);
      }

      throw new Error('Unsupported src type');
    }
  }]);

  return _default;
}();



/***/ }),

/***/ "./src/track/loader/XHRLoader.js":
/*!***************************************!*\
  !*** ./src/track/loader/XHRLoader.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _default)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/get */ "./node_modules/@babel/runtime/helpers/get.js");
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Loader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Loader */ "./src/track/loader/Loader.js");







function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }



var _default = /*#__PURE__*/function (_Loader) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default()(_default, _Loader);

  var _super = _createSuper(_default);

  function _default() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, _default);

    return _super.apply(this, arguments);
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(_default, [{
    key: "load",

    /**
     * Loads an audio file via XHR.
     */
    value: function load() {
      var _this = this;

      return new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', _this.src, true);
        xhr.responseType = 'arraybuffer';
        xhr.send();
        xhr.addEventListener('progress', function (e) {
          _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(_default.prototype), "fileProgress", _this).call(_this, e);
        });
        xhr.addEventListener('load', function (e) {
          var decoderPromise = _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(_default.prototype), "fileLoad", _this).call(_this, e);

          decoderPromise.then(function (audioBuffer) {
            resolve(audioBuffer);
          })["catch"](reject);
        });
        xhr.addEventListener('error', function () {
          reject(Error("Track ".concat(_this.src, " failed to load")));
        });
      });
    }
  }]);

  return _default;
}(_Loader__WEBPACK_IMPORTED_MODULE_6__.default);



/***/ }),

/***/ "./src/track/states.js":
/*!*****************************!*\
  !*** ./src/track/states.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _states_CursorState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./states/CursorState */ "./src/track/states/CursorState.js");
/* harmony import */ var _states_SelectState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./states/SelectState */ "./src/track/states/SelectState.js");
/* harmony import */ var _states_ShiftState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./states/ShiftState */ "./src/track/states/ShiftState.js");
/* harmony import */ var _states_FadeInState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./states/FadeInState */ "./src/track/states/FadeInState.js");
/* harmony import */ var _states_FadeOutState__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./states/FadeOutState */ "./src/track/states/FadeOutState.js");





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  cursor: _states_CursorState__WEBPACK_IMPORTED_MODULE_0__.default,
  select: _states_SelectState__WEBPACK_IMPORTED_MODULE_1__.default,
  shift: _states_ShiftState__WEBPACK_IMPORTED_MODULE_2__.default,
  fadein: _states_FadeInState__WEBPACK_IMPORTED_MODULE_3__.default,
  fadeout: _states_FadeOutState__WEBPACK_IMPORTED_MODULE_4__.default
});

/***/ }),

/***/ "./src/track/states/CursorState.js":
/*!*****************************************!*\
  !*** ./src/track/states/CursorState.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _default)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_conversions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/conversions */ "./src/utils/conversions.js");




var _default = /*#__PURE__*/function () {
  function _default(track) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, _default);

    this.track = track;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(_default, [{
    key: "setup",
    value: function setup(samplesPerPixel, sampleRate) {
      this.samplesPerPixel = samplesPerPixel;
      this.sampleRate = sampleRate;
    }
  }, {
    key: "click",
    value: function click(e) {
      e.preventDefault();
      var startX = e.offsetX;
      var startTime = (0,_utils_conversions__WEBPACK_IMPORTED_MODULE_2__.pixelsToSeconds)(startX, this.samplesPerPixel, this.sampleRate);
      this.track.ee.emit('select', startTime, startTime, this.track);
    }
  }], [{
    key: "getClass",
    value: function getClass() {
      return '.state-cursor';
    }
  }, {
    key: "getEvents",
    value: function getEvents() {
      return ['click'];
    }
  }]);

  return _default;
}();



/***/ }),

/***/ "./src/track/states/FadeInState.js":
/*!*****************************************!*\
  !*** ./src/track/states/FadeInState.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _default)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_conversions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/conversions */ "./src/utils/conversions.js");




var _default = /*#__PURE__*/function () {
  function _default(track) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, _default);

    this.track = track;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(_default, [{
    key: "setup",
    value: function setup(samplesPerPixel, sampleRate) {
      this.samplesPerPixel = samplesPerPixel;
      this.sampleRate = sampleRate;
    }
  }, {
    key: "click",
    value: function click(e) {
      var startX = e.offsetX;
      var time = (0,_utils_conversions__WEBPACK_IMPORTED_MODULE_2__.pixelsToSeconds)(startX, this.samplesPerPixel, this.sampleRate);

      if (time > this.track.getStartTime() && time < this.track.getEndTime()) {
        this.track.ee.emit('fadein', time - this.track.getStartTime(), this.track);
      }
    }
  }], [{
    key: "getClass",
    value: function getClass() {
      return '.state-fadein';
    }
  }, {
    key: "getEvents",
    value: function getEvents() {
      return ['click'];
    }
  }]);

  return _default;
}();



/***/ }),

/***/ "./src/track/states/FadeOutState.js":
/*!******************************************!*\
  !*** ./src/track/states/FadeOutState.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _default)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_conversions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/conversions */ "./src/utils/conversions.js");




var _default = /*#__PURE__*/function () {
  function _default(track) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, _default);

    this.track = track;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(_default, [{
    key: "setup",
    value: function setup(samplesPerPixel, sampleRate) {
      this.samplesPerPixel = samplesPerPixel;
      this.sampleRate = sampleRate;
    }
  }, {
    key: "click",
    value: function click(e) {
      var startX = e.offsetX;
      var time = (0,_utils_conversions__WEBPACK_IMPORTED_MODULE_2__.pixelsToSeconds)(startX, this.samplesPerPixel, this.sampleRate);

      if (time > this.track.getStartTime() && time < this.track.getEndTime()) {
        this.track.ee.emit('fadeout', this.track.getEndTime() - time, this.track);
      }
    }
  }], [{
    key: "getClass",
    value: function getClass() {
      return '.state-fadeout';
    }
  }, {
    key: "getEvents",
    value: function getEvents() {
      return ['click'];
    }
  }]);

  return _default;
}();



/***/ }),

/***/ "./src/track/states/SelectState.js":
/*!*****************************************!*\
  !*** ./src/track/states/SelectState.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _default)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_conversions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/conversions */ "./src/utils/conversions.js");




var _default = /*#__PURE__*/function () {
  function _default(track) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, _default);

    this.track = track;
    this.active = false;
    this.lastOffsetX = 0;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(_default, [{
    key: "setup",
    value: function setup(samplesPerPixel, sampleRate) {
      this.samplesPerPixel = samplesPerPixel;
      this.sampleRate = sampleRate;
    }
  }, {
    key: "emitSelection",
    value: function emitSelection(x) {
      var minX = Math.min(x, this.startX);
      var maxX = Math.max(x, this.startX);
      var startTime = (0,_utils_conversions__WEBPACK_IMPORTED_MODULE_2__.pixelsToSeconds)(minX, this.samplesPerPixel, this.sampleRate);
      var endTime = (0,_utils_conversions__WEBPACK_IMPORTED_MODULE_2__.pixelsToSeconds)(maxX, this.samplesPerPixel, this.sampleRate);
      this.track.ee.emit('select', startTime, endTime, this.track);
    }
  }, {
    key: "complete",
    value: function complete(x) {
      this.emitSelection(x);
      this.active = false;
    }
  }, {
    key: "mousedown",
    value: function mousedown(e) {
      e.preventDefault();
      this.active = true;
      this.startX = e.offsetX;
      var startTime = (0,_utils_conversions__WEBPACK_IMPORTED_MODULE_2__.pixelsToSeconds)(this.startX, this.samplesPerPixel, this.sampleRate);
      this.track.ee.emit('select', startTime, startTime, this.track);
    }
  }, {
    key: "mousemove",
    value: function mousemove(e) {
      if (this.active) {
        e.preventDefault();
        this.emitSelection(e.offsetX);
      }
    }
  }, {
    key: "mouseup",
    value: function mouseup(e) {
      if (this.active) {
        e.preventDefault();
        this.complete(e.offsetX);
      }
    }
  }, {
    key: "mouseleave",
    value: function mouseleave(e) {
      if (this.active) {
        e.preventDefault();
        this.complete(e.offsetX);
      }
    }
  }, {
    key: "touchstart",
    value: function touchstart(e) {
      e.preventDefault();
      this.active = true;
      var rect = e.target.getBoundingClientRect();
      var bodyRect = document.body.getBoundingClientRect();
      this.startX = e.targetTouches[0].clientX - (rect.left - bodyRect.left);
      var startTime = (0,_utils_conversions__WEBPACK_IMPORTED_MODULE_2__.pixelsToSeconds)(this.startX, this.samplesPerPixel, this.sampleRate);
      this.track.ee.emit('select', startTime, startTime, this.track);
    }
  }, {
    key: "touchmove",
    value: function touchmove(e) {
      if (this.active) {
        e.preventDefault();
        var rect = e.target.getBoundingClientRect();
        var bodyRect = document.body.getBoundingClientRect();
        this.lastOffsetX = e.targetTouches[0].clientX - (rect.left - bodyRect.left);
        this.emitSelection(this.lastOffsetX);
      }
    }
  }, {
    key: "touchend",
    value: function touchend(e) {
      if (this.active) {
        e.preventDefault();
        var rect = e.target.getBoundingClientRect();
        var bodyRect = document.body.getBoundingClientRect();
        this.lastOffsetX = e.targetTouches[0].clientX - (rect.left - bodyRect.left);
        this.complete(this.lastOffsetX);
      }
    }
  }, {
    key: "touchcancel",
    value: function touchcancel(e) {
      if (this.active) {
        e.preventDefault();
        var rect = e.target.getBoundingClientRect();
        var bodyRect = document.body.getBoundingClientRect();
        this.lastOffsetX = e.targetTouches[0].clientX - (rect.left - bodyRect.left);
        this.complete(this.lastOffsetX);
      }
    }
  }], [{
    key: "getClass",
    value: function getClass() {
      return '.state-select';
    }
  }, {
    key: "getEvents",
    value: function getEvents() {
      return ['mousedown', 'mousemove', 'mouseup', 'mouseleave', 'touchstart', 'touchend', 'touchmove', 'touchcancel'];
    }
  }]);

  return _default;
}();



/***/ }),

/***/ "./src/track/states/ShiftState.js":
/*!****************************************!*\
  !*** ./src/track/states/ShiftState.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _default)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_conversions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/conversions */ "./src/utils/conversions.js");




var _default = /*#__PURE__*/function () {
  function _default(track) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, _default);

    this.track = track;
    this.active = false;
    this.lastOffsetX = 0;
    this.moveBegin = 0;
    this.moveEnd = 0;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(_default, [{
    key: "setup",
    value: function setup(samplesPerPixel, sampleRate) {
      this.samplesPerPixel = samplesPerPixel;
      this.sampleRate = sampleRate;
    }
  }, {
    key: "emitShift",
    value: function emitShift(x) {
      var deltaX = x - this.prevX;
      var deltaTime = (0,_utils_conversions__WEBPACK_IMPORTED_MODULE_2__.pixelsToSeconds)(deltaX, this.samplesPerPixel, this.sampleRate);

      if (this.moveBegin === x) {
        this.track.ee.emit('shiftbegin', deltaTime, this.track);
      }

      if (this.moveEnd === x) {
        var prevX = this.prevX;
        var moveBegin = this.moveBegin;
        var moveEnd = this.moveEnd;
        var self = this;
        var undoDelta = moveEnd - moveBegin;

        var undo = function undo() {
          self.prevX = prevX - undoDelta;
        };

        this.track.ee.emit('shiftend', (0,_utils_conversions__WEBPACK_IMPORTED_MODULE_2__.pixelsToSeconds)(undoDelta, this.samplesPerPixel, this.sampleRate), this.track, undo);
      }

      this.prevX = x;
      this.track.ee.emit('shift', deltaTime, this.track);
    }
  }, {
    key: "begin",
    value: function begin(x) {
      this.moveBegin = x;
      this.moveEnd = 0;
    }
  }, {
    key: "complete",
    value: function complete(x) {
      this.moveEnd = x;
      this.emitShift(x);
      this.active = false;
    }
  }, {
    key: "mousedown",
    value: function mousedown(e) {
      e.preventDefault();
      this.active = true;
      this.el = e.target;
      this.prevX = e.offsetX;
      this.begin(e.offsetX);
    }
  }, {
    key: "mousemove",
    value: function mousemove(e) {
      if (this.active) {
        e.preventDefault();
        this.emitShift(e.offsetX);
      }
    }
  }, {
    key: "mouseup",
    value: function mouseup(e) {
      if (this.active) {
        e.preventDefault();
        this.complete(e.offsetX);
      }
    }
  }, {
    key: "mouseleave",
    value: function mouseleave(e) {
      if (this.active) {
        e.preventDefault();
        this.complete(e.offsetX);
      }
    }
  }, {
    key: "touchstart",
    value: function touchstart(e) {
      e.preventDefault();
      this.active = true;
      this.el = e.target;
      var rect = e.target.getBoundingClientRect();
      var bodyRect = document.body.getBoundingClientRect();
      this.lastOffsetX = e.targetTouches[0].clientX - (rect.left - bodyRect.left);
      this.prevX = this.lastOffsetX;
      this.begin(this.lastOffsetX);
    }
  }, {
    key: "touchmove",
    value: function touchmove(e) {
      if (this.active) {
        e.preventDefault();
        var rect = e.target.getBoundingClientRect();
        var bodyRect = document.body.getBoundingClientRect();
        this.lastOffsetX = e.targetTouches[0].clientX - (rect.left - bodyRect.left);
        this.emitShift(e.targetTouches[0].clientX - (rect.left - bodyRect.left));
      }
    }
  }, {
    key: "touchend",
    value: function touchend(e) {
      if (this.active) {
        e.preventDefault();
        this.complete(this.lastOffsetX);
      }
    }
  }, {
    key: "touchcancel",
    value: function touchcancel(e) {
      if (this.active) {
        e.preventDefault();
        var rect = e.target.getBoundingClientRect();
        var bodyRect = document.body.getBoundingClientRect();
        this.lastOffsetX = e.targetTouches[0].clientX - (rect.left - bodyRect.left);
        this.complete(this.lastOffsetX);
      }
    }
  }], [{
    key: "getClass",
    value: function getClass() {
      return '.state-shift';
    }
  }, {
    key: "getEvents",
    value: function getEvents() {
      return ['mousedown', 'mousemove', 'mouseup', 'mouseleave', 'touchstart', 'touchmove', 'touchend', 'touchcancel'];
    }
  }]);

  return _default;
}();



/***/ }),

/***/ "./src/utils/conversions.js":
/*!**********************************!*\
  !*** ./src/utils/conversions.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "samplesToSeconds": () => (/* binding */ samplesToSeconds),
/* harmony export */   "secondsToSamples": () => (/* binding */ secondsToSamples),
/* harmony export */   "samplesToPixels": () => (/* binding */ samplesToPixels),
/* harmony export */   "pixelsToSamples": () => (/* binding */ pixelsToSamples),
/* harmony export */   "pixelsToSeconds": () => (/* binding */ pixelsToSeconds),
/* harmony export */   "secondsToPixels": () => (/* binding */ secondsToPixels)
/* harmony export */ });
function samplesToSeconds(samples, sampleRate) {
  return samples / sampleRate;
}
function secondsToSamples(seconds, sampleRate) {
  return Math.ceil(seconds * sampleRate);
}
function samplesToPixels(samples, resolution) {
  return Math.floor(samples / resolution);
}
function pixelsToSamples(pixels, resolution) {
  return Math.floor(pixels * resolution);
}
function pixelsToSeconds(pixels, resolution, sampleRate) {
  return pixels * resolution / sampleRate;
}
function secondsToPixels(seconds, resolution, sampleRate) {
  return Math.ceil(seconds * sampleRate / resolution);
}

/***/ }),

/***/ "./src/utils/exportWavWorker.js":
/*!**************************************!*\
  !*** ./src/utils/exportWavWorker.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  var recLength = 0;
  var recBuffersL = [];
  var recBuffersR = [];
  var sampleRate;

  function init(config) {
    sampleRate = config.sampleRate;
  }

  function record(inputBuffer) {
    recBuffersL.push(inputBuffer[0]);
    recBuffersR.push(inputBuffer[1]);
    recLength += inputBuffer[0].length;
  }

  function writeString(view, offset, string) {
    for (var i = 0; i < string.length; i += 1) {
      view.setUint8(offset + i, string.charCodeAt(i));
    }
  }

  function floatTo16BitPCM(output, offset, input) {
    var writeOffset = offset;

    for (var i = 0; i < input.length; i += 1, writeOffset += 2) {
      var s = Math.max(-1, Math.min(1, input[i]));
      output.setInt16(writeOffset, s < 0 ? s * 0x8000 : s * 0x7FFF, true);
    }
  }

  function encodeWAV(samples) {
    var mono = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var buffer = new ArrayBuffer(44 + samples.length * 2);
    var view = new DataView(buffer);
    /* RIFF identifier */

    writeString(view, 0, 'RIFF');
    /* file length */

    view.setUint32(4, 32 + samples.length * 2, true);
    /* RIFF type */

    writeString(view, 8, 'WAVE');
    /* format chunk identifier */

    writeString(view, 12, 'fmt ');
    /* format chunk length */

    view.setUint32(16, 16, true);
    /* sample format (raw) */

    view.setUint16(20, 1, true);
    /* channel count */

    view.setUint16(22, mono ? 1 : 2, true);
    /* sample rate */

    view.setUint32(24, sampleRate, true);
    /* byte rate (sample rate * block align) */

    view.setUint32(28, sampleRate * 4, true);
    /* block align (channel count * bytes per sample) */

    view.setUint16(32, 4, true);
    /* bits per sample */

    view.setUint16(34, 16, true);
    /* data chunk identifier */

    writeString(view, 36, 'data');
    /* data chunk length */

    view.setUint32(40, samples.length * 2, true);
    floatTo16BitPCM(view, 44, samples);
    return view;
  }

  function mergeBuffers(recBuffers, length) {
    var result = new Float32Array(length);
    var offset = 0;

    for (var i = 0; i < recBuffers.length; i += 1) {
      result.set(recBuffers[i], offset);
      offset += recBuffers[i].length;
    }

    return result;
  }

  function interleave(inputL, inputR) {
    var length = inputL.length + inputR.length;
    var result = new Float32Array(length);
    var index = 0;
    var inputIndex = 0;

    while (index < length) {
      result[index += 1] = inputL[inputIndex];
      result[index += 1] = inputR[inputIndex];
      inputIndex += 1;
    }

    return result;
  }

  function exportWAV(type) {
    var bufferL = mergeBuffers(recBuffersL, recLength);
    var bufferR = mergeBuffers(recBuffersR, recLength);
    var interleaved = interleave(bufferL, bufferR);
    var dataview = encodeWAV(interleaved);
    var audioBlob = new Blob([dataview], {
      type: type
    });
    postMessage(audioBlob);
  }

  function clear() {
    recLength = 0;
    recBuffersL = [];
    recBuffersR = [];
  }

  onmessage = function onmessage(e) {
    switch (e.data.command) {
      case 'init':
        {
          init(e.data.config);
          break;
        }

      case 'record':
        {
          record(e.data.buffer);
          break;
        }

      case 'exportWAV':
        {
          exportWAV(e.data.type);
          break;
        }

      case 'clear':
        {
          clear();
          break;
        }

      default:
        {
          throw new Error('Unknown export worker command');
        }
    }
  };
}

/***/ }),

/***/ "./src/utils/timeformat.js":
/*!*********************************!*\
  !*** ./src/utils/timeformat.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(format) {
  function clockFormat(seconds, decimals) {
    var hours = parseInt(seconds / 3600, 10) % 24;
    var minutes = parseInt(seconds / 60, 10) % 60;
    var secs = (seconds % 60).toFixed(decimals);
    var sHours = hours < 10 ? "0".concat(hours) : hours;
    var sMinutes = minutes < 10 ? "0".concat(minutes) : minutes;
    var sSeconds = secs < 10 ? "0".concat(secs) : secs;
    return "".concat(sHours, ":").concat(sMinutes, ":").concat(sSeconds);
  }

  var formats = {
    seconds: function seconds(_seconds) {
      return _seconds.toFixed(0);
    },
    thousandths: function thousandths(seconds) {
      return seconds.toFixed(3);
    },
    'hh:mm:ss': function hhmmss(seconds) {
      return clockFormat(seconds, 0);
    },
    'hh:mm:ss.u': function hhmmssu(seconds) {
      return clockFormat(seconds, 1);
    },
    'hh:mm:ss.uu': function hhmmssuu(seconds) {
      return clockFormat(seconds, 2);
    },
    'hh:mm:ss.uuu': function hhmmssuuu(seconds) {
      return clockFormat(seconds, 3);
    }
  };
  return formats[format];
}

/***/ }),

/***/ "./node_modules/browser-split/index.js":
/*!*********************************************!*\
  !*** ./node_modules/browser-split/index.js ***!
  \*********************************************/
/***/ ((module) => {

/*!
 * Cross-Browser Split 1.1.1
 * Copyright 2007-2012 Steven Levithan <stevenlevithan.com>
 * Available under the MIT License
 * ECMAScript compliant, uniform cross-browser split method
 */

/**
 * Splits a string into an array of strings using a regex or string separator. Matches of the
 * separator are not included in the result array. However, if `separator` is a regex that contains
 * capturing groups, backreferences are spliced into the result each time `separator` is matched.
 * Fixes browser bugs compared to the native `String.prototype.split` and can be used reliably
 * cross-browser.
 * @param {String} str String to split.
 * @param {RegExp|String} separator Regex or string to use for separating the string.
 * @param {Number} [limit] Maximum number of items to include in the result array.
 * @returns {Array} Array of substrings.
 * @example
 *
 * // Basic use
 * split('a b c d', ' ');
 * // -> ['a', 'b', 'c', 'd']
 *
 * // With limit
 * split('a b c d', ' ', 2);
 * // -> ['a', 'b']
 *
 * // Backreferences in result array
 * split('..word1 word2..', /([a-z]+)(\d+)/i);
 * // -> ['..', 'word', '1', ' ', 'word', '2', '..']
 */
module.exports = (function split(undef) {

  var nativeSplit = String.prototype.split,
    compliantExecNpcg = /()??/.exec("")[1] === undef,
    // NPCG: nonparticipating capturing group
    self;

  self = function(str, separator, limit) {
    // If `separator` is not a regex, use `nativeSplit`
    if (Object.prototype.toString.call(separator) !== "[object RegExp]") {
      return nativeSplit.call(str, separator, limit);
    }
    var output = [],
      flags = (separator.ignoreCase ? "i" : "") + (separator.multiline ? "m" : "") + (separator.extended ? "x" : "") + // Proposed for ES6
      (separator.sticky ? "y" : ""),
      // Firefox 3+
      lastLastIndex = 0,
      // Make `global` and avoid `lastIndex` issues by working with a copy
      separator = new RegExp(separator.source, flags + "g"),
      separator2, match, lastIndex, lastLength;
    str += ""; // Type-convert
    if (!compliantExecNpcg) {
      // Doesn't need flags gy, but they don't hurt
      separator2 = new RegExp("^" + separator.source + "$(?!\\s)", flags);
    }
    /* Values for `limit`, per the spec:
     * If undefined: 4294967295 // Math.pow(2, 32) - 1
     * If 0, Infinity, or NaN: 0
     * If positive number: limit = Math.floor(limit); if (limit > 4294967295) limit -= 4294967296;
     * If negative number: 4294967296 - Math.floor(Math.abs(limit))
     * If other: Type-convert, then use the above rules
     */
    limit = limit === undef ? -1 >>> 0 : // Math.pow(2, 32) - 1
    limit >>> 0; // ToUint32(limit)
    while (match = separator.exec(str)) {
      // `separator.lastIndex` is not reliable cross-browser
      lastIndex = match.index + match[0].length;
      if (lastIndex > lastLastIndex) {
        output.push(str.slice(lastLastIndex, match.index));
        // Fix browsers whose `exec` methods don't consistently return `undefined` for
        // nonparticipating capturing groups
        if (!compliantExecNpcg && match.length > 1) {
          match[0].replace(separator2, function() {
            for (var i = 1; i < arguments.length - 2; i++) {
              if (arguments[i] === undef) {
                match[i] = undef;
              }
            }
          });
        }
        if (match.length > 1 && match.index < str.length) {
          Array.prototype.push.apply(output, match.slice(1));
        }
        lastLength = match[0].length;
        lastLastIndex = lastIndex;
        if (output.length >= limit) {
          break;
        }
      }
      if (separator.lastIndex === match.index) {
        separator.lastIndex++; // Avoid an infinite loop
      }
    }
    if (lastLastIndex === str.length) {
      if (lastLength || !separator.test("")) {
        output.push("");
      }
    } else {
      output.push(str.slice(lastLastIndex));
    }
    return output.length > limit ? output.slice(0, limit) : output;
  };

  return self;
})();


/***/ }),

/***/ "./node_modules/d/index.js":
/*!*********************************!*\
  !*** ./node_modules/d/index.js ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var isValue         = __webpack_require__(/*! type/value/is */ "./node_modules/type/value/is.js")
  , isPlainFunction = __webpack_require__(/*! type/plain-function/is */ "./node_modules/type/plain-function/is.js")
  , assign          = __webpack_require__(/*! es5-ext/object/assign */ "./node_modules/es5-ext/object/assign/index.js")
  , normalizeOpts   = __webpack_require__(/*! es5-ext/object/normalize-options */ "./node_modules/es5-ext/object/normalize-options.js")
  , contains        = __webpack_require__(/*! es5-ext/string/#/contains */ "./node_modules/es5-ext/string/\u0000#/contains/index.js");

var d = (module.exports = function (dscr, value/*, options*/) {
	var c, e, w, options, desc;
	if (arguments.length < 2 || typeof dscr !== "string") {
		options = value;
		value = dscr;
		dscr = null;
	} else {
		options = arguments[2];
	}
	if (isValue(dscr)) {
		c = contains.call(dscr, "c");
		e = contains.call(dscr, "e");
		w = contains.call(dscr, "w");
	} else {
		c = w = true;
		e = false;
	}

	desc = { value: value, configurable: c, enumerable: e, writable: w };
	return !options ? desc : assign(normalizeOpts(options), desc);
});

d.gs = function (dscr, get, set/*, options*/) {
	var c, e, options, desc;
	if (typeof dscr !== "string") {
		options = set;
		set = get;
		get = dscr;
		dscr = null;
	} else {
		options = arguments[3];
	}
	if (!isValue(get)) {
		get = undefined;
	} else if (!isPlainFunction(get)) {
		options = get;
		get = set = undefined;
	} else if (!isValue(set)) {
		set = undefined;
	} else if (!isPlainFunction(set)) {
		options = set;
		set = undefined;
	}
	if (isValue(dscr)) {
		c = contains.call(dscr, "c");
		e = contains.call(dscr, "e");
	} else {
		c = true;
		e = false;
	}

	desc = { get: get, set: set, configurable: c, enumerable: e };
	return !options ? desc : assign(normalizeOpts(options), desc);
};


/***/ }),

/***/ "./node_modules/dom-walk/index.js":
/*!****************************************!*\
  !*** ./node_modules/dom-walk/index.js ***!
  \****************************************/
/***/ ((module) => {

var slice = Array.prototype.slice

module.exports = iterativelyWalk

function iterativelyWalk(nodes, cb) {
    if (!('length' in nodes)) {
        nodes = [nodes]
    }
    
    nodes = slice.call(nodes)

    while(nodes.length) {
        var node = nodes.shift(),
            ret = cb(node)

        if (ret) {
            return ret
        }

        if (node.childNodes && node.childNodes.length) {
            nodes = slice.call(node.childNodes).concat(nodes)
        }
    }
}


/***/ }),

/***/ "./node_modules/es5-ext/function/noop.js":
/*!***********************************************!*\
  !*** ./node_modules/es5-ext/function/noop.js ***!
  \***********************************************/
/***/ ((module) => {

"use strict";


// eslint-disable-next-line no-empty-function
module.exports = function () {};


/***/ }),

/***/ "./node_modules/es5-ext/object/assign/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/es5-ext/object/assign/index.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


module.exports = __webpack_require__(/*! ./is-implemented */ "./node_modules/es5-ext/object/assign/is-implemented.js")() ? Object.assign : __webpack_require__(/*! ./shim */ "./node_modules/es5-ext/object/assign/shim.js");


/***/ }),

/***/ "./node_modules/es5-ext/object/assign/is-implemented.js":
/*!**************************************************************!*\
  !*** ./node_modules/es5-ext/object/assign/is-implemented.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function () {
	var assign = Object.assign, obj;
	if (typeof assign !== "function") return false;
	obj = { foo: "raz" };
	assign(obj, { bar: "dwa" }, { trzy: "trzy" });
	return obj.foo + obj.bar + obj.trzy === "razdwatrzy";
};


/***/ }),

/***/ "./node_modules/es5-ext/object/assign/shim.js":
/*!****************************************************!*\
  !*** ./node_modules/es5-ext/object/assign/shim.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var keys  = __webpack_require__(/*! ../keys */ "./node_modules/es5-ext/object/keys/index.js")
  , value = __webpack_require__(/*! ../valid-value */ "./node_modules/es5-ext/object/valid-value.js")
  , max   = Math.max;

module.exports = function (dest, src/*, …srcn*/) {
	var error, i, length = max(arguments.length, 2), assign;
	dest = Object(value(dest));
	assign = function (key) {
		try {
			dest[key] = src[key];
		} catch (e) {
			if (!error) error = e;
		}
	};
	for (i = 1; i < length; ++i) {
		src = arguments[i];
		keys(src).forEach(assign);
	}
	if (error !== undefined) throw error;
	return dest;
};


/***/ }),

/***/ "./node_modules/es5-ext/object/is-value.js":
/*!*************************************************!*\
  !*** ./node_modules/es5-ext/object/is-value.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var _undefined = __webpack_require__(/*! ../function/noop */ "./node_modules/es5-ext/function/noop.js")(); // Support ES3 engines

module.exports = function (val) { return val !== _undefined && val !== null; };


/***/ }),

/***/ "./node_modules/es5-ext/object/keys/index.js":
/*!***************************************************!*\
  !*** ./node_modules/es5-ext/object/keys/index.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


module.exports = __webpack_require__(/*! ./is-implemented */ "./node_modules/es5-ext/object/keys/is-implemented.js")() ? Object.keys : __webpack_require__(/*! ./shim */ "./node_modules/es5-ext/object/keys/shim.js");


/***/ }),

/***/ "./node_modules/es5-ext/object/keys/is-implemented.js":
/*!************************************************************!*\
  !*** ./node_modules/es5-ext/object/keys/is-implemented.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function () {
	try {
		Object.keys("primitive");
		return true;
	} catch (e) {
		return false;
	}
};


/***/ }),

/***/ "./node_modules/es5-ext/object/keys/shim.js":
/*!**************************************************!*\
  !*** ./node_modules/es5-ext/object/keys/shim.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var isValue = __webpack_require__(/*! ../is-value */ "./node_modules/es5-ext/object/is-value.js");

var keys = Object.keys;

module.exports = function (object) { return keys(isValue(object) ? Object(object) : object); };


/***/ }),

/***/ "./node_modules/es5-ext/object/normalize-options.js":
/*!**********************************************************!*\
  !*** ./node_modules/es5-ext/object/normalize-options.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var isValue = __webpack_require__(/*! ./is-value */ "./node_modules/es5-ext/object/is-value.js");

var forEach = Array.prototype.forEach, create = Object.create;

var process = function (src, obj) {
	var key;
	for (key in src) obj[key] = src[key];
};

// eslint-disable-next-line no-unused-vars
module.exports = function (opts1/*, …options*/) {
	var result = create(null);
	forEach.call(arguments, function (options) {
		if (!isValue(options)) return;
		process(Object(options), result);
	});
	return result;
};


/***/ }),

/***/ "./node_modules/es5-ext/object/valid-callable.js":
/*!*******************************************************!*\
  !*** ./node_modules/es5-ext/object/valid-callable.js ***!
  \*******************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (fn) {
	if (typeof fn !== "function") throw new TypeError(fn + " is not a function");
	return fn;
};


/***/ }),

/***/ "./node_modules/es5-ext/object/valid-value.js":
/*!****************************************************!*\
  !*** ./node_modules/es5-ext/object/valid-value.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var isValue = __webpack_require__(/*! ./is-value */ "./node_modules/es5-ext/object/is-value.js");

module.exports = function (value) {
	if (!isValue(value)) throw new TypeError("Cannot use null or undefined");
	return value;
};


/***/ }),

/***/ "./node_modules/es5-ext/string/\u0000#/contains/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/es5-ext/string/ #/contains/index.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


module.exports = __webpack_require__(/*! ./is-implemented */ "./node_modules/es5-ext/string/\u0000#/contains/is-implemented.js")() ? String.prototype.contains : __webpack_require__(/*! ./shim */ "./node_modules/es5-ext/string/\u0000#/contains/shim.js");


/***/ }),

/***/ "./node_modules/es5-ext/string/\u0000#/contains/is-implemented.js":
/*!*******************************************************************!*\
  !*** ./node_modules/es5-ext/string/ #/contains/is-implemented.js ***!
  \*******************************************************************/
/***/ ((module) => {

"use strict";


var str = "razdwatrzy";

module.exports = function () {
	if (typeof str.contains !== "function") return false;
	return str.contains("dwa") === true && str.contains("foo") === false;
};


/***/ }),

/***/ "./node_modules/es5-ext/string/\u0000#/contains/shim.js":
/*!*********************************************************!*\
  !*** ./node_modules/es5-ext/string/ #/contains/shim.js ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";


var indexOf = String.prototype.indexOf;

module.exports = function (searchString/*, position*/) {
	return indexOf.call(this, searchString, arguments[1]) > -1;
};


/***/ }),

/***/ "./node_modules/ev-store/index.js":
/*!****************************************!*\
  !*** ./node_modules/ev-store/index.js ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var OneVersionConstraint = __webpack_require__(/*! individual/one-version */ "./node_modules/individual/one-version.js");

var MY_VERSION = '7';
OneVersionConstraint('ev-store', MY_VERSION);

var hashKey = '__EV_STORE_KEY@' + MY_VERSION;

module.exports = EvStore;

function EvStore(elem) {
    var hash = elem[hashKey];

    if (!hash) {
        hash = elem[hashKey] = {};
    }

    return hash;
}


/***/ }),

/***/ "./node_modules/event-emitter/index.js":
/*!*********************************************!*\
  !*** ./node_modules/event-emitter/index.js ***!
  \*********************************************/
/***/ ((module, exports, __webpack_require__) => {

"use strict";


var d        = __webpack_require__(/*! d */ "./node_modules/d/index.js")
  , callable = __webpack_require__(/*! es5-ext/object/valid-callable */ "./node_modules/es5-ext/object/valid-callable.js")

  , apply = Function.prototype.apply, call = Function.prototype.call
  , create = Object.create, defineProperty = Object.defineProperty
  , defineProperties = Object.defineProperties
  , hasOwnProperty = Object.prototype.hasOwnProperty
  , descriptor = { configurable: true, enumerable: false, writable: true }

  , on, once, off, emit, methods, descriptors, base;

on = function (type, listener) {
	var data;

	callable(listener);

	if (!hasOwnProperty.call(this, '__ee__')) {
		data = descriptor.value = create(null);
		defineProperty(this, '__ee__', descriptor);
		descriptor.value = null;
	} else {
		data = this.__ee__;
	}
	if (!data[type]) data[type] = listener;
	else if (typeof data[type] === 'object') data[type].push(listener);
	else data[type] = [data[type], listener];

	return this;
};

once = function (type, listener) {
	var once, self;

	callable(listener);
	self = this;
	on.call(this, type, once = function () {
		off.call(self, type, once);
		apply.call(listener, this, arguments);
	});

	once.__eeOnceListener__ = listener;
	return this;
};

off = function (type, listener) {
	var data, listeners, candidate, i;

	callable(listener);

	if (!hasOwnProperty.call(this, '__ee__')) return this;
	data = this.__ee__;
	if (!data[type]) return this;
	listeners = data[type];

	if (typeof listeners === 'object') {
		for (i = 0; (candidate = listeners[i]); ++i) {
			if ((candidate === listener) ||
					(candidate.__eeOnceListener__ === listener)) {
				if (listeners.length === 2) data[type] = listeners[i ? 0 : 1];
				else listeners.splice(i, 1);
			}
		}
	} else {
		if ((listeners === listener) ||
				(listeners.__eeOnceListener__ === listener)) {
			delete data[type];
		}
	}

	return this;
};

emit = function (type) {
	var i, l, listener, listeners, args;

	if (!hasOwnProperty.call(this, '__ee__')) return;
	listeners = this.__ee__[type];
	if (!listeners) return;

	if (typeof listeners === 'object') {
		l = arguments.length;
		args = new Array(l - 1);
		for (i = 1; i < l; ++i) args[i - 1] = arguments[i];

		listeners = listeners.slice();
		for (i = 0; (listener = listeners[i]); ++i) {
			apply.call(listener, this, args);
		}
	} else {
		switch (arguments.length) {
		case 1:
			call.call(listeners, this);
			break;
		case 2:
			call.call(listeners, this, arguments[1]);
			break;
		case 3:
			call.call(listeners, this, arguments[1], arguments[2]);
			break;
		default:
			l = arguments.length;
			args = new Array(l - 1);
			for (i = 1; i < l; ++i) {
				args[i - 1] = arguments[i];
			}
			apply.call(listeners, this, args);
		}
	}
};

methods = {
	on: on,
	once: once,
	off: off,
	emit: emit
};

descriptors = {
	on: d(on),
	once: d(once),
	off: d(off),
	emit: d(emit)
};

base = defineProperties({}, descriptors);

module.exports = exports = function (o) {
	return (o == null) ? create(base) : defineProperties(Object(o), descriptors);
};
exports.methods = methods;


/***/ }),

/***/ "./node_modules/fade-curves/index.js":
/*!*******************************************!*\
  !*** ./node_modules/fade-curves/index.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.linear = linear;
exports.exponential = exponential;
exports.sCurve = sCurve;
exports.logarithmic = logarithmic;
function linear(length, rotation) {
    var curve = new Float32Array(length),
        i,
        x,
        scale = length - 1;

    for (i = 0; i < length; i++) {
        x = i / scale;

        if (rotation > 0) {
            curve[i] = x;
        } else {
            curve[i] = 1 - x;
        }
    }

    return curve;
}

function exponential(length, rotation) {
    var curve = new Float32Array(length),
        i,
        x,
        scale = length - 1,
        index;

    for (i = 0; i < length; i++) {
        x = i / scale;
        index = rotation > 0 ? i : length - 1 - i;

        curve[index] = Math.exp(2 * x - 1) / Math.exp(1);
    }

    return curve;
}

//creating a curve to simulate an S-curve with setValueCurveAtTime.
function sCurve(length, rotation) {
    var curve = new Float32Array(length),
        i,
        phase = rotation > 0 ? Math.PI / 2 : -(Math.PI / 2);

    for (i = 0; i < length; ++i) {
        curve[i] = Math.sin(Math.PI * i / length - phase) / 2 + 0.5;
    }
    return curve;
}

//creating a curve to simulate a logarithmic curve with setValueCurveAtTime.
function logarithmic(length, base, rotation) {
    var curve = new Float32Array(length),
        index,
        x = 0,
        i;

    for (i = 0; i < length; i++) {
        //index for the curve array.
        index = rotation > 0 ? i : length - 1 - i;

        x = i / length;
        curve[index] = Math.log(1 + base * x) / Math.log(1 + base);
    }

    return curve;
}


/***/ }),

/***/ "./node_modules/fade-maker/index.js":
/*!******************************************!*\
  !*** ./node_modules/fade-maker/index.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.FADEOUT = exports.FADEIN = exports.LOGARITHMIC = exports.EXPONENTIAL = exports.LINEAR = exports.SCURVE = undefined;
exports.createFadeIn = createFadeIn;
exports.createFadeOut = createFadeOut;

var _fadeCurves = __webpack_require__(/*! fade-curves */ "./node_modules/fade-curves/index.js");

var SCURVE = exports.SCURVE = "sCurve";
var LINEAR = exports.LINEAR = "linear";
var EXPONENTIAL = exports.EXPONENTIAL = "exponential";
var LOGARITHMIC = exports.LOGARITHMIC = "logarithmic";

var FADEIN = exports.FADEIN = "FadeIn";
var FADEOUT = exports.FADEOUT = "FadeOut";

function sCurveFadeIn(start, duration) {
    var curve = (0, _fadeCurves.sCurve)(10000, 1);
    this.setValueCurveAtTime(curve, start, duration);
}

function sCurveFadeOut(start, duration) {
    var curve = (0, _fadeCurves.sCurve)(10000, -1);
    this.setValueCurveAtTime(curve, start, duration);
}

function linearFadeIn(start, duration) {
    this.linearRampToValueAtTime(0, start);
    this.linearRampToValueAtTime(1, start + duration);
}

function linearFadeOut(start, duration) {
    this.linearRampToValueAtTime(1, start);
    this.linearRampToValueAtTime(0, start + duration);
}

function exponentialFadeIn(start, duration) {
    this.exponentialRampToValueAtTime(0.01, start);
    this.exponentialRampToValueAtTime(1, start + duration);
}

function exponentialFadeOut(start, duration) {
    this.exponentialRampToValueAtTime(1, start);
    this.exponentialRampToValueAtTime(0.01, start + duration);
}

function logarithmicFadeIn(start, duration) {
    var curve = (0, _fadeCurves.logarithmic)(10000, 10, 1);
    this.setValueCurveAtTime(curve, start, duration);
}

function logarithmicFadeOut(start, duration) {
    var curve = (0, _fadeCurves.logarithmic)(10000, 10, -1);
    this.setValueCurveAtTime(curve, start, duration);
}

function createFadeIn(gain, shape, start, duration) {
    switch (shape) {
        case SCURVE:
            sCurveFadeIn.call(gain, start, duration);
            break;
        case LINEAR:
            linearFadeIn.call(gain, start, duration);
            break;
        case EXPONENTIAL:
            exponentialFadeIn.call(gain, start, duration);
            break;
        case LOGARITHMIC:
            logarithmicFadeIn.call(gain, start, duration);
            break;
        default:
            throw new Error("Unsupported Fade type");
    }
}

function createFadeOut(gain, shape, start, duration) {
    switch (shape) {
        case SCURVE:
            sCurveFadeOut.call(gain, start, duration);
            break;
        case LINEAR:
            linearFadeOut.call(gain, start, duration);
            break;
        case EXPONENTIAL:
            exponentialFadeOut.call(gain, start, duration);
            break;
        case LOGARITHMIC:
            logarithmicFadeOut.call(gain, start, duration);
            break;
        default:
            throw new Error("Unsupported Fade type");
    }
}


/***/ }),

/***/ "./node_modules/file-saver/dist/FileSaver.min.js":
/*!*******************************************************!*\
  !*** ./node_modules/file-saver/dist/FileSaver.min.js ***!
  \*******************************************************/
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(a,b){if(true)!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (b),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else {}})(this,function(){"use strict";function b(a,b){return"undefined"==typeof b?b={autoBom:!1}:"object"!=typeof b&&(console.warn("Deprecated: Expected third argument to be a object"),b={autoBom:!b}),b.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(a.type)?new Blob(["\uFEFF",a],{type:a.type}):a}function c(a,b,c){var d=new XMLHttpRequest;d.open("GET",a),d.responseType="blob",d.onload=function(){g(d.response,b,c)},d.onerror=function(){console.error("could not download file")},d.send()}function d(a){var b=new XMLHttpRequest;b.open("HEAD",a,!1);try{b.send()}catch(a){}return 200<=b.status&&299>=b.status}function e(a){try{a.dispatchEvent(new MouseEvent("click"))}catch(c){var b=document.createEvent("MouseEvents");b.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),a.dispatchEvent(b)}}var f="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof __webpack_require__.g&&__webpack_require__.g.global===__webpack_require__.g?__webpack_require__.g:void 0,a=f.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),g=f.saveAs||("object"!=typeof window||window!==f?function(){}:"download"in HTMLAnchorElement.prototype&&!a?function(b,g,h){var i=f.URL||f.webkitURL,j=document.createElement("a");g=g||b.name||"download",j.download=g,j.rel="noopener","string"==typeof b?(j.href=b,j.origin===location.origin?e(j):d(j.href)?c(b,g,h):e(j,j.target="_blank")):(j.href=i.createObjectURL(b),setTimeout(function(){i.revokeObjectURL(j.href)},4E4),setTimeout(function(){e(j)},0))}:"msSaveOrOpenBlob"in navigator?function(f,g,h){if(g=g||f.name||"download","string"!=typeof f)navigator.msSaveOrOpenBlob(b(f,h),g);else if(d(f))c(f,g,h);else{var i=document.createElement("a");i.href=f,i.target="_blank",setTimeout(function(){e(i)})}}:function(b,d,e,g){if(g=g||open("","_blank"),g&&(g.document.title=g.document.body.innerText="downloading..."),"string"==typeof b)return c(b,d,e);var h="application/octet-stream"===b.type,i=/constructor/i.test(f.HTMLElement)||f.safari,j=/CriOS\/[\d]+/.test(navigator.userAgent);if((j||h&&i||a)&&"undefined"!=typeof FileReader){var k=new FileReader;k.onloadend=function(){var a=k.result;a=j?a:a.replace(/^data:[^;]*;/,"data:attachment/file;"),g?g.location.href=a:location=a,g=null},k.readAsDataURL(b)}else{var l=f.URL||f.webkitURL,m=l.createObjectURL(b);g?g.location=m:location.href=m,g=null,setTimeout(function(){l.revokeObjectURL(m)},4E4)}});f.saveAs=g.saveAs=g, true&&(module.exports=g)});

//# sourceMappingURL=FileSaver.min.js.map

/***/ }),

/***/ "./node_modules/global/document.js":
/*!*****************************************!*\
  !*** ./node_modules/global/document.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var topLevel = typeof __webpack_require__.g !== 'undefined' ? __webpack_require__.g :
    typeof window !== 'undefined' ? window : {}
var minDoc = __webpack_require__(/*! min-document */ "./node_modules/min-document/index.js");

var doccy;

if (typeof document !== 'undefined') {
    doccy = document;
} else {
    doccy = topLevel['__GLOBAL_DOCUMENT_CACHE@4'];

    if (!doccy) {
        doccy = topLevel['__GLOBAL_DOCUMENT_CACHE@4'] = minDoc;
    }
}

module.exports = doccy;


/***/ }),

/***/ "./node_modules/individual/index.js":
/*!******************************************!*\
  !*** ./node_modules/individual/index.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/*global window, global*/

var root = typeof window !== 'undefined' ?
    window : typeof __webpack_require__.g !== 'undefined' ?
    __webpack_require__.g : {};

module.exports = Individual;

function Individual(key, value) {
    if (key in root) {
        return root[key];
    }

    root[key] = value;

    return value;
}


/***/ }),

/***/ "./node_modules/individual/one-version.js":
/*!************************************************!*\
  !*** ./node_modules/individual/one-version.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var Individual = __webpack_require__(/*! ./index.js */ "./node_modules/individual/index.js");

module.exports = OneVersion;

function OneVersion(moduleName, version, defaultValue) {
    var key = '__INDIVIDUAL_ONE_VERSION_' + moduleName;
    var enforceKey = key + '_ENFORCE_SINGLETON';

    var versionValue = Individual(enforceKey, version);

    if (versionValue !== version) {
        throw new Error('Can only have one copy of ' +
            moduleName + '.\n' +
            'You already have version ' + versionValue +
            ' installed.\n' +
            'This means you cannot install version ' + version);
    }

    return Individual(key, defaultValue);
}


/***/ }),

/***/ "./node_modules/inline-worker/index.js":
/*!*********************************************!*\
  !*** ./node_modules/inline-worker/index.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var WORKER_ENABLED = !!(__webpack_require__.g === __webpack_require__.g.window && __webpack_require__.g.URL && __webpack_require__.g.Blob && __webpack_require__.g.Worker);

function InlineWorker(func, self) {
  var _this = this;
  var functionBody;

  self = self || {};

  if (WORKER_ENABLED) {
    functionBody = func.toString().trim().match(
      /^function\s*\w*\s*\([\w\s,]*\)\s*{([\w\W]*?)}$/
    )[1];

    return new __webpack_require__.g.Worker(__webpack_require__.g.URL.createObjectURL(
      new __webpack_require__.g.Blob([ functionBody ], { type: "text/javascript" })
    ));
  }

  function postMessage(data) {
    setTimeout(function() {
      _this.onmessage({ data: data });
    }, 0);
  }

  this.self = self;
  this.self.postMessage = postMessage;

  setTimeout(func.bind(self, self), 0);
}

InlineWorker.prototype.postMessage = function postMessage(data) {
  var _this = this;

  setTimeout(function() {
    _this.self.onmessage({ data: data });
  }, 0);
};

module.exports = InlineWorker;


/***/ }),

/***/ "./node_modules/is-object/index.js":
/*!*****************************************!*\
  !*** ./node_modules/is-object/index.js ***!
  \*****************************************/
/***/ ((module) => {

"use strict";


module.exports = function isObject(x) {
	return typeof x === 'object' && x !== null;
};


/***/ }),

/***/ "./node_modules/lodash.assign/index.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash.assign/index.js ***!
  \*********************************************/
/***/ ((module) => {

/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]';

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0: return func.call(thisArg);
    case 1: return func.call(thisArg, args[0]);
    case 2: return func.call(thisArg, args[0], args[1]);
    case 3: return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = overArg(Object.keys, Object),
    nativeMax = Math.max;

/** Detect if properties shadowing those on `Object.prototype` are non-enumerable. */
var nonEnumShadows = !propertyIsEnumerable.call({ 'valueOf': 1 }, 'valueOf');

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
  // Safari 9 makes `arguments.length` enumerable in strict mode.
  var result = (isArray(value) || isArguments(value))
    ? baseTimes(value.length, String)
    : [];

  var length = result.length,
      skipIndexes = !!length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (key == 'length' || isIndex(key, length)))) {
      result.push(key);
    }
  }
  return result;
}

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
      (value === undefined && !(key in object))) {
    object[key] = value;
  }
}

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */
function baseRest(func, start) {
  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
  return function() {
    var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        array = Array(length);

    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = array;
    return apply(func, this, otherArgs);
  };
}

/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */
function copyObject(source, props, object, customizer) {
  object || (object = {});

  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];

    var newValue = customizer
      ? customizer(object[key], source[key], key, object, source)
      : undefined;

    assignValue(object, key, newValue === undefined ? source[key] : newValue);
  }
  return object;
}

/**
 * Creates a function like `_.assign`.
 *
 * @private
 * @param {Function} assigner The function to assign values.
 * @returns {Function} Returns the new assigner function.
 */
function createAssigner(assigner) {
  return baseRest(function(object, sources) {
    var index = -1,
        length = sources.length,
        customizer = length > 1 ? sources[length - 1] : undefined,
        guard = length > 2 ? sources[2] : undefined;

    customizer = (assigner.length > 3 && typeof customizer == 'function')
      ? (length--, customizer)
      : undefined;

    if (guard && isIterateeCall(sources[0], sources[1], guard)) {
      customizer = length < 3 ? undefined : customizer;
      length = 1;
    }
    object = Object(object);
    while (++index < length) {
      var source = sources[index];
      if (source) {
        assigner(object, source, index, customizer);
      }
    }
    return object;
  });
}

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length &&
    (typeof value == 'number' || reIsUint.test(value)) &&
    (value > -1 && value % 1 == 0 && value < length);
}

/**
 * Checks if the given arguments are from an iteratee call.
 *
 * @private
 * @param {*} value The potential iteratee value argument.
 * @param {*} index The potential iteratee index or key argument.
 * @param {*} object The potential iteratee object argument.
 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
 *  else `false`.
 */
function isIterateeCall(value, index, object) {
  if (!isObject(object)) {
    return false;
  }
  var type = typeof index;
  if (type == 'number'
        ? (isArrayLike(object) && isIndex(index, object.length))
        : (type == 'string' && index in object)
      ) {
    return eq(object[index], value);
  }
  return false;
}

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
function isArguments(value) {
  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
  return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') &&
    (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
}

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 8-9 which returns 'object' for typed array and other constructors.
  var tag = isObject(value) ? objectToString.call(value) : '';
  return tag == funcTag || tag == genTag;
}

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Assigns own enumerable string keyed properties of source objects to the
 * destination object. Source objects are applied from left to right.
 * Subsequent sources overwrite property assignments of previous sources.
 *
 * **Note:** This method mutates `object` and is loosely based on
 * [`Object.assign`](https://mdn.io/Object/assign).
 *
 * @static
 * @memberOf _
 * @since 0.10.0
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} [sources] The source objects.
 * @returns {Object} Returns `object`.
 * @see _.assignIn
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * function Bar() {
 *   this.c = 3;
 * }
 *
 * Foo.prototype.b = 2;
 * Bar.prototype.d = 4;
 *
 * _.assign({ 'a': 0 }, new Foo, new Bar);
 * // => { 'a': 1, 'c': 3 }
 */
var assign = createAssigner(function(object, source) {
  if (nonEnumShadows || isPrototype(source) || isArrayLike(source)) {
    copyObject(source, keys(source), object);
    return;
  }
  for (var key in source) {
    if (hasOwnProperty.call(source, key)) {
      assignValue(object, key, source[key]);
    }
  }
});

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

module.exports = assign;


/***/ }),

/***/ "./node_modules/lodash.clonedeep/index.js":
/*!************************************************!*\
  !*** ./node_modules/lodash.clonedeep/index.js ***!
  \************************************************/
/***/ ((module, exports, __webpack_require__) => {

/* module decorator */ module = __webpack_require__.nmd(module);
/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to match `RegExp` flags from their coerced string values. */
var reFlags = /\w*$/;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/** Used to identify `toStringTag` values supported by `_.clone`. */
var cloneableTags = {};
cloneableTags[argsTag] = cloneableTags[arrayTag] =
cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] =
cloneableTags[boolTag] = cloneableTags[dateTag] =
cloneableTags[float32Tag] = cloneableTags[float64Tag] =
cloneableTags[int8Tag] = cloneableTags[int16Tag] =
cloneableTags[int32Tag] = cloneableTags[mapTag] =
cloneableTags[numberTag] = cloneableTags[objectTag] =
cloneableTags[regexpTag] = cloneableTags[setTag] =
cloneableTags[stringTag] = cloneableTags[symbolTag] =
cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] =
cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
cloneableTags[errorTag] = cloneableTags[funcTag] =
cloneableTags[weakMapTag] = false;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof __webpack_require__.g == 'object' && __webpack_require__.g && __webpack_require__.g.Object === Object && __webpack_require__.g;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && "object" == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/**
 * Adds the key-value `pair` to `map`.
 *
 * @private
 * @param {Object} map The map to modify.
 * @param {Array} pair The key-value pair to add.
 * @returns {Object} Returns `map`.
 */
function addMapEntry(map, pair) {
  // Don't return `map.set` because it's not chainable in IE 11.
  map.set(pair[0], pair[1]);
  return map;
}

/**
 * Adds `value` to `set`.
 *
 * @private
 * @param {Object} set The set to modify.
 * @param {*} value The value to add.
 * @returns {Object} Returns `set`.
 */
function addSetEntry(set, value) {
  // Don't return `set.add` because it's not chainable in IE 11.
  set.add(value);
  return set;
}

/**
 * A specialized version of `_.forEach` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */
function arrayEach(array, iteratee) {
  var index = -1,
      length = array ? array.length : 0;

  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }
  return array;
}

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

/**
 * A specialized version of `_.reduce` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {*} [accumulator] The initial value.
 * @param {boolean} [initAccum] Specify using the first element of `array` as
 *  the initial value.
 * @returns {*} Returns the accumulated value.
 */
function arrayReduce(array, iteratee, accumulator, initAccum) {
  var index = -1,
      length = array ? array.length : 0;

  if (initAccum && length) {
    accumulator = array[++index];
  }
  while (++index < length) {
    accumulator = iteratee(accumulator, array[index], index, array);
  }
  return accumulator;
}

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

/**
 * Checks if `value` is a host object in IE < 9.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
 */
function isHostObject(value) {
  // Many host objects are `Object` objects that can coerce to strings
  // despite having improperly defined `toString` methods.
  var result = false;
  if (value != null && typeof value.toString != 'function') {
    try {
      result = !!(value + '');
    } catch (e) {}
  }
  return result;
}

/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */
function mapToArray(map) {
  var index = -1,
      result = Array(map.size);

  map.forEach(function(value, key) {
    result[++index] = [key, value];
  });
  return result;
}

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}

/** Used for built-in method references. */
var arrayProto = Array.prototype,
    funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined,
    Symbol = root.Symbol,
    Uint8Array = root.Uint8Array,
    getPrototype = overArg(Object.getPrototypeOf, Object),
    objectCreate = Object.create,
    propertyIsEnumerable = objectProto.propertyIsEnumerable,
    splice = arrayProto.splice;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols,
    nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined,
    nativeKeys = overArg(Object.keys, Object);

/* Built-in method references that are verified to be native. */
var DataView = getNative(root, 'DataView'),
    Map = getNative(root, 'Map'),
    Promise = getNative(root, 'Promise'),
    Set = getNative(root, 'Set'),
    WeakMap = getNative(root, 'WeakMap'),
    nativeCreate = getNative(Object, 'create');

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map),
    promiseCtorString = toSource(Promise),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
}

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  return this.has(key) && delete this.__data__[key];
}

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
}

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
}

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  return true;
}

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  return getMapData(this, key)['delete'](key);
}

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  getMapData(this, key).set(key, value);
  return this;
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  this.__data__ = new ListCache(entries);
}

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new ListCache;
}

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  return this.__data__['delete'](key);
}

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var cache = this.__data__;
  if (cache instanceof ListCache) {
    var pairs = cache.__data__;
    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      return this;
    }
    cache = this.__data__ = new MapCache(pairs);
  }
  cache.set(key, value);
  return this;
}

// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
  // Safari 9 makes `arguments.length` enumerable in strict mode.
  var result = (isArray(value) || isArguments(value))
    ? baseTimes(value.length, String)
    : [];

  var length = result.length,
      skipIndexes = !!length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (key == 'length' || isIndex(key, length)))) {
      result.push(key);
    }
  }
  return result;
}

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
      (value === undefined && !(key in object))) {
    object[key] = value;
  }
}

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

/**
 * The base implementation of `_.assign` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function baseAssign(object, source) {
  return object && copyObject(source, keys(source), object);
}

/**
 * The base implementation of `_.clone` and `_.cloneDeep` which tracks
 * traversed objects.
 *
 * @private
 * @param {*} value The value to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @param {boolean} [isFull] Specify a clone including symbols.
 * @param {Function} [customizer] The function to customize cloning.
 * @param {string} [key] The key of `value`.
 * @param {Object} [object] The parent object of `value`.
 * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
 * @returns {*} Returns the cloned value.
 */
function baseClone(value, isDeep, isFull, customizer, key, object, stack) {
  var result;
  if (customizer) {
    result = object ? customizer(value, key, object, stack) : customizer(value);
  }
  if (result !== undefined) {
    return result;
  }
  if (!isObject(value)) {
    return value;
  }
  var isArr = isArray(value);
  if (isArr) {
    result = initCloneArray(value);
    if (!isDeep) {
      return copyArray(value, result);
    }
  } else {
    var tag = getTag(value),
        isFunc = tag == funcTag || tag == genTag;

    if (isBuffer(value)) {
      return cloneBuffer(value, isDeep);
    }
    if (tag == objectTag || tag == argsTag || (isFunc && !object)) {
      if (isHostObject(value)) {
        return object ? value : {};
      }
      result = initCloneObject(isFunc ? {} : value);
      if (!isDeep) {
        return copySymbols(value, baseAssign(result, value));
      }
    } else {
      if (!cloneableTags[tag]) {
        return object ? value : {};
      }
      result = initCloneByTag(value, tag, baseClone, isDeep);
    }
  }
  // Check for circular references and return its corresponding clone.
  stack || (stack = new Stack);
  var stacked = stack.get(value);
  if (stacked) {
    return stacked;
  }
  stack.set(value, result);

  if (!isArr) {
    var props = isFull ? getAllKeys(value) : keys(value);
  }
  arrayEach(props || value, function(subValue, key) {
    if (props) {
      key = subValue;
      subValue = value[key];
    }
    // Recursively populate clone (susceptible to call stack limits).
    assignValue(result, key, baseClone(subValue, isDeep, isFull, customizer, key, value, stack));
  });
  return result;
}

/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} prototype The object to inherit from.
 * @returns {Object} Returns the new object.
 */
function baseCreate(proto) {
  return isObject(proto) ? objectCreate(proto) : {};
}

/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
}

/**
 * The base implementation of `getTag`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  return objectToString.call(value);
}

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = (isFunction(value) || isHostObject(value)) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

/**
 * Creates a clone of  `buffer`.
 *
 * @private
 * @param {Buffer} buffer The buffer to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Buffer} Returns the cloned buffer.
 */
function cloneBuffer(buffer, isDeep) {
  if (isDeep) {
    return buffer.slice();
  }
  var result = new buffer.constructor(buffer.length);
  buffer.copy(result);
  return result;
}

/**
 * Creates a clone of `arrayBuffer`.
 *
 * @private
 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
 * @returns {ArrayBuffer} Returns the cloned array buffer.
 */
function cloneArrayBuffer(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new Uint8Array(result).set(new Uint8Array(arrayBuffer));
  return result;
}

/**
 * Creates a clone of `dataView`.
 *
 * @private
 * @param {Object} dataView The data view to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned data view.
 */
function cloneDataView(dataView, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
  return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
}

/**
 * Creates a clone of `map`.
 *
 * @private
 * @param {Object} map The map to clone.
 * @param {Function} cloneFunc The function to clone values.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned map.
 */
function cloneMap(map, isDeep, cloneFunc) {
  var array = isDeep ? cloneFunc(mapToArray(map), true) : mapToArray(map);
  return arrayReduce(array, addMapEntry, new map.constructor);
}

/**
 * Creates a clone of `regexp`.
 *
 * @private
 * @param {Object} regexp The regexp to clone.
 * @returns {Object} Returns the cloned regexp.
 */
function cloneRegExp(regexp) {
  var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
  result.lastIndex = regexp.lastIndex;
  return result;
}

/**
 * Creates a clone of `set`.
 *
 * @private
 * @param {Object} set The set to clone.
 * @param {Function} cloneFunc The function to clone values.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned set.
 */
function cloneSet(set, isDeep, cloneFunc) {
  var array = isDeep ? cloneFunc(setToArray(set), true) : setToArray(set);
  return arrayReduce(array, addSetEntry, new set.constructor);
}

/**
 * Creates a clone of the `symbol` object.
 *
 * @private
 * @param {Object} symbol The symbol object to clone.
 * @returns {Object} Returns the cloned symbol object.
 */
function cloneSymbol(symbol) {
  return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
}

/**
 * Creates a clone of `typedArray`.
 *
 * @private
 * @param {Object} typedArray The typed array to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned typed array.
 */
function cloneTypedArray(typedArray, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}

/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */
function copyArray(source, array) {
  var index = -1,
      length = source.length;

  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}

/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */
function copyObject(source, props, object, customizer) {
  object || (object = {});

  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];

    var newValue = customizer
      ? customizer(object[key], source[key], key, object, source)
      : undefined;

    assignValue(object, key, newValue === undefined ? source[key] : newValue);
  }
  return object;
}

/**
 * Copies own symbol properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function copySymbols(source, object) {
  return copyObject(source, getSymbols(source), object);
}

/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys(object) {
  return baseGetAllKeys(object, keys, getSymbols);
}

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

/**
 * Creates an array of the own enumerable symbol properties of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols = nativeGetSymbols ? overArg(nativeGetSymbols, Object) : stubArray;

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11,
// for data views in Edge < 14, and promises in Node.js.
if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
    (Map && getTag(new Map) != mapTag) ||
    (Promise && getTag(Promise.resolve()) != promiseTag) ||
    (Set && getTag(new Set) != setTag) ||
    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
  getTag = function(value) {
    var result = objectToString.call(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : undefined;

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag;
        case mapCtorString: return mapTag;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag;
        case weakMapCtorString: return weakMapTag;
      }
    }
    return result;
  };
}

/**
 * Initializes an array clone.
 *
 * @private
 * @param {Array} array The array to clone.
 * @returns {Array} Returns the initialized clone.
 */
function initCloneArray(array) {
  var length = array.length,
      result = array.constructor(length);

  // Add properties assigned by `RegExp#exec`.
  if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
    result.index = array.index;
    result.input = array.input;
  }
  return result;
}

/**
 * Initializes an object clone.
 *
 * @private
 * @param {Object} object The object to clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneObject(object) {
  return (typeof object.constructor == 'function' && !isPrototype(object))
    ? baseCreate(getPrototype(object))
    : {};
}

/**
 * Initializes an object clone based on its `toStringTag`.
 *
 * **Note:** This function only supports cloning values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to clone.
 * @param {string} tag The `toStringTag` of the object to clone.
 * @param {Function} cloneFunc The function to clone values.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneByTag(object, tag, cloneFunc, isDeep) {
  var Ctor = object.constructor;
  switch (tag) {
    case arrayBufferTag:
      return cloneArrayBuffer(object);

    case boolTag:
    case dateTag:
      return new Ctor(+object);

    case dataViewTag:
      return cloneDataView(object, isDeep);

    case float32Tag: case float64Tag:
    case int8Tag: case int16Tag: case int32Tag:
    case uint8Tag: case uint8ClampedTag: case uint16Tag: case uint32Tag:
      return cloneTypedArray(object, isDeep);

    case mapTag:
      return cloneMap(object, isDeep, cloneFunc);

    case numberTag:
    case stringTag:
      return new Ctor(object);

    case regexpTag:
      return cloneRegExp(object);

    case setTag:
      return cloneSet(object, isDeep, cloneFunc);

    case symbolTag:
      return cloneSymbol(object);
  }
}

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length &&
    (typeof value == 'number' || reIsUint.test(value)) &&
    (value > -1 && value % 1 == 0 && value < length);
}

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to process.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

/**
 * This method is like `_.clone` except that it recursively clones `value`.
 *
 * @static
 * @memberOf _
 * @since 1.0.0
 * @category Lang
 * @param {*} value The value to recursively clone.
 * @returns {*} Returns the deep cloned value.
 * @see _.clone
 * @example
 *
 * var objects = [{ 'a': 1 }, { 'b': 2 }];
 *
 * var deep = _.cloneDeep(objects);
 * console.log(deep[0] === objects[0]);
 * // => false
 */
function cloneDeep(value) {
  return baseClone(value, true, true);
}

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
function isArguments(value) {
  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
  return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') &&
    (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
}

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 8-9 which returns 'object' for typed array and other constructors.
  var tag = isObject(value) ? objectToString.call(value) : '';
  return tag == funcTag || tag == genTag;
}

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = cloneDeep;


/***/ }),

/***/ "./node_modules/lodash.defaults/index.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash.defaults/index.js ***!
  \***********************************************/
/***/ ((module) => {

/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]';

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0: return func.call(thisArg);
    case 1: return func.call(thisArg, args[0]);
    case 2: return func.call(thisArg, args[0], args[1]);
    case 3: return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
  // Safari 9 makes `arguments.length` enumerable in strict mode.
  var result = (isArray(value) || isArguments(value))
    ? baseTimes(value.length, String)
    : [];

  var length = result.length,
      skipIndexes = !!length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (key == 'length' || isIndex(key, length)))) {
      result.push(key);
    }
  }
  return result;
}

/**
 * Used by `_.defaults` to customize its `_.assignIn` use.
 *
 * @private
 * @param {*} objValue The destination value.
 * @param {*} srcValue The source value.
 * @param {string} key The key of the property to assign.
 * @param {Object} object The parent object of `objValue`.
 * @returns {*} Returns the value to assign.
 */
function assignInDefaults(objValue, srcValue, key, object) {
  if (objValue === undefined ||
      (eq(objValue, objectProto[key]) && !hasOwnProperty.call(object, key))) {
    return srcValue;
  }
  return objValue;
}

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
      (value === undefined && !(key in object))) {
    object[key] = value;
  }
}

/**
 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeysIn(object) {
  if (!isObject(object)) {
    return nativeKeysIn(object);
  }
  var isProto = isPrototype(object),
      result = [];

  for (var key in object) {
    if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}

/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */
function baseRest(func, start) {
  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
  return function() {
    var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        array = Array(length);

    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = array;
    return apply(func, this, otherArgs);
  };
}

/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */
function copyObject(source, props, object, customizer) {
  object || (object = {});

  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];

    var newValue = customizer
      ? customizer(object[key], source[key], key, object, source)
      : undefined;

    assignValue(object, key, newValue === undefined ? source[key] : newValue);
  }
  return object;
}

/**
 * Creates a function like `_.assign`.
 *
 * @private
 * @param {Function} assigner The function to assign values.
 * @returns {Function} Returns the new assigner function.
 */
function createAssigner(assigner) {
  return baseRest(function(object, sources) {
    var index = -1,
        length = sources.length,
        customizer = length > 1 ? sources[length - 1] : undefined,
        guard = length > 2 ? sources[2] : undefined;

    customizer = (assigner.length > 3 && typeof customizer == 'function')
      ? (length--, customizer)
      : undefined;

    if (guard && isIterateeCall(sources[0], sources[1], guard)) {
      customizer = length < 3 ? undefined : customizer;
      length = 1;
    }
    object = Object(object);
    while (++index < length) {
      var source = sources[index];
      if (source) {
        assigner(object, source, index, customizer);
      }
    }
    return object;
  });
}

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length &&
    (typeof value == 'number' || reIsUint.test(value)) &&
    (value > -1 && value % 1 == 0 && value < length);
}

/**
 * Checks if the given arguments are from an iteratee call.
 *
 * @private
 * @param {*} value The potential iteratee value argument.
 * @param {*} index The potential iteratee index or key argument.
 * @param {*} object The potential iteratee object argument.
 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
 *  else `false`.
 */
function isIterateeCall(value, index, object) {
  if (!isObject(object)) {
    return false;
  }
  var type = typeof index;
  if (type == 'number'
        ? (isArrayLike(object) && isIndex(index, object.length))
        : (type == 'string' && index in object)
      ) {
    return eq(object[index], value);
  }
  return false;
}

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

/**
 * This function is like
 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * except that it includes inherited enumerable properties.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function nativeKeysIn(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
function isArguments(value) {
  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
  return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') &&
    (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
}

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 8-9 which returns 'object' for typed array and other constructors.
  var tag = isObject(value) ? objectToString.call(value) : '';
  return tag == funcTag || tag == genTag;
}

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * This method is like `_.assignIn` except that it accepts `customizer`
 * which is invoked to produce the assigned values. If `customizer` returns
 * `undefined`, assignment is handled by the method instead. The `customizer`
 * is invoked with five arguments: (objValue, srcValue, key, object, source).
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @alias extendWith
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} sources The source objects.
 * @param {Function} [customizer] The function to customize assigned values.
 * @returns {Object} Returns `object`.
 * @see _.assignWith
 * @example
 *
 * function customizer(objValue, srcValue) {
 *   return _.isUndefined(objValue) ? srcValue : objValue;
 * }
 *
 * var defaults = _.partialRight(_.assignInWith, customizer);
 *
 * defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
 * // => { 'a': 1, 'b': 2 }
 */
var assignInWith = createAssigner(function(object, source, srcIndex, customizer) {
  copyObject(source, keysIn(source), object, customizer);
});

/**
 * Assigns own and inherited enumerable string keyed properties of source
 * objects to the destination object for all destination properties that
 * resolve to `undefined`. Source objects are applied from left to right.
 * Once a property is set, additional values of the same property are ignored.
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} [sources] The source objects.
 * @returns {Object} Returns `object`.
 * @see _.defaultsDeep
 * @example
 *
 * _.defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
 * // => { 'a': 1, 'b': 2 }
 */
var defaults = baseRest(function(args) {
  args.push(undefined, assignInDefaults);
  return apply(assignInWith, undefined, args);
});

/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keysIn(new Foo);
 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
 */
function keysIn(object) {
  return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
}

module.exports = defaults;


/***/ }),

/***/ "./node_modules/lodash.forown/index.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash.forown/index.js ***!
  \*********************************************/
/***/ ((module) => {

/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]';

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = overArg(Object.keys, Object);

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
  // Safari 9 makes `arguments.length` enumerable in strict mode.
  var result = (isArray(value) || isArguments(value))
    ? baseTimes(value.length, String)
    : [];

  var length = result.length,
      skipIndexes = !!length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (key == 'length' || isIndex(key, length)))) {
      result.push(key);
    }
  }
  return result;
}

/**
 * The base implementation of `baseForOwn` which iterates over `object`
 * properties returned by `keysFunc` and invokes `iteratee` for each property.
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @returns {Object} Returns `object`.
 */
var baseFor = createBaseFor();

/**
 * The base implementation of `_.forOwn` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Object} Returns `object`.
 */
function baseForOwn(object, iteratee) {
  return object && baseFor(object, iteratee, keys);
}

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

/**
 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseFor(fromRight) {
  return function(object, iteratee, keysFunc) {
    var index = -1,
        iterable = Object(object),
        props = keysFunc(object),
        length = props.length;

    while (length--) {
      var key = props[fromRight ? length : ++index];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length &&
    (typeof value == 'number' || reIsUint.test(value)) &&
    (value > -1 && value % 1 == 0 && value < length);
}

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
function isArguments(value) {
  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
  return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') &&
    (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
}

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 8-9 which returns 'object' for typed array and other constructors.
  var tag = isObject(value) ? objectToString.call(value) : '';
  return tag == funcTag || tag == genTag;
}

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Iterates over own enumerable string keyed properties of an object and
 * invokes `iteratee` for each property. The iteratee is invoked with three
 * arguments: (value, key, object). Iteratee functions may exit iteration
 * early by explicitly returning `false`.
 *
 * @static
 * @memberOf _
 * @since 0.3.0
 * @category Object
 * @param {Object} object The object to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @returns {Object} Returns `object`.
 * @see _.forOwnRight
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.forOwn(new Foo, function(value, key) {
 *   console.log(key);
 * });
 * // => Logs 'a' then 'b' (iteration order is not guaranteed).
 */
function forOwn(object, iteratee) {
  return object && baseForOwn(object, typeof iteratee == 'function' ? iteratee : identity);
}

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

module.exports = forOwn;


/***/ }),

/***/ "./node_modules/min-document/document.js":
/*!***********************************************!*\
  !*** ./node_modules/min-document/document.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var domWalk = __webpack_require__(/*! dom-walk */ "./node_modules/dom-walk/index.js")

var Comment = __webpack_require__(/*! ./dom-comment.js */ "./node_modules/min-document/dom-comment.js")
var DOMText = __webpack_require__(/*! ./dom-text.js */ "./node_modules/min-document/dom-text.js")
var DOMElement = __webpack_require__(/*! ./dom-element.js */ "./node_modules/min-document/dom-element.js")
var DocumentFragment = __webpack_require__(/*! ./dom-fragment.js */ "./node_modules/min-document/dom-fragment.js")
var Event = __webpack_require__(/*! ./event.js */ "./node_modules/min-document/event.js")
var dispatchEvent = __webpack_require__(/*! ./event/dispatch-event.js */ "./node_modules/min-document/event/dispatch-event.js")
var addEventListener = __webpack_require__(/*! ./event/add-event-listener.js */ "./node_modules/min-document/event/add-event-listener.js")
var removeEventListener = __webpack_require__(/*! ./event/remove-event-listener.js */ "./node_modules/min-document/event/remove-event-listener.js")

module.exports = Document;

function Document() {
    if (!(this instanceof Document)) {
        return new Document();
    }

    this.head = this.createElement("head")
    this.body = this.createElement("body")
    this.documentElement = this.createElement("html")
    this.documentElement.appendChild(this.head)
    this.documentElement.appendChild(this.body)
    this.childNodes = [this.documentElement]
    this.nodeType = 9
}

var proto = Document.prototype;
proto.createTextNode = function createTextNode(value) {
    return new DOMText(value, this)
}

proto.createElementNS = function createElementNS(namespace, tagName) {
    var ns = namespace === null ? null : String(namespace)
    return new DOMElement(tagName, this, ns)
}

proto.createElement = function createElement(tagName) {
    return new DOMElement(tagName, this)
}

proto.createDocumentFragment = function createDocumentFragment() {
    return new DocumentFragment(this)
}

proto.createEvent = function createEvent(family) {
    return new Event(family)
}

proto.createComment = function createComment(data) {
    return new Comment(data, this)
}

proto.getElementById = function getElementById(id) {
    id = String(id)

    var result = domWalk(this.childNodes, function (node) {
        if (String(node.id) === id) {
            return node
        }
    })

    return result || null
}

proto.getElementsByClassName = DOMElement.prototype.getElementsByClassName
proto.getElementsByTagName = DOMElement.prototype.getElementsByTagName
proto.contains = DOMElement.prototype.contains

proto.removeEventListener = removeEventListener
proto.addEventListener = addEventListener
proto.dispatchEvent = dispatchEvent


/***/ }),

/***/ "./node_modules/min-document/dom-comment.js":
/*!**************************************************!*\
  !*** ./node_modules/min-document/dom-comment.js ***!
  \**************************************************/
/***/ ((module) => {

module.exports = Comment

function Comment(data, owner) {
    if (!(this instanceof Comment)) {
        return new Comment(data, owner)
    }

    this.data = data
    this.nodeValue = data
    this.length = data.length
    this.ownerDocument = owner || null
}

Comment.prototype.nodeType = 8
Comment.prototype.nodeName = "#comment"

Comment.prototype.toString = function _Comment_toString() {
    return "[object Comment]"
}


/***/ }),

/***/ "./node_modules/min-document/dom-element.js":
/*!**************************************************!*\
  !*** ./node_modules/min-document/dom-element.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var domWalk = __webpack_require__(/*! dom-walk */ "./node_modules/dom-walk/index.js")
var dispatchEvent = __webpack_require__(/*! ./event/dispatch-event.js */ "./node_modules/min-document/event/dispatch-event.js")
var addEventListener = __webpack_require__(/*! ./event/add-event-listener.js */ "./node_modules/min-document/event/add-event-listener.js")
var removeEventListener = __webpack_require__(/*! ./event/remove-event-listener.js */ "./node_modules/min-document/event/remove-event-listener.js")
var serializeNode = __webpack_require__(/*! ./serialize.js */ "./node_modules/min-document/serialize.js")

var htmlns = "http://www.w3.org/1999/xhtml"

module.exports = DOMElement

function DOMElement(tagName, owner, namespace) {
    if (!(this instanceof DOMElement)) {
        return new DOMElement(tagName)
    }

    var ns = namespace === undefined ? htmlns : (namespace || null)

    this.tagName = ns === htmlns ? String(tagName).toUpperCase() : tagName
    this.nodeName = this.tagName
    this.className = ""
    this.dataset = {}
    this.childNodes = []
    this.parentNode = null
    this.style = {}
    this.ownerDocument = owner || null
    this.namespaceURI = ns
    this._attributes = {}

    if (this.tagName === 'INPUT') {
      this.type = 'text'
    }
}

DOMElement.prototype.type = "DOMElement"
DOMElement.prototype.nodeType = 1

DOMElement.prototype.appendChild = function _Element_appendChild(child) {
    if (child.parentNode) {
        child.parentNode.removeChild(child)
    }

    this.childNodes.push(child)
    child.parentNode = this

    return child
}

DOMElement.prototype.replaceChild =
    function _Element_replaceChild(elem, needle) {
        // TODO: Throw NotFoundError if needle.parentNode !== this

        if (elem.parentNode) {
            elem.parentNode.removeChild(elem)
        }

        var index = this.childNodes.indexOf(needle)

        needle.parentNode = null
        this.childNodes[index] = elem
        elem.parentNode = this

        return needle
    }

DOMElement.prototype.removeChild = function _Element_removeChild(elem) {
    // TODO: Throw NotFoundError if elem.parentNode !== this

    var index = this.childNodes.indexOf(elem)
    this.childNodes.splice(index, 1)

    elem.parentNode = null
    return elem
}

DOMElement.prototype.insertBefore =
    function _Element_insertBefore(elem, needle) {
        // TODO: Throw NotFoundError if referenceElement is a dom node
        // and parentNode !== this

        if (elem.parentNode) {
            elem.parentNode.removeChild(elem)
        }

        var index = needle === null || needle === undefined ?
            -1 :
            this.childNodes.indexOf(needle)

        if (index > -1) {
            this.childNodes.splice(index, 0, elem)
        } else {
            this.childNodes.push(elem)
        }

        elem.parentNode = this
        return elem
    }

DOMElement.prototype.setAttributeNS =
    function _Element_setAttributeNS(namespace, name, value) {
        var prefix = null
        var localName = name
        var colonPosition = name.indexOf(":")
        if (colonPosition > -1) {
            prefix = name.substr(0, colonPosition)
            localName = name.substr(colonPosition + 1)
        }
        if (this.tagName === 'INPUT' && name === 'type') {
          this.type = value;
        }
        else {
          var attributes = this._attributes[namespace] || (this._attributes[namespace] = {})
          attributes[localName] = {value: value, prefix: prefix}
        }
    }

DOMElement.prototype.getAttributeNS =
    function _Element_getAttributeNS(namespace, name) {
        var attributes = this._attributes[namespace];
        var value = attributes && attributes[name] && attributes[name].value
        if (this.tagName === 'INPUT' && name === 'type') {
          return this.type;
        }
        if (typeof value !== "string") {
            return null
        }
        return value
    }

DOMElement.prototype.removeAttributeNS =
    function _Element_removeAttributeNS(namespace, name) {
        var attributes = this._attributes[namespace];
        if (attributes) {
            delete attributes[name]
        }
    }

DOMElement.prototype.hasAttributeNS =
    function _Element_hasAttributeNS(namespace, name) {
        var attributes = this._attributes[namespace]
        return !!attributes && name in attributes;
    }

DOMElement.prototype.setAttribute = function _Element_setAttribute(name, value) {
    return this.setAttributeNS(null, name, value)
}

DOMElement.prototype.getAttribute = function _Element_getAttribute(name) {
    return this.getAttributeNS(null, name)
}

DOMElement.prototype.removeAttribute = function _Element_removeAttribute(name) {
    return this.removeAttributeNS(null, name)
}

DOMElement.prototype.hasAttribute = function _Element_hasAttribute(name) {
    return this.hasAttributeNS(null, name)
}

DOMElement.prototype.removeEventListener = removeEventListener
DOMElement.prototype.addEventListener = addEventListener
DOMElement.prototype.dispatchEvent = dispatchEvent

// Un-implemented
DOMElement.prototype.focus = function _Element_focus() {
    return void 0
}

DOMElement.prototype.toString = function _Element_toString() {
    return serializeNode(this)
}

DOMElement.prototype.getElementsByClassName = function _Element_getElementsByClassName(classNames) {
    var classes = classNames.split(" ");
    var elems = []

    domWalk(this, function (node) {
        if (node.nodeType === 1) {
            var nodeClassName = node.className || ""
            var nodeClasses = nodeClassName.split(" ")

            if (classes.every(function (item) {
                return nodeClasses.indexOf(item) !== -1
            })) {
                elems.push(node)
            }
        }
    })

    return elems
}

DOMElement.prototype.getElementsByTagName = function _Element_getElementsByTagName(tagName) {
    tagName = tagName.toLowerCase()
    var elems = []

    domWalk(this.childNodes, function (node) {
        if (node.nodeType === 1 && (tagName === '*' || node.tagName.toLowerCase() === tagName)) {
            elems.push(node)
        }
    })

    return elems
}

DOMElement.prototype.contains = function _Element_contains(element) {
    return domWalk(this, function (node) {
        return element === node
    }) || false
}


/***/ }),

/***/ "./node_modules/min-document/dom-fragment.js":
/*!***************************************************!*\
  !*** ./node_modules/min-document/dom-fragment.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var DOMElement = __webpack_require__(/*! ./dom-element.js */ "./node_modules/min-document/dom-element.js")

module.exports = DocumentFragment

function DocumentFragment(owner) {
    if (!(this instanceof DocumentFragment)) {
        return new DocumentFragment()
    }

    this.childNodes = []
    this.parentNode = null
    this.ownerDocument = owner || null
}

DocumentFragment.prototype.type = "DocumentFragment"
DocumentFragment.prototype.nodeType = 11
DocumentFragment.prototype.nodeName = "#document-fragment"

DocumentFragment.prototype.appendChild  = DOMElement.prototype.appendChild
DocumentFragment.prototype.replaceChild = DOMElement.prototype.replaceChild
DocumentFragment.prototype.removeChild  = DOMElement.prototype.removeChild

DocumentFragment.prototype.toString =
    function _DocumentFragment_toString() {
        return this.childNodes.map(function (node) {
            return String(node)
        }).join("")
    }


/***/ }),

/***/ "./node_modules/min-document/dom-text.js":
/*!***********************************************!*\
  !*** ./node_modules/min-document/dom-text.js ***!
  \***********************************************/
/***/ ((module) => {

module.exports = DOMText

function DOMText(value, owner) {
    if (!(this instanceof DOMText)) {
        return new DOMText(value)
    }

    this.data = value || ""
    this.length = this.data.length
    this.ownerDocument = owner || null
}

DOMText.prototype.type = "DOMTextNode"
DOMText.prototype.nodeType = 3
DOMText.prototype.nodeName = "#text"

DOMText.prototype.toString = function _Text_toString() {
    return this.data
}

DOMText.prototype.replaceData = function replaceData(index, length, value) {
    var current = this.data
    var left = current.substring(0, index)
    var right = current.substring(index + length, current.length)
    this.data = left + value + right
    this.length = this.data.length
}


/***/ }),

/***/ "./node_modules/min-document/event.js":
/*!********************************************!*\
  !*** ./node_modules/min-document/event.js ***!
  \********************************************/
/***/ ((module) => {

module.exports = Event

function Event(family) {}

Event.prototype.initEvent = function _Event_initEvent(type, bubbles, cancelable) {
    this.type = type
    this.bubbles = bubbles
    this.cancelable = cancelable
}

Event.prototype.preventDefault = function _Event_preventDefault() {
    
}


/***/ }),

/***/ "./node_modules/min-document/event/add-event-listener.js":
/*!***************************************************************!*\
  !*** ./node_modules/min-document/event/add-event-listener.js ***!
  \***************************************************************/
/***/ ((module) => {

module.exports = addEventListener

function addEventListener(type, listener) {
    var elem = this

    if (!elem.listeners) {
        elem.listeners = {}
    }

    if (!elem.listeners[type]) {
        elem.listeners[type] = []
    }

    if (elem.listeners[type].indexOf(listener) === -1) {
        elem.listeners[type].push(listener)
    }
}


/***/ }),

/***/ "./node_modules/min-document/event/dispatch-event.js":
/*!***********************************************************!*\
  !*** ./node_modules/min-document/event/dispatch-event.js ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = dispatchEvent

function dispatchEvent(ev) {
    var elem = this
    var type = ev.type

    if (!ev.target) {
        ev.target = elem
    }

    if (!elem.listeners) {
        elem.listeners = {}
    }

    var listeners = elem.listeners[type]

    if (listeners) {
        return listeners.forEach(function (listener) {
            ev.currentTarget = elem
            if (typeof listener === 'function') {
                listener(ev)
            } else {
                listener.handleEvent(ev)
            }
        })
    }

    if (elem.parentNode) {
        elem.parentNode.dispatchEvent(ev)
    }
}


/***/ }),

/***/ "./node_modules/min-document/event/remove-event-listener.js":
/*!******************************************************************!*\
  !*** ./node_modules/min-document/event/remove-event-listener.js ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = removeEventListener

function removeEventListener(type, listener) {
    var elem = this

    if (!elem.listeners) {
        return
    }

    if (!elem.listeners[type]) {
        return
    }

    var list = elem.listeners[type]
    var index = list.indexOf(listener)
    if (index !== -1) {
        list.splice(index, 1)
    }
}


/***/ }),

/***/ "./node_modules/min-document/index.js":
/*!********************************************!*\
  !*** ./node_modules/min-document/index.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Document = __webpack_require__(/*! ./document.js */ "./node_modules/min-document/document.js");

module.exports = new Document();


/***/ }),

/***/ "./node_modules/min-document/serialize.js":
/*!************************************************!*\
  !*** ./node_modules/min-document/serialize.js ***!
  \************************************************/
/***/ ((module) => {

module.exports = serializeNode

var voidElements = ["area","base","br","col","embed","hr","img","input","keygen","link","menuitem","meta","param","source","track","wbr"];

function serializeNode(node) {
    switch (node.nodeType) {
        case 3:
            return escapeText(node.data)
        case 8:
            return "<!--" + node.data + "-->"
        default:
            return serializeElement(node)
    }
}

function serializeElement(elem) {
    var strings = []

    var tagname = elem.tagName

    if (elem.namespaceURI === "http://www.w3.org/1999/xhtml") {
        tagname = tagname.toLowerCase()
    }

    strings.push("<" + tagname + properties(elem) + datasetify(elem))

    if (voidElements.indexOf(tagname) > -1) {
        strings.push(" />")
    } else {
        strings.push(">")

        if (elem.childNodes.length) {
            strings.push.apply(strings, elem.childNodes.map(serializeNode))
        } else if (elem.textContent || elem.innerText) {
            strings.push(escapeText(elem.textContent || elem.innerText))
        } else if (elem.innerHTML) {
            strings.push(elem.innerHTML)
        }

        strings.push("</" + tagname + ">")
    }

    return strings.join("")
}

function isProperty(elem, key) {
    var type = typeof elem[key]

    if (key === "style" && Object.keys(elem.style).length > 0) {
      return true
    }

    return elem.hasOwnProperty(key) &&
        (type === "string" || type === "boolean" || type === "number") &&
        key !== "nodeName" && key !== "className" && key !== "tagName" &&
        key !== "textContent" && key !== "innerText" && key !== "namespaceURI" &&  key !== "innerHTML"
}

function stylify(styles) {
    if (typeof styles === 'string') return styles
    var attr = ""
    Object.keys(styles).forEach(function (key) {
        var value = styles[key]
        key = key.replace(/[A-Z]/g, function(c) {
            return "-" + c.toLowerCase();
        })
        attr += key + ":" + value + ";"
    })
    return attr
}

function datasetify(elem) {
    var ds = elem.dataset
    var props = []

    for (var key in ds) {
        props.push({ name: "data-" + key, value: ds[key] })
    }

    return props.length ? stringify(props) : ""
}

function stringify(list) {
    var attributes = []
    list.forEach(function (tuple) {
        var name = tuple.name
        var value = tuple.value

        if (name === "style") {
            value = stylify(value)
        }

        attributes.push(name + "=" + "\"" + escapeAttributeValue(value) + "\"")
    })

    return attributes.length ? " " + attributes.join(" ") : ""
}

function properties(elem) {
    var props = []
    for (var key in elem) {
        if (isProperty(elem, key)) {
            props.push({ name: key, value: elem[key] })
        }
    }

    for (var ns in elem._attributes) {
      for (var attribute in elem._attributes[ns]) {
        var prop = elem._attributes[ns][attribute]
        var name = (prop.prefix ? prop.prefix + ":" : "") + attribute
        props.push({ name: name, value: prop.value })
      }
    }

    if (elem.className) {
        props.push({ name: "class", value: elem.className })
    }

    return props.length ? stringify(props) : ""
}

function escapeText(s) {
    var str = '';

    if (typeof(s) === 'string') { 
        str = s; 
    } else if (s) {
        str = s.toString();
    }

    return str
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
}

function escapeAttributeValue(str) {
    return escapeText(str).replace(/"/g, "&quot;")
}


/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/***/ ((module) => {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : 0
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}


/***/ }),

/***/ "./node_modules/type/function/is.js":
/*!******************************************!*\
  !*** ./node_modules/type/function/is.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var isPrototype = __webpack_require__(/*! ../prototype/is */ "./node_modules/type/prototype/is.js");

module.exports = function (value) {
	if (typeof value !== "function") return false;

	if (!hasOwnProperty.call(value, "length")) return false;

	try {
		if (typeof value.length !== "number") return false;
		if (typeof value.call !== "function") return false;
		if (typeof value.apply !== "function") return false;
	} catch (error) {
		return false;
	}

	return !isPrototype(value);
};


/***/ }),

/***/ "./node_modules/type/object/is.js":
/*!****************************************!*\
  !*** ./node_modules/type/object/is.js ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var isValue = __webpack_require__(/*! ../value/is */ "./node_modules/type/value/is.js");

// prettier-ignore
var possibleTypes = { "object": true, "function": true, "undefined": true /* document.all */ };

module.exports = function (value) {
	if (!isValue(value)) return false;
	return hasOwnProperty.call(possibleTypes, typeof value);
};


/***/ }),

/***/ "./node_modules/type/plain-function/is.js":
/*!************************************************!*\
  !*** ./node_modules/type/plain-function/is.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var isFunction = __webpack_require__(/*! ../function/is */ "./node_modules/type/function/is.js");

var classRe = /^\s*class[\s{/}]/, functionToString = Function.prototype.toString;

module.exports = function (value) {
	if (!isFunction(value)) return false;
	if (classRe.test(functionToString.call(value))) return false;
	return true;
};


/***/ }),

/***/ "./node_modules/type/prototype/is.js":
/*!*******************************************!*\
  !*** ./node_modules/type/prototype/is.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var isObject = __webpack_require__(/*! ../object/is */ "./node_modules/type/object/is.js");

module.exports = function (value) {
	if (!isObject(value)) return false;
	try {
		if (!value.constructor) return false;
		return value.constructor.prototype === value;
	} catch (error) {
		return false;
	}
};


/***/ }),

/***/ "./node_modules/type/value/is.js":
/*!***************************************!*\
  !*** ./node_modules/type/value/is.js ***!
  \***************************************/
/***/ ((module) => {

"use strict";


// ES3 safe
var _undefined = void 0;

module.exports = function (value) { return value !== _undefined && value !== null; };


/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/regex.js":
/*!*****************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/regex.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/rng.js":
/*!***************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/rng.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ rng)
/* harmony export */ });
// Unique ID creation requires a high quality random # generator. In the browser we therefore
// require the crypto API and do not support built-in fallback to lower quality random number
// generators (like Math.random()).
var getRandomValues;
var rnds8 = new Uint8Array(16);
function rng() {
  // lazy load so that environments that need to polyfill have a chance to do so
  if (!getRandomValues) {
    // getRandomValues needs to be invoked in a context where "this" is a Crypto implementation. Also,
    // find the complete implementation of crypto (msCrypto) on IE11.
    getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto !== 'undefined' && typeof msCrypto.getRandomValues === 'function' && msCrypto.getRandomValues.bind(msCrypto);

    if (!getRandomValues) {
      throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
    }
  }

  return getRandomValues(rnds8);
}

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/stringify.js":
/*!*********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/stringify.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validate.js */ "./node_modules/uuid/dist/esm-browser/validate.js");

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */

var byteToHex = [];

for (var i = 0; i < 256; ++i) {
  byteToHex.push((i + 0x100).toString(16).substr(1));
}

function stringify(arr) {
  var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  // Note: Be careful editing this code!  It's been tuned for performance
  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
  var uuid = (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase(); // Consistency check for valid UUID.  If this throws, it's likely due to one
  // of the following:
  // - One or more input array values don't map to a hex octet (leading to
  // "undefined" in the uuid)
  // - Invalid input values for the RFC `version` or `variant` fields

  if (!(0,_validate_js__WEBPACK_IMPORTED_MODULE_0__.default)(uuid)) {
    throw TypeError('Stringified UUID is invalid');
  }

  return uuid;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stringify);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/v4.js":
/*!**************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/v4.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _rng_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rng.js */ "./node_modules/uuid/dist/esm-browser/rng.js");
/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stringify.js */ "./node_modules/uuid/dist/esm-browser/stringify.js");



function v4(options, buf, offset) {
  options = options || {};
  var rnds = options.random || (options.rng || _rng_js__WEBPACK_IMPORTED_MODULE_0__.default)(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`

  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

  if (buf) {
    offset = offset || 0;

    for (var i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }

    return buf;
  }

  return (0,_stringify_js__WEBPACK_IMPORTED_MODULE_1__.default)(rnds);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (v4);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/validate.js":
/*!********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/validate.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _regex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./regex.js */ "./node_modules/uuid/dist/esm-browser/regex.js");


function validate(uuid) {
  return typeof uuid === 'string' && _regex_js__WEBPACK_IMPORTED_MODULE_0__.default.test(uuid);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validate);

/***/ }),

/***/ "./node_modules/virtual-dom/create-element.js":
/*!****************************************************!*\
  !*** ./node_modules/virtual-dom/create-element.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var createElement = __webpack_require__(/*! ./vdom/create-element.js */ "./node_modules/virtual-dom/vdom/create-element.js")

module.exports = createElement


/***/ }),

/***/ "./node_modules/virtual-dom/diff.js":
/*!******************************************!*\
  !*** ./node_modules/virtual-dom/diff.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var diff = __webpack_require__(/*! ./vtree/diff.js */ "./node_modules/virtual-dom/vtree/diff.js")

module.exports = diff


/***/ }),

/***/ "./node_modules/virtual-dom/h.js":
/*!***************************************!*\
  !*** ./node_modules/virtual-dom/h.js ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var h = __webpack_require__(/*! ./virtual-hyperscript/index.js */ "./node_modules/virtual-dom/virtual-hyperscript/index.js")

module.exports = h


/***/ }),

/***/ "./node_modules/virtual-dom/patch.js":
/*!*******************************************!*\
  !*** ./node_modules/virtual-dom/patch.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var patch = __webpack_require__(/*! ./vdom/patch.js */ "./node_modules/virtual-dom/vdom/patch.js")

module.exports = patch


/***/ }),

/***/ "./node_modules/virtual-dom/vdom/apply-properties.js":
/*!***********************************************************!*\
  !*** ./node_modules/virtual-dom/vdom/apply-properties.js ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isObject = __webpack_require__(/*! is-object */ "./node_modules/is-object/index.js")
var isHook = __webpack_require__(/*! ../vnode/is-vhook.js */ "./node_modules/virtual-dom/vnode/is-vhook.js")

module.exports = applyProperties

function applyProperties(node, props, previous) {
    for (var propName in props) {
        var propValue = props[propName]

        if (propValue === undefined) {
            removeProperty(node, propName, propValue, previous);
        } else if (isHook(propValue)) {
            removeProperty(node, propName, propValue, previous)
            if (propValue.hook) {
                propValue.hook(node,
                    propName,
                    previous ? previous[propName] : undefined)
            }
        } else {
            if (isObject(propValue)) {
                patchObject(node, props, previous, propName, propValue);
            } else {
                node[propName] = propValue
            }
        }
    }
}

function removeProperty(node, propName, propValue, previous) {
    if (previous) {
        var previousValue = previous[propName]

        if (!isHook(previousValue)) {
            if (propName === "attributes") {
                for (var attrName in previousValue) {
                    node.removeAttribute(attrName)
                }
            } else if (propName === "style") {
                for (var i in previousValue) {
                    node.style[i] = ""
                }
            } else if (typeof previousValue === "string") {
                node[propName] = ""
            } else {
                node[propName] = null
            }
        } else if (previousValue.unhook) {
            previousValue.unhook(node, propName, propValue)
        }
    }
}

function patchObject(node, props, previous, propName, propValue) {
    var previousValue = previous ? previous[propName] : undefined

    // Set attributes
    if (propName === "attributes") {
        for (var attrName in propValue) {
            var attrValue = propValue[attrName]

            if (attrValue === undefined) {
                node.removeAttribute(attrName)
            } else {
                node.setAttribute(attrName, attrValue)
            }
        }

        return
    }

    if(previousValue && isObject(previousValue) &&
        getPrototype(previousValue) !== getPrototype(propValue)) {
        node[propName] = propValue
        return
    }

    if (!isObject(node[propName])) {
        node[propName] = {}
    }

    var replacer = propName === "style" ? "" : undefined

    for (var k in propValue) {
        var value = propValue[k]
        node[propName][k] = (value === undefined) ? replacer : value
    }
}

function getPrototype(value) {
    if (Object.getPrototypeOf) {
        return Object.getPrototypeOf(value)
    } else if (value.__proto__) {
        return value.__proto__
    } else if (value.constructor) {
        return value.constructor.prototype
    }
}


/***/ }),

/***/ "./node_modules/virtual-dom/vdom/create-element.js":
/*!*********************************************************!*\
  !*** ./node_modules/virtual-dom/vdom/create-element.js ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var document = __webpack_require__(/*! global/document */ "./node_modules/global/document.js")

var applyProperties = __webpack_require__(/*! ./apply-properties */ "./node_modules/virtual-dom/vdom/apply-properties.js")

var isVNode = __webpack_require__(/*! ../vnode/is-vnode.js */ "./node_modules/virtual-dom/vnode/is-vnode.js")
var isVText = __webpack_require__(/*! ../vnode/is-vtext.js */ "./node_modules/virtual-dom/vnode/is-vtext.js")
var isWidget = __webpack_require__(/*! ../vnode/is-widget.js */ "./node_modules/virtual-dom/vnode/is-widget.js")
var handleThunk = __webpack_require__(/*! ../vnode/handle-thunk.js */ "./node_modules/virtual-dom/vnode/handle-thunk.js")

module.exports = createElement

function createElement(vnode, opts) {
    var doc = opts ? opts.document || document : document
    var warn = opts ? opts.warn : null

    vnode = handleThunk(vnode).a

    if (isWidget(vnode)) {
        return vnode.init()
    } else if (isVText(vnode)) {
        return doc.createTextNode(vnode.text)
    } else if (!isVNode(vnode)) {
        if (warn) {
            warn("Item is not a valid virtual dom node", vnode)
        }
        return null
    }

    var node = (vnode.namespace === null) ?
        doc.createElement(vnode.tagName) :
        doc.createElementNS(vnode.namespace, vnode.tagName)

    var props = vnode.properties
    applyProperties(node, props)

    var children = vnode.children

    for (var i = 0; i < children.length; i++) {
        var childNode = createElement(children[i], opts)
        if (childNode) {
            node.appendChild(childNode)
        }
    }

    return node
}


/***/ }),

/***/ "./node_modules/virtual-dom/vdom/dom-index.js":
/*!****************************************************!*\
  !*** ./node_modules/virtual-dom/vdom/dom-index.js ***!
  \****************************************************/
/***/ ((module) => {

// Maps a virtual DOM tree onto a real DOM tree in an efficient manner.
// We don't want to read all of the DOM nodes in the tree so we use
// the in-order tree indexing to eliminate recursion down certain branches.
// We only recurse into a DOM node if we know that it contains a child of
// interest.

var noChild = {}

module.exports = domIndex

function domIndex(rootNode, tree, indices, nodes) {
    if (!indices || indices.length === 0) {
        return {}
    } else {
        indices.sort(ascending)
        return recurse(rootNode, tree, indices, nodes, 0)
    }
}

function recurse(rootNode, tree, indices, nodes, rootIndex) {
    nodes = nodes || {}


    if (rootNode) {
        if (indexInRange(indices, rootIndex, rootIndex)) {
            nodes[rootIndex] = rootNode
        }

        var vChildren = tree.children

        if (vChildren) {

            var childNodes = rootNode.childNodes

            for (var i = 0; i < tree.children.length; i++) {
                rootIndex += 1

                var vChild = vChildren[i] || noChild
                var nextIndex = rootIndex + (vChild.count || 0)

                // skip recursion down the tree if there are no nodes down here
                if (indexInRange(indices, rootIndex, nextIndex)) {
                    recurse(childNodes[i], vChild, indices, nodes, rootIndex)
                }

                rootIndex = nextIndex
            }
        }
    }

    return nodes
}

// Binary search for an index in the interval [left, right]
function indexInRange(indices, left, right) {
    if (indices.length === 0) {
        return false
    }

    var minIndex = 0
    var maxIndex = indices.length - 1
    var currentIndex
    var currentItem

    while (minIndex <= maxIndex) {
        currentIndex = ((maxIndex + minIndex) / 2) >> 0
        currentItem = indices[currentIndex]

        if (minIndex === maxIndex) {
            return currentItem >= left && currentItem <= right
        } else if (currentItem < left) {
            minIndex = currentIndex + 1
        } else  if (currentItem > right) {
            maxIndex = currentIndex - 1
        } else {
            return true
        }
    }

    return false;
}

function ascending(a, b) {
    return a > b ? 1 : -1
}


/***/ }),

/***/ "./node_modules/virtual-dom/vdom/patch-op.js":
/*!***************************************************!*\
  !*** ./node_modules/virtual-dom/vdom/patch-op.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var applyProperties = __webpack_require__(/*! ./apply-properties */ "./node_modules/virtual-dom/vdom/apply-properties.js")

var isWidget = __webpack_require__(/*! ../vnode/is-widget.js */ "./node_modules/virtual-dom/vnode/is-widget.js")
var VPatch = __webpack_require__(/*! ../vnode/vpatch.js */ "./node_modules/virtual-dom/vnode/vpatch.js")

var updateWidget = __webpack_require__(/*! ./update-widget */ "./node_modules/virtual-dom/vdom/update-widget.js")

module.exports = applyPatch

function applyPatch(vpatch, domNode, renderOptions) {
    var type = vpatch.type
    var vNode = vpatch.vNode
    var patch = vpatch.patch

    switch (type) {
        case VPatch.REMOVE:
            return removeNode(domNode, vNode)
        case VPatch.INSERT:
            return insertNode(domNode, patch, renderOptions)
        case VPatch.VTEXT:
            return stringPatch(domNode, vNode, patch, renderOptions)
        case VPatch.WIDGET:
            return widgetPatch(domNode, vNode, patch, renderOptions)
        case VPatch.VNODE:
            return vNodePatch(domNode, vNode, patch, renderOptions)
        case VPatch.ORDER:
            reorderChildren(domNode, patch)
            return domNode
        case VPatch.PROPS:
            applyProperties(domNode, patch, vNode.properties)
            return domNode
        case VPatch.THUNK:
            return replaceRoot(domNode,
                renderOptions.patch(domNode, patch, renderOptions))
        default:
            return domNode
    }
}

function removeNode(domNode, vNode) {
    var parentNode = domNode.parentNode

    if (parentNode) {
        parentNode.removeChild(domNode)
    }

    destroyWidget(domNode, vNode);

    return null
}

function insertNode(parentNode, vNode, renderOptions) {
    var newNode = renderOptions.render(vNode, renderOptions)

    if (parentNode) {
        parentNode.appendChild(newNode)
    }

    return parentNode
}

function stringPatch(domNode, leftVNode, vText, renderOptions) {
    var newNode

    if (domNode.nodeType === 3) {
        domNode.replaceData(0, domNode.length, vText.text)
        newNode = domNode
    } else {
        var parentNode = domNode.parentNode
        newNode = renderOptions.render(vText, renderOptions)

        if (parentNode && newNode !== domNode) {
            parentNode.replaceChild(newNode, domNode)
        }
    }

    return newNode
}

function widgetPatch(domNode, leftVNode, widget, renderOptions) {
    var updating = updateWidget(leftVNode, widget)
    var newNode

    if (updating) {
        newNode = widget.update(leftVNode, domNode) || domNode
    } else {
        newNode = renderOptions.render(widget, renderOptions)
    }

    var parentNode = domNode.parentNode

    if (parentNode && newNode !== domNode) {
        parentNode.replaceChild(newNode, domNode)
    }

    if (!updating) {
        destroyWidget(domNode, leftVNode)
    }

    return newNode
}

function vNodePatch(domNode, leftVNode, vNode, renderOptions) {
    var parentNode = domNode.parentNode
    var newNode = renderOptions.render(vNode, renderOptions)

    if (parentNode && newNode !== domNode) {
        parentNode.replaceChild(newNode, domNode)
    }

    return newNode
}

function destroyWidget(domNode, w) {
    if (typeof w.destroy === "function" && isWidget(w)) {
        w.destroy(domNode)
    }
}

function reorderChildren(domNode, moves) {
    var childNodes = domNode.childNodes
    var keyMap = {}
    var node
    var remove
    var insert

    for (var i = 0; i < moves.removes.length; i++) {
        remove = moves.removes[i]
        node = childNodes[remove.from]
        if (remove.key) {
            keyMap[remove.key] = node
        }
        domNode.removeChild(node)
    }

    var length = childNodes.length
    for (var j = 0; j < moves.inserts.length; j++) {
        insert = moves.inserts[j]
        node = keyMap[insert.key]
        // this is the weirdest bug i've ever seen in webkit
        domNode.insertBefore(node, insert.to >= length++ ? null : childNodes[insert.to])
    }
}

function replaceRoot(oldRoot, newRoot) {
    if (oldRoot && newRoot && oldRoot !== newRoot && oldRoot.parentNode) {
        oldRoot.parentNode.replaceChild(newRoot, oldRoot)
    }

    return newRoot;
}


/***/ }),

/***/ "./node_modules/virtual-dom/vdom/patch.js":
/*!************************************************!*\
  !*** ./node_modules/virtual-dom/vdom/patch.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var document = __webpack_require__(/*! global/document */ "./node_modules/global/document.js")
var isArray = __webpack_require__(/*! x-is-array */ "./node_modules/x-is-array/index.js")

var render = __webpack_require__(/*! ./create-element */ "./node_modules/virtual-dom/vdom/create-element.js")
var domIndex = __webpack_require__(/*! ./dom-index */ "./node_modules/virtual-dom/vdom/dom-index.js")
var patchOp = __webpack_require__(/*! ./patch-op */ "./node_modules/virtual-dom/vdom/patch-op.js")
module.exports = patch

function patch(rootNode, patches, renderOptions) {
    renderOptions = renderOptions || {}
    renderOptions.patch = renderOptions.patch && renderOptions.patch !== patch
        ? renderOptions.patch
        : patchRecursive
    renderOptions.render = renderOptions.render || render

    return renderOptions.patch(rootNode, patches, renderOptions)
}

function patchRecursive(rootNode, patches, renderOptions) {
    var indices = patchIndices(patches)

    if (indices.length === 0) {
        return rootNode
    }

    var index = domIndex(rootNode, patches.a, indices)
    var ownerDocument = rootNode.ownerDocument

    if (!renderOptions.document && ownerDocument !== document) {
        renderOptions.document = ownerDocument
    }

    for (var i = 0; i < indices.length; i++) {
        var nodeIndex = indices[i]
        rootNode = applyPatch(rootNode,
            index[nodeIndex],
            patches[nodeIndex],
            renderOptions)
    }

    return rootNode
}

function applyPatch(rootNode, domNode, patchList, renderOptions) {
    if (!domNode) {
        return rootNode
    }

    var newNode

    if (isArray(patchList)) {
        for (var i = 0; i < patchList.length; i++) {
            newNode = patchOp(patchList[i], domNode, renderOptions)

            if (domNode === rootNode) {
                rootNode = newNode
            }
        }
    } else {
        newNode = patchOp(patchList, domNode, renderOptions)

        if (domNode === rootNode) {
            rootNode = newNode
        }
    }

    return rootNode
}

function patchIndices(patches) {
    var indices = []

    for (var key in patches) {
        if (key !== "a") {
            indices.push(Number(key))
        }
    }

    return indices
}


/***/ }),

/***/ "./node_modules/virtual-dom/vdom/update-widget.js":
/*!********************************************************!*\
  !*** ./node_modules/virtual-dom/vdom/update-widget.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isWidget = __webpack_require__(/*! ../vnode/is-widget.js */ "./node_modules/virtual-dom/vnode/is-widget.js")

module.exports = updateWidget

function updateWidget(a, b) {
    if (isWidget(a) && isWidget(b)) {
        if ("name" in a && "name" in b) {
            return a.id === b.id
        } else {
            return a.init === b.init
        }
    }

    return false
}


/***/ }),

/***/ "./node_modules/virtual-dom/virtual-hyperscript/hooks/ev-hook.js":
/*!***********************************************************************!*\
  !*** ./node_modules/virtual-dom/virtual-hyperscript/hooks/ev-hook.js ***!
  \***********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var EvStore = __webpack_require__(/*! ev-store */ "./node_modules/ev-store/index.js");

module.exports = EvHook;

function EvHook(value) {
    if (!(this instanceof EvHook)) {
        return new EvHook(value);
    }

    this.value = value;
}

EvHook.prototype.hook = function (node, propertyName) {
    var es = EvStore(node);
    var propName = propertyName.substr(3);

    es[propName] = this.value;
};

EvHook.prototype.unhook = function(node, propertyName) {
    var es = EvStore(node);
    var propName = propertyName.substr(3);

    es[propName] = undefined;
};


/***/ }),

/***/ "./node_modules/virtual-dom/virtual-hyperscript/hooks/soft-set-hook.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/virtual-dom/virtual-hyperscript/hooks/soft-set-hook.js ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";


module.exports = SoftSetHook;

function SoftSetHook(value) {
    if (!(this instanceof SoftSetHook)) {
        return new SoftSetHook(value);
    }

    this.value = value;
}

SoftSetHook.prototype.hook = function (node, propertyName) {
    if (node[propertyName] !== this.value) {
        node[propertyName] = this.value;
    }
};


/***/ }),

/***/ "./node_modules/virtual-dom/virtual-hyperscript/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/virtual-dom/virtual-hyperscript/index.js ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var isArray = __webpack_require__(/*! x-is-array */ "./node_modules/x-is-array/index.js");

var VNode = __webpack_require__(/*! ../vnode/vnode.js */ "./node_modules/virtual-dom/vnode/vnode.js");
var VText = __webpack_require__(/*! ../vnode/vtext.js */ "./node_modules/virtual-dom/vnode/vtext.js");
var isVNode = __webpack_require__(/*! ../vnode/is-vnode */ "./node_modules/virtual-dom/vnode/is-vnode.js");
var isVText = __webpack_require__(/*! ../vnode/is-vtext */ "./node_modules/virtual-dom/vnode/is-vtext.js");
var isWidget = __webpack_require__(/*! ../vnode/is-widget */ "./node_modules/virtual-dom/vnode/is-widget.js");
var isHook = __webpack_require__(/*! ../vnode/is-vhook */ "./node_modules/virtual-dom/vnode/is-vhook.js");
var isVThunk = __webpack_require__(/*! ../vnode/is-thunk */ "./node_modules/virtual-dom/vnode/is-thunk.js");

var parseTag = __webpack_require__(/*! ./parse-tag.js */ "./node_modules/virtual-dom/virtual-hyperscript/parse-tag.js");
var softSetHook = __webpack_require__(/*! ./hooks/soft-set-hook.js */ "./node_modules/virtual-dom/virtual-hyperscript/hooks/soft-set-hook.js");
var evHook = __webpack_require__(/*! ./hooks/ev-hook.js */ "./node_modules/virtual-dom/virtual-hyperscript/hooks/ev-hook.js");

module.exports = h;

function h(tagName, properties, children) {
    var childNodes = [];
    var tag, props, key, namespace;

    if (!children && isChildren(properties)) {
        children = properties;
        props = {};
    }

    props = props || properties || {};
    tag = parseTag(tagName, props);

    // support keys
    if (props.hasOwnProperty('key')) {
        key = props.key;
        props.key = undefined;
    }

    // support namespace
    if (props.hasOwnProperty('namespace')) {
        namespace = props.namespace;
        props.namespace = undefined;
    }

    // fix cursor bug
    if (tag === 'INPUT' &&
        !namespace &&
        props.hasOwnProperty('value') &&
        props.value !== undefined &&
        !isHook(props.value)
    ) {
        props.value = softSetHook(props.value);
    }

    transformProperties(props);

    if (children !== undefined && children !== null) {
        addChild(children, childNodes, tag, props);
    }


    return new VNode(tag, props, childNodes, key, namespace);
}

function addChild(c, childNodes, tag, props) {
    if (typeof c === 'string') {
        childNodes.push(new VText(c));
    } else if (typeof c === 'number') {
        childNodes.push(new VText(String(c)));
    } else if (isChild(c)) {
        childNodes.push(c);
    } else if (isArray(c)) {
        for (var i = 0; i < c.length; i++) {
            addChild(c[i], childNodes, tag, props);
        }
    } else if (c === null || c === undefined) {
        return;
    } else {
        throw UnexpectedVirtualElement({
            foreignObject: c,
            parentVnode: {
                tagName: tag,
                properties: props
            }
        });
    }
}

function transformProperties(props) {
    for (var propName in props) {
        if (props.hasOwnProperty(propName)) {
            var value = props[propName];

            if (isHook(value)) {
                continue;
            }

            if (propName.substr(0, 3) === 'ev-') {
                // add ev-foo support
                props[propName] = evHook(value);
            }
        }
    }
}

function isChild(x) {
    return isVNode(x) || isVText(x) || isWidget(x) || isVThunk(x);
}

function isChildren(x) {
    return typeof x === 'string' || isArray(x) || isChild(x);
}

function UnexpectedVirtualElement(data) {
    var err = new Error();

    err.type = 'virtual-hyperscript.unexpected.virtual-element';
    err.message = 'Unexpected virtual child passed to h().\n' +
        'Expected a VNode / Vthunk / VWidget / string but:\n' +
        'got:\n' +
        errorString(data.foreignObject) +
        '.\n' +
        'The parent vnode is:\n' +
        errorString(data.parentVnode)
        '\n' +
        'Suggested fix: change your `h(..., [ ... ])` callsite.';
    err.foreignObject = data.foreignObject;
    err.parentVnode = data.parentVnode;

    return err;
}

function errorString(obj) {
    try {
        return JSON.stringify(obj, null, '    ');
    } catch (e) {
        return String(obj);
    }
}


/***/ }),

/***/ "./node_modules/virtual-dom/virtual-hyperscript/parse-tag.js":
/*!*******************************************************************!*\
  !*** ./node_modules/virtual-dom/virtual-hyperscript/parse-tag.js ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var split = __webpack_require__(/*! browser-split */ "./node_modules/browser-split/index.js");

var classIdSplit = /([\.#]?[a-zA-Z0-9\u007F-\uFFFF_:-]+)/;
var notClassId = /^\.|#/;

module.exports = parseTag;

function parseTag(tag, props) {
    if (!tag) {
        return 'DIV';
    }

    var noId = !(props.hasOwnProperty('id'));

    var tagParts = split(tag, classIdSplit);
    var tagName = null;

    if (notClassId.test(tagParts[1])) {
        tagName = 'DIV';
    }

    var classes, part, type, i;

    for (i = 0; i < tagParts.length; i++) {
        part = tagParts[i];

        if (!part) {
            continue;
        }

        type = part.charAt(0);

        if (!tagName) {
            tagName = part;
        } else if (type === '.') {
            classes = classes || [];
            classes.push(part.substring(1, part.length));
        } else if (type === '#' && noId) {
            props.id = part.substring(1, part.length);
        }
    }

    if (classes) {
        if (props.className) {
            classes.push(props.className);
        }

        props.className = classes.join(' ');
    }

    return props.namespace ? tagName : tagName.toUpperCase();
}


/***/ }),

/***/ "./node_modules/virtual-dom/vnode/handle-thunk.js":
/*!********************************************************!*\
  !*** ./node_modules/virtual-dom/vnode/handle-thunk.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isVNode = __webpack_require__(/*! ./is-vnode */ "./node_modules/virtual-dom/vnode/is-vnode.js")
var isVText = __webpack_require__(/*! ./is-vtext */ "./node_modules/virtual-dom/vnode/is-vtext.js")
var isWidget = __webpack_require__(/*! ./is-widget */ "./node_modules/virtual-dom/vnode/is-widget.js")
var isThunk = __webpack_require__(/*! ./is-thunk */ "./node_modules/virtual-dom/vnode/is-thunk.js")

module.exports = handleThunk

function handleThunk(a, b) {
    var renderedA = a
    var renderedB = b

    if (isThunk(b)) {
        renderedB = renderThunk(b, a)
    }

    if (isThunk(a)) {
        renderedA = renderThunk(a, null)
    }

    return {
        a: renderedA,
        b: renderedB
    }
}

function renderThunk(thunk, previous) {
    var renderedThunk = thunk.vnode

    if (!renderedThunk) {
        renderedThunk = thunk.vnode = thunk.render(previous)
    }

    if (!(isVNode(renderedThunk) ||
            isVText(renderedThunk) ||
            isWidget(renderedThunk))) {
        throw new Error("thunk did not return a valid node");
    }

    return renderedThunk
}


/***/ }),

/***/ "./node_modules/virtual-dom/vnode/is-thunk.js":
/*!****************************************************!*\
  !*** ./node_modules/virtual-dom/vnode/is-thunk.js ***!
  \****************************************************/
/***/ ((module) => {

module.exports = isThunk

function isThunk(t) {
    return t && t.type === "Thunk"
}


/***/ }),

/***/ "./node_modules/virtual-dom/vnode/is-vhook.js":
/*!****************************************************!*\
  !*** ./node_modules/virtual-dom/vnode/is-vhook.js ***!
  \****************************************************/
/***/ ((module) => {

module.exports = isHook

function isHook(hook) {
    return hook &&
      (typeof hook.hook === "function" && !hook.hasOwnProperty("hook") ||
       typeof hook.unhook === "function" && !hook.hasOwnProperty("unhook"))
}


/***/ }),

/***/ "./node_modules/virtual-dom/vnode/is-vnode.js":
/*!****************************************************!*\
  !*** ./node_modules/virtual-dom/vnode/is-vnode.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var version = __webpack_require__(/*! ./version */ "./node_modules/virtual-dom/vnode/version.js")

module.exports = isVirtualNode

function isVirtualNode(x) {
    return x && x.type === "VirtualNode" && x.version === version
}


/***/ }),

/***/ "./node_modules/virtual-dom/vnode/is-vtext.js":
/*!****************************************************!*\
  !*** ./node_modules/virtual-dom/vnode/is-vtext.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var version = __webpack_require__(/*! ./version */ "./node_modules/virtual-dom/vnode/version.js")

module.exports = isVirtualText

function isVirtualText(x) {
    return x && x.type === "VirtualText" && x.version === version
}


/***/ }),

/***/ "./node_modules/virtual-dom/vnode/is-widget.js":
/*!*****************************************************!*\
  !*** ./node_modules/virtual-dom/vnode/is-widget.js ***!
  \*****************************************************/
/***/ ((module) => {

module.exports = isWidget

function isWidget(w) {
    return w && w.type === "Widget"
}


/***/ }),

/***/ "./node_modules/virtual-dom/vnode/version.js":
/*!***************************************************!*\
  !*** ./node_modules/virtual-dom/vnode/version.js ***!
  \***************************************************/
/***/ ((module) => {

module.exports = "2"


/***/ }),

/***/ "./node_modules/virtual-dom/vnode/vnode.js":
/*!*************************************************!*\
  !*** ./node_modules/virtual-dom/vnode/vnode.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var version = __webpack_require__(/*! ./version */ "./node_modules/virtual-dom/vnode/version.js")
var isVNode = __webpack_require__(/*! ./is-vnode */ "./node_modules/virtual-dom/vnode/is-vnode.js")
var isWidget = __webpack_require__(/*! ./is-widget */ "./node_modules/virtual-dom/vnode/is-widget.js")
var isThunk = __webpack_require__(/*! ./is-thunk */ "./node_modules/virtual-dom/vnode/is-thunk.js")
var isVHook = __webpack_require__(/*! ./is-vhook */ "./node_modules/virtual-dom/vnode/is-vhook.js")

module.exports = VirtualNode

var noProperties = {}
var noChildren = []

function VirtualNode(tagName, properties, children, key, namespace) {
    this.tagName = tagName
    this.properties = properties || noProperties
    this.children = children || noChildren
    this.key = key != null ? String(key) : undefined
    this.namespace = (typeof namespace === "string") ? namespace : null

    var count = (children && children.length) || 0
    var descendants = 0
    var hasWidgets = false
    var hasThunks = false
    var descendantHooks = false
    var hooks

    for (var propName in properties) {
        if (properties.hasOwnProperty(propName)) {
            var property = properties[propName]
            if (isVHook(property) && property.unhook) {
                if (!hooks) {
                    hooks = {}
                }

                hooks[propName] = property
            }
        }
    }

    for (var i = 0; i < count; i++) {
        var child = children[i]
        if (isVNode(child)) {
            descendants += child.count || 0

            if (!hasWidgets && child.hasWidgets) {
                hasWidgets = true
            }

            if (!hasThunks && child.hasThunks) {
                hasThunks = true
            }

            if (!descendantHooks && (child.hooks || child.descendantHooks)) {
                descendantHooks = true
            }
        } else if (!hasWidgets && isWidget(child)) {
            if (typeof child.destroy === "function") {
                hasWidgets = true
            }
        } else if (!hasThunks && isThunk(child)) {
            hasThunks = true;
        }
    }

    this.count = count + descendants
    this.hasWidgets = hasWidgets
    this.hasThunks = hasThunks
    this.hooks = hooks
    this.descendantHooks = descendantHooks
}

VirtualNode.prototype.version = version
VirtualNode.prototype.type = "VirtualNode"


/***/ }),

/***/ "./node_modules/virtual-dom/vnode/vpatch.js":
/*!**************************************************!*\
  !*** ./node_modules/virtual-dom/vnode/vpatch.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var version = __webpack_require__(/*! ./version */ "./node_modules/virtual-dom/vnode/version.js")

VirtualPatch.NONE = 0
VirtualPatch.VTEXT = 1
VirtualPatch.VNODE = 2
VirtualPatch.WIDGET = 3
VirtualPatch.PROPS = 4
VirtualPatch.ORDER = 5
VirtualPatch.INSERT = 6
VirtualPatch.REMOVE = 7
VirtualPatch.THUNK = 8

module.exports = VirtualPatch

function VirtualPatch(type, vNode, patch) {
    this.type = Number(type)
    this.vNode = vNode
    this.patch = patch
}

VirtualPatch.prototype.version = version
VirtualPatch.prototype.type = "VirtualPatch"


/***/ }),

/***/ "./node_modules/virtual-dom/vnode/vtext.js":
/*!*************************************************!*\
  !*** ./node_modules/virtual-dom/vnode/vtext.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var version = __webpack_require__(/*! ./version */ "./node_modules/virtual-dom/vnode/version.js")

module.exports = VirtualText

function VirtualText(text) {
    this.text = String(text)
}

VirtualText.prototype.version = version
VirtualText.prototype.type = "VirtualText"


/***/ }),

/***/ "./node_modules/virtual-dom/vtree/diff-props.js":
/*!******************************************************!*\
  !*** ./node_modules/virtual-dom/vtree/diff-props.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isObject = __webpack_require__(/*! is-object */ "./node_modules/is-object/index.js")
var isHook = __webpack_require__(/*! ../vnode/is-vhook */ "./node_modules/virtual-dom/vnode/is-vhook.js")

module.exports = diffProps

function diffProps(a, b) {
    var diff

    for (var aKey in a) {
        if (!(aKey in b)) {
            diff = diff || {}
            diff[aKey] = undefined
        }

        var aValue = a[aKey]
        var bValue = b[aKey]

        if (aValue === bValue) {
            continue
        } else if (isObject(aValue) && isObject(bValue)) {
            if (getPrototype(bValue) !== getPrototype(aValue)) {
                diff = diff || {}
                diff[aKey] = bValue
            } else if (isHook(bValue)) {
                 diff = diff || {}
                 diff[aKey] = bValue
            } else {
                var objectDiff = diffProps(aValue, bValue)
                if (objectDiff) {
                    diff = diff || {}
                    diff[aKey] = objectDiff
                }
            }
        } else {
            diff = diff || {}
            diff[aKey] = bValue
        }
    }

    for (var bKey in b) {
        if (!(bKey in a)) {
            diff = diff || {}
            diff[bKey] = b[bKey]
        }
    }

    return diff
}

function getPrototype(value) {
  if (Object.getPrototypeOf) {
    return Object.getPrototypeOf(value)
  } else if (value.__proto__) {
    return value.__proto__
  } else if (value.constructor) {
    return value.constructor.prototype
  }
}


/***/ }),

/***/ "./node_modules/virtual-dom/vtree/diff.js":
/*!************************************************!*\
  !*** ./node_modules/virtual-dom/vtree/diff.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isArray = __webpack_require__(/*! x-is-array */ "./node_modules/x-is-array/index.js")

var VPatch = __webpack_require__(/*! ../vnode/vpatch */ "./node_modules/virtual-dom/vnode/vpatch.js")
var isVNode = __webpack_require__(/*! ../vnode/is-vnode */ "./node_modules/virtual-dom/vnode/is-vnode.js")
var isVText = __webpack_require__(/*! ../vnode/is-vtext */ "./node_modules/virtual-dom/vnode/is-vtext.js")
var isWidget = __webpack_require__(/*! ../vnode/is-widget */ "./node_modules/virtual-dom/vnode/is-widget.js")
var isThunk = __webpack_require__(/*! ../vnode/is-thunk */ "./node_modules/virtual-dom/vnode/is-thunk.js")
var handleThunk = __webpack_require__(/*! ../vnode/handle-thunk */ "./node_modules/virtual-dom/vnode/handle-thunk.js")

var diffProps = __webpack_require__(/*! ./diff-props */ "./node_modules/virtual-dom/vtree/diff-props.js")

module.exports = diff

function diff(a, b) {
    var patch = { a: a }
    walk(a, b, patch, 0)
    return patch
}

function walk(a, b, patch, index) {
    if (a === b) {
        return
    }

    var apply = patch[index]
    var applyClear = false

    if (isThunk(a) || isThunk(b)) {
        thunks(a, b, patch, index)
    } else if (b == null) {

        // If a is a widget we will add a remove patch for it
        // Otherwise any child widgets/hooks must be destroyed.
        // This prevents adding two remove patches for a widget.
        if (!isWidget(a)) {
            clearState(a, patch, index)
            apply = patch[index]
        }

        apply = appendPatch(apply, new VPatch(VPatch.REMOVE, a, b))
    } else if (isVNode(b)) {
        if (isVNode(a)) {
            if (a.tagName === b.tagName &&
                a.namespace === b.namespace &&
                a.key === b.key) {
                var propsPatch = diffProps(a.properties, b.properties)
                if (propsPatch) {
                    apply = appendPatch(apply,
                        new VPatch(VPatch.PROPS, a, propsPatch))
                }
                apply = diffChildren(a, b, patch, apply, index)
            } else {
                apply = appendPatch(apply, new VPatch(VPatch.VNODE, a, b))
                applyClear = true
            }
        } else {
            apply = appendPatch(apply, new VPatch(VPatch.VNODE, a, b))
            applyClear = true
        }
    } else if (isVText(b)) {
        if (!isVText(a)) {
            apply = appendPatch(apply, new VPatch(VPatch.VTEXT, a, b))
            applyClear = true
        } else if (a.text !== b.text) {
            apply = appendPatch(apply, new VPatch(VPatch.VTEXT, a, b))
        }
    } else if (isWidget(b)) {
        if (!isWidget(a)) {
            applyClear = true
        }

        apply = appendPatch(apply, new VPatch(VPatch.WIDGET, a, b))
    }

    if (apply) {
        patch[index] = apply
    }

    if (applyClear) {
        clearState(a, patch, index)
    }
}

function diffChildren(a, b, patch, apply, index) {
    var aChildren = a.children
    var orderedSet = reorder(aChildren, b.children)
    var bChildren = orderedSet.children

    var aLen = aChildren.length
    var bLen = bChildren.length
    var len = aLen > bLen ? aLen : bLen

    for (var i = 0; i < len; i++) {
        var leftNode = aChildren[i]
        var rightNode = bChildren[i]
        index += 1

        if (!leftNode) {
            if (rightNode) {
                // Excess nodes in b need to be added
                apply = appendPatch(apply,
                    new VPatch(VPatch.INSERT, null, rightNode))
            }
        } else {
            walk(leftNode, rightNode, patch, index)
        }

        if (isVNode(leftNode) && leftNode.count) {
            index += leftNode.count
        }
    }

    if (orderedSet.moves) {
        // Reorder nodes last
        apply = appendPatch(apply, new VPatch(
            VPatch.ORDER,
            a,
            orderedSet.moves
        ))
    }

    return apply
}

function clearState(vNode, patch, index) {
    // TODO: Make this a single walk, not two
    unhook(vNode, patch, index)
    destroyWidgets(vNode, patch, index)
}

// Patch records for all destroyed widgets must be added because we need
// a DOM node reference for the destroy function
function destroyWidgets(vNode, patch, index) {
    if (isWidget(vNode)) {
        if (typeof vNode.destroy === "function") {
            patch[index] = appendPatch(
                patch[index],
                new VPatch(VPatch.REMOVE, vNode, null)
            )
        }
    } else if (isVNode(vNode) && (vNode.hasWidgets || vNode.hasThunks)) {
        var children = vNode.children
        var len = children.length
        for (var i = 0; i < len; i++) {
            var child = children[i]
            index += 1

            destroyWidgets(child, patch, index)

            if (isVNode(child) && child.count) {
                index += child.count
            }
        }
    } else if (isThunk(vNode)) {
        thunks(vNode, null, patch, index)
    }
}

// Create a sub-patch for thunks
function thunks(a, b, patch, index) {
    var nodes = handleThunk(a, b)
    var thunkPatch = diff(nodes.a, nodes.b)
    if (hasPatches(thunkPatch)) {
        patch[index] = new VPatch(VPatch.THUNK, null, thunkPatch)
    }
}

function hasPatches(patch) {
    for (var index in patch) {
        if (index !== "a") {
            return true
        }
    }

    return false
}

// Execute hooks when two nodes are identical
function unhook(vNode, patch, index) {
    if (isVNode(vNode)) {
        if (vNode.hooks) {
            patch[index] = appendPatch(
                patch[index],
                new VPatch(
                    VPatch.PROPS,
                    vNode,
                    undefinedKeys(vNode.hooks)
                )
            )
        }

        if (vNode.descendantHooks || vNode.hasThunks) {
            var children = vNode.children
            var len = children.length
            for (var i = 0; i < len; i++) {
                var child = children[i]
                index += 1

                unhook(child, patch, index)

                if (isVNode(child) && child.count) {
                    index += child.count
                }
            }
        }
    } else if (isThunk(vNode)) {
        thunks(vNode, null, patch, index)
    }
}

function undefinedKeys(obj) {
    var result = {}

    for (var key in obj) {
        result[key] = undefined
    }

    return result
}

// List diff, naive left to right reordering
function reorder(aChildren, bChildren) {
    // O(M) time, O(M) memory
    var bChildIndex = keyIndex(bChildren)
    var bKeys = bChildIndex.keys
    var bFree = bChildIndex.free

    if (bFree.length === bChildren.length) {
        return {
            children: bChildren,
            moves: null
        }
    }

    // O(N) time, O(N) memory
    var aChildIndex = keyIndex(aChildren)
    var aKeys = aChildIndex.keys
    var aFree = aChildIndex.free

    if (aFree.length === aChildren.length) {
        return {
            children: bChildren,
            moves: null
        }
    }

    // O(MAX(N, M)) memory
    var newChildren = []

    var freeIndex = 0
    var freeCount = bFree.length
    var deletedItems = 0

    // Iterate through a and match a node in b
    // O(N) time,
    for (var i = 0 ; i < aChildren.length; i++) {
        var aItem = aChildren[i]
        var itemIndex

        if (aItem.key) {
            if (bKeys.hasOwnProperty(aItem.key)) {
                // Match up the old keys
                itemIndex = bKeys[aItem.key]
                newChildren.push(bChildren[itemIndex])

            } else {
                // Remove old keyed items
                itemIndex = i - deletedItems++
                newChildren.push(null)
            }
        } else {
            // Match the item in a with the next free item in b
            if (freeIndex < freeCount) {
                itemIndex = bFree[freeIndex++]
                newChildren.push(bChildren[itemIndex])
            } else {
                // There are no free items in b to match with
                // the free items in a, so the extra free nodes
                // are deleted.
                itemIndex = i - deletedItems++
                newChildren.push(null)
            }
        }
    }

    var lastFreeIndex = freeIndex >= bFree.length ?
        bChildren.length :
        bFree[freeIndex]

    // Iterate through b and append any new keys
    // O(M) time
    for (var j = 0; j < bChildren.length; j++) {
        var newItem = bChildren[j]

        if (newItem.key) {
            if (!aKeys.hasOwnProperty(newItem.key)) {
                // Add any new keyed items
                // We are adding new items to the end and then sorting them
                // in place. In future we should insert new items in place.
                newChildren.push(newItem)
            }
        } else if (j >= lastFreeIndex) {
            // Add any leftover non-keyed items
            newChildren.push(newItem)
        }
    }

    var simulate = newChildren.slice()
    var simulateIndex = 0
    var removes = []
    var inserts = []
    var simulateItem

    for (var k = 0; k < bChildren.length;) {
        var wantedItem = bChildren[k]
        simulateItem = simulate[simulateIndex]

        // remove items
        while (simulateItem === null && simulate.length) {
            removes.push(remove(simulate, simulateIndex, null))
            simulateItem = simulate[simulateIndex]
        }

        if (!simulateItem || simulateItem.key !== wantedItem.key) {
            // if we need a key in this position...
            if (wantedItem.key) {
                if (simulateItem && simulateItem.key) {
                    // if an insert doesn't put this key in place, it needs to move
                    if (bKeys[simulateItem.key] !== k + 1) {
                        removes.push(remove(simulate, simulateIndex, simulateItem.key))
                        simulateItem = simulate[simulateIndex]
                        // if the remove didn't put the wanted item in place, we need to insert it
                        if (!simulateItem || simulateItem.key !== wantedItem.key) {
                            inserts.push({key: wantedItem.key, to: k})
                        }
                        // items are matching, so skip ahead
                        else {
                            simulateIndex++
                        }
                    }
                    else {
                        inserts.push({key: wantedItem.key, to: k})
                    }
                }
                else {
                    inserts.push({key: wantedItem.key, to: k})
                }
                k++
            }
            // a key in simulate has no matching wanted key, remove it
            else if (simulateItem && simulateItem.key) {
                removes.push(remove(simulate, simulateIndex, simulateItem.key))
            }
        }
        else {
            simulateIndex++
            k++
        }
    }

    // remove all the remaining nodes from simulate
    while(simulateIndex < simulate.length) {
        simulateItem = simulate[simulateIndex]
        removes.push(remove(simulate, simulateIndex, simulateItem && simulateItem.key))
    }

    // If the only moves we have are deletes then we can just
    // let the delete patch remove these items.
    if (removes.length === deletedItems && !inserts.length) {
        return {
            children: newChildren,
            moves: null
        }
    }

    return {
        children: newChildren,
        moves: {
            removes: removes,
            inserts: inserts
        }
    }
}

function remove(arr, index, key) {
    arr.splice(index, 1)

    return {
        from: index,
        key: key
    }
}

function keyIndex(children) {
    var keys = {}
    var free = []
    var length = children.length

    for (var i = 0; i < length; i++) {
        var child = children[i]

        if (child.key) {
            keys[child.key] = i
        } else {
            free.push(i)
        }
    }

    return {
        keys: keys,     // A hash of key name to index
        free: free      // An array of unkeyed item indices
    }
}

function appendPatch(apply, patch) {
    if (apply) {
        if (isArray(apply)) {
            apply.push(patch)
        } else {
            apply = [apply, patch]
        }

        return apply
    } else {
        return patch
    }
}


/***/ }),

/***/ "./node_modules/webaudio-peaks/index.js":
/*!**********************************************!*\
  !*** ./node_modules/webaudio-peaks/index.js ***!
  \**********************************************/
/***/ ((module) => {

"use strict";


//http://jsperf.com/typed-array-min-max/2
//plain for loop for finding min/max is way faster than anything else.
/**
* @param {TypedArray} array - Subarray of audio to calculate peaks from.
*/
function findMinMax(array) {
    var min = Infinity;
    var max = -Infinity;
    var i = 0;
    var len = array.length;
    var curr;

    for(; i < len; i++) {
        curr = array[i];
        if (min > curr) {
            min = curr;
        }
        if (max < curr) {
            max = curr;
        }
    }

    return {
        min: min,
        max: max
    };
}

/**
* @param {Number} n - peak to convert from float to Int8, Int16 etc.
* @param {Number} bits - convert to #bits two's complement signed integer
*/
function convert(n, bits) {
    var max = Math.pow(2, bits-1);
    var v = n < 0 ? n * max : n * max - 1;
    return Math.max(-max, Math.min(max-1, v));
}

/**
* @param {TypedArray} channel - Audio track frames to calculate peaks from.
* @param {Number} samplesPerPixel - Audio frames per peak
*/
function extractPeaks(channel, samplesPerPixel, bits) {
    var i;
    var chanLength = channel.length;
    var numPeaks = Math.ceil(chanLength / samplesPerPixel);
    var start;
    var end;
    var segment;
    var max; 
    var min;
    var extrema;

    //create interleaved array of min,max
    var peaks = new (new Function(`return Int${bits}Array`)())(numPeaks*2);

    for (i = 0; i < numPeaks; i++) {

        start = i * samplesPerPixel;
        end = (i + 1) * samplesPerPixel > chanLength ? chanLength : (i + 1) * samplesPerPixel;

        segment = channel.subarray(start, end);
        extrema = findMinMax(segment);
        min = convert(extrema.min, bits);
        max = convert(extrema.max, bits);

        peaks[i*2] = min;
        peaks[i*2+1] = max;
    }

    return peaks;
}

function makeMono(channelPeaks, bits) {
    var numChan = channelPeaks.length;
    var weight = 1 / numChan;
    var numPeaks = channelPeaks[0].length / 2;
    var c = 0;
    var i = 0;
    var min;
    var max;
    var peaks = new (new Function(`return Int${bits}Array`)())(numPeaks*2);
    

    for (i = 0; i < numPeaks; i++) {
        min = 0;
        max = 0;

        for (c = 0; c < numChan; c++) {
            min += weight * channelPeaks[c][i*2];
            max += weight * channelPeaks[c][i*2+1];
        }

        peaks[i*2] = min;
        peaks[i*2+1] = max;
    }

    //return in array so channel number counts still work.
    return [peaks];
}

/**
* @param {AudioBuffer,TypedArray} source - Source of audio samples for peak calculations.
* @param {Number} samplesPerPixel - Number of audio samples per peak.
* @param {Number} cueIn - index in channel to start peak calculations from.
* @param {Number} cueOut - index in channel to end peak calculations from (non-inclusive).
*/
module.exports = function(source, samplesPerPixel, isMono, cueIn, cueOut, bits) {
    samplesPerPixel = samplesPerPixel || 10000;
    bits = bits || 8;
    
    if (isMono === null || isMono === undefined) {
        isMono = true;
    }

    if ([8, 16, 32].indexOf(bits) < 0) {
        throw new Error("Invalid number of bits specified for peaks.");
    }

    var numChan = source.numberOfChannels;
    var peaks = [];
    var c;
    var numPeaks;
    var channel;
    var slice;

    if (typeof source.subarray === "undefined") {
        for (c = 0; c < numChan; c++) {
            channel = source.getChannelData(c);
            cueIn = cueIn || 0;
            cueOut = cueOut || channel.length;
            slice = channel.subarray(cueIn, cueOut);
            peaks.push(extractPeaks(slice, samplesPerPixel, bits));
        }
    }
    else {
        cueIn = cueIn || 0;
        cueOut = cueOut || source.length;
        peaks.push(extractPeaks(source.subarray(cueIn, cueOut), samplesPerPixel, bits));
    }

    if (isMono && peaks.length > 1) {
        peaks = makeMono(peaks, bits);
    }

    numPeaks = peaks[0].length / 2;

    return {
        length: numPeaks,
        data: peaks,
        bits: bits
    };
};

/***/ }),

/***/ "./node_modules/worker-loader/dist/cjs.js!./src/utils/exportogg.worker.js":
/*!********************************************************************************!*\
  !*** ./node_modules/worker-loader/dist/cjs.js!./src/utils/exportogg.worker.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Worker_fn)
/* harmony export */ });
function Worker_fn() {
  return new Worker(__webpack_require__.p + "waveform-playlist.var.worker.js");
}


/***/ }),

/***/ "./node_modules/x-is-array/index.js":
/*!******************************************!*\
  !*** ./node_modules/x-is-array/index.js ***!
  \******************************************/
/***/ ((module) => {

var nativeIsArray = Array.isArray
var toString = Object.prototype.toString

module.exports = nativeIsArray || isArray

function isArray(obj) {
    return toString.call(obj) === "[object Array]"
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "/waveform-playlist/js/";
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// module exports must be returned from runtime so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	__webpack_require__("./node_modules/regenerator-runtime/runtime.js");
/******/ 	return __webpack_require__("./src/app.js");
/******/ })()
;
//# sourceMappingURL=waveform-playlist.var.js.map