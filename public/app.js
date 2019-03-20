/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else {}
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var GlobalVars = /** @class */ (function () {
    function GlobalVars() {
    }
    GlobalVars.initializeCalled = false;
    GlobalVars.isFramelessWindow = false;
    GlobalVars.parentMessageQueue = [];
    GlobalVars.childMessageQueue = [];
    GlobalVars.nextMessageId = 0;
    GlobalVars.handlers = {};
    GlobalVars.callbacks = {};
    GlobalVars.printCapabilityEnabled = false;
    return GlobalVars;
}());
exports.GlobalVars = GlobalVars;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var publicAPIs_1 = __webpack_require__(3);
var constants_1 = __webpack_require__(2);
var globalVars_1 = __webpack_require__(0);
// ::::::::::::::::::::MicrosoftTeams SDK Internal :::::::::::::::::
globalVars_1.GlobalVars.handlers["themeChange"] = handleThemeChange;
globalVars_1.GlobalVars.handlers["fullScreenChange"] = handleFullScreenChange;
globalVars_1.GlobalVars.handlers["backButtonPress"] = handleBackButtonPress;
globalVars_1.GlobalVars.handlers["beforeUnload"] = handleBeforeUnload;
globalVars_1.GlobalVars.handlers["changeSettings"] = handleChangeSettings;
function handleThemeChange(theme) {
    if (globalVars_1.GlobalVars.themeChangeHandler) {
        globalVars_1.GlobalVars.themeChangeHandler(theme);
    }
    if (globalVars_1.GlobalVars.childWindow) {
        sendMessageRequest(globalVars_1.GlobalVars.childWindow, "themeChange", [theme]);
    }
}
function handleFullScreenChange(isFullScreen) {
    if (globalVars_1.GlobalVars.fullScreenChangeHandler) {
        globalVars_1.GlobalVars.fullScreenChangeHandler(isFullScreen);
    }
}
function handleBackButtonPress() {
    if (!globalVars_1.GlobalVars.backButtonPressHandler || !globalVars_1.GlobalVars.backButtonPressHandler()) {
        publicAPIs_1.navigateBack();
    }
}
function handleBeforeUnload() {
    var readyToUnload = function () {
        sendMessageRequest(globalVars_1.GlobalVars.parentWindow, "readyToUnload", []);
    };
    if (!globalVars_1.GlobalVars.beforeUnloadHandler || !globalVars_1.GlobalVars.beforeUnloadHandler(readyToUnload)) {
        readyToUnload();
    }
}
function handleChangeSettings() {
    if (globalVars_1.GlobalVars.changeSettingsHandler) {
        globalVars_1.GlobalVars.changeSettingsHandler();
    }
}
function ensureInitialized() {
    var expectedFrameContexts = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        expectedFrameContexts[_i] = arguments[_i];
    }
    if (!globalVars_1.GlobalVars.initializeCalled) {
        throw new Error("The library has not yet been initialized");
    }
    if (globalVars_1.GlobalVars.frameContext &&
        expectedFrameContexts &&
        expectedFrameContexts.length > 0) {
        var found = false;
        for (var i = 0; i < expectedFrameContexts.length; i++) {
            if (expectedFrameContexts[i] === globalVars_1.GlobalVars.frameContext) {
                found = true;
                break;
            }
        }
        if (!found) {
            throw new Error("This call is not allowed in the '" + globalVars_1.GlobalVars.frameContext + "' context");
        }
    }
}
exports.ensureInitialized = ensureInitialized;
function processMessage(evt) {
    // Process only if we received a valid message
    if (!evt || !evt.data || typeof evt.data !== "object") {
        return;
    }
    // Process only if the message is coming from a different window and a valid origin
    var messageSource = evt.source || evt.originalEvent.source;
    var messageOrigin = evt.origin || evt.originalEvent.origin;
    if (messageSource === globalVars_1.GlobalVars.currentWindow ||
        (messageOrigin !== globalVars_1.GlobalVars.currentWindow.location.origin &&
            !constants_1.validOriginRegExp.test(messageOrigin.toLowerCase()))) {
        return;
    }
    // Update our parent and child relationships based on this message
    updateRelationships(messageSource, messageOrigin);
    // Handle the message
    if (messageSource === globalVars_1.GlobalVars.parentWindow) {
        handleParentMessage(evt);
    }
    else if (messageSource === globalVars_1.GlobalVars.childWindow) {
        handleChildMessage(evt);
    }
}
exports.processMessage = processMessage;
function updateRelationships(messageSource, messageOrigin) {
    // Determine whether the source of the message is our parent or child and update our
    // window and origin pointer accordingly
    if (!globalVars_1.GlobalVars.parentWindow || messageSource === globalVars_1.GlobalVars.parentWindow) {
        globalVars_1.GlobalVars.parentWindow = messageSource;
        globalVars_1.GlobalVars.parentOrigin = messageOrigin;
    }
    else if (!globalVars_1.GlobalVars.childWindow || messageSource === globalVars_1.GlobalVars.childWindow) {
        globalVars_1.GlobalVars.childWindow = messageSource;
        globalVars_1.GlobalVars.childOrigin = messageOrigin;
    }
    // Clean up pointers to closed parent and child windows
    if (globalVars_1.GlobalVars.parentWindow && globalVars_1.GlobalVars.parentWindow.closed) {
        globalVars_1.GlobalVars.parentWindow = null;
        globalVars_1.GlobalVars.parentOrigin = null;
    }
    if (globalVars_1.GlobalVars.childWindow && globalVars_1.GlobalVars.childWindow.closed) {
        globalVars_1.GlobalVars.childWindow = null;
        globalVars_1.GlobalVars.childOrigin = null;
    }
    // If we have any messages in our queue, send them now
    flushMessageQueue(globalVars_1.GlobalVars.parentWindow);
    flushMessageQueue(globalVars_1.GlobalVars.childWindow);
}
function handleParentMessage(evt) {
    if ("id" in evt.data) {
        // Call any associated GlobalVars.callbacks
        var message = evt.data;
        var callback = globalVars_1.GlobalVars.callbacks[message.id];
        if (callback) {
            callback.apply(null, message.args);
            // Remove the callback to ensure that the callback is called only once and to free up memory.
            delete globalVars_1.GlobalVars.callbacks[message.id];
        }
    }
    else if ("func" in evt.data) {
        // Delegate the request to the proper handler
        var message = evt.data;
        var handler = globalVars_1.GlobalVars.handlers[message.func];
        if (handler) {
            // We don't expect any handler to respond at this point
            handler.apply(this, message.args);
        }
    }
}
exports.handleParentMessage = handleParentMessage;
function handleChildMessage(evt) {
    if ("id" in evt.data && "func" in evt.data) {
        // Try to delegate the request to the proper handler
        var message_1 = evt.data;
        var handler = globalVars_1.GlobalVars.handlers[message_1.func];
        if (handler) {
            var result = handler.apply(this, message_1.args);
            if (result) {
                sendMessageResponse(globalVars_1.GlobalVars.childWindow, message_1.id, Array.isArray(result) ? result : [result]);
            }
        }
        else {
            // Proxy to parent
            var messageId = sendMessageRequest(globalVars_1.GlobalVars.parentWindow, message_1.func, message_1.args);
            // tslint:disable-next-line:no-any
            globalVars_1.GlobalVars.callbacks[messageId] = function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                if (globalVars_1.GlobalVars.childWindow) {
                    sendMessageResponse(globalVars_1.GlobalVars.childWindow, message_1.id, args);
                }
            };
        }
    }
}
function getTargetMessageQueue(targetWindow) {
    return targetWindow === globalVars_1.GlobalVars.parentWindow
        ? globalVars_1.GlobalVars.parentMessageQueue
        : targetWindow === globalVars_1.GlobalVars.childWindow
            ? globalVars_1.GlobalVars.childMessageQueue
            : [];
}
function getTargetOrigin(targetWindow) {
    return targetWindow === globalVars_1.GlobalVars.parentWindow
        ? globalVars_1.GlobalVars.parentOrigin
        : targetWindow === globalVars_1.GlobalVars.childWindow
            ? globalVars_1.GlobalVars.childOrigin
            : null;
}
function flushMessageQueue(targetWindow) {
    var targetOrigin = getTargetOrigin(targetWindow);
    var targetMessageQueue = getTargetMessageQueue(targetWindow);
    while (targetWindow && targetOrigin && targetMessageQueue.length > 0) {
        targetWindow.postMessage(targetMessageQueue.shift(), targetOrigin);
    }
}
function waitForMessageQueue(targetWindow, callback) {
    var messageQueueMonitor = globalVars_1.GlobalVars.currentWindow.setInterval(function () {
        if (getTargetMessageQueue(targetWindow).length === 0) {
            clearInterval(messageQueueMonitor);
            callback();
        }
    }, 100);
}
exports.waitForMessageQueue = waitForMessageQueue;
function sendMessageRequest(targetWindow, actionName, 
// tslint:disable-next-line: no-any
args) {
    var request = createMessageRequest(actionName, args);
    if (globalVars_1.GlobalVars.isFramelessWindow) {
        if (globalVars_1.GlobalVars.currentWindow && globalVars_1.GlobalVars.currentWindow.nativeInterface) {
            globalVars_1.GlobalVars.currentWindow.nativeInterface.framelessPostMessage(JSON.stringify(request));
        }
    }
    else {
        var targetOrigin = getTargetOrigin(targetWindow);
        // If the target window isn't closed and we already know its origin, send the message right away; otherwise,
        // queue the message and send it after the origin is established
        if (targetWindow && targetOrigin) {
            targetWindow.postMessage(request, targetOrigin);
        }
        else {
            getTargetMessageQueue(targetWindow).push(request);
        }
    }
    return request.id;
}
exports.sendMessageRequest = sendMessageRequest;
function sendMessageResponse(targetWindow, id, 
// tslint:disable-next-line:no-any
args) {
    var response = createMessageResponse(id, args);
    var targetOrigin = getTargetOrigin(targetWindow);
    if (targetWindow && targetOrigin) {
        targetWindow.postMessage(response, targetOrigin);
    }
}
// tslint:disable-next-line:no-any
function createMessageRequest(func, args) {
    return {
        id: globalVars_1.GlobalVars.nextMessageId++,
        func: func,
        args: args || []
    };
}
// tslint:disable-next-line:no-any
function createMessageResponse(id, args) {
    return {
        id: id,
        args: args || []
    };
}


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = __webpack_require__(9);
exports.version = "1.4.1";
exports.validOrigins = [
    "https://teams.microsoft.com",
    "https://teams.microsoft.us",
    "https://int.teams.microsoft.com",
    "https://devspaces.skype.com",
    "https://ssauth.skype.com",
    "http://dev.local",
    "http://dev.local:8080",
    "https://msft.spoppe.com",
    "https://*.sharepoint.com",
    "https://*.sharepoint-df.com",
    "https://*.sharepointonline.com",
    "https://outlook.office.com",
    "https://outlook-sdf.office.com"
];
// Ensure these declarations stay in sync with the framework.
exports.frameContexts = {
    settings: "settings",
    content: "content",
    authentication: "authentication",
    remove: "remove",
    task: "task"
};
exports.validOriginRegExp = utils_1.generateRegExpFromUrls(exports.validOrigins);


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var internalAPIs_1 = __webpack_require__(1);
var globalVars_1 = __webpack_require__(0);
var constants_1 = __webpack_require__(2);
var settings_1 = __webpack_require__(4);
// ::::::::::::::::::::::: MicrosoftTeams SDK public API ::::::::::::::::::::
/**
 * Initializes the library. This must be called before any other SDK calls
 * but after the frame is loaded successfully.
 */
