!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function t(e){return e&&e.__esModule?e.default:e}var n={},r={};Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var o="Expected a function",i=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,f=/^0b[01]+$/i,u=/^0o[0-7]+$/i,c=parseInt,l="object"==typeof e&&e&&e.Object===Object&&e,d="object"==typeof self&&self&&self.Object===Object&&self,s=l||d||Function("return this")(),v=Object.prototype.toString,m=Math.max,b=Math.min,p=function(){return s.Date.now()};function g(e,t,n){var r,i,a,f,u,c,l=0,d=!1,s=!1,v=!0;if("function"!=typeof e)throw new TypeError(o);function g(t){var n=r,o=i;return r=i=void 0,l=t,f=e.apply(o,n)}function O(e){return l=e,u=setTimeout(h,t),d?g(e):f}function S(e){var n=e-c;return void 0===c||n>=t||n<0||s&&e-l>=a}function h(){var e=p();if(S(e))return w(e);u=setTimeout(h,function(e){var n=t-(e-c);return s?b(n,a-(e-l)):n}(e))}function w(e){return u=void 0,v&&r?g(e):(r=i=void 0,f)}function T(){var e=p(),n=S(e);if(r=arguments,i=this,c=e,n){if(void 0===u)return O(c);if(s)return u=setTimeout(h,t),g(c)}return void 0===u&&(u=setTimeout(h,t)),f}return t=j(t)||0,y(n)&&(d=!!n.leading,a=(s="maxWait"in n)?m(j(n.maxWait)||0,t):a,v="trailing"in n?!!n.trailing:v),T.cancel=function(){void 0!==u&&clearTimeout(u),l=0,r=c=i=u=void 0},T.flush=function(){return void 0===u?f:w(p())},T}function y(e){var n=void 0===e?"undefined":t(r)(e);return!!e&&("object"==n||"function"==n)}function j(e){if("number"==typeof e)return e;if(function(e){return"symbol"==(void 0===e?"undefined":t(r)(e))||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==v.call(e)}(e))return NaN;if(y(e)){var n="function"==typeof e.valueOf?e.valueOf():e;e=y(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(i,"");var o=f.test(e);return o||u.test(e)?c(e.slice(2),o?2:8):a.test(e)?NaN:+e}n=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError(o);return y(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),g(e,t,{leading:r,maxWait:t,trailing:i})};var O=document.querySelector(".feedback-form"),S={};!function(){var e=JSON.parse(localStorage.getItem("feedback-form-state"));if(e)for(var t in e)O.elements[t].value=e[t]}();var h=n((function(e){S[e.target.name]=e.target.value;var t=JSON.stringify(S);localStorage.setItem("feedback-form-state",t)}),500),w=n((function(e){e.preventDefault(),console.dir(JSON.parse(localStorage.getItem("feedback-form-state"))),localStorage.removeItem("feedback-form-state"),O.reset()}),500);O.addEventListener("input",h),O.addEventListener("submit",w)}();
//# sourceMappingURL=03-feedback.cf754859.js.map