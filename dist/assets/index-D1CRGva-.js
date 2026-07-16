(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const pa="185",Mi={ROTATE:0,DOLLY:1,PAN:2},xi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Gl=0,qa=1,Vl=2,gs=1,Hl=2,Fi=3,On=0,Ft=1,gn=2,Mn=0,Si=1,Ka=2,Za=3,$a=4,kl=5,Kn=100,Wl=101,Xl=102,Yl=103,ql=104,Kl=200,Zl=201,$l=202,Jl=203,Er=204,yr=205,Ql=206,jl=207,ec=208,tc=209,nc=210,ic=211,sc=212,rc=213,ac=214,br=0,Tr=1,Ar=2,bi=3,Rr=4,wr=5,Cr=6,Pr=7,jo=0,oc=1,lc=2,an=0,el=1,tl=2,nl=3,ma=4,il=5,sl=6,rl=7,al=300,jn=301,Ti=302,Bs=303,zs=304,Is=306,Dr=1e3,vn=1001,Lr=1002,St=1003,cc=1004,qi=1005,Rt=1006,Gs=1007,$n=1008,Gt=1009,ol=1010,ll=1011,Bi=1012,_a=1013,cn=1014,sn=1015,En=1016,ga=1017,xa=1018,zi=1020,cl=35902,hl=35899,ul=1021,dl=1022,Zt=1023,yn=1026,Jn=1027,fl=1028,va=1029,ei=1030,Ma=1031,Sa=1033,xs=33776,vs=33777,Ms=33778,Ss=33779,Ir=35840,Ur=35841,Nr=35842,Fr=35843,Or=36196,Br=37492,zr=37496,Gr=37488,Vr=37489,As=37490,Hr=37491,kr=37808,Wr=37809,Xr=37810,Yr=37811,qr=37812,Kr=37813,Zr=37814,$r=37815,Jr=37816,Qr=37817,jr=37818,ea=37819,ta=37820,na=37821,ia=36492,sa=36494,ra=36495,aa=36283,oa=36284,Rs=36285,la=36286,hc=3200,ca=0,uc=1,Un="",kt="srgb",ws="srgb-linear",Cs="linear",qe="srgb",ii=7680,Ja=519,dc=512,fc=513,pc=514,Ea=515,mc=516,_c=517,ya=518,gc=519,Qa=35044,ja="300 es",rn=2e3,Gi=2001;function xc(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Ps(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function vc(){const i=Ps("canvas");return i.style.display="block",i}const eo={};function to(...i){const e="THREE."+i.shift();console.log(e,...i)}function pl(i){const e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Re(...i){i=pl(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function Ge(...i){i=pl(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function Ei(...i){const e=i.join(" ");e in eo||(eo[e]=!0,Re(...i))}function Mc(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}const Sc={[br]:Tr,[Ar]:Cr,[Rr]:Pr,[bi]:wr,[Tr]:br,[Cr]:Ar,[Pr]:Rr,[wr]:bi};class Gn{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const s=n[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const yt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Es=Math.PI/180,ha=180/Math.PI;function Vi(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(yt[i&255]+yt[i>>8&255]+yt[i>>16&255]+yt[i>>24&255]+"-"+yt[e&255]+yt[e>>8&255]+"-"+yt[e>>16&15|64]+yt[e>>24&255]+"-"+yt[t&63|128]+yt[t>>8&255]+"-"+yt[t>>16&255]+yt[t>>24&255]+yt[n&255]+yt[n>>8&255]+yt[n>>16&255]+yt[n>>24&255]).toLowerCase()}function Fe(i,e,t){return Math.max(e,Math.min(t,i))}function Ec(i,e){return(i%e+e)%e}function Vs(i,e,t){return(1-t)*i+t*e}function Ci(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function It(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const yc={DEG2RAD:Es},Ia=class Ia{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Fe(this.x,e.x,t.x),this.y=Fe(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Fe(this.x,e,t),this.y=Fe(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Fe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Fe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Ia.prototype.isVector2=!0;let we=Ia;class Bn{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let c=n[s+0],l=n[s+1],f=n[s+2],m=n[s+3],h=r[a+0],_=r[a+1],v=r[a+2],E=r[a+3];if(m!==E||c!==h||l!==_||f!==v){let p=c*h+l*_+f*v+m*E;p<0&&(h=-h,_=-_,v=-v,E=-E,p=-p);let u=1-o;if(p<.9995){const A=Math.acos(p),w=Math.sin(A);u=Math.sin(u*A)/w,o=Math.sin(o*A)/w,c=c*u+h*o,l=l*u+_*o,f=f*u+v*o,m=m*u+E*o}else{c=c*u+h*o,l=l*u+_*o,f=f*u+v*o,m=m*u+E*o;const A=1/Math.sqrt(c*c+l*l+f*f+m*m);c*=A,l*=A,f*=A,m*=A}}e[t]=c,e[t+1]=l,e[t+2]=f,e[t+3]=m}static multiplyQuaternionsFlat(e,t,n,s,r,a){const o=n[s],c=n[s+1],l=n[s+2],f=n[s+3],m=r[a],h=r[a+1],_=r[a+2],v=r[a+3];return e[t]=o*v+f*m+c*_-l*h,e[t+1]=c*v+f*h+l*m-o*_,e[t+2]=l*v+f*_+o*h-c*m,e[t+3]=f*v-o*m-c*h-l*_,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),f=o(s/2),m=o(r/2),h=c(n/2),_=c(s/2),v=c(r/2);switch(a){case"XYZ":this._x=h*f*m+l*_*v,this._y=l*_*m-h*f*v,this._z=l*f*v+h*_*m,this._w=l*f*m-h*_*v;break;case"YXZ":this._x=h*f*m+l*_*v,this._y=l*_*m-h*f*v,this._z=l*f*v-h*_*m,this._w=l*f*m+h*_*v;break;case"ZXY":this._x=h*f*m-l*_*v,this._y=l*_*m+h*f*v,this._z=l*f*v+h*_*m,this._w=l*f*m-h*_*v;break;case"ZYX":this._x=h*f*m-l*_*v,this._y=l*_*m+h*f*v,this._z=l*f*v-h*_*m,this._w=l*f*m+h*_*v;break;case"YZX":this._x=h*f*m+l*_*v,this._y=l*_*m+h*f*v,this._z=l*f*v-h*_*m,this._w=l*f*m-h*_*v;break;case"XZY":this._x=h*f*m-l*_*v,this._y=l*_*m-h*f*v,this._z=l*f*v+h*_*m,this._w=l*f*m+h*_*v;break;default:Re("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],f=t[6],m=t[10],h=n+o+m;if(h>0){const _=.5/Math.sqrt(h+1);this._w=.25/_,this._x=(f-c)*_,this._y=(r-l)*_,this._z=(a-s)*_}else if(n>o&&n>m){const _=2*Math.sqrt(1+n-o-m);this._w=(f-c)/_,this._x=.25*_,this._y=(s+a)/_,this._z=(r+l)/_}else if(o>m){const _=2*Math.sqrt(1+o-n-m);this._w=(r-l)/_,this._x=(s+a)/_,this._y=.25*_,this._z=(c+f)/_}else{const _=2*Math.sqrt(1+m-n-o);this._w=(a-s)/_,this._x=(r+l)/_,this._y=(c+f)/_,this._z=.25*_}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Fe(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,f=t._w;return this._x=n*f+a*o+s*l-r*c,this._y=s*f+a*c+r*o-n*l,this._z=r*f+a*l+n*c-s*o,this._w=a*f-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let c=1-t;if(o<.9995){const l=Math.acos(o),f=Math.sin(l);c=Math.sin(c*l)/f,t=Math.sin(t*l)/f,this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Ua=class Ua{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(no.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(no.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*s-o*n),f=2*(o*t-r*s),m=2*(r*n-a*t);return this.x=t+c*l+a*m-o*f,this.y=n+c*f+o*l-r*m,this.z=s+c*m+r*f-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Fe(this.x,e.x,t.x),this.y=Fe(this.y,e.y,t.y),this.z=Fe(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Fe(this.x,e,t),this.y=Fe(this.y,e,t),this.z=Fe(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Fe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Hs.copy(this).projectOnVector(e),this.sub(Hs)}reflect(e){return this.sub(Hs.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Fe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Ua.prototype.isVector3=!0;let F=Ua;const Hs=new F,no=new Bn,Na=class Na{constructor(e,t,n,s,r,a,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l)}set(e,t,n,s,r,a,o,c,l){const f=this.elements;return f[0]=e,f[1]=s,f[2]=o,f[3]=t,f[4]=r,f[5]=c,f[6]=n,f[7]=a,f[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],f=n[4],m=n[7],h=n[2],_=n[5],v=n[8],E=s[0],p=s[3],u=s[6],A=s[1],w=s[4],M=s[7],T=s[2],b=s[5],R=s[8];return r[0]=a*E+o*A+c*T,r[3]=a*p+o*w+c*b,r[6]=a*u+o*M+c*R,r[1]=l*E+f*A+m*T,r[4]=l*p+f*w+m*b,r[7]=l*u+f*M+m*R,r[2]=h*E+_*A+v*T,r[5]=h*p+_*w+v*b,r[8]=h*u+_*M+v*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],f=e[8];return t*a*f-t*o*l-n*r*f+n*o*c+s*r*l-s*a*c}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],f=e[8],m=f*a-o*l,h=o*c-f*r,_=l*r-a*c,v=t*m+n*h+s*_;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const E=1/v;return e[0]=m*E,e[1]=(s*l-f*n)*E,e[2]=(o*n-s*a)*E,e[3]=h*E,e[4]=(f*t-s*c)*E,e[5]=(s*r-o*t)*E,e[6]=_*E,e[7]=(n*c-l*t)*E,e[8]=(a*t-n*r)*E,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-s*l,s*c,-s*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return Ei("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(ks.makeScale(e,t)),this}rotate(e){return Ei("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(ks.makeRotation(-e)),this}translate(e,t){return Ei("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(ks.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Na.prototype.isMatrix3=!0;let Pe=Na;const ks=new Pe,io=new Pe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),so=new Pe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function bc(){const i={enabled:!0,workingColorSpace:ws,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===qe&&(s.r=Sn(s.r),s.g=Sn(s.g),s.b=Sn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===qe&&(s.r=yi(s.r),s.g=yi(s.g),s.b=yi(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Un?Cs:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Ei("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Ei("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[ws]:{primaries:e,whitePoint:n,transfer:Cs,toXYZ:io,fromXYZ:so,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:kt},outputColorSpaceConfig:{drawingBufferColorSpace:kt}},[kt]:{primaries:e,whitePoint:n,transfer:qe,toXYZ:io,fromXYZ:so,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:kt}}}),i}const ze=bc();function Sn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function yi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let si;class Tc{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{si===void 0&&(si=Ps("canvas")),si.width=e.width,si.height=e.height;const s=si.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=si}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ps("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Sn(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Sn(t[n]/255)*255):t[n]=Sn(t[n]);return{data:t,width:e.width,height:e.height}}else return Re("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Ac=0;class ba{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ac++}),this.uuid=Vi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Ws(s[a].image)):r.push(Ws(s[a]))}else r=Ws(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function Ws(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Tc.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Re("Texture: Unable to serialize Texture."),{})}let Rc=0;const Xs=new F;class Pt extends Gn{constructor(e=Pt.DEFAULT_IMAGE,t=Pt.DEFAULT_MAPPING,n=vn,s=vn,r=Rt,a=$n,o=Zt,c=Gt,l=Pt.DEFAULT_ANISOTROPY,f=Un){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Rc++}),this.uuid=Vi(),this.name="",this.source=new ba(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new we(0,0),this.repeat=new we(1,1),this.center=new we(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Pe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Xs).x}get height(){return this.source.getSize(Xs).y}get depth(){return this.source.getSize(Xs).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){Re(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Re(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==al)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Dr:e.x=e.x-Math.floor(e.x);break;case vn:e.x=e.x<0?0:1;break;case Lr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Dr:e.y=e.y-Math.floor(e.y);break;case vn:e.y=e.y<0?0:1;break;case Lr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Pt.DEFAULT_IMAGE=null;Pt.DEFAULT_MAPPING=al;Pt.DEFAULT_ANISOTROPY=1;const Fa=class Fa{constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const c=e.elements,l=c[0],f=c[4],m=c[8],h=c[1],_=c[5],v=c[9],E=c[2],p=c[6],u=c[10];if(Math.abs(f-h)<.01&&Math.abs(m-E)<.01&&Math.abs(v-p)<.01){if(Math.abs(f+h)<.1&&Math.abs(m+E)<.1&&Math.abs(v+p)<.1&&Math.abs(l+_+u-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const w=(l+1)/2,M=(_+1)/2,T=(u+1)/2,b=(f+h)/4,R=(m+E)/4,g=(v+p)/4;return w>M&&w>T?w<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(w),s=b/n,r=R/n):M>T?M<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),n=b/s,r=g/s):T<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(T),n=R/r,s=g/r),this.set(n,s,r,t),this}let A=Math.sqrt((p-v)*(p-v)+(m-E)*(m-E)+(h-f)*(h-f));return Math.abs(A)<.001&&(A=1),this.x=(p-v)/A,this.y=(m-E)/A,this.z=(h-f)/A,this.w=Math.acos((l+_+u-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Fe(this.x,e.x,t.x),this.y=Fe(this.y,e.y,t.y),this.z=Fe(this.z,e.z,t.z),this.w=Fe(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Fe(this.x,e,t),this.y=Fe(this.y,e,t),this.z=Fe(this.z,e,t),this.w=Fe(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Fe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Fa.prototype.isVector4=!0;let tt=Fa;class wc extends Gn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Rt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new tt(0,0,e,t),this.scissorTest=!1,this.viewport=new tt(0,0,e,t),this.textures=[];const s={width:e,height:t,depth:n.depth},r=new Pt(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:Rt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new ba(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class on extends wc{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class ml extends Pt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=St,this.minFilter=St,this.wrapR=vn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Cc extends Pt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=St,this.minFilter=St,this.wrapR=vn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Ls=class Ls{constructor(e,t,n,s,r,a,o,c,l,f,m,h,_,v,E,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l,f,m,h,_,v,E,p)}set(e,t,n,s,r,a,o,c,l,f,m,h,_,v,E,p){const u=this.elements;return u[0]=e,u[4]=t,u[8]=n,u[12]=s,u[1]=r,u[5]=a,u[9]=o,u[13]=c,u[2]=l,u[6]=f,u[10]=m,u[14]=h,u[3]=_,u[7]=v,u[11]=E,u[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ls().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,n=e.elements,s=1/ri.setFromMatrixColumn(e,0).length(),r=1/ri.setFromMatrixColumn(e,1).length(),a=1/ri.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),f=Math.cos(r),m=Math.sin(r);if(e.order==="XYZ"){const h=a*f,_=a*m,v=o*f,E=o*m;t[0]=c*f,t[4]=-c*m,t[8]=l,t[1]=_+v*l,t[5]=h-E*l,t[9]=-o*c,t[2]=E-h*l,t[6]=v+_*l,t[10]=a*c}else if(e.order==="YXZ"){const h=c*f,_=c*m,v=l*f,E=l*m;t[0]=h+E*o,t[4]=v*o-_,t[8]=a*l,t[1]=a*m,t[5]=a*f,t[9]=-o,t[2]=_*o-v,t[6]=E+h*o,t[10]=a*c}else if(e.order==="ZXY"){const h=c*f,_=c*m,v=l*f,E=l*m;t[0]=h-E*o,t[4]=-a*m,t[8]=v+_*o,t[1]=_+v*o,t[5]=a*f,t[9]=E-h*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const h=a*f,_=a*m,v=o*f,E=o*m;t[0]=c*f,t[4]=v*l-_,t[8]=h*l+E,t[1]=c*m,t[5]=E*l+h,t[9]=_*l-v,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const h=a*c,_=a*l,v=o*c,E=o*l;t[0]=c*f,t[4]=E-h*m,t[8]=v*m+_,t[1]=m,t[5]=a*f,t[9]=-o*f,t[2]=-l*f,t[6]=_*m+v,t[10]=h-E*m}else if(e.order==="XZY"){const h=a*c,_=a*l,v=o*c,E=o*l;t[0]=c*f,t[4]=-m,t[8]=l*f,t[1]=h*m+E,t[5]=a*f,t[9]=_*m-v,t[2]=v*m-_,t[6]=o*f,t[10]=E*m+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Pc,e,Dc)}lookAt(e,t,n){const s=this.elements;return Bt.subVectors(e,t),Bt.lengthSq()===0&&(Bt.z=1),Bt.normalize(),Rn.crossVectors(n,Bt),Rn.lengthSq()===0&&(Math.abs(n.z)===1?Bt.x+=1e-4:Bt.z+=1e-4,Bt.normalize(),Rn.crossVectors(n,Bt)),Rn.normalize(),Ki.crossVectors(Bt,Rn),s[0]=Rn.x,s[4]=Ki.x,s[8]=Bt.x,s[1]=Rn.y,s[5]=Ki.y,s[9]=Bt.y,s[2]=Rn.z,s[6]=Ki.z,s[10]=Bt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],f=n[1],m=n[5],h=n[9],_=n[13],v=n[2],E=n[6],p=n[10],u=n[14],A=n[3],w=n[7],M=n[11],T=n[15],b=s[0],R=s[4],g=s[8],y=s[12],L=s[1],C=s[5],U=s[9],X=s[13],Z=s[2],O=s[6],Y=s[10],V=s[14],J=s[3],j=s[7],he=s[11],pe=s[15];return r[0]=a*b+o*L+c*Z+l*J,r[4]=a*R+o*C+c*O+l*j,r[8]=a*g+o*U+c*Y+l*he,r[12]=a*y+o*X+c*V+l*pe,r[1]=f*b+m*L+h*Z+_*J,r[5]=f*R+m*C+h*O+_*j,r[9]=f*g+m*U+h*Y+_*he,r[13]=f*y+m*X+h*V+_*pe,r[2]=v*b+E*L+p*Z+u*J,r[6]=v*R+E*C+p*O+u*j,r[10]=v*g+E*U+p*Y+u*he,r[14]=v*y+E*X+p*V+u*pe,r[3]=A*b+w*L+M*Z+T*J,r[7]=A*R+w*C+M*O+T*j,r[11]=A*g+w*U+M*Y+T*he,r[15]=A*y+w*X+M*V+T*pe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],f=e[2],m=e[6],h=e[10],_=e[14],v=e[3],E=e[7],p=e[11],u=e[15],A=c*_-l*h,w=o*_-l*m,M=o*h-c*m,T=a*_-l*f,b=a*h-c*f,R=a*m-o*f;return t*(E*A-p*w+u*M)-n*(v*A-p*T+u*b)+s*(v*w-E*T+u*R)-r*(v*M-E*b+p*R)}determinantAffine(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],a=e[5],o=e[9],c=e[2],l=e[6],f=e[10];return t*(a*f-o*l)-n*(r*f-o*c)+s*(r*l-a*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],f=e[8],m=e[9],h=e[10],_=e[11],v=e[12],E=e[13],p=e[14],u=e[15],A=t*o-n*a,w=t*c-s*a,M=t*l-r*a,T=n*c-s*o,b=n*l-r*o,R=s*l-r*c,g=f*E-m*v,y=f*p-h*v,L=f*u-_*v,C=m*p-h*E,U=m*u-_*E,X=h*u-_*p,Z=A*X-w*U+M*C+T*L-b*y+R*g;if(Z===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const O=1/Z;return e[0]=(o*X-c*U+l*C)*O,e[1]=(s*U-n*X-r*C)*O,e[2]=(E*R-p*b+u*T)*O,e[3]=(h*b-m*R-_*T)*O,e[4]=(c*L-a*X-l*y)*O,e[5]=(t*X-s*L+r*y)*O,e[6]=(p*M-v*R-u*w)*O,e[7]=(f*R-h*M+_*w)*O,e[8]=(a*U-o*L+l*g)*O,e[9]=(n*L-t*U-r*g)*O,e[10]=(v*b-E*M+u*A)*O,e[11]=(m*M-f*b-_*A)*O,e[12]=(o*y-a*C-c*g)*O,e[13]=(t*C-n*y+s*g)*O,e[14]=(E*w-v*T-p*A)*O,e[15]=(f*T-m*w+h*A)*O,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,c=e.z,l=r*a,f=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,f*o+n,f*c-s*a,0,l*c-s*o,f*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,f=a+a,m=o+o,h=r*l,_=r*f,v=r*m,E=a*f,p=a*m,u=o*m,A=c*l,w=c*f,M=c*m,T=n.x,b=n.y,R=n.z;return s[0]=(1-(E+u))*T,s[1]=(_+M)*T,s[2]=(v-w)*T,s[3]=0,s[4]=(_-M)*b,s[5]=(1-(h+u))*b,s[6]=(p+A)*b,s[7]=0,s[8]=(v+w)*R,s[9]=(p-A)*R,s[10]=(1-(h+E))*R,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];const r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=ri.set(s[0],s[1],s[2]).length();const o=ri.set(s[4],s[5],s[6]).length(),c=ri.set(s[8],s[9],s[10]).length();r<0&&(a=-a),Xt.copy(this);const l=1/a,f=1/o,m=1/c;return Xt.elements[0]*=l,Xt.elements[1]*=l,Xt.elements[2]*=l,Xt.elements[4]*=f,Xt.elements[5]*=f,Xt.elements[6]*=f,Xt.elements[8]*=m,Xt.elements[9]*=m,Xt.elements[10]*=m,t.setFromRotationMatrix(Xt),n.x=a,n.y=o,n.z=c,this}makePerspective(e,t,n,s,r,a,o=rn,c=!1){const l=this.elements,f=2*r/(t-e),m=2*r/(n-s),h=(t+e)/(t-e),_=(n+s)/(n-s);let v,E;if(c)v=r/(a-r),E=a*r/(a-r);else if(o===rn)v=-(a+r)/(a-r),E=-2*a*r/(a-r);else if(o===Gi)v=-a/(a-r),E=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=f,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=m,l[9]=_,l[13]=0,l[2]=0,l[6]=0,l[10]=v,l[14]=E,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=rn,c=!1){const l=this.elements,f=2/(t-e),m=2/(n-s),h=-(t+e)/(t-e),_=-(n+s)/(n-s);let v,E;if(c)v=1/(a-r),E=a/(a-r);else if(o===rn)v=-2/(a-r),E=-(a+r)/(a-r);else if(o===Gi)v=-1/(a-r),E=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=f,l[4]=0,l[8]=0,l[12]=h,l[1]=0,l[5]=m,l[9]=0,l[13]=_,l[2]=0,l[6]=0,l[10]=v,l[14]=E,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};Ls.prototype.isMatrix4=!0;let nt=Ls;const ri=new F,Xt=new nt,Pc=new F(0,0,0),Dc=new F(1,1,1),Rn=new F,Ki=new F,Bt=new F,ro=new nt,ao=new Bn;class zn{constructor(e=0,t=0,n=0,s=zn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],f=s[9],m=s[2],h=s[6],_=s[10];switch(t){case"XYZ":this._y=Math.asin(Fe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-f,_),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(h,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Fe(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(o,_),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-m,r),this._z=0);break;case"ZXY":this._x=Math.asin(Fe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-m,_),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Fe(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(h,_),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Fe(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-f,l),this._y=Math.atan2(-m,r)):(this._x=0,this._y=Math.atan2(o,_));break;case"XZY":this._z=Math.asin(-Fe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-f,_),this._y=0);break;default:Re("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return ro.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ro,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ao.setFromEuler(this),this.setFromQuaternion(ao,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}zn.DEFAULT_ORDER="XYZ";class Ta{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Lc=0;const oo=new F,ai=new Bn,un=new nt,Zi=new F,Pi=new F,Ic=new F,Uc=new Bn,lo=new F(1,0,0),co=new F(0,1,0),ho=new F(0,0,1),uo={type:"added"},Nc={type:"removed"},oi={type:"childadded",child:null},Ys={type:"childremoved",child:null};class wt extends Gn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Lc++}),this.uuid=Vi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=wt.DEFAULT_UP.clone();const e=new F,t=new zn,n=new Bn,s=new F(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new nt},normalMatrix:{value:new Pe}}),this.matrix=new nt,this.matrixWorld=new nt,this.matrixAutoUpdate=wt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ta,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ai.setFromAxisAngle(e,t),this.quaternion.multiply(ai),this}rotateOnWorldAxis(e,t){return ai.setFromAxisAngle(e,t),this.quaternion.premultiply(ai),this}rotateX(e){return this.rotateOnAxis(lo,e)}rotateY(e){return this.rotateOnAxis(co,e)}rotateZ(e){return this.rotateOnAxis(ho,e)}translateOnAxis(e,t){return oo.copy(e).applyQuaternion(this.quaternion),this.position.add(oo.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(lo,e)}translateY(e){return this.translateOnAxis(co,e)}translateZ(e){return this.translateOnAxis(ho,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(un.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Zi.copy(e):Zi.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Pi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?un.lookAt(Pi,Zi,this.up):un.lookAt(Zi,Pi,this.up),this.quaternion.setFromRotationMatrix(un),s&&(un.extractRotation(s.matrixWorld),ai.setFromRotationMatrix(un),this.quaternion.premultiply(ai.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ge("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(uo),oi.child=e,this.dispatchEvent(oi),oi.child=null):Ge("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Nc),Ys.child=e,this.dispatchEvent(Ys),Ys.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),un.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),un.multiply(e.parent.matrixWorld)),e.applyMatrix4(un),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(uo),oi.child=e,this.dispatchEvent(oi),oi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Pi,e,Ic),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Pi,Uc,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){const r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,f=c.length;l<f;l++){const m=c[l];r(e.shapes,m)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];s.animations.push(r(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),f=a(e.images),m=a(e.shapes),h=a(e.skeletons),_=a(e.animations),v=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),f.length>0&&(n.images=f),m.length>0&&(n.shapes=m),h.length>0&&(n.skeletons=h),_.length>0&&(n.animations=_),v.length>0&&(n.nodes=v)}return n.object=s,n;function a(o){const c=[];for(const l in o){const f=o[l];delete f.metadata,c.push(f)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}wt.DEFAULT_UP=new F(0,1,0);wt.DEFAULT_MATRIX_AUTO_UPDATE=!0;wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Qn extends wt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Fc={type:"move"};class qs{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Qn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Qn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Qn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const E of e.hand.values()){const p=t.getJointPose(E,n),u=this._getHandJoint(l,E);p!==null&&(u.matrix.fromArray(p.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=p.radius),u.visible=p!==null}const f=l.joints["index-finger-tip"],m=l.joints["thumb-tip"],h=f.position.distanceTo(m.position),_=.02,v=.005;l.inputState.pinching&&h>_+v?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&h<=_-v&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Fc)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Qn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const _l={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},wn={h:0,s:0,l:0},$i={h:0,s:0,l:0};function Ks(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Be{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=kt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ze.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=ze.workingColorSpace){return this.r=e,this.g=t,this.b=n,ze.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=ze.workingColorSpace){if(e=Ec(e,1),t=Fe(t,0,1),n=Fe(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Ks(a,r,e+1/3),this.g=Ks(a,r,e),this.b=Ks(a,r,e-1/3)}return ze.colorSpaceToWorking(this,s),this}setStyle(e,t=kt){function n(r){r!==void 0&&parseFloat(r)<1&&Re("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Re("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Re("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=kt){const n=_l[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Re("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Sn(e.r),this.g=Sn(e.g),this.b=Sn(e.b),this}copyLinearToSRGB(e){return this.r=yi(e.r),this.g=yi(e.g),this.b=yi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=kt){return ze.workingToColorSpace(bt.copy(this),e),Math.round(Fe(bt.r*255,0,255))*65536+Math.round(Fe(bt.g*255,0,255))*256+Math.round(Fe(bt.b*255,0,255))}getHexString(e=kt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ze.workingColorSpace){ze.workingToColorSpace(bt.copy(this),t);const n=bt.r,s=bt.g,r=bt.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let c,l;const f=(o+a)/2;if(o===a)c=0,l=0;else{const m=a-o;switch(l=f<=.5?m/(a+o):m/(2-a-o),a){case n:c=(s-r)/m+(s<r?6:0);break;case s:c=(r-n)/m+2;break;case r:c=(n-s)/m+4;break}c/=6}return e.h=c,e.s=l,e.l=f,e}getRGB(e,t=ze.workingColorSpace){return ze.workingToColorSpace(bt.copy(this),t),e.r=bt.r,e.g=bt.g,e.b=bt.b,e}getStyle(e=kt){ze.workingToColorSpace(bt.copy(this),e);const t=bt.r,n=bt.g,s=bt.b;return e!==kt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(wn),this.setHSL(wn.h+e,wn.s+t,wn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(wn),e.getHSL($i);const n=Vs(wn.h,$i.h,t),s=Vs(wn.s,$i.s,t),r=Vs(wn.l,$i.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const bt=new Be;Be.NAMES=_l;class Oc extends wt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new zn,this.environmentIntensity=1,this.environmentRotation=new zn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Yt=new F,dn=new F,Zs=new F,fn=new F,li=new F,ci=new F,fo=new F,$s=new F,Js=new F,Qs=new F,js=new tt,er=new tt,tr=new tt;class Kt{constructor(e=new F,t=new F,n=new F){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Yt.subVectors(e,t),s.cross(Yt);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Yt.subVectors(s,t),dn.subVectors(n,t),Zs.subVectors(e,t);const a=Yt.dot(Yt),o=Yt.dot(dn),c=Yt.dot(Zs),l=dn.dot(dn),f=dn.dot(Zs),m=a*l-o*o;if(m===0)return r.set(0,0,0),null;const h=1/m,_=(l*c-o*f)*h,v=(a*f-o*c)*h;return r.set(1-_-v,v,_)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,fn)===null?!1:fn.x>=0&&fn.y>=0&&fn.x+fn.y<=1}static getInterpolation(e,t,n,s,r,a,o,c){return this.getBarycoord(e,t,n,s,fn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,fn.x),c.addScaledVector(a,fn.y),c.addScaledVector(o,fn.z),c)}static getInterpolatedAttribute(e,t,n,s,r,a){return js.setScalar(0),er.setScalar(0),tr.setScalar(0),js.fromBufferAttribute(e,t),er.fromBufferAttribute(e,n),tr.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(js,r.x),a.addScaledVector(er,r.y),a.addScaledVector(tr,r.z),a}static isFrontFacing(e,t,n,s){return Yt.subVectors(n,t),dn.subVectors(e,t),Yt.cross(dn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Yt.subVectors(this.c,this.b),dn.subVectors(this.a,this.b),Yt.cross(dn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Kt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Kt.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return Kt.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return Kt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Kt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let a,o;li.subVectors(s,n),ci.subVectors(r,n),$s.subVectors(e,n);const c=li.dot($s),l=ci.dot($s);if(c<=0&&l<=0)return t.copy(n);Js.subVectors(e,s);const f=li.dot(Js),m=ci.dot(Js);if(f>=0&&m<=f)return t.copy(s);const h=c*m-f*l;if(h<=0&&c>=0&&f<=0)return a=c/(c-f),t.copy(n).addScaledVector(li,a);Qs.subVectors(e,r);const _=li.dot(Qs),v=ci.dot(Qs);if(v>=0&&_<=v)return t.copy(r);const E=_*l-c*v;if(E<=0&&l>=0&&v<=0)return o=l/(l-v),t.copy(n).addScaledVector(ci,o);const p=f*v-_*m;if(p<=0&&m-f>=0&&_-v>=0)return fo.subVectors(r,s),o=(m-f)/(m-f+(_-v)),t.copy(s).addScaledVector(fo,o);const u=1/(p+E+h);return a=E*u,o=h*u,t.copy(n).addScaledVector(li,a).addScaledVector(ci,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Hi{constructor(e=new F(1/0,1/0,1/0),t=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(qt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(qt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=qt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,qt):qt.fromBufferAttribute(r,a),qt.applyMatrix4(e.matrixWorld),this.expandByPoint(qt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ji.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ji.copy(n.boundingBox)),Ji.applyMatrix4(e.matrixWorld),this.union(Ji)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,qt),qt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Di),Qi.subVectors(this.max,Di),hi.subVectors(e.a,Di),ui.subVectors(e.b,Di),di.subVectors(e.c,Di),Cn.subVectors(ui,hi),Pn.subVectors(di,ui),Hn.subVectors(hi,di);let t=[0,-Cn.z,Cn.y,0,-Pn.z,Pn.y,0,-Hn.z,Hn.y,Cn.z,0,-Cn.x,Pn.z,0,-Pn.x,Hn.z,0,-Hn.x,-Cn.y,Cn.x,0,-Pn.y,Pn.x,0,-Hn.y,Hn.x,0];return!nr(t,hi,ui,di,Qi)||(t=[1,0,0,0,1,0,0,0,1],!nr(t,hi,ui,di,Qi))?!1:(ji.crossVectors(Cn,Pn),t=[ji.x,ji.y,ji.z],nr(t,hi,ui,di,Qi))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,qt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(qt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(pn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),pn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),pn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),pn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),pn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),pn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),pn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),pn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(pn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const pn=[new F,new F,new F,new F,new F,new F,new F,new F],qt=new F,Ji=new Hi,hi=new F,ui=new F,di=new F,Cn=new F,Pn=new F,Hn=new F,Di=new F,Qi=new F,ji=new F,kn=new F;function nr(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){kn.fromArray(i,r);const o=s.x*Math.abs(kn.x)+s.y*Math.abs(kn.y)+s.z*Math.abs(kn.z),c=e.dot(kn),l=t.dot(kn),f=n.dot(kn);if(Math.max(-Math.max(c,l,f),Math.min(c,l,f))>o)return!1}return!0}const dt=new F,es=new we;let Bc=0;class ln extends Gn{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Bc++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Qa,this.updateRanges=[],this.gpuType=sn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)es.fromBufferAttribute(this,t),es.applyMatrix3(e),this.setXY(t,es.x,es.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)dt.fromBufferAttribute(this,t),dt.applyMatrix3(e),this.setXYZ(t,dt.x,dt.y,dt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)dt.fromBufferAttribute(this,t),dt.applyMatrix4(e),this.setXYZ(t,dt.x,dt.y,dt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)dt.fromBufferAttribute(this,t),dt.applyNormalMatrix(e),this.setXYZ(t,dt.x,dt.y,dt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)dt.fromBufferAttribute(this,t),dt.transformDirection(e),this.setXYZ(t,dt.x,dt.y,dt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Ci(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=It(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ci(t,this.array)),t}setX(e,t){return this.normalized&&(t=It(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ci(t,this.array)),t}setY(e,t){return this.normalized&&(t=It(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ci(t,this.array)),t}setZ(e,t){return this.normalized&&(t=It(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ci(t,this.array)),t}setW(e,t){return this.normalized&&(t=It(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=It(t,this.array),n=It(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=It(t,this.array),n=It(n,this.array),s=It(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=It(t,this.array),n=It(n,this.array),s=It(s,this.array),r=It(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Qa&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class gl extends ln{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class xl extends ln{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Dt extends ln{constructor(e,t,n){super(new Float32Array(e),t,n)}}const zc=new Hi,Li=new F,ir=new F;class Aa{constructor(e=new F,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):zc.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Li.subVectors(e,this.center);const t=Li.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Li,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ir.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Li.copy(e.center).add(ir)),this.expandByPoint(Li.copy(e.center).sub(ir))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Gc=0;const Ht=new nt,sr=new wt,fi=new F,zt=new Hi,Ii=new Hi,vt=new F;class $t extends Gn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Gc++}),this.uuid=Vi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(xc(e)?xl:gl)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Pe().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Ht.makeRotationFromQuaternion(e),this.applyMatrix4(Ht),this}rotateX(e){return Ht.makeRotationX(e),this.applyMatrix4(Ht),this}rotateY(e){return Ht.makeRotationY(e),this.applyMatrix4(Ht),this}rotateZ(e){return Ht.makeRotationZ(e),this.applyMatrix4(Ht),this}translate(e,t,n){return Ht.makeTranslation(e,t,n),this.applyMatrix4(Ht),this}scale(e,t,n){return Ht.makeScale(e,t,n),this.applyMatrix4(Ht),this}lookAt(e){return sr.lookAt(e),sr.updateMatrix(),this.applyMatrix4(sr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(fi).negate(),this.translate(fi.x,fi.y,fi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,r=e.length;s<r;s++){const a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Dt(n,3))}else{const n=Math.min(e.length,t.count);for(let s=0;s<n;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Re("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Hi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ge("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];zt.setFromBufferAttribute(r),this.morphTargetsRelative?(vt.addVectors(this.boundingBox.min,zt.min),this.boundingBox.expandByPoint(vt),vt.addVectors(this.boundingBox.max,zt.max),this.boundingBox.expandByPoint(vt)):(this.boundingBox.expandByPoint(zt.min),this.boundingBox.expandByPoint(zt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ge('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Aa);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ge("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(e){const n=this.boundingSphere.center;if(zt.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];Ii.setFromBufferAttribute(o),this.morphTargetsRelative?(vt.addVectors(zt.min,Ii.min),zt.expandByPoint(vt),vt.addVectors(zt.max,Ii.max),zt.expandByPoint(vt)):(zt.expandByPoint(Ii.min),zt.expandByPoint(Ii.max))}zt.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)vt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(vt));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],c=this.morphTargetsRelative;for(let l=0,f=o.count;l<f;l++)vt.fromBufferAttribute(o,l),c&&(fi.fromBufferAttribute(e,l),vt.add(fi)),s=Math.max(s,n.distanceToSquared(vt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Ge('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ge("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new ln(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));const o=[],c=[];for(let g=0;g<n.count;g++)o[g]=new F,c[g]=new F;const l=new F,f=new F,m=new F,h=new we,_=new we,v=new we,E=new F,p=new F;function u(g,y,L){l.fromBufferAttribute(n,g),f.fromBufferAttribute(n,y),m.fromBufferAttribute(n,L),h.fromBufferAttribute(r,g),_.fromBufferAttribute(r,y),v.fromBufferAttribute(r,L),f.sub(l),m.sub(l),_.sub(h),v.sub(h);const C=1/(_.x*v.y-v.x*_.y);isFinite(C)&&(E.copy(f).multiplyScalar(v.y).addScaledVector(m,-_.y).multiplyScalar(C),p.copy(m).multiplyScalar(_.x).addScaledVector(f,-v.x).multiplyScalar(C),o[g].add(E),o[y].add(E),o[L].add(E),c[g].add(p),c[y].add(p),c[L].add(p))}let A=this.groups;A.length===0&&(A=[{start:0,count:e.count}]);for(let g=0,y=A.length;g<y;++g){const L=A[g],C=L.start,U=L.count;for(let X=C,Z=C+U;X<Z;X+=3)u(e.getX(X+0),e.getX(X+1),e.getX(X+2))}const w=new F,M=new F,T=new F,b=new F;function R(g){T.fromBufferAttribute(s,g),b.copy(T);const y=o[g];w.copy(y),w.sub(T.multiplyScalar(T.dot(y))).normalize(),M.crossVectors(b,y);const C=M.dot(c[g])<0?-1:1;a.setXYZW(g,w.x,w.y,w.z,C)}for(let g=0,y=A.length;g<y;++g){const L=A[g],C=L.start,U=L.count;for(let X=C,Z=C+U;X<Z;X+=3)R(e.getX(X+0)),R(e.getX(X+1)),R(e.getX(X+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new ln(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,_=n.count;h<_;h++)n.setXYZ(h,0,0,0);const s=new F,r=new F,a=new F,o=new F,c=new F,l=new F,f=new F,m=new F;if(e)for(let h=0,_=e.count;h<_;h+=3){const v=e.getX(h+0),E=e.getX(h+1),p=e.getX(h+2);s.fromBufferAttribute(t,v),r.fromBufferAttribute(t,E),a.fromBufferAttribute(t,p),f.subVectors(a,r),m.subVectors(s,r),f.cross(m),o.fromBufferAttribute(n,v),c.fromBufferAttribute(n,E),l.fromBufferAttribute(n,p),o.add(f),c.add(f),l.add(f),n.setXYZ(v,o.x,o.y,o.z),n.setXYZ(E,c.x,c.y,c.z),n.setXYZ(p,l.x,l.y,l.z)}else for(let h=0,_=t.count;h<_;h+=3)s.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),f.subVectors(a,r),m.subVectors(s,r),f.cross(m),n.setXYZ(h+0,f.x,f.y,f.z),n.setXYZ(h+1,f.x,f.y,f.z),n.setXYZ(h+2,f.x,f.y,f.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)vt.fromBufferAttribute(e,t),vt.normalize(),e.setXYZ(t,vt.x,vt.y,vt.z)}toNonIndexed(){function e(o,c){const l=o.array,f=o.itemSize,m=o.normalized,h=new l.constructor(c.length*f);let _=0,v=0;for(let E=0,p=c.length;E<p;E++){o.isInterleavedBufferAttribute?_=c[E]*o.data.stride+o.offset:_=c[E]*f;for(let u=0;u<f;u++)h[v++]=l[_++]}return new ln(h,f,m)}if(this.index===null)return Re("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new $t,n=this.index.array,s=this.attributes;for(const o in s){const c=s[o],l=e(c,n);t.setAttribute(o,l)}const r=this.morphAttributes;for(const o in r){const c=[],l=r[o];for(let f=0,m=l.length;f<m;f++){const h=l[f],_=e(h,n);c.push(_)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],f=[];for(let m=0,h=l.length;m<h;m++){const _=l[m];f.push(_.toJSON(e.data))}f.length>0&&(s[c]=f,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const s=e.attributes;for(const l in s){const f=s[l];this.setAttribute(l,f.clone(t))}const r=e.morphAttributes;for(const l in r){const f=[],m=r[l];for(let h=0,_=m.length;h<_;h++)f.push(m[h].clone(t));this.morphAttributes[l]=f}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,f=a.length;l<f;l++){const m=a[l];this.addGroup(m.start,m.count,m.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}let Vc=0;class ki extends Gn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Vc++}),this.uuid=Vi(),this.name="",this.type="Material",this.blending=Si,this.side=On,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Er,this.blendDst=yr,this.blendEquation=Kn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Be(0,0,0),this.blendAlpha=0,this.depthFunc=bi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ja,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ii,this.stencilZFail=ii,this.stencilZPass=ii,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){Re(`Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Re(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Si&&(n.blending=this.blending),this.side!==On&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Er&&(n.blendSrc=this.blendSrc),this.blendDst!==yr&&(n.blendDst=this.blendDst),this.blendEquation!==Kn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==bi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ja&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ii&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ii&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ii&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const c=r[o];delete c.metadata,a.push(c)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Be().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new we().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new we().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const mn=new F,rr=new F,ts=new F,Dn=new F,ar=new F,ns=new F,or=new F;class Ra{constructor(e=new F,t=new F(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,mn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=mn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(mn.copy(this.origin).addScaledVector(this.direction,t),mn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){rr.copy(e).add(t).multiplyScalar(.5),ts.copy(t).sub(e).normalize(),Dn.copy(this.origin).sub(rr);const r=e.distanceTo(t)*.5,a=-this.direction.dot(ts),o=Dn.dot(this.direction),c=-Dn.dot(ts),l=Dn.lengthSq(),f=Math.abs(1-a*a);let m,h,_,v;if(f>0)if(m=a*c-o,h=a*o-c,v=r*f,m>=0)if(h>=-v)if(h<=v){const E=1/f;m*=E,h*=E,_=m*(m+a*h+2*o)+h*(a*m+h+2*c)+l}else h=r,m=Math.max(0,-(a*h+o)),_=-m*m+h*(h+2*c)+l;else h=-r,m=Math.max(0,-(a*h+o)),_=-m*m+h*(h+2*c)+l;else h<=-v?(m=Math.max(0,-(-a*r+o)),h=m>0?-r:Math.min(Math.max(-r,-c),r),_=-m*m+h*(h+2*c)+l):h<=v?(m=0,h=Math.min(Math.max(-r,-c),r),_=h*(h+2*c)+l):(m=Math.max(0,-(a*r+o)),h=m>0?r:Math.min(Math.max(-r,-c),r),_=-m*m+h*(h+2*c)+l);else h=a>0?-r:r,m=Math.max(0,-(a*h+o)),_=-m*m+h*(h+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,m),s&&s.copy(rr).addScaledVector(ts,h),_}intersectSphere(e,t){mn.subVectors(e.center,this.origin);const n=mn.dot(this.direction),s=mn.dot(mn)-n*n,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,c;const l=1/this.direction.x,f=1/this.direction.y,m=1/this.direction.z,h=this.origin;return l>=0?(n=(e.min.x-h.x)*l,s=(e.max.x-h.x)*l):(n=(e.max.x-h.x)*l,s=(e.min.x-h.x)*l),f>=0?(r=(e.min.y-h.y)*f,a=(e.max.y-h.y)*f):(r=(e.max.y-h.y)*f,a=(e.min.y-h.y)*f),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),m>=0?(o=(e.min.z-h.z)*m,c=(e.max.z-h.z)*m):(o=(e.max.z-h.z)*m,c=(e.min.z-h.z)*m),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,mn)!==null}intersectTriangle(e,t,n,s,r){ar.subVectors(t,e),ns.subVectors(n,e),or.crossVectors(ar,ns);let a=this.direction.dot(or),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Dn.subVectors(this.origin,e);const c=o*this.direction.dot(ns.crossVectors(Dn,ns));if(c<0)return null;const l=o*this.direction.dot(ar.cross(Dn));if(l<0||c+l>a)return null;const f=-o*Dn.dot(or);return f<0?null:this.at(f/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class wa extends ki{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zn,this.combine=jo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const po=new nt,Wn=new Ra,is=new Aa,mo=new F,ss=new F,rs=new F,as=new F,lr=new F,os=new F,_o=new F,ls=new F;class At extends wt{constructor(e=new $t,t=new wa){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){os.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const f=o[c],m=r[c];f!==0&&(lr.fromBufferAttribute(m,e),a?os.addScaledVector(lr,f):os.addScaledVector(lr.sub(t),f))}t.add(os)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),is.copy(n.boundingSphere),is.applyMatrix4(r),Wn.copy(e.ray).recast(e.near),!(is.containsPoint(Wn.origin)===!1&&(Wn.intersectSphere(is,mo)===null||Wn.origin.distanceToSquared(mo)>(e.far-e.near)**2))&&(po.copy(r).invert(),Wn.copy(e.ray).applyMatrix4(po),!(n.boundingBox!==null&&Wn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Wn)))}_computeIntersections(e,t,n){let s;const r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,f=r.attributes.uv1,m=r.attributes.normal,h=r.groups,_=r.drawRange;if(o!==null)if(Array.isArray(a))for(let v=0,E=h.length;v<E;v++){const p=h[v],u=a[p.materialIndex],A=Math.max(p.start,_.start),w=Math.min(o.count,Math.min(p.start+p.count,_.start+_.count));for(let M=A,T=w;M<T;M+=3){const b=o.getX(M),R=o.getX(M+1),g=o.getX(M+2);s=cs(this,u,e,n,l,f,m,b,R,g),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{const v=Math.max(0,_.start),E=Math.min(o.count,_.start+_.count);for(let p=v,u=E;p<u;p+=3){const A=o.getX(p),w=o.getX(p+1),M=o.getX(p+2);s=cs(this,a,e,n,l,f,m,A,w,M),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let v=0,E=h.length;v<E;v++){const p=h[v],u=a[p.materialIndex],A=Math.max(p.start,_.start),w=Math.min(c.count,Math.min(p.start+p.count,_.start+_.count));for(let M=A,T=w;M<T;M+=3){const b=M,R=M+1,g=M+2;s=cs(this,u,e,n,l,f,m,b,R,g),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{const v=Math.max(0,_.start),E=Math.min(c.count,_.start+_.count);for(let p=v,u=E;p<u;p+=3){const A=p,w=p+1,M=p+2;s=cs(this,a,e,n,l,f,m,A,w,M),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}}function Hc(i,e,t,n,s,r,a,o){let c;if(e.side===Ft?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,e.side===On,o),c===null)return null;ls.copy(o),ls.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(ls);return l<t.near||l>t.far?null:{distance:l,point:ls.clone(),object:i}}function cs(i,e,t,n,s,r,a,o,c,l){i.getVertexPosition(o,ss),i.getVertexPosition(c,rs),i.getVertexPosition(l,as);const f=Hc(i,e,t,n,ss,rs,as,_o);if(f){const m=new F;Kt.getBarycoord(_o,ss,rs,as,m),s&&(f.uv=Kt.getInterpolatedAttribute(s,o,c,l,m,new we)),r&&(f.uv1=Kt.getInterpolatedAttribute(r,o,c,l,m,new we)),a&&(f.normal=Kt.getInterpolatedAttribute(a,o,c,l,m,new F),f.normal.dot(n.direction)>0&&f.normal.multiplyScalar(-1));const h={a:o,b:c,c:l,normal:new F,materialIndex:0};Kt.getNormal(ss,rs,as,h.normal),f.face=h,f.barycoord=m}return f}class kc extends Pt{constructor(e=null,t=1,n=1,s,r,a,o,c,l=St,f=St,m,h){super(null,a,o,c,l,f,s,r,m,h),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const cr=new F,Wc=new F,Xc=new Pe;class In{constructor(e=new F(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=cr.subVectors(n,t).cross(Wc.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){const s=e.delta(cr),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Xc.getNormalMatrix(e),s=this.coplanarPoint(cr).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Xn=new Aa,Yc=new we(.5,.5),hs=new F;class Ca{constructor(e=new In,t=new In,n=new In,s=new In,r=new In,a=new In){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=rn,n=!1){const s=this.planes,r=e.elements,a=r[0],o=r[1],c=r[2],l=r[3],f=r[4],m=r[5],h=r[6],_=r[7],v=r[8],E=r[9],p=r[10],u=r[11],A=r[12],w=r[13],M=r[14],T=r[15];if(s[0].setComponents(l-a,_-f,u-v,T-A).normalize(),s[1].setComponents(l+a,_+f,u+v,T+A).normalize(),s[2].setComponents(l+o,_+m,u+E,T+w).normalize(),s[3].setComponents(l-o,_-m,u-E,T-w).normalize(),n)s[4].setComponents(c,h,p,M).normalize(),s[5].setComponents(l-c,_-h,u-p,T-M).normalize();else if(s[4].setComponents(l-c,_-h,u-p,T-M).normalize(),t===rn)s[5].setComponents(l+c,_+h,u+p,T+M).normalize();else if(t===Gi)s[5].setComponents(c,h,p,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Xn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Xn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Xn)}intersectsSprite(e){Xn.center.set(0,0,0);const t=Yc.distanceTo(e.center);return Xn.radius=.7071067811865476+t,Xn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Xn)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(hs.x=s.normal.x>0?e.max.x:e.min.x,hs.y=s.normal.y>0?e.max.y:e.min.y,hs.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(hs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class vl extends Pt{constructor(e=[],t=jn,n,s,r,a,o,c,l,f){super(e,t,n,s,r,a,o,c,l,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ai extends Pt{constructor(e,t,n=cn,s,r,a,o=St,c=St,l,f=yn,m=1){if(f!==yn&&f!==Jn)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:t,depth:m};super(h,s,r,a,o,c,f,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ba(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class qc extends Ai{constructor(e,t=cn,n=jn,s,r,a=St,o=St,c,l=yn){const f={width:e,height:e,depth:1},m=[f,f,f,f,f,f];super(e,e,t,n,s,r,a,o,c,l),this.image=m,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Ml extends Pt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Fn extends $t{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const c=[],l=[],f=[],m=[];let h=0,_=0;v("z","y","x",-1,-1,n,t,e,a,r,0),v("z","y","x",1,-1,n,t,-e,a,r,1),v("x","z","y",1,1,e,n,t,s,a,2),v("x","z","y",1,-1,e,n,-t,s,a,3),v("x","y","z",1,-1,e,t,n,s,r,4),v("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new Dt(l,3)),this.setAttribute("normal",new Dt(f,3)),this.setAttribute("uv",new Dt(m,2));function v(E,p,u,A,w,M,T,b,R,g,y){const L=M/R,C=T/g,U=M/2,X=T/2,Z=b/2,O=R+1,Y=g+1;let V=0,J=0;const j=new F;for(let he=0;he<Y;he++){const pe=he*C-X;for(let ge=0;ge<O;ge++){const ke=ge*L-U;j[E]=ke*A,j[p]=pe*w,j[u]=Z,l.push(j.x,j.y,j.z),j[E]=0,j[p]=0,j[u]=b>0?1:-1,f.push(j.x,j.y,j.z),m.push(ge/R),m.push(1-he/g),V+=1}}for(let he=0;he<g;he++)for(let pe=0;pe<R;pe++){const ge=h+pe+O*he,ke=h+pe+O*(he+1),it=h+(pe+1)+O*(he+1),We=h+(pe+1)+O*he;c.push(ge,ke,We),c.push(ke,it,We),J+=6}o.addGroup(_,J,y),_+=J,h+=V}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Ds extends $t{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const f=[],m=[],h=[],_=[];let v=0;const E=[],p=n/2;let u=0;A(),a===!1&&(e>0&&w(!0),t>0&&w(!1)),this.setIndex(f),this.setAttribute("position",new Dt(m,3)),this.setAttribute("normal",new Dt(h,3)),this.setAttribute("uv",new Dt(_,2));function A(){const M=new F,T=new F;let b=0;const R=(t-e)/n;for(let g=0;g<=r;g++){const y=[],L=g/r,C=L*(t-e)+e;for(let U=0;U<=s;U++){const X=U/s,Z=X*c+o,O=Math.sin(Z),Y=Math.cos(Z);T.x=C*O,T.y=-L*n+p,T.z=C*Y,m.push(T.x,T.y,T.z),M.set(O,R,Y).normalize(),h.push(M.x,M.y,M.z),_.push(X,1-L),y.push(v++)}E.push(y)}for(let g=0;g<s;g++)for(let y=0;y<r;y++){const L=E[y][g],C=E[y+1][g],U=E[y+1][g+1],X=E[y][g+1];(e>0||y!==0)&&(f.push(L,C,X),b+=3),(t>0||y!==r-1)&&(f.push(C,U,X),b+=3)}l.addGroup(u,b,0),u+=b}function w(M){const T=v,b=new we,R=new F;let g=0;const y=M===!0?e:t,L=M===!0?1:-1;for(let U=1;U<=s;U++)m.push(0,p*L,0),h.push(0,L,0),_.push(.5,.5),v++;const C=v;for(let U=0;U<=s;U++){const Z=U/s*c+o,O=Math.cos(Z),Y=Math.sin(Z);R.x=y*Y,R.y=p*L,R.z=y*O,m.push(R.x,R.y,R.z),h.push(0,L,0),b.x=O*.5+.5,b.y=Y*.5*L+.5,_.push(b.x,b.y),v++}for(let U=0;U<s;U++){const X=T+U,Z=C+U;M===!0?f.push(Z,Z+1,X):f.push(Z+1,Z,X),g+=3}l.addGroup(u,g,M===!0?1:2),u+=g}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ds(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Wi extends $t{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(n),c=Math.floor(s),l=o+1,f=c+1,m=e/o,h=t/c,_=[],v=[],E=[],p=[];for(let u=0;u<f;u++){const A=u*h-a;for(let w=0;w<l;w++){const M=w*m-r;v.push(M,-A,0),E.push(0,0,1),p.push(w/o),p.push(1-u/c)}}for(let u=0;u<c;u++)for(let A=0;A<o;A++){const w=A+l*u,M=A+l*(u+1),T=A+1+l*(u+1),b=A+1+l*u;_.push(w,M,b),_.push(M,T,b)}this.setIndex(_),this.setAttribute("position",new Dt(v,3)),this.setAttribute("normal",new Dt(E,3)),this.setAttribute("uv",new Dt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wi(e.width,e.height,e.widthSegments,e.heightSegments)}}class Pa extends $t{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(a+o,Math.PI);let l=0;const f=[],m=new F,h=new F,_=[],v=[],E=[],p=[];for(let u=0;u<=n;u++){const A=[],w=u/n,M=a+w*o,T=e*Math.cos(M),b=Math.sqrt(e*e-T*T);let R=0;u===0&&a===0?R=.5/t:u===n&&c===Math.PI&&(R=-.5/t);for(let g=0;g<=t;g++){const y=g/t,L=s+y*r;m.x=-b*Math.cos(L),m.y=T,m.z=b*Math.sin(L),v.push(m.x,m.y,m.z),h.copy(m).normalize(),E.push(h.x,h.y,h.z),p.push(y+R,1-w),A.push(l++)}f.push(A)}for(let u=0;u<n;u++)for(let A=0;A<t;A++){const w=f[u][A+1],M=f[u][A],T=f[u+1][A],b=f[u+1][A+1];(u!==0||a>0)&&_.push(w,M,b),(u!==n-1||c<Math.PI)&&_.push(M,T,b)}this.setIndex(_),this.setAttribute("position",new Dt(v,3)),this.setAttribute("normal",new Dt(E,3)),this.setAttribute("uv",new Dt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Pa(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function Ri(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];if(go(s))s.isRenderTargetTexture?(Re("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(go(s[0])){const r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function Ct(i){const e={};for(let t=0;t<i.length;t++){const n=Ri(i[t]);for(const s in n)e[s]=n[s]}return e}function go(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Kc(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Sl(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ze.workingColorSpace}const Zc={clone:Ri,merge:Ct};var $c=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Jc=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class hn extends ki{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=$c,this.fragmentShader=Jc,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ri(e.uniforms),this.uniformsGroups=Kc(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const n in e.uniforms){const s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new Be().setHex(s.value);break;case"v2":this.uniforms[n].value=new we().fromArray(s.value);break;case"v3":this.uniforms[n].value=new F().fromArray(s.value);break;case"v4":this.uniforms[n].value=new tt().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Pe().fromArray(s.value);break;case"m4":this.uniforms[n].value=new nt().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class Qc extends hn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class ys extends ki{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Be(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Be(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ca,this.normalScale=new we(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class jc extends ys{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new we(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Fe(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Be(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Be(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Be(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class eh extends ki{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=hc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class th extends ki{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class El extends wt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Be(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const hr=new nt,xo=new F,vo=new F;class nh{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new we(512,512),this.mapType=Gt,this.map=null,this.mapPass=null,this.matrix=new nt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ca,this._frameExtents=new we(1,1),this._viewportCount=1,this._viewports=[new tt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;xo.setFromMatrixPosition(e.matrixWorld),t.position.copy(xo),vo.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(vo),t.updateMatrixWorld(),hr.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(hr,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===Gi||t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(hr)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const us=new F,ds=new Bn,en=new F;class yl extends wt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new nt,this.projectionMatrix=new nt,this.projectionMatrixInverse=new nt,this.coordinateSystem=rn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(us,ds,en),en.x===1&&en.y===1&&en.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(us,ds,en.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(us,ds,en),en.x===1&&en.y===1&&en.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(us,ds,en.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Ln=new F,Mo=new we,So=new we;class Wt extends yl{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ha*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Es*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ha*2*Math.atan(Math.tan(Es*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ln.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ln.x,Ln.y).multiplyScalar(-e/Ln.z),Ln.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ln.x,Ln.y).multiplyScalar(-e/Ln.z)}getViewSize(e,t){return this.getViewBounds(e,Mo,So),t.subVectors(So,Mo)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Es*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,t-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Da extends yl{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=s+t,c=s-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=f*this.view.offsetY,c=o-f*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class ih extends nh{constructor(){super(new Da(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ur extends El{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(wt.DEFAULT_UP),this.updateMatrix(),this.target=new wt,this.shadow=new ih}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class sh extends El{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const pi=-90,mi=1;class rh extends wt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Wt(pi,mi,e,t);s.layers=this.layers,this.add(s);const r=new Wt(pi,mi,e,t);r.layers=this.layers,this.add(r);const a=new Wt(pi,mi,e,t);a.layers=this.layers,this.add(a);const o=new Wt(pi,mi,e,t);o.layers=this.layers,this.add(o);const c=new Wt(pi,mi,e,t);c.layers=this.layers,this.add(c);const l=new Wt(pi,mi,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,c]=t;for(const l of t)this.remove(l);if(e===rn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Gi)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,c,l,f]=this.children,m=e.getRenderTarget(),h=e.getActiveCubeFace(),_=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const E=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let p=!1;e.isWebGLRenderer===!0?p=e.state.buffers.depth.getReversed():p=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,4,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),n.texture.generateMipmaps=E,e.setRenderTarget(n,5,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,f),e.setRenderTarget(m,h,_),e.xr.enabled=v,n.texture.needsPMREMUpdate=!0}}class ah extends Wt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Eo=new nt;class oh{constructor(e,t,n=0,s=1/0){this.ray=new Ra(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new Ta,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Ge("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Eo.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Eo),this}intersectObject(e,t=!0,n=[]){return ua(e,this,n,t),n.sort(yo),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)ua(e[s],this,n,t);return n.sort(yo),n}}function yo(i,e){return i.distance-e.distance}function ua(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let a=0,o=r.length;a<o;a++)ua(r[a],e,t,!0)}}class bo{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Fe(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Fe(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const Oa=class Oa{constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){const r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};Oa.prototype.isMatrix2=!0;let To=Oa;class lh extends Gn{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){Re("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function Ao(i,e,t,n){const s=ch(n);switch(t){case ul:return i*e;case fl:return i*e/s.components*s.byteLength;case va:return i*e/s.components*s.byteLength;case ei:return i*e*2/s.components*s.byteLength;case Ma:return i*e*2/s.components*s.byteLength;case dl:return i*e*3/s.components*s.byteLength;case Zt:return i*e*4/s.components*s.byteLength;case Sa:return i*e*4/s.components*s.byteLength;case xs:case vs:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ms:case Ss:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ur:case Fr:return Math.max(i,16)*Math.max(e,8)/4;case Ir:case Nr:return Math.max(i,8)*Math.max(e,8)/2;case Or:case Br:case Gr:case Vr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case zr:case As:case Hr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case kr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Wr:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Xr:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Yr:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case qr:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Kr:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Zr:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case $r:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Jr:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Qr:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case jr:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case ea:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case ta:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case na:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case ia:case sa:case ra:return Math.ceil(i/4)*Math.ceil(e/4)*16;case aa:case oa:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Rs:case la:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function ch(i){switch(i){case Gt:case ol:return{byteLength:1,components:1};case Bi:case ll:case En:return{byteLength:2,components:1};case ga:case xa:return{byteLength:2,components:4};case cn:case _a:case sn:return{byteLength:4,components:1};case cl:case hl:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:pa}}));typeof window<"u"&&(window.__THREE__?Re("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=pa);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function bl(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function hh(i){const e=new WeakMap;function t(o,c){const l=o.array,f=o.usage,m=l.byteLength,h=i.createBuffer();i.bindBuffer(c,h),i.bufferData(c,l,f),o.onUploadCallback();let _;if(l instanceof Float32Array)_=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)_=i.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?_=i.HALF_FLOAT:_=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)_=i.SHORT;else if(l instanceof Uint32Array)_=i.UNSIGNED_INT;else if(l instanceof Int32Array)_=i.INT;else if(l instanceof Int8Array)_=i.BYTE;else if(l instanceof Uint8Array)_=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)_=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:h,type:_,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:m}}function n(o,c,l){const f=c.array,m=c.updateRanges;if(i.bindBuffer(l,o),m.length===0)i.bufferSubData(l,0,f);else{m.sort((_,v)=>_.start-v.start);let h=0;for(let _=1;_<m.length;_++){const v=m[h],E=m[_];E.start<=v.start+v.count+1?v.count=Math.max(v.count,E.start+E.count-v.start):(++h,m[h]=E)}m.length=h+1;for(let _=0,v=m.length;_<v;_++){const E=m[_];i.bufferSubData(l,E.start*f.BYTES_PER_ELEMENT,f,E.start,E.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(i.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const f=e.get(o);(!f||f.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}var uh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,dh=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,fh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ph=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,mh=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,_h=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,gh=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,xh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,vh=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Mh=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Sh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Eh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,yh=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,bh=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Th=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Ah=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Rh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,wh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ch=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ph=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Dh=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Lh=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Ih=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Uh=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Nh=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Fh=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Oh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Bh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,zh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Gh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Vh="gl_FragColor = linearToOutputTexel( gl_FragColor );",Hh=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,kh=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Wh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Xh=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Yh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,qh=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Kh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Zh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,$h=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Jh=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Qh=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,jh=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,eu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,tu=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,nu=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,iu=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,su=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ru=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,au=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ou=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lu=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,cu=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,hu=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,uu=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,du=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,fu=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,pu=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,mu=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_u=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gu=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,xu=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,vu=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Mu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Su=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Eu=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,yu=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,bu=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Tu=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Au=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ru=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,wu=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Cu=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Pu=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Du=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Lu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Iu=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Uu=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Nu=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Fu=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ou=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Bu=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,zu=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Gu=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Vu=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Hu=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ku=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Wu=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Xu=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Yu=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,qu=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Ku=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Zu=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,$u=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Ju=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Qu=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,ju=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ed=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,td=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,nd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,id=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,sd=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,rd=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,ad=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,od=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ld=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,cd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,hd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ud=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,dd=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,pd=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,md=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_d=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gd=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,xd=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,vd=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Md=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Sd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ed=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yd=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,bd=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Td=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Ad=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Rd=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,wd=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Cd=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Pd=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Dd=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Ld=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Id=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ud=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Nd=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Fd=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Od=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Bd=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zd=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Gd=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Vd=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Hd=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,kd=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Wd=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ue={alphahash_fragment:uh,alphahash_pars_fragment:dh,alphamap_fragment:fh,alphamap_pars_fragment:ph,alphatest_fragment:mh,alphatest_pars_fragment:_h,aomap_fragment:gh,aomap_pars_fragment:xh,batching_pars_vertex:vh,batching_vertex:Mh,begin_vertex:Sh,beginnormal_vertex:Eh,bsdfs:yh,iridescence_fragment:bh,bumpmap_pars_fragment:Th,clipping_planes_fragment:Ah,clipping_planes_pars_fragment:Rh,clipping_planes_pars_vertex:wh,clipping_planes_vertex:Ch,color_fragment:Ph,color_pars_fragment:Dh,color_pars_vertex:Lh,color_vertex:Ih,common:Uh,cube_uv_reflection_fragment:Nh,defaultnormal_vertex:Fh,displacementmap_pars_vertex:Oh,displacementmap_vertex:Bh,emissivemap_fragment:zh,emissivemap_pars_fragment:Gh,colorspace_fragment:Vh,colorspace_pars_fragment:Hh,envmap_fragment:kh,envmap_common_pars_fragment:Wh,envmap_pars_fragment:Xh,envmap_pars_vertex:Yh,envmap_physical_pars_fragment:iu,envmap_vertex:qh,fog_vertex:Kh,fog_pars_vertex:Zh,fog_fragment:$h,fog_pars_fragment:Jh,gradientmap_pars_fragment:Qh,lightmap_pars_fragment:jh,lights_lambert_fragment:eu,lights_lambert_pars_fragment:tu,lights_pars_begin:nu,lights_toon_fragment:su,lights_toon_pars_fragment:ru,lights_phong_fragment:au,lights_phong_pars_fragment:ou,lights_physical_fragment:lu,lights_physical_pars_fragment:cu,lights_fragment_begin:hu,lights_fragment_maps:uu,lights_fragment_end:du,lightprobes_pars_fragment:fu,logdepthbuf_fragment:pu,logdepthbuf_pars_fragment:mu,logdepthbuf_pars_vertex:_u,logdepthbuf_vertex:gu,map_fragment:xu,map_pars_fragment:vu,map_particle_fragment:Mu,map_particle_pars_fragment:Su,metalnessmap_fragment:Eu,metalnessmap_pars_fragment:yu,morphinstance_vertex:bu,morphcolor_vertex:Tu,morphnormal_vertex:Au,morphtarget_pars_vertex:Ru,morphtarget_vertex:wu,normal_fragment_begin:Cu,normal_fragment_maps:Pu,normal_pars_fragment:Du,normal_pars_vertex:Lu,normal_vertex:Iu,normalmap_pars_fragment:Uu,clearcoat_normal_fragment_begin:Nu,clearcoat_normal_fragment_maps:Fu,clearcoat_pars_fragment:Ou,iridescence_pars_fragment:Bu,opaque_fragment:zu,packing:Gu,premultiplied_alpha_fragment:Vu,project_vertex:Hu,dithering_fragment:ku,dithering_pars_fragment:Wu,roughnessmap_fragment:Xu,roughnessmap_pars_fragment:Yu,shadowmap_pars_fragment:qu,shadowmap_pars_vertex:Ku,shadowmap_vertex:Zu,shadowmask_pars_fragment:$u,skinbase_vertex:Ju,skinning_pars_vertex:Qu,skinning_vertex:ju,skinnormal_vertex:ed,specularmap_fragment:td,specularmap_pars_fragment:nd,tonemapping_fragment:id,tonemapping_pars_fragment:sd,transmission_fragment:rd,transmission_pars_fragment:ad,uv_pars_fragment:od,uv_pars_vertex:ld,uv_vertex:cd,worldpos_vertex:hd,background_vert:ud,background_frag:dd,backgroundCube_vert:fd,backgroundCube_frag:pd,cube_vert:md,cube_frag:_d,depth_vert:gd,depth_frag:xd,distance_vert:vd,distance_frag:Md,equirect_vert:Sd,equirect_frag:Ed,linedashed_vert:yd,linedashed_frag:bd,meshbasic_vert:Td,meshbasic_frag:Ad,meshlambert_vert:Rd,meshlambert_frag:wd,meshmatcap_vert:Cd,meshmatcap_frag:Pd,meshnormal_vert:Dd,meshnormal_frag:Ld,meshphong_vert:Id,meshphong_frag:Ud,meshphysical_vert:Nd,meshphysical_frag:Fd,meshtoon_vert:Od,meshtoon_frag:Bd,points_vert:zd,points_frag:Gd,shadow_vert:Vd,shadow_frag:Hd,sprite_vert:kd,sprite_frag:Wd},ce={common:{diffuse:{value:new Be(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Pe},alphaMap:{value:null},alphaMapTransform:{value:new Pe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Pe}},envmap:{envMap:{value:null},envMapRotation:{value:new Pe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Pe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Pe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Pe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Pe},normalScale:{value:new we(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Pe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Pe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Pe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Pe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Be(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new F},probesMax:{value:new F},probesResolution:{value:new F}},points:{diffuse:{value:new Be(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Pe},alphaTest:{value:0},uvTransform:{value:new Pe}},sprite:{diffuse:{value:new Be(16777215)},opacity:{value:1},center:{value:new we(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Pe},alphaMap:{value:null},alphaMapTransform:{value:new Pe},alphaTest:{value:0}}},nn={basic:{uniforms:Ct([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.fog]),vertexShader:Ue.meshbasic_vert,fragmentShader:Ue.meshbasic_frag},lambert:{uniforms:Ct([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new Be(0)},envMapIntensity:{value:1}}]),vertexShader:Ue.meshlambert_vert,fragmentShader:Ue.meshlambert_frag},phong:{uniforms:Ct([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new Be(0)},specular:{value:new Be(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ue.meshphong_vert,fragmentShader:Ue.meshphong_frag},standard:{uniforms:Ct([ce.common,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.roughnessmap,ce.metalnessmap,ce.fog,ce.lights,{emissive:{value:new Be(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag},toon:{uniforms:Ct([ce.common,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.gradientmap,ce.fog,ce.lights,{emissive:{value:new Be(0)}}]),vertexShader:Ue.meshtoon_vert,fragmentShader:Ue.meshtoon_frag},matcap:{uniforms:Ct([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,{matcap:{value:null}}]),vertexShader:Ue.meshmatcap_vert,fragmentShader:Ue.meshmatcap_frag},points:{uniforms:Ct([ce.points,ce.fog]),vertexShader:Ue.points_vert,fragmentShader:Ue.points_frag},dashed:{uniforms:Ct([ce.common,ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ue.linedashed_vert,fragmentShader:Ue.linedashed_frag},depth:{uniforms:Ct([ce.common,ce.displacementmap]),vertexShader:Ue.depth_vert,fragmentShader:Ue.depth_frag},normal:{uniforms:Ct([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,{opacity:{value:1}}]),vertexShader:Ue.meshnormal_vert,fragmentShader:Ue.meshnormal_frag},sprite:{uniforms:Ct([ce.sprite,ce.fog]),vertexShader:Ue.sprite_vert,fragmentShader:Ue.sprite_frag},background:{uniforms:{uvTransform:{value:new Pe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ue.background_vert,fragmentShader:Ue.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Pe}},vertexShader:Ue.backgroundCube_vert,fragmentShader:Ue.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ue.cube_vert,fragmentShader:Ue.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ue.equirect_vert,fragmentShader:Ue.equirect_frag},distance:{uniforms:Ct([ce.common,ce.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ue.distance_vert,fragmentShader:Ue.distance_frag},shadow:{uniforms:Ct([ce.lights,ce.fog,{color:{value:new Be(0)},opacity:{value:1}}]),vertexShader:Ue.shadow_vert,fragmentShader:Ue.shadow_frag}};nn.physical={uniforms:Ct([nn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Pe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Pe},clearcoatNormalScale:{value:new we(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Pe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Pe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Pe},sheen:{value:0},sheenColor:{value:new Be(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Pe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Pe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Pe},transmissionSamplerSize:{value:new we},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Pe},attenuationDistance:{value:0},attenuationColor:{value:new Be(0)},specularColor:{value:new Be(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Pe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Pe},anisotropyVector:{value:new we},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Pe}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag};const fs={r:0,b:0,g:0},Xd=new nt,Tl=new Pe;Tl.set(-1,0,0,0,1,0,0,0,1);function Yd(i,e,t,n,s,r){const a=new Be(0);let o=s===!0?0:1,c,l,f=null,m=0,h=null;function _(A){let w=A.isScene===!0?A.background:null;if(w&&w.isTexture){const M=A.backgroundBlurriness>0;w=e.get(w,M)}return w}function v(A){let w=!1;const M=_(A);M===null?p(a,o):M&&M.isColor&&(p(M,1),w=!0);const T=i.xr.getEnvironmentBlendMode();T==="additive"?t.buffers.color.setClear(0,0,0,1,r):T==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||w)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function E(A,w){const M=_(w);M&&(M.isCubeTexture||M.mapping===Is)?(l===void 0&&(l=new At(new Fn(1,1,1),new hn({name:"BackgroundCubeMaterial",uniforms:Ri(nn.backgroundCube.uniforms),vertexShader:nn.backgroundCube.vertexShader,fragmentShader:nn.backgroundCube.fragmentShader,side:Ft,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(T,b,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=M,l.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Xd.makeRotationFromEuler(w.backgroundRotation)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Tl),l.material.toneMapped=ze.getTransfer(M.colorSpace)!==qe,(f!==M||m!==M.version||h!==i.toneMapping)&&(l.material.needsUpdate=!0,f=M,m=M.version,h=i.toneMapping),l.layers.enableAll(),A.unshift(l,l.geometry,l.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new At(new Wi(2,2),new hn({name:"BackgroundMaterial",uniforms:Ri(nn.background.uniforms),vertexShader:nn.background.vertexShader,fragmentShader:nn.background.fragmentShader,side:On,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.toneMapped=ze.getTransfer(M.colorSpace)!==qe,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(f!==M||m!==M.version||h!==i.toneMapping)&&(c.material.needsUpdate=!0,f=M,m=M.version,h=i.toneMapping),c.layers.enableAll(),A.unshift(c,c.geometry,c.material,0,0,null))}function p(A,w){A.getRGB(fs,Sl(i)),t.buffers.color.setClear(fs.r,fs.g,fs.b,w,r)}function u(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(A,w=1){a.set(A),o=w,p(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(A){o=A,p(a,o)},render:v,addToRenderList:E,dispose:u}}function qd(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=h(null);let r=s,a=!1;function o(C,U,X,Z,O){let Y=!1;const V=m(C,Z,X,U);r!==V&&(r=V,l(r.object)),Y=_(C,Z,X,O),Y&&v(C,Z,X,O),O!==null&&e.update(O,i.ELEMENT_ARRAY_BUFFER),(Y||a)&&(a=!1,M(C,U,X,Z),O!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(O).buffer))}function c(){return i.createVertexArray()}function l(C){return i.bindVertexArray(C)}function f(C){return i.deleteVertexArray(C)}function m(C,U,X,Z){const O=Z.wireframe===!0;let Y=n[U.id];Y===void 0&&(Y={},n[U.id]=Y);const V=C.isInstancedMesh===!0?C.id:0;let J=Y[V];J===void 0&&(J={},Y[V]=J);let j=J[X.id];j===void 0&&(j={},J[X.id]=j);let he=j[O];return he===void 0&&(he=h(c()),j[O]=he),he}function h(C){const U=[],X=[],Z=[];for(let O=0;O<t;O++)U[O]=0,X[O]=0,Z[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:X,attributeDivisors:Z,object:C,attributes:{},index:null}}function _(C,U,X,Z){const O=r.attributes,Y=U.attributes;let V=0;const J=X.getAttributes();for(const j in J)if(J[j].location>=0){const pe=O[j];let ge=Y[j];if(ge===void 0&&(j==="instanceMatrix"&&C.instanceMatrix&&(ge=C.instanceMatrix),j==="instanceColor"&&C.instanceColor&&(ge=C.instanceColor)),pe===void 0||pe.attribute!==ge||ge&&pe.data!==ge.data)return!0;V++}return r.attributesNum!==V||r.index!==Z}function v(C,U,X,Z){const O={},Y=U.attributes;let V=0;const J=X.getAttributes();for(const j in J)if(J[j].location>=0){let pe=Y[j];pe===void 0&&(j==="instanceMatrix"&&C.instanceMatrix&&(pe=C.instanceMatrix),j==="instanceColor"&&C.instanceColor&&(pe=C.instanceColor));const ge={};ge.attribute=pe,pe&&pe.data&&(ge.data=pe.data),O[j]=ge,V++}r.attributes=O,r.attributesNum=V,r.index=Z}function E(){const C=r.newAttributes;for(let U=0,X=C.length;U<X;U++)C[U]=0}function p(C){u(C,0)}function u(C,U){const X=r.newAttributes,Z=r.enabledAttributes,O=r.attributeDivisors;X[C]=1,Z[C]===0&&(i.enableVertexAttribArray(C),Z[C]=1),O[C]!==U&&(i.vertexAttribDivisor(C,U),O[C]=U)}function A(){const C=r.newAttributes,U=r.enabledAttributes;for(let X=0,Z=U.length;X<Z;X++)U[X]!==C[X]&&(i.disableVertexAttribArray(X),U[X]=0)}function w(C,U,X,Z,O,Y,V){V===!0?i.vertexAttribIPointer(C,U,X,O,Y):i.vertexAttribPointer(C,U,X,Z,O,Y)}function M(C,U,X,Z){E();const O=Z.attributes,Y=X.getAttributes(),V=U.defaultAttributeValues;for(const J in Y){const j=Y[J];if(j.location>=0){let he=O[J];if(he===void 0&&(J==="instanceMatrix"&&C.instanceMatrix&&(he=C.instanceMatrix),J==="instanceColor"&&C.instanceColor&&(he=C.instanceColor)),he!==void 0){const pe=he.normalized,ge=he.itemSize,ke=e.get(he);if(ke===void 0)continue;const it=ke.buffer,We=ke.type,$=ke.bytesPerElement,ie=We===i.INT||We===i.UNSIGNED_INT||he.gpuType===_a;if(he.isInterleavedBufferAttribute){const ee=he.data,Ce=ee.stride,De=he.offset;if(ee.isInstancedInterleavedBuffer){for(let Te=0;Te<j.locationSize;Te++)u(j.location+Te,ee.meshPerAttribute);C.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let Te=0;Te<j.locationSize;Te++)p(j.location+Te);i.bindBuffer(i.ARRAY_BUFFER,it);for(let Te=0;Te<j.locationSize;Te++)w(j.location+Te,ge/j.locationSize,We,pe,Ce*$,(De+ge/j.locationSize*Te)*$,ie)}else{if(he.isInstancedBufferAttribute){for(let ee=0;ee<j.locationSize;ee++)u(j.location+ee,he.meshPerAttribute);C.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let ee=0;ee<j.locationSize;ee++)p(j.location+ee);i.bindBuffer(i.ARRAY_BUFFER,it);for(let ee=0;ee<j.locationSize;ee++)w(j.location+ee,ge/j.locationSize,We,pe,ge*$,ge/j.locationSize*ee*$,ie)}}else if(V!==void 0){const pe=V[J];if(pe!==void 0)switch(pe.length){case 2:i.vertexAttrib2fv(j.location,pe);break;case 3:i.vertexAttrib3fv(j.location,pe);break;case 4:i.vertexAttrib4fv(j.location,pe);break;default:i.vertexAttrib1fv(j.location,pe)}}}}A()}function T(){y();for(const C in n){const U=n[C];for(const X in U){const Z=U[X];for(const O in Z){const Y=Z[O];for(const V in Y)f(Y[V].object),delete Y[V];delete Z[O]}}delete n[C]}}function b(C){if(n[C.id]===void 0)return;const U=n[C.id];for(const X in U){const Z=U[X];for(const O in Z){const Y=Z[O];for(const V in Y)f(Y[V].object),delete Y[V];delete Z[O]}}delete n[C.id]}function R(C){for(const U in n){const X=n[U];for(const Z in X){const O=X[Z];if(O[C.id]===void 0)continue;const Y=O[C.id];for(const V in Y)f(Y[V].object),delete Y[V];delete O[C.id]}}}function g(C){for(const U in n){const X=n[U],Z=C.isInstancedMesh===!0?C.id:0,O=X[Z];if(O!==void 0){for(const Y in O){const V=O[Y];for(const J in V)f(V[J].object),delete V[J];delete O[Y]}delete X[Z],Object.keys(X).length===0&&delete n[U]}}}function y(){L(),a=!0,r!==s&&(r=s,l(r.object))}function L(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:y,resetDefaultState:L,dispose:T,releaseStatesOfGeometry:b,releaseStatesOfObject:g,releaseStatesOfProgram:R,initAttributes:E,enableAttribute:p,disableUnusedAttributes:A}}function Kd(i,e,t){let n;function s(c){n=c}function r(c,l){i.drawArrays(n,c,l),t.update(l,n,1)}function a(c,l,f){f!==0&&(i.drawArraysInstanced(n,c,l,f),t.update(l,n,f))}function o(c,l,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,f);let h=0;for(let _=0;_<f;_++)h+=l[_];t.update(h,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function Zd(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(R){return!(R!==Zt&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){const g=R===En&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==Gt&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==sn&&!g)}function c(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const f=c(l);f!==l&&(Re("WebGLRenderer:",l,"not supported, using",f,"instead."),l=f);const m=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&h===!1&&Re("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const _=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),u=i.getParameter(i.MAX_VERTEX_ATTRIBS),A=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),w=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),T=i.getParameter(i.MAX_SAMPLES),b=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:m,reversedDepthBuffer:h,maxTextures:_,maxVertexTextures:v,maxTextureSize:E,maxCubemapSize:p,maxAttributes:u,maxVertexUniforms:A,maxVaryings:w,maxFragmentUniforms:M,maxSamples:T,samples:b}}function $d(i){const e=this;let t=null,n=0,s=!1,r=!1;const a=new In,o=new Pe,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(m,h){const _=m.length!==0||h||n!==0||s;return s=h,n=m.length,_},this.beginShadows=function(){r=!0,f(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(m,h){t=f(m,h,0)},this.setState=function(m,h,_){const v=m.clippingPlanes,E=m.clipIntersection,p=m.clipShadows,u=i.get(m);if(!s||v===null||v.length===0||r&&!p)r?f(null):l();else{const A=r?0:n,w=A*4;let M=u.clippingState||null;c.value=M,M=f(v,h,w,_);for(let T=0;T!==w;++T)M[T]=t[T];u.clippingState=M,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=A}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function f(m,h,_,v){const E=m!==null?m.length:0;let p=null;if(E!==0){if(p=c.value,v!==!0||p===null){const u=_+E*4,A=h.matrixWorldInverse;o.getNormalMatrix(A),(p===null||p.length<u)&&(p=new Float32Array(u));for(let w=0,M=_;w!==E;++w,M+=4)a.copy(m[w]).applyMatrix4(A,o),a.normal.toArray(p,M),p[M+3]=a.constant}c.value=p,c.needsUpdate=!0}return e.numPlanes=E,e.numIntersection=0,p}}const Nn=4,Ro=[.125,.215,.35,.446,.526,.582],Zn=20,Jd=256,Ui=new Da,wo=new Be;let dr=null,fr=0,pr=0,mr=!1;const Qd=new F;class Co{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){const{size:a=256,position:o=Qd}=r;dr=this._renderer.getRenderTarget(),fr=this._renderer.getActiveCubeFace(),pr=this._renderer.getActiveMipmapLevel(),mr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,s,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Lo(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Do(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(dr,fr,pr),this._renderer.xr.enabled=mr,e.scissorTest=!1,_i(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===jn||e.mapping===Ti?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),dr=this._renderer.getRenderTarget(),fr=this._renderer.getActiveCubeFace(),pr=this._renderer.getActiveMipmapLevel(),mr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Rt,minFilter:Rt,generateMipmaps:!1,type:En,format:Zt,colorSpace:ws,depthBuffer:!1},s=Po(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Po(e,t,n);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=jd(r)),this._blurMaterial=tf(r,e,t),this._ggxMaterial=ef(r,e,t)}return s}_compileMaterial(e){const t=new At(new $t,e);this._renderer.compile(t,Ui)}_sceneToCubeUV(e,t,n,s,r){const c=new Wt(90,1,t,n),l=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],m=this._renderer,h=m.autoClear,_=m.toneMapping;m.getClearColor(wo),m.toneMapping=an,m.autoClear=!1,m.state.buffers.depth.getReversed()&&(m.setRenderTarget(s),m.clearDepth(),m.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new At(new Fn,new wa({name:"PMREM.Background",side:Ft,depthWrite:!1,depthTest:!1})));const E=this._backgroundBox,p=E.material;let u=!1;const A=e.background;A?A.isColor&&(p.color.copy(A),e.background=null,u=!0):(p.color.copy(wo),u=!0);for(let w=0;w<6;w++){const M=w%3;M===0?(c.up.set(0,l[w],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+f[w],r.y,r.z)):M===1?(c.up.set(0,0,l[w]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+f[w],r.z)):(c.up.set(0,l[w],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+f[w]));const T=this._cubeSize;_i(s,M*T,w>2?T:0,T,T),m.setRenderTarget(s),u&&m.render(E,c),m.render(e,c)}m.toneMapping=_,m.autoClear=h,e.background=A}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===jn||e.mapping===Ti;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Lo()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Do());const r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;const o=r.uniforms;o.envMap.value=e;const c=this._cubeSize;_i(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,Ui)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){const s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;const c=a.uniforms,l=n/(this._lodMeshes.length-1),f=t/(this._lodMeshes.length-1),m=Math.sqrt(l*l-f*f),h=0+l*1.25,_=m*h,{_lodMax:v}=this,E=this._sizeLods[n],p=3*E*(n>v-Nn?n-v+Nn:0),u=4*(this._cubeSize-E);c.envMap.value=e.texture,c.roughness.value=_,c.mipInt.value=v-t,_i(r,p,u,3*E,2*E),s.setRenderTarget(r),s.render(o,Ui),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=v-n,_i(e,p,u,3*E,2*E),s.setRenderTarget(e),s.render(o,Ui)}_blur(e,t,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&Ge("blur direction must be either latitudinal or longitudinal!");const f=3,m=this._lodMeshes[s];m.material=l;const h=l.uniforms,_=this._sizeLods[n]-1,v=isFinite(r)?Math.PI/(2*_):2*Math.PI/(2*Zn-1),E=r/v,p=isFinite(r)?1+Math.floor(f*E):Zn;p>Zn&&Re(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Zn}`);const u=[];let A=0;for(let R=0;R<Zn;++R){const g=R/E,y=Math.exp(-g*g/2);u.push(y),R===0?A+=y:R<p&&(A+=2*y)}for(let R=0;R<u.length;R++)u[R]=u[R]/A;h.envMap.value=e.texture,h.samples.value=p,h.weights.value=u,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:w}=this;h.dTheta.value=v,h.mipInt.value=w-n;const M=this._sizeLods[s],T=3*M*(s>w-Nn?s-w+Nn:0),b=4*(this._cubeSize-M);_i(t,T,b,3*M,2*M),c.setRenderTarget(t),c.render(m,Ui)}}function jd(i){const e=[],t=[],n=[];let s=i;const r=i-Nn+1+Ro.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let c=1/o;a>i-Nn?c=Ro[a-i+Nn-1]:a===0&&(c=0),t.push(c);const l=1/(o-2),f=-l,m=1+l,h=[f,f,m,f,m,m,f,f,m,m,f,m],_=6,v=6,E=3,p=2,u=1,A=new Float32Array(E*v*_),w=new Float32Array(p*v*_),M=new Float32Array(u*v*_);for(let b=0;b<_;b++){const R=b%3*2/3-1,g=b>2?0:-1,y=[R,g,0,R+2/3,g,0,R+2/3,g+1,0,R,g,0,R+2/3,g+1,0,R,g+1,0];A.set(y,E*v*b),w.set(h,p*v*b);const L=[b,b,b,b,b,b];M.set(L,u*v*b)}const T=new $t;T.setAttribute("position",new ln(A,E)),T.setAttribute("uv",new ln(w,p)),T.setAttribute("faceIndex",new ln(M,u)),n.push(new At(T,null)),s>Nn&&s--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function Po(i,e,t){const n=new on(i,e,t);return n.texture.mapping=Is,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function _i(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function ef(i,e,t){return new hn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Jd,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Us(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Mn,depthTest:!1,depthWrite:!1})}function tf(i,e,t){const n=new Float32Array(Zn),s=new F(0,1,0);return new hn({name:"SphericalGaussianBlur",defines:{n:Zn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Us(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Mn,depthTest:!1,depthWrite:!1})}function Do(){return new hn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Us(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Mn,depthTest:!1,depthWrite:!1})}function Lo(){return new hn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Us(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Mn,depthTest:!1,depthWrite:!1})}function Us(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class Al extends on{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new vl(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Fn(5,5,5),r=new hn({name:"CubemapFromEquirect",uniforms:Ri(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ft,blending:Mn});r.uniforms.tEquirect.value=t;const a=new At(s,r),o=t.minFilter;return t.minFilter===$n&&(t.minFilter=Rt),new rh(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}}function nf(i){let e=new WeakMap,t=new WeakMap,n=null;function s(h,_=!1){return h==null?null:_?a(h):r(h)}function r(h){if(h&&h.isTexture){const _=h.mapping;if(_===Bs||_===zs)if(e.has(h)){const v=e.get(h).texture;return o(v,h.mapping)}else{const v=h.image;if(v&&v.height>0){const E=new Al(v.height);return E.fromEquirectangularTexture(i,h),e.set(h,E),h.addEventListener("dispose",l),o(E.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture){const _=h.mapping,v=_===Bs||_===zs,E=_===jn||_===Ti;if(v||E){let p=t.get(h);const u=p!==void 0?p.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==u)return n===null&&(n=new Co(i)),p=v?n.fromEquirectangular(h,p):n.fromCubemap(h,p),p.texture.pmremVersion=h.pmremVersion,t.set(h,p),p.texture;if(p!==void 0)return p.texture;{const A=h.image;return v&&A&&A.height>0||E&&A&&c(A)?(n===null&&(n=new Co(i)),p=v?n.fromEquirectangular(h):n.fromCubemap(h),p.texture.pmremVersion=h.pmremVersion,t.set(h,p),h.addEventListener("dispose",f),p.texture):null}}}return h}function o(h,_){return _===Bs?h.mapping=jn:_===zs&&(h.mapping=Ti),h}function c(h){let _=0;const v=6;for(let E=0;E<v;E++)h[E]!==void 0&&_++;return _===v}function l(h){const _=h.target;_.removeEventListener("dispose",l);const v=e.get(_);v!==void 0&&(e.delete(_),v.dispose())}function f(h){const _=h.target;_.removeEventListener("dispose",f);const v=t.get(_);v!==void 0&&(t.delete(_),v.dispose())}function m(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:m}}function sf(i){const e={};function t(n){if(e[n]!==void 0)return e[n];const s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&Ei("WebGLRenderer: "+n+" extension not supported."),s}}}function rf(i,e,t,n){const s={},r=new WeakMap;function a(m){const h=m.target;h.index!==null&&e.remove(h.index);for(const v in h.attributes)e.remove(h.attributes[v]);h.removeEventListener("dispose",a),delete s[h.id];const _=r.get(h);_&&(e.remove(_),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(m,h){return s[h.id]===!0||(h.addEventListener("dispose",a),s[h.id]=!0,t.memory.geometries++),h}function c(m){const h=m.attributes;for(const _ in h)e.update(h[_],i.ARRAY_BUFFER)}function l(m){const h=[],_=m.index,v=m.attributes.position;let E=0;if(v===void 0)return;if(_!==null){const A=_.array;E=_.version;for(let w=0,M=A.length;w<M;w+=3){const T=A[w+0],b=A[w+1],R=A[w+2];h.push(T,b,b,R,R,T)}}else{const A=v.array;E=v.version;for(let w=0,M=A.length/3-1;w<M;w+=3){const T=w+0,b=w+1,R=w+2;h.push(T,b,b,R,R,T)}}const p=new(v.count>=65535?xl:gl)(h,1);p.version=E;const u=r.get(m);u&&e.remove(u),r.set(m,p)}function f(m){const h=r.get(m);if(h){const _=m.index;_!==null&&h.version<_.version&&l(m)}else l(m);return r.get(m)}return{get:o,update:c,getWireframeAttribute:f}}function af(i,e,t){let n;function s(m){n=m}let r,a;function o(m){r=m.type,a=m.bytesPerElement}function c(m,h){i.drawElements(n,h,r,m*a),t.update(h,n,1)}function l(m,h,_){_!==0&&(i.drawElementsInstanced(n,h,r,m*a,_),t.update(h,n,_))}function f(m,h,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,r,m,0,_);let E=0;for(let p=0;p<_;p++)E+=h[p];t.update(E,n,1)}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=f}function of(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:Ge("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function lf(i,e,t){const n=new WeakMap,s=new tt;function r(a,o,c){const l=a.morphTargetInfluences,f=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,m=f!==void 0?f.length:0;let h=n.get(o);if(h===void 0||h.count!==m){let L=function(){g.dispose(),n.delete(o),o.removeEventListener("dispose",L)};var _=L;h!==void 0&&h.texture.dispose();const v=o.morphAttributes.position!==void 0,E=o.morphAttributes.normal!==void 0,p=o.morphAttributes.color!==void 0,u=o.morphAttributes.position||[],A=o.morphAttributes.normal||[],w=o.morphAttributes.color||[];let M=0;v===!0&&(M=1),E===!0&&(M=2),p===!0&&(M=3);let T=o.attributes.position.count*M,b=1;T>e.maxTextureSize&&(b=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const R=new Float32Array(T*b*4*m),g=new ml(R,T,b,m);g.type=sn,g.needsUpdate=!0;const y=M*4;for(let C=0;C<m;C++){const U=u[C],X=A[C],Z=w[C],O=T*b*4*C;for(let Y=0;Y<U.count;Y++){const V=Y*y;v===!0&&(s.fromBufferAttribute(U,Y),R[O+V+0]=s.x,R[O+V+1]=s.y,R[O+V+2]=s.z,R[O+V+3]=0),E===!0&&(s.fromBufferAttribute(X,Y),R[O+V+4]=s.x,R[O+V+5]=s.y,R[O+V+6]=s.z,R[O+V+7]=0),p===!0&&(s.fromBufferAttribute(Z,Y),R[O+V+8]=s.x,R[O+V+9]=s.y,R[O+V+10]=s.z,R[O+V+11]=Z.itemSize===4?s.w:1)}}h={count:m,texture:g,size:new we(T,b)},n.set(o,h),o.addEventListener("dispose",L)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let v=0;for(let p=0;p<l.length;p++)v+=l[p];const E=o.morphTargetsRelative?1:1-v;c.getUniforms().setValue(i,"morphTargetBaseInfluence",E),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",h.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:r}}function cf(i,e,t,n,s){let r=new WeakMap;function a(l){const f=s.render.frame,m=l.geometry,h=e.get(l,m);if(r.get(h)!==f&&(e.update(h),r.set(h,f)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==f&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,f))),l.isSkinnedMesh){const _=l.skeleton;r.get(_)!==f&&(_.update(),r.set(_,f))}return h}function o(){r=new WeakMap}function c(l){const f=l.target;f.removeEventListener("dispose",c),n.releaseStatesOfObject(f),t.remove(f.instanceMatrix),f.instanceColor!==null&&t.remove(f.instanceColor)}return{update:a,dispose:o}}const hf={[el]:"LINEAR_TONE_MAPPING",[tl]:"REINHARD_TONE_MAPPING",[nl]:"CINEON_TONE_MAPPING",[ma]:"ACES_FILMIC_TONE_MAPPING",[sl]:"AGX_TONE_MAPPING",[rl]:"NEUTRAL_TONE_MAPPING",[il]:"CUSTOM_TONE_MAPPING"};function uf(i,e,t,n,s,r){const a=new on(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,depthTexture:s?new Ai(e,t):void 0}),o=new on(e,t,{type:En,depthBuffer:!1,stencilBuffer:!1}),c=new $t;c.setAttribute("position",new Dt([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Dt([0,2,0,0,2,0],2));const l=new Qc({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),f=new At(c,l),m=new Da(-1,1,1,-1,0,1);let h=null,_=null,v=!1,E,p=null,u=[],A=!1;this.setSize=function(w,M){a.setSize(w,M),o.setSize(w,M);for(let T=0;T<u.length;T++){const b=u[T];b.setSize&&b.setSize(w,M)}},this.setEffects=function(w){u=w,A=u.length>0&&u[0].isRenderPass===!0;const M=a.width,T=a.height;for(let b=0;b<u.length;b++){const R=u[b];R.setSize&&R.setSize(M,T)}},this.begin=function(w,M){if(v||w.toneMapping===an&&u.length===0)return!1;if(p=M,M!==null){const T=M.width,b=M.height;(a.width!==T||a.height!==b)&&this.setSize(T,b)}return A===!1&&w.setRenderTarget(a),E=w.toneMapping,w.toneMapping=an,!0},this.hasRenderPass=function(){return A},this.end=function(w,M){w.toneMapping=E,v=!0;let T=a,b=o;for(let R=0;R<u.length;R++){const g=u[R];if(g.enabled!==!1&&(g.render(w,b,T,M),g.needsSwap!==!1)){const y=T;T=b,b=y}}if(h!==w.outputColorSpace||_!==w.toneMapping){h=w.outputColorSpace,_=w.toneMapping,l.defines={},ze.getTransfer(h)===qe&&(l.defines.SRGB_TRANSFER="");const R=hf[_];R&&(l.defines[R]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=T.texture,w.setRenderTarget(p),w.render(f,m),p=null,v=!1},this.isCompositing=function(){return v},this.dispose=function(){a.depthTexture&&a.depthTexture.dispose(),a.dispose(),o.dispose(),c.dispose(),l.dispose()}}const Rl=new Pt,da=new Ai(1,1),wl=new ml,Cl=new Cc,Pl=new vl,Io=[],Uo=[],No=new Float32Array(16),Fo=new Float32Array(9),Oo=new Float32Array(4);function wi(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=Io[s];if(r===void 0&&(r=new Float32Array(s),Io[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function _t(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function gt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Ns(i,e){let t=Uo[e];t===void 0&&(t=new Int32Array(e),Uo[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function df(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function ff(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_t(t,e))return;i.uniform2fv(this.addr,e),gt(t,e)}}function pf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(_t(t,e))return;i.uniform3fv(this.addr,e),gt(t,e)}}function mf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_t(t,e))return;i.uniform4fv(this.addr,e),gt(t,e)}}function _f(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(_t(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),gt(t,e)}else{if(_t(t,n))return;Oo.set(n),i.uniformMatrix2fv(this.addr,!1,Oo),gt(t,n)}}function gf(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(_t(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),gt(t,e)}else{if(_t(t,n))return;Fo.set(n),i.uniformMatrix3fv(this.addr,!1,Fo),gt(t,n)}}function xf(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(_t(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),gt(t,e)}else{if(_t(t,n))return;No.set(n),i.uniformMatrix4fv(this.addr,!1,No),gt(t,n)}}function vf(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Mf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_t(t,e))return;i.uniform2iv(this.addr,e),gt(t,e)}}function Sf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(_t(t,e))return;i.uniform3iv(this.addr,e),gt(t,e)}}function Ef(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_t(t,e))return;i.uniform4iv(this.addr,e),gt(t,e)}}function yf(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function bf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_t(t,e))return;i.uniform2uiv(this.addr,e),gt(t,e)}}function Tf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(_t(t,e))return;i.uniform3uiv(this.addr,e),gt(t,e)}}function Af(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_t(t,e))return;i.uniform4uiv(this.addr,e),gt(t,e)}}function Rf(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(da.compareFunction=t.isReversedDepthBuffer()?ya:Ea,r=da):r=Rl,t.setTexture2D(e||r,s)}function wf(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Cl,s)}function Cf(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Pl,s)}function Pf(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||wl,s)}function Df(i){switch(i){case 5126:return df;case 35664:return ff;case 35665:return pf;case 35666:return mf;case 35674:return _f;case 35675:return gf;case 35676:return xf;case 5124:case 35670:return vf;case 35667:case 35671:return Mf;case 35668:case 35672:return Sf;case 35669:case 35673:return Ef;case 5125:return yf;case 36294:return bf;case 36295:return Tf;case 36296:return Af;case 35678:case 36198:case 36298:case 36306:case 35682:return Rf;case 35679:case 36299:case 36307:return wf;case 35680:case 36300:case 36308:case 36293:return Cf;case 36289:case 36303:case 36311:case 36292:return Pf}}function Lf(i,e){i.uniform1fv(this.addr,e)}function If(i,e){const t=wi(e,this.size,2);i.uniform2fv(this.addr,t)}function Uf(i,e){const t=wi(e,this.size,3);i.uniform3fv(this.addr,t)}function Nf(i,e){const t=wi(e,this.size,4);i.uniform4fv(this.addr,t)}function Ff(i,e){const t=wi(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Of(i,e){const t=wi(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Bf(i,e){const t=wi(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function zf(i,e){i.uniform1iv(this.addr,e)}function Gf(i,e){i.uniform2iv(this.addr,e)}function Vf(i,e){i.uniform3iv(this.addr,e)}function Hf(i,e){i.uniform4iv(this.addr,e)}function kf(i,e){i.uniform1uiv(this.addr,e)}function Wf(i,e){i.uniform2uiv(this.addr,e)}function Xf(i,e){i.uniform3uiv(this.addr,e)}function Yf(i,e){i.uniform4uiv(this.addr,e)}function qf(i,e,t){const n=this.cache,s=e.length,r=Ns(t,s);_t(n,r)||(i.uniform1iv(this.addr,r),gt(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=da:a=Rl;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function Kf(i,e,t){const n=this.cache,s=e.length,r=Ns(t,s);_t(n,r)||(i.uniform1iv(this.addr,r),gt(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Cl,r[a])}function Zf(i,e,t){const n=this.cache,s=e.length,r=Ns(t,s);_t(n,r)||(i.uniform1iv(this.addr,r),gt(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Pl,r[a])}function $f(i,e,t){const n=this.cache,s=e.length,r=Ns(t,s);_t(n,r)||(i.uniform1iv(this.addr,r),gt(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||wl,r[a])}function Jf(i){switch(i){case 5126:return Lf;case 35664:return If;case 35665:return Uf;case 35666:return Nf;case 35674:return Ff;case 35675:return Of;case 35676:return Bf;case 5124:case 35670:return zf;case 35667:case 35671:return Gf;case 35668:case 35672:return Vf;case 35669:case 35673:return Hf;case 5125:return kf;case 36294:return Wf;case 36295:return Xf;case 36296:return Yf;case 35678:case 36198:case 36298:case 36306:case 35682:return qf;case 35679:case 36299:case 36307:return Kf;case 35680:case 36300:case 36308:case 36293:return Zf;case 36289:case 36303:case 36311:case 36292:return $f}}class Qf{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Df(t.type)}}class jf{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Jf(t.type)}}class ep{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],n)}}}const _r=/(\w+)(\])?(\[|\.)?/g;function Bo(i,e){i.seq.push(e),i.map[e.id]=e}function tp(i,e,t){const n=i.name,s=n.length;for(_r.lastIndex=0;;){const r=_r.exec(n),a=_r.lastIndex;let o=r[1];const c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){Bo(t,l===void 0?new Qf(o,i,e):new jf(o,i,e));break}else{let m=t.map[o];m===void 0&&(m=new ep(o),Bo(t,m)),t=m}}}class bs{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=e.getActiveUniform(t,a),c=e.getUniformLocation(t,o.name);tp(o,c,this)}const s=[],r=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&n.push(a)}return n}}function zo(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const np=37297;let ip=0;function sp(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const Go=new Pe;function rp(i){ze._getMatrix(Go,ze.workingColorSpace,i);const e=`mat3( ${Go.elements.map(t=>t.toFixed(4))} )`;switch(ze.getTransfer(i)){case Cs:return[e,"LinearTransferOETF"];case qe:return[e,"sRGBTransferOETF"];default:return Re("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Vo(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+sp(i.getShaderSource(e),o)}else return r}function ap(i,e){const t=rp(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const op={[el]:"Linear",[tl]:"Reinhard",[nl]:"Cineon",[ma]:"ACESFilmic",[sl]:"AgX",[rl]:"Neutral",[il]:"Custom"};function lp(i,e){const t=op[e];return t===void 0?(Re("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const ps=new F;function cp(){ze.getLuminanceCoefficients(ps);const i=ps.x.toFixed(4),e=ps.y.toFixed(4),t=ps.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function hp(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Oi).join(`
`)}function up(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function dp(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Oi(i){return i!==""}function Ho(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ko(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const fp=/^[ \t]*#include +<([\w\d./]+)>/gm;function fa(i){return i.replace(fp,mp)}const pp=new Map;function mp(i,e){let t=Ue[e];if(t===void 0){const n=pp.get(e);if(n!==void 0)t=Ue[n],Re('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return fa(t)}const _p=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Wo(i){return i.replace(_p,gp)}function gp(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Xo(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const xp={[gs]:"SHADOWMAP_TYPE_PCF",[Fi]:"SHADOWMAP_TYPE_VSM"};function vp(i){return xp[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Mp={[jn]:"ENVMAP_TYPE_CUBE",[Ti]:"ENVMAP_TYPE_CUBE",[Is]:"ENVMAP_TYPE_CUBE_UV"};function Sp(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":Mp[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const Ep={[Ti]:"ENVMAP_MODE_REFRACTION"};function yp(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Ep[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const bp={[jo]:"ENVMAP_BLENDING_MULTIPLY",[oc]:"ENVMAP_BLENDING_MIX",[lc]:"ENVMAP_BLENDING_ADD"};function Tp(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":bp[i.combine]||"ENVMAP_BLENDING_NONE"}function Ap(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Rp(i,e,t,n){const s=i.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=vp(t),l=Sp(t),f=yp(t),m=Tp(t),h=Ap(t),_=hp(t),v=up(r),E=s.createProgram();let p,u,A=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Oi).join(`
`),p.length>0&&(p+=`
`),u=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Oi).join(`
`),u.length>0&&(u+=`
`)):(p=[Xo(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+f:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Oi).join(`
`),u=[Xo(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+f:"",t.envMap?"#define "+m:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==an?"#define TONE_MAPPING":"",t.toneMapping!==an?Ue.tonemapping_pars_fragment:"",t.toneMapping!==an?lp("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ue.colorspace_pars_fragment,ap("linearToOutputTexel",t.outputColorSpace),cp(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Oi).join(`
`)),a=fa(a),a=Ho(a,t),a=ko(a,t),o=fa(o),o=Ho(o,t),o=ko(o,t),a=Wo(a),o=Wo(o),t.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,p=[_,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,u=["#define varying in",t.glslVersion===ja?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ja?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const w=A+p+a,M=A+u+o,T=zo(s,s.VERTEX_SHADER,w),b=zo(s,s.FRAGMENT_SHADER,M);s.attachShader(E,T),s.attachShader(E,b),t.index0AttributeName!==void 0?s.bindAttribLocation(E,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(E,0,"position"),s.linkProgram(E);function R(C){if(i.debug.checkShaderErrors){const U=s.getProgramInfoLog(E)||"",X=s.getShaderInfoLog(T)||"",Z=s.getShaderInfoLog(b)||"",O=U.trim(),Y=X.trim(),V=Z.trim();let J=!0,j=!0;if(s.getProgramParameter(E,s.LINK_STATUS)===!1)if(J=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,E,T,b);else{const he=Vo(s,T,"vertex"),pe=Vo(s,b,"fragment");Ge("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(E,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+O+`
`+he+`
`+pe)}else O!==""?Re("WebGLProgram: Program Info Log:",O):(Y===""||V==="")&&(j=!1);j&&(C.diagnostics={runnable:J,programLog:O,vertexShader:{log:Y,prefix:p},fragmentShader:{log:V,prefix:u}})}s.deleteShader(T),s.deleteShader(b),g=new bs(s,E),y=dp(s,E)}let g;this.getUniforms=function(){return g===void 0&&R(this),g};let y;this.getAttributes=function(){return y===void 0&&R(this),y};let L=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return L===!1&&(L=s.getProgramParameter(E,np)),L},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(E),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=ip++,this.cacheKey=e,this.usedTimes=1,this.program=E,this.vertexShader=T,this.fragmentShader=b,this}let wp=0;class Cp{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){const s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Pp(e),t.set(e,n)),n}}class Pp{constructor(e){this.id=wp++,this.code=e,this.usedTimes=0}}function Dp(i){return i===ei||i===As||i===Rs}function Lp(i,e,t,n,s,r){const a=new Ta,o=new Cp,c=new Set,l=[],f=new Map,m=n.logarithmicDepthBuffer;let h=n.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(g){return c.add(g),g===0?"uv":`uv${g}`}function E(g,y,L,C,U,X){const Z=C.fog,O=U.geometry,Y=g.isMeshStandardMaterial||g.isMeshLambertMaterial||g.isMeshPhongMaterial?C.environment:null,V=g.isMeshStandardMaterial||g.isMeshLambertMaterial&&!g.envMap||g.isMeshPhongMaterial&&!g.envMap,J=e.get(g.envMap||Y,V),j=J&&J.mapping===Is?J.image.height:null,he=_[g.type];g.precision!==null&&(h=n.getMaxPrecision(g.precision),h!==g.precision&&Re("WebGLProgram.getParameters:",g.precision,"not supported, using",h,"instead."));const pe=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,ge=pe!==void 0?pe.length:0;let ke=0;O.morphAttributes.position!==void 0&&(ke=1),O.morphAttributes.normal!==void 0&&(ke=2),O.morphAttributes.color!==void 0&&(ke=3);let it,We,$,ie;if(he){const xe=nn[he];it=xe.vertexShader,We=xe.fragmentShader}else{it=g.vertexShader,We=g.fragmentShader;const xe=o.getVertexShaderStage(g),rt=o.getFragmentShaderStage(g);o.update(g,xe,rt),$=xe.id,ie=rt.id}const ee=i.getRenderTarget(),Ce=i.state.buffers.depth.getReversed(),De=U.isInstancedMesh===!0,Te=U.isBatchedMesh===!0,ot=!!g.map,Oe=!!g.matcap,$e=!!J,Xe=!!g.aoMap,Ve=!!g.lightMap,ht=!!g.bumpMap&&g.wireframe===!1,ft=!!g.normalMap,xt=!!g.displacementMap,Mt=!!g.emissiveMap,st=!!g.metalnessMap,ut=!!g.roughnessMap,D=g.anisotropy>0,Lt=g.clearcoat>0,Ye=g.dispersion>0,S=g.iridescence>0,d=g.sheen>0,N=g.transmission>0,G=D&&!!g.anisotropyMap,k=Lt&&!!g.clearcoatMap,te=Lt&&!!g.clearcoatNormalMap,se=Lt&&!!g.clearcoatRoughnessMap,W=S&&!!g.iridescenceMap,K=S&&!!g.iridescenceThicknessMap,re=d&&!!g.sheenColorMap,Se=d&&!!g.sheenRoughnessMap,le=!!g.specularMap,ae=!!g.specularColorMap,be=!!g.specularIntensityMap,Ae=N&&!!g.transmissionMap,Le=N&&!!g.thicknessMap,P=!!g.gradientMap,ne=!!g.alphaMap,q=g.alphaTest>0,oe=!!g.alphaHash,fe=!!g.extensions;let Q=an;g.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&(Q=i.toneMapping);const Me={shaderID:he,shaderType:g.type,shaderName:g.name,vertexShader:it,fragmentShader:We,defines:g.defines,customVertexShaderID:$,customFragmentShaderID:ie,isRawShaderMaterial:g.isRawShaderMaterial===!0,glslVersion:g.glslVersion,precision:h,batching:Te,batchingColor:Te&&U._colorsTexture!==null,instancing:De,instancingColor:De&&U.instanceColor!==null,instancingMorph:De&&U.morphTexture!==null,outputColorSpace:ee===null?i.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:ze.workingColorSpace,alphaToCoverage:!!g.alphaToCoverage,map:ot,matcap:Oe,envMap:$e,envMapMode:$e&&J.mapping,envMapCubeUVHeight:j,aoMap:Xe,lightMap:Ve,bumpMap:ht,normalMap:ft,displacementMap:xt,emissiveMap:Mt,normalMapObjectSpace:ft&&g.normalMapType===uc,normalMapTangentSpace:ft&&g.normalMapType===ca,packedNormalMap:ft&&g.normalMapType===ca&&Dp(g.normalMap.format),metalnessMap:st,roughnessMap:ut,anisotropy:D,anisotropyMap:G,clearcoat:Lt,clearcoatMap:k,clearcoatNormalMap:te,clearcoatRoughnessMap:se,dispersion:Ye,iridescence:S,iridescenceMap:W,iridescenceThicknessMap:K,sheen:d,sheenColorMap:re,sheenRoughnessMap:Se,specularMap:le,specularColorMap:ae,specularIntensityMap:be,transmission:N,transmissionMap:Ae,thicknessMap:Le,gradientMap:P,opaque:g.transparent===!1&&g.blending===Si&&g.alphaToCoverage===!1,alphaMap:ne,alphaTest:q,alphaHash:oe,combine:g.combine,mapUv:ot&&v(g.map.channel),aoMapUv:Xe&&v(g.aoMap.channel),lightMapUv:Ve&&v(g.lightMap.channel),bumpMapUv:ht&&v(g.bumpMap.channel),normalMapUv:ft&&v(g.normalMap.channel),displacementMapUv:xt&&v(g.displacementMap.channel),emissiveMapUv:Mt&&v(g.emissiveMap.channel),metalnessMapUv:st&&v(g.metalnessMap.channel),roughnessMapUv:ut&&v(g.roughnessMap.channel),anisotropyMapUv:G&&v(g.anisotropyMap.channel),clearcoatMapUv:k&&v(g.clearcoatMap.channel),clearcoatNormalMapUv:te&&v(g.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:se&&v(g.clearcoatRoughnessMap.channel),iridescenceMapUv:W&&v(g.iridescenceMap.channel),iridescenceThicknessMapUv:K&&v(g.iridescenceThicknessMap.channel),sheenColorMapUv:re&&v(g.sheenColorMap.channel),sheenRoughnessMapUv:Se&&v(g.sheenRoughnessMap.channel),specularMapUv:le&&v(g.specularMap.channel),specularColorMapUv:ae&&v(g.specularColorMap.channel),specularIntensityMapUv:be&&v(g.specularIntensityMap.channel),transmissionMapUv:Ae&&v(g.transmissionMap.channel),thicknessMapUv:Le&&v(g.thicknessMap.channel),alphaMapUv:ne&&v(g.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(ft||D),vertexNormals:!!O.attributes.normal,vertexColors:g.vertexColors,vertexAlphas:g.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!O.attributes.uv&&(ot||ne),fog:!!Z,useFog:g.fog===!0,fogExp2:!!Z&&Z.isFogExp2,flatShading:g.wireframe===!1&&(g.flatShading===!0||O.attributes.normal===void 0&&ft===!1&&(g.isMeshLambertMaterial||g.isMeshPhongMaterial||g.isMeshStandardMaterial||g.isMeshPhysicalMaterial)),sizeAttenuation:g.sizeAttenuation===!0,logarithmicDepthBuffer:m,reversedDepthBuffer:Ce,skinning:U.isSkinnedMesh===!0,hasPositionAttribute:O.attributes.position!==void 0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:ge,morphTextureStride:ke,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numLightProbeGrids:X.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:g.dithering,shadowMapEnabled:i.shadowMap.enabled&&L.length>0,shadowMapType:i.shadowMap.type,toneMapping:Q,decodeVideoTexture:ot&&g.map.isVideoTexture===!0&&ze.getTransfer(g.map.colorSpace)===qe,decodeVideoTextureEmissive:Mt&&g.emissiveMap.isVideoTexture===!0&&ze.getTransfer(g.emissiveMap.colorSpace)===qe,premultipliedAlpha:g.premultipliedAlpha,doubleSided:g.side===gn,flipSided:g.side===Ft,useDepthPacking:g.depthPacking>=0,depthPacking:g.depthPacking||0,index0AttributeName:g.index0AttributeName,extensionClipCullDistance:fe&&g.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(fe&&g.extensions.multiDraw===!0||Te)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:g.customProgramCacheKey()};return Me.vertexUv1s=c.has(1),Me.vertexUv2s=c.has(2),Me.vertexUv3s=c.has(3),c.clear(),Me}function p(g){const y=[];if(g.shaderID?y.push(g.shaderID):(y.push(g.customVertexShaderID),y.push(g.customFragmentShaderID)),g.defines!==void 0)for(const L in g.defines)y.push(L),y.push(g.defines[L]);return g.isRawShaderMaterial===!1&&(u(y,g),A(y,g),y.push(i.outputColorSpace)),y.push(g.customProgramCacheKey),y.join()}function u(g,y){g.push(y.precision),g.push(y.outputColorSpace),g.push(y.envMapMode),g.push(y.envMapCubeUVHeight),g.push(y.mapUv),g.push(y.alphaMapUv),g.push(y.lightMapUv),g.push(y.aoMapUv),g.push(y.bumpMapUv),g.push(y.normalMapUv),g.push(y.displacementMapUv),g.push(y.emissiveMapUv),g.push(y.metalnessMapUv),g.push(y.roughnessMapUv),g.push(y.anisotropyMapUv),g.push(y.clearcoatMapUv),g.push(y.clearcoatNormalMapUv),g.push(y.clearcoatRoughnessMapUv),g.push(y.iridescenceMapUv),g.push(y.iridescenceThicknessMapUv),g.push(y.sheenColorMapUv),g.push(y.sheenRoughnessMapUv),g.push(y.specularMapUv),g.push(y.specularColorMapUv),g.push(y.specularIntensityMapUv),g.push(y.transmissionMapUv),g.push(y.thicknessMapUv),g.push(y.combine),g.push(y.fogExp2),g.push(y.sizeAttenuation),g.push(y.morphTargetsCount),g.push(y.morphAttributeCount),g.push(y.numDirLights),g.push(y.numPointLights),g.push(y.numSpotLights),g.push(y.numSpotLightMaps),g.push(y.numHemiLights),g.push(y.numRectAreaLights),g.push(y.numDirLightShadows),g.push(y.numPointLightShadows),g.push(y.numSpotLightShadows),g.push(y.numSpotLightShadowsWithMaps),g.push(y.numLightProbes),g.push(y.shadowMapType),g.push(y.toneMapping),g.push(y.numClippingPlanes),g.push(y.numClipIntersection),g.push(y.depthPacking)}function A(g,y){a.disableAll(),y.instancing&&a.enable(0),y.instancingColor&&a.enable(1),y.instancingMorph&&a.enable(2),y.matcap&&a.enable(3),y.envMap&&a.enable(4),y.normalMapObjectSpace&&a.enable(5),y.normalMapTangentSpace&&a.enable(6),y.clearcoat&&a.enable(7),y.iridescence&&a.enable(8),y.alphaTest&&a.enable(9),y.vertexColors&&a.enable(10),y.vertexAlphas&&a.enable(11),y.vertexUv1s&&a.enable(12),y.vertexUv2s&&a.enable(13),y.vertexUv3s&&a.enable(14),y.vertexTangents&&a.enable(15),y.anisotropy&&a.enable(16),y.alphaHash&&a.enable(17),y.batching&&a.enable(18),y.dispersion&&a.enable(19),y.batchingColor&&a.enable(20),y.gradientMap&&a.enable(21),y.packedNormalMap&&a.enable(22),y.vertexNormals&&a.enable(23),g.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reversedDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),y.numLightProbeGrids>0&&a.enable(22),y.hasPositionAttribute&&a.enable(23),g.push(a.mask)}function w(g){const y=_[g.type];let L;if(y){const C=nn[y];L=Zc.clone(C.uniforms)}else L=g.uniforms;return L}function M(g,y){let L=f.get(y);return L!==void 0?++L.usedTimes:(L=new Rp(i,y,g,s),l.push(L),f.set(y,L)),L}function T(g){if(--g.usedTimes===0){const y=l.indexOf(g);l[y]=l[l.length-1],l.pop(),f.delete(g.cacheKey),g.destroy()}}function b(g){o.remove(g)}function R(){o.dispose()}return{getParameters:E,getProgramCacheKey:p,getUniforms:w,acquireProgram:M,releaseProgram:T,releaseShaderCache:b,programs:l,dispose:R}}function Ip(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function Up(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function Yo(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function qo(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(h){let _=0;return h.isInstancedMesh&&(_+=2),h.isSkinnedMesh&&(_+=1),_}function o(h,_,v,E,p,u){let A=i[e];return A===void 0?(A={id:h.id,object:h,geometry:_,material:v,materialVariant:a(h),groupOrder:E,renderOrder:h.renderOrder,z:p,group:u},i[e]=A):(A.id=h.id,A.object=h,A.geometry=_,A.material=v,A.materialVariant=a(h),A.groupOrder=E,A.renderOrder=h.renderOrder,A.z=p,A.group=u),e++,A}function c(h,_,v,E,p,u){const A=o(h,_,v,E,p,u);v.transmission>0?n.push(A):v.transparent===!0?s.push(A):t.push(A)}function l(h,_,v,E,p,u){const A=o(h,_,v,E,p,u);v.transmission>0?n.unshift(A):v.transparent===!0?s.unshift(A):t.unshift(A)}function f(h,_,v){t.length>1&&t.sort(h||Up),n.length>1&&n.sort(_||Yo),s.length>1&&s.sort(_||Yo),v&&(t.reverse(),n.reverse(),s.reverse())}function m(){for(let h=e,_=i.length;h<_;h++){const v=i[h];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:c,unshift:l,finish:m,sort:f}}function Np(){let i=new WeakMap;function e(n,s){const r=i.get(n);let a;return r===void 0?(a=new qo,i.set(n,[a])):s>=r.length?(a=new qo,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function Fp(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new F,color:new Be};break;case"SpotLight":t={position:new F,direction:new F,color:new Be,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new F,color:new Be,distance:0,decay:0};break;case"HemisphereLight":t={direction:new F,skyColor:new Be,groundColor:new Be};break;case"RectAreaLight":t={color:new Be,position:new F,halfWidth:new F,halfHeight:new F};break}return i[e.id]=t,t}}}function Op(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Bp=0;function zp(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Gp(i){const e=new Fp,t=Op(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new F);const s=new F,r=new nt,a=new nt;function o(l){let f=0,m=0,h=0;for(let y=0;y<9;y++)n.probe[y].set(0,0,0);let _=0,v=0,E=0,p=0,u=0,A=0,w=0,M=0,T=0,b=0,R=0;l.sort(zp);for(let y=0,L=l.length;y<L;y++){const C=l[y],U=C.color,X=C.intensity,Z=C.distance;let O=null;if(C.shadow&&C.shadow.map&&(C.shadow.map.texture.format===ei?O=C.shadow.map.texture:O=C.shadow.map.depthTexture||C.shadow.map.texture),C.isAmbientLight)f+=U.r*X,m+=U.g*X,h+=U.b*X;else if(C.isLightProbe){for(let Y=0;Y<9;Y++)n.probe[Y].addScaledVector(C.sh.coefficients[Y],X);R++}else if(C.isDirectionalLight){const Y=e.get(C);if(Y.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const V=C.shadow,J=t.get(C);J.shadowIntensity=V.intensity,J.shadowBias=V.bias,J.shadowNormalBias=V.normalBias,J.shadowRadius=V.radius,J.shadowMapSize=V.mapSize,n.directionalShadow[_]=J,n.directionalShadowMap[_]=O,n.directionalShadowMatrix[_]=C.shadow.matrix,A++}n.directional[_]=Y,_++}else if(C.isSpotLight){const Y=e.get(C);Y.position.setFromMatrixPosition(C.matrixWorld),Y.color.copy(U).multiplyScalar(X),Y.distance=Z,Y.coneCos=Math.cos(C.angle),Y.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),Y.decay=C.decay,n.spot[E]=Y;const V=C.shadow;if(C.map&&(n.spotLightMap[T]=C.map,T++,V.updateMatrices(C),C.castShadow&&b++),n.spotLightMatrix[E]=V.matrix,C.castShadow){const J=t.get(C);J.shadowIntensity=V.intensity,J.shadowBias=V.bias,J.shadowNormalBias=V.normalBias,J.shadowRadius=V.radius,J.shadowMapSize=V.mapSize,n.spotShadow[E]=J,n.spotShadowMap[E]=O,M++}E++}else if(C.isRectAreaLight){const Y=e.get(C);Y.color.copy(U).multiplyScalar(X),Y.halfWidth.set(C.width*.5,0,0),Y.halfHeight.set(0,C.height*.5,0),n.rectArea[p]=Y,p++}else if(C.isPointLight){const Y=e.get(C);if(Y.color.copy(C.color).multiplyScalar(C.intensity),Y.distance=C.distance,Y.decay=C.decay,C.castShadow){const V=C.shadow,J=t.get(C);J.shadowIntensity=V.intensity,J.shadowBias=V.bias,J.shadowNormalBias=V.normalBias,J.shadowRadius=V.radius,J.shadowMapSize=V.mapSize,J.shadowCameraNear=V.camera.near,J.shadowCameraFar=V.camera.far,n.pointShadow[v]=J,n.pointShadowMap[v]=O,n.pointShadowMatrix[v]=C.shadow.matrix,w++}n.point[v]=Y,v++}else if(C.isHemisphereLight){const Y=e.get(C);Y.skyColor.copy(C.color).multiplyScalar(X),Y.groundColor.copy(C.groundColor).multiplyScalar(X),n.hemi[u]=Y,u++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ce.LTC_FLOAT_1,n.rectAreaLTC2=ce.LTC_FLOAT_2):(n.rectAreaLTC1=ce.LTC_HALF_1,n.rectAreaLTC2=ce.LTC_HALF_2)),n.ambient[0]=f,n.ambient[1]=m,n.ambient[2]=h;const g=n.hash;(g.directionalLength!==_||g.pointLength!==v||g.spotLength!==E||g.rectAreaLength!==p||g.hemiLength!==u||g.numDirectionalShadows!==A||g.numPointShadows!==w||g.numSpotShadows!==M||g.numSpotMaps!==T||g.numLightProbes!==R)&&(n.directional.length=_,n.spot.length=E,n.rectArea.length=p,n.point.length=v,n.hemi.length=u,n.directionalShadow.length=A,n.directionalShadowMap.length=A,n.pointShadow.length=w,n.pointShadowMap.length=w,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=A,n.pointShadowMatrix.length=w,n.spotLightMatrix.length=M+T-b,n.spotLightMap.length=T,n.numSpotLightShadowsWithMaps=b,n.numLightProbes=R,g.directionalLength=_,g.pointLength=v,g.spotLength=E,g.rectAreaLength=p,g.hemiLength=u,g.numDirectionalShadows=A,g.numPointShadows=w,g.numSpotShadows=M,g.numSpotMaps=T,g.numLightProbes=R,n.version=Bp++)}function c(l,f){let m=0,h=0,_=0,v=0,E=0;const p=f.matrixWorldInverse;for(let u=0,A=l.length;u<A;u++){const w=l[u];if(w.isDirectionalLight){const M=n.directional[m];M.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(p),m++}else if(w.isSpotLight){const M=n.spot[_];M.position.setFromMatrixPosition(w.matrixWorld),M.position.applyMatrix4(p),M.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(p),_++}else if(w.isRectAreaLight){const M=n.rectArea[v];M.position.setFromMatrixPosition(w.matrixWorld),M.position.applyMatrix4(p),a.identity(),r.copy(w.matrixWorld),r.premultiply(p),a.extractRotation(r),M.halfWidth.set(w.width*.5,0,0),M.halfHeight.set(0,w.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),v++}else if(w.isPointLight){const M=n.point[h];M.position.setFromMatrixPosition(w.matrixWorld),M.position.applyMatrix4(p),h++}else if(w.isHemisphereLight){const M=n.hemi[E];M.direction.setFromMatrixPosition(w.matrixWorld),M.direction.transformDirection(p),E++}}}return{setup:o,setupView:c,state:n}}function Ko(i){const e=new Gp(i),t=[],n=[],s=[];function r(h){m.camera=h,t.length=0,n.length=0,s.length=0}function a(h){t.push(h)}function o(h){n.push(h)}function c(h){s.push(h)}function l(){e.setup(t)}function f(h){e.setupView(t,h)}const m={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:m,setupLights:l,setupLightsView:f,pushLight:a,pushShadow:o,pushLightProbeGrid:c}}function Vp(i){let e=new WeakMap;function t(s,r=0){const a=e.get(s);let o;return a===void 0?(o=new Ko(i),e.set(s,[o])):r>=a.length?(o=new Ko(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const Hp=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,kp=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Wp=[new F(1,0,0),new F(-1,0,0),new F(0,1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1)],Xp=[new F(0,-1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1),new F(0,-1,0),new F(0,-1,0)],Zo=new nt,Ni=new F,gr=new F;function Yp(i,e,t){let n=new Ca;const s=new we,r=new we,a=new tt,o=new eh,c=new th,l={},f=t.maxTextureSize,m={[On]:Ft,[Ft]:On,[gn]:gn},h=new hn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new we},radius:{value:4}},vertexShader:Hp,fragmentShader:kp}),_=h.clone();_.defines.HORIZONTAL_PASS=1;const v=new $t;v.setAttribute("position",new ln(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const E=new At(v,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=gs;let u=this.type;this.render=function(b,R,g){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||b.length===0)return;this.type===Hl&&(Re("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=gs);const y=i.getRenderTarget(),L=i.getActiveCubeFace(),C=i.getActiveMipmapLevel(),U=i.state;U.setBlending(Mn),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const X=u!==this.type;X&&R.traverse(function(Z){Z.material&&(Array.isArray(Z.material)?Z.material.forEach(O=>O.needsUpdate=!0):Z.material.needsUpdate=!0)});for(let Z=0,O=b.length;Z<O;Z++){const Y=b[Z],V=Y.shadow;if(V===void 0){Re("WebGLShadowMap:",Y,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);const J=V.getFrameExtents();s.multiply(J),r.copy(V.mapSize),(s.x>f||s.y>f)&&(s.x>f&&(r.x=Math.floor(f/J.x),s.x=r.x*J.x,V.mapSize.x=r.x),s.y>f&&(r.y=Math.floor(f/J.y),s.y=r.y*J.y,V.mapSize.y=r.y));const j=i.state.buffers.depth.getReversed();if(V.camera._reversedDepth=j,V.map===null||X===!0){if(V.map!==null&&(V.map.depthTexture!==null&&(V.map.depthTexture.dispose(),V.map.depthTexture=null),V.map.dispose()),this.type===Fi){if(Y.isPointLight){Re("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}V.map=new on(s.x,s.y,{format:ei,type:En,minFilter:Rt,magFilter:Rt,generateMipmaps:!1}),V.map.texture.name=Y.name+".shadowMap",V.map.depthTexture=new Ai(s.x,s.y,sn),V.map.depthTexture.name=Y.name+".shadowMapDepth",V.map.depthTexture.format=yn,V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=St,V.map.depthTexture.magFilter=St}else Y.isPointLight?(V.map=new Al(s.x),V.map.depthTexture=new qc(s.x,cn)):(V.map=new on(s.x,s.y),V.map.depthTexture=new Ai(s.x,s.y,cn)),V.map.depthTexture.name=Y.name+".shadowMap",V.map.depthTexture.format=yn,this.type===gs?(V.map.depthTexture.compareFunction=j?ya:Ea,V.map.depthTexture.minFilter=Rt,V.map.depthTexture.magFilter=Rt):(V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=St,V.map.depthTexture.magFilter=St);V.camera.updateProjectionMatrix()}const he=V.map.isWebGLCubeRenderTarget?6:1;for(let pe=0;pe<he;pe++){if(V.map.isWebGLCubeRenderTarget)i.setRenderTarget(V.map,pe),i.clear();else{pe===0&&(i.setRenderTarget(V.map),i.clear());const ge=V.getViewport(pe);a.set(r.x*ge.x,r.y*ge.y,r.x*ge.z,r.y*ge.w),U.viewport(a)}if(Y.isPointLight){const ge=V.camera,ke=V.matrix,it=Y.distance||ge.far;it!==ge.far&&(ge.far=it,ge.updateProjectionMatrix()),Ni.setFromMatrixPosition(Y.matrixWorld),ge.position.copy(Ni),gr.copy(ge.position),gr.add(Wp[pe]),ge.up.copy(Xp[pe]),ge.lookAt(gr),ge.updateMatrixWorld(),ke.makeTranslation(-Ni.x,-Ni.y,-Ni.z),Zo.multiplyMatrices(ge.projectionMatrix,ge.matrixWorldInverse),V._frustum.setFromProjectionMatrix(Zo,ge.coordinateSystem,ge.reversedDepth)}else V.updateMatrices(Y);n=V.getFrustum(),M(R,g,V.camera,Y,this.type)}V.isPointLightShadow!==!0&&this.type===Fi&&A(V,g),V.needsUpdate=!1}u=this.type,p.needsUpdate=!1,i.setRenderTarget(y,L,C)};function A(b,R){const g=e.update(E);h.defines.VSM_SAMPLES!==b.blurSamples&&(h.defines.VSM_SAMPLES=b.blurSamples,_.defines.VSM_SAMPLES=b.blurSamples,h.needsUpdate=!0,_.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new on(s.x,s.y,{format:ei,type:En})),h.uniforms.shadow_pass.value=b.map.depthTexture,h.uniforms.resolution.value=b.mapSize,h.uniforms.radius.value=b.radius,i.setRenderTarget(b.mapPass),i.clear(),i.renderBufferDirect(R,null,g,h,E,null),_.uniforms.shadow_pass.value=b.mapPass.texture,_.uniforms.resolution.value=b.mapSize,_.uniforms.radius.value=b.radius,i.setRenderTarget(b.map),i.clear(),i.renderBufferDirect(R,null,g,_,E,null)}function w(b,R,g,y){let L=null;const C=g.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(C!==void 0)L=C;else if(L=g.isPointLight===!0?c:o,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const U=L.uuid,X=R.uuid;let Z=l[U];Z===void 0&&(Z={},l[U]=Z);let O=Z[X];O===void 0&&(O=L.clone(),Z[X]=O,R.addEventListener("dispose",T)),L=O}if(L.visible=R.visible,L.wireframe=R.wireframe,y===Fi?L.side=R.shadowSide!==null?R.shadowSide:R.side:L.side=R.shadowSide!==null?R.shadowSide:m[R.side],L.alphaMap=R.alphaMap,L.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,L.map=R.map,L.clipShadows=R.clipShadows,L.clippingPlanes=R.clippingPlanes,L.clipIntersection=R.clipIntersection,L.displacementMap=R.displacementMap,L.displacementScale=R.displacementScale,L.displacementBias=R.displacementBias,L.wireframeLinewidth=R.wireframeLinewidth,L.linewidth=R.linewidth,g.isPointLight===!0&&L.isMeshDistanceMaterial===!0){const U=i.properties.get(L);U.light=g}return L}function M(b,R,g,y,L){if(b.visible===!1)return;if(b.layers.test(R.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&L===Fi)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(g.matrixWorldInverse,b.matrixWorld);const X=e.update(b),Z=b.material;if(Array.isArray(Z)){const O=X.groups;for(let Y=0,V=O.length;Y<V;Y++){const J=O[Y],j=Z[J.materialIndex];if(j&&j.visible){const he=w(b,j,y,L);b.onBeforeShadow(i,b,R,g,X,he,J),i.renderBufferDirect(g,null,X,he,b,J),b.onAfterShadow(i,b,R,g,X,he,J)}}}else if(Z.visible){const O=w(b,Z,y,L);b.onBeforeShadow(i,b,R,g,X,O,null),i.renderBufferDirect(g,null,X,O,b,null),b.onAfterShadow(i,b,R,g,X,O,null)}}const U=b.children;for(let X=0,Z=U.length;X<Z;X++)M(U[X],R,g,y,L)}function T(b){b.target.removeEventListener("dispose",T);for(const g in l){const y=l[g],L=b.target.uuid;L in y&&(y[L].dispose(),delete y[L])}}}function qp(i,e){function t(){let P=!1;const ne=new tt;let q=null;const oe=new tt(0,0,0,0);return{setMask:function(fe){q!==fe&&!P&&(i.colorMask(fe,fe,fe,fe),q=fe)},setLocked:function(fe){P=fe},setClear:function(fe,Q,Me,xe,rt){rt===!0&&(fe*=xe,Q*=xe,Me*=xe),ne.set(fe,Q,Me,xe),oe.equals(ne)===!1&&(i.clearColor(fe,Q,Me,xe),oe.copy(ne))},reset:function(){P=!1,q=null,oe.set(-1,0,0,0)}}}function n(){let P=!1,ne=!1,q=null,oe=null,fe=null;return{setReversed:function(Q){if(ne!==Q){const Me=e.get("EXT_clip_control");Q?Me.clipControlEXT(Me.LOWER_LEFT_EXT,Me.ZERO_TO_ONE_EXT):Me.clipControlEXT(Me.LOWER_LEFT_EXT,Me.NEGATIVE_ONE_TO_ONE_EXT),ne=Q;const xe=fe;fe=null,this.setClear(xe)}},getReversed:function(){return ne},setTest:function(Q){Q?ee(i.DEPTH_TEST):Ce(i.DEPTH_TEST)},setMask:function(Q){q!==Q&&!P&&(i.depthMask(Q),q=Q)},setFunc:function(Q){if(ne&&(Q=Sc[Q]),oe!==Q){switch(Q){case br:i.depthFunc(i.NEVER);break;case Tr:i.depthFunc(i.ALWAYS);break;case Ar:i.depthFunc(i.LESS);break;case bi:i.depthFunc(i.LEQUAL);break;case Rr:i.depthFunc(i.EQUAL);break;case wr:i.depthFunc(i.GEQUAL);break;case Cr:i.depthFunc(i.GREATER);break;case Pr:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}oe=Q}},setLocked:function(Q){P=Q},setClear:function(Q){fe!==Q&&(fe=Q,ne&&(Q=1-Q),i.clearDepth(Q))},reset:function(){P=!1,q=null,oe=null,fe=null,ne=!1}}}function s(){let P=!1,ne=null,q=null,oe=null,fe=null,Q=null,Me=null,xe=null,rt=null;return{setTest:function(je){P||(je?ee(i.STENCIL_TEST):Ce(i.STENCIL_TEST))},setMask:function(je){ne!==je&&!P&&(i.stencilMask(je),ne=je)},setFunc:function(je,Jt,Qt){(q!==je||oe!==Jt||fe!==Qt)&&(i.stencilFunc(je,Jt,Qt),q=je,oe=Jt,fe=Qt)},setOp:function(je,Jt,Qt){(Q!==je||Me!==Jt||xe!==Qt)&&(i.stencilOp(je,Jt,Qt),Q=je,Me=Jt,xe=Qt)},setLocked:function(je){P=je},setClear:function(je){rt!==je&&(i.clearStencil(je),rt=je)},reset:function(){P=!1,ne=null,q=null,oe=null,fe=null,Q=null,Me=null,xe=null,rt=null}}}const r=new t,a=new n,o=new s,c=new WeakMap,l=new WeakMap;let f={},m={},h={},_=new WeakMap,v=[],E=null,p=!1,u=null,A=null,w=null,M=null,T=null,b=null,R=null,g=new Be(0,0,0),y=0,L=!1,C=null,U=null,X=null,Z=null,O=null;const Y=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,J=0;const j=i.getParameter(i.VERSION);j.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(j)[1]),V=J>=1):j.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),V=J>=2);let he=null,pe={};const ge=i.getParameter(i.SCISSOR_BOX),ke=i.getParameter(i.VIEWPORT),it=new tt().fromArray(ge),We=new tt().fromArray(ke);function $(P,ne,q,oe){const fe=new Uint8Array(4),Q=i.createTexture();i.bindTexture(P,Q),i.texParameteri(P,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(P,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Me=0;Me<q;Me++)P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY?i.texImage3D(ne,0,i.RGBA,1,1,oe,0,i.RGBA,i.UNSIGNED_BYTE,fe):i.texImage2D(ne+Me,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,fe);return Q}const ie={};ie[i.TEXTURE_2D]=$(i.TEXTURE_2D,i.TEXTURE_2D,1),ie[i.TEXTURE_CUBE_MAP]=$(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ie[i.TEXTURE_2D_ARRAY]=$(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ie[i.TEXTURE_3D]=$(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ee(i.DEPTH_TEST),a.setFunc(bi),ht(!1),ft(qa),ee(i.CULL_FACE),Xe(Mn);function ee(P){f[P]!==!0&&(i.enable(P),f[P]=!0)}function Ce(P){f[P]!==!1&&(i.disable(P),f[P]=!1)}function De(P,ne){return h[P]!==ne?(i.bindFramebuffer(P,ne),h[P]=ne,P===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=ne),P===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=ne),!0):!1}function Te(P,ne){let q=v,oe=!1;if(P){q=_.get(ne),q===void 0&&(q=[],_.set(ne,q));const fe=P.textures;if(q.length!==fe.length||q[0]!==i.COLOR_ATTACHMENT0){for(let Q=0,Me=fe.length;Q<Me;Q++)q[Q]=i.COLOR_ATTACHMENT0+Q;q.length=fe.length,oe=!0}}else q[0]!==i.BACK&&(q[0]=i.BACK,oe=!0);oe&&i.drawBuffers(q)}function ot(P){return E!==P?(i.useProgram(P),E=P,!0):!1}const Oe={[Kn]:i.FUNC_ADD,[Wl]:i.FUNC_SUBTRACT,[Xl]:i.FUNC_REVERSE_SUBTRACT};Oe[Yl]=i.MIN,Oe[ql]=i.MAX;const $e={[Kl]:i.ZERO,[Zl]:i.ONE,[$l]:i.SRC_COLOR,[Er]:i.SRC_ALPHA,[nc]:i.SRC_ALPHA_SATURATE,[ec]:i.DST_COLOR,[Ql]:i.DST_ALPHA,[Jl]:i.ONE_MINUS_SRC_COLOR,[yr]:i.ONE_MINUS_SRC_ALPHA,[tc]:i.ONE_MINUS_DST_COLOR,[jl]:i.ONE_MINUS_DST_ALPHA,[ic]:i.CONSTANT_COLOR,[sc]:i.ONE_MINUS_CONSTANT_COLOR,[rc]:i.CONSTANT_ALPHA,[ac]:i.ONE_MINUS_CONSTANT_ALPHA};function Xe(P,ne,q,oe,fe,Q,Me,xe,rt,je){if(P===Mn){p===!0&&(Ce(i.BLEND),p=!1);return}if(p===!1&&(ee(i.BLEND),p=!0),P!==kl){if(P!==u||je!==L){if((A!==Kn||T!==Kn)&&(i.blendEquation(i.FUNC_ADD),A=Kn,T=Kn),je)switch(P){case Si:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ka:i.blendFunc(i.ONE,i.ONE);break;case Za:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case $a:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Ge("WebGLState: Invalid blending: ",P);break}else switch(P){case Si:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ka:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Za:Ge("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case $a:Ge("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ge("WebGLState: Invalid blending: ",P);break}w=null,M=null,b=null,R=null,g.set(0,0,0),y=0,u=P,L=je}return}fe=fe||ne,Q=Q||q,Me=Me||oe,(ne!==A||fe!==T)&&(i.blendEquationSeparate(Oe[ne],Oe[fe]),A=ne,T=fe),(q!==w||oe!==M||Q!==b||Me!==R)&&(i.blendFuncSeparate($e[q],$e[oe],$e[Q],$e[Me]),w=q,M=oe,b=Q,R=Me),(xe.equals(g)===!1||rt!==y)&&(i.blendColor(xe.r,xe.g,xe.b,rt),g.copy(xe),y=rt),u=P,L=!1}function Ve(P,ne){P.side===gn?Ce(i.CULL_FACE):ee(i.CULL_FACE);let q=P.side===Ft;ne&&(q=!q),ht(q),P.blending===Si&&P.transparent===!1?Xe(Mn):Xe(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),a.setFunc(P.depthFunc),a.setTest(P.depthTest),a.setMask(P.depthWrite),r.setMask(P.colorWrite);const oe=P.stencilWrite;o.setTest(oe),oe&&(o.setMask(P.stencilWriteMask),o.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),o.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),Mt(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?ee(i.SAMPLE_ALPHA_TO_COVERAGE):Ce(i.SAMPLE_ALPHA_TO_COVERAGE)}function ht(P){C!==P&&(P?i.frontFace(i.CW):i.frontFace(i.CCW),C=P)}function ft(P){P!==Gl?(ee(i.CULL_FACE),P!==U&&(P===qa?i.cullFace(i.BACK):P===Vl?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ce(i.CULL_FACE),U=P}function xt(P){P!==X&&(V&&i.lineWidth(P),X=P)}function Mt(P,ne,q){P?(ee(i.POLYGON_OFFSET_FILL),(Z!==ne||O!==q)&&(Z=ne,O=q,a.getReversed()&&(ne=-ne),i.polygonOffset(ne,q))):Ce(i.POLYGON_OFFSET_FILL)}function st(P){P?ee(i.SCISSOR_TEST):Ce(i.SCISSOR_TEST)}function ut(P){P===void 0&&(P=i.TEXTURE0+Y-1),he!==P&&(i.activeTexture(P),he=P)}function D(P,ne,q){q===void 0&&(he===null?q=i.TEXTURE0+Y-1:q=he);let oe=pe[q];oe===void 0&&(oe={type:void 0,texture:void 0},pe[q]=oe),(oe.type!==P||oe.texture!==ne)&&(he!==q&&(i.activeTexture(q),he=q),i.bindTexture(P,ne||ie[P]),oe.type=P,oe.texture=ne)}function Lt(){const P=pe[he];P!==void 0&&P.type!==void 0&&(i.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function Ye(){try{i.compressedTexImage2D(...arguments)}catch(P){Ge("WebGLState:",P)}}function S(){try{i.compressedTexImage3D(...arguments)}catch(P){Ge("WebGLState:",P)}}function d(){try{i.texSubImage2D(...arguments)}catch(P){Ge("WebGLState:",P)}}function N(){try{i.texSubImage3D(...arguments)}catch(P){Ge("WebGLState:",P)}}function G(){try{i.compressedTexSubImage2D(...arguments)}catch(P){Ge("WebGLState:",P)}}function k(){try{i.compressedTexSubImage3D(...arguments)}catch(P){Ge("WebGLState:",P)}}function te(){try{i.texStorage2D(...arguments)}catch(P){Ge("WebGLState:",P)}}function se(){try{i.texStorage3D(...arguments)}catch(P){Ge("WebGLState:",P)}}function W(){try{i.texImage2D(...arguments)}catch(P){Ge("WebGLState:",P)}}function K(){try{i.texImage3D(...arguments)}catch(P){Ge("WebGLState:",P)}}function re(P){return m[P]!==void 0?m[P]:i.getParameter(P)}function Se(P,ne){m[P]!==ne&&(i.pixelStorei(P,ne),m[P]=ne)}function le(P){it.equals(P)===!1&&(i.scissor(P.x,P.y,P.z,P.w),it.copy(P))}function ae(P){We.equals(P)===!1&&(i.viewport(P.x,P.y,P.z,P.w),We.copy(P))}function be(P,ne){let q=l.get(ne);q===void 0&&(q=new WeakMap,l.set(ne,q));let oe=q.get(P);oe===void 0&&(oe=i.getUniformBlockIndex(ne,P.name),q.set(P,oe))}function Ae(P,ne){const oe=l.get(ne).get(P);c.get(ne)!==oe&&(i.uniformBlockBinding(ne,oe,P.__bindingPointIndex),c.set(ne,oe))}function Le(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),f={},m={},he=null,pe={},h={},_=new WeakMap,v=[],E=null,p=!1,u=null,A=null,w=null,M=null,T=null,b=null,R=null,g=new Be(0,0,0),y=0,L=!1,C=null,U=null,X=null,Z=null,O=null,it.set(0,0,i.canvas.width,i.canvas.height),We.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ee,disable:Ce,bindFramebuffer:De,drawBuffers:Te,useProgram:ot,setBlending:Xe,setMaterial:Ve,setFlipSided:ht,setCullFace:ft,setLineWidth:xt,setPolygonOffset:Mt,setScissorTest:st,activeTexture:ut,bindTexture:D,unbindTexture:Lt,compressedTexImage2D:Ye,compressedTexImage3D:S,texImage2D:W,texImage3D:K,pixelStorei:Se,getParameter:re,updateUBOMapping:be,uniformBlockBinding:Ae,texStorage2D:te,texStorage3D:se,texSubImage2D:d,texSubImage3D:N,compressedTexSubImage2D:G,compressedTexSubImage3D:k,scissor:le,viewport:ae,reset:Le}}function Kp(i,e,t,n,s,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new we,f=new WeakMap,m=new Set;let h;const _=new WeakMap;let v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(S,d){return v?new OffscreenCanvas(S,d):Ps("canvas")}function p(S,d,N){let G=1;const k=Ye(S);if((k.width>N||k.height>N)&&(G=N/Math.max(k.width,k.height)),G<1)if(typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&S instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&S instanceof ImageBitmap||typeof VideoFrame<"u"&&S instanceof VideoFrame){const te=Math.floor(G*k.width),se=Math.floor(G*k.height);h===void 0&&(h=E(te,se));const W=d?E(te,se):h;return W.width=te,W.height=se,W.getContext("2d").drawImage(S,0,0,te,se),Re("WebGLRenderer: Texture has been resized from ("+k.width+"x"+k.height+") to ("+te+"x"+se+")."),W}else return"data"in S&&Re("WebGLRenderer: Image in DataTexture is too big ("+k.width+"x"+k.height+")."),S;return S}function u(S){return S.generateMipmaps}function A(S){i.generateMipmap(S)}function w(S){return S.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:S.isWebGL3DRenderTarget?i.TEXTURE_3D:S.isWebGLArrayRenderTarget||S.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function M(S,d,N,G,k,te=!1){if(S!==null){if(i[S]!==void 0)return i[S];Re("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let se;G&&(se=e.get("EXT_texture_norm16"),se||Re("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let W=d;if(d===i.RED&&(N===i.FLOAT&&(W=i.R32F),N===i.HALF_FLOAT&&(W=i.R16F),N===i.UNSIGNED_BYTE&&(W=i.R8),N===i.UNSIGNED_SHORT&&se&&(W=se.R16_EXT),N===i.SHORT&&se&&(W=se.R16_SNORM_EXT)),d===i.RED_INTEGER&&(N===i.UNSIGNED_BYTE&&(W=i.R8UI),N===i.UNSIGNED_SHORT&&(W=i.R16UI),N===i.UNSIGNED_INT&&(W=i.R32UI),N===i.BYTE&&(W=i.R8I),N===i.SHORT&&(W=i.R16I),N===i.INT&&(W=i.R32I)),d===i.RG&&(N===i.FLOAT&&(W=i.RG32F),N===i.HALF_FLOAT&&(W=i.RG16F),N===i.UNSIGNED_BYTE&&(W=i.RG8),N===i.UNSIGNED_SHORT&&se&&(W=se.RG16_EXT),N===i.SHORT&&se&&(W=se.RG16_SNORM_EXT)),d===i.RG_INTEGER&&(N===i.UNSIGNED_BYTE&&(W=i.RG8UI),N===i.UNSIGNED_SHORT&&(W=i.RG16UI),N===i.UNSIGNED_INT&&(W=i.RG32UI),N===i.BYTE&&(W=i.RG8I),N===i.SHORT&&(W=i.RG16I),N===i.INT&&(W=i.RG32I)),d===i.RGB_INTEGER&&(N===i.UNSIGNED_BYTE&&(W=i.RGB8UI),N===i.UNSIGNED_SHORT&&(W=i.RGB16UI),N===i.UNSIGNED_INT&&(W=i.RGB32UI),N===i.BYTE&&(W=i.RGB8I),N===i.SHORT&&(W=i.RGB16I),N===i.INT&&(W=i.RGB32I)),d===i.RGBA_INTEGER&&(N===i.UNSIGNED_BYTE&&(W=i.RGBA8UI),N===i.UNSIGNED_SHORT&&(W=i.RGBA16UI),N===i.UNSIGNED_INT&&(W=i.RGBA32UI),N===i.BYTE&&(W=i.RGBA8I),N===i.SHORT&&(W=i.RGBA16I),N===i.INT&&(W=i.RGBA32I)),d===i.RGB&&(N===i.UNSIGNED_SHORT&&se&&(W=se.RGB16_EXT),N===i.SHORT&&se&&(W=se.RGB16_SNORM_EXT),N===i.UNSIGNED_INT_5_9_9_9_REV&&(W=i.RGB9_E5),N===i.UNSIGNED_INT_10F_11F_11F_REV&&(W=i.R11F_G11F_B10F)),d===i.RGBA){const K=te?Cs:ze.getTransfer(k);N===i.FLOAT&&(W=i.RGBA32F),N===i.HALF_FLOAT&&(W=i.RGBA16F),N===i.UNSIGNED_BYTE&&(W=K===qe?i.SRGB8_ALPHA8:i.RGBA8),N===i.UNSIGNED_SHORT&&se&&(W=se.RGBA16_EXT),N===i.SHORT&&se&&(W=se.RGBA16_SNORM_EXT),N===i.UNSIGNED_SHORT_4_4_4_4&&(W=i.RGBA4),N===i.UNSIGNED_SHORT_5_5_5_1&&(W=i.RGB5_A1)}return(W===i.R16F||W===i.R32F||W===i.RG16F||W===i.RG32F||W===i.RGBA16F||W===i.RGBA32F)&&e.get("EXT_color_buffer_float"),W}function T(S,d){let N;return S?d===null||d===cn||d===zi?N=i.DEPTH24_STENCIL8:d===sn?N=i.DEPTH32F_STENCIL8:d===Bi&&(N=i.DEPTH24_STENCIL8,Re("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):d===null||d===cn||d===zi?N=i.DEPTH_COMPONENT24:d===sn?N=i.DEPTH_COMPONENT32F:d===Bi&&(N=i.DEPTH_COMPONENT16),N}function b(S,d){return u(S)===!0||S.isFramebufferTexture&&S.minFilter!==St&&S.minFilter!==Rt?Math.log2(Math.max(d.width,d.height))+1:S.mipmaps!==void 0&&S.mipmaps.length>0?S.mipmaps.length:S.isCompressedTexture&&Array.isArray(S.image)?d.mipmaps.length:1}function R(S){const d=S.target;d.removeEventListener("dispose",R),y(d),d.isVideoTexture&&f.delete(d),d.isHTMLTexture&&m.delete(d)}function g(S){const d=S.target;d.removeEventListener("dispose",g),C(d)}function y(S){const d=n.get(S);if(d.__webglInit===void 0)return;const N=S.source,G=_.get(N);if(G){const k=G[d.__cacheKey];k.usedTimes--,k.usedTimes===0&&L(S),Object.keys(G).length===0&&_.delete(N)}n.remove(S)}function L(S){const d=n.get(S);i.deleteTexture(d.__webglTexture);const N=S.source,G=_.get(N);delete G[d.__cacheKey],a.memory.textures--}function C(S){const d=n.get(S);if(S.depthTexture&&(S.depthTexture.dispose(),n.remove(S.depthTexture)),S.isWebGLCubeRenderTarget)for(let G=0;G<6;G++){if(Array.isArray(d.__webglFramebuffer[G]))for(let k=0;k<d.__webglFramebuffer[G].length;k++)i.deleteFramebuffer(d.__webglFramebuffer[G][k]);else i.deleteFramebuffer(d.__webglFramebuffer[G]);d.__webglDepthbuffer&&i.deleteRenderbuffer(d.__webglDepthbuffer[G])}else{if(Array.isArray(d.__webglFramebuffer))for(let G=0;G<d.__webglFramebuffer.length;G++)i.deleteFramebuffer(d.__webglFramebuffer[G]);else i.deleteFramebuffer(d.__webglFramebuffer);if(d.__webglDepthbuffer&&i.deleteRenderbuffer(d.__webglDepthbuffer),d.__webglMultisampledFramebuffer&&i.deleteFramebuffer(d.__webglMultisampledFramebuffer),d.__webglColorRenderbuffer)for(let G=0;G<d.__webglColorRenderbuffer.length;G++)d.__webglColorRenderbuffer[G]&&i.deleteRenderbuffer(d.__webglColorRenderbuffer[G]);d.__webglDepthRenderbuffer&&i.deleteRenderbuffer(d.__webglDepthRenderbuffer)}const N=S.textures;for(let G=0,k=N.length;G<k;G++){const te=n.get(N[G]);te.__webglTexture&&(i.deleteTexture(te.__webglTexture),a.memory.textures--),n.remove(N[G])}n.remove(S)}let U=0;function X(){U=0}function Z(){return U}function O(S){U=S}function Y(){const S=U;return S>=s.maxTextures&&Re("WebGLTextures: Trying to use "+S+" texture units while this GPU supports only "+s.maxTextures),U+=1,S}function V(S){const d=[];return d.push(S.wrapS),d.push(S.wrapT),d.push(S.wrapR||0),d.push(S.magFilter),d.push(S.minFilter),d.push(S.anisotropy),d.push(S.internalFormat),d.push(S.format),d.push(S.type),d.push(S.generateMipmaps),d.push(S.premultiplyAlpha),d.push(S.flipY),d.push(S.unpackAlignment),d.push(S.colorSpace),d.join()}function J(S,d){const N=n.get(S);if(S.isVideoTexture&&D(S),S.isRenderTargetTexture===!1&&S.isExternalTexture!==!0&&S.version>0&&N.__version!==S.version){const G=S.image;if(G===null)Re("WebGLRenderer: Texture marked for update but no image data found.");else if(G.complete===!1)Re("WebGLRenderer: Texture marked for update but image is incomplete");else{Ce(N,S,d);return}}else S.isExternalTexture&&(N.__webglTexture=S.sourceTexture?S.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,N.__webglTexture,i.TEXTURE0+d)}function j(S,d){const N=n.get(S);if(S.isRenderTargetTexture===!1&&S.version>0&&N.__version!==S.version){Ce(N,S,d);return}else S.isExternalTexture&&(N.__webglTexture=S.sourceTexture?S.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,N.__webglTexture,i.TEXTURE0+d)}function he(S,d){const N=n.get(S);if(S.isRenderTargetTexture===!1&&S.version>0&&N.__version!==S.version){Ce(N,S,d);return}t.bindTexture(i.TEXTURE_3D,N.__webglTexture,i.TEXTURE0+d)}function pe(S,d){const N=n.get(S);if(S.isCubeDepthTexture!==!0&&S.version>0&&N.__version!==S.version){De(N,S,d);return}t.bindTexture(i.TEXTURE_CUBE_MAP,N.__webglTexture,i.TEXTURE0+d)}const ge={[Dr]:i.REPEAT,[vn]:i.CLAMP_TO_EDGE,[Lr]:i.MIRRORED_REPEAT},ke={[St]:i.NEAREST,[cc]:i.NEAREST_MIPMAP_NEAREST,[qi]:i.NEAREST_MIPMAP_LINEAR,[Rt]:i.LINEAR,[Gs]:i.LINEAR_MIPMAP_NEAREST,[$n]:i.LINEAR_MIPMAP_LINEAR},it={[dc]:i.NEVER,[gc]:i.ALWAYS,[fc]:i.LESS,[Ea]:i.LEQUAL,[pc]:i.EQUAL,[ya]:i.GEQUAL,[mc]:i.GREATER,[_c]:i.NOTEQUAL};function We(S,d){if(d.type===sn&&e.has("OES_texture_float_linear")===!1&&(d.magFilter===Rt||d.magFilter===Gs||d.magFilter===qi||d.magFilter===$n||d.minFilter===Rt||d.minFilter===Gs||d.minFilter===qi||d.minFilter===$n)&&Re("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(S,i.TEXTURE_WRAP_S,ge[d.wrapS]),i.texParameteri(S,i.TEXTURE_WRAP_T,ge[d.wrapT]),(S===i.TEXTURE_3D||S===i.TEXTURE_2D_ARRAY)&&i.texParameteri(S,i.TEXTURE_WRAP_R,ge[d.wrapR]),i.texParameteri(S,i.TEXTURE_MAG_FILTER,ke[d.magFilter]),i.texParameteri(S,i.TEXTURE_MIN_FILTER,ke[d.minFilter]),d.compareFunction&&(i.texParameteri(S,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(S,i.TEXTURE_COMPARE_FUNC,it[d.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(d.magFilter===St||d.minFilter!==qi&&d.minFilter!==$n||d.type===sn&&e.has("OES_texture_float_linear")===!1)return;if(d.anisotropy>1||n.get(d).__currentAnisotropy){const N=e.get("EXT_texture_filter_anisotropic");i.texParameterf(S,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(d.anisotropy,s.getMaxAnisotropy())),n.get(d).__currentAnisotropy=d.anisotropy}}}function $(S,d){let N=!1;S.__webglInit===void 0&&(S.__webglInit=!0,d.addEventListener("dispose",R));const G=d.source;let k=_.get(G);k===void 0&&(k={},_.set(G,k));const te=V(d);if(te!==S.__cacheKey){k[te]===void 0&&(k[te]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,N=!0),k[te].usedTimes++;const se=k[S.__cacheKey];se!==void 0&&(k[S.__cacheKey].usedTimes--,se.usedTimes===0&&L(d)),S.__cacheKey=te,S.__webglTexture=k[te].texture}return N}function ie(S,d,N){return Math.floor(Math.floor(S/N)/d)}function ee(S,d,N,G){const te=S.updateRanges;if(te.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,d.width,d.height,N,G,d.data);else{te.sort((Se,le)=>Se.start-le.start);let se=0;for(let Se=1;Se<te.length;Se++){const le=te[se],ae=te[Se],be=le.start+le.count,Ae=ie(ae.start,d.width,4),Le=ie(le.start,d.width,4);ae.start<=be+1&&Ae===Le&&ie(ae.start+ae.count-1,d.width,4)===Ae?le.count=Math.max(le.count,ae.start+ae.count-le.start):(++se,te[se]=ae)}te.length=se+1;const W=t.getParameter(i.UNPACK_ROW_LENGTH),K=t.getParameter(i.UNPACK_SKIP_PIXELS),re=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,d.width);for(let Se=0,le=te.length;Se<le;Se++){const ae=te[Se],be=Math.floor(ae.start/4),Ae=Math.ceil(ae.count/4),Le=be%d.width,P=Math.floor(be/d.width),ne=Ae,q=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,Le),t.pixelStorei(i.UNPACK_SKIP_ROWS,P),t.texSubImage2D(i.TEXTURE_2D,0,Le,P,ne,q,N,G,d.data)}S.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,W),t.pixelStorei(i.UNPACK_SKIP_PIXELS,K),t.pixelStorei(i.UNPACK_SKIP_ROWS,re)}}function Ce(S,d,N){let G=i.TEXTURE_2D;(d.isDataArrayTexture||d.isCompressedArrayTexture)&&(G=i.TEXTURE_2D_ARRAY),d.isData3DTexture&&(G=i.TEXTURE_3D);const k=$(S,d),te=d.source;t.bindTexture(G,S.__webglTexture,i.TEXTURE0+N);const se=n.get(te);if(te.version!==se.__version||k===!0){if(t.activeTexture(i.TEXTURE0+N),(typeof ImageBitmap<"u"&&d.image instanceof ImageBitmap)===!1){const q=ze.getPrimaries(ze.workingColorSpace),oe=d.colorSpace===Un?null:ze.getPrimaries(d.colorSpace),fe=d.colorSpace===Un||q===oe?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,d.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,d.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,fe)}t.pixelStorei(i.UNPACK_ALIGNMENT,d.unpackAlignment);let K=p(d.image,!1,s.maxTextureSize);K=Lt(d,K);const re=r.convert(d.format,d.colorSpace),Se=r.convert(d.type);let le=M(d.internalFormat,re,Se,d.normalized,d.colorSpace,d.isVideoTexture);We(G,d);let ae;const be=d.mipmaps,Ae=d.isVideoTexture!==!0,Le=se.__version===void 0||k===!0,P=te.dataReady,ne=b(d,K);if(d.isDepthTexture)le=T(d.format===Jn,d.type),Le&&(Ae?t.texStorage2D(i.TEXTURE_2D,1,le,K.width,K.height):t.texImage2D(i.TEXTURE_2D,0,le,K.width,K.height,0,re,Se,null));else if(d.isDataTexture)if(be.length>0){Ae&&Le&&t.texStorage2D(i.TEXTURE_2D,ne,le,be[0].width,be[0].height);for(let q=0,oe=be.length;q<oe;q++)ae=be[q],Ae?P&&t.texSubImage2D(i.TEXTURE_2D,q,0,0,ae.width,ae.height,re,Se,ae.data):t.texImage2D(i.TEXTURE_2D,q,le,ae.width,ae.height,0,re,Se,ae.data);d.generateMipmaps=!1}else Ae?(Le&&t.texStorage2D(i.TEXTURE_2D,ne,le,K.width,K.height),P&&ee(d,K,re,Se)):t.texImage2D(i.TEXTURE_2D,0,le,K.width,K.height,0,re,Se,K.data);else if(d.isCompressedTexture)if(d.isCompressedArrayTexture){Ae&&Le&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ne,le,be[0].width,be[0].height,K.depth);for(let q=0,oe=be.length;q<oe;q++)if(ae=be[q],d.format!==Zt)if(re!==null)if(Ae){if(P)if(d.layerUpdates.size>0){const fe=Ao(ae.width,ae.height,d.format,d.type);for(const Q of d.layerUpdates){const Me=ae.data.subarray(Q*fe/ae.data.BYTES_PER_ELEMENT,(Q+1)*fe/ae.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,q,0,0,Q,ae.width,ae.height,1,re,Me)}d.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,q,0,0,0,ae.width,ae.height,K.depth,re,ae.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,q,le,ae.width,ae.height,K.depth,0,ae.data,0,0);else Re("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ae?P&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,q,0,0,0,ae.width,ae.height,K.depth,re,Se,ae.data):t.texImage3D(i.TEXTURE_2D_ARRAY,q,le,ae.width,ae.height,K.depth,0,re,Se,ae.data)}else{Ae&&Le&&t.texStorage2D(i.TEXTURE_2D,ne,le,be[0].width,be[0].height);for(let q=0,oe=be.length;q<oe;q++)ae=be[q],d.format!==Zt?re!==null?Ae?P&&t.compressedTexSubImage2D(i.TEXTURE_2D,q,0,0,ae.width,ae.height,re,ae.data):t.compressedTexImage2D(i.TEXTURE_2D,q,le,ae.width,ae.height,0,ae.data):Re("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ae?P&&t.texSubImage2D(i.TEXTURE_2D,q,0,0,ae.width,ae.height,re,Se,ae.data):t.texImage2D(i.TEXTURE_2D,q,le,ae.width,ae.height,0,re,Se,ae.data)}else if(d.isDataArrayTexture)if(Ae){if(Le&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ne,le,K.width,K.height,K.depth),P)if(d.layerUpdates.size>0){const q=Ao(K.width,K.height,d.format,d.type);for(const oe of d.layerUpdates){const fe=K.data.subarray(oe*q/K.data.BYTES_PER_ELEMENT,(oe+1)*q/K.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,oe,K.width,K.height,1,re,Se,fe)}d.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,K.width,K.height,K.depth,re,Se,K.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,le,K.width,K.height,K.depth,0,re,Se,K.data);else if(d.isData3DTexture)Ae?(Le&&t.texStorage3D(i.TEXTURE_3D,ne,le,K.width,K.height,K.depth),P&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,K.width,K.height,K.depth,re,Se,K.data)):t.texImage3D(i.TEXTURE_3D,0,le,K.width,K.height,K.depth,0,re,Se,K.data);else if(d.isFramebufferTexture){if(Le)if(Ae)t.texStorage2D(i.TEXTURE_2D,ne,le,K.width,K.height);else{let q=K.width,oe=K.height;for(let fe=0;fe<ne;fe++)t.texImage2D(i.TEXTURE_2D,fe,le,q,oe,0,re,Se,null),q>>=1,oe>>=1}}else if(d.isHTMLTexture){if("texElementImage2D"in i){const q=i.canvas;if(q.hasAttribute("layoutsubtree")||q.setAttribute("layoutsubtree","true"),K.parentNode!==q){q.appendChild(K),m.add(d),q.onpaint=oe=>{const fe=oe.changedElements;for(const Q of m)fe.includes(Q.image)&&(Q.needsUpdate=!0)},q.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,K);else{const fe=i.RGBA,Q=i.RGBA,Me=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,fe,Q,Me,K)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(be.length>0){if(Ae&&Le){const q=Ye(be[0]);t.texStorage2D(i.TEXTURE_2D,ne,le,q.width,q.height)}for(let q=0,oe=be.length;q<oe;q++)ae=be[q],Ae?P&&t.texSubImage2D(i.TEXTURE_2D,q,0,0,re,Se,ae):t.texImage2D(i.TEXTURE_2D,q,le,re,Se,ae);d.generateMipmaps=!1}else if(Ae){if(Le){const q=Ye(K);t.texStorage2D(i.TEXTURE_2D,ne,le,q.width,q.height)}P&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,re,Se,K)}else t.texImage2D(i.TEXTURE_2D,0,le,re,Se,K);u(d)&&A(G),se.__version=te.version,d.onUpdate&&d.onUpdate(d)}S.__version=d.version}function De(S,d,N){if(d.image.length!==6)return;const G=$(S,d),k=d.source;t.bindTexture(i.TEXTURE_CUBE_MAP,S.__webglTexture,i.TEXTURE0+N);const te=n.get(k);if(k.version!==te.__version||G===!0){t.activeTexture(i.TEXTURE0+N);const se=ze.getPrimaries(ze.workingColorSpace),W=d.colorSpace===Un?null:ze.getPrimaries(d.colorSpace),K=d.colorSpace===Un||se===W?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,d.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,d.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,d.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,K);const re=d.isCompressedTexture||d.image[0].isCompressedTexture,Se=d.image[0]&&d.image[0].isDataTexture,le=[];for(let Q=0;Q<6;Q++)!re&&!Se?le[Q]=p(d.image[Q],!0,s.maxCubemapSize):le[Q]=Se?d.image[Q].image:d.image[Q],le[Q]=Lt(d,le[Q]);const ae=le[0],be=r.convert(d.format,d.colorSpace),Ae=r.convert(d.type),Le=M(d.internalFormat,be,Ae,d.normalized,d.colorSpace),P=d.isVideoTexture!==!0,ne=te.__version===void 0||G===!0,q=k.dataReady;let oe=b(d,ae);We(i.TEXTURE_CUBE_MAP,d);let fe;if(re){P&&ne&&t.texStorage2D(i.TEXTURE_CUBE_MAP,oe,Le,ae.width,ae.height);for(let Q=0;Q<6;Q++){fe=le[Q].mipmaps;for(let Me=0;Me<fe.length;Me++){const xe=fe[Me];d.format!==Zt?be!==null?P?q&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Me,0,0,xe.width,xe.height,be,xe.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Me,Le,xe.width,xe.height,0,xe.data):Re("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):P?q&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Me,0,0,xe.width,xe.height,be,Ae,xe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Me,Le,xe.width,xe.height,0,be,Ae,xe.data)}}}else{if(fe=d.mipmaps,P&&ne){fe.length>0&&oe++;const Q=Ye(le[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,oe,Le,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(Se){P?q&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,le[Q].width,le[Q].height,be,Ae,le[Q].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Le,le[Q].width,le[Q].height,0,be,Ae,le[Q].data);for(let Me=0;Me<fe.length;Me++){const rt=fe[Me].image[Q].image;P?q&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Me+1,0,0,rt.width,rt.height,be,Ae,rt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Me+1,Le,rt.width,rt.height,0,be,Ae,rt.data)}}else{P?q&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,be,Ae,le[Q]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Le,be,Ae,le[Q]);for(let Me=0;Me<fe.length;Me++){const xe=fe[Me];P?q&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Me+1,0,0,be,Ae,xe.image[Q]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Me+1,Le,be,Ae,xe.image[Q])}}}u(d)&&A(i.TEXTURE_CUBE_MAP),te.__version=k.version,d.onUpdate&&d.onUpdate(d)}S.__version=d.version}function Te(S,d,N,G,k,te){const se=r.convert(N.format,N.colorSpace),W=r.convert(N.type),K=M(N.internalFormat,se,W,N.normalized,N.colorSpace),re=n.get(d),Se=n.get(N);if(Se.__renderTarget=d,!re.__hasExternalTextures){const le=Math.max(1,d.width>>te),ae=Math.max(1,d.height>>te);k===i.TEXTURE_3D||k===i.TEXTURE_2D_ARRAY?t.texImage3D(k,te,K,le,ae,d.depth,0,se,W,null):t.texImage2D(k,te,K,le,ae,0,se,W,null)}t.bindFramebuffer(i.FRAMEBUFFER,S),ut(d)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,G,k,Se.__webglTexture,0,st(d)):(k===i.TEXTURE_2D||k>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&k<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,G,k,Se.__webglTexture,te),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ot(S,d,N){if(i.bindRenderbuffer(i.RENDERBUFFER,S),d.depthBuffer){const G=d.depthTexture,k=G&&G.isDepthTexture?G.type:null,te=T(d.stencilBuffer,k),se=d.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;ut(d)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,st(d),te,d.width,d.height):N?i.renderbufferStorageMultisample(i.RENDERBUFFER,st(d),te,d.width,d.height):i.renderbufferStorage(i.RENDERBUFFER,te,d.width,d.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,se,i.RENDERBUFFER,S)}else{const G=d.textures;for(let k=0;k<G.length;k++){const te=G[k],se=r.convert(te.format,te.colorSpace),W=r.convert(te.type),K=M(te.internalFormat,se,W,te.normalized,te.colorSpace);ut(d)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,st(d),K,d.width,d.height):N?i.renderbufferStorageMultisample(i.RENDERBUFFER,st(d),K,d.width,d.height):i.renderbufferStorage(i.RENDERBUFFER,K,d.width,d.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Oe(S,d,N){const G=d.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,S),!(d.depthTexture&&d.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const k=n.get(d.depthTexture);if(k.__renderTarget=d,(!k.__webglTexture||d.depthTexture.image.width!==d.width||d.depthTexture.image.height!==d.height)&&(d.depthTexture.image.width=d.width,d.depthTexture.image.height=d.height,d.depthTexture.needsUpdate=!0),G){if(k.__webglInit===void 0&&(k.__webglInit=!0,d.depthTexture.addEventListener("dispose",R)),k.__webglTexture===void 0){k.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,k.__webglTexture),We(i.TEXTURE_CUBE_MAP,d.depthTexture);const re=r.convert(d.depthTexture.format),Se=r.convert(d.depthTexture.type);let le;d.depthTexture.format===yn?le=i.DEPTH_COMPONENT24:d.depthTexture.format===Jn&&(le=i.DEPTH24_STENCIL8);for(let ae=0;ae<6;ae++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,le,d.width,d.height,0,re,Se,null)}}else J(d.depthTexture,0);const te=k.__webglTexture,se=st(d),W=G?i.TEXTURE_CUBE_MAP_POSITIVE_X+N:i.TEXTURE_2D,K=d.depthTexture.format===Jn?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(d.depthTexture.format===yn)ut(d)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,K,W,te,0,se):i.framebufferTexture2D(i.FRAMEBUFFER,K,W,te,0);else if(d.depthTexture.format===Jn)ut(d)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,K,W,te,0,se):i.framebufferTexture2D(i.FRAMEBUFFER,K,W,te,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function $e(S){const d=n.get(S),N=S.isWebGLCubeRenderTarget===!0;if(d.__boundDepthTexture!==S.depthTexture){const G=S.depthTexture;if(d.__depthDisposeCallback&&d.__depthDisposeCallback(),G){const k=()=>{delete d.__boundDepthTexture,delete d.__depthDisposeCallback,G.removeEventListener("dispose",k)};G.addEventListener("dispose",k),d.__depthDisposeCallback=k}d.__boundDepthTexture=G}if(S.depthTexture&&!d.__autoAllocateDepthBuffer)if(N)for(let G=0;G<6;G++)Oe(d.__webglFramebuffer[G],S,G);else{const G=S.texture.mipmaps;G&&G.length>0?Oe(d.__webglFramebuffer[0],S,0):Oe(d.__webglFramebuffer,S,0)}else if(N){d.__webglDepthbuffer=[];for(let G=0;G<6;G++)if(t.bindFramebuffer(i.FRAMEBUFFER,d.__webglFramebuffer[G]),d.__webglDepthbuffer[G]===void 0)d.__webglDepthbuffer[G]=i.createRenderbuffer(),ot(d.__webglDepthbuffer[G],S,!1);else{const k=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,te=d.__webglDepthbuffer[G];i.bindRenderbuffer(i.RENDERBUFFER,te),i.framebufferRenderbuffer(i.FRAMEBUFFER,k,i.RENDERBUFFER,te)}}else{const G=S.texture.mipmaps;if(G&&G.length>0?t.bindFramebuffer(i.FRAMEBUFFER,d.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,d.__webglFramebuffer),d.__webglDepthbuffer===void 0)d.__webglDepthbuffer=i.createRenderbuffer(),ot(d.__webglDepthbuffer,S,!1);else{const k=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,te=d.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,te),i.framebufferRenderbuffer(i.FRAMEBUFFER,k,i.RENDERBUFFER,te)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Xe(S,d,N){const G=n.get(S);d!==void 0&&Te(G.__webglFramebuffer,S,S.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),N!==void 0&&$e(S)}function Ve(S){const d=S.texture,N=n.get(S),G=n.get(d);S.addEventListener("dispose",g);const k=S.textures,te=S.isWebGLCubeRenderTarget===!0,se=k.length>1;if(se||(G.__webglTexture===void 0&&(G.__webglTexture=i.createTexture()),G.__version=d.version,a.memory.textures++),te){N.__webglFramebuffer=[];for(let W=0;W<6;W++)if(d.mipmaps&&d.mipmaps.length>0){N.__webglFramebuffer[W]=[];for(let K=0;K<d.mipmaps.length;K++)N.__webglFramebuffer[W][K]=i.createFramebuffer()}else N.__webglFramebuffer[W]=i.createFramebuffer()}else{if(d.mipmaps&&d.mipmaps.length>0){N.__webglFramebuffer=[];for(let W=0;W<d.mipmaps.length;W++)N.__webglFramebuffer[W]=i.createFramebuffer()}else N.__webglFramebuffer=i.createFramebuffer();if(se)for(let W=0,K=k.length;W<K;W++){const re=n.get(k[W]);re.__webglTexture===void 0&&(re.__webglTexture=i.createTexture(),a.memory.textures++)}if(S.samples>0&&ut(S)===!1){N.__webglMultisampledFramebuffer=i.createFramebuffer(),N.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let W=0;W<k.length;W++){const K=k[W];N.__webglColorRenderbuffer[W]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,N.__webglColorRenderbuffer[W]);const re=r.convert(K.format,K.colorSpace),Se=r.convert(K.type),le=M(K.internalFormat,re,Se,K.normalized,K.colorSpace,S.isXRRenderTarget===!0),ae=st(S);i.renderbufferStorageMultisample(i.RENDERBUFFER,ae,le,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+W,i.RENDERBUFFER,N.__webglColorRenderbuffer[W])}i.bindRenderbuffer(i.RENDERBUFFER,null),S.depthBuffer&&(N.__webglDepthRenderbuffer=i.createRenderbuffer(),ot(N.__webglDepthRenderbuffer,S,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(te){t.bindTexture(i.TEXTURE_CUBE_MAP,G.__webglTexture),We(i.TEXTURE_CUBE_MAP,d);for(let W=0;W<6;W++)if(d.mipmaps&&d.mipmaps.length>0)for(let K=0;K<d.mipmaps.length;K++)Te(N.__webglFramebuffer[W][K],S,d,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+W,K);else Te(N.__webglFramebuffer[W],S,d,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+W,0);u(d)&&A(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(se){for(let W=0,K=k.length;W<K;W++){const re=k[W],Se=n.get(re);let le=i.TEXTURE_2D;(S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(le=S.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(le,Se.__webglTexture),We(le,re),Te(N.__webglFramebuffer,S,re,i.COLOR_ATTACHMENT0+W,le,0),u(re)&&A(le)}t.unbindTexture()}else{let W=i.TEXTURE_2D;if((S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(W=S.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(W,G.__webglTexture),We(W,d),d.mipmaps&&d.mipmaps.length>0)for(let K=0;K<d.mipmaps.length;K++)Te(N.__webglFramebuffer[K],S,d,i.COLOR_ATTACHMENT0,W,K);else Te(N.__webglFramebuffer,S,d,i.COLOR_ATTACHMENT0,W,0);u(d)&&A(W),t.unbindTexture()}S.depthBuffer&&$e(S)}function ht(S){const d=S.textures;for(let N=0,G=d.length;N<G;N++){const k=d[N];if(u(k)){const te=w(S),se=n.get(k).__webglTexture;t.bindTexture(te,se),A(te),t.unbindTexture()}}}const ft=[],xt=[];function Mt(S){if(S.samples>0){if(ut(S)===!1){const d=S.textures,N=S.width,G=S.height;let k=i.COLOR_BUFFER_BIT;const te=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,se=n.get(S),W=d.length>1;if(W)for(let re=0;re<d.length;re++)t.bindFramebuffer(i.FRAMEBUFFER,se.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+re,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,se.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+re,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,se.__webglMultisampledFramebuffer);const K=S.texture.mipmaps;K&&K.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,se.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,se.__webglFramebuffer);for(let re=0;re<d.length;re++){if(S.resolveDepthBuffer&&(S.depthBuffer&&(k|=i.DEPTH_BUFFER_BIT),S.stencilBuffer&&S.resolveStencilBuffer&&(k|=i.STENCIL_BUFFER_BIT)),W){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,se.__webglColorRenderbuffer[re]);const Se=n.get(d[re]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Se,0)}i.blitFramebuffer(0,0,N,G,0,0,N,G,k,i.NEAREST),c===!0&&(ft.length=0,xt.length=0,ft.push(i.COLOR_ATTACHMENT0+re),S.depthBuffer&&S.resolveDepthBuffer===!1&&(ft.push(te),xt.push(te),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,xt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ft))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),W)for(let re=0;re<d.length;re++){t.bindFramebuffer(i.FRAMEBUFFER,se.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+re,i.RENDERBUFFER,se.__webglColorRenderbuffer[re]);const Se=n.get(d[re]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,se.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+re,i.TEXTURE_2D,Se,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,se.__webglMultisampledFramebuffer)}else if(S.depthBuffer&&S.resolveDepthBuffer===!1&&c){const d=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[d])}}}function st(S){return Math.min(s.maxSamples,S.samples)}function ut(S){const d=n.get(S);return S.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&d.__useRenderToTexture!==!1}function D(S){const d=a.render.frame;f.get(S)!==d&&(f.set(S,d),S.update())}function Lt(S,d){const N=S.colorSpace,G=S.format,k=S.type;return S.isCompressedTexture===!0||S.isVideoTexture===!0||N!==ws&&N!==Un&&(ze.getTransfer(N)===qe?(G!==Zt||k!==Gt)&&Re("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ge("WebGLTextures: Unsupported texture color space:",N)),d}function Ye(S){return typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement?(l.width=S.naturalWidth||S.width,l.height=S.naturalHeight||S.height):typeof VideoFrame<"u"&&S instanceof VideoFrame?(l.width=S.displayWidth,l.height=S.displayHeight):(l.width=S.width,l.height=S.height),l}this.allocateTextureUnit=Y,this.resetTextureUnits=X,this.getTextureUnits=Z,this.setTextureUnits=O,this.setTexture2D=J,this.setTexture2DArray=j,this.setTexture3D=he,this.setTextureCube=pe,this.rebindTextures=Xe,this.setupRenderTarget=Ve,this.updateRenderTargetMipmap=ht,this.updateMultisampleRenderTarget=Mt,this.setupDepthRenderbuffer=$e,this.setupFrameBufferTexture=Te,this.useMultisampledRTT=ut,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Zp(i,e){function t(n,s=Un){let r;const a=ze.getTransfer(s);if(n===Gt)return i.UNSIGNED_BYTE;if(n===ga)return i.UNSIGNED_SHORT_4_4_4_4;if(n===xa)return i.UNSIGNED_SHORT_5_5_5_1;if(n===cl)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===hl)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===ol)return i.BYTE;if(n===ll)return i.SHORT;if(n===Bi)return i.UNSIGNED_SHORT;if(n===_a)return i.INT;if(n===cn)return i.UNSIGNED_INT;if(n===sn)return i.FLOAT;if(n===En)return i.HALF_FLOAT;if(n===ul)return i.ALPHA;if(n===dl)return i.RGB;if(n===Zt)return i.RGBA;if(n===yn)return i.DEPTH_COMPONENT;if(n===Jn)return i.DEPTH_STENCIL;if(n===fl)return i.RED;if(n===va)return i.RED_INTEGER;if(n===ei)return i.RG;if(n===Ma)return i.RG_INTEGER;if(n===Sa)return i.RGBA_INTEGER;if(n===xs||n===vs||n===Ms||n===Ss)if(a===qe)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===xs)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===vs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ms)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ss)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===xs)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===vs)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ms)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ss)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ir||n===Ur||n===Nr||n===Fr)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ir)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ur)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Nr)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Fr)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Or||n===Br||n===zr||n===Gr||n===Vr||n===As||n===Hr)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Or||n===Br)return a===qe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===zr)return a===qe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Gr)return r.COMPRESSED_R11_EAC;if(n===Vr)return r.COMPRESSED_SIGNED_R11_EAC;if(n===As)return r.COMPRESSED_RG11_EAC;if(n===Hr)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===kr||n===Wr||n===Xr||n===Yr||n===qr||n===Kr||n===Zr||n===$r||n===Jr||n===Qr||n===jr||n===ea||n===ta||n===na)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===kr)return a===qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Wr)return a===qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Xr)return a===qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Yr)return a===qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===qr)return a===qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Kr)return a===qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Zr)return a===qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===$r)return a===qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Jr)return a===qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Qr)return a===qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===jr)return a===qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ea)return a===qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ta)return a===qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===na)return a===qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ia||n===sa||n===ra)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===ia)return a===qe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===sa)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ra)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===aa||n===oa||n===Rs||n===la)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===aa)return r.COMPRESSED_RED_RGTC1_EXT;if(n===oa)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Rs)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===la)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===zi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const $p=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Jp=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Qp{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Ml(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new hn({vertexShader:$p,fragmentShader:Jp,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new At(new Wi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class jp extends Gn{constructor(e,t){super();const n=this;let s=null,r=1,a=null,o="local-floor",c=1,l=null,f=null,m=null,h=null,_=null,v=null;const E=typeof XRWebGLBinding<"u",p=new Qp,u={},A=t.getContextAttributes();let w=null,M=null;const T=[],b=[],R=new we;let g=null;const y=new Wt;y.viewport=new tt;const L=new Wt;L.viewport=new tt;const C=[y,L],U=new ah;let X=null,Z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let ie=T[$];return ie===void 0&&(ie=new qs,T[$]=ie),ie.getTargetRaySpace()},this.getControllerGrip=function($){let ie=T[$];return ie===void 0&&(ie=new qs,T[$]=ie),ie.getGripSpace()},this.getHand=function($){let ie=T[$];return ie===void 0&&(ie=new qs,T[$]=ie),ie.getHandSpace()};function O($){const ie=b.indexOf($.inputSource);if(ie===-1)return;const ee=T[ie];ee!==void 0&&(ee.update($.inputSource,$.frame,l||a),ee.dispatchEvent({type:$.type,data:$.inputSource}))}function Y(){s.removeEventListener("select",O),s.removeEventListener("selectstart",O),s.removeEventListener("selectend",O),s.removeEventListener("squeeze",O),s.removeEventListener("squeezestart",O),s.removeEventListener("squeezeend",O),s.removeEventListener("end",Y),s.removeEventListener("inputsourceschange",V);for(let $=0;$<T.length;$++){const ie=b[$];ie!==null&&(b[$]=null,T[$].disconnect(ie))}X=null,Z=null,p.reset();for(const $ in u)delete u[$];e.setRenderTarget(w),_=null,h=null,m=null,s=null,M=null,We.stop(),n.isPresenting=!1,e.setPixelRatio(g),e.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){r=$,n.isPresenting===!0&&Re("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){o=$,n.isPresenting===!0&&Re("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function($){l=$},this.getBaseLayer=function(){return h!==null?h:_},this.getBinding=function(){return m===null&&E&&(m=new XRWebGLBinding(s,t)),m},this.getFrame=function(){return v},this.getSession=function(){return s},this.setSession=async function($){if(s=$,s!==null){if(w=e.getRenderTarget(),s.addEventListener("select",O),s.addEventListener("selectstart",O),s.addEventListener("selectend",O),s.addEventListener("squeeze",O),s.addEventListener("squeezestart",O),s.addEventListener("squeezeend",O),s.addEventListener("end",Y),s.addEventListener("inputsourceschange",V),A.xrCompatible!==!0&&await t.makeXRCompatible(),g=e.getPixelRatio(),e.getSize(R),E&&"createProjectionLayer"in XRWebGLBinding.prototype){let ee=null,Ce=null,De=null;A.depth&&(De=A.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ee=A.stencil?Jn:yn,Ce=A.stencil?zi:cn);const Te={colorFormat:t.RGBA8,depthFormat:De,scaleFactor:r};m=this.getBinding(),h=m.createProjectionLayer(Te),s.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),M=new on(h.textureWidth,h.textureHeight,{format:Zt,type:Gt,depthTexture:new Ai(h.textureWidth,h.textureHeight,Ce,void 0,void 0,void 0,void 0,void 0,void 0,ee),stencilBuffer:A.stencil,colorSpace:e.outputColorSpace,samples:A.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const ee={antialias:A.antialias,alpha:!0,depth:A.depth,stencil:A.stencil,framebufferScaleFactor:r};_=new XRWebGLLayer(s,t,ee),s.updateRenderState({baseLayer:_}),e.setPixelRatio(1),e.setSize(_.framebufferWidth,_.framebufferHeight,!1),M=new on(_.framebufferWidth,_.framebufferHeight,{format:Zt,type:Gt,colorSpace:e.outputColorSpace,stencilBuffer:A.stencil,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),We.setContext(s),We.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function V($){for(let ie=0;ie<$.removed.length;ie++){const ee=$.removed[ie],Ce=b.indexOf(ee);Ce>=0&&(b[Ce]=null,T[Ce].disconnect(ee))}for(let ie=0;ie<$.added.length;ie++){const ee=$.added[ie];let Ce=b.indexOf(ee);if(Ce===-1){for(let Te=0;Te<T.length;Te++)if(Te>=b.length){b.push(ee),Ce=Te;break}else if(b[Te]===null){b[Te]=ee,Ce=Te;break}if(Ce===-1)break}const De=T[Ce];De&&De.connect(ee)}}const J=new F,j=new F;function he($,ie,ee){J.setFromMatrixPosition(ie.matrixWorld),j.setFromMatrixPosition(ee.matrixWorld);const Ce=J.distanceTo(j),De=ie.projectionMatrix.elements,Te=ee.projectionMatrix.elements,ot=De[14]/(De[10]-1),Oe=De[14]/(De[10]+1),$e=(De[9]+1)/De[5],Xe=(De[9]-1)/De[5],Ve=(De[8]-1)/De[0],ht=(Te[8]+1)/Te[0],ft=ot*Ve,xt=ot*ht,Mt=Ce/(-Ve+ht),st=Mt*-Ve;if(ie.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(st),$.translateZ(Mt),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),De[10]===-1)$.projectionMatrix.copy(ie.projectionMatrix),$.projectionMatrixInverse.copy(ie.projectionMatrixInverse);else{const ut=ot+Mt,D=Oe+Mt,Lt=ft-st,Ye=xt+(Ce-st),S=$e*Oe/D*ut,d=Xe*Oe/D*ut;$.projectionMatrix.makePerspective(Lt,Ye,S,d,ut,D),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function pe($,ie){ie===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(ie.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(s===null)return;let ie=$.near,ee=$.far;p.texture!==null&&(p.depthNear>0&&(ie=p.depthNear),p.depthFar>0&&(ee=p.depthFar)),U.near=L.near=y.near=ie,U.far=L.far=y.far=ee,(X!==U.near||Z!==U.far)&&(s.updateRenderState({depthNear:U.near,depthFar:U.far}),X=U.near,Z=U.far),U.layers.mask=$.layers.mask|6,y.layers.mask=U.layers.mask&-5,L.layers.mask=U.layers.mask&-3;const Ce=$.parent,De=U.cameras;pe(U,Ce);for(let Te=0;Te<De.length;Te++)pe(De[Te],Ce);De.length===2?he(U,y,L):U.projectionMatrix.copy(y.projectionMatrix),ge($,U,Ce)};function ge($,ie,ee){ee===null?$.matrix.copy(ie.matrixWorld):($.matrix.copy(ee.matrixWorld),$.matrix.invert(),$.matrix.multiply(ie.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(ie.projectionMatrix),$.projectionMatrixInverse.copy(ie.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=ha*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return U},this.getFoveation=function(){if(!(h===null&&_===null))return c},this.setFoveation=function($){c=$,h!==null&&(h.fixedFoveation=$),_!==null&&_.fixedFoveation!==void 0&&(_.fixedFoveation=$)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(U)},this.getCameraTexture=function($){return u[$]};let ke=null;function it($,ie){if(f=ie.getViewerPose(l||a),v=ie,f!==null){const ee=f.views;_!==null&&(e.setRenderTargetFramebuffer(M,_.framebuffer),e.setRenderTarget(M));let Ce=!1;ee.length!==U.cameras.length&&(U.cameras.length=0,Ce=!0);for(let Oe=0;Oe<ee.length;Oe++){const $e=ee[Oe];let Xe=null;if(_!==null)Xe=_.getViewport($e);else{const ht=m.getViewSubImage(h,$e);Xe=ht.viewport,Oe===0&&(e.setRenderTargetTextures(M,ht.colorTexture,ht.depthStencilTexture),e.setRenderTarget(M))}let Ve=C[Oe];Ve===void 0&&(Ve=new Wt,Ve.layers.enable(Oe),Ve.viewport=new tt,C[Oe]=Ve),Ve.matrix.fromArray($e.transform.matrix),Ve.matrix.decompose(Ve.position,Ve.quaternion,Ve.scale),Ve.projectionMatrix.fromArray($e.projectionMatrix),Ve.projectionMatrixInverse.copy(Ve.projectionMatrix).invert(),Ve.viewport.set(Xe.x,Xe.y,Xe.width,Xe.height),Oe===0&&(U.matrix.copy(Ve.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale)),Ce===!0&&U.cameras.push(Ve)}const De=s.enabledFeatures;if(De&&De.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&E){m=n.getBinding();const Oe=m.getDepthInformation(ee[0]);Oe&&Oe.isValid&&Oe.texture&&p.init(Oe,s.renderState)}if(De&&De.includes("camera-access")&&E){e.state.unbindTexture(),m=n.getBinding();for(let Oe=0;Oe<ee.length;Oe++){const $e=ee[Oe].camera;if($e){let Xe=u[$e];Xe||(Xe=new Ml,u[$e]=Xe);const Ve=m.getCameraImage($e);Xe.sourceTexture=Ve}}}}for(let ee=0;ee<T.length;ee++){const Ce=b[ee],De=T[ee];Ce!==null&&De!==void 0&&De.update(Ce,ie,l||a)}ke&&ke($,ie),ie.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ie}),v=null}const We=new bl;We.setAnimationLoop(it),this.setAnimationLoop=function($){ke=$},this.dispose=function(){}}}const em=new nt,Dl=new Pe;Dl.set(-1,0,0,0,1,0,0,0,1);function tm(i,e){function t(p,u){p.matrixAutoUpdate===!0&&p.updateMatrix(),u.value.copy(p.matrix)}function n(p,u){u.color.getRGB(p.fogColor.value,Sl(i)),u.isFog?(p.fogNear.value=u.near,p.fogFar.value=u.far):u.isFogExp2&&(p.fogDensity.value=u.density)}function s(p,u,A,w,M){u.isNodeMaterial?u.uniformsNeedUpdate=!1:u.isMeshBasicMaterial?r(p,u):u.isMeshLambertMaterial?(r(p,u),u.envMap&&(p.envMapIntensity.value=u.envMapIntensity)):u.isMeshToonMaterial?(r(p,u),m(p,u)):u.isMeshPhongMaterial?(r(p,u),f(p,u),u.envMap&&(p.envMapIntensity.value=u.envMapIntensity)):u.isMeshStandardMaterial?(r(p,u),h(p,u),u.isMeshPhysicalMaterial&&_(p,u,M)):u.isMeshMatcapMaterial?(r(p,u),v(p,u)):u.isMeshDepthMaterial?r(p,u):u.isMeshDistanceMaterial?(r(p,u),E(p,u)):u.isMeshNormalMaterial?r(p,u):u.isLineBasicMaterial?(a(p,u),u.isLineDashedMaterial&&o(p,u)):u.isPointsMaterial?c(p,u,A,w):u.isSpriteMaterial?l(p,u):u.isShadowMaterial?(p.color.value.copy(u.color),p.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function r(p,u){p.opacity.value=u.opacity,u.color&&p.diffuse.value.copy(u.color),u.emissive&&p.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(p.map.value=u.map,t(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,t(u.alphaMap,p.alphaMapTransform)),u.bumpMap&&(p.bumpMap.value=u.bumpMap,t(u.bumpMap,p.bumpMapTransform),p.bumpScale.value=u.bumpScale,u.side===Ft&&(p.bumpScale.value*=-1)),u.normalMap&&(p.normalMap.value=u.normalMap,t(u.normalMap,p.normalMapTransform),p.normalScale.value.copy(u.normalScale),u.side===Ft&&p.normalScale.value.negate()),u.displacementMap&&(p.displacementMap.value=u.displacementMap,t(u.displacementMap,p.displacementMapTransform),p.displacementScale.value=u.displacementScale,p.displacementBias.value=u.displacementBias),u.emissiveMap&&(p.emissiveMap.value=u.emissiveMap,t(u.emissiveMap,p.emissiveMapTransform)),u.specularMap&&(p.specularMap.value=u.specularMap,t(u.specularMap,p.specularMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest);const A=e.get(u),w=A.envMap,M=A.envMapRotation;w&&(p.envMap.value=w,p.envMapRotation.value.setFromMatrix4(em.makeRotationFromEuler(M)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(Dl),p.reflectivity.value=u.reflectivity,p.ior.value=u.ior,p.refractionRatio.value=u.refractionRatio),u.lightMap&&(p.lightMap.value=u.lightMap,p.lightMapIntensity.value=u.lightMapIntensity,t(u.lightMap,p.lightMapTransform)),u.aoMap&&(p.aoMap.value=u.aoMap,p.aoMapIntensity.value=u.aoMapIntensity,t(u.aoMap,p.aoMapTransform))}function a(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,u.map&&(p.map.value=u.map,t(u.map,p.mapTransform))}function o(p,u){p.dashSize.value=u.dashSize,p.totalSize.value=u.dashSize+u.gapSize,p.scale.value=u.scale}function c(p,u,A,w){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.size.value=u.size*A,p.scale.value=w*.5,u.map&&(p.map.value=u.map,t(u.map,p.uvTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,t(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function l(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.rotation.value=u.rotation,u.map&&(p.map.value=u.map,t(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,t(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function f(p,u){p.specular.value.copy(u.specular),p.shininess.value=Math.max(u.shininess,1e-4)}function m(p,u){u.gradientMap&&(p.gradientMap.value=u.gradientMap)}function h(p,u){p.metalness.value=u.metalness,u.metalnessMap&&(p.metalnessMap.value=u.metalnessMap,t(u.metalnessMap,p.metalnessMapTransform)),p.roughness.value=u.roughness,u.roughnessMap&&(p.roughnessMap.value=u.roughnessMap,t(u.roughnessMap,p.roughnessMapTransform)),u.envMap&&(p.envMapIntensity.value=u.envMapIntensity)}function _(p,u,A){p.ior.value=u.ior,u.sheen>0&&(p.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),p.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(p.sheenColorMap.value=u.sheenColorMap,t(u.sheenColorMap,p.sheenColorMapTransform)),u.sheenRoughnessMap&&(p.sheenRoughnessMap.value=u.sheenRoughnessMap,t(u.sheenRoughnessMap,p.sheenRoughnessMapTransform))),u.clearcoat>0&&(p.clearcoat.value=u.clearcoat,p.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(p.clearcoatMap.value=u.clearcoatMap,t(u.clearcoatMap,p.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,t(u.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(p.clearcoatNormalMap.value=u.clearcoatNormalMap,t(u.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===Ft&&p.clearcoatNormalScale.value.negate())),u.dispersion>0&&(p.dispersion.value=u.dispersion),u.iridescence>0&&(p.iridescence.value=u.iridescence,p.iridescenceIOR.value=u.iridescenceIOR,p.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(p.iridescenceMap.value=u.iridescenceMap,t(u.iridescenceMap,p.iridescenceMapTransform)),u.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=u.iridescenceThicknessMap,t(u.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),u.transmission>0&&(p.transmission.value=u.transmission,p.transmissionSamplerMap.value=A.texture,p.transmissionSamplerSize.value.set(A.width,A.height),u.transmissionMap&&(p.transmissionMap.value=u.transmissionMap,t(u.transmissionMap,p.transmissionMapTransform)),p.thickness.value=u.thickness,u.thicknessMap&&(p.thicknessMap.value=u.thicknessMap,t(u.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=u.attenuationDistance,p.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(p.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(p.anisotropyMap.value=u.anisotropyMap,t(u.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=u.specularIntensity,p.specularColor.value.copy(u.specularColor),u.specularColorMap&&(p.specularColorMap.value=u.specularColorMap,t(u.specularColorMap,p.specularColorMapTransform)),u.specularIntensityMap&&(p.specularIntensityMap.value=u.specularIntensityMap,t(u.specularIntensityMap,p.specularIntensityMapTransform))}function v(p,u){u.matcap&&(p.matcap.value=u.matcap)}function E(p,u){const A=e.get(u).light;p.referencePosition.value.setFromMatrixPosition(A.matrixWorld),p.nearDistance.value=A.shadow.camera.near,p.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function nm(i,e,t,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(M,T){const b=T.program;n.uniformBlockBinding(M,b)}function l(M,T){let b=s[M.id];b===void 0&&(p(M),b=f(M),s[M.id]=b,M.addEventListener("dispose",A));const R=T.program;n.updateUBOMapping(M,R);const g=e.render.frame;r[M.id]!==g&&(h(M),r[M.id]=g)}function f(M){const T=m();M.__bindingPointIndex=T;const b=i.createBuffer(),R=M.__size,g=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,b),i.bufferData(i.UNIFORM_BUFFER,R,g),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,T,b),b}function m(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return Ge("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(M){const T=s[M.id],b=M.uniforms,R=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,T);for(let g=0,y=b.length;g<y;g++){const L=b[g];if(Array.isArray(L))for(let C=0,U=L.length;C<U;C++)_(L[C],g,C,R);else _(L,g,0,R)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function _(M,T,b,R){if(E(M,T,b,R)===!0){const g=M.__offset,y=M.value;if(Array.isArray(y)){let L=0;for(let C=0;C<y.length;C++){const U=y[C],X=u(U);v(U,M.__data,L),typeof U!="number"&&typeof U!="boolean"&&!U.isMatrix3&&!ArrayBuffer.isView(U)&&(L+=X.storage/Float32Array.BYTES_PER_ELEMENT)}}else v(y,M.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,g,M.__data)}}function v(M,T,b){typeof M=="number"||typeof M=="boolean"?T[0]=M:M.isMatrix3?(T[0]=M.elements[0],T[1]=M.elements[1],T[2]=M.elements[2],T[3]=0,T[4]=M.elements[3],T[5]=M.elements[4],T[6]=M.elements[5],T[7]=0,T[8]=M.elements[6],T[9]=M.elements[7],T[10]=M.elements[8],T[11]=0):ArrayBuffer.isView(M)?T.set(new M.constructor(M.buffer,M.byteOffset,T.length)):M.toArray(T,b)}function E(M,T,b,R){const g=M.value,y=T+"_"+b;if(R[y]===void 0)return typeof g=="number"||typeof g=="boolean"?R[y]=g:ArrayBuffer.isView(g)?R[y]=g.slice():R[y]=g.clone(),!0;{const L=R[y];if(typeof g=="number"||typeof g=="boolean"){if(L!==g)return R[y]=g,!0}else{if(ArrayBuffer.isView(g))return!0;if(L.equals(g)===!1)return L.copy(g),!0}}return!1}function p(M){const T=M.uniforms;let b=0;const R=16;for(let y=0,L=T.length;y<L;y++){const C=Array.isArray(T[y])?T[y]:[T[y]];for(let U=0,X=C.length;U<X;U++){const Z=C[U],O=Array.isArray(Z.value)?Z.value:[Z.value];for(let Y=0,V=O.length;Y<V;Y++){const J=O[Y],j=u(J),he=b%R,pe=he%j.boundary,ge=he+pe;b+=pe,ge!==0&&R-ge<j.storage&&(b+=R-ge),Z.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),Z.__offset=b,b+=j.storage}}}const g=b%R;return g>0&&(b+=R-g),M.__size=b,M.__cache={},this}function u(M){const T={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(T.boundary=4,T.storage=4):M.isVector2?(T.boundary=8,T.storage=8):M.isVector3||M.isColor?(T.boundary=16,T.storage=12):M.isVector4?(T.boundary=16,T.storage=16):M.isMatrix3?(T.boundary=48,T.storage=48):M.isMatrix4?(T.boundary=64,T.storage=64):M.isTexture?Re("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(T.boundary=16,T.storage=M.byteLength):Re("WebGLRenderer: Unsupported uniform value type.",M),T}function A(M){const T=M.target;T.removeEventListener("dispose",A);const b=a.indexOf(T.__bindingPointIndex);a.splice(b,1),i.deleteBuffer(s[T.id]),delete s[T.id],delete r[T.id]}function w(){for(const M in s)i.deleteBuffer(s[M]);a=[],s={},r={}}return{bind:c,update:l,dispose:w}}const im=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let tn=null;function sm(){return tn===null&&(tn=new kc(im,16,16,ei,En),tn.name="DFG_LUT",tn.minFilter=Rt,tn.magFilter=Rt,tn.wrapS=vn,tn.wrapT=vn,tn.generateMipmaps=!1,tn.needsUpdate=!0),tn}class rm{constructor(e={}){const{canvas:t=vc(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:m=!1,reversedDepthBuffer:h=!1,outputBufferType:_=Gt}=e;this.isWebGLRenderer=!0;let v;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");v=n.getContextAttributes().alpha}else v=a;const E=_,p=new Set([Sa,Ma,va]),u=new Set([Gt,cn,Bi,zi,ga,xa]),A=new Uint32Array(4),w=new Int32Array(4),M=new F;let T=null,b=null;const R=[],g=[];let y=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=an,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const L=this;let C=!1,U=null,X=null,Z=null,O=null;this._outputColorSpace=kt;let Y=0,V=0,J=null,j=-1,he=null;const pe=new tt,ge=new tt;let ke=null;const it=new Be(0);let We=0,$=t.width,ie=t.height,ee=1,Ce=null,De=null;const Te=new tt(0,0,$,ie),ot=new tt(0,0,$,ie);let Oe=!1;const $e=new Ca;let Xe=!1,Ve=!1;const ht=new nt,ft=new F,xt=new tt,Mt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let st=!1;function ut(){return J===null?ee:1}let D=n;function Lt(x,I){return t.getContext(x,I)}try{const x={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:f,failIfMajorPerformanceCaveat:m};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${pa}`),t.addEventListener("webglcontextlost",rt,!1),t.addEventListener("webglcontextrestored",je,!1),t.addEventListener("webglcontextcreationerror",Jt,!1),D===null){const I="webgl2";if(D=Lt(I,x),D===null)throw Lt(I)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(x){throw Ge("WebGLRenderer: "+x.message),x}let Ye,S,d,N,G,k,te,se,W,K,re,Se,le,ae,be,Ae,Le,P,ne,q,oe,fe,Q;function Me(){Ye=new sf(D),Ye.init(),oe=new Zp(D,Ye),S=new Zd(D,Ye,e,oe),d=new qp(D,Ye),S.reversedDepthBuffer&&h&&d.buffers.depth.setReversed(!0),X=D.createFramebuffer(),Z=D.createFramebuffer(),O=D.createFramebuffer(),N=new of(D),G=new Ip,k=new Kp(D,Ye,d,G,S,oe,N),te=new nf(L),se=new hh(D),fe=new qd(D,se),W=new rf(D,se,N,fe),K=new cf(D,W,se,fe,N),P=new lf(D,S,k),be=new $d(G),re=new Lp(L,te,Ye,S,fe,be),Se=new tm(L,G),le=new Np,ae=new Vp(Ye),Le=new Yd(L,te,d,K,v,c),Ae=new Yp(L,K,S),Q=new nm(D,N,S,d),ne=new Kd(D,Ye,N),q=new af(D,Ye,N),N.programs=re.programs,L.capabilities=S,L.extensions=Ye,L.properties=G,L.renderLists=le,L.shadowMap=Ae,L.state=d,L.info=N}Me(),E!==Gt&&(y=new uf(E,t.width,t.height,o,s,r));const xe=new jp(L,D);this.xr=xe,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const x=Ye.get("WEBGL_lose_context");x&&x.loseContext()},this.forceContextRestore=function(){const x=Ye.get("WEBGL_lose_context");x&&x.restoreContext()},this.getPixelRatio=function(){return ee},this.setPixelRatio=function(x){x!==void 0&&(ee=x,this.setSize($,ie,!1))},this.getSize=function(x){return x.set($,ie)},this.setSize=function(x,I,H=!0){if(xe.isPresenting){Re("WebGLRenderer: Can't change size while VR device is presenting.");return}$=x,ie=I,t.width=Math.floor(x*ee),t.height=Math.floor(I*ee),H===!0&&(t.style.width=x+"px",t.style.height=I+"px"),y!==null&&y.setSize(t.width,t.height),this.setViewport(0,0,x,I)},this.getDrawingBufferSize=function(x){return x.set($*ee,ie*ee).floor()},this.setDrawingBufferSize=function(x,I,H){$=x,ie=I,ee=H,t.width=Math.floor(x*H),t.height=Math.floor(I*H),this.setViewport(0,0,x,I)},this.setEffects=function(x){if(E===Gt){Ge("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(x){for(let I=0;I<x.length;I++)if(x[I].isOutputPass===!0){Re("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}y.setEffects(x||[])},this.getCurrentViewport=function(x){return x.copy(pe)},this.getViewport=function(x){return x.copy(Te)},this.setViewport=function(x,I,H,B){x.isVector4?Te.set(x.x,x.y,x.z,x.w):Te.set(x,I,H,B),d.viewport(pe.copy(Te).multiplyScalar(ee).round())},this.getScissor=function(x){return x.copy(ot)},this.setScissor=function(x,I,H,B){x.isVector4?ot.set(x.x,x.y,x.z,x.w):ot.set(x,I,H,B),d.scissor(ge.copy(ot).multiplyScalar(ee).round())},this.getScissorTest=function(){return Oe},this.setScissorTest=function(x){d.setScissorTest(Oe=x)},this.setOpaqueSort=function(x){Ce=x},this.setTransparentSort=function(x){De=x},this.getClearColor=function(x){return x.copy(Le.getClearColor())},this.setClearColor=function(){Le.setClearColor(...arguments)},this.getClearAlpha=function(){return Le.getClearAlpha()},this.setClearAlpha=function(){Le.setClearAlpha(...arguments)},this.clear=function(x=!0,I=!0,H=!0){let B=0;if(x){let z=!1;if(J!==null){const de=J.texture.format;z=p.has(de)}if(z){const de=J.texture.type,_e=u.has(de),ue=Le.getClearColor(),ve=Le.getClearAlpha(),Ee=ue.r,Ie=ue.g,Ne=ue.b;_e?(A[0]=Ee,A[1]=Ie,A[2]=Ne,A[3]=ve,D.clearBufferuiv(D.COLOR,0,A)):(w[0]=Ee,w[1]=Ie,w[2]=Ne,w[3]=ve,D.clearBufferiv(D.COLOR,0,w))}else B|=D.COLOR_BUFFER_BIT}I&&(B|=D.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),H&&(B|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B!==0&&D.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(x){x.setRenderer(this),U=x},this.dispose=function(){t.removeEventListener("webglcontextlost",rt,!1),t.removeEventListener("webglcontextrestored",je,!1),t.removeEventListener("webglcontextcreationerror",Jt,!1),Le.dispose(),le.dispose(),ae.dispose(),G.dispose(),te.dispose(),K.dispose(),fe.dispose(),Q.dispose(),re.dispose(),xe.dispose(),xe.removeEventListener("sessionstart",za),xe.removeEventListener("sessionend",Ga),Vn.stop()};function rt(x){x.preventDefault(),to("WebGLRenderer: Context Lost."),C=!0}function je(){to("WebGLRenderer: Context Restored."),C=!1;const x=N.autoReset,I=Ae.enabled,H=Ae.autoUpdate,B=Ae.needsUpdate,z=Ae.type;Me(),N.autoReset=x,Ae.enabled=I,Ae.autoUpdate=H,Ae.needsUpdate=B,Ae.type=z}function Jt(x){Ge("WebGLRenderer: A WebGL context could not be created. Reason: ",x.statusMessage)}function Qt(x){const I=x.target;I.removeEventListener("dispose",Qt),Il(I)}function Il(x){Ul(x),G.remove(x)}function Ul(x){const I=G.get(x).programs;I!==void 0&&(I.forEach(function(H){re.releaseProgram(H)}),x.isShaderMaterial&&re.releaseShaderCache(x))}this.renderBufferDirect=function(x,I,H,B,z,de){I===null&&(I=Mt);const _e=z.isMesh&&z.matrixWorld.determinantAffine()<0,ue=Ol(x,I,H,B,z);d.setMaterial(B,_e);let ve=H.index,Ee=1;if(B.wireframe===!0){if(ve=W.getWireframeAttribute(H),ve===void 0)return;Ee=2}const Ie=H.drawRange,Ne=H.attributes.position;let ye=Ie.start*Ee,Ke=(Ie.start+Ie.count)*Ee;de!==null&&(ye=Math.max(ye,de.start*Ee),Ke=Math.min(Ke,(de.start+de.count)*Ee)),ve!==null?(ye=Math.max(ye,0),Ke=Math.min(Ke,ve.count)):Ne!=null&&(ye=Math.max(ye,0),Ke=Math.min(Ke,Ne.count));const lt=Ke-ye;if(lt<0||lt===1/0)return;fe.setup(z,B,ue,H,ve);let at,Je=ne;if(ve!==null&&(at=se.get(ve),Je=q,Je.setIndex(at)),z.isMesh)B.wireframe===!0?(d.setLineWidth(B.wireframeLinewidth*ut()),Je.setMode(D.LINES)):Je.setMode(D.TRIANGLES);else if(z.isLine){let Et=B.linewidth;Et===void 0&&(Et=1),d.setLineWidth(Et*ut()),z.isLineSegments?Je.setMode(D.LINES):z.isLineLoop?Je.setMode(D.LINE_LOOP):Je.setMode(D.LINE_STRIP)}else z.isPoints?Je.setMode(D.POINTS):z.isSprite&&Je.setMode(D.TRIANGLES);if(z.isBatchedMesh)if(Ye.get("WEBGL_multi_draw"))Je.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{const Et=z._multiDrawStarts,me=z._multiDrawCounts,Ot=z._multiDrawCount,He=ve?se.get(ve).bytesPerElement:1,Vt=G.get(B).currentProgram.getUniforms();for(let jt=0;jt<Ot;jt++)Vt.setValue(D,"_gl_DrawID",jt),Je.render(Et[jt]/He,me[jt])}else if(z.isInstancedMesh)Je.renderInstances(ye,lt,z.count);else if(H.isInstancedBufferGeometry){const Et=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,me=Math.min(H.instanceCount,Et);Je.renderInstances(ye,lt,me)}else Je.render(ye,lt)};function Ba(x,I,H){x.transparent===!0&&x.side===gn&&x.forceSinglePass===!1?(x.side=Ft,x.needsUpdate=!0,Yi(x,I,H),x.side=On,x.needsUpdate=!0,Yi(x,I,H),x.side=gn):Yi(x,I,H)}this.compile=function(x,I,H=null){H===null&&(H=x),b=ae.get(H),b.init(I),g.push(b),H.traverseVisible(function(z){z.isLight&&z.layers.test(I.layers)&&(b.pushLight(z),z.castShadow&&b.pushShadow(z))}),x!==H&&x.traverseVisible(function(z){z.isLight&&z.layers.test(I.layers)&&(b.pushLight(z),z.castShadow&&b.pushShadow(z))}),b.setupLights();const B=new Set;return x.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;const de=z.material;if(de)if(Array.isArray(de))for(let _e=0;_e<de.length;_e++){const ue=de[_e];Ba(ue,H,z),B.add(ue)}else Ba(de,H,z),B.add(de)}),b=g.pop(),B},this.compileAsync=function(x,I,H=null){const B=this.compile(x,I,H);return new Promise(z=>{function de(){if(B.forEach(function(_e){G.get(_e).currentProgram.isReady()&&B.delete(_e)}),B.size===0){z(x);return}setTimeout(de,10)}Ye.get("KHR_parallel_shader_compile")!==null?de():setTimeout(de,10)})};let Fs=null;function Nl(x){Fs&&Fs(x)}function za(){Vn.stop()}function Ga(){Vn.start()}const Vn=new bl;Vn.setAnimationLoop(Nl),typeof self<"u"&&Vn.setContext(self),this.setAnimationLoop=function(x){Fs=x,xe.setAnimationLoop(x),x===null?Vn.stop():Vn.start()},xe.addEventListener("sessionstart",za),xe.addEventListener("sessionend",Ga),this.render=function(x,I){if(I!==void 0&&I.isCamera!==!0){Ge("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;U!==null&&U.renderStart(x,I);const H=xe.enabled===!0&&xe.isPresenting===!0,B=y!==null&&(J===null||H)&&y.begin(L,J);if(x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),xe.enabled===!0&&xe.isPresenting===!0&&(y===null||y.isCompositing()===!1)&&(xe.cameraAutoUpdate===!0&&xe.updateCamera(I),I=xe.getCamera()),x.isScene===!0&&x.onBeforeRender(L,x,I,J),b=ae.get(x,g.length),b.init(I),b.state.textureUnits=k.getTextureUnits(),g.push(b),ht.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),$e.setFromProjectionMatrix(ht,rn,I.reversedDepth),Ve=this.localClippingEnabled,Xe=be.init(this.clippingPlanes,Ve),T=le.get(x,R.length),T.init(),R.push(T),xe.enabled===!0&&xe.isPresenting===!0){const _e=L.xr.getDepthSensingMesh();_e!==null&&Os(_e,I,-1/0,L.sortObjects)}Os(x,I,0,L.sortObjects),T.finish(),L.sortObjects===!0&&T.sort(Ce,De,I.reversedDepth),st=xe.enabled===!1||xe.isPresenting===!1||xe.hasDepthSensing()===!1,st&&Le.addToRenderList(T,x),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Xe===!0&&be.beginShadows();const z=b.state.shadowsArray;if(Ae.render(z,x,I),Xe===!0&&be.endShadows(),(B&&y.hasRenderPass())===!1){const _e=T.opaque,ue=T.transmissive;if(b.setupLights(),I.isArrayCamera){const ve=I.cameras;if(ue.length>0)for(let Ee=0,Ie=ve.length;Ee<Ie;Ee++){const Ne=ve[Ee];Ha(_e,ue,x,Ne)}st&&Le.render(x);for(let Ee=0,Ie=ve.length;Ee<Ie;Ee++){const Ne=ve[Ee];Va(T,x,Ne,Ne.viewport)}}else ue.length>0&&Ha(_e,ue,x,I),st&&Le.render(x),Va(T,x,I)}J!==null&&V===0&&(k.updateMultisampleRenderTarget(J),k.updateRenderTargetMipmap(J)),B&&y.end(L),x.isScene===!0&&x.onAfterRender(L,x,I),fe.resetDefaultState(),j=-1,he=null,g.pop(),g.length>0?(b=g[g.length-1],k.setTextureUnits(b.state.textureUnits),Xe===!0&&be.setGlobalState(L.clippingPlanes,b.state.camera)):b=null,R.pop(),R.length>0?T=R[R.length-1]:T=null,U!==null&&U.renderEnd()};function Os(x,I,H,B){if(x.visible===!1)return;if(x.layers.test(I.layers)){if(x.isGroup)H=x.renderOrder;else if(x.isLOD)x.autoUpdate===!0&&x.update(I);else if(x.isLightProbeGrid)b.pushLightProbeGrid(x);else if(x.isLight)b.pushLight(x),x.castShadow&&b.pushShadow(x);else if(x.isSprite){if(!x.frustumCulled||$e.intersectsSprite(x)){B&&xt.setFromMatrixPosition(x.matrixWorld).applyMatrix4(ht);const _e=K.update(x),ue=x.material;ue.visible&&T.push(x,_e,ue,H,xt.z,null)}}else if((x.isMesh||x.isLine||x.isPoints)&&(!x.frustumCulled||$e.intersectsObject(x))){const _e=K.update(x),ue=x.material;if(B&&(x.boundingSphere!==void 0?(x.boundingSphere===null&&x.computeBoundingSphere(),xt.copy(x.boundingSphere.center)):(_e.boundingSphere===null&&_e.computeBoundingSphere(),xt.copy(_e.boundingSphere.center)),xt.applyMatrix4(x.matrixWorld).applyMatrix4(ht)),Array.isArray(ue)){const ve=_e.groups;for(let Ee=0,Ie=ve.length;Ee<Ie;Ee++){const Ne=ve[Ee],ye=ue[Ne.materialIndex];ye&&ye.visible&&T.push(x,_e,ye,H,xt.z,Ne)}}else ue.visible&&T.push(x,_e,ue,H,xt.z,null)}}const de=x.children;for(let _e=0,ue=de.length;_e<ue;_e++)Os(de[_e],I,H,B)}function Va(x,I,H,B){const{opaque:z,transmissive:de,transparent:_e}=x;b.setupLightsView(H),Xe===!0&&be.setGlobalState(L.clippingPlanes,H),B&&d.viewport(pe.copy(B)),z.length>0&&Xi(z,I,H),de.length>0&&Xi(de,I,H),_e.length>0&&Xi(_e,I,H),d.buffers.depth.setTest(!0),d.buffers.depth.setMask(!0),d.buffers.color.setMask(!0),d.setPolygonOffset(!1)}function Ha(x,I,H,B){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[B.id]===void 0){const ye=Ye.has("EXT_color_buffer_half_float")||Ye.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[B.id]=new on(1,1,{generateMipmaps:!0,type:ye?En:Gt,minFilter:$n,samples:Math.max(4,S.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ze.workingColorSpace})}const de=b.state.transmissionRenderTarget[B.id],_e=B.viewport||pe;de.setSize(_e.z*L.transmissionResolutionScale,_e.w*L.transmissionResolutionScale);const ue=L.getRenderTarget(),ve=L.getActiveCubeFace(),Ee=L.getActiveMipmapLevel();L.setRenderTarget(de),L.getClearColor(it),We=L.getClearAlpha(),We<1&&L.setClearColor(16777215,.5),L.clear(),st&&Le.render(H);const Ie=L.toneMapping;L.toneMapping=an;const Ne=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),b.setupLightsView(B),Xe===!0&&be.setGlobalState(L.clippingPlanes,B),Xi(x,H,B),k.updateMultisampleRenderTarget(de),k.updateRenderTargetMipmap(de),Ye.has("WEBGL_multisampled_render_to_texture")===!1){let ye=!1;for(let Ke=0,lt=I.length;Ke<lt;Ke++){const at=I[Ke],{object:Je,geometry:Et,material:me,group:Ot}=at;if(me.side===gn&&Je.layers.test(B.layers)){const He=me.side;me.side=Ft,me.needsUpdate=!0,ka(Je,H,B,Et,me,Ot),me.side=He,me.needsUpdate=!0,ye=!0}}ye===!0&&(k.updateMultisampleRenderTarget(de),k.updateRenderTargetMipmap(de))}L.setRenderTarget(ue,ve,Ee),L.setClearColor(it,We),Ne!==void 0&&(B.viewport=Ne),L.toneMapping=Ie}function Xi(x,I,H){const B=I.isScene===!0?I.overrideMaterial:null;for(let z=0,de=x.length;z<de;z++){const _e=x[z],{object:ue,geometry:ve,group:Ee}=_e;let Ie=_e.material;Ie.allowOverride===!0&&B!==null&&(Ie=B),ue.layers.test(H.layers)&&ka(ue,I,H,ve,Ie,Ee)}}function ka(x,I,H,B,z,de){x.onBeforeRender(L,I,H,B,z,de),x.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,x.matrixWorld),x.normalMatrix.getNormalMatrix(x.modelViewMatrix),z.onBeforeRender(L,I,H,B,x,de),z.transparent===!0&&z.side===gn&&z.forceSinglePass===!1?(z.side=Ft,z.needsUpdate=!0,L.renderBufferDirect(H,I,B,z,x,de),z.side=On,z.needsUpdate=!0,L.renderBufferDirect(H,I,B,z,x,de),z.side=gn):L.renderBufferDirect(H,I,B,z,x,de),x.onAfterRender(L,I,H,B,z,de)}function Yi(x,I,H){I.isScene!==!0&&(I=Mt);const B=G.get(x),z=b.state.lights,de=b.state.shadowsArray,_e=z.state.version,ue=re.getParameters(x,z.state,de,I,H,b.state.lightProbeGridArray),ve=re.getProgramCacheKey(ue);let Ee=B.programs;B.environment=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?I.environment:null,B.fog=I.fog;const Ie=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap;B.envMap=te.get(x.envMap||B.environment,Ie),B.envMapRotation=B.environment!==null&&x.envMap===null?I.environmentRotation:x.envMapRotation,Ee===void 0&&(x.addEventListener("dispose",Qt),Ee=new Map,B.programs=Ee);let Ne=Ee.get(ve);if(Ne!==void 0){if(B.currentProgram===Ne&&B.lightsStateVersion===_e)return Xa(x,ue),Ne}else ue.uniforms=re.getUniforms(x),U!==null&&x.isNodeMaterial&&U.build(x,H,ue),x.onBeforeCompile(ue,L),Ne=re.acquireProgram(ue,ve),Ee.set(ve,Ne),B.uniforms=ue.uniforms;const ye=B.uniforms;return(!x.isShaderMaterial&&!x.isRawShaderMaterial||x.clipping===!0)&&(ye.clippingPlanes=be.uniform),Xa(x,ue),B.needsLights=zl(x),B.lightsStateVersion=_e,B.needsLights&&(ye.ambientLightColor.value=z.state.ambient,ye.lightProbe.value=z.state.probe,ye.directionalLights.value=z.state.directional,ye.directionalLightShadows.value=z.state.directionalShadow,ye.spotLights.value=z.state.spot,ye.spotLightShadows.value=z.state.spotShadow,ye.rectAreaLights.value=z.state.rectArea,ye.ltc_1.value=z.state.rectAreaLTC1,ye.ltc_2.value=z.state.rectAreaLTC2,ye.pointLights.value=z.state.point,ye.pointLightShadows.value=z.state.pointShadow,ye.hemisphereLights.value=z.state.hemi,ye.directionalShadowMatrix.value=z.state.directionalShadowMatrix,ye.spotLightMatrix.value=z.state.spotLightMatrix,ye.spotLightMap.value=z.state.spotLightMap,ye.pointShadowMatrix.value=z.state.pointShadowMatrix),B.lightProbeGrid=b.state.lightProbeGridArray.length>0,B.currentProgram=Ne,B.uniformsList=null,Ne}function Wa(x){if(x.uniformsList===null){const I=x.currentProgram.getUniforms();x.uniformsList=bs.seqWithValue(I.seq,x.uniforms)}return x.uniformsList}function Xa(x,I){const H=G.get(x);H.outputColorSpace=I.outputColorSpace,H.batching=I.batching,H.batchingColor=I.batchingColor,H.instancing=I.instancing,H.instancingColor=I.instancingColor,H.instancingMorph=I.instancingMorph,H.skinning=I.skinning,H.morphTargets=I.morphTargets,H.morphNormals=I.morphNormals,H.morphColors=I.morphColors,H.morphTargetsCount=I.morphTargetsCount,H.numClippingPlanes=I.numClippingPlanes,H.numIntersection=I.numClipIntersection,H.vertexAlphas=I.vertexAlphas,H.vertexTangents=I.vertexTangents,H.toneMapping=I.toneMapping}function Fl(x,I){if(x.length===0)return null;if(x.length===1)return x[0].texture!==null?x[0]:null;M.setFromMatrixPosition(I.matrixWorld);for(let H=0,B=x.length;H<B;H++){const z=x[H];if(z.texture!==null&&z.boundingBox.containsPoint(M))return z}return null}function Ol(x,I,H,B,z){I.isScene!==!0&&(I=Mt),k.resetTextureUnits();const de=I.fog,_e=B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial?I.environment:null,ue=J===null?L.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:ze.workingColorSpace,ve=B.isMeshStandardMaterial||B.isMeshLambertMaterial&&!B.envMap||B.isMeshPhongMaterial&&!B.envMap,Ee=te.get(B.envMap||_e,ve),Ie=B.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Ne=!!H.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),ye=!!H.morphAttributes.position,Ke=!!H.morphAttributes.normal,lt=!!H.morphAttributes.color;let at=an;B.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(at=L.toneMapping);const Je=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,Et=Je!==void 0?Je.length:0,me=G.get(B),Ot=b.state.lights;if(Xe===!0&&(Ve===!0||x!==he)){const et=x===he&&B.id===j;be.setState(B,x,et)}let He=!1;B.version===me.__version?(me.needsLights&&me.lightsStateVersion!==Ot.state.version||me.outputColorSpace!==ue||z.isBatchedMesh&&me.batching===!1||!z.isBatchedMesh&&me.batching===!0||z.isBatchedMesh&&me.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&me.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&me.instancing===!1||!z.isInstancedMesh&&me.instancing===!0||z.isSkinnedMesh&&me.skinning===!1||!z.isSkinnedMesh&&me.skinning===!0||z.isInstancedMesh&&me.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&me.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&me.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&me.instancingMorph===!1&&z.morphTexture!==null||me.envMap!==Ee||B.fog===!0&&me.fog!==de||me.numClippingPlanes!==void 0&&(me.numClippingPlanes!==be.numPlanes||me.numIntersection!==be.numIntersection)||me.vertexAlphas!==Ie||me.vertexTangents!==Ne||me.morphTargets!==ye||me.morphNormals!==Ke||me.morphColors!==lt||me.toneMapping!==at||me.morphTargetsCount!==Et||!!me.lightProbeGrid!=b.state.lightProbeGridArray.length>0)&&(He=!0):(He=!0,me.__version=B.version);let Vt=me.currentProgram;He===!0&&(Vt=Yi(B,I,z),U&&B.isNodeMaterial&&U.onUpdateProgram(B,Vt,me));let jt=!1,bn=!1,ti=!1;const Qe=Vt.getUniforms(),ct=me.uniforms;if(d.useProgram(Vt.program)&&(jt=!0,bn=!0,ti=!0),B.id!==j&&(j=B.id,bn=!0),me.needsLights){const et=Fl(b.state.lightProbeGridArray,z);me.lightProbeGrid!==et&&(me.lightProbeGrid=et,bn=!0)}if(jt||he!==x){d.buffers.depth.getReversed()&&x.reversedDepth!==!0&&(x._reversedDepth=!0,x.updateProjectionMatrix()),Qe.setValue(D,"projectionMatrix",x.projectionMatrix),Qe.setValue(D,"viewMatrix",x.matrixWorldInverse);const An=Qe.map.cameraPosition;An!==void 0&&An.setValue(D,ft.setFromMatrixPosition(x.matrixWorld)),S.logarithmicDepthBuffer&&Qe.setValue(D,"logDepthBufFC",2/(Math.log(x.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&Qe.setValue(D,"isOrthographic",x.isOrthographicCamera===!0),he!==x&&(he=x,bn=!0,ti=!0)}if(me.needsLights&&(Ot.state.directionalShadowMap.length>0&&Qe.setValue(D,"directionalShadowMap",Ot.state.directionalShadowMap,k),Ot.state.spotShadowMap.length>0&&Qe.setValue(D,"spotShadowMap",Ot.state.spotShadowMap,k),Ot.state.pointShadowMap.length>0&&Qe.setValue(D,"pointShadowMap",Ot.state.pointShadowMap,k)),z.isSkinnedMesh){Qe.setOptional(D,z,"bindMatrix"),Qe.setOptional(D,z,"bindMatrixInverse");const et=z.skeleton;et&&(et.boneTexture===null&&et.computeBoneTexture(),Qe.setValue(D,"boneTexture",et.boneTexture,k))}z.isBatchedMesh&&(Qe.setOptional(D,z,"batchingTexture"),Qe.setValue(D,"batchingTexture",z._matricesTexture,k),Qe.setOptional(D,z,"batchingIdTexture"),Qe.setValue(D,"batchingIdTexture",z._indirectTexture,k),Qe.setOptional(D,z,"batchingColorTexture"),z._colorsTexture!==null&&Qe.setValue(D,"batchingColorTexture",z._colorsTexture,k));const Tn=H.morphAttributes;if((Tn.position!==void 0||Tn.normal!==void 0||Tn.color!==void 0)&&P.update(z,H,Vt),(bn||me.receiveShadow!==z.receiveShadow)&&(me.receiveShadow=z.receiveShadow,Qe.setValue(D,"receiveShadow",z.receiveShadow)),(B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial)&&B.envMap===null&&I.environment!==null&&(ct.envMapIntensity.value=I.environmentIntensity),ct.dfgLUT!==void 0&&(ct.dfgLUT.value=sm()),bn){if(Qe.setValue(D,"toneMappingExposure",L.toneMappingExposure),me.needsLights&&Bl(ct,ti),de&&B.fog===!0&&Se.refreshFogUniforms(ct,de),Se.refreshMaterialUniforms(ct,B,ee,ie,b.state.transmissionRenderTarget[x.id]),me.needsLights&&me.lightProbeGrid){const et=me.lightProbeGrid;ct.probesSH.value=et.texture,ct.probesMin.value.copy(et.boundingBox.min),ct.probesMax.value.copy(et.boundingBox.max),ct.probesResolution.value.copy(et.resolution)}bs.upload(D,Wa(me),ct,k)}if(B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(bs.upload(D,Wa(me),ct,k),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&Qe.setValue(D,"center",z.center),Qe.setValue(D,"modelViewMatrix",z.modelViewMatrix),Qe.setValue(D,"normalMatrix",z.normalMatrix),Qe.setValue(D,"modelMatrix",z.matrixWorld),B.uniformsGroups!==void 0){const et=B.uniformsGroups;for(let An=0,ni=et.length;An<ni;An++){const Ya=et[An];Q.update(Ya,Vt),Q.bind(Ya,Vt)}}return Vt}function Bl(x,I){x.ambientLightColor.needsUpdate=I,x.lightProbe.needsUpdate=I,x.directionalLights.needsUpdate=I,x.directionalLightShadows.needsUpdate=I,x.pointLights.needsUpdate=I,x.pointLightShadows.needsUpdate=I,x.spotLights.needsUpdate=I,x.spotLightShadows.needsUpdate=I,x.rectAreaLights.needsUpdate=I,x.hemisphereLights.needsUpdate=I}function zl(x){return x.isMeshLambertMaterial||x.isMeshToonMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isShadowMaterial||x.isShaderMaterial&&x.lights===!0}this.getActiveCubeFace=function(){return Y},this.getActiveMipmapLevel=function(){return V},this.getRenderTarget=function(){return J},this.setRenderTargetTextures=function(x,I,H){const B=G.get(x);B.__autoAllocateDepthBuffer=x.resolveDepthBuffer===!1,B.__autoAllocateDepthBuffer===!1&&(B.__useRenderToTexture=!1),G.get(x.texture).__webglTexture=I,G.get(x.depthTexture).__webglTexture=B.__autoAllocateDepthBuffer?void 0:H,B.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(x,I){const H=G.get(x);H.__webglFramebuffer=I,H.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(x,I=0,H=0){J=x,Y=I,V=H;let B=null,z=!1,de=!1;if(x){const ue=G.get(x);if(ue.__useDefaultFramebuffer!==void 0){d.bindFramebuffer(D.FRAMEBUFFER,ue.__webglFramebuffer),pe.copy(x.viewport),ge.copy(x.scissor),ke=x.scissorTest,d.viewport(pe),d.scissor(ge),d.setScissorTest(ke),j=-1;return}else if(ue.__webglFramebuffer===void 0)k.setupRenderTarget(x);else if(ue.__hasExternalTextures)k.rebindTextures(x,G.get(x.texture).__webglTexture,G.get(x.depthTexture).__webglTexture);else if(x.depthBuffer){const Ie=x.depthTexture;if(ue.__boundDepthTexture!==Ie){if(Ie!==null&&G.has(Ie)&&(x.width!==Ie.image.width||x.height!==Ie.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");k.setupDepthRenderbuffer(x)}}const ve=x.texture;(ve.isData3DTexture||ve.isDataArrayTexture||ve.isCompressedArrayTexture)&&(de=!0);const Ee=G.get(x).__webglFramebuffer;x.isWebGLCubeRenderTarget?(Array.isArray(Ee[I])?B=Ee[I][H]:B=Ee[I],z=!0):x.samples>0&&k.useMultisampledRTT(x)===!1?B=G.get(x).__webglMultisampledFramebuffer:Array.isArray(Ee)?B=Ee[H]:B=Ee,pe.copy(x.viewport),ge.copy(x.scissor),ke=x.scissorTest}else pe.copy(Te).multiplyScalar(ee).floor(),ge.copy(ot).multiplyScalar(ee).floor(),ke=Oe;if(H!==0&&(B=X),d.bindFramebuffer(D.FRAMEBUFFER,B)&&d.drawBuffers(x,B),d.viewport(pe),d.scissor(ge),d.setScissorTest(ke),z){const ue=G.get(x.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+I,ue.__webglTexture,H)}else if(de){const ue=I;for(let ve=0;ve<x.textures.length;ve++){const Ee=G.get(x.textures[ve]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+ve,Ee.__webglTexture,H,ue)}}else if(x!==null&&H!==0){const ue=G.get(x.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,ue.__webglTexture,H)}j=-1},this.readRenderTargetPixels=function(x,I,H,B,z,de,_e,ue=0){if(!(x&&x.isWebGLRenderTarget)){Ge("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ve=G.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&_e!==void 0&&(ve=ve[_e]),ve){d.bindFramebuffer(D.FRAMEBUFFER,ve);try{const Ee=x.textures[ue],Ie=Ee.format,Ne=Ee.type;if(x.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+ue),!S.textureFormatReadable(Ie)){Ge("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!S.textureTypeReadable(Ne)){Ge("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=x.width-B&&H>=0&&H<=x.height-z&&D.readPixels(I,H,B,z,oe.convert(Ie),oe.convert(Ne),de)}finally{const Ee=J!==null?G.get(J).__webglFramebuffer:null;d.bindFramebuffer(D.FRAMEBUFFER,Ee)}}},this.readRenderTargetPixelsAsync=async function(x,I,H,B,z,de,_e,ue=0){if(!(x&&x.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ve=G.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&_e!==void 0&&(ve=ve[_e]),ve)if(I>=0&&I<=x.width-B&&H>=0&&H<=x.height-z){d.bindFramebuffer(D.FRAMEBUFFER,ve);const Ee=x.textures[ue],Ie=Ee.format,Ne=Ee.type;if(x.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+ue),!S.textureFormatReadable(Ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!S.textureTypeReadable(Ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ye=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,ye),D.bufferData(D.PIXEL_PACK_BUFFER,de.byteLength,D.STREAM_READ),D.readPixels(I,H,B,z,oe.convert(Ie),oe.convert(Ne),0);const Ke=J!==null?G.get(J).__webglFramebuffer:null;d.bindFramebuffer(D.FRAMEBUFFER,Ke);const lt=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await Mc(D,lt,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,ye),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,de),D.deleteBuffer(ye),D.deleteSync(lt),de}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(x,I=null,H=0){const B=Math.pow(2,-H),z=Math.floor(x.image.width*B),de=Math.floor(x.image.height*B),_e=I!==null?I.x:0,ue=I!==null?I.y:0;k.setTexture2D(x,0),D.copyTexSubImage2D(D.TEXTURE_2D,H,0,0,_e,ue,z,de),d.unbindTexture()},this.copyTextureToTexture=function(x,I,H=null,B=null,z=0,de=0){let _e,ue,ve,Ee,Ie,Ne,ye,Ke,lt;const at=x.isCompressedTexture?x.mipmaps[de]:x.image;if(H!==null)_e=H.max.x-H.min.x,ue=H.max.y-H.min.y,ve=H.isBox3?H.max.z-H.min.z:1,Ee=H.min.x,Ie=H.min.y,Ne=H.isBox3?H.min.z:0;else{const ct=Math.pow(2,-z);_e=Math.floor(at.width*ct),ue=Math.floor(at.height*ct),x.isDataArrayTexture?ve=at.depth:x.isData3DTexture?ve=Math.floor(at.depth*ct):ve=1,Ee=0,Ie=0,Ne=0}B!==null?(ye=B.x,Ke=B.y,lt=B.z):(ye=0,Ke=0,lt=0);const Je=oe.convert(I.format),Et=oe.convert(I.type);let me;I.isData3DTexture?(k.setTexture3D(I,0),me=D.TEXTURE_3D):I.isDataArrayTexture||I.isCompressedArrayTexture?(k.setTexture2DArray(I,0),me=D.TEXTURE_2D_ARRAY):(k.setTexture2D(I,0),me=D.TEXTURE_2D),d.activeTexture(D.TEXTURE0),d.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,I.flipY),d.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),d.pixelStorei(D.UNPACK_ALIGNMENT,I.unpackAlignment);const Ot=d.getParameter(D.UNPACK_ROW_LENGTH),He=d.getParameter(D.UNPACK_IMAGE_HEIGHT),Vt=d.getParameter(D.UNPACK_SKIP_PIXELS),jt=d.getParameter(D.UNPACK_SKIP_ROWS),bn=d.getParameter(D.UNPACK_SKIP_IMAGES);d.pixelStorei(D.UNPACK_ROW_LENGTH,at.width),d.pixelStorei(D.UNPACK_IMAGE_HEIGHT,at.height),d.pixelStorei(D.UNPACK_SKIP_PIXELS,Ee),d.pixelStorei(D.UNPACK_SKIP_ROWS,Ie),d.pixelStorei(D.UNPACK_SKIP_IMAGES,Ne);const ti=x.isDataArrayTexture||x.isData3DTexture,Qe=I.isDataArrayTexture||I.isData3DTexture;if(x.isDepthTexture){const ct=G.get(x),Tn=G.get(I),et=G.get(ct.__renderTarget),An=G.get(Tn.__renderTarget);d.bindFramebuffer(D.READ_FRAMEBUFFER,et.__webglFramebuffer),d.bindFramebuffer(D.DRAW_FRAMEBUFFER,An.__webglFramebuffer);for(let ni=0;ni<ve;ni++)ti&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,G.get(x).__webglTexture,z,Ne+ni),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,G.get(I).__webglTexture,de,lt+ni)),D.blitFramebuffer(Ee,Ie,_e,ue,ye,Ke,_e,ue,D.DEPTH_BUFFER_BIT,D.NEAREST);d.bindFramebuffer(D.READ_FRAMEBUFFER,null),d.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(z!==0||x.isRenderTargetTexture||G.has(x)){const ct=G.get(x),Tn=G.get(I);d.bindFramebuffer(D.READ_FRAMEBUFFER,Z),d.bindFramebuffer(D.DRAW_FRAMEBUFFER,O);for(let et=0;et<ve;et++)ti?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,ct.__webglTexture,z,Ne+et):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,ct.__webglTexture,z),Qe?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Tn.__webglTexture,de,lt+et):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Tn.__webglTexture,de),z!==0?D.blitFramebuffer(Ee,Ie,_e,ue,ye,Ke,_e,ue,D.COLOR_BUFFER_BIT,D.NEAREST):Qe?D.copyTexSubImage3D(me,de,ye,Ke,lt+et,Ee,Ie,_e,ue):D.copyTexSubImage2D(me,de,ye,Ke,Ee,Ie,_e,ue);d.bindFramebuffer(D.READ_FRAMEBUFFER,null),d.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else Qe?x.isDataTexture||x.isData3DTexture?D.texSubImage3D(me,de,ye,Ke,lt,_e,ue,ve,Je,Et,at.data):I.isCompressedArrayTexture?D.compressedTexSubImage3D(me,de,ye,Ke,lt,_e,ue,ve,Je,at.data):D.texSubImage3D(me,de,ye,Ke,lt,_e,ue,ve,Je,Et,at):x.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,de,ye,Ke,_e,ue,Je,Et,at.data):x.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,de,ye,Ke,at.width,at.height,Je,at.data):D.texSubImage2D(D.TEXTURE_2D,de,ye,Ke,_e,ue,Je,Et,at);d.pixelStorei(D.UNPACK_ROW_LENGTH,Ot),d.pixelStorei(D.UNPACK_IMAGE_HEIGHT,He),d.pixelStorei(D.UNPACK_SKIP_PIXELS,Vt),d.pixelStorei(D.UNPACK_SKIP_ROWS,jt),d.pixelStorei(D.UNPACK_SKIP_IMAGES,bn),de===0&&I.generateMipmaps&&D.generateMipmap(me),d.unbindTexture()},this.initRenderTarget=function(x){G.get(x).__webglFramebuffer===void 0&&k.setupRenderTarget(x)},this.initTexture=function(x){x.isCubeTexture?k.setTextureCube(x,0):x.isData3DTexture?k.setTexture3D(x,0):x.isDataArrayTexture||x.isCompressedArrayTexture?k.setTexture2DArray(x,0):k.setTexture2D(x,0),d.unbindTexture()},this.resetState=function(){Y=0,V=0,J=null,d.reset(),fe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return rn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=ze._getDrawingBufferColorSpace(e),t.unpackColorSpace=ze._getUnpackColorSpace()}}const $o={type:"change"},La={type:"start"},Ll={type:"end"},ms=new Ra,Jo=new In,am=Math.cos(70*yc.DEG2RAD),pt=new F,Ut=2*Math.PI,Ze={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},xr=1e-6;class om extends lh{constructor(e,t=null){super(e,t),this.state=Ze.NONE,this.target=new F,this.cursor=new F,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Mi.ROTATE,MIDDLE:Mi.DOLLY,RIGHT:Mi.PAN},this.touches={ONE:xi.ROTATE,TWO:xi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new F,this._lastQuaternion=new Bn,this._lastTargetPosition=new F,this._quat=new Bn().setFromUnitVectors(e.up,new F(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new bo,this._sphericalDelta=new bo,this._scale=1,this._panOffset=new F,this._rotateStart=new we,this._rotateEnd=new we,this._rotateDelta=new we,this._panStart=new we,this._panEnd=new we,this._panDelta=new we,this._dollyStart=new we,this._dollyEnd=new we,this._dollyDelta=new we,this._dollyDirection=new F,this._mouse=new we,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=cm.bind(this),this._onPointerDown=lm.bind(this),this._onPointerUp=hm.bind(this),this._onContextMenu=gm.bind(this),this._onMouseWheel=fm.bind(this),this._onKeyDown=pm.bind(this),this._onTouchStart=mm.bind(this),this._onTouchMove=_m.bind(this),this._onMouseDown=um.bind(this),this._onMouseMove=dm.bind(this),this._interceptControlDown=xm.bind(this),this._interceptControlUp=vm.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction=""}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent($o),this.update(),this.state=Ze.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){const t=this.object.position;pt.copy(t).sub(this.target),pt.applyQuaternion(this._quat),this._spherical.setFromVector3(pt),this.autoRotate&&this.state===Ze.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=Ut:n>Math.PI&&(n-=Ut),s<-Math.PI?s+=Ut:s>Math.PI&&(s-=Ut),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(pt.setFromSpherical(this._spherical),pt.applyQuaternion(this._quatInverse),t.copy(this.target).add(pt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=pt.length();a=this._clampDistance(o*this._scale);const c=o-a;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),r=!!c}else if(this.object.isOrthographicCamera){const o=new F(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=c!==this.object.zoom;const l=new F(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(o),this.object.updateMatrixWorld(),a=pt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(ms.origin.copy(this.object.position),ms.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(ms.direction))<am?this.object.lookAt(this.target):(Jo.setFromNormalAndCoplanarPoint(this.object.up,this.target),ms.intersectPlane(Jo,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>xr||8*(1-this._lastQuaternion.dot(this.object.quaternion))>xr||this._lastTargetPosition.distanceToSquared(this.target)>xr?(this.dispatchEvent($o),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Ut/60*this.autoRotateSpeed*e:Ut/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){pt.setFromMatrixColumn(t,0),pt.multiplyScalar(-e),this._panOffset.add(pt)}_panUp(e,t){this.screenSpacePanning===!0?pt.setFromMatrixColumn(t,1):(pt.setFromMatrixColumn(t,0),pt.crossVectors(this.object.up,pt)),pt.multiplyScalar(e),this._panOffset.add(pt)}_pan(e,t){const n=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;pt.copy(s).sub(this.target);let r=pt.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/n.clientHeight,this.object.matrix),this._panUp(2*t*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),s=e-n.left,r=t-n.top,a=n.width,o=n.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Ut*this._rotateDelta.x/t.clientHeight),this._rotateUp(Ut*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Ut*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Ut*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Ut*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Ut*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(n,s)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),s=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Ut*this._rotateDelta.x/t.clientHeight),this._rotateUp(Ut*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new we,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function lm(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function cm(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function hm(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Ll),this.state=Ze.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function um(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Mi.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=Ze.DOLLY;break;case Mi.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Ze.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Ze.ROTATE}break;case Mi.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Ze.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Ze.PAN}break;default:this.state=Ze.NONE}this.state!==Ze.NONE&&this.dispatchEvent(La)}function dm(i){switch(this.state){case Ze.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case Ze.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case Ze.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function fm(i){this.enabled===!1||this.enableZoom===!1||this.state!==Ze.NONE||(i.preventDefault(),this.dispatchEvent(La),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Ll))}function pm(i){this.enabled!==!1&&this._handleKeyDown(i)}function mm(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case xi.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=Ze.TOUCH_ROTATE;break;case xi.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=Ze.TOUCH_PAN;break;default:this.state=Ze.NONE}break;case 2:switch(this.touches.TWO){case xi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=Ze.TOUCH_DOLLY_PAN;break;case xi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=Ze.TOUCH_DOLLY_ROTATE;break;default:this.state=Ze.NONE}break;default:this.state=Ze.NONE}this.state!==Ze.NONE&&this.dispatchEvent(La)}function _m(i){switch(this._trackPointer(i),this.state){case Ze.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case Ze.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case Ze.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case Ze.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=Ze.NONE}}function gm(i){this.enabled!==!1&&i.preventDefault()}function xm(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function vm(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}let Yn,Tt,Nt,mt,_n,qn,gi,vr,xn=!1,Ts=!1,Mr,_s,Sr=!1,Qo=0;function Mm(i){if(!i)return;Yn=new Oc;const e=i.clientWidth||window.innerWidth,t=i.clientHeight||window.innerHeight;Tt=new Wt(45,e/t,.1,1e3),Tt.position.set(0,.1,6.8),Nt=new rm({antialias:!0,alpha:!0}),Nt.setSize(e,t),Nt.setPixelRatio(Math.min(window.devicePixelRatio,2)),Nt.setClearColor(16777215,0),Nt.toneMapping=ma,Nt.toneMappingExposure=1.15,i.replaceChildren(Nt.domElement);const n=new sh(16777215,2.2);Yn.add(n);const s=new ur(16777215,2.8);s.position.set(5,8,5),Yn.add(s);const r=new ur(14870768,1.8);r.position.set(-5,-2,-4),Yn.add(r);const a=new ur(16777215,1.3);a.position.set(0,5,2),Yn.add(a),mt=new om(Tt,Nt.domElement),mt.enableDamping=!0,mt.dampingFactor=.05,mt.maxPolarAngle=Math.PI/1.8,mt.minPolarAngle=Math.PI/4,mt.enableZoom=!1,mt.target.set(0,0,0),_n=new Qn,Yn.add(_n),ym(_n),Mr=new oh,_s=new we,Nt.domElement.addEventListener("pointerdown",()=>{Sr=!1,Qo=Date.now()}),mt.addEventListener("change",()=>{Date.now()-Qo>150&&(Sr=!0)}),Nt.domElement.addEventListener("pointerup",c=>{if(Sr||Ts)return;const l=Nt.domElement.getBoundingClientRect();_s.x=(c.clientX-l.left)/l.width*2-1,_s.y=-((c.clientY-l.top)/l.height)*2+1,Mr.setFromCamera(_s,Tt),(Mr.intersectObjects(_n.children,!0).length>0||!xn)&&Em()}),window.addEventListener("resize",()=>{if(!Nt||!Tt||!i)return;const c=i.clientWidth||window.innerWidth,l=i.clientHeight||window.innerHeight;Tt.aspect=c/l,Tt.updateProjectionMatrix(),Nt.setSize(c,l)});function o(){if(requestAnimationFrame(o),mt&&mt.update(),Ts){const c=xn?2.45:6.8,l=xn?.38:.1,f=xn?.38:0;if(Tt.position.x+=(0-Tt.position.x)*.08,Tt.position.y+=(l-Tt.position.y)*.08,Tt.position.z+=(c-Tt.position.z)*.08,mt.target.x+=(0-mt.target.x)*.08,mt.target.y+=(f-mt.target.y)*.08,mt.target.z+=(0-mt.target.z)*.08,_n.rotation.x*=.88,_n.rotation.y*=.88,_n.rotation.z*=.88,Math.abs(Tt.position.z-c)<.02&&Math.abs(_n.rotation.y)<.005&&(Tt.position.set(0,l,c),mt.target.set(0,f,0),_n.rotation.set(0,0,0),Ts=!1,xn)){const m=document.getElementById("hero-banner-display");m&&(m.classList.remove("hidden","pointer-events-none"),m.classList.add("flex"),setTimeout(()=>{m.classList.remove("opacity-0"),m.classList.add("opacity-100")},50)),Sm()}}Nt.render(Yn,Tt)}o()}let vi=null;function Sm(){const i=document.getElementById("screen-loader-view"),e=document.getElementById("screen-hero-content"),t=document.getElementById("loader-bar-fill"),n=document.getElementById("loader-percentage-text"),s=document.getElementById("loader-log-text");i&&i.classList.remove("hidden"),e&&(e.classList.add("hidden","opacity-0"),e.classList.remove("flex")),t&&(t.style.width="0%"),n&&(n.textContent="0%"),s&&(s.textContent="Mounting WebGL 3D Viewport Shaders...");let r=0;vi&&clearInterval(vi);const a=["Mounting WebGL 3D Viewport Shaders...","Loading Three.js Camera Perspective...","Fetching Firestore Project Records...","Initializing Interactive Hero Workspace...","Boot Sequence Complete!"];vi=setInterval(()=>{if(r+=Math.floor(Math.random()*8)+4,r>=100)r=100,clearInterval(vi),t&&(t.style.width="100%"),n&&(n.textContent="100%"),s&&(s.textContent=a[4]),setTimeout(()=>{i&&i.classList.add("hidden"),e&&(e.classList.remove("hidden"),e.classList.add("flex"),setTimeout(()=>{e.classList.remove("opacity-0"),e.classList.add("opacity-100")},50))},300);else{t&&(t.style.width=`${r}%`),n&&(n.textContent=`${r}%`);const o=Math.min(Math.floor(r/100*4),3);s&&(s.textContent=a[o])}},50)}function Em(){Ts=!0,xn=!xn,mt&&(mt.enableRotate=!xn);const i=document.getElementById("hero-banner-display");xn||(i&&(i.classList.remove("opacity-100","flex"),i.classList.add("opacity-0","pointer-events-none"),setTimeout(()=>i.classList.add("hidden"),500)),vi&&clearInterval(vi))}function ym(i){qn=new Qn,qn.position.set(0,.4,0);const e=new Fn(2.5,1.75,.1),t=new ys({color:1976635,metalness:.85,roughness:.2}),n=new At(e,t);qn.add(n);const s=new Fn(2.42,1.67,.11),r=new ys({color:988970,metalness:.9,roughness:.1}),a=new At(s,r);qn.add(a);const o=new Wi(2.36,1.61),c=new jc({color:593174,metalness:.8,roughness:.1,clearcoat:1,clearcoatRoughness:.1});vr=new At(o,c),vr.position.z=.06,qn.add(vr);const l=new Pa(.025,16,16),f=new wa({color:3718648}),m=new At(l,f);m.position.set(1.15,-.8,.06),qn.add(m),i.add(qn),gi=new Qn,gi.position.set(0,-.65,-.1);const h=new ys({color:3359061,metalness:.95,roughness:.15}),_=new Fn(.32,.28,.18),v=new At(_,h);v.position.set(0,.4,.02),gi.add(v);const E=new Ds(.09,.12,.95,32),p=new At(E,h);p.position.set(0,0,0),gi.add(p);const u=new Ds(.7,.82,.06,32),A=new At(u,h);A.position.set(0,-.45,0),gi.add(A),i.add(gi)}document.addEventListener("DOMContentLoaded",()=>{console.log("🚀 Initializing Centered 3D Monitor Showcase for Ycker Bandola Ponio...");const i=document.getElementById("monitor-canvas-container");i?Mm(i):console.error("3D Monitor Container '#monitor-canvas-container' not found in DOM.")});
//# sourceMappingURL=index-D1CRGva-.js.map
