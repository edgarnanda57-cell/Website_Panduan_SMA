const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/BelajarEfektif-D89lwpG8.js","assets/ImageWithFallback-BCb5tuQs.js","assets/Breadcrumb-BRNF2yH3.js","assets/arrow-right-e2wx9unO.js","assets/lightbulb-Bn3K91Pf.js","assets/target-sjbtHSYI.js","assets/clock-CNAAp5TP.js","assets/users-DkMfq8C4.js","assets/globe-CYUD9HDz.js","assets/HomePage-DevqhnJd.js","assets/sparkles-CcHYS6Pw.js","assets/card-Dlr_yxaj.js","assets/credit-card-CmF4hvUf.js","assets/graduation-cap-4O-r0IGI.js","assets/briefcase-uLIkr8UO.js","assets/file-text-BIM0IZiX.js","assets/KTPSIMPage-DUhLghIY.js","assets/PanduanKTPPage-g_swO4Fi.js","assets/circle-check-9l4KPKEL.js","assets/map-pin-DehtPK8-.js","assets/PanduanSIMPage-BxbVPWjl.js","assets/circle-alert-C1vuzYXK.js","assets/DataJurusanKampus-DDdXc-e-.js","assets/award-n7E_y6-7.js","assets/chevron-down-CtWb7ExU.js","assets/search-CR-AZLD_.js","assets/PanduanKesehatanMental-Dak8lyjD.js","assets/HomePage1-x1UDpyD6.js","assets/careerData-BXDOeTqB.js","assets/CareerDetail-BOaXd9zr.js","assets/arrow-left-p5i9BZu0.js","assets/JurusanList-ClEdAquU.js","assets/jurusan-CX0D3mP1.js","assets/JurusanDetail-DeCyAaSn.js"])))=>i.map(i=>d[i]);
function ih(o,l){for(var i=0;i<l.length;i++){const u=l[i];if(typeof u!="string"&&!Array.isArray(u)){for(const c in u)if(c!=="default"&&!(c in o)){const f=Object.getOwnPropertyDescriptor(u,c);f&&Object.defineProperty(o,c,f.get?f:{enumerable:!0,get:()=>u[c]})}}}return Object.freeze(Object.defineProperty(o,Symbol.toStringTag,{value:"Module"}))}(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))u(c);new MutationObserver(c=>{for(const f of c)if(f.type==="childList")for(const p of f.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&u(p)}).observe(document,{childList:!0,subtree:!0});function i(c){const f={};return c.integrity&&(f.integrity=c.integrity),c.referrerPolicy&&(f.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?f.credentials="include":c.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function u(c){if(c.ep)return;c.ep=!0;const f=i(c);fetch(c.href,f)}})();function _d(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var Ml={exports:{}},ro={},Dl={exports:{}},ue={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gc;function lh(){if(Gc)return ue;Gc=1;var o=Symbol.for("react.element"),l=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),u=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),f=Symbol.for("react.provider"),p=Symbol.for("react.context"),y=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),v=Symbol.for("react.memo"),w=Symbol.for("react.lazy"),S=Symbol.iterator;function O(x){return x===null||typeof x!="object"?null:(x=S&&x[S]||x["@@iterator"],typeof x=="function"?x:null)}var F={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},D=Object.assign,_={};function R(x,T,J){this.props=x,this.context=T,this.refs=_,this.updater=J||F}R.prototype.isReactComponent={},R.prototype.setState=function(x,T){if(typeof x!="object"&&typeof x!="function"&&x!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,x,T,"setState")},R.prototype.forceUpdate=function(x){this.updater.enqueueForceUpdate(this,x,"forceUpdate")};function I(){}I.prototype=R.prototype;function U(x,T,J){this.props=x,this.context=T,this.refs=_,this.updater=J||F}var K=U.prototype=new I;K.constructor=U,D(K,R.prototype),K.isPureReactComponent=!0;var ae=Array.isArray,le=Object.prototype.hasOwnProperty,de={current:null},pe={key:!0,ref:!0,__self:!0,__source:!0};function V(x,T,J){var te,ce={},fe=null,oe=null;if(T!=null)for(te in T.ref!==void 0&&(oe=T.ref),T.key!==void 0&&(fe=""+T.key),T)le.call(T,te)&&!pe.hasOwnProperty(te)&&(ce[te]=T[te]);var me=arguments.length-2;if(me===1)ce.children=J;else if(1<me){for(var be=Array(me),Be=0;Be<me;Be++)be[Be]=arguments[Be+2];ce.children=be}if(x&&x.defaultProps)for(te in me=x.defaultProps,me)ce[te]===void 0&&(ce[te]=me[te]);return{$$typeof:o,type:x,key:fe,ref:oe,props:ce,_owner:de.current}}function ie(x,T){return{$$typeof:o,type:x.type,key:T,ref:x.ref,props:x.props,_owner:x._owner}}function Me(x){return typeof x=="object"&&x!==null&&x.$$typeof===o}function un(x){var T={"=":"=0",":":"=2"};return"$"+x.replace(/[=:]/g,function(J){return T[J]})}var Je=/\/+/g;function qe(x,T){return typeof x=="object"&&x!==null&&x.key!=null?un(""+x.key):T.toString(36)}function Ze(x,T,J,te,ce){var fe=typeof x;(fe==="undefined"||fe==="boolean")&&(x=null);var oe=!1;if(x===null)oe=!0;else switch(fe){case"string":case"number":oe=!0;break;case"object":switch(x.$$typeof){case o:case l:oe=!0}}if(oe)return oe=x,ce=ce(oe),x=te===""?"."+qe(oe,0):te,ae(ce)?(J="",x!=null&&(J=x.replace(Je,"$&/")+"/"),Ze(ce,T,J,"",function(Be){return Be})):ce!=null&&(Me(ce)&&(ce=ie(ce,J+(!ce.key||oe&&oe.key===ce.key?"":(""+ce.key).replace(Je,"$&/")+"/")+x)),T.push(ce)),1;if(oe=0,te=te===""?".":te+":",ae(x))for(var me=0;me<x.length;me++){fe=x[me];var be=te+qe(fe,me);oe+=Ze(fe,T,J,be,ce)}else if(be=O(x),typeof be=="function")for(x=be.call(x),me=0;!(fe=x.next()).done;)fe=fe.value,be=te+qe(fe,me++),oe+=Ze(fe,T,J,be,ce);else if(fe==="object")throw T=String(x),Error("Objects are not valid as a React child (found: "+(T==="[object Object]"?"object with keys {"+Object.keys(x).join(", ")+"}":T)+"). If you meant to render a collection of children, use an array instead.");return oe}function He(x,T,J){if(x==null)return x;var te=[],ce=0;return Ze(x,te,"","",function(fe){return T.call(J,fe,ce++)}),te}function Ee(x){if(x._status===-1){var T=x._result;T=T(),T.then(function(J){(x._status===0||x._status===-1)&&(x._status=1,x._result=J)},function(J){(x._status===0||x._status===-1)&&(x._status=2,x._result=J)}),x._status===-1&&(x._status=0,x._result=T)}if(x._status===1)return x._result.default;throw x._result}var ye={current:null},z={transition:null},Z={ReactCurrentDispatcher:ye,ReactCurrentBatchConfig:z,ReactCurrentOwner:de};function $(){throw Error("act(...) is not supported in production builds of React.")}return ue.Children={map:He,forEach:function(x,T,J){He(x,function(){T.apply(this,arguments)},J)},count:function(x){var T=0;return He(x,function(){T++}),T},toArray:function(x){return He(x,function(T){return T})||[]},only:function(x){if(!Me(x))throw Error("React.Children.only expected to receive a single React element child.");return x}},ue.Component=R,ue.Fragment=i,ue.Profiler=c,ue.PureComponent=U,ue.StrictMode=u,ue.Suspense=m,ue.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Z,ue.act=$,ue.cloneElement=function(x,T,J){if(x==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+x+".");var te=D({},x.props),ce=x.key,fe=x.ref,oe=x._owner;if(T!=null){if(T.ref!==void 0&&(fe=T.ref,oe=de.current),T.key!==void 0&&(ce=""+T.key),x.type&&x.type.defaultProps)var me=x.type.defaultProps;for(be in T)le.call(T,be)&&!pe.hasOwnProperty(be)&&(te[be]=T[be]===void 0&&me!==void 0?me[be]:T[be])}var be=arguments.length-2;if(be===1)te.children=J;else if(1<be){me=Array(be);for(var Be=0;Be<be;Be++)me[Be]=arguments[Be+2];te.children=me}return{$$typeof:o,type:x.type,key:ce,ref:fe,props:te,_owner:oe}},ue.createContext=function(x){return x={$$typeof:p,_currentValue:x,_currentValue2:x,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},x.Provider={$$typeof:f,_context:x},x.Consumer=x},ue.createElement=V,ue.createFactory=function(x){var T=V.bind(null,x);return T.type=x,T},ue.createRef=function(){return{current:null}},ue.forwardRef=function(x){return{$$typeof:y,render:x}},ue.isValidElement=Me,ue.lazy=function(x){return{$$typeof:w,_payload:{_status:-1,_result:x},_init:Ee}},ue.memo=function(x,T){return{$$typeof:v,type:x,compare:T===void 0?null:T}},ue.startTransition=function(x){var T=z.transition;z.transition={};try{x()}finally{z.transition=T}},ue.unstable_act=$,ue.useCallback=function(x,T){return ye.current.useCallback(x,T)},ue.useContext=function(x){return ye.current.useContext(x)},ue.useDebugValue=function(){},ue.useDeferredValue=function(x){return ye.current.useDeferredValue(x)},ue.useEffect=function(x,T){return ye.current.useEffect(x,T)},ue.useId=function(){return ye.current.useId()},ue.useImperativeHandle=function(x,T,J){return ye.current.useImperativeHandle(x,T,J)},ue.useInsertionEffect=function(x,T){return ye.current.useInsertionEffect(x,T)},ue.useLayoutEffect=function(x,T){return ye.current.useLayoutEffect(x,T)},ue.useMemo=function(x,T){return ye.current.useMemo(x,T)},ue.useReducer=function(x,T,J){return ye.current.useReducer(x,T,J)},ue.useRef=function(x){return ye.current.useRef(x)},ue.useState=function(x){return ye.current.useState(x)},ue.useSyncExternalStore=function(x,T,J){return ye.current.useSyncExternalStore(x,T,J)},ue.useTransition=function(){return ye.current.useTransition()},ue.version="18.3.1",ue}var Yc;function Gl(){return Yc||(Yc=1,Dl.exports=lh()),Dl.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xc;function sh(){if(Xc)return ro;Xc=1;var o=Gl(),l=Symbol.for("react.element"),i=Symbol.for("react.fragment"),u=Object.prototype.hasOwnProperty,c=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,f={key:!0,ref:!0,__self:!0,__source:!0};function p(y,m,v){var w,S={},O=null,F=null;v!==void 0&&(O=""+v),m.key!==void 0&&(O=""+m.key),m.ref!==void 0&&(F=m.ref);for(w in m)u.call(m,w)&&!f.hasOwnProperty(w)&&(S[w]=m[w]);if(y&&y.defaultProps)for(w in m=y.defaultProps,m)S[w]===void 0&&(S[w]=m[w]);return{$$typeof:l,type:y,key:O,ref:F,props:S,_owner:c.current}}return ro.Fragment=i,ro.jsx=p,ro.jsxs=p,ro}var Jc;function uh(){return Jc||(Jc=1,Ml.exports=sh()),Ml.exports}var N=uh(),E=Gl();const ve=_d(E),ch=ih({__proto__:null,default:ve},[E]);var wa={},Al={exports:{}},sn={},Fl={exports:{}},Il={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zc;function dh(){return Zc||(Zc=1,(function(o){function l(z,Z){var $=z.length;z.push(Z);e:for(;0<$;){var x=$-1>>>1,T=z[x];if(0<c(T,Z))z[x]=Z,z[$]=T,$=x;else break e}}function i(z){return z.length===0?null:z[0]}function u(z){if(z.length===0)return null;var Z=z[0],$=z.pop();if($!==Z){z[0]=$;e:for(var x=0,T=z.length,J=T>>>1;x<J;){var te=2*(x+1)-1,ce=z[te],fe=te+1,oe=z[fe];if(0>c(ce,$))fe<T&&0>c(oe,ce)?(z[x]=oe,z[fe]=$,x=fe):(z[x]=ce,z[te]=$,x=te);else if(fe<T&&0>c(oe,$))z[x]=oe,z[fe]=$,x=fe;else break e}}return Z}function c(z,Z){var $=z.sortIndex-Z.sortIndex;return $!==0?$:z.id-Z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var f=performance;o.unstable_now=function(){return f.now()}}else{var p=Date,y=p.now();o.unstable_now=function(){return p.now()-y}}var m=[],v=[],w=1,S=null,O=3,F=!1,D=!1,_=!1,R=typeof setTimeout=="function"?setTimeout:null,I=typeof clearTimeout=="function"?clearTimeout:null,U=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function K(z){for(var Z=i(v);Z!==null;){if(Z.callback===null)u(v);else if(Z.startTime<=z)u(v),Z.sortIndex=Z.expirationTime,l(m,Z);else break;Z=i(v)}}function ae(z){if(_=!1,K(z),!D)if(i(m)!==null)D=!0,Ee(le);else{var Z=i(v);Z!==null&&ye(ae,Z.startTime-z)}}function le(z,Z){D=!1,_&&(_=!1,I(V),V=-1),F=!0;var $=O;try{for(K(Z),S=i(m);S!==null&&(!(S.expirationTime>Z)||z&&!un());){var x=S.callback;if(typeof x=="function"){S.callback=null,O=S.priorityLevel;var T=x(S.expirationTime<=Z);Z=o.unstable_now(),typeof T=="function"?S.callback=T:S===i(m)&&u(m),K(Z)}else u(m);S=i(m)}if(S!==null)var J=!0;else{var te=i(v);te!==null&&ye(ae,te.startTime-Z),J=!1}return J}finally{S=null,O=$,F=!1}}var de=!1,pe=null,V=-1,ie=5,Me=-1;function un(){return!(o.unstable_now()-Me<ie)}function Je(){if(pe!==null){var z=o.unstable_now();Me=z;var Z=!0;try{Z=pe(!0,z)}finally{Z?qe():(de=!1,pe=null)}}else de=!1}var qe;if(typeof U=="function")qe=function(){U(Je)};else if(typeof MessageChannel<"u"){var Ze=new MessageChannel,He=Ze.port2;Ze.port1.onmessage=Je,qe=function(){He.postMessage(null)}}else qe=function(){R(Je,0)};function Ee(z){pe=z,de||(de=!0,qe())}function ye(z,Z){V=R(function(){z(o.unstable_now())},Z)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(z){z.callback=null},o.unstable_continueExecution=function(){D||F||(D=!0,Ee(le))},o.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ie=0<z?Math.floor(1e3/z):5},o.unstable_getCurrentPriorityLevel=function(){return O},o.unstable_getFirstCallbackNode=function(){return i(m)},o.unstable_next=function(z){switch(O){case 1:case 2:case 3:var Z=3;break;default:Z=O}var $=O;O=Z;try{return z()}finally{O=$}},o.unstable_pauseExecution=function(){},o.unstable_requestPaint=function(){},o.unstable_runWithPriority=function(z,Z){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var $=O;O=z;try{return Z()}finally{O=$}},o.unstable_scheduleCallback=function(z,Z,$){var x=o.unstable_now();switch(typeof $=="object"&&$!==null?($=$.delay,$=typeof $=="number"&&0<$?x+$:x):$=x,z){case 1:var T=-1;break;case 2:T=250;break;case 5:T=1073741823;break;case 4:T=1e4;break;default:T=5e3}return T=$+T,z={id:w++,callback:Z,priorityLevel:z,startTime:$,expirationTime:T,sortIndex:-1},$>x?(z.sortIndex=$,l(v,z),i(m)===null&&z===i(v)&&(_?(I(V),V=-1):_=!0,ye(ae,$-x))):(z.sortIndex=T,l(m,z),D||F||(D=!0,Ee(le))),z},o.unstable_shouldYield=un,o.unstable_wrapCallback=function(z){var Z=O;return function(){var $=O;O=Z;try{return z.apply(this,arguments)}finally{O=$}}}})(Il)),Il}var ed;function fh(){return ed||(ed=1,Fl.exports=dh()),Fl.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nd;function ph(){if(nd)return sn;nd=1;var o=Gl(),l=fh();function i(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var u=new Set,c={};function f(e,n){p(e,n),p(e+"Capture",n)}function p(e,n){for(c[e]=n,e=0;e<n.length;e++)u.add(n[e])}var y=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),m=Object.prototype.hasOwnProperty,v=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,w={},S={};function O(e){return m.call(S,e)?!0:m.call(w,e)?!1:v.test(e)?S[e]=!0:(w[e]=!0,!1)}function F(e,n,t,r){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return r?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function D(e,n,t,r){if(n===null||typeof n>"u"||F(e,n,t,r))return!0;if(r)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function _(e,n,t,r,a,s,d){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=r,this.attributeNamespace=a,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=s,this.removeEmptyString=d}var R={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){R[e]=new _(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];R[n]=new _(n,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){R[e]=new _(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){R[e]=new _(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){R[e]=new _(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){R[e]=new _(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){R[e]=new _(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){R[e]=new _(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){R[e]=new _(e,5,!1,e.toLowerCase(),null,!1,!1)});var I=/[\-:]([a-z])/g;function U(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(I,U);R[n]=new _(n,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(I,U);R[n]=new _(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(I,U);R[n]=new _(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){R[e]=new _(e,1,!1,e.toLowerCase(),null,!1,!1)}),R.xlinkHref=new _("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){R[e]=new _(e,1,!1,e.toLowerCase(),null,!0,!0)});function K(e,n,t,r){var a=R.hasOwnProperty(n)?R[n]:null;(a!==null?a.type!==0:r||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(D(n,t,a,r)&&(t=null),r||a===null?O(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):a.mustUseProperty?e[a.propertyName]=t===null?a.type===3?!1:"":t:(n=a.attributeName,r=a.attributeNamespace,t===null?e.removeAttribute(n):(a=a.type,t=a===3||a===4&&t===!0?"":""+t,r?e.setAttributeNS(r,n,t):e.setAttribute(n,t))))}var ae=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,le=Symbol.for("react.element"),de=Symbol.for("react.portal"),pe=Symbol.for("react.fragment"),V=Symbol.for("react.strict_mode"),ie=Symbol.for("react.profiler"),Me=Symbol.for("react.provider"),un=Symbol.for("react.context"),Je=Symbol.for("react.forward_ref"),qe=Symbol.for("react.suspense"),Ze=Symbol.for("react.suspense_list"),He=Symbol.for("react.memo"),Ee=Symbol.for("react.lazy"),ye=Symbol.for("react.offscreen"),z=Symbol.iterator;function Z(e){return e===null||typeof e!="object"?null:(e=z&&e[z]||e["@@iterator"],typeof e=="function"?e:null)}var $=Object.assign,x;function T(e){if(x===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);x=n&&n[1]||""}return`
`+x+e}var J=!1;function te(e,n){if(!e||J)return"";J=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(C){var r=C}Reflect.construct(e,[],n)}else{try{n.call()}catch(C){r=C}e.call(n.prototype)}else{try{throw Error()}catch(C){r=C}e()}}catch(C){if(C&&r&&typeof C.stack=="string"){for(var a=C.stack.split(`
`),s=r.stack.split(`
`),d=a.length-1,h=s.length-1;1<=d&&0<=h&&a[d]!==s[h];)h--;for(;1<=d&&0<=h;d--,h--)if(a[d]!==s[h]){if(d!==1||h!==1)do if(d--,h--,0>h||a[d]!==s[h]){var g=`
`+a[d].replace(" at new "," at ");return e.displayName&&g.includes("<anonymous>")&&(g=g.replace("<anonymous>",e.displayName)),g}while(1<=d&&0<=h);break}}}finally{J=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?T(e):""}function ce(e){switch(e.tag){case 5:return T(e.type);case 16:return T("Lazy");case 13:return T("Suspense");case 19:return T("SuspenseList");case 0:case 2:case 15:return e=te(e.type,!1),e;case 11:return e=te(e.type.render,!1),e;case 1:return e=te(e.type,!0),e;default:return""}}function fe(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case pe:return"Fragment";case de:return"Portal";case ie:return"Profiler";case V:return"StrictMode";case qe:return"Suspense";case Ze:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case un:return(e.displayName||"Context")+".Consumer";case Me:return(e._context.displayName||"Context")+".Provider";case Je:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case He:return n=e.displayName||null,n!==null?n:fe(e.type)||"Memo";case Ee:n=e._payload,e=e._init;try{return fe(e(n))}catch{}}return null}function oe(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return fe(n);case 8:return n===V?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function me(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function be(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Be(e){var n=be(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),r=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var a=t.get,s=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return a.call(this)},set:function(d){r=""+d,s.call(this,d)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return r},setValue:function(d){r=""+d},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Zn(e){e._valueTracker||(e._valueTracker=Be(e))}function kt(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),r="";return e&&(r=be(e)?e.checked?"true":"false":e.value),e=r,e!==t?(n.setValue(e),!0):!1}function po(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function $a(e,n){var t=n.checked;return $({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function ts(e,n){var t=n.defaultValue==null?"":n.defaultValue,r=n.checked!=null?n.checked:n.defaultChecked;t=me(n.value!=null?n.value:t),e._wrapperState={initialChecked:r,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function rs(e,n){n=n.checked,n!=null&&K(e,"checked",n,!1)}function Va(e,n){rs(e,n);var t=me(n.value),r=n.type;if(t!=null)r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?Ha(e,n.type,t):n.hasOwnProperty("defaultValue")&&Ha(e,n.type,me(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function os(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var r=n.type;if(!(r!=="submit"&&r!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function Ha(e,n,t){(n!=="number"||po(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var yr=Array.isArray;function At(e,n,t,r){if(e=e.options,n){n={};for(var a=0;a<t.length;a++)n["$"+t[a]]=!0;for(t=0;t<e.length;t++)a=n.hasOwnProperty("$"+e[t].value),e[t].selected!==a&&(e[t].selected=a),a&&r&&(e[t].defaultSelected=!0)}else{for(t=""+me(t),n=null,a=0;a<e.length;a++){if(e[a].value===t){e[a].selected=!0,r&&(e[a].defaultSelected=!0);return}n!==null||e[a].disabled||(n=e[a])}n!==null&&(n.selected=!0)}}function Wa(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(i(91));return $({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function as(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(i(92));if(yr(t)){if(1<t.length)throw Error(i(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:me(t)}}function is(e,n){var t=me(n.value),r=me(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),r!=null&&(e.defaultValue=""+r)}function ls(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function ss(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Qa(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?ss(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ho,us=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,r,a){MSApp.execUnsafeLocalFunction(function(){return e(n,t,r,a)})}:e})(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(ho=ho||document.createElement("div"),ho.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=ho.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function br(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var xr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},cf=["Webkit","ms","Moz","O"];Object.keys(xr).forEach(function(e){cf.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),xr[n]=xr[e]})});function cs(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||xr.hasOwnProperty(e)&&xr[e]?(""+n).trim():n+"px"}function ds(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var r=t.indexOf("--")===0,a=cs(t,n[t],r);t==="float"&&(t="cssFloat"),r?e.setProperty(t,a):e[t]=a}}var df=$({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function qa(e,n){if(n){if(df[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(i(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(i(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(i(61))}if(n.style!=null&&typeof n.style!="object")throw Error(i(62))}}function Ka(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ga=null;function Ya(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Xa=null,Ft=null,It=null;function fs(e){if(e=$r(e)){if(typeof Xa!="function")throw Error(i(280));var n=e.stateNode;n&&(n=Ao(n),Xa(e.stateNode,e.type,n))}}function ps(e){Ft?It?It.push(e):It=[e]:Ft=e}function hs(){if(Ft){var e=Ft,n=It;if(It=Ft=null,fs(e),n)for(e=0;e<n.length;e++)fs(n[e])}}function ms(e,n){return e(n)}function gs(){}var Ja=!1;function vs(e,n,t){if(Ja)return e(n,t);Ja=!0;try{return ms(e,n,t)}finally{Ja=!1,(Ft!==null||It!==null)&&(gs(),hs())}}function kr(e,n){var t=e.stateNode;if(t===null)return null;var r=Ao(t);if(r===null)return null;t=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(i(231,n,typeof t));return t}var Za=!1;if(y)try{var wr={};Object.defineProperty(wr,"passive",{get:function(){Za=!0}}),window.addEventListener("test",wr,wr),window.removeEventListener("test",wr,wr)}catch{Za=!1}function ff(e,n,t,r,a,s,d,h,g){var C=Array.prototype.slice.call(arguments,3);try{n.apply(t,C)}catch(j){this.onError(j)}}var Sr=!1,mo=null,go=!1,ei=null,pf={onError:function(e){Sr=!0,mo=e}};function hf(e,n,t,r,a,s,d,h,g){Sr=!1,mo=null,ff.apply(pf,arguments)}function mf(e,n,t,r,a,s,d,h,g){if(hf.apply(this,arguments),Sr){if(Sr){var C=mo;Sr=!1,mo=null}else throw Error(i(198));go||(go=!0,ei=C)}}function wt(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function ys(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function bs(e){if(wt(e)!==e)throw Error(i(188))}function gf(e){var n=e.alternate;if(!n){if(n=wt(e),n===null)throw Error(i(188));return n!==e?null:e}for(var t=e,r=n;;){var a=t.return;if(a===null)break;var s=a.alternate;if(s===null){if(r=a.return,r!==null){t=r;continue}break}if(a.child===s.child){for(s=a.child;s;){if(s===t)return bs(a),e;if(s===r)return bs(a),n;s=s.sibling}throw Error(i(188))}if(t.return!==r.return)t=a,r=s;else{for(var d=!1,h=a.child;h;){if(h===t){d=!0,t=a,r=s;break}if(h===r){d=!0,r=a,t=s;break}h=h.sibling}if(!d){for(h=s.child;h;){if(h===t){d=!0,t=s,r=a;break}if(h===r){d=!0,r=s,t=a;break}h=h.sibling}if(!d)throw Error(i(189))}}if(t.alternate!==r)throw Error(i(190))}if(t.tag!==3)throw Error(i(188));return t.stateNode.current===t?e:n}function xs(e){return e=gf(e),e!==null?ks(e):null}function ks(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=ks(e);if(n!==null)return n;e=e.sibling}return null}var ws=l.unstable_scheduleCallback,Ss=l.unstable_cancelCallback,vf=l.unstable_shouldYield,yf=l.unstable_requestPaint,Te=l.unstable_now,bf=l.unstable_getCurrentPriorityLevel,ni=l.unstable_ImmediatePriority,Ps=l.unstable_UserBlockingPriority,vo=l.unstable_NormalPriority,xf=l.unstable_LowPriority,Es=l.unstable_IdlePriority,yo=null,jn=null;function kf(e){if(jn&&typeof jn.onCommitFiberRoot=="function")try{jn.onCommitFiberRoot(yo,e,void 0,(e.current.flags&128)===128)}catch{}}var wn=Math.clz32?Math.clz32:Pf,wf=Math.log,Sf=Math.LN2;function Pf(e){return e>>>=0,e===0?32:31-(wf(e)/Sf|0)|0}var bo=64,xo=4194304;function Pr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ko(e,n){var t=e.pendingLanes;if(t===0)return 0;var r=0,a=e.suspendedLanes,s=e.pingedLanes,d=t&268435455;if(d!==0){var h=d&~a;h!==0?r=Pr(h):(s&=d,s!==0&&(r=Pr(s)))}else d=t&~a,d!==0?r=Pr(d):s!==0&&(r=Pr(s));if(r===0)return 0;if(n!==0&&n!==r&&(n&a)===0&&(a=r&-r,s=n&-n,a>=s||a===16&&(s&4194240)!==0))return n;if((r&4)!==0&&(r|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=r;0<n;)t=31-wn(n),a=1<<t,r|=e[t],n&=~a;return r}function Ef(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Cf(e,n){for(var t=e.suspendedLanes,r=e.pingedLanes,a=e.expirationTimes,s=e.pendingLanes;0<s;){var d=31-wn(s),h=1<<d,g=a[d];g===-1?((h&t)===0||(h&r)!==0)&&(a[d]=Ef(h,n)):g<=n&&(e.expiredLanes|=h),s&=~h}}function ti(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Cs(){var e=bo;return bo<<=1,(bo&4194240)===0&&(bo=64),e}function ri(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function Er(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-wn(n),e[n]=t}function _f(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<t;){var a=31-wn(t),s=1<<a;n[a]=0,r[a]=-1,e[a]=-1,t&=~s}}function oi(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var r=31-wn(t),a=1<<r;a&n|e[r]&n&&(e[r]|=n),t&=~a}}var xe=0;function _s(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var Os,ai,Ns,Rs,zs,ii=!1,wo=[],et=null,nt=null,tt=null,Cr=new Map,_r=new Map,rt=[],Of="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ts(e,n){switch(e){case"focusin":case"focusout":et=null;break;case"dragenter":case"dragleave":nt=null;break;case"mouseover":case"mouseout":tt=null;break;case"pointerover":case"pointerout":Cr.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":_r.delete(n.pointerId)}}function Or(e,n,t,r,a,s){return e===null||e.nativeEvent!==s?(e={blockedOn:n,domEventName:t,eventSystemFlags:r,nativeEvent:s,targetContainers:[a]},n!==null&&(n=$r(n),n!==null&&ai(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,a!==null&&n.indexOf(a)===-1&&n.push(a),e)}function Nf(e,n,t,r,a){switch(n){case"focusin":return et=Or(et,e,n,t,r,a),!0;case"dragenter":return nt=Or(nt,e,n,t,r,a),!0;case"mouseover":return tt=Or(tt,e,n,t,r,a),!0;case"pointerover":var s=a.pointerId;return Cr.set(s,Or(Cr.get(s)||null,e,n,t,r,a)),!0;case"gotpointercapture":return s=a.pointerId,_r.set(s,Or(_r.get(s)||null,e,n,t,r,a)),!0}return!1}function Ls(e){var n=St(e.target);if(n!==null){var t=wt(n);if(t!==null){if(n=t.tag,n===13){if(n=ys(t),n!==null){e.blockedOn=n,zs(e.priority,function(){Ns(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function So(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=si(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var r=new t.constructor(t.type,t);Ga=r,t.target.dispatchEvent(r),Ga=null}else return n=$r(t),n!==null&&ai(n),e.blockedOn=t,!1;n.shift()}return!0}function js(e,n,t){So(e)&&t.delete(n)}function Rf(){ii=!1,et!==null&&So(et)&&(et=null),nt!==null&&So(nt)&&(nt=null),tt!==null&&So(tt)&&(tt=null),Cr.forEach(js),_r.forEach(js)}function Nr(e,n){e.blockedOn===n&&(e.blockedOn=null,ii||(ii=!0,l.unstable_scheduleCallback(l.unstable_NormalPriority,Rf)))}function Rr(e){function n(a){return Nr(a,e)}if(0<wo.length){Nr(wo[0],e);for(var t=1;t<wo.length;t++){var r=wo[t];r.blockedOn===e&&(r.blockedOn=null)}}for(et!==null&&Nr(et,e),nt!==null&&Nr(nt,e),tt!==null&&Nr(tt,e),Cr.forEach(n),_r.forEach(n),t=0;t<rt.length;t++)r=rt[t],r.blockedOn===e&&(r.blockedOn=null);for(;0<rt.length&&(t=rt[0],t.blockedOn===null);)Ls(t),t.blockedOn===null&&rt.shift()}var Bt=ae.ReactCurrentBatchConfig,Po=!0;function zf(e,n,t,r){var a=xe,s=Bt.transition;Bt.transition=null;try{xe=1,li(e,n,t,r)}finally{xe=a,Bt.transition=s}}function Tf(e,n,t,r){var a=xe,s=Bt.transition;Bt.transition=null;try{xe=4,li(e,n,t,r)}finally{xe=a,Bt.transition=s}}function li(e,n,t,r){if(Po){var a=si(e,n,t,r);if(a===null)Ei(e,n,r,Eo,t),Ts(e,r);else if(Nf(a,e,n,t,r))r.stopPropagation();else if(Ts(e,r),n&4&&-1<Of.indexOf(e)){for(;a!==null;){var s=$r(a);if(s!==null&&Os(s),s=si(e,n,t,r),s===null&&Ei(e,n,r,Eo,t),s===a)break;a=s}a!==null&&r.stopPropagation()}else Ei(e,n,r,null,t)}}var Eo=null;function si(e,n,t,r){if(Eo=null,e=Ya(r),e=St(e),e!==null)if(n=wt(e),n===null)e=null;else if(t=n.tag,t===13){if(e=ys(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return Eo=e,null}function Ms(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(bf()){case ni:return 1;case Ps:return 4;case vo:case xf:return 16;case Es:return 536870912;default:return 16}default:return 16}}var ot=null,ui=null,Co=null;function Ds(){if(Co)return Co;var e,n=ui,t=n.length,r,a="value"in ot?ot.value:ot.textContent,s=a.length;for(e=0;e<t&&n[e]===a[e];e++);var d=t-e;for(r=1;r<=d&&n[t-r]===a[s-r];r++);return Co=a.slice(e,1<r?1-r:void 0)}function _o(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Oo(){return!0}function As(){return!1}function cn(e){function n(t,r,a,s,d){this._reactName=t,this._targetInst=a,this.type=r,this.nativeEvent=s,this.target=d,this.currentTarget=null;for(var h in e)e.hasOwnProperty(h)&&(t=e[h],this[h]=t?t(s):s[h]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Oo:As,this.isPropagationStopped=As,this}return $(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=Oo)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=Oo)},persist:function(){},isPersistent:Oo}),n}var Ut={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ci=cn(Ut),zr=$({},Ut,{view:0,detail:0}),Lf=cn(zr),di,fi,Tr,No=$({},zr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:hi,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Tr&&(Tr&&e.type==="mousemove"?(di=e.screenX-Tr.screenX,fi=e.screenY-Tr.screenY):fi=di=0,Tr=e),di)},movementY:function(e){return"movementY"in e?e.movementY:fi}}),Fs=cn(No),jf=$({},No,{dataTransfer:0}),Mf=cn(jf),Df=$({},zr,{relatedTarget:0}),pi=cn(Df),Af=$({},Ut,{animationName:0,elapsedTime:0,pseudoElement:0}),Ff=cn(Af),If=$({},Ut,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Bf=cn(If),Uf=$({},Ut,{data:0}),Is=cn(Uf),$f={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Vf={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Hf={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Wf(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Hf[e])?!!n[e]:!1}function hi(){return Wf}var Qf=$({},zr,{key:function(e){if(e.key){var n=$f[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=_o(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Vf[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:hi,charCode:function(e){return e.type==="keypress"?_o(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?_o(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),qf=cn(Qf),Kf=$({},No,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Bs=cn(Kf),Gf=$({},zr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:hi}),Yf=cn(Gf),Xf=$({},Ut,{propertyName:0,elapsedTime:0,pseudoElement:0}),Jf=cn(Xf),Zf=$({},No,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),ep=cn(Zf),np=[9,13,27,32],mi=y&&"CompositionEvent"in window,Lr=null;y&&"documentMode"in document&&(Lr=document.documentMode);var tp=y&&"TextEvent"in window&&!Lr,Us=y&&(!mi||Lr&&8<Lr&&11>=Lr),$s=" ",Vs=!1;function Hs(e,n){switch(e){case"keyup":return np.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ws(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var $t=!1;function rp(e,n){switch(e){case"compositionend":return Ws(n);case"keypress":return n.which!==32?null:(Vs=!0,$s);case"textInput":return e=n.data,e===$s&&Vs?null:e;default:return null}}function op(e,n){if($t)return e==="compositionend"||!mi&&Hs(e,n)?(e=Ds(),Co=ui=ot=null,$t=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Us&&n.locale!=="ko"?null:n.data;default:return null}}var ap={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Qs(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!ap[e.type]:n==="textarea"}function qs(e,n,t,r){ps(r),n=jo(n,"onChange"),0<n.length&&(t=new ci("onChange","change",null,t,r),e.push({event:t,listeners:n}))}var jr=null,Mr=null;function ip(e){du(e,0)}function Ro(e){var n=qt(e);if(kt(n))return e}function lp(e,n){if(e==="change")return n}var Ks=!1;if(y){var gi;if(y){var vi="oninput"in document;if(!vi){var Gs=document.createElement("div");Gs.setAttribute("oninput","return;"),vi=typeof Gs.oninput=="function"}gi=vi}else gi=!1;Ks=gi&&(!document.documentMode||9<document.documentMode)}function Ys(){jr&&(jr.detachEvent("onpropertychange",Xs),Mr=jr=null)}function Xs(e){if(e.propertyName==="value"&&Ro(Mr)){var n=[];qs(n,Mr,e,Ya(e)),vs(ip,n)}}function sp(e,n,t){e==="focusin"?(Ys(),jr=n,Mr=t,jr.attachEvent("onpropertychange",Xs)):e==="focusout"&&Ys()}function up(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ro(Mr)}function cp(e,n){if(e==="click")return Ro(n)}function dp(e,n){if(e==="input"||e==="change")return Ro(n)}function fp(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Sn=typeof Object.is=="function"?Object.is:fp;function Dr(e,n){if(Sn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),r=Object.keys(n);if(t.length!==r.length)return!1;for(r=0;r<t.length;r++){var a=t[r];if(!m.call(n,a)||!Sn(e[a],n[a]))return!1}return!0}function Js(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Zs(e,n){var t=Js(e);e=0;for(var r;t;){if(t.nodeType===3){if(r=e+t.textContent.length,e<=n&&r>=n)return{node:t,offset:n-e};e=r}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=Js(t)}}function eu(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?eu(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function nu(){for(var e=window,n=po();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=po(e.document)}return n}function yi(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function pp(e){var n=nu(),t=e.focusedElem,r=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&eu(t.ownerDocument.documentElement,t)){if(r!==null&&yi(t)){if(n=r.start,e=r.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var a=t.textContent.length,s=Math.min(r.start,a);r=r.end===void 0?s:Math.min(r.end,a),!e.extend&&s>r&&(a=r,r=s,s=a),a=Zs(t,s);var d=Zs(t,r);a&&d&&(e.rangeCount!==1||e.anchorNode!==a.node||e.anchorOffset!==a.offset||e.focusNode!==d.node||e.focusOffset!==d.offset)&&(n=n.createRange(),n.setStart(a.node,a.offset),e.removeAllRanges(),s>r?(e.addRange(n),e.extend(d.node,d.offset)):(n.setEnd(d.node,d.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var hp=y&&"documentMode"in document&&11>=document.documentMode,Vt=null,bi=null,Ar=null,xi=!1;function tu(e,n,t){var r=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;xi||Vt==null||Vt!==po(r)||(r=Vt,"selectionStart"in r&&yi(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ar&&Dr(Ar,r)||(Ar=r,r=jo(bi,"onSelect"),0<r.length&&(n=new ci("onSelect","select",null,n,t),e.push({event:n,listeners:r}),n.target=Vt)))}function zo(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var Ht={animationend:zo("Animation","AnimationEnd"),animationiteration:zo("Animation","AnimationIteration"),animationstart:zo("Animation","AnimationStart"),transitionend:zo("Transition","TransitionEnd")},ki={},ru={};y&&(ru=document.createElement("div").style,"AnimationEvent"in window||(delete Ht.animationend.animation,delete Ht.animationiteration.animation,delete Ht.animationstart.animation),"TransitionEvent"in window||delete Ht.transitionend.transition);function To(e){if(ki[e])return ki[e];if(!Ht[e])return e;var n=Ht[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in ru)return ki[e]=n[t];return e}var ou=To("animationend"),au=To("animationiteration"),iu=To("animationstart"),lu=To("transitionend"),su=new Map,uu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function at(e,n){su.set(e,n),f(n,[e])}for(var wi=0;wi<uu.length;wi++){var Si=uu[wi],mp=Si.toLowerCase(),gp=Si[0].toUpperCase()+Si.slice(1);at(mp,"on"+gp)}at(ou,"onAnimationEnd"),at(au,"onAnimationIteration"),at(iu,"onAnimationStart"),at("dblclick","onDoubleClick"),at("focusin","onFocus"),at("focusout","onBlur"),at(lu,"onTransitionEnd"),p("onMouseEnter",["mouseout","mouseover"]),p("onMouseLeave",["mouseout","mouseover"]),p("onPointerEnter",["pointerout","pointerover"]),p("onPointerLeave",["pointerout","pointerover"]),f("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),f("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),f("onBeforeInput",["compositionend","keypress","textInput","paste"]),f("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),f("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),f("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Fr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),vp=new Set("cancel close invalid load scroll toggle".split(" ").concat(Fr));function cu(e,n,t){var r=e.type||"unknown-event";e.currentTarget=t,mf(r,n,void 0,e),e.currentTarget=null}function du(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var r=e[t],a=r.event;r=r.listeners;e:{var s=void 0;if(n)for(var d=r.length-1;0<=d;d--){var h=r[d],g=h.instance,C=h.currentTarget;if(h=h.listener,g!==s&&a.isPropagationStopped())break e;cu(a,h,C),s=g}else for(d=0;d<r.length;d++){if(h=r[d],g=h.instance,C=h.currentTarget,h=h.listener,g!==s&&a.isPropagationStopped())break e;cu(a,h,C),s=g}}}if(go)throw e=ei,go=!1,ei=null,e}function Se(e,n){var t=n[zi];t===void 0&&(t=n[zi]=new Set);var r=e+"__bubble";t.has(r)||(fu(n,e,2,!1),t.add(r))}function Pi(e,n,t){var r=0;n&&(r|=4),fu(t,e,r,n)}var Lo="_reactListening"+Math.random().toString(36).slice(2);function Ir(e){if(!e[Lo]){e[Lo]=!0,u.forEach(function(t){t!=="selectionchange"&&(vp.has(t)||Pi(t,!1,e),Pi(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Lo]||(n[Lo]=!0,Pi("selectionchange",!1,n))}}function fu(e,n,t,r){switch(Ms(n)){case 1:var a=zf;break;case 4:a=Tf;break;default:a=li}t=a.bind(null,n,t,e),a=void 0,!Za||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(a=!0),r?a!==void 0?e.addEventListener(n,t,{capture:!0,passive:a}):e.addEventListener(n,t,!0):a!==void 0?e.addEventListener(n,t,{passive:a}):e.addEventListener(n,t,!1)}function Ei(e,n,t,r,a){var s=r;if((n&1)===0&&(n&2)===0&&r!==null)e:for(;;){if(r===null)return;var d=r.tag;if(d===3||d===4){var h=r.stateNode.containerInfo;if(h===a||h.nodeType===8&&h.parentNode===a)break;if(d===4)for(d=r.return;d!==null;){var g=d.tag;if((g===3||g===4)&&(g=d.stateNode.containerInfo,g===a||g.nodeType===8&&g.parentNode===a))return;d=d.return}for(;h!==null;){if(d=St(h),d===null)return;if(g=d.tag,g===5||g===6){r=s=d;continue e}h=h.parentNode}}r=r.return}vs(function(){var C=s,j=Ya(t),M=[];e:{var L=su.get(e);if(L!==void 0){var B=ci,W=e;switch(e){case"keypress":if(_o(t)===0)break e;case"keydown":case"keyup":B=qf;break;case"focusin":W="focus",B=pi;break;case"focusout":W="blur",B=pi;break;case"beforeblur":case"afterblur":B=pi;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":B=Fs;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":B=Mf;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":B=Yf;break;case ou:case au:case iu:B=Ff;break;case lu:B=Jf;break;case"scroll":B=Lf;break;case"wheel":B=ep;break;case"copy":case"cut":case"paste":B=Bf;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":B=Bs}var G=(n&4)!==0,Le=!G&&e==="scroll",k=G?L!==null?L+"Capture":null:L;G=[];for(var b=C,P;b!==null;){P=b;var A=P.stateNode;if(P.tag===5&&A!==null&&(P=A,k!==null&&(A=kr(b,k),A!=null&&G.push(Br(b,A,P)))),Le)break;b=b.return}0<G.length&&(L=new B(L,W,null,t,j),M.push({event:L,listeners:G}))}}if((n&7)===0){e:{if(L=e==="mouseover"||e==="pointerover",B=e==="mouseout"||e==="pointerout",L&&t!==Ga&&(W=t.relatedTarget||t.fromElement)&&(St(W)||W[Bn]))break e;if((B||L)&&(L=j.window===j?j:(L=j.ownerDocument)?L.defaultView||L.parentWindow:window,B?(W=t.relatedTarget||t.toElement,B=C,W=W?St(W):null,W!==null&&(Le=wt(W),W!==Le||W.tag!==5&&W.tag!==6)&&(W=null)):(B=null,W=C),B!==W)){if(G=Fs,A="onMouseLeave",k="onMouseEnter",b="mouse",(e==="pointerout"||e==="pointerover")&&(G=Bs,A="onPointerLeave",k="onPointerEnter",b="pointer"),Le=B==null?L:qt(B),P=W==null?L:qt(W),L=new G(A,b+"leave",B,t,j),L.target=Le,L.relatedTarget=P,A=null,St(j)===C&&(G=new G(k,b+"enter",W,t,j),G.target=P,G.relatedTarget=Le,A=G),Le=A,B&&W)n:{for(G=B,k=W,b=0,P=G;P;P=Wt(P))b++;for(P=0,A=k;A;A=Wt(A))P++;for(;0<b-P;)G=Wt(G),b--;for(;0<P-b;)k=Wt(k),P--;for(;b--;){if(G===k||k!==null&&G===k.alternate)break n;G=Wt(G),k=Wt(k)}G=null}else G=null;B!==null&&pu(M,L,B,G,!1),W!==null&&Le!==null&&pu(M,Le,W,G,!0)}}e:{if(L=C?qt(C):window,B=L.nodeName&&L.nodeName.toLowerCase(),B==="select"||B==="input"&&L.type==="file")var Y=lp;else if(Qs(L))if(Ks)Y=dp;else{Y=up;var ee=sp}else(B=L.nodeName)&&B.toLowerCase()==="input"&&(L.type==="checkbox"||L.type==="radio")&&(Y=cp);if(Y&&(Y=Y(e,C))){qs(M,Y,t,j);break e}ee&&ee(e,L,C),e==="focusout"&&(ee=L._wrapperState)&&ee.controlled&&L.type==="number"&&Ha(L,"number",L.value)}switch(ee=C?qt(C):window,e){case"focusin":(Qs(ee)||ee.contentEditable==="true")&&(Vt=ee,bi=C,Ar=null);break;case"focusout":Ar=bi=Vt=null;break;case"mousedown":xi=!0;break;case"contextmenu":case"mouseup":case"dragend":xi=!1,tu(M,t,j);break;case"selectionchange":if(hp)break;case"keydown":case"keyup":tu(M,t,j)}var ne;if(mi)e:{switch(e){case"compositionstart":var re="onCompositionStart";break e;case"compositionend":re="onCompositionEnd";break e;case"compositionupdate":re="onCompositionUpdate";break e}re=void 0}else $t?Hs(e,t)&&(re="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(re="onCompositionStart");re&&(Us&&t.locale!=="ko"&&($t||re!=="onCompositionStart"?re==="onCompositionEnd"&&$t&&(ne=Ds()):(ot=j,ui="value"in ot?ot.value:ot.textContent,$t=!0)),ee=jo(C,re),0<ee.length&&(re=new Is(re,e,null,t,j),M.push({event:re,listeners:ee}),ne?re.data=ne:(ne=Ws(t),ne!==null&&(re.data=ne)))),(ne=tp?rp(e,t):op(e,t))&&(C=jo(C,"onBeforeInput"),0<C.length&&(j=new Is("onBeforeInput","beforeinput",null,t,j),M.push({event:j,listeners:C}),j.data=ne))}du(M,n)})}function Br(e,n,t){return{instance:e,listener:n,currentTarget:t}}function jo(e,n){for(var t=n+"Capture",r=[];e!==null;){var a=e,s=a.stateNode;a.tag===5&&s!==null&&(a=s,s=kr(e,t),s!=null&&r.unshift(Br(e,s,a)),s=kr(e,n),s!=null&&r.push(Br(e,s,a))),e=e.return}return r}function Wt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function pu(e,n,t,r,a){for(var s=n._reactName,d=[];t!==null&&t!==r;){var h=t,g=h.alternate,C=h.stateNode;if(g!==null&&g===r)break;h.tag===5&&C!==null&&(h=C,a?(g=kr(t,s),g!=null&&d.unshift(Br(t,g,h))):a||(g=kr(t,s),g!=null&&d.push(Br(t,g,h)))),t=t.return}d.length!==0&&e.push({event:n,listeners:d})}var yp=/\r\n?/g,bp=/\u0000|\uFFFD/g;function hu(e){return(typeof e=="string"?e:""+e).replace(yp,`
`).replace(bp,"")}function Mo(e,n,t){if(n=hu(n),hu(e)!==n&&t)throw Error(i(425))}function Do(){}var Ci=null,_i=null;function Oi(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Ni=typeof setTimeout=="function"?setTimeout:void 0,xp=typeof clearTimeout=="function"?clearTimeout:void 0,mu=typeof Promise=="function"?Promise:void 0,kp=typeof queueMicrotask=="function"?queueMicrotask:typeof mu<"u"?function(e){return mu.resolve(null).then(e).catch(wp)}:Ni;function wp(e){setTimeout(function(){throw e})}function Ri(e,n){var t=n,r=0;do{var a=t.nextSibling;if(e.removeChild(t),a&&a.nodeType===8)if(t=a.data,t==="/$"){if(r===0){e.removeChild(a),Rr(n);return}r--}else t!=="$"&&t!=="$?"&&t!=="$!"||r++;t=a}while(t);Rr(n)}function it(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function gu(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var Qt=Math.random().toString(36).slice(2),Mn="__reactFiber$"+Qt,Ur="__reactProps$"+Qt,Bn="__reactContainer$"+Qt,zi="__reactEvents$"+Qt,Sp="__reactListeners$"+Qt,Pp="__reactHandles$"+Qt;function St(e){var n=e[Mn];if(n)return n;for(var t=e.parentNode;t;){if(n=t[Bn]||t[Mn]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=gu(e);e!==null;){if(t=e[Mn])return t;e=gu(e)}return n}e=t,t=e.parentNode}return null}function $r(e){return e=e[Mn]||e[Bn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function qt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(i(33))}function Ao(e){return e[Ur]||null}var Ti=[],Kt=-1;function lt(e){return{current:e}}function Pe(e){0>Kt||(e.current=Ti[Kt],Ti[Kt]=null,Kt--)}function we(e,n){Kt++,Ti[Kt]=e.current,e.current=n}var st={},Ke=lt(st),tn=lt(!1),Pt=st;function Gt(e,n){var t=e.type.contextTypes;if(!t)return st;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===n)return r.__reactInternalMemoizedMaskedChildContext;var a={},s;for(s in t)a[s]=n[s];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=a),a}function rn(e){return e=e.childContextTypes,e!=null}function Fo(){Pe(tn),Pe(Ke)}function vu(e,n,t){if(Ke.current!==st)throw Error(i(168));we(Ke,n),we(tn,t)}function yu(e,n,t){var r=e.stateNode;if(n=n.childContextTypes,typeof r.getChildContext!="function")return t;r=r.getChildContext();for(var a in r)if(!(a in n))throw Error(i(108,oe(e)||"Unknown",a));return $({},t,r)}function Io(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||st,Pt=Ke.current,we(Ke,e),we(tn,tn.current),!0}function bu(e,n,t){var r=e.stateNode;if(!r)throw Error(i(169));t?(e=yu(e,n,Pt),r.__reactInternalMemoizedMergedChildContext=e,Pe(tn),Pe(Ke),we(Ke,e)):Pe(tn),we(tn,t)}var Un=null,Bo=!1,Li=!1;function xu(e){Un===null?Un=[e]:Un.push(e)}function Ep(e){Bo=!0,xu(e)}function ut(){if(!Li&&Un!==null){Li=!0;var e=0,n=xe;try{var t=Un;for(xe=1;e<t.length;e++){var r=t[e];do r=r(!0);while(r!==null)}Un=null,Bo=!1}catch(a){throw Un!==null&&(Un=Un.slice(e+1)),ws(ni,ut),a}finally{xe=n,Li=!1}}return null}var Yt=[],Xt=0,Uo=null,$o=0,gn=[],vn=0,Et=null,$n=1,Vn="";function Ct(e,n){Yt[Xt++]=$o,Yt[Xt++]=Uo,Uo=e,$o=n}function ku(e,n,t){gn[vn++]=$n,gn[vn++]=Vn,gn[vn++]=Et,Et=e;var r=$n;e=Vn;var a=32-wn(r)-1;r&=~(1<<a),t+=1;var s=32-wn(n)+a;if(30<s){var d=a-a%5;s=(r&(1<<d)-1).toString(32),r>>=d,a-=d,$n=1<<32-wn(n)+a|t<<a|r,Vn=s+e}else $n=1<<s|t<<a|r,Vn=e}function ji(e){e.return!==null&&(Ct(e,1),ku(e,1,0))}function Mi(e){for(;e===Uo;)Uo=Yt[--Xt],Yt[Xt]=null,$o=Yt[--Xt],Yt[Xt]=null;for(;e===Et;)Et=gn[--vn],gn[vn]=null,Vn=gn[--vn],gn[vn]=null,$n=gn[--vn],gn[vn]=null}var dn=null,fn=null,Ce=!1,Pn=null;function wu(e,n){var t=kn(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function Su(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,dn=e,fn=it(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,dn=e,fn=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=Et!==null?{id:$n,overflow:Vn}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=kn(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,dn=e,fn=null,!0):!1;default:return!1}}function Di(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ai(e){if(Ce){var n=fn;if(n){var t=n;if(!Su(e,n)){if(Di(e))throw Error(i(418));n=it(t.nextSibling);var r=dn;n&&Su(e,n)?wu(r,t):(e.flags=e.flags&-4097|2,Ce=!1,dn=e)}}else{if(Di(e))throw Error(i(418));e.flags=e.flags&-4097|2,Ce=!1,dn=e}}}function Pu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;dn=e}function Vo(e){if(e!==dn)return!1;if(!Ce)return Pu(e),Ce=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!Oi(e.type,e.memoizedProps)),n&&(n=fn)){if(Di(e))throw Eu(),Error(i(418));for(;n;)wu(e,n),n=it(n.nextSibling)}if(Pu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(i(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){fn=it(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}fn=null}}else fn=dn?it(e.stateNode.nextSibling):null;return!0}function Eu(){for(var e=fn;e;)e=it(e.nextSibling)}function Jt(){fn=dn=null,Ce=!1}function Fi(e){Pn===null?Pn=[e]:Pn.push(e)}var Cp=ae.ReactCurrentBatchConfig;function Vr(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(i(309));var r=t.stateNode}if(!r)throw Error(i(147,e));var a=r,s=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===s?n.ref:(n=function(d){var h=a.refs;d===null?delete h[s]:h[s]=d},n._stringRef=s,n)}if(typeof e!="string")throw Error(i(284));if(!t._owner)throw Error(i(290,e))}return e}function Ho(e,n){throw e=Object.prototype.toString.call(n),Error(i(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function Cu(e){var n=e._init;return n(e._payload)}function _u(e){function n(k,b){if(e){var P=k.deletions;P===null?(k.deletions=[b],k.flags|=16):P.push(b)}}function t(k,b){if(!e)return null;for(;b!==null;)n(k,b),b=b.sibling;return null}function r(k,b){for(k=new Map;b!==null;)b.key!==null?k.set(b.key,b):k.set(b.index,b),b=b.sibling;return k}function a(k,b){return k=vt(k,b),k.index=0,k.sibling=null,k}function s(k,b,P){return k.index=P,e?(P=k.alternate,P!==null?(P=P.index,P<b?(k.flags|=2,b):P):(k.flags|=2,b)):(k.flags|=1048576,b)}function d(k){return e&&k.alternate===null&&(k.flags|=2),k}function h(k,b,P,A){return b===null||b.tag!==6?(b=Nl(P,k.mode,A),b.return=k,b):(b=a(b,P),b.return=k,b)}function g(k,b,P,A){var Y=P.type;return Y===pe?j(k,b,P.props.children,A,P.key):b!==null&&(b.elementType===Y||typeof Y=="object"&&Y!==null&&Y.$$typeof===Ee&&Cu(Y)===b.type)?(A=a(b,P.props),A.ref=Vr(k,b,P),A.return=k,A):(A=ha(P.type,P.key,P.props,null,k.mode,A),A.ref=Vr(k,b,P),A.return=k,A)}function C(k,b,P,A){return b===null||b.tag!==4||b.stateNode.containerInfo!==P.containerInfo||b.stateNode.implementation!==P.implementation?(b=Rl(P,k.mode,A),b.return=k,b):(b=a(b,P.children||[]),b.return=k,b)}function j(k,b,P,A,Y){return b===null||b.tag!==7?(b=jt(P,k.mode,A,Y),b.return=k,b):(b=a(b,P),b.return=k,b)}function M(k,b,P){if(typeof b=="string"&&b!==""||typeof b=="number")return b=Nl(""+b,k.mode,P),b.return=k,b;if(typeof b=="object"&&b!==null){switch(b.$$typeof){case le:return P=ha(b.type,b.key,b.props,null,k.mode,P),P.ref=Vr(k,null,b),P.return=k,P;case de:return b=Rl(b,k.mode,P),b.return=k,b;case Ee:var A=b._init;return M(k,A(b._payload),P)}if(yr(b)||Z(b))return b=jt(b,k.mode,P,null),b.return=k,b;Ho(k,b)}return null}function L(k,b,P,A){var Y=b!==null?b.key:null;if(typeof P=="string"&&P!==""||typeof P=="number")return Y!==null?null:h(k,b,""+P,A);if(typeof P=="object"&&P!==null){switch(P.$$typeof){case le:return P.key===Y?g(k,b,P,A):null;case de:return P.key===Y?C(k,b,P,A):null;case Ee:return Y=P._init,L(k,b,Y(P._payload),A)}if(yr(P)||Z(P))return Y!==null?null:j(k,b,P,A,null);Ho(k,P)}return null}function B(k,b,P,A,Y){if(typeof A=="string"&&A!==""||typeof A=="number")return k=k.get(P)||null,h(b,k,""+A,Y);if(typeof A=="object"&&A!==null){switch(A.$$typeof){case le:return k=k.get(A.key===null?P:A.key)||null,g(b,k,A,Y);case de:return k=k.get(A.key===null?P:A.key)||null,C(b,k,A,Y);case Ee:var ee=A._init;return B(k,b,P,ee(A._payload),Y)}if(yr(A)||Z(A))return k=k.get(P)||null,j(b,k,A,Y,null);Ho(b,A)}return null}function W(k,b,P,A){for(var Y=null,ee=null,ne=b,re=b=0,Ve=null;ne!==null&&re<P.length;re++){ne.index>re?(Ve=ne,ne=null):Ve=ne.sibling;var ge=L(k,ne,P[re],A);if(ge===null){ne===null&&(ne=Ve);break}e&&ne&&ge.alternate===null&&n(k,ne),b=s(ge,b,re),ee===null?Y=ge:ee.sibling=ge,ee=ge,ne=Ve}if(re===P.length)return t(k,ne),Ce&&Ct(k,re),Y;if(ne===null){for(;re<P.length;re++)ne=M(k,P[re],A),ne!==null&&(b=s(ne,b,re),ee===null?Y=ne:ee.sibling=ne,ee=ne);return Ce&&Ct(k,re),Y}for(ne=r(k,ne);re<P.length;re++)Ve=B(ne,k,re,P[re],A),Ve!==null&&(e&&Ve.alternate!==null&&ne.delete(Ve.key===null?re:Ve.key),b=s(Ve,b,re),ee===null?Y=Ve:ee.sibling=Ve,ee=Ve);return e&&ne.forEach(function(yt){return n(k,yt)}),Ce&&Ct(k,re),Y}function G(k,b,P,A){var Y=Z(P);if(typeof Y!="function")throw Error(i(150));if(P=Y.call(P),P==null)throw Error(i(151));for(var ee=Y=null,ne=b,re=b=0,Ve=null,ge=P.next();ne!==null&&!ge.done;re++,ge=P.next()){ne.index>re?(Ve=ne,ne=null):Ve=ne.sibling;var yt=L(k,ne,ge.value,A);if(yt===null){ne===null&&(ne=Ve);break}e&&ne&&yt.alternate===null&&n(k,ne),b=s(yt,b,re),ee===null?Y=yt:ee.sibling=yt,ee=yt,ne=Ve}if(ge.done)return t(k,ne),Ce&&Ct(k,re),Y;if(ne===null){for(;!ge.done;re++,ge=P.next())ge=M(k,ge.value,A),ge!==null&&(b=s(ge,b,re),ee===null?Y=ge:ee.sibling=ge,ee=ge);return Ce&&Ct(k,re),Y}for(ne=r(k,ne);!ge.done;re++,ge=P.next())ge=B(ne,k,re,ge.value,A),ge!==null&&(e&&ge.alternate!==null&&ne.delete(ge.key===null?re:ge.key),b=s(ge,b,re),ee===null?Y=ge:ee.sibling=ge,ee=ge);return e&&ne.forEach(function(ah){return n(k,ah)}),Ce&&Ct(k,re),Y}function Le(k,b,P,A){if(typeof P=="object"&&P!==null&&P.type===pe&&P.key===null&&(P=P.props.children),typeof P=="object"&&P!==null){switch(P.$$typeof){case le:e:{for(var Y=P.key,ee=b;ee!==null;){if(ee.key===Y){if(Y=P.type,Y===pe){if(ee.tag===7){t(k,ee.sibling),b=a(ee,P.props.children),b.return=k,k=b;break e}}else if(ee.elementType===Y||typeof Y=="object"&&Y!==null&&Y.$$typeof===Ee&&Cu(Y)===ee.type){t(k,ee.sibling),b=a(ee,P.props),b.ref=Vr(k,ee,P),b.return=k,k=b;break e}t(k,ee);break}else n(k,ee);ee=ee.sibling}P.type===pe?(b=jt(P.props.children,k.mode,A,P.key),b.return=k,k=b):(A=ha(P.type,P.key,P.props,null,k.mode,A),A.ref=Vr(k,b,P),A.return=k,k=A)}return d(k);case de:e:{for(ee=P.key;b!==null;){if(b.key===ee)if(b.tag===4&&b.stateNode.containerInfo===P.containerInfo&&b.stateNode.implementation===P.implementation){t(k,b.sibling),b=a(b,P.children||[]),b.return=k,k=b;break e}else{t(k,b);break}else n(k,b);b=b.sibling}b=Rl(P,k.mode,A),b.return=k,k=b}return d(k);case Ee:return ee=P._init,Le(k,b,ee(P._payload),A)}if(yr(P))return W(k,b,P,A);if(Z(P))return G(k,b,P,A);Ho(k,P)}return typeof P=="string"&&P!==""||typeof P=="number"?(P=""+P,b!==null&&b.tag===6?(t(k,b.sibling),b=a(b,P),b.return=k,k=b):(t(k,b),b=Nl(P,k.mode,A),b.return=k,k=b),d(k)):t(k,b)}return Le}var Zt=_u(!0),Ou=_u(!1),Wo=lt(null),Qo=null,er=null,Ii=null;function Bi(){Ii=er=Qo=null}function Ui(e){var n=Wo.current;Pe(Wo),e._currentValue=n}function $i(e,n,t){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===t)break;e=e.return}}function nr(e,n){Qo=e,Ii=er=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&n)!==0&&(on=!0),e.firstContext=null)}function yn(e){var n=e._currentValue;if(Ii!==e)if(e={context:e,memoizedValue:n,next:null},er===null){if(Qo===null)throw Error(i(308));er=e,Qo.dependencies={lanes:0,firstContext:e}}else er=er.next=e;return n}var _t=null;function Vi(e){_t===null?_t=[e]:_t.push(e)}function Nu(e,n,t,r){var a=n.interleaved;return a===null?(t.next=t,Vi(n)):(t.next=a.next,a.next=t),n.interleaved=t,Hn(e,r)}function Hn(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var ct=!1;function Hi(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ru(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Wn(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function dt(e,n,t){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(he&2)!==0){var a=r.pending;return a===null?n.next=n:(n.next=a.next,a.next=n),r.pending=n,Hn(e,t)}return a=r.interleaved,a===null?(n.next=n,Vi(r)):(n.next=a.next,a.next=n),r.interleaved=n,Hn(e,t)}function qo(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,oi(e,t)}}function zu(e,n){var t=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,t===r)){var a=null,s=null;if(t=t.firstBaseUpdate,t!==null){do{var d={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};s===null?a=s=d:s=s.next=d,t=t.next}while(t!==null);s===null?a=s=n:s=s.next=n}else a=s=n;t={baseState:r.baseState,firstBaseUpdate:a,lastBaseUpdate:s,shared:r.shared,effects:r.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function Ko(e,n,t,r){var a=e.updateQueue;ct=!1;var s=a.firstBaseUpdate,d=a.lastBaseUpdate,h=a.shared.pending;if(h!==null){a.shared.pending=null;var g=h,C=g.next;g.next=null,d===null?s=C:d.next=C,d=g;var j=e.alternate;j!==null&&(j=j.updateQueue,h=j.lastBaseUpdate,h!==d&&(h===null?j.firstBaseUpdate=C:h.next=C,j.lastBaseUpdate=g))}if(s!==null){var M=a.baseState;d=0,j=C=g=null,h=s;do{var L=h.lane,B=h.eventTime;if((r&L)===L){j!==null&&(j=j.next={eventTime:B,lane:0,tag:h.tag,payload:h.payload,callback:h.callback,next:null});e:{var W=e,G=h;switch(L=n,B=t,G.tag){case 1:if(W=G.payload,typeof W=="function"){M=W.call(B,M,L);break e}M=W;break e;case 3:W.flags=W.flags&-65537|128;case 0:if(W=G.payload,L=typeof W=="function"?W.call(B,M,L):W,L==null)break e;M=$({},M,L);break e;case 2:ct=!0}}h.callback!==null&&h.lane!==0&&(e.flags|=64,L=a.effects,L===null?a.effects=[h]:L.push(h))}else B={eventTime:B,lane:L,tag:h.tag,payload:h.payload,callback:h.callback,next:null},j===null?(C=j=B,g=M):j=j.next=B,d|=L;if(h=h.next,h===null){if(h=a.shared.pending,h===null)break;L=h,h=L.next,L.next=null,a.lastBaseUpdate=L,a.shared.pending=null}}while(!0);if(j===null&&(g=M),a.baseState=g,a.firstBaseUpdate=C,a.lastBaseUpdate=j,n=a.shared.interleaved,n!==null){a=n;do d|=a.lane,a=a.next;while(a!==n)}else s===null&&(a.shared.lanes=0);Rt|=d,e.lanes=d,e.memoizedState=M}}function Tu(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var r=e[n],a=r.callback;if(a!==null){if(r.callback=null,r=t,typeof a!="function")throw Error(i(191,a));a.call(r)}}}var Hr={},Dn=lt(Hr),Wr=lt(Hr),Qr=lt(Hr);function Ot(e){if(e===Hr)throw Error(i(174));return e}function Wi(e,n){switch(we(Qr,n),we(Wr,e),we(Dn,Hr),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:Qa(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=Qa(n,e)}Pe(Dn),we(Dn,n)}function tr(){Pe(Dn),Pe(Wr),Pe(Qr)}function Lu(e){Ot(Qr.current);var n=Ot(Dn.current),t=Qa(n,e.type);n!==t&&(we(Wr,e),we(Dn,t))}function Qi(e){Wr.current===e&&(Pe(Dn),Pe(Wr))}var Oe=lt(0);function Go(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var qi=[];function Ki(){for(var e=0;e<qi.length;e++)qi[e]._workInProgressVersionPrimary=null;qi.length=0}var Yo=ae.ReactCurrentDispatcher,Gi=ae.ReactCurrentBatchConfig,Nt=0,Ne=null,De=null,Ue=null,Xo=!1,qr=!1,Kr=0,_p=0;function Ge(){throw Error(i(321))}function Yi(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!Sn(e[t],n[t]))return!1;return!0}function Xi(e,n,t,r,a,s){if(Nt=s,Ne=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,Yo.current=e===null||e.memoizedState===null?zp:Tp,e=t(r,a),qr){s=0;do{if(qr=!1,Kr=0,25<=s)throw Error(i(301));s+=1,Ue=De=null,n.updateQueue=null,Yo.current=Lp,e=t(r,a)}while(qr)}if(Yo.current=ea,n=De!==null&&De.next!==null,Nt=0,Ue=De=Ne=null,Xo=!1,n)throw Error(i(300));return e}function Ji(){var e=Kr!==0;return Kr=0,e}function An(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ue===null?Ne.memoizedState=Ue=e:Ue=Ue.next=e,Ue}function bn(){if(De===null){var e=Ne.alternate;e=e!==null?e.memoizedState:null}else e=De.next;var n=Ue===null?Ne.memoizedState:Ue.next;if(n!==null)Ue=n,De=e;else{if(e===null)throw Error(i(310));De=e,e={memoizedState:De.memoizedState,baseState:De.baseState,baseQueue:De.baseQueue,queue:De.queue,next:null},Ue===null?Ne.memoizedState=Ue=e:Ue=Ue.next=e}return Ue}function Gr(e,n){return typeof n=="function"?n(e):n}function Zi(e){var n=bn(),t=n.queue;if(t===null)throw Error(i(311));t.lastRenderedReducer=e;var r=De,a=r.baseQueue,s=t.pending;if(s!==null){if(a!==null){var d=a.next;a.next=s.next,s.next=d}r.baseQueue=a=s,t.pending=null}if(a!==null){s=a.next,r=r.baseState;var h=d=null,g=null,C=s;do{var j=C.lane;if((Nt&j)===j)g!==null&&(g=g.next={lane:0,action:C.action,hasEagerState:C.hasEagerState,eagerState:C.eagerState,next:null}),r=C.hasEagerState?C.eagerState:e(r,C.action);else{var M={lane:j,action:C.action,hasEagerState:C.hasEagerState,eagerState:C.eagerState,next:null};g===null?(h=g=M,d=r):g=g.next=M,Ne.lanes|=j,Rt|=j}C=C.next}while(C!==null&&C!==s);g===null?d=r:g.next=h,Sn(r,n.memoizedState)||(on=!0),n.memoizedState=r,n.baseState=d,n.baseQueue=g,t.lastRenderedState=r}if(e=t.interleaved,e!==null){a=e;do s=a.lane,Ne.lanes|=s,Rt|=s,a=a.next;while(a!==e)}else a===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function el(e){var n=bn(),t=n.queue;if(t===null)throw Error(i(311));t.lastRenderedReducer=e;var r=t.dispatch,a=t.pending,s=n.memoizedState;if(a!==null){t.pending=null;var d=a=a.next;do s=e(s,d.action),d=d.next;while(d!==a);Sn(s,n.memoizedState)||(on=!0),n.memoizedState=s,n.baseQueue===null&&(n.baseState=s),t.lastRenderedState=s}return[s,r]}function ju(){}function Mu(e,n){var t=Ne,r=bn(),a=n(),s=!Sn(r.memoizedState,a);if(s&&(r.memoizedState=a,on=!0),r=r.queue,nl(Fu.bind(null,t,r,e),[e]),r.getSnapshot!==n||s||Ue!==null&&Ue.memoizedState.tag&1){if(t.flags|=2048,Yr(9,Au.bind(null,t,r,a,n),void 0,null),$e===null)throw Error(i(349));(Nt&30)!==0||Du(t,n,a)}return a}function Du(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=Ne.updateQueue,n===null?(n={lastEffect:null,stores:null},Ne.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function Au(e,n,t,r){n.value=t,n.getSnapshot=r,Iu(n)&&Bu(e)}function Fu(e,n,t){return t(function(){Iu(n)&&Bu(e)})}function Iu(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!Sn(e,t)}catch{return!0}}function Bu(e){var n=Hn(e,1);n!==null&&On(n,e,1,-1)}function Uu(e){var n=An();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Gr,lastRenderedState:e},n.queue=e,e=e.dispatch=Rp.bind(null,Ne,e),[n.memoizedState,e]}function Yr(e,n,t,r){return e={tag:e,create:n,destroy:t,deps:r,next:null},n=Ne.updateQueue,n===null?(n={lastEffect:null,stores:null},Ne.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(r=t.next,t.next=e,e.next=r,n.lastEffect=e)),e}function $u(){return bn().memoizedState}function Jo(e,n,t,r){var a=An();Ne.flags|=e,a.memoizedState=Yr(1|n,t,void 0,r===void 0?null:r)}function Zo(e,n,t,r){var a=bn();r=r===void 0?null:r;var s=void 0;if(De!==null){var d=De.memoizedState;if(s=d.destroy,r!==null&&Yi(r,d.deps)){a.memoizedState=Yr(n,t,s,r);return}}Ne.flags|=e,a.memoizedState=Yr(1|n,t,s,r)}function Vu(e,n){return Jo(8390656,8,e,n)}function nl(e,n){return Zo(2048,8,e,n)}function Hu(e,n){return Zo(4,2,e,n)}function Wu(e,n){return Zo(4,4,e,n)}function Qu(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function qu(e,n,t){return t=t!=null?t.concat([e]):null,Zo(4,4,Qu.bind(null,n,e),t)}function tl(){}function Ku(e,n){var t=bn();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&Yi(n,r[1])?r[0]:(t.memoizedState=[e,n],e)}function Gu(e,n){var t=bn();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&Yi(n,r[1])?r[0]:(e=e(),t.memoizedState=[e,n],e)}function Yu(e,n,t){return(Nt&21)===0?(e.baseState&&(e.baseState=!1,on=!0),e.memoizedState=t):(Sn(t,n)||(t=Cs(),Ne.lanes|=t,Rt|=t,e.baseState=!0),n)}function Op(e,n){var t=xe;xe=t!==0&&4>t?t:4,e(!0);var r=Gi.transition;Gi.transition={};try{e(!1),n()}finally{xe=t,Gi.transition=r}}function Xu(){return bn().memoizedState}function Np(e,n,t){var r=mt(e);if(t={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null},Ju(e))Zu(n,t);else if(t=Nu(e,n,t,r),t!==null){var a=nn();On(t,e,r,a),ec(t,n,r)}}function Rp(e,n,t){var r=mt(e),a={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null};if(Ju(e))Zu(n,a);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=n.lastRenderedReducer,s!==null))try{var d=n.lastRenderedState,h=s(d,t);if(a.hasEagerState=!0,a.eagerState=h,Sn(h,d)){var g=n.interleaved;g===null?(a.next=a,Vi(n)):(a.next=g.next,g.next=a),n.interleaved=a;return}}catch{}finally{}t=Nu(e,n,a,r),t!==null&&(a=nn(),On(t,e,r,a),ec(t,n,r))}}function Ju(e){var n=e.alternate;return e===Ne||n!==null&&n===Ne}function Zu(e,n){qr=Xo=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function ec(e,n,t){if((t&4194240)!==0){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,oi(e,t)}}var ea={readContext:yn,useCallback:Ge,useContext:Ge,useEffect:Ge,useImperativeHandle:Ge,useInsertionEffect:Ge,useLayoutEffect:Ge,useMemo:Ge,useReducer:Ge,useRef:Ge,useState:Ge,useDebugValue:Ge,useDeferredValue:Ge,useTransition:Ge,useMutableSource:Ge,useSyncExternalStore:Ge,useId:Ge,unstable_isNewReconciler:!1},zp={readContext:yn,useCallback:function(e,n){return An().memoizedState=[e,n===void 0?null:n],e},useContext:yn,useEffect:Vu,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,Jo(4194308,4,Qu.bind(null,n,e),t)},useLayoutEffect:function(e,n){return Jo(4194308,4,e,n)},useInsertionEffect:function(e,n){return Jo(4,2,e,n)},useMemo:function(e,n){var t=An();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var r=An();return n=t!==void 0?t(n):n,r.memoizedState=r.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},r.queue=e,e=e.dispatch=Np.bind(null,Ne,e),[r.memoizedState,e]},useRef:function(e){var n=An();return e={current:e},n.memoizedState=e},useState:Uu,useDebugValue:tl,useDeferredValue:function(e){return An().memoizedState=e},useTransition:function(){var e=Uu(!1),n=e[0];return e=Op.bind(null,e[1]),An().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var r=Ne,a=An();if(Ce){if(t===void 0)throw Error(i(407));t=t()}else{if(t=n(),$e===null)throw Error(i(349));(Nt&30)!==0||Du(r,n,t)}a.memoizedState=t;var s={value:t,getSnapshot:n};return a.queue=s,Vu(Fu.bind(null,r,s,e),[e]),r.flags|=2048,Yr(9,Au.bind(null,r,s,t,n),void 0,null),t},useId:function(){var e=An(),n=$e.identifierPrefix;if(Ce){var t=Vn,r=$n;t=(r&~(1<<32-wn(r)-1)).toString(32)+t,n=":"+n+"R"+t,t=Kr++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=_p++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},Tp={readContext:yn,useCallback:Ku,useContext:yn,useEffect:nl,useImperativeHandle:qu,useInsertionEffect:Hu,useLayoutEffect:Wu,useMemo:Gu,useReducer:Zi,useRef:$u,useState:function(){return Zi(Gr)},useDebugValue:tl,useDeferredValue:function(e){var n=bn();return Yu(n,De.memoizedState,e)},useTransition:function(){var e=Zi(Gr)[0],n=bn().memoizedState;return[e,n]},useMutableSource:ju,useSyncExternalStore:Mu,useId:Xu,unstable_isNewReconciler:!1},Lp={readContext:yn,useCallback:Ku,useContext:yn,useEffect:nl,useImperativeHandle:qu,useInsertionEffect:Hu,useLayoutEffect:Wu,useMemo:Gu,useReducer:el,useRef:$u,useState:function(){return el(Gr)},useDebugValue:tl,useDeferredValue:function(e){var n=bn();return De===null?n.memoizedState=e:Yu(n,De.memoizedState,e)},useTransition:function(){var e=el(Gr)[0],n=bn().memoizedState;return[e,n]},useMutableSource:ju,useSyncExternalStore:Mu,useId:Xu,unstable_isNewReconciler:!1};function En(e,n){if(e&&e.defaultProps){n=$({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}function rl(e,n,t,r){n=e.memoizedState,t=t(r,n),t=t==null?n:$({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var na={isMounted:function(e){return(e=e._reactInternals)?wt(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var r=nn(),a=mt(e),s=Wn(r,a);s.payload=n,t!=null&&(s.callback=t),n=dt(e,s,a),n!==null&&(On(n,e,a,r),qo(n,e,a))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var r=nn(),a=mt(e),s=Wn(r,a);s.tag=1,s.payload=n,t!=null&&(s.callback=t),n=dt(e,s,a),n!==null&&(On(n,e,a,r),qo(n,e,a))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=nn(),r=mt(e),a=Wn(t,r);a.tag=2,n!=null&&(a.callback=n),n=dt(e,a,r),n!==null&&(On(n,e,r,t),qo(n,e,r))}};function nc(e,n,t,r,a,s,d){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,s,d):n.prototype&&n.prototype.isPureReactComponent?!Dr(t,r)||!Dr(a,s):!0}function tc(e,n,t){var r=!1,a=st,s=n.contextType;return typeof s=="object"&&s!==null?s=yn(s):(a=rn(n)?Pt:Ke.current,r=n.contextTypes,s=(r=r!=null)?Gt(e,a):st),n=new n(t,s),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=na,e.stateNode=n,n._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=a,e.__reactInternalMemoizedMaskedChildContext=s),n}function rc(e,n,t,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,r),n.state!==e&&na.enqueueReplaceState(n,n.state,null)}function ol(e,n,t,r){var a=e.stateNode;a.props=t,a.state=e.memoizedState,a.refs={},Hi(e);var s=n.contextType;typeof s=="object"&&s!==null?a.context=yn(s):(s=rn(n)?Pt:Ke.current,a.context=Gt(e,s)),a.state=e.memoizedState,s=n.getDerivedStateFromProps,typeof s=="function"&&(rl(e,n,s,t),a.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(n=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),n!==a.state&&na.enqueueReplaceState(a,a.state,null),Ko(e,t,a,r),a.state=e.memoizedState),typeof a.componentDidMount=="function"&&(e.flags|=4194308)}function rr(e,n){try{var t="",r=n;do t+=ce(r),r=r.return;while(r);var a=t}catch(s){a=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:n,stack:a,digest:null}}function al(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function il(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var jp=typeof WeakMap=="function"?WeakMap:Map;function oc(e,n,t){t=Wn(-1,t),t.tag=3,t.payload={element:null};var r=n.value;return t.callback=function(){sa||(sa=!0,kl=r),il(e,n)},t}function ac(e,n,t){t=Wn(-1,t),t.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var a=n.value;t.payload=function(){return r(a)},t.callback=function(){il(e,n)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(t.callback=function(){il(e,n),typeof r!="function"&&(pt===null?pt=new Set([this]):pt.add(this));var d=n.stack;this.componentDidCatch(n.value,{componentStack:d!==null?d:""})}),t}function ic(e,n,t){var r=e.pingCache;if(r===null){r=e.pingCache=new jp;var a=new Set;r.set(n,a)}else a=r.get(n),a===void 0&&(a=new Set,r.set(n,a));a.has(t)||(a.add(t),e=Kp.bind(null,e,n,t),n.then(e,e))}function lc(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function sc(e,n,t,r,a){return(e.mode&1)===0?(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=Wn(-1,1),n.tag=2,dt(t,n,1))),t.lanes|=1),e):(e.flags|=65536,e.lanes=a,e)}var Mp=ae.ReactCurrentOwner,on=!1;function en(e,n,t,r){n.child=e===null?Ou(n,null,t,r):Zt(n,e.child,t,r)}function uc(e,n,t,r,a){t=t.render;var s=n.ref;return nr(n,a),r=Xi(e,n,t,r,s,a),t=Ji(),e!==null&&!on?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a,Qn(e,n,a)):(Ce&&t&&ji(n),n.flags|=1,en(e,n,r,a),n.child)}function cc(e,n,t,r,a){if(e===null){var s=t.type;return typeof s=="function"&&!Ol(s)&&s.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=s,dc(e,n,s,r,a)):(e=ha(t.type,null,r,n,n.mode,a),e.ref=n.ref,e.return=n,n.child=e)}if(s=e.child,(e.lanes&a)===0){var d=s.memoizedProps;if(t=t.compare,t=t!==null?t:Dr,t(d,r)&&e.ref===n.ref)return Qn(e,n,a)}return n.flags|=1,e=vt(s,r),e.ref=n.ref,e.return=n,n.child=e}function dc(e,n,t,r,a){if(e!==null){var s=e.memoizedProps;if(Dr(s,r)&&e.ref===n.ref)if(on=!1,n.pendingProps=r=s,(e.lanes&a)!==0)(e.flags&131072)!==0&&(on=!0);else return n.lanes=e.lanes,Qn(e,n,a)}return ll(e,n,t,r,a)}function fc(e,n,t){var r=n.pendingProps,a=r.children,s=e!==null?e.memoizedState:null;if(r.mode==="hidden")if((n.mode&1)===0)n.memoizedState={baseLanes:0,cachePool:null,transitions:null},we(ar,pn),pn|=t;else{if((t&1073741824)===0)return e=s!==null?s.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,we(ar,pn),pn|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:t,we(ar,pn),pn|=r}else s!==null?(r=s.baseLanes|t,n.memoizedState=null):r=t,we(ar,pn),pn|=r;return en(e,n,a,t),n.child}function pc(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function ll(e,n,t,r,a){var s=rn(t)?Pt:Ke.current;return s=Gt(n,s),nr(n,a),t=Xi(e,n,t,r,s,a),r=Ji(),e!==null&&!on?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a,Qn(e,n,a)):(Ce&&r&&ji(n),n.flags|=1,en(e,n,t,a),n.child)}function hc(e,n,t,r,a){if(rn(t)){var s=!0;Io(n)}else s=!1;if(nr(n,a),n.stateNode===null)ra(e,n),tc(n,t,r),ol(n,t,r,a),r=!0;else if(e===null){var d=n.stateNode,h=n.memoizedProps;d.props=h;var g=d.context,C=t.contextType;typeof C=="object"&&C!==null?C=yn(C):(C=rn(t)?Pt:Ke.current,C=Gt(n,C));var j=t.getDerivedStateFromProps,M=typeof j=="function"||typeof d.getSnapshotBeforeUpdate=="function";M||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(h!==r||g!==C)&&rc(n,d,r,C),ct=!1;var L=n.memoizedState;d.state=L,Ko(n,r,d,a),g=n.memoizedState,h!==r||L!==g||tn.current||ct?(typeof j=="function"&&(rl(n,t,j,r),g=n.memoizedState),(h=ct||nc(n,t,h,r,L,g,C))?(M||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(n.flags|=4194308)):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=g),d.props=r,d.state=g,d.context=C,r=h):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{d=n.stateNode,Ru(e,n),h=n.memoizedProps,C=n.type===n.elementType?h:En(n.type,h),d.props=C,M=n.pendingProps,L=d.context,g=t.contextType,typeof g=="object"&&g!==null?g=yn(g):(g=rn(t)?Pt:Ke.current,g=Gt(n,g));var B=t.getDerivedStateFromProps;(j=typeof B=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(h!==M||L!==g)&&rc(n,d,r,g),ct=!1,L=n.memoizedState,d.state=L,Ko(n,r,d,a);var W=n.memoizedState;h!==M||L!==W||tn.current||ct?(typeof B=="function"&&(rl(n,t,B,r),W=n.memoizedState),(C=ct||nc(n,t,C,r,L,W,g)||!1)?(j||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(r,W,g),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(r,W,g)),typeof d.componentDidUpdate=="function"&&(n.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof d.componentDidUpdate!="function"||h===e.memoizedProps&&L===e.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||h===e.memoizedProps&&L===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=W),d.props=r,d.state=W,d.context=g,r=C):(typeof d.componentDidUpdate!="function"||h===e.memoizedProps&&L===e.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||h===e.memoizedProps&&L===e.memoizedState||(n.flags|=1024),r=!1)}return sl(e,n,t,r,s,a)}function sl(e,n,t,r,a,s){pc(e,n);var d=(n.flags&128)!==0;if(!r&&!d)return a&&bu(n,t,!1),Qn(e,n,s);r=n.stateNode,Mp.current=n;var h=d&&typeof t.getDerivedStateFromError!="function"?null:r.render();return n.flags|=1,e!==null&&d?(n.child=Zt(n,e.child,null,s),n.child=Zt(n,null,h,s)):en(e,n,h,s),n.memoizedState=r.state,a&&bu(n,t,!0),n.child}function mc(e){var n=e.stateNode;n.pendingContext?vu(e,n.pendingContext,n.pendingContext!==n.context):n.context&&vu(e,n.context,!1),Wi(e,n.containerInfo)}function gc(e,n,t,r,a){return Jt(),Fi(a),n.flags|=256,en(e,n,t,r),n.child}var ul={dehydrated:null,treeContext:null,retryLane:0};function cl(e){return{baseLanes:e,cachePool:null,transitions:null}}function vc(e,n,t){var r=n.pendingProps,a=Oe.current,s=!1,d=(n.flags&128)!==0,h;if((h=d)||(h=e!==null&&e.memoizedState===null?!1:(a&2)!==0),h?(s=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(a|=1),we(Oe,a&1),e===null)return Ai(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((n.mode&1)===0?n.lanes=1:e.data==="$!"?n.lanes=8:n.lanes=1073741824,null):(d=r.children,e=r.fallback,s?(r=n.mode,s=n.child,d={mode:"hidden",children:d},(r&1)===0&&s!==null?(s.childLanes=0,s.pendingProps=d):s=ma(d,r,0,null),e=jt(e,r,t,null),s.return=n,e.return=n,s.sibling=e,n.child=s,n.child.memoizedState=cl(t),n.memoizedState=ul,e):dl(n,d));if(a=e.memoizedState,a!==null&&(h=a.dehydrated,h!==null))return Dp(e,n,d,r,h,a,t);if(s){s=r.fallback,d=n.mode,a=e.child,h=a.sibling;var g={mode:"hidden",children:r.children};return(d&1)===0&&n.child!==a?(r=n.child,r.childLanes=0,r.pendingProps=g,n.deletions=null):(r=vt(a,g),r.subtreeFlags=a.subtreeFlags&14680064),h!==null?s=vt(h,s):(s=jt(s,d,t,null),s.flags|=2),s.return=n,r.return=n,r.sibling=s,n.child=r,r=s,s=n.child,d=e.child.memoizedState,d=d===null?cl(t):{baseLanes:d.baseLanes|t,cachePool:null,transitions:d.transitions},s.memoizedState=d,s.childLanes=e.childLanes&~t,n.memoizedState=ul,r}return s=e.child,e=s.sibling,r=vt(s,{mode:"visible",children:r.children}),(n.mode&1)===0&&(r.lanes=t),r.return=n,r.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=r,n.memoizedState=null,r}function dl(e,n){return n=ma({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function ta(e,n,t,r){return r!==null&&Fi(r),Zt(n,e.child,null,t),e=dl(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Dp(e,n,t,r,a,s,d){if(t)return n.flags&256?(n.flags&=-257,r=al(Error(i(422))),ta(e,n,d,r)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(s=r.fallback,a=n.mode,r=ma({mode:"visible",children:r.children},a,0,null),s=jt(s,a,d,null),s.flags|=2,r.return=n,s.return=n,r.sibling=s,n.child=r,(n.mode&1)!==0&&Zt(n,e.child,null,d),n.child.memoizedState=cl(d),n.memoizedState=ul,s);if((n.mode&1)===0)return ta(e,n,d,null);if(a.data==="$!"){if(r=a.nextSibling&&a.nextSibling.dataset,r)var h=r.dgst;return r=h,s=Error(i(419)),r=al(s,r,void 0),ta(e,n,d,r)}if(h=(d&e.childLanes)!==0,on||h){if(r=$e,r!==null){switch(d&-d){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}a=(a&(r.suspendedLanes|d))!==0?0:a,a!==0&&a!==s.retryLane&&(s.retryLane=a,Hn(e,a),On(r,e,a,-1))}return _l(),r=al(Error(i(421))),ta(e,n,d,r)}return a.data==="$?"?(n.flags|=128,n.child=e.child,n=Gp.bind(null,e),a._reactRetry=n,null):(e=s.treeContext,fn=it(a.nextSibling),dn=n,Ce=!0,Pn=null,e!==null&&(gn[vn++]=$n,gn[vn++]=Vn,gn[vn++]=Et,$n=e.id,Vn=e.overflow,Et=n),n=dl(n,r.children),n.flags|=4096,n)}function yc(e,n,t){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),$i(e.return,n,t)}function fl(e,n,t,r,a){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:t,tailMode:a}:(s.isBackwards=n,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=t,s.tailMode=a)}function bc(e,n,t){var r=n.pendingProps,a=r.revealOrder,s=r.tail;if(en(e,n,r.children,t),r=Oe.current,(r&2)!==0)r=r&1|2,n.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&yc(e,t,n);else if(e.tag===19)yc(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(we(Oe,r),(n.mode&1)===0)n.memoizedState=null;else switch(a){case"forwards":for(t=n.child,a=null;t!==null;)e=t.alternate,e!==null&&Go(e)===null&&(a=t),t=t.sibling;t=a,t===null?(a=n.child,n.child=null):(a=t.sibling,t.sibling=null),fl(n,!1,a,t,s);break;case"backwards":for(t=null,a=n.child,n.child=null;a!==null;){if(e=a.alternate,e!==null&&Go(e)===null){n.child=a;break}e=a.sibling,a.sibling=t,t=a,a=e}fl(n,!0,t,null,s);break;case"together":fl(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function ra(e,n){(n.mode&1)===0&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function Qn(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),Rt|=n.lanes,(t&n.childLanes)===0)return null;if(e!==null&&n.child!==e.child)throw Error(i(153));if(n.child!==null){for(e=n.child,t=vt(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=vt(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function Ap(e,n,t){switch(n.tag){case 3:mc(n),Jt();break;case 5:Lu(n);break;case 1:rn(n.type)&&Io(n);break;case 4:Wi(n,n.stateNode.containerInfo);break;case 10:var r=n.type._context,a=n.memoizedProps.value;we(Wo,r._currentValue),r._currentValue=a;break;case 13:if(r=n.memoizedState,r!==null)return r.dehydrated!==null?(we(Oe,Oe.current&1),n.flags|=128,null):(t&n.child.childLanes)!==0?vc(e,n,t):(we(Oe,Oe.current&1),e=Qn(e,n,t),e!==null?e.sibling:null);we(Oe,Oe.current&1);break;case 19:if(r=(t&n.childLanes)!==0,(e.flags&128)!==0){if(r)return bc(e,n,t);n.flags|=128}if(a=n.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),we(Oe,Oe.current),r)break;return null;case 22:case 23:return n.lanes=0,fc(e,n,t)}return Qn(e,n,t)}var xc,pl,kc,wc;xc=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}},pl=function(){},kc=function(e,n,t,r){var a=e.memoizedProps;if(a!==r){e=n.stateNode,Ot(Dn.current);var s=null;switch(t){case"input":a=$a(e,a),r=$a(e,r),s=[];break;case"select":a=$({},a,{value:void 0}),r=$({},r,{value:void 0}),s=[];break;case"textarea":a=Wa(e,a),r=Wa(e,r),s=[];break;default:typeof a.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Do)}qa(t,r);var d;t=null;for(C in a)if(!r.hasOwnProperty(C)&&a.hasOwnProperty(C)&&a[C]!=null)if(C==="style"){var h=a[C];for(d in h)h.hasOwnProperty(d)&&(t||(t={}),t[d]="")}else C!=="dangerouslySetInnerHTML"&&C!=="children"&&C!=="suppressContentEditableWarning"&&C!=="suppressHydrationWarning"&&C!=="autoFocus"&&(c.hasOwnProperty(C)?s||(s=[]):(s=s||[]).push(C,null));for(C in r){var g=r[C];if(h=a?.[C],r.hasOwnProperty(C)&&g!==h&&(g!=null||h!=null))if(C==="style")if(h){for(d in h)!h.hasOwnProperty(d)||g&&g.hasOwnProperty(d)||(t||(t={}),t[d]="");for(d in g)g.hasOwnProperty(d)&&h[d]!==g[d]&&(t||(t={}),t[d]=g[d])}else t||(s||(s=[]),s.push(C,t)),t=g;else C==="dangerouslySetInnerHTML"?(g=g?g.__html:void 0,h=h?h.__html:void 0,g!=null&&h!==g&&(s=s||[]).push(C,g)):C==="children"?typeof g!="string"&&typeof g!="number"||(s=s||[]).push(C,""+g):C!=="suppressContentEditableWarning"&&C!=="suppressHydrationWarning"&&(c.hasOwnProperty(C)?(g!=null&&C==="onScroll"&&Se("scroll",e),s||h===g||(s=[])):(s=s||[]).push(C,g))}t&&(s=s||[]).push("style",t);var C=s;(n.updateQueue=C)&&(n.flags|=4)}},wc=function(e,n,t,r){t!==r&&(n.flags|=4)};function Xr(e,n){if(!Ce)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ye(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,r=0;if(n)for(var a=e.child;a!==null;)t|=a.lanes|a.childLanes,r|=a.subtreeFlags&14680064,r|=a.flags&14680064,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)t|=a.lanes|a.childLanes,r|=a.subtreeFlags,r|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=r,e.childLanes=t,n}function Fp(e,n,t){var r=n.pendingProps;switch(Mi(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ye(n),null;case 1:return rn(n.type)&&Fo(),Ye(n),null;case 3:return r=n.stateNode,tr(),Pe(tn),Pe(Ke),Ki(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Vo(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Pn!==null&&(Pl(Pn),Pn=null))),pl(e,n),Ye(n),null;case 5:Qi(n);var a=Ot(Qr.current);if(t=n.type,e!==null&&n.stateNode!=null)kc(e,n,t,r,a),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!r){if(n.stateNode===null)throw Error(i(166));return Ye(n),null}if(e=Ot(Dn.current),Vo(n)){r=n.stateNode,t=n.type;var s=n.memoizedProps;switch(r[Mn]=n,r[Ur]=s,e=(n.mode&1)!==0,t){case"dialog":Se("cancel",r),Se("close",r);break;case"iframe":case"object":case"embed":Se("load",r);break;case"video":case"audio":for(a=0;a<Fr.length;a++)Se(Fr[a],r);break;case"source":Se("error",r);break;case"img":case"image":case"link":Se("error",r),Se("load",r);break;case"details":Se("toggle",r);break;case"input":ts(r,s),Se("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Se("invalid",r);break;case"textarea":as(r,s),Se("invalid",r)}qa(t,s),a=null;for(var d in s)if(s.hasOwnProperty(d)){var h=s[d];d==="children"?typeof h=="string"?r.textContent!==h&&(s.suppressHydrationWarning!==!0&&Mo(r.textContent,h,e),a=["children",h]):typeof h=="number"&&r.textContent!==""+h&&(s.suppressHydrationWarning!==!0&&Mo(r.textContent,h,e),a=["children",""+h]):c.hasOwnProperty(d)&&h!=null&&d==="onScroll"&&Se("scroll",r)}switch(t){case"input":Zn(r),os(r,s,!0);break;case"textarea":Zn(r),ls(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Do)}r=a,n.updateQueue=r,r!==null&&(n.flags|=4)}else{d=a.nodeType===9?a:a.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=ss(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=d.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=d.createElement(t,{is:r.is}):(e=d.createElement(t),t==="select"&&(d=e,r.multiple?d.multiple=!0:r.size&&(d.size=r.size))):e=d.createElementNS(e,t),e[Mn]=n,e[Ur]=r,xc(e,n,!1,!1),n.stateNode=e;e:{switch(d=Ka(t,r),t){case"dialog":Se("cancel",e),Se("close",e),a=r;break;case"iframe":case"object":case"embed":Se("load",e),a=r;break;case"video":case"audio":for(a=0;a<Fr.length;a++)Se(Fr[a],e);a=r;break;case"source":Se("error",e),a=r;break;case"img":case"image":case"link":Se("error",e),Se("load",e),a=r;break;case"details":Se("toggle",e),a=r;break;case"input":ts(e,r),a=$a(e,r),Se("invalid",e);break;case"option":a=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},a=$({},r,{value:void 0}),Se("invalid",e);break;case"textarea":as(e,r),a=Wa(e,r),Se("invalid",e);break;default:a=r}qa(t,a),h=a;for(s in h)if(h.hasOwnProperty(s)){var g=h[s];s==="style"?ds(e,g):s==="dangerouslySetInnerHTML"?(g=g?g.__html:void 0,g!=null&&us(e,g)):s==="children"?typeof g=="string"?(t!=="textarea"||g!=="")&&br(e,g):typeof g=="number"&&br(e,""+g):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(c.hasOwnProperty(s)?g!=null&&s==="onScroll"&&Se("scroll",e):g!=null&&K(e,s,g,d))}switch(t){case"input":Zn(e),os(e,r,!1);break;case"textarea":Zn(e),ls(e);break;case"option":r.value!=null&&e.setAttribute("value",""+me(r.value));break;case"select":e.multiple=!!r.multiple,s=r.value,s!=null?At(e,!!r.multiple,s,!1):r.defaultValue!=null&&At(e,!!r.multiple,r.defaultValue,!0);break;default:typeof a.onClick=="function"&&(e.onclick=Do)}switch(t){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return Ye(n),null;case 6:if(e&&n.stateNode!=null)wc(e,n,e.memoizedProps,r);else{if(typeof r!="string"&&n.stateNode===null)throw Error(i(166));if(t=Ot(Qr.current),Ot(Dn.current),Vo(n)){if(r=n.stateNode,t=n.memoizedProps,r[Mn]=n,(s=r.nodeValue!==t)&&(e=dn,e!==null))switch(e.tag){case 3:Mo(r.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Mo(r.nodeValue,t,(e.mode&1)!==0)}s&&(n.flags|=4)}else r=(t.nodeType===9?t:t.ownerDocument).createTextNode(r),r[Mn]=n,n.stateNode=r}return Ye(n),null;case 13:if(Pe(Oe),r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Ce&&fn!==null&&(n.mode&1)!==0&&(n.flags&128)===0)Eu(),Jt(),n.flags|=98560,s=!1;else if(s=Vo(n),r!==null&&r.dehydrated!==null){if(e===null){if(!s)throw Error(i(318));if(s=n.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(i(317));s[Mn]=n}else Jt(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ye(n),s=!1}else Pn!==null&&(Pl(Pn),Pn=null),s=!0;if(!s)return n.flags&65536?n:null}return(n.flags&128)!==0?(n.lanes=t,n):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(n.child.flags|=8192,(n.mode&1)!==0&&(e===null||(Oe.current&1)!==0?Ae===0&&(Ae=3):_l())),n.updateQueue!==null&&(n.flags|=4),Ye(n),null);case 4:return tr(),pl(e,n),e===null&&Ir(n.stateNode.containerInfo),Ye(n),null;case 10:return Ui(n.type._context),Ye(n),null;case 17:return rn(n.type)&&Fo(),Ye(n),null;case 19:if(Pe(Oe),s=n.memoizedState,s===null)return Ye(n),null;if(r=(n.flags&128)!==0,d=s.rendering,d===null)if(r)Xr(s,!1);else{if(Ae!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(d=Go(e),d!==null){for(n.flags|=128,Xr(s,!1),r=d.updateQueue,r!==null&&(n.updateQueue=r,n.flags|=4),n.subtreeFlags=0,r=t,t=n.child;t!==null;)s=t,e=r,s.flags&=14680066,d=s.alternate,d===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=d.childLanes,s.lanes=d.lanes,s.child=d.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=d.memoizedProps,s.memoizedState=d.memoizedState,s.updateQueue=d.updateQueue,s.type=d.type,e=d.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return we(Oe,Oe.current&1|2),n.child}e=e.sibling}s.tail!==null&&Te()>ir&&(n.flags|=128,r=!0,Xr(s,!1),n.lanes=4194304)}else{if(!r)if(e=Go(d),e!==null){if(n.flags|=128,r=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),Xr(s,!0),s.tail===null&&s.tailMode==="hidden"&&!d.alternate&&!Ce)return Ye(n),null}else 2*Te()-s.renderingStartTime>ir&&t!==1073741824&&(n.flags|=128,r=!0,Xr(s,!1),n.lanes=4194304);s.isBackwards?(d.sibling=n.child,n.child=d):(t=s.last,t!==null?t.sibling=d:n.child=d,s.last=d)}return s.tail!==null?(n=s.tail,s.rendering=n,s.tail=n.sibling,s.renderingStartTime=Te(),n.sibling=null,t=Oe.current,we(Oe,r?t&1|2:t&1),n):(Ye(n),null);case 22:case 23:return Cl(),r=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(n.flags|=8192),r&&(n.mode&1)!==0?(pn&1073741824)!==0&&(Ye(n),n.subtreeFlags&6&&(n.flags|=8192)):Ye(n),null;case 24:return null;case 25:return null}throw Error(i(156,n.tag))}function Ip(e,n){switch(Mi(n),n.tag){case 1:return rn(n.type)&&Fo(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return tr(),Pe(tn),Pe(Ke),Ki(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 5:return Qi(n),null;case 13:if(Pe(Oe),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(i(340));Jt()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return Pe(Oe),null;case 4:return tr(),null;case 10:return Ui(n.type._context),null;case 22:case 23:return Cl(),null;case 24:return null;default:return null}}var oa=!1,Xe=!1,Bp=typeof WeakSet=="function"?WeakSet:Set,H=null;function or(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(r){ze(e,n,r)}else t.current=null}function hl(e,n,t){try{t()}catch(r){ze(e,n,r)}}var Sc=!1;function Up(e,n){if(Ci=Po,e=nu(),yi(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var r=t.getSelection&&t.getSelection();if(r&&r.rangeCount!==0){t=r.anchorNode;var a=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{t.nodeType,s.nodeType}catch{t=null;break e}var d=0,h=-1,g=-1,C=0,j=0,M=e,L=null;n:for(;;){for(var B;M!==t||a!==0&&M.nodeType!==3||(h=d+a),M!==s||r!==0&&M.nodeType!==3||(g=d+r),M.nodeType===3&&(d+=M.nodeValue.length),(B=M.firstChild)!==null;)L=M,M=B;for(;;){if(M===e)break n;if(L===t&&++C===a&&(h=d),L===s&&++j===r&&(g=d),(B=M.nextSibling)!==null)break;M=L,L=M.parentNode}M=B}t=h===-1||g===-1?null:{start:h,end:g}}else t=null}t=t||{start:0,end:0}}else t=null;for(_i={focusedElem:e,selectionRange:t},Po=!1,H=n;H!==null;)if(n=H,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,H=e;else for(;H!==null;){n=H;try{var W=n.alternate;if((n.flags&1024)!==0)switch(n.tag){case 0:case 11:case 15:break;case 1:if(W!==null){var G=W.memoizedProps,Le=W.memoizedState,k=n.stateNode,b=k.getSnapshotBeforeUpdate(n.elementType===n.type?G:En(n.type,G),Le);k.__reactInternalSnapshotBeforeUpdate=b}break;case 3:var P=n.stateNode.containerInfo;P.nodeType===1?P.textContent="":P.nodeType===9&&P.documentElement&&P.removeChild(P.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(i(163))}}catch(A){ze(n,n.return,A)}if(e=n.sibling,e!==null){e.return=n.return,H=e;break}H=n.return}return W=Sc,Sc=!1,W}function Jr(e,n,t){var r=n.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var a=r=r.next;do{if((a.tag&e)===e){var s=a.destroy;a.destroy=void 0,s!==void 0&&hl(n,t,s)}a=a.next}while(a!==r)}}function aa(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var r=t.create;t.destroy=r()}t=t.next}while(t!==n)}}function ml(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function Pc(e){var n=e.alternate;n!==null&&(e.alternate=null,Pc(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[Mn],delete n[Ur],delete n[zi],delete n[Sp],delete n[Pp])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Ec(e){return e.tag===5||e.tag===3||e.tag===4}function Cc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Ec(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function gl(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=Do));else if(r!==4&&(e=e.child,e!==null))for(gl(e,n,t),e=e.sibling;e!==null;)gl(e,n,t),e=e.sibling}function vl(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(vl(e,n,t),e=e.sibling;e!==null;)vl(e,n,t),e=e.sibling}var We=null,Cn=!1;function ft(e,n,t){for(t=t.child;t!==null;)_c(e,n,t),t=t.sibling}function _c(e,n,t){if(jn&&typeof jn.onCommitFiberUnmount=="function")try{jn.onCommitFiberUnmount(yo,t)}catch{}switch(t.tag){case 5:Xe||or(t,n);case 6:var r=We,a=Cn;We=null,ft(e,n,t),We=r,Cn=a,We!==null&&(Cn?(e=We,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):We.removeChild(t.stateNode));break;case 18:We!==null&&(Cn?(e=We,t=t.stateNode,e.nodeType===8?Ri(e.parentNode,t):e.nodeType===1&&Ri(e,t),Rr(e)):Ri(We,t.stateNode));break;case 4:r=We,a=Cn,We=t.stateNode.containerInfo,Cn=!0,ft(e,n,t),We=r,Cn=a;break;case 0:case 11:case 14:case 15:if(!Xe&&(r=t.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){a=r=r.next;do{var s=a,d=s.destroy;s=s.tag,d!==void 0&&((s&2)!==0||(s&4)!==0)&&hl(t,n,d),a=a.next}while(a!==r)}ft(e,n,t);break;case 1:if(!Xe&&(or(t,n),r=t.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=t.memoizedProps,r.state=t.memoizedState,r.componentWillUnmount()}catch(h){ze(t,n,h)}ft(e,n,t);break;case 21:ft(e,n,t);break;case 22:t.mode&1?(Xe=(r=Xe)||t.memoizedState!==null,ft(e,n,t),Xe=r):ft(e,n,t);break;default:ft(e,n,t)}}function Oc(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new Bp),n.forEach(function(r){var a=Yp.bind(null,e,r);t.has(r)||(t.add(r),r.then(a,a))})}}function _n(e,n){var t=n.deletions;if(t!==null)for(var r=0;r<t.length;r++){var a=t[r];try{var s=e,d=n,h=d;e:for(;h!==null;){switch(h.tag){case 5:We=h.stateNode,Cn=!1;break e;case 3:We=h.stateNode.containerInfo,Cn=!0;break e;case 4:We=h.stateNode.containerInfo,Cn=!0;break e}h=h.return}if(We===null)throw Error(i(160));_c(s,d,a),We=null,Cn=!1;var g=a.alternate;g!==null&&(g.return=null),a.return=null}catch(C){ze(a,n,C)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)Nc(n,e),n=n.sibling}function Nc(e,n){var t=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(_n(n,e),Fn(e),r&4){try{Jr(3,e,e.return),aa(3,e)}catch(G){ze(e,e.return,G)}try{Jr(5,e,e.return)}catch(G){ze(e,e.return,G)}}break;case 1:_n(n,e),Fn(e),r&512&&t!==null&&or(t,t.return);break;case 5:if(_n(n,e),Fn(e),r&512&&t!==null&&or(t,t.return),e.flags&32){var a=e.stateNode;try{br(a,"")}catch(G){ze(e,e.return,G)}}if(r&4&&(a=e.stateNode,a!=null)){var s=e.memoizedProps,d=t!==null?t.memoizedProps:s,h=e.type,g=e.updateQueue;if(e.updateQueue=null,g!==null)try{h==="input"&&s.type==="radio"&&s.name!=null&&rs(a,s),Ka(h,d);var C=Ka(h,s);for(d=0;d<g.length;d+=2){var j=g[d],M=g[d+1];j==="style"?ds(a,M):j==="dangerouslySetInnerHTML"?us(a,M):j==="children"?br(a,M):K(a,j,M,C)}switch(h){case"input":Va(a,s);break;case"textarea":is(a,s);break;case"select":var L=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!s.multiple;var B=s.value;B!=null?At(a,!!s.multiple,B,!1):L!==!!s.multiple&&(s.defaultValue!=null?At(a,!!s.multiple,s.defaultValue,!0):At(a,!!s.multiple,s.multiple?[]:"",!1))}a[Ur]=s}catch(G){ze(e,e.return,G)}}break;case 6:if(_n(n,e),Fn(e),r&4){if(e.stateNode===null)throw Error(i(162));a=e.stateNode,s=e.memoizedProps;try{a.nodeValue=s}catch(G){ze(e,e.return,G)}}break;case 3:if(_n(n,e),Fn(e),r&4&&t!==null&&t.memoizedState.isDehydrated)try{Rr(n.containerInfo)}catch(G){ze(e,e.return,G)}break;case 4:_n(n,e),Fn(e);break;case 13:_n(n,e),Fn(e),a=e.child,a.flags&8192&&(s=a.memoizedState!==null,a.stateNode.isHidden=s,!s||a.alternate!==null&&a.alternate.memoizedState!==null||(xl=Te())),r&4&&Oc(e);break;case 22:if(j=t!==null&&t.memoizedState!==null,e.mode&1?(Xe=(C=Xe)||j,_n(n,e),Xe=C):_n(n,e),Fn(e),r&8192){if(C=e.memoizedState!==null,(e.stateNode.isHidden=C)&&!j&&(e.mode&1)!==0)for(H=e,j=e.child;j!==null;){for(M=H=j;H!==null;){switch(L=H,B=L.child,L.tag){case 0:case 11:case 14:case 15:Jr(4,L,L.return);break;case 1:or(L,L.return);var W=L.stateNode;if(typeof W.componentWillUnmount=="function"){r=L,t=L.return;try{n=r,W.props=n.memoizedProps,W.state=n.memoizedState,W.componentWillUnmount()}catch(G){ze(r,t,G)}}break;case 5:or(L,L.return);break;case 22:if(L.memoizedState!==null){Tc(M);continue}}B!==null?(B.return=L,H=B):Tc(M)}j=j.sibling}e:for(j=null,M=e;;){if(M.tag===5){if(j===null){j=M;try{a=M.stateNode,C?(s=a.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(h=M.stateNode,g=M.memoizedProps.style,d=g!=null&&g.hasOwnProperty("display")?g.display:null,h.style.display=cs("display",d))}catch(G){ze(e,e.return,G)}}}else if(M.tag===6){if(j===null)try{M.stateNode.nodeValue=C?"":M.memoizedProps}catch(G){ze(e,e.return,G)}}else if((M.tag!==22&&M.tag!==23||M.memoizedState===null||M===e)&&M.child!==null){M.child.return=M,M=M.child;continue}if(M===e)break e;for(;M.sibling===null;){if(M.return===null||M.return===e)break e;j===M&&(j=null),M=M.return}j===M&&(j=null),M.sibling.return=M.return,M=M.sibling}}break;case 19:_n(n,e),Fn(e),r&4&&Oc(e);break;case 21:break;default:_n(n,e),Fn(e)}}function Fn(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(Ec(t)){var r=t;break e}t=t.return}throw Error(i(160))}switch(r.tag){case 5:var a=r.stateNode;r.flags&32&&(br(a,""),r.flags&=-33);var s=Cc(e);vl(e,s,a);break;case 3:case 4:var d=r.stateNode.containerInfo,h=Cc(e);gl(e,h,d);break;default:throw Error(i(161))}}catch(g){ze(e,e.return,g)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function $p(e,n,t){H=e,Rc(e)}function Rc(e,n,t){for(var r=(e.mode&1)!==0;H!==null;){var a=H,s=a.child;if(a.tag===22&&r){var d=a.memoizedState!==null||oa;if(!d){var h=a.alternate,g=h!==null&&h.memoizedState!==null||Xe;h=oa;var C=Xe;if(oa=d,(Xe=g)&&!C)for(H=a;H!==null;)d=H,g=d.child,d.tag===22&&d.memoizedState!==null?Lc(a):g!==null?(g.return=d,H=g):Lc(a);for(;s!==null;)H=s,Rc(s),s=s.sibling;H=a,oa=h,Xe=C}zc(e)}else(a.subtreeFlags&8772)!==0&&s!==null?(s.return=a,H=s):zc(e)}}function zc(e){for(;H!==null;){var n=H;if((n.flags&8772)!==0){var t=n.alternate;try{if((n.flags&8772)!==0)switch(n.tag){case 0:case 11:case 15:Xe||aa(5,n);break;case 1:var r=n.stateNode;if(n.flags&4&&!Xe)if(t===null)r.componentDidMount();else{var a=n.elementType===n.type?t.memoizedProps:En(n.type,t.memoizedProps);r.componentDidUpdate(a,t.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=n.updateQueue;s!==null&&Tu(n,s,r);break;case 3:var d=n.updateQueue;if(d!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}Tu(n,d,t)}break;case 5:var h=n.stateNode;if(t===null&&n.flags&4){t=h;var g=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":g.autoFocus&&t.focus();break;case"img":g.src&&(t.src=g.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var C=n.alternate;if(C!==null){var j=C.memoizedState;if(j!==null){var M=j.dehydrated;M!==null&&Rr(M)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(i(163))}Xe||n.flags&512&&ml(n)}catch(L){ze(n,n.return,L)}}if(n===e){H=null;break}if(t=n.sibling,t!==null){t.return=n.return,H=t;break}H=n.return}}function Tc(e){for(;H!==null;){var n=H;if(n===e){H=null;break}var t=n.sibling;if(t!==null){t.return=n.return,H=t;break}H=n.return}}function Lc(e){for(;H!==null;){var n=H;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{aa(4,n)}catch(g){ze(n,t,g)}break;case 1:var r=n.stateNode;if(typeof r.componentDidMount=="function"){var a=n.return;try{r.componentDidMount()}catch(g){ze(n,a,g)}}var s=n.return;try{ml(n)}catch(g){ze(n,s,g)}break;case 5:var d=n.return;try{ml(n)}catch(g){ze(n,d,g)}}}catch(g){ze(n,n.return,g)}if(n===e){H=null;break}var h=n.sibling;if(h!==null){h.return=n.return,H=h;break}H=n.return}}var Vp=Math.ceil,ia=ae.ReactCurrentDispatcher,yl=ae.ReactCurrentOwner,xn=ae.ReactCurrentBatchConfig,he=0,$e=null,je=null,Qe=0,pn=0,ar=lt(0),Ae=0,Zr=null,Rt=0,la=0,bl=0,eo=null,an=null,xl=0,ir=1/0,qn=null,sa=!1,kl=null,pt=null,ua=!1,ht=null,ca=0,no=0,wl=null,da=-1,fa=0;function nn(){return(he&6)!==0?Te():da!==-1?da:da=Te()}function mt(e){return(e.mode&1)===0?1:(he&2)!==0&&Qe!==0?Qe&-Qe:Cp.transition!==null?(fa===0&&(fa=Cs()),fa):(e=xe,e!==0||(e=window.event,e=e===void 0?16:Ms(e.type)),e)}function On(e,n,t,r){if(50<no)throw no=0,wl=null,Error(i(185));Er(e,t,r),((he&2)===0||e!==$e)&&(e===$e&&((he&2)===0&&(la|=t),Ae===4&&gt(e,Qe)),ln(e,r),t===1&&he===0&&(n.mode&1)===0&&(ir=Te()+500,Bo&&ut()))}function ln(e,n){var t=e.callbackNode;Cf(e,n);var r=ko(e,e===$e?Qe:0);if(r===0)t!==null&&Ss(t),e.callbackNode=null,e.callbackPriority=0;else if(n=r&-r,e.callbackPriority!==n){if(t!=null&&Ss(t),n===1)e.tag===0?Ep(Mc.bind(null,e)):xu(Mc.bind(null,e)),kp(function(){(he&6)===0&&ut()}),t=null;else{switch(_s(r)){case 1:t=ni;break;case 4:t=Ps;break;case 16:t=vo;break;case 536870912:t=Es;break;default:t=vo}t=Vc(t,jc.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function jc(e,n){if(da=-1,fa=0,(he&6)!==0)throw Error(i(327));var t=e.callbackNode;if(lr()&&e.callbackNode!==t)return null;var r=ko(e,e===$e?Qe:0);if(r===0)return null;if((r&30)!==0||(r&e.expiredLanes)!==0||n)n=pa(e,r);else{n=r;var a=he;he|=2;var s=Ac();($e!==e||Qe!==n)&&(qn=null,ir=Te()+500,Tt(e,n));do try{Qp();break}catch(h){Dc(e,h)}while(!0);Bi(),ia.current=s,he=a,je!==null?n=0:($e=null,Qe=0,n=Ae)}if(n!==0){if(n===2&&(a=ti(e),a!==0&&(r=a,n=Sl(e,a))),n===1)throw t=Zr,Tt(e,0),gt(e,r),ln(e,Te()),t;if(n===6)gt(e,r);else{if(a=e.current.alternate,(r&30)===0&&!Hp(a)&&(n=pa(e,r),n===2&&(s=ti(e),s!==0&&(r=s,n=Sl(e,s))),n===1))throw t=Zr,Tt(e,0),gt(e,r),ln(e,Te()),t;switch(e.finishedWork=a,e.finishedLanes=r,n){case 0:case 1:throw Error(i(345));case 2:Lt(e,an,qn);break;case 3:if(gt(e,r),(r&130023424)===r&&(n=xl+500-Te(),10<n)){if(ko(e,0)!==0)break;if(a=e.suspendedLanes,(a&r)!==r){nn(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=Ni(Lt.bind(null,e,an,qn),n);break}Lt(e,an,qn);break;case 4:if(gt(e,r),(r&4194240)===r)break;for(n=e.eventTimes,a=-1;0<r;){var d=31-wn(r);s=1<<d,d=n[d],d>a&&(a=d),r&=~s}if(r=a,r=Te()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Vp(r/1960))-r,10<r){e.timeoutHandle=Ni(Lt.bind(null,e,an,qn),r);break}Lt(e,an,qn);break;case 5:Lt(e,an,qn);break;default:throw Error(i(329))}}}return ln(e,Te()),e.callbackNode===t?jc.bind(null,e):null}function Sl(e,n){var t=eo;return e.current.memoizedState.isDehydrated&&(Tt(e,n).flags|=256),e=pa(e,n),e!==2&&(n=an,an=t,n!==null&&Pl(n)),e}function Pl(e){an===null?an=e:an.push.apply(an,e)}function Hp(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var r=0;r<t.length;r++){var a=t[r],s=a.getSnapshot;a=a.value;try{if(!Sn(s(),a))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function gt(e,n){for(n&=~bl,n&=~la,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-wn(n),r=1<<t;e[t]=-1,n&=~r}}function Mc(e){if((he&6)!==0)throw Error(i(327));lr();var n=ko(e,0);if((n&1)===0)return ln(e,Te()),null;var t=pa(e,n);if(e.tag!==0&&t===2){var r=ti(e);r!==0&&(n=r,t=Sl(e,r))}if(t===1)throw t=Zr,Tt(e,0),gt(e,n),ln(e,Te()),t;if(t===6)throw Error(i(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,Lt(e,an,qn),ln(e,Te()),null}function El(e,n){var t=he;he|=1;try{return e(n)}finally{he=t,he===0&&(ir=Te()+500,Bo&&ut())}}function zt(e){ht!==null&&ht.tag===0&&(he&6)===0&&lr();var n=he;he|=1;var t=xn.transition,r=xe;try{if(xn.transition=null,xe=1,e)return e()}finally{xe=r,xn.transition=t,he=n,(he&6)===0&&ut()}}function Cl(){pn=ar.current,Pe(ar)}function Tt(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,xp(t)),je!==null)for(t=je.return;t!==null;){var r=t;switch(Mi(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Fo();break;case 3:tr(),Pe(tn),Pe(Ke),Ki();break;case 5:Qi(r);break;case 4:tr();break;case 13:Pe(Oe);break;case 19:Pe(Oe);break;case 10:Ui(r.type._context);break;case 22:case 23:Cl()}t=t.return}if($e=e,je=e=vt(e.current,null),Qe=pn=n,Ae=0,Zr=null,bl=la=Rt=0,an=eo=null,_t!==null){for(n=0;n<_t.length;n++)if(t=_t[n],r=t.interleaved,r!==null){t.interleaved=null;var a=r.next,s=t.pending;if(s!==null){var d=s.next;s.next=a,r.next=d}t.pending=r}_t=null}return e}function Dc(e,n){do{var t=je;try{if(Bi(),Yo.current=ea,Xo){for(var r=Ne.memoizedState;r!==null;){var a=r.queue;a!==null&&(a.pending=null),r=r.next}Xo=!1}if(Nt=0,Ue=De=Ne=null,qr=!1,Kr=0,yl.current=null,t===null||t.return===null){Ae=1,Zr=n,je=null;break}e:{var s=e,d=t.return,h=t,g=n;if(n=Qe,h.flags|=32768,g!==null&&typeof g=="object"&&typeof g.then=="function"){var C=g,j=h,M=j.tag;if((j.mode&1)===0&&(M===0||M===11||M===15)){var L=j.alternate;L?(j.updateQueue=L.updateQueue,j.memoizedState=L.memoizedState,j.lanes=L.lanes):(j.updateQueue=null,j.memoizedState=null)}var B=lc(d);if(B!==null){B.flags&=-257,sc(B,d,h,s,n),B.mode&1&&ic(s,C,n),n=B,g=C;var W=n.updateQueue;if(W===null){var G=new Set;G.add(g),n.updateQueue=G}else W.add(g);break e}else{if((n&1)===0){ic(s,C,n),_l();break e}g=Error(i(426))}}else if(Ce&&h.mode&1){var Le=lc(d);if(Le!==null){(Le.flags&65536)===0&&(Le.flags|=256),sc(Le,d,h,s,n),Fi(rr(g,h));break e}}s=g=rr(g,h),Ae!==4&&(Ae=2),eo===null?eo=[s]:eo.push(s),s=d;do{switch(s.tag){case 3:s.flags|=65536,n&=-n,s.lanes|=n;var k=oc(s,g,n);zu(s,k);break e;case 1:h=g;var b=s.type,P=s.stateNode;if((s.flags&128)===0&&(typeof b.getDerivedStateFromError=="function"||P!==null&&typeof P.componentDidCatch=="function"&&(pt===null||!pt.has(P)))){s.flags|=65536,n&=-n,s.lanes|=n;var A=ac(s,h,n);zu(s,A);break e}}s=s.return}while(s!==null)}Ic(t)}catch(Y){n=Y,je===t&&t!==null&&(je=t=t.return);continue}break}while(!0)}function Ac(){var e=ia.current;return ia.current=ea,e===null?ea:e}function _l(){(Ae===0||Ae===3||Ae===2)&&(Ae=4),$e===null||(Rt&268435455)===0&&(la&268435455)===0||gt($e,Qe)}function pa(e,n){var t=he;he|=2;var r=Ac();($e!==e||Qe!==n)&&(qn=null,Tt(e,n));do try{Wp();break}catch(a){Dc(e,a)}while(!0);if(Bi(),he=t,ia.current=r,je!==null)throw Error(i(261));return $e=null,Qe=0,Ae}function Wp(){for(;je!==null;)Fc(je)}function Qp(){for(;je!==null&&!vf();)Fc(je)}function Fc(e){var n=$c(e.alternate,e,pn);e.memoizedProps=e.pendingProps,n===null?Ic(e):je=n,yl.current=null}function Ic(e){var n=e;do{var t=n.alternate;if(e=n.return,(n.flags&32768)===0){if(t=Fp(t,n,pn),t!==null){je=t;return}}else{if(t=Ip(t,n),t!==null){t.flags&=32767,je=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ae=6,je=null;return}}if(n=n.sibling,n!==null){je=n;return}je=n=e}while(n!==null);Ae===0&&(Ae=5)}function Lt(e,n,t){var r=xe,a=xn.transition;try{xn.transition=null,xe=1,qp(e,n,t,r)}finally{xn.transition=a,xe=r}return null}function qp(e,n,t,r){do lr();while(ht!==null);if((he&6)!==0)throw Error(i(327));t=e.finishedWork;var a=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(i(177));e.callbackNode=null,e.callbackPriority=0;var s=t.lanes|t.childLanes;if(_f(e,s),e===$e&&(je=$e=null,Qe=0),(t.subtreeFlags&2064)===0&&(t.flags&2064)===0||ua||(ua=!0,Vc(vo,function(){return lr(),null})),s=(t.flags&15990)!==0,(t.subtreeFlags&15990)!==0||s){s=xn.transition,xn.transition=null;var d=xe;xe=1;var h=he;he|=4,yl.current=null,Up(e,t),Nc(t,e),pp(_i),Po=!!Ci,_i=Ci=null,e.current=t,$p(t),yf(),he=h,xe=d,xn.transition=s}else e.current=t;if(ua&&(ua=!1,ht=e,ca=a),s=e.pendingLanes,s===0&&(pt=null),kf(t.stateNode),ln(e,Te()),n!==null)for(r=e.onRecoverableError,t=0;t<n.length;t++)a=n[t],r(a.value,{componentStack:a.stack,digest:a.digest});if(sa)throw sa=!1,e=kl,kl=null,e;return(ca&1)!==0&&e.tag!==0&&lr(),s=e.pendingLanes,(s&1)!==0?e===wl?no++:(no=0,wl=e):no=0,ut(),null}function lr(){if(ht!==null){var e=_s(ca),n=xn.transition,t=xe;try{if(xn.transition=null,xe=16>e?16:e,ht===null)var r=!1;else{if(e=ht,ht=null,ca=0,(he&6)!==0)throw Error(i(331));var a=he;for(he|=4,H=e.current;H!==null;){var s=H,d=s.child;if((H.flags&16)!==0){var h=s.deletions;if(h!==null){for(var g=0;g<h.length;g++){var C=h[g];for(H=C;H!==null;){var j=H;switch(j.tag){case 0:case 11:case 15:Jr(8,j,s)}var M=j.child;if(M!==null)M.return=j,H=M;else for(;H!==null;){j=H;var L=j.sibling,B=j.return;if(Pc(j),j===C){H=null;break}if(L!==null){L.return=B,H=L;break}H=B}}}var W=s.alternate;if(W!==null){var G=W.child;if(G!==null){W.child=null;do{var Le=G.sibling;G.sibling=null,G=Le}while(G!==null)}}H=s}}if((s.subtreeFlags&2064)!==0&&d!==null)d.return=s,H=d;else e:for(;H!==null;){if(s=H,(s.flags&2048)!==0)switch(s.tag){case 0:case 11:case 15:Jr(9,s,s.return)}var k=s.sibling;if(k!==null){k.return=s.return,H=k;break e}H=s.return}}var b=e.current;for(H=b;H!==null;){d=H;var P=d.child;if((d.subtreeFlags&2064)!==0&&P!==null)P.return=d,H=P;else e:for(d=b;H!==null;){if(h=H,(h.flags&2048)!==0)try{switch(h.tag){case 0:case 11:case 15:aa(9,h)}}catch(Y){ze(h,h.return,Y)}if(h===d){H=null;break e}var A=h.sibling;if(A!==null){A.return=h.return,H=A;break e}H=h.return}}if(he=a,ut(),jn&&typeof jn.onPostCommitFiberRoot=="function")try{jn.onPostCommitFiberRoot(yo,e)}catch{}r=!0}return r}finally{xe=t,xn.transition=n}}return!1}function Bc(e,n,t){n=rr(t,n),n=oc(e,n,1),e=dt(e,n,1),n=nn(),e!==null&&(Er(e,1,n),ln(e,n))}function ze(e,n,t){if(e.tag===3)Bc(e,e,t);else for(;n!==null;){if(n.tag===3){Bc(n,e,t);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(pt===null||!pt.has(r))){e=rr(t,e),e=ac(n,e,1),n=dt(n,e,1),e=nn(),n!==null&&(Er(n,1,e),ln(n,e));break}}n=n.return}}function Kp(e,n,t){var r=e.pingCache;r!==null&&r.delete(n),n=nn(),e.pingedLanes|=e.suspendedLanes&t,$e===e&&(Qe&t)===t&&(Ae===4||Ae===3&&(Qe&130023424)===Qe&&500>Te()-xl?Tt(e,0):bl|=t),ln(e,n)}function Uc(e,n){n===0&&((e.mode&1)===0?n=1:(n=xo,xo<<=1,(xo&130023424)===0&&(xo=4194304)));var t=nn();e=Hn(e,n),e!==null&&(Er(e,n,t),ln(e,t))}function Gp(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),Uc(e,t)}function Yp(e,n){var t=0;switch(e.tag){case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(t=a.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(i(314))}r!==null&&r.delete(n),Uc(e,t)}var $c;$c=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||tn.current)on=!0;else{if((e.lanes&t)===0&&(n.flags&128)===0)return on=!1,Ap(e,n,t);on=(e.flags&131072)!==0}else on=!1,Ce&&(n.flags&1048576)!==0&&ku(n,$o,n.index);switch(n.lanes=0,n.tag){case 2:var r=n.type;ra(e,n),e=n.pendingProps;var a=Gt(n,Ke.current);nr(n,t),a=Xi(null,n,r,e,a,t);var s=Ji();return n.flags|=1,typeof a=="object"&&a!==null&&typeof a.render=="function"&&a.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,rn(r)?(s=!0,Io(n)):s=!1,n.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,Hi(n),a.updater=na,n.stateNode=a,a._reactInternals=n,ol(n,r,e,t),n=sl(null,n,r,!0,s,t)):(n.tag=0,Ce&&s&&ji(n),en(null,n,a,t),n=n.child),n;case 16:r=n.elementType;e:{switch(ra(e,n),e=n.pendingProps,a=r._init,r=a(r._payload),n.type=r,a=n.tag=Jp(r),e=En(r,e),a){case 0:n=ll(null,n,r,e,t);break e;case 1:n=hc(null,n,r,e,t);break e;case 11:n=uc(null,n,r,e,t);break e;case 14:n=cc(null,n,r,En(r.type,e),t);break e}throw Error(i(306,r,""))}return n;case 0:return r=n.type,a=n.pendingProps,a=n.elementType===r?a:En(r,a),ll(e,n,r,a,t);case 1:return r=n.type,a=n.pendingProps,a=n.elementType===r?a:En(r,a),hc(e,n,r,a,t);case 3:e:{if(mc(n),e===null)throw Error(i(387));r=n.pendingProps,s=n.memoizedState,a=s.element,Ru(e,n),Ko(n,r,null,t);var d=n.memoizedState;if(r=d.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:d.cache,pendingSuspenseBoundaries:d.pendingSuspenseBoundaries,transitions:d.transitions},n.updateQueue.baseState=s,n.memoizedState=s,n.flags&256){a=rr(Error(i(423)),n),n=gc(e,n,r,t,a);break e}else if(r!==a){a=rr(Error(i(424)),n),n=gc(e,n,r,t,a);break e}else for(fn=it(n.stateNode.containerInfo.firstChild),dn=n,Ce=!0,Pn=null,t=Ou(n,null,r,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(Jt(),r===a){n=Qn(e,n,t);break e}en(e,n,r,t)}n=n.child}return n;case 5:return Lu(n),e===null&&Ai(n),r=n.type,a=n.pendingProps,s=e!==null?e.memoizedProps:null,d=a.children,Oi(r,a)?d=null:s!==null&&Oi(r,s)&&(n.flags|=32),pc(e,n),en(e,n,d,t),n.child;case 6:return e===null&&Ai(n),null;case 13:return vc(e,n,t);case 4:return Wi(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=Zt(n,null,r,t):en(e,n,r,t),n.child;case 11:return r=n.type,a=n.pendingProps,a=n.elementType===r?a:En(r,a),uc(e,n,r,a,t);case 7:return en(e,n,n.pendingProps,t),n.child;case 8:return en(e,n,n.pendingProps.children,t),n.child;case 12:return en(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(r=n.type._context,a=n.pendingProps,s=n.memoizedProps,d=a.value,we(Wo,r._currentValue),r._currentValue=d,s!==null)if(Sn(s.value,d)){if(s.children===a.children&&!tn.current){n=Qn(e,n,t);break e}}else for(s=n.child,s!==null&&(s.return=n);s!==null;){var h=s.dependencies;if(h!==null){d=s.child;for(var g=h.firstContext;g!==null;){if(g.context===r){if(s.tag===1){g=Wn(-1,t&-t),g.tag=2;var C=s.updateQueue;if(C!==null){C=C.shared;var j=C.pending;j===null?g.next=g:(g.next=j.next,j.next=g),C.pending=g}}s.lanes|=t,g=s.alternate,g!==null&&(g.lanes|=t),$i(s.return,t,n),h.lanes|=t;break}g=g.next}}else if(s.tag===10)d=s.type===n.type?null:s.child;else if(s.tag===18){if(d=s.return,d===null)throw Error(i(341));d.lanes|=t,h=d.alternate,h!==null&&(h.lanes|=t),$i(d,t,n),d=s.sibling}else d=s.child;if(d!==null)d.return=s;else for(d=s;d!==null;){if(d===n){d=null;break}if(s=d.sibling,s!==null){s.return=d.return,d=s;break}d=d.return}s=d}en(e,n,a.children,t),n=n.child}return n;case 9:return a=n.type,r=n.pendingProps.children,nr(n,t),a=yn(a),r=r(a),n.flags|=1,en(e,n,r,t),n.child;case 14:return r=n.type,a=En(r,n.pendingProps),a=En(r.type,a),cc(e,n,r,a,t);case 15:return dc(e,n,n.type,n.pendingProps,t);case 17:return r=n.type,a=n.pendingProps,a=n.elementType===r?a:En(r,a),ra(e,n),n.tag=1,rn(r)?(e=!0,Io(n)):e=!1,nr(n,t),tc(n,r,a),ol(n,r,a,t),sl(null,n,r,!0,e,t);case 19:return bc(e,n,t);case 22:return fc(e,n,t)}throw Error(i(156,n.tag))};function Vc(e,n){return ws(e,n)}function Xp(e,n,t,r){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function kn(e,n,t,r){return new Xp(e,n,t,r)}function Ol(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Jp(e){if(typeof e=="function")return Ol(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Je)return 11;if(e===He)return 14}return 2}function vt(e,n){var t=e.alternate;return t===null?(t=kn(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function ha(e,n,t,r,a,s){var d=2;if(r=e,typeof e=="function")Ol(e)&&(d=1);else if(typeof e=="string")d=5;else e:switch(e){case pe:return jt(t.children,a,s,n);case V:d=8,a|=8;break;case ie:return e=kn(12,t,n,a|2),e.elementType=ie,e.lanes=s,e;case qe:return e=kn(13,t,n,a),e.elementType=qe,e.lanes=s,e;case Ze:return e=kn(19,t,n,a),e.elementType=Ze,e.lanes=s,e;case ye:return ma(t,a,s,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Me:d=10;break e;case un:d=9;break e;case Je:d=11;break e;case He:d=14;break e;case Ee:d=16,r=null;break e}throw Error(i(130,e==null?e:typeof e,""))}return n=kn(d,t,n,a),n.elementType=e,n.type=r,n.lanes=s,n}function jt(e,n,t,r){return e=kn(7,e,r,n),e.lanes=t,e}function ma(e,n,t,r){return e=kn(22,e,r,n),e.elementType=ye,e.lanes=t,e.stateNode={isHidden:!1},e}function Nl(e,n,t){return e=kn(6,e,null,n),e.lanes=t,e}function Rl(e,n,t){return n=kn(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function Zp(e,n,t,r,a){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ri(0),this.expirationTimes=ri(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ri(0),this.identifierPrefix=r,this.onRecoverableError=a,this.mutableSourceEagerHydrationData=null}function zl(e,n,t,r,a,s,d,h,g){return e=new Zp(e,n,t,h,g),n===1?(n=1,s===!0&&(n|=8)):n=0,s=kn(3,null,null,n),e.current=s,s.stateNode=e,s.memoizedState={element:r,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},Hi(s),e}function eh(e,n,t){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:de,key:r==null?null:""+r,children:e,containerInfo:n,implementation:t}}function Hc(e){if(!e)return st;e=e._reactInternals;e:{if(wt(e)!==e||e.tag!==1)throw Error(i(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(rn(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(i(171))}if(e.tag===1){var t=e.type;if(rn(t))return yu(e,t,n)}return n}function Wc(e,n,t,r,a,s,d,h,g){return e=zl(t,r,!0,e,a,s,d,h,g),e.context=Hc(null),t=e.current,r=nn(),a=mt(t),s=Wn(r,a),s.callback=n??null,dt(t,s,a),e.current.lanes=a,Er(e,a,r),ln(e,r),e}function ga(e,n,t,r){var a=n.current,s=nn(),d=mt(a);return t=Hc(t),n.context===null?n.context=t:n.pendingContext=t,n=Wn(s,d),n.payload={element:e},r=r===void 0?null:r,r!==null&&(n.callback=r),e=dt(a,n,d),e!==null&&(On(e,a,d,s),qo(e,a,d)),d}function va(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Qc(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function Tl(e,n){Qc(e,n),(e=e.alternate)&&Qc(e,n)}function nh(){return null}var qc=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ll(e){this._internalRoot=e}ya.prototype.render=Ll.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(i(409));ga(e,n,null,null)},ya.prototype.unmount=Ll.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;zt(function(){ga(null,e,null,null)}),n[Bn]=null}};function ya(e){this._internalRoot=e}ya.prototype.unstable_scheduleHydration=function(e){if(e){var n=Rs();e={blockedOn:null,target:e,priority:n};for(var t=0;t<rt.length&&n!==0&&n<rt[t].priority;t++);rt.splice(t,0,e),t===0&&Ls(e)}};function jl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ba(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Kc(){}function th(e,n,t,r,a){if(a){if(typeof r=="function"){var s=r;r=function(){var C=va(d);s.call(C)}}var d=Wc(n,r,e,0,null,!1,!1,"",Kc);return e._reactRootContainer=d,e[Bn]=d.current,Ir(e.nodeType===8?e.parentNode:e),zt(),d}for(;a=e.lastChild;)e.removeChild(a);if(typeof r=="function"){var h=r;r=function(){var C=va(g);h.call(C)}}var g=zl(e,0,!1,null,null,!1,!1,"",Kc);return e._reactRootContainer=g,e[Bn]=g.current,Ir(e.nodeType===8?e.parentNode:e),zt(function(){ga(n,g,t,r)}),g}function xa(e,n,t,r,a){var s=t._reactRootContainer;if(s){var d=s;if(typeof a=="function"){var h=a;a=function(){var g=va(d);h.call(g)}}ga(n,d,e,a)}else d=th(t,n,e,a,r);return va(d)}Os=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=Pr(n.pendingLanes);t!==0&&(oi(n,t|1),ln(n,Te()),(he&6)===0&&(ir=Te()+500,ut()))}break;case 13:zt(function(){var r=Hn(e,1);if(r!==null){var a=nn();On(r,e,1,a)}}),Tl(e,1)}},ai=function(e){if(e.tag===13){var n=Hn(e,134217728);if(n!==null){var t=nn();On(n,e,134217728,t)}Tl(e,134217728)}},Ns=function(e){if(e.tag===13){var n=mt(e),t=Hn(e,n);if(t!==null){var r=nn();On(t,e,n,r)}Tl(e,n)}},Rs=function(){return xe},zs=function(e,n){var t=xe;try{return xe=e,n()}finally{xe=t}},Xa=function(e,n,t){switch(n){case"input":if(Va(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var r=t[n];if(r!==e&&r.form===e.form){var a=Ao(r);if(!a)throw Error(i(90));kt(r),Va(r,a)}}}break;case"textarea":is(e,t);break;case"select":n=t.value,n!=null&&At(e,!!t.multiple,n,!1)}},ms=El,gs=zt;var rh={usingClientEntryPoint:!1,Events:[$r,qt,Ao,ps,hs,El]},to={findFiberByHostInstance:St,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},oh={bundleType:to.bundleType,version:to.version,rendererPackageName:to.rendererPackageName,rendererConfig:to.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ae.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=xs(e),e===null?null:e.stateNode},findFiberByHostInstance:to.findFiberByHostInstance||nh,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ka=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ka.isDisabled&&ka.supportsFiber)try{yo=ka.inject(oh),jn=ka}catch{}}return sn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=rh,sn.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!jl(n))throw Error(i(200));return eh(e,n,null,t)},sn.createRoot=function(e,n){if(!jl(e))throw Error(i(299));var t=!1,r="",a=qc;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),n=zl(e,1,!1,null,null,t,!1,r,a),e[Bn]=n.current,Ir(e.nodeType===8?e.parentNode:e),new Ll(n)},sn.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(i(188)):(e=Object.keys(e).join(","),Error(i(268,e)));return e=xs(n),e=e===null?null:e.stateNode,e},sn.flushSync=function(e){return zt(e)},sn.hydrate=function(e,n,t){if(!ba(n))throw Error(i(200));return xa(null,e,n,!0,t)},sn.hydrateRoot=function(e,n,t){if(!jl(e))throw Error(i(405));var r=t!=null&&t.hydratedSources||null,a=!1,s="",d=qc;if(t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(d=t.onRecoverableError)),n=Wc(n,null,e,1,t??null,a,!1,s,d),e[Bn]=n.current,Ir(e),r)for(e=0;e<r.length;e++)t=r[e],a=t._getVersion,a=a(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,a]:n.mutableSourceEagerHydrationData.push(t,a);return new ya(n)},sn.render=function(e,n,t){if(!ba(n))throw Error(i(200));return xa(null,e,n,!1,t)},sn.unmountComponentAtNode=function(e){if(!ba(e))throw Error(i(40));return e._reactRootContainer?(zt(function(){xa(null,null,e,!1,function(){e._reactRootContainer=null,e[Bn]=null})}),!0):!1},sn.unstable_batchedUpdates=El,sn.unstable_renderSubtreeIntoContainer=function(e,n,t,r){if(!ba(t))throw Error(i(200));if(e==null||e._reactInternals===void 0)throw Error(i(38));return xa(e,n,t,!1,r)},sn.version="18.3.1-next-f1338f8080-20240426",sn}var td;function hh(){if(td)return Al.exports;td=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(l){console.error(l)}}return o(),Al.exports=ph(),Al.exports}var rd;function mh(){if(rd)return wa;rd=1;var o=hh();return wa.createRoot=o.createRoot,wa.hydrateRoot=o.hydrateRoot,wa}var gh=mh();const vh=_d(gh),yh="modulepreload",bh=function(o){return"/"+o},od={},Tn=function(l,i,u){let c=Promise.resolve();if(i&&i.length>0){let p=function(v){return Promise.all(v.map(w=>Promise.resolve(w).then(S=>({status:"fulfilled",value:S}),S=>({status:"rejected",reason:S}))))};document.getElementsByTagName("link");const y=document.querySelector("meta[property=csp-nonce]"),m=y?.nonce||y?.getAttribute("nonce");c=p(i.map(v=>{if(v=bh(v),v in od)return;od[v]=!0;const w=v.endsWith(".css"),S=w?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${v}"]${S}`))return;const O=document.createElement("link");if(O.rel=w?"stylesheet":yh,w||(O.as="script"),O.crossOrigin="",O.href=v,m&&O.setAttribute("nonce",m),document.head.appendChild(O),w)return new Promise((F,D)=>{O.addEventListener("load",F),O.addEventListener("error",()=>D(new Error(`Unable to preload CSS for ${v}`)))})}))}function f(p){const y=new Event("vite:preloadError",{cancelable:!0});if(y.payload=p,window.dispatchEvent(y),!y.defaultPrevented)throw p}return c.then(p=>{for(const y of p||[])y.status==="rejected"&&f(y.reason);return l().catch(f)})};/**
 * react-router v7.9.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var ad="popstate";function xh(o={}){function l(u,c){let{pathname:f,search:p,hash:y}=u.location;return Wl("",{pathname:f,search:p,hash:y},c.state&&c.state.usr||null,c.state&&c.state.key||"default")}function i(u,c){return typeof c=="string"?c:lo(c)}return wh(l,i,null,o)}function Re(o,l){if(o===!1||o===null||typeof o>"u")throw new Error(l)}function zn(o,l){if(!o){typeof console<"u"&&console.warn(l);try{throw new Error(l)}catch{}}}function kh(){return Math.random().toString(36).substring(2,10)}function id(o,l){return{usr:o.state,key:o.key,idx:l}}function Wl(o,l,i=null,u){return{pathname:typeof o=="string"?o:o.pathname,search:"",hash:"",...typeof l=="string"?hr(l):l,state:i,key:l&&l.key||u||kh()}}function lo({pathname:o="/",search:l="",hash:i=""}){return l&&l!=="?"&&(o+=l.charAt(0)==="?"?l:"?"+l),i&&i!=="#"&&(o+=i.charAt(0)==="#"?i:"#"+i),o}function hr(o){let l={};if(o){let i=o.indexOf("#");i>=0&&(l.hash=o.substring(i),o=o.substring(0,i));let u=o.indexOf("?");u>=0&&(l.search=o.substring(u),o=o.substring(0,u)),o&&(l.pathname=o)}return l}function wh(o,l,i,u={}){let{window:c=document.defaultView,v5Compat:f=!1}=u,p=c.history,y="POP",m=null,v=w();v==null&&(v=0,p.replaceState({...p.state,idx:v},""));function w(){return(p.state||{idx:null}).idx}function S(){y="POP";let R=w(),I=R==null?null:R-v;v=R,m&&m({action:y,location:_.location,delta:I})}function O(R,I){y="PUSH";let U=Wl(_.location,R,I);v=w()+1;let K=id(U,v),ae=_.createHref(U);try{p.pushState(K,"",ae)}catch(le){if(le instanceof DOMException&&le.name==="DataCloneError")throw le;c.location.assign(ae)}f&&m&&m({action:y,location:_.location,delta:1})}function F(R,I){y="REPLACE";let U=Wl(_.location,R,I);v=w();let K=id(U,v),ae=_.createHref(U);p.replaceState(K,"",ae),f&&m&&m({action:y,location:_.location,delta:0})}function D(R){return Sh(R)}let _={get action(){return y},get location(){return o(c,p)},listen(R){if(m)throw new Error("A history only accepts one active listener");return c.addEventListener(ad,S),m=R,()=>{c.removeEventListener(ad,S),m=null}},createHref(R){return l(c,R)},createURL:D,encodeLocation(R){let I=D(R);return{pathname:I.pathname,search:I.search,hash:I.hash}},push:O,replace:F,go(R){return p.go(R)}};return _}function Sh(o,l=!1){let i="http://localhost";typeof window<"u"&&(i=window.location.origin!=="null"?window.location.origin:window.location.href),Re(i,"No window.location.(origin|href) available to create URL");let u=typeof o=="string"?o:lo(o);return u=u.replace(/ $/,"%20"),!l&&u.startsWith("//")&&(u=i+u),new URL(u,i)}function Od(o,l,i="/"){return Ph(o,l,i,!1)}function Ph(o,l,i,u){let c=typeof l=="string"?hr(l):l,f=Xn(c.pathname||"/",i);if(f==null)return null;let p=Nd(o);Eh(p);let y=null;for(let m=0;y==null&&m<p.length;++m){let v=Dh(f);y=jh(p[m],v,u)}return y}function Nd(o,l=[],i=[],u="",c=!1){let f=(p,y,m=c,v)=>{let w={relativePath:v===void 0?p.path||"":v,caseSensitive:p.caseSensitive===!0,childrenIndex:y,route:p};if(w.relativePath.startsWith("/")){if(!w.relativePath.startsWith(u)&&m)return;Re(w.relativePath.startsWith(u),`Absolute route path "${w.relativePath}" nested under path "${u}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),w.relativePath=w.relativePath.slice(u.length)}let S=Yn([u,w.relativePath]),O=i.concat(w);p.children&&p.children.length>0&&(Re(p.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${S}".`),Nd(p.children,l,O,S,m)),!(p.path==null&&!p.index)&&l.push({path:S,score:Th(S,p.index),routesMeta:O})};return o.forEach((p,y)=>{if(p.path===""||!p.path?.includes("?"))f(p,y);else for(let m of Rd(p.path))f(p,y,!0,m)}),l}function Rd(o){let l=o.split("/");if(l.length===0)return[];let[i,...u]=l,c=i.endsWith("?"),f=i.replace(/\?$/,"");if(u.length===0)return c?[f,""]:[f];let p=Rd(u.join("/")),y=[];return y.push(...p.map(m=>m===""?f:[f,m].join("/"))),c&&y.push(...p),y.map(m=>o.startsWith("/")&&m===""?"/":m)}function Eh(o){o.sort((l,i)=>l.score!==i.score?i.score-l.score:Lh(l.routesMeta.map(u=>u.childrenIndex),i.routesMeta.map(u=>u.childrenIndex)))}var Ch=/^:[\w-]+$/,_h=3,Oh=2,Nh=1,Rh=10,zh=-2,ld=o=>o==="*";function Th(o,l){let i=o.split("/"),u=i.length;return i.some(ld)&&(u+=zh),l&&(u+=Oh),i.filter(c=>!ld(c)).reduce((c,f)=>c+(Ch.test(f)?_h:f===""?Nh:Rh),u)}function Lh(o,l){return o.length===l.length&&o.slice(0,-1).every((u,c)=>u===l[c])?o[o.length-1]-l[l.length-1]:0}function jh(o,l,i=!1){let{routesMeta:u}=o,c={},f="/",p=[];for(let y=0;y<u.length;++y){let m=u[y],v=y===u.length-1,w=f==="/"?l:l.slice(f.length)||"/",S=Ra({path:m.relativePath,caseSensitive:m.caseSensitive,end:v},w),O=m.route;if(!S&&v&&i&&!u[u.length-1].route.index&&(S=Ra({path:m.relativePath,caseSensitive:m.caseSensitive,end:!1},w)),!S)return null;Object.assign(c,S.params),p.push({params:c,pathname:Yn([f,S.pathname]),pathnameBase:Uh(Yn([f,S.pathnameBase])),route:O}),S.pathnameBase!=="/"&&(f=Yn([f,S.pathnameBase]))}return p}function Ra(o,l){typeof o=="string"&&(o={path:o,caseSensitive:!1,end:!0});let[i,u]=Mh(o.path,o.caseSensitive,o.end),c=l.match(i);if(!c)return null;let f=c[0],p=f.replace(/(.)\/+$/,"$1"),y=c.slice(1);return{params:u.reduce((v,{paramName:w,isOptional:S},O)=>{if(w==="*"){let D=y[O]||"";p=f.slice(0,f.length-D.length).replace(/(.)\/+$/,"$1")}const F=y[O];return S&&!F?v[w]=void 0:v[w]=(F||"").replace(/%2F/g,"/"),v},{}),pathname:f,pathnameBase:p,pattern:o}}function Mh(o,l=!1,i=!0){zn(o==="*"||!o.endsWith("*")||o.endsWith("/*"),`Route path "${o}" will be treated as if it were "${o.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${o.replace(/\*$/,"/*")}".`);let u=[],c="^"+o.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(p,y,m)=>(u.push({paramName:y,isOptional:m!=null}),m?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return o.endsWith("*")?(u.push({paramName:"*"}),c+=o==="*"||o==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i?c+="\\/*$":o!==""&&o!=="/"&&(c+="(?:(?=\\/|$))"),[new RegExp(c,l?void 0:"i"),u]}function Dh(o){try{return o.split("/").map(l=>decodeURIComponent(l).replace(/\//g,"%2F")).join("/")}catch(l){return zn(!1,`The URL path "${o}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${l}).`),o}}function Xn(o,l){if(l==="/")return o;if(!o.toLowerCase().startsWith(l.toLowerCase()))return null;let i=l.endsWith("/")?l.length-1:l.length,u=o.charAt(i);return u&&u!=="/"?null:o.slice(i)||"/"}var Ah=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Fh=o=>Ah.test(o);function Ih(o,l="/"){let{pathname:i,search:u="",hash:c=""}=typeof o=="string"?hr(o):o,f;if(i)if(Fh(i))f=i;else{if(i.includes("//")){let p=i;i=i.replace(/\/\/+/g,"/"),zn(!1,`Pathnames cannot have embedded double slashes - normalizing ${p} -> ${i}`)}i.startsWith("/")?f=sd(i.substring(1),"/"):f=sd(i,l)}else f=l;return{pathname:f,search:$h(u),hash:Vh(c)}}function sd(o,l){let i=l.replace(/\/+$/,"").split("/");return o.split("/").forEach(c=>{c===".."?i.length>1&&i.pop():c!=="."&&i.push(c)}),i.length>1?i.join("/"):"/"}function Bl(o,l,i,u){return`Cannot include a '${o}' character in a manually specified \`to.${l}\` field [${JSON.stringify(u)}].  Please separate it out to the \`to.${i}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Bh(o){return o.filter((l,i)=>i===0||l.route.path&&l.route.path.length>0)}function zd(o){let l=Bh(o);return l.map((i,u)=>u===l.length-1?i.pathname:i.pathnameBase)}function Td(o,l,i,u=!1){let c;typeof o=="string"?c=hr(o):(c={...o},Re(!c.pathname||!c.pathname.includes("?"),Bl("?","pathname","search",c)),Re(!c.pathname||!c.pathname.includes("#"),Bl("#","pathname","hash",c)),Re(!c.search||!c.search.includes("#"),Bl("#","search","hash",c)));let f=o===""||c.pathname==="",p=f?"/":c.pathname,y;if(p==null)y=i;else{let S=l.length-1;if(!u&&p.startsWith("..")){let O=p.split("/");for(;O[0]==="..";)O.shift(),S-=1;c.pathname=O.join("/")}y=S>=0?l[S]:"/"}let m=Ih(c,y),v=p&&p!=="/"&&p.endsWith("/"),w=(f||p===".")&&i.endsWith("/");return!m.pathname.endsWith("/")&&(v||w)&&(m.pathname+="/"),m}var Yn=o=>o.join("/").replace(/\/\/+/g,"/"),Uh=o=>o.replace(/\/+$/,"").replace(/^\/*/,"/"),$h=o=>!o||o==="?"?"":o.startsWith("?")?o:"?"+o,Vh=o=>!o||o==="#"?"":o.startsWith("#")?o:"#"+o;function Hh(o){return o!=null&&typeof o.status=="number"&&typeof o.statusText=="string"&&typeof o.internal=="boolean"&&"data"in o}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var Ld=["POST","PUT","PATCH","DELETE"];new Set(Ld);var Wh=["GET",...Ld];new Set(Wh);var mr=E.createContext(null);mr.displayName="DataRouter";var ja=E.createContext(null);ja.displayName="DataRouterState";E.createContext(!1);var jd=E.createContext({isTransitioning:!1});jd.displayName="ViewTransition";var Qh=E.createContext(new Map);Qh.displayName="Fetchers";var qh=E.createContext(null);qh.displayName="Await";var In=E.createContext(null);In.displayName="Navigation";var so=E.createContext(null);so.displayName="Location";var Ln=E.createContext({outlet:null,matches:[],isDataRoute:!1});Ln.displayName="Route";var Yl=E.createContext(null);Yl.displayName="RouteError";function Kh(o,{relative:l}={}){Re(uo(),"useHref() may be used only in the context of a <Router> component.");let{basename:i,navigator:u}=E.useContext(In),{hash:c,pathname:f,search:p}=co(o,{relative:l}),y=f;return i!=="/"&&(y=f==="/"?i:Yn([i,f])),u.createHref({pathname:y,search:p,hash:c})}function uo(){return E.useContext(so)!=null}function Jn(){return Re(uo(),"useLocation() may be used only in the context of a <Router> component."),E.useContext(so).location}var Md="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Dd(o){E.useContext(In).static||E.useLayoutEffect(o)}function Ma(){let{isDataRoute:o}=E.useContext(Ln);return o?um():Gh()}function Gh(){Re(uo(),"useNavigate() may be used only in the context of a <Router> component.");let o=E.useContext(mr),{basename:l,navigator:i}=E.useContext(In),{matches:u}=E.useContext(Ln),{pathname:c}=Jn(),f=JSON.stringify(zd(u)),p=E.useRef(!1);return Dd(()=>{p.current=!0}),E.useCallback((m,v={})=>{if(zn(p.current,Md),!p.current)return;if(typeof m=="number"){i.go(m);return}let w=Td(m,JSON.parse(f),c,v.relative==="path");o==null&&l!=="/"&&(w.pathname=w.pathname==="/"?l:Yn([l,w.pathname])),(v.replace?i.replace:i.push)(w,v.state,v)},[l,i,f,c,o])}var Yh=E.createContext(null);function Xh(o){let l=E.useContext(Ln).outlet;return E.useMemo(()=>l&&E.createElement(Yh.Provider,{value:o},l),[l,o])}function Qg(){let{matches:o}=E.useContext(Ln),l=o[o.length-1];return l?l.params:{}}function co(o,{relative:l}={}){let{matches:i}=E.useContext(Ln),{pathname:u}=Jn(),c=JSON.stringify(zd(i));return E.useMemo(()=>Td(o,JSON.parse(c),u,l==="path"),[o,c,u,l])}function Jh(o,l){return Ad(o,l)}function Ad(o,l,i,u,c){Re(uo(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:f}=E.useContext(In),{matches:p}=E.useContext(Ln),y=p[p.length-1],m=y?y.params:{},v=y?y.pathname:"/",w=y?y.pathnameBase:"/",S=y&&y.route;{let U=S&&S.path||"";Fd(v,!S||U.endsWith("*")||U.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${v}" (under <Route path="${U}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${U}"> to <Route path="${U==="/"?"*":`${U}/*`}">.`)}let O=Jn(),F;if(l){let U=typeof l=="string"?hr(l):l;Re(w==="/"||U.pathname?.startsWith(w),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${w}" but pathname "${U.pathname}" was given in the \`location\` prop.`),F=U}else F=O;let D=F.pathname||"/",_=D;if(w!=="/"){let U=w.replace(/^\//,"").split("/");_="/"+D.replace(/^\//,"").split("/").slice(U.length).join("/")}let R=Od(o,{pathname:_});zn(S||R!=null,`No routes matched location "${F.pathname}${F.search}${F.hash}" `),zn(R==null||R[R.length-1].route.element!==void 0||R[R.length-1].route.Component!==void 0||R[R.length-1].route.lazy!==void 0,`Matched leaf route at location "${F.pathname}${F.search}${F.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let I=rm(R&&R.map(U=>Object.assign({},U,{params:Object.assign({},m,U.params),pathname:Yn([w,f.encodeLocation?f.encodeLocation(U.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:U.pathname]),pathnameBase:U.pathnameBase==="/"?w:Yn([w,f.encodeLocation?f.encodeLocation(U.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:U.pathnameBase])})),p,i,u,c);return l&&I?E.createElement(so.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...F},navigationType:"POP"}},I):I}function Zh(){let o=sm(),l=Hh(o)?`${o.status} ${o.statusText}`:o instanceof Error?o.message:JSON.stringify(o),i=o instanceof Error?o.stack:null,u="rgba(200,200,200, 0.5)",c={padding:"0.5rem",backgroundColor:u},f={padding:"2px 4px",backgroundColor:u},p=null;return console.error("Error handled by React Router default ErrorBoundary:",o),p=E.createElement(E.Fragment,null,E.createElement("p",null,"💿 Hey developer 👋"),E.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",E.createElement("code",{style:f},"ErrorBoundary")," or"," ",E.createElement("code",{style:f},"errorElement")," prop on your route.")),E.createElement(E.Fragment,null,E.createElement("h2",null,"Unexpected Application Error!"),E.createElement("h3",{style:{fontStyle:"italic"}},l),i?E.createElement("pre",{style:c},i):null,p)}var em=E.createElement(Zh,null),nm=class extends E.Component{constructor(o){super(o),this.state={location:o.location,revalidation:o.revalidation,error:o.error}}static getDerivedStateFromError(o){return{error:o}}static getDerivedStateFromProps(o,l){return l.location!==o.location||l.revalidation!=="idle"&&o.revalidation==="idle"?{error:o.error,location:o.location,revalidation:o.revalidation}:{error:o.error!==void 0?o.error:l.error,location:l.location,revalidation:o.revalidation||l.revalidation}}componentDidCatch(o,l){this.props.onError?this.props.onError(o,l):console.error("React Router caught the following error during render",o)}render(){return this.state.error!==void 0?E.createElement(Ln.Provider,{value:this.props.routeContext},E.createElement(Yl.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function tm({routeContext:o,match:l,children:i}){let u=E.useContext(mr);return u&&u.static&&u.staticContext&&(l.route.errorElement||l.route.ErrorBoundary)&&(u.staticContext._deepestRenderedBoundaryId=l.route.id),E.createElement(Ln.Provider,{value:o},i)}function rm(o,l=[],i=null,u=null,c=null){if(o==null){if(!i)return null;if(i.errors)o=i.matches;else if(l.length===0&&!i.initialized&&i.matches.length>0)o=i.matches;else return null}let f=o,p=i?.errors;if(p!=null){let w=f.findIndex(S=>S.route.id&&p?.[S.route.id]!==void 0);Re(w>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(p).join(",")}`),f=f.slice(0,Math.min(f.length,w+1))}let y=!1,m=-1;if(i)for(let w=0;w<f.length;w++){let S=f[w];if((S.route.HydrateFallback||S.route.hydrateFallbackElement)&&(m=w),S.route.id){let{loaderData:O,errors:F}=i,D=S.route.loader&&!O.hasOwnProperty(S.route.id)&&(!F||F[S.route.id]===void 0);if(S.route.lazy||D){y=!0,m>=0?f=f.slice(0,m+1):f=[f[0]];break}}}let v=i&&u?(w,S)=>{u(w,{location:i.location,params:i.matches?.[0]?.params??{},errorInfo:S})}:void 0;return f.reduceRight((w,S,O)=>{let F,D=!1,_=null,R=null;i&&(F=p&&S.route.id?p[S.route.id]:void 0,_=S.route.errorElement||em,y&&(m<0&&O===0?(Fd("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),D=!0,R=null):m===O&&(D=!0,R=S.route.hydrateFallbackElement||null)));let I=l.concat(f.slice(0,O+1)),U=()=>{let K;return F?K=_:D?K=R:S.route.Component?K=E.createElement(S.route.Component,null):S.route.element?K=S.route.element:K=w,E.createElement(tm,{match:S,routeContext:{outlet:w,matches:I,isDataRoute:i!=null},children:K})};return i&&(S.route.ErrorBoundary||S.route.errorElement||O===0)?E.createElement(nm,{location:i.location,revalidation:i.revalidation,component:_,error:F,children:U(),routeContext:{outlet:null,matches:I,isDataRoute:!0},onError:v}):U()},null)}function Xl(o){return`${o} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function om(o){let l=E.useContext(mr);return Re(l,Xl(o)),l}function am(o){let l=E.useContext(ja);return Re(l,Xl(o)),l}function im(o){let l=E.useContext(Ln);return Re(l,Xl(o)),l}function Jl(o){let l=im(o),i=l.matches[l.matches.length-1];return Re(i.route.id,`${o} can only be used on routes that contain a unique "id"`),i.route.id}function lm(){return Jl("useRouteId")}function sm(){let o=E.useContext(Yl),l=am("useRouteError"),i=Jl("useRouteError");return o!==void 0?o:l.errors?.[i]}function um(){let{router:o}=om("useNavigate"),l=Jl("useNavigate"),i=E.useRef(!1);return Dd(()=>{i.current=!0}),E.useCallback(async(c,f={})=>{zn(i.current,Md),i.current&&(typeof c=="number"?o.navigate(c):await o.navigate(c,{fromRouteId:l,...f}))},[o,l])}var ud={};function Fd(o,l,i){!l&&!ud[o]&&(ud[o]=!0,zn(!1,i))}E.memo(cm);function cm({routes:o,future:l,state:i,unstable_onError:u}){return Ad(o,void 0,i,u,l)}function dm(o){return Xh(o.context)}function hn(o){Re(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function fm({basename:o="/",children:l=null,location:i,navigationType:u="POP",navigator:c,static:f=!1}){Re(!uo(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let p=o.replace(/^\/*/,"/"),y=E.useMemo(()=>({basename:p,navigator:c,static:f,future:{}}),[p,c,f]);typeof i=="string"&&(i=hr(i));let{pathname:m="/",search:v="",hash:w="",state:S=null,key:O="default"}=i,F=E.useMemo(()=>{let D=Xn(m,p);return D==null?null:{location:{pathname:D,search:v,hash:w,state:S,key:O},navigationType:u}},[p,m,v,w,S,O,u]);return zn(F!=null,`<Router basename="${p}"> is not able to match the URL "${m}${v}${w}" because it does not start with the basename, so the <Router> won't render anything.`),F==null?null:E.createElement(In.Provider,{value:y},E.createElement(so.Provider,{children:l,value:F}))}function pm({children:o,location:l}){return Jh(Ql(o),l)}function Ql(o,l=[]){let i=[];return E.Children.forEach(o,(u,c)=>{if(!E.isValidElement(u))return;let f=[...l,c];if(u.type===E.Fragment){i.push.apply(i,Ql(u.props.children,f));return}Re(u.type===hn,`[${typeof u.type=="string"?u.type:u.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Re(!u.props.index||!u.props.children,"An index route cannot have child routes.");let p={id:u.props.id||f.join("-"),caseSensitive:u.props.caseSensitive,element:u.props.element,Component:u.props.Component,index:u.props.index,path:u.props.path,middleware:u.props.middleware,loader:u.props.loader,action:u.props.action,hydrateFallbackElement:u.props.hydrateFallbackElement,HydrateFallback:u.props.HydrateFallback,errorElement:u.props.errorElement,ErrorBoundary:u.props.ErrorBoundary,hasErrorBoundary:u.props.hasErrorBoundary===!0||u.props.ErrorBoundary!=null||u.props.errorElement!=null,shouldRevalidate:u.props.shouldRevalidate,handle:u.props.handle,lazy:u.props.lazy};u.props.children&&(p.children=Ql(u.props.children,f)),i.push(p)}),i}var Oa="get",Na="application/x-www-form-urlencoded";function Da(o){return o!=null&&typeof o.tagName=="string"}function hm(o){return Da(o)&&o.tagName.toLowerCase()==="button"}function mm(o){return Da(o)&&o.tagName.toLowerCase()==="form"}function gm(o){return Da(o)&&o.tagName.toLowerCase()==="input"}function vm(o){return!!(o.metaKey||o.altKey||o.ctrlKey||o.shiftKey)}function ym(o,l){return o.button===0&&(!l||l==="_self")&&!vm(o)}var Sa=null;function bm(){if(Sa===null)try{new FormData(document.createElement("form"),0),Sa=!1}catch{Sa=!0}return Sa}var xm=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Ul(o){return o!=null&&!xm.has(o)?(zn(!1,`"${o}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Na}"`),null):o}function km(o,l){let i,u,c,f,p;if(mm(o)){let y=o.getAttribute("action");u=y?Xn(y,l):null,i=o.getAttribute("method")||Oa,c=Ul(o.getAttribute("enctype"))||Na,f=new FormData(o)}else if(hm(o)||gm(o)&&(o.type==="submit"||o.type==="image")){let y=o.form;if(y==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let m=o.getAttribute("formaction")||y.getAttribute("action");if(u=m?Xn(m,l):null,i=o.getAttribute("formmethod")||y.getAttribute("method")||Oa,c=Ul(o.getAttribute("formenctype"))||Ul(y.getAttribute("enctype"))||Na,f=new FormData(y,o),!bm()){let{name:v,type:w,value:S}=o;if(w==="image"){let O=v?`${v}.`:"";f.append(`${O}x`,"0"),f.append(`${O}y`,"0")}else v&&f.append(v,S)}}else{if(Da(o))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');i=Oa,u=null,c=Na,p=o}return f&&c==="text/plain"&&(p=f,f=void 0),{action:u,method:i.toLowerCase(),encType:c,formData:f,body:p}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Zl(o,l){if(o===!1||o===null||typeof o>"u")throw new Error(l)}function wm(o,l,i){let u=typeof o=="string"?new URL(o,typeof window>"u"?"server://singlefetch/":window.location.origin):o;return u.pathname==="/"?u.pathname=`_root.${i}`:l&&Xn(u.pathname,l)==="/"?u.pathname=`${l.replace(/\/$/,"")}/_root.${i}`:u.pathname=`${u.pathname.replace(/\/$/,"")}.${i}`,u}async function Sm(o,l){if(o.id in l)return l[o.id];try{let i=await import(o.module);return l[o.id]=i,i}catch(i){return console.error(`Error loading route module \`${o.module}\`, reloading page...`),console.error(i),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Pm(o){return o==null?!1:o.href==null?o.rel==="preload"&&typeof o.imageSrcSet=="string"&&typeof o.imageSizes=="string":typeof o.rel=="string"&&typeof o.href=="string"}async function Em(o,l,i){let u=await Promise.all(o.map(async c=>{let f=l.routes[c.route.id];if(f){let p=await Sm(f,i);return p.links?p.links():[]}return[]}));return Nm(u.flat(1).filter(Pm).filter(c=>c.rel==="stylesheet"||c.rel==="preload").map(c=>c.rel==="stylesheet"?{...c,rel:"prefetch",as:"style"}:{...c,rel:"prefetch"}))}function cd(o,l,i,u,c,f){let p=(m,v)=>i[v]?m.route.id!==i[v].route.id:!0,y=(m,v)=>i[v].pathname!==m.pathname||i[v].route.path?.endsWith("*")&&i[v].params["*"]!==m.params["*"];return f==="assets"?l.filter((m,v)=>p(m,v)||y(m,v)):f==="data"?l.filter((m,v)=>{let w=u.routes[m.route.id];if(!w||!w.hasLoader)return!1;if(p(m,v)||y(m,v))return!0;if(m.route.shouldRevalidate){let S=m.route.shouldRevalidate({currentUrl:new URL(c.pathname+c.search+c.hash,window.origin),currentParams:i[0]?.params||{},nextUrl:new URL(o,window.origin),nextParams:m.params,defaultShouldRevalidate:!0});if(typeof S=="boolean")return S}return!0}):[]}function Cm(o,l,{includeHydrateFallback:i}={}){return _m(o.map(u=>{let c=l.routes[u.route.id];if(!c)return[];let f=[c.module];return c.clientActionModule&&(f=f.concat(c.clientActionModule)),c.clientLoaderModule&&(f=f.concat(c.clientLoaderModule)),i&&c.hydrateFallbackModule&&(f=f.concat(c.hydrateFallbackModule)),c.imports&&(f=f.concat(c.imports)),f}).flat(1))}function _m(o){return[...new Set(o)]}function Om(o){let l={},i=Object.keys(o).sort();for(let u of i)l[u]=o[u];return l}function Nm(o,l){let i=new Set;return new Set(l),o.reduce((u,c)=>{let f=JSON.stringify(Om(c));return i.has(f)||(i.add(f),u.push({key:f,link:c})),u},[])}function Id(){let o=E.useContext(mr);return Zl(o,"You must render this element inside a <DataRouterContext.Provider> element"),o}function Rm(){let o=E.useContext(ja);return Zl(o,"You must render this element inside a <DataRouterStateContext.Provider> element"),o}var es=E.createContext(void 0);es.displayName="FrameworkContext";function Bd(){let o=E.useContext(es);return Zl(o,"You must render this element inside a <HydratedRouter> element"),o}function zm(o,l){let i=E.useContext(es),[u,c]=E.useState(!1),[f,p]=E.useState(!1),{onFocus:y,onBlur:m,onMouseEnter:v,onMouseLeave:w,onTouchStart:S}=l,O=E.useRef(null);E.useEffect(()=>{if(o==="render"&&p(!0),o==="viewport"){let _=I=>{I.forEach(U=>{p(U.isIntersecting)})},R=new IntersectionObserver(_,{threshold:.5});return O.current&&R.observe(O.current),()=>{R.disconnect()}}},[o]),E.useEffect(()=>{if(u){let _=setTimeout(()=>{p(!0)},100);return()=>{clearTimeout(_)}}},[u]);let F=()=>{c(!0)},D=()=>{c(!1),p(!1)};return i?o!=="intent"?[f,O,{}]:[f,O,{onFocus:oo(y,F),onBlur:oo(m,D),onMouseEnter:oo(v,F),onMouseLeave:oo(w,D),onTouchStart:oo(S,F)}]:[!1,O,{}]}function oo(o,l){return i=>{o&&o(i),i.defaultPrevented||l(i)}}function Tm({page:o,...l}){let{router:i}=Id(),u=E.useMemo(()=>Od(i.routes,o,i.basename),[i.routes,o,i.basename]);return u?E.createElement(jm,{page:o,matches:u,...l}):null}function Lm(o){let{manifest:l,routeModules:i}=Bd(),[u,c]=E.useState([]);return E.useEffect(()=>{let f=!1;return Em(o,l,i).then(p=>{f||c(p)}),()=>{f=!0}},[o,l,i]),u}function jm({page:o,matches:l,...i}){let u=Jn(),{manifest:c,routeModules:f}=Bd(),{basename:p}=Id(),{loaderData:y,matches:m}=Rm(),v=E.useMemo(()=>cd(o,l,m,c,u,"data"),[o,l,m,c,u]),w=E.useMemo(()=>cd(o,l,m,c,u,"assets"),[o,l,m,c,u]),S=E.useMemo(()=>{if(o===u.pathname+u.search+u.hash)return[];let D=new Set,_=!1;if(l.forEach(I=>{let U=c.routes[I.route.id];!U||!U.hasLoader||(!v.some(K=>K.route.id===I.route.id)&&I.route.id in y&&f[I.route.id]?.shouldRevalidate||U.hasClientLoader?_=!0:D.add(I.route.id))}),D.size===0)return[];let R=wm(o,p,"data");return _&&D.size>0&&R.searchParams.set("_routes",l.filter(I=>D.has(I.route.id)).map(I=>I.route.id).join(",")),[R.pathname+R.search]},[p,y,u,c,v,l,o,f]),O=E.useMemo(()=>Cm(w,c),[w,c]),F=Lm(w);return E.createElement(E.Fragment,null,S.map(D=>E.createElement("link",{key:D,rel:"prefetch",as:"fetch",href:D,...i})),O.map(D=>E.createElement("link",{key:D,rel:"modulepreload",href:D,...i})),F.map(({key:D,link:_})=>E.createElement("link",{key:D,nonce:i.nonce,..._})))}function Mm(...o){return l=>{o.forEach(i=>{typeof i=="function"?i(l):i!=null&&(i.current=l)})}}var Ud=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Ud&&(window.__reactRouterVersion="7.9.6")}catch{}function Dm({basename:o,children:l,window:i}){let u=E.useRef();u.current==null&&(u.current=xh({window:i,v5Compat:!0}));let c=u.current,[f,p]=E.useState({action:c.action,location:c.location}),y=E.useCallback(m=>{E.startTransition(()=>p(m))},[p]);return E.useLayoutEffect(()=>c.listen(y),[c,y]),E.createElement(fm,{basename:o,children:l,location:f.location,navigationType:f.action,navigator:c})}var $d=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,pr=E.forwardRef(function({onClick:l,discover:i="render",prefetch:u="none",relative:c,reloadDocument:f,replace:p,state:y,target:m,to:v,preventScrollReset:w,viewTransition:S,...O},F){let{basename:D}=E.useContext(In),_=typeof v=="string"&&$d.test(v),R,I=!1;if(typeof v=="string"&&_&&(R=v,Ud))try{let ie=new URL(window.location.href),Me=v.startsWith("//")?new URL(ie.protocol+v):new URL(v),un=Xn(Me.pathname,D);Me.origin===ie.origin&&un!=null?v=un+Me.search+Me.hash:I=!0}catch{zn(!1,`<Link to="${v}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let U=Kh(v,{relative:c}),[K,ae,le]=zm(u,O),de=Bm(v,{replace:p,state:y,target:m,preventScrollReset:w,relative:c,viewTransition:S});function pe(ie){l&&l(ie),ie.defaultPrevented||de(ie)}let V=E.createElement("a",{...O,...le,href:R||U,onClick:I||f?l:pe,ref:Mm(F,ae),target:m,"data-discover":!_&&i==="render"?"true":void 0});return K&&!_?E.createElement(E.Fragment,null,V,E.createElement(Tm,{page:U})):V});pr.displayName="Link";var Am=E.forwardRef(function({"aria-current":l="page",caseSensitive:i=!1,className:u="",end:c=!1,style:f,to:p,viewTransition:y,children:m,...v},w){let S=co(p,{relative:v.relative}),O=Jn(),F=E.useContext(ja),{navigator:D,basename:_}=E.useContext(In),R=F!=null&&Wm(S)&&y===!0,I=D.encodeLocation?D.encodeLocation(S).pathname:S.pathname,U=O.pathname,K=F&&F.navigation&&F.navigation.location?F.navigation.location.pathname:null;i||(U=U.toLowerCase(),K=K?K.toLowerCase():null,I=I.toLowerCase()),K&&_&&(K=Xn(K,_)||K);const ae=I!=="/"&&I.endsWith("/")?I.length-1:I.length;let le=U===I||!c&&U.startsWith(I)&&U.charAt(ae)==="/",de=K!=null&&(K===I||!c&&K.startsWith(I)&&K.charAt(I.length)==="/"),pe={isActive:le,isPending:de,isTransitioning:R},V=le?l:void 0,ie;typeof u=="function"?ie=u(pe):ie=[u,le?"active":null,de?"pending":null,R?"transitioning":null].filter(Boolean).join(" ");let Me=typeof f=="function"?f(pe):f;return E.createElement(pr,{...v,"aria-current":V,className:ie,ref:w,style:Me,to:p,viewTransition:y},typeof m=="function"?m(pe):m)});Am.displayName="NavLink";var Fm=E.forwardRef(({discover:o="render",fetcherKey:l,navigate:i,reloadDocument:u,replace:c,state:f,method:p=Oa,action:y,onSubmit:m,relative:v,preventScrollReset:w,viewTransition:S,...O},F)=>{let D=Vm(),_=Hm(y,{relative:v}),R=p.toLowerCase()==="get"?"get":"post",I=typeof y=="string"&&$d.test(y),U=K=>{if(m&&m(K),K.defaultPrevented)return;K.preventDefault();let ae=K.nativeEvent.submitter,le=ae?.getAttribute("formmethod")||p;D(ae||K.currentTarget,{fetcherKey:l,method:le,navigate:i,replace:c,state:f,relative:v,preventScrollReset:w,viewTransition:S})};return E.createElement("form",{ref:F,method:R,action:_,onSubmit:u?m:U,...O,"data-discover":!I&&o==="render"?"true":void 0})});Fm.displayName="Form";function Im(o){return`${o} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Vd(o){let l=E.useContext(mr);return Re(l,Im(o)),l}function Bm(o,{target:l,replace:i,state:u,preventScrollReset:c,relative:f,viewTransition:p}={}){let y=Ma(),m=Jn(),v=co(o,{relative:f});return E.useCallback(w=>{if(ym(w,l)){w.preventDefault();let S=i!==void 0?i:lo(m)===lo(v);y(o,{replace:S,state:u,preventScrollReset:c,relative:f,viewTransition:p})}},[m,y,v,i,u,l,o,c,f,p])}var Um=0,$m=()=>`__${String(++Um)}__`;function Vm(){let{router:o}=Vd("useSubmit"),{basename:l}=E.useContext(In),i=lm();return E.useCallback(async(u,c={})=>{let{action:f,method:p,encType:y,formData:m,body:v}=km(u,l);if(c.navigate===!1){let w=c.fetcherKey||$m();await o.fetch(w,i,c.action||f,{preventScrollReset:c.preventScrollReset,formData:m,body:v,formMethod:c.method||p,formEncType:c.encType||y,flushSync:c.flushSync})}else await o.navigate(c.action||f,{preventScrollReset:c.preventScrollReset,formData:m,body:v,formMethod:c.method||p,formEncType:c.encType||y,replace:c.replace,state:c.state,fromRouteId:i,flushSync:c.flushSync,viewTransition:c.viewTransition})},[o,l,i])}function Hm(o,{relative:l}={}){let{basename:i}=E.useContext(In),u=E.useContext(Ln);Re(u,"useFormAction must be used inside a RouteContext");let[c]=u.matches.slice(-1),f={...co(o||".",{relative:l})},p=Jn();if(o==null){f.search=p.search;let y=new URLSearchParams(f.search),m=y.getAll("index");if(m.some(w=>w==="")){y.delete("index"),m.filter(S=>S).forEach(S=>y.append("index",S));let w=y.toString();f.search=w?`?${w}`:""}}return(!o||o===".")&&c.route.index&&(f.search=f.search?f.search.replace(/^\?/,"?index&"):"?index"),i!=="/"&&(f.pathname=f.pathname==="/"?i:Yn([i,f.pathname])),lo(f)}function Wm(o,{relative:l}={}){let i=E.useContext(jd);Re(i!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:u}=Vd("useViewTransitionState"),c=co(o,{relative:l});if(!i.isTransitioning)return!1;let f=Xn(i.currentLocation.pathname,u)||i.currentLocation.pathname,p=Xn(i.nextLocation.pathname,u)||i.nextLocation.pathname;return Ra(c.pathname,p)!=null||Ra(c.pathname,f)!=null}/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qm=o=>o.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),qm=o=>o.replace(/^([A-Z])|[\s-_]+(\w)/g,(l,i,u)=>u?u.toUpperCase():i.toLowerCase()),dd=o=>{const l=qm(o);return l.charAt(0).toUpperCase()+l.slice(1)},Hd=(...o)=>o.filter((l,i,u)=>!!l&&l.trim()!==""&&u.indexOf(l)===i).join(" ").trim();/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Km={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gm=E.forwardRef(({color:o="currentColor",size:l=24,strokeWidth:i=2,absoluteStrokeWidth:u,className:c="",children:f,iconNode:p,...y},m)=>E.createElement("svg",{ref:m,...Km,width:l,height:l,stroke:o,strokeWidth:u?Number(i)*24/Number(l):i,className:Hd("lucide",c),...y},[...p.map(([v,w])=>E.createElement(v,w)),...Array.isArray(f)?f:[f]]));/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dt=(o,l)=>{const i=E.forwardRef(({className:u,...c},f)=>E.createElement(Gm,{ref:f,iconNode:l,className:Hd(`lucide-${Qm(dd(o))}`,`lucide-${o}`,u),...c}));return i.displayName=dd(o),i};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ym=[["path",{d:"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",key:"1jg4f8"}]],Xm=Dt("facebook",Ym);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jm=[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5",key:"2e1cvw"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",key:"9exkf1"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5",key:"r4j83e"}]],Zm=Dt("instagram",Jm);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e0=[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]],n0=Dt("mail",e0);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t0=[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]],r0=Dt("menu",t0);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o0=[["path",{d:"M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",key:"pff0z6"}]],a0=Dt("twitter",o0);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i0=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],l0=Dt("x",i0);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s0=[["path",{d:"M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17",key:"1q2vi4"}],["path",{d:"m10 15 5-3-5-3z",key:"1jp15x"}]],u0=Dt("youtube",s0);function fd(o,l){if(typeof o=="function")return o(l);o!=null&&(o.current=l)}function Wd(...o){return l=>{let i=!1;const u=o.map(c=>{const f=fd(c,l);return!i&&typeof f=="function"&&(i=!0),f});if(i)return()=>{for(let c=0;c<u.length;c++){const f=u[c];typeof f=="function"?f():fd(o[c],null)}}}}function qg(...o){return E.useCallback(Wd(...o),o)}var c0=Symbol.for("react.lazy"),za=ch[" use ".trim().toString()];function d0(o){return typeof o=="object"&&o!==null&&"then"in o}function Qd(o){return o!=null&&typeof o=="object"&&"$$typeof"in o&&o.$$typeof===c0&&"_payload"in o&&d0(o._payload)}function f0(o){const l=h0(o),i=E.forwardRef((u,c)=>{let{children:f,...p}=u;Qd(f)&&typeof za=="function"&&(f=za(f._payload));const y=E.Children.toArray(f),m=y.find(g0);if(m){const v=m.props.children,w=y.map(S=>S===m?E.Children.count(v)>1?E.Children.only(null):E.isValidElement(v)?v.props.children:null:S);return N.jsx(l,{...p,ref:c,children:E.isValidElement(v)?E.cloneElement(v,void 0,w):null})}return N.jsx(l,{...p,ref:c,children:f})});return i.displayName=`${o}.Slot`,i}var p0=f0("Slot");function h0(o){const l=E.forwardRef((i,u)=>{let{children:c,...f}=i;if(Qd(c)&&typeof za=="function"&&(c=za(c._payload)),E.isValidElement(c)){const p=y0(c),y=v0(f,c.props);return c.type!==E.Fragment&&(y.ref=u?Wd(u,p):p),E.cloneElement(c,y)}return E.Children.count(c)>1?E.Children.only(null):null});return l.displayName=`${o}.SlotClone`,l}var m0=Symbol("radix.slottable");function g0(o){return E.isValidElement(o)&&typeof o.type=="function"&&"__radixId"in o.type&&o.type.__radixId===m0}function v0(o,l){const i={...l};for(const u in l){const c=o[u],f=l[u];/^on[A-Z]/.test(u)?c&&f?i[u]=(...y)=>{const m=f(...y);return c(...y),m}:c&&(i[u]=c):u==="style"?i[u]={...c,...f}:u==="className"&&(i[u]=[c,f].filter(Boolean).join(" "))}return{...o,...i}}function y0(o){let l=Object.getOwnPropertyDescriptor(o.props,"ref")?.get,i=l&&"isReactWarning"in l&&l.isReactWarning;return i?o.ref:(l=Object.getOwnPropertyDescriptor(o,"ref")?.get,i=l&&"isReactWarning"in l&&l.isReactWarning,i?o.props.ref:o.props.ref||o.ref)}function qd(o){var l,i,u="";if(typeof o=="string"||typeof o=="number")u+=o;else if(typeof o=="object")if(Array.isArray(o)){var c=o.length;for(l=0;l<c;l++)o[l]&&(i=qd(o[l]))&&(u&&(u+=" "),u+=i)}else for(i in o)o[i]&&(u&&(u+=" "),u+=i);return u}function Kd(){for(var o,l,i=0,u="",c=arguments.length;i<c;i++)(o=arguments[i])&&(l=qd(o))&&(u&&(u+=" "),u+=l);return u}const pd=o=>typeof o=="boolean"?`${o}`:o===0?"0":o,hd=Kd,b0=(o,l)=>i=>{var u;if(l?.variants==null)return hd(o,i?.class,i?.className);const{variants:c,defaultVariants:f}=l,p=Object.keys(c).map(v=>{const w=i?.[v],S=f?.[v];if(w===null)return null;const O=pd(w)||pd(S);return c[v][O]}),y=i&&Object.entries(i).reduce((v,w)=>{let[S,O]=w;return O===void 0||(v[S]=O),v},{}),m=l==null||(u=l.compoundVariants)===null||u===void 0?void 0:u.reduce((v,w)=>{let{class:S,className:O,...F}=w;return Object.entries(F).every(D=>{let[_,R]=D;return Array.isArray(R)?R.includes({...f,...y}[_]):{...f,...y}[_]===R})?[...v,S,O]:v},[]);return hd(o,p,m,i?.class,i?.className)},x0=(o,l)=>{const i=new Array(o.length+l.length);for(let u=0;u<o.length;u++)i[u]=o[u];for(let u=0;u<l.length;u++)i[o.length+u]=l[u];return i},k0=(o,l)=>({classGroupId:o,validator:l}),Gd=(o=new Map,l=null,i)=>({nextPart:o,validators:l,classGroupId:i}),Ta="-",md=[],w0="arbitrary..",S0=o=>{const l=E0(o),{conflictingClassGroups:i,conflictingClassGroupModifiers:u}=o;return{getClassGroupId:p=>{if(p.startsWith("[")&&p.endsWith("]"))return P0(p);const y=p.split(Ta),m=y[0]===""&&y.length>1?1:0;return Yd(y,m,l)},getConflictingClassGroupIds:(p,y)=>{if(y){const m=u[p],v=i[p];return m?v?x0(v,m):m:v||md}return i[p]||md}}},Yd=(o,l,i)=>{if(o.length-l===0)return i.classGroupId;const c=o[l],f=i.nextPart.get(c);if(f){const v=Yd(o,l+1,f);if(v)return v}const p=i.validators;if(p===null)return;const y=l===0?o.join(Ta):o.slice(l).join(Ta),m=p.length;for(let v=0;v<m;v++){const w=p[v];if(w.validator(y))return w.classGroupId}},P0=o=>o.slice(1,-1).indexOf(":")===-1?void 0:(()=>{const l=o.slice(1,-1),i=l.indexOf(":"),u=l.slice(0,i);return u?w0+u:void 0})(),E0=o=>{const{theme:l,classGroups:i}=o;return C0(i,l)},C0=(o,l)=>{const i=Gd();for(const u in o){const c=o[u];ns(c,i,u,l)}return i},ns=(o,l,i,u)=>{const c=o.length;for(let f=0;f<c;f++){const p=o[f];_0(p,l,i,u)}},_0=(o,l,i,u)=>{if(typeof o=="string"){O0(o,l,i);return}if(typeof o=="function"){N0(o,l,i,u);return}R0(o,l,i,u)},O0=(o,l,i)=>{const u=o===""?l:Xd(l,o);u.classGroupId=i},N0=(o,l,i,u)=>{if(z0(o)){ns(o(u),l,i,u);return}l.validators===null&&(l.validators=[]),l.validators.push(k0(i,o))},R0=(o,l,i,u)=>{const c=Object.entries(o),f=c.length;for(let p=0;p<f;p++){const[y,m]=c[p];ns(m,Xd(l,y),i,u)}},Xd=(o,l)=>{let i=o;const u=l.split(Ta),c=u.length;for(let f=0;f<c;f++){const p=u[f];let y=i.nextPart.get(p);y||(y=Gd(),i.nextPart.set(p,y)),i=y}return i},z0=o=>"isThemeGetter"in o&&o.isThemeGetter===!0,T0=o=>{if(o<1)return{get:()=>{},set:()=>{}};let l=0,i=Object.create(null),u=Object.create(null);const c=(f,p)=>{i[f]=p,l++,l>o&&(l=0,u=i,i=Object.create(null))};return{get(f){let p=i[f];if(p!==void 0)return p;if((p=u[f])!==void 0)return c(f,p),p},set(f,p){f in i?i[f]=p:c(f,p)}}},ql="!",gd=":",L0=[],vd=(o,l,i,u,c)=>({modifiers:o,hasImportantModifier:l,baseClassName:i,maybePostfixModifierPosition:u,isExternal:c}),j0=o=>{const{prefix:l,experimentalParseClassName:i}=o;let u=c=>{const f=[];let p=0,y=0,m=0,v;const w=c.length;for(let _=0;_<w;_++){const R=c[_];if(p===0&&y===0){if(R===gd){f.push(c.slice(m,_)),m=_+1;continue}if(R==="/"){v=_;continue}}R==="["?p++:R==="]"?p--:R==="("?y++:R===")"&&y--}const S=f.length===0?c:c.slice(m);let O=S,F=!1;S.endsWith(ql)?(O=S.slice(0,-1),F=!0):S.startsWith(ql)&&(O=S.slice(1),F=!0);const D=v&&v>m?v-m:void 0;return vd(f,F,O,D)};if(l){const c=l+gd,f=u;u=p=>p.startsWith(c)?f(p.slice(c.length)):vd(L0,!1,p,void 0,!0)}if(i){const c=u;u=f=>i({className:f,parseClassName:c})}return u},M0=o=>{const l=new Map;return o.orderSensitiveModifiers.forEach((i,u)=>{l.set(i,1e6+u)}),i=>{const u=[];let c=[];for(let f=0;f<i.length;f++){const p=i[f],y=p[0]==="[",m=l.has(p);y||m?(c.length>0&&(c.sort(),u.push(...c),c=[]),u.push(p)):c.push(p)}return c.length>0&&(c.sort(),u.push(...c)),u}},D0=o=>({cache:T0(o.cacheSize),parseClassName:j0(o),sortModifiers:M0(o),...S0(o)}),A0=/\s+/,F0=(o,l)=>{const{parseClassName:i,getClassGroupId:u,getConflictingClassGroupIds:c,sortModifiers:f}=l,p=[],y=o.trim().split(A0);let m="";for(let v=y.length-1;v>=0;v-=1){const w=y[v],{isExternal:S,modifiers:O,hasImportantModifier:F,baseClassName:D,maybePostfixModifierPosition:_}=i(w);if(S){m=w+(m.length>0?" "+m:m);continue}let R=!!_,I=u(R?D.substring(0,_):D);if(!I){if(!R){m=w+(m.length>0?" "+m:m);continue}if(I=u(D),!I){m=w+(m.length>0?" "+m:m);continue}R=!1}const U=O.length===0?"":O.length===1?O[0]:f(O).join(":"),K=F?U+ql:U,ae=K+I;if(p.indexOf(ae)>-1)continue;p.push(ae);const le=c(I,R);for(let de=0;de<le.length;++de){const pe=le[de];p.push(K+pe)}m=w+(m.length>0?" "+m:m)}return m},I0=(...o)=>{let l=0,i,u,c="";for(;l<o.length;)(i=o[l++])&&(u=Jd(i))&&(c&&(c+=" "),c+=u);return c},Jd=o=>{if(typeof o=="string")return o;let l,i="";for(let u=0;u<o.length;u++)o[u]&&(l=Jd(o[u]))&&(i&&(i+=" "),i+=l);return i},B0=(o,...l)=>{let i,u,c,f;const p=m=>{const v=l.reduce((w,S)=>S(w),o());return i=D0(v),u=i.cache.get,c=i.cache.set,f=y,y(m)},y=m=>{const v=u(m);if(v)return v;const w=F0(m,i);return c(m,w),w};return f=p,(...m)=>f(I0(...m))},U0=[],Fe=o=>{const l=i=>i[o]||U0;return l.isThemeGetter=!0,l},Zd=/^\[(?:(\w[\w-]*):)?(.+)\]$/i,ef=/^\((?:(\w[\w-]*):)?(.+)\)$/i,$0=/^\d+\/\d+$/,V0=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,H0=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,W0=/^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,Q0=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,q0=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,sr=o=>$0.test(o),se=o=>!!o&&!Number.isNaN(Number(o)),bt=o=>!!o&&Number.isInteger(Number(o)),$l=o=>o.endsWith("%")&&se(o.slice(0,-1)),Kn=o=>V0.test(o),K0=()=>!0,G0=o=>H0.test(o)&&!W0.test(o),nf=()=>!1,Y0=o=>Q0.test(o),X0=o=>q0.test(o),J0=o=>!Q(o)&&!q(o),Z0=o=>gr(o,of,nf),Q=o=>Zd.test(o),Mt=o=>gr(o,af,G0),Vl=o=>gr(o,og,se),yd=o=>gr(o,tf,nf),eg=o=>gr(o,rf,X0),Pa=o=>gr(o,lf,Y0),q=o=>ef.test(o),ao=o=>vr(o,af),ng=o=>vr(o,ag),bd=o=>vr(o,tf),tg=o=>vr(o,of),rg=o=>vr(o,rf),Ea=o=>vr(o,lf,!0),gr=(o,l,i)=>{const u=Zd.exec(o);return u?u[1]?l(u[1]):i(u[2]):!1},vr=(o,l,i=!1)=>{const u=ef.exec(o);return u?u[1]?l(u[1]):i:!1},tf=o=>o==="position"||o==="percentage",rf=o=>o==="image"||o==="url",of=o=>o==="length"||o==="size"||o==="bg-size",af=o=>o==="length",og=o=>o==="number",ag=o=>o==="family-name",lf=o=>o==="shadow",ig=()=>{const o=Fe("color"),l=Fe("font"),i=Fe("text"),u=Fe("font-weight"),c=Fe("tracking"),f=Fe("leading"),p=Fe("breakpoint"),y=Fe("container"),m=Fe("spacing"),v=Fe("radius"),w=Fe("shadow"),S=Fe("inset-shadow"),O=Fe("text-shadow"),F=Fe("drop-shadow"),D=Fe("blur"),_=Fe("perspective"),R=Fe("aspect"),I=Fe("ease"),U=Fe("animate"),K=()=>["auto","avoid","all","avoid-page","page","left","right","column"],ae=()=>["center","top","bottom","left","right","top-left","left-top","top-right","right-top","bottom-right","right-bottom","bottom-left","left-bottom"],le=()=>[...ae(),q,Q],de=()=>["auto","hidden","clip","visible","scroll"],pe=()=>["auto","contain","none"],V=()=>[q,Q,m],ie=()=>[sr,"full","auto",...V()],Me=()=>[bt,"none","subgrid",q,Q],un=()=>["auto",{span:["full",bt,q,Q]},bt,q,Q],Je=()=>[bt,"auto",q,Q],qe=()=>["auto","min","max","fr",q,Q],Ze=()=>["start","end","center","between","around","evenly","stretch","baseline","center-safe","end-safe"],He=()=>["start","end","center","stretch","center-safe","end-safe"],Ee=()=>["auto",...V()],ye=()=>[sr,"auto","full","dvw","dvh","lvw","lvh","svw","svh","min","max","fit",...V()],z=()=>[o,q,Q],Z=()=>[...ae(),bd,yd,{position:[q,Q]}],$=()=>["no-repeat",{repeat:["","x","y","space","round"]}],x=()=>["auto","cover","contain",tg,Z0,{size:[q,Q]}],T=()=>[$l,ao,Mt],J=()=>["","none","full",v,q,Q],te=()=>["",se,ao,Mt],ce=()=>["solid","dashed","dotted","double"],fe=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],oe=()=>[se,$l,bd,yd],me=()=>["","none",D,q,Q],be=()=>["none",se,q,Q],Be=()=>["none",se,q,Q],Zn=()=>[se,q,Q],kt=()=>[sr,"full",...V()];return{cacheSize:500,theme:{animate:["spin","ping","pulse","bounce"],aspect:["video"],blur:[Kn],breakpoint:[Kn],color:[K0],container:[Kn],"drop-shadow":[Kn],ease:["in","out","in-out"],font:[J0],"font-weight":["thin","extralight","light","normal","medium","semibold","bold","extrabold","black"],"inset-shadow":[Kn],leading:["none","tight","snug","normal","relaxed","loose"],perspective:["dramatic","near","normal","midrange","distant","none"],radius:[Kn],shadow:[Kn],spacing:["px",se],text:[Kn],"text-shadow":[Kn],tracking:["tighter","tight","normal","wide","wider","widest"]},classGroups:{aspect:[{aspect:["auto","square",sr,Q,q,R]}],container:["container"],columns:[{columns:[se,Q,q,y]}],"break-after":[{"break-after":K()}],"break-before":[{"break-before":K()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],sr:["sr-only","not-sr-only"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:le()}],overflow:[{overflow:de()}],"overflow-x":[{"overflow-x":de()}],"overflow-y":[{"overflow-y":de()}],overscroll:[{overscroll:pe()}],"overscroll-x":[{"overscroll-x":pe()}],"overscroll-y":[{"overscroll-y":pe()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:ie()}],"inset-x":[{"inset-x":ie()}],"inset-y":[{"inset-y":ie()}],start:[{start:ie()}],end:[{end:ie()}],top:[{top:ie()}],right:[{right:ie()}],bottom:[{bottom:ie()}],left:[{left:ie()}],visibility:["visible","invisible","collapse"],z:[{z:[bt,"auto",q,Q]}],basis:[{basis:[sr,"full","auto",y,...V()]}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["nowrap","wrap","wrap-reverse"]}],flex:[{flex:[se,sr,"auto","initial","none",Q]}],grow:[{grow:["",se,q,Q]}],shrink:[{shrink:["",se,q,Q]}],order:[{order:[bt,"first","last","none",q,Q]}],"grid-cols":[{"grid-cols":Me()}],"col-start-end":[{col:un()}],"col-start":[{"col-start":Je()}],"col-end":[{"col-end":Je()}],"grid-rows":[{"grid-rows":Me()}],"row-start-end":[{row:un()}],"row-start":[{"row-start":Je()}],"row-end":[{"row-end":Je()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":qe()}],"auto-rows":[{"auto-rows":qe()}],gap:[{gap:V()}],"gap-x":[{"gap-x":V()}],"gap-y":[{"gap-y":V()}],"justify-content":[{justify:[...Ze(),"normal"]}],"justify-items":[{"justify-items":[...He(),"normal"]}],"justify-self":[{"justify-self":["auto",...He()]}],"align-content":[{content:["normal",...Ze()]}],"align-items":[{items:[...He(),{baseline:["","last"]}]}],"align-self":[{self:["auto",...He(),{baseline:["","last"]}]}],"place-content":[{"place-content":Ze()}],"place-items":[{"place-items":[...He(),"baseline"]}],"place-self":[{"place-self":["auto",...He()]}],p:[{p:V()}],px:[{px:V()}],py:[{py:V()}],ps:[{ps:V()}],pe:[{pe:V()}],pt:[{pt:V()}],pr:[{pr:V()}],pb:[{pb:V()}],pl:[{pl:V()}],m:[{m:Ee()}],mx:[{mx:Ee()}],my:[{my:Ee()}],ms:[{ms:Ee()}],me:[{me:Ee()}],mt:[{mt:Ee()}],mr:[{mr:Ee()}],mb:[{mb:Ee()}],ml:[{ml:Ee()}],"space-x":[{"space-x":V()}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":V()}],"space-y-reverse":["space-y-reverse"],size:[{size:ye()}],w:[{w:[y,"screen",...ye()]}],"min-w":[{"min-w":[y,"screen","none",...ye()]}],"max-w":[{"max-w":[y,"screen","none","prose",{screen:[p]},...ye()]}],h:[{h:["screen","lh",...ye()]}],"min-h":[{"min-h":["screen","lh","none",...ye()]}],"max-h":[{"max-h":["screen","lh",...ye()]}],"font-size":[{text:["base",i,ao,Mt]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:[u,q,Vl]}],"font-stretch":[{"font-stretch":["ultra-condensed","extra-condensed","condensed","semi-condensed","normal","semi-expanded","expanded","extra-expanded","ultra-expanded",$l,Q]}],"font-family":[{font:[ng,Q,l]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:[c,q,Q]}],"line-clamp":[{"line-clamp":[se,"none",q,Vl]}],leading:[{leading:[f,...V()]}],"list-image":[{"list-image":["none",q,Q]}],"list-style-position":[{list:["inside","outside"]}],"list-style-type":[{list:["disc","decimal","none",q,Q]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"placeholder-color":[{placeholder:z()}],"text-color":[{text:z()}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...ce(),"wavy"]}],"text-decoration-thickness":[{decoration:[se,"from-font","auto",q,Mt]}],"text-decoration-color":[{decoration:z()}],"underline-offset":[{"underline-offset":[se,"auto",q,Q]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:V()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",q,Q]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],wrap:[{wrap:["break-word","anywhere","normal"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",q,Q]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:Z()}],"bg-repeat":[{bg:$()}],"bg-size":[{bg:x()}],"bg-image":[{bg:["none",{linear:[{to:["t","tr","r","br","b","bl","l","tl"]},bt,q,Q],radial:["",q,Q],conic:[bt,q,Q]},rg,eg]}],"bg-color":[{bg:z()}],"gradient-from-pos":[{from:T()}],"gradient-via-pos":[{via:T()}],"gradient-to-pos":[{to:T()}],"gradient-from":[{from:z()}],"gradient-via":[{via:z()}],"gradient-to":[{to:z()}],rounded:[{rounded:J()}],"rounded-s":[{"rounded-s":J()}],"rounded-e":[{"rounded-e":J()}],"rounded-t":[{"rounded-t":J()}],"rounded-r":[{"rounded-r":J()}],"rounded-b":[{"rounded-b":J()}],"rounded-l":[{"rounded-l":J()}],"rounded-ss":[{"rounded-ss":J()}],"rounded-se":[{"rounded-se":J()}],"rounded-ee":[{"rounded-ee":J()}],"rounded-es":[{"rounded-es":J()}],"rounded-tl":[{"rounded-tl":J()}],"rounded-tr":[{"rounded-tr":J()}],"rounded-br":[{"rounded-br":J()}],"rounded-bl":[{"rounded-bl":J()}],"border-w":[{border:te()}],"border-w-x":[{"border-x":te()}],"border-w-y":[{"border-y":te()}],"border-w-s":[{"border-s":te()}],"border-w-e":[{"border-e":te()}],"border-w-t":[{"border-t":te()}],"border-w-r":[{"border-r":te()}],"border-w-b":[{"border-b":te()}],"border-w-l":[{"border-l":te()}],"divide-x":[{"divide-x":te()}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":te()}],"divide-y-reverse":["divide-y-reverse"],"border-style":[{border:[...ce(),"hidden","none"]}],"divide-style":[{divide:[...ce(),"hidden","none"]}],"border-color":[{border:z()}],"border-color-x":[{"border-x":z()}],"border-color-y":[{"border-y":z()}],"border-color-s":[{"border-s":z()}],"border-color-e":[{"border-e":z()}],"border-color-t":[{"border-t":z()}],"border-color-r":[{"border-r":z()}],"border-color-b":[{"border-b":z()}],"border-color-l":[{"border-l":z()}],"divide-color":[{divide:z()}],"outline-style":[{outline:[...ce(),"none","hidden"]}],"outline-offset":[{"outline-offset":[se,q,Q]}],"outline-w":[{outline:["",se,ao,Mt]}],"outline-color":[{outline:z()}],shadow:[{shadow:["","none",w,Ea,Pa]}],"shadow-color":[{shadow:z()}],"inset-shadow":[{"inset-shadow":["none",S,Ea,Pa]}],"inset-shadow-color":[{"inset-shadow":z()}],"ring-w":[{ring:te()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:z()}],"ring-offset-w":[{"ring-offset":[se,Mt]}],"ring-offset-color":[{"ring-offset":z()}],"inset-ring-w":[{"inset-ring":te()}],"inset-ring-color":[{"inset-ring":z()}],"text-shadow":[{"text-shadow":["none",O,Ea,Pa]}],"text-shadow-color":[{"text-shadow":z()}],opacity:[{opacity:[se,q,Q]}],"mix-blend":[{"mix-blend":[...fe(),"plus-darker","plus-lighter"]}],"bg-blend":[{"bg-blend":fe()}],"mask-clip":[{"mask-clip":["border","padding","content","fill","stroke","view"]},"mask-no-clip"],"mask-composite":[{mask:["add","subtract","intersect","exclude"]}],"mask-image-linear-pos":[{"mask-linear":[se]}],"mask-image-linear-from-pos":[{"mask-linear-from":oe()}],"mask-image-linear-to-pos":[{"mask-linear-to":oe()}],"mask-image-linear-from-color":[{"mask-linear-from":z()}],"mask-image-linear-to-color":[{"mask-linear-to":z()}],"mask-image-t-from-pos":[{"mask-t-from":oe()}],"mask-image-t-to-pos":[{"mask-t-to":oe()}],"mask-image-t-from-color":[{"mask-t-from":z()}],"mask-image-t-to-color":[{"mask-t-to":z()}],"mask-image-r-from-pos":[{"mask-r-from":oe()}],"mask-image-r-to-pos":[{"mask-r-to":oe()}],"mask-image-r-from-color":[{"mask-r-from":z()}],"mask-image-r-to-color":[{"mask-r-to":z()}],"mask-image-b-from-pos":[{"mask-b-from":oe()}],"mask-image-b-to-pos":[{"mask-b-to":oe()}],"mask-image-b-from-color":[{"mask-b-from":z()}],"mask-image-b-to-color":[{"mask-b-to":z()}],"mask-image-l-from-pos":[{"mask-l-from":oe()}],"mask-image-l-to-pos":[{"mask-l-to":oe()}],"mask-image-l-from-color":[{"mask-l-from":z()}],"mask-image-l-to-color":[{"mask-l-to":z()}],"mask-image-x-from-pos":[{"mask-x-from":oe()}],"mask-image-x-to-pos":[{"mask-x-to":oe()}],"mask-image-x-from-color":[{"mask-x-from":z()}],"mask-image-x-to-color":[{"mask-x-to":z()}],"mask-image-y-from-pos":[{"mask-y-from":oe()}],"mask-image-y-to-pos":[{"mask-y-to":oe()}],"mask-image-y-from-color":[{"mask-y-from":z()}],"mask-image-y-to-color":[{"mask-y-to":z()}],"mask-image-radial":[{"mask-radial":[q,Q]}],"mask-image-radial-from-pos":[{"mask-radial-from":oe()}],"mask-image-radial-to-pos":[{"mask-radial-to":oe()}],"mask-image-radial-from-color":[{"mask-radial-from":z()}],"mask-image-radial-to-color":[{"mask-radial-to":z()}],"mask-image-radial-shape":[{"mask-radial":["circle","ellipse"]}],"mask-image-radial-size":[{"mask-radial":[{closest:["side","corner"],farthest:["side","corner"]}]}],"mask-image-radial-pos":[{"mask-radial-at":ae()}],"mask-image-conic-pos":[{"mask-conic":[se]}],"mask-image-conic-from-pos":[{"mask-conic-from":oe()}],"mask-image-conic-to-pos":[{"mask-conic-to":oe()}],"mask-image-conic-from-color":[{"mask-conic-from":z()}],"mask-image-conic-to-color":[{"mask-conic-to":z()}],"mask-mode":[{mask:["alpha","luminance","match"]}],"mask-origin":[{"mask-origin":["border","padding","content","fill","stroke","view"]}],"mask-position":[{mask:Z()}],"mask-repeat":[{mask:$()}],"mask-size":[{mask:x()}],"mask-type":[{"mask-type":["alpha","luminance"]}],"mask-image":[{mask:["none",q,Q]}],filter:[{filter:["","none",q,Q]}],blur:[{blur:me()}],brightness:[{brightness:[se,q,Q]}],contrast:[{contrast:[se,q,Q]}],"drop-shadow":[{"drop-shadow":["","none",F,Ea,Pa]}],"drop-shadow-color":[{"drop-shadow":z()}],grayscale:[{grayscale:["",se,q,Q]}],"hue-rotate":[{"hue-rotate":[se,q,Q]}],invert:[{invert:["",se,q,Q]}],saturate:[{saturate:[se,q,Q]}],sepia:[{sepia:["",se,q,Q]}],"backdrop-filter":[{"backdrop-filter":["","none",q,Q]}],"backdrop-blur":[{"backdrop-blur":me()}],"backdrop-brightness":[{"backdrop-brightness":[se,q,Q]}],"backdrop-contrast":[{"backdrop-contrast":[se,q,Q]}],"backdrop-grayscale":[{"backdrop-grayscale":["",se,q,Q]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[se,q,Q]}],"backdrop-invert":[{"backdrop-invert":["",se,q,Q]}],"backdrop-opacity":[{"backdrop-opacity":[se,q,Q]}],"backdrop-saturate":[{"backdrop-saturate":[se,q,Q]}],"backdrop-sepia":[{"backdrop-sepia":["",se,q,Q]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":V()}],"border-spacing-x":[{"border-spacing-x":V()}],"border-spacing-y":[{"border-spacing-y":V()}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["","all","colors","opacity","shadow","transform","none",q,Q]}],"transition-behavior":[{transition:["normal","discrete"]}],duration:[{duration:[se,"initial",q,Q]}],ease:[{ease:["linear","initial",I,q,Q]}],delay:[{delay:[se,q,Q]}],animate:[{animate:["none",U,q,Q]}],backface:[{backface:["hidden","visible"]}],perspective:[{perspective:[_,q,Q]}],"perspective-origin":[{"perspective-origin":le()}],rotate:[{rotate:be()}],"rotate-x":[{"rotate-x":be()}],"rotate-y":[{"rotate-y":be()}],"rotate-z":[{"rotate-z":be()}],scale:[{scale:Be()}],"scale-x":[{"scale-x":Be()}],"scale-y":[{"scale-y":Be()}],"scale-z":[{"scale-z":Be()}],"scale-3d":["scale-3d"],skew:[{skew:Zn()}],"skew-x":[{"skew-x":Zn()}],"skew-y":[{"skew-y":Zn()}],transform:[{transform:[q,Q,"","none","gpu","cpu"]}],"transform-origin":[{origin:le()}],"transform-style":[{transform:["3d","flat"]}],translate:[{translate:kt()}],"translate-x":[{"translate-x":kt()}],"translate-y":[{"translate-y":kt()}],"translate-z":[{"translate-z":kt()}],"translate-none":["translate-none"],accent:[{accent:z()}],appearance:[{appearance:["none","auto"]}],"caret-color":[{caret:z()}],"color-scheme":[{scheme:["normal","dark","light","light-dark","only-dark","only-light"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",q,Q]}],"field-sizing":[{"field-sizing":["fixed","content"]}],"pointer-events":[{"pointer-events":["auto","none"]}],resize:[{resize:["none","","y","x"]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":V()}],"scroll-mx":[{"scroll-mx":V()}],"scroll-my":[{"scroll-my":V()}],"scroll-ms":[{"scroll-ms":V()}],"scroll-me":[{"scroll-me":V()}],"scroll-mt":[{"scroll-mt":V()}],"scroll-mr":[{"scroll-mr":V()}],"scroll-mb":[{"scroll-mb":V()}],"scroll-ml":[{"scroll-ml":V()}],"scroll-p":[{"scroll-p":V()}],"scroll-px":[{"scroll-px":V()}],"scroll-py":[{"scroll-py":V()}],"scroll-ps":[{"scroll-ps":V()}],"scroll-pe":[{"scroll-pe":V()}],"scroll-pt":[{"scroll-pt":V()}],"scroll-pr":[{"scroll-pr":V()}],"scroll-pb":[{"scroll-pb":V()}],"scroll-pl":[{"scroll-pl":V()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",q,Q]}],fill:[{fill:["none",...z()]}],"stroke-w":[{stroke:[se,ao,Mt,Vl]}],stroke:[{stroke:["none",...z()]}],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-x","border-w-y","border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-x","border-color-y","border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],translate:["translate-x","translate-y","translate-none"],"translate-none":["translate","translate-x","translate-y","translate-z"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]},orderSensitiveModifiers:["*","**","after","backdrop","before","details-content","file","first-letter","first-line","marker","placeholder","selection"]}},lg=B0(ig);function sg(...o){return lg(Kd(o))}const ug=b0("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",outline:"border bg-background text-foreground hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2 has-[>svg]:px-3",sm:"h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",lg:"h-10 rounded-md px-6 has-[>svg]:px-4",icon:"size-9 rounded-md"}},defaultVariants:{variant:"default",size:"default"}});function xd({className:o,variant:l,size:i,asChild:u=!1,...c}){const f=u?p0:"button";return N.jsx(f,{"data-slot":"button",className:sg(ug({variant:l,size:i,className:o})),...c})}function cg(){const[o,l]=E.useState(!1),i=Ma(),u=()=>{i("/#beranda")},c=()=>{i("/#tentang")},f=()=>{i("/#panduan")},p=()=>{i("/#kontak")};return N.jsx("nav",{className:"fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200",children:N.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[N.jsxs("div",{className:"flex items-center justify-between h-16",children:[N.jsx("div",{className:"flex items-center",children:N.jsxs("button",{onClick:u,className:"flex items-center space-x-2 hover:opacity-80 transition-opacity",children:[N.jsx("div",{className:"w-8 h-8 bg-[#3B82F6] rounded-lg flex items-center justify-center",children:N.jsx("span",{className:"text-white",children:"📚"})}),N.jsx("span",{className:"text-gray-900",children:"PASMA"})]})}),N.jsxs("div",{className:"hidden md:flex items-center space-x-8",children:[N.jsx("button",{onClick:u,className:"text-gray-700 hover:text-[#3B82F6] transition-colors",children:"Beranda"}),N.jsx("button",{onClick:f,className:"text-gray-700 hover:text-[#3B82F6] transition-colors",children:"Panduan"}),N.jsx("button",{onClick:c,className:"text-gray-700 hover:text-[#3B82F6] transition-colors",children:"Tentang"}),N.jsx("button",{onClick:p,className:"text-gray-700 hover:text-[#3B82F6] transition-colors",children:"Kontak"}),N.jsx(xd,{onClick:f,className:"bg-[#3B82F6] hover:bg-[#2563EB]",children:"Mulai Belajar"})]}),N.jsx("div",{className:"md:hidden",children:N.jsx("button",{onClick:()=>l(!o),className:"text-gray-700 hover:text-[#3B82F6]",children:o?N.jsx(l0,{size:24}):N.jsx(r0,{size:24})})})]}),o&&N.jsx("div",{className:"md:hidden py-4 border-t border-gray-200",children:N.jsxs("div",{className:"flex flex-col space-y-4",children:[N.jsx("button",{onClick:u,className:"text-gray-700 hover:text-[#3B82F6] transition-colors text-left",children:"Beranda"}),N.jsx("button",{onClick:f,className:"text-gray-700 hover:text-[#3B82F6] transition-colors text-left",children:"Panduan"}),N.jsx("button",{onClick:c,className:"text-gray-700 hover:text-[#3B82F6] transition-colors text-left",children:"Tentang"}),N.jsx("button",{onClick:p,className:"text-gray-700 hover:text-[#3B82F6] transition-colors text-left",children:"Kontak"}),N.jsx(xd,{onClick:f,className:"bg-[#3B82F6] hover:bg-[#2563EB] w-full",children:"Mulai Belajar"})]})})]})})}function dg(){const o=Ma(),l=()=>{o("/#beranda")},i=()=>{o("/#tentang")},u=()=>{o("/#panduan")};return N.jsx("footer",{id:"kontak",className:"bg-gray-900 text-white pt-16 pb-8",children:N.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[N.jsxs("div",{className:"grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12",children:[N.jsxs("div",{className:"space-y-4",children:[N.jsxs("div",{className:"flex items-center space-x-2",children:[N.jsx("div",{className:"w-8 h-8 bg-[#3B82F6] rounded-lg flex items-center justify-center",children:N.jsx("span",{children:"📚"})}),N.jsx("span",{children:"PASMA"})]}),N.jsx("p",{className:"text-gray-400",children:"Platform edukasi modern untuk membantu siswa SMA meraih masa depan yang cerah."}),N.jsxs("div",{className:"flex gap-3",children:[N.jsx("a",{href:"#",className:"w-10 h-10 bg-gray-800 hover:bg-[#3B82F6] rounded-lg flex items-center justify-center transition-colors","aria-label":"Facebook",children:N.jsx(Xm,{className:"w-5 h-5"})}),N.jsx("a",{href:"#",className:"w-10 h-10 bg-gray-800 hover:bg-[#3B82F6] rounded-lg flex items-center justify-center transition-colors","aria-label":"Instagram",children:N.jsx(Zm,{className:"w-5 h-5"})}),N.jsx("a",{href:"#",className:"w-10 h-10 bg-gray-800 hover:bg-[#3B82F6] rounded-lg flex items-center justify-center transition-colors","aria-label":"Twitter",children:N.jsx(a0,{className:"w-5 h-5"})}),N.jsx("a",{href:"#",className:"w-10 h-10 bg-gray-800 hover:bg-[#3B82F6] rounded-lg flex items-center justify-center transition-colors","aria-label":"YouTube",children:N.jsx(u0,{className:"w-5 h-5"})})]})]}),N.jsxs("div",{children:[N.jsx("h3",{className:"mb-4",children:"Menu Cepat"}),N.jsxs("ul",{className:"space-y-2",children:[N.jsx("li",{children:N.jsx("button",{onClick:l,className:"text-gray-400 hover:text-[#3B82F6] transition-colors",children:"Beranda"})}),N.jsx("li",{children:N.jsx("button",{onClick:u,className:"text-gray-400 hover:text-[#3B82F6] transition-colors",children:"Panduan"})}),N.jsx("li",{children:N.jsx("button",{onClick:i,className:"text-gray-400 hover:text-[#3B82F6] transition-colors",children:"Tentang"})}),N.jsx("li",{children:N.jsx("button",{className:"text-gray-400 hover:text-[#3B82F6] transition-colors",children:"Kontak"})})]})]}),N.jsxs("div",{children:[N.jsx("h3",{className:"mb-4",children:"Kategori Panduan"}),N.jsxs("ul",{className:"space-y-2",children:[N.jsx("li",{children:N.jsx(pr,{to:"/ktp-sim",className:"text-gray-400 hover:text-[#3B82F6] transition-colors",children:"KTP & SIM"})}),N.jsx("li",{children:N.jsx(pr,{to:"/persiapan-kuliah",className:"text-gray-400 hover:text-[#3B82F6] transition-colors",children:"Persiapan Kuliah"})}),N.jsx("li",{children:N.jsx(pr,{to:"/persiapan-karir",className:"text-gray-400 hover:text-[#3B82F6] transition-colors",children:"Perencanaan Karier"})}),N.jsx("li",{children:N.jsx(pr,{to:"/belajar-efektif",className:"text-gray-400 hover:text-[#3B82F6] transition-colors",children:"Belajar Efektif"})})]})]}),N.jsxs("div",{children:[N.jsx("h3",{className:"mb-4",children:"Hubungi Kami"}),N.jsxs("ul",{className:"space-y-2",children:[N.jsxs("li",{className:"flex items-center gap-2 text-gray-400",children:[N.jsx(n0,{className:"w-4 h-4"}),N.jsx("a",{href:"mailto:info@panduansma.id",className:"hover:text-[#3B82F6] transition-colors",children:"info@panduansma.id"})]}),N.jsx("li",{className:"text-gray-400",children:"Jakarta, Indonesia"})]}),N.jsxs("div",{className:"mt-4",children:[N.jsx("p",{className:"text-gray-400 mb-2",children:"Newsletter"}),N.jsxs("div",{className:"flex gap-2",children:[N.jsx("input",{type:"email",placeholder:"Email Anda",className:"flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-[#3B82F6] text-white placeholder-gray-500"}),N.jsx("button",{className:"px-4 py-2 bg-[#3B82F6] hover:bg-[#2563EB] rounded-lg transition-colors",children:"Kirim"})]})]})]})]}),N.jsx("div",{className:"pt-8 border-t border-gray-800",children:N.jsxs("div",{className:"flex flex-col sm:flex-row justify-between items-center gap-4 text-gray-400",children:[N.jsx("p",{children:"© 2025 Panduan SMA. Semua hak cipta dilindungi."}),N.jsxs("div",{className:"flex gap-6",children:[N.jsx("a",{href:"#",className:"hover:text-[#3B82F6] transition-colors",children:"Kebijakan Privasi"}),N.jsx("a",{href:"#",className:"hover:text-[#3B82F6] transition-colors",children:"Syarat & Ketentuan"})]})]})})]})})}function fg(){const o=Jn(),l=Ma(),i=E.useCallback(u=>{if(o.pathname==="/"){const c=document.getElementById(u);if(c){const f=c.getBoundingClientRect().top+window.scrollY-80;window.scrollTo({top:f,behavior:"smooth"})}}else l("/")},[o.pathname,l]);return N.jsxs("div",{className:"flex flex-col min-h-screen",children:[N.jsx(cg,{onScrollToSection:i}),N.jsx("main",{className:"flelx-1",children:N.jsx(dm,{})}),N.jsx(dg,{onScrollToSection:i})]})}function pg(){const{pathname:o,hash:l}=Jn();return E.useEffect(()=>{if(l){const i=l.replace("#",""),u=document.getElementById(i);u?u.scrollIntoView({behavior:"smooth"}):setTimeout(()=>{const c=document.getElementById(i);c&&c.scrollIntoView({behavior:"smooth"})},300)}else window.scrollTo({top:0,behavior:"smooth"})},[o,l]),null}function Ie(o,l){l===void 0&&(l={});var i=l.insertAt;if(o&&typeof document<"u"){var u=document.head||document.getElementsByTagName("head")[0],c=document.createElement("style");c.type="text/css",i==="top"&&u.firstChild?u.insertBefore(c,u.firstChild):u.appendChild(c),c.styleSheet?c.styleSheet.cssText=o:c.appendChild(document.createTextNode(o))}}Ie(`.react-loading-indicator-normalize,
[class$=rli-bounding-box] {
  font-size: 1rem;
  display: inline-block;
  box-sizing: border-box;
  text-align: unset;
  isolation: isolate;
}

.rli-d-i-b {
  display: inline-block;
}

.rli-text-format {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 600;
  width: 90%;
  text-transform: uppercase;
  text-align: center;
  font-size: 0.7em;
  letter-spacing: 0.5px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Avenir Next", "Avenir", "Segoe UI", "Lucida Grande", "Helvetica Neue", "Helvetica", "Fira Sans", "Roboto", "Noto", "Droid Sans", "Cantarell", "Oxygen", "Ubuntu", "Franklin Gothic Medium", "Century Gothic", "Liberation Sans", sans-serif;
}`);var ke=function(){return ke=Object.assign||function(o){for(var l,i=1,u=arguments.length;i<u;i++)for(var c in l=arguments[i])Object.prototype.hasOwnProperty.call(l,c)&&(o[c]=l[c]);return o},ke.apply(this,arguments)};function La(o){return La=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(l){return typeof l}:function(l){return l&&typeof Symbol=="function"&&l.constructor===Symbol&&l!==Symbol.prototype?"symbol":typeof l},La(o)}var hg=/^\s+/,mg=/\s+$/;function X(o,l){if(l=l||{},(o=o||"")instanceof X)return o;if(!(this instanceof X))return new X(o,l);var i=(function(u){var c={r:0,g:0,b:0},f=1,p=null,y=null,m=null,v=!1,w=!1;typeof u=="string"&&(u=(function(D){D=D.replace(hg,"").replace(mg,"").toLowerCase();var _,R=!1;if(Kl[D])D=Kl[D],R=!0;else if(D=="transparent")return{r:0,g:0,b:0,a:0,format:"name"};return(_=Nn.rgb.exec(D))?{r:_[1],g:_[2],b:_[3]}:(_=Nn.rgba.exec(D))?{r:_[1],g:_[2],b:_[3],a:_[4]}:(_=Nn.hsl.exec(D))?{h:_[1],s:_[2],l:_[3]}:(_=Nn.hsla.exec(D))?{h:_[1],s:_[2],l:_[3],a:_[4]}:(_=Nn.hsv.exec(D))?{h:_[1],s:_[2],v:_[3]}:(_=Nn.hsva.exec(D))?{h:_[1],s:_[2],v:_[3],a:_[4]}:(_=Nn.hex8.exec(D))?{r:mn(_[1]),g:mn(_[2]),b:mn(_[3]),a:Cd(_[4]),format:R?"name":"hex8"}:(_=Nn.hex6.exec(D))?{r:mn(_[1]),g:mn(_[2]),b:mn(_[3]),format:R?"name":"hex"}:(_=Nn.hex4.exec(D))?{r:mn(_[1]+""+_[1]),g:mn(_[2]+""+_[2]),b:mn(_[3]+""+_[3]),a:Cd(_[4]+""+_[4]),format:R?"name":"hex8"}:(_=Nn.hex3.exec(D))?{r:mn(_[1]+""+_[1]),g:mn(_[2]+""+_[2]),b:mn(_[3]+""+_[3]),format:R?"name":"hex"}:!1})(u)),La(u)=="object"&&(Gn(u.r)&&Gn(u.g)&&Gn(u.b)?(S=u.r,O=u.g,F=u.b,c={r:255*_e(S,255),g:255*_e(O,255),b:255*_e(F,255)},v=!0,w=String(u.r).substr(-1)==="%"?"prgb":"rgb"):Gn(u.h)&&Gn(u.s)&&Gn(u.v)?(p=io(u.s),y=io(u.v),c=(function(D,_,R){D=6*_e(D,360),_=_e(_,100),R=_e(R,100);var I=Math.floor(D),U=D-I,K=R*(1-_),ae=R*(1-U*_),le=R*(1-(1-U)*_),de=I%6,pe=[R,ae,K,K,le,R][de],V=[le,R,R,ae,K,K][de],ie=[K,K,le,R,R,ae][de];return{r:255*pe,g:255*V,b:255*ie}})(u.h,p,y),v=!0,w="hsv"):Gn(u.h)&&Gn(u.s)&&Gn(u.l)&&(p=io(u.s),m=io(u.l),c=(function(D,_,R){var I,U,K;function ae(pe,V,ie){return ie<0&&(ie+=1),ie>1&&(ie-=1),ie<1/6?pe+6*(V-pe)*ie:ie<.5?V:ie<2/3?pe+(V-pe)*(2/3-ie)*6:pe}if(D=_e(D,360),_=_e(_,100),R=_e(R,100),_===0)I=U=K=R;else{var le=R<.5?R*(1+_):R+_-R*_,de=2*R-le;I=ae(de,le,D+1/3),U=ae(de,le,D),K=ae(de,le,D-1/3)}return{r:255*I,g:255*U,b:255*K}})(u.h,p,m),v=!0,w="hsl"),u.hasOwnProperty("a")&&(f=u.a));var S,O,F;return f=sf(f),{ok:v,format:u.format||w,r:Math.min(255,Math.max(c.r,0)),g:Math.min(255,Math.max(c.g,0)),b:Math.min(255,Math.max(c.b,0)),a:f}})(o);this._originalInput=o,this._r=i.r,this._g=i.g,this._b=i.b,this._a=i.a,this._roundA=Math.round(100*this._a)/100,this._format=l.format||i.format,this._gradientType=l.gradientType,this._r<1&&(this._r=Math.round(this._r)),this._g<1&&(this._g=Math.round(this._g)),this._b<1&&(this._b=Math.round(this._b)),this._ok=i.ok}function kd(o,l,i){o=_e(o,255),l=_e(l,255),i=_e(i,255);var u,c,f=Math.max(o,l,i),p=Math.min(o,l,i),y=(f+p)/2;if(f==p)u=c=0;else{var m=f-p;switch(c=y>.5?m/(2-f-p):m/(f+p),f){case o:u=(l-i)/m+(l<i?6:0);break;case l:u=(i-o)/m+2;break;case i:u=(o-l)/m+4}u/=6}return{h:u,s:c,l:y}}function wd(o,l,i){o=_e(o,255),l=_e(l,255),i=_e(i,255);var u,c,f=Math.max(o,l,i),p=Math.min(o,l,i),y=f,m=f-p;if(c=f===0?0:m/f,f==p)u=0;else{switch(f){case o:u=(l-i)/m+(l<i?6:0);break;case l:u=(i-o)/m+2;break;case i:u=(o-l)/m+4}u/=6}return{h:u,s:c,v:y}}function Sd(o,l,i,u){var c=[Rn(Math.round(o).toString(16)),Rn(Math.round(l).toString(16)),Rn(Math.round(i).toString(16))];return u&&c[0].charAt(0)==c[0].charAt(1)&&c[1].charAt(0)==c[1].charAt(1)&&c[2].charAt(0)==c[2].charAt(1)?c[0].charAt(0)+c[1].charAt(0)+c[2].charAt(0):c.join("")}function Pd(o,l,i,u){return[Rn(uf(u)),Rn(Math.round(o).toString(16)),Rn(Math.round(l).toString(16)),Rn(Math.round(i).toString(16))].join("")}function gg(o,l){l=l===0?0:l||10;var i=X(o).toHsl();return i.s-=l/100,i.s=Aa(i.s),X(i)}function vg(o,l){l=l===0?0:l||10;var i=X(o).toHsl();return i.s+=l/100,i.s=Aa(i.s),X(i)}function yg(o){return X(o).desaturate(100)}function bg(o,l){l=l===0?0:l||10;var i=X(o).toHsl();return i.l+=l/100,i.l=Aa(i.l),X(i)}function xg(o,l){l=l===0?0:l||10;var i=X(o).toRgb();return i.r=Math.max(0,Math.min(255,i.r-Math.round(-l/100*255))),i.g=Math.max(0,Math.min(255,i.g-Math.round(-l/100*255))),i.b=Math.max(0,Math.min(255,i.b-Math.round(-l/100*255))),X(i)}function kg(o,l){l=l===0?0:l||10;var i=X(o).toHsl();return i.l-=l/100,i.l=Aa(i.l),X(i)}function wg(o,l){var i=X(o).toHsl(),u=(i.h+l)%360;return i.h=u<0?360+u:u,X(i)}function Sg(o){var l=X(o).toHsl();return l.h=(l.h+180)%360,X(l)}function Ed(o,l){if(isNaN(l)||l<=0)throw new Error("Argument to polyad must be a positive number");for(var i=X(o).toHsl(),u=[X(o)],c=360/l,f=1;f<l;f++)u.push(X({h:(i.h+f*c)%360,s:i.s,l:i.l}));return u}function Pg(o){var l=X(o).toHsl(),i=l.h;return[X(o),X({h:(i+72)%360,s:l.s,l:l.l}),X({h:(i+216)%360,s:l.s,l:l.l})]}function Eg(o,l,i){l=l||6,i=i||30;var u=X(o).toHsl(),c=360/i,f=[X(o)];for(u.h=(u.h-(c*l>>1)+720)%360;--l;)u.h=(u.h+c)%360,f.push(X(u));return f}function Cg(o,l){l=l||6;for(var i=X(o).toHsv(),u=i.h,c=i.s,f=i.v,p=[],y=1/l;l--;)p.push(X({h:u,s:c,v:f})),f=(f+y)%1;return p}X.prototype={isDark:function(){return this.getBrightness()<128},isLight:function(){return!this.isDark()},isValid:function(){return this._ok},getOriginalInput:function(){return this._originalInput},getFormat:function(){return this._format},getAlpha:function(){return this._a},getBrightness:function(){var o=this.toRgb();return(299*o.r+587*o.g+114*o.b)/1e3},getLuminance:function(){var o,l,i,u=this.toRgb();return o=u.r/255,l=u.g/255,i=u.b/255,.2126*(o<=.03928?o/12.92:Math.pow((o+.055)/1.055,2.4))+.7152*(l<=.03928?l/12.92:Math.pow((l+.055)/1.055,2.4))+.0722*(i<=.03928?i/12.92:Math.pow((i+.055)/1.055,2.4))},setAlpha:function(o){return this._a=sf(o),this._roundA=Math.round(100*this._a)/100,this},toHsv:function(){var o=wd(this._r,this._g,this._b);return{h:360*o.h,s:o.s,v:o.v,a:this._a}},toHsvString:function(){var o=wd(this._r,this._g,this._b),l=Math.round(360*o.h),i=Math.round(100*o.s),u=Math.round(100*o.v);return this._a==1?"hsv("+l+", "+i+"%, "+u+"%)":"hsva("+l+", "+i+"%, "+u+"%, "+this._roundA+")"},toHsl:function(){var o=kd(this._r,this._g,this._b);return{h:360*o.h,s:o.s,l:o.l,a:this._a}},toHslString:function(){var o=kd(this._r,this._g,this._b),l=Math.round(360*o.h),i=Math.round(100*o.s),u=Math.round(100*o.l);return this._a==1?"hsl("+l+", "+i+"%, "+u+"%)":"hsla("+l+", "+i+"%, "+u+"%, "+this._roundA+")"},toHex:function(o){return Sd(this._r,this._g,this._b,o)},toHexString:function(o){return"#"+this.toHex(o)},toHex8:function(o){return(function(l,i,u,c,f){var p=[Rn(Math.round(l).toString(16)),Rn(Math.round(i).toString(16)),Rn(Math.round(u).toString(16)),Rn(uf(c))];return f&&p[0].charAt(0)==p[0].charAt(1)&&p[1].charAt(0)==p[1].charAt(1)&&p[2].charAt(0)==p[2].charAt(1)&&p[3].charAt(0)==p[3].charAt(1)?p[0].charAt(0)+p[1].charAt(0)+p[2].charAt(0)+p[3].charAt(0):p.join("")})(this._r,this._g,this._b,this._a,o)},toHex8String:function(o){return"#"+this.toHex8(o)},toRgb:function(){return{r:Math.round(this._r),g:Math.round(this._g),b:Math.round(this._b),a:this._a}},toRgbString:function(){return this._a==1?"rgb("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+")":"rgba("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+", "+this._roundA+")"},toPercentageRgb:function(){return{r:Math.round(100*_e(this._r,255))+"%",g:Math.round(100*_e(this._g,255))+"%",b:Math.round(100*_e(this._b,255))+"%",a:this._a}},toPercentageRgbString:function(){return this._a==1?"rgb("+Math.round(100*_e(this._r,255))+"%, "+Math.round(100*_e(this._g,255))+"%, "+Math.round(100*_e(this._b,255))+"%)":"rgba("+Math.round(100*_e(this._r,255))+"%, "+Math.round(100*_e(this._g,255))+"%, "+Math.round(100*_e(this._b,255))+"%, "+this._roundA+")"},toName:function(){return this._a===0?"transparent":!(this._a<1)&&(_g[Sd(this._r,this._g,this._b,!0)]||!1)},toFilter:function(o){var l="#"+Pd(this._r,this._g,this._b,this._a),i=l,u=this._gradientType?"GradientType = 1, ":"";if(o){var c=X(o);i="#"+Pd(c._r,c._g,c._b,c._a)}return"progid:DXImageTransform.Microsoft.gradient("+u+"startColorstr="+l+",endColorstr="+i+")"},toString:function(o){var l=!!o;o=o||this._format;var i=!1,u=this._a<1&&this._a>=0;return l||!u||o!=="hex"&&o!=="hex6"&&o!=="hex3"&&o!=="hex4"&&o!=="hex8"&&o!=="name"?(o==="rgb"&&(i=this.toRgbString()),o==="prgb"&&(i=this.toPercentageRgbString()),o!=="hex"&&o!=="hex6"||(i=this.toHexString()),o==="hex3"&&(i=this.toHexString(!0)),o==="hex4"&&(i=this.toHex8String(!0)),o==="hex8"&&(i=this.toHex8String()),o==="name"&&(i=this.toName()),o==="hsl"&&(i=this.toHslString()),o==="hsv"&&(i=this.toHsvString()),i||this.toHexString()):o==="name"&&this._a===0?this.toName():this.toRgbString()},clone:function(){return X(this.toString())},_applyModification:function(o,l){var i=o.apply(null,[this].concat([].slice.call(l)));return this._r=i._r,this._g=i._g,this._b=i._b,this.setAlpha(i._a),this},lighten:function(){return this._applyModification(bg,arguments)},brighten:function(){return this._applyModification(xg,arguments)},darken:function(){return this._applyModification(kg,arguments)},desaturate:function(){return this._applyModification(gg,arguments)},saturate:function(){return this._applyModification(vg,arguments)},greyscale:function(){return this._applyModification(yg,arguments)},spin:function(){return this._applyModification(wg,arguments)},_applyCombination:function(o,l){return o.apply(null,[this].concat([].slice.call(l)))},analogous:function(){return this._applyCombination(Eg,arguments)},complement:function(){return this._applyCombination(Sg,arguments)},monochromatic:function(){return this._applyCombination(Cg,arguments)},splitcomplement:function(){return this._applyCombination(Pg,arguments)},triad:function(){return this._applyCombination(Ed,[3])},tetrad:function(){return this._applyCombination(Ed,[4])}},X.fromRatio=function(o,l){if(La(o)=="object"){var i={};for(var u in o)o.hasOwnProperty(u)&&(i[u]=u==="a"?o[u]:io(o[u]));o=i}return X(o,l)},X.equals=function(o,l){return!(!o||!l)&&X(o).toRgbString()==X(l).toRgbString()},X.random=function(){return X.fromRatio({r:Math.random(),g:Math.random(),b:Math.random()})},X.mix=function(o,l,i){i=i===0?0:i||50;var u=X(o).toRgb(),c=X(l).toRgb(),f=i/100;return X({r:(c.r-u.r)*f+u.r,g:(c.g-u.g)*f+u.g,b:(c.b-u.b)*f+u.b,a:(c.a-u.a)*f+u.a})},X.readability=function(o,l){var i=X(o),u=X(l);return(Math.max(i.getLuminance(),u.getLuminance())+.05)/(Math.min(i.getLuminance(),u.getLuminance())+.05)},X.isReadable=function(o,l,i){var u,c,f=X.readability(o,l);switch(c=!1,(u=(function(p){var y,m;return y=((p=p||{level:"AA",size:"small"}).level||"AA").toUpperCase(),m=(p.size||"small").toLowerCase(),y!=="AA"&&y!=="AAA"&&(y="AA"),m!=="small"&&m!=="large"&&(m="small"),{level:y,size:m}})(i)).level+u.size){case"AAsmall":case"AAAlarge":c=f>=4.5;break;case"AAlarge":c=f>=3;break;case"AAAsmall":c=f>=7}return c},X.mostReadable=function(o,l,i){var u,c,f,p,y=null,m=0;c=(i=i||{}).includeFallbackColors,f=i.level,p=i.size;for(var v=0;v<l.length;v++)(u=X.readability(o,l[v]))>m&&(m=u,y=X(l[v]));return X.isReadable(o,y,{level:f,size:p})||!c?y:(i.includeFallbackColors=!1,X.mostReadable(o,["#fff","#000"],i))};var Kl=X.names={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"},_g=X.hexNames=(function(o){var l={};for(var i in o)o.hasOwnProperty(i)&&(l[o[i]]=i);return l})(Kl);function sf(o){return o=parseFloat(o),(isNaN(o)||o<0||o>1)&&(o=1),o}function _e(o,l){(function(u){return typeof u=="string"&&u.indexOf(".")!=-1&&parseFloat(u)===1})(o)&&(o="100%");var i=(function(u){return typeof u=="string"&&u.indexOf("%")!=-1})(o);return o=Math.min(l,Math.max(0,parseFloat(o))),i&&(o=parseInt(o*l,10)/100),Math.abs(o-l)<1e-6?1:o%l/parseFloat(l)}function Aa(o){return Math.min(1,Math.max(0,o))}function mn(o){return parseInt(o,16)}function Rn(o){return o.length==1?"0"+o:""+o}function io(o){return o<=1&&(o=100*o+"%"),o}function uf(o){return Math.round(255*parseFloat(o)).toString(16)}function Cd(o){return mn(o)/255}var xt,Ca,_a,Nn=(Ca="[\\s|\\(]+("+(xt="(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)")+")[,|\\s]+("+xt+")[,|\\s]+("+xt+")\\s*\\)?",_a="[\\s|\\(]+("+xt+")[,|\\s]+("+xt+")[,|\\s]+("+xt+")[,|\\s]+("+xt+")\\s*\\)?",{CSS_UNIT:new RegExp(xt),rgb:new RegExp("rgb"+Ca),rgba:new RegExp("rgba"+_a),hsl:new RegExp("hsl"+Ca),hsla:new RegExp("hsla"+_a),hsv:new RegExp("hsv"+Ca),hsva:new RegExp("hsva"+_a),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/});function Gn(o){return!!Nn.CSS_UNIT.exec(o)}var Fa=function(o,l){var i=(typeof o=="string"?parseInt(o):o)||0;if(i>=-5&&i<=5){var u=i,c=parseFloat(l),f=c+u*(c/5)*-1;return(f==0||f<=Number.EPSILON)&&(f=.1),{animationPeriod:f+"s"}}return{animationPeriod:l}},Ia=function(o,l){var i=o||{},u="";switch(l){case"small":u="12px";break;case"medium":u="16px";break;case"large":u="20px";break;default:u=void 0}var c={};if(i.fontSize){var f=i.fontSize;c=(function(p,y){var m={};for(var v in p)Object.prototype.hasOwnProperty.call(p,v)&&y.indexOf(v)<0&&(m[v]=p[v]);if(p!=null&&typeof Object.getOwnPropertySymbols=="function"){var w=0;for(v=Object.getOwnPropertySymbols(p);w<v.length;w++)y.indexOf(v[w])<0&&Object.prototype.propertyIsEnumerable.call(p,v[w])&&(m[v[w]]=p[v[w]])}return m})(i,["fontSize"]),u=f}return{fontSize:u,styles:c}},Og={color:"currentColor",mixBlendMode:"difference",width:"unset",display:"block",paddingTop:"2px"},Ba=function(o){var l=o.className,i=o.text,u=o.textColor,c=o.staticText,f=o.style;return i?ve.createElement("span",{className:"rli-d-i-b rli-text-format ".concat(l||"").trim(),style:ke(ke(ke({},c&&Og),u&&{color:u,mixBlendMode:"unset"}),f&&f)},typeof i=="string"&&i.length?i:"loading"):null},fo="rgb(50, 205, 50)";function Ua(o,l){if(l===void 0&&(l=0),o.length===0)throw new Error("Input array cannot be empty!");var i=[];return(function u(c,f){return f===void 0&&(f=0),i.push.apply(i,c),i.length<f&&u(i,f),i.slice(0,f)})(o,l)}Ie(`.atom-rli-bounding-box {
  --atom-phase1-rgb: 50, 205, 50;
  color: rgba(var(--atom-phase1-rgb), 1);
  font-size: 16px;
  position: relative;
  text-align: unset;
  isolation: isolate;
}
.atom-rli-bounding-box .atom-indicator {
  width: 6em;
  height: 6em;
  position: relative;
  perspective: 6em;
  overflow: hidden;
  color: rgba(var(--atom-phase1-rgb), 1);
  animation: calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite uxlv7gg;
}
.atom-rli-bounding-box .atom-indicator::after, .atom-rli-bounding-box .atom-indicator::before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 0.48em;
  height: 0.48em;
  margin: auto;
  border-radius: 50%;
  background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase1-rgb), 0.1), rgba(var(--atom-phase1-rgb), 0.3) 37%, rgba(var(--atom-phase1-rgb), 1) 100%);
  animation: calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite uxlv7eg;
}
.atom-rli-bounding-box .atom-indicator::before {
  filter: drop-shadow(0px 0px 0.0625em currentColor);
}
.atom-rli-bounding-box .atom-indicator .electron-orbit {
  color: rgba(var(--atom-phase1-rgb), 0.85);
  border: 0;
  border-left: 0.4em solid currentColor;
  box-sizing: border-box;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  width: 4.8em;
  height: 4.8em;
  background-color: transparent;
  border-radius: 50%;
  transform-style: preserve-3d;
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, linear) infinite uxlv7fj, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite uxlv7gy;
}
.atom-rli-bounding-box .atom-indicator .electron-orbit::after {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  border-radius: 50%;
  color: rgba(var(--atom-phase1-rgb), 0.18);
  animation: calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite uxlv7hv;
  border: 0.125em solid currentColor;
}
.atom-rli-bounding-box .atom-indicator .electron-orbit::before {
  content: "";
  width: 0.192em;
  height: 0.192em;
  position: absolute;
  border-radius: 50%;
  top: -0.096em;
  right: 0;
  bottom: 0;
  left: 0;
  margin: 0 auto;
  color: rgba(var(--atom-phase1-rgb), 1);
  box-shadow: 0px 0px 0.0625em 0.0625em currentColor, 0px 0px 0.0625em 0.125em currentColor;
  background-color: currentColor;
  transform: rotateY(-70deg);
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, linear) infinite uxlv7ew, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite uxlv7gg;
}
.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(1) {
  --orbit-vector-factor: -1;
  transform: rotateY(65deg) rotateX(calc(54deg * var(--orbit-vector-factor)));
}
.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(2) {
  --orbit-vector-factor: 1;
  transform: rotateY(65deg) rotateX(calc(54deg * var(--orbit-vector-factor)));
}
.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(3) {
  --orbit-vector-factor: 0;
  transform: rotateY(65deg) rotateX(calc(54deg * var(--orbit-vector-factor)));
  animation-delay: calc(var(--rli-animation-duration, 1s) * 0.5 * -1), calc(var(--rli-animation-duration, 1s) * 4 * -1);
}
.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(3)::before {
  animation-delay: calc(var(--rli-animation-duration, 1s) * 0.5 * -1), calc(var(--rli-animation-duration, 1s) * 4 * -1);
}
.atom-rli-bounding-box .atom-text {
  color: currentColor;
  mix-blend-mode: difference;
  width: unset;
  display: block;
}

@property --atom-phase1-rgb {
  syntax: "<number>#";
  inherits: true;
  initial-value: 50, 205, 50;
}
@property --atom-phase2-rgb {
  syntax: "<number>#";
  inherits: true;
  initial-value: 50, 205, 50;
}
@property --atom-phase3-rgb {
  syntax: "<number>#";
  inherits: true;
  initial-value: 50, 205, 50;
}
@property --atom-phase4-rgb {
  syntax: "<number>#";
  inherits: true;
  initial-value: 50, 205, 50;
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes uxlv7fj {
  from {
    transform: rotateY(70deg) rotateX(calc(54deg * var(--orbit-vector-factor))) rotateZ(0deg);
  }
  to {
    transform: rotateY(70deg) rotateX(calc(54deg * var(--orbit-vector-factor))) rotateZ(360deg);
  }
}
@keyframes uxlv7ew {
  from {
    transform: rotateY(-70deg) rotateX(0deg);
  }
  to {
    transform: rotateY(-70deg) rotateX(-360deg);
  }
}
@keyframes uxlv7eg {
  100%, 0% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase1-rgb), 0.1), rgba(var(--atom-phase1-rgb), 0.3) 37%, rgba(var(--atom-phase1-rgb), 1) 100%);
  }
  20% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase1-rgb), 0.1), rgba(var(--atom-phase1-rgb), 0.3) 37%, rgba(var(--atom-phase1-rgb), 1) 100%);
  }
  25% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  45% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  50% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  70% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  75% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  95% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
}
@keyframes uxlv7gg {
  100%, 0% {
    color: rgba(var(--atom-phase1-rgb), 1);
  }
  20% {
    color: rgba(var(--atom-phase1-rgb), 1);
  }
  25% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1);
  }
  45% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1);
  }
  50% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1);
  }
  70% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1);
  }
  75% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1);
  }
  95% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1);
  }
}
@keyframes uxlv7gy {
  100%, 0% {
    color: rgba(var(--atom-phase1-rgb), 0.85);
  }
  20% {
    color: rgba(var(--atom-phase1-rgb), 0.85);
  }
  25% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  45% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  50% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  70% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  75% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  95% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.85);
  }
}
@keyframes uxlv7hv {
  100%, 0% {
    color: rgba(var(--atom-phase1-rgb), 0.18);
  }
  20% {
    color: rgba(var(--atom-phase1-rgb), 0.18);
  }
  25% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  45% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  50% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  70% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  75% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  95% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.18);
  }
}`);X(fo).toRgb();Array.from({length:4},(function(o,l){return"--atom-phase".concat(l+1,"-rgb")}));Ie(`.commet-rli-bounding-box {
  --commet-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  width: 6.85em;
  height: 6.85em;
  overflow: hidden;
  display: inline-block;
  box-sizing: border-box;
  position: relative;
  isolation: isolate;
}
.commet-rli-bounding-box .commet-indicator {
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  box-sizing: border-box;
  width: 6em;
  height: 6em;
  color: var(--commet-phase1-color);
  display: inline-block;
  isolation: isolate;
  position: absolute;
  z-index: 0;
  animation: calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, cubic-bezier(0.08, 0.03, 0.91, 0.93)) infinite uxlv7cp;
}
.commet-rli-bounding-box .commet-indicator .commet-box {
  position: absolute;
  display: inline-block;
  top: 0;
  right: 0;
  bottom: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  animation: uxlv7bx var(--rli-animation-duration, 1.2s) var(--rli-animation-function, cubic-bezier(0.08, 0.03, 0.91, 0.93)) infinite;
}
.commet-rli-bounding-box .commet-indicator .commet-box:nth-of-type(1) {
  width: 100%;
  height: 100%;
  animation-direction: normal;
}
.commet-rli-bounding-box .commet-indicator .commet-box:nth-of-type(2) {
  width: 70%;
  height: 70%;
  animation-direction: reverse;
}
.commet-rli-bounding-box .commet-indicator .commet-box .commetball-box {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  bottom: 0;
  left: 0;
  display: inline-block;
}
.commet-rli-bounding-box .commet-indicator .commet-box .commetball-box::before {
  content: "";
  width: 0.5em;
  height: 0.5em;
  border-radius: 50%;
  background-color: currentColor;
  position: absolute;
  top: -0.125em;
  left: 50%;
  transform: translateX(-50%);
  box-shadow: 0 0 0.2em 0em currentColor, 0 0 0.6em 0em currentColor;
}
.commet-rli-bounding-box .commet-indicator .commet-box .commet-trail {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  bottom: 0;
  left: 0;
  border-radius: 50%;
  box-sizing: border-box;
  border-style: solid;
}
.commet-rli-bounding-box .commet-indicator .commet-box .commet-trail.trail1 {
  border-color: currentColor transparent transparent currentColor;
  border-width: 0.25em 0.25em 0 0;
  transform: rotateZ(-45deg);
}
.commet-rli-bounding-box .commet-indicator .commet-box .commet-trail.trail2 {
  border-color: currentColor currentColor transparent transparent;
  border-width: 0.25em 0 0 0.25em;
  transform: rotateZ(45deg);
}
.commet-rli-bounding-box .commet-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: var(--commet-phase1-color);
}