function initialize(hostWindow) {
    if (hostWindow === void 0) { hostWindow = window; }
    if (globalVars_1.GlobalVars.initializeCalled) {
        // Independent components might not know whether the SDK is initialized so might call it to be safe.
        // Just no-op if that happens to make it easier to use.
        return;
    }
    globalVars_1.GlobalVars.initializeCalled = true;
    // Undocumented field used to mock the window for unit tests
    globalVars_1.GlobalVars.currentWindow = hostWindow;
    // Listen for messages post to our window
    var messageListener = function (evt) { return internalAPIs_1.processMessage(evt); };
    // If we are in an iframe, our parent window is the one hosting us (i.e., window.parent); otherwise,
    // it's the window that opened us (i.e., window.opener)
    globalVars_1.GlobalVars.parentWindow =
        globalVars_1.GlobalVars.currentWindow.parent !== globalVars_1.GlobalVars.currentWindow.self
            ? globalVars_1.GlobalVars.currentWindow.parent
            : globalVars_1.GlobalVars.currentWindow.opener;
    if (!globalVars_1.GlobalVars.parentWindow) {
        globalVars_1.GlobalVars.isFramelessWindow = true;
        window.onNativeMessage = globalVars_1.GlobalVars.handleParentMessage;
    }
    else {
        // For iFrame scenario, add listener to listen 'message'
        globalVars_1.GlobalVars.currentWindow.addEventListener("message", messageListener, false);
    }
    try {
        // Send the initialized message to any origin, because at this point we most likely don't know the origin
        // of the parent window, and this message contains no data that could pose a security risk.
        globalVars_1.GlobalVars.parentOrigin = "*";
        var messageId = internalAPIs_1.sendMessageRequest(globalVars_1.GlobalVars.parentWindow, "initialize", [constants_1.version]);
        globalVars_1.GlobalVars.callbacks[messageId] = function (context, clientType) {
            globalVars_1.GlobalVars.frameContext = context;
            globalVars_1.GlobalVars.hostClientType = clientType;
        };
    }
    finally {
        globalVars_1.GlobalVars.parentOrigin = null;
    }
    // Undocumented function used to clear state between unit tests
    this._uninitialize = function () {
        if (globalVars_1.GlobalVars.frameContext) {
            registerOnThemeChangeHandler(null);
            registerFullScreenHandler(null);
            registerBackButtonHandler(null);
            registerBeforeUnloadHandler(null);
        }
        if (globalVars_1.GlobalVars.frameContext === constants_1.frameContexts.settings) {
            settings_1.settings.registerOnSaveHandler(null);
        }
        if (globalVars_1.GlobalVars.frameContext === constants_1.frameContexts.remove) {
            settings_1.settings.registerOnRemoveHandler(null);
        }
        if (!globalVars_1.GlobalVars.isFramelessWindow) {
            globalVars_1.GlobalVars.currentWindow.removeEventListener("message", messageListener, false);
        }
        globalVars_1.GlobalVars.initializeCalled = false;
        globalVars_1.GlobalVars.parentWindow = null;
        globalVars_1.GlobalVars.parentOrigin = null;
        globalVars_1.GlobalVars.parentMessageQueue = [];
        globalVars_1.GlobalVars.childWindow = null;
        globalVars_1.GlobalVars.childOrigin = null;
        globalVars_1.GlobalVars.childMessageQueue = [];
        globalVars_1.GlobalVars.nextMessageId = 0;
        globalVars_1.GlobalVars.callbacks = {};
        globalVars_1.GlobalVars.frameContext = null;
        globalVars_1.GlobalVars.hostClientType = null;
        globalVars_1.GlobalVars.isFramelessWindow = false;
    };
}
exports.initialize = initialize;
/**
 * Initializes the library. This must be called before any other SDK calls
 * but after the frame is loaded successfully.
 */
function _uninitialize() { }
exports._uninitialize = _uninitialize;
/**
 * Enable print capability to support printing page using Ctrl+P and cmd+P
 */
function enablePrintCapability() {
    if (!globalVars_1.GlobalVars.printCapabilityEnabled) {
        globalVars_1.GlobalVars.printCapabilityEnabled = true;
        internalAPIs_1.ensureInitialized();
        // adding ctrl+P and cmd+P handler
        document.addEventListener("keydown", function (event) {
            if ((event.ctrlKey || event.metaKey) && event.keyCode === 80) {
                print();
                event.cancelBubble = true;
                event.preventDefault();
                event.stopImmediatePropagation();
            }
        });
    }
}
exports.enablePrintCapability = enablePrintCapability;
/**
 * default print handler
 */
function print() {
    window.print();
}
exports.print = print;
/**
 * Retrieves the current context the frame is running in.
 * @param callback The callback to invoke when the {@link Context} object is retrieved.
 */
function getContext(callback) {
    internalAPIs_1.ensureInitialized();
    var messageId = internalAPIs_1.sendMessageRequest(globalVars_1.GlobalVars.parentWindow, "getContext");
    globalVars_1.GlobalVars.callbacks[messageId] = callback;
}
exports.getContext = getContext;
/**
 * Registers a handler for theme changes.
 * Only one handler can be registered at a time. A subsequent registration replaces an existing registration.
 * @param handler The handler to invoke when the user changes their theme.
 */
function registerOnThemeChangeHandler(handler) {
    internalAPIs_1.ensureInitialized();
    globalVars_1.GlobalVars.themeChangeHandler = handler;
    handler &&
        internalAPIs_1.sendMessageRequest(globalVars_1.GlobalVars.parentWindow, "registerHandler", ["themeChange"]);
}
exports.registerOnThemeChangeHandler = registerOnThemeChangeHandler;
/**
 * Registers a handler for changes from or to full-screen view for a tab.
 * Only one handler can be registered at a time. A subsequent registration replaces an existing registration.
 * @param handler The handler to invoke when the user toggles full-screen view for a tab.
 */
function registerFullScreenHandler(handler) {
    internalAPIs_1.ensureInitialized();
    globalVars_1.GlobalVars.fullScreenChangeHandler = handler;
    handler &&
        internalAPIs_1.sendMessageRequest(globalVars_1.GlobalVars.parentWindow, "registerHandler", ["fullScreen"]);
}
exports.registerFullScreenHandler = registerFullScreenHandler;
/**
 * Registers a handler for user presses of the Team client's back button. Experiences that maintain an internal
 * navigation stack should use this handler to navigate the user back within their frame. If an app finds
 * that after running its back button handler it cannot handle the event it should call the navigateBack
 * method to ask the Teams client to handle it instead.
 * @param handler The handler to invoke when the user presses their Team client's back button.
 */
function registerBackButtonHandler(handler) {
    internalAPIs_1.ensureInitialized();
    globalVars_1.GlobalVars.backButtonPressHandler = handler;
    handler &&
        internalAPIs_1.sendMessageRequest(globalVars_1.GlobalVars.parentWindow, "registerHandler", ["backButton"]);
}
exports.registerBackButtonHandler = registerBackButtonHandler;
/**
 * Navigates back in the Teams client. See registerBackButtonHandler for more information on when
 * it's appropriate to use this method.
 */
function navigateBack() {
    internalAPIs_1.ensureInitialized();
    var messageId = internalAPIs_1.sendMessageRequest(globalVars_1.GlobalVars.parentWindow, "navigateBack", []);
    globalVars_1.GlobalVars.callbacks[messageId] = function (success) {
        if (!success) {
            throw new Error("Back navigation is not supported in the current client or context.");
        }
    };
}
exports.navigateBack = navigateBack;
/**
 * Registers a handler to be called before the page is unloaded.
 * @param handler The handler to invoke before the page is unloaded. If this handler returns true the page should
 * invoke the readyToUnload function provided to it once it's ready to be unloaded.
 */
function registerBeforeUnloadHandler(handler) {
    internalAPIs_1.ensureInitialized();
    globalVars_1.GlobalVars.beforeUnloadHandler = handler;
    handler &&
        internalAPIs_1.sendMessageRequest(globalVars_1.GlobalVars.parentWindow, "registerHandler", ["beforeUnload"]);
}
exports.registerBeforeUnloadHandler = registerBeforeUnloadHandler;
/**
 * Registers a handler for when the user reconfigurated tab
 * @param handler The handler to invoke when the user click on Settings.
 */
function registerChangeSettingsHandler(handler) {
    internalAPIs_1.ensureInitialized(constants_1.frameContexts.content);
    globalVars_1.GlobalVars.changeSettingsHandler = handler;
    handler && internalAPIs_1.sendMessageRequest(globalVars_1.GlobalVars.parentWindow, "registerHandler", ["changeSettings"]);
}
exports.registerChangeSettingsHandler = registerChangeSettingsHandler;
/**
 * Navigates the frame to a new cross-domain URL. The domain of this URL must match at least one of the
 * valid domains specified in the validDomains block of the manifest; otherwise, an exception will be
 * thrown. This function needs to be used only when navigating the frame to a URL in a different domain
 * than the current one in a way that keeps the app informed of the change and allows the SDK to
 * continue working.
 * @param url The URL to navigate the frame to.
 */
function navigateCrossDomain(url) {
    internalAPIs_1.ensureInitialized(constants_1.frameContexts.content, constants_1.frameContexts.settings, constants_1.frameContexts.remove, constants_1.frameContexts.task);
    var messageId = internalAPIs_1.sendMessageRequest(globalVars_1.GlobalVars.parentWindow, "navigateCrossDomain", [
        url
    ]);
    globalVars_1.GlobalVars.callbacks[messageId] = function (success) {
        if (!success) {
            throw new Error("Cross-origin navigation is only supported for URLs matching the pattern registered in the manifest.");
        }
    };
}
exports.navigateCrossDomain = navigateCrossDomain;
/**
 * Allows an app to retrieve for this user tabs that are owned by this app.
 * If no TabInstanceParameters are passed, the app defaults to favorite teams and favorite channels.
 * @param callback The callback to invoke when the {@link TabInstanceParameters} object is retrieved.
 * @param tabInstanceParameters OPTIONAL Flags that specify whether to scope call to favorite teams or channels.
 */
function getTabInstances(callback, tabInstanceParameters) {
    internalAPIs_1.ensureInitialized();
    var messageId = internalAPIs_1.sendMessageRequest(globalVars_1.GlobalVars.parentWindow, "getTabInstances", [
        tabInstanceParameters
    ]);
    globalVars_1.GlobalVars.callbacks[messageId] = callback;
}
exports.getTabInstances = getTabInstances;
/**
 * Allows an app to retrieve the most recently used tabs for this user.
 * @param callback The callback to invoke when the {@link TabInformation} object is retrieved.
 * @param tabInstanceParameters OPTIONAL Ignored, kept for future use
 */
function getMruTabInstances(callback, tabInstanceParameters) {
    internalAPIs_1.ensureInitialized();
    var messageId = internalAPIs_1.sendMessageRequest(globalVars_1.GlobalVars.parentWindow, "getMruTabInstances", [
        tabInstanceParameters
    ]);
    globalVars_1.GlobalVars.callbacks[messageId] = callback;
}
exports.getMruTabInstances = getMruTabInstances;
/**
 * Shares a deep link that a user can use to navigate back to a specific state in this page.
 * @param deepLinkParameters ID and label for the link and fallback URL.
 */
function shareDeepLink(deepLinkParameters) {
    internalAPIs_1.ensureInitialized(constants_1.frameContexts.content);
    internalAPIs_1.sendMessageRequest(globalVars_1.GlobalVars.parentWindow, "shareDeepLink", [
        deepLinkParameters.subEntityId,
        deepLinkParameters.subEntityLabel,
        deepLinkParameters.subEntityWebUrl
    ]);
}
exports.shareDeepLink = shareDeepLink;
/**
 * Navigates the Microsoft Teams app to the specified tab instance.
 * @param tabInstance The tab instance to navigate to.
 */
function navigateToTab(tabInstance) {
    internalAPIs_1.ensureInitialized();
    var messageId = internalAPIs_1.sendMessageRequest(globalVars_1.GlobalVars.parentWindow, "navigateToTab", [
        tabInstance
    ]);
    globalVars_1.GlobalVars.callbacks[messageId] = function (success) {
        if (!success) {
            throw new Error("Invalid internalTabInstanceId and/or channelId were/was provided");
        }
    };
}
exports.navigateToTab = navigateToTab;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var internalAPIs_1 = __webpack_require__(1);
var globalVars_1 = __webpack_require__(0);
var constants_1 = __webpack_require__(2);
/**
 * Namespace to interact with the settings-specific part of the SDK.
 * This object is usable only on the settings frame.
 */
