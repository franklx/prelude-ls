// prelude.ls 0.5.0
// Copyright (c) 2012 George Zahariev
// Released under the MIT License
// raw.github.com/gkz/prelude-ls/master/LICNSE
this.prelude=function(){function Vb(a,b){return a.length>1?function(){var c=b?b.concat():[];return c.push.apply(c,arguments)<a.length&&arguments.length?Vb.call(this,a,c):a.apply(this,c)}:a}function Wb(a,b){var c=0,d=b.length>>>0;while(c<d)if(a===b[c++])return!0;return!1}function Xb(a,b){return function(){return a(b.apply(this,arguments))}}function Yb(a){return!a}function Zb(a,b){var c={}.hasOwnProperty;for(var d in b)c.call(b,d)&&(a[d]=b[d]);return a}exports={};var a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,$,_,ab,bb,cb,db,eb,fb,gb,hb,ib,jb,kb,lb,mb,nb,ob,pb,qb,rb,sb,tb,ub,vb,wb,xb,yb,zb,Ab,Bb,Cb,Db,Eb,Fb,Gb,Hb,Ib,Jb,Kb,Lb,Mb,Nb,Ob,Pb,Qb,Rb,Sb,Tb={}.toString,Ub=[].slice;return exports.objToFunc=a=function(a){return function(b){return a[b]}},exports.each=b=Vb(function(a,b){var c,d,e;if(Tb.call(b).slice(8,-1)==="Object")for(d in b)c=b[d],a(c);else for(d=0,e=b.length;d<e;++d)c=b[d],a(c);return b}),exports.map=c=Vb(function(b,c){var d,e,f,g,h,i,j,k={};Tb.call(b).slice(8,-1)!=="Function"&&(b=a(b)),d=Tb.call(c).slice(8,-1);if(d==="Object"){for(e in c)f=c[e],k[e]=b(f);return k}h=[];for(i=0,j=c.length;i<j;++i)f=c[i],h.push(b(f));return g=h,d==="String"?g.join(""):g}),exports.filter=d=Vb(function(b,c){var d,e,f,g,h,i,j,k={};Tb.call(b).slice(8,-1)!=="Function"&&(b=a(b)),d=Tb.call(c).slice(8,-1);if(d==="Object"){for(e in c)f=c[e],b(f)&&(k[e]=f);return k}h=[];for(i=0,j=c.length;i<j;++i)f=c[i],b(f)&&h.push(f);return g=h,d==="String"?g.join(""):g}),exports.reject=e=Vb(function(b,c){var d,e,f,g,h,i,j,k={};Tb.call(b).slice(8,-1)!=="Function"&&(b=a(b)),d=Tb.call(c).slice(8,-1);if(d==="Object"){for(e in c)f=c[e],b(f)||(k[e]=f);return k}h=[];for(i=0,j=c.length;i<j;++i)f=c[i],b(f)||h.push(f);return g=h,d==="String"?g.join(""):g}),exports.partition=f=Vb(function(b,c){var d,e,f,g,h,i,j;Tb.call(b).slice(8,-1)!=="Function"&&(b=a(b)),d=Tb.call(c).slice(8,-1);if(d==="Object"){e={},f={};for(g in c)h=c[g],(b(h)?e:f)[g]=h}else{e=[],f=[];for(i=0,j=c.length;i<j;++i)h=c[i],(b(h)?e:f).push(h);d==="String"&&(e=e.join(""),f=f.join(""))}return[e,f]}),exports.find=g=Vb(function(b,c){var d,e,f;Tb.call(b).slice(8,-1)!=="Function"&&(b=a(b));if(Tb.call(c).slice(8,-1)==="Object")for(e in c){d=c[e];if(b(d))return d}else for(e=0,f=c.length;e<f;++e){d=c[e];if(b(d))return d}}),exports.head=i=exports.first=h=function(a){if(!a.length)return;return a[0]},exports.tail=j=function(a){if(!a.length)return;return a.slice(1)},exports.last=k=function(a){if(!a.length)return;return a[a.length-1]},exports.initial=l=function(a){if(!a.length)return;return a.slice(0,a.length-1)},exports.empty=m=function(a){var b;if(Tb.call(a).slice(8,-1)==="Object"){for(b in a)return!1;return!0}return!a.length},exports.values=n=function(a){var b,c,d=[];for(c in a)b=a[c],d.push(b);return d},exports.keys=o=function(a){var b,c=[];for(b in a)c.push(b);return c},exports.length=p=function(a){return Tb.call(a).slice(8,-1)==="Object"&&(a=n(a)),a.length},exports.cons=q=Vb(function(a,b){return Tb.call(b).slice(8,-1)==="String"?a+b:[a].concat(b)}),exports.append=r=Vb(function(a,b){return Tb.call(b).slice(8,-1)==="String"?a+b:a.concat(b)}),exports.join=s=Vb(function(a,b){return Tb.call(b).slice(8,-1)==="Object"&&(b=n(b)),b.join(a)}),exports.reverse=t=function(a){return Tb.call(a).slice(8,-1)==="String"?a.split("").reverse().join(""):a.slice().reverse()},exports.fold=v=exports.foldl=u=Vb(function(a,b,c){var d,e,f;if(Tb.call(c).slice(8,-1)==="Object")for(e in c)d=c[e],b=a(b,d);else for(e=0,f=c.length;e<f;++e)d=c[e],b=a(b,d);return b}),exports.fold1=x=exports.foldl1=w=Vb(function(a,b){return v(a,b[0],b.slice(1))}),exports.foldr=y=Vb(function(a,b,c){return v(a,b,c.reverse())}),exports.foldr1=z=Vb(function(a,b){return b.reverse(),v(a,b[0],b.slice(1))}),exports.andList=A=function(a){return v(function(a,b){return a&&b},!0,a)},exports.orList=B=function(a){return v(function(a,b){return a||b},!1,a)},exports.any=C=Vb(function(b,c){return Tb.call(b).slice(8,-1)!=="Function"&&(b=a(b)),v(function(a,c){return a||b(c)},!1,c)}),exports.all=D=Vb(function(b,c){return Tb.call(b).slice(8,-1)!=="Function"&&(b=a(b)),v(function(a,c){return a&&b(c)},!0,c)}),exports.unique=E=function(a){var b,c,d,e;b=[];if(Tb.call(a).slice(8,-1)==="Object")for(d in a)c=a[d],Wb(c,b)||b.push(c);else for(d=0,e=a.length;d<e;++d)c=a[d],Wb(c,b)||b.push(c);return Tb.call(a).slice(8,-1)==="String"?b.join(""):b},exports.sum=F=function(a){var b,c,d,e;b=0;if(Tb.call(a).slice(8,-1)==="Object")for(d in a)c=a[d],b+=c;else for(d=0,e=a.length;d<e;++d)c=a[d],b+=c;return b},exports.product=G=function(a){var b,c,d,e;b=1;if(Tb.call(a).slice(8,-1)==="Object")for(d in a)c=a[d],b*=c;else for(d=0,e=a.length;d<e;++d)c=a[d],b*=c;return b},exports.mean=I=exports.average=H=function(a){return F(a)/p(a)},exports.concat=J=function(a){return v(r,[],a)},exports.concatMap=K=Vb(function(a,b){return J(c(a,b))}),exports.listToObj=L=function(a){var b,c,d,e;b={};for(d=0,e=a.length;d<e;++d)c=a[d],b[c[0]]=c[1];return b},exports.maximum=M=function(a){return x(nb,a)},exports.minimum=N=function(a){return x(ob,a)},exports.scan=P=exports.scanl=O=Vb(function(a,b,c){var d,e;return d=b,Tb.call(c).slice(8,-1)==="Object"?[b].concat(function(){var b,f,g=[];for(b in f=c)e=f[b],g.push(d=a(d,e));return g}()):[b].concat(function(){var b,f,g,h=[];for(b=0,g=(f=c).length;b<g;++b)e=f[b],h.push(d=a(d,e));return h}())}),exports.scan1=R=exports.scanl1=Q=Vb(function(a,b){return P(a,b[0],b.slice(1))}),exports.scanr=S=Vb(function(a,b,c){return c.reverse(),P(a,b,c).reverse()}),exports.scanr1=T=Vb(function(a,b){return b.reverse(),P(a,b[0],b.slice(1)).reverse()}),exports.replicate=U=Vb(function(a,b){var c,d;c=[],d=0;for(;d<a;++d)c.push(b);return Tb.call(b).slice(8,-1)==="String"?c.join(""):c}),exports.take=V=Vb(function(a,b){switch(!1){case!(a<=0):return Tb.call(b).slice(8,-1)==="String"?"":[];case!!b.length:return b;default:return b.slice(0,a)}}),exports.drop=W=Vb(function(a,b){switch(!1){case!(a<=0):return b;case!!b.length:return b;default:return b.slice(a)}}),exports.splitAt=X=Vb(function(a,b){return[V(a,b),W(a,b)]}),exports.takeWhile=Y=Vb(function(b,c){var d,e,f,g;if(!c.length)return c;Tb.call(b).slice(8,-1)!=="Function"&&(b=a(b)),d=[];for(f=0,g=c.length;f<g;++f){e=c[f];if(!b(e))break;d.push(e)}return Tb.call(c).slice(8,-1)==="String"?d.join(""):d}),exports.dropWhile=Z=Vb(function(b,c){var d,e,f,g;if(!c.length)return c;Tb.call(b).slice(8,-1)!=="Function"&&(b=a(b)),d=0;for(f=0,g=c.length;f<g;++f){e=c[f];if(!b(e))break;++d}return W(d,c)}),exports.span=$=Vb(function(a,b){return[Y(a,b),Z(a,b)]}),exports.breakIt=_=Vb(function(a,b){return $(Xb(Yb,a),b)}),exports.zip=ab=Vb(function(a,b){var c,d,e,f,g,h,i,j,k;c=[];for(d=0,i=(h=[a,b]).length;d<i;++d){e=h[d];for(f=0,j=e.length;f<j;++f)g=e[f],d===0&&c.push([]),(k=c[f])!=null&&k.push(g)}return c}),exports.zipWith=bb=Vb(function(b,c,d){var e,f,g,h,i=[];Tb.call(b).slice(8,-1)!=="Function"&&(b=a(b));if(!c.length||!d.length)return[];for(f=0,h=(g=ab.call(this,c,d)).length;f<h;++f)e=g[f],i.push(b.apply(this,e));return i}),exports.zipAll=cb=function(){var a,b,c,d,e,f,g,h,i;a=Ub.call(arguments),b=[];for(c=0,g=a.length;c<g;++c){d=a[c];for(e=0,h=d.length;e<h;++e)f=d[e],c===0&&b.push([]),(i=b[e])!=null&&i.push(f)}return b},exports.zipAllWith=db=function(b){var c,d,e,f,g,h=[];c=Ub.call(arguments,1),Tb.call(b).slice(8,-1)!=="Function"&&(b=a(b));if(!c[0].length||!c[1].length)return[];for(e=0,g=(f=cb.apply(this,c)).length;e<g;++e)d=f[e],h.push(b.apply(this,d));return h},exports.compose=eb=function(){var a;return a=Ub.call(arguments),function(){var b,c,d,e,f;b=arguments;for(d=0,f=(e=a).length;d<f;++d)c=e[d],b=[c.apply(this,b)];return b[0]}},exports.curry=fb=function(a){return Vb(a)},exports.partial=gb=function(a){var b;return b=Ub.call(arguments,1),function(){var c;return c=Ub.call(arguments),a.apply(this,b.concat(c))}},exports.id=hb=function(a){return a},exports.flip=ib=Vb(function(a,b,c){return a(c,b)}),exports.lines=jb=function(a){return a.length?a.split("\n"):[]},exports.unlines=kb=function(a){return a.join("\n")},exports.words=lb=function(a){return a.length?a.split(/[ ]+/):[]},exports.unwords=mb=function(a){return a.join(" ")},exports.max=nb=Vb(function(a,b){return a>b?a:b}),exports.min=ob=Vb(function(a,b){return a>b?b:a}),exports.negate=pb=function(a){return-a},exports.abs=qb=Math.abs,exports.signum=rb=function(a){switch(!1){case!(a<0):return-1;case!(a>0):return 1;default:return 0}},exports.quot=sb=Vb(function(a,b){return~~(a/b)}),exports.rem=tb=Vb(function(a,b){return a%b}),exports.div=ub=Vb(function(a,b){return Math.floor(a/b)}),exports.mod=vb=Vb(function(a,b){var c;return(a%(c=b)+c)%c}),exports.recip=wb=function(a){return 1/a},exports.pi=xb=Math.PI,exports.tau=yb=xb*2,exports.exp=zb=Math.exp,exports.sqrt=Ab=Math.sqrt,exports.ln=Bb=Math.log,exports.pow=Cb=Vb(function(a,b){return Math.pow(a,b)}),exports.sin=Db=Math.sin,exports.tan=Eb=Math.tan,exports.cos=Fb=Math.cos,exports.asin=Gb=Math.asin,exports.acos=Hb=Math.acos,exports.atan=Ib=Math.atan,exports.atan2=Jb=Vb(function(a,b){return Math.atan2(a,b)}),exports.truncate=Kb=function(a){return~~a},exports.round=Lb=Math.round,exports.ceiling=Mb=Math.ceil,exports.floor=Nb=Math.floor,exports.isItNaN=Ob=function(a){return a!==a},exports.even=Pb=function(a){return a%2===0},exports.odd=Qb=function(a){return a%2!==0},exports.gcd=Rb=Vb(function(a,b){var c;a=Math.abs(a),b=Math.abs(b);while(b!==0)c=a%b,a=b,b=c;return a}),exports.lcm=Sb=Vb(function(a,b){return Math.abs(Math.floor(a/Rb(a,b)*b))}),exports.installPrelude=function(a){a.prelude.isInstalled||(Zb(a,exports),a.prelude.isInstalled=!0)},exports.prelude=exports,exports}()