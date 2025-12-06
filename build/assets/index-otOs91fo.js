(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))a(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const p of c.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&a(p)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function a(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();var Ac={exports:{}},Ei={},Pc={exports:{}},Ae={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Uf;function b0(){if(Uf)return Ae;Uf=1;var n=Symbol.for("react.element"),r=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.provider"),p=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),w=Symbol.iterator;function y(S){return S===null||typeof S!="object"?null:(S=w&&S[w]||S["@@iterator"],typeof S=="function"?S:null)}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},N=Object.assign,E={};function I(S,R,B){this.props=S,this.context=R,this.refs=E,this.updater=B||b}I.prototype.isReactComponent={},I.prototype.setState=function(S,R){if(typeof S!="object"&&typeof S!="function"&&S!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,S,R,"setState")},I.prototype.forceUpdate=function(S){this.updater.enqueueForceUpdate(this,S,"forceUpdate")};function k(){}k.prototype=I.prototype;function z(S,R,B){this.props=S,this.context=R,this.refs=E,this.updater=B||b}var H=z.prototype=new k;H.constructor=z,N(H,I.prototype),H.isPureReactComponent=!0;var W=Array.isArray,V=Object.prototype.hasOwnProperty,K={current:null},ee={key:!0,ref:!0,__self:!0,__source:!0};function ge(S,R,B){var Q,Y={},Z=null,oe=null;if(R!=null)for(Q in R.ref!==void 0&&(oe=R.ref),R.key!==void 0&&(Z=""+R.key),R)V.call(R,Q)&&!ee.hasOwnProperty(Q)&&(Y[Q]=R[Q]);var ie=arguments.length-2;if(ie===1)Y.children=B;else if(1<ie){for(var le=Array(ie),Se=0;Se<ie;Se++)le[Se]=arguments[Se+2];Y.children=le}if(S&&S.defaultProps)for(Q in ie=S.defaultProps,ie)Y[Q]===void 0&&(Y[Q]=ie[Q]);return{$$typeof:n,type:S,key:Z,ref:oe,props:Y,_owner:K.current}}function ae(S,R){return{$$typeof:n,type:S.type,key:R,ref:S.ref,props:S.props,_owner:S._owner}}function ve(S){return typeof S=="object"&&S!==null&&S.$$typeof===n}function me(S){var R={"=":"=0",":":"=2"};return"$"+S.replace(/[=:]/g,function(B){return R[B]})}var re=/\/+/g;function Te(S,R){return typeof S=="object"&&S!==null&&S.key!=null?me(""+S.key):R.toString(36)}function Ce(S,R,B,Q,Y){var Z=typeof S;(Z==="undefined"||Z==="boolean")&&(S=null);var oe=!1;if(S===null)oe=!0;else switch(Z){case"string":case"number":oe=!0;break;case"object":switch(S.$$typeof){case n:case r:oe=!0}}if(oe)return oe=S,Y=Y(oe),S=Q===""?"."+Te(oe,0):Q,W(Y)?(B="",S!=null&&(B=S.replace(re,"$&/")+"/"),Ce(Y,R,B,"",function(Se){return Se})):Y!=null&&(ve(Y)&&(Y=ae(Y,B+(!Y.key||oe&&oe.key===Y.key?"":(""+Y.key).replace(re,"$&/")+"/")+S)),R.push(Y)),1;if(oe=0,Q=Q===""?".":Q+":",W(S))for(var ie=0;ie<S.length;ie++){Z=S[ie];var le=Q+Te(Z,ie);oe+=Ce(Z,R,B,le,Y)}else if(le=y(S),typeof le=="function")for(S=le.call(S),ie=0;!(Z=S.next()).done;)Z=Z.value,le=Q+Te(Z,ie++),oe+=Ce(Z,R,B,le,Y);else if(Z==="object")throw R=String(S),Error("Objects are not valid as a React child (found: "+(R==="[object Object]"?"object with keys {"+Object.keys(S).join(", ")+"}":R)+"). If you meant to render a collection of children, use an array instead.");return oe}function ke(S,R,B){if(S==null)return S;var Q=[],Y=0;return Ce(S,Q,"","",function(Z){return R.call(B,Z,Y++)}),Q}function C(S){if(S._status===-1){var R=S._result;R=R(),R.then(function(B){(S._status===0||S._status===-1)&&(S._status=1,S._result=B)},function(B){(S._status===0||S._status===-1)&&(S._status=2,S._result=B)}),S._status===-1&&(S._status=0,S._result=R)}if(S._status===1)return S._result.default;throw S._result}var F={current:null},M={transition:null},U={ReactCurrentDispatcher:F,ReactCurrentBatchConfig:M,ReactCurrentOwner:K};function O(){throw Error("act(...) is not supported in production builds of React.")}return Ae.Children={map:ke,forEach:function(S,R,B){ke(S,function(){R.apply(this,arguments)},B)},count:function(S){var R=0;return ke(S,function(){R++}),R},toArray:function(S){return ke(S,function(R){return R})||[]},only:function(S){if(!ve(S))throw Error("React.Children.only expected to receive a single React element child.");return S}},Ae.Component=I,Ae.Fragment=i,Ae.Profiler=l,Ae.PureComponent=z,Ae.StrictMode=a,Ae.Suspense=m,Ae.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=U,Ae.act=O,Ae.cloneElement=function(S,R,B){if(S==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+S+".");var Q=N({},S.props),Y=S.key,Z=S.ref,oe=S._owner;if(R!=null){if(R.ref!==void 0&&(Z=R.ref,oe=K.current),R.key!==void 0&&(Y=""+R.key),S.type&&S.type.defaultProps)var ie=S.type.defaultProps;for(le in R)V.call(R,le)&&!ee.hasOwnProperty(le)&&(Q[le]=R[le]===void 0&&ie!==void 0?ie[le]:R[le])}var le=arguments.length-2;if(le===1)Q.children=B;else if(1<le){ie=Array(le);for(var Se=0;Se<le;Se++)ie[Se]=arguments[Se+2];Q.children=ie}return{$$typeof:n,type:S.type,key:Y,ref:Z,props:Q,_owner:oe}},Ae.createContext=function(S){return S={$$typeof:p,_currentValue:S,_currentValue2:S,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},S.Provider={$$typeof:c,_context:S},S.Consumer=S},Ae.createElement=ge,Ae.createFactory=function(S){var R=ge.bind(null,S);return R.type=S,R},Ae.createRef=function(){return{current:null}},Ae.forwardRef=function(S){return{$$typeof:h,render:S}},Ae.isValidElement=ve,Ae.lazy=function(S){return{$$typeof:x,_payload:{_status:-1,_result:S},_init:C}},Ae.memo=function(S,R){return{$$typeof:g,type:S,compare:R===void 0?null:R}},Ae.startTransition=function(S){var R=M.transition;M.transition={};try{S()}finally{M.transition=R}},Ae.unstable_act=O,Ae.useCallback=function(S,R){return F.current.useCallback(S,R)},Ae.useContext=function(S){return F.current.useContext(S)},Ae.useDebugValue=function(){},Ae.useDeferredValue=function(S){return F.current.useDeferredValue(S)},Ae.useEffect=function(S,R){return F.current.useEffect(S,R)},Ae.useId=function(){return F.current.useId()},Ae.useImperativeHandle=function(S,R,B){return F.current.useImperativeHandle(S,R,B)},Ae.useInsertionEffect=function(S,R){return F.current.useInsertionEffect(S,R)},Ae.useLayoutEffect=function(S,R){return F.current.useLayoutEffect(S,R)},Ae.useMemo=function(S,R){return F.current.useMemo(S,R)},Ae.useReducer=function(S,R,B){return F.current.useReducer(S,R,B)},Ae.useRef=function(S){return F.current.useRef(S)},Ae.useState=function(S){return F.current.useState(S)},Ae.useSyncExternalStore=function(S,R,B){return F.current.useSyncExternalStore(S,R,B)},Ae.useTransition=function(){return F.current.useTransition()},Ae.version="18.3.1",Ae}var Hf;function Au(){return Hf||(Hf=1,Pc.exports=b0()),Pc.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wf;function k0(){if(Wf)return Ei;Wf=1;var n=Au(),r=Symbol.for("react.element"),i=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,l=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function p(h,m,g){var x,w={},y=null,b=null;g!==void 0&&(y=""+g),m.key!==void 0&&(y=""+m.key),m.ref!==void 0&&(b=m.ref);for(x in m)a.call(m,x)&&!c.hasOwnProperty(x)&&(w[x]=m[x]);if(h&&h.defaultProps)for(x in m=h.defaultProps,m)w[x]===void 0&&(w[x]=m[x]);return{$$typeof:r,type:h,key:y,ref:b,props:w,_owner:l.current}}return Ei.Fragment=i,Ei.jsx=p,Ei.jsxs=p,Ei}var Vf;function _0(){return Vf||(Vf=1,Ac.exports=k0()),Ac.exports}var j=_0();/**
 * @license bippy
 *
 * Copyright (c) Aiden Bai
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */const S0="0.3.34",Pu=`bippy-${S0}`,Yf=Object.defineProperty,C0=Object.prototype.hasOwnProperty,Ai=()=>{},sm=n=>{try{Function.prototype.toString.call(n).indexOf("^_^")>-1&&setTimeout(()=>{throw new Error("React is running in production mode, but dead code elimination has not been applied. Read how to correctly configure React for production: https://reactjs.org/link/perf-use-production-build")})}catch{}},lm=(n=Oo())=>"getFiberRoots"in n;let cm=!1,Bf;const au=(n=Oo())=>cm?!0:(typeof n.inject=="function"&&(Bf=n.inject.toString()),!!Bf?.includes("(injected)")),xs=new Set,su=new Set,N0=n=>{const r=new Map;let i=0,a={_instrumentationIsActive:!1,_instrumentationSource:Pu,checkDCE:sm,hasUnsupportedRendererAttached:!1,inject(l){const c=++i;return r.set(c,l),su.add(l),a._instrumentationIsActive||(a._instrumentationIsActive=!0,xs.forEach(p=>p())),c},on:Ai,onCommitFiberRoot:Ai,onCommitFiberUnmount:Ai,onPostCommitFiberRoot:Ai,renderers:r,supportsFiber:!0,supportsFlight:!0};try{Yf(globalThis,"__REACT_DEVTOOLS_GLOBAL_HOOK__",{configurable:!0,enumerable:!0,get(){return a},set(p){if(p&&typeof p=="object"){const h=a.renderers;a=p,h.size>0&&(h.forEach((m,g)=>{su.add(m),p.renderers.set(g,m)}),lu(n))}}});const l=window.hasOwnProperty;let c=!1;Yf(window,"hasOwnProperty",{configurable:!0,value:function(...p){try{if(!c&&p[0]==="__REACT_DEVTOOLS_GLOBAL_HOOK__")return globalThis.__REACT_DEVTOOLS_GLOBAL_HOOK__=void 0,c=!0,-0}catch{}return l.apply(this,p)},writable:!0})}catch{lu(n)}return a},lu=n=>{n&&xs.add(n);try{const r=globalThis.__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!r)return;if(!r._instrumentationSource){const i=lm();if(r.checkDCE=sm,r.supportsFiber=!0,r.supportsFlight=!0,r.hasUnsupportedRendererAttached=!1,r._instrumentationSource=Pu,r._instrumentationIsActive=!1,i||(r.on=Ai),r.renderers.size){r._instrumentationIsActive=!0,xs.forEach(l=>l());return}const a=r.inject;au(r)&&!i&&(cm=!0,r.inject({scheduleRefresh(){}})&&(r._instrumentationIsActive=!0)),r.inject=l=>{const c=a(l);return su.add(l),r._instrumentationIsActive=!0,xs.forEach(p=>p()),c}}(r.renderers.size||r._instrumentationIsActive||au())&&n?.()}catch{}},E0=()=>C0.call(globalThis,"__REACT_DEVTOOLS_GLOBAL_HOOK__"),Oo=n=>E0()?(lu(n),globalThis.__REACT_DEVTOOLS_GLOBAL_HOOK__):N0(n),T0=()=>!!(typeof window<"u"&&(window.document?.createElement||window.navigator?.product==="ReactNative")),M0=()=>{try{T0()&&Oo()}catch{}},Os=0,eo=1,um=3,z0=5,I0=6,A0=7,P0=9,Us=11,Hs=13,Gi=14,Qi=15,R0=18,j0=22,F0=23,$0=26,L0=27,D0=60111,O0="Symbol(react.concurrent_mode)",U0="Symbol(react.async_mode)",Xf=1,H0=2,W0=4096,V0=4,Gf=8,Y0=16,B0=32,X0=1024,G0=8192,Qf=H0|V0|Y0|B0|W0|G0|X0,Li=n=>{switch(n.tag){case z0:case $0:case L0:return!0;default:return typeof n.type=="string"}},Ws=n=>{switch(n.tag){case eo:case Us:case Os:case Gi:case Qi:return!0;default:return!1}},Q0=(n,r)=>{try{const i=n.dependencies,a=n.alternate?.dependencies;if(!i||!a||typeof i!="object"||!("firstContext"in i)||typeof a!="object"||!("firstContext"in a))return!1;let l=i.firstContext,c=a.firstContext;for(;l&&typeof l=="object"&&"memoizedValue"in l||c&&typeof c=="object"&&"memoizedValue"in c;){if(r(l,c)===!0)return!0;l=l?.next,c=c?.next}}catch{}return!1},Ru=n=>{const r=n.memoizedProps,i=n.alternate?.memoizedProps||{},a=n.flags??n.effectTag??0;switch(n.tag){case eo:case P0:case Us:case Os:case Gi:case Qi:return(a&Xf)===Xf;default:return n.alternate?i!==r||n.alternate.memoizedState!==n.memoizedState||n.alternate.ref!==n.ref:!0}},ju=n=>(n.flags&(Qf|Gf))!==0||(n.subtreeFlags&(Qf|Gf))!==0,q0=n=>{const r=[],i=[n];for(;i.length;){const a=i.pop();a&&(Li(a)&&ju(a)&&Ru(a)&&r.push(a),a.child&&i.push(a.child),a.sibling&&i.push(a.sibling))}return r},Fu=n=>{switch(n.tag){case R0:return!0;case A0:case I0:case F0:case j0:return!0;case um:return!1;default:{const r=typeof n.type=="object"&&n.type!==null?n.type.$$typeof:n.type;switch(typeof r=="symbol"?r.toString():r){case D0:case O0:case U0:return!0;default:return!1}}}},K0=n=>{const r=[],i=[];for(Li(n)?r.push(n):n.child&&i.push(n.child);i.length;){const a=i.pop();if(!a)break;Li(a)?r.push(a):a.child&&i.push(a.child),a.sibling&&i.push(a.sibling)}return r};function dm(n,r,i=!1){return n&&r(n)instanceof Promise?fm(n,r,i):pm(n,r,i)}const pm=(n,r,i=!1)=>{if(!n)return null;if(r(n)===!0)return n;let a=i?n.return:n.child;for(;a;){const l=pm(a,r,i);if(l)return l;a=i?null:a.sibling}return null},fm=async(n,r,i=!1)=>{if(!n)return null;if(await r(n)===!0)return n;let a=i?n.return:n.child;for(;a;){const l=await fm(a,r,i);if(l)return l;a=i?null:a.sibling}return null},Gr=n=>{const r=n?.actualDuration??0;let i=r,a=n?.child??null;for(;r>0&&a!=null;)i-=a.actualDuration??0,a=a.sibling;return{selfTime:i,totalTime:r}},Di=n=>!!n.updateQueue?.memoCache,to=n=>{const r=n;return typeof r=="function"?r:typeof r=="object"&&r?to(r.type||r.render):null},Mt=n=>{const r=n;if(typeof r=="string")return r;if(typeof r!="function"&&!(typeof r=="object"&&r))return null;const i=r.displayName||r.name||null;if(i)return i;const a=to(r);return a&&(a.displayName||a.name)||null},J0=n=>{try{if(typeof n.version=="string"&&n.bundleType>0)return"development"}catch{}return"production"},Z0=()=>!!Oo()._instrumentationIsActive||lm()||au();let hm=0;const Lo=new WeakMap,ew=(n,r=hm++)=>{Lo.set(n,r)},Mr=n=>{let r=Lo.get(n);return!r&&n.alternate&&(r=Lo.get(n.alternate)),r||(r=hm++,ew(n,r)),r},Tr=(n,r,i)=>{let a=r;for(;a!=null;){if(Lo.has(a)||Mr(a),!Fu(a)&&Ru(a)&&n(a,"mount"),a.tag===Hs)if(a.memoizedState!==null){const p=a.child,h=p?p.sibling:null;if(h){const m=h.child;m!==null&&Tr(n,m,!1)}}else{let p=null;a.child!==null&&(p=a.child.child),p!==null&&Tr(n,p,!1)}else a.child!=null&&Tr(n,a.child,!0);a=i?a.sibling:null}},cu=(n,r,i,a)=>{if(Lo.has(r)||Mr(r),!i)return;Lo.has(i)||Mr(i);const l=r.tag===Hs;!Fu(r)&&Ru(r)&&n(r,"update");const p=l&&i.memoizedState!==null,h=l&&r.memoizedState!==null;if(p&&h){const m=r.child?.sibling??null,g=i.child?.sibling??null;m!==null&&g!==null&&cu(n,m,g)}else if(p&&!h){const m=r.child;m!==null&&Tr(n,m,!0)}else if(!p&&h){mm(n,i);const m=r.child?.sibling??null;m!==null&&Tr(n,m,!0)}else if(r.child!==i.child){let m=r.child;for(;m;){if(m.alternate){const g=m.alternate;cu(n,m,g)}else Tr(n,m,!1);m=m.sibling}}},uu=(n,r)=>{(r.tag===um||!Fu(r))&&n(r,"unmount")},mm=(n,r)=>{const i=r.tag===Hs&&r.memoizedState!==null;let a=r.child;for(i&&(a=(r.child?.sibling??null)?.child??null);a!==null;)a.return!==null&&(uu(n,a),mm(n,a)),a=a.sibling};let tw=0;const qf=new WeakMap,nw=(n,r)=>{const i="current"in n?n.current:n;let a=qf.get(n);a||(a={id:tw++,prevFiber:null},qf.set(n,a));const{prevFiber:l}=a;if(!i)uu(r,i);else if(l!==null){const c=l&&l.memoizedState!=null&&l.memoizedState.element!=null&&l.memoizedState.isDehydrated!==!0,p=i.memoizedState!=null&&i.memoizedState.element!=null&&i.memoizedState.isDehydrated!==!0;!c&&p?Tr(r,i,!1):c&&p?cu(r,i,i.alternate):c&&!p&&uu(r,i)}else Tr(r,i,!0);a.prevFiber=i},rw=n=>{const r=Oo(n.onActive);r._instrumentationSource=n.name??Pu;const i=r.onCommitFiberRoot;if(n.onCommitFiberRoot){const c=(p,h,m)=>{r.onCommitFiberRoot===c&&(i?.(p,h,m),n.onCommitFiberRoot?.(p,h,m))};r.onCommitFiberRoot=c}const a=r.onCommitFiberUnmount;if(n.onCommitFiberUnmount){const c=(p,h)=>{r.onCommitFiberUnmount===c&&(a?.(p,h),n.onCommitFiberUnmount?.(p,h))};r.onCommitFiberUnmount=c}const l=r.onPostCommitFiberRoot;if(n.onPostCommitFiberRoot){const c=(p,h)=>{r.onPostCommitFiberRoot===c&&(l?.(p,h),n.onPostCommitFiberRoot?.(p,h))};r.onPostCommitFiberRoot=c}return r};M0();var Vs,Ee,gm,vm,Xr,Kf,wm,xm,ym,$u,du,pu,bm,Oi={},km=[],ow=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,qi=Array.isArray;function tr(n,r){for(var i in r)n[i]=r[i];return n}function Lu(n){n&&n.parentNode&&n.parentNode.removeChild(n)}function Jr(n,r,i){var a,l,c,p={};for(c in r)c=="key"?a=r[c]:c=="ref"?l=r[c]:p[c]=r[c];if(arguments.length>2&&(p.children=arguments.length>3?Vs.call(arguments,2):i),typeof n=="function"&&n.defaultProps!=null)for(c in n.defaultProps)p[c]===void 0&&(p[c]=n.defaultProps[c]);return ys(n,p,a,l,null)}function ys(n,r,i,a,l){var c={type:n,props:r,key:i,ref:a,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:l??++gm,__i:-1,__u:0};return l==null&&Ee.vnode!=null&&Ee.vnode(c),c}function Re(n){return n.children}function gn(n,r){this.props=n,this.context=r}function Do(n,r){if(r==null)return n.__?Do(n.__,n.__i+1):null;for(var i;r<n.__k.length;r++)if((i=n.__k[r])!=null&&i.__e!=null)return i.__e;return typeof n.type=="function"?Do(n):null}function _m(n){var r,i;if((n=n.__)!=null&&n.__c!=null){for(n.__e=n.__c.base=null,r=0;r<n.__k.length;r++)if((i=n.__k[r])!=null&&i.__e!=null){n.__e=n.__c.base=i.__e;break}return _m(n)}}function fu(n){(!n.__d&&(n.__d=!0)&&Xr.push(n)&&!Ns.__r++||Kf!=Ee.debounceRendering)&&((Kf=Ee.debounceRendering)||wm)(Ns)}function Ns(){for(var n,r,i,a,l,c,p,h=1;Xr.length;)Xr.length>h&&Xr.sort(xm),n=Xr.shift(),h=Xr.length,n.__d&&(i=void 0,a=void 0,l=(a=(r=n).__v).__e,c=[],p=[],r.__P&&((i=tr({},a)).__v=a.__v+1,Ee.vnode&&Ee.vnode(i),Du(r.__P,i,a,r.__n,r.__P.namespaceURI,32&a.__u?[l]:null,c,l??Do(a),!!(32&a.__u),p),i.__v=a.__v,i.__.__k[i.__i]=i,Nm(c,i,p),a.__e=a.__=null,i.__e!=l&&_m(i)));Ns.__r=0}function Sm(n,r,i,a,l,c,p,h,m,g,x){var w,y,b,N,E,I,k,z=a&&a.__k||km,H=r.length;for(m=iw(i,r,z,m,H),w=0;w<H;w++)(b=i.__k[w])!=null&&(y=b.__i==-1?Oi:z[b.__i]||Oi,b.__i=w,I=Du(n,b,y,l,c,p,h,m,g,x),N=b.__e,b.ref&&y.ref!=b.ref&&(y.ref&&Ou(y.ref,null,b),x.push(b.ref,b.__c||N,b)),E==null&&N!=null&&(E=N),(k=!!(4&b.__u))||y.__k===b.__k?m=Cm(b,m,n,k):typeof b.type=="function"&&I!==void 0?m=I:N&&(m=N.nextSibling),b.__u&=-7);return i.__e=E,m}function iw(n,r,i,a,l){var c,p,h,m,g,x=i.length,w=x,y=0;for(n.__k=new Array(l),c=0;c<l;c++)(p=r[c])!=null&&typeof p!="boolean"&&typeof p!="function"?(typeof p=="string"||typeof p=="number"||typeof p=="bigint"||p.constructor==String?p=n.__k[c]=ys(null,p,null,null,null):qi(p)?p=n.__k[c]=ys(Re,{children:p},null,null,null):p.constructor==null&&p.__b>0?p=n.__k[c]=ys(p.type,p.props,p.key,p.ref?p.ref:null,p.__v):n.__k[c]=p,m=c+y,p.__=n,p.__b=n.__b+1,(g=p.__i=aw(p,i,m,w))!=-1&&(w--,(h=i[g])&&(h.__u|=2)),h==null||h.__v==null?(g==-1&&(l>x?y--:l<x&&y++),typeof p.type!="function"&&(p.__u|=4)):g!=m&&(g==m-1?y--:g==m+1?y++:(g>m?y--:y++,p.__u|=4))):n.__k[c]=null;if(w)for(c=0;c<x;c++)(h=i[c])!=null&&(2&h.__u)==0&&(h.__e==a&&(a=Do(h)),Tm(h,h));return a}function Cm(n,r,i,a){var l,c;if(typeof n.type=="function"){for(l=n.__k,c=0;l&&c<l.length;c++)l[c]&&(l[c].__=n,r=Cm(l[c],r,i,a));return r}n.__e!=r&&(a&&(r&&n.type&&!r.parentNode&&(r=Do(n)),i.insertBefore(n.__e,r||null)),r=n.__e);do r=r&&r.nextSibling;while(r!=null&&r.nodeType==8);return r}function Es(n,r){return r=r||[],n==null||typeof n=="boolean"||(qi(n)?n.some(function(i){Es(i,r)}):r.push(n)),r}function aw(n,r,i,a){var l,c,p,h=n.key,m=n.type,g=r[i],x=g!=null&&(2&g.__u)==0;if(g===null&&h==null||x&&h==g.key&&m==g.type)return i;if(a>(x?1:0)){for(l=i-1,c=i+1;l>=0||c<r.length;)if((g=r[p=l>=0?l--:c++])!=null&&(2&g.__u)==0&&h==g.key&&m==g.type)return p}return-1}function Jf(n,r,i){r[0]=="-"?n.setProperty(r,i??""):n[r]=i==null?"":typeof i!="number"||ow.test(r)?i:i+"px"}function cs(n,r,i,a,l){var c,p;e:if(r=="style")if(typeof i=="string")n.style.cssText=i;else{if(typeof a=="string"&&(n.style.cssText=a=""),a)for(r in a)i&&r in i||Jf(n.style,r,"");if(i)for(r in i)a&&i[r]==a[r]||Jf(n.style,r,i[r])}else if(r[0]=="o"&&r[1]=="n")c=r!=(r=r.replace(ym,"$1")),p=r.toLowerCase(),r=p in n||r=="onFocusOut"||r=="onFocusIn"?p.slice(2):r.slice(2),n.l||(n.l={}),n.l[r+c]=i,i?a?i.u=a.u:(i.u=$u,n.addEventListener(r,c?pu:du,c)):n.removeEventListener(r,c?pu:du,c);else{if(l=="http://www.w3.org/2000/svg")r=r.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(r!="width"&&r!="height"&&r!="href"&&r!="list"&&r!="form"&&r!="tabIndex"&&r!="download"&&r!="rowSpan"&&r!="colSpan"&&r!="role"&&r!="popover"&&r in n)try{n[r]=i??"";break e}catch{}typeof i=="function"||(i==null||i===!1&&r[4]!="-"?n.removeAttribute(r):n.setAttribute(r,r=="popover"&&i==1?"":i))}}function Zf(n){return function(r){if(this.l){var i=this.l[r.type+n];if(r.t==null)r.t=$u++;else if(r.t<i.u)return;return i(Ee.event?Ee.event(r):r)}}}function Du(n,r,i,a,l,c,p,h,m,g){var x,w,y,b,N,E,I,k,z,H,W,V,K,ee,ge,ae,ve,me=r.type;if(r.constructor!=null)return null;128&i.__u&&(m=!!(32&i.__u),c=[h=r.__e=i.__e]),(x=Ee.__b)&&x(r);e:if(typeof me=="function")try{if(k=r.props,z="prototype"in me&&me.prototype.render,H=(x=me.contextType)&&a[x.__c],W=x?H?H.props.value:x.__:a,i.__c?I=(w=r.__c=i.__c).__=w.__E:(z?r.__c=w=new me(k,W):(r.__c=w=new gn(k,W),w.constructor=me,w.render=lw),H&&H.sub(w),w.state||(w.state={}),w.__n=a,y=w.__d=!0,w.__h=[],w._sb=[]),z&&w.__s==null&&(w.__s=w.state),z&&me.getDerivedStateFromProps!=null&&(w.__s==w.state&&(w.__s=tr({},w.__s)),tr(w.__s,me.getDerivedStateFromProps(k,w.__s))),b=w.props,N=w.state,w.__v=r,y)z&&me.getDerivedStateFromProps==null&&w.componentWillMount!=null&&w.componentWillMount(),z&&w.componentDidMount!=null&&w.__h.push(w.componentDidMount);else{if(z&&me.getDerivedStateFromProps==null&&k!==b&&w.componentWillReceiveProps!=null&&w.componentWillReceiveProps(k,W),r.__v==i.__v||!w.__e&&w.shouldComponentUpdate!=null&&w.shouldComponentUpdate(k,w.__s,W)===!1){for(r.__v!=i.__v&&(w.props=k,w.state=w.__s,w.__d=!1),r.__e=i.__e,r.__k=i.__k,r.__k.some(function(re){re&&(re.__=r)}),V=0;V<w._sb.length;V++)w.__h.push(w._sb[V]);w._sb=[],w.__h.length&&p.push(w);break e}w.componentWillUpdate!=null&&w.componentWillUpdate(k,w.__s,W),z&&w.componentDidUpdate!=null&&w.__h.push(function(){w.componentDidUpdate(b,N,E)})}if(w.context=W,w.props=k,w.__P=n,w.__e=!1,K=Ee.__r,ee=0,z){for(w.state=w.__s,w.__d=!1,K&&K(r),x=w.render(w.props,w.state,w.context),ge=0;ge<w._sb.length;ge++)w.__h.push(w._sb[ge]);w._sb=[]}else do w.__d=!1,K&&K(r),x=w.render(w.props,w.state,w.context),w.state=w.__s;while(w.__d&&++ee<25);w.state=w.__s,w.getChildContext!=null&&(a=tr(tr({},a),w.getChildContext())),z&&!y&&w.getSnapshotBeforeUpdate!=null&&(E=w.getSnapshotBeforeUpdate(b,N)),ae=x,x!=null&&x.type===Re&&x.key==null&&(ae=Em(x.props.children)),h=Sm(n,qi(ae)?ae:[ae],r,i,a,l,c,p,h,m,g),w.base=r.__e,r.__u&=-161,w.__h.length&&p.push(w),I&&(w.__E=w.__=null)}catch(re){if(r.__v=null,m||c!=null)if(re.then){for(r.__u|=m?160:128;h&&h.nodeType==8&&h.nextSibling;)h=h.nextSibling;c[c.indexOf(h)]=null,r.__e=h}else{for(ve=c.length;ve--;)Lu(c[ve]);hu(r)}else r.__e=i.__e,r.__k=i.__k,re.then||hu(r);Ee.__e(re,r,i)}else c==null&&r.__v==i.__v?(r.__k=i.__k,r.__e=i.__e):h=r.__e=sw(i.__e,r,i,a,l,c,p,m,g);return(x=Ee.diffed)&&x(r),128&r.__u?void 0:h}function hu(n){n&&n.__c&&(n.__c.__e=!0),n&&n.__k&&n.__k.forEach(hu)}function Nm(n,r,i){for(var a=0;a<i.length;a++)Ou(i[a],i[++a],i[++a]);Ee.__c&&Ee.__c(r,n),n.some(function(l){try{n=l.__h,l.__h=[],n.some(function(c){c.call(l)})}catch(c){Ee.__e(c,l.__v)}})}function Em(n){return typeof n!="object"||n==null||n.__b&&n.__b>0?n:qi(n)?n.map(Em):tr({},n)}function sw(n,r,i,a,l,c,p,h,m){var g,x,w,y,b,N,E,I=i.props||Oi,k=r.props,z=r.type;if(z=="svg"?l="http://www.w3.org/2000/svg":z=="math"?l="http://www.w3.org/1998/Math/MathML":l||(l="http://www.w3.org/1999/xhtml"),c!=null){for(g=0;g<c.length;g++)if((b=c[g])&&"setAttribute"in b==!!z&&(z?b.localName==z:b.nodeType==3)){n=b,c[g]=null;break}}if(n==null){if(z==null)return document.createTextNode(k);n=document.createElementNS(l,z,k.is&&k),h&&(Ee.__m&&Ee.__m(r,c),h=!1),c=null}if(z==null)I===k||h&&n.data==k||(n.data=k);else{if(c=c&&Vs.call(n.childNodes),!h&&c!=null)for(I={},g=0;g<n.attributes.length;g++)I[(b=n.attributes[g]).name]=b.value;for(g in I)if(b=I[g],g!="children"){if(g=="dangerouslySetInnerHTML")w=b;else if(!(g in k)){if(g=="value"&&"defaultValue"in k||g=="checked"&&"defaultChecked"in k)continue;cs(n,g,null,b,l)}}for(g in k)b=k[g],g=="children"?y=b:g=="dangerouslySetInnerHTML"?x=b:g=="value"?N=b:g=="checked"?E=b:h&&typeof b!="function"||I[g]===b||cs(n,g,b,I[g],l);if(x)h||w&&(x.__html==w.__html||x.__html==n.innerHTML)||(n.innerHTML=x.__html),r.__k=[];else if(w&&(n.innerHTML=""),Sm(r.type=="template"?n.content:n,qi(y)?y:[y],r,i,a,z=="foreignObject"?"http://www.w3.org/1999/xhtml":l,c,p,c?c[0]:i.__k&&Do(i,0),h,m),c!=null)for(g=c.length;g--;)Lu(c[g]);h||(g="value",z=="progress"&&N==null?n.removeAttribute("value"):N!=null&&(N!==n[g]||z=="progress"&&!N||z=="option"&&N!=I[g])&&cs(n,g,N,I[g],l),g="checked",E!=null&&E!=n[g]&&cs(n,g,E,I[g],l))}return n}function Ou(n,r,i){try{if(typeof n=="function"){var a=typeof n.__u=="function";a&&n.__u(),a&&r==null||(n.__u=n(r))}else n.current=r}catch(l){Ee.__e(l,i)}}function Tm(n,r,i){var a,l;if(Ee.unmount&&Ee.unmount(n),(a=n.ref)&&(a.current&&a.current!=n.__e||Ou(a,null,r)),(a=n.__c)!=null){if(a.componentWillUnmount)try{a.componentWillUnmount()}catch(c){Ee.__e(c,r)}a.base=a.__P=null}if(a=n.__k)for(l=0;l<a.length;l++)a[l]&&Tm(a[l],r,i||typeof n.type!="function");i||Lu(n.__e),n.__c=n.__=n.__e=void 0}function lw(n,r,i){return this.constructor(n,i)}function Ri(n,r,i){var a,l,c,p;r==document&&(r=document.documentElement),Ee.__&&Ee.__(n,r),l=(a=!1)?null:r.__k,c=[],p=[],Du(r,n=r.__k=Jr(Re,null,[n]),l||Oi,Oi,r.namespaceURI,l?null:r.firstChild?Vs.call(r.childNodes):null,c,l?l.__e:r.firstChild,a,p),Nm(c,n,p)}function Mm(n){function r(i){var a,l;return this.getChildContext||(a=new Set,(l={})[r.__c]=this,this.getChildContext=function(){return l},this.componentWillUnmount=function(){a=null},this.shouldComponentUpdate=function(c){this.props.value!=c.value&&a.forEach(function(p){p.__e=!0,fu(p)})},this.sub=function(c){a.add(c);var p=c.componentWillUnmount;c.componentWillUnmount=function(){a&&a.delete(c),p&&p.call(c)}}),i.children}return r.__c="__cC"+bm++,r.__=n,r.Provider=r.__l=(r.Consumer=function(i,a){return i.children(a)}).contextType=r,r}Vs=km.slice,Ee={__e:function(n,r,i,a){for(var l,c,p;r=r.__;)if((l=r.__c)&&!l.__)try{if((c=l.constructor)&&c.getDerivedStateFromError!=null&&(l.setState(c.getDerivedStateFromError(n)),p=l.__d),l.componentDidCatch!=null&&(l.componentDidCatch(n,a||{}),p=l.__d),p)return l.__E=l}catch(h){n=h}throw n}},gm=0,vm=function(n){return n!=null&&n.constructor==null},gn.prototype.setState=function(n,r){var i;i=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=tr({},this.state),typeof n=="function"&&(n=n(tr({},i),this.props)),n&&tr(i,n),n!=null&&this.__v&&(r&&this._sb.push(r),fu(this))},gn.prototype.forceUpdate=function(n){this.__v&&(this.__e=!0,n&&this.__h.push(n),fu(this))},gn.prototype.render=Re,Xr=[],wm=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,xm=function(n,r){return n.__v.__b-r.__v.__b},Ns.__r=0,ym=/(PointerCapture)$|Capture$/i,$u=0,du=Zf(!1),pu=Zf(!0),bm=0;var Zr,ot,Rc,eh,Ui=0,zm=[],ht=Ee,th=ht.__b,nh=ht.__r,rh=ht.diffed,oh=ht.__c,ih=ht.unmount,ah=ht.__;function Ki(n,r){ht.__h&&ht.__h(ot,n,Ui||r),Ui=0;var i=ot.__H||(ot.__H={__:[],__h:[]});return n>=i.__.length&&i.__.push({}),i.__[n]}function Ie(n){return Ui=1,cw(Im,n)}function cw(n,r,i){var a=Ki(Zr++,2);if(a.t=n,!a.__c&&(a.__=[i?i(r):Im(void 0,r),function(h){var m=a.__N?a.__N[0]:a.__[0],g=a.t(m,h);m!==g&&(a.__N=[g,a.__[1]],a.__c.setState({}))}],a.__c=ot,!ot.__f)){var l=function(h,m,g){if(!a.__c.__H)return!0;var x=a.__c.__H.__.filter(function(y){return!!y.__c});if(x.every(function(y){return!y.__N}))return!c||c.call(this,h,m,g);var w=a.__c.props!==h;return x.forEach(function(y){if(y.__N){var b=y.__[0];y.__=y.__N,y.__N=void 0,b!==y.__[0]&&(w=!0)}}),c&&c.call(this,h,m,g)||w};ot.__f=!0;var c=ot.shouldComponentUpdate,p=ot.componentWillUpdate;ot.componentWillUpdate=function(h,m,g){if(this.__e){var x=c;c=void 0,l(h,m,g),c=x}p&&p.call(this,h,m,g)},ot.shouldComponentUpdate=l}return a.__N||a.__}function ze(n,r){var i=Ki(Zr++,3);!ht.__s&&Wu(i.__H,r)&&(i.__=n,i.u=r,ot.__H.__h.push(i))}function Uu(n,r){var i=Ki(Zr++,4);!ht.__s&&Wu(i.__H,r)&&(i.__=n,i.u=r,ot.__h.push(i))}function we(n){return Ui=5,Mn(function(){return{current:n}},[])}function Mn(n,r){var i=Ki(Zr++,7);return Wu(i.__H,r)&&(i.__=n(),i.__H=r,i.__h=n),i.__}function ft(n,r){return Ui=8,Mn(function(){return n},r)}function Hu(n){var r=ot.context[n.__c],i=Ki(Zr++,9);return i.c=n,r?(i.__==null&&(i.__=!0,r.sub(ot)),r.props.value):n.__}function uw(){for(var n;n=zm.shift();)if(n.__P&&n.__H)try{n.__H.__h.forEach(bs),n.__H.__h.forEach(mu),n.__H.__h=[]}catch(r){n.__H.__h=[],ht.__e(r,n.__v)}}ht.__b=function(n){ot=null,th&&th(n)},ht.__=function(n,r){n&&r.__k&&r.__k.__m&&(n.__m=r.__k.__m),ah&&ah(n,r)},ht.__r=function(n){nh&&nh(n),Zr=0;var r=(ot=n.__c).__H;r&&(Rc===ot?(r.__h=[],ot.__h=[],r.__.forEach(function(i){i.__N&&(i.__=i.__N),i.u=i.__N=void 0})):(r.__h.forEach(bs),r.__h.forEach(mu),r.__h=[],Zr=0)),Rc=ot},ht.diffed=function(n){rh&&rh(n);var r=n.__c;r&&r.__H&&(r.__H.__h.length&&(zm.push(r)!==1&&eh===ht.requestAnimationFrame||((eh=ht.requestAnimationFrame)||dw)(uw)),r.__H.__.forEach(function(i){i.u&&(i.__H=i.u),i.u=void 0})),Rc=ot=null},ht.__c=function(n,r){r.some(function(i){try{i.__h.forEach(bs),i.__h=i.__h.filter(function(a){return!a.__||mu(a)})}catch(a){r.some(function(l){l.__h&&(l.__h=[])}),r=[],ht.__e(a,i.__v)}}),oh&&oh(n,r)},ht.unmount=function(n){ih&&ih(n);var r,i=n.__c;i&&i.__H&&(i.__H.__.forEach(function(a){try{bs(a)}catch(l){r=l}}),i.__H=void 0,r&&ht.__e(r,i.__v))};var sh=typeof requestAnimationFrame=="function";function dw(n){var r,i=function(){clearTimeout(a),sh&&cancelAnimationFrame(r),setTimeout(n)},a=setTimeout(i,35);sh&&(r=requestAnimationFrame(i))}function bs(n){var r=ot,i=n.__c;typeof i=="function"&&(n.__c=void 0,i()),ot=r}function mu(n){var r=ot;n.__c=n.__(),ot=r}function Wu(n,r){return!n||n.length!==r.length||r.some(function(i,a){return i!==n[a]})}function Im(n,r){return typeof r=="function"?r(n):r}var pw=Symbol.for("preact-signals");function Vu(){if(Po>1)Po--;else{for(var n,r=!1;ji!==void 0;){var i=ji;for(ji=void 0,gu++;i!==void 0;){var a=i.o;if(i.o=void 0,i.f&=-3,!(8&i.f)&&Pm(i))try{i.c()}catch(l){r||(n=l,r=!0)}i=a}}if(gu=0,Po--,r)throw n}}var We=void 0;function Hi(n){var r=We;We=void 0;try{return n()}finally{We=r}}var ji=void 0,Po=0,gu=0,Ts=0;function Am(n){if(We!==void 0){var r=n.n;if(r===void 0||r.t!==We)return r={i:0,S:n,p:We.s,n:void 0,t:We,e:void 0,x:void 0,r},We.s!==void 0&&(We.s.n=r),We.s=r,n.n=r,32&We.f&&n.S(r),r;if(r.i===-1)return r.i=0,r.n!==void 0&&(r.n.p=r.p,r.p!==void 0&&(r.p.n=r.n),r.p=We.s,r.n=void 0,We.s.n=r,We.s=r),r}}function Rt(n,r){this.v=n,this.i=0,this.n=void 0,this.t=void 0,this.W=r?.watched,this.Z=r?.unwatched,this.name=r?.name}Rt.prototype.brand=pw;Rt.prototype.h=function(){return!0};Rt.prototype.S=function(n){var r=this,i=this.t;i!==n&&n.e===void 0&&(n.x=i,this.t=n,i!==void 0?i.e=n:Hi(function(){var a;(a=r.W)==null||a.call(r)}))};Rt.prototype.U=function(n){var r=this;if(this.t!==void 0){var i=n.e,a=n.x;i!==void 0&&(i.x=a,n.e=void 0),a!==void 0&&(a.e=i,n.x=void 0),n===this.t&&(this.t=a,a===void 0&&Hi(function(){var l;(l=r.Z)==null||l.call(r)}))}};Rt.prototype.subscribe=function(n){var r=this;return Ys(function(){var i=r.value,a=We;We=void 0;try{n(i)}finally{We=a}},{name:"sub"})};Rt.prototype.valueOf=function(){return this.value};Rt.prototype.toString=function(){return this.value+""};Rt.prototype.toJSON=function(){return this.value};Rt.prototype.peek=function(){var n=We;We=void 0;try{return this.value}finally{We=n}};Object.defineProperty(Rt.prototype,"value",{get:function(){var n=Am(this);return n!==void 0&&(n.i=this.i),this.v},set:function(n){if(n!==this.v){if(gu>100)throw new Error("Cycle detected");this.v=n,this.i++,Ts++,Po++;try{for(var r=this.t;r!==void 0;r=r.x)r.t.N()}finally{Vu()}}}});function xt(n,r){return new Rt(n,r)}function Pm(n){for(var r=n.s;r!==void 0;r=r.n)if(r.S.i!==r.i||!r.S.h()||r.S.i!==r.i)return!0;return!1}function Rm(n){for(var r=n.s;r!==void 0;r=r.n){var i=r.S.n;if(i!==void 0&&(r.r=i),r.S.n=r,r.i=-1,r.n===void 0){n.s=r;break}}}function jm(n){for(var r=n.s,i=void 0;r!==void 0;){var a=r.p;r.i===-1?(r.S.U(r),a!==void 0&&(a.n=r.n),r.n!==void 0&&(r.n.p=a)):i=r,r.S.n=r.r,r.r!==void 0&&(r.r=void 0),r=a}n.s=i}function no(n,r){Rt.call(this,void 0),this.x=n,this.s=void 0,this.g=Ts-1,this.f=4,this.W=r?.watched,this.Z=r?.unwatched,this.name=r?.name}no.prototype=new Rt;no.prototype.h=function(){if(this.f&=-3,1&this.f)return!1;if((36&this.f)==32||(this.f&=-5,this.g===Ts))return!0;if(this.g=Ts,this.f|=1,this.i>0&&!Pm(this))return this.f&=-2,!0;var n=We;try{Rm(this),We=this;var r=this.x();(16&this.f||this.v!==r||this.i===0)&&(this.v=r,this.f&=-17,this.i++)}catch(i){this.v=i,this.f|=16,this.i++}return We=n,jm(this),this.f&=-2,!0};no.prototype.S=function(n){if(this.t===void 0){this.f|=36;for(var r=this.s;r!==void 0;r=r.n)r.S.S(r)}Rt.prototype.S.call(this,n)};no.prototype.U=function(n){if(this.t!==void 0&&(Rt.prototype.U.call(this,n),this.t===void 0)){this.f&=-33;for(var r=this.s;r!==void 0;r=r.n)r.S.U(r)}};no.prototype.N=function(){if(!(2&this.f)){this.f|=6;for(var n=this.t;n!==void 0;n=n.x)n.t.N()}};Object.defineProperty(no.prototype,"value",{get:function(){if(1&this.f)throw new Error("Cycle detected");var n=Am(this);if(this.h(),n!==void 0&&(n.i=this.i),16&this.f)throw this.v;return this.v}});function ro(n,r){return new no(n,r)}function Fm(n){var r=n.u;if(n.u=void 0,typeof r=="function"){Po++;var i=We;We=void 0;try{r()}catch(a){throw n.f&=-2,n.f|=8,Yu(n),a}finally{We=i,Vu()}}}function Yu(n){for(var r=n.s;r!==void 0;r=r.n)r.S.U(r);n.x=void 0,n.s=void 0,Fm(n)}function fw(n){if(We!==this)throw new Error("Out-of-order effect");jm(this),We=n,this.f&=-2,8&this.f&&Yu(this),Vu()}function Uo(n,r){this.x=n,this.u=void 0,this.s=void 0,this.o=void 0,this.f=32,this.name=r?.name}Uo.prototype.c=function(){var n=this.S();try{if(8&this.f||this.x===void 0)return;var r=this.x();typeof r=="function"&&(this.u=r)}finally{n()}};Uo.prototype.S=function(){if(1&this.f)throw new Error("Cycle detected");this.f|=1,this.f&=-9,Fm(this),Rm(this),Po++;var n=We;return We=this,fw.bind(this,n)};Uo.prototype.N=function(){2&this.f||(this.f|=2,this.o=ji,ji=this)};Uo.prototype.d=function(){this.f|=8,1&this.f||Yu(this)};Uo.prototype.dispose=function(){this.d()};function Ys(n,r){var i=new Uo(n,r);try{i.c()}catch(l){throw i.d(),l}var a=i.d.bind(i);return a[Symbol.dispose]=a,a}var jc;function Ho(n,r){Ee[n]=r.bind(null,Ee[n]||function(){})}function Ms(n){jc&&jc(),jc=n&&n.S()}function $m(n){var r=this,i=n.data,a=mw(i);a.value=i;var l=Mn(function(){for(var c=r.__v;c=c.__;)if(c.__c){c.__c.__$f|=4;break}return r.__$u.c=function(){var p,h=r.__$u.S(),m=l.value;h(),vm(m)||((p=r.base)==null?void 0:p.nodeType)!==3?(r.__$f|=1,r.setState({})):r.base.data=m},ro(function(){var p=a.value.value;return p===0?0:p===!0?"":p||""})},[]);return l.value}$m.displayName="_st";Object.defineProperties(Rt.prototype,{constructor:{configurable:!0,value:void 0},type:{configurable:!0,value:$m},props:{configurable:!0,get:function(){return{data:this}}},__b:{configurable:!0,value:1}});Ho("__b",function(n,r){if(typeof r.type=="string"){var i,a=r.props;for(var l in a)if(l!=="children"){var c=a[l];c instanceof Rt&&(i||(r.__np=i={}),i[l]=c,a[l]=c.peek())}}n(r)});Ho("__r",function(n,r){Ms();var i,a=r.__c;a&&(a.__$f&=-2,(i=a.__$u)===void 0&&(a.__$u=i=(function(l){var c;return Ys(function(){c=this}),c.c=function(){a.__$f|=1,a.setState({})},c})())),Ms(i),n(r)});Ho("__e",function(n,r,i,a){Ms(),n(r,i,a)});Ho("diffed",function(n,r){Ms();var i;if(typeof r.type=="string"&&(i=r.__e)){var a=r.__np,l=r.props;if(a){var c=i.U;if(c)for(var p in c){var h=c[p];h!==void 0&&!(p in a)&&(h.d(),c[p]=void 0)}else i.U=c={};for(var m in a){var g=c[m],x=a[m];g===void 0?(g=hw(i,m,x,l),c[m]=g):g.o(x,l)}}}n(r)});function hw(n,r,i,a){var l=r in n&&n.ownerSVGElement===void 0,c=xt(i);return{o:function(p,h){c.value=p,a=h},d:Ys(function(){var p=c.value.value;a[r]!==p&&(a[r]=p,l?n[r]=p:p?n.setAttribute(r,p):n.removeAttribute(r))})}}Ho("unmount",function(n,r){if(typeof r.type=="string"){var i=r.__e;if(i){var a=i.U;if(a){i.U=void 0;for(var l in a){var c=a[l];c&&c.d()}}}}else{var p=r.__c;if(p){var h=p.__$u;h&&(p.__$u=void 0,h.d())}}n(r)});Ho("__h",function(n,r,i,a){(a<3||a===9)&&(r.__$f|=2),n(r,i,a)});gn.prototype.shouldComponentUpdate=function(n,r){var i=this.__$u,a=i&&i.s!==void 0;for(var l in r)return!0;if(this.__f||typeof this.u=="boolean"&&this.u===!0){if(!(a||2&this.__$f||4&this.__$f)||1&this.__$f)return!0}else if(!(a||4&this.__$f)||3&this.__$f)return!0;for(var c in n)if(c!=="__source"&&n[c]!==this.props[c])return!0;for(var p in this.props)if(!(p in n))return!0;return!1};function mw(n){return Mn(function(){return xt(n)},[])}function Wi(n){var r=we(n);r.current=n,ze(function(){return Ys(function(){return r.current()})},[])}function Lm(n,r){for(var i in r)n[i]=r[i];return n}function vu(n,r){for(var i in n)if(i!=="__source"&&!(i in r))return!0;for(var a in r)if(a!=="__source"&&n[a]!==r[a])return!0;return!1}function gw(n,r){var i=r(),a=Ie({t:{__:i,u:r}}),l=a[0].t,c=a[1];return Uu(function(){l.__=i,l.u=r,Fc(l)&&c({t:l})},[n,i,r]),ze(function(){return Fc(l)&&c({t:l}),n(function(){Fc(l)&&c({t:l})})},[n]),i}function Fc(n){var r,i,a=n.u,l=n.__;try{var c=a();return!((r=l)===(i=c)&&(r!==0||1/r==1/i)||r!=r&&i!=i)}catch{return!0}}function lh(n,r){this.props=n,this.context=r}function Bs(n,r){function i(l){var c=this.props.ref,p=c==l.ref;return!p&&c&&(c.call?c(null):c.current=null),r?!r(this.props,l)||!p:vu(this.props,l)}function a(l){return this.shouldComponentUpdate=i,Jr(n,l)}return a.displayName="Memo("+(n.displayName||n.name)+")",a.prototype.isReactComponent=!0,a.__f=!0,a.type=n,a}(lh.prototype=new gn).isPureReactComponent=!0,lh.prototype.shouldComponentUpdate=function(n,r){return vu(this.props,n)||vu(this.state,r)};var ch=Ee.__b;Ee.__b=function(n){n.type&&n.type.__f&&n.ref&&(n.props.ref=n.ref,n.ref=null),ch&&ch(n)};var vw=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.forward_ref")||3911;function Bu(n){function r(i){var a=Lm({},i);return delete a.ref,n(a,i.ref||null)}return r.$$typeof=vw,r.render=n,r.prototype.isReactComponent=r.__f=!0,r.displayName="ForwardRef("+(n.displayName||n.name)+")",r}var ww=Ee.__e;Ee.__e=function(n,r,i,a){if(n.then){for(var l,c=r;c=c.__;)if((l=c.__c)&&l.__c)return r.__e==null&&(r.__e=i.__e,r.__k=i.__k),l.__c(n,r)}ww(n,r,i,a)};var uh=Ee.unmount;function Dm(n,r,i){return n&&(n.__c&&n.__c.__H&&(n.__c.__H.__.forEach(function(a){typeof a.__c=="function"&&a.__c()}),n.__c.__H=null),(n=Lm({},n)).__c!=null&&(n.__c.__P===i&&(n.__c.__P=r),n.__c.__e=!0,n.__c=null),n.__k=n.__k&&n.__k.map(function(a){return Dm(a,r,i)})),n}function Om(n,r,i){return n&&i&&(n.__v=null,n.__k=n.__k&&n.__k.map(function(a){return Om(a,r,i)}),n.__c&&n.__c.__P===r&&(n.__e&&i.appendChild(n.__e),n.__c.__e=!0,n.__c.__P=i)),n}function $c(){this.__u=0,this.o=null,this.__b=null}function Um(n){var r=n.__.__c;return r&&r.__a&&r.__a(n)}function us(){this.i=null,this.l=null}Ee.unmount=function(n){var r=n.__c;r&&r.__R&&r.__R(),r&&32&n.__u&&(n.type=null),uh&&uh(n)},($c.prototype=new gn).__c=function(n,r){var i=r.__c,a=this;a.o==null&&(a.o=[]),a.o.push(i);var l=Um(a.__v),c=!1,p=function(){c||(c=!0,i.__R=null,l?l(h):h())};i.__R=p;var h=function(){if(!--a.__u){if(a.state.__a){var m=a.state.__a;a.__v.__k[0]=Om(m,m.__c.__P,m.__c.__O)}var g;for(a.setState({__a:a.__b=null});g=a.o.pop();)g.forceUpdate()}};a.__u++||32&r.__u||a.setState({__a:a.__b=a.__v.__k[0]}),n.then(p,p)},$c.prototype.componentWillUnmount=function(){this.o=[]},$c.prototype.render=function(n,r){if(this.__b){if(this.__v.__k){var i=document.createElement("div"),a=this.__v.__k[0].__c;this.__v.__k[0]=Dm(this.__b,i,a.__O=a.__P)}this.__b=null}var l=r.__a&&Jr(Re,null,n.fallback);return l&&(l.__u&=-33),[Jr(Re,null,r.__a?null:n.children),l]};var dh=function(n,r,i){if(++i[1]===i[0]&&n.l.delete(r),n.props.revealOrder&&(n.props.revealOrder[0]!=="t"||!n.l.size))for(i=n.i;i;){for(;i.length>3;)i.pop()();if(i[1]<i[0])break;n.i=i=i[2]}};function xw(n){return this.getChildContext=function(){return n.context},n.children}function yw(n){var r=this,i=n.h;if(r.componentWillUnmount=function(){Ri(null,r.v),r.v=null,r.h=null},r.h&&r.h!==i&&r.componentWillUnmount(),!r.v){for(var a=r.__v;a!==null&&!a.__m&&a.__!==null;)a=a.__;r.h=i,r.v={nodeType:1,parentNode:i,childNodes:[],__k:{__m:a.__m},contains:function(){return!0},insertBefore:function(l,c){this.childNodes.push(l),r.h.insertBefore(l,c)},removeChild:function(l){this.childNodes.splice(this.childNodes.indexOf(l)>>>1,1),r.h.removeChild(l)}}}Ri(Jr(xw,{context:r.context},n.__v),r.v)}function bw(n,r){var i=Jr(yw,{__v:n,h:r});return i.containerInfo=r,i}(us.prototype=new gn).__a=function(n){var r=this,i=Um(r.__v),a=r.l.get(n);return a[0]++,function(l){var c=function(){r.props.revealOrder?(a.push(l),dh(r,n,a)):l()};i?i(c):c()}},us.prototype.render=function(n){this.i=null,this.l=new Map;var r=Es(n.children);n.revealOrder&&n.revealOrder[0]==="b"&&r.reverse();for(var i=r.length;i--;)this.l.set(r[i],this.i=[1,0,this.i]);return n.children},us.prototype.componentDidUpdate=us.prototype.componentDidMount=function(){var n=this;this.l.forEach(function(r,i){dh(n,i,r)})};var kw=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.element")||60103,_w=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,Sw=/^on(Ani|Tra|Tou|BeforeInp|Compo)/,Cw=/[A-Z0-9]/g,Nw=typeof document<"u",Ew=function(n){return(typeof Symbol<"u"&&typeof Symbol()=="symbol"?/fil|che|rad/:/fil|che|ra/).test(n)};gn.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(n){Object.defineProperty(gn.prototype,n,{configurable:!0,get:function(){return this["UNSAFE_"+n]},set:function(r){Object.defineProperty(this,n,{configurable:!0,writable:!0,value:r})}})});var ph=Ee.event;function Tw(){}function Mw(){return this.cancelBubble}function zw(){return this.defaultPrevented}Ee.event=function(n){return ph&&(n=ph(n)),n.persist=Tw,n.isPropagationStopped=Mw,n.isDefaultPrevented=zw,n.nativeEvent=n};var Iw={enumerable:!1,configurable:!0,get:function(){return this.class}},fh=Ee.vnode;Ee.vnode=function(n){typeof n.type=="string"&&(function(r){var i=r.props,a=r.type,l={},c=a.indexOf("-")===-1;for(var p in i){var h=i[p];if(!(p==="value"&&"defaultValue"in i&&h==null||Nw&&p==="children"&&a==="noscript"||p==="class"||p==="className")){var m=p.toLowerCase();p==="defaultValue"&&"value"in i&&i.value==null?p="value":p==="download"&&h===!0?h="":m==="translate"&&h==="no"?h=!1:m[0]==="o"&&m[1]==="n"?m==="ondoubleclick"?p="ondblclick":m!=="onchange"||a!=="input"&&a!=="textarea"||Ew(i.type)?m==="onfocus"?p="onfocusin":m==="onblur"?p="onfocusout":Sw.test(p)&&(p=m):m=p="oninput":c&&_w.test(p)?p=p.replace(Cw,"-$&").toLowerCase():h===null&&(h=void 0),m==="oninput"&&l[p=m]&&(p="oninputCapture"),l[p]=h}}a=="select"&&l.multiple&&Array.isArray(l.value)&&(l.value=Es(i.children).forEach(function(g){g.props.selected=l.value.indexOf(g.props.value)!=-1})),a=="select"&&l.defaultValue!=null&&(l.value=Es(i.children).forEach(function(g){g.props.selected=l.multiple?l.defaultValue.indexOf(g.props.value)!=-1:l.defaultValue==g.props.value})),i.class&&!i.className?(l.class=i.class,Object.defineProperty(l,"className",Iw)):(i.className&&!i.class||i.class&&i.className)&&(l.class=l.className=i.className),r.props=l})(n),n.$$typeof=kw,fh&&fh(n)};var hh=Ee.__r;Ee.__r=function(n){hh&&hh(n),n.__c};var mh=Ee.diffed;Ee.diffed=function(n){mh&&mh(n);var r=n.props,i=n.__e;i!=null&&n.type==="textarea"&&"value"in r&&r.value!==i.value&&(i.value=r.value==null?"":r.value)};var Aw=0;function d(n,r,i,a,l,c){r||(r={});var p,h,m=r;if("ref"in m)for(h in m={},r)h=="ref"?p=r[h]:m[h]=r[h];var g={type:n,props:m,key:i,ref:p,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:--Aw,__i:-1,__u:0,__source:l,__self:c};if(typeof n=="function"&&(p=n.defaultProps))for(h in p)m[h]===void 0&&(m[h]=p[h]);return Ee.vnode&&Ee.vnode(g),g}var Pe=Au();Array.prototype.toSorted||Object.defineProperty(Array.prototype,"toSorted",{value:function(n){return[...this].sort(n)},writable:!0,configurable:!0});function Pw(n,r){return r-n}function Rw(n){let r=n[0].name;const i=n.length,a=Math.min(4,i);for(let l=1;l<a;l++)r+=`, ${n[l].name}`;return r}function jw(n){let r=n[0].time;for(let i=1,a=n.length;i<a;i++)r+=n[i].time;return r}function Fw(n){for(let r=0,i=n.length;r<i;r++)if(n[r].forget)return!0;return!1}var $w=n=>{let r="";const i=new Map;for(const p of n){const{forget:h,time:m,aggregatedCount:g,name:x}=p;i.has(g)||i.set(g,[]);const w=i.get(g);w&&w.push({name:x,forget:h,time:m??0})}const a=Array.from(i.keys()).sort(Pw),l=[];let c=0;for(const p of a){const h=i.get(p);if(!h)continue;let m=Rw(h);const g=jw(h),x=Fw(h);c+=g,h.length>4&&(m+="…"),p>1&&(m+=` × ${p}`),x&&(m=`✨${m}`),l.push(m)}return r=l.join(", "),r.length?(r.length>40&&(r=`${r.slice(0,40)}…`),c>=.01&&(r+=` (${Number(c.toFixed(2))}ms)`),r):null};function zr(n,r){return n===r||n!==n&&r!==r}var Xu=n=>{const r=n.createOscillator(),i=n.createGain();r.connect(i),i.connect(n.destination);const a={type:"sine",freq:[392,600],duration:.3,gain:.12},l=a.freq,c=a.duration/l.length;l.forEach((p,h)=>{r.frequency.setValueAtTime(p,n.currentTime+h*c)}),r.type=a.type,i.gain.setValueAtTime(a.gain,n.currentTime),i.gain.setTargetAtTime(0,n.currentTime+a.duration*.7,.05),r.start(),r.stop(n.currentTime+a.duration)},Lw=n=>new Promise(r=>{const i=new Map,a=new IntersectionObserver(l=>{for(const c of l){const p=c.target,h=c.boundingClientRect;i.set(p,h)}a.disconnect(),r(i)});for(const l of n)a.observe(l)}),Dw={mount:1,update:2,unmount:4},ct=Bu(({size:n=15,name:r,fill:i="currentColor",stroke:a="currentColor",className:l,externalURL:c="",style:p},h)=>{const m=Array.isArray(n)?n[0]:n,g=Array.isArray(n)?n[1]||n[0]:n,x=`${c}#${r}`;return d("svg",{ref:h,width:`${m}px`,height:`${g}px`,fill:i,stroke:a,className:l,style:{...p,minWidth:`${m}px`,maxWidth:`${m}px`,minHeight:`${g}px`,maxHeight:`${g}px`},children:[d("title",{children:r}),d("use",{href:x})]})}),Ne=24,wt={width:550,height:350,initialHeight:400},En=240,nr="react-scan-widget-settings-v2",ks="react-scan-widget-collapsed-v1",Eo="react-scan-widget-last-view-v1",Un=typeof window<"u";function Hm(n){var r,i,a="";if(typeof n=="string"||typeof n=="number")a+=n;else if(typeof n=="object")if(Array.isArray(n)){var l=n.length;for(r=0;r<l;r++)n[r]&&(i=Hm(n[r]))&&(a&&(a+=" "),a+=i)}else for(i in n)n[i]&&(a&&(a+=" "),a+=i);return a}function Ow(){for(var n,r,i=0,a="",l=arguments.length;i<l;i++)(n=arguments[i])&&(r=Hm(n))&&(a&&(a+=" "),a+=r);return a}var Gu="-",Uw=n=>{const r=Ww(n),{conflictingClassGroups:i,conflictingClassGroupModifiers:a}=n;return{getClassGroupId:p=>{const h=p.split(Gu);return h[0]===""&&h.length!==1&&h.shift(),Wm(h,r)||Hw(p)},getConflictingClassGroupIds:(p,h)=>{const m=i[p]||[];return h&&a[p]?[...m,...a[p]]:m}}},Wm=(n,r)=>{if(n.length===0)return r.classGroupId;const i=n[0],a=r.nextPart.get(i),l=a?Wm(n.slice(1),a):void 0;if(l)return l;if(r.validators.length===0)return;const c=n.join(Gu);return r.validators.find(({validator:p})=>p(c))?.classGroupId},gh=/^\[(.+)\]$/,Hw=n=>{if(gh.test(n)){const r=gh.exec(n)[1],i=r?.substring(0,r.indexOf(":"));if(i)return"arbitrary.."+i}},Ww=n=>{const{theme:r,prefix:i}=n,a={nextPart:new Map,validators:[]};return Yw(Object.entries(n.classGroups),i).forEach(([c,p])=>{wu(p,a,c,r)}),a},wu=(n,r,i,a)=>{n.forEach(l=>{if(typeof l=="string"){const c=l===""?r:vh(r,l);c.classGroupId=i;return}if(typeof l=="function"){if(Vw(l)){wu(l(a),r,i,a);return}r.validators.push({validator:l,classGroupId:i});return}Object.entries(l).forEach(([c,p])=>{wu(p,vh(r,c),i,a)})})},vh=(n,r)=>{let i=n;return r.split(Gu).forEach(a=>{i.nextPart.has(a)||i.nextPart.set(a,{nextPart:new Map,validators:[]}),i=i.nextPart.get(a)}),i},Vw=n=>n.isThemeGetter,Yw=(n,r)=>r?n.map(([i,a])=>{const l=a.map(c=>typeof c=="string"?r+c:typeof c=="object"?Object.fromEntries(Object.entries(c).map(([p,h])=>[r+p,h])):c);return[i,l]}):n,Bw=n=>{if(n<1)return{get:()=>{},set:()=>{}};let r=0,i=new Map,a=new Map;const l=(c,p)=>{i.set(c,p),r++,r>n&&(r=0,a=i,i=new Map)};return{get(c){let p=i.get(c);if(p!==void 0)return p;if((p=a.get(c))!==void 0)return l(c,p),p},set(c,p){i.has(c)?i.set(c,p):l(c,p)}}},Vm="!",Xw=n=>{const{separator:r,experimentalParseClassName:i}=n,a=r.length===1,l=r[0],c=r.length,p=h=>{const m=[];let g=0,x=0,w;for(let I=0;I<h.length;I++){let k=h[I];if(g===0){if(k===l&&(a||h.slice(I,I+c)===r)){m.push(h.slice(x,I)),x=I+c;continue}if(k==="/"){w=I;continue}}k==="["?g++:k==="]"&&g--}const y=m.length===0?h:h.substring(x),b=y.startsWith(Vm),N=b?y.substring(1):y,E=w&&w>x?w-x:void 0;return{modifiers:m,hasImportantModifier:b,baseClassName:N,maybePostfixModifierPosition:E}};return i?h=>i({className:h,parseClassName:p}):p},Gw=n=>{if(n.length<=1)return n;const r=[];let i=[];return n.forEach(a=>{a[0]==="["?(r.push(...i.sort(),a),i=[]):i.push(a)}),r.push(...i.sort()),r},Qw=n=>({cache:Bw(n.cacheSize),parseClassName:Xw(n),...Uw(n)}),qw=/\s+/,Kw=(n,r)=>{const{parseClassName:i,getClassGroupId:a,getConflictingClassGroupIds:l}=r,c=[],p=n.trim().split(qw);let h="";for(let m=p.length-1;m>=0;m-=1){const g=p[m],{modifiers:x,hasImportantModifier:w,baseClassName:y,maybePostfixModifierPosition:b}=i(g);let N=!!b,E=a(N?y.substring(0,b):y);if(!E){if(!N){h=g+(h.length>0?" "+h:h);continue}if(E=a(y),!E){h=g+(h.length>0?" "+h:h);continue}N=!1}const I=Gw(x).join(":"),k=w?I+Vm:I,z=k+E;if(c.includes(z))continue;c.push(z);const H=l(E,N);for(let W=0;W<H.length;++W){const V=H[W];c.push(k+V)}h=g+(h.length>0?" "+h:h)}return h};function Jw(){let n=0,r,i,a="";for(;n<arguments.length;)(r=arguments[n++])&&(i=Ym(r))&&(a&&(a+=" "),a+=i);return a}var Ym=n=>{if(typeof n=="string")return n;let r,i="";for(let a=0;a<n.length;a++)n[a]&&(r=Ym(n[a]))&&(i&&(i+=" "),i+=r);return i};function Zw(n,...r){let i,a,l,c=p;function p(m){const g=r.reduce((x,w)=>w(x),n());return i=Qw(g),a=i.cache.get,l=i.cache.set,c=h,h(m)}function h(m){const g=a(m);if(g)return g;const x=Kw(m,i);return l(m,x),x}return function(){return c(Jw.apply(null,arguments))}}var tt=n=>{const r=i=>i[n]||[];return r.isThemeGetter=!0,r},Bm=/^\[(?:([a-z-]+):)?(.+)\]$/i,ex=/^\d+\/\d+$/,tx=new Set(["px","full","screen"]),nx=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,rx=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,ox=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,ix=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,ax=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,Zn=n=>Ro(n)||tx.has(n)||ex.test(n),Sr=n=>Wo(n,"length",hx),Ro=n=>!!n&&!Number.isNaN(Number(n)),Lc=n=>Wo(n,"number",Ro),Ti=n=>!!n&&Number.isInteger(Number(n)),sx=n=>n.endsWith("%")&&Ro(n.slice(0,-1)),Me=n=>Bm.test(n),Cr=n=>nx.test(n),lx=new Set(["length","size","percentage"]),cx=n=>Wo(n,lx,Xm),ux=n=>Wo(n,"position",Xm),dx=new Set(["image","url"]),px=n=>Wo(n,dx,gx),fx=n=>Wo(n,"",mx),Mi=()=>!0,Wo=(n,r,i)=>{const a=Bm.exec(n);return a?a[1]?typeof r=="string"?a[1]===r:r.has(a[1]):i(a[2]):!1},hx=n=>rx.test(n)&&!ox.test(n),Xm=()=>!1,mx=n=>ix.test(n),gx=n=>ax.test(n),vx=()=>{const n=tt("colors"),r=tt("spacing"),i=tt("blur"),a=tt("brightness"),l=tt("borderColor"),c=tt("borderRadius"),p=tt("borderSpacing"),h=tt("borderWidth"),m=tt("contrast"),g=tt("grayscale"),x=tt("hueRotate"),w=tt("invert"),y=tt("gap"),b=tt("gradientColorStops"),N=tt("gradientColorStopPositions"),E=tt("inset"),I=tt("margin"),k=tt("opacity"),z=tt("padding"),H=tt("saturate"),W=tt("scale"),V=tt("sepia"),K=tt("skew"),ee=tt("space"),ge=tt("translate"),ae=()=>["auto","contain","none"],ve=()=>["auto","hidden","clip","visible","scroll"],me=()=>["auto",Me,r],re=()=>[Me,r],Te=()=>["",Zn,Sr],Ce=()=>["auto",Ro,Me],ke=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],C=()=>["solid","dashed","dotted","double","none"],F=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],M=()=>["start","end","center","between","around","evenly","stretch"],U=()=>["","0",Me],O=()=>["auto","avoid","all","avoid-page","page","left","right","column"],S=()=>[Ro,Me];return{cacheSize:500,separator:":",theme:{colors:[Mi],spacing:[Zn,Sr],blur:["none","",Cr,Me],brightness:S(),borderColor:[n],borderRadius:["none","","full",Cr,Me],borderSpacing:re(),borderWidth:Te(),contrast:S(),grayscale:U(),hueRotate:S(),invert:U(),gap:re(),gradientColorStops:[n],gradientColorStopPositions:[sx,Sr],inset:me(),margin:me(),opacity:S(),padding:re(),saturate:S(),scale:S(),sepia:U(),skew:S(),space:re(),translate:re()},classGroups:{aspect:[{aspect:["auto","square","video",Me]}],container:["container"],columns:[{columns:[Cr]}],"break-after":[{"break-after":O()}],"break-before":[{"break-before":O()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...ke(),Me]}],overflow:[{overflow:ve()}],"overflow-x":[{"overflow-x":ve()}],"overflow-y":[{"overflow-y":ve()}],overscroll:[{overscroll:ae()}],"overscroll-x":[{"overscroll-x":ae()}],"overscroll-y":[{"overscroll-y":ae()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[E]}],"inset-x":[{"inset-x":[E]}],"inset-y":[{"inset-y":[E]}],start:[{start:[E]}],end:[{end:[E]}],top:[{top:[E]}],right:[{right:[E]}],bottom:[{bottom:[E]}],left:[{left:[E]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",Ti,Me]}],basis:[{basis:me()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",Me]}],grow:[{grow:U()}],shrink:[{shrink:U()}],order:[{order:["first","last","none",Ti,Me]}],"grid-cols":[{"grid-cols":[Mi]}],"col-start-end":[{col:["auto",{span:["full",Ti,Me]},Me]}],"col-start":[{"col-start":Ce()}],"col-end":[{"col-end":Ce()}],"grid-rows":[{"grid-rows":[Mi]}],"row-start-end":[{row:["auto",{span:[Ti,Me]},Me]}],"row-start":[{"row-start":Ce()}],"row-end":[{"row-end":Ce()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",Me]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",Me]}],gap:[{gap:[y]}],"gap-x":[{"gap-x":[y]}],"gap-y":[{"gap-y":[y]}],"justify-content":[{justify:["normal",...M()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...M(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...M(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[z]}],px:[{px:[z]}],py:[{py:[z]}],ps:[{ps:[z]}],pe:[{pe:[z]}],pt:[{pt:[z]}],pr:[{pr:[z]}],pb:[{pb:[z]}],pl:[{pl:[z]}],m:[{m:[I]}],mx:[{mx:[I]}],my:[{my:[I]}],ms:[{ms:[I]}],me:[{me:[I]}],mt:[{mt:[I]}],mr:[{mr:[I]}],mb:[{mb:[I]}],ml:[{ml:[I]}],"space-x":[{"space-x":[ee]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[ee]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",Me,r]}],"min-w":[{"min-w":[Me,r,"min","max","fit"]}],"max-w":[{"max-w":[Me,r,"none","full","min","max","fit","prose",{screen:[Cr]},Cr]}],h:[{h:[Me,r,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[Me,r,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[Me,r,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[Me,r,"auto","min","max","fit"]}],"font-size":[{text:["base",Cr,Sr]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",Lc]}],"font-family":[{font:[Mi]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",Me]}],"line-clamp":[{"line-clamp":["none",Ro,Lc]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",Zn,Me]}],"list-image":[{"list-image":["none",Me]}],"list-style-type":[{list:["none","disc","decimal",Me]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[n]}],"placeholder-opacity":[{"placeholder-opacity":[k]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[n]}],"text-opacity":[{"text-opacity":[k]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...C(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",Zn,Sr]}],"underline-offset":[{"underline-offset":["auto",Zn,Me]}],"text-decoration-color":[{decoration:[n]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:re()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",Me]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",Me]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[k]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...ke(),ux]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",cx]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},px]}],"bg-color":[{bg:[n]}],"gradient-from-pos":[{from:[N]}],"gradient-via-pos":[{via:[N]}],"gradient-to-pos":[{to:[N]}],"gradient-from":[{from:[b]}],"gradient-via":[{via:[b]}],"gradient-to":[{to:[b]}],rounded:[{rounded:[c]}],"rounded-s":[{"rounded-s":[c]}],"rounded-e":[{"rounded-e":[c]}],"rounded-t":[{"rounded-t":[c]}],"rounded-r":[{"rounded-r":[c]}],"rounded-b":[{"rounded-b":[c]}],"rounded-l":[{"rounded-l":[c]}],"rounded-ss":[{"rounded-ss":[c]}],"rounded-se":[{"rounded-se":[c]}],"rounded-ee":[{"rounded-ee":[c]}],"rounded-es":[{"rounded-es":[c]}],"rounded-tl":[{"rounded-tl":[c]}],"rounded-tr":[{"rounded-tr":[c]}],"rounded-br":[{"rounded-br":[c]}],"rounded-bl":[{"rounded-bl":[c]}],"border-w":[{border:[h]}],"border-w-x":[{"border-x":[h]}],"border-w-y":[{"border-y":[h]}],"border-w-s":[{"border-s":[h]}],"border-w-e":[{"border-e":[h]}],"border-w-t":[{"border-t":[h]}],"border-w-r":[{"border-r":[h]}],"border-w-b":[{"border-b":[h]}],"border-w-l":[{"border-l":[h]}],"border-opacity":[{"border-opacity":[k]}],"border-style":[{border:[...C(),"hidden"]}],"divide-x":[{"divide-x":[h]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[h]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[k]}],"divide-style":[{divide:C()}],"border-color":[{border:[l]}],"border-color-x":[{"border-x":[l]}],"border-color-y":[{"border-y":[l]}],"border-color-s":[{"border-s":[l]}],"border-color-e":[{"border-e":[l]}],"border-color-t":[{"border-t":[l]}],"border-color-r":[{"border-r":[l]}],"border-color-b":[{"border-b":[l]}],"border-color-l":[{"border-l":[l]}],"divide-color":[{divide:[l]}],"outline-style":[{outline:["",...C()]}],"outline-offset":[{"outline-offset":[Zn,Me]}],"outline-w":[{outline:[Zn,Sr]}],"outline-color":[{outline:[n]}],"ring-w":[{ring:Te()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[n]}],"ring-opacity":[{"ring-opacity":[k]}],"ring-offset-w":[{"ring-offset":[Zn,Sr]}],"ring-offset-color":[{"ring-offset":[n]}],shadow:[{shadow:["","inner","none",Cr,fx]}],"shadow-color":[{shadow:[Mi]}],opacity:[{opacity:[k]}],"mix-blend":[{"mix-blend":[...F(),"plus-lighter","plus-darker"]}],"bg-blend":[{"bg-blend":F()}],filter:[{filter:["","none"]}],blur:[{blur:[i]}],brightness:[{brightness:[a]}],contrast:[{contrast:[m]}],"drop-shadow":[{"drop-shadow":["","none",Cr,Me]}],grayscale:[{grayscale:[g]}],"hue-rotate":[{"hue-rotate":[x]}],invert:[{invert:[w]}],saturate:[{saturate:[H]}],sepia:[{sepia:[V]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[i]}],"backdrop-brightness":[{"backdrop-brightness":[a]}],"backdrop-contrast":[{"backdrop-contrast":[m]}],"backdrop-grayscale":[{"backdrop-grayscale":[g]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[x]}],"backdrop-invert":[{"backdrop-invert":[w]}],"backdrop-opacity":[{"backdrop-opacity":[k]}],"backdrop-saturate":[{"backdrop-saturate":[H]}],"backdrop-sepia":[{"backdrop-sepia":[V]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[p]}],"border-spacing-x":[{"border-spacing-x":[p]}],"border-spacing-y":[{"border-spacing-y":[p]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",Me]}],duration:[{duration:S()}],ease:[{ease:["linear","in","out","in-out",Me]}],delay:[{delay:S()}],animate:[{animate:["none","spin","ping","pulse","bounce",Me]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[W]}],"scale-x":[{"scale-x":[W]}],"scale-y":[{"scale-y":[W]}],rotate:[{rotate:[Ti,Me]}],"translate-x":[{"translate-x":[ge]}],"translate-y":[{"translate-y":[ge]}],"skew-x":[{"skew-x":[K]}],"skew-y":[{"skew-y":[K]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",Me]}],accent:[{accent:["auto",n]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",Me]}],"caret-color":[{caret:[n]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":re()}],"scroll-mx":[{"scroll-mx":re()}],"scroll-my":[{"scroll-my":re()}],"scroll-ms":[{"scroll-ms":re()}],"scroll-me":[{"scroll-me":re()}],"scroll-mt":[{"scroll-mt":re()}],"scroll-mr":[{"scroll-mr":re()}],"scroll-mb":[{"scroll-mb":re()}],"scroll-ml":[{"scroll-ml":re()}],"scroll-p":[{"scroll-p":re()}],"scroll-px":[{"scroll-px":re()}],"scroll-py":[{"scroll-py":re()}],"scroll-ps":[{"scroll-ps":re()}],"scroll-pe":[{"scroll-pe":re()}],"scroll-pt":[{"scroll-pt":re()}],"scroll-pr":[{"scroll-pr":re()}],"scroll-pb":[{"scroll-pb":re()}],"scroll-pl":[{"scroll-pl":re()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",Me]}],fill:[{fill:[n,"none"]}],"stroke-w":[{stroke:[Zn,Sr,Lc]}],stroke:[{stroke:[n,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}},wx=Zw(vx),P=(...n)=>wx(Ow(n));typeof navigator<"u"&&navigator.userAgent.includes("Firefox");var Gm=(n,r)=>{let i=0;return a=>{const l=Date.now();if(l-i>=r)return i=l,n(a)}},rr=n=>{if(!Un)return null;try{const r=localStorage.getItem(n);return r?JSON.parse(r):null}catch{return null}},Zt=(n,r)=>{if(Un)try{window.localStorage.setItem(n,JSON.stringify(r))}catch{}},wh=n=>{if(Un)try{window.localStorage.removeItem(n)}catch{}},xx=24,yx=12,Vi=n=>{if(!n)return{name:"Unknown",wrappers:[],wrapperTypes:[]};const{tag:r,type:i,elementType:a}=n;let l=Mt(i);const c=[],p=[];if(Di(n)||r===Qi||r===Gi||i?.$$typeof===Symbol.for("react.memo")||a?.$$typeof===Symbol.for("react.memo")){const h=Di(n);p.push({type:"memo",title:h?"This component has been auto-memoized by the React Compiler.":"Memoized component that skips re-renders if props are the same",compiler:h})}if(r===xx&&p.push({type:"lazy",title:"Lazily loaded component that supports code splitting"}),r===Hs&&p.push({type:"suspense",title:"Component that can suspend while content is loading"}),r===yx&&p.push({type:"profiler",title:"Component that measures rendering performance"}),typeof l=="string"){const h=/^(\w+)\((.*)\)$/;let m=l;for(;h.test(m);){const g=m.match(h);if(g?.[1]&&g?.[2])c.unshift(g[1]),m=g[2];else break}l=m}return{name:l||"Unknown",wrappers:c,wrapperTypes:p}},Xs=xt(!1),xu=xt(null),Ln={corner:"bottom-right",dimensions:{isFullWidth:!1,isFullHeight:!1,width:wt.width,height:wt.height,position:{x:Ne,y:Ne}},lastDimensions:{isFullWidth:!1,isFullHeight:!1,width:wt.width,height:wt.height,position:{x:Ne,y:Ne}},componentsTree:{width:En}},bx=()=>{const n=rr(nr);return n?{corner:n.corner??Ln.corner,dimensions:n.dimensions??Ln.dimensions,lastDimensions:n.lastDimensions??n.dimensions??Ln.lastDimensions,componentsTree:n.componentsTree??Ln.componentsTree}:(Zt(nr,{corner:Ln.corner,dimensions:Ln.dimensions,lastDimensions:Ln.lastDimensions,componentsTree:Ln.componentsTree}),Ln)},de=xt(bx()),Dc=()=>{if(!Un)return;const{dimensions:n}=de.value,{width:r,height:i,position:a}=n;de.value={...de.value,dimensions:{isFullWidth:r>=window.innerWidth-Ne*2,isFullHeight:i>=window.innerHeight-Ne*2,width:r,height:i,position:a}}},Ke=xt({view:"none"}),kx=rr(ks),on=xt(kx??null);function _x(){return!1}function Qu(n){function r(i){return this.shouldComponentUpdate=_x,Jr(n,i)}return r.displayName=`Memo(${n.displayName||n.name})`,r.prototype.isReactComponent=!0,r._forwarded=!0,r}var Sx=n=>{const{count:r,getScrollElement:i,estimateSize:a,overscan:l=5}=n,[c,p]=Ie(0),[h,m]=Ie(0),g=we(),x=we(null),w=we(null),y=a(),b=ft(k=>{if(!x.current)return;const z=k?.[0]?.contentRect.height??x.current.getBoundingClientRect().height;m(z)},[]),N=ft(()=>{w.current!==null&&cancelAnimationFrame(w.current),w.current=requestAnimationFrame(()=>{b(),w.current=null})},[b]);ze(()=>{const k=i();if(!k)return;x.current=k;const z=()=>{x.current&&p(x.current.scrollTop)};b(),g.current||(g.current=new ResizeObserver(()=>{N()})),g.current.observe(k),k.addEventListener("scroll",z,{passive:!0});const H=new MutationObserver(N);return H.observe(k,{attributes:!0,childList:!0,subtree:!0}),()=>{k.removeEventListener("scroll",z),g.current&&g.current.disconnect(),H.disconnect(),w.current!==null&&cancelAnimationFrame(w.current)}},[i,b,N]);const E=Mn(()=>{const k=Math.floor(c/y),z=Math.ceil(h/y);return{start:Math.max(0,k-l),end:Math.min(r,k+z+l)}},[c,y,h,r,l]);return{virtualItems:Mn(()=>{const k=[];for(let z=E.start;z<E.end;z++)k.push({key:z,index:z,start:z*y});return k},[E,y]),totalSize:r*y,scrollTop:c,containerHeight:h}};rr("react-scann-pinned");var Cx=n=>{const r=[];let i=n;for(;i;){const a=i.elementType,l=typeof a=="function"?a.displayName||a.name:typeof a=="string"?a:"Unknown",c=i.index!==void 0?`[${i.index}]`:"";r.unshift(`${l}${c}`),i=i.return??null}return r.join("::")},Vr=new WeakMap,Nx=(n,r)=>{const i=r.bind(null,n);return document.addEventListener("scroll",i,{passive:!0,capture:!0}),()=>{document.removeEventListener("scroll",i,{capture:!0})}},Ex={activeFlashes:new Map,create(n){const r=n.querySelector(".react-scan-flash-overlay"),i=r instanceof HTMLElement?r:(()=>{const l=document.createElement("div");l.className="react-scan-flash-overlay",n.appendChild(l);const c=Nx(n,()=>{n.querySelector(".react-scan-flash-overlay")&&this.create(n)});return this.activeFlashes.set(n,{element:n,overlay:l,scrollCleanup:c}),l})(),a=Vr.get(i);a&&(clearTimeout(a),Vr.delete(i)),requestAnimationFrame(()=>{i.style.transition="none",i.style.opacity="0.9";const l=setTimeout(()=>{i.style.transition="opacity 150ms ease-out",i.style.opacity="0";const c=setTimeout(()=>{i.parentNode&&i.parentNode.removeChild(i);const p=this.activeFlashes.get(n);p?.scrollCleanup&&p.scrollCleanup(),this.activeFlashes.delete(n),Vr.delete(i)},150);Vr.set(i,c)},300);Vr.set(i,l)})},cleanup(n){const r=this.activeFlashes.get(n);if(r){const i=Vr.get(r.overlay);i&&(clearTimeout(i),Vr.delete(r.overlay)),r.overlay.parentNode&&r.overlay.parentNode.removeChild(r.overlay),r.scrollCleanup&&r.scrollCleanup(),this.activeFlashes.delete(n)}},cleanupAll(){for(const[,n]of this.activeFlashes)this.cleanup(n.element)}},xh=1e3,Qm={updates:[],currentFiber:null,totalUpdates:0,windowOffset:0,currentIndex:0,isViewingHistory:!1,latestFiber:null,isVisible:!1,playbackSpeed:1},Vt=xt(Qm),qu=xt(0),Qr=[],Yr=null,Tx=()=>{if(Qr.length===0)return;const n=[...Qr],{updates:r,totalUpdates:i,currentIndex:a,isViewingHistory:l}=Vt.value,c=[...r];let p=i;for(const{update:x}of n)c.length>=xh&&c.shift(),c.push(x),p++;const h=Math.max(0,p-xh);let m;l?a===i-1?m=c.length-1:a===0?m=0:h===0?m=a:m=a-1:m=c.length-1;const g=n[n.length-1];Vt.value={...Vt.value,latestFiber:g.fiber,updates:c,totalUpdates:p,windowOffset:h,currentIndex:m,isViewingHistory:l},Qr=Qr.slice(n.length)},qm={showTimeline:()=>{Vt.value={...Vt.value,isVisible:!0}},hideTimeline:()=>{Vt.value={...Vt.value,isVisible:!1,currentIndex:Vt.value.updates.length-1}},updateFrame:(n,r)=>{Vt.value={...Vt.value,currentIndex:n,isViewingHistory:r}},updatePlaybackSpeed:n=>{Vt.value={...Vt.value,playbackSpeed:n}},addUpdate:(n,r)=>{if(Qr.push({update:n,fiber:r}),!Yr){const i=()=>{Tx(),Yr=null,Qr.length>0&&(Yr=setTimeout(i,96))};Yr=setTimeout(i,96)}},reset:()=>{Yr&&(clearTimeout(Yr),Yr=null),Qr=[],Vt.value=Qm}},Dt=xt({query:"",matches:[],currentMatchIndex:-1}),Oc=xt(!1),Km=(n,r=0,i=null)=>n.reduce((a,l,c)=>{const p=l.element?Cx(l.fiber):`${i}-${c}`,h=l.fiber?.type?cg(l.fiber):void 0,m={...l,depth:r,nodeId:p,parentId:i,fiber:l.fiber,renderData:h};return a.push(m),l.children?.length&&a.push(...Km(l.children,r+1,p)),a},[]),Mx=n=>n.reduce((r,i)=>Math.max(r,i.depth),0),zx=(n,r)=>{if(r<=0)return 24;const c=Math.max(0,n-En);if(c<24)return 0;const h=Math.min(c*.3,r*24)/r;return Math.max(0,Math.min(24,h))},Ix=["memo","forwardRef","lazy","suspense"],Jm=n=>{const r=n.match(/\[(.*?)\]/);if(!r)return null;const i=[],a=r[1].split(",");for(const l of a){const c=l.trim().toLowerCase();c&&i.push(c)}return i},Ax=n=>{if(n.length===0)return!1;for(const r of n){let i=!1;for(const a of Ix)if(a.toLowerCase().includes(r)){i=!0;break}if(!i)return!1}return!0},Zm=(n,r)=>{if(n.length===0)return!0;if(!r.length)return!1;for(const i of n){let a=!1;for(const l of r)if(l.type.toLowerCase().includes(i)){a=!0;break}if(!a)return!1}return!0},Px=(n,r)=>Mn(()=>{const{query:i,matches:a}=r,l=a.some(g=>g.nodeId===n.nodeId),c=Jm(i)||[],p=i?i.replace(/\[.*?\]/,"").trim():"";if(!i||!l)return{highlightedText:d("span",{className:"truncate",children:n.label}),typeHighlight:!1};let h=!0;if(c.length>0)if(!n.fiber)h=!1;else{const{wrapperTypes:g}=Vi(n.fiber);h=Zm(c,g)}let m=d("span",{className:"truncate",children:n.label});if(p)try{if(p.startsWith("/")&&p.endsWith("/")){const g=p.slice(1,-1),x=new RegExp(`(${g})`,"i"),w=n.label.split(x);m=d("span",{className:"tree-node-search-highlight",children:w.map((y,b)=>x.test(y)?d("span",{className:P("regex",{start:x.test(y)&&b===0,middle:x.test(y)&&b%2===1,end:x.test(y)&&b===w.length-1,"!ml-0":b===1}),children:y},`${n.nodeId}-${y}`):y)})}else{const g=n.label.toLowerCase(),x=p.toLowerCase(),w=g.indexOf(x);w>=0&&(m=d("span",{className:"tree-node-search-highlight",children:[n.label.slice(0,w),d("span",{className:"single",children:n.label.slice(w,w+p.length)}),n.label.slice(w+p.length)]}))}}catch{}return{highlightedText:m,typeHighlight:h&&c.length>0}},[n.label,n.nodeId,n.fiber,r]),yh=n=>n>0?n<.1-Number.EPSILON?"< 0.1":n<1e3?Number(n.toFixed(1)).toString():`${(n/1e3).toFixed(1)}k`:"0",Rx=({node:n,nodeIndex:r,hasChildren:i,isCollapsed:a,handleTreeNodeClick:l,handleTreeNodeToggle:c,searchValue:p})=>{const h=we(null),m=we(n.renderData?.renderCount??0),{highlightedText:g,typeHighlight:x}=Px(n,p);ze(()=>{const b=n.renderData?.renderCount,N=h.current;!N||!m.current||!b||m.current===b||(N.classList.remove("count-flash"),N.offsetWidth,N.classList.add("count-flash"),m.current=b)},[n.renderData?.renderCount]);const w=Mn(()=>{if(!n.renderData)return null;const{selfTime:b,totalTime:N,renderCount:E}=n.renderData;return E?d("span",{className:P("flex items-center gap-x-0.5 ml-1.5","text-[10px] text-neutral-400"),children:d("span",{ref:h,title:`Self time: ${yh(b)}ms
Total time: ${yh(N)}ms`,className:"count-badge",children:["×",E]})}):null},[n.renderData]),y=Mn(()=>{if(!n.fiber)return null;const{wrapperTypes:b}=Vi(n.fiber),N=b[0];return d("span",{className:P("flex items-center gap-x-1","text-[10px] text-neutral-400 tracking-wide","overflow-hidden"),children:[N&&d(Re,{children:[d("span",{title:N?.title,className:P("rounded py-[1px] px-1","bg-neutral-700 text-neutral-300","truncate",N.type==="memo"&&"bg-[#8e61e3] text-white",x&&"bg-yellow-300 text-black"),children:N.type},N.type),N.compiler&&d("span",{className:"text-yellow-300 ml-1",children:"✨"})]}),b.length>1&&`×${b.length}`,w]})},[n.fiber,x,w]);return d("button",{type:"button",title:n.title,"data-index":r,className:P("flex items-center gap-x-1","pl-1 pr-2","w-full h-7","text-left","rounded","cursor-pointer select-none"),onClick:l,children:[d("button",{type:"button","data-index":r,onClick:c,className:P("w-6 h-6 flex items-center justify-center","text-left"),children:i&&d(ct,{name:"icon-chevron-right",size:12,className:P("transition-transform",!a&&"rotate-90")})}),g,y]})},jx=()=>{const n=we(null),r=we(null),i=we(null),a=we(null),l=we(null),c=we(0),p=we(!1),h=we(!1),m=we(null),[g,x]=Ie([]),[w,y]=Ie(new Set),[b,N]=Ie(void 0),[E,I]=Ie(Dt.value),k=Mn(()=>{const C=[],F=g,M=new Map(F.map(U=>[U.nodeId,U]));for(const U of F){let O=!0,S=U;for(;S.parentId;){const R=M.get(S.parentId);if(!R)break;if(w.has(R.nodeId)){O=!1;break}S=R}O&&C.push(U)}return C},[w,g]),z=28,{virtualItems:H,totalSize:W}=Sx({count:k.length,getScrollElement:()=>n.current,estimateSize:()=>z,overscan:5}),V=ft(C=>{p.current=!0,a.current?.blur(),Oc.value=!0;const{parentCompositeFiber:F}=qr(C);if(!F)return;ce.inspectState.value={kind:"focused",focusedDomElement:C,fiber:F};const M=k.findIndex(U=>U.element===C);if(M!==-1){N(M);const U=M*z,O=n.current;if(O){const S=O.clientHeight,R=O.scrollTop;(U<R||U+z>R+S)&&O.scrollTo({top:Math.max(0,U-S/2),behavior:"instant"})}}},[k]),K=ft(C=>{const F=C.currentTarget,M=Number(F.dataset.index);if(Number.isNaN(M))return;const U=k[M].element;U&&V(U)},[k,V]),ee=ft(C=>{y(F=>{const M=new Set(F);return M.has(C)?M.delete(C):M.add(C),M})},[]),ge=ft(C=>{C.stopPropagation();const F=C.target,M=Number(F.dataset.index);if(Number.isNaN(M))return;const U=k[M].nodeId;ee(U)},[k,ee]),ae=ft(C=>{i.current?.classList.remove("!border-red-500");const F=[];if(!C){Dt.value={query:C,matches:F,currentMatchIndex:-1};return}if(C.includes("[")&&!C.includes("]")&&C.length>C.indexOf("[")+1){i.current?.classList.add("!border-red-500");return}const M=Jm(C)||[];if(C.includes("[")&&!Ax(M)){i.current?.classList.add("!border-red-500");return}const U=C.replace(/\[.*?\]/,"").trim(),O=/^\/.*\/$/.test(U);let S=R=>!1;if(U.startsWith("/")&&!O&&U.length>1){i.current?.classList.add("!border-red-500");return}if(O)try{const R=U.slice(1,-1),B=new RegExp(R,"i");S=Q=>B.test(Q)}catch{i.current?.classList.add("!border-red-500");return}else if(U){const R=U.toLowerCase();S=B=>B.toLowerCase().includes(R)}for(const R of g){let B=!0;if(U&&(B=S(R.label)),B&&M.length>0)if(!R.fiber)B=!1;else{const{wrapperTypes:Q}=Vi(R.fiber);B=Zm(M,Q)}B&&F.push(R)}if(Dt.value={query:C,matches:F,currentMatchIndex:F.length>0?0:-1},F.length>0){const R=F[0],B=k.findIndex(Q=>Q.nodeId===R.nodeId);if(B!==-1){const Q=B*z,Y=n.current;if(Y){const Z=Y.clientHeight;Y.scrollTo({top:Math.max(0,Q-Z/2),behavior:"instant"})}}}},[g,k]),ve=ft(C=>{const F=C.currentTarget;F&&ae(F.value)},[ae]),me=ft(C=>{const{matches:F,currentMatchIndex:M}=Dt.value;if(F.length===0)return;const U=C==="next"?(M+1)%F.length:(M-1+F.length)%F.length;Dt.value={...Dt.value,currentMatchIndex:U};const O=F[U],S=k.findIndex(R=>R.nodeId===O.nodeId);if(S!==-1){N(S);const R=S*z,B=n.current;if(B){const Q=B.clientHeight;B.scrollTo({top:Math.max(0,R-Q/2),behavior:"instant"})}}},[k]),re=ft(C=>{if(r.current&&(r.current.style.width=`${C}px`),n.current){n.current.style.width=`${C}px`;const F=zx(C,c.current);n.current.style.setProperty("--indentation-size",`${F}px`)}},[]),Te=ft(C=>{if(!m.current)return;const F=de.value.dimensions.width,M=Math.floor(F-En/2);m.current.classList.remove("cursor-ew-resize","cursor-w-resize","cursor-e-resize"),C<=En?m.current.classList.add("cursor-w-resize"):C>=M?m.current.classList.add("cursor-e-resize"):m.current.classList.add("cursor-ew-resize")},[]),Ce=ft(C=>{if(C.preventDefault(),C.stopPropagation(),!n.current)return;n.current.style.setProperty("pointer-events","none"),h.current=!0;const F=C.clientX,M=n.current.offsetWidth,U=de.value.dimensions.width,O=Math.floor(U-En/2);Te(M);const S=B=>{const Q=F-B.clientX,Y=M+Q;Te(Y);const Z=Math.min(O,Math.max(En,Y));re(Z)},R=()=>{n.current&&(n.current.style.removeProperty("pointer-events"),document.removeEventListener("pointermove",S),document.removeEventListener("pointerup",R),de.value={...de.value,componentsTree:{...de.value.componentsTree,width:n.current.offsetWidth}},Zt(nr,de.value),h.current=!1)};document.addEventListener("pointermove",S),document.addEventListener("pointerup",R)},[re,Te]);ze(()=>{if(!n.current)return;const C=n.current.offsetWidth;return Te(C),de.subscribe(()=>{n.current&&Te(n.current.offsetWidth)})},[Te]);const ke=ft(()=>{p.current=!1},[]);return ze(()=>{let C=!0;const F=R=>{const B=new Map,Q=[];for(const{element:Y,name:Z,fiber:oe}of R){if(!Y)continue;let ie=Z;const{name:le,wrappers:Se}=Vi(oe);le&&(Se.length>0?ie=`${Se.join("(")}(${le})${")".repeat(Se.length)}`:ie=le),B.set(Y,{label:le||Z,title:ie,children:[],element:Y,fiber:oe})}for(const{element:Y,depth:Z}of R){if(!Y)continue;const oe=B.get(Y);if(oe)if(Z===0)Q.push(oe);else{let ie=Y.parentElement;for(;ie;){const le=B.get(ie);if(le){le.children=le.children||[],le.children.push(oe);break}ie=ie.parentElement}}}return Q},M=()=>{const R=l.current;if(!R)return;const B=ty(),Q=F(B);if(Q.length>0){const Y=Km(Q),Z=Mx(Y);if(c.current=Z,re(de.value.componentsTree.width),x(Y),C){C=!1;const oe=Y.findIndex(ie=>ie.element===R);if(oe!==-1){const ie=oe*z,le=n.current;le&&setTimeout(()=>{le.scrollTo({top:ie,behavior:"instant"})},96)}}}},U=ce.inspectState.subscribe(R=>{if(R.kind==="focused"){if(Oc.value)return;ae(""),l.current=R.focusedDomElement,M()}});let O=0;const S=qu.subscribe(()=>{if(ce.inspectState.value.kind==="focused"){if(cancelAnimationFrame(O),h.current)return;O=requestAnimationFrame(()=>{Oc.value=!1,M()})}});return()=>{U(),S(),Dt.value={query:"",matches:[],currentMatchIndex:-1}}},[]),ze(()=>{const C=F=>{if(p.current&&b)switch(F.key){case"ArrowUp":{if(F.preventDefault(),F.stopPropagation(),b>0){const M=k[b-1];M?.element&&V(M.element)}return}case"ArrowDown":{if(F.preventDefault(),F.stopPropagation(),b<k.length-1){const M=k[b+1];M?.element&&V(M.element)}return}case"ArrowLeft":{F.preventDefault(),F.stopPropagation();const M=k[b];M?.nodeId&&ee(M.nodeId);return}case"ArrowRight":{F.preventDefault(),F.stopPropagation();const M=k[b];M?.nodeId&&ee(M.nodeId);return}}};return document.addEventListener("keydown",C),()=>{document.removeEventListener("keydown",C)}},[b,k,V,ee]),ze(()=>Dt.subscribe(I),[]),ze(()=>de.subscribe(F=>{r.current?.style.setProperty("transition","width 0.1s"),re(F.componentsTree.width),setTimeout(()=>{r.current?.style.removeProperty("transition")},500)}),[]),d("div",{className:"react-scan-components-tree flex",children:[d("div",{ref:m,onPointerDown:Ce,className:"relative resize-v-line",children:d("span",{children:d(ct,{name:"icon-ellipsis",size:18})})}),d("div",{ref:r,className:"flex flex-col h-full",children:[d("div",{className:"p-2 border-b border-[#1e1e1e]",children:d("div",{ref:i,title:`Search components by:

• Name (e.g., "Button") — Case insensitive, matches any part

• Regular Expression (e.g., "/^Button/") — Use forward slashes

• Wrapper Type (e.g., "[memo,forwardRef]"):
   - Available types: memo, forwardRef, lazy, suspense
   - Matches any part of type name (e.g., "mo" matches "memo")
   - Use commas for multiple types

• Combined Search:
   - Mix name/regex with type: "button [for]"
   - Will match components satisfying both conditions

• Navigation:
   - Enter → Next match
   - Shift + Enter → Previous match
   - Cmd/Ctrl + Enter → Select and focus match
`,className:P("relative","flex items-center gap-x-1 px-2","rounded","border border-transparent","focus-within:border-[#454545]","bg-[#1e1e1e] text-neutral-300","transition-colors","whitespace-nowrap","overflow-hidden"),children:[d(ct,{name:"icon-search",size:12,className:" text-neutral-500"}),d("div",{className:"relative flex-1 h-7 overflow-hidden",children:d("input",{ref:a,type:"text",value:Dt.value.query,onClick:C=>{C.stopPropagation(),C.currentTarget.focus()},onPointerDown:C=>{C.stopPropagation()},onKeyDown:C=>{C.key==="Escape"&&C.currentTarget.blur(),Dt.value.matches.length&&(C.key==="Enter"&&C.shiftKey?me("prev"):C.key==="Enter"&&(C.metaKey||C.ctrlKey?(C.preventDefault(),C.stopPropagation(),V(Dt.value.matches[Dt.value.currentMatchIndex].element),C.currentTarget.focus()):me("next")))},onChange:ve,className:"absolute inset-y-0 inset-x-1",placeholder:"Component name, /regex/, or [type]"})}),Dt.value.query?d(Re,{children:[d("span",{className:"flex items-center gap-x-0.5 text-xs text-neutral-500",children:[Dt.value.currentMatchIndex+1,"|",Dt.value.matches.length]}),!!Dt.value.matches.length&&d(Re,{children:[d("button",{type:"button",onClick:C=>{C.stopPropagation(),me("prev")},className:"button rounded w-4 h-4 flex items-center justify-center text-neutral-400 hover:text-neutral-300",children:d(ct,{name:"icon-chevron-right",className:"-rotate-90",size:12})}),d("button",{type:"button",onClick:C=>{C.stopPropagation(),me("next")},className:"button rounded w-4 h-4 flex items-center justify-center text-neutral-400 hover:text-neutral-300",children:d(ct,{name:"icon-chevron-right",className:"rotate-90",size:12})})]}),d("button",{type:"button",onClick:C=>{C.stopPropagation(),ae("")},className:"button rounded w-4 h-4 flex items-center justify-center text-neutral-400 hover:text-neutral-300",children:d(ct,{name:"icon-close",size:12})})]}):!!g.length&&d("span",{className:"text-xs text-neutral-500",children:g.length})]})}),d("div",{className:"flex-1 overflow-hidden",children:d("div",{ref:n,onPointerLeave:ke,className:"tree h-full overflow-auto will-change-transform",children:d("div",{className:"relative w-full",style:{height:W},children:H.map(C=>{const F=k[C.index];if(!F)return null;const M=ce.inspectState.value.kind==="focused"&&F.element===ce.inspectState.value.focusedDomElement,U=C.index===b;return d("div",{className:P("absolute left-0 w-full overflow-hidden","text-neutral-400 hover:text-neutral-300","bg-transparent hover:bg-[#5f3f9a]/20",(M||U)&&"text-neutral-300 bg-[#5f3f9a]/40 hover:bg-[#5f3f9a]/40"),style:{top:C.start,height:z},children:d("div",{className:"w-full h-full",style:{paddingLeft:`calc(${F.depth} * var(--indentation-size))`},children:d(Rx,{node:F,nodeIndex:C.index,hasChildren:!!F.children?.length,isCollapsed:w.has(F.nodeId),handleTreeNodeClick:K,handleTreeNodeToggle:ge,searchValue:E})})},F.nodeId)})})})})]})]})},zs=Bs(({text:n,children:r,onCopy:i,className:a,iconSize:l=14})=>{const[c,p]=Ie(!1);ze(()=>{if(c){const g=setTimeout(()=>p(!1),600);return()=>{clearTimeout(g)}}},[c]);const h=ft(g=>{g.preventDefault(),g.stopPropagation(),navigator.clipboard.writeText(n).then(()=>{p(!0),i?.(!0,n)},()=>{i?.(!1,n)})},[n,i]),m=d("button",{onClick:h,type:"button",className:P("z-10","flex items-center justify-center","hover:text-dev-pink-400","transition-colors duration-200 ease-in-out","cursor-pointer",`size-[${l}px]`,a),children:d(ct,{name:`icon-${c?"check":"copy"}`,size:[l],className:P(c&&"text-green-500")})});return r?r({ClipboardIcon:m,onClick:h}):m}),Fx=({length:n,expanded:r,onToggle:i,isNegative:a})=>d("div",{className:"flex items-center gap-1",children:[d("button",{type:"button",onClick:i,className:"flex items-center p-0 opacity-50",children:d(ct,{name:"icon-chevron-right",size:12,className:P("transition-[color,transform]",a?"text-[#f87171]":"text-[#4ade80]",r&&"rotate-90")})}),d("span",{children:["Array(",n,")"]})]}),yu=({value:n,path:r,isNegative:i})=>{const[a,l]=Ie(!1);if(!(n!==null&&typeof n=="object"&&!(n instanceof Date)))return d("div",{className:"flex items-center gap-1",children:[d("span",{className:"text-gray-500",children:[r,":"]}),d("span",{className:"truncate",children:Rs(n)})]});const p=Object.entries(n);return d("div",{className:"flex flex-col",children:[d("div",{className:"flex items-center gap-1",children:[d("button",{type:"button",onClick:()=>l(!a),className:"flex items-center p-0 opacity-50",children:d(ct,{name:"icon-chevron-right",size:12,className:P("transition-[color,transform]",i?"text-[#f87171]":"text-[#4ade80]",a&&"rotate-90")})}),d("span",{className:"text-gray-500",children:[r,":"]}),!a&&d("span",{className:"truncate",children:n instanceof Date?Rs(n):`{${Object.keys(n).join(", ")}}`})]}),a&&d("div",{className:"pl-5 border-l border-[#333] mt-0.5 ml-1 flex flex-col gap-0.5",children:p.map(([h,m])=>d(yu,{value:m,path:h,isNegative:i},h))})]})},Is=({value:n,expanded:r,onToggle:i,isNegative:a})=>{const{value:l,error:c}=oy(n);return c?d("span",{className:"text-gray-500 font-italic",children:c}):l!==null&&typeof l=="object"&&!(l instanceof Promise)?Array.isArray(l)?d("div",{className:"flex flex-col gap-1 relative",children:[d(Fx,{length:l.length,expanded:r,onToggle:i,isNegative:a}),r&&d("div",{className:"pl-2 border-l border-[#333] mt-0.5 ml-1 flex flex-col gap-0.5",children:l.map((h,m)=>d(yu,{value:h,path:m.toString(),isNegative:a},m.toString()))}),d(zs,{text:Ch(l),className:"absolute top-0.5 right-0.5 opacity-0 transition-opacity group-hover:opacity-100 self-end",children:({ClipboardIcon:h})=>d(Re,{children:h})})]}):d("div",{className:"flex items-start gap-1 relative",children:[d("button",{type:"button",onClick:i,className:P("flex items-center","p-0 mt-0.5 mr-1","opacity-50"),children:d(ct,{name:"icon-chevron-right",size:12,className:P("transition-[color,transform]",a?"text-[#f87171]":"text-[#4ade80]",r&&"rotate-90")})}),d("div",{className:"flex-1",children:r?d("div",{className:"pl-2 border-l border-[#333] mt-0.5 ml-1 flex flex-col gap-0.5",children:Object.entries(l).map(([h,m])=>d(yu,{value:m,path:h,isNegative:a},h))}):d("span",{children:Rs(l)})}),d(zs,{text:Ch(l),className:"absolute top-0.5 right-0.5 opacity-0 transition-opacity group-hover:opacity-100 self-end",children:({ClipboardIcon:h})=>d(Re,{children:h})})]}):d("span",{children:Rs(l)})},$x=50;xt({fiber:null,fiberProps:{current:[],changes:new Set},fiberState:{current:[],changes:new Set},fiberContext:{current:[],changes:new Set}});var bu=n=>{switch(n.kind){case"initialized":return n.changes.currentValue;case"partially-initialized":return n.value}},bh=(n,r)=>{for(const i of n){const a=r.get(i.name);if(a){r.set(a.name,{count:a.count+1,currentValue:i.value,id:a.name,lastUpdated:Date.now(),name:a.name,previousValue:i.prevValue});continue}r.set(i.name,{count:1,currentValue:i.value,id:i.name,lastUpdated:Date.now(),name:i.name,previousValue:i.prevValue})}},Lx=(n,r)=>{for(const i of n){const a=r.contextChanges.get(i.contextType);if(a){if(zr(bu(a),i.value))continue;if(a.kind==="partially-initialized"){r.contextChanges.set(i.contextType,{kind:"initialized",changes:{count:1,currentValue:i.value,id:i.contextType.toString(),lastUpdated:Date.now(),name:i.name,previousValue:a.value}});continue}r.contextChanges.set(i.contextType,{kind:"initialized",changes:{count:a.changes.count+1,currentValue:i.value,id:i.contextType.toString(),lastUpdated:Date.now(),name:i.name,previousValue:a.changes.currentValue}});continue}r.contextChanges.set(i.contextType,{kind:"partially-initialized",id:i.contextType.toString(),lastUpdated:Date.now(),name:i.name,value:i.value})}},Dx=n=>{const r={contextChanges:new Map,propsChanges:new Map,stateChanges:new Map};return n.forEach(i=>{Lx(i.contextChanges,r),bh(i.stateChanges,r.stateChanges),bh(i.propsChanges,r.propsChanges)}),r},kh=(n,r)=>{const i=new Map;return n.forEach((a,l)=>{i.set(l,a)}),r.forEach((a,l)=>{const c=i.get(l);if(!c){i.set(l,a);return}i.set(l,{count:c.count+a.count,currentValue:a.currentValue,id:a.id,lastUpdated:a.lastUpdated,name:a.name,previousValue:a.previousValue})}),i},Ox=(n,r)=>{const i=new Map;return n.contextChanges.forEach((a,l)=>{i.set(l,a)}),r.contextChanges.forEach((a,l)=>{const c=i.get(l);if(!c){i.set(l,a);return}if(bu(a)!==bu(c))switch(c.kind){case"initialized":switch(a.kind){case"initialized":{i.set(l,{kind:"initialized",changes:{...a.changes,count:a.changes.count+c.changes.count+1,currentValue:a.changes.currentValue,previousValue:a.changes.previousValue}});return}case"partially-initialized":{i.set(l,{kind:"initialized",changes:{count:c.changes.count+1,currentValue:a.value,id:a.id,lastUpdated:a.lastUpdated,name:a.name,previousValue:c.changes.currentValue}});return}}case"partially-initialized":switch(a.kind){case"initialized":{i.set(l,{kind:"initialized",changes:{count:a.changes.count+1,currentValue:a.changes.currentValue,id:a.changes.id,lastUpdated:a.changes.lastUpdated,name:a.changes.name,previousValue:c.value}});return}case"partially-initialized":{i.set(l,{kind:"initialized",changes:{count:1,currentValue:a.value,id:a.id,lastUpdated:a.lastUpdated,name:a.name,previousValue:c.value}});return}}}}),i},Ux=(n,r)=>{const i=Ox(n,r),a=kh(n.propsChanges,r.propsChanges),l=kh(n.stateChanges,r.stateChanges);return{contextChanges:i,propsChanges:a,stateChanges:l}},ku=n=>Array.from(n.propsChanges.values()).reduce((r,i)=>r+i.count,0)+Array.from(n.stateChanges.values()).reduce((r,i)=>r+i.count,0)+Array.from(n.contextChanges.values()).filter(r=>r.kind==="initialized").reduce((r,i)=>r+i.changes.count,0),Hx=n=>{const r=we({queue:[]}),[i,a]=Ie({propsChanges:new Map,stateChanges:new Map,contextChanges:new Map}),l=ce.inspectState.value.kind==="focused"?ce.inspectState.value.fiber:null,c=l?Mr(l):null;return ze(()=>{const p=setInterval(()=>{r.current.queue.length!==0&&(a(h=>{const m=Dx(r.current.queue),g=Ux(h,m);return ku(h),ku(g),g}),r.current.queue=[])},$x);return()=>{clearInterval(p)}},[l]),ze(()=>{if(!c)return;const p=m=>{r.current?.queue.push(m)};let h=ce.changesListeners.get(c);return h||(h=[],ce.changesListeners.set(c,h)),h.push(p),()=>{a({propsChanges:new Map,stateChanges:new Map,contextChanges:new Map}),r.current.queue=[],ce.changesListeners.set(c,ce.changesListeners.get(c)?.filter(m=>m!==p)??[])}},[c]),ze(()=>()=>{a({propsChanges:new Map,stateChanges:new Map,contextChanges:new Map}),r.current.queue=[]},[c]),i},As=n=>{if(n==null)return{value:n};if(typeof n=="function")return{value:n};if(typeof n!="object")return{value:n};if(Fo(n))return{value:"Promise"};try{const r=Object.getPrototypeOf(n);return r===Promise.prototype||r?.constructor?.name==="Promise"?{value:"Promise"}:{value:n}}catch{return{value:null,error:"Error accessing value"}}},Wx=Bs(()=>{const[n,r]=Ie(!0),i=Hx(),[a,l]=Ie(!1),c=ku(i)>0;ze(()=>{if(!a&&c){const m=setTimeout(()=>{l(!0),requestAnimationFrame(()=>{r(!0)})},0);return()=>clearTimeout(m)}},[a,c]);const p=new Map(Array.from(i.contextChanges.entries()).filter(([,m])=>m.kind==="initialized").map(([m,g])=>[m,g.kind==="partially-initialized"?null:g.changes])),h=ce.inspectState.value.kind==="focused"?ce.inspectState.value.fiber:null;if(h)return d(Re,{children:[d(Yx,{}),d("div",{className:"overflow-hidden h-full flex flex-col gap-y-2",children:[d("div",{className:"flex flex-col gap-2 px-3 pt-2",children:[d("span",{className:"text-sm font-medium text-[#888]",children:["Why did"," ",d("span",{className:"text-[#A855F7]",children:Mt(h)})," ","render?"]}),!c&&d("div",{className:"text-sm text-[#737373] bg-[#1E1E1E] rounded-md p-4 flex flex-col gap-4",children:[d("div",{children:"No changes detected since selecting"}),d("div",{children:"The props, state, and context changes within your component will be reported here"})]})]}),d("div",{className:P("flex flex-col gap-y-2 pl-3 relative overflow-y-auto h-full"),children:[d(Uc,{changes:i.propsChanges,title:"Changed Props",isExpanded:n}),d(Uc,{renderName:m=>Vx(m,Mt(to(h))??"Unknown Component"),changes:i.stateChanges,title:"Changed State",isExpanded:n}),d(Uc,{changes:p,title:"Changed Context",isExpanded:n})]})]})]})}),Vx=(n,r)=>{if(Number.isNaN(Number(n)))return n;const i=Number.parseInt(n);return d("span",{className:"truncate",children:[d("span",{className:"text-white",children:[i,(l=>{const c=l%10,p=l%100;if(p>=11&&p<=13)return"th";switch(c){case 1:return"st";case 2:return"nd";case 3:return"rd";default:return"th"}})(i)," hook"," "]}),d("span",{style:{color:"#666"},children:["called in ",d("i",{className:"text-[#A855F7] truncate",children:r})]})]})},Yx=Bs(()=>{const n=we(null),r=we(null),i=we(null),a=we({isPropsChanged:!1,isStateChanged:!1,isContextChanged:!1});return ze(()=>{const l=Gm(()=>{const p=[];n.current?.dataset.flash==="true"&&p.push(n.current),r.current?.dataset.flash==="true"&&p.push(r.current),i.current?.dataset.flash==="true"&&p.push(i.current);for(const h of p)h.classList.remove("count-flash-white"),h.offsetWidth,h.classList.add("count-flash-white")},400);return Vt.subscribe(p=>{if(!n.current||!r.current||!i.current)return;const{currentIndex:h,updates:m}=p,g=m[h];!g||h===0||(l(),a.current={isPropsChanged:(g.props?.changes?.size??0)>0,isStateChanged:(g.state?.changes?.size??0)>0,isContextChanged:(g.context?.changes?.size??0)>0},n.current.dataset.flash!=="true"&&(n.current.dataset.flash=a.current.isPropsChanged.toString()),r.current.dataset.flash!=="true"&&(r.current.dataset.flash=a.current.isStateChanged.toString()),i.current.dataset.flash!=="true"&&(i.current.dataset.flash=a.current.isContextChanged.toString()))})},[]),d("button",{type:"button",className:P("react-section-header","overflow-hidden","max-h-0","transition-[max-height]"),children:d("div",{className:P("flex-1 react-scan-expandable"),children:d("div",{className:"overflow-hidden",children:d("div",{className:"flex items-center whitespace-nowrap",children:[d("div",{className:"flex items-center gap-x-2",children:"What changed?"}),d("div",{className:P("ml-auto","change-scope","transition-opacity duration-300 delay-150"),children:[d("div",{ref:n,children:"props"}),d("div",{ref:r,children:"state"}),d("div",{ref:i,children:"context"})]})]})})})})}),Bx=n=>n,Uc=Bs(({title:n,changes:r,renderName:i=Bx})=>{const[a,l]=Ie(new Set),[c,p]=Ie(new Set),h=Array.from(r.entries());return r.size===0?null:d("div",{children:[d("div",{className:"text-xs text-[#888] mb-1.5",children:n}),d("div",{className:"flex flex-col gap-2",children:h.map(([m,g])=>{const x=c.has(String(m)),{value:w,error:y}=As(g.previousValue),{value:b,error:N}=As(g.currentValue),E=rg(w,b);return d("div",{children:[d("button",{onClick:()=>{p(I=>{const k=new Set(I);return k.has(String(m))?k.delete(String(m)):k.add(String(m)),k})},className:"flex items-center gap-2 w-full bg-transparent border-none p-0 cursor-pointer text-white text-xs",children:d("div",{className:"flex items-center gap-1.5 flex-1",children:[d(ct,{name:"icon-chevron-right",size:12,className:P("text-[#666] transition-transform duration-200 ease-[cubic-bezier(0.25,0.1,0.25,1)]",{"rotate-90":x})}),d("div",{className:"whitespace-pre-wrap break-words text-left font-medium flex items-center gap-x-1.5",children:[i(g.name),d(qx,{count:g.count,isFunction:typeof g.currentValue=="function",showWarning:E.changes.length===0,forceFlash:!0})]})]})}),d("div",{className:P("react-scan-expandable",{"react-scan-expanded":x}),children:d("div",{className:"pl-3 text-xs font-mono border-l-1 border-[#333]",children:d("div",{className:"flex flex-col gap-0.5",children:y||N?d(Xx,{currError:N,prevError:y}):E.changes.length>0?d(Gx,{change:g,diff:E,expandedFns:a,renderName:i,setExpandedFns:l,title:n}):d(Qx,{currValue:b,entryKey:m,expandedFns:a,prevValue:w,setExpandedFns:l})})})})]},m)})})]})}),Xx=({prevError:n,currError:r})=>d(Re,{children:[n&&d("div",{className:"text-[#f87171] bg-[#2a1515] pr-1.5 py-[3px] rounded italic",children:n}),r&&d("div",{className:"text-[#4ade80] bg-[#1a2a1a] pr-1.5 py-[3px] rounded italic mt-0.5",children:r})]}),Gx=({diff:n,title:r,renderName:i,change:a,expandedFns:l,setExpandedFns:c})=>n.changes.map((p,h)=>{const{value:m,error:g}=As(p.prevValue),{value:x,error:w}=As(p.currentValue),y=typeof m=="function"||typeof x=="function";let b;return r==="Props"&&(b=p.path.length>0?`${i(String(a.name))}.${Cn(p.path)}`:void 0),r==="State"&&p.path.length>0&&(b=`state.${Cn(p.path)}`),b||(b=Cn(p.path)),d("div",{className:P("flex flex-col gap-y-1",h<n.changes.length-1&&"mb-4"),children:[b&&d("div",{className:"text-[#666] text-[10px]",children:b}),d("button",{type:"button",className:P("group","flex items-start","py-[3px] px-1.5","text-left text-[#f87171] bg-[#2a1515]","rounded","overflow-hidden break-all",y&&"cursor-pointer"),onClick:y?()=>{const N=`${Cn(p.path)}-prev`;c(E=>{const I=new Set(E);return I.has(N)?I.delete(N):I.add(N),I})}:void 0,children:[d("span",{className:"w-3 flex items-center justify-center opacity-50",children:"-"}),d("span",{className:"flex-1 whitespace-nowrap font-mono",children:g?d("span",{className:"italic text-[#f87171]",children:g}):y?d("div",{className:"flex gap-1 items-start flex-col",children:[d("div",{className:"flex gap-1 items-start w-full",children:[d("span",{className:"flex-1 max-h-40",children:Su(m,l.has(`${Cn(p.path)}-prev`))}),typeof m=="function"&&d(zs,{text:m.toString(),className:"opacity-0 transition-opacity group-hover:opacity-100",children:({ClipboardIcon:N})=>d(Re,{children:N})})]}),m?.toString()===x?.toString()&&d("div",{className:"text-[10px] text-[#666] italic",children:"Function reference changed"})]}):d(Is,{value:m,expanded:l.has(`${Cn(p.path)}-prev`),onToggle:()=>{const N=`${Cn(p.path)}-prev`;c(E=>{const I=new Set(E);return I.has(N)?I.delete(N):I.add(N),I})},isNegative:!0})})]}),d("button",{type:"button",className:P("group","flex items-start","py-[3px] px-1.5","text-left text-[#4ade80] bg-[#1a2a1a]","rounded","overflow-hidden break-all",y&&"cursor-pointer"),onClick:y?()=>{const N=`${Cn(p.path)}-current`;c(E=>{const I=new Set(E);return I.has(N)?I.delete(N):I.add(N),I})}:void 0,children:[d("span",{className:"w-3 flex items-center justify-center opacity-50",children:"+"}),d("span",{className:"flex-1 whitespace-pre-wrap font-mono",children:w?d("span",{className:"italic text-[#4ade80]",children:w}):y?d("div",{className:"flex gap-1 items-start flex-col",children:[d("div",{className:"flex gap-1 items-start w-full",children:[d("span",{className:"flex-1",children:Su(x,l.has(`${Cn(p.path)}-current`))}),typeof x=="function"&&d(zs,{text:x.toString(),className:"opacity-0 transition-opacity group-hover:opacity-100",children:({ClipboardIcon:N})=>d(Re,{children:N})})]}),m?.toString()===x?.toString()&&d("div",{className:"text-[10px] text-[#666] italic",children:"Function reference changed"})]}):d(Is,{value:x,expanded:l.has(`${Cn(p.path)}-current`),onToggle:()=>{const N=`${Cn(p.path)}-current`;c(E=>{const I=new Set(E);return I.has(N)?I.delete(N):I.add(N),I})},isNegative:!1})})]})]},`${b}-${a.name}-${h}`)}),Qx=({prevValue:n,currValue:r,entryKey:i,expandedFns:a,setExpandedFns:l})=>d(Re,{children:[d("div",{className:"group flex gap-0.5 items-start text-[#f87171] bg-[#2a1515] py-[3px] px-1.5 rounded",children:[d("span",{className:"w-3 flex items-center justify-center opacity-50",children:"-"}),d("span",{className:"flex-1 overflow-hidden whitespace-pre-wrap font-mono",children:d(Is,{value:n,expanded:a.has(`${String(i)}-prev`),onToggle:()=>{const c=`${String(i)}-prev`;l(p=>{const h=new Set(p);return h.has(c)?h.delete(c):h.add(c),h})},isNegative:!0})})]}),d("div",{className:"group flex gap-0.5 items-start text-[#4ade80] bg-[#1a2a1a] py-[3px] px-1.5 rounded mt-0.5",children:[d("span",{className:"w-3 flex items-center justify-center opacity-50",children:"+"}),d("span",{className:"flex-1 overflow-hidden whitespace-pre-wrap font-mono",children:d(Is,{value:r,expanded:a.has(`${String(i)}-current`),onToggle:()=>{const c=`${String(i)}-current`;l(p=>{const h=new Set(p);return h.has(c)?h.delete(c):h.add(c),h})},isNegative:!1})})]}),typeof r=="object"&&r!==null&&d("div",{className:"text-[#666] text-[10px] italic mt-1 flex items-center gap-x-1",children:[d(ct,{name:"icon-triangle-alert",className:"text-yellow-500 mb-px",size:14}),d("span",{children:"Reference changed but objects are structurally the same"})]})]}),qx=({count:n,forceFlash:r,isFunction:i,showWarning:a})=>{const l=we(!0),c=we(null),p=we(n);return ze(()=>{const h=c.current;!h||p.current===n||(h.classList.remove("count-flash"),h.offsetWidth,h.classList.add("count-flash"),p.current=n)},[n]),ze(()=>{if(l.current){l.current=!1;return}if(r){let h=setTimeout(()=>{c.current?.classList.add("count-flash-white"),h=setTimeout(()=>{c.current?.classList.remove("count-flash-white")},300)},500);return()=>{clearTimeout(h)}}},[r]),d("div",{ref:c,className:"count-badge",children:[a&&d(ct,{name:"icon-triangle-alert",className:"text-yellow-500 mb-px",size:14}),i&&d(ct,{name:"icon-function",className:"text-[#A855F7] mb-px",size:14}),"x",n]})},Er={lastRendered:new Map,expandedPaths:new Set,cleanup:()=>{Er.lastRendered.clear(),Er.expandedPaths.clear(),Ex.cleanupAll(),ly(),qm.reset()}},eg=class extends gn{constructor(){super(...arguments),this.state={hasError:!1,error:null},this.handleReset=()=>{this.setState({hasError:!1,error:null}),Er.cleanup()}}static getDerivedStateFromError(n){return{hasError:!0,error:n}}render(){return this.state.hasError?d("div",{className:"p-4 bg-red-950/50 h-screen backdrop-blur-sm",children:[d("div",{className:"flex items-center gap-2 mb-3 text-red-400 font-medium",children:[d(ct,{name:"icon-flame",className:"text-red-500",size:16}),"Something went wrong in the inspector"]}),d("div",{className:"p-3 bg-black/40 rounded font-mono text-xs text-red-300 mb-4 break-words",children:this.state.error?.message||JSON.stringify(this.state.error)}),d("button",{type:"button",onClick:this.handleReset,className:"px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-md text-sm font-medium transition-colors flex items-center justify-center gap-2",children:"Reset Inspector"})]}):this.props.children}},Kx=ro(()=>P("react-scan-inspector","flex-1","opacity-0","overflow-y-auto overflow-x-hidden","transition-opacity delay-0","pointer-events-none",!Xs.value&&"opacity-100 delay-300 pointer-events-auto")),Jx=Qu(()=>{const n=we(null),r=i=>{if(!i)return;n.current=i;const{data:a,shouldUpdate:l}=uy(i);if(l){const c={timestamp:Date.now(),fiberInfo:iy(i),props:a.fiberProps,state:a.fiberState,context:a.fiberContext,stateNames:sy(i)};qm.addUpdate(c,i)}};return Wi(()=>{const i=ce.inspectState.value;Hi(()=>{if(i.kind!=="focused"||!i.focusedDomElement){n.current=null,Er.cleanup();return}i.kind==="focused"&&(Xs.value=!1);const{parentCompositeFiber:a}=Sh(i.focusedDomElement,i.fiber);if(!a){ce.inspectState.value={kind:"inspect-off"},Ke.value={view:"none"};return}n.current?.type!==a.type&&(n.current=a,Er.cleanup(),r(a))})}),Wi(()=>{qu.value,Hi(()=>{const i=ce.inspectState.value;if(i.kind!=="focused"||!i.focusedDomElement){n.current=null,Er.cleanup();return}const{parentCompositeFiber:a}=Sh(i.focusedDomElement,i.fiber);if(!a){ce.inspectState.value={kind:"inspect-off"},Ke.value={view:"none"};return}r(a),i.focusedDomElement.isConnected||(n.current=null,Er.cleanup(),ce.inspectState.value={kind:"inspecting",hoveredDomElement:null})})}),ze(()=>()=>{Er.cleanup()},[]),d(eg,{children:d("div",{className:Kx,children:d("div",{className:"w-full h-full",children:d(Wx,{})})})})}),Zx=Qu(()=>ce.inspectState.value.kind!=="focused"?null:d(eg,{children:[d(Jx,{}),d(jx,{})]})),tg=n=>{if("__REACT_DEVTOOLS_GLOBAL_HOOK__"in window){const r=window.__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!r?.renderers)return null;for(const[,i]of Array.from(r.renderers))try{const a=i.findFiberByHostInstance?.(n);if(a)return a}catch{}}if("_reactRootContainer"in n)return n._reactRootContainer?._internalRoot?.current?.child??null;for(const r in n)if(r.startsWith("__reactInternalInstance$")||r.startsWith("__reactFiber"))return n[r];return null},Ku=n=>{let r=n;for(;r;){if(r.stateNode instanceof Element)return r.stateNode;if(!r.child)break;r=r.child}for(;r;){if(r.stateNode instanceof Element)return r.stateNode;if(!r.return)break;r=r.return}return null},Ju=n=>{if(!n)return null;try{const r=tg(n);if(!r)return null;const i=jo(r);return i?i[0]:null}catch{return null}},jo=n=>{let r=n,i=null;for(;r;){if(Ws(r))return[r,i];Li(r)&&!i&&(i=r),r=r.return}return null},_h=(n,r)=>!!dm(r,a=>a===n),ey=async n=>{const r=Ju(n);if(!r)return null;const i=Ku(r);if(!i)return null;const a=(await Lw([i])).get(i);return a||null},qr=n=>{const r=Ju(n);if(!r)return{};if(!Ku(r))return{};const a=jo(r);if(!a)return{};const[l]=a;return{parentCompositeFiber:l}},Sh=(n,r)=>{if(!n.isConnected)return{};let i=r??Ju(n);if(!i)return{};let a=i,l=null,c=null;for(;a;){if(!a.stateNode){a=a.return;continue}if($e.instrumentation?.fiberRoots.has(a.stateNode)){l=a,c=a.stateNode.current;break}a=a.return}if(!l||!c)return{};if(i=_h(i,c)?i:i.alternate??i,!i)return{};if(!Ku(i))return{};const p=jo(i)?.[0];return p?{parentCompositeFiber:_h(p,c)?p:p.alternate??p}:{}},ng=n=>{const r=n.memoizedProps??{},i=n.alternate?.memoizedProps??{},a=[];for(const l in r){if(l==="children")continue;const c=r[l],p=i[l];zr(c,p)||a.push({name:l,value:c,prevValue:p,type:1})}return a},_u=new Set(["HTML","HEAD","META","TITLE","BASE","SCRIPT","SCRIPT","STYLE","LINK","NOSCRIPT","SOURCE","TRACK","EMBED","OBJECT","PARAM","TEMPLATE","PORTAL","SLOT","AREA","XML","DOCTYPE","COMMENT"]),Ps=(n,r=!0)=>{if(n.stateNode&&"nodeType"in n.stateNode){const a=n.stateNode;return r&&a.tagName&&_u.has(a.tagName.toLowerCase())?null:a}let i=n.child;for(;i;){const a=Ps(i,r);if(a)return a;i=i.sibling}return null},ty=(n=document.body)=>{const r=[],i=l=>{if(!l)return null;const{parentCompositeFiber:c}=qr(l);return c&&Ps(c)===l?l:null},a=(l,c=0)=>{const p=i(l);if(p){const{parentCompositeFiber:h}=qr(p);if(!h)return;r.push({element:p,depth:c,name:Mt(h.type)??"Unknown",fiber:h})}for(const h of Array.from(l.children))a(h,p?c+1:c)};return a(n),r},Ch=n=>{try{if(n===null)return"null";if(n===void 0)return"undefined";if(Fo(n))return"Promise";if(typeof n=="function"){const r=n.toString();try{return r.replace(/\s+/g," ").replace(/{\s+/g,`{
  `).replace(/;\s+/g,`;
  `).replace(/}\s*$/g,`
}`).replace(/\(\s+/g,"(").replace(/\s+\)/g,")").replace(/,\s+/g,", ")}catch{return r}}switch(!0){case n instanceof Date:return n.toISOString();case n instanceof RegExp:return n.toString();case n instanceof Error:return`${n.name}: ${n.message}`;case n instanceof Map:return JSON.stringify(Array.from(n.entries()),null,2);case n instanceof Set:return JSON.stringify(Array.from(n),null,2);case n instanceof DataView:return JSON.stringify(Array.from(new Uint8Array(n.buffer)),null,2);case n instanceof ArrayBuffer:return JSON.stringify(Array.from(new Uint8Array(n)),null,2);case(ArrayBuffer.isView(n)&&"length"in n):return JSON.stringify(Array.from(n),null,2);case Array.isArray(n):return JSON.stringify(n,null,2);case typeof n=="object":return JSON.stringify(n,null,2);default:return String(n)}}catch{return String(n)}},ny=(n,r)=>{try{return typeof n!="function"||typeof r!="function"?!1:n.toString()===r.toString()}catch{return!1}},rg=(n,r,i=[],a=new WeakSet)=>{if(n===r)return{type:"primitive",changes:[],hasDeepChanges:!1};if(typeof n=="function"&&typeof r=="function"){const g=ny(n,r);return{type:"primitive",changes:[{path:i,prevValue:n,currentValue:r,sameFunction:g}],hasDeepChanges:!g}}if(n===null||r===null||n===void 0||r===void 0||typeof n!="object"||typeof r!="object")return{type:"primitive",changes:[{path:i,prevValue:n,currentValue:r}],hasDeepChanges:!0};if(a.has(n)||a.has(r))return{type:"object",changes:[{path:i,prevValue:"[Circular]",currentValue:"[Circular]"}],hasDeepChanges:!1};a.add(n),a.add(r);const l=n,c=r,p=new Set([...Object.keys(l),...Object.keys(c)]),h=[];let m=!1;for(const g of p){const x=l[g],w=c[g];if(x!==w)if(typeof x=="object"&&typeof w=="object"&&x!==null&&w!==null){const y=rg(x,w,[...i,g],a);h.push(...y.changes),y.hasDeepChanges&&(m=!0)}else h.push({path:[...i,g],prevValue:x,currentValue:w}),m=!0}return{type:"object",changes:h,hasDeepChanges:m}},Cn=n=>n.length===0?"":n.reduce((r,i,a)=>/^\d+$/.test(i)?`${r}[${i}]`:a===0?i:`${r}.${i}`,"");function ry(n){const r=n.replace(/\s+/g," ").trim(),i=[];let a="";for(let k=0;k<r.length;k++){const z=r[k];if(z==="="&&r[k+1]===">"){a.trim()&&i.push(a.trim()),i.push("=>"),a="",k++;continue}/[(){}[\];,<>:\?!]/.test(z)?(a.trim()&&i.push(a.trim()),i.push(z),a=""):/\s/.test(z)?(a.trim()&&i.push(a.trim()),a=""):a+=z}a.trim()&&i.push(a.trim());const l=[];for(let k=0;k<i.length;k++){const z=i[k],H=i[k+1];z==="("&&H===")"||z==="["&&H==="]"||z==="{"&&H==="}"||z==="<"&&H===">"?(l.push(z+H),k++):l.push(z)}const c=new Set,p=new Set;function h(k,z,H){let W=0;for(let V=H;V<l.length;V++){const K=l[V];if(K===k)W++;else if(K===z&&(W--,W===0))return V}return-1}for(let k=0;k<l.length;k++)if(l[k]==="("){const H=h("(",")",k);if(H!==-1&&l[H+1]==="=>")for(let W=k;W<=H;W++)c.add(W)}for(let k=1;k<l.length;k++){const z=l[k-1],H=l[k];if(/^[a-zA-Z0-9_$]+$/.test(z)&&H==="<"){const W=h("<",">",k);if(W!==-1)for(let V=k;V<=W;V++)p.add(V)}}let m=0;const g="  ",x=[];let w="";function y(){w.trim()&&x.push(w.replace(/\s+$/,"")),w=""}function b(){y(),w=g.repeat(m)}const N=[];function E(){return N.length?N[N.length-1]:null}function I(k,z=!1){w.trim()?z||/^[),;:\].}>]$/.test(k)?w+=k:w+=` ${k}`:w+=k}for(let k=0;k<l.length;k++){const z=l[k],H=l[k+1]||"";if(["(","{","[","<"].includes(z)){if(I(z),N.push(z),z==="{")m++,b();else if((z==="("||z==="["||z==="<")&&!(c.has(k)&&z==="("||p.has(k)&&z==="<")){const W={"(":")","[":"]","<":">"}[z];H!==W&&H!=="()"&&H!=="[]"&&H!=="<>"&&(m++,b())}}else if([")","}","]",">"].includes(z)){const W=E();z===")"&&W==="("||z==="]"&&W==="["||z===">"&&W==="<"?!(c.has(k)&&z===")")&&!(p.has(k)&&z===">")&&(m=Math.max(m-1,0),b()):z==="}"&&W==="{"&&(m=Math.max(m-1,0),b()),N.pop(),I(z),z==="}"&&b()}else if(/^\(\)|\[\]|\{\}|\<\>$/.test(z))I(z);else if(z==="=>")I(z);else if(z===";")I(z,!0),b();else if(z===","){I(z,!0);const W=E();!(c.has(k)&&W==="(")&&!(p.has(k)&&W==="<")&&W&&["{","[","(","<"].includes(W)&&b()}else I(z)}return y(),x.join(`
`).replace(/\n\s*\n+/g,`
`).trim()}var Su=(n,r=!1)=>{try{const i=n.toString(),a=i.match(/(?:function\s*)?(?:\(([^)]*)\)|([^=>\s]+))\s*=>?/);if(!a)return"ƒ";const c=(a[1]||a[2]||"").replace(/\s+/g,"");return r?ry(i):`ƒ (${c}) => ...`}catch{return"ƒ"}},Rs=n=>{if(n===null)return"null";if(n===void 0)return"undefined";if(typeof n=="string")return`"${n.length>150?`${n.slice(0,20)}...`:n}"`;if(typeof n=="number"||typeof n=="boolean")return String(n);if(typeof n=="function")return Su(n);if(Array.isArray(n))return`Array(${n.length})`;if(n instanceof Map)return`Map(${n.size})`;if(n instanceof Set)return`Set(${n.size})`;if(n instanceof Date)return n.toISOString();if(n instanceof RegExp)return n.toString();if(n instanceof Error)return`${n.name}: ${n.message}`;if(typeof n=="object"){const r=Object.keys(n);return`{${r.length>2?`${r.slice(0,2).join(", ")}, ...`:r.join(", ")}}`}return String(n)},oy=n=>{if(n==null)return{value:n};if(typeof n=="function")return{value:n};if(typeof n!="object")return{value:n};if(n instanceof Promise)return{value:"Promise"};try{const r=Object.getPrototypeOf(n);return r===Promise.prototype||r?.constructor?.name==="Promise"?{value:"Promise"}:{value:n}}catch{return{value:null,error:"Error accessing value"}}},Fo=n=>!!n&&(n instanceof Promise||typeof n=="object"&&"then"in n),iy=n=>{const r=Gr(n);return{displayName:Mt(n)||"Unknown",type:n.type,key:n.key,id:n.index,selfTime:r?.selfTime??null,totalTime:r?.totalTime??null}},Zu=new Map,og=new Map,ed=new Map,Cu=null,ay=/\[(?<name>\w+),\s*set\w+\]/g,sy=n=>{const r=n.type?.toString?.()||"";return r?Array.from(r.matchAll(ay),i=>i.groups?.name??""):[]},ly=()=>{Zu.clear(),og.clear(),ed.clear(),Cu=null},cy=n=>{const r=n.type!==Cu;return Cu=n.type,r},Hc=(n,r,i,a)=>{const l=n.get(r),c=n===Zu||n===ed,p=!zr(i,a);if(!l)return n.set(r,{count:p&&c?1:0,currentValue:i,previousValue:a,lastUpdated:Date.now()}),{hasChanged:p,count:p&&c?1:c?0:1};if(!zr(l.currentValue,i)){const h=l.count+1;return n.set(r,{count:h,currentValue:i,previousValue:l.currentValue,lastUpdated:Date.now()}),{hasChanged:!0,count:h}}return{hasChanged:!1,count:l.count}},Nh=n=>{if(!n)return{};if(n.tag===Os||n.tag===Us||n.tag===Qi||n.tag===Gi){let r=n.memoizedState;const i={};let a=0;for(;r;)r.queue&&r.memoizedState!==void 0&&(i[a]=r.memoizedState),r=r.next,a++;return i}return n.tag===eo?n.memoizedState||{}:{}},td=n=>{const r=n.memoizedProps||{},i=n.alternate?.memoizedProps||{},a={},l={},c=Object.keys(r);for(const h of c)h in r&&(a[h]=r[h],l[h]=i[h]);const p=ng(n).map(h=>({name:h.name,value:h.value,prevValue:h.prevValue}));return{current:a,prev:l,changes:p}},nd=n=>{const r=Nh(n),i=n.alternate?Nh(n.alternate):{},a=[];for(const[l,c]of Object.entries(r)){const p=n.tag===eo?l:Number(l);n.alternate&&!zr(i[l],c)&&a.push({name:p,value:c,prevValue:i[l]})}return{current:r,prev:i,changes:a}},rd=n=>{const r=Th(n),i=n.alternate?Th(n.alternate):new Map,a={},l={},c=[],p=new Set;for(const[h,m]of r){const g=m.displayName,x=h;if(p.has(x))continue;p.add(x),a[g]=m.value;const w=i.get(h);w&&(l[g]=w.value,zr(w.value,m.value)||c.push({name:g,value:m.value,prevValue:w.value,contextType:h}))}return{current:a,prev:l,changes:c}},uy=n=>{const r=()=>({current:[],changes:new Set,changesCounts:new Map});if(!n)return{data:{fiberProps:r(),fiberState:r(),fiberContext:r()},shouldUpdate:!1};let i=!1;const a=cy(n),l=r();if(n.memoizedProps){const{current:w,changes:y}=td(n);for(const[b,N]of Object.entries(w))l.current.push({name:b,value:Fo(N)?{type:"promise",displayValue:"Promise"}:N});for(const b of y){const{hasChanged:N,count:E}=Hc(Zu,b.name,b.value,b.prevValue);N&&(i=!0,l.changes.add(b.name),l.changesCounts.set(b.name,E))}}const c=r(),{current:p,changes:h}=nd(n);for(const[w,y]of Object.entries(p)){const b=n.tag===eo?w:Number(w);c.current.push({name:b,value:y})}for(const w of h){const{hasChanged:y,count:b}=Hc(og,w.name,w.value,w.prevValue);y&&(i=!0,c.changes.add(w.name),c.changesCounts.set(w.name,b))}const m=r(),{current:g,changes:x}=rd(n);for(const[w,y]of Object.entries(g))m.current.push({name:w,value:y});if(!a)for(const w of x){const{hasChanged:y,count:b}=Hc(ed,w.name,w.value,w.prevValue);y&&(i=!0,m.changes.add(w.name),m.changesCounts.set(w.name,b))}return!i&&!a&&(l.changes.clear(),c.changes.clear(),m.changes.clear()),{data:{fiberProps:l,fiberState:c,fiberContext:m},shouldUpdate:i||a}},Eh=new WeakMap,Th=n=>{if(!n)return new Map;const r=Eh.get(n);if(r)return r;const i=new Map;let a=n;for(;a;){const l=a.dependencies;if(l?.firstContext){let c=l.firstContext;for(;c;){const p=c.memoizedValue,h=c.context?.displayName;if(i.has(p)||i.set(c.context,{value:p,displayName:h??"UnnamedContext",contextType:null}),c===c.next)break;c=c.next}}a=a.return}return Eh.set(n,i),i},Mh=n=>{const r=()=>({current:[],changes:new Set,changesCounts:new Map});if(!n)return{fiberProps:r(),fiberState:r(),fiberContext:r()};const i=r();if(n.memoizedProps){const{current:h,changes:m}=td(n);for(const[g,x]of Object.entries(h))i.current.push({name:g,value:Fo(x)?{type:"promise",displayValue:"Promise"}:x});for(const g of m)i.changes.add(g.name),i.changesCounts.set(g.name,1)}const a=r();if(n.memoizedState){const{current:h,changes:m}=nd(n);for(const[g,x]of Object.entries(h))a.current.push({name:g,value:Fo(x)?{type:"promise",displayValue:"Promise"}:x});for(const g of m)a.changes.add(g.name),a.changesCounts.set(g.name,1)}const l=r(),{current:c,changes:p}=rd(n);for(const[h,m]of Object.entries(c))l.current.push({name:h,value:Fo(m)?{type:"promise",displayValue:"Promise"}:m});for(const h of p)l.changes.add(h.name),l.changesCounts.set(h.name,1);return{fiberProps:i,fiberState:a,fiberContext:l}},Nu=0,zh=performance.now(),Wc=0,Ih=!1,ig=()=>{Wc++;const n=performance.now();n-zh>=1e3&&(Nu=Wc,Wc=0,zh=n),requestAnimationFrame(ig)},ag=()=>(Ih||(Ih=!0,ig(),Nu=60),Nu),dy=n=>{if(!n)return[];const r=[];if(n.tag===Os||n.tag===Us||n.tag===Qi||n.tag===Gi){let i=n.memoizedState,a=n.alternate?.memoizedState,l=0;for(;i;){if(i.queue&&i.memoizedState!==void 0){const c={type:2,name:l.toString(),value:i.memoizedState,prevValue:a?.memoizedState};zr(c.prevValue,c.value)||r.push(c)}i=i.next,a=a?.next,l++}return r}if(n.tag===eo){const i={type:3,name:"state",value:n.memoizedState,prevValue:n.alternate?.memoizedState};return zr(i.prevValue,i.value)||r.push(i),r}return r},Vc=0,Ah=new WeakMap,py=n=>{const r=Ah.get(n);return r||(Vc++,Ah.set(n,Vc),Vc)};function fy(n,r){if(!n||!r)return;const i=n.memoizedValue,a={type:4,name:n.context.displayName??"Context.Provider",value:i,contextType:py(n.context)};this.push(a)}var hy=n=>{const r=[];return Q0(n,fy.bind(r)),r},sg=new Map,Ph=!1,Yc=()=>Array.from(sg.values()),my=16,Eu=new WeakMap;function lg(n){return String(Mr(n))}function cg(n){const r=lg(n),i=Eu.get(to(n));if(i)return i.get(r)}function gy(n,r){const i=to(n.type),a=lg(n);let l=Eu.get(i);l||(l=new Map,Eu.set(i,l)),l.set(a,r)}var vy=(n,r,i,a,l)=>{const c=Date.now(),p=cg(n);if((a||l)&&(!p||c-(p.lastRenderTimestamp||0)>my)){const h=p||{selfTime:0,totalTime:0,renderCount:0,lastRenderTimestamp:c};h.renderCount=(h.renderCount||0)+1,h.selfTime=r||0,h.totalTime=i||0,h.lastRenderTimestamp=c,gy(n,{...h})}},wy=(n,r)=>{const i={isPaused:xt(!$e.options.value.enabled),fiberRoots:new WeakSet};return sg.set(n,{key:n,config:r,instrumentation:i}),Ph||(Ph=!0,rw({name:"react-scan",onActive:r.onActive,onCommitFiberRoot(a,l){i.fiberRoots.add(l);const c=Yc();for(const p of c)p.config.onCommitStart();nw(l.current,(p,h)=>{const m=to(p.type);if(!m)return null;const g=Yc(),x=[];for(let z=0,H=g.length;z<H;z++)g[z].config.isValidFiber(p)&&x.push(z);if(!x.length)return null;const w=[];if(g.some(z=>z.config.trackChanges)){const z=td(p).changes,H=nd(p).changes,W=rd(p).changes;w.push.apply(null,z.map(V=>({type:1,name:V.name,value:V.value})));for(const V of H)p.tag===eo?w.push({type:3,name:V.name.toString(),value:V.value}):w.push({type:2,name:V.name.toString(),value:V.value});w.push.apply(null,W.map(V=>({type:4,name:V.name,value:V.value,contextType:Number(V.contextType)})))}const{selfTime:y,totalTime:b}=Gr(p),N=ag(),E={phase:Dw[h],componentName:Mt(m),count:1,changes:w,time:y,forget:Di(p),unnecessary:null,didCommit:ju(p),fps:N},I=w.length>0,k=q0(p).length>0;h==="update"&&vy(p,y,b,I,k);for(let z=0,H=x.length;z<H;z++){const W=x[z];g[W].config.onRender(p,[E])}});for(const p of c)p.config.onCommitFinish()},onPostCommitFiberRoot(){const a=Yc();for(const l of a)l.config.onPostCommitFiberRoot()}})),i},xy=n=>{const r=new Map;for(let i=0,a=n.length;i<a;i++){const l=n[i];if(!l.componentName)continue;const c=r.get(l.componentName)??[],p=$w([{aggregatedCount:1,computedKey:null,name:l.componentName,frame:null,...l,changes:{type:l.changes.reduce((g,x)=>g|x.type,0),unstable:l.changes.some(g=>g.unstable)},phase:l.phase,computedCurrent:null}]);if(!p)continue;let h=null,m=null;if(l.changes)for(let g=0,x=l.changes.length;g<x;g++){const{name:w,prevValue:y,nextValue:b,unstable:N,type:E}=l.changes[g];E===1?(h??={},m??={},h[`${N?"⚠️":""}${w} (prev)`]=y,m[`${N?"⚠️":""}${w} (next)`]=b):c.push({prev:y,next:b,type:E===4?"context":"state",unstable:N??!1})}h&&m&&c.push({prev:h,next:m,type:"props",unstable:!1}),r.set(p,c)}for(const[i,a]of Array.from(r.entries())){console.group(`%c${i}`,"background: hsla(0,0%,70%,.3); border-radius:3px; padding: 0 2px;");for(const{type:l,prev:c,next:p,unstable:h}of a)console.log(`${l}:`,h?"⚠️":"",c,"!==",p);console.groupEnd()}},yy=()=>{if(window.hideIntro){window.hideIntro=void 0;return}console.log("%c[·] %cReact Scan","font-weight:bold;color:#7a68e8;font-size:20px;","font-weight:bold;font-size:14px;"),console.log("Try React Scan Monitoring to target performance issues in production: https://react-scan.com/monitoring")},Rh=7,by="Menlo,Consolas,Monaco,Liberation Mono,Lucida Console,monospace",ky=.1,ds=(n,r)=>Math.floor(n+(r-n)*ky),_y=4,js=40,Bc=45,Xc="115,97,230";function Sy(n,r){return r[0]-n[0]}function Cy(n){return[...n.entries()].sort(Sy)}function jh([n,r]){let i=`${r.slice(0,_y).join(", ")} ×${n}`;return i.length>js&&(i=`${i.slice(0,js)}…`),i}var Fh=n=>{const r=new Map;for(const{name:c,count:p}of n)r.set(c,(r.get(c)||0)+p);const i=new Map;for(const[c,p]of r){const h=i.get(p);h?h.push(c):i.set(p,[c])}const a=Cy(i);let l=jh(a[0]);for(let c=1,p=a.length;c<p;c++)l+=", "+jh(a[c]);return l.length>js?`${l.slice(0,js)}…`:l},$h=n=>{let r=0;for(const i of n)r+=i.width*i.height;return r},Ny=(n,r)=>{for(const{id:i,name:a,count:l,x:c,y:p,width:h,height:m,didCommit:g}of r){const x={id:i,name:a,count:l,x:c,y:p,width:h,height:m,frame:0,targetX:c,targetY:p,targetWidth:h,targetHeight:m,didCommit:g},w=String(x.id),y=n.get(w);y?(y.count++,y.frame=0,y.targetX=c,y.targetY=p,y.targetWidth=h,y.targetHeight=m,y.didCommit=g):n.set(w,x)}},Ey=(n,r,i)=>{for(const a of n.values()){const l=a.x-r,c=a.y-i;a.targetX=l,a.targetY=c}},Ty=(n,r)=>{const i=n.getContext("2d",{alpha:!0});return i&&i.scale(r,r),i},My=(n,r,i,a)=>{n.clearRect(0,0,r.width/i,r.height/i);const l=new Map,c=new Map;for(const m of a.values()){const{x:g,y:x,width:w,height:y,targetX:b,targetY:N,targetWidth:E,targetHeight:I,frame:k}=m;b!==g&&(m.x=ds(g,b)),N!==x&&(m.y=ds(x,N)),E!==w&&(m.width=ds(w,E)),I!==y&&(m.height=ds(y,I));const z=`${b??g},${N??x}`,H=`${z},${E??w},${I??y}`,W=l.get(z);W?W.push(m):l.set(z,[m]);const V=1-k/Bc;m.frame++;const K=c.get(H)||{x:g,y:x,width:w,height:y,alpha:V};V>K.alpha&&(K.alpha=V),c.set(H,K)}for(const{x:m,y:g,width:x,height:w,alpha:y}of c.values())n.strokeStyle=`rgba(${Xc},${y})`,n.lineWidth=1,n.beginPath(),n.rect(m,g,x,w),n.stroke(),n.fillStyle=`rgba(${Xc},${y*.1})`,n.fill();n.font=`11px ${by}`;const p=new Map;n.textRendering="optimizeSpeed";for(const m of l.values()){const g=m[0],{x,y:w,frame:y}=g,b=1-y/Bc,N=Fh(m),{width:E}=n.measureText(N);if(p.set(`${x},${w},${E},${N}`,{text:N,width:E,height:11,alpha:b,x,y:w,outlines:m}),y>Bc)for(const k of m)a.delete(String(k.id))}const h=Array.from(p.entries()).sort(([m,g],[x,w])=>$h(w.outlines)-$h(g.outlines));for(const[m,g]of h)if(p.has(m))for(const[x,w]of p.entries()){if(m===x)continue;const{x:y,y:b,width:N,height:E}=g,{x:I,y:k,width:z,height:H}=w;y+N>I&&I+z>y&&b+E>k&&k+H>b&&(g.text=Fh(g.outlines.concat(w.outlines)),g.width=n.measureText(g.text).width,p.delete(x))}for(const m of p.values()){const{x:g,y:x,alpha:w,width:y,height:b,text:N}=m;let E=x-b-4;E<0&&(E=0),n.fillStyle=`rgba(${Xc},${w})`,n.fillRect(g,E,y+4,b+4),n.fillStyle=`rgba(255,255,255,${w})`,n.fillText(N,g+2,E+b)}return a.size>0},zy='"use strict";(()=>{var D="Menlo,Consolas,Monaco,Liberation Mono,Lucida Console,monospace";var M=(t,i)=>Math.floor(t+(i-t)*.1);var _="115,97,230";function F(t,i){return i[0]-t[0]}function I(t){return[...t.entries()].sort(F)}function $([t,i]){let o=`${i.slice(0,4).join(", ")} \\xD7${t}`;return o.length>40&&(o=`${o.slice(0,40)}\\u2026`),o}var S=t=>{let i=new Map;for(let{name:e,count:u}of t)i.set(e,(i.get(e)||0)+u);let o=new Map;for(let[e,u]of i){let A=o.get(u);A?A.push(e):o.set(u,[e])}let h=I(o),s=$(h[0]);for(let e=1,u=h.length;e<u;e++)s+=", "+$(h[e]);return s.length>40?`${s.slice(0,40)}\\u2026`:s},X=t=>{let i=0;for(let o of t)i+=o.width*o.height;return i};var N=(t,i)=>{let o=t.getContext("2d",{alpha:!0});return o&&o.scale(i,i),o},Y=(t,i,o,h)=>{t.clearRect(0,0,i.width/o,i.height/o);let s=new Map,e=new Map;for(let n of h.values()){let{x:r,y:c,width:a,height:g,targetX:l,targetY:d,targetWidth:f,targetHeight:p,frame:O}=n;l!==r&&(n.x=M(r,l)),d!==c&&(n.y=M(c,d)),f!==a&&(n.width=M(a,f)),p!==g&&(n.height=M(g,p));let w=`${l??r},${d??c}`,y=`${w},${f??a},${p??g}`,v=s.get(w);v?v.push(n):s.set(w,[n]);let E=1-O/45;n.frame++;let x=e.get(y)||{x:r,y:c,width:a,height:g,alpha:E};E>x.alpha&&(x.alpha=E),e.set(y,x)}for(let{x:n,y:r,width:c,height:a,alpha:g}of e.values())t.strokeStyle=`rgba(${_},${g})`,t.lineWidth=1,t.beginPath(),t.rect(n,r,c,a),t.stroke(),t.fillStyle=`rgba(${_},${g*.1})`,t.fill();t.font=`11px ${D}`;let u=new Map;t.textRendering="optimizeSpeed";for(let n of s.values()){let r=n[0],{x:c,y:a,frame:g}=r,l=1-g/45,d=S(n),{width:f}=t.measureText(d),p=11;u.set(`${c},${a},${f},${d}`,{text:d,width:f,height:p,alpha:l,x:c,y:a,outlines:n});let O=a-p-4;if(O<0&&(O=0),g>45)for(let w of n)h.delete(String(w.id))}let A=Array.from(u.entries()).sort(([n,r],[c,a])=>X(a.outlines)-X(r.outlines));for(let[n,r]of A)if(u.has(n))for(let[c,a]of u.entries()){if(n===c)continue;let{x:g,y:l,width:d,height:f}=r,{x:p,y:O,width:w,height:y}=a;g+d>p&&p+w>g&&l+f>O&&O+y>l&&(r.text=S(r.outlines.concat(a.outlines)),r.width=t.measureText(r.text).width,u.delete(c))}for(let n of u.values()){let{x:r,y:c,alpha:a,width:g,height:l,text:d}=n,f=c-l-4;f<0&&(f=0),t.fillStyle=`rgba(${_},${a})`,t.fillRect(r,f,g+4,l+4),t.fillStyle=`rgba(255,255,255,${a})`,t.fillText(d,r+2,f+l)}return h.size>0};var m=null,L=null,b=1,T=new Map,C=null,R=()=>{if(!L||!m)return;Y(L,m,b,T)?C=requestAnimationFrame(R):C=null};self.onmessage=t=>{let{type:i}=t.data;if(i==="init"&&(m=t.data.canvas,b=t.data.dpr,m&&(m.width=t.data.width,m.height=t.data.height,L=N(m,b))),!(!m||!L)){if(i==="resize"){b=t.data.dpr,m.width=t.data.width*b,m.height=t.data.height*b,L.resetTransform(),L.scale(b,b),R();return}if(i==="draw-outlines"){let{data:o,names:h}=t.data,s=new Float32Array(o);for(let e=0;e<s.length;e+=7){let u=s[e+2],A=s[e+3],n=s[e+4],r=s[e+5],c=s[e+6],a={id:s[e],name:h[e/7],count:s[e+1],x:u,y:A,width:n,height:r,frame:0,targetX:u,targetY:A,targetWidth:n,targetHeight:r,didCommit:c},g=String(a.id),l=T.get(g);l?(l.count++,l.frame=0,l.targetX=u,l.targetY=A,l.targetWidth=n,l.targetHeight=r,l.didCommit=c):T.set(g,a)}C||(C=requestAnimationFrame(R));return}if(i==="scroll"){let{deltaX:o,deltaY:h}=t.data;for(let s of T.values()){let e=s.x-o,u=s.y-h;s.targetX=e,s.targetY=u}}}};})();\n',On=null,Fs=null,Kr=null,mn=1,$s=null,od=new Map,Fi=new Map,Ao=new Set,Iy=n=>{if(!Ws(n))return;const r=typeof n.type=="string"?n.type:Mt(n);if(!r)return;const i=Fi.get(n),a=K0(n),l=ju(n);i?i.count++:(Fi.set(n,{name:r,count:1,elements:a.map(c=>c.stateNode),didCommit:l?1:0}),Ao.add(n))},Ay=n=>{const r=n[0];if(n.length===1)return r;let i,a,l,c;for(let p=0,h=n.length;p<h;p++){const m=n[p];i=i==null?m.x:Math.min(i,m.x),a=a==null?m.y:Math.min(a,m.y),l=l==null?m.x+m.width:Math.max(l,m.x+m.width),c=c==null?m.y+m.height:Math.max(c,m.y+m.height)}return i==null||a==null||l==null||c==null?n[0]:new DOMRect(i,a,l-i,c-a)};function Py(n,r){const i=[];for(const a of n){const l=a.target;this.seenElements.has(l)||(this.seenElements.add(l),i.push(a))}i.length>0&&this.resolveNext&&(this.resolveNext(i),this.resolveNext=null),this.seenElements.size===this.uniqueElements.size&&(r.disconnect(),this.done=!0,this.resolveNext&&this.resolveNext([]))}var ug=async function*(n){const r={uniqueElements:new Set(n),seenElements:new Set,resolveNext:null,done:!1},i=new IntersectionObserver(Py.bind(r));for(const a of r.uniqueElements)i.observe(a);for(;!r.done;){const a=await new Promise(l=>{r.resolveNext=l});a.length>0&&(yield a)}},Ry=typeof SharedArrayBuffer<"u"?SharedArrayBuffer:ArrayBuffer,jy=async()=>{const n=[];for(const i of Ao){const a=Fi.get(i);if(a)for(let l=0;l<a.elements.length;l++)a.elements[l]instanceof Element&&n.push(a.elements[l])}const r=new Map;for await(const i of ug(n)){for(const p of i){const h=p.target,m=p.intersectionRect;p.isIntersecting&&m.width&&m.height&&r.set(h,m)}const a=[],l=[],c=[];for(const p of Ao){const h=Fi.get(p);if(!h)continue;const m=[];for(let g=0;g<h.elements.length;g++){const x=h.elements[g],w=r.get(x);w&&m.push(w)}m.length&&(a.push(h),l.push(Ay(m)),c.push(Mr(p)))}if(a.length>0){const p=new Ry(a.length*Rh*4),h=new Float32Array(p),m=new Array(a.length);let g;for(let x=0,w=a.length;x<w;x++){const y=a[x],b=c[x],{x:N,y:E,width:I,height:k}=l[x],{count:z,name:H,didCommit:W}=y;if(On){const V=x*Rh;h[V]=b,h[V+1]=z,h[V+2]=N,h[V+3]=E,h[V+4]=I,h[V+5]=k,h[V+6]=W,m[x]=H}else g||=new Array(a.length),g[x]={id:b,name:H,count:z,x:N,y:E,width:I,height:k,didCommit:W}}On?On.postMessage({type:"draw-outlines",data:p,names:m}):Fs&&Kr&&g&&(Ny(od,g),$s||($s=requestAnimationFrame(id)))}}for(const i of Ao)Fi.delete(i),Ao.delete(i)},id=()=>{if(!Kr||!Fs)return;My(Kr,Fs,mn,od)?$s=requestAnimationFrame(id):$s=null},Fy=typeof OffscreenCanvas<"u"&&typeof Worker<"u",Lh=()=>Math.min(window.devicePixelRatio||1,2),$y=()=>{Ly();const n=document.createElement("div");n.setAttribute("data-react-scan","true");const r=n.attachShadow({mode:"open"}),i=document.createElement("canvas");if(i.style.position="fixed",i.style.top="0",i.style.left="0",i.style.pointerEvents="none",i.style.zIndex="2147483646",i.setAttribute("aria-hidden","true"),r.appendChild(i),!i)return null;mn=Lh(),Fs=i;const{innerWidth:a,innerHeight:l}=window;i.style.width=`${a}px`,i.style.height=`${l}px`;const c=a*mn,p=l*mn;if(i.width=c,i.height=p,Fy&&!window.__REACT_SCAN_EXTENSION__)try{On=new Worker(URL.createObjectURL(new Blob([zy],{type:"application/javascript"})));const w=i.transferControlToOffscreen();On?.postMessage({type:"init",canvas:w,width:i.width,height:i.height,dpr:mn},[w])}catch(w){console.warn("Failed to initialize OffscreenCanvas worker:",w)}On||(Kr=Ty(i,mn));let h=!1;window.addEventListener("resize",()=>{h||(h=!0,setTimeout(()=>{const w=window.innerWidth,y=window.innerHeight;mn=Lh(),i.style.width=`${w}px`,i.style.height=`${y}px`,On?On.postMessage({type:"resize",width:w,height:y,dpr:mn}):(i.width=w*mn,i.height=y*mn,Kr&&(Kr.resetTransform(),Kr.scale(mn,mn)),id()),h=!1}))});let m=window.scrollX,g=window.scrollY,x=!1;return window.addEventListener("scroll",()=>{x||(x=!0,setTimeout(()=>{const{scrollX:w,scrollY:y}=window,b=w-m,N=y-g;m=w,g=y,On?On.postMessage({type:"scroll",deltaX:b,deltaY:N}):requestAnimationFrame(Ey.bind(null,od,b,N)),x=!1},32))}),setInterval(()=>{Ao.size&&requestAnimationFrame(jy)},32),r.appendChild(i),n},Dh=()=>globalThis.__REACT_SCAN_STOP__,Ly=()=>{const n=document.querySelector("[data-react-scan]");n&&n.remove()},Dy=n=>{if(Ws(n)&&$e.options.value.showToolbar!==!1&&ce.inspectState.value.kind==="focused"){const r=n,{selfTime:i}=Gr(n),a=Mt(n.type),l=Mr(r),c=ce.reportData.get(l),p=c?.count??0,h=c?.time??0,m=[],g=ce.changesListeners.get(Mr(n));if(g?.length){const w=ng(n).map(E=>({type:1,name:E.name,value:E.value,prevValue:E.prevValue,unstable:!1})),y=dy(n),N=hy(n).map(E=>({name:E.name,type:4,value:E.value,contextType:E.contextType}));g.forEach(E=>{E({propsChanges:w,stateChanges:y,contextChanges:N})})}const x={count:p+1,time:h+i||0,renders:[],displayName:a,type:to(n.type)||null,changes:m};ce.reportData.set(l,x),Tu=!0}},Tu=!1,Oh,Oy=()=>{clearInterval(Oh),Oh=setInterval(()=>{Tu&&(ce.lastReportTime.value=Date.now(),Tu=!1)},50)},Uy=n=>!Pb.has(n.memoizedProps),Hy=n=>{if(Dh())return;let r,i=!1;const a=()=>{i||(r&&cancelAnimationFrame(r),r=requestAnimationFrame(()=>{i=!0;const c=$y();c&&document.documentElement.appendChild(c),n()}))},l=wy("react-scan-devtools-0.1.0",{onCommitStart:()=>{$e.options.value.onCommitStart?.()},onActive:()=>{Dh()||(a(),window.__REACT_SCAN_EXTENSION__||(globalThis.__REACT_SCAN__={ReactScanInternals:$e}),Oy(),yy())},onError:()=>{},isValidFiber:Uy,onRender:(c,p)=>{Ws(c)&&ce.interactionListeningForRenders?.(c,p);const h=$e.instrumentation?.isPaused.value,m=ce.inspectState.value.kind==="inspect-off"||ce.inspectState.value.kind==="uninitialized";h&&m||(h||Iy(c),$e.options.value.log&&xy(p),ce.inspectState.value.kind==="focused"&&(qu.value=Date.now()),m||Dy(c),$e.options.value.onRender?.(c,p))},onCommitFinish:()=>{a(),$e.options.value.onCommitFinish?.()},onPostCommitFiberRoot(){a()},trackChanges:!1});$e.instrumentation=l},Wy=`*, ::before, ::after {
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-pan-x:  ;
  --tw-pan-y:  ;
  --tw-pinch-zoom:  ;
  --tw-scroll-snap-strictness: proximity;
  --tw-gradient-from-position:  ;
  --tw-gradient-via-position:  ;
  --tw-gradient-to-position:  ;
  --tw-ordinal:  ;
  --tw-slashed-zero:  ;
  --tw-numeric-figure:  ;
  --tw-numeric-spacing:  ;
  --tw-numeric-fraction:  ;
  --tw-ring-inset:  ;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgb(59 130 246 / 0.5);
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  --tw-blur:  ;
  --tw-brightness:  ;
  --tw-contrast:  ;
  --tw-grayscale:  ;
  --tw-hue-rotate:  ;
  --tw-invert:  ;
  --tw-saturate:  ;
  --tw-sepia:  ;
  --tw-drop-shadow:  ;
  --tw-backdrop-blur:  ;
  --tw-backdrop-brightness:  ;
  --tw-backdrop-contrast:  ;
  --tw-backdrop-grayscale:  ;
  --tw-backdrop-hue-rotate:  ;
  --tw-backdrop-invert:  ;
  --tw-backdrop-opacity:  ;
  --tw-backdrop-saturate:  ;
  --tw-backdrop-sepia:  ;
  --tw-contain-size:  ;
  --tw-contain-layout:  ;
  --tw-contain-paint:  ;
  --tw-contain-style:  ;
}

::backdrop {
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-pan-x:  ;
  --tw-pan-y:  ;
  --tw-pinch-zoom:  ;
  --tw-scroll-snap-strictness: proximity;
  --tw-gradient-from-position:  ;
  --tw-gradient-via-position:  ;
  --tw-gradient-to-position:  ;
  --tw-ordinal:  ;
  --tw-slashed-zero:  ;
  --tw-numeric-figure:  ;
  --tw-numeric-spacing:  ;
  --tw-numeric-fraction:  ;
  --tw-ring-inset:  ;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgb(59 130 246 / 0.5);
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  --tw-blur:  ;
  --tw-brightness:  ;
  --tw-contrast:  ;
  --tw-grayscale:  ;
  --tw-hue-rotate:  ;
  --tw-invert:  ;
  --tw-saturate:  ;
  --tw-sepia:  ;
  --tw-drop-shadow:  ;
  --tw-backdrop-blur:  ;
  --tw-backdrop-brightness:  ;
  --tw-backdrop-contrast:  ;
  --tw-backdrop-grayscale:  ;
  --tw-backdrop-hue-rotate:  ;
  --tw-backdrop-invert:  ;
  --tw-backdrop-opacity:  ;
  --tw-backdrop-saturate:  ;
  --tw-backdrop-sepia:  ;
  --tw-contain-size:  ;
  --tw-contain-layout:  ;
  --tw-contain-paint:  ;
  --tw-contain-style:  ;
}/*
! tailwindcss v3.4.17 | MIT License | https://tailwindcss.com
*//*
1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)
2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)
*/

*,
::before,
::after {
  box-sizing: border-box; /* 1 */
  border-width: 0; /* 2 */
  border-style: solid; /* 2 */
  border-color: #e5e7eb; /* 2 */
}

::before,
::after {
  --tw-content: '';
}

/*
1. Use a consistent sensible line-height in all browsers.
2. Prevent adjustments of font size after orientation changes in iOS.
3. Use a more readable tab size.
4. Use the user's configured \`sans\` font-family by default.
5. Use the user's configured \`sans\` font-feature-settings by default.
6. Use the user's configured \`sans\` font-variation-settings by default.
7. Disable tap highlights on iOS
*/

html,
:host {
  line-height: 1.5; /* 1 */
  -webkit-text-size-adjust: 100%; /* 2 */
  -moz-tab-size: 4; /* 3 */
  -o-tab-size: 4;
     tab-size: 4; /* 3 */
  font-family: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; /* 4 */
  font-feature-settings: normal; /* 5 */
  font-variation-settings: normal; /* 6 */
  -webkit-tap-highlight-color: transparent; /* 7 */
}

/*
1. Remove the margin in all browsers.
2. Inherit line-height from \`html\` so users can set them as a class directly on the \`html\` element.
*/

body {
  margin: 0; /* 1 */
  line-height: inherit; /* 2 */
}

/*
1. Add the correct height in Firefox.
2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)
3. Ensure horizontal rules are visible by default.
*/

hr {
  height: 0; /* 1 */
  color: inherit; /* 2 */
  border-top-width: 1px; /* 3 */
}

/*
Add the correct text decoration in Chrome, Edge, and Safari.
*/

abbr:where([title]) {
  -webkit-text-decoration: underline dotted;
          text-decoration: underline dotted;
}

/*
Remove the default font size and weight for headings.
*/

h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: inherit;
  font-weight: inherit;
}

/*
Reset links to optimize for opt-in styling instead of opt-out.
*/

a {
  color: inherit;
  text-decoration: inherit;
}

/*
Add the correct font weight in Edge and Safari.
*/

b,
strong {
  font-weight: bolder;
}

/*
1. Use the user's configured \`mono\` font-family by default.
2. Use the user's configured \`mono\` font-feature-settings by default.
3. Use the user's configured \`mono\` font-variation-settings by default.
4. Correct the odd \`em\` font sizing in all browsers.
*/

code,
kbd,
samp,
pre {
  font-family: Menlo, Consolas, Monaco, Liberation Mono, Lucida Console, monospace; /* 1 */
  font-feature-settings: normal; /* 2 */
  font-variation-settings: normal; /* 3 */
  font-size: 1em; /* 4 */
}

/*
Add the correct font size in all browsers.
*/

small {
  font-size: 80%;
}

/*
Prevent \`sub\` and \`sup\` elements from affecting the line height in all browsers.
*/

sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

/*
1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)
2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)
3. Remove gaps between table borders by default.
*/

table {
  text-indent: 0; /* 1 */
  border-color: inherit; /* 2 */
  border-collapse: collapse; /* 3 */
}

/*
1. Change the font styles in all browsers.
2. Remove the margin in Firefox and Safari.
3. Remove default padding in all browsers.
*/

button,
input,
optgroup,
select,
textarea {
  font-family: inherit; /* 1 */
  font-feature-settings: inherit; /* 1 */
  font-variation-settings: inherit; /* 1 */
  font-size: 100%; /* 1 */
  font-weight: inherit; /* 1 */
  line-height: inherit; /* 1 */
  letter-spacing: inherit; /* 1 */
  color: inherit; /* 1 */
  margin: 0; /* 2 */
  padding: 0; /* 3 */
}

/*
Remove the inheritance of text transform in Edge and Firefox.
*/

button,
select {
  text-transform: none;
}

/*
1. Correct the inability to style clickable types in iOS and Safari.
2. Remove default button styles.
*/

button,
input:where([type='button']),
input:where([type='reset']),
input:where([type='submit']) {
  -webkit-appearance: button; /* 1 */
  background-color: transparent; /* 2 */
  background-image: none; /* 2 */
}

/*
Use the modern Firefox focus style for all focusable elements.
*/

:-moz-focusring {
  outline: auto;
}

/*
Remove the additional \`:invalid\` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)
*/

:-moz-ui-invalid {
  box-shadow: none;
}

/*
Add the correct vertical alignment in Chrome and Firefox.
*/

progress {
  vertical-align: baseline;
}

/*
Correct the cursor style of increment and decrement buttons in Safari.
*/

::-webkit-inner-spin-button,
::-webkit-outer-spin-button {
  height: auto;
}

/*
1. Correct the odd appearance in Chrome and Safari.
2. Correct the outline style in Safari.
*/

[type='search'] {
  -webkit-appearance: textfield; /* 1 */
  outline-offset: -2px; /* 2 */
}

/*
Remove the inner padding in Chrome and Safari on macOS.
*/

::-webkit-search-decoration {
  -webkit-appearance: none;
}

/*
1. Correct the inability to style clickable types in iOS and Safari.
2. Change font properties to \`inherit\` in Safari.
*/

::-webkit-file-upload-button {
  -webkit-appearance: button; /* 1 */
  font: inherit; /* 2 */
}

/*
Add the correct display in Chrome and Safari.
*/

summary {
  display: list-item;
}

/*
Removes the default spacing and border for appropriate elements.
*/

blockquote,
dl,
dd,
h1,
h2,
h3,
h4,
h5,
h6,
hr,
figure,
p,
pre {
  margin: 0;
}

fieldset {
  margin: 0;
  padding: 0;
}

legend {
  padding: 0;
}

ol,
ul,
menu {
  list-style: none;
  margin: 0;
  padding: 0;
}

/*
Reset default styling for dialogs.
*/
dialog {
  padding: 0;
}

/*
Prevent resizing textareas horizontally by default.
*/

textarea {
  resize: vertical;
}

/*
1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)
2. Set the default placeholder color to the user's configured gray 400 color.
*/

input::-moz-placeholder, textarea::-moz-placeholder {
  opacity: 1; /* 1 */
  color: #9ca3af; /* 2 */
}

input::placeholder,
textarea::placeholder {
  opacity: 1; /* 1 */
  color: #9ca3af; /* 2 */
}

/*
Set the default cursor for buttons.
*/

button,
[role="button"] {
  cursor: pointer;
}

/*
Make sure disabled buttons don't get the pointer cursor.
*/
:disabled {
  cursor: default;
}

/*
1. Make replaced elements \`display: block\` by default. (https://github.com/mozdevs/cssremedy/issues/14)
2. Add \`vertical-align: middle\` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)
   This can trigger a poorly considered lint error in some tools but is included by design.
*/

img,
svg,
video,
canvas,
audio,
iframe,
embed,
object {
  display: block; /* 1 */
  vertical-align: middle; /* 2 */
}

/*
Constrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)
*/

img,
video {
  max-width: 100%;
  height: auto;
}

/* Make elements with the HTML hidden attribute stay hidden by default */
[hidden]:where(:not([hidden="until-found"])) {
  display: none;
}
.\\!container {
  width: 100% !important;
}
.container {
  width: 100%;
}
@media (min-width: 640px) {

  .\\!container {
    max-width: 640px !important;
  }

  .container {
    max-width: 640px;
  }
}
@media (min-width: 768px) {

  .\\!container {
    max-width: 768px !important;
  }

  .container {
    max-width: 768px;
  }
}
@media (min-width: 1024px) {

  .\\!container {
    max-width: 1024px !important;
  }

  .container {
    max-width: 1024px;
  }
}
@media (min-width: 1280px) {

  .\\!container {
    max-width: 1280px !important;
  }

  .container {
    max-width: 1280px;
  }
}
@media (min-width: 1536px) {

  .\\!container {
    max-width: 1536px !important;
  }

  .container {
    max-width: 1536px;
  }
}
.pointer-events-none {
  pointer-events: none;
}
.pointer-events-auto {
  pointer-events: auto;
}
.visible {
  visibility: visible;
}
.static {
  position: static;
}
.fixed {
  position: fixed;
}
.absolute {
  position: absolute;
}
.relative {
  position: relative;
}
.sticky {
  position: sticky;
}
.inset-0 {
  inset: 0px;
}
.inset-x-1 {
  left: 4px;
  right: 4px;
}
.inset-y-0 {
  top: 0px;
  bottom: 0px;
}
.-right-1 {
  right: -4px;
}
.-right-2\\.5 {
  right: -10px;
}
.-top-1 {
  top: -4px;
}
.-top-2\\.5 {
  top: -10px;
}
.bottom-0 {
  bottom: 0px;
}
.bottom-4 {
  bottom: 16px;
}
.left-0 {
  left: 0px;
}
.left-3 {
  left: 12px;
}
.right-0 {
  right: 0px;
}
.right-0\\.5 {
  right: 2px;
}
.right-2 {
  right: 8px;
}
.right-4 {
  right: 16px;
}
.top-0 {
  top: 0px;
}
.top-0\\.5 {
  top: 2px;
}
.top-1\\/2 {
  top: 50%;
}
.top-2 {
  top: 8px;
}
.z-10 {
  z-index: 10;
}
.z-100 {
  z-index: 100;
}
.z-50 {
  z-index: 50;
}
.z-\\[124124124124\\] {
  z-index: 124124124124;
}
.z-\\[214748365\\] {
  z-index: 214748365;
}
.z-\\[214748367\\] {
  z-index: 214748367;
}
.m-\\[2px\\] {
  margin: 2px;
}
.mx-0\\.5 {
  margin-left: 2px;
  margin-right: 2px;
}
.\\!ml-0 {
  margin-left: 0px !important;
}
.mb-1\\.5 {
  margin-bottom: 6px;
}
.mb-2 {
  margin-bottom: 8px;
}
.mb-3 {
  margin-bottom: 12px;
}
.mb-4 {
  margin-bottom: 16px;
}
.mb-px {
  margin-bottom: 1px;
}
.ml-1 {
  margin-left: 4px;
}
.ml-1\\.5 {
  margin-left: 6px;
}
.ml-auto {
  margin-left: auto;
}
.mr-0\\.5 {
  margin-right: 2px;
}
.mr-1 {
  margin-right: 4px;
}
.mr-1\\.5 {
  margin-right: 6px;
}
.mr-16 {
  margin-right: 64px;
}
.mr-auto {
  margin-right: auto;
}
.mt-0\\.5 {
  margin-top: 2px;
}
.mt-1 {
  margin-top: 4px;
}
.mt-4 {
  margin-top: 16px;
}
.block {
  display: block;
}
.inline {
  display: inline;
}
.flex {
  display: flex;
}
.table {
  display: table;
}
.hidden {
  display: none;
}
.aspect-square {
  aspect-ratio: 1 / 1;
}
.h-1 {
  height: 4px;
}
.h-1\\.5 {
  height: 6px;
}
.h-10 {
  height: 40px;
}
.h-12 {
  height: 48px;
}
.h-4 {
  height: 16px;
}
.h-4\\/5 {
  height: 80%;
}
.h-6 {
  height: 24px;
}
.h-7 {
  height: 28px;
}
.h-8 {
  height: 32px;
}
.h-\\[150px\\] {
  height: 150px;
}
.h-\\[235px\\] {
  height: 235px;
}
.h-\\[28px\\] {
  height: 28px;
}
.h-\\[48px\\] {
  height: 48px;
}
.h-\\[50px\\] {
  height: 50px;
}
.h-\\[calc\\(100\\%-150px\\)\\] {
  height: calc(100% - 150px);
}
.h-\\[calc\\(100\\%-200px\\)\\] {
  height: calc(100% - 200px);
}
.h-\\[calc\\(100\\%-25px\\)\\] {
  height: calc(100% - 25px);
}
.h-\\[calc\\(100\\%-40px\\)\\] {
  height: calc(100% - 40px);
}
.h-\\[calc\\(100\\%-48px\\)\\] {
  height: calc(100% - 48px);
}
.h-fit {
  height: -moz-fit-content;
  height: fit-content;
}
.h-full {
  height: 100%;
}
.h-screen {
  height: 100vh;
}
.max-h-0 {
  max-height: 0px;
}
.max-h-40 {
  max-height: 160px;
}
.max-h-9 {
  max-height: 36px;
}
.min-h-9 {
  min-height: 36px;
}
.min-h-\\[48px\\] {
  min-height: 48px;
}
.min-h-fit {
  min-height: -moz-fit-content;
  min-height: fit-content;
}
.w-1 {
  width: 4px;
}
.w-1\\/2 {
  width: 50%;
}
.w-1\\/3 {
  width: 33.333333%;
}
.w-2\\/4 {
  width: 50%;
}
.w-3 {
  width: 12px;
}
.w-4 {
  width: 16px;
}
.w-4\\/5 {
  width: 80%;
}
.w-6 {
  width: 24px;
}
.w-80 {
  width: 320px;
}
.w-\\[20px\\] {
  width: 20px;
}
.w-\\[72px\\] {
  width: 72px;
}
.w-\\[90\\%\\] {
  width: 90%;
}
.w-\\[calc\\(100\\%-200px\\)\\] {
  width: calc(100% - 200px);
}
.w-fit {
  width: -moz-fit-content;
  width: fit-content;
}
.w-full {
  width: 100%;
}
.w-px {
  width: 1px;
}
.w-screen {
  width: 100vw;
}
.min-w-0 {
  min-width: 0px;
}
.min-w-\\[200px\\] {
  min-width: 200px;
}
.min-w-fit {
  min-width: -moz-fit-content;
  min-width: fit-content;
}
.max-w-md {
  max-width: 448px;
}
.flex-1 {
  flex: 1 1 0%;
}
.shrink-0 {
  flex-shrink: 0;
}
.grow {
  flex-grow: 1;
}
.-translate-y-1\\/2 {
  --tw-translate-y: -50%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.-translate-y-\\[200\\%\\] {
  --tw-translate-y: -200%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.translate-y-0 {
  --tw-translate-y: 0px;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.translate-y-1 {
  --tw-translate-y: 4px;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.-rotate-90 {
  --tw-rotate: -90deg;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.rotate-0 {
  --tw-rotate: 0deg;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.rotate-180 {
  --tw-rotate: 180deg;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.rotate-90 {
  --tw-rotate: 90deg;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.scale-110 {
  --tw-scale-x: 1.1;
  --tw-scale-y: 1.1;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.transform {
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
@keyframes fadeIn {

  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}
.animate-fade-in {
  animation: fadeIn ease-in forwards;
}
.cursor-default {
  cursor: default;
}
.cursor-e-resize {
  cursor: e-resize;
}
.cursor-ew-resize {
  cursor: ew-resize;
}
.cursor-move {
  cursor: move;
}
.cursor-nesw-resize {
  cursor: nesw-resize;
}
.cursor-ns-resize {
  cursor: ns-resize;
}
.cursor-nwse-resize {
  cursor: nwse-resize;
}
.cursor-pointer {
  cursor: pointer;
}
.cursor-w-resize {
  cursor: w-resize;
}
.select-none {
  -webkit-user-select: none;
     -moz-user-select: none;
          user-select: none;
}
.resize {
  resize: both;
}
.appearance-none {
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
}
.flex-col {
  flex-direction: column;
}
.items-start {
  align-items: flex-start;
}
.items-end {
  align-items: flex-end;
}
.items-center {
  align-items: center;
}
.items-stretch {
  align-items: stretch;
}
.justify-start {
  justify-content: flex-start;
}
.justify-end {
  justify-content: flex-end;
}
.justify-center {
  justify-content: center;
}
.justify-between {
  justify-content: space-between;
}
.gap-0\\.5 {
  gap: 2px;
}
.gap-1 {
  gap: 4px;
}
.gap-1\\.5 {
  gap: 6px;
}
.gap-2 {
  gap: 8px;
}
.gap-4 {
  gap: 16px;
}
.gap-x-0\\.5 {
  -moz-column-gap: 2px;
       column-gap: 2px;
}
.gap-x-1 {
  -moz-column-gap: 4px;
       column-gap: 4px;
}
.gap-x-1\\.5 {
  -moz-column-gap: 6px;
       column-gap: 6px;
}
.gap-x-2 {
  -moz-column-gap: 8px;
       column-gap: 8px;
}
.gap-x-3 {
  -moz-column-gap: 12px;
       column-gap: 12px;
}
.gap-x-4 {
  -moz-column-gap: 16px;
       column-gap: 16px;
}
.gap-y-0\\.5 {
  row-gap: 2px;
}
.gap-y-1 {
  row-gap: 4px;
}
.gap-y-2 {
  row-gap: 8px;
}
.gap-y-4 {
  row-gap: 16px;
}
.space-y-1\\.5 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(6px * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(6px * var(--tw-space-y-reverse));
}
.divide-y > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-y-reverse: 0;
  border-top-width: calc(1px * calc(1 - var(--tw-divide-y-reverse)));
  border-bottom-width: calc(1px * var(--tw-divide-y-reverse));
}
.divide-zinc-800 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(39 39 42 / var(--tw-divide-opacity, 1));
}
.place-self-center {
  place-self: center;
}
.self-end {
  align-self: flex-end;
}
.overflow-auto {
  overflow: auto;
}
.overflow-hidden {
  overflow: hidden;
}
.\\!overflow-visible {
  overflow: visible !important;
}
.overflow-x-auto {
  overflow-x: auto;
}
.overflow-y-auto {
  overflow-y: auto;
}
.overflow-x-hidden {
  overflow-x: hidden;
}
.truncate {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.whitespace-nowrap {
  white-space: nowrap;
}
.whitespace-pre-wrap {
  white-space: pre-wrap;
}
.text-wrap {
  text-wrap: wrap;
}
.break-words {
  overflow-wrap: break-word;
}
.break-all {
  word-break: break-all;
}
.rounded {
  border-radius: 4px;
}
.rounded-full {
  border-radius: 9999px;
}
.rounded-lg {
  border-radius: 8px;
}
.rounded-md {
  border-radius: 6px;
}
.rounded-sm {
  border-radius: 2px;
}
.rounded-l-md {
  border-top-left-radius: 6px;
  border-bottom-left-radius: 6px;
}
.rounded-l-sm {
  border-top-left-radius: 2px;
  border-bottom-left-radius: 2px;
}
.rounded-r-md {
  border-top-right-radius: 6px;
  border-bottom-right-radius: 6px;
}
.rounded-r-sm {
  border-top-right-radius: 2px;
  border-bottom-right-radius: 2px;
}
.rounded-t-lg {
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}
.rounded-t-sm {
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}
.rounded-bl-lg {
  border-bottom-left-radius: 8px;
}
.rounded-br-lg {
  border-bottom-right-radius: 8px;
}
.rounded-tl-lg {
  border-top-left-radius: 8px;
}
.rounded-tr-lg {
  border-top-right-radius: 8px;
}
.border {
  border-width: 1px;
}
.border-4 {
  border-width: 4px;
}
.border-b {
  border-bottom-width: 1px;
}
.border-l {
  border-left-width: 1px;
}
.border-l-0 {
  border-left-width: 0px;
}
.border-l-1 {
  border-left-width: 1px;
}
.border-r {
  border-right-width: 1px;
}
.border-t {
  border-top-width: 1px;
}
.border-none {
  border-style: none;
}
.\\!border-red-500 {
  --tw-border-opacity: 1 !important;
  border-color: rgb(239 68 68 / var(--tw-border-opacity, 1)) !important;
}
.border-\\[\\#1e1e1e\\] {
  --tw-border-opacity: 1;
  border-color: rgb(30 30 30 / var(--tw-border-opacity, 1));
}
.border-\\[\\#222\\] {
  --tw-border-opacity: 1;
  border-color: rgb(34 34 34 / var(--tw-border-opacity, 1));
}
.border-\\[\\#27272A\\] {
  --tw-border-opacity: 1;
  border-color: rgb(39 39 42 / var(--tw-border-opacity, 1));
}
.border-\\[\\#333\\] {
  --tw-border-opacity: 1;
  border-color: rgb(51 51 51 / var(--tw-border-opacity, 1));
}
.border-transparent {
  border-color: transparent;
}
.border-zinc-800 {
  --tw-border-opacity: 1;
  border-color: rgb(39 39 42 / var(--tw-border-opacity, 1));
}
.bg-\\[\\#0A0A0A\\] {
  --tw-bg-opacity: 1;
  background-color: rgb(10 10 10 / var(--tw-bg-opacity, 1));
}
.bg-\\[\\#141414\\] {
  --tw-bg-opacity: 1;
  background-color: rgb(20 20 20 / var(--tw-bg-opacity, 1));
}
.bg-\\[\\#18181B\\] {
  --tw-bg-opacity: 1;
  background-color: rgb(24 24 27 / var(--tw-bg-opacity, 1));
}
.bg-\\[\\#18181B\\]\\/50 {
  background-color: rgb(24 24 27 / 0.5);
}
.bg-\\[\\#1D3A66\\] {
  --tw-bg-opacity: 1;
  background-color: rgb(29 58 102 / var(--tw-bg-opacity, 1));
}
.bg-\\[\\#1E1E1E\\] {
  --tw-bg-opacity: 1;
  background-color: rgb(30 30 30 / var(--tw-bg-opacity, 1));
}
.bg-\\[\\#1a2a1a\\] {
  --tw-bg-opacity: 1;
  background-color: rgb(26 42 26 / var(--tw-bg-opacity, 1));
}
.bg-\\[\\#1e1e1e\\] {
  --tw-bg-opacity: 1;
  background-color: rgb(30 30 30 / var(--tw-bg-opacity, 1));
}
.bg-\\[\\#214379d4\\] {
  background-color: #214379d4;
}
.bg-\\[\\#27272A\\] {
  --tw-bg-opacity: 1;
  background-color: rgb(39 39 42 / var(--tw-bg-opacity, 1));
}
.bg-\\[\\#2a1515\\] {
  --tw-bg-opacity: 1;
  background-color: rgb(42 21 21 / var(--tw-bg-opacity, 1));
}
.bg-\\[\\#412162\\] {
  --tw-bg-opacity: 1;
  background-color: rgb(65 33 98 / var(--tw-bg-opacity, 1));
}
.bg-\\[\\#44444a\\] {
  --tw-bg-opacity: 1;
  background-color: rgb(68 68 74 / var(--tw-bg-opacity, 1));
}
.bg-\\[\\#4b4b4b\\] {
  --tw-bg-opacity: 1;
  background-color: rgb(75 75 75 / var(--tw-bg-opacity, 1));
}
.bg-\\[\\#5f3f9a\\] {
  --tw-bg-opacity: 1;
  background-color: rgb(95 63 154 / var(--tw-bg-opacity, 1));
}
.bg-\\[\\#5f3f9a\\]\\/40 {
  background-color: rgb(95 63 154 / 0.4);
}
.bg-\\[\\#6a369e\\] {
  --tw-bg-opacity: 1;
  background-color: rgb(106 54 158 / var(--tw-bg-opacity, 1));
}
.bg-\\[\\#7521c8\\] {
  --tw-bg-opacity: 1;
  background-color: rgb(117 33 200 / var(--tw-bg-opacity, 1));
}
.bg-\\[\\#8e61e3\\] {
  --tw-bg-opacity: 1;
  background-color: rgb(142 97 227 / var(--tw-bg-opacity, 1));
}
.bg-\\[\\#EFD81A\\] {
  --tw-bg-opacity: 1;
  background-color: rgb(239 216 26 / var(--tw-bg-opacity, 1));
}
.bg-\\[\\#b77116\\] {
  --tw-bg-opacity: 1;
  background-color: rgb(183 113 22 / var(--tw-bg-opacity, 1));
}
.bg-\\[\\#b94040\\] {
  --tw-bg-opacity: 1;
  background-color: rgb(185 64 64 / var(--tw-bg-opacity, 1));
}
.bg-\\[\\#d36cff\\] {
  --tw-bg-opacity: 1;
  background-color: rgb(211 108 255 / var(--tw-bg-opacity, 1));
}
.bg-\\[\\#efd81a6b\\] {
  background-color: #efd81a6b;
}
.bg-black {
  --tw-bg-opacity: 1;
  background-color: rgb(0 0 0 / var(--tw-bg-opacity, 1));
}
.bg-black\\/40 {
  background-color: rgb(0 0 0 / 0.4);
}
.bg-gray-200 {
  --tw-bg-opacity: 1;
  background-color: rgb(229 231 235 / var(--tw-bg-opacity, 1));
}
.bg-green-500\\/50 {
  background-color: rgb(34 197 94 / 0.5);
}
.bg-green-500\\/60 {
  background-color: rgb(34 197 94 / 0.6);
}
.bg-neutral-700 {
  --tw-bg-opacity: 1;
  background-color: rgb(64 64 64 / var(--tw-bg-opacity, 1));
}
.bg-purple-500 {
  --tw-bg-opacity: 1;
  background-color: rgb(168 85 247 / var(--tw-bg-opacity, 1));
}
.bg-purple-500\\/90 {
  background-color: rgb(168 85 247 / 0.9);
}
.bg-purple-800 {
  --tw-bg-opacity: 1;
  background-color: rgb(107 33 168 / var(--tw-bg-opacity, 1));
}
.bg-red-500 {
  --tw-bg-opacity: 1;
  background-color: rgb(239 68 68 / var(--tw-bg-opacity, 1));
}
.bg-red-500\\/90 {
  background-color: rgb(239 68 68 / 0.9);
}
.bg-red-950\\/50 {
  background-color: rgb(69 10 10 / 0.5);
}
.bg-transparent {
  background-color: transparent;
}
.bg-white {
  --tw-bg-opacity: 1;
  background-color: rgb(255 255 255 / var(--tw-bg-opacity, 1));
}
.bg-yellow-300 {
  --tw-bg-opacity: 1;
  background-color: rgb(253 224 71 / var(--tw-bg-opacity, 1));
}
.bg-zinc-800 {
  --tw-bg-opacity: 1;
  background-color: rgb(39 39 42 / var(--tw-bg-opacity, 1));
}
.bg-zinc-900\\/30 {
  background-color: rgb(24 24 27 / 0.3);
}
.bg-zinc-900\\/50 {
  background-color: rgb(24 24 27 / 0.5);
}
.p-0 {
  padding: 0px;
}
.p-1 {
  padding: 4px;
}
.p-2 {
  padding: 8px;
}
.p-3 {
  padding: 12px;
}
.p-4 {
  padding: 16px;
}
.p-5 {
  padding: 20px;
}
.p-6 {
  padding: 24px;
}
.px-1 {
  padding-left: 4px;
  padding-right: 4px;
}
.px-1\\.5 {
  padding-left: 6px;
  padding-right: 6px;
}
.px-2 {
  padding-left: 8px;
  padding-right: 8px;
}
.px-2\\.5 {
  padding-left: 10px;
  padding-right: 10px;
}
.px-3 {
  padding-left: 12px;
  padding-right: 12px;
}
.px-4 {
  padding-left: 16px;
  padding-right: 16px;
}
.py-0\\.5 {
  padding-top: 2px;
  padding-bottom: 2px;
}
.py-1 {
  padding-top: 4px;
  padding-bottom: 4px;
}
.py-1\\.5 {
  padding-top: 6px;
  padding-bottom: 6px;
}
.py-2 {
  padding-top: 8px;
  padding-bottom: 8px;
}
.py-3 {
  padding-top: 12px;
  padding-bottom: 12px;
}
.py-4 {
  padding-top: 16px;
  padding-bottom: 16px;
}
.py-\\[1px\\] {
  padding-top: 1px;
  padding-bottom: 1px;
}
.py-\\[3px\\] {
  padding-top: 3px;
  padding-bottom: 3px;
}
.py-\\[5px\\] {
  padding-top: 5px;
  padding-bottom: 5px;
}
.pb-2 {
  padding-bottom: 8px;
}
.pl-1 {
  padding-left: 4px;
}
.pl-2 {
  padding-left: 8px;
}
.pl-2\\.5 {
  padding-left: 10px;
}
.pl-3 {
  padding-left: 12px;
}
.pl-5 {
  padding-left: 20px;
}
.pl-6 {
  padding-left: 24px;
}
.pr-1 {
  padding-right: 4px;
}
.pr-1\\.5 {
  padding-right: 6px;
}
.pr-2 {
  padding-right: 8px;
}
.pr-2\\.5 {
  padding-right: 10px;
}
.pt-0 {
  padding-top: 0px;
}
.pt-2 {
  padding-top: 8px;
}
.pt-5 {
  padding-top: 20px;
}
.text-left {
  text-align: left;
}
.font-mono {
  font-family: Menlo, Consolas, Monaco, Liberation Mono, Lucida Console, monospace;
}
.text-\\[10px\\] {
  font-size: 10px;
}
.text-\\[11px\\] {
  font-size: 11px;
}
.text-\\[13px\\] {
  font-size: 13px;
}
.text-\\[14px\\] {
  font-size: 14px;
}
.text-\\[17px\\] {
  font-size: 17px;
}
.text-\\[8px\\] {
  font-size: 8px;
}
.text-sm {
  font-size: 14px;
  line-height: 20px;
}
.text-xs {
  font-size: 12px;
  line-height: 16px;
}
.font-bold {
  font-weight: 700;
}
.font-medium {
  font-weight: 500;
}
.font-semibold {
  font-weight: 600;
}
.uppercase {
  text-transform: uppercase;
}
.lowercase {
  text-transform: lowercase;
}
.capitalize {
  text-transform: capitalize;
}
.italic {
  font-style: italic;
}
.leading-6 {
  line-height: 24px;
}
.leading-none {
  line-height: 1;
}
.tracking-wide {
  letter-spacing: 0.025em;
}
.text-\\[\\#4ade80\\] {
  --tw-text-opacity: 1;
  color: rgb(74 222 128 / var(--tw-text-opacity, 1));
}
.text-\\[\\#5a5a5a\\] {
  --tw-text-opacity: 1;
  color: rgb(90 90 90 / var(--tw-text-opacity, 1));
}
.text-\\[\\#65656D\\] {
  --tw-text-opacity: 1;
  color: rgb(101 101 109 / var(--tw-text-opacity, 1));
}
.text-\\[\\#666\\] {
  --tw-text-opacity: 1;
  color: rgb(102 102 102 / var(--tw-text-opacity, 1));
}
.text-\\[\\#6E6E77\\] {
  --tw-text-opacity: 1;
  color: rgb(110 110 119 / var(--tw-text-opacity, 1));
}
.text-\\[\\#6F6F78\\] {
  --tw-text-opacity: 1;
  color: rgb(111 111 120 / var(--tw-text-opacity, 1));
}
.text-\\[\\#7346a0\\] {
  --tw-text-opacity: 1;
  color: rgb(115 70 160 / var(--tw-text-opacity, 1));
}
.text-\\[\\#737373\\] {
  --tw-text-opacity: 1;
  color: rgb(115 115 115 / var(--tw-text-opacity, 1));
}
.text-\\[\\#888\\] {
  --tw-text-opacity: 1;
  color: rgb(136 136 136 / var(--tw-text-opacity, 1));
}
.text-\\[\\#8E61E3\\] {
  --tw-text-opacity: 1;
  color: rgb(142 97 227 / var(--tw-text-opacity, 1));
}
.text-\\[\\#999\\] {
  --tw-text-opacity: 1;
  color: rgb(153 153 153 / var(--tw-text-opacity, 1));
}
.text-\\[\\#A1A1AA\\] {
  --tw-text-opacity: 1;
  color: rgb(161 161 170 / var(--tw-text-opacity, 1));
}
.text-\\[\\#A855F7\\] {
  --tw-text-opacity: 1;
  color: rgb(168 85 247 / var(--tw-text-opacity, 1));
}
.text-\\[\\#E4E4E7\\] {
  --tw-text-opacity: 1;
  color: rgb(228 228 231 / var(--tw-text-opacity, 1));
}
.text-\\[\\#d36cff\\] {
  --tw-text-opacity: 1;
  color: rgb(211 108 255 / var(--tw-text-opacity, 1));
}
.text-\\[\\#f87171\\] {
  --tw-text-opacity: 1;
  color: rgb(248 113 113 / var(--tw-text-opacity, 1));
}
.text-black {
  --tw-text-opacity: 1;
  color: rgb(0 0 0 / var(--tw-text-opacity, 1));
}
.text-gray-100 {
  --tw-text-opacity: 1;
  color: rgb(243 244 246 / var(--tw-text-opacity, 1));
}
.text-gray-300 {
  --tw-text-opacity: 1;
  color: rgb(209 213 219 / var(--tw-text-opacity, 1));
}
.text-gray-400 {
  --tw-text-opacity: 1;
  color: rgb(156 163 175 / var(--tw-text-opacity, 1));
}
.text-gray-500 {
  --tw-text-opacity: 1;
  color: rgb(107 114 128 / var(--tw-text-opacity, 1));
}
.text-green-500 {
  --tw-text-opacity: 1;
  color: rgb(34 197 94 / var(--tw-text-opacity, 1));
}
.text-neutral-300 {
  --tw-text-opacity: 1;
  color: rgb(212 212 212 / var(--tw-text-opacity, 1));
}
.text-neutral-400 {
  --tw-text-opacity: 1;
  color: rgb(163 163 163 / var(--tw-text-opacity, 1));
}
.text-neutral-500 {
  --tw-text-opacity: 1;
  color: rgb(115 115 115 / var(--tw-text-opacity, 1));
}
.text-purple-400 {
  --tw-text-opacity: 1;
  color: rgb(192 132 252 / var(--tw-text-opacity, 1));
}
.text-red-300 {
  --tw-text-opacity: 1;
  color: rgb(252 165 165 / var(--tw-text-opacity, 1));
}
.text-red-400 {
  --tw-text-opacity: 1;
  color: rgb(248 113 113 / var(--tw-text-opacity, 1));
}
.text-red-500 {
  --tw-text-opacity: 1;
  color: rgb(239 68 68 / var(--tw-text-opacity, 1));
}
.text-white {
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity, 1));
}
.text-white\\/30 {
  color: rgb(255 255 255 / 0.3);
}
.text-white\\/70 {
  color: rgb(255 255 255 / 0.7);
}
.text-yellow-300 {
  --tw-text-opacity: 1;
  color: rgb(253 224 71 / var(--tw-text-opacity, 1));
}
.text-yellow-500 {
  --tw-text-opacity: 1;
  color: rgb(234 179 8 / var(--tw-text-opacity, 1));
}
.text-zinc-200 {
  --tw-text-opacity: 1;
  color: rgb(228 228 231 / var(--tw-text-opacity, 1));
}
.text-zinc-400 {
  --tw-text-opacity: 1;
  color: rgb(161 161 170 / var(--tw-text-opacity, 1));
}
.text-zinc-500 {
  --tw-text-opacity: 1;
  color: rgb(113 113 122 / var(--tw-text-opacity, 1));
}
.text-zinc-600 {
  --tw-text-opacity: 1;
  color: rgb(82 82 91 / var(--tw-text-opacity, 1));
}
.opacity-0 {
  opacity: 0;
}
.opacity-100 {
  opacity: 1;
}
.opacity-50 {
  opacity: 0.5;
}
.shadow-lg {
  --tw-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}
.outline {
  outline-style: solid;
}
.ring-1 {
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
}
.ring-white\\/\\[0\\.08\\] {
  --tw-ring-color: rgb(255 255 255 / 0.08);
}
.blur {
  --tw-blur: blur(8px);
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
}
.\\!filter {
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow) !important;
}
.filter {
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
}
.backdrop-blur-sm {
  --tw-backdrop-blur: blur(4px);
  -webkit-backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
  backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
}
.transition {
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
.transition-\\[border-radius\\] {
  transition-property: border-radius;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
.transition-\\[color\\2c transform\\] {
  transition-property: color,transform;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
.transition-\\[max-height\\] {
  transition-property: max-height;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
.transition-\\[opacity\\] {
  transition-property: opacity;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
.transition-all {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
.transition-colors {
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
.transition-none {
  transition-property: none;
}
.transition-opacity {
  transition-property: opacity;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
.transition-transform {
  transition-property: transform;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
.delay-0 {
  transition-delay: 0s;
}
.delay-150 {
  transition-delay: 150ms;
}
.delay-300 {
  transition-delay: 300ms;
}
.\\!duration-0 {
  transition-duration: 0s !important;
}
.duration-0 {
  transition-duration: 0s;
}
.duration-200 {
  transition-duration: 200ms;
}
.duration-300 {
  transition-duration: 300ms;
}
.ease-\\[cubic-bezier\\(0\\.23\\2c 1\\2c 0\\.32\\2c 1\\)\\] {
  transition-timing-function: cubic-bezier(0.23,1,0.32,1);
}
.ease-\\[cubic-bezier\\(0\\.25\\2c 0\\.1\\2c 0\\.25\\2c 1\\)\\] {
  transition-timing-function: cubic-bezier(0.25,0.1,0.25,1);
}
.ease-in-out {
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}
.ease-out {
  transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
}
.will-change-transform {
  will-change: transform;
}
.animation-duration-300 {
  animation-duration: .3s;
}
.animation-delay-300 {
  animation-delay: .3s;
}
.\\[touch-action\\:none\\] {
  touch-action: none;
}

* {
  outline: none !important;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  backface-visibility: hidden;

  /* WebKit (Chrome, Safari, Edge) specific scrollbar styles */
  &::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }

  &::-webkit-scrollbar-track {
    border-radius: 10px;
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: rgba(255, 255, 255, 0.3);
  }

  &::-webkit-scrollbar-thumb:hover {
    background: rgba(255, 255, 255, 0.4);
  }

  &::-webkit-scrollbar-corner {
    background: transparent;
  }
}

@-moz-document url-prefix() {
  * {
    scrollbar-width: thin;
    scrollbar-color: rgba(255, 255, 255, 0.4) transparent;
    scrollbar-width: 6px;
  }
}

button:hover {
  background-image: none;
}

button {
  outline: 2px solid transparent;
  outline-offset: 2px;
  border-style: none;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  transition-timing-function: linear;
  cursor: pointer;
}

input {
  border-style: none;
  background-color: transparent;
  background-image: none;
  outline: 2px solid transparent;
  outline-offset: 2px;
}

input::-moz-placeholder {
  font-size: 12px;
  line-height: 16px;
  font-style: italic;
  --tw-text-opacity: 1;
  color: rgb(115 115 115 / var(--tw-text-opacity, 1));
}

input::placeholder {
  font-size: 12px;
  line-height: 16px;
  font-style: italic;
  --tw-text-opacity: 1;
  color: rgb(115 115 115 / var(--tw-text-opacity, 1));
}

input:-moz-placeholder-shown {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

input:placeholder-shown {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

svg {
  height: auto;
  width: auto;
  pointer-events: none;
}

/*
  Using CSS content with data attributes is more performant than:
  1. React re-renders with JSX text content
  2. Direct DOM manipulation methods:
     - element.textContent (creates/updates text nodes, triggers repaint)
     - element.innerText (triggers reflow by computing styles & layout)
     - element.innerHTML (heavy parsing, triggers reflow, security risks)
  3. Multiple data attributes with complex CSS concatenation

  This approach:
  - Avoids React reconciliation
  - Uses browser's native CSS engine (optimized content updates)
  - Minimizes main thread work
  - Reduces DOM operations
  - Avoids forced reflows (layout recalculation)
  - Only triggers necessary repaints
  - Keeps pseudo-element updates in render layer
*/
.with-data-text {
  overflow: hidden;
  &::before {
    content: attr(data-text);
  }
  &::before {
    display: block;
  }
  &::before {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}

#react-scan-toolbar {
  position: fixed;
  left: 0px;
  top: 0px;
  display: flex;
  flex-direction: column;
  --tw-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
  font-family: Menlo, Consolas, Monaco, Liberation Mono, Lucida Console, monospace;
  font-size: 13px;
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity, 1));
  --tw-bg-opacity: 1;
  background-color: rgb(0 0 0 / var(--tw-bg-opacity, 1));
  -webkit-user-select: none;
     -moz-user-select: none;
          user-select: none;
  cursor: move;
  opacity: 0;
  z-index: 2147483678;
}

@keyframes fadeIn {

  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

#react-scan-toolbar {
  animation: fadeIn ease-in forwards;
  animation-duration: .3s;
  animation-delay: .3s;
  --tw-shadow: 0 4px 12px rgba(0,0,0,0.2);
  --tw-shadow-colored: 0 4px 12px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
  place-self: start;

  /* [CURSOR GENERATED] Anti-blur fixes:
   * We removed will-change-transform and replaced it with these properties
   * because will-change was causing stacking context issues and inconsistent
   * text rendering. The new properties work together to force proper
   * GPU acceleration without z-index side effects:
   */
  transform: translate3d(
    0,
    0,
    0
  ); /* Forces GPU acceleration without causing stacking issues */
  backface-visibility: hidden; /* Prevents blurry text during transforms */
  perspective: 1000; /* Creates proper 3D context for crisp text */ /* Ensures consistent text rendering across browsers */
  transform-style: preserve-3d;
}

.button {
  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }

  &:active {
    background: rgba(255, 255, 255, 0.15);
  }
}

.resize-line-wrapper {
  position: absolute;
  overflow: hidden;
}

.resize-line {
  position: absolute;
  inset: 0px;
  overflow: hidden;
  --tw-bg-opacity: 1;
  background-color: rgb(0 0 0 / var(--tw-bg-opacity, 1));
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;

  svg {
    position: absolute;
  }

  svg {
    top: 50%;
  }

  svg {
    left: 50%;
  }

  svg {
    --tw-translate-x: -50%;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }

  svg {
    --tw-translate-y: -50%;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }
}

.resize-right,
.resize-left {
  top: 0px;
  bottom: 0px;
  width: 24px;
  cursor: ew-resize;

  .resize-line-wrapper {
    top: 0px;
    bottom: 0px;
  }

  .resize-line-wrapper {
    width: 50%;
  }

  &:hover {
    .resize-line {
      --tw-translate-x: 0px;
      transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
    }
  }
}
.resize-right {
  right: 0px;
  --tw-translate-x: 50%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));

  .resize-line-wrapper {
    right: 0px;
  }
  .resize-line {
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
  }
  .resize-line {
    --tw-translate-x: -100%;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }
}

.resize-left {
  left: 0px;
  --tw-translate-x: -50%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));

  .resize-line-wrapper {
    left: 0px;
  }
  .resize-line {
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
  }
  .resize-line {
    --tw-translate-x: 100%;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }
}

.resize-top,
.resize-bottom {
  left: 0px;
  right: 0px;
  height: 24px;
  cursor: ns-resize;

  .resize-line-wrapper {
    left: 0px;
    right: 0px;
  }

  .resize-line-wrapper {
    height: 50%;
  }

  &:hover {
    .resize-line {
      --tw-translate-y: 0px;
      transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
    }
  }
}
.resize-top {
  top: 0px;
  --tw-translate-y: -50%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));

  .resize-line-wrapper {
    top: 0px;
  }
  .resize-line {
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  }
  .resize-line {
    --tw-translate-y: 100%;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }
}

.resize-bottom {
  bottom: 0px;
  --tw-translate-y: 50%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));

  .resize-line-wrapper {
    bottom: 0px;
  }
  .resize-line {
    border-bottom-right-radius: 8px;
    border-bottom-left-radius: 8px;
  }
  .resize-line {
    --tw-translate-y: -100%;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }
}

.react-scan-header {
  display: flex;
  align-items: center;
  -moz-column-gap: 8px;
       column-gap: 8px;
  padding-left: 12px;
  padding-right: 8px;
  min-height: 36px;
  border-bottom-width: 1px;
  --tw-border-opacity: 1;
  border-color: rgb(34 34 34 / var(--tw-border-opacity, 1));
  overflow: hidden;
  white-space: nowrap;
}

.react-scan-replay-button,
.react-scan-close-button {
  display: flex;
  align-items: center;
  padding: 4px;
  min-width: -moz-fit-content;
  min-width: fit-content;
  border-radius: 4px;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
}

.react-scan-replay-button {
  position: relative;
  overflow: hidden;
  background-color: rgb(168 85 247 / 0.5) !important;

  &:hover {
    background-color: rgb(168 85 247 / 0.25);
  }

  &.disabled {
    opacity: 0.5;
  }

  &.disabled {
    pointer-events: none;
  }

  &:before {
    content: "";
  }

  &:before {
    position: absolute;
  }

  &:before {
    inset: 0px;
  }

  &:before {
    --tw-translate-x: -100%;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }

  &:before {
    animation: shimmer 2s infinite;
    background: linear-gradient(
      to right,
      transparent,
      rgba(142, 97, 227, 0.3),
      transparent
    );
  }
}

.react-scan-close-button {
  background-color: rgb(255 255 255 / 0.1);

  &:hover {
    background-color: rgb(255 255 255 / 0.15);
  }
}

@keyframes shimmer {
  100% {
    --tw-translate-x: 100%;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }
}

.react-section-header {
  position: sticky;
  z-index: 100;
  display: flex;
  align-items: center;
  -moz-column-gap: 8px;
       column-gap: 8px;
  padding-left: 12px;
  padding-right: 12px;
  height: 28px;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  --tw-text-opacity: 1;
  color: rgb(136 136 136 / var(--tw-text-opacity, 1));
  border-bottom-width: 1px;
  --tw-border-opacity: 1;
  border-color: rgb(34 34 34 / var(--tw-border-opacity, 1));
  --tw-bg-opacity: 1;
  background-color: rgb(10 10 10 / var(--tw-bg-opacity, 1));
}

.react-scan-section {
  display: flex;
  flex-direction: column;
  padding-left: 8px;
  padding-right: 8px;
  --tw-text-opacity: 1;
  color: rgb(136 136 136 / var(--tw-text-opacity, 1));
}

.react-scan-section::before {
  --tw-text-opacity: 1;
  color: rgb(107 114 128 / var(--tw-text-opacity, 1));
  --tw-content: attr(data-section);
  content: var(--tw-content);
}

.react-scan-section {
  font-size: 12px;
  line-height: 16px;

  > .react-scan-property {
    margin-left: -14px;
  }
}

.react-scan-property {
  position: relative;
  display: flex;
  flex-direction: column;
  padding-left: 32px;
  border-left-width: 1px;
  border-color: transparent;
  overflow: hidden;
}

.react-scan-property-content {
  display: flex;
  flex: 1 1 0%;
  flex-direction: column;
  min-height: 28px;
  max-width: 100%;
  overflow: hidden;
}

.react-scan-string {
  color: #9ecbff;
}

.react-scan-number {
  color: #79c7ff;
}

.react-scan-boolean {
  color: #56b6c2;
}

.react-scan-key {
  width: -moz-fit-content;
  width: fit-content;
  max-width: 240px;
  white-space: nowrap;
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity, 1));
}

.react-scan-input {
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity, 1));
  --tw-bg-opacity: 1;
  background-color: rgb(0 0 0 / var(--tw-bg-opacity, 1));
}

@keyframes blink {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}

.react-scan-arrow {
  position: absolute;
  top: 0px;
  left: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  height: 28px;
  width: 24px;
  --tw-translate-x: -100%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  z-index: 10;

  > svg {
    transition-property: transform;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
  }
}

.react-scan-expandable {
  display: grid;
  grid-template-rows: 0fr;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 75ms;

  &.react-scan-expanded {
    grid-template-rows: 1fr;
  }

  &.react-scan-expanded {
    transition-duration: 100ms;
  }
}

.react-scan-nested {
  position: relative;
  overflow: hidden;

  &:before {
    content: "";
  }

  &:before {
    position: absolute;
  }

  &:before {
    top: 0px;
  }

  &:before {
    left: 0px;
  }

  &:before {
    height: 100%;
  }

  &:before {
    width: 1px;
  }

  &:before {
    background-color: rgb(107 114 128 / 0.3);
  }
}

.react-scan-settings {
  position: absolute;
  inset: 0px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 16px;
  padding-right: 16px;
  --tw-text-opacity: 1;
  color: rgb(136 136 136 / var(--tw-text-opacity, 1));

  > div {
    display: flex;
  }

  > div {
    align-items: center;
  }

  > div {
    justify-content: space-between;
  }

  > div {
    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
  }

  > div {
    transition-duration: 300ms;
  }
}

.react-scan-preview-line {
  position: relative;
  display: flex;
  min-height: 28px;
  align-items: center;
  -moz-column-gap: 8px;
       column-gap: 8px;
}

.react-scan-flash-overlay {
  position: absolute;
  inset: 0px;
  opacity: 0;
  z-index: 50;
  pointer-events: none;
  transition-property: opacity;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  mix-blend-mode: multiply;
  background-color: rgb(168 85 247 / 0.9);
}

.react-scan-toggle {
  position: relative;
  display: inline-flex;
  height: 24px;
  width: 40px;

  input {
    position: absolute;
  }

  input {
    inset: 0px;
  }

  input {
    z-index: 20;
  }

  input {
    opacity: 0;
  }

  input {
    cursor: pointer;
  }

  input {
    height: 100%;
  }

  input {
    width: 100%;
  }

  input:checked {
    + div {
      --tw-bg-opacity: 1;
      background-color: rgb(95 63 154 / var(--tw-bg-opacity, 1));
    }
    + div {

      &::before {
        --tw-translate-x: 100%;
        transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
      }

      &::before {
        left: auto;
      }

      &::before {
        --tw-border-opacity: 1;
        border-color: rgb(95 63 154 / var(--tw-border-opacity, 1));
      }
    }
  }

  > div {
    position: absolute;
  }

  > div {
    inset: 4px;
  }

  > div {
    --tw-bg-opacity: 1;
    background-color: rgb(64 64 64 / var(--tw-bg-opacity, 1));
  }

  > div {
    border-radius: 9999px;
  }

  > div {
    pointer-events: none;
  }

  > div {
    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
  }

  > div {
    transition-duration: 300ms;
  }

  > div {

    &:before {
      --tw-content: '';
      content: var(--tw-content);
    }

    &:before {
      position: absolute;
    }

    &:before {
      top: 50%;
    }

    &:before {
      left: 0px;
    }

    &:before {
      --tw-translate-y: -50%;
      transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
    }

    &:before {
      height: 16px;
    }

    &:before {
      width: 16px;
    }

    &:before {
      --tw-bg-opacity: 1;
      background-color: rgb(255 255 255 / var(--tw-bg-opacity, 1));
    }

    &:before {
      border-width: 2px;
    }

    &:before {
      --tw-border-opacity: 1;
      border-color: rgb(64 64 64 / var(--tw-border-opacity, 1));
    }

    &:before {
      border-radius: 9999px;
    }

    &:before {
      --tw-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
      --tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);
      box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
    }

    &:before {
      transition-property: all;
      transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
      transition-duration: 150ms;
    }

    &:before {
      transition-duration: 300ms;
    }
  }
}

.react-scan-flash-active {
  opacity: 0.4;
  transition-property: opacity;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
}

.react-scan-inspector-overlay {
  display: flex;
  flex-direction: column;
  opacity: 0;
  transition-property: opacity;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;

  &.fade-out {
    opacity: 0;
  }

  &.fade-in {
    opacity: 1;
  }
}

.react-scan-what-changed {
  ul {
    list-style-type: disc;
  }
  ul {
    padding-left: 16px;
  }

  li {
    white-space: nowrap;
  }

  li {
    > div {
      display: flex;
    }
    > div {
      align-items: center;
    }
    > div {
      justify-content: space-between;
    }
    > div {
      -moz-column-gap: 8px;
           column-gap: 8px;
    }
  }
}

.count-badge {
  display: flex;
  align-items: center;
  -moz-column-gap: 8px;
       column-gap: 8px;
  padding-left: 6px;
  padding-right: 6px;
  padding-top: 2px;
  padding-bottom: 2px;
  border-radius: 4px;
  font-size: 12px;
  line-height: 16px;
  font-weight: 500;
  --tw-numeric-spacing: tabular-nums;
  font-variant-numeric: var(--tw-ordinal) var(--tw-slashed-zero) var(--tw-numeric-figure) var(--tw-numeric-spacing) var(--tw-numeric-fraction);
  --tw-text-opacity: 1;
  color: rgb(168 85 247 / var(--tw-text-opacity, 1));
  background-color: rgb(168 85 247 / 0.1);
  transform-origin: center;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-delay: 150ms;
  transition-duration: 300ms;
}

@keyframes countFlash {

  0% {
    background-color: rgba(168, 85, 247, 0.3);
    transform: scale(1.05);
  }

  100% {
    background-color: rgba(168, 85, 247, 0.1);
    transform: scale(1);
  }
}

.count-flash {
  animation: countFlash .3s ease-out forwards;
}

@keyframes countFlashShake {

  0% {
    transform: translateX(0);
  }

  25% {
    transform: translateX(-5px);
  }

  50% {
    transform: translateX(5px) scale(1.1);
  }

  75% {
    transform: translateX(-5px);
  }

  100% {
    transform: translateX(0);
  }
}

.count-flash-white {
  animation: countFlashShake .3s ease-out forwards;
  transition-delay: 500ms !important;
}

.change-scope {
  display: flex;
  align-items: center;
  -moz-column-gap: 4px;
       column-gap: 4px;
  --tw-text-opacity: 1;
  color: rgb(102 102 102 / var(--tw-text-opacity, 1));
  font-size: 12px;
  line-height: 16px;
  font-family: Menlo, Consolas, Monaco, Liberation Mono, Lucida Console, monospace;

  > div {
    padding-left: 6px;
    padding-right: 6px;
  }

  > div {
    padding-top: 2px;
    padding-bottom: 2px;
  }

  > div {
    transform-origin: center;
  }

  > div {
    border-radius: 4px;
  }

  > div {
    font-size: 12px;
    line-height: 16px;
  }

  > div {
    font-weight: 500;
  }

  > div {
    --tw-numeric-spacing: tabular-nums;
    font-variant-numeric: var(--tw-ordinal) var(--tw-slashed-zero) var(--tw-numeric-figure) var(--tw-numeric-spacing) var(--tw-numeric-fraction);
  }

  > div {
    transform-origin: center;
  }

  > div {
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
  }

  > div {
    transition-delay: 150ms;
  }

  > div {
    transition-duration: 300ms;
  }

  > div {

    &[data-flash="true"] {
      background-color: rgb(168 85 247 / 0.1);
    }

    &[data-flash="true"] {
      --tw-text-opacity: 1;
      color: rgb(168 85 247 / var(--tw-text-opacity, 1));
    }
  }
}

.react-scan-slider {
  position: relative;
  min-height: 24px;

  > input {
    position: absolute;
  }

  > input {
    inset: 0px;
  }

  > input {
    opacity: 0;
  }

  &:before {
    --tw-content: '';
    content: var(--tw-content);
  }

  &:before {
    position: absolute;
  }

  &:before {
    left: 0px;
    right: 0px;
  }

  &:before {
    top: 50%;
  }

  &:before {
    --tw-translate-y: -50%;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }

  &:before {
    height: 6px;
  }

  &:before {
    background-color: rgb(142 97 227 / 0.4);
  }

  &:before {
    border-radius: 8px;
  }

  &:before {
    pointer-events: none;
  }

  &:after {
    --tw-content: '';
    content: var(--tw-content);
  }

  &:after {
    position: absolute;
  }

  &:after {
    left: 0px;
    right: 0px;
  }

  &:after {
    top: -8px;
    bottom: -8px;
  }

  &:after {
    z-index: -10;
  }

  span {
    position: absolute;
  }

  span {
    left: 0px;
  }

  span {
    top: 50%;
  }

  span {
    --tw-translate-y: -50%;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }

  span {
    height: 10px;
  }

  span {
    width: 10px;
  }

  span {
    border-radius: 8px;
  }

  span {
    --tw-bg-opacity: 1;
    background-color: rgb(142 97 227 / var(--tw-bg-opacity, 1));
  }

  span {
    pointer-events: none;
  }

  span {
    transition-property: transform;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
  }

  span {
    transition-duration: 75ms;
  }
}

.resize-v-line {
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 4px;
  max-width: 4px;
  height: 100%;
  width: 100%;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;

  &:hover,
  &:active {
    > span {
      --tw-bg-opacity: 1;
      background-color: rgb(34 34 34 / var(--tw-bg-opacity, 1));
    }

    svg {
      opacity: 1;
    }
  }

  &::before {
    --tw-content: "";
    content: var(--tw-content);
  }

  &::before {
    position: absolute;
  }

  &::before {
    inset: 0px;
  }

  &::before {
    left: 50%;
  }

  &::before {
    --tw-translate-x: -50%;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }

  &::before {
    width: 1px;
  }

  &::before {
    --tw-bg-opacity: 1;
    background-color: rgb(34 34 34 / var(--tw-bg-opacity, 1));
  }

  &::before {
    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
  }

  > span {
    position: absolute;
  }

  > span {
    left: 50%;
  }

  > span {
    top: 50%;
  }

  > span {
    --tw-translate-x: -50%;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }

  > span {
    --tw-translate-y: -50%;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }

  > span {
    height: 18px;
  }

  > span {
    width: 6px;
  }

  > span {
    border-radius: 4px;
  }

  > span {
    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
  }

  svg {
    position: absolute;
  }

  svg {
    left: 50%;
  }

  svg {
    top: 50%;
  }

  svg {
    --tw-translate-x: -50%;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }

  svg {
    --tw-translate-y: -50%;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }

  svg {
    --tw-rotate: 90deg;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }

  svg {
    --tw-text-opacity: 1;
    color: rgb(163 163 163 / var(--tw-text-opacity, 1));
  }

  svg {
    opacity: 0;
  }

  svg {
    transition-property: opacity;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
  }

  svg {
    z-index: 50;
  }
}

.tree-node-search-highlight {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  span {
    padding-top: 1px;
    padding-bottom: 1px;
  }

  span {
    border-radius: 2px;
  }

  span {
    --tw-bg-opacity: 1;
    background-color: rgb(253 224 71 / var(--tw-bg-opacity, 1));
  }

  span {
    font-weight: 500;
  }

  span {
    --tw-text-opacity: 1;
    color: rgb(0 0 0 / var(--tw-text-opacity, 1));
  }

  .single {
    margin-right: 1px;
  }

  .single {
    padding-left: 2px;
    padding-right: 2px;
  }

  .regex {
    padding-left: 2px;
    padding-right: 2px;
  }

  .start {
    margin-left: 1px;
  }

  .start {
    border-top-left-radius: 2px;
    border-bottom-left-radius: 2px;
  }

  .end {
    margin-right: 1px;
  }

  .end {
    border-top-right-radius: 2px;
    border-bottom-right-radius: 2px;
  }

  .middle {
    margin-left: 1px;
    margin-right: 1px;
  }

  .middle {
    border-radius: 2px;
  }
}

.react-scan-toolbar-notification {
  position: absolute;
  left: 0px;
  right: 0px;
  display: flex;
  align-items: center;
  -moz-column-gap: 8px;
       column-gap: 8px;
  padding: 4px;
  padding-left: 8px;
  font-size: 10px;
  --tw-text-opacity: 1;
  color: rgb(212 212 212 / var(--tw-text-opacity, 1));
  background-color: rgb(0 0 0 / 0.9);
  transition-property: transform;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;

  &:before {
    --tw-content: '';
    content: var(--tw-content);
  }

  &:before {
    position: absolute;
  }

  &:before {
    left: 0px;
    right: 0px;
  }

  &:before {
    --tw-bg-opacity: 1;
    background-color: rgb(0 0 0 / var(--tw-bg-opacity, 1));
  }

  &:before {
    height: 8px;
  }

  &.position-top {
    top: 100%;
  }

  &.position-top {
    --tw-translate-y: -100%;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }

  &.position-top {
    border-bottom-right-radius: 8px;
    border-bottom-left-radius: 8px;
  }

  &.position-top {

    &::before {
      top: 0px;
    }

    &::before {
      --tw-translate-y: -100%;
      transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
    }
  }

  &.position-bottom {
    bottom: 100%;
  }

  &.position-bottom {
    --tw-translate-y: 100%;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }

  &.position-bottom {
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  }

  &.position-bottom {

    &::before {
      bottom: 0px;
    }

    &::before {
      --tw-translate-y: 100%;
      transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
    }
  }

  &.is-open {
    --tw-translate-y: 0px;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }
}

.react-scan-header-item {
  position: absolute;
  inset: 0px;
  --tw-translate-y: -200%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  transition-property: transform;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;

  &.is-visible {
    --tw-translate-y: 0px;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }
}

.react-scan-components-tree:has(.resize-v-line:hover, .resize-v-line:active)
  .tree {
  overflow: hidden;
}

.react-scan-expandable {
  display: grid;
  grid-template-rows: 0fr;
  overflow: hidden;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 75ms;
  transition-timing-function: ease-out;

  > * {
    min-height: 0;
  }

  &.react-scan-expanded {
    grid-template-rows: 1fr;
    transition-duration: 100ms;
  }
}

.after\\:absolute::after {
  content: var(--tw-content);
  position: absolute;
}

.after\\:inset-0::after {
  content: var(--tw-content);
  inset: 0px;
}

.after\\:left-1\\/2::after {
  content: var(--tw-content);
  left: 50%;
}

.after\\:top-\\[100\\%\\]::after {
  content: var(--tw-content);
  top: 100%;
}

.after\\:h-\\[6px\\]::after {
  content: var(--tw-content);
  height: 6px;
}

.after\\:w-\\[10px\\]::after {
  content: var(--tw-content);
  width: 10px;
}

.after\\:-translate-x-1\\/2::after {
  content: var(--tw-content);
  --tw-translate-x: -50%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

@keyframes fadeOut {

  0% {
    content: var(--tw-content);
    opacity: 1;
  }

  100% {
    content: var(--tw-content);
    opacity: 0;
  }
}

.after\\:animate-\\[fadeOut_1s_ease-out_forwards\\]::after {
  content: var(--tw-content);
  animation: fadeOut 1s ease-out forwards;
}

.after\\:border-l-\\[5px\\]::after {
  content: var(--tw-content);
  border-left-width: 5px;
}

.after\\:border-r-\\[5px\\]::after {
  content: var(--tw-content);
  border-right-width: 5px;
}

.after\\:border-t-\\[6px\\]::after {
  content: var(--tw-content);
  border-top-width: 6px;
}

.after\\:border-l-transparent::after {
  content: var(--tw-content);
  border-left-color: transparent;
}

.after\\:border-r-transparent::after {
  content: var(--tw-content);
  border-right-color: transparent;
}

.after\\:border-t-white::after {
  content: var(--tw-content);
  --tw-border-opacity: 1;
  border-top-color: rgb(255 255 255 / var(--tw-border-opacity, 1));
}

.after\\:bg-purple-500\\/30::after {
  content: var(--tw-content);
  background-color: rgb(168 85 247 / 0.3);
}

.after\\:content-\\[\\"\\"\\]::after {
  --tw-content: "";
  content: var(--tw-content);
}

.focus-within\\:border-\\[\\#454545\\]:focus-within {
  --tw-border-opacity: 1;
  border-color: rgb(69 69 69 / var(--tw-border-opacity, 1));
}

.hover\\:bg-\\[\\#0f0f0f\\]:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(15 15 15 / var(--tw-bg-opacity, 1));
}

.hover\\:bg-\\[\\#18181B\\]:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(24 24 27 / var(--tw-bg-opacity, 1));
}

.hover\\:bg-\\[\\#34343b\\]:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(52 52 59 / var(--tw-bg-opacity, 1));
}

.hover\\:bg-\\[\\#5f3f9a\\]\\/20:hover {
  background-color: rgb(95 63 154 / 0.2);
}

.hover\\:bg-\\[\\#5f3f9a\\]\\/40:hover {
  background-color: rgb(95 63 154 / 0.4);
}

.hover\\:bg-red-600:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(220 38 38 / var(--tw-bg-opacity, 1));
}

.hover\\:bg-zinc-700:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(63 63 70 / var(--tw-bg-opacity, 1));
}

.hover\\:bg-zinc-800\\/50:hover {
  background-color: rgb(39 39 42 / 0.5);
}

.hover\\:text-neutral-300:hover {
  --tw-text-opacity: 1;
  color: rgb(212 212 212 / var(--tw-text-opacity, 1));
}

.hover\\:text-white:hover {
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity, 1));
}

.group:hover .group-hover\\:bg-\\[\\#21437982\\] {
  background-color: #21437982;
}

.group:hover .group-hover\\:bg-\\[\\#5b2d89\\] {
  --tw-bg-opacity: 1;
  background-color: rgb(91 45 137 / var(--tw-bg-opacity, 1));
}

.group:hover .group-hover\\:bg-\\[\\#6a6a6a\\] {
  --tw-bg-opacity: 1;
  background-color: rgb(106 106 106 / var(--tw-bg-opacity, 1));
}

.group:hover .group-hover\\:bg-\\[\\#efda1a2f\\] {
  background-color: #efda1a2f;
}

.group:hover .group-hover\\:opacity-100 {
  opacity: 1;
}

.peer\\/bottom:hover ~ .peer-hover\\/bottom\\:rounded-b-none {
  border-bottom-right-radius: 0px;
  border-bottom-left-radius: 0px;
}

.peer\\/left:hover ~ .peer-hover\\/left\\:rounded-l-none {
  border-top-left-radius: 0px;
  border-bottom-left-radius: 0px;
}

.peer\\/right:hover ~ .peer-hover\\/right\\:rounded-r-none {
  border-top-right-radius: 0px;
  border-bottom-right-radius: 0px;
}

.peer\\/top:hover ~ .peer-hover\\/top\\:rounded-t-none {
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}
`,Vy=(n,r,i=r)=>{const[a,l]=Ie(n);return ze(()=>{if(n===a)return;const p=setTimeout(()=>l(n),n?r:i);return()=>clearTimeout(p)},[n,r,i]),a},Yy=ro(()=>P("absolute inset-0 flex items-center gap-x-2","translate-y-0","transition-transform duration-300",Xs.value&&"-translate-y-[200%]")),By=()=>{const n=we(null),r=we(null),[i,a]=Ie(null);Wi(()=>{const c=ce.inspectState.value;c.kind==="focused"&&a(c.fiber)}),Wi(()=>{const c=Vt.value;Hi(()=>{if(ce.inspectState.value.kind!=="focused"||!n.current||!r.current)return;const{totalUpdates:p,currentIndex:h,updates:m,isVisible:g,windowOffset:x}=c,w=Math.max(0,p-1),y=g?`#${x+h} Re-render`:w>0?`×${w}`:"";let b;if(w>0&&h>=0&&h<m.length){const N=m[h]?.fiberInfo?.selfTime;b=N>0?N<.1-Number.EPSILON?"< 0.1ms":`${Number(N.toFixed(1))}ms`:void 0}n.current.dataset.text=y?` • ${y}`:"",r.current.dataset.text=b?` • ${b}`:""})});const l=Mn(()=>{if(!i)return null;const{name:c,wrappers:p,wrapperTypes:h}=Vi(i),m=p.length?`${p.join("(")}(${c})${")".repeat(p.length)}`:c??"",g=h[0];return d("span",{title:m,className:"flex items-center gap-x-1",children:[c??"Unknown",d("span",{title:g?.title,className:"flex items-center gap-x-1 text-[10px] text-purple-400",children:!!g&&d(Re,{children:[d("span",{className:P("rounded py-[1px] px-1","truncate",g.compiler&&"bg-purple-800 text-neutral-400",!g.compiler&&"bg-neutral-700 text-neutral-300",g.type==="memo"&&"bg-[#5f3f9a] text-white"),children:g.type},g.type),g.compiler&&d("span",{className:"text-yellow-300",children:"✨"})]})}),h.length>1&&d("span",{className:"text-[10px] text-neutral-400",children:["×",h.length-1]})]})},[i]);return d("div",{className:Yy,children:[l,d("div",{className:"flex items-center gap-x-2 mr-auto text-xs text-[#888]",children:[d("span",{ref:n,className:"with-data-text cursor-pointer !overflow-visible",title:"Click to toggle between rerenders and total renders"}),d("span",{ref:r,className:"with-data-text !overflow-visible"})]})]})},Xy=()=>{const n=Vy(ce.inspectState.value.kind==="focused",150,0),r=()=>{Ke.value={view:"none"},ce.inspectState.value={kind:"inspect-off"}};if(Ke.value.view!=="notifications")return d("div",{className:"react-scan-header",children:[d("div",{className:"relative flex-1 h-full",children:d("div",{className:P("react-scan-header-item is-visible",!n&&"!duration-0"),children:d(By,{})})}),d("button",{type:"button",title:"Close",className:"react-scan-close-button",onClick:r,children:d(ct,{name:"icon-close"})})]})},Gy=({className:n,...r})=>d("div",{className:P("react-scan-toggle",n),children:[d("input",{type:"checkbox",...r}),d("div",{})]}),Qy=({fps:n})=>{const r=i=>i<30?"#EF4444":i<50?"#F59E0B":"rgb(214,132,245)";return d("div",{className:P("flex items-center gap-x-1 px-2 w-full","h-6","rounded-md","font-mono leading-none","bg-[#141414]","ring-1 ring-white/[0.08]"),children:[d("div",{style:{color:r(n)},className:"text-sm font-semibold tracking-wide transition-colors ease-in-out w-full flex justify-center items-center",children:n}),d("span",{className:"text-white/30 text-[11px] font-medium tracking-wide ml-auto min-w-fit",children:"FPS"})]})},qy=()=>{const[n,r]=Ie(null);return ze(()=>{const i=setInterval(()=>{r(ag())},200);return()=>clearInterval(i)},[]),d("div",{className:P("flex items-center justify-end gap-x-2 px-1 ml-1 w-[72px]","whitespace-nowrap text-sm text-white"),children:n===null?d(Re,{children:"️"}):d(Qy,{fps:n})})},Nn=()=>Un?(window.reactScanIdCounter===void 0&&(window.reactScanIdCounter=0),`${++window.reactScanIdCounter}`):"0",Tn=n=>n(),St=class dg extends Array{constructor(r=25){super(),this.capacity=r}push(...r){const i=super.push(...r);for(;this.length>this.capacity;)this.shift();return i}static fromArray(r,i){const a=new dg(i);return a.push(...r),a}},Ky=class{constructor(n){this.subscribers=new Set,this.currentValue=n}subscribe(n){return this.subscribers.add(n),n(this.currentValue),()=>{this.subscribers.delete(n)}}setState(n){this.currentValue=n,this.subscribers.forEach(r=>r(n))}getCurrentState(){return this.currentValue}},pg=150,Uh=new Ky(new St(pg)),Dn=50,Jy=class{constructor(){this.channels={}}publish(n,r,i=!0){const a=this.channels[r];if(!a){if(!i)return;this.channels[r]={callbacks:new St(Dn),state:new St(Dn)},this.channels[r].state.push(n);return}a.state.push(n),a.callbacks.forEach(l=>l(n))}getAvailableChannels(){return St.fromArray(Object.keys(this.channels),Dn)}subscribe(n,r,i=!1){const a=()=>(i||this.channels[n].state.forEach(c=>{r(c)}),()=>{const c=this.channels[n].callbacks.filter(p=>p!==r);this.channels[n].callbacks=St.fromArray(c,Dn)}),l=this.channels[n];return l?(l.callbacks.push(r),a()):(this.channels[n]={callbacks:new St(Dn),state:new St(Dn)},this.channels[n].callbacks.push(r),a())}updateChannelState(n,r,i=!0){const a=this.channels[n];if(!a){if(!i)return;const l=new St(Dn),c={callbacks:new St(Dn),state:l};this.channels[n]=c,c.state=r(l);return}a.state=r(a.state)}getChannelState(n){return this.channels[n].state??new St(Dn)}},Ls=new Jy,fg={skipProviders:!0,skipHocs:!0,skipContainers:!0,skipMinified:!0,skipUtilities:!0,skipBoundaries:!0},zi={providers:[/Provider$/,/^Provider$/,/^Context$/],hocs:[/^with[A-Z]/,/^forward(?:Ref)?$/i,/^Forward(?:Ref)?\(/],containers:[/^(?:App)?Container$/,/^Root$/,/^ReactDev/],utilities:[/^Fragment$/,/^Suspense$/,/^ErrorBoundary$/,/^Portal$/,/^Consumer$/,/^Layout$/,/^Router/,/^Hydration/],boundaries:[/^Boundary$/,/Boundary$/,/^Provider$/,/Provider$/]},Zy=(n,r=fg)=>{const i=[];return r.skipProviders&&i.push(...zi.providers),r.skipHocs&&i.push(...zi.hocs),r.skipContainers&&i.push(...zi.containers),r.skipUtilities&&i.push(...zi.utilities),r.skipBoundaries&&i.push(...zi.boundaries),!i.some(a=>a.test(n))},Hh=[/^[a-z]$/,/^[a-z][0-9]$/,/^_+$/,/^[A-Za-z][_$]$/,/^[a-z]{1,2}$/],e1=n=>{for(let c=0;c<Hh.length;c++)if(Hh[c].test(n))return!0;const r=!/[aeiou]/i.test(n),i=(n.match(/\d/g)?.length??0)>n.length/2,a=/^[a-z]+$/.test(n),l=/[$_]{2,}/.test(n);return Number(r)+Number(i)+Number(a)+Number(l)>=2},t1=(n,r=fg)=>{if(!n)return[];if(!Mt(n.type))return[];const a=new Array;let l=n;for(;l.return;){const p=n1(l.type);p&&!e1(p)&&Zy(p,r)&&p.toLowerCase()!==p&&a.push(p),l=l.return}const c=new Array(a.length);for(let p=0;p<a.length;p++)c[p]=a[a.length-p-1];return c},n1=n=>{const r=Mt(n);return r?r.replace(/^(?:Memo|Forward(?:Ref)?|With.*?)\((?<inner>.*?)\)$/,"$<inner>"):""},r1=(n,r=()=>!0)=>{let i=n;for(;i;){const a=Mt(i.type);if(a&&r(a))return a;i=i.return}return null},Wh,Mu="never-hidden",o1=()=>{Wh?.();const n=()=>{document.hidden&&(Mu=Date.now())};document.addEventListener("visibilitychange",n),Wh=()=>{document.removeEventListener("visibilitychange",n)}},i1=n=>["pointerup","click"].includes(n)?"pointer":(n.includes("key"),["keydown","keyup"].includes(n)?"keyboard":null),Gc=null,a1=n=>{o1();const r=new Map,i=new Map,a=c=>{if(!c.interactionId)return;if(c.interactionId&&c.target&&!i.has(c.interactionId)&&i.set(c.interactionId,c.target),c.target){let h=c.target;for(;h;){if(h.id==="react-scan-toolbar-root"||h.id==="react-scan-root")return;h=h.parentElement}}const p=r.get(c.interactionId);if(p)c.duration>p.latency?(p.entries=[c],p.latency=c.duration):c.duration===p.latency&&c.startTime===p.entries[0].startTime&&p.entries.push(c);else{const h=i1(c.name);if(!h)return;const m={id:c.interactionId,latency:c.duration,entries:[c],target:c.target,type:h,startTime:c.startTime,endTime:Date.now(),processingStart:c.processingStart,processingEnd:c.processingEnd,duration:c.duration,inputDelay:c.processingStart-c.startTime,processingDuration:c.processingEnd-c.processingStart,presentationDelay:c.duration-(c.processingEnd-c.startTime),timestamp:Date.now(),timeSinceTabInactive:Mu==="never-hidden"?"never-hidden":Date.now()-Mu,visibilityState:document.visibilityState,timeOrigin:performance.timeOrigin,referrer:document.referrer};r.set(m.id,m),Gc||(Gc=requestAnimationFrame(()=>{requestAnimationFrame(()=>{n(r.get(m.id)),Gc=null})}))}},l=new PerformanceObserver(c=>{const p=c.getEntries();for(let h=0,m=p.length;h<m;h++){const g=p[h];a(g)}});try{l.observe({type:"event",buffered:!0,durationThreshold:16}),l.observe({type:"first-input",buffered:!0})}catch{}return()=>l.disconnect()},s1=()=>a1(n=>{Ls.publish({kind:"entry-received",entry:n},"recording")}),_s=25,er=new St(_s),l1=(n,r)=>{let i=null;for(const a of r){if(a.type!==n.type)continue;if(i===null){i=a;continue}const l=(c,p)=>Math.abs(c.startDateTime)-(p.startTime+p.timeOrigin);l(a,n)<l(i,n)&&(i=a)}return i},c1=n=>Ls.subscribe("recording",i=>{const a=i.kind==="auto-complete-race"?er.find(c=>c.interactionUUID===i.interactionUUID):l1(i.entry,er);if(!a)return;const l=a.completeInteraction(i);n(l)}),u1=({onMicroTask:n,onRAF:r,onTimeout:i,abort:a})=>{queueMicrotask(()=>{a?.()!==!0&&n()&&requestAnimationFrame(()=>{a?.()!==!0&&r()&&setTimeout(()=>{a?.()!==!0&&i()},0)})})},d1=n=>{const r=tg(n);if(!r)return;let i=r?Mt(r?.type):"N/A";return i||(i=r1(r,l=>l.length>2)??"N/A"),i?{componentPath:t1(r),childrenTree:{},componentName:i,elementFiber:r}:void 0},Vh=(n,r)=>{let i=null;const a=m=>{switch(n){case"pointer":return m.phase==="start"?"pointerup":m.target instanceof HTMLInputElement||m.target instanceof HTMLSelectElement?"change":"click";case"keyboard":return m.phase==="start"?"keydown":"change"}},l={current:{kind:"uninitialized-stage",interactionUUID:Nn(),stageStart:Date.now(),interactionType:n}},c=m=>{if(m.composedPath().some(E=>E instanceof Element&&E.id==="react-scan-toolbar-root")||(Date.now()-l.current.stageStart>2e3&&(l.current={kind:"uninitialized-stage",interactionUUID:Nn(),stageStart:Date.now(),interactionType:n}),l.current.kind!=="uninitialized-stage"))return;const x=performance.now();r?.onStart?.(l.current.interactionUUID);const w=d1(m.target);if(!w){r?.onError?.(l.current.interactionUUID);return}const y={},b=hg(y);l.current={...l.current,interactionType:n,blockingTimeStart:Date.now(),childrenTree:w.childrenTree,componentName:w.componentName,componentPath:w.componentPath,fiberRenders:y,kind:"interaction-start",interactionStartDetail:x,stopListeningForRenders:b};const N=a({phase:"end",target:m.target});document.addEventListener(N,p,{once:!0}),requestAnimationFrame(()=>{document.removeEventListener(N,p)})};document.addEventListener(a({phase:"start"}),c,{capture:!0});const p=(m,g,x)=>{if(l.current.kind!=="interaction-start"&&g===i){if(n==="pointer"&&m.target instanceof HTMLSelectElement){l.current={kind:"uninitialized-stage",interactionUUID:Nn(),stageStart:Date.now(),interactionType:n};return}r?.onError?.(l.current.interactionUUID),l.current={kind:"uninitialized-stage",interactionUUID:Nn(),stageStart:Date.now(),interactionType:n};return}i=g,u1({abort:x,onMicroTask:()=>l.current.kind==="uninitialized-stage"?!1:(l.current={...l.current,kind:"js-end-stage",jsEndDetail:performance.now()},!0),onRAF:()=>l.current.kind!=="js-end-stage"&&l.current.kind!=="raf-stage"?(r?.onError?.(l.current.interactionUUID),l.current={kind:"uninitialized-stage",interactionUUID:Nn(),stageStart:Date.now(),interactionType:n},!1):(l.current={...l.current,kind:"raf-stage",rafStart:performance.now()},!0),onTimeout:()=>{if(l.current.kind!=="raf-stage"){r?.onError?.(l.current.interactionUUID),l.current={kind:"uninitialized-stage",interactionUUID:Nn(),stageStart:Date.now(),interactionType:n};return}const w=Date.now(),y=Object.freeze({...l.current,kind:"timeout-stage",blockingTimeEnd:w,commitEnd:performance.now()});l.current={kind:"uninitialized-stage",interactionUUID:Nn(),stageStart:w,interactionType:n};let b=!1;const N=I=>{b=!0;const k=I.kind==="auto-complete-race"?I.detailedTiming.commitEnd-I.detailedTiming.interactionStartDetail:I.entry.latency,z={detailedTiming:y,latency:k,completedAt:Date.now(),flushNeeded:!0};r?.onComplete?.(y.interactionUUID,z,I);const H=er.filter(W=>W.interactionUUID!==y.interactionUUID);return er=St.fromArray(H,_s),z},E={completeInteraction:N,endDateTime:Date.now(),startDateTime:y.blockingTimeStart,type:n,interactionUUID:y.interactionUUID};if(er.push(E),p1())setTimeout(()=>{if(b)return;N({kind:"auto-complete-race",detailedTiming:y,interactionUUID:y.interactionUUID});const I=er.filter(k=>k.interactionUUID!==y.interactionUUID);er=St.fromArray(I,_s)},1e3);else{const I=er.filter(k=>k.interactionUUID!==y.interactionUUID);er=St.fromArray(I,_s),N({kind:"auto-complete-race",detailedTiming:y,interactionUUID:y.interactionUUID})}}})},h=m=>{const g=Nn();p(m,g,()=>g!==i)};return n==="keyboard"&&document.addEventListener("keypress",h),()=>{document.removeEventListener(a({phase:"start"}),c,{capture:!0}),document.removeEventListener("keypress",h)}},Yh=n=>dm(n,r=>{if(Li(r))return!0})?.stateNode,p1=()=>"PerformanceEventTiming"in globalThis,hg=n=>{const r=i=>{const a=Mt(i.type);if(!a)return;const l=n[a];if(!l){const x=new Set,w=i.return&&jo(i.return),y=w&&Mt(w[0]);y&&x.add(y);const{selfTime:b,totalTime:N}=Gr(i),E=Mh(i),I={current:[],changes:new Set,changesCounts:new Map},k={fiberProps:E.fiberProps||I,fiberState:E.fiberState||I,fiberContext:E.fiberContext||I};n[a]={renderCount:1,hasMemoCache:Di(i),wasFiberRenderMount:Bh(i),parents:x,selfTime:b,totalTime:N,nodeInfo:[{element:Yh(i),name:Mt(i.type)??"Unknown",selfTime:Gr(i).selfTime}],changes:k};return}if(jo(i)?.[0]?.type){const x=i.return&&jo(i.return),w=x&&Mt(x[0]);w&&l.parents.add(w)}const{selfTime:p,totalTime:h}=Gr(i),m=Mh(i);if(!m)return;const g={current:[],changes:new Set,changesCounts:new Map};l.wasFiberRenderMount=l.wasFiberRenderMount||Bh(i),l.hasMemoCache=l.hasMemoCache||Di(i),l.changes={fiberProps:Qc(l.changes?.fiberProps||g,m.fiberProps||g),fiberState:Qc(l.changes?.fiberState||g,m.fiberState||g),fiberContext:Qc(l.changes?.fiberContext||g,m.fiberContext||g)},l.renderCount+=1,l.selfTime+=p,l.totalTime+=h,l.nodeInfo.push({element:Yh(i),name:Mt(i.type)??"Unknown",selfTime:Gr(i).selfTime})};return ce.interactionListeningForRenders=r,()=>{ce.interactionListeningForRenders===r&&(ce.interactionListeningForRenders=null)}},Qc=(n,r)=>{const i={current:[...n.current],changes:new Set,changesCounts:new Map};for(const a of r.current)i.current.some(l=>l.name===a.name)||i.current.push(a);for(const a of r.changes)if(typeof a=="string"||typeof a=="number"){i.changes.add(a);const l=n.changesCounts.get(a)||0,c=r.changesCounts.get(a)||0;i.changesCounts.set(a,l+c)}return i},Bh=n=>{if(!n.alternate)return!0;const r=n.alternate,i=r&&r.memoizedState!=null&&r.memoizedState.element!=null&&r.memoizedState.isDehydrated!==!0,a=n.memoizedState!=null&&n.memoizedState.element!=null&&n.memoizedState.isDehydrated!==!0;return!i&&a},f1=n=>{let r;const i=new Set,a=(g,x)=>{const w=typeof g=="function"?g(r):g;if(!Object.is(w,r)){const y=r;r=x??(typeof w!="object"||w===null)?w:Object.assign({},r,w),i.forEach(b=>b(r,y))}},l=()=>r,h={setState:a,getState:l,getInitialState:()=>m,subscribe:(g,x)=>{let w,y;x?(w=g,y=x):y=g;let b=w?w(r):void 0;const N=(E,I)=>{if(w){const k=w(E),z=w(I);Object.is(b,k)||(b=k,y(k,z))}else y(E,I)};return i.add(N),()=>i.delete(N)}},m=r=n(a,l,h);return h},mg=n=>f1,ps=null;mg()(n=>({state:{events:[]},actions:{addEvent:r=>{n(i=>({state:{events:[...i.state.events,r]}}))},clear:()=>{n({state:{events:[]}})}}}));var qc=200,Yi=mg()((n,r)=>{const i=new Set;return{state:{events:new St(qc)},actions:{addEvent:a=>{i.forEach(m=>m(a));const l=[...r().state.events,a],c=(m,g)=>{const x=l.find(w=>{if(w.kind!=="long-render"&&w.id!==m.id&&(m.data.startAt<=w.data.startAt&&m.data.endAt<=w.data.endAt&&m.data.endAt>=w.data.startAt||w.data.startAt<=m.data.startAt&&w.data.endAt>=m.data.startAt||m.data.startAt<=w.data.startAt&&m.data.endAt>=w.data.endAt))return!0});x&&g(x)},p=new Set;l.forEach(m=>{m.kind!=="interaction"&&c(m,()=>{p.add(m.id)})});const h=l.filter(m=>!p.has(m.id));n(()=>({state:{events:St.fromArray(h,qc)}}))},addListener:a=>(i.add(a),()=>{i.delete(a)}),clear:()=>{n({state:{events:new St(qc)}})}}}}),h1=()=>gw(Yi.subscribe,Yi.getState),Ss=null,Cs=null,Kc=null,zu,m1=()=>{const n=r=>{zu=r.composedPath().map(i=>i.id).filter(Boolean).includes("react-scan-toolbar")};return document.addEventListener("mouseover",n),Kc=n,()=>{Kc&&document.removeEventListener("mouseover",Kc)}},g1=()=>{const n=()=>{Ss=performance.now(),Cs=performance.timeOrigin};return document.addEventListener("visibilitychange",n),()=>{document.removeEventListener("visibilitychange",n)}},gg=150,Jc=[];function v1(){let n,r;function i(){let l=null;ps=null,ps={},l=hg(ps);const c=performance.timeOrigin,p=performance.now();return n=requestAnimationFrame(()=>{r=setTimeout(()=>{const h=performance.now(),m=h-p,g=performance.timeOrigin;Jc.push(h+g);const x=Jc.filter(N=>h+g-N<=1e3),w=x.length;Jc=x;const y=Ss!==null&&Cs!==null?h+g-(Cs+Ss)<100:null,b=zu!==null&&zu;if(m>gg&&!y&&document.visibilityState==="visible"&&!b){const N=g+h,E=p+c;Yi.getState().actions.addEvent({kind:"long-render",id:Nn(),data:{endAt:N,startAt:E,meta:{fiberRenders:ps,latency:m,fps:w}}})}Ss=null,Cs=null,l?.(),i()},0)}),l}const a=i();return()=>{a(),cancelAnimationFrame(n),clearTimeout(r)}}var w1=()=>{const n=s1(),r=m1(),i=g1(),a=v1(),l=async(m,g,x)=>{Yi.getState().actions.addEvent({kind:"interaction",id:Nn(),data:{startAt:g.detailedTiming.blockingTimeStart,endAt:performance.now()+performance.timeOrigin,meta:{...g,kind:x.kind}}});const w=Ls.getChannelState("recording");g.detailedTiming.stopListeningForRenders(),w.length&&Ls.updateChannelState("recording",()=>new St(Dn))},c=Vh("pointer",{onComplete:l}),p=Vh("keyboard",{onComplete:l}),h=c1(m=>{Uh.setState(St.fromArray(Uh.getCurrentState().concat(m),pg))});return()=>{r(),i(),a(),n(),c(),h(),p()}},Bi=n=>{const r=n.filter(i=>i.length>2);return r.length===0?n.at(-1)??"Unknown":r.at(-1)},zt=n=>{switch(n.kind){case"interaction":{const{renderTime:r,otherJSTime:i,framePreparation:a,frameConstruction:l,frameDraw:c}=n;return r+i+a+l+(c??0)}case"dropped-frames":return n.otherTime+n.renderTime}},x1=n=>n.wasFiberRenderMount||n.hasMemoCache?!1:n.changes.context.length===0&&n.changes.props.length===0&&n.changes.state.length===0,Ji=n=>{const r=zt(n.timing);switch(n.kind){case"interaction":return r<200?"low":r<500?"needs-improvement":"high";case"dropped-frames":return r<50?"low":r<gg?"needs-improvement":"high"}},an=()=>Hu(vg),vg=Mm(null),wg=({size:n=24,className:r})=>d("svg",{xmlns:"http://www.w3.org/2000/svg",width:n,height:n,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",className:P(["lucide lucide-chevron-right",r]),children:d("path",{d:"m9 18 6-6-6-6"})}),y1=({className:n="",size:r=24,events:i=[]})=>{const a=i.includes(!0),l=i.filter(h=>h).length,c=l>99?">99":l,p=a?Math.max(r*.6,14):Math.max(r*.4,6);return d("div",{className:"relative",children:[d("svg",{xmlns:"http://www.w3.org/2000/svg",width:r,height:r,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",className:`lucide lucide-bell ${n}`,children:[d("path",{d:"M10.268 21a2 2 0 0 0 3.464 0"}),d("path",{d:"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"})]}),i.length>0&&l>0&&$e.options.value.showNotificationCount&&d("div",{className:P(["absolute",a?"-top-2.5 -right-2.5":"-top-1 -right-1","rounded-full","flex items-center justify-center","text-[8px] font-medium text-white","aspect-square",a?"bg-red-500/90":"bg-purple-500/90"]),style:{width:`${p}px`,height:`${p}px`,padding:a?"0.5px":"0"},children:a&&c})]})},Ds=({className:n="",size:r=24})=>d("svg",{xmlns:"http://www.w3.org/2000/svg",width:r,height:r,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",className:n,children:[d("path",{d:"M18 6 6 18"}),d("path",{d:"m6 6 12 12"})]}),b1=({className:n="",size:r=24})=>d("svg",{xmlns:"http://www.w3.org/2000/svg",width:r,height:r,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",className:n,children:[d("path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z"}),d("path",{d:"M16 9a5 5 0 0 1 0 6"}),d("path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728"})]}),k1=({className:n="",size:r=24})=>d("svg",{xmlns:"http://www.w3.org/2000/svg",width:r,height:r,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",className:n,children:[d("path",{d:"M16 9a5 5 0 0 1 .95 2.293"}),d("path",{d:"M19.364 5.636a9 9 0 0 1 1.889 9.96"}),d("path",{d:"m2 2 20 20"}),d("path",{d:"m7 7-.587.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298V11"}),d("path",{d:"M9.828 4.172A.686.686 0 0 1 11 4.657v.686"})]}),_1=({size:n=24,className:r})=>d("svg",{xmlns:"http://www.w3.org/2000/svg",width:n,height:n,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",className:P(["lucide lucide-arrow-left",r]),children:[d("path",{d:"m12 19-7-7 7-7"}),d("path",{d:"M19 12H5"})]}),S1=({className:n="",size:r=24})=>d("svg",{xmlns:"http://www.w3.org/2000/svg",width:r,height:r,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",className:n,children:[d("path",{d:"M14 4.1 12 6"}),d("path",{d:"m5.1 8-2.9-.8"}),d("path",{d:"m6 12-1.9 2"}),d("path",{d:"M7.2 2.2 8 5.1"}),d("path",{d:"M9.037 9.69a.498.498 0 0 1 .653-.653l11 4.5a.5.5 0 0 1-.074.949l-4.349 1.041a1 1 0 0 0-.74.739l-1.04 4.35a.5.5 0 0 1-.95.074z"})]}),C1=({className:n="",size:r=24})=>d("svg",{xmlns:"http://www.w3.org/2000/svg",width:r,height:r,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",className:n,children:[d("path",{d:"M10 8h.01"}),d("path",{d:"M12 12h.01"}),d("path",{d:"M14 8h.01"}),d("path",{d:"M16 12h.01"}),d("path",{d:"M18 8h.01"}),d("path",{d:"M6 8h.01"}),d("path",{d:"M7 16h10"}),d("path",{d:"M8 12h.01"}),d("rect",{width:"20",height:"16",x:"2",y:"4",rx:"2"})]}),N1=({className:n="",size:r=24})=>d("svg",{xmlns:"http://www.w3.org/2000/svg",width:r,height:r,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",className:n,style:{transform:"rotate(180deg)"},children:[d("circle",{cx:"12",cy:"12",r:"10"}),d("path",{d:"m4.9 4.9 14.2 14.2"})]}),E1=({className:n="",size:r=24})=>d("svg",{xmlns:"http://www.w3.org/2000/svg",width:r,height:r,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:n,children:[d("polyline",{points:"22 17 13.5 8.5 8.5 13.5 2 7"}),d("polyline",{points:"16 17 22 17 22 11"})]}),xg=({children:n,triggerContent:r,wrapperProps:i})=>{const[a,l]=Ie("closed"),[c,p]=Ie(null),[h,m]=Ie({width:window.innerWidth,height:window.innerHeight}),g=we(null),x=we(null),w=Hu(ad),y=we(!1);ze(()=>{const k=()=>{m({width:window.innerWidth,height:window.innerHeight}),b()};return window.addEventListener("resize",k),()=>window.removeEventListener("resize",k)},[]);const b=()=>{if(g.current&&w){const k=g.current.getBoundingClientRect(),z=w.getBoundingClientRect(),H=k.left+k.width/2,W=k.top,V=new DOMRect(H-z.left,W-z.top,k.width,k.height);p(V)}};ze(()=>{b()},[g.current]),ze(()=>{if(a==="opening"){const k=setTimeout(()=>l("open"),120);return()=>clearTimeout(k)}else if(a==="closing"){const k=setTimeout(()=>l("closed"),120);return()=>clearTimeout(k)}},[a]),ze(()=>{const k=setInterval(()=>{!y.current&&a!=="closed"&&l("closing")},1e3);return()=>clearInterval(k)},[a]);const N=()=>{y.current=!0,b(),l("opening")},E=()=>{y.current=!1,b(),l("closing")},I=()=>{if(!c||!w)return{top:0,left:0};const k=w.getBoundingClientRect(),z=175,H=x.current?.offsetHeight||40,W=5,V=c.x+k.left,K=c.y+k.top;let ee=V,ge=K-4;return ee-z/2<W?ee=W+z/2:ee+z/2>h.width-W&&(ee=h.width-W-z/2),ge-H<W&&(ge=K+c.height+4),{top:ge-k.top,left:ee-k.left}};return d(Re,{children:[w&&c&&a!=="closed"&&bw(d("div",{ref:x,className:P(["absolute z-100 bg-white text-black rounded-lg px-3 py-2 shadow-lg","transform transition-all duration-120 ease-[cubic-bezier(0.23,1,0.32,1)]",'after:content-[""] after:absolute after:top-[100%]',"after:left-1/2 after:-translate-x-1/2","after:w-[10px] after:h-[6px]","after:border-l-[5px] after:border-l-transparent","after:border-r-[5px] after:border-r-transparent","after:border-t-[6px] after:border-t-white","pointer-events-none",a==="opening"||a==="closing"?"opacity-0 translate-y-1":"opacity-100 translate-y-0"]),style:{top:I().top+"px",left:I().left+"px",transform:"translate(-50%, -100%)",minWidth:"175px"},children:n}),w),d("div",{ref:g,onMouseEnter:N,onMouseLeave:E,...i,children:r})]})},T1=({selectedEvent:n})=>{const{notificationState:r,setNotificationState:i,setRoute:a}=an();return d("div",{className:P(["flex w-full justify-between items-center px-3 py-2 text-xs"]),children:[d("div",{className:P(["bg-[#18181B] flex items-center gap-x-1 p-1 rounded-sm"]),children:[d("button",{onClick:()=>{a({route:"render-visualization",routeMessage:null})},className:P(["w-1/2 flex items-center justify-center whitespace-nowrap py-[5px] px-1 gap-x-1",r.route==="render-visualization"||r.route==="render-explanation"?"text-white bg-[#7521c8] rounded-sm":"text-[#6E6E77] bg-[#18181B] rounded-sm"]),children:"Ranked"}),d("button",{onClick:()=>{a({route:"other-visualization",routeMessage:null})},className:P(["w-1/2 flex items-center justify-center whitespace-nowrap py-[5px] px-1 gap-x-1",r.route==="other-visualization"?"text-white bg-[#7521c8] rounded-sm":"text-[#6E6E77] bg-[#18181B] rounded-sm"]),children:"Overview"}),d("button",{onClick:()=>{a({route:"optimize",routeMessage:null})},className:P(["w-1/2 flex items-center justify-center whitespace-nowrap py-[5px] px-1 gap-x-1",r.route==="optimize"?"text-white bg-[#7521c8] rounded-sm":"text-[#6E6E77] bg-[#18181B] rounded-sm"]),children:d("span",{children:"Prompts"})})]}),d(xg,{triggerContent:d("button",{onClick:()=>{i(l=>{l.audioNotificationsOptions.enabled&&l.audioNotificationsOptions.audioContext.state!=="closed"&&l.audioNotificationsOptions.audioContext.close();const c=l.audioNotificationsOptions.enabled;localStorage.setItem("react-scan-notifications-audio",String(!c));const p=new AudioContext;return l.audioNotificationsOptions.enabled||Xu(p),c&&p.close(),{...l,audioNotificationsOptions:c?{audioContext:null,enabled:!1}:{audioContext:p,enabled:!0}}})},className:"ml-auto",children:d("div",{className:P(["flex gap-x-2 justify-center items-center text-[#6E6E77]"]),children:[d("span",{children:"Alerts"}),r.audioNotificationsOptions.enabled?d(b1,{size:16,className:"text-[#6E6E77]"}):d(k1,{size:16,className:"text-[#6E6E77]"})]})}),children:d(Re,{children:"Play a chime when a slowdown is recorded"})})]})},To=n=>{let r="";return n.toSorted((a,l)=>l.totalTime-a.totalTime).slice(0,30).filter(a=>a.totalTime>5).forEach(a=>{let l="";l+="Component Name:",l+=a.name,l+=`
`,l+=`Rendered: ${a.count} times
`,l+=`Sum of self times for ${a.name} is ${a.totalTime.toFixed(0)}ms
`,a.changes.props.length>0&&(l+=`Changed props for all ${a.name} instances ("name:count" pairs)
`,a.changes.props.forEach(c=>{l+=`${c.name}:${c.count}x
`})),a.changes.state.length>0&&(l+=`Changed state for all ${a.name} instances ("hook index:count" pairs)
`,a.changes.state.forEach(c=>{l+=`${c.index}:${c.count}x
`})),a.changes.context.length>0&&(l+=`Changed context for all ${a.name} instances ("context display name (if exists):count" pairs)
`,a.changes.context.forEach(c=>{l+=`${c.name}:${c.count}x
`})),r+=l,r+=`
`}),r},M1=({renderTime:n,eHandlerTimeExcludingRenders:r,toRafTime:i,commitTime:a,framePresentTime:l,formattedReactData:c})=>`I will provide you with a set of high level, and low level performance data about an interaction in a React App:
### High level
- react component render time: ${n.toFixed(0)}ms
- how long it took to run javascript event handlers (EXCLUDING REACT RENDERS): ${r.toFixed(0)}ms
- how long it took from the last event handler time, to the last request animation frame: ${i.toFixed(0)}ms
	- things like prepaint, style recalculations, layerization, async web API's like observers may occur during this time
- how long it took from the last request animation frame to when the dom was committed: ${a.toFixed(0)}ms
	- during this period you will see paint, commit, potential style recalcs, and other misc browser activity. Frequently high times here imply css that makes the browser do a lot of work, or mutating expensive dom properties during the event handler stage. This can be many things, but it narrows the problem scope significantly when this is high
${l===null?"":`- how long it took from dom commit for the frame to be presented: ${l.toFixed(0)}ms. This is when information about how to paint the next frame is sent to the compositor threads, and when the GPU does work. If this is high, look for issues that may be a bottleneck for operations occurring during this time`}

### Low level
We also have lower level information about react components, such as their render time, and which props/state/context changed when they re-rendered.
${c}`,z1=({interactionType:n,name:r,componentPath:i,time:a,renderTime:l,eHandlerTimeExcludingRenders:c,toRafTime:p,commitTime:h,framePresentTime:m,formattedReactData:g})=>`You will attempt to implement a performance improvement to a user interaction in a React app. You will be provided with data about the interaction, and the slow down.

Your should split your goals into 2 parts:
- identifying the problem
- fixing the problem
	- it is okay to implement a fix even if you aren't 100% sure the fix solves the performance problem. When you aren't sure, you should tell the user to try repeating the interaction, and feeding the "Formatted Data" in the React Scan notifications optimize tab. This allows you to start a debugging flow with the user, where you attempt a fix, and observe the result. The user may make a mistake when they pass you the formatted data, so must make sure, given the data passed to you, that the associated data ties to the same interaction you were trying to debug.


Make sure to check if the user has the react compiler enabled (project dependent, configured through build tool), so you don't unnecessarily memoize components. If it is, you do not need to worry about memoizing user components

One challenge you may face is the performance problem lies in a node_module, not in user code. If you are confident the problem originates because of a node_module, there are multiple strategies, which are context dependent:
- you can try to work around the problem, knowing which module is slow
- you can determine if its possible to resolve the problem in the node_module by modifying non node_module code
- you can monkey patch the node_module to experiment and see if it's really the problem (you can modify a functions properties to hijack the call for example)
- you can determine if it's feasible to replace whatever node_module is causing the problem with a performant option (this is an extreme)

The interaction was a ${n} on the component named ${r}. This component has the following ancestors ${i}. This is the path from the component, to the root. This should be enough information to figure out where this component is in the user's code base

This path is the component that was clicked, so it should tell you roughly where component had an event handler that triggered a state change.

Please note that the leaf node of this path might not be user code (if they use a UI library), and they may contain many wrapper components that just pass through children that aren't relevant to the actual click. So make you sure analyze the path and understand what the user code is doing

We have a set of high level, and low level data about the performance issue.

The click took ${a.toFixed(0)}ms from interaction start, to when a new frame was presented to a user.

We also provide you with a breakdown of what the browser spent time on during the period of interaction start to frame presentation.

- react component render time: ${l.toFixed(0)}ms
- how long it took to run javascript event handlers (EXCLUDING REACT RENDERS): ${c.toFixed(0)}ms
- how long it took from the last event handler time, to the last request animation frame: ${p.toFixed(0)}ms
	- things like prepaint, style recalculations, layerization, async web API's like observers may occur during this time
- how long it took from the last request animation frame to when the dom was committed: ${h.toFixed(0)}ms
	- during this period you will see paint, commit, potential style recalcs, and other misc browser activity. Frequently high times here imply css that makes the browser do a lot of work, or mutating expensive dom properties during the event handler stage. This can be many things, but it narrows the problem scope significantly when this is high
${m===null?"":`- how long it took from dom commit for the frame to be presented: ${m.toFixed(0)}ms. This is when information about how to paint the next frame is sent to the compositor threads, and when the GPU does work. If this is high, look for issues that may be a bottleneck for operations occurring during this time`}


We also have lower level information about react components, such as their render time, and which props/state/context changed when they re-rendered.

${g}

You may notice components have many renders, but much fewer props/state/context changes. This normally implies most of the components could of been memoized to avoid computation

It's also important to remember if a component had no props/state/context change, and it was memoized, it would not render. So the flow should be:
- find the most expensive components
- see what's causing them to render
- determine how you can make those state/props/context not change for a large set of the renders
- once there are no more changes left, you can memoize the component so it no longer unnecessarily re-renders. 

An important thing to note is that if you see a lot of react renders (some components with very high render counts), but javascript excluding renders is much higher than render time, it is possible that the components with lots of renders run hooks like useEffect/useLayoutEffect, which run during the JS event handler period.

It's also good to note that react profiles hook times in development, and if many hooks are called (lets say 5,000 components all called a useEffect), it will have to profile every single one. And it may also be the case the comparison of the hooks dependency can be expensive, and that would not be tracked in render time.

If a node_module is the component with high renders, you can experiment to see if that component is the root issue (because of hooks). You should use the same instructions for node_module debugging mentioned previously.

`,I1=({renderTime:n,otherTime:r,formattedReactData:i})=>`You will attempt to implement a performance improvement to a large slowdown in a react app

Your should split your goals into 2 parts:
- identifying the problem
- fixing the problem
	- it is okay to implement a fix even if you aren't 100% sure the fix solves the performance problem. When you aren't sure, you should tell the user to try repeating the interaction, and feeding the "Formatted Data" in the React Scan notifications optimize tab. This allows you to start a debugging flow with the user, where you attempt a fix, and observe the result. The user may make a mistake when they pass you the formatted data, so must make sure, given the data passed to you, that the associated data ties to the same interaction you were trying to debug.

Make sure to check if the user has the react compiler enabled (project dependent, configured through build tool), so you don't unnecessarily memoize components. If it is, you do not need to worry about memoizing user components

One challenge you may face is the performance problem lies in a node_module, not in user code. If you are confident the problem originates because of a node_module, there are multiple strategies, which are context dependent:
- you can try to work around the problem, knowing which module is slow
- you can determine if its possible to resolve the problem in the node_module by modifying non node_module code
- you can monkey patch the node_module to experiment and see if it's really the problem (you can modify a functions properties to hijack the call for example)
- you can determine if it's feasible to replace whatever node_module is causing the problem with a performant option (this is an extreme)


We have the high level time of how much react spent rendering, and what else the browser spent time on during this slowdown

- react component render time: ${n.toFixed(0)}ms
- other time: ${r}ms


We also have lower level information about react components, such as their render time, and which props/state/context changed when they re-rendered.

${i}

You may notice components have many renders, but much fewer props/state/context changes. This normally implies most of the components could of been memoized to avoid computation

It's also important to remember if a component had no props/state/context change, and it was memoized, it would not render. So the flow should be:
- find the most expensive components
- see what's causing them to render
- determine how you can make those state/props/context not change for a large set of the renders
- once there are no more changes left, you can memoize the component so it no longer unnecessarily re-renders. 

An important thing to note is that if you see a lot of react renders (some components with very high render counts), but other time is much higher than render time, it is possible that the components with lots of renders run hooks like useEffect/useLayoutEffect, which run outside of what we profile (just react render time).

It's also good to note that react profiles hook times in development, and if many hooks are called (lets say 5,000 components all called a useEffect), it will have to profile every single one. And it may also be the case the comparison of the hooks dependency can be expensive, and that would not be tracked in render time.

If a node_module is the component with high renders, you can experiment to see if that component is the root issue (because of hooks). You should use the same instructions for node_module debugging mentioned previously.

If renders don't seem to be the problem, see if there are any expensive CSS properties being added/mutated, or any expensive DOM Element mutations/new elements being created that could cause this slowdown. 
`,A1=({renderTime:n,otherTime:r,formattedReactData:i})=>`Your goal will be to help me find the source of a performance problem in a React App. I collected a large dataset about this specific performance problem.

We have the high level time of how much react spent rendering, and what else the browser spent time on during this slowdown

- react component render time: ${n.toFixed(0)}ms
- other time (other JavaScript, hooks like useEffect, style recalculations, layerization, paint & commit and everything else the browser might do to draw a new frame after javascript mutates the DOM): ${r}ms


We also have lower level information about react components, such as their render time, and which props/state/context changed when they re-rendered.

${i}

You may notice components have many renders, but much fewer props/state/context changes. This normally implies most of the components could of been memoized to avoid computation

It's also important to remember if a component had no props/state/context change, and it was memoized, it would not render. So a flow we can go through is:
- find the most expensive components
- see what's causing them to render
- determine how you can make those state/props/context not change for a large set of the renders
- once there are no more changes left, you can memoize the component so it no longer unnecessarily re-renders. 


An important thing to note is that if you see a lot of react renders (some components with very high render counts), but other time is much higher than render time, it is possible that the components with lots of renders run hooks like useEffect/useLayoutEffect, which run outside of what we profile (just react render time).

It's also good to note that react profiles hook times in development, and if many hooks are called (lets say 5,000 components all called a useEffect), it will have to profile every single one, and this can add significant overhead when thousands of effects ran.

If it's not possible to explain the root problem from this data, please ask me for more data explicitly, and what we would need to know to find the source of the performance problem.
`,P1=({renderTime:n,otherTime:r,formattedReactData:i})=>`I will provide you with a set of high level, and low level performance data about a large frame drop in a React App:
### High level
- react component render time: ${n.toFixed(0)}ms
- how long it took to run everything else (other JavaScript, hooks like useEffect, style recalculations, layerization, paint & commit and everything else the browser might do to draw a new frame after javascript mutates the DOM): ${r}ms

### Low level
We also have lower level information about react components, such as their render time, and which props/state/context changed when they re-rendered.
${i}`,R1=({interactionType:n,name:r,time:i,renderTime:a,eHandlerTimeExcludingRenders:l,toRafTime:c,commitTime:p,framePresentTime:h,formattedReactData:m})=>`Your goal will be to help me find the source of a performance problem. I collected a large dataset about this specific performance problem.

There was a ${n} on a component named ${r}. This means, roughly, the component that handled the ${n} event was named ${r}.

We have a set of high level, and low level data about the performance issue.

The click took ${i.toFixed(0)}ms from interaction start, to when a new frame was presented to a user.

We also provide you with a breakdown of what the browser spent time on during the period of interaction start to frame presentation.

- react component render time: ${a.toFixed(0)}ms
- how long it took to run javascript event handlers (EXCLUDING REACT RENDERS): ${l.toFixed(0)}ms
- how long it took from the last event handler time, to the last request animation frame: ${c.toFixed(0)}ms
	- things like prepaint, style recalculations, layerization, async web API's like observers may occur during this time
- how long it took from the last request animation frame to when the dom was committed: ${p.toFixed(0)}ms
	- during this period you will see paint, commit, potential style recalcs, and other misc browser activity. Frequently high times here imply css that makes the browser do a lot of work, or mutating expensive dom properties during the event handler stage. This can be many things, but it narrows the problem scope significantly when this is high
${h===null?"":`- how long it took from dom commit for the frame to be presented: ${h.toFixed(0)}ms. This is when information about how to paint the next frame is sent to the compositor threads, and when the GPU does work. If this is high, look for issues that may be a bottleneck for operations occurring during this time`}

We also have lower level information about react components, such as their render time, and which props/state/context changed when they re-rendered.

${m}


You may notice components have many renders, but much fewer props/state/context changes. This normally implies most of the components could of been memoized to avoid computation

It's also important to remember if a component had no props/state/context change, and it was memoized, it would not render. So a flow we can go through is:
- find the most expensive components
- see what's causing them to render
- determine how you can make those state/props/context not change for a large set of the renders
- once there are no more changes left, you can memoize the component so it no longer unnecessarily re-renders. 


An important thing to note is that if you see a lot of react renders (some components with very high render counts), but javascript excluding renders is much higher than render time, it is possible that the components with lots of renders run hooks like useEffect/useLayoutEffect, which run during the JS event handler period.

It's also good to note that react profiles hook times in development, and if many hooks are called (lets say 5,000 components all called a useEffect), it will have to profile every single one. And it may also be the case the comparison of the hooks dependency can be expensive, and that would not be tracked in render time.

If it's not possible to explain the root problem from this data, please ask me for more data explicitly, and what we would need to know to find the source of the performance problem.
`,Iu=(n,r)=>Tn(()=>{switch(n){case"data":switch(r.kind){case"dropped-frames":return P1({formattedReactData:To(r.groupedFiberRenders),renderTime:r.groupedFiberRenders.reduce((i,a)=>i+a.totalTime,0),otherTime:r.timing.otherTime});case"interaction":return M1({commitTime:r.timing.frameConstruction,eHandlerTimeExcludingRenders:r.timing.otherJSTime,formattedReactData:To(r.groupedFiberRenders),framePresentTime:r.timing.frameDraw,renderTime:r.groupedFiberRenders.reduce((i,a)=>i+a.totalTime,0),toRafTime:r.timing.framePreparation})}case"explanation":switch(r.kind){case"dropped-frames":return A1({formattedReactData:To(r.groupedFiberRenders),renderTime:r.groupedFiberRenders.reduce((i,a)=>i+a.totalTime,0),otherTime:r.timing.otherTime});case"interaction":return R1({commitTime:r.timing.frameConstruction,eHandlerTimeExcludingRenders:r.timing.otherJSTime,formattedReactData:To(r.groupedFiberRenders),framePresentTime:r.timing.frameDraw,interactionType:r.type,name:Bi(r.componentPath),renderTime:r.groupedFiberRenders.reduce((i,a)=>i+a.totalTime,0),time:zt(r.timing),toRafTime:r.timing.framePreparation})}case"fix":switch(r.kind){case"dropped-frames":return I1({formattedReactData:To(r.groupedFiberRenders),renderTime:r.groupedFiberRenders.reduce((i,a)=>i+a.totalTime,0),otherTime:r.timing.otherTime});case"interaction":return z1({commitTime:r.timing.frameConstruction,componentPath:r.componentPath.join(">"),eHandlerTimeExcludingRenders:r.timing.otherJSTime,formattedReactData:To(r.groupedFiberRenders),framePresentTime:r.timing.frameDraw,interactionType:r.type,name:Bi(r.componentPath),renderTime:r.groupedFiberRenders.reduce((i,a)=>i+a.totalTime,0),time:zt(r.timing),toRafTime:r.timing.framePreparation})}}}),j1=({selectedEvent:n})=>{const[r,i]=Ie("fix"),[a,l]=Ie(!1);return d("div",{className:P(["w-full h-full"]),children:[d("div",{className:P(["border border-[#27272A] rounded-sm h-4/5 text-xs overflow-hidden"]),children:[d("div",{className:P(["bg-[#18181B] p-1 rounded-t-sm"]),children:d("div",{className:P(["flex items-center gap-x-1"]),children:[d("button",{onClick:()=>i("fix"),className:P(["flex items-center justify-center whitespace-nowrap py-1.5 px-3 rounded-sm",r==="fix"?"text-white bg-[#7521c8]":"text-[#6E6E77] hover:text-white"]),children:"Fix"}),d("button",{onClick:()=>i("explanation"),className:P(["flex items-center justify-center whitespace-nowrap py-1.5 px-3 rounded-sm",r==="explanation"?"text-white bg-[#7521c8]":"text-[#6E6E77] hover:text-white"]),children:"Explanation"}),d("button",{onClick:()=>i("data"),className:P(["flex items-center justify-center whitespace-nowrap py-1.5 px-3 rounded-sm",r==="data"?"text-white bg-[#7521c8]":"text-[#6E6E77] hover:text-white"]),children:"Data"})]})}),d("div",{className:P(["overflow-y-auto h-full"]),children:d("pre",{className:P(["p-2 h-full","whitespace-pre-wrap break-words","text-gray-300 font-mono "]),children:Iu(r,n)})})]}),d("button",{onClick:async()=>{const c=Iu(r,n);await navigator.clipboard.writeText(c),l(!0),setTimeout(()=>l(!1),1e3)},className:P(["mt-4 px-4 py-2 bg-[#18181B] text-[#6E6E77] rounded-sm","hover:text-white transition-colors duration-200","flex items-center justify-center gap-x-2 text-xs"]),children:[d("span",{children:a?"Copied!":"Copy Prompt"}),d("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:P(["transition-transform duration-200",a&&"scale-110"]),children:a?d("path",{d:"M20 6L9 17l-5-5"}):d(Re,{children:[d("rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2"}),d("path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"})]})})]})]})},F1=(n,r)=>{switch(n.kind){case"dropped-frames":return[...r?[{name:"Total Processing Time",time:zt(n.timing),color:"bg-red-500",kind:"total-processing-time"}]:[{name:"Renders",time:n.timing.renderTime,color:"bg-purple-500",kind:"render"},{name:"JavaScript, DOM updates, Draw Frame",time:n.timing.otherTime,color:"bg-[#4b4b4b]",kind:"other-frame-drop"}]];case"interaction":return[...r?[]:[{name:"Renders",time:n.timing.renderTime,color:"bg-purple-500",kind:"render"}],{name:r?"React Renders, Hooks, Other JavaScript":"JavaScript/React Hooks ",time:n.timing.otherJSTime,color:"bg-[#EFD81A]",kind:"other-javascript"},{name:"Update DOM and Draw New Frame",time:zt(n.timing)-n.timing.renderTime-n.timing.otherJSTime,color:"bg-[#1D3A66]",kind:"other-not-javascript"}]}},$1=({selectedEvent:n})=>{const[r]=Ie(Gs()??!1),{notificationState:i}=an(),[a,l]=Ie(i.routeMessage?.name?[i.routeMessage.name]:[]),c=F1(n,r),p=Hu(ad);ze(()=>{if(i.routeMessage?.name){const m=p?.querySelector("#overview-scroll-container"),g=p?.querySelector(`#react-scan-overview-bar-${i.routeMessage.name}`);if(m&&g){const x=g.getBoundingClientRect().top,w=m.getBoundingClientRect().top,y=x-w;m.scrollTop=m.scrollTop+y}}},[i.route]),ze(()=>{i.route==="other-visualization"&&l(m=>i.routeMessage?.name?[i.routeMessage.name]:m)},[i.route]);const h=c.reduce((m,g)=>m+g.time,0);return d("div",{className:"rounded-sm border border-zinc-800 text-xs",children:[d("div",{className:"p-2 border-b border-zinc-800 bg-zinc-900/50",children:d("div",{className:"flex items-center justify-between",children:[d("h3",{className:"text-xs font-medium",children:"What was time spent on?"}),d("span",{className:"text-xs text-zinc-400",children:["Total: ",h.toFixed(0),"ms"]})]})}),d("div",{className:"divide-y divide-zinc-800",children:c.map(m=>{const g=a.includes(m.kind);return d("div",{id:`react-scan-overview-bar-${m.kind}`,children:[d("button",{onClick:()=>l(x=>x.includes(m.kind)?x.filter(w=>w!==m.kind):[...x,m.kind]),className:"w-full px-3 py-2 flex items-center gap-4 hover:bg-zinc-800/50 transition-colors",children:d("div",{className:"flex-1",children:[d("div",{className:"flex items-center justify-between mb-2",children:[d("div",{className:"flex items-center gap-0.5",children:[d("svg",{className:`h-4 w-4 text-zinc-400 transition-transform ${g?"rotate-90":""}`,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:d("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5l7 7-7 7"})}),d("span",{className:"font-medium flex items-center text-left",children:m.name})]}),d("span",{className:" text-zinc-400",children:[m.time.toFixed(0),"ms"]})]}),d("div",{className:"h-1 bg-zinc-800 rounded-full overflow-hidden",children:d("div",{className:`h-full ${m.color} transition-all`,style:{width:`${m.time/h*100}%`}})})]})}),g&&d("div",{className:"bg-zinc-900/30 border-t border-zinc-800 px-2.5 py-3",children:d("p",{className:" text-zinc-400 mb-4 text-xs",children:Tn(()=>{switch(n.kind){case"interaction":switch(m.kind){case"render":return d(Mo,{input:D1(n)});case"other-javascript":return d(Mo,{input:O1(n)});case"other-not-javascript":return d(Mo,{input:L1(n)})}case"dropped-frames":switch(m.kind){case"total-processing-time":return d(Mo,{input:{kind:"total-processing",data:{time:zt(n.timing)}}});case"render":return d(Re,{children:d(Mo,{input:{kind:"render",data:{topByTime:n.groupedFiberRenders.toSorted((x,w)=>w.totalTime-x.totalTime).slice(0,3).map(x=>({name:x.name,percentage:x.totalTime/zt(n.timing)}))}}})});case"other-frame-drop":return d(Mo,{input:{kind:"other"}})}}})})})]},m.kind)})})]})},L1=n=>{const r=n.groupedFiberRenders.reduce((c,p)=>c+p.count,0),i=n.timing.renderTime,a=zt(n.timing),l=i/a*100;return r>100?{kind:"high-render-count-update-dom-draw-frame",data:{count:r,percentageOfTotal:l,copyButton:d(Xh,{})}}:{kind:"update-dom-draw-frame",data:{copyButton:d(Xh,{})}}},Xh=()=>{const[n,r]=Ie(!1),{notificationState:i}=an();return d("button",{onClick:async()=>{i.selectedEvent&&(await navigator.clipboard.writeText(Iu("explanation",i.selectedEvent)),r(!0),setTimeout(()=>r(!1),1e3))},className:"bg-zinc-800 flex hover:bg-zinc-700 text-zinc-200 px-2 py-1 rounded gap-x-3",children:[d("span",{children:n?"Copied!":"Copy Prompt"}),d("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:P(["transition-transform duration-200",n&&"scale-110"]),children:n?d("path",{d:"M20 6L9 17l-5-5"}):d(Re,{children:[d("rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2"}),d("path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"})]})})]})},D1=n=>n.timing.renderTime/zt(n.timing)>.3?{kind:"render",data:{topByTime:n.groupedFiberRenders.toSorted((r,i)=>i.totalTime-r.totalTime).slice(0,3).map(r=>({percentage:r.totalTime/zt(n.timing),name:r.name}))}}:{kind:"other"},O1=n=>{const r=n.groupedFiberRenders.reduce((i,a)=>i+a.count,0);return n.timing.otherJSTime/zt(n.timing)<.2?{kind:"js-explanation-base"}:n.groupedFiberRenders.find(i=>i.count>200)||n.groupedFiberRenders.reduce((i,a)=>i+a.count,0)>500?{kind:"high-render-count-high-js",data:{renderCount:r,topByCount:n.groupedFiberRenders.filter(i=>i.count>100).toSorted((i,a)=>a.count-i.count).slice(0,3)}}:n.timing.otherJSTime/zt(n.timing)>.3?n.timing.renderTime>.2?{kind:"js-explanation-base"}:{kind:"low-render-count-high-js",data:{renderCount:r}}:{kind:"js-explanation-base"}},Mo=({input:n})=>{switch(n.kind){case"total-processing":return d("div",{className:P(["text-[#E4E4E7] text-[10px] leading-6 flex flex-col gap-y-2"]),children:[d("p",{children:["This is the time it took to draw the entire frame that was presented to the user. To be at 60FPS, this number needs to be ","<=16ms"]}),d("p",{children:'To debug the issue, check the "Ranked" tab to see if there are significant component renders'}),d("p",{children:"On a production React build, React Scan can't access the time it took for component to render. To get that information, run React Scan on a development build"}),d("p",{children:["To understand precisely what caused the slowdown while in production, use the ",d("strong",{children:"Chrome profiler"})," and analyze the function call times."]}),d("p",{})]});case"render":return d("div",{className:P(["text-[#E4E4E7] text-[10px] leading-6 flex flex-col gap-y-2"]),children:[d("p",{children:"This is the time it took React to run components, and internal logic to handle the output of your component."}),d("div",{className:P(["flex flex-col"]),children:[d("p",{children:"The slowest components for this time period were:"}),n.data.topByTime.map(r=>d("div",{children:[d("strong",{children:r.name}),":"," ",(r.percentage*100).toFixed(0),"% of total"]},r.name))]}),d("p",{children:'To view the render times of all your components, and what caused them to render, go to the "Ranked" tab'}),d("p",{children:'The "Ranked" tab shows the render times of every component.'}),d("p",{children:"The render times of the same components are grouped together into one bar."}),d("p",{children:"Clicking the component will show you what props, state, or context caused the component to re-render."})]});case"js-explanation-base":return d("div",{className:P(["text-[#E4E4E7] text-[10px] leading-6 flex flex-col gap-y-2"]),children:[d("p",{children:"This is the period when JavaScript hooks and other JavaScript outside of React Renders run."}),d("p",{children:["The most common culprit for high JS time is expensive hooks, like expensive callbacks inside of ",d("code",{children:"useEffect"}),"'s or a large number of useEffect's called, but this can also be JavaScript event handlers (",d("code",{children:"'onclick'"}),", ",d("code",{children:"'onchange'"}),") that performed expensive computation."]}),d("p",{children:"If you have lots of components rendering that call hooks, like useEffect, it can add significant overhead even if the callbacks are not expensive. If this is the case, you can try optimizing the renders of those components to avoid the hook from having to run."}),d("p",{children:["You should profile your app using the"," ",d("strong",{children:"Chrome DevTools profiler"})," to learn exactly which functions took the longest to execute."]})]});case"high-render-count-high-js":return d("div",{className:P(["text-[#E4E4E7] text-[10px] leading-6 flex flex-col gap-y-2"]),children:[d("p",{children:"This is the period when JavaScript hooks and other JavaScript outside of React Renders run."}),n.data.renderCount===0?d(Re,{children:[d("p",{children:"There were no renders, which means nothing related to React caused this slowdown. The most likely cause of the slowdown is a slow JavaScript event handler, or code related to a Web API"}),d("p",{children:["You should try to reproduce the slowdown while profiling your website with the",d("strong",{children:"Chrome DevTools profiler"})," to see exactly what functions took the longest to execute."]})]}):d(Re,{children:[" ",d("p",{children:["There were ",d("strong",{children:n.data.renderCount})," renders, which could have contributed to the high JavaScript/Hook time if they ran lots of hooks, like ",d("code",{children:"useEffects"}),"."]}),d("div",{className:P(["flex flex-col"]),children:[d("p",{children:"You should try optimizing the renders of:"}),n.data.topByCount.map(r=>d("div",{children:["- ",d("strong",{children:r.name})," (rendered ",r.count,"x)"]},r.name))]}),"and then checking if the problem still exists.",d("p",{children:["You can also try profiling your app using the"," ",d("strong",{children:"Chrome DevTools profiler"})," to see exactly what functions took the longest to execute."]})]})]});case"low-render-count-high-js":return d("div",{className:P(["text-[#E4E4E7] text-[10px] leading-6 flex flex-col gap-y-2"]),children:[d("p",{children:"This is the period when JavaScript hooks and other JavaScript outside of React Renders run."}),d("p",{children:["There were only ",d("strong",{children:n.data.renderCount})," renders detected, which means either you had very expensive hooks like"," ",d("code",{children:"useEffect"}),"/",d("code",{children:"useLayoutEffect"}),", or there is other JavaScript running during this interaction that took up the majority of the time."]}),d("p",{children:["To understand precisely what caused the slowdown, use the"," ",d("strong",{children:"Chrome profiler"})," and analyze the function call times."]})]});case"high-render-count-update-dom-draw-frame":return d("div",{className:P(["text-[#E4E4E7] text-[10px] leading-6 flex flex-col gap-y-2"]),children:[d("p",{children:"These are the calculations the browser is forced to do in response to the JavaScript that ran during the interaction."}),d("p",{children:"This can be caused by CSS updates/CSS recalculations, or new DOM elements/DOM mutations."}),d("p",{children:["During this interaction, there were"," ",d("strong",{children:n.data.count})," renders, which was"," ",d("strong",{children:[n.data.percentageOfTotal.toFixed(0),"%"]})," of the time spent processing"]}),d("p",{children:"The work performed as a result of the renders may have forced the browser to spend a lot of time to draw the next frame."}),d("p",{children:'You can try optimizing the renders to see if the performance problem still exists using the "Ranked" tab.'}),d("p",{children:"If you use an AI-based code editor, you can export the performance data collected as a prompt."}),d("p",{children:n.data.copyButton}),d("p",{children:"Provide this formatted data to the model and ask it to find, or fix, what could be causing this performance problem."}),d("p",{children:'For a larger selection of prompts, try the "Prompts" tab'})]});case"update-dom-draw-frame":return d("div",{className:P(["text-[#E4E4E7] text-[10px] leading-6 flex flex-col gap-y-2"]),children:[d("p",{children:"These are the calculations the browser is forced to do in response to the JavaScript that ran during the interaction."}),d("p",{children:"This can be caused by CSS updates/CSS recalculations, or new DOM elements/DOM mutations."}),d("p",{children:"If you use an AI-based code editor, you can export the performance data collected as a prompt."}),d("p",{children:n.data.copyButton}),d("p",{children:"Provide this formatted data to the model and ask it to find, or fix, what could be causing this performance problem."}),d("p",{children:'For a larger selection of prompts, try the "Prompts" tab'})]});case"other":return d("div",{className:P(["text-[#E4E4E7] text-[10px] leading-6 flex flex-col gap-y-2"]),children:[d("p",{children:["This is the time it took to run everything other than React renders. This can be hooks like ",d("code",{children:"useEffect"}),", other JavaScript not part of React, or work the browser has to do to update the DOM and draw the next frame."]}),d("p",{children:["To get a better picture of what happened, profile your app using the"," ",d("strong",{children:"Chrome profiler"})," when the performance problem arises."]})]})}},rt=null,pt=null,Xe=xt({kind:"idle",current:null}),Zc=null,$o=()=>{Zc&&cancelAnimationFrame(Zc),Zc=requestAnimationFrame(()=>{if(!rt||!pt)return;pt.clearRect(0,0,rt.width,rt.height);const n="hsl(271, 76%, 53%)",r=Xe.value,{alpha:i,current:a}=Tn(()=>{switch(r.kind){case"transition":{const l=r.current?.alpha&&r.current.alpha>0?r.current:r.transitionTo;return{alpha:l?l.alpha:0,current:l}}case"move-out":return{alpha:r.current?.alpha??0,current:r.current};case"idle":return{alpha:1,current:r.current}}});switch(a?.rects.forEach(l=>{pt&&(pt.shadowColor=n,pt.shadowBlur=6,pt.strokeStyle=n,pt.lineWidth=2,pt.globalAlpha=i,pt.beginPath(),pt.rect(l.left,l.top,l.width,l.height),pt.stroke(),pt.shadowBlur=0,pt.beginPath(),pt.rect(l.left,l.top,l.width,l.height),pt.stroke())}),r.kind){case"move-out":{if(r.current.alpha===0){Xe.value={kind:"idle",current:null};return}r.current.alpha<=.01&&(r.current.alpha=0),r.current.alpha=Math.max(0,r.current.alpha-.03),$o();return}case"transition":{if(r.current&&r.current.alpha>0){r.current.alpha=Math.max(0,r.current.alpha-.03),$o();return}if(r.transitionTo.alpha===1){Xe.value={kind:"idle",current:r.transitionTo};return}r.transitionTo.alpha=Math.min(r.transitionTo.alpha+.03,1),$o()}case"idle":return}})},eu=null,U1=n=>{if(rt=document.createElement("canvas"),pt=rt.getContext("2d",{alpha:!0}),!pt)return null;const r=window.devicePixelRatio||1,{innerWidth:i,innerHeight:a}=window;rt.style.width=`${i}px`,rt.style.height=`${a}px`,rt.width=i*r,rt.height=a*r,rt.style.position="fixed",rt.style.left="0",rt.style.top="0",rt.style.pointerEvents="none",rt.style.zIndex="2147483600",pt.scale(r,r),n.appendChild(rt),eu&&window.removeEventListener("resize",eu);const l=()=>{if(!rt||!pt)return;const c=window.devicePixelRatio||1,{innerWidth:p,innerHeight:h}=window;rt.style.width=`${p}px`,rt.style.height=`${h}px`,rt.width=p*c,rt.height=h*c,pt.scale(c,c),$o()};return eu=l,window.addEventListener("resize",l),Xe.subscribe(()=>{requestAnimationFrame(()=>{$o()})}),H1};function H1(){rt?.parentNode&&rt.parentNode.removeChild(rt),rt=null,pt=null}var Pi=()=>{const n=Xe.value.current?Xe.value.current:Xe.value.kind==="transition"?Xe.value.transitionTo:null;if(n){if(Xe.value.kind==="transition"){Xe.value={kind:"move-out",current:Xe.value.current?.alpha===0?Xe.value.transitionTo:Xe.value.current??Xe.value.transitionTo};return}Xe.value={kind:"move-out",current:{alpha:0,...n}}}},W1=({selectedEvent:n})=>{const r=zt(n.timing),i=r-n.timing.renderTime,[a]=Ie(Gs()),c=n.groupedFiberRenders.map(g=>({event:g,kind:"render",totalTime:a?g.count:g.totalTime})),p=Tn(()=>{switch(n.kind){case"dropped-frames":return n.timing.renderTime/r<.1;case"interaction":return(n.timing.otherJSTime+n.timing.renderTime)/r<.2}});n.kind==="interaction"&&!a&&c.push({kind:"other-javascript",totalTime:n.timing.otherJSTime}),p&&!a&&(n.kind==="interaction"?c.push({kind:"other-not-javascript",totalTime:zt(n.timing)-n.timing.renderTime-n.timing.otherJSTime}):c.push({kind:"other-frame-drop",totalTime:i}));const h=we({lastCallAt:null,timer:null}),m=c.reduce((g,x)=>g+x.totalTime,0);return d("div",{className:P(["flex flex-col h-full w-full gap-y-1"]),children:[Tn(()=>{if(a&&c.length===0)return d("div",{className:"flex flex-col items-center justify-center h-full text-zinc-400",children:[d("p",{className:"text-sm w-full text-left text-white mb-1.5",children:"No data available"}),d("p",{className:"text-x w-full text-lefts",children:"No data was collected during this period"})]});if(c.length===0)return d("div",{className:"flex flex-col items-center justify-center h-full text-zinc-400",children:[d("p",{className:"text-sm w-full text-left text-white mb-1.5",children:"No renders collected"}),d("p",{className:"text-x w-full text-lefts",children:"There were no renders during this period"})]})}),c.toSorted((g,x)=>x.totalTime-g.totalTime).map(g=>d(yg,{bars:c,bar:g,debouncedMouseEnter:h,totalBarTime:m,isProduction:a},g.kind==="render"?g.event.id:g.kind))]})},V1=n=>n.current&&n.current.alpha>0?"fading-out":"fading-in",yg=({bar:n,debouncedMouseEnter:r,totalBarTime:i,isProduction:a,bars:l,depth:c=0})=>{const{setNotificationState:p,setRoute:h}=an(),[m,g]=Ie(!1),x=n.kind==="render"?n.event.parents.size===0:!0,w=l.filter(N=>N.kind==="render"&&n.kind==="render"?n.event.parents.has(N.event.name)&&N.event.name!==n.event.name:!1),y=n.kind==="render"?Array.from(n.event.parents).filter(N=>!l.some(E=>E.kind==="render"&&E.event.name===N)):[],b=()=>{n.kind==="render"?(p(N=>({...N,selectedFiber:n.event})),h({route:"render-explanation",routeMessage:null})):h({route:"other-visualization",routeMessage:{kind:"auto-open-overview-accordion",name:n.kind}})};return d("div",{className:"w-full",children:[d("div",{className:P(["w-full flex items-center relative text-xs min-w-0"]),children:[d("button",{onMouseLeave:()=>{r.current.timer&&clearTimeout(r.current.timer),Pi()},onMouseEnter:async()=>{const N=async()=>{if(r.current.lastCallAt=Date.now(),n.kind!=="render"){const H=Xe.value.current?Xe.value.current:Xe.value.kind==="transition"?Xe.value.transitionTo:null;if(!H){Xe.value={kind:"idle",current:null};return}Xe.value={kind:"move-out",current:{alpha:0,...H}};return}const E=Xe.value,I=Tn(()=>{switch(E.kind){case"transition":return E.transitionTo;case"idle":case"move-out":return E.current}}),k=[];if(E.kind==="transition"){const H=V1(E);Tn(()=>{switch(H){case"fading-in":{Xe.value={kind:"transition",current:E.transitionTo,transitionTo:{rects:k,alpha:0,name:n.event.name}};return}case"fading-out":{Xe.value={kind:"transition",current:Xe.value.current?{alpha:0,...Xe.value.current}:null,transitionTo:{rects:k,alpha:0,name:n.event.name}};return}}})}else Xe.value={kind:"transition",transitionTo:{rects:k,alpha:0,name:n.event.name},current:I?{alpha:0,...I}:null};const z=n.event.elements.filter(H=>H instanceof Element);for await(const H of ug(z))H.forEach(({boundingClientRect:W})=>{k.push(W)}),$o()};if(r.current.lastCallAt&&Date.now()-r.current.lastCallAt<200){r.current.timer&&clearTimeout(r.current.timer),r.current.timer=setTimeout(()=>{N()},200);return}N()},onClick:b,className:P(["h-full w-[90%] flex items-center hover:bg-[#0f0f0f] rounded-l-md min-w-0 relative"]),children:[d("div",{style:{minWidth:"fit-content",width:`${n.totalTime/i*100}%`},className:P(["flex items-center rounded-sm text-white text-xs h-[28px] shrink-0",n.kind==="render"&&"bg-[#412162] group-hover:bg-[#5b2d89]",n.kind==="other-frame-drop"&&"bg-[#44444a] group-hover:bg-[#6a6a6a]",n.kind==="other-javascript"&&"bg-[#efd81a6b] group-hover:bg-[#efda1a2f]",n.kind==="other-not-javascript"&&"bg-[#214379d4] group-hover:bg-[#21437982]"])}),d("div",{className:P(["absolute inset-0 flex items-center px-2","min-w-0"]),children:d("div",{className:"flex items-center gap-x-2 min-w-0 w-full",children:[d("span",{className:P(["truncate"]),children:Tn(()=>{switch(n.kind){case"other-frame-drop":return"JavaScript, DOM updates, Draw Frame";case"other-javascript":return"JavaScript/React Hooks";case"other-not-javascript":return"Update DOM and Draw New Frame";case"render":return n.event.name}})}),n.kind==="render"&&x1(n.event)&&d("div",{style:{lineHeight:"10px"},className:P(["px-1 py-0.5 bg-[#6a369e] flex items-center rounded-sm font-semibold text-[8px] shrink-0"]),children:"Memoizable"})]})})]}),d("button",{onClick:()=>n.kind==="render"&&!x&&g(!m),className:P(["flex items-center min-w-fit shrink-0 rounded-r-md h-[28px]",!x&&"hover:bg-[#0f0f0f]",n.kind==="render"&&!x?"cursor-pointer":"cursor-default"]),children:[d("div",{className:"w-[20px] flex items-center justify-center",children:n.kind==="render"&&!x&&d(wg,{className:P("transition-transform",m&&"rotate-90"),size:16})}),d("div",{style:{minWidth:x?"fit-content":a?"30px":"60px"},className:"flex items-center justify-end gap-x-1",children:[n.kind==="render"&&d("span",{className:P(["text-[10px]"]),children:["x",n.event.count]}),(n.kind!=="render"||!a)&&d("span",{className:"text-[10px] text-[#7346a0] pr-1",children:[n.totalTime<1?"<1":n.totalTime.toFixed(0),"ms"]})]})]}),c===0&&d("div",{className:P(["absolute right-0 top-1/2 transition-none -translate-y-1/2 bg-white text-black px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity mr-16","pointer-events-none"]),children:"Click to learn more"})]}),m&&(w.length>0||y.length>0)&&d("div",{className:"pl-3 flex flex-col gap-y-1 mt-1",children:[w.toSorted((N,E)=>E.totalTime-N.totalTime).map((N,E)=>d(yg,{depth:c+1,bar:N,debouncedMouseEnter:r,totalBarTime:i,isProduction:a,bars:l},E)),y.map(N=>d("div",{className:"w-full",children:d("div",{className:"w-full flex items-center relative text-xs",children:d("div",{className:"h-full w-full flex items-center relative",children:[d("div",{className:"flex items-center rounded-sm text-white text-xs h-[28px] w-full"}),d("div",{className:"absolute inset-0 flex items-center px-2",children:d("span",{className:"truncate whitespace-nowrap text-white/70 w-full",children:N})})]})})},N))]})]})},Y1=({selectedEvent:n,selectedFiber:r})=>{const{setRoute:i}=an(),[a,l]=Ie(!0),[c]=Ie(Gs());Uu(()=>{const h=localStorage.getItem("react-scan-tip-shown"),m=h==="true"?!0:h==="false"?!1:null;if(m===null){l(!0),localStorage.setItem("react-scan-tip-is-shown","true");return}m||l(!1)},[]);const p=r.changes.context.length===0&&r.changes.props.length===0&&r.changes.state.length===0;return d("div",{className:P(["w-full min-h-fit h-full flex flex-col py-4 pt-0 rounded-sm"]),children:[d("div",{className:P(["flex items-start gap-x-4 "]),children:[d("button",{onClick:()=>{i({route:"render-visualization",routeMessage:null})},className:P(["text-white hover:bg-[#34343b] flex gap-x-1 justify-center items-center mb-4 w-fit px-2.5 py-1.5 text-xs rounded-sm bg-[#18181B]"]),children:[d(_1,{size:14})," ",d("span",{children:"Overview"})]}),d("div",{className:P(["flex flex-col gap-y-1"]),children:[d("div",{className:P(["text-sm font-bold text-white overflow-x-hidden"]),children:d("div",{className:"flex items-center gap-x-2 truncate",children:r.name})}),d("div",{className:P(["flex gap-x-2"]),children:[!c&&d(Re,{children:d("div",{className:P(["text-xs text-gray-400"]),children:["• Render time: ",r.totalTime.toFixed(0),"ms"]})}),d("div",{className:P(["text-xs text-gray-400 mb-4"]),children:["• Renders: ",r.count,"x"]})]})]})]}),a&&!p&&d("div",{className:P(["w-full mb-4 bg-[#0A0A0A] border border-[#27272A] rounded-sm overflow-hidden flex relative"]),children:[d("button",{onClick:()=>{l(!1),localStorage.setItem("react-scan-tip-shown","false")},className:P(["absolute right-2 top-2 rounded-sm p-1 hover:bg-[#18181B]"]),children:d(Ds,{size:12})}),d("div",{className:P(["w-1 bg-[#d36cff]"])}),d("div",{className:P(["flex-1"]),children:[d("div",{className:P(["px-3 py-2 text-gray-100 text-xs font-semibold"]),children:"How to stop renders"}),d("div",{className:P(["px-3 pb-2 text-gray-400 text-[10px]"]),children:"Stop the following props, state and context from changing between renders, and wrap the component in React.memo if not already"})]})]}),p&&d("div",{className:P(["w-full mb-4 bg-[#0A0A0A] border border-[#27272A] rounded-sm overflow-hidden flex"]),children:[d("div",{className:P(["w-1 bg-[#d36cff]"])}),d("div",{className:P(["flex-1"]),children:[d("div",{className:P(["px-3 py-2 text-gray-100 text-sm font-semibold"]),children:"No changes detected"}),d("div",{className:P(["px-3 pb-2 text-gray-400 text-xs"]),children:"This component would not of rendered if it was memoized"})]})]}),d("div",{className:P(["flex w-full"]),children:[d("div",{className:P(["flex flex-col border border-[#27272A] rounded-l-sm overflow-hidden w-1/3"]),children:[d("div",{className:P(["text-[14px] font-semibold px-2 py-2 bg-[#18181B] text-white flex justify-center"]),children:"Changed Props"}),r.changes.props.length>0?r.changes.props.toSorted((h,m)=>m.count-h.count).map(h=>d("div",{className:P(["flex flex-col justify-between items-center border-t overflow-x-auto border-[#27272A] px-1 py-1 text-wrap bg-[#0A0A0A] text-[10px]"]),children:[d("span",{className:P(["text-white "]),children:h.name}),d("div",{className:P([" text-[8px]  text-[#d36cff] pl-1 py-1 "]),children:[h.count,"/",r.count,"x"]})]},h.name)):d("div",{className:P(["flex items-center justify-center h-full bg-[#0A0A0A] text-[#A1A1AA] border-t border-[#27272A]"]),children:"No changes"})]}),d("div",{className:P(["flex flex-col border border-[#27272A] border-l-0 overflow-hidden w-1/3"]),children:[d("div",{className:P([" text-[14px] font-semibold px-2 py-2 bg-[#18181B] text-white flex justify-center"]),children:"Changed State"}),r.changes.state.length>0?r.changes.state.toSorted((h,m)=>m.count-h.count).map(h=>d("div",{className:P(["flex flex-col justify-between items-center border-t overflow-x-auto border-[#27272A] px-1 py-1 text-wrap bg-[#0A0A0A] text-[10px]"]),children:[d("span",{className:P(["text-white "]),children:["index ",h.index]}),d("div",{className:P(["rounded-full  text-[#d36cff] pl-1 py-1 text-[8px]"]),children:[h.count,"/",r.count,"x"]})]},h.index)):d("div",{className:P(["flex items-center justify-center h-full bg-[#0A0A0A] text-[#A1A1AA] border-t border-[#27272A]"]),children:"No changes"})]}),d("div",{className:P(["flex flex-col border border-[#27272A] border-l-0 rounded-r-sm overflow-hidden w-1/3"]),children:[d("div",{className:P([" text-[14px] font-semibold px-2 py-2 bg-[#18181B] text-white flex justify-center"]),children:"Changed Context"}),r.changes.context.length>0?r.changes.context.toSorted((h,m)=>m.count-h.count).map(h=>d("div",{className:P(["flex flex-col justify-between items-center border-t  border-[#27272A] px-1 py-1 bg-[#0A0A0A] text-[10px] overflow-x-auto"]),children:[d("span",{className:P(["text-white "]),children:h.name}),d("div",{className:P(["rounded-full text-[#d36cff] pl-1 py-1 text-[8px] text-wrap"]),children:[h.count,"/",r.count,"x"]})]},h.name)):d("div",{className:P(["flex items-center justify-center h-full bg-[#0A0A0A] text-[#A1A1AA] border-t border-[#27272A] py-2"]),children:"No changes"})]})]})]})},B1=()=>{const{notificationState:n,setNotificationState:r}=an(),[i,a]=Ie("..."),l=we(null);if(ze(()=>{const c=setInterval(()=>{a(p=>p==="..."?"":p+".")},500);return()=>clearInterval(c)},[]),!n.selectedEvent)return d("div",{ref:l,className:P(["h-full w-full flex flex-col items-center justify-center relative py-2 px-4"]),children:[d("div",{className:P(["p-2 flex justify-center items-center border-[#27272A] absolute top-0 right-0"]),children:d("button",{onClick:()=>{Ke.value={view:"none"}},children:d(Ds,{size:18,className:"text-[#6F6F78]"})})}),d("div",{className:P(["flex flex-col items-start pt-5 bg-[#0A0A0A] p-5 rounded-sm max-w-md"," shadow-lg"]),children:d("div",{className:P(["flex flex-col items-start gap-y-4"]),children:[d("div",{className:P(["flex items-center"]),children:d("span",{className:P(["text-zinc-400 font-medium text-[17px]"]),children:["Scanning for slowdowns",i]})}),n.events.length!==0&&d("p",{className:P(["text-xs"]),children:["Click on an item in the"," ",d("span",{className:P(["text-purple-400"]),children:"History"})," list to get started"]}),d("p",{className:P(["text-zinc-600 text-xs"]),children:"You don't need to keep this panel open for React Scan to record slowdowns"}),d("p",{className:P(["text-zinc-600 text-xs"]),children:"Enable audio alerts to hear a delightful ding every time a large slowdown is recorded"}),d("button",{onClick:()=>{if(n.audioNotificationsOptions.enabled){r(p=>(p.audioNotificationsOptions.audioContext?.state!=="closed"&&p.audioNotificationsOptions.audioContext?.close(),localStorage.setItem("react-scan-notifications-audio","false"),{...p,audioNotificationsOptions:{audioContext:null,enabled:!1}}));return}localStorage.setItem("react-scan-notifications-audio","true");const c=new AudioContext;Xu(c),r(p=>({...p,audioNotificationsOptions:{enabled:!0,audioContext:c}}))},className:P(["px-4 py-2 bg-zinc-800 hover:bg-zinc-700 rounded-sm w-full"," text-sm flex items-center gap-x-2 justify-center"]),children:n.audioNotificationsOptions.enabled?d(Re,{children:d("span",{className:"flex items-center gap-x-1",children:"Disable audio alerts"})}):d(Re,{children:d("span",{className:"flex items-center gap-x-1",children:"Enable audio alerts"})})})]})})]});switch(n.route){case"render-visualization":return d(fs,{children:d(W1,{selectedEvent:n.selectedEvent})});case"render-explanation":{if(!n.selectedFiber)throw new Error("Invariant: must have selected fiber when viewing render explanation");return d(fs,{children:d(Y1,{selectedFiber:n.selectedFiber,selectedEvent:n.selectedEvent})})}case"other-visualization":return d(fs,{children:d("div",{className:P(["flex w-full h-full flex-col overflow-y-auto"]),id:"overview-scroll-container",children:d($1,{selectedEvent:n.selectedEvent})})});case"optimize":return d(fs,{children:d(j1,{selectedEvent:n.selectedEvent})})}n.route},fs=({children:n})=>{const{notificationState:r}=an();if(!r.selectedEvent)throw new Error("Invariant: d must have selected event when viewing render explanation");return d("div",{className:P(["w-full h-full flex flex-col gap-y-2"]),children:[d("div",{className:P(["h-[50px] w-full"]),children:d(T1,{selectedEvent:r.selectedEvent})}),d("div",{className:P(["h-calc(100%-50px) flex flex-col overflow-y-auto px-3"]),children:n})]})},X1=({selectedEvent:n})=>{const r=Ji(n);switch(n.kind){case"interaction":return d("div",{className:P(["w-full flex border-b border-[#27272A] min-h-[48px]"]),children:d("div",{className:P(["min-w-fit w-full justify-start flex items-center border-r border-[#27272A] pl-5 pr-2 text-sm gap-x-4"]),children:[d("div",{className:P(["flex items-center gap-x-2 "]),children:[d("span",{className:P(["text-[#5a5a5a] mr-0.5"]),children:n.type==="click"?"Clicked ":"Typed in "}),d("span",{children:Bi(n.componentPath)}),d("div",{className:P(["w-fit flex items-center justify-center h-fit text-white px-1 rounded-sm font-semibold text-[10px] whitespace-nowrap",r==="low"&&"bg-green-500/50",r==="needs-improvement"&&"bg-[#b77116]",r==="high"&&"bg-[#b94040]"]),children:[zt(n.timing).toFixed(0),"ms processing time"]})]}),d("div",{className:P(["flex items-center gap-x-2  justify-end ml-auto"]),children:d("div",{className:P(["p-2 flex justify-center items-center border-[#27272A]"]),children:d("button",{onClick:()=>{Ke.value={view:"none"}},title:"Close",children:d(Ds,{size:18,className:"text-[#6F6F78]"})})})})]})});case"dropped-frames":return d("div",{className:P(["w-full flex border-b border-[#27272A] min-h-[48px]"]),children:d("div",{className:P(["min-w-fit w-full justify-start flex items-center border-r border-[#27272A] pl-5 pr-2 text-sm gap-x-4"]),children:[d("div",{className:P(["flex items-center gap-x-2 "]),children:["FPS Drop",d("div",{className:P(["w-fit flex items-center justify-center h-fit text-white px-1 rounded-sm font-semibold text-[10px] whitespace-nowrap",r==="low"&&"bg-green-500/50",r==="needs-improvement"&&"bg-[#b77116]",r==="high"&&"bg-[#b94040]"]),children:["dropped to ",n.fps," FPS"]})]}),d("div",{className:P(["flex items-center gap-x-2 w-2/4 justify-end ml-auto"]),children:d("div",{className:P(["p-2 flex justify-center items-center border-[#27272A]"]),children:d("button",{onClick:()=>{Ke.value={view:"none"}},children:d(Ds,{size:18,className:"text-[#6F6F78]"})})})})]})})}},G1=({flashingItemsCount:n,totalEvents:r})=>{const[i,a]=Ie(!1),l=we(0),c=we(0);return ze(()=>{if(l.current>=r)return;const p=Date.now(),h=250,m=p-c.current;if(m>=h){a(!1);const g=setTimeout(()=>{l.current=r,c.current=Date.now(),a(!0),setTimeout(()=>{a(!1)},2e3)},50);return()=>clearTimeout(g)}else{const g=h-m,x=setTimeout(()=>{a(!1),setTimeout(()=>{l.current=r,c.current=Date.now(),a(!0),setTimeout(()=>{a(!1)},2e3)},50)},g);return()=>clearTimeout(x)}},[n]),i},Gh=({item:n,shouldFlash:r})=>{const[i,a]=Ie(!1),l=n.events.map(Ji).reduce((h,m)=>{switch(m){case"high":return"high";case"needs-improvement":return h==="high"?"high":"needs-improvement";case"low":return h}},"low"),c=n.events.reduce((h,m)=>r(m.id)?h+1:h,0),p=G1({flashingItemsCount:c,totalEvents:n.events.length});return d("div",{className:P(["flex flex-col gap-y-0.5"]),children:[d("button",{onClick:()=>a(h=>!h),className:P(["pl-2 py-1.5  text-sm flex items-center rounded-sm hover:bg-[#18181B] relative overflow-hidden",p&&!i&&"after:absolute after:inset-0 after:bg-purple-500/30 after:animate-[fadeOut_1s_ease-out_forwards]"]),children:[d("div",{className:P(["w-4/5 flex items-center justify-start h-full text-xs truncate gap-x-1.5"]),children:[d("span",{className:P(["min-w-fit"]),children:d(wg,{className:P(["text-[#A1A1AA] transition-transform",i?"rotate-90":""]),size:14},`chevron-${n.timestamp}`)}),d("span",{className:P(["text-xs"]),children:n.kind==="collapsed-frame-drops"?"FPS Drops":Bi(n.events.at(0)?.componentPath??[])})]}),d("div",{className:P(["ml-auto min-w-fit flex justify-end items-center"]),children:d("div",{style:{lineHeight:"10px"},className:P(["w-fit flex items-center text-[10px] justify-center h-full text-white px-1 py-1 rounded-sm font-semibold",l==="low"&&"bg-green-500/60",l==="needs-improvement"&&"bg-[#b77116] text-[10px]",l==="high"&&"bg-[#b94040]"]),children:["x",n.events.length]})})]}),i&&d(Q1,{children:n.events.toSorted((h,m)=>m.timestamp-h.timestamp).map(h=>d(bg,{event:h,shouldFlash:r(h.id)}))})]})},Q1=({children:n})=>d("div",{className:"relative pl-6 flex flex-col gap-y-1",children:[d("div",{className:"absolute left-3 top-0 bottom-0 w-px bg-[#27272A]"}),n]}),q1=n=>{const r=we([]),[i,a]=Ie(new Set),l=we(!0);return ze(()=>{if(l.current){l.current=!1,r.current=n;return}const c=new Set(n.map(m=>m.id)),p=new Set(r.current.map(m=>m.id)),h=new Set;c.forEach(m=>{p.has(m)||h.add(m)}),h.size>0&&(a(h),setTimeout(()=>{a(new Set)},2e3)),r.current=n},[n]),c=>i.has(c)},K1=({shouldFlash:n})=>{const[r,i]=Ie(n);return ze(()=>{if(n){i(!0);const a=setTimeout(()=>{i(!1)},1e3);return()=>clearTimeout(a)}},[n]),r},bg=({event:n,shouldFlash:r})=>{const{notificationState:i,setNotificationState:a}=an(),l=Ji(n),c=K1({shouldFlash:r});switch(n.kind){case"interaction":return d("button",{onClick:()=>{a(p=>({...p,selectedEvent:n,route:"render-visualization",selectedFiber:null}))},className:P(["pl-2 py-1.5  text-sm flex w-full items-center rounded-sm hover:bg-[#18181B] relative overflow-hidden",n.id===i.selectedEvent?.id&&"bg-[#18181B]",c&&"after:absolute after:inset-0 after:bg-purple-500/30 after:animate-[fadeOut_1s_ease-out_forwards]"]),children:[d("div",{className:P(["w-4/5 flex items-center justify-start h-full gap-x-1.5"]),children:[d("span",{className:P(["min-w-fit text-xs"]),children:Tn(()=>{switch(n.type){case"click":return d(S1,{size:14});case"keyboard":return d(C1,{size:14})}})}),d("span",{className:P(["text-xs pr-1 truncate"]),children:Bi(n.componentPath)})]}),d("div",{className:P([" min-w-fit flex justify-end items-center ml-auto"]),children:d("div",{style:{lineHeight:"10px"},className:P(["gap-x-0.5 w-fit flex items-end justify-center h-full text-white px-1 py-1 rounded-sm font-semibold text-[10px]",l==="low"&&"bg-green-500/50",l==="needs-improvement"&&"bg-[#b77116] text-[10px]",l==="high"&&"bg-[#b94040]"]),children:d("div",{style:{lineHeight:"10px"},className:P(["text-[10px] text-white flex items-end"]),children:[zt(n.timing).toFixed(0),"ms"]})})})]});case"dropped-frames":return d("button",{onClick:()=>{a(p=>({...p,selectedEvent:n,route:"render-visualization",selectedFiber:null}))},className:P(["pl-2 py-1.5  w-full text-sm flex items-center rounded-sm hover:bg-[#18181B] relative overflow-hidden",n.id===i.selectedEvent?.id&&"bg-[#18181B]",c&&"after:absolute after:inset-0 after:bg-purple-500/30 after:animate-[fadeOut_1s_ease-out_forwards]"]),children:[d("div",{className:P(["w-4/5 flex items-center justify-start h-full text-xs truncate"]),children:[d(E1,{size:14,className:"mr-1.5"})," FPS Drop"]}),d("div",{className:P([" min-w-fit flex justify-end items-center ml-auto"]),children:d("div",{style:{lineHeight:"10px"},className:P(["w-fit flex items-center justify-center h-full text-white px-1 py-1 rounded-sm text-[10px] font-bold",l==="low"&&"bg-green-500/60",l==="needs-improvement"&&"bg-[#b77116] text-[10px]",l==="high"&&"bg-[#b94040]"]),children:[n.fps," FPS"]})})]})}},J1=n=>n.reduce((i,a)=>{const l=i.at(-1);if(!l)return[{kind:"single",event:a,timestamp:a.timestamp}];switch(l.kind){case"collapsed-keyboard":return a.kind==="interaction"&&a.type==="keyboard"&&a.componentPath.join("-")===l.events[0].componentPath.join("-")?[...i.filter(p=>p!==l),{kind:"collapsed-keyboard",events:[...l.events,a],timestamp:Math.max(...[...l.events,a].map(p=>p.timestamp))}]:[...i,{kind:"single",event:a,timestamp:a.timestamp}];case"single":return l.event.kind==="interaction"&&l.event.type==="keyboard"&&a.kind==="interaction"&&a.type==="keyboard"&&l.event.componentPath.join("-")===a.componentPath.join("-")?[...i.filter(p=>p!==l),{kind:"collapsed-keyboard",events:[l.event,a],timestamp:Math.max(l.event.timestamp,a.timestamp)}]:l.event.kind==="dropped-frames"&&a.kind==="dropped-frames"?[...i.filter(p=>p!==l),{kind:"collapsed-frame-drops",events:[l.event,a],timestamp:Math.max(l.event.timestamp,a.timestamp)}]:[...i,{kind:"single",event:a,timestamp:a.timestamp}];case"collapsed-frame-drops":return a.kind==="dropped-frames"?[...i.filter(p=>p!==l),{kind:"collapsed-frame-drops",events:[...l.events,a],timestamp:Math.max(...[...l.events,a].map(p=>p.timestamp))}]:[...i,{kind:"single",event:a,timestamp:a.timestamp}]}},[]),kg=(n=150)=>{const{notificationState:r}=an(),[i,a]=Ie(r.events);return ze(()=>{setTimeout(()=>{a(r.events)},n)},[r.events]),[i,a]},Z1=()=>{const{notificationState:n,setNotificationState:r}=an(),i=q1(n.events),[a,l]=kg(),c=J1(a).toSorted((p,h)=>h.timestamp-p.timestamp);return d("div",{className:P(["w-full h-full gap-y-2 flex flex-col border-r border-[#27272A] overflow-y-auto"]),children:[d("div",{className:P(["text-sm text-[#65656D] pl-3 pr-1 w-full flex items-center justify-between"]),children:[d("span",{children:"History"}),d(xg,{wrapperProps:{className:"h-full flex items-center justify-center ml-auto"},triggerContent:d("button",{className:P(["hover:bg-[#18181B] rounded-full p-2"]),title:"Clear all events",onClick:()=>{Yi.getState().actions.clear(),r(p=>({...p,selectedEvent:null,selectedFiber:null,route:p.route==="other-visualization"?"other-visualization":"render-visualization"})),l([])},children:d(N1,{className:P([""]),size:16})}),children:d("div",{className:P(["w-full flex justify-center"]),children:"Clear all events"})})]}),d("div",{className:P(["flex flex-col px-1 gap-y-1"]),children:[c.length===0&&d("div",{className:P(["flex items-center justify-center text-zinc-500 text-sm py-4"]),children:"No Events"}),c.map(p=>Tn(()=>{switch(p.kind){case"collapsed-keyboard":return d(Gh,{shouldFlash:i,item:p});case"single":return d(bg,{event:p.event,shouldFlash:i(p.event.id)},p.event.id);case"collapsed-frame-drops":return d(Gh,{shouldFlash:i,item:p})}}))]})]})},eb=n=>Object.values(n).map(i=>({id:Nn(),totalTime:i.nodeInfo.reduce((a,l)=>a+l.selfTime,0),count:i.nodeInfo.length,name:i.nodeInfo[0].name,deletedAll:!1,parents:i.parents,hasMemoCache:i.hasMemoCache,wasFiberRenderMount:i.wasFiberRenderMount,elements:i.nodeInfo.map(a=>a.element),changes:{context:i.changes.fiberContext.current.filter(a=>i.changes.fiberContext.changesCounts.get(a.name)).map(a=>({name:String(a.name),count:i.changes.fiberContext.changesCounts.get(a.name)??0})),props:i.changes.fiberProps.current.filter(a=>i.changes.fiberProps.changesCounts.get(a.name)).map(a=>({name:String(a.name),count:i.changes.fiberProps.changesCounts.get(a.name)??0})),state:i.changes.fiberState.current.filter(a=>i.changes.fiberState.changesCounts.get(Number(a.name))).map(a=>({index:a.name,count:i.changes.fiberState.changesCounts.get(Number(a.name))??0}))}})),tb=n=>{ze(()=>{const i=setInterval(()=>{n.forEach(a=>{a.groupedFiberRenders&&a.groupedFiberRenders.forEach(l=>{if(l.deletedAll)return;if(!l.elements||l.elements.length===0){l.deletedAll=!0;return}const c=l.elements.length;l.elements=l.elements.filter(p=>p&&p.isConnected),l.elements.length===0&&c>0&&(l.deletedAll=!0)})})},5e3);return()=>{clearInterval(i)}},[n])},_g=()=>{const n=h1(),r=[];return tb(r),n.state.events.forEach(i=>{const a=i.kind==="interaction"?i.data.meta.detailedTiming.fiberRenders:i.data.meta.fiberRenders,l=eb(a),c=l.reduce((p,h)=>p+h.totalTime,0);switch(i.kind){case"interaction":{const{commitEnd:p,jsEndDetail:h,interactionStartDetail:m,rafStart:g}=i.data.meta.detailedTiming,x=Math.max(0,h-m-c),w=Math.max(i.data.meta.latency-(p-m),0);r.push({componentPath:i.data.meta.detailedTiming.componentPath,groupedFiberRenders:l,id:i.id,kind:"interaction",memory:null,timestamp:i.data.startAt,type:i.data.meta.detailedTiming.interactionType==="keyboard"?"keyboard":"click",timing:{renderTime:c,kind:"interaction",otherJSTime:x,framePreparation:g-h,frameConstruction:p-g,frameDraw:w}});return}case"long-render":{r.push({kind:"dropped-frames",id:i.id,memory:null,timing:{kind:"dropped-frames",renderTime:c,otherTime:i.data.meta.latency},groupedFiberRenders:l,timestamp:i.data.startAt,fps:i.data.meta.fps});return}}}),r},nb=1e3,rb=()=>{const{notificationState:n,setNotificationState:r}=an(),i=we(null),a=we(null),l=we(0),[c]=kg(),p=c.filter(h=>Ji(h)==="high").length;return ze(()=>{const h=localStorage.getItem("react-scan-notifications-audio");if(h!=="false"&&h!=="true"){localStorage.setItem("react-scan-notifications-audio","false");return}if(h!=="false"){r(g=>g.audioNotificationsOptions.enabled?g:{...g,audioNotificationsOptions:{enabled:!0,audioContext:new AudioContext}});return}},[]),ze(()=>{const{audioNotificationsOptions:h}=n;if(!h.enabled||p===0||i.current&&i.current>=p)return;a.current&&clearTimeout(a.current);const g=Date.now()-l.current,x=Math.max(0,nb-g);a.current=setTimeout(()=>{Xu(h.audioContext),i.current=p,l.current=Date.now(),a.current=null},x)},[p]),ze(()=>{p===0&&(i.current=null)},[p]),ze(()=>()=>{a.current&&clearTimeout(a.current)},[]),null},ob=Bu((n,r)=>{const i=_g(),[a,l]=Ie({detailsExpanded:!1,events:i,filterBy:"latest",moreInfoExpanded:!1,route:"render-visualization",selectedEvent:i.toSorted((c,p)=>c.timestamp-p.timestamp).at(-1)??null,selectedFiber:null,routeMessage:null,audioNotificationsOptions:{enabled:!1,audioContext:null}});return a.events=i,d(vg.Provider,{value:{notificationState:a,setNotificationState:l,setRoute:({route:c,routeMessage:p})=>{l(h=>{const m={...h,route:c,routeMessage:p};switch(c){case"render-visualization":return Pi(),{...m,selectedFiber:null};case"optimize":return Pi(),{...m,selectedFiber:null};case"other-visualization":return Pi(),{...m,selectedFiber:null};case"render-explanation":return Pi(),m}})}},children:[d(rb,{}),d(ib,{ref:r})]})}),ib=Bu((n,r)=>{const{notificationState:i}=an();return d("div",{ref:r,className:P(["h-full w-full flex flex-col"]),children:[i.selectedEvent&&d("div",{className:P(["w-full h-[48px] flex flex-col",i.moreInfoExpanded&&"h-[235px]",i.moreInfoExpanded&&i.selectedEvent.kind==="dropped-frames"&&"h-[150px]"]),children:[d(X1,{selectedEvent:i.selectedEvent}),i.moreInfoExpanded&&d(ab,{})]}),d("div",{className:P(["flex ",i.selectedEvent?"h-[calc(100%-48px)]":"h-full",i.moreInfoExpanded&&"h-[calc(100%-200px)]",i.moreInfoExpanded&&i.selectedEvent?.kind==="dropped-frames"&&"h-[calc(100%-150px)]"]),children:[d("div",{className:P(["h-full min-w-[200px]"]),children:d(Z1,{})}),d("div",{className:P(["w-[calc(100%-200px)] h-full overflow-y-auto"]),children:d(B1,{})})]})]})}),ab=()=>{const{notificationState:n}=an();if(!n.selectedEvent)throw new Error("Invariant must have selected event for more info");const r=n.selectedEvent;return d("div",{className:P(["px-4 py-2 border-b border-[#27272A] bg-[#18181B]/50 h-[calc(100%-40px)]",r.kind==="dropped-frames"&&"h-[calc(100%-25px)]"]),children:d("div",{className:P(["flex flex-col gap-y-4 h-full"]),children:Tn(()=>{switch(r.kind){case"interaction":return d(Re,{children:[d("div",{className:P(["flex items-center gap-x-3"]),children:[d("span",{className:"text-[#6F6F78] text-xs font-medium",children:r.type==="click"?"Clicked component location":"Typed in component location"}),d("div",{className:"font-mono text-[#E4E4E7] flex items-center bg-[#27272A] pl-2 py-1 rounded-sm overflow-x-auto",children:r.componentPath.toReversed().map((i,a)=>d(Re,{children:[d("span",{style:{lineHeight:"14px"},className:"text-[10px] whitespace-nowrap",children:i},i),a<r.componentPath.length-1&&d("span",{className:"text-[#6F6F78] mx-0.5",children:"‹"})]}))})]}),d("div",{className:P(["flex items-center gap-x-3"]),children:[d("span",{className:"text-[#6F6F78] text-xs font-medium",children:"Total Time"}),d("span",{className:"text-[#E4E4E7] bg-[#27272A] px-1.5 py-1 rounded-sm text-xs",children:[zt(r.timing).toFixed(0),"ms"]})]}),d("div",{className:P(["flex items-center gap-x-3"]),children:[d("span",{className:"text-[#6F6F78] text-xs font-medium",children:"Occurred"}),d("span",{className:"text-[#E4E4E7] bg-[#27272A] px-1.5 py-1 rounded-sm text-xs",children:`${((Date.now()-r.timestamp)/1e3).toFixed(0)}s ago`})]})]});case"dropped-frames":return d(Re,{children:[d("div",{className:P(["flex items-center gap-x-3"]),children:[d("span",{className:"text-[#6F6F78] text-xs font-medium",children:"Total Time"}),d("span",{className:"text-[#E4E4E7] bg-[#27272A] px-1.5 py-1 rounded-sm text-xs",children:[zt(r.timing).toFixed(0),"ms"]})]}),d("div",{className:P(["flex items-center gap-x-3"]),children:[d("span",{className:"text-[#6F6F78] text-xs font-medium",children:"Occurred"}),d("span",{className:"text-[#E4E4E7] bg-[#27272A] px-1.5 py-1 rounded-sm text-xs",children:`${((Date.now()-r.timestamp)/1e3).toFixed(0)}s ago`})]})]})}})})})},sb=Qu(()=>{const n=_g(),[r,i]=Ie(n);ze(()=>{const y=setTimeout(()=>{i(n)},600);return()=>{clearTimeout(y)}},[n]);const a=ce.inspectState,l=a.value.kind==="inspecting",c=a.value.kind==="focused",[p,h]=Ie([]),m=ft(()=>{switch(ce.inspectState.value.kind){case"inspecting":{Ke.value={view:"none"},ce.inspectState.value={kind:"inspect-off"};return}case"focused":{Ke.value={view:"inspector"},ce.inspectState.value={kind:"inspecting",hoveredDomElement:null};return}case"inspect-off":{Ke.value={view:"none"},ce.inspectState.value={kind:"inspecting",hoveredDomElement:null};return}case"uninitialized":return}},[]),g=ft(y=>{if(y.preventDefault(),y.stopPropagation(),!$e.instrumentation)return;const b=!$e.instrumentation.isPaused.value;$e.instrumentation.isPaused.value=b;const N=rr("react-scan-options");Zt("react-scan-options",{...N,enabled:!b})},[]);Wi(()=>{ce.inspectState.value.kind==="uninitialized"&&(ce.inspectState.value={kind:"inspect-off"})});let x=null,w="#999";return l?(x=d(ct,{name:"icon-inspect"}),w="#8e61e3"):c?(x=d(ct,{name:"icon-focus"}),w="#8e61e3"):(x=d(ct,{name:"icon-inspect"}),w="#999"),Uu(()=>{if(Ke.value.view!=="notifications")return;const y=new Set(n.map(b=>b.id));h([...y.values()])},[n.length,Ke.value.view]),d("div",{className:"flex max-h-9 min-h-9 flex-1 items-stretch overflow-hidden",children:[d("div",{className:"h-full flex items-center min-w-fit",children:d("button",{type:"button",id:"react-scan-inspect-element",title:"Inspect element",onClick:m,className:"button flex items-center justify-center h-full w-full pl-3 pr-2.5",style:{color:w},children:x})}),d("div",{className:"h-full flex items-center justify-center",children:d("button",{type:"button",id:"react-scan-notifications",title:"Notifications",onClick:()=>{switch(ce.inspectState.value.kind!=="inspect-off"&&(ce.inspectState.value={kind:"inspect-off"}),Ke.value.view){case"inspector":{ce.inspectState.value={kind:"inspect-off"};const y=new Set(n.map(b=>b.id));h([...y.values()]),Ke.value={view:"notifications"};return}case"notifications":{Ke.value={view:"none"};return}case"none":{const y=new Set(n.map(b=>b.id));h([...y.values()]),Ke.value={view:"notifications"};return}}},className:"button flex items-center justify-center h-full pl-2.5 pr-2.5",style:{color:w},children:d(y1,{events:r.filter(y=>!p.includes(y.id)).map(y=>Ji(y)==="high"),size:16,className:P(["text-[#999]",Ke.value.view==="notifications"&&"text-[#8E61E3]"])})})}),d(Gy,{checked:!$e.instrumentation?.isPaused.value,onChange:g,className:"place-self-center",title:"Outline Re-renders"}),$e.options.value.showFPS&&d(qy,{})]})}),lb=ro(()=>ce.inspectState.value.kind==="inspecting"),cb=ro(()=>P("relative","flex-1","flex flex-col","rounded-t-lg","overflow-hidden","opacity-100","transition-[opacity]",lb.value&&"opacity-0 duration-0 delay-0")),ub=ro(()=>Ke.value.view==="inspector"),db=ro(()=>Ke.value.view==="notifications"),pb=()=>d("div",{className:P("flex flex-1 flex-col","overflow-hidden z-10","rounded-lg","bg-black","opacity-100","transition-[border-radius]","peer-hover/left:rounded-l-none","peer-hover/right:rounded-r-none","peer-hover/top:rounded-t-none","peer-hover/bottom:rounded-b-none"),children:[d("div",{className:cb,children:[d(Xy,{}),d("div",{className:P("relative","flex-1 flex","text-white","bg-[#0A0A0A]","transition-opacity delay-150","overflow-hidden","border-b border-[#222]"),children:[d(Qh,{isOpen:ub,children:d(Zx,{})}),d(Qh,{isOpen:db,children:d(ob,{})})]})]}),d(sb,{})]}),Qh=({isOpen:n,children:r})=>d("div",{className:P("flex-1","opacity-0","overflow-y-auto overflow-x-hidden","transition-opacity delay-0","pointer-events-none",n.value&&"opacity-100 delay-150 pointer-events-auto"),children:d("div",{className:"absolute inset-0 flex",children:r})}),hs=(n,r,i)=>n+(r-n)*i,tu={frameInterval:1e3/60,speeds:{fast:.51,slow:.1,off:0}},zo=Un&&window.devicePixelRatio||1,fb=()=>{const n=we(null),r=we(null),i=we(null),a=we(null),l=we(null),c=we(0),p=we(),h=we(new Map),m=we(!1),g=we(0),x=(C,F,M,U)=>{C.save(),C.strokeStyle="white",C.fillStyle="white",C.lineWidth=1.5;const O=U*.6,S=U*.5,R=F+(U-O)/2,B=M;C.beginPath(),C.arc(R+O/2,B+S/2,O/2,Math.PI,0,!1),C.stroke();const Q=U*.8,Y=U*.5,Z=F+(U-Q)/2,oe=M+S/2;C.fillRect(Z,oe,Q,Y),C.restore()},w=(C,F,M,U)=>{if(!U)return;const O=24,S=8,B=(U?.type&&Mt(U.type))??"Unknown";C.save(),C.font="12px system-ui, -apple-system, sans-serif";const Y=C.measureText(B).width,Z=M==="locked"?14:0,oe=M==="locked"?6:0,ie=Y+S*2+Z+oe,le=F.left,Se=F.top-O-4;if(C.fillStyle="rgb(37, 37, 38, .75)",C.beginPath(),C.roundRect(le,Se,ie,O,3),C.fill(),M==="locked"){const xe=le+S,ne=Se+(O-Z)/2+2;x(C,xe,ne,Z),a.current={x:xe,y:ne,width:Z,height:Z}}else a.current=null;C.fillStyle="white",C.textBaseline="middle";const te=le+S+(M==="locked"?Z+oe:0);C.fillText(B,te,Se+O/2),C.restore()},y=(C,F,M,U)=>{if(!i.current)return;const O=i.current;F.clearRect(0,0,C.width,C.height),F.strokeStyle="rgba(142, 97, 227, 0.5)",F.fillStyle="rgba(173, 97, 230, 0.10)",M==="locked"?F.setLineDash([]):F.setLineDash([4]),F.lineWidth=1,F.fillRect(O.left,O.top,O.width,O.height),F.strokeRect(O.left,O.top,O.width,O.height),w(F,O,M,U)},b=(C,F,M,U,O,S)=>{const R=$e.options.value.animationSpeed,B=tu.speeds[R]??tu.speeds.off,Q=Y=>{if(Y-g.current<tu.frameInterval){c.current=requestAnimationFrame(Q);return}if(g.current=Y,!i.current){cancelAnimationFrame(c.current);return}i.current={left:hs(i.current.left,M.left,B),top:hs(i.current.top,M.top,B),width:hs(i.current.width,M.width,B),height:hs(i.current.height,M.height,B)},y(C,F,U,O),Math.abs(i.current.left-M.left)>.1||Math.abs(i.current.top-M.top)>.1||Math.abs(i.current.width-M.width)>.1||Math.abs(i.current.height-M.height)>.1?c.current=requestAnimationFrame(Q):(i.current=M,y(C,F,U,O),cancelAnimationFrame(c.current),F.restore())};cancelAnimationFrame(c.current),clearTimeout(p.current),c.current=requestAnimationFrame(Q),p.current=setTimeout(()=>{cancelAnimationFrame(c.current),i.current=M,y(C,F,U,O),F.restore()},1e3)},N=(C,F,M,U,O)=>{if(F.save(),!i.current){i.current=M,y(C,F,U,O),F.restore();return}b(C,F,M,U,O)},E=async(C,F,M,U)=>{if(!C||!F||!M)return;const{parentCompositeFiber:O}=qr(C),S=await ey(C);!O||!S||N(F,M,S,U,O)},I=()=>{for(const C of h.current.values())C?.()},k=C=>{const F=C.getContext("2d");F&&F.clearRect(0,0,C.width,C.height),i.current=null,a.current=null,l.current=null,C.classList.remove("fade-in"),m.current=!1},z=C=>{if(!n.current||m.current)return;const F=U=>{!n.current||U.propertyName!=="opacity"||!m.current||(n.current.removeEventListener("transitionend",F),k(n.current),C?.())},M=h.current.get("fade-out");M&&(M(),h.current.delete("fade-out")),n.current.addEventListener("transitionend",F),h.current.set("fade-out",()=>{n.current?.removeEventListener("transitionend",F)}),m.current=!0,n.current.classList.remove("fade-in"),requestAnimationFrame(()=>{n.current?.classList.add("fade-out")})},H=()=>{n.current&&(m.current=!1,n.current.classList.remove("fade-out"),requestAnimationFrame(()=>{n.current?.classList.add("fade-in")}))},W=C=>{C!==l.current&&(l.current=C,_u.has(C.tagName)?z():H(),ce.inspectState.value={kind:"inspecting",hoveredDomElement:C})},V=()=>{!i.current||!n.current||m.current||z()},K=Gm(C=>{if(ce.inspectState.peek().kind!=="inspecting"||!r.current)return;r.current.style.pointerEvents="none";const M=document.elementFromPoint(C?.clientX??0,C?.clientY??0);if(r.current.style.removeProperty("pointer-events"),clearTimeout(p.current),M&&M!==n.current){const{parentCompositeFiber:U}=qr(M);if(U){const O=Ps(U);if(O){W(O);return}}}V()},32),ee=(C,F)=>{const M=a.current;if(!M)return!1;const U=F.getBoundingClientRect(),O=F.width/U.width,S=F.height/U.height,R=(C.clientX-U.left)*O,B=(C.clientY-U.top)*S,Q=R/zo,Y=B/zo;return Q>=M.x&&Q<=M.x+M.width&&Y>=M.y&&Y<=M.y+M.height},ge=C=>{C.kind==="focused"&&(ce.inspectState.value={kind:"inspecting",hoveredDomElement:C.focusedDomElement})},ae=C=>{const F=["react-scan-inspect-element","react-scan-power"];if(C.target instanceof HTMLElement&&F.includes(C.target.id))return;const M=l.current?.tagName;if(M&&_u.has(M))return;C.preventDefault(),C.stopPropagation();const U=l.current??document.elementFromPoint(C.clientX,C.clientY);if(!U)return;const O=C.composedPath().at(0);if(O instanceof HTMLElement&&F.includes(O.id)){const B=new MouseEvent(C.type,C);B.__reactScanSyntheticEvent=!0,O.dispatchEvent(B);return}const{parentCompositeFiber:S}=qr(U);if(!S)return;const R=Ps(S);if(!R){l.current=null,ce.inspectState.value={kind:"inspect-off"};return}ce.inspectState.value={kind:"focused",focusedDomElement:R,fiber:S}},ve=C=>{if(C.__reactScanSyntheticEvent)return;const F=ce.inspectState.peek(),M=n.current;if(!(!M||!r.current)){if(ee(C,M)){C.preventDefault(),C.stopPropagation(),ge(F);return}F.kind==="inspecting"&&ae(C)}},me=C=>{if(C.key!=="Escape")return;const F=ce.inspectState.peek();if(n.current&&document.activeElement?.id!=="react-scan-root"&&(Ke.value={view:"none"},F.kind==="focused"||F.kind==="inspecting"))switch(C.preventDefault(),C.stopPropagation(),F.kind){case"focused":{H(),i.current=null,l.current=F.focusedDomElement,ce.inspectState.value={kind:"inspecting",hoveredDomElement:F.focusedDomElement};break}case"inspecting":{z(()=>{Xs.value=!1,ce.inspectState.value={kind:"inspect-off"}});break}}},re=(C,F,M)=>{h.current.get(C.kind)?.(),r.current&&C.kind!=="inspecting"&&(r.current.style.pointerEvents="none"),c.current&&cancelAnimationFrame(c.current);let U;switch(C.kind){case"inspect-off":z();return;case"inspecting":E(C.hoveredDomElement,F,M,"inspecting");break;case"focused":if(!C.focusedDomElement)return;l.current!==C.focusedDomElement&&(l.current=C.focusedDomElement),Ke.value={view:"inspector"},E(C.focusedDomElement,F,M,"locked"),U=ce.lastReportTime.subscribe(()=>{if(c.current&&i.current){const{parentCompositeFiber:O}=qr(C.focusedDomElement);O&&E(C.focusedDomElement,F,M,"locked")}}),U&&h.current.set(C.kind,U);break}},Te=(C,F)=>{const M=C.getBoundingClientRect();C.width=M.width*zo,C.height=M.height*zo,F.scale(zo,zo),F.save()},Ce=()=>{const C=ce.inspectState.peek(),F=n.current;if(!F)return;const M=F?.getContext("2d");M&&(cancelAnimationFrame(c.current),clearTimeout(p.current),Te(F,M),i.current=null,C.kind==="focused"&&C.focusedDomElement?E(C.focusedDomElement,F,M,"locked"):C.kind==="inspecting"&&C.hoveredDomElement&&E(C.hoveredDomElement,F,M,"inspecting"))},ke=C=>{const F=ce.inspectState.peek(),M=n.current;M&&(F.kind==="inspecting"||ee(C,M))&&(C.preventDefault(),C.stopPropagation(),C.stopImmediatePropagation())};return ze(()=>{const C=n.current;if(!C)return;const F=C?.getContext("2d");if(!F)return;Te(C,F);const M=ce.inspectState.subscribe(U=>{re(U,C,F)});return window.addEventListener("scroll",Ce,{passive:!0}),window.addEventListener("resize",Ce,{passive:!0}),document.addEventListener("pointermove",K,{passive:!0,capture:!0}),document.addEventListener("pointerdown",ke,{capture:!0}),document.addEventListener("click",ve,{capture:!0}),document.addEventListener("keydown",me,{capture:!0}),()=>{I(),M(),window.removeEventListener("scroll",Ce),window.removeEventListener("resize",Ce),document.removeEventListener("pointermove",K,{capture:!0}),document.removeEventListener("click",ve,{capture:!0}),document.removeEventListener("pointerdown",ke,{capture:!0}),document.removeEventListener("keydown",me,{capture:!0}),c.current&&cancelAnimationFrame(c.current),clearTimeout(p.current)}},[]),d(Re,{children:[d("div",{ref:r,className:P("fixed top-0 left-0 w-screen h-screen","z-[214748365]"),style:{pointerEvents:"none"}}),d("canvas",{ref:n,dir:"ltr",className:P("react-scan-inspector-overlay","fixed top-0 left-0 w-screen h-screen","pointer-events-none","z-[214748367]")})]})},hb=class{constructor(n,r){this.width=n,this.height=r,this.maxWidth=n-Ne*2,this.maxHeight=r-Ne*2}rightEdge(n){return this.width-n-Ne}bottomEdge(n){return this.height-n-Ne}isFullWidth(n){return n>=this.maxWidth}isFullHeight(n){return n>=this.maxHeight}},Io,Xi=()=>{const n=window.innerWidth,r=window.innerHeight;return Io&&Io.width===n&&Io.height===r||(Io=new hb(n,r)),Io},mb=(n,r,i,a,l)=>{if(i){if(n==="top-left")return"bottom-right";if(n==="top-right")return"bottom-left";if(n==="bottom-left")return"top-right";if(n==="bottom-right")return"top-left";const[c,p]=r.split("-");if(n==="left")return`${c}-right`;if(n==="right")return`${c}-left`;if(n==="top")return`bottom-${p}`;if(n==="bottom")return`top-${p}`}if(a){if(n==="left")return`${r.split("-")[0]}-right`;if(n==="right")return`${r.split("-")[0]}-left`}if(l){if(n==="top")return`bottom-${r.split("-")[1]}`;if(n==="bottom")return`top-${r.split("-")[1]}`}return r},$i=(n,r,i)=>{const a=getComputedStyle(document.body).direction==="rtl",l=window.innerWidth,c=window.innerHeight,p=r===wt.width,h=p?r:Math.min(r,l-Ne*2),m=p?i:Math.min(i,c-Ne*2);let g,x,w=Ne,y=l-h-Ne,b=Ne,N=c-m-Ne;switch(n){case"top-right":g=a?-w:y,x=b;break;case"bottom-right":g=a?-w:y,x=N;break;case"bottom-left":g=a?-y:w,x=N;break;case"top-left":g=a?-y:w,x=b;break;default:g=w,x=b;break}return p&&(a?g=Math.min(-w,Math.max(g,-y)):g=Math.max(w,Math.min(g,y)),x=Math.max(b,Math.min(x,N))),{x:g,y:x}},gb=(n,r)=>{const[i,a]=r.split("-");return n!==i&&n!==a},vb=(n,r,i,a)=>i&&a?!0:!i&&!a?gb(n,r):i?n!==r.split("-")[0]:a?n!==r.split("-")[1]:!1,ms=(n,r,i)=>{const a=i?wt.width:wt.initialHeight,l=i?Xi().maxWidth:Xi().maxHeight,c=n+r;return Math.min(Math.max(a,c),l)},wb=(n,r,i,a,l)=>{const c=getComputedStyle(document.body).direction==="rtl",p=window.innerWidth-Ne*2,h=window.innerHeight-Ne*2;let m=r.width,g=r.height,x=i.x,w=i.y;if(c&&n.includes("right")){const I=-i.x+r.width-Ne,k=Math.min(r.width+a,I);m=Math.min(p,Math.max(wt.width,k)),x=i.x+(m-r.width)}if(c&&n.includes("left")){const I=window.innerWidth-i.x-Ne,k=Math.min(r.width-a,I);m=Math.min(p,Math.max(wt.width,k))}if(!c&&n.includes("right")){const I=window.innerWidth-i.x-Ne,k=Math.min(r.width+a,I);m=Math.min(p,Math.max(wt.width,k))}if(!c&&n.includes("left")){const I=i.x+r.width-Ne,k=Math.min(r.width-a,I);m=Math.min(p,Math.max(wt.width,k)),x=i.x-(m-r.width)}if(n.includes("bottom")){const I=window.innerHeight-i.y-Ne,k=Math.min(r.height+l,I);g=Math.min(h,Math.max(wt.initialHeight,k))}if(n.includes("top")){const I=i.y+r.height-Ne,k=Math.min(r.height-l,I);g=Math.min(h,Math.max(wt.initialHeight,k)),w=i.y-(g-r.height)}let y=Ne,b=window.innerWidth-Ne-m,N=Ne,E=window.innerHeight-Ne-g;return c?x=Math.min(-y,Math.max(x,-b)):x=Math.max(y,Math.min(x,b)),w=Math.max(N,Math.min(w,E)),{newSize:{width:m,height:g},newPosition:{x,y:w}}},xb=n=>{const r=Xi(),i={"top-left":Math.hypot(n.x,n.y),"top-right":Math.hypot(r.maxWidth-n.x,n.y),"bottom-left":Math.hypot(n.x,r.maxHeight-n.y),"bottom-right":Math.hypot(r.maxWidth-n.x,r.maxHeight-n.y)};let a="top-left";for(const l in i)i[l]<i[a]&&(a=l);return a},yb=(n,r,i,a,l=100)=>{const c=i!==void 0?n-i:0,p=a!==void 0?r-a:0,h=window.innerWidth/2,m=window.innerHeight/2,g=c>l,x=c<-l,w=p>l,y=p<-l;if(g||x){const b=r>m;return g?b?"bottom-right":"top-right":b?"bottom-left":"top-left"}if(w||y){const b=n>h;return w?b?"bottom-right":"bottom-left":b?"top-right":"top-left"}return n>h?r>m?"bottom-right":"top-right":r>m?"bottom-left":"top-left"},gs=({position:n})=>{const r=we(null),i=we(null),a=we(null),l=we(null);ze(()=>{const h=r.current;if(!h)return;const m=()=>{h.classList.remove("pointer-events-none");const w=ce.inspectState.value.kind==="focused",y=Ke.value.view!=="none";(w||y)&&vb(n,de.value.corner,de.value.dimensions.isFullWidth,de.value.dimensions.isFullHeight)?h.classList.remove("hidden","pointer-events-none","opacity-0"):h.classList.add("hidden","pointer-events-none","opacity-0")},g=de.subscribe(w=>{i.current!==null&&a.current!==null&&l.current!==null&&w.dimensions.width===i.current&&w.dimensions.height===a.current&&w.corner===l.current||(m(),i.current=w.dimensions.width,a.current=w.dimensions.height,l.current=w.corner)}),x=ce.inspectState.subscribe(()=>{m()});return()=>{g(),x(),i.current=null,a.current=null,l.current=null}},[]);const c=ft(h=>{h.preventDefault(),h.stopPropagation();const m=xu.value;if(!m)return;const g=m.style,{dimensions:x}=de.value,w=h.clientX,y=h.clientY,b=x.width,N=x.height,E=x.position;de.value={...de.value,dimensions:{...x,isFullWidth:!1,isFullHeight:!1,width:b,height:N,position:E}};let I=null;const k=H=>{I||(g.transition="none",I=requestAnimationFrame(()=>{const{newSize:W,newPosition:V}=wb(n,{width:b,height:N},E,H.clientX-w,H.clientY-y);g.transform=`translate3d(${V.x}px, ${V.y}px, 0)`,g.width=`${W.width}px`,g.height=`${W.height}px`;const K=Math.floor(W.width-En/2),ee=de.value.componentsTree.width,ge=Math.min(K,Math.max(En,ee));de.value={...de.value,dimensions:{isFullWidth:!1,isFullHeight:!1,width:W.width,height:W.height,position:V},componentsTree:{...de.value.componentsTree,width:ge}},I=null}))},z=()=>{I&&(cancelAnimationFrame(I),I=null),document.removeEventListener("pointermove",k),document.removeEventListener("pointerup",z);const{dimensions:H,corner:W}=de.value,V=Xi(),K=V.isFullWidth(H.width),ee=V.isFullHeight(H.height),ge=K&&ee;let ae=W;(ge||K||ee)&&(ae=xb(H.position));const ve=$i(ae,H.width,H.height),me=()=>{m.removeEventListener("transitionend",me)};m.addEventListener("transitionend",me),g.transform=`translate3d(${ve.x}px, ${ve.y}px, 0)`,de.value={...de.value,corner:ae,dimensions:{isFullWidth:K,isFullHeight:ee,width:H.width,height:H.height,position:ve},lastDimensions:{isFullWidth:K,isFullHeight:ee,width:H.width,height:H.height,position:ve}},Zt(nr,{corner:ae,dimensions:de.value.dimensions,lastDimensions:de.value.lastDimensions,componentsTree:de.value.componentsTree})};document.addEventListener("pointermove",k,{passive:!0}),document.addEventListener("pointerup",z)},[]),p=ft(h=>{h.preventDefault(),h.stopPropagation();const m=xu.value;if(!m)return;const g=m.style,{dimensions:x,corner:w}=de.value,y=Xi(),b=y.isFullWidth(x.width),N=y.isFullHeight(x.height),E=b&&N,I=(b||N)&&!E;let k=x.width,z=x.height;const H=mb(n,w,E,b,N);n==="left"||n==="right"?(k=b?x.width:y.maxWidth,I&&(k=b?wt.width:y.maxWidth)):(z=N?x.height:y.maxHeight,I&&(z=N?wt.initialHeight:y.maxHeight)),E&&(n==="left"||n==="right"?k=wt.width:z=wt.initialHeight);const W=$i(H,k,z),V={isFullWidth:y.isFullWidth(k),isFullHeight:y.isFullHeight(z),width:k,height:z,position:W},K=Math.floor(k-wt.width/2),ee=de.value.componentsTree.width,ge=Math.floor(k*.3),ae=b?En:(n==="left"||n==="right")&&!b?Math.min(K,Math.max(En,ge)):Math.min(K,Math.max(En,ee));requestAnimationFrame(()=>{de.value={corner:H,dimensions:V,lastDimensions:x,componentsTree:{...de.value.componentsTree,width:ae}},g.transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",g.width=`${k}px`,g.height=`${z}px`,g.transform=`translate3d(${W.x}px, ${W.y}px, 0)`}),Zt(nr,{corner:H,dimensions:V,lastDimensions:x,componentsTree:{...de.value.componentsTree,width:ae}})},[]);return d("div",{ref:r,onPointerDown:c,onDblClick:p,className:P("absolute z-50","flex items-center justify-center","group","transition-colors select-none","peer",{"resize-left peer/left":n==="left","resize-right peer/right z-10":n==="right","resize-top peer/top":n==="top","resize-bottom peer/bottom":n==="bottom"}),children:d("span",{className:"resize-line-wrapper",children:d("span",{className:"resize-line",children:d(ct,{name:"icon-ellipsis",size:18,className:P("text-neutral-400",(n==="left"||n==="right")&&"rotate-90")})})})})},qh={horizontal:{width:20,height:48},vertical:{width:48,height:20}},bb=()=>{const n=we(null),r=we(!1),i=we(0),a=we(0),l=we(!1),c=ft((y=!0)=>{if(!n.current)return;const{corner:b}=de.value;let N,E;if(on.value){const ae=on.value.orientation||"horizontal",ve=qh[ae];N=ve.width,E=ve.height}else if(r.current){const ae=de.value.lastDimensions;N=ms(ae.width,0,!0),E=ms(ae.height,0,!1),l.current&&(l.current=!1)}else N=i.current,E=a.current;let k=$i(b,N,E);if(on.value){const{corner:ae,orientation:ve="horizontal"}=on.value,me=qh[ve];switch(ae){case"top-left":k=ve==="horizontal"?{x:-1,y:Ne}:{x:Ne,y:-1};break;case"bottom-left":k=ve==="horizontal"?{x:-1,y:window.innerHeight-me.height-Ne}:{x:Ne,y:window.innerHeight-me.height+1};break;case"top-right":k=ve==="horizontal"?{x:window.innerWidth-me.width+1,y:Ne}:{x:window.innerWidth-me.width-Ne,y:-1};break;case"bottom-right":default:k=ve==="horizontal"?{x:window.innerWidth-me.width+1,y:window.innerHeight-me.height-Ne}:{x:window.innerWidth-me.width-Ne,y:window.innerHeight-me.height+1};break}}const z=N<wt.width||E<wt.initialHeight,H=y&&!z,W=n.current,V=W.style;let K=null;const ee=()=>{Dc(),W.removeEventListener("transitionend",ee),K&&(cancelAnimationFrame(K),K=null)};W.addEventListener("transitionend",ee),V.transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",K=requestAnimationFrame(()=>{V.width=`${N}px`,V.height=`${E}px`,V.transform=`translate3d(${k.x}px, ${k.y}px, 0)`,K=null});const ge={isFullWidth:N>=window.innerWidth-Ne*2,isFullHeight:E>=window.innerHeight-Ne*2,width:N,height:E,position:k};de.value={corner:b,dimensions:ge,lastDimensions:r?de.value.lastDimensions:N>i.current?ge:de.value.lastDimensions,componentsTree:de.value.componentsTree},H&&Zt(nr,{corner:de.value.corner,dimensions:de.value.dimensions,lastDimensions:de.value.lastDimensions,componentsTree:de.value.componentsTree}),Dc()},[]),p=ft(y=>{if(y.preventDefault(),!n.current||y.target.closest("button"))return;const b=n.current,N=b.style,{dimensions:E}=de.value,I=y.clientX,k=y.clientY,z=E.position.x,H=E.position.y;let W=z,V=H,K=null,ee=!1,ge=I,ae=k;const ve=re=>{K||(ee=!0,ge=re.clientX,ae=re.clientY,K=requestAnimationFrame(()=>{const Te=ge-I,Ce=ae-k;W=Number(z)+Te,V=Number(H)+Ce,N.transition="none",N.transform=`translate3d(${W}px, ${V}px, 0)`;const ke=W+E.width,C=V+E.height,F=Math.max(0,-W),M=Math.max(0,ke-window.innerWidth),U=Math.max(0,-V),O=Math.max(0,C-window.innerHeight),S=Math.min(E.width,F+M),R=Math.min(E.height,U+O),B=S*E.height+R*E.width-S*R,Q=E.width*E.height;let Y=B>Q*.35;if(!Y&&$e.options.value.showFPS){const Z=W+E.width,oe=Z-100;Y=Z<=0||oe>=window.innerWidth||V+E.height<=0||V>=window.innerHeight}if(Y){const Z=W+E.width/2,oe=V+E.height/2,ie=window.innerWidth/2,le=window.innerHeight/2;let Se;Z<ie?Se=oe<le?"top-left":"bottom-left":Se=oe<le?"top-right":"bottom-right";let te;const xe=Math.max(F,M),ne=Math.max(U,O);te=xe>ne?"horizontal":"vertical",de.value={...de.value,corner:Se,lastDimensions:{...E,position:$i(Se,E.width,E.height)}};const je={corner:Se,orientation:te};on.value=je,Zt(ks,je),Zt(nr,de.value),c(!1),document.removeEventListener("pointermove",ve),document.removeEventListener("pointerup",me),K&&(cancelAnimationFrame(K),K=null)}K=null}))},me=()=>{if(!b)return;K&&(cancelAnimationFrame(K),K=null),document.removeEventListener("pointermove",ve),document.removeEventListener("pointerup",me);const re=Math.abs(ge-I),Te=Math.abs(ae-k),Ce=Math.sqrt(re*re+Te*Te);if(!ee||Ce<60)return;const ke=yb(ge,ae,I,k,ce.inspectState.value.kind==="focused"?80:40);if(ke===de.value.corner){N.transition="transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)";const M=de.value.dimensions.position;requestAnimationFrame(()=>{N.transform=`translate3d(${M.x}px, ${M.y}px, 0)`});return}const C=$i(ke,E.width,E.height);if(W===z&&V===H)return;const F=()=>{N.transition="none",Dc(),b.removeEventListener("transitionend",F),K&&(cancelAnimationFrame(K),K=null)};b.addEventListener("transitionend",F),N.transition="transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)",requestAnimationFrame(()=>{N.transform=`translate3d(${C.x}px, ${C.y}px, 0)`}),de.value={corner:ke,dimensions:{isFullWidth:E.isFullWidth,isFullHeight:E.isFullHeight,width:E.width,height:E.height,position:C},lastDimensions:de.value.lastDimensions,componentsTree:de.value.componentsTree},Zt(nr,{corner:ke,dimensions:de.value.dimensions,lastDimensions:de.value.lastDimensions,componentsTree:de.value.componentsTree})};document.addEventListener("pointermove",ve),document.addEventListener("pointerup",me)},[]),h=ft(y=>{if(y.preventDefault(),!n.current||!on.value)return;const{corner:b,orientation:N="horizontal"}=on.value,E=y.clientX,I=y.clientY;let k=null,z=!1;const H=50,W=K=>{if(z||k)return;const ee=K.clientX-E,ge=K.clientY-I;let ae=!1;if(N==="horizontal"?(b.endsWith("left")&&ee>H||b.endsWith("right")&&ee<-H)&&(ae=!0):(b.startsWith("top")&&ge>H||b.startsWith("bottom")&&ge<-H)&&(ae=!0),ae){if(z=!0,on.value=null,Zt(ks,null),i.current===0&&n.current)requestAnimationFrame(()=>{if(n.current){n.current.style.width="min-content";const ve=n.current.offsetWidth;i.current=ve||300;const me=de.value.lastDimensions,re=ms(me.width,0,!0),Te=ms(me.height,0,!1);let Ce=K.clientX-re/2,ke=K.clientY-Te/2;Ce=Math.max(Ne,Math.min(Ce,window.innerWidth-re-Ne)),ke=Math.max(Ne,Math.min(ke,window.innerHeight-Te-Ne)),de.value={...de.value,dimensions:{...de.value.dimensions,position:{x:Ce,y:ke}}},c(!0);const C=rr(Eo);Ke.value=C||{view:"none"},setTimeout(()=>{if(n.current){const F=new PointerEvent("pointerdown",{clientX:K.clientX,clientY:K.clientY,pointerId:K.pointerId,bubbles:!0});n.current.dispatchEvent(F)}},100)}});else{c(!0);const ve=rr(Eo);Ke.value=ve||{view:"none"}}document.removeEventListener("pointermove",W),document.removeEventListener("pointerup",V)}},V=()=>{document.removeEventListener("pointermove",W),document.removeEventListener("pointerup",V)};document.addEventListener("pointermove",W),document.addEventListener("pointerup",V)},[]);ze(()=>{if(!n.current)return;wh(Eo),on.value?(a.current=36,i.current=0):(n.current.style.width="min-content",a.current=36,i.current=n.current.offsetWidth),n.current.style.maxWidth=`calc(100vw - ${Ne*2}px)`,n.current.style.maxHeight=`calc(100vh - ${Ne*2}px)`,c(),ce.inspectState.value.kind!=="focused"&&!on.value&&!l.current&&(de.value={...de.value,dimensions:{isFullWidth:!1,isFullHeight:!1,width:i.current,height:a.current,position:de.value.dimensions.position}}),xu.value=n.current;const y=de.subscribe(I=>{if(!n.current)return;const{x:k,y:z}=I.dimensions.position,{width:H,height:W}=I.dimensions,V=n.current;requestAnimationFrame(()=>{V.style.transform=`translate3d(${k}px, ${z}px, 0)`,V.style.width=`${H}px`,V.style.height=`${W}px`})}),b=Ke.subscribe(I=>{r.current=I.view!=="none",c(),on.value||(I.view!=="none"?Zt(Eo,I):wh(Eo))}),N=ce.inspectState.subscribe(I=>{r.current=I.kind==="focused",c()}),E=()=>{c(!0)};return window.addEventListener("resize",E,{passive:!0}),()=>{window.removeEventListener("resize",E),b(),N(),y(),Zt(nr,{...Ln,corner:de.value.corner})}},[]);const[m,g]=Ie(!1);ze(()=>{g(!0)},[]);const x=on.value;let w="";if(x){const{orientation:y="horizontal",corner:b}=x;y==="horizontal"?w=b?.endsWith("right")?"rotate-180":"":w=b?.startsWith("bottom")?"-rotate-90":"rotate-90"}return d(Re,{children:[d(fb,{}),d(ad.Provider,{value:n.current,children:d("div",{id:"react-scan-toolbar",dir:"ltr",ref:n,onPointerDown:x?h:p,className:P("fixed inset-0",x?(()=>{const{orientation:y="horizontal",corner:b}=x;return y==="horizontal"?b?.endsWith("right")?"rounded-tl-lg rounded-bl-lg shadow-lg":"rounded-tr-lg rounded-br-lg shadow-lg":b?.startsWith("bottom")?"rounded-tl-lg rounded-tr-lg shadow-lg":"rounded-bl-lg rounded-br-lg shadow-lg"})():"rounded-lg shadow-lg","flex flex-col","font-mono text-[13px]","user-select-none","opacity-0",x?"cursor-pointer":"cursor-move","z-[124124124124]","animate-fade-in animation-duration-300 animation-delay-300","will-change-transform","[touch-action:none]"),children:x?d("button",{type:"button",onClick:()=>{on.value=null,Zt(ks,null),i.current===0&&n.current&&requestAnimationFrame(()=>{if(n.current){n.current.style.width="min-content";const b=n.current.offsetWidth;i.current=b||300,c(!0)}});const y=rr(Eo);Ke.value=y||{view:"none"}},className:"flex items-center justify-center w-full h-full text-white",title:"Expand toolbar",children:d(ct,{name:"icon-chevron-right",size:16,className:P("transition-transform",w)})}):d(Re,{children:[d(gs,{position:"top"}),d(gs,{position:"bottom"}),d(gs,{position:"left"}),d(gs,{position:"right"}),d(pb,{})]})})})]})},ad=Mm(null),kb=()=>d("svg",{xmlns:"http://www.w3.org/2000/svg",style:"display: none;",children:[d("title",{children:"React Scan Icons"}),d("symbol",{id:"icon-inspect",viewBox:"0 0 24 24",fill:"none","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[d("path",{d:"M12.034 12.681a.498.498 0 0 1 .647-.647l9 3.5a.5.5 0 0 1-.033.943l-3.444 1.068a1 1 0 0 0-.66.66l-1.067 3.443a.5.5 0 0 1-.943.033z"}),d("path",{d:"M5 3a2 2 0 0 0-2 2"}),d("path",{d:"M19 3a2 2 0 0 1 2 2"}),d("path",{d:"M5 21a2 2 0 0 1-2-2"}),d("path",{d:"M9 3h1"}),d("path",{d:"M9 21h2"}),d("path",{d:"M14 3h1"}),d("path",{d:"M3 9v1"}),d("path",{d:"M21 9v2"}),d("path",{d:"M3 14v1"})]}),d("symbol",{id:"icon-focus",viewBox:"0 0 24 24",fill:"none","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[d("path",{d:"M12.034 12.681a.498.498 0 0 1 .647-.647l9 3.5a.5.5 0 0 1-.033.943l-3.444 1.068a1 1 0 0 0-.66.66l-1.067 3.443a.5.5 0 0 1-.943.033z"}),d("path",{d:"M21 11V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6"})]}),d("symbol",{id:"icon-next",viewBox:"0 0 24 24",fill:"none","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:d("path",{d:"M6 9h6V5l7 7-7 7v-4H6V9z"})}),d("symbol",{id:"icon-previous",viewBox:"0 0 24 24",fill:"none","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:d("path",{d:"M18 15h-6v4l-7-7 7-7v4h6v6z"})}),d("symbol",{id:"icon-close",viewBox:"0 0 24 24",fill:"none","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[d("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),d("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]}),d("symbol",{id:"icon-replay",viewBox:"0 0 24 24",fill:"none","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[d("path",{d:"M3 7V5a2 2 0 0 1 2-2h2"}),d("path",{d:"M17 3h2a2 2 0 0 1 2 2v2"}),d("path",{d:"M21 17v2a2 2 0 0 1-2 2h-2"}),d("path",{d:"M7 21H5a2 2 0 0 1-2-2v-2"}),d("circle",{cx:"12",cy:"12",r:"1"}),d("path",{d:"M18.944 12.33a1 1 0 0 0 0-.66 7.5 7.5 0 0 0-13.888 0 1 1 0 0 0 0 .66 7.5 7.5 0 0 0 13.888 0"})]}),d("symbol",{id:"icon-ellipsis",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[d("circle",{cx:"12",cy:"12",r:"1"}),d("circle",{cx:"19",cy:"12",r:"1"}),d("circle",{cx:"5",cy:"12",r:"1"})]}),d("symbol",{id:"icon-copy",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[d("rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2"}),d("path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"})]}),d("symbol",{id:"icon-check",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:d("path",{d:"M20 6 9 17l-5-5"})}),d("symbol",{id:"icon-chevron-right",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:d("path",{d:"m9 18 6-6-6-6"})}),d("symbol",{id:"icon-settings",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[d("path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"}),d("circle",{cx:"12",cy:"12",r:"3"})]}),d("symbol",{id:"icon-flame",viewBox:"0 0 24 24",children:d("path",{d:"M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"})}),d("symbol",{id:"icon-function",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[d("rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}),d("path",{d:"M9 17c2 0 2.8-1 2.8-2.8V10c0-2 1-3.3 3.2-3"}),d("path",{d:"M9 11.2h5.7"})]}),d("symbol",{id:"icon-triangle-alert",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[d("path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"}),d("path",{d:"M12 9v4"}),d("path",{d:"M12 17h.01"})]}),d("symbol",{id:"icon-gallery-horizontal-end",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[d("path",{d:"M2 7v10"}),d("path",{d:"M6 5v14"}),d("rect",{width:"12",height:"18",x:"10",y:"3",rx:"2"})]}),d("symbol",{id:"icon-search",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[d("circle",{cx:"11",cy:"11",r:"8"}),d("line",{x1:"21",y1:"21",x2:"16.65",y2:"16.65"})]}),d("symbol",{id:"icon-lock",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[d("rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2"}),d("path",{d:"M7 11V7a5 5 0 0 1 10 0v4"})]}),d("symbol",{id:"icon-lock-open",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[d("rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2"}),d("path",{d:"M7 11V7a5 5 0 0 1 9.9-1"})]}),d("symbol",{id:"icon-sanil",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[d("path",{d:"M2 13a6 6 0 1 0 12 0 4 4 0 1 0-8 0 2 2 0 0 0 4 0"}),d("circle",{cx:"10",cy:"13",r:"8"}),d("path",{d:"M2 21h12c4.4 0 8-3.6 8-8V7a2 2 0 1 0-4 0v6"}),d("path",{d:"M18 3 19.1 5.2"})]})]}),_b=class extends gn{constructor(){super(...arguments),this.state={hasError:!1,error:null},this.handleReset=()=>{this.setState({hasError:!1,error:null})}}static getDerivedStateFromError(n){return{hasError:!0,error:n}}render(){return this.state.hasError?d("div",{className:"fixed bottom-4 right-4 z-[124124124124]",children:d("div",{className:"p-3 bg-black rounded-lg shadow-lg w-80",children:[d("div",{className:"flex items-center gap-2 mb-2 text-red-400 text-sm font-medium",children:[d(ct,{name:"icon-flame",className:"text-red-500",size:14}),"React Scan ran into a problem"]}),d("div",{className:"p-2 bg-black rounded font-mono text-xs text-red-300 mb-3 break-words",children:this.state.error?.message||JSON.stringify(this.state.error)}),d("button",{type:"button",onClick:this.handleReset,className:"px-3 py-1.5 bg-red-500 hover:bg-red-600 text-white rounded text-xs font-medium transition-colors flex items-center justify-center gap-1.5",children:"Restart"})]})}):this.props.children}},Sb=n=>{const r=document.createElement("div");r.id="react-scan-toolbar-root",window.__REACT_SCAN_TOOLBAR_CONTAINER__=r,n.appendChild(r),Ri(d(_b,{children:d(Re,{children:[d(kb,{}),d(bb,{})]})}),r);const i=r.remove.bind(r);return r.remove=()=>{window.__REACT_SCAN_TOOLBAR_CONTAINER__=void 0,r.hasChildNodes()&&(Ri(null,r),Ri(null,r)),i()},r},Cb={version:"0.4.3"},Br=null,Ii=null,Nb=()=>{if(Br&&Ii)return{rootContainer:Br,shadowRoot:Ii};Br=document.createElement("div"),Br.id="react-scan-root",Ii=Br.attachShadow({mode:"open"});const n=document.createElement("style");return n.textContent=Wy,Ii.appendChild(n),document.documentElement.appendChild(Br),{rootContainer:Br,shadowRoot:Ii}},ce={wasDetailsOpen:xt(!0),isInIframe:xt(Un&&window.self!==window.top),inspectState:xt({kind:"uninitialized"}),monitor:xt(null),fiberRoots:new Set,reportData:new Map,legacyReportData:new Map,lastReportTime:xt(0),interactionListeningForRenders:null,changesListeners:new Map},$e={instrumentation:null,componentAllowList:null,options:xt({enabled:!0,log:!1,showToolbar:!0,animationSpeed:"fast",dangerouslyForceRunInProduction:!1,showFPS:!0,showNotificationCount:!0,allowInIframe:!1}),runInAllEnvironments:!1,onRender:null,scheduledOutlines:new Map,activeOutlines:new Map,Store:ce,version:Cb.version};Un&&window.__REACT_SCAN_EXTENSION__&&(window.__REACT_SCAN_VERSION__=$e.version);function Eb(n){return n in $e.options.value}var Sg=n=>{const r=[],i={};for(const a in n){if(!Eb(a))continue;const l=n[a];switch(a){case"enabled":case"log":case"showToolbar":case"showNotificationCount":case"dangerouslyForceRunInProduction":case"showFPS":case"allowInIframe":typeof l!="boolean"?r.push(`- ${a} must be a boolean. Got "${l}"`):i[a]=l;break;case"animationSpeed":["slow","fast","off"].includes(l)?i[a]=l:r.push(`- Invalid animation speed "${l}". Using default "fast"`);break;case"onCommitStart":typeof l!="function"?r.push(`- ${a} must be a function. Got "${l}"`):i.onCommitStart=l;break;case"onCommitFinish":typeof l!="function"?r.push(`- ${a} must be a function. Got "${l}"`):i.onCommitFinish=l;break;case"onRender":typeof l!="function"?r.push(`- ${a} must be a function. Got "${l}"`):i.onRender=l;break;case"onPaintStart":case"onPaintFinish":typeof l!="function"?r.push(`- ${a} must be a function. Got "${l}"`):i[a]=l;break;default:r.push(`- Unknown option "${a}"`)}}return r.length>0&&console.warn(`[React Scan] Invalid options:
${r.join(`
`)}`),i},Tb=n=>{try{const r=Sg(n);if(Object.keys(r).length===0)return;const i="showToolbar"in r&&r.showToolbar!==void 0,a={...$e.options.value,...r},{instrumentation:l}=$e;l&&"enabled"in r&&(l.isPaused.value=r.enabled===!1),$e.options.value=a;try{const c=rr("react-scan-options")?.enabled;typeof c=="boolean"&&(a.enabled=c)}catch(c){$e.options.value._debug==="verbose"&&console.error("[React Scan Internal Error]","Failed to create notifications outline canvas",c)}return Zt("react-scan-options",a),i&&Cg(!!a.showToolbar),a}catch(r){$e.options.value._debug==="verbose"&&console.error("[React Scan Internal Error]","Failed to create notifications outline canvas",r)}},Mb=()=>$e.options,vs=null,Kh,Gs=()=>{if(vs!==null)return vs;Kh??=Oo();for(const n of Kh.renderers.values())J0(n)==="production"&&(vs=!0);return vs},zb=()=>{try{if(!Un||!$e.runInAllEnvironments&&Gs()&&!$e.options.value.dangerouslyForceRunInProduction)return;const n=rr("react-scan-options");if(n){const i=Sg(n);Object.keys(i).length>0&&($e.options.value={...$e.options.value,...i})}const r=Mb();Hy(()=>{Cg(!!r.value.showToolbar)}),!ce.monitor.value&&Un&&setTimeout(()=>{Z0()||console.error("[React Scan] Failed to load. Must import React Scan before React runs.")},5e3)}catch(n){$e.options.value._debug==="verbose"&&console.error("[React Scan Internal Error]","Failed to create notifications outline canvas",n)}},Cg=n=>{window.reactScanCleanupListeners?.();const r=w1(),i=Ib();window.reactScanCleanupListeners=()=>{r(),i?.()};const a=window.__REACT_SCAN_TOOLBAR_CONTAINER__;if(!n){a?.remove();return}a?.remove();const{shadowRoot:l}=Nb();Sb(l)},Ib=()=>{try{const n=document.documentElement;return U1(n)}catch(n){$e.options.value._debug==="verbose"&&console.error("[React Scan Internal Error]","Failed to create notifications outline canvas",n)}},Ab=(n={})=>{Tb(n),!(ce.isInIframe.value&&!$e.options.value.allowInIframe&&!$e.runInAllEnvironments)&&(n.enabled===!1&&n.showToolbar!==!0||zb())},Pb=new WeakSet,ws={},nu={exports:{}},Jt={},ru={exports:{}},ou={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jh;function Rb(){return Jh||(Jh=1,(function(n){function r(M,U){var O=M.length;M.push(U);e:for(;0<O;){var S=O-1>>>1,R=M[S];if(0<l(R,U))M[S]=U,M[O]=R,O=S;else break e}}function i(M){return M.length===0?null:M[0]}function a(M){if(M.length===0)return null;var U=M[0],O=M.pop();if(O!==U){M[0]=O;e:for(var S=0,R=M.length,B=R>>>1;S<B;){var Q=2*(S+1)-1,Y=M[Q],Z=Q+1,oe=M[Z];if(0>l(Y,O))Z<R&&0>l(oe,Y)?(M[S]=oe,M[Z]=O,S=Z):(M[S]=Y,M[Q]=O,S=Q);else if(Z<R&&0>l(oe,O))M[S]=oe,M[Z]=O,S=Z;else break e}}return U}function l(M,U){var O=M.sortIndex-U.sortIndex;return O!==0?O:M.id-U.id}if(typeof performance=="object"&&typeof performance.now=="function"){var c=performance;n.unstable_now=function(){return c.now()}}else{var p=Date,h=p.now();n.unstable_now=function(){return p.now()-h}}var m=[],g=[],x=1,w=null,y=3,b=!1,N=!1,E=!1,I=typeof setTimeout=="function"?setTimeout:null,k=typeof clearTimeout=="function"?clearTimeout:null,z=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function H(M){for(var U=i(g);U!==null;){if(U.callback===null)a(g);else if(U.startTime<=M)a(g),U.sortIndex=U.expirationTime,r(m,U);else break;U=i(g)}}function W(M){if(E=!1,H(M),!N)if(i(m)!==null)N=!0,C(V);else{var U=i(g);U!==null&&F(W,U.startTime-M)}}function V(M,U){N=!1,E&&(E=!1,k(ge),ge=-1),b=!0;var O=y;try{for(H(U),w=i(m);w!==null&&(!(w.expirationTime>U)||M&&!me());){var S=w.callback;if(typeof S=="function"){w.callback=null,y=w.priorityLevel;var R=S(w.expirationTime<=U);U=n.unstable_now(),typeof R=="function"?w.callback=R:w===i(m)&&a(m),H(U)}else a(m);w=i(m)}if(w!==null)var B=!0;else{var Q=i(g);Q!==null&&F(W,Q.startTime-U),B=!1}return B}finally{w=null,y=O,b=!1}}var K=!1,ee=null,ge=-1,ae=5,ve=-1;function me(){return!(n.unstable_now()-ve<ae)}function re(){if(ee!==null){var M=n.unstable_now();ve=M;var U=!0;try{U=ee(!0,M)}finally{U?Te():(K=!1,ee=null)}}else K=!1}var Te;if(typeof z=="function")Te=function(){z(re)};else if(typeof MessageChannel<"u"){var Ce=new MessageChannel,ke=Ce.port2;Ce.port1.onmessage=re,Te=function(){ke.postMessage(null)}}else Te=function(){I(re,0)};function C(M){ee=M,K||(K=!0,Te())}function F(M,U){ge=I(function(){M(n.unstable_now())},U)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(M){M.callback=null},n.unstable_continueExecution=function(){N||b||(N=!0,C(V))},n.unstable_forceFrameRate=function(M){0>M||125<M?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ae=0<M?Math.floor(1e3/M):5},n.unstable_getCurrentPriorityLevel=function(){return y},n.unstable_getFirstCallbackNode=function(){return i(m)},n.unstable_next=function(M){switch(y){case 1:case 2:case 3:var U=3;break;default:U=y}var O=y;y=U;try{return M()}finally{y=O}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(M,U){switch(M){case 1:case 2:case 3:case 4:case 5:break;default:M=3}var O=y;y=M;try{return U()}finally{y=O}},n.unstable_scheduleCallback=function(M,U,O){var S=n.unstable_now();switch(typeof O=="object"&&O!==null?(O=O.delay,O=typeof O=="number"&&0<O?S+O:S):O=S,M){case 1:var R=-1;break;case 2:R=250;break;case 5:R=1073741823;break;case 4:R=1e4;break;default:R=5e3}return R=O+R,M={id:x++,callback:U,priorityLevel:M,startTime:O,expirationTime:R,sortIndex:-1},O>S?(M.sortIndex=O,r(g,M),i(m)===null&&M===i(g)&&(E?(k(ge),ge=-1):E=!0,F(W,O-S))):(M.sortIndex=R,r(m,M),N||b||(N=!0,C(V))),M},n.unstable_shouldYield=me,n.unstable_wrapCallback=function(M){var U=y;return function(){var O=y;y=U;try{return M.apply(this,arguments)}finally{y=O}}}})(ou)),ou}var Zh;function jb(){return Zh||(Zh=1,ru.exports=Rb()),ru.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var em;function Fb(){if(em)return Jt;em=1;var n=Au(),r=jb();function i(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,o=1;o<arguments.length;o++)t+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var a=new Set,l={};function c(e,t){p(e,t),p(e+"Capture",t)}function p(e,t){for(l[e]=t,e=0;e<t.length;e++)a.add(t[e])}var h=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),m=Object.prototype.hasOwnProperty,g=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,x={},w={};function y(e){return m.call(w,e)?!0:m.call(x,e)?!1:g.test(e)?w[e]=!0:(x[e]=!0,!1)}function b(e,t,o,s){if(o!==null&&o.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return s?!1:o!==null?!o.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function N(e,t,o,s){if(t===null||typeof t>"u"||b(e,t,o,s))return!0;if(s)return!1;if(o!==null)switch(o.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function E(e,t,o,s,u,f,v){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=s,this.attributeNamespace=u,this.mustUseProperty=o,this.propertyName=e,this.type=t,this.sanitizeURL=f,this.removeEmptyString=v}var I={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){I[e]=new E(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];I[t]=new E(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){I[e]=new E(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){I[e]=new E(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){I[e]=new E(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){I[e]=new E(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){I[e]=new E(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){I[e]=new E(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){I[e]=new E(e,5,!1,e.toLowerCase(),null,!1,!1)});var k=/[\-:]([a-z])/g;function z(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(k,z);I[t]=new E(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(k,z);I[t]=new E(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(k,z);I[t]=new E(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){I[e]=new E(e,1,!1,e.toLowerCase(),null,!1,!1)}),I.xlinkHref=new E("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){I[e]=new E(e,1,!1,e.toLowerCase(),null,!0,!0)});function H(e,t,o,s){var u=I.hasOwnProperty(t)?I[t]:null;(u!==null?u.type!==0:s||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(N(t,o,u,s)&&(o=null),s||u===null?y(t)&&(o===null?e.removeAttribute(t):e.setAttribute(t,""+o)):u.mustUseProperty?e[u.propertyName]=o===null?u.type===3?!1:"":o:(t=u.attributeName,s=u.attributeNamespace,o===null?e.removeAttribute(t):(u=u.type,o=u===3||u===4&&o===!0?"":""+o,s?e.setAttributeNS(s,t,o):e.setAttribute(t,o))))}var W=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,V=Symbol.for("react.element"),K=Symbol.for("react.portal"),ee=Symbol.for("react.fragment"),ge=Symbol.for("react.strict_mode"),ae=Symbol.for("react.profiler"),ve=Symbol.for("react.provider"),me=Symbol.for("react.context"),re=Symbol.for("react.forward_ref"),Te=Symbol.for("react.suspense"),Ce=Symbol.for("react.suspense_list"),ke=Symbol.for("react.memo"),C=Symbol.for("react.lazy"),F=Symbol.for("react.offscreen"),M=Symbol.iterator;function U(e){return e===null||typeof e!="object"?null:(e=M&&e[M]||e["@@iterator"],typeof e=="function"?e:null)}var O=Object.assign,S;function R(e){if(S===void 0)try{throw Error()}catch(o){var t=o.stack.trim().match(/\n( *(at )?)/);S=t&&t[1]||""}return`
`+S+e}var B=!1;function Q(e,t){if(!e||B)return"";B=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(D){var s=D}Reflect.construct(e,[],t)}else{try{t.call()}catch(D){s=D}e.call(t.prototype)}else{try{throw Error()}catch(D){s=D}e()}}catch(D){if(D&&s&&typeof D.stack=="string"){for(var u=D.stack.split(`
`),f=s.stack.split(`
`),v=u.length-1,_=f.length-1;1<=v&&0<=_&&u[v]!==f[_];)_--;for(;1<=v&&0<=_;v--,_--)if(u[v]!==f[_]){if(v!==1||_!==1)do if(v--,_--,0>_||u[v]!==f[_]){var T=`
`+u[v].replace(" at new "," at ");return e.displayName&&T.includes("<anonymous>")&&(T=T.replace("<anonymous>",e.displayName)),T}while(1<=v&&0<=_);break}}}finally{B=!1,Error.prepareStackTrace=o}return(e=e?e.displayName||e.name:"")?R(e):""}function Y(e){switch(e.tag){case 5:return R(e.type);case 16:return R("Lazy");case 13:return R("Suspense");case 19:return R("SuspenseList");case 0:case 2:case 15:return e=Q(e.type,!1),e;case 11:return e=Q(e.type.render,!1),e;case 1:return e=Q(e.type,!0),e;default:return""}}function Z(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case ee:return"Fragment";case K:return"Portal";case ae:return"Profiler";case ge:return"StrictMode";case Te:return"Suspense";case Ce:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case me:return(e.displayName||"Context")+".Consumer";case ve:return(e._context.displayName||"Context")+".Provider";case re:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ke:return t=e.displayName||null,t!==null?t:Z(e.type)||"Memo";case C:t=e._payload,e=e._init;try{return Z(e(t))}catch{}}return null}function oe(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Z(t);case 8:return t===ge?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function ie(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function le(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Se(e){var t=le(e)?"checked":"value",o=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),s=""+e[t];if(!e.hasOwnProperty(t)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,f=o.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return u.call(this)},set:function(v){s=""+v,f.call(this,v)}}),Object.defineProperty(e,t,{enumerable:o.enumerable}),{getValue:function(){return s},setValue:function(v){s=""+v},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function te(e){e._valueTracker||(e._valueTracker=Se(e))}function xe(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var o=t.getValue(),s="";return e&&(s=le(e)?e.checked?"true":"false":e.value),e=s,e!==o?(t.setValue(e),!0):!1}function ne(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function je(e,t){var o=t.checked;return O({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??e._wrapperState.initialChecked})}function Ue(e,t){var o=t.defaultValue==null?"":t.defaultValue,s=t.checked!=null?t.checked:t.defaultChecked;o=ie(t.value!=null?t.value:o),e._wrapperState={initialChecked:s,initialValue:o,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function De(e,t){t=t.checked,t!=null&&H(e,"checked",t,!1)}function Fe(e,t){De(e,t);var o=ie(t.value),s=t.type;if(o!=null)s==="number"?(o===0&&e.value===""||e.value!=o)&&(e.value=""+o):e.value!==""+o&&(e.value=""+o);else if(s==="submit"||s==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Be(e,t.type,o):t.hasOwnProperty("defaultValue")&&Be(e,t.type,ie(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function mt(e,t,o){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var s=t.type;if(!(s!=="submit"&&s!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,o||t===e.value||(e.value=t),e.defaultValue=t}o=e.name,o!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,o!==""&&(e.name=o)}function Be(e,t,o){(t!=="number"||ne(e.ownerDocument)!==e)&&(o==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+o&&(e.defaultValue=""+o))}var gt=Array.isArray;function Ot(e,t,o,s){if(e=e.options,t){t={};for(var u=0;u<o.length;u++)t["$"+o[u]]=!0;for(o=0;o<e.length;o++)u=t.hasOwnProperty("$"+e[o].value),e[o].selected!==u&&(e[o].selected=u),u&&s&&(e[o].defaultSelected=!0)}else{for(o=""+ie(o),t=null,u=0;u<e.length;u++){if(e[u].value===o){e[u].selected=!0,s&&(e[u].defaultSelected=!0);return}t!==null||e[u].disabled||(t=e[u])}t!==null&&(t.selected=!0)}}function Ye(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(i(91));return O({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Ge(e,t){var o=t.value;if(o==null){if(o=t.children,t=t.defaultValue,o!=null){if(t!=null)throw Error(i(92));if(gt(o)){if(1<o.length)throw Error(i(93));o=o[0]}t=o}t==null&&(t=""),o=t}e._wrapperState={initialValue:ie(o)}}function He(e,t){var o=ie(t.value),s=ie(t.defaultValue);o!=null&&(o=""+o,o!==e.value&&(e.value=o),t.defaultValue==null&&e.defaultValue!==o&&(e.defaultValue=o)),s!=null&&(e.defaultValue=""+s)}function Qe(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function yt(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function sn(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?yt(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Yt,ln=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,o,s,u){MSApp.execUnsafeLocalFunction(function(){return e(t,o,s,u)})}:e})(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Yt=Yt||document.createElement("div"),Yt.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Yt.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function In(e,t){if(t){var o=e.firstChild;if(o&&o===e.lastChild&&o.nodeType===3){o.nodeValue=t;return}}e.textContent=t}var it={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},bt=["Webkit","ms","Moz","O"];Object.keys(it).forEach(function(e){bt.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),it[t]=it[e]})});function Je(e,t,o){return t==null||typeof t=="boolean"||t===""?"":o||typeof t!="number"||t===0||it.hasOwnProperty(e)&&it[e]?(""+t).trim():t+"px"}function It(e,t){e=e.style;for(var o in t)if(t.hasOwnProperty(o)){var s=o.indexOf("--")===0,u=Je(o,t[o],s);o==="float"&&(o="cssFloat"),s?e.setProperty(o,u):e[o]=u}}var vn=O({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Bt(e,t){if(t){if(vn[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(i(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(i(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(i(61))}if(t.style!=null&&typeof t.style!="object")throw Error(i(62))}}function Ut(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var An=null;function Hn(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Wn=null,Vn=null,or=null;function Zi(e){if(e=pi(e)){if(typeof Wn!="function")throw Error(i(280));var t=e.stateNode;t&&(t=Sa(t),Wn(e.stateNode,e.type,t))}}function Vo(e){Vn?or?or.push(e):or=[e]:Vn=e}function ea(){if(Vn){var e=Vn,t=or;if(or=Vn=null,Zi(e),t)for(e=0;e<t.length;e++)Zi(t[e])}}function ta(e,t){return e(t)}function sd(){}var Qs=!1;function ld(e,t,o){if(Qs)return e(t,o);Qs=!0;try{return ta(e,t,o)}finally{Qs=!1,(Vn!==null||or!==null)&&(sd(),ea())}}function Yo(e,t){var o=e.stateNode;if(o===null)return null;var s=Sa(o);if(s===null)return null;o=s[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(e=e.type,s=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!s;break e;default:e=!1}if(e)return null;if(o&&typeof o!="function")throw Error(i(231,t,typeof o));return o}var qs=!1;if(h)try{var Bo={};Object.defineProperty(Bo,"passive",{get:function(){qs=!0}}),window.addEventListener("test",Bo,Bo),window.removeEventListener("test",Bo,Bo)}catch{qs=!1}function Eg(e,t,o,s,u,f,v,_,T){var D=Array.prototype.slice.call(arguments,3);try{t.apply(o,D)}catch(G){this.onError(G)}}var Xo=!1,na=null,ra=!1,Ks=null,Tg={onError:function(e){Xo=!0,na=e}};function Mg(e,t,o,s,u,f,v,_,T){Xo=!1,na=null,Eg.apply(Tg,arguments)}function zg(e,t,o,s,u,f,v,_,T){if(Mg.apply(this,arguments),Xo){if(Xo){var D=na;Xo=!1,na=null}else throw Error(i(198));ra||(ra=!0,Ks=D)}}function Ir(e){var t=e,o=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(o=t.return),e=t.return;while(e)}return t.tag===3?o:null}function cd(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function ud(e){if(Ir(e)!==e)throw Error(i(188))}function Ig(e){var t=e.alternate;if(!t){if(t=Ir(e),t===null)throw Error(i(188));return t!==e?null:e}for(var o=e,s=t;;){var u=o.return;if(u===null)break;var f=u.alternate;if(f===null){if(s=u.return,s!==null){o=s;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===o)return ud(u),e;if(f===s)return ud(u),t;f=f.sibling}throw Error(i(188))}if(o.return!==s.return)o=u,s=f;else{for(var v=!1,_=u.child;_;){if(_===o){v=!0,o=u,s=f;break}if(_===s){v=!0,s=u,o=f;break}_=_.sibling}if(!v){for(_=f.child;_;){if(_===o){v=!0,o=f,s=u;break}if(_===s){v=!0,s=f,o=u;break}_=_.sibling}if(!v)throw Error(i(189))}}if(o.alternate!==s)throw Error(i(190))}if(o.tag!==3)throw Error(i(188));return o.stateNode.current===o?e:t}function dd(e){return e=Ig(e),e!==null?pd(e):null}function pd(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=pd(e);if(t!==null)return t;e=e.sibling}return null}var fd=r.unstable_scheduleCallback,hd=r.unstable_cancelCallback,Ag=r.unstable_shouldYield,Pg=r.unstable_requestPaint,ut=r.unstable_now,Rg=r.unstable_getCurrentPriorityLevel,Js=r.unstable_ImmediatePriority,md=r.unstable_UserBlockingPriority,oa=r.unstable_NormalPriority,jg=r.unstable_LowPriority,gd=r.unstable_IdlePriority,ia=null,Pn=null;function Fg(e){if(Pn&&typeof Pn.onCommitFiberRoot=="function")try{Pn.onCommitFiberRoot(ia,e,void 0,(e.current.flags&128)===128)}catch{}}var wn=Math.clz32?Math.clz32:Dg,$g=Math.log,Lg=Math.LN2;function Dg(e){return e>>>=0,e===0?32:31-($g(e)/Lg|0)|0}var aa=64,sa=4194304;function Go(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function la(e,t){var o=e.pendingLanes;if(o===0)return 0;var s=0,u=e.suspendedLanes,f=e.pingedLanes,v=o&268435455;if(v!==0){var _=v&~u;_!==0?s=Go(_):(f&=v,f!==0&&(s=Go(f)))}else v=o&~u,v!==0?s=Go(v):f!==0&&(s=Go(f));if(s===0)return 0;if(t!==0&&t!==s&&(t&u)===0&&(u=s&-s,f=t&-t,u>=f||u===16&&(f&4194240)!==0))return t;if((s&4)!==0&&(s|=o&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=s;0<t;)o=31-wn(t),u=1<<o,s|=e[o],t&=~u;return s}function Og(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ug(e,t){for(var o=e.suspendedLanes,s=e.pingedLanes,u=e.expirationTimes,f=e.pendingLanes;0<f;){var v=31-wn(f),_=1<<v,T=u[v];T===-1?((_&o)===0||(_&s)!==0)&&(u[v]=Og(_,t)):T<=t&&(e.expiredLanes|=_),f&=~_}}function Zs(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function vd(){var e=aa;return aa<<=1,(aa&4194240)===0&&(aa=64),e}function el(e){for(var t=[],o=0;31>o;o++)t.push(e);return t}function Qo(e,t,o){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-wn(t),e[t]=o}function Hg(e,t){var o=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var s=e.eventTimes;for(e=e.expirationTimes;0<o;){var u=31-wn(o),f=1<<u;t[u]=0,s[u]=-1,e[u]=-1,o&=~f}}function tl(e,t){var o=e.entangledLanes|=t;for(e=e.entanglements;o;){var s=31-wn(o),u=1<<s;u&t|e[s]&t&&(e[s]|=t),o&=~u}}var Ve=0;function wd(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var xd,nl,yd,bd,kd,rl=!1,ca=[],ir=null,ar=null,sr=null,qo=new Map,Ko=new Map,lr=[],Wg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function _d(e,t){switch(e){case"focusin":case"focusout":ir=null;break;case"dragenter":case"dragleave":ar=null;break;case"mouseover":case"mouseout":sr=null;break;case"pointerover":case"pointerout":qo.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ko.delete(t.pointerId)}}function Jo(e,t,o,s,u,f){return e===null||e.nativeEvent!==f?(e={blockedOn:t,domEventName:o,eventSystemFlags:s,nativeEvent:f,targetContainers:[u]},t!==null&&(t=pi(t),t!==null&&nl(t)),e):(e.eventSystemFlags|=s,t=e.targetContainers,u!==null&&t.indexOf(u)===-1&&t.push(u),e)}function Vg(e,t,o,s,u){switch(t){case"focusin":return ir=Jo(ir,e,t,o,s,u),!0;case"dragenter":return ar=Jo(ar,e,t,o,s,u),!0;case"mouseover":return sr=Jo(sr,e,t,o,s,u),!0;case"pointerover":var f=u.pointerId;return qo.set(f,Jo(qo.get(f)||null,e,t,o,s,u)),!0;case"gotpointercapture":return f=u.pointerId,Ko.set(f,Jo(Ko.get(f)||null,e,t,o,s,u)),!0}return!1}function Sd(e){var t=Ar(e.target);if(t!==null){var o=Ir(t);if(o!==null){if(t=o.tag,t===13){if(t=cd(o),t!==null){e.blockedOn=t,kd(e.priority,function(){yd(o)});return}}else if(t===3&&o.stateNode.current.memoizedState.isDehydrated){e.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ua(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var o=il(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(o===null){o=e.nativeEvent;var s=new o.constructor(o.type,o);An=s,o.target.dispatchEvent(s),An=null}else return t=pi(o),t!==null&&nl(t),e.blockedOn=o,!1;t.shift()}return!0}function Cd(e,t,o){ua(e)&&o.delete(t)}function Yg(){rl=!1,ir!==null&&ua(ir)&&(ir=null),ar!==null&&ua(ar)&&(ar=null),sr!==null&&ua(sr)&&(sr=null),qo.forEach(Cd),Ko.forEach(Cd)}function Zo(e,t){e.blockedOn===t&&(e.blockedOn=null,rl||(rl=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,Yg)))}function ei(e){function t(u){return Zo(u,e)}if(0<ca.length){Zo(ca[0],e);for(var o=1;o<ca.length;o++){var s=ca[o];s.blockedOn===e&&(s.blockedOn=null)}}for(ir!==null&&Zo(ir,e),ar!==null&&Zo(ar,e),sr!==null&&Zo(sr,e),qo.forEach(t),Ko.forEach(t),o=0;o<lr.length;o++)s=lr[o],s.blockedOn===e&&(s.blockedOn=null);for(;0<lr.length&&(o=lr[0],o.blockedOn===null);)Sd(o),o.blockedOn===null&&lr.shift()}var oo=W.ReactCurrentBatchConfig,da=!0;function Bg(e,t,o,s){var u=Ve,f=oo.transition;oo.transition=null;try{Ve=1,ol(e,t,o,s)}finally{Ve=u,oo.transition=f}}function Xg(e,t,o,s){var u=Ve,f=oo.transition;oo.transition=null;try{Ve=4,ol(e,t,o,s)}finally{Ve=u,oo.transition=f}}function ol(e,t,o,s){if(da){var u=il(e,t,o,s);if(u===null)kl(e,t,s,pa,o),_d(e,s);else if(Vg(u,e,t,o,s))s.stopPropagation();else if(_d(e,s),t&4&&-1<Wg.indexOf(e)){for(;u!==null;){var f=pi(u);if(f!==null&&xd(f),f=il(e,t,o,s),f===null&&kl(e,t,s,pa,o),f===u)break;u=f}u!==null&&s.stopPropagation()}else kl(e,t,s,null,o)}}var pa=null;function il(e,t,o,s){if(pa=null,e=Hn(s),e=Ar(e),e!==null)if(t=Ir(e),t===null)e=null;else if(o=t.tag,o===13){if(e=cd(t),e!==null)return e;e=null}else if(o===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return pa=e,null}function Nd(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Rg()){case Js:return 1;case md:return 4;case oa:case jg:return 16;case gd:return 536870912;default:return 16}default:return 16}}var cr=null,al=null,fa=null;function Ed(){if(fa)return fa;var e,t=al,o=t.length,s,u="value"in cr?cr.value:cr.textContent,f=u.length;for(e=0;e<o&&t[e]===u[e];e++);var v=o-e;for(s=1;s<=v&&t[o-s]===u[f-s];s++);return fa=u.slice(e,1<s?1-s:void 0)}function ha(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ma(){return!0}function Td(){return!1}function en(e){function t(o,s,u,f,v){this._reactName=o,this._targetInst=u,this.type=s,this.nativeEvent=f,this.target=v,this.currentTarget=null;for(var _ in e)e.hasOwnProperty(_)&&(o=e[_],this[_]=o?o(f):f[_]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?ma:Td,this.isPropagationStopped=Td,this}return O(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=ma)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=ma)},persist:function(){},isPersistent:ma}),t}var io={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},sl=en(io),ti=O({},io,{view:0,detail:0}),Gg=en(ti),ll,cl,ni,ga=O({},ti,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:dl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ni&&(ni&&e.type==="mousemove"?(ll=e.screenX-ni.screenX,cl=e.screenY-ni.screenY):cl=ll=0,ni=e),ll)},movementY:function(e){return"movementY"in e?e.movementY:cl}}),Md=en(ga),Qg=O({},ga,{dataTransfer:0}),qg=en(Qg),Kg=O({},ti,{relatedTarget:0}),ul=en(Kg),Jg=O({},io,{animationName:0,elapsedTime:0,pseudoElement:0}),Zg=en(Jg),ev=O({},io,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),tv=en(ev),nv=O({},io,{data:0}),zd=en(nv),rv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ov={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},iv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function av(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=iv[e])?!!t[e]:!1}function dl(){return av}var sv=O({},ti,{key:function(e){if(e.key){var t=rv[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ha(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?ov[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:dl,charCode:function(e){return e.type==="keypress"?ha(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ha(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),lv=en(sv),cv=O({},ga,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Id=en(cv),uv=O({},ti,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:dl}),dv=en(uv),pv=O({},io,{propertyName:0,elapsedTime:0,pseudoElement:0}),fv=en(pv),hv=O({},ga,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),mv=en(hv),gv=[9,13,27,32],pl=h&&"CompositionEvent"in window,ri=null;h&&"documentMode"in document&&(ri=document.documentMode);var vv=h&&"TextEvent"in window&&!ri,Ad=h&&(!pl||ri&&8<ri&&11>=ri),Pd=" ",Rd=!1;function jd(e,t){switch(e){case"keyup":return gv.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Fd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ao=!1;function wv(e,t){switch(e){case"compositionend":return Fd(t);case"keypress":return t.which!==32?null:(Rd=!0,Pd);case"textInput":return e=t.data,e===Pd&&Rd?null:e;default:return null}}function xv(e,t){if(ao)return e==="compositionend"||!pl&&jd(e,t)?(e=Ed(),fa=al=cr=null,ao=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Ad&&t.locale!=="ko"?null:t.data;default:return null}}var yv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function $d(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!yv[e.type]:t==="textarea"}function Ld(e,t,o,s){Vo(s),t=ba(t,"onChange"),0<t.length&&(o=new sl("onChange","change",null,o,s),e.push({event:o,listeners:t}))}var oi=null,ii=null;function bv(e){np(e,0)}function va(e){var t=po(e);if(xe(t))return e}function kv(e,t){if(e==="change")return t}var Dd=!1;if(h){var fl;if(h){var hl="oninput"in document;if(!hl){var Od=document.createElement("div");Od.setAttribute("oninput","return;"),hl=typeof Od.oninput=="function"}fl=hl}else fl=!1;Dd=fl&&(!document.documentMode||9<document.documentMode)}function Ud(){oi&&(oi.detachEvent("onpropertychange",Hd),ii=oi=null)}function Hd(e){if(e.propertyName==="value"&&va(ii)){var t=[];Ld(t,ii,e,Hn(e)),ld(bv,t)}}function _v(e,t,o){e==="focusin"?(Ud(),oi=t,ii=o,oi.attachEvent("onpropertychange",Hd)):e==="focusout"&&Ud()}function Sv(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return va(ii)}function Cv(e,t){if(e==="click")return va(t)}function Nv(e,t){if(e==="input"||e==="change")return va(t)}function Ev(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var xn=typeof Object.is=="function"?Object.is:Ev;function ai(e,t){if(xn(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var o=Object.keys(e),s=Object.keys(t);if(o.length!==s.length)return!1;for(s=0;s<o.length;s++){var u=o[s];if(!m.call(t,u)||!xn(e[u],t[u]))return!1}return!0}function Wd(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Vd(e,t){var o=Wd(e);e=0;for(var s;o;){if(o.nodeType===3){if(s=e+o.textContent.length,e<=t&&s>=t)return{node:o,offset:t-e};e=s}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=Wd(o)}}function Yd(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Yd(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Bd(){for(var e=window,t=ne();t instanceof e.HTMLIFrameElement;){try{var o=typeof t.contentWindow.location.href=="string"}catch{o=!1}if(o)e=t.contentWindow;else break;t=ne(e.document)}return t}function ml(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Tv(e){var t=Bd(),o=e.focusedElem,s=e.selectionRange;if(t!==o&&o&&o.ownerDocument&&Yd(o.ownerDocument.documentElement,o)){if(s!==null&&ml(o)){if(t=s.start,e=s.end,e===void 0&&(e=t),"selectionStart"in o)o.selectionStart=t,o.selectionEnd=Math.min(e,o.value.length);else if(e=(t=o.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var u=o.textContent.length,f=Math.min(s.start,u);s=s.end===void 0?f:Math.min(s.end,u),!e.extend&&f>s&&(u=s,s=f,f=u),u=Vd(o,f);var v=Vd(o,s);u&&v&&(e.rangeCount!==1||e.anchorNode!==u.node||e.anchorOffset!==u.offset||e.focusNode!==v.node||e.focusOffset!==v.offset)&&(t=t.createRange(),t.setStart(u.node,u.offset),e.removeAllRanges(),f>s?(e.addRange(t),e.extend(v.node,v.offset)):(t.setEnd(v.node,v.offset),e.addRange(t)))}}for(t=[],e=o;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<t.length;o++)e=t[o],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Mv=h&&"documentMode"in document&&11>=document.documentMode,so=null,gl=null,si=null,vl=!1;function Xd(e,t,o){var s=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;vl||so==null||so!==ne(s)||(s=so,"selectionStart"in s&&ml(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),si&&ai(si,s)||(si=s,s=ba(gl,"onSelect"),0<s.length&&(t=new sl("onSelect","select",null,t,o),e.push({event:t,listeners:s}),t.target=so)))}function wa(e,t){var o={};return o[e.toLowerCase()]=t.toLowerCase(),o["Webkit"+e]="webkit"+t,o["Moz"+e]="moz"+t,o}var lo={animationend:wa("Animation","AnimationEnd"),animationiteration:wa("Animation","AnimationIteration"),animationstart:wa("Animation","AnimationStart"),transitionend:wa("Transition","TransitionEnd")},wl={},Gd={};h&&(Gd=document.createElement("div").style,"AnimationEvent"in window||(delete lo.animationend.animation,delete lo.animationiteration.animation,delete lo.animationstart.animation),"TransitionEvent"in window||delete lo.transitionend.transition);function xa(e){if(wl[e])return wl[e];if(!lo[e])return e;var t=lo[e],o;for(o in t)if(t.hasOwnProperty(o)&&o in Gd)return wl[e]=t[o];return e}var Qd=xa("animationend"),qd=xa("animationiteration"),Kd=xa("animationstart"),Jd=xa("transitionend"),Zd=new Map,ep="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ur(e,t){Zd.set(e,t),c(t,[e])}for(var xl=0;xl<ep.length;xl++){var yl=ep[xl],zv=yl.toLowerCase(),Iv=yl[0].toUpperCase()+yl.slice(1);ur(zv,"on"+Iv)}ur(Qd,"onAnimationEnd"),ur(qd,"onAnimationIteration"),ur(Kd,"onAnimationStart"),ur("dblclick","onDoubleClick"),ur("focusin","onFocus"),ur("focusout","onBlur"),ur(Jd,"onTransitionEnd"),p("onMouseEnter",["mouseout","mouseover"]),p("onMouseLeave",["mouseout","mouseover"]),p("onPointerEnter",["pointerout","pointerover"]),p("onPointerLeave",["pointerout","pointerover"]),c("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),c("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),c("onBeforeInput",["compositionend","keypress","textInput","paste"]),c("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var li="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Av=new Set("cancel close invalid load scroll toggle".split(" ").concat(li));function tp(e,t,o){var s=e.type||"unknown-event";e.currentTarget=o,zg(s,t,void 0,e),e.currentTarget=null}function np(e,t){t=(t&4)!==0;for(var o=0;o<e.length;o++){var s=e[o],u=s.event;s=s.listeners;e:{var f=void 0;if(t)for(var v=s.length-1;0<=v;v--){var _=s[v],T=_.instance,D=_.currentTarget;if(_=_.listener,T!==f&&u.isPropagationStopped())break e;tp(u,_,D),f=T}else for(v=0;v<s.length;v++){if(_=s[v],T=_.instance,D=_.currentTarget,_=_.listener,T!==f&&u.isPropagationStopped())break e;tp(u,_,D),f=T}}}if(ra)throw e=Ks,ra=!1,Ks=null,e}function Ze(e,t){var o=t[Tl];o===void 0&&(o=t[Tl]=new Set);var s=e+"__bubble";o.has(s)||(rp(t,e,2,!1),o.add(s))}function bl(e,t,o){var s=0;t&&(s|=4),rp(o,e,s,t)}var ya="_reactListening"+Math.random().toString(36).slice(2);function ci(e){if(!e[ya]){e[ya]=!0,a.forEach(function(o){o!=="selectionchange"&&(Av.has(o)||bl(o,!1,e),bl(o,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ya]||(t[ya]=!0,bl("selectionchange",!1,t))}}function rp(e,t,o,s){switch(Nd(t)){case 1:var u=Bg;break;case 4:u=Xg;break;default:u=ol}o=u.bind(null,t,o,e),u=void 0,!qs||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(u=!0),s?u!==void 0?e.addEventListener(t,o,{capture:!0,passive:u}):e.addEventListener(t,o,!0):u!==void 0?e.addEventListener(t,o,{passive:u}):e.addEventListener(t,o,!1)}function kl(e,t,o,s,u){var f=s;if((t&1)===0&&(t&2)===0&&s!==null)e:for(;;){if(s===null)return;var v=s.tag;if(v===3||v===4){var _=s.stateNode.containerInfo;if(_===u||_.nodeType===8&&_.parentNode===u)break;if(v===4)for(v=s.return;v!==null;){var T=v.tag;if((T===3||T===4)&&(T=v.stateNode.containerInfo,T===u||T.nodeType===8&&T.parentNode===u))return;v=v.return}for(;_!==null;){if(v=Ar(_),v===null)return;if(T=v.tag,T===5||T===6){s=f=v;continue e}_=_.parentNode}}s=s.return}ld(function(){var D=f,G=Hn(o),q=[];e:{var X=Zd.get(e);if(X!==void 0){var se=sl,pe=e;switch(e){case"keypress":if(ha(o)===0)break e;case"keydown":case"keyup":se=lv;break;case"focusin":pe="focus",se=ul;break;case"focusout":pe="blur",se=ul;break;case"beforeblur":case"afterblur":se=ul;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":se=Md;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":se=qg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":se=dv;break;case Qd:case qd:case Kd:se=Zg;break;case Jd:se=fv;break;case"scroll":se=Gg;break;case"wheel":se=mv;break;case"copy":case"cut":case"paste":se=tv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":se=Id}var fe=(t&4)!==0,dt=!fe&&e==="scroll",$=fe?X!==null?X+"Capture":null:X;fe=[];for(var A=D,L;A!==null;){L=A;var J=L.stateNode;if(L.tag===5&&J!==null&&(L=J,$!==null&&(J=Yo(A,$),J!=null&&fe.push(ui(A,J,L)))),dt)break;A=A.return}0<fe.length&&(X=new se(X,pe,null,o,G),q.push({event:X,listeners:fe}))}}if((t&7)===0){e:{if(X=e==="mouseover"||e==="pointerover",se=e==="mouseout"||e==="pointerout",X&&o!==An&&(pe=o.relatedTarget||o.fromElement)&&(Ar(pe)||pe[Yn]))break e;if((se||X)&&(X=G.window===G?G:(X=G.ownerDocument)?X.defaultView||X.parentWindow:window,se?(pe=o.relatedTarget||o.toElement,se=D,pe=pe?Ar(pe):null,pe!==null&&(dt=Ir(pe),pe!==dt||pe.tag!==5&&pe.tag!==6)&&(pe=null)):(se=null,pe=D),se!==pe)){if(fe=Md,J="onMouseLeave",$="onMouseEnter",A="mouse",(e==="pointerout"||e==="pointerover")&&(fe=Id,J="onPointerLeave",$="onPointerEnter",A="pointer"),dt=se==null?X:po(se),L=pe==null?X:po(pe),X=new fe(J,A+"leave",se,o,G),X.target=dt,X.relatedTarget=L,J=null,Ar(G)===D&&(fe=new fe($,A+"enter",pe,o,G),fe.target=L,fe.relatedTarget=dt,J=fe),dt=J,se&&pe)t:{for(fe=se,$=pe,A=0,L=fe;L;L=co(L))A++;for(L=0,J=$;J;J=co(J))L++;for(;0<A-L;)fe=co(fe),A--;for(;0<L-A;)$=co($),L--;for(;A--;){if(fe===$||$!==null&&fe===$.alternate)break t;fe=co(fe),$=co($)}fe=null}else fe=null;se!==null&&op(q,X,se,fe,!1),pe!==null&&dt!==null&&op(q,dt,pe,fe,!0)}}e:{if(X=D?po(D):window,se=X.nodeName&&X.nodeName.toLowerCase(),se==="select"||se==="input"&&X.type==="file")var he=kv;else if($d(X))if(Dd)he=Nv;else{he=Sv;var ye=_v}else(se=X.nodeName)&&se.toLowerCase()==="input"&&(X.type==="checkbox"||X.type==="radio")&&(he=Cv);if(he&&(he=he(e,D))){Ld(q,he,o,G);break e}ye&&ye(e,X,D),e==="focusout"&&(ye=X._wrapperState)&&ye.controlled&&X.type==="number"&&Be(X,"number",X.value)}switch(ye=D?po(D):window,e){case"focusin":($d(ye)||ye.contentEditable==="true")&&(so=ye,gl=D,si=null);break;case"focusout":si=gl=so=null;break;case"mousedown":vl=!0;break;case"contextmenu":case"mouseup":case"dragend":vl=!1,Xd(q,o,G);break;case"selectionchange":if(Mv)break;case"keydown":case"keyup":Xd(q,o,G)}var be;if(pl)e:{switch(e){case"compositionstart":var _e="onCompositionStart";break e;case"compositionend":_e="onCompositionEnd";break e;case"compositionupdate":_e="onCompositionUpdate";break e}_e=void 0}else ao?jd(e,o)&&(_e="onCompositionEnd"):e==="keydown"&&o.keyCode===229&&(_e="onCompositionStart");_e&&(Ad&&o.locale!=="ko"&&(ao||_e!=="onCompositionStart"?_e==="onCompositionEnd"&&ao&&(be=Ed()):(cr=G,al="value"in cr?cr.value:cr.textContent,ao=!0)),ye=ba(D,_e),0<ye.length&&(_e=new zd(_e,e,null,o,G),q.push({event:_e,listeners:ye}),be?_e.data=be:(be=Fd(o),be!==null&&(_e.data=be)))),(be=vv?wv(e,o):xv(e,o))&&(D=ba(D,"onBeforeInput"),0<D.length&&(G=new zd("onBeforeInput","beforeinput",null,o,G),q.push({event:G,listeners:D}),G.data=be))}np(q,t)})}function ui(e,t,o){return{instance:e,listener:t,currentTarget:o}}function ba(e,t){for(var o=t+"Capture",s=[];e!==null;){var u=e,f=u.stateNode;u.tag===5&&f!==null&&(u=f,f=Yo(e,o),f!=null&&s.unshift(ui(e,f,u)),f=Yo(e,t),f!=null&&s.push(ui(e,f,u))),e=e.return}return s}function co(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function op(e,t,o,s,u){for(var f=t._reactName,v=[];o!==null&&o!==s;){var _=o,T=_.alternate,D=_.stateNode;if(T!==null&&T===s)break;_.tag===5&&D!==null&&(_=D,u?(T=Yo(o,f),T!=null&&v.unshift(ui(o,T,_))):u||(T=Yo(o,f),T!=null&&v.push(ui(o,T,_)))),o=o.return}v.length!==0&&e.push({event:t,listeners:v})}var Pv=/\r\n?/g,Rv=/\u0000|\uFFFD/g;function ip(e){return(typeof e=="string"?e:""+e).replace(Pv,`
`).replace(Rv,"")}function ka(e,t,o){if(t=ip(t),ip(e)!==t&&o)throw Error(i(425))}function _a(){}var _l=null,Sl=null;function Cl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Nl=typeof setTimeout=="function"?setTimeout:void 0,jv=typeof clearTimeout=="function"?clearTimeout:void 0,ap=typeof Promise=="function"?Promise:void 0,Fv=typeof queueMicrotask=="function"?queueMicrotask:typeof ap<"u"?function(e){return ap.resolve(null).then(e).catch($v)}:Nl;function $v(e){setTimeout(function(){throw e})}function El(e,t){var o=t,s=0;do{var u=o.nextSibling;if(e.removeChild(o),u&&u.nodeType===8)if(o=u.data,o==="/$"){if(s===0){e.removeChild(u),ei(t);return}s--}else o!=="$"&&o!=="$?"&&o!=="$!"||s++;o=u}while(o);ei(t)}function dr(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function sp(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var o=e.data;if(o==="$"||o==="$!"||o==="$?"){if(t===0)return e;t--}else o==="/$"&&t++}e=e.previousSibling}return null}var uo=Math.random().toString(36).slice(2),Rn="__reactFiber$"+uo,di="__reactProps$"+uo,Yn="__reactContainer$"+uo,Tl="__reactEvents$"+uo,Lv="__reactListeners$"+uo,Dv="__reactHandles$"+uo;function Ar(e){var t=e[Rn];if(t)return t;for(var o=e.parentNode;o;){if(t=o[Yn]||o[Rn]){if(o=t.alternate,t.child!==null||o!==null&&o.child!==null)for(e=sp(e);e!==null;){if(o=e[Rn])return o;e=sp(e)}return t}e=o,o=e.parentNode}return null}function pi(e){return e=e[Rn]||e[Yn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function po(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(i(33))}function Sa(e){return e[di]||null}var Ml=[],fo=-1;function pr(e){return{current:e}}function et(e){0>fo||(e.current=Ml[fo],Ml[fo]=null,fo--)}function qe(e,t){fo++,Ml[fo]=e.current,e.current=t}var fr={},jt=pr(fr),Xt=pr(!1),Pr=fr;function ho(e,t){var o=e.type.contextTypes;if(!o)return fr;var s=e.stateNode;if(s&&s.__reactInternalMemoizedUnmaskedChildContext===t)return s.__reactInternalMemoizedMaskedChildContext;var u={},f;for(f in o)u[f]=t[f];return s&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=u),u}function Gt(e){return e=e.childContextTypes,e!=null}function Ca(){et(Xt),et(jt)}function lp(e,t,o){if(jt.current!==fr)throw Error(i(168));qe(jt,t),qe(Xt,o)}function cp(e,t,o){var s=e.stateNode;if(t=t.childContextTypes,typeof s.getChildContext!="function")return o;s=s.getChildContext();for(var u in s)if(!(u in t))throw Error(i(108,oe(e)||"Unknown",u));return O({},o,s)}function Na(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||fr,Pr=jt.current,qe(jt,e),qe(Xt,Xt.current),!0}function up(e,t,o){var s=e.stateNode;if(!s)throw Error(i(169));o?(e=cp(e,t,Pr),s.__reactInternalMemoizedMergedChildContext=e,et(Xt),et(jt),qe(jt,e)):et(Xt),qe(Xt,o)}var Bn=null,Ea=!1,zl=!1;function dp(e){Bn===null?Bn=[e]:Bn.push(e)}function Ov(e){Ea=!0,dp(e)}function hr(){if(!zl&&Bn!==null){zl=!0;var e=0,t=Ve;try{var o=Bn;for(Ve=1;e<o.length;e++){var s=o[e];do s=s(!0);while(s!==null)}Bn=null,Ea=!1}catch(u){throw Bn!==null&&(Bn=Bn.slice(e+1)),fd(Js,hr),u}finally{Ve=t,zl=!1}}return null}var mo=[],go=0,Ta=null,Ma=0,cn=[],un=0,Rr=null,Xn=1,Gn="";function jr(e,t){mo[go++]=Ma,mo[go++]=Ta,Ta=e,Ma=t}function pp(e,t,o){cn[un++]=Xn,cn[un++]=Gn,cn[un++]=Rr,Rr=e;var s=Xn;e=Gn;var u=32-wn(s)-1;s&=~(1<<u),o+=1;var f=32-wn(t)+u;if(30<f){var v=u-u%5;f=(s&(1<<v)-1).toString(32),s>>=v,u-=v,Xn=1<<32-wn(t)+u|o<<u|s,Gn=f+e}else Xn=1<<f|o<<u|s,Gn=e}function Il(e){e.return!==null&&(jr(e,1),pp(e,1,0))}function Al(e){for(;e===Ta;)Ta=mo[--go],mo[go]=null,Ma=mo[--go],mo[go]=null;for(;e===Rr;)Rr=cn[--un],cn[un]=null,Gn=cn[--un],cn[un]=null,Xn=cn[--un],cn[un]=null}var tn=null,nn=null,nt=!1,yn=null;function fp(e,t){var o=hn(5,null,null,0);o.elementType="DELETED",o.stateNode=t,o.return=e,t=e.deletions,t===null?(e.deletions=[o],e.flags|=16):t.push(o)}function hp(e,t){switch(e.tag){case 5:var o=e.type;return t=t.nodeType!==1||o.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,tn=e,nn=dr(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,tn=e,nn=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(o=Rr!==null?{id:Xn,overflow:Gn}:null,e.memoizedState={dehydrated:t,treeContext:o,retryLane:1073741824},o=hn(18,null,null,0),o.stateNode=t,o.return=e,e.child=o,tn=e,nn=null,!0):!1;default:return!1}}function Pl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Rl(e){if(nt){var t=nn;if(t){var o=t;if(!hp(e,t)){if(Pl(e))throw Error(i(418));t=dr(o.nextSibling);var s=tn;t&&hp(e,t)?fp(s,o):(e.flags=e.flags&-4097|2,nt=!1,tn=e)}}else{if(Pl(e))throw Error(i(418));e.flags=e.flags&-4097|2,nt=!1,tn=e}}}function mp(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;tn=e}function za(e){if(e!==tn)return!1;if(!nt)return mp(e),nt=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Cl(e.type,e.memoizedProps)),t&&(t=nn)){if(Pl(e))throw gp(),Error(i(418));for(;t;)fp(e,t),t=dr(t.nextSibling)}if(mp(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(i(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var o=e.data;if(o==="/$"){if(t===0){nn=dr(e.nextSibling);break e}t--}else o!=="$"&&o!=="$!"&&o!=="$?"||t++}e=e.nextSibling}nn=null}}else nn=tn?dr(e.stateNode.nextSibling):null;return!0}function gp(){for(var e=nn;e;)e=dr(e.nextSibling)}function vo(){nn=tn=null,nt=!1}function jl(e){yn===null?yn=[e]:yn.push(e)}var Uv=W.ReactCurrentBatchConfig;function fi(e,t,o){if(e=o.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(i(309));var s=o.stateNode}if(!s)throw Error(i(147,e));var u=s,f=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===f?t.ref:(t=function(v){var _=u.refs;v===null?delete _[f]:_[f]=v},t._stringRef=f,t)}if(typeof e!="string")throw Error(i(284));if(!o._owner)throw Error(i(290,e))}return e}function Ia(e,t){throw e=Object.prototype.toString.call(t),Error(i(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function vp(e){var t=e._init;return t(e._payload)}function wp(e){function t($,A){if(e){var L=$.deletions;L===null?($.deletions=[A],$.flags|=16):L.push(A)}}function o($,A){if(!e)return null;for(;A!==null;)t($,A),A=A.sibling;return null}function s($,A){for($=new Map;A!==null;)A.key!==null?$.set(A.key,A):$.set(A.index,A),A=A.sibling;return $}function u($,A){return $=kr($,A),$.index=0,$.sibling=null,$}function f($,A,L){return $.index=L,e?(L=$.alternate,L!==null?(L=L.index,L<A?($.flags|=2,A):L):($.flags|=2,A)):($.flags|=1048576,A)}function v($){return e&&$.alternate===null&&($.flags|=2),$}function _($,A,L,J){return A===null||A.tag!==6?(A=Nc(L,$.mode,J),A.return=$,A):(A=u(A,L),A.return=$,A)}function T($,A,L,J){var he=L.type;return he===ee?G($,A,L.props.children,J,L.key):A!==null&&(A.elementType===he||typeof he=="object"&&he!==null&&he.$$typeof===C&&vp(he)===A.type)?(J=u(A,L.props),J.ref=fi($,A,L),J.return=$,J):(J=ts(L.type,L.key,L.props,null,$.mode,J),J.ref=fi($,A,L),J.return=$,J)}function D($,A,L,J){return A===null||A.tag!==4||A.stateNode.containerInfo!==L.containerInfo||A.stateNode.implementation!==L.implementation?(A=Ec(L,$.mode,J),A.return=$,A):(A=u(A,L.children||[]),A.return=$,A)}function G($,A,L,J,he){return A===null||A.tag!==7?(A=Wr(L,$.mode,J,he),A.return=$,A):(A=u(A,L),A.return=$,A)}function q($,A,L){if(typeof A=="string"&&A!==""||typeof A=="number")return A=Nc(""+A,$.mode,L),A.return=$,A;if(typeof A=="object"&&A!==null){switch(A.$$typeof){case V:return L=ts(A.type,A.key,A.props,null,$.mode,L),L.ref=fi($,null,A),L.return=$,L;case K:return A=Ec(A,$.mode,L),A.return=$,A;case C:var J=A._init;return q($,J(A._payload),L)}if(gt(A)||U(A))return A=Wr(A,$.mode,L,null),A.return=$,A;Ia($,A)}return null}function X($,A,L,J){var he=A!==null?A.key:null;if(typeof L=="string"&&L!==""||typeof L=="number")return he!==null?null:_($,A,""+L,J);if(typeof L=="object"&&L!==null){switch(L.$$typeof){case V:return L.key===he?T($,A,L,J):null;case K:return L.key===he?D($,A,L,J):null;case C:return he=L._init,X($,A,he(L._payload),J)}if(gt(L)||U(L))return he!==null?null:G($,A,L,J,null);Ia($,L)}return null}function se($,A,L,J,he){if(typeof J=="string"&&J!==""||typeof J=="number")return $=$.get(L)||null,_(A,$,""+J,he);if(typeof J=="object"&&J!==null){switch(J.$$typeof){case V:return $=$.get(J.key===null?L:J.key)||null,T(A,$,J,he);case K:return $=$.get(J.key===null?L:J.key)||null,D(A,$,J,he);case C:var ye=J._init;return se($,A,L,ye(J._payload),he)}if(gt(J)||U(J))return $=$.get(L)||null,G(A,$,J,he,null);Ia(A,J)}return null}function pe($,A,L,J){for(var he=null,ye=null,be=A,_e=A=0,Et=null;be!==null&&_e<L.length;_e++){be.index>_e?(Et=be,be=null):Et=be.sibling;var Oe=X($,be,L[_e],J);if(Oe===null){be===null&&(be=Et);break}e&&be&&Oe.alternate===null&&t($,be),A=f(Oe,A,_e),ye===null?he=Oe:ye.sibling=Oe,ye=Oe,be=Et}if(_e===L.length)return o($,be),nt&&jr($,_e),he;if(be===null){for(;_e<L.length;_e++)be=q($,L[_e],J),be!==null&&(A=f(be,A,_e),ye===null?he=be:ye.sibling=be,ye=be);return nt&&jr($,_e),he}for(be=s($,be);_e<L.length;_e++)Et=se(be,$,_e,L[_e],J),Et!==null&&(e&&Et.alternate!==null&&be.delete(Et.key===null?_e:Et.key),A=f(Et,A,_e),ye===null?he=Et:ye.sibling=Et,ye=Et);return e&&be.forEach(function(_r){return t($,_r)}),nt&&jr($,_e),he}function fe($,A,L,J){var he=U(L);if(typeof he!="function")throw Error(i(150));if(L=he.call(L),L==null)throw Error(i(151));for(var ye=he=null,be=A,_e=A=0,Et=null,Oe=L.next();be!==null&&!Oe.done;_e++,Oe=L.next()){be.index>_e?(Et=be,be=null):Et=be.sibling;var _r=X($,be,Oe.value,J);if(_r===null){be===null&&(be=Et);break}e&&be&&_r.alternate===null&&t($,be),A=f(_r,A,_e),ye===null?he=_r:ye.sibling=_r,ye=_r,be=Et}if(Oe.done)return o($,be),nt&&jr($,_e),he;if(be===null){for(;!Oe.done;_e++,Oe=L.next())Oe=q($,Oe.value,J),Oe!==null&&(A=f(Oe,A,_e),ye===null?he=Oe:ye.sibling=Oe,ye=Oe);return nt&&jr($,_e),he}for(be=s($,be);!Oe.done;_e++,Oe=L.next())Oe=se(be,$,_e,Oe.value,J),Oe!==null&&(e&&Oe.alternate!==null&&be.delete(Oe.key===null?_e:Oe.key),A=f(Oe,A,_e),ye===null?he=Oe:ye.sibling=Oe,ye=Oe);return e&&be.forEach(function(y0){return t($,y0)}),nt&&jr($,_e),he}function dt($,A,L,J){if(typeof L=="object"&&L!==null&&L.type===ee&&L.key===null&&(L=L.props.children),typeof L=="object"&&L!==null){switch(L.$$typeof){case V:e:{for(var he=L.key,ye=A;ye!==null;){if(ye.key===he){if(he=L.type,he===ee){if(ye.tag===7){o($,ye.sibling),A=u(ye,L.props.children),A.return=$,$=A;break e}}else if(ye.elementType===he||typeof he=="object"&&he!==null&&he.$$typeof===C&&vp(he)===ye.type){o($,ye.sibling),A=u(ye,L.props),A.ref=fi($,ye,L),A.return=$,$=A;break e}o($,ye);break}else t($,ye);ye=ye.sibling}L.type===ee?(A=Wr(L.props.children,$.mode,J,L.key),A.return=$,$=A):(J=ts(L.type,L.key,L.props,null,$.mode,J),J.ref=fi($,A,L),J.return=$,$=J)}return v($);case K:e:{for(ye=L.key;A!==null;){if(A.key===ye)if(A.tag===4&&A.stateNode.containerInfo===L.containerInfo&&A.stateNode.implementation===L.implementation){o($,A.sibling),A=u(A,L.children||[]),A.return=$,$=A;break e}else{o($,A);break}else t($,A);A=A.sibling}A=Ec(L,$.mode,J),A.return=$,$=A}return v($);case C:return ye=L._init,dt($,A,ye(L._payload),J)}if(gt(L))return pe($,A,L,J);if(U(L))return fe($,A,L,J);Ia($,L)}return typeof L=="string"&&L!==""||typeof L=="number"?(L=""+L,A!==null&&A.tag===6?(o($,A.sibling),A=u(A,L),A.return=$,$=A):(o($,A),A=Nc(L,$.mode,J),A.return=$,$=A),v($)):o($,A)}return dt}var wo=wp(!0),xp=wp(!1),Aa=pr(null),Pa=null,xo=null,Fl=null;function $l(){Fl=xo=Pa=null}function Ll(e){var t=Aa.current;et(Aa),e._currentValue=t}function Dl(e,t,o){for(;e!==null;){var s=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,s!==null&&(s.childLanes|=t)):s!==null&&(s.childLanes&t)!==t&&(s.childLanes|=t),e===o)break;e=e.return}}function yo(e,t){Pa=e,Fl=xo=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(Qt=!0),e.firstContext=null)}function dn(e){var t=e._currentValue;if(Fl!==e)if(e={context:e,memoizedValue:t,next:null},xo===null){if(Pa===null)throw Error(i(308));xo=e,Pa.dependencies={lanes:0,firstContext:e}}else xo=xo.next=e;return t}var Fr=null;function Ol(e){Fr===null?Fr=[e]:Fr.push(e)}function yp(e,t,o,s){var u=t.interleaved;return u===null?(o.next=o,Ol(t)):(o.next=u.next,u.next=o),t.interleaved=o,Qn(e,s)}function Qn(e,t){e.lanes|=t;var o=e.alternate;for(o!==null&&(o.lanes|=t),o=e,e=e.return;e!==null;)e.childLanes|=t,o=e.alternate,o!==null&&(o.childLanes|=t),o=e,e=e.return;return o.tag===3?o.stateNode:null}var mr=!1;function Ul(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function bp(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function qn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function gr(e,t,o){var s=e.updateQueue;if(s===null)return null;if(s=s.shared,(Le&2)!==0){var u=s.pending;return u===null?t.next=t:(t.next=u.next,u.next=t),s.pending=t,Qn(e,o)}return u=s.interleaved,u===null?(t.next=t,Ol(s)):(t.next=u.next,u.next=t),s.interleaved=t,Qn(e,o)}function Ra(e,t,o){if(t=t.updateQueue,t!==null&&(t=t.shared,(o&4194240)!==0)){var s=t.lanes;s&=e.pendingLanes,o|=s,t.lanes=o,tl(e,o)}}function kp(e,t){var o=e.updateQueue,s=e.alternate;if(s!==null&&(s=s.updateQueue,o===s)){var u=null,f=null;if(o=o.firstBaseUpdate,o!==null){do{var v={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};f===null?u=f=v:f=f.next=v,o=o.next}while(o!==null);f===null?u=f=t:f=f.next=t}else u=f=t;o={baseState:s.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:s.shared,effects:s.effects},e.updateQueue=o;return}e=o.lastBaseUpdate,e===null?o.firstBaseUpdate=t:e.next=t,o.lastBaseUpdate=t}function ja(e,t,o,s){var u=e.updateQueue;mr=!1;var f=u.firstBaseUpdate,v=u.lastBaseUpdate,_=u.shared.pending;if(_!==null){u.shared.pending=null;var T=_,D=T.next;T.next=null,v===null?f=D:v.next=D,v=T;var G=e.alternate;G!==null&&(G=G.updateQueue,_=G.lastBaseUpdate,_!==v&&(_===null?G.firstBaseUpdate=D:_.next=D,G.lastBaseUpdate=T))}if(f!==null){var q=u.baseState;v=0,G=D=T=null,_=f;do{var X=_.lane,se=_.eventTime;if((s&X)===X){G!==null&&(G=G.next={eventTime:se,lane:0,tag:_.tag,payload:_.payload,callback:_.callback,next:null});e:{var pe=e,fe=_;switch(X=t,se=o,fe.tag){case 1:if(pe=fe.payload,typeof pe=="function"){q=pe.call(se,q,X);break e}q=pe;break e;case 3:pe.flags=pe.flags&-65537|128;case 0:if(pe=fe.payload,X=typeof pe=="function"?pe.call(se,q,X):pe,X==null)break e;q=O({},q,X);break e;case 2:mr=!0}}_.callback!==null&&_.lane!==0&&(e.flags|=64,X=u.effects,X===null?u.effects=[_]:X.push(_))}else se={eventTime:se,lane:X,tag:_.tag,payload:_.payload,callback:_.callback,next:null},G===null?(D=G=se,T=q):G=G.next=se,v|=X;if(_=_.next,_===null){if(_=u.shared.pending,_===null)break;X=_,_=X.next,X.next=null,u.lastBaseUpdate=X,u.shared.pending=null}}while(!0);if(G===null&&(T=q),u.baseState=T,u.firstBaseUpdate=D,u.lastBaseUpdate=G,t=u.shared.interleaved,t!==null){u=t;do v|=u.lane,u=u.next;while(u!==t)}else f===null&&(u.shared.lanes=0);Dr|=v,e.lanes=v,e.memoizedState=q}}function _p(e,t,o){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var s=e[t],u=s.callback;if(u!==null){if(s.callback=null,s=o,typeof u!="function")throw Error(i(191,u));u.call(s)}}}var hi={},jn=pr(hi),mi=pr(hi),gi=pr(hi);function $r(e){if(e===hi)throw Error(i(174));return e}function Hl(e,t){switch(qe(gi,t),qe(mi,e),qe(jn,hi),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:sn(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=sn(t,e)}et(jn),qe(jn,t)}function bo(){et(jn),et(mi),et(gi)}function Sp(e){$r(gi.current);var t=$r(jn.current),o=sn(t,e.type);t!==o&&(qe(mi,e),qe(jn,o))}function Wl(e){mi.current===e&&(et(jn),et(mi))}var at=pr(0);function Fa(e){for(var t=e;t!==null;){if(t.tag===13){var o=t.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Vl=[];function Yl(){for(var e=0;e<Vl.length;e++)Vl[e]._workInProgressVersionPrimary=null;Vl.length=0}var $a=W.ReactCurrentDispatcher,Bl=W.ReactCurrentBatchConfig,Lr=0,st=null,kt=null,Ct=null,La=!1,vi=!1,wi=0,Hv=0;function Ft(){throw Error(i(321))}function Xl(e,t){if(t===null)return!1;for(var o=0;o<t.length&&o<e.length;o++)if(!xn(e[o],t[o]))return!1;return!0}function Gl(e,t,o,s,u,f){if(Lr=f,st=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,$a.current=e===null||e.memoizedState===null?Bv:Xv,e=o(s,u),vi){f=0;do{if(vi=!1,wi=0,25<=f)throw Error(i(301));f+=1,Ct=kt=null,t.updateQueue=null,$a.current=Gv,e=o(s,u)}while(vi)}if($a.current=Ua,t=kt!==null&&kt.next!==null,Lr=0,Ct=kt=st=null,La=!1,t)throw Error(i(300));return e}function Ql(){var e=wi!==0;return wi=0,e}function Fn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ct===null?st.memoizedState=Ct=e:Ct=Ct.next=e,Ct}function pn(){if(kt===null){var e=st.alternate;e=e!==null?e.memoizedState:null}else e=kt.next;var t=Ct===null?st.memoizedState:Ct.next;if(t!==null)Ct=t,kt=e;else{if(e===null)throw Error(i(310));kt=e,e={memoizedState:kt.memoizedState,baseState:kt.baseState,baseQueue:kt.baseQueue,queue:kt.queue,next:null},Ct===null?st.memoizedState=Ct=e:Ct=Ct.next=e}return Ct}function xi(e,t){return typeof t=="function"?t(e):t}function ql(e){var t=pn(),o=t.queue;if(o===null)throw Error(i(311));o.lastRenderedReducer=e;var s=kt,u=s.baseQueue,f=o.pending;if(f!==null){if(u!==null){var v=u.next;u.next=f.next,f.next=v}s.baseQueue=u=f,o.pending=null}if(u!==null){f=u.next,s=s.baseState;var _=v=null,T=null,D=f;do{var G=D.lane;if((Lr&G)===G)T!==null&&(T=T.next={lane:0,action:D.action,hasEagerState:D.hasEagerState,eagerState:D.eagerState,next:null}),s=D.hasEagerState?D.eagerState:e(s,D.action);else{var q={lane:G,action:D.action,hasEagerState:D.hasEagerState,eagerState:D.eagerState,next:null};T===null?(_=T=q,v=s):T=T.next=q,st.lanes|=G,Dr|=G}D=D.next}while(D!==null&&D!==f);T===null?v=s:T.next=_,xn(s,t.memoizedState)||(Qt=!0),t.memoizedState=s,t.baseState=v,t.baseQueue=T,o.lastRenderedState=s}if(e=o.interleaved,e!==null){u=e;do f=u.lane,st.lanes|=f,Dr|=f,u=u.next;while(u!==e)}else u===null&&(o.lanes=0);return[t.memoizedState,o.dispatch]}function Kl(e){var t=pn(),o=t.queue;if(o===null)throw Error(i(311));o.lastRenderedReducer=e;var s=o.dispatch,u=o.pending,f=t.memoizedState;if(u!==null){o.pending=null;var v=u=u.next;do f=e(f,v.action),v=v.next;while(v!==u);xn(f,t.memoizedState)||(Qt=!0),t.memoizedState=f,t.baseQueue===null&&(t.baseState=f),o.lastRenderedState=f}return[f,s]}function Cp(){}function Np(e,t){var o=st,s=pn(),u=t(),f=!xn(s.memoizedState,u);if(f&&(s.memoizedState=u,Qt=!0),s=s.queue,Jl(Mp.bind(null,o,s,e),[e]),s.getSnapshot!==t||f||Ct!==null&&Ct.memoizedState.tag&1){if(o.flags|=2048,yi(9,Tp.bind(null,o,s,u,t),void 0,null),Nt===null)throw Error(i(349));(Lr&30)!==0||Ep(o,t,u)}return u}function Ep(e,t,o){e.flags|=16384,e={getSnapshot:t,value:o},t=st.updateQueue,t===null?(t={lastEffect:null,stores:null},st.updateQueue=t,t.stores=[e]):(o=t.stores,o===null?t.stores=[e]:o.push(e))}function Tp(e,t,o,s){t.value=o,t.getSnapshot=s,zp(t)&&Ip(e)}function Mp(e,t,o){return o(function(){zp(t)&&Ip(e)})}function zp(e){var t=e.getSnapshot;e=e.value;try{var o=t();return!xn(e,o)}catch{return!0}}function Ip(e){var t=Qn(e,1);t!==null&&Sn(t,e,1,-1)}function Ap(e){var t=Fn();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:xi,lastRenderedState:e},t.queue=e,e=e.dispatch=Yv.bind(null,st,e),[t.memoizedState,e]}function yi(e,t,o,s){return e={tag:e,create:t,destroy:o,deps:s,next:null},t=st.updateQueue,t===null?(t={lastEffect:null,stores:null},st.updateQueue=t,t.lastEffect=e.next=e):(o=t.lastEffect,o===null?t.lastEffect=e.next=e:(s=o.next,o.next=e,e.next=s,t.lastEffect=e)),e}function Pp(){return pn().memoizedState}function Da(e,t,o,s){var u=Fn();st.flags|=e,u.memoizedState=yi(1|t,o,void 0,s===void 0?null:s)}function Oa(e,t,o,s){var u=pn();s=s===void 0?null:s;var f=void 0;if(kt!==null){var v=kt.memoizedState;if(f=v.destroy,s!==null&&Xl(s,v.deps)){u.memoizedState=yi(t,o,f,s);return}}st.flags|=e,u.memoizedState=yi(1|t,o,f,s)}function Rp(e,t){return Da(8390656,8,e,t)}function Jl(e,t){return Oa(2048,8,e,t)}function jp(e,t){return Oa(4,2,e,t)}function Fp(e,t){return Oa(4,4,e,t)}function $p(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Lp(e,t,o){return o=o!=null?o.concat([e]):null,Oa(4,4,$p.bind(null,t,e),o)}function Zl(){}function Dp(e,t){var o=pn();t=t===void 0?null:t;var s=o.memoizedState;return s!==null&&t!==null&&Xl(t,s[1])?s[0]:(o.memoizedState=[e,t],e)}function Op(e,t){var o=pn();t=t===void 0?null:t;var s=o.memoizedState;return s!==null&&t!==null&&Xl(t,s[1])?s[0]:(e=e(),o.memoizedState=[e,t],e)}function Up(e,t,o){return(Lr&21)===0?(e.baseState&&(e.baseState=!1,Qt=!0),e.memoizedState=o):(xn(o,t)||(o=vd(),st.lanes|=o,Dr|=o,e.baseState=!0),t)}function Wv(e,t){var o=Ve;Ve=o!==0&&4>o?o:4,e(!0);var s=Bl.transition;Bl.transition={};try{e(!1),t()}finally{Ve=o,Bl.transition=s}}function Hp(){return pn().memoizedState}function Vv(e,t,o){var s=yr(e);if(o={lane:s,action:o,hasEagerState:!1,eagerState:null,next:null},Wp(e))Vp(t,o);else if(o=yp(e,t,o,s),o!==null){var u=Wt();Sn(o,e,s,u),Yp(o,t,s)}}function Yv(e,t,o){var s=yr(e),u={lane:s,action:o,hasEagerState:!1,eagerState:null,next:null};if(Wp(e))Vp(t,u);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=t.lastRenderedReducer,f!==null))try{var v=t.lastRenderedState,_=f(v,o);if(u.hasEagerState=!0,u.eagerState=_,xn(_,v)){var T=t.interleaved;T===null?(u.next=u,Ol(t)):(u.next=T.next,T.next=u),t.interleaved=u;return}}catch{}finally{}o=yp(e,t,u,s),o!==null&&(u=Wt(),Sn(o,e,s,u),Yp(o,t,s))}}function Wp(e){var t=e.alternate;return e===st||t!==null&&t===st}function Vp(e,t){vi=La=!0;var o=e.pending;o===null?t.next=t:(t.next=o.next,o.next=t),e.pending=t}function Yp(e,t,o){if((o&4194240)!==0){var s=t.lanes;s&=e.pendingLanes,o|=s,t.lanes=o,tl(e,o)}}var Ua={readContext:dn,useCallback:Ft,useContext:Ft,useEffect:Ft,useImperativeHandle:Ft,useInsertionEffect:Ft,useLayoutEffect:Ft,useMemo:Ft,useReducer:Ft,useRef:Ft,useState:Ft,useDebugValue:Ft,useDeferredValue:Ft,useTransition:Ft,useMutableSource:Ft,useSyncExternalStore:Ft,useId:Ft,unstable_isNewReconciler:!1},Bv={readContext:dn,useCallback:function(e,t){return Fn().memoizedState=[e,t===void 0?null:t],e},useContext:dn,useEffect:Rp,useImperativeHandle:function(e,t,o){return o=o!=null?o.concat([e]):null,Da(4194308,4,$p.bind(null,t,e),o)},useLayoutEffect:function(e,t){return Da(4194308,4,e,t)},useInsertionEffect:function(e,t){return Da(4,2,e,t)},useMemo:function(e,t){var o=Fn();return t=t===void 0?null:t,e=e(),o.memoizedState=[e,t],e},useReducer:function(e,t,o){var s=Fn();return t=o!==void 0?o(t):t,s.memoizedState=s.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},s.queue=e,e=e.dispatch=Vv.bind(null,st,e),[s.memoizedState,e]},useRef:function(e){var t=Fn();return e={current:e},t.memoizedState=e},useState:Ap,useDebugValue:Zl,useDeferredValue:function(e){return Fn().memoizedState=e},useTransition:function(){var e=Ap(!1),t=e[0];return e=Wv.bind(null,e[1]),Fn().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,o){var s=st,u=Fn();if(nt){if(o===void 0)throw Error(i(407));o=o()}else{if(o=t(),Nt===null)throw Error(i(349));(Lr&30)!==0||Ep(s,t,o)}u.memoizedState=o;var f={value:o,getSnapshot:t};return u.queue=f,Rp(Mp.bind(null,s,f,e),[e]),s.flags|=2048,yi(9,Tp.bind(null,s,f,o,t),void 0,null),o},useId:function(){var e=Fn(),t=Nt.identifierPrefix;if(nt){var o=Gn,s=Xn;o=(s&~(1<<32-wn(s)-1)).toString(32)+o,t=":"+t+"R"+o,o=wi++,0<o&&(t+="H"+o.toString(32)),t+=":"}else o=Hv++,t=":"+t+"r"+o.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Xv={readContext:dn,useCallback:Dp,useContext:dn,useEffect:Jl,useImperativeHandle:Lp,useInsertionEffect:jp,useLayoutEffect:Fp,useMemo:Op,useReducer:ql,useRef:Pp,useState:function(){return ql(xi)},useDebugValue:Zl,useDeferredValue:function(e){var t=pn();return Up(t,kt.memoizedState,e)},useTransition:function(){var e=ql(xi)[0],t=pn().memoizedState;return[e,t]},useMutableSource:Cp,useSyncExternalStore:Np,useId:Hp,unstable_isNewReconciler:!1},Gv={readContext:dn,useCallback:Dp,useContext:dn,useEffect:Jl,useImperativeHandle:Lp,useInsertionEffect:jp,useLayoutEffect:Fp,useMemo:Op,useReducer:Kl,useRef:Pp,useState:function(){return Kl(xi)},useDebugValue:Zl,useDeferredValue:function(e){var t=pn();return kt===null?t.memoizedState=e:Up(t,kt.memoizedState,e)},useTransition:function(){var e=Kl(xi)[0],t=pn().memoizedState;return[e,t]},useMutableSource:Cp,useSyncExternalStore:Np,useId:Hp,unstable_isNewReconciler:!1};function bn(e,t){if(e&&e.defaultProps){t=O({},t),e=e.defaultProps;for(var o in e)t[o]===void 0&&(t[o]=e[o]);return t}return t}function ec(e,t,o,s){t=e.memoizedState,o=o(s,t),o=o==null?t:O({},t,o),e.memoizedState=o,e.lanes===0&&(e.updateQueue.baseState=o)}var Ha={isMounted:function(e){return(e=e._reactInternals)?Ir(e)===e:!1},enqueueSetState:function(e,t,o){e=e._reactInternals;var s=Wt(),u=yr(e),f=qn(s,u);f.payload=t,o!=null&&(f.callback=o),t=gr(e,f,u),t!==null&&(Sn(t,e,u,s),Ra(t,e,u))},enqueueReplaceState:function(e,t,o){e=e._reactInternals;var s=Wt(),u=yr(e),f=qn(s,u);f.tag=1,f.payload=t,o!=null&&(f.callback=o),t=gr(e,f,u),t!==null&&(Sn(t,e,u,s),Ra(t,e,u))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var o=Wt(),s=yr(e),u=qn(o,s);u.tag=2,t!=null&&(u.callback=t),t=gr(e,u,s),t!==null&&(Sn(t,e,s,o),Ra(t,e,s))}};function Bp(e,t,o,s,u,f,v){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(s,f,v):t.prototype&&t.prototype.isPureReactComponent?!ai(o,s)||!ai(u,f):!0}function Xp(e,t,o){var s=!1,u=fr,f=t.contextType;return typeof f=="object"&&f!==null?f=dn(f):(u=Gt(t)?Pr:jt.current,s=t.contextTypes,f=(s=s!=null)?ho(e,u):fr),t=new t(o,f),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Ha,e.stateNode=t,t._reactInternals=e,s&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=u,e.__reactInternalMemoizedMaskedChildContext=f),t}function Gp(e,t,o,s){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(o,s),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(o,s),t.state!==e&&Ha.enqueueReplaceState(t,t.state,null)}function tc(e,t,o,s){var u=e.stateNode;u.props=o,u.state=e.memoizedState,u.refs={},Ul(e);var f=t.contextType;typeof f=="object"&&f!==null?u.context=dn(f):(f=Gt(t)?Pr:jt.current,u.context=ho(e,f)),u.state=e.memoizedState,f=t.getDerivedStateFromProps,typeof f=="function"&&(ec(e,t,f,o),u.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(t=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),t!==u.state&&Ha.enqueueReplaceState(u,u.state,null),ja(e,o,u,s),u.state=e.memoizedState),typeof u.componentDidMount=="function"&&(e.flags|=4194308)}function ko(e,t){try{var o="",s=t;do o+=Y(s),s=s.return;while(s);var u=o}catch(f){u=`
Error generating stack: `+f.message+`
`+f.stack}return{value:e,source:t,stack:u,digest:null}}function nc(e,t,o){return{value:e,source:null,stack:o??null,digest:t??null}}function rc(e,t){try{console.error(t.value)}catch(o){setTimeout(function(){throw o})}}var Qv=typeof WeakMap=="function"?WeakMap:Map;function Qp(e,t,o){o=qn(-1,o),o.tag=3,o.payload={element:null};var s=t.value;return o.callback=function(){Qa||(Qa=!0,wc=s),rc(e,t)},o}function qp(e,t,o){o=qn(-1,o),o.tag=3;var s=e.type.getDerivedStateFromError;if(typeof s=="function"){var u=t.value;o.payload=function(){return s(u)},o.callback=function(){rc(e,t)}}var f=e.stateNode;return f!==null&&typeof f.componentDidCatch=="function"&&(o.callback=function(){rc(e,t),typeof s!="function"&&(wr===null?wr=new Set([this]):wr.add(this));var v=t.stack;this.componentDidCatch(t.value,{componentStack:v!==null?v:""})}),o}function Kp(e,t,o){var s=e.pingCache;if(s===null){s=e.pingCache=new Qv;var u=new Set;s.set(t,u)}else u=s.get(t),u===void 0&&(u=new Set,s.set(t,u));u.has(o)||(u.add(o),e=c0.bind(null,e,t,o),t.then(e,e))}function Jp(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Zp(e,t,o,s,u){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(t=qn(-1,1),t.tag=2,gr(o,t,1))),o.lanes|=1),e):(e.flags|=65536,e.lanes=u,e)}var qv=W.ReactCurrentOwner,Qt=!1;function Ht(e,t,o,s){t.child=e===null?xp(t,null,o,s):wo(t,e.child,o,s)}function ef(e,t,o,s,u){o=o.render;var f=t.ref;return yo(t,u),s=Gl(e,t,o,s,f,u),o=Ql(),e!==null&&!Qt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~u,Kn(e,t,u)):(nt&&o&&Il(t),t.flags|=1,Ht(e,t,s,u),t.child)}function tf(e,t,o,s,u){if(e===null){var f=o.type;return typeof f=="function"&&!Cc(f)&&f.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(t.tag=15,t.type=f,nf(e,t,f,s,u)):(e=ts(o.type,null,s,t,t.mode,u),e.ref=t.ref,e.return=t,t.child=e)}if(f=e.child,(e.lanes&u)===0){var v=f.memoizedProps;if(o=o.compare,o=o!==null?o:ai,o(v,s)&&e.ref===t.ref)return Kn(e,t,u)}return t.flags|=1,e=kr(f,s),e.ref=t.ref,e.return=t,t.child=e}function nf(e,t,o,s,u){if(e!==null){var f=e.memoizedProps;if(ai(f,s)&&e.ref===t.ref)if(Qt=!1,t.pendingProps=s=f,(e.lanes&u)!==0)(e.flags&131072)!==0&&(Qt=!0);else return t.lanes=e.lanes,Kn(e,t,u)}return oc(e,t,o,s,u)}function rf(e,t,o){var s=t.pendingProps,u=s.children,f=e!==null?e.memoizedState:null;if(s.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},qe(So,rn),rn|=o;else{if((o&1073741824)===0)return e=f!==null?f.baseLanes|o:o,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,qe(So,rn),rn|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},s=f!==null?f.baseLanes:o,qe(So,rn),rn|=s}else f!==null?(s=f.baseLanes|o,t.memoizedState=null):s=o,qe(So,rn),rn|=s;return Ht(e,t,u,o),t.child}function of(e,t){var o=t.ref;(e===null&&o!==null||e!==null&&e.ref!==o)&&(t.flags|=512,t.flags|=2097152)}function oc(e,t,o,s,u){var f=Gt(o)?Pr:jt.current;return f=ho(t,f),yo(t,u),o=Gl(e,t,o,s,f,u),s=Ql(),e!==null&&!Qt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~u,Kn(e,t,u)):(nt&&s&&Il(t),t.flags|=1,Ht(e,t,o,u),t.child)}function af(e,t,o,s,u){if(Gt(o)){var f=!0;Na(t)}else f=!1;if(yo(t,u),t.stateNode===null)Va(e,t),Xp(t,o,s),tc(t,o,s,u),s=!0;else if(e===null){var v=t.stateNode,_=t.memoizedProps;v.props=_;var T=v.context,D=o.contextType;typeof D=="object"&&D!==null?D=dn(D):(D=Gt(o)?Pr:jt.current,D=ho(t,D));var G=o.getDerivedStateFromProps,q=typeof G=="function"||typeof v.getSnapshotBeforeUpdate=="function";q||typeof v.UNSAFE_componentWillReceiveProps!="function"&&typeof v.componentWillReceiveProps!="function"||(_!==s||T!==D)&&Gp(t,v,s,D),mr=!1;var X=t.memoizedState;v.state=X,ja(t,s,v,u),T=t.memoizedState,_!==s||X!==T||Xt.current||mr?(typeof G=="function"&&(ec(t,o,G,s),T=t.memoizedState),(_=mr||Bp(t,o,_,s,X,T,D))?(q||typeof v.UNSAFE_componentWillMount!="function"&&typeof v.componentWillMount!="function"||(typeof v.componentWillMount=="function"&&v.componentWillMount(),typeof v.UNSAFE_componentWillMount=="function"&&v.UNSAFE_componentWillMount()),typeof v.componentDidMount=="function"&&(t.flags|=4194308)):(typeof v.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=s,t.memoizedState=T),v.props=s,v.state=T,v.context=D,s=_):(typeof v.componentDidMount=="function"&&(t.flags|=4194308),s=!1)}else{v=t.stateNode,bp(e,t),_=t.memoizedProps,D=t.type===t.elementType?_:bn(t.type,_),v.props=D,q=t.pendingProps,X=v.context,T=o.contextType,typeof T=="object"&&T!==null?T=dn(T):(T=Gt(o)?Pr:jt.current,T=ho(t,T));var se=o.getDerivedStateFromProps;(G=typeof se=="function"||typeof v.getSnapshotBeforeUpdate=="function")||typeof v.UNSAFE_componentWillReceiveProps!="function"&&typeof v.componentWillReceiveProps!="function"||(_!==q||X!==T)&&Gp(t,v,s,T),mr=!1,X=t.memoizedState,v.state=X,ja(t,s,v,u);var pe=t.memoizedState;_!==q||X!==pe||Xt.current||mr?(typeof se=="function"&&(ec(t,o,se,s),pe=t.memoizedState),(D=mr||Bp(t,o,D,s,X,pe,T)||!1)?(G||typeof v.UNSAFE_componentWillUpdate!="function"&&typeof v.componentWillUpdate!="function"||(typeof v.componentWillUpdate=="function"&&v.componentWillUpdate(s,pe,T),typeof v.UNSAFE_componentWillUpdate=="function"&&v.UNSAFE_componentWillUpdate(s,pe,T)),typeof v.componentDidUpdate=="function"&&(t.flags|=4),typeof v.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof v.componentDidUpdate!="function"||_===e.memoizedProps&&X===e.memoizedState||(t.flags|=4),typeof v.getSnapshotBeforeUpdate!="function"||_===e.memoizedProps&&X===e.memoizedState||(t.flags|=1024),t.memoizedProps=s,t.memoizedState=pe),v.props=s,v.state=pe,v.context=T,s=D):(typeof v.componentDidUpdate!="function"||_===e.memoizedProps&&X===e.memoizedState||(t.flags|=4),typeof v.getSnapshotBeforeUpdate!="function"||_===e.memoizedProps&&X===e.memoizedState||(t.flags|=1024),s=!1)}return ic(e,t,o,s,f,u)}function ic(e,t,o,s,u,f){of(e,t);var v=(t.flags&128)!==0;if(!s&&!v)return u&&up(t,o,!1),Kn(e,t,f);s=t.stateNode,qv.current=t;var _=v&&typeof o.getDerivedStateFromError!="function"?null:s.render();return t.flags|=1,e!==null&&v?(t.child=wo(t,e.child,null,f),t.child=wo(t,null,_,f)):Ht(e,t,_,f),t.memoizedState=s.state,u&&up(t,o,!0),t.child}function sf(e){var t=e.stateNode;t.pendingContext?lp(e,t.pendingContext,t.pendingContext!==t.context):t.context&&lp(e,t.context,!1),Hl(e,t.containerInfo)}function lf(e,t,o,s,u){return vo(),jl(u),t.flags|=256,Ht(e,t,o,s),t.child}var ac={dehydrated:null,treeContext:null,retryLane:0};function sc(e){return{baseLanes:e,cachePool:null,transitions:null}}function cf(e,t,o){var s=t.pendingProps,u=at.current,f=!1,v=(t.flags&128)!==0,_;if((_=v)||(_=e!==null&&e.memoizedState===null?!1:(u&2)!==0),_?(f=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(u|=1),qe(at,u&1),e===null)return Rl(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(v=s.children,e=s.fallback,f?(s=t.mode,f=t.child,v={mode:"hidden",children:v},(s&1)===0&&f!==null?(f.childLanes=0,f.pendingProps=v):f=ns(v,s,0,null),e=Wr(e,s,o,null),f.return=t,e.return=t,f.sibling=e,t.child=f,t.child.memoizedState=sc(o),t.memoizedState=ac,e):lc(t,v));if(u=e.memoizedState,u!==null&&(_=u.dehydrated,_!==null))return Kv(e,t,v,s,_,u,o);if(f){f=s.fallback,v=t.mode,u=e.child,_=u.sibling;var T={mode:"hidden",children:s.children};return(v&1)===0&&t.child!==u?(s=t.child,s.childLanes=0,s.pendingProps=T,t.deletions=null):(s=kr(u,T),s.subtreeFlags=u.subtreeFlags&14680064),_!==null?f=kr(_,f):(f=Wr(f,v,o,null),f.flags|=2),f.return=t,s.return=t,s.sibling=f,t.child=s,s=f,f=t.child,v=e.child.memoizedState,v=v===null?sc(o):{baseLanes:v.baseLanes|o,cachePool:null,transitions:v.transitions},f.memoizedState=v,f.childLanes=e.childLanes&~o,t.memoizedState=ac,s}return f=e.child,e=f.sibling,s=kr(f,{mode:"visible",children:s.children}),(t.mode&1)===0&&(s.lanes=o),s.return=t,s.sibling=null,e!==null&&(o=t.deletions,o===null?(t.deletions=[e],t.flags|=16):o.push(e)),t.child=s,t.memoizedState=null,s}function lc(e,t){return t=ns({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Wa(e,t,o,s){return s!==null&&jl(s),wo(t,e.child,null,o),e=lc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Kv(e,t,o,s,u,f,v){if(o)return t.flags&256?(t.flags&=-257,s=nc(Error(i(422))),Wa(e,t,v,s)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(f=s.fallback,u=t.mode,s=ns({mode:"visible",children:s.children},u,0,null),f=Wr(f,u,v,null),f.flags|=2,s.return=t,f.return=t,s.sibling=f,t.child=s,(t.mode&1)!==0&&wo(t,e.child,null,v),t.child.memoizedState=sc(v),t.memoizedState=ac,f);if((t.mode&1)===0)return Wa(e,t,v,null);if(u.data==="$!"){if(s=u.nextSibling&&u.nextSibling.dataset,s)var _=s.dgst;return s=_,f=Error(i(419)),s=nc(f,s,void 0),Wa(e,t,v,s)}if(_=(v&e.childLanes)!==0,Qt||_){if(s=Nt,s!==null){switch(v&-v){case 4:u=2;break;case 16:u=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:u=32;break;case 536870912:u=268435456;break;default:u=0}u=(u&(s.suspendedLanes|v))!==0?0:u,u!==0&&u!==f.retryLane&&(f.retryLane=u,Qn(e,u),Sn(s,e,u,-1))}return Sc(),s=nc(Error(i(421))),Wa(e,t,v,s)}return u.data==="$?"?(t.flags|=128,t.child=e.child,t=u0.bind(null,e),u._reactRetry=t,null):(e=f.treeContext,nn=dr(u.nextSibling),tn=t,nt=!0,yn=null,e!==null&&(cn[un++]=Xn,cn[un++]=Gn,cn[un++]=Rr,Xn=e.id,Gn=e.overflow,Rr=t),t=lc(t,s.children),t.flags|=4096,t)}function uf(e,t,o){e.lanes|=t;var s=e.alternate;s!==null&&(s.lanes|=t),Dl(e.return,t,o)}function cc(e,t,o,s,u){var f=e.memoizedState;f===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:s,tail:o,tailMode:u}:(f.isBackwards=t,f.rendering=null,f.renderingStartTime=0,f.last=s,f.tail=o,f.tailMode=u)}function df(e,t,o){var s=t.pendingProps,u=s.revealOrder,f=s.tail;if(Ht(e,t,s.children,o),s=at.current,(s&2)!==0)s=s&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&uf(e,o,t);else if(e.tag===19)uf(e,o,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}s&=1}if(qe(at,s),(t.mode&1)===0)t.memoizedState=null;else switch(u){case"forwards":for(o=t.child,u=null;o!==null;)e=o.alternate,e!==null&&Fa(e)===null&&(u=o),o=o.sibling;o=u,o===null?(u=t.child,t.child=null):(u=o.sibling,o.sibling=null),cc(t,!1,u,o,f);break;case"backwards":for(o=null,u=t.child,t.child=null;u!==null;){if(e=u.alternate,e!==null&&Fa(e)===null){t.child=u;break}e=u.sibling,u.sibling=o,o=u,u=e}cc(t,!0,o,null,f);break;case"together":cc(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Va(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Kn(e,t,o){if(e!==null&&(t.dependencies=e.dependencies),Dr|=t.lanes,(o&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(i(153));if(t.child!==null){for(e=t.child,o=kr(e,e.pendingProps),t.child=o,o.return=t;e.sibling!==null;)e=e.sibling,o=o.sibling=kr(e,e.pendingProps),o.return=t;o.sibling=null}return t.child}function Jv(e,t,o){switch(t.tag){case 3:sf(t),vo();break;case 5:Sp(t);break;case 1:Gt(t.type)&&Na(t);break;case 4:Hl(t,t.stateNode.containerInfo);break;case 10:var s=t.type._context,u=t.memoizedProps.value;qe(Aa,s._currentValue),s._currentValue=u;break;case 13:if(s=t.memoizedState,s!==null)return s.dehydrated!==null?(qe(at,at.current&1),t.flags|=128,null):(o&t.child.childLanes)!==0?cf(e,t,o):(qe(at,at.current&1),e=Kn(e,t,o),e!==null?e.sibling:null);qe(at,at.current&1);break;case 19:if(s=(o&t.childLanes)!==0,(e.flags&128)!==0){if(s)return df(e,t,o);t.flags|=128}if(u=t.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),qe(at,at.current),s)break;return null;case 22:case 23:return t.lanes=0,rf(e,t,o)}return Kn(e,t,o)}var pf,uc,ff,hf;pf=function(e,t){for(var o=t.child;o!==null;){if(o.tag===5||o.tag===6)e.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===t)break;for(;o.sibling===null;){if(o.return===null||o.return===t)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},uc=function(){},ff=function(e,t,o,s){var u=e.memoizedProps;if(u!==s){e=t.stateNode,$r(jn.current);var f=null;switch(o){case"input":u=je(e,u),s=je(e,s),f=[];break;case"select":u=O({},u,{value:void 0}),s=O({},s,{value:void 0}),f=[];break;case"textarea":u=Ye(e,u),s=Ye(e,s),f=[];break;default:typeof u.onClick!="function"&&typeof s.onClick=="function"&&(e.onclick=_a)}Bt(o,s);var v;o=null;for(D in u)if(!s.hasOwnProperty(D)&&u.hasOwnProperty(D)&&u[D]!=null)if(D==="style"){var _=u[D];for(v in _)_.hasOwnProperty(v)&&(o||(o={}),o[v]="")}else D!=="dangerouslySetInnerHTML"&&D!=="children"&&D!=="suppressContentEditableWarning"&&D!=="suppressHydrationWarning"&&D!=="autoFocus"&&(l.hasOwnProperty(D)?f||(f=[]):(f=f||[]).push(D,null));for(D in s){var T=s[D];if(_=u?.[D],s.hasOwnProperty(D)&&T!==_&&(T!=null||_!=null))if(D==="style")if(_){for(v in _)!_.hasOwnProperty(v)||T&&T.hasOwnProperty(v)||(o||(o={}),o[v]="");for(v in T)T.hasOwnProperty(v)&&_[v]!==T[v]&&(o||(o={}),o[v]=T[v])}else o||(f||(f=[]),f.push(D,o)),o=T;else D==="dangerouslySetInnerHTML"?(T=T?T.__html:void 0,_=_?_.__html:void 0,T!=null&&_!==T&&(f=f||[]).push(D,T)):D==="children"?typeof T!="string"&&typeof T!="number"||(f=f||[]).push(D,""+T):D!=="suppressContentEditableWarning"&&D!=="suppressHydrationWarning"&&(l.hasOwnProperty(D)?(T!=null&&D==="onScroll"&&Ze("scroll",e),f||_===T||(f=[])):(f=f||[]).push(D,T))}o&&(f=f||[]).push("style",o);var D=f;(t.updateQueue=D)&&(t.flags|=4)}},hf=function(e,t,o,s){o!==s&&(t.flags|=4)};function bi(e,t){if(!nt)switch(e.tailMode){case"hidden":t=e.tail;for(var o=null;t!==null;)t.alternate!==null&&(o=t),t=t.sibling;o===null?e.tail=null:o.sibling=null;break;case"collapsed":o=e.tail;for(var s=null;o!==null;)o.alternate!==null&&(s=o),o=o.sibling;s===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:s.sibling=null}}function $t(e){var t=e.alternate!==null&&e.alternate.child===e.child,o=0,s=0;if(t)for(var u=e.child;u!==null;)o|=u.lanes|u.childLanes,s|=u.subtreeFlags&14680064,s|=u.flags&14680064,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)o|=u.lanes|u.childLanes,s|=u.subtreeFlags,s|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=s,e.childLanes=o,t}function Zv(e,t,o){var s=t.pendingProps;switch(Al(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return $t(t),null;case 1:return Gt(t.type)&&Ca(),$t(t),null;case 3:return s=t.stateNode,bo(),et(Xt),et(jt),Yl(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(e===null||e.child===null)&&(za(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,yn!==null&&(bc(yn),yn=null))),uc(e,t),$t(t),null;case 5:Wl(t);var u=$r(gi.current);if(o=t.type,e!==null&&t.stateNode!=null)ff(e,t,o,s,u),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!s){if(t.stateNode===null)throw Error(i(166));return $t(t),null}if(e=$r(jn.current),za(t)){s=t.stateNode,o=t.type;var f=t.memoizedProps;switch(s[Rn]=t,s[di]=f,e=(t.mode&1)!==0,o){case"dialog":Ze("cancel",s),Ze("close",s);break;case"iframe":case"object":case"embed":Ze("load",s);break;case"video":case"audio":for(u=0;u<li.length;u++)Ze(li[u],s);break;case"source":Ze("error",s);break;case"img":case"image":case"link":Ze("error",s),Ze("load",s);break;case"details":Ze("toggle",s);break;case"input":Ue(s,f),Ze("invalid",s);break;case"select":s._wrapperState={wasMultiple:!!f.multiple},Ze("invalid",s);break;case"textarea":Ge(s,f),Ze("invalid",s)}Bt(o,f),u=null;for(var v in f)if(f.hasOwnProperty(v)){var _=f[v];v==="children"?typeof _=="string"?s.textContent!==_&&(f.suppressHydrationWarning!==!0&&ka(s.textContent,_,e),u=["children",_]):typeof _=="number"&&s.textContent!==""+_&&(f.suppressHydrationWarning!==!0&&ka(s.textContent,_,e),u=["children",""+_]):l.hasOwnProperty(v)&&_!=null&&v==="onScroll"&&Ze("scroll",s)}switch(o){case"input":te(s),mt(s,f,!0);break;case"textarea":te(s),Qe(s);break;case"select":case"option":break;default:typeof f.onClick=="function"&&(s.onclick=_a)}s=u,t.updateQueue=s,s!==null&&(t.flags|=4)}else{v=u.nodeType===9?u:u.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=yt(o)),e==="http://www.w3.org/1999/xhtml"?o==="script"?(e=v.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof s.is=="string"?e=v.createElement(o,{is:s.is}):(e=v.createElement(o),o==="select"&&(v=e,s.multiple?v.multiple=!0:s.size&&(v.size=s.size))):e=v.createElementNS(e,o),e[Rn]=t,e[di]=s,pf(e,t,!1,!1),t.stateNode=e;e:{switch(v=Ut(o,s),o){case"dialog":Ze("cancel",e),Ze("close",e),u=s;break;case"iframe":case"object":case"embed":Ze("load",e),u=s;break;case"video":case"audio":for(u=0;u<li.length;u++)Ze(li[u],e);u=s;break;case"source":Ze("error",e),u=s;break;case"img":case"image":case"link":Ze("error",e),Ze("load",e),u=s;break;case"details":Ze("toggle",e),u=s;break;case"input":Ue(e,s),u=je(e,s),Ze("invalid",e);break;case"option":u=s;break;case"select":e._wrapperState={wasMultiple:!!s.multiple},u=O({},s,{value:void 0}),Ze("invalid",e);break;case"textarea":Ge(e,s),u=Ye(e,s),Ze("invalid",e);break;default:u=s}Bt(o,u),_=u;for(f in _)if(_.hasOwnProperty(f)){var T=_[f];f==="style"?It(e,T):f==="dangerouslySetInnerHTML"?(T=T?T.__html:void 0,T!=null&&ln(e,T)):f==="children"?typeof T=="string"?(o!=="textarea"||T!=="")&&In(e,T):typeof T=="number"&&In(e,""+T):f!=="suppressContentEditableWarning"&&f!=="suppressHydrationWarning"&&f!=="autoFocus"&&(l.hasOwnProperty(f)?T!=null&&f==="onScroll"&&Ze("scroll",e):T!=null&&H(e,f,T,v))}switch(o){case"input":te(e),mt(e,s,!1);break;case"textarea":te(e),Qe(e);break;case"option":s.value!=null&&e.setAttribute("value",""+ie(s.value));break;case"select":e.multiple=!!s.multiple,f=s.value,f!=null?Ot(e,!!s.multiple,f,!1):s.defaultValue!=null&&Ot(e,!!s.multiple,s.defaultValue,!0);break;default:typeof u.onClick=="function"&&(e.onclick=_a)}switch(o){case"button":case"input":case"select":case"textarea":s=!!s.autoFocus;break e;case"img":s=!0;break e;default:s=!1}}s&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return $t(t),null;case 6:if(e&&t.stateNode!=null)hf(e,t,e.memoizedProps,s);else{if(typeof s!="string"&&t.stateNode===null)throw Error(i(166));if(o=$r(gi.current),$r(jn.current),za(t)){if(s=t.stateNode,o=t.memoizedProps,s[Rn]=t,(f=s.nodeValue!==o)&&(e=tn,e!==null))switch(e.tag){case 3:ka(s.nodeValue,o,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ka(s.nodeValue,o,(e.mode&1)!==0)}f&&(t.flags|=4)}else s=(o.nodeType===9?o:o.ownerDocument).createTextNode(s),s[Rn]=t,t.stateNode=s}return $t(t),null;case 13:if(et(at),s=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(nt&&nn!==null&&(t.mode&1)!==0&&(t.flags&128)===0)gp(),vo(),t.flags|=98560,f=!1;else if(f=za(t),s!==null&&s.dehydrated!==null){if(e===null){if(!f)throw Error(i(318));if(f=t.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(i(317));f[Rn]=t}else vo(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;$t(t),f=!1}else yn!==null&&(bc(yn),yn=null),f=!0;if(!f)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=o,t):(s=s!==null,s!==(e!==null&&e.memoizedState!==null)&&s&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(at.current&1)!==0?_t===0&&(_t=3):Sc())),t.updateQueue!==null&&(t.flags|=4),$t(t),null);case 4:return bo(),uc(e,t),e===null&&ci(t.stateNode.containerInfo),$t(t),null;case 10:return Ll(t.type._context),$t(t),null;case 17:return Gt(t.type)&&Ca(),$t(t),null;case 19:if(et(at),f=t.memoizedState,f===null)return $t(t),null;if(s=(t.flags&128)!==0,v=f.rendering,v===null)if(s)bi(f,!1);else{if(_t!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(v=Fa(e),v!==null){for(t.flags|=128,bi(f,!1),s=v.updateQueue,s!==null&&(t.updateQueue=s,t.flags|=4),t.subtreeFlags=0,s=o,o=t.child;o!==null;)f=o,e=s,f.flags&=14680066,v=f.alternate,v===null?(f.childLanes=0,f.lanes=e,f.child=null,f.subtreeFlags=0,f.memoizedProps=null,f.memoizedState=null,f.updateQueue=null,f.dependencies=null,f.stateNode=null):(f.childLanes=v.childLanes,f.lanes=v.lanes,f.child=v.child,f.subtreeFlags=0,f.deletions=null,f.memoizedProps=v.memoizedProps,f.memoizedState=v.memoizedState,f.updateQueue=v.updateQueue,f.type=v.type,e=v.dependencies,f.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),o=o.sibling;return qe(at,at.current&1|2),t.child}e=e.sibling}f.tail!==null&&ut()>Co&&(t.flags|=128,s=!0,bi(f,!1),t.lanes=4194304)}else{if(!s)if(e=Fa(v),e!==null){if(t.flags|=128,s=!0,o=e.updateQueue,o!==null&&(t.updateQueue=o,t.flags|=4),bi(f,!0),f.tail===null&&f.tailMode==="hidden"&&!v.alternate&&!nt)return $t(t),null}else 2*ut()-f.renderingStartTime>Co&&o!==1073741824&&(t.flags|=128,s=!0,bi(f,!1),t.lanes=4194304);f.isBackwards?(v.sibling=t.child,t.child=v):(o=f.last,o!==null?o.sibling=v:t.child=v,f.last=v)}return f.tail!==null?(t=f.tail,f.rendering=t,f.tail=t.sibling,f.renderingStartTime=ut(),t.sibling=null,o=at.current,qe(at,s?o&1|2:o&1),t):($t(t),null);case 22:case 23:return _c(),s=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==s&&(t.flags|=8192),s&&(t.mode&1)!==0?(rn&1073741824)!==0&&($t(t),t.subtreeFlags&6&&(t.flags|=8192)):$t(t),null;case 24:return null;case 25:return null}throw Error(i(156,t.tag))}function e0(e,t){switch(Al(t),t.tag){case 1:return Gt(t.type)&&Ca(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return bo(),et(Xt),et(jt),Yl(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return Wl(t),null;case 13:if(et(at),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(i(340));vo()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return et(at),null;case 4:return bo(),null;case 10:return Ll(t.type._context),null;case 22:case 23:return _c(),null;case 24:return null;default:return null}}var Ya=!1,Lt=!1,t0=typeof WeakSet=="function"?WeakSet:Set,ue=null;function _o(e,t){var o=e.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(s){lt(e,t,s)}else o.current=null}function dc(e,t,o){try{o()}catch(s){lt(e,t,s)}}var mf=!1;function n0(e,t){if(_l=da,e=Bd(),ml(e)){if("selectionStart"in e)var o={start:e.selectionStart,end:e.selectionEnd};else e:{o=(o=e.ownerDocument)&&o.defaultView||window;var s=o.getSelection&&o.getSelection();if(s&&s.rangeCount!==0){o=s.anchorNode;var u=s.anchorOffset,f=s.focusNode;s=s.focusOffset;try{o.nodeType,f.nodeType}catch{o=null;break e}var v=0,_=-1,T=-1,D=0,G=0,q=e,X=null;t:for(;;){for(var se;q!==o||u!==0&&q.nodeType!==3||(_=v+u),q!==f||s!==0&&q.nodeType!==3||(T=v+s),q.nodeType===3&&(v+=q.nodeValue.length),(se=q.firstChild)!==null;)X=q,q=se;for(;;){if(q===e)break t;if(X===o&&++D===u&&(_=v),X===f&&++G===s&&(T=v),(se=q.nextSibling)!==null)break;q=X,X=q.parentNode}q=se}o=_===-1||T===-1?null:{start:_,end:T}}else o=null}o=o||{start:0,end:0}}else o=null;for(Sl={focusedElem:e,selectionRange:o},da=!1,ue=t;ue!==null;)if(t=ue,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,ue=e;else for(;ue!==null;){t=ue;try{var pe=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(pe!==null){var fe=pe.memoizedProps,dt=pe.memoizedState,$=t.stateNode,A=$.getSnapshotBeforeUpdate(t.elementType===t.type?fe:bn(t.type,fe),dt);$.__reactInternalSnapshotBeforeUpdate=A}break;case 3:var L=t.stateNode.containerInfo;L.nodeType===1?L.textContent="":L.nodeType===9&&L.documentElement&&L.removeChild(L.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(i(163))}}catch(J){lt(t,t.return,J)}if(e=t.sibling,e!==null){e.return=t.return,ue=e;break}ue=t.return}return pe=mf,mf=!1,pe}function ki(e,t,o){var s=t.updateQueue;if(s=s!==null?s.lastEffect:null,s!==null){var u=s=s.next;do{if((u.tag&e)===e){var f=u.destroy;u.destroy=void 0,f!==void 0&&dc(t,o,f)}u=u.next}while(u!==s)}}function Ba(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var o=t=t.next;do{if((o.tag&e)===e){var s=o.create;o.destroy=s()}o=o.next}while(o!==t)}}function pc(e){var t=e.ref;if(t!==null){var o=e.stateNode;switch(e.tag){case 5:e=o;break;default:e=o}typeof t=="function"?t(e):t.current=e}}function gf(e){var t=e.alternate;t!==null&&(e.alternate=null,gf(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Rn],delete t[di],delete t[Tl],delete t[Lv],delete t[Dv])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function vf(e){return e.tag===5||e.tag===3||e.tag===4}function wf(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||vf(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function fc(e,t,o){var s=e.tag;if(s===5||s===6)e=e.stateNode,t?o.nodeType===8?o.parentNode.insertBefore(e,t):o.insertBefore(e,t):(o.nodeType===8?(t=o.parentNode,t.insertBefore(e,o)):(t=o,t.appendChild(e)),o=o._reactRootContainer,o!=null||t.onclick!==null||(t.onclick=_a));else if(s!==4&&(e=e.child,e!==null))for(fc(e,t,o),e=e.sibling;e!==null;)fc(e,t,o),e=e.sibling}function hc(e,t,o){var s=e.tag;if(s===5||s===6)e=e.stateNode,t?o.insertBefore(e,t):o.appendChild(e);else if(s!==4&&(e=e.child,e!==null))for(hc(e,t,o),e=e.sibling;e!==null;)hc(e,t,o),e=e.sibling}var At=null,kn=!1;function vr(e,t,o){for(o=o.child;o!==null;)xf(e,t,o),o=o.sibling}function xf(e,t,o){if(Pn&&typeof Pn.onCommitFiberUnmount=="function")try{Pn.onCommitFiberUnmount(ia,o)}catch{}switch(o.tag){case 5:Lt||_o(o,t);case 6:var s=At,u=kn;At=null,vr(e,t,o),At=s,kn=u,At!==null&&(kn?(e=At,o=o.stateNode,e.nodeType===8?e.parentNode.removeChild(o):e.removeChild(o)):At.removeChild(o.stateNode));break;case 18:At!==null&&(kn?(e=At,o=o.stateNode,e.nodeType===8?El(e.parentNode,o):e.nodeType===1&&El(e,o),ei(e)):El(At,o.stateNode));break;case 4:s=At,u=kn,At=o.stateNode.containerInfo,kn=!0,vr(e,t,o),At=s,kn=u;break;case 0:case 11:case 14:case 15:if(!Lt&&(s=o.updateQueue,s!==null&&(s=s.lastEffect,s!==null))){u=s=s.next;do{var f=u,v=f.destroy;f=f.tag,v!==void 0&&((f&2)!==0||(f&4)!==0)&&dc(o,t,v),u=u.next}while(u!==s)}vr(e,t,o);break;case 1:if(!Lt&&(_o(o,t),s=o.stateNode,typeof s.componentWillUnmount=="function"))try{s.props=o.memoizedProps,s.state=o.memoizedState,s.componentWillUnmount()}catch(_){lt(o,t,_)}vr(e,t,o);break;case 21:vr(e,t,o);break;case 22:o.mode&1?(Lt=(s=Lt)||o.memoizedState!==null,vr(e,t,o),Lt=s):vr(e,t,o);break;default:vr(e,t,o)}}function yf(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var o=e.stateNode;o===null&&(o=e.stateNode=new t0),t.forEach(function(s){var u=d0.bind(null,e,s);o.has(s)||(o.add(s),s.then(u,u))})}}function _n(e,t){var o=t.deletions;if(o!==null)for(var s=0;s<o.length;s++){var u=o[s];try{var f=e,v=t,_=v;e:for(;_!==null;){switch(_.tag){case 5:At=_.stateNode,kn=!1;break e;case 3:At=_.stateNode.containerInfo,kn=!0;break e;case 4:At=_.stateNode.containerInfo,kn=!0;break e}_=_.return}if(At===null)throw Error(i(160));xf(f,v,u),At=null,kn=!1;var T=u.alternate;T!==null&&(T.return=null),u.return=null}catch(D){lt(u,t,D)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)bf(t,e),t=t.sibling}function bf(e,t){var o=e.alternate,s=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(_n(t,e),$n(e),s&4){try{ki(3,e,e.return),Ba(3,e)}catch(fe){lt(e,e.return,fe)}try{ki(5,e,e.return)}catch(fe){lt(e,e.return,fe)}}break;case 1:_n(t,e),$n(e),s&512&&o!==null&&_o(o,o.return);break;case 5:if(_n(t,e),$n(e),s&512&&o!==null&&_o(o,o.return),e.flags&32){var u=e.stateNode;try{In(u,"")}catch(fe){lt(e,e.return,fe)}}if(s&4&&(u=e.stateNode,u!=null)){var f=e.memoizedProps,v=o!==null?o.memoizedProps:f,_=e.type,T=e.updateQueue;if(e.updateQueue=null,T!==null)try{_==="input"&&f.type==="radio"&&f.name!=null&&De(u,f),Ut(_,v);var D=Ut(_,f);for(v=0;v<T.length;v+=2){var G=T[v],q=T[v+1];G==="style"?It(u,q):G==="dangerouslySetInnerHTML"?ln(u,q):G==="children"?In(u,q):H(u,G,q,D)}switch(_){case"input":Fe(u,f);break;case"textarea":He(u,f);break;case"select":var X=u._wrapperState.wasMultiple;u._wrapperState.wasMultiple=!!f.multiple;var se=f.value;se!=null?Ot(u,!!f.multiple,se,!1):X!==!!f.multiple&&(f.defaultValue!=null?Ot(u,!!f.multiple,f.defaultValue,!0):Ot(u,!!f.multiple,f.multiple?[]:"",!1))}u[di]=f}catch(fe){lt(e,e.return,fe)}}break;case 6:if(_n(t,e),$n(e),s&4){if(e.stateNode===null)throw Error(i(162));u=e.stateNode,f=e.memoizedProps;try{u.nodeValue=f}catch(fe){lt(e,e.return,fe)}}break;case 3:if(_n(t,e),$n(e),s&4&&o!==null&&o.memoizedState.isDehydrated)try{ei(t.containerInfo)}catch(fe){lt(e,e.return,fe)}break;case 4:_n(t,e),$n(e);break;case 13:_n(t,e),$n(e),u=e.child,u.flags&8192&&(f=u.memoizedState!==null,u.stateNode.isHidden=f,!f||u.alternate!==null&&u.alternate.memoizedState!==null||(vc=ut())),s&4&&yf(e);break;case 22:if(G=o!==null&&o.memoizedState!==null,e.mode&1?(Lt=(D=Lt)||G,_n(t,e),Lt=D):_n(t,e),$n(e),s&8192){if(D=e.memoizedState!==null,(e.stateNode.isHidden=D)&&!G&&(e.mode&1)!==0)for(ue=e,G=e.child;G!==null;){for(q=ue=G;ue!==null;){switch(X=ue,se=X.child,X.tag){case 0:case 11:case 14:case 15:ki(4,X,X.return);break;case 1:_o(X,X.return);var pe=X.stateNode;if(typeof pe.componentWillUnmount=="function"){s=X,o=X.return;try{t=s,pe.props=t.memoizedProps,pe.state=t.memoizedState,pe.componentWillUnmount()}catch(fe){lt(s,o,fe)}}break;case 5:_o(X,X.return);break;case 22:if(X.memoizedState!==null){Sf(q);continue}}se!==null?(se.return=X,ue=se):Sf(q)}G=G.sibling}e:for(G=null,q=e;;){if(q.tag===5){if(G===null){G=q;try{u=q.stateNode,D?(f=u.style,typeof f.setProperty=="function"?f.setProperty("display","none","important"):f.display="none"):(_=q.stateNode,T=q.memoizedProps.style,v=T!=null&&T.hasOwnProperty("display")?T.display:null,_.style.display=Je("display",v))}catch(fe){lt(e,e.return,fe)}}}else if(q.tag===6){if(G===null)try{q.stateNode.nodeValue=D?"":q.memoizedProps}catch(fe){lt(e,e.return,fe)}}else if((q.tag!==22&&q.tag!==23||q.memoizedState===null||q===e)&&q.child!==null){q.child.return=q,q=q.child;continue}if(q===e)break e;for(;q.sibling===null;){if(q.return===null||q.return===e)break e;G===q&&(G=null),q=q.return}G===q&&(G=null),q.sibling.return=q.return,q=q.sibling}}break;case 19:_n(t,e),$n(e),s&4&&yf(e);break;case 21:break;default:_n(t,e),$n(e)}}function $n(e){var t=e.flags;if(t&2){try{e:{for(var o=e.return;o!==null;){if(vf(o)){var s=o;break e}o=o.return}throw Error(i(160))}switch(s.tag){case 5:var u=s.stateNode;s.flags&32&&(In(u,""),s.flags&=-33);var f=wf(e);hc(e,f,u);break;case 3:case 4:var v=s.stateNode.containerInfo,_=wf(e);fc(e,_,v);break;default:throw Error(i(161))}}catch(T){lt(e,e.return,T)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function r0(e,t,o){ue=e,kf(e)}function kf(e,t,o){for(var s=(e.mode&1)!==0;ue!==null;){var u=ue,f=u.child;if(u.tag===22&&s){var v=u.memoizedState!==null||Ya;if(!v){var _=u.alternate,T=_!==null&&_.memoizedState!==null||Lt;_=Ya;var D=Lt;if(Ya=v,(Lt=T)&&!D)for(ue=u;ue!==null;)v=ue,T=v.child,v.tag===22&&v.memoizedState!==null?Cf(u):T!==null?(T.return=v,ue=T):Cf(u);for(;f!==null;)ue=f,kf(f),f=f.sibling;ue=u,Ya=_,Lt=D}_f(e)}else(u.subtreeFlags&8772)!==0&&f!==null?(f.return=u,ue=f):_f(e)}}function _f(e){for(;ue!==null;){var t=ue;if((t.flags&8772)!==0){var o=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:Lt||Ba(5,t);break;case 1:var s=t.stateNode;if(t.flags&4&&!Lt)if(o===null)s.componentDidMount();else{var u=t.elementType===t.type?o.memoizedProps:bn(t.type,o.memoizedProps);s.componentDidUpdate(u,o.memoizedState,s.__reactInternalSnapshotBeforeUpdate)}var f=t.updateQueue;f!==null&&_p(t,f,s);break;case 3:var v=t.updateQueue;if(v!==null){if(o=null,t.child!==null)switch(t.child.tag){case 5:o=t.child.stateNode;break;case 1:o=t.child.stateNode}_p(t,v,o)}break;case 5:var _=t.stateNode;if(o===null&&t.flags&4){o=_;var T=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":T.autoFocus&&o.focus();break;case"img":T.src&&(o.src=T.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var D=t.alternate;if(D!==null){var G=D.memoizedState;if(G!==null){var q=G.dehydrated;q!==null&&ei(q)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(i(163))}Lt||t.flags&512&&pc(t)}catch(X){lt(t,t.return,X)}}if(t===e){ue=null;break}if(o=t.sibling,o!==null){o.return=t.return,ue=o;break}ue=t.return}}function Sf(e){for(;ue!==null;){var t=ue;if(t===e){ue=null;break}var o=t.sibling;if(o!==null){o.return=t.return,ue=o;break}ue=t.return}}function Cf(e){for(;ue!==null;){var t=ue;try{switch(t.tag){case 0:case 11:case 15:var o=t.return;try{Ba(4,t)}catch(T){lt(t,o,T)}break;case 1:var s=t.stateNode;if(typeof s.componentDidMount=="function"){var u=t.return;try{s.componentDidMount()}catch(T){lt(t,u,T)}}var f=t.return;try{pc(t)}catch(T){lt(t,f,T)}break;case 5:var v=t.return;try{pc(t)}catch(T){lt(t,v,T)}}}catch(T){lt(t,t.return,T)}if(t===e){ue=null;break}var _=t.sibling;if(_!==null){_.return=t.return,ue=_;break}ue=t.return}}var o0=Math.ceil,Xa=W.ReactCurrentDispatcher,mc=W.ReactCurrentOwner,fn=W.ReactCurrentBatchConfig,Le=0,Nt=null,vt=null,Pt=0,rn=0,So=pr(0),_t=0,_i=null,Dr=0,Ga=0,gc=0,Si=null,qt=null,vc=0,Co=1/0,Jn=null,Qa=!1,wc=null,wr=null,qa=!1,xr=null,Ka=0,Ci=0,xc=null,Ja=-1,Za=0;function Wt(){return(Le&6)!==0?ut():Ja!==-1?Ja:Ja=ut()}function yr(e){return(e.mode&1)===0?1:(Le&2)!==0&&Pt!==0?Pt&-Pt:Uv.transition!==null?(Za===0&&(Za=vd()),Za):(e=Ve,e!==0||(e=window.event,e=e===void 0?16:Nd(e.type)),e)}function Sn(e,t,o,s){if(50<Ci)throw Ci=0,xc=null,Error(i(185));Qo(e,o,s),((Le&2)===0||e!==Nt)&&(e===Nt&&((Le&2)===0&&(Ga|=o),_t===4&&br(e,Pt)),Kt(e,s),o===1&&Le===0&&(t.mode&1)===0&&(Co=ut()+500,Ea&&hr()))}function Kt(e,t){var o=e.callbackNode;Ug(e,t);var s=la(e,e===Nt?Pt:0);if(s===0)o!==null&&hd(o),e.callbackNode=null,e.callbackPriority=0;else if(t=s&-s,e.callbackPriority!==t){if(o!=null&&hd(o),t===1)e.tag===0?Ov(Ef.bind(null,e)):dp(Ef.bind(null,e)),Fv(function(){(Le&6)===0&&hr()}),o=null;else{switch(wd(s)){case 1:o=Js;break;case 4:o=md;break;case 16:o=oa;break;case 536870912:o=gd;break;default:o=oa}o=jf(o,Nf.bind(null,e))}e.callbackPriority=t,e.callbackNode=o}}function Nf(e,t){if(Ja=-1,Za=0,(Le&6)!==0)throw Error(i(327));var o=e.callbackNode;if(No()&&e.callbackNode!==o)return null;var s=la(e,e===Nt?Pt:0);if(s===0)return null;if((s&30)!==0||(s&e.expiredLanes)!==0||t)t=es(e,s);else{t=s;var u=Le;Le|=2;var f=Mf();(Nt!==e||Pt!==t)&&(Jn=null,Co=ut()+500,Ur(e,t));do try{s0();break}catch(_){Tf(e,_)}while(!0);$l(),Xa.current=f,Le=u,vt!==null?t=0:(Nt=null,Pt=0,t=_t)}if(t!==0){if(t===2&&(u=Zs(e),u!==0&&(s=u,t=yc(e,u))),t===1)throw o=_i,Ur(e,0),br(e,s),Kt(e,ut()),o;if(t===6)br(e,s);else{if(u=e.current.alternate,(s&30)===0&&!i0(u)&&(t=es(e,s),t===2&&(f=Zs(e),f!==0&&(s=f,t=yc(e,f))),t===1))throw o=_i,Ur(e,0),br(e,s),Kt(e,ut()),o;switch(e.finishedWork=u,e.finishedLanes=s,t){case 0:case 1:throw Error(i(345));case 2:Hr(e,qt,Jn);break;case 3:if(br(e,s),(s&130023424)===s&&(t=vc+500-ut(),10<t)){if(la(e,0)!==0)break;if(u=e.suspendedLanes,(u&s)!==s){Wt(),e.pingedLanes|=e.suspendedLanes&u;break}e.timeoutHandle=Nl(Hr.bind(null,e,qt,Jn),t);break}Hr(e,qt,Jn);break;case 4:if(br(e,s),(s&4194240)===s)break;for(t=e.eventTimes,u=-1;0<s;){var v=31-wn(s);f=1<<v,v=t[v],v>u&&(u=v),s&=~f}if(s=u,s=ut()-s,s=(120>s?120:480>s?480:1080>s?1080:1920>s?1920:3e3>s?3e3:4320>s?4320:1960*o0(s/1960))-s,10<s){e.timeoutHandle=Nl(Hr.bind(null,e,qt,Jn),s);break}Hr(e,qt,Jn);break;case 5:Hr(e,qt,Jn);break;default:throw Error(i(329))}}}return Kt(e,ut()),e.callbackNode===o?Nf.bind(null,e):null}function yc(e,t){var o=Si;return e.current.memoizedState.isDehydrated&&(Ur(e,t).flags|=256),e=es(e,t),e!==2&&(t=qt,qt=o,t!==null&&bc(t)),e}function bc(e){qt===null?qt=e:qt.push.apply(qt,e)}function i0(e){for(var t=e;;){if(t.flags&16384){var o=t.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var s=0;s<o.length;s++){var u=o[s],f=u.getSnapshot;u=u.value;try{if(!xn(f(),u))return!1}catch{return!1}}}if(o=t.child,t.subtreeFlags&16384&&o!==null)o.return=t,t=o;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function br(e,t){for(t&=~gc,t&=~Ga,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var o=31-wn(t),s=1<<o;e[o]=-1,t&=~s}}function Ef(e){if((Le&6)!==0)throw Error(i(327));No();var t=la(e,0);if((t&1)===0)return Kt(e,ut()),null;var o=es(e,t);if(e.tag!==0&&o===2){var s=Zs(e);s!==0&&(t=s,o=yc(e,s))}if(o===1)throw o=_i,Ur(e,0),br(e,t),Kt(e,ut()),o;if(o===6)throw Error(i(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Hr(e,qt,Jn),Kt(e,ut()),null}function kc(e,t){var o=Le;Le|=1;try{return e(t)}finally{Le=o,Le===0&&(Co=ut()+500,Ea&&hr())}}function Or(e){xr!==null&&xr.tag===0&&(Le&6)===0&&No();var t=Le;Le|=1;var o=fn.transition,s=Ve;try{if(fn.transition=null,Ve=1,e)return e()}finally{Ve=s,fn.transition=o,Le=t,(Le&6)===0&&hr()}}function _c(){rn=So.current,et(So)}function Ur(e,t){e.finishedWork=null,e.finishedLanes=0;var o=e.timeoutHandle;if(o!==-1&&(e.timeoutHandle=-1,jv(o)),vt!==null)for(o=vt.return;o!==null;){var s=o;switch(Al(s),s.tag){case 1:s=s.type.childContextTypes,s!=null&&Ca();break;case 3:bo(),et(Xt),et(jt),Yl();break;case 5:Wl(s);break;case 4:bo();break;case 13:et(at);break;case 19:et(at);break;case 10:Ll(s.type._context);break;case 22:case 23:_c()}o=o.return}if(Nt=e,vt=e=kr(e.current,null),Pt=rn=t,_t=0,_i=null,gc=Ga=Dr=0,qt=Si=null,Fr!==null){for(t=0;t<Fr.length;t++)if(o=Fr[t],s=o.interleaved,s!==null){o.interleaved=null;var u=s.next,f=o.pending;if(f!==null){var v=f.next;f.next=u,s.next=v}o.pending=s}Fr=null}return e}function Tf(e,t){do{var o=vt;try{if($l(),$a.current=Ua,La){for(var s=st.memoizedState;s!==null;){var u=s.queue;u!==null&&(u.pending=null),s=s.next}La=!1}if(Lr=0,Ct=kt=st=null,vi=!1,wi=0,mc.current=null,o===null||o.return===null){_t=1,_i=t,vt=null;break}e:{var f=e,v=o.return,_=o,T=t;if(t=Pt,_.flags|=32768,T!==null&&typeof T=="object"&&typeof T.then=="function"){var D=T,G=_,q=G.tag;if((G.mode&1)===0&&(q===0||q===11||q===15)){var X=G.alternate;X?(G.updateQueue=X.updateQueue,G.memoizedState=X.memoizedState,G.lanes=X.lanes):(G.updateQueue=null,G.memoizedState=null)}var se=Jp(v);if(se!==null){se.flags&=-257,Zp(se,v,_,f,t),se.mode&1&&Kp(f,D,t),t=se,T=D;var pe=t.updateQueue;if(pe===null){var fe=new Set;fe.add(T),t.updateQueue=fe}else pe.add(T);break e}else{if((t&1)===0){Kp(f,D,t),Sc();break e}T=Error(i(426))}}else if(nt&&_.mode&1){var dt=Jp(v);if(dt!==null){(dt.flags&65536)===0&&(dt.flags|=256),Zp(dt,v,_,f,t),jl(ko(T,_));break e}}f=T=ko(T,_),_t!==4&&(_t=2),Si===null?Si=[f]:Si.push(f),f=v;do{switch(f.tag){case 3:f.flags|=65536,t&=-t,f.lanes|=t;var $=Qp(f,T,t);kp(f,$);break e;case 1:_=T;var A=f.type,L=f.stateNode;if((f.flags&128)===0&&(typeof A.getDerivedStateFromError=="function"||L!==null&&typeof L.componentDidCatch=="function"&&(wr===null||!wr.has(L)))){f.flags|=65536,t&=-t,f.lanes|=t;var J=qp(f,_,t);kp(f,J);break e}}f=f.return}while(f!==null)}If(o)}catch(he){t=he,vt===o&&o!==null&&(vt=o=o.return);continue}break}while(!0)}function Mf(){var e=Xa.current;return Xa.current=Ua,e===null?Ua:e}function Sc(){(_t===0||_t===3||_t===2)&&(_t=4),Nt===null||(Dr&268435455)===0&&(Ga&268435455)===0||br(Nt,Pt)}function es(e,t){var o=Le;Le|=2;var s=Mf();(Nt!==e||Pt!==t)&&(Jn=null,Ur(e,t));do try{a0();break}catch(u){Tf(e,u)}while(!0);if($l(),Le=o,Xa.current=s,vt!==null)throw Error(i(261));return Nt=null,Pt=0,_t}function a0(){for(;vt!==null;)zf(vt)}function s0(){for(;vt!==null&&!Ag();)zf(vt)}function zf(e){var t=Rf(e.alternate,e,rn);e.memoizedProps=e.pendingProps,t===null?If(e):vt=t,mc.current=null}function If(e){var t=e;do{var o=t.alternate;if(e=t.return,(t.flags&32768)===0){if(o=Zv(o,t,rn),o!==null){vt=o;return}}else{if(o=e0(o,t),o!==null){o.flags&=32767,vt=o;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{_t=6,vt=null;return}}if(t=t.sibling,t!==null){vt=t;return}vt=t=e}while(t!==null);_t===0&&(_t=5)}function Hr(e,t,o){var s=Ve,u=fn.transition;try{fn.transition=null,Ve=1,l0(e,t,o,s)}finally{fn.transition=u,Ve=s}return null}function l0(e,t,o,s){do No();while(xr!==null);if((Le&6)!==0)throw Error(i(327));o=e.finishedWork;var u=e.finishedLanes;if(o===null)return null;if(e.finishedWork=null,e.finishedLanes=0,o===e.current)throw Error(i(177));e.callbackNode=null,e.callbackPriority=0;var f=o.lanes|o.childLanes;if(Hg(e,f),e===Nt&&(vt=Nt=null,Pt=0),(o.subtreeFlags&2064)===0&&(o.flags&2064)===0||qa||(qa=!0,jf(oa,function(){return No(),null})),f=(o.flags&15990)!==0,(o.subtreeFlags&15990)!==0||f){f=fn.transition,fn.transition=null;var v=Ve;Ve=1;var _=Le;Le|=4,mc.current=null,n0(e,o),bf(o,e),Tv(Sl),da=!!_l,Sl=_l=null,e.current=o,r0(o),Pg(),Le=_,Ve=v,fn.transition=f}else e.current=o;if(qa&&(qa=!1,xr=e,Ka=u),f=e.pendingLanes,f===0&&(wr=null),Fg(o.stateNode),Kt(e,ut()),t!==null)for(s=e.onRecoverableError,o=0;o<t.length;o++)u=t[o],s(u.value,{componentStack:u.stack,digest:u.digest});if(Qa)throw Qa=!1,e=wc,wc=null,e;return(Ka&1)!==0&&e.tag!==0&&No(),f=e.pendingLanes,(f&1)!==0?e===xc?Ci++:(Ci=0,xc=e):Ci=0,hr(),null}function No(){if(xr!==null){var e=wd(Ka),t=fn.transition,o=Ve;try{if(fn.transition=null,Ve=16>e?16:e,xr===null)var s=!1;else{if(e=xr,xr=null,Ka=0,(Le&6)!==0)throw Error(i(331));var u=Le;for(Le|=4,ue=e.current;ue!==null;){var f=ue,v=f.child;if((ue.flags&16)!==0){var _=f.deletions;if(_!==null){for(var T=0;T<_.length;T++){var D=_[T];for(ue=D;ue!==null;){var G=ue;switch(G.tag){case 0:case 11:case 15:ki(8,G,f)}var q=G.child;if(q!==null)q.return=G,ue=q;else for(;ue!==null;){G=ue;var X=G.sibling,se=G.return;if(gf(G),G===D){ue=null;break}if(X!==null){X.return=se,ue=X;break}ue=se}}}var pe=f.alternate;if(pe!==null){var fe=pe.child;if(fe!==null){pe.child=null;do{var dt=fe.sibling;fe.sibling=null,fe=dt}while(fe!==null)}}ue=f}}if((f.subtreeFlags&2064)!==0&&v!==null)v.return=f,ue=v;else e:for(;ue!==null;){if(f=ue,(f.flags&2048)!==0)switch(f.tag){case 0:case 11:case 15:ki(9,f,f.return)}var $=f.sibling;if($!==null){$.return=f.return,ue=$;break e}ue=f.return}}var A=e.current;for(ue=A;ue!==null;){v=ue;var L=v.child;if((v.subtreeFlags&2064)!==0&&L!==null)L.return=v,ue=L;else e:for(v=A;ue!==null;){if(_=ue,(_.flags&2048)!==0)try{switch(_.tag){case 0:case 11:case 15:Ba(9,_)}}catch(he){lt(_,_.return,he)}if(_===v){ue=null;break e}var J=_.sibling;if(J!==null){J.return=_.return,ue=J;break e}ue=_.return}}if(Le=u,hr(),Pn&&typeof Pn.onPostCommitFiberRoot=="function")try{Pn.onPostCommitFiberRoot(ia,e)}catch{}s=!0}return s}finally{Ve=o,fn.transition=t}}return!1}function Af(e,t,o){t=ko(o,t),t=Qp(e,t,1),e=gr(e,t,1),t=Wt(),e!==null&&(Qo(e,1,t),Kt(e,t))}function lt(e,t,o){if(e.tag===3)Af(e,e,o);else for(;t!==null;){if(t.tag===3){Af(t,e,o);break}else if(t.tag===1){var s=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(wr===null||!wr.has(s))){e=ko(o,e),e=qp(t,e,1),t=gr(t,e,1),e=Wt(),t!==null&&(Qo(t,1,e),Kt(t,e));break}}t=t.return}}function c0(e,t,o){var s=e.pingCache;s!==null&&s.delete(t),t=Wt(),e.pingedLanes|=e.suspendedLanes&o,Nt===e&&(Pt&o)===o&&(_t===4||_t===3&&(Pt&130023424)===Pt&&500>ut()-vc?Ur(e,0):gc|=o),Kt(e,t)}function Pf(e,t){t===0&&((e.mode&1)===0?t=1:(t=sa,sa<<=1,(sa&130023424)===0&&(sa=4194304)));var o=Wt();e=Qn(e,t),e!==null&&(Qo(e,t,o),Kt(e,o))}function u0(e){var t=e.memoizedState,o=0;t!==null&&(o=t.retryLane),Pf(e,o)}function d0(e,t){var o=0;switch(e.tag){case 13:var s=e.stateNode,u=e.memoizedState;u!==null&&(o=u.retryLane);break;case 19:s=e.stateNode;break;default:throw Error(i(314))}s!==null&&s.delete(t),Pf(e,o)}var Rf;Rf=function(e,t,o){if(e!==null)if(e.memoizedProps!==t.pendingProps||Xt.current)Qt=!0;else{if((e.lanes&o)===0&&(t.flags&128)===0)return Qt=!1,Jv(e,t,o);Qt=(e.flags&131072)!==0}else Qt=!1,nt&&(t.flags&1048576)!==0&&pp(t,Ma,t.index);switch(t.lanes=0,t.tag){case 2:var s=t.type;Va(e,t),e=t.pendingProps;var u=ho(t,jt.current);yo(t,o),u=Gl(null,t,s,e,u,o);var f=Ql();return t.flags|=1,typeof u=="object"&&u!==null&&typeof u.render=="function"&&u.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Gt(s)?(f=!0,Na(t)):f=!1,t.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,Ul(t),u.updater=Ha,t.stateNode=u,u._reactInternals=t,tc(t,s,e,o),t=ic(null,t,s,!0,f,o)):(t.tag=0,nt&&f&&Il(t),Ht(null,t,u,o),t=t.child),t;case 16:s=t.elementType;e:{switch(Va(e,t),e=t.pendingProps,u=s._init,s=u(s._payload),t.type=s,u=t.tag=f0(s),e=bn(s,e),u){case 0:t=oc(null,t,s,e,o);break e;case 1:t=af(null,t,s,e,o);break e;case 11:t=ef(null,t,s,e,o);break e;case 14:t=tf(null,t,s,bn(s.type,e),o);break e}throw Error(i(306,s,""))}return t;case 0:return s=t.type,u=t.pendingProps,u=t.elementType===s?u:bn(s,u),oc(e,t,s,u,o);case 1:return s=t.type,u=t.pendingProps,u=t.elementType===s?u:bn(s,u),af(e,t,s,u,o);case 3:e:{if(sf(t),e===null)throw Error(i(387));s=t.pendingProps,f=t.memoizedState,u=f.element,bp(e,t),ja(t,s,null,o);var v=t.memoizedState;if(s=v.element,f.isDehydrated)if(f={element:s,isDehydrated:!1,cache:v.cache,pendingSuspenseBoundaries:v.pendingSuspenseBoundaries,transitions:v.transitions},t.updateQueue.baseState=f,t.memoizedState=f,t.flags&256){u=ko(Error(i(423)),t),t=lf(e,t,s,o,u);break e}else if(s!==u){u=ko(Error(i(424)),t),t=lf(e,t,s,o,u);break e}else for(nn=dr(t.stateNode.containerInfo.firstChild),tn=t,nt=!0,yn=null,o=xp(t,null,s,o),t.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(vo(),s===u){t=Kn(e,t,o);break e}Ht(e,t,s,o)}t=t.child}return t;case 5:return Sp(t),e===null&&Rl(t),s=t.type,u=t.pendingProps,f=e!==null?e.memoizedProps:null,v=u.children,Cl(s,u)?v=null:f!==null&&Cl(s,f)&&(t.flags|=32),of(e,t),Ht(e,t,v,o),t.child;case 6:return e===null&&Rl(t),null;case 13:return cf(e,t,o);case 4:return Hl(t,t.stateNode.containerInfo),s=t.pendingProps,e===null?t.child=wo(t,null,s,o):Ht(e,t,s,o),t.child;case 11:return s=t.type,u=t.pendingProps,u=t.elementType===s?u:bn(s,u),ef(e,t,s,u,o);case 7:return Ht(e,t,t.pendingProps,o),t.child;case 8:return Ht(e,t,t.pendingProps.children,o),t.child;case 12:return Ht(e,t,t.pendingProps.children,o),t.child;case 10:e:{if(s=t.type._context,u=t.pendingProps,f=t.memoizedProps,v=u.value,qe(Aa,s._currentValue),s._currentValue=v,f!==null)if(xn(f.value,v)){if(f.children===u.children&&!Xt.current){t=Kn(e,t,o);break e}}else for(f=t.child,f!==null&&(f.return=t);f!==null;){var _=f.dependencies;if(_!==null){v=f.child;for(var T=_.firstContext;T!==null;){if(T.context===s){if(f.tag===1){T=qn(-1,o&-o),T.tag=2;var D=f.updateQueue;if(D!==null){D=D.shared;var G=D.pending;G===null?T.next=T:(T.next=G.next,G.next=T),D.pending=T}}f.lanes|=o,T=f.alternate,T!==null&&(T.lanes|=o),Dl(f.return,o,t),_.lanes|=o;break}T=T.next}}else if(f.tag===10)v=f.type===t.type?null:f.child;else if(f.tag===18){if(v=f.return,v===null)throw Error(i(341));v.lanes|=o,_=v.alternate,_!==null&&(_.lanes|=o),Dl(v,o,t),v=f.sibling}else v=f.child;if(v!==null)v.return=f;else for(v=f;v!==null;){if(v===t){v=null;break}if(f=v.sibling,f!==null){f.return=v.return,v=f;break}v=v.return}f=v}Ht(e,t,u.children,o),t=t.child}return t;case 9:return u=t.type,s=t.pendingProps.children,yo(t,o),u=dn(u),s=s(u),t.flags|=1,Ht(e,t,s,o),t.child;case 14:return s=t.type,u=bn(s,t.pendingProps),u=bn(s.type,u),tf(e,t,s,u,o);case 15:return nf(e,t,t.type,t.pendingProps,o);case 17:return s=t.type,u=t.pendingProps,u=t.elementType===s?u:bn(s,u),Va(e,t),t.tag=1,Gt(s)?(e=!0,Na(t)):e=!1,yo(t,o),Xp(t,s,u),tc(t,s,u,o),ic(null,t,s,!0,e,o);case 19:return df(e,t,o);case 22:return rf(e,t,o)}throw Error(i(156,t.tag))};function jf(e,t){return fd(e,t)}function p0(e,t,o,s){this.tag=e,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function hn(e,t,o,s){return new p0(e,t,o,s)}function Cc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function f0(e){if(typeof e=="function")return Cc(e)?1:0;if(e!=null){if(e=e.$$typeof,e===re)return 11;if(e===ke)return 14}return 2}function kr(e,t){var o=e.alternate;return o===null?(o=hn(e.tag,t,e.key,e.mode),o.elementType=e.elementType,o.type=e.type,o.stateNode=e.stateNode,o.alternate=e,e.alternate=o):(o.pendingProps=t,o.type=e.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=e.flags&14680064,o.childLanes=e.childLanes,o.lanes=e.lanes,o.child=e.child,o.memoizedProps=e.memoizedProps,o.memoizedState=e.memoizedState,o.updateQueue=e.updateQueue,t=e.dependencies,o.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},o.sibling=e.sibling,o.index=e.index,o.ref=e.ref,o}function ts(e,t,o,s,u,f){var v=2;if(s=e,typeof e=="function")Cc(e)&&(v=1);else if(typeof e=="string")v=5;else e:switch(e){case ee:return Wr(o.children,u,f,t);case ge:v=8,u|=8;break;case ae:return e=hn(12,o,t,u|2),e.elementType=ae,e.lanes=f,e;case Te:return e=hn(13,o,t,u),e.elementType=Te,e.lanes=f,e;case Ce:return e=hn(19,o,t,u),e.elementType=Ce,e.lanes=f,e;case F:return ns(o,u,f,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ve:v=10;break e;case me:v=9;break e;case re:v=11;break e;case ke:v=14;break e;case C:v=16,s=null;break e}throw Error(i(130,e==null?e:typeof e,""))}return t=hn(v,o,t,u),t.elementType=e,t.type=s,t.lanes=f,t}function Wr(e,t,o,s){return e=hn(7,e,s,t),e.lanes=o,e}function ns(e,t,o,s){return e=hn(22,e,s,t),e.elementType=F,e.lanes=o,e.stateNode={isHidden:!1},e}function Nc(e,t,o){return e=hn(6,e,null,t),e.lanes=o,e}function Ec(e,t,o){return t=hn(4,e.children!==null?e.children:[],e.key,t),t.lanes=o,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function h0(e,t,o,s,u){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=el(0),this.expirationTimes=el(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=el(0),this.identifierPrefix=s,this.onRecoverableError=u,this.mutableSourceEagerHydrationData=null}function Tc(e,t,o,s,u,f,v,_,T){return e=new h0(e,t,o,_,T),t===1?(t=1,f===!0&&(t|=8)):t=0,f=hn(3,null,null,t),e.current=f,f.stateNode=e,f.memoizedState={element:s,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ul(f),e}function m0(e,t,o){var s=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:K,key:s==null?null:""+s,children:e,containerInfo:t,implementation:o}}function Ff(e){if(!e)return fr;e=e._reactInternals;e:{if(Ir(e)!==e||e.tag!==1)throw Error(i(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Gt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(i(171))}if(e.tag===1){var o=e.type;if(Gt(o))return cp(e,o,t)}return t}function $f(e,t,o,s,u,f,v,_,T){return e=Tc(o,s,!0,e,u,f,v,_,T),e.context=Ff(null),o=e.current,s=Wt(),u=yr(o),f=qn(s,u),f.callback=t??null,gr(o,f,u),e.current.lanes=u,Qo(e,u,s),Kt(e,s),e}function rs(e,t,o,s){var u=t.current,f=Wt(),v=yr(u);return o=Ff(o),t.context===null?t.context=o:t.pendingContext=o,t=qn(f,v),t.payload={element:e},s=s===void 0?null:s,s!==null&&(t.callback=s),e=gr(u,t,v),e!==null&&(Sn(e,u,v,f),Ra(e,u,v)),v}function os(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Lf(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var o=e.retryLane;e.retryLane=o!==0&&o<t?o:t}}function Mc(e,t){Lf(e,t),(e=e.alternate)&&Lf(e,t)}function g0(){return null}var Df=typeof reportError=="function"?reportError:function(e){console.error(e)};function zc(e){this._internalRoot=e}is.prototype.render=zc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(i(409));rs(e,t,null,null)},is.prototype.unmount=zc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Or(function(){rs(null,e,null,null)}),t[Yn]=null}};function is(e){this._internalRoot=e}is.prototype.unstable_scheduleHydration=function(e){if(e){var t=bd();e={blockedOn:null,target:e,priority:t};for(var o=0;o<lr.length&&t!==0&&t<lr[o].priority;o++);lr.splice(o,0,e),o===0&&Sd(e)}};function Ic(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function as(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Of(){}function v0(e,t,o,s,u){if(u){if(typeof s=="function"){var f=s;s=function(){var D=os(v);f.call(D)}}var v=$f(t,s,e,0,null,!1,!1,"",Of);return e._reactRootContainer=v,e[Yn]=v.current,ci(e.nodeType===8?e.parentNode:e),Or(),v}for(;u=e.lastChild;)e.removeChild(u);if(typeof s=="function"){var _=s;s=function(){var D=os(T);_.call(D)}}var T=Tc(e,0,!1,null,null,!1,!1,"",Of);return e._reactRootContainer=T,e[Yn]=T.current,ci(e.nodeType===8?e.parentNode:e),Or(function(){rs(t,T,o,s)}),T}function ss(e,t,o,s,u){var f=o._reactRootContainer;if(f){var v=f;if(typeof u=="function"){var _=u;u=function(){var T=os(v);_.call(T)}}rs(t,v,e,u)}else v=v0(o,t,e,u,s);return os(v)}xd=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var o=Go(t.pendingLanes);o!==0&&(tl(t,o|1),Kt(t,ut()),(Le&6)===0&&(Co=ut()+500,hr()))}break;case 13:Or(function(){var s=Qn(e,1);if(s!==null){var u=Wt();Sn(s,e,1,u)}}),Mc(e,1)}},nl=function(e){if(e.tag===13){var t=Qn(e,134217728);if(t!==null){var o=Wt();Sn(t,e,134217728,o)}Mc(e,134217728)}},yd=function(e){if(e.tag===13){var t=yr(e),o=Qn(e,t);if(o!==null){var s=Wt();Sn(o,e,t,s)}Mc(e,t)}},bd=function(){return Ve},kd=function(e,t){var o=Ve;try{return Ve=e,t()}finally{Ve=o}},Wn=function(e,t,o){switch(t){case"input":if(Fe(e,o),t=o.name,o.type==="radio"&&t!=null){for(o=e;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<o.length;t++){var s=o[t];if(s!==e&&s.form===e.form){var u=Sa(s);if(!u)throw Error(i(90));xe(s),Fe(s,u)}}}break;case"textarea":He(e,o);break;case"select":t=o.value,t!=null&&Ot(e,!!o.multiple,t,!1)}},ta=kc,sd=Or;var w0={usingClientEntryPoint:!1,Events:[pi,po,Sa,Vo,ea,kc]},Ni={findFiberByHostInstance:Ar,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},x0={bundleType:Ni.bundleType,version:Ni.version,rendererPackageName:Ni.rendererPackageName,rendererConfig:Ni.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:W.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=dd(e),e===null?null:e.stateNode},findFiberByHostInstance:Ni.findFiberByHostInstance||g0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ls=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ls.isDisabled&&ls.supportsFiber)try{ia=ls.inject(x0),Pn=ls}catch{}}return Jt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=w0,Jt.createPortal=function(e,t){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ic(t))throw Error(i(200));return m0(e,t,null,o)},Jt.createRoot=function(e,t){if(!Ic(e))throw Error(i(299));var o=!1,s="",u=Df;return t!=null&&(t.unstable_strictMode===!0&&(o=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(u=t.onRecoverableError)),t=Tc(e,1,!1,null,null,o,!1,s,u),e[Yn]=t.current,ci(e.nodeType===8?e.parentNode:e),new zc(t)},Jt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(i(188)):(e=Object.keys(e).join(","),Error(i(268,e)));return e=dd(t),e=e===null?null:e.stateNode,e},Jt.flushSync=function(e){return Or(e)},Jt.hydrate=function(e,t,o){if(!as(t))throw Error(i(200));return ss(null,e,t,!0,o)},Jt.hydrateRoot=function(e,t,o){if(!Ic(e))throw Error(i(405));var s=o!=null&&o.hydratedSources||null,u=!1,f="",v=Df;if(o!=null&&(o.unstable_strictMode===!0&&(u=!0),o.identifierPrefix!==void 0&&(f=o.identifierPrefix),o.onRecoverableError!==void 0&&(v=o.onRecoverableError)),t=$f(t,null,e,1,o??null,u,!1,f,v),e[Yn]=t.current,ci(e),s)for(e=0;e<s.length;e++)o=s[e],u=o._getVersion,u=u(o._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[o,u]:t.mutableSourceEagerHydrationData.push(o,u);return new is(t)},Jt.render=function(e,t,o){if(!as(t))throw Error(i(200));return ss(null,e,t,!1,o)},Jt.unmountComponentAtNode=function(e){if(!as(e))throw Error(i(40));return e._reactRootContainer?(Or(function(){ss(null,null,e,!1,function(){e._reactRootContainer=null,e[Yn]=null})}),!0):!1},Jt.unstable_batchedUpdates=kc,Jt.unstable_renderSubtreeIntoContainer=function(e,t,o,s){if(!as(o))throw Error(i(200));if(e==null||e._reactInternals===void 0)throw Error(i(38));return ss(e,t,o,!1,s)},Jt.version="18.3.1-next-f1338f8080-20240426",Jt}var tm;function $b(){if(tm)return nu.exports;tm=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(r){console.error(r)}}return n(),nu.exports=Fb(),nu.exports}var nm;function Lb(){if(nm)return ws;nm=1;var n=$b();return ws.createRoot=n.createRoot,ws.hydrateRoot=n.hydrateRoot,ws}var Db=Lb();/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ob=n=>n.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Ub=n=>n.replace(/^([A-Z])|[\s-_]+(\w)/g,(r,i,a)=>a?a.toUpperCase():i.toLowerCase()),rm=n=>{const r=Ub(n);return r.charAt(0).toUpperCase()+r.slice(1)},Ng=(...n)=>n.filter((r,i,a)=>!!r&&r.trim()!==""&&a.indexOf(r)===i).join(" ").trim();/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Hb={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wb=Pe.forwardRef(({color:n="currentColor",size:r=24,strokeWidth:i=2,absoluteStrokeWidth:a,className:l="",children:c,iconNode:p,...h},m)=>Pe.createElement("svg",{ref:m,...Hb,width:r,height:r,stroke:n,strokeWidth:a?Number(i)*24/Number(r):i,className:Ng("lucide",l),...h},[...p.map(([g,x])=>Pe.createElement(g,x)),...Array.isArray(c)?c:[c]]));/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zn=(n,r)=>{const i=Pe.forwardRef(({className:a,...l},c)=>Pe.createElement(Wb,{ref:c,iconNode:r,className:Ng(`lucide-${Ob(rm(n))}`,`lucide-${n}`,a),...l}));return i.displayName=rm(n),i};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vb=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m14.31 8 5.74 9.94",key:"1y6ab4"}],["path",{d:"M9.69 8h11.48",key:"1wxppr"}],["path",{d:"m7.38 12 5.74-9.94",key:"1grp0k"}],["path",{d:"M9.69 16 3.95 6.06",key:"libnyf"}],["path",{d:"M14.31 16H2.83",key:"x5fava"}],["path",{d:"m16.62 12-5.74 9.94",key:"1vwawt"}]],Yb=zn("aperture",Vb);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bb=[["path",{d:"M21 12c.552 0 1.005-.449.95-.998a10 10 0 0 0-8.953-8.951c-.55-.055-.998.398-.998.95v8a1 1 0 0 0 1 1z",key:"pzmjnu"}],["path",{d:"M21.21 15.89A10 10 0 1 1 8 2.83",key:"k2fpak"}]],Xb=zn("chart-pie",Bb);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gb=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],Qb=zn("circle",Gb);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qb=[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]],om=zn("download",qb);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kb=[["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}],["path",{d:"M12 16.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 1 1 12 7.5a4.5 4.5 0 1 1 4.5 4.5 4.5 4.5 0 1 1-4.5 4.5",key:"14wa3c"}],["path",{d:"M12 7.5V9",key:"1oy5b0"}],["path",{d:"M7.5 12H9",key:"eltsq1"}],["path",{d:"M16.5 12H15",key:"vk5kw4"}],["path",{d:"M12 16.5V15",key:"k7eayi"}],["path",{d:"m8 8 1.88 1.88",key:"nxy4qf"}],["path",{d:"M14.12 9.88 16 8",key:"1lst6k"}],["path",{d:"m8 16 1.88-1.88",key:"h2eex1"}],["path",{d:"M14.12 14.12 16 16",key:"uqkrx3"}]],Jb=zn("flower",Kb);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zb=[["path",{d:"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z",key:"yt0hxn"}]],e2=zn("hexagon",Zb);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t2=[["path",{d:"M12 2v20",key:"t6zp3m"}],["path",{d:"m15 19-3 3-3-3",key:"11eu04"}],["path",{d:"m19 9 3 3-3 3",key:"1mg7y2"}],["path",{d:"M2 12h20",key:"9i4pu4"}],["path",{d:"m5 9-3 3 3 3",key:"j64kie"}],["path",{d:"m9 5 3-3 3 3",key:"l8vdw6"}]],im=zn("move",t2);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n2=[["path",{d:"M20 7h-9",key:"3s1dr2"}],["path",{d:"M14 17H5",key:"gfn3mx"}],["circle",{cx:"17",cy:"17",r:"3",key:"18b49y"}],["circle",{cx:"7",cy:"7",r:"3",key:"dfmy0x"}]],r2=zn("settings-2",n2);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o2=[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]],i2=zn("sparkles",o2);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a2=[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]],s2=zn("trash-2",a2);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l2=[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]],am=zn("upload",l2);function Tt(n){const r=Math.sin(n)*1e4;return r-Math.floor(r)}const Nr={RADIAL_CRACKS:24,CIRCULAR_RINGS:4,MAX_SCALE_VARIATION:.35,MAX_OFFSET_MAGNITUDE:.3,BASE_SCALE_REDUCTION:.15,CRACK_OPACITY:.3,RING_CRACK_OPACITY:.25,CRACK_WIDTH:.15,RING_CRACK_WIDTH:.12},iu=["bg-red-500","bg-blue-500","bg-green-500","bg-yellow-500","bg-purple-500","bg-pink-500","bg-orange-500","bg-teal-500"],c2=Pe.memo(function({imageUrl:r,outerRadius:i,position:a,shatterIntensity:l,fragmentDistortion:c}){const{RADIAL_CRACKS:p,CIRCULAR_RINGS:h}=Nr,m=Pe.useMemo(()=>{const y=[];for(let b=0;b<p;b++){const N=b*100,E=Tt(N)*360;y.push(E)}return y.sort((b,N)=>b-N)},[p]),g=Pe.useMemo(()=>{const y=[0];for(let b=1;b<=h;b++){const N=b*200,E=i*b/h,I=(Tt(N)-.5)*i*.08;y.push(E+I)}return y.push(i),y},[i,h]),x=Pe.useMemo(()=>{const y=[];for(let b=0;b<m.length;b++){const N=m[b],E=m[(b+1)%m.length];let I=E-N;I<0&&(I+=360);for(let k=0;k<g.length-1;k++){const z=g[k],H=g[k+1],W=b*1e3+k*100,V=(Tt(W+1)-.5)*3*l;let K=0;k<g.length-2&&(K=(Tt(W+2)-.5)*i*l*.2);const ee=(N+V-90)*Math.PI/180,ge=(E+V-90)*Math.PI/180,ae=Math.max(0,z+K),ve=k===g.length-2?H:H+K,me=50+ve*Math.cos(ee),re=50+ve*Math.sin(ee),Te=50+ve*Math.cos(ge),Ce=50+ve*Math.sin(ge),ke=I>180?1:0;let C;if(ae===0)C=["M 50 50",`L ${me} ${re}`,`A ${ve} ${ve} 0 ${ke} 1 ${Te} ${Ce}`,"Z"].join(" ");else{const le=50+ae*Math.cos(ee),Se=50+ae*Math.sin(ee),te=50+ae*Math.cos(ge),xe=50+ae*Math.sin(ge);C=[`M ${me} ${re}`,`A ${ve} ${ve} 0 ${ke} 1 ${Te} ${Ce}`,`L ${te} ${xe}`,`A ${ae} ${ae} 0 ${ke} 0 ${le} ${Se}`,"Z"].join(" ")}const F=b*1e4+k*100,M=c*Nr.MAX_SCALE_VARIATION,O=1-c*Nr.BASE_SCALE_REDUCTION+Tt(F+3)*M,S=c*Nr.MAX_OFFSET_MAGNITUDE,R=(Tt(F+4)-.5)*S,B=(Tt(F+5)-.5)*S,Y=100*(a.scale*O),Z=(100-Y)/2+(a.x+R)*50,oe=(100-Y)/2+(a.y+B)*50,ie=`shard-${b}-${k}`;y.push(j.jsxs("g",{children:[j.jsx("defs",{children:j.jsx("mask",{id:ie,children:j.jsx("path",{d:C,fill:"white"})})}),j.jsx("image",{href:r,x:Z,y:oe,width:Y,height:Y,preserveAspectRatio:"xMidYMid slice",mask:`url(#${ie})`})]},`fragment-${b}-${k}`))}}return y},[m,g,i,l,c,a,r]),w=Pe.useMemo(()=>{const y=[];for(let b=0;b<p;b++){const N=b*100,I=(Tt(N)*360-90)*Math.PI/180,k=50,z=50,H=50+i*Math.cos(I),W=50+i*Math.sin(I);y.push(j.jsx("line",{x1:k,y1:z,x2:H,y2:W,stroke:`rgba(0, 0, 0, ${Nr.CRACK_OPACITY})`,strokeWidth:Nr.CRACK_WIDTH,strokeLinecap:"round"},`radial-crack-${b}`))}for(let b=1;b<=3;b++){const N=b*200,E=i*b/4,I=(Tt(N)-.5)*i*.08,k=E+I;y.push(j.jsx("circle",{cx:50,cy:50,r:k,fill:"none",stroke:`rgba(0, 0, 0, ${Nr.RING_CRACK_OPACITY})`,strokeWidth:Nr.RING_CRACK_WIDTH},`ring-crack-${b}`))}return y},[i,p]);return j.jsxs(j.Fragment,{children:[x,w]})}),u2=Pe.memo(function({imageUrl:r,segmentIndex:i,outerRadius:a,innerRadius:l,totalSegments:c,position:p={x:0,y:0,scale:1},shapeType:h="ring",petalWidth:m=.6,petalLength:g=.8,gapWidth:x=0,shatterIntensity:w=.15,fragmentDistortion:y=.05}){const b=c===1,N=h==="polygon"&&c<=2;if(b&&h==="shattered")return j.jsx(c2,{imageUrl:r,outerRadius:a,position:p,shatterIntensity:w,fragmentDistortion:y});let E=x;if(h==="shattered"&&!b){const S=i*777,R=(Tt(S)-.5)*2;E=x+R}const I=360/c,k=i*I-90+E/2,z=(i+1)*I-90-E/2,H=k*Math.PI/180,W=z*Math.PI/180,V=(k+z)/2,K=V*Math.PI/180,ee=50+a*Math.cos(H),ge=50+a*Math.sin(H),ae=50+a*Math.cos(W),ve=50+a*Math.sin(W),me=50+l*Math.cos(H),re=50+l*Math.sin(H),Te=50+l*Math.cos(W),Ce=50+l*Math.sin(W);let ke;if(b||N)if(h==="ring"||h==="pie")l>0?ke=[`M ${50-a} 50`,`A ${a} ${a} 0 0 1 ${50+a} 50`,`A ${a} ${a} 0 0 1 ${50-a} 50`,"Z",`M ${50-l} 50`,`A ${l} ${l} 0 0 0 ${50+l} 50`,`A ${l} ${l} 0 0 0 ${50-l} 50`,"Z"].join(" "):ke=[`M ${50-a} 50`,`A ${a} ${a} 0 0 1 ${50+a} 50`,`A ${a} ${a} 0 0 1 ${50-a} 50`,"Z"].join(" ");else if(h==="aperture"){const R=l*1.5,B=[],Q=[];for(let Y=0;Y<8;Y++){const Z=(Y*360/8-90)*Math.PI/180,oe=((Y+1)*360/8-90)*Math.PI/180,ie=50+R*Math.cos(Z),le=50+R*Math.sin(Z),Se=50+a*Math.cos(Z),te=50+a*Math.sin(Z),xe=50+a*Math.cos(oe),ne=50+a*Math.sin(oe);Y===0&&Q.push(`M ${Se} ${te}`),Q.push(`A ${a} ${a} 0 0 1 ${xe} ${ne}`),Y===0?B.push(`M ${ie} ${le}`):B.push(`L ${ie} ${le}`)}ke=[...Q,"Z",...B,"Z"].join(" ")}else if(h==="petal"){const R=[];for(let B=0;B<6;B++){const Q=B*360/6-90,Y=Q*Math.PI/180,Z=a*g,oe=360/6*m/2,ie=Q-oe,le=Q+oe,Se=ie*Math.PI/180,te=le*Math.PI/180,xe=50+Z*Math.cos(Y),ne=50+Z*Math.sin(Y),je=a*.1,Ue=50+je*Math.cos(Se),De=50+je*Math.sin(Se),Fe=50+je*Math.cos(te),mt=50+je*Math.sin(te),Be=Z*.65,gt=50+Be*Math.cos(Se),Ot=50+Be*Math.sin(Se),Ye=50+Be*Math.cos(te),Ge=50+Be*Math.sin(te);R.push([`M ${Ue} ${De}`,`Q ${gt} ${Ot} ${xe} ${ne}`,`Q ${Ye} ${Ge} ${Fe} ${mt}`,"Z"].join(" "))}ke=R.join(" ")}else if(h==="polygon"){const R=[],B=[];for(let Q=0;Q<6;Q++){const Y=(Q*360/6-90)*Math.PI/180,Z=50+a*Math.cos(Y),oe=50+a*Math.sin(Y),ie=50+l*Math.cos(Y),le=50+l*Math.sin(Y);Q===0?(R.push(`M ${Z} ${oe}`),l>0&&B.push(`M ${ie} ${le}`)):(R.push(`L ${Z} ${oe}`),l>0&&B.push(`L ${ie} ${le}`))}ke=[...R,"Z",...B,l>0?"Z":""].filter(Boolean).join(" ")}else ke=[`M ${50+a} 50`,`A ${a} ${a} 0 1 1 ${50+a} 49.99`].join(" ");else if(h==="aperture"){const S=l*1.5,R=k+I/2,B=z+I/2,Q=R*Math.PI/180,Y=B*Math.PI/180,Z=50+S*Math.cos(Q),oe=50+S*Math.sin(Q),ie=50+S*Math.cos(Y),le=50+S*Math.sin(Y);ke=[`M ${ee} ${ge}`,`A ${a} ${a} 0 0 1 ${ae} ${ve}`,`L ${ie} ${le}`,`L ${Z} ${oe}`,"Z"].join(" ")}else if(h==="petal"){const S=a*g,R=I*m/2,B=V-R,Q=V+R,Y=B*Math.PI/180,Z=Q*Math.PI/180,oe=50+S*Math.cos(K),ie=50+S*Math.sin(K),le=a*.1,Se=50+le*Math.cos(Y),te=50+le*Math.sin(Y),xe=50+le*Math.cos(Z),ne=50+le*Math.sin(Z),je=S*.65,Ue=50+je*Math.cos(Y),De=50+je*Math.sin(Y),Fe=50+je*Math.cos(Z),mt=50+je*Math.sin(Z);ke=[`M ${Se} ${te}`,`Q ${Ue} ${De} ${oe} ${ie}`,`Q ${Fe} ${mt} ${xe} ${ne}`,`L ${Se} ${te}`,"Z"].join(" ")}else if(h==="polygon"){const S=50+a*Math.cos(H),R=50+a*Math.sin(H),B=50+a*Math.cos(W),Q=50+a*Math.sin(W),Y=50+l*Math.cos(H),Z=50+l*Math.sin(H),oe=50+l*Math.cos(W),ie=50+l*Math.sin(W);ke=[`M ${S} ${R}`,`L ${B} ${Q}`,`L ${oe} ${ie}`,l>0?`L ${Y} ${Z}`:"","Z"].filter(Boolean).join(" ")}else if(h==="shattered"){const S=(z-k)*Math.PI/180,R=3,B=[],Q=[];for(let Y=0;Y<=R;Y++){const Z=i*1e3+Y*50,oe=Y/R,ie=(Tt(Z)-.5)*.2,le=k+(z-k)*(oe+ie);Q.push(le)}for(let Y=0;Y<Q.length-1;Y++){const Z=Q[Y],oe=Q[Y+1],ie=Z*Math.PI/180,le=oe*Math.PI/180,Se=i*1e3+Y*100,te=(Tt(Se+1)-.5)*S*w*.3,xe=(Tt(Se+2)-.5)*a*w*.5,ne=ie+te,je=le+te,Ue=xe,De=50+(a+Ue)*Math.cos(ne),Fe=50+(a+Ue)*Math.sin(ne),mt=50+(a+Ue)*Math.cos(je),Be=50+(a+Ue)*Math.sin(je),gt=50+Ue*Math.cos(ne),Ot=50+Ue*Math.sin(ne),Ye=50+Ue*Math.cos(je),Ge=50+Ue*Math.sin(je),He=[`M ${De} ${Fe}`,`A ${a+Ue} ${a+Ue} 0 0 1 ${mt} ${Be}`,`L ${Ye} ${Ge}`,`L ${gt} ${Ot}`,"Z"].join(" ");B.push(He)}ke=B.join(" ")}else ke=[`M ${ee} ${ge}`,`A ${a} ${a} 0 0 1 ${ae} ${ve}`,`L ${Te} ${Ce}`,l>0?`A ${l} ${l} 0 0 0 ${me} ${re}`:"L 50 50","Z"].join(" ");const C=`segment-mask-${i}-${h}`,F=100*p.scale,M=(100-F)/2+p.x*50,U=(100-F)/2+p.y*50;let O=[];if(h==="shattered"&&!b)for(let R=1;R<3;R++){const B=i*1e3+R*50,Q=R/3,Y=(Tt(B)-.5)*.2,oe=(k+(z-k)*(Q+Y))*Math.PI/180,ie=50,le=50,Se=50+a*Math.cos(oe),te=50+a*Math.sin(oe);O.push(j.jsx("line",{x1:ie,y1:le,x2:Se,y2:te,stroke:"rgba(0, 0, 0, 0.3)",strokeWidth:"0.15",strokeLinecap:"round"},`crack-${i}-${R}`))}return j.jsxs(j.Fragment,{children:[j.jsx("defs",{children:j.jsx("mask",{id:C,children:j.jsx("path",{d:ke,fill:"white"})})}),j.jsx("image",{href:r,x:M,y:U,width:F,height:F,preserveAspectRatio:"xMidYMid slice",mask:`url(#${C})`}),O]})}),d2=Pe.memo(function({imageUrl:r,radius:i,position:a}){if(!r||i<=0)return null;const l="center-image-mask",c=100*a.scale,p=(100-c)/2+a.x*50,h=(100-c)/2+a.y*50;return j.jsxs(j.Fragment,{children:[j.jsx("defs",{children:j.jsx("mask",{id:l,children:j.jsx("circle",{cx:50,cy:50,r:i,fill:"white"})})}),j.jsx("image",{href:r,x:p,y:h,width:c,height:c,preserveAspectRatio:"xMidYMid slice",mask:`url(#${l})`})]})});function p2(){const n=["https://images.unsplash.com/photo-1550684848-fac1c5b4e853?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvcmZ1bCUyMGFic3RyYWN0fGVufDF8fHx8MTc2NDU1Njc5N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral","https://images.unsplash.com/photo-1507525428034-b723cf961d3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvY2VhbiUyMGJlYWNofGVufDF8fHx8MTc2NDQ5MDA3N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral","https://images.unsplash.com/photo-1493134799591-2c9eed26201a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaXR5JTIwc2t5bGluZXxlbnwxfHx8fDE3NjQ1MTMzMzN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral","https://images.unsplash.com/photo-1441974231531-c6227db76b6e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb3Jlc3QlMjB0cmVlc3xlbnwxfHx8fDE3NjQ1NDgzNzF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral","https://images.unsplash.com/photo-1614935981447-893ce3858657?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNlcnQlMjBzdW5zZXR8ZW58MXx8fHwxNzY0NDk5MDk2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral","https://images.unsplash.com/photo-1602938016996-a03a287ca891?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmbG93ZXJzJTIwZ2FyZGVufGVufDF8fHx8MTc2NDU3NDM4MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"],[r,i]=Pe.useState(6),[a,l]=Pe.useState("ring"),[c,p]=Pe.useState(n),[h,m]=Pe.useState(45),[g,x]=Pe.useState(25),[w,y]=Pe.useState(.6),[b,N]=Pe.useState(.8),[E,I]=Pe.useState(2),[k,z]=Pe.useState(.15),[H,W]=Pe.useState(.3),[V,K]=Pe.useState(!1),[ee,ge]=Pe.useState(null),[ae,ve]=Pe.useState(Array(8).fill(null).map(()=>({x:0,y:0,scale:1}))),me=Pe.useRef(null),[re,Te]=Pe.useState(null),[Ce,ke]=Pe.useState({x:0,y:0,scale:1}),[C,F]=Pe.useState(!1),M=Pe.useCallback(te=>{i(te),ee!==null&&ee>=te&&ge(null)},[ee]),U=Pe.useCallback(te=>xe=>{const ne=xe.target.files?.[0];if(ne){const je=new FileReader;je.onload=Ue=>{p(De=>{const Fe=[...De];return Fe[te]=Ue.target?.result,Fe})},je.readAsDataURL(ne)}},[]),O=Pe.useCallback((te,xe,ne)=>{ve(je=>{const Ue=[...je];return Ue[te]={...Ue[te],[xe]:ne},Ue})},[]),S=Pe.useCallback(te=>{const xe=te.target.files?.[0];if(xe){const ne=new FileReader;ne.onload=je=>{Te(je.target?.result)},ne.readAsDataURL(xe)}},[]),R=Pe.useCallback((te,xe)=>{ke(ne=>({...ne,[te]:xe}))},[]),B=Pe.useCallback(()=>{Te(null),ke({x:0,y:0,scale:1}),F(!1)},[]),Q=g>0&&a!=="pie"&&a!=="petal"&&a!=="shattered",Y=()=>{K(!0);const te=me.current;if(te){const xe=new XMLSerializer().serializeToString(te),ne=new Blob([xe],{type:"image/svg+xml;charset=utf-8"}),je=URL.createObjectURL(ne),Ue=document.createElement("a");Ue.href=je,Ue.download=`${a}-collage.svg`,document.body.appendChild(Ue),Ue.click(),document.body.removeChild(Ue),URL.revokeObjectURL(je)}K(!1)},Z=async()=>{K(!0);try{const xe=document.createElement("canvas");xe.width=2e3,xe.height=2e3;const ne=xe.getContext("2d");if(!ne){K(!1);return}if(a==="shattered"&&r===1&&me.current){const Ye=me.current,Ge=new XMLSerializer().serializeToString(Ye),He=new Blob([Ge],{type:"image/svg+xml;charset=utf-8"}),Qe=URL.createObjectURL(He),yt=new Image;yt.onload=()=>{ne.drawImage(yt,0,0,2e3,2e3),URL.revokeObjectURL(Qe),xe.toBlob(sn=>{if(sn){const Yt=URL.createObjectURL(sn),ln=document.createElement("a");ln.href=Yt,ln.download=`${a}-collage.png`,document.body.appendChild(ln),ln.click(),document.body.removeChild(ln),URL.revokeObjectURL(Yt)}K(!1)},"image/png")},yt.onerror=()=>{console.error("SVG to Canvas conversion failed"),K(!1),alert("Export failed. Please try again.")},yt.src=Qe;return}const je=Ye=>new Promise((Ge,He)=>{const Qe=new Image;Qe.crossOrigin="anonymous",Qe.onload=()=>Ge(Qe),Qe.onerror=He,Qe.src=Ye}),Ue=await Promise.all(c.slice(0,r).map(Ye=>je(Ye))),De=2e3/2,Fe=2e3/2,mt=h/100*2e3,Be=a==="pie"?0:g/100*2e3,gt=360/r*(Math.PI/180),Ot=E*Math.PI/180;if(Ue.forEach((Ye,Ge)=>{ne.save();const He=Ge*gt-Math.PI/2+Ot/2,Qe=(Ge+1)*gt-Math.PI/2-Ot/2,yt=(He+Qe)/2;if(ne.beginPath(),a==="aperture"){const it=Be*1.5,bt=He+gt/2,Je=Qe+gt/2,It=De+it*Math.cos(bt),vn=Fe+it*Math.sin(bt),Bt=De+it*Math.cos(Je),Ut=Fe+it*Math.sin(Je);ne.arc(De,Fe,mt,He,Qe),ne.lineTo(Bt,Ut),ne.lineTo(It,vn),ne.closePath()}else if(a==="petal"){const it=mt*b,bt=gt*w/2,Je=yt-bt,It=yt+bt,vn=De+it*Math.cos(yt),Bt=Fe+it*Math.sin(yt),Ut=De+Be*.2*Math.cos(Je),An=Fe+Be*.2*Math.sin(Je),Hn=De+Be*.2*Math.cos(It),Wn=Fe+Be*.2*Math.sin(It),Vn=it*.6,or=De+Vn*Math.cos(Je),Zi=Fe+Vn*Math.sin(Je),Vo=it*.6,ea=De+Vo*Math.cos(It),ta=Fe+Vo*Math.sin(It);ne.moveTo(Ut,An),ne.quadraticCurveTo(or,Zi,vn,Bt),ne.quadraticCurveTo(ea,ta,Hn,Wn),ne.lineTo(Ut,An),ne.closePath()}else if(a==="polygon"){const it=He+gt/2,bt=Qe+gt/2,Je=De+mt*Math.cos(it),It=Fe+mt*Math.sin(it),vn=De+mt*Math.cos(bt),Bt=Fe+mt*Math.sin(bt),Ut=De+Be*Math.cos(it),An=Fe+Be*Math.sin(it),Hn=De+Be*Math.cos(bt),Wn=Fe+Be*Math.sin(bt);ne.moveTo(Je,It),ne.lineTo(vn,Bt),ne.lineTo(Hn,Wn),Be>0&&ne.lineTo(Ut,An),ne.closePath()}else if(a==="shattered"){const bt=[];for(let Je=0;Je<=3;Je++){const It=Ge*1e3+Je*50,vn=Je/3,Bt=(Tt(It)-.5)*.2,Ut=He+(Qe-He)*(vn+Bt);bt.push(Ut)}for(let Je=0;Je<bt.length-1;Je++){const It=bt[Je],vn=bt[Je+1],Bt=Ge*1e3+Je*100,Ut=(Tt(Bt+1)-.5)*gt*k*.3,An=(Tt(Bt+2)-.5)*mt*k*.5,Hn=It+Ut,Wn=vn+Ut;ne.moveTo(De,Fe),ne.arc(De,Fe,mt+An,Hn,Wn),ne.lineTo(De,Fe),ne.closePath()}}else ne.arc(De,Fe,mt,He,Qe),ne.lineTo(De+Be*Math.cos(Qe),Fe+Be*Math.sin(Qe)),Be>0&&ne.arc(De,Fe,Be,Qe,He,!0),ne.closePath();ne.clip();const sn=ae[Ge],Yt=2e3*sn.scale,ln=(2e3-Yt)/2+sn.x*2e3*.5,In=(2e3-Yt)/2+sn.y*2e3*.5;ne.drawImage(Ye,ln,In,Yt,Yt),ne.restore()}),a==="shattered"){ne.strokeStyle="rgba(0, 0, 0, 0.3)",ne.lineWidth=2e3*.002,ne.lineCap="round";for(let Ye=0;Ye<r;Ye++){const Ge=Ye*gt-Math.PI/2+Ot/2,He=(Ye+1)*gt-Math.PI/2-Ot/2,Qe=3;for(let yt=1;yt<Qe;yt++){const sn=Ye*1e3+yt*50,Yt=yt/Qe,ln=(Tt(sn)-.5)*.2,In=Ge+(He-Ge)*(Yt+ln),it=De,bt=Fe,Je=De+mt*Math.cos(In),It=Fe+mt*Math.sin(In);ne.beginPath(),ne.moveTo(it,bt),ne.lineTo(Je,It),ne.stroke()}}}if(re&&Be>0&&a!=="pie"&&a!=="petal"&&a!=="shattered")try{const Ye=await je(re);ne.save(),ne.beginPath(),ne.arc(De,Fe,Be,0,Math.PI*2),ne.closePath(),ne.clip();const Ge=Ce,He=2e3*Ge.scale,Qe=(2e3-He)/2+Ge.x*2e3*.5,yt=(2e3-He)/2+Ge.y*2e3*.5;ne.drawImage(Ye,Qe,yt,He,He),ne.restore()}catch(Ye){console.error("Center image load error:",Ye)}xe.toBlob(Ye=>{if(Ye){const Ge=URL.createObjectURL(Ye),He=document.createElement("a");He.href=Ge,He.download=`${a}-collage.png`,document.body.appendChild(He),He.click(),document.body.removeChild(He),URL.revokeObjectURL(Ge)}K(!1)},"image/png")}catch(te){console.error("Export error:",te),K(!1),alert("Export failed. Please try using locally uploaded images.")}},oe=Pe.useMemo(()=>[{type:"ring",name:"Ring",nameEn:"Ring",icon:Qb},{type:"pie",name:"Pie",nameEn:"Pie",icon:Xb},{type:"aperture",name:"Aperture",nameEn:"Aperture",icon:Yb},{type:"petal",name:"Petal",nameEn:"Petal",icon:Jb},{type:"polygon",name:"Polygon",nameEn:"Polygon",icon:e2},{type:"shattered",name:"Shattered",nameEn:"Shattered",icon:i2}],[]),ie=a!=="pie"&&a!=="petal"&&a!=="shattered",le=a==="petal",Se=a==="shattered";return j.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900",children:[j.jsxs("div",{className:"relative overflow-hidden",children:[j.jsxs("div",{className:"absolute inset-0 overflow-hidden pointer-events-none",children:[j.jsx("div",{className:"absolute -top-20 -right-20 w-96 h-96 bg-purple-600/30 rounded-full blur-3xl animate-pulse"}),j.jsx("div",{className:"absolute -bottom-20 -left-20 w-96 h-96 bg-blue-600/30 rounded-full blur-3xl animate-pulse",style:{animationDelay:"1s"}}),j.jsx("div",{className:"absolute top-1/3 left-1/4 w-64 h-64 bg-pink-500/20 rounded-full blur-3xl"}),j.jsx("div",{className:"absolute inset-0 bg-slate-900/40"}),j.jsx("div",{className:"absolute inset-0 opacity-10",style:{backgroundImage:"radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)",backgroundSize:"40px 40px"}})]}),j.jsxs("div",{className:"relative z-10 max-w-5xl mx-auto text-center py-28 md:py-36 px-6",children:[j.jsxs("div",{className:"inline-flex items-center gap-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full px-8 py-4 mb-12 shadow-2xl hover:bg-white/15 transition-colors cursor-default",children:[j.jsxs("span",{className:"relative flex h-3 w-3",children:[j.jsx("span",{className:"animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"}),j.jsx("span",{className:"relative inline-flex rounded-full h-3 w-3 bg-green-400"})]}),j.jsx("span",{className:"text-base font-semibold text-white tracking-wide",children:"Free Online Tool"}),j.jsx("span",{className:"w-1.5 h-1.5 bg-white/60 rounded-full"}),j.jsx("span",{className:"text-base font-semibold text-white tracking-wide",children:"No Account Required"})]}),j.jsxs("h1",{className:"mb-12",children:[j.jsx("span",{className:"block text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 tracking-tight drop-shadow-lg",children:"Create Stunning"}),j.jsx("span",{className:"block text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter text-white drop-shadow-2xl",children:"Circle Photo Collages"})]}),j.jsx("p",{className:"text-xl md:text-2xl text-white font-medium mb-16 max-w-3xl mx-auto leading-relaxed drop-shadow-md",children:"Transform your photos into beautiful circular and ring-shaped collages. Perfect for social media, posters, and creative projects."}),j.jsxs("div",{className:"inline-flex flex-wrap md:flex-nowrap items-center justify-center gap-10 md:gap-16 bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl px-14 py-8 mb-10 shadow-2xl hover:bg-white/10 transition-colors duration-300",children:[j.jsxs("div",{className:"flex items-center gap-5",children:[j.jsx("span",{className:"text-4xl",children:"🎯"}),j.jsxs("div",{className:"text-left",children:[j.jsx("div",{className:"font-bold text-white text-lg",children:"Ring Layouts"}),j.jsx("div",{className:"text-purple-200 text-sm",children:"6 unique templates"})]})]}),j.jsx("div",{className:"hidden md:block w-px h-12 bg-white/20"}),j.jsxs("div",{className:"flex items-center gap-5",children:[j.jsx("span",{className:"text-4xl",children:"✨"}),j.jsxs("div",{className:"text-left",children:[j.jsx("div",{className:"font-bold text-white text-lg",children:"Precise Control"}),j.jsx("div",{className:"text-purple-200 text-sm",children:"Position & scale"})]})]}),j.jsx("div",{className:"hidden md:block w-px h-12 bg-white/20"}),j.jsxs("div",{className:"flex items-center gap-5",children:[j.jsx("span",{className:"text-4xl",children:"🚀"}),j.jsxs("div",{className:"text-left",children:[j.jsx("div",{className:"font-bold text-white text-lg",children:"HD Export"}),j.jsx("div",{className:"text-purple-200 text-sm",children:"PNG & SVG"})]})]})]}),j.jsxs("div",{className:"flex flex-col items-center gap-6",children:[j.jsxs("button",{onClick:()=>document.getElementById("collage-interface")?.scrollIntoView({behavior:"smooth"}),className:"group relative overflow-hidden bg-gradient-to-r from-purple-600 via-purple-500 to-pink-500 rounded-full px-14 py-6 shadow-lg shadow-purple-500/30 hover:shadow-xl hover:shadow-purple-500/40 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105",children:[j.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"}),j.jsx("span",{className:"relative text-lg md:text-xl font-bold text-white tracking-widest uppercase",children:"Start Designing"})]}),j.jsx("div",{className:"text-white/50 animate-bounce cursor-pointer",onClick:()=>document.getElementById("collage-interface")?.scrollIntoView({behavior:"smooth"}),children:j.jsx("svg",{className:"w-8 h-8",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:j.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 14l-7 7m0 0l-7-7m7 7V3"})})})]})]})]}),j.jsx("div",{className:"flex items-center justify-center px-8 pb-12",children:j.jsx("div",{className:"max-w-7xl w-full",children:j.jsxs("div",{className:"grid lg:grid-cols-3 gap-6",children:[j.jsxs("div",{className:"lg:col-span-1 space-y-4",children:[j.jsxs("div",{className:"bg-white/10 backdrop-blur-lg rounded-2xl p-5",children:[j.jsxs("div",{className:"flex items-center gap-2 mb-4",children:[j.jsx(r2,{className:"w-5 h-5 text-purple-300"}),j.jsx("h2",{className:"text-white",children:"Shape Templates"})]}),j.jsx("div",{className:"grid grid-cols-3 gap-2",children:oe.map(te=>j.jsxs("button",{onClick:()=>l(te.type),className:`flex flex-col items-center gap-2 p-3 rounded-xl transition-all ${a===te.type?"bg-purple-600 ring-2 ring-purple-400":"bg-white/5 hover:bg-white/10"} text-white`,children:[j.jsx(te.icon,{className:"w-6 h-6"}),j.jsx("div",{className:"text-center",children:j.jsx("div",{className:"text-sm",children:te.name})})]},te.type))}),j.jsxs("div",{className:"mt-4 pt-4 border-t border-white/20",children:[j.jsx("label",{className:"block text-white text-sm mb-2",children:"Segments"}),j.jsx("div",{className:"grid grid-cols-8 gap-1",children:[1,2,3,4,5,6,7,8].map(te=>j.jsx("button",{onClick:()=>M(te),className:`py-2 text-sm rounded-lg transition-all ${r===te?"bg-purple-600 ring-2 ring-purple-400":"bg-white/5 hover:bg-white/10"} text-white`,children:te},te))})]})]}),j.jsxs("div",{className:"bg-white/10 backdrop-blur-lg rounded-2xl p-5 space-y-3",children:[j.jsx("h2",{className:"text-white",children:"Parameters"}),j.jsxs("div",{children:[j.jsxs("label",{className:"block text-white text-sm mb-2",children:[a==="pie"?"Circle Size":a==="petal"?"Petal Length":a==="polygon"?"Polygon Size":"Outer Radius",": ",h,"%"]}),j.jsx("input",{type:"range",min:"20",max:"50",value:h,onChange:te=>m(Number(te.target.value)),className:"w-full h-2 bg-purple-300/30 rounded-lg appearance-none cursor-pointer accent-purple-500"})]}),ie&&j.jsxs("div",{children:[j.jsxs("label",{className:"block text-white text-sm mb-2",children:["Inner Radius: ",g,"%"]}),j.jsx("input",{type:"range",min:"0",max:h-5,value:g,onChange:te=>x(Number(te.target.value)),className:"w-full h-2 bg-purple-300/30 rounded-lg appearance-none cursor-pointer accent-purple-500"})]}),le&&j.jsxs(j.Fragment,{children:[j.jsxs("div",{children:[j.jsxs("label",{className:"block text-white text-sm mb-2",children:["Petal Width: ",(w*100).toFixed(0),"%"]}),j.jsx("input",{type:"range",min:"0.3",max:"2.0",step:"0.05",value:w,onChange:te=>y(Number(te.target.value)),className:"w-full h-2 bg-purple-300/30 rounded-lg appearance-none cursor-pointer accent-purple-500"})]}),j.jsxs("div",{children:[j.jsxs("label",{className:"block text-white text-sm mb-2",children:["Petal Stretch: ",(b*100).toFixed(0),"%"]}),j.jsx("input",{type:"range",min:"0.5",max:"1.0",step:"0.05",value:b,onChange:te=>N(Number(te.target.value)),className:"w-full h-2 bg-purple-300/30 rounded-lg appearance-none cursor-pointer accent-purple-500"})]})]}),Se&&j.jsxs(j.Fragment,{children:[j.jsxs("div",{children:[j.jsxs("label",{className:"block text-white text-sm mb-2",children:["Shatter Intensity: ",(k*100).toFixed(0),"%"]}),j.jsx("input",{type:"range",min:"0",max:"0.5",step:"0.05",value:k,onChange:te=>z(Number(te.target.value)),className:"w-full h-2 bg-purple-300/30 rounded-lg appearance-none cursor-pointer accent-purple-500"}),j.jsx("p",{className:"text-purple-300/60 text-xs mt-1",children:"Creates cracks in each segment with slight displacement"})]}),r===1&&j.jsxs("div",{children:[j.jsxs("label",{className:"block text-white text-sm mb-2",children:["Fragment Distortion: ",(H*100).toFixed(0),"%"]}),j.jsx("input",{type:"range",min:"0",max:"1",step:"0.05",value:H,onChange:te=>W(Number(te.target.value)),className:"w-full h-2 bg-purple-300/30 rounded-lg appearance-none cursor-pointer accent-purple-500"}),j.jsx("p",{className:"text-purple-300/60 text-xs mt-1",children:"Controls image size and position variation in each fragment"})]})]}),j.jsxs("div",{className:"pt-3 border-t border-white/20",children:[j.jsxs("label",{className:"block text-white text-sm mb-2",children:["Segment Gap: ",E,"°"]}),j.jsx("input",{type:"range",min:"0",max:"15",step:"0.5",value:E,onChange:te=>I(Number(te.target.value)),className:"w-full h-2 bg-purple-300/30 rounded-lg appearance-none cursor-pointer accent-purple-500",disabled:r===1}),r===1&&j.jsx("p",{className:"text-purple-300/60 text-xs mt-1",children:"Gap not available in single image mode"})]})]}),j.jsxs("div",{className:"bg-white/10 backdrop-blur-lg rounded-2xl p-5",children:[j.jsx("h2",{className:"text-white mb-3",children:"Upload Images"}),a==="shattered"&&r===1&&j.jsx("div",{className:"mb-3 p-3 bg-purple-500/20 border border-purple-400/30 rounded-lg",children:j.jsx("p",{className:"text-purple-200 text-xs",children:"💡 Single image shattered mode: Upload one image for full circle shatter effect"})}),a==="polygon"&&r===2&&j.jsx("div",{className:"mb-3 p-3 bg-blue-500/20 border border-blue-400/30 rounded-lg",children:j.jsx("p",{className:"text-blue-200 text-xs",children:"💡 Polygon 2-segment mode: Displays as a complete hexagon"})}),j.jsxs("div",{className:"space-y-2 max-h-[280px] overflow-y-auto pr-1",children:[Array.from({length:r}).map((te,xe)=>j.jsxs("div",{className:"flex gap-2",children:[j.jsxs("label",{className:`flex-1 flex items-center justify-between ${iu[xe]} hover:opacity-90 text-white px-3 py-2 rounded-lg cursor-pointer transition-all text-sm`,children:[j.jsxs("span",{children:[r===1||a==="polygon"&&r===2?"Image":a==="petal"?"Petal":"Segment",r===1||a==="polygon"&&r===2?"":` ${xe+1}`]}),j.jsx(am,{className:"w-4 h-4"}),j.jsx("input",{type:"file",accept:"image/*",onChange:U(xe),className:"hidden"})]}),j.jsx("button",{onClick:()=>ge(ee===xe?null:xe),className:`${iu[xe]} ${ee===xe?"ring-2 ring-white":""} hover:opacity-90 text-white px-3 py-2 rounded-lg transition-all`,title:"Adjust Position",children:j.jsx(im,{className:"w-4 h-4"})})]},xe)),Q&&j.jsx("div",{className:"mt-3 pt-3 border-t border-white/20",children:j.jsxs("div",{className:"flex gap-2",children:[j.jsxs("label",{className:`flex-1 flex items-center justify-between ${re?"bg-cyan-600":"bg-gray-500"} hover:opacity-90 text-white px-3 py-2 rounded-lg cursor-pointer transition-all text-sm`,children:[j.jsxs("span",{children:["🎯 Center Image",re?" ✓":" (optional)"]}),j.jsx(am,{className:"w-4 h-4"}),j.jsx("input",{type:"file",accept:"image/*",onChange:S,className:"hidden"})]}),re&&j.jsxs(j.Fragment,{children:[j.jsx("button",{onClick:()=>{ge(null),F(!C)},className:`bg-cyan-600 ${C?"ring-2 ring-white":""} hover:opacity-90 text-white px-3 py-2 rounded-lg transition-all`,title:"Adjust Position",children:j.jsx(im,{className:"w-4 h-4"})}),j.jsx("button",{onClick:B,className:"bg-red-500 hover:bg-red-600 text-white px-3 py-2 rounded-lg transition-all",title:"Delete Center Image",children:j.jsx(s2,{className:"w-4 h-4"})})]})]})})]})]}),ee!==null&&ee<r&&j.jsxs("div",{className:"bg-white/10 backdrop-blur-lg rounded-2xl p-5 space-y-3",children:[j.jsxs("h2",{className:"text-white text-sm",children:["Adjust Image #",ee+1]}),j.jsxs("div",{children:[j.jsxs("label",{className:"block text-white text-xs mb-1",children:["X Position: ",ae[ee].x.toFixed(2)]}),j.jsx("input",{type:"range",min:"-1",max:"1",step:"0.01",value:ae[ee].x,onChange:te=>O(ee,"x",Number(te.target.value)),className:"w-full h-2 bg-purple-300/30 rounded-lg appearance-none cursor-pointer accent-purple-500"})]}),j.jsxs("div",{children:[j.jsxs("label",{className:"block text-white text-xs mb-1",children:["Y Position: ",ae[ee].y.toFixed(2)]}),j.jsx("input",{type:"range",min:"-1",max:"1",step:"0.01",value:ae[ee].y,onChange:te=>O(ee,"y",Number(te.target.value)),className:"w-full h-2 bg-purple-300/30 rounded-lg appearance-none cursor-pointer accent-purple-500"})]}),j.jsxs("div",{children:[j.jsxs("label",{className:"block text-white text-xs mb-1",children:["Scale: ",ae[ee].scale.toFixed(2),"x"]}),j.jsx("input",{type:"range",min:"0.5",max:"2",step:"0.01",value:ae[ee].scale,onChange:te=>O(ee,"scale",Number(te.target.value)),className:"w-full h-2 bg-purple-300/30 rounded-lg appearance-none cursor-pointer accent-purple-500"})]}),j.jsx("button",{onClick:()=>{O(ee,"x",0),O(ee,"y",0),O(ee,"scale",1)},className:"w-full bg-purple-600 hover:bg-purple-700 text-white px-3 py-2 rounded-lg transition-all text-sm",children:"Reset"})]}),C&&re&&j.jsxs("div",{className:"bg-white/10 backdrop-blur-lg rounded-2xl p-5 space-y-3",children:[j.jsx("h2",{className:"text-white text-sm",children:"🎯 Adjust Center Image"}),j.jsxs("div",{children:[j.jsxs("label",{className:"block text-white text-xs mb-1",children:["X Position: ",Ce.x.toFixed(2)]}),j.jsx("input",{type:"range",min:"-1",max:"1",step:"0.01",value:Ce.x,onChange:te=>R("x",Number(te.target.value)),className:"w-full h-2 bg-cyan-300/30 rounded-lg appearance-none cursor-pointer accent-cyan-500"})]}),j.jsxs("div",{children:[j.jsxs("label",{className:"block text-white text-xs mb-1",children:["Y Position: ",Ce.y.toFixed(2)]}),j.jsx("input",{type:"range",min:"-1",max:"1",step:"0.01",value:Ce.y,onChange:te=>R("y",Number(te.target.value)),className:"w-full h-2 bg-cyan-300/30 rounded-lg appearance-none cursor-pointer accent-cyan-500"})]}),j.jsxs("div",{children:[j.jsxs("label",{className:"block text-white text-xs mb-1",children:["Scale: ",Ce.scale.toFixed(2),"x"]}),j.jsx("input",{type:"range",min:"0.5",max:"2",step:"0.01",value:Ce.scale,onChange:te=>R("scale",Number(te.target.value)),className:"w-full h-2 bg-cyan-300/30 rounded-lg appearance-none cursor-pointer accent-cyan-500"})]}),j.jsx("button",{onClick:()=>{R("x",0),R("y",0),R("scale",1)},className:"w-full bg-cyan-600 hover:bg-cyan-700 text-white px-3 py-2 rounded-lg transition-all text-sm",children:"Reset"})]}),j.jsxs("div",{className:"bg-white/10 backdrop-blur-lg rounded-2xl p-5",children:[j.jsx("h2",{className:"text-white mb-3",children:"Export"}),j.jsxs("div",{className:"space-y-2",children:[j.jsxs("button",{className:"w-full flex items-center justify-center bg-green-600 hover:bg-green-700 text-white px-4 py-2.5 rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed text-sm",onClick:Z,disabled:V,children:[j.jsx(om,{className:"w-4 h-4 mr-2"}),V?"Exporting...":"PNG (2000×2000)"]}),j.jsxs("button",{className:"w-full flex items-center justify-center bg-purple-600 hover:bg-purple-700 text-white px-4 py-2.5 rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed text-sm",onClick:Y,disabled:V,children:[j.jsx(om,{className:"w-4 h-4 mr-2"}),"SVG (Vector)"]})]})]})]}),j.jsx("div",{className:"lg:col-span-2",children:j.jsxs("div",{className:"bg-white/10 backdrop-blur-lg rounded-2xl p-6 h-full flex flex-col",children:[j.jsx("h2",{className:"text-white mb-4",children:"Preview"}),j.jsx("div",{className:"relative aspect-square bg-slate-800 rounded-xl overflow-hidden flex-1 max-h-[600px] mx-auto w-full max-w-[600px]",children:j.jsxs("svg",{viewBox:"0 0 100 100",className:"w-full h-full",ref:me,children:[Array.from({length:r}).map((te,xe)=>j.jsx(u2,{imageUrl:c[xe]||c[0],segmentIndex:xe,outerRadius:h,innerRadius:a==="pie"?0:g,totalSegments:r,position:ae[xe],shapeType:a,petalWidth:w,petalLength:b,gapWidth:E,shatterIntensity:k,fragmentDistortion:H},xe)),Q&&re&&j.jsx(d2,{imageUrl:re,radius:g,position:Ce})]})}),j.jsx("div",{className:"mt-4 grid grid-cols-3 md:grid-cols-4 gap-2",children:Array.from({length:r}).map((te,xe)=>j.jsxs("button",{onClick:()=>ge(ee===xe?null:xe),className:`flex items-center justify-center gap-2 ${iu[xe]} ${ee===xe?"ring-2 ring-white":""} text-white px-2 py-2 rounded-lg transition-all hover:opacity-90 text-sm`,children:[j.jsx("div",{className:"w-2 h-2 bg-white rounded-full"}),j.jsxs("span",{children:["#",xe+1]})]},xe))})]})})]})})})]})}typeof window<"u"&&Ab({enabled:!0,log:!0});Db.createRoot(document.getElementById("root")).render(j.jsx(p2,{}));
