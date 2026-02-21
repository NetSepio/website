(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Core/Utils/Constants.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "canvasFirstIndex",
    ()=>canvasFirstIndex,
    "canvasTag",
    ()=>canvasTag,
    "clickRadius",
    ()=>clickRadius,
    "countOffset",
    ()=>countOffset,
    "decayOffset",
    ()=>decayOffset,
    "defaultAlpha",
    ()=>defaultAlpha,
    "defaultAngle",
    ()=>defaultAngle,
    "defaultDensityFactor",
    ()=>defaultDensityFactor,
    "defaultFps",
    ()=>defaultFps,
    "defaultFpsLimit",
    ()=>defaultFpsLimit,
    "defaultLoops",
    ()=>defaultLoops,
    "defaultOpacity",
    ()=>defaultOpacity,
    "defaultRadius",
    ()=>defaultRadius,
    "defaultRatio",
    ()=>defaultRatio,
    "defaultReduceFactor",
    ()=>defaultReduceFactor,
    "defaultRemoveQuantity",
    ()=>defaultRemoveQuantity,
    "defaultRetryCount",
    ()=>defaultRetryCount,
    "defaultRgbMin",
    ()=>defaultRgbMin,
    "defaultTime",
    ()=>defaultTime,
    "defaultTransform",
    ()=>defaultTransform,
    "defaultTransformValue",
    ()=>defaultTransformValue,
    "defaultVelocity",
    ()=>defaultVelocity,
    "deleteCount",
    ()=>deleteCount,
    "double",
    ()=>double,
    "doublePI",
    ()=>doublePI,
    "empty",
    ()=>empty,
    "errorPrefix",
    ()=>errorPrefix,
    "generatedAttribute",
    ()=>generatedAttribute,
    "generatedFalse",
    ()=>generatedFalse,
    "generatedTrue",
    ()=>generatedTrue,
    "hMax",
    ()=>hMax,
    "hMin",
    ()=>hMin,
    "hPhase",
    ()=>hPhase,
    "half",
    ()=>half,
    "identity",
    ()=>identity,
    "inverseFactorNumerator",
    ()=>inverseFactorNumerator,
    "lFactor",
    ()=>lFactor,
    "lMax",
    ()=>lMax,
    "lMin",
    ()=>lMin,
    "lengthOffset",
    ()=>lengthOffset,
    "loadMinIndex",
    ()=>loadMinIndex,
    "loadRandomFactor",
    ()=>loadRandomFactor,
    "manualCount",
    ()=>manualCount,
    "manualDefaultPosition",
    ()=>manualDefaultPosition,
    "midColorValue",
    ()=>midColorValue,
    "millisecondsToSeconds",
    ()=>millisecondsToSeconds,
    "minCoordinate",
    ()=>minCoordinate,
    "minCount",
    ()=>minCount,
    "minFpsLimit",
    ()=>minFpsLimit,
    "minIndex",
    ()=>minIndex,
    "minLimit",
    ()=>minLimit,
    "minRetries",
    ()=>minRetries,
    "minStrokeWidth",
    ()=>minStrokeWidth,
    "minVelocity",
    ()=>minVelocity,
    "minZ",
    ()=>minZ,
    "minimumLength",
    ()=>minimumLength,
    "minimumSize",
    ()=>minimumSize,
    "mouseDownEvent",
    ()=>mouseDownEvent,
    "mouseLeaveEvent",
    ()=>mouseLeaveEvent,
    "mouseMoveEvent",
    ()=>mouseMoveEvent,
    "mouseOutEvent",
    ()=>mouseOutEvent,
    "mouseUpEvent",
    ()=>mouseUpEvent,
    "none",
    ()=>none,
    "one",
    ()=>one,
    "originPoint",
    ()=>originPoint,
    "percentDenominator",
    ()=>percentDenominator,
    "phaseNumerator",
    ()=>phaseNumerator,
    "posOffset",
    ()=>posOffset,
    "qTreeCapacity",
    ()=>qTreeCapacity,
    "quarter",
    ()=>quarter,
    "randomColorValue",
    ()=>randomColorValue,
    "removeDeleteCount",
    ()=>removeDeleteCount,
    "removeMinIndex",
    ()=>removeMinIndex,
    "resizeEvent",
    ()=>resizeEvent,
    "rgbFactor",
    ()=>rgbFactor,
    "rgbMax",
    ()=>rgbMax,
    "rollFactor",
    ()=>rollFactor,
    "sMax",
    ()=>sMax,
    "sMin",
    ()=>sMin,
    "sNormalizedOffset",
    ()=>sNormalizedOffset,
    "sextuple",
    ()=>sextuple,
    "sizeFactor",
    ()=>sizeFactor,
    "squareExp",
    ()=>squareExp,
    "subdivideCount",
    ()=>subdivideCount,
    "threeQuarter",
    ()=>threeQuarter,
    "touchCancelEvent",
    ()=>touchCancelEvent,
    "touchDelay",
    ()=>touchDelay,
    "touchEndEvent",
    ()=>touchEndEvent,
    "touchEndLengthOffset",
    ()=>touchEndLengthOffset,
    "touchMoveEvent",
    ()=>touchMoveEvent,
    "touchStartEvent",
    ()=>touchStartEvent,
    "triple",
    ()=>triple,
    "tryCountIncrement",
    ()=>tryCountIncrement,
    "visibilityChangeEvent",
    ()=>visibilityChangeEvent,
    "zIndexFactorOffset",
    ()=>zIndexFactorOffset
]);
var generatedAttribute = "generated", mouseDownEvent = "pointerdown", mouseUpEvent = "pointerup", mouseLeaveEvent = "pointerleave", mouseOutEvent = "pointerout", mouseMoveEvent = "pointermove", touchStartEvent = "touchstart", touchEndEvent = "touchend", touchMoveEvent = "touchmove", touchCancelEvent = "touchcancel", resizeEvent = "resize", visibilityChangeEvent = "visibilitychange", errorPrefix = "tsParticles - Error", percentDenominator = 100, half = 0.5, millisecondsToSeconds = 1000, originPoint = {
    x: 0,
    y: 0,
    z: 0
}, defaultTransform = {
    a: 1,
    b: 0,
    c: 0,
    d: 1
}, randomColorValue = "random", midColorValue = "mid", double = 2, doublePI = Math.PI * double, defaultFps = 60, defaultAlpha = 1, generatedTrue = "true", generatedFalse = "false", canvasTag = "canvas", defaultRetryCount = 0, squareExp = 2, qTreeCapacity = 4, defaultRemoveQuantity = 1, defaultRatio = 1, defaultReduceFactor = 1, subdivideCount = 4, inverseFactorNumerator = 1.0, rgbMax = 255, hMax = 360, sMax = 100, lMax = 100, hMin = 0, sMin = 0, hPhase = 60, empty = 0, quarter = 0.25, threeQuarter = half + quarter, minVelocity = 0, defaultTransformValue = 1, minimumSize = 0, minimumLength = 0, zIndexFactorOffset = 1, defaultOpacity = 1, clickRadius = 1, touchEndLengthOffset = 1, minCoordinate = 0, removeDeleteCount = 1, removeMinIndex = 0, defaultFpsLimit = 120, minFpsLimit = 0, canvasFirstIndex = 0, loadRandomFactor = 10000, loadMinIndex = 0, one = 1, none = 0, decayOffset = 1, tryCountIncrement = 1, minRetries = 0, rollFactor = 1, minZ = 0, defaultRadius = 0, posOffset = -quarter, sizeFactor = 1.5, minLimit = 0, countOffset = 1, minCount = 0, minIndex = 0, manualCount = 0, lengthOffset = 1, defaultDensityFactor = 1, deleteCount = 1, touchDelay = 500, manualDefaultPosition = 50, defaultAngle = 0, identity = 1, minStrokeWidth = 0, lFactor = 1, lMin = 0, rgbFactor = 255, triple = 3, sextuple = 6, sNormalizedOffset = 1, phaseNumerator = 1, defaultRgbMin = 0, defaultVelocity = 0, defaultLoops = 0, defaultTime = 0;
}),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Enums/Directions/MoveDirection.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MoveDirection",
    ()=>MoveDirection
]);
var MoveDirection;
(function(MoveDirection) {
    MoveDirection["bottom"] = "bottom";
    MoveDirection["bottomLeft"] = "bottom-left";
    MoveDirection["bottomRight"] = "bottom-right";
    MoveDirection["left"] = "left";
    MoveDirection["none"] = "none";
    MoveDirection["right"] = "right";
    MoveDirection["top"] = "top";
    MoveDirection["topLeft"] = "top-left";
    MoveDirection["topRight"] = "top-right";
    MoveDirection["outside"] = "outside";
    MoveDirection["inside"] = "inside";
})(MoveDirection || (MoveDirection = {}));
}),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Utils/TypeUtils.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isArray",
    ()=>isArray,
    "isBoolean",
    ()=>isBoolean,
    "isFunction",
    ()=>isFunction,
    "isNull",
    ()=>isNull,
    "isNumber",
    ()=>isNumber,
    "isObject",
    ()=>isObject,
    "isString",
    ()=>isString
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
;
function isBoolean(arg) {
    return typeof arg === "boolean";
}
function isString(arg) {
    return typeof arg === "string";
}
function isNumber(arg) {
    return typeof arg === "number";
}
function isFunction(arg) {
    return typeof arg === "function";
}
function isObject(arg) {
    return (typeof arg === "undefined" ? "undefined" : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(arg)) === "object" && arg !== null;
}
function isArray(arg) {
    return Array.isArray(arg);
}
function isNull(arg) {
    return arg === null || arg === undefined;
}
}),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Core/Utils/Vectors.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Vector",
    ()=>Vector,
    "Vector3d",
    ()=>Vector3d
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_call_super$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_call_super.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_call_check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_class_call_check.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_create_class$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_create_class.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_inherits$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_inherits.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Core/Utils/Constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$TypeUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Utils/TypeUtils.js [app-client] (ecmascript)");
;
;
;
;
;
;
var Vector3d = /*#__PURE__*/ function() {
    "use strict";
    function Vector3d(xOrCoords, y, z) {
        var _this = this;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_call_check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, Vector3d);
        this._updateFromAngle = function(angle, length) {
            _this.x = Math.cos(angle) * length;
            _this.y = Math.sin(angle) * length;
        };
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$TypeUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNumber"])(xOrCoords) && xOrCoords) {
            this.x = xOrCoords.x;
            this.y = xOrCoords.y;
            var coords3d = xOrCoords;
            this.z = coords3d.z ? coords3d.z : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["originPoint"].z;
        } else if (xOrCoords !== undefined && y !== undefined) {
            this.x = xOrCoords;
            this.y = y;
            this.z = z !== null && z !== void 0 ? z : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["originPoint"].z;
        } else {
            throw new Error("".concat(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["errorPrefix"], " Vector3d not initialized correctly"));
        }
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_create_class$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(Vector3d, [
        {
            key: "angle",
            get: function get() {
                return Math.atan2(this.y, this.x);
            },
            set: function set(angle) {
                this._updateFromAngle(angle, this.length);
            }
        },
        {
            key: "length",
            get: function get() {
                return Math.sqrt(this.getLengthSq());
            },
            set: function set(length) {
                this._updateFromAngle(this.angle, length);
            }
        },
        {
            key: "add",
            value: function add(v) {
                return Vector3d.create(this.x + v.x, this.y + v.y, this.z + v.z);
            }
        },
        {
            key: "addTo",
            value: function addTo(v) {
                this.x += v.x;
                this.y += v.y;
                this.z += v.z;
            }
        },
        {
            key: "copy",
            value: function copy() {
                return Vector3d.clone(this);
            }
        },
        {
            key: "distanceTo",
            value: function distanceTo(v) {
                return this.sub(v).length;
            }
        },
        {
            key: "distanceToSq",
            value: function distanceToSq(v) {
                return this.sub(v).getLengthSq();
            }
        },
        {
            key: "div",
            value: function div(n) {
                return Vector3d.create(this.x / n, this.y / n, this.z / n);
            }
        },
        {
            key: "divTo",
            value: function divTo(n) {
                this.x /= n;
                this.y /= n;
                this.z /= n;
            }
        },
        {
            key: "getLengthSq",
            value: function getLengthSq() {
                return Math.pow(this.x, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["squareExp"]) + Math.pow(this.y, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["squareExp"]);
            }
        },
        {
            key: "mult",
            value: function mult(n) {
                return Vector3d.create(this.x * n, this.y * n, this.z * n);
            }
        },
        {
            key: "multTo",
            value: function multTo(n) {
                this.x *= n;
                this.y *= n;
                this.z *= n;
            }
        },
        {
            key: "normalize",
            value: function normalize() {
                var length = this.length;
                if (length != __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["none"]) {
                    this.multTo(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inverseFactorNumerator"] / length);
                }
            }
        },
        {
            key: "rotate",
            value: function rotate(angle) {
                return Vector3d.create(this.x * Math.cos(angle) - this.y * Math.sin(angle), this.x * Math.sin(angle) + this.y * Math.cos(angle), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["originPoint"].z);
            }
        },
        {
            key: "setTo",
            value: function setTo(c) {
                this.x = c.x;
                this.y = c.y;
                var v3d = c;
                this.z = v3d.z ? v3d.z : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["originPoint"].z;
            }
        },
        {
            key: "sub",
            value: function sub(v) {
                return Vector3d.create(this.x - v.x, this.y - v.y, this.z - v.z);
            }
        },
        {
            key: "subFrom",
            value: function subFrom(v) {
                this.x -= v.x;
                this.y -= v.y;
                this.z -= v.z;
            }
        }
    ], [
        {
            key: "origin",
            get: function get() {
                return Vector3d.create(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["originPoint"].x, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["originPoint"].y, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["originPoint"].z);
            }
        },
        {
            key: "clone",
            value: function clone(source) {
                return Vector3d.create(source.x, source.y, source.z);
            }
        },
        {
            key: "create",
            value: function create(x, y, z) {
                return new Vector3d(x, y, z);
            }
        }
    ]);
    return Vector3d;
}();
var Vector = /*#__PURE__*/ function(Vector3d) {
    "use strict";
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_inherits$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(Vector, Vector3d);
    function Vector(xOrCoords, y) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_call_check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, Vector);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_call_super$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, Vector, [
            xOrCoords,
            y,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["originPoint"].z
        ]);
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_create_class$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(Vector, null, [
        {
            key: "origin",
            get: function get() {
                return Vector.create(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["originPoint"].x, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["originPoint"].y);
            }
        },
        {
            key: "clone",
            value: function clone(source) {
                return Vector.create(source.x, source.y);
            }
        },
        {
            key: "create",
            value: function create(x, y) {
                return new Vector(x, y);
            }
        }
    ]);
    return Vector;
}(Vector3d);
}),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Utils/NumberUtils.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "animate",
    ()=>animate,
    "calcExactPositionOrRandomFromSize",
    ()=>calcExactPositionOrRandomFromSize,
    "calcExactPositionOrRandomFromSizeRanged",
    ()=>calcExactPositionOrRandomFromSizeRanged,
    "calcPositionFromSize",
    ()=>calcPositionFromSize,
    "calcPositionOrRandomFromSize",
    ()=>calcPositionOrRandomFromSize,
    "calcPositionOrRandomFromSizeRanged",
    ()=>calcPositionOrRandomFromSizeRanged,
    "cancelAnimation",
    ()=>cancelAnimation,
    "clamp",
    ()=>clamp,
    "collisionVelocity",
    ()=>collisionVelocity,
    "degToRad",
    ()=>degToRad,
    "getDistance",
    ()=>getDistance,
    "getDistances",
    ()=>getDistances,
    "getParticleBaseVelocity",
    ()=>getParticleBaseVelocity,
    "getParticleDirectionAngle",
    ()=>getParticleDirectionAngle,
    "getRandom",
    ()=>getRandom,
    "getRangeMax",
    ()=>getRangeMax,
    "getRangeMin",
    ()=>getRangeMin,
    "getRangeValue",
    ()=>getRangeValue,
    "mix",
    ()=>mix,
    "parseAlpha",
    ()=>parseAlpha,
    "randomInRange",
    ()=>randomInRange,
    "setAnimationFunctions",
    ()=>setAnimationFunctions,
    "setRandom",
    ()=>setRandom,
    "setRangeValue",
    ()=>setRangeValue
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Enums$2f$Directions$2f$MoveDirection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Enums/Directions/MoveDirection.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Core/Utils/Constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Vectors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Core/Utils/Vectors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$TypeUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Utils/TypeUtils.js [app-client] (ecmascript)");
;
;
;
;
var _random = Math.random;
var _animationLoop = {
    nextFrame: function(cb) {
        return requestAnimationFrame(cb);
    },
    cancel: function(idx) {
        return cancelAnimationFrame(idx);
    }
};
function setRandom() {
    var rnd = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Math.random;
    _random = rnd;
}
function getRandom() {
    var min = 0, max = 1;
    return clamp(_random(), min, max - Number.EPSILON);
}
function setAnimationFunctions(nextFrame, cancel) {
    _animationLoop.nextFrame = function(callback) {
        return nextFrame(callback);
    };
    _animationLoop.cancel = function(handle) {
        return cancel(handle);
    };
}
function animate(fn) {
    return _animationLoop.nextFrame(fn);
}
function cancelAnimation(handle) {
    _animationLoop.cancel(handle);
}
function clamp(num, min, max) {
    return Math.min(Math.max(num, min), max);
}
function mix(comp1, comp2, weight1, weight2) {
    return Math.floor((comp1 * weight1 + comp2 * weight2) / (weight1 + weight2));
}
function randomInRange(r) {
    var max = getRangeMax(r), minOffset = 0;
    var min = getRangeMin(r);
    if (max === min) {
        min = minOffset;
    }
    return getRandom() * (max - min) + min;
}
function getRangeValue(value) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$TypeUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNumber"])(value) ? value : randomInRange(value);
}
function getRangeMin(value) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$TypeUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNumber"])(value) ? value : value.min;
}
function getRangeMax(value) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$TypeUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNumber"])(value) ? value : value.max;
}
function setRangeValue(source, value) {
    if (source === value || value === undefined && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$TypeUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNumber"])(source)) {
        return source;
    }
    var min = getRangeMin(source), max = getRangeMax(source);
    return value !== undefined ? {
        min: Math.min(min, value),
        max: Math.max(max, value)
    } : setRangeValue(min, max);
}
function getDistances(pointA, pointB) {
    var dx = pointA.x - pointB.x, dy = pointA.y - pointB.y, squareExp = 2;
    return {
        dx: dx,
        dy: dy,
        distance: Math.sqrt(Math.pow(dx, squareExp) + Math.pow(dy, squareExp))
    };
}
function getDistance(pointA, pointB) {
    return getDistances(pointA, pointB).distance;
}
function degToRad(degrees) {
    var PIDeg = 180;
    return degrees * Math.PI / PIDeg;
}
function getParticleDirectionAngle(direction, position, center) {
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$TypeUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNumber"])(direction)) {
        return degToRad(direction);
    }
    switch(direction){
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Enums$2f$Directions$2f$MoveDirection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MoveDirection"].top:
            return -Math.PI * __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["half"];
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Enums$2f$Directions$2f$MoveDirection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MoveDirection"].topRight:
            return -Math.PI * __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["quarter"];
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Enums$2f$Directions$2f$MoveDirection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MoveDirection"].right:
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["empty"];
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Enums$2f$Directions$2f$MoveDirection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MoveDirection"].bottomRight:
            return Math.PI * __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["quarter"];
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Enums$2f$Directions$2f$MoveDirection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MoveDirection"].bottom:
            return Math.PI * __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["half"];
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Enums$2f$Directions$2f$MoveDirection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MoveDirection"].bottomLeft:
            return Math.PI * __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["threeQuarter"];
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Enums$2f$Directions$2f$MoveDirection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MoveDirection"].left:
            return Math.PI;
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Enums$2f$Directions$2f$MoveDirection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MoveDirection"].topLeft:
            return -Math.PI * __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["threeQuarter"];
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Enums$2f$Directions$2f$MoveDirection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MoveDirection"].inside:
            return Math.atan2(center.y - position.y, center.x - position.x);
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Enums$2f$Directions$2f$MoveDirection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MoveDirection"].outside:
            return Math.atan2(position.y - center.y, position.x - center.x);
        default:
            return getRandom() * __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doublePI"];
    }
}
function getParticleBaseVelocity(direction) {
    var baseVelocity = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Vectors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector"].origin;
    baseVelocity.length = 1;
    baseVelocity.angle = direction;
    return baseVelocity;
}
function collisionVelocity(v1, v2, m1, m2) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Vectors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector"].create(v1.x * (m1 - m2) / (m1 + m2) + v2.x * __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["double"] * m2 / (m1 + m2), v1.y);
}
function calcPositionFromSize(data) {
    var _data_position;
    return ((_data_position = data.position) === null || _data_position === void 0 ? void 0 : _data_position.x) !== undefined && data.position.y !== undefined ? {
        x: data.position.x * data.size.width / __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["percentDenominator"],
        y: data.position.y * data.size.height / __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["percentDenominator"]
    } : undefined;
}
function calcPositionOrRandomFromSize(data) {
    var _ref, _ref1;
    var _data_position, _data_position1;
    return {
        x: ((_ref = (_data_position = data.position) === null || _data_position === void 0 ? void 0 : _data_position.x) !== null && _ref !== void 0 ? _ref : getRandom() * __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["percentDenominator"]) * data.size.width / __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["percentDenominator"],
        y: ((_ref1 = (_data_position1 = data.position) === null || _data_position1 === void 0 ? void 0 : _data_position1.y) !== null && _ref1 !== void 0 ? _ref1 : getRandom() * __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["percentDenominator"]) * data.size.height / __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["percentDenominator"]
    };
}
function calcPositionOrRandomFromSizeRanged(data) {
    var _data_position, _data_position1;
    var position = {
        x: ((_data_position = data.position) === null || _data_position === void 0 ? void 0 : _data_position.x) !== undefined ? getRangeValue(data.position.x) : undefined,
        y: ((_data_position1 = data.position) === null || _data_position1 === void 0 ? void 0 : _data_position1.y) !== undefined ? getRangeValue(data.position.y) : undefined
    };
    return calcPositionOrRandomFromSize({
        size: data.size,
        position: position
    });
}
function calcExactPositionOrRandomFromSize(data) {
    var _ref, _ref1;
    var _data_position, _data_position1;
    return {
        x: (_ref = (_data_position = data.position) === null || _data_position === void 0 ? void 0 : _data_position.x) !== null && _ref !== void 0 ? _ref : getRandom() * data.size.width,
        y: (_ref1 = (_data_position1 = data.position) === null || _data_position1 === void 0 ? void 0 : _data_position1.y) !== null && _ref1 !== void 0 ? _ref1 : getRandom() * data.size.height
    };
}
function calcExactPositionOrRandomFromSizeRanged(data) {
    var _data_position, _data_position1;
    var position = {
        x: ((_data_position = data.position) === null || _data_position === void 0 ? void 0 : _data_position.x) !== undefined ? getRangeValue(data.position.x) : undefined,
        y: ((_data_position1 = data.position) === null || _data_position1 === void 0 ? void 0 : _data_position1.y) !== undefined ? getRangeValue(data.position.y) : undefined
    };
    return calcExactPositionOrRandomFromSize({
        size: data.size,
        position: position
    });
}
function parseAlpha(input) {
    var defaultAlpha = 1;
    if (!input) {
        return defaultAlpha;
    }
    return input.endsWith("%") ? parseFloat(input) / __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["percentDenominator"] : parseFloat(input);
}
}),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Enums/Modes/AnimationMode.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AnimationMode",
    ()=>AnimationMode
]);
var AnimationMode;
(function(AnimationMode) {
    AnimationMode["auto"] = "auto";
    AnimationMode["increase"] = "increase";
    AnimationMode["decrease"] = "decrease";
    AnimationMode["random"] = "random";
})(AnimationMode || (AnimationMode = {}));
}),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Enums/AnimationStatus.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AnimationStatus",
    ()=>AnimationStatus
]);
var AnimationStatus;
(function(AnimationStatus) {
    AnimationStatus["increasing"] = "increasing";
    AnimationStatus["decreasing"] = "decreasing";
})(AnimationStatus || (AnimationStatus = {}));
}),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Enums/Types/DestroyType.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DestroyType",
    ()=>DestroyType
]);
var DestroyType;
(function(DestroyType) {
    DestroyType["none"] = "none";
    DestroyType["max"] = "max";
    DestroyType["min"] = "min";
})(DestroyType || (DestroyType = {}));
}),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Enums/Directions/OutModeDirection.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "OutModeDirection",
    ()=>OutModeDirection
]);
var OutModeDirection;
(function(OutModeDirection) {
    OutModeDirection["bottom"] = "bottom";
    OutModeDirection["left"] = "left";
    OutModeDirection["right"] = "right";
    OutModeDirection["top"] = "top";
})(OutModeDirection || (OutModeDirection = {}));
}),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Enums/Modes/PixelMode.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PixelMode",
    ()=>PixelMode
]);
var PixelMode;
(function(PixelMode) {
    PixelMode["precise"] = "precise";
    PixelMode["percent"] = "percent";
})(PixelMode || (PixelMode = {}));
}),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Enums/Types/StartValueType.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "StartValueType",
    ()=>StartValueType
]);
var StartValueType;
(function(StartValueType) {
    StartValueType["max"] = "max";
    StartValueType["min"] = "min";
    StartValueType["random"] = "random";
})(StartValueType || (StartValueType = {}));
}),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Utils/Utils.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "areBoundsInside",
    ()=>areBoundsInside,
    "arrayRandomIndex",
    ()=>arrayRandomIndex,
    "calculateBounds",
    ()=>calculateBounds,
    "circleBounce",
    ()=>circleBounce,
    "circleBounceDataFromParticle",
    ()=>circleBounceDataFromParticle,
    "cloneStyle",
    ()=>cloneStyle,
    "deepExtend",
    ()=>deepExtend,
    "divMode",
    ()=>divMode,
    "divModeExecute",
    ()=>divModeExecute,
    "executeOnSingleOrMultiple",
    ()=>executeOnSingleOrMultiple,
    "findItemFromSingleOrMultiple",
    ()=>findItemFromSingleOrMultiple,
    "getFullScreenStyle",
    ()=>getFullScreenStyle,
    "getLogger",
    ()=>getLogger,
    "getPosition",
    ()=>getPosition,
    "getSize",
    ()=>getSize,
    "hasMatchMedia",
    ()=>hasMatchMedia,
    "initParticleNumericAnimationValue",
    ()=>initParticleNumericAnimationValue,
    "isDivModeEnabled",
    ()=>isDivModeEnabled,
    "isInArray",
    ()=>isInArray,
    "isPointInside",
    ()=>isPointInside,
    "isSsr",
    ()=>isSsr,
    "itemFromArray",
    ()=>itemFromArray,
    "itemFromSingleOrMultiple",
    ()=>itemFromSingleOrMultiple,
    "loadFont",
    ()=>loadFont,
    "rectBounce",
    ()=>rectBounce,
    "safeIntersectionObserver",
    ()=>safeIntersectionObserver,
    "safeMatchMedia",
    ()=>safeMatchMedia,
    "safeMutationObserver",
    ()=>safeMutationObserver,
    "setLogger",
    ()=>setLogger,
    "singleDivModeExecute",
    ()=>singleDivModeExecute,
    "updateAnimation",
    ()=>updateAnimation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_async_to_generator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_async_to_generator.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_without_properties$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_object_without_properties.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_to_consumable_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_to_consumable_array.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$8$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$_generator__as__$5f3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/tslib@2.8.1/node_modules/tslib/tslib.es6.mjs [app-client] (ecmascript) <export __generator as _>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Utils/NumberUtils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Core/Utils/Constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$TypeUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Utils/TypeUtils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Enums$2f$Modes$2f$AnimationMode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Enums/Modes/AnimationMode.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Enums$2f$AnimationStatus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Enums/AnimationStatus.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Enums$2f$Types$2f$DestroyType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Enums/Types/DestroyType.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Enums$2f$Directions$2f$OutModeDirection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Enums/Directions/OutModeDirection.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Enums$2f$Modes$2f$PixelMode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Enums/Modes/PixelMode.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Enums$2f$Types$2f$StartValueType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Enums/Types/StartValueType.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Vectors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Core/Utils/Vectors.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
;
var _logger = {
    debug: console.debug,
    error: console.error,
    info: console.info,
    log: console.log,
    verbose: console.log,
    warning: console.warn
};
function setLogger(logger) {
    _logger.debug = logger.debug || _logger.debug;
    _logger.error = logger.error || _logger.error;
    _logger.info = logger.info || _logger.info;
    _logger.log = logger.log || _logger.log;
    _logger.verbose = logger.verbose || _logger.verbose;
    _logger.warning = logger.warning || _logger.warning;
}
function getLogger() {
    return _logger;
}
function memoize(fn) {
    var cache = new Map();
    return function() {
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
            args[_key] = arguments[_key];
        }
        var key = JSON.stringify(args);
        if (cache.has(key)) {
            return cache.get(key);
        }
        var result = fn.apply(void 0, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_to_consumable_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(args));
        cache.set(key, result);
        return result;
    };
}
function rectSideBounce(data) {
    var res = {
        bounced: false
    }, pSide = data.pSide, pOtherSide = data.pOtherSide, rectSide = data.rectSide, rectOtherSide = data.rectOtherSide, velocity = data.velocity, factor = data.factor;
    if (pOtherSide.min < rectOtherSide.min || pOtherSide.min > rectOtherSide.max || pOtherSide.max < rectOtherSide.min || pOtherSide.max > rectOtherSide.max) {
        return res;
    }
    if (pSide.max >= rectSide.min && pSide.max <= (rectSide.max + rectSide.min) * __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["half"] && velocity > __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["minVelocity"] || pSide.min <= rectSide.max && pSide.min > (rectSide.max + rectSide.min) * __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["half"] && velocity < __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["minVelocity"]) {
        res.velocity = velocity * -factor;
        res.bounced = true;
    }
    return res;
}
function checkSelector(element, selectors) {
    var res = executeOnSingleOrMultiple(selectors, function(selector) {
        return element.matches(selector);
    });
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$TypeUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isArray"])(res) ? res.some(function(t) {
        return t;
    }) : res;
}
function isSsr() {
    return typeof window === "undefined" || !window || typeof window.document === "undefined" || !window.document;
}
function hasMatchMedia() {
    return !isSsr() && typeof matchMedia !== "undefined";
}
function safeMatchMedia(query) {
    if (!hasMatchMedia()) {
        return;
    }
    return matchMedia(query);
}
function safeIntersectionObserver(callback) {
    if (isSsr() || typeof IntersectionObserver === "undefined") {
        return;
    }
    return new IntersectionObserver(callback);
}
function safeMutationObserver(callback) {
    if (isSsr() || typeof MutationObserver === "undefined") {
        return;
    }
    return new MutationObserver(callback);
}
function isInArray(value, array) {
    var invalidIndex = -1;
    return value === array || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$TypeUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isArray"])(array) && array.indexOf(value) > invalidIndex;
}
function loadFont(font, weight) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_async_to_generator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(function() {
        var unused;
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$8$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$_generator__as__$5f3e$__["_"])(this, function(_state) {
            switch(_state.label){
                case 0:
                    _state.trys.push([
                        0,
                        2,
                        ,
                        3
                    ]);
                    return [
                        4,
                        document.fonts.load("".concat(weight !== null && weight !== void 0 ? weight : "400", " 36px '").concat(font !== null && font !== void 0 ? font : "Verdana", "'"))
                    ];
                case 1:
                    _state.sent();
                    return [
                        3,
                        3
                    ];
                case 2:
                    unused = _state.sent();
                    return [
                        3,
                        3
                    ];
                case 3:
                    return [
                        2
                    ];
            }
        });
    })();
}
function arrayRandomIndex(array) {
    return Math.floor((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRandom"])() * array.length);
}
function itemFromArray(array, index) {
    var useIndex = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : true;
    return array[index !== undefined && useIndex ? index % array.length : arrayRandomIndex(array)];
}
function isPointInside(point, size, offset, radius, direction) {
    var minRadius = 0;
    return areBoundsInside(calculateBounds(point, radius !== null && radius !== void 0 ? radius : minRadius), size, offset, direction);
}
function areBoundsInside(bounds, size, offset, direction) {
    var inside = true;
    if (!direction || direction === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Enums$2f$Directions$2f$OutModeDirection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OutModeDirection"].bottom) {
        inside = bounds.top < size.height + offset.x;
    }
    if (inside && (!direction || direction === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Enums$2f$Directions$2f$OutModeDirection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OutModeDirection"].left)) {
        inside = bounds.right > offset.x;
    }
    if (inside && (!direction || direction === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Enums$2f$Directions$2f$OutModeDirection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OutModeDirection"].right)) {
        inside = bounds.left < size.width + offset.y;
    }
    if (inside && (!direction || direction === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Enums$2f$Directions$2f$OutModeDirection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OutModeDirection"].top)) {
        inside = bounds.bottom > offset.y;
    }
    return inside;
}
function calculateBounds(point, radius) {
    return {
        bottom: point.y + radius,
        left: point.x - radius,
        right: point.x + radius,
        top: point.y - radius
    };
}
function deepExtend(destination) {
    for(var _len = arguments.length, sources = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
        sources[_key - 1] = arguments[_key];
    }
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = sources[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var _loop = function(key) {
                if (key === "__proto__") {
                    return "continue";
                }
                var sourceDict = source, value = sourceDict[key], destDict = destination;
                destDict[key] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$TypeUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isObject"])(value) && Array.isArray(value) ? value.map(function(v) {
                    return deepExtend(destDict[key], v);
                }) : deepExtend(destDict[key], value);
            };
            var source = _step.value;
            if (source === undefined || source === null) {
                continue;
            }
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$TypeUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isObject"])(source)) {
                destination = source;
                continue;
            }
            var sourceIsArray = Array.isArray(source);
            if (sourceIsArray && ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$TypeUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isObject"])(destination) || !destination || !Array.isArray(destination))) {
                destination = [];
            } else if (!sourceIsArray && ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$TypeUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isObject"])(destination) || !destination || Array.isArray(destination))) {
                destination = {};
            }
            for(var key in source)_loop(key);
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally{
        try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
            }
        } finally{
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
    return destination;
}
function isDivModeEnabled(mode, divs) {
    return !!findItemFromSingleOrMultiple(divs, function(t) {
        return t.enable && isInArray(mode, t.mode);
    });
}
function divModeExecute(mode, divs, callback) {
    executeOnSingleOrMultiple(divs, function(div) {
        var divMode = div.mode, divEnabled = div.enable;
        if (divEnabled && isInArray(mode, divMode)) {
            singleDivModeExecute(div, callback);
        }
    });
}
function singleDivModeExecute(div, callback) {
    var selectors = div.selectors;
    executeOnSingleOrMultiple(selectors, function(selector) {
        callback(selector, div);
    });
}
function divMode(divs, element) {
    if (!element || !divs) {
        return;
    }
    return findItemFromSingleOrMultiple(divs, function(div) {
        return checkSelector(element, div.selectors);
    });
}
function circleBounceDataFromParticle(p) {
    return {
        position: p.getPosition(),
        radius: p.getRadius(),
        mass: p.getMass(),
        velocity: p.velocity,
        factor: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Vectors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector"].create((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRangeValue"])(p.options.bounce.horizontal.value), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRangeValue"])(p.options.bounce.vertical.value))
    };
}
function circleBounce(p1, p2) {
    var _p1_velocity_sub = p1.velocity.sub(p2.velocity), xVelocityDiff = _p1_velocity_sub.x, yVelocityDiff = _p1_velocity_sub.y, _ref = [
        p1.position,
        p2.position
    ], pos1 = _ref[0], pos2 = _ref[1], _getDistances = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDistances"])(pos2, pos1), xDist = _getDistances.dx, yDist = _getDistances.dy, minimumDistance = 0;
    if (xVelocityDiff * xDist + yVelocityDiff * yDist < minimumDistance) {
        return;
    }
    var angle = -Math.atan2(yDist, xDist), m1 = p1.mass, m2 = p2.mass, u1 = p1.velocity.rotate(angle), u2 = p2.velocity.rotate(angle), v1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collisionVelocity"])(u1, u2, m1, m2), v2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collisionVelocity"])(u2, u1, m1, m2), vFinal1 = v1.rotate(-angle), vFinal2 = v2.rotate(-angle);
    p1.velocity.x = vFinal1.x * p1.factor.x;
    p1.velocity.y = vFinal1.y * p1.factor.y;
    p2.velocity.x = vFinal2.x * p2.factor.x;
    p2.velocity.y = vFinal2.y * p2.factor.y;
}
function rectBounce(particle, divBounds) {
    var pPos = particle.getPosition(), size = particle.getRadius(), bounds = calculateBounds(pPos, size), bounceOptions = particle.options.bounce, resH = rectSideBounce({
        pSide: {
            min: bounds.left,
            max: bounds.right
        },
        pOtherSide: {
            min: bounds.top,
            max: bounds.bottom
        },
        rectSide: {
            min: divBounds.left,
            max: divBounds.right
        },
        rectOtherSide: {
            min: divBounds.top,
            max: divBounds.bottom
        },
        velocity: particle.velocity.x,
        factor: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRangeValue"])(bounceOptions.horizontal.value)
    });
    if (resH.bounced) {
        if (resH.velocity !== undefined) {
            particle.velocity.x = resH.velocity;
        }
        if (resH.position !== undefined) {
            particle.position.x = resH.position;
        }
    }
    var resV = rectSideBounce({
        pSide: {
            min: bounds.top,
            max: bounds.bottom
        },
        pOtherSide: {
            min: bounds.left,
            max: bounds.right
        },
        rectSide: {
            min: divBounds.top,
            max: divBounds.bottom
        },
        rectOtherSide: {
            min: divBounds.left,
            max: divBounds.right
        },
        velocity: particle.velocity.y,
        factor: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRangeValue"])(bounceOptions.vertical.value)
    });
    if (resV.bounced) {
        if (resV.velocity !== undefined) {
            particle.velocity.y = resV.velocity;
        }
        if (resV.position !== undefined) {
            particle.position.y = resV.position;
        }
    }
}
function executeOnSingleOrMultiple(obj, callback) {
    var defaultIndex = 0;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$TypeUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isArray"])(obj) ? obj.map(function(item, index) {
        return callback(item, index);
    }) : callback(obj, defaultIndex);
}
function itemFromSingleOrMultiple(obj, index, useIndex) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$TypeUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isArray"])(obj) ? itemFromArray(obj, index, useIndex) : obj;
}
function findItemFromSingleOrMultiple(obj, callback) {
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$TypeUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isArray"])(obj)) {
        return obj.find(function(t, index) {
            return callback(t, index);
        });
    }
    var defaultIndex = 0;
    return callback(obj, defaultIndex) ? obj : undefined;
}
function initParticleNumericAnimationValue(options, pxRatio) {
    var valueRange = options.value, animationOptions = options.animation, res = {
        delayTime: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRangeValue"])(animationOptions.delay) * __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["millisecondsToSeconds"],
        enable: animationOptions.enable,
        value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRangeValue"])(options.value) * pxRatio,
        max: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRangeMax"])(valueRange) * pxRatio,
        min: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRangeMin"])(valueRange) * pxRatio,
        loops: 0,
        maxLoops: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRangeValue"])(animationOptions.count),
        time: 0
    }, decayOffset = 1;
    if (animationOptions.enable) {
        res.decay = decayOffset - (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRangeValue"])(animationOptions.decay);
        switch(animationOptions.mode){
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Enums$2f$Modes$2f$AnimationMode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimationMode"].increase:
                res.status = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Enums$2f$AnimationStatus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimationStatus"].increasing;
                break;
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Enums$2f$Modes$2f$AnimationMode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimationMode"].decrease:
                res.status = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Enums$2f$AnimationStatus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimationStatus"].decreasing;
                break;
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Enums$2f$Modes$2f$AnimationMode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimationMode"].random:
                res.status = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRandom"])() >= __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["half"] ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Enums$2f$AnimationStatus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimationStatus"].increasing : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Enums$2f$AnimationStatus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimationStatus"].decreasing;
                break;
        }
        var autoStatus = animationOptions.mode === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Enums$2f$Modes$2f$AnimationMode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimationMode"].auto;
        switch(animationOptions.startValue){
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Enums$2f$Types$2f$StartValueType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StartValueType"].min:
                res.value = res.min;
                if (autoStatus) {
                    res.status = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Enums$2f$AnimationStatus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimationStatus"].increasing;
                }
                break;
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Enums$2f$Types$2f$StartValueType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StartValueType"].max:
                res.value = res.max;
                if (autoStatus) {
                    res.status = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Enums$2f$AnimationStatus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimationStatus"].decreasing;
                }
                break;
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Enums$2f$Types$2f$StartValueType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StartValueType"].random:
            default:
                res.value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["randomInRange"])(res);
                if (autoStatus) {
                    res.status = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRandom"])() >= __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["half"] ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Enums$2f$AnimationStatus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimationStatus"].increasing : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Enums$2f$AnimationStatus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimationStatus"].decreasing;
                }
                break;
        }
    }
    res.initialValue = res.value;
    return res;
}
function getPositionOrSize(positionOrSize, canvasSize) {
    var isPercent = positionOrSize.mode === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Enums$2f$Modes$2f$PixelMode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PixelMode"].percent;
    if (!isPercent) {
        var _ = positionOrSize.mode, rest = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_without_properties$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(positionOrSize, [
            "mode"
        ]);
        return rest;
    }
    var isPosition = "x" in positionOrSize;
    if (isPosition) {
        return {
            x: positionOrSize.x / __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["percentDenominator"] * canvasSize.width,
            y: positionOrSize.y / __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["percentDenominator"] * canvasSize.height
        };
    } else {
        return {
            width: positionOrSize.width / __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["percentDenominator"] * canvasSize.width,
            height: positionOrSize.height / __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["percentDenominator"] * canvasSize.height
        };
    }
}
function getPosition(position, canvasSize) {
    return getPositionOrSize(position, canvasSize);
}
function getSize(size, canvasSize) {
    return getPositionOrSize(size, canvasSize);
}
function checkDestroy(particle, destroyType, value, minValue, maxValue) {
    switch(destroyType){
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Enums$2f$Types$2f$DestroyType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DestroyType"].max:
            if (value >= maxValue) {
                particle.destroy();
            }
            break;
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Enums$2f$Types$2f$DestroyType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DestroyType"].min:
            if (value <= minValue) {
                particle.destroy();
            }
            break;
    }
}
function updateAnimation(particle, data, changeDirection, destroyType, delta) {
    var _data_maxLoops, _data_loops, _data_maxLoops1, _data_velocity, _data_decay, _data_delayTime, _data_delayTime1, _data_delayTime2, _data_delayTime3;
    var minLoops = 0, minDelay = 0, identity = 1, minVelocity = 0, minDecay = 1;
    if (particle.destroyed || !data || !data.enable || ((_data_maxLoops = data.maxLoops) !== null && _data_maxLoops !== void 0 ? _data_maxLoops : minLoops) > minLoops && ((_data_loops = data.loops) !== null && _data_loops !== void 0 ? _data_loops : minLoops) > ((_data_maxLoops1 = data.maxLoops) !== null && _data_maxLoops1 !== void 0 ? _data_maxLoops1 : minLoops)) {
        return;
    }
    var velocity = ((_data_velocity = data.velocity) !== null && _data_velocity !== void 0 ? _data_velocity : minVelocity) * delta.factor, minValue = data.min, maxValue = data.max, decay = (_data_decay = data.decay) !== null && _data_decay !== void 0 ? _data_decay : minDecay;
    if (!data.time) {
        data.time = 0;
    }
    if (((_data_delayTime = data.delayTime) !== null && _data_delayTime !== void 0 ? _data_delayTime : minDelay) > minDelay && data.time < ((_data_delayTime1 = data.delayTime) !== null && _data_delayTime1 !== void 0 ? _data_delayTime1 : minDelay)) {
        data.time += delta.value;
    }
    if (((_data_delayTime2 = data.delayTime) !== null && _data_delayTime2 !== void 0 ? _data_delayTime2 : minDelay) > minDelay && data.time < ((_data_delayTime3 = data.delayTime) !== null && _data_delayTime3 !== void 0 ? _data_delayTime3 : minDelay)) {
        return;
    }
    switch(data.status){
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Enums$2f$AnimationStatus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimationStatus"].increasing:
            if (data.value >= maxValue) {
                if (changeDirection) {
                    data.status = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Enums$2f$AnimationStatus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimationStatus"].decreasing;
                } else {
                    data.value -= maxValue;
                }
                if (!data.loops) {
                    data.loops = minLoops;
                }
                data.loops++;
            } else {
                data.value += velocity;
            }
            break;
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Enums$2f$AnimationStatus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimationStatus"].decreasing:
            if (data.value <= minValue) {
                if (changeDirection) {
                    data.status = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Enums$2f$AnimationStatus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimationStatus"].increasing;
                } else {
                    data.value += maxValue;
                }
                if (!data.loops) {
                    data.loops = minLoops;
                }
                data.loops++;
            } else {
                data.value -= velocity;
            }
    }
    if (data.velocity && decay !== identity) {
        data.velocity *= decay;
    }
    checkDestroy(particle, destroyType, data.value, minValue, maxValue);
    if (!particle.destroyed) {
        data.value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clamp"])(data.value, minValue, maxValue);
    }
}
function cloneStyle(style) {
    var clonedStyle = document.createElement("div").style;
    if (!style) {
        return clonedStyle;
    }
    for(var key in style){
        var _style_getPropertyValue, _style_getPropertyPriority;
        var styleKey = style[key];
        if (!Object.prototype.hasOwnProperty.call(style, key) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$TypeUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNull"])(styleKey)) {
            continue;
        }
        var styleValue = (_style_getPropertyValue = style.getPropertyValue) === null || _style_getPropertyValue === void 0 ? void 0 : _style_getPropertyValue.call(style, styleKey);
        if (!styleValue) {
            continue;
        }
        var stylePriority = (_style_getPropertyPriority = style.getPropertyPriority) === null || _style_getPropertyPriority === void 0 ? void 0 : _style_getPropertyPriority.call(style, styleKey);
        if (!stylePriority) {
            var _clonedStyle_setProperty;
            (_clonedStyle_setProperty = clonedStyle.setProperty) === null || _clonedStyle_setProperty === void 0 ? void 0 : _clonedStyle_setProperty.call(clonedStyle, styleKey, styleValue);
        } else {
            var _clonedStyle_setProperty1;
            (_clonedStyle_setProperty1 = clonedStyle.setProperty) === null || _clonedStyle_setProperty1 === void 0 ? void 0 : _clonedStyle_setProperty1.call(clonedStyle, styleKey, styleValue, stylePriority);
        }
    }
    return clonedStyle;
}
function computeFullScreenStyle(zIndex) {
    var fullScreenStyle = document.createElement("div").style, radix = 10, style = {
        width: "100%",
        height: "100%",
        margin: "0",
        padding: "0",
        borderWidth: "0",
        position: "fixed",
        zIndex: zIndex.toString(radix),
        "z-index": zIndex.toString(radix),
        top: "0",
        left: "0"
    };
    for(var key in style){
        var value = style[key];
        fullScreenStyle.setProperty(key, value);
    }
    return fullScreenStyle;
}
var getFullScreenStyle = memoize(computeFullScreenStyle);
}),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Enums/Types/AlterType.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AlterType",
    ()=>AlterType
]);
var AlterType;
(function(AlterType) {
    AlterType["darken"] = "darken";
    AlterType["enlighten"] = "enlighten";
})(AlterType || (AlterType = {}));
}),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Utils/ColorUtils.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "colorMix",
    ()=>colorMix,
    "colorToHsl",
    ()=>colorToHsl,
    "colorToRgb",
    ()=>colorToRgb,
    "getHslAnimationFromHsl",
    ()=>getHslAnimationFromHsl,
    "getHslFromAnimation",
    ()=>getHslFromAnimation,
    "getLinkColor",
    ()=>getLinkColor,
    "getLinkRandomColor",
    ()=>getLinkRandomColor,
    "getRandomRgbColor",
    ()=>getRandomRgbColor,
    "getStyleFromHsl",
    ()=>getStyleFromHsl,
    "getStyleFromRgb",
    ()=>getStyleFromRgb,
    "hslToRgb",
    ()=>hslToRgb,
    "hslaToRgba",
    ()=>hslaToRgba,
    "rangeColorToHsl",
    ()=>rangeColorToHsl,
    "rangeColorToRgb",
    ()=>rangeColorToRgb,
    "rgbToHsl",
    ()=>rgbToHsl,
    "stringToAlpha",
    ()=>stringToAlpha,
    "stringToRgb",
    ()=>stringToRgb,
    "updateColor",
    ()=>updateColor,
    "updateColorValue",
    ()=>updateColorValue
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Utils/NumberUtils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Core/Utils/Constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$TypeUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Utils/TypeUtils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Enums$2f$AnimationStatus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Enums/AnimationStatus.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$Utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Utils/Utils.js [app-client] (ecmascript)");
;
;
;
;
;
function stringToRgba(engine, input) {
    if (!input) {
        return;
    }
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = engine.colorManagers.values()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var manager = _step.value;
            if (input.startsWith(manager.stringPrefix)) {
                return manager.parseString(input);
            }
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally{
        try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
            }
        } finally{
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
}
function rangeColorToRgb(engine, input, index) {
    var useIndex = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : true;
    if (!input) {
        return;
    }
    var color = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$TypeUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isString"])(input) ? {
        value: input
    } : input;
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$TypeUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isString"])(color.value)) {
        return colorToRgb(engine, color.value, index, useIndex);
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$TypeUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isArray"])(color.value)) {
        return rangeColorToRgb(engine, {
            value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$Utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["itemFromArray"])(color.value, index, useIndex)
        });
    }
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = engine.colorManagers.values()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var manager = _step.value;
            var res = manager.handleRangeColor(color);
            if (res) {
                return res;
            }
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally{
        try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
            }
        } finally{
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
}
function colorToRgb(engine, input, index) {
    var useIndex = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : true;
    if (!input) {
        return;
    }
    var color = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$TypeUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isString"])(input) ? {
        value: input
    } : input;
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$TypeUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isString"])(color.value)) {
        return color.value === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["randomColorValue"] ? getRandomRgbColor() : stringToRgb(engine, color.value);
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$TypeUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isArray"])(color.value)) {
        return colorToRgb(engine, {
            value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$Utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["itemFromArray"])(color.value, index, useIndex)
        });
    }
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = engine.colorManagers.values()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var manager = _step.value;
            var res = manager.handleColor(color);
            if (res) {
                return res;
            }
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally{
        try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
            }
        } finally{
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
}
function colorToHsl(engine, color, index) {
    var useIndex = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : true;
    var rgb = colorToRgb(engine, color, index, useIndex);
    return rgb ? rgbToHsl(rgb) : undefined;
}
function rangeColorToHsl(engine, color, index) {
    var useIndex = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : true;
    var rgb = rangeColorToRgb(engine, color, index, useIndex);
    return rgb ? rgbToHsl(rgb) : undefined;
}
function rgbToHsl(color) {
    var r1 = color.r / __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rgbMax"], g1 = color.g / __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rgbMax"], b1 = color.b / __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rgbMax"], max = Math.max(r1, g1, b1), min = Math.min(r1, g1, b1), res = {
        h: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hMin"],
        l: (max + min) * __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["half"],
        s: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sMin"]
    };
    if (max !== min) {
        res.s = res.l < __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["half"] ? (max - min) / (max + min) : (max - min) / (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["double"] - max - min);
        res.h = r1 === max ? (g1 - b1) / (max - min) : res.h = g1 === max ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["double"] + (b1 - r1) / (max - min) : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["double"] * __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["double"] + (r1 - g1) / (max - min);
    }
    res.l *= __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lMax"];
    res.s *= __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sMax"];
    res.h *= __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hPhase"];
    if (res.h < __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hMin"]) {
        res.h += __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hMax"];
    }
    if (res.h >= __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hMax"]) {
        res.h -= __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hMax"];
    }
    return res;
}
function stringToAlpha(engine, input) {
    var _stringToRgba;
    return (_stringToRgba = stringToRgba(engine, input)) === null || _stringToRgba === void 0 ? void 0 : _stringToRgba.a;
}
function stringToRgb(engine, input) {
    return stringToRgba(engine, input);
}
function hslToRgb(hsl) {
    var h = (hsl.h % __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hMax"] + __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hMax"]) % __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hMax"], s = Math.max(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sMin"], Math.min(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sMax"], hsl.s)), l = Math.max(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lMin"], Math.min(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lMax"], hsl.l)), hNormalized = h / __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hMax"], sNormalized = s / __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sMax"], lNormalized = l / __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lMax"];
    if (s === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sMin"]) {
        var grayscaleValue = Math.round(lNormalized * __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rgbFactor"]);
        return {
            r: grayscaleValue,
            g: grayscaleValue,
            b: grayscaleValue
        };
    }
    var channel = function(temp1, temp2, temp3) {
        var temp3Min = 0, temp3Max = 1;
        if (temp3 < temp3Min) {
            temp3++;
        }
        if (temp3 > temp3Max) {
            temp3--;
        }
        if (temp3 * __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sextuple"] < temp3Max) {
            return temp1 + (temp2 - temp1) * __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sextuple"] * temp3;
        }
        if (temp3 * __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["double"] < temp3Max) {
            return temp2;
        }
        if (temp3 * __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["triple"] < temp3Max * __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["double"]) {
            var temp3Offset = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["double"] / __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["triple"];
            return temp1 + (temp2 - temp1) * (temp3Offset - temp3) * __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sextuple"];
        }
        return temp1;
    }, temp1 = lNormalized < __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["half"] ? lNormalized * (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sNormalizedOffset"] + sNormalized) : lNormalized + sNormalized - lNormalized * sNormalized, temp2 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["double"] * lNormalized - temp1, phaseThird = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["phaseNumerator"] / __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["triple"], red = Math.min(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rgbFactor"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rgbFactor"] * channel(temp2, temp1, hNormalized + phaseThird)), green = Math.min(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rgbFactor"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rgbFactor"] * channel(temp2, temp1, hNormalized)), blue = Math.min(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rgbFactor"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rgbFactor"] * channel(temp2, temp1, hNormalized - phaseThird));
    return {
        r: Math.round(red),
        g: Math.round(green),
        b: Math.round(blue)
    };
}
function hslaToRgba(hsla) {
    var rgbResult = hslToRgb(hsla);
    return {
        a: hsla.a,
        b: rgbResult.b,
        g: rgbResult.g,
        r: rgbResult.r
    };
}
function getRandomRgbColor(min) {
    var fixedMin = min !== null && min !== void 0 ? min : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultRgbMin"], fixedMax = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rgbMax"] + __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["identity"];
    return {
        b: Math.floor((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["randomInRange"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setRangeValue"])(fixedMin, fixedMax))),
        g: Math.floor((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["randomInRange"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setRangeValue"])(fixedMin, fixedMax))),
        r: Math.floor((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["randomInRange"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setRangeValue"])(fixedMin, fixedMax)))
    };
}
function getStyleFromRgb(color, opacity) {
    return "rgba(".concat(color.r, ", ").concat(color.g, ", ").concat(color.b, ", ").concat(opacity !== null && opacity !== void 0 ? opacity : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultOpacity"], ")");
}
function getStyleFromHsl(color, opacity) {
    return "hsla(".concat(color.h, ", ").concat(color.s, "%, ").concat(color.l, "%, ").concat(opacity !== null && opacity !== void 0 ? opacity : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultOpacity"], ")");
}
function colorMix(color1, color2, size1, size2) {
    var rgb1 = color1, rgb2 = color2;
    if (rgb1.r === undefined) {
        rgb1 = hslToRgb(color1);
    }
    if (rgb2.r === undefined) {
        rgb2 = hslToRgb(color2);
    }
    return {
        b: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mix"])(rgb1.b, rgb2.b, size1, size2),
        g: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mix"])(rgb1.g, rgb2.g, size1, size2),
        r: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mix"])(rgb1.r, rgb2.r, size1, size2)
    };
}
function getLinkColor(p1, p2, linkColor) {
    if (linkColor === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["randomColorValue"]) {
        return getRandomRgbColor();
    } else if (linkColor === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["midColorValue"]) {
        var _p1_getFillColor, _ref;
        var sourceColor = (_p1_getFillColor = p1.getFillColor()) !== null && _p1_getFillColor !== void 0 ? _p1_getFillColor : p1.getStrokeColor(), destColor = (_ref = p2 === null || p2 === void 0 ? void 0 : p2.getFillColor()) !== null && _ref !== void 0 ? _ref : p2 === null || p2 === void 0 ? void 0 : p2.getStrokeColor();
        if (sourceColor && destColor && p2) {
            return colorMix(sourceColor, destColor, p1.getRadius(), p2.getRadius());
        } else {
            var hslColor = sourceColor !== null && sourceColor !== void 0 ? sourceColor : destColor;
            if (hslColor) {
                return hslToRgb(hslColor);
            }
        }
    } else {
        return linkColor;
    }
}
function getLinkRandomColor(engine, optColor, blink, consent) {
    var color = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$TypeUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isString"])(optColor) ? optColor : optColor.value;
    if (color === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["randomColorValue"]) {
        if (consent) {
            return rangeColorToRgb(engine, {
                value: color
            });
        }
        if (blink) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["randomColorValue"];
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["midColorValue"];
    } else if (color === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["midColorValue"]) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["midColorValue"];
    } else {
        return rangeColorToRgb(engine, {
            value: color
        });
    }
}
function getHslFromAnimation(animation) {
    return animation !== undefined ? {
        h: animation.h.value,
        s: animation.s.value,
        l: animation.l.value
    } : undefined;
}
function getHslAnimationFromHsl(hsl, animationOptions, reduceFactor) {
    var resColor = {
        h: {
            enable: false,
            value: hsl.h
        },
        s: {
            enable: false,
            value: hsl.s
        },
        l: {
            enable: false,
            value: hsl.l
        }
    };
    if (animationOptions) {
        setColorAnimation(resColor.h, animationOptions.h, reduceFactor);
        setColorAnimation(resColor.s, animationOptions.s, reduceFactor);
        setColorAnimation(resColor.l, animationOptions.l, reduceFactor);
    }
    return resColor;
}
function setColorAnimation(colorValue, colorAnimation, reduceFactor) {
    colorValue.enable = colorAnimation.enable;
    if (colorValue.enable) {
        colorValue.velocity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRangeValue"])(colorAnimation.speed) / __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["percentDenominator"] * reduceFactor;
        colorValue.decay = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["decayOffset"] - (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRangeValue"])(colorAnimation.decay);
        colorValue.status = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Enums$2f$AnimationStatus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimationStatus"].increasing;
        colorValue.loops = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultLoops"];
        colorValue.maxLoops = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRangeValue"])(colorAnimation.count);
        colorValue.time = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultTime"];
        colorValue.delayTime = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRangeValue"])(colorAnimation.delay) * __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["millisecondsToSeconds"];
        if (!colorAnimation.sync) {
            colorValue.velocity *= (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRandom"])();
            colorValue.value *= (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRandom"])();
        }
        colorValue.initialValue = colorValue.value;
        colorValue.offset = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setRangeValue"])(colorAnimation.offset);
    } else {
        colorValue.velocity = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultVelocity"];
    }
}
function updateColorValue(data, range, decrease, delta) {
    var _data_maxLoops, _data_loops, _data_maxLoops1, _data_delayTime, _data_delayTime1, _data_delayTime2, _data_delayTime3, _data_velocity, _data_decay;
    var minLoops = 0, minDelay = 0, identity = 1, minVelocity = 0, minOffset = 0, velocityFactor = 3.6;
    if (!data || !data.enable || ((_data_maxLoops = data.maxLoops) !== null && _data_maxLoops !== void 0 ? _data_maxLoops : minLoops) > minLoops && ((_data_loops = data.loops) !== null && _data_loops !== void 0 ? _data_loops : minLoops) > ((_data_maxLoops1 = data.maxLoops) !== null && _data_maxLoops1 !== void 0 ? _data_maxLoops1 : minLoops)) {
        return;
    }
    if (!data.time) {
        data.time = 0;
    }
    if (((_data_delayTime = data.delayTime) !== null && _data_delayTime !== void 0 ? _data_delayTime : minDelay) > minDelay && data.time < ((_data_delayTime1 = data.delayTime) !== null && _data_delayTime1 !== void 0 ? _data_delayTime1 : minDelay)) {
        data.time += delta.value;
    }
    if (((_data_delayTime2 = data.delayTime) !== null && _data_delayTime2 !== void 0 ? _data_delayTime2 : minDelay) > minDelay && data.time < ((_data_delayTime3 = data.delayTime) !== null && _data_delayTime3 !== void 0 ? _data_delayTime3 : minDelay)) {
        return;
    }
    var offset = data.offset ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["randomInRange"])(data.offset) : minOffset, velocity = ((_data_velocity = data.velocity) !== null && _data_velocity !== void 0 ? _data_velocity : minVelocity) * delta.factor + offset * velocityFactor, decay = (_data_decay = data.decay) !== null && _data_decay !== void 0 ? _data_decay : identity, max = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRangeMax"])(range), min = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRangeMin"])(range);
    if (!decrease || data.status === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Enums$2f$AnimationStatus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimationStatus"].increasing) {
        data.value += velocity;
        if (data.value > max) {
            if (!data.loops) {
                data.loops = 0;
            }
            data.loops++;
            if (decrease) {
                data.status = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Enums$2f$AnimationStatus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimationStatus"].decreasing;
            } else {
                data.value -= max;
            }
        }
    } else {
        data.value -= velocity;
        var minValue = 0;
        if (data.value < minValue) {
            if (!data.loops) {
                data.loops = 0;
            }
            data.loops++;
            data.status = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Enums$2f$AnimationStatus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimationStatus"].increasing;
        }
    }
    if (data.velocity && decay !== identity) {
        data.velocity *= decay;
    }
    data.value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clamp"])(data.value, min, max);
}
function updateColor(color, delta) {
    if (!color) {
        return;
    }
    var h = color.h, s = color.s, l = color.l, ranges = {
        h: {
            min: 0,
            max: 360
        },
        s: {
            min: 0,
            max: 100
        },
        l: {
            min: 0,
            max: 100
        }
    };
    if (h) {
        updateColorValue(h, ranges.h, false, delta);
    }
    if (s) {
        updateColorValue(s, ranges.s, true, delta);
    }
    if (l) {
        updateColorValue(l, ranges.l, true, delta);
    }
}
}),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Utils/CanvasUtils.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "alterHsl",
    ()=>alterHsl,
    "clear",
    ()=>clear,
    "drawEffect",
    ()=>drawEffect,
    "drawLine",
    ()=>drawLine,
    "drawParticle",
    ()=>drawParticle,
    "drawParticlePlugin",
    ()=>drawParticlePlugin,
    "drawPlugin",
    ()=>drawPlugin,
    "drawShape",
    ()=>drawShape,
    "drawShapeAfterDraw",
    ()=>drawShapeAfterDraw,
    "paintBase",
    ()=>paintBase,
    "paintImage",
    ()=>paintImage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_object_spread.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Core/Utils/Constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Enums$2f$Types$2f$AlterType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Enums/Types/AlterType.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$ColorUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Utils/ColorUtils.js [app-client] (ecmascript)");
;
;
;
;
function drawLine(context, begin, end) {
    context.beginPath();
    context.moveTo(begin.x, begin.y);
    context.lineTo(end.x, end.y);
    context.closePath();
}
function paintBase(context, dimension, baseColor) {
    context.fillStyle = baseColor !== null && baseColor !== void 0 ? baseColor : "rgba(0,0,0,0)";
    context.fillRect(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["originPoint"].x, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["originPoint"].y, dimension.width, dimension.height);
}
function paintImage(context, dimension, image, opacity) {
    if (!image) {
        return;
    }
    context.globalAlpha = opacity;
    context.drawImage(image, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["originPoint"].x, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["originPoint"].y, dimension.width, dimension.height);
    context.globalAlpha = 1;
}
function clear(context, dimension) {
    context.clearRect(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["originPoint"].x, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["originPoint"].y, dimension.width, dimension.height);
}
function drawParticle(data) {
    var _transform_a, _transform_b, _transform_b1, _transform_c, _transform_c1, _transform_d, _particle_strokeWidth;
    var container = data.container, context = data.context, particle = data.particle, delta = data.delta, colorStyles = data.colorStyles, backgroundMask = data.backgroundMask, composite = data.composite, radius = data.radius, opacity = data.opacity, shadow = data.shadow, transform = data.transform, pos = particle.getPosition(), angle = particle.rotation + (particle.pathRotation ? particle.velocity.angle : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultAngle"]), rotateData = {
        sin: Math.sin(angle),
        cos: Math.cos(angle)
    }, rotating = !!angle, transformData = {
        a: rotateData.cos * ((_transform_a = transform.a) !== null && _transform_a !== void 0 ? _transform_a : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultTransform"].a),
        b: rotating ? rotateData.sin * ((_transform_b = transform.b) !== null && _transform_b !== void 0 ? _transform_b : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["identity"]) : (_transform_b1 = transform.b) !== null && _transform_b1 !== void 0 ? _transform_b1 : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultTransform"].b,
        c: rotating ? -rotateData.sin * ((_transform_c = transform.c) !== null && _transform_c !== void 0 ? _transform_c : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["identity"]) : (_transform_c1 = transform.c) !== null && _transform_c1 !== void 0 ? _transform_c1 : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultTransform"].c,
        d: rotateData.cos * ((_transform_d = transform.d) !== null && _transform_d !== void 0 ? _transform_d : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultTransform"].d)
    };
    context.setTransform(transformData.a, transformData.b, transformData.c, transformData.d, pos.x, pos.y);
    if (backgroundMask) {
        context.globalCompositeOperation = composite;
    }
    var shadowColor = particle.shadowColor;
    if (shadow.enable && shadowColor) {
        context.shadowBlur = shadow.blur;
        context.shadowColor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$ColorUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getStyleFromRgb"])(shadowColor);
        context.shadowOffsetX = shadow.offset.x;
        context.shadowOffsetY = shadow.offset.y;
    }
    if (colorStyles.fill) {
        context.fillStyle = colorStyles.fill;
    }
    var strokeWidth = (_particle_strokeWidth = particle.strokeWidth) !== null && _particle_strokeWidth !== void 0 ? _particle_strokeWidth : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["minStrokeWidth"];
    context.lineWidth = strokeWidth;
    if (colorStyles.stroke) {
        context.strokeStyle = colorStyles.stroke;
    }
    var drawData = {
        container: container,
        context: context,
        particle: particle,
        radius: radius,
        opacity: opacity,
        delta: delta,
        transformData: transformData,
        strokeWidth: strokeWidth
    };
    drawShape(drawData);
    drawShapeAfterDraw(drawData);
    drawEffect(drawData);
    context.globalCompositeOperation = "source-over";
    context.resetTransform();
}
function drawEffect(data) {
    var container = data.container, context = data.context, particle = data.particle, radius = data.radius, opacity = data.opacity, delta = data.delta, transformData = data.transformData;
    if (!particle.effect) {
        return;
    }
    var drawer = container.effectDrawers.get(particle.effect);
    if (!drawer) {
        return;
    }
    drawer.draw({
        context: context,
        particle: particle,
        radius: radius,
        opacity: opacity,
        delta: delta,
        pixelRatio: container.retina.pixelRatio,
        transformData: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, transformData)
    });
}
function drawShape(data) {
    var container = data.container, context = data.context, particle = data.particle, radius = data.radius, opacity = data.opacity, delta = data.delta, strokeWidth = data.strokeWidth, transformData = data.transformData;
    if (!particle.shape) {
        return;
    }
    var drawer = container.shapeDrawers.get(particle.shape);
    if (!drawer) {
        return;
    }
    context.beginPath();
    drawer.draw({
        context: context,
        particle: particle,
        radius: radius,
        opacity: opacity,
        delta: delta,
        pixelRatio: container.retina.pixelRatio,
        transformData: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, transformData)
    });
    if (particle.shapeClose) {
        context.closePath();
    }
    if (strokeWidth > __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["minStrokeWidth"]) {
        context.stroke();
    }
    if (particle.shapeFill) {
        context.fill();
    }
}
function drawShapeAfterDraw(data) {
    var container = data.container, context = data.context, particle = data.particle, radius = data.radius, opacity = data.opacity, delta = data.delta, transformData = data.transformData;
    if (!particle.shape) {
        return;
    }
    var drawer = container.shapeDrawers.get(particle.shape);
    if (!(drawer === null || drawer === void 0 ? void 0 : drawer.afterDraw)) {
        return;
    }
    drawer.afterDraw({
        context: context,
        particle: particle,
        radius: radius,
        opacity: opacity,
        delta: delta,
        pixelRatio: container.retina.pixelRatio,
        transformData: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, transformData)
    });
}
function drawPlugin(context, plugin, delta) {
    if (!plugin.draw) {
        return;
    }
    plugin.draw(context, delta);
}
function drawParticlePlugin(context, plugin, particle, delta) {
    if (!plugin.drawParticle) {
        return;
    }
    plugin.drawParticle(context, particle, delta);
}
function alterHsl(color, type, value) {
    return {
        h: color.h,
        s: color.s,
        l: color.l + (type === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Enums$2f$Types$2f$AlterType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlterType"].darken ? -__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lFactor"] : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lFactor"]) * value
    };
}
}),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Core/Canvas.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Canvas",
    ()=>Canvas
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_async_to_generator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_async_to_generator.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_call_check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_class_call_check.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_create_class$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_create_class.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_instanceof$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_instanceof.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_object_spread.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_object_spread_props.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_sliced_to_array.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$8$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$_generator__as__$5f3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/tslib@2.8.1/node_modules/tslib/tslib.es6.mjs [app-client] (ecmascript) <export __generator as _>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$CanvasUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Utils/CanvasUtils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$Utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Utils/Utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Core/Utils/Constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$ColorUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Utils/ColorUtils.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
function setTransformValue(factor, newFactor, key) {
    var newValue = newFactor[key];
    if (newValue !== undefined) {
        var _factor_key;
        factor[key] = ((_factor_key = factor[key]) !== null && _factor_key !== void 0 ? _factor_key : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultTransformValue"]) * newValue;
    }
}
function setStyle(canvas, style) {
    var important = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
    if (!style) {
        return;
    }
    var element = canvas;
    if (!element) {
        return;
    }
    var elementStyle = element.style;
    if (!elementStyle) {
        return;
    }
    var keys = new Set();
    for(var key in elementStyle){
        if (!Object.prototype.hasOwnProperty.call(elementStyle, key)) {
            continue;
        }
        keys.add(elementStyle[key]);
    }
    for(var key1 in style){
        if (!Object.prototype.hasOwnProperty.call(style, key1)) {
            continue;
        }
        keys.add(style[key1]);
    }
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = keys[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var key2 = _step.value;
            var value = style.getPropertyValue(key2);
            if (!value) {
                elementStyle.removeProperty(key2);
            } else {
                elementStyle.setProperty(key2, value, important ? "important" : "");
            }
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally{
        try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
            }
        } finally{
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
}
var Canvas = /*#__PURE__*/ function() {
    "use strict";
    function Canvas(container, engine) {
        var _this = this;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_call_check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, Canvas);
        this.container = container;
        this._applyPostDrawUpdaters = function(particle) {
            var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
            try {
                for(var _iterator = _this._postDrawUpdaters[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                    var updater = _step.value;
                    var _updater_afterDraw;
                    (_updater_afterDraw = updater.afterDraw) === null || _updater_afterDraw === void 0 ? void 0 : _updater_afterDraw.call(updater, particle);
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally{
                try {
                    if (!_iteratorNormalCompletion && _iterator.return != null) {
                        _iterator.return();
                    }
                } finally{
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }
        };
        this._applyPreDrawUpdaters = function(ctx, particle, radius, zOpacity, colorStyles, transform) {
            var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
            try {
                for(var _iterator = _this._preDrawUpdaters[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                    var updater = _step.value;
                    var _updater_beforeDraw;
                    if (updater.getColorStyles) {
                        var _updater_getColorStyles = updater.getColorStyles(particle, ctx, radius, zOpacity), fill = _updater_getColorStyles.fill, stroke = _updater_getColorStyles.stroke;
                        if (fill) {
                            colorStyles.fill = fill;
                        }
                        if (stroke) {
                            colorStyles.stroke = stroke;
                        }
                    }
                    if (updater.getTransformValues) {
                        var updaterTransform = updater.getTransformValues(particle);
                        for(var key in updaterTransform){
                            setTransformValue(transform, updaterTransform, key);
                        }
                    }
                    (_updater_beforeDraw = updater.beforeDraw) === null || _updater_beforeDraw === void 0 ? void 0 : _updater_beforeDraw.call(updater, particle);
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally{
                try {
                    if (!_iteratorNormalCompletion && _iterator.return != null) {
                        _iterator.return();
                    }
                } finally{
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }
        };
        this._applyResizePlugins = function() {
            var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
            try {
                for(var _iterator = _this._resizePlugins[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                    var plugin = _step.value;
                    var _plugin_resize;
                    (_plugin_resize = plugin.resize) === null || _plugin_resize === void 0 ? void 0 : _plugin_resize.call(plugin);
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally{
                try {
                    if (!_iteratorNormalCompletion && _iterator.return != null) {
                        _iterator.return();
                    }
                } finally{
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }
        };
        this._getPluginParticleColors = function(particle) {
            var fColor, sColor;
            var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
            try {
                for(var _iterator = _this._colorPlugins[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                    var plugin = _step.value;
                    if (!fColor && plugin.particleFillColor) {
                        fColor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$ColorUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rangeColorToHsl"])(_this._engine, plugin.particleFillColor(particle));
                    }
                    if (!sColor && plugin.particleStrokeColor) {
                        sColor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$ColorUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rangeColorToHsl"])(_this._engine, plugin.particleStrokeColor(particle));
                    }
                    if (fColor && sColor) {
                        break;
                    }
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally{
                try {
                    if (!_iteratorNormalCompletion && _iterator.return != null) {
                        _iterator.return();
                    }
                } finally{
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }
            return [
                fColor,
                sColor
            ];
        };
        this._initCover = function() {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_async_to_generator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(function() {
                var _this, options, cover, color, coverRgb, coverColor;
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$8$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$_generator__as__$5f3e$__["_"])(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            _this = this;
                            options = this.container.actualOptions, cover = options.backgroundMask.cover, color = cover.color;
                            if (!color) return [
                                3,
                                1
                            ];
                            coverRgb = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$ColorUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rangeColorToRgb"])(this._engine, color);
                            if (coverRgb) {
                                coverColor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, coverRgb), {
                                    a: cover.opacity
                                });
                                this._coverColorStyle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$ColorUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getStyleFromRgb"])(coverColor, coverColor.a);
                            }
                            return [
                                3,
                                3
                            ];
                        case 1:
                            return [
                                4,
                                new Promise(function(resolve, reject) {
                                    if (!cover.image) {
                                        return;
                                    }
                                    var img = document.createElement("img");
                                    img.addEventListener("load", function() {
                                        _this._coverImage = {
                                            image: img,
                                            opacity: cover.opacity
                                        };
                                        resolve();
                                    });
                                    img.addEventListener("error", function(evt) {
                                        reject(evt.error);
                                    });
                                    img.src = cover.image;
                                })
                            ];
                        case 2:
                            _state.sent();
                            _state.label = 3;
                        case 3:
                            return [
                                2
                            ];
                    }
                });
            }).call(_this);
        };
        this._initStyle = function() {
            var element = _this.element, options = _this.container.actualOptions;
            if (!element) {
                return;
            }
            if (_this._fullScreen) {
                _this._setFullScreenStyle();
            } else {
                _this._resetOriginalStyle();
            }
            for(var key in options.style){
                if (!key || !options.style || !Object.prototype.hasOwnProperty.call(options.style, key)) {
                    continue;
                }
                var value = options.style[key];
                if (!value) {
                    continue;
                }
                element.style.setProperty(key, value, "important");
            }
        };
        this._initTrail = function() {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_async_to_generator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(function() {
                var _this, options, trail, trailFill, opacity, fillColor;
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$8$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$_generator__as__$5f3e$__["_"])(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            _this = this;
                            options = this.container.actualOptions, trail = options.particles.move.trail, trailFill = trail.fill;
                            if (!trail.enable) {
                                return [
                                    2
                                ];
                            }
                            opacity = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inverseFactorNumerator"] / trail.length;
                            if (!trailFill.color) return [
                                3,
                                1
                            ];
                            fillColor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$ColorUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rangeColorToRgb"])(this._engine, trailFill.color);
                            if (!fillColor) {
                                return [
                                    2
                                ];
                            }
                            this._trailFill = {
                                color: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, fillColor),
                                opacity: opacity
                            };
                            return [
                                3,
                                3
                            ];
                        case 1:
                            return [
                                4,
                                new Promise(function(resolve, reject) {
                                    if (!trailFill.image) {
                                        return;
                                    }
                                    var img = document.createElement("img");
                                    img.addEventListener("load", function() {
                                        _this._trailFill = {
                                            image: img,
                                            opacity: opacity
                                        };
                                        resolve();
                                    });
                                    img.addEventListener("error", function(evt) {
                                        reject(evt.error);
                                    });
                                    img.src = trailFill.image;
                                })
                            ];
                        case 2:
                            _state.sent();
                            _state.label = 3;
                        case 3:
                            return [
                                2
                            ];
                    }
                });
            }).call(_this);
        };
        this._paintBase = function(baseColor) {
            _this.draw(function(ctx) {
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$CanvasUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["paintBase"])(ctx, _this.size, baseColor);
            });
        };
        this._paintImage = function(image, opacity) {
            _this.draw(function(ctx) {
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$CanvasUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["paintImage"])(ctx, _this.size, image, opacity);
            });
        };
        this._repairStyle = function() {
            var element = _this.element;
            if (!element) {
                return;
            }
            _this._safeMutationObserver(function(observer) {
                return observer.disconnect();
            });
            _this._initStyle();
            _this.initBackground();
            var pointerEvents = _this._pointerEvents;
            element.style.pointerEvents = pointerEvents;
            element.setAttribute("pointer-events", pointerEvents);
            _this._safeMutationObserver(function(observer) {
                if (!element || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_instanceof$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(element, Node)) {
                    return;
                }
                observer.observe(element, {
                    attributes: true
                });
            });
        };
        this._resetOriginalStyle = function() {
            var element = _this.element, originalStyle = _this._originalStyle;
            if (!element || !originalStyle) {
                return;
            }
            setStyle(element, originalStyle, true);
        };
        this._safeMutationObserver = function(callback) {
            if (!_this._mutationObserver) {
                return;
            }
            callback(_this._mutationObserver);
        };
        this._setFullScreenStyle = function() {
            var element = _this.element;
            if (!element) {
                return;
            }
            setStyle(element, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$Utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFullScreenStyle"])(_this.container.actualOptions.fullScreen.zIndex), true);
        };
        this._engine = engine;
        this._standardSize = {
            height: 0,
            width: 0
        };
        var pxRatio = container.retina.pixelRatio, stdSize = this._standardSize;
        this.size = {
            height: stdSize.height * pxRatio,
            width: stdSize.width * pxRatio
        };
        this._context = null;
        this._generated = false;
        this._preDrawUpdaters = [];
        this._postDrawUpdaters = [];
        this._resizePlugins = [];
        this._colorPlugins = [];
        this._pointerEvents = "none";
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_create_class$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(Canvas, [
        {
            key: "_fullScreen",
            get: function get() {
                return this.container.actualOptions.fullScreen.enable;
            }
        },
        {
            key: "clear",
            value: function clear() {
                var _this = this;
                var options = this.container.actualOptions, trail = options.particles.move.trail, trailFill = this._trailFill;
                if (options.backgroundMask.enable) {
                    this.paint();
                } else if (trail.enable && trail.length > __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["minimumLength"] && trailFill) {
                    if (trailFill.color) {
                        this._paintBase((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$ColorUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getStyleFromRgb"])(trailFill.color, trailFill.opacity));
                    } else if (trailFill.image) {
                        this._paintImage(trailFill.image, trailFill.opacity);
                    }
                } else if (options.clear) {
                    this.draw(function(ctx) {
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$CanvasUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clear"])(ctx, _this.size);
                    });
                }
            }
        },
        {
            key: "destroy",
            value: function destroy() {
                this.stop();
                if (this._generated) {
                    var element = this.element;
                    element === null || element === void 0 ? void 0 : element.remove();
                    this.element = undefined;
                } else {
                    this._resetOriginalStyle();
                }
                this._preDrawUpdaters = [];
                this._postDrawUpdaters = [];
                this._resizePlugins = [];
                this._colorPlugins = [];
            }
        },
        {
            key: "draw",
            value: function draw(cb) {
                var ctx = this._context;
                if (!ctx) {
                    return;
                }
                return cb(ctx);
            }
        },
        {
            key: "drawAsync",
            value: function drawAsync(cb) {
                var ctx = this._context;
                if (!ctx) {
                    return undefined;
                }
                return cb(ctx);
            }
        },
        {
            key: "drawParticle",
            value: function drawParticle(particle, delta) {
                var _this = this;
                var _particle_getStrokeColor;
                if (particle.spawning || particle.destroyed) {
                    return;
                }
                var radius = particle.getRadius();
                if (radius <= __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["minimumSize"]) {
                    return;
                }
                var pfColor = particle.getFillColor(), psColor = (_particle_getStrokeColor = particle.getStrokeColor()) !== null && _particle_getStrokeColor !== void 0 ? _particle_getStrokeColor : pfColor;
                var _this__getPluginParticleColors = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this._getPluginParticleColors(particle), 2), fColor = _this__getPluginParticleColors[0], sColor = _this__getPluginParticleColors[1];
                if (!fColor) {
                    fColor = pfColor;
                }
                if (!sColor) {
                    sColor = psColor;
                }
                if (!fColor && !sColor) {
                    return;
                }
                this.draw(function(ctx) {
                    var _ref, _particle_bubble_opacity, _particle_strokeOpacity;
                    var _particle_opacity;
                    var container = _this.container, options = container.actualOptions, zIndexOptions = particle.options.zIndex, zIndexFactor = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["zIndexFactorOffset"] - particle.zIndexFactor, zOpacityFactor = Math.pow(zIndexFactor, zIndexOptions.opacityRate), opacity = (_ref = (_particle_bubble_opacity = particle.bubble.opacity) !== null && _particle_bubble_opacity !== void 0 ? _particle_bubble_opacity : (_particle_opacity = particle.opacity) === null || _particle_opacity === void 0 ? void 0 : _particle_opacity.value) !== null && _ref !== void 0 ? _ref : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultOpacity"], strokeOpacity = (_particle_strokeOpacity = particle.strokeOpacity) !== null && _particle_strokeOpacity !== void 0 ? _particle_strokeOpacity : opacity, zOpacity = opacity * zOpacityFactor, zStrokeOpacity = strokeOpacity * zOpacityFactor, transform = {}, colorStyles = {
                        fill: fColor ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$ColorUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getStyleFromHsl"])(fColor, zOpacity) : undefined
                    };
                    colorStyles.stroke = sColor ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$ColorUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getStyleFromHsl"])(sColor, zStrokeOpacity) : colorStyles.fill;
                    _this._applyPreDrawUpdaters(ctx, particle, radius, zOpacity, colorStyles, transform);
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$CanvasUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["drawParticle"])({
                        container: container,
                        context: ctx,
                        particle: particle,
                        delta: delta,
                        colorStyles: colorStyles,
                        backgroundMask: options.backgroundMask.enable,
                        composite: options.backgroundMask.composite,
                        radius: radius * Math.pow(zIndexFactor, zIndexOptions.sizeRate),
                        opacity: zOpacity,
                        shadow: particle.options.shadow,
                        transform: transform
                    });
                    _this._applyPostDrawUpdaters(particle);
                });
            }
        },
        {
            key: "drawParticlePlugin",
            value: function drawParticlePlugin(plugin, particle, delta) {
                this.draw(function(ctx) {
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$CanvasUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["drawParticlePlugin"])(ctx, plugin, particle, delta);
                });
            }
        },
        {
            key: "drawPlugin",
            value: function drawPlugin(plugin, delta) {
                this.draw(function(ctx) {
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$CanvasUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["drawPlugin"])(ctx, plugin, delta);
                });
            }
        },
        {
            key: "init",
            value: function init() {
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_async_to_generator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(function() {
                    var _this, e;
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$8$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$_generator__as__$5f3e$__["_"])(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                _this = this;
                                this._safeMutationObserver(function(obs) {
                                    return obs.disconnect();
                                });
                                this._mutationObserver = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$Utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["safeMutationObserver"])(function(records) {
                                    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                                    try {
                                        for(var _iterator = records[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                                            var record = _step.value;
                                            if (record.type === "attributes" && record.attributeName === "style") {
                                                _this._repairStyle();
                                            }
                                        }
                                    } catch (err) {
                                        _didIteratorError = true;
                                        _iteratorError = err;
                                    } finally{
                                        try {
                                            if (!_iteratorNormalCompletion && _iterator.return != null) {
                                                _iterator.return();
                                            }
                                        } finally{
                                            if (_didIteratorError) {
                                                throw _iteratorError;
                                            }
                                        }
                                    }
                                });
                                this.resize();
                                this._initStyle();
                                return [
                                    4,
                                    this._initCover()
                                ];
                            case 1:
                                _state.sent();
                                _state.label = 2;
                            case 2:
                                _state.trys.push([
                                    2,
                                    4,
                                    ,
                                    5
                                ]);
                                return [
                                    4,
                                    this._initTrail()
                                ];
                            case 3:
                                _state.sent();
                                return [
                                    3,
                                    5
                                ];
                            case 4:
                                e = _state.sent();
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$Utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLogger"])().error(e);
                                return [
                                    3,
                                    5
                                ];
                            case 5:
                                this.initBackground();
                                this._safeMutationObserver(function(obs) {
                                    if (!_this.element || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_instanceof$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(_this.element, Node)) {
                                        return;
                                    }
                                    obs.observe(_this.element, {
                                        attributes: true
                                    });
                                });
                                this.initUpdaters();
                                this.initPlugins();
                                this.paint();
                                return [
                                    2
                                ];
                        }
                    });
                }).call(this);
            }
        },
        {
            key: "initBackground",
            value: function initBackground() {
                var options = this.container.actualOptions, background = options.background, element = this.element;
                if (!element) {
                    return;
                }
                var elementStyle = element.style;
                if (!elementStyle) {
                    return;
                }
                if (background.color) {
                    var color = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$ColorUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rangeColorToRgb"])(this._engine, background.color);
                    elementStyle.backgroundColor = color ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$ColorUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getStyleFromRgb"])(color, background.opacity) : "";
                } else {
                    elementStyle.backgroundColor = "";
                }
                elementStyle.backgroundImage = background.image || "";
                elementStyle.backgroundPosition = background.position || "";
                elementStyle.backgroundRepeat = background.repeat || "";
                elementStyle.backgroundSize = background.size || "";
            }
        },
        {
            key: "initPlugins",
            value: function initPlugins() {
                this._resizePlugins = [];
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = this.container.plugins.values()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var plugin = _step.value;
                        var _plugin_particleFillColor;
                        if (plugin.resize) {
                            this._resizePlugins.push(plugin);
                        }
                        if ((_plugin_particleFillColor = plugin.particleFillColor) !== null && _plugin_particleFillColor !== void 0 ? _plugin_particleFillColor : plugin.particleStrokeColor) {
                            this._colorPlugins.push(plugin);
                        }
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally{
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return != null) {
                            _iterator.return();
                        }
                    } finally{
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }
            }
        },
        {
            key: "initUpdaters",
            value: function initUpdaters() {
                this._preDrawUpdaters = [];
                this._postDrawUpdaters = [];
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = this.container.particles.updaters[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var updater = _step.value;
                        var _ref, _updater_getColorStyles;
                        if (updater.afterDraw) {
                            this._postDrawUpdaters.push(updater);
                        }
                        if ((_ref = (_updater_getColorStyles = updater.getColorStyles) !== null && _updater_getColorStyles !== void 0 ? _updater_getColorStyles : updater.getTransformValues) !== null && _ref !== void 0 ? _ref : updater.beforeDraw) {
                            this._preDrawUpdaters.push(updater);
                        }
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally{
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return != null) {
                            _iterator.return();
                        }
                    } finally{
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }
            }
        },
        {
            key: "loadCanvas",
            value: function loadCanvas(canvas) {
                var _this = this;
                if (this._generated && this.element) {
                    this.element.remove();
                }
                this._generated = canvas.dataset && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generatedAttribute"] in canvas.dataset ? canvas.dataset[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generatedAttribute"]] === "true" : this._generated;
                this.element = canvas;
                this.element.ariaHidden = "true";
                this._originalStyle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$Utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cloneStyle"])(this.element.style);
                var standardSize = this._standardSize;
                standardSize.height = canvas.offsetHeight;
                standardSize.width = canvas.offsetWidth;
                var pxRatio = this.container.retina.pixelRatio, retinaSize = this.size;
                canvas.height = retinaSize.height = standardSize.height * pxRatio;
                canvas.width = retinaSize.width = standardSize.width * pxRatio;
                this._context = this.element.getContext("2d");
                this._safeMutationObserver(function(obs) {
                    return obs.disconnect();
                });
                this.container.retina.init();
                this.initBackground();
                this._safeMutationObserver(function(obs) {
                    if (!_this.element || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_instanceof$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(_this.element, Node)) {
                        return;
                    }
                    obs.observe(_this.element, {
                        attributes: true
                    });
                });
            }
        },
        {
            key: "paint",
            value: function paint() {
                var _this = this;
                var options = this.container.actualOptions;
                this.draw(function(ctx) {
                    if (options.backgroundMask.enable && options.backgroundMask.cover) {
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$CanvasUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clear"])(ctx, _this.size);
                        if (_this._coverImage) {
                            _this._paintImage(_this._coverImage.image, _this._coverImage.opacity);
                        } else if (_this._coverColorStyle) {
                            _this._paintBase(_this._coverColorStyle);
                        } else {
                            _this._paintBase();
                        }
                    } else {
                        _this._paintBase();
                    }
                });
            }
        },
        {
            key: "resize",
            value: function resize() {
                if (!this.element) {
                    return false;
                }
                var container = this.container, currentSize = container.canvas._standardSize, newSize = {
                    width: this.element.offsetWidth,
                    height: this.element.offsetHeight
                }, pxRatio = container.retina.pixelRatio, retinaSize = {
                    width: newSize.width * pxRatio,
                    height: newSize.height * pxRatio
                };
                if (newSize.height === currentSize.height && newSize.width === currentSize.width && retinaSize.height === this.element.height && retinaSize.width === this.element.width) {
                    return false;
                }
                var oldSize = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, currentSize);
                currentSize.height = newSize.height;
                currentSize.width = newSize.width;
                var canvasSize = this.size;
                this.element.width = canvasSize.width = retinaSize.width;
                this.element.height = canvasSize.height = retinaSize.height;
                if (this.container.started) {
                    container.particles.setResizeFactor({
                        width: currentSize.width / oldSize.width,
                        height: currentSize.height / oldSize.height
                    });
                }
                return true;
            }
        },
        {
            key: "setPointerEvents",
            value: function setPointerEvents(type) {
                var element = this.element;
                if (!element) {
                    return;
                }
                this._pointerEvents = type;
                this._repairStyle();
            }
        },
        {
            key: "stop",
            value: function stop() {
                var _this = this;
                this._safeMutationObserver(function(obs) {
                    return obs.disconnect();
                });
                this._mutationObserver = undefined;
                this.draw(function(ctx) {
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$CanvasUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clear"])(ctx, _this.size);
                });
            }
        },
        {
            key: "windowResize",
            value: function windowResize() {
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_async_to_generator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(function() {
                    var container, needsRefresh;
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$8$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$_generator__as__$5f3e$__["_"])(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                if (!this.element || !this.resize()) {
                                    return [
                                        2
                                    ];
                                }
                                container = this.container, needsRefresh = container.updateActualOptions();
                                container.particles.setDensity();
                                this._applyResizePlugins();
                                if (!needsRefresh) return [
                                    3,
                                    2
                                ];
                                return [
                                    4,
                                    container.refresh()
                                ];
                            case 1:
                                _state.sent();
                                _state.label = 2;
                            case 2:
                                return [
                                    2
                                ];
                        }
                    });
                }).call(this);
            }
        }
    ]);
    return Canvas;
}();
}),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Enums/InteractivityDetect.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "InteractivityDetect",
    ()=>InteractivityDetect
]);
var InteractivityDetect;
(function(InteractivityDetect) {
    InteractivityDetect["canvas"] = "canvas";
    InteractivityDetect["parent"] = "parent";
    InteractivityDetect["window"] = "window";
})(InteractivityDetect || (InteractivityDetect = {}));
}),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Core/Utils/EventListeners.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EventListeners",
    ()=>EventListeners
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_async_to_generator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_async_to_generator.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_call_check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_class_call_check.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_create_class$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_create_class.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_object_spread.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$8$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$_generator__as__$5f3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/tslib@2.8.1/node_modules/tslib/tslib.es6.mjs [app-client] (ecmascript) <export __generator as _>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Core/Utils/Constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$Utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Utils/Utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Enums$2f$InteractivityDetect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Enums/InteractivityDetect.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$TypeUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Utils/TypeUtils.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
function manageListener(element, event, handler, add, options) {
    if (add) {
        var addOptions = {
            passive: true
        };
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$TypeUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isBoolean"])(options)) {
            addOptions.capture = options;
        } else if (options !== undefined) {
            addOptions = options;
        }
        element.addEventListener(event, handler, addOptions);
    } else {
        var removeOptions = options;
        element.removeEventListener(event, handler, removeOptions);
    }
}
var EventListeners = /*#__PURE__*/ function() {
    "use strict";
    function EventListeners(container) {
        var _this = this;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_call_check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, EventListeners);
        this.container = container;
        this._doMouseTouchClick = function(e) {
            var _$container = _this.container, options = _$container.actualOptions;
            if (_this._canPush) {
                var mouseInteractivity = _$container.interactivity.mouse, mousePos = mouseInteractivity.position;
                if (!mousePos) {
                    return;
                }
                mouseInteractivity.clickPosition = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, mousePos);
                mouseInteractivity.clickTime = new Date().getTime();
                var onClick = options.interactivity.events.onClick;
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$Utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["executeOnSingleOrMultiple"])(onClick.mode, function(mode) {
                    return _this.container.handleClickMode(mode);
                });
            }
            if (e.type === "touchend") {
                setTimeout(function() {
                    return _this._mouseTouchFinish();
                }, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["touchDelay"]);
            }
        };
        this._handleThemeChange = function(e) {
            var mediaEvent = e, _$container = _this.container, options = _$container.options, defaultThemes = options.defaultThemes, themeName = mediaEvent.matches ? defaultThemes.dark : defaultThemes.light, theme = options.themes.find(function(theme) {
                return theme.name === themeName;
            });
            if (theme === null || theme === void 0 ? void 0 : theme.default.auto) {
                void _$container.loadTheme(themeName);
            }
        };
        this._handleVisibilityChange = function() {
            var _document;
            var _$container = _this.container, options = _$container.actualOptions;
            _this._mouseTouchFinish();
            if (!options.pauseOnBlur) {
                return;
            }
            if ((_document = document) === null || _document === void 0 ? void 0 : _document.hidden) {
                _$container.pageHidden = true;
                _$container.pause();
            } else {
                _$container.pageHidden = false;
                if (_$container.animationStatus) {
                    void _$container.play(true);
                } else {
                    void _$container.draw(true);
                }
            }
        };
        this._handleWindowResize = function() {
            if (_this._resizeTimeout) {
                clearTimeout(_this._resizeTimeout);
                delete _this._resizeTimeout;
            }
            var handleResize = function() {
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_async_to_generator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(function() {
                    var canvas;
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$8$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$_generator__as__$5f3e$__["_"])(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                canvas = this.container.canvas;
                                return [
                                    4,
                                    canvas === null || canvas === void 0 ? void 0 : canvas.windowResize()
                                ];
                            case 1:
                                _state.sent();
                                return [
                                    2
                                ];
                        }
                    });
                }).call(_this);
            };
            _this._resizeTimeout = setTimeout(function() {
                return void handleResize();
            }, _this.container.actualOptions.interactivity.events.resize.delay * __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["millisecondsToSeconds"]);
        };
        this._manageInteractivityListeners = function(mouseLeaveTmpEvent, add) {
            var handlers = _this._handlers, _$container = _this.container, options = _$container.actualOptions, interactivityEl = _$container.interactivity.element;
            if (!interactivityEl) {
                return;
            }
            var html = interactivityEl, canvas = _$container.canvas;
            canvas.setPointerEvents(html === canvas.element ? "initial" : "none");
            if (!(options.interactivity.events.onHover.enable || options.interactivity.events.onClick.enable)) {
                return;
            }
            manageListener(interactivityEl, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mouseMoveEvent"], handlers.mouseMove, add);
            manageListener(interactivityEl, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["touchStartEvent"], handlers.touchStart, add);
            manageListener(interactivityEl, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["touchMoveEvent"], handlers.touchMove, add);
            if (!options.interactivity.events.onClick.enable) {
                manageListener(interactivityEl, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["touchEndEvent"], handlers.touchEnd, add);
            } else {
                manageListener(interactivityEl, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["touchEndEvent"], handlers.touchEndClick, add);
                manageListener(interactivityEl, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mouseUpEvent"], handlers.mouseUp, add);
                manageListener(interactivityEl, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mouseDownEvent"], handlers.mouseDown, add);
            }
            manageListener(interactivityEl, mouseLeaveTmpEvent, handlers.mouseLeave, add);
            manageListener(interactivityEl, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["touchCancelEvent"], handlers.touchCancel, add);
        };
        this._manageListeners = function(add) {
            var handlers = _this._handlers, _$container = _this.container, options = _$container.actualOptions, detectType = options.interactivity.detectsOn, canvasEl = _$container.canvas.element;
            var mouseLeaveTmpEvent = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mouseLeaveEvent"];
            if (detectType === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Enums$2f$InteractivityDetect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InteractivityDetect"].window) {
                _$container.interactivity.element = window;
                mouseLeaveTmpEvent = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mouseOutEvent"];
            } else if (detectType === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Enums$2f$InteractivityDetect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InteractivityDetect"].parent && canvasEl) {
                var _canvasEl_parentElement;
                _$container.interactivity.element = (_canvasEl_parentElement = canvasEl.parentElement) !== null && _canvasEl_parentElement !== void 0 ? _canvasEl_parentElement : canvasEl.parentNode;
            } else {
                _$container.interactivity.element = canvasEl;
            }
            _this._manageMediaMatch(add);
            _this._manageResize(add);
            _this._manageInteractivityListeners(mouseLeaveTmpEvent, add);
            if (document) {
                manageListener(document, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["visibilityChangeEvent"], handlers.visibilityChange, add, false);
            }
        };
        this._manageMediaMatch = function(add) {
            var handlers = _this._handlers, mediaMatch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$Utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["safeMatchMedia"])("(prefers-color-scheme: dark)");
            if (!mediaMatch) {
                return;
            }
            if (mediaMatch.addEventListener !== undefined) {
                manageListener(mediaMatch, "change", handlers.themeChange, add);
                return;
            }
            if (mediaMatch.addListener === undefined) {
                return;
            }
            if (add) {
                mediaMatch.addListener(handlers.oldThemeChange);
            } else {
                mediaMatch.removeListener(handlers.oldThemeChange);
            }
        };
        this._manageResize = function(add) {
            var handlers = _this._handlers, _$container = _this.container, options = _$container.actualOptions;
            if (!options.interactivity.events.resize) {
                return;
            }
            if (typeof ResizeObserver === "undefined") {
                manageListener(window, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resizeEvent"], handlers.resize, add);
                return;
            }
            var canvasEl = _$container.canvas.element;
            if (_this._resizeObserver && !add) {
                if (canvasEl) {
                    _this._resizeObserver.unobserve(canvasEl);
                }
                _this._resizeObserver.disconnect();
                delete _this._resizeObserver;
            } else if (!_this._resizeObserver && add && canvasEl) {
                _this._resizeObserver = new ResizeObserver(function(entries) {
                    var entry = entries.find(function(e) {
                        return e.target === canvasEl;
                    });
                    if (!entry) {
                        return;
                    }
                    _this._handleWindowResize();
                });
                _this._resizeObserver.observe(canvasEl);
            }
        };
        this._mouseDown = function() {
            var interactivity = _this.container.interactivity;
            if (!interactivity) {
                return;
            }
            var mouse = interactivity.mouse;
            mouse.clicking = true;
            mouse.downPosition = mouse.position;
        };
        this._mouseTouchClick = function(e) {
            var _$container = _this.container, options = _$container.actualOptions, mouse = _$container.interactivity.mouse;
            mouse.inside = true;
            var handled = false;
            var mousePosition = mouse.position;
            if (!mousePosition || !options.interactivity.events.onClick.enable) {
                return;
            }
            var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
            try {
                for(var _iterator = _$container.plugins.values()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                    var plugin = _step.value;
                    if (!plugin.clickPositionValid) {
                        continue;
                    }
                    handled = plugin.clickPositionValid(mousePosition);
                    if (handled) {
                        break;
                    }
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally{
                try {
                    if (!_iteratorNormalCompletion && _iterator.return != null) {
                        _iterator.return();
                    }
                } finally{
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }
            if (!handled) {
                _this._doMouseTouchClick(e);
            }
            mouse.clicking = false;
        };
        this._mouseTouchFinish = function() {
            var interactivity = _this.container.interactivity;
            if (!interactivity) {
                return;
            }
            var mouse = interactivity.mouse;
            delete mouse.position;
            delete mouse.clickPosition;
            delete mouse.downPosition;
            interactivity.status = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mouseLeaveEvent"];
            mouse.inside = false;
            mouse.clicking = false;
        };
        this._mouseTouchMove = function(e) {
            var _$container = _this.container, options = _$container.actualOptions, interactivity = _$container.interactivity, canvasEl = _$container.canvas.element;
            if (!(interactivity === null || interactivity === void 0 ? void 0 : interactivity.element)) {
                return;
            }
            interactivity.mouse.inside = true;
            var pos;
            if (e.type.startsWith("pointer")) {
                _this._canPush = true;
                var mouseEvent = e;
                if (interactivity.element === window) {
                    if (canvasEl) {
                        var clientRect = canvasEl.getBoundingClientRect();
                        pos = {
                            x: mouseEvent.clientX - clientRect.left,
                            y: mouseEvent.clientY - clientRect.top
                        };
                    }
                } else if (options.interactivity.detectsOn === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Enums$2f$InteractivityDetect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InteractivityDetect"].parent) {
                    var source = mouseEvent.target, target = mouseEvent.currentTarget;
                    if (source && target && canvasEl) {
                        var sourceRect = source.getBoundingClientRect(), targetRect = target.getBoundingClientRect(), canvasRect = canvasEl.getBoundingClientRect();
                        pos = {
                            x: mouseEvent.offsetX + __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["double"] * sourceRect.left - (targetRect.left + canvasRect.left),
                            y: mouseEvent.offsetY + __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["double"] * sourceRect.top - (targetRect.top + canvasRect.top)
                        };
                    } else {
                        var _mouseEvent_offsetX, _mouseEvent_offsetY;
                        pos = {
                            x: (_mouseEvent_offsetX = mouseEvent.offsetX) !== null && _mouseEvent_offsetX !== void 0 ? _mouseEvent_offsetX : mouseEvent.clientX,
                            y: (_mouseEvent_offsetY = mouseEvent.offsetY) !== null && _mouseEvent_offsetY !== void 0 ? _mouseEvent_offsetY : mouseEvent.clientY
                        };
                    }
                } else if (mouseEvent.target === canvasEl) {
                    var _mouseEvent_offsetX1, _mouseEvent_offsetY1;
                    pos = {
                        x: (_mouseEvent_offsetX1 = mouseEvent.offsetX) !== null && _mouseEvent_offsetX1 !== void 0 ? _mouseEvent_offsetX1 : mouseEvent.clientX,
                        y: (_mouseEvent_offsetY1 = mouseEvent.offsetY) !== null && _mouseEvent_offsetY1 !== void 0 ? _mouseEvent_offsetY1 : mouseEvent.clientY
                    };
                }
            } else {
                _this._canPush = e.type !== "touchmove";
                if (canvasEl) {
                    var _canvasRect_left, _canvasRect_top;
                    var touchEvent = e, lastTouch = touchEvent.touches[touchEvent.touches.length - __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lengthOffset"]], canvasRect1 = canvasEl.getBoundingClientRect();
                    pos = {
                        x: lastTouch.clientX - ((_canvasRect_left = canvasRect1.left) !== null && _canvasRect_left !== void 0 ? _canvasRect_left : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["minCoordinate"]),
                        y: lastTouch.clientY - ((_canvasRect_top = canvasRect1.top) !== null && _canvasRect_top !== void 0 ? _canvasRect_top : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["minCoordinate"])
                    };
                }
            }
            var pxRatio = _$container.retina.pixelRatio;
            if (pos) {
                pos.x *= pxRatio;
                pos.y *= pxRatio;
            }
            interactivity.mouse.position = pos;
            interactivity.status = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mouseMoveEvent"];
        };
        this._touchEnd = function(e) {
            var evt = e, touches = Array.from(evt.changedTouches);
            var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
            try {
                for(var _iterator = touches[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                    var touch = _step.value;
                    _this._touches.delete(touch.identifier);
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally{
                try {
                    if (!_iteratorNormalCompletion && _iterator.return != null) {
                        _iterator.return();
                    }
                } finally{
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }
            _this._mouseTouchFinish();
        };
        this._touchEndClick = function(e) {
            var evt = e, touches = Array.from(evt.changedTouches);
            var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
            try {
                for(var _iterator = touches[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                    var touch = _step.value;
                    _this._touches.delete(touch.identifier);
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally{
                try {
                    if (!_iteratorNormalCompletion && _iterator.return != null) {
                        _iterator.return();
                    }
                } finally{
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }
            _this._mouseTouchClick(e);
        };
        this._touchStart = function(e) {
            var evt = e, touches = Array.from(evt.changedTouches);
            var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
            try {
                for(var _iterator = touches[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                    var touch = _step.value;
                    _this._touches.set(touch.identifier, performance.now());
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally{
                try {
                    if (!_iteratorNormalCompletion && _iterator.return != null) {
                        _iterator.return();
                    }
                } finally{
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }
            _this._mouseTouchMove(e);
        };
        this._canPush = true;
        this._touches = new Map();
        this._handlers = {
            mouseDown: function() {
                return _this._mouseDown();
            },
            mouseLeave: function() {
                return _this._mouseTouchFinish();
            },
            mouseMove: function(e) {
                return _this._mouseTouchMove(e);
            },
            mouseUp: function(e) {
                return _this._mouseTouchClick(e);
            },
            touchStart: function(e) {
                return _this._touchStart(e);
            },
            touchMove: function(e) {
                return _this._mouseTouchMove(e);
            },
            touchEnd: function(e) {
                return _this._touchEnd(e);
            },
            touchCancel: function(e) {
                return _this._touchEnd(e);
            },
            touchEndClick: function(e) {
                return _this._touchEndClick(e);
            },
            visibilityChange: function() {
                return _this._handleVisibilityChange();
            },
            themeChange: function(e) {
                return _this._handleThemeChange(e);
            },
            oldThemeChange: function(e) {
                return _this._handleThemeChange(e);
            },
            resize: function() {
                _this._handleWindowResize();
            }
        };
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_create_class$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(EventListeners, [
        {
            key: "addListeners",
            value: function addListeners() {
                this._manageListeners(true);
            }
        },
        {
            key: "removeListeners",
            value: function removeListeners() {
                this._manageListeners(false);
            }
        }
    ]);
    return EventListeners;
}();
}),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Enums/Types/EventType.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EventType",
    ()=>EventType
]);
var EventType;
(function(EventType) {
    EventType["configAdded"] = "configAdded";
    EventType["containerInit"] = "containerInit";
    EventType["particlesSetup"] = "particlesSetup";
    EventType["containerStarted"] = "containerStarted";
    EventType["containerStopped"] = "containerStopped";
    EventType["containerDestroyed"] = "containerDestroyed";
    EventType["containerPaused"] = "containerPaused";
    EventType["containerPlay"] = "containerPlay";
    EventType["containerBuilt"] = "containerBuilt";
    EventType["particleAdded"] = "particleAdded";
    EventType["particleDestroyed"] = "particleDestroyed";
    EventType["particleRemoved"] = "particleRemoved";
})(EventType || (EventType = {}));
}),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Options/Classes/OptionsColor.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "OptionsColor",
    ()=>OptionsColor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_call_check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_class_call_check.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_create_class$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_create_class.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$TypeUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Utils/TypeUtils.js [app-client] (ecmascript)");
;
;
;
var OptionsColor = /*#__PURE__*/ function() {
    "use strict";
    function OptionsColor() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_call_check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, OptionsColor);
        this.value = "";
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_create_class$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(OptionsColor, [
        {
            key: "load",
            value: function load(data) {
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$TypeUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNull"])(data)) {
                    return;
                }
                if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$TypeUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNull"])(data.value)) {
                    this.value = data.value;
                }
            }
        }
    ], [
        {
            key: "create",
            value: function create(source, data) {
                var color = new OptionsColor();
                color.load(source);
                if (data !== undefined) {
                    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$TypeUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isString"])(data) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$TypeUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isArray"])(data)) {
                        color.load({
                            value: data
                        });
                    } else {
                        color.load(data);
                    }
                }
                return color;
            }
        }
    ]);
    return OptionsColor;
}();
}),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Options/Classes/Background/Background.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Background",
    ()=>Background
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_call_check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_class_call_check.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_create_class$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_create_class.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Options$2f$Classes$2f$OptionsColor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Options/Classes/OptionsColor.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$TypeUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Utils/TypeUtils.js [app-client] (ecmascript)");
;
;
;
;
var Background = /*#__PURE__*/ function() {
    "use strict";
    function Background() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_call_check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, Background);
        this.color = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Options$2f$Classes$2f$OptionsColor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OptionsColor"]();
        this.color.value = "";
        this.image = "";
        this.position = "";
        this.repeat = "";
        this.size = "";
        this.opacity = 1;
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_create_class$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(Background, [
        {
            key: "load",
            value: function load(data) {
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$TypeUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNull"])(data)) {
                    return;
                }
                if (data.color !== undefined) {
                    this.color = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Options$2f$Classes$2f$OptionsColor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OptionsColor"].create(this.color, data.color);
                }
                if (data.image !== undefined) {
                    this.image = data.image;
                }
                if (data.position !== undefined) {
                    this.position = data.position;
                }
                if (data.repeat !== undefined) {
                    this.repeat = data.repeat;
                }
                if (data.size !== undefined) {
                    this.size = data.size;
                }
                if (data.opacity !== undefined) {
                    this.opacity = data.opacity;
                }
            }
        }
    ]);
    return Background;
}();
}),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Options/Classes/BackgroundMask/BackgroundMaskCover.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BackgroundMaskCover",
    ()=>BackgroundMaskCover
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_call_check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_class_call_check.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_create_class$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_create_class.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Options$2f$Classes$2f$OptionsColor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Options/Classes/OptionsColor.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$TypeUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Utils/TypeUtils.js [app-client] (ecmascript)");
;
;
;
;
var BackgroundMaskCover = /*#__PURE__*/ function() {
    "use strict";
    function BackgroundMaskCover() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_call_check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, BackgroundMaskCover);
        this.opacity = 1;
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_create_class$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(BackgroundMaskCover, [
        {
            key: "load",
            value: function load(data) {
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$TypeUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNull"])(data)) {
                    return;
                }
                if (data.color !== undefined) {
                    this.color = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Options$2f$Classes$2f$OptionsColor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OptionsColor"].create(this.color, data.color);
                }
                if (data.image !== undefined) {
                    this.image = data.image;
                }
                if (data.opacity !== undefined) {
                    this.opacity = data.opacity;
                }
            }
        }
    ]);
    return BackgroundMaskCover;
}();
}),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Options/Classes/BackgroundMask/BackgroundMask.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BackgroundMask",
    ()=>BackgroundMask
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_call_check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_class_call_check.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_create_class$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_create_class.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$TypeUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Utils/TypeUtils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Options$2f$Classes$2f$BackgroundMask$2f$BackgroundMaskCover$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Options/Classes/BackgroundMask/BackgroundMaskCover.js [app-client] (ecmascript)");
;
;
;
;
var BackgroundMask = /*#__PURE__*/ function() {
    "use strict";
    function BackgroundMask() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_call_check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, BackgroundMask);
        this.composite = "destination-out";
        this.cover = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Options$2f$Classes$2f$BackgroundMask$2f$BackgroundMaskCover$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BackgroundMaskCover"]();
        this.enable = false;
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_create_class$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(BackgroundMask, [
        {
            key: "load",
            value: function load(data) {
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$TypeUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNull"])(data)) {
                    return;
                }
                if (data.composite !== undefined) {
                    this.composite = data.composite;
                }
                if (data.cover !== undefined) {
                    var cover = data.cover, color = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$TypeUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isString"])(data.cover) ? {
                        color: data.cover
                    } : data.cover;
                    this.cover.load(cover.color !== undefined || cover.image !== undefined ? cover : {
                        color: color
                    });
                }
                if (data.enable !== undefined) {
                    this.enable = data.enable;
                }
            }
        }
    ]);
    return BackgroundMask;
}();
}),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Options/Classes/FullScreen/FullScreen.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FullScreen",
    ()=>FullScreen
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_call_check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_class_call_check.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_create_class$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_create_class.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$TypeUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Utils/TypeUtils.js [app-client] (ecmascript)");
;
;
;
var FullScreen = /*#__PURE__*/ function() {
    "use strict";
    function FullScreen() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_call_check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, FullScreen);
        this.enable = true;
        this.zIndex = 0;
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_create_class$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(FullScreen, [
        {
            key: "load",
            value: function load(data) {
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$TypeUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNull"])(data)) {
                    return;
                }
                if (data.enable !== undefined) {
                    this.enable = data.enable;
                }
                if (data.zIndex !== undefined) {
                    this.zIndex = data.zIndex;
                }
            }
        }
    ]);
    return FullScreen;
}();
}),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Options/Classes/Interactivity/Events/ClickEvent.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ClickEvent",
    ()=>ClickEvent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_call_check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_class_call_check.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_create_class$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_create_class.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$TypeUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Utils/TypeUtils.js [app-client] (ecmascript)");
;
;
;
var ClickEvent = /*#__PURE__*/ function() {
    "use strict";
    function ClickEvent() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_call_check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, ClickEvent);
        this.enable = false;
        this.mode = [];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_create_class$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(ClickEvent, [
        {
            key: "load",
            value: function load(data) {
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$TypeUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNull"])(data)) {
                    return;
                }
                if (data.enable !== undefined) {
                    this.enable = data.enable;
                }
                if (data.mode !== undefined) {
                    this.mode = data.mode;
                }
            }
        }
    ]);
    return ClickEvent;
}();
}),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Enums/Types/DivType.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DivType",
    ()=>DivType
]);
var DivType;
(function(DivType) {
    DivType["circle"] = "circle";
    DivType["rectangle"] = "rectangle";
})(DivType || (DivType = {}));
}),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Options/Classes/Interactivity/Events/DivEvent.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DivEvent",
    ()=>DivEvent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_call_check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_class_call_check.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_create_class$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_create_class.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Enums$2f$Types$2f$DivType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Enums/Types/DivType.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$TypeUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Utils/TypeUtils.js [app-client] (ecmascript)");
;
;
;
;
var DivEvent = /*#__PURE__*/ function() {
    "use strict";
    function DivEvent() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_call_check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, DivEvent);
        this.selectors = [];
        this.enable = false;
        this.mode = [];
        this.type = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Enums$2f$Types$2f$DivType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DivType"].circle;
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_create_class$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(DivEvent, [
        {
            key: "load",
            value: function load(data) {
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$TypeUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNull"])(data)) {
                    return;
                }
                if (data.selectors !== undefined) {
                    this.selectors = data.selectors;
                }
                if (data.enable !== undefined) {
                    this.enable = data.enable;
                }
                if (data.mode !== undefined) {
                    this.mode = data.mode;
                }
                if (data.type !== undefined) {
                    this.type = data.type;
                }
            }
        }
    ]);
    return DivEvent;
}();
}),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Options/Classes/Interactivity/Events/Parallax.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Parallax",
    ()=>Parallax
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_call_check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_class_call_check.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_create_class$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_create_class.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$TypeUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Utils/TypeUtils.js [app-client] (ecmascript)");
;
;
;
var Parallax = /*#__PURE__*/ function() {
    "use strict";
    function Parallax() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_call_check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, Parallax);
        this.enable = false;
        this.force = 2;
        this.smooth = 10;
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_create_class$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(Parallax, [
        {
            key: "load",
            value: function load(data) {
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$TypeUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNull"])(data)) {
                    return;
                }
                if (data.enable !== undefined) {
                    this.enable = data.enable;
                }
                if (data.force !== undefined) {
                    this.force = data.force;
                }
                if (data.smooth !== undefined) {
                    this.smooth = data.smooth;
                }
            }
        }
    ]);
    return Parallax;
}();
}),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Options/Classes/Interactivity/Events/HoverEvent.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HoverEvent",
    ()=>HoverEvent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_call_check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_class_call_check.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_create_class$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_create_class.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Options$2f$Classes$2f$Interactivity$2f$Events$2f$Parallax$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Options/Classes/Interactivity/Events/Parallax.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$TypeUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Utils/TypeUtils.js [app-client] (ecmascript)");
;
;
;
;
var HoverEvent = /*#__PURE__*/ function() {
    "use strict";
    function HoverEvent() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_call_check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, HoverEvent);
        this.enable = false;
        this.mode = [];
        this.parallax = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Options$2f$Classes$2f$Interactivity$2f$Events$2f$Parallax$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Parallax"]();
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_create_class$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(HoverEvent, [
        {
            key: "load",
            value: function load(data) {
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$TypeUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNull"])(data)) {
                    return;
                }
                if (data.enable !== undefined) {
                    this.enable = data.enable;
                }
                if (data.mode !== undefined) {
                    this.mode = data.mode;
                }
                this.parallax.load(data.parallax);
            }
        }
    ]);
    return HoverEvent;
}();
}),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Options/Classes/Interactivity/Events/ResizeEvent.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ResizeEvent",
    ()=>ResizeEvent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_call_check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_class_call_check.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_create_class$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_create_class.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$TypeUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Utils/TypeUtils.js [app-client] (ecmascript)");
;
;
;
var ResizeEvent = /*#__PURE__*/ function() {
    "use strict";
    function ResizeEvent() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_call_check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, ResizeEvent);
        this.delay = 0.5;
        this.enable = true;
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_create_class$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(ResizeEvent, [
        {
            key: "load",
            value: function load(data) {
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$TypeUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNull"])(data)) {
                    return;
                }
                if (data.delay !== undefined) {
                    this.delay = data.delay;
                }
                if (data.enable !== undefined) {
                    this.enable = data.enable;
                }
            }
        }
    ]);
    return ResizeEvent;
}();
}),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Options/Classes/Interactivity/Events/Events.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Events",
    ()=>Events
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_call_check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_class_call_check.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_create_class$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_create_class.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Options$2f$Classes$2f$Interactivity$2f$Events$2f$ClickEvent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Options/Classes/Interactivity/Events/ClickEvent.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Options$2f$Classes$2f$Interactivity$2f$Events$2f$DivEvent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Options/Classes/Interactivity/Events/DivEvent.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Options$2f$Classes$2f$Interactivity$2f$Events$2f$HoverEvent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Options/Classes/Interactivity/Events/HoverEvent.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Options$2f$Classes$2f$Interactivity$2f$Events$2f$ResizeEvent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Options/Classes/Interactivity/Events/ResizeEvent.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$Utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Utils/Utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$TypeUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Utils/TypeUtils.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
var Events = /*#__PURE__*/ function() {
    "use strict";
    function Events() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_call_check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, Events);
        this.onClick = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Options$2f$Classes$2f$Interactivity$2f$Events$2f$ClickEvent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ClickEvent"]();
        this.onDiv = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Options$2f$Classes$2f$Interactivity$2f$Events$2f$DivEvent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DivEvent"]();
        this.onHover = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Options$2f$Classes$2f$Interactivity$2f$Events$2f$HoverEvent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HoverEvent"]();
        this.resize = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Options$2f$Classes$2f$Interactivity$2f$Events$2f$ResizeEvent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResizeEvent"]();
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_create_class$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(Events, [
        {
            key: "load",
            value: function load(data) {
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$TypeUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNull"])(data)) {
                    return;
                }
                this.onClick.load(data.onClick);
                var onDiv = data.onDiv;
                if (onDiv !== undefined) {
                    this.onDiv = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$Utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["executeOnSingleOrMultiple"])(onDiv, function(t) {
                        var tmp = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Options$2f$Classes$2f$Interactivity$2f$Events$2f$DivEvent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DivEvent"]();
                        tmp.load(t);
                        return tmp;
                    });
                }
                this.onHover.load(data.onHover);
                this.resize.load(data.resize);
            }
        }
    ]);
    return Events;
}();
}),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Options/Classes/Interactivity/Modes/Modes.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Modes",
    ()=>Modes
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_call_check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_class_call_check.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_create_class$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_create_class.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$TypeUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Utils/TypeUtils.js [app-client] (ecmascript)");
;
;
;
var Modes = /*#__PURE__*/ function() {
    "use strict";
    function Modes(engine, container) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_call_check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, Modes);
        this._engine = engine;
        this._container = container;
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_create_class$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(Modes, [
        {
            key: "load",
            value: function load(data) {
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$TypeUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNull"])(data)) {
                    return;
                }
                if (!this._container) {
                    return;
                }
                var interactors = this._engine.interactors.get(this._container);
                if (!interactors) {
                    return;
                }
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = interactors[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var interactor = _step.value;
                        if (!interactor.loadModeOptions) {
                            continue;
                        }
                        interactor.loadModeOptions(this, data);
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally{
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return != null) {
                            _iterator.return();
                        }
                    } finally{
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }
            }
        }
    ]);
    return Modes;
}();
}),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Options/Classes/Interactivity/Interactivity.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Interactivity",
    ()=>Interactivity
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_call_check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_class_call_check.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_create_class$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_create_class.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Options$2f$Classes$2f$Interactivity$2f$Events$2f$Events$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Options/Classes/Interactivity/Events/Events.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Enums$2f$InteractivityDetect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Enums/InteractivityDetect.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Options$2f$Classes$2f$Interactivity$2f$Modes$2f$Modes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Options/Classes/Interactivity/Modes/Modes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$TypeUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Utils/TypeUtils.js [app-client] (ecmascript)");
;
;
;
;
;
;
var Interactivity = /*#__PURE__*/ function() {
    "use strict";
    function Interactivity(engine, container) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_call_check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, Interactivity);
        this.detectsOn = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Enums$2f$InteractivityDetect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InteractivityDetect"].window;
        this.events = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Options$2f$Classes$2f$Interactivity$2f$Events$2f$Events$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Events"]();
        this.modes = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Options$2f$Classes$2f$Interactivity$2f$Modes$2f$Modes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Modes"](engine, container);
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_create_class$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(Interactivity, [
        {
            key: "load",
            value: function load(data) {
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$TypeUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNull"])(data)) {
                    return;
                }
                var detectsOn = data.detectsOn;
                if (detectsOn !== undefined) {
                    this.detectsOn = detectsOn;
                }
                this.events.load(data.events);
                this.modes.load(data.modes);
            }
        }
    ]);
    return Interactivity;
}();
}),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Options/Classes/ManualParticle.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ManualParticle",
    ()=>ManualParticle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_call_check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_class_call_check.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_create_class$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_create_class.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Enums$2f$Modes$2f$PixelMode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Enums/Modes/PixelMode.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$Utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Utils/Utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$TypeUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Utils/TypeUtils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Core/Utils/Constants.js [app-client] (ecmascript)");
;
;
;
;
;
;
var ManualParticle = /*#__PURE__*/ function() {
    "use strict";
    function ManualParticle() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_call_check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, ManualParticle);
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_create_class$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(ManualParticle, [
        {
            key: "load",
            value: function load(data) {
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$TypeUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNull"])(data)) {
                    return;
                }
                if (data.position) {
                    var _data_position_x, _data_position_y, _data_position_mode;
                    this.position = {
                        x: (_data_position_x = data.position.x) !== null && _data_position_x !== void 0 ? _data_position_x : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["manualDefaultPosition"],
                        y: (_data_position_y = data.position.y) !== null && _data_position_y !== void 0 ? _data_position_y : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["manualDefaultPosition"],
                        mode: (_data_position_mode = data.position.mode) !== null && _data_position_mode !== void 0 ? _data_position_mode : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Enums$2f$Modes$2f$PixelMode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PixelMode"].percent
                    };
                }
                if (data.options) {
                    this.options = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$Utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deepExtend"])({}, data.options);
                }
            }
        }
    ]);
    return ManualParticle;
}();
}),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Enums/Modes/ResponsiveMode.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ResponsiveMode",
    ()=>ResponsiveMode
]);
var ResponsiveMode;
(function(ResponsiveMode) {
    ResponsiveMode["screen"] = "screen";
    ResponsiveMode["canvas"] = "canvas";
})(ResponsiveMode || (ResponsiveMode = {}));
}),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Options/Classes/Responsive.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Responsive",
    ()=>Responsive
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_call_check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_class_call_check.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_create_class$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_create_class.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Enums$2f$Modes$2f$ResponsiveMode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Enums/Modes/ResponsiveMode.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$Utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Utils/Utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$TypeUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Utils/TypeUtils.js [app-client] (ecmascript)");
;
;
;
;
;
var Responsive = /*#__PURE__*/ function() {
    "use strict";
    function Responsive() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_call_check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, Responsive);
        this.maxWidth = Infinity;
        this.options = {};
        this.mode = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Enums$2f$Modes$2f$ResponsiveMode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResponsiveMode"].canvas;
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_create_class$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(Responsive, [
        {
            key: "load",
            value: function load(data) {
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$TypeUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNull"])(data)) {
                    return;
                }
                if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$TypeUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNull"])(data.maxWidth)) {
                    this.maxWidth = data.maxWidth;
                }
                if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$TypeUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNull"])(data.mode)) {
                    if (data.mode === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Enums$2f$Modes$2f$ResponsiveMode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResponsiveMode"].screen) {
                        this.mode = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Enums$2f$Modes$2f$ResponsiveMode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResponsiveMode"].screen;
                    } else {
                        this.mode = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Enums$2f$Modes$2f$ResponsiveMode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResponsiveMode"].canvas;
                    }
                }
                if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$TypeUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNull"])(data.options)) {
                    this.options = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$Utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deepExtend"])({}, data.options);
                }
            }
        }
    ]);
    return Responsive;
}();
}),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Enums/Modes/ThemeMode.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ThemeMode",
    ()=>ThemeMode
]);
var ThemeMode;
(function(ThemeMode) {
    ThemeMode["any"] = "any";
    ThemeMode["dark"] = "dark";
    ThemeMode["light"] = "light";
})(ThemeMode || (ThemeMode = {}));
}),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Options/Classes/Theme/ThemeDefault.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ThemeDefault",
    ()=>ThemeDefault
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_call_check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_class_call_check.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_create_class$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_create_class.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Enums$2f$Modes$2f$ThemeMode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Enums/Modes/ThemeMode.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$TypeUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Utils/TypeUtils.js [app-client] (ecmascript)");
;
;
;
;
var ThemeDefault = /*#__PURE__*/ function() {
    "use strict";
    function ThemeDefault() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_call_check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, ThemeDefault);
        this.auto = false;
        this.mode = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Enums$2f$Modes$2f$ThemeMode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThemeMode"].any;
        this.value = false;
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_create_class$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(ThemeDefault, [
        {
            key: "load",
            value: function load(data) {
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$TypeUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNull"])(data)) {
                    return;
                }
                if (data.auto !== undefined) {
                    this.auto = data.auto;
                }
                if (data.mode !== undefined) {
                    this.mode = data.mode;
                }
                if (data.value !== undefined) {
                    this.value = data.value;
                }
            }
        }
    ]);
    return ThemeDefault;
}();
}),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Options/Classes/Theme/Theme.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Theme",
    ()=>Theme
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_call_check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_class_call_check.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_create_class$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_create_class.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Options$2f$Classes$2f$Theme$2f$ThemeDefault$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Options/Classes/Theme/ThemeDefault.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$Utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Utils/Utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$TypeUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Utils/TypeUtils.js [app-client] (ecmascript)");
;
;
;
;
;
var Theme = /*#__PURE__*/ function() {
    "use strict";
    function Theme() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_call_check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, Theme);
        this.name = "";
        this.default = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Options$2f$Classes$2f$Theme$2f$ThemeDefault$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThemeDefault"]();
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_create_class$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(Theme, [
        {
            key: "load",
            value: function load(data) {
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$TypeUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNull"])(data)) {
                    return;
                }
                if (data.name !== undefined) {
                    this.name = data.name;
                }
                this.default.load(data.default);
                if (data.options !== undefined) {
                    this.options = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$Utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deepExtend"])({}, data.options);
                }
            }
        }
    ]);
    return Theme;
}();
}),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Options/Classes/AnimationOptions.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AnimationOptions",
    ()=>AnimationOptions,
    "RangedAnimationOptions",
    ()=>RangedAnimationOptions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_call_super$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_call_super.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_call_check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_class_call_check.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_create_class$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_create_class.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_get.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_get_prototype_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_get_prototype_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_inherits$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_inherits.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Enums$2f$Modes$2f$AnimationMode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Enums/Modes/AnimationMode.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Enums$2f$Types$2f$StartValueType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Enums/Types/StartValueType.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$TypeUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Utils/TypeUtils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Utils/NumberUtils.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
var AnimationOptions = /*#__PURE__*/ function() {
    "use strict";
    function AnimationOptions() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_call_check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, AnimationOptions);
        this.count = 0;
        this.enable = false;
        this.speed = 1;
        this.decay = 0;
        this.delay = 0;
        this.sync = false;
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_create_class$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(AnimationOptions, [
        {
            key: "load",
            value: function load(data) {
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$TypeUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNull"])(data)) {
                    return;
                }
                if (data.count !== undefined) {
                    this.count = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setRangeValue"])(data.count);
                }
                if (data.enable !== undefined) {
                    this.enable = data.enable;
                }
                if (data.speed !== undefined) {
                    this.speed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setRangeValue"])(data.speed);
                }
                if (data.decay !== undefined) {
                    this.decay = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setRangeValue"])(data.decay);
                }
                if (data.delay !== undefined) {
                    this.delay = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setRangeValue"])(data.delay);
                }
                if (data.sync !== undefined) {
                    this.sync = data.sync;
                }
            }
        }
    ]);
    return AnimationOptions;
}();
var RangedAnimationOptions = /*#__PURE__*/ function(AnimationOptions) {
    "use strict";
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_inherits$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(RangedAnimationOptions, AnimationOptions);
    function RangedAnimationOptions() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_call_check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, RangedAnimationOptions);
        var _this;
        _this = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_call_super$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, RangedAnimationOptions);
        _this.mode = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Enums$2f$Modes$2f$AnimationMode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimationMode"].auto;
        _this.startValue = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Enums$2f$Types$2f$StartValueType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StartValueType"].random;
        return _this;
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_create_class$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(RangedAnimationOptions, [
        {
            key: "load",
            value: function load(data) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_get_prototype_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(RangedAnimationOptions.prototype), "load", this).call(this, data);
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$TypeUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNull"])(data)) {
                    return;
                }
                if (data.mode !== undefined) {
                    this.mode = data.mode;
                }
                if (data.startValue !== undefined) {
                    this.startValue = data.startValue;
                }
            }
        }
    ]);
    return RangedAnimationOptions;
}(AnimationOptions);
}),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Options/Classes/ColorAnimation.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ColorAnimation",
    ()=>ColorAnimation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_call_super$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_call_super.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_call_check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_class_call_check.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_create_class$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_create_class.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_get.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_get_prototype_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_get_prototype_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_inherits$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_inherits.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Options$2f$Classes$2f$AnimationOptions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Options/Classes/AnimationOptions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$TypeUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Utils/TypeUtils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Utils/NumberUtils.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
var ColorAnimation = /*#__PURE__*/ function(AnimationOptions) {
    "use strict";
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_inherits$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(ColorAnimation, AnimationOptions);
    function ColorAnimation() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_call_check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, ColorAnimation);
        var _this;
        _this = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_call_super$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, ColorAnimation);
        _this.offset = 0;
        _this.sync = true;
        return _this;
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_create_class$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(ColorAnimation, [
        {
            key: "load",
            value: function load(data) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_get_prototype_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(ColorAnimation.prototype), "load", this).call(this, data);
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$TypeUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNull"])(data)) {
                    return;
                }
                if (data.offset !== undefined) {
                    this.offset = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setRangeValue"])(data.offset);
                }
            }
        }
    ]);
    return ColorAnimation;
}(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Options$2f$Classes$2f$AnimationOptions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimationOptions"]);
}),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Options/Classes/HslAnimation.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HslAnimation",
    ()=>HslAnimation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_call_check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_class_call_check.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_create_class$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_create_class.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Options$2f$Classes$2f$ColorAnimation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Options/Classes/ColorAnimation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$TypeUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Utils/TypeUtils.js [app-client] (ecmascript)");
;
;
;
;
var HslAnimation = /*#__PURE__*/ function() {
    "use strict";
    function HslAnimation() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_call_check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, HslAnimation);
        this.h = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Options$2f$Classes$2f$ColorAnimation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ColorAnimation"]();
        this.s = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Options$2f$Classes$2f$ColorAnimation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ColorAnimation"]();
        this.l = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Options$2f$Classes$2f$ColorAnimation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ColorAnimation"]();
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_create_class$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(HslAnimation, [
        {
            key: "load",
            value: function load(data) {
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$TypeUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNull"])(data)) {
                    return;
                }
                this.h.load(data.h);
                this.s.load(data.s);
                this.l.load(data.l);
            }
        }
    ]);
    return HslAnimation;
}();
}),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Options/Classes/AnimatableColor.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AnimatableColor",
    ()=>AnimatableColor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_call_super$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_call_super.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_call_check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_class_call_check.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_create_class$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_create_class.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_get.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_get_prototype_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_get_prototype_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_inherits$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_inherits.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$TypeUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Utils/TypeUtils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Options$2f$Classes$2f$HslAnimation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Options/Classes/HslAnimation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Options$2f$Classes$2f$OptionsColor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Options/Classes/OptionsColor.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
var AnimatableColor = /*#__PURE__*/ function(OptionsColor) {
    "use strict";
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_inherits$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(AnimatableColor, OptionsColor);
    function AnimatableColor() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_call_check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, AnimatableColor);
        var _this;
        _this = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_call_super$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, AnimatableColor);
        _this.animation = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Options$2f$Classes$2f$HslAnimation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HslAnimation"]();
        return _this;
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_create_class$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(AnimatableColor, [
        {
            key: "load",
            value: function load(data) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_get_prototype_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(AnimatableColor.prototype), "load", this).call(this, data);
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$TypeUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNull"])(data)) {
                    return;
                }
                var colorAnimation = data.animation;
                if (colorAnimation !== undefined) {
                    if (colorAnimation.enable !== undefined) {
                        this.animation.h.load(colorAnimation);
                    } else {
                        this.animation.load(data.animation);
                    }
                }
            }
        }
    ], [
        {
            key: "create",
            value: function create(source, data) {
                var color = new AnimatableColor();
                color.load(source);
                if (data !== undefined) {
                    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$TypeUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isString"])(data) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$TypeUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isArray"])(data)) {
                        color.load({
                            value: data
                        });
                    } else {
                        color.load(data);
                    }
                }
                return color;
            }
        }
    ]);
    return AnimatableColor;
}(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Options$2f$Classes$2f$OptionsColor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OptionsColor"]);
}),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Enums/Modes/CollisionMode.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CollisionMode",
    ()=>CollisionMode
]);
var CollisionMode;
(function(CollisionMode) {
    CollisionMode["absorb"] = "absorb";
    CollisionMode["bounce"] = "bounce";
    CollisionMode["destroy"] = "destroy";
})(CollisionMode || (CollisionMode = {}));
}),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Options/Classes/Particles/Collisions/CollisionsAbsorb.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CollisionsAbsorb",
    ()=>CollisionsAbsorb
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_call_check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_class_call_check.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_create_class$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_create_class.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$TypeUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Utils/TypeUtils.js [app-client] (ecmascript)");
;
;
;
var CollisionsAbsorb = /*#__PURE__*/ function() {
    "use strict";
    function CollisionsAbsorb() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_call_check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, CollisionsAbsorb);
        this.speed = 2;
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_create_class$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(CollisionsAbsorb, [
        {
            key: "load",
            value: function load(data) {
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$TypeUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNull"])(data)) {
                    return;
                }
                if (data.speed !== undefined) {
                    this.speed = data.speed;
                }
            }
        }
    ]);
    return CollisionsAbsorb;
}();
}),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Options/Classes/Particles/Collisions/CollisionsOverlap.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CollisionsOverlap",
    ()=>CollisionsOverlap
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_call_check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_class_call_check.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_create_class$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_create_class.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$TypeUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Utils/TypeUtils.js [app-client] (ecmascript)");
;
;
;
var CollisionsOverlap = /*#__PURE__*/ function() {
    "use strict";
    function CollisionsOverlap() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_call_check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, CollisionsOverlap);
        this.enable = true;
        this.retries = 0;
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_create_class$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(CollisionsOverlap, [
        {
            key: "load",
            value: function load(data) {
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$TypeUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNull"])(data)) {
                    return;
                }
                if (data.enable !== undefined) {
                    this.enable = data.enable;
                }
                if (data.retries !== undefined) {
                    this.retries = data.retries;
                }
            }
        }
    ]);
    return CollisionsOverlap;
}();
}),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Options/Classes/ValueWithRandom.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AnimationValueWithRandom",
    ()=>AnimationValueWithRandom,
    "RangedAnimationValueWithRandom",
    ()=>RangedAnimationValueWithRandom,
    "ValueWithRandom",
    ()=>ValueWithRandom
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_call_super$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_call_super.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_call_check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_class_call_check.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_create_class$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_create_class.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_get.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_get_prototype_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_get_prototype_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_inherits$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_inherits.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Options$2f$Classes$2f$AnimationOptions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Options/Classes/AnimationOptions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$TypeUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Utils/TypeUtils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Utils/NumberUtils.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
var ValueWithRandom = /*#__PURE__*/ function() {
    "use strict";
    function ValueWithRandom() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_call_check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, ValueWithRandom);
        this.value = 0;
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_create_class$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(ValueWithRandom, [
        {
            key: "load",
            value: function load(data) {
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$TypeUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNull"])(data)) {
                    return;
                }
                if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$TypeUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNull"])(data.value)) {
                    this.value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setRangeValue"])(data.value);
                }
            }
        }
    ]);
    return ValueWithRandom;
}();
var AnimationValueWithRandom = /*#__PURE__*/ function(ValueWithRandom) {
    "use strict";
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_inherits$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(AnimationValueWithRandom, ValueWithRandom);
    function AnimationValueWithRandom() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_call_check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, AnimationValueWithRandom);
        var _this;
        _this = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_call_super$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, AnimationValueWithRandom);
        _this.animation = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Options$2f$Classes$2f$AnimationOptions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimationOptions"]();
        return _this;
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_create_class$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(AnimationValueWithRandom, [
        {
            key: "load",
            value: function load(data) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_get_prototype_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(AnimationValueWithRandom.prototype), "load", this).call(this, data);
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$TypeUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNull"])(data)) {
                    return;
                }
                var animation = data.animation;
                if (animation !== undefined) {
                    this.animation.load(animation);
                }
            }
        }
    ]);
    return AnimationValueWithRandom;
}(ValueWithRandom);
var RangedAnimationValueWithRandom = /*#__PURE__*/ function(AnimationValueWithRandom) {
    "use strict";
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_inherits$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(RangedAnimationValueWithRandom, AnimationValueWithRandom);
    function RangedAnimationValueWithRandom() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_call_check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, RangedAnimationValueWithRandom);
        var _this;
        _this = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_call_super$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, RangedAnimationValueWithRandom);
        _this.animation = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Options$2f$Classes$2f$AnimationOptions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RangedAnimationOptions"]();
        return _this;
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_create_class$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(RangedAnimationValueWithRandom, [
        {
            key: "load",
            value: function load(data) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_get_prototype_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(RangedAnimationValueWithRandom.prototype), "load", this).call(this, data);
            }
        }
    ]);
    return RangedAnimationValueWithRandom;
}(AnimationValueWithRandom);
}),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Options/Classes/Particles/Bounce/ParticlesBounceFactor.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ParticlesBounceFactor",
    ()=>ParticlesBounceFactor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_call_super$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_call_super.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_call_check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_class_call_check.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_inherits$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_inherits.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Options$2f$Classes$2f$ValueWithRandom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Options/Classes/ValueWithRandom.js [app-client] (ecmascript)");
;
;
;
;
var ParticlesBounceFactor = /*#__PURE__*/ function(ValueWithRandom) {
    "use strict";
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_inherits$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(ParticlesBounceFactor, ValueWithRandom);
    function ParticlesBounceFactor() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_call_check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, ParticlesBounceFactor);
        var _this;
        _this = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_call_super$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, ParticlesBounceFactor);
        _this.value = 1;
        return _this;
    }
    return ParticlesBounceFactor;
}(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Options$2f$Classes$2f$ValueWithRandom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ValueWithRandom"]);
}),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Options/Classes/Particles/Bounce/ParticlesBounce.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ParticlesBounce",
    ()=>ParticlesBounce
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_call_check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_class_call_check.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_create_class$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_create_class.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Options$2f$Classes$2f$Particles$2f$Bounce$2f$ParticlesBounceFactor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Options/Classes/Particles/Bounce/ParticlesBounceFactor.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$TypeUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Utils/TypeUtils.js [app-client] (ecmascript)");
;
;
;
;
var ParticlesBounce = /*#__PURE__*/ function() {
    "use strict";
    function ParticlesBounce() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_call_check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, ParticlesBounce);
        this.horizontal = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Options$2f$Classes$2f$Particles$2f$Bounce$2f$ParticlesBounceFactor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ParticlesBounceFactor"]();
        this.vertical = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Options$2f$Classes$2f$Particles$2f$Bounce$2f$ParticlesBounceFactor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ParticlesBounceFactor"]();
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_create_class$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(ParticlesBounce, [
        {
            key: "load",
            value: function load(data) {
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$TypeUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNull"])(data)) {
                    return;
                }
                this.horizontal.load(data.horizontal);
                this.vertical.load(data.vertical);
            }
        }
    ]);
    return ParticlesBounce;
}();
}),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Options/Classes/Particles/Collisions/Collisions.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Collisions",
    ()=>Collisions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_call_check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_class_call_check.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_create_class$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_create_class.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Enums$2f$Modes$2f$CollisionMode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Enums/Modes/CollisionMode.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Options$2f$Classes$2f$Particles$2f$Collisions$2f$CollisionsAbsorb$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Options/Classes/Particles/Collisions/CollisionsAbsorb.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Options$2f$Classes$2f$Particles$2f$Collisions$2f$CollisionsOverlap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Options/Classes/Particles/Collisions/CollisionsOverlap.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Options$2f$Classes$2f$Particles$2f$Bounce$2f$ParticlesBounce$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Options/Classes/Particles/Bounce/ParticlesBounce.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$TypeUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Utils/TypeUtils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Utils/NumberUtils.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
var Collisions = /*#__PURE__*/ function() {
    "use strict";
    function Collisions() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_call_check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, Collisions);
        this.absorb = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Options$2f$Classes$2f$Particles$2f$Collisions$2f$CollisionsAbsorb$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CollisionsAbsorb"]();
        this.bounce = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Options$2f$Classes$2f$Particles$2f$Bounce$2f$ParticlesBounce$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ParticlesBounce"]();
        this.enable = false;
        this.maxSpeed = 50;
        this.mode = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Enums$2f$Modes$2f$CollisionMode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CollisionMode"].bounce;
        this.overlap = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Options$2f$Classes$2f$Particles$2f$Collisions$2f$CollisionsOverlap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CollisionsOverlap"]();
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_create_class$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(Collisions, [
        {
            key: "load",
            value: function load(data) {
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$TypeUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNull"])(data)) {
                    return;
                }
                this.absorb.load(data.absorb);
                this.bounce.load(data.bounce);
                if (data.enable !== undefined) {
                    this.enable = data.enable;
                }
                if (data.maxSpeed !== undefined) {
                    this.maxSpeed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setRangeValue"])(data.maxSpeed);
                }
                if (data.mode !== undefined) {
                    this.mode = data.mode;
                }
                this.overlap.load(data.overlap);
            }
        }
    ]);
    return Collisions;
}();
}),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Options/Classes/Particles/Effect/Effect.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Effect",
    ()=>Effect
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_call_check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_class_call_check.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_create_class$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_create_class.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$Utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Utils/Utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$TypeUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Utils/TypeUtils.js [app-client] (ecmascript)");
;
;
;
;
var Effect = /*#__PURE__*/ function() {
    "use strict";
    function Effect() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_call_check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, Effect);
        this.close = true;
        this.fill = true;
        this.options = {};
        this.type = [];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_create_class$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(Effect, [
        {
            key: "load",
            value: function load(data) {
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$TypeUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNull"])(data)) {
                    return;
                }
                var options = data.options;
                if (options !== undefined) {
                    for(var effect in options){
                        var item = options[effect];
                        if (item) {
                            var _this_options_effect;
                            this.options[effect] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$Utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deepExtend"])((_this_options_effect = this.options[effect]) !== null && _this_options_effect !== void 0 ? _this_options_effect : {}, item);
                        }
                    }
                }
                if (data.close !== undefined) {
                    this.close = data.close;
                }
                if (data.fill !== undefined) {
                    this.fill = data.fill;
                }
                if (data.type !== undefined) {
                    this.type = data.type;
                }
            }
        }
    ]);
    return Effect;
}();
}),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Options/Classes/Particles/Move/MoveAngle.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MoveAngle",
    ()=>MoveAngle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_call_check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_class_call_check.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_create_class$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_create_class.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$TypeUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Utils/TypeUtils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Utils/NumberUtils.js [app-client] (ecmascript)");
;
;
;
;
var MoveAngle = /*#__PURE__*/ function() {
    "use strict";
    function MoveAngle() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_call_check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, MoveAngle);
        this.offset = 0;
        this.value = 90;
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_create_class$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(MoveAngle, [
        {
            key: "load",
            value: function load(data) {
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$TypeUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNull"])(data)) {
                    return;
                }
                if (data.offset !== undefined) {
                    this.offset = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setRangeValue"])(data.offset);
                }
                if (data.value !== undefined) {
                    this.value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setRangeValue"])(data.value);
                }
            }
        }
    ]);
    return MoveAngle;
}();
}),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Options/Classes/Particles/Move/MoveAttract.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MoveAttract",
    ()=>MoveAttract
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_call_check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_class_call_check.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_create_class$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_create_class.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$TypeUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Utils/TypeUtils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Utils/NumberUtils.js [app-client] (ecmascript)");
;
;
;
;
var MoveAttract = /*#__PURE__*/ function() {
    "use strict";
    function MoveAttract() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_call_check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, MoveAttract);
        this.distance = 200;
        this.enable = false;
        this.rotate = {
            x: 3000,
            y: 3000
        };
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_create_class$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(MoveAttract, [
        {
            key: "load",
            value: function load(data) {
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$TypeUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNull"])(data)) {
                    return;
                }
                if (data.distance !== undefined) {
                    this.distance = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setRangeValue"])(data.distance);
                }
                if (data.enable !== undefined) {
                    this.enable = data.enable;
                }
                if (data.rotate) {
                    var rotateX = data.rotate.x;
                    if (rotateX !== undefined) {
                        this.rotate.x = rotateX;
                    }
                    var rotateY = data.rotate.y;
                    if (rotateY !== undefined) {
                        this.rotate.y = rotateY;
                    }
                }
            }
        }
    ]);
    return MoveAttract;
}();
}),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Options/Classes/Particles/Move/MoveCenter.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MoveCenter",
    ()=>MoveCenter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_call_check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_class_call_check.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_create_class$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_create_class.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Enums$2f$Modes$2f$PixelMode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Enums/Modes/PixelMode.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$TypeUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Utils/TypeUtils.js [app-client] (ecmascript)");
;
;
;
;
var MoveCenter = /*#__PURE__*/ function() {
    "use strict";
    function MoveCenter() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_call_check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, MoveCenter);
        this.x = 50;
        this.y = 50;
        this.mode = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Enums$2f$Modes$2f$PixelMode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PixelMode"].percent;
        this.radius = 0;
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_create_class$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(MoveCenter, [
        {
            key: "load",
            value: function load(data) {
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$TypeUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNull"])(data)) {
                    return;
                }
                if (data.x !== undefined) {
                    this.x = data.x;
                }
                if (data.y !== undefined) {
                    this.y = data.y;
                }
                if (data.mode !== undefined) {
                    this.mode = data.mode;
                }
                if (data.radius !== undefined) {
                    this.radius = data.radius;
                }
            }
        }
    ]);
    return MoveCenter;
}();
}),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Options/Classes/Particles/Move/MoveGravity.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MoveGravity",
    ()=>MoveGravity
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_call_check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_class_call_check.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_create_class$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_create_class.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$TypeUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Utils/TypeUtils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Utils/NumberUtils.js [app-client] (ecmascript)");
;
;
;
;
var MoveGravity = /*#__PURE__*/ function() {
    "use strict";
    function MoveGravity() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_call_check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, MoveGravity);
        this.acceleration = 9.81;
        this.enable = false;
        this.inverse = false;
        this.maxSpeed = 50;
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_create_class$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(MoveGravity, [
        {
            key: "load",
            value: function load(data) {
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$TypeUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNull"])(data)) {
                    return;
                }
                if (data.acceleration !== undefined) {
                    this.acceleration = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setRangeValue"])(data.acceleration);
                }
                if (data.enable !== undefined) {
                    this.enable = data.enable;
                }
                if (data.inverse !== undefined) {
                    this.inverse = data.inverse;
                }
                if (data.maxSpeed !== undefined) {
                    this.maxSpeed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setRangeValue"])(data.maxSpeed);
                }
            }
        }
    ]);
    return MoveGravity;
}();
}),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Options/Classes/Particles/Move/Path/MovePath.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MovePath",
    ()=>MovePath
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_call_check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_class_call_check.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_create_class$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_create_class.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Options$2f$Classes$2f$ValueWithRandom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Options/Classes/ValueWithRandom.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$Utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Utils/Utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$TypeUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Utils/TypeUtils.js [app-client] (ecmascript)");
;
;
;
;
;
var MovePath = /*#__PURE__*/ function() {
    "use strict";
    function MovePath() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_call_check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, MovePath);
        this.clamp = true;
        this.delay = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Options$2f$Classes$2f$ValueWithRandom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ValueWithRandom"]();
        this.enable = false;
        this.options = {};
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_create_class$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(MovePath, [
        {
            key: "load",
            value: function load(data) {
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$TypeUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNull"])(data)) {
                    return;
                }
                if (data.clamp !== undefined) {
                    this.clamp = data.clamp;
                }
                this.delay.load(data.delay);
                if (data.enable !== undefined) {
                    this.enable = data.enable;
                }
                this.generator = data.generator;
                if (data.options) {
                    this.options = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$Utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deepExtend"])(this.options, data.options);
                }
            }
        }
    ]);
    return MovePath;
}();
}),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Options/Classes/Particles/Move/MoveTrailFill.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MoveTrailFill",
    ()=>MoveTrailFill
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_call_check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_class_call_check.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_create_class$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_create_class.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Options$2f$Classes$2f$OptionsColor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Options/Classes/OptionsColor.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$TypeUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Utils/TypeUtils.js [app-client] (ecmascript)");
;
;
;
;
var MoveTrailFill = /*#__PURE__*/ function() {
    "use strict";
    function MoveTrailFill() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_call_check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, MoveTrailFill);
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_create_class$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(MoveTrailFill, [
        {
            key: "load",
            value: function load(data) {
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$TypeUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNull"])(data)) {
                    return;
                }
                if (data.color !== undefined) {
                    this.color = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Options$2f$Classes$2f$OptionsColor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OptionsColor"].create(this.color, data.color);
                }
                if (data.image !== undefined) {
                    this.image = data.image;
                }
            }
        }
    ]);
    return MoveTrailFill;
}();
}),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Options/Classes/Particles/Move/MoveTrail.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MoveTrail",
    ()=>MoveTrail
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_call_check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_class_call_check.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_create_class$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_create_class.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Options$2f$Classes$2f$Particles$2f$Move$2f$MoveTrailFill$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Options/Classes/Particles/Move/MoveTrailFill.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$TypeUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Utils/TypeUtils.js [app-client] (ecmascript)");
;
;
;
;
var MoveTrail = /*#__PURE__*/ function() {
    "use strict";
    function MoveTrail() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_call_check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, MoveTrail);
        this.enable = false;
        this.length = 10;
        this.fill = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Options$2f$Classes$2f$Particles$2f$Move$2f$MoveTrailFill$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MoveTrailFill"]();
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_create_class$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(MoveTrail, [
        {
            key: "load",
            value: function load(data) {
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$TypeUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNull"])(data)) {
                    return;
                }
                if (data.enable !== undefined) {
                    this.enable = data.enable;
                }
                if (data.fill !== undefined) {
                    this.fill.load(data.fill);
                }
                if (data.length !== undefined) {
                    this.length = data.length;
                }
            }
        }
    ]);
    return MoveTrail;
}();
}),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Enums/Modes/OutMode.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "OutMode",
    ()=>OutMode
]);
var OutMode;
(function(OutMode) {
    OutMode["bounce"] = "bounce";
    OutMode["none"] = "none";
    OutMode["out"] = "out";
    OutMode["destroy"] = "destroy";
    OutMode["split"] = "split";
})(OutMode || (OutMode = {}));
}),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Options/Classes/Particles/Move/OutModes.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "OutModes",
    ()=>OutModes
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_call_check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_class_call_check.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_create_class$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_create_class.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Enums$2f$Modes$2f$OutMode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Enums/Modes/OutMode.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$TypeUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Utils/TypeUtils.js [app-client] (ecmascript)");
;
;
;
;
var OutModes = /*#__PURE__*/ function() {
    "use strict";
    function OutModes() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_call_check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, OutModes);
        this.default = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Enums$2f$Modes$2f$OutMode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OutMode"].out;
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_create_class$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(OutModes, [
        {
            key: "load",
            value: function load(data) {
                var _data_bottom, _data_left, _data_right, _data_top;
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$TypeUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNull"])(data)) {
                    return;
                }
                if (data.default !== undefined) {
                    this.default = data.default;
                }
                this.bottom = (_data_bottom = data.bottom) !== null && _data_bottom !== void 0 ? _data_bottom : data.default;
                this.left = (_data_left = data.left) !== null && _data_left !== void 0 ? _data_left : data.default;
                this.right = (_data_right = data.right) !== null && _data_right !== void 0 ? _data_right : data.default;
                this.top = (_data_top = data.top) !== null && _data_top !== void 0 ? _data_top : data.default;
            }
        }
    ]);
    return OutModes;
}();
}),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Options/Classes/Particles/Move/Spin.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Spin",
    ()=>Spin
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_call_check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_class_call_check.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_create_class$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_create_class.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$Utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Utils/Utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$TypeUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Utils/TypeUtils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Utils/NumberUtils.js [app-client] (ecmascript)");
;
;
;
;
;
var Spin = /*#__PURE__*/ function() {
    "use strict";
    function Spin() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_call_check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, Spin);
        this.acceleration = 0;
        this.enable = false;
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_create_class$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(Spin, [
        {
            key: "load",
            value: function load(data) {
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$TypeUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNull"])(data)) {
                    return;
                }
                if (data.acceleration !== undefined) {
                    this.acceleration = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setRangeValue"])(data.acceleration);
                }
                if (data.enable !== undefined) {
                    this.enable = data.enable;
                }
                if (data.position) {
                    this.position = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$Utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deepExtend"])({}, data.position);
                }
            }
        }
    ]);
    return Spin;
}();
}),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Options/Classes/Particles/Move/Move.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Move",
    ()=>Move
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_call_check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_class_call_check.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_create_class$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_create_class.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_object_spread.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Enums$2f$Directions$2f$MoveDirection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Enums/Directions/MoveDirection.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$TypeUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Utils/TypeUtils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Options$2f$Classes$2f$Particles$2f$Move$2f$MoveAngle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Options/Classes/Particles/Move/MoveAngle.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Options$2f$Classes$2f$Particles$2f$Move$2f$MoveAttract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Options/Classes/Particles/Move/MoveAttract.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Options$2f$Classes$2f$Particles$2f$Move$2f$MoveCenter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Options/Classes/Particles/Move/MoveCenter.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Options$2f$Classes$2f$Particles$2f$Move$2f$MoveGravity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Options/Classes/Particles/Move/MoveGravity.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Options$2f$Classes$2f$Particles$2f$Move$2f$Path$2f$MovePath$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Options/Classes/Particles/Move/Path/MovePath.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Options$2f$Classes$2f$Particles$2f$Move$2f$MoveTrail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Options/Classes/Particles/Move/MoveTrail.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Options$2f$Classes$2f$Particles$2f$Move$2f$OutModes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Options/Classes/Particles/Move/OutModes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Options$2f$Classes$2f$Particles$2f$Move$2f$Spin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Options/Classes/Particles/Move/Spin.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Utils/NumberUtils.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
;
var Move = /*#__PURE__*/ function() {
    "use strict";
    function Move() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_call_check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, Move);
        this.angle = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Options$2f$Classes$2f$Particles$2f$Move$2f$MoveAngle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MoveAngle"]();
        this.attract = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Options$2f$Classes$2f$Particles$2f$Move$2f$MoveAttract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MoveAttract"]();
        this.center = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Options$2f$Classes$2f$Particles$2f$Move$2f$MoveCenter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MoveCenter"]();
        this.decay = 0;
        this.distance = {};
        this.direction = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Enums$2f$Directions$2f$MoveDirection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MoveDirection"].none;
        this.drift = 0;
        this.enable = false;
        this.gravity = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Options$2f$Classes$2f$Particles$2f$Move$2f$MoveGravity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MoveGravity"]();
        this.path = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Options$2f$Classes$2f$Particles$2f$Move$2f$Path$2f$MovePath$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MovePath"]();
        this.outModes = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Options$2f$Classes$2f$Particles$2f$Move$2f$OutModes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OutModes"]();
        this.random = false;
        this.size = false;
        this.speed = 2;
        this.spin = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Options$2f$Classes$2f$Particles$2f$Move$2f$Spin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Spin"]();
        this.straight = false;
        this.trail = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Options$2f$Classes$2f$Particles$2f$Move$2f$MoveTrail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MoveTrail"]();
        this.vibrate = false;
        this.warp = false;
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_create_class$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(Move, [
        {
            key: "load",
            value: function load(data) {
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$TypeUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNull"])(data)) {
                    return;
                }
                this.angle.load((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$TypeUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNumber"])(data.angle) ? {
                    value: data.angle
                } : data.angle);
                this.attract.load(data.attract);
                this.center.load(data.center);
                if (data.decay !== undefined) {
                    this.decay = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setRangeValue"])(data.decay);
                }
                if (data.direction !== undefined) {
                    this.direction = data.direction;
                }
                if (data.distance !== undefined) {
                    this.distance = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$TypeUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNumber"])(data.distance) ? {
                        horizontal: data.distance,
                        vertical: data.distance
                    } : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, data.distance);
                }
                if (data.drift !== undefined) {
                    this.drift = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setRangeValue"])(data.drift);
                }
                if (data.enable !== undefined) {
                    this.enable = data.enable;
                }
                this.gravity.load(data.gravity);
                var outModes = data.outModes;
                if (outModes !== undefined) {
                    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$TypeUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isObject"])(outModes)) {
                        this.outModes.load(outModes);
                    } else {
                        this.outModes.load({
                            default: outModes
                        });
                    }
                }
                this.path.load(data.path);
                if (data.random !== undefined) {
                    this.random = data.random;
                }
                if (data.size !== undefined) {
                    this.size = data.size;
                }
                if (data.speed !== undefined) {
                    this.speed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setRangeValue"])(data.speed);
                }
                this.spin.load(data.spin);
                if (data.straight !== undefined) {
                    this.straight = data.straight;
                }
                this.trail.load(data.trail);
                if (data.vibrate !== undefined) {
                    this.vibrate = data.vibrate;
                }
                if (data.warp !== undefined) {
                    this.warp = data.warp;
                }
            }
        }
    ]);
    return Move;
}();
}),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Options/Classes/Particles/Opacity/OpacityAnimation.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "OpacityAnimation",
    ()=>OpacityAnimation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_call_super$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_call_super.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_call_check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_class_call_check.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_create_class$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_create_class.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_get.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_get_prototype_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_get_prototype_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_inherits$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_inherits.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Enums$2f$Types$2f$DestroyType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Enums/Types/DestroyType.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Options$2f$Classes$2f$AnimationOptions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Options/Classes/AnimationOptions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$TypeUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Utils/TypeUtils.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
var OpacityAnimation = /*#__PURE__*/ function(RangedAnimationOptions) {
    "use strict";
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_inherits$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(OpacityAnimation, RangedAnimationOptions);
    function OpacityAnimation() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_call_check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, OpacityAnimation);
        var _this;
        _this = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_call_super$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, OpacityAnimation);
        _this.destroy = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Enums$2f$Types$2f$DestroyType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DestroyType"].none;
        _this.speed = 2;
        return _this;
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_create_class$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(OpacityAnimation, [
        {
            key: "load",
            value: function load(data) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_get_prototype_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(OpacityAnimation.prototype), "load", this).call(this, data);
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$TypeUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNull"])(data)) {
                    return;
                }
                if (data.destroy !== undefined) {
                    this.destroy = data.destroy;
                }
            }
        }
    ]);
    return OpacityAnimation;
}(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Options$2f$Classes$2f$AnimationOptions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RangedAnimationOptions"]);
}),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Options/Classes/Particles/Opacity/Opacity.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Opacity",
    ()=>Opacity
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_call_super$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_call_super.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_call_check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_class_call_check.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_create_class$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_create_class.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_get.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_get_prototype_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_get_prototype_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_inherits$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_inherits.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Options$2f$Classes$2f$Particles$2f$Opacity$2f$OpacityAnimation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Options/Classes/Particles/Opacity/OpacityAnimation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Options$2f$Classes$2f$ValueWithRandom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Options/Classes/ValueWithRandom.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$TypeUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Utils/TypeUtils.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
var Opacity = /*#__PURE__*/ function(RangedAnimationValueWithRandom) {
    "use strict";
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_inherits$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(Opacity, RangedAnimationValueWithRandom);
    function Opacity() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_call_check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, Opacity);
        var _this;
        _this = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_call_super$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, Opacity);
        _this.animation = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Options$2f$Classes$2f$Particles$2f$Opacity$2f$OpacityAnimation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OpacityAnimation"]();
        _this.value = 1;
        return _this;
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_create_class$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(Opacity, [
        {
            key: "load",
            value: function load(data) {
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$TypeUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNull"])(data)) {
                    return;
                }
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_get_prototype_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(Opacity.prototype), "load", this).call(this, data);
                var animation = data.animation;
                if (animation !== undefined) {
                    this.animation.load(animation);
                }
            }
        }
    ]);
    return Opacity;
}(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Options$2f$Classes$2f$ValueWithRandom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RangedAnimationValueWithRandom"]);
}),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Options/Classes/Particles/Number/ParticlesDensity.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ParticlesDensity",
    ()=>ParticlesDensity
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_call_check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_class_call_check.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_create_class$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_create_class.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$TypeUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Utils/TypeUtils.js [app-client] (ecmascript)");
;
;
;
var ParticlesDensity = /*#__PURE__*/ function() {
    "use strict";
    function ParticlesDensity() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_call_check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, ParticlesDensity);
        this.enable = false;
        this.width = 1920;
        this.height = 1080;
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_create_class$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(ParticlesDensity, [
        {
            key: "load",
            value: function load(data) {
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$TypeUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNull"])(data)) {
                    return;
                }
                if (data.enable !== undefined) {
                    this.enable = data.enable;
                }
                var width = data.width;
                if (width !== undefined) {
                    this.width = width;
                }
                var height = data.height;
                if (height !== undefined) {
                    this.height = height;
                }
            }
        }
    ]);
    return ParticlesDensity;
}();
}),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Enums/Modes/LimitMode.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LimitMode",
    ()=>LimitMode
]);
var LimitMode;
(function(LimitMode) {
    LimitMode["delete"] = "delete";
    LimitMode["wait"] = "wait";
})(LimitMode || (LimitMode = {}));
}),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Options/Classes/Particles/Number/ParticlesNumberLimit.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ParticlesNumberLimit",
    ()=>ParticlesNumberLimit
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_call_check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_class_call_check.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_create_class$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_create_class.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Enums$2f$Modes$2f$LimitMode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Enums/Modes/LimitMode.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$TypeUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Utils/TypeUtils.js [app-client] (ecmascript)");
;
;
;
;
var ParticlesNumberLimit = /*#__PURE__*/ function() {
    "use strict";
    function ParticlesNumberLimit() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_call_check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, ParticlesNumberLimit);
        this.mode = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Enums$2f$Modes$2f$LimitMode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LimitMode"].delete;
        this.value = 0;
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_create_class$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(ParticlesNumberLimit, [
        {
            key: "load",
            value: function load(data) {
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$TypeUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNull"])(data)) {
                    return;
                }
                if (data.mode !== undefined) {
                    this.mode = data.mode;
                }
                if (data.value !== undefined) {
                    this.value = data.value;
                }
            }
        }
    ]);
    return ParticlesNumberLimit;
}();
}),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Options/Classes/Particles/Number/ParticlesNumber.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ParticlesNumber",
    ()=>ParticlesNumber
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_call_check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_class_call_check.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_create_class$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_create_class.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Options$2f$Classes$2f$Particles$2f$Number$2f$ParticlesDensity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Options/Classes/Particles/Number/ParticlesDensity.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Options$2f$Classes$2f$Particles$2f$Number$2f$ParticlesNumberLimit$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Options/Classes/Particles/Number/ParticlesNumberLimit.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$TypeUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Utils/TypeUtils.js [app-client] (ecmascript)");
;
;
;
;
;
var ParticlesNumber = /*#__PURE__*/ function() {
    "use strict";
    function ParticlesNumber() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_call_check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, ParticlesNumber);
        this.density = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Options$2f$Classes$2f$Particles$2f$Number$2f$ParticlesDensity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ParticlesDensity"]();
        this.limit = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Options$2f$Classes$2f$Particles$2f$Number$2f$ParticlesNumberLimit$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ParticlesNumberLimit"]();
        this.value = 0;
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_create_class$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(ParticlesNumber, [
        {
            key: "load",
            value: function load(data) {
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$TypeUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNull"])(data)) {
                    return;
                }
                this.density.load(data.density);
                this.limit.load(data.limit);
                if (data.value !== undefined) {
                    this.value = data.value;
                }
            }
        }
    ]);
    return ParticlesNumber;
}();
}),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Options/Classes/Particles/Shadow.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Shadow",
    ()=>Shadow
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_call_check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_class_call_check.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_create_class$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_create_class.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Options$2f$Classes$2f$OptionsColor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Options/Classes/OptionsColor.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$TypeUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Utils/TypeUtils.js [app-client] (ecmascript)");
;
;
;
;
var Shadow = /*#__PURE__*/ function() {
    "use strict";
    function Shadow() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_call_check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, Shadow);
        this.blur = 0;
        this.color = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Options$2f$Classes$2f$OptionsColor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OptionsColor"]();
        this.enable = false;
        this.offset = {
            x: 0,
            y: 0
        };
        this.color.value = "#000";
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_create_class$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(Shadow, [
        {
            key: "load",
            value: function load(data) {
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$TypeUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNull"])(data)) {
                    return;
                }
                if (data.blur !== undefined) {
                    this.blur = data.blur;
                }
                this.color = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Options$2f$Classes$2f$OptionsColor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OptionsColor"].create(this.color, data.color);
                if (data.enable !== undefined) {
                    this.enable = data.enable;
                }
                if (data.offset === undefined) {
                    return;
                }
                if (data.offset.x !== undefined) {
                    this.offset.x = data.offset.x;
                }
                if (data.offset.y !== undefined) {
                    this.offset.y = data.offset.y;
                }
            }
        }
    ]);
    return Shadow;
}();
}),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Options/Classes/Particles/Shape/Shape.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Shape",
    ()=>Shape
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_call_check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_class_call_check.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_create_class$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_create_class.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$Utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Utils/Utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$TypeUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Utils/TypeUtils.js [app-client] (ecmascript)");
;
;
;
;
var Shape = /*#__PURE__*/ function() {
    "use strict";
    function Shape() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_call_check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, Shape);
        this.close = true;
        this.fill = true;
        this.options = {};
        this.type = "circle";
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_create_class$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(Shape, [
        {
            key: "load",
            value: function load(data) {
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$TypeUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNull"])(data)) {
                    return;
                }
                var options = data.options;
                if (options !== undefined) {
                    for(var shape in options){
                        var item = options[shape];
                        if (item) {
                            var _this_options_shape;
                            this.options[shape] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$Utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deepExtend"])((_this_options_shape = this.options[shape]) !== null && _this_options_shape !== void 0 ? _this_options_shape : {}, item);
                        }
                    }
                }
                if (data.close !== undefined) {
                    this.close = data.close;
                }
                if (data.fill !== undefined) {
                    this.fill = data.fill;
                }
                if (data.type !== undefined) {
                    this.type = data.type;
                }
            }
        }
    ]);
    return Shape;
}();
}),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Options/Classes/Particles/Size/SizeAnimation.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SizeAnimation",
    ()=>SizeAnimation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_call_super$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_call_super.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_call_check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_class_call_check.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_create_class$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_create_class.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_get.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_get_prototype_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_get_prototype_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_inherits$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_inherits.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Enums$2f$Types$2f$DestroyType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Enums/Types/DestroyType.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Options$2f$Classes$2f$AnimationOptions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Options/Classes/AnimationOptions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$TypeUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Utils/TypeUtils.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
var SizeAnimation = /*#__PURE__*/ function(RangedAnimationOptions) {
    "use strict";
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_inherits$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(SizeAnimation, RangedAnimationOptions);
    function SizeAnimation() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_call_check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, SizeAnimation);
        var _this;
        _this = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_call_super$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, SizeAnimation);
        _this.destroy = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Enums$2f$Types$2f$DestroyType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DestroyType"].none;
        _this.speed = 5;
        return _this;
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_create_class$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(SizeAnimation, [
        {
            key: "load",
            value: function load(data) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_get_prototype_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(SizeAnimation.prototype), "load", this).call(this, data);
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$TypeUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNull"])(data)) {
                    return;
                }
                if (data.destroy !== undefined) {
                    this.destroy = data.destroy;
                }
            }
        }
    ]);
    return SizeAnimation;
}(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Options$2f$Classes$2f$AnimationOptions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RangedAnimationOptions"]);
}),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Options/Classes/Particles/Size/Size.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Size",
    ()=>Size
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_call_super$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_call_super.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_call_check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_class_call_check.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_create_class$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_create_class.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_get.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_get_prototype_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_get_prototype_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_inherits$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_inherits.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Options$2f$Classes$2f$ValueWithRandom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Options/Classes/ValueWithRandom.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Options$2f$Classes$2f$Particles$2f$Size$2f$SizeAnimation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Options/Classes/Particles/Size/SizeAnimation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$TypeUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Utils/TypeUtils.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
var Size = /*#__PURE__*/ function(RangedAnimationValueWithRandom) {
    "use strict";
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_inherits$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(Size, RangedAnimationValueWithRandom);
    function Size() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_call_check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, Size);
        var _this;
        _this = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_call_super$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, Size);
        _this.animation = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Options$2f$Classes$2f$Particles$2f$Size$2f$SizeAnimation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SizeAnimation"]();
        _this.value = 3;
        return _this;
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_create_class$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(Size, [
        {
            key: "load",
            value: function load(data) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_get_prototype_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(Size.prototype), "load", this).call(this, data);
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$TypeUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNull"])(data)) {
                    return;
                }
                var animation = data.animation;
                if (animation !== undefined) {
                    this.animation.load(animation);
                }
            }
        }
    ]);
    return Size;
}(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Options$2f$Classes$2f$ValueWithRandom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RangedAnimationValueWithRandom"]);
}),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Options/Classes/Particles/Stroke.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Stroke",
    ()=>Stroke
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_call_check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_class_call_check.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_create_class$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_create_class.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Options$2f$Classes$2f$AnimatableColor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Options/Classes/AnimatableColor.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$TypeUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Utils/TypeUtils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Utils/NumberUtils.js [app-client] (ecmascript)");
;
;
;
;
;
var Stroke = /*#__PURE__*/ function() {
    "use strict";
    function Stroke() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_call_check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, Stroke);
        this.width = 0;
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_create_class$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(Stroke, [
        {
            key: "load",
            value: function load(data) {
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$TypeUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNull"])(data)) {
                    return;
                }
                if (data.color !== undefined) {
                    this.color = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Options$2f$Classes$2f$AnimatableColor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatableColor"].create(this.color, data.color);
                }
                if (data.width !== undefined) {
                    this.width = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setRangeValue"])(data.width);
                }
                if (data.opacity !== undefined) {
                    this.opacity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setRangeValue"])(data.opacity);
                }
            }
        }
    ]);
    return Stroke;
}();
}),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Options/Classes/Particles/ZIndex/ZIndex.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ZIndex",
    ()=>ZIndex
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_call_super$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_call_super.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_call_check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_class_call_check.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_create_class$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_create_class.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_get.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_get_prototype_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_get_prototype_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_inherits$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_inherits.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Options$2f$Classes$2f$ValueWithRandom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Options/Classes/ValueWithRandom.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$TypeUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Utils/TypeUtils.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
var ZIndex = /*#__PURE__*/ function(ValueWithRandom) {
    "use strict";
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_inherits$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(ZIndex, ValueWithRandom);
    function ZIndex() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_call_check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, ZIndex);
        var _this;
        _this = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_call_super$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, ZIndex);
        _this.opacityRate = 1;
        _this.sizeRate = 1;
        _this.velocityRate = 1;
        return _this;
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_create_class$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(ZIndex, [
        {
            key: "load",
            value: function load(data) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_get_prototype_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(ZIndex.prototype), "load", this).call(this, data);
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$TypeUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNull"])(data)) {
                    return;
                }
                if (data.opacityRate !== undefined) {
                    this.opacityRate = data.opacityRate;
                }
                if (data.sizeRate !== undefined) {
                    this.sizeRate = data.sizeRate;
                }
                if (data.velocityRate !== undefined) {
                    this.velocityRate = data.velocityRate;
                }
            }
        }
    ]);
    return ZIndex;
}(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Options$2f$Classes$2f$ValueWithRandom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ValueWithRandom"]);
}),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Options/Classes/Particles/ParticlesOptions.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ParticlesOptions",
    ()=>ParticlesOptions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_call_check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_class_call_check.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_create_class$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_create_class.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$Utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Utils/Utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Options$2f$Classes$2f$AnimatableColor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Options/Classes/AnimatableColor.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Options$2f$Classes$2f$Particles$2f$Collisions$2f$Collisions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Options/Classes/Particles/Collisions/Collisions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Options$2f$Classes$2f$Particles$2f$Effect$2f$Effect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Options/Classes/Particles/Effect/Effect.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Options$2f$Classes$2f$Particles$2f$Move$2f$Move$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Options/Classes/Particles/Move/Move.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Options$2f$Classes$2f$Particles$2f$Opacity$2f$Opacity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Options/Classes/Particles/Opacity/Opacity.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Options$2f$Classes$2f$Particles$2f$Bounce$2f$ParticlesBounce$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Options/Classes/Particles/Bounce/ParticlesBounce.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Options$2f$Classes$2f$Particles$2f$Number$2f$ParticlesNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Options/Classes/Particles/Number/ParticlesNumber.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Options$2f$Classes$2f$Particles$2f$Shadow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Options/Classes/Particles/Shadow.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Options$2f$Classes$2f$Particles$2f$Shape$2f$Shape$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Options/Classes/Particles/Shape/Shape.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Options$2f$Classes$2f$Particles$2f$Size$2f$Size$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Options/Classes/Particles/Size/Size.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Options$2f$Classes$2f$Particles$2f$Stroke$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Options/Classes/Particles/Stroke.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Options$2f$Classes$2f$Particles$2f$ZIndex$2f$ZIndex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Options/Classes/Particles/ZIndex/ZIndex.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$TypeUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Utils/TypeUtils.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
var ParticlesOptions = /*#__PURE__*/ function() {
    "use strict";
    function ParticlesOptions(engine, container) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_call_check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, ParticlesOptions);
        this._engine = engine;
        this._container = container;
        this.bounce = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Options$2f$Classes$2f$Particles$2f$Bounce$2f$ParticlesBounce$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ParticlesBounce"]();
        this.collisions = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Options$2f$Classes$2f$Particles$2f$Collisions$2f$Collisions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Collisions"]();
        this.color = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Options$2f$Classes$2f$AnimatableColor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatableColor"]();
        this.color.value = "#fff";
        this.effect = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Options$2f$Classes$2f$Particles$2f$Effect$2f$Effect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Effect"]();
        this.groups = {};
        this.move = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Options$2f$Classes$2f$Particles$2f$Move$2f$Move$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Move"]();
        this.number = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Options$2f$Classes$2f$Particles$2f$Number$2f$ParticlesNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ParticlesNumber"]();
        this.opacity = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Options$2f$Classes$2f$Particles$2f$Opacity$2f$Opacity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Opacity"]();
        this.reduceDuplicates = false;
        this.shadow = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Options$2f$Classes$2f$Particles$2f$Shadow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Shadow"]();
        this.shape = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Options$2f$Classes$2f$Particles$2f$Shape$2f$Shape$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Shape"]();
        this.size = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Options$2f$Classes$2f$Particles$2f$Size$2f$Size$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Size"]();
        this.stroke = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Options$2f$Classes$2f$Particles$2f$Stroke$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Stroke"]();
        this.zIndex = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Options$2f$Classes$2f$Particles$2f$ZIndex$2f$ZIndex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ZIndex"]();
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_create_class$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(ParticlesOptions, [
        {
            key: "load",
            value: function load(data) {
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$TypeUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNull"])(data)) {
                    return;
                }
                if (data.groups !== undefined) {
                    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                    try {
                        for(var _iterator = Object.keys(data.groups)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                            var group = _step.value;
                            if (!Object.hasOwn(data.groups, group)) {
                                continue;
                            }
                            var item = data.groups[group];
                            if (item !== undefined) {
                                var _this_groups_group;
                                this.groups[group] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$Utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deepExtend"])((_this_groups_group = this.groups[group]) !== null && _this_groups_group !== void 0 ? _this_groups_group : {}, item);
                            }
                        }
                    } catch (err) {
                        _didIteratorError = true;
                        _iteratorError = err;
                    } finally{
                        try {
                            if (!_iteratorNormalCompletion && _iterator.return != null) {
                                _iterator.return();
                            }
                        } finally{
                            if (_didIteratorError) {
                                throw _iteratorError;
                            }
                        }
                    }
                }
                if (data.reduceDuplicates !== undefined) {
                    this.reduceDuplicates = data.reduceDuplicates;
                }
                this.bounce.load(data.bounce);
                this.color.load(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Options$2f$Classes$2f$AnimatableColor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatableColor"].create(this.color, data.color));
                this.effect.load(data.effect);
                this.move.load(data.move);
                this.number.load(data.number);
                this.opacity.load(data.opacity);
                this.shape.load(data.shape);
                this.size.load(data.size);
                this.shadow.load(data.shadow);
                this.zIndex.load(data.zIndex);
                this.collisions.load(data.collisions);
                if (data.interactivity !== undefined) {
                    this.interactivity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$Utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deepExtend"])({}, data.interactivity);
                }
                var strokeToLoad = data.stroke;
                if (strokeToLoad) {
                    this.stroke = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$Utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["executeOnSingleOrMultiple"])(strokeToLoad, function(t) {
                        var tmp = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Options$2f$Classes$2f$Particles$2f$Stroke$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Stroke"]();
                        tmp.load(t);
                        return tmp;
                    });
                }
                if (this._container) {
                    var updaters = this._engine.updaters.get(this._container);
                    if (updaters) {
                        var _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
                        try {
                            for(var _iterator1 = updaters[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
                                var updater = _step1.value;
                                if (updater.loadOptions) {
                                    updater.loadOptions(this, data);
                                }
                            }
                        } catch (err) {
                            _didIteratorError1 = true;
                            _iteratorError1 = err;
                        } finally{
                            try {
                                if (!_iteratorNormalCompletion1 && _iterator1.return != null) {
                                    _iterator1.return();
                                }
                            } finally{
                                if (_didIteratorError1) {
                                    throw _iteratorError1;
                                }
                            }
                        }
                    }
                    var interactors = this._engine.interactors.get(this._container);
                    if (interactors) {
                        var _iteratorNormalCompletion2 = true, _didIteratorError2 = false, _iteratorError2 = undefined;
                        try {
                            for(var _iterator2 = interactors[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true){
                                var interactor = _step2.value;
                                if (interactor.loadParticlesOptions) {
                                    interactor.loadParticlesOptions(this, data);
                                }
                            }
                        } catch (err) {
                            _didIteratorError2 = true;
                            _iteratorError2 = err;
                        } finally{
                            try {
                                if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
                                    _iterator2.return();
                                }
                            } finally{
                                if (_didIteratorError2) {
                                    throw _iteratorError2;
                                }
                            }
                        }
                    }
                }
            }
        }
    ]);
    return ParticlesOptions;
}();
}),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Utils/OptionsUtils.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "loadOptions",
    ()=>loadOptions,
    "loadParticlesOptions",
    ()=>loadParticlesOptions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_to_consumable_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_to_consumable_array.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Options$2f$Classes$2f$Particles$2f$ParticlesOptions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Options/Classes/Particles/ParticlesOptions.js [app-client] (ecmascript)");
;
;
function loadOptions(options) {
    for(var _len = arguments.length, sourceOptionsArr = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
        sourceOptionsArr[_key - 1] = arguments[_key];
    }
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = sourceOptionsArr[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var sourceOptions = _step.value;
            options.load(sourceOptions);
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally{
        try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
            }
        } finally{
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
}
function loadParticlesOptions(engine, container) {
    for(var _len = arguments.length, sourceOptionsArr = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++){
        sourceOptionsArr[_key - 2] = arguments[_key];
    }
    var options = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Options$2f$Classes$2f$Particles$2f$ParticlesOptions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ParticlesOptions"](engine, container);
    loadOptions.apply(void 0, [
        options
    ].concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_to_consumable_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(sourceOptionsArr)));
    return options;
}
}),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Options/Classes/Options.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Options",
    ()=>Options
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_call_check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_class_call_check.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_create_class$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_create_class.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$Utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Utils/Utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$TypeUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Utils/TypeUtils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Options$2f$Classes$2f$Background$2f$Background$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Options/Classes/Background/Background.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Options$2f$Classes$2f$BackgroundMask$2f$BackgroundMask$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Options/Classes/BackgroundMask/BackgroundMask.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Options$2f$Classes$2f$FullScreen$2f$FullScreen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Options/Classes/FullScreen/FullScreen.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Options$2f$Classes$2f$Interactivity$2f$Interactivity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Options/Classes/Interactivity/Interactivity.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Options$2f$Classes$2f$ManualParticle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Options/Classes/ManualParticle.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Options$2f$Classes$2f$Responsive$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Options/Classes/Responsive.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Enums$2f$Modes$2f$ResponsiveMode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Enums/Modes/ResponsiveMode.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Options$2f$Classes$2f$Theme$2f$Theme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Options/Classes/Theme/Theme.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Enums$2f$Modes$2f$ThemeMode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Enums/Modes/ThemeMode.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$OptionsUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Utils/OptionsUtils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Utils/NumberUtils.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
var Options = /*#__PURE__*/ function() {
    "use strict";
    function Options(engine, container) {
        var _this = this;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_call_check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, Options);
        this._findDefaultTheme = function(mode) {
            var _this_themes_find;
            return (_this_themes_find = _this.themes.find(function(theme) {
                return theme.default.value && theme.default.mode === mode;
            })) !== null && _this_themes_find !== void 0 ? _this_themes_find : _this.themes.find(function(theme) {
                return theme.default.value && theme.default.mode === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Enums$2f$Modes$2f$ThemeMode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThemeMode"].any;
            });
        };
        this._importPreset = function(preset) {
            _this.load(_this._engine.getPreset(preset));
        };
        this._engine = engine;
        this._container = container;
        this.autoPlay = true;
        this.background = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Options$2f$Classes$2f$Background$2f$Background$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Background"]();
        this.backgroundMask = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Options$2f$Classes$2f$BackgroundMask$2f$BackgroundMask$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BackgroundMask"]();
        this.clear = true;
        this.defaultThemes = {};
        this.delay = 0;
        this.fullScreen = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Options$2f$Classes$2f$FullScreen$2f$FullScreen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FullScreen"]();
        this.detectRetina = true;
        this.duration = 0;
        this.fpsLimit = 120;
        this.interactivity = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Options$2f$Classes$2f$Interactivity$2f$Interactivity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Interactivity"](engine, container);
        this.manualParticles = [];
        this.particles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$OptionsUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loadParticlesOptions"])(this._engine, this._container);
        this.pauseOnBlur = true;
        this.pauseOnOutsideViewport = true;
        this.responsive = [];
        this.smooth = false;
        this.style = {};
        this.themes = [];
        this.zLayers = 100;
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_create_class$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(Options, [
        {
            key: "load",
            value: function load(data) {
                var _this = this;
                var _this__findDefaultTheme, _this__findDefaultTheme1;
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$TypeUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNull"])(data)) {
                    return;
                }
                if (data.preset !== undefined) {
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$Utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["executeOnSingleOrMultiple"])(data.preset, function(preset) {
                        return _this._importPreset(preset);
                    });
                }
                if (data.autoPlay !== undefined) {
                    this.autoPlay = data.autoPlay;
                }
                if (data.clear !== undefined) {
                    this.clear = data.clear;
                }
                if (data.key !== undefined) {
                    this.key = data.key;
                }
                if (data.name !== undefined) {
                    this.name = data.name;
                }
                if (data.delay !== undefined) {
                    this.delay = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setRangeValue"])(data.delay);
                }
                var detectRetina = data.detectRetina;
                if (detectRetina !== undefined) {
                    this.detectRetina = detectRetina;
                }
                if (data.duration !== undefined) {
                    this.duration = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setRangeValue"])(data.duration);
                }
                var fpsLimit = data.fpsLimit;
                if (fpsLimit !== undefined) {
                    this.fpsLimit = fpsLimit;
                }
                if (data.pauseOnBlur !== undefined) {
                    this.pauseOnBlur = data.pauseOnBlur;
                }
                if (data.pauseOnOutsideViewport !== undefined) {
                    this.pauseOnOutsideViewport = data.pauseOnOutsideViewport;
                }
                if (data.zLayers !== undefined) {
                    this.zLayers = data.zLayers;
                }
                this.background.load(data.background);
                var fullScreen = data.fullScreen;
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$TypeUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isBoolean"])(fullScreen)) {
                    this.fullScreen.enable = fullScreen;
                } else {
                    this.fullScreen.load(fullScreen);
                }
                this.backgroundMask.load(data.backgroundMask);
                this.interactivity.load(data.interactivity);
                if (data.manualParticles) {
                    this.manualParticles = data.manualParticles.map(function(t) {
                        var tmp = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Options$2f$Classes$2f$ManualParticle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ManualParticle"]();
                        tmp.load(t);
                        return tmp;
                    });
                }
                this.particles.load(data.particles);
                this.style = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$Utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deepExtend"])(this.style, data.style);
                this._engine.loadOptions(this, data);
                if (data.smooth !== undefined) {
                    this.smooth = data.smooth;
                }
                var interactors = this._engine.interactors.get(this._container);
                if (interactors) {
                    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                    try {
                        for(var _iterator = interactors[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                            var interactor = _step.value;
                            if (interactor.loadOptions) {
                                interactor.loadOptions(this, data);
                            }
                        }
                    } catch (err) {
                        _didIteratorError = true;
                        _iteratorError = err;
                    } finally{
                        try {
                            if (!_iteratorNormalCompletion && _iterator.return != null) {
                                _iterator.return();
                            }
                        } finally{
                            if (_didIteratorError) {
                                throw _iteratorError;
                            }
                        }
                    }
                }
                if (data.responsive !== undefined) {
                    var _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
                    try {
                        for(var _iterator1 = data.responsive[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
                            var responsive = _step1.value;
                            var optResponsive = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Options$2f$Classes$2f$Responsive$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Responsive"]();
                            optResponsive.load(responsive);
                            this.responsive.push(optResponsive);
                        }
                    } catch (err) {
                        _didIteratorError1 = true;
                        _iteratorError1 = err;
                    } finally{
                        try {
                            if (!_iteratorNormalCompletion1 && _iterator1.return != null) {
                                _iterator1.return();
                            }
                        } finally{
                            if (_didIteratorError1) {
                                throw _iteratorError1;
                            }
                        }
                    }
                }
                this.responsive.sort(function(a, b) {
                    return a.maxWidth - b.maxWidth;
                });
                if (data.themes !== undefined) {
                    var _iteratorNormalCompletion2 = true, _didIteratorError2 = false, _iteratorError2 = undefined;
                    try {
                        var _this1, _loop = function() {
                            var theme = _step2.value;
                            var existingTheme = _this1.themes.find(function(t) {
                                return t.name === theme.name;
                            });
                            if (!existingTheme) {
                                var optTheme = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Options$2f$Classes$2f$Theme$2f$Theme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Theme"]();
                                optTheme.load(theme);
                                _this1.themes.push(optTheme);
                            } else {
                                existingTheme.load(theme);
                            }
                        };
                        for(var _iterator2 = data.themes[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true)_this1 = this, _loop();
                    } catch (err) {
                        _didIteratorError2 = true;
                        _iteratorError2 = err;
                    } finally{
                        try {
                            if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
                                _iterator2.return();
                            }
                        } finally{
                            if (_didIteratorError2) {
                                throw _iteratorError2;
                            }
                        }
                    }
                }
                this.defaultThemes.dark = (_this__findDefaultTheme = this._findDefaultTheme(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Enums$2f$Modes$2f$ThemeMode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThemeMode"].dark)) === null || _this__findDefaultTheme === void 0 ? void 0 : _this__findDefaultTheme.name;
                this.defaultThemes.light = (_this__findDefaultTheme1 = this._findDefaultTheme(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Enums$2f$Modes$2f$ThemeMode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThemeMode"].light)) === null || _this__findDefaultTheme1 === void 0 ? void 0 : _this__findDefaultTheme1.name;
            }
        },
        {
            key: "setResponsive",
            value: function setResponsive(width, pxRatio, defaultOptions) {
                this.load(defaultOptions);
                var responsiveOptions = this.responsive.find(function(t) {
                    return t.mode === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Enums$2f$Modes$2f$ResponsiveMode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResponsiveMode"].screen && screen ? t.maxWidth > screen.availWidth : t.maxWidth * pxRatio > width;
                });
                this.load(responsiveOptions === null || responsiveOptions === void 0 ? void 0 : responsiveOptions.options);
                return responsiveOptions === null || responsiveOptions === void 0 ? void 0 : responsiveOptions.maxWidth;
            }
        },
        {
            key: "setTheme",
            value: function setTheme(name) {
                if (name) {
                    var chosenTheme = this.themes.find(function(theme) {
                        return theme.name === name;
                    });
                    if (chosenTheme) {
                        this.load(chosenTheme.options);
                    }
                } else {
                    var mediaMatch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$Utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["safeMatchMedia"])("(prefers-color-scheme: dark)"), clientDarkMode = mediaMatch === null || mediaMatch === void 0 ? void 0 : mediaMatch.matches, defaultTheme = this._findDefaultTheme(clientDarkMode ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Enums$2f$Modes$2f$ThemeMode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThemeMode"].dark : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Enums$2f$Modes$2f$ThemeMode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThemeMode"].light);
                    if (defaultTheme) {
                        this.load(defaultTheme.options);
                    }
                }
            }
        }
    ]);
    return Options;
}();
}),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Enums/Types/InteractorType.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "InteractorType",
    ()=>InteractorType
]);
var InteractorType;
(function(InteractorType) {
    InteractorType["external"] = "external";
    InteractorType["particles"] = "particles";
})(InteractorType || (InteractorType = {}));
}),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Core/Utils/InteractionManager.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "InteractionManager",
    ()=>InteractionManager
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_async_to_generator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_async_to_generator.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_call_check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_class_call_check.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_create_class$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_create_class.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$8$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$_generator__as__$5f3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/tslib@2.8.1/node_modules/tslib/tslib.es6.mjs [app-client] (ecmascript) <export __generator as _>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Enums$2f$Types$2f$InteractorType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Enums/Types/InteractorType.js [app-client] (ecmascript)");
;
;
;
;
;
var InteractionManager = /*#__PURE__*/ function() {
    "use strict";
    function InteractionManager(engine, container) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_call_check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, InteractionManager);
        this.container = container;
        this._engine = engine;
        this._interactors = [];
        this._externalInteractors = [];
        this._particleInteractors = [];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_create_class$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(InteractionManager, [
        {
            key: "externalInteract",
            value: function externalInteract(delta) {
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = this._externalInteractors[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var interactor = _step.value;
                        if (interactor.isEnabled()) {
                            interactor.interact(delta);
                        }
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally{
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return != null) {
                            _iterator.return();
                        }
                    } finally{
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }
            }
        },
        {
            key: "handleClickMode",
            value: function handleClickMode(mode) {
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = this._externalInteractors[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var interactor = _step.value;
                        var _interactor_handleClickMode;
                        (_interactor_handleClickMode = interactor.handleClickMode) === null || _interactor_handleClickMode === void 0 ? void 0 : _interactor_handleClickMode.call(interactor, mode);
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally{
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return != null) {
                            _iterator.return();
                        }
                    } finally{
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }
            }
        },
        {
            key: "init",
            value: function init() {
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_async_to_generator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(function() {
                    var _, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, interactor;
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$8$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$_generator__as__$5f3e$__["_"])(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                _ = this;
                                return [
                                    4,
                                    this._engine.getInteractors(this.container, true)
                                ];
                            case 1:
                                _._interactors = _state.sent();
                                this._externalInteractors = [];
                                this._particleInteractors = [];
                                _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                                try {
                                    for(_iterator = this._interactors[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                                        interactor = _step.value;
                                        switch(interactor.type){
                                            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Enums$2f$Types$2f$InteractorType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InteractorType"].external:
                                                this._externalInteractors.push(interactor);
                                                break;
                                            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Enums$2f$Types$2f$InteractorType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InteractorType"].particles:
                                                this._particleInteractors.push(interactor);
                                                break;
                                        }
                                        interactor.init();
                                    }
                                } catch (err) {
                                    _didIteratorError = true;
                                    _iteratorError = err;
                                } finally{
                                    try {
                                        if (!_iteratorNormalCompletion && _iterator.return != null) {
                                            _iterator.return();
                                        }
                                    } finally{
                                        if (_didIteratorError) {
                                            throw _iteratorError;
                                        }
                                    }
                                }
                                return [
                                    2
                                ];
                        }
                    });
                }).call(this);
            }
        },
        {
            key: "particlesInteract",
            value: function particlesInteract(particle, delta) {
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = this._externalInteractors[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var interactor = _step.value;
                        interactor.clear(particle, delta);
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally{
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return != null) {
                            _iterator.return();
                        }
                    } finally{
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }
                var _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
                try {
                    for(var _iterator1 = this._particleInteractors[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
                        var interactor1 = _step1.value;
                        if (interactor1.isEnabled(particle)) {
                            interactor1.interact(particle, delta);
                        }
                    }
                } catch (err) {
                    _didIteratorError1 = true;
                    _iteratorError1 = err;
                } finally{
                    try {
                        if (!_iteratorNormalCompletion1 && _iterator1.return != null) {
                            _iterator1.return();
                        }
                    } finally{
                        if (_didIteratorError1) {
                            throw _iteratorError1;
                        }
                    }
                }
            }
        },
        {
            key: "reset",
            value: function reset(particle) {
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = this._externalInteractors[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var interactor = _step.value;
                        if (interactor.isEnabled()) {
                            interactor.reset(particle);
                        }
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally{
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return != null) {
                            _iterator.return();
                        }
                    } finally{
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }
                var _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
                try {
                    for(var _iterator1 = this._particleInteractors[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
                        var interactor1 = _step1.value;
                        if (interactor1.isEnabled(particle)) {
                            interactor1.reset(particle);
                        }
                    }
                } catch (err) {
                    _didIteratorError1 = true;
                    _iteratorError1 = err;
                } finally{
                    try {
                        if (!_iteratorNormalCompletion1 && _iterator1.return != null) {
                            _iterator1.return();
                        }
                    } finally{
                        if (_didIteratorError1) {
                            throw _iteratorError1;
                        }
                    }
                }
            }
        }
    ]);
    return InteractionManager;
}();
}),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Enums/Types/ParticleOutType.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ParticleOutType",
    ()=>ParticleOutType
]);
var ParticleOutType;
(function(ParticleOutType) {
    ParticleOutType["normal"] = "normal";
    ParticleOutType["inside"] = "inside";
    ParticleOutType["outside"] = "outside";
})(ParticleOutType || (ParticleOutType = {}));
}),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Core/Particle.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Particle",
    ()=>Particle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_call_check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_class_call_check.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_create_class$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_create_class.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_object_spread.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_object_spread_props.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_to_consumable_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_to_consumable_array.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Vectors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Core/Utils/Vectors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Utils/NumberUtils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Core/Utils/Constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$Utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Utils/Utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$ColorUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Utils/ColorUtils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Enums$2f$Types$2f$EventType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Enums/Types/EventType.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Options$2f$Classes$2f$Interactivity$2f$Interactivity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Options/Classes/Interactivity/Interactivity.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Enums$2f$Directions$2f$MoveDirection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Enums/Directions/MoveDirection.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Enums$2f$Modes$2f$OutMode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Enums/Modes/OutMode.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Enums$2f$Types$2f$ParticleOutType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Enums/Types/ParticleOutType.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Enums$2f$Modes$2f$PixelMode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Enums/Modes/PixelMode.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$CanvasUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Utils/CanvasUtils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$OptionsUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Utils/OptionsUtils.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
function loadEffectData(effect, effectOptions, id, reduceDuplicates) {
    var effectData = effectOptions.options[effect];
    if (!effectData) {
        return;
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$Utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deepExtend"])({
        close: effectOptions.close,
        fill: effectOptions.fill
    }, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$Utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["itemFromSingleOrMultiple"])(effectData, id, reduceDuplicates));
}
function loadShapeData(shape, shapeOptions, id, reduceDuplicates) {
    var shapeData = shapeOptions.options[shape];
    if (!shapeData) {
        return;
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$Utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deepExtend"])({
        close: shapeOptions.close,
        fill: shapeOptions.fill
    }, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$Utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["itemFromSingleOrMultiple"])(shapeData, id, reduceDuplicates));
}
function fixOutMode(data) {
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$Utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isInArray"])(data.outMode, data.checkModes)) {
        return;
    }
    var diameter = data.radius * __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["double"];
    if (data.coord > data.maxCoord - diameter) {
        data.setCb(-data.radius);
    } else if (data.coord < diameter) {
        data.setCb(data.radius);
    }
}
var Particle = /*#__PURE__*/ function() {
    "use strict";
    function Particle(engine, container) {
        var _this = this;
        var _this1 = this;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_call_check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, Particle);
        this.container = container;
        this._calcPosition = function(container, position, zIndex) {
            var tryCount = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultRetryCount"];
            var _outModes_left, _outModes_right, _outModes_top, _outModes_bottom;
            var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
            try {
                for(var _iterator = container.plugins.values()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                    var plugin = _step.value;
                    var pluginPos = plugin.particlePosition !== undefined ? plugin.particlePosition(position, _this1) : undefined;
                    if (pluginPos) {
                        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Vectors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3d"].create(pluginPos.x, pluginPos.y, zIndex);
                    }
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally{
                try {
                    if (!_iteratorNormalCompletion && _iterator.return != null) {
                        _iterator.return();
                    }
                } finally{
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }
            var canvasSize = container.canvas.size, exactPosition = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calcExactPositionOrRandomFromSize"])({
                size: canvasSize,
                position: position
            }), pos = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Vectors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3d"].create(exactPosition.x, exactPosition.y, zIndex), radius = _this1.getRadius(), outModes = _this1.options.move.outModes, fixHorizontal = function(outMode) {
                fixOutMode({
                    outMode: outMode,
                    checkModes: [
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Enums$2f$Modes$2f$OutMode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OutMode"].bounce
                    ],
                    coord: pos.x,
                    maxCoord: container.canvas.size.width,
                    setCb: function(value) {
                        return pos.x += value;
                    },
                    radius: radius
                });
            }, fixVertical = function(outMode) {
                fixOutMode({
                    outMode: outMode,
                    checkModes: [
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Enums$2f$Modes$2f$OutMode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OutMode"].bounce
                    ],
                    coord: pos.y,
                    maxCoord: container.canvas.size.height,
                    setCb: function(value) {
                        return pos.y += value;
                    },
                    radius: radius
                });
            };
            fixHorizontal((_outModes_left = outModes.left) !== null && _outModes_left !== void 0 ? _outModes_left : outModes.default);
            fixHorizontal((_outModes_right = outModes.right) !== null && _outModes_right !== void 0 ? _outModes_right : outModes.default);
            fixVertical((_outModes_top = outModes.top) !== null && _outModes_top !== void 0 ? _outModes_top : outModes.default);
            fixVertical((_outModes_bottom = outModes.bottom) !== null && _outModes_bottom !== void 0 ? _outModes_bottom : outModes.default);
            if (_this1._checkOverlap(pos, tryCount)) {
                return _this1._calcPosition(container, undefined, zIndex, tryCount + __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tryCountIncrement"]);
            }
            return pos;
        };
        this._calculateVelocity = function() {
            var baseVelocity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getParticleBaseVelocity"])(_this.direction), res = baseVelocity.copy(), moveOptions = _this.options.move;
            if (moveOptions.direction === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Enums$2f$Directions$2f$MoveDirection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MoveDirection"].inside || moveOptions.direction === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Enums$2f$Directions$2f$MoveDirection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MoveDirection"].outside) {
                return res;
            }
            var rad = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["degToRad"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRangeValue"])(moveOptions.angle.value)), radOffset = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["degToRad"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRangeValue"])(moveOptions.angle.offset)), range = {
                left: radOffset - rad * __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["half"],
                right: radOffset + rad * __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["half"]
            };
            if (!moveOptions.straight) {
                res.angle += (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["randomInRange"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setRangeValue"])(range.left, range.right));
            }
            if (moveOptions.random && typeof moveOptions.speed === "number") {
                res.length *= (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRandom"])();
            }
            return res;
        };
        this._checkOverlap = function(pos) {
            var tryCount = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultRetryCount"];
            var collisionsOptions = _this1.options.collisions, radius = _this1.getRadius();
            if (!collisionsOptions.enable) {
                return false;
            }
            var overlapOptions = collisionsOptions.overlap;
            if (overlapOptions.enable) {
                return false;
            }
            var retries = overlapOptions.retries;
            if (retries >= __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["minRetries"] && tryCount > retries) {
                throw new Error("".concat(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["errorPrefix"], " particle is overlapping and can't be placed"));
            }
            return !!_this1.container.particles.find(function(particle) {
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDistance"])(pos, particle.position) < radius + particle.getRadius();
            });
        };
        this._getRollColor = function(color) {
            var _this_roll_angle;
            if (!color || !_this.roll || !_this.backColor && !_this.roll.alter) {
                return color;
            }
            var backFactor = _this.roll.horizontal && _this.roll.vertical ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["double"] * __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rollFactor"] : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rollFactor"], backSum = _this.roll.horizontal ? Math.PI * __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["half"] : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["none"], rolled = Math.floor((((_this_roll_angle = _this.roll.angle) !== null && _this_roll_angle !== void 0 ? _this_roll_angle : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["none"]) + backSum) / (Math.PI / backFactor)) % __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["double"];
            if (!rolled) {
                return color;
            }
            if (_this.backColor) {
                return _this.backColor;
            }
            if (_this.roll.alter) {
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$CanvasUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["alterHsl"])(color, _this.roll.alter.type, _this.roll.alter.value);
            }
            return color;
        };
        this._initPosition = function(position) {
            var _this_options_move_center_radius, _this_options_move_center_mode;
            var _$container = _this.container, zIndexValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRangeValue"])(_this.options.zIndex.value);
            _this.position = _this._calcPosition(_$container, position, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clamp"])(zIndexValue, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["minZ"], _$container.zLayers));
            _this.initialPosition = _this.position.copy();
            var canvasSize = _$container.canvas.size;
            _this.moveCenter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$Utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPosition"])(_this.options.move.center, canvasSize)), {
                radius: (_this_options_move_center_radius = _this.options.move.center.radius) !== null && _this_options_move_center_radius !== void 0 ? _this_options_move_center_radius : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultRadius"],
                mode: (_this_options_move_center_mode = _this.options.move.center.mode) !== null && _this_options_move_center_mode !== void 0 ? _this_options_move_center_mode : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Enums$2f$Modes$2f$PixelMode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PixelMode"].percent
            });
            _this.direction = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getParticleDirectionAngle"])(_this.options.move.direction, _this.position, _this.moveCenter);
            switch(_this.options.move.direction){
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Enums$2f$Directions$2f$MoveDirection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MoveDirection"].inside:
                    _this.outType = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Enums$2f$Types$2f$ParticleOutType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ParticleOutType"].inside;
                    break;
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Enums$2f$Directions$2f$MoveDirection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MoveDirection"].outside:
                    _this.outType = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Enums$2f$Types$2f$ParticleOutType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ParticleOutType"].outside;
                    break;
            }
            _this.offset = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Vectors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector"].origin;
        };
        this._engine = engine;
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_create_class$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(Particle, [
        {
            key: "destroy",
            value: function destroy(override) {
                var _shapeDrawer_particleDestroy;
                if (this.unbreakable || this.destroyed) {
                    return;
                }
                this.destroyed = true;
                this.bubble.inRange = false;
                this.slow.inRange = false;
                var container = this.container, pathGenerator = this.pathGenerator, shapeDrawer = container.shapeDrawers.get(this.shape);
                shapeDrawer === null || shapeDrawer === void 0 ? void 0 : (_shapeDrawer_particleDestroy = shapeDrawer.particleDestroy) === null || _shapeDrawer_particleDestroy === void 0 ? void 0 : _shapeDrawer_particleDestroy.call(shapeDrawer, this);
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = container.plugins.values()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var plugin = _step.value;
                        var _plugin_particleDestroyed;
                        (_plugin_particleDestroyed = plugin.particleDestroyed) === null || _plugin_particleDestroyed === void 0 ? void 0 : _plugin_particleDestroyed.call(plugin, this, override);
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally{
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return != null) {
                            _iterator.return();
                        }
                    } finally{
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }
                var _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
                try {
                    for(var _iterator1 = container.particles.updaters[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
                        var updater = _step1.value;
                        var _updater_particleDestroyed;
                        (_updater_particleDestroyed = updater.particleDestroyed) === null || _updater_particleDestroyed === void 0 ? void 0 : _updater_particleDestroyed.call(updater, this, override);
                    }
                } catch (err) {
                    _didIteratorError1 = true;
                    _iteratorError1 = err;
                } finally{
                    try {
                        if (!_iteratorNormalCompletion1 && _iterator1.return != null) {
                            _iterator1.return();
                        }
                    } finally{
                        if (_didIteratorError1) {
                            throw _iteratorError1;
                        }
                    }
                }
                pathGenerator === null || pathGenerator === void 0 ? void 0 : pathGenerator.reset(this);
                this._engine.dispatchEvent(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Enums$2f$Types$2f$EventType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EventType"].particleDestroyed, {
                    container: this.container,
                    data: {
                        particle: this
                    }
                });
            }
        },
        {
            key: "draw",
            value: function draw(delta) {
                var container = this.container, canvas = container.canvas;
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = container.plugins.values()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var plugin = _step.value;
                        canvas.drawParticlePlugin(plugin, this, delta);
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally{
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return != null) {
                            _iterator.return();
                        }
                    } finally{
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }
                canvas.drawParticle(this, delta);
            }
        },
        {
            key: "getFillColor",
            value: function getFillColor() {
                var _this_bubble_color;
                return this._getRollColor((_this_bubble_color = this.bubble.color) !== null && _this_bubble_color !== void 0 ? _this_bubble_color : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$ColorUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getHslFromAnimation"])(this.color));
            }
        },
        {
            key: "getMass",
            value: function getMass() {
                return Math.pow(this.getRadius(), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["squareExp"]) * Math.PI * __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["half"];
            }
        },
        {
            key: "getPosition",
            value: function getPosition() {
                return {
                    x: this.position.x + this.offset.x,
                    y: this.position.y + this.offset.y,
                    z: this.position.z
                };
            }
        },
        {
            key: "getRadius",
            value: function getRadius() {
                var _this_bubble_radius;
                return (_this_bubble_radius = this.bubble.radius) !== null && _this_bubble_radius !== void 0 ? _this_bubble_radius : this.size.value;
            }
        },
        {
            key: "getStrokeColor",
            value: function getStrokeColor() {
                var _this_bubble_color;
                return this._getRollColor((_this_bubble_color = this.bubble.color) !== null && _this_bubble_color !== void 0 ? _this_bubble_color : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$ColorUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getHslFromAnimation"])(this.strokeColor));
            }
        },
        {
            key: "init",
            value: function init(id, position, overrideOptions, group) {
                var _ref, _ref1, _ref2, _ref3;
                var _effectDrawer_particleInit, _shapeDrawer_particleInit;
                var container = this.container, engine = this._engine;
                this.id = id;
                this.group = group;
                this.effectClose = true;
                this.effectFill = true;
                this.shapeClose = true;
                this.shapeFill = true;
                this.pathRotation = false;
                this.lastPathTime = 0;
                this.destroyed = false;
                this.unbreakable = false;
                this.isRotating = false;
                this.rotation = 0;
                this.misplaced = false;
                this.retina = {
                    maxDistance: {}
                };
                this.outType = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Enums$2f$Types$2f$ParticleOutType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ParticleOutType"].normal;
                this.ignoresResizeRatio = true;
                var pxRatio = container.retina.pixelRatio, mainOptions = container.actualOptions, particlesOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$OptionsUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loadParticlesOptions"])(this._engine, container, mainOptions.particles), reduceDuplicates = particlesOptions.reduceDuplicates, effectType = particlesOptions.effect.type, shapeType = particlesOptions.shape.type;
                this.effect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$Utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["itemFromSingleOrMultiple"])(effectType, this.id, reduceDuplicates);
                this.shape = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$Utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["itemFromSingleOrMultiple"])(shapeType, this.id, reduceDuplicates);
                var effectOptions = particlesOptions.effect, shapeOptions = particlesOptions.shape;
                if (overrideOptions) {
                    var _overrideOptions_effect, _overrideOptions_shape;
                    if ((_overrideOptions_effect = overrideOptions.effect) === null || _overrideOptions_effect === void 0 ? void 0 : _overrideOptions_effect.type) {
                        var overrideEffectType = overrideOptions.effect.type, effect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$Utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["itemFromSingleOrMultiple"])(overrideEffectType, this.id, reduceDuplicates);
                        if (effect) {
                            this.effect = effect;
                            effectOptions.load(overrideOptions.effect);
                        }
                    }
                    if ((_overrideOptions_shape = overrideOptions.shape) === null || _overrideOptions_shape === void 0 ? void 0 : _overrideOptions_shape.type) {
                        var overrideShapeType = overrideOptions.shape.type, shape = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$Utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["itemFromSingleOrMultiple"])(overrideShapeType, this.id, reduceDuplicates);
                        if (shape) {
                            this.shape = shape;
                            shapeOptions.load(overrideOptions.shape);
                        }
                    }
                }
                if (this.effect === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["randomColorValue"]) {
                    var availableEffects = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_to_consumable_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this.container.effectDrawers.keys());
                    this.effect = availableEffects[Math.floor((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRandom"])() * availableEffects.length)];
                }
                if (this.shape === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["randomColorValue"]) {
                    var availableShapes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_to_consumable_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this.container.shapeDrawers.keys());
                    this.shape = availableShapes[Math.floor((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRandom"])() * availableShapes.length)];
                }
                this.effectData = loadEffectData(this.effect, effectOptions, this.id, reduceDuplicates);
                this.shapeData = loadShapeData(this.shape, shapeOptions, this.id, reduceDuplicates);
                particlesOptions.load(overrideOptions);
                var effectData = this.effectData;
                if (effectData) {
                    particlesOptions.load(effectData.particles);
                }
                var shapeData = this.shapeData;
                if (shapeData) {
                    particlesOptions.load(shapeData.particles);
                }
                var interactivity = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Options$2f$Classes$2f$Interactivity$2f$Interactivity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Interactivity"](engine, container);
                interactivity.load(container.actualOptions.interactivity);
                interactivity.load(particlesOptions.interactivity);
                this.interactivity = interactivity;
                this.effectFill = (_ref = effectData === null || effectData === void 0 ? void 0 : effectData.fill) !== null && _ref !== void 0 ? _ref : particlesOptions.effect.fill;
                this.effectClose = (_ref1 = effectData === null || effectData === void 0 ? void 0 : effectData.close) !== null && _ref1 !== void 0 ? _ref1 : particlesOptions.effect.close;
                this.shapeFill = (_ref2 = shapeData === null || shapeData === void 0 ? void 0 : shapeData.fill) !== null && _ref2 !== void 0 ? _ref2 : particlesOptions.shape.fill;
                this.shapeClose = (_ref3 = shapeData === null || shapeData === void 0 ? void 0 : shapeData.close) !== null && _ref3 !== void 0 ? _ref3 : particlesOptions.shape.close;
                this.options = particlesOptions;
                var pathOptions = this.options.move.path;
                this.pathDelay = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRangeValue"])(pathOptions.delay.value) * __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["millisecondsToSeconds"];
                if (pathOptions.generator) {
                    this.pathGenerator = this._engine.getPathGenerator(pathOptions.generator);
                    if (this.pathGenerator && container.addPath(pathOptions.generator, this.pathGenerator)) {
                        this.pathGenerator.init(container);
                    }
                }
                container.retina.initParticle(this);
                this.size = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$Utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initParticleNumericAnimationValue"])(this.options.size, pxRatio);
                this.bubble = {
                    inRange: false
                };
                this.slow = {
                    inRange: false,
                    factor: 1
                };
                this._initPosition(position);
                this.initialVelocity = this._calculateVelocity();
                this.velocity = this.initialVelocity.copy();
                this.moveDecay = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["decayOffset"] - (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRangeValue"])(this.options.move.decay);
                var particles = container.particles;
                particles.setLastZIndex(this.position.z);
                this.zIndexFactor = this.position.z / container.zLayers;
                this.sides = 24;
                var effectDrawer = container.effectDrawers.get(this.effect);
                if (!effectDrawer) {
                    effectDrawer = this._engine.getEffectDrawer(this.effect);
                    if (effectDrawer) {
                        container.effectDrawers.set(this.effect, effectDrawer);
                    }
                }
                if (effectDrawer === null || effectDrawer === void 0 ? void 0 : effectDrawer.loadEffect) {
                    effectDrawer.loadEffect(this);
                }
                var shapeDrawer = container.shapeDrawers.get(this.shape);
                if (!shapeDrawer) {
                    shapeDrawer = this._engine.getShapeDrawer(this.shape);
                    if (shapeDrawer) {
                        container.shapeDrawers.set(this.shape, shapeDrawer);
                    }
                }
                if (shapeDrawer === null || shapeDrawer === void 0 ? void 0 : shapeDrawer.loadShape) {
                    shapeDrawer.loadShape(this);
                }
                var sideCountFunc = shapeDrawer === null || shapeDrawer === void 0 ? void 0 : shapeDrawer.getSidesCount;
                if (sideCountFunc) {
                    this.sides = sideCountFunc(this);
                }
                this.spawning = false;
                this.shadowColor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$ColorUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rangeColorToRgb"])(this._engine, this.options.shadow.color);
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = particles.updaters[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var updater = _step.value;
                        updater.init(this);
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally{
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return != null) {
                            _iterator.return();
                        }
                    } finally{
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }
                var _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
                try {
                    for(var _iterator1 = particles.movers[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
                        var mover = _step1.value;
                        var _mover_init;
                        (_mover_init = mover.init) === null || _mover_init === void 0 ? void 0 : _mover_init.call(mover, this);
                    }
                } catch (err) {
                    _didIteratorError1 = true;
                    _iteratorError1 = err;
                } finally{
                    try {
                        if (!_iteratorNormalCompletion1 && _iterator1.return != null) {
                            _iterator1.return();
                        }
                    } finally{
                        if (_didIteratorError1) {
                            throw _iteratorError1;
                        }
                    }
                }
                effectDrawer === null || effectDrawer === void 0 ? void 0 : (_effectDrawer_particleInit = effectDrawer.particleInit) === null || _effectDrawer_particleInit === void 0 ? void 0 : _effectDrawer_particleInit.call(effectDrawer, container, this);
                shapeDrawer === null || shapeDrawer === void 0 ? void 0 : (_shapeDrawer_particleInit = shapeDrawer.particleInit) === null || _shapeDrawer_particleInit === void 0 ? void 0 : _shapeDrawer_particleInit.call(shapeDrawer, container, this);
                var _iteratorNormalCompletion2 = true, _didIteratorError2 = false, _iteratorError2 = undefined;
                try {
                    for(var _iterator2 = container.plugins.values()[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true){
                        var plugin = _step2.value;
                        var _plugin_particleCreated;
                        (_plugin_particleCreated = plugin.particleCreated) === null || _plugin_particleCreated === void 0 ? void 0 : _plugin_particleCreated.call(plugin, this);
                    }
                } catch (err) {
                    _didIteratorError2 = true;
                    _iteratorError2 = err;
                } finally{
                    try {
                        if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
                            _iterator2.return();
                        }
                    } finally{
                        if (_didIteratorError2) {
                            throw _iteratorError2;
                        }
                    }
                }
            }
        },
        {
            key: "isInsideCanvas",
            value: function isInsideCanvas() {
                var radius = this.getRadius(), canvasSize = this.container.canvas.size, position = this.position;
                return position.x >= -radius && position.y >= -radius && position.y <= canvasSize.height + radius && position.x <= canvasSize.width + radius;
            }
        },
        {
            key: "isVisible",
            value: function isVisible() {
                return !this.destroyed && !this.spawning && this.isInsideCanvas();
            }
        },
        {
            key: "reset",
            value: function reset() {
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = this.container.particles.updaters[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var updater = _step.value;
                        var _updater_reset;
                        (_updater_reset = updater.reset) === null || _updater_reset === void 0 ? void 0 : _updater_reset.call(updater, this);
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally{
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return != null) {
                            _iterator.return();
                        }
                    } finally{
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }
            }
        }
    ]);
    return Particle;
}();
}),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Core/Utils/Point.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Point",
    ()=>Point
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_call_check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_class_call_check.js [app-client] (ecmascript)");
;
var Point = function Point(position, particle) {
    "use strict";
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_call_check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, Point);
    this.position = position;
    this.particle = particle;
};
}),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Types/RangeType.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RangeType",
    ()=>RangeType
]);
var RangeType;
(function(RangeType) {
    RangeType["circle"] = "circle";
    RangeType["rectangle"] = "rectangle";
})(RangeType || (RangeType = {}));
}),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Core/Utils/Ranges.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BaseRange",
    ()=>BaseRange,
    "Circle",
    ()=>Circle,
    "Rectangle",
    ()=>Rectangle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_call_super$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_call_super.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_call_check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_class_call_check.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_create_class$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_create_class.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_inherits$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_inherits.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_instanceof$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_instanceof.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Types$2f$RangeType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Types/RangeType.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Utils/NumberUtils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Core/Utils/Constants.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
var BaseRange = function BaseRange(x, y, type) {
    "use strict";
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_call_check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, BaseRange);
    this.position = {
        x: x,
        y: y
    };
    this.type = type;
};
var Circle = /*#__PURE__*/ function(BaseRange) {
    "use strict";
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_inherits$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(Circle, BaseRange);
    function Circle(x, y, radius) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_call_check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, Circle);
        var _this;
        _this = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_call_super$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, Circle, [
            x,
            y,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Types$2f$RangeType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RangeType"].circle
        ]);
        _this.radius = radius;
        return _this;
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_create_class$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(Circle, [
        {
            key: "contains",
            value: function contains(point) {
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDistance"])(point, this.position) <= this.radius;
            }
        },
        {
            key: "intersects",
            value: function intersects(range) {
                var pos1 = this.position, pos2 = range.position, distPos = {
                    x: Math.abs(pos2.x - pos1.x),
                    y: Math.abs(pos2.y - pos1.y)
                }, r = this.radius;
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_instanceof$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(range, Circle) || range.type === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Types$2f$RangeType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RangeType"].circle) {
                    var circleRange = range, rSum = r + circleRange.radius, dist = Math.sqrt(Math.pow(distPos.x, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["squareExp"]) + Math.pow(distPos.y, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["squareExp"]));
                    return rSum > dist;
                } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_instanceof$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(range, Rectangle) || range.type === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Types$2f$RangeType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RangeType"].rectangle) {
                    var rectRange = range, _rectRange_size = rectRange.size, width = _rectRange_size.width, height = _rectRange_size.height, edges = Math.pow(distPos.x - width, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["squareExp"]) + Math.pow(distPos.y - height, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["squareExp"]);
                    return edges <= Math.pow(r, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["squareExp"]) || distPos.x <= r + width && distPos.y <= r + height || distPos.x <= width || distPos.y <= height;
                }
                return false;
            }
        }
    ]);
    return Circle;
}(BaseRange);
var Rectangle = /*#__PURE__*/ function(BaseRange) {
    "use strict";
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_inherits$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(Rectangle, BaseRange);
    function Rectangle(x, y, width, height) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_call_check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, Rectangle);
        var _this;
        _this = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_call_super$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, Rectangle, [
            x,
            y,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Types$2f$RangeType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RangeType"].rectangle
        ]);
        _this.size = {
            height: height,
            width: width
        };
        return _this;
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_create_class$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(Rectangle, [
        {
            key: "contains",
            value: function contains(point) {
                var w = this.size.width, h = this.size.height, pos = this.position;
                return point.x >= pos.x && point.x <= pos.x + w && point.y >= pos.y && point.y <= pos.y + h;
            }
        },
        {
            key: "intersects",
            value: function intersects(range) {
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_instanceof$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(range, Circle)) {
                    return range.intersects(this);
                }
                var w = this.size.width, h = this.size.height, pos1 = this.position, pos2 = range.position, size2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_instanceof$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(range, Rectangle) ? range.size : {
                    width: 0,
                    height: 0
                }, w2 = size2.width, h2 = size2.height;
                return pos2.x < pos1.x + w && pos2.x + w2 > pos1.x && pos2.y < pos1.y + h && pos2.y + h2 > pos1.y;
            }
        }
    ]);
    return Rectangle;
}(BaseRange);
}),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Core/Utils/QuadTree.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "QuadTree",
    ()=>QuadTree
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_call_check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_class_call_check.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_create_class$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_create_class.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_to_consumable_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_to_consumable_array.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Ranges$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Core/Utils/Ranges.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Core/Utils/Constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Utils/NumberUtils.js [app-client] (ecmascript)");
;
;
;
;
;
;
var QuadTree = /*#__PURE__*/ function() {
    "use strict";
    function QuadTree(rectangle, capacity) {
        var _this = this;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_call_check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, QuadTree);
        this.rectangle = rectangle;
        this.capacity = capacity;
        this._subdivide = function() {
            var _this_rectangle_position = _this.rectangle.position, x = _this_rectangle_position.x, y = _this_rectangle_position.y, _this_rectangle_size = _this.rectangle.size, width = _this_rectangle_size.width, height = _this_rectangle_size.height, _$capacity = _this.capacity;
            for(var i = 0; i < __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["subdivideCount"]; i++){
                var fixedIndex = i % __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["double"];
                _this._subs.push(new QuadTree(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Ranges$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Rectangle"](x + width * __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["half"] * fixedIndex, y + height * __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["half"] * (Math.round(i * __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["half"]) - fixedIndex), width * __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["half"], height * __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["half"]), _$capacity));
            }
            _this._divided = true;
        };
        this._points = [];
        this._divided = false;
        this._subs = [];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_create_class$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(QuadTree, [
        {
            key: "insert",
            value: function insert(point) {
                if (!this.rectangle.contains(point.position)) {
                    return false;
                }
                if (this._points.length < this.capacity) {
                    this._points.push(point);
                    return true;
                }
                if (!this._divided) {
                    this._subdivide();
                }
                return this._subs.some(function(sub) {
                    return sub.insert(point);
                });
            }
        },
        {
            key: "query",
            value: function query(range, check) {
                var res = [];
                if (!range.intersects(this.rectangle)) {
                    return [];
                }
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = this._points[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var p = _step.value;
                        if (!range.contains(p.position) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDistance"])(range.position, p.position) > p.particle.getRadius() && (!check || check(p.particle))) {
                            continue;
                        }
                        res.push(p.particle);
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally{
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return != null) {
                            _iterator.return();
                        }
                    } finally{
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }
                if (this._divided) {
                    var _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
                    try {
                        for(var _iterator1 = this._subs[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
                            var sub = _step1.value;
                            var _res;
                            (_res = res).push.apply(_res, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_to_consumable_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(sub.query(range, check)));
                        }
                    } catch (err) {
                        _didIteratorError1 = true;
                        _iteratorError1 = err;
                    } finally{
                        try {
                            if (!_iteratorNormalCompletion1 && _iterator1.return != null) {
                                _iterator1.return();
                            }
                        } finally{
                            if (_didIteratorError1) {
                                throw _iteratorError1;
                            }
                        }
                    }
                }
                return res;
            }
        },
        {
            key: "queryCircle",
            value: function queryCircle(position, radius, check) {
                return this.query(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Ranges$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Circle"](position.x, position.y, radius), check);
            }
        },
        {
            key: "queryRectangle",
            value: function queryRectangle(position, size, check) {
                return this.query(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Ranges$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Rectangle"](position.x, position.y, size.width, size.height), check);
            }
        }
    ]);
    return QuadTree;
}();
}),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Core/Particles.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Particles",
    ()=>Particles
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_async_to_generator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_async_to_generator.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_call_check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_class_call_check.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_create_class$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_create_class.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_to_consumable_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_to_consumable_array.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$8$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$_generator__as__$5f3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/tslib@2.8.1/node_modules/tslib/tslib.es6.mjs [app-client] (ecmascript) <export __generator as _>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Core/Utils/Constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$Utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Utils/Utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Enums$2f$Types$2f$EventType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Enums/Types/EventType.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$InteractionManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Core/Utils/InteractionManager.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Enums$2f$Modes$2f$LimitMode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Enums/Modes/LimitMode.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Particle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Core/Particle.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Point$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Core/Utils/Point.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$QuadTree$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Core/Utils/QuadTree.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Ranges$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Core/Utils/Ranges.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
;
var qTreeRectangle = function(canvasSize) {
    var height = canvasSize.height, width = canvasSize.width;
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Ranges$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Rectangle"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["posOffset"] * width, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["posOffset"] * height, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sizeFactor"] * width, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sizeFactor"] * height);
};
var Particles = /*#__PURE__*/ function() {
    "use strict";
    function Particles(engine, container) {
        var _this = this;
        var _this1 = this;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_call_check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, Particles);
        this._addToPool = function() {
            for(var _len = arguments.length, particles = new Array(_len), _key = 0; _key < _len; _key++){
                particles[_key] = arguments[_key];
            }
            var _this__pool;
            (_this__pool = _this1._pool).push.apply(_this__pool, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_to_consumable_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(particles));
        };
        this._applyDensity = function(options, manualCount, group, groupOptions) {
            var _options_number_density;
            var numberOptions = options.number;
            if (!((_options_number_density = options.number.density) === null || _options_number_density === void 0 ? void 0 : _options_number_density.enable)) {
                var _ref;
                var _groupOptions_number_limit;
                if (group === undefined) {
                    _this._limit = numberOptions.limit.value;
                } else if ((_ref = groupOptions === null || groupOptions === void 0 ? void 0 : (_groupOptions_number_limit = groupOptions.number.limit) === null || _groupOptions_number_limit === void 0 ? void 0 : _groupOptions_number_limit.value) !== null && _ref !== void 0 ? _ref : numberOptions.limit.value) {
                    var _ref1;
                    var _groupOptions_number_limit1;
                    _this._groupLimits.set(group, (_ref1 = groupOptions === null || groupOptions === void 0 ? void 0 : (_groupOptions_number_limit1 = groupOptions.number.limit) === null || _groupOptions_number_limit1 === void 0 ? void 0 : _groupOptions_number_limit1.value) !== null && _ref1 !== void 0 ? _ref1 : numberOptions.limit.value);
                }
                return;
            }
            var densityFactor = _this._initDensityFactor(numberOptions.density), optParticlesNumber = numberOptions.value, optParticlesLimit = numberOptions.limit.value > __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["minLimit"] ? numberOptions.limit.value : optParticlesNumber, particlesNumber = Math.min(optParticlesNumber, optParticlesLimit) * densityFactor + manualCount, particlesCount = Math.min(_this.count, _this.filter(function(t) {
                return t.group === group;
            }).length);
            if (group === undefined) {
                _this._limit = numberOptions.limit.value * densityFactor;
            } else {
                _this._groupLimits.set(group, numberOptions.limit.value * densityFactor);
            }
            if (particlesCount < particlesNumber) {
                _this.push(Math.abs(particlesNumber - particlesCount), undefined, options, group);
            } else if (particlesCount > particlesNumber) {
                _this.removeQuantity(particlesCount - particlesNumber, group);
            }
        };
        this._initDensityFactor = function(densityOptions) {
            var _$container = _this._container;
            if (!_$container.canvas.element || !densityOptions.enable) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultDensityFactor"];
            }
            var canvas = _$container.canvas.element, pxRatio = _$container.retina.pixelRatio;
            return canvas.width * canvas.height / (densityOptions.height * densityOptions.width * Math.pow(pxRatio, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["squareExp"]));
        };
        this._pushParticle = function(position, overrideOptions, group, initializer) {
            try {
                var particle = _this._pool.pop();
                if (!particle) {
                    particle = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Particle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Particle"](_this._engine, _this._container);
                }
                particle.init(_this._nextId, position, overrideOptions, group);
                var canAdd = true;
                if (initializer) {
                    canAdd = initializer(particle);
                }
                if (!canAdd) {
                    return;
                }
                _this._array.push(particle);
                _this._zArray.push(particle);
                _this._nextId++;
                _this._engine.dispatchEvent(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Enums$2f$Types$2f$EventType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EventType"].particleAdded, {
                    container: _this._container,
                    data: {
                        particle: particle
                    }
                });
                return particle;
            } catch (e) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$Utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLogger"])().warning("".concat(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["errorPrefix"], " adding particle: ").concat(e));
            }
        };
        this._removeParticle = function(index, group, override) {
            var particle = _this._array[index];
            if (!particle || particle.group !== group) {
                return false;
            }
            var zIdx = _this._zArray.indexOf(particle);
            _this._array.splice(index, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deleteCount"]);
            _this._zArray.splice(zIdx, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deleteCount"]);
            particle.destroy(override);
            _this._engine.dispatchEvent(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Enums$2f$Types$2f$EventType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EventType"].particleRemoved, {
                container: _this._container,
                data: {
                    particle: particle
                }
            });
            _this._addToPool(particle);
            return true;
        };
        this._engine = engine;
        this._container = container;
        this._nextId = 0;
        this._array = [];
        this._zArray = [];
        this._pool = [];
        this._limit = 0;
        this._groupLimits = new Map();
        this._needsSort = false;
        this._lastZIndex = 0;
        this._interactionManager = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$InteractionManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InteractionManager"](engine, container);
        this._pluginsInitialized = false;
        var canvasSize = container.canvas.size;
        this.quadTree = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$QuadTree$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["QuadTree"](qTreeRectangle(canvasSize), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["qTreeCapacity"]);
        this.movers = [];
        this.updaters = [];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_create_class$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(Particles, [
        {
            key: "count",
            get: function get() {
                return this._array.length;
            }
        },
        {
            key: "addManualParticles",
            value: function addManualParticles() {
                var _this = this;
                var container = this._container, options = container.actualOptions;
                options.manualParticles.forEach(function(p) {
                    return _this.addParticle(p.position ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$Utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPosition"])(p.position, container.canvas.size) : undefined, p.options);
                });
            }
        },
        {
            key: "addParticle",
            value: function addParticle(position, overrideOptions, group, initializer) {
                var _this__groupLimits_get;
                var limitMode = this._container.actualOptions.particles.number.limit.mode, limit = group === undefined ? this._limit : (_this__groupLimits_get = this._groupLimits.get(group)) !== null && _this__groupLimits_get !== void 0 ? _this__groupLimits_get : this._limit, currentCount = this.count;
                if (limit > __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["minLimit"]) {
                    switch(limitMode){
                        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Enums$2f$Modes$2f$LimitMode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LimitMode"].delete:
                            {
                                var countToRemove = currentCount + __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["countOffset"] - limit;
                                if (countToRemove > __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["minCount"]) {
                                    this.removeQuantity(countToRemove);
                                }
                                break;
                            }
                        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Enums$2f$Modes$2f$LimitMode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LimitMode"].wait:
                            if (currentCount >= limit) {
                                return;
                            }
                            break;
                    }
                }
                return this._pushParticle(position, overrideOptions, group, initializer);
            }
        },
        {
            key: "clear",
            value: function clear() {
                this._array = [];
                this._zArray = [];
                this._pluginsInitialized = false;
            }
        },
        {
            key: "destroy",
            value: function destroy() {
                this._array = [];
                this._zArray = [];
                this.movers = [];
                this.updaters = [];
            }
        },
        {
            key: "draw",
            value: function draw(delta) {
                var container = this._container, canvas = container.canvas;
                canvas.clear();
                this.update(delta);
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = container.plugins.values()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var plugin = _step.value;
                        canvas.drawPlugin(plugin, delta);
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally{
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return != null) {
                            _iterator.return();
                        }
                    } finally{
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }
                var _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
                try {
                    for(var _iterator1 = this._zArray[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
                        var p = _step1.value;
                        p.draw(delta);
                    }
                } catch (err) {
                    _didIteratorError1 = true;
                    _iteratorError1 = err;
                } finally{
                    try {
                        if (!_iteratorNormalCompletion1 && _iterator1.return != null) {
                            _iterator1.return();
                        }
                    } finally{
                        if (_didIteratorError1) {
                            throw _iteratorError1;
                        }
                    }
                }
            }
        },
        {
            key: "filter",
            value: function filter(condition) {
                return this._array.filter(condition);
            }
        },
        {
            key: "find",
            value: function find(condition) {
                return this._array.find(condition);
            }
        },
        {
            key: "get",
            value: function get(index) {
                return this._array[index];
            }
        },
        {
            key: "handleClickMode",
            value: function handleClickMode(mode) {
                this._interactionManager.handleClickMode(mode);
            }
        },
        {
            key: "init",
            value: function init() {
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_async_to_generator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(function() {
                    var container, options, handled, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, plugin, _ref, _plugin_particlesInitialization, particlesOptions, groups, group, _groupOptions_number, groupOptions, i, j, i1;
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$8$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$_generator__as__$5f3e$__["_"])(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                container = this._container, options = container.actualOptions;
                                this._lastZIndex = 0;
                                this._needsSort = false;
                                return [
                                    4,
                                    this.initPlugins()
                                ];
                            case 1:
                                _state.sent();
                                handled = false;
                                _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                                try {
                                    for(_iterator = container.plugins.values()[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                                        plugin = _step.value;
                                        ;
                                        ;
                                        handled = (_ref = (_plugin_particlesInitialization = plugin.particlesInitialization) === null || _plugin_particlesInitialization === void 0 ? void 0 : _plugin_particlesInitialization.call(plugin)) !== null && _ref !== void 0 ? _ref : handled;
                                        if (handled) {
                                            break;
                                        }
                                    }
                                } catch (err) {
                                    _didIteratorError = true;
                                    _iteratorError = err;
                                } finally{
                                    try {
                                        if (!_iteratorNormalCompletion && _iterator.return != null) {
                                            _iterator.return();
                                        }
                                    } finally{
                                        if (_didIteratorError) {
                                            throw _iteratorError;
                                        }
                                    }
                                }
                                this.addManualParticles();
                                if (!handled) {
                                    particlesOptions = options.particles, groups = particlesOptions.groups;
                                    for(var group in groups){
                                        ;
                                        groupOptions = groups[group];
                                        for(i = this.count, j = 0; j < ((_groupOptions_number = groupOptions.number) === null || _groupOptions_number === void 0 ? void 0 : _groupOptions_number.value) && i < particlesOptions.number.value; i++, j++){
                                            this.addParticle(undefined, groupOptions, group);
                                        }
                                    }
                                    for(i1 = this.count; i1 < particlesOptions.number.value; i1++){
                                        this.addParticle();
                                    }
                                }
                                return [
                                    2
                                ];
                        }
                    });
                }).call(this);
            }
        },
        {
            key: "initPlugins",
            value: function initPlugins() {
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_async_to_generator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(function() {
                    var container, _, _1, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, pathGenerator;
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$8$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$_generator__as__$5f3e$__["_"])(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                if (this._pluginsInitialized) {
                                    return [
                                        2
                                    ];
                                }
                                container = this._container;
                                _ = this;
                                return [
                                    4,
                                    this._engine.getMovers(container, true)
                                ];
                            case 1:
                                _.movers = _state.sent();
                                _1 = this;
                                return [
                                    4,
                                    this._engine.getUpdaters(container, true)
                                ];
                            case 2:
                                _1.updaters = _state.sent();
                                return [
                                    4,
                                    this._interactionManager.init()
                                ];
                            case 3:
                                _state.sent();
                                _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                                try {
                                    for(_iterator = container.pathGenerators.values()[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                                        pathGenerator = _step.value;
                                        pathGenerator.init(container);
                                    }
                                } catch (err) {
                                    _didIteratorError = true;
                                    _iteratorError = err;
                                } finally{
                                    try {
                                        if (!_iteratorNormalCompletion && _iterator.return != null) {
                                            _iterator.return();
                                        }
                                    } finally{
                                        if (_didIteratorError) {
                                            throw _iteratorError;
                                        }
                                    }
                                }
                                return [
                                    2
                                ];
                        }
                    });
                }).call(this);
            }
        },
        {
            key: "push",
            value: function push(nb, mouse, overrideOptions, group) {
                for(var i = 0; i < nb; i++){
                    this.addParticle(mouse === null || mouse === void 0 ? void 0 : mouse.position, overrideOptions, group);
                }
            }
        },
        {
            key: "redraw",
            value: function redraw() {
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_async_to_generator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(function() {
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$8$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$_generator__as__$5f3e$__["_"])(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                this.clear();
                                return [
                                    4,
                                    this.init()
                                ];
                            case 1:
                                _state.sent();
                                this.draw({
                                    value: 0,
                                    factor: 0
                                });
                                return [
                                    2
                                ];
                        }
                    });
                }).call(this);
            }
        },
        {
            key: "remove",
            value: function remove(particle, group, override) {
                this.removeAt(this._array.indexOf(particle), undefined, group, override);
            }
        },
        {
            key: "removeAt",
            value: function removeAt(index) {
                var quantity = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultRemoveQuantity"], group = arguments.length > 2 ? arguments[2] : void 0, override = arguments.length > 3 ? arguments[3] : void 0;
                if (index < __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["minIndex"] || index > this.count) {
                    return;
                }
                var deleted = 0;
                for(var i = index; deleted < quantity && i < this.count; i++){
                    if (this._removeParticle(i, group, override)) {
                        i--;
                        deleted++;
                    }
                }
            }
        },
        {
            key: "removeQuantity",
            value: function removeQuantity(quantity, group) {
                this.removeAt(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["minIndex"], quantity, group);
            }
        },
        {
            key: "setDensity",
            value: function setDensity() {
                var options = this._container.actualOptions, groups = options.particles.groups, manualCount = options.manualParticles.length;
                for(var group in groups){
                    this._applyDensity(groups[group], manualCount, group);
                }
                this._applyDensity(options.particles, manualCount);
            }
        },
        {
            key: "setLastZIndex",
            value: function setLastZIndex(zIndex) {
                this._lastZIndex = zIndex;
                this._needsSort = this._needsSort || this._lastZIndex < zIndex;
            }
        },
        {
            key: "setResizeFactor",
            value: function setResizeFactor(factor) {
                this._resizeFactor = factor;
            }
        },
        {
            key: "update",
            value: function update(delta) {
                var container = this._container, particlesToDelete = new Set();
                this.quadTree = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$QuadTree$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["QuadTree"](qTreeRectangle(container.canvas.size), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["qTreeCapacity"]);
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = container.pathGenerators.values()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var pathGenerator = _step.value;
                        pathGenerator.update();
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally{
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return != null) {
                            _iterator.return();
                        }
                    } finally{
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }
                var _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
                try {
                    for(var _iterator1 = container.plugins.values()[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
                        var plugin = _step1.value;
                        var _plugin_update;
                        (_plugin_update = plugin.update) === null || _plugin_update === void 0 ? void 0 : _plugin_update.call(plugin, delta);
                    }
                } catch (err) {
                    _didIteratorError1 = true;
                    _iteratorError1 = err;
                } finally{
                    try {
                        if (!_iteratorNormalCompletion1 && _iterator1.return != null) {
                            _iterator1.return();
                        }
                    } finally{
                        if (_didIteratorError1) {
                            throw _iteratorError1;
                        }
                    }
                }
                var resizeFactor = this._resizeFactor;
                var _iteratorNormalCompletion2 = true, _didIteratorError2 = false, _iteratorError2 = undefined;
                try {
                    for(var _iterator2 = this._array[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true){
                        var particle = _step2.value;
                        if (resizeFactor && !particle.ignoresResizeRatio) {
                            particle.position.x *= resizeFactor.width;
                            particle.position.y *= resizeFactor.height;
                            particle.initialPosition.x *= resizeFactor.width;
                            particle.initialPosition.y *= resizeFactor.height;
                        }
                        particle.ignoresResizeRatio = false;
                        this._interactionManager.reset(particle);
                        var _iteratorNormalCompletion3 = true, _didIteratorError3 = false, _iteratorError3 = undefined;
                        try {
                            for(var _iterator3 = this._container.plugins.values()[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true){
                                var plugin1 = _step3.value;
                                var _plugin_particleUpdate;
                                if (particle.destroyed) {
                                    break;
                                }
                                (_plugin_particleUpdate = plugin1.particleUpdate) === null || _plugin_particleUpdate === void 0 ? void 0 : _plugin_particleUpdate.call(plugin1, particle, delta);
                            }
                        } catch (err) {
                            _didIteratorError3 = true;
                            _iteratorError3 = err;
                        } finally{
                            try {
                                if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
                                    _iterator3.return();
                                }
                            } finally{
                                if (_didIteratorError3) {
                                    throw _iteratorError3;
                                }
                            }
                        }
                        var _iteratorNormalCompletion4 = true, _didIteratorError4 = false, _iteratorError4 = undefined;
                        try {
                            for(var _iterator4 = this.movers[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true){
                                var mover = _step4.value;
                                if (mover.isEnabled(particle)) {
                                    mover.move(particle, delta);
                                }
                            }
                        } catch (err) {
                            _didIteratorError4 = true;
                            _iteratorError4 = err;
                        } finally{
                            try {
                                if (!_iteratorNormalCompletion4 && _iterator4.return != null) {
                                    _iterator4.return();
                                }
                            } finally{
                                if (_didIteratorError4) {
                                    throw _iteratorError4;
                                }
                            }
                        }
                        if (particle.destroyed) {
                            particlesToDelete.add(particle);
                            continue;
                        }
                        this.quadTree.insert(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Point$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Point"](particle.getPosition(), particle));
                    }
                } catch (err) {
                    _didIteratorError2 = true;
                    _iteratorError2 = err;
                } finally{
                    try {
                        if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
                            _iterator2.return();
                        }
                    } finally{
                        if (_didIteratorError2) {
                            throw _iteratorError2;
                        }
                    }
                }
                if (particlesToDelete.size) {
                    var checkDelete = function(p) {
                        return !particlesToDelete.has(p);
                    };
                    this._array = this.filter(checkDelete);
                    this._zArray = this._zArray.filter(checkDelete);
                    var _iteratorNormalCompletion5 = true, _didIteratorError5 = false, _iteratorError5 = undefined;
                    try {
                        for(var _iterator5 = particlesToDelete[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true){
                            var particle1 = _step5.value;
                            this._engine.dispatchEvent(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Enums$2f$Types$2f$EventType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EventType"].particleRemoved, {
                                container: this._container,
                                data: {
                                    particle: particle1
                                }
                            });
                        }
                    } catch (err) {
                        _didIteratorError5 = true;
                        _iteratorError5 = err;
                    } finally{
                        try {
                            if (!_iteratorNormalCompletion5 && _iterator5.return != null) {
                                _iterator5.return();
                            }
                        } finally{
                            if (_didIteratorError5) {
                                throw _iteratorError5;
                            }
                        }
                    }
                    this._addToPool.apply(this, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_to_consumable_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(particlesToDelete));
                }
                this._interactionManager.externalInteract(delta);
                var _iteratorNormalCompletion6 = true, _didIteratorError6 = false, _iteratorError6 = undefined;
                try {
                    for(var _iterator6 = this._array[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true){
                        var particle2 = _step6.value;
                        var _iteratorNormalCompletion7 = true, _didIteratorError7 = false, _iteratorError7 = undefined;
                        try {
                            for(var _iterator7 = this.updaters[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true){
                                var updater = _step7.value;
                                updater.update(particle2, delta);
                            }
                        } catch (err) {
                            _didIteratorError7 = true;
                            _iteratorError7 = err;
                        } finally{
                            try {
                                if (!_iteratorNormalCompletion7 && _iterator7.return != null) {
                                    _iterator7.return();
                                }
                            } finally{
                                if (_didIteratorError7) {
                                    throw _iteratorError7;
                                }
                            }
                        }
                        if (!particle2.destroyed && !particle2.spawning) {
                            this._interactionManager.particlesInteract(particle2, delta);
                        }
                    }
                } catch (err) {
                    _didIteratorError6 = true;
                    _iteratorError6 = err;
                } finally{
                    try {
                        if (!_iteratorNormalCompletion6 && _iterator6.return != null) {
                            _iterator6.return();
                        }
                    } finally{
                        if (_didIteratorError6) {
                            throw _iteratorError6;
                        }
                    }
                }
                delete this._resizeFactor;
                if (this._needsSort) {
                    var zArray = this._zArray;
                    zArray.sort(function(a, b) {
                        return b.position.z - a.position.z || a.id - b.id;
                    });
                    this._lastZIndex = zArray[zArray.length - __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lengthOffset"]].position.z;
                    this._needsSort = false;
                }
            }
        }
    ]);
    return Particles;
}();
}),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Core/Retina.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Retina",
    ()=>Retina
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_call_check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_class_call_check.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_create_class$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_create_class.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Core/Utils/Constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Utils/NumberUtils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$Utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Utils/Utils.js [app-client] (ecmascript)");
;
;
;
;
;
var Retina = /*#__PURE__*/ function() {
    "use strict";
    function Retina(container) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_call_check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, Retina);
        this.container = container;
        this.pixelRatio = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultRatio"];
        this.reduceFactor = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultReduceFactor"];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_create_class$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(Retina, [
        {
            key: "init",
            value: function init() {
                var container = this.container, options = container.actualOptions;
                this.pixelRatio = !options.detectRetina || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$Utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isSsr"])() ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultRatio"] : devicePixelRatio;
                this.reduceFactor = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultReduceFactor"];
                var ratio = this.pixelRatio, canvas = container.canvas;
                if (canvas.element) {
                    var element = canvas.element;
                    canvas.size.width = element.offsetWidth * ratio;
                    canvas.size.height = element.offsetHeight * ratio;
                }
                var particles = options.particles, moveOptions = particles.move;
                this.maxSpeed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRangeValue"])(moveOptions.gravity.maxSpeed) * ratio;
                this.sizeAnimationSpeed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRangeValue"])(particles.size.animation.speed) * ratio;
            }
        },
        {
            key: "initParticle",
            value: function initParticle(particle) {
                var options = particle.options, ratio = this.pixelRatio, moveOptions = options.move, moveDistance = moveOptions.distance, props = particle.retina;
                props.moveDrift = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRangeValue"])(moveOptions.drift) * ratio;
                props.moveSpeed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRangeValue"])(moveOptions.speed) * ratio;
                props.sizeAnimationSpeed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRangeValue"])(options.size.animation.speed) * ratio;
                var maxDistance = props.maxDistance;
                maxDistance.horizontal = moveDistance.horizontal !== undefined ? moveDistance.horizontal * ratio : undefined;
                maxDistance.vertical = moveDistance.vertical !== undefined ? moveDistance.vertical * ratio : undefined;
                props.maxSpeed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRangeValue"])(moveOptions.gravity.maxSpeed) * ratio;
            }
        }
    ]);
    return Retina;
}();
}),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Core/Container.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Container",
    ()=>Container
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_async_to_generator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_async_to_generator.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_call_check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_class_call_check.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_create_class$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_create_class.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_instanceof$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_instanceof.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_sliced_to_array.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_to_consumable_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_to_consumable_array.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$8$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$_generator__as__$5f3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/tslib@2.8.1/node_modules/tslib/tslib.es6.mjs [app-client] (ecmascript) <export __generator as _>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Utils/NumberUtils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Core/Utils/Constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$Utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Utils/Utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Canvas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Core/Canvas.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$EventListeners$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Core/Utils/EventListeners.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Enums$2f$Types$2f$EventType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Enums/Types/EventType.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Options$2f$Classes$2f$Options$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Options/Classes/Options.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Particles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Core/Particles.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Retina$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Core/Retina.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$OptionsUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Utils/OptionsUtils.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
function guardCheck(container) {
    return container && !container.destroyed;
}
function initDelta(value) {
    var fpsLimit = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultFps"], smooth = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
    return {
        value: value,
        factor: smooth ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultFps"] / fpsLimit : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultFps"] * value / __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["millisecondsToSeconds"]
    };
}
function loadContainerOptions(engine, container) {
    for(var _len = arguments.length, sourceOptionsArr = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++){
        sourceOptionsArr[_key - 2] = arguments[_key];
    }
    var options = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Options$2f$Classes$2f$Options$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Options"](engine, container);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$OptionsUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loadOptions"].apply(void 0, [
        options
    ].concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_to_consumable_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(sourceOptionsArr)));
    return options;
}
var Container = /*#__PURE__*/ function() {
    "use strict";
    function Container(engine, id, sourceOptions) {
        var _this = this;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_call_check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, Container);
        this._intersectionManager = function(entries) {
            if (!guardCheck(_this) || !_this.actualOptions.pauseOnOutsideViewport) {
                return;
            }
            var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
            try {
                for(var _iterator = entries[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                    var entry = _step.value;
                    if (entry.target !== _this.interactivity.element) {
                        continue;
                    }
                    if (entry.isIntersecting) {
                        void _this.play();
                    } else {
                        _this.pause();
                    }
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally{
                try {
                    if (!_iteratorNormalCompletion && _iterator.return != null) {
                        _iterator.return();
                    }
                } finally{
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }
        };
        this._nextFrame = function(timestamp) {
            try {
                var _this__lastFrameTime;
                if (!_this._smooth && _this._lastFrameTime !== undefined && timestamp < _this._lastFrameTime + __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["millisecondsToSeconds"] / _this.fpsLimit) {
                    _this.draw(false);
                    return;
                }
                (_this__lastFrameTime = _this._lastFrameTime) !== null && _this__lastFrameTime !== void 0 ? _this__lastFrameTime : _this._lastFrameTime = timestamp;
                var delta = initDelta(timestamp - _this._lastFrameTime, _this.fpsLimit, _this._smooth);
                _this.addLifeTime(delta.value);
                _this._lastFrameTime = timestamp;
                if (delta.value > __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["millisecondsToSeconds"]) {
                    _this.draw(false);
                    return;
                }
                _this.particles.draw(delta);
                if (!_this.alive()) {
                    _this.destroy();
                    return;
                }
                if (_this.animationStatus) {
                    _this.draw(false);
                }
            } catch (e) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$Utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLogger"])().error("".concat(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["errorPrefix"], " in animation loop"), e);
            }
        };
        this._engine = engine;
        this.id = Symbol(id);
        this.fpsLimit = 120;
        this._smooth = false;
        this._delay = 0;
        this._duration = 0;
        this._lifeTime = 0;
        this._firstStart = true;
        this.started = false;
        this.destroyed = false;
        this._paused = true;
        this._lastFrameTime = 0;
        this.zLayers = 100;
        this.pageHidden = false;
        this._clickHandlers = new Map();
        this._sourceOptions = sourceOptions;
        this._initialSourceOptions = sourceOptions;
        this.retina = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Retina$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Retina"](this);
        this.canvas = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Canvas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Canvas"](this, this._engine);
        this.particles = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Particles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Particles"](this._engine, this);
        this.pathGenerators = new Map();
        this.interactivity = {
            mouse: {
                clicking: false,
                inside: false
            }
        };
        this.plugins = new Map();
        this.effectDrawers = new Map();
        this.shapeDrawers = new Map();
        this._options = loadContainerOptions(this._engine, this);
        this.actualOptions = loadContainerOptions(this._engine, this);
        this._eventListeners = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$EventListeners$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EventListeners"](this);
        this._intersectionObserver = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$Utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["safeIntersectionObserver"])(function(entries) {
            return _this._intersectionManager(entries);
        });
        this._engine.dispatchEvent(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Enums$2f$Types$2f$EventType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EventType"].containerBuilt, {
            container: this
        });
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_create_class$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(Container, [
        {
            key: "animationStatus",
            get: function get() {
                return !this._paused && !this.pageHidden && guardCheck(this);
            }
        },
        {
            key: "options",
            get: function get() {
                return this._options;
            }
        },
        {
            key: "sourceOptions",
            get: function get() {
                return this._sourceOptions;
            }
        },
        {
            key: "addClickHandler",
            value: function addClickHandler(callback) {
                var _this = this;
                if (!guardCheck(this)) {
                    return;
                }
                var el = this.interactivity.element;
                if (!el) {
                    return;
                }
                var clickOrTouchHandler = function(e, pos, radius) {
                    if (!guardCheck(_this)) {
                        return;
                    }
                    var pxRatio = _this.retina.pixelRatio, posRetina = {
                        x: pos.x * pxRatio,
                        y: pos.y * pxRatio
                    }, particles = _this.particles.quadTree.queryCircle(posRetina, radius * pxRatio);
                    callback(e, particles);
                }, clickHandler = function(e) {
                    if (!guardCheck(_this)) {
                        return;
                    }
                    var mouseEvent = e, pos = {
                        x: mouseEvent.offsetX || mouseEvent.clientX,
                        y: mouseEvent.offsetY || mouseEvent.clientY
                    };
                    clickOrTouchHandler(e, pos, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clickRadius"]);
                }, touchStartHandler = function() {
                    if (!guardCheck(_this)) {
                        return;
                    }
                    touched = true;
                    touchMoved = false;
                }, touchMoveHandler = function() {
                    if (!guardCheck(_this)) {
                        return;
                    }
                    touchMoved = true;
                }, touchEndHandler = function(e) {
                    if (!guardCheck(_this)) {
                        return;
                    }
                    if (touched && !touchMoved) {
                        var touchEvent = e;
                        var lastTouch = touchEvent.touches[touchEvent.touches.length - __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["touchEndLengthOffset"]];
                        if (!lastTouch) {
                            lastTouch = touchEvent.changedTouches[touchEvent.changedTouches.length - __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["touchEndLengthOffset"]];
                            if (!lastTouch) {
                                return;
                            }
                        }
                        var element = _this.canvas.element, canvasRect = element ? element.getBoundingClientRect() : undefined, pos = {
                            x: lastTouch.clientX - (canvasRect ? canvasRect.left : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["minCoordinate"]),
                            y: lastTouch.clientY - (canvasRect ? canvasRect.top : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["minCoordinate"])
                        };
                        clickOrTouchHandler(e, pos, Math.max(lastTouch.radiusX, lastTouch.radiusY));
                    }
                    touched = false;
                    touchMoved = false;
                }, touchCancelHandler = function() {
                    if (!guardCheck(_this)) {
                        return;
                    }
                    touched = false;
                    touchMoved = false;
                };
                var touched = false, touchMoved = false;
                this._clickHandlers.set("click", clickHandler);
                this._clickHandlers.set("touchstart", touchStartHandler);
                this._clickHandlers.set("touchmove", touchMoveHandler);
                this._clickHandlers.set("touchend", touchEndHandler);
                this._clickHandlers.set("touchcancel", touchCancelHandler);
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = this._clickHandlers[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var _step_value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(_step.value, 2), key = _step_value[0], handler = _step_value[1];
                        el.addEventListener(key, handler);
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally{
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return != null) {
                            _iterator.return();
                        }
                    } finally{
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }
            }
        },
        {
            key: "addLifeTime",
            value: function addLifeTime(value) {
                this._lifeTime += value;
            }
        },
        {
            key: "addPath",
            value: function addPath(key, generator) {
                var override = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
                if (!guardCheck(this) || !override && this.pathGenerators.has(key)) {
                    return false;
                }
                this.pathGenerators.set(key, generator);
                return true;
            }
        },
        {
            key: "alive",
            value: function alive() {
                return !this._duration || this._lifeTime <= this._duration;
            }
        },
        {
            key: "clearClickHandlers",
            value: function clearClickHandlers() {
                if (!guardCheck(this)) {
                    return;
                }
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = this._clickHandlers[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var _step_value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(_step.value, 2), key = _step_value[0], handler = _step_value[1];
                        var _this_interactivity_element;
                        (_this_interactivity_element = this.interactivity.element) === null || _this_interactivity_element === void 0 ? void 0 : _this_interactivity_element.removeEventListener(key, handler);
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally{
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return != null) {
                            _iterator.return();
                        }
                    } finally{
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }
                this._clickHandlers.clear();
            }
        },
        {
            key: "destroy",
            value: function destroy() {
                var _this = this;
                var remove = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
                if (!guardCheck(this)) {
                    return;
                }
                this.stop();
                this.clearClickHandlers();
                this.particles.destroy();
                this.canvas.destroy();
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = this.effectDrawers.values()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var effectDrawer = _step.value;
                        var _effectDrawer_destroy;
                        (_effectDrawer_destroy = effectDrawer.destroy) === null || _effectDrawer_destroy === void 0 ? void 0 : _effectDrawer_destroy.call(effectDrawer, this);
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally{
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return != null) {
                            _iterator.return();
                        }
                    } finally{
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }
                var _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
                try {
                    for(var _iterator1 = this.shapeDrawers.values()[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
                        var shapeDrawer = _step1.value;
                        var _shapeDrawer_destroy;
                        (_shapeDrawer_destroy = shapeDrawer.destroy) === null || _shapeDrawer_destroy === void 0 ? void 0 : _shapeDrawer_destroy.call(shapeDrawer, this);
                    }
                } catch (err) {
                    _didIteratorError1 = true;
                    _iteratorError1 = err;
                } finally{
                    try {
                        if (!_iteratorNormalCompletion1 && _iterator1.return != null) {
                            _iterator1.return();
                        }
                    } finally{
                        if (_didIteratorError1) {
                            throw _iteratorError1;
                        }
                    }
                }
                var _iteratorNormalCompletion2 = true, _didIteratorError2 = false, _iteratorError2 = undefined;
                try {
                    for(var _iterator2 = this.effectDrawers.keys()[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true){
                        var key = _step2.value;
                        this.effectDrawers.delete(key);
                    }
                } catch (err) {
                    _didIteratorError2 = true;
                    _iteratorError2 = err;
                } finally{
                    try {
                        if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
                            _iterator2.return();
                        }
                    } finally{
                        if (_didIteratorError2) {
                            throw _iteratorError2;
                        }
                    }
                }
                var _iteratorNormalCompletion3 = true, _didIteratorError3 = false, _iteratorError3 = undefined;
                try {
                    for(var _iterator3 = this.shapeDrawers.keys()[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true){
                        var key1 = _step3.value;
                        this.shapeDrawers.delete(key1);
                    }
                } catch (err) {
                    _didIteratorError3 = true;
                    _iteratorError3 = err;
                } finally{
                    try {
                        if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
                            _iterator3.return();
                        }
                    } finally{
                        if (_didIteratorError3) {
                            throw _iteratorError3;
                        }
                    }
                }
                this._engine.clearPlugins(this);
                this.destroyed = true;
                if (remove) {
                    var mainArr = this._engine.items, idx = mainArr.findIndex(function(t) {
                        return t === _this;
                    });
                    if (idx >= __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["removeMinIndex"]) {
                        mainArr.splice(idx, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["removeDeleteCount"]);
                    }
                }
                this._engine.dispatchEvent(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Enums$2f$Types$2f$EventType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EventType"].containerDestroyed, {
                    container: this
                });
            }
        },
        {
            key: "draw",
            value: function draw(force) {
                var _this = this;
                if (!guardCheck(this)) {
                    return;
                }
                var refreshTime = force;
                var frame = function(timestamp) {
                    if (refreshTime) {
                        _this._lastFrameTime = undefined;
                        refreshTime = false;
                    }
                    _this._nextFrame(timestamp);
                };
                this._drawAnimationFrame = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["animate"])(function(timestamp) {
                    return frame(timestamp);
                });
            }
        },
        {
            key: "export",
            value: function _export(_0) {
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_async_to_generator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(function(type) {
                    var options, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, plugin, res, err;
                    var _arguments = arguments;
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$8$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$_generator__as__$5f3e$__["_"])(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                options = _arguments.length > 1 && _arguments[1] !== void 0 ? _arguments[1] : {};
                                _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                                _state.label = 1;
                            case 1:
                                _state.trys.push([
                                    1,
                                    6,
                                    7,
                                    8
                                ]);
                                _iterator = this.plugins.values()[Symbol.iterator]();
                                _state.label = 2;
                            case 2:
                                if (!!(_iteratorNormalCompletion = (_step = _iterator.next()).done)) return [
                                    3,
                                    5
                                ];
                                plugin = _step.value;
                                if (!plugin.export) {
                                    return [
                                        3,
                                        4
                                    ];
                                }
                                return [
                                    4,
                                    plugin.export(type, options)
                                ];
                            case 3:
                                res = _state.sent();
                                if (!res.supported) {
                                    return [
                                        3,
                                        4
                                    ];
                                }
                                return [
                                    2,
                                    res.blob
                                ];
                            case 4:
                                _iteratorNormalCompletion = true;
                                return [
                                    3,
                                    2
                                ];
                            case 5:
                                return [
                                    3,
                                    8
                                ];
                            case 6:
                                err = _state.sent();
                                _didIteratorError = true;
                                _iteratorError = err;
                                return [
                                    3,
                                    8
                                ];
                            case 7:
                                try {
                                    if (!_iteratorNormalCompletion && _iterator.return != null) {
                                        _iterator.return();
                                    }
                                } finally{
                                    if (_didIteratorError) {
                                        throw _iteratorError;
                                    }
                                }
                                return [
                                    7
                                ];
                            case 8:
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$Utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLogger"])().error("".concat(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["errorPrefix"], " - Export plugin with type ").concat(type, " not found"));
                                return [
                                    2
                                ];
                        }
                    });
                }).apply(this, arguments);
            }
        },
        {
            key: "handleClickMode",
            value: function handleClickMode(mode) {
                if (!guardCheck(this)) {
                    return;
                }
                this.particles.handleClickMode(mode);
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = this.plugins.values()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var plugin = _step.value;
                        var _plugin_handleClickMode;
                        (_plugin_handleClickMode = plugin.handleClickMode) === null || _plugin_handleClickMode === void 0 ? void 0 : _plugin_handleClickMode.call(plugin, mode);
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally{
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return != null) {
                            _iterator.return();
                        }
                    } finally{
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }
            }
        },
        {
            key: "init",
            value: function init() {
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_async_to_generator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(function() {
                    var effects, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, type, drawer, shapes, _iteratorNormalCompletion1, _didIteratorError1, _iteratorError1, _iterator1, _step1, type1, drawer1, availablePlugins, _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, _step_value, id, plugin, _this_actualOptions, zLayers, duration, delay, fpsLimit, smooth, _iteratorNormalCompletion3, _didIteratorError3, _iteratorError3, _iterator3, _step3, drawer2, _drawer_init, err, _iteratorNormalCompletion4, _didIteratorError4, _iteratorError4, _iterator4, _step4, drawer3, _drawer_init1, err, _iteratorNormalCompletion5, _didIteratorError5, _iteratorError5, _iterator5, _step5, plugin1, _plugin_init, err, _iteratorNormalCompletion6, _didIteratorError6, _iteratorError6, _iterator6, _step6, plugin2, _plugin_particlesSetup;
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$8$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$_generator__as__$5f3e$__["_"])(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                if (!guardCheck(this)) {
                                    return [
                                        2
                                    ];
                                }
                                effects = this._engine.getSupportedEffects();
                                _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                                try {
                                    for(_iterator = effects[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                                        type = _step.value;
                                        drawer = this._engine.getEffectDrawer(type);
                                        if (drawer) {
                                            this.effectDrawers.set(type, drawer);
                                        }
                                    }
                                } catch (err) {
                                    _didIteratorError = true;
                                    _iteratorError = err;
                                } finally{
                                    try {
                                        if (!_iteratorNormalCompletion && _iterator.return != null) {
                                            _iterator.return();
                                        }
                                    } finally{
                                        if (_didIteratorError) {
                                            throw _iteratorError;
                                        }
                                    }
                                }
                                shapes = this._engine.getSupportedShapes();
                                _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
                                try {
                                    for(_iterator1 = shapes[Symbol.iterator](); !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
                                        type1 = _step1.value;
                                        drawer1 = this._engine.getShapeDrawer(type1);
                                        if (drawer1) {
                                            this.shapeDrawers.set(type1, drawer1);
                                        }
                                    }
                                } catch (err) {
                                    _didIteratorError1 = true;
                                    _iteratorError1 = err;
                                } finally{
                                    try {
                                        if (!_iteratorNormalCompletion1 && _iterator1.return != null) {
                                            _iterator1.return();
                                        }
                                    } finally{
                                        if (_didIteratorError1) {
                                            throw _iteratorError1;
                                        }
                                    }
                                }
                                return [
                                    4,
                                    this.particles.initPlugins()
                                ];
                            case 1:
                                _state.sent();
                                this._options = loadContainerOptions(this._engine, this, this._initialSourceOptions, this.sourceOptions);
                                this.actualOptions = loadContainerOptions(this._engine, this, this._options);
                                return [
                                    4,
                                    this._engine.getAvailablePlugins(this)
                                ];
                            case 2:
                                availablePlugins = _state.sent();
                                _iteratorNormalCompletion2 = true, _didIteratorError2 = false, _iteratorError2 = undefined;
                                try {
                                    for(_iterator2 = availablePlugins[Symbol.iterator](); !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true){
                                        _step_value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(_step2.value, 2), id = _step_value[0], plugin = _step_value[1];
                                        this.plugins.set(id, plugin);
                                    }
                                } catch (err) {
                                    _didIteratorError2 = true;
                                    _iteratorError2 = err;
                                } finally{
                                    try {
                                        if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
                                            _iterator2.return();
                                        }
                                    } finally{
                                        if (_didIteratorError2) {
                                            throw _iteratorError2;
                                        }
                                    }
                                }
                                this.retina.init();
                                return [
                                    4,
                                    this.canvas.init()
                                ];
                            case 3:
                                _state.sent();
                                this.updateActualOptions();
                                this.canvas.initBackground();
                                this.canvas.resize();
                                _this_actualOptions = this.actualOptions, zLayers = _this_actualOptions.zLayers, duration = _this_actualOptions.duration, delay = _this_actualOptions.delay, fpsLimit = _this_actualOptions.fpsLimit, smooth = _this_actualOptions.smooth;
                                this.zLayers = zLayers;
                                this._duration = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRangeValue"])(duration) * __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["millisecondsToSeconds"];
                                this._delay = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRangeValue"])(delay) * __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["millisecondsToSeconds"];
                                this._lifeTime = 0;
                                this.fpsLimit = fpsLimit > __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["minFpsLimit"] ? fpsLimit : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultFpsLimit"];
                                this._smooth = smooth;
                                _iteratorNormalCompletion3 = true, _didIteratorError3 = false, _iteratorError3 = undefined;
                                _state.label = 4;
                            case 4:
                                _state.trys.push([
                                    4,
                                    9,
                                    10,
                                    11
                                ]);
                                _iterator3 = this.effectDrawers.values()[Symbol.iterator]();
                                _state.label = 5;
                            case 5:
                                if (!!(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done)) return [
                                    3,
                                    8
                                ];
                                drawer2 = _step3.value;
                                return [
                                    4,
                                    (_drawer_init = drawer2.init) === null || _drawer_init === void 0 ? void 0 : _drawer_init.call(drawer2, this)
                                ];
                            case 6:
                                _state.sent();
                                _state.label = 7;
                            case 7:
                                _iteratorNormalCompletion3 = true;
                                return [
                                    3,
                                    5
                                ];
                            case 8:
                                return [
                                    3,
                                    11
                                ];
                            case 9:
                                err = _state.sent();
                                _didIteratorError3 = true;
                                _iteratorError3 = err;
                                return [
                                    3,
                                    11
                                ];
                            case 10:
                                try {
                                    if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
                                        _iterator3.return();
                                    }
                                } finally{
                                    if (_didIteratorError3) {
                                        throw _iteratorError3;
                                    }
                                }
                                return [
                                    7
                                ];
                            case 11:
                                _iteratorNormalCompletion4 = true, _didIteratorError4 = false, _iteratorError4 = undefined;
                                _state.label = 12;
                            case 12:
                                _state.trys.push([
                                    12,
                                    17,
                                    18,
                                    19
                                ]);
                                _iterator4 = this.shapeDrawers.values()[Symbol.iterator]();
                                _state.label = 13;
                            case 13:
                                if (!!(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done)) return [
                                    3,
                                    16
                                ];
                                drawer3 = _step4.value;
                                return [
                                    4,
                                    (_drawer_init1 = drawer3.init) === null || _drawer_init1 === void 0 ? void 0 : _drawer_init1.call(drawer3, this)
                                ];
                            case 14:
                                _state.sent();
                                _state.label = 15;
                            case 15:
                                _iteratorNormalCompletion4 = true;
                                return [
                                    3,
                                    13
                                ];
                            case 16:
                                return [
                                    3,
                                    19
                                ];
                            case 17:
                                err = _state.sent();
                                _didIteratorError4 = true;
                                _iteratorError4 = err;
                                return [
                                    3,
                                    19
                                ];
                            case 18:
                                try {
                                    if (!_iteratorNormalCompletion4 && _iterator4.return != null) {
                                        _iterator4.return();
                                    }
                                } finally{
                                    if (_didIteratorError4) {
                                        throw _iteratorError4;
                                    }
                                }
                                return [
                                    7
                                ];
                            case 19:
                                _iteratorNormalCompletion5 = true, _didIteratorError5 = false, _iteratorError5 = undefined;
                                _state.label = 20;
                            case 20:
                                _state.trys.push([
                                    20,
                                    25,
                                    26,
                                    27
                                ]);
                                _iterator5 = this.plugins.values()[Symbol.iterator]();
                                _state.label = 21;
                            case 21:
                                if (!!(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done)) return [
                                    3,
                                    24
                                ];
                                plugin1 = _step5.value;
                                return [
                                    4,
                                    (_plugin_init = plugin1.init) === null || _plugin_init === void 0 ? void 0 : _plugin_init.call(plugin1)
                                ];
                            case 22:
                                _state.sent();
                                _state.label = 23;
                            case 23:
                                _iteratorNormalCompletion5 = true;
                                return [
                                    3,
                                    21
                                ];
                            case 24:
                                return [
                                    3,
                                    27
                                ];
                            case 25:
                                err = _state.sent();
                                _didIteratorError5 = true;
                                _iteratorError5 = err;
                                return [
                                    3,
                                    27
                                ];
                            case 26:
                                try {
                                    if (!_iteratorNormalCompletion5 && _iterator5.return != null) {
                                        _iterator5.return();
                                    }
                                } finally{
                                    if (_didIteratorError5) {
                                        throw _iteratorError5;
                                    }
                                }
                                return [
                                    7
                                ];
                            case 27:
                                this._engine.dispatchEvent(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Enums$2f$Types$2f$EventType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EventType"].containerInit, {
                                    container: this
                                });
                                return [
                                    4,
                                    this.particles.init()
                                ];
                            case 28:
                                _state.sent();
                                this.particles.setDensity();
                                _iteratorNormalCompletion6 = true, _didIteratorError6 = false, _iteratorError6 = undefined;
                                try {
                                    for(_iterator6 = this.plugins.values()[Symbol.iterator](); !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true){
                                        plugin2 = _step6.value;
                                        ;
                                        (_plugin_particlesSetup = plugin2.particlesSetup) === null || _plugin_particlesSetup === void 0 ? void 0 : _plugin_particlesSetup.call(plugin2);
                                    }
                                } catch (err) {
                                    _didIteratorError6 = true;
                                    _iteratorError6 = err;
                                } finally{
                                    try {
                                        if (!_iteratorNormalCompletion6 && _iterator6.return != null) {
                                            _iterator6.return();
                                        }
                                    } finally{
                                        if (_didIteratorError6) {
                                            throw _iteratorError6;
                                        }
                                    }
                                }
                                this._engine.dispatchEvent(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Enums$2f$Types$2f$EventType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EventType"].particlesSetup, {
                                    container: this
                                });
                                return [
                                    2
                                ];
                        }
                    });
                }).call(this);
            }
        },
        {
            key: "loadTheme",
            value: function loadTheme(name) {
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_async_to_generator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(function() {
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$8$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$_generator__as__$5f3e$__["_"])(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                if (!guardCheck(this)) {
                                    return [
                                        2
                                    ];
                                }
                                this._currentTheme = name;
                                return [
                                    4,
                                    this.refresh()
                                ];
                            case 1:
                                _state.sent();
                                return [
                                    2
                                ];
                        }
                    });
                }).call(this);
            }
        },
        {
            key: "pause",
            value: function pause() {
                if (!guardCheck(this)) {
                    return;
                }
                if (this._drawAnimationFrame !== undefined) {
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cancelAnimation"])(this._drawAnimationFrame);
                    delete this._drawAnimationFrame;
                }
                if (this._paused) {
                    return;
                }
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = this.plugins.values()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var plugin = _step.value;
                        var _plugin_pause;
                        (_plugin_pause = plugin.pause) === null || _plugin_pause === void 0 ? void 0 : _plugin_pause.call(plugin);
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally{
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return != null) {
                            _iterator.return();
                        }
                    } finally{
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }
                if (!this.pageHidden) {
                    this._paused = true;
                }
                this._engine.dispatchEvent(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Enums$2f$Types$2f$EventType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EventType"].containerPaused, {
                    container: this
                });
            }
        },
        {
            key: "play",
            value: function play(force) {
                if (!guardCheck(this)) {
                    return;
                }
                var needsUpdate = this._paused || force;
                if (this._firstStart && !this.actualOptions.autoPlay) {
                    this._firstStart = false;
                    return;
                }
                if (this._paused) {
                    this._paused = false;
                }
                if (needsUpdate) {
                    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                    try {
                        for(var _iterator = this.plugins.values()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                            var plugin = _step.value;
                            if (plugin.play) {
                                plugin.play();
                            }
                        }
                    } catch (err) {
                        _didIteratorError = true;
                        _iteratorError = err;
                    } finally{
                        try {
                            if (!_iteratorNormalCompletion && _iterator.return != null) {
                                _iterator.return();
                            }
                        } finally{
                            if (_didIteratorError) {
                                throw _iteratorError;
                            }
                        }
                    }
                }
                this._engine.dispatchEvent(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Enums$2f$Types$2f$EventType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EventType"].containerPlay, {
                    container: this
                });
                this.draw(needsUpdate !== null && needsUpdate !== void 0 ? needsUpdate : false);
            }
        },
        {
            key: "refresh",
            value: function refresh() {
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_async_to_generator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(function() {
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$8$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$_generator__as__$5f3e$__["_"])(this, function(_state) {
                        if (!guardCheck(this)) {
                            return [
                                2
                            ];
                        }
                        this.stop();
                        return [
                            2,
                            this.start()
                        ];
                    });
                }).call(this);
            }
        },
        {
            key: "reset",
            value: function reset(sourceOptions) {
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_async_to_generator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(function() {
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$8$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$_generator__as__$5f3e$__["_"])(this, function(_state) {
                        if (!guardCheck(this)) {
                            return [
                                2
                            ];
                        }
                        this._initialSourceOptions = sourceOptions;
                        this._sourceOptions = sourceOptions;
                        this._options = loadContainerOptions(this._engine, this, this._initialSourceOptions, this.sourceOptions);
                        this.actualOptions = loadContainerOptions(this._engine, this, this._options);
                        return [
                            2,
                            this.refresh()
                        ];
                    });
                }).call(this);
            }
        },
        {
            key: "start",
            value: function start() {
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_async_to_generator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(function() {
                    var _this;
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$8$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$_generator__as__$5f3e$__["_"])(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                _this = this;
                                if (!guardCheck(this) || this.started) {
                                    return [
                                        2
                                    ];
                                }
                                return [
                                    4,
                                    this.init()
                                ];
                            case 1:
                                _state.sent();
                                this.started = true;
                                return [
                                    4,
                                    new Promise(function(resolve) {
                                        var start = function() {
                                            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_async_to_generator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(function() {
                                                var _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, plugin, _plugin_start, err;
                                                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$8$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$_generator__as__$5f3e$__["_"])(this, function(_state) {
                                                    switch(_state.label){
                                                        case 0:
                                                            this._eventListeners.addListeners();
                                                            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_instanceof$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this.interactivity.element, HTMLElement) && this._intersectionObserver) {
                                                                this._intersectionObserver.observe(this.interactivity.element);
                                                            }
                                                            _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                                                            _state.label = 1;
                                                        case 1:
                                                            _state.trys.push([
                                                                1,
                                                                6,
                                                                7,
                                                                8
                                                            ]);
                                                            _iterator = this.plugins.values()[Symbol.iterator]();
                                                            _state.label = 2;
                                                        case 2:
                                                            if (!!(_iteratorNormalCompletion = (_step = _iterator.next()).done)) return [
                                                                3,
                                                                5
                                                            ];
                                                            plugin = _step.value;
                                                            return [
                                                                4,
                                                                (_plugin_start = plugin.start) === null || _plugin_start === void 0 ? void 0 : _plugin_start.call(plugin)
                                                            ];
                                                        case 3:
                                                            _state.sent();
                                                            _state.label = 4;
                                                        case 4:
                                                            _iteratorNormalCompletion = true;
                                                            return [
                                                                3,
                                                                2
                                                            ];
                                                        case 5:
                                                            return [
                                                                3,
                                                                8
                                                            ];
                                                        case 6:
                                                            err = _state.sent();
                                                            _didIteratorError = true;
                                                            _iteratorError = err;
                                                            return [
                                                                3,
                                                                8
                                                            ];
                                                        case 7:
                                                            try {
                                                                if (!_iteratorNormalCompletion && _iterator.return != null) {
                                                                    _iterator.return();
                                                                }
                                                            } finally{
                                                                if (_didIteratorError) {
                                                                    throw _iteratorError;
                                                                }
                                                            }
                                                            return [
                                                                7
                                                            ];
                                                        case 8:
                                                            this._engine.dispatchEvent(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Enums$2f$Types$2f$EventType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EventType"].containerStarted, {
                                                                container: this
                                                            });
                                                            this.play();
                                                            resolve();
                                                            return [
                                                                2
                                                            ];
                                                    }
                                                });
                                            }).call(_this);
                                        };
                                        _this._delayTimeout = setTimeout(function() {
                                            return void start();
                                        }, _this._delay);
                                    })
                                ];
                            case 2:
                                _state.sent();
                                return [
                                    2
                                ];
                        }
                    });
                }).call(this);
            }
        },
        {
            key: "stop",
            value: function stop() {
                if (!guardCheck(this) || !this.started) {
                    return;
                }
                if (this._delayTimeout) {
                    clearTimeout(this._delayTimeout);
                    delete this._delayTimeout;
                }
                this._firstStart = true;
                this.started = false;
                this._eventListeners.removeListeners();
                this.pause();
                this.particles.clear();
                this.canvas.stop();
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_instanceof$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this.interactivity.element, HTMLElement) && this._intersectionObserver) {
                    this._intersectionObserver.unobserve(this.interactivity.element);
                }
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = this.plugins.values()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var plugin = _step.value;
                        var _plugin_stop;
                        (_plugin_stop = plugin.stop) === null || _plugin_stop === void 0 ? void 0 : _plugin_stop.call(plugin);
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally{
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return != null) {
                            _iterator.return();
                        }
                    } finally{
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }
                var _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
                try {
                    for(var _iterator1 = this.plugins.keys()[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
                        var key = _step1.value;
                        this.plugins.delete(key);
                    }
                } catch (err) {
                    _didIteratorError1 = true;
                    _iteratorError1 = err;
                } finally{
                    try {
                        if (!_iteratorNormalCompletion1 && _iterator1.return != null) {
                            _iterator1.return();
                        }
                    } finally{
                        if (_didIteratorError1) {
                            throw _iteratorError1;
                        }
                    }
                }
                this._sourceOptions = this._options;
                this._engine.dispatchEvent(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Enums$2f$Types$2f$EventType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EventType"].containerStopped, {
                    container: this
                });
            }
        },
        {
            key: "updateActualOptions",
            value: function updateActualOptions() {
                this.actualOptions.responsive = [];
                var newMaxWidth = this.actualOptions.setResponsive(this.canvas.size.width, this.retina.pixelRatio, this._options);
                this.actualOptions.setTheme(this._currentTheme);
                if (this._responsiveMaxWidth === newMaxWidth) {
                    return false;
                }
                this._responsiveMaxWidth = newMaxWidth;
                return true;
            }
        }
    ]);
    return Container;
}();
}),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Utils/EventDispatcher.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EventDispatcher",
    ()=>EventDispatcher
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_call_check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_class_call_check.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_create_class$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_create_class.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Core/Utils/Constants.js [app-client] (ecmascript)");
;
;
;
var EventDispatcher = /*#__PURE__*/ function() {
    "use strict";
    function EventDispatcher() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_call_check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, EventDispatcher);
        this._listeners = new Map();
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_create_class$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(EventDispatcher, [
        {
            key: "addEventListener",
            value: function addEventListener(type, listener) {
                this.removeEventListener(type, listener);
                var arr = this._listeners.get(type);
                if (!arr) {
                    arr = [];
                    this._listeners.set(type, arr);
                }
                arr.push(listener);
            }
        },
        {
            key: "dispatchEvent",
            value: function dispatchEvent(type, args) {
                var listeners = this._listeners.get(type);
                listeners === null || listeners === void 0 ? void 0 : listeners.forEach(function(handler) {
                    return handler(args);
                });
            }
        },
        {
            key: "hasEventListener",
            value: function hasEventListener(type) {
                return !!this._listeners.get(type);
            }
        },
        {
            key: "removeAllEventListeners",
            value: function removeAllEventListeners(type) {
                if (!type) {
                    this._listeners = new Map();
                } else {
                    this._listeners.delete(type);
                }
            }
        },
        {
            key: "removeEventListener",
            value: function removeEventListener(type, listener) {
                var arr = this._listeners.get(type);
                if (!arr) {
                    return;
                }
                var length = arr.length, idx = arr.indexOf(listener);
                if (idx < __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["minIndex"]) {
                    return;
                }
                if (length === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deleteCount"]) {
                    this._listeners.delete(type);
                } else {
                    arr.splice(idx, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deleteCount"]);
                }
            }
        }
    ]);
    return EventDispatcher;
}();
}),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Core/Engine.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Engine",
    ()=>Engine
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_async_to_generator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_async_to_generator.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_call_check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_class_call_check.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_create_class$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_create_class.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_instanceof$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_instanceof.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_sliced_to_array.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_to_consumable_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_to_consumable_array.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$8$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$_generator__as__$5f3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/tslib@2.8.1/node_modules/tslib/tslib.es6.mjs [app-client] (ecmascript) <export __generator as _>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Core/Utils/Constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$Utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Utils/Utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Container$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Core/Container.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$EventDispatcher$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Utils/EventDispatcher.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Enums$2f$Types$2f$EventType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Enums/Types/EventType.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Utils/NumberUtils.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
function getItemsFromInitializer(container, map, initializers) {
    var force = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : false;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_async_to_generator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(function() {
        var res;
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$8$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$_generator__as__$5f3e$__["_"])(this, function(_state) {
            switch(_state.label){
                case 0:
                    res = map.get(container);
                    if (!(!res || force)) return [
                        3,
                        2
                    ];
                    return [
                        4,
                        Promise.all((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_to_consumable_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(initializers.values()).map(function(t) {
                            return t(container);
                        }))
                    ];
                case 1:
                    res = _state.sent();
                    map.set(container, res);
                    _state.label = 2;
                case 2:
                    return [
                        2,
                        res
                    ];
            }
        });
    })();
}
function getDataFromUrl(data) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_async_to_generator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(function() {
        var url, response;
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$8$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$_generator__as__$5f3e$__["_"])(this, function(_state) {
            switch(_state.label){
                case 0:
                    url = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$Utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["itemFromSingleOrMultiple"])(data.url, data.index);
                    if (!url) {
                        return [
                            2,
                            data.fallback
                        ];
                    }
                    return [
                        4,
                        fetch(url)
                    ];
                case 1:
                    response = _state.sent();
                    if (!response.ok) return [
                        3,
                        3
                    ];
                    return [
                        4,
                        response.json()
                    ];
                case 2:
                    return [
                        2,
                        _state.sent()
                    ];
                case 3:
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$Utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLogger"])().error("".concat(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["errorPrefix"], " ").concat(response.status, " while retrieving config file"));
                    return [
                        2,
                        data.fallback
                    ];
            }
        });
    })();
}
var getCanvasFromContainer = function(domContainer) {
    var canvasEl;
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_instanceof$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(domContainer, HTMLCanvasElement) || domContainer.tagName.toLowerCase() === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["canvasTag"]) {
        canvasEl = domContainer;
        if (!canvasEl.dataset[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generatedAttribute"]]) {
            canvasEl.dataset[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generatedAttribute"]] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generatedFalse"];
        }
    } else {
        var existingCanvases = domContainer.getElementsByTagName(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["canvasTag"]);
        if (existingCanvases.length) {
            canvasEl = existingCanvases[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["canvasFirstIndex"]];
            canvasEl.dataset[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generatedAttribute"]] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generatedFalse"];
        } else {
            canvasEl = document.createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["canvasTag"]);
            canvasEl.dataset[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generatedAttribute"]] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generatedTrue"];
            domContainer.appendChild(canvasEl);
        }
    }
    var fullPercent = "100%";
    if (!canvasEl.style.width) {
        canvasEl.style.width = fullPercent;
    }
    if (!canvasEl.style.height) {
        canvasEl.style.height = fullPercent;
    }
    return canvasEl;
}, getDomContainer = function(id, source) {
    var domContainer = source !== null && source !== void 0 ? source : document.getElementById(id);
    if (domContainer) {
        return domContainer;
    }
    domContainer = document.createElement("div");
    domContainer.id = id;
    domContainer.dataset[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generatedAttribute"]] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generatedTrue"];
    document.body.append(domContainer);
    return domContainer;
};
var Engine = /*#__PURE__*/ function() {
    "use strict";
    function Engine() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_call_check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, Engine);
        this._configs = new Map();
        this._domArray = [];
        this._eventDispatcher = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$EventDispatcher$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EventDispatcher"]();
        this._initialized = false;
        this.plugins = [];
        this.colorManagers = new Map();
        this.easingFunctions = new Map();
        this._initializers = {
            interactors: new Map(),
            movers: new Map(),
            updaters: new Map()
        };
        this.interactors = new Map();
        this.movers = new Map();
        this.updaters = new Map();
        this.presets = new Map();
        this.effectDrawers = new Map();
        this.shapeDrawers = new Map();
        this.pathGenerators = new Map();
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_create_class$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(Engine, [
        {
            key: "configs",
            get: function get() {
                var res = {};
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = this._configs[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var _step_value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(_step.value, 2), name = _step_value[0], config = _step_value[1];
                        res[name] = config;
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally{
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return != null) {
                            _iterator.return();
                        }
                    } finally{
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }
                return res;
            }
        },
        {
            key: "items",
            get: function get() {
                return this._domArray;
            }
        },
        {
            key: "version",
            get: function get() {
                return "3.9.1";
            }
        },
        {
            key: "addColorManager",
            value: function addColorManager(manager) {
                var refresh = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_async_to_generator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(function() {
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$8$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$_generator__as__$5f3e$__["_"])(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                this.colorManagers.set(manager.key, manager);
                                return [
                                    4,
                                    this.refresh(refresh)
                                ];
                            case 1:
                                _state.sent();
                                return [
                                    2
                                ];
                        }
                    });
                }).call(this);
            }
        },
        {
            key: "addConfig",
            value: function addConfig(config) {
                var _ref, _config_key;
                var key = (_ref = (_config_key = config.key) !== null && _config_key !== void 0 ? _config_key : config.name) !== null && _ref !== void 0 ? _ref : "default";
                this._configs.set(key, config);
                this._eventDispatcher.dispatchEvent(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Enums$2f$Types$2f$EventType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EventType"].configAdded, {
                    data: {
                        name: key,
                        config: config
                    }
                });
            }
        },
        {
            key: "addEasing",
            value: function addEasing(name, easing) {
                var refresh = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : true;
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_async_to_generator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(function() {
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$8$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$_generator__as__$5f3e$__["_"])(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                if (this.getEasing(name)) {
                                    return [
                                        2
                                    ];
                                }
                                this.easingFunctions.set(name, easing);
                                return [
                                    4,
                                    this.refresh(refresh)
                                ];
                            case 1:
                                _state.sent();
                                return [
                                    2
                                ];
                        }
                    });
                }).call(this);
            }
        },
        {
            key: "addEffect",
            value: function addEffect(effect, drawer) {
                var refresh = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : true;
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_async_to_generator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(function() {
                    var _this;
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$8$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$_generator__as__$5f3e$__["_"])(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                _this = this;
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$Utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["executeOnSingleOrMultiple"])(effect, function(type) {
                                    if (!_this.getEffectDrawer(type)) {
                                        _this.effectDrawers.set(type, drawer);
                                    }
                                });
                                return [
                                    4,
                                    this.refresh(refresh)
                                ];
                            case 1:
                                _state.sent();
                                return [
                                    2
                                ];
                        }
                    });
                }).call(this);
            }
        },
        {
            key: "addEventListener",
            value: function addEventListener(type, listener) {
                this._eventDispatcher.addEventListener(type, listener);
            }
        },
        {
            key: "addInteractor",
            value: function addInteractor(name, interactorInitializer) {
                var refresh = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : true;
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_async_to_generator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(function() {
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$8$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$_generator__as__$5f3e$__["_"])(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                this._initializers.interactors.set(name, interactorInitializer);
                                return [
                                    4,
                                    this.refresh(refresh)
                                ];
                            case 1:
                                _state.sent();
                                return [
                                    2
                                ];
                        }
                    });
                }).call(this);
            }
        },
        {
            key: "addMover",
            value: function addMover(name, moverInitializer) {
                var refresh = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : true;
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_async_to_generator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(function() {
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$8$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$_generator__as__$5f3e$__["_"])(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                this._initializers.movers.set(name, moverInitializer);
                                return [
                                    4,
                                    this.refresh(refresh)
                                ];
                            case 1:
                                _state.sent();
                                return [
                                    2
                                ];
                        }
                    });
                }).call(this);
            }
        },
        {
            key: "addParticleUpdater",
            value: function addParticleUpdater(name, updaterInitializer) {
                var refresh = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : true;
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_async_to_generator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(function() {
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$8$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$_generator__as__$5f3e$__["_"])(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                this._initializers.updaters.set(name, updaterInitializer);
                                return [
                                    4,
                                    this.refresh(refresh)
                                ];
                            case 1:
                                _state.sent();
                                return [
                                    2
                                ];
                        }
                    });
                }).call(this);
            }
        },
        {
            key: "addPathGenerator",
            value: function addPathGenerator(name, generator) {
                var refresh = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : true;
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_async_to_generator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(function() {
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$8$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$_generator__as__$5f3e$__["_"])(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                if (!this.getPathGenerator(name)) {
                                    this.pathGenerators.set(name, generator);
                                }
                                return [
                                    4,
                                    this.refresh(refresh)
                                ];
                            case 1:
                                _state.sent();
                                return [
                                    2
                                ];
                        }
                    });
                }).call(this);
            }
        },
        {
            key: "addPlugin",
            value: function addPlugin(plugin) {
                var refresh = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_async_to_generator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(function() {
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$8$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$_generator__as__$5f3e$__["_"])(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                if (!this.getPlugin(plugin.id)) {
                                    this.plugins.push(plugin);
                                }
                                return [
                                    4,
                                    this.refresh(refresh)
                                ];
                            case 1:
                                _state.sent();
                                return [
                                    2
                                ];
                        }
                    });
                }).call(this);
            }
        },
        {
            key: "addPreset",
            value: function addPreset(preset, options) {
                var override = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false, refresh = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : true;
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_async_to_generator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(function() {
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$8$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$_generator__as__$5f3e$__["_"])(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                if (override || !this.getPreset(preset)) {
                                    this.presets.set(preset, options);
                                }
                                return [
                                    4,
                                    this.refresh(refresh)
                                ];
                            case 1:
                                _state.sent();
                                return [
                                    2
                                ];
                        }
                    });
                }).call(this);
            }
        },
        {
            key: "addShape",
            value: function addShape(drawer) {
                var refresh = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_async_to_generator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(function() {
                    var _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, validType;
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$8$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$_generator__as__$5f3e$__["_"])(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                                try {
                                    for(_iterator = drawer.validTypes[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                                        validType = _step.value;
                                        if (this.getShapeDrawer(validType)) {
                                            continue;
                                        }
                                        this.shapeDrawers.set(validType, drawer);
                                    }
                                } catch (err) {
                                    _didIteratorError = true;
                                    _iteratorError = err;
                                } finally{
                                    try {
                                        if (!_iteratorNormalCompletion && _iterator.return != null) {
                                            _iterator.return();
                                        }
                                    } finally{
                                        if (_didIteratorError) {
                                            throw _iteratorError;
                                        }
                                    }
                                }
                                return [
                                    4,
                                    this.refresh(refresh)
                                ];
                            case 1:
                                _state.sent();
                                return [
                                    2
                                ];
                        }
                    });
                }).call(this);
            }
        },
        {
            key: "checkVersion",
            value: function checkVersion(pluginVersion) {
                if (this.version === pluginVersion) {
                    return;
                }
                throw new Error("The tsParticles version is different from the loaded plugins version. Engine version: ".concat(this.version, ". Plugin version: ").concat(pluginVersion));
            }
        },
        {
            key: "clearPlugins",
            value: function clearPlugins(container) {
                this.updaters.delete(container);
                this.movers.delete(container);
                this.interactors.delete(container);
            }
        },
        {
            key: "dispatchEvent",
            value: function dispatchEvent(type, args) {
                this._eventDispatcher.dispatchEvent(type, args);
            }
        },
        {
            key: "dom",
            value: function dom() {
                return this.items;
            }
        },
        {
            key: "domItem",
            value: function domItem(index) {
                return this.item(index);
            }
        },
        {
            key: "getAvailablePlugins",
            value: function getAvailablePlugins(container) {
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_async_to_generator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(function() {
                    var res, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, plugin, _, _tmp, err;
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$8$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$_generator__as__$5f3e$__["_"])(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                res = new Map();
                                _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                                _state.label = 1;
                            case 1:
                                _state.trys.push([
                                    1,
                                    6,
                                    7,
                                    8
                                ]);
                                _iterator = this.plugins[Symbol.iterator]();
                                _state.label = 2;
                            case 2:
                                if (!!(_iteratorNormalCompletion = (_step = _iterator.next()).done)) return [
                                    3,
                                    5
                                ];
                                plugin = _step.value;
                                if (!plugin.needsPlugin(container.actualOptions)) return [
                                    3,
                                    4
                                ];
                                _ = res.set;
                                _tmp = [
                                    plugin.id
                                ];
                                return [
                                    4,
                                    plugin.getPlugin(container)
                                ];
                            case 3:
                                _.apply(res, _tmp.concat([
                                    _state.sent()
                                ]));
                                _state.label = 4;
                            case 4:
                                _iteratorNormalCompletion = true;
                                return [
                                    3,
                                    2
                                ];
                            case 5:
                                return [
                                    3,
                                    8
                                ];
                            case 6:
                                err = _state.sent();
                                _didIteratorError = true;
                                _iteratorError = err;
                                return [
                                    3,
                                    8
                                ];
                            case 7:
                                try {
                                    if (!_iteratorNormalCompletion && _iterator.return != null) {
                                        _iterator.return();
                                    }
                                } finally{
                                    if (_didIteratorError) {
                                        throw _iteratorError;
                                    }
                                }
                                return [
                                    7
                                ];
                            case 8:
                                return [
                                    2,
                                    res
                                ];
                        }
                    });
                }).call(this);
            }
        },
        {
            key: "getEasing",
            value: function getEasing(name) {
                var _this_easingFunctions_get;
                return (_this_easingFunctions_get = this.easingFunctions.get(name)) !== null && _this_easingFunctions_get !== void 0 ? _this_easingFunctions_get : function(value) {
                    return value;
                };
            }
        },
        {
            key: "getEffectDrawer",
            value: function getEffectDrawer(type) {
                return this.effectDrawers.get(type);
            }
        },
        {
            key: "getInteractors",
            value: function getInteractors(container) {
                var force = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_async_to_generator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(function() {
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$8$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$_generator__as__$5f3e$__["_"])(this, function(_state) {
                        return [
                            2,
                            getItemsFromInitializer(container, this.interactors, this._initializers.interactors, force)
                        ];
                    });
                }).call(this);
            }
        },
        {
            key: "getMovers",
            value: function getMovers(container) {
                var force = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_async_to_generator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(function() {
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$8$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$_generator__as__$5f3e$__["_"])(this, function(_state) {
                        return [
                            2,
                            getItemsFromInitializer(container, this.movers, this._initializers.movers, force)
                        ];
                    });
                }).call(this);
            }
        },
        {
            key: "getPathGenerator",
            value: function getPathGenerator(type) {
                return this.pathGenerators.get(type);
            }
        },
        {
            key: "getPlugin",
            value: function getPlugin(plugin) {
                return this.plugins.find(function(t) {
                    return t.id === plugin;
                });
            }
        },
        {
            key: "getPreset",
            value: function getPreset(preset) {
                return this.presets.get(preset);
            }
        },
        {
            key: "getShapeDrawer",
            value: function getShapeDrawer(type) {
                return this.shapeDrawers.get(type);
            }
        },
        {
            key: "getSupportedEffects",
            value: function getSupportedEffects() {
                return this.effectDrawers.keys();
            }
        },
        {
            key: "getSupportedShapes",
            value: function getSupportedShapes() {
                return this.shapeDrawers.keys();
            }
        },
        {
            key: "getUpdaters",
            value: function getUpdaters(container) {
                var force = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_async_to_generator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(function() {
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$8$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$_generator__as__$5f3e$__["_"])(this, function(_state) {
                        return [
                            2,
                            getItemsFromInitializer(container, this.updaters, this._initializers.updaters, force)
                        ];
                    });
                }).call(this);
            }
        },
        {
            key: "init",
            value: function init() {
                if (this._initialized) {
                    return;
                }
                this._initialized = true;
            }
        },
        {
            key: "item",
            value: function item(index) {
                var items = this.items, item = items[index];
                if (!item || item.destroyed) {
                    items.splice(index, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["removeDeleteCount"]);
                    return;
                }
                return item;
            }
        },
        {
            key: "load",
            value: function load(params) {
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_async_to_generator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(function() {
                    var _ref, _params_id, _params_element, id, index, url, options, currentOptions, items, oldIndex, newItem, _tmp, old, deleteCount, domContainer, canvasEl;
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$8$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$_generator__as__$5f3e$__["_"])(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                id = (_ref = (_params_id = params.id) !== null && _params_id !== void 0 ? _params_id : (_params_element = params.element) === null || _params_element === void 0 ? void 0 : _params_element.id) !== null && _ref !== void 0 ? _ref : "tsparticles".concat(Math.floor((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRandom"])() * __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loadRandomFactor"])), index = params.index, url = params.url;
                                if (!url) return [
                                    3,
                                    2
                                ];
                                return [
                                    4,
                                    getDataFromUrl({
                                        fallback: params.options,
                                        url: url,
                                        index: index
                                    })
                                ];
                            case 1:
                                _tmp = _state.sent();
                                return [
                                    3,
                                    3
                                ];
                            case 2:
                                _tmp = params.options;
                                _state.label = 3;
                            case 3:
                                options = _tmp, currentOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$Utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["itemFromSingleOrMultiple"])(options, index), items = this.items, oldIndex = items.findIndex(function(v) {
                                    return v.id.description === id;
                                }), newItem = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Container$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Container"](this, id, currentOptions);
                                if (oldIndex >= __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loadMinIndex"]) {
                                    old = this.item(oldIndex), deleteCount = old ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["one"] : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["none"];
                                    if (old && !old.destroyed) {
                                        old.destroy(false);
                                    }
                                    items.splice(oldIndex, deleteCount, newItem);
                                } else {
                                    items.push(newItem);
                                }
                                domContainer = getDomContainer(id, params.element), canvasEl = getCanvasFromContainer(domContainer);
                                newItem.canvas.loadCanvas(canvasEl);
                                return [
                                    4,
                                    newItem.start()
                                ];
                            case 4:
                                _state.sent();
                                return [
                                    2,
                                    newItem
                                ];
                        }
                    });
                }).call(this);
            }
        },
        {
            key: "loadOptions",
            value: function loadOptions(options, sourceOptions) {
                this.plugins.forEach(function(plugin) {
                    var _plugin_loadOptions;
                    return (_plugin_loadOptions = plugin.loadOptions) === null || _plugin_loadOptions === void 0 ? void 0 : _plugin_loadOptions.call(plugin, options, sourceOptions);
                });
            }
        },
        {
            key: "loadParticlesOptions",
            value: function loadParticlesOptions(container, options) {
                for(var _len = arguments.length, sourceOptions = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++){
                    sourceOptions[_key - 2] = arguments[_key];
                }
                var updaters = this.updaters.get(container);
                if (!updaters) {
                    return;
                }
                updaters.forEach(function(updater) {
                    var _updater_loadOptions;
                    var _updater_loadOptions1;
                    return (_updater_loadOptions1 = updater.loadOptions) === null || _updater_loadOptions1 === void 0 ? void 0 : (_updater_loadOptions = _updater_loadOptions1).call.apply(_updater_loadOptions, [
                        updater,
                        options
                    ].concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_to_consumable_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(sourceOptions)));
                });
            }
        },
        {
            key: "refresh",
            value: function refresh() {
                var refresh = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_async_to_generator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(function() {
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$8$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$_generator__as__$5f3e$__["_"])(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                if (!refresh) {
                                    return [
                                        2
                                    ];
                                }
                                return [
                                    4,
                                    Promise.all(this.items.map(function(t) {
                                        return t.refresh();
                                    }))
                                ];
                            case 1:
                                _state.sent();
                                return [
                                    2
                                ];
                        }
                    });
                }).call(this);
            }
        },
        {
            key: "removeEventListener",
            value: function removeEventListener(type, listener) {
                this._eventDispatcher.removeEventListener(type, listener);
            }
        },
        {
            key: "setOnClickHandler",
            value: function setOnClickHandler(callback) {
                var items = this.items;
                if (!items.length) {
                    throw new Error("".concat(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["errorPrefix"], " can only set click handlers after calling tsParticles.load()"));
                }
                items.forEach(function(item) {
                    return item.addClickHandler(callback);
                });
            }
        }
    ]);
    return Engine;
}();
}),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/init.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "init",
    ()=>init
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Engine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Core/Engine.js [app-client] (ecmascript)");
;
function init() {
    var engine = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Engine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Engine"]();
    engine.init();
    return engine;
}
}),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Core/Utils/ExternalInteractorBase.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ExternalInteractorBase",
    ()=>ExternalInteractorBase
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_call_check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_class_call_check.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Enums$2f$Types$2f$InteractorType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Enums/Types/InteractorType.js [app-client] (ecmascript)");
;
;
var ExternalInteractorBase = function ExternalInteractorBase(container) {
    "use strict";
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_call_check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, ExternalInteractorBase);
    this.type = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Enums$2f$Types$2f$InteractorType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InteractorType"].external;
    this.container = container;
};
}),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Core/Utils/ParticlesInteractorBase.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ParticlesInteractorBase",
    ()=>ParticlesInteractorBase
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_call_check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_class_call_check.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Enums$2f$Types$2f$InteractorType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Enums/Types/InteractorType.js [app-client] (ecmascript)");
;
;
var ParticlesInteractorBase = function ParticlesInteractorBase(container) {
    "use strict";
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_call_check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, ParticlesInteractorBase);
    this.type = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Enums$2f$Types$2f$InteractorType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InteractorType"].particles;
    this.container = container;
};
}),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Enums/Directions/RotateDirection.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RotateDirection",
    ()=>RotateDirection
]);
var RotateDirection;
(function(RotateDirection) {
    RotateDirection["clockwise"] = "clockwise";
    RotateDirection["counterClockwise"] = "counter-clockwise";
    RotateDirection["random"] = "random";
})(RotateDirection || (RotateDirection = {}));
}),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Enums/Types/GradientType.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GradientType",
    ()=>GradientType
]);
var GradientType;
(function(GradientType) {
    GradientType["linear"] = "linear";
    GradientType["radial"] = "radial";
    GradientType["random"] = "random";
})(GradientType || (GradientType = {}));
}),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Enums/Types/EasingType.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EasingType",
    ()=>EasingType
]);
var EasingType;
(function(EasingType) {
    EasingType["easeInBack"] = "ease-in-back";
    EasingType["easeInCirc"] = "ease-in-circ";
    EasingType["easeInCubic"] = "ease-in-cubic";
    EasingType["easeInLinear"] = "ease-in-linear";
    EasingType["easeInQuad"] = "ease-in-quad";
    EasingType["easeInQuart"] = "ease-in-quart";
    EasingType["easeInQuint"] = "ease-in-quint";
    EasingType["easeInExpo"] = "ease-in-expo";
    EasingType["easeInSine"] = "ease-in-sine";
    EasingType["easeOutBack"] = "ease-out-back";
    EasingType["easeOutCirc"] = "ease-out-circ";
    EasingType["easeOutCubic"] = "ease-out-cubic";
    EasingType["easeOutLinear"] = "ease-out-linear";
    EasingType["easeOutQuad"] = "ease-out-quad";
    EasingType["easeOutQuart"] = "ease-out-quart";
    EasingType["easeOutQuint"] = "ease-out-quint";
    EasingType["easeOutExpo"] = "ease-out-expo";
    EasingType["easeOutSine"] = "ease-out-sine";
    EasingType["easeInOutBack"] = "ease-in-out-back";
    EasingType["easeInOutCirc"] = "ease-in-out-circ";
    EasingType["easeInOutCubic"] = "ease-in-out-cubic";
    EasingType["easeInOutLinear"] = "ease-in-out-linear";
    EasingType["easeInOutQuad"] = "ease-in-out-quad";
    EasingType["easeInOutQuart"] = "ease-in-out-quart";
    EasingType["easeInOutQuint"] = "ease-in-out-quint";
    EasingType["easeInOutExpo"] = "ease-in-out-expo";
    EasingType["easeInOutSine"] = "ease-in-out-sine";
})(EasingType || (EasingType = {}));
}),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/exports.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Core/Utils/Constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$ExternalInteractorBase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Core/Utils/ExternalInteractorBase.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$ParticlesInteractorBase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Core/Utils/ParticlesInteractorBase.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Point$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Core/Utils/Point.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Ranges$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Core/Utils/Ranges.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Utils$2f$Vectors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Core/Utils/Vectors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Enums$2f$Directions$2f$MoveDirection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Enums/Directions/MoveDirection.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Enums$2f$Directions$2f$RotateDirection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Enums/Directions/RotateDirection.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Enums$2f$Directions$2f$OutModeDirection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Enums/Directions/OutModeDirection.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Enums$2f$Modes$2f$AnimationMode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Enums/Modes/AnimationMode.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Enums$2f$Modes$2f$CollisionMode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Enums/Modes/CollisionMode.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Enums$2f$Modes$2f$LimitMode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Enums/Modes/LimitMode.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Enums$2f$Modes$2f$OutMode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Enums/Modes/OutMode.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Enums$2f$Modes$2f$PixelMode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Enums/Modes/PixelMode.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Enums$2f$Modes$2f$ThemeMode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Enums/Modes/ThemeMode.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Enums$2f$Modes$2f$ResponsiveMode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Enums/Modes/ResponsiveMode.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Enums$2f$Types$2f$AlterType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Enums/Types/AlterType.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Enums$2f$Types$2f$DestroyType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Enums/Types/DestroyType.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Enums$2f$Types$2f$GradientType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Enums/Types/GradientType.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Enums$2f$Types$2f$InteractorType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Enums/Types/InteractorType.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Enums$2f$Types$2f$ParticleOutType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Enums/Types/ParticleOutType.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Enums$2f$Types$2f$StartValueType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Enums/Types/StartValueType.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Enums$2f$Types$2f$DivType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Enums/Types/DivType.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Enums$2f$Types$2f$EasingType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Enums/Types/EasingType.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Enums$2f$Types$2f$EventType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Enums/Types/EventType.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Enums$2f$AnimationStatus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Enums/AnimationStatus.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Enums$2f$InteractivityDetect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Enums/InteractivityDetect.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Options$2f$Classes$2f$AnimatableColor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Options/Classes/AnimatableColor.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Options$2f$Classes$2f$AnimationOptions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Options/Classes/AnimationOptions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Options$2f$Classes$2f$Background$2f$Background$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Options/Classes/Background/Background.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Options$2f$Classes$2f$BackgroundMask$2f$BackgroundMask$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Options/Classes/BackgroundMask/BackgroundMask.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Options$2f$Classes$2f$BackgroundMask$2f$BackgroundMaskCover$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Options/Classes/BackgroundMask/BackgroundMaskCover.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Options$2f$Classes$2f$ColorAnimation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Options/Classes/ColorAnimation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Options$2f$Classes$2f$FullScreen$2f$FullScreen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Options/Classes/FullScreen/FullScreen.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Options$2f$Classes$2f$HslAnimation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Options/Classes/HslAnimation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Options$2f$Classes$2f$Interactivity$2f$Events$2f$ClickEvent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Options/Classes/Interactivity/Events/ClickEvent.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Options$2f$Classes$2f$Interactivity$2f$Events$2f$DivEvent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Options/Classes/Interactivity/Events/DivEvent.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Options$2f$Classes$2f$Interactivity$2f$Events$2f$Events$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Options/Classes/Interactivity/Events/Events.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Options$2f$Classes$2f$Interactivity$2f$Events$2f$HoverEvent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Options/Classes/Interactivity/Events/HoverEvent.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Options$2f$Classes$2f$Interactivity$2f$Events$2f$Parallax$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Options/Classes/Interactivity/Events/Parallax.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Options$2f$Classes$2f$Interactivity$2f$Events$2f$ResizeEvent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Options/Classes/Interactivity/Events/ResizeEvent.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Options$2f$Classes$2f$Interactivity$2f$Interactivity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Options/Classes/Interactivity/Interactivity.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Options$2f$Classes$2f$Interactivity$2f$Modes$2f$Modes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Options/Classes/Interactivity/Modes/Modes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Options$2f$Classes$2f$ManualParticle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Options/Classes/ManualParticle.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Options$2f$Classes$2f$Options$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Options/Classes/Options.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Options$2f$Classes$2f$OptionsColor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Options/Classes/OptionsColor.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Options$2f$Classes$2f$Particles$2f$Bounce$2f$ParticlesBounce$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Options/Classes/Particles/Bounce/ParticlesBounce.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Options$2f$Classes$2f$Particles$2f$Bounce$2f$ParticlesBounceFactor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Options/Classes/Particles/Bounce/ParticlesBounceFactor.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Options$2f$Classes$2f$Particles$2f$Collisions$2f$Collisions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Options/Classes/Particles/Collisions/Collisions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Options$2f$Classes$2f$Particles$2f$Collisions$2f$CollisionsAbsorb$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Options/Classes/Particles/Collisions/CollisionsAbsorb.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Options$2f$Classes$2f$Particles$2f$Collisions$2f$CollisionsOverlap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Options/Classes/Particles/Collisions/CollisionsOverlap.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Options$2f$Classes$2f$Particles$2f$ParticlesOptions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Options/Classes/Particles/ParticlesOptions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Options$2f$Classes$2f$Particles$2f$Shadow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Options/Classes/Particles/Shadow.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Options$2f$Classes$2f$Particles$2f$Stroke$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Options/Classes/Particles/Stroke.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Options$2f$Classes$2f$Particles$2f$Move$2f$MoveAttract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Options/Classes/Particles/Move/MoveAttract.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Options$2f$Classes$2f$Particles$2f$Move$2f$Move$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Options/Classes/Particles/Move/Move.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Options$2f$Classes$2f$Particles$2f$Move$2f$MoveAngle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Options/Classes/Particles/Move/MoveAngle.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Options$2f$Classes$2f$Particles$2f$Move$2f$MoveCenter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Options/Classes/Particles/Move/MoveCenter.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Options$2f$Classes$2f$Particles$2f$Move$2f$MoveGravity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Options/Classes/Particles/Move/MoveGravity.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Options$2f$Classes$2f$Particles$2f$Move$2f$OutModes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Options/Classes/Particles/Move/OutModes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Options$2f$Classes$2f$Particles$2f$Move$2f$Path$2f$MovePath$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Options/Classes/Particles/Move/Path/MovePath.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Options$2f$Classes$2f$Particles$2f$Move$2f$Spin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Options/Classes/Particles/Move/Spin.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Options$2f$Classes$2f$Particles$2f$Move$2f$MoveTrail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Options/Classes/Particles/Move/MoveTrail.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Options$2f$Classes$2f$Particles$2f$Number$2f$ParticlesNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Options/Classes/Particles/Number/ParticlesNumber.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Options$2f$Classes$2f$Particles$2f$Number$2f$ParticlesNumberLimit$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Options/Classes/Particles/Number/ParticlesNumberLimit.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Options$2f$Classes$2f$Particles$2f$Number$2f$ParticlesDensity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Options/Classes/Particles/Number/ParticlesDensity.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Options$2f$Classes$2f$Particles$2f$Opacity$2f$Opacity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Options/Classes/Particles/Opacity/Opacity.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Options$2f$Classes$2f$Particles$2f$Opacity$2f$OpacityAnimation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Options/Classes/Particles/Opacity/OpacityAnimation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Options$2f$Classes$2f$Particles$2f$Shape$2f$Shape$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Options/Classes/Particles/Shape/Shape.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Options$2f$Classes$2f$Particles$2f$Size$2f$Size$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Options/Classes/Particles/Size/Size.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Options$2f$Classes$2f$Particles$2f$Size$2f$SizeAnimation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Options/Classes/Particles/Size/SizeAnimation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Options$2f$Classes$2f$Particles$2f$ZIndex$2f$ZIndex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Options/Classes/Particles/ZIndex/ZIndex.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Options$2f$Classes$2f$Responsive$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Options/Classes/Responsive.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Options$2f$Classes$2f$Theme$2f$Theme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Options/Classes/Theme/Theme.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Options$2f$Classes$2f$Theme$2f$ThemeDefault$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Options/Classes/Theme/ThemeDefault.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Options$2f$Classes$2f$ValueWithRandom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Options/Classes/ValueWithRandom.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$CanvasUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Utils/CanvasUtils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$ColorUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Utils/ColorUtils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$NumberUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Utils/NumberUtils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$OptionsUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Utils/OptionsUtils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$Utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Utils/Utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$TypeUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Utils/TypeUtils.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
}),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Core/Interfaces/Colors.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
;
}),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Core/Interfaces/IBounds.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
;
}),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Core/Interfaces/IBubbleParticleData.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
;
}),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Core/Interfaces/ICircleBouncer.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
;
}),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Core/Interfaces/IColorManager.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
;
}),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Core/Interfaces/IContainerInteractivity.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
;
}),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Core/Interfaces/IContainerPlugin.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
;
}),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Core/Interfaces/ICoordinates.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
;
}),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Core/Interfaces/IDelta.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
;
}),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Core/Interfaces/IDimension.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
;
}),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Core/Interfaces/IDistance.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
;
}),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Core/Interfaces/IDrawParticleParams.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
;
}),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Core/Interfaces/IEffectDrawer.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
;
}),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Core/Interfaces/IExternalInteractor.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
;
}),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Core/Interfaces/IInteractor.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
;
}),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Core/Interfaces/ILoadParams.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
;
}),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Core/Interfaces/IMouseData.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
;
}),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Core/Interfaces/IMovePathGenerator.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
;
}),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Core/Interfaces/IParticleColorStyle.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
;
}),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Core/Interfaces/IParticleHslAnimation.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
;
}),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Core/Interfaces/IParticleLife.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
;
}),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Core/Interfaces/IParticleMover.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
;
}),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Core/Interfaces/IParticleRetinaProps.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
;
}),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Core/Interfaces/IParticleRoll.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
;
}),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Core/Interfaces/IParticleTransformValues.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
;
}),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Core/Interfaces/IParticleUpdater.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
;
}),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Core/Interfaces/IParticleValueAnimation.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
;
}),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Core/Interfaces/IParticlesInteractor.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
;
}),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Core/Interfaces/IPlugin.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
;
}),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Core/Interfaces/IPositionFromSizeParams.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
;
}),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Core/Interfaces/IRangeValue.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
;
}),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Core/Interfaces/IRectSideResult.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
;
}),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Core/Interfaces/IShapeDrawData.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
;
}),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Core/Interfaces/IShapeDrawer.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
;
}),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Core/Interfaces/IShapeValues.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
;
}),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Core/Interfaces/ISlowParticleData.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
;
}),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Core/Interfaces/ITrailFillData.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
;
}),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Options/Interfaces/Background/IBackground.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
;
}),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Options/Interfaces/BackgroundMask/IBackgroundMask.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
;
}),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Options/Interfaces/BackgroundMask/IBackgroundMaskCover.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
;
}),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Options/Interfaces/FullScreen/IFullScreen.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
;
}),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Options/Interfaces/IAnimatable.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
;
}),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Options/Interfaces/IAnimatableColor.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
;
}),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Options/Interfaces/IAnimation.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
;
}),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Options/Interfaces/IColorAnimation.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
;
}),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Options/Interfaces/IHslAnimation.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
;
}),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Options/Interfaces/IManualParticle.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
;
}),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Options/Interfaces/IOptionLoader.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
;
}),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Options/Interfaces/IOptions.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
;
}),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Options/Interfaces/IOptionsColor.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
;
}),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Options/Interfaces/IResponsive.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
;
}),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Options/Interfaces/IValueWithRandom.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
;
}),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Options/Interfaces/Interactivity/Events/IClickEvent.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
;
}),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Options/Interfaces/Interactivity/Events/IDivEvent.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
;
}),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Options/Interfaces/Interactivity/Events/IEvents.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
;
}),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Options/Interfaces/Interactivity/Events/IHoverEvent.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
;
}),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Options/Interfaces/Interactivity/Events/IParallax.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
;
}),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Options/Interfaces/Interactivity/Events/IResizeEvent.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
;
}),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Options/Interfaces/Interactivity/Modes/IModeDiv.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
;
}),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Options/Interfaces/Interactivity/Modes/IModes.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
;
}),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Options/Interfaces/Interactivity/IInteractivity.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
;
}),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Options/Interfaces/Particles/Bounce/IParticlesBounce.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
;
}),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Options/Interfaces/Particles/Collisions/ICollisions.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
;
}),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Options/Interfaces/Particles/Collisions/ICollisionsAbsorb.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
;
}),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Options/Interfaces/Particles/Collisions/ICollisionsOverlap.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
;
}),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Options/Interfaces/Particles/Effect/IEffect.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
;
}),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Options/Interfaces/Particles/IParticlesOptions.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
;
}),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Options/Interfaces/Particles/IShadow.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
;
}),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Options/Interfaces/Particles/IStroke.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
;
}),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Options/Interfaces/Particles/Move/IMoveAttract.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
;
}),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Options/Interfaces/Particles/Move/IMove.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
;
}),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Options/Interfaces/Particles/Move/IMoveAngle.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
;
}),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Options/Interfaces/Particles/Move/IMoveCenter.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
;
}),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Options/Interfaces/Particles/Move/IMoveGravity.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
;
}),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Options/Interfaces/Particles/Move/Path/IMovePath.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
;
}),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Options/Interfaces/Particles/Move/IOutModes.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
;
}),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Options/Interfaces/Particles/Move/ISpin.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
;
}),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Options/Interfaces/Particles/Move/IMoveTrail.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
;
}),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Options/Interfaces/Particles/Number/IParticlesDensity.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
;
}),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Options/Interfaces/Particles/Number/IParticlesNumber.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
;
}),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Options/Interfaces/Particles/Number/IParticlesNumberLimit.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
;
}),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Options/Interfaces/Particles/Opacity/IOpacity.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
;
}),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Options/Interfaces/Particles/Opacity/IOpacityAnimation.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
;
}),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Options/Interfaces/Particles/Shape/IShape.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
;
}),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Options/Interfaces/Particles/Size/ISize.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
;
}),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Options/Interfaces/Particles/Size/ISizeAnimation.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
;
}),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Options/Interfaces/Particles/ZIndex/IZIndex.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
;
}),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Options/Interfaces/Theme/ITheme.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
;
}),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Options/Interfaces/Theme/IThemeDefault.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
;
}),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Types/CustomEventArgs.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
;
}),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Types/CustomEventListener.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
;
}),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Types/ExportResult.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
;
}),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Types/ISourceOptions.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
;
}),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Types/ParticlesGroups.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
;
}),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Types/PathOptions.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
;
}),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Types/RangeValue.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
;
}),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Types/RecursivePartial.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
;
}),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Types/ShapeData.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
;
}),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Types/SingleOrMultiple.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
;
}),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/export-types.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Interfaces$2f$Colors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Core/Interfaces/Colors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Interfaces$2f$IBounds$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Core/Interfaces/IBounds.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Interfaces$2f$IBubbleParticleData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Core/Interfaces/IBubbleParticleData.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Interfaces$2f$ICircleBouncer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Core/Interfaces/ICircleBouncer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Interfaces$2f$IColorManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Core/Interfaces/IColorManager.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Interfaces$2f$IContainerInteractivity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Core/Interfaces/IContainerInteractivity.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Interfaces$2f$IContainerPlugin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Core/Interfaces/IContainerPlugin.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Interfaces$2f$ICoordinates$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Core/Interfaces/ICoordinates.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Interfaces$2f$IDelta$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Core/Interfaces/IDelta.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Interfaces$2f$IDimension$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Core/Interfaces/IDimension.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Interfaces$2f$IDistance$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Core/Interfaces/IDistance.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Interfaces$2f$IDrawParticleParams$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Core/Interfaces/IDrawParticleParams.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Interfaces$2f$IEffectDrawer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Core/Interfaces/IEffectDrawer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Interfaces$2f$IExternalInteractor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Core/Interfaces/IExternalInteractor.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Interfaces$2f$IInteractor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Core/Interfaces/IInteractor.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Interfaces$2f$ILoadParams$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Core/Interfaces/ILoadParams.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Interfaces$2f$IMouseData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Core/Interfaces/IMouseData.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Interfaces$2f$IMovePathGenerator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Core/Interfaces/IMovePathGenerator.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Interfaces$2f$IParticleColorStyle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Core/Interfaces/IParticleColorStyle.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Interfaces$2f$IParticleHslAnimation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Core/Interfaces/IParticleHslAnimation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Interfaces$2f$IParticleLife$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Core/Interfaces/IParticleLife.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Interfaces$2f$IParticleMover$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Core/Interfaces/IParticleMover.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Interfaces$2f$IParticleRetinaProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Core/Interfaces/IParticleRetinaProps.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Interfaces$2f$IParticleRoll$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Core/Interfaces/IParticleRoll.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Interfaces$2f$IParticleTransformValues$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Core/Interfaces/IParticleTransformValues.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Interfaces$2f$IParticleUpdater$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Core/Interfaces/IParticleUpdater.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Interfaces$2f$IParticleValueAnimation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Core/Interfaces/IParticleValueAnimation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Interfaces$2f$IParticlesInteractor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Core/Interfaces/IParticlesInteractor.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Interfaces$2f$IPlugin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Core/Interfaces/IPlugin.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Interfaces$2f$IPositionFromSizeParams$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Core/Interfaces/IPositionFromSizeParams.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Interfaces$2f$IRangeValue$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Core/Interfaces/IRangeValue.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Interfaces$2f$IRectSideResult$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Core/Interfaces/IRectSideResult.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Interfaces$2f$IShapeDrawData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Core/Interfaces/IShapeDrawData.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Interfaces$2f$IShapeDrawer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Core/Interfaces/IShapeDrawer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Interfaces$2f$IShapeValues$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Core/Interfaces/IShapeValues.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Interfaces$2f$ISlowParticleData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Core/Interfaces/ISlowParticleData.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Core$2f$Interfaces$2f$ITrailFillData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Core/Interfaces/ITrailFillData.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Options$2f$Interfaces$2f$Background$2f$IBackground$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Options/Interfaces/Background/IBackground.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Options$2f$Interfaces$2f$BackgroundMask$2f$IBackgroundMask$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Options/Interfaces/BackgroundMask/IBackgroundMask.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Options$2f$Interfaces$2f$BackgroundMask$2f$IBackgroundMaskCover$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Options/Interfaces/BackgroundMask/IBackgroundMaskCover.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Options$2f$Interfaces$2f$FullScreen$2f$IFullScreen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Options/Interfaces/FullScreen/IFullScreen.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Options$2f$Interfaces$2f$IAnimatable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Options/Interfaces/IAnimatable.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Options$2f$Interfaces$2f$IAnimatableColor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Options/Interfaces/IAnimatableColor.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Options$2f$Interfaces$2f$IAnimation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Options/Interfaces/IAnimation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Options$2f$Interfaces$2f$IColorAnimation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Options/Interfaces/IColorAnimation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Options$2f$Interfaces$2f$IHslAnimation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Options/Interfaces/IHslAnimation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Options$2f$Interfaces$2f$IManualParticle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Options/Interfaces/IManualParticle.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Options$2f$Interfaces$2f$IOptionLoader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Options/Interfaces/IOptionLoader.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Options$2f$Interfaces$2f$IOptions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Options/Interfaces/IOptions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Options$2f$Interfaces$2f$IOptionsColor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Options/Interfaces/IOptionsColor.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Options$2f$Interfaces$2f$IResponsive$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Options/Interfaces/IResponsive.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Options$2f$Interfaces$2f$IValueWithRandom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Options/Interfaces/IValueWithRandom.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Options$2f$Interfaces$2f$Interactivity$2f$Events$2f$IClickEvent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Options/Interfaces/Interactivity/Events/IClickEvent.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Options$2f$Interfaces$2f$Interactivity$2f$Events$2f$IDivEvent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Options/Interfaces/Interactivity/Events/IDivEvent.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Options$2f$Interfaces$2f$Interactivity$2f$Events$2f$IEvents$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Options/Interfaces/Interactivity/Events/IEvents.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Options$2f$Interfaces$2f$Interactivity$2f$Events$2f$IHoverEvent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Options/Interfaces/Interactivity/Events/IHoverEvent.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Options$2f$Interfaces$2f$Interactivity$2f$Events$2f$IParallax$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Options/Interfaces/Interactivity/Events/IParallax.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Options$2f$Interfaces$2f$Interactivity$2f$Events$2f$IResizeEvent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Options/Interfaces/Interactivity/Events/IResizeEvent.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Options$2f$Interfaces$2f$Interactivity$2f$Modes$2f$IModeDiv$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Options/Interfaces/Interactivity/Modes/IModeDiv.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Options$2f$Interfaces$2f$Interactivity$2f$Modes$2f$IModes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Options/Interfaces/Interactivity/Modes/IModes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Options$2f$Interfaces$2f$Interactivity$2f$IInteractivity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Options/Interfaces/Interactivity/IInteractivity.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Options$2f$Interfaces$2f$Particles$2f$Bounce$2f$IParticlesBounce$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Options/Interfaces/Particles/Bounce/IParticlesBounce.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Options$2f$Interfaces$2f$Particles$2f$Collisions$2f$ICollisions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Options/Interfaces/Particles/Collisions/ICollisions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Options$2f$Interfaces$2f$Particles$2f$Collisions$2f$ICollisionsAbsorb$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Options/Interfaces/Particles/Collisions/ICollisionsAbsorb.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Options$2f$Interfaces$2f$Particles$2f$Collisions$2f$ICollisionsOverlap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Options/Interfaces/Particles/Collisions/ICollisionsOverlap.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Options$2f$Interfaces$2f$Particles$2f$Effect$2f$IEffect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Options/Interfaces/Particles/Effect/IEffect.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Options$2f$Interfaces$2f$Particles$2f$IParticlesOptions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Options/Interfaces/Particles/IParticlesOptions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Options$2f$Interfaces$2f$Particles$2f$IShadow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Options/Interfaces/Particles/IShadow.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Options$2f$Interfaces$2f$Particles$2f$IStroke$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Options/Interfaces/Particles/IStroke.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Options$2f$Interfaces$2f$Particles$2f$Move$2f$IMoveAttract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Options/Interfaces/Particles/Move/IMoveAttract.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Options$2f$Interfaces$2f$Particles$2f$Move$2f$IMove$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Options/Interfaces/Particles/Move/IMove.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Options$2f$Interfaces$2f$Particles$2f$Move$2f$IMoveAngle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Options/Interfaces/Particles/Move/IMoveAngle.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Options$2f$Interfaces$2f$Particles$2f$Move$2f$IMoveCenter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Options/Interfaces/Particles/Move/IMoveCenter.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Options$2f$Interfaces$2f$Particles$2f$Move$2f$IMoveGravity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Options/Interfaces/Particles/Move/IMoveGravity.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Options$2f$Interfaces$2f$Particles$2f$Move$2f$Path$2f$IMovePath$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Options/Interfaces/Particles/Move/Path/IMovePath.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Options$2f$Interfaces$2f$Particles$2f$Move$2f$IOutModes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Options/Interfaces/Particles/Move/IOutModes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Options$2f$Interfaces$2f$Particles$2f$Move$2f$ISpin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Options/Interfaces/Particles/Move/ISpin.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Options$2f$Interfaces$2f$Particles$2f$Move$2f$IMoveTrail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Options/Interfaces/Particles/Move/IMoveTrail.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Options$2f$Interfaces$2f$Particles$2f$Number$2f$IParticlesDensity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Options/Interfaces/Particles/Number/IParticlesDensity.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Options$2f$Interfaces$2f$Particles$2f$Number$2f$IParticlesNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Options/Interfaces/Particles/Number/IParticlesNumber.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Options$2f$Interfaces$2f$Particles$2f$Number$2f$IParticlesNumberLimit$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Options/Interfaces/Particles/Number/IParticlesNumberLimit.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Options$2f$Interfaces$2f$Particles$2f$Opacity$2f$IOpacity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Options/Interfaces/Particles/Opacity/IOpacity.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Options$2f$Interfaces$2f$Particles$2f$Opacity$2f$IOpacityAnimation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Options/Interfaces/Particles/Opacity/IOpacityAnimation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Options$2f$Interfaces$2f$Particles$2f$Shape$2f$IShape$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Options/Interfaces/Particles/Shape/IShape.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Options$2f$Interfaces$2f$Particles$2f$Size$2f$ISize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Options/Interfaces/Particles/Size/ISize.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Options$2f$Interfaces$2f$Particles$2f$Size$2f$ISizeAnimation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Options/Interfaces/Particles/Size/ISizeAnimation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Options$2f$Interfaces$2f$Particles$2f$ZIndex$2f$IZIndex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Options/Interfaces/Particles/ZIndex/IZIndex.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Options$2f$Interfaces$2f$Theme$2f$ITheme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Options/Interfaces/Theme/ITheme.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Options$2f$Interfaces$2f$Theme$2f$IThemeDefault$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Options/Interfaces/Theme/IThemeDefault.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Types$2f$CustomEventArgs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Types/CustomEventArgs.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Types$2f$CustomEventListener$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Types/CustomEventListener.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Types$2f$ExportResult$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Types/ExportResult.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Types$2f$ISourceOptions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Types/ISourceOptions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Types$2f$ParticlesGroups$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Types/ParticlesGroups.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Types$2f$PathOptions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Types/PathOptions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Types$2f$RangeValue$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Types/RangeValue.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Types$2f$RecursivePartial$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Types/RecursivePartial.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Types$2f$ShapeData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Types/ShapeData.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Types$2f$SingleOrMultiple$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Types/SingleOrMultiple.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
}),
"[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/index.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "tsParticles",
    ()=>tsParticles
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/init.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$Utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/Utils/Utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$exports$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/exports.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$export$2d$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tsparticles+engine@3.9.1/node_modules/@tsparticles/engine/browser/export-types.js [app-client] (ecmascript) <locals>");
;
;
var tsParticles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["init"])();
if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tsparticles$2b$engine$40$3$2e$9$2e$1$2f$node_modules$2f40$tsparticles$2f$engine$2f$browser$2f$Utils$2f$Utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isSsr"])()) {
    window.tsParticles = tsParticles;
}
;
;
;
}),
]);

//# sourceMappingURL=3bc82_%40tsparticles_engine_browser_0b8e3771._.js.map