var settings;
(function (settings) {
    var saveHandler;
    var removeHandler;
    globalVars_1.GlobalVars.handlers["settings.save"] = handleSave;
    globalVars_1.GlobalVars.handlers["settings.remove"] = handleRemove;
    /**
     * Sets the validity state for the settings.
     * The initial value is false, so the user cannot save the settings until this is called with true.
     * @param validityState Indicates whether the save or remove button is enabled for the user.
     */
    function setValidityState(validityState) {
        internalAPIs_1.ensureInitialized(constants_1.frameContexts.settings, constants_1.frameContexts.remove);
        internalAPIs_1.sendMessageRequest(globalVars_1.GlobalVars.parentWindow, "settings.setValidityState", [
            validityState
        ]);
    }
    settings.setValidityState = setValidityState;
    /**
     * Gets the settings for the current instance.
     * @param callback The callback to invoke when the {@link Settings} object is retrieved.
     */
    function getSettings(callback) {
        internalAPIs_1.ensureInitialized(constants_1.frameContexts.content, constants_1.frameContexts.settings, constants_1.frameContexts.remove);
        var messageId = internalAPIs_1.sendMessageRequest(globalVars_1.GlobalVars.parentWindow, "settings.getSettings");
        globalVars_1.GlobalVars.callbacks[messageId] = callback;
    }
    settings.getSettings = getSettings;
    /**
     * Sets the settings for the current instance.
     * This is an asynchronous operation; calls to getSettings are not guaranteed to reflect the changed state.
     * @param settings The desired settings for this instance.
     */
    function setSettings(instanceSettings) {
        internalAPIs_1.ensureInitialized(constants_1.frameContexts.content, constants_1.frameContexts.settings);
        var messageId = internalAPIs_1.sendMessageRequest(globalVars_1.GlobalVars.parentWindow, "settings.setSettings", [
            instanceSettings
        ]);
        globalVars_1.GlobalVars.callbacks[messageId] = function (success, result) {
            if (!success) {
                throw new Error(result);
            }
        };
    }
    settings.setSettings = setSettings;
    /**
     * Registers a handler for when the user attempts to save the settings. This handler should be used
     * to create or update the underlying resource powering the content.
     * The object passed to the handler must be used to notify whether to proceed with the save.
     * Only one handler can be registered at a time. A subsequent registration replaces an existing registration.
     * @param handler The handler to invoke when the user selects the save button.
     */
    function registerOnSaveHandler(handler) {
        internalAPIs_1.ensureInitialized(constants_1.frameContexts.settings);
        saveHandler = handler;
        handler && internalAPIs_1.sendMessageRequest(globalVars_1.GlobalVars.parentWindow, "registerHandler", ["save"]);
    }
    settings.registerOnSaveHandler = registerOnSaveHandler;
    /**
     * Registers a handler for user attempts to remove content. This handler should be used
     * to remove the underlying resource powering the content.
     * The object passed to the handler must be used to indicate whether to proceed with the removal.
     * Only one handler may be registered at a time. Subsequent registrations will override the first.
     * @param handler The handler to invoke when the user selects the remove button.
     */
    function registerOnRemoveHandler(handler) {
        internalAPIs_1.ensureInitialized(constants_1.frameContexts.remove);
        removeHandler = handler;
        handler && internalAPIs_1.sendMessageRequest(globalVars_1.GlobalVars.parentWindow, "registerHandler", ["remove"]);
    }
    settings.registerOnRemoveHandler = registerOnRemoveHandler;
    function handleSave(result) {
        var saveEvent = new SaveEventImpl(result);
        if (saveHandler) {
            saveHandler(saveEvent);
        }
        else {
            // If no handler is registered, we assume success.
            saveEvent.notifySuccess();
        }
    }
    /**
     * @private
     * Hide from docs, since this class is not directly used.
     */
    var SaveEventImpl = /** @class */ (function () {
        function SaveEventImpl(result) {
            this.notified = false;
            this.result = result ? result : {};
        }
        SaveEventImpl.prototype.notifySuccess = function () {
            this.ensureNotNotified();
            internalAPIs_1.sendMessageRequest(globalVars_1.GlobalVars.parentWindow, "settings.save.success");
            this.notified = true;
        };
        SaveEventImpl.prototype.notifyFailure = function (reason) {
            this.ensureNotNotified();
            internalAPIs_1.sendMessageRequest(globalVars_1.GlobalVars.parentWindow, "settings.save.failure", [reason]);
            this.notified = true;
        };
        SaveEventImpl.prototype.ensureNotNotified = function () {
            if (this.notified) {
                throw new Error("The SaveEvent may only notify success or failure once.");
            }
        };
        return SaveEventImpl;
    }());
    function handleRemove() {
        var removeEvent = new RemoveEventImpl();
        if (removeHandler) {
            removeHandler(removeEvent);
        }
        else {
            // If no handler is registered, we assume success.
            removeEvent.notifySuccess();
        }
    }
    /**
     * @private
     * Hide from docs, since this class is not directly used.
     */
    var RemoveEventImpl = /** @class */ (function () {
        function RemoveEventImpl() {
            this.notified = false;
        }
        RemoveEventImpl.prototype.notifySuccess = function () {
            this.ensureNotNotified();
            internalAPIs_1.sendMessageRequest(globalVars_1.GlobalVars.parentWindow, "settings.remove.success");
            this.notified = true;
        };
        RemoveEventImpl.prototype.notifyFailure = function (reason) {
            this.ensureNotNotified();
            internalAPIs_1.sendMessageRequest(globalVars_1.GlobalVars.parentWindow, "settings.remove.failure", [reason]);
            this.notified = true;
        };
        RemoveEventImpl.prototype.ensureNotNotified = function () {
            if (this.notified) {
                throw new Error("The removeEvent may only notify success or failure once.");
            }
        };
        return RemoveEventImpl;
    }());
})(settings = exports.settings || (exports.settings = {}));


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var internalAPIs_1 = __webpack_require__(1);
var globalVars_1 = __webpack_require__(0);
var constants_1 = __webpack_require__(2);
var ChildAppWindow = /** @class */ (function () {
    function ChildAppWindow() {
    }
    ChildAppWindow.prototype.postMessage = function (message) {
        internalAPIs_1.ensureInitialized();
        var messageId = internalAPIs_1.sendMessageRequest(globalVars_1.GlobalVars.parentWindow, "messageForChild", [
            message
        ]);
        globalVars_1.GlobalVars.callbacks[messageId] = function (success, result) {
            if (!success) {
                throw new Error(result);
            }
        };
    };
    ChildAppWindow.prototype.addEventListener = function (type, listener) {
        if (type === "message") {
            globalVars_1.GlobalVars.handlers["messageForParent"] = listener;
        }
    };
    return ChildAppWindow;
}());
exports.ChildAppWindow = ChildAppWindow;
var ParentAppWindow = /** @class */ (function () {
    function ParentAppWindow() {
    }
    Object.defineProperty(ParentAppWindow, "Instance", {
        get: function () {
            // Do you need arguments? Make it a regular method instead.
            return this._instance || (this._instance = new this());
        },
        enumerable: true,
        configurable: true
    });
    ParentAppWindow.prototype.postMessage = function (message) {
        internalAPIs_1.ensureInitialized(constants_1.frameContexts.task);
        var messageId = internalAPIs_1.sendMessageRequest(globalVars_1.GlobalVars.parentWindow, "messageForParent", [
            message
        ]);
        globalVars_1.GlobalVars.callbacks[messageId] = function (success, result) {
            if (!success) {
                throw new Error(result);
            }
        };
    };
    ParentAppWindow.prototype.addEventListener = function (type, listener) {
        if (type === "message") {
            globalVars_1.GlobalVars.handlers["messageForChild"] = listener;
        }
    };
    return ParentAppWindow;
}());
exports.ParentAppWindow = ParentAppWindow;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(7));
__export(__webpack_require__(12));


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(8));
__export(__webpack_require__(10));
__export(__webpack_require__(11));


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var internalAPIs_1 = __webpack_require__(1);
var globalVars_1 = __webpack_require__(0);
/**
 * Namespace to interact with the menu-specific part of the SDK.
 * This object is used to show View Configuration, Action Menu and Navigation Bar Menu.
 *
 * @private
 * Hide from docs until feature is complete
 */
var menus;
(function (menus) {
    /**
     * Represents information about menu item for Action Menu and Navigation Bar Menu.
     */
    var MenuItem = /** @class */ (function () {
        function MenuItem() {
            /**
             * State of the menu item
             */
            this.enabled = true;
        }
        return MenuItem;
    }());
    menus.MenuItem = MenuItem;
    /**
     * Represents information about type of list to display in Navigation Bar Menu.
     */
    var MenuListType;
    (function (MenuListType) {
        MenuListType["dropDown"] = "dropDown";
        MenuListType["popOver"] = "popOver";
    })(MenuListType = menus.MenuListType || (menus.MenuListType = {}));
    var navBarMenuItemPressHandler;
    globalVars_1.GlobalVars.handlers["navBarMenuItemPress"] = handleNavBarMenuItemPress;
    var actionMenuItemPressHandler;
    globalVars_1.GlobalVars.handlers["actionMenuItemPress"] = handleActionMenuItemPress;
    var viewConfigItemPressHandler;
    globalVars_1.GlobalVars.handlers["setModuleView"] = handleViewConfigItemPress;
    /**
     * Registers list of view configurations and it's handler.
     * Handler is responsible for listening selection of View Configuration.
     * @param viewConfig List of view configurations. Minimum 1 value is required.
     * @param handler The handler to invoke when the user selects view configuration.
     */
    function setUpViews(viewConfig, handler) {
        internalAPIs_1.ensureInitialized();
        viewConfigItemPressHandler = handler;
        internalAPIs_1.sendMessageRequest(globalVars_1.GlobalVars.parentWindow, "setUpViews", [viewConfig]);
    }
    menus.setUpViews = setUpViews;
    function handleViewConfigItemPress(id) {
        if (!viewConfigItemPressHandler || !viewConfigItemPressHandler(id)) {
            internalAPIs_1.ensureInitialized();
            internalAPIs_1.sendMessageRequest(globalVars_1.GlobalVars.parentWindow, "viewConfigItemPress", [id]);
        }
    }
    /**
     * Used to set menu items on the Navigation Bar. If icon is available, icon will be shown, otherwise title will be shown.
     * @param items List of MenuItems for Navigation Bar Menu.
     * @param handler The handler to invoke when the user selects menu item.
     */
    function setNavBarMenu(items, handler) {
        internalAPIs_1.ensureInitialized();
        navBarMenuItemPressHandler = handler;
        internalAPIs_1.sendMessageRequest(globalVars_1.GlobalVars.parentWindow, "setNavBarMenu", [items]);
    }
    menus.setNavBarMenu = setNavBarMenu;
    function handleNavBarMenuItemPress(id) {
        if (!navBarMenuItemPressHandler || !navBarMenuItemPressHandler(id)) {
            internalAPIs_1.ensureInitialized();
            internalAPIs_1.sendMessageRequest(globalVars_1.GlobalVars.parentWindow, "handleNavBarMenuItemPress", [id]);
        }
    }
    /**
     * Used to show Action Menu.
     * @param params Parameters for Menu Parameters
     * @param handler The handler to invoke when the user selects menu item.
     */
    function showActionMenu(params, handler) {
        internalAPIs_1.ensureInitialized();
        actionMenuItemPressHandler = handler;
        internalAPIs_1.sendMessageRequest(globalVars_1.GlobalVars.parentWindow, "showActionMenu", [params]);
    }
    menus.showActionMenu = showActionMenu;
    function handleActionMenuItemPress(id) {
        if (!actionMenuItemPressHandler || !actionMenuItemPressHandler(id)) {
            internalAPIs_1.ensureInitialized();
            internalAPIs_1.sendMessageRequest(globalVars_1.GlobalVars.parentWindow, "handleActionMenuItemPress", [id]);
        }
    }
})(menus = exports.menus || (exports.menus = {}));


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// This will return a reg expression a given url
function generateRegExpFromUrl(url) {
    var urlRegExpPart = "^";
    var urlParts = url.split(".");
    for (var j = 0; j < urlParts.length; j++) {
        urlRegExpPart += (j > 0 ? "[.]" : "") + urlParts[j].replace("*", "[^/^.]+");
    }
    urlRegExpPart += "$";
    return urlRegExpPart;
}
// This will return a reg expression for list of url
function generateRegExpFromUrls(urls) {
    var urlRegExp = "";
    for (var i = 0; i < urls.length; i++) {
        urlRegExp += (i === 0 ? "" : "|") + generateRegExpFromUrl(urls[i]);
    }
    return new RegExp(urlRegExp);
}
exports.generateRegExpFromUrls = generateRegExpFromUrls;


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var internalAPIs_1 = __webpack_require__(1);
var globalVars_1 = __webpack_require__(0);
var constants_1 = __webpack_require__(2);
/**
 * @private
 * Hide from docs
 * ------
 * Allows an app to retrieve information of all user joined teams
 * @param callback The callback to invoke when the {@link TeamInstanceParameters} object is retrieved.
 * @param teamInstanceParameters OPTIONAL Flags that specify whether to scope call to favorite teams
 */
