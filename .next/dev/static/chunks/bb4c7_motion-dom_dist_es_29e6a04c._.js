(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/render/utils/keys-transform.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "transformPropOrder",
    ()=>transformPropOrder,
    "transformProps",
    ()=>transformProps
]);
/**
 * Generate a list of every possible transform key.
 */ var transformPropOrder = [
    "transformPerspective",
    "x",
    "y",
    "z",
    "translateX",
    "translateY",
    "translateZ",
    "scale",
    "scaleX",
    "scaleY",
    "rotate",
    "rotateX",
    "rotateY",
    "rotateZ",
    "skew",
    "skewX",
    "skewY"
];
/**
 * A quick lookup for transform props.
 */ var transformProps = /*@__PURE__*/ function() {
    return new Set(transformPropOrder);
}();
;
 //# sourceMappingURL=keys-transform.mjs.map
}),
"[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/value/types/numbers/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "alpha",
    ()=>alpha,
    "number",
    ()=>number,
    "scale",
    ()=>scale
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_object_spread.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_object_spread_props.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$29$2e$2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$clamp$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-utils@12.29.2/node_modules/motion-utils/dist/es/clamp.mjs [app-client] (ecmascript)");
;
;
;
var number = {
    test: function(v) {
        return typeof v === "number";
    },
    parse: parseFloat,
    transform: function(v) {
        return v;
    }
};
var alpha = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, number), {
    transform: function(v) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$29$2e$2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$clamp$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clamp"])(0, 1, v);
    }
});
var scale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, number), {
    default: 1
});
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/value/types/utils/sanitize.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "sanitize",
    ()=>sanitize
]);
// If this number is a decimal, make it just five decimal places
// to avoid exponents
var sanitize = function(v) {
    return Math.round(v * 100000) / 100000;
};
;
 //# sourceMappingURL=sanitize.mjs.map
}),
"[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/value/types/utils/float-regex.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "floatRegex",
    ()=>floatRegex
]);
var floatRegex = RegExp("-?(?:\\d+(?:\\.\\d+)?|\\.\\d+)", "gu");
;
 //# sourceMappingURL=float-regex.mjs.map
}),
"[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/value/types/utils/is-nullish.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isNullish",
    ()=>isNullish
]);
function isNullish(v) {
    return v == null;
}
;
 //# sourceMappingURL=is-nullish.mjs.map
}),
"[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/value/types/utils/single-color-regex.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "singleColorRegex",
    ()=>singleColorRegex
]);
var singleColorRegex = RegExp("^(?:#[\\da-f]{3,8}|(?:rgb|hsl)a?\\((?:-?[\\d.]+%?[,\\s]+){2}-?[\\d.]+%?\\s*(?:[,/]\\s*)?(?:\\b\\d+(?:\\.\\d+)?|\\.\\d+)?%?\\))$", "iu");
;
 //# sourceMappingURL=single-color-regex.mjs.map
}),
"[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/value/types/color/utils.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isColorString",
    ()=>isColorString,
    "splitColor",
    ()=>splitColor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_define_property.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_sliced_to_array.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$utils$2f$float$2d$regex$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/value/types/utils/float-regex.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$utils$2f$is$2d$nullish$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/value/types/utils/is-nullish.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$utils$2f$single$2d$color$2d$regex$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/value/types/utils/single-color-regex.mjs [app-client] (ecmascript)");
;
;
;
;
;
/**
 * Returns true if the provided string is a color, ie rgba(0,0,0,0) or #000,
 * but false if a number or multiple colors
 */ var isColorString = function(type, testProp) {
    return function(v) {
        return Boolean(typeof v === "string" && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$utils$2f$single$2d$color$2d$regex$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["singleColorRegex"].test(v) && v.startsWith(type) || testProp && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$utils$2f$is$2d$nullish$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNullish"])(v) && Object.prototype.hasOwnProperty.call(v, testProp));
    };
};
var splitColor = function(aName, bName, cName) {
    return function(v) {
        if (typeof v !== "string") return v;
        var _v_match = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(v.match(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$utils$2f$float$2d$regex$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["floatRegex"]), 4), a = _v_match[0], b = _v_match[1], c = _v_match[2], alpha = _v_match[3];
        var _obj;
        return _obj = {}, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(_obj, aName, parseFloat(a)), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(_obj, bName, parseFloat(b)), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(_obj, cName, parseFloat(c)), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(_obj, "alpha", alpha !== undefined ? parseFloat(alpha) : 1), _obj;
    };
};
;
 //# sourceMappingURL=utils.mjs.map
}),
"[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/value/types/color/rgba.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "rgbUnit",
    ()=>rgbUnit,
    "rgba",
    ()=>rgba
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_object_spread.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_object_spread_props.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$29$2e$2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$clamp$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-utils@12.29.2/node_modules/motion-utils/dist/es/clamp.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$numbers$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/value/types/numbers/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$utils$2f$sanitize$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/value/types/utils/sanitize.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$color$2f$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/value/types/color/utils.mjs [app-client] (ecmascript)");
;
;
;
;
;
;
var clampRgbUnit = function(v) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$29$2e$2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$clamp$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clamp"])(0, 255, v);
};
var rgbUnit = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$numbers$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["number"]), {
    transform: function(v) {
        return Math.round(clampRgbUnit(v));
    }
});
var rgba = {
    test: /*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$color$2f$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isColorString"])("rgb", "red"),
    parse: /*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$color$2f$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["splitColor"])("red", "green", "blue"),
    transform: function(param) {
        var red = param.red, green = param.green, blue = param.blue, tmp = param.alpha, alpha$1 = tmp === void 0 ? 1 : tmp;
        return "rgba(" + rgbUnit.transform(red) + ", " + rgbUnit.transform(green) + ", " + rgbUnit.transform(blue) + ", " + (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$utils$2f$sanitize$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sanitize"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$numbers$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["alpha"].transform(alpha$1)) + ")";
    }
};
;
 //# sourceMappingURL=rgba.mjs.map
}),
"[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/value/types/color/hex.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "hex",
    ()=>hex
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$color$2f$rgba$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/value/types/color/rgba.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$color$2f$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/value/types/color/utils.mjs [app-client] (ecmascript)");
;
;
function parseHex(v) {
    var r = "";
    var g = "";
    var b = "";
    var a = "";
    // If we have 6 characters, ie #FF0000
    if (v.length > 5) {
        r = v.substring(1, 3);
        g = v.substring(3, 5);
        b = v.substring(5, 7);
        a = v.substring(7, 9);
    // Or we have 3 characters, ie #F00
    } else {
        r = v.substring(1, 2);
        g = v.substring(2, 3);
        b = v.substring(3, 4);
        a = v.substring(4, 5);
        r += r;
        g += g;
        b += b;
        a += a;
    }
    return {
        red: parseInt(r, 16),
        green: parseInt(g, 16),
        blue: parseInt(b, 16),
        alpha: a ? parseInt(a, 16) / 255 : 1
    };
}
var hex = {
    test: /*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$color$2f$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isColorString"])("#"),
    parse: parseHex,
    transform: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$color$2f$rgba$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rgba"].transform
};
;
 //# sourceMappingURL=hex.mjs.map
}),
"[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/value/types/numbers/units.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "degrees",
    ()=>degrees,
    "percent",
    ()=>percent,
    "progressPercentage",
    ()=>progressPercentage,
    "px",
    ()=>px,
    "vh",
    ()=>vh,
    "vw",
    ()=>vw
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_object_spread.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_object_spread_props.js [app-client] (ecmascript)");
;
;
/*#__NO_SIDE_EFFECTS__*/ var createUnitType = function(unit) {
    return {
        test: function(v) {
            return typeof v === "string" && v.endsWith(unit) && v.split(" ").length === 1;
        },
        parse: parseFloat,
        transform: function(v) {
            return "".concat(v).concat(unit);
        }
    };
};
var degrees = /*@__PURE__*/ createUnitType("deg");
var percent = /*@__PURE__*/ createUnitType("%");
var px = /*@__PURE__*/ createUnitType("px");
var vh = /*@__PURE__*/ createUnitType("vh");
var vw = /*@__PURE__*/ createUnitType("vw");
var progressPercentage = /*@__PURE__*/ function() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, percent), {
        parse: function(v) {
            return percent.parse(v) / 100;
        },
        transform: function(v) {
            return percent.transform(v * 100);
        }
    });
}();
;
 //# sourceMappingURL=units.mjs.map
}),
"[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/value/types/color/hsla.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "hsla",
    ()=>hsla
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$numbers$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/value/types/numbers/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$numbers$2f$units$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/value/types/numbers/units.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$utils$2f$sanitize$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/value/types/utils/sanitize.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$color$2f$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/value/types/color/utils.mjs [app-client] (ecmascript)");
;
;
;
;
var hsla = {
    test: /*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$color$2f$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isColorString"])("hsl", "hue"),
    parse: /*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$color$2f$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["splitColor"])("hue", "saturation", "lightness"),
    transform: function(param) {
        var hue = param.hue, saturation = param.saturation, lightness = param.lightness, tmp = param.alpha, alpha$1 = tmp === void 0 ? 1 : tmp;
        return "hsla(" + Math.round(hue) + ", " + __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$numbers$2f$units$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["percent"].transform((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$utils$2f$sanitize$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sanitize"])(saturation)) + ", " + __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$numbers$2f$units$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["percent"].transform((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$utils$2f$sanitize$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sanitize"])(lightness)) + ", " + (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$utils$2f$sanitize$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sanitize"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$numbers$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["alpha"].transform(alpha$1)) + ")";
    }
};
;
 //# sourceMappingURL=hsla.mjs.map
}),
"[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/value/types/color/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "color",
    ()=>color
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$color$2f$hex$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/value/types/color/hex.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$color$2f$hsla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/value/types/color/hsla.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$color$2f$rgba$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/value/types/color/rgba.mjs [app-client] (ecmascript)");
;
;
;
var color = {
    test: function(v) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$color$2f$rgba$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rgba"].test(v) || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$color$2f$hex$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hex"].test(v) || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$color$2f$hsla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hsla"].test(v);
    },
    parse: function(v) {
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$color$2f$rgba$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rgba"].test(v)) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$color$2f$rgba$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rgba"].parse(v);
        } else if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$color$2f$hsla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hsla"].test(v)) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$color$2f$hsla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hsla"].parse(v);
        } else {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$color$2f$hex$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hex"].parse(v);
        }
    },
    transform: function(v) {
        return typeof v === "string" ? v : v.hasOwnProperty("red") ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$color$2f$rgba$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rgba"].transform(v) : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$color$2f$hsla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hsla"].transform(v);
    },
    getAnimatableNone: function(v) {
        var parsed = color.parse(v);
        parsed.alpha = 0;
        return color.transform(parsed);
    }
};
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/value/types/utils/color-regex.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "colorRegex",
    ()=>colorRegex
]);
var colorRegex = RegExp("(?:#[\\da-f]{3,8}|(?:rgb|hsl)a?\\((?:-?[\\d.]+%?[,\\s]+){2}-?[\\d.]+%?\\s*(?:[,/]\\s*)?(?:\\b\\d+(?:\\.\\d+)?|\\.\\d+)?%?\\))", "giu");
;
 //# sourceMappingURL=color-regex.mjs.map
}),
"[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/value/types/complex/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "analyseComplexValue",
    ()=>analyseComplexValue,
    "complex",
    ()=>complex
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$color$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/value/types/color/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$utils$2f$color$2d$regex$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/value/types/utils/color-regex.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$utils$2f$float$2d$regex$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/value/types/utils/float-regex.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$utils$2f$sanitize$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/value/types/utils/sanitize.mjs [app-client] (ecmascript)");
;
;
;
;
function test(v) {
    var _v_match, _v_match1;
    return isNaN(v) && typeof v === "string" && (((_v_match = v.match(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$utils$2f$float$2d$regex$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["floatRegex"])) === null || _v_match === void 0 ? void 0 : _v_match.length) || 0) + (((_v_match1 = v.match(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$utils$2f$color$2d$regex$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colorRegex"])) === null || _v_match1 === void 0 ? void 0 : _v_match1.length) || 0) > 0;
}
var NUMBER_TOKEN = "number";
var COLOR_TOKEN = "color";
var VAR_TOKEN = "var";
var VAR_FUNCTION_TOKEN = "var(";
var SPLIT_TOKEN = "${}";
// this regex consists of the `singleCssVariableRegex|rgbHSLValueRegex|digitRegex`
var complexRegex = RegExp("var\\s*\\(\\s*--(?:[\\w-]+\\s*|[\\w-]+\\s*,(?:\\s*[^)(\\s]|\\s*\\((?:[^)(]|\\([^)(]*\\))*\\))+\\s*)\\)|#[\\da-f]{3,8}|(?:rgb|hsl)a?\\((?:-?[\\d.]+%?[,\\s]+){2}-?[\\d.]+%?\\s*(?:[,/]\\s*)?(?:\\b\\d+(?:\\.\\d+)?|\\.\\d+)?%?\\)|-?(?:\\d+(?:\\.\\d+)?|\\.\\d+)", "giu");
function analyseComplexValue(value) {
    var originalValue = value.toString();
    var values = [];
    var indexes = {
        color: [],
        number: [],
        var: []
    };
    var types = [];
    var i = 0;
    var tokenised = originalValue.replace(complexRegex, function(parsedValue) {
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$color$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["color"].test(parsedValue)) {
            indexes.color.push(i);
            types.push(COLOR_TOKEN);
            values.push(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$color$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["color"].parse(parsedValue));
        } else if (parsedValue.startsWith(VAR_FUNCTION_TOKEN)) {
            indexes.var.push(i);
            types.push(VAR_TOKEN);
            values.push(parsedValue);
        } else {
            indexes.number.push(i);
            types.push(NUMBER_TOKEN);
            values.push(parseFloat(parsedValue));
        }
        ++i;
        return SPLIT_TOKEN;
    });
    var split = tokenised.split(SPLIT_TOKEN);
    return {
        values: values,
        split: split,
        indexes: indexes,
        types: types
    };
}
function parseComplexValue(v) {
    return analyseComplexValue(v).values;
}
function createTransformer(source) {
    var _analyseComplexValue = analyseComplexValue(source), split = _analyseComplexValue.split, types = _analyseComplexValue.types;
    var numSections = split.length;
    return function(v) {
        var output = "";
        for(var i = 0; i < numSections; i++){
            output += split[i];
            if (v[i] !== undefined) {
                var type = types[i];
                if (type === NUMBER_TOKEN) {
                    output += (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$utils$2f$sanitize$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sanitize"])(v[i]);
                } else if (type === COLOR_TOKEN) {
                    output += __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$color$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["color"].transform(v[i]);
                } else {
                    output += v[i];
                }
            }
        }
        return output;
    };
}
var convertNumbersToZero = function(v) {
    return typeof v === "number" ? 0 : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$color$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["color"].test(v) ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$color$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["color"].getAnimatableNone(v) : v;
};
function getAnimatableNone(v) {
    var parsed = parseComplexValue(v);
    var transformer = createTransformer(v);
    return transformer(parsed.map(convertNumbersToZero));
}
var complex = {
    test: test,
    parse: parseComplexValue,
    createTransformer: createTransformer,
    getAnimatableNone: getAnimatableNone
};
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/value/types/complex/filter.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "filter",
    ()=>filter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_object_spread.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_object_spread_props.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_sliced_to_array.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$complex$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/value/types/complex/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$utils$2f$float$2d$regex$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/value/types/utils/float-regex.mjs [app-client] (ecmascript)");
;
;
;
;
;
/**
 * Properties that should default to 1 or 100%
 */ var maxDefaults = new Set([
    "brightness",
    "contrast",
    "saturate",
    "opacity"
]);
function applyDefaultFilter(v) {
    var _v_slice_split = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(v.slice(0, -1).split("("), 2), name = _v_slice_split[0], value = _v_slice_split[1];
    if (name === "drop-shadow") return v;
    var _ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(value.match(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$utils$2f$float$2d$regex$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["floatRegex"]) || [], 1), number = _ref[0];
    if (!number) return v;
    var unit = value.replace(number, "");
    var defaultValue = maxDefaults.has(name) ? 1 : 0;
    if (number !== value) defaultValue *= 100;
    return name + "(" + defaultValue + unit + ")";
}
var functionRegex = RegExp("\\b([a-z-]*)\\(.*?\\)", "gu");
var filter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$complex$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["complex"]), {
    getAnimatableNone: function(v) {
        var functions = v.match(functionRegex);
        return functions ? functions.map(applyDefaultFilter).join(" ") : v;
    }
});
;
 //# sourceMappingURL=filter.mjs.map
}),
"[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/value/types/complex/mask.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "mask",
    ()=>mask
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_object_spread.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_object_spread_props.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$complex$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/value/types/complex/index.mjs [app-client] (ecmascript)");
;
;
;
;
var mask = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$complex$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["complex"]), {
    getAnimatableNone: function(v) {
        var parsed = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$complex$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["complex"].parse(v);
        var transformer = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$complex$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["complex"].createTransformer(v);
        return transformer(parsed.map(function(v) {
            return typeof v === "number" ? 0 : (typeof v === "undefined" ? "undefined" : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(v)) === "object" ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, v), {
                alpha: 1
            }) : v;
        }));
    }
});
;
 //# sourceMappingURL=mask.mjs.map
}),
"[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/value/types/int.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "int",
    ()=>int
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_object_spread.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_object_spread_props.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$numbers$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/value/types/numbers/index.mjs [app-client] (ecmascript)");
;
;
;
var int = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$numbers$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["number"]), {
    transform: Math.round
});
;
 //# sourceMappingURL=int.mjs.map
}),
"[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/value/types/maps/transform.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "transformValueTypes",
    ()=>transformValueTypes
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$numbers$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/value/types/numbers/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$numbers$2f$units$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/value/types/numbers/units.mjs [app-client] (ecmascript)");
;
;
var transformValueTypes = {
    rotate: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$numbers$2f$units$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["degrees"],
    rotateX: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$numbers$2f$units$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["degrees"],
    rotateY: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$numbers$2f$units$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["degrees"],
    rotateZ: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$numbers$2f$units$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["degrees"],
    scale: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$numbers$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scale"],
    scaleX: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$numbers$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scale"],
    scaleY: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$numbers$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scale"],
    scaleZ: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$numbers$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scale"],
    skew: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$numbers$2f$units$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["degrees"],
    skewX: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$numbers$2f$units$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["degrees"],
    skewY: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$numbers$2f$units$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["degrees"],
    distance: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$numbers$2f$units$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["px"],
    translateX: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$numbers$2f$units$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["px"],
    translateY: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$numbers$2f$units$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["px"],
    translateZ: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$numbers$2f$units$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["px"],
    x: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$numbers$2f$units$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["px"],
    y: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$numbers$2f$units$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["px"],
    z: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$numbers$2f$units$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["px"],
    perspective: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$numbers$2f$units$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["px"],
    transformPerspective: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$numbers$2f$units$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["px"],
    opacity: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$numbers$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["alpha"],
    originX: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$numbers$2f$units$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["progressPercentage"],
    originY: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$numbers$2f$units$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["progressPercentage"],
    originZ: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$numbers$2f$units$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["px"]
};
;
 //# sourceMappingURL=transform.mjs.map
}),
"[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/value/types/maps/number.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "numberValueTypes",
    ()=>numberValueTypes
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_object_spread.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_object_spread_props.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$int$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/value/types/int.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$numbers$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/value/types/numbers/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$numbers$2f$units$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/value/types/numbers/units.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$maps$2f$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/value/types/maps/transform.mjs [app-client] (ecmascript)");
;
;
;
;
;
;
var numberValueTypes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({
    // Border props
    borderWidth: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$numbers$2f$units$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["px"],
    borderTopWidth: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$numbers$2f$units$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["px"],
    borderRightWidth: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$numbers$2f$units$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["px"],
    borderBottomWidth: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$numbers$2f$units$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["px"],
    borderLeftWidth: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$numbers$2f$units$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["px"],
    borderRadius: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$numbers$2f$units$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["px"],
    borderTopLeftRadius: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$numbers$2f$units$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["px"],
    borderTopRightRadius: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$numbers$2f$units$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["px"],
    borderBottomRightRadius: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$numbers$2f$units$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["px"],
    borderBottomLeftRadius: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$numbers$2f$units$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["px"],
    // Positioning props
    width: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$numbers$2f$units$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["px"],
    maxWidth: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$numbers$2f$units$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["px"],
    height: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$numbers$2f$units$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["px"],
    maxHeight: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$numbers$2f$units$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["px"],
    top: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$numbers$2f$units$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["px"],
    right: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$numbers$2f$units$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["px"],
    bottom: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$numbers$2f$units$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["px"],
    left: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$numbers$2f$units$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["px"],
    inset: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$numbers$2f$units$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["px"],
    insetBlock: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$numbers$2f$units$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["px"],
    insetBlockStart: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$numbers$2f$units$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["px"],
    insetBlockEnd: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$numbers$2f$units$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["px"],
    insetInline: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$numbers$2f$units$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["px"],
    insetInlineStart: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$numbers$2f$units$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["px"],
    insetInlineEnd: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$numbers$2f$units$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["px"],
    // Spacing props
    padding: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$numbers$2f$units$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["px"],
    paddingTop: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$numbers$2f$units$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["px"],
    paddingRight: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$numbers$2f$units$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["px"],
    paddingBottom: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$numbers$2f$units$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["px"],
    paddingLeft: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$numbers$2f$units$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["px"],
    paddingBlock: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$numbers$2f$units$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["px"],
    paddingBlockStart: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$numbers$2f$units$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["px"],
    paddingBlockEnd: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$numbers$2f$units$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["px"],
    paddingInline: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$numbers$2f$units$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["px"],
    paddingInlineStart: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$numbers$2f$units$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["px"],
    paddingInlineEnd: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$numbers$2f$units$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["px"],
    margin: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$numbers$2f$units$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["px"],
    marginTop: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$numbers$2f$units$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["px"],
    marginRight: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$numbers$2f$units$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["px"],
    marginBottom: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$numbers$2f$units$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["px"],
    marginLeft: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$numbers$2f$units$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["px"],
    marginBlock: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$numbers$2f$units$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["px"],
    marginBlockStart: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$numbers$2f$units$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["px"],
    marginBlockEnd: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$numbers$2f$units$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["px"],
    marginInline: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$numbers$2f$units$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["px"],
    marginInlineStart: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$numbers$2f$units$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["px"],
    marginInlineEnd: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$numbers$2f$units$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["px"],
    // Typography
    fontSize: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$numbers$2f$units$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["px"],
    // Misc
    backgroundPositionX: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$numbers$2f$units$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["px"],
    backgroundPositionY: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$numbers$2f$units$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["px"]
}, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$maps$2f$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformValueTypes"]), {
    zIndex: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$int$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["int"],
    // SVG
    fillOpacity: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$numbers$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["alpha"],
    strokeOpacity: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$numbers$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["alpha"],
    numOctaves: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$int$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["int"]
});
;
 //# sourceMappingURL=number.mjs.map
}),
"[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/value/types/maps/defaults.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "defaultValueTypes",
    ()=>defaultValueTypes,
    "getDefaultValueType",
    ()=>getDefaultValueType
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_object_spread.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_object_spread_props.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$color$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/value/types/color/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$complex$2f$filter$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/value/types/complex/filter.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$complex$2f$mask$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/value/types/complex/mask.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$maps$2f$number$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/value/types/maps/number.mjs [app-client] (ecmascript)");
;
;
;
;
;
;
/**
 * A map of default value types for common values
 */ var defaultValueTypes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$maps$2f$number$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["numberValueTypes"]), {
    // Color props
    color: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$color$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["color"],
    backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$color$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["color"],
    outlineColor: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$color$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["color"],
    fill: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$color$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["color"],
    stroke: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$color$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["color"],
    // Border props
    borderColor: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$color$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["color"],
    borderTopColor: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$color$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["color"],
    borderRightColor: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$color$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["color"],
    borderBottomColor: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$color$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["color"],
    borderLeftColor: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$color$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["color"],
    filter: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$complex$2f$filter$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["filter"],
    WebkitFilter: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$complex$2f$filter$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["filter"],
    mask: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$complex$2f$mask$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mask"],
    WebkitMask: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$complex$2f$mask$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mask"]
});
/**
 * Gets the default ValueType for the provided value key
 */ var getDefaultValueType = function(key) {
    return defaultValueTypes[key];
};
;
 //# sourceMappingURL=defaults.mjs.map
}),
"[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/projection/geometry/models.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createAxis",
    ()=>createAxis,
    "createAxisDelta",
    ()=>createAxisDelta,
    "createBox",
    ()=>createBox,
    "createDelta",
    ()=>createDelta
]);
var createAxisDelta = function() {
    return {
        translate: 0,
        scale: 1,
        origin: 0,
        originPoint: 0
    };
};
var createDelta = function() {
    return {
        x: createAxisDelta(),
        y: createAxisDelta()
    };
};
var createAxis = function() {
    return {
        min: 0,
        max: 0
    };
};
var createBox = function() {
    return {
        x: createAxis(),
        y: createAxis()
    };
};
;
 //# sourceMappingURL=models.mjs.map
}),
"[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/value/utils/is-motion-value.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isMotionValue",
    ()=>isMotionValue
]);
var isMotionValue = function(value) {
    return Boolean(value && value.getVelocity);
};
;
 //# sourceMappingURL=is-motion-value.mjs.map
}),
"[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/render/utils/keys-position.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "positionalKeys",
    ()=>positionalKeys
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_to_consumable_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_to_consumable_array.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$utils$2f$keys$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/render/utils/keys-transform.mjs [app-client] (ecmascript)");
;
;
var positionalKeys = new Set([
    "width",
    "height",
    "top",
    "left",
    "right",
    "bottom"
].concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_to_consumable_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$utils$2f$keys$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformPropOrder"])));
;
 //# sourceMappingURL=keys-position.mjs.map
}),
"[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/value/types/auto.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "auto",
    ()=>auto
]);
/**
 * ValueType for "auto"
 */ var auto = {
    test: function(v) {
        return v === "auto";
    },
    parse: function(v) {
        return v;
    }
};
;
 //# sourceMappingURL=auto.mjs.map
}),
"[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/value/types/test.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "testValueType",
    ()=>testValueType
]);
/**
 * Tests a provided value against a ValueType
 */ var testValueType = function(v) {
    return function(type) {
        return type.test(v);
    };
};
;
 //# sourceMappingURL=test.mjs.map
}),
"[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/value/types/dimensions.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "dimensionValueTypes",
    ()=>dimensionValueTypes,
    "findDimensionValueType",
    ()=>findDimensionValueType
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$auto$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/value/types/auto.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$numbers$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/value/types/numbers/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$numbers$2f$units$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/value/types/numbers/units.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$test$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/value/types/test.mjs [app-client] (ecmascript)");
;
;
;
;
/**
 * A list of value types commonly used for dimensions
 */ var dimensionValueTypes = [
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$numbers$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["number"],
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$numbers$2f$units$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["px"],
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$numbers$2f$units$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["percent"],
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$numbers$2f$units$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["degrees"],
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$numbers$2f$units$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["vw"],
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$numbers$2f$units$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["vh"],
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$auto$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["auto"]
];
/**
 * Tests a dimensional value against the list of dimension ValueTypes
 */ var findDimensionValueType = function(v) {
    return dimensionValueTypes.find((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$test$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["testValueType"])(v));
};
;
 //# sourceMappingURL=dimensions.mjs.map
}),
"[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/animation/utils/is-css-variable.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "containsCSSVariable",
    ()=>containsCSSVariable,
    "isCSSVariableName",
    ()=>isCSSVariableName,
    "isCSSVariableToken",
    ()=>isCSSVariableToken
]);
var checkStringStartsWith = function(token) {
    return function(key) {
        return typeof key === "string" && key.startsWith(token);
    };
};
var isCSSVariableName = /*@__PURE__*/ checkStringStartsWith("--");
var startsAsVariableToken = /*@__PURE__*/ checkStringStartsWith("var(--");
var isCSSVariableToken = function(value) {
    var startsWithToken = startsAsVariableToken(value);
    if (!startsWithToken) return false;
    // Ensure any comments are stripped from the value as this can harm performance of the regex.
    return singleCssVariableRegex.test(value.split("/*")[0].trim());
};
var singleCssVariableRegex = RegExp("var\\(--(?:[\\w-]+\\s*|[\\w-]+\\s*,(?:\\s*[^)(\\s]|\\s*\\((?:[^)(]|\\([^)(]*\\))*\\))+\\s*)\\)$", "iu");
/**
 * Check if a value contains a CSS variable anywhere (e.g. inside calc()).
 * Unlike isCSSVariableToken which checks if the value IS a var() token,
 * this checks if the value CONTAINS var() somewhere in the string.
 */ function containsCSSVariable(value) {
    if (typeof value !== "string") return false;
    // Strip comments to avoid false positives
    return value.split("/*")[0].includes("var(--");
}
;
 //# sourceMappingURL=is-css-variable.mjs.map
}),
"[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/animation/utils/css-variables-conversion.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getVariableValue",
    ()=>getVariableValue,
    "parseCSSVariable",
    ()=>parseCSSVariable
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_sliced_to_array.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$29$2e$2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$errors$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-utils@12.29.2/node_modules/motion-utils/dist/es/errors.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$29$2e$2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$is$2d$numerical$2d$string$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-utils@12.29.2/node_modules/motion-utils/dist/es/is-numerical-string.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$utils$2f$is$2d$css$2d$variable$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/animation/utils/is-css-variable.mjs [app-client] (ecmascript)");
;
;
;
/**
 * Parse Framer's special CSS variable format into a CSS token and a fallback.
 *
 * ```
 * `var(--foo, #fff)` => [`--foo`, '#fff']
 * ```
 *
 * @param current
 */ var splitCSSVariableRegex = // eslint-disable-next-line redos-detector/no-unsafe-regex -- false positive, as it can match a lot of words
RegExp("^var\\(--(?:([\\w-]+)|([\\w-]+), ?([a-zA-Z\\d ()%#.,-]+))\\)", "u");
function parseCSSVariable(current) {
    var match = splitCSSVariableRegex.exec(current);
    if (!match) return [
        , 
    ];
    var _match = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(match, 4), token1 = _match[1], token2 = _match[2], fallback = _match[3];
    return [
        "--".concat(token1 !== null && token1 !== void 0 ? token1 : token2),
        fallback
    ];
}
var maxDepth = 4;
function getVariableValue(current, element) {
    var depth = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$29$2e$2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$errors$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["invariant"])(depth <= maxDepth, 'Max CSS variable fallback depth detected in property "'.concat(current, '". This may indicate a circular fallback dependency.'), "max-css-var-depth");
    var _parseCSSVariable = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(parseCSSVariable(current), 2), token = _parseCSSVariable[0], fallback = _parseCSSVariable[1];
    // No CSS variable detected
    if (!token) return;
    // Attempt to read this CSS variable off the element
    var resolved = window.getComputedStyle(element).getPropertyValue(token);
    if (resolved) {
        var trimmed = resolved.trim();
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$29$2e$2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$is$2d$numerical$2d$string$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNumericalString"])(trimmed) ? parseFloat(trimmed) : trimmed;
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$utils$2f$is$2d$css$2d$variable$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isCSSVariableToken"])(fallback) ? getVariableValue(fallback, element, depth + 1) : fallback;
}
;
 //# sourceMappingURL=css-variables-conversion.mjs.map
}),
"[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/animation/keyframes/utils/fill-wildcards.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "fillWildcards",
    ()=>fillWildcards
]);
function fillWildcards(keyframes) {
    for(var i = 1; i < keyframes.length; i++){
        var _keyframes_i;
        (_keyframes_i = keyframes[i]) !== null && _keyframes_i !== void 0 ? _keyframes_i : keyframes[i] = keyframes[i - 1];
    }
}
;
 //# sourceMappingURL=fill-wildcards.mjs.map
}),
"[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/render/dom/parse-transform.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "defaultTransformValue",
    ()=>defaultTransformValue,
    "parseValueFromTransform",
    ()=>parseValueFromTransform,
    "readTransformValue",
    ()=>readTransformValue
]);
var radToDeg = function(rad) {
    return rad * 180 / Math.PI;
};
var rotate = function(v) {
    var angle = radToDeg(Math.atan2(v[1], v[0]));
    return rebaseAngle(angle);
};
var matrix2dParsers = {
    x: 4,
    y: 5,
    translateX: 4,
    translateY: 5,
    scaleX: 0,
    scaleY: 3,
    scale: function(v) {
        return (Math.abs(v[0]) + Math.abs(v[3])) / 2;
    },
    rotate: rotate,
    rotateZ: rotate,
    skewX: function(v) {
        return radToDeg(Math.atan(v[1]));
    },
    skewY: function(v) {
        return radToDeg(Math.atan(v[2]));
    },
    skew: function(v) {
        return (Math.abs(v[1]) + Math.abs(v[2])) / 2;
    }
};
var rebaseAngle = function(angle) {
    angle = angle % 360;
    if (angle < 0) angle += 360;
    return angle;
};
var rotateZ = rotate;
var scaleX = function(v) {
    return Math.sqrt(v[0] * v[0] + v[1] * v[1]);
};
var scaleY = function(v) {
    return Math.sqrt(v[4] * v[4] + v[5] * v[5]);
};
var matrix3dParsers = {
    x: 12,
    y: 13,
    z: 14,
    translateX: 12,
    translateY: 13,
    translateZ: 14,
    scaleX: scaleX,
    scaleY: scaleY,
    scale: function(v) {
        return (scaleX(v) + scaleY(v)) / 2;
    },
    rotateX: function(v) {
        return rebaseAngle(radToDeg(Math.atan2(v[6], v[5])));
    },
    rotateY: function(v) {
        return rebaseAngle(radToDeg(Math.atan2(-v[2], v[0])));
    },
    rotateZ: rotateZ,
    rotate: rotateZ,
    skewX: function(v) {
        return radToDeg(Math.atan(v[4]));
    },
    skewY: function(v) {
        return radToDeg(Math.atan(v[1]));
    },
    skew: function(v) {
        return (Math.abs(v[1]) + Math.abs(v[4])) / 2;
    }
};
function defaultTransformValue(name) {
    return name.includes("scale") ? 1 : 0;
}
function parseValueFromTransform(transform, name) {
    if (!transform || transform === "none") {
        return defaultTransformValue(name);
    }
    var matrix3dMatch = transform.match(RegExp("^matrix3d\\(([-\\d.e\\s,]+)\\)$", "u"));
    var parsers;
    var match;
    if (matrix3dMatch) {
        parsers = matrix3dParsers;
        match = matrix3dMatch;
    } else {
        var matrix2dMatch = transform.match(RegExp("^matrix\\(([-\\d.e\\s,]+)\\)$", "u"));
        parsers = matrix2dParsers;
        match = matrix2dMatch;
    }
    if (!match) {
        return defaultTransformValue(name);
    }
    var valueParser = parsers[name];
    var values = match[1].split(",").map(convertTransformToNumber);
    return typeof valueParser === "function" ? valueParser(values) : values[valueParser];
}
var readTransformValue = function(instance, name) {
    var _getComputedStyle = getComputedStyle(instance), _getComputedStyle_transform = _getComputedStyle.transform, transform = _getComputedStyle_transform === void 0 ? "none" : _getComputedStyle_transform;
    return parseValueFromTransform(transform, name);
};
function convertTransformToNumber(value) {
    return parseFloat(value.trim());
}
;
 //# sourceMappingURL=parse-transform.mjs.map
}),
"[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/animation/keyframes/utils/unit-conversion.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isNumOrPxType",
    ()=>isNumOrPxType,
    "positionalValues",
    ()=>positionalValues,
    "removeNonTranslationalTransform",
    ()=>removeNonTranslationalTransform
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$dom$2f$parse$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/render/dom/parse-transform.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$utils$2f$keys$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/render/utils/keys-transform.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$numbers$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/value/types/numbers/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$numbers$2f$units$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/value/types/numbers/units.mjs [app-client] (ecmascript)");
;
;
;
;
var isNumOrPxType = function(v) {
    return v === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$numbers$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["number"] || v === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$numbers$2f$units$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["px"];
};
var transformKeys = new Set([
    "x",
    "y",
    "z"
]);
var nonTranslationalTransformKeys = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$utils$2f$keys$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformPropOrder"].filter(function(key) {
    return !transformKeys.has(key);
});
function removeNonTranslationalTransform(visualElement) {
    var removedTransforms = [];
    nonTranslationalTransformKeys.forEach(function(key) {
        var value = visualElement.getValue(key);
        if (value !== undefined) {
            removedTransforms.push([
                key,
                value.get()
            ]);
            value.set(key.startsWith("scale") ? 1 : 0);
        }
    });
    return removedTransforms;
}
var positionalValues = {
    // Dimensions
    width: function(param, param1) {
        var x = param.x, _param_paddingLeft = param1.paddingLeft, paddingLeft = _param_paddingLeft === void 0 ? "0" : _param_paddingLeft, _param_paddingRight = param1.paddingRight, paddingRight = _param_paddingRight === void 0 ? "0" : _param_paddingRight;
        return x.max - x.min - parseFloat(paddingLeft) - parseFloat(paddingRight);
    },
    height: function(param, param1) {
        var y = param.y, _param_paddingTop = param1.paddingTop, paddingTop = _param_paddingTop === void 0 ? "0" : _param_paddingTop, _param_paddingBottom = param1.paddingBottom, paddingBottom = _param_paddingBottom === void 0 ? "0" : _param_paddingBottom;
        return y.max - y.min - parseFloat(paddingTop) - parseFloat(paddingBottom);
    },
    top: function(_bbox, param) {
        var top = param.top;
        return parseFloat(top);
    },
    left: function(_bbox, param) {
        var left = param.left;
        return parseFloat(left);
    },
    bottom: function(param, param1) {
        var y = param.y, top = param1.top;
        return parseFloat(top) + (y.max - y.min);
    },
    right: function(param, param1) {
        var x = param.x, left = param1.left;
        return parseFloat(left) + (x.max - x.min);
    },
    // Transform
    x: function(_bbox, param) {
        var transform = param.transform;
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$dom$2f$parse$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseValueFromTransform"])(transform, "x");
    },
    y: function(_bbox, param) {
        var transform = param.transform;
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$dom$2f$parse$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseValueFromTransform"])(transform, "y");
    }
};
// Alias translate longform names
positionalValues.translateX = positionalValues.x;
positionalValues.translateY = positionalValues.y;
;
 //# sourceMappingURL=unit-conversion.mjs.map
}),
"[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/frameloop/order.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "stepsOrder",
    ()=>stepsOrder
]);
var stepsOrder = [
    "setup",
    "read",
    "resolveKeyframes",
    "preUpdate",
    "update",
    "preRender",
    "render",
    "postRender"
];
;
 //# sourceMappingURL=order.mjs.map
}),
"[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/stats/buffer.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "statsBuffer",
    ()=>statsBuffer
]);
var statsBuffer = {
    value: null,
    addProjectionMetrics: null
};
;
 //# sourceMappingURL=buffer.mjs.map
}),
"[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/frameloop/render-step.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createRenderStep",
    ()=>createRenderStep
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$stats$2f$buffer$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/stats/buffer.mjs [app-client] (ecmascript)");
;
function createRenderStep(runNextFrame, stepName) {
    /**
     * We create and reuse two queues, one to queue jobs for the current frame
     * and one for the next. We reuse to avoid triggering GC after x frames.
     */ var thisFrame = new Set();
    var nextFrame = new Set();
    /**
     * Track whether we're currently processing jobs in this step. This way
     * we can decide whether to schedule new jobs for this frame or next.
     */ var isProcessing = false;
    var flushNextFrame = false;
    /**
     * A set of processes which were marked keepAlive when scheduled.
     */ var toKeepAlive = new WeakSet();
    var latestFrameData = {
        delta: 0.0,
        timestamp: 0.0,
        isProcessing: false
    };
    var numCalls = 0;
    function triggerCallback(callback) {
        if (toKeepAlive.has(callback)) {
            step.schedule(callback);
            runNextFrame();
        }
        numCalls++;
        callback(latestFrameData);
    }
    var step = {
        /**
         * Schedule a process to run on the next frame.
         */ schedule: function(callback) {
            var keepAlive = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false, immediate = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
            var addToCurrentFrame = immediate && isProcessing;
            var queue = addToCurrentFrame ? thisFrame : nextFrame;
            if (keepAlive) toKeepAlive.add(callback);
            if (!queue.has(callback)) queue.add(callback);
            return callback;
        },
        /**
         * Cancel the provided callback from running on the next frame.
         */ cancel: function(callback) {
            nextFrame.delete(callback);
            toKeepAlive.delete(callback);
        },
        /**
         * Execute all schedule callbacks.
         */ process: function(frameData) {
            latestFrameData = frameData;
            /**
             * If we're already processing we've probably been triggered by a flushSync
             * inside an existing process. Instead of executing, mark flushNextFrame
             * as true and ensure we flush the following frame at the end of this one.
             */ if (isProcessing) {
                flushNextFrame = true;
                return;
            }
            isProcessing = true;
            var ref;
            ref = [
                nextFrame,
                thisFrame
            ], thisFrame = ref[0], nextFrame = ref[1], ref;
            // Execute this frame
            thisFrame.forEach(triggerCallback);
            /**
             * If we're recording stats then
             */ if (stepName && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$stats$2f$buffer$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["statsBuffer"].value) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$stats$2f$buffer$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["statsBuffer"].value.frameloop[stepName].push(numCalls);
            }
            numCalls = 0;
            // Clear the frame so no callbacks remain. This is to avoid
            // memory leaks should this render step not run for a while.
            thisFrame.clear();
            isProcessing = false;
            if (flushNextFrame) {
                flushNextFrame = false;
                step.process(frameData);
            }
        }
    };
    return step;
}
;
 //# sourceMappingURL=render-step.mjs.map
}),
"[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/frameloop/batcher.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createRenderBatcher",
    ()=>createRenderBatcher
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$29$2e$2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$global$2d$config$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-utils@12.29.2/node_modules/motion-utils/dist/es/global-config.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$order$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/frameloop/order.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$render$2d$step$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/frameloop/render-step.mjs [app-client] (ecmascript)");
;
;
;
var maxElapsed = 40;
function createRenderBatcher(scheduleNextBatch, allowKeepAlive) {
    var runNextFrame = false;
    var useDefaultElapsed = true;
    var state = {
        delta: 0.0,
        timestamp: 0.0,
        isProcessing: false
    };
    var flagRunNextFrame = function() {
        return runNextFrame = true;
    };
    var steps = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$order$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stepsOrder"].reduce(function(acc, key) {
        acc[key] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$render$2d$step$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createRenderStep"])(flagRunNextFrame, allowKeepAlive ? key : undefined);
        return acc;
    }, {});
    var setup = steps.setup, read = steps.read, resolveKeyframes = steps.resolveKeyframes, preUpdate = steps.preUpdate, update = steps.update, preRender = steps.preRender, render = steps.render, postRender = steps.postRender;
    var processBatch = function() {
        var timestamp = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$29$2e$2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$global$2d$config$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MotionGlobalConfig"].useManualTiming ? state.timestamp : performance.now();
        runNextFrame = false;
        if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$29$2e$2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$global$2d$config$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MotionGlobalConfig"].useManualTiming) {
            state.delta = useDefaultElapsed ? 1000 / 60 : Math.max(Math.min(timestamp - state.timestamp, maxElapsed), 1);
        }
        state.timestamp = timestamp;
        state.isProcessing = true;
        // Unrolled render loop for better per-frame performance
        setup.process(state);
        read.process(state);
        resolveKeyframes.process(state);
        preUpdate.process(state);
        update.process(state);
        preRender.process(state);
        render.process(state);
        postRender.process(state);
        state.isProcessing = false;
        if (runNextFrame && allowKeepAlive) {
            useDefaultElapsed = false;
            scheduleNextBatch(processBatch);
        }
    };
    var wake = function() {
        runNextFrame = true;
        useDefaultElapsed = true;
        if (!state.isProcessing) {
            scheduleNextBatch(processBatch);
        }
    };
    var schedule = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$order$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stepsOrder"].reduce(function(acc, key) {
        var step = steps[key];
        acc[key] = function(process) {
            var keepAlive = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false, immediate = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
            if (!runNextFrame) wake();
            return step.schedule(process, keepAlive, immediate);
        };
        return acc;
    }, {});
    var cancel = function(process) {
        for(var i = 0; i < __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$order$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stepsOrder"].length; i++){
            steps[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$order$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stepsOrder"][i]].cancel(process);
        }
    };
    return {
        schedule: schedule,
        cancel: cancel,
        state: state,
        steps: steps
    };
}
;
 //# sourceMappingURL=batcher.mjs.map
}),
"[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/frameloop/frame.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cancelFrame",
    ()=>cancelFrame,
    "frame",
    ()=>frame,
    "frameData",
    ()=>frameData,
    "frameSteps",
    ()=>frameSteps
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$29$2e$2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$noop$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-utils@12.29.2/node_modules/motion-utils/dist/es/noop.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$batcher$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/frameloop/batcher.mjs [app-client] (ecmascript)");
;
;
var /* @__PURE__ */ _createRenderBatcher = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$batcher$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createRenderBatcher"])(typeof requestAnimationFrame !== "undefined" ? requestAnimationFrame : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$29$2e$2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$noop$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["noop"], true), frame = _createRenderBatcher.schedule, cancelFrame = _createRenderBatcher.cancel, frameData = _createRenderBatcher.state, frameSteps = _createRenderBatcher.steps;
;
 //# sourceMappingURL=frame.mjs.map
}),
"[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/animation/keyframes/KeyframesResolver.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "KeyframeResolver",
    ()=>KeyframeResolver,
    "flushKeyframeResolvers",
    ()=>flushKeyframeResolvers
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_call_check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_class_call_check.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_create_class$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_create_class.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_sliced_to_array.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_to_consumable_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_to_consumable_array.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$keyframes$2f$utils$2f$fill$2d$wildcards$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/animation/keyframes/utils/fill-wildcards.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$keyframes$2f$utils$2f$unit$2d$conversion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/animation/keyframes/utils/unit-conversion.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$frame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/frameloop/frame.mjs [app-client] (ecmascript)");
;
;
;
;
;
;
;
var toResolve = new Set();
var isScheduled = false;
var anyNeedsMeasurement = false;
var isForced = false;
function measureAllKeyframes() {
    if (anyNeedsMeasurement) {
        var resolversToMeasure = Array.from(toResolve).filter(function(resolver) {
            return resolver.needsMeasurement;
        });
        var elementsToMeasure = new Set(resolversToMeasure.map(function(resolver) {
            return resolver.element;
        }));
        var transformsToRestore = new Map();
        /**
         * Write pass
         * If we're measuring elements we want to remove bounding box-changing transforms.
         */ elementsToMeasure.forEach(function(element) {
            var removedTransforms = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$keyframes$2f$utils$2f$unit$2d$conversion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["removeNonTranslationalTransform"])(element);
            if (!removedTransforms.length) return;
            transformsToRestore.set(element, removedTransforms);
            element.render();
        });
        // Read
        resolversToMeasure.forEach(function(resolver) {
            return resolver.measureInitialState();
        });
        // Write
        elementsToMeasure.forEach(function(element) {
            element.render();
            var restore = transformsToRestore.get(element);
            if (restore) {
                restore.forEach(function(param) {
                    var _param = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(param, 2), key = _param[0], value = _param[1];
                    var _element_getValue;
                    (_element_getValue = element.getValue(key)) === null || _element_getValue === void 0 ? void 0 : _element_getValue.set(value);
                });
            }
        });
        // Read
        resolversToMeasure.forEach(function(resolver) {
            return resolver.measureEndState();
        });
        // Write
        resolversToMeasure.forEach(function(resolver) {
            if (resolver.suspendedScrollY !== undefined) {
                window.scrollTo(0, resolver.suspendedScrollY);
            }
        });
    }
    anyNeedsMeasurement = false;
    isScheduled = false;
    toResolve.forEach(function(resolver) {
        return resolver.complete(isForced);
    });
    toResolve.clear();
}
function readAllKeyframes() {
    toResolve.forEach(function(resolver) {
        resolver.readKeyframes();
        if (resolver.needsMeasurement) {
            anyNeedsMeasurement = true;
        }
    });
}
function flushKeyframeResolvers() {
    isForced = true;
    readAllKeyframes();
    measureAllKeyframes();
    isForced = false;
}
var KeyframeResolver = /*#__PURE__*/ function() {
    "use strict";
    function KeyframeResolver(unresolvedKeyframes, onComplete, name, motionValue, element) {
        var isAsync = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : false;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_call_check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, KeyframeResolver);
        this.state = "pending";
        /**
         * Track whether this resolver is async. If it is, it'll be added to the
         * resolver queue and flushed in the next frame. Resolvers that aren't going
         * to trigger read/write thrashing don't need to be async.
         */ this.isAsync = false;
        /**
         * Track whether this resolver needs to perform a measurement
         * to resolve its keyframes.
         */ this.needsMeasurement = false;
        this.unresolvedKeyframes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_to_consumable_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(unresolvedKeyframes);
        this.onComplete = onComplete;
        this.name = name;
        this.motionValue = motionValue;
        this.element = element;
        this.isAsync = isAsync;
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_create_class$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(KeyframeResolver, [
        {
            key: "scheduleResolve",
            value: function scheduleResolve() {
                this.state = "scheduled";
                if (this.isAsync) {
                    toResolve.add(this);
                    if (!isScheduled) {
                        isScheduled = true;
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$frame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["frame"].read(readAllKeyframes);
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$frame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["frame"].resolveKeyframes(measureAllKeyframes);
                    }
                } else {
                    this.readKeyframes();
                    this.complete();
                }
            }
        },
        {
            key: "readKeyframes",
            value: function readKeyframes() {
                var _this = this, unresolvedKeyframes = _this.unresolvedKeyframes, name = _this.name, element = _this.element, motionValue = _this.motionValue;
                // If initial keyframe is null we need to read it from the DOM
                if (unresolvedKeyframes[0] === null) {
                    var currentValue = motionValue === null || motionValue === void 0 ? void 0 : motionValue.get();
                    // TODO: This doesn't work if the final keyframe is a wildcard
                    var finalKeyframe = unresolvedKeyframes[unresolvedKeyframes.length - 1];
                    if (currentValue !== undefined) {
                        unresolvedKeyframes[0] = currentValue;
                    } else if (element && name) {
                        var valueAsRead = element.readValue(name, finalKeyframe);
                        if (valueAsRead !== undefined && valueAsRead !== null) {
                            unresolvedKeyframes[0] = valueAsRead;
                        }
                    }
                    if (unresolvedKeyframes[0] === undefined) {
                        unresolvedKeyframes[0] = finalKeyframe;
                    }
                    if (motionValue && currentValue === undefined) {
                        motionValue.set(unresolvedKeyframes[0]);
                    }
                }
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$keyframes$2f$utils$2f$fill$2d$wildcards$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fillWildcards"])(unresolvedKeyframes);
            }
        },
        {
            key: "setFinalKeyframe",
            value: function setFinalKeyframe() {}
        },
        {
            key: "measureInitialState",
            value: function measureInitialState() {}
        },
        {
            key: "renderEndStyles",
            value: function renderEndStyles() {}
        },
        {
            key: "measureEndState",
            value: function measureEndState() {}
        },
        {
            key: "complete",
            value: function complete() {
                var isForcedComplete = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false;
                this.state = "complete";
                this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, isForcedComplete);
                toResolve.delete(this);
            }
        },
        {
            key: "cancel",
            value: function cancel() {
                if (this.state === "scheduled") {
                    toResolve.delete(this);
                    this.state = "pending";
                }
            }
        },
        {
            key: "resume",
            value: function resume() {
                if (this.state === "pending") this.scheduleResolve();
            }
        }
    ]);
    return KeyframeResolver;
}();
;
 //# sourceMappingURL=KeyframesResolver.mjs.map
}),
"[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/animation/keyframes/utils/is-none.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isNone",
    ()=>isNone
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$29$2e$2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$is$2d$zero$2d$value$2d$string$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-utils@12.29.2/node_modules/motion-utils/dist/es/is-zero-value-string.mjs [app-client] (ecmascript)");
;
function isNone(value) {
    if (typeof value === "number") {
        return value === 0;
    } else if (value !== null) {
        return value === "none" || value === "0" || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$29$2e$2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$is$2d$zero$2d$value$2d$string$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isZeroValueString"])(value);
    } else {
        return true;
    }
}
;
 //# sourceMappingURL=is-none.mjs.map
}),
"[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/value/types/utils/animatable-none.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getAnimatableNone",
    ()=>getAnimatableNone
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$complex$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/value/types/complex/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$complex$2f$filter$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/value/types/complex/filter.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$complex$2f$mask$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/value/types/complex/mask.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$maps$2f$defaults$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/value/types/maps/defaults.mjs [app-client] (ecmascript)");
;
;
;
;
var customTypes = /*@__PURE__*/ new Set([
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$complex$2f$filter$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["filter"],
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$complex$2f$mask$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mask"]
]);
function getAnimatableNone(key, value) {
    var defaultValueType = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$maps$2f$defaults$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDefaultValueType"])(key);
    if (!customTypes.has(defaultValueType)) defaultValueType = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$complex$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["complex"];
    // If value is not recognised as animatable, ie "none", create an animatable version origin based on the target
    return defaultValueType.getAnimatableNone ? defaultValueType.getAnimatableNone(value) : undefined;
}
;
 //# sourceMappingURL=animatable-none.mjs.map
}),
"[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/animation/keyframes/utils/make-none-animatable.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "makeNoneKeyframesAnimatable",
    ()=>makeNoneKeyframesAnimatable
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$complex$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/value/types/complex/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$utils$2f$animatable$2d$none$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/value/types/utils/animatable-none.mjs [app-client] (ecmascript)");
;
;
/**
 * If we encounter keyframes like "none" or "0" and we also have keyframes like
 * "#fff" or "200px 200px" we want to find a keyframe to serve as a template for
 * the "none" keyframes. In this case "#fff" or "200px 200px" - then these get turned into
 * zero equivalents, i.e. "#fff0" or "0px 0px".
 */ var invalidTemplates = new Set([
    "auto",
    "none",
    "0"
]);
function makeNoneKeyframesAnimatable(unresolvedKeyframes, noneKeyframeIndexes, name) {
    var i = 0;
    var animatableTemplate = undefined;
    while(i < unresolvedKeyframes.length && !animatableTemplate){
        var keyframe = unresolvedKeyframes[i];
        if (typeof keyframe === "string" && !invalidTemplates.has(keyframe) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$complex$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["analyseComplexValue"])(keyframe).values.length) {
            animatableTemplate = unresolvedKeyframes[i];
        }
        i++;
    }
    if (animatableTemplate && name) {
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = noneKeyframeIndexes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var noneIndex = _step.value;
                unresolvedKeyframes[noneIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$utils$2f$animatable$2d$none$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAnimatableNone"])(name, animatableTemplate);
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
;
 //# sourceMappingURL=make-none-animatable.mjs.map
}),
"[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/animation/keyframes/DOMKeyframesResolver.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DOMKeyframesResolver",
    ()=>DOMKeyframesResolver
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_call_super$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_call_super.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_call_check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_class_call_check.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_create_class$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_create_class.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_get.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_get_prototype_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_get_prototype_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_inherits$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_inherits.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_sliced_to_array.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$utils$2f$keys$2d$position$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/render/utils/keys-position.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$dimensions$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/value/types/dimensions.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$utils$2f$css$2d$variables$2d$conversion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/animation/utils/css-variables-conversion.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$utils$2f$is$2d$css$2d$variable$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/animation/utils/is-css-variable.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$keyframes$2f$KeyframesResolver$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/animation/keyframes/KeyframesResolver.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$keyframes$2f$utils$2f$is$2d$none$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/animation/keyframes/utils/is-none.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$keyframes$2f$utils$2f$make$2d$none$2d$animatable$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/animation/keyframes/utils/make-none-animatable.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$keyframes$2f$utils$2f$unit$2d$conversion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/animation/keyframes/utils/unit-conversion.mjs [app-client] (ecmascript)");
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
var DOMKeyframesResolver = /*#__PURE__*/ function(KeyframeResolver) {
    "use strict";
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_inherits$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(DOMKeyframesResolver, KeyframeResolver);
    function DOMKeyframesResolver(unresolvedKeyframes, onComplete, name, motionValue, element) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_call_check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, DOMKeyframesResolver);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_call_super$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, DOMKeyframesResolver, [
            unresolvedKeyframes,
            onComplete,
            name,
            motionValue,
            element,
            true
        ]);
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_create_class$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(DOMKeyframesResolver, [
        {
            key: "readKeyframes",
            value: function readKeyframes() {
                var _this = this, unresolvedKeyframes = _this.unresolvedKeyframes, element = _this.element, name = _this.name;
                if (!element || !element.current) return;
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_get_prototype_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(DOMKeyframesResolver.prototype), "readKeyframes", this).call(this);
                /**
         * If any keyframe is a CSS variable, we need to find its value by sampling the element
         */ for(var i = 0; i < unresolvedKeyframes.length; i++){
                    var keyframe = unresolvedKeyframes[i];
                    if (typeof keyframe === "string") {
                        keyframe = keyframe.trim();
                        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$utils$2f$is$2d$css$2d$variable$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isCSSVariableToken"])(keyframe)) {
                            var resolved = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$utils$2f$css$2d$variables$2d$conversion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getVariableValue"])(keyframe, element.current);
                            if (resolved !== undefined) {
                                unresolvedKeyframes[i] = resolved;
                            }
                            if (i === unresolvedKeyframes.length - 1) {
                                this.finalKeyframe = keyframe;
                            }
                        }
                    }
                }
                /**
         * Resolve "none" values. We do this potentially twice - once before and once after measuring keyframes.
         * This could be seen as inefficient but it's a trade-off to avoid measurements in more situations, which
         * have a far bigger performance impact.
         */ this.resolveNoneKeyframes();
                /**
         * Check to see if unit type has changed. If so schedule jobs that will
         * temporarily set styles to the destination keyframes.
         * Skip if we have more than two keyframes or this isn't a positional value.
         * TODO: We can throw if there are multiple keyframes and the value type changes.
         */ if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$utils$2f$keys$2d$position$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["positionalKeys"].has(name) || unresolvedKeyframes.length !== 2) {
                    return;
                }
                var _unresolvedKeyframes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(unresolvedKeyframes, 2), origin = _unresolvedKeyframes[0], target = _unresolvedKeyframes[1];
                var originType = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$dimensions$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findDimensionValueType"])(origin);
                var targetType = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$dimensions$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findDimensionValueType"])(target);
                /**
         * If one keyframe contains embedded CSS variables (e.g. in calc()) and the other
         * doesn't, we need to measure to convert to pixels. This handles GitHub issue #3410.
         */ var originHasVar = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$utils$2f$is$2d$css$2d$variable$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["containsCSSVariable"])(origin);
                var targetHasVar = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$utils$2f$is$2d$css$2d$variable$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["containsCSSVariable"])(target);
                if (originHasVar !== targetHasVar && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$keyframes$2f$utils$2f$unit$2d$conversion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["positionalValues"][name]) {
                    this.needsMeasurement = true;
                    return;
                }
                /**
         * Either we don't recognise these value types or we can animate between them.
         */ if (originType === targetType) return;
                /**
         * If both values are numbers or pixels, we can animate between them by
         * converting them to numbers.
         */ if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$keyframes$2f$utils$2f$unit$2d$conversion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNumOrPxType"])(originType) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$keyframes$2f$utils$2f$unit$2d$conversion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNumOrPxType"])(targetType)) {
                    for(var i1 = 0; i1 < unresolvedKeyframes.length; i1++){
                        var value = unresolvedKeyframes[i1];
                        if (typeof value === "string") {
                            unresolvedKeyframes[i1] = parseFloat(value);
                        }
                    }
                } else if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$keyframes$2f$utils$2f$unit$2d$conversion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["positionalValues"][name]) {
                    /**
             * Else, the only way to resolve this is by measuring the element.
             */ this.needsMeasurement = true;
                }
            }
        },
        {
            key: "resolveNoneKeyframes",
            value: function resolveNoneKeyframes() {
                var _this = this, unresolvedKeyframes = _this.unresolvedKeyframes, name = _this.name;
                var noneKeyframeIndexes = [];
                for(var i = 0; i < unresolvedKeyframes.length; i++){
                    if (unresolvedKeyframes[i] === null || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$keyframes$2f$utils$2f$is$2d$none$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNone"])(unresolvedKeyframes[i])) {
                        noneKeyframeIndexes.push(i);
                    }
                }
                if (noneKeyframeIndexes.length) {
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$keyframes$2f$utils$2f$make$2d$none$2d$animatable$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["makeNoneKeyframesAnimatable"])(unresolvedKeyframes, noneKeyframeIndexes, name);
                }
            }
        },
        {
            key: "measureInitialState",
            value: function measureInitialState() {
                var _this = this, element = _this.element, unresolvedKeyframes = _this.unresolvedKeyframes, name = _this.name;
                if (!element || !element.current) return;
                if (name === "height") {
                    this.suspendedScrollY = window.pageYOffset;
                }
                this.measuredOrigin = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$keyframes$2f$utils$2f$unit$2d$conversion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["positionalValues"][name](element.measureViewportBox(), window.getComputedStyle(element.current));
                unresolvedKeyframes[0] = this.measuredOrigin;
                // Set final key frame to measure after next render
                var measureKeyframe = unresolvedKeyframes[unresolvedKeyframes.length - 1];
                if (measureKeyframe !== undefined) {
                    element.getValue(name, measureKeyframe).jump(measureKeyframe, false);
                }
            }
        },
        {
            key: "measureEndState",
            value: function measureEndState() {
                var _this_removedTransforms;
                var _this = this, element = _this.element, name = _this.name, unresolvedKeyframes = _this.unresolvedKeyframes;
                if (!element || !element.current) return;
                var value = element.getValue(name);
                value && value.jump(this.measuredOrigin, false);
                var finalKeyframeIndex = unresolvedKeyframes.length - 1;
                var finalKeyframe = unresolvedKeyframes[finalKeyframeIndex];
                unresolvedKeyframes[finalKeyframeIndex] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$keyframes$2f$utils$2f$unit$2d$conversion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["positionalValues"][name](element.measureViewportBox(), window.getComputedStyle(element.current));
                if (finalKeyframe !== null && this.finalKeyframe === undefined) {
                    this.finalKeyframe = finalKeyframe;
                }
                // If we removed transform values, reapply them before the next render
                if ((_this_removedTransforms = this.removedTransforms) === null || _this_removedTransforms === void 0 ? void 0 : _this_removedTransforms.length) {
                    this.removedTransforms.forEach(function(param) {
                        var _param = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(param, 2), unsetTransformName = _param[0], unsetTransformValue = _param[1];
                        element.getValue(unsetTransformName).set(unsetTransformValue);
                    });
                }
                this.resolveNoneKeyframes();
            }
        }
    ]);
    return DOMKeyframesResolver;
}(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$keyframes$2f$KeyframesResolver$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KeyframeResolver"]);
;
 //# sourceMappingURL=DOMKeyframesResolver.mjs.map
}),
"[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/render/dom/is-css-var.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isCSSVar",
    ()=>isCSSVar
]);
var isCSSVar = function(name) {
    return name.startsWith("--");
};
;
 //# sourceMappingURL=is-css-var.mjs.map
}),
"[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/render/dom/style-set.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "setStyle",
    ()=>setStyle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$dom$2f$is$2d$css$2d$var$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/render/dom/is-css-var.mjs [app-client] (ecmascript)");
;
function setStyle(element, name, value) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$dom$2f$is$2d$css$2d$var$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isCSSVar"])(name) ? element.style.setProperty(name, value) : element.style[name] = value;
}
;
 //# sourceMappingURL=style-set.mjs.map
}),
"[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/utils/supports/flags.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "supportsFlags",
    ()=>supportsFlags
]);
/**
 * Add the ability for test suites to manually set support flags
 * to better test more environments.
 */ var supportsFlags = {};
;
 //# sourceMappingURL=flags.mjs.map
}),
"[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/utils/supports/memo.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "memoSupports",
    ()=>memoSupports
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$29$2e$2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$memo$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-utils@12.29.2/node_modules/motion-utils/dist/es/memo.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$supports$2f$flags$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/utils/supports/flags.mjs [app-client] (ecmascript)");
;
;
function memoSupports(callback, supportsFlag) {
    var memoized = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$29$2e$2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$memo$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memo"])(callback);
    return function() {
        var _supportsFlags_supportsFlag;
        return (_supportsFlags_supportsFlag = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$supports$2f$flags$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supportsFlags"][supportsFlag]) !== null && _supportsFlags_supportsFlag !== void 0 ? _supportsFlags_supportsFlag : memoized();
    };
}
;
 //# sourceMappingURL=memo.mjs.map
}),
"[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/utils/supports/scroll-timeline.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "supportsScrollTimeline",
    ()=>supportsScrollTimeline
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$supports$2f$memo$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/utils/supports/memo.mjs [app-client] (ecmascript)");
;
var supportsScrollTimeline = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$supports$2f$memo$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memoSupports"])(function() {
    return window.ScrollTimeline !== undefined;
}, "scrollTimeline");
;
 //# sourceMappingURL=scroll-timeline.mjs.map
}),
"[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/animation/keyframes/get-final.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getFinalKeyframe",
    ()=>getFinalKeyframe
]);
var isNotNull = function(value) {
    return value !== null;
};
function getFinalKeyframe(keyframes, param, finalKeyframe) {
    var repeat = param.repeat, _param_repeatType = param.repeatType, repeatType = _param_repeatType === void 0 ? "loop" : _param_repeatType, speed = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 1;
    var resolvedKeyframes = keyframes.filter(isNotNull);
    var useFirstKeyframe = speed < 0 || repeat && repeatType !== "loop" && repeat % 2 === 1;
    var index = useFirstKeyframe ? 0 : resolvedKeyframes.length - 1;
    return !index || finalKeyframe === undefined ? resolvedKeyframes[index] : finalKeyframe;
}
;
 //# sourceMappingURL=get-final.mjs.map
}),
"[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/animation/utils/WithPromise.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WithPromise",
    ()=>WithPromise
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_call_check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_class_call_check.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_create_class$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_create_class.js [app-client] (ecmascript)");
;
;
var WithPromise = /*#__PURE__*/ function() {
    "use strict";
    function WithPromise() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_call_check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, WithPromise);
        this.updateFinished();
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_create_class$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(WithPromise, [
        {
            key: "finished",
            get: function get() {
                return this._finished;
            }
        },
        {
            key: "updateFinished",
            value: function updateFinished() {
                var _this = this;
                this._finished = new Promise(function(resolve) {
                    _this.resolve = resolve;
                });
            }
        },
        {
            key: "notifyFinished",
            value: function notifyFinished() {
                this.resolve();
            }
        },
        {
            /**
     * Allows the animation to be awaited.
     *
     * @deprecated Use `finished` instead.
     */ key: "then",
            value: function then(onResolve, onReject) {
                return this.finished.then(onResolve, onReject);
            }
        }
    ]);
    return WithPromise;
}();
;
 //# sourceMappingURL=WithPromise.mjs.map
}),
"[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/stats/animation-count.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "activeAnimations",
    ()=>activeAnimations
]);
var activeAnimations = {
    layout: 0,
    mainThread: 0,
    waapi: 0
};
;
 //# sourceMappingURL=animation-count.mjs.map
}),
"[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/utils/supports/linear-easing.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "supportsLinearEasing",
    ()=>supportsLinearEasing
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$supports$2f$memo$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/utils/supports/memo.mjs [app-client] (ecmascript)");
;
var supportsLinearEasing = /*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$supports$2f$memo$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memoSupports"])(function() {
    try {
        document.createElement("div").animate({
            opacity: 0
        }, {
            easing: "linear(0, 1)"
        });
    } catch (e) {
        return false;
    }
    return true;
}, "linearEasing");
;
 //# sourceMappingURL=linear-easing.mjs.map
}),
"[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/animation/waapi/utils/linear.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "generateLinearEasing",
    ()=>generateLinearEasing
]);
var generateLinearEasing = function(easing, duration) {
    var resolution = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 10 // as milliseconds
    ;
    var points = "";
    var numPoints = Math.max(Math.round(duration / resolution), 2);
    for(var i = 0; i < numPoints; i++){
        points += Math.round(easing(i / (numPoints - 1)) * 10000) / 10000 + ", ";
    }
    return "linear(".concat(points.substring(0, points.length - 2), ")");
};
;
 //# sourceMappingURL=linear.mjs.map
}),
"[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/animation/waapi/easing/cubic-bezier.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cubicBezierAsString",
    ()=>cubicBezierAsString
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_sliced_to_array.js [app-client] (ecmascript)");
;
var cubicBezierAsString = function(param) {
    var _param = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(param, 4), a = _param[0], b = _param[1], c = _param[2], d = _param[3];
    return "cubic-bezier(".concat(a, ", ").concat(b, ", ").concat(c, ", ").concat(d, ")");
};
;
 //# sourceMappingURL=cubic-bezier.mjs.map
}),
"[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/animation/waapi/easing/supported.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "supportedWaapiEasing",
    ()=>supportedWaapiEasing
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$waapi$2f$easing$2f$cubic$2d$bezier$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/animation/waapi/easing/cubic-bezier.mjs [app-client] (ecmascript)");
;
var supportedWaapiEasing = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: /*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$waapi$2f$easing$2f$cubic$2d$bezier$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cubicBezierAsString"])([
        0,
        0.65,
        0.55,
        1
    ]),
    circOut: /*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$waapi$2f$easing$2f$cubic$2d$bezier$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cubicBezierAsString"])([
        0.55,
        0,
        1,
        0.45
    ]),
    backIn: /*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$waapi$2f$easing$2f$cubic$2d$bezier$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cubicBezierAsString"])([
        0.31,
        0.01,
        0.66,
        -0.59
    ]),
    backOut: /*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$waapi$2f$easing$2f$cubic$2d$bezier$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cubicBezierAsString"])([
        0.33,
        1.53,
        0.69,
        0.99
    ])
};
;
 //# sourceMappingURL=supported.mjs.map
}),
"[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/animation/waapi/easing/map-easing.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "mapEasingToNativeEasing",
    ()=>mapEasingToNativeEasing
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$29$2e$2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$utils$2f$is$2d$bezier$2d$definition$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-utils@12.29.2/node_modules/motion-utils/dist/es/easing/utils/is-bezier-definition.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$supports$2f$linear$2d$easing$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/utils/supports/linear-easing.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$waapi$2f$utils$2f$linear$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/animation/waapi/utils/linear.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$waapi$2f$easing$2f$cubic$2d$bezier$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/animation/waapi/easing/cubic-bezier.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$waapi$2f$easing$2f$supported$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/animation/waapi/easing/supported.mjs [app-client] (ecmascript)");
;
;
;
;
;
function mapEasingToNativeEasing(easing, duration) {
    if (!easing) {
        return undefined;
    } else if (typeof easing === "function") {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$supports$2f$linear$2d$easing$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supportsLinearEasing"])() ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$waapi$2f$utils$2f$linear$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateLinearEasing"])(easing, duration) : "ease-out";
    } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$29$2e$2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$utils$2f$is$2d$bezier$2d$definition$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isBezierDefinition"])(easing)) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$waapi$2f$easing$2f$cubic$2d$bezier$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cubicBezierAsString"])(easing);
    } else if (Array.isArray(easing)) {
        return easing.map(function(segmentEasing) {
            return mapEasingToNativeEasing(segmentEasing, duration) || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$waapi$2f$easing$2f$supported$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supportedWaapiEasing"].easeOut;
        });
    } else {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$waapi$2f$easing$2f$supported$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supportedWaapiEasing"][easing];
    }
}
;
 //# sourceMappingURL=map-easing.mjs.map
}),
"[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/animation/waapi/start-waapi-animation.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "startWaapiAnimation",
    ()=>startWaapiAnimation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_define_property.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$stats$2f$animation$2d$count$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/stats/animation-count.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$stats$2f$buffer$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/stats/buffer.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$waapi$2f$easing$2f$map$2d$easing$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/animation/waapi/easing/map-easing.mjs [app-client] (ecmascript)");
;
;
;
;
function startWaapiAnimation(element, valueName, keyframes) {
    var _ref = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, _ref_delay = _ref.delay, delay = _ref_delay === void 0 ? 0 : _ref_delay, _ref_duration = _ref.duration, duration = _ref_duration === void 0 ? 300 : _ref_duration, _ref_repeat = _ref.repeat, repeat = _ref_repeat === void 0 ? 0 : _ref_repeat, _ref_repeatType = _ref.repeatType, repeatType = _ref_repeatType === void 0 ? "loop" : _ref_repeatType, _ref_ease = _ref.ease, ease = _ref_ease === void 0 ? "easeOut" : _ref_ease, times = _ref.times, pseudoElement = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : undefined;
    var keyframeOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, valueName, keyframes);
    if (times) keyframeOptions.offset = times;
    var easing = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$waapi$2f$easing$2f$map$2d$easing$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mapEasingToNativeEasing"])(ease, duration);
    /**
     * If this is an easing array, apply to keyframes, not animation as a whole
     */ if (Array.isArray(easing)) keyframeOptions.easing = easing;
    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$stats$2f$buffer$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["statsBuffer"].value) {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$stats$2f$animation$2d$count$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["activeAnimations"].waapi++;
    }
    var options = {
        delay: delay,
        duration: duration,
        easing: !Array.isArray(easing) ? easing : "linear",
        fill: "both",
        iterations: repeat + 1,
        direction: repeatType === "reverse" ? "alternate" : "normal"
    };
    if (pseudoElement) options.pseudoElement = pseudoElement;
    var animation = element.animate(keyframeOptions, options);
    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$stats$2f$buffer$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["statsBuffer"].value) {
        animation.finished.finally(function() {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$stats$2f$animation$2d$count$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["activeAnimations"].waapi--;
        });
    }
    return animation;
}
;
 //# sourceMappingURL=start-waapi-animation.mjs.map
}),
"[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/animation/generators/utils/is-generator.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isGenerator",
    ()=>isGenerator
]);
function isGenerator(type) {
    return typeof type === "function" && "applyToOptions" in type;
}
;
 //# sourceMappingURL=is-generator.mjs.map
}),
"[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/animation/waapi/utils/apply-generator.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "applyGeneratorOptions",
    ()=>applyGeneratorOptions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_without_properties$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_object_without_properties.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$supports$2f$linear$2d$easing$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/utils/supports/linear-easing.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$generators$2f$utils$2f$is$2d$generator$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/animation/generators/utils/is-generator.mjs [app-client] (ecmascript)");
;
;
;
function applyGeneratorOptions(_0) {
    var type = _0.type, options = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_without_properties$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(_0, [
        "type"
    ]);
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$generators$2f$utils$2f$is$2d$generator$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isGenerator"])(type) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$supports$2f$linear$2d$easing$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supportsLinearEasing"])()) {
        return type.applyToOptions(options);
    } else {
        var _options_duration, _options_ease;
        (_options_duration = options.duration) !== null && _options_duration !== void 0 ? _options_duration : options.duration = 300;
        (_options_ease = options.ease) !== null && _options_ease !== void 0 ? _options_ease : options.ease = "easeOut";
    }
    return options;
}
;
 //# sourceMappingURL=apply-generator.mjs.map
}),
"[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/animation/NativeAnimation.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NativeAnimation",
    ()=>NativeAnimation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_call_super$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_call_super.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_call_check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_class_call_check.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_create_class$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_create_class.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_inherits$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_inherits.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_possible_constructor_return$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_possible_constructor_return.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$29$2e$2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$errors$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-utils@12.29.2/node_modules/motion-utils/dist/es/errors.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$29$2e$2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$time$2d$conversion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-utils@12.29.2/node_modules/motion-utils/dist/es/time-conversion.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$29$2e$2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$noop$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-utils@12.29.2/node_modules/motion-utils/dist/es/noop.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$dom$2f$style$2d$set$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/render/dom/style-set.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$supports$2f$scroll$2d$timeline$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/utils/supports/scroll-timeline.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$keyframes$2f$get$2d$final$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/animation/keyframes/get-final.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$utils$2f$WithPromise$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/animation/utils/WithPromise.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$waapi$2f$start$2d$waapi$2d$animation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/animation/waapi/start-waapi-animation.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$waapi$2f$utils$2f$apply$2d$generator$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/animation/waapi/utils/apply-generator.mjs [app-client] (ecmascript)");
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
/**
 * NativeAnimation implements AnimationPlaybackControls for the browser's Web Animations API.
 */ var NativeAnimation = /*#__PURE__*/ function(WithPromise) {
    "use strict";
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_inherits$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(NativeAnimation, WithPromise);
    function NativeAnimation(options) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_call_check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, NativeAnimation);
        var _this;
        _this = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_call_super$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, NativeAnimation);
        _this.finishedTime = null;
        _this.isStopped = false;
        /**
         * Tracks a manually-set start time that takes precedence over WAAPI's
         * dynamic startTime. This is cleared when play() or time setter is called,
         * allowing WAAPI to take over timing.
         */ _this.manualStartTime = null;
        if (!options) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_possible_constructor_return$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(_this);
        var element = options.element, name = options.name, keyframes = options.keyframes, pseudoElement = options.pseudoElement, _options_allowFlatten = options.allowFlatten, allowFlatten = _options_allowFlatten === void 0 ? false : _options_allowFlatten, finalKeyframe = options.finalKeyframe, onComplete = options.onComplete;
        _this.isPseudoElement = Boolean(pseudoElement);
        _this.allowFlatten = allowFlatten;
        _this.options = options;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$29$2e$2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$errors$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["invariant"])(typeof options.type !== "string", 'Mini animate() doesn\'t support "type" as a string.', "mini-spring");
        var transition = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$waapi$2f$utils$2f$apply$2d$generator$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["applyGeneratorOptions"])(options);
        _this.animation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$waapi$2f$start$2d$waapi$2d$animation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["startWaapiAnimation"])(element, name, keyframes, transition, pseudoElement);
        if (transition.autoplay === false) {
            _this.animation.pause();
        }
        _this.animation.onfinish = function() {
            _this.finishedTime = _this.time;
            if (!pseudoElement) {
                var keyframe = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$keyframes$2f$get$2d$final$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFinalKeyframe"])(keyframes, _this.options, finalKeyframe, _this.speed);
                if (_this.updateMotionValue) {
                    _this.updateMotionValue(keyframe);
                } else {
                    /**
                     * If we can, we want to commit the final style as set by the user,
                     * rather than the computed keyframe value supplied by the animation.
                     */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$dom$2f$style$2d$set$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setStyle"])(element, name, keyframe);
                }
                _this.animation.cancel();
            }
            onComplete === null || onComplete === void 0 ? void 0 : onComplete();
            _this.notifyFinished();
        };
        return _this;
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_create_class$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(NativeAnimation, [
        {
            key: "play",
            value: function play() {
                if (this.isStopped) return;
                this.manualStartTime = null;
                this.animation.play();
                if (this.state === "finished") {
                    this.updateFinished();
                }
            }
        },
        {
            key: "pause",
            value: function pause() {
                this.animation.pause();
            }
        },
        {
            key: "complete",
            value: function complete() {
                var _this_animation_finish, _this_animation;
                (_this_animation_finish = (_this_animation = this.animation).finish) === null || _this_animation_finish === void 0 ? void 0 : _this_animation_finish.call(_this_animation);
            }
        },
        {
            key: "cancel",
            value: function cancel() {
                try {
                    this.animation.cancel();
                } catch (e) {}
            }
        },
        {
            key: "stop",
            value: function stop() {
                if (this.isStopped) return;
                this.isStopped = true;
                var state = this.state;
                if (state === "idle" || state === "finished") {
                    return;
                }
                if (this.updateMotionValue) {
                    this.updateMotionValue();
                } else {
                    this.commitStyles();
                }
                if (!this.isPseudoElement) this.cancel();
            }
        },
        {
            /**
     * WAAPI doesn't natively have any interruption capabilities.
     *
     * In this method, we commit styles back to the DOM before cancelling
     * the animation.
     *
     * This is designed to be overridden by NativeAnimationExtended, which
     * will create a renderless JS animation and sample it twice to calculate
     * its current value, "previous" value, and therefore allow
     * Motion to also correctly calculate velocity for any subsequent animation
     * while deferring the commit until the next animation frame.
     */ key: "commitStyles",
            value: function commitStyles() {
                var _this_options;
                var element = (_this_options = this.options) === null || _this_options === void 0 ? void 0 : _this_options.element;
                if (!this.isPseudoElement && (element === null || element === void 0 ? void 0 : element.isConnected)) {
                    var _this_animation_commitStyles, _this_animation;
                    (_this_animation_commitStyles = (_this_animation = this.animation).commitStyles) === null || _this_animation_commitStyles === void 0 ? void 0 : _this_animation_commitStyles.call(_this_animation);
                }
            }
        },
        {
            key: "duration",
            get: function get() {
                var _this_animation_effect_getComputedTiming, _this_animation_effect;
                var duration = ((_this_animation_effect = this.animation.effect) === null || _this_animation_effect === void 0 ? void 0 : (_this_animation_effect_getComputedTiming = _this_animation_effect.getComputedTiming) === null || _this_animation_effect_getComputedTiming === void 0 ? void 0 : _this_animation_effect_getComputedTiming.call(_this_animation_effect).duration) || 0;
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$29$2e$2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$time$2d$conversion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["millisecondsToSeconds"])(Number(duration));
            }
        },
        {
            key: "iterationDuration",
            get: function get() {
                var _ref = this.options || {}, _ref_delay = _ref.delay, delay = _ref_delay === void 0 ? 0 : _ref_delay;
                return this.duration + (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$29$2e$2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$time$2d$conversion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["millisecondsToSeconds"])(delay);
            }
        },
        {
            key: "time",
            get: function get() {
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$29$2e$2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$time$2d$conversion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["millisecondsToSeconds"])(Number(this.animation.currentTime) || 0);
            },
            set: function set(newTime) {
                this.manualStartTime = null;
                this.finishedTime = null;
                this.animation.currentTime = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$29$2e$2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$time$2d$conversion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["secondsToMilliseconds"])(newTime);
            }
        },
        {
            key: "speed",
            get: /**
     * The playback speed of the animation.
     * 1 = normal speed, 2 = double speed, 0.5 = half speed.
     */ function get() {
                return this.animation.playbackRate;
            },
            set: function set(newSpeed) {
                // Allow backwards playback after finishing
                if (newSpeed < 0) this.finishedTime = null;
                this.animation.playbackRate = newSpeed;
            }
        },
        {
            key: "state",
            get: function get() {
                return this.finishedTime !== null ? "finished" : this.animation.playState;
            }
        },
        {
            key: "startTime",
            get: function get() {
                var _this_manualStartTime;
                return (_this_manualStartTime = this.manualStartTime) !== null && _this_manualStartTime !== void 0 ? _this_manualStartTime : Number(this.animation.startTime);
            },
            set: function set(newStartTime) {
                this.manualStartTime = this.animation.startTime = newStartTime;
            }
        },
        {
            /**
     * Attaches a timeline to the animation, for instance the `ScrollTimeline`.
     */ key: "attachTimeline",
            value: function attachTimeline(param) {
                var timeline = param.timeline, observe = param.observe;
                if (this.allowFlatten) {
                    var _this_animation_effect;
                    (_this_animation_effect = this.animation.effect) === null || _this_animation_effect === void 0 ? void 0 : _this_animation_effect.updateTiming({
                        easing: "linear"
                    });
                }
                this.animation.onfinish = null;
                if (timeline && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$supports$2f$scroll$2d$timeline$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supportsScrollTimeline"])()) {
                    this.animation.timeline = timeline;
                    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$29$2e$2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$noop$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["noop"];
                } else {
                    return observe(this);
                }
            }
        }
    ]);
    return NativeAnimation;
}(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$utils$2f$WithPromise$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WithPromise"]);
;
 //# sourceMappingURL=NativeAnimation.mjs.map
}),
"[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/animation/waapi/utils/accelerated-values.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "acceleratedValues",
    ()=>acceleratedValues
]);
/**
 * A list of values that can be hardware-accelerated.
 */ var acceleratedValues = new Set([
    "opacity",
    "clipPath",
    "filter",
    "transform"
]);
;
 //# sourceMappingURL=accelerated-values.mjs.map
}),
"[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/frameloop/microtask.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cancelMicrotask",
    ()=>cancelMicrotask,
    "microtask",
    ()=>microtask
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$batcher$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/frameloop/batcher.mjs [app-client] (ecmascript)");
;
var /* @__PURE__ */ _createRenderBatcher = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$batcher$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createRenderBatcher"])(queueMicrotask, false), microtask = _createRenderBatcher.schedule, cancelMicrotask = _createRenderBatcher.cancel;
;
 //# sourceMappingURL=microtask.mjs.map
}),
"[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/frameloop/sync-time.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "time",
    ()=>time
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$29$2e$2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$global$2d$config$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-utils@12.29.2/node_modules/motion-utils/dist/es/global-config.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$frame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/frameloop/frame.mjs [app-client] (ecmascript)");
;
;
var now;
function clearTime() {
    now = undefined;
}
/**
 * An eventloop-synchronous alternative to performance.now().
 *
 * Ensures that time measurements remain consistent within a synchronous context.
 * Usually calling performance.now() twice within the same synchronous context
 * will return different values which isn't useful for animations when we're usually
 * trying to sync animations to the same frame.
 */ var time = {
    now: function() {
        if (now === undefined) {
            time.set(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$frame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["frameData"].isProcessing || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$29$2e$2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$global$2d$config$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MotionGlobalConfig"].useManualTiming ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$frame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["frameData"].timestamp : performance.now());
        }
        return now;
    },
    set: function(newTime) {
        now = newTime;
        queueMicrotask(clearTime);
    }
};
;
 //# sourceMappingURL=sync-time.mjs.map
}),
"[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/value/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MotionValue",
    ()=>MotionValue,
    "collectMotionValues",
    ()=>collectMotionValues,
    "motionValue",
    ()=>motionValue
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.6_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_call_check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_class_call_check.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_create_class$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_create_class.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$29$2e$2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$warn$2d$once$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-utils@12.29.2/node_modules/motion-utils/dist/es/warn-once.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$29$2e$2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$subscription$2d$manager$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-utils@12.29.2/node_modules/motion-utils/dist/es/subscription-manager.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$29$2e$2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$velocity$2d$per$2d$second$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-utils@12.29.2/node_modules/motion-utils/dist/es/velocity-per-second.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$sync$2d$time$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/frameloop/sync-time.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$frame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/frameloop/frame.mjs [app-client] (ecmascript)");
;
;
;
;
;
/**
 * Maximum time between the value of two frames, beyond which we
 * assume the velocity has since been 0.
 */ var MAX_VELOCITY_DELTA = 30;
var isFloat = function(value) {
    return !isNaN(parseFloat(value));
};
var collectMotionValues = {
    current: undefined
};
/**
 * `MotionValue` is used to track the state and velocity of motion values.
 *
 * @public
 */ var MotionValue = /*#__PURE__*/ function() {
    "use strict";
    function MotionValue(init) {
        var _this = this;
        var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_call_check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, MotionValue);
        /**
         * Tracks whether this value can output a velocity. Currently this is only true
         * if the value is numerical, but we might be able to widen the scope here and support
         * other value types.
         *
         * @internal
         */ this.canTrackVelocity = null;
        /**
         * An object containing a SubscriptionManager for each active event.
         */ this.events = {};
        this.updateAndNotify = function(v) {
            var currentTime = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$sync$2d$time$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["time"].now();
            /**
             * If we're updating the value during another frame or eventloop
             * than the previous frame, then the we set the previous frame value
             * to current.
             */ if (_this.updatedAt !== currentTime) {
                _this.setPrevFrameValue();
            }
            _this.prev = _this.current;
            _this.setCurrent(v);
            // Update update subscribers
            if (_this.current !== _this.prev) {
                var _this_events_change;
                (_this_events_change = _this.events.change) === null || _this_events_change === void 0 ? void 0 : _this_events_change.notify(_this.current);
                if (_this.dependents) {
                    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                    try {
                        for(var _iterator = _this.dependents[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                            var dependent = _step.value;
                            dependent.dirty();
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
        };
        this.hasAnimated = false;
        this.setCurrent(init);
        this.owner = options.owner;
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_create_class$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(MotionValue, [
        {
            key: "setCurrent",
            value: function setCurrent(current) {
                this.current = current;
                this.updatedAt = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$sync$2d$time$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["time"].now();
                if (this.canTrackVelocity === null && current !== undefined) {
                    this.canTrackVelocity = isFloat(this.current);
                }
            }
        },
        {
            key: "setPrevFrameValue",
            value: function setPrevFrameValue() {
                var prevFrameValue = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : this.current;
                this.prevFrameValue = prevFrameValue;
                this.prevUpdatedAt = this.updatedAt;
            }
        },
        {
            /**
     * Adds a function that will be notified when the `MotionValue` is updated.
     *
     * It returns a function that, when called, will cancel the subscription.
     *
     * When calling `onChange` inside a React component, it should be wrapped with the
     * `useEffect` hook. As it returns an unsubscribe function, this should be returned
     * from the `useEffect` function to ensure you don't add duplicate subscribers..
     *
     * ```jsx
     * export const MyComponent = () => {
     *   const x = useMotionValue(0)
     *   const y = useMotionValue(0)
     *   const opacity = useMotionValue(1)
     *
     *   useEffect(() => {
     *     function updateOpacity() {
     *       const maxXY = Math.max(x.get(), y.get())
     *       const newOpacity = transform(maxXY, [0, 100], [1, 0])
     *       opacity.set(newOpacity)
     *     }
     *
     *     const unsubscribeX = x.on("change", updateOpacity)
     *     const unsubscribeY = y.on("change", updateOpacity)
     *
     *     return () => {
     *       unsubscribeX()
     *       unsubscribeY()
     *     }
     *   }, [])
     *
     *   return <motion.div style={{ x }} />
     * }
     * ```
     *
     * @param subscriber - A function that receives the latest value.
     * @returns A function that, when called, will cancel this subscription.
     *
     * @deprecated
     */ key: "onChange",
            value: function onChange(subscription) {
                if ("TURBOPACK compile-time truthy", 1) {
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$29$2e$2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$warn$2d$once$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["warnOnce"])(false, 'value.onChange(callback) is deprecated. Switch to value.on("change", callback).');
                }
                return this.on("change", subscription);
            }
        },
        {
            key: "on",
            value: function on(eventName, callback) {
                var _this = this;
                if (!this.events[eventName]) {
                    this.events[eventName] = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$29$2e$2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$subscription$2d$manager$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SubscriptionManager"]();
                }
                var unsubscribe = this.events[eventName].add(callback);
                if (eventName === "change") {
                    return function() {
                        unsubscribe();
                        /**
                 * If we have no more change listeners by the start
                 * of the next frame, stop active animations.
                 */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$frame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["frame"].read(function() {
                            if (!_this.events.change.getSize()) {
                                _this.stop();
                            }
                        });
                    };
                }
                return unsubscribe;
            }
        },
        {
            key: "clearListeners",
            value: function clearListeners() {
                for(var eventManagers in this.events){
                    this.events[eventManagers].clear();
                }
            }
        },
        {
            /**
     * Attaches a passive effect to the `MotionValue`.
     */ key: "attach",
            value: function attach(passiveEffect, stopPassiveEffect) {
                this.passiveEffect = passiveEffect;
                this.stopPassiveEffect = stopPassiveEffect;
            }
        },
        {
            /**
     * Sets the state of the `MotionValue`.
     *
     * @remarks
     *
     * ```jsx
     * const x = useMotionValue(0)
     * x.set(10)
     * ```
     *
     * @param latest - Latest value to set.
     * @param render - Whether to notify render subscribers. Defaults to `true`
     *
     * @public
     */ key: "set",
            value: function set(v) {
                if (!this.passiveEffect) {
                    this.updateAndNotify(v);
                } else {
                    this.passiveEffect(v, this.updateAndNotify);
                }
            }
        },
        {
            key: "setWithVelocity",
            value: function setWithVelocity(prev, current, delta) {
                this.set(current);
                this.prev = undefined;
                this.prevFrameValue = prev;
                this.prevUpdatedAt = this.updatedAt - delta;
            }
        },
        {
            /**
     * Set the state of the `MotionValue`, stopping any active animations,
     * effects, and resets velocity to `0`.
     */ key: "jump",
            value: function jump(v) {
                var endAnimation = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
                this.updateAndNotify(v);
                this.prev = v;
                this.prevUpdatedAt = this.prevFrameValue = undefined;
                endAnimation && this.stop();
                if (this.stopPassiveEffect) this.stopPassiveEffect();
            }
        },
        {
            key: "dirty",
            value: function dirty() {
                var _this_events_change;
                (_this_events_change = this.events.change) === null || _this_events_change === void 0 ? void 0 : _this_events_change.notify(this.current);
            }
        },
        {
            key: "addDependent",
            value: function addDependent(dependent) {
                if (!this.dependents) {
                    this.dependents = new Set();
                }
                this.dependents.add(dependent);
            }
        },
        {
            key: "removeDependent",
            value: function removeDependent(dependent) {
                if (this.dependents) {
                    this.dependents.delete(dependent);
                }
            }
        },
        {
            /**
     * Returns the latest state of `MotionValue`
     *
     * @returns - The latest state of `MotionValue`
     *
     * @public
     */ key: "get",
            value: function get() {
                if (collectMotionValues.current) {
                    collectMotionValues.current.push(this);
                }
                return this.current;
            }
        },
        {
            /**
     * @public
     */ key: "getPrevious",
            value: function getPrevious() {
                return this.prev;
            }
        },
        {
            /**
     * Returns the latest velocity of `MotionValue`
     *
     * @returns - The latest velocity of `MotionValue`. Returns `0` if the state is non-numerical.
     *
     * @public
     */ key: "getVelocity",
            value: function getVelocity() {
                var currentTime = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$sync$2d$time$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["time"].now();
                if (!this.canTrackVelocity || this.prevFrameValue === undefined || currentTime - this.updatedAt > MAX_VELOCITY_DELTA) {
                    return 0;
                }
                var delta = Math.min(this.updatedAt - this.prevUpdatedAt, MAX_VELOCITY_DELTA);
                // Casts because of parseFloat's poor typing
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$29$2e$2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$velocity$2d$per$2d$second$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["velocityPerSecond"])(parseFloat(this.current) - parseFloat(this.prevFrameValue), delta);
            }
        },
        {
            /**
     * Registers a new animation to control this `MotionValue`. Only one
     * animation can drive a `MotionValue` at one time.
     *
     * ```jsx
     * value.start()
     * ```
     *
     * @param animation - A function that starts the provided animation
     */ key: "start",
            value: function start(startAnimation) {
                var _this = this;
                this.stop();
                return new Promise(function(resolve) {
                    _this.hasAnimated = true;
                    _this.animation = startAnimation(resolve);
                    if (_this.events.animationStart) {
                        _this.events.animationStart.notify();
                    }
                }).then(function() {
                    if (_this.events.animationComplete) {
                        _this.events.animationComplete.notify();
                    }
                    _this.clearAnimation();
                });
            }
        },
        {
            /**
     * Stop the currently active animation.
     *
     * @public
     */ key: "stop",
            value: function stop() {
                if (this.animation) {
                    this.animation.stop();
                    if (this.events.animationCancel) {
                        this.events.animationCancel.notify();
                    }
                }
                this.clearAnimation();
            }
        },
        {
            /**
     * Returns `true` if this value is currently animating.
     *
     * @public
     */ key: "isAnimating",
            value: function isAnimating() {
                return !!this.animation;
            }
        },
        {
            key: "clearAnimation",
            value: function clearAnimation() {
                delete this.animation;
            }
        },
        {
            /**
     * Destroy and clean up subscribers to this `MotionValue`.
     *
     * The `MotionValue` hooks like `useMotionValue` and `useTransform` automatically
     * handle the lifecycle of the returned `MotionValue`, so this method is only necessary if you've manually
     * created a `MotionValue` via the `motionValue` function.
     *
     * @public
     */ key: "destroy",
            value: function destroy() {
                var _this_dependents, _this_events_destroy;
                (_this_dependents = this.dependents) === null || _this_dependents === void 0 ? void 0 : _this_dependents.clear();
                (_this_events_destroy = this.events.destroy) === null || _this_events_destroy === void 0 ? void 0 : _this_events_destroy.notify();
                this.clearListeners();
                this.stop();
                if (this.stopPassiveEffect) {
                    this.stopPassiveEffect();
                }
            }
        }
    ]);
    return MotionValue;
}();
function motionValue(init, options) {
    return new MotionValue(init, options);
}
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/value/types/utils/find.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "findValueType",
    ()=>findValueType
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_to_consumable_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_to_consumable_array.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$color$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/value/types/color/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$complex$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/value/types/complex/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$dimensions$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/value/types/dimensions.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$test$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/value/types/test.mjs [app-client] (ecmascript)");
;
;
;
;
;
/**
 * A list of all ValueTypes
 */ var valueTypes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_to_consumable_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$dimensions$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dimensionValueTypes"]).concat([
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$color$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["color"],
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$complex$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["complex"]
]);
/**
 * Tests a value against the list of ValueTypes
 */ var findValueType = function(v) {
    return valueTypes.find((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$test$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["testValueType"])(v));
};
;
 //# sourceMappingURL=find.mjs.map
}),
"[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/render/store.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "visualElementStore",
    ()=>visualElementStore
]);
var visualElementStore = new WeakMap();
;
 //# sourceMappingURL=store.mjs.map
}),
"[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/render/utils/is-animation-controls.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isAnimationControls",
    ()=>isAnimationControls
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
;
function isAnimationControls(v) {
    return v !== null && (typeof v === "undefined" ? "undefined" : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(v)) === "object" && typeof v.start === "function";
}
;
 //# sourceMappingURL=is-animation-controls.mjs.map
}),
"[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/render/utils/is-variant-label.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isVariantLabel",
    ()=>isVariantLabel
]);
/**
 * Decides if the supplied variable is variant label
 */ function isVariantLabel(v) {
    return typeof v === "string" || Array.isArray(v);
}
;
 //# sourceMappingURL=is-variant-label.mjs.map
}),
"[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/render/utils/variant-props.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "variantPriorityOrder",
    ()=>variantPriorityOrder,
    "variantProps",
    ()=>variantProps
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_to_consumable_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_to_consumable_array.js [app-client] (ecmascript)");
;
var variantPriorityOrder = [
    "animate",
    "whileInView",
    "whileFocus",
    "whileHover",
    "whileTap",
    "whileDrag",
    "exit"
];
var variantProps = [
    "initial"
].concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_to_consumable_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(variantPriorityOrder));
;
 //# sourceMappingURL=variant-props.mjs.map
}),
"[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/render/utils/is-controlling-variants.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isControllingVariants",
    ()=>isControllingVariants,
    "isVariantNode",
    ()=>isVariantNode
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$utils$2f$is$2d$animation$2d$controls$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/render/utils/is-animation-controls.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$utils$2f$is$2d$variant$2d$label$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/render/utils/is-variant-label.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$utils$2f$variant$2d$props$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/render/utils/variant-props.mjs [app-client] (ecmascript)");
;
;
;
function isControllingVariants(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$utils$2f$is$2d$animation$2d$controls$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isAnimationControls"])(props.animate) || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$utils$2f$variant$2d$props$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["variantProps"].some(function(name) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$utils$2f$is$2d$variant$2d$label$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isVariantLabel"])(props[name]);
    });
}
function isVariantNode(props) {
    return Boolean(isControllingVariants(props) || props.variants);
}
;
 //# sourceMappingURL=is-controlling-variants.mjs.map
}),
"[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/render/utils/motion-values.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "updateMotionValuesFromProps",
    ()=>updateMotionValuesFromProps
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/value/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$utils$2f$is$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/value/utils/is-motion-value.mjs [app-client] (ecmascript)");
;
;
/**
 * Updates motion values from props changes.
 * Uses `any` type for element to avoid circular dependencies with VisualElement.
 */ function updateMotionValuesFromProps(element, next, prev) {
    for(var key in next){
        var nextValue = next[key];
        var prevValue = prev[key];
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$utils$2f$is$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isMotionValue"])(nextValue)) {
            /**
             * If this is a motion value found in props or style, we want to add it
             * to our visual element's motion value map.
             */ element.addValue(key, nextValue);
        } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$utils$2f$is$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isMotionValue"])(prevValue)) {
            /**
             * If we're swapping from a motion value to a static value,
             * create a new motion value from that
             */ element.addValue(key, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motionValue"])(nextValue, {
                owner: element
            }));
        } else if (prevValue !== nextValue) {
            /**
             * If this is a flat value that has changed, update the motion value
             * or create one if it doesn't exist. We only want to do this if we're
             * not handling the value with our animation state.
             */ if (element.hasValue(key)) {
                var existingValue = element.getValue(key);
                if (existingValue.liveStyle === true) {
                    existingValue.jump(nextValue);
                } else if (!existingValue.hasAnimated) {
                    existingValue.set(nextValue);
                }
            } else {
                var latestValue = element.getStaticValue(key);
                element.addValue(key, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motionValue"])(latestValue !== undefined ? latestValue : nextValue, {
                    owner: element
                }));
            }
        }
    }
    // Handle removed values
    for(var key1 in prev){
        if (next[key1] === undefined) element.removeValue(key1);
    }
    return next;
}
;
 //# sourceMappingURL=motion-values.mjs.map
}),
"[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/render/utils/reduced-motion/state.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "hasReducedMotionListener",
    ()=>hasReducedMotionListener,
    "prefersReducedMotion",
    ()=>prefersReducedMotion
]);
// Does this device prefer reduced motion? Returns `null` server-side.
var prefersReducedMotion = {
    current: null
};
var hasReducedMotionListener = {
    current: false
};
;
 //# sourceMappingURL=state.mjs.map
}),
"[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/render/utils/reduced-motion/index.mjs [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "initPrefersReducedMotion",
    ()=>initPrefersReducedMotion
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$utils$2f$reduced$2d$motion$2f$state$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/render/utils/reduced-motion/state.mjs [app-client] (ecmascript)");
;
var isBrowser = typeof window !== "undefined";
function initPrefersReducedMotion() {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$utils$2f$reduced$2d$motion$2f$state$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hasReducedMotionListener"].current = true;
    if (!isBrowser) return;
    if (window.matchMedia) {
        var motionMediaQuery = window.matchMedia("(prefers-reduced-motion)");
        var setReducedMotionPreferences = function() {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$utils$2f$reduced$2d$motion$2f$state$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["prefersReducedMotion"].current = motionMediaQuery.matches;
        };
        motionMediaQuery.addEventListener("change", setReducedMotionPreferences);
        setReducedMotionPreferences();
    } else {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$utils$2f$reduced$2d$motion$2f$state$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["prefersReducedMotion"].current = false;
    }
}
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/render/utils/resolve-variants.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "resolveVariantFromProps",
    ()=>resolveVariantFromProps
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_sliced_to_array.js [app-client] (ecmascript)");
;
function getValueState(visualElement) {
    var state = [
        {},
        {}
    ];
    visualElement === null || visualElement === void 0 ? void 0 : visualElement.values.forEach(function(value, key) {
        state[0][key] = value.get();
        state[1][key] = value.getVelocity();
    });
    return state;
}
function resolveVariantFromProps(props, definition, custom, visualElement) {
    /**
     * If the variant definition is a function, resolve.
     */ if (typeof definition === "function") {
        var _getValueState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(getValueState(visualElement), 2), current = _getValueState[0], velocity = _getValueState[1];
        definition = definition(custom !== undefined ? custom : props.custom, current, velocity);
    }
    /**
     * If the variant definition is a variant label, or
     * the function returned a variant label, resolve.
     */ if (typeof definition === "string") {
        definition = props.variants && props.variants[definition];
    }
    /**
     * At this point we've resolved both functions and variant labels,
     * but the resolved variant label might itself have been a function.
     * If so, resolve. This can only have returned a valid target object.
     */ if (typeof definition === "function") {
        var _getValueState1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(getValueState(visualElement), 2), current1 = _getValueState1[0], velocity1 = _getValueState1[1];
        definition = definition(custom !== undefined ? custom : props.custom, current1, velocity1);
    }
    return definition;
}
;
 //# sourceMappingURL=resolve-variants.mjs.map
}),
"[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/render/VisualElement.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "VisualElement",
    ()=>VisualElement,
    "getFeatureDefinitions",
    ()=>getFeatureDefinitions,
    "setFeatureDefinitions",
    ()=>setFeatureDefinitions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.6_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_call_check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_class_call_check.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_create_class$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_create_class.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_instanceof$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_instanceof.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_object_spread.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_without_properties$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_object_without_properties.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_to_consumable_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_to_consumable_array.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$29$2e$2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$warn$2d$once$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-utils@12.29.2/node_modules/motion-utils/dist/es/warn-once.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$29$2e$2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$time$2d$conversion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-utils@12.29.2/node_modules/motion-utils/dist/es/time-conversion.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$29$2e$2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$is$2d$numerical$2d$string$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-utils@12.29.2/node_modules/motion-utils/dist/es/is-numerical-string.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$29$2e$2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$is$2d$zero$2d$value$2d$string$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-utils@12.29.2/node_modules/motion-utils/dist/es/is-zero-value-string.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$29$2e$2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$subscription$2d$manager$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-utils@12.29.2/node_modules/motion-utils/dist/es/subscription-manager.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$keyframes$2f$KeyframesResolver$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/animation/keyframes/KeyframesResolver.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$NativeAnimation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/animation/NativeAnimation.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$waapi$2f$utils$2f$accelerated$2d$values$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/animation/waapi/utils/accelerated-values.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$microtask$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/frameloop/microtask.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$sync$2d$time$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/frameloop/sync-time.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$geometry$2f$models$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/projection/geometry/models.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/value/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$complex$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/value/types/complex/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$utils$2f$animatable$2d$none$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/value/types/utils/animatable-none.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$utils$2f$find$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/value/types/utils/find.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$utils$2f$is$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/value/utils/is-motion-value.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$store$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/render/store.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$utils$2f$is$2d$controlling$2d$variants$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/render/utils/is-controlling-variants.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$utils$2f$keys$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/render/utils/keys-transform.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$utils$2f$motion$2d$values$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/render/utils/motion-values.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$utils$2f$reduced$2d$motion$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/render/utils/reduced-motion/index.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$utils$2f$resolve$2d$variants$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/render/utils/resolve-variants.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$utils$2f$reduced$2d$motion$2f$state$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/render/utils/reduced-motion/state.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$frame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/frameloop/frame.mjs [app-client] (ecmascript)");
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
var propEventHandlers = [
    "AnimationStart",
    "AnimationComplete",
    "Update",
    "BeforeLayoutMeasure",
    "LayoutMeasure",
    "LayoutAnimationStart",
    "LayoutAnimationComplete"
];
/**
 * Static feature definitions - can be injected by framework layer
 */ var featureDefinitions = {};
/**
 * Set feature definitions for all VisualElements.
 * This should be called by the framework layer (e.g., framer-motion) during initialization.
 */ function setFeatureDefinitions(definitions) {
    featureDefinitions = definitions;
}
/**
 * Get the current feature definitions
 */ function getFeatureDefinitions() {
    return featureDefinitions;
}
/**
 * A VisualElement is an imperative abstraction around UI elements such as
 * HTMLElement, SVGElement, Three.Object3D etc.
 */ var VisualElement = /*#__PURE__*/ function() {
    "use strict";
    function VisualElement(param) {
        var _this = this;
        var parent = param.parent, props = param.props, presenceContext = param.presenceContext, reducedMotionConfig = param.reducedMotionConfig, skipAnimations = param.skipAnimations, blockInitialAnimation = param.blockInitialAnimation, visualState = param.visualState, options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_call_check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, VisualElement);
        /**
         * A reference to the current underlying Instance, e.g. a HTMLElement
         * or Three.Mesh etc.
         */ this.current = null;
        /**
         * A set containing references to this VisualElement's children.
         */ this.children = new Set();
        /**
         * Determine what role this visual element should take in the variant tree.
         */ this.isVariantNode = false;
        this.isControllingVariants = false;
        /**
         * Decides whether this VisualElement should animate in reduced motion
         * mode.
         *
         * TODO: This is currently set on every individual VisualElement but feels
         * like it could be set globally.
         */ this.shouldReduceMotion = null;
        /**
         * Decides whether animations should be skipped for this VisualElement.
         * Useful for E2E tests and visual regression testing.
         */ this.shouldSkipAnimations = false;
        /**
         * A map of all motion values attached to this visual element. Motion
         * values are source of truth for any given animated value. A motion
         * value might be provided externally by the component via props.
         */ this.values = new Map();
        this.KeyframeResolver = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$keyframes$2f$KeyframesResolver$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KeyframeResolver"];
        /**
         * Cleanup functions for active features (hover/tap/exit etc)
         */ this.features = {};
        /**
         * A map of every subscription that binds the provided or generated
         * motion values onChange listeners to this visual element.
         */ this.valueSubscriptions = new Map();
        /**
         * A reference to the previously-provided motion values as returned
         * from scrapeMotionValuesFromProps. We use the keys in here to determine
         * if any motion values need to be removed after props are updated.
         */ this.prevMotionValues = {};
        /**
         * Track whether this element has been mounted before, to detect
         * remounts after Suspense unmount/remount cycles.
         */ this.hasBeenMounted = false;
        /**
         * An object containing a SubscriptionManager for each active event.
         */ this.events = {};
        /**
         * An object containing an unsubscribe function for each prop event subscription.
         * For example, every "Update" event can have multiple subscribers via
         * VisualElement.on(), but only one of those can be defined via the onUpdate prop.
         */ this.propEventSubscriptions = {};
        this.notifyUpdate = function() {
            return _this.notify("Update", _this.latestValues);
        };
        this.render = function() {
            if (!_this.current) return;
            _this.triggerBuild();
            _this.renderInstance(_this.current, _this.renderState, _this.props.style, _this.projection);
        };
        this.renderScheduledAt = 0.0;
        this.scheduleRender = function() {
            var now = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$sync$2d$time$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["time"].now();
            if (_this.renderScheduledAt < now) {
                _this.renderScheduledAt = now;
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$frame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["frame"].render(_this.render, false, true);
            }
        };
        var latestValues = visualState.latestValues, renderState = visualState.renderState;
        this.latestValues = latestValues;
        this.baseTarget = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, latestValues);
        this.initialValues = props.initial ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, latestValues) : {};
        this.renderState = renderState;
        this.parent = parent;
        this.props = props;
        this.presenceContext = presenceContext;
        this.depth = parent ? parent.depth + 1 : 0;
        this.reducedMotionConfig = reducedMotionConfig;
        this.skipAnimationsConfig = skipAnimations;
        this.options = options;
        this.blockInitialAnimation = Boolean(blockInitialAnimation);
        this.isControllingVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$utils$2f$is$2d$controlling$2d$variants$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isControllingVariants"])(props);
        this.isVariantNode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$utils$2f$is$2d$controlling$2d$variants$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isVariantNode"])(props);
        if (this.isVariantNode) {
            this.variantChildren = new Set();
        }
        this.manuallyAnimateOnMount = Boolean(parent && parent.current);
        /**
         * Any motion values that are provided to the element when created
         * aren't yet bound to the element, as this would technically be impure.
         * However, we iterate through the motion values and set them to the
         * initial values for this component.
         *
         * TODO: This is impure and we should look at changing this to run on mount.
         * Doing so will break some tests but this isn't necessarily a breaking change,
         * more a reflection of the test.
         */ var _this_scrapeMotionValuesFromProps = this.scrapeMotionValuesFromProps(props, {}, this), willChange = _this_scrapeMotionValuesFromProps.willChange, initialMotionValues = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_without_properties$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(_this_scrapeMotionValuesFromProps, [
            "willChange"
        ]);
        for(var key in initialMotionValues){
            var value = initialMotionValues[key];
            if (latestValues[key] !== undefined && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$utils$2f$is$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isMotionValue"])(value)) {
                value.set(latestValues[key]);
            }
        }
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_create_class$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(VisualElement, [
        {
            /**
     * This method takes React props and returns found MotionValues. For example, HTML
     * MotionValues will be found within the style prop, whereas for Three.js within attribute arrays.
     *
     * This isn't an abstract method as it needs calling in the constructor, but it is
     * intended to be one.
     */ key: "scrapeMotionValuesFromProps",
            value: function scrapeMotionValuesFromProps(_props, _prevProps, _visualElement) {
                return {};
            }
        },
        {
            key: "mount",
            value: function mount(instance) {
                var _this = this;
                var _this_skipAnimationsConfig;
                var _this_parent;
                /**
         * If this element has been mounted before (e.g. after a Suspense
         * unmount/remount), reset motion values to their initial state
         * so animations replay correctly from initial → animate.
         */ if (this.hasBeenMounted) {
                    for(var key in this.initialValues){
                        var _this_values_get;
                        (_this_values_get = this.values.get(key)) === null || _this_values_get === void 0 ? void 0 : _this_values_get.jump(this.initialValues[key]);
                        this.latestValues[key] = this.initialValues[key];
                    }
                }
                this.current = instance;
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$store$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["visualElementStore"].set(instance, this);
                if (this.projection && !this.projection.instance) {
                    this.projection.mount(instance);
                }
                if (this.parent && this.isVariantNode && !this.isControllingVariants) {
                    this.removeFromVariantTree = this.parent.addVariantChild(this);
                }
                this.values.forEach(function(value, key) {
                    return _this.bindToMotionValue(key, value);
                });
                /**
         * Determine reduced motion preference. Only initialize the matchMedia
         * listener if we actually need the dynamic value (i.e., when config
         * is neither "never" nor "always").
         */ if (this.reducedMotionConfig === "never") {
                    this.shouldReduceMotion = false;
                } else if (this.reducedMotionConfig === "always") {
                    this.shouldReduceMotion = true;
                } else {
                    if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$utils$2f$reduced$2d$motion$2f$state$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hasReducedMotionListener"].current) {
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$utils$2f$reduced$2d$motion$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["initPrefersReducedMotion"])();
                    }
                    this.shouldReduceMotion = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$utils$2f$reduced$2d$motion$2f$state$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["prefersReducedMotion"].current;
                }
                if ("TURBOPACK compile-time truthy", 1) {
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$29$2e$2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$warn$2d$once$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["warnOnce"])(this.shouldReduceMotion !== true, "You have Reduced Motion enabled on your device. Animations may not appear as expected.", "reduced-motion-disabled");
                }
                /**
         * Set whether animations should be skipped based on the config.
         */ this.shouldSkipAnimations = (_this_skipAnimationsConfig = this.skipAnimationsConfig) !== null && _this_skipAnimationsConfig !== void 0 ? _this_skipAnimationsConfig : false;
                (_this_parent = this.parent) === null || _this_parent === void 0 ? void 0 : _this_parent.addChild(this);
                this.update(this.props, this.presenceContext);
                this.hasBeenMounted = true;
            }
        },
        {
            key: "unmount",
            value: function unmount() {
                var _this_parent;
                this.projection && this.projection.unmount();
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$frame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cancelFrame"])(this.notifyUpdate);
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$frame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cancelFrame"])(this.render);
                this.valueSubscriptions.forEach(function(remove) {
                    return remove();
                });
                this.valueSubscriptions.clear();
                this.removeFromVariantTree && this.removeFromVariantTree();
                (_this_parent = this.parent) === null || _this_parent === void 0 ? void 0 : _this_parent.removeChild(this);
                for(var key in this.events){
                    this.events[key].clear();
                }
                for(var key1 in this.features){
                    var feature = this.features[key1];
                    if (feature) {
                        feature.unmount();
                        feature.isMounted = false;
                    }
                }
                this.current = null;
            }
        },
        {
            key: "addChild",
            value: function addChild(child) {
                var _this_enteringChildren;
                this.children.add(child);
                (_this_enteringChildren = this.enteringChildren) !== null && _this_enteringChildren !== void 0 ? _this_enteringChildren : this.enteringChildren = new Set();
                this.enteringChildren.add(child);
            }
        },
        {
            key: "removeChild",
            value: function removeChild(child) {
                this.children.delete(child);
                this.enteringChildren && this.enteringChildren.delete(child);
            }
        },
        {
            key: "bindToMotionValue",
            value: function bindToMotionValue(key, value) {
                var _this = this;
                if (this.valueSubscriptions.has(key)) {
                    this.valueSubscriptions.get(key)();
                }
                if (value.accelerate && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$waapi$2f$utils$2f$accelerated$2d$values$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["acceleratedValues"].has(key) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_instanceof$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this.current, HTMLElement)) {
                    var _value_accelerate = value.accelerate, factory = _value_accelerate.factory, keyframes = _value_accelerate.keyframes, times = _value_accelerate.times, ease = _value_accelerate.ease, duration = _value_accelerate.duration;
                    var animation = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$NativeAnimation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NativeAnimation"]({
                        element: this.current,
                        name: key,
                        keyframes: keyframes,
                        times: times,
                        ease: ease,
                        duration: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$29$2e$2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$time$2d$conversion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["secondsToMilliseconds"])(duration)
                    });
                    var cleanup = factory(animation);
                    this.valueSubscriptions.set(key, function() {
                        cleanup();
                        animation.cancel();
                    });
                    return;
                }
                var valueIsTransform = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$utils$2f$keys$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformProps"].has(key);
                if (valueIsTransform && this.onBindTransform) {
                    this.onBindTransform();
                }
                var removeOnChange = value.on("change", function(latestValue) {
                    _this.latestValues[key] = latestValue;
                    _this.props.onUpdate && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$frame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["frame"].preRender(_this.notifyUpdate);
                    if (valueIsTransform && _this.projection) {
                        _this.projection.isTransformDirty = true;
                    }
                    _this.scheduleRender();
                });
                var removeSyncCheck;
                if (typeof window !== "undefined" && window.MotionCheckAppearSync) {
                    removeSyncCheck = window.MotionCheckAppearSync(this, key, value);
                }
                this.valueSubscriptions.set(key, function() {
                    removeOnChange();
                    if (removeSyncCheck) removeSyncCheck();
                    if (value.owner) value.stop();
                });
            }
        },
        {
            key: "sortNodePosition",
            value: function sortNodePosition(other) {
                /**
         * If these nodes aren't even of the same type we can't compare their depth.
         */ if (!this.current || !this.sortInstanceNodePosition || this.type !== other.type) {
                    return 0;
                }
                return this.sortInstanceNodePosition(this.current, other.current);
            }
        },
        {
            key: "updateFeatures",
            value: function updateFeatures() {
                var key = "animation";
                for(key in featureDefinitions){
                    var featureDefinition = featureDefinitions[key];
                    if (!featureDefinition) continue;
                    var isEnabled = featureDefinition.isEnabled, FeatureConstructor = featureDefinition.Feature;
                    /**
             * If this feature is enabled but not active, make a new instance.
             */ if (!this.features[key] && FeatureConstructor && isEnabled(this.props)) {
                        this.features[key] = new FeatureConstructor(this);
                    }
                    /**
             * If we have a feature, mount or update it.
             */ if (this.features[key]) {
                        var feature = this.features[key];
                        if (feature.isMounted) {
                            feature.update();
                        } else {
                            feature.mount();
                            feature.isMounted = true;
                        }
                    }
                }
            }
        },
        {
            key: "triggerBuild",
            value: function triggerBuild() {
                this.build(this.renderState, this.latestValues, this.props);
            }
        },
        {
            /**
     * Measure the current viewport box with or without transforms.
     * Only measures axis-aligned boxes, rotate and skew must be manually
     * removed with a re-render to work.
     */ key: "measureViewportBox",
            value: function measureViewportBox() {
                return this.current ? this.measureInstanceViewportBox(this.current, this.props) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$geometry$2f$models$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createBox"])();
            }
        },
        {
            key: "getStaticValue",
            value: function getStaticValue(key) {
                return this.latestValues[key];
            }
        },
        {
            key: "setStaticValue",
            value: function setStaticValue(key, value) {
                this.latestValues[key] = value;
            }
        },
        {
            /**
     * Update the provided props. Ensure any newly-added motion values are
     * added to our map, old ones removed, and listeners updated.
     */ key: "update",
            value: function update(props, presenceContext) {
                if (props.transformTemplate || this.props.transformTemplate) {
                    this.scheduleRender();
                }
                this.prevProps = this.props;
                this.props = props;
                this.prevPresenceContext = this.presenceContext;
                this.presenceContext = presenceContext;
                /**
         * Update prop event handlers ie onAnimationStart, onAnimationComplete
         */ for(var i = 0; i < propEventHandlers.length; i++){
                    var key = propEventHandlers[i];
                    if (this.propEventSubscriptions[key]) {
                        this.propEventSubscriptions[key]();
                        delete this.propEventSubscriptions[key];
                    }
                    var listenerName = "on" + key;
                    var listener = props[listenerName];
                    if (listener) {
                        this.propEventSubscriptions[key] = this.on(key, listener);
                    }
                }
                this.prevMotionValues = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$utils$2f$motion$2d$values$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateMotionValuesFromProps"])(this, this.scrapeMotionValuesFromProps(props, this.prevProps || {}, this), this.prevMotionValues);
                if (this.handleChildMotionValue) {
                    this.handleChildMotionValue();
                }
            }
        },
        {
            key: "getProps",
            value: function getProps() {
                return this.props;
            }
        },
        {
            /**
     * Returns the variant definition with a given name.
     */ key: "getVariant",
            value: function getVariant(name) {
                return this.props.variants ? this.props.variants[name] : undefined;
            }
        },
        {
            /**
     * Returns the defined default transition on this component.
     */ key: "getDefaultTransition",
            value: function getDefaultTransition() {
                return this.props.transition;
            }
        },
        {
            key: "getTransformPagePoint",
            value: function getTransformPagePoint() {
                return this.props.transformPagePoint;
            }
        },
        {
            key: "getClosestVariantNode",
            value: function getClosestVariantNode() {
                return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : undefined;
            }
        },
        {
            /**
     * Add a child visual element to our set of children.
     */ key: "addVariantChild",
            value: function addVariantChild(child) {
                var closestVariantNode = this.getClosestVariantNode();
                if (closestVariantNode) {
                    closestVariantNode.variantChildren && closestVariantNode.variantChildren.add(child);
                    return function() {
                        return closestVariantNode.variantChildren.delete(child);
                    };
                }
            }
        },
        {
            /**
     * Add a motion value and bind it to this visual element.
     */ key: "addValue",
            value: function addValue(key, value) {
                // Remove existing value if it exists
                var existingValue = this.values.get(key);
                if (value !== existingValue) {
                    if (existingValue) this.removeValue(key);
                    this.bindToMotionValue(key, value);
                    this.values.set(key, value);
                    this.latestValues[key] = value.get();
                }
            }
        },
        {
            /**
     * Remove a motion value and unbind any active subscriptions.
     */ key: "removeValue",
            value: function removeValue(key) {
                this.values.delete(key);
                var unsubscribe = this.valueSubscriptions.get(key);
                if (unsubscribe) {
                    unsubscribe();
                    this.valueSubscriptions.delete(key);
                }
                delete this.latestValues[key];
                this.removeValueFromRenderState(key, this.renderState);
            }
        },
        {
            /**
     * Check whether we have a motion value for this key
     */ key: "hasValue",
            value: function hasValue(key) {
                return this.values.has(key);
            }
        },
        {
            key: "getValue",
            value: function getValue(key, defaultValue) {
                if (this.props.values && this.props.values[key]) {
                    return this.props.values[key];
                }
                var value = this.values.get(key);
                if (value === undefined && defaultValue !== undefined) {
                    value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motionValue"])(defaultValue === null ? undefined : defaultValue, {
                        owner: this
                    });
                    this.addValue(key, value);
                }
                return value;
            }
        },
        {
            /**
     * If we're trying to animate to a previously unencountered value,
     * we need to check for it in our state and as a last resort read it
     * directly from the instance (which might have performance implications).
     */ key: "readValue",
            value: function readValue(key, target) {
                var _this_getBaseTargetFromProps;
                var value = this.latestValues[key] !== undefined || !this.current ? this.latestValues[key] : (_this_getBaseTargetFromProps = this.getBaseTargetFromProps(this.props, key)) !== null && _this_getBaseTargetFromProps !== void 0 ? _this_getBaseTargetFromProps : this.readValueFromInstance(this.current, key, this.options);
                if (value !== undefined && value !== null) {
                    if (typeof value === "string" && ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$29$2e$2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$is$2d$numerical$2d$string$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNumericalString"])(value) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$29$2e$2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$is$2d$zero$2d$value$2d$string$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isZeroValueString"])(value))) {
                        // If this is a number read as a string, ie "0" or "200", convert it to a number
                        value = parseFloat(value);
                    } else if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$utils$2f$find$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findValueType"])(value) && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$complex$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["complex"].test(target)) {
                        value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$utils$2f$animatable$2d$none$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAnimatableNone"])(key, target);
                    }
                    this.setBaseTarget(key, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$utils$2f$is$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isMotionValue"])(value) ? value.get() : value);
                }
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$utils$2f$is$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isMotionValue"])(value) ? value.get() : value;
            }
        },
        {
            /**
     * Set the base target to later animate back to. This is currently
     * only hydrated on creation and when we first read a value.
     */ key: "setBaseTarget",
            value: function setBaseTarget(key, value) {
                this.baseTarget[key] = value;
            }
        },
        {
            /**
     * Find the base target for a value thats been removed from all animation
     * props.
     */ key: "getBaseTarget",
            value: function getBaseTarget(key) {
                var initial = this.props.initial;
                var valueFromInitial;
                if (typeof initial === "string" || (typeof initial === "undefined" ? "undefined" : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(initial)) === "object") {
                    var _this_presenceContext;
                    var variant = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$utils$2f$resolve$2d$variants$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveVariantFromProps"])(this.props, initial, (_this_presenceContext = this.presenceContext) === null || _this_presenceContext === void 0 ? void 0 : _this_presenceContext.custom);
                    if (variant) {
                        valueFromInitial = variant[key];
                    }
                }
                /**
         * If this value still exists in the current initial variant, read that.
         */ if (initial && valueFromInitial !== undefined) {
                    return valueFromInitial;
                }
                /**
         * Alternatively, if this VisualElement config has defined a getBaseTarget
         * so we can read the value from an alternative source, try that.
         */ var target = this.getBaseTargetFromProps(this.props, key);
                if (target !== undefined && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$utils$2f$is$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isMotionValue"])(target)) return target;
                /**
         * If the value was initially defined on initial, but it doesn't any more,
         * return undefined. Otherwise return the value as initially read from the DOM.
         */ return this.initialValues[key] !== undefined && valueFromInitial === undefined ? undefined : this.baseTarget[key];
            }
        },
        {
            key: "on",
            value: function on(eventName, callback) {
                if (!this.events[eventName]) {
                    this.events[eventName] = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$29$2e$2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$subscription$2d$manager$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SubscriptionManager"]();
                }
                return this.events[eventName].add(callback);
            }
        },
        {
            key: "notify",
            value: function notify(eventName) {
                for(var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
                    args[_key - 1] = arguments[_key];
                }
                if (this.events[eventName]) {
                    var _this_events_eventName;
                    (_this_events_eventName = this.events[eventName]).notify.apply(_this_events_eventName, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_to_consumable_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(args));
                }
            }
        },
        {
            key: "scheduleRenderMicrotask",
            value: function scheduleRenderMicrotask() {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$microtask$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["microtask"].render(this.render);
            }
        }
    ]);
    return VisualElement;
}();
;
 //# sourceMappingURL=VisualElement.mjs.map
}),
"[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/render/dom/DOMVisualElement.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DOMVisualElement",
    ()=>DOMVisualElement
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_call_super$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_call_super.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_call_check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_class_call_check.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_create_class$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_create_class.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_inherits$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_inherits.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$utils$2f$is$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/value/utils/is-motion-value.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$keyframes$2f$DOMKeyframesResolver$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/animation/keyframes/DOMKeyframesResolver.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$VisualElement$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/render/VisualElement.mjs [app-client] (ecmascript)");
;
;
;
;
;
;
;
var DOMVisualElement = /*#__PURE__*/ function(VisualElement) {
    "use strict";
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_inherits$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(DOMVisualElement, VisualElement);
    function DOMVisualElement() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_call_check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, DOMVisualElement);
        var _this;
        _this = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_call_super$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, DOMVisualElement, arguments);
        _this.KeyframeResolver = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$keyframes$2f$DOMKeyframesResolver$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DOMKeyframesResolver"];
        return _this;
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_create_class$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(DOMVisualElement, [
        {
            key: "sortInstanceNodePosition",
            value: function sortInstanceNodePosition(a, b) {
                /**
         * compareDocumentPosition returns a bitmask, by using the bitwise &
         * we're returning true if 2 in that bitmask is set to true. 2 is set
         * to true if b preceeds a.
         */ return a.compareDocumentPosition(b) & 2 ? 1 : -1;
            }
        },
        {
            key: "getBaseTargetFromProps",
            value: function getBaseTargetFromProps(props, key) {
                var style = props.style;
                return style ? style[key] : undefined;
            }
        },
        {
            key: "removeValueFromRenderState",
            value: function removeValueFromRenderState(key, param) {
                var vars = param.vars, style = param.style;
                delete vars[key];
                delete style[key];
            }
        },
        {
            key: "handleChildMotionValue",
            value: function handleChildMotionValue() {
                var _this = this;
                if (this.childSubscription) {
                    this.childSubscription();
                    delete this.childSubscription;
                }
                var children = this.props.children;
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$utils$2f$is$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isMotionValue"])(children)) {
                    this.childSubscription = children.on("change", function(latest) {
                        if (_this.current) {
                            _this.current.textContent = "".concat(latest);
                        }
                    });
                }
            }
        }
    ]);
    return DOMVisualElement;
}(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$VisualElement$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VisualElement"]);
;
 //# sourceMappingURL=DOMVisualElement.mjs.map
}),
"[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/render/dom/utils/camel-to-dash.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "camelToDash",
    ()=>camelToDash
]);
function camelToDash(str) {
    return str.replace(/([A-Z])/g, function(match) {
        return "-".concat(match.toLowerCase());
    });
}
;
 //# sourceMappingURL=camel-to-dash.mjs.map
}),
"[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/value/types/utils/get-as-type.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getValueAsType",
    ()=>getValueAsType
]);
/**
 * Provided a value and a ValueType, returns the value as that value type.
 */ var getValueAsType = function(value, type) {
    return type && typeof value === "number" ? type.transform(value) : value;
};
;
 //# sourceMappingURL=get-as-type.mjs.map
}),
"[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/render/html/utils/build-transform.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "buildTransform",
    ()=>buildTransform
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$utils$2f$get$2d$as$2d$type$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/value/types/utils/get-as-type.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$maps$2f$number$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/value/types/maps/number.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$utils$2f$keys$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/render/utils/keys-transform.mjs [app-client] (ecmascript)");
;
;
;
var translateAlias = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective"
};
var numTransforms = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$utils$2f$keys$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformPropOrder"].length;
/**
 * Build a CSS transform style from individual x/y/scale etc properties.
 *
 * This outputs with a default order of transforms/scales/rotations, this can be customised by
 * providing a transformTemplate function.
 */ function buildTransform(latestValues, transform, transformTemplate) {
    // The transform string we're going to build into.
    var transformString = "";
    var transformIsDefault = true;
    /**
     * Loop over all possible transforms in order, adding the ones that
     * are present to the transform string.
     */ for(var i = 0; i < numTransforms; i++){
        var key = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$utils$2f$keys$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformPropOrder"][i];
        var value = latestValues[key];
        if (value === undefined) continue;
        var valueIsDefault = true;
        if (typeof value === "number") {
            valueIsDefault = value === (key.startsWith("scale") ? 1 : 0);
        } else {
            var parsed = parseFloat(value);
            valueIsDefault = key.startsWith("scale") ? parsed === 1 : parsed === 0;
        }
        if (!valueIsDefault || transformTemplate) {
            var valueAsType = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$utils$2f$get$2d$as$2d$type$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getValueAsType"])(value, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$maps$2f$number$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["numberValueTypes"][key]);
            if (!valueIsDefault) {
                transformIsDefault = false;
                var transformName = translateAlias[key] || key;
                transformString += "".concat(transformName, "(").concat(valueAsType, ") ");
            }
            if (transformTemplate) {
                transform[key] = valueAsType;
            }
        }
    }
    transformString = transformString.trim();
    // If we have a custom `transform` template, pass our transform values and
    // generated transformString to that before returning
    if (transformTemplate) {
        transformString = transformTemplate(transform, transformIsDefault ? "" : transformString);
    } else if (transformIsDefault) {
        transformString = "none";
    }
    return transformString;
}
;
 //# sourceMappingURL=build-transform.mjs.map
}),
"[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/render/html/utils/build-styles.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "buildHTMLStyles",
    ()=>buildHTMLStyles
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$utils$2f$get$2d$as$2d$type$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/value/types/utils/get-as-type.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$maps$2f$number$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/value/types/maps/number.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$utils$2f$keys$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/render/utils/keys-transform.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$utils$2f$is$2d$css$2d$variable$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/animation/utils/is-css-variable.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$html$2f$utils$2f$build$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/render/html/utils/build-transform.mjs [app-client] (ecmascript)");
;
;
;
;
;
function buildHTMLStyles(state, latestValues, transformTemplate) {
    var style = state.style, vars = state.vars, transformOrigin = state.transformOrigin;
    // Track whether we encounter any transform or transformOrigin values.
    var hasTransform = false;
    var hasTransformOrigin = false;
    /**
     * Loop over all our latest animated values and decide whether to handle them
     * as a style or CSS variable.
     *
     * Transforms and transform origins are kept separately for further processing.
     */ for(var key in latestValues){
        var value = latestValues[key];
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$utils$2f$keys$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformProps"].has(key)) {
            // If this is a transform, flag to enable further transform processing
            hasTransform = true;
            continue;
        } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$utils$2f$is$2d$css$2d$variable$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isCSSVariableName"])(key)) {
            vars[key] = value;
            continue;
        } else {
            // Convert the value to its default value type, ie 0 -> "0px"
            var valueAsType = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$utils$2f$get$2d$as$2d$type$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getValueAsType"])(value, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$maps$2f$number$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["numberValueTypes"][key]);
            if (key.startsWith("origin")) {
                // If this is a transform origin, flag and enable further transform-origin processing
                hasTransformOrigin = true;
                transformOrigin[key] = valueAsType;
            } else {
                style[key] = valueAsType;
            }
        }
    }
    if (!latestValues.transform) {
        if (hasTransform || transformTemplate) {
            style.transform = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$html$2f$utils$2f$build$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildTransform"])(latestValues, state.transform, transformTemplate);
        } else if (style.transform) {
            /**
             * If we have previously created a transform but currently don't have any,
             * reset transform style to none.
             */ style.transform = "none";
        }
    }
    /**
     * Build a transformOrigin style. Uses the same defaults as the browser for
     * undefined origins.
     */ if (hasTransformOrigin) {
        var _transformOrigin_originX = transformOrigin.originX, originX = _transformOrigin_originX === void 0 ? "50%" : _transformOrigin_originX, _transformOrigin_originY = transformOrigin.originY, originY = _transformOrigin_originY === void 0 ? "50%" : _transformOrigin_originY, _transformOrigin_originZ = transformOrigin.originZ, originZ = _transformOrigin_originZ === void 0 ? 0 : _transformOrigin_originZ;
        style.transformOrigin = "".concat(originX, " ").concat(originY, " ").concat(originZ);
    }
}
;
 //# sourceMappingURL=build-styles.mjs.map
}),
"[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/render/svg/utils/path.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "buildSVGPath",
    ()=>buildSVGPath
]);
var dashKeys = {
    offset: "stroke-dashoffset",
    array: "stroke-dasharray"
};
var camelKeys = {
    offset: "strokeDashoffset",
    array: "strokeDasharray"
};
/**
 * Build SVG path properties. Uses the path's measured length to convert
 * our custom pathLength, pathSpacing and pathOffset into stroke-dashoffset
 * and stroke-dasharray attributes.
 *
 * This function is mutative to reduce per-frame GC.
 *
 * Note: We use unitless values for stroke-dasharray and stroke-dashoffset
 * because Safari incorrectly scales px values when the page is zoomed.
 */ function buildSVGPath(attrs, length) {
    var spacing = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1, offset = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0, useDashCase = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : true;
    // Normalise path length by setting SVG attribute pathLength to 1
    attrs.pathLength = 1;
    // We use dash case when setting attributes directly to the DOM node and camel case
    // when defining props on a React component.
    var keys = useDashCase ? dashKeys : camelKeys;
    // Build the dash offset (unitless to avoid Safari zoom bug)
    attrs[keys.offset] = "".concat(-offset);
    // Build the dash array (unitless to avoid Safari zoom bug)
    attrs[keys.array] = "".concat(length, " ").concat(spacing);
}
;
 //# sourceMappingURL=path.mjs.map
}),
"[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/render/svg/utils/build-attrs.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "buildSVGAttrs",
    ()=>buildSVGAttrs
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_without_properties$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_object_without_properties.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_sliced_to_array.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_to_array.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$html$2f$utils$2f$build$2d$styles$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/render/html/utils/build-styles.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$svg$2f$utils$2f$path$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/render/svg/utils/path.mjs [app-client] (ecmascript)");
;
;
;
;
;
/**
 * CSS Motion Path properties that should remain as CSS styles on SVG elements.
 */ var cssMotionPathProperties = [
    "offsetDistance",
    "offsetPath",
    "offsetRotate",
    "offsetAnchor"
];
/**
 * Build SVG visual attributes, like cx and style.transform
 */ function buildSVGAttrs(state, _1, _2, _3, _4) {
    var _ref = [
        _1,
        _2,
        _3,
        _4
    ], _ref1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(_ref), _ref2 = _ref1[0], _rest = _ref1.slice(1), attrX = _ref2.attrX, attrY = _ref2.attrY, attrScale = _ref2.attrScale, pathLength = _ref2.pathLength, _ref_pathSpacing = _ref2.pathSpacing, pathSpacing = _ref_pathSpacing === void 0 ? 1 : _ref_pathSpacing, _ref_pathOffset = _ref2.pathOffset, pathOffset = _ref_pathOffset === void 0 ? 0 : _ref_pathOffset, latest = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_without_properties$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(_ref2, [
        "attrX",
        "attrY",
        "attrScale",
        "pathLength",
        "pathSpacing",
        "pathOffset"
    ]), _rest1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(_rest), isSVGTag = _rest1[0], _rest2 = _rest1.slice(1), _rest3 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(_rest2), transformTemplate = _rest3[0], _rest4 = _rest3.slice(1), _rest5 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(_rest4, 1), styleProp = _rest5[0];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$html$2f$utils$2f$build$2d$styles$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildHTMLStyles"])(state, latest, transformTemplate);
    /**
     * For svg tags we just want to make sure viewBox is animatable and treat all the styles
     * as normal HTML tags.
     */ if (isSVGTag) {
        if (state.style.viewBox) {
            state.attrs.viewBox = state.style.viewBox;
        }
        return;
    }
    state.attrs = state.style;
    state.style = {};
    var attrs = state.attrs, style = state.style;
    /**
     * However, we apply transforms as CSS transforms.
     * So if we detect a transform, transformOrigin we take it from attrs and copy it into style.
     */ if (attrs.transform) {
        style.transform = attrs.transform;
        delete attrs.transform;
    }
    if (style.transform || attrs.transformOrigin) {
        var _attrs_transformOrigin;
        style.transformOrigin = (_attrs_transformOrigin = attrs.transformOrigin) !== null && _attrs_transformOrigin !== void 0 ? _attrs_transformOrigin : "50% 50%";
        delete attrs.transformOrigin;
    }
    if (style.transform) {
        var _ref3;
        /**
         * SVG's element transform-origin uses its own median as a reference.
         * Therefore, transformBox becomes a fill-box
         */ style.transformBox = (_ref3 = styleProp === null || styleProp === void 0 ? void 0 : styleProp.transformBox) !== null && _ref3 !== void 0 ? _ref3 : "fill-box";
        delete attrs.transformBox;
    }
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = cssMotionPathProperties[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var key = _step.value;
            if (attrs[key] !== undefined) {
                style[key] = attrs[key];
                delete attrs[key];
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
    // Render attrX/attrY/attrScale as attributes
    if (attrX !== undefined) attrs.x = attrX;
    if (attrY !== undefined) attrs.y = attrY;
    if (attrScale !== undefined) attrs.scale = attrScale;
    // Build SVG path if one has been defined
    if (pathLength !== undefined) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$svg$2f$utils$2f$path$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildSVGPath"])(attrs, pathLength, pathSpacing, pathOffset, false);
    }
}
;
 //# sourceMappingURL=build-attrs.mjs.map
}),
"[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/render/svg/utils/camel-case-attrs.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "camelCaseAttributes",
    ()=>camelCaseAttributes
]);
/**
 * A set of attribute names that are always read/written as camel case.
 */ var camelCaseAttributes = new Set([
    "baseFrequency",
    "diffuseConstant",
    "kernelMatrix",
    "kernelUnitLength",
    "keySplines",
    "keyTimes",
    "limitingConeAngle",
    "markerHeight",
    "markerWidth",
    "numOctaves",
    "targetX",
    "targetY",
    "surfaceScale",
    "specularConstant",
    "specularExponent",
    "stdDeviation",
    "tableValues",
    "viewBox",
    "gradientTransform",
    "pathLength",
    "startOffset",
    "textLength",
    "lengthAdjust"
]);
;
 //# sourceMappingURL=camel-case-attrs.mjs.map
}),
"[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/render/svg/utils/is-svg-tag.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isSVGTag",
    ()=>isSVGTag
]);
var isSVGTag = function(tag) {
    return typeof tag === "string" && tag.toLowerCase() === "svg";
};
;
 //# sourceMappingURL=is-svg-tag.mjs.map
}),
"[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/render/html/utils/render.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "renderHTML",
    ()=>renderHTML
]);
function renderHTML(element, param, styleProp, projection) {
    var style = param.style, vars = param.vars;
    var elementStyle = element.style;
    var key;
    for(key in style){
        // CSSStyleDeclaration has [index: number]: string; in the types, so we use that as key type.
        elementStyle[key] = style[key];
    }
    // Write projection styles directly to element style
    projection === null || projection === void 0 ? void 0 : projection.applyProjectionStyles(elementStyle, styleProp);
    for(key in vars){
        // Loop over any CSS variables and assign those.
        // They can only be assigned using `setProperty`.
        elementStyle.setProperty(key, vars[key]);
    }
}
;
 //# sourceMappingURL=render.mjs.map
}),
"[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/render/svg/utils/render.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "renderSVG",
    ()=>renderSVG
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$dom$2f$utils$2f$camel$2d$to$2d$dash$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/render/dom/utils/camel-to-dash.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$html$2f$utils$2f$render$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/render/html/utils/render.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$svg$2f$utils$2f$camel$2d$case$2d$attrs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/render/svg/utils/camel-case-attrs.mjs [app-client] (ecmascript)");
;
;
;
function renderSVG(element, renderState, _styleProp, projection) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$html$2f$utils$2f$render$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renderHTML"])(element, renderState, undefined, projection);
    for(var key in renderState.attrs){
        element.setAttribute(!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$svg$2f$utils$2f$camel$2d$case$2d$attrs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["camelCaseAttributes"].has(key) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$dom$2f$utils$2f$camel$2d$to$2d$dash$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["camelToDash"])(key) : key, renderState.attrs[key]);
    }
}
;
 //# sourceMappingURL=render.mjs.map
}),
"[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/projection/styles/scale-border-radius.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "correctBorderRadius",
    ()=>correctBorderRadius,
    "pixelsToPercent",
    ()=>pixelsToPercent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$numbers$2f$units$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/value/types/numbers/units.mjs [app-client] (ecmascript)");
;
function pixelsToPercent(pixels, axis) {
    if (axis.max === axis.min) return 0;
    return pixels / (axis.max - axis.min) * 100;
}
/**
 * We always correct borderRadius as a percentage rather than pixels to reduce paints.
 * For example, if you are projecting a box that is 100px wide with a 10px borderRadius
 * into a box that is 200px wide with a 20px borderRadius, that is actually a 10%
 * borderRadius in both states. If we animate between the two in pixels that will trigger
 * a paint each time. If we animate between the two in percentage we'll avoid a paint.
 */ var correctBorderRadius = {
    correct: function(latest, node) {
        if (!node.target) return latest;
        /**
         * If latest is a string, if it's a percentage we can return immediately as it's
         * going to be stretched appropriately. Otherwise, if it's a pixel, convert it to a number.
         */ if (typeof latest === "string") {
            if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$numbers$2f$units$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["px"].test(latest)) {
                latest = parseFloat(latest);
            } else {
                return latest;
            }
        }
        /**
         * If latest is a number, it's a pixel value. We use the current viewportBox to calculate that
         * pixel value as a percentage of each axis
         */ var x = pixelsToPercent(latest, node.target.x);
        var y = pixelsToPercent(latest, node.target.y);
        return "".concat(x, "% ").concat(y, "%");
    }
};
;
 //# sourceMappingURL=scale-border-radius.mjs.map
}),
"[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/utils/mix/number.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "mixNumber",
    ()=>mixNumber
]);
/*
  Value in range from progress

  Given a lower limit and an upper limit, we return the value within
  that range as expressed by progress (usually a number from 0 to 1)

  So progress = 0.5 would change

  from -------- to

  to

  from ---- to

  E.g. from = 10, to = 20, progress = 0.5 => 15

  @param [number]: Lower limit of range
  @param [number]: Upper limit of range
  @param [number]: The progress between lower and upper limits expressed 0-1
  @return [number]: Value as calculated from progress within range (not limited within range)
*/ var mixNumber = function(from, to, progress) {
    return from + (to - from) * progress;
};
;
 //# sourceMappingURL=number.mjs.map
}),
"[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/projection/styles/scale-box-shadow.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "correctBoxShadow",
    ()=>correctBoxShadow
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$complex$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/value/types/complex/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$mix$2f$number$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/utils/mix/number.mjs [app-client] (ecmascript)");
;
;
var correctBoxShadow = {
    correct: function(latest, param) {
        var treeScale = param.treeScale, projectionDelta = param.projectionDelta;
        var original = latest;
        var shadow = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$complex$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["complex"].parse(latest);
        // TODO: Doesn't support multiple shadows
        if (shadow.length > 5) return original;
        var template = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$complex$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["complex"].createTransformer(latest);
        var offset = typeof shadow[0] !== "number" ? 1 : 0;
        // Calculate the overall context scale
        var xScale = projectionDelta.x.scale * treeScale.x;
        var yScale = projectionDelta.y.scale * treeScale.y;
        shadow[0 + offset] /= xScale;
        shadow[1 + offset] /= yScale;
        /**
         * Ideally we'd correct x and y scales individually, but because blur and
         * spread apply to both we have to take a scale average and apply that instead.
         * We could potentially improve the outcome of this by incorporating the ratio between
         * the two scales.
         */ var averageScale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$mix$2f$number$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mixNumber"])(xScale, yScale, 0.5);
        // Blur
        if (typeof shadow[2 + offset] === "number") shadow[2 + offset] /= averageScale;
        // Spread
        if (typeof shadow[3 + offset] === "number") shadow[3 + offset] /= averageScale;
        return template(shadow);
    }
};
;
 //# sourceMappingURL=scale-box-shadow.mjs.map
}),
"[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/projection/styles/scale-correction.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "addScaleCorrector",
    ()=>addScaleCorrector,
    "scaleCorrectors",
    ()=>scaleCorrectors
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_object_spread.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_object_spread_props.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$utils$2f$is$2d$css$2d$variable$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/animation/utils/is-css-variable.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$styles$2f$scale$2d$border$2d$radius$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/projection/styles/scale-border-radius.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$styles$2f$scale$2d$box$2d$shadow$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/projection/styles/scale-box-shadow.mjs [app-client] (ecmascript)");
;
;
;
;
;
var scaleCorrectors = {
    borderRadius: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$styles$2f$scale$2d$border$2d$radius$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["correctBorderRadius"]), {
        applyTo: [
            "borderTopLeftRadius",
            "borderTopRightRadius",
            "borderBottomLeftRadius",
            "borderBottomRightRadius"
        ]
    }),
    borderTopLeftRadius: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$styles$2f$scale$2d$border$2d$radius$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["correctBorderRadius"],
    borderTopRightRadius: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$styles$2f$scale$2d$border$2d$radius$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["correctBorderRadius"],
    borderBottomLeftRadius: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$styles$2f$scale$2d$border$2d$radius$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["correctBorderRadius"],
    borderBottomRightRadius: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$styles$2f$scale$2d$border$2d$radius$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["correctBorderRadius"],
    boxShadow: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$styles$2f$scale$2d$box$2d$shadow$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["correctBoxShadow"]
};
function addScaleCorrector(correctors) {
    for(var key in correctors){
        scaleCorrectors[key] = correctors[key];
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$utils$2f$is$2d$css$2d$variable$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isCSSVariableName"])(key)) {
            scaleCorrectors[key].isCSSVariable = true;
        }
    }
}
;
 //# sourceMappingURL=scale-correction.mjs.map
}),
"[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/render/utils/is-forced-motion-value.mjs [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isForcedMotionValue",
    ()=>isForcedMotionValue
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$utils$2f$keys$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/render/utils/keys-transform.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$styles$2f$scale$2d$correction$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/projection/styles/scale-correction.mjs [app-client] (ecmascript)");
;
;
;
function isForcedMotionValue(key, param) {
    var layout = param.layout, layoutId = param.layoutId;
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$utils$2f$keys$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformProps"].has(key) || key.startsWith("origin") || (layout || layoutId !== undefined) && (!!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$styles$2f$scale$2d$correction$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scaleCorrectors"][key] || key === "opacity");
}
;
 //# sourceMappingURL=is-forced-motion-value.mjs.map
}),
"[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/render/html/utils/scrape-motion-values.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "scrapeMotionValuesFromProps",
    ()=>scrapeMotionValuesFromProps
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$utils$2f$is$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/value/utils/is-motion-value.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$utils$2f$is$2d$forced$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/render/utils/is-forced-motion-value.mjs [app-client] (ecmascript) <locals>");
;
;
function scrapeMotionValuesFromProps(props, prevProps, visualElement) {
    var style = props.style;
    var prevStyle = prevProps === null || prevProps === void 0 ? void 0 : prevProps.style;
    var newValues = {};
    if (!style) return newValues;
    for(var key in style){
        var _visualElement_getValue;
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$utils$2f$is$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isMotionValue"])(style[key]) || prevStyle && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$utils$2f$is$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isMotionValue"])(prevStyle[key]) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$utils$2f$is$2d$forced$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["isForcedMotionValue"])(key, props) || (visualElement === null || visualElement === void 0 ? void 0 : (_visualElement_getValue = visualElement.getValue(key)) === null || _visualElement_getValue === void 0 ? void 0 : _visualElement_getValue.liveStyle) !== undefined) {
            newValues[key] = style[key];
        }
    }
    return newValues;
}
;
 //# sourceMappingURL=scrape-motion-values.mjs.map
}),
"[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/render/svg/utils/scrape-motion-values.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "scrapeMotionValuesFromProps",
    ()=>scrapeMotionValuesFromProps
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$utils$2f$is$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/value/utils/is-motion-value.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$utils$2f$keys$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/render/utils/keys-transform.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$html$2f$utils$2f$scrape$2d$motion$2d$values$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/render/html/utils/scrape-motion-values.mjs [app-client] (ecmascript)");
;
;
;
function scrapeMotionValuesFromProps(props, prevProps, visualElement) {
    var newValues = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$html$2f$utils$2f$scrape$2d$motion$2d$values$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scrapeMotionValuesFromProps"])(props, prevProps, visualElement);
    for(var key in props){
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$utils$2f$is$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isMotionValue"])(props[key]) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$utils$2f$is$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isMotionValue"])(prevProps[key])) {
            var targetKey = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$utils$2f$keys$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformPropOrder"].indexOf(key) !== -1 ? "attr" + key.charAt(0).toUpperCase() + key.substring(1) : key;
            newValues[targetKey] = props[key];
        }
    }
    return newValues;
}
;
 //# sourceMappingURL=scrape-motion-values.mjs.map
}),
"[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/render/svg/SVGVisualElement.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SVGVisualElement",
    ()=>SVGVisualElement
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_call_super$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_call_super.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_call_check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_class_call_check.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_create_class$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_create_class.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_get.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_get_prototype_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_get_prototype_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_inherits$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_inherits.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$utils$2f$keys$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/render/utils/keys-transform.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$maps$2f$defaults$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/value/types/maps/defaults.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$geometry$2f$models$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/projection/geometry/models.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$dom$2f$DOMVisualElement$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/render/dom/DOMVisualElement.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$dom$2f$utils$2f$camel$2d$to$2d$dash$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/render/dom/utils/camel-to-dash.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$svg$2f$utils$2f$build$2d$attrs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/render/svg/utils/build-attrs.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$svg$2f$utils$2f$camel$2d$case$2d$attrs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/render/svg/utils/camel-case-attrs.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$svg$2f$utils$2f$is$2d$svg$2d$tag$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/render/svg/utils/is-svg-tag.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$svg$2f$utils$2f$render$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/render/svg/utils/render.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$svg$2f$utils$2f$scrape$2d$motion$2d$values$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/render/svg/utils/scrape-motion-values.mjs [app-client] (ecmascript)");
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
var SVGVisualElement = /*#__PURE__*/ function(DOMVisualElement) {
    "use strict";
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_inherits$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(SVGVisualElement, DOMVisualElement);
    function SVGVisualElement() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_call_check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, SVGVisualElement);
        var _this;
        _this = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_call_super$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, SVGVisualElement, arguments);
        _this.type = "svg";
        _this.isSVGTag = false;
        _this.measureInstanceViewportBox = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$geometry$2f$models$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createBox"];
        return _this;
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_create_class$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(SVGVisualElement, [
        {
            key: "getBaseTargetFromProps",
            value: function getBaseTargetFromProps(props, key) {
                return props[key];
            }
        },
        {
            key: "readValueFromInstance",
            value: function readValueFromInstance(instance, key) {
                if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$utils$2f$keys$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformProps"].has(key)) {
                    var defaultType = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$maps$2f$defaults$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDefaultValueType"])(key);
                    return defaultType ? defaultType.default || 0 : 0;
                }
                key = !__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$svg$2f$utils$2f$camel$2d$case$2d$attrs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["camelCaseAttributes"].has(key) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$dom$2f$utils$2f$camel$2d$to$2d$dash$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["camelToDash"])(key) : key;
                return instance.getAttribute(key);
            }
        },
        {
            key: "scrapeMotionValuesFromProps",
            value: function scrapeMotionValuesFromProps(props, prevProps, visualElement) {
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$svg$2f$utils$2f$scrape$2d$motion$2d$values$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scrapeMotionValuesFromProps"])(props, prevProps, visualElement);
            }
        },
        {
            key: "build",
            value: function build(renderState, latestValues, props) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$svg$2f$utils$2f$build$2d$attrs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildSVGAttrs"])(renderState, latestValues, this.isSVGTag, props.transformTemplate, props.style);
            }
        },
        {
            key: "renderInstance",
            value: function renderInstance(instance, renderState, styleProp, projection) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$svg$2f$utils$2f$render$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renderSVG"])(instance, renderState, styleProp, projection);
            }
        },
        {
            key: "mount",
            value: function mount(instance) {
                this.isSVGTag = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$svg$2f$utils$2f$is$2d$svg$2d$tag$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isSVGTag"])(instance.tagName);
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_get_prototype_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(SVGVisualElement.prototype), "mount", this).call(this, instance);
            }
        }
    ]);
    return SVGVisualElement;
}(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$dom$2f$DOMVisualElement$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DOMVisualElement"]);
;
 //# sourceMappingURL=SVGVisualElement.mjs.map
}),
"[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/projection/geometry/conversion.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "convertBoundingBoxToBox",
    ()=>convertBoundingBoxToBox,
    "convertBoxToBoundingBox",
    ()=>convertBoxToBoundingBox,
    "transformBoxPoints",
    ()=>transformBoxPoints
]);
/**
 * Bounding boxes tend to be defined as top, left, right, bottom. For various operations
 * it's easier to consider each axis individually. This function returns a bounding box
 * as a map of single-axis min/max values.
 */ function convertBoundingBoxToBox(param) {
    var top = param.top, left = param.left, right = param.right, bottom = param.bottom;
    return {
        x: {
            min: left,
            max: right
        },
        y: {
            min: top,
            max: bottom
        }
    };
}
function convertBoxToBoundingBox(param) {
    var x = param.x, y = param.y;
    return {
        top: y.min,
        right: x.max,
        bottom: y.max,
        left: x.min
    };
}
/**
 * Applies a TransformPoint function to a bounding box. TransformPoint is usually a function
 * provided by Framer to allow measured points to be corrected for device scaling. This is used
 * when measuring DOM elements and DOM event points.
 */ function transformBoxPoints(point, transformPoint) {
    if (!transformPoint) return point;
    var topLeft = transformPoint({
        x: point.left,
        y: point.top
    });
    var bottomRight = transformPoint({
        x: point.right,
        y: point.bottom
    });
    return {
        top: topLeft.y,
        left: topLeft.x,
        bottom: bottomRight.y,
        right: bottomRight.x
    };
}
;
 //# sourceMappingURL=conversion.mjs.map
}),
"[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/projection/utils/has-transform.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "has2DTranslate",
    ()=>has2DTranslate,
    "hasScale",
    ()=>hasScale,
    "hasTransform",
    ()=>hasTransform
]);
function isIdentityScale(scale) {
    return scale === undefined || scale === 1;
}
function hasScale(param) {
    var scale = param.scale, scaleX = param.scaleX, scaleY = param.scaleY;
    return !isIdentityScale(scale) || !isIdentityScale(scaleX) || !isIdentityScale(scaleY);
}
function hasTransform(values) {
    return hasScale(values) || has2DTranslate(values) || values.z || values.rotate || values.rotateX || values.rotateY || values.skewX || values.skewY;
}
function has2DTranslate(values) {
    return is2DTranslate(values.x) || is2DTranslate(values.y);
}
function is2DTranslate(value) {
    return value && value !== "0%";
}
;
 //# sourceMappingURL=has-transform.mjs.map
}),
"[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/projection/geometry/delta-apply.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "applyAxisDelta",
    ()=>applyAxisDelta,
    "applyBoxDelta",
    ()=>applyBoxDelta,
    "applyPointDelta",
    ()=>applyPointDelta,
    "applyTreeDeltas",
    ()=>applyTreeDeltas,
    "scalePoint",
    ()=>scalePoint,
    "transformAxis",
    ()=>transformAxis,
    "transformBox",
    ()=>transformBox,
    "translateAxis",
    ()=>translateAxis
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$mix$2f$number$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/utils/mix/number.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$utils$2f$has$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/projection/utils/has-transform.mjs [app-client] (ecmascript)");
;
;
/**
 * Scales a point based on a factor and an originPoint
 */ function scalePoint(point, scale, originPoint) {
    var distanceFromOrigin = point - originPoint;
    var scaled = scale * distanceFromOrigin;
    return originPoint + scaled;
}
/**
 * Applies a translate/scale delta to a point
 */ function applyPointDelta(point, translate, scale, originPoint, boxScale) {
    if (boxScale !== undefined) {
        point = scalePoint(point, boxScale, originPoint);
    }
    return scalePoint(point, scale, originPoint) + translate;
}
/**
 * Applies a translate/scale delta to an axis
 */ function applyAxisDelta(axis) {
    var translate = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, scale = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1, originPoint = arguments.length > 3 ? arguments[3] : void 0, boxScale = arguments.length > 4 ? arguments[4] : void 0;
    axis.min = applyPointDelta(axis.min, translate, scale, originPoint, boxScale);
    axis.max = applyPointDelta(axis.max, translate, scale, originPoint, boxScale);
}
/**
 * Applies a translate/scale delta to a box
 */ function applyBoxDelta(box, param) {
    var x = param.x, y = param.y;
    applyAxisDelta(box.x, x.translate, x.scale, x.originPoint);
    applyAxisDelta(box.y, y.translate, y.scale, y.originPoint);
}
var TREE_SCALE_SNAP_MIN = 0.999999999999;
var TREE_SCALE_SNAP_MAX = 1.0000000000001;
/**
 * Apply a tree of deltas to a box. We do this to calculate the effect of all the transforms
 * in a tree upon our box before then calculating how to project it into our desired viewport-relative box
 *
 * This is the final nested loop within updateLayoutDelta for future refactoring
 */ function applyTreeDeltas(box, treeScale, treePath) {
    var isSharedTransition = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : false;
    var treeLength = treePath.length;
    if (!treeLength) return;
    // Reset the treeScale
    treeScale.x = treeScale.y = 1;
    var node;
    var delta;
    for(var i = 0; i < treeLength; i++){
        node = treePath[i];
        delta = node.projectionDelta;
        /**
         * TODO: Prefer to remove this, but currently we have motion components with
         * display: contents in Framer.
         */ var visualElement = node.options.visualElement;
        if (visualElement && visualElement.props.style && visualElement.props.style.display === "contents") {
            continue;
        }
        if (isSharedTransition && node.options.layoutScroll && node.scroll && node !== node.root) {
            transformBox(box, {
                x: -node.scroll.offset.x,
                y: -node.scroll.offset.y
            });
        }
        if (delta) {
            // Incoporate each ancestor's scale into a cumulative treeScale for this component
            treeScale.x *= delta.x.scale;
            treeScale.y *= delta.y.scale;
            // Apply each ancestor's calculated delta into this component's recorded layout box
            applyBoxDelta(box, delta);
        }
        if (isSharedTransition && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$utils$2f$has$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hasTransform"])(node.latestValues)) {
            transformBox(box, node.latestValues);
        }
    }
    /**
     * Snap tree scale back to 1 if it's within a non-perceivable threshold.
     * This will help reduce useless scales getting rendered.
     */ if (treeScale.x < TREE_SCALE_SNAP_MAX && treeScale.x > TREE_SCALE_SNAP_MIN) {
        treeScale.x = 1.0;
    }
    if (treeScale.y < TREE_SCALE_SNAP_MAX && treeScale.y > TREE_SCALE_SNAP_MIN) {
        treeScale.y = 1.0;
    }
}
function translateAxis(axis, distance) {
    axis.min = axis.min + distance;
    axis.max = axis.max + distance;
}
/**
 * Apply a transform to an axis from the latest resolved motion values.
 * This function basically acts as a bridge between a flat motion value map
 * and applyAxisDelta
 */ function transformAxis(axis, axisTranslate, axisScale, boxScale) {
    var axisOrigin = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : 0.5;
    var originPoint = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$mix$2f$number$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mixNumber"])(axis.min, axis.max, axisOrigin);
    // Apply the axis delta to the final axis
    applyAxisDelta(axis, axisTranslate, axisScale, originPoint, boxScale);
}
/**
 * Apply a transform to a box from the latest resolved motion values.
 */ function transformBox(box, transform) {
    transformAxis(box.x, transform.x, transform.scaleX, transform.scale, transform.originX);
    transformAxis(box.y, transform.y, transform.scaleY, transform.scale, transform.originY);
}
;
 //# sourceMappingURL=delta-apply.mjs.map
}),
"[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/projection/utils/measure.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "measurePageBox",
    ()=>measurePageBox,
    "measureViewportBox",
    ()=>measureViewportBox
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$geometry$2f$conversion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/projection/geometry/conversion.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$geometry$2f$delta$2d$apply$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/projection/geometry/delta-apply.mjs [app-client] (ecmascript)");
;
;
function measureViewportBox(instance, transformPoint) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$geometry$2f$conversion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["convertBoundingBoxToBox"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$geometry$2f$conversion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformBoxPoints"])(instance.getBoundingClientRect(), transformPoint));
}
function measurePageBox(element, rootProjectionNode, transformPagePoint) {
    var viewportBox = measureViewportBox(element, transformPagePoint);
    var scroll = rootProjectionNode.scroll;
    if (scroll) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$geometry$2f$delta$2d$apply$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["translateAxis"])(viewportBox.x, scroll.offset.x);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$geometry$2f$delta$2d$apply$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["translateAxis"])(viewportBox.y, scroll.offset.y);
    }
    return viewportBox;
}
;
 //# sourceMappingURL=measure.mjs.map
}),
"[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/render/html/HTMLVisualElement.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HTMLVisualElement",
    ()=>HTMLVisualElement,
    "getComputedStyle",
    ()=>getComputedStyle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_call_super$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_call_super.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_call_check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_class_call_check.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_create_class$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_create_class.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_inherits$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_inherits.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$utils$2f$is$2d$css$2d$variable$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/animation/utils/is-css-variable.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$utils$2f$keys$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/render/utils/keys-transform.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$dom$2f$parse$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/render/dom/parse-transform.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$utils$2f$measure$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/projection/utils/measure.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$dom$2f$DOMVisualElement$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/render/dom/DOMVisualElement.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$html$2f$utils$2f$build$2d$styles$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/render/html/utils/build-styles.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$html$2f$utils$2f$render$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/render/html/utils/render.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$html$2f$utils$2f$scrape$2d$motion$2d$values$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/render/html/utils/scrape-motion-values.mjs [app-client] (ecmascript)");
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
function getComputedStyle(element) {
    return window.getComputedStyle(element);
}
var HTMLVisualElement = /*#__PURE__*/ function(DOMVisualElement) {
    "use strict";
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_inherits$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(HTMLVisualElement, DOMVisualElement);
    function HTMLVisualElement() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_call_check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, HTMLVisualElement);
        var _this;
        _this = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_call_super$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, HTMLVisualElement, arguments);
        _this.type = "html";
        _this.renderInstance = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$html$2f$utils$2f$render$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renderHTML"];
        return _this;
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_create_class$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(HTMLVisualElement, [
        {
            key: "readValueFromInstance",
            value: function readValueFromInstance(instance, key) {
                if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$utils$2f$keys$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformProps"].has(key)) {
                    var _this_projection;
                    return ((_this_projection = this.projection) === null || _this_projection === void 0 ? void 0 : _this_projection.isProjecting) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$dom$2f$parse$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultTransformValue"])(key) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$dom$2f$parse$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["readTransformValue"])(instance, key);
                } else {
                    var computedStyle = getComputedStyle(instance);
                    var value = ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$utils$2f$is$2d$css$2d$variable$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isCSSVariableName"])(key) ? computedStyle.getPropertyValue(key) : computedStyle[key]) || 0;
                    return typeof value === "string" ? value.trim() : value;
                }
            }
        },
        {
            key: "measureInstanceViewportBox",
            value: function measureInstanceViewportBox(instance, param) {
                var transformPagePoint = param.transformPagePoint;
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$utils$2f$measure$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["measureViewportBox"])(instance, transformPagePoint);
            }
        },
        {
            key: "build",
            value: function build(renderState, latestValues, props) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$html$2f$utils$2f$build$2d$styles$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildHTMLStyles"])(renderState, latestValues, props.transformTemplate);
            }
        },
        {
            key: "scrapeMotionValuesFromProps",
            value: function scrapeMotionValuesFromProps(props, prevProps, visualElement) {
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$html$2f$utils$2f$scrape$2d$motion$2d$values$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scrapeMotionValuesFromProps"])(props, prevProps, visualElement);
            }
        }
    ]);
    return HTMLVisualElement;
}(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$dom$2f$DOMVisualElement$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DOMVisualElement"]);
;
 //# sourceMappingURL=HTMLVisualElement.mjs.map
}),
"[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/render/html/utils/scrape-motion-values.mjs [app-client] (ecmascript) <export scrapeMotionValuesFromProps as scrapeHTMLMotionValuesFromProps>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "scrapeHTMLMotionValuesFromProps",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$html$2f$utils$2f$scrape$2d$motion$2d$values$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scrapeMotionValuesFromProps"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$html$2f$utils$2f$scrape$2d$motion$2d$values$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/render/html/utils/scrape-motion-values.mjs [app-client] (ecmascript)");
}),
"[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/value/utils/resolve-motion-value.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "resolveMotionValue",
    ()=>resolveMotionValue
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$utils$2f$is$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/value/utils/is-motion-value.mjs [app-client] (ecmascript)");
;
/**
 * If the provided value is a MotionValue, this returns the actual value, otherwise just the value itself
 */ function resolveMotionValue(value) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$utils$2f$is$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isMotionValue"])(value) ? value.get() : value;
}
;
 //# sourceMappingURL=resolve-motion-value.mjs.map
}),
"[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/render/svg/utils/scrape-motion-values.mjs [app-client] (ecmascript) <export scrapeMotionValuesFromProps as scrapeSVGMotionValuesFromProps>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "scrapeSVGMotionValuesFromProps",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$svg$2f$utils$2f$scrape$2d$motion$2d$values$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scrapeMotionValuesFromProps"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$svg$2f$utils$2f$scrape$2d$motion$2d$values$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/render/svg/utils/scrape-motion-values.mjs [app-client] (ecmascript)");
}),
"[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/animation/optimized-appear/data-id.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "optimizedAppearDataAttribute",
    ()=>optimizedAppearDataAttribute,
    "optimizedAppearDataId",
    ()=>optimizedAppearDataId
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$dom$2f$utils$2f$camel$2d$to$2d$dash$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/render/dom/utils/camel-to-dash.mjs [app-client] (ecmascript)");
;
var optimizedAppearDataId = "framerAppearId";
var optimizedAppearDataAttribute = "data-" + (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$dom$2f$utils$2f$camel$2d$to$2d$dash$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["camelToDash"])(optimizedAppearDataId);
;
 //# sourceMappingURL=data-id.mjs.map
}),
"[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/render/Feature.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Feature",
    ()=>Feature
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_call_check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_class_call_check.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_create_class$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_create_class.js [app-client] (ecmascript)");
;
;
/**
 * Feature base class for extending VisualElement functionality.
 * Features are plugins that can be mounted/unmounted to add behavior
 * like gestures, animations, or layout tracking.
 */ var Feature = /*#__PURE__*/ function() {
    "use strict";
    function Feature(node) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_call_check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, Feature);
        this.isMounted = false;
        this.node = node;
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_create_class$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(Feature, [
        {
            key: "update",
            value: function update() {}
        }
    ]);
    return Feature;
}();
;
 //# sourceMappingURL=Feature.mjs.map
}),
"[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/render/utils/resolve-dynamic-variants.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "resolveVariant",
    ()=>resolveVariant
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$utils$2f$resolve$2d$variants$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/render/utils/resolve-variants.mjs [app-client] (ecmascript)");
;
function resolveVariant(visualElement, definition, custom) {
    var props = visualElement.getProps();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$utils$2f$resolve$2d$variants$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveVariantFromProps"])(props, definition, custom !== undefined ? custom : props.custom, visualElement);
}
;
 //# sourceMappingURL=resolve-dynamic-variants.mjs.map
}),
"[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/animation/utils/resolve-transition.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "resolveTransition",
    ()=>resolveTransition
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_object_spread.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_without_properties$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_object_without_properties.js [app-client] (ecmascript)");
;
;
/**
 * If `transition` has `inherit: true`, shallow-merge it with
 * `parentTransition` (child keys win) and strip the `inherit` key.
 * Otherwise return `transition` unchanged.
 */ function resolveTransition(transition, parentTransition) {
    if ((transition === null || transition === void 0 ? void 0 : transition.inherit) && parentTransition) {
        var _ = transition.inherit, rest = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_without_properties$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(transition, [
            "inherit"
        ]);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, parentTransition, rest);
    }
    return transition;
}
;
 //# sourceMappingURL=resolve-transition.mjs.map
}),
"[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/animation/utils/get-value-transition.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getValueTransition",
    ()=>getValueTransition
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$utils$2f$resolve$2d$transition$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/animation/utils/resolve-transition.mjs [app-client] (ecmascript)");
;
function getValueTransition(transition, key) {
    var _ref, _ref1;
    var valueTransition = (_ref = (_ref1 = transition === null || transition === void 0 ? void 0 : transition[key]) !== null && _ref1 !== void 0 ? _ref1 : transition === null || transition === void 0 ? void 0 : transition["default"]) !== null && _ref !== void 0 ? _ref : transition;
    if (valueTransition !== transition) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$utils$2f$resolve$2d$transition$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveTransition"])(valueTransition, transition);
    }
    return valueTransition;
}
;
 //# sourceMappingURL=get-value-transition.mjs.map
}),
"[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/render/utils/is-keyframes-target.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isKeyframesTarget",
    ()=>isKeyframesTarget
]);
var isKeyframesTarget = function(v) {
    return Array.isArray(v);
};
;
 //# sourceMappingURL=is-keyframes-target.mjs.map
}),
"[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/render/utils/setters.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "setTarget",
    ()=>setTarget
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_object_spread.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_without_properties$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_object_without_properties.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/value/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$utils$2f$resolve$2d$dynamic$2d$variants$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/render/utils/resolve-dynamic-variants.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$utils$2f$is$2d$keyframes$2d$target$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/render/utils/is-keyframes-target.mjs [app-client] (ecmascript)");
;
;
;
;
;
/**
 * Set VisualElement's MotionValue, creating a new MotionValue for it if
 * it doesn't exist.
 */ function setMotionValue(visualElement, key, value) {
    if (visualElement.hasValue(key)) {
        visualElement.getValue(key).set(value);
    } else {
        visualElement.addValue(key, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motionValue"])(value));
    }
}
function resolveFinalValueInKeyframes(v) {
    // TODO maybe throw if v.length - 1 is placeholder token?
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$utils$2f$is$2d$keyframes$2d$target$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isKeyframesTarget"])(v) ? v[v.length - 1] || 0 : v;
}
function setTarget(visualElement, definition) {
    var resolved = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$utils$2f$resolve$2d$dynamic$2d$variants$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveVariant"])(visualElement, definition);
    var _ref = resolved || {}, _ref_transitionEnd = _ref.transitionEnd, transitionEnd = _ref_transitionEnd === void 0 ? {} : _ref_transitionEnd, _ref_transition = _ref.transition, transition = _ref_transition === void 0 ? {} : _ref_transition, target = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_without_properties$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(_ref, [
        "transitionEnd",
        "transition"
    ]);
    target = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, target, transitionEnd);
    for(var key in target){
        var value = resolveFinalValueInKeyframes(target[key]);
        setMotionValue(visualElement, key, value);
    }
}
;
 //# sourceMappingURL=setters.mjs.map
}),
"[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/value/will-change/is.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isWillChangeMotionValue",
    ()=>isWillChangeMotionValue
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$utils$2f$is$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/value/utils/is-motion-value.mjs [app-client] (ecmascript)");
;
function isWillChangeMotionValue(value) {
    return Boolean((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$utils$2f$is$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isMotionValue"])(value) && value.add);
}
;
 //# sourceMappingURL=is.mjs.map
}),
"[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/value/will-change/add-will-change.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "addValueToWillChange",
    ()=>addValueToWillChange
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$29$2e$2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$global$2d$config$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-utils@12.29.2/node_modules/motion-utils/dist/es/global-config.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$will$2d$change$2f$is$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/value/will-change/is.mjs [app-client] (ecmascript)");
;
;
function addValueToWillChange(visualElement, key) {
    var willChange = visualElement.getValue("willChange");
    /**
     * It could be that a user has set willChange to a regular MotionValue,
     * in which case we can't add the value to it.
     */ if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$will$2d$change$2f$is$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isWillChangeMotionValue"])(willChange)) {
        return willChange.add(key);
    } else if (!willChange && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$29$2e$2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$global$2d$config$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MotionGlobalConfig"].WillChange) {
        var newWillChange = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$29$2e$2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$global$2d$config$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MotionGlobalConfig"].WillChange("auto");
        visualElement.addValue("willChange", newWillChange);
        newWillChange.add(key);
    }
}
;
 //# sourceMappingURL=add-will-change.mjs.map
}),
"[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/animation/optimized-appear/get-appear-id.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getOptimisedAppearId",
    ()=>getOptimisedAppearId
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$optimized$2d$appear$2f$data$2d$id$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/animation/optimized-appear/data-id.mjs [app-client] (ecmascript)");
;
function getOptimisedAppearId(visualElement) {
    return visualElement.props[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$optimized$2d$appear$2f$data$2d$id$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["optimizedAppearDataAttribute"]];
}
;
 //# sourceMappingURL=get-appear-id.mjs.map
}),
"[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/value/types/color/hsla-to-rgba.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "hslaToRgba",
    ()=>hslaToRgba
]);
// Adapted from https://gist.github.com/mjackson/5311256
function hueToRgb(p, q, t) {
    if (t < 0) t += 1;
    if (t > 1) t -= 1;
    if (t < 1 / 6) return p + (q - p) * 6 * t;
    if (t < 1 / 2) return q;
    if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
    return p;
}
function hslaToRgba(param) {
    var hue = param.hue, saturation = param.saturation, lightness = param.lightness, alpha = param.alpha;
    hue /= 360;
    saturation /= 100;
    lightness /= 100;
    var red = 0;
    var green = 0;
    var blue = 0;
    if (!saturation) {
        red = green = blue = lightness;
    } else {
        var q = lightness < 0.5 ? lightness * (1 + saturation) : lightness + saturation - lightness * saturation;
        var p = 2 * lightness - q;
        red = hueToRgb(p, q, hue + 1 / 3);
        green = hueToRgb(p, q, hue);
        blue = hueToRgb(p, q, hue - 1 / 3);
    }
    return {
        red: Math.round(red * 255),
        green: Math.round(green * 255),
        blue: Math.round(blue * 255),
        alpha: alpha
    };
}
;
 //# sourceMappingURL=hsla-to-rgba.mjs.map
}),
"[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/utils/mix/immediate.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "mixImmediate",
    ()=>mixImmediate
]);
function mixImmediate(a, b) {
    return function(p) {
        return p > 0 ? b : a;
    };
}
;
 //# sourceMappingURL=immediate.mjs.map
}),
"[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/utils/mix/color.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "mixColor",
    ()=>mixColor,
    "mixLinearColor",
    ()=>mixLinearColor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_object_spread.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$29$2e$2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$errors$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-utils@12.29.2/node_modules/motion-utils/dist/es/errors.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$color$2f$hex$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/value/types/color/hex.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$color$2f$hsla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/value/types/color/hsla.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$color$2f$hsla$2d$to$2d$rgba$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/value/types/color/hsla-to-rgba.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$color$2f$rgba$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/value/types/color/rgba.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$mix$2f$immediate$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/utils/mix/immediate.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$mix$2f$number$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/utils/mix/number.mjs [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
// Linear color space blending
// Explained https://www.youtube.com/watch?v=LKnqECcg6Gw
// Demonstrated http://codepen.io/osublake/pen/xGVVaN
var mixLinearColor = function(from, to, v) {
    var fromExpo = from * from;
    var expo = v * (to * to - fromExpo) + fromExpo;
    return expo < 0 ? 0 : Math.sqrt(expo);
};
var colorTypes = [
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$color$2f$hex$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hex"],
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$color$2f$rgba$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rgba"],
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$color$2f$hsla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hsla"]
];
var getColorType = function(v) {
    return colorTypes.find(function(type) {
        return type.test(v);
    });
};
function asRGBA(color) {
    var type = getColorType(color);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$29$2e$2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$errors$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["warning"])(Boolean(type), "'".concat(color, "' is not an animatable color. Use the equivalent color code instead."), "color-not-animatable");
    if (!Boolean(type)) return false;
    var model = type.parse(color);
    if (type === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$color$2f$hsla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hsla"]) {
        // TODO Remove this cast - needed since Motion's stricter typing
        model = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$color$2f$hsla$2d$to$2d$rgba$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hslaToRgba"])(model);
    }
    return model;
}
var mixColor = function(from, to) {
    var fromRGBA = asRGBA(from);
    var toRGBA = asRGBA(to);
    if (!fromRGBA || !toRGBA) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$mix$2f$immediate$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mixImmediate"])(from, to);
    }
    var blended = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, fromRGBA);
    return function(v) {
        blended.red = mixLinearColor(fromRGBA.red, toRGBA.red, v);
        blended.green = mixLinearColor(fromRGBA.green, toRGBA.green, v);
        blended.blue = mixLinearColor(fromRGBA.blue, toRGBA.blue, v);
        blended.alpha = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$mix$2f$number$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mixNumber"])(fromRGBA.alpha, toRGBA.alpha, v);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$color$2f$rgba$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rgba"].transform(blended);
    };
};
;
 //# sourceMappingURL=color.mjs.map
}),
"[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/utils/mix/visibility.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "invisibleValues",
    ()=>invisibleValues,
    "mixVisibility",
    ()=>mixVisibility
]);
var invisibleValues = new Set([
    "none",
    "hidden"
]);
/**
 * Returns a function that, when provided a progress value between 0 and 1,
 * will return the "none" or "hidden" string only when the progress is that of
 * the origin or target.
 */ function mixVisibility(origin, target) {
    if (invisibleValues.has(origin)) {
        return function(p) {
            return p <= 0 ? origin : target;
        };
    } else {
        return function(p) {
            return p >= 1 ? target : origin;
        };
    }
}
;
 //# sourceMappingURL=visibility.mjs.map
}),
"[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/utils/mix/complex.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getMixer",
    ()=>getMixer,
    "mixArray",
    ()=>mixArray,
    "mixComplex",
    ()=>mixComplex,
    "mixObject",
    ()=>mixObject
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_object_spread.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_to_consumable_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_to_consumable_array.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$29$2e$2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$pipe$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-utils@12.29.2/node_modules/motion-utils/dist/es/pipe.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$29$2e$2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$errors$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-utils@12.29.2/node_modules/motion-utils/dist/es/errors.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$utils$2f$is$2d$css$2d$variable$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/animation/utils/is-css-variable.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$color$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/value/types/color/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$complex$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/value/types/complex/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$mix$2f$color$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/utils/mix/color.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$mix$2f$immediate$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/utils/mix/immediate.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$mix$2f$number$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/utils/mix/number.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$mix$2f$visibility$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/utils/mix/visibility.mjs [app-client] (ecmascript)");
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
function mixNumber(a, b) {
    return function(p) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$mix$2f$number$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mixNumber"])(a, b, p);
    };
}
function getMixer(a) {
    if (typeof a === "number") {
        return mixNumber;
    } else if (typeof a === "string") {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$utils$2f$is$2d$css$2d$variable$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isCSSVariableToken"])(a) ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$mix$2f$immediate$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mixImmediate"] : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$color$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["color"].test(a) ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$mix$2f$color$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mixColor"] : mixComplex;
    } else if (Array.isArray(a)) {
        return mixArray;
    } else if ((typeof a === "undefined" ? "undefined" : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(a)) === "object") {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$color$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["color"].test(a) ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$mix$2f$color$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mixColor"] : mixObject;
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$mix$2f$immediate$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mixImmediate"];
}
function mixArray(a, b) {
    var output = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_to_consumable_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(a);
    var numValues = output.length;
    var blendValue = a.map(function(v, i) {
        return getMixer(v)(v, b[i]);
    });
    return function(p) {
        for(var i = 0; i < numValues; i++){
            output[i] = blendValue[i](p);
        }
        return output;
    };
}
function mixObject(a, b) {
    var output = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, a, b);
    var blendValue = {};
    for(var key in output){
        if (a[key] !== undefined && b[key] !== undefined) {
            blendValue[key] = getMixer(a[key])(a[key], b[key]);
        }
    }
    return function(v) {
        for(var key in blendValue){
            output[key] = blendValue[key](v);
        }
        return output;
    };
}
function matchOrder(origin, target) {
    var orderedOrigin = [];
    var pointers = {
        color: 0,
        var: 0,
        number: 0
    };
    for(var i = 0; i < target.values.length; i++){
        var _origin_values_originIndex;
        var type = target.types[i];
        var originIndex = origin.indexes[type][pointers[type]];
        var originValue = (_origin_values_originIndex = origin.values[originIndex]) !== null && _origin_values_originIndex !== void 0 ? _origin_values_originIndex : 0;
        orderedOrigin[i] = originValue;
        pointers[type]++;
    }
    return orderedOrigin;
}
var mixComplex = function(origin, target) {
    var template = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$complex$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["complex"].createTransformer(target);
    var originStats = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$complex$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["analyseComplexValue"])(origin);
    var targetStats = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$complex$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["analyseComplexValue"])(target);
    var canInterpolate = originStats.indexes.var.length === targetStats.indexes.var.length && originStats.indexes.color.length === targetStats.indexes.color.length && originStats.indexes.number.length >= targetStats.indexes.number.length;
    if (canInterpolate) {
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$mix$2f$visibility$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["invisibleValues"].has(origin) && !targetStats.values.length || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$mix$2f$visibility$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["invisibleValues"].has(target) && !originStats.values.length) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$mix$2f$visibility$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mixVisibility"])(origin, target);
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$29$2e$2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$pipe$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])(mixArray(matchOrder(originStats, targetStats), targetStats.values), template);
    } else {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$29$2e$2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$errors$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["warning"])(true, "Complex values '".concat(origin, "' and '").concat(target, "' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition."), "complex-values-different");
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$mix$2f$immediate$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mixImmediate"])(origin, target);
    }
};
;
 //# sourceMappingURL=complex.mjs.map
}),
"[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/utils/mix/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "mix",
    ()=>mix
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$mix$2f$complex$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/utils/mix/complex.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$mix$2f$number$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/utils/mix/number.mjs [app-client] (ecmascript)");
;
;
function mix(from, to, p) {
    if (typeof from === "number" && typeof to === "number" && typeof p === "number") {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$mix$2f$number$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mixNumber"])(from, to, p);
    }
    var mixer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$mix$2f$complex$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMixer"])(from);
    return mixer(from, to);
}
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/animation/drivers/frame.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "frameloopDriver",
    ()=>frameloopDriver
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$sync$2d$time$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/frameloop/sync-time.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$frame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/frameloop/frame.mjs [app-client] (ecmascript)");
;
;
var frameloopDriver = function(update) {
    var passTimestamp = function(param) {
        var timestamp = param.timestamp;
        return update(timestamp);
    };
    return {
        start: function() {
            var keepAlive = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$frame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["frame"].update(passTimestamp, keepAlive);
        },
        stop: function() {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$frame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cancelFrame"])(passTimestamp);
        },
        /**
         * If we're processing this frame we can use the
         * framelocked timestamp to keep things in sync.
         */ now: function() {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$frame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["frameData"].isProcessing ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$frame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["frameData"].timestamp : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$sync$2d$time$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["time"].now();
        }
    };
};
;
 //# sourceMappingURL=frame.mjs.map
}),
"[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/animation/generators/utils/calc-duration.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "calcGeneratorDuration",
    ()=>calcGeneratorDuration,
    "maxGeneratorDuration",
    ()=>maxGeneratorDuration
]);
/**
 * Implement a practical max duration for keyframe generation
 * to prevent infinite loops
 */ var maxGeneratorDuration = 20000;
function calcGeneratorDuration(generator) {
    var duration = 0;
    var timeStep = 50;
    var state = generator.next(duration);
    while(!state.done && duration < maxGeneratorDuration){
        duration += timeStep;
        state = generator.next(duration);
    }
    return duration >= maxGeneratorDuration ? Infinity : duration;
}
;
 //# sourceMappingURL=calc-duration.mjs.map
}),
"[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/animation/generators/utils/create-generator-easing.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createGeneratorEasing",
    ()=>createGeneratorEasing
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_object_spread.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_object_spread_props.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$29$2e$2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$time$2d$conversion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-utils@12.29.2/node_modules/motion-utils/dist/es/time-conversion.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$generators$2f$utils$2f$calc$2d$duration$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/animation/generators/utils/calc-duration.mjs [app-client] (ecmascript)");
;
;
;
;
/**
 * Create a progress => progress easing function from a generator.
 */ function createGeneratorEasing(options) {
    var scale = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 100, createGenerator = arguments.length > 2 ? arguments[2] : void 0;
    var generator = createGenerator((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, options), {
        keyframes: [
            0,
            scale
        ]
    }));
    var duration = Math.min((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$generators$2f$utils$2f$calc$2d$duration$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calcGeneratorDuration"])(generator), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$generators$2f$utils$2f$calc$2d$duration$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["maxGeneratorDuration"]);
    return {
        type: "keyframes",
        ease: function(progress) {
            return generator.next(duration * progress).value / scale;
        },
        duration: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$29$2e$2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$time$2d$conversion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["millisecondsToSeconds"])(duration)
    };
}
;
 //# sourceMappingURL=create-generator-easing.mjs.map
}),
"[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/animation/generators/utils/velocity.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "calcGeneratorVelocity",
    ()=>calcGeneratorVelocity
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$29$2e$2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$velocity$2d$per$2d$second$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-utils@12.29.2/node_modules/motion-utils/dist/es/velocity-per-second.mjs [app-client] (ecmascript)");
;
var velocitySampleDuration = 5; // ms
function calcGeneratorVelocity(resolveValue, t, current) {
    var prevT = Math.max(t - velocitySampleDuration, 0);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$29$2e$2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$velocity$2d$per$2d$second$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["velocityPerSecond"])(current - resolveValue(prevT), t - prevT);
}
;
 //# sourceMappingURL=velocity.mjs.map
}),
"[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/animation/generators/spring/defaults.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "springDefaults",
    ()=>springDefaults
]);
var springDefaults = {
    // Default spring physics
    stiffness: 100,
    damping: 10,
    mass: 1.0,
    velocity: 0.0,
    // Default duration/bounce-based options
    duration: 800,
    bounce: 0.3,
    visualDuration: 0.3,
    // Rest thresholds
    restSpeed: {
        granular: 0.01,
        default: 2
    },
    restDelta: {
        granular: 0.005,
        default: 0.5
    },
    // Limits
    minDuration: 0.01,
    maxDuration: 10.0,
    minDamping: 0.05,
    maxDamping: 1
};
;
 //# sourceMappingURL=defaults.mjs.map
}),
"[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/animation/generators/spring/find.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "calcAngularFreq",
    ()=>calcAngularFreq,
    "findSpring",
    ()=>findSpring
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$29$2e$2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$errors$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-utils@12.29.2/node_modules/motion-utils/dist/es/errors.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$29$2e$2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$time$2d$conversion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-utils@12.29.2/node_modules/motion-utils/dist/es/time-conversion.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$29$2e$2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$clamp$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-utils@12.29.2/node_modules/motion-utils/dist/es/clamp.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$generators$2f$spring$2f$defaults$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/animation/generators/spring/defaults.mjs [app-client] (ecmascript)");
;
;
var safeMin = 0.001;
function findSpring(param) {
    var _param_duration = param.duration, duration = _param_duration === void 0 ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$generators$2f$spring$2f$defaults$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["springDefaults"].duration : _param_duration, _param_bounce = param.bounce, bounce = _param_bounce === void 0 ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$generators$2f$spring$2f$defaults$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["springDefaults"].bounce : _param_bounce, _param_velocity = param.velocity, velocity = _param_velocity === void 0 ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$generators$2f$spring$2f$defaults$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["springDefaults"].velocity : _param_velocity, _param_mass = param.mass, mass = _param_mass === void 0 ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$generators$2f$spring$2f$defaults$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["springDefaults"].mass : _param_mass;
    var envelope;
    var derivative;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$29$2e$2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$errors$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["warning"])(duration <= (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$29$2e$2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$time$2d$conversion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["secondsToMilliseconds"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$generators$2f$spring$2f$defaults$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["springDefaults"].maxDuration), "Spring duration must be 10 seconds or less", "spring-duration-limit");
    var dampingRatio = 1 - bounce;
    /**
     * Restrict dampingRatio and duration to within acceptable ranges.
     */ dampingRatio = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$29$2e$2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$clamp$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clamp"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$generators$2f$spring$2f$defaults$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["springDefaults"].minDamping, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$generators$2f$spring$2f$defaults$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["springDefaults"].maxDamping, dampingRatio);
    duration = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$29$2e$2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$clamp$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clamp"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$generators$2f$spring$2f$defaults$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["springDefaults"].minDuration, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$generators$2f$spring$2f$defaults$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["springDefaults"].maxDuration, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$29$2e$2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$time$2d$conversion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["millisecondsToSeconds"])(duration));
    if (dampingRatio < 1) {
        /**
         * Underdamped spring
         */ envelope = function(undampedFreq) {
            var exponentialDecay = undampedFreq * dampingRatio;
            var delta = exponentialDecay * duration;
            var a = exponentialDecay - velocity;
            var b = calcAngularFreq(undampedFreq, dampingRatio);
            var c = Math.exp(-delta);
            return safeMin - a / b * c;
        };
        derivative = function(undampedFreq) {
            var exponentialDecay = undampedFreq * dampingRatio;
            var delta = exponentialDecay * duration;
            var d = delta * velocity + velocity;
            var e = Math.pow(dampingRatio, 2) * Math.pow(undampedFreq, 2) * duration;
            var f = Math.exp(-delta);
            var g = calcAngularFreq(Math.pow(undampedFreq, 2), dampingRatio);
            var factor = -envelope(undampedFreq) + safeMin > 0 ? -1 : 1;
            return factor * ((d - e) * f) / g;
        };
    } else {
        /**
         * Critically-damped spring
         */ envelope = function(undampedFreq) {
            var a = Math.exp(-undampedFreq * duration);
            var b = (undampedFreq - velocity) * duration + 1;
            return -safeMin + a * b;
        };
        derivative = function(undampedFreq) {
            var a = Math.exp(-undampedFreq * duration);
            var b = (velocity - undampedFreq) * (duration * duration);
            return a * b;
        };
    }
    var initialGuess = 5 / duration;
    var undampedFreq = approximateRoot(envelope, derivative, initialGuess);
    duration = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$29$2e$2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$time$2d$conversion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["secondsToMilliseconds"])(duration);
    if (isNaN(undampedFreq)) {
        return {
            stiffness: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$generators$2f$spring$2f$defaults$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["springDefaults"].stiffness,
            damping: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$generators$2f$spring$2f$defaults$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["springDefaults"].damping,
            duration: duration
        };
    } else {
        var stiffness = Math.pow(undampedFreq, 2) * mass;
        return {
            stiffness: stiffness,
            damping: dampingRatio * 2 * Math.sqrt(mass * stiffness),
            duration: duration
        };
    }
}
var rootIterations = 12;
function approximateRoot(envelope, derivative, initialGuess) {
    var result = initialGuess;
    for(var i = 1; i < rootIterations; i++){
        result = result - envelope(result) / derivative(result);
    }
    return result;
}
function calcAngularFreq(undampedFreq, dampingRatio) {
    return undampedFreq * Math.sqrt(1 - dampingRatio * dampingRatio);
}
;
 //# sourceMappingURL=find.mjs.map
}),
"[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/animation/generators/spring/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "spring",
    ()=>spring
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_object_spread.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_object_spread_props.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$29$2e$2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$time$2d$conversion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-utils@12.29.2/node_modules/motion-utils/dist/es/time-conversion.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$29$2e$2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$clamp$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-utils@12.29.2/node_modules/motion-utils/dist/es/clamp.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$waapi$2f$utils$2f$linear$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/animation/waapi/utils/linear.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$generators$2f$utils$2f$calc$2d$duration$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/animation/generators/utils/calc-duration.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$generators$2f$utils$2f$create$2d$generator$2d$easing$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/animation/generators/utils/create-generator-easing.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$generators$2f$utils$2f$velocity$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/animation/generators/utils/velocity.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$generators$2f$spring$2f$defaults$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/animation/generators/spring/defaults.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$generators$2f$spring$2f$find$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/animation/generators/spring/find.mjs [app-client] (ecmascript)");
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
var durationKeys = [
    "duration",
    "bounce"
];
var physicsKeys = [
    "stiffness",
    "damping",
    "mass"
];
function isSpringType(options, keys) {
    return keys.some(function(key) {
        return options[key] !== undefined;
    });
}
function getSpringOptions(options) {
    var springOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({
        velocity: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$generators$2f$spring$2f$defaults$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["springDefaults"].velocity,
        stiffness: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$generators$2f$spring$2f$defaults$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["springDefaults"].stiffness,
        damping: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$generators$2f$spring$2f$defaults$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["springDefaults"].damping,
        mass: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$generators$2f$spring$2f$defaults$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["springDefaults"].mass,
        isResolvedFromDuration: false
    }, options);
    // stiffness/damping/mass overrides duration/bounce
    if (!isSpringType(options, physicsKeys) && isSpringType(options, durationKeys)) {
        // Time-defined springs should ignore inherited velocity.
        // Velocity from interrupted animations can cause findSpring()
        // to compute wildly different spring parameters, leading to
        // massive oscillation on small-range animations.
        springOptions.velocity = 0;
        if (options.visualDuration) {
            var visualDuration = options.visualDuration;
            var root = 2 * Math.PI / (visualDuration * 1.2);
            var stiffness = root * root;
            var damping = 2 * (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$29$2e$2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$clamp$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clamp"])(0.05, 1, 1 - (options.bounce || 0)) * Math.sqrt(stiffness);
            springOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, springOptions), {
                mass: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$generators$2f$spring$2f$defaults$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["springDefaults"].mass,
                stiffness: stiffness,
                damping: damping
            });
        } else {
            var derived = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$generators$2f$spring$2f$find$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSpring"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, options), {
                velocity: 0
            }));
            springOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, springOptions, derived), {
                mass: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$generators$2f$spring$2f$defaults$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["springDefaults"].mass
            });
            springOptions.isResolvedFromDuration = true;
        }
    }
    return springOptions;
}
function spring() {
    var optionsOrVisualDuration = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$generators$2f$spring$2f$defaults$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["springDefaults"].visualDuration, bounce = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$generators$2f$spring$2f$defaults$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["springDefaults"].bounce;
    var options = (typeof optionsOrVisualDuration === "undefined" ? "undefined" : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(optionsOrVisualDuration)) !== "object" ? {
        visualDuration: optionsOrVisualDuration,
        keyframes: [
            0,
            1
        ],
        bounce: bounce
    } : optionsOrVisualDuration;
    var restSpeed = options.restSpeed, restDelta = options.restDelta;
    var origin = options.keyframes[0];
    var target = options.keyframes[options.keyframes.length - 1];
    /**
     * This is the Iterator-spec return value. We ensure it's mutable rather than using a generator
     * to reduce GC during animation.
     */ var state = {
        done: false,
        value: origin
    };
    var _getSpringOptions = getSpringOptions((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, options), {
        velocity: -(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$29$2e$2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$time$2d$conversion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["millisecondsToSeconds"])(options.velocity || 0)
    })), stiffness = _getSpringOptions.stiffness, damping = _getSpringOptions.damping, mass = _getSpringOptions.mass, duration = _getSpringOptions.duration, velocity = _getSpringOptions.velocity, isResolvedFromDuration = _getSpringOptions.isResolvedFromDuration;
    var initialVelocity = velocity || 0.0;
    var dampingRatio = damping / (2 * Math.sqrt(stiffness * mass));
    var initialDelta = target - origin;
    var undampedAngularFreq = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$29$2e$2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$time$2d$conversion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["millisecondsToSeconds"])(Math.sqrt(stiffness / mass));
    /**
     * If we're working on a granular scale, use smaller defaults for determining
     * when the spring is finished.
     *
     * These defaults have been selected emprically based on what strikes a good
     * ratio between feeling good and finishing as soon as changes are imperceptible.
     */ var isGranularScale = Math.abs(initialDelta) < 5;
    restSpeed || (restSpeed = isGranularScale ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$generators$2f$spring$2f$defaults$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["springDefaults"].restSpeed.granular : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$generators$2f$spring$2f$defaults$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["springDefaults"].restSpeed.default);
    restDelta || (restDelta = isGranularScale ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$generators$2f$spring$2f$defaults$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["springDefaults"].restDelta.granular : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$generators$2f$spring$2f$defaults$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["springDefaults"].restDelta.default);
    var resolveSpring;
    if (dampingRatio < 1) {
        var angularFreq = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$generators$2f$spring$2f$find$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calcAngularFreq"])(undampedAngularFreq, dampingRatio);
        // Underdamped spring
        resolveSpring = function(t) {
            var envelope = Math.exp(-dampingRatio * undampedAngularFreq * t);
            return target - envelope * ((initialVelocity + dampingRatio * undampedAngularFreq * initialDelta) / angularFreq * Math.sin(angularFreq * t) + initialDelta * Math.cos(angularFreq * t));
        };
    } else if (dampingRatio === 1) {
        // Critically damped spring
        resolveSpring = function(t) {
            return target - Math.exp(-undampedAngularFreq * t) * (initialDelta + (initialVelocity + undampedAngularFreq * initialDelta) * t);
        };
    } else {
        // Overdamped spring
        var dampedAngularFreq = undampedAngularFreq * Math.sqrt(dampingRatio * dampingRatio - 1);
        resolveSpring = function(t) {
            var envelope = Math.exp(-dampingRatio * undampedAngularFreq * t);
            // When performing sinh or cosh values can hit Infinity so we cap them here
            var freqForT = Math.min(dampedAngularFreq * t, 300);
            return target - envelope * ((initialVelocity + dampingRatio * undampedAngularFreq * initialDelta) * Math.sinh(freqForT) + dampedAngularFreq * initialDelta * Math.cosh(freqForT)) / dampedAngularFreq;
        };
    }
    var generator = {
        calculatedDuration: isResolvedFromDuration ? duration || null : null,
        next: function(t) {
            var current = resolveSpring(t);
            if (!isResolvedFromDuration) {
                var currentVelocity = t === 0 ? initialVelocity : 0.0;
                /**
                 * We only need to calculate velocity for under-damped springs
                 * as over- and critically-damped springs can't overshoot, so
                 * checking only for displacement is enough.
                 */ if (dampingRatio < 1) {
                    currentVelocity = t === 0 ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$29$2e$2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$time$2d$conversion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["secondsToMilliseconds"])(initialVelocity) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$generators$2f$utils$2f$velocity$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calcGeneratorVelocity"])(resolveSpring, t, current);
                }
                var isBelowVelocityThreshold = Math.abs(currentVelocity) <= restSpeed;
                var isBelowDisplacementThreshold = Math.abs(target - current) <= restDelta;
                state.done = isBelowVelocityThreshold && isBelowDisplacementThreshold;
            } else {
                state.done = t >= duration;
            }
            state.value = state.done ? target : current;
            return state;
        },
        toString: function() {
            var calculatedDuration = Math.min((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$generators$2f$utils$2f$calc$2d$duration$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calcGeneratorDuration"])(generator), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$generators$2f$utils$2f$calc$2d$duration$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["maxGeneratorDuration"]);
            var easing = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$waapi$2f$utils$2f$linear$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateLinearEasing"])(function(progress) {
                return generator.next(calculatedDuration * progress).value;
            }, calculatedDuration, 30);
            return calculatedDuration + "ms " + easing;
        },
        toTransition: function() {}
    };
    return generator;
}
spring.applyToOptions = function(options) {
    var generatorOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$generators$2f$utils$2f$create$2d$generator$2d$easing$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createGeneratorEasing"])(options, 100, spring);
    options.ease = generatorOptions.ease;
    options.duration = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$29$2e$2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$time$2d$conversion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["secondsToMilliseconds"])(generatorOptions.duration);
    options.type = "keyframes";
    return options;
};
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/animation/generators/inertia.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "inertia",
    ()=>inertia
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$generators$2f$spring$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/animation/generators/spring/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$generators$2f$utils$2f$velocity$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/animation/generators/utils/velocity.mjs [app-client] (ecmascript)");
;
;
function inertia(param) {
    var keyframes = param.keyframes, _param_velocity = param.velocity, velocity = _param_velocity === void 0 ? 0.0 : _param_velocity, _param_power = param.power, power = _param_power === void 0 ? 0.8 : _param_power, _param_timeConstant = param.timeConstant, timeConstant = _param_timeConstant === void 0 ? 325 : _param_timeConstant, _param_bounceDamping = param.bounceDamping, bounceDamping = _param_bounceDamping === void 0 ? 10 : _param_bounceDamping, _param_bounceStiffness = param.bounceStiffness, bounceStiffness = _param_bounceStiffness === void 0 ? 500 : _param_bounceStiffness, modifyTarget = param.modifyTarget, min = param.min, max = param.max, _param_restDelta = param.restDelta, restDelta = _param_restDelta === void 0 ? 0.5 : _param_restDelta, restSpeed = param.restSpeed;
    var origin = keyframes[0];
    var state = {
        done: false,
        value: origin
    };
    var isOutOfBounds = function(v) {
        return min !== undefined && v < min || max !== undefined && v > max;
    };
    var nearestBoundary = function(v) {
        if (min === undefined) return max;
        if (max === undefined) return min;
        return Math.abs(min - v) < Math.abs(max - v) ? min : max;
    };
    var amplitude = power * velocity;
    var ideal = origin + amplitude;
    var target = modifyTarget === undefined ? ideal : modifyTarget(ideal);
    /**
     * If the target has changed we need to re-calculate the amplitude, otherwise
     * the animation will start from the wrong position.
     */ if (target !== ideal) amplitude = target - origin;
    var calcDelta = function(t) {
        return -amplitude * Math.exp(-t / timeConstant);
    };
    var calcLatest = function(t) {
        return target + calcDelta(t);
    };
    var applyFriction = function(t) {
        var delta = calcDelta(t);
        var latest = calcLatest(t);
        state.done = Math.abs(delta) <= restDelta;
        state.value = state.done ? target : latest;
    };
    /**
     * Ideally this would resolve for t in a stateless way, we could
     * do that by always precalculating the animation but as we know
     * this will be done anyway we can assume that spring will
     * be discovered during that.
     */ var timeReachedBoundary;
    var spring$1;
    var checkCatchBoundary = function(t) {
        if (!isOutOfBounds(state.value)) return;
        timeReachedBoundary = t;
        spring$1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$generators$2f$spring$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spring"])({
            keyframes: [
                state.value,
                nearestBoundary(state.value)
            ],
            velocity: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$generators$2f$utils$2f$velocity$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calcGeneratorVelocity"])(calcLatest, t, state.value),
            damping: bounceDamping,
            stiffness: bounceStiffness,
            restDelta: restDelta,
            restSpeed: restSpeed
        });
    };
    checkCatchBoundary(0);
    return {
        calculatedDuration: null,
        next: function(t) {
            /**
             * We need to resolve the friction to figure out if we need a
             * spring but we don't want to do this twice per frame. So here
             * we flag if we updated for this frame and later if we did
             * we can skip doing it again.
             */ var hasUpdatedFrame = false;
            if (!spring$1 && timeReachedBoundary === undefined) {
                hasUpdatedFrame = true;
                applyFriction(t);
                checkCatchBoundary(t);
            }
            /**
             * If we have a spring and the provided t is beyond the moment the friction
             * animation crossed the min/max boundary, use the spring.
             */ if (timeReachedBoundary !== undefined && t >= timeReachedBoundary) {
                return spring$1.next(t - timeReachedBoundary);
            } else {
                !hasUpdatedFrame && applyFriction(t);
                return state;
            }
        }
    };
}
;
 //# sourceMappingURL=inertia.mjs.map
}),
"[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/utils/interpolate.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "interpolate",
    ()=>interpolate
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_to_consumable_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_to_consumable_array.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$29$2e$2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$errors$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-utils@12.29.2/node_modules/motion-utils/dist/es/errors.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$29$2e$2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$clamp$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-utils@12.29.2/node_modules/motion-utils/dist/es/clamp.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$29$2e$2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$global$2d$config$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-utils@12.29.2/node_modules/motion-utils/dist/es/global-config.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$29$2e$2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$noop$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-utils@12.29.2/node_modules/motion-utils/dist/es/noop.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$29$2e$2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$pipe$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-utils@12.29.2/node_modules/motion-utils/dist/es/pipe.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$29$2e$2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$progress$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-utils@12.29.2/node_modules/motion-utils/dist/es/progress.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$mix$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/utils/mix/index.mjs [app-client] (ecmascript)");
;
;
;
function createMixers(output, ease, customMixer) {
    var mixers = [];
    var mixerFactory = customMixer || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$29$2e$2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$global$2d$config$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MotionGlobalConfig"].mix || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$mix$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mix"];
    var numMixers = output.length - 1;
    for(var i = 0; i < numMixers; i++){
        var mixer = mixerFactory(output[i], output[i + 1]);
        if (ease) {
            var easingFunction = Array.isArray(ease) ? ease[i] || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$29$2e$2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$noop$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["noop"] : ease;
            mixer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$29$2e$2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$pipe$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])(easingFunction, mixer);
        }
        mixers.push(mixer);
    }
    return mixers;
}
/**
 * Create a function that maps from a numerical input array to a generic output array.
 *
 * Accepts:
 *   - Numbers
 *   - Colors (hex, hsl, hsla, rgb, rgba)
 *   - Complex (combinations of one or more numbers or strings)
 *
 * ```jsx
 * const mixColor = interpolate([0, 1], ['#fff', '#000'])
 *
 * mixColor(0.5) // 'rgba(128, 128, 128, 1)'
 * ```
 *
 * TODO Revisit this approach once we've moved to data models for values,
 * probably not needed to pregenerate mixer functions.
 *
 * @public
 */ function interpolate(input, output) {
    var _ref = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, tmp = _ref.clamp, isClamp = tmp === void 0 ? true : tmp, ease = _ref.ease, mixer = _ref.mixer;
    var inputLength = input.length;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$29$2e$2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$errors$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["invariant"])(inputLength === output.length, "Both input and output ranges must be the same length", "range-length");
    /**
     * If we're only provided a single input, we can just make a function
     * that returns the output.
     */ if (inputLength === 1) return function() {
        return output[0];
    };
    if (inputLength === 2 && output[0] === output[1]) return function() {
        return output[1];
    };
    var isZeroDeltaRange = input[0] === input[1];
    // If input runs highest -> lowest, reverse both arrays
    if (input[0] > input[inputLength - 1]) {
        input = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_to_consumable_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(input).reverse();
        output = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_to_consumable_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(output).reverse();
    }
    var mixers = createMixers(output, ease, mixer);
    var numMixers = mixers.length;
    var interpolator = function(v) {
        if (isZeroDeltaRange && v < input[0]) return output[0];
        var i = 0;
        if (numMixers > 1) {
            for(; i < input.length - 2; i++){
                if (v < input[i + 1]) break;
            }
        }
        var progressInRange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$29$2e$2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$progress$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["progress"])(input[i], input[i + 1], v);
        return mixers[i](progressInRange);
    };
    return isClamp ? function(v) {
        return interpolator((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$29$2e$2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$clamp$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clamp"])(input[0], input[inputLength - 1], v));
    } : interpolator;
}
;
 //# sourceMappingURL=interpolate.mjs.map
}),
"[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/animation/keyframes/offsets/fill.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "fillOffset",
    ()=>fillOffset
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$29$2e$2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$progress$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-utils@12.29.2/node_modules/motion-utils/dist/es/progress.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$mix$2f$number$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/utils/mix/number.mjs [app-client] (ecmascript)");
;
;
function fillOffset(offset, remaining) {
    var min = offset[offset.length - 1];
    for(var i = 1; i <= remaining; i++){
        var offsetProgress = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$29$2e$2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$progress$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["progress"])(0, remaining, i);
        offset.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$mix$2f$number$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mixNumber"])(min, 1, offsetProgress));
    }
}
;
 //# sourceMappingURL=fill.mjs.map
}),
"[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/animation/keyframes/offsets/default.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "defaultOffset",
    ()=>defaultOffset
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$keyframes$2f$offsets$2f$fill$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/animation/keyframes/offsets/fill.mjs [app-client] (ecmascript)");
;
function defaultOffset(arr) {
    var offset = [
        0
    ];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$keyframes$2f$offsets$2f$fill$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fillOffset"])(offset, arr.length - 1);
    return offset;
}
;
 //# sourceMappingURL=default.mjs.map
}),
"[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/animation/keyframes/offsets/time.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "convertOffsetToTimes",
    ()=>convertOffsetToTimes
]);
function convertOffsetToTimes(offset, duration) {
    return offset.map(function(o) {
        return o * duration;
    });
}
;
 //# sourceMappingURL=time.mjs.map
}),
"[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/animation/generators/keyframes.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "defaultEasing",
    ()=>defaultEasing,
    "keyframes",
    ()=>keyframes
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$29$2e$2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$ease$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-utils@12.29.2/node_modules/motion-utils/dist/es/easing/ease.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$29$2e$2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$utils$2f$is$2d$easing$2d$array$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-utils@12.29.2/node_modules/motion-utils/dist/es/easing/utils/is-easing-array.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$29$2e$2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$utils$2f$map$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-utils@12.29.2/node_modules/motion-utils/dist/es/easing/utils/map.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$interpolate$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/utils/interpolate.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$keyframes$2f$offsets$2f$default$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/animation/keyframes/offsets/default.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$keyframes$2f$offsets$2f$time$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/animation/keyframes/offsets/time.mjs [app-client] (ecmascript)");
;
;
;
;
function defaultEasing(values, easing) {
    return values.map(function() {
        return easing || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$29$2e$2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$ease$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["easeInOut"];
    }).splice(0, values.length - 1);
}
function keyframes(param) {
    var _param_duration = param.duration, duration = _param_duration === void 0 ? 300 : _param_duration, keyframeValues = param.keyframes, times = param.times, _param_ease = param.ease, ease = _param_ease === void 0 ? "easeInOut" : _param_ease;
    /**
     * Easing functions can be externally defined as strings. Here we convert them
     * into actual functions.
     */ var easingFunctions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$29$2e$2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$utils$2f$is$2d$easing$2d$array$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isEasingArray"])(ease) ? ease.map(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$29$2e$2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$utils$2f$map$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["easingDefinitionToFunction"]) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$29$2e$2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$utils$2f$map$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["easingDefinitionToFunction"])(ease);
    /**
     * This is the Iterator-spec return value. We ensure it's mutable rather than using a generator
     * to reduce GC during animation.
     */ var state = {
        done: false,
        value: keyframeValues[0]
    };
    /**
     * Create a times array based on the provided 0-1 offsets
     */ var absoluteTimes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$keyframes$2f$offsets$2f$time$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["convertOffsetToTimes"])(// Only use the provided offsets if they're the correct length
    // TODO Maybe we should warn here if there's a length mismatch
    times && times.length === keyframeValues.length ? times : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$keyframes$2f$offsets$2f$default$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultOffset"])(keyframeValues), duration);
    var mapTimeToKeyframe = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$interpolate$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["interpolate"])(absoluteTimes, keyframeValues, {
        ease: Array.isArray(easingFunctions) ? easingFunctions : defaultEasing(keyframeValues, easingFunctions)
    });
    return {
        calculatedDuration: duration,
        next: function(t) {
            state.value = mapTimeToKeyframe(t);
            state.done = t >= duration;
            return state;
        }
    };
}
;
 //# sourceMappingURL=keyframes.mjs.map
}),
"[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/animation/utils/replace-transition-type.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "replaceTransitionType",
    ()=>replaceTransitionType
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$generators$2f$inertia$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/animation/generators/inertia.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$generators$2f$keyframes$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/animation/generators/keyframes.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$generators$2f$spring$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/animation/generators/spring/index.mjs [app-client] (ecmascript)");
;
;
;
var transitionTypeMap = {
    decay: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$generators$2f$inertia$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inertia"],
    inertia: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$generators$2f$inertia$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inertia"],
    tween: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$generators$2f$keyframes$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keyframes"],
    keyframes: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$generators$2f$keyframes$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keyframes"],
    spring: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$generators$2f$spring$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spring"]
};
function replaceTransitionType(transition) {
    if (typeof transition.type === "string") {
        transition.type = transitionTypeMap[transition.type];
    }
}
;
 //# sourceMappingURL=replace-transition-type.mjs.map
}),
"[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/animation/JSAnimation.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "JSAnimation",
    ()=>JSAnimation,
    "animateValue",
    ()=>animateValue
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.6_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_call_super$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_call_super.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_call_check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_class_call_check.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_create_class$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_create_class.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_inherits$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_inherits.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_object_spread.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_object_spread_props.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_to_consumable_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_to_consumable_array.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$29$2e$2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$errors$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-utils@12.29.2/node_modules/motion-utils/dist/es/errors.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$29$2e$2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$pipe$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-utils@12.29.2/node_modules/motion-utils/dist/es/pipe.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$29$2e$2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$clamp$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-utils@12.29.2/node_modules/motion-utils/dist/es/clamp.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$29$2e$2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$time$2d$conversion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-utils@12.29.2/node_modules/motion-utils/dist/es/time-conversion.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$sync$2d$time$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/frameloop/sync-time.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$stats$2f$animation$2d$count$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/stats/animation-count.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$mix$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/utils/mix/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$drivers$2f$frame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/animation/drivers/frame.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$generators$2f$inertia$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/animation/generators/inertia.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$generators$2f$keyframes$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/animation/generators/keyframes.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$generators$2f$utils$2f$calc$2d$duration$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/animation/generators/utils/calc-duration.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$keyframes$2f$get$2d$final$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/animation/keyframes/get-final.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$utils$2f$replace$2d$transition$2d$type$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/animation/utils/replace-transition-type.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$utils$2f$WithPromise$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/animation/utils/WithPromise.mjs [app-client] (ecmascript)");
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
var percentToProgress = function(percent) {
    return percent / 100;
};
var JSAnimation = /*#__PURE__*/ function(WithPromise) {
    "use strict";
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_inherits$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(JSAnimation, WithPromise);
    function JSAnimation(options) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_call_check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, JSAnimation);
        var _this;
        _this = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_call_super$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, JSAnimation);
        _this.state = "idle";
        _this.startTime = null;
        _this.isStopped = false;
        /**
         * The current time of the animation.
         */ _this.currentTime = 0;
        /**
         * The time at which the animation was paused.
         */ _this.holdTime = null;
        /**
         * Playback speed as a factor. 0 would be stopped, -1 reverse and 2 double speed.
         */ _this.playbackSpeed = 1;
        /**
         * This method is bound to the instance to fix a pattern where
         * animation.stop is returned as a reference from a useEffect.
         */ _this.stop = function() {
            var _this_options_onStop, _this_options;
            var motionValue = _this.options.motionValue;
            if (motionValue && motionValue.updatedAt !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$sync$2d$time$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["time"].now()) {
                _this.tick(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$sync$2d$time$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["time"].now());
            }
            _this.isStopped = true;
            if (_this.state === "idle") return;
            _this.teardown();
            (_this_options_onStop = (_this_options = _this.options).onStop) === null || _this_options_onStop === void 0 ? void 0 : _this_options_onStop.call(_this_options);
        };
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$stats$2f$animation$2d$count$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["activeAnimations"].mainThread++;
        _this.options = options;
        _this.initAnimation();
        _this.play();
        if (options.autoplay === false) _this.pause();
        return _this;
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_create_class$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(JSAnimation, [
        {
            key: "initAnimation",
            value: function initAnimation() {
                var options = this.options;
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$utils$2f$replace$2d$transition$2d$type$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["replaceTransitionType"])(options);
                var _options_type = options.type, type = _options_type === void 0 ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$generators$2f$keyframes$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keyframes"] : _options_type, _options_repeat = options.repeat, repeat = _options_repeat === void 0 ? 0 : _options_repeat, _options_repeatDelay = options.repeatDelay, repeatDelay = _options_repeatDelay === void 0 ? 0 : _options_repeatDelay, repeatType = options.repeatType, _options_velocity = options.velocity, velocity = _options_velocity === void 0 ? 0 : _options_velocity;
                var keyframes$1 = options.keyframes;
                var generatorFactory = type || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$generators$2f$keyframes$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keyframes"];
                if (("TURBOPACK compile-time value", "development") !== "production" && generatorFactory !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$generators$2f$keyframes$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keyframes"]) {
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$29$2e$2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$errors$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["invariant"])(keyframes$1.length <= 2, "Only two keyframes currently supported with spring and inertia animations. Trying to animate ".concat(keyframes$1), "spring-two-frames");
                }
                if (generatorFactory !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$generators$2f$keyframes$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keyframes"] && typeof keyframes$1[0] !== "number") {
                    this.mixKeyframes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$29$2e$2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$pipe$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])(percentToProgress, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$mix$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mix"])(keyframes$1[0], keyframes$1[1]));
                    keyframes$1 = [
                        0,
                        100
                    ];
                }
                var generator = generatorFactory((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, options), {
                    keyframes: keyframes$1
                }));
                /**
         * If we have a mirror repeat type we need to create a second generator that outputs the
         * mirrored (not reversed) animation and later ping pong between the two generators.
         */ if (repeatType === "mirror") {
                    this.mirroredGenerator = generatorFactory((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, options), {
                        keyframes: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_to_consumable_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(keyframes$1).reverse(),
                        velocity: -velocity
                    }));
                }
                /**
         * If duration is undefined and we have repeat options,
         * we need to calculate a duration from the generator.
         *
         * We set it to the generator itself to cache the duration.
         * Any timeline resolver will need to have already precalculated
         * the duration by this step.
         */ if (generator.calculatedDuration === null) {
                    generator.calculatedDuration = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$generators$2f$utils$2f$calc$2d$duration$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calcGeneratorDuration"])(generator);
                }
                var calculatedDuration = generator.calculatedDuration;
                this.calculatedDuration = calculatedDuration;
                this.resolvedDuration = calculatedDuration + repeatDelay;
                this.totalDuration = this.resolvedDuration * (repeat + 1) - repeatDelay;
                this.generator = generator;
            }
        },
        {
            key: "updateTime",
            value: function updateTime(timestamp) {
                var animationTime = Math.round(timestamp - this.startTime) * this.playbackSpeed;
                // Update currentTime
                if (this.holdTime !== null) {
                    this.currentTime = this.holdTime;
                } else {
                    // Rounding the time because floating point arithmetic is not always accurate, e.g. 3000.367 - 1000.367 =
                    // 2000.0000000000002. This is a problem when we are comparing the currentTime with the duration, for
                    // example.
                    this.currentTime = animationTime;
                }
            }
        },
        {
            key: "tick",
            value: function tick(timestamp) {
                var sample = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
                var _this = this, generator = _this.generator, totalDuration = _this.totalDuration, mixKeyframes = _this.mixKeyframes, mirroredGenerator = _this.mirroredGenerator, resolvedDuration = _this.resolvedDuration, calculatedDuration = _this.calculatedDuration;
                if (this.startTime === null) return generator.next(0);
                var _this_options = this.options, _this_options_delay = _this_options.delay, delay = _this_options_delay === void 0 ? 0 : _this_options_delay, keyframes = _this_options.keyframes, repeat = _this_options.repeat, repeatType = _this_options.repeatType, repeatDelay = _this_options.repeatDelay, type = _this_options.type, onUpdate = _this_options.onUpdate, finalKeyframe = _this_options.finalKeyframe;
                /**
         * requestAnimationFrame timestamps can come through as lower than
         * the startTime as set by performance.now(). Here we prevent this,
         * though in the future it could be possible to make setting startTime
         * a pending operation that gets resolved here.
         */ if (this.speed > 0) {
                    this.startTime = Math.min(this.startTime, timestamp);
                } else if (this.speed < 0) {
                    this.startTime = Math.min(timestamp - totalDuration / this.speed, this.startTime);
                }
                if (sample) {
                    this.currentTime = timestamp;
                } else {
                    this.updateTime(timestamp);
                }
                // Rebase on delay
                var timeWithoutDelay = this.currentTime - delay * (this.playbackSpeed >= 0 ? 1 : -1);
                var isInDelayPhase = this.playbackSpeed >= 0 ? timeWithoutDelay < 0 : timeWithoutDelay > totalDuration;
                this.currentTime = Math.max(timeWithoutDelay, 0);
                // If this animation has finished, set the current time  to the total duration.
                if (this.state === "finished" && this.holdTime === null) {
                    this.currentTime = totalDuration;
                }
                var elapsed = this.currentTime;
                var frameGenerator = generator;
                if (repeat) {
                    /**
             * Get the current progress (0-1) of the animation. If t is >
             * than duration we'll get values like 2.5 (midway through the
             * third iteration)
             */ var progress = Math.min(this.currentTime, totalDuration) / resolvedDuration;
                    /**
             * Get the current iteration (0 indexed). For instance the floor of
             * 2.5 is 2.
             */ var currentIteration = Math.floor(progress);
                    /**
             * Get the current progress of the iteration by taking the remainder
             * so 2.5 is 0.5 through iteration 2
             */ var iterationProgress = progress % 1.0;
                    /**
             * If iteration progress is 1 we count that as the end
             * of the previous iteration.
             */ if (!iterationProgress && progress >= 1) {
                        iterationProgress = 1;
                    }
                    iterationProgress === 1 && currentIteration--;
                    currentIteration = Math.min(currentIteration, repeat + 1);
                    /**
             * Reverse progress if we're not running in "normal" direction
             */ var isOddIteration = Boolean(currentIteration % 2);
                    if (isOddIteration) {
                        if (repeatType === "reverse") {
                            iterationProgress = 1 - iterationProgress;
                            if (repeatDelay) {
                                iterationProgress -= repeatDelay / resolvedDuration;
                            }
                        } else if (repeatType === "mirror") {
                            frameGenerator = mirroredGenerator;
                        }
                    }
                    elapsed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$29$2e$2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$clamp$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clamp"])(0, 1, iterationProgress) * resolvedDuration;
                }
                /**
         * If we're in negative time, set state as the initial keyframe.
         * This prevents delay: x, duration: 0 animations from finishing
         * instantly.
         */ var state = isInDelayPhase ? {
                    done: false,
                    value: keyframes[0]
                } : frameGenerator.next(elapsed);
                if (mixKeyframes) {
                    state.value = mixKeyframes(state.value);
                }
                var done = state.done;
                if (!isInDelayPhase && calculatedDuration !== null) {
                    done = this.playbackSpeed >= 0 ? this.currentTime >= totalDuration : this.currentTime <= 0;
                }
                var isAnimationFinished = this.holdTime === null && (this.state === "finished" || this.state === "running" && done);
                // TODO: The exception for inertia could be cleaner here
                if (isAnimationFinished && type !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$generators$2f$inertia$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inertia"]) {
                    state.value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$keyframes$2f$get$2d$final$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFinalKeyframe"])(keyframes, this.options, finalKeyframe, this.speed);
                }
                if (onUpdate) {
                    onUpdate(state.value);
                }
                if (isAnimationFinished) {
                    this.finish();
                }
                return state;
            }
        },
        {
            /**
     * Allows the returned animation to be awaited or promise-chained. Currently
     * resolves when the animation finishes at all but in a future update could/should
     * reject if its cancels.
     */ key: "then",
            value: function then(resolve, reject) {
                return this.finished.then(resolve, reject);
            }
        },
        {
            key: "duration",
            get: function get() {
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$29$2e$2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$time$2d$conversion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["millisecondsToSeconds"])(this.calculatedDuration);
            }
        },
        {
            key: "iterationDuration",
            get: function get() {
                var _ref = this.options || {}, _ref_delay = _ref.delay, delay = _ref_delay === void 0 ? 0 : _ref_delay;
                return this.duration + (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$29$2e$2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$time$2d$conversion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["millisecondsToSeconds"])(delay);
            }
        },
        {
            key: "time",
            get: function get() {
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$29$2e$2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$time$2d$conversion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["millisecondsToSeconds"])(this.currentTime);
            },
            set: function set(newTime) {
                var _this_driver;
                newTime = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$29$2e$2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$time$2d$conversion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["secondsToMilliseconds"])(newTime);
                this.currentTime = newTime;
                if (this.startTime === null || this.holdTime !== null || this.playbackSpeed === 0) {
                    this.holdTime = newTime;
                } else if (this.driver) {
                    this.startTime = this.driver.now() - newTime / this.playbackSpeed;
                }
                (_this_driver = this.driver) === null || _this_driver === void 0 ? void 0 : _this_driver.start(false);
            }
        },
        {
            key: "speed",
            get: function get() {
                return this.playbackSpeed;
            },
            set: function set(newSpeed) {
                this.updateTime(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$sync$2d$time$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["time"].now());
                var hasChanged = this.playbackSpeed !== newSpeed;
                this.playbackSpeed = newSpeed;
                if (hasChanged) {
                    this.time = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$29$2e$2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$time$2d$conversion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["millisecondsToSeconds"])(this.currentTime);
                }
            }
        },
        {
            key: "play",
            value: function play() {
                var _this = this;
                var _this_options_onPlay, _this_options;
                if (this.isStopped) return;
                var _this_options1 = this.options, _this_options_driver = _this_options1.driver, driver = _this_options_driver === void 0 ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$drivers$2f$frame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["frameloopDriver"] : _this_options_driver, startTime = _this_options1.startTime;
                if (!this.driver) {
                    this.driver = driver(function(timestamp) {
                        return _this.tick(timestamp);
                    });
                }
                (_this_options_onPlay = (_this_options = this.options).onPlay) === null || _this_options_onPlay === void 0 ? void 0 : _this_options_onPlay.call(_this_options);
                var now = this.driver.now();
                if (this.state === "finished") {
                    this.updateFinished();
                    this.startTime = now;
                } else if (this.holdTime !== null) {
                    this.startTime = now - this.holdTime;
                } else if (!this.startTime) {
                    this.startTime = startTime !== null && startTime !== void 0 ? startTime : now;
                }
                if (this.state === "finished" && this.speed < 0) {
                    this.startTime += this.calculatedDuration;
                }
                this.holdTime = null;
                /**
         * Set playState to running only after we've used it in
         * the previous logic.
         */ this.state = "running";
                this.driver.start();
            }
        },
        {
            key: "pause",
            value: function pause() {
                this.state = "paused";
                this.updateTime(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$sync$2d$time$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["time"].now());
                this.holdTime = this.currentTime;
            }
        },
        {
            key: "complete",
            value: function complete() {
                if (this.state !== "running") {
                    this.play();
                }
                this.state = "finished";
                this.holdTime = null;
            }
        },
        {
            key: "finish",
            value: function finish() {
                var _this_options_onComplete, _this_options;
                this.notifyFinished();
                this.teardown();
                this.state = "finished";
                (_this_options_onComplete = (_this_options = this.options).onComplete) === null || _this_options_onComplete === void 0 ? void 0 : _this_options_onComplete.call(_this_options);
            }
        },
        {
            key: "cancel",
            value: function cancel() {
                var _this_options_onCancel, _this_options;
                this.holdTime = null;
                this.startTime = 0;
                this.tick(0);
                this.teardown();
                (_this_options_onCancel = (_this_options = this.options).onCancel) === null || _this_options_onCancel === void 0 ? void 0 : _this_options_onCancel.call(_this_options);
            }
        },
        {
            key: "teardown",
            value: function teardown() {
                this.state = "idle";
                this.stopDriver();
                this.startTime = this.holdTime = null;
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$stats$2f$animation$2d$count$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["activeAnimations"].mainThread--;
            }
        },
        {
            key: "stopDriver",
            value: function stopDriver() {
                if (!this.driver) return;
                this.driver.stop();
                this.driver = undefined;
            }
        },
        {
            key: "sample",
            value: function sample(sampleTime) {
                this.startTime = 0;
                return this.tick(sampleTime, true);
            }
        },
        {
            key: "attachTimeline",
            value: function attachTimeline(timeline) {
                var _this_driver;
                if (this.options.allowFlatten) {
                    this.options.type = "keyframes";
                    this.options.ease = "linear";
                    this.initAnimation();
                }
                (_this_driver = this.driver) === null || _this_driver === void 0 ? void 0 : _this_driver.stop();
                return timeline.observe(this);
            }
        }
    ]);
    return JSAnimation;
}(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$utils$2f$WithPromise$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WithPromise"]);
// Legacy function support
function animateValue(options) {
    return new JSAnimation(options);
}
;
 //# sourceMappingURL=JSAnimation.mjs.map
}),
"[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/animation/waapi/utils/unsupported-easing.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "replaceStringEasing",
    ()=>replaceStringEasing
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$29$2e$2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$anticipate$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-utils@12.29.2/node_modules/motion-utils/dist/es/easing/anticipate.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$29$2e$2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$back$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-utils@12.29.2/node_modules/motion-utils/dist/es/easing/back.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$29$2e$2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$circ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-utils@12.29.2/node_modules/motion-utils/dist/es/easing/circ.mjs [app-client] (ecmascript)");
;
var unsupportedEasingFunctions = {
    anticipate: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$29$2e$2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$anticipate$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["anticipate"],
    backInOut: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$29$2e$2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$back$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["backInOut"],
    circInOut: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$29$2e$2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$circ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["circInOut"]
};
function isUnsupportedEase(key) {
    return key in unsupportedEasingFunctions;
}
function replaceStringEasing(transition) {
    if (typeof transition.ease === "string" && isUnsupportedEase(transition.ease)) {
        transition.ease = unsupportedEasingFunctions[transition.ease];
    }
}
;
 //# sourceMappingURL=unsupported-easing.mjs.map
}),
"[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/animation/NativeAnimationExtended.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NativeAnimationExtended",
    ()=>NativeAnimationExtended
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_call_super$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_call_super.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_call_check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_class_call_check.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_create_class$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_create_class.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_inherits$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_inherits.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_object_spread.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_object_spread_props.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_without_properties$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_object_without_properties.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$29$2e$2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$clamp$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-utils@12.29.2/node_modules/motion-utils/dist/es/clamp.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$sync$2d$time$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/frameloop/sync-time.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$JSAnimation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/animation/JSAnimation.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$NativeAnimation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/animation/NativeAnimation.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$utils$2f$replace$2d$transition$2d$type$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/animation/utils/replace-transition-type.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$waapi$2f$utils$2f$unsupported$2d$easing$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/animation/waapi/utils/unsupported-easing.mjs [app-client] (ecmascript)");
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
/**
 * 10ms is chosen here as it strikes a balance between smooth
 * results (more than one keyframe per frame at 60fps) and
 * keyframe quantity.
 */ var sampleDelta = 10; //ms
var NativeAnimationExtended = /*#__PURE__*/ function(NativeAnimation) {
    "use strict";
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_inherits$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(NativeAnimationExtended, NativeAnimation);
    function NativeAnimationExtended(options) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_call_check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, NativeAnimationExtended);
        var _this;
        /**
         * The base NativeAnimation function only supports a subset
         * of Motion easings, and WAAPI also only supports some
         * easing functions via string/cubic-bezier definitions.
         *
         * This function replaces those unsupported easing functions
         * with a JS easing function. This will later get compiled
         * to a linear() easing function.
         */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$waapi$2f$utils$2f$unsupported$2d$easing$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["replaceStringEasing"])(options);
        /**
         * Ensure we replace the transition type with a generator function
         * before passing to WAAPI.
         *
         * TODO: Does this have a better home? It could be shared with
         * JSAnimation.
         */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$utils$2f$replace$2d$transition$2d$type$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["replaceTransitionType"])(options);
        _this = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_call_super$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, NativeAnimationExtended, [
            options
        ]);
        if (options.startTime !== undefined) {
            _this.startTime = options.startTime;
        }
        _this.options = options;
        return _this;
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_create_class$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(NativeAnimationExtended, [
        {
            /**
     * WAAPI doesn't natively have any interruption capabilities.
     *
     * Rather than read committed styles back out of the DOM, we can
     * create a renderless JS animation and sample it twice to calculate
     * its current value, "previous" value, and therefore allow
     * Motion to calculate velocity for any subsequent animation.
     */ key: "updateMotionValue",
            value: function updateMotionValue(value) {
                var _this_options = this.options, motionValue = _this_options.motionValue, onUpdate = _this_options.onUpdate, onComplete = _this_options.onComplete, element = _this_options.element, options = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_without_properties$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(_this_options, [
                    "motionValue",
                    "onUpdate",
                    "onComplete",
                    "element"
                ]);
                if (!motionValue) return;
                if (value !== undefined) {
                    motionValue.set(value);
                    return;
                }
                var sampleAnimation = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$JSAnimation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["JSAnimation"]((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, options), {
                    autoplay: false
                }));
                /**
         * Use wall-clock elapsed time for sampling.
         * Under CPU load, WAAPI's currentTime may not reflect actual
         * elapsed time, causing incorrect sampling and visual jumps.
         */ var sampleTime = Math.max(sampleDelta, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$sync$2d$time$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["time"].now() - this.startTime);
                var delta = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$29$2e$2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$clamp$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clamp"])(0, sampleDelta, sampleTime - sampleDelta);
                motionValue.setWithVelocity(sampleAnimation.sample(Math.max(0, sampleTime - delta)).value, sampleAnimation.sample(sampleTime).value, delta);
                sampleAnimation.stop();
            }
        }
    ]);
    return NativeAnimationExtended;
}(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$NativeAnimation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NativeAnimation"]);
;
 //# sourceMappingURL=NativeAnimationExtended.mjs.map
}),
"[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/animation/utils/is-animatable.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isAnimatable",
    ()=>isAnimatable
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$complex$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/value/types/complex/index.mjs [app-client] (ecmascript)");
;
/**
 * Check if a value is animatable. Examples:
 *
 * ✅: 100, "100px", "#fff"
 * ❌: "block", "url(2.jpg)"
 * @param value
 *
 * @internal
 */ var isAnimatable = function(value, name) {
    // If the list of keys that might be non-animatable grows, replace with Set
    if (name === "zIndex") return false;
    // If it's a number or a keyframes array, we can animate it. We might at some point
    // need to do a deep isAnimatable check of keyframes, or let Popmotion handle this,
    // but for now lets leave it like this for performance reasons
    if (typeof value === "number" || Array.isArray(value)) return true;
    if (typeof value === "string" && // It's animatable if we have a string
    (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$complex$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["complex"].test(value) || value === "0") && // And it contains numbers and/or colors
    !value.startsWith("url(") // Unless it starts with "url("
    ) {
        return true;
    }
    return false;
};
;
 //# sourceMappingURL=is-animatable.mjs.map
}),
"[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/animation/utils/can-animate.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "canAnimate",
    ()=>canAnimate
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$29$2e$2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$errors$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-utils@12.29.2/node_modules/motion-utils/dist/es/errors.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$generators$2f$utils$2f$is$2d$generator$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/animation/generators/utils/is-generator.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$utils$2f$is$2d$animatable$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/animation/utils/is-animatable.mjs [app-client] (ecmascript)");
;
;
;
function hasKeyframesChanged(keyframes) {
    var current = keyframes[0];
    if (keyframes.length === 1) return true;
    for(var i = 0; i < keyframes.length; i++){
        if (keyframes[i] !== current) return true;
    }
}
function canAnimate(keyframes, name, type, velocity) {
    /**
     * Check if we're able to animate between the start and end keyframes,
     * and throw a warning if we're attempting to animate between one that's
     * animatable and another that isn't.
     */ var originKeyframe = keyframes[0];
    if (originKeyframe === null) {
        return false;
    }
    /**
     * These aren't traditionally animatable but we do support them.
     * In future we could look into making this more generic or replacing
     * this function with mix() === mixImmediate
     */ if (name === "display" || name === "visibility") return true;
    var targetKeyframe = keyframes[keyframes.length - 1];
    var isOriginAnimatable = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$utils$2f$is$2d$animatable$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isAnimatable"])(originKeyframe, name);
    var isTargetAnimatable = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$utils$2f$is$2d$animatable$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isAnimatable"])(targetKeyframe, name);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$29$2e$2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$errors$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["warning"])(isOriginAnimatable === isTargetAnimatable, "You are trying to animate ".concat(name, ' from "').concat(originKeyframe, '" to "').concat(targetKeyframe, '". "').concat(isOriginAnimatable ? targetKeyframe : originKeyframe, '" is not an animatable value.'), "value-not-animatable");
    // Always skip if any of these are true
    if (!isOriginAnimatable || !isTargetAnimatable) {
        return false;
    }
    return hasKeyframesChanged(keyframes) || (type === "spring" || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$generators$2f$utils$2f$is$2d$generator$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isGenerator"])(type)) && velocity;
}
;
 //# sourceMappingURL=can-animate.mjs.map
}),
"[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/animation/utils/make-animation-instant.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "makeAnimationInstant",
    ()=>makeAnimationInstant
]);
function makeAnimationInstant(options) {
    options.duration = 0;
    options.type = "keyframes";
}
;
 //# sourceMappingURL=make-animation-instant.mjs.map
}),
"[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/animation/waapi/supports/waapi.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "supportsBrowserAnimation",
    ()=>supportsBrowserAnimation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_instanceof$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_instanceof.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$29$2e$2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$memo$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-utils@12.29.2/node_modules/motion-utils/dist/es/memo.mjs [app-client] (ecmascript)");
;
;
/**
 * A list of values that can be hardware-accelerated.
 */ var acceleratedValues = new Set([
    "opacity",
    "clipPath",
    "filter",
    "transform"
]);
var supportsWaapi = /*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$29$2e$2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$memo$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memo"])(function() {
    return Object.hasOwnProperty.call(Element.prototype, "animate");
});
function supportsBrowserAnimation(options) {
    var _motionValue_owner;
    var motionValue = options.motionValue, name = options.name, repeatDelay = options.repeatDelay, repeatType = options.repeatType, damping = options.damping, type = options.type;
    var subject = motionValue === null || motionValue === void 0 ? void 0 : (_motionValue_owner = motionValue.owner) === null || _motionValue_owner === void 0 ? void 0 : _motionValue_owner.current;
    /**
     * We use this check instead of isHTMLElement() because we explicitly
     * **don't** want elements in different timing contexts (i.e. popups)
     * to be accelerated, as it's not possible to sync these animations
     * properly with those driven from the main window frameloop.
     */ if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_instanceof$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(subject, HTMLElement)) {
        return false;
    }
    var _motionValue_owner_getProps = motionValue.owner.getProps(), onUpdate = _motionValue_owner_getProps.onUpdate, transformTemplate = _motionValue_owner_getProps.transformTemplate;
    return supportsWaapi() && name && acceleratedValues.has(name) && (name !== "transform" || !transformTemplate) && /**
         * If we're outputting values to onUpdate then we can't use WAAPI as there's
         * no way to read the value from WAAPI every frame.
         */ !onUpdate && !repeatDelay && repeatType !== "mirror" && damping !== 0 && type !== "inertia";
}
;
 //# sourceMappingURL=waapi.mjs.map
}),
"[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/animation/AsyncMotionValueAnimation.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AsyncMotionValueAnimation",
    ()=>AsyncMotionValueAnimation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_call_super$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_call_super.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_call_check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_class_call_check.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_create_class$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_create_class.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_inherits$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_inherits.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_object_spread.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_object_spread_props.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_without_properties$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_object_without_properties.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$29$2e$2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$global$2d$config$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-utils@12.29.2/node_modules/motion-utils/dist/es/global-config.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$29$2e$2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$noop$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-utils@12.29.2/node_modules/motion-utils/dist/es/noop.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$sync$2d$time$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/frameloop/sync-time.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$JSAnimation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/animation/JSAnimation.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$keyframes$2f$get$2d$final$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/animation/keyframes/get-final.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$keyframes$2f$KeyframesResolver$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/animation/keyframes/KeyframesResolver.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$NativeAnimationExtended$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/animation/NativeAnimationExtended.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$utils$2f$can$2d$animate$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/animation/utils/can-animate.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$utils$2f$make$2d$animation$2d$instant$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/animation/utils/make-animation-instant.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$utils$2f$WithPromise$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/animation/utils/WithPromise.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$waapi$2f$supports$2f$waapi$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/animation/waapi/supports/waapi.mjs [app-client] (ecmascript)");
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
/**
 * Maximum time allowed between an animation being created and it being
 * resolved for us to use the latter as the start time.
 *
 * This is to ensure that while we prefer to "start" an animation as soon
 * as it's triggered, we also want to avoid a visual jump if there's a big delay
 * between these two moments.
 */ var MAX_RESOLVE_DELAY = 40;
var AsyncMotionValueAnimation = /*#__PURE__*/ function(WithPromise) {
    "use strict";
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_inherits$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(AsyncMotionValueAnimation, WithPromise);
    function AsyncMotionValueAnimation(_0) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_call_check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, AsyncMotionValueAnimation);
        var _this;
        var _0_autoplay = _0.autoplay, autoplay = _0_autoplay === void 0 ? true : _0_autoplay, _0_delay = _0.delay, delay = _0_delay === void 0 ? 0 : _0_delay, _0_type = _0.type, type = _0_type === void 0 ? "keyframes" : _0_type, _0_repeat = _0.repeat, repeat = _0_repeat === void 0 ? 0 : _0_repeat, _0_repeatDelay = _0.repeatDelay, repeatDelay = _0_repeatDelay === void 0 ? 0 : _0_repeatDelay, _0_repeatType = _0.repeatType, repeatType = _0_repeatType === void 0 ? "loop" : _0_repeatType, keyframes = _0.keyframes, name = _0.name, motionValue = _0.motionValue, element = _0.element, options = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_without_properties$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(_0, [
            "autoplay",
            "delay",
            "type",
            "repeat",
            "repeatDelay",
            "repeatType",
            "keyframes",
            "name",
            "motionValue",
            "element"
        ]);
        var _this_keyframeResolver;
        _this = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_call_super$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, AsyncMotionValueAnimation);
        /**
         * Bound to support return animation.stop pattern
         */ _this.stop = function() {
            var _this_keyframeResolver;
            if (_this._animation) {
                var _this_stopTimeline, _this1;
                _this._animation.stop();
                (_this_stopTimeline = (_this1 = _this).stopTimeline) === null || _this_stopTimeline === void 0 ? void 0 : _this_stopTimeline.call(_this1);
            }
            (_this_keyframeResolver = _this.keyframeResolver) === null || _this_keyframeResolver === void 0 ? void 0 : _this_keyframeResolver.cancel();
        };
        _this.createdAt = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$sync$2d$time$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["time"].now();
        var optionsWithDefaults = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({
            autoplay: autoplay,
            delay: delay,
            type: type,
            repeat: repeat,
            repeatDelay: repeatDelay,
            repeatType: repeatType,
            name: name,
            motionValue: motionValue,
            element: element
        }, options);
        var KeyframeResolver$1 = (element === null || element === void 0 ? void 0 : element.KeyframeResolver) || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$keyframes$2f$KeyframesResolver$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KeyframeResolver"];
        _this.keyframeResolver = new KeyframeResolver$1(keyframes, function(resolvedKeyframes, finalKeyframe, forced) {
            return _this.onKeyframesResolved(resolvedKeyframes, finalKeyframe, optionsWithDefaults, !forced);
        }, name, motionValue, element);
        (_this_keyframeResolver = _this.keyframeResolver) === null || _this_keyframeResolver === void 0 ? void 0 : _this_keyframeResolver.scheduleResolve();
        return _this;
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_create_class$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(AsyncMotionValueAnimation, [
        {
            key: "onKeyframesResolved",
            value: function onKeyframesResolved(keyframes, finalKeyframe, options, sync) {
                var _this = this;
                var _resolvedOptions_motionValue_owner, _resolvedOptions_motionValue;
                this.keyframeResolver = undefined;
                var name = options.name, type = options.type, velocity = options.velocity, delay = options.delay, isHandoff = options.isHandoff, onUpdate = options.onUpdate;
                this.resolvedAt = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$sync$2d$time$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["time"].now();
                /**
         * If we can't animate this value with the resolved keyframes
         * then we should complete it immediately.
         */ if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$utils$2f$can$2d$animate$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["canAnimate"])(keyframes, name, type, velocity)) {
                    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$29$2e$2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$global$2d$config$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MotionGlobalConfig"].instantAnimations || !delay) {
                        onUpdate === null || onUpdate === void 0 ? void 0 : onUpdate((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$keyframes$2f$get$2d$final$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFinalKeyframe"])(keyframes, options, finalKeyframe));
                    }
                    keyframes[0] = keyframes[keyframes.length - 1];
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$utils$2f$make$2d$animation$2d$instant$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["makeAnimationInstant"])(options);
                    options.repeat = 0;
                }
                /**
         * Resolve startTime for the animation.
         *
         * This method uses the createdAt and resolvedAt to calculate the
         * animation startTime. *Ideally*, we would use the createdAt time as t=0
         * as the following frame would then be the first frame of the animation in
         * progress, which would feel snappier.
         *
         * However, if there's a delay (main thread work) between the creation of
         * the animation and the first committed frame, we prefer to use resolvedAt
         * to avoid a sudden jump into the animation.
         */ var startTime = sync ? !this.resolvedAt ? this.createdAt : this.resolvedAt - this.createdAt > MAX_RESOLVE_DELAY ? this.resolvedAt : this.createdAt : undefined;
                var resolvedOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({
                    startTime: startTime,
                    finalKeyframe: finalKeyframe
                }, options), {
                    keyframes: keyframes
                });
                /**
         * Animate via WAAPI if possible. If this is a handoff animation, the optimised animation will be running via
         * WAAPI. Therefore, this animation must be JS to ensure it runs "under" the
         * optimised animation.
         */ var useWaapi = !isHandoff && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$waapi$2f$supports$2f$waapi$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supportsBrowserAnimation"])(resolvedOptions);
                var element = (_resolvedOptions_motionValue = resolvedOptions.motionValue) === null || _resolvedOptions_motionValue === void 0 ? void 0 : (_resolvedOptions_motionValue_owner = _resolvedOptions_motionValue.owner) === null || _resolvedOptions_motionValue_owner === void 0 ? void 0 : _resolvedOptions_motionValue_owner.current;
                var animation = useWaapi ? new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$NativeAnimationExtended$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NativeAnimationExtended"]((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, resolvedOptions), {
                    element: element
                })) : new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$JSAnimation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["JSAnimation"](resolvedOptions);
                animation.finished.then(function() {
                    _this.notifyFinished();
                }).catch(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$29$2e$2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$noop$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["noop"]);
                if (this.pendingTimeline) {
                    this.stopTimeline = animation.attachTimeline(this.pendingTimeline);
                    this.pendingTimeline = undefined;
                }
                this._animation = animation;
            }
        },
        {
            key: "finished",
            get: function get() {
                if (!this._animation) {
                    return this._finished;
                } else {
                    return this.animation.finished;
                }
            }
        },
        {
            key: "then",
            value: function then(onResolve, _onReject) {
                return this.finished.finally(onResolve).then(function() {});
            }
        },
        {
            key: "animation",
            get: function get() {
                if (!this._animation) {
                    var _this_keyframeResolver;
                    (_this_keyframeResolver = this.keyframeResolver) === null || _this_keyframeResolver === void 0 ? void 0 : _this_keyframeResolver.resume();
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$keyframes$2f$KeyframesResolver$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["flushKeyframeResolvers"])();
                }
                return this._animation;
            }
        },
        {
            key: "duration",
            get: function get() {
                return this.animation.duration;
            }
        },
        {
            key: "iterationDuration",
            get: function get() {
                return this.animation.iterationDuration;
            }
        },
        {
            key: "time",
            get: function get() {
                return this.animation.time;
            },
            set: function set(newTime) {
                this.animation.time = newTime;
            }
        },
        {
            key: "speed",
            get: function get() {
                return this.animation.speed;
            },
            set: function set(newSpeed) {
                this.animation.speed = newSpeed;
            }
        },
        {
            key: "state",
            get: function get() {
                return this.animation.state;
            }
        },
        {
            key: "startTime",
            get: function get() {
                return this.animation.startTime;
            }
        },
        {
            key: "attachTimeline",
            value: function attachTimeline(timeline) {
                var _this = this;
                if (this._animation) {
                    this.stopTimeline = this.animation.attachTimeline(timeline);
                } else {
                    this.pendingTimeline = timeline;
                }
                return function() {
                    return _this.stop();
                };
            }
        },
        {
            key: "play",
            value: function play() {
                this.animation.play();
            }
        },
        {
            key: "pause",
            value: function pause() {
                this.animation.pause();
            }
        },
        {
            key: "complete",
            value: function complete() {
                this.animation.complete();
            }
        },
        {
            key: "cancel",
            value: function cancel() {
                var _this_keyframeResolver;
                if (this._animation) {
                    this.animation.cancel();
                }
                (_this_keyframeResolver = this.keyframeResolver) === null || _this_keyframeResolver === void 0 ? void 0 : _this_keyframeResolver.cancel();
            }
        }
    ]);
    return AsyncMotionValueAnimation;
}(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$utils$2f$WithPromise$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WithPromise"]);
;
 //# sourceMappingURL=AsyncMotionValueAnimation.mjs.map
}),
"[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/animation/utils/default-transitions.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getDefaultTransition",
    ()=>getDefaultTransition
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$utils$2f$keys$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/render/utils/keys-transform.mjs [app-client] (ecmascript)");
;
var underDampedSpring = {
    type: "spring",
    stiffness: 500,
    damping: 25,
    restSpeed: 10
};
var criticallyDampedSpring = function(target) {
    return {
        type: "spring",
        stiffness: 550,
        damping: target === 0 ? 2 * Math.sqrt(550) : 30,
        restSpeed: 10
    };
};
var keyframesTransition = {
    type: "keyframes",
    duration: 0.8
};
/**
 * Default easing curve is a slightly shallower version of
 * the default browser easing curve.
 */ var ease = {
    type: "keyframes",
    ease: [
        0.25,
        0.1,
        0.35,
        1
    ],
    duration: 0.3
};
var getDefaultTransition = function(valueKey, param) {
    var keyframes = param.keyframes;
    if (keyframes.length > 2) {
        return keyframesTransition;
    } else if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$utils$2f$keys$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformProps"].has(valueKey)) {
        return valueKey.startsWith("scale") ? criticallyDampedSpring(keyframes[1]) : underDampedSpring;
    }
    return ease;
};
;
 //# sourceMappingURL=default-transitions.mjs.map
}),
"[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/animation/utils/get-final-keyframe.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getFinalKeyframe",
    ()=>getFinalKeyframe
]);
var isNotNull = function(value) {
    return value !== null;
};
function getFinalKeyframe(keyframes, param, finalKeyframe) {
    var repeat = param.repeat, _param_repeatType = param.repeatType, repeatType = _param_repeatType === void 0 ? "loop" : _param_repeatType;
    var resolvedKeyframes = keyframes.filter(isNotNull);
    var index = repeat && repeatType !== "loop" && repeat % 2 === 1 ? 0 : resolvedKeyframes.length - 1;
    return !index || finalKeyframe === undefined ? resolvedKeyframes[index] : finalKeyframe;
}
;
 //# sourceMappingURL=get-final-keyframe.mjs.map
}),
"[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/animation/utils/is-transition-defined.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isTransitionDefined",
    ()=>isTransitionDefined
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_without_properties$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_object_without_properties.js [app-client] (ecmascript)");
;
/**
 * Decide whether a transition is defined on a given Transition.
 * This filters out orchestration options and returns true
 * if any options are left.
 */ function isTransitionDefined(_0) {
    var when = _0.when, _delay = _0.delay, delayChildren = _0.delayChildren, staggerChildren = _0.staggerChildren, staggerDirection = _0.staggerDirection, repeat = _0.repeat, repeatType = _0.repeatType, repeatDelay = _0.repeatDelay, from = _0.from, elapsed = _0.elapsed, transition = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_without_properties$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(_0, [
        "when",
        "delay",
        "delayChildren",
        "staggerChildren",
        "staggerDirection",
        "repeat",
        "repeatType",
        "repeatDelay",
        "from",
        "elapsed"
    ]);
    return !!Object.keys(transition).length;
}
;
 //# sourceMappingURL=is-transition-defined.mjs.map
}),
"[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/animation/interfaces/motion-value.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "animateMotionValue",
    ()=>animateMotionValue
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_object_spread.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_object_spread_props.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$29$2e$2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$time$2d$conversion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-utils@12.29.2/node_modules/motion-utils/dist/es/time-conversion.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$29$2e$2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$global$2d$config$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-utils@12.29.2/node_modules/motion-utils/dist/es/global-config.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$AsyncMotionValueAnimation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/animation/AsyncMotionValueAnimation.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$JSAnimation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/animation/JSAnimation.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$utils$2f$get$2d$value$2d$transition$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/animation/utils/get-value-transition.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$utils$2f$make$2d$animation$2d$instant$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/animation/utils/make-animation-instant.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$utils$2f$default$2d$transitions$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/animation/utils/default-transitions.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$utils$2f$get$2d$final$2d$keyframe$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/animation/utils/get-final-keyframe.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$utils$2f$is$2d$transition$2d$defined$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/animation/utils/is-transition-defined.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$frame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/frameloop/frame.mjs [app-client] (ecmascript)");
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
var animateMotionValue = function(name, value, target) {
    var transition = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, element = arguments.length > 4 ? arguments[4] : void 0, isHandoff = arguments.length > 5 ? arguments[5] : void 0;
    return function(onComplete) {
        var valueTransition = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$utils$2f$get$2d$value$2d$transition$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getValueTransition"])(transition, name) || {};
        /**
     * Most transition values are currently completely overwritten by value-specific
     * transitions. In the future it'd be nicer to blend these transitions. But for now
     * delay actually does inherit from the root transition if not value-specific.
     */ var delay = valueTransition.delay || transition.delay || 0;
        /**
     * Elapsed isn't a public transition option but can be passed through from
     * optimized appear effects in milliseconds.
     */ var _transition_elapsed = transition.elapsed, elapsed = _transition_elapsed === void 0 ? 0 : _transition_elapsed;
        elapsed = elapsed - (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$29$2e$2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$time$2d$conversion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["secondsToMilliseconds"])(delay);
        var options = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({
            keyframes: Array.isArray(target) ? target : [
                null,
                target
            ],
            ease: "easeOut",
            velocity: value.getVelocity()
        }, valueTransition), {
            delay: -elapsed,
            onUpdate: function(v) {
                value.set(v);
                valueTransition.onUpdate && valueTransition.onUpdate(v);
            },
            onComplete: function() {
                onComplete();
                valueTransition.onComplete && valueTransition.onComplete();
            },
            name: name,
            motionValue: value,
            element: isHandoff ? undefined : element
        });
        /**
     * If there's no transition defined for this value, we can generate
     * unique transition settings for this value.
     */ if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$utils$2f$is$2d$transition$2d$defined$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTransitionDefined"])(valueTransition)) {
            Object.assign(options, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$utils$2f$default$2d$transitions$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDefaultTransition"])(name, options));
        }
        /**
     * Both WAAPI and our internal animation functions use durations
     * as defined by milliseconds, while our external API defines them
     * as seconds.
     */ options.duration && (options.duration = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$29$2e$2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$time$2d$conversion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["secondsToMilliseconds"])(options.duration));
        options.repeatDelay && (options.repeatDelay = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$29$2e$2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$time$2d$conversion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["secondsToMilliseconds"])(options.repeatDelay));
        /**
     * Support deprecated way to set initial value. Prefer keyframe syntax.
     */ if (options.from !== undefined) {
            options.keyframes[0] = options.from;
        }
        var shouldSkip = false;
        if (options.type === false || options.duration === 0 && !options.repeatDelay) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$utils$2f$make$2d$animation$2d$instant$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["makeAnimationInstant"])(options);
            if (options.delay === 0) {
                shouldSkip = true;
            }
        }
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$29$2e$2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$global$2d$config$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MotionGlobalConfig"].instantAnimations || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$29$2e$2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$global$2d$config$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MotionGlobalConfig"].skipAnimations || (element === null || element === void 0 ? void 0 : element.shouldSkipAnimations)) {
            shouldSkip = true;
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$utils$2f$make$2d$animation$2d$instant$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["makeAnimationInstant"])(options);
            options.delay = 0;
        }
        /**
     * If the transition type or easing has been explicitly set by the user
     * then we don't want to allow flattening the animation.
     */ options.allowFlatten = !valueTransition.type && !valueTransition.ease;
        /**
     * If we can or must skip creating the animation, and apply only
     * the final keyframe, do so. We also check once keyframes are resolved but
     * this early check prevents the need to create an animation at all.
     */ if (shouldSkip && !isHandoff && value.get() !== undefined) {
            var finalKeyframe = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$utils$2f$get$2d$final$2d$keyframe$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFinalKeyframe"])(options.keyframes, valueTransition);
            if (finalKeyframe !== undefined) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$frame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["frame"].update(function() {
                    options.onUpdate(finalKeyframe);
                    options.onComplete();
                });
                return;
            }
        }
        return valueTransition.isSync ? new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$JSAnimation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["JSAnimation"](options) : new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$AsyncMotionValueAnimation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AsyncMotionValueAnimation"](options);
    };
};
;
 //# sourceMappingURL=motion-value.mjs.map
}),
"[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/animation/interfaces/visual-element-target.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "animateTarget",
    ()=>animateTarget
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_object_spread.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_without_properties$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_object_without_properties.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$utils$2f$get$2d$value$2d$transition$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/animation/utils/get-value-transition.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$utils$2f$resolve$2d$transition$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/animation/utils/resolve-transition.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$utils$2f$keys$2d$position$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/render/utils/keys-position.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$utils$2f$setters$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/render/utils/setters.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$will$2d$change$2f$add$2d$will$2d$change$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/value/will-change/add-will-change.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$optimized$2d$appear$2f$get$2d$appear$2d$id$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/animation/optimized-appear/get-appear-id.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$interfaces$2f$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/animation/interfaces/motion-value.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$frame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/frameloop/frame.mjs [app-client] (ecmascript)");
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
/**
 * Decide whether we should block this animation. Previously, we achieved this
 * just by checking whether the key was listed in protectedKeys, but this
 * posed problems if an animation was triggered by afterChildren and protectedKeys
 * had been set to true in the meantime.
 */ function shouldBlockAnimation(param, key) {
    var protectedKeys = param.protectedKeys, needsAnimating = param.needsAnimating;
    var shouldBlock = protectedKeys.hasOwnProperty(key) && needsAnimating[key] !== true;
    needsAnimating[key] = false;
    return shouldBlock;
}
function animateTarget(visualElement, targetAndTransition) {
    var _ref = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, _ref_delay = _ref.delay, delay = _ref_delay === void 0 ? 0 : _ref_delay, transitionOverride = _ref.transitionOverride, type = _ref.type;
    var transition = targetAndTransition.transition, transitionEnd = targetAndTransition.transitionEnd, target = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_without_properties$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(targetAndTransition, [
        "transition",
        "transitionEnd"
    ]);
    var defaultTransition = visualElement.getDefaultTransition();
    transition = transition ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$utils$2f$resolve$2d$transition$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveTransition"])(transition, defaultTransition) : defaultTransition;
    var reduceMotion = transition === null || transition === void 0 ? void 0 : transition.reduceMotion;
    if (transitionOverride) transition = transitionOverride;
    var animations = [];
    var animationTypeState = type && visualElement.animationState && visualElement.animationState.getState()[type];
    for(var key in target){
        var _visualElement_latestValues_key;
        var value = visualElement.getValue(key, (_visualElement_latestValues_key = visualElement.latestValues[key]) !== null && _visualElement_latestValues_key !== void 0 ? _visualElement_latestValues_key : null);
        var valueTarget = target[key];
        if (valueTarget === undefined || animationTypeState && shouldBlockAnimation(animationTypeState, key)) {
            continue;
        }
        var valueTransition = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({
            delay: delay
        }, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$utils$2f$get$2d$value$2d$transition$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getValueTransition"])(transition || {}, key));
        /**
         * If the value is already at the defined target, skip the animation.
         */ var currentValue = value.get();
        if (currentValue !== undefined && !value.isAnimating && !Array.isArray(valueTarget) && valueTarget === currentValue && !valueTransition.velocity) {
            continue;
        }
        /**
         * If this is the first time a value is being animated, check
         * to see if we're handling off from an existing animation.
         */ var isHandoff = false;
        if (window.MotionHandoffAnimation) {
            var appearId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$optimized$2d$appear$2f$get$2d$appear$2d$id$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getOptimisedAppearId"])(visualElement);
            if (appearId) {
                var startTime = window.MotionHandoffAnimation(appearId, key, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$frame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["frame"]);
                if (startTime !== null) {
                    valueTransition.startTime = startTime;
                    isHandoff = true;
                }
            }
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$will$2d$change$2f$add$2d$will$2d$change$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addValueToWillChange"])(visualElement, key);
        var shouldReduceMotion = reduceMotion !== null && reduceMotion !== void 0 ? reduceMotion : visualElement.shouldReduceMotion;
        value.start((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$interfaces$2f$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["animateMotionValue"])(key, value, valueTarget, shouldReduceMotion && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$utils$2f$keys$2d$position$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["positionalKeys"].has(key) ? {
            type: false
        } : valueTransition, visualElement, isHandoff));
        var animation = value.animation;
        if (animation) {
            animations.push(animation);
        }
    }
    if (transitionEnd) {
        var applyTransitionEnd = function() {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$frame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["frame"].update(function() {
                transitionEnd && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$utils$2f$setters$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setTarget"])(visualElement, transitionEnd);
            });
        };
        if (animations.length) {
            Promise.all(animations).then(applyTransitionEnd);
        } else {
            applyTransitionEnd();
        }
    }
    return animations;
}
;
 //# sourceMappingURL=visual-element-target.mjs.map
}),
"[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/animation/utils/calc-child-stagger.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "calcChildStagger",
    ()=>calcChildStagger
]);
function calcChildStagger(children, child, delayChildren) {
    var staggerChildren = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0, staggerDirection = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : 1;
    var index = Array.from(children).sort(function(a, b) {
        return a.sortNodePosition(b);
    }).indexOf(child);
    var numChildren = children.size;
    var maxStaggerDuration = (numChildren - 1) * staggerChildren;
    var delayIsFunction = typeof delayChildren === "function";
    return delayIsFunction ? delayChildren(index, numChildren) : staggerDirection === 1 ? index * staggerChildren : maxStaggerDuration - index * staggerChildren;
}
;
 //# sourceMappingURL=calc-child-stagger.mjs.map
}),
"[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/animation/interfaces/visual-element-variant.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "animateVariant",
    ()=>animateVariant
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_object_spread.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_object_spread_props.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_sliced_to_array.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$utils$2f$resolve$2d$dynamic$2d$variants$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/render/utils/resolve-dynamic-variants.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$utils$2f$calc$2d$child$2d$stagger$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/animation/utils/calc-child-stagger.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$interfaces$2f$visual$2d$element$2d$target$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/animation/interfaces/visual-element-target.mjs [app-client] (ecmascript)");
;
;
;
;
;
;
function animateVariant(visualElement, variant) {
    var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    var _visualElement_presenceContext;
    var resolved = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$utils$2f$resolve$2d$dynamic$2d$variants$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveVariant"])(visualElement, variant, options.type === "exit" ? (_visualElement_presenceContext = visualElement.presenceContext) === null || _visualElement_presenceContext === void 0 ? void 0 : _visualElement_presenceContext.custom : undefined);
    var _ref = resolved || {}, _ref_transition = _ref.transition, transition = _ref_transition === void 0 ? visualElement.getDefaultTransition() || {} : _ref_transition;
    if (options.transitionOverride) {
        transition = options.transitionOverride;
    }
    /**
     * If we have a variant, create a callback that runs it as an animation.
     * Otherwise, we resolve a Promise immediately for a composable no-op.
     */ var getAnimation = resolved ? function() {
        return Promise.all((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$interfaces$2f$visual$2d$element$2d$target$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["animateTarget"])(visualElement, resolved, options));
    } : function() {
        return Promise.resolve();
    };
    /**
     * If we have children, create a callback that runs all their animations.
     * Otherwise, we resolve a Promise immediately for a composable no-op.
     */ var getChildAnimations = visualElement.variantChildren && visualElement.variantChildren.size ? function() {
        var forwardDelay = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
        var _transition_delayChildren = transition.delayChildren, delayChildren = _transition_delayChildren === void 0 ? 0 : _transition_delayChildren, staggerChildren = transition.staggerChildren, staggerDirection = transition.staggerDirection;
        return animateChildren(visualElement, variant, forwardDelay, delayChildren, staggerChildren, staggerDirection, options);
    } : function() {
        return Promise.resolve();
    };
    /**
     * If the transition explicitly defines a "when" option, we need to resolve either
     * this animation or all children animations before playing the other.
     */ var when = transition.when;
    if (when) {
        var _ref1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(when === "beforeChildren" ? [
            getAnimation,
            getChildAnimations
        ] : [
            getChildAnimations,
            getAnimation
        ], 2), first = _ref1[0], last = _ref1[1];
        return first().then(function() {
            return last();
        });
    } else {
        return Promise.all([
            getAnimation(),
            getChildAnimations(options.delay)
        ]);
    }
}
function animateChildren(visualElement, variant) {
    var delay = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0, delayChildren = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0, staggerChildren = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : 0, staggerDirection = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : 1, options = arguments.length > 6 ? arguments[6] : void 0;
    var animations = [];
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        var _loop = function() {
            var child = _step.value;
            child.notify("AnimationStart", variant);
            animations.push(animateVariant(child, variant, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, options), {
                delay: delay + (typeof delayChildren === "function" ? 0 : delayChildren) + (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$utils$2f$calc$2d$child$2d$stagger$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calcChildStagger"])(visualElement.variantChildren, child, delayChildren, staggerChildren, staggerDirection)
            })).then(function() {
                return child.notify("AnimationComplete", variant);
            }));
        };
        for(var _iterator = visualElement.variantChildren[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true)_loop();
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
    return Promise.all(animations);
}
;
 //# sourceMappingURL=visual-element-variant.mjs.map
}),
"[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/animation/interfaces/visual-element.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "animateVisualElement",
    ()=>animateVisualElement
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$utils$2f$resolve$2d$dynamic$2d$variants$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/render/utils/resolve-dynamic-variants.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$interfaces$2f$visual$2d$element$2d$target$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/animation/interfaces/visual-element-target.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$interfaces$2f$visual$2d$element$2d$variant$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/animation/interfaces/visual-element-variant.mjs [app-client] (ecmascript)");
;
;
;
function animateVisualElement(visualElement, definition) {
    var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    visualElement.notify("AnimationStart", definition);
    var animation;
    if (Array.isArray(definition)) {
        var animations = definition.map(function(variant) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$interfaces$2f$visual$2d$element$2d$variant$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["animateVariant"])(visualElement, variant, options);
        });
        animation = Promise.all(animations);
    } else if (typeof definition === "string") {
        animation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$interfaces$2f$visual$2d$element$2d$variant$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["animateVariant"])(visualElement, definition, options);
    } else {
        var resolvedDefinition = typeof definition === "function" ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$utils$2f$resolve$2d$dynamic$2d$variants$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveVariant"])(visualElement, definition, options.custom) : definition;
        animation = Promise.all((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$interfaces$2f$visual$2d$element$2d$target$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["animateTarget"])(visualElement, resolvedDefinition, options));
    }
    return animation.then(function() {
        visualElement.notify("AnimationComplete", definition);
    });
}
;
 //# sourceMappingURL=visual-element.mjs.map
}),
"[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/render/utils/get-variant-context.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getVariantContext",
    ()=>getVariantContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$utils$2f$is$2d$variant$2d$label$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/render/utils/is-variant-label.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$utils$2f$variant$2d$props$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/render/utils/variant-props.mjs [app-client] (ecmascript)");
;
;
var numVariantProps = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$utils$2f$variant$2d$props$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["variantProps"].length;
/**
 * Get variant context from a visual element's parent chain.
 * Uses `any` type for visualElement to avoid circular dependencies.
 */ function getVariantContext(visualElement) {
    if (!visualElement) return undefined;
    if (!visualElement.isControllingVariants) {
        var context = visualElement.parent ? getVariantContext(visualElement.parent) || {} : {};
        if (visualElement.props.initial !== undefined) {
            context.initial = visualElement.props.initial;
        }
        return context;
    }
    var context1 = {};
    for(var i = 0; i < numVariantProps; i++){
        var name = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$utils$2f$variant$2d$props$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["variantProps"][i];
        var prop = visualElement.props[name];
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$utils$2f$is$2d$variant$2d$label$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isVariantLabel"])(prop) || prop === false) {
            context1[name] = prop;
        }
    }
    return context1;
}
;
 //# sourceMappingURL=get-variant-context.mjs.map
}),
"[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/render/utils/shallow-compare.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "shallowCompare",
    ()=>shallowCompare
]);
function shallowCompare(next, prev) {
    if (!Array.isArray(prev)) return false;
    var prevLength = prev.length;
    if (prevLength !== next.length) return false;
    for(var i = 0; i < prevLength; i++){
        if (prev[i] !== next[i]) return false;
    }
    return true;
}
;
 //# sourceMappingURL=shallow-compare.mjs.map
}),
"[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/render/utils/animation-state.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "checkVariantsDidChange",
    ()=>checkVariantsDidChange,
    "createAnimationState",
    ()=>createAnimationState
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_object_spread.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_without_properties$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_object_without_properties.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_to_consumable_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_to_consumable_array.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$interfaces$2f$visual$2d$element$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/animation/interfaces/visual-element.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$utils$2f$calc$2d$child$2d$stagger$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/animation/utils/calc-child-stagger.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$utils$2f$get$2d$variant$2d$context$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/render/utils/get-variant-context.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$utils$2f$is$2d$animation$2d$controls$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/render/utils/is-animation-controls.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$utils$2f$is$2d$keyframes$2d$target$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/render/utils/is-keyframes-target.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$utils$2f$is$2d$variant$2d$label$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/render/utils/is-variant-label.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$utils$2f$resolve$2d$dynamic$2d$variants$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/render/utils/resolve-dynamic-variants.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$utils$2f$shallow$2d$compare$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/render/utils/shallow-compare.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$utils$2f$variant$2d$props$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/render/utils/variant-props.mjs [app-client] (ecmascript)");
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
var reversePriorityOrder = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_to_consumable_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$utils$2f$variant$2d$props$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["variantPriorityOrder"]).reverse();
var numAnimationTypes = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$utils$2f$variant$2d$props$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["variantPriorityOrder"].length;
function createAnimateFunction(visualElement) {
    return function(animations) {
        return Promise.all(animations.map(function(param) {
            var animation = param.animation, options = param.options;
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$interfaces$2f$visual$2d$element$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["animateVisualElement"])(visualElement, animation, options);
        }));
    };
}
function createAnimationState(visualElement) {
    var animate = createAnimateFunction(visualElement);
    var state = createState();
    var isInitialRender = true;
    /**
     * This function will be used to reduce the animation definitions for
     * each active animation type into an object of resolved values for it.
     */ var buildResolvedTypeValues = function(type) {
        return function(acc, definition) {
            var _visualElement_presenceContext;
            var resolved = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$utils$2f$resolve$2d$dynamic$2d$variants$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveVariant"])(visualElement, definition, type === "exit" ? (_visualElement_presenceContext = visualElement.presenceContext) === null || _visualElement_presenceContext === void 0 ? void 0 : _visualElement_presenceContext.custom : undefined);
            if (resolved) {
                var transition = resolved.transition, transitionEnd = resolved.transitionEnd, target = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_without_properties$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(resolved, [
                    "transition",
                    "transitionEnd"
                ]);
                acc = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, acc, target, transitionEnd);
            }
            return acc;
        };
    };
    /**
     * This just allows us to inject mocked animation functions
     * @internal
     */ function setAnimateFunction(makeAnimator) {
        animate = makeAnimator(visualElement);
    }
    /**
     * When we receive new props, we need to:
     * 1. Create a list of protected keys for each type. This is a directory of
     *    value keys that are currently being "handled" by types of a higher priority
     *    so that whenever an animation is played of a given type, these values are
     *    protected from being animated.
     * 2. Determine if an animation type needs animating.
     * 3. Determine if any values have been removed from a type and figure out
     *    what to animate those to.
     */ function animateChanges(changedActiveType) {
        var _loop = function(i) {
            var type = reversePriorityOrder[i];
            var typeState = state[type];
            var prop = props[type] !== undefined ? props[type] : context[type];
            var propIsVariant = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$utils$2f$is$2d$variant$2d$label$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isVariantLabel"])(prop);
            /**
             * If this type has *just* changed isActive status, set activeDelta
             * to that status. Otherwise set to null.
             */ var activeDelta = type === changedActiveType ? typeState.isActive : null;
            if (activeDelta === false) removedVariantIndex = i;
            /**
             * If this prop is an inherited variant, rather than been set directly on the
             * component itself, we want to make sure we allow the parent to trigger animations.
             *
             * TODO: Can probably change this to a !isControllingVariants check
             */ var isInherited = prop === context[type] && prop !== props[type] && propIsVariant;
            if (isInherited && isInitialRender && visualElement.manuallyAnimateOnMount) {
                isInherited = false;
            }
            /**
             * Set all encountered keys so far as the protected keys for this type. This will
             * be any key that has been animated or otherwise handled by active, higher-priortiy types.
             */ typeState.protectedKeys = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, encounteredKeys);
            // Check if we can skip analysing this prop early
            if (// If it isn't active and hasn't *just* been set as inactive
            !typeState.isActive && activeDelta === null || !prop && !typeState.prevProp || // Or if the prop doesn't define an animation
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$utils$2f$is$2d$animation$2d$controls$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isAnimationControls"])(prop) || typeof prop === "boolean") {
                return "continue";
            }
            /**
             * If exit is already active and wasn't just activated, skip
             * re-processing to prevent interrupting running exit animations.
             * Re-resolving exit with a changed custom value can start new
             * value animations that stop the originals, leaving the exit
             * animation promise unresolved and the component stuck in the DOM.
             */ if (type === "exit" && typeState.isActive && activeDelta !== true) {
                if (typeState.prevResolvedValues) {
                    encounteredKeys = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, encounteredKeys, typeState.prevResolvedValues);
                }
                return "continue";
            }
            /**
             * As we go look through the values defined on this type, if we detect
             * a changed value or a value that was removed in a higher priority, we set
             * this to true and add this prop to the animation list.
             */ var variantDidChange = checkVariantsDidChange(typeState.prevProp, prop);
            var shouldAnimateType = variantDidChange || type === changedActiveType && typeState.isActive && !isInherited && propIsVariant || i > removedVariantIndex && propIsVariant;
            var handledRemovedValues = false;
            /**
             * As animations can be set as variant lists, variants or target objects, we
             * coerce everything to an array if it isn't one already
             */ var definitionList = Array.isArray(prop) ? prop : [
                prop
            ];
            /**
             * Build an object of all the resolved values. We'll use this in the subsequent
             * animateChanges calls to determine whether a value has changed.
             */ var resolvedValues = definitionList.reduce(buildResolvedTypeValues(type), {});
            if (activeDelta === false) resolvedValues = {};
            /**
             * Now we need to loop through all the keys in the prev prop and this prop,
             * and decide:
             * 1. If the value has changed, and needs animating
             * 2. If it has been removed, and needs adding to the removedKeys set
             * 3. If it has been removed in a higher priority type and needs animating
             * 4. If it hasn't been removed in a higher priority but hasn't changed, and
             *    needs adding to the type's protectedKeys list.
             */ var _typeState_prevResolvedValues = typeState.prevResolvedValues, prevResolvedValues = _typeState_prevResolvedValues === void 0 ? {} : _typeState_prevResolvedValues;
            var allKeys = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, prevResolvedValues, resolvedValues);
            var markToAnimate = function(key) {
                shouldAnimateType = true;
                if (removedKeys.has(key)) {
                    handledRemovedValues = true;
                    removedKeys.delete(key);
                }
                typeState.needsAnimating[key] = true;
                var motionValue = visualElement.getValue(key);
                if (motionValue) motionValue.liveStyle = false;
            };
            for(var key in allKeys){
                var next = resolvedValues[key];
                var prev = prevResolvedValues[key];
                // If we've already handled this we can just skip ahead
                if (encounteredKeys.hasOwnProperty(key)) continue;
                /**
                 * If the value has changed, we probably want to animate it.
                 */ var valueHasChanged = false;
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$utils$2f$is$2d$keyframes$2d$target$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isKeyframesTarget"])(next) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$utils$2f$is$2d$keyframes$2d$target$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isKeyframesTarget"])(prev)) {
                    valueHasChanged = !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$utils$2f$shallow$2d$compare$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shallowCompare"])(next, prev);
                } else {
                    valueHasChanged = next !== prev;
                }
                if (valueHasChanged) {
                    if (next !== undefined && next !== null) {
                        // If next is defined and doesn't equal prev, it needs animating
                        markToAnimate(key);
                    } else {
                        // If it's undefined, it's been removed.
                        removedKeys.add(key);
                    }
                } else if (next !== undefined && removedKeys.has(key)) {
                    /**
                     * If next hasn't changed and it isn't undefined, we want to check if it's
                     * been removed by a higher priority
                     */ markToAnimate(key);
                } else {
                    /**
                     * If it hasn't changed, we add it to the list of protected values
                     * to ensure it doesn't get animated.
                     */ typeState.protectedKeys[key] = true;
                }
            }
            /**
             * Update the typeState so next time animateChanges is called we can compare the
             * latest prop and resolvedValues to these.
             */ typeState.prevProp = prop;
            typeState.prevResolvedValues = resolvedValues;
            if (typeState.isActive) {
                encounteredKeys = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, encounteredKeys, resolvedValues);
            }
            if (isInitialRender && visualElement.blockInitialAnimation) {
                shouldAnimateType = false;
            }
            /**
             * If this is an inherited prop we want to skip this animation
             * unless the inherited variants haven't changed on this render.
             */ var willAnimateViaParent = isInherited && variantDidChange;
            var needsAnimating = !willAnimateViaParent || handledRemovedValues;
            if (shouldAnimateType && needsAnimating) {
                var _animations;
                (_animations = animations).push.apply(_animations, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_to_consumable_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(definitionList.map(function(animation) {
                    var options = {
                        type: type
                    };
                    /**
                     * If we're performing the initial animation, but we're not
                     * rendering at the same time as the variant-controlling parent,
                     * we want to use the parent's transition to calculate the stagger.
                     */ if (typeof animation === "string" && isInitialRender && !willAnimateViaParent && visualElement.manuallyAnimateOnMount && visualElement.parent) {
                        var parent = visualElement.parent;
                        var parentVariant = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$utils$2f$resolve$2d$dynamic$2d$variants$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveVariant"])(parent, animation);
                        if (parent.enteringChildren && parentVariant) {
                            var delayChildren = (parentVariant.transition || {}).delayChildren;
                            options.delay = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$utils$2f$calc$2d$child$2d$stagger$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calcChildStagger"])(parent.enteringChildren, visualElement, delayChildren);
                        }
                    }
                    return {
                        animation: animation,
                        options: options
                    };
                })));
            }
        };
        var props = visualElement.props;
        var context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$utils$2f$get$2d$variant$2d$context$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getVariantContext"])(visualElement.parent) || {};
        /**
         * A list of animations that we'll build into as we iterate through the animation
         * types. This will get executed at the end of the function.
         */ var animations = [];
        /**
         * Keep track of which values have been removed. Then, as we hit lower priority
         * animation types, we can check if they contain removed values and animate to that.
         */ var removedKeys = new Set();
        /**
         * A dictionary of all encountered keys. This is an object to let us build into and
         * copy it without iteration. Each time we hit an animation type we set its protected
         * keys - the keys its not allowed to animate - to the latest version of this object.
         */ var encounteredKeys = {};
        /**
         * If a variant has been removed at a given index, and this component is controlling
         * variant animations, we want to ensure lower-priority variants are forced to animate.
         */ var removedVariantIndex = Infinity;
        /**
         * Iterate through all animation types in reverse priority order. For each, we want to
         * detect which values it's handling and whether or not they've changed (and therefore
         * need to be animated). If any values have been removed, we want to detect those in
         * lower priority props and flag for animation.
         */ for(var i = 0; i < numAnimationTypes; i++)_loop(i);
        /**
         * If there are some removed value that haven't been dealt with,
         * we need to create a new animation that falls back either to the value
         * defined in the style prop, or the last read value.
         */ if (removedKeys.size) {
            var fallbackAnimation = {};
            /**
             * If the initial prop contains a transition we can use that, otherwise
             * allow the animation function to use the visual element's default.
             */ if (typeof props.initial !== "boolean") {
                var initialTransition = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$utils$2f$resolve$2d$dynamic$2d$variants$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveVariant"])(visualElement, Array.isArray(props.initial) ? props.initial[0] : props.initial);
                if (initialTransition && initialTransition.transition) {
                    fallbackAnimation.transition = initialTransition.transition;
                }
            }
            removedKeys.forEach(function(key) {
                var fallbackTarget = visualElement.getBaseTarget(key);
                var motionValue = visualElement.getValue(key);
                if (motionValue) motionValue.liveStyle = true;
                // @ts-expect-error - @mattgperry to figure if we should do something here
                fallbackAnimation[key] = fallbackTarget !== null && fallbackTarget !== void 0 ? fallbackTarget : null;
            });
            animations.push({
                animation: fallbackAnimation
            });
        }
        var shouldAnimate = Boolean(animations.length);
        if (isInitialRender && (props.initial === false || props.initial === props.animate) && !visualElement.manuallyAnimateOnMount) {
            shouldAnimate = false;
        }
        isInitialRender = false;
        return shouldAnimate ? animate(animations) : Promise.resolve();
    }
    /**
     * Change whether a certain animation type is active.
     */ function setActive(type, isActive) {
        var // Propagate active change to children
        _visualElement_variantChildren;
        // If the active state hasn't changed, we can safely do nothing here
        if (state[type].isActive === isActive) return Promise.resolve();
        (_visualElement_variantChildren = visualElement.variantChildren) === null || _visualElement_variantChildren === void 0 ? void 0 : _visualElement_variantChildren.forEach(function(child) {
            var _child_animationState;
            return (_child_animationState = child.animationState) === null || _child_animationState === void 0 ? void 0 : _child_animationState.setActive(type, isActive);
        });
        state[type].isActive = isActive;
        var animations = animateChanges(type);
        for(var key in state){
            state[key].protectedKeys = {};
        }
        return animations;
    }
    return {
        animateChanges: animateChanges,
        setActive: setActive,
        setAnimateFunction: setAnimateFunction,
        getState: function() {
            return state;
        },
        reset: function() {
            state = createState();
        /**
             * Temporarily disabling resetting this flag as it prevents components
             * with initial={false} from animating after being remounted, for instance
             * as the child of an Activity component.
             */ // isInitialRender = true
        }
    };
}
function checkVariantsDidChange(prev, next) {
    if (typeof next === "string") {
        return next !== prev;
    } else if (Array.isArray(next)) {
        return !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$utils$2f$shallow$2d$compare$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shallowCompare"])(next, prev);
    }
    return false;
}
function createTypeState() {
    var isActive = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false;
    return {
        isActive: isActive,
        protectedKeys: {},
        needsAnimating: {},
        prevResolvedValues: {}
    };
}
function createState() {
    return {
        animate: createTypeState(true),
        whileInView: createTypeState(),
        whileHover: createTypeState(),
        whileTap: createTypeState(),
        whileDrag: createTypeState(),
        whileFocus: createTypeState(),
        exit: createTypeState()
    };
}
;
 //# sourceMappingURL=animation-state.mjs.map
}),
"[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/projection/utils/each-axis.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "eachAxis",
    ()=>eachAxis
]);
function eachAxis(callback) {
    return [
        callback("x"),
        callback("y")
    ];
}
;
 //# sourceMappingURL=each-axis.mjs.map
}),
"[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/gestures/press/utils/is-keyboard-accessible.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isElementKeyboardAccessible",
    ()=>isElementKeyboardAccessible,
    "isElementTextInput",
    ()=>isElementTextInput
]);
var keyboardAccessibleElements = new Set([
    "BUTTON",
    "INPUT",
    "SELECT",
    "TEXTAREA",
    "A"
]);
/**
 * Checks if an element is natively keyboard accessible (focusable).
 * Used by the press gesture to determine if we need to add tabIndex.
 */ function isElementKeyboardAccessible(element) {
    return keyboardAccessibleElements.has(element.tagName) || element.isContentEditable === true;
}
var textInputElements = new Set([
    "INPUT",
    "SELECT",
    "TEXTAREA"
]);
/**
 * Checks if an element has text selection or direct interaction behavior
 * that should block drag gestures from starting.
 *
 * This specifically targets form controls where the user might want to select
 * text or interact with the control (e.g., sliders, dropdowns).
 *
 * Buttons and links are NOT included because they don't have click-and-move
 * actions of their own - they only respond to click events, so dragging
 * should still work when initiated from these elements.
 */ function isElementTextInput(element) {
    return textInputElements.has(element.tagName) || element.isContentEditable === true;
}
;
 //# sourceMappingURL=is-keyboard-accessible.mjs.map
}),
"[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/events/add-dom-event.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "addDomEvent",
    ()=>addDomEvent
]);
function addDomEvent(target, eventName, handler) {
    var options = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {
        passive: true
    };
    target.addEventListener(eventName, handler, options);
    return function() {
        return target.removeEventListener(eventName, handler);
    };
}
;
 //# sourceMappingURL=add-dom-event.mjs.map
}),
"[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/gestures/drag/state/is-active.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isDragActive",
    ()=>isDragActive,
    "isDragging",
    ()=>isDragging
]);
var isDragging = {
    x: false,
    y: false
};
function isDragActive() {
    return isDragging.x || isDragging.y;
}
;
 //# sourceMappingURL=is-active.mjs.map
}),
"[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/gestures/drag/state/set-active.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "setDragLock",
    ()=>setDragLock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$gestures$2f$drag$2f$state$2f$is$2d$active$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/gestures/drag/state/is-active.mjs [app-client] (ecmascript)");
;
function setDragLock(axis) {
    if (axis === "x" || axis === "y") {
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$gestures$2f$drag$2f$state$2f$is$2d$active$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isDragging"][axis]) {
            return null;
        } else {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$gestures$2f$drag$2f$state$2f$is$2d$active$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isDragging"][axis] = true;
            return function() {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$gestures$2f$drag$2f$state$2f$is$2d$active$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isDragging"][axis] = false;
            };
        }
    } else {
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$gestures$2f$drag$2f$state$2f$is$2d$active$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isDragging"].x || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$gestures$2f$drag$2f$state$2f$is$2d$active$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isDragging"].y) {
            return null;
        } else {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$gestures$2f$drag$2f$state$2f$is$2d$active$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isDragging"].x = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$gestures$2f$drag$2f$state$2f$is$2d$active$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isDragging"].y = true;
            return function() {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$gestures$2f$drag$2f$state$2f$is$2d$active$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isDragging"].x = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$gestures$2f$drag$2f$state$2f$is$2d$active$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isDragging"].y = false;
            };
        }
    }
}
;
 //# sourceMappingURL=set-active.mjs.map
}),
"[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/projection/geometry/delta-calc.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "calcAxisDelta",
    ()=>calcAxisDelta,
    "calcBoxDelta",
    ()=>calcBoxDelta,
    "calcLength",
    ()=>calcLength,
    "calcRelativeAxis",
    ()=>calcRelativeAxis,
    "calcRelativeAxisPosition",
    ()=>calcRelativeAxisPosition,
    "calcRelativeBox",
    ()=>calcRelativeBox,
    "calcRelativePosition",
    ()=>calcRelativePosition,
    "isNear",
    ()=>isNear
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$mix$2f$number$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/utils/mix/number.mjs [app-client] (ecmascript)");
;
var SCALE_PRECISION = 0.0001;
var SCALE_MIN = 1 - SCALE_PRECISION;
var SCALE_MAX = 1 + SCALE_PRECISION;
var TRANSLATE_PRECISION = 0.01;
var TRANSLATE_MIN = 0 - TRANSLATE_PRECISION;
var TRANSLATE_MAX = 0 + TRANSLATE_PRECISION;
function calcLength(axis) {
    return axis.max - axis.min;
}
function isNear(value, target, maxDistance) {
    return Math.abs(value - target) <= maxDistance;
}
function calcAxisDelta(delta, source, target) {
    var origin = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0.5;
    delta.origin = origin;
    delta.originPoint = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$mix$2f$number$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mixNumber"])(source.min, source.max, delta.origin);
    delta.scale = calcLength(target) / calcLength(source);
    delta.translate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$mix$2f$number$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mixNumber"])(target.min, target.max, delta.origin) - delta.originPoint;
    if (delta.scale >= SCALE_MIN && delta.scale <= SCALE_MAX || isNaN(delta.scale)) {
        delta.scale = 1.0;
    }
    if (delta.translate >= TRANSLATE_MIN && delta.translate <= TRANSLATE_MAX || isNaN(delta.translate)) {
        delta.translate = 0.0;
    }
}
function calcBoxDelta(delta, source, target, origin) {
    calcAxisDelta(delta.x, source.x, target.x, origin ? origin.originX : undefined);
    calcAxisDelta(delta.y, source.y, target.y, origin ? origin.originY : undefined);
}
function calcRelativeAxis(target, relative, parent) {
    target.min = parent.min + relative.min;
    target.max = target.min + calcLength(relative);
}
function calcRelativeBox(target, relative, parent) {
    calcRelativeAxis(target.x, relative.x, parent.x);
    calcRelativeAxis(target.y, relative.y, parent.y);
}
function calcRelativeAxisPosition(target, layout, parent) {
    target.min = layout.min - parent.min;
    target.max = target.min + calcLength(layout);
}
function calcRelativePosition(target, layout, parent) {
    calcRelativeAxisPosition(target.x, layout.x, parent.x);
    calcRelativeAxisPosition(target.y, layout.y, parent.y);
}
;
 //# sourceMappingURL=delta-calc.mjs.map
}),
"[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/utils/is-svg-element.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isSVGElement",
    ()=>isSVGElement
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$29$2e$2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$is$2d$object$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-utils@12.29.2/node_modules/motion-utils/dist/es/is-object.mjs [app-client] (ecmascript)");
;
/**
 * Checks if an element is an SVG element in a way
 * that works across iframes
 */ function isSVGElement(element) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$29$2e$2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$is$2d$object$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isObject"])(element) && "ownerSVGElement" in element;
}
;
 //# sourceMappingURL=is-svg-element.mjs.map
}),
"[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/utils/resolve-elements.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "resolveElements",
    ()=>resolveElements
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_instanceof$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_instanceof.js [app-client] (ecmascript)");
;
function resolveElements(elementOrSelector, scope, selectorCache) {
    if (elementOrSelector == null) {
        return [];
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_instanceof$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(elementOrSelector, EventTarget)) {
        return [
            elementOrSelector
        ];
    } else if (typeof elementOrSelector === "string") {
        var _ref;
        var root = document;
        if (scope) {
            root = scope.current;
        }
        var elements = (_ref = selectorCache === null || selectorCache === void 0 ? void 0 : selectorCache[elementOrSelector]) !== null && _ref !== void 0 ? _ref : root.querySelectorAll(elementOrSelector);
        return elements ? Array.from(elements) : [];
    }
    return Array.from(elementOrSelector).filter(function(element) {
        return element != null;
    });
}
;
 //# sourceMappingURL=resolve-elements.mjs.map
}),
"[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/resize/handle-element.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "resizeElement",
    ()=>resizeElement
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$is$2d$svg$2d$element$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/utils/is-svg-element.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$resolve$2d$elements$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/utils/resolve-elements.mjs [app-client] (ecmascript)");
;
;
var resizeHandlers = new WeakMap();
var observer;
var getSize = function(borderBoxAxis, svgAxis, htmlAxis) {
    return function(target, borderBoxSize) {
        if (borderBoxSize && borderBoxSize[0]) {
            return borderBoxSize[0][borderBoxAxis + "Size"];
        } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$is$2d$svg$2d$element$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isSVGElement"])(target) && "getBBox" in target) {
            return target.getBBox()[svgAxis];
        } else {
            return target[htmlAxis];
        }
    };
};
var getWidth = /*@__PURE__*/ getSize("inline", "width", "offsetWidth");
var getHeight = /*@__PURE__*/ getSize("block", "height", "offsetHeight");
function notifyTarget(param) {
    var target = param.target, borderBoxSize = param.borderBoxSize;
    var _resizeHandlers_get;
    (_resizeHandlers_get = resizeHandlers.get(target)) === null || _resizeHandlers_get === void 0 ? void 0 : _resizeHandlers_get.forEach(function(handler) {
        handler(target, {
            get width () {
                return getWidth(target, borderBoxSize);
            },
            get height () {
                return getHeight(target, borderBoxSize);
            }
        });
    });
}
function notifyAll(entries) {
    entries.forEach(notifyTarget);
}
function createResizeObserver() {
    if (typeof ResizeObserver === "undefined") return;
    observer = new ResizeObserver(notifyAll);
}
function resizeElement(target, handler) {
    if (!observer) createResizeObserver();
    var elements = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$resolve$2d$elements$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveElements"])(target);
    elements.forEach(function(element) {
        var elementHandlers = resizeHandlers.get(element);
        if (!elementHandlers) {
            elementHandlers = new Set();
            resizeHandlers.set(element, elementHandlers);
        }
        elementHandlers.add(handler);
        observer === null || observer === void 0 ? void 0 : observer.observe(element);
    });
    return function() {
        elements.forEach(function(element) {
            var elementHandlers = resizeHandlers.get(element);
            elementHandlers === null || elementHandlers === void 0 ? void 0 : elementHandlers.delete(handler);
            if (!(elementHandlers === null || elementHandlers === void 0 ? void 0 : elementHandlers.size)) {
                observer === null || observer === void 0 ? void 0 : observer.unobserve(element);
            }
        });
    };
}
;
 //# sourceMappingURL=handle-element.mjs.map
}),
"[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/resize/handle-window.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "resizeWindow",
    ()=>resizeWindow
]);
var windowCallbacks = new Set();
var windowResizeHandler;
function createWindowResizeHandler() {
    windowResizeHandler = function() {
        var info = {
            get width () {
                return window.innerWidth;
            },
            get height () {
                return window.innerHeight;
            }
        };
        windowCallbacks.forEach(function(callback) {
            return callback(info);
        });
    };
    window.addEventListener("resize", windowResizeHandler);
}
function resizeWindow(callback) {
    windowCallbacks.add(callback);
    if (!windowResizeHandler) createWindowResizeHandler();
    return function() {
        windowCallbacks.delete(callback);
        if (!windowCallbacks.size && typeof windowResizeHandler === "function") {
            window.removeEventListener("resize", windowResizeHandler);
            windowResizeHandler = undefined;
        }
    };
}
;
 //# sourceMappingURL=handle-window.mjs.map
}),
"[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/resize/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "resize",
    ()=>resize
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$resize$2f$handle$2d$element$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/resize/handle-element.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$resize$2f$handle$2d$window$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/resize/handle-window.mjs [app-client] (ecmascript)");
;
;
function resize(a, b) {
    return typeof a === "function" ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$resize$2f$handle$2d$window$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resizeWindow"])(a) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$resize$2f$handle$2d$element$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resizeElement"])(a, b);
}
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/gestures/utils/is-primary-pointer.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isPrimaryPointer",
    ()=>isPrimaryPointer
]);
var isPrimaryPointer = function(event) {
    if (event.pointerType === "mouse") {
        return typeof event.button !== "number" || event.button <= 0;
    } else {
        /**
         * isPrimary is true for all mice buttons, whereas every touch point
         * is regarded as its own input. So subsequent concurrent touch points
         * will be false.
         *
         * Specifically match against false here as incomplete versions of
         * PointerEvents in very old browser might have it set as undefined.
         */ return event.isPrimary !== false;
    }
};
;
 //# sourceMappingURL=is-primary-pointer.mjs.map
}),
"[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/projection/node/state.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "globalProjectionState",
    ()=>globalProjectionState
]);
/**
 * This should only ever be modified on the client otherwise it'll
 * persist through server requests. If we need instanced states we
 * could lazy-init via root.
 */ var globalProjectionState = {
    /**
     * Global flag as to whether the tree has animated since the last time
     * we resized the window
     */ hasAnimatedSinceResize: true,
    /**
     * We set this to true once, on the first update. Any nodes added to the tree beyond that
     * update will be given a `data-projection-id` attribute.
     */ hasEverUpdated: false
};
;
 //# sourceMappingURL=state.mjs.map
}),
"[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/animation/animate/single-value.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "animateSingleValue",
    ()=>animateSingleValue
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$interfaces$2f$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/animation/interfaces/motion-value.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/value/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$utils$2f$is$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/value/utils/is-motion-value.mjs [app-client] (ecmascript)");
;
;
;
function animateSingleValue(value, keyframes, options) {
    var motionValue$1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$utils$2f$is$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isMotionValue"])(value) ? value : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motionValue"])(value);
    motionValue$1.start((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$interfaces$2f$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["animateMotionValue"])("", motionValue$1, keyframes, options));
    return motionValue$1.animation;
}
;
 //# sourceMappingURL=single-value.mjs.map
}),
"[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/utils/delay.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "delay",
    ()=>delay,
    "delayInSeconds",
    ()=>delayInSeconds
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$sync$2d$time$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/frameloop/sync-time.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$29$2e$2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$time$2d$conversion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-utils@12.29.2/node_modules/motion-utils/dist/es/time-conversion.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$frame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/frameloop/frame.mjs [app-client] (ecmascript)");
;
;
;
/**
 * Timeout defined in ms
 */ function delay(callback, timeout) {
    var start = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$sync$2d$time$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["time"].now();
    var checkElapsed = function(param) {
        var timestamp = param.timestamp;
        var elapsed = timestamp - start;
        if (elapsed >= timeout) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$frame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cancelFrame"])(checkElapsed);
            callback(elapsed - timeout);
        }
    };
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$frame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["frame"].setup(checkElapsed, true);
    return function() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$frame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cancelFrame"])(checkElapsed);
    };
}
function delayInSeconds(callback, timeout) {
    return delay(callback, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$29$2e$2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$time$2d$conversion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["secondsToMilliseconds"])(timeout));
}
;
 //# sourceMappingURL=delay.mjs.map
}),
"[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/utils/is-svg-svg-element.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isSVGSVGElement",
    ()=>isSVGSVGElement
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$is$2d$svg$2d$element$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/utils/is-svg-element.mjs [app-client] (ecmascript)");
;
/**
 * Checks if an element is specifically an SVGSVGElement (the root SVG element)
 * in a way that works across iframes
 */ function isSVGSVGElement(element) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$is$2d$svg$2d$element$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isSVGElement"])(element) && element.tagName === "svg";
}
;
 //# sourceMappingURL=is-svg-svg-element.mjs.map
}),
"[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/projection/animation/mix-values.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "mixValues",
    ()=>mixValues
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$mix$2f$number$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/utils/mix/number.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$numbers$2f$units$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/value/types/numbers/units.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$29$2e$2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$progress$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-utils@12.29.2/node_modules/motion-utils/dist/es/progress.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$29$2e$2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$circ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-utils@12.29.2/node_modules/motion-utils/dist/es/easing/circ.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$29$2e$2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$noop$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-utils@12.29.2/node_modules/motion-utils/dist/es/noop.mjs [app-client] (ecmascript)");
;
;
;
var borders = [
    "TopLeft",
    "TopRight",
    "BottomLeft",
    "BottomRight"
];
var numBorders = borders.length;
var asNumber = function(value) {
    return typeof value === "string" ? parseFloat(value) : value;
};
var isPx = function(value) {
    return typeof value === "number" || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$numbers$2f$units$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["px"].test(value);
};
function mixValues(target, follow, lead, progress, shouldCrossfadeOpacity, isOnlyMember) {
    if (shouldCrossfadeOpacity) {
        var _lead_opacity, _follow_opacity;
        target.opacity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$mix$2f$number$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mixNumber"])(0, (_lead_opacity = lead.opacity) !== null && _lead_opacity !== void 0 ? _lead_opacity : 1, easeCrossfadeIn(progress));
        target.opacityExit = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$mix$2f$number$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mixNumber"])((_follow_opacity = follow.opacity) !== null && _follow_opacity !== void 0 ? _follow_opacity : 1, 0, easeCrossfadeOut(progress));
    } else if (isOnlyMember) {
        var _follow_opacity1, _lead_opacity1;
        target.opacity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$mix$2f$number$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mixNumber"])((_follow_opacity1 = follow.opacity) !== null && _follow_opacity1 !== void 0 ? _follow_opacity1 : 1, (_lead_opacity1 = lead.opacity) !== null && _lead_opacity1 !== void 0 ? _lead_opacity1 : 1, progress);
    }
    /**
     * Mix border radius
     */ for(var i = 0; i < numBorders; i++){
        var borderLabel = "border".concat(borders[i], "Radius");
        var followRadius = getRadius(follow, borderLabel);
        var leadRadius = getRadius(lead, borderLabel);
        if (followRadius === undefined && leadRadius === undefined) continue;
        followRadius || (followRadius = 0);
        leadRadius || (leadRadius = 0);
        var canMix = followRadius === 0 || leadRadius === 0 || isPx(followRadius) === isPx(leadRadius);
        if (canMix) {
            target[borderLabel] = Math.max((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$mix$2f$number$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mixNumber"])(asNumber(followRadius), asNumber(leadRadius), progress), 0);
            if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$numbers$2f$units$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["percent"].test(leadRadius) || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$numbers$2f$units$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["percent"].test(followRadius)) {
                target[borderLabel] += "%";
            }
        } else {
            target[borderLabel] = leadRadius;
        }
    }
    /**
     * Mix rotation
     */ if (follow.rotate || lead.rotate) {
        target.rotate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$mix$2f$number$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mixNumber"])(follow.rotate || 0, lead.rotate || 0, progress);
    }
}
function getRadius(values, radiusName) {
    return values[radiusName] !== undefined ? values[radiusName] : values.borderRadius;
}
var easeCrossfadeIn = /*@__PURE__*/ compress(0, 0.5, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$29$2e$2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$circ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["circOut"]);
var easeCrossfadeOut = /*@__PURE__*/ compress(0.5, 0.95, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$29$2e$2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$noop$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["noop"]);
function compress(min, max, easing) {
    return function(p) {
        // Could replace ifs with clamp
        if (p < min) return 0;
        if (p > max) return 1;
        return easing((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$29$2e$2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$progress$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["progress"])(min, max, p));
    };
}
;
 //# sourceMappingURL=mix-values.mjs.map
}),
"[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/projection/geometry/copy.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "copyAxisDeltaInto",
    ()=>copyAxisDeltaInto,
    "copyAxisInto",
    ()=>copyAxisInto,
    "copyBoxInto",
    ()=>copyBoxInto
]);
/**
 * Reset an axis to the provided origin box.
 *
 * This is a mutative operation.
 */ function copyAxisInto(axis, originAxis) {
    axis.min = originAxis.min;
    axis.max = originAxis.max;
}
/**
 * Reset a box to the provided origin box.
 *
 * This is a mutative operation.
 */ function copyBoxInto(box, originBox) {
    copyAxisInto(box.x, originBox.x);
    copyAxisInto(box.y, originBox.y);
}
/**
 * Reset a delta to the provided origin box.
 *
 * This is a mutative operation.
 */ function copyAxisDeltaInto(delta, originDelta) {
    delta.translate = originDelta.translate;
    delta.scale = originDelta.scale;
    delta.originPoint = originDelta.originPoint;
    delta.origin = originDelta.origin;
}
;
 //# sourceMappingURL=copy.mjs.map
}),
"[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/projection/geometry/delta-remove.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "removeAxisDelta",
    ()=>removeAxisDelta,
    "removeAxisTransforms",
    ()=>removeAxisTransforms,
    "removeBoxTransforms",
    ()=>removeBoxTransforms,
    "removePointDelta",
    ()=>removePointDelta
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_sliced_to_array.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$mix$2f$number$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/utils/mix/number.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$numbers$2f$units$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/value/types/numbers/units.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$geometry$2f$delta$2d$apply$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/projection/geometry/delta-apply.mjs [app-client] (ecmascript)");
;
;
;
;
/**
 * Remove a delta from a point. This is essentially the steps of applyPointDelta in reverse
 */ function removePointDelta(point, translate, scale, originPoint, boxScale) {
    point -= translate;
    point = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$geometry$2f$delta$2d$apply$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scalePoint"])(point, 1 / scale, originPoint);
    if (boxScale !== undefined) {
        point = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$geometry$2f$delta$2d$apply$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scalePoint"])(point, 1 / boxScale, originPoint);
    }
    return point;
}
/**
 * Remove a delta from an axis. This is essentially the steps of applyAxisDelta in reverse
 */ function removeAxisDelta(axis) {
    var translate = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, scale = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1, origin = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0.5, boxScale = arguments.length > 4 ? arguments[4] : void 0, originAxis = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : axis, sourceAxis = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : axis;
    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$numbers$2f$units$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["percent"].test(translate)) {
        translate = parseFloat(translate);
        var relativeProgress = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$mix$2f$number$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mixNumber"])(sourceAxis.min, sourceAxis.max, translate / 100);
        translate = relativeProgress - sourceAxis.min;
    }
    if (typeof translate !== "number") return;
    var originPoint = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$mix$2f$number$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mixNumber"])(originAxis.min, originAxis.max, origin);
    if (axis === originAxis) originPoint -= translate;
    axis.min = removePointDelta(axis.min, translate, scale, originPoint, boxScale);
    axis.max = removePointDelta(axis.max, translate, scale, originPoint, boxScale);
}
/**
 * Remove a transforms from an axis. This is essentially the steps of applyAxisTransforms in reverse
 * and acts as a bridge between motion values and removeAxisDelta
 */ function removeAxisTransforms(axis, transforms, param, origin, sourceAxis) {
    var _param = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(param, 3), key = _param[0], scaleKey = _param[1], originKey = _param[2];
    removeAxisDelta(axis, transforms[key], transforms[scaleKey], transforms[originKey], transforms.scale, origin, sourceAxis);
}
/**
 * The names of the motion values we want to apply as translation, scale and origin.
 */ var xKeys = [
    "x",
    "scaleX",
    "originX"
];
var yKeys = [
    "y",
    "scaleY",
    "originY"
];
/**
 * Remove a transforms from an box. This is essentially the steps of applyAxisBox in reverse
 * and acts as a bridge between motion values and removeAxisDelta
 */ function removeBoxTransforms(box, transforms, originBox, sourceBox) {
    removeAxisTransforms(box.x, transforms, xKeys, originBox ? originBox.x : undefined, sourceBox ? sourceBox.x : undefined);
    removeAxisTransforms(box.y, transforms, yKeys, originBox ? originBox.y : undefined, sourceBox ? sourceBox.y : undefined);
}
;
 //# sourceMappingURL=delta-remove.mjs.map
}),
"[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/projection/geometry/utils.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "aspectRatio",
    ()=>aspectRatio,
    "axisDeltaEquals",
    ()=>axisDeltaEquals,
    "axisEquals",
    ()=>axisEquals,
    "axisEqualsRounded",
    ()=>axisEqualsRounded,
    "boxEquals",
    ()=>boxEquals,
    "boxEqualsRounded",
    ()=>boxEqualsRounded,
    "isDeltaZero",
    ()=>isDeltaZero
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$geometry$2f$delta$2d$calc$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/projection/geometry/delta-calc.mjs [app-client] (ecmascript)");
;
function isAxisDeltaZero(delta) {
    return delta.translate === 0 && delta.scale === 1;
}
function isDeltaZero(delta) {
    return isAxisDeltaZero(delta.x) && isAxisDeltaZero(delta.y);
}
function axisEquals(a, b) {
    return a.min === b.min && a.max === b.max;
}
function boxEquals(a, b) {
    return axisEquals(a.x, b.x) && axisEquals(a.y, b.y);
}
function axisEqualsRounded(a, b) {
    return Math.round(a.min) === Math.round(b.min) && Math.round(a.max) === Math.round(b.max);
}
function boxEqualsRounded(a, b) {
    return axisEqualsRounded(a.x, b.x) && axisEqualsRounded(a.y, b.y);
}
function aspectRatio(box) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$geometry$2f$delta$2d$calc$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calcLength"])(box.x) / (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$geometry$2f$delta$2d$calc$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calcLength"])(box.y);
}
function axisDeltaEquals(a, b) {
    return a.translate === b.translate && a.scale === b.scale && a.originPoint === b.originPoint;
}
;
 //# sourceMappingURL=utils.mjs.map
}),
"[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/projection/shared/stack.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NodeStack",
    ()=>NodeStack
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_call_check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_class_call_check.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_create_class$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_create_class.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$29$2e$2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$array$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-utils@12.29.2/node_modules/motion-utils/dist/es/array.mjs [app-client] (ecmascript)");
;
;
;
var NodeStack = /*#__PURE__*/ function() {
    "use strict";
    function NodeStack() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_call_check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, NodeStack);
        this.members = [];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_create_class$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(NodeStack, [
        {
            key: "add",
            value: function add(node) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$29$2e$2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$array$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addUniqueItem"])(this.members, node);
                for(var i = this.members.length - 1; i >= 0; i--){
                    var m = this.members[i];
                    if (m === node || m === this.lead || m === this.prevLead) continue;
                    var inst = m.instance;
                    if (inst && inst.isConnected === false && m.isPresent !== false && !m.snapshot) {
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$29$2e$2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$array$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["removeItem"])(this.members, m);
                    }
                }
                node.scheduleRender();
            }
        },
        {
            key: "remove",
            value: function remove(node) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$29$2e$2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$array$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["removeItem"])(this.members, node);
                if (node === this.prevLead) {
                    this.prevLead = undefined;
                }
                if (node === this.lead) {
                    var prevLead = this.members[this.members.length - 1];
                    if (prevLead) {
                        this.promote(prevLead);
                    }
                }
            }
        },
        {
            key: "relegate",
            value: function relegate(node) {
                var indexOfNode = this.members.findIndex(function(member) {
                    return node === member;
                });
                if (indexOfNode === 0) return false;
                /**
         * Find the next projection node that is present
         */ var prevLead;
                for(var i = indexOfNode; i >= 0; i--){
                    var member = this.members[i];
                    var inst = member.instance;
                    if (member.isPresent !== false && (!inst || inst.isConnected !== false)) {
                        prevLead = member;
                        break;
                    }
                }
                if (prevLead) {
                    this.promote(prevLead);
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            key: "promote",
            value: function promote(node, preserveFollowOpacity) {
                var prevLead = this.lead;
                if (node === prevLead) return;
                this.prevLead = prevLead;
                this.lead = node;
                node.show();
                if (prevLead) {
                    prevLead.instance && prevLead.scheduleRender();
                    node.scheduleRender();
                    /**
             * If both the new and previous lead have the same defined layoutDependency,
             * skip the shared layout animation. This allows components with layoutId
             * to opt-out of animations when their layoutDependency hasn't changed,
             * even when the component unmounts and remounts in a different location.
             */ var prevDep = prevLead.options.layoutDependency;
                    var nextDep = node.options.layoutDependency;
                    var dependencyMatches = prevDep !== undefined && nextDep !== undefined && prevDep === nextDep;
                    if (!dependencyMatches) {
                        var prevInstance = prevLead.instance;
                        var isStale = prevInstance && prevInstance.isConnected === false && !prevLead.snapshot;
                        if (!isStale) {
                            node.resumeFrom = prevLead;
                            if (preserveFollowOpacity) {
                                node.resumeFrom.preserveOpacity = true;
                            }
                            if (prevLead.snapshot) {
                                node.snapshot = prevLead.snapshot;
                                node.snapshot.latestValues = prevLead.animationValues || prevLead.latestValues;
                            }
                            if (node.root && node.root.isUpdating) {
                                node.isLayoutDirty = true;
                            }
                        }
                    }
                    var crossfade = node.options.crossfade;
                    if (crossfade === false) {
                        prevLead.hide();
                    }
                }
            }
        },
        {
            key: "exitAnimationComplete",
            value: function exitAnimationComplete() {
                this.members.forEach(function(node) {
                    var options = node.options, resumingFrom = node.resumingFrom;
                    options.onExitComplete && options.onExitComplete();
                    if (resumingFrom) {
                        resumingFrom.options.onExitComplete && resumingFrom.options.onExitComplete();
                    }
                });
            }
        },
        {
            key: "scheduleRender",
            value: function scheduleRender() {
                this.members.forEach(function(node) {
                    node.instance && node.scheduleRender(false);
                });
            }
        },
        {
            /**
     * Clear any leads that have been removed this render to prevent them from being
     * used in future animations and to prevent memory leaks
     */ key: "removeLeadSnapshot",
            value: function removeLeadSnapshot() {
                if (this.lead && this.lead.snapshot) {
                    this.lead.snapshot = undefined;
                }
            }
        }
    ]);
    return NodeStack;
}();
;
 //# sourceMappingURL=stack.mjs.map
}),
"[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/projection/styles/transform.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "buildProjectionTransform",
    ()=>buildProjectionTransform
]);
function buildProjectionTransform(delta, treeScale, latestTransform) {
    var transform = "";
    /**
     * The translations we use to calculate are always relative to the viewport coordinate space.
     * But when we apply scales, we also scale the coordinate space of an element and its children.
     * For instance if we have a treeScale (the culmination of all parent scales) of 0.5 and we need
     * to move an element 100 pixels, we actually need to move it 200 in within that scaled space.
     */ var xTranslate = delta.x.translate / treeScale.x;
    var yTranslate = delta.y.translate / treeScale.y;
    var zTranslate = (latestTransform === null || latestTransform === void 0 ? void 0 : latestTransform.z) || 0;
    if (xTranslate || yTranslate || zTranslate) {
        transform = "translate3d(".concat(xTranslate, "px, ").concat(yTranslate, "px, ").concat(zTranslate, "px) ");
    }
    /**
     * Apply scale correction for the tree transform.
     * This will apply scale to the screen-orientated axes.
     */ if (treeScale.x !== 1 || treeScale.y !== 1) {
        transform += "scale(".concat(1 / treeScale.x, ", ").concat(1 / treeScale.y, ") ");
    }
    if (latestTransform) {
        var transformPerspective = latestTransform.transformPerspective, rotate = latestTransform.rotate, rotateX = latestTransform.rotateX, rotateY = latestTransform.rotateY, skewX = latestTransform.skewX, skewY = latestTransform.skewY;
        if (transformPerspective) transform = "perspective(".concat(transformPerspective, "px) ").concat(transform);
        if (rotate) transform += "rotate(".concat(rotate, "deg) ");
        if (rotateX) transform += "rotateX(".concat(rotateX, "deg) ");
        if (rotateY) transform += "rotateY(".concat(rotateY, "deg) ");
        if (skewX) transform += "skewX(".concat(skewX, "deg) ");
        if (skewY) transform += "skewY(".concat(skewY, "deg) ");
    }
    /**
     * Apply scale to match the size of the element to the size we want it.
     * This will apply scale to the element-orientated axes.
     */ var elementScaleX = delta.x.scale * treeScale.x;
    var elementScaleY = delta.y.scale * treeScale.y;
    if (elementScaleX !== 1 || elementScaleY !== 1) {
        transform += "scale(".concat(elementScaleX, ", ").concat(elementScaleY, ")");
    }
    return transform || "none";
}
;
 //# sourceMappingURL=transform.mjs.map
}),
"[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/projection/utils/compare-by-depth.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "compareByDepth",
    ()=>compareByDepth
]);
var compareByDepth = function(a, b) {
    return a.depth - b.depth;
};
;
 //# sourceMappingURL=compare-by-depth.mjs.map
}),
"[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/projection/utils/flat-tree.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FlatTree",
    ()=>FlatTree
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_call_check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_class_call_check.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_create_class$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_create_class.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$29$2e$2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$array$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-utils@12.29.2/node_modules/motion-utils/dist/es/array.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$utils$2f$compare$2d$by$2d$depth$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/projection/utils/compare-by-depth.mjs [app-client] (ecmascript)");
;
;
;
;
var FlatTree = /*#__PURE__*/ function() {
    "use strict";
    function FlatTree() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_call_check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, FlatTree);
        this.children = [];
        this.isDirty = false;
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_create_class$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(FlatTree, [
        {
            key: "add",
            value: function add(child) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$29$2e$2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$array$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addUniqueItem"])(this.children, child);
                this.isDirty = true;
            }
        },
        {
            key: "remove",
            value: function remove(child) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$29$2e$2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$array$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["removeItem"])(this.children, child);
                this.isDirty = true;
            }
        },
        {
            key: "forEach",
            value: function forEach(callback) {
                this.isDirty && this.children.sort(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$utils$2f$compare$2d$by$2d$depth$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["compareByDepth"]);
                this.isDirty = false;
                this.children.forEach(callback);
            }
        }
    ]);
    return FlatTree;
}();
;
 //# sourceMappingURL=flat-tree.mjs.map
}),
"[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/projection/node/create-projection-node.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cleanDirtyNodes",
    ()=>cleanDirtyNodes,
    "createProjectionNode",
    ()=>createProjectionNode,
    "mixAxis",
    ()=>mixAxis,
    "mixAxisDelta",
    ()=>mixAxisDelta,
    "mixBox",
    ()=>mixBox,
    "propagateDirtyNodes",
    ()=>propagateDirtyNodes
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_call_check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_class_call_check.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_create_class$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_create_class.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_object_spread.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_object_spread_props.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_to_consumable_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_to_consumable_array.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$29$2e$2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$subscription$2d$manager$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-utils@12.29.2/node_modules/motion-utils/dist/es/subscription-manager.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$29$2e$2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$clamp$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-utils@12.29.2/node_modules/motion-utils/dist/es/clamp.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$29$2e$2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$noop$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-utils@12.29.2/node_modules/motion-utils/dist/es/noop.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$animate$2f$single$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/animation/animate/single-value.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$optimized$2d$appear$2f$get$2d$appear$2d$id$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/animation/optimized-appear/get-appear-id.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$utils$2f$get$2d$value$2d$transition$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/animation/utils/get-value-transition.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$microtask$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/frameloop/microtask.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$sync$2d$time$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/frameloop/sync-time.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$styles$2f$scale$2d$correction$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/projection/styles/scale-correction.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$stats$2f$animation$2d$count$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/stats/animation-count.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$stats$2f$buffer$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/stats/buffer.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$delay$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/utils/delay.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$is$2d$svg$2d$element$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/utils/is-svg-element.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$is$2d$svg$2d$svg$2d$element$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/utils/is-svg-svg-element.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$mix$2f$number$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/utils/mix/number.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/value/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$utils$2f$resolve$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/value/utils/resolve-motion-value.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$animation$2f$mix$2d$values$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/projection/animation/mix-values.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$geometry$2f$copy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/projection/geometry/copy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$geometry$2f$delta$2d$apply$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/projection/geometry/delta-apply.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$geometry$2f$delta$2d$calc$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/projection/geometry/delta-calc.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$geometry$2f$delta$2d$remove$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/projection/geometry/delta-remove.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$geometry$2f$models$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/projection/geometry/models.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$geometry$2f$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/projection/geometry/utils.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$shared$2f$stack$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/projection/shared/stack.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$styles$2f$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/projection/styles/transform.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$utils$2f$each$2d$axis$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/projection/utils/each-axis.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$utils$2f$flat$2d$tree$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/projection/utils/flat-tree.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$utils$2f$has$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/projection/utils/has-transform.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$node$2f$state$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/projection/node/state.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$frame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/frameloop/frame.mjs [app-client] (ecmascript)");
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
var metrics = {
    nodes: 0,
    calculatedTargetDeltas: 0,
    calculatedProjections: 0
};
var transformAxes = [
    "",
    "X",
    "Y",
    "Z"
];
/**
 * We use 1000 as the animation target as 0-1000 maps better to pixels than 0-1
 * which has a noticeable difference in spring animations
 */ var animationTarget = 1000;
var id = 0;
function resetDistortingTransform(key, visualElement, values, sharedAnimationValues) {
    var latestValues = visualElement.latestValues;
    // Record the distorting transform and then temporarily set it to 0
    if (latestValues[key]) {
        values[key] = latestValues[key];
        visualElement.setStaticValue(key, 0);
        if (sharedAnimationValues) {
            sharedAnimationValues[key] = 0;
        }
    }
}
function cancelTreeOptimisedTransformAnimations(projectionNode) {
    projectionNode.hasCheckedOptimisedAppear = true;
    if (projectionNode.root === projectionNode) return;
    var visualElement = projectionNode.options.visualElement;
    if (!visualElement) return;
    var appearId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$optimized$2d$appear$2f$get$2d$appear$2d$id$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getOptimisedAppearId"])(visualElement);
    if (window.MotionHasOptimisedAnimation(appearId, "transform")) {
        var _projectionNode_options = projectionNode.options, layout = _projectionNode_options.layout, layoutId = _projectionNode_options.layoutId;
        window.MotionCancelOptimisedAnimation(appearId, "transform", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$frame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["frame"], !(layout || layoutId));
    }
    var parent = projectionNode.parent;
    if (parent && !parent.hasCheckedOptimisedAppear) {
        cancelTreeOptimisedTransformAnimations(parent);
    }
}
function createProjectionNode(param) {
    var attachResizeListener = param.attachResizeListener, defaultParent = param.defaultParent, measureScroll = param.measureScroll, checkIsScrollRoot = param.checkIsScrollRoot, resetTransform = param.resetTransform;
    return /*#__PURE__*/ function() {
        "use strict";
        function ProjectionNode() {
            var _this = this;
            var latestValues = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, parent = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : defaultParent === null || defaultParent === void 0 ? void 0 : defaultParent();
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_call_check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, ProjectionNode);
            /**
             * A unique ID generated for every projection node.
             */ this.id = id++;
            /**
             * An id that represents a unique session instigated by startUpdate.
             */ this.animationId = 0;
            this.animationCommitId = 0;
            /**
             * A Set containing all this component's children. This is used to iterate
             * through the children.
             *
             * TODO: This could be faster to iterate as a flat array stored on the root node.
             */ this.children = new Set();
            /**
             * Options for the node. We use this to configure what kind of layout animations
             * we should perform (if any).
             */ this.options = {};
            /**
             * We use this to detect when its safe to shut down part of a projection tree.
             * We have to keep projecting children for scale correction and relative projection
             * until all their parents stop performing layout animations.
             */ this.isTreeAnimating = false;
            this.isAnimationBlocked = false;
            /**
             * Flag to true if we think this layout has been changed. We can't always know this,
             * currently we set it to true every time a component renders, or if it has a layoutDependency
             * if that has changed between renders. Additionally, components can be grouped by LayoutGroup
             * and if one node is dirtied, they all are.
             */ this.isLayoutDirty = false;
            /**
             * Flag to true if we think the projection calculations for this node needs
             * recalculating as a result of an updated transform or layout animation.
             */ this.isProjectionDirty = false;
            /**
             * Flag to true if the layout *or* transform has changed. This then gets propagated
             * throughout the projection tree, forcing any element below to recalculate on the next frame.
             */ this.isSharedProjectionDirty = false;
            /**
             * Flag transform dirty. This gets propagated throughout the whole tree but is only
             * respected by shared nodes.
             */ this.isTransformDirty = false;
            /**
             * Block layout updates for instant layout transitions throughout the tree.
             */ this.updateManuallyBlocked = false;
            this.updateBlockedByResize = false;
            /**
             * Set to true between the start of the first `willUpdate` call and the end of the `didUpdate`
             * call.
             */ this.isUpdating = false;
            /**
             * If this is an SVG element we currently disable projection transforms
             */ this.isSVG = false;
            /**
             * Flag to true (during promotion) if a node doing an instant layout transition needs to reset
             * its projection styles.
             */ this.needsReset = false;
            /**
             * Flags whether this node should have its transform reset prior to measuring.
             */ this.shouldResetTransform = false;
            /**
             * Store whether this node has been checked for optimised appear animations. As
             * effects fire bottom-up, and we want to look up the tree for appear animations,
             * this makes sure we only check each path once, stopping at nodes that
             * have already been checked.
             */ this.hasCheckedOptimisedAppear = false;
            /**
             * An object representing the calculated contextual/accumulated/tree scale.
             * This will be used to scale calculcated projection transforms, as these are
             * calculated in screen-space but need to be scaled for elements to layoutly
             * make it to their calculated destinations.
             *
             * TODO: Lazy-init
             */ this.treeScale = {
                x: 1,
                y: 1
            };
            /**
             *
             */ this.eventHandlers = new Map();
            this.hasTreeAnimated = false;
            this.layoutVersion = 0;
            // Note: Currently only running on root node
            this.updateScheduled = false;
            this.scheduleUpdate = function() {
                return _this.update();
            };
            this.projectionUpdateScheduled = false;
            this.checkUpdateFailed = function() {
                if (_this.isUpdating) {
                    _this.isUpdating = false;
                    _this.clearAllSnapshots();
                }
            };
            /**
             * This is a multi-step process as shared nodes might be of different depths. Nodes
             * are sorted by depth order, so we need to resolve the entire tree before moving to
             * the next step.
             */ this.updateProjection = function() {
                _this.projectionUpdateScheduled = false;
                /**
                 * Reset debug counts. Manually resetting rather than creating a new
                 * object each frame.
                 */ if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$stats$2f$buffer$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["statsBuffer"].value) {
                    metrics.nodes = metrics.calculatedTargetDeltas = metrics.calculatedProjections = 0;
                }
                _this.nodes.forEach(propagateDirtyNodes);
                _this.nodes.forEach(resolveTargetDelta);
                _this.nodes.forEach(calcProjection);
                _this.nodes.forEach(cleanDirtyNodes);
                if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$stats$2f$buffer$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["statsBuffer"].addProjectionMetrics) {
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$stats$2f$buffer$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["statsBuffer"].addProjectionMetrics(metrics);
                }
            };
            /**
             * Frame calculations
             */ this.resolvedRelativeTargetAt = 0.0;
            this.linkedParentVersion = 0;
            this.hasProjected = false;
            this.isVisible = true;
            this.animationProgress = 0;
            /**
             * Shared layout
             */ // TODO Only running on root node
            this.sharedNodes = new Map();
            this.latestValues = latestValues;
            this.root = parent ? parent.root || parent : this;
            this.path = parent ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_to_consumable_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(parent.path).concat([
                parent
            ]) : [];
            this.parent = parent;
            this.depth = parent ? parent.depth + 1 : 0;
            for(var i = 0; i < this.path.length; i++){
                this.path[i].shouldResetTransform = true;
            }
            if (this.root === this) this.nodes = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$utils$2f$flat$2d$tree$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FlatTree"]();
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_create_class$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(ProjectionNode, [
            {
                key: "addEventListener",
                value: function addEventListener(name, handler) {
                    if (!this.eventHandlers.has(name)) {
                        this.eventHandlers.set(name, new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$29$2e$2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$subscription$2d$manager$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SubscriptionManager"]());
                    }
                    return this.eventHandlers.get(name).add(handler);
                }
            },
            {
                key: "notifyListeners",
                value: function notifyListeners(name) {
                    for(var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
                        args[_key - 1] = arguments[_key];
                    }
                    var _subscriptionManager;
                    var subscriptionManager = this.eventHandlers.get(name);
                    subscriptionManager && (_subscriptionManager = subscriptionManager).notify.apply(_subscriptionManager, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_to_consumable_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(args));
                }
            },
            {
                key: "hasListeners",
                value: function hasListeners(name) {
                    return this.eventHandlers.has(name);
                }
            },
            {
                /**
         * Lifecycles
         */ key: "mount",
                value: function mount(instance) {
                    var _this = this;
                    if (this.instance) return;
                    this.isSVG = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$is$2d$svg$2d$element$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isSVGElement"])(instance) && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$is$2d$svg$2d$svg$2d$element$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isSVGSVGElement"])(instance);
                    this.instance = instance;
                    var _this_options = this.options, layoutId = _this_options.layoutId, layout = _this_options.layout, visualElement = _this_options.visualElement;
                    if (visualElement && !visualElement.current) {
                        visualElement.mount(instance);
                    }
                    this.root.nodes.add(this);
                    this.parent && this.parent.children.add(this);
                    if (this.root.hasTreeAnimated && (layout || layoutId)) {
                        this.isLayoutDirty = true;
                    }
                    if (attachResizeListener) {
                        var cancelDelay;
                        var innerWidth = 0;
                        var resizeUnblockUpdate = function() {
                            return _this.root.updateBlockedByResize = false;
                        };
                        // Set initial innerWidth in a frame.read callback to batch the read
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$frame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["frame"].read(function() {
                            innerWidth = window.innerWidth;
                        });
                        attachResizeListener(instance, function() {
                            var newInnerWidth = window.innerWidth;
                            if (newInnerWidth === innerWidth) return;
                            innerWidth = newInnerWidth;
                            _this.root.updateBlockedByResize = true;
                            cancelDelay && cancelDelay();
                            cancelDelay = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$delay$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["delay"])(resizeUnblockUpdate, 250);
                            if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$node$2f$state$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["globalProjectionState"].hasAnimatedSinceResize) {
                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$node$2f$state$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["globalProjectionState"].hasAnimatedSinceResize = false;
                                _this.nodes.forEach(finishAnimation);
                            }
                        });
                    }
                    if (layoutId) {
                        this.root.registerSharedNode(layoutId, this);
                    }
                    // Only register the handler if it requires layout animation
                    if (this.options.animate !== false && visualElement && (layoutId || layout)) {
                        this.addEventListener("didUpdate", function(param) {
                            var delta = param.delta, hasLayoutChanged = param.hasLayoutChanged, hasRelativeLayoutChanged = param.hasRelativeLayoutChanged, newLayout = param.layout;
                            if (_this.isTreeAnimationBlocked()) {
                                _this.target = undefined;
                                _this.relativeTarget = undefined;
                                return;
                            }
                            // TODO: Check here if an animation exists
                            var layoutTransition = _this.options.transition || visualElement.getDefaultTransition() || defaultLayoutTransition;
                            var _visualElement_getProps = visualElement.getProps(), onLayoutAnimationStart = _visualElement_getProps.onLayoutAnimationStart, onLayoutAnimationComplete = _visualElement_getProps.onLayoutAnimationComplete;
                            /**
                     * The target layout of the element might stay the same,
                     * but its position relative to its parent has changed.
                     */ var hasTargetChanged = !_this.targetLayout || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$geometry$2f$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["boxEqualsRounded"])(_this.targetLayout, newLayout);
                            /*
                     * Note: Disabled to fix relative animations always triggering new
                     * layout animations. If this causes further issues, we can try
                     * a different approach to detecting relative target changes.
                     */ // || hasRelativeLayoutChanged
                            /**
                     * If the layout hasn't seemed to have changed, it might be that the
                     * element is visually in the same place in the document but its position
                     * relative to its parent has indeed changed. So here we check for that.
                     */ var hasOnlyRelativeTargetChanged = !hasLayoutChanged && hasRelativeLayoutChanged;
                            if (_this.options.layoutRoot || _this.resumeFrom || hasOnlyRelativeTargetChanged || hasLayoutChanged && (hasTargetChanged || !_this.currentAnimation)) {
                                if (_this.resumeFrom) {
                                    _this.resumingFrom = _this.resumeFrom;
                                    _this.resumingFrom.resumingFrom = undefined;
                                }
                                var animationOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$utils$2f$get$2d$value$2d$transition$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getValueTransition"])(layoutTransition, "layout")), {
                                    onPlay: onLayoutAnimationStart,
                                    onComplete: onLayoutAnimationComplete
                                });
                                if (visualElement.shouldReduceMotion || _this.options.layoutRoot) {
                                    animationOptions.delay = 0;
                                    animationOptions.type = false;
                                }
                                _this.startAnimation(animationOptions);
                                /**
                         * Set animation origin after starting animation to avoid layout jump
                         * caused by stopping previous layout animation
                         */ _this.setAnimationOrigin(delta, hasOnlyRelativeTargetChanged);
                            } else {
                                /**
                         * If the layout hasn't changed and we have an animation that hasn't started yet,
                         * finish it immediately. Otherwise it will be animating from a location
                         * that was probably never committed to screen and look like a jumpy box.
                         */ if (!hasLayoutChanged) {
                                    finishAnimation(_this);
                                }
                                if (_this.isLead() && _this.options.onExitComplete) {
                                    _this.options.onExitComplete();
                                }
                            }
                            _this.targetLayout = newLayout;
                        });
                    }
                }
            },
            {
                key: "unmount",
                value: function unmount() {
                    this.options.layoutId && this.willUpdate();
                    this.root.nodes.remove(this);
                    var stack = this.getStack();
                    stack && stack.remove(this);
                    this.parent && this.parent.children.delete(this);
                    this.instance = undefined;
                    this.eventHandlers.clear();
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$frame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cancelFrame"])(this.updateProjection);
                }
            },
            {
                // only on the root
                key: "blockUpdate",
                value: function blockUpdate() {
                    this.updateManuallyBlocked = true;
                }
            },
            {
                key: "unblockUpdate",
                value: function unblockUpdate() {
                    this.updateManuallyBlocked = false;
                }
            },
            {
                key: "isUpdateBlocked",
                value: function isUpdateBlocked() {
                    return this.updateManuallyBlocked || this.updateBlockedByResize;
                }
            },
            {
                key: "isTreeAnimationBlocked",
                value: function isTreeAnimationBlocked() {
                    return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || false;
                }
            },
            {
                // Note: currently only running on root node
                key: "startUpdate",
                value: function startUpdate() {
                    if (this.isUpdateBlocked()) return;
                    this.isUpdating = true;
                    this.nodes && this.nodes.forEach(resetSkewAndRotation);
                    this.animationId++;
                }
            },
            {
                key: "getTransformTemplate",
                value: function getTransformTemplate() {
                    var visualElement = this.options.visualElement;
                    return visualElement && visualElement.getProps().transformTemplate;
                }
            },
            {
                key: "willUpdate",
                value: function willUpdate() {
                    var shouldNotifyListeners = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
                    this.root.hasTreeAnimated = true;
                    if (this.root.isUpdateBlocked()) {
                        this.options.onExitComplete && this.options.onExitComplete();
                        return;
                    }
                    /**
             * If we're running optimised appear animations then these must be
             * cancelled before measuring the DOM. This is so we can measure
             * the true layout of the element rather than the WAAPI animation
             * which will be unaffected by the resetSkewAndRotate step.
             *
             * Note: This is a DOM write. Worst case scenario is this is sandwiched
             * between other snapshot reads which will cause unnecessary style recalculations.
             * This has to happen here though, as we don't yet know which nodes will need
             * snapshots in startUpdate(), but we only want to cancel optimised animations
             * if a layout animation measurement is actually going to be affected by them.
             */ if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear) {
                        cancelTreeOptimisedTransformAnimations(this);
                    }
                    !this.root.isUpdating && this.root.startUpdate();
                    if (this.isLayoutDirty) return;
                    this.isLayoutDirty = true;
                    for(var i = 0; i < this.path.length; i++){
                        var node = this.path[i];
                        node.shouldResetTransform = true;
                        node.updateScroll("snapshot");
                        if (node.options.layoutRoot) {
                            node.willUpdate(false);
                        }
                    }
                    var _this_options = this.options, layoutId = _this_options.layoutId, layout = _this_options.layout;
                    if (layoutId === undefined && !layout) return;
                    var transformTemplate = this.getTransformTemplate();
                    this.prevTransformTemplateValue = transformTemplate ? transformTemplate(this.latestValues, "") : undefined;
                    this.updateSnapshot();
                    shouldNotifyListeners && this.notifyListeners("willUpdate");
                }
            },
            {
                key: "update",
                value: function update() {
                    this.updateScheduled = false;
                    var updateWasBlocked = this.isUpdateBlocked();
                    // When doing an instant transition, we skip the layout update,
                    // but should still clean up the measurements so that the next
                    // snapshot could be taken correctly.
                    if (updateWasBlocked) {
                        this.unblockUpdate();
                        this.clearAllSnapshots();
                        this.nodes.forEach(clearMeasurements);
                        return;
                    }
                    /**
             * If this is a repeat of didUpdate then ignore the animation.
             */ if (this.animationId <= this.animationCommitId) {
                        this.nodes.forEach(clearIsLayoutDirty);
                        return;
                    }
                    this.animationCommitId = this.animationId;
                    if (!this.isUpdating) {
                        this.nodes.forEach(clearIsLayoutDirty);
                    } else {
                        this.isUpdating = false;
                        /**
                 * Write
                 */ this.nodes.forEach(resetTransformStyle);
                        /**
                 * Read ==================
                 */ // Update layout measurements of updated children
                        this.nodes.forEach(updateLayout);
                        /**
                 * Write
                 */ // Notify listeners that the layout is updated
                        this.nodes.forEach(notifyLayoutUpdate);
                    }
                    this.clearAllSnapshots();
                    /**
             * Manually flush any pending updates. Ideally
             * we could leave this to the following requestAnimationFrame but this seems
             * to leave a flash of incorrectly styled content.
             */ var now = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$sync$2d$time$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["time"].now();
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$frame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["frameData"].delta = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$29$2e$2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$clamp$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clamp"])(0, 1000 / 60, now - __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$frame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["frameData"].timestamp);
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$frame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["frameData"].timestamp = now;
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$frame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["frameData"].isProcessing = true;
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$frame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["frameSteps"].update.process(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$frame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["frameData"]);
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$frame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["frameSteps"].preRender.process(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$frame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["frameData"]);
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$frame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["frameSteps"].render.process(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$frame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["frameData"]);
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$frame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["frameData"].isProcessing = false;
                }
            },
            {
                key: "didUpdate",
                value: function didUpdate() {
                    if (!this.updateScheduled) {
                        this.updateScheduled = true;
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$microtask$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["microtask"].read(this.scheduleUpdate);
                    }
                }
            },
            {
                key: "clearAllSnapshots",
                value: function clearAllSnapshots() {
                    this.nodes.forEach(clearSnapshot);
                    this.sharedNodes.forEach(removeLeadSnapshots);
                }
            },
            {
                key: "scheduleUpdateProjection",
                value: function scheduleUpdateProjection() {
                    if (!this.projectionUpdateScheduled) {
                        this.projectionUpdateScheduled = true;
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$frame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["frame"].preRender(this.updateProjection, false, true);
                    }
                }
            },
            {
                key: "scheduleCheckAfterUnmount",
                value: function scheduleCheckAfterUnmount() {
                    var _this = this;
                    /**
             * If the unmounting node is in a layoutGroup and did trigger a willUpdate,
             * we manually call didUpdate to give a chance to the siblings to animate.
             * Otherwise, cleanup all snapshots to prevents future nodes from reusing them.
             */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$frame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["frame"].postRender(function() {
                        if (_this.isLayoutDirty) {
                            _this.root.didUpdate();
                        } else {
                            _this.root.checkUpdateFailed();
                        }
                    });
                }
            },
            {
                /**
         * Update measurements
         */ key: "updateSnapshot",
                value: function updateSnapshot() {
                    if (this.snapshot || !this.instance) return;
                    this.snapshot = this.measure();
                    if (this.snapshot && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$geometry$2f$delta$2d$calc$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calcLength"])(this.snapshot.measuredBox.x) && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$geometry$2f$delta$2d$calc$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calcLength"])(this.snapshot.measuredBox.y)) {
                        this.snapshot = undefined;
                    }
                }
            },
            {
                key: "updateLayout",
                value: function updateLayout() {
                    if (!this.instance) return;
                    this.updateScroll();
                    if (!(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty) {
                        return;
                    }
                    /**
             * When a node is mounted, it simply resumes from the prevLead's
             * snapshot instead of taking a new one, but the ancestors scroll
             * might have updated while the prevLead is unmounted. We need to
             * update the scroll again to make sure the layout we measure is
             * up to date.
             */ if (this.resumeFrom && !this.resumeFrom.instance) {
                        for(var i = 0; i < this.path.length; i++){
                            var node = this.path[i];
                            node.updateScroll();
                        }
                    }
                    var prevLayout = this.layout;
                    this.layout = this.measure(false);
                    this.layoutVersion++;
                    this.layoutCorrected = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$geometry$2f$models$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createBox"])();
                    this.isLayoutDirty = false;
                    this.projectionDelta = undefined;
                    this.notifyListeners("measure", this.layout.layoutBox);
                    var visualElement = this.options.visualElement;
                    visualElement && visualElement.notify("LayoutMeasure", this.layout.layoutBox, prevLayout ? prevLayout.layoutBox : undefined);
                }
            },
            {
                key: "updateScroll",
                value: function updateScroll() {
                    var phase = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "measure";
                    var needsMeasurement = Boolean(this.options.layoutScroll && this.instance);
                    if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === phase) {
                        needsMeasurement = false;
                    }
                    if (needsMeasurement && this.instance) {
                        var isRoot = checkIsScrollRoot(this.instance);
                        this.scroll = {
                            animationId: this.root.animationId,
                            phase: phase,
                            isRoot: isRoot,
                            offset: measureScroll(this.instance),
                            wasRoot: this.scroll ? this.scroll.isRoot : isRoot
                        };
                    }
                }
            },
            {
                key: "resetTransform",
                value: function resetTransform1() {
                    if (!resetTransform) return;
                    var isResetRequested = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout;
                    var hasProjection = this.projectionDelta && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$geometry$2f$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isDeltaZero"])(this.projectionDelta);
                    var transformTemplate = this.getTransformTemplate();
                    var transformTemplateValue = transformTemplate ? transformTemplate(this.latestValues, "") : undefined;
                    var transformTemplateHasChanged = transformTemplateValue !== this.prevTransformTemplateValue;
                    if (isResetRequested && this.instance && (hasProjection || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$utils$2f$has$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hasTransform"])(this.latestValues) || transformTemplateHasChanged)) {
                        resetTransform(this.instance, transformTemplateValue);
                        this.shouldResetTransform = false;
                        this.scheduleRender();
                    }
                }
            },
            {
                key: "measure",
                value: function measure() {
                    var removeTransform = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
                    var pageBox = this.measurePageBox();
                    var layoutBox = this.removeElementScroll(pageBox);
                    /**
             * Measurements taken during the pre-render stage
             * still have transforms applied so we remove them
             * via calculation.
             */ if (removeTransform) {
                        layoutBox = this.removeTransform(layoutBox);
                    }
                    roundBox(layoutBox);
                    return {
                        animationId: this.root.animationId,
                        measuredBox: pageBox,
                        layoutBox: layoutBox,
                        latestValues: {},
                        source: this.id
                    };
                }
            },
            {
                key: "measurePageBox",
                value: function measurePageBox() {
                    var _this_scroll;
                    var visualElement = this.options.visualElement;
                    if (!visualElement) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$geometry$2f$models$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createBox"])();
                    var box = visualElement.measureViewportBox();
                    var wasInScrollRoot = ((_this_scroll = this.scroll) === null || _this_scroll === void 0 ? void 0 : _this_scroll.wasRoot) || this.path.some(checkNodeWasScrollRoot);
                    if (!wasInScrollRoot) {
                        // Remove viewport scroll to give page-relative coordinates
                        var scroll = this.root.scroll;
                        if (scroll) {
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$geometry$2f$delta$2d$apply$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["translateAxis"])(box.x, scroll.offset.x);
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$geometry$2f$delta$2d$apply$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["translateAxis"])(box.y, scroll.offset.y);
                        }
                    }
                    return box;
                }
            },
            {
                key: "removeElementScroll",
                value: function removeElementScroll(box) {
                    var _this_scroll;
                    var boxWithoutScroll = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$geometry$2f$models$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createBox"])();
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$geometry$2f$copy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["copyBoxInto"])(boxWithoutScroll, box);
                    if ((_this_scroll = this.scroll) === null || _this_scroll === void 0 ? void 0 : _this_scroll.wasRoot) {
                        return boxWithoutScroll;
                    }
                    /**
             * Performance TODO: Keep a cumulative scroll offset down the tree
             * rather than loop back up the path.
             */ for(var i = 0; i < this.path.length; i++){
                        var node = this.path[i];
                        var scroll = node.scroll, options = node.options;
                        if (node !== this.root && scroll && options.layoutScroll) {
                            /**
                     * If this is a new scroll root, we want to remove all previous scrolls
                     * from the viewport box.
                     */ if (scroll.wasRoot) {
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$geometry$2f$copy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["copyBoxInto"])(boxWithoutScroll, box);
                            }
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$geometry$2f$delta$2d$apply$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["translateAxis"])(boxWithoutScroll.x, scroll.offset.x);
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$geometry$2f$delta$2d$apply$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["translateAxis"])(boxWithoutScroll.y, scroll.offset.y);
                        }
                    }
                    return boxWithoutScroll;
                }
            },
            {
                key: "applyTransform",
                value: function applyTransform(box) {
                    var transformOnly = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
                    var withTransforms = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$geometry$2f$models$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createBox"])();
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$geometry$2f$copy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["copyBoxInto"])(withTransforms, box);
                    for(var i = 0; i < this.path.length; i++){
                        var node = this.path[i];
                        if (!transformOnly && node.options.layoutScroll && node.scroll && node !== node.root) {
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$geometry$2f$delta$2d$apply$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformBox"])(withTransforms, {
                                x: -node.scroll.offset.x,
                                y: -node.scroll.offset.y
                            });
                        }
                        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$utils$2f$has$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hasTransform"])(node.latestValues)) continue;
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$geometry$2f$delta$2d$apply$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformBox"])(withTransforms, node.latestValues);
                    }
                    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$utils$2f$has$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hasTransform"])(this.latestValues)) {
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$geometry$2f$delta$2d$apply$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformBox"])(withTransforms, this.latestValues);
                    }
                    return withTransforms;
                }
            },
            {
                key: "removeTransform",
                value: function removeTransform(box) {
                    var boxWithoutTransform = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$geometry$2f$models$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createBox"])();
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$geometry$2f$copy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["copyBoxInto"])(boxWithoutTransform, box);
                    for(var i = 0; i < this.path.length; i++){
                        var node = this.path[i];
                        if (!node.instance) continue;
                        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$utils$2f$has$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hasTransform"])(node.latestValues)) continue;
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$utils$2f$has$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hasScale"])(node.latestValues) && node.updateSnapshot();
                        var sourceBox = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$geometry$2f$models$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createBox"])();
                        var nodeBox = node.measurePageBox();
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$geometry$2f$copy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["copyBoxInto"])(sourceBox, nodeBox);
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$geometry$2f$delta$2d$remove$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["removeBoxTransforms"])(boxWithoutTransform, node.latestValues, node.snapshot ? node.snapshot.layoutBox : undefined, sourceBox);
                    }
                    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$utils$2f$has$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hasTransform"])(this.latestValues)) {
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$geometry$2f$delta$2d$remove$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["removeBoxTransforms"])(boxWithoutTransform, this.latestValues);
                    }
                    return boxWithoutTransform;
                }
            },
            {
                key: "setTargetDelta",
                value: function setTargetDelta(delta) {
                    this.targetDelta = delta;
                    this.root.scheduleUpdateProjection();
                    this.isProjectionDirty = true;
                }
            },
            {
                key: "setOptions",
                value: function setOptions(options) {
                    this.options = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, this.options, options), {
                        crossfade: options.crossfade !== undefined ? options.crossfade : true
                    });
                }
            },
            {
                key: "clearMeasurements",
                value: function clearMeasurements() {
                    this.scroll = undefined;
                    this.layout = undefined;
                    this.snapshot = undefined;
                    this.prevTransformTemplateValue = undefined;
                    this.targetDelta = undefined;
                    this.target = undefined;
                    this.isLayoutDirty = false;
                }
            },
            {
                key: "forceRelativeParentToResolveTarget",
                value: function forceRelativeParentToResolveTarget() {
                    if (!this.relativeParent) return;
                    /**
             * If the parent target isn't up-to-date, force it to update.
             * This is an unfortunate de-optimisation as it means any updating relative
             * projection will cause all the relative parents to recalculate back
             * up the tree.
             */ if (this.relativeParent.resolvedRelativeTargetAt !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$frame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["frameData"].timestamp) {
                        this.relativeParent.resolveTargetDelta(true);
                    }
                }
            },
            {
                key: "resolveTargetDelta",
                value: function resolveTargetDelta() {
                    var forceRecalculation = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false;
                    var _this_parent;
                    /**
             * Once the dirty status of nodes has been spread through the tree, we also
             * need to check if we have a shared node of a different depth that has itself
             * been dirtied.
             */ var lead = this.getLead();
                    this.isProjectionDirty || (this.isProjectionDirty = lead.isProjectionDirty);
                    this.isTransformDirty || (this.isTransformDirty = lead.isTransformDirty);
                    this.isSharedProjectionDirty || (this.isSharedProjectionDirty = lead.isSharedProjectionDirty);
                    var isShared = Boolean(this.resumingFrom) || this !== lead;
                    /**
             * We don't use transform for this step of processing so we don't
             * need to check whether any nodes have changed transform.
             */ var canSkip = !(forceRecalculation || isShared && this.isSharedProjectionDirty || this.isProjectionDirty || ((_this_parent = this.parent) === null || _this_parent === void 0 ? void 0 : _this_parent.isProjectionDirty) || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize);
                    if (canSkip) return;
                    var _this_options = this.options, layout = _this_options.layout, layoutId = _this_options.layoutId;
                    /**
             * If we have no layout, we can't perform projection, so early return
             */ if (!this.layout || !(layout || layoutId)) return;
                    this.resolvedRelativeTargetAt = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$frame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["frameData"].timestamp;
                    var relativeParent = this.getClosestProjectingParent();
                    if (relativeParent && this.linkedParentVersion !== relativeParent.layoutVersion && !relativeParent.options.layoutRoot) {
                        this.removeRelativeTarget();
                    }
                    /**
             * If we don't have a targetDelta but do have a layout, we can attempt to resolve
             * a relativeParent. This will allow a component to perform scale correction
             * even if no animation has started.
             */ if (!this.targetDelta && !this.relativeTarget) {
                        if (relativeParent && relativeParent.layout) {
                            this.createRelativeTarget(relativeParent, this.layout.layoutBox, relativeParent.layout.layoutBox);
                        } else {
                            this.removeRelativeTarget();
                        }
                    }
                    /**
             * If we have no relative target or no target delta our target isn't valid
             * for this frame.
             */ if (!this.relativeTarget && !this.targetDelta) return;
                    /**
             * Lazy-init target data structure
             */ if (!this.target) {
                        this.target = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$geometry$2f$models$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createBox"])();
                        this.targetWithTransforms = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$geometry$2f$models$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createBox"])();
                    }
                    /**
             * If we've got a relative box for this component, resolve it into a target relative to the parent.
             */ if (this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target) {
                        this.forceRelativeParentToResolveTarget();
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$geometry$2f$delta$2d$calc$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calcRelativeBox"])(this.target, this.relativeTarget, this.relativeParent.target);
                    /**
                 * If we've only got a targetDelta, resolve it into a target
                 */ } else if (this.targetDelta) {
                        if (Boolean(this.resumingFrom)) {
                            // TODO: This is creating a new object every frame
                            this.target = this.applyTransform(this.layout.layoutBox);
                        } else {
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$geometry$2f$copy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["copyBoxInto"])(this.target, this.layout.layoutBox);
                        }
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$geometry$2f$delta$2d$apply$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["applyBoxDelta"])(this.target, this.targetDelta);
                    } else {
                        /**
                 * If no target, use own layout as target
                 */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$geometry$2f$copy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["copyBoxInto"])(this.target, this.layout.layoutBox);
                    }
                    /**
             * If we've been told to attempt to resolve a relative target, do so.
             */ if (this.attemptToResolveRelativeTarget) {
                        this.attemptToResolveRelativeTarget = false;
                        if (relativeParent && Boolean(relativeParent.resumingFrom) === Boolean(this.resumingFrom) && !relativeParent.options.layoutScroll && relativeParent.target && this.animationProgress !== 1) {
                            this.createRelativeTarget(relativeParent, this.target, relativeParent.target);
                        } else {
                            this.relativeParent = this.relativeTarget = undefined;
                        }
                    }
                    /**
             * Increase debug counter for resolved target deltas
             */ if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$stats$2f$buffer$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["statsBuffer"].value) {
                        metrics.calculatedTargetDeltas++;
                    }
                }
            },
            {
                key: "getClosestProjectingParent",
                value: function getClosestProjectingParent() {
                    if (!this.parent || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$utils$2f$has$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hasScale"])(this.parent.latestValues) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$utils$2f$has$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["has2DTranslate"])(this.parent.latestValues)) {
                        return undefined;
                    }
                    if (this.parent.isProjecting()) {
                        return this.parent;
                    } else {
                        return this.parent.getClosestProjectingParent();
                    }
                }
            },
            {
                key: "isProjecting",
                value: function isProjecting() {
                    return Boolean((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout);
                }
            },
            {
                key: "createRelativeTarget",
                value: function createRelativeTarget(relativeParent, layout, parentLayout) {
                    this.relativeParent = relativeParent;
                    this.linkedParentVersion = relativeParent.layoutVersion;
                    this.forceRelativeParentToResolveTarget();
                    this.relativeTarget = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$geometry$2f$models$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createBox"])();
                    this.relativeTargetOrigin = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$geometry$2f$models$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createBox"])();
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$geometry$2f$delta$2d$calc$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calcRelativePosition"])(this.relativeTargetOrigin, layout, parentLayout);
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$geometry$2f$copy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["copyBoxInto"])(this.relativeTarget, this.relativeTargetOrigin);
                }
            },
            {
                key: "removeRelativeTarget",
                value: function removeRelativeTarget() {
                    this.relativeParent = this.relativeTarget = undefined;
                }
            },
            {
                key: "calcProjection",
                value: function calcProjection() {
                    var _this_parent;
                    var lead = this.getLead();
                    var isShared = Boolean(this.resumingFrom) || this !== lead;
                    var canSkip = true;
                    /**
             * If this is a normal layout animation and neither this node nor its nearest projecting
             * is dirty then we can't skip.
             */ if (this.isProjectionDirty || ((_this_parent = this.parent) === null || _this_parent === void 0 ? void 0 : _this_parent.isProjectionDirty)) {
                        canSkip = false;
                    }
                    /**
             * If this is a shared layout animation and this node's shared projection is dirty then
             * we can't skip.
             */ if (isShared && (this.isSharedProjectionDirty || this.isTransformDirty)) {
                        canSkip = false;
                    }
                    /**
             * If we have resolved the target this frame we must recalculate the
             * projection to ensure it visually represents the internal calculations.
             */ if (this.resolvedRelativeTargetAt === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$frame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["frameData"].timestamp) {
                        canSkip = false;
                    }
                    if (canSkip) return;
                    var _this_options = this.options, layout = _this_options.layout, layoutId = _this_options.layoutId;
                    /**
             * If this section of the tree isn't animating we can
             * delete our target sources for the following frame.
             */ this.isTreeAnimating = Boolean(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation);
                    if (!this.isTreeAnimating) {
                        this.targetDelta = this.relativeTarget = undefined;
                    }
                    if (!this.layout || !(layout || layoutId)) return;
                    /**
             * Reset the corrected box with the latest values from box, as we're then going
             * to perform mutative operations on it.
             */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$geometry$2f$copy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["copyBoxInto"])(this.layoutCorrected, this.layout.layoutBox);
                    /**
             * Record previous tree scales before updating.
             */ var prevTreeScaleX = this.treeScale.x;
                    var prevTreeScaleY = this.treeScale.y;
                    /**
             * Apply all the parent deltas to this box to produce the corrected box. This
             * is the layout box, as it will appear on screen as a result of the transforms of its parents.
             */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$geometry$2f$delta$2d$apply$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["applyTreeDeltas"])(this.layoutCorrected, this.treeScale, this.path, isShared);
                    /**
             * If this layer needs to perform scale correction but doesn't have a target,
             * use the layout as the target.
             */ if (lead.layout && !lead.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1)) {
                        lead.target = lead.layout.layoutBox;
                        lead.targetWithTransforms = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$geometry$2f$models$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createBox"])();
                    }
                    var target = lead.target;
                    if (!target) {
                        /**
                 * If we don't have a target to project into, but we were previously
                 * projecting, we want to remove the stored transform and schedule
                 * a render to ensure the elements reflect the removed transform.
                 */ if (this.prevProjectionDelta) {
                            this.createProjectionDeltas();
                            this.scheduleRender();
                        }
                        return;
                    }
                    if (!this.projectionDelta || !this.prevProjectionDelta) {
                        this.createProjectionDeltas();
                    } else {
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$geometry$2f$copy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["copyAxisDeltaInto"])(this.prevProjectionDelta.x, this.projectionDelta.x);
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$geometry$2f$copy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["copyAxisDeltaInto"])(this.prevProjectionDelta.y, this.projectionDelta.y);
                    }
                    /**
             * Update the delta between the corrected box and the target box before user-set transforms were applied.
             * This will allow us to calculate the corrected borderRadius and boxShadow to compensate
             * for our layout reprojection, but still allow them to be scaled correctly by the user.
             * It might be that to simplify this we may want to accept that user-set scale is also corrected
             * and we wouldn't have to keep and calc both deltas, OR we could support a user setting
             * to allow people to choose whether these styles are corrected based on just the
             * layout reprojection or the final bounding box.
             */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$geometry$2f$delta$2d$calc$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calcBoxDelta"])(this.projectionDelta, this.layoutCorrected, target, this.latestValues);
                    if (this.treeScale.x !== prevTreeScaleX || this.treeScale.y !== prevTreeScaleY || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$geometry$2f$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["axisDeltaEquals"])(this.projectionDelta.x, this.prevProjectionDelta.x) || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$geometry$2f$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["axisDeltaEquals"])(this.projectionDelta.y, this.prevProjectionDelta.y)) {
                        this.hasProjected = true;
                        this.scheduleRender();
                        this.notifyListeners("projectionUpdate", target);
                    }
                    /**
             * Increase debug counter for recalculated projections
             */ if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$stats$2f$buffer$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["statsBuffer"].value) {
                        metrics.calculatedProjections++;
                    }
                }
            },
            {
                key: "hide",
                value: function hide() {
                    this.isVisible = false;
                // TODO: Schedule render
                }
            },
            {
                key: "show",
                value: function show() {
                    this.isVisible = true;
                // TODO: Schedule render
                }
            },
            {
                key: "scheduleRender",
                value: function scheduleRender() {
                    var notifyAll = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
                    var _this_options_visualElement;
                    (_this_options_visualElement = this.options.visualElement) === null || _this_options_visualElement === void 0 ? void 0 : _this_options_visualElement.scheduleRender();
                    if (notifyAll) {
                        var stack = this.getStack();
                        stack && stack.scheduleRender();
                    }
                    if (this.resumingFrom && !this.resumingFrom.instance) {
                        this.resumingFrom = undefined;
                    }
                }
            },
            {
                key: "createProjectionDeltas",
                value: function createProjectionDeltas() {
                    this.prevProjectionDelta = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$geometry$2f$models$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createDelta"])();
                    this.projectionDelta = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$geometry$2f$models$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createDelta"])();
                    this.projectionDeltaWithTransform = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$geometry$2f$models$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createDelta"])();
                }
            },
            {
                key: "setAnimationOrigin",
                value: function setAnimationOrigin(delta) {
                    var _this = this;
                    var hasOnlyRelativeTargetChanged = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
                    var snapshot = this.snapshot;
                    var snapshotLatestValues = snapshot ? snapshot.latestValues : {};
                    var mixedValues = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, this.latestValues);
                    var targetDelta = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$geometry$2f$models$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createDelta"])();
                    if (!this.relativeParent || !this.relativeParent.options.layoutRoot) {
                        this.relativeTarget = this.relativeTargetOrigin = undefined;
                    }
                    this.attemptToResolveRelativeTarget = !hasOnlyRelativeTargetChanged;
                    var relativeLayout = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$geometry$2f$models$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createBox"])();
                    var snapshotSource = snapshot ? snapshot.source : undefined;
                    var layoutSource = this.layout ? this.layout.source : undefined;
                    var isSharedLayoutAnimation = snapshotSource !== layoutSource;
                    var stack = this.getStack();
                    var isOnlyMember = !stack || stack.members.length <= 1;
                    var shouldCrossfadeOpacity = Boolean(isSharedLayoutAnimation && !isOnlyMember && this.options.crossfade === true && !this.path.some(hasOpacityCrossfade));
                    this.animationProgress = 0;
                    var prevRelativeTarget;
                    this.mixTargetDelta = function(latest) {
                        var progress = latest / 1000;
                        mixAxisDelta(targetDelta.x, delta.x, progress);
                        mixAxisDelta(targetDelta.y, delta.y, progress);
                        _this.setTargetDelta(targetDelta);
                        if (_this.relativeTarget && _this.relativeTargetOrigin && _this.layout && _this.relativeParent && _this.relativeParent.layout) {
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$geometry$2f$delta$2d$calc$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calcRelativePosition"])(relativeLayout, _this.layout.layoutBox, _this.relativeParent.layout.layoutBox);
                            mixBox(_this.relativeTarget, _this.relativeTargetOrigin, relativeLayout, progress);
                            /**
                     * If this is an unchanged relative target we can consider the
                     * projection not dirty.
                     */ if (prevRelativeTarget && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$geometry$2f$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["boxEquals"])(_this.relativeTarget, prevRelativeTarget)) {
                                _this.isProjectionDirty = false;
                            }
                            if (!prevRelativeTarget) prevRelativeTarget = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$geometry$2f$models$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createBox"])();
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$geometry$2f$copy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["copyBoxInto"])(prevRelativeTarget, _this.relativeTarget);
                        }
                        if (isSharedLayoutAnimation) {
                            _this.animationValues = mixedValues;
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$animation$2f$mix$2d$values$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mixValues"])(mixedValues, snapshotLatestValues, _this.latestValues, progress, shouldCrossfadeOpacity, isOnlyMember);
                        }
                        _this.root.scheduleUpdateProjection();
                        _this.scheduleRender();
                        _this.animationProgress = progress;
                    };
                    this.mixTargetDelta(this.options.layoutRoot ? 1000 : 0);
                }
            },
            {
                key: "startAnimation",
                value: function startAnimation(options) {
                    var _this = this;
                    var _this_currentAnimation, _this_resumingFrom_currentAnimation, _this_resumingFrom;
                    this.notifyListeners("animationStart");
                    (_this_currentAnimation = this.currentAnimation) === null || _this_currentAnimation === void 0 ? void 0 : _this_currentAnimation.stop();
                    (_this_resumingFrom = this.resumingFrom) === null || _this_resumingFrom === void 0 ? void 0 : (_this_resumingFrom_currentAnimation = _this_resumingFrom.currentAnimation) === null || _this_resumingFrom_currentAnimation === void 0 ? void 0 : _this_resumingFrom_currentAnimation.stop();
                    if (this.pendingAnimation) {
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$frame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cancelFrame"])(this.pendingAnimation);
                        this.pendingAnimation = undefined;
                    }
                    /**
             * Start the animation in the next frame to have a frame with progress 0,
             * where the target is the same as when the animation started, so we can
             * calculate the relative positions correctly for instant transitions.
             */ this.pendingAnimation = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$frame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["frame"].update(function() {
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$node$2f$state$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["globalProjectionState"].hasAnimatedSinceResize = true;
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$stats$2f$animation$2d$count$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["activeAnimations"].layout++;
                        _this.motionValue || (_this.motionValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motionValue"])(0));
                        _this.motionValue.jump(0, false);
                        _this.currentAnimation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$animate$2f$single$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["animateSingleValue"])(_this.motionValue, [
                            0,
                            1000
                        ], (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, options), {
                            velocity: 0,
                            isSync: true,
                            onUpdate: function(latest) {
                                _this.mixTargetDelta(latest);
                                options.onUpdate && options.onUpdate(latest);
                            },
                            onStop: function() {
                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$stats$2f$animation$2d$count$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["activeAnimations"].layout--;
                            },
                            onComplete: function() {
                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$stats$2f$animation$2d$count$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["activeAnimations"].layout--;
                                options.onComplete && options.onComplete();
                                _this.completeAnimation();
                            }
                        }));
                        if (_this.resumingFrom) {
                            _this.resumingFrom.currentAnimation = _this.currentAnimation;
                        }
                        _this.pendingAnimation = undefined;
                    });
                }
            },
            {
                key: "completeAnimation",
                value: function completeAnimation() {
                    if (this.resumingFrom) {
                        this.resumingFrom.currentAnimation = undefined;
                        this.resumingFrom.preserveOpacity = undefined;
                    }
                    var stack = this.getStack();
                    stack && stack.exitAnimationComplete();
                    this.resumingFrom = this.currentAnimation = this.animationValues = undefined;
                    this.notifyListeners("animationComplete");
                }
            },
            {
                key: "finishAnimation",
                value: function finishAnimation() {
                    if (this.currentAnimation) {
                        this.mixTargetDelta && this.mixTargetDelta(animationTarget);
                        this.currentAnimation.stop();
                    }
                    this.completeAnimation();
                }
            },
            {
                key: "applyTransformsToTarget",
                value: function applyTransformsToTarget() {
                    var lead = this.getLead();
                    var targetWithTransforms = lead.targetWithTransforms, target = lead.target, layout = lead.layout, latestValues = lead.latestValues;
                    if (!targetWithTransforms || !target || !layout) return;
                    /**
             * If we're only animating position, and this element isn't the lead element,
             * then instead of projecting into the lead box we instead want to calculate
             * a new target that aligns the two boxes but maintains the layout shape.
             */ if (this !== lead && this.layout && layout && shouldAnimatePositionOnly(this.options.animationType, this.layout.layoutBox, layout.layoutBox)) {
                        target = this.target || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$geometry$2f$models$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createBox"])();
                        var xLength = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$geometry$2f$delta$2d$calc$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calcLength"])(this.layout.layoutBox.x);
                        target.x.min = lead.target.x.min;
                        target.x.max = target.x.min + xLength;
                        var yLength = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$geometry$2f$delta$2d$calc$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calcLength"])(this.layout.layoutBox.y);
                        target.y.min = lead.target.y.min;
                        target.y.max = target.y.min + yLength;
                    }
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$geometry$2f$copy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["copyBoxInto"])(targetWithTransforms, target);
                    /**
             * Apply the latest user-set transforms to the targetBox to produce the targetBoxFinal.
             * This is the final box that we will then project into by calculating a transform delta and
             * applying it to the corrected box.
             */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$geometry$2f$delta$2d$apply$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformBox"])(targetWithTransforms, latestValues);
                    /**
             * Update the delta between the corrected box and the final target box, after
             * user-set transforms are applied to it. This will be used by the renderer to
             * create a transform style that will reproject the element from its layout layout
             * into the desired bounding box.
             */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$geometry$2f$delta$2d$calc$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calcBoxDelta"])(this.projectionDeltaWithTransform, this.layoutCorrected, targetWithTransforms, latestValues);
                }
            },
            {
                key: "registerSharedNode",
                value: function registerSharedNode(layoutId, node) {
                    if (!this.sharedNodes.has(layoutId)) {
                        this.sharedNodes.set(layoutId, new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$shared$2f$stack$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeStack"]());
                    }
                    var stack = this.sharedNodes.get(layoutId);
                    stack.add(node);
                    var config = node.options.initialPromotionConfig;
                    node.promote({
                        transition: config ? config.transition : undefined,
                        preserveFollowOpacity: config && config.shouldPreserveFollowOpacity ? config.shouldPreserveFollowOpacity(node) : undefined
                    });
                }
            },
            {
                key: "isLead",
                value: function isLead() {
                    var stack = this.getStack();
                    return stack ? stack.lead === this : true;
                }
            },
            {
                key: "getLead",
                value: function getLead() {
                    var _this_getStack;
                    var layoutId = this.options.layoutId;
                    return layoutId ? ((_this_getStack = this.getStack()) === null || _this_getStack === void 0 ? void 0 : _this_getStack.lead) || this : this;
                }
            },
            {
                key: "getPrevLead",
                value: function getPrevLead() {
                    var _this_getStack;
                    var layoutId = this.options.layoutId;
                    return layoutId ? (_this_getStack = this.getStack()) === null || _this_getStack === void 0 ? void 0 : _this_getStack.prevLead : undefined;
                }
            },
            {
                key: "getStack",
                value: function getStack() {
                    var layoutId = this.options.layoutId;
                    if (layoutId) return this.root.sharedNodes.get(layoutId);
                }
            },
            {
                key: "promote",
                value: function promote() {
                    var _ref = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, needsReset = _ref.needsReset, transition = _ref.transition, preserveFollowOpacity = _ref.preserveFollowOpacity;
                    var stack = this.getStack();
                    if (stack) stack.promote(this, preserveFollowOpacity);
                    if (needsReset) {
                        this.projectionDelta = undefined;
                        this.needsReset = true;
                    }
                    if (transition) this.setOptions({
                        transition: transition
                    });
                }
            },
            {
                key: "relegate",
                value: function relegate() {
                    var stack = this.getStack();
                    if (stack) {
                        return stack.relegate(this);
                    } else {
                        return false;
                    }
                }
            },
            {
                key: "resetSkewAndRotation",
                value: function resetSkewAndRotation() {
                    var visualElement = this.options.visualElement;
                    if (!visualElement) return;
                    // If there's no detected skew or rotation values, we can early return without a forced render.
                    var hasDistortingTransform = false;
                    /**
             * An unrolled check for rotation values. Most elements don't have any rotation and
             * skipping the nested loop and new object creation is 50% faster.
             */ var latestValues = visualElement.latestValues;
                    if (latestValues.z || latestValues.rotate || latestValues.rotateX || latestValues.rotateY || latestValues.rotateZ || latestValues.skewX || latestValues.skewY) {
                        hasDistortingTransform = true;
                    }
                    // If there's no distorting values, we don't need to do any more.
                    if (!hasDistortingTransform) return;
                    var resetValues = {};
                    if (latestValues.z) {
                        resetDistortingTransform("z", visualElement, resetValues, this.animationValues);
                    }
                    // Check the skew and rotate value of all axes and reset to 0
                    for(var i = 0; i < transformAxes.length; i++){
                        resetDistortingTransform("rotate".concat(transformAxes[i]), visualElement, resetValues, this.animationValues);
                        resetDistortingTransform("skew".concat(transformAxes[i]), visualElement, resetValues, this.animationValues);
                    }
                    // Force a render of this element to apply the transform with all skews and rotations
                    // set to 0.
                    visualElement.render();
                    // Put back all the values we reset
                    for(var key in resetValues){
                        visualElement.setStaticValue(key, resetValues[key]);
                        if (this.animationValues) {
                            this.animationValues[key] = resetValues[key];
                        }
                    }
                    // Schedule a render for the next frame. This ensures we won't visually
                    // see the element with the reset rotate value applied.
                    visualElement.scheduleRender();
                }
            },
            {
                key: "applyProjectionStyles",
                value: function applyProjectionStyles(targetStyle, styleProp) {
                    if (!this.instance || this.isSVG) return;
                    if (!this.isVisible) {
                        targetStyle.visibility = "hidden";
                        return;
                    }
                    var transformTemplate = this.getTransformTemplate();
                    if (this.needsReset) {
                        this.needsReset = false;
                        targetStyle.visibility = "";
                        targetStyle.opacity = "";
                        targetStyle.pointerEvents = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$utils$2f$resolve$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveMotionValue"])(styleProp === null || styleProp === void 0 ? void 0 : styleProp.pointerEvents) || "";
                        targetStyle.transform = transformTemplate ? transformTemplate(this.latestValues, "") : "none";
                        return;
                    }
                    var lead = this.getLead();
                    if (!this.projectionDelta || !this.layout || !lead.target) {
                        if (this.options.layoutId) {
                            targetStyle.opacity = this.latestValues.opacity !== undefined ? this.latestValues.opacity : 1;
                            targetStyle.pointerEvents = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$utils$2f$resolve$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveMotionValue"])(styleProp === null || styleProp === void 0 ? void 0 : styleProp.pointerEvents) || "";
                        }
                        if (this.hasProjected && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$utils$2f$has$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hasTransform"])(this.latestValues)) {
                            targetStyle.transform = transformTemplate ? transformTemplate({}, "") : "none";
                            this.hasProjected = false;
                        }
                        return;
                    }
                    targetStyle.visibility = "";
                    var valuesToRender = lead.animationValues || lead.latestValues;
                    this.applyTransformsToTarget();
                    var transform = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$styles$2f$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildProjectionTransform"])(this.projectionDeltaWithTransform, this.treeScale, valuesToRender);
                    if (transformTemplate) {
                        transform = transformTemplate(valuesToRender, transform);
                    }
                    targetStyle.transform = transform;
                    var _this_projectionDelta = this.projectionDelta, x = _this_projectionDelta.x, y = _this_projectionDelta.y;
                    targetStyle.transformOrigin = "".concat(x.origin * 100, "% ").concat(y.origin * 100, "% 0");
                    if (lead.animationValues) {
                        var _ref, _valuesToRender_opacity;
                        /**
                 * If the lead component is animating, assign this either the entering/leaving
                 * opacity
                 */ targetStyle.opacity = lead === this ? (_ref = (_valuesToRender_opacity = valuesToRender.opacity) !== null && _valuesToRender_opacity !== void 0 ? _valuesToRender_opacity : this.latestValues.opacity) !== null && _ref !== void 0 ? _ref : 1 : this.preserveOpacity ? this.latestValues.opacity : valuesToRender.opacityExit;
                    } else {
                        /**
                 * Or we're not animating at all, set the lead component to its layout
                 * opacity and other components to hidden.
                 */ targetStyle.opacity = lead === this ? valuesToRender.opacity !== undefined ? valuesToRender.opacity : "" : valuesToRender.opacityExit !== undefined ? valuesToRender.opacityExit : 0;
                    }
                    /**
             * Apply scale correction
             */ for(var key in __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$styles$2f$scale$2d$correction$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scaleCorrectors"]){
                        if (valuesToRender[key] === undefined) continue;
                        var _scaleCorrectors_key = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$styles$2f$scale$2d$correction$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scaleCorrectors"][key], correct = _scaleCorrectors_key.correct, applyTo = _scaleCorrectors_key.applyTo, isCSSVariable = _scaleCorrectors_key.isCSSVariable;
                        /**
                 * Only apply scale correction to the value if we have an
                 * active projection transform. Otherwise these values become
                 * vulnerable to distortion if the element changes size without
                 * a corresponding layout animation.
                 */ var corrected = transform === "none" ? valuesToRender[key] : correct(valuesToRender[key], lead);
                        if (applyTo) {
                            var num = applyTo.length;
                            for(var i = 0; i < num; i++){
                                targetStyle[applyTo[i]] = corrected;
                            }
                        } else {
                            // If this is a CSS variable, set it directly on the instance.
                            // Replacing this function from creating styles to setting them
                            // would be a good place to remove per frame object creation
                            if (isCSSVariable) {
                                this.options.visualElement.renderState.vars[key] = corrected;
                            } else {
                                targetStyle[key] = corrected;
                            }
                        }
                    }
                    /**
             * Disable pointer events on follow components. This is to ensure
             * that if a follow component covers a lead component it doesn't block
             * pointer events on the lead.
             */ if (this.options.layoutId) {
                        targetStyle.pointerEvents = lead === this ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$utils$2f$resolve$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveMotionValue"])(styleProp === null || styleProp === void 0 ? void 0 : styleProp.pointerEvents) || "" : "none";
                    }
                }
            },
            {
                key: "clearSnapshot",
                value: function clearSnapshot() {
                    this.resumeFrom = this.snapshot = undefined;
                }
            },
            {
                // Only run on root
                key: "resetTree",
                value: function resetTree() {
                    this.root.nodes.forEach(function(node) {
                        var _node_currentAnimation;
                        return (_node_currentAnimation = node.currentAnimation) === null || _node_currentAnimation === void 0 ? void 0 : _node_currentAnimation.stop();
                    });
                    this.root.nodes.forEach(clearMeasurements);
                    this.root.sharedNodes.clear();
                }
            }
        ]);
        return ProjectionNode;
    }();
}
function updateLayout(node) {
    node.updateLayout();
}
function notifyLayoutUpdate(node) {
    var _node_resumeFrom;
    var snapshot = ((_node_resumeFrom = node.resumeFrom) === null || _node_resumeFrom === void 0 ? void 0 : _node_resumeFrom.snapshot) || node.snapshot;
    if (node.isLead() && node.layout && snapshot && node.hasListeners("didUpdate")) {
        var _node_layout = node.layout, layout = _node_layout.layoutBox, measuredLayout = _node_layout.measuredBox;
        var animationType = node.options.animationType;
        var isShared = snapshot.source !== node.layout.source;
        // TODO Maybe we want to also resize the layout snapshot so we don't trigger
        // animations for instance if layout="size" and an element has only changed position
        if (animationType === "size") {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$utils$2f$each$2d$axis$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["eachAxis"])(function(axis) {
                var axisSnapshot = isShared ? snapshot.measuredBox[axis] : snapshot.layoutBox[axis];
                var length = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$geometry$2f$delta$2d$calc$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calcLength"])(axisSnapshot);
                axisSnapshot.min = layout[axis].min;
                axisSnapshot.max = axisSnapshot.min + length;
            });
        } else if (shouldAnimatePositionOnly(animationType, snapshot.layoutBox, layout)) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$utils$2f$each$2d$axis$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["eachAxis"])(function(axis) {
                var axisSnapshot = isShared ? snapshot.measuredBox[axis] : snapshot.layoutBox[axis];
                var length = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$geometry$2f$delta$2d$calc$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calcLength"])(layout[axis]);
                axisSnapshot.max = axisSnapshot.min + length;
                /**
                 * Ensure relative target gets resized and rerendererd
                 */ if (node.relativeTarget && !node.currentAnimation) {
                    node.isProjectionDirty = true;
                    node.relativeTarget[axis].max = node.relativeTarget[axis].min + length;
                }
            });
        }
        var layoutDelta = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$geometry$2f$models$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createDelta"])();
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$geometry$2f$delta$2d$calc$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calcBoxDelta"])(layoutDelta, layout, snapshot.layoutBox);
        var visualDelta = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$geometry$2f$models$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createDelta"])();
        if (isShared) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$geometry$2f$delta$2d$calc$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calcBoxDelta"])(visualDelta, node.applyTransform(measuredLayout, true), snapshot.measuredBox);
        } else {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$geometry$2f$delta$2d$calc$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calcBoxDelta"])(visualDelta, layout, snapshot.layoutBox);
        }
        var hasLayoutChanged = !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$geometry$2f$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isDeltaZero"])(layoutDelta);
        var hasRelativeLayoutChanged = false;
        if (!node.resumeFrom) {
            var relativeParent = node.getClosestProjectingParent();
            /**
             * If the relativeParent is itself resuming from a different element then
             * the relative snapshot is not relavent
             */ if (relativeParent && !relativeParent.resumeFrom) {
                var parentSnapshot = relativeParent.snapshot, parentLayout = relativeParent.layout;
                if (parentSnapshot && parentLayout) {
                    var relativeSnapshot = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$geometry$2f$models$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createBox"])();
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$geometry$2f$delta$2d$calc$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calcRelativePosition"])(relativeSnapshot, snapshot.layoutBox, parentSnapshot.layoutBox);
                    var relativeLayout = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$geometry$2f$models$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createBox"])();
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$geometry$2f$delta$2d$calc$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calcRelativePosition"])(relativeLayout, layout, parentLayout.layoutBox);
                    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$geometry$2f$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["boxEqualsRounded"])(relativeSnapshot, relativeLayout)) {
                        hasRelativeLayoutChanged = true;
                    }
                    if (relativeParent.options.layoutRoot) {
                        node.relativeTarget = relativeLayout;
                        node.relativeTargetOrigin = relativeSnapshot;
                        node.relativeParent = relativeParent;
                    }
                }
            }
        }
        node.notifyListeners("didUpdate", {
            layout: layout,
            snapshot: snapshot,
            delta: visualDelta,
            layoutDelta: layoutDelta,
            hasLayoutChanged: hasLayoutChanged,
            hasRelativeLayoutChanged: hasRelativeLayoutChanged
        });
    } else if (node.isLead()) {
        var onExitComplete = node.options.onExitComplete;
        onExitComplete && onExitComplete();
    }
    /**
     * Clearing transition
     * TODO: Investigate why this transition is being passed in as {type: false } from Framer
     * and why we need it at all
     */ node.options.transition = undefined;
}
function propagateDirtyNodes(node) {
    /**
     * Increase debug counter for nodes encountered this frame
     */ if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$stats$2f$buffer$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["statsBuffer"].value) {
        metrics.nodes++;
    }
    if (!node.parent) return;
    /**
     * If this node isn't projecting, propagate isProjectionDirty. It will have
     * no performance impact but it will allow the next child that *is* projecting
     * but *isn't* dirty to just check its parent to see if *any* ancestor needs
     * correcting.
     */ if (!node.isProjecting()) {
        node.isProjectionDirty = node.parent.isProjectionDirty;
    }
    /**
     * Propagate isSharedProjectionDirty and isTransformDirty
     * throughout the whole tree. A future revision can take another look at
     * this but for safety we still recalcualte shared nodes.
     */ node.isSharedProjectionDirty || (node.isSharedProjectionDirty = Boolean(node.isProjectionDirty || node.parent.isProjectionDirty || node.parent.isSharedProjectionDirty));
    node.isTransformDirty || (node.isTransformDirty = node.parent.isTransformDirty);
}
function cleanDirtyNodes(node) {
    node.isProjectionDirty = node.isSharedProjectionDirty = node.isTransformDirty = false;
}
function clearSnapshot(node) {
    node.clearSnapshot();
}
function clearMeasurements(node) {
    node.clearMeasurements();
}
function clearIsLayoutDirty(node) {
    node.isLayoutDirty = false;
}
function resetTransformStyle(node) {
    var visualElement = node.options.visualElement;
    if (visualElement && visualElement.getProps().onBeforeLayoutMeasure) {
        visualElement.notify("BeforeLayoutMeasure");
    }
    node.resetTransform();
}
function finishAnimation(node) {
    node.finishAnimation();
    node.targetDelta = node.relativeTarget = node.target = undefined;
    node.isProjectionDirty = true;
}
function resolveTargetDelta(node) {
    node.resolveTargetDelta();
}
function calcProjection(node) {
    node.calcProjection();
}
function resetSkewAndRotation(node) {
    node.resetSkewAndRotation();
}
function removeLeadSnapshots(stack) {
    stack.removeLeadSnapshot();
}
function mixAxisDelta(output, delta, p) {
    output.translate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$mix$2f$number$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mixNumber"])(delta.translate, 0, p);
    output.scale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$mix$2f$number$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mixNumber"])(delta.scale, 1, p);
    output.origin = delta.origin;
    output.originPoint = delta.originPoint;
}
function mixAxis(output, from, to, p) {
    output.min = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$mix$2f$number$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mixNumber"])(from.min, to.min, p);
    output.max = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$mix$2f$number$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mixNumber"])(from.max, to.max, p);
}
function mixBox(output, from, to, p) {
    mixAxis(output.x, from.x, to.x, p);
    mixAxis(output.y, from.y, to.y, p);
}
function hasOpacityCrossfade(node) {
    return node.animationValues && node.animationValues.opacityExit !== undefined;
}
var defaultLayoutTransition = {
    duration: 0.45,
    ease: [
        0.4,
        0,
        0.1,
        1
    ]
};
var userAgentContains = function(string) {
    return typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(string);
};
/**
 * Measured bounding boxes must be rounded in Safari and
 * left untouched in Chrome, otherwise non-integer layouts within scaled-up elements
 * can appear to jump.
 */ var roundPoint = userAgentContains("applewebkit/") && !userAgentContains("chrome/") ? Math.round : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$29$2e$2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$noop$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["noop"];
function roundAxis(axis) {
    // Round to the nearest .5 pixels to support subpixel layouts
    axis.min = roundPoint(axis.min);
    axis.max = roundPoint(axis.max);
}
function roundBox(box) {
    roundAxis(box.x);
    roundAxis(box.y);
}
function shouldAnimatePositionOnly(animationType, snapshot, layout) {
    return animationType === "position" || animationType === "preserve-aspect" && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$geometry$2f$delta$2d$calc$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNear"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$geometry$2f$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["aspectRatio"])(snapshot), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$geometry$2f$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["aspectRatio"])(layout), 0.2);
}
function checkNodeWasScrollRoot(node) {
    var _node_scroll;
    return node !== node.root && ((_node_scroll = node.scroll) === null || _node_scroll === void 0 ? void 0 : _node_scroll.wasRoot);
}
;
 //# sourceMappingURL=create-projection-node.mjs.map
}),
"[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/projection/node/DocumentProjectionNode.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DocumentProjectionNode",
    ()=>DocumentProjectionNode
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$events$2f$add$2d$dom$2d$event$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/events/add-dom-event.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$node$2f$create$2d$projection$2d$node$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/projection/node/create-projection-node.mjs [app-client] (ecmascript)");
;
;
var DocumentProjectionNode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$node$2f$create$2d$projection$2d$node$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createProjectionNode"])({
    attachResizeListener: function(ref, notify) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$events$2f$add$2d$dom$2d$event$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addDomEvent"])(ref, "resize", notify);
    },
    measureScroll: function() {
        var _document_body, _document_body1;
        return {
            x: document.documentElement.scrollLeft || ((_document_body = document.body) === null || _document_body === void 0 ? void 0 : _document_body.scrollLeft) || 0,
            y: document.documentElement.scrollTop || ((_document_body1 = document.body) === null || _document_body1 === void 0 ? void 0 : _document_body1.scrollTop) || 0
        };
    },
    checkIsScrollRoot: function() {
        return true;
    }
});
;
 //# sourceMappingURL=DocumentProjectionNode.mjs.map
}),
"[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/projection/node/HTMLProjectionNode.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HTMLProjectionNode",
    ()=>HTMLProjectionNode,
    "rootProjectionNode",
    ()=>rootProjectionNode
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$node$2f$create$2d$projection$2d$node$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/projection/node/create-projection-node.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$node$2f$DocumentProjectionNode$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/projection/node/DocumentProjectionNode.mjs [app-client] (ecmascript)");
;
;
var rootProjectionNode = {
    current: undefined
};
var HTMLProjectionNode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$node$2f$create$2d$projection$2d$node$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createProjectionNode"])({
    measureScroll: function(instance) {
        return {
            x: instance.scrollLeft,
            y: instance.scrollTop
        };
    },
    defaultParent: function() {
        if (!rootProjectionNode.current) {
            var documentNode = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$node$2f$DocumentProjectionNode$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DocumentProjectionNode"]({});
            documentNode.mount(window);
            documentNode.setOptions({
                layoutScroll: true
            });
            rootProjectionNode.current = documentNode;
        }
        return rootProjectionNode.current;
    },
    resetTransform: function(instance, value) {
        instance.style.transform = value !== undefined ? value : "none";
    },
    checkIsScrollRoot: function(instance) {
        return Boolean(window.getComputedStyle(instance).position === "fixed");
    }
});
;
 //# sourceMappingURL=HTMLProjectionNode.mjs.map
}),
"[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/gestures/utils/setup.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "setupGesture",
    ()=>setupGesture
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_object_spread.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_object_spread_props.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$resolve$2d$elements$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/utils/resolve-elements.mjs [app-client] (ecmascript)");
;
;
;
function setupGesture(elementOrSelector, options) {
    var elements = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$resolve$2d$elements$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveElements"])(elementOrSelector);
    var gestureAbortController = new AbortController();
    var eventOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({
        passive: true
    }, options), {
        signal: gestureAbortController.signal
    });
    var cancel = function() {
        return gestureAbortController.abort();
    };
    return [
        elements,
        eventOptions,
        cancel
    ];
}
;
 //# sourceMappingURL=setup.mjs.map
}),
"[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/gestures/hover.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "hover",
    ()=>hover
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_sliced_to_array.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$gestures$2f$drag$2f$state$2f$is$2d$active$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/gestures/drag/state/is-active.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$gestures$2f$utils$2f$setup$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/gestures/utils/setup.mjs [app-client] (ecmascript)");
;
;
;
function isValidHover(event) {
    return !(event.pointerType === "touch" || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$gestures$2f$drag$2f$state$2f$is$2d$active$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isDragActive"])());
}
/**
 * Create a hover gesture. hover() is different to .addEventListener("pointerenter")
 * in that it has an easier syntax, filters out polyfilled touch events, interoperates
 * with drag gestures, and automatically removes the "pointerennd" event listener when the hover ends.
 *
 * @public
 */ function hover(elementOrSelector, onHoverStart) {
    var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    var _setupGesture = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$gestures$2f$utils$2f$setup$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setupGesture"])(elementOrSelector, options), 3), elements = _setupGesture[0], eventOptions = _setupGesture[1], cancel = _setupGesture[2];
    elements.forEach(function(element) {
        var isPressed = false;
        var deferredHoverEnd = false;
        var hoverEndCallback;
        var removePointerLeave = function() {
            element.removeEventListener("pointerleave", onPointerLeave);
        };
        var endHover = function(event) {
            if (hoverEndCallback) {
                hoverEndCallback(event);
                hoverEndCallback = undefined;
            }
            removePointerLeave();
        };
        var onPointerUp = function(event) {
            isPressed = false;
            window.removeEventListener("pointerup", onPointerUp);
            window.removeEventListener("pointercancel", onPointerUp);
            if (deferredHoverEnd) {
                deferredHoverEnd = false;
                endHover(event);
            }
        };
        var onPointerDown = function() {
            isPressed = true;
            window.addEventListener("pointerup", onPointerUp, eventOptions);
            window.addEventListener("pointercancel", onPointerUp, eventOptions);
        };
        var onPointerLeave = function(leaveEvent) {
            if (leaveEvent.pointerType === "touch") return;
            if (isPressed) {
                deferredHoverEnd = true;
                return;
            }
            endHover(leaveEvent);
        };
        var onPointerEnter = function(enterEvent) {
            if (!isValidHover(enterEvent)) return;
            deferredHoverEnd = false;
            var onHoverEnd = onHoverStart(element, enterEvent);
            if (typeof onHoverEnd !== "function") return;
            hoverEndCallback = onHoverEnd;
            element.addEventListener("pointerleave", onPointerLeave, eventOptions);
        };
        element.addEventListener("pointerenter", onPointerEnter, eventOptions);
        element.addEventListener("pointerdown", onPointerDown, eventOptions);
    });
    return cancel;
}
;
 //# sourceMappingURL=hover.mjs.map
}),
"[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/utils/is-html-element.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isHTMLElement",
    ()=>isHTMLElement
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$29$2e$2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$is$2d$object$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-utils@12.29.2/node_modules/motion-utils/dist/es/is-object.mjs [app-client] (ecmascript)");
;
/**
 * Checks if an element is an HTML element in a way
 * that works across iframes
 */ function isHTMLElement(element) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$29$2e$2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$is$2d$object$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isObject"])(element) && "offsetHeight" in element;
}
;
 //# sourceMappingURL=is-html-element.mjs.map
}),
"[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/gestures/utils/is-node-or-child.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isNodeOrChild",
    ()=>isNodeOrChild
]);
/**
 * Recursively traverse up the tree to check whether the provided child node
 * is the parent or a descendant of it.
 *
 * @param parent - Element to find
 * @param child - Element to test against parent
 */ var isNodeOrChild = function(parent, child) {
    if (!child) {
        return false;
    } else if (parent === child) {
        return true;
    } else {
        return isNodeOrChild(parent, child.parentElement);
    }
};
;
 //# sourceMappingURL=is-node-or-child.mjs.map
}),
"[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/gestures/press/utils/state.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isPressing",
    ()=>isPressing
]);
var isPressing = new WeakSet();
;
 //# sourceMappingURL=state.mjs.map
}),
"[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/gestures/press/utils/keyboard.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "enableKeyboardPress",
    ()=>enableKeyboardPress
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$gestures$2f$press$2f$utils$2f$state$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/gestures/press/utils/state.mjs [app-client] (ecmascript)");
;
/**
 * Filter out events that are not "Enter" keys.
 */ function filterEvents(callback) {
    return function(event) {
        if (event.key !== "Enter") return;
        callback(event);
    };
}
function firePointerEvent(target, type) {
    target.dispatchEvent(new PointerEvent("pointer" + type, {
        isPrimary: true,
        bubbles: true
    }));
}
var enableKeyboardPress = function(focusEvent, eventOptions) {
    var element = focusEvent.currentTarget;
    if (!element) return;
    var handleKeydown = filterEvents(function() {
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$gestures$2f$press$2f$utils$2f$state$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isPressing"].has(element)) return;
        firePointerEvent(element, "down");
        var handleKeyup = filterEvents(function() {
            firePointerEvent(element, "up");
        });
        var handleBlur = function() {
            return firePointerEvent(element, "cancel");
        };
        element.addEventListener("keyup", handleKeyup, eventOptions);
        element.addEventListener("blur", handleBlur, eventOptions);
    });
    element.addEventListener("keydown", handleKeydown, eventOptions);
    /**
     * Add an event listener that fires on blur to remove the keydown events.
     */ element.addEventListener("blur", function() {
        return element.removeEventListener("keydown", handleKeydown);
    }, eventOptions);
};
;
 //# sourceMappingURL=keyboard.mjs.map
}),
"[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/gestures/press/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "press",
    ()=>press
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_sliced_to_array.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$is$2d$html$2d$element$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/utils/is-html-element.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$gestures$2f$drag$2f$state$2f$is$2d$active$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/gestures/drag/state/is-active.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$gestures$2f$utils$2f$is$2d$node$2d$or$2d$child$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/gestures/utils/is-node-or-child.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$gestures$2f$utils$2f$is$2d$primary$2d$pointer$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/gestures/utils/is-primary-pointer.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$gestures$2f$utils$2f$setup$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/gestures/utils/setup.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$gestures$2f$press$2f$utils$2f$is$2d$keyboard$2d$accessible$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/gestures/press/utils/is-keyboard-accessible.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$gestures$2f$press$2f$utils$2f$keyboard$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/gestures/press/utils/keyboard.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$gestures$2f$press$2f$utils$2f$state$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.34.3/node_modules/motion-dom/dist/es/gestures/press/utils/state.mjs [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
/**
 * Filter out events that are not primary pointer events, or are triggering
 * while a Motion gesture is active.
 */ function isValidPressEvent(event) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$gestures$2f$utils$2f$is$2d$primary$2d$pointer$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isPrimaryPointer"])(event) && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$gestures$2f$drag$2f$state$2f$is$2d$active$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isDragActive"])();
}
var claimedPointerDownEvents = new WeakSet();
/**
 * Create a press gesture.
 *
 * Press is different to `"pointerdown"`, `"pointerup"` in that it
 * automatically filters out secondary pointer events like right
 * click and multitouch.
 *
 * It also adds accessibility support for keyboards, where
 * an element with a press gesture will receive focus and
 *  trigger on Enter `"keydown"` and `"keyup"` events.
 *
 * This is different to a browser's `"click"` event, which does
 * respond to keyboards but only for the `"click"` itself, rather
 * than the press start and end/cancel. The element also needs
 * to be focusable for this to work, whereas a press gesture will
 * make an element focusable by default.
 *
 * @public
 */ function press(targetOrSelector, onPressStart) {
    var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    var _setupGesture = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$gestures$2f$utils$2f$setup$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setupGesture"])(targetOrSelector, options), 3), targets = _setupGesture[0], eventOptions = _setupGesture[1], cancelEvents = _setupGesture[2];
    var startPress = function(startEvent) {
        var target = startEvent.currentTarget;
        if (!isValidPressEvent(startEvent)) return;
        if (claimedPointerDownEvents.has(startEvent)) return;
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$gestures$2f$press$2f$utils$2f$state$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isPressing"].add(target);
        if (options.stopPropagation) {
            claimedPointerDownEvents.add(startEvent);
        }
        var onPressEnd = onPressStart(target, startEvent);
        var onPointerEnd = function(endEvent, success) {
            window.removeEventListener("pointerup", onPointerUp);
            window.removeEventListener("pointercancel", onPointerCancel);
            if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$gestures$2f$press$2f$utils$2f$state$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isPressing"].has(target)) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$gestures$2f$press$2f$utils$2f$state$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isPressing"].delete(target);
            }
            if (!isValidPressEvent(endEvent)) {
                return;
            }
            if (typeof onPressEnd === "function") {
                onPressEnd(endEvent, {
                    success: success
                });
            }
        };
        var onPointerUp = function(upEvent) {
            onPointerEnd(upEvent, target === window || target === document || options.useGlobalTarget || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$gestures$2f$utils$2f$is$2d$node$2d$or$2d$child$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNodeOrChild"])(target, upEvent.target));
        };
        var onPointerCancel = function(cancelEvent) {
            onPointerEnd(cancelEvent, false);
        };
        window.addEventListener("pointerup", onPointerUp, eventOptions);
        window.addEventListener("pointercancel", onPointerCancel, eventOptions);
    };
    targets.forEach(function(target) {
        var pointerDownTarget = options.useGlobalTarget ? window : target;
        pointerDownTarget.addEventListener("pointerdown", startPress, eventOptions);
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$is$2d$html$2d$element$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHTMLElement"])(target)) {
            target.addEventListener("focus", function(event) {
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$gestures$2f$press$2f$utils$2f$keyboard$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["enableKeyboardPress"])(event, eventOptions);
            });
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$34$2e$3$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$gestures$2f$press$2f$utils$2f$is$2d$keyboard$2d$accessible$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isElementKeyboardAccessible"])(target) && !target.hasAttribute("tabindex")) {
                target.tabIndex = 0;
            }
        }
    });
    return cancelEvents;
}
;
 //# sourceMappingURL=index.mjs.map
}),
]);

//# sourceMappingURL=bb4c7_motion-dom_dist_es_29e6a04c._.js.map