@property --commet-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --commet-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --commet-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --commet-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7bx {
  to {
    transform: rotate(1turn);
  }
}
@keyframes uxlv7cp {
  100%, 0% {
    color: var(--commet-phase1-color);
  }
  20% {
    color: var(--commet-phase1-color);
  }
  25% {
    color: var(--commet-phase2-color, var(--commet-phase1-color));
  }
  45% {
    color: var(--commet-phase2-color, var(--commet-phase1-color));
  }
  50% {
    color: var(--commet-phase3-color, var(--commet-phase1-color));
  }
  70% {
    color: var(--commet-phase3-color, var(--commet-phase1-color));
  }
  75% {
    color: var(--commet-phase4-color, var(--commet-phase1-color));
  }
  95% {
    color: var(--commet-phase4-color, var(--commet-phase1-color));
  }
}`);Array.from({length:4},(function(o,l){return"--commet-phase".concat(l+1,"-color")}));Ie(`.OP-annulus-rli-bounding-box {
  --OP-annulus-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  display: inline-block;
}
.OP-annulus-rli-bounding-box .OP-annulus-indicator {
  width: 5em;
  height: 5em;
  color: var(--OP-annulus-phase1-color);
  display: inline-block;
  position: relative;
  z-index: 0;
}
.OP-annulus-rli-bounding-box .OP-annulus-indicator .whirl {
  animation: uxlv7n7 calc(var(--rli-animation-duration, 1.5s) * 1.33) linear infinite;
  height: 100%;
  transform-origin: center center;
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
}
.OP-annulus-rli-bounding-box .OP-annulus-indicator .path {
  stroke-dasharray: 1, 125;
  stroke-dashoffset: 0;
  animation: var(--rli-animation-duration, 1.5s) var(--rli-animation-function, ease-in-out) infinite uxlv7oa, calc(var(--rli-animation-duration, 1.5s) * 4) var(--rli-animation-function, ease-in-out) infinite uxlv7p5;
  stroke-linecap: round;
}
.OP-annulus-rli-bounding-box .OP-annulus-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@property --OP-annulus-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.5s;
}
@keyframes uxlv7n7 {
  100% {
    transform: rotate(360deg);
  }
}
@keyframes uxlv7oa {
  0% {
    stroke-dasharray: 1, 125;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 98, 125;
    stroke-dashoffset: -35px;
  }
  100% {
    stroke-dasharray: 98, 125;
    stroke-dashoffset: -124px;
  }
}
@keyframes uxlv7p5 {
  100%, 0% {
    stroke: var(--OP-annulus-phase1-color);
  }
  22% {
    stroke: var(--OP-annulus-phase1-color);
  }
  25% {
    stroke: var(--OP-annulus-phase2-color, var(--OP-annulus-phase1-color));
  }
  42% {
    stroke: var(--OP-annulus-phase2-color, var(--OP-annulus-phase1-color));
  }
  50% {
    stroke: var(--OP-annulus-phase3-color, var(--OP-annulus-phase1-color));
  }
  72% {
    stroke: var(--OP-annulus-phase3-color, var(--OP-annulus-phase1-color));
  }
  75% {
    stroke: var(--OP-annulus-phase4-color, var(--OP-annulus-phase1-color));
  }
  97% {
    stroke: var(--OP-annulus-phase4-color, var(--OP-annulus-phase1-color));
  }
}`);Array.from({length:4},(function(o,l){return"--OP-annulus-phase".concat(l+1,"-color")}));function Hl(o){return o&&o.Math===Math&&o}Ie(`.OP-dotted-rli-bounding-box {
  --OP-dotted-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  box-sizing: border-box;
  display: inline-block;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator {
  width: 5em;
  height: 5em;
  color: var(--OP-dotted-phase1-color);
  display: inline-block;
  position: relative;
  z-index: 0;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .OP-dotted-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder .dot {
  display: block;
  margin: 0 auto;
  width: 15%;
  height: 15%;
  background-color: currentColor;
  border-radius: 50%;
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, ease-in-out) infinite uxlv7nu, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, ease-in-out) infinite uxlv7ol;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(1) {
  transform: rotate(0deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(1) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 12 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(2) {
  transform: rotate(30deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(2) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 11 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(3) {
  transform: rotate(60deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(3) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 10 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(4) {
  transform: rotate(90deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(4) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 9 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(5) {
  transform: rotate(120deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(5) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 8 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(6) {
  transform: rotate(150deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(6) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 7 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(7) {
  transform: rotate(180deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(7) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 6 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(8) {
  transform: rotate(210deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(8) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 5 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(9) {
  transform: rotate(240deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(9) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 4 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(10) {
  transform: rotate(270deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(10) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 3 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(11) {
  transform: rotate(300deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(11) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 2 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(12) {
  transform: rotate(330deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(12) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 1 * -1);
}

@property --OP-dotted-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-dotted-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-dotted-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-dotted-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7nu {
  0%, 39%, 100% {
    opacity: 0;
  }
  40% {
    opacity: 1;
  }
}
@keyframes uxlv7ol {
  100%, 0% {
    background-color: var(--OP-dotted-phase1-color);
  }
  22% {
    background-color: var(--OP-dotted-phase1-color);
  }
  25% {
    background-color: var(--OP-dotted-phase2-color, var(--OP-dotted-phase1-color));
  }
  47% {
    background-color: var(--OP-dotted-phase2-color, var(--OP-dotted-phase1-color));
  }
  50% {
    background-color: var(--OP-dotted-phase3-color, var(--OP-dotted-phase1-color));
  }
  72% {
    background-color: var(--OP-dotted-phase3-color, var(--OP-dotted-phase1-color));
  }
  75% {
    background-color: var(--OP-dotted-phase4-color, var(--OP-dotted-phase1-color));
  }
  97% {
    background-color: var(--OP-dotted-phase4-color, var(--OP-dotted-phase1-color));
  }
}`);Hl(typeof window=="object"&&window)||Hl(typeof self=="object"&&self)||Hl(typeof global=="object"&&global)||(function(){return this})()||Function("return this")();Array.from({length:4},(function(o,l){return"--OP-dotted-phase".concat(l+1,"-color")}));Ie(`.OP-spokes-rli-bounding-box {
  --OP-spokes-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  position: relative;
  color: var(--OP-spokes-phase1-color);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator {
  width: 4.8em;
  height: 4.8em;
  display: block;
  position: relative;
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke {
  position: absolute;
  height: 1.2em;
  width: 0.4em;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto auto auto 50%;
  background-color: var(--OP-spokes-phase1-color);
  border-radius: 0.24em;
  opacity: 0;
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, ease-in-out) backwards infinite uxlv7pw, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, ease-in-out) infinite uxlv7qn;
  transform-origin: left center;
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(1) {
  transform: rotate(calc(0 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(11 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(2) {
  transform: rotate(calc(1 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(10 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(3) {
  transform: rotate(calc(2 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(9 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(4) {
  transform: rotate(calc(3 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(8 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(5) {
  transform: rotate(calc(4 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(7 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(6) {
  transform: rotate(calc(5 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(6 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(7) {
  transform: rotate(calc(6 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(5 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(8) {
  transform: rotate(calc(7 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(4 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(9) {
  transform: rotate(calc(8 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(3 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(10) {
  transform: rotate(calc(9 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(2 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(11) {
  transform: rotate(calc(10 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(1 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(12) {
  transform: rotate(calc(11 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(0 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: var(--OP-spokes-phase1-color);
  z-index: -2;
}

@property --OP-spokes-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-spokes-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-spokes-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-spokes-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7pw {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
@keyframes uxlv7qn {
  100%, 0% {
    background-color: var(--OP-spokes-phase1-color);
  }
  22% {
    background-color: var(--OP-spokes-phase1-color);
  }
  25% {
    background-color: var(--OP-spokes-phase2-color, var(--OP-spokes-phase1-color));
  }
  42% {
    background-color: var(--OP-spokes-phase2-color, var(--OP-spokes-phase1-color));
  }
  50% {
    background-color: var(--OP-spokes-phase3-color, var(--OP-spokes-phase1-color));
  }
  72% {
    background-color: var(--OP-spokes-phase3-color, var(--OP-spokes-phase1-color));
  }
  75% {
    background-color: var(--OP-spokes-phase4-color, var(--OP-spokes-phase1-color));
  }
  97% {
    background-color: var(--OP-spokes-phase4-color, var(--OP-spokes-phase1-color));
  }
}`);Array.from({length:4},(function(o,l){return"--OP-spokes-phase".concat(l+1,"-color")}));Ie(`.OP-annulus-dual-sectors-rli-bounding-box {
  --OP-annulus-dual-sectors-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  box-sizing: border-box;
  display: inline-block;
}
.OP-annulus-dual-sectors-rli-bounding-box .OP-annulus-dual-sectors-indicator {
  width: 5em;
  height: 5em;
  display: inline-block;
  position: relative;
  z-index: 0;
  color: var(--OP-annulus-dual-sectors-phase1-color);
}
.OP-annulus-dual-sectors-rli-bounding-box .OP-annulus-dual-sectors-indicator .annulus-sectors {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border-width: 0.34em;
  border-style: solid;
  border-color: var(--OP-annulus-dual-sectors-phase1-color) transparent var(--OP-annulus-dual-sectors-phase1-color) transparent;
  background-color: transparent;
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, linear) infinite uxlv7ra, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, linear) infinite uxlv7sv;
}
.OP-annulus-dual-sectors-rli-bounding-box .OP-annulus-dual-sectors-indicator .OP-annulus-dual-sectors-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@property --OP-annulus-dual-sectors-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-dual-sectors-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-dual-sectors-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-dual-sectors-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7ra {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes uxlv7sv {
  100%, 0% {
    border-color: var(--OP-annulus-dual-sectors-phase1-color) transparent;
  }
  20% {
    border-color: var(--OP-annulus-dual-sectors-phase1-color) transparent;
  }
  25% {
    border-color: var(--OP-annulus-dual-sectors-phase2-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  45% {
    border-color: var(--OP-annulus-dual-sectors-phase2-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  50% {
    border-color: var(--OP-annulus-dual-sectors-phase3-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  70% {
    border-color: var(--OP-annulus-dual-sectors-phase3-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  75% {
    border-color: var(--OP-annulus-dual-sectors-phase4-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  95% {
    border-color: var(--OP-annulus-dual-sectors-phase4-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
}`);Array.from({length:4},(function(o,l){return"--OP-annulus-dual-sectors-phase".concat(l+1,"-color")}));Ie(`.OP-annulus-sector-track-rli-bounding-box {
  --OP-annulus-track-phase1-color: rgba(50, 205, 50, 0.22);
  --OP-annulus-sector-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  display: inline-block;
}
.OP-annulus-sector-track-rli-bounding-box .OP-annulus-sector-track-indicator {
  width: 5em;
  height: 5em;
  color: var(--OP-annulus-sector-phase1-color);
  display: inline-block;
  position: relative;
  z-index: 0;
}
.OP-annulus-sector-track-rli-bounding-box .OP-annulus-sector-track-indicator .annulus-track-ring {
  width: 100%;
  height: 100%;
  border-width: 0.34em;
  border-style: solid;
  border-radius: 50%;
  box-sizing: border-box;
  border-color: var(--OP-annulus-track-phase1-color);
  border-top-color: var(--OP-annulus-sector-phase1-color);
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, linear) infinite uxlv7rl, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite uxlv7tf;
}
.OP-annulus-sector-track-rli-bounding-box .OP-annulus-sector-track-indicator .OP-annulus-sector-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@property --OP-annulus-track-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgba(50, 205, 50, 0.22);
}
@property --OP-annulus-track-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgba(50, 205, 50, 0.22);
}
@property --OP-annulus-track-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgba(50, 205, 50, 0.22);
}
@property --OP-annulus-track-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgba(50, 205, 50, 0.22);
}
@property --OP-annulus-sector-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-sector-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-sector-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-sector-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes uxlv7rl {
  to {
    transform: rotate(1turn);
  }
}
@keyframes uxlv7tf {
  100%, 0% {
    border-color: var(--OP-annulus-track-phase1-color);
    border-top-color: var(--OP-annulus-sector-phase1-color);
  }
  18% {
    border-color: var(--OP-annulus-track-phase1-color);
    border-top-color: var(--OP-annulus-sector-phase1-color);
  }
  25% {
    border-color: var(--OP-annulus-track-phase2-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase2-color, var(--OP-annulus-sector-phase1-color));
  }
  43% {
    border-color: var(--OP-annulus-track-phase2-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase2-color, var(--OP-annulus-sector-phase1-color));
  }
  50% {
    border-color: var(--OP-annulus-track-phase3-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase3-color, var(--OP-annulus-sector-phase1-color));
  }
  68% {
    border-color: var(--OP-annulus-track-phase3-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase3-color, var(--OP-annulus-sector-phase1-color));
  }
  75% {
    border-color: var(--OP-annulus-track-phase4-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase4-color, var(--OP-annulus-sector-phase1-color));
  }
  93% {
    border-color: var(--OP-annulus-track-phase4-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase4-color, var(--OP-annulus-sector-phase1-color));
  }
}`);Array.from({length:4},(function(o,l){return["--OP-annulus-track-phase".concat(l+1,"-color"),"--OP-annulus-sector-phase".concat(l+1,"-color")]}));Ie(`.foursquare-rli-bounding-box {
  --four-square-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  box-sizing: border-box;
  color: var(--four-square-phase1-color);
  display: inline-block;
  overflow: hidden;
}
.foursquare-rli-bounding-box .foursquare-indicator {
  height: 5.3033008589em;
  width: 5.3033008589em;
  position: relative;
  display: block;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container {
  position: absolute;
  z-index: 0;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  height: 2.5em;
  width: 2.5em;
  color: inherit;
  will-change: color, width, height;
  transform: rotate(45deg);
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, cubic-bezier(0.05, 0.28, 0.79, 0.98)) infinite uxlv7dk, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, cubic-bezier(0.05, 0.28, 0.79, 0.98)) infinite uxlv7es;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square {
  position: absolute;
  width: 1.25em;
  height: 1.25em;
  border-radius: 0.1875em;
  background-color: currentColor;
  animation: uxlv7dd var(--rli-animation-duration, 1s) var(--rli-animation-function, cubic-bezier(0.05, 0.28, 0.79, 0.98)) both infinite;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square1 {
  top: 0;
  left: 0;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square2 {
  top: 0;
  right: 0;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square3 {
  bottom: 0;
  left: 0;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square4 {
  bottom: 0;
  right: 0;
}

@property --four-square-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --four-square-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --four-square-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --four-square-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes uxlv7dk {
  0% {
    width: 2.5em;
    height: 2.5em;
  }
  10% {
    width: 2.5em;
    height: 2.5em;
  }
  50% {
    width: 3.75em;
    height: 3.75em;
  }
  90% {
    width: 2.5em;
    height: 2.5em;
  }
  100% {
    width: 2.5em;
    height: 2.5em;
  }
}
@keyframes uxlv7dd {
  0% {
    transform: rotateZ(0deg);
  }
  10% {
    transform: rotateZ(0deg);
  }
  50% {
    transform: rotateZ(90deg);
  }
  90% {
    transform: rotateZ(90deg);
  }
  100% {
    transform: rotateZ(90deg);
  }
}
@keyframes uxlv7es {
  100%, 0% {
    color: var(--four-square-phase1-color);
  }
  20% {
    color: var(--four-square-phase1-color);
  }
  25% {
    color: var(--four-square-phase2-color, var(--four-square-phase1-color));
  }
  45% {
    color: var(--four-square-phase2-color, var(--four-square-phase1-color));
  }
  50% {
    color: var(--four-square-phase3-color, var(--four-square-phase1-color));
  }
  70% {
    color: var(--four-square-phase3-color, var(--four-square-phase1-color));
  }
  75% {
    color: var(--four-square-phase4-color, var(--four-square-phase1-color));
  }
  95% {
    color: var(--four-square-phase4-color, var(--four-square-phase1-color));
  }
}`);Array.from({length:4},(function(o,l){return"--four-square-phase".concat(l+1,"-color")}));Ie(`.mosaic-rli-bounding-box {
  --mosaic-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  color: var(--mosaic-phase1-color);
}
.mosaic-rli-bounding-box .mosaic-indicator {
  width: 5em;
  height: 5em;
  color: currentColor;
  display: grid;
  gap: 0.125em;
  grid-template-columns: repeat(3, 1fr);
  grid-template-areas: "a b c" "d e f" "g h i";
  position: relative;
  z-index: 0;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 105%;
  left: 50%;
  transform: translateX(-50%);
  z-index: -2;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube {
  background-color: var(--mosaic-phase1-color);
  animation-name: uxlv7i4, uxlv7is;
  animation-duration: var(--rli-animation-duration, 1.5s), calc(var(--rli-animation-duration, 1.5s) * 4);
  animation-timing-function: var(--rli-animation-function, ease-in-out);
  animation-iteration-count: infinite;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube1 {
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 2);
  grid-area: a;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube2 {
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 3);
  grid-area: b;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube3 {
  grid-area: c;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 4);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube4 {
  grid-area: d;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 1);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube5 {
  grid-area: e;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 2);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube6 {
  grid-area: f;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 3);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube7 {
  grid-area: g;
  animation-delay: 0s;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube8 {
  grid-area: h;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 1);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube9 {
  grid-area: i;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 2);
}

@property --mosaic-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --mosaic-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --mosaic-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --mosaic-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.5s;
}
@keyframes uxlv7i4 {
  0%, 60%, 100% {
    transform: scale3D(1, 1, 1);
  }
  30% {
    transform: scale3D(0, 0, 1);
  }
}
@keyframes uxlv7is {
  100%, 0% {
    background-color: var(--mosaic-phase1-color);
  }
  25% {
    background-color: var(--mosaic-phase2-color, var(--mosaic-phase1-color));
  }
  50% {
    background-color: var(--mosaic-phase3-color, var(--mosaic-phase1-color));
  }
  75% {
    background-color: var(--mosaic-phase4-color, var(--mosaic-phase1-color));
  }
}`);Array.from({length:4},(function(o,l){return"--mosaic-phase".concat(l+1,"-color")}));Ie(`.riple-rli-bounding-box {
  --riple-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  display: inline-block;
  color: var(--riple-phase1-color);
}
.riple-rli-bounding-box .riple-indicator {
  display: inline-block;
  width: 5em;
  height: 5em;
  position: relative;
  z-index: 0;
}
.riple-rli-bounding-box .riple-indicator .riple-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}
.riple-rli-bounding-box .riple-indicator .riple {
  --border-width: 0.25em;
  position: absolute;
  border: var(--border-width) solid var(--riple-phase1-color);
  opacity: 1;
  border-radius: 50%;
  will-change: top, right, left, bottom, border-color;
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, cubic-bezier(0, 0.2, 0.8, 1)) infinite uxlv7i1, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, cubic-bezier(0, 0.2, 0.8, 1)) infinite uxlv7io;
}
.riple-rli-bounding-box .riple-indicator .riple:nth-of-type(2) {
  animation-delay: calc(var(--rli-animation-duration, 1s) / 2 * -1);
}

@property --riple-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --riple-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --riple-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --riple-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes uxlv7i1 {
  0% {
    top: calc(50% - var(--border-width));
    left: calc(50% - var(--border-width));
    right: calc(50% - var(--border-width));
    bottom: calc(50% - var(--border-width));
    opacity: 0;
  }
  4.9% {
    top: calc(50% - var(--border-width));
    left: calc(50% - var(--border-width));
    right: calc(50% - var(--border-width));
    bottom: calc(50% - var(--border-width));
    opacity: 0;
  }
  5% {
    top: calc(50% - var(--border-width));
    left: calc(50% - var(--border-width));
    right: calc(50% - var(--border-width));
    bottom: calc(50% - var(--border-width));
    opacity: 1;
  }
  100% {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0;
  }
}
@keyframes uxlv7io {
  100%, 0% {
    border-color: var(--riple-phase1-color);
  }
  24.9% {
    border-color: var(--riple-phase1-color);
  }
  25% {
    border-color: var(--riple-phase2-color, var(--riple-phase1-color));
  }
  49.9% {
    border-color: var(--riple-phase2-color, var(--riple-phase1-color));
  }
  50% {
    border-color: var(--riple-phase3-color, var(--riple-phase1-color));
  }
  74.9% {
    border-color: var(--riple-phase3-color, var(--riple-phase1-color));
  }
  75% {
    border-color: var(--riple-phase4-color, var(--riple-phase1-color));
  }
  99.9% {
    border-color: var(--riple-phase4-color, var(--riple-phase1-color));
  }
}`);Array.from({length:4},(function(o,l){return"--riple-phase".concat(l+1,"-color")}));Ie(`.pulsate-rli-bounding-box {
  --TD-pulsate-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  display: inline-block;
  box-sizing: border-box;
  color: var(--TD-pulsate-phase1-color);
}
.pulsate-rli-bounding-box .pulsate-indicator {
  width: 4.4em;
  height: 1.1em;
  text-align: center;
  position: relative;
  z-index: 0;
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  align-items: center;
}
.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot {
  width: 1.1em;
  height: 1.1em;
  border-radius: 50%;
  background-color: var(--TD-pulsate-phase1-color);
  transform: scale(0);
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, ease-in-out) var(--delay) infinite uxlv7s0, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, ease-in-out) var(--delay) infinite uxlv7to;
}
.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot:nth-of-type(1) {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.15 * -1);
}
.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot:nth-of-type(2) {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0);
}
.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot:nth-of-type(3) {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.15);
}
.pulsate-rli-bounding-box .pulsate-text {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 80%;
  text-transform: uppercase;
  text-align: center;
  font-size: 0.6em;
  letter-spacing: 0.5px;
  font-family: sans-serif;
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@property --TD-pulsate-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-pulsate-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-pulsate-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-pulsate-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7s0 {
  0%, 90%, 100% {
    transform: scale(0);
  }
  40% {
    transform: scale(1);
  }
}
@keyframes uxlv7to {
  0%, 100% {
    background-color: var(--TD-pulsate-phase1-color);
  }
  24.9% {
    background-color: var(--TD-pulsate-phase1-color);
  }
  25% {
    background-color: var(--TD-pulsate-phase2-color, var(--TD-pulsate-phase1-color));
  }
  49.9% {
    background-color: var(--TD-pulsate-phase2-color, var(--TD-pulsate-phase1-color));
  }
  50% {
    background-color: var(--TD-pulsate-phase3-color, var(--TD-pulsate-phase1-color));
  }
  74.9% {
    background-color: var(--TD-pulsate-phase3-color, var(--TD-pulsate-phase1-color));
  }
  75% {
    background-color: var(--TD-pulsate-phase4-color, var(--TD-pulsate-phase1-color));
  }
  99.9% {
    background-color: var(--TD-pulsate-phase4-color, var(--TD-pulsate-phase1-color));
  }
}`);var ur=Array.from({length:4},(function(o,l){return"--TD-pulsate-phase".concat(l+1,"-color")})),Ng=function(o){var l,i=Ia(o?.style,o?.size),u=i.styles,c=i.fontSize,f=o?.easing,p=Fa(o?.speedPlus,"1.2s").animationPeriod,y=(function(m){var v={};if(m instanceof Array){for(var w=Ua(m,ur.length),S=0;S<w.length&&!(S>=4);S++)v[ur[S]]=w[S];return v}try{if(typeof m!="string")throw new Error("Color String expected");for(var O=0;O<ur.length;O++)v[ur[O]]=m}catch(F){for(F instanceof Error?console.warn("[".concat(F.message,']: Received "').concat(typeof m,'" instead with value, ').concat(JSON.stringify(m))):console.warn("".concat(JSON.stringify(m),' received in <ThreeDot variant="pulsate" /> indicator cannot be processed. Using default instead!')),O=0;O<ur.length;O++)v[ur[O]]=fo}return v})((l=o?.color)!==null&&l!==void 0?l:"");return ve.createElement("span",{className:"rli-d-i-b pulsate-rli-bounding-box",style:ke(ke(ke(ke(ke({},c&&{fontSize:c}),p&&{"--rli-animation-duration":p}),f&&{"--rli-animation-function":f}),y),u),role:"status","aria-live":"polite","aria-label":"Loading"},ve.createElement("span",{className:"rli-d-i-b pulsate-indicator"},ve.createElement("span",{className:"rli-d-i-b pulsate-dot"}),ve.createElement("span",{className:"rli-d-i-b pulsate-dot"}),ve.createElement("span",{className:"rli-d-i-b pulsate-dot"})),ve.createElement(Ba,{staticText:!0,text:o?.text,textColor:o?.textColor}))};Ie(`.brick-stack-rli-bounding-box {
  --TD-brick-stack-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  display: inline-block;
  color: var(--TD-brick-stack-phase1-color);
}
.brick-stack-rli-bounding-box .brick-stack-indicator {
  width: 2.8em;
  height: 2.8em;
  position: relative;
  display: block;
  margin: 0 auto;
}
.brick-stack-rli-bounding-box .brick-stack {
  width: 100%;
  height: 100%;
  background: radial-gradient(circle closest-side, currentColor 0% 95%, rgba(0, 0, 0, 0) calc(95% + 1px)) 0 0/40% 40% no-repeat, radial-gradient(circle closest-side, currentColor 0% 95%, rgba(0, 0, 0, 0) calc(95% + 1px)) 0 100%/40% 40% no-repeat, radial-gradient(circle closest-side, currentColor 0% 95%, rgba(0, 0, 0, 0) calc(95% + 1px)) 100% 100%/40% 40% no-repeat;
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, ease-out) infinite uxlv7tu, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, ease-out) infinite uxlv7us;
}

@property --TD-brick-stack-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-brick-stack-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-brick-stack-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-brick-stack-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes uxlv7tu {
  0% {
    background-position: 0 0, 0 100%, 100% 100%;
  }
  25% {
    background-position: 100% 0, 0 100%, 100% 100%;
  }
  50% {
    background-position: 100% 0, 0 0, 100% 100%;
  }
  75% {
    background-position: 100% 0, 0 0, 0 100%;
  }
  100% {
    background-position: 100% 100%, 0 0, 0 100%;
  }
}
@keyframes uxlv7us {
  100%, 0% {
    color: var(--TD-brick-stack-phase1-color);
  }
  20% {
    color: var(--TD-brick-stack-phase1-color);
  }
  25% {
    color: var(--TD-brick-stack-phase2-color, var(--TD-brick-stack-phase1-color));
  }
  45% {
    color: var(--TD-brick-stack-phase2-color, var(--TD-brick-stack-phase1-color));
  }
  50% {
    color: var(--TD-brick-stack-phase3-color, var(--TD-brick-stack-phase1-color));
  }
  70% {
    color: var(--TD-brick-stack-phase3-color, var(--TD-brick-stack-phase1-color));
  }
  75% {
    color: var(--TD-brick-stack-phase4-color, var(--TD-brick-stack-phase1-color));
  }
  95% {
    color: var(--TD-brick-stack-phase4-color, var(--TD-brick-stack-phase1-color));
  }
}`);var cr=Array.from({length:4},(function(o,l){return"--TD-brick-stack-phase".concat(l+1,"-color")})),Rg=function(o){var l,i=Ia(o?.style,o?.size),u=i.styles,c=i.fontSize,f=o?.easing,p=Fa(o?.speedPlus,"1s").animationPeriod,y=(function(m){var v={};if(m instanceof Array){for(var w=Ua(m,cr.length),S=0;S<w.length&&!(S>=4);S++)v[cr[S]]=w[S];return v}try{if(typeof m!="string")throw new Error("Color String expected");for(var O=0;O<cr.length;O++)v[cr[O]]=m}catch(F){for(F instanceof Error?console.warn("[".concat(F.message,']: Received "').concat(typeof m,'" instead with value, ').concat(JSON.stringify(m))):console.warn("".concat(JSON.stringify(m),' received in <ThreeDot variant="brick-stack" /> indicator cannot be processed. Using default instead!')),O=0;O<cr.length;O++)v[cr[O]]=fo}return v})((l=o?.color)!==null&&l!==void 0?l:"");return ve.createElement("span",{className:"rli-d-i-b brick-stack-rli-bounding-box",style:ke(ke(ke(ke(ke({},c&&{fontSize:c}),p&&{"--rli-animation-duration":p}),f&&{"--rli-animation-function":f}),y),u),role:"status","aria-live":"polite","aria-label":"Loading"},ve.createElement("span",{className:"rli-d-i-b brick-stack-indicator"},ve.createElement("span",{className:"rli-d-i-b brick-stack"})),ve.createElement(Ba,{staticText:!0,text:o?.text,textColor:o?.textColor}))};Ie(`.bob-rli-bounding-box {
  --TD-bob-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  display: inline-block;
  color: var(--TD-bob-phase1-color);
}
.bob-rli-bounding-box .bob-indicator {
  width: 4.4em;
  height: 2.2em;
  position: relative;
  display: block;
  margin: 0 auto;
}
.bob-rli-bounding-box .bob-indicator .bobbing,
.bob-rli-bounding-box .bob-indicator .bobbing::before,
.bob-rli-bounding-box .bob-indicator .bobbing::after {
  width: 1.1em;
  height: 100%;
  display: grid;
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, linear) var(--delay) infinite uxlv7u0, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, linear) var(--delay) infinite uxlv7vq;
}
.bob-rli-bounding-box .bob-indicator .bobbing::before,
.bob-rli-bounding-box .bob-indicator .bobbing::after {
  content: "";
  grid-area: 1/1;
}
.bob-rli-bounding-box .bob-indicator .bobbing {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.12 * -1);
  background: radial-gradient(circle closest-side at center, currentColor 0% 92%, rgba(0, 0, 0, 0) calc(92% + 1px)) 50% 50%/100% 50% no-repeat;
}
.bob-rli-bounding-box .bob-indicator .bobbing::before {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0);
  transform: translateX(150%);
  background: radial-gradient(circle closest-side at center, currentColor 0% 92%, rgba(0, 0, 0, 0) calc(92% + 1px)) 50% 50%/100% 50% no-repeat;
}
.bob-rli-bounding-box .bob-indicator .bobbing::after {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.12);
  transform: translateX(300%);
  background: radial-gradient(circle closest-side at center, currentColor 0% 92%, rgba(0, 0, 0, 0) calc(92% + 1px)) 50% 50%/100% 50% no-repeat;
}

@property --TD-bob-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bob-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bob-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bob-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7u0 {
  100%, 0% {
    background-position: 50% 50%;
  }
  15% {
    background-position: 50% 10%;
  }
  30% {
    background-position: 50% 100%;
  }
  40% {
    background-position: 50% 0%;
  }
  50% {
    background-position: 50% 90%;
  }
  70% {
    background-position: 50% 10%;
  }
  98% {
    background-position: 50% 50%;
  }
}
@keyframes uxlv7vq {
  100%, 0% {
    color: var(--TD-bob-phase1-color);
  }
  22% {
    color: var(--TD-bob-phase1-color);
  }
  25% {
    color: var(--TD-bob-phase2-color, var(--TD-bob-phase1-color));
  }
  47% {
    color: var(--TD-bob-phase2-color, var(--TD-bob-phase1-color));
  }
  50% {
    color: var(--TD-bob-phase3-color, var(--TD-bob-phase1-color));
  }
  72% {
    color: var(--TD-bob-phase3-color, var(--TD-bob-phase1-color));
  }
  75% {
    color: var(--TD-bob-phase4-color, var(--TD-bob-phase1-color));
  }
  97% {
    color: var(--TD-bob-phase4-color, var(--TD-bob-phase1-color));
  }
}`);var dr=Array.from({length:4},(function(o,l){return"--TD-bob-phase".concat(l+1,"-color")})),zg=function(o){var l,i=Ia(o?.style,o?.size),u=i.styles,c=i.fontSize,f=o?.easing,p=Fa(o?.speedPlus,"1.2s").animationPeriod,y=(function(m){var v={};if(m instanceof Array){for(var w=Ua(m,dr.length),S=0;S<w.length&&!(S>=4);S++)v[dr[S]]=w[S];return v}try{if(typeof m!="string")throw new Error("Color String expected");for(var O=0;O<dr.length;O++)v[dr[O]]=m}catch(F){for(F instanceof Error?console.warn("[".concat(F.message,']: Received "').concat(typeof m,'" instead with value, ').concat(JSON.stringify(m))):console.warn("".concat(JSON.stringify(m),' received in <ThreeDot variant="bob" /> indicator cannot be processed. Using default instead!')),O=0;O<dr.length;O++)v[dr[O]]=fo}return v})((l=o?.color)!==null&&l!==void 0?l:"");return ve.createElement("span",{className:"rli-d-i-b bob-rli-bounding-box",style:ke(ke(ke(ke(ke({},c&&{fontSize:c}),p&&{"--rli-animation-duration":p}),f&&{"--rli-animation-function":f}),y),u),role:"status","aria-live":"polite","aria-label":"Loading"},ve.createElement("span",{className:"bob-indicator"},ve.createElement("span",{className:"bobbing"})),ve.createElement(Ba,{staticText:!0,text:o?.text,textColor:o?.textColor}))};Ie(`.bounce-rli-bounding-box {
  --TD-bounce-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  color: var(--TD-bounce-phase1-color);
  display: inline-block;
  padding-bottom: 0.25125em;
}
.bounce-rli-bounding-box .wrapper {
  --dot1-delay: 0s;
  --dot1-x-offset: 0.55em;
  --dot2-delay: calc((var(--rli-animation-duration, 0.5s) + var(--rli-animation-duration, 0.5s) * 0.75) * -1);
  --dot2-x-offset: 2.2em;
  --dot3-delay: calc((var(--rli-animation-duration, 0.5s) + var(--rli-animation-duration, 0.5s) * 0.5) * -1);
  --dot3-x-offset: 3.85em;
  width: 5.5em;
  height: 3.125em;
  position: relative;
  display: block;
  margin: 0 auto;
}
.bounce-rli-bounding-box .wrapper .group {
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
.bounce-rli-bounding-box .wrapper .group .dot {
  width: 1.1em;
  height: 1.1em;
  position: absolute;
  border-radius: 50%;
  background-color: var(--TD-bounce-phase1-color);
  transform-origin: 50%;
  animation: var(--rli-animation-duration, 0.5s) var(--rli-animation-function, cubic-bezier(0.74, 0.1, 0.74, 1)) alternate infinite uxlv7wc, calc(var(--rli-animation-duration, 0.5s) * 4) var(--rli-animation-function, cubic-bezier(0.74, 0.1, 0.74, 1)) infinite uxlv7x6;
}
.bounce-rli-bounding-box .wrapper .group .dot:nth-of-type(1) {
  left: var(--dot1-x-offset);
  animation-delay: var(--dot1-delay), 0s;
}
.bounce-rli-bounding-box .wrapper .group .dot:nth-of-type(2) {
  left: var(--dot2-x-offset);
  animation-delay: var(--dot2-delay), 0s;
}
.bounce-rli-bounding-box .wrapper .group .dot:nth-of-type(3) {
  left: var(--dot3-x-offset);
  animation-delay: var(--dot3-delay), 0s;
}
.bounce-rli-bounding-box .wrapper .group .shadow {
  width: 1.1em;
  height: 0.22em;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 101%;
  transform-origin: 50%;
  z-index: -1;
  filter: blur(1px);
  animation: var(--rli-animation-duration, 0.5s) var(--rli-animation-function, cubic-bezier(0.74, 0.1, 0.74, 1)) alternate infinite uxlv7ww;
}
.bounce-rli-bounding-box .wrapper .group .shadow:nth-of-type(1) {
  left: var(--dot1-x-offset);
  animation-delay: var(--dot1-delay);
}
.bounce-rli-bounding-box .wrapper .group .shadow:nth-of-type(2) {
  left: var(--dot2-x-offset);
  animation-delay: var(--dot2-delay);
}
.bounce-rli-bounding-box .wrapper .group .shadow:nth-of-type(3) {
  left: var(--dot3-x-offset);
  animation-delay: var(--dot3-delay);
}

@property --TD-bounce-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bounce-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bounce-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bounce-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 0.5s;
}
@keyframes uxlv7wc {
  0% {
    top: 0%;
  }
  60% {
    height: 1.25em;
    border-radius: 50%;
    transform: scaleX(1);
  }
  100% {
    top: 100%;
    height: 0.22em;
    transform: scaleX(1.5);
    filter: blur(0.4px);
  }
}
@keyframes uxlv7ww {
  0% {
    transform: scaleX(0.2);
    opacity: 0.2;
  }
  60% {
    opacity: 0.4;
  }
  100% {
    transform: scaleX(1.5);
    opacity: 0.6;
  }
}
@keyframes uxlv7x6 {
  0%, 100% {
    background-color: var(--TD-bounce-phase1-color);
  }
  20% {
    background-color: var(--TD-bounce-phase1-color);
  }
  25% {
    background-color: var(--TD-bounce-phase2-color, var(--TD-bounce-phase1-color));
  }
  45% {
    background-color: var(--TD-bounce-phase2-color, var(--TD-bounce-phase1-color));
  }
  50% {
    background-color: var(--TD-bounce-phase3-color, var(--TD-bounce-phase1-color));
  }
  70% {
    background-color: var(--TD-bounce-phase3-color, var(--TD-bounce-phase1-color));
  }
  75% {
    background-color: var(--TD-bounce-phase4-color, var(--TD-bounce-phase1-color));
  }
  95% {
    background-color: var(--TD-bounce-phase4-color, var(--TD-bounce-phase1-color));
  }
}`);var fr=Array.from({length:4},(function(o,l){return"--TD-bounce-phase".concat(l+1,"-color")})),Tg=function(o){var l,i=Ia(o?.style,o?.size),u=i.styles,c=i.fontSize,f=o?.easing,p=Fa(o?.speedPlus,"0.5s").animationPeriod,y=(function(m){var v={};if(m instanceof Array){for(var w=Ua(m,fr.length),S=0;S<w.length&&!(S>=4);S++)v[fr[S]]=w[S];return v}try{if(typeof m!="string")throw new Error("Color String expected");for(var O=0;O<fr.length;O++)v[fr[O]]=m}catch{for(O=0;O<fr.length;O++)v[fr[O]]=fo}return v})((l=o?.color)!==null&&l!==void 0?l:"");return ve.createElement("span",{className:"rli-d-i-b bounce-rli-bounding-box",style:ke(ke(ke(ke(ke({},c&&{fontSize:c}),p&&{"--rli-animation-duration":p}),f&&{"--rli-animation-function":f}),y),u)},ve.createElement("span",{className:"wrapper"},ve.createElement("span",{className:"group"},ve.createElement("span",{className:"rli-d-i-b dot"}),ve.createElement("span",{className:"rli-d-i-b dot"}),ve.createElement("span",{className:"rli-d-i-b dot"})),ve.createElement("span",{className:"group"},ve.createElement("span",{className:"rli-d-i-b shadow"}),ve.createElement("span",{className:"rli-d-i-b shadow"}),ve.createElement("span",{className:"rli-d-i-b shadow"}))),ve.createElement(Ba,{staticText:!0,text:o?.text,textColor:o?.textColor,style:{marginTop:"2px"}}))},Lg=function(o){var l=Object(o).variant,i=l===void 0?"pulsate":l;return i==="pulsate"?ve.createElement(Ng,ke({},o)):i==="brick-stack"?ve.createElement(Rg,ke({},o)):i==="bob"?ve.createElement(zg,ke({},o)):i==="bounce"?ve.createElement(Tg,ke({},o)):null};Ie(`.blink-blur-rli-bounding-box {
  --shape-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  color: var(--shape-phase1-color);
}
.blink-blur-rli-bounding-box .blink-blur-indicator {
  isolation: isolate;
  display: flex;
  flex-direction: row;
  -moz-column-gap: 0.4em;
       column-gap: 0.4em;
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape {
  --x-deg: -20deg;
  width: 1.8em;
  height: 2.25em;
  border-radius: 0.25em;
  color: inherit;
  transform: skewX(var(--x-deg));
  background-color: var(--shape-phase1-color);
  animation-name: uxlv7id, uxlv7jl;
  animation-duration: var(--rli-animation-duration, 1.2s), calc(var(--rli-animation-duration, 1.2s) * 4);
  animation-timing-function: var(--rli-animation-function, ease-in);
  animation-iteration-count: infinite;
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape1 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.5 * -1);
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape2 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.4 * -1);
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape3 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.3 * -1);
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape4 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.2 * -1);
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape5 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.1 * -1);
}

@property --shape-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --shape-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --shape-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --shape-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7id {
  100%, 0% {
    opacity: 0.3;
    filter: blur(0.0675em) drop-shadow(0 0 0.0625em);
    transform: skewX(var(--x-deg)) scale(1.2, 1.45);
  }
  39% {
    opacity: 0.8;
  }
  40%, 41%, 42% {
    opacity: 0;
  }
  43% {
    opacity: 0.8;
  }
  50% {
    opacity: 1;
    filter: blur(0em) drop-shadow(0 0 0em);
    transform: skewX(var(--x-deg)) scale(1, 1);
  }
}
@keyframes uxlv7jl {
  100%, 0% {
    color: var(--shape-phase1-color);
    background-color: var(--shape-phase1-color);
  }
  25% {
    color: var(--shape-phase2-color, var(--shape-phase1-color));
    background-color: var(--shape-phase2-color, var(--shape-phase1-color));
  }
  50% {
    color: var(--shape-phase3-color, var(--shape-phase1-color));
    background-color: var(--shape-phase3-color, var(--shape-phase1-color));
  }
  75% {
    color: var(--shape-phase4-color, var(--shape-phase1-color));
    background-color: var(--shape-phase4-color, var(--shape-phase1-color));
  }
}`);Array.from({length:4},(function(o,l){return"--shape-phase".concat(l+1,"-color")}));Ie(`.trophy-spin-rli-bounding-box {
  --trophySpin-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  position: relative;
  isolation: isolate;
  color: var(--trophySpin-phase1-color);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator {
  width: 4em;
  perspective: 1000px;
  transform-style: preserve-3d;
  display: block;
  margin: 0 auto;
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade {
  display: block;
  width: 4em;
  height: 0.5em;
  background: var(--trophySpin-phase1-color);
  animation: uxlv7ki var(--rli-animation-duration, 2.5s) var(--rli-animation-function, linear) infinite, uxlv7l2 calc(var(--rli-animation-duration, 2.5s) * 0.5) var(--rli-animation-function, linear) infinite, uxlv7ly calc(var(--rli-animation-duration, 2.5s) * 4) var(--rli-animation-function, linear) infinite;
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(8) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 0 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(7) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 1 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(6) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 2 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(5) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 3 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(4) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 4 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(3) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 5 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(2) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 6 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(1) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 7 * -1);
}

@property --trophySpin-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --trophySpin-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --trophySpin-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --trophySpin-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 2.5s;
}
@keyframes uxlv7ki {
  to {
    transform: rotateY(1turn) rotateX(-25deg);
  }
}
@keyframes uxlv7l2 {
  100%, 0% {
    filter: brightness(1);
    opacity: 1;
  }
  15% {
    filter: brightness(1);
  }
  25% {
    opacity: 0.96;
  }
  30% {
    filter: brightness(0.92);
  }
  50% {
    filter: brightness(0.7);
    opacity: 1;
  }
  75% {
    filter: brightness(0.92);
    opacity: 0.96;
  }
  90% {
    filter: brightness(1);
  }
}
@keyframes uxlv7ly {
  100%, 0% {
    background-color: var(--trophySpin-phase1-color);
  }
  18% {
    background-color: var(--trophySpin-phase1-color);
  }
  25% {
    background-color: var(--trophySpin-phase2-color, var(--trophySpin-phase1-color));
  }
  43% {
    background-color: var(--trophySpin-phase2-color, var(--trophySpin-phase1-color));
  }
  50% {
    background-color: var(--trophySpin-phase3-color, var(--trophySpin-phase1-color));
  }
  68% {
    background-color: var(--trophySpin-phase3-color, var(--trophySpin-phase1-color));
  }
  75% {
    background-color: var(--trophySpin-phase4-color, var(--trophySpin-phase1-color));
  }
  93% {
    background-color: var(--trophySpin-phase4-color, var(--trophySpin-phase1-color));
  }
}`);Array.from({length:4},(function(o,l){return"--trophySpin-phase".concat(l+1,"-color")}));Ie(`.slab-rli-bounding-box {
  --slab-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  color: var(--slab-phase1-color);
  position: relative;
}
.slab-rli-bounding-box .slab-indicator {
  position: relative;
  display: block;
  width: 7em;
  height: 4em;
  margin: 0 auto;
  overflow: hidden;
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper {
  width: 4em;
  height: 4em;
  transform: perspective(15em) rotateX(66deg) rotateZ(-25deg);
  transform-style: preserve-3d;
  transform-origin: 50% 100%;
  display: block;
  position: absolute;
  bottom: 0;
  right: 0;
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--slab-phase1-color);
  opacity: 0;
  box-shadow: -0.08em 0.15em 0 rgba(0, 0, 0, 0.45);
  transform-origin: 0% 0%;
  animation: calc(var(--rli-animation-duration-unitless, 3) * 1s) var(--rli-animation-function, linear) infinite uxlv7md, calc(var(--rli-animation-duration-unitless, 3) * 4s) var(--rli-animation-function, linear) infinite uxlv7n0;
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(1) {
  animation-delay: calc(4 / (16 / var(--rli-animation-duration-unitless, 3)) * 3 * -1 * 1s);
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(2) {
  animation-delay: calc(4 / (16 / var(--rli-animation-duration-unitless, 3)) * 2 * -1 * 1s);
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(3) {
  animation-delay: calc(4 / (16 / var(--rli-animation-duration-unitless, 3)) * -1 * 1s);
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(4) {
  animation-delay: 0s;
}

@property --slab-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --slab-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --slab-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --slab-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration-unitless {
  syntax: "<number>";
  inherits: true;
  initial-value: 3;
}
@keyframes uxlv7md {
  0% {
    transform: translateY(0) rotateX(30deg);
    opacity: 0;
  }
  10% {
    transform: translateY(-40%) rotateX(0deg);
    opacity: 1;
  }
  25% {
    opacity: 1;
  }
  100% {
    transform: translateY(-400%) rotateX(0deg);
    opacity: 0;
  }
}
@keyframes uxlv7n0 {
  100%, 0% {
    background-color: var(--slab-phase1-color);
  }
  24.9% {
    background-color: var(--slab-phase1-color);
  }
  25% {
    background-color: var(--slab-phase2-color, var(--slab-phase1-color));
  }
  49.9% {
    background-color: var(--slab-phase2-color, var(--slab-phase1-color));
  }
  50% {
    background-color: var(--slab-phase3-color, var(--slab-phase1-color));
  }
  74.9% {
    background-color: var(--slab-phase3-color, var(--slab-phase1-color));
  }
  75% {
    background-color: var(--slab-phase4-color, var(--slab-phase1-color));
  }
  99.9% {
    background-color: var(--slab-phase4-color, var(--slab-phase1-color));
  }
}`);Array.from({length:4},(function(o,l){return"--slab-phase".concat(l+1,"-color")}));Ie(`.lifeline-rli-bounding-box {
  --life-line-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  isolation: isolate;
  color: var(--life-line-phase1-color);
}
.lifeline-rli-bounding-box .lifeline-indicator {
  position: relative;
  text-align: center;
}
.lifeline-rli-bounding-box .lifeline-indicator path.rli-lifeline {
  stroke-dasharray: 474.7616760254 30.3039367676;
  animation: var(--rli-animation-duration, 2s) var(--rli-animation-function, linear) infinite uxlv7k3, calc(var(--rli-animation-duration, 2s) * 4) var(--rli-animation-function, linear) infinite uxlv7kg;
}
.lifeline-rli-bounding-box .lifeline-text {
  color: currentColor;
  mix-blend-mode: difference;
  width: unset;
  display: block;
}

@property --life-line-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --life-line-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --life-line-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --life-line-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 2s;
}
@keyframes uxlv7k3 {
  to {
    stroke-dashoffset: -1010.1312255859;
  }
}
@keyframes uxlv7kg {
  100%, 0% {
    color: var(--life-line-phase1-color);
  }
  20% {
    color: var(--life-line-phase1-color);
  }
  25% {
    color: var(--life-line-phase2-color, var(--life-line-phase1-color));
  }
  45% {
    color: var(--life-line-phase2-color, var(--life-line-phase1-color));
  }
  50% {
    color: var(--life-line-phase3-color, var(--life-line-phase1-color));
  }
  70% {
    color: var(--life-line-phase3-color, var(--life-line-phase1-color));
  }
  75% {
    color: var(--life-line-phase4-color, var(--life-line-phase1-color));
  }
  95% {
    color: var(--life-line-phase4-color, var(--life-line-phase1-color));
  }
}`);Array.from({length:4},(function(o,l){return"--life-line-phase".concat(l+1,"-color")}));const jg=E.lazy(()=>Tn(()=>import("./BelajarEfektif-D89lwpG8.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8]))),Mg=E.lazy(()=>Tn(()=>import("./HomePage-DevqhnJd.js"),__vite__mapDeps([9,1,10,3,11,12,13,14,5,15,7]))),Dg=E.lazy(()=>Tn(()=>import("./KTPSIMPage-DUhLghIY.js"),__vite__mapDeps([16,11,1,2,12]))),Ag=E.lazy(()=>Tn(()=>import("./PanduanKTPPage-g_swO4Fi.js"),__vite__mapDeps([17,11,2,15,18,19,6]))),Fg=E.lazy(()=>Tn(()=>import("./PanduanSIMPage-BxbVPWjl.js"),__vite__mapDeps([20,11,2,15,18,19,6,21]))),Ig=E.lazy(()=>Tn(()=>import("./DataJurusanKampus-DDdXc-e-.js"),__vite__mapDeps([22,19,13,23,24,8,2,25]))),Bg=E.lazy(()=>Tn(()=>import("./PanduanKesehatanMental-Dak8lyjD.js"),__vite__mapDeps([26,2,3]))),Ug=E.lazy(()=>Tn(()=>import("./HomePage1-x1UDpyD6.js"),__vite__mapDeps([27,1,2,25,24,14,3,28]))),$g=E.lazy(()=>Tn(()=>import("./CareerDetail-BOaXd9zr.js"),__vite__mapDeps([29,28,30,14,13,23,5,4,21]))),Vg=E.lazy(()=>Tn(()=>import("./JurusanList-ClEdAquU.js"),__vite__mapDeps([31,32,14,3,1,2,10,25]))),Hg=E.lazy(()=>Tn(()=>import("./JurusanDetail-DeCyAaSn.js"),__vite__mapDeps([33,32,30,10,14])));function Wg(){return N.jsx(Dm,{children:N.jsxs(E.Suspense,{fallback:N.jsx("div",{className:"flex items-center justify-center h-screen",children:N.jsx(Lg,{variant:"bounce",color:"#3779e2",size:"medium",text:"",textColor:""})}),children:[N.jsx(pg,{}),N.jsx(pm,{children:N.jsxs(hn,{path:"/",element:N.jsx(fg,{}),children:[N.jsx(hn,{index:!0,element:N.jsx(Mg,{})}),N.jsx(hn,{path:"/ktp-sim",element:N.jsx(Dg,{})}),N.jsx(hn,{path:"/panduan-ktp",element:N.jsx(Ag,{})}),N.jsx(hn,{path:"/panduan-sim",element:N.jsx(Fg,{})}),N.jsx(hn,{path:"/persiapan-kuliah",element:N.jsx(Ig,{})}),N.jsx(hn,{path:"/kesehatan-mental",element:N.jsx(Bg,{})}),N.jsx(hn,{path:"/persiapan-karir",element:N.jsx(Ug,{})}),N.jsx(hn,{path:"/persiapan-karir/:id",element:N.jsx($g,{})}),N.jsx(hn,{path:"/belajar-efektif",element:N.jsx(jg,{})}),N.jsx(hn,{path:"/jurusan",element:N.jsx(Vg,{})}),N.jsx(hn,{path:"/jurusan/:id",element:N.jsx(Hg,{})})]})})]})})}vh.createRoot(document.getElementById("root")).render(N.jsx(ve.StrictMode,{children:N.jsx(Wg,{})}));export{xd as B,pr as L,n0 as M,ve as R,p0 as S,l0 as X,sg as a,hh as b,Dt as c,b0 as d,Wd as e,qg as f,_d as g,ch as h,Qg as i,N as j,E as r,Ma as u};