function getUserJoinedTeams(callback, teamInstanceParameters) {
    internalAPIs_1.ensureInitialized();
    var messageId = internalAPIs_1.sendMessageRequest(globalVars_1.GlobalVars.parentWindow, "getUserJoinedTeams", [
        teamInstanceParameters
    ]);
    globalVars_1.GlobalVars.callbacks[messageId] = callback;
}
exports.getUserJoinedTeams = getUserJoinedTeams;
/**
 * @private
 * Hide from docs
 * ------
 * Place the tab into full-screen mode.
 */
function enterFullscreen() {
    internalAPIs_1.ensureInitialized(constants_1.frameContexts.content);
    internalAPIs_1.sendMessageRequest(globalVars_1.GlobalVars.parentWindow, "enterFullscreen", []);
}
exports.enterFullscreen = enterFullscreen;
/**
 * @private
 * Hide from docs
 * ------
 * Reverts the tab into normal-screen mode.
 */
function exitFullscreen() {
    internalAPIs_1.ensureInitialized(constants_1.frameContexts.content);
    internalAPIs_1.sendMessageRequest(globalVars_1.GlobalVars.parentWindow, "exitFullscreen", []);
}
exports.exitFullscreen = exitFullscreen;
/**
 * @private
 * Hide from docs.
 * ------
 * Opens a client-friendly preview of the specified file.
 * @param file The file to preview.
 */
function openFilePreview(filePreviewParameters) {
    internalAPIs_1.ensureInitialized(constants_1.frameContexts.content);
    var params = [
        filePreviewParameters.entityId,
        filePreviewParameters.title,
        filePreviewParameters.description,
        filePreviewParameters.type,
        filePreviewParameters.objectUrl,
        filePreviewParameters.downloadUrl,
        filePreviewParameters.webPreviewUrl,
        filePreviewParameters.webEditUrl,
        filePreviewParameters.baseUrl,
        filePreviewParameters.editFile,
        filePreviewParameters.subEntityId
    ];
    internalAPIs_1.sendMessageRequest(globalVars_1.GlobalVars.parentWindow, "openFilePreview", params);
}
exports.openFilePreview = openFilePreview;
/**
 * @private
 * Hide from docs.
 * ------
 * display notification API.
 * @param message Notification message.
 * @param notificationType Notification type
 */
function showNotification(showNotificationParameters) {
    internalAPIs_1.ensureInitialized(constants_1.frameContexts.content);
    var params = [
        showNotificationParameters.message,
        showNotificationParameters.notificationType
    ];
    internalAPIs_1.sendMessageRequest(globalVars_1.GlobalVars.parentWindow, "showNotification", params);
}
exports.showNotification = showNotification;
/**
 * @private
 * Hide from docs.
 * ------
 * execute deep link API.
 * @param deepLink deep link.
 */
function executeDeepLink(deepLink) {
    internalAPIs_1.ensureInitialized(constants_1.frameContexts.content);
    var messageId = internalAPIs_1.sendMessageRequest(globalVars_1.GlobalVars.parentWindow, "executeDeepLink", [
        deepLink
    ]);
    globalVars_1.GlobalVars.callbacks[messageId] = function (success, result) {
        if (!success) {
            throw new Error(result);
        }
    };
}
exports.executeDeepLink = executeDeepLink;
/**
 * @private
 * Hide from docs.
 * ------
 * Upload a custom App manifest directly to both team and personal scopes.
 * This method works just for the first party Apps.
 */
function uploadCustomApp(manifestBlob) {
    internalAPIs_1.ensureInitialized();
    var messageId = internalAPIs_1.sendMessageRequest(globalVars_1.GlobalVars.parentWindow, "uploadCustomApp", [
        manifestBlob
    ]);
    globalVars_1.GlobalVars.callbacks[messageId] = function (success, result) {
        if (!success) {
            throw new Error(result);
        }
    };
}
exports.uploadCustomApp = uploadCustomApp;
/**
 * @private
 * Internal use only
 * Sends a custom action message to Teams.
 * @param actionName Specifies name of the custom action to be sent
 * @param args Specifies additional arguments passed to the action
 * @returns id of sent message
 */
function sendCustomMessage(actionName, 
// tslint:disable-next-line:no-any
args) {
    internalAPIs_1.ensureInitialized();
    return internalAPIs_1.sendMessageRequest(globalVars_1.GlobalVars.parentWindow, actionName, args);
}
exports.sendCustomMessage = sendCustomMessage;
/**
 * @private
 * Hide from docs
 * ------
 * Allows an app to retrieve information of all chat members
 * Because a malicious party run your content in a browser, this value should
 * be used only as a hint as to who the members are and never as proof of membership.
 * @param callback The callback to invoke when the {@link ChatMembersInformation} object is retrieved.
 */
function getChatMembers(callback) {
    internalAPIs_1.ensureInitialized();
    var messageId = internalAPIs_1.sendMessageRequest(globalVars_1.GlobalVars.parentWindow, "getChatMembers");
    globalVars_1.GlobalVars.callbacks[messageId] = callback;
}
exports.getChatMembers = getChatMembers;
/**
 * @private
 * Hide from docs
 * ------
 * Allows an app to get the configuration setting value
 * @param callback The callback to invoke when the value is retrieved.
 * @param key The key for the config setting
 */
function getConfigSetting(callback, key) {
    internalAPIs_1.ensureInitialized();
    var messageId = internalAPIs_1.sendMessageRequest(globalVars_1.GlobalVars.parentWindow, "getConfigSetting", [
        key
    ]);
    globalVars_1.GlobalVars.callbacks[messageId] = callback;
}
exports.getConfigSetting = getConfigSetting;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(13));
__export(__webpack_require__(14));
__export(__webpack_require__(3));
__export(__webpack_require__(4));
__export(__webpack_require__(15));
__export(__webpack_require__(5));


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var internalAPIs_1 = __webpack_require__(1);
var globalVars_1 = __webpack_require__(0);
var constants_1 = __webpack_require__(2);
/**
 * Namespace to interact with the authentication-specific part of the SDK.
 * This object is used for starting or completing authentication flows.
 */
var authentication;
(function (authentication) {
    var authParams;
    var authWindowMonitor;
    globalVars_1.GlobalVars.handlers["authentication.authenticate.success"] = handleSuccess;
    globalVars_1.GlobalVars.handlers["authentication.authenticate.failure"] = handleFailure;
    /**
     * Registers the authentication GlobalVars.handlers
     * @param authenticateParameters A set of values that configure the authentication pop-up.
     */
    function registerAuthenticationHandlers(authenticateParameters) {
        authParams = authenticateParameters;
    }
    authentication.registerAuthenticationHandlers = registerAuthenticationHandlers;
    /**
     * Initiates an authentication request, which opens a new window with the specified settings.
     */
    function authenticate(authenticateParameters) {
        var authenticateParams = authenticateParameters !== undefined
            ? authenticateParameters
            : authParams;
        internalAPIs_1.ensureInitialized(constants_1.frameContexts.content, constants_1.frameContexts.settings, constants_1.frameContexts.remove, constants_1.frameContexts.task);
        if (globalVars_1.GlobalVars.hostClientType === "desktop" /* desktop */ ||
            globalVars_1.GlobalVars.hostClientType === "android" /* android */ ||
            globalVars_1.GlobalVars.hostClientType === "ios" /* ios */) {
            // Convert any relative URLs into absolute URLs before sending them over to the parent window.
            var link = document.createElement("a");
            link.href = authenticateParams.url;
            // Ask the parent window to open an authentication window with the parameters provided by the caller.
            var messageId = internalAPIs_1.sendMessageRequest(globalVars_1.GlobalVars.parentWindow, "authentication.authenticate", [link.href, authenticateParams.width, authenticateParams.height]);
            globalVars_1.GlobalVars.callbacks[messageId] = function (success, response) {
                if (success) {
                    authenticateParams.successCallback(response);
                }
                else {
                    authenticateParams.failureCallback(response);
                }
            };
        }
        else {
            // Open an authentication window with the parameters provided by the caller.
            openAuthenticationWindow(authenticateParams);
        }
    }
    authentication.authenticate = authenticate;
    /**
     * @private
     * Hide from docs.
     * ------
     * Requests an Azure AD token to be issued on behalf of the app. The token is acquired from the cache
     * if it is not expired. Otherwise a request is sent to Azure AD to obtain a new token.
     * @param authTokenRequest A set of values that configure the token request.
     */
    function getAuthToken(authTokenRequest) {
        internalAPIs_1.ensureInitialized();
        var messageId = internalAPIs_1.sendMessageRequest(globalVars_1.GlobalVars.parentWindow, "authentication.getAuthToken", [authTokenRequest.resources]);
        globalVars_1.GlobalVars.callbacks[messageId] = function (success, result) {
            if (success) {
                authTokenRequest.successCallback(result);
            }
            else {
                authTokenRequest.failureCallback(result);
            }
        };
    }
    authentication.getAuthToken = getAuthToken;
    /**
     * @private
     * Hide from docs.
     * ------
     * Requests the decoded Azure AD user identity on behalf of the app.
     */
    function getUser(userRequest) {
        internalAPIs_1.ensureInitialized();
        var messageId = internalAPIs_1.sendMessageRequest(globalVars_1.GlobalVars.parentWindow, "authentication.getUser");
        globalVars_1.GlobalVars.callbacks[messageId] = function (success, result) {
            if (success) {
                userRequest.successCallback(result);
            }
            else {
                userRequest.failureCallback(result);
            }
        };
    }
    authentication.getUser = getUser;
    function closeAuthenticationWindow() {
        // Stop monitoring the authentication window
        stopAuthenticationWindowMonitor();
        // Try to close the authentication window and clear all properties associated with it
        try {
            if (globalVars_1.GlobalVars.childWindow) {
                globalVars_1.GlobalVars.childWindow.close();
            }
        }
        finally {
            globalVars_1.GlobalVars.childWindow = null;
            globalVars_1.GlobalVars.childOrigin = null;
        }
    }
    function openAuthenticationWindow(authenticateParameters) {
        authParams = authenticateParameters;
        // Close the previously opened window if we have one
        closeAuthenticationWindow();
        // Start with a sensible default size
        var width = authParams.width || 600;
        var height = authParams.height || 400;
        // Ensure that the new window is always smaller than our app's window so that it never fully covers up our app
        width = Math.min(width, globalVars_1.GlobalVars.currentWindow.outerWidth - 400);
        height = Math.min(height, globalVars_1.GlobalVars.currentWindow.outerHeight - 200);
        // Convert any relative URLs into absolute URLs before sending them over to the parent window
        var link = document.createElement("a");
        link.href = authParams.url;
        // We are running in the browser, so we need to center the new window ourselves
        var left = typeof globalVars_1.GlobalVars.currentWindow.screenLeft !== "undefined"
            ? globalVars_1.GlobalVars.currentWindow.screenLeft
            : globalVars_1.GlobalVars.currentWindow.screenX;
        var top = typeof globalVars_1.GlobalVars.currentWindow.screenTop !== "undefined"
            ? globalVars_1.GlobalVars.currentWindow.screenTop
            : globalVars_1.GlobalVars.currentWindow.screenY;
        left += globalVars_1.GlobalVars.currentWindow.outerWidth / 2 - width / 2;
        top += globalVars_1.GlobalVars.currentWindow.outerHeight / 2 - height / 2;
        // Open a child window with a desired set of standard browser features
        globalVars_1.GlobalVars.childWindow = globalVars_1.GlobalVars.currentWindow.open(link.href, "_blank", "toolbar=no, location=yes, status=no, menubar=no, scrollbars=yes, top=" +
            top +
            ", left=" +
            left +
            ", width=" +
            width +
            ", height=" +
            height);
        if (globalVars_1.GlobalVars.childWindow) {
            // Start monitoring the authentication window so that we can detect if it gets closed before the flow completes
            startAuthenticationWindowMonitor();
        }
        else {
            // If we failed to open the window, fail the authentication flow
            handleFailure("FailedToOpenWindow");
        }
    }
    function stopAuthenticationWindowMonitor() {
        if (authWindowMonitor) {
            clearInterval(authWindowMonitor);
            authWindowMonitor = 0;
        }
        delete globalVars_1.GlobalVars.handlers["initialize"];
        delete globalVars_1.GlobalVars.handlers["navigateCrossDomain"];
    }
    function startAuthenticationWindowMonitor() {
        // Stop the previous window monitor if one is running
        stopAuthenticationWindowMonitor();
        // Create an interval loop that
        // - Notifies the caller of failure if it detects that the authentication window is closed
        // - Keeps pinging the authentication window while it is open to re-establish
        //   contact with any pages along the authentication flow that need to communicate
        //   with us
        authWindowMonitor = globalVars_1.GlobalVars.currentWindow.setInterval(function () {
            if (!globalVars_1.GlobalVars.childWindow || globalVars_1.GlobalVars.childWindow.closed) {
                handleFailure("CancelledByUser");
            }
            else {
                var savedChildOrigin = globalVars_1.GlobalVars.childOrigin;
                try {
                    globalVars_1.GlobalVars.childOrigin = "*";
                    internalAPIs_1.sendMessageRequest(globalVars_1.GlobalVars.childWindow, "ping");
                }
                finally {
                    globalVars_1.GlobalVars.childOrigin = savedChildOrigin;
                }
            }
        }, 100);
        // Set up an initialize-message handler that gives the authentication window its frame context
        globalVars_1.GlobalVars.handlers["initialize"] = function () {
            return [constants_1.frameContexts.authentication, globalVars_1.GlobalVars.hostClientType];
        };
        // Set up a navigateCrossDomain message handler that blocks cross-domain re-navigation attempts
        // in the authentication window. We could at some point choose to implement this method via a call to
        // authenticationWindow.location.href = url; however, we would first need to figure out how to
        // validate the URL against the tab's list of valid domains.
        globalVars_1.GlobalVars.handlers["navigateCrossDomain"] = function (url) {
            return false;
        };
    }
    /**
     * Notifies the frame that initiated this authentication request that the request was successful.
     * This function is usable only on the authentication window.
     * This call causes the authentication window to be closed.
     * @param result Specifies a result for the authentication. If specified, the frame that initiated the authentication pop-up receives this value in its callback.
     * @param callbackUrl Specifies the url to redirect back to if the client is Win32 Outlook.
     */
    function notifySuccess(result, callbackUrl) {
        redirectIfWin32Outlook(callbackUrl, "result", result);
        internalAPIs_1.ensureInitialized(constants_1.frameContexts.authentication);
        internalAPIs_1.sendMessageRequest(globalVars_1.GlobalVars.parentWindow, "authentication.authenticate.success", [
            result
        ]);
        // Wait for the message to be sent before closing the window
        internalAPIs_1.waitForMessageQueue(globalVars_1.GlobalVars.parentWindow, function () { return setTimeout(function () { return globalVars_1.GlobalVars.currentWindow.close(); }, 200); });
    }
    authentication.notifySuccess = notifySuccess;
    /**
     * Notifies the frame that initiated this authentication request that the request failed.
     * This function is usable only on the authentication window.
     * This call causes the authentication window to be closed.
     * @param result Specifies a result for the authentication. If specified, the frame that initiated the authentication pop-up receives this value in its callback.
     * @param callbackUrl Specifies the url to redirect back to if the client is Win32 Outlook.
     */
    function notifyFailure(reason, callbackUrl) {
        redirectIfWin32Outlook(callbackUrl, "reason", reason);
        internalAPIs_1.ensureInitialized(constants_1.frameContexts.authentication);
        internalAPIs_1.sendMessageRequest(globalVars_1.GlobalVars.parentWindow, "authentication.authenticate.failure", [
            reason
        ]);
        // Wait for the message to be sent before closing the window
        internalAPIs_1.waitForMessageQueue(globalVars_1.GlobalVars.parentWindow, function () { return setTimeout(function () { return globalVars_1.GlobalVars.currentWindow.close(); }, 200); });
    }
    authentication.notifyFailure = notifyFailure;
    function handleSuccess(result) {
        try {
            if (authParams && authParams.successCallback) {
                authParams.successCallback(result);
            }
        }
        finally {
            authParams = null;
            closeAuthenticationWindow();
        }
    }
    function handleFailure(reason) {
        try {
            if (authParams && authParams.failureCallback) {
                authParams.failureCallback(reason);
            }
        }
        finally {
            authParams = null;
            closeAuthenticationWindow();
        }
    }
    /**
     * Validates that the callbackUrl param is a valid connector url, appends the result/reason and authSuccess/authFailure as URL fragments and redirects the window
     * @param callbackUrl - the connectors url to redirect to
     * @param key - "result" in case of success and "reason" in case of failure
     * @param value - the value of the passed result/reason parameter
     */
    function redirectIfWin32Outlook(callbackUrl, key, value) {
        if (callbackUrl) {
            var link = document.createElement("a");
            link.href = decodeURIComponent(callbackUrl);
            if (link.host &&
                link.host !== window.location.host &&
                link.host === "outlook.office.com" &&
                link.search.indexOf("client_type=Win32_Outlook") > -1) {
                if (key && key === "result") {
                    if (value) {
                        link.href = updateUrlParameter(link.href, "result", value);
                    }
                    globalVars_1.GlobalVars.currentWindow.location.assign(updateUrlParameter(link.href, "authSuccess", ""));
                }
                if (key && key === "reason") {
                    if (value) {
                        link.href = updateUrlParameter(link.href, "reason", value);
                    }
                    globalVars_1.GlobalVars.currentWindow.location.assign(updateUrlParameter(link.href, "authFailure", ""));
                }
            }
        }
    }
    /**
     * Appends either result or reason as a fragment to the 'callbackUrl'
     * @param uri - the url to modify
     * @param key - the fragment key
     * @param value - the fragment value
     */
    function updateUrlParameter(uri, key, value) {
        var i = uri.indexOf("#");
        var hash = i === -1 ? "#" : uri.substr(i);
        hash = hash + "&" + key + (value !== "" ? "=" + value : "");
        uri = i === -1 ? uri : uri.substr(0, i);
        return uri + hash;
    }
})(authentication = exports.authentication || (exports.authentication = {}));


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var internalAPIs_1 = __webpack_require__(1);
var globalVars_1 = __webpack_require__(0);
var constants_1 = __webpack_require__(2);
var appWindow_1 = __webpack_require__(5);
/**
 * Namespace to interact with the task module-specific part of the SDK.
 * This object is usable only on the content frame.
 */
var tasks;
(function (tasks) {
    /**
     * Allows an app to open the task module.
     * @param taskInfo An object containing the parameters of the task module
     * @param submitHandler Handler to call when the task module is completed
     */
    function startTask(taskInfo, submitHandler) {
        internalAPIs_1.ensureInitialized(constants_1.frameContexts.content);
        var messageId = internalAPIs_1.sendMessageRequest(globalVars_1.GlobalVars.parentWindow, "tasks.startTask", [
            taskInfo
        ]);
        globalVars_1.GlobalVars.callbacks[messageId] = submitHandler;
        return new appWindow_1.ChildAppWindow();
    }
    tasks.startTask = startTask;
    /**
     * Update height/width task info properties.
     * @param taskInfo An object containing width and height properties
     */
    function updateTask(taskInfo) {
        internalAPIs_1.ensureInitialized(constants_1.frameContexts.content, constants_1.frameContexts.task);
        var width = taskInfo.width, height = taskInfo.height, extra = __rest(taskInfo, ["width", "height"]);
        if (!Object.keys(extra).length) {
            internalAPIs_1.sendMessageRequest(globalVars_1.GlobalVars.parentWindow, "tasks.updateTask", [taskInfo]);
        }
        else {
            throw new Error("updateTask requires a taskInfo argument containing only width and height");
        }
    }
    tasks.updateTask = updateTask;
    /**
     * Submit the task module.
     * @param result Contains the result to be sent to the bot or the app. Typically a JSON object or a serialized version of it
     * @param appIds Helps to validate that the call originates from the same appId as the one that invoked the task module
     */
    function submitTask(result, appIds) {
        internalAPIs_1.ensureInitialized(constants_1.frameContexts.content, constants_1.frameContexts.task);
        // Send tasks.completeTask instead of tasks.submitTask message for backward compatibility with Mobile clients
        internalAPIs_1.sendMessageRequest(globalVars_1.GlobalVars.parentWindow, "tasks.completeTask", [
            result,
            Array.isArray(appIds) ? appIds : [appIds]
        ]);
    }
    tasks.submitTask = submitTask;
})(tasks = exports.tasks || (exports.tasks = {}));


/***/ })
/******/ ]);
});
//# sourceMappingURL=MicrosoftTeams.min.js.map

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./src/utils.ts
let inputs = {};
let container = document.createElement("div");
container.classList.add("moduleContainer");
let isInitializedCalled = false;
function addModule(config) {
    var element = document.createElement("div");
    var button = document.createElement("button");
    button.appendChild(document.createTextNode(config.name));
    button.id = "button-" + config.name;
    element.appendChild(button);
    element.appendChild(document.createElement("br"));
    if (config.inputs) {
        element.appendChild(document.createElement("br"));
        for (var i = 0; i < config.inputs.length; i++) {
            var label = document.createElement("label");
            label.appendChild(document.createTextNode(config.inputs[i].name + ":"));
            element.appendChild(label);
            element.appendChild(document.createElement("br"));
            var input;
            var valueGetter;
            switch (config.inputs[i].type) {
                case "string":
                    input = document.createElement("input");
                    valueGetter = function () {
                        return input.value;
                    };
                    break;
                case "boolean":
                    input = document.createElement("input");
                    input.type = "checkbox";
                    valueGetter = function () {
                        return input.checked;
                    };
                    break;
                case "object":
                    input = document.createElement("textarea");
                    valueGetter = function () {
                        input.style.backgroundColor = "";
                        try {
                            return JSON.parse(input.value);
                        }
                        catch (e) {
                            input.style.backgroundColor = "red";
                            return null;
                        }
                    };
                    break;
            }
            config.inputs[i].valueGetter = valueGetter;
            input.id = "input-" + config.name + "-" + i;
            element.appendChild(input);
            inputs[input.id] = input;
            element.appendChild(document.createElement("br"));
        }
    }
    if (config.hasOutput) {
        var label = document.createElement("label");
        element.appendChild(document.createElement("br"));
        label.appendChild(document.createTextNode("Output:"));
        element.appendChild(label);
        element.appendChild(document.createElement("br"));
        var textarea = document.createElement("textarea");
        textarea.id = "textarea-" + config.name;
        element.appendChild(textarea);
    }
    container.appendChild(element);
    button.addEventListener("click", function () {
        if (config.name == "initialize") {
            isInitializedCalled = true;
        }
        else if (config.initializedRequired && !isInitializedCalled) {
            // Get the modal
            var modal = document.getElementById("myModal");
            var messageBox = document.getElementById("errorMessage");
            messageBox.innerText = "Please initialize sdk first by clicking initialize Button";
            modal.style.display = "block";
        }
        else {
            var modal = document.getElementById("myModal");
            modal.style.display = "none";
        }
        var args = [];
        if (config.inputs) {
            for (var i = 0; i < config.inputs.length; i++) {
                var inputValue = config.inputs[i].valueGetter();
                if (inputValue === null) {
                    return;
                }
                args.push(inputValue);
            }
        }
        if (config.hasOutput) {
            args.push(function (result) {
                if (typeof result !== "string") {
                    result = JSON.stringify(result);
                }
                textarea.value = result;
            });
        }
        config.action.apply(null, args);
    });
}
function restoreState() {
    var stateStr = localStorage.getItem("state");
    if (!stateStr) {
        return;
    }
    var state = JSON.parse(stateStr);
    for (var id in state) {
        inputs[id].value = state[id];
    }
}
function saveState() {
    var state = {};
    for (var id in inputs) {
        state[id] = inputs[id].value;
    }
    localStorage.setItem("state", JSON.stringify(state));
}
function downloadHandler() {
    var input = document.querySelector("#image_uploads");
    var preview = document.querySelector(".fileUploadPreview");
    input.style.opacity = 0;
    input.addEventListener("change", updateImageDisplay);
    function updateImageDisplay() {
        while (preview.firstChild) {
            preview.removeChild(preview.firstChild);
        }
        var curFiles = input.files;
        if (curFiles.length === 0) {
            var para = document.createElement("p");
            para.textContent = "No files currently selected for upload";
            preview.appendChild(para);
        }
        else {
            var list = document.createElement("ol");
            preview.appendChild(list);
            for (var i = 0; i < curFiles.length; i++) {
                var listItem = document.createElement("li");
                var para = document.createElement("p");
                if (validFileType(curFiles[i])) {
                    para.textContent =
                        "File name " +
                            curFiles[i].name +
                            ", file size " +
                            returnFileSize(curFiles[i].size) +
                            ".";
                    var image = document.createElement("img");
                    image.src = window.URL.createObjectURL(curFiles[i]);
                    listItem.appendChild(image);
                    listItem.appendChild(para);
                }
                else {
                    para.textContent =
                        "File name " +
                            curFiles[i].name +
                            ": Not a valid file type. Update your selection.";
                    listItem.appendChild(para);
                }
                list.appendChild(listItem);
            }
        }
    }
    var fileTypes = ["image/jpeg", "image/pjpeg", "image/png"];
    function validFileType(file) {
        for (var i = 0; i < fileTypes.length; i++) {
            if (file.type === fileTypes[i]) {
                return true;
            }
        }
        return false;
    }
    function returnFileSize(number) {
        if (number < 1024) {
            return number + "bytes";
        }
        else if (number >= 1024 && number < 1048576) {
            return (number / 1024).toFixed(1) + "KB";
        }
        else if (number >= 1048576) {
            return (number / 1048576).toFixed(1) + "MB";
        }
    }
}

// EXTERNAL MODULE: ../microsoft-teams-library-js/dist/MicrosoftTeams.min.js
var MicrosoftTeams_min = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}
// CONCATENATED MODULE: ./node_modules/resolve-pathname/index.js
function isAbsolute(pathname) {
  return pathname.charAt(0) === '/';
}

// About 1.5x faster than the two-arg version of Array#splice()
function spliceOne(list, index) {
  for (var i = index, k = i + 1, n = list.length; k < n; i += 1, k += 1) {
    list[i] = list[k];
  }

  list.pop();
}

// This implementation is based heavily on node's url.parse
function resolvePathname(to) {
  var from = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

  var toParts = to && to.split('/') || [];
  var fromParts = from && from.split('/') || [];

  var isToAbs = to && isAbsolute(to);
  var isFromAbs = from && isAbsolute(from);
  var mustEndAbs = isToAbs || isFromAbs;

  if (to && isAbsolute(to)) {
    // to is absolute
    fromParts = toParts;
  } else if (toParts.length) {
    // to is relative, drop the filename
    fromParts.pop();
    fromParts = fromParts.concat(toParts);
  }

  if (!fromParts.length) return '/';

  var hasTrailingSlash = void 0;
  if (fromParts.length) {
    var last = fromParts[fromParts.length - 1];
    hasTrailingSlash = last === '.' || last === '..' || last === '';
  } else {
    hasTrailingSlash = false;
  }

  var up = 0;
  for (var i = fromParts.length; i >= 0; i--) {
    var part = fromParts[i];

    if (part === '.') {
      spliceOne(fromParts, i);
    } else if (part === '..') {
      spliceOne(fromParts, i);
      up++;
    } else if (up) {
      spliceOne(fromParts, i);
      up--;
    }
  }

  if (!mustEndAbs) for (; up--; up) {
    fromParts.unshift('..');
  }if (mustEndAbs && fromParts[0] !== '' && (!fromParts[0] || !isAbsolute(fromParts[0]))) fromParts.unshift('');

  var result = fromParts.join('/');

  if (hasTrailingSlash && result.substr(-1) !== '/') result += '/';

  return result;
}

/* harmony default export */ var resolve_pathname = (resolvePathname);
// CONCATENATED MODULE: ./node_modules/value-equal/index.js
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function valueEqual(a, b) {
  if (a === b) return true;

  if (a == null || b == null) return false;

  if (Array.isArray(a)) {
    return Array.isArray(b) && a.length === b.length && a.every(function (item, index) {
      return valueEqual(item, b[index]);
    });
  }

  var aType = typeof a === 'undefined' ? 'undefined' : _typeof(a);
  var bType = typeof b === 'undefined' ? 'undefined' : _typeof(b);

  if (aType !== bType) return false;

  if (aType === 'object') {
    var aValue = a.valueOf();
    var bValue = b.valueOf();

    if (aValue !== a || bValue !== b) return valueEqual(aValue, bValue);

    var aKeys = Object.keys(a);
    var bKeys = Object.keys(b);

    if (aKeys.length !== bKeys.length) return false;

    return aKeys.every(function (key) {
      return valueEqual(a[key], b[key]);
    });
  }

  return false;
}

/* harmony default export */ var value_equal = (valueEqual);
// CONCATENATED MODULE: ./node_modules/tiny-invariant/dist/tiny-invariant.esm.js
var isProduction = "production" === 'production';
var prefix = 'Invariant failed';
function invariant(condition, message) {
  if (condition) {
    return;
  }

  if (isProduction) {
    throw new Error(prefix);
  } else {
    throw new Error(prefix + ": " + (message || ''));
  }
}

/* harmony default export */ var tiny_invariant_esm = (invariant);

// CONCATENATED MODULE: ./node_modules/history/esm/history.js






function addLeadingSlash(path) {
  return path.charAt(0) === '/' ? path : '/' + path;
}
function stripLeadingSlash(path) {
  return path.charAt(0) === '/' ? path.substr(1) : path;
}
function hasBasename(path, prefix) {
  return new RegExp('^' + prefix + '(\\/|\\?|#|$)', 'i').test(path);
}
function stripBasename(path, prefix) {
  return hasBasename(path, prefix) ? path.substr(prefix.length) : path;
}
function stripTrailingSlash(path) {
  return path.charAt(path.length - 1) === '/' ? path.slice(0, -1) : path;
}
function parsePath(path) {
  var pathname = path || '/';
  var search = '';
  var hash = '';
  var hashIndex = pathname.indexOf('#');

  if (hashIndex !== -1) {
    hash = pathname.substr(hashIndex);
    pathname = pathname.substr(0, hashIndex);
  }

  var searchIndex = pathname.indexOf('?');

  if (searchIndex !== -1) {
    search = pathname.substr(searchIndex);
    pathname = pathname.substr(0, searchIndex);
  }

  return {
    pathname: pathname,
    search: search === '?' ? '' : search,
    hash: hash === '#' ? '' : hash
  };
}
function createPath(location) {
  var pathname = location.pathname,
      search = location.search,
      hash = location.hash;
  var path = pathname || '/';
  if (search && search !== '?') path += search.charAt(0) === '?' ? search : "?" + search;
  if (hash && hash !== '#') path += hash.charAt(0) === '#' ? hash : "#" + hash;
  return path;
}

function createLocation(path, state, key, currentLocation) {
  var location;

  if (typeof path === 'string') {
    // Two-arg form: push(path, state)
    location = parsePath(path);
    location.state = state;
  } else {
    // One-arg form: push(location)
    location = _extends({}, path);
    if (location.pathname === undefined) location.pathname = '';

    if (location.search) {
      if (location.search.charAt(0) !== '?') location.search = '?' + location.search;
    } else {
      location.search = '';
    }

    if (location.hash) {
      if (location.hash.charAt(0) !== '#') location.hash = '#' + location.hash;
    } else {
      location.hash = '';
    }

    if (state !== undefined && location.state === undefined) location.state = state;
  }

  try {
    location.pathname = decodeURI(location.pathname);
  } catch (e) {
    if (e instanceof URIError) {
      throw new URIError('Pathname "' + location.pathname + '" could not be decoded. ' + 'This is likely caused by an invalid percent-encoding.');
    } else {
      throw e;
    }
  }

  if (key) location.key = key;

  if (currentLocation) {
    // Resolve incomplete/relative pathname relative to current location.
    if (!location.pathname) {
      location.pathname = currentLocation.pathname;
    } else if (location.pathname.charAt(0) !== '/') {
      location.pathname = resolve_pathname(location.pathname, currentLocation.pathname);
    }
  } else {
    // When there is no prior location and pathname is empty, set it to /
    if (!location.pathname) {
      location.pathname = '/';
    }
  }

  return location;
}
function locationsAreEqual(a, b) {
  return a.pathname === b.pathname && a.search === b.search && a.hash === b.hash && a.key === b.key && value_equal(a.state, b.state);
}

function createTransitionManager() {
  var prompt = null;

  function setPrompt(nextPrompt) {
     false ? undefined : void 0;
    prompt = nextPrompt;
    return function () {
      if (prompt === nextPrompt) prompt = null;
    };
  }

  function confirmTransitionTo(location, action, getUserConfirmation, callback) {
    // TODO: If another transition starts while we're still confirming
    // the previous one, we may end up in a weird state. Figure out the
    // best way to handle this.
    if (prompt != null) {
      var result = typeof prompt === 'function' ? prompt(location, action) : prompt;

      if (typeof result === 'string') {
        if (typeof getUserConfirmation === 'function') {
          getUserConfirmation(result, callback);
        } else {
           false ? undefined : void 0;
          callback(true);
        }
      } else {
        // Return false from a transition hook to cancel the transition.
        callback(result !== false);
      }
    } else {
      callback(true);
    }
  }

  var listeners = [];

  function appendListener(fn) {
    var isActive = true;

    function listener() {
      if (isActive) fn.apply(void 0, arguments);
    }

    listeners.push(listener);
    return function () {
      isActive = false;
      listeners = listeners.filter(function (item) {
        return item !== listener;
      });
    };
  }

  function notifyListeners() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    listeners.forEach(function (listener) {
      return listener.apply(void 0, args);
    });
  }

  return {
    setPrompt: setPrompt,
    confirmTransitionTo: confirmTransitionTo,
    appendListener: appendListener,
    notifyListeners: notifyListeners
  };
}

var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
function getConfirmation(message, callback) {
  callback(window.confirm(message)); // eslint-disable-line no-alert
}
/**
 * Returns true if the HTML5 history API is supported. Taken from Modernizr.
 *
 * https://github.com/Modernizr/Modernizr/blob/master/LICENSE
 * https://github.com/Modernizr/Modernizr/blob/master/feature-detects/history.js
 * changed to avoid false negatives for Windows Phones: https://github.com/reactjs/react-router/issues/586
 */

function supportsHistory() {
  var ua = window.navigator.userAgent;
  if ((ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) && ua.indexOf('Mobile Safari') !== -1 && ua.indexOf('Chrome') === -1 && ua.indexOf('Windows Phone') === -1) return false;
  return window.history && 'pushState' in window.history;
}
/**
 * Returns true if browser fires popstate on hash change.
 * IE10 and IE11 do not.
 */

function supportsPopStateOnHashChange() {
  return window.navigator.userAgent.indexOf('Trident') === -1;
}
/**
 * Returns false if using go(n) with hash history causes a full page reload.
 */

function supportsGoWithoutReloadUsingHash() {
  return window.navigator.userAgent.indexOf('Firefox') === -1;
}
/**
 * Returns true if a given popstate event is an extraneous WebKit event.
 * Accounts for the fact that Chrome on iOS fires real popstate events
 * containing undefined state when pressing the back button.
 */

function isExtraneousPopstateEvent(event) {
  event.state === undefined && navigator.userAgent.indexOf('CriOS') === -1;
}

var PopStateEvent = 'popstate';
var HashChangeEvent = 'hashchange';

function getHistoryState() {
  try {
    return window.history.state || {};
  } catch (e) {
    // IE 11 sometimes throws when accessing window.history.state
    // See https://github.com/ReactTraining/history/pull/289
    return {};
  }
}
/**
 * Creates a history object that uses the HTML5 history API including
 * pushState, replaceState, and the popstate event.
 */


function createBrowserHistory(props) {
  if (props === void 0) {
    props = {};
  }

  !canUseDOM ?  false ? undefined : tiny_invariant_esm(false) : void 0;
  var globalHistory = window.history;
  var canUseHistory = supportsHistory();
  var needsHashChangeListener = !supportsPopStateOnHashChange();
  var _props = props,
      _props$forceRefresh = _props.forceRefresh,
      forceRefresh = _props$forceRefresh === void 0 ? false : _props$forceRefresh,
      _props$getUserConfirm = _props.getUserConfirmation,
      getUserConfirmation = _props$getUserConfirm === void 0 ? getConfirmation : _props$getUserConfirm,
      _props$keyLength = _props.keyLength,
      keyLength = _props$keyLength === void 0 ? 6 : _props$keyLength;
  var basename = props.basename ? stripTrailingSlash(addLeadingSlash(props.basename)) : '';

  function getDOMLocation(historyState) {
    var _ref = historyState || {},
        key = _ref.key,
        state = _ref.state;

    var _window$location = window.location,
        pathname = _window$location.pathname,
        search = _window$location.search,
        hash = _window$location.hash;
    var path = pathname + search + hash;
     false ? undefined : void 0;
    if (basename) path = stripBasename(path, basename);
    return createLocation(path, state, key);
  }

  function createKey() {
    return Math.random().toString(36).substr(2, keyLength);
  }

  var transitionManager = createTransitionManager();

  function setState(nextState) {
    _extends(history, nextState);

    history.length = globalHistory.length;
    transitionManager.notifyListeners(history.location, history.action);
  }

  function handlePopState(event) {
    // Ignore extraneous popstate events in WebKit.
    if (isExtraneousPopstateEvent(event)) return;
    handlePop(getDOMLocation(event.state));
  }

  function handleHashChange() {
    handlePop(getDOMLocation(getHistoryState()));
  }

  var forceNextPop = false;

  function handlePop(location) {
    if (forceNextPop) {
      forceNextPop = false;
      setState();
    } else {
      var action = 'POP';
      transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
        if (ok) {
          setState({
            action: action,
            location: location
          });
        } else {
          revertPop(location);
        }
      });
    }
  }

  function revertPop(fromLocation) {
    var toLocation = history.location; // TODO: We could probably make this more reliable by
    // keeping a list of keys we've seen in sessionStorage.
    // Instead, we just default to 0 for keys we don't know.

    var toIndex = allKeys.indexOf(toLocation.key);
    if (toIndex === -1) toIndex = 0;
    var fromIndex = allKeys.indexOf(fromLocation.key);
    if (fromIndex === -1) fromIndex = 0;
    var delta = toIndex - fromIndex;

    if (delta) {
      forceNextPop = true;
      go(delta);
    }
  }

  var initialLocation = getDOMLocation(getHistoryState());
  var allKeys = [initialLocation.key]; // Public interface

  function createHref(location) {
    return basename + createPath(location);
  }

  function push(path, state) {
     false ? undefined : void 0;
    var action = 'PUSH';
    var location = createLocation(path, state, createKey(), history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      var href = createHref(location);
      var key = location.key,
          state = location.state;

      if (canUseHistory) {
        globalHistory.pushState({
          key: key,
          state: state
        }, null, href);

        if (forceRefresh) {
          window.location.href = href;
        } else {
          var prevIndex = allKeys.indexOf(history.location.key);
          var nextKeys = allKeys.slice(0, prevIndex === -1 ? 0 : prevIndex + 1);
          nextKeys.push(location.key);
          allKeys = nextKeys;
          setState({
            action: action,
            location: location
          });
        }
      } else {
         false ? undefined : void 0;
        window.location.href = href;
      }
    });
  }

  function replace(path, state) {
     false ? undefined : void 0;
    var action = 'REPLACE';
    var location = createLocation(path, state, createKey(), history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      var href = createHref(location);
      var key = location.key,
          state = location.state;

      if (canUseHistory) {
        globalHistory.replaceState({
          key: key,
          state: state
        }, null, href);

        if (forceRefresh) {
          window.location.replace(href);
        } else {
          var prevIndex = allKeys.indexOf(history.location.key);
          if (prevIndex !== -1) allKeys[prevIndex] = location.key;
          setState({
            action: action,
            location: location
          });
        }
      } else {
         false ? undefined : void 0;
        window.location.replace(href);
      }
    });
  }

  function go(n) {
    globalHistory.go(n);
  }

  function goBack() {
    go(-1);
  }

  function goForward() {
    go(1);
  }

  var listenerCount = 0;

  function checkDOMListeners(delta) {
    listenerCount += delta;

    if (listenerCount === 1 && delta === 1) {
      window.addEventListener(PopStateEvent, handlePopState);
      if (needsHashChangeListener) window.addEventListener(HashChangeEvent, handleHashChange);
    } else if (listenerCount === 0) {
      window.removeEventListener(PopStateEvent, handlePopState);
      if (needsHashChangeListener) window.removeEventListener(HashChangeEvent, handleHashChange);
    }
  }

  var isBlocked = false;

  function block(prompt) {
    if (prompt === void 0) {
      prompt = false;
    }

    var unblock = transitionManager.setPrompt(prompt);

    if (!isBlocked) {
      checkDOMListeners(1);
      isBlocked = true;
    }

    return function () {
      if (isBlocked) {
        isBlocked = false;
        checkDOMListeners(-1);
      }

      return unblock();
    };
  }

  function listen(listener) {
    var unlisten = transitionManager.appendListener(listener);
    checkDOMListeners(1);
    return function () {
      checkDOMListeners(-1);
      unlisten();
    };
  }

  var history = {
    length: globalHistory.length,
    action: 'POP',
    location: initialLocation,
    createHref: createHref,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    block: block,
    listen: listen
  };
  return history;
}

var HashChangeEvent$1 = 'hashchange';
var HashPathCoders = {
  hashbang: {
    encodePath: function encodePath(path) {
      return path.charAt(0) === '!' ? path : '!/' + stripLeadingSlash(path);
    },
    decodePath: function decodePath(path) {
      return path.charAt(0) === '!' ? path.substr(1) : path;
    }
  },
  noslash: {
    encodePath: stripLeadingSlash,
    decodePath: addLeadingSlash
  },
  slash: {
    encodePath: addLeadingSlash,
    decodePath: addLeadingSlash
  }
};

function getHashPath() {
  // We can't use window.location.hash here because it's not
  // consistent across browsers - Firefox will pre-decode it!
  var href = window.location.href;
  var hashIndex = href.indexOf('#');
  return hashIndex === -1 ? '' : href.substring(hashIndex + 1);
}

function pushHashPath(path) {
  window.location.hash = path;
}

function replaceHashPath(path) {
  var hashIndex = window.location.href.indexOf('#');
  window.location.replace(window.location.href.slice(0, hashIndex >= 0 ? hashIndex : 0) + '#' + path);
}

function createHashHistory(props) {
  if (props === void 0) {
    props = {};
  }

  !canUseDOM ?  false ? undefined : tiny_invariant_esm(false) : void 0;
  var globalHistory = window.history;
  var canGoWithoutReload = supportsGoWithoutReloadUsingHash();
  var _props = props,
      _props$getUserConfirm = _props.getUserConfirmation,
      getUserConfirmation = _props$getUserConfirm === void 0 ? getConfirmation : _props$getUserConfirm,
      _props$hashType = _props.hashType,
      hashType = _props$hashType === void 0 ? 'slash' : _props$hashType;
  var basename = props.basename ? stripTrailingSlash(addLeadingSlash(props.basename)) : '';
  var _HashPathCoders$hashT = HashPathCoders[hashType],
      encodePath = _HashPathCoders$hashT.encodePath,
      decodePath = _HashPathCoders$hashT.decodePath;

  function getDOMLocation() {
    var path = decodePath(getHashPath());
     false ? undefined : void 0;
    if (basename) path = stripBasename(path, basename);
    return createLocation(path);
  }

  var transitionManager = createTransitionManager();

  function setState(nextState) {
    _extends(history, nextState);

    history.length = globalHistory.length;
    transitionManager.notifyListeners(history.location, history.action);
  }

  var forceNextPop = false;
  var ignorePath = null;

  function handleHashChange() {
    var path = getHashPath();
    var encodedPath = encodePath(path);

    if (path !== encodedPath) {
      // Ensure we always have a properly-encoded hash.
      replaceHashPath(encodedPath);
    } else {
      var location = getDOMLocation();
      var prevLocation = history.location;
      if (!forceNextPop && locationsAreEqual(prevLocation, location)) return; // A hashchange doesn't always == location change.

      if (ignorePath === createPath(location)) return; // Ignore this change; we already setState in push/replace.

      ignorePath = null;
      handlePop(location);
    }
  }

  function handlePop(location) {
    if (forceNextPop) {
      forceNextPop = false;
      setState();
    } else {
      var action = 'POP';
      transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
        if (ok) {
          setState({
            action: action,
            location: location
          });
        } else {
          revertPop(location);
        }
      });
    }
  }

  function revertPop(fromLocation) {
    var toLocation = history.location; // TODO: We could probably make this more reliable by
    // keeping a list of paths we've seen in sessionStorage.
    // Instead, we just default to 0 for paths we don't know.

    var toIndex = allPaths.lastIndexOf(createPath(toLocation));
    if (toIndex === -1) toIndex = 0;
    var fromIndex = allPaths.lastIndexOf(createPath(fromLocation));
    if (fromIndex === -1) fromIndex = 0;
    var delta = toIndex - fromIndex;

    if (delta) {
      forceNextPop = true;
      go(delta);
    }
  } // Ensure the hash is encoded properly before doing anything else.


  var path = getHashPath();
  var encodedPath = encodePath(path);
  if (path !== encodedPath) replaceHashPath(encodedPath);
  var initialLocation = getDOMLocation();
  var allPaths = [createPath(initialLocation)]; // Public interface

  function createHref(location) {
    return '#' + encodePath(basename + createPath(location));
  }

  function push(path, state) {
     false ? undefined : void 0;
    var action = 'PUSH';
    var location = createLocation(path, undefined, undefined, history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      var path = createPath(location);
      var encodedPath = encodePath(basename + path);
      var hashChanged = getHashPath() !== encodedPath;

      if (hashChanged) {
        // We cannot tell if a hashchange was caused by a PUSH, so we'd
        // rather setState here and ignore the hashchange. The caveat here
        // is that other hash histories in the page will consider it a POP.
        ignorePath = path;
        pushHashPath(encodedPath);
        var prevIndex = allPaths.lastIndexOf(createPath(history.location));
        var nextPaths = allPaths.slice(0, prevIndex === -1 ? 0 : prevIndex + 1);
        nextPaths.push(path);
        allPaths = nextPaths;
        setState({
          action: action,
          location: location
        });
      } else {
         false ? undefined : void 0;
        setState();
      }
    });
  }

  function replace(path, state) {
     false ? undefined : void 0;
    var action = 'REPLACE';
    var location = createLocation(path, undefined, undefined, history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      var path = createPath(location);
      var encodedPath = encodePath(basename + path);
      var hashChanged = getHashPath() !== encodedPath;

      if (hashChanged) {
        // We cannot tell if a hashchange was caused by a REPLACE, so we'd
        // rather setState here and ignore the hashchange. The caveat here
        // is that other hash histories in the page will consider it a POP.
        ignorePath = path;
        replaceHashPath(encodedPath);
      }

      var prevIndex = allPaths.indexOf(createPath(history.location));
      if (prevIndex !== -1) allPaths[prevIndex] = path;
      setState({
        action: action,
        location: location
      });
    });
  }

  function go(n) {
     false ? undefined : void 0;
    globalHistory.go(n);
  }

  function goBack() {
    go(-1);
  }

  function goForward() {
    go(1);
  }

  var listenerCount = 0;

  function checkDOMListeners(delta) {
    listenerCount += delta;

    if (listenerCount === 1 && delta === 1) {
      window.addEventListener(HashChangeEvent$1, handleHashChange);
    } else if (listenerCount === 0) {
      window.removeEventListener(HashChangeEvent$1, handleHashChange);
    }
  }

  var isBlocked = false;

  function block(prompt) {
    if (prompt === void 0) {
      prompt = false;
    }

    var unblock = transitionManager.setPrompt(prompt);

    if (!isBlocked) {
      checkDOMListeners(1);
      isBlocked = true;
    }

    return function () {
      if (isBlocked) {
        isBlocked = false;
        checkDOMListeners(-1);
      }

      return unblock();
    };
  }

  function listen(listener) {
    var unlisten = transitionManager.appendListener(listener);
    checkDOMListeners(1);
    return function () {
      checkDOMListeners(-1);
      unlisten();
    };
  }

  var history = {
    length: globalHistory.length,
    action: 'POP',
    location: initialLocation,
    createHref: createHref,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    block: block,
    listen: listen
  };
  return history;
}

function clamp(n, lowerBound, upperBound) {
  return Math.min(Math.max(n, lowerBound), upperBound);
}
/**
 * Creates a history object that stores locations in memory.
 */


function createMemoryHistory(props) {
  if (props === void 0) {
    props = {};
  }

  var _props = props,
      getUserConfirmation = _props.getUserConfirmation,
      _props$initialEntries = _props.initialEntries,
      initialEntries = _props$initialEntries === void 0 ? ['/'] : _props$initialEntries,
      _props$initialIndex = _props.initialIndex,
      initialIndex = _props$initialIndex === void 0 ? 0 : _props$initialIndex,
      _props$keyLength = _props.keyLength,
      keyLength = _props$keyLength === void 0 ? 6 : _props$keyLength;
  var transitionManager = createTransitionManager();

  function setState(nextState) {
    _extends(history, nextState);

    history.length = history.entries.length;
    transitionManager.notifyListeners(history.location, history.action);
  }

  function createKey() {
    return Math.random().toString(36).substr(2, keyLength);
  }

  var index = clamp(initialIndex, 0, initialEntries.length - 1);
  var entries = initialEntries.map(function (entry) {
    return typeof entry === 'string' ? createLocation(entry, undefined, createKey()) : createLocation(entry, undefined, entry.key || createKey());
  }); // Public interface

  var createHref = createPath;

  function push(path, state) {
     false ? undefined : void 0;
    var action = 'PUSH';
    var location = createLocation(path, state, createKey(), history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      var prevIndex = history.index;
      var nextIndex = prevIndex + 1;
      var nextEntries = history.entries.slice(0);

      if (nextEntries.length > nextIndex) {
        nextEntries.splice(nextIndex, nextEntries.length - nextIndex, location);
      } else {
        nextEntries.push(location);
      }

      setState({
        action: action,
        location: location,
        index: nextIndex,
        entries: nextEntries
      });
    });
  }

  function replace(path, state) {
     false ? undefined : void 0;
    var action = 'REPLACE';
    var location = createLocation(path, state, createKey(), history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      history.entries[history.index] = location;
      setState({
        action: action,
        location: location
      });
    });
  }

  function go(n) {
    var nextIndex = clamp(history.index + n, 0, history.entries.length - 1);
    var action = 'POP';
    var location = history.entries[nextIndex];
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (ok) {
        setState({
          action: action,
          location: location,
          index: nextIndex
        });
      } else {
        // Mimic the behavior of DOM histories by
        // causing a render after a cancelled POP.
        setState();
      }
    });
  }

  function goBack() {
    go(-1);
  }

  function goForward() {
    go(1);
  }

  function canGo(n) {
    var nextIndex = history.index + n;
    return nextIndex >= 0 && nextIndex < history.entries.length;
  }

  function block(prompt) {
    if (prompt === void 0) {
      prompt = false;
    }

    return transitionManager.setPrompt(prompt);
  }

  function listen(listener) {
    return transitionManager.appendListener(listener);
  }

  var history = {
    length: entries.length,
    action: 'POP',
    location: entries[index],
    index: index,
    entries: entries,
    createHref: createHref,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    canGo: canGo,
    block: block,
    listen: listen
  };
  return history;
}



// CONCATENATED MODULE: ./src/app.ts



const app_history = createBrowserHistory();
const initializeAppModules = () => {
    let totalStates = 0;
    addModule({
        name: "initialize",
        initializedRequired: false,
        action: function () {
            MicrosoftTeams_min["initialize"]();
        }
    });
    addModule({
        name: "getContext",
        initializedRequired: true,
        hasOutput: true,
        action: function (output) {
            MicrosoftTeams_min["getContext"](output);
        }
    });
    addModule({
        name: "navigateCrossDomain",
        initializedRequired: true,
        inputs: [{
                type: "string",
                name: "url"
            }],
        action: function (url) {
            MicrosoftTeams_min["navigateCrossDomain"](url);
        }
    });
    addModule({
        name: "registerOnThemeChangeHandler",
        initializedRequired: true,
        hasOutput: true,
        action: function (output) {
            MicrosoftTeams_min["registerOnThemeChangeHandler"](output);
        }
    });
    addModule({
        name: "registerChangeSettingsHandler",
        initializedRequired: true,
        hasOutput: true,
        action: function (output) {
            MicrosoftTeams_min["registerChangeSettingsHandler"](function () {
                output("Change Settings Event recieved");
            });
        }
    });
    addModule({
        name: "shareDeepLink",
        initializedRequired: true,
        inputs: [{
                type: "object",
                name: "deepLinkParameters"
            }],
        action: function (deepLinkParameters) {
            MicrosoftTeams_min["shareDeepLink"](deepLinkParameters);
        }
    });
    addModule({
        name: "executeDeepLink",
        initializedRequired: true,
        inputs: [{
                type: "string",
                name: "deepLink"
            }],
        action: function (deepLink) {
            MicrosoftTeams_min["executeDeepLink"](deepLink);
        }
    });
    addModule({
        name: "authentication.authenticate",
        initializedRequired: true,
        inputs: [{
                type: "string",
                name: "url"
            }],
        hasOutput: true,
        action: function (url, output) {
            MicrosoftTeams_min["authentication"].authenticate({
                url: url,
                successCallback: function (result) {
                    output("Success:" + result);
                },
                failureCallback: function (reason) {
                    output("Failure:" + reason);
                    MessageEvent;
                },
            });
        }
    });
    addModule({
        name: "authentication.notifyFailure",
        initializedRequired: true,
        inputs: [{
                type: "string",
                name: "reason"
            }],
        action: function (reason) {
            MicrosoftTeams_min["authentication"].notifyFailure(reason);
        }
    });
    addModule({
        name: "authentication.notifySuccess",
        initializedRequired: true,
        inputs: [{
                type: "string",
                name: "result"
            }],
        action: function (result) {
            MicrosoftTeams_min["authentication"].notifySuccess(result);
        }
    });
    addModule({
        name: "settings.getSettings",
        initializedRequired: true,
        hasOutput: true,
        action: function (output) {
            MicrosoftTeams_min["settings"].getSettings(output);
        }
    });
    addModule({
        name: "settings.registerOnSaveHandler",
        initializedRequired: true,
        hasOutput: true,
        action: function (output) {
            MicrosoftTeams_min["settings"].registerOnSaveHandler(function (saveEvent) {
                window.saveEvent = saveEvent;
                output("SaveEvent recieved");
            });
        }
    });
    addModule({
        name: "settings.registerOnSaveHandler.notifyFailure",
        initializedRequired: true,
        inputs: [{
                type: "string",
                name: "reason"
            }],
        action: function (reason) {
            window.saveEvent && window.saveEvent.notifyFailure(reason);
        }
    });
    addModule({
        name: "settings.registerOnSaveHandler.notifySuccess",
        initializedRequired: true,
        action: function () {
            window.saveEvent && window.saveEvent.notifySuccess();
        }
    });
    addModule({
        name: "settings.setSettings",
        initializedRequired: true,
        inputs: [{
                type: "object",
                name: "settings"
            }],
        action: function (settings) {
            MicrosoftTeams_min["settings"].setSettings(settings);
        }
    });
    addModule({
        name: "settings.setValidityState",
        initializedRequired: true,
        inputs: [{
                type: "boolean",
                name: "validityState"
            }],
        action: function (validityState) {
            MicrosoftTeams_min["settings"].setValidityState(validityState);
        }
    });
    addModule({
        name: "openFilePreview",
        initializedRequired: true,
        inputs: [{
                type: "object",
                name: "filePreviewParameters"
            }],
        action: function (filePreviewParameters) {
            MicrosoftTeams_min["openFilePreview"](filePreviewParameters);
        }
    });
    addModule({
        name: "task.submitTask",
        initializedRequired: true,
        inputs: [{
                type: "string",
                name: "result"
            },
            {
                type: "string",
                name: "appId"
            }],
        action: function (result, appId) {
            MicrosoftTeams_min["tasks"].submitTask(result, appId);
        }
    });
    addModule({
        name: "tasks.startTask",
        initializedRequired: true,
        inputs: [{
                type: "object",
                name: "taskInfo"
            }],
        action: function (taskInfo) {
            MicrosoftTeams_min["tasks"].startTask(taskInfo);
        }
    });
    addModule({
        name: "downloadFile ShowNotificationOnly",
        initializedRequired: true,
        inputs: [{
                type: "object",
                name: "showNotificationParameters"
            }],
        action: function (showNotificationParameters) {
            MicrosoftTeams_min["showNotification"](showNotificationParameters);
        }
    });
    addModule({
        name: "getAuthToken",
        initializedRequired: true,
        hasOutput: true,
        inputs: [{
                type: "object",
                name: "getAuthTokenParameters"
            }],
        action: function (getAuthTokenParameters, output) {
            getAuthTokenParameters.successCallback = (token) => {
                output("Success: " + token);
            };
            getAuthTokenParameters.failureCallback = (reason) => {
                output("Failure: " + reason);
            };
            MicrosoftTeams_min["authentication"].getAuthToken(getAuthTokenParameters);
        }
    });
    addModule({
        name: "getChatMembers",
        initializedRequired: true,
        hasOutput: true,
        action: function (output) {
            MicrosoftTeams_min["getChatMembers"](output);
        }
    });
    addModule({
        name: "getUserJoinedTeams",
        initializedRequired: true,
        hasOutput: true,
        action: function (output) {
            MicrosoftTeams_min;
            MicrosoftTeams_min["getUserJoinedTeams"](output);
        }
    });
    addModule({
        name: "registerBeforeUnload",
        initializedRequired: true,
        hasOutput: true,
        action: function (output) {
            MicrosoftTeams_min["registerBeforeUnloadHandler"](function (readyToUnload) {
                window.readyToUnload = readyToUnload;
                alert('beforeUnload recieved');
                return true;
            });
        }
    });
    addModule({
        name: "readyToUnload",
        initializedRequired: true,
        action: function () {
            window.readyToUnload && window.readyToUnload();
        }
    });
    addModule({
        name: "add states",
        initializedRequired: true,
        hasOutput: true,
        action: function (output) {
            totalStates++;
            app_history.push('/testTab', { some: 'state', id: totalStates });
            output("total States: " + totalStates);
            // Listen for changes to the current location.
            app_history.listen((location, action) => {
                // location is an object like window.location
                totalStates = (location && location.state) ? location.state.id : 0;
                output("total States: " + totalStates);
            });
        }
    });
    addModule({
        name: "registerBackButtonHandler",
        initializedRequired: true,
        hasOutput: true,
        action: function (output) {
            output("total States: " + totalStates);
            MicrosoftTeams_min["registerBackButtonHandler"](function () {
                if (totalStates > 0) {
                    totalStates--;
                    output("back button clicked. total remaining state: " + totalStates);
                    return true;
                }
                return false;
            });
        }
    });
    // Get the modal
    var modal = document.getElementById("myModal");
    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];
    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
        modal.style.display = "none";
    };
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };
};

// CONCATENATED MODULE: ./src/index.ts


(function () {
    initializeAppModules();
    document.body.appendChild(container);
    // Give the DOM a chance to update from the appendChild above
    setTimeout(restoreState, 0);
    window.addEventListener("beforeunload", saveState);
    window.addEventListener("load", downloadHandler);
})();


/***/ })
/******/ ]);
//# sourceMappingURL=app.js.map