import{$n as fr,$r as sf$1,$t as Ug,A as Gw,An as Zt$4,Ar as nV,At as Pt$2,B as Ir,Bn as cd$1,Br as qd$1,C as Er,Ci as zu$1,Cn as Yj,Cr as ky,Ct as Ow,D as GB,Dn as Z$3,Dr as mE,Dt as Pg,E as Ft$4,En as Yy,Er as lu$1,Et as Pb$1,F as Hv,Fn as ad$1,Ft as Qn$2,Gn as dm$1,Gr as qy,Gt as S_$1,H as J$2,Hr as qg,Ht as Rn$2,I as Hw,In as af$1,Ir as pc$1,J as Ju$1,Jn as ee$3,Jr as rr$1,Jt as Sy,K as Ji$2,Kn as dw,Kr as ri$4,Kt as Ss$1,L as Hy,Lt as Qs$1,Mn as Zy,Mr as ne$1,Mt as Q$1,Nn as _e$2,Nr as oH,Nt as Q_$1,O as Gg,On as Zg,Or as me$3,Ot as Pm$1,P as Hg,Pn as _y,Pr as oa$1,Pt as Qj,Q as Kj,Qr as sd$1,Qt as U$4,R as Ib$1,Rn as bb$1,Rt as Qy,S as En$3,Si as zr,Sn as Yg,Sr as kw,St as Og,T as Fg,Tn as Yw,Tr as lo$2,U as J_$1,Un as cs$1,Ur as qj,Ut as Rw,V as Iw,Vn as cm$1,Vr as qe$3,Vt as Rg,W as Jg,Wn as cv,Wr as qw,Wt as S$1,X as K$2,Xn as et$2,Xr as sH,Xt as Tm$1,Y as Jy,Yn as el$1,Yr as ry,Yt as T_$1,Z as Ke$2,Zn as fi$2,Zr as sb$1,Zt as Ty,_ as Dg,_i as yl$1,_n as X,_t as Ne$3,ai as to$2,an as Vb$1,ar as hE,at as Ls$1,bi as ze$3,bn as YI,br as ke$3,bt as O_$1,cn as Vv,cr as hr$1,ct as M$2,d as C$2,di as xa$1,dn as Wd$1,dr as il,dt as Mg,ei as sm$1,en as Uw,et as Kp$1,f as Cb$1,fi as xb$1,fn as Wg,fr as im$1,ft as Ms$1,g as Cw,gi as yb$1,gn as Ww,gr as jb$1,gt as Nb$1,h as Ct$3,hi as xw,ht as N_$1,i as An$3,ii as tl$1,in as Va,ir as gr,it as Le$3,j as Gy,jn as Zw,jr as nd$1,jt as Py,k as Gm$1,kn as Zj,kr as mo$2,kt as Ps$1,l as Bv,li as wb$1,ln as Vw,lr as iH,m as Cp$1,mn as Wj,mt as NC,n as Ab$1,nn as V$3,nr as gg,o as Aw,oi as um$1,on as Vg,or as hg,ot as Lt$3,p as Cg,pi as xe$3,pn as Wi$2,pr as it$2,pt as My,q as Jj,qn as eV,qr as rl$1,qt as St$3,r as Ag,ri as ta$1,rr as gn$5,rt as Lb$1,si as uo$2,sn as Vs$1,sr as hh$1,st as Ly,t as $y,ti as sr$1,tn as Uy,tr as g$2,tt as Ky,u as By,ui as ww,un as Vy,ur as ia$1,ut as Mb$1,v as Dn$2,vn as Xm$1,vr as jy,vt as Ns$1,w as F_$1,wn as Ys$1,wr as lI,wt as P$1,x as Eb$1,xi as zi$2,xn as Ye$2,xr as kg,xt as Oe$3,y as Dr,yi as zB,yn as Xu$1,yr as kb$1,yt as Nw,z as Ig,zn as by,zr as q$2,zt as R_$1}from"./chunk-Cx6ZEg3L.js";import{a as S$2,c as Z$4,d as w$1,i as L,l as b$2,n as C$3,o as U$5,r as J$3,s as Y$4,t as A$1,u as s}from"./chunk-DJ2hnKdt.js";import{a as gr$1,i as Ye$3,n as So$1,o as hn$5,r as Vr,s as zr$1,t as Ko}from"./chunk-D69zAXyf.js";var Y$3=(()=>{class n{constructor(){this.ngZone=g$2(U$4),this.resizeCallbacks=new Map,this.inlineEditingCellKey=xe$3(void 0),this.disableEditing=xe$3(!1),this._tabs=xe$3([]),this.tabs=this._tabs.asReadonly(),this._tabId=xe$3(null),this.tabId=qe$3(()=>this._tabId()??this._tabs()?.[0]?.id),this.sort=xe$3(void 0)}static reorderColumnsFn(e,t){return(e.columnOrder??1e4)-(t.columnOrder??1e4)}ngOnDestroy(){this.resizeObserver?.disconnect(),this.resizeCallbacks.clear()}observeResize(e,t){typeof ResizeObserver>`u`||(this.resizeObserver||(this.resizeObserver=this.ngZone.runOutsideAngular(()=>new ResizeObserver(r=>{for(let i of r)this.resizeCallbacks.get(i.target)?.(i)}))),this.resizeCallbacks.set(e,t),this.resizeObserver.observe(e))}unobserveResize(e){this.resizeCallbacks.delete(e)&&this.resizeObserver?.unobserve(e)}updateTabId(e){this._tabId.set(e)}updateDisableEditing(e){this.disableEditing.set(e)}updateTabs(e){this._tabs.set([...e??[]])}updateSorting(e){this.sort.set(e?[...e]:void 0)}updateColumnSorting(e,t,r){let i=e.sortKey??e.key;this.sort.update((s=[])=>t?this.toggleMultiSort(s,i):this.toggleSingleSort(s,i)),r?.(this.sort())}toggleMultiSort(e,t){let r=e.findIndex(i=>i.id===t);return r<0?[...e,{id:t,direction:`asc`}]:e[r].direction===`desc`?e.filter((i,s)=>s!==r):e.map((i,s)=>s===r?Z$3(q$2({},i),{direction:`desc`}):i)}toggleSingleSort(e,t){let r=e.find(i=>i.id===t);return r?r.direction===`asc`?[{id:t,direction:`desc`}]:[]:[{id:t,direction:`asc`}]}startInlineEditing(e){this.inlineEditingCellKey.set(e)}closeInlineEditing(){this.inlineEditingCellKey.set(void 0)}static{this.ɵfac=function(t){return new(t||n)}}static{this.ɵprov=P$1({token:n,factory:n.ɵfac})}}return n})();function ee$2(n){return n&&typeof n.connect==`function`&&!(n instanceof Qs$1)}var g$1=(function(n){return n[n.REPLACED=0]=`REPLACED`,n[n.INSERTED=1]=`INSERTED`,n[n.MOVED=2]=`MOVED`,n[n.REMOVED=3]=`REMOVED`,n})(g$1||{});var W$4=class{viewCacheSize=20;_viewCache=[];applyChanges(o,e,t,r,i){o.forEachOperation((s,u,_)=>{let p,m;if(s.previousIndex==null){let U=()=>t(s,u,_);p=this._insertView(U,_,e,r(s)),m=p?g$1.INSERTED:g$1.REPLACED}else _==null?(this._detachAndCacheView(u,e),m=g$1.REMOVED):(p=this._moveView(u,_,e,r(s)),m=g$1.MOVED);i&&i({context:p?.context,operation:m,record:s})})}detach(){for(let o of this._viewCache)o.destroy();this._viewCache=[]}_insertView(o,e,t,r){let i=this._insertViewFromCache(e,t);if(i){i.context.$implicit=r;return}let s=o();return t.createEmbeddedView(s.templateRef,s.context,s.index)}_detachAndCacheView(o,e){let t=e.detach(o);this._maybeCacheView(t,e)}_moveView(o,e,t,r){let i=t.get(o);return t.move(i,e),i.context.$implicit=r,i}_maybeCacheView(o,e){if(this._viewCache.length<this.viewCacheSize)this._viewCache.push(o);else{let t=e.indexOf(o);t===-1?o.destroy():e.remove(t)}}_insertViewFromCache(o,e){let t=this._viewCache.pop();return t&&e.insert(t,o),t||null}};var H$4=20;var G$3=(()=>{class n{_ngZone=g$2(U$4);_platform=g$2(J$3);_renderer=g$2(to$2).createRenderer(null,null);_cleanupGlobalListener;_scrolled=new ee$3;_scrolledCount=0;scrollContainers=new Map;register(e){this.scrollContainers.has(e)||this.scrollContainers.set(e,e.elementScrolled().subscribe(()=>this._scrolled.next(e)))}deregister(e){let t=this.scrollContainers.get(e);t&&(t.unsubscribe(),this.scrollContainers.delete(e))}scrolled(e=H$4){return this._platform.isBrowser?new M$2(t=>{this._cleanupGlobalListener||(this._cleanupGlobalListener=this._ngZone.runOutsideAngular(()=>this._renderer.listen(`document`,`scroll`,()=>this._scrolled.next())));let r=e>0?this._scrolled.pipe(By(e)).subscribe(t):this._scrolled.subscribe(t);return this._scrolledCount++,()=>{r.unsubscribe(),this._scrolledCount--,this._scrolledCount||(this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0)}}):Ty()}ngOnDestroy(){this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0,this.scrollContainers.forEach((e,t)=>this.deregister(t)),this._scrolled.complete()}ancestorScrolled(e,t){let r=this.getAncestorScrollContainers(e);return this.scrolled(t).pipe(Ir(i=>!i||r.indexOf(i)>-1))}getAncestorScrollContainers(e){let t=[];return this.scrollContainers.forEach((r,i)=>{this._targetContainsElement(i,e)&&t.push(i)}),t}_targetContainsElement(e,t){let r=A$1(t),i=e.getElementRef().nativeElement;do if(r==i)return!0;while(r=r.parentElement);return!1}static ɵfac=function(t){return new(t||n)};static ɵprov=Oe$3({token:n,factory:n.ɵfac})}return n})();var rt$2=(()=>{class n{elementRef=g$2(it$2);scrollDispatcher=g$2(G$3);ngZone=g$2(U$4);dir=g$2(b$2,{optional:!0});_scrollElement=this.elementRef.nativeElement;_destroyed=new ee$3;_renderer=g$2(gn$5);_cleanupScroll;_elementScrolled=new ee$3;ngOnInit(){this._cleanupScroll=this.ngZone.runOutsideAngular(()=>this._renderer.listen(this._scrollElement,`scroll`,e=>this._elementScrolled.next(e))),this.scrollDispatcher.register(this)}ngOnDestroy(){this._cleanupScroll?.(),this._elementScrolled.complete(),this.scrollDispatcher.deregister(this),this._destroyed.next(),this._destroyed.complete()}elementScrolled(){return this._elementScrolled}getElementRef(){return this.elementRef}scrollTo(e){let t=this.elementRef.nativeElement,r=this.dir&&this.dir.value==`rtl`;e.left??=r?e.end:e.start,e.right??=r?e.start:e.end,e.bottom!=null&&(e.top=t.scrollHeight-t.clientHeight-e.bottom),r&&Z$4()!=s.NORMAL?(e.left!=null&&(e.right=t.scrollWidth-t.clientWidth-e.left),Z$4()==s.INVERTED?e.left=e.right:Z$4()==s.NEGATED&&(e.left=e.right?-e.right:e.right)):e.right!=null&&(e.left=t.scrollWidth-t.clientWidth-e.right),this._applyScrollToOptions(e)}_applyScrollToOptions(e){let t=this.elementRef.nativeElement;Y$4()?t.scrollTo(e):(e.top!=null&&(t.scrollTop=e.top),e.left!=null&&(t.scrollLeft=e.left))}measureScrollOffset(e){let t=`left`,r=`right`,i=this.elementRef.nativeElement;if(e==`top`)return i.scrollTop;if(e==`bottom`)return i.scrollHeight-i.clientHeight-i.scrollTop;let s$1=this.dir&&this.dir.value==`rtl`;return e==`start`?e=s$1?r:t:e==`end`&&(e=s$1?t:r),s$1&&Z$4()==s.INVERTED?e==t?i.scrollWidth-i.clientWidth-i.scrollLeft:i.scrollLeft:s$1&&Z$4()==s.NEGATED?e==t?i.scrollLeft+i.scrollWidth-i.clientWidth:-i.scrollLeft:e==t?i.scrollLeft:i.scrollWidth-i.clientWidth-i.scrollLeft}static ɵfac=function(t){return new(t||n)};static ɵdir=En$3({type:n,selectors:[[``,`cdk-scrollable`,``],[``,`cdkScrollable`,``]]})}return n})();var $$3=20;var st$4=(()=>{class n{_platform=g$2(J$3);_listeners;_viewportSize=null;_change=new ee$3;_document=g$2(Ne$3);constructor(){let e=g$2(U$4),t=g$2(to$2).createRenderer(null,null);e.runOutsideAngular(()=>{if(this._platform.isBrowser){let r=i=>this._change.next(i);this._listeners=[t.listen(`window`,`resize`,r),t.listen(`window`,`orientationchange`,r)]}this.change().subscribe(()=>this._viewportSize=null)})}ngOnDestroy(){this._listeners?.forEach(e=>e()),this._change.complete()}getViewportSize(){this._viewportSize||this._updateViewportSize();let e={width:this._viewportSize.width,height:this._viewportSize.height};return this._platform.isBrowser||(this._viewportSize=null),e}getViewportRect(){let e=this.getViewportScrollPosition(),{width:t,height:r}=this.getViewportSize();return{top:e.top,left:e.left,bottom:e.top+r,right:e.left+t,height:r,width:t}}getViewportScrollPosition(){if(!this._platform.isBrowser)return{top:0,left:0};let e=this._document,t=this._getWindow(),r=e.documentElement,i=r.getBoundingClientRect();return{top:-i.top||e.body?.scrollTop||t.scrollY||r.scrollTop||0,left:-i.left||e.body?.scrollLeft||t.scrollX||r.scrollLeft||0}}change(e=$$3){return e>0?this._change.pipe(By(e)):this._change}_getWindow(){return this._document.defaultView||window}_updateViewportSize(){let e=this._getWindow();this._viewportSize=this._platform.isBrowser?{width:e.innerWidth,height:e.innerHeight}:{width:0,height:0}}static ɵfac=function(t){return new(t||n)};static ɵprov=Oe$3({token:n,factory:n.ɵfac})}return n})();var ot$2=new S$1(`CDK_VIRTUAL_SCROLL_VIEWPORT`);var j$5=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵmod=gg({type:n});static ɵinj=xa$1({})}return n})();var lt$4=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵmod=gg({type:n});static ɵinj=xa$1({imports:[U$5,j$5,U$5,j$5]})}return n})();function ut$4(n,i){let e={};for(let t of Object.keys(n))t!==i&&(e[t]=n[t]);return e}var Le$2=class{state=xe$3({});hasAny=qe$3(()=>Object.keys(this.state()).length>0);isLoading(i){return this.state()[i]!==void 0}get(i){return this.state()[i]}set(i,e){this.state.update(t=>Z$3(q$2({},t),{[i]:e}))}clear(i){this.state.update(e=>ut$4(e,i))}clearIfOwner(i,e){this.state.update(t=>t[i]===e?ut$4(t,i):t)}};var re$1=class{};var Bt$2=(()=>{class n{handle(e){return e.key}static ɵfac=function(t){return new(t||n)};static ɵprov=P$1({token:n,factory:n.ɵfac})}return n})();var B$1=class{};var Ht$2=(()=>{class n extends B$1{compile(e,t){return e}compileTranslations(e,t){return e}static ɵfac=(()=>{let e;return function(s){return(e||(e=Cp$1(n)))(s||n)}})();static ɵprov=P$1({token:n,factory:n.ɵfac})}return n})();var H$3=class{};var Vt$4=(()=>{class n extends H$3{getTranslation(e){return Ty({})}static ɵfac=(()=>{let e;return function(s){return(e||(e=Cp$1(n)))(s||n)}})();static ɵprov=P$1({token:n,factory:n.ɵfac})}return n})();function we$3(n,i){if(n===i)return!0;if(n===null||i===null)return!1;if(n!==n&&i!==i)return!0;let e=typeof n,t=typeof i,s;if(e==t&&e==`object`)if(Array.isArray(n)){if(!Array.isArray(i))return!1;if((s=n.length)==i.length){for(let r=0;r<s;r++)if(!we$3(n[r],i[r]))return!1;return!0}}else{if(Array.isArray(i))return!1;if(y$1(n)&&y$1(i)){let r=Object.create(null);for(let o in n){if(!we$3(n[o],i[o]))return!1;r[o]=!0}for(let o in i)if(!(o in r)&&typeof i[o]<`u`)return!1;return!0}}return!1}function v$1(n){return typeof n<`u`&&n!==null}function dt$4(n){return n!==void 0}function y$1(n){return K$1(n)&&!w(n)&&n!==null}function K$1(n){return typeof n==`object`&&n!==null}function w(n){return Array.isArray(n)}function oe$3(n){return typeof n==`string`}function $t$4(n){return typeof n==`function`}function ae$2(n){if(w(n))return n.map(i=>ae$2(i));if(y$1(n)){let i={};return Object.keys(n).forEach(e=>{i[e]=ae$2(n[e])}),i}else return n}function Me$2(n,i){if(!K$1(n))return ae$2(i);let e=ae$2(n);return K$1(e)&&K$1(i)&&Object.keys(i).forEach(t=>{y$1(i[t])?t in n?e[t]=Me$2(n[t],i[t]):Object.assign(e,{[t]:i[t]}):Object.assign(e,{[t]:i[t]})}),e}function ft$4(n,i){let e=i.split(`.`);i=``;do{i+=e.shift();let t=!e.length;if(v$1(n)){if(y$1(n)&&dt$4(n[i])&&(y$1(n[i])||w(n[i])||t)){n=n[i],i=``;continue}if(w(n)){if(i===`length`&&t){n=n.length,i=``;continue}if(/^\d+$/.test(i)){let s=parseInt(i,10);if(dt$4(n[s])&&(y$1(n[s])||w(n[s])||t)){n=n[s],i=``;continue}}}}if(t){n=void 0;continue}i+=`.`}while(e.length);return n}function Wt$4(n,i,e){return Me$2(n,Zt$3(i,e))}function Zt$3(n,i){return n.split(`.`).reduceRight((e,t)=>({[t]:e}),i)}var V$2=class{};var Gt$3=(()=>{class n extends V$2{templateMatcher=/{{\s?([^{}\s]*)\s?}}/g;interpolate(e,t){if(oe$3(e))return this.interpolateString(e,t);if($t$4(e))return this.interpolateFunction(e,t)}interpolateFunction(e,t){return e(t)}interpolateString(e,t){return t?e.replace(this.templateMatcher,(s,r)=>{let o=this.getInterpolationReplacement(t,r);return o!==void 0?o:s}):e}getInterpolationReplacement(e,t){return this.formatValue(ft$4(e,t))}formatValue(e){if(oe$3(e))return e;if(typeof e==`number`||typeof e==`boolean`)return e.toString();if(e===null)return`null`;if(w(e))return e.join(`, `);if(K$1(e))return typeof e.toString==`function`&&e.toString!==Object.prototype.toString?e.toString():JSON.stringify(e)}static ɵfac=(()=>{let e;return function(s){return(e||(e=Cp$1(n)))(s||n)}})();static ɵprov=P$1({token:n,factory:n.ɵfac})}return n})();var pt$4=(()=>{class n{_translations=xe$3({});translations=this._translations.asReadonly();_languages=xe$3([]);languages=this._languages.asReadonly();_lastTranslationChange=xe$3(null);lastTranslationChange=this._lastTranslationChange.asReadonly();_translationChange$=new ee$3;translationChange$=this._translationChange$.asObservable();constructor(){g$2(X).onDestroy(()=>{this._translationChange$.complete()})}getTranslations(e){return this.translations()[e]}setTranslations(e,t,s){this._translations.update(o=>Z$3(q$2({},o),{[e]:s&&this.hasTranslationFor(e)?Me$2(o[e],t):t})),this.addLanguages([e]);let r={lang:e,translations:this.getTranslations(e)};this._lastTranslationChange.set(r),this._translationChange$.next(r)}getLanguages(){return this.languages()}addLanguages(e){this._languages.update(t=>Array.from(new Set([...t,...e])))}hasTranslationFor(e){return typeof this.translations()[e]<`u`}deleteTranslations(e){this._translations.update(t=>{let o=t,{[e]:s}=o;return Xm$1(o,[J_$1(e)])})}getTranslationValue(e,t){return ft$4(this.getTranslations(e),t)}static ɵfac=function(t){return new(t||n)};static ɵprov=P$1({token:n,factory:n.ɵfac})}return n})();var mt$5=new S$1(`TRANSLATE_CONFIG`);var j$4=n=>My(n)?n:Ty(n);var Ce$3=(()=>{class n{loadingTranslations=new Le$2;lastUseLanguage=null;currentLoader=g$2(H$3);compiler=g$2(B$1);parser=g$2(V$2);missingTranslationHandler=g$2(re$1);store=g$2(pt$4);destroyRef=g$2(X);parent;get isRoot(){return this.parent===null}_onLangChange=new ee$3;_onFallbackLangChange=new ee$3;_currentLang=xe$3(null);_fallbackLang=xe$3(null);_onTranslationRefresh=null;_isLoading=qe$3(()=>this.loadingTranslations.hasAny()||(this.parent?.isLoading()??!1));getRoot(){let e=this;for(;e.parent;)e=e.parent;return e}getParent(){return this.parent}getActiveRequestedLang(){return this.getRoot().lastUseLanguage}hasTranslationInChain(e){for(let t=this;t;t=t.parent)if(t.store.hasTranslationFor(e))return!0;return!1}chainTranslationChange$(){let e=[];for(let t=this;t;t=t.parent)e.push(t.store.translationChange$);return e.length===1?e[0]:Vy(...e)}get onTranslationChange(){return this.store.translationChange$}get onLangChange(){return this.isRoot?this._onLangChange.asObservable():this.parent?this.parent.onLangChange:Lt$3}get onFallbackLangChange(){return this.isRoot?this._onFallbackLangChange.asObservable():this.parent?this.parent.onFallbackLangChange:Lt$3}get onTranslationRefresh(){if(!this._onTranslationRefresh){let e=Vy(this.onTranslationChange.pipe(Ir(t=>t.lang===this.getCurrentLang()||t.lang===this.getFallbackLang())),this.onLangChange,this.onFallbackLangChange).pipe(Ye$2(()=>{}));this.isRoot?this._onTranslationRefresh=e:this._onTranslationRefresh=this.parent?Vy(e,this.parent.onTranslationRefresh):e}return this._onTranslationRefresh}constructor(){let e=q$2({isRoot:!0,fallbackLang:null},g$2(mt$5,{optional:!0}));this.parent=e.isRoot?null:g$2(n,{optional:!0,skipSelf:!0});let t=g$2(X);if(this.isRoot)e.lang&&this.use(e.lang),e.fallbackLang&&this.setFallbackLang(e.fallbackLang);else{let s=this.getCurrentLang();s&&this.loadOrExtendLanguage(s)?.pipe(Q_$1(t)).subscribe({error:o=>{console.warn(`@ngx-translate/core: child failed to load "${s}". Cause:`,o)}});let r=this.getFallbackLang();r&&r!==s&&this.loadOrExtendLanguage(r)?.pipe(Q_$1(t)).subscribe({error:o=>{console.warn(`@ngx-translate/core: child failed to load "${r}". Cause:`,o)}})}this.onLangChange.pipe(Q_$1(t)).subscribe(s=>{this.isRoot||this.loadOrExtendLanguage(s.lang)?.pipe(Q_$1(t)).subscribe({error:r=>{console.warn(`@ngx-translate/core: child failed to load "${s.lang}". Cause:`,r)}})}),this.onFallbackLangChange.pipe(Q_$1(t)).subscribe(s=>{this.isRoot||this.loadOrExtendLanguage(s.lang)?.pipe(Q_$1(t)).subscribe({error:r=>{console.warn(`@ngx-translate/core: child failed to load "${s.lang}". Cause:`,r)}})}),t.onDestroy(()=>{this._onLangChange.complete(),this._onFallbackLangChange.complete()})}setFallbackLang(e){if(!this.isRoot)return this.parent.setFallbackLang(e);this._fallbackLang()||this._fallbackLang.set(e);let t=this.loadOrExtendLanguage(e);return My(t)?(t.pipe(Rn$2(1)).subscribe({next:()=>{this._fallbackLang.set(e),this._onFallbackLangChange.next({lang:e,translations:this.store.getTranslations(e)})},error:s=>{console.warn(`@ngx-translate/core: failed to load fallback "${e}". Cause:`,s)}}),t):(this._fallbackLang.set(e),this._onFallbackLangChange.next({lang:e,translations:this.store.getTranslations(e)}),Ty(this.store.getTranslations(e)))}get isLoading(){return this._isLoading}use(e){if(!this.isRoot)return this.parent.use(e);let t=this._currentLang(),s=this.lastUseLanguage;this.lastUseLanguage=e,this._currentLang()||this._currentLang.set(e);let r=this.loadOrExtendLanguage(e);return My(r)?(r.pipe(Rn$2(1)).subscribe({next:()=>{this.changeLang(e)},error:o=>{this.lastUseLanguage===e&&(this._currentLang.set(t),this.lastUseLanguage=s),console.warn(`@ngx-translate/core: failed to load "${e}". currentLang was NOT changed; remains "${t??`null`}". Cause:`,o)}}),r):(this.changeLang(e),Ty(this.store.getTranslations(e)))}loadOrExtendLanguage(e){return this.store.hasTranslationFor(e)?Ty(this.store.getTranslations(e)):this.loadAndCompileTranslations(e)}getTranslations(e){return this.store.getTranslations(e)}changeLang(e){e===this.lastUseLanguage&&(this._currentLang.set(e),this._onLangChange.next({lang:e,translations:this.store.getTranslations(e)}))}getCurrentLang(){return this.isRoot?this._currentLang():this.parent?.getCurrentLang()??null}loadAndCompileTranslations(e){let t=this.loadingTranslations.get(e);if(t)return t;let s=this.currentLoader.getTranslation(e).pipe(Ye$2(r=>this.compiler.compileTranslations(r,e)),cd$1(r=>{this.store.setTranslations(e,r,!1),this.loadingTranslations.clearIfOwner(e,s)}),sd$1(()=>this.loadingTranslations.clearIfOwner(e,s)),Yy({bufferSize:1,refCount:!0}));return this.loadingTranslations.set(e,s),s.pipe(Q_$1(this.destroyRef)).subscribe({error:()=>{}}),s}setTranslation(e,t,s=!1){let r=this.compiler.compileTranslations(t,e);this.store.setTranslations(e,r,s)}setCompiledTranslation(e,t,s=!1){this.store.setTranslations(e,t,s)}getLangs(){return this.store.getLanguages()}addLangs(e){this.store.addLanguages(e)}getParsedResultForKey(e,t,s){let r=this.getTextToInterpolate(e,s);if(v$1(r))return this.runInterpolation(r,t);let c=this.getMissingTranslationHandler().handle(q$2({key:e,translateService:this},t!==void 0&&{interpolateParams:t}));return c!==void 0?c:e}getMissingTranslationHandler(){return this.missingTranslationHandler}getFallbackLang(){return this.isRoot?this._fallbackLang():this.parent?.getFallbackLang()??null}getTextToInterpolate(e,t){if(t){let c=this.store.getTranslationValue(t,e);return c!==void 0?c:this.parent?.getTextToInterpolate(e,t)}let s=this.getCurrentLang(),r=this.getFallbackLang(),o;return s&&(o=this.store.getTranslationValue(s,e)),!v$1(o)&&r&&r!==s&&(o=this.store.getTranslationValue(r,e)),o!==void 0?o:this.parent?.getTextToInterpolate(e)}runInterpolation(e,t){if(v$1(e))return w(e)?this.runInterpolationOnArray(e,t):y$1(e)?this.runInterpolationOnDict(e,t):this.parser.interpolate(e,t)}runInterpolationOnArray(e,t){return e.map(s=>this.runInterpolation(s,t))}runInterpolationOnDict(e,t){let s={};for(let r in e){let o=this.runInterpolation(e[r],t);o!==void 0&&(s[r]=o)}return s}getParsedResult(e,t,s){return e instanceof Array?this.getParsedResultForArray(e,t,s):this.getParsedResultForKey(e,t,s)}getParsedResultForArray(e,t,s){let r={},o=!1;for(let d of e)r[d]=this.getParsedResultForKey(d,t,s),o=o||My(r[d]);if(!o)return r;return Py(e.map(d=>j$4(r[d]))).pipe(Ye$2(d=>{let G={};return d.forEach((jt,Kt)=>{G[e[Kt]]=jt}),G}))}get(e,t,s){if(!v$1(e)||!e.length)return Ty(``);let r=s??this.getActiveRequestedLang()??this.getCurrentLang(),o=r?this.loadingTranslations.get(r):void 0;return o?o.pipe(Hy(()=>j$4(this.getParsedResult(e,t,s)))):j$4(this.getParsedResult(e,t,s))}getStreamOnTranslationChange(e,t,s){if(!v$1(e)||!e.length)throw new Error(`Parameter "key" is required and cannot be empty`);return An$3(Ly(()=>this.get(e,t,s)),this.onTranslationChange.pipe(ad$1(()=>{return j$4(this.getParsedResult(e,t,s))})))}stream(e,t,s){if(!v$1(e)||!e.length)throw new Error(`Parameter "key" required`);let r=s?Vy(this.onLangChange,this.chainTranslationChange$().pipe(Ir(o=>o.lang===s))):this.onLangChange;return An$3(Ly(()=>this.get(e,t,s)),r.pipe(ad$1(()=>{return j$4(this.getParsedResult(e,t,s))})))}instant(e,t,s){if(!v$1(e)||e.length===0)return``;s&&!this.hasTranslationInChain(s)&&this.warnUnloadedInstantLang(s);let r=this.getParsedResult(e,t,s);return My(r)?this.keyToObject(e):r}warnedUnloadedInstantLangs=new Set;warnUnloadedInstantLang(e){let t=this.getRoot();if(t!==this){t.warnUnloadedInstantLang(e);return}this.warnedUnloadedInstantLangs.has(e)||Q$1(()=>{this.warnedUnloadedInstantLangs.add(e),console.warn(`@ngx-translate/core: instant() called with lang="${e}" but no translations are loaded for that language. Returning the key as fallback. Load with use("${e}") or setTranslation("${e}", ...) first.`)})}translate(e,t,s){return qe$3(()=>{let r=typeof e==`function`?e():e,o=typeof t==`function`?t():t,c=typeof s==`function`?s():s;return this.instant(r,o,c)})}keyToObject(e){return Array.isArray(e)?e.reduce((t,s)=>(t[s]=s,t),{}):e}set(e,t,s=this.getCurrentLang()){this.store.setTranslations(s,Wt$4(this.store.getTranslations(s),e,oe$3(t)?this.compiler.compile(t,s):this.compiler.compileTranslations(t,s)),!1)}reloadLang(e){return this.resetLang(e),this.loadAndCompileTranslations(e)}resetLang(e){this.loadingTranslations.clear(e),this.store.deleteTranslations(e)}static getBrowserLang(){if(typeof window>`u`||!window.navigator)return;let e=this.getBrowserCultureLang();return e?e.split(/[-_]/)[0]:void 0}static getBrowserCultureLang(){if(!(typeof window>`u`||typeof window.navigator>`u`))return window.navigator.languages?window.navigator.languages[0]:window.navigator.language||window.navigator.browserLanguage||window.navigator.userLanguage}getBrowserLang(){return n.getBrowserLang()}getBrowserCultureLang(){return n.getBrowserCultureLang()}get currentLang(){return this.isRoot?this._currentLang.asReadonly():this.parent.currentLang}get fallbackLang(){return this.isRoot?this._fallbackLang.asReadonly():this.parent.fallbackLang}static ɵfac=function(t){return new(t||n)};static ɵprov=P$1({token:n,factory:n.ɵfac})}return n})();var xn$4=(()=>{class n{translateService=g$2(Ce$3);cachedSignal=null;lastKey=null;lastParams;transform(e,...t){if(!e||!e.length)return e;let s=this.parseArgs(t);return(e!==this.lastKey||!we$3(s,this.lastParams))&&(this.cachedSignal=this.translateService.translate(e,s),this.lastKey=e,this.lastParams=s),this.cachedSignal()}parseArgs(e){if(!(!v$1(e[0])||!e.length)){if(oe$3(e[0])&&e[0].length){let t=e[0].replace(/(')?([a-zA-Z0-9_]+)(')?(\s)?:/g,`"$2":`).replace(/:(\s)?(')(.*?)(')/g,`:"$3"`);try{return JSON.parse(t)}catch(s){throw new SyntaxError(`Wrong parameter in TranslatePipe. Expected a valid Object, received: ${e[0]}`)}}if(y$1(e[0]))return e[0]}}static ɵfac=function(t){return new(t||n)};static ɵpipe=lo$2({name:`translate`,type:n,pure:!1});static ɵprov=P$1({token:n,factory:n.ɵfac})}return n})();function gt$4(n){return/^class\s/.test(Function.prototype.toString.call(n))}function ht$4(n,i){return gt$4(i)?{provide:n,useClass:i}:{provide:n,useFactory:i}}function Pn$2(n={}){return zt$2(Z$3(q$2({},n),{isRoot:!0}))}function se$2(n,i,e,t,s){if(i===void 0)return ht$4(n,e);if(typeof i==`function`){if(gt$4(i)){let r=i.name||`YourClass`;console.warn(`@ngx-translate/core: "${t}" received a bare class (${r}); auto-wrapping with ${s}(). For clarity, prefer ${t}: ${s}(${r}).`)}return ht$4(n,i)}return i}function zt$2(n){let i=[],e=se$2(H$3,n.loader,Vt$4,`loader`,`provideTranslateLoader`),t=se$2(B$1,n.compiler,Ht$2,`compiler`,`provideTranslateCompiler`),s=se$2(V$2,n.parser,Gt$3,`parser`,`provideTranslateParser`),r=se$2(re$1,n.missingTranslationHandler,Bt$2,`missingTranslationHandler`,`provideMissingTranslationHandler`);i.push(e,t,s,r),i.push(pt$4);let o={fallbackLang:n.fallbackLang??null,lang:n.lang,isRoot:n.isRoot};return i.push({provide:mt$5,useValue:o}),i.push({provide:Ce$3,useClass:Ce$3}),i}function _t$3(n,...i){return i.length?i.some(e=>n[e]):n.altKey||n.shiftKey||n.ctrlKey||n.metaKey}var ce$2=new WeakMap;var $$2=(()=>{class n{_appRef;_injector=g$2(ne$1);_environmentInjector=g$2(me$3);load(e){let t=this._appRef=this._appRef||this._injector.get(fr),s=ce$2.get(t);s||(s={loaders:new Set,refs:[]},ce$2.set(t,s),t.onDestroy(()=>{ce$2.get(t)?.refs.forEach(r=>r.destroy()),ce$2.delete(t)})),s.loaders.has(e)||(s.loaders.add(e),s.refs.push(nV(e,{environmentInjector:this._environmentInjector})))}static ɵfac=function(t){return new(t||n)};static ɵprov=Oe$3({token:n,factory:n.ɵfac})}return n})();var ue$3=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵcmp=NC({type:n,selectors:[[`ng-component`]],exportAs:[`cdkVisuallyHidden`],decls:0,vars:0,template:function(t,s){},styles:[`.cdk-visually-hidden {
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
  white-space: nowrap;
  outline: 0;
  -webkit-appearance: none;
  -moz-appearance: none;
  left: 0;
}
[dir=rtl] .cdk-visually-hidden {
  left: auto;
  right: 0;
}
`],encapsulation:2})}return n})();var le$2;function Yt$3(){if(le$2===void 0&&(le$2=null,typeof window<`u`)){let n=window;if(n.trustedTypes!==void 0)try{le$2=n.trustedTypes.createPolicy(`angular#components`,{createHTML:i=>i})}catch(i){console.error(i)}}return le$2}function Qt$3(n){return Yt$3()?.createHTML(n)||n}function bt$3(n,i,e){n.innerHTML=Qt$3(e.sanitize(K$2.HTML,i)||``)}var vt$2=new Set;var C$1;var de$4=(()=>{class n{_platform=g$2(J$3);_nonce=g$2(Hv,{optional:!0});_matchMedia;constructor(){this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):qt$4}matchMedia(e){return(this._platform.WEBKIT||this._platform.BLINK)&&Xt$2(e,this._nonce),this._matchMedia(e)}static ɵfac=function(t){return new(t||n)};static ɵprov=Oe$3({token:n,factory:n.ɵfac})}return n})();function Xt$2(n,i){if(!vt$2.has(n))try{C$1||(C$1=document.createElement(`style`),i&&C$1.setAttribute(`nonce`,i),C$1.setAttribute(`type`,`text/css`),document.head.appendChild(C$1)),C$1.sheet&&(C$1.sheet.insertRule(`@media ${n.replace(/[{}]/g,``)} {body{ }}`,0),vt$2.add(n))}catch(e){console.error(e)}}function qt$4(n){return{matches:n===`all`||n===``,media:n,addListener:()=>{},removeListener:()=>{}}}var Jt$3=(()=>{class n{_mediaMatcher=g$2(de$4);_zone=g$2(U$4);_queries=new Map;_destroySubject=new ee$3;ngOnDestroy(){this._destroySubject.next(),this._destroySubject.complete()}isMatched(e){return yt$3(S$2(e)).some(s=>this._registerQuery(s).mql.matches)}observe(e){let r=ky(yt$3(S$2(e)).map(o=>this._registerQuery(o).observable));return r=An$3(r.pipe(Rn$2(1)),r.pipe(Qy(1),$y(0))),r.pipe(Ye$2(o=>{let c={matches:!1,breakpoints:{}};return o.forEach(({matches:d,query:G})=>{c.matches=c.matches||d,c.breakpoints[G]=d}),c}))}_registerQuery(e){if(this._queries.has(e))return this._queries.get(e);let t=this._mediaMatcher.matchMedia(e),r={observable:new M$2(o=>{let c=d=>this._zone.run(()=>o.next(d));return t.addListener(c),()=>{t.removeListener(c)}}).pipe(Ky(t),Ye$2(({matches:o})=>({query:e,matches:o})),ia$1(this._destroySubject)),mql:t};return this._queries.set(e,r),r}static ɵfac=function(t){return new(t||n)};static ɵprov=Oe$3({token:n,factory:n.ɵfac})}return n})();function yt$3(n){return n.map(i=>i.split(`,`)).reduce((i,e)=>i.concat(e)).map(i=>i.trim())}var ni$3={XSmall:`(max-width: 599.98px)`,Small:`(min-width: 600px) and (max-width: 959.98px)`,Medium:`(min-width: 960px) and (max-width: 1279.98px)`,Large:`(min-width: 1280px) and (max-width: 1919.98px)`,XLarge:`(min-width: 1920px)`,Handset:`(max-width: 599.98px) and (orientation: portrait), (max-width: 959.98px) and (orientation: landscape)`,Tablet:`(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait), (min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)`,Web:`(min-width: 840px) and (orientation: portrait), (min-width: 1280px) and (orientation: landscape)`,HandsetPortrait:`(max-width: 599.98px) and (orientation: portrait)`,TabletPortrait:`(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait)`,WebPortrait:`(min-width: 840px) and (orientation: portrait)`,HandsetLandscape:`(max-width: 959.98px) and (orientation: landscape)`,TabletLandscape:`(min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)`,WebLandscape:`(min-width: 1280px) and (orientation: landscape)`};var en$3=new S$1(`MATERIAL_ANIMATIONS`);var Tt$3=null;function tn$2(){return g$2(en$3,{optional:!0})?.animationsDisabled||g$2(Bv,{optional:!0})===`NoopAnimations`?`di-disabled`:(Tt$3??=g$2(de$4).matchMedia(`(prefers-reduced-motion)`).matches,Tt$3?`reduced-motion`:`enabled`)}function ai$3(){return tn$2()!==`enabled`}function Oe$2(n){return n.buttons===0||n.detail===0}function De$2(n){let i=n.touches&&n.touches[0]||n.changedTouches&&n.changedTouches[0];return!!i&&i.identifier===-1&&(i.radiusX==null||i.radiusX===1)&&(i.radiusY==null||i.radiusY===1)}var Se$2;function Et$1(){if(Se$2==null){let n=typeof document<`u`?document.head:null;Se$2=!!(n&&(n.createShadowRoot||n.attachShadow))}return Se$2}function Fe$3(n){if(Et$1()){let i=n.getRootNode?n.getRootNode():null;if(typeof ShadowRoot<`u`&&ShadowRoot&&i instanceof ShadowRoot)return i}return null}function M$1(n){if(n.composedPath)try{return n.composedPath()[0]}catch(i){}return n.target}var W$3;function At$3(){if(W$3==null&&typeof window<`u`)try{window.addEventListener(`test`,null,Object.defineProperty({},"passive",{get:()=>W$3=!0}))}finally{W$3=W$3||!1}return W$3}function Re$3(n){return At$3()?n:!!n.capture}var It$3=new S$1(`cdk-input-modality-detector-options`);var Lt$2={ignoreKeys:[18,17,224,91,16]};var wt$3=650;var Ne$2={passive:!0,capture:!0};var Ct$2=(()=>{class n{_platform=g$2(J$3);_listenerCleanups;modalityDetected;modalityChanged;get mostRecentModality(){return this._modality.value}_mostRecentTarget=null;_modality=new gr(null);_options;_lastTouchMs=0;_onKeydown=e=>{this._options?.ignoreKeys?.some(t=>t===e.keyCode)||(this._modality.next(`keyboard`),this._mostRecentTarget=M$1(e))};_onMousedown=e=>{Date.now()-this._lastTouchMs<wt$3||(this._modality.next(Oe$2(e)?`keyboard`:`mouse`),this._mostRecentTarget=M$1(e))};_onTouchstart=e=>{if(De$2(e)){this._modality.next(`keyboard`);return}this._lastTouchMs=Date.now(),this._modality.next(`touch`),this._mostRecentTarget=M$1(e)};constructor(){let e=g$2(U$4),t=g$2(Ne$3),s=g$2(It$3,{optional:!0});if(this._options=q$2(q$2({},Lt$2),s),this.modalityDetected=this._modality.pipe(Qy(1)),this.modalityChanged=this.modalityDetected.pipe(Gy()),this._platform.isBrowser){let r=g$2(to$2).createRenderer(null,null);this._listenerCleanups=e.runOutsideAngular(()=>[r.listen(t,`keydown`,this._onKeydown,Ne$2),r.listen(t,`mousedown`,this._onMousedown,Ne$2),r.listen(t,`touchstart`,this._onTouchstart,Ne$2)])}}ngOnDestroy(){this._modality.complete(),this._listenerCleanups?.forEach(e=>e())}static ɵfac=function(t){return new(t||n)};static ɵprov=Oe$3({token:n,factory:n.ɵfac})}return n})();var Z$2=(function(n){return n[n.IMMEDIATE=0]=`IMMEDIATE`,n[n.EVENTUAL=1]=`EVENTUAL`,n})(Z$2||{});var Mt$4=new S$1(`cdk-focus-monitor-default-options`);var he$2=Re$3({passive:!0,capture:!0});var Ot$1=(()=>{class n{_ngZone=g$2(U$4);_platform=g$2(J$3);_inputModalityDetector=g$2(Ct$2);_origin=null;_lastFocusOrigin=null;_windowFocused=!1;_windowFocusTimeoutId;_originTimeoutId;_originFromTouchInteraction=!1;_elementInfo=new Map;_monitoredElementCount=0;_rootNodeFocusListenerCount=new Map;_detectionMode;_windowFocusListener=()=>{this._windowFocused=!0,this._windowFocusTimeoutId=setTimeout(()=>this._windowFocused=!1)};_document=g$2(Ne$3);_stopInputModalityDetector=new ee$3;constructor(){let e=g$2(Mt$4,{optional:!0});this._detectionMode=e?.detectionMode||Z$2.IMMEDIATE}_rootNodeFocusAndBlurListener=e=>{let t=M$1(e);for(let s=t;s;s=s.parentElement)e.type===`focus`?this._onFocus(e,s):this._onBlur(e,s)};monitor(e,t=!1){let s=A$1(e);if(!this._platform.isBrowser||s.nodeType!==1)return Ty();let r=Fe$3(s)||this._document,o=this._elementInfo.get(s);if(o)return t&&(o.checkChildren=!0),o.subject;let c={checkChildren:t,subject:new ee$3,rootNode:r};return this._elementInfo.set(s,c),this._registerGlobalListeners(c),c.subject}stopMonitoring(e){let t=A$1(e),s=this._elementInfo.get(t);s&&(s.subject.complete(),this._setClasses(t),this._elementInfo.delete(t),this._removeGlobalListeners(s))}focusVia(e,t,s){let r=A$1(e);r===this._document.activeElement?this._getClosestElementsInfo(r).forEach(([c,d])=>this._originChanged(c,t,d)):(this._setOrigin(t),typeof r.focus==`function`&&r.focus(s))}ngOnDestroy(){this._elementInfo.forEach((e,t)=>this.stopMonitoring(t))}_getWindow(){return this._document.defaultView||window}_getFocusOrigin(e){return this._origin?this._originFromTouchInteraction?this._shouldBeAttributedToTouch(e)?`touch`:`program`:this._origin:this._windowFocused&&this._lastFocusOrigin?this._lastFocusOrigin:e&&this._isLastInteractionFromInputLabel(e)?`mouse`:`program`}_shouldBeAttributedToTouch(e){return this._detectionMode===Z$2.EVENTUAL||!!e?.contains(this._inputModalityDetector._mostRecentTarget)}_setClasses(e,t){e.classList.toggle(`cdk-focused`,!!t),e.classList.toggle(`cdk-touch-focused`,t===`touch`),e.classList.toggle(`cdk-keyboard-focused`,t===`keyboard`),e.classList.toggle(`cdk-mouse-focused`,t===`mouse`),e.classList.toggle(`cdk-program-focused`,t===`program`)}_setOrigin(e,t=!1){this._ngZone.runOutsideAngular(()=>{if(this._origin=e,this._originFromTouchInteraction=e===`touch`&&t,this._detectionMode===Z$2.IMMEDIATE){clearTimeout(this._originTimeoutId);let s=this._originFromTouchInteraction?wt$3:1;this._originTimeoutId=setTimeout(()=>this._origin=null,s)}})}_onFocus(e,t){let s=this._elementInfo.get(t),r=M$1(e);!s||!s.checkChildren&&t!==r||this._originChanged(t,this._getFocusOrigin(r),s)}_onBlur(e,t){let s=this._elementInfo.get(t);!s||s.checkChildren&&e.relatedTarget instanceof Node&&t.contains(e.relatedTarget)||(this._setClasses(t),this._emitOrigin(s,null))}_emitOrigin(e,t){e.subject.observers.length&&this._ngZone.run(()=>e.subject.next(t))}_registerGlobalListeners(e){if(!this._platform.isBrowser)return;let t=e.rootNode,s=this._rootNodeFocusListenerCount.get(t)||0;s||this._ngZone.runOutsideAngular(()=>{t.addEventListener(`focus`,this._rootNodeFocusAndBlurListener,he$2),t.addEventListener(`blur`,this._rootNodeFocusAndBlurListener,he$2)}),this._rootNodeFocusListenerCount.set(t,s+1),++this._monitoredElementCount===1&&(this._ngZone.runOutsideAngular(()=>{this._getWindow().addEventListener(`focus`,this._windowFocusListener)}),this._inputModalityDetector.modalityDetected.pipe(ia$1(this._stopInputModalityDetector)).subscribe(r=>{this._setOrigin(r,!0)}))}_removeGlobalListeners(e){let t=e.rootNode;if(this._rootNodeFocusListenerCount.has(t)){let s=this._rootNodeFocusListenerCount.get(t);s>1?this._rootNodeFocusListenerCount.set(t,s-1):(t.removeEventListener(`focus`,this._rootNodeFocusAndBlurListener,he$2),t.removeEventListener(`blur`,this._rootNodeFocusAndBlurListener,he$2),this._rootNodeFocusListenerCount.delete(t))}--this._monitoredElementCount||(this._getWindow().removeEventListener(`focus`,this._windowFocusListener),this._stopInputModalityDetector.next(),clearTimeout(this._windowFocusTimeoutId),clearTimeout(this._originTimeoutId))}_originChanged(e,t,s){this._setClasses(e,t),this._emitOrigin(s,t),this._lastFocusOrigin=t}_getClosestElementsInfo(e){let t=[];return this._elementInfo.forEach((s,r)=>{(r===e||s.checkChildren&&r.contains(e))&&t.push([r,s])}),t}_isLastInteractionFromInputLabel(e){let{_mostRecentTarget:t,mostRecentModality:s}=this._inputModalityDetector;if(s!==`mouse`||!t||t===e||e.nodeName!==`INPUT`&&e.nodeName!==`TEXTAREA`||e.disabled)return!1;let r=e.labels;if(r){for(let o=0;o<r.length;o++)if(r[o].contains(t))return!0}return!1}static ɵfac=function(t){return new(t||n)};static ɵprov=Oe$3({token:n,factory:n.ɵfac})}return n})();var nn$3=(()=>{class n{_elementRef=g$2(it$2);_focusMonitor=g$2(Ot$1);_monitorSubscription;_focusOrigin=null;cdkFocusChange=new Ke$2;get focusOrigin(){return this._focusOrigin}ngAfterViewInit(){let e=this._elementRef.nativeElement;this._monitorSubscription=this._focusMonitor.monitor(e,e.nodeType===1&&e.hasAttribute(`cdkMonitorSubtreeFocus`)).subscribe(t=>{this._focusOrigin=t,this.cdkFocusChange.emit(t)})}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef),this._monitorSubscription?.unsubscribe()}static ɵfac=function(t){return new(t||n)};static ɵdir=En$3({type:n,selectors:[[``,`cdkMonitorElementFocus`,``],[``,`cdkMonitorSubtreeFocus`,``]],outputs:{cdkFocusChange:`cdkFocusChange`},exportAs:[`cdkMonitorFocus`]})}return n})();function on$3(n){if(n.type===`characterData`&&n.target instanceof Comment)return!0;if(n.type===`childList`){for(let i=0;i<n.addedNodes.length;i++)if(!(n.addedNodes[i]instanceof Comment))return!1;for(let i=0;i<n.removedNodes.length;i++)if(!(n.removedNodes[i]instanceof Comment))return!1;return!0}return!1}var an$3=(()=>{class n{create(e){return typeof MutationObserver>`u`?null:new MutationObserver(e)}static ɵfac=function(t){return new(t||n)};static ɵprov=Oe$3({token:n,factory:n.ɵfac})}return n})();var cn$3=(()=>{class n{_mutationObserverFactory=g$2(an$3);_observedElements=new Map;_ngZone=g$2(U$4);ngOnDestroy(){this._observedElements.forEach((e,t)=>this._cleanupObserver(t))}observe(e){let t=A$1(e);return new M$2(s=>{let o=this._observeElement(t).pipe(Ye$2(c=>c.filter(d=>!on$3(d))),Ir(c=>!!c.length)).subscribe(c=>{this._ngZone.run(()=>{s.next(c)})});return()=>{o.unsubscribe(),this._unobserveElement(t)}})}_observeElement(e){return this._ngZone.runOutsideAngular(()=>{if(this._observedElements.has(e))this._observedElements.get(e).count++;else{let t=new ee$3,s=this._mutationObserverFactory.create(r=>t.next(r));s&&s.observe(e,{characterData:!0,childList:!0,subtree:!0}),this._observedElements.set(e,{observer:s,stream:t,count:1})}return this._observedElements.get(e).stream})}_unobserveElement(e){this._observedElements.has(e)&&(this._observedElements.get(e).count--,this._observedElements.get(e).count||this._cleanupObserver(e))}_cleanupObserver(e){if(this._observedElements.has(e)){let{observer:t,stream:s}=this._observedElements.get(e);t&&t.disconnect(),s.complete(),this._observedElements.delete(e)}}static ɵfac=function(t){return new(t||n)};static ɵprov=Oe$3({token:n,factory:n.ɵfac})}return n})();var ji$2=(()=>{class n{_contentObserver=g$2(cn$3);_elementRef=g$2(it$2);event=new Ke$2;get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._disabled?this._unsubscribe():this._subscribe()}_disabled=!1;get debounce(){return this._debounce}set debounce(e){this._debounce=w$1(e),this._subscribe()}_debounce;_currentSubscription=null;ngAfterContentInit(){!this._currentSubscription&&!this.disabled&&this._subscribe()}ngOnDestroy(){this._unsubscribe()}_subscribe(){this._unsubscribe();let e=this._contentObserver.observe(this._elementRef);this._currentSubscription=(this.debounce?e.pipe($y(this.debounce)):e).subscribe(this.event)}_unsubscribe(){this._currentSubscription?.unsubscribe()}static ɵfac=function(t){return new(t||n)};static ɵdir=En$3({type:n,selectors:[[``,`cdkObserveContent`,``]],inputs:{disabled:[2,`cdkObserveContentDisabled`,`disabled`,mo$2],debounce:`debounce`},outputs:{event:`cdkObserveContent`},exportAs:[`cdkObserveContent`]})}return n})();var St$2=(()=>{class n{_platform=g$2(J$3);isDisabled(e){return e.hasAttribute(`disabled`)}isVisible(e){return un$2(e)&&getComputedStyle(e).visibility===`visible`}isTabbable(e){if(!this._platform.isBrowser)return!1;let t=ln$3(bn$4(e));if(t&&(Dt$1(t)===-1||!this.isVisible(t)))return!1;let s=e.nodeName.toLowerCase(),r=Dt$1(e);return e.hasAttribute(`contenteditable`)?r!==-1:s===`iframe`||s===`object`||this._platform.WEBKIT&&this._platform.IOS&&!gn$4(e)?!1:s===`audio`?e.hasAttribute(`controls`)?r!==-1:!1:s===`video`?r===-1?!1:r!==null?!0:this._platform.FIREFOX||e.hasAttribute(`controls`):e.tabIndex>=0}isFocusable(e,t){return _n$4(e)&&!this.isDisabled(e)&&(t?.ignoreVisibility||this.isVisible(e))}static ɵfac=function(t){return new(t||n)};static ɵprov=Oe$3({token:n,factory:n.ɵfac})}return n})();function ln$3(n){try{return n.frameElement}catch(i){return null}}function un$2(n){return!!(n.offsetWidth||n.offsetHeight||typeof n.getClientRects==`function`&&n.getClientRects().length)}function dn$3(n){let i=n.nodeName.toLowerCase();return i===`input`||i===`select`||i===`button`||i===`textarea`}function hn$4(n){return pn$3(n)&&n.type==`hidden`}function fn$4(n){return mn$3(n)&&n.hasAttribute(`href`)}function pn$3(n){return n.nodeName.toLowerCase()==`input`}function mn$3(n){return n.nodeName.toLowerCase()==`a`}function Ft$3(n){if(!n.hasAttribute(`tabindex`)||n.tabIndex===void 0)return!1;let i=n.getAttribute(`tabindex`);return!!(i&&!isNaN(parseInt(i,10)))}function Dt$1(n){if(!Ft$3(n))return null;let i=parseInt(n.getAttribute(`tabindex`)||``,10);return isNaN(i)?-1:i}function gn$4(n){let i=n.nodeName.toLowerCase(),e=i===`input`&&n.type;return e===`text`||e===`password`||i===`select`||i===`textarea`}function _n$4(n){return hn$4(n)?!1:dn$3(n)||fn$4(n)||n.hasAttribute(`contenteditable`)||Ft$3(n)}function bn$4(n){return n.ownerDocument&&n.ownerDocument.defaultView||window}var fe$2=class{_element;_checker;_ngZone;_document;_injector;_startAnchor=null;_endAnchor=null;_hasAttached=!1;startAnchorListener=()=>this.focusLastTabbableElement();endAnchorListener=()=>this.focusFirstTabbableElement();get enabled(){return this._enabled}set enabled(i){this._enabled=i,this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(i,this._startAnchor),this._toggleAnchorTabIndex(i,this._endAnchor))}_enabled=!0;constructor(i,e,t,s,r=!1,o){this._element=i,this._checker=e,this._ngZone=t,this._document=s,this._injector=o,r||this.attachAnchors()}destroy(){let i=this._startAnchor,e=this._endAnchor;i&&(i.removeEventListener(`focus`,this.startAnchorListener),i.remove()),e&&(e.removeEventListener(`focus`,this.endAnchorListener),e.remove()),this._startAnchor=this._endAnchor=null,this._hasAttached=!1}attachAnchors(){return this._hasAttached?!0:(this._ngZone.runOutsideAngular(()=>{this._startAnchor||(this._startAnchor=this._createAnchor(),this._startAnchor.addEventListener(`focus`,this.startAnchorListener)),this._endAnchor||(this._endAnchor=this._createAnchor(),this._endAnchor.addEventListener(`focus`,this.endAnchorListener))}),this._element.parentNode&&(this._element.parentNode.insertBefore(this._startAnchor,this._element),this._element.parentNode.insertBefore(this._endAnchor,this._element.nextSibling),this._hasAttached=!0),this._hasAttached)}focusInitialElementWhenReady(i){return new Promise(e=>{this._executeOnStable(()=>e(this.focusInitialElement(i)))})}focusFirstTabbableElementWhenReady(i){return new Promise(e=>{this._executeOnStable(()=>e(this.focusFirstTabbableElement(i)))})}focusLastTabbableElementWhenReady(i){return new Promise(e=>{this._executeOnStable(()=>e(this.focusLastTabbableElement(i)))})}_getRegionBoundary(i){let e=this._element.querySelectorAll(`[cdk-focus-region-${i}], [cdkFocusRegion${i}], [cdk-focus-${i}]`);return i==`start`?e.length?e[0]:this._getFirstTabbableElement(this._element):e.length?e[e.length-1]:this._getLastTabbableElement(this._element)}focusInitialElement(i){let e=this._element.querySelector(`[cdk-focus-initial], [cdkFocusInitial]`);if(e){if(!this._checker.isFocusable(e)){let t=this._getFirstTabbableElement(e);return t?.focus(i),!!t}return e.focus(i),!0}return this.focusFirstTabbableElement(i)}focusFirstTabbableElement(i){let e=this._getRegionBoundary(`start`);return e&&e.focus(i),!!e}focusLastTabbableElement(i){let e=this._getRegionBoundary(`end`);return e&&e.focus(i),!!e}hasAttached(){return this._hasAttached}_getFirstTabbableElement(i){if(this._checker.isFocusable(i)&&this._checker.isTabbable(i))return i;let e=i.children;for(let t=0;t<e.length;t++){let s=e[t].nodeType===this._document.ELEMENT_NODE?this._getFirstTabbableElement(e[t]):null;if(s)return s}return null}_getLastTabbableElement(i){if(this._checker.isFocusable(i)&&this._checker.isTabbable(i))return i;let e=i.children;for(let t=e.length-1;t>=0;t--){let s=e[t].nodeType===this._document.ELEMENT_NODE?this._getLastTabbableElement(e[t]):null;if(s)return s}return null}_createAnchor(){let i=this._document.createElement(`div`);return this._toggleAnchorTabIndex(this._enabled,i),i.classList.add(`cdk-visually-hidden`),i.classList.add(`cdk-focus-trap-anchor`),i.setAttribute(`aria-hidden`,`true`),i}_toggleAnchorTabIndex(i,e){i?e.setAttribute(`tabindex`,`0`):e.removeAttribute(`tabindex`)}toggleAnchors(i){this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(i,this._startAnchor),this._toggleAnchorTabIndex(i,this._endAnchor))}_executeOnStable(i){hh$1(i,{injector:this._injector})}};var vn$3=(()=>{class n{_checker=g$2(St$2);_ngZone=g$2(U$4);_document=g$2(Ne$3);_injector=g$2(ne$1);constructor(){g$2($$2).load(ue$3)}create(e,t=!1){return new fe$2(e,this._checker,this._ngZone,this._document,t,this._injector)}static ɵfac=function(t){return new(t||n)};static ɵprov=Oe$3({token:n,factory:n.ɵfac})}return n})();var Rt$3=new S$1(`liveAnnouncerElement`,{providedIn:`root`,factory:()=>null});var Nt$4=new S$1(`LIVE_ANNOUNCER_DEFAULT_OPTIONS`);var yn$4=0;var Tn$4=(()=>{class n{_ngZone=g$2(U$4);_defaultOptions=g$2(Nt$4,{optional:!0});_liveElement;_document=g$2(Ne$3);_sanitizer=g$2(hn$5);_previousTimeout;_currentPromise;_currentResolve;constructor(){let e=g$2(Rt$3,{optional:!0});this._liveElement=e||this._createLiveElement()}announce(e,...t){let s=this._defaultOptions,r,o;return t.length===1&&typeof t[0]==`number`?o=t[0]:[r,o]=t,this.clear(),clearTimeout(this._previousTimeout),r||(r=s&&s.politeness?s.politeness:`polite`),o==null&&s&&(o=s.duration),this._liveElement.setAttribute(`aria-live`,r),this._liveElement.id&&this._exposeAnnouncerToModals(this._liveElement.id),this._ngZone.runOutsideAngular(()=>(this._currentPromise||(this._currentPromise=new Promise(c=>this._currentResolve=c)),clearTimeout(this._previousTimeout),this._previousTimeout=setTimeout(()=>{!e||typeof e==`string`?this._liveElement.textContent=e:bt$3(this._liveElement,e,this._sanitizer),typeof o==`number`&&(this._previousTimeout=setTimeout(()=>this.clear(),o)),this._currentResolve?.(),this._currentPromise=this._currentResolve=void 0},100),this._currentPromise))}clear(){this._liveElement&&(this._liveElement.textContent=``)}ngOnDestroy(){clearTimeout(this._previousTimeout),this._liveElement?.remove(),this._liveElement=null,this._currentResolve?.(),this._currentPromise=this._currentResolve=void 0}_createLiveElement(){let e=`cdk-live-announcer-element`,t=this._document.getElementsByClassName(e),s=this._document.createElement(`div`);for(let r=0;r<t.length;r++)t[r].remove();return s.classList.add(e),s.classList.add(`cdk-visually-hidden`),s.setAttribute(`aria-atomic`,`true`),s.setAttribute(`aria-live`,`polite`),s.id=`cdk-live-announcer-${yn$4++}`,this._document.body.appendChild(s),s}_exposeAnnouncerToModals(e){let t=this._document.querySelectorAll(`body > .cdk-overlay-container [aria-modal="true"]`);for(let s=0;s<t.length;s++){let r=t[s],o=r.getAttribute(`aria-owns`);o?o.indexOf(e)===-1&&r.setAttribute(`aria-owns`,o+` `+e):r.setAttribute(`aria-owns`,e)}}static ɵfac=function(t){return new(t||n)};static ɵprov=Oe$3({token:n,factory:n.ɵfac})}return n})();var En$2=200;var pe$3=class{_letterKeyStream=new ee$3;_items=[];_selectedItemIndex=-1;_pressedLetters=[];_skipPredicateFn;_selectedItem=new ee$3;selectedItem=this._selectedItem;constructor(i,e){let t=typeof e?.debounceInterval==`number`?e.debounceInterval:En$2;e?.skipPredicate&&(this._skipPredicateFn=e.skipPredicate),this.setItems(i),this._setupKeyHandler(t)}destroy(){this._pressedLetters=[],this._letterKeyStream.complete(),this._selectedItem.complete()}setCurrentSelectedItemIndex(i){this._selectedItemIndex=i}setItems(i){this._items=i}handleKey(i){let e=i.keyCode;i.key&&i.key.length===1?this._letterKeyStream.next(i.key.toLocaleUpperCase()):(e>=65&&e<=90||e>=48&&e<=57)&&this._letterKeyStream.next(String.fromCharCode(e))}isTyping(){return this._pressedLetters.length>0}reset(){this._pressedLetters=[]}_setupKeyHandler(i){this._letterKeyStream.pipe(cd$1(e=>this._pressedLetters.push(e)),$y(i),Ir(()=>this._pressedLetters.length>0),Ye$2(()=>this._pressedLetters.join(``).toLocaleUpperCase())).subscribe(e=>{for(let t=1;t<this._items.length+1;t++){let s=(this._selectedItemIndex+t)%this._items.length,r=this._items[s];if(!this._skipPredicateFn?.(r)&&r.getLabel?.().toLocaleUpperCase().trim().indexOf(e)===0){this._selectedItem.next(r);break}}this._pressedLetters=[]})}};var k=class{_items;_activeItemIndex=xe$3(-1);_activeItem=xe$3(null);_wrap=!1;_typeaheadSubscription=V$3.EMPTY;_itemChangesSubscription;_vertical=!0;_horizontal=null;_allowedModifierKeys=[];_homeAndEnd=!1;_pageUpAndDown={enabled:!1,delta:10};_effectRef;_typeahead;_skipPredicateFn=i=>i.disabled;constructor(i,e){this._items=i,i instanceof Ji$2?this._itemChangesSubscription=i.changes.subscribe(t=>this._itemsChanged(t.toArray())):Qn$2(i)&&(this._effectRef=zr(()=>this._itemsChanged(i()),{injector:e}))}tabOut=new ee$3;change=new ee$3;skipPredicate(i){return this._skipPredicateFn=i,this}withWrap(i=!0){return this._wrap=i,this}withVerticalOrientation(i=!0){return this._vertical=i,this}withHorizontalOrientation(i){return this._horizontal=i,this}withAllowedModifierKeys(i){return this._allowedModifierKeys=i,this}withTypeAhead(i=200){this._typeaheadSubscription.unsubscribe();let e=this._getItemsArray();return this._typeahead=new pe$3(e,{debounceInterval:typeof i==`number`?i:void 0,skipPredicate:t=>this._skipPredicateFn(t)}),this._typeaheadSubscription=this._typeahead.selectedItem.subscribe(t=>{this.setActiveItem(t)}),this}cancelTypeahead(){return this._typeahead?.reset(),this}withHomeAndEnd(i=!0){return this._homeAndEnd=i,this}withPageUpDown(i=!0,e=10){return this._pageUpAndDown={enabled:i,delta:e},this}setActiveItem(i){let e=this._activeItem();this.updateActiveItem(i),this._activeItem()!==e&&this.change.next(this._activeItemIndex())}onKeydown(i){let e=i.keyCode,s=[`altKey`,`ctrlKey`,`metaKey`,`shiftKey`].every(r=>!i[r]||this._allowedModifierKeys.indexOf(r)>-1);switch(e){case 9:this.tabOut.next();return;case 40:if(this._vertical&&s){this.setNextItemActive();break}else return;case 38:if(this._vertical&&s){this.setPreviousItemActive();break}else return;case 39:if(this._horizontal&&s){this._horizontal===`rtl`?this.setPreviousItemActive():this.setNextItemActive();break}else return;case 37:if(this._horizontal&&s){this._horizontal===`rtl`?this.setNextItemActive():this.setPreviousItemActive();break}else return;case 36:if(this._homeAndEnd&&s){this.setFirstItemActive();break}else return;case 35:if(this._homeAndEnd&&s){this.setLastItemActive();break}else return;case 33:if(this._pageUpAndDown.enabled&&s){let r=this._activeItemIndex()-this._pageUpAndDown.delta;this._setActiveItemByIndex(r>0?r:0,1);break}else return;case 34:if(this._pageUpAndDown.enabled&&s){let r=this._activeItemIndex()+this._pageUpAndDown.delta,o=this._getItemsArray().length;this._setActiveItemByIndex(r<o?r:o-1,-1);break}else return;default:(s||_t$3(i,`shiftKey`))&&this._typeahead?.handleKey(i);return}this._typeahead?.reset(),i.preventDefault()}get activeItemIndex(){return this._activeItemIndex()}get activeItem(){return this._activeItem()}isTyping(){return!!this._typeahead&&this._typeahead.isTyping()}setFirstItemActive(){this._setActiveItemByIndex(0,1)}setLastItemActive(){this._setActiveItemByIndex(this._getItemsArray().length-1,-1)}setNextItemActive(){this._activeItemIndex()<0?this.setFirstItemActive():this._setActiveItemByDelta(1)}setPreviousItemActive(){this._activeItemIndex()<0&&this._wrap?this.setLastItemActive():this._setActiveItemByDelta(-1)}updateActiveItem(i){let e=this._getItemsArray(),t=typeof i==`number`?i:e.indexOf(i),s=e[t];this._activeItem.set(s??null),this._activeItemIndex.set(t),this._typeahead?.setCurrentSelectedItemIndex(t)}destroy(){this._typeaheadSubscription.unsubscribe(),this._itemChangesSubscription?.unsubscribe(),this._effectRef?.destroy(),this._typeahead?.destroy(),this.tabOut.complete(),this.change.complete()}_setActiveItemByDelta(i){this._wrap?this._setActiveInWrapMode(i):this._setActiveInDefaultMode(i)}_setActiveInWrapMode(i){let e=this._getItemsArray();for(let t=1;t<=e.length;t++){let s=(this._activeItemIndex()+i*t+e.length)%e.length,r=e[s];if(!this._skipPredicateFn(r)){this.setActiveItem(s);return}}}_setActiveInDefaultMode(i){this._setActiveItemByIndex(this._activeItemIndex()+i,i)}_setActiveItemByIndex(i,e){let t=this._getItemsArray();if(t[i]){for(;this._skipPredicateFn(t[i]);)if(i+=e,!t[i])return;this.setActiveItem(i)}}_getItemsArray(){return Qn$2(this._items)?this._items():this._items instanceof Ji$2?this._items.toArray():this._items}_itemsChanged(i){this._typeahead?.setItems(i);let e=this._activeItem();if(e){let t=i.indexOf(e);t>-1&&t!==this._activeItemIndex()&&(this._activeItemIndex.set(t),this._typeahead?.setCurrentSelectedItemIndex(t))}}};var ke$2=class extends k{setActiveItem(i){this.activeItem&&this.activeItem.setInactiveStyles(),super.setActiveItem(i),this.activeItem&&this.activeItem.setActiveStyles()}};var xe$2=class extends k{_origin=`program`;setFocusOrigin(i){return this._origin=i,this}setActiveItem(i){super.setActiveItem(i),this.activeItem&&this.activeItem.focus(this._origin)}};var kt$2=new Map;var Pe$2=class n{_appId=g$2(pc$1);static _infix=`a${Math.floor(Math.random()*1e5).toString()}`;getId(i,e=!1){this._appId!==`ng`&&(i+=this._appId);let t=kt$2.get(i);return t===void 0?t=0:t++,kt$2.set(i,t),`${i}${e?n._infix+`-`:``}${t}`}static ɵfac=function(e){return new(e||n)};static ɵprov=Oe$3({token:n,factory:n.ɵfac})};var Pt$1=` `;function An$2(n,i,e){let t=ge$3(n,i);e=e.trim(),!t.some(s=>s.trim()===e)&&(t.push(e),n.setAttribute(i,t.join(Pt$1)))}function In$1(n,i,e){let t=ge$3(n,i);e=e.trim();let s=t.filter(r=>r!==e);s.length?n.setAttribute(i,s.join(Pt$1)):n.removeAttribute(i)}function ge$3(n,i){return n.getAttribute(i)?.match(/\S+/g)??[]}var Ut$2=`cdk-describedby-message`;var me$2=`cdk-describedby-host`;var je$2=0;var Us$1=(()=>{class n{_platform=g$2(J$3);_document=g$2(Ne$3);_messageRegistry=new Map;_messagesContainer=null;_id=`${je$2++}`;constructor(){g$2($$2).load(ue$3),this._id=g$2(pc$1)+`-`+je$2++}describe(e,t,s){if(!this._canBeDescribed(e,t))return;let r=Ue$2(t,s);typeof t!=`string`?(xt$2(t,this._id),this._messageRegistry.set(r,{messageElement:t,referenceCount:0})):this._messageRegistry.has(r)||this._createMessageElement(t,s),this._isElementDescribedByMessage(e,r)||this._addMessageReference(e,r)}removeDescription(e,t,s){if(!t||!this._isElementNode(e))return;let r=Ue$2(t,s);if(this._isElementDescribedByMessage(e,r)&&this._removeMessageReference(e,r),typeof t==`string`){let o=this._messageRegistry.get(r);o&&o.referenceCount===0&&this._deleteMessageElement(r)}this._messagesContainer?.childNodes.length===0&&(this._messagesContainer.remove(),this._messagesContainer=null)}ngOnDestroy(){let e=this._document.querySelectorAll(`[${me$2}="${this._id}"]`);for(let t=0;t<e.length;t++)this._removeCdkDescribedByReferenceIds(e[t]),e[t].removeAttribute(me$2);this._messagesContainer?.remove(),this._messagesContainer=null,this._messageRegistry.clear()}_createMessageElement(e,t){let s=this._document.createElement(`div`);xt$2(s,this._id),s.textContent=e,t&&s.setAttribute(`role`,t),this._createMessagesContainer(),this._messagesContainer.appendChild(s),this._messageRegistry.set(Ue$2(e,t),{messageElement:s,referenceCount:0})}_deleteMessageElement(e){this._messageRegistry.get(e)?.messageElement?.remove(),this._messageRegistry.delete(e)}_createMessagesContainer(){if(this._messagesContainer)return;let e=`cdk-describedby-message-container`,t=this._document.querySelectorAll(`.${e}[platform="server"]`);for(let r=0;r<t.length;r++)t[r].remove();let s=this._document.createElement(`div`);s.style.visibility=`hidden`,s.classList.add(e),s.classList.add(`cdk-visually-hidden`),this._platform.isBrowser||s.setAttribute(`platform`,`server`),this._document.body.appendChild(s),this._messagesContainer=s}_removeCdkDescribedByReferenceIds(e){let t=ge$3(e,`aria-describedby`).filter(s=>s.indexOf(Ut$2)!=0);e.setAttribute(`aria-describedby`,t.join(` `))}_addMessageReference(e,t){let s=this._messageRegistry.get(t);An$2(e,`aria-describedby`,s.messageElement.id),e.setAttribute(me$2,this._id),s.referenceCount++}_removeMessageReference(e,t){let s=this._messageRegistry.get(t);s.referenceCount--,In$1(e,`aria-describedby`,s.messageElement.id),e.removeAttribute(me$2)}_isElementDescribedByMessage(e,t){let s=ge$3(e,`aria-describedby`),r=this._messageRegistry.get(t),o=r&&r.messageElement.id;return!!o&&s.indexOf(o)!=-1}_canBeDescribed(e,t){if(!this._isElementNode(e))return!1;if(t&&typeof t==`object`)return!0;let s=t==null?``:`${t}`.trim(),r=e.getAttribute(`aria-label`);return s?!r||r.trim()!==s:!1}_isElementNode(e){return e.nodeType===this._document.ELEMENT_NODE}static ɵfac=function(t){return new(t||n)};static ɵprov=Oe$3({token:n,factory:n.ɵfac})}return n})();function Ue$2(n,i){return typeof n==`string`?`${i||``}/${n}`:n}function xt$2(n,i){n.id||(n.id=`${Ut$2}-${i}-${je$2++}`)}function Zs$1(){return typeof __karma__<`u`&&!!__karma__||typeof jasmine<`u`&&!!jasmine||typeof jest<`u`&&!!jest||typeof Mocha<`u`&&!!Mocha}function ye$2(s,e){return typeof s==`function`?s(...S$2(e)):s}function hi$2(s,e){let t=!1;return!Qn$2(s)&&typeof s==`function`&&(s=s(e())),Qn$2(s)?t=s():typeof s==`boolean`&&(t=s),t}function We$2(s,e){let t;return!Qn$2(s)&&typeof s==`function`&&(s=s(e())),Qn$2(s)?t=s():typeof s==`string`&&(t=s),t}function ci$3(s,e){return We$2(s,e)??``}function di$3(s,e){let t;return!Qn$2(s)&&typeof s==`function`&&(s=s(e())),Qn$2(s)?t=s():t=s,t}var je$1=[`.lab900-cell-value`];var be$2=(()=>{class s{constructor(){this.elm=g$2(it$2),this.tableService=g$2(Y$3),this.ngZone=g$2(U$4),this.columnConfig=Zj.required(),this.data=Yj.required(),this.disabled=qe$3(()=>this.columnConfig()?.cellEditorOptions?.disabled?.(this.data())??!1),this.renderOptions=qe$3(()=>this.columnConfig().cellRenderOptions),this.handleValueChanged=Zj(void 0),this.cellInnerElm=Qj(`.lab900-cell-value`,{read:it$2}),this.cellValue=qe$3(()=>this.getCellValue()),this.hasCellValue=qe$3(()=>{let t=this.cellValue();return typeof t==`string`?t.trim().length>0:t!=null}),this.cellValueOrPlaceholder=qe$3(()=>this.showPlaceholder()?this.columnConfig().cellEditorOptions?.placeholder:this.cellValue()),this.textOverflowing=xe$3(!1),this.tooltip=qe$3(()=>{let t=this.columnConfig(),i=this.data(),o=this.cellValue(),n=this.textOverflowing();return t.cellTooltip?.text&&(!t.cellTooltip?.onlyOnOverflow||n)?ye$2(t.cellTooltip.text,i):n?String(o):``}),this.tooltipPosition=qe$3(()=>this.columnConfig().cellTooltip?.tooltipOptions?.tooltipPosition??`below`),this.showPlaceholder=qe$3(()=>{let t=this.hasCellValue(),i=this.columnConfig(),o=this.tableService.disableEditing()||this.disabled();return!t&&i.cellEditorOptions?.placeholder&&!o&&!i.cellEditorOptions?.disablePlaceholderOutsideEditor}),zr(()=>{this.showPlaceholder()?this.elm.nativeElement.querySelector(`.lab900-cell-value`)?.classList.add(`value-is-placeholder`):this.elm.nativeElement.querySelector(`.lab900-cell-value`)?.classList.remove(`value-is-placeholder`)})}ngAfterViewInit(){this.observeCellContentOverflow()}ngOnDestroy(){this.tableService.unobserveResize(this.elm.nativeElement)}getCellValue(){let t=this.columnConfig(),i=this.data();return this.cellFormatter(t,i)}cellFormatter(t,i){if(t?.cellFormatter)return t.cellFormatter(i,t);if(t.key.includes(`.`)){let o=t.key.split(`.`),n=i;for(let r of o)n=n?.[r];return n}return i?.[t.key]}observeCellContentOverflow(){this.tableService.observeResize(this.elm.nativeElement,t=>{let i=this.elm.nativeElement.querySelector(`.lab900-cell-value`)?.scrollWidth??0,o=t.target.offsetWidth;this.textOverflowing.set(i>o)})}static{this.ɵfac=function(i){return new(i||s)}}static{this.ɵdir=En$3({type:s,viewQuery:function(i,o){i&1&&Yg(o.cellInnerElm,je$1,5,it$2),i&2&&Zw()},inputs:{columnConfig:[1,`columnConfig`],data:[1,`data`],handleValueChanged:[1,`handleValueChanged`]},outputs:{data:`dataChange`}})}}return s})();var W$2=class{_attachedHost=null;attach(e){return this._attachedHost=e,e.attach(this)}detach(){let e=this._attachedHost;e!=null&&(this._attachedHost=null,e.detach())}get isAttached(){return this._attachedHost!=null}setAttachedHost(e){this._attachedHost=e}};var j$3=class extends W$2{component;viewContainerRef;injector;projectableNodes;bindings;directives;constructor(e,t,i,o,n,r){super(),this.component=e,this.viewContainerRef=t,this.injector=i,this.projectableNodes=o,this.bindings=n||null,this.directives=r||null}};var Y$2=class extends W$2{templateRef;viewContainerRef;context;injector;constructor(e,t,i,o){super(),this.templateRef=e,this.viewContainerRef=t,this.context=i,this.injector=o}get origin(){return this.templateRef.elementRef}attach(e,t=this.context){return this.context=t,super.attach(e)}detach(){return this.context=void 0,super.detach()}};var xt$1=class extends W$2{element;constructor(e){super(),this.element=e instanceof it$2?e.nativeElement:e}};var ht$3=class{_attachedPortal=null;_disposeFn=null;_isDisposed=!1;hasAttached(){return!!this._attachedPortal}attach(e){if(e instanceof j$3)return this._attachedPortal=e,this.attachComponentPortal(e);if(e instanceof Y$2)return this._attachedPortal=e,this.attachTemplatePortal(e);if(this.attachDomPortal&&e instanceof xt$1)return this._attachedPortal=e,this.attachDomPortal(e)}attachDomPortal=null;detach(){this._attachedPortal&&(this._attachedPortal.setAttachedHost(null),this._attachedPortal=null),this._invokeDisposeFn()}dispose(){this.hasAttached()&&this.detach(),this._invokeDisposeFn(),this._isDisposed=!0}setDisposeFn(e){this._disposeFn=e}_invokeDisposeFn(){this._disposeFn&&(this._disposeFn(),this._disposeFn=null)}};var ct$4=class extends ht$3{outletElement;_appRef;_defaultInjector;constructor(e,t,i){super(),this.outletElement=e,this._appRef=t,this._defaultInjector=i}attachComponentPortal(e){let t;if(e.viewContainerRef){let i=e.injector||e.viewContainerRef.injector,o=i.get(St$3,null,{optional:!0})||void 0;t=e.viewContainerRef.createComponent(e.component,{index:e.viewContainerRef.length,injector:i,ngModuleRef:o,projectableNodes:e.projectableNodes||void 0,bindings:e.bindings||void 0,directives:e.directives||void 0}),this.setDisposeFn(()=>t.destroy())}else{let i=this._appRef,o=e.injector||this._defaultInjector||ne$1.NULL,n=o.get(me$3,i.injector);t=nV(e.component,{elementInjector:o,environmentInjector:n,projectableNodes:e.projectableNodes||void 0,bindings:e.bindings||void 0,directives:e.directives||void 0}),i.attachView(t.hostView),this.setDisposeFn(()=>{i.viewCount>0&&i.detachView(t.hostView),t.destroy()})}return this.outletElement.appendChild(this._getComponentRootNode(t)),this._attachedPortal=e,t}attachTemplatePortal(e){let t=e.viewContainerRef,i=t.createEmbeddedView(e.templateRef,e.context,{injector:e.injector});return i.rootNodes.forEach(o=>this.outletElement.appendChild(o)),i.detectChanges(),this.setDisposeFn(()=>{let o=t.indexOf(i);o!==-1&&t.remove(o)}),this._attachedPortal=e,i}attachDomPortal=e=>{let t=e.element;t.parentNode;let i=this.outletElement.ownerDocument.createComment(`dom-portal`);t.parentNode.insertBefore(i,t),this.outletElement.appendChild(t),this._attachedPortal=e,super.setDisposeFn(()=>{i.parentNode&&i.parentNode.replaceChild(t,i)})};dispose(){super.dispose(),this.outletElement.remove()}_getComponentRootNode(e){return e.hostView.rootNodes[0]}};var Oi$2=(()=>{class s extends Y$2{constructor(){let t=g$2(rr$1),i=g$2(Dn$2);super(t,i)}static ɵfac=function(i){return new(i||s)};static ɵdir=En$3({type:s,selectors:[[``,`cdkPortal`,``]],exportAs:[`cdkPortal`],features:[Dg]})}return s})();var Si$1=(()=>{class s extends ht$3{_moduleRef=g$2(St$3,{optional:!0});_document=g$2(Ne$3);_viewContainerRef=g$2(Dn$2);_isInitialized=!1;_attachedRef=null;get portal(){return this._attachedPortal}set portal(t){this.hasAttached()&&!t&&!this._isInitialized||(this.hasAttached()&&super.detach(),t&&super.attach(t),this._attachedPortal=t||null)}attached=new Ke$2;get attachedRef(){return this._attachedRef}ngOnInit(){this._isInitialized=!0}ngOnDestroy(){super.dispose(),this._attachedRef=this._attachedPortal=null}attachComponentPortal(t){t.setAttachedHost(this);let i=t.viewContainerRef!=null?t.viewContainerRef:this._viewContainerRef,o=i.createComponent(t.component,{index:i.length,injector:t.injector||i.injector,projectableNodes:t.projectableNodes||void 0,ngModuleRef:this._moduleRef||void 0,bindings:t.bindings||void 0,directives:t.directives||void 0});return i!==this._viewContainerRef&&this._getRootNode().appendChild(o.hostView.rootNodes[0]),super.setDisposeFn(()=>o.destroy()),this._attachedPortal=t,this._attachedRef=o,this.attached.emit(o),o}attachTemplatePortal(t){t.setAttachedHost(this);let i=this._viewContainerRef.createEmbeddedView(t.templateRef,t.context,{injector:t.injector});return super.setDisposeFn(()=>this._viewContainerRef.clear()),this._attachedPortal=t,this._attachedRef=i,this.attached.emit(i),i}attachDomPortal=t=>{let i=t.element;i.parentNode;let o=this._document.createComment(`dom-portal`);t.setAttachedHost(this),i.parentNode.insertBefore(o,i),this._getRootNode().appendChild(i),this._attachedPortal=t,super.setDisposeFn(()=>{o.parentNode&&o.parentNode.replaceChild(i,o)})};_getRootNode(){let t=this._viewContainerRef.element.nativeElement;return t.nodeType===t.ELEMENT_NODE?t:t.parentNode}static ɵfac=(()=>{let t;return function(o){return(t||(t=Cp$1(s)))(o||s)}})();static ɵdir=En$3({type:s,selectors:[[``,`cdkPortalOutlet`,``]],inputs:{portal:[0,`cdkPortalOutlet`,`portal`]},outputs:{attached:`attached`},exportAs:[`cdkPortalOutlet`],features:[Dg]})}return s})();var we$2=(()=>{class s{static ɵfac=function(i){return new(i||s)};static ɵmod=gg({type:s});static ɵinj=xa$1({})}return s})();var Ce$2=Y$4();function xe$1(s){return new dt$3(s.get(st$4),s.get(Ne$3))}var dt$3=class{_viewportRuler;_previousHTMLStyles={top:``,left:``};_previousScrollPosition;_isEnabled=!1;_document;constructor(e,t){this._viewportRuler=e,this._document=t}attach(){}enable(){if(this._canBeEnabled()){let e=this._document.documentElement;this._previousScrollPosition=this._viewportRuler.getViewportScrollPosition(),this._previousHTMLStyles.left=e.style.left||``,this._previousHTMLStyles.top=e.style.top||``,e.style.left=L(-this._previousScrollPosition.left),e.style.top=L(-this._previousScrollPosition.top),e.classList.add(`cdk-global-scrollblock`),this._isEnabled=!0}}disable(){if(this._isEnabled){let e=this._document.documentElement,t=this._document.body,i=e.style,o=t.style,n=i.scrollBehavior||``,r=o.scrollBehavior||``;this._isEnabled=!1,i.left=this._previousHTMLStyles.left,i.top=this._previousHTMLStyles.top,e.classList.remove(`cdk-global-scrollblock`),Ce$2&&(i.scrollBehavior=o.scrollBehavior=`auto`),window.scroll(this._previousScrollPosition.left,this._previousScrollPosition.top),Ce$2&&(i.scrollBehavior=n,o.scrollBehavior=r)}}_canBeEnabled(){if(this._document.documentElement.classList.contains(`cdk-global-scrollblock`)||this._isEnabled)return!1;let t=this._document.documentElement,i=this._viewportRuler.getViewportSize();return t.scrollHeight>i.height||t.scrollWidth>i.width}};function Me$1(s,e){return new pt$3(s.get(G$3),s.get(U$4),s.get(st$4),e)}var pt$3=class{_scrollDispatcher;_ngZone;_viewportRuler;_config;_scrollSubscription=null;_overlayRef;_initialScrollPosition;constructor(e,t,i,o){this._scrollDispatcher=e,this._ngZone=t,this._viewportRuler=i,this._config=o}attach(e){this._overlayRef,this._overlayRef=e}enable(){if(this._scrollSubscription)return;let e=this._scrollDispatcher.scrolled(0).pipe(Ir(t=>!t||!this._overlayRef.overlayElement.contains(t.getElementRef().nativeElement)));this._config&&this._config.threshold&&this._config.threshold>1?(this._initialScrollPosition=this._viewportRuler.getViewportScrollPosition().top,this._scrollSubscription=e.subscribe(()=>{let t=this._viewportRuler.getViewportScrollPosition().top;Math.abs(t-this._initialScrollPosition)>this._config.threshold?this._detach():this._overlayRef.updatePosition()})):this._scrollSubscription=e.subscribe(this._detach)}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}_detach=()=>{this.disable(),this._overlayRef.hasAttached()&&this._ngZone.run(()=>this._overlayRef.detach())}};var Z$1=class{enable(){}disable(){}attach(){}};function Mt$3(s,e){return e.some(t=>{let i=s.bottom<t.top,o=s.top>t.bottom,n=s.right<t.left,r=s.left>t.right;return i||o||n||r})}function Oe$1(s,e){return e.some(t=>{let i=s.top<t.top,o=s.bottom>t.bottom,n=s.left<t.left,r=s.right>t.right;return i||o||n||r})}function U$3(s,e){return new ft$3(s.get(G$3),s.get(st$4),s.get(U$4),e)}var ft$3=class{_scrollDispatcher;_viewportRuler;_ngZone;_config;_scrollSubscription=null;_overlayRef;constructor(e,t,i,o){this._scrollDispatcher=e,this._viewportRuler=t,this._ngZone=i,this._config=o}attach(e){this._overlayRef,this._overlayRef=e}enable(){if(!this._scrollSubscription){let e=this._config?this._config.scrollThrottle:0;this._scrollSubscription=this._scrollDispatcher.scrolled(e).subscribe(()=>{if(this._overlayRef.updatePosition(),this._config&&this._config.autoClose){let t=this._overlayRef.overlayElement.getBoundingClientRect(),{width:i,height:o}=this._viewportRuler.getViewportSize();Mt$3(t,[{width:i,height:o,bottom:o,right:i,top:0,left:0}])&&(this.disable(),this._ngZone.run(()=>this._overlayRef.detach()))}})}}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}};var Te$1=(()=>{class s{_injector=g$2(ne$1);noop=()=>new Z$1;close=t=>Me$1(this._injector,t);block=()=>xe$1(this._injector);reposition=t=>U$3(this._injector,t);static ɵfac=function(i){return new(i||s)};static ɵprov=Oe$3({token:s,factory:s.ɵfac})}return s})();var G$2=class{positionStrategy;scrollStrategy=new Z$1;panelClass=``;hasBackdrop=!1;backdropClass=`cdk-overlay-dark-backdrop`;disableAnimations;width;height;minWidth;minHeight;maxWidth;maxHeight;direction;disposeOnNavigation=!1;usePopover;eventPredicate;constructor(e){if(e){let t=Object.keys(e);for(let i of t)e[i]!==void 0&&(this[i]=e[i])}}};var ut$3=class{connectionPair;scrollableViewProperties;constructor(e,t){this.connectionPair=e,this.scrollableViewProperties=t}};var Ae=(()=>{class s{_attachedOverlays=[];_document=g$2(Ne$3);_isAttached=!1;ngOnDestroy(){this.detach()}add(t){this.remove(t),this._attachedOverlays.push(t)}remove(t){let i=this._attachedOverlays.indexOf(t);i>-1&&this._attachedOverlays.splice(i,1),this._attachedOverlays.length===0&&this.detach()}canReceiveEvent(t,i,o){return o.observers.length<1?!1:t.eventPredicate?t.eventPredicate(i):!0}static ɵfac=function(i){return new(i||s)};static ɵprov=Oe$3({token:s,factory:s.ɵfac})}return s})();var Ie=(()=>{class s extends Ae{_ngZone=g$2(U$4);_renderer=g$2(to$2).createRenderer(null,null);_cleanupKeydown;add(t){super.add(t),this._isAttached||(this._ngZone.runOutsideAngular(()=>{this._cleanupKeydown=this._renderer.listen(`body`,`keydown`,this._keydownListener)}),this._isAttached=!0)}detach(){this._isAttached&&(this._cleanupKeydown?.(),this._isAttached=!1)}_keydownListener=t=>{let i=this._attachedOverlays;for(let o=i.length-1;o>-1;o--){let n=i[o];if(this.canReceiveEvent(n,t,n._keydownEvents)){this._ngZone.run(()=>n._keydownEvents.next(t));break}}};static ɵfac=function(i){return new(i||s)};static ɵprov=Oe$3({token:s,factory:s.ɵfac})}return s})();var Ne$1=(()=>{class s extends Ae{_platform=g$2(J$3);_ngZone=g$2(U$4);_renderer=g$2(to$2).createRenderer(null,null);_cursorOriginalValue;_cursorStyleIsSet=!1;_pointerDownEventTarget=null;_cleanups;add(t){if(super.add(t),!this._isAttached){let i=this._document.body,o={capture:!0},n=this._renderer;this._cleanups=this._ngZone.runOutsideAngular(()=>[n.listen(i,`pointerdown`,this._pointerDownListener,o),n.listen(i,`click`,this._clickListener,o),n.listen(i,`auxclick`,this._clickListener,o),n.listen(i,`contextmenu`,this._clickListener,o)]),this._platform.IOS&&!this._cursorStyleIsSet&&(this._cursorOriginalValue=i.style.cursor,i.style.cursor=`pointer`,this._cursorStyleIsSet=!0),this._isAttached=!0}}detach(){this._isAttached&&(this._cleanups?.forEach(t=>t()),this._cleanups=void 0,this._platform.IOS&&this._cursorStyleIsSet&&(this._document.body.style.cursor=this._cursorOriginalValue,this._cursorStyleIsSet=!1),this._isAttached=!1)}_pointerDownListener=t=>{this._pointerDownEventTarget=M$1(t)};_clickListener=t=>{let i=M$1(t),o=t.type===`click`&&this._pointerDownEventTarget?this._pointerDownEventTarget:i;this._pointerDownEventTarget=null;let n=this._attachedOverlays.slice();for(let r=n.length-1;r>-1;r--){let l=n[r],h=l._outsidePointerEvents;if(!(!l.hasAttached()||!this.canReceiveEvent(l,t,h))){if(Se$1(l.overlayElement,i)||Se$1(l.overlayElement,o))break;this._ngZone?this._ngZone.run(()=>h.next(t)):h.next(t)}}};static ɵfac=function(i){return new(i||s)};static ɵprov=Oe$3({token:s,factory:s.ɵfac})}return s})();function Se$1(s,e){let t=typeof ShadowRoot<`u`&&ShadowRoot,i=e;for(;i;){if(i===s)return!0;i=t&&i instanceof ShadowRoot?i.host:i.parentNode}return!1}var Ve$1=(()=>{class s{static ɵfac=function(i){return new(i||s)};static ɵcmp=NC({type:s,selectors:[[`ng-component`]],hostAttrs:[`cdk-overlay-style-loader`,``],decls:0,vars:0,template:function(i,o){},styles:[`.cdk-overlay-container, .cdk-global-overlay-wrapper {
  pointer-events: none;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
}

.cdk-overlay-container {
  position: fixed;
}
@layer cdk-overlay {
  .cdk-overlay-container {
    z-index: 1000;
  }
}
.cdk-overlay-container:empty {
  display: none;
}

.cdk-global-overlay-wrapper {
  display: flex;
  position: absolute;
}
@layer cdk-overlay {
  .cdk-global-overlay-wrapper {
    z-index: 1000;
  }
}

.cdk-overlay-pane {
  position: absolute;
  pointer-events: auto;
  box-sizing: border-box;
  display: flex;
  max-width: 100%;
  max-height: 100%;
}
@layer cdk-overlay {
  .cdk-overlay-pane {
    z-index: 1000;
  }
}

.cdk-overlay-backdrop {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  pointer-events: auto;
  -webkit-tap-highlight-color: transparent;
  opacity: 0;
  touch-action: manipulation;
}
@layer cdk-overlay {
  .cdk-overlay-backdrop {
    z-index: 1000;
    transition: opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
  }
}
@media (prefers-reduced-motion) {
  .cdk-overlay-backdrop {
    transition-duration: 1ms;
  }
}

.cdk-overlay-backdrop-showing {
  opacity: 1;
}
@media (forced-colors: active) {
  .cdk-overlay-backdrop-showing {
    opacity: 0.6;
  }
}

@layer cdk-overlay {
  .cdk-overlay-dark-backdrop {
    background: rgba(0, 0, 0, 0.32);
  }
}

.cdk-overlay-transparent-backdrop {
  transition: visibility 1ms linear, opacity 1ms linear;
  visibility: hidden;
  opacity: 1;
}
.cdk-overlay-transparent-backdrop.cdk-overlay-backdrop-showing, .cdk-high-contrast-active .cdk-overlay-transparent-backdrop {
  opacity: 0;
  visibility: visible;
}

.cdk-overlay-backdrop-noop-animation {
  transition: none;
}

.cdk-overlay-connected-position-bounding-box {
  position: absolute;
  display: flex;
  flex-direction: column;
  min-width: 1px;
  min-height: 1px;
}
@layer cdk-overlay {
  .cdk-overlay-connected-position-bounding-box {
    z-index: 1000;
  }
}

.cdk-global-scrollblock {
  position: fixed;
  width: 100%;
  overflow-y: scroll;
}

.cdk-overlay-popover {
  background: none;
  border: none;
  padding: 0;
  outline: 0;
  overflow: visible;
  position: fixed;
  pointer-events: none;
  white-space: normal;
  color: inherit;
  text-decoration: none;
  width: 100%;
  height: 100%;
  inset: auto;
  top: 0;
  left: 0;
}
.cdk-overlay-popover::backdrop {
  display: none;
}
.cdk-overlay-popover .cdk-overlay-backdrop {
  position: fixed;
  z-index: auto;
}
`],encapsulation:2})}return s})();var Le$1=(()=>{class s{_platform=g$2(J$3);_containerElement;_document=g$2(Ne$3);_styleLoader=g$2($$2);ngOnDestroy(){this._containerElement?.remove()}getContainerElement(){return this._loadStyles(),this._containerElement||this._createContainer(),this._containerElement}_createContainer(){let t=`cdk-overlay-container`;if(this._platform.isBrowser||Zs$1()){let o=this._document.querySelectorAll(`.${t}[platform="server"], .${t}[platform="test"]`);for(let n=0;n<o.length;n++)o[n].remove()}let i=this._document.createElement(`div`);i.classList.add(t),Zs$1()?i.setAttribute(`platform`,`test`):this._platform.isBrowser||i.setAttribute(`platform`,`server`),this._document.body.appendChild(i),this._containerElement=i}_loadStyles(){this._styleLoader.load(Ve$1)}static ɵfac=function(i){return new(i||s)};static ɵprov=Oe$3({token:s,factory:s.ɵfac})}return s})();var Tt$2=class{_renderer;_ngZone;element;_cleanupClick;_cleanupTransitionEnd;_fallbackTimeout;constructor(e,t,i,o){this._renderer=t,this._ngZone=i,this.element=e.createElement(`div`),this.element.classList.add(`cdk-overlay-backdrop`),this._cleanupClick=t.listen(this.element,`click`,o)}detach(){this._ngZone.runOutsideAngular(()=>{let e=this.element;clearTimeout(this._fallbackTimeout),this._cleanupTransitionEnd?.(),this._cleanupTransitionEnd=this._renderer.listen(e,`transitionend`,this.dispose),this._fallbackTimeout=setTimeout(this.dispose,500),e.style.pointerEvents=`none`,e.classList.remove(`cdk-overlay-backdrop-showing`)})}dispose=()=>{clearTimeout(this._fallbackTimeout),this._cleanupClick?.(),this._cleanupTransitionEnd?.(),this._cleanupClick=this._cleanupTransitionEnd=this._fallbackTimeout=void 0,this.element.remove()}};function It$2(s){return s&&s.nodeType===1}var _t$2=class{_portalOutlet;_host;_pane;_config;_ngZone;_keyboardDispatcher;_document;_location;_outsideClickDispatcher;_animationsDisabled;_injector;_renderer;_backdropClick=new ee$3;_attachments=new ee$3;_detachments=new ee$3;_positionStrategy;_scrollStrategy;_locationChanges=V$3.EMPTY;_backdropRef=null;_detachContentMutationObserver;_detachContentAfterRenderRef;_disposed=!1;_previousHostParent;_keydownEvents=new ee$3;_outsidePointerEvents=new ee$3;_afterNextRenderRef;constructor(e,t,i,o,n,r,l,h,p,c=!1,d,_){this._portalOutlet=e,this._host=t,this._pane=i,this._config=o,this._ngZone=n,this._keyboardDispatcher=r,this._document=l,this._location=h,this._outsideClickDispatcher=p,this._animationsDisabled=c,this._injector=d,this._renderer=_,o.scrollStrategy&&(this._scrollStrategy=o.scrollStrategy,this._scrollStrategy.attach(this)),this._positionStrategy=o.positionStrategy}get overlayElement(){return this._pane}get backdropElement(){return this._backdropRef?.element||null}get hostElement(){return this._host}get eventPredicate(){return this._config?.eventPredicate||null}attach(e){if(this._disposed)return null;this._attachHost();let t=this._portalOutlet.attach(e);return this._positionStrategy?.attach(this),this._updateStackingOrder(),this._updateElementSize(),this._updateElementDirection(),this._scrollStrategy&&this._scrollStrategy.enable(),this._afterNextRenderRef?.destroy(),this._afterNextRenderRef=hh$1(()=>{this.hasAttached()&&this.updatePosition()},{injector:this._injector}),this._togglePointerEvents(!0),this._config.hasBackdrop&&this._attachBackdrop(),this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!0),this._attachments.next(),this._completeDetachContent(),this._keyboardDispatcher.add(this),this._config.disposeOnNavigation&&(this._locationChanges=this._location.subscribe(()=>this.dispose())),this._outsideClickDispatcher.add(this),typeof t?.onDestroy==`function`&&t.onDestroy(()=>{this.hasAttached()&&this._ngZone.runOutsideAngular(()=>Promise.resolve().then(()=>this.detach()))}),t}detach(){if(!this.hasAttached())return;this.detachBackdrop(),this._togglePointerEvents(!1),this._positionStrategy&&this._positionStrategy.detach&&this._positionStrategy.detach(),this._scrollStrategy&&this._scrollStrategy.disable();let e=this._portalOutlet.detach();return this._detachments.next(),this._completeDetachContent(),this._keyboardDispatcher.remove(this),this._detachContentWhenEmpty(),this._locationChanges.unsubscribe(),this._outsideClickDispatcher.remove(this),e}dispose(){if(this._disposed)return;let e=this.hasAttached();this._positionStrategy&&this._positionStrategy.dispose(),this._disposeScrollStrategy(),this._backdropRef?.dispose(),this._locationChanges.unsubscribe(),this._keyboardDispatcher.remove(this),this._portalOutlet.dispose(),this._attachments.complete(),this._backdropClick.complete(),this._keydownEvents.complete(),this._outsidePointerEvents.complete(),this._outsideClickDispatcher.remove(this),this._host?.remove(),this._afterNextRenderRef?.destroy(),this._previousHostParent=this._pane=this._host=this._backdropRef=null,e&&this._detachments.next(),this._detachments.complete(),this._completeDetachContent(),this._disposed=!0}hasAttached(){return this._portalOutlet.hasAttached()}backdropClick(){return this._backdropClick}attachments(){return this._attachments}detachments(){return this._detachments}keydownEvents(){return this._keydownEvents}outsidePointerEvents(){return this._outsidePointerEvents}getConfig(){return this._config}updatePosition(){this._positionStrategy&&this._positionStrategy.apply()}updatePositionStrategy(e){e!==this._positionStrategy&&(this._positionStrategy&&this._positionStrategy.dispose(),this._positionStrategy=e,this.hasAttached()&&(e.attach(this),this.updatePosition()))}updateSize(e){this._config=q$2(q$2({},this._config),e),this._updateElementSize()}setDirection(e){this._config=Z$3(q$2({},this._config),{direction:e}),this._updateElementDirection()}addPanelClass(e){this._pane&&this._toggleClasses(this._pane,e,!0)}removePanelClass(e){this._pane&&this._toggleClasses(this._pane,e,!1)}getDirection(){let e=this._config.direction;return e?typeof e==`string`?e:e.value:`ltr`}updateScrollStrategy(e){e!==this._scrollStrategy&&(this._disposeScrollStrategy(),this._scrollStrategy=e,this.hasAttached()&&(e.attach(this),e.enable()))}_updateElementDirection(){this._host.setAttribute(`dir`,this.getDirection())}_updateElementSize(){if(!this._pane)return;let e=this._pane.style;e.width=L(this._config.width),e.height=L(this._config.height),e.minWidth=L(this._config.minWidth),e.minHeight=L(this._config.minHeight),e.maxWidth=L(this._config.maxWidth),e.maxHeight=L(this._config.maxHeight)}_togglePointerEvents(e){this._pane.style.pointerEvents=e?``:`none`}_attachHost(){if(!this._host.parentElement){let e=this._config.usePopover?this._positionStrategy?.getPopoverInsertionPoint?.():null;It$2(e)?e.after(this._host):e?.type===`parent`?e.element.appendChild(this._host):this._previousHostParent?.appendChild(this._host)}if(this._config.usePopover)try{this._host.showPopover()}catch(e){}}_attachBackdrop(){let e=`cdk-overlay-backdrop-showing`;this._backdropRef?.dispose(),this._backdropRef=new Tt$2(this._document,this._renderer,this._ngZone,t=>{this._backdropClick.next(t)}),this._animationsDisabled&&this._backdropRef.element.classList.add(`cdk-overlay-backdrop-noop-animation`),this._config.backdropClass&&this._toggleClasses(this._backdropRef.element,this._config.backdropClass,!0),this._config.usePopover?this._host.prepend(this._backdropRef.element):this._host.parentElement.insertBefore(this._backdropRef.element,this._host),!this._animationsDisabled&&typeof requestAnimationFrame<`u`?this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>this._backdropRef?.element.classList.add(e))}):this._backdropRef.element.classList.add(e)}_updateStackingOrder(){!this._config.usePopover&&this._host.nextSibling&&this._host.parentNode.appendChild(this._host)}detachBackdrop(){this._animationsDisabled?(this._backdropRef?.dispose(),this._backdropRef=null):this._backdropRef?.detach()}_toggleClasses(e,t,i){let o=S$2(t||[]).filter(n=>!!n);o.length&&(i?e.classList.add(...o):e.classList.remove(...o))}_detachContentWhenEmpty(){let e=!1;try{this._detachContentAfterRenderRef=hh$1(()=>{e=!0,this._detachContent()},{injector:this._injector})}catch(t){if(e)throw t;this._detachContent()}globalThis.MutationObserver&&this._pane&&(this._detachContentMutationObserver||=new globalThis.MutationObserver(()=>{this._detachContent()}),this._detachContentMutationObserver.observe(this._pane,{childList:!0}))}_detachContent(){(!this._pane||!this._host||this._pane.children.length===0)&&(this._pane&&this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!1),this._host&&this._host.parentElement&&(this._previousHostParent=this._host.parentElement,this._host.remove()),this._completeDetachContent())}_completeDetachContent(){this._detachContentAfterRenderRef?.destroy(),this._detachContentAfterRenderRef=void 0,this._detachContentMutationObserver?.disconnect()}_disposeScrollStrategy(){let e=this._scrollStrategy;e?.disable(),e?.detach?.()}};var Pe$1=`cdk-overlay-connected-position-bounding-box`;var Ze$1=/([A-Za-z%]+)$/;function $$1(s,e){return new gt$3(e,s.get(st$4),s.get(Ne$3),s.get(J$3),s.get(Le$1))}var gt$3=class{_viewportRuler;_document;_platform;_overlayContainer;_overlayRef;_isInitialRender=!1;_lastBoundingBoxSize={width:0,height:0};_isPushed=!1;_canPush=!0;_growAfterOpen=!1;_hasFlexibleDimensions=!0;_positionLocked=!1;_originRect;_overlayRect;_viewportRect;_containerRect;_viewportMargin=0;_scrollables=[];_preferredPositions=[];_origin;_pane;_isDisposed=!1;_boundingBox=null;_lastPosition=null;_lastScrollVisibility=null;_positionChanges=new ee$3;_resizeSubscription=V$3.EMPTY;_offsetX=0;_offsetY=0;_transformOriginSelector;_appliedPanelClasses=[];_previousPushAmount=null;_popoverLocation=`global`;positionChanges=this._positionChanges;get positions(){return this._preferredPositions}constructor(e,t,i,o,n){this._viewportRuler=t,this._document=i,this._platform=o,this._overlayContainer=n,this.setOrigin(e)}attach(e){this._overlayRef&&this._overlayRef,this._validatePositions(),e.hostElement.classList.add(Pe$1),this._overlayRef=e,this._boundingBox=e.hostElement,this._pane=e.overlayElement,this._isDisposed=!1,this._isInitialRender=!0,this._lastPosition=null,this._resizeSubscription.unsubscribe(),this._resizeSubscription=this._viewportRuler.change().subscribe(()=>{this._isInitialRender=!0,this.apply()})}apply(){if(this._isDisposed||!this._platform.isBrowser)return;if(!this._isInitialRender&&this._positionLocked&&this._lastPosition){this.reapplyLastPosition();return}this._clearPanelClasses(),this._resetOverlayElementStyles(),this._resetBoundingBoxStyles(),this._viewportRect=this._getNarrowedViewportRect(),this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._containerRect=this._getContainerRect();let e=this._originRect,t=this._overlayRect,i=this._viewportRect,o=this._containerRect,n=[],r;for(let l of this._preferredPositions){let h=this._getOriginPoint(e,o,l),p=this._getOverlayPoint(h,t,l),c=this._getOverlayFit(p,t,i,l);if(c.isCompletelyWithinViewport){this._isPushed=!1,this._applyPosition(l,h);return}if(this._canFitWithFlexibleDimensions(c,p,i)){n.push({position:l,origin:h,overlayRect:t,boundingBoxRect:this._calculateBoundingBoxRect(h,l)});continue}(!r||r.overlayFit.visibleArea<c.visibleArea)&&(r={overlayFit:c,overlayPoint:p,originPoint:h,position:l,overlayRect:t})}if(n.length){let l=null,h=-1;for(let p of n){let c=p.boundingBoxRect.width*p.boundingBoxRect.height*(p.position.weight||1);c>h&&(h=c,l=p)}this._isPushed=!1,this._applyPosition(l.position,l.origin);return}if(this._canPush){this._isPushed=!0,this._applyPosition(r.position,r.originPoint);return}this._applyPosition(r.position,r.originPoint)}detach(){this._clearPanelClasses(),this._lastPosition=null,this._previousPushAmount=null,this._resizeSubscription.unsubscribe()}dispose(){this._isDisposed||(this._boundingBox&&I$2(this._boundingBox.style,{top:``,left:``,right:``,bottom:``,height:``,width:``,alignItems:``,justifyContent:``}),this._pane&&this._resetOverlayElementStyles(),this._overlayRef&&this._overlayRef.hostElement.classList.remove(Pe$1),this.detach(),this._positionChanges.complete(),this._overlayRef=this._boundingBox=null,this._isDisposed=!0)}reapplyLastPosition(){if(this._isDisposed||!this._platform.isBrowser)return;let e=this._lastPosition;e?(this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._viewportRect=this._getNarrowedViewportRect(),this._containerRect=this._getContainerRect(),this._applyPosition(e,this._getOriginPoint(this._originRect,this._containerRect,e))):this.apply()}withScrollableContainers(e){return this._scrollables=e,this}withPositions(e){return this._preferredPositions=e,e.indexOf(this._lastPosition)===-1&&(this._lastPosition=null),this._validatePositions(),this}withViewportMargin(e){return this._viewportMargin=e,this}withFlexibleDimensions(e=!0){return this._hasFlexibleDimensions=e,this}withGrowAfterOpen(e=!0){return this._growAfterOpen=e,this}withPush(e=!0){return this._canPush=e,this}withLockedPosition(e=!0){return this._positionLocked=e,this}setOrigin(e){return this._origin=e,this}withDefaultOffsetX(e){return this._offsetX=e,this}withDefaultOffsetY(e){return this._offsetY=e,this}withTransformOriginOn(e){return this._transformOriginSelector=e,this}withPopoverLocation(e){return this._popoverLocation=e,this}getPopoverInsertionPoint(){return this._popoverLocation===`global`?null:this._popoverLocation!==`inline`?this._popoverLocation:this._origin instanceof it$2?this._origin.nativeElement:It$2(this._origin)?this._origin:null}_getOriginPoint(e,t,i){let o;if(i.originX==`center`)o=e.left+e.width/2;else{let r=this._isRtl()?e.right:e.left,l=this._isRtl()?e.left:e.right;o=i.originX==`start`?r:l}t.left<0&&(o-=t.left);let n;return i.originY==`center`?n=e.top+e.height/2:n=i.originY==`top`?e.top:e.bottom,t.top<0&&(n-=t.top),{x:o,y:n}}_getOverlayPoint(e,t,i){let o;i.overlayX==`center`?o=-t.width/2:i.overlayX===`start`?o=this._isRtl()?-t.width:0:o=this._isRtl()?0:-t.width;let n;return i.overlayY==`center`?n=-t.height/2:n=i.overlayY==`top`?0:-t.height,{x:e.x+o,y:e.y+n}}_getOverlayFit(e,t,i,o){let n=Ee(t),{x:r,y:l}=e,h=this._getOffset(o,`x`),p=this._getOffset(o,`y`);h&&(r+=h),p&&(l+=p);let c=0-r,d=r+n.width-i.width,_=0-l,m=l+n.height-i.height,g=this._subtractOverflows(n.width,c,d),b=this._subtractOverflows(n.height,_,m),Lt=g*b;return{visibleArea:Lt,isCompletelyWithinViewport:n.width*n.height===Lt,fitsInViewportVertically:b===n.height,fitsInViewportHorizontally:g==n.width}}_canFitWithFlexibleDimensions(e,t,i){if(this._hasFlexibleDimensions){let o=i.bottom-t.y,n=i.right-t.x,r=Re$2(this._overlayRef.getConfig().minHeight),l=Re$2(this._overlayRef.getConfig().minWidth),h=e.fitsInViewportVertically||r!=null&&r<=o,p=e.fitsInViewportHorizontally||l!=null&&l<=n;return h&&p}return!1}_pushOverlayOnScreen(e,t,i){if(this._previousPushAmount&&this._positionLocked)return{x:e.x+this._previousPushAmount.x,y:e.y+this._previousPushAmount.y};let o=Ee(t),n=this._viewportRect,r=Math.max(e.x+o.width-n.width,0),l=Math.max(e.y+o.height-n.height,0),h=Math.max(n.top-i.top-e.y,0),p=Math.max(n.left-i.left-e.x,0),c=0,d=0;return o.width<=n.width?c=p||-r:c=e.x<this._getViewportMarginStart()?n.left-i.left-e.x:0,o.height<=n.height?d=h||-l:d=e.y<this._getViewportMarginTop()?n.top-i.top-e.y:0,this._previousPushAmount={x:c,y:d},{x:e.x+c,y:e.y+d}}_applyPosition(e,t){if(this._setTransformOrigin(e),this._setOverlayElementStyles(t,e),this._setBoundingBoxStyles(t,e),e.panelClass&&this._addPanelClasses(e.panelClass),this._positionChanges.observers.length){let i=this._getScrollVisibility();if(e!==this._lastPosition||!this._lastScrollVisibility||!Ge$2(this._lastScrollVisibility,i)){let o=new ut$3(e,i);this._positionChanges.next(o)}this._lastScrollVisibility=i}this._lastPosition=e,this._isInitialRender=!1}_setTransformOrigin(e){if(!this._transformOriginSelector)return;let t=this._boundingBox.querySelectorAll(this._transformOriginSelector),i,o=e.overlayY;e.overlayX===`center`?i=`center`:this._isRtl()?i=e.overlayX===`start`?`right`:`left`:i=e.overlayX===`start`?`left`:`right`;for(let n=0;n<t.length;n++)t[n].style.transformOrigin=`${i} ${o}`}_calculateBoundingBoxRect(e,t){let i=this._viewportRect,o=this._isRtl(),n,r,l;if(t.overlayY===`top`)r=e.y,n=i.height-r+this._getViewportMarginBottom();else if(t.overlayY===`bottom`)l=i.height-e.y+this._getViewportMarginTop()+this._getViewportMarginBottom(),n=i.height-l+this._getViewportMarginTop();else{let m=Math.min(i.bottom-e.y+i.top,e.y),g=this._lastBoundingBoxSize.height;n=m*2,r=e.y-m,n>g&&!this._isInitialRender&&!this._growAfterOpen&&(r=e.y-g/2)}let h=t.overlayX===`start`&&!o||t.overlayX===`end`&&o,p=t.overlayX===`end`&&!o||t.overlayX===`start`&&o,c,d,_;if(p)_=i.width-e.x+this._getViewportMarginStart()+this._getViewportMarginEnd(),c=e.x-this._getViewportMarginStart();else if(h)d=e.x,c=i.right-e.x-this._getViewportMarginEnd();else{let m=Math.min(i.right-e.x+i.left,e.x),g=this._lastBoundingBoxSize.width;c=m*2,d=e.x-m,c>g&&!this._isInitialRender&&!this._growAfterOpen&&(d=e.x-g/2)}return{top:r,left:d,bottom:l,right:_,width:c,height:n}}_setBoundingBoxStyles(e,t){let i=this._calculateBoundingBoxRect(e,t);!this._isInitialRender&&!this._growAfterOpen&&(i.height=Math.min(i.height,this._lastBoundingBoxSize.height),i.width=Math.min(i.width,this._lastBoundingBoxSize.width));let o={};if(this._hasExactPosition())o.top=o.left=`0`,o.bottom=o.right=`auto`,o.maxHeight=o.maxWidth=``,o.width=o.height=`100%`;else{let n=this._overlayRef.getConfig().maxHeight,r=this._overlayRef.getConfig().maxWidth;o.width=L(i.width),o.height=L(i.height),o.top=L(i.top)||`auto`,o.bottom=L(i.bottom)||`auto`,o.left=L(i.left)||`auto`,o.right=L(i.right)||`auto`,t.overlayX===`center`?o.alignItems=`center`:o.alignItems=t.overlayX===`end`?`flex-end`:`flex-start`,t.overlayY===`center`?o.justifyContent=`center`:o.justifyContent=t.overlayY===`bottom`?`flex-end`:`flex-start`,n&&(o.maxHeight=L(n)),r&&(o.maxWidth=L(r))}this._lastBoundingBoxSize=i,I$2(this._boundingBox.style,o)}_resetBoundingBoxStyles(){I$2(this._boundingBox.style,{top:`0`,left:`0`,right:`0`,bottom:`0`,height:``,width:``,alignItems:``,justifyContent:``})}_resetOverlayElementStyles(){I$2(this._pane.style,{top:``,left:``,bottom:``,right:``,position:``,transform:``})}_setOverlayElementStyles(e,t){let i={},o=this._hasExactPosition(),n=this._hasFlexibleDimensions,r=this._overlayRef.getConfig();if(o){let c=this._viewportRuler.getViewportScrollPosition();I$2(i,this._getExactOverlayY(t,e,c)),I$2(i,this._getExactOverlayX(t,e,c))}else i.position=`static`;let l=``,h=this._getOffset(t,`x`),p=this._getOffset(t,`y`);h&&(l+=`translateX(${h}px) `),p&&(l+=`translateY(${p}px)`),i.transform=l.trim(),r.maxHeight&&(o?i.maxHeight=L(r.maxHeight):n&&(i.maxHeight=``)),r.maxWidth&&(o?i.maxWidth=L(r.maxWidth):n&&(i.maxWidth=``)),I$2(this._pane.style,i)}_getExactOverlayY(e,t,i){let o={top:``,bottom:``},n=this._getOverlayPoint(t,this._overlayRect,e);if(this._isPushed&&(n=this._pushOverlayOnScreen(n,this._overlayRect,i)),e.overlayY===`bottom`)o.bottom=`${this._document.documentElement.clientHeight-(n.y+this._overlayRect.height)}px`;else o.top=L(n.y);return o}_getExactOverlayX(e,t,i){let o={left:``,right:``},n=this._getOverlayPoint(t,this._overlayRect,e);this._isPushed&&(n=this._pushOverlayOnScreen(n,this._overlayRect,i));let r;if(this._isRtl()?r=e.overlayX===`end`?`left`:`right`:r=e.overlayX===`end`?`right`:`left`,r===`right`)o.right=`${this._document.documentElement.clientWidth-(n.x+this._overlayRect.width)}px`;else o.left=L(n.x);return o}_getScrollVisibility(){let e=this._getOriginRect(),t=this._pane.getBoundingClientRect(),i=this._scrollables.map(o=>o.getElementRef().nativeElement.getBoundingClientRect());return{isOriginClipped:Oe$1(e,i),isOriginOutsideView:Mt$3(e,i),isOverlayClipped:Oe$1(t,i),isOverlayOutsideView:Mt$3(t,i)}}_subtractOverflows(e,...t){return t.reduce((i,o)=>i-Math.max(o,0),e)}_getNarrowedViewportRect(){let e=this._document.documentElement.clientWidth,t=this._document.documentElement.clientHeight,i=this._viewportRuler.getViewportScrollPosition();return{top:i.top+this._getViewportMarginTop(),left:i.left+this._getViewportMarginStart(),right:i.left+e-this._getViewportMarginEnd(),bottom:i.top+t-this._getViewportMarginBottom(),width:e-this._getViewportMarginStart()-this._getViewportMarginEnd(),height:t-this._getViewportMarginTop()-this._getViewportMarginBottom()}}_isRtl(){return this._overlayRef.getDirection()===`rtl`}_hasExactPosition(){return!this._hasFlexibleDimensions||this._isPushed}_getOffset(e,t){return t===`x`?e.offsetX==null?this._offsetX:e.offsetX:e.offsetY==null?this._offsetY:e.offsetY}_validatePositions(){}_addPanelClasses(e){this._pane&&S$2(e).forEach(t=>{t!==``&&this._appliedPanelClasses.indexOf(t)===-1&&(this._appliedPanelClasses.push(t),this._pane.classList.add(t))})}_clearPanelClasses(){this._pane&&(this._appliedPanelClasses.forEach(e=>{this._pane.classList.remove(e)}),this._appliedPanelClasses=[])}_getViewportMarginStart(){return typeof this._viewportMargin==`number`?this._viewportMargin:this._viewportMargin?.start??0}_getViewportMarginEnd(){return typeof this._viewportMargin==`number`?this._viewportMargin:this._viewportMargin?.end??0}_getViewportMarginTop(){return typeof this._viewportMargin==`number`?this._viewportMargin:this._viewportMargin?.top??0}_getViewportMarginBottom(){return typeof this._viewportMargin==`number`?this._viewportMargin:this._viewportMargin?.bottom??0}_getOriginRect(){let e=this._origin;if(e instanceof it$2)return e.nativeElement.getBoundingClientRect();if(e instanceof Element)return e.getBoundingClientRect();let t=e.width||0,i=e.height||0;return{top:e.y,bottom:e.y+i,left:e.x,right:e.x+t,height:i,width:t}}_getContainerRect(){let e=this._overlayRef.getConfig().usePopover&&this._popoverLocation!==`global`,t=this._overlayContainer.getContainerElement();e&&(t.style.display=`block`);let i=t.getBoundingClientRect();return e&&(t.style.display=``),i}};function I$2(s,e){for(let t in e)e.hasOwnProperty(t)&&(s[t]=e[t]);return s}function Re$2(s){if(typeof s!=`number`&&s!=null){let[e,t]=s.split(Ze$1);return!t||t===`px`?parseFloat(e):null}return s||null}function Ee(s){return{top:Math.floor(s.top),right:Math.floor(s.right),bottom:Math.floor(s.bottom),left:Math.floor(s.left),width:Math.floor(s.width),height:Math.floor(s.height)}}function Ge$2(s,e){return s===e?!0:s.isOriginClipped===e.isOriginClipped&&s.isOriginOutsideView===e.isOriginOutsideView&&s.isOverlayClipped===e.isOverlayClipped&&s.isOverlayOutsideView===e.isOverlayOutsideView}var ke$1=`cdk-global-overlay-wrapper`;function Be(s){return new mt$4}var mt$4=class{_overlayRef;_cssPosition=`static`;_topOffset=``;_bottomOffset=``;_alignItems=``;_xPosition=``;_xOffset=``;_width=``;_height=``;_isDisposed=!1;attach(e){let t=e.getConfig();this._overlayRef=e,this._width&&!t.width&&e.updateSize({width:this._width}),this._height&&!t.height&&e.updateSize({height:this._height}),e.hostElement.classList.add(ke$1),this._isDisposed=!1}top(e=``){return this._bottomOffset=``,this._topOffset=e,this._alignItems=`flex-start`,this}left(e=``){return this._xOffset=e,this._xPosition=`left`,this}bottom(e=``){return this._topOffset=``,this._bottomOffset=e,this._alignItems=`flex-end`,this}right(e=``){return this._xOffset=e,this._xPosition=`right`,this}start(e=``){return this._xOffset=e,this._xPosition=`start`,this}end(e=``){return this._xOffset=e,this._xPosition=`end`,this}width(e=``){return this._overlayRef?this._overlayRef.updateSize({width:e}):this._width=e,this}height(e=``){return this._overlayRef?this._overlayRef.updateSize({height:e}):this._height=e,this}centerHorizontally(e=``){return this.left(e),this._xPosition=`center`,this}centerVertically(e=``){return this.top(e),this._alignItems=`center`,this}apply(){if(!this._overlayRef||!this._overlayRef.hasAttached())return;let e=this._overlayRef.overlayElement.style,t=this._overlayRef.hostElement.style,{width:o,height:n,maxWidth:r,maxHeight:l}=this._overlayRef.getConfig(),h=(o===`100%`||o===`100vw`)&&(!r||r===`100%`||r===`100vw`),p=(n===`100%`||n===`100vh`)&&(!l||l===`100%`||l===`100vh`),c=this._xPosition,d=this._xOffset,_=this._overlayRef.getConfig().direction===`rtl`,m=``,g=``,b=``;h?b=`flex-start`:c===`center`?(b=`center`,_?g=d:m=d):_?c===`left`||c===`end`?(b=`flex-end`,m=d):(c===`right`||c===`start`)&&(b=`flex-start`,g=d):c===`left`||c===`start`?(b=`flex-start`,m=d):(c===`right`||c===`end`)&&(b=`flex-end`,g=d),e.position=this._cssPosition,e.marginLeft=h?`0`:m,e.marginTop=p?`0`:this._topOffset,e.marginBottom=this._bottomOffset,e.marginRight=h?`0`:g,t.justifyContent=b,t.alignItems=p?`flex-start`:this._alignItems}dispose(){if(this._isDisposed||!this._overlayRef)return;let e=this._overlayRef.overlayElement.style,t=this._overlayRef.hostElement,i=t.style;t.classList.remove(ke$1),i.justifyContent=i.alignItems=e.marginTop=e.marginBottom=e.marginLeft=e.marginRight=e.position=``,this._overlayRef=null,this._isDisposed=!0}};var Fe$2=(()=>{class s{_injector=g$2(ne$1);global(){return Be()}flexibleConnectedTo(t){return $$1(this._injector,t)}static ɵfac=function(i){return new(i||s)};static ɵprov=Oe$3({token:s,factory:s.ɵfac})}return s})();var Nt$3=new S$1(`OVERLAY_DEFAULT_CONFIG`);function K(s,e){s.get($$2).load(Ve$1);let t=s.get(Le$1),i=s.get(Ne$3),o=s.get(Pe$2),n=s.get(fr),r=s.get(b$2),l=s.get(gn$5,null,{optional:!0})||s.get(to$2).createRenderer(null,null),h=new G$2(e),p=s.get(Nt$3,null,{optional:!0})?.usePopover??!0;h.direction=h.direction||r.value,!i.body||!(`showPopover`in i.body)?h.usePopover=!1:h.usePopover=e?.usePopover??p;let c=i.createElement(`div`),d=i.createElement(`div`);c.id=o.getId(`cdk-overlay-`),c.classList.add(`cdk-overlay-pane`),d.appendChild(c),h.usePopover&&(d.setAttribute(`popover`,`manual`),d.classList.add(`cdk-overlay-popover`));let _=h.usePopover?h.positionStrategy?.getPopoverInsertionPoint?.():null;return It$2(_)?_.after(d):_?.type===`parent`?_.element.appendChild(d):t.getContainerElement().appendChild(d),new _t$2(new ct$4(c,n,s),d,c,h,s.get(U$4),s.get(Ie),i,s.get(Gm$1),s.get(Ne$1),e?.disableAnimations??s.get(Bv,null,{optional:!0})===`NoopAnimations`,s.get(me$3),l)}var Ye$1=(()=>{class s{scrollStrategies=g$2(Te$1);_positionBuilder=g$2(Fe$2);_injector=g$2(ne$1);create(t){return K(this._injector,t)}position(){return this._positionBuilder}static ɵfac=function(i){return new(i||s)};static ɵprov=Oe$3({token:s,factory:s.ɵfac})}return s})();var Ue$1=[{originX:`start`,originY:`bottom`,overlayX:`start`,overlayY:`top`},{originX:`start`,originY:`top`,overlayX:`start`,overlayY:`bottom`},{originX:`end`,originY:`top`,overlayX:`end`,overlayY:`bottom`},{originX:`end`,originY:`bottom`,overlayX:`end`,overlayY:`top`}];var $e$2=new S$1(`cdk-connected-overlay-scroll-strategy`,{providedIn:`root`,factory:()=>{let s=g$2(ne$1);return()=>U$3(s)}});var At$2=(()=>{class s{elementRef=g$2(it$2);static ɵfac=function(i){return new(i||s)};static ɵdir=En$3({type:s,selectors:[[``,`cdk-overlay-origin`,``],[``,`overlay-origin`,``],[``,`cdkOverlayOrigin`,``]],exportAs:[`cdkOverlayOrigin`]})}return s})();var Xe$2=new S$1(`cdk-connected-overlay-default-config`);var Ke$1=(()=>{class s{_dir=g$2(b$2,{optional:!0});_injector=g$2(ne$1);_overlayRef;_templatePortal;_backdropSubscription=V$3.EMPTY;_attachSubscription=V$3.EMPTY;_detachSubscription=V$3.EMPTY;_positionSubscription=V$3.EMPTY;_offsetX;_offsetY;_position;_scrollStrategyFactory=g$2($e$2);_ngZone=g$2(U$4);origin;positions;positionStrategy;get offsetX(){return this._offsetX}set offsetX(t){this._offsetX=t,this._position&&this._updatePositionStrategy(this._position)}get offsetY(){return this._offsetY}set offsetY(t){this._offsetY=t,this._position&&this._updatePositionStrategy(this._position)}width;height;minWidth;minHeight;backdropClass;panelClass;viewportMargin=0;scrollStrategy;open=!1;disableClose=!1;transformOriginSelector;hasBackdrop=!1;lockPosition=!1;flexibleDimensions=!1;growAfterOpen=!1;push=!1;disposeOnNavigation=!1;usePopover;matchWidth=!1;set _config(t){typeof t!=`string`&&this._assignConfig(t)}backdropClick=new Ke$2;positionChange=new Ke$2;attach=new Ke$2;detach=new Ke$2;overlayKeydown=new Ke$2;overlayOutsideClick=new Ke$2;constructor(){let t=g$2(rr$1),i=g$2(Dn$2),o=g$2(Xe$2,{optional:!0}),n=g$2(Nt$3,{optional:!0});this.usePopover=n?.usePopover===!1?null:`global`,this._templatePortal=new Y$2(t,i),this.scrollStrategy=this._scrollStrategyFactory(),o&&this._assignConfig(o)}get overlayRef(){return this._overlayRef}get dir(){return this._dir?this._dir.value:`ltr`}ngOnDestroy(){this._attachSubscription.unsubscribe(),this._detachSubscription.unsubscribe(),this._backdropSubscription.unsubscribe(),this._positionSubscription.unsubscribe(),this._overlayRef?.dispose()}ngOnChanges(t){this._position&&(this._updatePositionStrategy(this._position),this._overlayRef?.updateSize({width:this._getWidth(),minWidth:this.minWidth,height:this.height,minHeight:this.minHeight}),t.origin&&this.open&&this._position.apply()),t.open&&(this.open?this.attachOverlay():this.detachOverlay())}_createOverlay(){(!this.positions||!this.positions.length)&&(this.positions=Ue$1);let t=this._overlayRef=K(this._injector,this._buildConfig());this._attachSubscription=t.attachments().subscribe(()=>this.attach.emit()),this._detachSubscription=t.detachments().subscribe(()=>this.detach.emit()),t.keydownEvents().subscribe(i=>{this.overlayKeydown.next(i),i.keyCode===27&&!this.disableClose&&!_t$3(i)&&(i.preventDefault(),this.detachOverlay())}),this._overlayRef.outsidePointerEvents().subscribe(i=>{let o=this._getOriginElement(),n=M$1(i);(!o||o!==n&&!o.contains(n))&&this.overlayOutsideClick.next(i)})}_buildConfig(){let t=this._position=this.positionStrategy||this._createPositionStrategy(),i=new G$2({direction:this._dir||`ltr`,positionStrategy:t,scrollStrategy:this.scrollStrategy,hasBackdrop:this.hasBackdrop,disposeOnNavigation:this.disposeOnNavigation,usePopover:!!this.usePopover});return(this.height||this.height===0)&&(i.height=this.height),(this.minWidth||this.minWidth===0)&&(i.minWidth=this.minWidth),(this.minHeight||this.minHeight===0)&&(i.minHeight=this.minHeight),this.backdropClass&&(i.backdropClass=this.backdropClass),this.panelClass&&(i.panelClass=this.panelClass),i}_updatePositionStrategy(t){let i=this.positions.map(o=>({originX:o.originX,originY:o.originY,overlayX:o.overlayX,overlayY:o.overlayY,offsetX:o.offsetX||this.offsetX,offsetY:o.offsetY||this.offsetY,panelClass:o.panelClass||void 0}));return t.setOrigin(this._getOrigin()).withPositions(i).withFlexibleDimensions(this.flexibleDimensions).withPush(this.push).withGrowAfterOpen(this.growAfterOpen).withViewportMargin(this.viewportMargin).withLockedPosition(this.lockPosition).withTransformOriginOn(this.transformOriginSelector).withPopoverLocation(this.usePopover===null?`global`:this.usePopover)}_createPositionStrategy(){let t=$$1(this._injector,this._getOrigin());return this._updatePositionStrategy(t),t}_getOrigin(){return this.origin instanceof At$2?this.origin.elementRef:this.origin}_getOriginElement(){return this.origin instanceof At$2?this.origin.elementRef.nativeElement:this.origin instanceof it$2?this.origin.nativeElement:typeof Element<`u`&&this.origin instanceof Element?this.origin:null}_getWidth(){return this.width?this.width:this.matchWidth?this._getOriginElement()?.getBoundingClientRect?.().width:void 0}attachOverlay(){this._overlayRef||this._createOverlay();let t=this._overlayRef;t.getConfig().hasBackdrop=this.hasBackdrop,t.updateSize({width:this._getWidth()}),t.hasAttached()||t.attach(this._templatePortal),this.hasBackdrop?this._backdropSubscription=t.backdropClick().subscribe(i=>this.backdropClick.emit(i)):this._backdropSubscription.unsubscribe(),this._positionSubscription.unsubscribe(),this.positionChange.observers.length>0&&(this._positionSubscription=this._position.positionChanges.pipe(Jy(()=>this.positionChange.observers.length>0)).subscribe(i=>{this._ngZone.run(()=>this.positionChange.emit(i)),this.positionChange.observers.length===0&&this._positionSubscription.unsubscribe()})),this.open=!0}detachOverlay(){this._overlayRef?.detach(),this._backdropSubscription.unsubscribe(),this._positionSubscription.unsubscribe(),this.open=!1}_assignConfig(t){this.origin=t.origin??this.origin,this.positions=t.positions??this.positions,this.positionStrategy=t.positionStrategy??this.positionStrategy,this.offsetX=t.offsetX??this.offsetX,this.offsetY=t.offsetY??this.offsetY,this.width=t.width??this.width,this.height=t.height??this.height,this.minWidth=t.minWidth??this.minWidth,this.minHeight=t.minHeight??this.minHeight,this.backdropClass=t.backdropClass??this.backdropClass,this.panelClass=t.panelClass??this.panelClass,this.viewportMargin=t.viewportMargin??this.viewportMargin,this.scrollStrategy=t.scrollStrategy??this.scrollStrategy,this.disableClose=t.disableClose??this.disableClose,this.transformOriginSelector=t.transformOriginSelector??this.transformOriginSelector,this.hasBackdrop=t.hasBackdrop??this.hasBackdrop,this.lockPosition=t.lockPosition??this.lockPosition,this.flexibleDimensions=t.flexibleDimensions??this.flexibleDimensions,this.growAfterOpen=t.growAfterOpen??this.growAfterOpen,this.push=t.push??this.push,this.disposeOnNavigation=t.disposeOnNavigation??this.disposeOnNavigation,this.usePopover=t.usePopover??this.usePopover,this.matchWidth=t.matchWidth??this.matchWidth}static ɵfac=function(i){return new(i||s)};static ɵdir=En$3({type:s,selectors:[[``,`cdk-connected-overlay`,``],[``,`connected-overlay`,``],[``,`cdkConnectedOverlay`,``]],inputs:{origin:[0,`cdkConnectedOverlayOrigin`,`origin`],positions:[0,`cdkConnectedOverlayPositions`,`positions`],positionStrategy:[0,`cdkConnectedOverlayPositionStrategy`,`positionStrategy`],offsetX:[0,`cdkConnectedOverlayOffsetX`,`offsetX`],offsetY:[0,`cdkConnectedOverlayOffsetY`,`offsetY`],width:[0,`cdkConnectedOverlayWidth`,`width`],height:[0,`cdkConnectedOverlayHeight`,`height`],minWidth:[0,`cdkConnectedOverlayMinWidth`,`minWidth`],minHeight:[0,`cdkConnectedOverlayMinHeight`,`minHeight`],backdropClass:[0,`cdkConnectedOverlayBackdropClass`,`backdropClass`],panelClass:[0,`cdkConnectedOverlayPanelClass`,`panelClass`],viewportMargin:[0,`cdkConnectedOverlayViewportMargin`,`viewportMargin`],scrollStrategy:[0,`cdkConnectedOverlayScrollStrategy`,`scrollStrategy`],open:[0,`cdkConnectedOverlayOpen`,`open`],disableClose:[0,`cdkConnectedOverlayDisableClose`,`disableClose`],transformOriginSelector:[0,`cdkConnectedOverlayTransformOriginOn`,`transformOriginSelector`],hasBackdrop:[2,`cdkConnectedOverlayHasBackdrop`,`hasBackdrop`,mo$2],lockPosition:[2,`cdkConnectedOverlayLockPosition`,`lockPosition`,mo$2],flexibleDimensions:[2,`cdkConnectedOverlayFlexibleDimensions`,`flexibleDimensions`,mo$2],growAfterOpen:[2,`cdkConnectedOverlayGrowAfterOpen`,`growAfterOpen`,mo$2],push:[2,`cdkConnectedOverlayPush`,`push`,mo$2],disposeOnNavigation:[2,`cdkConnectedOverlayDisposeOnNavigation`,`disposeOnNavigation`,mo$2],usePopover:[0,`cdkConnectedOverlayUsePopover`,`usePopover`],matchWidth:[2,`cdkConnectedOverlayMatchWidth`,`matchWidth`,mo$2],_config:[0,`cdkConnectedOverlay`,`_config`]},outputs:{backdropClick:`backdropClick`,positionChange:`positionChange`,attach:`attach`,detach:`detach`,overlayKeydown:`overlayKeydown`,overlayOutsideClick:`overlayOutsideClick`},exportAs:[`cdkConnectedOverlay`],features:[sr$1]})}return s})();var qe$2=(()=>{class s{static ɵfac=function(i){return new(i||s)};static ɵmod=gg({type:s});static ɵinj=xa$1({providers:[Ye$1],imports:[U$5,we$2,lt$4,lt$4]})}return s})();var Qe$1=[`tooltip`];var Je$1=20;var ti$2=new S$1(`mat-tooltip-scroll-strategy`,{providedIn:`root`,factory:()=>{let s=g$2(ne$1);return()=>U$3(s,{scrollThrottle:Je$1})}});var ei$2=new S$1(`mat-tooltip-default-options`,{providedIn:`root`,factory:()=>({showDelay:0,hideDelay:0,touchendHideDelay:1500})});var He$1=`tooltip-panel`;var ii$2={passive:!0};var oi$2=8;var si$2=8;var ni$2=24;var ri$3=200;var Vt$3=(()=>{class s{_elementRef=g$2(it$2);_ngZone=g$2(U$4);_platform=g$2(J$3);_ariaDescriber=g$2(Us$1);_focusMonitor=g$2(Ot$1);_dir=g$2(b$2);_injector=g$2(ne$1);_viewContainerRef=g$2(Dn$2);_mediaMatcher=g$2(de$4);_document=g$2(Ne$3);_renderer=g$2(gn$5);_animationsDisabled=ai$3();_defaultOptions=g$2(ei$2,{optional:!0});_overlayRef=null;_tooltipInstance=null;_overlayPanelClass;_portal;_position=`below`;_positionAtOrigin=!1;_disabled=!1;_tooltipClass;_viewInitialized=!1;_pointerExitEventsInitialized=!1;_tooltipComponent=ze$2;_viewportMargin=8;_currentPosition;_cssClassPrefix=`mat-mdc`;_ariaDescriptionPending=!1;_dirSubscribed=!1;get position(){return this._position}set position(t){t!==this._position&&(this._position=t,this._overlayRef&&(this._updatePosition(this._overlayRef),this._tooltipInstance?.show(0),this._overlayRef.updatePosition()))}get positionAtOrigin(){return this._positionAtOrigin}set positionAtOrigin(t){this._positionAtOrigin=C$3(t),this._detach(),this._overlayRef=null}get disabled(){return this._disabled}set disabled(t){let i=C$3(t);this._disabled!==i&&(this._disabled=i,i?this.hide(0):this._setupPointerEnterEventsIfNeeded(),this._syncAriaDescription(this.message))}get showDelay(){return this._showDelay}set showDelay(t){this._showDelay=w$1(t)}_showDelay;get hideDelay(){return this._hideDelay}set hideDelay(t){this._hideDelay=w$1(t),this._tooltipInstance&&(this._tooltipInstance._mouseLeaveHideDelay=this._hideDelay)}_hideDelay;touchGestures=`auto`;get message(){return this._message}set message(t){let i=this._message;this._message=t!=null?String(t).trim():``,!this._message&&this._isTooltipVisible()?this.hide(0):(this._setupPointerEnterEventsIfNeeded(),this._updateTooltipMessage()),this._syncAriaDescription(i)}_message=``;get tooltipClass(){return this._tooltipClass}set tooltipClass(t){this._tooltipClass=t,this._tooltipInstance&&this._setTooltipClass(this._tooltipClass)}_eventCleanups=[];_touchstartTimeout=null;_destroyed=new ee$3;_isDestroyed=!1;constructor(){let t=this._defaultOptions;t&&(this._showDelay=t.showDelay,this._hideDelay=t.hideDelay,t.position&&(this.position=t.position),t.positionAtOrigin&&(this.positionAtOrigin=t.positionAtOrigin),t.touchGestures&&(this.touchGestures=t.touchGestures),t.tooltipClass&&(this.tooltipClass=t.tooltipClass)),this._viewportMargin=oi$2}ngAfterViewInit(){this._viewInitialized=!0,this._setupPointerEnterEventsIfNeeded(),this._focusMonitor.monitor(this._elementRef).pipe(ia$1(this._destroyed)).subscribe(t=>{t?t===`keyboard`&&this._ngZone.run(()=>this.show()):this._ngZone.run(()=>this.hide(0))})}ngOnDestroy(){let t=this._elementRef.nativeElement;this._touchstartTimeout&&clearTimeout(this._touchstartTimeout),this._overlayRef&&(this._overlayRef.dispose(),this._tooltipInstance=null),this._eventCleanups.forEach(i=>i()),this._eventCleanups.length=0,this._destroyed.next(),this._destroyed.complete(),this._isDestroyed=!0,this._ariaDescriber.removeDescription(t,this.message,`tooltip`),this._focusMonitor.stopMonitoring(t)}show(t=this.showDelay,i){if(this.disabled||!this.message||this._isTooltipVisible()){this._tooltipInstance?._cancelPendingAnimations();return}let o=this._createOverlay(i);this._detach(),this._portal=this._portal||new j$3(this._tooltipComponent,this._viewContainerRef);let n=this._tooltipInstance=o.attach(this._portal).instance;n._triggerElement=this._elementRef.nativeElement,n._mouseLeaveHideDelay=this._hideDelay,n.afterHidden().pipe(ia$1(this._destroyed)).subscribe(()=>this._detach()),this._setTooltipClass(this._tooltipClass),this._updateTooltipMessage(),n.show(t)}hide(t=this.hideDelay){let i=this._tooltipInstance;i&&(i.isVisible()?i.hide(t):(i._cancelPendingAnimations(),this._detach()))}toggle(t){this._isTooltipVisible()?this.hide():this.show(void 0,t)}_isTooltipVisible(){return!!this._tooltipInstance&&this._tooltipInstance.isVisible()}_createOverlay(t){if(this._overlayRef){let r=this._overlayRef.getConfig().positionStrategy;if((!this.positionAtOrigin||!t)&&r._origin instanceof it$2)return this._overlayRef;this._detach()}let i=this._injector.get(G$3).getAncestorScrollContainers(this._elementRef),o=`${this._cssClassPrefix}-${He$1}`,n=$$1(this._injector,this.positionAtOrigin?t||this._elementRef:this._elementRef).withTransformOriginOn(`.${this._cssClassPrefix}-tooltip`).withFlexibleDimensions(!1).withViewportMargin(this._viewportMargin).withScrollableContainers(i).withPopoverLocation(`global`);return n.positionChanges.pipe(ia$1(this._destroyed)).subscribe(r=>{this._updateCurrentPositionClass(r.connectionPair),this._tooltipInstance&&r.scrollableViewProperties.isOverlayClipped&&this._tooltipInstance.isVisible()&&this._ngZone.run(()=>this.hide(0))}),this._overlayRef=K(this._injector,{direction:this._dir,positionStrategy:n,panelClass:this._overlayPanelClass?[...this._overlayPanelClass,o]:o,scrollStrategy:this._injector.get(ti$2)(),disableAnimations:this._animationsDisabled,eventPredicate:this._overlayEventPredicate}),this._updatePosition(this._overlayRef),this._overlayRef.detachments().pipe(ia$1(this._destroyed)).subscribe(()=>this._detach()),this._overlayRef.outsidePointerEvents().pipe(ia$1(this._destroyed)).subscribe(()=>this._tooltipInstance?._handleBodyInteraction()),this._overlayRef.keydownEvents().pipe(ia$1(this._destroyed)).subscribe(r=>{r.preventDefault(),r.stopPropagation(),this._ngZone.run(()=>this.hide(0))}),this._defaultOptions?.disableTooltipInteractivity&&this._overlayRef.addPanelClass(`${this._cssClassPrefix}-tooltip-panel-non-interactive`),this._dirSubscribed||(this._dirSubscribed=!0,this._dir.change.pipe(ia$1(this._destroyed)).subscribe(()=>{this._overlayRef&&this._updatePosition(this._overlayRef)})),this._overlayRef}_detach(){this._overlayRef&&this._overlayRef.hasAttached()&&this._overlayRef.detach(),this._tooltipInstance=null}_updatePosition(t){let i=t.getConfig().positionStrategy,o=this._getOrigin(),n=this._getOverlayPosition();i.withPositions([this._addOffset(q$2(q$2({},o.main),n.main)),this._addOffset(q$2(q$2({},o.fallback),n.fallback))])}_addOffset(t){let i=si$2,o=!this._dir||this._dir.value==`ltr`;return t.originY===`top`?t.offsetY=-i:t.originY===`bottom`?t.offsetY=i:t.originX===`start`?t.offsetX=o?-i:i:t.originX===`end`&&(t.offsetX=o?i:-i),t}_getOrigin(){let t=!this._dir||this._dir.value==`ltr`,i=this.position,o;i==`above`||i==`below`?o={originX:`center`,originY:i==`above`?`top`:`bottom`}:i==`before`||i==`left`&&t||i==`right`&&!t?o={originX:`start`,originY:`center`}:(i==`after`||i==`right`&&t||i==`left`&&!t)&&(o={originX:`end`,originY:`center`});let{x:n,y:r}=this._invertPosition(o.originX,o.originY);return{main:o,fallback:{originX:n,originY:r}}}_getOverlayPosition(){let t=!this._dir||this._dir.value==`ltr`,i=this.position,o;i==`above`?o={overlayX:`center`,overlayY:`bottom`}:i==`below`?o={overlayX:`center`,overlayY:`top`}:i==`before`||i==`left`&&t||i==`right`&&!t?o={overlayX:`end`,overlayY:`center`}:(i==`after`||i==`right`&&t||i==`left`&&!t)&&(o={overlayX:`start`,overlayY:`center`});let{x:n,y:r}=this._invertPosition(o.overlayX,o.overlayY);return{main:o,fallback:{overlayX:n,overlayY:r}}}_updateTooltipMessage(){this._tooltipInstance&&(this._tooltipInstance.message=this.message,this._tooltipInstance._markForCheck(),hh$1(()=>{this._tooltipInstance&&this._overlayRef.updatePosition()},{injector:this._injector}))}_setTooltipClass(t){this._tooltipInstance&&(this._tooltipInstance.tooltipClass=t instanceof Set?Array.from(t):t,this._tooltipInstance._markForCheck())}_invertPosition(t,i){return this.position===`above`||this.position===`below`?i===`top`?i=`bottom`:i===`bottom`&&(i=`top`):t===`end`?t=`start`:t===`start`&&(t=`end`),{x:t,y:i}}_updateCurrentPositionClass(t){let{overlayY:i,originX:o,originY:n}=t,r;if(i===`center`?this._dir&&this._dir.value===`rtl`?r=o===`end`?`left`:`right`:r=o===`start`?`left`:`right`:r=i===`bottom`&&n===`top`?`above`:`below`,r!==this._currentPosition){let l=this._overlayRef;if(l){let h=`${this._cssClassPrefix}-${He$1}-`;l.removePanelClass(h+this._currentPosition),l.addPanelClass(h+r)}this._currentPosition=r}}_setupPointerEnterEventsIfNeeded(){this._disabled||!this.message||!this._viewInitialized||this._eventCleanups.length||(this._isTouchPlatform()?this.touchGestures!==`off`&&(this._disableNativeGesturesIfNecessary(),this._addListener(`touchstart`,t=>{let i=t.targetTouches?.[0],o=i?{x:i.clientX,y:i.clientY}:void 0;this._setupPointerExitEventsIfNeeded(),this._touchstartTimeout&&clearTimeout(this._touchstartTimeout);let n=500;this._touchstartTimeout=setTimeout(()=>{this._touchstartTimeout=null,this.show(void 0,o)},this._defaultOptions?.touchLongPressShowDelay??n)})):this._addListener(`mouseenter`,t=>{this._setupPointerExitEventsIfNeeded();let i;t.x!==void 0&&t.y!==void 0&&(i=t),this.show(void 0,i)}))}_setupPointerExitEventsIfNeeded(){if(!this._pointerExitEventsInitialized){if(this._pointerExitEventsInitialized=!0,!this._isTouchPlatform())this._addListener(`mouseleave`,t=>{let i=t.relatedTarget;(!i||!this._overlayRef?.overlayElement.contains(i))&&this.hide()}),this._addListener(`wheel`,t=>{if(this._isTooltipVisible()){let i=this._document.elementFromPoint(t.clientX,t.clientY),o=this._elementRef.nativeElement;i!==o&&!o.contains(i)&&this.hide()}});else if(this.touchGestures!==`off`){this._disableNativeGesturesIfNecessary();let t=()=>{this._touchstartTimeout&&clearTimeout(this._touchstartTimeout),this.hide(this._defaultOptions?.touchendHideDelay)};this._addListener(`touchend`,t),this._addListener(`touchcancel`,t)}}}_addListener(t,i){this._eventCleanups.push(this._renderer.listen(this._elementRef.nativeElement,t,i,ii$2))}_isTouchPlatform(){let t=this._defaultOptions?.detectHoverCapability;return typeof t==`function`?!t():this._platform.IOS||this._platform.ANDROID?!0:this._platform.isBrowser?!!t&&this._mediaMatcher.matchMedia(`(any-hover: none)`).matches:!1}_disableNativeGesturesIfNecessary(){let t=this.touchGestures;if(t!==`off`){let i=this._elementRef.nativeElement,o=i.style;(t===`on`||i.nodeName!==`INPUT`&&i.nodeName!==`TEXTAREA`)&&(o.userSelect=o.msUserSelect=o.webkitUserSelect=o.MozUserSelect=`none`),(t===`on`||!i.draggable)&&(o.webkitUserDrag=`none`),o.touchAction=`none`,o.webkitTapHighlightColor=`transparent`}}_syncAriaDescription(t){this._ariaDescriptionPending||(this._ariaDescriptionPending=!0,this._ariaDescriber.removeDescription(this._elementRef.nativeElement,t,`tooltip`),this._isDestroyed||hh$1({write:()=>{this._ariaDescriptionPending=!1,this.message&&!this.disabled&&this._ariaDescriber.describe(this._elementRef.nativeElement,this.message,`tooltip`)}},{injector:this._injector}))}_overlayEventPredicate=t=>t.type===`keydown`?this._isTooltipVisible()&&t.keyCode===27&&!_t$3(t):!0;static ɵfac=function(i){return new(i||s)};static ɵdir=En$3({type:s,selectors:[[``,`matTooltip`,``]],hostAttrs:[1,`mat-mdc-tooltip-trigger`],hostVars:2,hostBindings:function(i,o){i&2&&Jg(`mat-mdc-tooltip-disabled`,o.disabled)},inputs:{position:[0,`matTooltipPosition`,`position`],positionAtOrigin:[0,`matTooltipPositionAtOrigin`,`positionAtOrigin`],disabled:[0,`matTooltipDisabled`,`disabled`],showDelay:[0,`matTooltipShowDelay`,`showDelay`],hideDelay:[0,`matTooltipHideDelay`,`hideDelay`],touchGestures:[0,`matTooltipTouchGestures`,`touchGestures`],message:[0,`matTooltip`,`message`],tooltipClass:[0,`matTooltipClass`,`tooltipClass`]},exportAs:[`matTooltip`]})}return s})();var ze$2=(()=>{class s{_changeDetectorRef=g$2(Ls$1);_elementRef=g$2(it$2);_isMultiline=!1;message;tooltipClass;_showTimeoutId;_hideTimeoutId;_triggerElement;_mouseLeaveHideDelay;_animationsDisabled=ai$3();_tooltip;_closeOnInteraction=!1;_isVisible=!1;_onHide=new ee$3;_showAnimation=`mat-mdc-tooltip-show`;_hideAnimation=`mat-mdc-tooltip-hide`;show(t){this._hideTimeoutId!=null&&clearTimeout(this._hideTimeoutId),this._showTimeoutId=setTimeout(()=>{this._toggleVisibility(!0),this._showTimeoutId=void 0},t)}hide(t){this._showTimeoutId!=null&&clearTimeout(this._showTimeoutId),this._hideTimeoutId=setTimeout(()=>{this._toggleVisibility(!1),this._hideTimeoutId=void 0},t)}afterHidden(){return this._onHide}isVisible(){return this._isVisible}ngOnDestroy(){this._cancelPendingAnimations(),this._onHide.complete(),this._triggerElement=null}_handleBodyInteraction(){this._closeOnInteraction&&this.hide(0)}_markForCheck(){this._changeDetectorRef.markForCheck()}_handleMouseLeave({relatedTarget:t}){(!t||!this._triggerElement.contains(t))&&(this.isVisible()?this.hide(this._mouseLeaveHideDelay):this._finalizeAnimation(!1))}_onShow(){this._isMultiline=this._isTooltipMultiline(),this._markForCheck()}_isTooltipMultiline(){let t=this._elementRef.nativeElement.getBoundingClientRect();return t.height>ni$2&&t.width>=ri$3}_handleAnimationEnd({animationName:t}){(t===this._showAnimation||t===this._hideAnimation)&&this._finalizeAnimation(t===this._showAnimation)}_cancelPendingAnimations(){this._showTimeoutId!=null&&clearTimeout(this._showTimeoutId),this._hideTimeoutId!=null&&clearTimeout(this._hideTimeoutId),this._showTimeoutId=this._hideTimeoutId=void 0}_finalizeAnimation(t){t?this._closeOnInteraction=!0:this.isVisible()||this._onHide.next()}_toggleVisibility(t){let i=this._tooltip.nativeElement,o=this._showAnimation,n=this._hideAnimation;if(i.classList.remove(t?n:o),i.classList.add(t?o:n),this._isVisible!==t&&(this._isVisible=t,this._changeDetectorRef.markForCheck()),t&&!this._animationsDisabled&&typeof getComputedStyle==`function`){let r=getComputedStyle(i);(r.getPropertyValue(`animation-duration`)===`0s`||r.getPropertyValue(`animation-name`)===`none`)&&(this._animationsDisabled=!0)}t&&this._onShow(),this._animationsDisabled&&(i.classList.add(`_mat-animation-noopable`),this._finalizeAnimation(t))}static ɵfac=function(i){return new(i||s)};static ɵcmp=NC({type:s,selectors:[[`mat-tooltip-component`]],viewQuery:function(i,o){if(i&1&&qg(Qe$1,7),i&2){let n;Ww(n=qw())&&(o._tooltip=n.first)}},hostAttrs:[`aria-hidden`,`true`],hostBindings:function(i,o){i&1&&Ug(`mouseleave`,function(r){return o._handleMouseLeave(r)})},decls:4,vars:5,consts:[[`tooltip`,``],[1,`mdc-tooltip`,`mat-mdc-tooltip`,3,`animationend`],[1,`mat-mdc-tooltip-surface`,`mdc-tooltip__surface`]],template:function(i,o){i&1&&(Xu$1(0,`div`,1,0),Gg(`animationend`,function(r){return o._handleAnimationEnd(r)}),Xu$1(2,`div`,2),yb$1(3),el$1()()),i&2&&(sb$1(o.tooltipClass),Jg(`mdc-tooltip--multiline`,o._isMultiline),lI(3),im$1(o.message))},styles:[`.mat-mdc-tooltip {
  position: relative;
  transform: scale(0);
  display: inline-flex;
}
.mat-mdc-tooltip::before {
  content: "";
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  position: absolute;
}
.mat-mdc-tooltip-panel-below .mat-mdc-tooltip::before {
  top: -8px;
}
.mat-mdc-tooltip-panel-above .mat-mdc-tooltip::before {
  bottom: -8px;
}
.mat-mdc-tooltip-panel-right .mat-mdc-tooltip::before {
  left: -8px;
}
.mat-mdc-tooltip-panel-left .mat-mdc-tooltip::before {
  right: -8px;
}
.mat-mdc-tooltip._mat-animation-noopable {
  animation: none;
  transform: scale(1);
}

.mat-mdc-tooltip-surface {
  word-break: normal;
  overflow-wrap: anywhere;
  padding: 4px 8px;
  min-width: 40px;
  max-width: 200px;
  min-height: 24px;
  max-height: 40vh;
  box-sizing: border-box;
  overflow: hidden;
  text-align: center;
  will-change: transform, opacity;
  background-color: var(--%NS%mat-tooltip-container-color, var(--%NS%mat-sys-inverse-surface));
  color: var(--%NS%mat-tooltip-supporting-text-color, var(--%NS%mat-sys-inverse-on-surface));
  border-radius: var(--%NS%mat-tooltip-container-shape, var(--%NS%mat-sys-corner-extra-small));
  font-family: var(--%NS%mat-tooltip-supporting-text-font, var(--%NS%mat-sys-body-small-font));
  font-size: var(--%NS%mat-tooltip-supporting-text-size, var(--%NS%mat-sys-body-small-size));
  font-weight: var(--%NS%mat-tooltip-supporting-text-weight, var(--%NS%mat-sys-body-small-weight));
  line-height: var(--%NS%mat-tooltip-supporting-text-line-height, var(--%NS%mat-sys-body-small-line-height));
  letter-spacing: var(--%NS%mat-tooltip-supporting-text-tracking, var(--%NS%mat-sys-body-small-tracking));
}
.mat-mdc-tooltip-surface::before {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border: 1px solid transparent;
  border-radius: inherit;
  content: "";
  pointer-events: none;
}
.mdc-tooltip--multiline .mat-mdc-tooltip-surface {
  text-align: left;
}
[dir=rtl] .mdc-tooltip--multiline .mat-mdc-tooltip-surface {
  text-align: right;
}

.mat-mdc-tooltip-panel {
  line-height: normal;
}
.mat-mdc-tooltip-panel.mat-mdc-tooltip-panel-non-interactive {
  pointer-events: none;
}

@keyframes mat-mdc-tooltip-show {
  0% {
    opacity: 0;
    transform: scale(0.8);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes mat-mdc-tooltip-hide {
  0% {
    opacity: 1;
    transform: scale(1);
  }
  100% {
    opacity: 0;
    transform: scale(0.8);
  }
}
.mat-mdc-tooltip-show {
  animation: mat-mdc-tooltip-show 150ms cubic-bezier(0, 0, 0.2, 1) forwards;
}

.mat-mdc-tooltip-hide {
  animation: mat-mdc-tooltip-hide 75ms cubic-bezier(0.4, 0, 1, 1) forwards;
}
`],encapsulation:2})}return s})();var Yo=(()=>{class s extends be$2{static{this.ɵfac=(()=>{let t;return function(o){return(t||(t=Cp$1(s)))(o||s)}})()}static{this.ɵcmp=NC({type:s,selectors:[[`lab900-default-cell-renderer`]],features:[Dg],decls:4,vars:7,consts:[[1,`lab900-cell-value`,3,`matTooltip`,`matTooltipPosition`]],template:function(i,o){i&1&&(cs$1(0,`div`,0),kb$1(1,`translate`),yb$1(2),kb$1(3,`translate`),Ju$1()),i&2&&(Og(`matTooltip`,o.tooltip()?Lb$1(1,3,o.tooltip()):``)(`matTooltipPosition`,o.tooltipPosition()),lI(2),rl$1(` `,Lb$1(3,5,o.cellValueOrPlaceholder()),` `))},dependencies:[Vt$3,xn$4],encapsulation:2})}}return s})();var ee$1=class{applyChanges(o,e,t,n,s){o.forEachOperation((r,l,c)=>{let d,f;if(r.previousIndex==null){let g=t(r,l,c);d=e.createEmbeddedView(g.templateRef,g.context,g.index),f=g$1.INSERTED}else c==null?(e.remove(l),f=g$1.REMOVED):(d=e.get(l),e.move(d,c),f=g$1.MOVED);s&&s({context:d?.context,operation:f,record:r})})}detach(){}};var at$2=[[[`caption`]],[[`colgroup`],[`col`]],`*`];var lt$3=[`caption`,`colgroup, col`,`*`];function ct$3(i,o){i&1&&Gw(0,2)}function dt$2(i,o){i&1&&(cs$1(0,`thead`,0),Pg(1,1),Ju$1(),cs$1(2,`tbody`,0),Pg(3,2)(4,3),Ju$1(),cs$1(5,`tfoot`,0),Pg(6,4),Ju$1())}function ht$2(i,o){i&1&&Pg(0,1)(1,2)(2,3)(3,4)}var b$1=new S$1(`CDK_TABLE`);var ie$1=(()=>{class i{template=g$2(rr$1);static ɵfac=function(t){return new(t||i)};static ɵdir=En$3({type:i,selectors:[[``,`cdkCellDef`,``]]})}return i})();var ne=(()=>{class i{template=g$2(rr$1);static ɵfac=function(t){return new(t||i)};static ɵdir=En$3({type:i,selectors:[[``,`cdkHeaderCellDef`,``]]})}return i})();var oe$2=(()=>{class i{template=g$2(rr$1);static ɵfac=function(t){return new(t||i)};static ɵdir=En$3({type:i,selectors:[[``,`cdkFooterCellDef`,``]]})}return i})();var I$1=(()=>{class i{_table=g$2(b$1,{optional:!0});_hasStickyChanged=!1;get name(){return this._name}set name(e){this._setNameInput(e)}_name;get sticky(){return this._sticky}set sticky(e){e!==this._sticky&&(this._sticky=e,this._hasStickyChanged=!0)}_sticky=!1;get stickyEnd(){return this._stickyEnd}set stickyEnd(e){e!==this._stickyEnd&&(this._stickyEnd=e,this._hasStickyChanged=!0)}_stickyEnd=!1;cell;headerCell;footerCell;cssClassFriendlyName;_columnCssClassName;hasStickyChanged(){let e=this._hasStickyChanged;return this.resetStickyChanged(),e}resetStickyChanged(){this._hasStickyChanged=!1}_updateColumnCssClassName(){this._columnCssClassName=[`cdk-column-${this.cssClassFriendlyName}`]}_setNameInput(e){e&&(this._name=e,this.cssClassFriendlyName=e.replace(/[^a-z0-9_-]/gi,`-`),this._updateColumnCssClassName())}static ɵfac=function(t){return new(t||i)};static ɵdir=En$3({type:i,selectors:[[``,`cdkColumnDef`,``]],contentQueries:function(t,n,s){if(t&1&&Wg(s,ie$1,5)(s,ne,5)(s,oe$2,5),t&2){let r;Ww(r=qw())&&(n.cell=r.first),Ww(r=qw())&&(n.headerCell=r.first),Ww(r=qw())&&(n.footerCell=r.first)}},inputs:{name:[0,`cdkColumnDef`,`name`],sticky:[2,`sticky`,`sticky`,mo$2],stickyEnd:[2,`stickyEnd`,`stickyEnd`,mo$2]}})}return i})();var U$2=class{constructor(o,e){e.nativeElement.classList.add(...o._columnCssClassName)}};var $e$1=(()=>{class i extends U$2{constructor(){super(g$2(I$1),g$2(it$2))}static ɵfac=function(t){return new(t||i)};static ɵdir=En$3({type:i,selectors:[[`cdk-header-cell`],[`th`,`cdk-header-cell`,``]],hostAttrs:[`role`,`columnheader`,1,`cdk-header-cell`],features:[Dg]})}return i})();var Ke=(()=>{class i extends U$2{constructor(){let e=g$2(I$1),t=g$2(it$2);super(e,t);let n=e._table?._getCellRole();n&&t.nativeElement.setAttribute(`role`,n)}static ɵfac=function(t){return new(t||i)};static ɵdir=En$3({type:i,selectors:[[`cdk-footer-cell`],[`td`,`cdk-footer-cell`,``]],hostAttrs:[1,`cdk-footer-cell`],features:[Dg]})}return i})();var Ze=(()=>{class i extends U$2{constructor(){let e=g$2(I$1),t=g$2(it$2);super(e,t);let n=e._table?._getCellRole();n&&t.nativeElement.setAttribute(`role`,n)}static ɵfac=function(t){return new(t||i)};static ɵdir=En$3({type:i,selectors:[[`cdk-cell`],[`td`,`cdk-cell`,``]],hostAttrs:[1,`cdk-cell`],features:[Dg]})}return i})();var fe$1=(()=>{class i{template=g$2(rr$1);_differs=g$2(Pm$1);columns;_columnsDiffer;ngOnChanges(e){if(!this._columnsDiffer){let t=e.columns&&e.columns.currentValue||[];this._columnsDiffer=this._differs.find(t).create(),this._columnsDiffer.diff(t)}}getColumnsDiff(){return this._columnsDiffer.diff(this.columns)}extractCellTemplate(e){return this instanceof Q?e.headerCell.template:this instanceof W$1?e.footerCell.template:e.cell.template}static ɵfac=function(t){return new(t||i)};static ɵdir=En$3({type:i,features:[sr$1]})}return i})();var Q=(()=>{class i extends fe$1{_table=g$2(b$1,{optional:!0});_hasStickyChanged=!1;get sticky(){return this._sticky}set sticky(e){e!==this._sticky&&(this._sticky=e,this._hasStickyChanged=!0)}_sticky=!1;ngOnChanges(e){super.ngOnChanges(e)}hasStickyChanged(){let e=this._hasStickyChanged;return this.resetStickyChanged(),e}resetStickyChanged(){this._hasStickyChanged=!1}static ɵfac=(()=>{let e;return function(n){return(e||(e=Cp$1(i)))(n||i)}})();static ɵdir=En$3({type:i,selectors:[[``,`cdkHeaderRowDef`,``]],inputs:{columns:[0,`cdkHeaderRowDef`,`columns`],sticky:[2,`cdkHeaderRowDefSticky`,`sticky`,mo$2]},features:[Dg,sr$1]})}return i})();var W$1=(()=>{class i extends fe$1{_table=g$2(b$1,{optional:!0});_hasStickyChanged=!1;get sticky(){return this._sticky}set sticky(e){e!==this._sticky&&(this._sticky=e,this._hasStickyChanged=!0)}_sticky=!1;ngOnChanges(e){super.ngOnChanges(e)}hasStickyChanged(){let e=this._hasStickyChanged;return this.resetStickyChanged(),e}resetStickyChanged(){this._hasStickyChanged=!1}static ɵfac=(()=>{let e;return function(n){return(e||(e=Cp$1(i)))(n||i)}})();static ɵdir=En$3({type:i,selectors:[[``,`cdkFooterRowDef`,``]],inputs:{columns:[0,`cdkFooterRowDef`,`columns`],sticky:[2,`cdkFooterRowDefSticky`,`sticky`,mo$2]},features:[Dg,sr$1]})}return i})();var se$1=(()=>{class i extends fe$1{_table=g$2(b$1,{optional:!0});when;static ɵfac=(()=>{let e;return function(n){return(e||(e=Cp$1(i)))(n||i)}})();static ɵdir=En$3({type:i,selectors:[[``,`cdkRowDef`,``]],inputs:{columns:[0,`cdkRowDefColumns`,`columns`],when:[0,`cdkRowDefWhen`,`when`]},features:[Dg]})}return i})();var E$1=(()=>{class i{_viewContainer=g$2(Dn$2);cells;context;static mostRecentCellOutlet=null;constructor(){i.mostRecentCellOutlet=this}ngOnDestroy(){i.mostRecentCellOutlet===this&&(i.mostRecentCellOutlet=null)}static ɵfac=function(t){return new(t||i)};static ɵdir=En$3({type:i,selectors:[[``,`cdkCellOutlet`,``]]})}return i})();var ue$2=(()=>{class i{static ɵfac=function(t){return new(t||i)};static ɵcmp=NC({type:i,selectors:[[`cdk-header-row`],[`tr`,`cdk-header-row`,``]],hostAttrs:[`role`,`row`,1,`cdk-header-row`],decls:1,vars:0,consts:[[`cdkCellOutlet`,``]],template:function(t,n){t&1&&Pg(0,0)},dependencies:[E$1],encapsulation:2,changeDetection:1})}return i})();var me$1=(()=>{class i{static ɵfac=function(t){return new(t||i)};static ɵcmp=NC({type:i,selectors:[[`cdk-footer-row`],[`tr`,`cdk-footer-row`,``]],hostAttrs:[`role`,`row`,1,`cdk-footer-row`],decls:1,vars:0,consts:[[`cdkCellOutlet`,``]],template:function(t,n){t&1&&Pg(0,0)},dependencies:[E$1],encapsulation:2,changeDetection:1})}return i})();var pe$2=(()=>{class i{static ɵfac=function(t){return new(t||i)};static ɵcmp=NC({type:i,selectors:[[`cdk-row`],[`tr`,`cdk-row`,``]],hostAttrs:[`role`,`row`,1,`cdk-row`],decls:1,vars:0,consts:[[`cdkCellOutlet`,``]],template:function(t,n){t&1&&Pg(0,0)},dependencies:[E$1],encapsulation:2,changeDetection:1})}return i})();var Xe$1=(()=>{class i{templateRef=g$2(rr$1);_contentClassNames=[`cdk-no-data-row`,`cdk-row`];_cellClassNames=[`cdk-cell`,`cdk-no-data-cell`];_cellSelector=`td, cdk-cell, [cdk-cell], .cdk-cell`;static ɵfac=function(t){return new(t||i)};static ɵdir=En$3({type:i,selectors:[[`ng-template`,`cdkNoDataRow`,``]]})}return i})();var We$1=[`top`,`bottom`,`left`,`right`];var de$3=class{_isNativeHtmlTable;_stickCellCss;_isBrowser;_needsPositionStickyOnElement;direction;_positionListener;_tableInjector;_elemSizeCache=new WeakMap;_resizeObserver=globalThis?.ResizeObserver?new globalThis.ResizeObserver(o=>this._updateCachedSizes(o)):null;_updatedStickyColumnsParamsToReplay=[];_stickyColumnsReplayTimeout=null;_cachedCellWidths=[];_borderCellCss;_destroyed=!1;constructor(o,e,t=!0,n=!0,s,r,l){this._isNativeHtmlTable=o,this._stickCellCss=e,this._isBrowser=t,this._needsPositionStickyOnElement=n,this.direction=s,this._positionListener=r,this._tableInjector=l,this._borderCellCss={top:`${e}-border-elem-top`,bottom:`${e}-border-elem-bottom`,left:`${e}-border-elem-left`,right:`${e}-border-elem-right`}}clearStickyPositioning(o,e){(e.includes(`left`)||e.includes(`right`))&&this._removeFromStickyColumnReplayQueue(o);let t=[];for(let n of o)n.nodeType===n.ELEMENT_NODE&&t.push(n,...Array.from(n.children));hh$1({write:()=>{for(let n of t)this._removeStickyStyle(n,e)}},{injector:this._tableInjector})}updateStickyColumns(o,e,t,n=!0,s=!0){if(!o.length||!this._isBrowser||!(e.some(C=>C)||t.some(C=>C))){this._positionListener?.stickyColumnsUpdated({sizes:[]}),this._positionListener?.stickyEndColumnsUpdated({sizes:[]});return}let r=o[0],l=r.children.length,c=this.direction===`rtl`,d=c?`right`:`left`,f=c?`left`:`right`,g=e.lastIndexOf(!0),p=t.indexOf(!0),_,Re,ve;s&&this._updateStickyColumnReplayQueue({rows:[...o],stickyStartStates:[...e],stickyEndStates:[...t]}),hh$1({earlyRead:()=>{_=this._getCellWidths(r,n),Re=this._getStickyStartColumnPositions(_,e),ve=this._getStickyEndColumnPositions(_,t)},write:()=>{for(let C of o)for(let D=0;D<l;D++){let be=C.children[D];e[D]&&this._addStickyStyle(be,d,Re[D],D===g),t[D]&&this._addStickyStyle(be,f,ve[D],D===p)}this._positionListener&&_.some(C=>!!C)&&(this._positionListener.stickyColumnsUpdated({sizes:g===-1?[]:_.slice(0,g+1).map((C,D)=>e[D]?C:null)}),this._positionListener.stickyEndColumnsUpdated({sizes:p===-1?[]:_.slice(p).map((C,D)=>t[D+p]?C:null).reverse()}))}},{injector:this._tableInjector})}stickRows(o,e,t){if(!this._isBrowser)return;let n=t===`bottom`?o.slice().reverse():o,s=t===`bottom`?e.slice().reverse():e,r=[],l=[],c=[];hh$1({earlyRead:()=>{for(let d=0,f=0;d<n.length;d++){if(!s[d])continue;r[d]=f;let g=n[d];c[d]=this._isNativeHtmlTable?Array.from(g.children):[g];let p=this._retrieveElementSize(g).height;f+=p,l[d]=p}},write:()=>{let d=s.lastIndexOf(!0);for(let f=0;f<n.length;f++){if(!s[f])continue;let g=r[f],p=f===d;for(let _ of c[f])this._addStickyStyle(_,t,g,p)}t===`top`?this._positionListener?.stickyHeaderRowsUpdated({sizes:l,offsets:r,elements:c}):this._positionListener?.stickyFooterRowsUpdated({sizes:l,offsets:r,elements:c})}},{injector:this._tableInjector})}updateStickyFooterContainer(o,e){this._isNativeHtmlTable&&hh$1({write:()=>{let t=o.querySelector(`tfoot`);t&&(e.some(n=>!n)?this._removeStickyStyle(t,[`bottom`]):this._addStickyStyle(t,`bottom`,0,!1))}},{injector:this._tableInjector})}destroy(){this._stickyColumnsReplayTimeout&&clearTimeout(this._stickyColumnsReplayTimeout),this._resizeObserver?.disconnect(),this._destroyed=!0}_removeStickyStyle(o,e){if(!o.classList.contains(this._stickCellCss))return;for(let n of e)o.style[n]=``,o.classList.remove(this._borderCellCss[n]);We$1.some(n=>e.indexOf(n)===-1&&o.style[n])?o.style.zIndex=this._getCalculatedZIndex(o):(o.style.zIndex=``,this._needsPositionStickyOnElement&&(o.style.position=``),o.classList.remove(this._stickCellCss))}_addStickyStyle(o,e,t,n){o.classList.add(this._stickCellCss),n&&o.classList.add(this._borderCellCss[e]),o.style[e]=`${t}px`,o.style.zIndex=this._getCalculatedZIndex(o),this._needsPositionStickyOnElement&&(o.style.cssText+=`position: -webkit-sticky; position: sticky; `)}_getCalculatedZIndex(o){let e={top:100,bottom:10,left:1,right:1},t=0;for(let n of We$1)o.style[n]&&(t+=e[n]);return t?`${t}`:``}_getCellWidths(o,e=!0){if(!e&&this._cachedCellWidths.length)return this._cachedCellWidths;let t=[],n=o.children;for(let s=0;s<n.length;s++){let r=n[s];t.push(this._retrieveElementSize(r).width)}return this._cachedCellWidths=t,t}_getStickyStartColumnPositions(o,e){let t=[],n=0;for(let s=0;s<o.length;s++)e[s]&&(t[s]=n,n+=o[s]);return t}_getStickyEndColumnPositions(o,e){let t=[],n=0;for(let s=o.length;s>0;s--)e[s]&&(t[s]=n,n+=o[s]);return t}_retrieveElementSize(o){let e=this._elemSizeCache.get(o);if(e)return e;let t=o.getBoundingClientRect(),n={width:t.width,height:t.height};return this._resizeObserver&&(this._elemSizeCache.set(o,n),this._resizeObserver.observe(o,{box:`border-box`})),n}_updateStickyColumnReplayQueue(o){this._removeFromStickyColumnReplayQueue(o.rows),this._stickyColumnsReplayTimeout||this._updatedStickyColumnsParamsToReplay.push(o)}_removeFromStickyColumnReplayQueue(o){let e=new Set(o);for(let t of this._updatedStickyColumnsParamsToReplay)t.rows=t.rows.filter(n=>!e.has(n));this._updatedStickyColumnsParamsToReplay=this._updatedStickyColumnsParamsToReplay.filter(t=>!!t.rows.length)}_updateCachedSizes(o){let e=!1;for(let t of o){let n=t.borderBoxSize?.length?{width:t.borderBoxSize[0].inlineSize,height:t.borderBoxSize[0].blockSize}:{width:t.contentRect.width,height:t.contentRect.height};n.width!==this._elemSizeCache.get(t.target)?.width&&ft$2(t.target)&&(e=!0),this._elemSizeCache.set(t.target,n)}e&&this._updatedStickyColumnsParamsToReplay.length&&(this._stickyColumnsReplayTimeout&&clearTimeout(this._stickyColumnsReplayTimeout),this._stickyColumnsReplayTimeout=setTimeout(()=>{if(!this._destroyed){for(let t of this._updatedStickyColumnsParamsToReplay)this.updateStickyColumns(t.rows,t.stickyStartStates,t.stickyEndStates,!0,!1);this._updatedStickyColumnsParamsToReplay=[],this._stickyColumnsReplayTimeout=null}},0))}};function ft$2(i){return[`cdk-cell`,`cdk-header-cell`,`cdk-footer-cell`].some(o=>i.classList.contains(o))}var j$2=new S$1(`STICKY_POSITIONING_LISTENER`);var _e$1=(()=>{class i{viewContainer=g$2(Dn$2);elementRef=g$2(it$2);constructor(){let e=g$2(b$1);e._rowOutlet=this,e._outletAssigned()}static ɵfac=function(t){return new(t||i)};static ɵdir=En$3({type:i,selectors:[[``,`rowOutlet`,``]]})}return i})();var ge$2=(()=>{class i{viewContainer=g$2(Dn$2);elementRef=g$2(it$2);constructor(){let e=g$2(b$1);e._headerRowOutlet=this,e._outletAssigned()}static ɵfac=function(t){return new(t||i)};static ɵdir=En$3({type:i,selectors:[[``,`headerRowOutlet`,``]]})}return i})();var ye$1=(()=>{class i{viewContainer=g$2(Dn$2);elementRef=g$2(it$2);constructor(){let e=g$2(b$1);e._footerRowOutlet=this,e._outletAssigned()}static ɵfac=function(t){return new(t||i)};static ɵdir=En$3({type:i,selectors:[[``,`footerRowOutlet`,``]]})}return i})();var we$1=(()=>{class i{viewContainer=g$2(Dn$2);elementRef=g$2(it$2);constructor(){let e=g$2(b$1);e._noDataRowOutlet=this,e._outletAssigned()}static ɵfac=function(t){return new(t||i)};static ɵdir=En$3({type:i,selectors:[[``,`noDataRowOutlet`,``]]})}return i})();var De$1=(()=>{class i{_differs=g$2(Pm$1);_changeDetectorRef=g$2(Ls$1);_elementRef=g$2(it$2);_dir=g$2(b$2,{optional:!0});_platform=g$2(J$3);_viewRepeater;_viewportRuler=g$2(st$4);_injector=g$2(ne$1);_virtualScrollViewport=g$2(ot$2,{optional:!0,host:!0});_positionListener=g$2(j$2,{optional:!0})||g$2(j$2,{optional:!0,skipSelf:!0});_document=g$2(Ne$3);_data;_renderedRange;_onDestroy=new ee$3;_renderRows;_renderChangeSubscription=null;_columnDefsByName=new Map;_rowDefs;_headerRowDefs;_footerRowDefs;_dataDiffer;_defaultRowDef=null;_customColumnDefs=new Set;_customRowDefs=new Set;_customHeaderRowDefs=new Set;_customFooterRowDefs=new Set;_customNoDataRow=null;_headerRowDefChanged=!0;_footerRowDefChanged=!0;_stickyColumnStylesNeedReset=!0;_forceRecalculateCellWidths=!0;_cachedRenderRowsMap=new Map;_isNativeHtmlTable;_stickyStyler;stickyCssClass=`cdk-table-sticky`;needsPositionStickyOnElement=!0;_isServer;_isShowingNoDataRow=!1;_hasAllOutlets=!1;_hasInitialized=!1;_headerRowStickyUpdates=new ee$3;_footerRowStickyUpdates=new ee$3;_disableVirtualScrolling=!1;_getCellRole(){if(this._cellRoleInternal===void 0){let e=this._elementRef.nativeElement.getAttribute(`role`);return e===`grid`||e===`treegrid`?`gridcell`:`cell`}return this._cellRoleInternal}_cellRoleInternal=void 0;get trackBy(){return this._trackByFn}set trackBy(e){this._trackByFn=e}_trackByFn;get dataSource(){return this._dataSource}set dataSource(e){this._dataSource!==e&&(this._switchDataSource(e),this._changeDetectorRef.markForCheck())}_dataSource;_dataSourceChanges=new ee$3;_dataStream=new ee$3;get multiTemplateDataRows(){return this._multiTemplateDataRows}set multiTemplateDataRows(e){this._multiTemplateDataRows=e,this._rowOutlet&&this._rowOutlet.viewContainer.length&&(this._forceRenderDataRows(),this.updateStickyColumnStyles())}_multiTemplateDataRows=!1;get fixedLayout(){return this._virtualScrollEnabled()?!0:this._fixedLayout}set fixedLayout(e){this._fixedLayout=e,this._forceRecalculateCellWidths=!0,this._stickyColumnStylesNeedReset=!0}_fixedLayout=!1;recycleRows=!1;contentChanged=new Ke$2;viewChange=new gr({start:0,end:Number.MAX_VALUE});_rowOutlet;_headerRowOutlet;_footerRowOutlet;_noDataRowOutlet;_contentColumnDefs;_contentRowDefs;_contentHeaderRowDefs;_contentFooterRowDefs;_noDataRow;get renderedRows(){return this._renderRows}constructor(){g$2(new Tm$1(`role`),{optional:!0})||this._elementRef.nativeElement.setAttribute(`role`,`table`),this._isServer=!this._platform.isBrowser,this._isNativeHtmlTable=this._elementRef.nativeElement.nodeName===`TABLE`,this._dataDiffer=this._differs.find([]).create((t,n)=>this.trackBy?this.trackBy(n.dataIndex,n.data):n)}ngOnInit(){this._setupStickyStyler(),this._viewportRuler.change().pipe(ia$1(this._onDestroy)).subscribe(()=>{this._forceRecalculateCellWidths=!0})}ngAfterContentInit(){this._viewRepeater=this.recycleRows||this._virtualScrollEnabled()?new W$4:new ee$1,this._virtualScrollEnabled()&&this._setupVirtualScrolling(this._virtualScrollViewport),this._hasInitialized=!0}ngAfterContentChecked(){this._canRender()&&this._render()}ngOnDestroy(){this._stickyStyler?.destroy(),[this._rowOutlet?.viewContainer,this._headerRowOutlet?.viewContainer,this._footerRowOutlet?.viewContainer,this._cachedRenderRowsMap,this._customColumnDefs,this._customRowDefs,this._customHeaderRowDefs,this._customFooterRowDefs,this._columnDefsByName].forEach(e=>{e?.clear()}),this._headerRowDefs=[],this._footerRowDefs=[],this._defaultRowDef=null,this._headerRowStickyUpdates.complete(),this._footerRowStickyUpdates.complete(),this._onDestroy.next(),this._onDestroy.complete(),ee$2(this.dataSource)&&this.dataSource.disconnect(this)}renderRows(){this._renderRows=this._getAllRenderRows();let e=this._dataDiffer.diff(this._renderRows);if(!e){this._updateNoDataRow(),this.contentChanged.next();return}let t=this._rowOutlet.viewContainer;this._viewRepeater.applyChanges(e,t,(n,s,r)=>this._getEmbeddedViewArgs(n.item,r),n=>n.item.data,n=>{n.operation===g$1.INSERTED&&n.context&&this._renderCellTemplateForItem(n.record.item.rowDef,n.context)}),this._updateRowIndexContext(),e.forEachIdentityChange(n=>{let s=t.get(n.currentIndex);s.context.$implicit=n.item.data}),this._updateNoDataRow(),this.contentChanged.next(),this.updateStickyColumnStyles()}addColumnDef(e){this._customColumnDefs.add(e)}removeColumnDef(e){this._customColumnDefs.delete(e)}addRowDef(e){this._customRowDefs.add(e)}removeRowDef(e){this._customRowDefs.delete(e)}addHeaderRowDef(e){this._customHeaderRowDefs.add(e),this._headerRowDefChanged=!0}removeHeaderRowDef(e){this._customHeaderRowDefs.delete(e),this._headerRowDefChanged=!0}addFooterRowDef(e){this._customFooterRowDefs.add(e),this._footerRowDefChanged=!0}removeFooterRowDef(e){this._customFooterRowDefs.delete(e),this._footerRowDefChanged=!0}setNoDataRow(e){this._customNoDataRow=e}updateStickyHeaderRowStyles(){let e=this._getRenderedRows(this._headerRowOutlet);if(this._isNativeHtmlTable){let n=qe$1(this._headerRowOutlet,`thead`);n&&(n.style.display=e.length?``:`none`)}let t=this._headerRowDefs.map(n=>n.sticky);this._stickyStyler.clearStickyPositioning(e,[`top`]),this._stickyStyler.stickRows(e,t,`top`),this._headerRowDefs.forEach(n=>n.resetStickyChanged())}updateStickyFooterRowStyles(){let e=this._getRenderedRows(this._footerRowOutlet);if(this._isNativeHtmlTable){let n=qe$1(this._footerRowOutlet,`tfoot`);n&&(n.style.display=e.length?``:`none`)}let t=this._footerRowDefs.map(n=>n.sticky);this._stickyStyler.clearStickyPositioning(e,[`bottom`]),this._stickyStyler.stickRows(e,t,`bottom`),this._stickyStyler.updateStickyFooterContainer(this._elementRef.nativeElement,t),this._footerRowDefs.forEach(n=>n.resetStickyChanged())}updateStickyColumnStyles(){let e=this._getRenderedRows(this._headerRowOutlet),t=this._getRenderedRows(this._rowOutlet),n=this._getRenderedRows(this._footerRowOutlet);(this._isNativeHtmlTable&&!this.fixedLayout||this._stickyColumnStylesNeedReset)&&(this._stickyStyler.clearStickyPositioning([...e,...t,...n],[`left`,`right`]),this._stickyColumnStylesNeedReset=!1),e.forEach((s,r)=>{this._addStickyColumnStyles([s],this._headerRowDefs[r])}),this._rowDefs.forEach(s=>{let r=[];for(let l=0;l<t.length;l++)this._renderRows[l].rowDef===s&&r.push(t[l]);this._addStickyColumnStyles(r,s)}),n.forEach((s,r)=>{this._addStickyColumnStyles([s],this._footerRowDefs[r])}),Array.from(this._columnDefsByName.values()).forEach(s=>s.resetStickyChanged())}stickyColumnsUpdated(e){this._positionListener?.stickyColumnsUpdated(e)}stickyEndColumnsUpdated(e){this._positionListener?.stickyEndColumnsUpdated(e)}stickyHeaderRowsUpdated(e){this._headerRowStickyUpdates.next(e),this._positionListener?.stickyHeaderRowsUpdated(e)}stickyFooterRowsUpdated(e){this._footerRowStickyUpdates.next(e),this._positionListener?.stickyFooterRowsUpdated(e)}_outletAssigned(){!this._hasAllOutlets&&this._rowOutlet&&this._headerRowOutlet&&this._footerRowOutlet&&this._noDataRowOutlet&&(this._hasAllOutlets=!0,this._canRender()&&this._render())}_canRender(){return this._hasAllOutlets&&this._hasInitialized}_render(){this._cacheRowDefs(),this._cacheColumnDefs(),!this._headerRowDefs.length&&!this._footerRowDefs.length&&this._rowDefs.length;let t=this._renderUpdatedColumns()||this._headerRowDefChanged||this._footerRowDefChanged;this._stickyColumnStylesNeedReset=this._stickyColumnStylesNeedReset||t,this._forceRecalculateCellWidths=t,this._headerRowDefChanged&&(this._forceRenderHeaderRows(),this._headerRowDefChanged=!1),this._footerRowDefChanged&&(this._forceRenderFooterRows(),this._footerRowDefChanged=!1),this.dataSource&&this._rowDefs.length>0&&!this._renderChangeSubscription?this._observeRenderChanges():this._stickyColumnStylesNeedReset&&this.updateStickyColumnStyles(),this._checkStickyStates()}_getAllRenderRows(){if(!Array.isArray(this._data)||!this._renderedRange)return[];let e=[],t=Math.min(this._data.length,this._renderedRange.end),n=this._cachedRenderRowsMap;this._cachedRenderRowsMap=new Map;for(let s=this._renderedRange.start;s<t;s++){let r=this._data[s],l=this._getRenderRowsForData(r,s,n.get(r));this._cachedRenderRowsMap.has(r)||this._cachedRenderRowsMap.set(r,new WeakMap);for(let c=0;c<l.length;c++){let d=l[c],f=this._cachedRenderRowsMap.get(d.data);f.has(d.rowDef)?f.get(d.rowDef).push(d):f.set(d.rowDef,[d]),e.push(d)}}return e}_getRenderRowsForData(e,t,n){return this._getRowDefs(e,t).map(r=>{let l=n&&n.has(r)?n.get(r):[];if(l.length){let c=l.shift();return c.dataIndex=t,c}else return{data:e,rowDef:r,dataIndex:t}})}_cacheColumnDefs(){this._columnDefsByName.clear(),te(this._getOwnDefs(this._contentColumnDefs),this._customColumnDefs).forEach(t=>{this._columnDefsByName.has(t.name),this._columnDefsByName.set(t.name,t)})}_cacheRowDefs(){this._headerRowDefs=te(this._getOwnDefs(this._contentHeaderRowDefs),this._customHeaderRowDefs),this._footerRowDefs=te(this._getOwnDefs(this._contentFooterRowDefs),this._customFooterRowDefs),this._rowDefs=te(this._getOwnDefs(this._contentRowDefs),this._customRowDefs);let e=this._rowDefs.filter(t=>!t.when);this._defaultRowDef=e[0]}_renderUpdatedColumns(){let e=(r,l)=>{let c=!!l.getColumnsDiff();return r||c},t=this._rowDefs.reduce(e,!1);t&&this._forceRenderDataRows();let n=this._headerRowDefs.reduce(e,!1);n&&this._forceRenderHeaderRows();let s=this._footerRowDefs.reduce(e,!1);return s&&this._forceRenderFooterRows(),t||n||s}_switchDataSource(e){this._data=[],ee$2(this.dataSource)&&this.dataSource.disconnect(this),this._renderChangeSubscription&&(this._renderChangeSubscription.unsubscribe(),this._renderChangeSubscription=null),e||(this._dataDiffer&&this._dataDiffer.diff([]),this._rowOutlet&&this._rowOutlet.viewContainer.clear()),this._dataSource=e}_observeRenderChanges(){if(!this.dataSource)return;let e;ee$2(this.dataSource)?e=this.dataSource.connect(this):My(this.dataSource)?e=this.dataSource:Array.isArray(this.dataSource)&&(e=Ty(this.dataSource)),this._renderChangeSubscription=ky([e,this.viewChange]).pipe(ia$1(this._onDestroy)).subscribe(([t,n])=>{this._data=t||[],this._renderedRange=n,this._dataStream.next(t),this.renderRows()})}_forceRenderHeaderRows(){this._headerRowOutlet.viewContainer.length>0&&this._headerRowOutlet.viewContainer.clear(),this._headerRowDefs.forEach((e,t)=>this._renderRow(this._headerRowOutlet,e,t)),this.updateStickyHeaderRowStyles()}_forceRenderFooterRows(){this._footerRowOutlet.viewContainer.length>0&&this._footerRowOutlet.viewContainer.clear(),this._footerRowDefs.forEach((e,t)=>this._renderRow(this._footerRowOutlet,e,t)),this.updateStickyFooterRowStyles()}_addStickyColumnStyles(e,t){let n=Array.from(t?.columns||[]).map(l=>{return this._columnDefsByName.get(l)}),s=n.map(l=>l.sticky),r=n.map(l=>l.stickyEnd);this._stickyStyler.updateStickyColumns(e,s,r,!this.fixedLayout||this._forceRecalculateCellWidths)}_getRenderedRows(e){let t=[];for(let n=0;n<e.viewContainer.length;n++){let s=e.viewContainer.get(n);t.push(s.rootNodes[0])}return t}_getRowDefs(e,t){if(this._rowDefs.length===1)return[this._rowDefs[0]];let n=[];if(this.multiTemplateDataRows)n=this._rowDefs.filter(s=>!s.when||s.when(t,e));else{let s=this._rowDefs.find(r=>r.when&&r.when(t,e))||this._defaultRowDef;s&&n.push(s)}return n.length,n}_getEmbeddedViewArgs(e,t){let n=e.rowDef,s={$implicit:e.data};return{templateRef:n.template,context:s,index:t}}_renderRow(e,t,n,s={}){let r=e.viewContainer.createEmbeddedView(t.template,s,n);return this._renderCellTemplateForItem(t,s),r}_renderCellTemplateForItem(e,t){for(let n of this._getCellTemplates(e))E$1.mostRecentCellOutlet&&E$1.mostRecentCellOutlet._viewContainer.createEmbeddedView(n,t);this._changeDetectorRef.markForCheck()}_updateRowIndexContext(){let e=this._rowOutlet.viewContainer;for(let t=0,n=e.length;t<n;t++){let r=e.get(t).context;r.count=n,r.first=t===0,r.last=t===n-1,r.even=t%2===0,r.odd=!r.even,this.multiTemplateDataRows?(r.dataIndex=this._renderRows[t].dataIndex,r.renderIndex=t):r.index=this._renderRows[t].dataIndex}}_getCellTemplates(e){return!e||!e.columns?[]:Array.from(e.columns,t=>{let n=this._columnDefsByName.get(t);return e.extractCellTemplate(n)})}_forceRenderDataRows(){this._dataDiffer.diff([]),this._rowOutlet.viewContainer.clear(),this.renderRows()}_checkStickyStates(){let e=(t,n)=>t||n.hasStickyChanged();this._headerRowDefs.reduce(e,!1)&&this.updateStickyHeaderRowStyles(),this._footerRowDefs.reduce(e,!1)&&this.updateStickyFooterRowStyles(),Array.from(this._columnDefsByName.values()).reduce(e,!1)&&(this._stickyColumnStylesNeedReset=!0,this.updateStickyColumnStyles())}_setupStickyStyler(){let e=this._dir?this._dir.value:`ltr`,t=this._injector;this._stickyStyler=new de$3(this._isNativeHtmlTable,this.stickyCssClass,this._platform.isBrowser,this.needsPositionStickyOnElement,e,this,t),(this._dir?this._dir.change:Ty()).pipe(ia$1(this._onDestroy)).subscribe(n=>{this._stickyStyler.direction=n,this.updateStickyColumnStyles()})}_setupVirtualScrolling(e){let t=typeof requestAnimationFrame<`u`?_y:by;this.viewChange.next({start:0,end:0}),e.renderedRangeStream.pipe(By(0,t),ia$1(this._onDestroy)).subscribe(this.viewChange),e.attach({dataStream:this._dataStream,measureRangeSize:(n,s)=>this._measureRangeSize(n,s)}),ky([e.renderedContentOffset,this._headerRowStickyUpdates]).pipe(ia$1(this._onDestroy)).subscribe(([n,s])=>{if(!(!s.sizes||!s.offsets||!s.elements))for(let r=0;r<s.elements.length;r++){let l=s.elements[r];if(l){let c=s.offsets[r],d=n!==0?Math.max(n-c,c):-c;for(let f of l)f.style.top=`${-d}px`}}}),ky([e.renderedContentOffset,this._footerRowStickyUpdates]).pipe(ia$1(this._onDestroy)).subscribe(([n,s])=>{if(!(!s.sizes||!s.offsets||!s.elements))for(let r=0;r<s.elements.length;r++){let l=s.elements[r];if(l)for(let c of l)c.style.bottom=`${n+s.offsets[r]}px`}})}_getOwnDefs(e){return e.filter(t=>!t._table||t._table===this)}_updateNoDataRow(){let e=this._customNoDataRow||this._noDataRow;if(!e)return;let t=this._rowOutlet.viewContainer.length===0;if(t===this._isShowingNoDataRow)return;let n=this._noDataRowOutlet.viewContainer;if(t){let s=n.createEmbeddedView(e.templateRef),r=s.rootNodes[0];if(s.rootNodes.length===1&&r?.nodeType===this._document.ELEMENT_NODE){r.setAttribute(`role`,`row`),r.classList.add(...e._contentClassNames);let l=r.querySelectorAll(e._cellSelector);for(let c=0;c<l.length;c++)l[c].classList.add(...e._cellClassNames)}}else n.clear();this._isShowingNoDataRow=t,this._changeDetectorRef.markForCheck()}_measureRangeSize(e,t){if(e.start>=e.end||t!==`vertical`)return 0;let n=this.viewChange.value,s=this._rowOutlet.viewContainer;e.start<n.start||(e.end,n.end);let r=e.start-n.start,l=e.end-e.start,c,d;for(let p=0;p<l;p++){let _=s.get(p+r);if(_&&_.rootNodes.length){c=d=_.rootNodes[0];break}}for(let p=l-1;p>-1;p--){let _=s.get(p+r);if(_&&_.rootNodes.length){d=_.rootNodes[_.rootNodes.length-1];break}}let f=c?.getBoundingClientRect?.(),g=d?.getBoundingClientRect?.();return f&&g?g.bottom-f.top:0}_virtualScrollEnabled(){return!this._disableVirtualScrolling&&this._virtualScrollViewport!=null}static ɵfac=function(t){return new(t||i)};static ɵcmp=NC({type:i,selectors:[[`cdk-table`],[`table`,`cdk-table`,``]],contentQueries:function(t,n,s){if(t&1&&Wg(s,Xe$1,5)(s,I$1,5)(s,se$1,5)(s,Q,5)(s,W$1,5),t&2){let r;Ww(r=qw())&&(n._noDataRow=r.first),Ww(r=qw())&&(n._contentColumnDefs=r),Ww(r=qw())&&(n._contentRowDefs=r),Ww(r=qw())&&(n._contentHeaderRowDefs=r),Ww(r=qw())&&(n._contentFooterRowDefs=r)}},hostAttrs:[1,`cdk-table`],hostVars:2,hostBindings:function(t,n){t&2&&Jg(`cdk-table-fixed-layout`,n.fixedLayout)},inputs:{trackBy:`trackBy`,dataSource:`dataSource`,multiTemplateDataRows:[2,`multiTemplateDataRows`,`multiTemplateDataRows`,mo$2],fixedLayout:[2,`fixedLayout`,`fixedLayout`,mo$2],recycleRows:[2,`recycleRows`,`recycleRows`,mo$2]},outputs:{contentChanged:`contentChanged`},exportAs:[`cdkTable`],features:[Mb$1([{provide:b$1,useExisting:i},{provide:j$2,useValue:null}])],ngContentSelectors:lt$3,decls:5,vars:2,consts:[[`role`,`rowgroup`],[`headerRowOutlet`,``],[`rowOutlet`,``],[`noDataRowOutlet`,``],[`footerRowOutlet`,``]],template:function(t,n){t&1&&(Uw(at$2),Gw(0),Gw(1,1),Nw(2,ct$3,1,0),Nw(3,dt$2,7,0)(4,ht$2,4,0)),t&2&&(lI(2),xw(n._isServer?2:-1),lI(),xw(n._isNativeHtmlTable?3:4))},dependencies:[ge$2,_e$1,we$1,ye$1],styles:[`.cdk-table-fixed-layout {
  table-layout: fixed;
}
`],encapsulation:2,changeDetection:1})}return i})();function te(i,o){return i.concat(Array.from(o))}function qe$1(i,o){let e=o.toUpperCase(),t=i.viewContainer.element.nativeElement;for(;t;){let n=t.nodeType===1?t.nodeName:null;if(n===e)return t;if(n===`TABLE`)break;t=t.parentNode}return null}var Ce$1=class{_multiple;_emitChanges;compareWith;_selection=new Set;_deselectedToEmit=[];_selectedToEmit=[];_selected=null;get selected(){return this._selected||(this._selected=Array.from(this._selection.values())),this._selected}changed=new ee$3;bulk={select:o=>this._select(o),deselect:o=>this._deselect(o),setSelection:o=>this._setSelection(o)};constructor(o=!1,e,t=!0,n){this._multiple=o,this._emitChanges=t,this.compareWith=n,e&&e.length&&(o?e.forEach(s=>this._markSelected(s)):this._markSelected(e[0]),this._selectedToEmit.length=0)}select(...o){return this._select(o)}deselect(...o){return this._deselect(o)}setSelection(...o){return this._setSelection(o)}toggle(o){return this.isSelected(o)?this.deselect(o):this.select(o)}clear(o=!0){this._unmarkAll();let e=this._hasQueuedChanges();return o&&this._emitChangeEvent(),e}isSelected(o){return this._selection.has(this._getConcreteValue(o))}isEmpty(){return this._selection.size===0}hasValue(){return!this.isEmpty()}sort(o){this._multiple&&this.selected&&this._selected.sort(o)}isMultipleSelection(){return this._multiple}_select(o){this._verifyValueAssignment(o),o.forEach(t=>this._markSelected(t));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}_deselect(o){this._verifyValueAssignment(o),o.forEach(t=>this._unmarkSelected(t));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}_setSelection(o){this._verifyValueAssignment(o);let e=this.selected,t=new Set(o.map(s=>this._getConcreteValue(s)));o.forEach(s=>this._markSelected(s)),e.filter(s=>!t.has(this._getConcreteValue(s,t))).forEach(s=>this._unmarkSelected(s));let n=this._hasQueuedChanges();return this._emitChangeEvent(),n}_emitChangeEvent(){this._selected=null,(this._selectedToEmit.length||this._deselectedToEmit.length)&&(this.changed.next({source:this,added:this._selectedToEmit,removed:this._deselectedToEmit}),this._deselectedToEmit=[],this._selectedToEmit=[])}_markSelected(o){o=this._getConcreteValue(o),this.isSelected(o)||(this._multiple||this._unmarkAll(),this.isSelected(o)||this._selection.add(o),this._emitChanges&&this._selectedToEmit.push(o))}_unmarkSelected(o){o=this._getConcreteValue(o),this.isSelected(o)&&(this._selection.delete(o),this._emitChanges&&this._deselectedToEmit.push(o))}_unmarkAll(){this.isEmpty()||this._selection.forEach(o=>this._unmarkSelected(o))}_verifyValueAssignment(o){o.length>1&&this._multiple}_hasQueuedChanges(){return!!(this._deselectedToEmit.length||this._selectedToEmit.length)}_getConcreteValue(o,e){if(this.compareWith){e=e??this._selection;for(let t of e)if(this.compareWith(o,t))return t;return o}else return o}};var ut$2=(()=>{class i{_listeners=[];notify(e,t){for(let n of this._listeners)n(e,t)}listen(e){return this._listeners.push(e),()=>{this._listeners=this._listeners.filter(t=>e!==t)}}ngOnDestroy(){this._listeners=[]}static ɵfac=function(t){return new(t||i)};static ɵprov=Oe$3({token:i,factory:i.ɵfac})}return i})();var mt$3=[[[`caption`]],[[`colgroup`],[`col`]],`*`];var pt$2=[`caption`,`colgroup, col`,`*`];function _t$1(i,o){i&1&&Gw(0,2)}function gt$2(i,o){i&1&&(cs$1(0,`thead`,0),Pg(1,1),Ju$1(),cs$1(2,`tbody`,2),Pg(3,3)(4,4),Ju$1(),cs$1(5,`tfoot`,0),Pg(6,5),Ju$1())}function yt$2(i,o){i&1&&Pg(0,1)(1,3)(2,4)(3,5)}var Ge$1=(()=>{class i extends De$1{stickyCssClass=`mat-mdc-table-sticky`;needsPositionStickyOnElement=!1;static ɵfac=(()=>{let e;return function(n){return(e||(e=Cp$1(i)))(n||i)}})();static ɵcmp=NC({type:i,selectors:[[`mat-table`],[`table`,`mat-table`,``]],hostAttrs:[1,`mat-mdc-table`,`mdc-data-table__table`],hostVars:2,hostBindings:function(t,n){t&2&&Jg(`mat-table-fixed-layout`,n.fixedLayout)},exportAs:[`matTable`],features:[Mb$1([{provide:De$1,useExisting:i},{provide:b$1,useExisting:i},{provide:j$2,useValue:null}]),Dg],ngContentSelectors:pt$2,decls:5,vars:2,consts:[[`role`,`rowgroup`],[`headerRowOutlet`,``],[`role`,`rowgroup`,1,`mdc-data-table__content`],[`rowOutlet`,``],[`noDataRowOutlet`,``],[`footerRowOutlet`,``]],template:function(t,n){t&1&&(Uw(mt$3),Gw(0),Gw(1,1),Nw(2,_t$1,1,0),Nw(3,gt$2,7,0)(4,yt$2,4,0)),t&2&&(lI(2),xw(n._isServer?2:-1),lI(),xw(n._isNativeHtmlTable?3:4))},dependencies:[ge$2,_e$1,we$1,ye$1],styles:[`.mat-mdc-table-sticky {
  position: sticky !important;
}

mat-table {
  display: block;
}

mat-header-row {
  min-height: var(--%NS%mat-table-header-container-height, 56px);
}

mat-row {
  min-height: var(--%NS%mat-table-row-item-container-height, 52px);
}

mat-footer-row {
  min-height: var(--%NS%mat-table-footer-container-height, 52px);
}

mat-row, mat-header-row, mat-footer-row {
  display: flex;
  border-width: 0;
  border-bottom-width: 1px;
  border-style: solid;
  align-items: center;
  box-sizing: border-box;
}

mat-cell:first-of-type, mat-header-cell:first-of-type, mat-footer-cell:first-of-type {
  padding-left: 24px;
}
[dir=rtl] mat-cell:first-of-type:not(:only-of-type), [dir=rtl] mat-header-cell:first-of-type:not(:only-of-type), [dir=rtl] mat-footer-cell:first-of-type:not(:only-of-type) {
  padding-left: 0;
  padding-right: 24px;
}
mat-cell:last-of-type, mat-header-cell:last-of-type, mat-footer-cell:last-of-type {
  padding-right: 24px;
}
[dir=rtl] mat-cell:last-of-type:not(:only-of-type), [dir=rtl] mat-header-cell:last-of-type:not(:only-of-type), [dir=rtl] mat-footer-cell:last-of-type:not(:only-of-type) {
  padding-right: 0;
  padding-left: 24px;
}

mat-cell, mat-header-cell, mat-footer-cell {
  flex: 1;
  display: flex;
  align-items: center;
  overflow: hidden;
  word-wrap: break-word;
  min-height: inherit;
}

.mat-mdc-table {
  min-width: 100%;
  border: 0;
  border-spacing: 0;
  table-layout: auto;
  white-space: normal;
  background-color: var(--%NS%mat-table-background-color, var(--%NS%mat-sys-surface));
}

.mat-table-fixed-layout {
  table-layout: fixed;
}

.mdc-data-table__cell {
  box-sizing: border-box;
  overflow: hidden;
  text-align: start;
  text-overflow: ellipsis;
}

.mdc-data-table__cell,
.mdc-data-table__header-cell {
  padding: 0 16px;
}

.mat-mdc-header-row {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  height: var(--%NS%mat-table-header-container-height, 56px);
  color: var(--%NS%mat-table-header-headline-color, var(--%NS%mat-sys-on-surface, rgba(0, 0, 0, 0.87)));
  font-family: var(--%NS%mat-table-header-headline-font, var(--%NS%mat-sys-title-small-font, Roboto, sans-serif));
  line-height: var(--%NS%mat-table-header-headline-line-height, var(--%NS%mat-sys-title-small-line-height));
  font-size: var(--%NS%mat-table-header-headline-size, var(--%NS%mat-sys-title-small-size, 14px));
  font-weight: var(--%NS%mat-table-header-headline-weight, var(--%NS%mat-sys-title-small-weight, 500));
}

.mat-mdc-row {
  height: var(--%NS%mat-table-row-item-container-height, 52px);
  color: var(--%NS%mat-table-row-item-label-text-color, var(--%NS%mat-sys-on-surface, rgba(0, 0, 0, 0.87)));
}

.mat-mdc-row,
.mdc-data-table__content {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--%NS%mat-table-row-item-label-text-font, var(--%NS%mat-sys-body-medium-font, Roboto, sans-serif));
  line-height: var(--%NS%mat-table-row-item-label-text-line-height, var(--%NS%mat-sys-body-medium-line-height));
  font-size: var(--%NS%mat-table-row-item-label-text-size, var(--%NS%mat-sys-body-medium-size, 14px));
  font-weight: var(--%NS%mat-table-row-item-label-text-weight, var(--%NS%mat-sys-body-medium-weight));
}

.mat-mdc-footer-row {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  height: var(--%NS%mat-table-footer-container-height, 52px);
  color: var(--%NS%mat-table-row-item-label-text-color, var(--%NS%mat-sys-on-surface, rgba(0, 0, 0, 0.87)));
  font-family: var(--%NS%mat-table-footer-supporting-text-font, var(--%NS%mat-sys-body-medium-font, Roboto, sans-serif));
  line-height: var(--%NS%mat-table-footer-supporting-text-line-height, var(--%NS%mat-sys-body-medium-line-height));
  font-size: var(--%NS%mat-table-footer-supporting-text-size, var(--%NS%mat-sys-body-medium-size, 14px));
  font-weight: var(--%NS%mat-table-footer-supporting-text-weight, var(--%NS%mat-sys-body-medium-weight));
  letter-spacing: var(--%NS%mat-table-footer-supporting-text-tracking, var(--%NS%mat-sys-body-medium-tracking));
}

.mat-mdc-header-cell {
  border-bottom-color: var(--%NS%mat-table-row-item-outline-color, var(--%NS%mat-sys-outline, rgba(0, 0, 0, 0.12)));
  border-bottom-width: var(--%NS%mat-table-row-item-outline-width, 1px);
  border-bottom-style: solid;
  letter-spacing: var(--%NS%mat-table-header-headline-tracking, var(--%NS%mat-sys-title-small-tracking));
  font-weight: inherit;
  line-height: inherit;
  box-sizing: border-box;
  text-overflow: ellipsis;
  overflow: hidden;
  outline: none;
  text-align: start;
}
.mdc-data-table__row:last-child > .mat-mdc-header-cell {
  border-bottom: none;
}

.mat-mdc-cell {
  border-bottom-color: var(--%NS%mat-table-row-item-outline-color, var(--%NS%mat-sys-outline, rgba(0, 0, 0, 0.12)));
  border-bottom-width: var(--%NS%mat-table-row-item-outline-width, 1px);
  border-bottom-style: solid;
  letter-spacing: var(--%NS%mat-table-row-item-label-text-tracking, var(--%NS%mat-sys-body-medium-tracking));
  line-height: inherit;
}
.mdc-data-table__row:last-child > .mat-mdc-cell {
  border-bottom: none;
}

.mat-mdc-footer-cell {
  letter-spacing: var(--%NS%mat-table-row-item-label-text-tracking, var(--%NS%mat-sys-body-medium-tracking));
}

mat-row.mat-mdc-row,
mat-header-row.mat-mdc-header-row,
mat-footer-row.mat-mdc-footer-row {
  border-bottom: none;
}

.mat-mdc-table tbody,
.mat-mdc-table tfoot,
.mat-mdc-table thead,
.mat-mdc-cell,
.mat-mdc-footer-cell,
.mat-mdc-header-row,
.mat-mdc-row,
.mat-mdc-footer-row,
.mat-mdc-table .mat-mdc-header-cell {
  background: inherit;
}

.mat-mdc-table mat-header-row.mat-mdc-header-row,
.mat-mdc-table mat-row.mat-mdc-row,
.mat-mdc-table mat-footer-row.mat-mdc-footer-cell {
  height: unset;
}

mat-header-cell.mat-mdc-header-cell,
mat-cell.mat-mdc-cell,
mat-footer-cell.mat-mdc-footer-cell {
  align-self: stretch;
}
`],encapsulation:2,changeDetection:1})}return i})();var ri$2=(()=>{class i extends ie$1{static ɵfac=(()=>{let e;return function(n){return(e||(e=Cp$1(i)))(n||i)}})();static ɵdir=En$3({type:i,selectors:[[``,`matCellDef`,``]],features:[Mb$1([{provide:ie$1,useExisting:i}]),Dg]})}return i})();var ai$2=(()=>{class i extends ne{static ɵfac=(()=>{let e;return function(n){return(e||(e=Cp$1(i)))(n||i)}})();static ɵdir=En$3({type:i,selectors:[[``,`matHeaderCellDef`,``]],features:[Mb$1([{provide:ne,useExisting:i}]),Dg]})}return i})();var li$2=(()=>{class i extends oe$2{static ɵfac=(()=>{let e;return function(n){return(e||(e=Cp$1(i)))(n||i)}})();static ɵdir=En$3({type:i,selectors:[[``,`matFooterCellDef`,``]],features:[Mb$1([{provide:oe$2,useExisting:i}]),Dg]})}return i})();var ci$2=(()=>{class i extends I$1{get name(){return this._name}set name(e){this._setNameInput(e)}_updateColumnCssClassName(){super._updateColumnCssClassName(),this._columnCssClassName.push(`mat-column-${this.cssClassFriendlyName}`)}static ɵfac=(()=>{let e;return function(n){return(e||(e=Cp$1(i)))(n||i)}})();static ɵdir=En$3({type:i,selectors:[[``,`matColumnDef`,``]],inputs:{name:[0,`matColumnDef`,`name`]},features:[Mb$1([{provide:I$1,useExisting:i}]),Dg]})}return i})();var di$2=(()=>{class i extends $e$1{static ɵfac=(()=>{let e;return function(n){return(e||(e=Cp$1(i)))(n||i)}})();static ɵdir=En$3({type:i,selectors:[[`mat-header-cell`],[`th`,`mat-header-cell`,``]],hostAttrs:[`role`,`columnheader`,1,`mat-mdc-header-cell`,`mdc-data-table__header-cell`],features:[Dg]})}return i})();var hi$1=(()=>{class i extends Ke{static ɵfac=(()=>{let e;return function(n){return(e||(e=Cp$1(i)))(n||i)}})();static ɵdir=En$3({type:i,selectors:[[`mat-footer-cell`],[`td`,`mat-footer-cell`,``]],hostAttrs:[1,`mat-mdc-footer-cell`,`mdc-data-table__cell`],features:[Dg]})}return i})();var fi$1=(()=>{class i extends Ze{static ɵfac=(()=>{let e;return function(n){return(e||(e=Cp$1(i)))(n||i)}})();static ɵdir=En$3({type:i,selectors:[[`mat-cell`],[`td`,`mat-cell`,``]],hostAttrs:[1,`mat-mdc-cell`,`mdc-data-table__cell`],features:[Dg]})}return i})();var ui$1=(()=>{class i extends Q{static ɵfac=(()=>{let e;return function(n){return(e||(e=Cp$1(i)))(n||i)}})();static ɵdir=En$3({type:i,selectors:[[``,`matHeaderRowDef`,``]],inputs:{columns:[0,`matHeaderRowDef`,`columns`],sticky:[2,`matHeaderRowDefSticky`,`sticky`,mo$2]},features:[Mb$1([{provide:Q,useExisting:i}]),Dg]})}return i})();var mi$2=(()=>{class i extends W$1{static ɵfac=(()=>{let e;return function(n){return(e||(e=Cp$1(i)))(n||i)}})();static ɵdir=En$3({type:i,selectors:[[``,`matFooterRowDef`,``]],inputs:{columns:[0,`matFooterRowDef`,`columns`],sticky:[2,`matFooterRowDefSticky`,`sticky`,mo$2]},features:[Mb$1([{provide:W$1,useExisting:i}]),Dg]})}return i})();var pi$1=(()=>{class i extends se$1{static ɵfac=(()=>{let e;return function(n){return(e||(e=Cp$1(i)))(n||i)}})();static ɵdir=En$3({type:i,selectors:[[``,`matRowDef`,``]],inputs:{columns:[0,`matRowDefColumns`,`columns`],when:[0,`matRowDefWhen`,`when`]},features:[Mb$1([{provide:se$1,useExisting:i}]),Dg]})}return i})();var _i$1=(()=>{class i extends ue$2{static ɵfac=(()=>{let e;return function(n){return(e||(e=Cp$1(i)))(n||i)}})();static ɵcmp=NC({type:i,selectors:[[`mat-header-row`],[`tr`,`mat-header-row`,``]],hostAttrs:[`role`,`row`,1,`mat-mdc-header-row`,`mdc-data-table__header-row`],exportAs:[`matHeaderRow`],features:[Mb$1([{provide:ue$2,useExisting:i}]),Dg],decls:1,vars:0,consts:[[`cdkCellOutlet`,``]],template:function(t,n){t&1&&Pg(0,0)},dependencies:[E$1],encapsulation:2,changeDetection:1})}return i})();var gi$1=(()=>{class i extends me$1{static ɵfac=(()=>{let e;return function(n){return(e||(e=Cp$1(i)))(n||i)}})();static ɵcmp=NC({type:i,selectors:[[`mat-footer-row`],[`tr`,`mat-footer-row`,``]],hostAttrs:[`role`,`row`,1,`mat-mdc-footer-row`,`mdc-data-table__row`],exportAs:[`matFooterRow`],features:[Mb$1([{provide:me$1,useExisting:i}]),Dg],decls:1,vars:0,consts:[[`cdkCellOutlet`,``]],template:function(t,n){t&1&&Pg(0,0)},dependencies:[E$1],encapsulation:2,changeDetection:1})}return i})();var yi$1=(()=>{class i extends pe$2{static ɵfac=(()=>{let e;return function(n){return(e||(e=Cp$1(i)))(n||i)}})();static ɵcmp=NC({type:i,selectors:[[`mat-row`],[`tr`,`mat-row`,``]],hostAttrs:[`role`,`row`,1,`mat-mdc-row`,`mdc-data-table__row`],exportAs:[`matRow`],features:[Mb$1([{provide:pe$2,useExisting:i}]),Dg],decls:1,vars:0,consts:[[`cdkCellOutlet`,``]],template:function(t,n){t&1&&Pg(0,0)},dependencies:[E$1],encapsulation:2,changeDetection:1})}return i})();var ki$1=(()=>{class i{constructor(){this.matTable=g$2(Ge$1),this.tableService=g$2(Y$3),this.innerElm=g$2(it$2),this.ngZone=g$2(U$4),this.destroyRef=g$2(X),this.cellData=Zj.required(),this.cell=Zj.required(),this.rowIndex=Zj.required(),this.editable=qe$3(()=>!this.tableService.disableEditing()&&this.cell().cellEditor&&!this.cell().cellEditorOptions?.disabled?.(this.cellData()))}ngAfterViewInit(){if(!this.matTable||!this.matTable.dataSource)throw new Error(`MatTable [dataSource] is required`);if(this.cellElement=this.innerElm.nativeElement.parentElement,!this.cellElement||this.cellElement.tagName!==`TD`)throw new Error(`No parent td element found for TableCellEventsDirective`);this.ngZone.runOutsideAngular(()=>{Ys$1(this.cellElement,`keydown`).pipe(Q_$1(this.destroyRef)).subscribe(e=>{this.onKeydown(e)}),Ys$1(this.cellElement,`focus`).pipe(Q_$1(this.destroyRef)).subscribe(()=>{this.onFocus()}),Ys$1(this.cellElement,`click`).pipe(Q_$1(this.destroyRef)).subscribe(e=>{this.onClick(e)})})}getTableData(){return this.matTable.dataSource}isDisabledCellEvent(e){let t=e.target;return t?!!t.closest?.(`.disable-td-event, .cdk-overlay-pane`)||!this.cellElement.contains(t):!1}onClick(e){if(!e.shiftKey&&this.isDisabledCellEvent(e))return;let t=this.cell().click;t?(e.stopImmediatePropagation(),e.preventDefault(),this.ngZone.run(()=>t(this.cellData(),this.cell(),e))):this.editable()&&(e.stopImmediatePropagation(),e.preventDefault(),this.ngZone.run(()=>this.editMode()))}onFocus(){this.editable()&&this.ngZone.run(()=>this.editMode())}onKeydown(e){switch(e.key){case`ArrowUp`:case`ArrowDown`:if(!e.shiftKey&&this.isDisabledCellEvent(e))return;e.preventDefault(),e.stopImmediatePropagation(),this.getNextEditableSiblingOnAnotherRow(e.key===`ArrowDown`?`after`:`before`);break;case`Tab`:case`ArrowRight`:case`ArrowLeft`:{e.preventDefault(),e.stopImmediatePropagation();let t=e.key===`ArrowLeft`||e.key===`Tab`&&e.shiftKey?`before`:`after`;this.getNextEditableSibling(t);break}default:break}}editMode(){this.tableService.startInlineEditing(this.cell().key+`_`+this.rowIndex())}getNextEditableSibling(e){let t=this.getAllSiblingCells(),n=t.indexOf(this.cellElement),r=(e===`before`?t.slice(0,n).reverse():t.slice(n+1)).filter(l=>this.matchingCell(l,!1));if(r?.[0])r[0].focus();else return this.getNextEditableSiblingOnAnotherRow(e,!1)}getNextEditableSiblingOnAnotherRow(e,t=!0){let n=this.getAllSiblingRows(),s=n.indexOf(this.cellElement.parentElement),l=(e===`before`?n.slice(0,s).reverse():n.slice(s+1)).map(c=>{let d=Array.from(c.childNodes);return(!t&&e===`before`?d.reverse():d).find(f=>this.matchingCell(f,t))}).filter(c=>!!c);l?.[0]&&l[0].focus()}getAllSiblingCells(){let t=this.cellElement.parentElement?.children;return t?Array.from(t):[]}getAllSiblingRows(){let t=this.cellElement.parentElement?.parentElement?.children;return t?Array.from(t):[]}matchingCell(e,t){return(!t||e.classList?.contains(`cdk-column-`+this.cell().key.replace(`.`,`-`)))&&e.classList?.contains(`editable`)}static{this.ɵfac=function(t){return new(t||i)}}static{this.ɵdir=En$3({type:i,selectors:[[``,`lab900TableCellEvents`,``]],inputs:{cellData:[1,`cellData`],cell:[1,`cell`],rowIndex:[1,`rowIndex`]}})}}return i})();var f$1=`primary`;var ze$1=Symbol(`RouteTitle`);var qt$3=class{params;constructor(n){this.params=n||{}}has(n){return Object.prototype.hasOwnProperty.call(this.params,n)}get(n){if(this.has(n)){let e=this.params[n];return Array.isArray(e)?e[0]:e}return null}getAll(n){if(this.has(n)){let e=this.params[n];return Array.isArray(e)?e:[e]}return[]}get keys(){return Object.keys(this.params)}};function oe$1(t){return new qt$3(t)}function $t$3(t,n,e){for(let r=0;r<t.length;r++){let i=t[r],o=n[r];if(i[0]===`:`)e[i.substring(1)]=o;else if(i!==o.path)return!1}return!0}function en$2(t,n,e){let r=e.path.split(`/`),i=r.indexOf(`**`);if(i===-1){if(r.length>t.length||e.pathMatch===`full`&&(n.hasChildren()||r.length<t.length))return null;let s={},u=t.slice(0,r.length);return $t$3(r,u,s)?{consumed:u,posParams:s}:null}if(i!==r.lastIndexOf(`**`))return null;let o=r.slice(0,i),a=r.slice(i+1);if(o.length+a.length>t.length||e.pathMatch===`full`&&n.hasChildren()&&e.path!==`**`)return null;let c={};return!$t$3(o,t.slice(0,o.length),c)||!$t$3(a,t.slice(t.length-a.length),c)?null:{consumed:t,posParams:c}}function st$3(t){return new Promise((n,e)=>{t.pipe(qy()).subscribe({next:r=>n(r),error:r=>e(r)})})}function Gn$1(t,n){if(t.length!==n.length)return!1;for(let e=0;e<t.length;++e)if(!q$1(t[e],n[e]))return!1;return!0}function q$1(t,n){let e=t?Bt$1(t):void 0,r=n?Bt$1(n):void 0;if(!e||!r||e.length!=r.length)return!1;let i;for(let o=0;o<e.length;o++)if(i=e[o],!tn$1(t[i],n[i]))return!1;return!0}function Bt$1(t){return[...Object.keys(t),...Object.getOwnPropertySymbols(t)]}function tn$1(t,n){if(Array.isArray(t)&&Array.isArray(n)){if(t.length!==n.length)return!1;let e=[...t].sort(),r=[...n].sort();return e.every((i,o)=>r[o]===i)}else return t===n}function Wn$1(t){return t.length>0?t[t.length-1]:null}function ce$1(t){return My(t)?t:uo$2(t)?Le$3(Promise.resolve(t)):Ty(t)}function rn$2(t){return My(t)?st$3(t):Promise.resolve(t)}var Qn$1={exact:on$2,subset:an$2};var nn$2={exact:Kn$1,subset:Yn,ignored:()=>!0};var ir={paths:`exact`,fragment:`ignored`,matrixParams:`ignored`,queryParams:`exact`};var pe$1={paths:`subset`,fragment:`ignored`,matrixParams:`ignored`,queryParams:`subset`};function or(t,n,e){let r=t instanceof A?t:n.parseUrl(t);return qe$3(()=>Vt$2(n.lastSuccessfulNavigation()?.finalUrl??new A,r,q$2(q$2({},pe$1),e)))}function Vt$2(t,n,e){return Qn$1[e.paths](t.root,n.root,e.matrixParams)&&nn$2[e.queryParams](t.queryParams,n.queryParams)&&!(e.fragment===`exact`&&t.fragment!==n.fragment)}function Kn$1(t,n){return q$1(t,n)}function on$2(t,n,e){if(!ie(t.segments,n.segments)||!it$1(t.segments,n.segments,e)||t.numberOfChildren!==n.numberOfChildren)return!1;for(let r in n.children)if(!t.children[r]||!on$2(t.children[r],n.children[r],e))return!1;return!0}function Yn(t,n){return Object.keys(n).length<=Object.keys(t).length&&Object.keys(n).every(e=>tn$1(t[e],n[e]))}function an$2(t,n,e){return sn$2(t,n,n.segments,e)}function sn$2(t,n,e,r){if(t.segments.length>e.length){let i=t.segments.slice(0,e.length);return!(!ie(i,e)||n.hasChildren()||!it$1(i,e,r))}else if(t.segments.length===e.length){if(!ie(t.segments,e)||!it$1(t.segments,e,r))return!1;for(let i in n.children)if(!t.children[i]||!an$2(t.children[i],n.children[i],r))return!1;return!0}else{let i=e.slice(0,t.segments.length),o=e.slice(t.segments.length);return!ie(t.segments,i)||!it$1(t.segments,i,r)||!t.children[f$1]?!1:sn$2(t.children[f$1],n,o,r)}}function it$1(t,n,e){return n.every((r,i)=>nn$2[e](t[i].parameters,r.parameters))}var A=class{root;queryParams;fragment;_queryParamMap;constructor(n=new m([],{}),e={},r=null){this.root=n,this.queryParams=e,this.fragment=r}get queryParamMap(){return this._queryParamMap??=oe$1(this.queryParams),this._queryParamMap}toString(){return Xn$1.serialize(this)}};var m=class{segments;children;parent=null;constructor(n,e){this.segments=n,this.children=e,Object.values(e).forEach(r=>r.parent=this)}hasChildren(){return this.numberOfChildren>0}get numberOfChildren(){return Object.keys(this.children).length}toString(){return ot$1(this)}};var Y$1=class{path;parameters;_parameterMap;constructor(n,e){this.path=n,this.parameters=e}get parameterMap(){return this._parameterMap??=oe$1(this.parameters),this._parameterMap}toString(){return un$1(this)}};function Zn$1(t,n){return ie(t,n)&&t.every((e,r)=>q$1(e.parameters,n[r].parameters))}function ie(t,n){return t.length!==n.length?!1:t.every((e,r)=>e.path===n[r].path)}function Jn$1(t,n){let e=[];return Object.entries(t.children).forEach(([r,i])=>{r===f$1&&(e=e.concat(n(i,r)))}),Object.entries(t.children).forEach(([r,i])=>{r!==f$1&&(e=e.concat(n(i,r)))}),e}var Se=(()=>{class t{static ɵfac=function(r){return new(r||t)};static ɵprov=Oe$3({token:t,factory:()=>new Z})}return t})();var Z=class{parse(n){let e=new Wt$3(n);return new A(e.parseRootSegment(),e.parseQueryParams(),e.parseFragment())}serialize(n){return`${`/${Te(n.root,!0)}`}${ri$1(n.queryParams)}${typeof n.fragment==`string`?`#${ei$1(n.fragment)}`:``}`}};var Xn$1=new Z;function ot$1(t){return t.segments.map(n=>un$1(n)).join(`/`)}function Te(t,n){if(!t.hasChildren())return ot$1(t);if(n){let e=t.children[f$1]?Te(t.children[f$1],!1):``,r=[];return Object.entries(t.children).forEach(([i,o])=>{i!==f$1&&r.push(`${i}:${Te(o,!1)}`)}),r.length>0?`${e}(${r.join(`//`)})`:e}else{let e=Jn$1(t,(r,i)=>i===f$1?[Te(t.children[f$1],!1)]:[`${i}:${Te(r,!1)}`]);return Object.keys(t.children).length===1&&t.children[f$1]!=null?`${ot$1(t)}/${e[0]}`:`${ot$1(t)}/(${e.join(`//`)})`}}function cn$2(t){return encodeURIComponent(t).replace(/%40/g,`@`).replace(/%3A/gi,`:`).replace(/%24/g,`$`).replace(/%2C/gi,`,`)}function rt$1(t){return cn$2(t).replace(/%3B/gi,`;`)}function ei$1(t){return encodeURI(t)}function Gt$2(t){return cn$2(t).replace(/\(/g,`%28`).replace(/\)/g,`%29`).replace(/%26/gi,`&`)}function at$1(t){return decodeURIComponent(t)}function Wr(t){return at$1(t.replace(/\+/g,`%20`))}function un$1(t){return`${Gt$2(t.path)}${ti$1(t.parameters)}`}function ti$1(t){return Object.entries(t).map(([n,e])=>`;${Gt$2(n)}=${Gt$2(e)}`).join(``)}function ri$1(t){let n=Object.entries(t).map(([e,r])=>Array.isArray(r)?r.map(i=>`${rt$1(e)}=${rt$1(i)}`).join(`&`):`${rt$1(e)}=${rt$1(r)}`).filter(e=>e);return n.length?`?${n.join(`&`)}`:``}var ni$1=/^[^\/()?;#]+/;function zt$1(t){let n=t.match(ni$1);return n?n[0]:``}var ii$1=/^[^\/()?;=#]+/;function oi$1(t){let n=t.match(ii$1);return n?n[0]:``}var ai$1=/^[^=?&#]+/;function si$1(t){let n=t.match(ai$1);return n?n[0]:``}var ci$1=/^[^&#]+/;function ui(t){let n=t.match(ci$1);return n?n[0]:``}var Wt$3=class{url;remaining;constructor(n){this.url=n,this.remaining=n}parseRootSegment(){for(;this.consumeOptional(`/`););return this.remaining===``||this.peekStartsWith(`?`)||this.peekStartsWith(`#`)?new m([],{}):new m([],this.parseChildren())}parseQueryParams(){let n={};if(this.consumeOptional(`?`))do this.parseQueryParam(n);while(this.consumeOptional(`&`));return n}parseFragment(){return this.consumeOptional(`#`)?decodeURIComponent(this.remaining):null}parseChildren(n=0){if(n>50)throw new C$2(4010,!1);if(this.remaining===``)return{};this.consumeOptional(`/`);let e=[];for(this.peekStartsWith(`(`)||e.push(this.parseSegment());this.peekStartsWith(`/`)&&!this.peekStartsWith(`//`)&&!this.peekStartsWith(`/(`);)this.capture(`/`),e.push(this.parseSegment());let r={};this.peekStartsWith(`/(`)&&(this.capture(`/`),r=this.parseParens(!0,n));let i={};return this.peekStartsWith(`(`)&&(i=this.parseParens(!1,n)),(e.length>0||Object.keys(r).length>0)&&(i[f$1]=new m(e,r)),i}parseSegment(){let n=zt$1(this.remaining);if(n===``&&this.peekStartsWith(`;`))throw new C$2(4009,!1);return this.capture(n),new Y$1(at$1(n),this.parseMatrixParams())}parseMatrixParams(){let n={};for(;this.consumeOptional(`;`);)this.parseParam(n);return n}parseParam(n){let e=oi$1(this.remaining);if(!e)return;this.capture(e);let r=``;if(this.consumeOptional(`=`)){let i=zt$1(this.remaining);i&&(r=i,this.capture(r))}n[at$1(e)]=at$1(r)}parseQueryParam(n){let e=si$1(this.remaining);if(!e)return;this.capture(e);let r=``;if(this.consumeOptional(`=`)){let a=ui(this.remaining);a&&(r=a,this.capture(r))}let i=Wr(e),o=Wr(r);if(Object.hasOwn(n,i)){let a=n[i];Array.isArray(a)||(a=[a],n[i]=a),a.push(o)}else n[i]=o}parseParens(n,e){let r=Object.create(null);for(this.capture(`(`);!this.consumeOptional(`)`)&&this.remaining.length>0;){let i=zt$1(this.remaining),o=this.remaining[i.length];if(o!==`/`&&o!==`)`&&o!==`;`)throw new C$2(4010,!1);let a;i.indexOf(`:`)>-1?(a=i.slice(0,i.indexOf(`:`)),this.capture(a),this.capture(`:`)):n&&(a=f$1);let c=this.parseChildren(e+1);r[a??f$1]=Object.keys(c).length===1&&c[f$1]?c[f$1]:new m([],c),this.consumeOptional(`//`)}return r}peekStartsWith(n){return this.remaining.startsWith(n)}consumeOptional(n){return this.peekStartsWith(n)?(this.remaining=this.remaining.substring(n.length),!0):!1}capture(n){if(!this.consumeOptional(n))throw new C$2(4011,!1)}};function ln$2(t){return t.segments.length>0?new m([],{[f$1]:t}):t}function hn$3(t){let n=Object.create(null);for(let[r,i]of Object.entries(t.children)){let o=hn$3(i);if(r===f$1&&o.segments.length===0&&o.hasChildren())for(let[a,c]of Object.entries(o.children))n[a]=c;else(o.segments.length>0||o.hasChildren())&&(n[r]=o)}return li$1(new m(t.segments,n))}function li$1(t){if(t.numberOfChildren===1&&t.children[f$1]){let n=t.children[f$1];return new m(t.segments.concat(n.segments),n.children)}return t}function J$1(t){return t instanceof A}function dn$2(t,n,e=null,r=null,i=new Z){return pn$2(fn$3(t),n,e,r,i)}function fn$3(t){let n;function e(o){let a={};for(let s of o.children){let u=e(s);a[s.outlet]=u}let c=new m(o.url,a);return o===t&&(n=c),c}let i=ln$2(e(t.root));return n??i}function pn$2(t,n,e,r,i){let o=t;for(;o.parent;)o=o.parent;if(n.length===0)return Ht$1(o,o,o,e,r,i);let a=hi(n);if(a.toRoot())return Ht$1(o,o,new m([],{}),e,r,i);let c=di$1(a,o,t),s=c.processChildren?Me(c.segmentGroup,c.index,a.commands):vn$2(c.segmentGroup,c.index,a.commands);return Ht$1(o,c.segmentGroup,s,e,r,i)}function ct$2(t){return typeof t==`object`&&t!=null&&!t.outlets&&!t.segmentPath}function Ue(t){return typeof t==`object`&&t!=null&&t.outlets}function Qr(t,n,e){t||=`ɵ`;let r=new A;return r.queryParams={[t]:n},e.parse(e.serialize(r)).queryParams[t]}function Ht$1(t,n,e,r,i,o){let a={};for(let[u,h]of Object.entries(r??{}))a[u]=Array.isArray(h)?h.map(v=>Qr(u,v,o)):Qr(u,h,o);let c;t===n?c=e:c=gn$3(t,n,e);return new A(ln$2(hn$3(c)),a,i)}function gn$3(t,n,e){let r=Object.create(null);return Object.entries(t.children).forEach(([i,o])=>{o===n?r[i]=e:r[i]=gn$3(o,n,e)}),new m(t.segments,r)}var ut$1=class{isAbsolute;numberOfDoubleDots;commands;constructor(n,e,r){if(this.isAbsolute=n,this.numberOfDoubleDots=e,this.commands=r,n&&r.length>0&&ct$2(r[0]))throw new C$2(4003,!1);let i=r.find(Ue);if(i&&i!==Wn$1(r))throw new C$2(4004,!1)}toRoot(){return this.isAbsolute&&this.commands.length===1&&this.commands[0]==`/`}};function hi(t){if(typeof t[0]==`string`&&t.length===1&&t[0]===`/`)return new ut$1(!0,0,t);let n=0,e=!1,r=t.reduce((i,o,a)=>{if(typeof o==`object`&&o!=null){if(o.outlets){let c={};return Object.entries(o.outlets).forEach(([s,u])=>{c[s]=typeof u==`string`?u.split(`/`):u}),[...i,{outlets:c}]}if(o.segmentPath)return[...i,o.segmentPath]}return typeof o!=`string`?[...i,o]:a===0?(o.split(`/`).forEach((c,s)=>{s==0&&c===`.`||(s==0&&c===``?e=!0:c===`..`?n++:c!=``&&i.push(c))}),i):[...i,o]},[]);return new ut$1(e,n,r)}var de$2=class{segmentGroup;processChildren;index;constructor(n,e,r){this.segmentGroup=n,this.processChildren=e,this.index=r}};function di$1(t,n,e){if(t.isAbsolute)return new de$2(n,!0,0);if(!e)return new de$2(n,!1,NaN);if(e.parent===null)return new de$2(e,!0,0);let r=ct$2(t.commands[0])?0:1;return fi(e,e.segments.length-1+r,t.numberOfDoubleDots)}function fi(t,n,e){let r=t,i=n,o=e;for(;o>i;){if(o-=i,r=r.parent,!r)throw new C$2(4005,!1);i=r.segments.length}return new de$2(r,!1,i-o)}function pi(t){return Ue(t[0])?t[0].outlets:{[f$1]:t}}function vn$2(t,n,e){if(t??=new m([],{}),t.segments.length===0&&t.hasChildren())return Me(t,n,e);let r=gi(t,n,e),i=e.slice(r.commandIndex);if(r.match&&r.pathIndex<t.segments.length){let o=new m(t.segments.slice(0,r.pathIndex),{});return o.children[f$1]=new m(t.segments.slice(r.pathIndex),t.children),Me(o,0,i)}else return r.match&&i.length===0?new m(t.segments,{}):r.match&&!t.hasChildren()?Qt$2(t,n,e):r.match?Me(t,0,i):Qt$2(t,n,e)}function Me(t,n,e){if(e.length===0)return new m(t.segments,{});{let r=pi(e),i=Object.create(null);if(Object.keys(r).some(o=>o!==f$1)&&t.children[f$1]&&t.numberOfChildren===1&&t.children[f$1].segments.length===0){let o=Me(t.children[f$1],n,e);return new m(t.segments,o.children)}return Object.entries(r).forEach(([o,a])=>{typeof a==`string`&&(a=[a]),a!==null&&(i[o]=vn$2(t.children[o],n,a))}),Object.entries(t.children).forEach(([o,a])=>{r[o]===void 0&&(i[o]=a)}),new m(t.segments,i)}}function gi(t,n,e){let r=0,i=n,o={match:!1,pathIndex:0,commandIndex:0};for(;i<t.segments.length;){if(r>=e.length)return o;let a=t.segments[i],c=e[r];if(Ue(c))break;let s=`${c}`,u=r<e.length-1?e[r+1]:null;if(i>0&&s===void 0)break;if(s&&u&&typeof u==`object`&&u.outlets===void 0){if(!Yr$1(s,u,a))return o;r+=2}else{if(!Yr$1(s,{},a))return o;r++}i++}return{match:!0,pathIndex:i,commandIndex:r}}function Qt$2(t,n,e){let r=t.segments.slice(0,n),i=0;for(;i<e.length;){let o=e[i];if(Ue(o))return new m(r,vi(o.outlets));if(i===0&&ct$2(e[0])){let s=t.segments[n];r.push(new Y$1(s.path,Kr$1(e[0]))),i++;continue}let a=Ue(o)?o.outlets[f$1]:`${o}`,c=i<e.length-1?e[i+1]:null;a&&c&&ct$2(c)?(r.push(new Y$1(a,Kr$1(c))),i+=2):(r.push(new Y$1(a,{})),i++)}return new m(r,{})}function vi(t){let n={};return Object.entries(t).forEach(([e,r])=>{typeof r==`string`&&(r=[r]),r!==null&&(n[e]=Qt$2(new m([],{}),0,r))}),n}function Kr$1(t){let n={};return Object.entries(t).forEach(([e,r])=>n[e]=`${r}`),n}function Yr$1(t,n,e){return t==e.path&&q$1(n,e.parameters)}var De=`imperative`;var C=(function(t){return t[t.NavigationStart=0]=`NavigationStart`,t[t.NavigationEnd=1]=`NavigationEnd`,t[t.NavigationCancel=2]=`NavigationCancel`,t[t.NavigationError=3]=`NavigationError`,t[t.RoutesRecognized=4]=`RoutesRecognized`,t[t.ResolveStart=5]=`ResolveStart`,t[t.ResolveEnd=6]=`ResolveEnd`,t[t.GuardsCheckStart=7]=`GuardsCheckStart`,t[t.GuardsCheckEnd=8]=`GuardsCheckEnd`,t[t.RouteConfigLoadStart=9]=`RouteConfigLoadStart`,t[t.RouteConfigLoadEnd=10]=`RouteConfigLoadEnd`,t[t.ChildActivationStart=11]=`ChildActivationStart`,t[t.ChildActivationEnd=12]=`ChildActivationEnd`,t[t.ActivationStart=13]=`ActivationStart`,t[t.ActivationEnd=14]=`ActivationEnd`,t[t.Scroll=15]=`Scroll`,t[t.NavigationSkipped=16]=`NavigationSkipped`,t})(C||{});var U$1=class{id;url;constructor(n,e){this.id=n,this.url=e}};var ae$1=class extends U$1{type=C.NavigationStart;navigationTrigger;restoredState;constructor(n,e,r=`imperative`,i=null){super(n,e),this.navigationTrigger=r,this.restoredState=i}toString(){return`NavigationStart(id: ${this.id}, url: '${this.url}')`}};var H$2=class extends U$1{urlAfterRedirects;type=C.NavigationEnd;constructor(n,e,r){super(n,e),this.urlAfterRedirects=r}toString(){return`NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`}};var b=(function(t){return t[t.Redirect=0]=`Redirect`,t[t.SupersededByNewNavigation=1]=`SupersededByNewNavigation`,t[t.NoDataFromResolver=2]=`NoDataFromResolver`,t[t.GuardRejected=3]=`GuardRejected`,t[t.Aborted=4]=`Aborted`,t})(b||{});var Oe=(function(t){return t[t.IgnoredSameUrlNavigation=0]=`IgnoredSameUrlNavigation`,t[t.IgnoredByUrlHandlingStrategy=1]=`IgnoredByUrlHandlingStrategy`,t})(Oe||{});var x$1=class extends U$1{reason;code;type=C.NavigationCancel;constructor(n,e,r,i){super(n,e),this.reason=r,this.code=i}toString(){return`NavigationCancel(id: ${this.id}, url: '${this.url}')`}};function mn$2(t){return t instanceof x$1&&(t.code===b.Redirect||t.code===b.SupersededByNewNavigation)}var G$1=class extends U$1{reason;code;type=C.NavigationSkipped;constructor(n,e,r,i){super(n,e),this.reason=r,this.code=i}};var se=class extends U$1{error;target;type=C.NavigationError;constructor(n,e,r,i){super(n,e),this.error=r,this.target=i}toString(){return`NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`}};var Pe=class extends U$1{urlAfterRedirects;state;type=C.RoutesRecognized;constructor(n,e,r,i){super(n,e),this.urlAfterRedirects=r,this.state=i}toString(){return`RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}};var lt$2=class extends U$1{urlAfterRedirects;state;type=C.GuardsCheckStart;constructor(n,e,r,i){super(n,e),this.urlAfterRedirects=r,this.state=i}toString(){return`GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}};var ht$1=class extends U$1{urlAfterRedirects;state;shouldActivate;type=C.GuardsCheckEnd;constructor(n,e,r,i,o){super(n,e),this.urlAfterRedirects=r,this.state=i,this.shouldActivate=o}toString(){return`GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`}};var dt$1=class extends U$1{urlAfterRedirects;state;type=C.ResolveStart;constructor(n,e,r,i){super(n,e),this.urlAfterRedirects=r,this.state=i}toString(){return`ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}};var ft$1=class extends U$1{urlAfterRedirects;state;type=C.ResolveEnd;constructor(n,e,r,i){super(n,e),this.urlAfterRedirects=r,this.state=i}toString(){return`ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}};var pt$1=class{route;type=C.RouteConfigLoadStart;constructor(n){this.route=n}toString(){return`RouteConfigLoadStart(path: ${this.route.path})`}};var gt$1=class{route;type=C.RouteConfigLoadEnd;constructor(n){this.route=n}toString(){return`RouteConfigLoadEnd(path: ${this.route.path})`}};var vt$1=class{snapshot;type=C.ChildActivationStart;constructor(n){this.snapshot=n}toString(){return`ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||``}')`}};var mt$2=class{snapshot;type=C.ChildActivationEnd;constructor(n){this.snapshot=n}toString(){return`ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||``}')`}};var yt$1=class{snapshot;type=C.ActivationStart;constructor(n){this.snapshot=n}toString(){return`ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||``}')`}};var Rt$2=class{snapshot;type=C.ActivationEnd;constructor(n){this.snapshot=n}toString(){return`ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||``}')`}};var ge$1=class{};var Le=class{};var ve$1=class{url;navigationBehaviorOptions;constructor(n,e){this.url=n,this.navigationBehaviorOptions=e}};function mi$1(t){return!(t instanceof ge$1)&&!(t instanceof ve$1)&&!(t instanceof Le)}var St$1=class{rootInjector;outlet=null;route=null;children;attachRef=null;get injector(){return this.route?.snapshot._environmentInjector??this.rootInjector}constructor(n){this.rootInjector=n,this.children=new Ce(this.rootInjector)}};var Ce=(()=>{class t{rootInjector;contexts=new Map;constructor(e){this.rootInjector=e}onChildOutletCreated(e,r){let i=this.getOrCreateContext(e);i.outlet=r,this.contexts.set(e,i)}onChildOutletDestroyed(e){let r=this.getContext(e);r&&(r.outlet=null,r.attachRef=null)}onOutletDeactivated(){let e=this.contexts;return this.contexts=new Map,e}onOutletReAttached(e){this.contexts=e}getOrCreateContext(e){let r=this.getContext(e);return r||(r=new St$1(this.rootInjector),this.contexts.set(e,r)),r}getContext(e){return this.contexts.get(e)||null}static ɵfac=function(r){return new(r||t)(J$2(me$3))};static ɵprov=P$1({token:t,factory:t.ɵfac,providedIn:`root`})}return t})();var Ct$1=class{_root;constructor(n){this._root=n}get root(){return this._root.value}parent(n){let e=this.pathFromRoot(n);return e.length>1?e[e.length-2]:null}children(n){let e=Kt$1(n,this._root);return e?e.children.map(r=>r.value):[]}firstChild(n){let e=Kt$1(n,this._root);return e&&e.children.length>0?e.children[0].value:null}siblings(n){let e=Yt$2(n,this._root);return e.length<2?[]:e[e.length-2].children.map(i=>i.value).filter(i=>i!==n)}pathFromRoot(n){return Yt$2(n,this._root).map(e=>e.value)}};function Kt$1(t,n){if(t===n.value)return n;for(let e of n.children){let r=Kt$1(t,e);if(r)return r}return null}function Yt$2(t,n){if(t===n.value)return[n];for(let e of n.children){let r=Yt$2(t,e);if(r.length)return r.unshift(n),r}return[]}var _=class{value;children;constructor(n,e){this.value=n,this.children=e}toString(){return`TreeNode(${this.value})`}};function he$1(t){let n={};return t&&t.children.forEach(e=>n[e.value.outlet]=e),n}var je=class extends Ct$1{snapshot;constructor(n,e){super(n),this.snapshot=e,sr(this,n)}toString(){return this.snapshot.toString()}};function yn$3(t,n){let e=yi(t,n),r=new gr([new Y$1(``,{})]),i=new gr({}),o=new gr({}),s=new W(r,i,new gr({}),new gr(``),o,f$1,t,e.root);return s.snapshot=e.root,new je(new _(s,[]),e)}function yi(t,n){return new xe(``,new _(new me([],{},{},``,{},f$1,t,null,{},n),[]))}var W=class{urlSubject;paramsSubject;queryParamsSubject;fragmentSubject;dataSubject;outlet;component;snapshot;_futureSnapshot;_routerState;_paramMap;_queryParamMap;title;url;params;queryParams;fragment;data;_localInjector;constructor(n,e,r,i,o,a,c,s){this.urlSubject=n,this.paramsSubject=e,this.queryParamsSubject=r,this.fragmentSubject=i,this.dataSubject=o,this.outlet=a,this.component=c,this._futureSnapshot=s,this.title=this.dataSubject?.pipe(Ye$2(u=>u[ze$1]))??Ty(void 0),this.url=n,this.params=e,this.queryParams=r,this.fragment=i,this.data=o}get routeConfig(){return this._futureSnapshot.routeConfig}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=this.params.pipe(Ye$2(n=>oe$1(n))),this._paramMap}get queryParamMap(){return this._queryParamMap??=this.queryParams.pipe(Ye$2(n=>oe$1(n))),this._queryParamMap}toString(){return this.snapshot?this.snapshot.toString():`Future(${this._futureSnapshot})`}};var Ri=`always`;function ar(t,n,e){let r,{routeConfig:i}=t;return n!==null&&(e===`always`||i?.path===``||!n.component&&!n.routeConfig?.loadComponent)?r={params:q$2(q$2({},n.params),t.params),data:q$2(q$2({},n.data),t.data),resolve:q$2(q$2(q$2(q$2({},t.data),n.data),i?.data),t._resolvedData)}:r={params:q$2({},t.params),data:q$2({},t.data),resolve:q$2(q$2({},t.data),t._resolvedData??{})},i&&Sn$2(i)&&(r.resolve[ze$1]=i.title),r}var me=class{url;params;queryParams;fragment;data;outlet;component;routeConfig;_resolve;_resolvedData;_routerState;_paramMap;_queryParamMap;_environmentInjector;get title(){return this.data?.[ze$1]}constructor(n,e,r,i,o,a,c,s,u,h){this.url=n,this.params=e,this.queryParams=r,this.fragment=i,this.data=o,this.outlet=a,this.component=c,this.routeConfig=s,this._resolve=u,this._environmentInjector=h}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=oe$1(this.params),this._paramMap}get queryParamMap(){return this._queryParamMap??=oe$1(this.queryParams),this._queryParamMap}toString(){return`Route(url:'${this.url.map(r=>r.toString()).join(`/`)}', path:'${this.routeConfig?this.routeConfig.path:``}')`}};var xe=class extends Ct$1{url;constructor(n,e){super(e),this.url=n,sr(this,e)}toString(){return Rn$1(this._root)}};function sr(t,n){n.value._routerState=t,n.children.forEach(e=>sr(t,e))}function Rn$1(t){let n=t.children.length>0?` { ${t.children.map(Rn$1).join(`, `)} } `:``;return`${t.value}${n}`}function Ft$2(t){if(t.snapshot){let n=t.snapshot,e=t._futureSnapshot;t.snapshot=e,q$1(n.queryParams,e.queryParams)||t.queryParamsSubject.next(e.queryParams),n.fragment!==e.fragment&&t.fragmentSubject.next(e.fragment),q$1(n.params,e.params)||t.paramsSubject.next(e.params),Gn$1(n.url,e.url)||t.urlSubject.next(e.url),q$1(n.data,e.data)||t.dataSubject.next(e.data)}else t.snapshot=t._futureSnapshot,t.dataSubject.next(t._futureSnapshot.data)}function Zt$2(t,n){let e=q$1(t.params,n.params)&&Zn$1(t.url,n.url),r=!t.parent!=!n.parent;return e&&!r&&(!t.parent||Zt$2(t.parent,n.parent))}function Sn$2(t){return typeof t.title==`string`||t.title===null}var Cn$1=new S$1(``);var cr=(()=>{class t{activated=null;get activatedComponentRef(){return this.activated}_activatedRoute=null;name=f$1;activateEvents=new Ke$2;deactivateEvents=new Ke$2;attachEvents=new Ke$2;detachEvents=new Ke$2;routerOutletData=Zj();parentContexts=g$2(Ce);location=g$2(Dn$2);changeDetector=g$2(Ls$1);inputBinder=g$2(At$1,{optional:!0});supportsBindingToComponentInputs=!0;ngOnChanges(e){if(e.name){let{firstChange:r,previousValue:i}=e.name;if(r)return;this.isTrackedInParentContexts(i)&&(this.deactivate(),this.parentContexts.onChildOutletDestroyed(i)),this.initializeOutletWithName()}}ngOnDestroy(){this.isTrackedInParentContexts(this.name)&&this.parentContexts.onChildOutletDestroyed(this.name),this.inputBinder?.unsubscribeFromRouteData(this)}isTrackedInParentContexts(e){return this.parentContexts.getContext(e)?.outlet===this}ngOnInit(){this.initializeOutletWithName()}initializeOutletWithName(){if(this.parentContexts.onChildOutletCreated(this.name,this),this.activated)return;let e=this.parentContexts.getContext(this.name);e?.route&&(e.attachRef?this.attach(e.attachRef,e.route):this.activateWith(e.route,e.injector))}get isActivated(){return!!this.activated}get component(){if(!this.activated)throw new C$2(4012,!1);return this.activated.instance}get activatedRoute(){if(!this.activated)throw new C$2(4012,!1);return this._activatedRoute}get activatedRouteData(){return this._activatedRoute?this._activatedRoute.snapshot.data:{}}detach(){if(!this.activated)throw new C$2(4012,!1);this.location.detach();let e=this.activated;return this.activated=null,this._activatedRoute=null,this.detachEvents.emit(e.instance),e}attach(e,r){this.activated=e,this._activatedRoute=r,this.location.insert(e.hostView),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.attachEvents.emit(e.instance)}deactivate(){if(this.activated){let e=this.component;this.activated.destroy(),this.activated=null,this._activatedRoute=null,this.deactivateEvents.emit(e)}}activateWith(e,r){if(this.isActivated)throw new C$2(4013,!1);this._activatedRoute=e;let i=this.location,a=e.snapshot.component,c=this.parentContexts.getOrCreateContext(this.name).children,s=new Jt$2(e,c,i.injector,this.routerOutletData);this.activated=i.createComponent(a,{index:i.length,injector:s,environmentInjector:r}),this.changeDetector.markForCheck(),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.activateEvents.emit(this.activated.instance)}static ɵfac=function(r){return new(r||t)};static ɵdir=En$3({type:t,selectors:[[`router-outlet`]],inputs:{name:`name`,routerOutletData:[1,`routerOutletData`]},outputs:{activateEvents:`activate`,deactivateEvents:`deactivate`,attachEvents:`attach`,detachEvents:`detach`},exportAs:[`outlet`],features:[sr$1]})}return t})();var Jt$2=class{route;childContexts;parent;outletData;constructor(n,e,r,i){this.route=n,this.childContexts=e,this.parent=r,this.outletData=i}get(n,e){return n===W?this.route:n===Ce?this.childContexts:n===Cn$1?this.outletData:this.parent.get(n,e)}};var At$1=new S$1(``);var ur=(()=>{class t{static ɵfac=function(r){return new(r||t)};static ɵcmp=NC({type:t,selectors:[[`ng-component`]],exportAs:[`emptyRouterOutlet`],decls:1,vars:0,template:function(r,i){r&1&&kg(0,`router-outlet`)},dependencies:[cr],encapsulation:2,changeDetection:1})}return t})();function lr(t){let n=t.children&&t.children.map(lr),e=n?Z$3(q$2({},t),{children:n}):q$2({},t);return!e.component&&!e.loadComponent&&(n||e.loadChildren)&&e.outlet&&e.outlet!==f$1&&(e.component=ur),e}function Si(t,n,e){let r=new Set;return{newlyCreatedRoutes:r,state:new je(ke(t,n._root,e?e._root:void 0,r),n)}}function ke(t,n,e,r){if(e&&t.shouldReuseRoute(n.value,e.value.snapshot)){let i=e.value;i._futureSnapshot=n.value;return new _(i,Ci(t,n,e,r))}else{if(t.shouldAttach(n.value)){let a=t.retrieve(n.value);if(a!==null){let c=a.route;return c.value._futureSnapshot=n.value,c.children=n.children.map(s=>ke(t,s,void 0,r)),c}}let i=wi(n.value);r.add(i);return new _(i,n.children.map(a=>ke(t,a,void 0,r)))}}function Ci(t,n,e,r){return n.children.map(i=>{for(let o of e.children)if(t.shouldReuseRoute(i.value,o.value.snapshot))return ke(t,i,o,r);return ke(t,i,void 0,r)})}function wi(t){return new W(new gr(t.url),new gr(t.params),new gr(t.queryParams),new gr(t.fragment),new gr(t.data),t.outlet,t.component,t)}var ye=class{redirectTo;navigationBehaviorOptions;constructor(n,e){this.redirectTo=n,this.navigationBehaviorOptions=e}};var wn$1=`ngNavigationCancelingError`;function wt$2(t,n){let{redirectTo:e,navigationBehaviorOptions:r}=J$1(n)?{redirectTo:n,navigationBehaviorOptions:void 0}:n,i=bn$3(!1,b.Redirect);return i.url=e,i.navigationBehaviorOptions=r,i}function bn$3(t,n){let e=new Error(`NavigationCancelingError: ${t||``}`);return e[wn$1]=!0,e.cancellationCode=n,e}function bi(t){return In(t)&&J$1(t.url)}function In(t){return!!t&&t[wn$1]}var Xt$1=class{routeReuseStrategy;futureState;currState;forwardEvent;inputBindingEnabled;constructor(n,e,r,i,o){this.routeReuseStrategy=n,this.futureState=e,this.currState=r,this.forwardEvent=i,this.inputBindingEnabled=o}activate(n){let e=this.futureState._root,r=this.currState?this.currState._root:null;this.deactivateChildRoutes(e,r,n),Ft$2(this.futureState.root),this.activateChildRoutes(e,r,n)}deactivateChildRoutes(n,e,r){let i=he$1(e);n.children.forEach(o=>{let a=o.value.outlet;this.deactivateRoutes(o,i[a],r),delete i[a]}),Object.values(i).forEach(o=>{this.deactivateRouteAndItsChildren(o,r)})}deactivateRoutes(n,e,r){let i=n.value,o=e?e.value:null;if(i===o)if(i.component){let a=r.getContext(i.outlet);a&&this.deactivateChildRoutes(n,e,a.children)}else this.deactivateChildRoutes(n,e,r);else o&&this.deactivateRouteAndItsChildren(e,r)}deactivateRouteAndItsChildren(n,e){n.value.component&&this.routeReuseStrategy.shouldDetach(n.value.snapshot)?this.detachAndStoreRouteSubtree(n,e):this.deactivateRouteAndOutlet(n,e)}detachAndStoreRouteSubtree(n,e){let r=e.getContext(n.value.outlet),i=r&&n.value.component?r.children:e,o=he$1(n);for(let a of Object.values(o))this.deactivateRouteAndItsChildren(a,i);if(r&&r.outlet){let a=r.outlet.detach(),c=r.children.onOutletDeactivated();this.routeReuseStrategy.store(n.value.snapshot,{componentRef:a,route:n,contexts:c})}}deactivateRouteAndOutlet(n,e){let r=e.getContext(n.value.outlet),i=r&&n.value.component?r.children:e,o=he$1(n);for(let a of Object.values(o))this.deactivateRouteAndItsChildren(a,i);r&&(r.outlet&&(r.outlet.deactivate(),r.children.onOutletDeactivated()),r.attachRef=null,r.route=null),n.value._localInjector?.destroy()}activateChildRoutes(n,e,r){let i=he$1(e);n.children.forEach(o=>{this.activateRoutes(o,i[o.value.outlet],r),this.forwardEvent(new Rt$2(o.value.snapshot))}),n.children.length&&this.forwardEvent(new mt$2(n.value.snapshot))}activateRoutes(n,e,r){let i=n.value,o=e?e.value:null;if(Ft$2(i),i===o)if(i.component){let a=r.getOrCreateContext(i.outlet);this.activateChildRoutes(n,e,a.children)}else this.activateChildRoutes(n,e,r);else if(i.component){let a=r.getOrCreateContext(i.outlet);if(this.routeReuseStrategy.shouldAttach(i.snapshot)){let c=this.routeReuseStrategy.retrieve(i.snapshot);this.routeReuseStrategy.store(i.snapshot,null),a.children.onOutletReAttached(c.contexts),a.attachRef=c.componentRef,a.route=c.route.value,a.outlet&&a.outlet.attach(c.componentRef,c.route.value),Ft$2(c.route.value),this.activateChildRoutes(n,null,a.children)}else a.attachRef=null,a.route=i,a.outlet&&a.outlet.activateWith(i,a.injector),this.activateChildRoutes(n,null,a.children)}else this.activateChildRoutes(n,null,r)}};var bt$2=class{path;route;constructor(n){this.path=n,this.route=this.path[this.path.length-1]}};var fe=class{component;route;constructor(n,e){this.component=n,this.route=e}};function Ii(t,n,e){let r=t._root;return Ne(r,n?n._root:null,e,[r.value])}function Ai(t){let n=t.routeConfig?t.routeConfig.canActivateChild:null;return!n||n.length===0?null:{node:t,guards:n}}function we(t,n){let e=Symbol(),r=n.get(t,e);return r===e?typeof t==`function`&&!cv(t)?t:n.get(t):r}function Ne(t,n,e,r,i={canDeactivateChecks:[],canActivateChecks:[]}){let o=he$1(n);return t.children.forEach(a=>{Ei(a,o[a.value.outlet],e,r.concat([a.value]),i),delete o[a.value.outlet]}),Object.entries(o).forEach(([a,c])=>_e(c,e.getContext(a),i)),i}function Ei(t,n,e,r,i={canDeactivateChecks:[],canActivateChecks:[]}){let o=t.value,a=n?n.value:null,c=e?e.getContext(t.value.outlet):null;if(a&&o.routeConfig===a.routeConfig){let s=Ti(a,o,o.routeConfig.runGuardsAndResolvers);s?i.canActivateChecks.push(new bt$2(r)):(o.data=a.data,o._resolvedData=a._resolvedData),o.component?Ne(t,n,c?c.children:null,r,i):Ne(t,n,e,r,i),s&&c&&c.outlet&&c.outlet.isActivated&&i.canDeactivateChecks.push(new fe(c.outlet.component,a))}else a&&_e(n,c,i),i.canActivateChecks.push(new bt$2(r)),o.component?Ne(t,null,c?c.children:null,r,i):Ne(t,null,e,r,i);return i}function Ti(t,n,e){if(typeof e==`function`)return fi$2(n._environmentInjector,()=>e(t,n));switch(e){case`pathParamsChange`:return!ie(t.url,n.url);case`pathParamsOrQueryParamsChange`:return!ie(t.url,n.url)||!q$1(t.queryParams,n.queryParams);case`always`:return!0;case`paramsOrQueryParamsChange`:return!Zt$2(t,n)||!q$1(t.queryParams,n.queryParams);default:return!Zt$2(t,n)}}function _e(t,n,e){let r=he$1(t),i=t.value;Object.entries(r).forEach(([o,a])=>{i.component?n?_e(a,n.children.getContext(o),e):_e(a,null,e):_e(a,n,e)}),i.component?n&&n.outlet&&n.outlet.isActivated?e.canDeactivateChecks.push(new fe(n.outlet.component,i)):e.canDeactivateChecks.push(new fe(null,i)):e.canDeactivateChecks.push(new fe(null,i))}function He(t){return typeof t==`function`}function Ni(t){return typeof t==`boolean`}function Mi(t){return t&&He(t.canLoad)}function Di(t){return t&&He(t.canActivate)}function _i(t){return t&&He(t.canActivateChild)}function Ui$1(t){return t&&He(t.canDeactivate)}function Oi$1(t){return t&&He(t.canMatch)}function An$1(t){return t instanceof Dr||t?.name===`EmptyError`}var nt$2=Symbol(`INITIAL_VALUE`);function Re$1(){return ad$1(t=>ky(t.map(n=>n.pipe(Rn$2(1),Ky(nt$2)))).pipe(Ye$2(n=>{for(let e of n)if(e!==!0){if(e===nt$2)return nt$2;if(e===!1||Pi$1(e))return e}return!0}),Ir(n=>n!==nt$2),Rn$2(1)))}function Pi$1(t){return J$1(t)||t instanceof ye}function En$1(t){return t.aborted?Ty(void 0).pipe(Rn$2(1)):new M$2(n=>{let e=()=>{n.next(),n.complete()};return t.addEventListener(`abort`,e),()=>t.removeEventListener(`abort`,e)})}function Tn$3(t){return ia$1(En$1(t))}function Li$1(t){return _e$2(n=>{let{targetSnapshot:e,currentSnapshot:r,guards:{canActivateChecks:i,canDeactivateChecks:o}}=n;return o.length===0&&i.length===0?Ty(Z$3(q$2({},n),{guardsResult:!0})):ji$1(o,e,r).pipe(_e$2(a=>a&&Ni(a)?xi(e,i,t):Ty(a)),Ye$2(a=>Z$3(q$2({},n),{guardsResult:a})))})}function ji$1(t,n,e){return Le$3(t).pipe(_e$2(r=>Fi$1(r.component,r.route,e,n)),qy(r=>r!==!0,!0))}function xi(t,n,e){return Le$3(n).pipe(Hy(r=>An$3($i$1(r.route.parent,e),ki(r.route,e),Hi$1(t,r.path),zi$1(t,r.route))),qy(r=>r!==!0,!0))}function ki(t,n){return t!==null&&n&&n(new yt$1(t)),Ty(!0)}function $i$1(t,n){return t!==null&&n&&n(new vt$1(t)),Ty(!0)}function zi$1(t,n){let e=n.routeConfig?n.routeConfig.canActivate:null;if(!e||e.length===0)return Ty(!0);return Ty(e.map(i=>Ly(()=>{let o=n._environmentInjector,a=we(i,o);return ce$1(Di(a)?a.canActivate(n,t):fi$2(o,()=>a(n,t))).pipe(qy())}))).pipe(Re$1())}function Hi$1(t,n){let e=n[n.length-1];return Ty(n.slice(0,n.length-1).reverse().map(o=>Ai(o)).filter(o=>o!==null).map(o=>Ly(()=>{return Ty(o.guards.map(c=>{let s=o.node._environmentInjector,u=we(c,s);return ce$1(_i(u)?u.canActivateChild(e,t):fi$2(s,()=>u(e,t))).pipe(qy())})).pipe(Re$1())}))).pipe(Re$1())}function Fi$1(t,n,e,r){let i=n&&n.routeConfig?n.routeConfig.canDeactivate:null;if(!i||i.length===0)return Ty(!0);return Ty(i.map(a=>{let c=n._environmentInjector,s=we(a,c);return ce$1(Ui$1(s)?s.canDeactivate(t,n,e,r):fi$2(c,()=>s(t,n,e,r))).pipe(qy())})).pipe(Re$1())}function qi$1(t,n,e,r,i){let o=n.canLoad;if(o===void 0||o.length===0)return Ty(!0);return Ty(o.map(c=>{let s=we(c,t),h=ce$1(Mi(s)?s.canLoad(n,e):fi$2(t,()=>s(n,e)));return i?h.pipe(Tn$3(i)):h})).pipe(Re$1(),Nn$2(r))}function Nn$2(t){return ry(cd$1(n=>{if(typeof n!=`boolean`)throw wt$2(t,n)}),Ye$2(n=>n===!0))}function Bi$1(t,n,e,r,i,o){let a=n.canMatch;if(!a||a.length===0)return Ty(!0);return Ty(a.map(s=>{let u=we(s,t);return ce$1(Oi$1(u)?u.canMatch(n,e,i):fi$2(t,()=>u(n,e,i))).pipe(Tn$3(o))})).pipe(Re$1(),Nn$2(r))}var V$1=class t extends Error{segmentGroup;constructor(n){super(),this.segmentGroup=n||null,Object.setPrototypeOf(this,t.prototype)}};var $e=class t extends Error{urlTree;constructor(n){super(),this.urlTree=n,Object.setPrototypeOf(this,t.prototype)}};function Vi$1(t){throw new C$2(4e3,!1)}function Gi$1(t){throw bn$3(!1,b.GuardRejected)}var er=class{urlSerializer;urlTree;constructor(n,e){this.urlSerializer=n,this.urlTree=e}lineralizeSegments(n,e){return hr$1(this,null,function*(){let r=[],i=e.root;for(;;){if(r=r.concat(i.segments),i.numberOfChildren===0)return r;if(i.numberOfChildren>1||!i.children[f$1])throw Vi$1(`${n.redirectTo}`);i=i.children[f$1]}})}applyRedirectCommands(n,e,r,i,o){return hr$1(this,null,function*(){let a=yield Wi$1(e,i,o);if(a instanceof A)throw new $e(a);let c=this.applyRedirectCreateUrlTree(a,this.urlSerializer.parse(a),n,r);if(a[0]===`/`)throw new $e(c);return c})}applyRedirectCreateUrlTree(n,e,r,i){return new A(this.createSegmentGroup(n,e.root,r,i),this.createQueryParams(e.queryParams,this.urlTree.queryParams),e.fragment)}createQueryParams(n,e){let r={};return Object.entries(n).forEach(([i,o])=>{if(typeof o==`string`&&o[0]===`:`){let c=o.substring(1);r[i]=e[c]}else r[i]=o}),r}createSegmentGroup(n,e,r,i){let o=this.createSegments(n,e.segments,r,i),a=Object.create(null);return Object.entries(e.children).forEach(([c,s])=>{a[c]=this.createSegmentGroup(n,s,r,i)}),new m(o,a)}createSegments(n,e,r,i){return e.map(o=>o.path[0]===`:`?this.findPosParam(n,o,i):this.findOrReturn(o,r))}findPosParam(n,e,r){let i=r[e.path.substring(1)];if(!i)throw new C$2(4001,!1);return i}findOrReturn(n,e){let r=0;for(let i of e){if(i.path===n.path)return e.splice(r),i;r++}return n}};function Wi$1(t,n,e){if(typeof t==`string`)return Promise.resolve(t);let r=t;return st$3(ce$1(fi$2(e,()=>r(n))))}function Qi$1(t,n){return t.providers&&!t._injector&&(t._injector=zu$1(t.providers,n,`Route: ${t.path}`)),t._injector??n}function z$1(t){return t.outlet||f$1}function Ki$1(t,n){let e=t.filter(r=>z$1(r)===n);return e.push(...t.filter(r=>z$1(r)!==n)),e}var tr={matched:!1,consumedSegments:[],remainingSegments:[],parameters:{},positionalParamSegments:{}};function Mn$1(t){return{routeConfig:t.routeConfig,url:t.url,params:t.params,queryParams:t.queryParams,fragment:t.fragment,data:t.data,outlet:t.outlet,title:t.title,paramMap:t.paramMap,queryParamMap:t.queryParamMap}}function Yi$1(t,n,e,r,i,o,a){let c=Dn$1(t,n,e);if(!c.matched)return Ty(c);let s=Mn$1(o(c));return r=Qi$1(n,r),Bi$1(r,n,e,i,s,a).pipe(Ye$2(u=>u===!0?c:q$2({},tr)))}function Dn$1(t,n,e){if(n.path===``)return n.pathMatch===`full`&&(t.hasChildren()||e.length>0)?q$2({},tr):{matched:!0,consumedSegments:[],remainingSegments:e,parameters:{},positionalParamSegments:{}};let i=(n.matcher||en$2)(e,t,n);if(!i)return q$2({},tr);let o={};Object.entries(i.posParams??{}).forEach(([c,s])=>{o[c]=s.path});let a=i.consumed.length>0?q$2(q$2({},o),i.consumed[i.consumed.length-1].parameters):o;return{matched:!0,consumedSegments:i.consumed,remainingSegments:e.slice(i.consumed.length),parameters:a,positionalParamSegments:i.posParams??{}}}function Zr(t,n,e,r,i){return e.length>0&&Xi$1(t,e,r,i)?{segmentGroup:new m(n,Ji$1(r,new m(e,t.children))),slicedSegments:[]}:e.length===0&&eo$1(t,e,r)?{segmentGroup:new m(t.segments,Zi$1(t,e,r,t.children)),slicedSegments:e}:{segmentGroup:new m(t.segments,t.children),slicedSegments:e}}function Zi$1(t,n,e,r){let i={};for(let o of e)if(Et(t,n,o)&&!r[z$1(o)]){let a=new m([],{});i[z$1(o)]=a}return q$2(q$2({},r),i)}function Ji$1(t,n){let e={};e[f$1]=n;for(let r of t)if(r.path===``&&z$1(r)!==f$1){let i=new m([],{});e[z$1(r)]=i}return e}function Xi$1(t,n,e,r){return e.some(i=>!Et(t,n,i)||!(z$1(i)!==f$1)?!1:!(r!==void 0&&z$1(i)===r))}function eo$1(t,n,e){return e.some(r=>Et(t,n,r))}function Et(t,n,e){return(t.hasChildren()||n.length>0)&&e.pathMatch===`full`?!1:e.path===``}function to$1(t,n,e){return n.length===0&&!t.children[e]}var rr=class{};function ro$1(t,n,e,r,i,o,a,c){return hr$1(this,null,function*(){return new nr(t,n,e,r,i,a,o,c).recognize()})}var no$1=31;var nr=class{injector;configLoader;rootComponentType;config;urlTree;paramsInheritanceStrategy;urlSerializer;abortSignal;applyRedirects;absoluteRedirectCount=0;allowRedirects=!0;constructor(n,e,r,i,o,a,c,s){this.injector=n,this.configLoader=e,this.rootComponentType=r,this.config=i,this.urlTree=o,this.paramsInheritanceStrategy=a,this.urlSerializer=c,this.abortSignal=s,this.applyRedirects=new er(this.urlSerializer,this.urlTree)}noMatchError(n){return new C$2(4002,`'${n.segmentGroup}'`)}recognize(){return hr$1(this,null,function*(){let n=Zr(this.urlTree.root,[],[],this.config).segmentGroup,{children:e,rootSnapshot:r}=yield this.match(n),o=new xe(``,new _(r,e)),a=dn$2(r,[],this.urlTree.queryParams,this.urlTree.fragment);return a.queryParams=this.urlTree.queryParams,o.url=this.urlSerializer.serialize(a),{state:o,tree:a}})}match(n){return hr$1(this,null,function*(){let e=new me([],Object.freeze({}),Object.freeze(q$2({},this.urlTree.queryParams)),this.urlTree.fragment,Object.freeze({}),f$1,this.rootComponentType,null,{},this.injector);try{return{children:yield this.processSegmentGroup(this.injector,this.config,n,f$1,e),rootSnapshot:e}}catch(r){if(r instanceof $e)return this.urlTree=r.urlTree,this.match(r.urlTree.root);throw r instanceof V$1?this.noMatchError(r):r}})}processSegmentGroup(n,e,r,i,o){return hr$1(this,null,function*(){if(r.segments.length===0&&r.hasChildren())return this.processChildren(n,e,r,o);let a=yield this.processSegment(n,e,r,r.segments,i,!0,o);return a instanceof _?[a]:[]})}processChildren(n,e,r,i){return hr$1(this,null,function*(){let o=[];for(let s of Object.keys(r.children))s===`primary`?o.unshift(s):o.push(s);let a=[];for(let s of o){let u=r.children[s],h=Ki$1(e,s),v=yield this.processSegmentGroup(n,h,u,s,i);a.push(...v)}let c=_n$3(a);return io$1(c),c})}processSegment(n,e,r,i,o,a,c){return hr$1(this,null,function*(){for(let s of e)try{return yield this.processSegmentAgainstRoute(s._injector??n,e,s,r,i,o,a,c)}catch(u){if(u instanceof V$1||An$1(u))continue;throw u}if(to$1(r,i,o))return new rr;throw new V$1(r)})}processSegmentAgainstRoute(n,e,r,i,o,a,c,s){return hr$1(this,null,function*(){if(z$1(r)!==a&&(a===f$1||!Et(i,o,r)))throw new V$1(i);if(r.redirectTo===void 0)return this.matchSegmentAgainstRoute(n,i,r,o,a,s);if(this.allowRedirects&&c)return this.expandSegmentAgainstRouteUsingRedirect(n,i,e,r,o,a,s);throw new V$1(i)})}expandSegmentAgainstRouteUsingRedirect(n,e,r,i,o,a,c){return hr$1(this,null,function*(){let{matched:s,parameters:u,consumedSegments:h,positionalParamSegments:v,remainingSegments:g}=Dn$1(e,i,o);if(!s)throw new V$1(e);typeof i.redirectTo==`string`&&i.redirectTo[0]===`/`&&(this.absoluteRedirectCount++,this.absoluteRedirectCount>no$1&&(this.allowRedirects=!1));let E=this.createSnapshot(n,i,o,u,c);if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);let k=yield this.applyRedirects.applyRedirectCommands(h,i.redirectTo,v,Mn$1(E),n),X=yield this.applyRedirects.lineralizeSegments(i,k);return this.processSegment(n,r,e,X.concat(g),a,!1,c)})}createSnapshot(n,e,r,i,o){let a=new me(r,i,Object.freeze(q$2({},this.urlTree.queryParams)),this.urlTree.fragment,ao$1(e),z$1(e),e.component??e._loadedComponent??null,e,so$1(e),n),c=ar(a,o,this.paramsInheritanceStrategy);return a.params=Object.freeze(c.params),a.data=Object.freeze(c.data),a}matchSegmentAgainstRoute(n,e,r,i,o,a){return hr$1(this,null,function*(){if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);let c=ee=>this.createSnapshot(n,r,ee.consumedSegments,ee.parameters,a),s=yield st$3(Yi$1(e,r,i,n,this.urlSerializer,c,this.abortSignal));if(r.path===`**`&&(e.children={}),!s?.matched)throw new V$1(e);n=r._injector??n;let{routes:u}=yield this.getChildConfig(n,r,i),h=r._loadedInjector??n,{parameters:v,consumedSegments:g,remainingSegments:E}=s,k=this.createSnapshot(n,r,g,v,a),{segmentGroup:X,slicedSegments:Ie}=Zr(e,g,E,u,o);if(Ie.length===0&&X.hasChildren())return new _(k,yield this.processChildren(h,u,X,k));if(u.length===0&&Ie.length===0)return new _(k,[]);let Dt=z$1(r)===o,qe=yield this.processSegment(h,u,X,Ie,Dt?f$1:o,!0,k);return new _(k,qe instanceof _?[qe]:[])})}getChildConfig(n,e,r){return hr$1(this,null,function*(){if(e.children)return{routes:e.children,injector:n};if(e.loadChildren){if(e._loadedRoutes!==void 0){let o=e._loadedNgModuleFactory;return o&&!e._loadedInjector&&(e._loadedInjector=o.create(n).injector),{routes:e._loadedRoutes,injector:e._loadedInjector}}if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);if(yield st$3(qi$1(n,e,r,this.urlSerializer,this.abortSignal))){let o=yield this.configLoader.loadChildren(n,e);return e._loadedRoutes=o.routes,e._loadedInjector=o.injector,e._loadedNgModuleFactory=o.factory,o}throw Gi$1(e)}return{routes:[],injector:n}})}};function io$1(t){t.sort((n,e)=>n.value.outlet===f$1?-1:e.value.outlet===f$1?1:n.value.outlet.localeCompare(e.value.outlet))}function oo$1(t){let n=t.value.routeConfig;return n&&n.path===``}function _n$3(t){let n=[],e=new Set;for(let r of t){if(!oo$1(r)){n.push(r);continue}let i=n.find(o=>r.value.routeConfig===o.value.routeConfig);i!==void 0?(i.children.push(...r.children),e.add(i)):n.push(r)}for(let r of e){let i=_n$3(r.children);n.push(new _(r.value,i))}return n.filter(r=>!e.has(r))}function ao$1(t){return t.data||{}}function so$1(t){return t.resolve||{}}function co$1(t,n,e,r,i,o,a){return _e$2(c=>hr$1(null,null,function*(){let{state:s,tree:u}=yield ro$1(t,n,e,r,c.extractedUrl,i,o,a);return Z$3(q$2({},c),{targetSnapshot:s,urlAfterRedirects:u})}))}function uo$1(t){return _e$2(n=>{let{targetSnapshot:e,guards:{canActivateChecks:r}}=n;if(!r.length)return Ty(n);let i=new Set(r.map(c=>c.route)),o=new Set;for(let c of i)if(!o.has(c))for(let s of Un$1(c))o.add(s);let a=0;return Le$3(o).pipe(Hy(c=>i.has(c)?lo$1(c,e,t):(c.data=ar(c,c.parent,t).resolve,Ty(void 0))),cd$1(()=>a++),Zy(1),_e$2(c=>a===o.size?Ty(n):Lt$3))})}function Un$1(t){return[t,...t.children.map(e=>Un$1(e)).flat()]}function lo$1(t,n,e){let r=t.routeConfig,i=t._resolve;return r?.title!==void 0&&!Sn$2(r)&&(i[ze$1]=r.title),Ly(()=>(t.data=ar(t,t.parent,e).resolve,ho$1(i,t,n).pipe(Ye$2(o=>(t._resolvedData=o,t.data=q$2(q$2({},t.data),o),null)))))}function ho$1(t,n,e){let r=Bt$1(t);if(r.length===0)return Ty({});let i={};return Le$3(r).pipe(_e$2(o=>fo$1(t[o],n,e).pipe(qy(),cd$1(a=>{if(a instanceof ye)throw wt$2(new Z,a);i[o]=a}))),Zy(1),Ye$2(()=>i),nd$1(o=>An$1(o)?Lt$3:Sy(o)))}function fo$1(t,n,e){let r=n._environmentInjector,i=we(t,r);return ce$1(i.resolve?i.resolve(n,e):fi$2(r,()=>i(n,e)))}function Jr$1(t){return ad$1(n=>{let e=t(n);return e?Le$3(e).pipe(Ye$2(()=>n)):Ty(n)})}var hr=(()=>{class t{buildTitle(e){let r,i=e.root;for(;i!==void 0;)r=this.getResolvedTitleForRoute(i)??r,i=i.children.find(o=>o.outlet===f$1);return r}getResolvedTitleForRoute(e){return e.data[ze$1]}static ɵfac=function(r){return new(r||t)};static ɵprov=Oe$3({token:t,factory:()=>g$2(On)})}return t})();var On=(()=>{class t extends hr{title;constructor(e){super(),this.title=e}updateTitle(e){let r=this.buildTitle(e);r!==void 0&&this.title.setTitle(r)}static ɵfac=function(r){return new(r||t)(J$2(Ko))};static ɵprov=P$1({token:t,factory:t.ɵfac,providedIn:`root`})}return t})();var be$1=new S$1(``,{factory:()=>({})});var Fe$1=new S$1(``);var Pn$1=(()=>{class t{componentLoaders=new WeakMap;childrenLoaders=new WeakMap;onLoadStartListener;onLoadEndListener;compiler=g$2(Vb$1);loadComponent(e,r){return hr$1(this,null,function*(){if(this.componentLoaders.get(r))return this.componentLoaders.get(r);if(r._loadedComponent)return Promise.resolve(r._loadedComponent);this.onLoadStartListener&&this.onLoadStartListener(r);let i=hr$1(this,null,function*(){try{let a=yield jn$1(Wj(yield rn$2(fi$2(e,()=>r.loadComponent()))));return this.onLoadEndListener&&this.onLoadEndListener(r),r._loadedComponent=a,a}finally{this.componentLoaders.delete(r)}});return this.componentLoaders.set(r,i),i})}loadChildren(e,r){if(this.childrenLoaders.get(r))return this.childrenLoaders.get(r);if(r._loadedRoutes)return Promise.resolve({routes:r._loadedRoutes,injector:r._loadedInjector});this.onLoadStartListener&&this.onLoadStartListener(r);let i=hr$1(this,null,function*(){try{let o=yield Ln(r,this.compiler,e,this.onLoadEndListener);return r._loadedRoutes=o.routes,r._loadedInjector=o.injector,r._loadedNgModuleFactory=o.factory,o}finally{this.childrenLoaders.delete(r)}});return this.childrenLoaders.set(r,i),i}static ɵfac=function(r){return new(r||t)};static ɵprov=Oe$3({token:t,factory:t.ɵfac})}return t})();function Ln(t,n,e,r){return hr$1(this,null,function*(){let o=yield jn$1(Wj(yield rn$2(fi$2(e,()=>t.loadChildren())))),a;o instanceof hg||Array.isArray(o)?a=o:a=yield n.compileModuleAsync(o),r&&r(t);let c,s,h;return Array.isArray(a)?s=a:(c=a.create(e).injector,h=a,s=c.get(Fe$1,[],{optional:!0,self:!0}).flat()),{routes:s.map(lr),injector:c,factory:h}})}function jn$1(t){return hr$1(this,null,function*(){return t})}var Tt$1=(()=>{class t{static ɵfac=function(r){return new(r||t)};static ɵprov=Oe$3({token:t,factory:()=>g$2(po$1)})}return t})();var po$1=(()=>{class t{shouldProcessUrl(e){return!0}extract(e){return e}merge(e,r){return e}static ɵfac=function(r){return new(r||t)};static ɵprov=Oe$3({token:t,factory:t.ɵfac})}return t})();var xn$3=new S$1(``);var kn$1=new S$1(``);var go$1=()=>{};var $n$2=new S$1(``);var zn=(()=>{class t{currentNavigation=xe$3(null,{equal:()=>!1});currentTransition=null;lastSuccessfulNavigation=xe$3(null);events=new ee$3;transitionAbortWithErrorSubject=new ee$3;configLoader=g$2(Pn$1);environmentInjector=g$2(me$3);destroyRef=g$2(X);urlSerializer=g$2(Se);rootContexts=g$2(Ce);location=g$2(Gm$1);inputBindingEnabled=g$2(At$1,{optional:!0})!==null;titleStrategy=g$2(hr);options=g$2(be$1,{optional:!0})||{};paramsInheritanceStrategy=this.options.paramsInheritanceStrategy||Ri;urlHandlingStrategy=g$2(Tt$1);createViewTransition=g$2(xn$3,{optional:!0});navigationErrorHandler=g$2($n$2,{optional:!0});activatedRouteInjectorFeature=g$2(kn$1,{optional:!0});navigationId=0;get hasRequestedNavigation(){return this.navigationId!==0}transitions;afterPreactivation=()=>Ty(void 0);rootComponentType=null;destroyed=!1;constructor(){let e=i=>this.events.next(new pt$1(i)),r=i=>this.events.next(new gt$1(i));this.configLoader.onLoadEndListener=r,this.configLoader.onLoadStartListener=e,this.destroyRef.onDestroy(()=>{this.destroyed=!0})}complete(){this.transitions?.complete()}handleNavigationRequest(e){let r=++this.navigationId;Q$1(()=>{this.transitions?.next(Z$3(q$2({},e),{extractedUrl:this.urlHandlingStrategy.extract(e.rawUrl),targetSnapshot:null,targetRouterState:null,guards:{canActivateChecks:[],canDeactivateChecks:[]},guardsResult:null,id:r,routesRecognizeHandler:{},beforeActivateHandler:{}}))})}setupNavigations(e){return this.transitions=new gr(null),this.transitions.pipe(Ir(r=>r!==null),ad$1(r=>{let i=!0,o=!1,a=new AbortController,c=()=>!o&&this.currentTransition?.id===r.id;return Ty(r).pipe(ad$1(s=>{if(this.navigationId>r.id)return this.cancelNavigationTransition(r,``,b.SupersededByNewNavigation),Lt$3;this.currentTransition=r;let u=this.lastSuccessfulNavigation();this.currentNavigation.set({id:s.id,initialUrl:s.rawUrl,extractedUrl:s.extractedUrl,targetBrowserUrl:typeof s.extras.browserUrl==`string`?this.urlSerializer.parse(s.extras.browserUrl):s.extras.browserUrl,trigger:s.source,extras:s.extras,previousNavigation:u?Z$3(q$2({},u),{previousNavigation:null}):null,abort:()=>a.abort(),routesRecognizeHandler:s.routesRecognizeHandler,beforeActivateHandler:s.beforeActivateHandler});let h=!e.navigated||this.isUpdatingInternalState()||this.isUpdatedBrowserUrl(),v=s.extras.onSameUrlNavigation??e.onSameUrlNavigation;if(!h&&v!==`reload`)return this.events.next(new G$1(s.id,this.urlSerializer.serialize(s.rawUrl),``,Oe.IgnoredSameUrlNavigation)),s.resolve(!1),Lt$3;if(this.urlHandlingStrategy.shouldProcessUrl(s.rawUrl))return Ty(s).pipe(ad$1(g=>(this.events.next(new ae$1(g.id,this.urlSerializer.serialize(g.extractedUrl),g.source,g.restoredState)),g.id!==this.navigationId?Lt$3:Promise.resolve(g))),co$1(this.environmentInjector,this.configLoader,this.rootComponentType,e.config,this.urlSerializer,this.paramsInheritanceStrategy,a.signal),cd$1(g=>{r.targetSnapshot=g.targetSnapshot,r.urlAfterRedirects=g.urlAfterRedirects,this.currentNavigation.update(E=>(E.finalUrl=g.urlAfterRedirects,E)),this.events.next(new Le)}),ad$1(g=>Le$3(r.routesRecognizeHandler.deferredHandle??Ty(void 0)).pipe(Ye$2(()=>g))),cd$1(()=>{let g=new Pe(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);this.events.next(g)}));if(h&&this.urlHandlingStrategy.shouldProcessUrl(s.currentRawUrl)){let{id:g,extractedUrl:E,source:k,restoredState:X,extras:Ie}=s,Dt=new ae$1(g,this.urlSerializer.serialize(E),k,X);this.events.next(Dt);let qe=yn$3(this.rootComponentType,this.environmentInjector).snapshot;return this.currentTransition=r=Z$3(q$2({},s),{targetSnapshot:qe,urlAfterRedirects:E,extras:Z$3(q$2({},Ie),{skipLocationChange:!1,replaceUrl:!1})}),this.currentNavigation.update(ee=>(ee.finalUrl=E,ee)),Ty(r)}else return this.events.next(new G$1(s.id,this.urlSerializer.serialize(s.extractedUrl),``,Oe.IgnoredByUrlHandlingStrategy)),s.resolve(!1),Lt$3}),Ye$2(s=>{let u=new lt$2(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);return this.events.next(u),this.currentTransition=r=Z$3(q$2({},s),{guards:Ii(s.targetSnapshot,s.currentSnapshot,this.rootContexts)}),r}),Li$1(s=>this.events.next(s)),ad$1(s=>{if(r.guardsResult=s.guardsResult,s.guardsResult&&typeof s.guardsResult!=`boolean`)throw wt$2(this.urlSerializer,s.guardsResult);let u=new ht$1(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot,!!s.guardsResult);if(this.events.next(u),!c())return Lt$3;if(!s.guardsResult)return this.cancelNavigationTransition(s,``,b.GuardRejected),Lt$3;if(s.guards.canActivateChecks.length===0)return Ty(s);let h=new dt$1(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);if(this.events.next(h),!c())return Lt$3;let v=!1;return Ty(s).pipe(uo$1(this.paramsInheritanceStrategy),cd$1({next:()=>{v=!0;let g=new ft$1(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);this.events.next(g)},complete:()=>{v||this.cancelNavigationTransition(s,``,b.NoDataFromResolver)}}))}),Jr$1(s=>{let u=v=>{let g=[];if(v.routeConfig?._loadedComponent)v.component=v.routeConfig?._loadedComponent;else if(v.routeConfig?.loadComponent){let E=v._environmentInjector;g.push(this.configLoader.loadComponent(E,v.routeConfig).then(k=>{v.component=k}))}for(let E of v.children)g.push(...u(E));return g},h=u(s.targetSnapshot.root);return h.length===0?Ty(s):Le$3(Promise.all(h).then(()=>s))}),ad$1(s=>{let{newlyCreatedRoutes:u,state:h}=Si(e.routeReuseStrategy,s.targetSnapshot,s.currentRouterState);return this.currentTransition=r=s=Z$3(q$2({},s),{targetRouterState:h,newlyCreatedRoutes:u}),this.currentNavigation.update(v=>(v.targetRouterState=h,v)),Ty(s)}),this.activatedRouteInjectorFeature?.operator()??(s=>s),Jr$1(()=>this.afterPreactivation()),ad$1(()=>{let{currentSnapshot:s,targetSnapshot:u}=r,h=this.createViewTransition?.(this.environmentInjector,s.root,u.root);return h?Le$3(h).pipe(Ye$2(()=>r)):Ty(r)}),Rn$2(1),ad$1(s=>{i=!1,this.events.next(new ge$1);let u=r.beforeActivateHandler.deferredHandle;return u?Le$3(u.then(()=>s)):Ty(s)}),cd$1(s=>{new Xt$1(e.routeReuseStrategy,r.targetRouterState,r.currentRouterState,u=>this.events.next(u),this.inputBindingEnabled).activate(this.rootContexts),s.newlyCreatedRoutes?.clear(),c()&&(o=!0,this.currentNavigation.update(u=>(u.abort=go$1,u)),this.lastSuccessfulNavigation.set(Q$1(this.currentNavigation)),this.events.next(new H$2(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects))),this.titleStrategy?.updateTitle(s.targetRouterState.snapshot),s.resolve(!0))}),ia$1(En$1(a.signal).pipe(Ir(()=>!o&&i),cd$1(()=>{this.cancelNavigationTransition(r,a.signal.reason+``,b.Aborted)}))),cd$1({complete:()=>{o=!0}}),ia$1(this.transitionAbortWithErrorSubject.pipe(cd$1(s=>{throw s}))),sd$1(()=>{a.abort(),o||this.cancelNavigationTransition(r,``,b.SupersededByNewNavigation),this.currentTransition?.id===r.id&&(this.currentNavigation.set(null),this.currentTransition=null)}),nd$1(s=>{if(o=!0,Xr$1(r),this.destroyed)return r.resolve(!1),Lt$3;if(In(s))this.events.next(new x$1(r.id,this.urlSerializer.serialize(r.extractedUrl),s.message,s.cancellationCode)),bi(s)?this.events.next(new ve$1(s.url,s.navigationBehaviorOptions)):r.resolve(!1);else{let u=new se(r.id,this.urlSerializer.serialize(r.extractedUrl),s,r.targetSnapshot??void 0);try{let h=fi$2(this.environmentInjector,()=>this.navigationErrorHandler?.(u));if(h instanceof ye){let{message:v,cancellationCode:g}=wt$2(this.urlSerializer,h);this.events.next(new x$1(r.id,this.urlSerializer.serialize(r.extractedUrl),v,g)),this.events.next(new ve$1(h.redirectTo,h.navigationBehaviorOptions))}else throw this.events.next(u),s}catch(h){this.options.resolveNavigationPromiseOnError?r.resolve(!1):r.reject(h)}}return Lt$3}))}))}cancelNavigationTransition(e,r,i){Xr$1(e);let o=new x$1(e.id,this.urlSerializer.serialize(e.extractedUrl),r,i);this.events.next(o),e.resolve(!1)}isUpdatingInternalState(){return this.currentTransition?.extractedUrl.toString()!==this.currentTransition?.currentUrlTree.toString()}isUpdatedBrowserUrl(){let e=this.urlHandlingStrategy.extract(this.urlSerializer.parse(this.location.path(!0))),r=Q$1(this.currentNavigation),i=r?.targetBrowserUrl??r?.extractedUrl;return e.toString()!==i?.toString()&&!r?.extras.skipLocationChange}static ɵfac=function(r){return new(r||t)};static ɵprov=Oe$3({token:t,factory:t.ɵfac})}return t})();function vo$1(t){return t!==De}function Xr$1(t){if(t.newlyCreatedRoutes)for(let n of t.newlyCreatedRoutes)n._localInjector?.destroy()}var Hn$1=new S$1(``);var Fn=(()=>{class t{static ɵfac=function(r){return new(r||t)};static ɵprov=Oe$3({token:t,factory:()=>g$2(mo$1)})}return t})();var It$1=class{shouldDetach(n){return!1}store(n,e){}shouldAttach(n){return!1}retrieve(n){return null}shouldReuseRoute(n,e){return n.routeConfig===e.routeConfig}shouldDestroyInjector(n){return!0}};var mo$1=(()=>{class t extends It$1{static ɵfac=function(r){return new(r||t)};static ɵprov=Oe$3({token:t,factory:t.ɵfac})}return t})();var Nt$2=(()=>{class t{urlSerializer=g$2(Se);options=g$2(be$1,{optional:!0})||{};canceledNavigationResolution=this.options.canceledNavigationResolution||`replace`;location=g$2(Gm$1);urlHandlingStrategy=g$2(Tt$1);urlUpdateStrategy=this.options.urlUpdateStrategy||`deferred`;currentUrlTree=new A;getCurrentUrlTree(){return this.currentUrlTree}rawUrlTree=this.currentUrlTree;getRawUrlTree(){return this.rawUrlTree}createBrowserPath({finalUrl:e,initialUrl:r,targetBrowserUrl:i}){let o=e!==void 0?this.urlHandlingStrategy.merge(e,r):r,a=i??o;return a instanceof A?this.urlSerializer.serialize(a):a}routerUrlState(e){return e?.targetBrowserUrl===void 0||e?.finalUrl===void 0?{}:{ɵrouterUrl:this.urlSerializer.serialize(e.finalUrl)}}commitTransition({targetRouterState:e,finalUrl:r,initialUrl:i}){r&&e?(this.currentUrlTree=r,this.rawUrlTree=this.urlHandlingStrategy.merge(r,i),this.routerState=e):this.rawUrlTree=i}routerState=yn$3(null,g$2(me$3));getRouterState(){return this.routerState}_stateMemento=this.createStateMemento();get stateMemento(){return this._stateMemento}updateStateMemento(){this._stateMemento=this.createStateMemento()}createStateMemento(){return{rawUrlTree:this.rawUrlTree,currentUrlTree:this.currentUrlTree,routerState:this.routerState}}restoredState(){return this.location.getState()}static ɵfac=function(r){return new(r||t)};static ɵprov=Oe$3({token:t,factory:()=>g$2(yo$1)})}return t})();var yo$1=(()=>{class t extends Nt$2{currentPageId=0;lastSuccessfulId=-1;get browserPageId(){return this.canceledNavigationResolution!==`computed`?this.currentPageId:this.restoredState()?.ɵrouterPageId??this.currentPageId}registerNonRouterCurrentEntryChangeListener(e){return this.location.subscribe(r=>{r.type===`popstate`&&setTimeout(()=>{e(r.url,r.state,`popstate`,{replaceUrl:!0})})})}handleRouterEvent(e,r){e instanceof ae$1?this.updateStateMemento():e instanceof G$1?this.commitTransition(r):e instanceof Pe?this.urlUpdateStrategy===`eager`&&(r.extras.skipLocationChange||this.setBrowserUrl(this.createBrowserPath(r),r)):e instanceof ge$1?(this.commitTransition(r),this.urlUpdateStrategy===`deferred`&&!r.extras.skipLocationChange&&this.setBrowserUrl(this.createBrowserPath(r),r)):e instanceof x$1&&!mn$2(e)?this.restoreHistory(r):e instanceof se?this.restoreHistory(r,!0):e instanceof H$2&&(this.lastSuccessfulId=e.id,this.currentPageId=this.browserPageId)}setBrowserUrl(e,r){let{extras:i,id:o}=r,{replaceUrl:a,state:c}=i;if(this.location.isCurrentPathEqualTo(e)||a){let s=this.browserPageId,u=q$2(q$2({},c),this.generateNgRouterState(o,s,r));this.location.replaceState(e,``,u)}else{let s=q$2(q$2({},c),this.generateNgRouterState(o,this.browserPageId+1,r));this.location.go(e,``,s)}}restoreHistory(e,r=!1){if(this.canceledNavigationResolution===`computed`){let i=this.browserPageId,o=this.currentPageId-i;o!==0?this.location.historyGo(o):this.getCurrentUrlTree()===e.finalUrl&&o===0&&(this.resetInternalState(e),this.resetUrlToCurrentUrlTree())}else this.canceledNavigationResolution===`replace`&&(r&&this.resetInternalState(e),this.resetUrlToCurrentUrlTree())}resetInternalState({finalUrl:e}){this.routerState=this.stateMemento.routerState,this.currentUrlTree=this.stateMemento.currentUrlTree,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,e??this.rawUrlTree)}resetUrlToCurrentUrlTree(){this.location.replaceState(this.urlSerializer.serialize(this.getRawUrlTree()),``,this.generateNgRouterState(this.lastSuccessfulId,this.currentPageId))}generateNgRouterState(e,r,i){return this.canceledNavigationResolution===`computed`?q$2({navigationId:e,ɵrouterPageId:r},this.routerUrlState(i)):q$2({navigationId:e},this.routerUrlState(i))}static ɵfac=function(r){return new(r||t)};static ɵprov=Oe$3({token:t,factory:t.ɵfac})}return t})();function dr(t,n){t.events.pipe(Ir(e=>e instanceof H$2||e instanceof x$1||e instanceof se||e instanceof G$1),Ye$2(e=>e instanceof H$2||e instanceof G$1?0:(e instanceof x$1?e.code===b.Redirect||e.code===b.SupersededByNewNavigation:!1)?2:1),Ir(e=>e!==2),Rn$2(1)).subscribe(()=>{n()})}var ue$1=(()=>{class t{get currentUrlTree(){return this.stateManager.getCurrentUrlTree()}get rawUrlTree(){return this.stateManager.getRawUrlTree()}disposed=!1;nonRouterCurrentEntryChangeSubscription;console=g$2(dw);stateManager=g$2(Nt$2);options=g$2(be$1,{optional:!0})||{};pendingTasks=g$2(Ct$3);urlUpdateStrategy=this.options.urlUpdateStrategy||`deferred`;navigationTransitions=g$2(zn);urlSerializer=g$2(Se);location=g$2(Gm$1);urlHandlingStrategy=g$2(Tt$1);injector=g$2(me$3);_events=new ee$3;get events(){return this._events}get routerState(){return this.stateManager.getRouterState()}navigated=!1;routeReuseStrategy=g$2(Fn);injectorCleanup=g$2(Hn$1,{optional:!0});onSameUrlNavigation=this.options.onSameUrlNavigation||`ignore`;config=g$2(Fe$1,{optional:!0})?.flat()??[];componentInputBindingEnabled=!!g$2(At$1,{optional:!0});currentNavigation=this.navigationTransitions.currentNavigation.asReadonly();constructor(){this.resetConfig(this.config),this.navigationTransitions.setupNavigations(this).subscribe({error:e=>{}}),this.subscribeToNavigationEvents()}eventsSubscription=new V$3;subscribeToNavigationEvents(){let e=this.navigationTransitions.events.subscribe(r=>{try{let i=this.navigationTransitions.currentTransition,o=Q$1(this.navigationTransitions.currentNavigation);if(i!==null&&o!==null){if(this.stateManager.handleRouterEvent(r,o),r instanceof x$1&&r.code!==b.Redirect&&r.code!==b.SupersededByNewNavigation)this.navigated=!0;else if(r instanceof H$2)this.navigated=!0,this.injectorCleanup?.(this.routeReuseStrategy,this.routerState,this.config);else if(r instanceof ve$1){let a=r.navigationBehaviorOptions,c=this.urlHandlingStrategy.merge(r.url,i.currentRawUrl),s=q$2({scroll:i.extras.scroll,browserUrl:i.extras.browserUrl,info:i.extras.info,skipLocationChange:i.extras.skipLocationChange,replaceUrl:i.extras.replaceUrl||this.urlUpdateStrategy===`eager`||vo$1(i.source)},a);this.scheduleNavigation(c,De,null,s,{resolve:i.resolve,reject:i.reject,promise:i.promise})}}mi$1(r)&&this._events.next(r)}catch(i){this.navigationTransitions.transitionAbortWithErrorSubject.next(i)}});this.eventsSubscription.add(e)}resetRootComponentType(e){this.routerState.root.component=e,this.navigationTransitions.rootComponentType=e}initialNavigation(){this.setUpLocationChangeListener(),this.navigationTransitions.hasRequestedNavigation||this.navigateToSyncWithBrowser(this.location.path(!0),De,this.stateManager.restoredState(),{replaceUrl:!0})}setUpLocationChangeListener(){this.nonRouterCurrentEntryChangeSubscription??=this.stateManager.registerNonRouterCurrentEntryChangeListener((e,r,i,o)=>{this.navigateToSyncWithBrowser(e,i,r,o)})}navigateToSyncWithBrowser(e,r,i,o){let a=i?.navigationId?i:null,c=i?.ɵrouterUrl??e;if(i?.ɵrouterUrl&&(o=Z$3(q$2({},o),{browserUrl:e})),i){let u=q$2({},i);delete u.navigationId,delete u.ɵrouterPageId,delete u.ɵrouterUrl,Object.keys(u).length!==0&&(o.state=u)}let s=this.parseUrl(c);this.scheduleNavigation(s,r,a,o).catch(u=>{this.disposed||this.injector.get(ze$3)(u)})}get url(){return this.serializeUrl(this.currentUrlTree)}getCurrentNavigation(){return Q$1(this.navigationTransitions.currentNavigation)}get lastSuccessfulNavigation(){return this.navigationTransitions.lastSuccessfulNavigation}resetConfig(e){this.config=e.map(lr),this.navigated=!1}ngOnDestroy(){this.dispose()}dispose(){this._events.unsubscribe(),this.navigationTransitions.complete(),this.nonRouterCurrentEntryChangeSubscription?.unsubscribe(),this.nonRouterCurrentEntryChangeSubscription=void 0,this.disposed=!0,this.eventsSubscription.unsubscribe()}createUrlTree(e,r={}){let{relativeTo:i,queryParams:o,fragment:a,queryParamsHandling:c,preserveFragment:s}=r,u=s?this.currentUrlTree.fragment:a,h=null;switch(c??this.options.defaultQueryParamsHandling){case`merge`:h=q$2(q$2({},this.currentUrlTree.queryParams),o);break;case`preserve`:h=this.currentUrlTree.queryParams;break;default:h=o||null}h!==null&&(h=this.removeEmptyProps(h));let v;try{v=fn$3(i?i.snapshot:this.routerState.snapshot.root)}catch(g){(typeof e[0]!=`string`||e[0][0]!==`/`)&&(e=[]),v=this.currentUrlTree.root}return pn$2(v,e,h,u??null,this.urlSerializer)}navigateByUrl(e,r={skipLocationChange:!1}){let i=J$1(e)?e:this.parseUrl(e),o=this.urlHandlingStrategy.merge(i,this.rawUrlTree);return this.scheduleNavigation(o,De,null,r)}navigate(e,r={skipLocationChange:!1}){return Ro$1(e),this.navigateByUrl(this.createUrlTree(e,r),r)}serializeUrl(e){return this.urlSerializer.serialize(e)}parseUrl(e){try{return this.urlSerializer.parse(e)}catch(r){return this.console.warn(Zt$4(4018,!1)),this.urlSerializer.parse(`/`)}}isActive(e,r){let i;if(r===!0?i=q$2({},ir):r===!1?i=q$2({},pe$1):i=q$2(q$2({},pe$1),r),J$1(e))return Vt$2(this.currentUrlTree,e,i);let o=this.parseUrl(e);return Vt$2(this.currentUrlTree,o,i)}removeEmptyProps(e){return Object.entries(e).reduce((r,[i,o])=>(o!=null&&(r[i]=o),r),{})}scheduleNavigation(e,r,i,o,a){if(this.disposed)return Promise.resolve(!1);let c,s,u;a?(c=a.resolve,s=a.reject,u=a.promise):u=new Promise((v,g)=>{c=v,s=g});let h=this.pendingTasks.add();return dr(this,()=>{queueMicrotask(()=>this.pendingTasks.remove(h))}),this.navigationTransitions.handleNavigationRequest({source:r,restoredState:i,currentUrlTree:this.currentUrlTree,currentRawUrl:this.currentUrlTree,rawUrl:e,extras:o,resolve:c,reject:s,promise:u,currentSnapshot:this.routerState.snapshot,currentRouterState:this.routerState}),u.catch(Promise.reject.bind(Promise))}static ɵfac=function(r){return new(r||t)};static ɵprov=Oe$3({token:t,factory:t.ɵfac})}return t})();function Ro$1(t){for(let n=0;n<t.length;n++)if(t[n]==null)throw new C$2(4008,!1)}var Co$1=(()=>{class t{router=g$2(ue$1);stateManager=g$2(Nt$2);fragment=xe$3(``);queryParams=xe$3({});path=xe$3(``);serializer=g$2(Se);constructor(){this.updateState(),this.router.events?.subscribe(e=>{e instanceof H$2&&this.updateState()})}updateState(){let{fragment:e,root:r,queryParams:i}=this.stateManager.getCurrentUrlTree();this.fragment.set(e),this.queryParams.set(i),this.path.set(this.serializer.serialize(new A(r)))}static ɵfac=function(r){return new(r||t)};static ɵprov=Oe$3({token:t,factory:t.ɵfac})}return t})();var Mt$2=(()=>{class t{router;route;tabIndexAttribute;renderer;el;locationStrategy;hrefAttributeValue=g$2(new Tm$1(`href`),{optional:!0});reactiveHref=il(()=>this.isAnchorElement?this.computeHref(this._urlTree()):this.hrefAttributeValue);get href(){return Q$1(this.reactiveHref)}set href(e){this.reactiveHref.set(e)}set target(e){this._target.set(e)}get target(){return Q$1(this._target)}_target=xe$3(void 0);set queryParams(e){this._queryParams.set(e)}get queryParams(){return Q$1(this._queryParams)}_queryParams=xe$3(void 0,{equal:()=>!1});set fragment(e){this._fragment.set(e)}get fragment(){return Q$1(this._fragment)}_fragment=xe$3(void 0);set queryParamsHandling(e){this._queryParamsHandling.set(e)}get queryParamsHandling(){return Q$1(this._queryParamsHandling)}_queryParamsHandling=xe$3(void 0);set state(e){this._state.set(e)}get state(){return Q$1(this._state)}_state=xe$3(void 0,{equal:()=>!1});set info(e){this._info.set(e)}get info(){return Q$1(this._info)}_info=xe$3(void 0,{equal:()=>!1});set relativeTo(e){this._relativeTo.set(e)}get relativeTo(){return Q$1(this._relativeTo)}_relativeTo=xe$3(void 0);set preserveFragment(e){this._preserveFragment.set(e)}get preserveFragment(){return Q$1(this._preserveFragment)}_preserveFragment=xe$3(!1);set skipLocationChange(e){this._skipLocationChange.set(e)}get skipLocationChange(){return Q$1(this._skipLocationChange)}_skipLocationChange=xe$3(!1);set replaceUrl(e){this._replaceUrl.set(e)}get replaceUrl(){return Q$1(this._replaceUrl)}_replaceUrl=xe$3(!1);browserUrl=Zj(void 0);isAnchorElement;onChanges=new ee$3;applicationErrorHandler=g$2(ze$3);options=g$2(be$1,{optional:!0});reactiveRouterState=g$2(Co$1);constructor(e,r,i,o,a,c){this.router=e,this.route=r,this.tabIndexAttribute=i,this.renderer=o,this.el=a,this.locationStrategy=c;let s=a.nativeElement.tagName?.toLowerCase();this.isAnchorElement=s===`a`||s===`area`||!!(typeof customElements==`object`&&customElements.get(s)?.observedAttributes?.includes?.(`href`))}setTabIndexIfNotOnNativeEl(e){this.tabIndexAttribute!=null||this.isAnchorElement||this.applyAttributeValue(`tabindex`,e)}ngOnChanges(e){this.onChanges.next(this)}routerLinkInput=xe$3(null);set routerLink(e){e==null?(this.routerLinkInput.set(null),this.setTabIndexIfNotOnNativeEl(null)):(J$1(e)?this.routerLinkInput.set(e):this.routerLinkInput.set(Array.isArray(e)?e:[e]),this.setTabIndexIfNotOnNativeEl(`0`))}onClick(e,r,i,o,a){let c=this._urlTree();if(c===null||this.isAnchorElement&&(e!==0||r||i||o||a||typeof this.target==`string`&&this.target!=`_self`))return!0;let s=this.browserUrl(),u=q$2({skipLocationChange:this.skipLocationChange,replaceUrl:this.replaceUrl,state:this.state,info:this.info},s!==void 0&&{browserUrl:s});return this.router.navigateByUrl(c,u)?.catch(h=>{this.applicationErrorHandler(h)}),!this.isAnchorElement}ngOnDestroy(){}applyAttributeValue(e,r){let i=this.renderer,o=this.el.nativeElement;r!==null?i.setAttribute(o,e,r):i.removeAttribute(o,e)}_urlTree=qe$3(()=>{this.reactiveRouterState.path(),this._preserveFragment()&&this.reactiveRouterState.fragment();let e=i=>i===`preserve`||i===`merge`;(e(this._queryParamsHandling())||e(this.options?.defaultQueryParamsHandling))&&this.reactiveRouterState.queryParams();let r=this.routerLinkInput();return r===null||!this.router.createUrlTree?null:J$1(r)?r:this.router.createUrlTree(r,{relativeTo:this._relativeTo()!==void 0?this._relativeTo():this.route,queryParams:this._queryParams(),fragment:this._fragment(),queryParamsHandling:this._queryParamsHandling(),preserveFragment:this._preserveFragment()})},{equal:(e,r)=>this.computeHref(e)===this.computeHref(r)});get urlTree(){return Q$1(this._urlTree)}computeHref(e){return e!==null&&this.locationStrategy?this.locationStrategy?.prepareExternalUrl(this.router.serializeUrl(e))??``:null}static ɵfac=function(r){return new(r||t)(ke$3(ue$1),ke$3(W),lu$1(`tabindex`),ke$3(gn$5),ke$3(it$2),ke$3(Vs$1))};static ɵdir=En$3({type:t,selectors:[[``,`routerLink`,``]],hostVars:2,hostBindings:function(r,i){r&1&&Ug(`click`,function(a){return i.onClick(a.button,a.ctrlKey,a.shiftKey,a.altKey,a.metaKey)}),r&2&&Rg(`href`,i.reactiveHref(),mE)(`target`,i._target())},inputs:{target:`target`,queryParams:`queryParams`,fragment:`fragment`,queryParamsHandling:`queryParamsHandling`,state:`state`,info:`info`,relativeTo:`relativeTo`,preserveFragment:[2,`preserveFragment`,`preserveFragment`,mo$2],skipLocationChange:[2,`skipLocationChange`,`skipLocationChange`,mo$2],replaceUrl:[2,`replaceUrl`,`replaceUrl`,mo$2],browserUrl:[1,`browserUrl`],routerLink:`routerLink`},features:[sr$1]})}return t})();var wo$1=(()=>{class t{router;element;renderer;cdr;links;classes=[];routerEventsSubscription;linkInputChangesSubscription;_isActive=!1;get isActive(){return this._isActive}routerLinkActiveOptions={exact:!1};ariaCurrentWhenActive;isActiveChange=new Ke$2;link=g$2(Mt$2,{optional:!0});constructor(e,r,i,o){this.router=e,this.element=r,this.renderer=i,this.cdr=o,this.routerEventsSubscription=e.events.subscribe(a=>{a instanceof H$2&&this.update()})}ngAfterContentInit(){Ty(this.links.changes,Ty(null)).pipe(Er()).subscribe(e=>{this.update(),this.subscribeToEachLinkOnChanges()})}subscribeToEachLinkOnChanges(){this.linkInputChangesSubscription?.unsubscribe();let e=[...this.links.toArray(),this.link].filter(r=>!!r).map(r=>r.onChanges);this.linkInputChangesSubscription=Le$3(e).pipe(Er()).subscribe(r=>{this._isActive!==this.isLinkActive(this.router)(r)&&this.update()})}set routerLinkActive(e){if(e==null){this.classes=[];return}let r=Array.isArray(e)?e:e.split(` `);this.classes=r.filter(i=>!!i)}ngOnChanges(e){this.update()}ngOnDestroy(){this.routerEventsSubscription.unsubscribe(),this.linkInputChangesSubscription?.unsubscribe()}update(){!this.links||!this.router.navigated||this.routerLinkActiveOptions===null&&!this._isActive||queueMicrotask(()=>{let e=this.hasActiveLinks();this.classes.forEach(r=>{e?this.renderer.addClass(this.element.nativeElement,r):this.renderer.removeClass(this.element.nativeElement,r)}),e&&this.ariaCurrentWhenActive!==void 0?this.renderer.setAttribute(this.element.nativeElement,`aria-current`,this.ariaCurrentWhenActive.toString()):this.renderer.removeAttribute(this.element.nativeElement,`aria-current`),this._isActive!==e&&(this._isActive=e,this.cdr.markForCheck(),this.isActiveChange.emit(e))})}isLinkActive(e){let r=this.routerLinkActiveOptions;if(r===null)return()=>!1;let i;return r===void 0?i=q$2({},pe$1):bo$1(r)?i=r:r.exact??!1?i=q$2({},ir):i=q$2({},pe$1),o=>{let a=o.urlTree;return a?Q$1(or(a,e,i)):!1}}hasActiveLinks(){let e=this.isLinkActive(this.router);return this.link&&e(this.link)||this.links.some(e)}static ɵfac=function(r){return new(r||t)(ke$3(ue$1),ke$3(it$2),ke$3(gn$5),ke$3(Ls$1))};static ɵdir=En$3({type:t,selectors:[[``,`routerLinkActive`,``]],contentQueries:function(r,i,o){if(r&1&&Wg(o,Mt$2,5),r&2){let a;Ww(a=qw())&&(i.links=a)}},inputs:{routerLinkActiveOptions:`routerLinkActiveOptions`,ariaCurrentWhenActive:`ariaCurrentWhenActive`,routerLinkActive:`routerLinkActive`},outputs:{isActiveChange:`isActiveChange`},exportAs:[`routerLinkActive`],features:[sr$1]})}return t})();function bo$1(t){let n=t;return!!(n.paths||n.matrixParams||n.queryParams||n.fragment)}var Io$1=new S$1(``);function Ao$1(t,...n){return Va([{provide:Fe$1,multi:!0,useValue:t},{provide:W,useFactory:Eo$1},{provide:Mg,multi:!0,useFactory:To$1},n.map(e=>e.ɵproviders)])}function Eo$1(){return g$2(ue$1).routerState.root}function To$1(){let t=g$2(ne$1);return n=>{let e=t.get(fr);if(n!==e.components[0])return;let r=t.get(ue$1),i=t.get(No$1);t.get(Mo$1)===1&&r.initialNavigation(),t.get(Do$1,null,{optional:!0})?.setUpPreloading(),t.get(Io$1,null,{optional:!0})?.init(),r.resetRootComponentType(e.componentTypes[0]),i.closed||(i.next(),i.complete(),i.unsubscribe())}}var No$1=new S$1(``,{factory:()=>new ee$3});var Mo$1=new S$1(``,{factory:()=>1});var Do$1=new S$1(``);function ae(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}var v=ae();function et$1(n){v=n}var O={exec:()=>null};function M(n){let t=[];return e=>{let r=Math.max(0,Math.min(3,e-1)),i=t[r];return i||(i=n(r),t[r]=i),i}}function g(n,t=``){let e=typeof n==`string`?n:n.source,r={replace:(i,s)=>{let o=typeof s==`string`?s:s.source;return o=o.replace(x.caret,`$1`),e=e.replace(i,o),r},getRegex:()=>new RegExp(e,t)};return r}var gt=((n=``)=>{try{return!!new RegExp(`(?<=1)(?<!1)`+n)}catch(t){return!1}})();var x={codeRemoveIndent:/^(?: {1,4}| {0,3}\t)/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] +\S/,listReplaceTask:/^\[[ xX]\] +/,listTaskCheckbox:/\[[ xX]\]/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:n=>new RegExp(`^( {0,3}${n})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:M(n=>new RegExp(`^ {0,${n}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`)),hrRegex:M(n=>new RegExp(`^ {0,${n}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`)),fencesBeginRegex:M(n=>new RegExp(`^ {0,${n}}(?:\`\`\`|~~~)`)),headingBeginRegex:M(n=>new RegExp(`^ {0,${n}}#`)),htmlBeginRegex:M(n=>new RegExp(`^ {0,${n}}<(?:[a-z].*>|!--)`,`i`)),blockquoteBeginRegex:M(n=>new RegExp(`^ {0,${n}}>`))};var ft=/^(?:[ \t]*(?:\n|$))+/;var mt$1=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/;var kt$1=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/;var q=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/;var xt=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/;var oe=/ {0,3}(?:[*+-]|\d{1,9}[.)])/;var tt=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/;var nt$1=g(tt).replace(/bull/g,oe).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}(?:\s|$)/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,``).getRegex();var bt$1=g(tt).replace(/bull/g,oe).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}(?:\s|$)/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex();var le$1=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table|[ \t]+\n)[^\n]+)*)/;var wt$1=/^[^\n]+/;var ce=/(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/;var yt=g(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace(`label`,ce).replace(`title`,/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex();var St=g(/^(bull)([ \t][^\n]*?)?(?:\n|$)/).replace(/bull/g,oe).getRegex();var Y=`address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul`;var pe=/<!--(?:-?>|[\s\S]*?(?:-->|$))/;var Rt$1=g(`^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n*|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>[^\\n]*\\n*|$)|<![A-Z][\\s\\S]*?(?:>[^\\n]*\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>[^\\n]*\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))`,`i`).replace(`comment`,pe).replace(`tag`,Y).replace(`attribute`,/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex();var rt=n=>g(le$1).replace(`hr`,q).replace(`heading`,` {0,3}#{1,6}(?:\\s|$)`).replace(`|lheading`,``).replace(`|table`,``).replace(`blockquote`,` {0,3}>`).replace(`fences`," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~~~)[^\\n]*\\n").replace(`list`,n).replace(`html`,`</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)`).replace(`tag`,Y).getRegex();var Tt=rt(/ {0,3}(?:[*+-]|1[.)])[ \t]+[^ \t\n]/);var _t=rt(/ {0,3}(?:[*+-]|\d{1,9}[.)])(?:[ \t]|\n|$)/);var he={blockquote:g(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace(`paragraph`,_t).getRegex(),code:mt$1,def:yt,fences:kt$1,heading:xt,hr:q,html:Rt$1,lheading:nt$1,list:St,newline:ft,paragraph:Tt,table:O,text:wt$1};var Qe=g(`^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)`).replace(`hr`,q).replace(`heading`,` {0,3}#{1,6}(?:\\s|$)`).replace(`blockquote`,` {0,3}>`).replace(`code`,`(?: {4}| {0,3}	)[^\\n]`).replace(`fences`," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~~~)[^\\n]*\\n").replace(`list`,` {0,3}(?:[*+-]|1[.)])[ \\t]`).replace(`html`,`</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)`).replace(`tag`,Y).getRegex();var Pt=Z$3(q$2({},he),{lheading:bt$1,table:Qe,paragraph:g(le$1).replace(`hr`,q).replace(`heading`,` {0,3}#{1,6}(?:\\s|$)`).replace(`|lheading`,``).replace(`table`,Qe).replace(`blockquote`,` {0,3}>`).replace(`fences`," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~~~)[^\\n]*\\n").replace(`list`,` {0,3}(?:[*+-]|1[.)])[ \\t]+[^ \\t\\n]`).replace(`html`,`</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)`).replace(`tag`,Y).getRegex()});var $t$2=Z$3(q$2({},he),{html:g(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace(`comment`,pe).replace(/tag/g,`(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b`).getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:O,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:g(le$1).replace(`hr`,q).replace(`heading`,` *#{1,6} *[^
]`).replace(`lheading`,nt$1).replace(`|table`,``).replace(`blockquote`,` {0,3}>`).replace(`|fences`,``).replace(`|list`,``).replace(`|html`,``).replace(`|tag`,``).getRegex()});var Ct=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/;var At=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/;var it=/^( {2,}|\\)\n(?!\s*$)/;var Ot=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/;var E=/[\p{P}\p{S}]/u;var I=/[\s\p{P}\p{S}]/u;var H$1=/[^\s\p{P}\p{S}]/u;var zt=g(/^((?![*_])punctSpace)/,`u`).replace(/punctSpace/g,I).getRegex();var vt=/[\p{Pi}\p{Ps}"']/u;var st$2=/(?!~)[\p{P}\p{S}]/u;var Lt$1=/(?!~)[\s\p{P}\p{S}]/u;var Mt$1=/(?:[^\s\p{P}\p{S}]|~)/u;var It=g(/link|precode-code|html/,`g`).replace(`link`,/\[(?:[^\[\]`]|(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/).replace(`precode-`,gt?"(?<!`)()":"(^^|[^`])").replace(`code`,/(?<b>`+)[^`]+\k<b>(?!`)/).replace(`html`,/<(?! )[^<>]*?>/).getRegex();var at=/^(?:\*+(?:((?!\*)punct)|([^\s*]))?)|^_+(?:((?!_)punct)|([^\s_]))?/;var Dt=g(at,`u`).replace(/punct/g,E).getRegex();var Nt$1=g(at,`u`).replace(/punct/g,st$2).getRegex();var Ft$1=g(/^(?:\*+(?:((?!\*)(?!openQuote)punct)|([^\s*]))?)|^_+(?:((?!_)(?!openQuote)punct)|([^\s_]))?/,`u`).replace(/openQuote/g,vt).replace(/punct/g,E).getRegex();var ot=`^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)`;var jt$1=g(ot,`gu`).replace(/notPunctSpace/g,H$1).replace(/punctSpace/g,I).replace(/punct/g,E).getRegex();var qt$2=g(ot,`gu`).replace(/notPunctSpace/g,Mt$1).replace(/punctSpace/g,Lt$1).replace(/punct/g,st$2).getRegex();var Ut$1=g(`^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)[\\s](\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|(?:(?!\\*)punct|notPunctSpace)(\\*+)(?!\\*)(?=notPunctSpace)`,`gu`).replace(/notPunctSpace/g,H$1).replace(/punctSpace/g,I).replace(/punct/g,E).getRegex();var Zt$1=g(`^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)`,`gu`).replace(/notPunctSpace/g,H$1).replace(/punctSpace/g,I).replace(/punct/g,E).getRegex();var Qt$1=g(`^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)[\\s](_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)|(?:(?!_)punct|notPunctSpace)(_+)(?!_)(?=notPunctSpace)`,`gu`).replace(/notPunctSpace/g,H$1).replace(/punctSpace/g,I).replace(/punct/g,E).getRegex();var Wt$2=g(/^~~?(?:((?!~)punct)|[^\s~])/,`u`).replace(/punct/g,E).getRegex();var Gt$1=g(`^[^~]+(?=[^~])|(?!~)punct(~~?)(?=[\\s]|$)|notPunctSpace(~~?)(?!~)(?=punctSpace|$)|(?!~)punctSpace(~~?)(?=notPunctSpace)|[\\s](~~?)(?!~)(?=punct)|(?!~)punct(~~?)(?!~)(?=punct)|notPunctSpace(~~?)(?=notPunctSpace)`,`gu`).replace(/notPunctSpace/g,H$1).replace(/punctSpace/g,I).replace(/punct/g,E).getRegex();var Vt$1=g(/\\(punct)/,`gu`).replace(/punct/g,E).getRegex();var Jt$1=g(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace(`scheme`,/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace(`email`,/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex();var Yt$1=g(pe).replace(`(?:-->|$)`,`-->`).getRegex();var en$1=g(`^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>`).replace(`comment`,Yt$1).replace(`attribute`,/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex();var V=/(?:\[(?:\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+(?!`)[^`]*?`+(?!`)|``+(?=\])|[^\[\]\\`])*?/;var tn=g(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]+(?:\n[ \t]*)?|\n[ \t]*)(title))?\s*\)/).replace(`label`,V).replace(`href`,/<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]+|(?=\))/).replace(`title`,/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex();var lt$1=g(/^!?\[(label)\]\[(ref)\]/).replace(`label`,V).replace(`ref`,ce).getRegex();var ct$1=g(/^!?\[(ref)\](?:\[\])?/).replace(`ref`,ce).getRegex();var nn$1=g(`reflink|nolink(?!\\()`,`g`).replace(`reflink`,lt$1).replace(`nolink`,ct$1).getRegex();var We=/[hH][tT][tT][pP][sS]?|[fF][tT][pP]/;var ue={_backpedal:O,anyPunctuation:Vt$1,autolink:Jt$1,blockSkip:It,br:it,code:At,del:O,delLDelim:O,delRDelim:O,emStrongLDelim:Dt,emStrongRDelimAst:jt$1,emStrongRDelimUnd:Zt$1,escape:Ct,link:tn,nolink:ct$1,punctuation:zt,reflink:lt$1,reflinkSearch:nn$1,tag:en$1,text:Ot,url:O};var rn$1=Z$3(q$2({},ue),{emStrongLDelim:Ft$1,emStrongRDelimAst:Ut$1,emStrongRDelimUnd:Qt$1,link:g(/^!?\[(label)\]\((.*?)\)/).replace(`label`,V).getRegex(),reflink:g(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace(`label`,V).getRegex()});var re=Z$3(q$2({},ue),{emStrongRDelimAst:qt$2,emStrongLDelim:Nt$1,delLDelim:Wt$2,delRDelim:Gt$1,url:g(/^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace(`protocol`,We).replace(`email`,/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/,text:g(/^(`+|~+|[^`~])(?:(?=[`~])|(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/).replace(`protocol`,We).getRegex()});var sn$1=Z$3(q$2({},re),{br:g(it).replace(`{2,}`,`*`).getRegex(),text:g(re.text).replace(`\\b_`,`\\b_| {2,}\\n`).replace(/\{2,\}/g,`*`).getRegex()});var G={normal:he,gfm:Pt,pedantic:$t$2};var F={normal:ue,gfm:re,breaks:sn$1,pedantic:rn$1};var an$1={"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#39;`};var Xe=n=>an$1[n];function R(n,t){if(t){if(x.escapeTest.test(n))return n.replace(x.escapeReplace,Xe)}else if(x.escapeTestNoEncode.test(n))return n.replace(x.escapeReplaceNoEncode,Xe);return n}function Ge(n){try{n=encodeURI(n).replace(x.percentDecode,`%`)}catch(t){return null}return n}function Ve(n,t){let r=n.replace(x.findPipe,(s,o,a)=>{let l=!1,c=o;for(;--c>=0&&a[c]===`\\`;)l=!l;return l?`|`:` |`}).split(x.splitPipe),i=0;if(r[0].trim()||r.shift(),r.length>0&&!r.at(-1)?.trim()&&r.pop(),t)if(r.length>t)r.splice(t);else for(;r.length<t;)r.push(``);for(;i<r.length;i++)r[i]=r[i].trim().replace(x.slashPipe,`|`);return r}function P(n,t,e){let r=n.length;if(r===0)return``;let i=0;for(;i<r;){let s=n.charAt(r-i-1);if(s===t&&!e)i++;else if(s!==t&&e)i++;else break}return n.slice(0,r-i)}function Je(n){let t=n.split(`
`),e=t.length-1;for(;e>=0&&x.blankLine.test(t[e]);)e--;return t.length-e<=2?n:t.slice(0,e+1).join(`
`)}function on$1(n,t){if(n.indexOf(t[1])===-1)return-1;let e=0;for(let r=0;r<n.length;r++)if(n[r]===`\\`)r++;else if(n[r]===t[0])e++;else if(n[r]===t[1]&&(e--,e<0))return r;return e>0?-2:-1}function ln$1(n,t=0){let e=t,r=``;for(let i of n)if(i===`	`){let s=4-e%4;r+=` `.repeat(s),e+=s}else r+=i,e++;return r}function Ye(n,t,e,r,i){let s=t.href,o=t.title||null,a=n[1].replace(i.other.outputLinkReplace,`$1`);r.state.inLink=!0;let l={type:n[0].charAt(0)===`!`?`image`:`link`,raw:e,href:s,title:o,text:a,tokens:r.inlineTokens(a)};return r.state.inLink=!1,l}function cn$1(n,t,e){let r=n.match(e.other.indentCodeCompensation);if(r===null)return t;let i=r[1];return t.split(`
`).map(s=>{let o=s.match(e.other.beginningSpace);if(o===null)return s;let[a]=o;return a.length>=i.length?s.slice(i.length):s}).join(`
`)}var J=class{options;rules;lexer;constructor(n){this.options=n||v}space(n){let t=this.rules.block.newline.exec(n);if(t&&t[0].length>0)return{type:`space`,raw:t[0]}}code(n){let t=this.rules.block.code.exec(n);if(t){let e=this.options.pedantic?t[0]:Je(t[0]);return{type:`code`,raw:e,codeBlockStyle:`indented`,text:e.replace(this.rules.other.codeRemoveIndent,``)}}}fences(n){let t=this.rules.block.fences.exec(n);if(t){let e=t[0],r=cn$1(e,t[3]||``,this.rules);return{type:`code`,raw:e,lang:t[2]?t[2].trim().replace(this.rules.inline.anyPunctuation,`$1`):t[2],text:r}}}heading(n){let t=this.rules.block.heading.exec(n);if(t){let e=t[2].trim();if(this.rules.other.endingHash.test(e)){let r=P(e,`#`);(this.options.pedantic||!r||this.rules.other.endingSpaceChar.test(r))&&(e=r.trim())}return{type:`heading`,raw:P(t[0],`
`),depth:t[1].length,text:e,tokens:this.lexer.inline(e)}}}hr(n){let t=this.rules.block.hr.exec(n);if(t)return{type:`hr`,raw:P(t[0],`
`)}}blockquote(n){let t=this.rules.block.blockquote.exec(n);if(t){let e=P(t[0],`
`).split(`
`),r=``,i=``,s=[];for(;e.length>0;){let o=!1,a=[],l;for(l=0;l<e.length;l++)if(this.rules.other.blockquoteStart.test(e[l]))a.push(e[l]),o=!0;else if(!o)a.push(e[l]);else break;e=e.slice(l);let c=a.join(`
`),h=c.replace(this.rules.other.blockquoteSetextReplace,`
    $1`).replace(this.rules.other.blockquoteSetextReplace2,``);r=r?`${r}
${c}`:c,i=i?`${i}
${h}`:h;let p=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(h,s,!0),this.lexer.state.top=p,e.length===0)break;let u=s.at(-1);if(u?.type===`code`)break;if(u?.type===`blockquote`){let k=u,d=e.join(`
`),w=k.raw+`
`+d.replace(this.rules.other.blockquoteSetextReplace2,``),C=this.blockquote(w);s[s.length-1]=C,r=`${r}
${d}`,i=i.substring(0,i.length-k.text.length)+C.text;break}else if(u?.type===`list`){let k=u,d=k.raw+`
`+e.join(`
`),w=this.list(d);s[s.length-1]=w,r=r.substring(0,r.length-u.raw.length)+w.raw,i=i.substring(0,i.length-k.raw.length)+w.raw,e=d.substring(s.at(-1).raw.length).split(`
`);continue}}return{type:`blockquote`,raw:r,tokens:s,text:i}}}list(n){let t=this.rules.block.list.exec(n);if(t){let e=t[1].trim(),r=e.length>1,i={type:`list`,raw:``,ordered:r,start:r?+e.slice(0,-1):``,loose:!1,items:[]};e=r?`\\d{1,9}\\${e.slice(-1)}`:`\\${e}`,this.options.pedantic&&(e=r?e:`[*+-]`);let s=this.rules.other.listItemRegex(e),o=!1;for(;n;){let l=!1,c=``,h=``;if(!(t=s.exec(n))||this.rules.block.hr.test(n))break;c=t[0],n=n.substring(c.length);let p=ln$1(t[2].split(`
`,1)[0],t[1].length),u=n.split(`
`,1)[0],k=!p.trim(),d=0;if(this.options.pedantic?(d=2,h=p.trimStart()):k?d=t[1].length+1:(d=p.search(this.rules.other.nonSpaceChar),d=d>4?1:d,h=p.slice(d),d+=t[1].length),k&&this.rules.other.blankLine.test(u)&&(c+=u+`
`,n=n.substring(u.length+1),l=!0),!l){let w=this.rules.other.nextBulletRegex(d),C=this.rules.other.hrRegex(d),D=this.rules.other.fencesBeginRegex(d),ee=this.rules.other.headingBeginRegex(d),ut=this.rules.other.htmlBeginRegex(d),dt=this.rules.other.blockquoteBeginRegex(d);for(;n;){let te=n.split(`
`,1)[0],N;if(u=te,this.options.pedantic?(u=u.replace(this.rules.other.listReplaceNesting,`  `),N=u):N=u.replace(this.rules.other.tabCharGlobal,`    `),D.test(u)||ee.test(u)||ut.test(u)||dt.test(u)||w.test(u)||C.test(u))break;if(N.search(this.rules.other.nonSpaceChar)>=d||!u.trim())h+=`
`+N.slice(d);else{if(k||p.replace(this.rules.other.tabCharGlobal,`    `).search(this.rules.other.nonSpaceChar)>=4||D.test(p)||ee.test(p)||C.test(p))break;h+=`
`+u}k=!u.trim(),c+=te+`
`,n=n.substring(te.length+1),p=N.slice(d)}}i.loose||(o?i.loose=!0:this.rules.other.doubleBlankLine.test(c)&&(o=!0)),i.items.push({type:`list_item`,raw:c,task:!!this.options.gfm&&this.rules.other.listIsTask.test(h),loose:!1,text:h,tokens:[]}),i.raw+=c}let a=i.items.at(-1);if(a)a.raw=a.raw.trimEnd(),a.text=a.text.trimEnd();else return;i.raw=i.raw.trimEnd();for(let l of i.items){this.lexer.state.top=!1,l.tokens=this.lexer.blockTokens(l.text,[]);let c=l.tokens[0];if(l.task&&(c?.type===`text`||c?.type===`paragraph`)){l.text=l.text.replace(this.rules.other.listReplaceTask,``),c.raw=c.raw.replace(this.rules.other.listReplaceTask,``),c.text=c.text.replace(this.rules.other.listReplaceTask,``);for(let p=this.lexer.inlineQueue.length-1;p>=0;p--)if(this.rules.other.listIsTask.test(this.lexer.inlineQueue[p].src)){this.lexer.inlineQueue[p].src=this.lexer.inlineQueue[p].src.replace(this.rules.other.listReplaceTask,``);break}let h=this.rules.other.listTaskCheckbox.exec(l.raw);if(h){let p={type:`checkbox`,raw:h[0]+` `,checked:h[0]!==`[ ]`};l.checked=p.checked,i.loose?l.tokens[0]&&[`paragraph`,`text`].includes(l.tokens[0].type)&&`tokens`in l.tokens[0]&&l.tokens[0].tokens?(l.tokens[0].raw=p.raw+l.tokens[0].raw,l.tokens[0].text=p.raw+l.tokens[0].text,l.tokens[0].tokens.unshift(p)):l.tokens.unshift({type:`paragraph`,raw:p.raw,text:p.raw,tokens:[p]}):l.tokens.unshift(p)}}else l.task&&(l.task=!1);if(!i.loose){let h=l.tokens.filter(u=>u.type===`space`);i.loose=h.length>0&&h.some(u=>this.rules.other.anyLine.test(u.raw))}}if(i.loose)for(let l of i.items){l.loose=!0;for(let c of l.tokens)c.type===`text`&&(c.type=`paragraph`)}return i}}html(n){let t=this.rules.block.html.exec(n);if(t){let e=Je(t[0]);return{type:`html`,block:!0,raw:e,pre:t[1]===`pre`||t[1]===`script`||t[1]===`style`,text:e}}}def(n){let t=this.rules.block.def.exec(n);if(t){let e=t[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal,` `),r=t[2]?t[2].replace(this.rules.other.hrefBrackets,`$1`).replace(this.rules.inline.anyPunctuation,`$1`):``,i=t[3]?t[3].substring(1,t[3].length-1).replace(this.rules.inline.anyPunctuation,`$1`):t[3];return{type:`def`,tag:e,raw:P(t[0],`
`),href:r,title:i}}}table(n){let t=this.rules.block.table.exec(n);if(!t||!this.rules.other.tableDelimiter.test(t[2]))return;let e=Ve(t[1]),r=t[2].replace(this.rules.other.tableAlignChars,``).split(`|`),i=t[3]?.trim()?t[3].replace(this.rules.other.tableRowBlankLine,``).split(`
`):[],s={type:`table`,raw:P(t[0],`
`),header:[],align:[],rows:[]};if(e.length===r.length){for(let o of r)this.rules.other.tableAlignRight.test(o)?s.align.push(`right`):this.rules.other.tableAlignCenter.test(o)?s.align.push(`center`):this.rules.other.tableAlignLeft.test(o)?s.align.push(`left`):s.align.push(null);for(let o=0;o<e.length;o++)s.header.push({text:e[o],tokens:this.lexer.inline(e[o]),header:!0,align:s.align[o]});for(let o of i)s.rows.push(Ve(o,s.header.length).map((a,l)=>({text:a,tokens:this.lexer.inline(a),header:!1,align:s.align[l]})));return s}}lheading(n){let t=this.rules.block.lheading.exec(n);if(t){let e=t[1].trim();return{type:`heading`,raw:P(t[0],`
`),depth:t[2].charAt(0)===`=`?1:2,text:e,tokens:this.lexer.inline(e)}}}paragraph(n){let t=this.rules.block.paragraph.exec(n);if(t){let e=t[1].charAt(t[1].length-1)===`
`?t[1].slice(0,-1):t[1];return{type:`paragraph`,raw:t[0],text:e,tokens:this.lexer.inline(e)}}}text(n){let t=this.rules.block.text.exec(n);if(t)return{type:`text`,raw:t[0],text:t[0],tokens:this.lexer.inline(t[0])}}escape(n){let t=this.rules.inline.escape.exec(n);if(t)return{type:`escape`,raw:t[0],text:t[1]}}tag(n){let t=this.rules.inline.tag.exec(n);if(t)return!this.lexer.state.inLink&&this.rules.other.startATag.test(t[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(t[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(t[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(t[0])&&(this.lexer.state.inRawBlock=!1),{type:`html`,raw:t[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:t[0]}}link(n){let t=this.rules.inline.link.exec(n);if(t){let e=t[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(e)){if(!this.rules.other.endAngleBracket.test(e))return;let s=P(e.slice(0,-1),`\\`);if((e.length-s.length)%2===0)return}else{let s=on$1(t[2],`()`);if(s===-2)return;if(s>-1){let o=(t[0].indexOf(`!`)===0?5:4)+t[1].length+s;t[2]=t[2].substring(0,s),t[0]=t[0].substring(0,o).trim(),t[3]=``}}let r=t[2],i=``;if(this.options.pedantic){let s=this.rules.other.pedanticHrefTitle.exec(r);s&&(r=s[1],i=s[3])}else i=t[3]?t[3].slice(1,-1):``;return r=r.trim(),this.rules.other.startAngleBracket.test(r)&&(this.options.pedantic&&!this.rules.other.endAngleBracket.test(e)?r=r.slice(1):r=r.slice(1,-1)),Ye(t,{href:r&&r.replace(this.rules.inline.anyPunctuation,`$1`),title:i&&i.replace(this.rules.inline.anyPunctuation,`$1`)},t[0],this.lexer,this.rules)}}reflink(n,t){let e;if((e=this.rules.inline.reflink.exec(n))||(e=this.rules.inline.nolink.exec(n))){let i=t[(e[2]||e[1]).replace(this.rules.other.multipleSpaceGlobal,` `).toLowerCase()];if(!i){let s=e[0].charAt(0);return{type:`text`,raw:s,text:s}}return Ye(e,i,e[0],this.lexer,this.rules)}}emStrong(n,t,e=``){let r=this.rules.inline.emStrongLDelim.exec(n);if(!(!r||!r[1]&&!r[2]&&!r[3]&&!r[4]||r[4]&&e.match(this.rules.other.unicodeAlphaNumeric))&&(!(r[1]||r[3])||!e||this.rules.inline.punctuation.exec(e))){let i=[...r[0]].length-1,s,o,a=i,l=0,c=r[0][0],h=e===c,p=c===`*`?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(p.lastIndex=0,t=t.slice(-1*n.length+i);(r=p.exec(t))!==null;){if(s=r[1]||r[2]||r[3]||r[4]||r[5]||r[6],!s)continue;if(o=[...s].length,r[3]||r[4]){a+=o;continue}else if(r[5]||r[6]){if(i%3&&!((i+o)%3)){l+=o;continue}if(h)break}if(a-=o,a>0)continue;o=Math.min(o,o+a+l);let u=[...r[0]][0].length,k=n.slice(0,i+r.index+u+o);if(Math.min(i,o)%2){let w=k.slice(1,-1);return{type:`em`,raw:k,text:w,tokens:this.lexer.inlineTokens(w)}}let d=k.slice(2,-2);return{type:`strong`,raw:k,text:d,tokens:this.lexer.inlineTokens(d)}}}}codespan(n){let t=this.rules.inline.code.exec(n);if(t){let e=t[2].replace(this.rules.other.newLineCharGlobal,` `),r=this.rules.other.nonSpaceChar.test(e),i=this.rules.other.startingSpaceChar.test(e)&&this.rules.other.endingSpaceChar.test(e);return r&&i&&(e=e.substring(1,e.length-1)),{type:`codespan`,raw:t[0],text:e}}}br(n){let t=this.rules.inline.br.exec(n);if(t)return{type:`br`,raw:t[0]}}del(n,t,e=``){let r=this.rules.inline.delLDelim.exec(n);if(r&&(!r[1]||!e||this.rules.inline.punctuation.exec(e))){let i=[...r[0]].length-1,s,o,a=i,l=this.rules.inline.delRDelim;for(l.lastIndex=0,t=t.slice(-1*n.length+i);(r=l.exec(t))!==null;){if(s=r[1]||r[2]||r[3]||r[4]||r[5]||r[6],!s||(o=[...s].length,o!==i))continue;if(r[3]||r[4]){a+=o;continue}if(a-=o,a>0)continue;o=Math.min(o,o+a);let c=[...r[0]][0].length,h=n.slice(0,i+r.index+c+o),p=h.slice(i,-i);return{type:`del`,raw:h,text:p,tokens:this.lexer.inlineTokens(p)}}}}autolink(n){let t=this.rules.inline.autolink.exec(n);if(t){let e,r;return t[2]===`@`?(e=t[1],r=`mailto:`+e):(e=t[1],r=e),{type:`link`,raw:t[0],text:e,href:r,tokens:[{type:`text`,raw:e,text:e}]}}}url(n){let t;if(t=this.rules.inline.url.exec(n)){let e,r;if(t[2]===`@`)e=t[0],r=`mailto:`+e;else{let i;do i=t[0],t[0]=this.rules.inline._backpedal.exec(t[0])?.[0]??``;while(i!==t[0]);e=t[0],t[1]===`www.`?r=`http://`+t[0]:r=t[0]}return{type:`link`,raw:t[0],text:e,href:r,tokens:[{type:`text`,raw:e,text:e}]}}}inlineText(n){let t=this.rules.inline.text.exec(n);if(t){let e=this.lexer.state.inRawBlock;return{type:`text`,raw:t[0],text:t[0],escaped:e}}}};var y=class ie{tokens;options;state;inlineQueue;tokenizer;constructor(t){this.tokens=[],this.tokens.links=Object.create(null),this.options=t||v,this.options.tokenizer=this.options.tokenizer||new J,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};let e={other:x,block:G.normal,inline:F.normal};this.options.pedantic?(e.block=G.pedantic,e.inline=F.pedantic):this.options.gfm&&(e.block=G.gfm,this.options.breaks?e.inline=F.breaks:e.inline=F.gfm),this.tokenizer.rules=e}static get rules(){return{block:G,inline:F}}static lex(t,e){return new ie(e).lex(t)}static lexInline(t,e){return new ie(e).inlineTokens(t)}lex(t){t=t.replace(x.carriageReturn,`
`),this.blockTokens(t,this.tokens);for(let e=0;e<this.inlineQueue.length;e++){let r=this.inlineQueue[e];this.inlineTokens(r.src,r.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(t,e=[],r=!1){this.tokenizer.lexer=this,this.options.pedantic&&(t=t.replace(x.tabCharGlobal,`    `).replace(x.spaceLine,``));let i=Infinity;for(;t;){if(t.length<i)i=t.length;else{this.infiniteLoopError(t.charCodeAt(0));break}let s;if(this.options.extensions?.block?.some(a=>(s=a.call({lexer:this},t,e))?(t=t.substring(s.raw.length),e.push(s),!0):!1))continue;if(s=this.tokenizer.space(t)){t=t.substring(s.raw.length);let a=e.at(-1);s.raw.length===1&&a!==void 0?a.raw+=`
`:e.push(s);continue}if(s=this.tokenizer.code(t)){t=t.substring(s.raw.length);let a=e.at(-1);a?.type===`paragraph`||a?.type===`text`?(a.raw+=(a.raw.endsWith(`
`)?``:`
`)+s.raw,a.text+=`
`+s.text,this.inlineQueue.at(-1).src=a.text):e.push(s);continue}if(s=this.tokenizer.fences(t)){t=t.substring(s.raw.length),e.push(s);continue}if(s=this.tokenizer.heading(t)){t=t.substring(s.raw.length),e.push(s);continue}if(s=this.tokenizer.hr(t)){t=t.substring(s.raw.length),e.push(s);continue}if(s=this.tokenizer.blockquote(t)){t=t.substring(s.raw.length),e.push(s);continue}if(s=this.tokenizer.list(t)){t=t.substring(s.raw.length),e.push(s);continue}if(s=this.tokenizer.html(t)){t=t.substring(s.raw.length),e.push(s);continue}if(s=this.tokenizer.def(t)){t=t.substring(s.raw.length);let a=e.at(-1);a?.type===`paragraph`||a?.type===`text`?(a.raw+=(a.raw.endsWith(`
`)?``:`
`)+s.raw,a.text+=`
`+s.raw,this.inlineQueue.at(-1).src=a.text):this.tokens.links[s.tag]||(this.tokens.links[s.tag]={href:s.href,title:s.title},e.push(s));continue}if(s=this.tokenizer.table(t)){t=t.substring(s.raw.length),e.push(s);continue}if(s=this.tokenizer.lheading(t)){t=t.substring(s.raw.length),e.push(s);continue}let o=t;if(this.options.extensions?.startBlock){let a=Infinity,l=t.slice(1),c;this.options.extensions.startBlock.forEach(h=>{c=h.call({lexer:this},l),typeof c==`number`&&c>=0&&(a=Math.min(a,c))}),a<Infinity&&a>=0&&(o=t.substring(0,a+1))}if(this.state.top&&(s=this.tokenizer.paragraph(o))){let a=e.at(-1);r&&a?.type===`paragraph`?(a.raw+=(a.raw.endsWith(`
`)?``:`
`)+s.raw,a.text+=`
`+s.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=a.text):e.push(s),r=o.length!==t.length,t=t.substring(s.raw.length);continue}if(s=this.tokenizer.text(t)){t=t.substring(s.raw.length);let a=e.at(-1);a?.type===`text`?(a.raw+=(a.raw.endsWith(`
`)?``:`
`)+s.raw,a.text+=`
`+s.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=a.text):e.push(s);continue}if(t){this.infiniteLoopError(t.charCodeAt(0));break}}return this.state.top=!0,e}inline(t,e=[]){return this.inlineQueue.push({src:t,tokens:e}),e}inlineTokens(t,e=[]){this.tokenizer.lexer=this;let r=t;if(this.tokens.links){let a=Object.keys(this.tokens.links);a.length>0&&(r=r.replace(this.tokenizer.rules.inline.reflinkSearch,l=>a.includes(l.slice(l.lastIndexOf(`[`)+1,-1))?`[`+`a`.repeat(l.length-2)+`]`:l))}r=r.replace(this.tokenizer.rules.inline.anyPunctuation,`++`),r=r.replace(this.tokenizer.rules.inline.blockSkip,(a,l,c)=>{let h=c?c.length:0;return a.slice(0,h)+`[`+`a`.repeat(a.length-h-2)+`]`}),r=this.options.hooks?.emStrongMask?.call({lexer:this},r)??r;let i=!1,s=``,o=Infinity;for(;t;){if(t.length<o)o=t.length;else{this.infiniteLoopError(t.charCodeAt(0));break}i||(s=``),i=!1;let a;if(this.options.extensions?.inline?.some(c=>(a=c.call({lexer:this},t,e))?(t=t.substring(a.raw.length),e.push(a),!0):!1))continue;if(a=this.tokenizer.escape(t)){t=t.substring(a.raw.length),e.push(a);continue}if(a=this.tokenizer.tag(t)){t=t.substring(a.raw.length),e.push(a);continue}if(a=this.tokenizer.link(t)){t=t.substring(a.raw.length),e.push(a);continue}if(a=this.tokenizer.reflink(t,this.tokens.links)){t=t.substring(a.raw.length);let c=e.at(-1);a.type===`text`&&c?.type===`text`?(c.raw+=a.raw,c.text+=a.text):e.push(a);continue}if(a=this.tokenizer.emStrong(t,r,s)){t=t.substring(a.raw.length),e.push(a);continue}if(a=this.tokenizer.codespan(t)){t=t.substring(a.raw.length),e.push(a);continue}if(a=this.tokenizer.br(t)){t=t.substring(a.raw.length),e.push(a);continue}if(a=this.tokenizer.del(t,r,s)){t=t.substring(a.raw.length),e.push(a);continue}if(a=this.tokenizer.autolink(t)){t=t.substring(a.raw.length),e.push(a);continue}if(!this.state.inLink&&(a=this.tokenizer.url(t))){t=t.substring(a.raw.length),e.push(a);continue}let l=t;if(this.options.extensions?.startInline){let c=Infinity,h=t.slice(1),p;this.options.extensions.startInline.forEach(u=>{p=u.call({lexer:this},h),typeof p==`number`&&p>=0&&(c=Math.min(c,p))}),c<Infinity&&c>=0&&(l=t.substring(0,c+1))}if(a=this.tokenizer.inlineText(l)){t=t.substring(a.raw.length),a.raw.slice(-1)!==`_`&&(s=a.raw.slice(-1)),i=!0;let c=e.at(-1);c?.type===`text`?(c.raw+=a.raw,c.text+=a.text):e.push(a);continue}if(t){this.infiniteLoopError(t.charCodeAt(0));break}}return e}infiniteLoopError(t){let e=`Infinite loop on byte: `+t;if(this.options.silent)console.error(e);else throw new Error(e)}};var $=class{options;parser;constructor(n){this.options=n||v}space(n){return``}code({text:n,lang:t,escaped:e}){let r=(t||``).match(x.notSpaceStart)?.[0],i=n.replace(x.endingNewline,``)+`
`;return r?`<pre><code class="language-`+R(r)+`">`+(e?i:R(i,!0))+`</code></pre>
`:`<pre><code>`+(e?i:R(i,!0))+`</code></pre>
`}blockquote({tokens:n}){return`<blockquote>
${this.parser.parse(n)}</blockquote>
`}html({text:n}){return n}def(n){return``}heading({tokens:n,depth:t}){return`<h${t}>${this.parser.parseInline(n)}</h${t}>
`}hr(n){return`<hr>
`}list(n){let t=n.ordered,e=n.start,r=``;for(let o=0;o<n.items.length;o++){let a=n.items[o];r+=this.listitem(a)}let i=t?`ol`:`ul`,s=t&&e!==1?` start="`+e+`"`:``;return`<`+i+s+`>
`+r+`</`+i+`>
`}listitem(n){return`<li>${this.parser.parse(n.tokens)}</li>
`}checkbox({checked:n}){return`<input `+(n?`checked="" `:``)+`disabled="" type="checkbox"> `}paragraph({tokens:n}){return`<p>${this.parser.parseInline(n)}</p>
`}table(n){let t=``,e=``;for(let i=0;i<n.header.length;i++)e+=this.tablecell(n.header[i]);t+=this.tablerow({text:e});let r=``;for(let i=0;i<n.rows.length;i++){let s=n.rows[i];e=``;for(let o=0;o<s.length;o++)e+=this.tablecell(s[o]);r+=this.tablerow({text:e})}return r&&(r=`<tbody>${r}</tbody>`),`<table>
<thead>
`+t+`</thead>
`+r+`</table>
`}tablerow({text:n}){return`<tr>
${n}</tr>
`}tablecell(n){let t=this.parser.parseInline(n.tokens),e=n.header?`th`:`td`;return(n.align?`<${e} align="${n.align}">`:`<${e}>`)+t+`</${e}>
`}strong({tokens:n}){return`<strong>${this.parser.parseInline(n)}</strong>`}em({tokens:n}){return`<em>${this.parser.parseInline(n)}</em>`}codespan({text:n}){return`<code>${R(n,!0)}</code>`}br(n){return`<br>`}del({tokens:n}){return`<del>${this.parser.parseInline(n)}</del>`}link({href:n,title:t,tokens:e}){let r=this.parser.parseInline(e),i=Ge(n);if(i===null)return r;n=i;let s=`<a href="`+n+`"`;return t&&(s+=` title="`+R(t)+`"`),s+=`>`+r+`</a>`,s}image({href:n,title:t,text:e,tokens:r}){r&&(e=this.parser.parseInline(r,this.parser.textRenderer));let i=Ge(n);if(i===null)return R(e);n=i;let s=`<img src="${n}" alt="${R(e)}"`;return t&&(s+=` title="${R(t)}"`),s+=`>`,s}text(n){return`tokens`in n&&n.tokens?this.parser.parseInline(n.tokens):`escaped`in n&&n.escaped?n.text:R(n.text)}};var de$1=class{strong({text:n}){return n}em({text:n}){return n}codespan({text:n}){return n}del({text:n}){return n}html({text:n}){return n}text({text:n}){return n}link({text:n}){return``+n}image({text:n}){return``+n}br(){return``}checkbox({raw:n}){return n}};var S=class se{options;renderer;textRenderer;constructor(t){this.options=t||v,this.options.renderer=this.options.renderer||new $,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new de$1}static parse(t,e){return new se(e).parse(t)}static parseInline(t,e){return new se(e).parseInline(t)}parse(t){this.renderer.parser=this;let e=``;for(let r=0;r<t.length;r++){let i=t[r];if(this.options.extensions?.renderers?.[i.type]){let o=i,a=this.options.extensions.renderers[o.type].call({parser:this},o);if(a!==!1||![`space`,`hr`,`heading`,`code`,`table`,`blockquote`,`list`,`checkbox`,`html`,`def`,`paragraph`,`text`].includes(o.type)){e+=a||``;continue}}let s=i;switch(s.type){case`space`:e+=this.renderer.space(s);break;case`hr`:e+=this.renderer.hr(s);break;case`heading`:e+=this.renderer.heading(s);break;case`code`:e+=this.renderer.code(s);break;case`table`:e+=this.renderer.table(s);break;case`blockquote`:e+=this.renderer.blockquote(s);break;case`list`:e+=this.renderer.list(s);break;case`checkbox`:e+=this.renderer.checkbox(s);break;case`html`:e+=this.renderer.html(s);break;case`def`:e+=this.renderer.def(s);break;case`paragraph`:e+=this.renderer.paragraph(s);break;case`text`:e+=this.renderer.text(s);break;default:{let o=`Token with "`+s.type+`" type was not found.`;if(this.options.silent)return console.error(o),``;throw new Error(o)}}}return e}parseInline(t,e=this.renderer){this.renderer.parser=this;let r=``;for(let i=0;i<t.length;i++){let s=t[i];if(this.options.extensions?.renderers?.[s.type]){let a=this.options.extensions.renderers[s.type].call({parser:this},s);if(a!==!1||![`escape`,`html`,`link`,`image`,`checkbox`,`strong`,`em`,`codespan`,`br`,`del`,`text`].includes(s.type)){r+=a||``;continue}}let o=s;switch(o.type){case`escape`:r+=e.text(o);break;case`html`:r+=e.html(o);break;case`link`:r+=e.link(o);break;case`image`:r+=e.image(o);break;case`checkbox`:r+=e.checkbox(o);break;case`strong`:r+=e.strong(o);break;case`em`:r+=e.em(o);break;case`codespan`:r+=e.codespan(o);break;case`br`:r+=e.br(o);break;case`del`:r+=e.del(o);break;case`text`:r+=e.text(o);break;default:{let a=`Token with "`+o.type+`" type was not found.`;if(this.options.silent)return console.error(a),``;throw new Error(a)}}}return r}};var j$1=class{options;block;constructor(n){this.options=n||v}static passThroughHooks=new Set([`preprocess`,`postprocess`,`processAllTokens`,`emStrongMask`]);static passThroughHooksRespectAsync=new Set([`preprocess`,`postprocess`,`processAllTokens`]);preprocess(n){return n}postprocess(n){return n}processAllTokens(n){return n}emStrongMask(n){return n}provideLexer(n=this.block){return n?y.lex:y.lexInline}provideParser(n=this.block){return n?S.parse:S.parseInline}};var pn$1=class{defaults=ae();options=this.setOptions;parse=this.parseMarkdown(!0);parseInline=this.parseMarkdown(!1);Parser=S;Renderer=$;TextRenderer=de$1;Lexer=y;Tokenizer=J;Hooks=j$1;constructor(...n){this.use(...n)}walkTokens(n,t){let e=[];for(let r of n)switch(e=e.concat(t.call(this,r)),r.type){case`table`:{let i=r;for(let s of i.header)e=e.concat(this.walkTokens(s.tokens,t));for(let s of i.rows)for(let o of s)e=e.concat(this.walkTokens(o.tokens,t));break}case`list`:{let i=r;e=e.concat(this.walkTokens(i.items,t));break}default:{let i=r;this.defaults.extensions?.childTokens?.[i.type]?this.defaults.extensions.childTokens[i.type].forEach(s=>{let o=i[s].flat(Infinity);e=e.concat(this.walkTokens(o,t))}):i.tokens&&(e=e.concat(this.walkTokens(i.tokens,t)))}}return e}use(...n){let t=this.defaults.extensions||{renderers:{},childTokens:{}};return n.forEach(e=>{let r=q$2({},e);if(r.async=this.defaults.async||r.async||!1,e.extensions&&(e.extensions.forEach(i=>{if(!i.name)throw new Error(`extension name required`);if(`renderer`in i){let s=t.renderers[i.name];s?t.renderers[i.name]=function(...o){let a=i.renderer.apply(this,o);return a===!1&&(a=s.apply(this,o)),a}:t.renderers[i.name]=i.renderer}if(`tokenizer`in i){if(!i.level||i.level!==`block`&&i.level!==`inline`)throw new Error(`extension level must be 'block' or 'inline'`);let s=t[i.level];s?s.unshift(i.tokenizer):t[i.level]=[i.tokenizer],i.start&&(i.level===`block`?t.startBlock?t.startBlock.push(i.start):t.startBlock=[i.start]:i.level===`inline`&&(t.startInline?t.startInline.push(i.start):t.startInline=[i.start]))}`childTokens`in i&&i.childTokens&&(t.childTokens[i.name]=i.childTokens)}),r.extensions=t),e.renderer){let i=this.defaults.renderer||new $(this.defaults);for(let s in e.renderer){if(!(s in i))throw new Error(`renderer '${s}' does not exist`);if([`options`,`parser`].includes(s))continue;let o=s,a=e.renderer[o],l=i[o];i[o]=(...c)=>{let h=a.apply(i,c);return h===!1&&(h=l.apply(i,c)),h||``}}r.renderer=i}if(e.tokenizer){let i=this.defaults.tokenizer||new J(this.defaults);for(let s in e.tokenizer){if(!(s in i))throw new Error(`tokenizer '${s}' does not exist`);if([`options`,`rules`,`lexer`].includes(s))continue;let o=s,a=e.tokenizer[o],l=i[o];i[o]=(...c)=>{let h=a.apply(i,c);return h===!1&&(h=l.apply(i,c)),h}}r.tokenizer=i}if(e.hooks){let i=this.defaults.hooks||new j$1;for(let s in e.hooks){if(!(s in i))throw new Error(`hook '${s}' does not exist`);if([`options`,`block`].includes(s))continue;let o=s,a=e.hooks[o],l=i[o];j$1.passThroughHooks.has(s)?i[o]=c=>{if(this.defaults.async&&j$1.passThroughHooksRespectAsync.has(s))return hr$1(this,null,function*(){let p=yield a.call(i,c);return l.call(i,p)});let h=a.call(i,c);return l.call(i,h)}:i[o]=(...c)=>{if(this.defaults.async)return hr$1(this,null,function*(){let p=yield a.apply(i,c);return p===!1&&(p=yield l.apply(i,c)),p});let h=a.apply(i,c);return h===!1&&(h=l.apply(i,c)),h}}r.hooks=i}if(e.walkTokens){let i=this.defaults.walkTokens,s=e.walkTokens;r.walkTokens=function(o){let a=[];return a.push(s.call(this,o)),i&&(a=a.concat(i.call(this,o))),a}}this.defaults=q$2(q$2({},this.defaults),r)}),this}setOptions(n){return this.defaults=q$2(q$2({},this.defaults),n),this}lexer(n,t){return y.lex(n,t??this.defaults)}parser(n,t){return S.parse(n,t??this.defaults)}parseMarkdown(n){return(t,e)=>{let r=q$2({},e),i=q$2(q$2({},this.defaults),r),s=this.onError(!!i.silent,!!i.async);if(this.defaults.async===!0&&r.async===!1)return s(new Error(`marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise.`));if(typeof t>`u`||t===null)return s(new Error(`marked(): input parameter is undefined or null`));if(typeof t!=`string`)return s(new Error(`marked(): input parameter is of type `+Object.prototype.toString.call(t)+`, string expected`));if(i.hooks&&(i.hooks.options=i,i.hooks.block=n),i.async)return hr$1(this,null,function*(){let o=i.hooks?yield i.hooks.preprocess(t):t,a=yield(i.hooks?yield i.hooks.provideLexer(n):n?y.lex:y.lexInline)(o,i),l=i.hooks?yield i.hooks.processAllTokens(a):a;i.walkTokens&&(yield Promise.all(this.walkTokens(l,i.walkTokens)));let c=yield(i.hooks?yield i.hooks.provideParser(n):n?S.parse:S.parseInline)(l,i);return i.hooks?yield i.hooks.postprocess(c):c}).catch(s);try{i.hooks&&(t=i.hooks.preprocess(t));let o=(i.hooks?i.hooks.provideLexer(n):n?y.lex:y.lexInline)(t,i);i.hooks&&(o=i.hooks.processAllTokens(o)),i.walkTokens&&this.walkTokens(o,i.walkTokens);let a=(i.hooks?i.hooks.provideParser(n):n?S.parse:S.parseInline)(o,i);return i.hooks&&(a=i.hooks.postprocess(a)),a}catch(o){return s(o)}}}onError(n,t){return e=>{if(e.message+=`
Please report this to https://github.com/markedjs/marked.`,n){let r=`<p>An error occurred:</p><pre>`+R(e.message+``,!0)+`</pre>`;return t?Promise.resolve(r):r}if(t)return Promise.reject(e);throw e}}};var z=new pn$1;function f(n,t){return z.parse(n,t)}f.options=f.setOptions=function(n){return z.setOptions(n),f.defaults=z.defaults,et$1(f.defaults),f};f.getDefaults=ae;f.defaults=v;function hn$2(...n){return z.use(...n),f.defaults=z.defaults,et$1(f.defaults),f}f.use=hn$2;f.walkTokens=function(n,t){return z.walkTokens(n,t)};f.parseInline=z.parseInline;f.Parser=S;f.parser=S.parse;f.Renderer=$;f.TextRenderer=de$1;f.Lexer=y;f.lexer=y.lex;f.Tokenizer=J;f.Hooks=j$1;f.parse=f;f.options;f.setOptions;f.walkTokens;f.parseInline;S.parse;y.lex;var dn$1=[`*`];var gn$2=`Copy`;var fn$2=`Copied`;var mn$1=(()=>{class n{constructor(){this._buttonClick$=new ee$3,this.copied=sH(this._buttonClick$.pipe(ad$1(()=>Vy(Ty(!0),Pt$2(3e3).pipe(ta$1(!1)))),Gy(),Yy(1))),this.copiedText=qe$3(()=>this.copied()?fn$2:gn$2)}onCopyToClipboardClick(){this._buttonClick$.next()}static{this.ɵfac=function(r){return new(r||n)}}static{this.ɵcmp=NC({type:n,selectors:[[`markdown-clipboard`]],decls:2,vars:3,consts:[[1,`markdown-clipboard-button`,3,`click`]],template:function(r,i){r&1&&(Xu$1(0,`button`,0),Gg(`click`,function(){return i.onCopyToClipboardClick()}),yb$1(1),el$1()),r&2&&(Jg(`copied`,i.copied()),lI(),im$1(i.copiedText()))},encapsulation:2})}}return n})();var kn=new S$1(`CLIPBOARD_OPTIONS`);var xn$2=new S$1(`KATEX_OPTIONS`);var bn$2=new S$1(`MARKED_EXTENSIONS`);var wn=new S$1(`MARKED_OPTIONS`);var yn$2=new S$1(`MERMAID_OPTIONS`);var Sn$1=new S$1(`SANITIZE`);function Rn(n){return typeof n==`function`}var Tn$2="[ngx-markdown] When using the `emoji` attribute you *have to* include Emoji-Toolkit files to `angular.json` or use imports. See README for more information";var _n$2="[ngx-markdown] When using the `katex` attribute you *have to* include the `marked-katex-extension` package and its dependencies. See README for more information";var En="[ngx-markdown] When using the `mermaid` attribute you *have to* include Mermaid files to `angular.json` or use imports. See README for more information";var Pn="[ngx-markdown] When using the `clipboard` attribute you *have to* include Clipboard files to `angular.json` or use imports. See README for more information";var $n$1="[ngx-markdown] When using the `clipboard` attribute you *have to* provide the `viewContainerRef` parameter to `MarkdownService.render()` function";var Cn="[ngx-markdown] When using the `src` attribute you *have to* pass the `HttpClient` as a parameter of the `forRoot` method. See README for more information";var pt=(()=>{class n{get options(){return this._options}set options(e){this._options=q$2(q$2({},this.DEFAULT_MARKED_OPTIONS),e)}get renderer(){return this.options.renderer}set renderer(e){this.options.renderer=e}constructor(){this.clipboardOptions=g$2(kn,{optional:!0}),this.extensions=g$2(bn$2,{optional:!0}),this.http=g$2(Ye$3,{optional:!0}),this.mermaidOptions=g$2(yn$2,{optional:!0}),this.katexOptions=g$2(xn$2,{optional:!0}),this.platform=g$2(Vv),this.sanitize=g$2(Sn$1,{optional:!0}),this.sanitizer=g$2(hn$5),this.katexGate={enabled:!1},this.markedKatex=null,this.DEFAULT_MARKED_OPTIONS={renderer:new $},this.DEFAULT_MERMAID_OPTIONS={startOnLoad:!1},this.DEFAULT_CLIPBOARD_OPTIONS={buttonComponent:void 0},this.DEFAULT_PARSE_OPTIONS={decodeHtml:!1,inline:!1,emoji:!1,katex:!1,katexOptions:void 0,mermaid:!1,markedOptions:void 0,disableSanitizer:!1},this.DEFAULT_RENDER_OPTIONS={clipboard:!1,clipboardOptions:void 0,mermaid:!1,mermaidOptions:void 0},this.DEFAULT_SECURITY_CONTEXT=K$2.HTML,this._options=null,this._reload$=new ee$3,this.reload$=this._reload$.asObservable(),this.options=g$2(wn,{optional:!0})}parse(i){return hr$1(this,arguments,function*(e,r=this.DEFAULT_PARSE_OPTIONS){let{decodeHtml:s,inline:o,emoji:a,katex:l,katexOptions:c,mermaid:h,disableSanitizer:p}=r;this.katexGate={enabled:!!r.katex};let u=q$2(q$2({},this.options),r.markedOptions),k=u.renderer||this.renderer||new $;this.extensions&&(this.renderer=this.extendsRendererForExtensions(k)),l&&(this.renderer=yield this.extendsRendererForKatex(k,c)),h&&(this.renderer=this.extendsRendererForMermaid(k));let d=this.trimIndentation(e),w=s?this.decodeHtml(d):d,C=a?this.parseEmoji(w):w,D=this.parseMarked(C,u,o);return p?D:this.sanitizeHtml(D)})}render(e,r=this.DEFAULT_RENDER_OPTIONS,i){let{clipboard:s,clipboardOptions:o,mermaid:a,mermaidOptions:l}=r;a&&this.renderMermaid(e,q$2(q$2(q$2({},this.DEFAULT_MERMAID_OPTIONS),this.mermaidOptions),l)),s&&this.renderClipboard(e,i,q$2(q$2(q$2({},this.DEFAULT_CLIPBOARD_OPTIONS),this.clipboardOptions),o)),this.highlight(e)}reload(){this._reload$.next()}getSource(e){if(!this.http)throw new Error(Cn);return this.http.get(e,{responseType:`text`}).pipe(Ye$2(r=>this.handleExtension(e,r)))}highlight(e){if(!GB(this.platform)||typeof Prism>`u`||typeof Prism.highlightAllUnder>`u`)return;e||(e=document);let r=e.querySelectorAll(`pre code:not([class*="language-"])`);Array.prototype.forEach.call(r,i=>i.classList.add(`language-none`)),Prism.highlightAllUnder(e)}decodeHtml(e){if(!GB(this.platform))return e;let r=document.createElement(`textarea`);return r.innerHTML=e,r.value}extendsRendererForExtensions(e){let r=e;return r.ɵNgxMarkdownRendererExtendedForExtensions===!0||(this.extensions&&this.extensions.length>0&&f.use(...this.extensions),r.ɵNgxMarkdownRendererExtendedForExtensions=!0),e}extendsRendererForKatex(e,r){return hr$1(this,null,function*(){let i=this.katexGate,s=e;if(s.ɵNgxMarkdownRendererExtendedForKatex===!0)return e;if(this.markedKatex??=yield import(`marked-katex-extension`).then(h=>h.default).catch(()=>null),!this.markedKatex)throw new Error(_n$2);let o=q$2(q$2({},this.katexOptions),r),a=this.markedKatex(o),l=a.extensions?.map(h=>{let u=h.tokenizer;return Z$3(q$2({},h),{tokenizer(k){if(!(!i.enabled||!u))return u.call(this,k,[])}})}),c=Z$3(q$2({},a),{extensions:l});return f.use(c),s.ɵNgxMarkdownRendererExtendedForKatex=!0,e})}extendsRendererForMermaid(e){let r=e;if(r.ɵNgxMarkdownRendererExtendedForMermaid===!0)return e;let i=e.code;return e.code=s=>s.lang===`mermaid`?`<div class="mermaid">${s.text}</div>`:i(s),r.ɵNgxMarkdownRendererExtendedForMermaid=!0,e}handleExtension(e,r){let i=e.lastIndexOf(`://`),s=i>-1?e.substring(i+4):e,o=s.lastIndexOf(`/`),a=o>-1?s.substring(o+1).split(`?`)[0]:``,l=a.lastIndexOf(`.`),c=l>-1?a.substring(l+1):``;return c&&c!==`md`?"```"+c+`
`+r+"\n```":r}parseMarked(e,r,i=!1){if(r.renderer){let s=q$2({},r.renderer);delete s.ɵNgxMarkdownRendererExtendedForExtensions,delete s.ɵNgxMarkdownRendererExtendedForKatex,delete s.ɵNgxMarkdownRendererExtendedForMermaid,delete r.renderer,f.use({renderer:s})}return i?f.parseInline(e,r):f.parse(e,r)}parseEmoji(e){if(!GB(this.platform))return e;if(typeof joypixels>`u`||typeof joypixels.shortnameToUnicode>`u`)throw new Error(Tn$2);return joypixels.shortnameToUnicode(e)}renderClipboard(e,r,i){if(!GB(this.platform))return;if(typeof ClipboardJS>`u`)throw new Error(Pn);if(!r)throw new Error($n$1);let{buttonComponent:s,buttonTemplate:o}=i,a=e.querySelectorAll(`pre`);for(let l=0;l<a.length;l++){let c=a.item(l),h=document.createElement(`div`);h.style.position=`relative`,c.parentNode.insertBefore(h,c),h.appendChild(c);let p=document.createElement(`div`);p.classList.add(`markdown-clipboard-toolbar`),p.style.position=`absolute`,p.style.top=`.5em`,p.style.right=`.5em`,p.style.zIndex=`1`,h.insertAdjacentElement(`beforeend`,p),h.onmouseenter=()=>p.classList.add(`hover`),h.onmouseleave=()=>p.classList.remove(`hover`);let u;if(s){let d=r.createComponent(s);u=d.hostView,d.changeDetectorRef.markForCheck()}else if(o)u=r.createEmbeddedView(o);else{let d=r.createComponent(mn$1);u=d.hostView,d.changeDetectorRef.markForCheck()}let k;u.rootNodes.forEach(d=>{p.appendChild(d),k=new ClipboardJS(d,{text:()=>c.innerText})}),u.onDestroy(()=>k.destroy())}}renderMermaid(e,r=this.DEFAULT_MERMAID_OPTIONS){if(!GB(this.platform))return;if(typeof mermaid>`u`||typeof mermaid.initialize>`u`)throw new Error(En);let i=e.querySelectorAll(`.mermaid`);i.length!==0&&(mermaid.initialize(r),mermaid.run({nodes:i}))}trimIndentation(e){if(!e)return``;let r;return e.split(`
`).map(i=>{let s=r;return i.length>0&&(s=isNaN(s)?i.search(/\S|$/):Math.min(i.search(/\S|$/),s)),isNaN(r)&&(r=s),s?i.substring(s):i}).join(`
`)}sanitizeHtml(e){return hr$1(this,null,function*(){return Rn(this.sanitize)?this.sanitize(yield e):this.sanitize!==K$2.NONE?this.sanitizer.sanitize(this.sanitize??this.DEFAULT_SECURITY_CONTEXT,e)??``:e})}static{this.ɵfac=function(r){return new(r||n)}}static{this.ɵprov=P$1({token:n,factory:n.ɵfac})}}return n})();var ge=(function(n){return n.CommandLine=`command-line`,n.LineHighlight=`line-highlight`,n.LineNumbers=`line-numbers`,n})(ge||{});var ht=(()=>{class n{constructor(){this.element=g$2(it$2),this.markdownService=g$2(pt),this.viewContainerRef=g$2(Dn$2),this.error=new Ke$2,this.load=new Ke$2,this.ready=new Ke$2,this._clipboard=!1,this._commandLine=!1,this._disableSanitizer=!1,this._emoji=!1,this._inline=!1,this._katex=!1,this._lineHighlight=!1,this._lineNumbers=!1,this._mermaid=!1,this.destroyed$=new ee$3}get disableSanitizer(){return this._disableSanitizer}set disableSanitizer(e){this._disableSanitizer=this.coerceBooleanProperty(e)}get inline(){return this._inline}set inline(e){this._inline=this.coerceBooleanProperty(e)}get clipboard(){return this._clipboard}set clipboard(e){this._clipboard=this.coerceBooleanProperty(e)}get emoji(){return this._emoji}set emoji(e){this._emoji=this.coerceBooleanProperty(e)}get katex(){return this._katex}set katex(e){this._katex=this.coerceBooleanProperty(e)}get mermaid(){return this._mermaid}set mermaid(e){this._mermaid=this.coerceBooleanProperty(e)}get lineHighlight(){return this._lineHighlight}set lineHighlight(e){this._lineHighlight=this.coerceBooleanProperty(e)}get lineNumbers(){return this._lineNumbers}set lineNumbers(e){this._lineNumbers=this.coerceBooleanProperty(e)}get commandLine(){return this._commandLine}set commandLine(e){this._commandLine=this.coerceBooleanProperty(e)}ngOnChanges(){this.loadContent()}loadContent(){if(this.data!=null){this.handleData();return}if(this.src!=null){this.handleSrc();return}}ngAfterViewInit(){!this.data&&!this.src&&this.handleTransclusion(),this.markdownService.reload$.pipe(ia$1(this.destroyed$)).subscribe(()=>this.loadContent())}ngOnDestroy(){this.destroyed$.next(),this.destroyed$.complete()}render(e,r=!1){return hr$1(this,null,function*(){let i={decodeHtml:r,inline:this.inline,emoji:this.emoji,katex:this.katex,katexOptions:this.katexOptions,mermaid:this.mermaid,disableSanitizer:this.disableSanitizer},s={clipboard:this.clipboard,clipboardOptions:this.getClipboardOptions(),mermaid:this.mermaid,mermaidOptions:this.mermaidOptions},o=yield this.markdownService.parse(e,i);this.element.nativeElement.innerHTML=o,this.handlePlugins(),this.markdownService.render(this.element.nativeElement,s,this.viewContainerRef),this.ready.emit()})}coerceBooleanProperty(e){return e!=null&&`${String(e)}`!=`false`}getClipboardOptions(){if(this.clipboardButtonComponent||this.clipboardButtonTemplate)return{buttonComponent:this.clipboardButtonComponent,buttonTemplate:this.clipboardButtonTemplate}}handleData(){this.render(this.data)}handleSrc(){this.markdownService.getSource(this.src).subscribe({next:e=>{this.render(e).then(()=>{this.load.emit(e)})},error:e=>this.error.emit(e)})}handleTransclusion(){this.render(this.element.nativeElement.innerHTML,!0)}handlePlugins(){this.commandLine&&(this.setPluginClass(this.element.nativeElement,ge.CommandLine),this.setPluginOptions(this.element.nativeElement,{dataFilterOutput:this.filterOutput,dataHost:this.host,dataPrompt:this.prompt,dataOutput:this.output,dataUser:this.user})),this.lineHighlight&&this.setPluginOptions(this.element.nativeElement,{dataLine:this.line,dataLineOffset:this.lineOffset}),this.lineNumbers&&(this.setPluginClass(this.element.nativeElement,ge.LineNumbers),this.setPluginOptions(this.element.nativeElement,{dataStart:this.start}))}setPluginClass(e,r){let i=e.querySelectorAll(`pre`);for(let s=0;s<i.length;s++){let o=r instanceof Array?r:[r];i.item(s).classList.add(...o)}}setPluginOptions(e,r){let i=e.querySelectorAll(`pre`);for(let s=0;s<i.length;s++)Object.keys(r).forEach(o=>{let a=r[o];if(a){let l=this.toLispCase(o);i.item(s).setAttribute(l,a.toString())}})}toLispCase(e){let r=e.match(/([A-Z])/g);if(!r)return e;let i=e.toString();for(let s=0,o=r.length;s<o;s++)i=i.replace(new RegExp(r[s]),`-`+r[s].toLowerCase());return i.slice(0,1)===`-`&&(i=i.slice(1)),i}static{this.ɵfac=function(r){return new(r||n)}}static{this.ɵcmp=NC({type:n,selectors:[[`markdown`],[``,`markdown`,``]],inputs:{data:`data`,src:`src`,disableSanitizer:`disableSanitizer`,inline:`inline`,clipboard:`clipboard`,clipboardButtonComponent:`clipboardButtonComponent`,clipboardButtonTemplate:`clipboardButtonTemplate`,emoji:`emoji`,katex:`katex`,katexOptions:`katexOptions`,mermaid:`mermaid`,mermaidOptions:`mermaidOptions`,lineHighlight:`lineHighlight`,line:`line`,lineOffset:`lineOffset`,lineNumbers:`lineNumbers`,start:`start`,commandLine:`commandLine`,filterOutput:`filterOutput`,host:`host`,prompt:`prompt`,output:`output`,user:`user`},outputs:{error:`error`,load:`load`,ready:`ready`},features:[sr$1],ngContentSelectors:dn$1,decls:1,vars:0,template:function(r,i){r&1&&(Uw(),Gw(0))},encapsulation:2})}}return n})();function pr(n){return[pt,n?.loader??[],n?.clipboardOptions??[],n?.katexOptions??[],n?.markedOptions??[],n?.mermaidOptions??[],n?.markedExtensions??[],n?.sanitize??[]]}function An(n,t){if(n&1&&(cs$1(0,`div`,0)(1,`div`,1),kg(2,`markdown`,2),Ju$1()()),n&2){let e=Hw();lI(2),Og(`src`,e.path())(`start`,0)}}var yr=(()=>{class n{constructor(){this.activatedRoute=g$2(W),this.filePath=Zj(void 0),this.routeFilePath=sH(this.activatedRoute.data.pipe(Ye$2(e=>e?.filePath))),this.path=qe$3(()=>this.routeFilePath()??this.filePath())}static{this.ɵfac=function(r){return new(r||n)}}static{this.ɵcmp=NC({type:n,selectors:[[`lab900-markdown-page`]],inputs:{filePath:[1,`filePath`]},decls:1,vars:1,consts:[[1,`markdown-page`,`row`],[1,`page`],[`lineNumbers`,``,3,`src`,`start`]],template:function(r,i){r&1&&Nw(0,An,3,2,`div`,0),r&2&&xw(i.path()?0:-1)},dependencies:[ht],styles:[`.page[_ngcontent-%COMP%]{background:#fff;padding:30px}@media screen and (max-width:599px){.page[_ngcontent-%COMP%]{padding:15px}}.page[_ngcontent-%COMP%]     h1{font-size:2rem;font-weight:600;margin-top:0}.page[_ngcontent-%COMP%]     h2{font-size:1.5rem;font-weight:600;margin:30px 0 6px}.page[_ngcontent-%COMP%]     h3{font-size:1.25rem;font-weight:600;margin:20px 0 6px}.page[_ngcontent-%COMP%]     p{font-size:1rem;line-height:1.4}.page[_ngcontent-%COMP%]     table{border-collapse:collapse;width:100%}.page[_ngcontent-%COMP%]     table td, .page[_ngcontent-%COMP%]     table th{border:1px solid #c0eae8;padding:8px;text-align:left}.page[_ngcontent-%COMP%]     table th{background:#c0eae8;font-weight:600}.page[_ngcontent-%COMP%]     table a{color:inherit}`]})}}return n})();var p=(function(a){return a[a.FADING_IN=0]=`FADING_IN`,a[a.VISIBLE=1]=`VISIBLE`,a[a.FADING_OUT=2]=`FADING_OUT`,a[a.HIDDEN=3]=`HIDDEN`,a})(p||{});var st$1=class{_renderer;element;config;_animationForciblyDisabledThroughCss;state=p.HIDDEN;constructor(o,t,n,e=!1){this._renderer=o,this.element=t,this.config=n,this._animationForciblyDisabledThroughCss=e}fadeOut(){this._renderer.fadeOutRipple(this)}};var Lt=Re$3({passive:!0,capture:!0});var ct=class{_events=new Map;addHandler(o,t,n,e){let i=this._events.get(t);if(i){let r=i.get(n);r?r.add(e):i.set(n,new Set([e]))}else this._events.set(t,new Map([[n,new Set([e])]])),o.runOutsideAngular(()=>{document.addEventListener(t,this._delegateEventHandler,Lt)})}removeHandler(o,t,n){let e=this._events.get(o);if(!e)return;let i=e.get(t);i&&(i.delete(n),i.size===0&&e.delete(t),e.size===0&&(this._events.delete(o),document.removeEventListener(o,this._delegateEventHandler,Lt)))}_delegateEventHandler=o=>{let t=M$1(o);t&&this._events.get(o.type)?.forEach((n,e)=>{(e===t||e.contains(t))&&n.forEach(i=>i.handleEvent(o))})}};var B={enterDuration:225,exitDuration:150};var nn=800;var Bt=Re$3({passive:!0,capture:!0});var Ut=[`mousedown`,`touchstart`];var jt=[`mouseup`,`mouseleave`,`touchend`,`touchcancel`];var en=(()=>{class a{static ɵfac=function(n){return new(n||a)};static ɵcmp=NC({type:a,selectors:[[`ng-component`]],hostAttrs:[`mat-ripple-style-loader`,``],decls:0,vars:0,template:function(n,e){},styles:[`.mat-ripple {
  overflow: hidden;
  position: relative;
}
.mat-ripple:not(:empty) {
  transform: translateZ(0);
}

.mat-ripple.mat-ripple-unbounded {
  overflow: visible;
}

.mat-ripple-element {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
  transition: opacity, transform 0ms cubic-bezier(0, 0, 0.2, 1);
  transform: scale3d(0, 0, 0);
  background-color: var(--%NS%mat-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 10%, transparent));
}
@media (forced-colors: active) {
  .mat-ripple-element {
    display: none;
  }
}
.cdk-drag-preview .mat-ripple-element, .cdk-drag-placeholder .mat-ripple-element {
  display: none;
}
`],encapsulation:2})}return a})();var U=class a{_target;_ngZone;_platform;_containerElement;_triggerElement=null;_isPointerDown=!1;_activeRipples=new Map;_mostRecentTransientRipple=null;_lastTouchStartEvent;_pointerUpEventsRegistered=!1;_containerRect=null;static _eventManager=new ct;constructor(o,t,n,e,i){this._target=o,this._ngZone=t,this._platform=e,e.isBrowser&&(this._containerElement=A$1(n)),i&&i.get($$2).load(en)}fadeInRipple(o,t,n={}){let e=this._containerRect=this._containerRect||this._containerElement.getBoundingClientRect(),i=q$2(q$2({},B),n.animation);n.centered&&(o=e.left+e.width/2,t=e.top+e.height/2);let r=n.radius||an(o,t,e),c=o-e.left,f=t-e.top,l=i.enterDuration,m=document.createElement(`div`);m.classList.add(`mat-ripple-element`),m.style.left=`${c-r}px`,m.style.top=`${f-r}px`,m.style.height=`${r*2}px`,m.style.width=`${r*2}px`,n.color!=null&&(m.style.backgroundColor=n.color),m.style.transitionDuration=`${l}ms`,this._containerElement.appendChild(m);let pt=window.getComputedStyle(m),tn=pt.transitionProperty,ft=pt.transitionDuration,at=tn===`none`||ft===`0s`||ft===`0s, 0s`||e.width===0&&e.height===0,w=new st$1(this,m,n,at);m.style.transform=`scale3d(1, 1, 1)`,w.state=p.FADING_IN,n.persistent||(this._mostRecentTransientRipple=w);let $=null;return!at&&(l||i.exitDuration)&&this._ngZone.runOutsideAngular(()=>{let vt=()=>{$&&($.fallbackTimer=null),clearTimeout(ht),this._finishRippleTransition(w)},ot=()=>this._destroyRipple(w),ht=setTimeout(ot,l+100);m.addEventListener(`transitionend`,vt),m.addEventListener(`transitioncancel`,ot),$={onTransitionEnd:vt,onTransitionCancel:ot,fallbackTimer:ht}}),this._activeRipples.set(w,$),(at||!l)&&this._finishRippleTransition(w),w}fadeOutRipple(o){if(o.state===p.FADING_OUT||o.state===p.HIDDEN)return;let t=o.element,n=q$2(q$2({},B),o.config.animation);t.style.transitionDuration=`${n.exitDuration}ms`,t.style.opacity=`0`,o.state=p.FADING_OUT,(o._animationForciblyDisabledThroughCss||!n.exitDuration)&&this._finishRippleTransition(o)}fadeOutAll(){this._getActiveRipples().forEach(o=>o.fadeOut())}fadeOutAllNonPersistent(){this._getActiveRipples().forEach(o=>{o.config.persistent||o.fadeOut()})}setupTriggerEvents(o){let t=A$1(o);!this._platform.isBrowser||!t||t===this._triggerElement||(this._removeTriggerEvents(),this._triggerElement=t,Ut.forEach(n=>{a._eventManager.addHandler(this._ngZone,n,t,this)}))}handleEvent(o){o.type===`mousedown`?this._onMousedown(o):o.type===`touchstart`?this._onTouchStart(o):this._onPointerUp(),this._pointerUpEventsRegistered||(this._ngZone.runOutsideAngular(()=>{jt.forEach(t=>{this._triggerElement.addEventListener(t,this,Bt)})}),this._pointerUpEventsRegistered=!0)}_finishRippleTransition(o){o.state===p.FADING_IN?this._startFadeOutTransition(o):o.state===p.FADING_OUT&&this._destroyRipple(o)}_startFadeOutTransition(o){let t=o===this._mostRecentTransientRipple,{persistent:n}=o.config;o.state=p.VISIBLE,!n&&(!t||!this._isPointerDown)&&o.fadeOut()}_destroyRipple(o){let t=this._activeRipples.get(o)??null;this._activeRipples.delete(o),this._activeRipples.size||(this._containerRect=null),o===this._mostRecentTransientRipple&&(this._mostRecentTransientRipple=null),o.state=p.HIDDEN,t!==null&&(o.element.removeEventListener(`transitionend`,t.onTransitionEnd),o.element.removeEventListener(`transitioncancel`,t.onTransitionCancel),t.fallbackTimer!==null&&clearTimeout(t.fallbackTimer)),o.element.remove()}_onMousedown(o){let t=Oe$2(o),n=this._lastTouchStartEvent&&Date.now()<this._lastTouchStartEvent+nn;!this._target.rippleDisabled&&!t&&!n&&(this._isPointerDown=!0,this.fadeInRipple(o.clientX,o.clientY,this._target.rippleConfig))}_onTouchStart(o){if(!this._target.rippleDisabled&&!De$2(o)){this._lastTouchStartEvent=Date.now(),this._isPointerDown=!0;let t=o.changedTouches;if(t)for(let n=0;n<t.length;n++)this.fadeInRipple(t[n].clientX,t[n].clientY,this._target.rippleConfig)}}_onPointerUp(){this._isPointerDown&&(this._isPointerDown=!1,this._getActiveRipples().forEach(o=>{let t=o.state===p.VISIBLE||o.config.terminateOnPointerUp&&o.state===p.FADING_IN;!o.config.persistent&&t&&o.fadeOut()}))}_getActiveRipples(){return Array.from(this._activeRipples.keys())}_removeTriggerEvents(){let o=this._triggerElement;o&&(Ut.forEach(t=>a._eventManager.removeHandler(t,o,this)),this._pointerUpEventsRegistered&&(jt.forEach(t=>o.removeEventListener(t,this,Bt)),this._pointerUpEventsRegistered=!1))}};function an(a,o,t){let n=Math.max(Math.abs(a-t.left),Math.abs(a-t.right)),e=Math.max(Math.abs(o-t.top),Math.abs(o-t.bottom));return Math.sqrt(n*n+e*e)}var mt=new S$1(`mat-ripple-global-options`);var Tn$1=(()=>{class a{_elementRef=g$2(it$2);_animationsDisabled=ai$3();color;unbounded=!1;centered=!1;radius=0;animation;get disabled(){return this._disabled}set disabled(t){t&&this.fadeOutAllNonPersistent(),this._disabled=t,this._setupTriggerEventsIfEnabled()}_disabled=!1;get trigger(){return this._trigger||this._elementRef.nativeElement}set trigger(t){this._trigger=t,this._setupTriggerEventsIfEnabled()}_trigger;_rippleRenderer;_globalOptions;_isInitialized=!1;constructor(){let t=g$2(U$4),n=g$2(J$3),e=g$2(mt,{optional:!0}),i=g$2(ne$1);this._globalOptions=e||{},this._rippleRenderer=new U(this,t,this._elementRef,n,i)}ngOnInit(){this._isInitialized=!0,this._setupTriggerEventsIfEnabled()}ngOnDestroy(){this._rippleRenderer._removeTriggerEvents()}fadeOutAll(){this._rippleRenderer.fadeOutAll()}fadeOutAllNonPersistent(){this._rippleRenderer.fadeOutAllNonPersistent()}get rippleConfig(){return{centered:this.centered,radius:this.radius,color:this.color,animation:q$2(q$2(q$2({},this._globalOptions.animation),this._animationsDisabled?{enterDuration:0,exitDuration:0}:{}),this.animation),terminateOnPointerUp:this._globalOptions.terminateOnPointerUp}}get rippleDisabled(){return this.disabled||!!this._globalOptions.disabled}_setupTriggerEventsIfEnabled(){!this.disabled&&this._isInitialized&&this._rippleRenderer.setupTriggerEvents(this.trigger)}launch(t,n=0,e){return typeof t==`number`?this._rippleRenderer.fadeInRipple(t,n,q$2(q$2({},this.rippleConfig),e)):this._rippleRenderer.fadeInRipple(0,0,q$2(q$2({},this.rippleConfig),t))}static ɵfac=function(n){return new(n||a)};static ɵdir=En$3({type:a,selectors:[[``,`mat-ripple`,``],[``,`matRipple`,``]],hostAttrs:[1,`mat-ripple`],hostVars:2,hostBindings:function(n,e){n&2&&Jg(`mat-ripple-unbounded`,e.unbounded)},inputs:{color:[0,`matRippleColor`,`color`],unbounded:[0,`matRippleUnbounded`,`unbounded`],centered:[0,`matRippleCentered`,`centered`],radius:[0,`matRippleRadius`,`radius`],animation:[0,`matRippleAnimation`,`animation`],disabled:[0,`matRippleDisabled`,`disabled`],trigger:[0,`matRippleTrigger`,`trigger`]},exportAs:[`matRipple`]})}return a})();var on={capture:!0};var rn=[`focus`,`mousedown`,`mouseenter`,`touchstart`];var dt=`mat-ripple-loader-uninitialized`;var lt=`mat-ripple-loader-class-name`;var Ht=`mat-ripple-loader-centered`;var nt=`mat-ripple-loader-disabled`;var $t$1=(()=>{class a{_document=g$2(Ne$3);_animationsDisabled=ai$3();_globalRippleOptions=g$2(mt,{optional:!0});_platform=g$2(J$3);_ngZone=g$2(U$4);_injector=g$2(ne$1);_eventCleanups;_hosts=new Map;constructor(){let t=g$2(to$2).createRenderer(null,null);this._eventCleanups=this._ngZone.runOutsideAngular(()=>rn.map(n=>t.listen(this._document,n,this._onInteraction,on)))}ngOnDestroy(){let t=this._hosts.keys();for(let n of t)this.destroyRipple(n);this._eventCleanups.forEach(n=>n())}configureRipple(t,n){t.setAttribute(dt,this._globalRippleOptions?.namespace??``),(n.className||!t.hasAttribute(lt))&&t.setAttribute(lt,n.className||``),n.centered&&t.setAttribute(Ht,``),n.disabled&&t.setAttribute(nt,``)}setDisabled(t,n){let e=this._hosts.get(t);e?(e.target.rippleDisabled=n,!n&&!e.hasSetUpEvents&&(e.hasSetUpEvents=!0,e.renderer.setupTriggerEvents(t))):n?t.setAttribute(nt,``):t.removeAttribute(nt)}_onInteraction=t=>{let n=M$1(t);if(n instanceof HTMLElement){let e=n.closest(`[${dt}="${this._globalRippleOptions?.namespace??``}"]`);e&&this._createRipple(e)}};_createRipple(t){if(!this._document||this._hosts.has(t))return;t.querySelector(`.mat-ripple`)?.remove();let n=this._document.createElement(`span`);n.classList.add(`mat-ripple`,t.getAttribute(lt)),t.append(n);let e=this._globalRippleOptions,i=this._animationsDisabled?0:e?.animation?.enterDuration??B.enterDuration,r=this._animationsDisabled?0:e?.animation?.exitDuration??B.exitDuration,c={rippleDisabled:this._animationsDisabled||e?.disabled||t.hasAttribute(nt),rippleConfig:{centered:t.hasAttribute(Ht),terminateOnPointerUp:e?.terminateOnPointerUp,animation:{enterDuration:i,exitDuration:r}}},f=new U(c,this._ngZone,n,this._platform,this._injector),l=!c.rippleDisabled;l&&f.setupTriggerEvents(t),this._hosts.set(t,{target:c,renderer:f,hasSetUpEvents:l}),t.removeAttribute(dt)}destroyRipple(t){let n=this._hosts.get(t);n&&(n.renderer._removeTriggerEvents(),this._hosts.delete(t))}static ɵfac=function(n){return new(n||a)};static ɵprov=Oe$3({token:a,factory:a.ɵfac})}return a})();var Vt=(()=>{class a{static ɵfac=function(n){return new(n||a)};static ɵcmp=NC({type:a,selectors:[[`structural-styles`]],decls:0,vars:0,template:function(n,e){},styles:[`.mat-focus-indicator {
  position: relative;
}
.mat-focus-indicator::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  box-sizing: border-box;
  pointer-events: none;
  display: var(--%NS%mat-focus-indicator-display, none);
  border-width: var(--%NS%mat-focus-indicator-border-width, 3px);
  border-style: var(--%NS%mat-focus-indicator-border-style, solid);
  border-color: var(--%NS%mat-focus-indicator-border-color, transparent);
  border-radius: var(--%NS%mat-focus-indicator-border-radius, 4px);
}
.mat-focus-indicator:focus-visible::before {
  content: "";
}

@media (forced-colors: active) {
  html {
    --%NS%mat-focus-indicator-display: block;
    --%NS%mat-focus-indicator-fallback-border-style: none;
  }
}
`],encapsulation:2})}return a})();var sn=[`*`,[[``,`progressIndicator`,``]]];var cn=[`*`,`[progressIndicator]`];function mn(a,o){a&1&&(Xu$1(0,`div`,1),Gw(1,1),el$1())}var dn=new S$1(`MAT_BUTTON_CONFIG`);function Wt$1(a){return a==null?void 0:yl$1(a)}var j=(()=>{class a{_elementRef=g$2(it$2);_ngZone=g$2(U$4);_animationsDisabled=ai$3();_config=g$2(dn,{optional:!0});_focusMonitor=g$2(Ot$1);_cleanupClick;_renderer=g$2(gn$5);_rippleLoader=g$2($t$1);_isAnchor;_isFab=!1;color;get disableRipple(){return this._disableRipple}set disableRipple(t){this._disableRipple=t,this._updateRippleDisabled()}_disableRipple=!1;get disabled(){return this._disabled}set disabled(t){this._disabled=t,this._updateRippleDisabled()}_disabled=!1;ariaDisabled;disabledInteractive;tabIndex;set _tabindex(t){this.tabIndex=t}showProgress=Zj(!1,{transform:mo$2});constructor(){g$2($$2).load(Vt);let t=this._elementRef.nativeElement;this._isAnchor=t.tagName===`A`,this.disabledInteractive=this._config?.disabledInteractive??!1,this.color=this._config?.color??null,this._rippleLoader?.configureRipple(t,{className:`mat-mdc-button-ripple`})}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0),this._isAnchor&&this._setupAsAnchor()}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement)}focus(t=`program`,n){t?this._focusMonitor.focusVia(this._elementRef.nativeElement,t,n):this._elementRef.nativeElement.focus(n)}_getAriaDisabled(){return this.ariaDisabled!=null?this.ariaDisabled:this._isAnchor?this.disabled||null:this.disabled&&this.disabledInteractive?!0:null}_getDisabledAttribute(){return this.disabledInteractive||!this.disabled?null:!0}_updateRippleDisabled(){this._rippleLoader?.setDisabled(this._elementRef.nativeElement,this.disableRipple||this.disabled)}_getTabIndex(){return this._isAnchor?this.disabled&&!this.disabledInteractive?-1:this.tabIndex:this.tabIndex}_setupAsAnchor(){this._cleanupClick=this._ngZone.runOutsideAngular(()=>this._renderer.listen(this._elementRef.nativeElement,`click`,t=>{this.disabled&&(t.preventDefault(),t.stopImmediatePropagation())}))}static ɵfac=function(n){return new(n||a)};static ɵdir=En$3({type:a,hostAttrs:[1,`mat-mdc-button-base`],hostVars:15,hostBindings:function(n,e){n&2&&(Rg(`disabled`,e._getDisabledAttribute())(`aria-disabled`,e._getAriaDisabled())(`tabindex`,e._getTabIndex()),sb$1(e.color?`mat-`+e.color:``),Jg(`mat-mdc-button-progress-indicator-shown`,e.showProgress())(`mat-mdc-button-disabled`,e.disabled)(`mat-mdc-button-disabled-interactive`,e.disabledInteractive)(`mat-unthemed`,!e.color)(`_mat-animation-noopable`,e._animationsDisabled))},inputs:{color:`color`,disableRipple:[2,`disableRipple`,`disableRipple`,mo$2],disabled:[2,`disabled`,`disabled`,mo$2],ariaDisabled:[2,`aria-disabled`,`ariaDisabled`,mo$2],disabledInteractive:[2,`disabledInteractive`,`disabledInteractive`,mo$2],tabIndex:[2,`tabIndex`,`tabIndex`,Wt$1],_tabindex:[2,`tabindex`,`_tabindex`,Wt$1],showProgress:[1,`showProgress`]}})}return a})();var ln=(()=>{class a extends j{constructor(){super(),this._rippleLoader.configureRipple(this._elementRef.nativeElement,{centered:!0})}static ɵfac=function(n){return new(n||a)};static ɵcmp=NC({type:a,selectors:[[`button`,`mat-icon-button`,``],[`a`,`mat-icon-button`,``],[`button`,`matIconButton`,``],[`a`,`matIconButton`,``]],hostAttrs:[1,`mdc-icon-button`,`mat-mdc-icon-button`],exportAs:[`matButton`,`matAnchor`],features:[Dg],ngContentSelectors:cn,decls:5,vars:1,consts:[[1,`mat-mdc-button-persistent-ripple`,`mdc-icon-button__ripple`],[1,`mat-mdc-button-progress-indicator-container`],[1,`mat-focus-indicator`],[1,`mat-mdc-button-touch-target`]],template:function(n,e){n&1&&(Uw(sn),Fg(0,`span`,0),Gw(1),Nw(2,mn,2,0,`div`,1),Fg(3,`span`,2)(4,`span`,3)),n&2&&(lI(2),xw(e.showProgress()?2:-1))},styles:[`.mat-mdc-icon-button {
  -webkit-user-select: none;
  user-select: none;
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  border: none;
  outline: none;
  background-color: transparent;
  fill: currentColor;
  text-decoration: none;
  cursor: pointer;
  z-index: 0;
  overflow: visible;
  border-radius: var(--%NS%mat-icon-button-container-shape, var(--%NS%mat-sys-corner-full, 50%));
  flex-shrink: 0;
  text-align: center;
  width: var(--%NS%mat-icon-button-state-layer-size, 40px);
  height: var(--%NS%mat-icon-button-state-layer-size, 40px);
  padding: calc(calc(var(--%NS%mat-icon-button-state-layer-size, 40px) - var(--%NS%mat-icon-button-icon-size, 24px)) / 2);
  font-size: var(--%NS%mat-icon-button-icon-size, 24px);
  color: var(--%NS%mat-icon-button-icon-color, var(--%NS%mat-sys-on-surface-variant));
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-icon-button .mat-mdc-button-ripple,
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple,
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}
.mat-mdc-icon-button .mat-mdc-button-ripple {
  overflow: hidden;
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  content: "";
  opacity: 0;
}
.mat-mdc-icon-button .mdc-button__label,
.mat-mdc-icon-button .mat-icon {
  z-index: 1;
  position: relative;
}
.mat-mdc-icon-button .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
}
.mat-mdc-icon-button:focus-visible > .mat-focus-indicator::before {
  content: "";
  border-radius: inherit;
}
.mat-mdc-icon-button .mat-ripple-element {
  background-color: var(--%NS%mat-icon-button-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface-variant) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-icon-button-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-icon-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-icon-button-disabled-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-icon-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-icon-button-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-icon-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-icon-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-icon-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-icon-button-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-icon-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-icon-button-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-icon-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-icon-button-touch-target-size, 48px);
  display: var(--%NS%mat-icon-button-touch-target-display, block);
  left: 50%;
  width: var(--%NS%mat-icon-button-touch-target-size, 48px);
  transform: translate(-50%, -50%);
}
.mat-mdc-icon-button._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-icon-button[disabled], .mat-mdc-icon-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-icon-button-disabled-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-icon-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-icon-button img,
.mat-mdc-icon-button svg {
  width: var(--%NS%mat-icon-button-icon-size, 24px);
  height: var(--%NS%mat-icon-button-icon-size, 24px);
  vertical-align: baseline;
}
.mat-mdc-icon-button .mat-mdc-button-progress-indicator-container .mdc-circular-progress__determinate-circle-graphic {
  width: inherit;
  height: inherit;
}
.mat-mdc-icon-button .mat-mdc-button-progress-indicator-container .mdc-circular-progress__indeterminate-circle-graphic {
  height: 100%;
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple {
  border-radius: var(--%NS%mat-icon-button-container-shape, var(--%NS%mat-sys-corner-full, 50%));
}
.mat-mdc-icon-button[hidden] {
  display: none;
}
.mat-mdc-icon-button.mat-unthemed:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-primary:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-accent:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-warn:not(.mdc-ripple-upgraded):focus::before {
  background: transparent;
  opacity: 1;
}

.mat-mdc-button-progress-indicator-container {
  position: absolute;
  inset-inline-start: 0;
  inset-block-start: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}

.mat-mdc-button-progress-indicator-shown mat-icon {
  visibility: hidden;
}
`,`@media (forced-colors: active) {
  .mat-mdc-button:not(.mdc-button--outlined),
  .mat-mdc-unelevated-button:not(.mdc-button--outlined),
  .mat-mdc-raised-button:not(.mdc-button--outlined),
  .mat-mdc-outlined-button:not(.mdc-button--outlined),
  .mat-mdc-button-base.mat-tonal-button,
  .mat-mdc-icon-button.mat-mdc-icon-button,
  .mat-mdc-outlined-button .mdc-button__ripple {
    outline: solid 1px;
  }
}
`],encapsulation:2})}return a})();var ee=(()=>{class a{static ɵfac=function(n){return new(n||a)};static ɵmod=gg({type:a});static ɵinj=xa$1({imports:[U$5]})}return a})();var bt=[[[``,8,`material-icons`,3,`iconPositionEnd`,``],[`mat-icon`,3,`iconPositionEnd`,``],[``,`matButtonIcon`,``,3,`iconPositionEnd`,``]],`*`,[[``,`iconPositionEnd`,``,8,`material-icons`],[`mat-icon`,`iconPositionEnd`,``],[``,`matButtonIcon`,``,`iconPositionEnd`,``]],[[``,`progressIndicator`,``]]];var ut=[`.material-icons:not([iconPositionEnd]), mat-icon:not([iconPositionEnd]), [matButtonIcon]:not([iconPositionEnd])`,`*`,`.material-icons[iconPositionEnd], mat-icon[iconPositionEnd], [matButtonIcon][iconPositionEnd]`,`[progressIndicator]`];function bn$1(a,o){a&1&&(Xu$1(0,`div`,2),Gw(1,3),el$1())}function un(a,o){a&1&&(Xu$1(0,`div`,2),Gw(1,3),el$1())}function pn(a,o){a&1&&(Xu$1(0,`div`,2),Gw(1,3),el$1())}var fn$1=`.mat-mdc-fab-base {
  -webkit-user-select: none;
  user-select: none;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 56px;
  height: 56px;
  padding: 0;
  border: none;
  fill: currentColor;
  text-decoration: none;
  cursor: pointer;
  -moz-appearance: none;
  -webkit-appearance: none;
  overflow: visible;
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1), opacity 15ms linear 30ms, transform 270ms 0ms cubic-bezier(0, 0, 0.2, 1);
  flex-shrink: 0;
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-fab-base .mat-mdc-button-ripple,
.mat-mdc-fab-base .mat-mdc-button-persistent-ripple,
.mat-mdc-fab-base .mat-mdc-button-persistent-ripple::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}
.mat-mdc-fab-base .mat-mdc-button-ripple {
  overflow: hidden;
}
.mat-mdc-fab-base .mat-mdc-button-persistent-ripple::before {
  content: "";
  opacity: 0;
}
.mat-mdc-fab-base .mdc-button__label,
.mat-mdc-fab-base .mat-icon {
  z-index: 1;
  position: relative;
}
.mat-mdc-fab-base .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
}
.mat-mdc-fab-base:focus-visible > .mat-focus-indicator::before {
  content: "";
}
.mat-mdc-fab-base._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-fab-base::before {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border: 1px solid transparent;
  border-radius: inherit;
  content: "";
  pointer-events: none;
}
.mat-mdc-fab-base[hidden] {
  display: none;
}
.mat-mdc-fab-base::-moz-focus-inner {
  padding: 0;
  border: 0;
}
.mat-mdc-fab-base:active, .mat-mdc-fab-base:focus {
  outline: none;
}
.mat-mdc-fab-base:hover {
  cursor: pointer;
}
.mat-mdc-fab-base > svg {
  width: 100%;
}
.mat-mdc-fab-base .mat-icon, .mat-mdc-fab-base .material-icons {
  transition: transform 180ms 90ms cubic-bezier(0, 0, 0.2, 1);
  fill: currentColor;
  will-change: transform;
}
.mat-mdc-fab-base .mat-focus-indicator::before {
  margin: calc(calc(var(--%NS%mat-focus-indicator-border-width, 3px) + 2px) * -1);
  border-radius: calc(var(--%NS%mat-fab-container-shape, var(--%NS%mat-sys-corner-large)) + calc(var(--%NS%mat-focus-indicator-border-width, 3px) + 2px));
}
.mat-mdc-fab-base[disabled], .mat-mdc-fab-base.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
}
.mat-mdc-fab-base[disabled], .mat-mdc-fab-base[disabled]:focus, .mat-mdc-fab-base.mat-mdc-button-disabled, .mat-mdc-fab-base.mat-mdc-button-disabled:focus {
  box-shadow: none;
}
.mat-mdc-fab-base.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-fab {
  background-color: var(--%NS%mat-fab-container-color, var(--%NS%mat-sys-primary-container));
  border-radius: var(--%NS%mat-fab-container-shape, var(--%NS%mat-sys-corner-large));
  color: var(--%NS%mat-fab-foreground-color, var(--%NS%mat-sys-on-primary-container, inherit));
  box-shadow: var(--%NS%mat-fab-container-elevation-shadow, var(--%NS%mat-sys-level3));
}
@media (hover: hover) {
  .mat-mdc-fab:hover {
    box-shadow: var(--%NS%mat-fab-hover-container-elevation-shadow, var(--%NS%mat-sys-level4));
  }
}
.mat-mdc-fab:focus {
  box-shadow: var(--%NS%mat-fab-focus-container-elevation-shadow, var(--%NS%mat-sys-level3));
}
.mat-mdc-fab:active, .mat-mdc-fab:focus:active {
  box-shadow: var(--%NS%mat-fab-pressed-container-elevation-shadow, var(--%NS%mat-sys-level3));
}
.mat-mdc-fab[disabled], .mat-mdc-fab.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-fab-disabled-state-foreground-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  background-color: var(--%NS%mat-fab-disabled-state-container-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-fab.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-fab .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-fab-touch-target-size, 48px);
  display: var(--%NS%mat-fab-touch-target-display, block);
  left: 50%;
  width: var(--%NS%mat-fab-touch-target-size, 48px);
  transform: translate(-50%, -50%);
}
.mat-mdc-fab .mat-ripple-element {
  background-color: var(--%NS%mat-fab-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-on-primary-container) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-fab .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-fab-state-layer-color, var(--%NS%mat-sys-on-primary-container));
}
.mat-mdc-fab.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-fab-disabled-state-layer-color);
}
.mat-mdc-fab:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-fab-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-fab.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-fab.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-fab.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-fab-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-fab:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-fab-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}

.mat-mdc-mini-fab {
  width: 40px;
  height: 40px;
  background-color: var(--%NS%mat-fab-small-container-color, var(--%NS%mat-sys-primary-container));
  border-radius: var(--%NS%mat-fab-small-container-shape, var(--%NS%mat-sys-corner-medium));
  color: var(--%NS%mat-fab-small-foreground-color, var(--%NS%mat-sys-on-primary-container, inherit));
  box-shadow: var(--%NS%mat-fab-small-container-elevation-shadow, var(--%NS%mat-sys-level3));
}
@media (hover: hover) {
  .mat-mdc-mini-fab:hover {
    box-shadow: var(--%NS%mat-fab-small-hover-container-elevation-shadow, var(--%NS%mat-sys-level4));
  }
}
.mat-mdc-mini-fab:focus {
  box-shadow: var(--%NS%mat-fab-small-focus-container-elevation-shadow, var(--%NS%mat-sys-level3));
}
.mat-mdc-mini-fab:active, .mat-mdc-mini-fab:focus:active {
  box-shadow: var(--%NS%mat-fab-small-pressed-container-elevation-shadow, var(--%NS%mat-sys-level3));
}
.mat-mdc-mini-fab .mat-focus-indicator::before {
  border-radius: calc(var(--%NS%mat-fab-small-container-shape, var(--%NS%mat-sys-corner-medium)) + calc(var(--%NS%mat-focus-indicator-border-width, 3px) + 2px));
}
.mat-mdc-mini-fab[disabled], .mat-mdc-mini-fab.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-fab-small-disabled-state-foreground-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  background-color: var(--%NS%mat-fab-small-disabled-state-container-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-mini-fab.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-mini-fab .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-fab-small-touch-target-size, 48px);
  display: var(--%NS%mat-fab-small-touch-target-display);
  left: 50%;
  width: var(--%NS%mat-fab-small-touch-target-size, 48px);
  transform: translate(-50%, -50%);
}
.mat-mdc-mini-fab .mat-ripple-element {
  background-color: var(--%NS%mat-fab-small-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-on-primary-container) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-mini-fab .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-fab-small-state-layer-color, var(--%NS%mat-sys-on-primary-container));
}
.mat-mdc-mini-fab.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-fab-small-disabled-state-layer-color);
}
.mat-mdc-mini-fab:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-fab-small-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-mini-fab.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-mini-fab.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-mini-fab.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-fab-small-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-mini-fab:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-fab-small-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}

.mat-mdc-extended-fab {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  padding-left: 20px;
  padding-right: 20px;
  width: auto;
  max-width: 100%;
  line-height: normal;
  box-shadow: var(--%NS%mat-fab-extended-container-elevation-shadow, var(--%NS%mat-sys-level3));
  height: var(--%NS%mat-fab-extended-container-height, 56px);
  border-radius: var(--%NS%mat-fab-extended-container-shape, var(--%NS%mat-sys-corner-large));
  font-family: var(--%NS%mat-fab-extended-label-text-font, var(--%NS%mat-sys-label-large-font));
  font-size: var(--%NS%mat-fab-extended-label-text-size, var(--%NS%mat-sys-label-large-size));
  font-weight: var(--%NS%mat-fab-extended-label-text-weight, var(--%NS%mat-sys-label-large-weight));
  letter-spacing: var(--%NS%mat-fab-extended-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
}
@media (hover: hover) {
  .mat-mdc-extended-fab:hover {
    box-shadow: var(--%NS%mat-fab-extended-hover-container-elevation-shadow, var(--%NS%mat-sys-level4));
  }
}
.mat-mdc-extended-fab:focus {
  box-shadow: var(--%NS%mat-fab-extended-focus-container-elevation-shadow, var(--%NS%mat-sys-level3));
}
.mat-mdc-extended-fab:active, .mat-mdc-extended-fab:focus:active {
  box-shadow: var(--%NS%mat-fab-extended-pressed-container-elevation-shadow, var(--%NS%mat-sys-level3));
}
.mat-mdc-extended-fab[disabled], .mat-mdc-extended-fab.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
}
.mat-mdc-extended-fab[disabled], .mat-mdc-extended-fab[disabled]:focus, .mat-mdc-extended-fab.mat-mdc-button-disabled, .mat-mdc-extended-fab.mat-mdc-button-disabled:focus {
  box-shadow: none;
}
.mat-mdc-extended-fab.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
[dir=rtl] .mat-mdc-extended-fab .mdc-button__label + .mat-icon, [dir=rtl] .mat-mdc-extended-fab .mdc-button__label + .material-icons,
.mat-mdc-extended-fab > .mat-icon,
.mat-mdc-extended-fab > .material-icons {
  margin-left: -8px;
  margin-right: 12px;
}
.mat-mdc-extended-fab .mdc-button__label + .mat-icon,
.mat-mdc-extended-fab .mdc-button__label + .material-icons, [dir=rtl] .mat-mdc-extended-fab > .mat-icon, [dir=rtl] .mat-mdc-extended-fab > .material-icons {
  margin-left: 12px;
  margin-right: -8px;
}
.mat-mdc-extended-fab .mat-mdc-button-touch-target {
  width: 100%;
}

.mat-mdc-button-progress-indicator-container {
  position: absolute;
  inset-inline-start: 0;
  margin-block-start: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}

.mat-mdc-button-progress-indicator-shown mat-icon,
.mat-mdc-button-progress-indicator-shown [matButtonIcon],
.mat-mdc-button-progress-indicator-shown .mdc-button__label {
  visibility: hidden;
}
`;var Gt=new Map([[`text`,[`mat-mdc-button`]],[`filled`,[`mdc-button--unelevated`,`mat-mdc-unelevated-button`]],[`elevated`,[`mdc-button--raised`,`mat-mdc-raised-button`]],[`outlined`,[`mdc-button--outlined`,`mat-mdc-outlined-button`]],[`tonal`,[`mat-tonal-button`]]]);var de=(()=>{class a extends j{get appearance(){return this._appearance}set appearance(t){this.setAppearance(t||this._config?.defaultAppearance||`text`)}_appearance=null;constructor(){super();let t=vn$1(this._elementRef.nativeElement);t&&this.setAppearance(t)}setAppearance(t){if(t===this._appearance)return;let n=this._elementRef.nativeElement.classList,e=this._appearance?Gt.get(this._appearance):null,i=Gt.get(t);e&&n.remove(...e),n.add(...i),this._appearance=t}static ɵfac=function(n){return new(n||a)};static ɵcmp=NC({type:a,selectors:[[`button`,`matButton`,``],[`a`,`matButton`,``],[`button`,`mat-button`,``],[`button`,`mat-raised-button`,``],[`button`,`mat-flat-button`,``],[`button`,`mat-stroked-button`,``],[`a`,`mat-button`,``],[`a`,`mat-raised-button`,``],[`a`,`mat-flat-button`,``],[`a`,`mat-stroked-button`,``]],hostAttrs:[1,`mdc-button`],inputs:{appearance:[0,`matButton`,`appearance`]},exportAs:[`matButton`,`matAnchor`],features:[Dg],ngContentSelectors:ut,decls:8,vars:5,consts:[[1,`mat-mdc-button-persistent-ripple`],[1,`mdc-button__label`],[1,`mat-mdc-button-progress-indicator-container`],[1,`mat-focus-indicator`],[1,`mat-mdc-button-touch-target`]],template:function(n,e){n&1&&(Uw(bt),Fg(0,`span`,0),Gw(1),Xu$1(2,`span`,1),Gw(3,1),el$1(),Gw(4,2),Nw(5,bn$1,2,0,`div`,2),Fg(6,`span`,3)(7,`span`,4)),n&2&&(Jg(`mdc-button__ripple`,!e._isFab)(`mdc-fab__ripple`,e._isFab),lI(5),xw(e.showProgress()?5:-1))},styles:[`.mat-mdc-button-base {
  text-decoration: none;
}
.mat-mdc-button-base .mat-icon {
  min-height: fit-content;
  flex-shrink: 0;
}
@media (hover: none) {
  .mat-mdc-button-base:hover > span.mat-mdc-button-persistent-ripple::before {
    opacity: 0;
  }
}

.mdc-button {
  -webkit-user-select: none;
  user-select: none;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  min-width: 64px;
  border: none;
  outline: none;
  line-height: inherit;
  -webkit-appearance: none;
  overflow: visible;
  vertical-align: middle;
  background: transparent;
  padding: 0 8px;
}
.mdc-button::-moz-focus-inner {
  padding: 0;
  border: 0;
}
.mdc-button:active {
  outline: none;
}
.mdc-button:hover {
  cursor: pointer;
}
.mdc-button:disabled {
  cursor: default;
  pointer-events: none;
}
.mdc-button[hidden] {
  display: none;
}
.mdc-button .mdc-button__label {
  position: relative;
}

.mat-mdc-button {
  padding: 0 var(--%NS%mat-button-text-horizontal-padding, 12px);
  height: var(--%NS%mat-button-text-container-height, 40px);
  font-family: var(--%NS%mat-button-text-label-text-font, var(--%NS%mat-sys-label-large-font));
  font-size: var(--%NS%mat-button-text-label-text-size, var(--%NS%mat-sys-label-large-size));
  letter-spacing: var(--%NS%mat-button-text-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  text-transform: var(--%NS%mat-button-text-label-text-transform);
  font-weight: var(--%NS%mat-button-text-label-text-weight, var(--%NS%mat-sys-label-large-weight));
}
.mat-mdc-button, .mat-mdc-button .mdc-button__ripple {
  border-radius: var(--%NS%mat-button-text-container-shape, var(--%NS%mat-sys-corner-full));
}
.mat-mdc-button:not(:disabled) {
  color: var(--%NS%mat-button-text-label-text-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-button[disabled], .mat-mdc-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-button-text-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-button:has(.material-icons, mat-icon, [matButtonIcon]) {
  padding: 0 var(--%NS%mat-button-text-with-icon-horizontal-padding, 16px);
}
.mat-mdc-button > .mat-icon {
  margin-right: var(--%NS%mat-button-text-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-text-icon-offset, -4px);
}
[dir=rtl] .mat-mdc-button > .mat-icon {
  margin-right: var(--%NS%mat-button-text-icon-offset, -4px);
  margin-left: var(--%NS%mat-button-text-icon-spacing, 8px);
}
.mat-mdc-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-text-icon-offset, -4px);
  margin-left: var(--%NS%mat-button-text-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-text-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-text-icon-offset, -4px);
}
.mat-mdc-button .mat-ripple-element {
  background-color: var(--%NS%mat-button-text-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-primary) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-text-state-layer-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-text-disabled-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-text-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-text-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-text-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-button-text-touch-target-size, 48px);
  display: var(--%NS%mat-button-text-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}

.mat-mdc-unelevated-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--%NS%mat-button-filled-container-height, 40px);
  font-family: var(--%NS%mat-button-filled-label-text-font, var(--%NS%mat-sys-label-large-font));
  font-size: var(--%NS%mat-button-filled-label-text-size, var(--%NS%mat-sys-label-large-size));
  letter-spacing: var(--%NS%mat-button-filled-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  text-transform: var(--%NS%mat-button-filled-label-text-transform);
  font-weight: var(--%NS%mat-button-filled-label-text-weight, var(--%NS%mat-sys-label-large-weight));
  padding: 0 var(--%NS%mat-button-filled-horizontal-padding, 24px);
}
.mat-mdc-unelevated-button > .mat-icon {
  margin-right: var(--%NS%mat-button-filled-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-filled-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-unelevated-button > .mat-icon {
  margin-right: var(--%NS%mat-button-filled-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-filled-icon-spacing, 8px);
}
.mat-mdc-unelevated-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-filled-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-filled-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-unelevated-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-filled-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-filled-icon-offset, -8px);
}
.mat-mdc-unelevated-button .mat-ripple-element {
  background-color: var(--%NS%mat-button-filled-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-on-primary) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-filled-state-layer-color, var(--%NS%mat-sys-on-primary));
}
.mat-mdc-unelevated-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-filled-disabled-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-unelevated-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-filled-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-unelevated-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-unelevated-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-filled-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-unelevated-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-filled-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-unelevated-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-button-filled-touch-target-size, 48px);
  display: var(--%NS%mat-button-filled-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-unelevated-button:not(:disabled) {
  color: var(--%NS%mat-button-filled-label-text-color, var(--%NS%mat-sys-on-primary));
  background-color: var(--%NS%mat-button-filled-container-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-unelevated-button, .mat-mdc-unelevated-button .mdc-button__ripple {
  border-radius: var(--%NS%mat-button-filled-container-shape, var(--%NS%mat-sys-corner-full));
}
.mat-mdc-unelevated-button .mat-mdc-button-progress-indicator-container {
  --%NS%mat-progress-spinner-active-indicator-color: var(--%NS%mat-button-filled-progress-active-indicator-color, var(--%NS%mat-sys-on-primary));
}
.mat-mdc-unelevated-button[disabled], .mat-mdc-unelevated-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-button-filled-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  background-color: var(--%NS%mat-button-filled-disabled-container-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-raised-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: var(--%NS%mat-button-protected-container-elevation-shadow, var(--%NS%mat-sys-level1));
  height: var(--%NS%mat-button-protected-container-height, 40px);
  font-family: var(--%NS%mat-button-protected-label-text-font, var(--%NS%mat-sys-label-large-font));
  font-size: var(--%NS%mat-button-protected-label-text-size, var(--%NS%mat-sys-label-large-size));
  letter-spacing: var(--%NS%mat-button-protected-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  text-transform: var(--%NS%mat-button-protected-label-text-transform);
  font-weight: var(--%NS%mat-button-protected-label-text-weight, var(--%NS%mat-sys-label-large-weight));
  padding: 0 var(--%NS%mat-button-protected-horizontal-padding, 24px);
}
.mat-mdc-raised-button > .mat-icon {
  margin-right: var(--%NS%mat-button-protected-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-protected-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-raised-button > .mat-icon {
  margin-right: var(--%NS%mat-button-protected-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-protected-icon-spacing, 8px);
}
.mat-mdc-raised-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-protected-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-protected-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-raised-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-protected-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-protected-icon-offset, -8px);
}
.mat-mdc-raised-button .mat-ripple-element {
  background-color: var(--%NS%mat-button-protected-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-primary) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-protected-state-layer-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-raised-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-protected-disabled-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-raised-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-protected-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-raised-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-raised-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-raised-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-protected-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-raised-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-protected-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-raised-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-button-protected-touch-target-size, 48px);
  display: var(--%NS%mat-button-protected-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-raised-button:not(:disabled) {
  color: var(--%NS%mat-button-protected-label-text-color, var(--%NS%mat-sys-primary));
  background-color: var(--%NS%mat-button-protected-container-color, var(--%NS%mat-sys-surface));
}
.mat-mdc-raised-button, .mat-mdc-raised-button .mdc-button__ripple {
  border-radius: var(--%NS%mat-button-protected-container-shape, var(--%NS%mat-sys-corner-full));
}
@media (hover: hover) {
  .mat-mdc-raised-button:hover {
    box-shadow: var(--%NS%mat-button-protected-hover-container-elevation-shadow, var(--%NS%mat-sys-level2));
  }
}
.mat-mdc-raised-button:focus {
  box-shadow: var(--%NS%mat-button-protected-focus-container-elevation-shadow, var(--%NS%mat-sys-level1));
}
.mat-mdc-raised-button:active, .mat-mdc-raised-button:focus:active {
  box-shadow: var(--%NS%mat-button-protected-pressed-container-elevation-shadow, var(--%NS%mat-sys-level1));
}
.mat-mdc-raised-button[disabled], .mat-mdc-raised-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-button-protected-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  background-color: var(--%NS%mat-button-protected-disabled-container-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-raised-button[disabled].mat-mdc-button-disabled, .mat-mdc-raised-button.mat-mdc-button-disabled.mat-mdc-button-disabled {
  box-shadow: var(--%NS%mat-button-protected-disabled-container-elevation-shadow, var(--%NS%mat-sys-level0));
}
.mat-mdc-raised-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-outlined-button {
  border-style: solid;
  transition: border 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--%NS%mat-button-outlined-container-height, 40px);
  font-family: var(--%NS%mat-button-outlined-label-text-font, var(--%NS%mat-sys-label-large-font));
  font-size: var(--%NS%mat-button-outlined-label-text-size, var(--%NS%mat-sys-label-large-size));
  letter-spacing: var(--%NS%mat-button-outlined-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  text-transform: var(--%NS%mat-button-outlined-label-text-transform);
  font-weight: var(--%NS%mat-button-outlined-label-text-weight, var(--%NS%mat-sys-label-large-weight));
  border-radius: var(--%NS%mat-button-outlined-container-shape, var(--%NS%mat-sys-corner-full));
  border-width: var(--%NS%mat-button-outlined-outline-width, 1px);
  padding: 0 var(--%NS%mat-button-outlined-horizontal-padding, 24px);
}
.mat-mdc-outlined-button > .mat-icon {
  margin-right: var(--%NS%mat-button-outlined-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-outlined-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-outlined-button > .mat-icon {
  margin-right: var(--%NS%mat-button-outlined-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-outlined-icon-spacing, 8px);
}
.mat-mdc-outlined-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-outlined-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-outlined-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-outlined-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-outlined-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-outlined-icon-offset, -8px);
}
.mat-mdc-outlined-button .mat-ripple-element {
  background-color: var(--%NS%mat-button-outlined-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-primary) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-outlined-state-layer-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-outlined-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-outlined-disabled-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-outlined-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-outlined-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-outlined-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-outlined-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-outlined-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-outlined-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-outlined-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-outlined-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-outlined-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-button-outlined-touch-target-size, 48px);
  display: var(--%NS%mat-button-outlined-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-outlined-button:not(:disabled) {
  color: var(--%NS%mat-button-outlined-label-text-color, var(--%NS%mat-sys-primary));
  border-color: var(--%NS%mat-button-outlined-outline-color, var(--%NS%mat-sys-outline));
}
.mat-mdc-outlined-button[disabled], .mat-mdc-outlined-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-button-outlined-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  border-color: var(--%NS%mat-button-outlined-disabled-outline-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-outlined-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-tonal-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--%NS%mat-button-tonal-container-height, 40px);
  font-family: var(--%NS%mat-button-tonal-label-text-font, var(--%NS%mat-sys-label-large-font));
  font-size: var(--%NS%mat-button-tonal-label-text-size, var(--%NS%mat-sys-label-large-size));
  letter-spacing: var(--%NS%mat-button-tonal-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  text-transform: var(--%NS%mat-button-tonal-label-text-transform);
  font-weight: var(--%NS%mat-button-tonal-label-text-weight, var(--%NS%mat-sys-label-large-weight));
  padding: 0 var(--%NS%mat-button-tonal-horizontal-padding, 24px);
}
.mat-tonal-button:not(:disabled) {
  color: var(--%NS%mat-button-tonal-label-text-color, var(--%NS%mat-sys-on-secondary-container));
  background-color: var(--%NS%mat-button-tonal-container-color, var(--%NS%mat-sys-secondary-container));
}
.mat-tonal-button, .mat-tonal-button .mdc-button__ripple {
  border-radius: var(--%NS%mat-button-tonal-container-shape, var(--%NS%mat-sys-corner-full));
}
.mat-tonal-button[disabled], .mat-tonal-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-button-tonal-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  background-color: var(--%NS%mat-button-tonal-disabled-container-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mat-tonal-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-tonal-button > .mat-icon {
  margin-right: var(--%NS%mat-button-tonal-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-tonal-icon-offset, -8px);
}
[dir=rtl] .mat-tonal-button > .mat-icon {
  margin-right: var(--%NS%mat-button-tonal-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-tonal-icon-spacing, 8px);
}
.mat-tonal-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-tonal-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-tonal-icon-spacing, 8px);
}
[dir=rtl] .mat-tonal-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-tonal-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-tonal-icon-offset, -8px);
}
.mat-tonal-button .mat-ripple-element {
  background-color: var(--%NS%mat-button-tonal-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-on-secondary-container) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-tonal-state-layer-color, var(--%NS%mat-sys-on-secondary-container));
}
.mat-tonal-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-tonal-disabled-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-tonal-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-tonal-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-tonal-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-tonal-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-tonal-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-tonal-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-tonal-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-tonal-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}
.mat-tonal-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-button-tonal-touch-target-size, 48px);
  display: var(--%NS%mat-button-tonal-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}

.mat-mdc-button,
.mat-mdc-unelevated-button,
.mat-mdc-raised-button,
.mat-mdc-outlined-button,
.mat-tonal-button {
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-button .mat-mdc-button-ripple,
.mat-mdc-button .mat-mdc-button-persistent-ripple,
.mat-mdc-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-unelevated-button .mat-mdc-button-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-raised-button .mat-mdc-button-ripple,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before,
.mat-tonal-button .mat-mdc-button-ripple,
.mat-tonal-button .mat-mdc-button-persistent-ripple,
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}
.mat-mdc-button .mat-mdc-button-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-ripple,
.mat-mdc-raised-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-tonal-button .mat-mdc-button-ripple {
  overflow: hidden;
}
.mat-mdc-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before,
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  content: "";
  opacity: 0;
}
.mat-mdc-button .mdc-button__label,
.mat-mdc-button .mat-icon,
.mat-mdc-unelevated-button .mdc-button__label,
.mat-mdc-unelevated-button .mat-icon,
.mat-mdc-raised-button .mdc-button__label,
.mat-mdc-raised-button .mat-icon,
.mat-mdc-outlined-button .mdc-button__label,
.mat-mdc-outlined-button .mat-icon,
.mat-tonal-button .mdc-button__label,
.mat-tonal-button .mat-icon {
  z-index: 1;
  position: relative;
}
.mat-mdc-button .mat-focus-indicator,
.mat-mdc-unelevated-button .mat-focus-indicator,
.mat-mdc-raised-button .mat-focus-indicator,
.mat-mdc-outlined-button .mat-focus-indicator,
.mat-tonal-button .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
}
.mat-mdc-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-unelevated-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-raised-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-outlined-button:focus-visible > .mat-focus-indicator::before,
.mat-tonal-button:focus-visible > .mat-focus-indicator::before {
  content: "";
  border-radius: inherit;
}
.mat-mdc-button._mat-animation-noopable,
.mat-mdc-unelevated-button._mat-animation-noopable,
.mat-mdc-raised-button._mat-animation-noopable,
.mat-mdc-outlined-button._mat-animation-noopable,
.mat-tonal-button._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-button > .mat-icon,
.mat-mdc-unelevated-button > .mat-icon,
.mat-mdc-raised-button > .mat-icon,
.mat-mdc-outlined-button > .mat-icon,
.mat-tonal-button > .mat-icon {
  display: inline-block;
  position: relative;
  vertical-align: top;
  font-size: 1.125rem;
  height: 1.125rem;
  width: 1.125rem;
}

.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mdc-button__ripple {
  top: -1px;
  left: -1px;
  bottom: -1px;
  right: -1px;
}

.mat-mdc-unelevated-button .mat-focus-indicator::before,
.mat-tonal-button .mat-focus-indicator::before,
.mat-mdc-raised-button .mat-focus-indicator::before {
  margin: calc(calc(var(--%NS%mat-focus-indicator-border-width, 3px) + 2px) * -1);
}

.mat-mdc-outlined-button .mat-focus-indicator::before {
  margin: calc(calc(var(--%NS%mat-focus-indicator-border-width, 3px) + 3px) * -1);
}

.mat-mdc-button-progress-indicator-container {
  position: absolute;
  inset-inline-start: 0;
  inset-block-start: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}

.mat-mdc-button-progress-indicator-shown mat-icon,
.mat-mdc-button-progress-indicator-shown [matButtonIcon],
.mat-mdc-button-progress-indicator-shown .mdc-button__label {
  visibility: hidden;
}
`,`@media (forced-colors: active) {
  .mat-mdc-button:not(.mdc-button--outlined),
  .mat-mdc-unelevated-button:not(.mdc-button--outlined),
  .mat-mdc-raised-button:not(.mdc-button--outlined),
  .mat-mdc-outlined-button:not(.mdc-button--outlined),
  .mat-mdc-button-base.mat-tonal-button,
  .mat-mdc-icon-button.mat-mdc-icon-button,
  .mat-mdc-outlined-button .mdc-button__ripple {
    outline: solid 1px;
  }
}
`],encapsulation:2})}return a})();function vn$1(a){return a.hasAttribute(`mat-raised-button`)?`elevated`:a.hasAttribute(`mat-stroked-button`)?`outlined`:a.hasAttribute(`mat-flat-button`)?`filled`:a.hasAttribute(`mat-button`)?`text`:null}var Zt=new S$1(`mat-mdc-fab-default-options`,{providedIn:`root`,factory:()=>H});var H={color:`accent`};var le=(()=>{class a extends j{_options=g$2(Zt,{optional:!0});_isFab=!0;extended=!1;constructor(){super(),this._options=this._options||H,this.color=this._options.color||H.color}static ɵfac=function(n){return new(n||a)};static ɵcmp=NC({type:a,selectors:[[`button`,`mat-fab`,``],[`a`,`mat-fab`,``],[`button`,`matFab`,``],[`a`,`matFab`,``]],hostAttrs:[1,`mdc-fab`,`mat-mdc-fab-base`,`mat-mdc-fab`],hostVars:4,hostBindings:function(n,e){n&2&&Jg(`mdc-fab--extended`,e.extended)(`mat-mdc-extended-fab`,e.extended)},inputs:{extended:[2,`extended`,`extended`,mo$2]},exportAs:[`matButton`,`matAnchor`],features:[Dg],ngContentSelectors:ut,decls:8,vars:5,consts:[[1,`mat-mdc-button-persistent-ripple`],[1,`mdc-button__label`],[1,`mat-mdc-button-progress-indicator-container`],[1,`mat-focus-indicator`],[1,`mat-mdc-button-touch-target`]],template:function(n,e){n&1&&(Uw(bt),Fg(0,`span`,0),Gw(1),Xu$1(2,`span`,1),Gw(3,1),el$1(),Gw(4,2),Nw(5,un,2,0,`div`,2),Fg(6,`span`,3)(7,`span`,4)),n&2&&(Jg(`mdc-button__ripple`,!e._isFab)(`mdc-fab__ripple`,e._isFab),lI(5),xw(e.showProgress()?5:-1))},styles:[`.mat-mdc-fab-base {
  -webkit-user-select: none;
  user-select: none;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 56px;
  height: 56px;
  padding: 0;
  border: none;
  fill: currentColor;
  text-decoration: none;
  cursor: pointer;
  -moz-appearance: none;
  -webkit-appearance: none;
  overflow: visible;
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1), opacity 15ms linear 30ms, transform 270ms 0ms cubic-bezier(0, 0, 0.2, 1);
  flex-shrink: 0;
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-fab-base .mat-mdc-button-ripple,
.mat-mdc-fab-base .mat-mdc-button-persistent-ripple,
.mat-mdc-fab-base .mat-mdc-button-persistent-ripple::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}
.mat-mdc-fab-base .mat-mdc-button-ripple {
  overflow: hidden;
}
.mat-mdc-fab-base .mat-mdc-button-persistent-ripple::before {
  content: "";
  opacity: 0;
}
.mat-mdc-fab-base .mdc-button__label,
.mat-mdc-fab-base .mat-icon {
  z-index: 1;
  position: relative;
}
.mat-mdc-fab-base .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
}
.mat-mdc-fab-base:focus-visible > .mat-focus-indicator::before {
  content: "";
}
.mat-mdc-fab-base._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-fab-base::before {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border: 1px solid transparent;
  border-radius: inherit;
  content: "";
  pointer-events: none;
}
.mat-mdc-fab-base[hidden] {
  display: none;
}
.mat-mdc-fab-base::-moz-focus-inner {
  padding: 0;
  border: 0;
}
.mat-mdc-fab-base:active, .mat-mdc-fab-base:focus {
  outline: none;
}
.mat-mdc-fab-base:hover {
  cursor: pointer;
}
.mat-mdc-fab-base > svg {
  width: 100%;
}
.mat-mdc-fab-base .mat-icon, .mat-mdc-fab-base .material-icons {
  transition: transform 180ms 90ms cubic-bezier(0, 0, 0.2, 1);
  fill: currentColor;
  will-change: transform;
}
.mat-mdc-fab-base .mat-focus-indicator::before {
  margin: calc(calc(var(--%NS%mat-focus-indicator-border-width, 3px) + 2px) * -1);
  border-radius: calc(var(--%NS%mat-fab-container-shape, var(--%NS%mat-sys-corner-large)) + calc(var(--%NS%mat-focus-indicator-border-width, 3px) + 2px));
}
.mat-mdc-fab-base[disabled], .mat-mdc-fab-base.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
}
.mat-mdc-fab-base[disabled], .mat-mdc-fab-base[disabled]:focus, .mat-mdc-fab-base.mat-mdc-button-disabled, .mat-mdc-fab-base.mat-mdc-button-disabled:focus {
  box-shadow: none;
}
.mat-mdc-fab-base.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-fab {
  background-color: var(--%NS%mat-fab-container-color, var(--%NS%mat-sys-primary-container));
  border-radius: var(--%NS%mat-fab-container-shape, var(--%NS%mat-sys-corner-large));
  color: var(--%NS%mat-fab-foreground-color, var(--%NS%mat-sys-on-primary-container, inherit));
  box-shadow: var(--%NS%mat-fab-container-elevation-shadow, var(--%NS%mat-sys-level3));
}
@media (hover: hover) {
  .mat-mdc-fab:hover {
    box-shadow: var(--%NS%mat-fab-hover-container-elevation-shadow, var(--%NS%mat-sys-level4));
  }
}
.mat-mdc-fab:focus {
  box-shadow: var(--%NS%mat-fab-focus-container-elevation-shadow, var(--%NS%mat-sys-level3));
}
.mat-mdc-fab:active, .mat-mdc-fab:focus:active {
  box-shadow: var(--%NS%mat-fab-pressed-container-elevation-shadow, var(--%NS%mat-sys-level3));
}
.mat-mdc-fab[disabled], .mat-mdc-fab.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-fab-disabled-state-foreground-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  background-color: var(--%NS%mat-fab-disabled-state-container-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-fab.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-fab .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-fab-touch-target-size, 48px);
  display: var(--%NS%mat-fab-touch-target-display, block);
  left: 50%;
  width: var(--%NS%mat-fab-touch-target-size, 48px);
  transform: translate(-50%, -50%);
}
.mat-mdc-fab .mat-ripple-element {
  background-color: var(--%NS%mat-fab-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-on-primary-container) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-fab .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-fab-state-layer-color, var(--%NS%mat-sys-on-primary-container));
}
.mat-mdc-fab.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-fab-disabled-state-layer-color);
}
.mat-mdc-fab:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-fab-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-fab.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-fab.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-fab.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-fab-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-fab:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-fab-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}

.mat-mdc-mini-fab {
  width: 40px;
  height: 40px;
  background-color: var(--%NS%mat-fab-small-container-color, var(--%NS%mat-sys-primary-container));
  border-radius: var(--%NS%mat-fab-small-container-shape, var(--%NS%mat-sys-corner-medium));
  color: var(--%NS%mat-fab-small-foreground-color, var(--%NS%mat-sys-on-primary-container, inherit));
  box-shadow: var(--%NS%mat-fab-small-container-elevation-shadow, var(--%NS%mat-sys-level3));
}
@media (hover: hover) {
  .mat-mdc-mini-fab:hover {
    box-shadow: var(--%NS%mat-fab-small-hover-container-elevation-shadow, var(--%NS%mat-sys-level4));
  }
}
.mat-mdc-mini-fab:focus {
  box-shadow: var(--%NS%mat-fab-small-focus-container-elevation-shadow, var(--%NS%mat-sys-level3));
}
.mat-mdc-mini-fab:active, .mat-mdc-mini-fab:focus:active {
  box-shadow: var(--%NS%mat-fab-small-pressed-container-elevation-shadow, var(--%NS%mat-sys-level3));
}
.mat-mdc-mini-fab .mat-focus-indicator::before {
  border-radius: calc(var(--%NS%mat-fab-small-container-shape, var(--%NS%mat-sys-corner-medium)) + calc(var(--%NS%mat-focus-indicator-border-width, 3px) + 2px));
}
.mat-mdc-mini-fab[disabled], .mat-mdc-mini-fab.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-fab-small-disabled-state-foreground-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  background-color: var(--%NS%mat-fab-small-disabled-state-container-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-mini-fab.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-mini-fab .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-fab-small-touch-target-size, 48px);
  display: var(--%NS%mat-fab-small-touch-target-display);
  left: 50%;
  width: var(--%NS%mat-fab-small-touch-target-size, 48px);
  transform: translate(-50%, -50%);
}
.mat-mdc-mini-fab .mat-ripple-element {
  background-color: var(--%NS%mat-fab-small-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-on-primary-container) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-mini-fab .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-fab-small-state-layer-color, var(--%NS%mat-sys-on-primary-container));
}
.mat-mdc-mini-fab.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-fab-small-disabled-state-layer-color);
}
.mat-mdc-mini-fab:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-fab-small-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-mini-fab.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-mini-fab.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-mini-fab.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-fab-small-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-mini-fab:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-fab-small-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}

.mat-mdc-extended-fab {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  padding-left: 20px;
  padding-right: 20px;
  width: auto;
  max-width: 100%;
  line-height: normal;
  box-shadow: var(--%NS%mat-fab-extended-container-elevation-shadow, var(--%NS%mat-sys-level3));
  height: var(--%NS%mat-fab-extended-container-height, 56px);
  border-radius: var(--%NS%mat-fab-extended-container-shape, var(--%NS%mat-sys-corner-large));
  font-family: var(--%NS%mat-fab-extended-label-text-font, var(--%NS%mat-sys-label-large-font));
  font-size: var(--%NS%mat-fab-extended-label-text-size, var(--%NS%mat-sys-label-large-size));
  font-weight: var(--%NS%mat-fab-extended-label-text-weight, var(--%NS%mat-sys-label-large-weight));
  letter-spacing: var(--%NS%mat-fab-extended-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
}
@media (hover: hover) {
  .mat-mdc-extended-fab:hover {
    box-shadow: var(--%NS%mat-fab-extended-hover-container-elevation-shadow, var(--%NS%mat-sys-level4));
  }
}
.mat-mdc-extended-fab:focus {
  box-shadow: var(--%NS%mat-fab-extended-focus-container-elevation-shadow, var(--%NS%mat-sys-level3));
}
.mat-mdc-extended-fab:active, .mat-mdc-extended-fab:focus:active {
  box-shadow: var(--%NS%mat-fab-extended-pressed-container-elevation-shadow, var(--%NS%mat-sys-level3));
}
.mat-mdc-extended-fab[disabled], .mat-mdc-extended-fab.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
}
.mat-mdc-extended-fab[disabled], .mat-mdc-extended-fab[disabled]:focus, .mat-mdc-extended-fab.mat-mdc-button-disabled, .mat-mdc-extended-fab.mat-mdc-button-disabled:focus {
  box-shadow: none;
}
.mat-mdc-extended-fab.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
[dir=rtl] .mat-mdc-extended-fab .mdc-button__label + .mat-icon, [dir=rtl] .mat-mdc-extended-fab .mdc-button__label + .material-icons,
.mat-mdc-extended-fab > .mat-icon,
.mat-mdc-extended-fab > .material-icons {
  margin-left: -8px;
  margin-right: 12px;
}
.mat-mdc-extended-fab .mdc-button__label + .mat-icon,
.mat-mdc-extended-fab .mdc-button__label + .material-icons, [dir=rtl] .mat-mdc-extended-fab > .mat-icon, [dir=rtl] .mat-mdc-extended-fab > .material-icons {
  margin-left: 12px;
  margin-right: -8px;
}
.mat-mdc-extended-fab .mat-mdc-button-touch-target {
  width: 100%;
}

.mat-mdc-button-progress-indicator-container {
  position: absolute;
  inset-inline-start: 0;
  margin-block-start: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}

.mat-mdc-button-progress-indicator-shown mat-icon,
.mat-mdc-button-progress-indicator-shown [matButtonIcon],
.mat-mdc-button-progress-indicator-shown .mdc-button__label {
  visibility: hidden;
}
`],encapsulation:2})}return a})();var be=(()=>{class a extends j{_options=g$2(Zt,{optional:!0});_isFab=!0;constructor(){super(),this._options=this._options||H,this.color=this._options.color||H.color}static ɵfac=function(n){return new(n||a)};static ɵcmp=NC({type:a,selectors:[[`button`,`mat-mini-fab`,``],[`a`,`mat-mini-fab`,``],[`button`,`matMiniFab`,``],[`a`,`matMiniFab`,``]],hostAttrs:[1,`mdc-fab`,`mat-mdc-fab-base`,`mdc-fab--mini`,`mat-mdc-mini-fab`],exportAs:[`matButton`,`matAnchor`],features:[Dg],ngContentSelectors:ut,decls:8,vars:5,consts:[[1,`mat-mdc-button-persistent-ripple`],[1,`mdc-button__label`],[1,`mat-mdc-button-progress-indicator-container`],[1,`mat-focus-indicator`],[1,`mat-mdc-button-touch-target`]],template:function(n,e){n&1&&(Uw(bt),Fg(0,`span`,0),Gw(1),Xu$1(2,`span`,1),Gw(3,1),el$1(),Gw(4,2),Nw(5,pn,2,0,`div`,2),Fg(6,`span`,3)(7,`span`,4)),n&2&&(Jg(`mdc-button__ripple`,!e._isFab)(`mdc-fab__ripple`,e._isFab),lI(5),xw(e.showProgress()?5:-1))},styles:[fn$1],encapsulation:2})}return a})();function Yt(a){return Error(`Unable to find icon with the name "${a}"`)}function hn$1(){return Error(`Could not find HttpClient for use with Angular Material icons. Please add provideHttpClient() to your providers.`)}function qt$1(a){return Error(`The URL provided to MatIconRegistry was not trusted as a resource URL via Angular's DomSanitizer. Attempted URL was "${a}".`)}function Xt(a){return Error(`The literal provided to MatIconRegistry was not trusted as safe HTML by Angular's DomSanitizer. Attempted literal was "${a}".`)}var N=class{url;svgText;options;svgElement=null;constructor(o,t,n){this.url=o,this.svgText=t,this.options=n}};var Kt=(()=>{class a{_httpClient;_sanitizer;_errorHandler;_document;_svgIconConfigs=new Map;_iconSetConfigs=new Map;_cachedIconsByUrl=new Map;_inProgressUrlFetches=new Map;_fontCssClassesByAlias=new Map;_resolvers=[];_defaultFontSetClass=[`material-icons`,`mat-ligature-font`];constructor(t,n,e,i){this._httpClient=t,this._sanitizer=n,this._errorHandler=i,this._document=e}addSvgIcon(t,n,e){return this.addSvgIconInNamespace(``,t,n,e)}addSvgIconLiteral(t,n,e){return this.addSvgIconLiteralInNamespace(``,t,n,e)}addSvgIconInNamespace(t,n,e,i){return this._addSvgIconConfig(t,n,new N(e,null,i))}addSvgIconResolver(t){return this._resolvers.push(t),this}addSvgIconLiteralInNamespace(t,n,e,i){let r=this._sanitizer.sanitize(K$2.HTML,e);if(!r)throw Xt(e);let c=Qt$3(r);return this._addSvgIconConfig(t,n,new N(``,c,i))}addSvgIconSet(t,n){return this.addSvgIconSetInNamespace(``,t,n)}addSvgIconSetLiteral(t,n){return this.addSvgIconSetLiteralInNamespace(``,t,n)}addSvgIconSetInNamespace(t,n,e){return this._addSvgIconSetConfig(t,new N(n,null,e))}addSvgIconSetLiteralInNamespace(t,n,e){let i=this._sanitizer.sanitize(K$2.HTML,n);if(!i)throw Xt(n);let r=Qt$3(i);return this._addSvgIconSetConfig(t,new N(``,r,e))}registerFontClassAlias(t,n=t){return this._fontCssClassesByAlias.set(t,n),this}classNameForFontAlias(t){return this._fontCssClassesByAlias.get(t)||t}setDefaultFontSetClass(...t){return this._defaultFontSetClass=t,this}getDefaultFontSetClass(){return this._defaultFontSetClass}getSvgIconFromUrl(t){let n=this._sanitizer.sanitize(K$2.RESOURCE_URL,t);if(!n)throw qt$1(t);let e=this._cachedIconsByUrl.get(n);return e?Ty(et(e)):this._loadSvgIconFromConfig(new N(t,null)).pipe(cd$1(i=>this._cachedIconsByUrl.set(n,i)),Ye$2(i=>et(i)))}getNamedSvgIcon(t,n=``){let e=Jt(n,t),i=this._svgIconConfigs.get(e);if(i)return this._getSvgFromConfig(i);if(i=this._getIconConfigFromResolvers(n,t),i)return this._svgIconConfigs.set(e,i),this._getSvgFromConfig(i);let r=this._iconSetConfigs.get(n);return r?this._getSvgFromIconSetConfigs(t,r):Sy(Yt(e))}ngOnDestroy(){this._resolvers=[],this._svgIconConfigs.clear(),this._iconSetConfigs.clear(),this._cachedIconsByUrl.clear()}_getSvgFromConfig(t){return t.svgText?Ty(et(this._svgElementFromConfig(t))):this._loadSvgIconFromConfig(t).pipe(Ye$2(n=>et(n)))}_getSvgFromIconSetConfigs(t,n){let e=this._extractIconWithNameFromAnySet(t,n);if(e)return Ty(e);return Py(n.filter(r=>!r.svgText).map(r=>this._loadSvgIconSetFromConfig(r).pipe(nd$1(c=>{let l=`Loading icon set URL: ${this._sanitizer.sanitize(K$2.RESOURCE_URL,r.url)} failed: ${c.message}`;return this._errorHandler.handleError(new Error(l)),Ty(null)})))).pipe(Ye$2(()=>{let r=this._extractIconWithNameFromAnySet(t,n);if(!r)throw Yt(t);return r}))}_extractIconWithNameFromAnySet(t,n){for(let e=n.length-1;e>=0;e--){let i=n[e];if(i.svgText&&i.svgText.toString().indexOf(t)>-1){let r=this._svgElementFromConfig(i),c=this._extractSvgIconFromSet(r,t,i.options);if(c)return c}}return null}_loadSvgIconFromConfig(t){return this._fetchIcon(t).pipe(cd$1(n=>t.svgText=n),Ye$2(()=>this._svgElementFromConfig(t)))}_loadSvgIconSetFromConfig(t){return t.svgText?Ty(null):this._fetchIcon(t).pipe(cd$1(n=>t.svgText=n))}_extractSvgIconFromSet(t,n,e){let i=t.querySelector(`[id="${n}"]`);if(!i)return null;let r=i.cloneNode(!0);if(r.removeAttribute(`id`),r.nodeName.toLowerCase()===`svg`)return this._setSvgAttributes(r,e);if(r.nodeName.toLowerCase()===`symbol`)return this._setSvgAttributes(this._toSvgElement(r),e);let c=this._svgElementFromString(Qt$3(`<svg></svg>`));return c.appendChild(r),this._setSvgAttributes(c,e)}_svgElementFromString(t){let n=this._document.createElement(`DIV`);n.innerHTML=t;let e=n.querySelector(`svg`);if(!e)throw Error(`<svg> tag not found`);return e}_toSvgElement(t){let n=this._svgElementFromString(Qt$3(`<svg></svg>`)),e=t.attributes;for(let i=0;i<e.length;i++){let{name:r,value:c}=e[i];r!==`id`&&n.setAttribute(r,c)}for(let i=0;i<t.childNodes.length;i++)t.childNodes[i].nodeType===this._document.ELEMENT_NODE&&n.appendChild(t.childNodes[i].cloneNode(!0));return n}_setSvgAttributes(t,n){return t.setAttribute(`fit`,``),t.setAttribute(`height`,`100%`),t.setAttribute(`width`,`100%`),t.setAttribute(`preserveAspectRatio`,`xMidYMid meet`),t.setAttribute(`focusable`,`false`),n&&n.viewBox&&t.setAttribute(`viewBox`,n.viewBox),t}_fetchIcon(t){let{url:n,options:e}=t,i=e?.withCredentials??!1;if(!this._httpClient)throw hn$1();if(n==null)throw Error(`Cannot fetch icon from URL "${n}".`);let r=this._sanitizer.sanitize(K$2.RESOURCE_URL,n);if(!r)throw qt$1(n);let c=this._inProgressUrlFetches.get(r);if(c)return c;let f=this._httpClient.get(r,{responseType:`text`,withCredentials:i}).pipe(Ye$2(l=>Qt$3(l)),sd$1(()=>this._inProgressUrlFetches.delete(r)),oa$1());return this._inProgressUrlFetches.set(r,f),f}_addSvgIconConfig(t,n,e){return this._svgIconConfigs.set(Jt(t,n),e),this}_addSvgIconSetConfig(t,n){let e=this._iconSetConfigs.get(t);return e?e.push(n):this._iconSetConfigs.set(t,[n]),this}_svgElementFromConfig(t){if(!t.svgElement){let n=this._svgElementFromString(t.svgText);this._setSvgAttributes(n,t.options),t.svgElement=n}return t.svgElement}_getIconConfigFromResolvers(t,n){for(let e=0;e<this._resolvers.length;e++){let i=this._resolvers[e](n,t);if(i)return gn$1(i)?new N(i.url,null,i.options):new N(i,null)}}static ɵfac=function(n){return new(n||a)(J$2(Ye$3,8),J$2(hn$5),J$2(Ne$3,8),J$2(et$2))};static ɵprov=P$1({token:a,factory:a.ɵfac,providedIn:`root`})}return a})();function et(a){return a.cloneNode(!0)}function Jt(a,o){return a+`:`+o}function gn$1(a){return!!(a.url&&a.options)}var yn$1=[`*`];var Sn=new S$1(`MAT_ICON_DEFAULT_OPTIONS`);var _n$1=new S$1(`mat-icon-location`,{providedIn:`root`,factory:()=>{let a=g$2(Ne$3),o=a?a.location:null;return{getPathname:()=>o?o.pathname+o.search:``}}});var Qt=[`clip-path`,`color-profile`,`src`,`cursor`,`fill`,`filter`,`marker`,`marker-start`,`marker-mid`,`marker-end`,`mask`,`stroke`];var Nn$1=Qt.map(a=>`[${a}]`).join(`, `);var xn$1=/^url\(['"]?#(.*?)['"]?\)$/;var Fe=(()=>{class a{_elementRef=g$2(it$2);_iconRegistry=g$2(Kt);_location=g$2(_n$1);_errorHandler=g$2(et$2);_defaultColor;get color(){return this._color||this._defaultColor}set color(t){this._color=t}_color;inline=!1;get svgIcon(){return this._svgIcon}set svgIcon(t){t!==this._svgIcon&&(t?this._updateSvgIcon(t):this._svgIcon&&this._clearSvgElement(),this._svgIcon=t)}_svgIcon;get fontSet(){return this._fontSet}set fontSet(t){let n=this._cleanupFontValue(t);n!==this._fontSet&&(this._fontSet=n,this._updateFontIconClasses())}_fontSet;get fontIcon(){return this._fontIcon}set fontIcon(t){let n=this._cleanupFontValue(t);n!==this._fontIcon&&(this._fontIcon=n,this._updateFontIconClasses())}_fontIcon;_previousFontSetClass=[];_previousFontIconClass;_svgName=null;_svgNamespace=null;_previousPath;_elementsWithExternalReferences;_currentIconFetch=V$3.EMPTY;constructor(){let t=g$2(new Tm$1(`aria-hidden`),{optional:!0}),n=g$2(Sn,{optional:!0});n&&(n.color&&(this.color=this._defaultColor=n.color),n.fontSet&&(this.fontSet=n.fontSet)),t||this._elementRef.nativeElement.setAttribute(`aria-hidden`,`true`)}_splitIconName(t){if(!t)return[``,``];let n=t.split(`:`);switch(n.length){case 1:return[``,n[0]];case 2:return n;default:throw Error(`Invalid icon name: "${t}"`)}}ngOnInit(){this._updateFontIconClasses()}ngAfterViewChecked(){let t=this._elementsWithExternalReferences;if(t&&t.size){let n=this._location.getPathname();n!==this._previousPath&&(this._previousPath=n,this._prependPathToReferences(n))}}ngOnDestroy(){this._currentIconFetch.unsubscribe(),this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear()}_usingFontIcon(){return!this.svgIcon}_setSvgElement(t){this._clearSvgElement();let n=this._location.getPathname();this._previousPath=n,this._cacheChildrenWithExternalReferences(t),this._prependPathToReferences(n),this._elementRef.nativeElement.appendChild(t)}_clearSvgElement(){let t=this._elementRef.nativeElement,n=t.childNodes.length;for(this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear();n--;){let e=t.childNodes[n];(e.nodeType!==1||e.nodeName.toLowerCase()===`svg`)&&e.remove()}}_updateFontIconClasses(){if(!this._usingFontIcon())return;let t=this._elementRef.nativeElement,n=(this.fontSet?this._iconRegistry.classNameForFontAlias(this.fontSet).split(/ +/):this._iconRegistry.getDefaultFontSetClass()).filter(e=>e.length>0);this._previousFontSetClass.forEach(e=>t.classList.remove(e)),n.forEach(e=>t.classList.add(e)),this._previousFontSetClass=n,this.fontIcon!==this._previousFontIconClass&&!n.includes(`mat-ligature-font`)&&(this._previousFontIconClass&&t.classList.remove(this._previousFontIconClass),this.fontIcon&&t.classList.add(this.fontIcon),this._previousFontIconClass=this.fontIcon)}_cleanupFontValue(t){return typeof t==`string`?t.trim().split(` `)[0]:t}_prependPathToReferences(t){let n=this._elementsWithExternalReferences;n&&n.forEach((e,i)=>{e.forEach(r=>{i.setAttribute(r.name,`url('${t}#${r.value}')`)})})}_cacheChildrenWithExternalReferences(t){let n=t.querySelectorAll(Nn$1),e=this._elementsWithExternalReferences=this._elementsWithExternalReferences||new Map;for(let i=0;i<n.length;i++)Qt.forEach(r=>{let c=n[i],f=c.getAttribute(r),l=f?f.match(xn$1):null;if(l){let m=e.get(c);m||(m=[],e.set(c,m)),m.push({name:r,value:l[1]})}})}_updateSvgIcon(t){if(this._svgNamespace=null,this._svgName=null,this._currentIconFetch.unsubscribe(),t){let[n,e]=this._splitIconName(t);n&&(this._svgNamespace=n),e&&(this._svgName=e),this._currentIconFetch=this._iconRegistry.getNamedSvgIcon(e,n).pipe(Rn$2(1)).subscribe(i=>this._setSvgElement(i),i=>{let r=`Error retrieving icon ${n}:${e}! ${i.message}`;this._errorHandler.handleError(new Error(r))})}}static ɵfac=function(n){return new(n||a)};static ɵcmp=NC({type:a,selectors:[[`mat-icon`]],hostAttrs:[`role`,`img`,1,`mat-icon`,`notranslate`],hostVars:10,hostBindings:function(n,e){n&2&&(Rg(`data-mat-icon-type`,e._usingFontIcon()?`font`:`svg`)(`data-mat-icon-name`,e._svgName||e.fontIcon)(`data-mat-icon-namespace`,e._svgNamespace||e.fontSet)(`fontIcon`,e._usingFontIcon()?e.fontIcon:null),sb$1(e.color?`mat-`+e.color:``),Jg(`mat-icon-inline`,e.inline)(`mat-icon-no-color`,e.color!==`primary`&&e.color!==`accent`&&e.color!==`warn`))},inputs:{color:`color`,inline:[2,`inline`,`inline`,mo$2],svgIcon:`svgIcon`,fontSet:`fontSet`,fontIcon:`fontIcon`},exportAs:[`matIcon`],ngContentSelectors:yn$1,decls:1,vars:0,template:function(n,e){n&1&&(Uw(),Gw(0))},styles:[`mat-icon, mat-icon.mat-primary, mat-icon.mat-accent, mat-icon.mat-warn {
  color: var(--%NS%mat-icon-color, inherit);
}

.mat-icon {
  -webkit-user-select: none;
  user-select: none;
  background-repeat: no-repeat;
  display: inline-block;
  fill: currentColor;
  height: 24px;
  width: 24px;
  overflow: hidden;
}
.mat-icon.mat-icon-inline {
  font-size: inherit;
  height: inherit;
  line-height: inherit;
  width: inherit;
}
.mat-icon.mat-ligature-font[fontIcon]::before {
  content: attr(fontIcon);
}

[dir=rtl] .mat-icon-rtl-mirror {
  transform: scale(-1, 1);
}

.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon,
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon {
  display: block;
}
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button .mat-icon,
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button .mat-icon {
  margin: auto;
}
`],encapsulation:2})}return a})();var Xr={production:!0};function za(n){return n instanceof Date}function Qc(n,a){return n.getTime()===a.getTime()}function Kr(n){return n!=null&&!Array.isArray(n)&&!za(n)&&typeof n==`object`}function Zc(n,a){let e=Object.keys(n),t=Object.keys(a);if(e.length!==t.length)return!1;for(let i of e)if(hn(n[i],a[i]))return!1;return!0}function Xc(n,a){if(n.length!==a.length)return!1;let e=Math.min(n.length,a.length);for(let t=0;t<e;++t)if(hn(n[t],a[t]))return!1;return!0}function hn(n,a){return Array.isArray(n)&&Array.isArray(a)?!Xc(n??[],a??[]):za(n)&&za(a)?!Qc(n,a):Kr(n)&&Kr(a)?!Zc(a,n):!isNaN(a)&&isNaN(n)?!0:n!==a}function Wt(n,a=new WeakMap){if(n===null||typeof n!=`object`)return n;let e=n;if(a.has(e))return a.get(e);if(n instanceof Date){let i=new Date(n.getTime());return a.set(e,i),i}if(n instanceof RegExp){let i=new RegExp(n.source,n.flags);return a.set(e,i),i}if(Array.isArray(n)){let i=[];return a.set(e,i),n.forEach((o,r)=>i[r]=Wt(o,a)),i}if(n instanceof Map){let i=new Map;return a.set(e,i),n.forEach((o,r)=>i.set(Wt(r,a),Wt(o,a))),i}if(n instanceof Set){let i=new Set;return a.set(e,i),n.forEach(o=>i.add(Wt(o,a))),i}if(n instanceof ArrayBuffer){let i=n.slice(0);return a.set(e,i),i}if(n instanceof DataView){let i=new DataView(n.buffer.slice(0),n.byteOffset,n.byteLength);return a.set(e,i),i}if(ArrayBuffer.isView(n)){let i=n,o=new i.constructor(i.buffer.slice(0),i.byteOffset,i.length);return a.set(e,o),o}let t=Object.create(Object.getPrototypeOf(e));return a.set(e,t),Reflect.ownKeys(e).forEach(i=>{let o=Object.getOwnPropertyDescriptor(e,i);o&&(`value`in o&&(o.value=Wt(o.value,a)),Object.defineProperty(t,i,o))}),t}var Hn=(function(n){return n.Info=`INFO`,n.Warn=`WARN`,n.Error=`ERROR`,n.Success=`SUCCESS`,n})(Hn||{});var Kc=[`*`];var Yr=(()=>{class n{constructor(){this.type=Zj(Hn.Info)}static{this.ɵfac=function(t){return new(t||n)}}static{this.ɵcmp=NC({type:n,selectors:[[`lab900-alert`]],inputs:{type:[1,`type`]},ngContentSelectors:Kc,decls:3,vars:5,template:function(t,i){t&1&&(Uw(),Xu$1(0,`div`),kb$1(1,`lowercase`),Gw(2),el$1()),t&2&&sb$1(bb$1(`alert alert-`,Lb$1(1,3,i.type())))},dependencies:[O_$1],styles:[`.alert{padding:20px;border-radius:3px}.alert-info{color:#004085;background-color:#cce5ff;border-color:#b8daff}.alert-success{color:#155724;background-color:#d4edda;border-color:#c3e6cb}.alert-warn{color:#856404;background-color:#fff3cd;border-color:#ffeeba}.alert-error{color:#721c24;background-color:#f8d7da;border-color:#f5c6cb}
`],encapsulation:2})}}return n})();function Yc(n,a){if(n&1&&(cs$1(0,`mat-icon`),yb$1(1),Ju$1()),n&2){let e=Hw();lI(),im$1(e.icon().name)}}function Jc(n,a){n&1&&kg(0,`mat-icon`,0),n&2&&Og(`svgIcon`,a)}var Fi=(()=>{class n{constructor(){this.icon=Zj.required()}static{this.ɵfac=function(t){return new(t||n)}}static{this.ɵcmp=NC({type:n,selectors:[[`lab900-icon`]],inputs:{icon:[1,`icon`]},decls:2,vars:2,consts:[[3,`svgIcon`]],template:function(t,i){if(t&1&&(Nw(0,Yc,2,1,`mat-icon`),Nw(1,Jc,1,1,`mat-icon`,0)),t&2){let o;xw(i.icon().name?0:-1),lI(),xw((o=i.icon().svgName)?1:-1,o)}},dependencies:[Fe],encapsulation:2})}}return n})();var os=(()=>{class n{_renderer;_elementRef;onChange=e=>{};onTouched=()=>{};constructor(e,t){this._renderer=e,this._elementRef=t}setProperty(e,t){this._renderer.setProperty(this._elementRef.nativeElement,e,t)}registerOnTouched(e){this.onTouched=e}registerOnChange(e){this.onChange=e}setDisabledState(e){this.setProperty(`disabled`,e)}static ɵfac=function(t){return new(t||n)(ke$3(gn$5),ke$3(it$2))};static ɵdir=En$3({type:n})}return n})();var td=(()=>{class n extends os{static ɵfac=(()=>{let e;return function(i){return(e||(e=Cp$1(n)))(i||n)}})();static ɵdir=En$3({type:n,features:[Dg]})}return n})();var Qn=new S$1(``);var nd={provide:Qn,useExisting:ri$4(()=>rs),multi:!0};function id(){let n=Ps$1()?Ps$1().getUserAgent():``;return/android (\d+)/.test(n.toLowerCase())}var ad=new S$1(``);var rs=(()=>{class n extends os{_compositionMode;_composing=!1;constructor(e,t,i){super(e,t),this._compositionMode=i,this._compositionMode??=!id()}writeValue(e){let t=e??``;this.setProperty(`value`,t)}_handleInput(e){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(e)}_compositionStart(){this._composing=!0}_compositionEnd(e){this._composing=!1,this._compositionMode&&this.onChange(e)}static ɵfac=function(t){return new(t||n)(ke$3(gn$5),ke$3(it$2),ke$3(ad,8))};static ɵdir=En$3({type:n,selectors:[[`input`,`formControlName`,``,3,`type`,`checkbox`,3,`ngNoCva`,``],[`textarea`,`formControlName`,``,3,`ngNoCva`,``],[`input`,`formControl`,``,3,`type`,`checkbox`,3,`ngNoCva`,``],[`textarea`,`formControl`,``,3,`ngNoCva`,``],[`input`,`ngModel`,``,3,`type`,`checkbox`,3,`ngNoCva`,``],[`textarea`,`ngModel`,``,3,`ngNoCva`,``],[``,`ngDefaultControl`,``]],hostBindings:function(t,i){t&1&&Ug(`input`,function(r){return i._handleInput(r.target.value)})(`blur`,function(){return i.onTouched()})(`compositionstart`,function(){return i._compositionStart()})(`compositionend`,function(r){return i._compositionEnd(r.target.value)})},standalone:!1,features:[Mb$1([nd]),Dg]})}return n})();function Ga(n){return n==null||Wa(n)===0}function Wa(n){return n==null?null:Array.isArray(n)||typeof n==`string`?n.length:n instanceof Set?n.size:null}var Zn=new S$1(``);var ss=new S$1(``);var od=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;var Un=class{static min(a){return rd(a)}static max(a){return sd(a)}static required(a){return ls(a)}static requiredTrue(a){return ld(a)}static email(a){return cd(a)}static minLength(a){return dd(a)}static maxLength(a){return md(a)}static pattern(a){return pd(a)}static nullValidator(a){return Oi()}static compose(a){return hs(a)}static composeAsync(a){return fs(a)}};function rd(n){return a=>{if(a.value==null||n==null)return null;let e=parseFloat(a.value);return!isNaN(e)&&e<n?{min:{min:n,actual:a.value}}:null}}function sd(n){return a=>{if(a.value==null||n==null)return null;let e=parseFloat(a.value);return!isNaN(e)&&e>n?{max:{max:n,actual:a.value}}:null}}function ls(n){return Ga(n.value)?{required:!0}:null}function ld(n){return n.value===!0?null:{required:!0}}function cd(n){return Ga(n.value)||od.test(n.value)?null:{email:!0}}function dd(n){return a=>{let e=a.value?.length??Wa(a.value);return e===null||e===0?null:e<n?{minlength:{requiredLength:n,actualLength:e}}:null}}function md(n){return a=>{let e=a.value?.length??Wa(a.value);return e!==null&&e>n?{maxlength:{requiredLength:n,actualLength:e}}:null}}function pd(n){if(!n)return Oi;let a,e;return typeof n==`string`?(e=``,n.charAt(0)!==`^`&&(e+=`^`),e+=n,n.charAt(n.length-1)!==`$`&&(e+=`$`),a=new RegExp(e)):(e=n.toString(),a=n),t=>{if(Ga(t.value))return null;let i=t.value;return a.test(i)?null:{pattern:{requiredPattern:e,actualValue:i}}}}function Oi(n){return null}function cs(n){return n!=null}function ds(n){return uo$2(n)?Le$3(n):n}function ms(n){let a={};return n.forEach(e=>{a=e!=null?q$2(q$2({},a),e):a}),Object.keys(a).length===0?null:a}function ps(n,a){return a.map(e=>e(n))}function ud(n){return!n.validate}function us(n){return n.map(a=>ud(a)?a:e=>a.validate(e))}function hs(n){if(!n)return null;let a=n.filter(cs);return a.length==0?null:function(e){return ms(ps(e,a))}}function qa(n){return n!=null?hs(us(n)):null}function fs(n){if(!n)return null;let a=n.filter(cs);return a.length==0?null:function(e){return Py(ps(e,a).map(ds)).pipe(Ye$2(ms))}}function $a(n){return n!=null?fs(us(n)):null}function Jr(n,a){return n===null?[a]:Array.isArray(n)?[...n,a]:[n,a]}function _s(n){return n._rawValidators}function bs(n){return n._rawAsyncValidators}function Ha(n){return n?Array.isArray(n)?n:[n]:[]}function Li(n,a){return Array.isArray(n)?n.includes(a):n===a}function es(n,a){let e=Ha(a);return Ha(n).forEach(i=>{Li(e,i)||e.push(i)}),e}function ts(n,a){return Ha(a).filter(e=>!Li(n,e))}var Vi=class{get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators=[];_rawAsyncValidators=[];_setValidators(a){this._rawValidators=a||[],this._composedValidatorFn=qa(this._rawValidators)}_setAsyncValidators(a){this._rawAsyncValidators=a||[],this._composedAsyncValidatorFn=$a(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_onDestroyCallbacks=[];_registerOnDestroy(a){this._onDestroyCallbacks.push(a)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(a=>a()),this._onDestroyCallbacks=[]}reset(a=void 0){this.control?.reset(a)}hasError(a,e){return this.control?this.control.hasError(a,e):!1}getError(a,e){return this.control?this.control.getError(a,e):null}};var bn=class extends Vi{name;get formDirective(){return null}get path(){return null}};var jn=`VALID`;var Pi=`INVALID`;var fn=`PENDING`;var Gn=`DISABLED`;var Rt=class{};var Bi=class extends Rt{value;source;constructor(a,e){super(),this.value=a,this.source=e}};var qn=class extends Rt{pristine;source;constructor(a,e){super(),this.pristine=a,this.source=e}};var $n=class extends Rt{touched;source;constructor(a,e){super(),this.touched=a,this.source=e}};var _n=class extends Rt{status;source;constructor(a,e){super(),this.status=a,this.source=e}};var zi=class extends Rt{source;constructor(a){super(),this.source=a}};var gn=class extends Rt{source;constructor(a){super(),this.source=a}};function gs(n){return($i(n)?n.validators:n)||null}function hd(n){return Array.isArray(n)?qa(n):n||null}function vs(n,a){return($i(a)?a.asyncValidators:n)||null}function fd(n){return Array.isArray(n)?$a(n):n||null}function $i(n){return n!=null&&!Array.isArray(n)&&typeof n==`object`}function _d(n,a,e){let t=n.controls;if(!(a?Object.keys(t):t).length)throw new C$2(1e3,``);if(!xs(t,e))throw new C$2(1001,``)}function bd(n,a,e){n._forEachChild((t,i)=>{if(e[i]===void 0)throw new C$2(-1002,``)})}var Hi=class{_pendingDirty=!1;_hasOwnPendingAsyncValidator=null;_pendingTouched=!1;_onCollectionChange=()=>{};_updateOn;_hasRequired=xe$3(!1);_parent=null;_asyncValidationSubscription;_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators;_rawAsyncValidators;value;constructor(a,e){this._assignValidators(a),this._assignAsyncValidators(e)}get validator(){return this._composedValidatorFn}set validator(a){this._rawValidators=this._composedValidatorFn=a,this._updateHasRequiredValidator()}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(a){this._rawAsyncValidators=this._composedAsyncValidatorFn=a}get parent(){return this._parent}get status(){return Q$1(this.statusReactive)}set status(a){Q$1(()=>this.statusReactive.set(a))}_status=qe$3(()=>this.statusReactive());statusReactive=xe$3(void 0);get valid(){return this.status===jn}get invalid(){return this.status===Pi}get pending(){return this.status===fn}get disabled(){return this.status===Gn}get enabled(){return this.status!==Gn}errors;get pristine(){return Q$1(this.pristineReactive)}set pristine(a){Q$1(()=>this.pristineReactive.set(a))}_pristine=qe$3(()=>this.pristineReactive());pristineReactive=xe$3(!0);get dirty(){return!this.pristine}get touched(){return Q$1(this.touchedReactive)}set touched(a){Q$1(()=>this.touchedReactive.set(a))}_touched=qe$3(()=>this.touchedReactive());touchedReactive=xe$3(!1);get untouched(){return!this.touched}_events=new ee$3;events=this._events.asObservable();valueChanges;statusChanges;get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:`change`}setValidators(a){this._assignValidators(a)}setAsyncValidators(a){this._assignAsyncValidators(a)}addValidators(a){this.setValidators(es(a,this._rawValidators))}addAsyncValidators(a){this.setAsyncValidators(es(a,this._rawAsyncValidators))}removeValidators(a){this.setValidators(ts(a,this._rawValidators))}removeAsyncValidators(a){this.setAsyncValidators(ts(a,this._rawAsyncValidators))}hasValidator(a){return Li(this._rawValidators,a)}hasAsyncValidator(a){return Li(this._rawAsyncValidators,a)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(a={}){let e=this.touched===!1;this.touched=!0;let t=a.sourceControl??this;a.onlySelf||this._parent?.markAsTouched(Z$3(q$2({},a),{sourceControl:t})),e&&a.emitEvent!==!1&&this._events.next(new $n(!0,t))}markAllAsDirty(a={}){this.markAsDirty({onlySelf:!0,emitEvent:a.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsDirty(a))}markAllAsTouched(a={}){this.markAsTouched({onlySelf:!0,emitEvent:a.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsTouched(a))}markAsUntouched(a={}){let e=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let t=a.sourceControl??this;this._forEachChild(i=>{i.markAsUntouched({onlySelf:!0,emitEvent:a.emitEvent,sourceControl:t})}),a.onlySelf||this._parent?._updateTouched(a,t),e&&a.emitEvent!==!1&&this._events.next(new $n(!1,t))}markAsDirty(a={}){let e=this.pristine===!0;this.pristine=!1;let t=a.sourceControl??this;a.onlySelf||this._parent?.markAsDirty(Z$3(q$2({},a),{sourceControl:t})),e&&a.emitEvent!==!1&&this._events.next(new qn(!1,t))}markAsPristine(a={}){let e=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let t=a.sourceControl??this;this._forEachChild(i=>{i.markAsPristine({onlySelf:!0,emitEvent:a.emitEvent})}),a.onlySelf||this._parent?._updatePristine(a,t),e&&a.emitEvent!==!1&&this._events.next(new qn(!0,t))}markAsPending(a={}){this.status=fn;let e=a.sourceControl??this;a.emitEvent!==!1&&(this._events.next(new _n(this.status,e)),this.statusChanges.emit(this.status)),a.onlySelf||this._parent?.markAsPending(Z$3(q$2({},a),{sourceControl:e}))}disable(a={}){let e=this._parentMarkedDirty(a.onlySelf);this.status=Gn,this.errors=null,this._forEachChild(i=>{i.disable(Z$3(q$2({},a),{onlySelf:!0}))}),this._updateValue();let t=a.sourceControl??this;a.emitEvent!==!1&&(this._events.next(new Bi(this.value,t)),this._events.next(new _n(this.status,t)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(Z$3(q$2({},a),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(i=>i(!0))}enable(a={}){let e=this._parentMarkedDirty(a.onlySelf);this.status=jn,this._forEachChild(t=>{t.enable(Z$3(q$2({},a),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:a.emitEvent}),this._updateAncestors(Z$3(q$2({},a),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(t=>t(!1))}_updateAncestors(a,e){a.onlySelf||(this._parent?.updateValueAndValidity(a),a.skipPristineCheck||this._parent?._updatePristine({},e),this._parent?._updateTouched({},e))}setParent(a){this._parent=a}getRawValue(){return this.value}updateValueAndValidity(a={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let t=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===jn||this.status===fn)&&this._runAsyncValidator(t,a.emitEvent)}let e=a.sourceControl??this;a.emitEvent!==!1&&(this._events.next(new Bi(this.value,e)),this._events.next(new _n(this.status,e)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),a.onlySelf||this._parent?.updateValueAndValidity(Z$3(q$2({},a),{sourceControl:e}))}_updateTreeValidity(a={emitEvent:!0}){this._forEachChild(e=>e._updateTreeValidity(a)),this.updateValueAndValidity({onlySelf:!0,emitEvent:a.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?Gn:jn}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(a,e){if(this.asyncValidator){this.status=fn,this._hasOwnPendingAsyncValidator={emitEvent:e!==!1,shouldHaveEmitted:a!==!1};let t=ds(this.asyncValidator(this));this._asyncValidationSubscription=t.subscribe(i=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(i,{emitEvent:e,shouldHaveEmitted:a})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let a=(this._hasOwnPendingAsyncValidator?.emitEvent||this._hasOwnPendingAsyncValidator?.shouldHaveEmitted)??!1;return this._hasOwnPendingAsyncValidator=null,a}return!1}setErrors(a,e={}){this.errors=a,this._updateControlsErrors(e.emitEvent!==!1,this,e.shouldHaveEmitted)}get(a){let e=a;return e==null||(Array.isArray(e)||(e=e.split(`.`)),e.length===0)?null:e.reduce((t,i)=>t&&t._find(i),this)}getError(a,e){let t=e?this.get(e):this;return t?.errors?t.errors[a]:null}hasError(a,e){return!!this.getError(a,e)}get root(){let a=this;for(;a._parent;)a=a._parent;return a}_updateControlsErrors(a,e,t){this.status=this._calculateStatus(),a&&this.statusChanges.emit(this.status),(a||t)&&this._events.next(new _n(this.status,e)),this._parent&&this._parent._updateControlsErrors(a,e,t)}_initObservables(){this.valueChanges=new Ke$2,this.statusChanges=new Ke$2}_calculateStatus(){return this._allControlsDisabled()?Gn:this.errors?Pi:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(fn)?fn:this._anyControlsHaveStatus(Pi)?Pi:jn}_anyControlsHaveStatus(a){return this._anyControls(e=>e.status===a)}_anyControlsDirty(){return this._anyControls(a=>a.dirty)}_anyControlsTouched(){return this._anyControls(a=>a.touched)}_updatePristine(a,e){let t=!this._anyControlsDirty(),i=this.pristine!==t;this.pristine=t,a.onlySelf||this._parent?._updatePristine(a,e),i&&this._events.next(new qn(this.pristine,e))}_updateTouched(a={},e){this.touched=this._anyControlsTouched(),this._events.next(new $n(this.touched,e)),a.onlySelf||this._parent?._updateTouched(a,e)}_onDisabledChange=[];_registerOnCollectionChange(a){this._onCollectionChange=a}_setUpdateStrategy(a){$i(a)&&a.updateOn!=null&&(this._updateOn=a.updateOn)}_parentMarkedDirty(a){return!a&&!!this._parent?.dirty&&!this._parent._anyControlsDirty()}_find(a){return null}_assignValidators(a){this._rawValidators=Array.isArray(a)?a.slice():a,this._composedValidatorFn=hd(this._rawValidators),this._updateHasRequiredValidator()}_assignAsyncValidators(a){this._rawAsyncValidators=Array.isArray(a)?a.slice():a,this._composedAsyncValidatorFn=fd(this._rawAsyncValidators)}_updateHasRequiredValidator(){Q$1(()=>this._hasRequired.set(this.hasValidator(Un.required)))}};function xs(n,a){return Object.hasOwn(n,a)}function gd(n){return n.tagName===`INPUT`||n.tagName===`SELECT`||n.tagName===`TEXTAREA`}function vd(n,a,e,t){switch(e){case`name`:n.setAttribute(a,e,t);break;case`disabled`:case`readonly`:case`required`:t?n.setAttribute(a,e,``):n.removeAttribute(a,e);break;case`max`:case`min`:case`minLength`:case`maxLength`:t!==void 0?n.setAttribute(a,e,t.toString()):n.removeAttribute(a,e);break}}var ja=class{kind;context;control;message;constructor({kind:a,context:e,control:t}){this.kind=a,this.context=e,this.control=t}};var xd=(()=>{class n{_validator=Oi;_onChange;_enabled;ngOnChanges(e){if(this.inputName in e){let t=this.normalizeInput(e[this.inputName].currentValue);this._enabled=this.enabled(t),this._validator=this._enabled?this.createValidator(t):Oi,this._onChange?.()}}validate(e){return this._validator(e)}registerOnValidatorChange(e){this._onChange=e}enabled(e){return e!=null}static ɵfac=function(t){return new(t||n)};static ɵdir=En$3({type:n,features:[sr$1]})}return n})();var yd={provide:Zn,useExisting:ri$4(()=>ys),multi:!0};var ys=(()=>{class n extends xd{required;inputName=`required`;normalizeInput=mo$2;createValidator=e=>ls;enabled(e){return e}static ɵfac=(()=>{let e;return function(i){return(e||(e=Cp$1(n)))(i||n)}})();static ɵdir=En$3({type:n,selectors:[[``,`required`,``,`formControlName`,``,3,`type`,`checkbox`],[``,`required`,``,`formControl`,``,3,`type`,`checkbox`],[``,`required`,``,`ngModel`,``,3,`type`,`checkbox`]],hostVars:1,hostBindings:function(t,i){t&2&&Rg(`required`,i._enabled?``:null)},inputs:{required:`required`},standalone:!1,features:[Mb$1([yd]),Dg]})}return n})();var Cs=new S$1(``,{factory:()=>Cd});var Cd=`always`;function ns(n,a,e=!0){let t=()=>{};a?.valueAccessor?.registerOnChange(t),a?.valueAccessor?.registerOnTouched(t),Gi(n,a),n&&(a._invokeOnDestroyCallbacks(),n._registerOnCollectionChange(()=>{}))}function ji(n,a){n.forEach(e=>{e.registerOnValidatorChange&&e.registerOnValidatorChange(a)})}function ws(n,a){let e=_s(n);a.validator!==null?n.setValidators(Jr(e,a.validator)):typeof e==`function`&&n.setValidators([e]);let t=bs(n);a.asyncValidator!==null?n.setAsyncValidators(Jr(t,a.asyncValidator)):typeof t==`function`&&n.setAsyncValidators([t]);let i=()=>n.updateValueAndValidity();ji(a._rawValidators,i),ji(a._rawAsyncValidators,i)}function Gi(n,a){let e=!1;if(n!==null){if(a.validator!==null){let i=_s(n);if(Array.isArray(i)&&i.length>0){let o=i.filter(r=>r!==a.validator);o.length!==i.length&&(e=!0,n.setValidators(o))}}if(a.asyncValidator!==null){let i=bs(n);if(Array.isArray(i)&&i.length>0){let o=i.filter(r=>r!==a.asyncValidator);o.length!==i.length&&(e=!0,n.setAsyncValidators(o))}}}let t=()=>{};return ji(a._rawValidators,t),ji(a._rawAsyncValidators,t),e}function ks(n,a){ws(n,a)}function wd(n,a){return Gi(n,a)}function kd(n){return Object.getPrototypeOf(n.constructor)===td}function Ss(n,a){n._syncPendingControls(),a.forEach(e=>{let t=e.control;t.updateOn===`submit`&&t._pendingChange&&(e.viewToModelUpdate(t._pendingValue),t._pendingChange=!1)})}function Sd(n,a){if(!a)return null;let e,t,i;return a.forEach(o=>{o.constructor===rs?e=o:kd(o)?t=o:i=o}),i||t||e||null}function Dd(n,a){let e=n.indexOf(a);e>-1&&n.splice(e,1)}var Wi=class extends Vi{_parent=null;name=null;valueAccessor=null;isCustomControlBased=!1;userOnReset;resetSubscription;set onReset(a){this.userOnReset=a,this.resetSubscription?.unsubscribe(),this.resetSubscription=void 0,this.control&&(this.resetSubscription=this.control.events.subscribe(e=>{e instanceof gn&&this.control&&this.userOnReset?.(this.control.value)}),this.subscription?.add(this.resetSubscription))}isNativeFormElement=!1;rawValueAccessors;_selectedValueAccessor=null;get selectedValueAccessor(){return this._selectedValueAccessor??=Sd(this,this.rawValueAccessors)}parseErrorsValidator=null;renderer;injector;requiredValidatorViaDi;subscription;customControlBindings=null;constructor(a,e,t){super(),this.injector=a,this.renderer=e,this.rawValueAccessors=t,this.injector?.get(X)?.onDestroy(()=>{this.removeParseErrorsValidator(this.control),this.subscription?.unsubscribe()})}setupCustomControl(){this.subscription?.unsubscribe();let a=this.injector?.get(Ls$1);if(!this.control||!a)return;let e=a.markForCheck.bind(a);this.subscription=new V$3,this.subscription.add(this.control.valueChanges.subscribe(e)),this.subscription.add(this.control.statusChanges.subscribe(e)),this.resetSubscription?.unsubscribe(),this.resetSubscription=void 0,this.userOnReset&&(this.resetSubscription=this.control.events.subscribe(t=>{t instanceof gn&&this.control&&this.userOnReset?.(this.control.value)}),this.subscription.add(this.resetSubscription)),this.parseErrorsValidator&&this.control.addValidators(this.parseErrorsValidator)}ngControlCreate(a){!a.nativeElement.hasAttribute?.(`ngNoCva`)&&(this.rawValueAccessors&&this.rawValueAccessors.length>0||this.valueAccessor!==null)||!a.customControl||(this.isCustomControlBased=!0,a.listenToCustomControlModel(i=>{this.control?.setValue(i,{emitModelToViewChange:!1}),this.control?.markAsDirty(),this.viewToModelUpdate(i)}),a.listenToCustomControlOutput(`touch`,()=>{this.control?.markAsTouched()}),this.customControlBindings={},this.isNativeFormElement=gd(a.nativeElement),this.requiredValidatorViaDi=this._rawValidators.find(i=>i instanceof ys))}ngControlUpdate(a,e){if(!this.isCustomControlBased)return;let t=this.control,i=this.customControlBindings;Object.is(i.value,t.value)||(i.value=t.value,a.setCustomControlModelInput(t.value)),this.bindControlProperty(a,i,`touched`,t.touched),this.bindControlProperty(a,i,`dirty`,t.dirty),this.bindControlProperty(a,i,`valid`,t.valid),this.bindControlProperty(a,i,`invalid`,t.invalid),this.bindControlProperty(a,i,`pending`,t.pending),this.bindControlProperty(a,i,`disabled`,t.disabled),this.shouldBindRequired&&this.bindControlProperty(a,i,`required`,this.isRequired);let o=t.errors;if(i.errors!==o){i.errors=o;let r=this._convertErrors(o);a.setInputOnDirectives(`errors`,r)}}get isRequired(){return(this.requiredValidatorViaDi?._enabled||this.control?._hasRequired())??!1}get shouldBindRequired(){return!0}bindControlProperty(a,e,t,i){if(e[t]===i)return;e[t]=i;let o=a.setInputOnDirectives(t,i);this.isNativeFormElement&&!o&&(t===`disabled`||t===`required`)&&this.renderer&&vd(this.renderer,a.nativeElement,t,i)}_convertErrors(a){if(a===null)return[];let e=this.control;return Object.entries(a).map(([t,i])=>new ja({context:i,kind:t,control:e}))}setParseErrorSource(a){if(a===void 0)return;let e=null,t=qe$3(()=>{let i=a();return i.length===0?null:i.reduce((o,r)=>(o[r.kind]=r,o),{})});this.parseErrorsValidator=(()=>e).bind(this),zr(()=>{e=t(),this.control?.updateValueAndValidity({emitEvent:!1})},{injector:this.injector})}removeParseErrorsValidator(a){this.parseErrorsValidator&&(a?.removeValidators(this.parseErrorsValidator),a?.updateValueAndValidity({emitEvent:!1}))}};var qi=class extends Hi{constructor(a,e,t){super(gs(e),vs(t,e)),this.controls=a,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;registerControl(a,e){return this._find(a)||(this.controls[a]=e,e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange),e)}addControl(a,e,t={}){this.registerControl(a,e),this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}removeControl(a,e={}){let t=this._find(a);t&&t._registerOnCollectionChange(()=>{}),delete this.controls[a],this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}setControl(a,e,t={}){let i=this._find(a);i&&i._registerOnCollectionChange(()=>{}),delete this.controls[a],e&&this.registerControl(a,e),this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}contains(a){return this._find(a)?.enabled===!0}setValue(a,e={}){Q$1(()=>{bd(this,!0,a),Object.keys(a).forEach(t=>{_d(this,!0,t),this.controls[t].setValue(a[t],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)})}patchValue(a,e={}){a!=null&&(Object.keys(a).forEach(t=>{let i=this._find(t);i&&i.patchValue(a[t],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(a={},e={}){this._forEachChild((t,i)=>{t.reset(a?a[i]:null,Z$3(q$2({},e),{onlySelf:!0}))}),this._updatePristine(e,this),this._updateTouched(e,this),this.updateValueAndValidity(e),e?.emitEvent!==!1&&this._events.next(new gn(this))}getRawValue(){return this._reduceChildren({},(a,e,t)=>(a[t]=e.getRawValue(),a))}_syncPendingControls(){let a=this._reduceChildren(!1,(e,t)=>t._syncPendingControls()?!0:e);return a&&this.updateValueAndValidity({onlySelf:!0}),a}_forEachChild(a){Object.keys(this.controls).forEach(e=>{let t=this.controls[e];t&&a(t,e)})}_setUpControls(){this._forEachChild(a=>{a.setParent(this),a._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(a){for(let[e,t]of Object.entries(this.controls))if(this.contains(e)&&a(t))return!0;return!1}_reduceValue(){return this._reduceChildren({},(e,t,i)=>((t.enabled||this.disabled)&&(e[i]=t.value),e))}_reduceChildren(a,e){let t=a;return this._forEachChild((i,o)=>{t=e(t,i,o)}),t}_allControlsDisabled(){for(let a of Object.keys(this.controls))if(this.controls[a].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(a){return xs(this.controls,a)?this.controls[a]:null}};var Td={provide:bn,useExisting:ri$4(()=>Ua)};var Wn=Promise.resolve();var Ua=(()=>{class n extends bn{callSetDisabledState;get submitted(){return Q$1(this.submittedReactive)}_submitted=qe$3(()=>this.submittedReactive());submittedReactive=xe$3(!1);_directives=new Set;form;ngSubmit=new Ke$2;options;constructor(e,t,i){super(),this.callSetDisabledState=i,this.form=new qi({},qa(e),$a(t))}ngAfterViewInit(){this._setUpdateStrategy()}get formDirective(){return this}get control(){return this.form}get path(){return[]}get controls(){return this.form.controls}addControl(e){Wn.then(()=>{e.control=this._findContainer(e.path).registerControl(e.name,e.control),e._setupWithForm(this.callSetDisabledState),e.control.updateValueAndValidity({emitEvent:!1}),this._directives.add(e)})}getControl(e){return this.form.get(e.path)}removeControl(e){Wn.then(()=>{this._findContainer(e.path)?.removeControl(e.name),this._directives.delete(e)})}addFormGroup(e){Wn.then(()=>{let t=this._findContainer(e.path),i=new qi({});ks(i,e),t.registerControl(e.name,i),i.updateValueAndValidity({emitEvent:!1})})}removeFormGroup(e){Wn.then(()=>{this._findContainer(e.path)?.removeControl?.(e.name)})}getFormGroup(e){return this.form.get(e.path)}updateModel(e,t){Wn.then(()=>{this.form.get(e.path).setValue(t)})}setValue(e){this.control.setValue(e)}onSubmit(e){return this.submittedReactive.set(!0),Ss(this.form,this._directives),this.ngSubmit.emit(e),this.form._events.next(new zi(this.control)),e?.target?.method===`dialog`}onReset(){this.resetForm()}resetForm(e=void 0){this.form.reset(e),this.submittedReactive.set(!1)}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.form._updateOn=this.options.updateOn)}_findContainer(e){return e.pop(),e.length?this.form.get(e):this.form}static ɵfac=function(t){return new(t||n)(ke$3(Zn,10),ke$3(ss,10),ke$3(Cs,8))};static ɵdir=En$3({type:n,selectors:[[`form`,3,`ngNoForm`,``,3,`formGroup`,``,3,`formArray`,``],[`ng-form`],[``,`ngForm`,``]],hostBindings:function(t,i){t&1&&Ug(`submit`,function(r){return i.onSubmit(r)})(`reset`,function(){return i.onReset()})},inputs:{options:[0,`ngFormOptions`,`options`]},outputs:{ngSubmit:`ngSubmit`},exportAs:[`ngForm`],standalone:!1,features:[Mb$1([Td]),Dg]})}return n})();function is(n,a){let e=n.indexOf(a);e>-1&&n.splice(e,1)}function as(n){return typeof n==`object`&&n!==null&&Object.keys(n).length===2&&`value`in n&&`disabled`in n}var Md=class extends Hi{defaultValue=null;_onChange=[];_pendingValue;_pendingChange=!1;constructor(a=null,e,t){super(gs(e),vs(t,e)),this._applyFormState(a),this._setUpdateStrategy(e),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),$i(e)&&(e.nonNullable||e.initialValueIsDefault)&&(as(a)?this.defaultValue=a.value:this.defaultValue=a)}setValue(a,e={}){Q$1(()=>{this.value=this._pendingValue=a,this._onChange.length&&e.emitModelToViewChange!==!1&&this._onChange.forEach(t=>t(this.value,e.emitViewToModelChange!==!1)),this.updateValueAndValidity(e)})}patchValue(a,e={}){this.setValue(a,e)}reset(a=this.defaultValue,e={}){this._applyFormState(a),this.markAsPristine(e),this.markAsUntouched(e),this.setValue(this.value,e),e.overwriteDefaultValue&&(this.defaultValue=this.value),this._pendingChange=!1,e?.emitEvent!==!1&&this._events.next(new gn(this))}_updateValue(){}_anyControls(a){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(a){this._onChange.push(a)}_unregisterOnChange(a){is(this._onChange,a)}registerOnDisabledChange(a){this._onDisabledChange.push(a)}_unregisterOnDisabledChange(a){is(this._onDisabledChange,a)}_forEachChild(a){}_syncPendingControls(){return this.updateOn===`submit`&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(a){as(a)?(this.value=this._pendingValue=a.value,a.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=a}};var Nd=n=>n instanceof Md;var Id=(()=>{class n extends bn{callSetDisabledState;get submitted(){return Q$1(this._submittedReactive)}set submitted(e){this._submittedReactive.set(e)}_submitted=qe$3(()=>this._submittedReactive());_submittedReactive=xe$3(!1);_oldForm;_onCollectionChange=()=>this._updateDomValue();directives=[];constructor(e,t,i){super(),this.callSetDisabledState=i,this._setValidators(e),this._setAsyncValidators(t)}ngOnChanges(e){this.onChanges(e)}ngOnDestroy(){this.onDestroy()}onChanges(e){this._checkFormPresent(),e.hasOwnProperty(`form`)&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}onDestroy(){this.form&&(Gi(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get path(){return[]}addControl(e){let t=this.form.get(e.path);return e._setupWithForm(t,this.callSetDisabledState),t.updateValueAndValidity({emitEvent:!1}),this.directives.push(e),t}getControl(e){return this.form.get(e.path)}removeControl(e){ns(e.control||null,e,!1),Dd(this.directives,e)}addFormGroup(e){this._setUpFormContainer(e)}removeFormGroup(e){this._cleanUpFormContainer(e)}getFormGroup(e){return this.form.get(e.path)}getFormArray(e){return this.form.get(e.path)}addFormArray(e){this._setUpFormContainer(e)}removeFormArray(e){this._cleanUpFormContainer(e)}updateModel(e,t){this.form.get(e.path).setValue(t)}onReset(){this.resetForm()}resetForm(e=void 0,t={}){this.form.reset(e,t),this._submittedReactive.set(!1)}onSubmit(e){return this.submitted=!0,Ss(this.form,this.directives),this.ngSubmit.emit(e),this.form._events.next(new zi(this.control)),e?.target?.method===`dialog`}_updateDomValue(){this.directives.forEach(e=>{let t=e.control,i=this.form.get(e.path);t!==i&&(ns(t||null,e),Nd(i)&&e._setupWithForm(i,this.callSetDisabledState))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(e){let t=this.form.get(e.path);ks(t,e),t.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(e){let t=this.form?.get(e.path);t&&wd(t,e)&&t.updateValueAndValidity({emitEvent:!1})}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm?._registerOnCollectionChange(()=>{})}_updateValidators(){ws(this.form,this),this._oldForm&&Gi(this._oldForm,this)}_checkFormPresent(){this.form}static ɵfac=function(t){return new(t||n)(ke$3(Zn,10),ke$3(ss,10),ke$3(Cs,8))};static ɵdir=En$3({type:n,features:[Dg,sr$1]})}return n})();var Ed={provide:bn,useExisting:ri$4(()=>Qa)};var Qa=(()=>{class n extends Id{form=null;ngSubmit=new Ke$2;get control(){return this.form}static ɵfac=(()=>{let e;return function(i){return(e||(e=Cp$1(n)))(i||n)}})();static ɵdir=En$3({type:n,selectors:[[``,`formGroup`,``]],hostBindings:function(t,i){t&1&&Ug(`submit`,function(r){return i.onSubmit(r)})(`reset`,function(){return i.onReset()})},inputs:{form:[0,`formGroup`,`form`]},outputs:{ngSubmit:`ngSubmit`},exportAs:[`ngForm`],standalone:!1,features:[Mb$1([Ed]),Dg]})}return n})();var Ds=(()=>{class n{get vertical(){return this._vertical}set vertical(e){this._vertical=C$3(e)}_vertical=!1;get inset(){return this._inset}set inset(e){this._inset=C$3(e)}_inset=!1;static ɵfac=function(t){return new(t||n)};static ɵcmp=NC({type:n,selectors:[[`mat-divider`]],hostAttrs:[`role`,`separator`,1,`mat-divider`],hostVars:7,hostBindings:function(t,i){t&2&&(Rg(`aria-orientation`,i.vertical?`vertical`:`horizontal`),Jg(`mat-divider-vertical`,i.vertical)(`mat-divider-horizontal`,!i.vertical)(`mat-divider-inset`,i.inset))},inputs:{vertical:`vertical`,inset:`inset`},decls:0,vars:0,template:function(t,i){},styles:[`.mat-divider {
  display: block;
  margin: 0;
  border-top-style: solid;
  border-top-color: var(--%NS%mat-divider-color, var(--%NS%mat-sys-outline-variant));
  border-top-width: var(--%NS%mat-divider-width, 1px);
}
.mat-divider.mat-divider-vertical {
  border-top: 0;
  border-right-style: solid;
  border-right-color: var(--%NS%mat-divider-color, var(--%NS%mat-sys-outline-variant));
  border-right-width: var(--%NS%mat-divider-width, 1px);
}
.mat-divider.mat-divider-inset {
  margin-left: 80px;
}
[dir=rtl] .mat-divider.mat-divider-inset {
  margin-left: auto;
  margin-right: 80px;
}
`],encapsulation:2})}return n})();var Ui=(()=>{class n{_animationsDisabled=ai$3();state=`unchecked`;disabled=!1;appearance=`full`;static ɵfac=function(t){return new(t||n)};static ɵcmp=NC({type:n,selectors:[[`mat-pseudo-checkbox`]],hostAttrs:[1,`mat-pseudo-checkbox`],hostVars:12,hostBindings:function(t,i){t&2&&Jg(`mat-pseudo-checkbox-indeterminate`,i.state===`indeterminate`)(`mat-pseudo-checkbox-checked`,i.state===`checked`)(`mat-pseudo-checkbox-disabled`,i.disabled)(`mat-pseudo-checkbox-minimal`,i.appearance===`minimal`)(`mat-pseudo-checkbox-full`,i.appearance===`full`)(`_mat-animation-noopable`,i._animationsDisabled)},inputs:{state:`state`,disabled:`disabled`,appearance:`appearance`},decls:0,vars:0,template:function(t,i){},styles:[`.mat-pseudo-checkbox {
  border-radius: 2px;
  cursor: pointer;
  display: inline-block;
  vertical-align: middle;
  box-sizing: border-box;
  position: relative;
  flex-shrink: 0;
  transition: border-color 90ms cubic-bezier(0, 0, 0.2, 0.1), background-color 90ms cubic-bezier(0, 0, 0.2, 0.1);
}
.mat-pseudo-checkbox::after {
  position: absolute;
  opacity: 0;
  content: "";
  border-bottom: 2px solid currentColor;
  transition: opacity 90ms cubic-bezier(0, 0, 0.2, 0.1);
}
.mat-pseudo-checkbox._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-pseudo-checkbox._mat-animation-noopable::after {
  transition: none;
}

.mat-pseudo-checkbox-disabled {
  cursor: default;
}

.mat-pseudo-checkbox-indeterminate::after {
  left: 1px;
  opacity: 1;
  border-radius: 2px;
}

.mat-pseudo-checkbox-checked::after {
  left: 1px;
  border-left: 2px solid currentColor;
  transform: rotate(-45deg);
  opacity: 1;
  box-sizing: content-box;
}

.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after, .mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after {
  color: var(--%NS%mat-pseudo-checkbox-minimal-selected-checkmark-color, var(--%NS%mat-sys-primary));
}
.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after, .mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after {
  color: var(--%NS%mat-pseudo-checkbox-minimal-disabled-selected-checkmark-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}

.mat-pseudo-checkbox-full {
  border-color: var(--%NS%mat-pseudo-checkbox-full-unselected-icon-color, var(--%NS%mat-sys-on-surface-variant));
  border-width: 2px;
  border-style: solid;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-disabled {
  border-color: var(--%NS%mat-pseudo-checkbox-full-disabled-unselected-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate {
  background-color: var(--%NS%mat-pseudo-checkbox-full-selected-icon-color, var(--%NS%mat-sys-primary));
  border-color: transparent;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after {
  color: var(--%NS%mat-pseudo-checkbox-full-selected-checkmark-color, var(--%NS%mat-sys-on-primary));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled {
  background-color: var(--%NS%mat-pseudo-checkbox-full-disabled-selected-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after {
  color: var(--%NS%mat-pseudo-checkbox-full-disabled-selected-checkmark-color, var(--%NS%mat-sys-surface));
}

.mat-pseudo-checkbox {
  width: 18px;
  height: 18px;
}

.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after {
  width: 14px;
  height: 6px;
  transform-origin: center;
  top: -4.2426406871px;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
}
.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after {
  top: 8px;
  width: 16px;
}

.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after {
  width: 10px;
  height: 4px;
  transform-origin: center;
  top: -2.8284271247px;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after {
  top: 6px;
  width: 12px;
}
`],encapsulation:2})}return n})();var Ad=[`*`];var Rd=`.mdc-list {
  margin: 0;
  padding: 8px 0;
  list-style-type: none;
}
.mdc-list:focus {
  outline: none;
}

.mdc-list-item {
  display: flex;
  position: relative;
  justify-content: flex-start;
  overflow: hidden;
  padding: 0;
  align-items: stretch;
  cursor: pointer;
  padding-left: 16px;
  padding-right: 16px;
  background-color: var(--%NS%mat-list-list-item-container-color, transparent);
  border-radius: var(--%NS%mat-list-list-item-container-shape, var(--%NS%mat-sys-corner-none));
}
.mdc-list-item.mdc-list-item--selected {
  background-color: var(--%NS%mat-list-list-item-selected-container-color);
}
.mdc-list-item:focus {
  outline: 0;
}
.mdc-list-item.mdc-list-item--disabled {
  cursor: auto;
}
.mdc-list-item.mdc-list-item--with-one-line {
  height: var(--%NS%mat-list-list-item-one-line-container-height, 48px);
}
.mdc-list-item.mdc-list-item--with-one-line .mdc-list-item__start {
  align-self: center;
  margin-top: 0;
}
.mdc-list-item.mdc-list-item--with-one-line .mdc-list-item__end {
  align-self: center;
  margin-top: 0;
}
.mdc-list-item.mdc-list-item--with-two-lines {
  height: var(--%NS%mat-list-list-item-two-line-container-height, 64px);
}
.mdc-list-item.mdc-list-item--with-two-lines .mdc-list-item__start {
  align-self: flex-start;
  margin-top: 16px;
}
.mdc-list-item.mdc-list-item--with-two-lines .mdc-list-item__end {
  align-self: center;
  margin-top: 0;
}
.mdc-list-item.mdc-list-item--with-three-lines {
  height: var(--%NS%mat-list-list-item-three-line-container-height, 88px);
}
.mdc-list-item.mdc-list-item--with-three-lines .mdc-list-item__start {
  align-self: flex-start;
  margin-top: 16px;
}
.mdc-list-item.mdc-list-item--with-three-lines .mdc-list-item__end {
  align-self: flex-start;
  margin-top: 16px;
}
.mdc-list-item.mdc-list-item--%NS%selected::before, .mdc-list-item.mdc-list-item--%NS%selected:focus::before, .mdc-list-item:not(.mdc-list-item--selected):focus::before {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  content: "";
  pointer-events: none;
}

a.mdc-list-item {
  color: inherit;
  text-decoration: none;
}

.mdc-list-item__start {
  fill: currentColor;
  flex-shrink: 0;
  pointer-events: none;
}
.mdc-list-item--with-leading-icon .mdc-list-item__start {
  color: var(--%NS%mat-list-list-item-leading-icon-color, var(--%NS%mat-sys-on-surface-variant));
  width: var(--%NS%mat-list-list-item-leading-icon-size, 24px);
  height: var(--%NS%mat-list-list-item-leading-icon-size, 24px);
  margin-left: 16px;
  margin-right: 32px;
}
[dir=rtl] .mdc-list-item--with-leading-icon .mdc-list-item__start {
  margin-left: 32px;
  margin-right: 16px;
}
.mdc-list-item--%NS%with-leading-icon:hover .mdc-list-item__start {
  color: var(--%NS%mat-list-list-item-hover-leading-icon-color);
}
.mdc-list-item--with-leading-avatar .mdc-list-item__start {
  width: var(--%NS%mat-list-list-item-leading-avatar-size, 40px);
  height: var(--%NS%mat-list-list-item-leading-avatar-size, 40px);
  margin-left: 16px;
  margin-right: 16px;
  border-radius: 50%;
}
.mdc-list-item--with-leading-avatar .mdc-list-item__start, [dir=rtl] .mdc-list-item--with-leading-avatar .mdc-list-item__start {
  margin-left: 16px;
  margin-right: 16px;
  border-radius: 50%;
}

.mdc-list-item__end {
  flex-shrink: 0;
  pointer-events: none;
}
.mdc-list-item--with-trailing-meta .mdc-list-item__end {
  font-family: var(--%NS%mat-list-list-item-trailing-supporting-text-font, var(--%NS%mat-sys-label-small-font));
  line-height: var(--%NS%mat-list-list-item-trailing-supporting-text-line-height, var(--%NS%mat-sys-label-small-line-height));
  font-size: var(--%NS%mat-list-list-item-trailing-supporting-text-size, var(--%NS%mat-sys-label-small-size));
  font-weight: var(--%NS%mat-list-list-item-trailing-supporting-text-weight, var(--%NS%mat-sys-label-small-weight));
  letter-spacing: var(--%NS%mat-list-list-item-trailing-supporting-text-tracking, var(--%NS%mat-sys-label-small-tracking));
}
.mdc-list-item--with-trailing-icon .mdc-list-item__end {
  color: var(--%NS%mat-list-list-item-trailing-icon-color, var(--%NS%mat-sys-on-surface-variant));
  width: var(--%NS%mat-list-list-item-trailing-icon-size, 24px);
  height: var(--%NS%mat-list-list-item-trailing-icon-size, 24px);
}
.mdc-list-item--%NS%with-trailing-icon:hover .mdc-list-item__end {
  color: var(--%NS%mat-list-list-item-hover-trailing-icon-color);
}
.mdc-list-item.mdc-list-item--with-trailing-meta .mdc-list-item__end {
  color: var(--%NS%mat-list-list-item-trailing-supporting-text-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-list-item--selected.mdc-list-item--with-trailing-icon .mdc-list-item__end {
  color: var(--%NS%mat-list-list-item-selected-trailing-icon-color, var(--%NS%mat-sys-primary));
}

.mdc-list-item__content {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  align-self: center;
  flex: 1;
  pointer-events: none;
}
.mdc-list-item--with-two-lines .mdc-list-item__content, .mdc-list-item--with-three-lines .mdc-list-item__content {
  align-self: stretch;
}

.mdc-list-item__primary-text {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  color: var(--%NS%mat-list-list-item-label-text-color, var(--%NS%mat-sys-on-surface));
  font-family: var(--%NS%mat-list-list-item-label-text-font, var(--%NS%mat-sys-body-large-font));
  line-height: var(--%NS%mat-list-list-item-label-text-line-height, var(--%NS%mat-sys-body-large-line-height));
  font-size: var(--%NS%mat-list-list-item-label-text-size, var(--%NS%mat-sys-body-large-size));
  font-weight: var(--%NS%mat-list-list-item-label-text-weight, var(--%NS%mat-sys-body-large-weight));
  letter-spacing: var(--%NS%mat-list-list-item-label-text-tracking, var(--%NS%mat-sys-body-large-tracking));
}
.mdc-list-item:hover .mdc-list-item__primary-text {
  color: var(--%NS%mat-list-list-item-hover-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mdc-list-item:focus .mdc-list-item__primary-text {
  color: var(--%NS%mat-list-list-item-focus-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mdc-list-item--with-two-lines .mdc-list-item__primary-text, .mdc-list-item--with-three-lines .mdc-list-item__primary-text {
  display: block;
  margin-top: 0;
  line-height: normal;
  margin-bottom: -20px;
}
.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before, .mdc-list-item--with-three-lines .mdc-list-item__primary-text::before {
  display: inline-block;
  width: 0;
  height: 28px;
  content: "";
  vertical-align: 0;
}
.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after, .mdc-list-item--with-three-lines .mdc-list-item__primary-text::after {
  display: inline-block;
  width: 0;
  height: 20px;
  content: "";
  vertical-align: -20px;
}

.mdc-list-item__secondary-text {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  display: block;
  margin-top: 0;
  color: var(--%NS%mat-list-list-item-supporting-text-color, var(--%NS%mat-sys-on-surface-variant));
  font-family: var(--%NS%mat-list-list-item-supporting-text-font, var(--%NS%mat-sys-body-medium-font));
  line-height: var(--%NS%mat-list-list-item-supporting-text-line-height, var(--%NS%mat-sys-body-medium-line-height));
  font-size: var(--%NS%mat-list-list-item-supporting-text-size, var(--%NS%mat-sys-body-medium-size));
  font-weight: var(--%NS%mat-list-list-item-supporting-text-weight, var(--%NS%mat-sys-body-medium-weight));
  letter-spacing: var(--%NS%mat-list-list-item-supporting-text-tracking, var(--%NS%mat-sys-body-medium-tracking));
}
.mdc-list-item__secondary-text::before {
  display: inline-block;
  width: 0;
  height: 20px;
  content: "";
  vertical-align: 0;
}
.mdc-list-item--with-three-lines .mdc-list-item__secondary-text {
  white-space: normal;
  line-height: 20px;
}
.mdc-list-item--with-overline .mdc-list-item__secondary-text {
  white-space: nowrap;
  line-height: auto;
}

.mdc-list-item--with-leading-radio.mdc-list-item,
.mdc-list-item--with-leading-checkbox.mdc-list-item,
.mdc-list-item--with-leading-icon.mdc-list-item,
.mdc-list-item--with-leading-avatar.mdc-list-item {
  padding-left: 0;
  padding-right: 16px;
}
[dir=rtl] .mdc-list-item--with-leading-radio.mdc-list-item,
[dir=rtl] .mdc-list-item--with-leading-checkbox.mdc-list-item,
[dir=rtl] .mdc-list-item--with-leading-icon.mdc-list-item,
[dir=rtl] .mdc-list-item--with-leading-avatar.mdc-list-item {
  padding-left: 16px;
  padding-right: 0;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text {
  display: block;
  margin-top: 0;
  line-height: normal;
  margin-bottom: -20px;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before {
  display: inline-block;
  width: 0;
  height: 32px;
  content: "";
  vertical-align: 0;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after {
  display: inline-block;
  width: 0;
  height: 20px;
  content: "";
  vertical-align: -20px;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end {
  display: block;
  margin-top: 0;
  line-height: normal;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before {
  display: inline-block;
  width: 0;
  height: 32px;
  content: "";
  vertical-align: 0;
}

.mdc-list-item--with-trailing-icon.mdc-list-item, [dir=rtl] .mdc-list-item--with-trailing-icon.mdc-list-item {
  padding-left: 0;
  padding-right: 0;
}
.mdc-list-item--with-trailing-icon .mdc-list-item__end {
  margin-left: 16px;
  margin-right: 16px;
}

.mdc-list-item--with-trailing-meta.mdc-list-item {
  padding-left: 16px;
  padding-right: 0;
}
[dir=rtl] .mdc-list-item--with-trailing-meta.mdc-list-item {
  padding-left: 0;
  padding-right: 16px;
}
.mdc-list-item--with-trailing-meta .mdc-list-item__end {
  -webkit-user-select: none;
  user-select: none;
  margin-left: 28px;
  margin-right: 16px;
}
[dir=rtl] .mdc-list-item--with-trailing-meta .mdc-list-item__end {
  margin-left: 16px;
  margin-right: 28px;
}
.mdc-list-item--with-trailing-meta.mdc-list-item--with-three-lines .mdc-list-item__end, .mdc-list-item--with-trailing-meta.mdc-list-item--with-two-lines .mdc-list-item__end {
  display: block;
  line-height: normal;
  align-self: flex-start;
  margin-top: 0;
}
.mdc-list-item--with-trailing-meta.mdc-list-item--with-three-lines .mdc-list-item__end::before, .mdc-list-item--with-trailing-meta.mdc-list-item--with-two-lines .mdc-list-item__end::before {
  display: inline-block;
  width: 0;
  height: 28px;
  content: "";
  vertical-align: 0;
}

.mdc-list-item--with-leading-radio .mdc-list-item__start,
.mdc-list-item--with-leading-checkbox .mdc-list-item__start {
  margin-left: 8px;
  margin-right: 24px;
}
[dir=rtl] .mdc-list-item--with-leading-radio .mdc-list-item__start,
[dir=rtl] .mdc-list-item--with-leading-checkbox .mdc-list-item__start {
  margin-left: 24px;
  margin-right: 8px;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__start,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__start {
  align-self: flex-start;
  margin-top: 8px;
}

.mdc-list-item--with-trailing-radio.mdc-list-item,
.mdc-list-item--with-trailing-checkbox.mdc-list-item {
  padding-left: 16px;
  padding-right: 0;
}
[dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item,
[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item {
  padding-left: 0;
  padding-right: 16px;
}
.mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-icon, .mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-avatar,
.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-icon,
.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-avatar {
  padding-left: 0;
}
[dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-icon, [dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-avatar,
[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-icon,
[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-avatar {
  padding-right: 0;
}
.mdc-list-item--with-trailing-radio .mdc-list-item__end,
.mdc-list-item--with-trailing-checkbox .mdc-list-item__end {
  margin-left: 24px;
  margin-right: 8px;
}
[dir=rtl] .mdc-list-item--with-trailing-radio .mdc-list-item__end,
[dir=rtl] .mdc-list-item--with-trailing-checkbox .mdc-list-item__end {
  margin-left: 8px;
  margin-right: 24px;
}
.mdc-list-item--with-trailing-radio.mdc-list-item--with-three-lines .mdc-list-item__end,
.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-three-lines .mdc-list-item__end {
  align-self: flex-start;
  margin-top: 8px;
}

.mdc-list-group__subheader {
  margin: 0.75rem 16px;
}

.mdc-list-item--disabled .mdc-list-item__start,
.mdc-list-item--disabled .mdc-list-item__content,
.mdc-list-item--disabled .mdc-list-item__end {
  opacity: 1;
}
.mdc-list-item--disabled .mdc-list-item__primary-text,
.mdc-list-item--disabled .mdc-list-item__secondary-text {
  opacity: var(--%NS%mat-list-list-item-disabled-label-text-opacity, 0.3);
}
.mdc-list-item--disabled.mdc-list-item--with-leading-icon .mdc-list-item__start {
  color: var(--%NS%mat-list-list-item-disabled-leading-icon-color, var(--%NS%mat-sys-on-surface));
  opacity: var(--%NS%mat-list-list-item-disabled-leading-icon-opacity, 0.38);
}
.mdc-list-item--disabled.mdc-list-item--with-trailing-icon .mdc-list-item__end {
  color: var(--%NS%mat-list-list-item-disabled-trailing-icon-color, var(--%NS%mat-sys-on-surface));
  opacity: var(--%NS%mat-list-list-item-disabled-trailing-icon-opacity, 0.38);
}

.mat-mdc-list-item.mat-mdc-list-item-both-leading-and-trailing, [dir=rtl] .mat-mdc-list-item.mat-mdc-list-item-both-leading-and-trailing {
  padding-left: 0;
  padding-right: 0;
}

.mdc-list-item.mdc-list-item--disabled .mdc-list-item__primary-text {
  color: var(--%NS%mat-list-list-item-disabled-label-text-color, var(--%NS%mat-sys-on-surface));
}

.mdc-list-item:hover::before {
  background-color: var(--%NS%mat-list-list-item-hover-state-layer-color, var(--%NS%mat-sys-on-surface));
  opacity: var(--%NS%mat-list-list-item-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}

.mdc-list-item.mdc-list-item--%NS%disabled::before {
  background-color: var(--%NS%mat-list-list-item-disabled-state-layer-color, var(--%NS%mat-sys-on-surface));
  opacity: var(--%NS%mat-list-list-item-disabled-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}

.mdc-list-item:focus::before {
  background-color: var(--%NS%mat-list-list-item-focus-state-layer-color, var(--%NS%mat-sys-on-surface));
  opacity: var(--%NS%mat-list-list-item-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}

.mdc-list-item--disabled .mdc-radio,
.mdc-list-item--disabled .mdc-checkbox {
  opacity: var(--%NS%mat-list-list-item-disabled-label-text-opacity, 0.3);
}

.mdc-list-item--with-leading-avatar .mat-mdc-list-item-avatar {
  border-radius: var(--%NS%mat-list-list-item-leading-avatar-shape, var(--%NS%mat-sys-corner-full));
  background-color: var(--%NS%mat-list-list-item-leading-avatar-color, var(--%NS%mat-sys-primary-container));
}

.mat-mdc-list-item-icon {
  font-size: var(--%NS%mat-list-list-item-leading-icon-size, 24px);
}

@media (forced-colors: active) {
  a.mdc-list-item--%NS%activated::after {
    content: "";
    position: absolute;
    top: 50%;
    right: 16px;
    transform: translateY(-50%);
    width: 10px;
    height: 0;
    border-bottom: solid 10px;
    border-radius: 10px;
  }
  a.mdc-list-item--activated [dir=rtl]::after {
    right: auto;
    left: 16px;
  }
}

.mat-mdc-list-base {
  display: block;
}
.mat-mdc-list-base .mdc-list-item__start,
.mat-mdc-list-base .mdc-list-item__end,
.mat-mdc-list-base .mdc-list-item__content {
  pointer-events: auto;
}

.mat-mdc-list-item,
.mat-mdc-list-option {
  width: 100%;
  box-sizing: border-box;
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-list-item:not(.mat-mdc-list-item-interactive),
.mat-mdc-list-option:not(.mat-mdc-list-item-interactive) {
  cursor: default;
}
.mat-mdc-list-item .mat-divider-inset,
.mat-mdc-list-option .mat-divider-inset {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
}
.mat-mdc-list-item .mat-mdc-list-item-avatar ~ .mat-divider-inset,
.mat-mdc-list-option .mat-mdc-list-item-avatar ~ .mat-divider-inset {
  margin-left: 72px;
}
[dir=rtl] .mat-mdc-list-item .mat-mdc-list-item-avatar ~ .mat-divider-inset,
[dir=rtl] .mat-mdc-list-option .mat-mdc-list-item-avatar ~ .mat-divider-inset {
  margin-right: 72px;
}

.mat-mdc-list-item-interactive::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  content: "";
  opacity: 0;
  pointer-events: none;
  border-radius: inherit;
}

.mat-mdc-list-item > .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}
.mat-mdc-list-item:focus-visible > .mat-focus-indicator::before {
  content: "";
}

.mat-mdc-list-item.mdc-list-item--with-three-lines .mat-mdc-list-item-line.mdc-list-item__secondary-text {
  white-space: nowrap;
  line-height: normal;
}
.mat-mdc-list-item.mdc-list-item--with-three-lines .mat-mdc-list-item-unscoped-content.mdc-list-item__secondary-text {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}

mat-action-list button {
  background: none;
  color: inherit;
  border: none;
  font: inherit;
  outline: inherit;
  -webkit-tap-highlight-color: transparent;
  text-align: start;
}
mat-action-list button::-moz-focus-inner {
  border: 0;
}

.mdc-list-item--with-leading-icon .mdc-list-item__start {
  margin-inline-start: var(--%NS%mat-list-list-item-leading-icon-start-space, 16px);
  margin-inline-end: var(--%NS%mat-list-list-item-leading-icon-end-space, 16px);
}

.mat-mdc-nav-list .mat-mdc-list-item {
  border-radius: var(--%NS%mat-list-active-indicator-shape, var(--%NS%mat-sys-corner-full));
  --%NS%mat-focus-indicator-border-radius: var(--%NS%mat-list-active-indicator-shape, var(--%NS%mat-sys-corner-full));
}
.mat-mdc-nav-list .mat-mdc-list-item.mdc-list-item--activated {
  background-color: var(--%NS%mat-list-active-indicator-color, var(--%NS%mat-sys-secondary-container));
}
`;var Fd=[`unscopedContent`];var Pd=[`text`];var Od=[[[``,`matListItemAvatar`,``],[``,`matListItemIcon`,``]],[[``,`matListItemTitle`,``]],[[``,`matListItemLine`,``]],`*`,[[``,`matListItemMeta`,``]],[[`mat-divider`]]];var Ld=[`[matListItemAvatar],[matListItemIcon]`,`[matListItemTitle]`,`[matListItemLine]`,`*`,`[matListItemMeta]`,`mat-divider`];var Vd=new S$1(`ListOption`);var Bd=(()=>{class n{_elementRef=g$2(it$2);static ɵfac=function(t){return new(t||n)};static ɵdir=En$3({type:n,selectors:[[``,`matListItemTitle`,``]],hostAttrs:[1,`mat-mdc-list-item-title`,`mdc-list-item__primary-text`]})}return n})();var zd=(()=>{class n{_elementRef=g$2(it$2);static ɵfac=function(t){return new(t||n)};static ɵdir=En$3({type:n,selectors:[[``,`matListItemLine`,``]],hostAttrs:[1,`mat-mdc-list-item-line`,`mdc-list-item__secondary-text`]})}return n})();var Hd=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵdir=En$3({type:n,selectors:[[``,`matListItemMeta`,``]],hostAttrs:[1,`mat-mdc-list-item-meta`,`mdc-list-item__end`]})}return n})();var Ts=(()=>{class n{_listOption=g$2(Vd,{optional:!0});_isAlignedAtStart(){return!this._listOption||this._listOption?._getTogglePosition()===`after`}static ɵfac=function(t){return new(t||n)};static ɵdir=En$3({type:n,hostVars:4,hostBindings:function(t,i){t&2&&Jg(`mdc-list-item__start`,i._isAlignedAtStart())(`mdc-list-item__end`,!i._isAlignedAtStart())}})}return n})();var jd=(()=>{class n extends Ts{static ɵfac=(()=>{let e;return function(i){return(e||(e=Cp$1(n)))(i||n)}})();static ɵdir=En$3({type:n,selectors:[[``,`matListItemAvatar`,``]],hostAttrs:[1,`mat-mdc-list-item-avatar`],features:[Dg]})}return n})();var Gd=(()=>{class n extends Ts{static ɵfac=(()=>{let e;return function(i){return(e||(e=Cp$1(n)))(i||n)}})();static ɵdir=En$3({type:n,selectors:[[``,`matListItemIcon`,``]],hostAttrs:[1,`mat-mdc-list-item-icon`],features:[Dg]})}return n})();var Wd=new S$1(`MAT_LIST_CONFIG`);var Za=(()=>{class n{_isNonInteractive=!0;get disableRipple(){return this._disableRipple}set disableRipple(e){this._disableRipple=C$3(e)}_disableRipple=!1;get disabled(){return this._disabled()}set disabled(e){this._disabled.set(C$3(e))}_disabled=xe$3(!1);_defaultOptions=g$2(Wd,{optional:!0});static ɵfac=function(t){return new(t||n)};static ɵdir=En$3({type:n,hostVars:1,hostBindings:function(t,i){t&2&&Rg(`aria-disabled`,i.disabled)},inputs:{disableRipple:`disableRipple`,disabled:`disabled`}})}return n})();var qd=(()=>{class n{_elementRef=g$2(it$2);_ngZone=g$2(U$4);_listBase=g$2(Za,{optional:!0});_platform=g$2(J$3);_hostElement;_isButtonElement;_noopAnimations=ai$3();_avatars;_icons;set lines(e){this._explicitLines=w$1(e,null),this._updateItemLines(!1)}_explicitLines=null;get disableRipple(){return this.disabled||this._disableRipple||this._noopAnimations||!!this._listBase?.disableRipple}set disableRipple(e){this._disableRipple=C$3(e)}_disableRipple=!1;get disabled(){return this._disabled()||!!this._listBase?.disabled}set disabled(e){this._disabled.set(C$3(e))}_disabled=xe$3(!1);_subscriptions=new V$3;_rippleRenderer=null;_hasUnscopedTextContent=!1;rippleConfig;get rippleDisabled(){return this.disableRipple||!!this.rippleConfig.disabled}constructor(){g$2($$2).load(Vt);let e=g$2(mt,{optional:!0});this.rippleConfig=e||{},this._hostElement=this._elementRef.nativeElement,this._isButtonElement=this._hostElement.nodeName.toLowerCase()===`button`,this._listBase&&!this._listBase._isNonInteractive&&this._initInteractiveListItem(),this._isButtonElement&&!this._hostElement.hasAttribute(`type`)&&this._hostElement.setAttribute(`type`,`button`)}ngAfterViewInit(){this._monitorProjectedLinesAndTitle(),this._updateItemLines(!0)}ngOnDestroy(){this._subscriptions.unsubscribe(),this._rippleRenderer!==null&&this._rippleRenderer._removeTriggerEvents()}_hasIconOrAvatar(){return!!(this._avatars.length||this._icons.length)}_initInteractiveListItem(){this._hostElement.classList.add(`mat-mdc-list-item-interactive`),this._rippleRenderer=new U(this,this._ngZone,this._hostElement,this._platform,g$2(ne$1)),this._rippleRenderer.setupTriggerEvents(this._hostElement)}_monitorProjectedLinesAndTitle(){this._ngZone.runOutsideAngular(()=>{this._subscriptions.add(Vy(this._lines.changes,this._titles.changes).subscribe(()=>this._updateItemLines(!1)))})}_updateItemLines(e){if(!this._lines||!this._titles||!this._unscopedContent)return;e&&this._checkDomForUnscopedTextContent();let t=this._explicitLines??this._inferLinesFromContent(),i=this._unscopedContent.nativeElement;if(this._hostElement.classList.toggle(`mat-mdc-list-item-single-line`,t<=1),this._hostElement.classList.toggle(`mdc-list-item--with-one-line`,t<=1),this._hostElement.classList.toggle(`mdc-list-item--with-two-lines`,t===2),this._hostElement.classList.toggle(`mdc-list-item--with-three-lines`,t===3),this._hasUnscopedTextContent){let o=this._titles.length===0&&t===1;i.classList.toggle(`mdc-list-item__primary-text`,o),i.classList.toggle(`mdc-list-item__secondary-text`,!o)}else i.classList.remove(`mdc-list-item__primary-text`),i.classList.remove(`mdc-list-item__secondary-text`)}_inferLinesFromContent(){let e=this._titles.length+this._lines.length;return this._hasUnscopedTextContent&&(e+=1),e}_checkDomForUnscopedTextContent(){this._hasUnscopedTextContent=Array.from(this._unscopedContent.nativeElement.childNodes).filter(e=>e.nodeType!==e.COMMENT_NODE).some(e=>!!(e.textContent&&e.textContent.trim()))}static ɵfac=function(t){return new(t||n)};static ɵdir=En$3({type:n,contentQueries:function(t,i,o){if(t&1&&Wg(o,jd,4)(o,Gd,4),t&2){let r;Ww(r=qw())&&(i._avatars=r),Ww(r=qw())&&(i._icons=r)}},hostVars:4,hostBindings:function(t,i){t&2&&(Rg(`aria-disabled`,i.disabled)(`disabled`,i._isButtonElement&&i.disabled||null),Jg(`mdc-list-item--disabled`,i.disabled))},inputs:{lines:`lines`,disableRipple:`disableRipple`,disabled:`disabled`}})}return n})();var Ms=(()=>{class n extends qd{_lines;_titles;_meta;_unscopedContent;_itemText;get activated(){return this._activated}set activated(e){this._activated=C$3(e)}_activated=!1;_getAriaCurrent(){return this._hostElement.nodeName===`A`&&this._activated?`page`:null}_hasBothLeadingAndTrailing(){return this._meta.length!==0&&(this._avatars.length!==0||this._icons.length!==0)}static ɵfac=(()=>{let e;return function(i){return(e||(e=Cp$1(n)))(i||n)}})();static ɵcmp=NC({type:n,selectors:[[`mat-list-item`],[`a`,`mat-list-item`,``],[`button`,`mat-list-item`,``]],contentQueries:function(t,i,o){if(t&1&&Wg(o,zd,5)(o,Bd,5)(o,Hd,5),t&2){let r;Ww(r=qw())&&(i._lines=r),Ww(r=qw())&&(i._titles=r),Ww(r=qw())&&(i._meta=r)}},viewQuery:function(t,i){if(t&1&&qg(Fd,5)(Pd,5),t&2){let o;Ww(o=qw())&&(i._unscopedContent=o.first),Ww(o=qw())&&(i._itemText=o.first)}},hostAttrs:[1,`mat-mdc-list-item`,`mdc-list-item`],hostVars:13,hostBindings:function(t,i){t&2&&(Rg(`aria-current`,i._getAriaCurrent()),Jg(`mdc-list-item--activated`,i.activated)(`mdc-list-item--with-leading-avatar`,i._avatars.length!==0)(`mdc-list-item--with-leading-icon`,i._icons.length!==0)(`mdc-list-item--with-trailing-meta`,i._meta.length!==0)(`mat-mdc-list-item-both-leading-and-trailing`,i._hasBothLeadingAndTrailing())(`_mat-animation-noopable`,i._noopAnimations))},inputs:{activated:`activated`},exportAs:[`matListItem`],features:[Dg],ngContentSelectors:Ld,decls:10,vars:0,consts:[[`unscopedContent`,``],[1,`mdc-list-item__content`],[1,`mat-mdc-list-item-unscoped-content`,3,`cdkObserveContent`],[1,`mat-focus-indicator`]],template:function(t,i){t&1&&(Uw(Od),Gw(0),cs$1(1,`span`,1),Gw(2,1),Gw(3,2),cs$1(4,`span`,2,0),Ug(`cdkObserveContent`,function(){return i._updateItemLines(!0)}),Gw(6,3),Ju$1()(),Gw(7,4),Gw(8,5),kg(9,`div`,3))},dependencies:[ji$2],encapsulation:2})}return n})();var Ns=(()=>{class n extends Za{_isNonInteractive=!1;static ɵfac=(()=>{let e;return function(i){return(e||(e=Cp$1(n)))(i||n)}})();static ɵcmp=NC({type:n,selectors:[[`mat-nav-list`]],hostAttrs:[`role`,`navigation`,1,`mat-mdc-nav-list`,`mat-mdc-list-base`,`mdc-list`],exportAs:[`matNavList`],features:[Mb$1([{provide:Za,useExisting:n}]),Dg],ngContentSelectors:Ad,decls:1,vars:0,template:function(t,i){t&1&&(Uw(),Gw(0))},styles:[Rd],encapsulation:2})}return n})();var $d=n=>({name:n});var Ud=()=>({exact:!1});function Qd(n,a){if(n&1&&kg(0,`lab900-icon`,6),n&2)Og(`icon`,Hw(2).icon)}function Zd(n,a){if(n&1&&kg(0,`lab900-icon`,8),n&2)Og(`icon`,Hw(2).icon)}function Xd(n,a){if(n&1&&kg(0,`lab900-icon`,8),n&2)Og(`icon`,xb$1(1,$d,Hw(3).icon()))}function Kd(n,a){if(n&1&&(cs$1(0,`div`,5),Nw(1,Qd,1,1,`lab900-icon`,6),cs$1(2,`div`,7),yb$1(3),kb$1(4,`translate`),Ju$1(),Nw(5,Zd,1,1,`lab900-icon`,8),Nw(6,Xd,1,3,`lab900-icon`,8),Ju$1()),n&2){let e=Hw(),t=Hw();Ms$1(`padding-left`,t.depth()*12,`px`),lI(),xw(e.icon&&(e.icon.position===`left`||!e.icon.position)?1:-1),lI(2),rl$1(` `,Lb$1(4,6,e.label),` `),lI(2),xw(!t.showLevelArrow()&&e?.icon?.position===`right`?5:-1),lI(),xw(t.showLevelArrow()?6:-1)}}function Yd(n,a){n&1&&Pg(0)}function Jd(n,a){if(n&1&&(cs$1(0,`a`,9,1),Ig(2,Yd,1,0,`ng-container`,10),Ju$1()),n&2){let e=Yw(1),t=Hw(),i=Yw(1),o=Hw();Jg(`active`,e.isActive),Og(`disabled`,o.disabled())(`routerLink`,t.route)(`queryParams`,t.routeQueryParams)(`routerLinkActiveOptions`,o.routeMatchOptions()??Nb$1(7,Ud)),lI(2),Og(`ngTemplateOutlet`,i)}}function em(n,a){n&1&&Pg(0)}function tm(n,a){if(n&1&&(cs$1(0,`a`,3),Ig(1,em,1,0,`ng-container`,10),Ju$1()),n&2){let e=Hw(),t=Yw(1);Og(`disabled`,Hw().disabled())(`href`,e.href.url,Kp$1)(`target`,e.href.target),lI(),Og(`ngTemplateOutlet`,t)}}function nm(n,a){n&1&&Pg(0)}function im(n,a){if(n&1&&(cs$1(0,`button`,11),Ig(1,nm,1,0,`ng-container`,10),Ju$1()),n&2){Hw();let e=Yw(1),t=Hw();Jg(`expanded`,t.expanded()),Og(`disabled`,t.disabled()),Rg(`aria-expanded`,t.overlay()?null:t.expanded())(`aria-haspopup`,t.overlay()?`true`:null),lI(),Og(`ngTemplateOutlet`,e)}}function am(n,a){if(n&1&&(Ig(0,Kd,7,8,`ng-template`,null,0,jb$1),Nw(2,Jd,3,8,`a`,2),Nw(3,tm,2,4,`a`,3),Nw(4,im,2,6,`button`,4)),n&2){let e=a;lI(2),xw(e.route?2:-1),lI(),xw(e.href?3:-1),lI(),xw(e?.children?.length?4:-1)}}var Is=(()=>{class n{constructor(){this.item=Zj.required(),this.routeMatchOptions=Zj(void 0),this.disabled=Yj(!1),this.expanded=Yj(!1),this.showLevelArrow=Zj(!1),this.depth=Zj(0),this.overlay=Zj(!1),this.icon=qe$3(()=>this.item()?.childrenInOverlay?`navigate_next`:this.expanded()?`expand_less`:`expand_more`)}static{this.ɵfac=function(t){return new(t||n)}}static{this.ɵcmp=NC({type:n,selectors:[[`lab900-nav-item-button`]],inputs:{item:[1,`item`],routeMatchOptions:[1,`routeMatchOptions`],disabled:[1,`disabled`],expanded:[1,`expanded`],showLevelArrow:[1,`showLevelArrow`],depth:[1,`depth`],overlay:[1,`overlay`]},outputs:{disabled:`disabledChange`,expanded:`expandedChange`},decls:1,vars:1,consts:[[`navItemContent`,``],[`rla`,`routerLinkActive`],[`mat-list-item`,``,`routerLinkActive`,`active`,`ariaCurrentWhenActive`,`page`,1,`nav-item-btn`,3,`disabled`,`routerLink`,`queryParams`,`routerLinkActiveOptions`,`active`],[`mat-list-item`,``,1,`nav-item-btn`,3,`disabled`,`href`,`target`],[`type`,`button`,`mat-list-item`,``,1,`nav-item-btn`,`expandable`,3,`disabled`,`expanded`],[1,`nav-item-btn__inner`],[`aria-hidden`,`true`,1,`nav-item-btn__icon-left`,3,`icon`],[1,`nav-item-btn__label`],[`aria-hidden`,`true`,1,`nav-item-btn__icon-right`,3,`icon`],[`mat-list-item`,``,`routerLinkActive`,`active`,`ariaCurrentWhenActive`,`page`,1,`nav-item-btn`,3,`disabled`,`routerLink`,`queryParams`,`routerLinkActiveOptions`],[4,`ngTemplateOutlet`],[`type`,`button`,`mat-list-item`,``,1,`nav-item-btn`,`expandable`,3,`disabled`]],template:function(t,i){if(t&1&&Nw(0,am,5,3),t&2){let o;xw((o=i.item())?0:-1,o)}},dependencies:[Fi,N_$1,Mt$2,wo$1,Ms,xn$4],styles:[`.nav-item-btn{background:none;border:none;outline:0;text-align:left;flex:1 1 auto;box-sizing:border-box;width:100%;font:inherit;cursor:pointer}.nav-item-btn:focus-visible{outline:2px solid currentColor;outline-offset:-2px}.nav-item-btn__label{flex:1 1 auto;box-sizing:border-box}.nav-item-btn__icon-left{margin-right:.5em}.nav-item-btn__inner{display:flex;flex:1 1 auto;box-sizing:border-box}.nav-item-btn.active,.nav-item-btn.expanded{font-weight:700;background:#0000000a!important}.nav-item-btn[disabled]{background:transparent;opacity:.4}
`],encapsulation:2})}}return n})();var Es=(n,a)=>a.uniqueId;function om(n,a){if(n&1&&kg(0,`lab900-nav-item`,5),n&2){let e=a.$implicit,t=Hw(5);Og(`item`,e)(`depth`,t.indentLevels()?t.depth()+1:0)(`indentLevels`,t.indentLevels())(`allowOverlayMenuUntil`,t.allowOverlayMenuUntil())(`showLevelArrows`,t.showLevelArrows())(`routeMatchOptions`,t.routeMatchOptions())}}function rm(n,a){if(n&1&&(cs$1(0,`div`,4),Ow(1,om,1,6,`lab900-nav-item`,5,Es),Ju$1()),n&2){let e=Hw(4);lI(),kw(e.item().children)}}function sm(n,a){if(n&1&&Nw(0,rm,3,0,`div`,4),n&2)xw(Hw(3).expanded()?0:-1)}function lm(n,a){if(n&1){let e=Vw();cs$1(0,`div`,1)(1,`lab900-nav-item-button`,3),Ug(`click`,function(i){Wd$1(e);return qd$1(Hw(2).onClick(i))}),Ju$1(),Nw(2,sm,1,1),Ju$1()}if(n&2){let e=Hw(2);lI(),Og(`item`,e.item())(`depth`,e.depth())(`expanded`,e.expanded())(`disabled`,e.disabled())(`showLevelArrow`,e.showLevelArrows()&&!!e.item().children?.length)(`routeMatchOptions`,e.item().routeMatchOptions??e.routeMatchOptions()),lI(),xw(e.item().children?.length?2:-1)}}function cm(n,a){if(n&1&&kg(0,`lab900-nav-item`,8),n&2){let e=a.$implicit,t=Hw(3);Og(`item`,e)(`depth`,0)(`showLevelArrows`,t.showLevelArrows())(`routeMatchOptions`,t.routeMatchOptions())}}function dm(n,a){if(n&1&&(cs$1(0,`div`,2),kg(1,`lab900-nav-item-button`,6),cs$1(2,`div`,7),Ow(3,cm,1,4,`lab900-nav-item`,8,Es),Ju$1()()),n&2){let e=Hw(2);lI(),Og(`item`,e.item())(`depth`,e.depth())(`expanded`,e.expanded())(`disabled`,e.disabled())(`showLevelArrow`,e.showLevelArrows()&&!!e.item().children?.length)(`routeMatchOptions`,e.routeMatchOptions())(`overlay`,!0),lI(2),kw(e.item().children)}}function mm(n,a){if(n&1&&(cs$1(0,`div`),Nw(1,lm,3,7,`div`,1),Nw(2,dm,5,7,`div`,2),Ju$1()),n&2){let e=Hw();sb$1(bb$1(`nav-item nav-item--depth-`,e.depth())),lI(),xw(e.showChildrenInOverlay()?-1:1),lI(),xw(e.showChildrenInOverlay()?2:-1)}}var As=(()=>{class n{constructor(){this.router=g$2(ue$1),this.breakpointObserver=g$2(Jt$3),this.item=Zj.required(),this.indentLevels=Zj(!0),this.showLevelArrows=Zj(!1),this.depth=Zj(0),this.allowOverlayMenuUntil=Zj(ni$3.XSmall),this.routeMatchOptions=Zj(void 0),this.disabled=Yj(!1),this.expanded=Yj(!1),this.urlAfterEvent=sH(iH(this.item).pipe(Ir(e=>!!e?.children?.length),ad$1(()=>this.router.events.pipe(Ir(e=>e instanceof H$2))),Ye$2(e=>e.urlAfterRedirects),Gy())),this.breakpointChanges=xe$3(0),this.showChildrenInOverlay=qe$3(()=>this.item().childrenInOverlay?(this.breakpointChanges(),!this.breakpointObserver.isMatched(this.allowOverlayMenuUntil())):!1),zr(e=>{if(!this.item().childrenInOverlay)return;let t=this.breakpointObserver.observe(this.allowOverlayMenuUntil()).pipe(Qy(1)).subscribe(()=>this.breakpointChanges.update(i=>i+1));e(()=>t.unsubscribe())}),zr(()=>{let e=this.item();e.route||e.href||e.children||this.disabled.set(!0)}),zr(()=>{let e=this.item(),t=this.urlAfterEvent();e.children&&t&&this.expanded.set(e.children?.some(i=>t.indexOf(`/${i.route}`)===0))})}onClick(e){let t=this.item();t?.children?.length&&(e.preventDefault(),this.expanded.set(!this.expanded())),!this.disabled()&&t?.route&&t.navigationFinished&&this.router.events.pipe(Ir(i=>i instanceof H$2),Rn$2(1)).subscribe(()=>{t.navigationFinished?.(!0)})}static{this.ɵfac=function(t){return new(t||n)}}static{this.ɵcmp=NC({type:n,selectors:[[`lab900-nav-item`]],inputs:{item:[1,`item`],indentLevels:[1,`indentLevels`],showLevelArrows:[1,`showLevelArrows`],depth:[1,`depth`],allowOverlayMenuUntil:[1,`allowOverlayMenuUntil`],routeMatchOptions:[1,`routeMatchOptions`],disabled:[1,`disabled`],expanded:[1,`expanded`]},outputs:{disabled:`disabledChange`,expanded:`expandedChange`},decls:1,vars:1,consts:[[3,`class`],[1,`nav-item--without-overlay`],[1,`nav-item--with-overlay`],[3,`click`,`item`,`depth`,`expanded`,`disabled`,`showLevelArrow`,`routeMatchOptions`],[1,`nav-item--without-overlay__children`],[3,`item`,`depth`,`indentLevels`,`allowOverlayMenuUntil`,`showLevelArrows`,`routeMatchOptions`],[3,`item`,`depth`,`expanded`,`disabled`,`showLevelArrow`,`routeMatchOptions`,`overlay`],[1,`nav-item--with-overlay__overlay`,`mat-elevation-z4`],[3,`item`,`depth`,`showLevelArrows`,`routeMatchOptions`]],template:function(t,i){t&1&&Nw(0,mm,3,5,`div`,0),t&2&&xw(i.item()?0:-1)},dependencies:[n,Is],styles:[`.nav-item,.nav-item--without-overlay__children{display:flex;flex-direction:column}.nav-item--with-overlay{position:relative}.nav-item--with-overlay__overlay{display:none;position:absolute;left:100%;top:0;background:#fff;min-width:200px;z-index:2;border-radius:4px}.nav-item--%NS%with-overlay:hover .nav-item--with-overlay__overlay,.nav-item--%NS%with-overlay:focus-within .nav-item--with-overlay__overlay{display:block}
`],encapsulation:2})}}return n})();var Os=(n,a)=>a.uniqueId;function pm(n,a){if(n&1&&kg(0,`lab900-icon`,4),n&2){let e=Hw(2).$implicit;Og(`icon`,e.icon)}}function um(n,a){if(n&1&&(cs$1(0,`div`,5),yb$1(1),kb$1(2,`translate`),Ju$1()),n&2){let e=Hw(2).$implicit;lI(),rl$1(` `,Lb$1(2,1,e.label),` `)}}function hm(n,a){if(n&1&&kg(0,`lab900-icon`,6),n&2){let e=Hw(2).$implicit;Og(`icon`,e.icon)}}function fm(n,a){if(n&1&&(cs$1(0,`div`,2),Nw(1,pm,1,1,`lab900-icon`,4),Nw(2,um,3,3,`div`,5),Nw(3,hm,1,1,`lab900-icon`,6),Ju$1()),n&2){let e=Hw().$implicit,t=Hw(2);lI(),xw(e.icon&&(e.icon.position===`left`||!e.icon.position)?1:-1),lI(),xw(e.label?2:-1),lI(),xw(!t.showLevelArrows()&&e.icon&&e.icon.position===`right`?3:-1)}}function _m(n,a){if(n&1&&kg(0,`lab900-nav-item`,3),n&2){let e=a.$implicit,t=Hw(3);Og(`item`,e)(`indentLevels`,t.indentLevels())(`allowOverlayMenuUntil`,t.allowOverlayMenuUntil())(`showLevelArrows`,t.showLevelArrows())(`routeMatchOptions`,t.routeMatchOptions())}}function bm(n,a){if(n&1&&(cs$1(0,`div`,1),Nw(1,fm,4,3,`div`,2),cs$1(2,`mat-nav-list`),Ow(3,_m,1,5,`lab900-nav-item`,3,Os),Ju$1()()),n&2){let e=a.$implicit;lI(),xw(e.label||e.icon?1:-1),lI(2),kw(e.items)}}function gm(n,a){if(n&1&&(cs$1(0,`div`,0),Ow(1,bm,5,1,`div`,1,Os),Ju$1()),n&2){let e=Hw();lI(),kw(e.filteredNavItemGroups())}}var Rs=n=>typeof n?.hide==`function`?n.hide():n?.hide??!1;var vm=0;var Fs=new WeakMap;var Ps=n=>{let a=Fs.get(n);return a||(a=`${++vm}`,Fs.set(n,a)),a};var Qi=(()=>{class n{constructor(){this.navItemGroups=Zj.required(),this.indentLevels=Zj(!0),this.showLevelArrows=Zj(!1),this.allowOverlayMenuUntil=Zj(ni$3.XSmall),this.routeMatchOptions=Zj(void 0),this.filteredNavItemGroups=qe$3(()=>this.navItemGroups().filter(t=>!Rs(t)).map(t=>Z$3(q$2({},t),{items:this.filterNavItems(t.items??[]),uniqueId:Ps(t)})).filter(t=>!!t.items.length))}filterNavItems(e){return e.filter(t=>!Rs(t)).map(t=>{let i=Z$3(q$2({},t),{uniqueId:Ps(t)});return t?.children?.length&&(i.children=this.filterNavItems(t.children)),i}).filter(t=>!!t?.children?.length||t?.route||t?.href)}static{this.ɵfac=function(t){return new(t||n)}}static{this.ɵcmp=NC({type:n,selectors:[[`lab900-nav-list`]],inputs:{navItemGroups:[1,`navItemGroups`],indentLevels:[1,`indentLevels`],showLevelArrows:[1,`showLevelArrows`],allowOverlayMenuUntil:[1,`allowOverlayMenuUntil`],routeMatchOptions:[1,`routeMatchOptions`]},decls:1,vars:1,consts:[[1,`lab900-nav-list`],[1,`nav-list-group`],[1,`nav-list-group__wrapper`],[3,`item`,`indentLevels`,`allowOverlayMenuUntil`,`showLevelArrows`,`routeMatchOptions`],[1,`nav-list-group__icon-left`,3,`icon`],[1,`nav-list-group__label`],[1,`nav-list-group__icon-right`,3,`icon`]],template:function(t,i){if(t&1&&Nw(0,gm,3,0,`div`,0),t&2){let o;xw((o=i.filteredNavItemGroups())?0:-1,o)}},dependencies:[Fi,As,Ns,xn$4],styles:[`.nav-list-group{padding:25px 0}.nav-list-group__wrapper{display:flex;align-items:center;padding:0 16px;margin:0 0 16px}.nav-list-group__label{font-weight:700;font-size:20px;display:block;flex:1 1 auto;box-sizing:border-box}.nav-list-group__icon-left{margin-right:.25em}
`],encapsulation:2})}}return n})();var Xa=class{_box;_destroyed=new ee$3;_resizeSubject=new ee$3;_resizeObserver;_elementObservables=new Map;constructor(a){this._box=a,typeof ResizeObserver<`u`&&(this._resizeObserver=new ResizeObserver(e=>this._resizeSubject.next(e)))}observe(a){return this._elementObservables.has(a)||this._elementObservables.set(a,new M$2(e=>{let t=this._resizeSubject.subscribe(e);return this._resizeObserver?.observe(a,{box:this._box}),()=>{this._resizeObserver?.unobserve(a),t.unsubscribe(),this._elementObservables.delete(a)}}).pipe(Ir(e=>e.some(t=>t.target===a)),Yy({bufferSize:1,refCount:!0}),ia$1(this._destroyed))),this._elementObservables.get(a)}destroy(){this._destroyed.next(),this._destroyed.complete(),this._resizeSubject.complete(),this._elementObservables.clear()}};var Ls=(()=>{class n{_cleanupErrorListener;_observers=new Map;_ngZone=g$2(U$4);constructor(){}ngOnDestroy(){for(let[,e]of this._observers)e.destroy();this._observers.clear(),this._cleanupErrorListener?.()}observe(e,t){let i=t?.box||`content-box`;return this._observers.has(i)||this._observers.set(i,new Xa(i)),this._observers.get(i).observe(e)}static ɵfac=function(t){return new(t||n)};static ɵprov=Oe$3({token:n,factory:n.ɵfac})}return n})();var vn=[`*`];function xm(n,a){n&1&&Gw(0)}var Hs=[`tabListContainer`];var js=[`tabList`];var Gs=[`tabListInner`];var Ws=[`nextPaginator`];var qs=[`previousPaginator`];var ym=[`content`];function Cm(n,a){}var wm=[`tabBodyWrapper`];var km=[`tabHeader`];function Sm(n,a){}function Dm(n,a){if(n&1&&Ig(0,Sm,0,0,`ng-template`,12),n&2){let e=Hw().$implicit;Og(`cdkPortalOutlet`,e.templateLabel)}}function Tm(n,a){if(n&1&&yb$1(0),n&2){let e=Hw().$implicit;im$1(e.textLabel)}}function Mm(n,a){if(n&1){let e=Vw();cs$1(0,`div`,7,2),Ug(`click`,function(){let i=Wd$1(e),o=i.$implicit,r=i.$index,u=Hw(),C=Yw(1);return qd$1(u._handleClick(o,C,r))})(`cdkFocusChange`,function(i){let o=Wd$1(e).$index;return qd$1(Hw()._tabFocusChanged(i,o))}),kg(2,`span`,8)(3,`div`,9),cs$1(4,`span`,10)(5,`span`,11),Nw(6,Dm,1,1,null,12)(7,Tm,1,1),Ju$1()()()}if(n&2){let e=a.$implicit,t=a.$index,i=Yw(1),o=Hw();sb$1(e.labelClass),Jg(`mdc-tab--active`,o.selectedIndex===t),Og(`id`,o._getTabLabelId(e,t))(`disabled`,e.disabled)(`fitInkBarToContent`,o.fitInkBarToContent),Rg(`tabIndex`,o._getTabIndex(t))(`aria-posinset`,t+1)(`aria-setsize`,o._tabs.length)(`aria-controls`,o._getTabContentId(t))(`aria-selected`,o.selectedIndex===t)(`aria-label`,e.ariaLabel||null)(`aria-labelledby`,!e.ariaLabel&&e.ariaLabelledby?e.ariaLabelledby:null),lI(3),Og(`matRippleTrigger`,i)(`matRippleDisabled`,e.disabled||o.disableRipple),lI(3),xw(e.templateLabel?6:7)}}function Nm(n,a){n&1&&Gw(0)}function Im(n,a){if(n&1){let e=Vw();cs$1(0,`mat-tab-body`,13),Ug(`_onCentered`,function(){Wd$1(e);return qd$1(Hw()._removeTabBodyWrapperHeight())})(`_onCentering`,function(i){Wd$1(e);return qd$1(Hw()._setTabBodyWrapperHeight(i))})(`_beforeCentering`,function(i){Wd$1(e);return qd$1(Hw()._bodyCentered(i))}),Ju$1()}if(n&2){let e=a.$implicit,t=a.$index,i=Hw();sb$1(e.bodyClass),Og(`id`,i._getTabContentId(t))(`content`,e.content)(`position`,e.position)(`animationDuration`,i._bodyAnimationDuration)(`preserveContent`,i.preserveContent),Rg(`tabindex`,i.contentTabIndex!=null&&i.selectedIndex===t?i.contentTabIndex:null)(`aria-labelledby`,i._getTabLabelId(e,t))(`aria-hidden`,i.selectedIndex!==t)}}var Em=new S$1(`MatTabContent`);var Am=(()=>{class n{template=g$2(rr$1);static ɵfac=function(t){return new(t||n)};static ɵdir=En$3({type:n,selectors:[[``,`matTabContent`,``]],features:[Mb$1([{provide:Em,useExisting:n}])]})}return n})();var Rm=new S$1(`MatTabLabel`);var $s=new S$1(`MAT_TAB`);var Fm=(()=>{class n extends Oi$2{_closestTab=g$2($s,{optional:!0});static ɵfac=(()=>{let e;return function(i){return(e||(e=Cp$1(n)))(i||n)}})();static ɵdir=En$3({type:n,selectors:[[``,`mat-tab-label`,``],[``,`matTabLabel`,``]],features:[Mb$1([{provide:Rm,useExisting:n}]),Dg]})}return n})();var Us=new S$1(`MAT_TAB_GROUP`);var eo=(()=>{class n{_viewContainerRef=g$2(Dn$2);_closestTabGroup=g$2(Us,{optional:!0});disabled=!1;get templateLabel(){return this._templateLabel}set templateLabel(e){this._setTemplateLabelInput(e)}_templateLabel;_explicitContent=void 0;_implicitContent;textLabel=``;ariaLabel;ariaLabelledby;labelClass;bodyClass;id=null;_contentPortal=null;get content(){return this._contentPortal}_stateChanges=new ee$3;position=null;origin=null;isActive=!1;constructor(){g$2($$2).load(Vt)}ngOnChanges(e){(e.hasOwnProperty(`textLabel`)||e.hasOwnProperty(`disabled`))&&this._stateChanges.next()}ngOnDestroy(){this._stateChanges.complete()}ngOnInit(){this._contentPortal=new Y$2(this._explicitContent||this._implicitContent,this._viewContainerRef)}_setTemplateLabelInput(e){e&&e._closestTab===this&&(this._templateLabel=e)}static ɵfac=function(t){return new(t||n)};static ɵcmp=NC({type:n,selectors:[[`mat-tab`]],contentQueries:function(t,i,o){if(t&1&&Wg(o,Fm,5)(o,Am,7,rr$1),t&2){let r;Ww(r=qw())&&(i.templateLabel=r.first),Ww(r=qw())&&(i._explicitContent=r.first)}},viewQuery:function(t,i){if(t&1&&qg(rr$1,7),t&2){let o;Ww(o=qw())&&(i._implicitContent=o.first)}},hostAttrs:[`hidden`,``],hostVars:1,hostBindings:function(t,i){t&2&&Rg(`id`,null)},inputs:{disabled:[2,`disabled`,`disabled`,mo$2],textLabel:[0,`label`,`textLabel`],ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`],labelClass:`labelClass`,bodyClass:`bodyClass`,id:`id`},exportAs:[`matTab`],features:[Mb$1([{provide:$s,useExisting:n}]),sr$1],ngContentSelectors:vn,decls:1,vars:0,template:function(t,i){t&1&&(Uw(),Cg(0,xm,1,0,`ng-template`))},encapsulation:2,changeDetection:1})}return n})();var Ka=`mdc-tab-indicator--active`;var Vs=`mdc-tab-indicator--no-transition`;var Xi=class{_items;_currentItem;constructor(a){this._items=a}hide(){this._items.forEach(a=>a.deactivateInkBar()),this._currentItem=void 0}alignToElement(a){let e=this._items.find(i=>i.elementRef.nativeElement===a),t=this._currentItem;if(e!==t&&(t?.deactivateInkBar(),e)){let i=t?.elementRef.nativeElement.getBoundingClientRect?.();e.activateInkBar(i),this._currentItem=e}}};var Qs=(()=>{class n{_elementRef=g$2(it$2);_inkBarElement=null;_inkBarContentElement=null;_fitToContent=!1;get fitInkBarToContent(){return this._fitToContent}set fitInkBarToContent(e){this._fitToContent!==e&&(this._fitToContent=e,this._inkBarElement&&this._appendInkBarElement())}activateInkBar(e){let t=this._elementRef.nativeElement;if(!e||!t.getBoundingClientRect||!this._inkBarContentElement){t.classList.add(Ka);return}let i=t.getBoundingClientRect(),o=e.width/i.width,r=e.left-i.left;t.classList.add(Vs),this._inkBarContentElement.style.setProperty(`transform`,`translateX(${r}px) scaleX(${o})`),t.getBoundingClientRect(),t.classList.remove(Vs),t.classList.add(Ka),this._inkBarContentElement.style.setProperty(`transform`,``)}deactivateInkBar(){this._elementRef.nativeElement.classList.remove(Ka)}ngOnInit(){this._createInkBarElement()}ngOnDestroy(){this._inkBarElement?.remove(),this._inkBarElement=this._inkBarContentElement=null}_createInkBarElement(){let e=this._elementRef.nativeElement.ownerDocument||document,t=this._inkBarElement=e.createElement(`span`),i=this._inkBarContentElement=e.createElement(`span`);t.className=`mdc-tab-indicator`,i.className=`mdc-tab-indicator__content mdc-tab-indicator__content--underline`,t.appendChild(this._inkBarContentElement),this._appendInkBarElement()}_appendInkBarElement(){this._inkBarElement;(this._fitToContent?this._elementRef.nativeElement.querySelector(`.mdc-tab__content`):this._elementRef.nativeElement).appendChild(this._inkBarElement)}static ɵfac=function(t){return new(t||n)};static ɵdir=En$3({type:n,inputs:{fitInkBarToContent:[2,`fitInkBarToContent`,`fitInkBarToContent`,mo$2]}})}return n})();var Zs=(()=>{class n extends Qs{elementRef=g$2(it$2);disabled=!1;focus(){this.elementRef.nativeElement.focus()}getOffsetLeft(){return this.elementRef.nativeElement.offsetLeft}getOffsetWidth(){return this.elementRef.nativeElement.offsetWidth}static ɵfac=(()=>{let e;return function(i){return(e||(e=Cp$1(n)))(i||n)}})();static ɵdir=En$3({type:n,selectors:[[``,`matTabLabelWrapper`,``]],hostVars:3,hostBindings:function(t,i){t&2&&(Rg(`aria-disabled`,!!i.disabled),Jg(`mat-mdc-tab-disabled`,i.disabled))},inputs:{disabled:[2,`disabled`,`disabled`,mo$2]},features:[Dg]})}return n})();var Bs={passive:!0};var Pm=650;var Om=100;function Zi(n){let a=n+``;return/^[0-9]+(?:\.[0-9]+)?$/.test(a)?`${n}ms`:/^[0-9]+(?:\.[0-9]+)?(?:ms|s)$/.test(a)?a:``}var Xs=(()=>{class n{_elementRef=g$2(it$2);_changeDetectorRef=g$2(Ls$1);_viewportRuler=g$2(st$4);_dir=g$2(b$2,{optional:!0});_ngZone=g$2(U$4);_platform=g$2(J$3);_sharedResizeObserver=g$2(Ls);_injector=g$2(ne$1);_renderer=g$2(gn$5);_animationsDisabled=ai$3();_eventCleanups;_scrollDistance=0;_selectedIndexChanged=!1;_destroyed=new ee$3;_showPaginationControls=!1;_disableScrollAfter=!0;_disableScrollBefore=!0;_tabLabelCount;_scrollDistanceChanged=!1;_keyManager;_currentTextContent;_stopScrolling=new ee$3;disablePagination=!1;get selectedIndex(){return this._selectedIndex}set selectedIndex(e){let t=isNaN(e)?0:e;this._selectedIndex!=t&&(this._selectedIndexChanged=!0,this._selectedIndex=t,this._keyManager&&this._keyManager.updateActiveItem(t))}_selectedIndex=0;selectFocusedIndex=new Ke$2;indexFocused=new Ke$2;constructor(){this._eventCleanups=this._ngZone.runOutsideAngular(()=>[this._renderer.listen(this._elementRef.nativeElement,`mouseleave`,()=>this._stopInterval())])}ngAfterViewInit(){this._eventCleanups.push(this._renderer.listen(this._previousPaginator.nativeElement,`touchstart`,()=>this._handlePaginatorPress(`before`),Bs),this._renderer.listen(this._nextPaginator.nativeElement,`touchstart`,()=>this._handlePaginatorPress(`after`),Bs))}ngAfterContentInit(){let e=this._dir?this._dir.change:Ty(`ltr`),t=this._sharedResizeObserver.observe(this._elementRef.nativeElement).pipe($y(32),ia$1(this._destroyed)),i=this._viewportRuler.change(150).pipe(ia$1(this._destroyed)),o=()=>{this.updatePagination(),this._alignInkBarToSelectedTab()};this._keyManager=new xe$2(this._items).withHorizontalOrientation(this._getLayoutDirection()).withHomeAndEnd().withWrap().skipPredicate(()=>!1),this._keyManager.updateActiveItem(Math.max(this._selectedIndex,0)),hh$1(o,{injector:this._injector}),Vy(e,i,t,this._items.changes,this._itemsResized()).pipe(ia$1(this._destroyed)).subscribe(()=>{this._ngZone.run(()=>{Promise.resolve().then(()=>{this._scrollDistance=Math.max(0,Math.min(this._getMaxScrollDistance(),this._scrollDistance)),o()})}),this._keyManager?.withHorizontalOrientation(this._getLayoutDirection())}),this._keyManager.change.subscribe(r=>{this.indexFocused.emit(r),this._setTabFocus(r)})}_itemsResized(){return typeof ResizeObserver!=`function`?Lt$3:this._items.changes.pipe(Ky(this._items),ad$1(e=>new M$2(t=>this._ngZone.runOutsideAngular(()=>{let i=new ResizeObserver(o=>t.next(o));return e.forEach(o=>i.observe(o.elementRef.nativeElement)),()=>{i.disconnect()}}))),Qy(1),Ir(e=>e.some(t=>t.contentRect.width>0&&t.contentRect.height>0)))}ngAfterContentChecked(){this._tabLabelCount!=this._items.length&&(this.updatePagination(),this._tabLabelCount=this._items.length,this._changeDetectorRef.markForCheck()),this._selectedIndexChanged&&(this._scrollToLabel(this._selectedIndex),this._checkScrollingControls(),this._alignInkBarToSelectedTab(),this._selectedIndexChanged=!1,this._changeDetectorRef.markForCheck()),this._scrollDistanceChanged&&(this._updateTabScrollPosition(),this._scrollDistanceChanged=!1,this._changeDetectorRef.markForCheck())}ngOnDestroy(){this._eventCleanups.forEach(e=>e()),this._keyManager?.destroy(),this._destroyed.next(),this._destroyed.complete(),this._stopScrolling.complete()}_handleKeydown(e){if(!_t$3(e))switch(e.keyCode){case 13:case 32:if(this.focusIndex!==this.selectedIndex){let t=this._items.get(this.focusIndex);t&&!t.disabled&&(this.selectFocusedIndex.emit(this.focusIndex),this._itemSelected(e))}break;default:this._keyManager?.onKeydown(e)}}_onContentChanges(){let e=this._elementRef.nativeElement.textContent;e!==this._currentTextContent&&(this._currentTextContent=e||``,this._ngZone.run(()=>{this.updatePagination(),this._alignInkBarToSelectedTab(),this._changeDetectorRef.markForCheck()}))}updatePagination(){this._checkPaginationEnabled(),this._checkScrollingControls(),this._updateTabScrollPosition()}get focusIndex(){return this._keyManager?this._keyManager.activeItemIndex:0}set focusIndex(e){!this._isValidIndex(e)||this.focusIndex===e||!this._keyManager||this._keyManager.setActiveItem(e)}_isValidIndex(e){return this._items?!!this._items.toArray()[e]:!0}_setTabFocus(e){if(this._showPaginationControls&&this._scrollToLabel(e),this._items&&this._items.length){this._items.toArray()[e].focus();let t=this._tabListContainer.nativeElement;this._getLayoutDirection()==`ltr`?t.scrollLeft=0:t.scrollLeft=t.scrollWidth-t.offsetWidth}}_getLayoutDirection(){return this._dir&&this._dir.value===`rtl`?`rtl`:`ltr`}_updateTabScrollPosition(){if(this.disablePagination)return;let e=this.scrollDistance,t=this._getLayoutDirection()===`ltr`?-e:e;this._tabList.nativeElement.style.transform=`translateX(${Math.round(t)}px)`,(this._platform.TRIDENT||this._platform.EDGE)&&(this._tabListContainer.nativeElement.scrollLeft=0)}get scrollDistance(){return this._scrollDistance}set scrollDistance(e){this._scrollTo(e)}_scrollHeader(e){let t=this._tabListContainer.nativeElement.offsetWidth,i=(e==`before`?-1:1)*t/3;return this._scrollTo(this._scrollDistance+i)}_handlePaginatorClick(e){this._stopInterval(),this._scrollHeader(e)}_scrollToLabel(e){if(this.disablePagination)return;let t=this._items?this._items.toArray()[e]:null;if(!t)return;let i=this._tabListContainer.nativeElement.offsetWidth,{offsetLeft:o,offsetWidth:r}=t.elementRef.nativeElement,u,C;this._getLayoutDirection()==`ltr`?(u=o,C=u+r):(C=this._tabListInner.nativeElement.offsetWidth-o,u=C-r);let M=this.scrollDistance,U=this.scrollDistance+i;u<M?this.scrollDistance-=M-u:C>U&&(this.scrollDistance+=Math.min(C-U,u-M))}_checkPaginationEnabled(){if(this.disablePagination)this._showPaginationControls=!1;else{let i=this._tabListInner.nativeElement.scrollWidth-this._elementRef.nativeElement.offsetWidth>=5;i||(this.scrollDistance=0),i!==this._showPaginationControls&&(this._showPaginationControls=i,this._changeDetectorRef.markForCheck())}}_checkScrollingControls(){this.disablePagination?this._disableScrollAfter=this._disableScrollBefore=!0:(this._disableScrollBefore=this.scrollDistance==0,this._disableScrollAfter=this.scrollDistance==this._getMaxScrollDistance(),this._changeDetectorRef.markForCheck())}_getMaxScrollDistance(){return this._tabListInner.nativeElement.scrollWidth-this._tabListContainer.nativeElement.offsetWidth||0}_alignInkBarToSelectedTab(){let e=this._items&&this._items.length?this._items.toArray()[this.selectedIndex]:null,t=e?e.elementRef.nativeElement:null;t?this._inkBar.alignToElement(t):this._inkBar.hide()}_stopInterval(){this._stopScrolling.next()}_handlePaginatorPress(e,t){t&&t.button!=null&&t.button!==0||(this._stopInterval(),Pt$2(Pm,Om).pipe(ia$1(Vy(this._stopScrolling,this._destroyed))).subscribe(()=>{let{maxScrollDistance:i,distance:o}=this._scrollHeader(e);(o===0||o>=i)&&this._stopInterval()}))}_scrollTo(e){if(this.disablePagination)return{maxScrollDistance:0,distance:0};let t=this._getMaxScrollDistance();return this._scrollDistance=Math.max(0,Math.min(t,e)),this._scrollDistanceChanged=!0,this._checkScrollingControls(),{maxScrollDistance:t,distance:this._scrollDistance}}static ɵfac=function(t){return new(t||n)};static ɵdir=En$3({type:n,inputs:{disablePagination:[2,`disablePagination`,`disablePagination`,mo$2],selectedIndex:[2,`selectedIndex`,`selectedIndex`,yl$1]},outputs:{selectFocusedIndex:`selectFocusedIndex`,indexFocused:`indexFocused`}})}return n})();var Lm=(()=>{class n extends Xs{_items;_tabListContainer;_tabList;_tabListInner;_nextPaginator;_previousPaginator;_inkBar;ariaLabel;ariaLabelledby;disableRipple=!1;ngAfterContentInit(){this._inkBar=new Xi(this._items),super.ngAfterContentInit()}_itemSelected(e){e.preventDefault()}static ɵfac=(()=>{let e;return function(i){return(e||(e=Cp$1(n)))(i||n)}})();static ɵcmp=NC({type:n,selectors:[[`mat-tab-header`]],contentQueries:function(t,i,o){if(t&1&&Wg(o,Zs,4),t&2){let r;Ww(r=qw())&&(i._items=r)}},viewQuery:function(t,i){if(t&1&&qg(Hs,7)(js,7)(Gs,7)(Ws,5)(qs,5),t&2){let o;Ww(o=qw())&&(i._tabListContainer=o.first),Ww(o=qw())&&(i._tabList=o.first),Ww(o=qw())&&(i._tabListInner=o.first),Ww(o=qw())&&(i._nextPaginator=o.first),Ww(o=qw())&&(i._previousPaginator=o.first)}},hostAttrs:[1,`mat-mdc-tab-header`],hostVars:4,hostBindings:function(t,i){t&2&&Jg(`mat-mdc-tab-header-pagination-controls-enabled`,i._showPaginationControls)(`mat-mdc-tab-header-rtl`,i._getLayoutDirection()==`rtl`)},inputs:{ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`],disableRipple:[2,`disableRipple`,`disableRipple`,mo$2]},features:[Dg],ngContentSelectors:vn,decls:13,vars:10,consts:[[`previousPaginator`,``],[`tabListContainer`,``],[`tabList`,``],[`tabListInner`,``],[`nextPaginator`,``],[`mat-ripple`,``,1,`mat-mdc-tab-header-pagination`,`mat-mdc-tab-header-pagination-before`,3,`click`,`mousedown`,`touchend`,`matRippleDisabled`],[1,`mat-mdc-tab-header-pagination-chevron`],[1,`mat-mdc-tab-label-container`,3,`keydown`],[`role`,`tablist`,1,`mat-mdc-tab-list`,3,`cdkObserveContent`],[1,`mat-mdc-tab-labels`],[`mat-ripple`,``,1,`mat-mdc-tab-header-pagination`,`mat-mdc-tab-header-pagination-after`,3,`mousedown`,`click`,`touchend`,`matRippleDisabled`]],template:function(t,i){t&1&&(Uw(),cs$1(0,`div`,5,0),Ug(`click`,function(){return i._handlePaginatorClick(`before`)})(`mousedown`,function(r){return i._handlePaginatorPress(`before`,r)})(`touchend`,function(){return i._stopInterval()}),kg(2,`div`,6),Ju$1(),cs$1(3,`div`,7,1),Ug(`keydown`,function(r){return i._handleKeydown(r)}),cs$1(5,`div`,8,2),Ug(`cdkObserveContent`,function(){return i._onContentChanges()}),cs$1(7,`div`,9,3),Gw(9),Ju$1()()(),cs$1(10,`div`,10,4),Ug(`mousedown`,function(r){return i._handlePaginatorPress(`after`,r)})(`click`,function(){return i._handlePaginatorClick(`after`)})(`touchend`,function(){return i._stopInterval()}),kg(12,`div`,6),Ju$1()),t&2&&(Jg(`mat-mdc-tab-header-pagination-disabled`,i._disableScrollBefore),Og(`matRippleDisabled`,i._disableScrollBefore||i.disableRipple),lI(3),Jg(`_mat-animation-noopable`,i._animationsDisabled),lI(2),Rg(`aria-label`,i.ariaLabel||null)(`aria-labelledby`,i.ariaLabelledby||null),lI(5),Jg(`mat-mdc-tab-header-pagination-disabled`,i._disableScrollAfter),Og(`matRippleDisabled`,i._disableScrollAfter||i.disableRipple))},dependencies:[Tn$1,ji$2],styles:[`.mat-mdc-tab-header {
  display: flex;
  overflow: hidden;
  position: relative;
  flex-shrink: 0;
}

.mdc-tab-indicator .mdc-tab-indicator__content {
  transition-duration: var(--%NS%mat-tab-header-animation-duration, 250ms);
}

.mat-mdc-tab-header-pagination {
  -webkit-user-select: none;
  user-select: none;
  position: relative;
  display: none;
  justify-content: center;
  align-items: center;
  min-width: 32px;
  cursor: pointer;
  z-index: 2;
  -webkit-tap-highlight-color: transparent;
  touch-action: none;
  box-sizing: content-box;
  outline: 0;
}
.mat-mdc-tab-header-pagination::-moz-focus-inner {
  border: 0;
}
.mat-mdc-tab-header-pagination .mat-ripple-element {
  opacity: 0.12;
  background-color: var(--%NS%mat-tab-inactive-ripple-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab-header-pagination-controls-enabled .mat-mdc-tab-header-pagination {
  display: flex;
}

.mat-mdc-tab-header-pagination-before,
.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-after {
  padding-left: 4px;
}
.mat-mdc-tab-header-pagination-before .mat-mdc-tab-header-pagination-chevron,
.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-after .mat-mdc-tab-header-pagination-chevron {
  transform: rotate(-135deg);
}

.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-before,
.mat-mdc-tab-header-pagination-after {
  padding-right: 4px;
}
.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-before .mat-mdc-tab-header-pagination-chevron,
.mat-mdc-tab-header-pagination-after .mat-mdc-tab-header-pagination-chevron {
  transform: rotate(45deg);
}

.mat-mdc-tab-header-pagination-chevron {
  border-style: solid;
  border-width: 2px 2px 0 0;
  height: 8px;
  width: 8px;
  border-color: var(--%NS%mat-tab-pagination-icon-color, var(--%NS%mat-sys-on-surface));
}

.mat-mdc-tab-header-pagination-disabled {
  box-shadow: none;
  cursor: default;
  pointer-events: none;
}
.mat-mdc-tab-header-pagination-disabled .mat-mdc-tab-header-pagination-chevron {
  opacity: 0.4;
}

.mat-mdc-tab-list {
  flex-grow: 1;
  position: relative;
  transition: transform 500ms cubic-bezier(0.35, 0, 0.25, 1);
}
._mat-animation-noopable .mat-mdc-tab-list {
  transition: none;
}

.mat-mdc-tab-label-container {
  display: flex;
  flex-grow: 1;
  overflow: hidden;
  z-index: 1;
  border-bottom-style: solid;
  border-bottom-width: var(--%NS%mat-tab-divider-height, 1px);
  border-bottom-color: var(--%NS%mat-tab-divider-color, var(--%NS%mat-sys-surface-variant));
}
.mat-mdc-tab-group-inverted-header .mat-mdc-tab-label-container {
  border-bottom: none;
  border-top-style: solid;
  border-top-width: var(--%NS%mat-tab-divider-height, 1px);
  border-top-color: var(--%NS%mat-tab-divider-color, var(--%NS%mat-sys-surface-variant));
}

.mat-mdc-tab-labels {
  display: flex;
  flex: 1 0 auto;
}
[mat-align-tabs=center] > .mat-mdc-tab-header .mat-mdc-tab-labels {
  justify-content: center;
}
[mat-align-tabs=end] > .mat-mdc-tab-header .mat-mdc-tab-labels {
  justify-content: flex-end;
}
.cdk-drop-list .mat-mdc-tab-labels, .mat-mdc-tab-labels.cdk-drop-list {
  min-height: var(--%NS%mat-tab-container-height, 48px);
}

.mat-mdc-tab::before {
  margin: 5px;
}
@media (forced-colors: active) {
  .mat-mdc-tab[aria-disabled=true] {
    color: GrayText;
  }
}
`],encapsulation:2,changeDetection:1})}return n})();var Ks=new S$1(`MAT_TABS_CONFIG`);var zs=(()=>{class n extends Si$1{_host=g$2(Ya);_ngZone=g$2(U$4);_centeringSub=V$3.EMPTY;_leavingSub=V$3.EMPTY;ngOnInit(){super.ngOnInit(),this._centeringSub=this._host._beforeCentering.pipe(Ky(this._host._isCenterPosition())).subscribe(e=>{this._host._content&&e&&!this.hasAttached()&&this._ngZone.run(()=>{Promise.resolve().then(),this.attach(this._host._content)})}),this._leavingSub=this._host._afterLeavingCenter.subscribe(()=>{this._host.preserveContent||this._ngZone.run(()=>this.detach())})}ngOnDestroy(){super.ngOnDestroy(),this._centeringSub.unsubscribe(),this._leavingSub.unsubscribe()}static ɵfac=(()=>{let e;return function(i){return(e||(e=Cp$1(n)))(i||n)}})();static ɵdir=En$3({type:n,selectors:[[``,`matTabBodyHost`,``]],features:[Dg]})}return n})();var Ya=(()=>{class n{_elementRef=g$2(it$2);_dir=g$2(b$2,{optional:!0});_ngZone=g$2(U$4);_injector=g$2(ne$1);_renderer=g$2(gn$5);_diAnimationsDisabled=ai$3();_eventCleanups;_initialized=!1;_fallbackTimer;_positionIndex;_dirChangeSubscription=V$3.EMPTY;_position;_previousPosition;_onCentering=new Ke$2;_beforeCentering=new Ke$2;_afterLeavingCenter=new Ke$2;_onCentered=new Ke$2(!0);_portalHost;_contentElement;_content;animationDuration=`500ms`;preserveContent=!1;set position(e){this._positionIndex=e,this._computePositionAnimationState()}constructor(){if(this._dir){let e=g$2(Ls$1);this._dirChangeSubscription=this._dir.change.subscribe(t=>{this._computePositionAnimationState(t),e.markForCheck()})}}ngOnInit(){this._bindTransitionEvents(),this._position===`center`&&(this._setActiveClass(!0),hh$1(()=>this._onCentering.emit(this._elementRef.nativeElement.clientHeight),{injector:this._injector})),this._initialized=!0}ngOnDestroy(){clearTimeout(this._fallbackTimer),this._eventCleanups?.forEach(e=>e()),this._dirChangeSubscription.unsubscribe()}_bindTransitionEvents(){this._ngZone.runOutsideAngular(()=>{let e=this._elementRef.nativeElement,t=i=>{i.target===this._contentElement?.nativeElement&&(this._elementRef.nativeElement.classList.remove(`mat-tab-body-animating`),i.type===`transitionend`&&this._transitionDone())};this._eventCleanups=[this._renderer.listen(e,`transitionstart`,i=>{i.target===this._contentElement?.nativeElement&&(this._elementRef.nativeElement.classList.add(`mat-tab-body-animating`),this._transitionStarted())}),this._renderer.listen(e,`transitionend`,t),this._renderer.listen(e,`transitioncancel`,t)]})}_transitionStarted(){clearTimeout(this._fallbackTimer);let e=this._position===`center`;this._beforeCentering.emit(e),e&&this._onCentering.emit(this._elementRef.nativeElement.clientHeight)}_transitionDone(){this._position===`center`?this._onCentered.emit():this._previousPosition===`center`&&this._afterLeavingCenter.emit()}_setActiveClass(e){this._elementRef.nativeElement.classList.toggle(`mat-mdc-tab-body-active`,e)}_getLayoutDirection(){return this._dir&&this._dir.value===`rtl`?`rtl`:`ltr`}_isCenterPosition(){return this._positionIndex===0}_computePositionAnimationState(e=this._getLayoutDirection()){this._previousPosition=this._position,this._positionIndex<0?this._position=e==`ltr`?`left`:`right`:this._positionIndex>0?this._position=e==`ltr`?`right`:`left`:this._position=`center`,this._animationsDisabled()?this._simulateTransitionEvents():this._initialized&&(this._position===`center`||this._previousPosition===`center`)&&(clearTimeout(this._fallbackTimer),this._fallbackTimer=this._ngZone.runOutsideAngular(()=>setTimeout(()=>this._simulateTransitionEvents(),100)))}_simulateTransitionEvents(){this._transitionStarted(),hh$1(()=>this._transitionDone(),{injector:this._injector})}_animationsDisabled(){return this._diAnimationsDisabled||this.animationDuration===`0ms`||this.animationDuration===`0s`}static ɵfac=function(t){return new(t||n)};static ɵcmp=NC({type:n,selectors:[[`mat-tab-body`]],viewQuery:function(t,i){if(t&1&&qg(zs,5)(ym,5),t&2){let o;Ww(o=qw())&&(i._portalHost=o.first),Ww(o=qw())&&(i._contentElement=o.first)}},hostAttrs:[1,`mat-mdc-tab-body`],hostVars:1,hostBindings:function(t,i){t&2&&Rg(`inert`,i._position===`center`?null:``)},inputs:{_content:[0,`content`,`_content`],animationDuration:`animationDuration`,preserveContent:`preserveContent`,position:`position`},outputs:{_onCentering:`_onCentering`,_beforeCentering:`_beforeCentering`,_onCentered:`_onCentered`},decls:3,vars:6,consts:[[`content`,``],[`cdkScrollable`,``,1,`mat-mdc-tab-body-content`],[`matTabBodyHost`,``]],template:function(t,i){t&1&&(cs$1(0,`div`,1,0),Ig(2,Cm,0,0,`ng-template`,2),Ju$1()),t&2&&Jg(`mat-tab-body-content-left`,i._position===`left`)(`mat-tab-body-content-right`,i._position===`right`)(`mat-tab-body-content-can-animate`,i._position===`center`||i._previousPosition===`center`)},dependencies:[zs,rt$2],styles:[`.mat-mdc-tab-body {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  display: block;
  overflow: hidden;
  outline: 0;
  flex-basis: 100%;
}
.mat-mdc-tab-body.mat-mdc-tab-body-active {
  position: relative;
  overflow-x: hidden;
  overflow-y: auto;
  z-index: 1;
  flex-grow: 1;
}
.mat-mdc-tab-group.mat-mdc-tab-group-dynamic-height .mat-mdc-tab-body.mat-mdc-tab-body-active {
  overflow-y: hidden;
}

.mat-mdc-tab-body-content {
  height: 100%;
  overflow: auto;
  transform: none;
  visibility: hidden;
}
.mat-tab-body-animating > .mat-mdc-tab-body-content, .mat-mdc-tab-body-active > .mat-mdc-tab-body-content {
  visibility: visible;
}
.mat-tab-body-animating > .mat-mdc-tab-body-content {
  min-height: 1px;
}
.mat-mdc-tab-group-dynamic-height .mat-mdc-tab-body-content {
  overflow: hidden;
}

.mat-tab-body-content-can-animate {
  transition: transform var(--%NS%mat-tab-body-animation-duration) 1ms cubic-bezier(0.35, 0, 0.25, 1);
}
.mat-mdc-tab-body-wrapper._mat-animation-noopable .mat-tab-body-content-can-animate {
  transition: none;
}

.mat-tab-body-content-left {
  transform: translate3d(-100%, 0, 0);
}

.mat-tab-body-content-right {
  transform: translate3d(100%, 0, 0);
}
`],encapsulation:2,changeDetection:1})}return n})();var Ys=(()=>{class n{_elementRef=g$2(it$2);_changeDetectorRef=g$2(Ls$1);_ngZone=g$2(U$4);_tabsSubscription=V$3.EMPTY;_tabLabelSubscription=V$3.EMPTY;_tabBodySubscription=V$3.EMPTY;_diAnimationsDisabled=ai$3();_bodyAnimationDuration;_headerAnimationDuration;_allTabs;_tabBodies;_tabBodyWrapper;_tabHeader;_tabs=new Ji$2;_indexToSelect=0;_lastFocusedTabIndex=null;_tabBodyWrapperHeight=0;color;get fitInkBarToContent(){return this._fitInkBarToContent}set fitInkBarToContent(e){this._fitInkBarToContent=e,this._changeDetectorRef.markForCheck()}_fitInkBarToContent=!1;stretchTabs=!0;alignTabs=null;dynamicHeight=!1;get selectedIndex(){return this._selectedIndex}set selectedIndex(e){this._indexToSelect=isNaN(e)?null:e}_selectedIndex=null;headerPosition=`above`;get animationDuration(){return this._animationDuration}set animationDuration(e){this._animationDuration=e,e&&typeof e==`object`?(this._bodyAnimationDuration=Zi(e.body),this._headerAnimationDuration=Zi(e.header)):this._headerAnimationDuration=this._bodyAnimationDuration=Zi(e)}_animationDuration;get contentTabIndex(){return this._contentTabIndex}set contentTabIndex(e){this._contentTabIndex=isNaN(e)?null:e}_contentTabIndex=null;disablePagination=!1;disableRipple=!1;preserveContent=!1;get backgroundColor(){return this._backgroundColor}set backgroundColor(e){let t=this._elementRef.nativeElement.classList;t.remove(`mat-tabs-with-background`,`mat-background-${this.backgroundColor}`),e&&t.add(`mat-tabs-with-background`,`mat-background-${e}`),this._backgroundColor=e}_backgroundColor;ariaLabel;ariaLabelledby;selectedIndexChange=new Ke$2;focusChange=new Ke$2;animationDone=new Ke$2;selectedTabChange=new Ke$2(!0);_groupId;_isServer=!g$2(J$3).isBrowser;constructor(){let e=g$2(Ks,{optional:!0});this._groupId=g$2(Pe$2).getId(`mat-tab-group-`),this.animationDuration=e&&e.animationDuration?e.animationDuration:`500ms`,this.disablePagination=e&&e.disablePagination!=null?e.disablePagination:!1,this.dynamicHeight=e&&e.dynamicHeight!=null?e.dynamicHeight:!1,e?.contentTabIndex!=null&&(this.contentTabIndex=e.contentTabIndex),this.preserveContent=!!e?.preserveContent,this.fitInkBarToContent=e&&e.fitInkBarToContent!=null?e.fitInkBarToContent:!1,this.stretchTabs=e&&e.stretchTabs!=null?e.stretchTabs:!0,this.alignTabs=e&&e.alignTabs!=null?e.alignTabs:null}ngAfterContentChecked(){let e=this._indexToSelect=this._clampTabIndex(this._indexToSelect);if(this._selectedIndex!=e){let t=this._selectedIndex==null;if(!t){this.selectedTabChange.emit(this._createChangeEvent(e));let i=this._tabBodyWrapper.nativeElement;i.style.minHeight=i.clientHeight+`px`}Promise.resolve().then(()=>{this._tabs.forEach((i,o)=>i.isActive=o===e),t||(this.selectedIndexChange.emit(e),this._tabBodyWrapper.nativeElement.style.minHeight=``)})}this._tabs.forEach((t,i)=>{t.position=i-e,this._selectedIndex!=null&&t.position==0&&!t.origin&&(t.origin=e-this._selectedIndex)}),this._selectedIndex!==e&&(this._selectedIndex=e,this._lastFocusedTabIndex=null,this._changeDetectorRef.markForCheck())}ngAfterContentInit(){this._subscribeToAllTabChanges(),this._subscribeToTabLabels(),this._tabsSubscription=this._tabs.changes.subscribe(()=>{let e=this._clampTabIndex(this._indexToSelect);if(e===this._selectedIndex){let t=this._tabs.toArray(),i;for(let o=0;o<t.length;o++)if(t[o].isActive){this._indexToSelect=this._selectedIndex=o,this._lastFocusedTabIndex=null,i=t[o];break}!i&&t[e]&&Promise.resolve().then(()=>{t[e].isActive=!0,this.selectedTabChange.emit(this._createChangeEvent(e))})}this._changeDetectorRef.markForCheck()})}ngAfterViewInit(){this._tabBodySubscription=this._tabBodies.changes.subscribe(()=>this._bodyCentered(!0))}_subscribeToAllTabChanges(){this._allTabs.changes.pipe(Ky(this._allTabs)).subscribe(e=>{this._tabs.reset(e.filter(t=>t._closestTabGroup===this||!t._closestTabGroup)),this._tabs.notifyOnChanges()})}ngOnDestroy(){this._tabs.destroy(),this._tabsSubscription.unsubscribe(),this._tabLabelSubscription.unsubscribe(),this._tabBodySubscription.unsubscribe()}realignInkBar(){this._tabHeader&&this._tabHeader._alignInkBarToSelectedTab()}updatePagination(){this._tabHeader&&this._tabHeader.updatePagination()}focusTab(e){let t=this._tabHeader;t&&(t.focusIndex=e)}_focusChanged(e){this._lastFocusedTabIndex=e,this.focusChange.emit(this._createChangeEvent(e))}_createChangeEvent(e){let t=new Ja;return t.index=e,this._tabs&&this._tabs.length&&(t.tab=this._tabs.toArray()[e]),t}_subscribeToTabLabels(){this._tabLabelSubscription&&this._tabLabelSubscription.unsubscribe(),this._tabLabelSubscription=Vy(...this._tabs.map(e=>e._stateChanges)).subscribe(()=>this._changeDetectorRef.markForCheck())}_clampTabIndex(e){return Math.min(this._tabs.length-1,Math.max(e||0,0))}_getTabLabelId(e,t){return e.id||`${this._groupId}-label-${t}`}_getTabContentId(e){return`${this._groupId}-content-${e}`}_setTabBodyWrapperHeight(e){if(!this.dynamicHeight||!this._tabBodyWrapperHeight){this._tabBodyWrapperHeight=e;return}let t=this._tabBodyWrapper.nativeElement;t.style.height=this._tabBodyWrapperHeight+`px`,this._tabBodyWrapper.nativeElement.offsetHeight&&(t.style.height=e+`px`)}_removeTabBodyWrapperHeight(){let e=this._tabBodyWrapper.nativeElement;this._tabBodyWrapperHeight=e.clientHeight,e.style.height=``,this._ngZone.run(()=>this.animationDone.emit())}_handleClick(e,t,i){t.focusIndex=i,e.disabled||(this.selectedIndex=i)}_getTabIndex(e){return e===(this._lastFocusedTabIndex??this.selectedIndex)?0:-1}_tabFocusChanged(e,t){e&&e!==`mouse`&&e!==`touch`&&(this._tabHeader.focusIndex=t)}_bodyCentered(e){e&&this._tabBodies?.forEach((t,i)=>t._setActiveClass(i===this._selectedIndex))}_bodyAnimationsDisabled(){return this._diAnimationsDisabled||this._bodyAnimationDuration===`0`||this._bodyAnimationDuration===`0ms`}static ɵfac=function(t){return new(t||n)};static ɵcmp=NC({type:n,selectors:[[`mat-tab-group`]],contentQueries:function(t,i,o){if(t&1&&Wg(o,eo,5),t&2){let r;Ww(r=qw())&&(i._allTabs=r)}},viewQuery:function(t,i){if(t&1&&qg(wm,5)(km,5)(Ya,5),t&2){let o;Ww(o=qw())&&(i._tabBodyWrapper=o.first),Ww(o=qw())&&(i._tabHeader=o.first),Ww(o=qw())&&(i._tabBodies=o)}},hostAttrs:[1,`mat-mdc-tab-group`],hostVars:13,hostBindings:function(t,i){t&2&&(Rg(`mat-align-tabs`,i.alignTabs),sb$1(`mat-`+(i.color||`primary`)),Ms$1(`--%NS%mat-tab-body-animation-duration`,i._bodyAnimationDuration)(`--%NS%mat-tab-header-animation-duration`,i._headerAnimationDuration),Jg(`mat-mdc-tab-group-dynamic-height`,i.dynamicHeight)(`mat-mdc-tab-group-inverted-header`,i.headerPosition===`below`)(`mat-mdc-tab-group-stretch-tabs`,i.stretchTabs))},inputs:{color:`color`,fitInkBarToContent:[2,`fitInkBarToContent`,`fitInkBarToContent`,mo$2],stretchTabs:[2,`mat-stretch-tabs`,`stretchTabs`,mo$2],alignTabs:[0,`mat-align-tabs`,`alignTabs`],dynamicHeight:[2,`dynamicHeight`,`dynamicHeight`,mo$2],selectedIndex:[2,`selectedIndex`,`selectedIndex`,yl$1],headerPosition:`headerPosition`,animationDuration:`animationDuration`,contentTabIndex:[2,`contentTabIndex`,`contentTabIndex`,yl$1],disablePagination:[2,`disablePagination`,`disablePagination`,mo$2],disableRipple:[2,`disableRipple`,`disableRipple`,mo$2],preserveContent:[2,`preserveContent`,`preserveContent`,mo$2],backgroundColor:`backgroundColor`,ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`]},outputs:{selectedIndexChange:`selectedIndexChange`,focusChange:`focusChange`,animationDone:`animationDone`,selectedTabChange:`selectedTabChange`},exportAs:[`matTabGroup`],features:[Mb$1([{provide:Us,useExisting:n}])],ngContentSelectors:vn,decls:9,vars:8,consts:[[`tabHeader`,``],[`tabBodyWrapper`,``],[`tabNode`,``],[3,`indexFocused`,`selectFocusedIndex`,`selectedIndex`,`disableRipple`,`disablePagination`,`aria-label`,`aria-labelledby`],[`role`,`tab`,`matTabLabelWrapper`,``,`cdkMonitorElementFocus`,``,1,`mdc-tab`,`mat-mdc-tab`,`mat-focus-indicator`,3,`id`,`mdc-tab--active`,`class`,`disabled`,`fitInkBarToContent`],[1,`mat-mdc-tab-body-wrapper`],[`role`,`tabpanel`,3,`id`,`class`,`content`,`position`,`animationDuration`,`preserveContent`],[`role`,`tab`,`matTabLabelWrapper`,``,`cdkMonitorElementFocus`,``,1,`mdc-tab`,`mat-mdc-tab`,`mat-focus-indicator`,3,`click`,`cdkFocusChange`,`id`,`disabled`,`fitInkBarToContent`],[1,`mdc-tab__ripple`],[`mat-ripple`,``,1,`mat-mdc-tab-ripple`,3,`matRippleTrigger`,`matRippleDisabled`],[1,`mdc-tab__content`],[1,`mdc-tab__text-label`],[3,`cdkPortalOutlet`],[`role`,`tabpanel`,3,`_onCentered`,`_onCentering`,`_beforeCentering`,`id`,`content`,`position`,`animationDuration`,`preserveContent`]],template:function(t,i){t&1&&(Uw(),cs$1(0,`mat-tab-header`,3,0),Ug(`indexFocused`,function(r){return i._focusChanged(r)})(`selectFocusedIndex`,function(r){return i.selectedIndex=r}),Ow(2,Mm,8,17,`div`,4,Rw),Ju$1(),Nw(4,Nm,1,0),cs$1(5,`div`,5,1),Ow(7,Im,1,10,`mat-tab-body`,6,Rw),Ju$1()),t&2&&(Og(`selectedIndex`,i.selectedIndex||0)(`disableRipple`,i.disableRipple)(`disablePagination`,i.disablePagination),Ag(`aria-label`,i.ariaLabel)(`aria-labelledby`,i.ariaLabelledby),lI(2),kw(i._tabs),lI(2),xw(i._isServer?4:-1),lI(),Jg(`_mat-animation-noopable`,i._bodyAnimationsDisabled()),lI(2),kw(i._tabs))},dependencies:[Lm,Zs,nn$3,Tn$1,Si$1,Ya],styles:[`.mdc-tab {
  min-width: 90px;
  padding: 0 24px;
  display: flex;
  flex: 1 0 auto;
  justify-content: center;
  box-sizing: border-box;
  border: none;
  outline: none;
  text-align: center;
  white-space: nowrap;
  cursor: pointer;
  z-index: 1;
  touch-action: manipulation;
}

.mdc-tab__content {
  display: flex;
  align-items: center;
  justify-content: center;
  height: inherit;
  pointer-events: none;
}

.mdc-tab__text-label {
  transition: 150ms color linear;
  display: inline-block;
  line-height: 1;
  z-index: 2;
}

.mdc-tab--active .mdc-tab__text-label {
  transition-delay: 100ms;
}

._mat-animation-noopable .mdc-tab__text-label {
  transition: none;
}

.mdc-tab-indicator {
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  justify-content: center;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
}

.mdc-tab-indicator__content {
  transition: var(--%NS%mat-tab-header-animation-duration, 250ms) transform cubic-bezier(0.4, 0, 0.2, 1);
  transform-origin: left;
  opacity: 0;
}

.mdc-tab-indicator__content--underline {
  align-self: flex-end;
  box-sizing: border-box;
  width: 100%;
  border-top-style: solid;
}

.mdc-tab-indicator--active .mdc-tab-indicator__content {
  opacity: 1;
}

._mat-animation-noopable .mdc-tab-indicator__content, .mdc-tab-indicator--no-transition .mdc-tab-indicator__content {
  transition: none;
}

.mat-mdc-tab-ripple.mat-mdc-tab-ripple {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  pointer-events: none;
}

.mat-mdc-tab {
  -webkit-tap-highlight-color: transparent;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-decoration: none;
  background: none;
  height: var(--%NS%mat-tab-container-height, 48px);
  font-family: var(--%NS%mat-tab-label-text-font, var(--%NS%mat-sys-title-small-font));
  font-size: var(--%NS%mat-tab-label-text-size, var(--%NS%mat-sys-title-small-size));
  letter-spacing: var(--%NS%mat-tab-label-text-tracking, var(--%NS%mat-sys-title-small-tracking));
  line-height: var(--%NS%mat-tab-label-text-line-height, var(--%NS%mat-sys-title-small-line-height));
  font-weight: var(--%NS%mat-tab-label-text-weight, var(--%NS%mat-sys-title-small-weight));
}
.mat-mdc-tab.mdc-tab {
  flex-grow: 0;
}
.mat-mdc-tab .mdc-tab-indicator__content--underline {
  border-color: var(--%NS%mat-tab-active-indicator-color, var(--%NS%mat-sys-primary));
  border-top-width: var(--%NS%mat-tab-active-indicator-height, 2px);
  border-radius: var(--%NS%mat-tab-active-indicator-shape, 0);
}
.mat-mdc-tab:hover .mdc-tab__text-label {
  color: var(--%NS%mat-tab-inactive-hover-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab:focus .mdc-tab__text-label {
  color: var(--%NS%mat-tab-inactive-focus-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab.mdc-tab--active .mdc-tab__text-label {
  color: var(--%NS%mat-tab-active-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab.mdc-tab--active .mdc-tab__ripple::before,
.mat-mdc-tab.mdc-tab--active .mat-ripple-element {
  background-color: var(--%NS%mat-tab-active-ripple-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab.mdc-tab--%NS%active:hover .mdc-tab__text-label {
  color: var(--%NS%mat-tab-active-hover-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab.mdc-tab--%NS%active:hover .mdc-tab-indicator__content--underline {
  border-color: var(--%NS%mat-tab-active-hover-indicator-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-tab.mdc-tab--%NS%active:focus .mdc-tab__text-label {
  color: var(--%NS%mat-tab-active-focus-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab.mdc-tab--%NS%active:focus .mdc-tab-indicator__content--underline {
  border-color: var(--%NS%mat-tab-active-focus-indicator-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-tab.mat-mdc-tab-disabled {
  opacity: 0.4;
  pointer-events: none;
}
.mat-mdc-tab.mat-mdc-tab-disabled .mdc-tab__content {
  pointer-events: none;
}
.mat-mdc-tab.mat-mdc-tab-disabled .mdc-tab__ripple::before,
.mat-mdc-tab.mat-mdc-tab-disabled .mat-ripple-element {
  background-color: var(--%NS%mat-tab-disabled-ripple-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-tab .mdc-tab__ripple::before {
  content: "";
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0;
  pointer-events: none;
  background-color: var(--%NS%mat-tab-inactive-ripple-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab .mdc-tab__text-label {
  color: var(--%NS%mat-tab-inactive-label-text-color, var(--%NS%mat-sys-on-surface));
  display: inline-flex;
  align-items: center;
}
.mat-mdc-tab .mdc-tab__content {
  position: relative;
  pointer-events: auto;
}
.mat-mdc-tab:hover .mdc-tab__ripple::before {
  opacity: 0.04;
}
.mat-mdc-tab.cdk-program-focused .mdc-tab__ripple::before, .mat-mdc-tab.cdk-keyboard-focused .mdc-tab__ripple::before {
  opacity: 0.12;
}
.mat-mdc-tab .mat-ripple-element {
  opacity: 0.12;
  background-color: var(--%NS%mat-tab-inactive-ripple-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab-group.mat-mdc-tab-group-stretch-tabs > .mat-mdc-tab-header .mat-mdc-tab {
  flex-grow: 1;
}

.mat-mdc-tab-group {
  display: flex;
  flex-direction: column;
  max-width: 100%;
}
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination {
  background-color: var(--%NS%mat-tab-background-color);
}
.mat-mdc-tab-group.mat-tabs-with-background.mat-primary > .mat-mdc-tab-header .mat-mdc-tab .mdc-tab__text-label {
  color: var(--%NS%mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background.mat-primary > .mat-mdc-tab-header .mdc-tab-indicator__content--underline {
  border-color: var(--%NS%mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background:not(.mat-primary) > .mat-mdc-tab-header .mat-mdc-tab:not(.mdc-tab--active) .mdc-tab__text-label {
  color: var(--%NS%mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background:not(.mat-primary) > .mat-mdc-tab-header .mat-mdc-tab:not(.mdc-tab--active) .mdc-tab-indicator__content--underline {
  border-color: var(--%NS%mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mat-mdc-tab-header-pagination-chevron,
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mat-focus-indicator::before, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-mdc-tab-header-pagination-chevron,
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-focus-indicator::before {
  border-color: var(--%NS%mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mat-ripple-element, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mdc-tab__ripple::before, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-ripple-element, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mdc-tab__ripple::before {
  background-color: var(--%NS%mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mat-mdc-tab-header-pagination-chevron, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-mdc-tab-header-pagination-chevron {
  color: var(--%NS%mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-mdc-tab-group-inverted-header {
  flex-direction: column-reverse;
}
.mat-mdc-tab-group.mat-mdc-tab-group-inverted-header .mdc-tab-indicator__content--underline {
  align-self: flex-start;
}

.mat-mdc-tab-body-wrapper {
  position: relative;
  overflow: hidden;
  display: flex;
  transition: height 500ms cubic-bezier(0.35, 0, 0.25, 1);
}
.mat-mdc-tab-body-wrapper._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
`],encapsulation:2,changeDetection:1})}return n})();var Ja=class{index;tab};var Xn=(()=>{class n extends Xs{_focusedItem=xe$3(null);get fitInkBarToContent(){return this._fitInkBarToContent.value}set fitInkBarToContent(e){this._fitInkBarToContent.next(e),this._changeDetectorRef.markForCheck()}_fitInkBarToContent=new gr(!1);stretchTabs=!0;animationDuration=``;_items;get backgroundColor(){return this._backgroundColor}set backgroundColor(e){let t=this._elementRef.nativeElement.classList;t.remove(`mat-tabs-with-background`,`mat-background-${this.backgroundColor}`),e&&t.add(`mat-tabs-with-background`,`mat-background-${e}`),this._backgroundColor=e}_backgroundColor;get disableRipple(){return this._disableRipple()}set disableRipple(e){this._disableRipple.set(e)}_disableRipple=xe$3(!1);color=`primary`;tabPanel;_tabListContainer;_tabList;_tabListInner;_nextPaginator;_previousPaginator;_inkBar;constructor(){let e=g$2(Ks,{optional:!0});super(),this.disablePagination=e&&e.disablePagination!=null?e.disablePagination:!1,this.fitInkBarToContent=e&&e.fitInkBarToContent!=null?e.fitInkBarToContent:!1,this.stretchTabs=e&&e.stretchTabs!=null?e.stretchTabs:!0}_itemSelected(){}ngAfterContentInit(){this._inkBar=new Xi(this._items),this._items.changes.pipe(Ky(null),ia$1(this._destroyed)).subscribe(()=>this.updateActiveLink()),super.ngAfterContentInit(),this._keyManager.change.pipe(Ky(null),ia$1(this._destroyed)).subscribe(()=>this._focusedItem.set(this._keyManager?.activeItem||null))}ngAfterViewInit(){this.tabPanel,super.ngAfterViewInit()}updateActiveLink(){if(!this._items)return;let e=this._items.toArray();for(let t=0;t<e.length;t++)if(e[t].active){this.selectedIndex=t,this.tabPanel&&(this.tabPanel._activeTabId=e[t].id),this._focusedItem.set(e[t]),this._changeDetectorRef.markForCheck();return}this.selectedIndex=-1}_getRole(){return this.tabPanel?`tablist`:this._elementRef.nativeElement.getAttribute(`role`)}_hasFocus(e){return this._keyManager?.activeItem===e}static ɵfac=function(t){return new(t||n)};static ɵcmp=NC({type:n,selectors:[[``,`mat-tab-nav-bar`,``]],contentQueries:function(t,i,o){if(t&1&&Wg(o,Kn,5),t&2){let r;Ww(r=qw())&&(i._items=r)}},viewQuery:function(t,i){if(t&1&&qg(Hs,7)(js,7)(Gs,7)(Ws,5)(qs,5),t&2){let o;Ww(o=qw())&&(i._tabListContainer=o.first),Ww(o=qw())&&(i._tabList=o.first),Ww(o=qw())&&(i._tabListInner=o.first),Ww(o=qw())&&(i._nextPaginator=o.first),Ww(o=qw())&&(i._previousPaginator=o.first)}},hostAttrs:[1,`mat-mdc-tab-nav-bar`,`mat-mdc-tab-header`],hostVars:17,hostBindings:function(t,i){t&2&&(Rg(`role`,i._getRole()),Ms$1(`--%NS%mat-tab-header-animation-duration`,i.animationDuration),Jg(`mat-mdc-tab-header-pagination-controls-enabled`,i._showPaginationControls)(`mat-mdc-tab-header-rtl`,i._getLayoutDirection()==`rtl`)(`mat-mdc-tab-nav-bar-stretch-tabs`,i.stretchTabs)(`mat-primary`,i.color!==`warn`&&i.color!==`accent`)(`mat-accent`,i.color===`accent`)(`mat-warn`,i.color===`warn`)(`_mat-animation-noopable`,i._animationsDisabled))},inputs:{fitInkBarToContent:[2,`fitInkBarToContent`,`fitInkBarToContent`,mo$2],stretchTabs:[2,`mat-stretch-tabs`,`stretchTabs`,mo$2],animationDuration:[2,`animationDuration`,`animationDuration`,Zi],backgroundColor:`backgroundColor`,disableRipple:[2,`disableRipple`,`disableRipple`,mo$2],color:`color`,tabPanel:`tabPanel`},exportAs:[`matTabNavBar`,`matTabNav`],features:[Dg],ngContentSelectors:vn,decls:13,vars:6,consts:[[`previousPaginator`,``],[`tabListContainer`,``],[`tabList`,``],[`tabListInner`,``],[`nextPaginator`,``],[`mat-ripple`,``,1,`mat-mdc-tab-header-pagination`,`mat-mdc-tab-header-pagination-before`,3,`click`,`mousedown`,`touchend`,`matRippleDisabled`],[1,`mat-mdc-tab-header-pagination-chevron`],[1,`mat-mdc-tab-link-container`,3,`keydown`],[1,`mat-mdc-tab-list`,3,`cdkObserveContent`],[1,`mat-mdc-tab-links`],[`mat-ripple`,``,1,`mat-mdc-tab-header-pagination`,`mat-mdc-tab-header-pagination-after`,3,`mousedown`,`click`,`touchend`,`matRippleDisabled`]],template:function(t,i){t&1&&(Uw(),cs$1(0,`div`,5,0),Ug(`click`,function(){return i._handlePaginatorClick(`before`)})(`mousedown`,function(r){return i._handlePaginatorPress(`before`,r)})(`touchend`,function(){return i._stopInterval()}),kg(2,`div`,6),Ju$1(),cs$1(3,`div`,7,1),Ug(`keydown`,function(r){return i._handleKeydown(r)}),cs$1(5,`div`,8,2),Ug(`cdkObserveContent`,function(){return i._onContentChanges()}),cs$1(7,`div`,9,3),Gw(9),Ju$1()()(),cs$1(10,`div`,10,4),Ug(`mousedown`,function(r){return i._handlePaginatorPress(`after`,r)})(`click`,function(){return i._handlePaginatorClick(`after`)})(`touchend`,function(){return i._stopInterval()}),kg(12,`div`,6),Ju$1()),t&2&&(Jg(`mat-mdc-tab-header-pagination-disabled`,i._disableScrollBefore),Og(`matRippleDisabled`,i._disableScrollBefore||i.disableRipple),lI(10),Jg(`mat-mdc-tab-header-pagination-disabled`,i._disableScrollAfter),Og(`matRippleDisabled`,i._disableScrollAfter||i.disableRipple))},dependencies:[Tn$1,ji$2],styles:[`.mdc-tab {
  min-width: 90px;
  padding: 0 24px;
  display: flex;
  flex: 1 0 auto;
  justify-content: center;
  box-sizing: border-box;
  border: none;
  outline: none;
  text-align: center;
  white-space: nowrap;
  cursor: pointer;
  z-index: 1;
  touch-action: manipulation;
}

.mdc-tab__content {
  display: flex;
  align-items: center;
  justify-content: center;
  height: inherit;
  pointer-events: none;
}

.mdc-tab__text-label {
  transition: 150ms color linear;
  display: inline-block;
  line-height: 1;
  z-index: 2;
}

.mdc-tab--active .mdc-tab__text-label {
  transition-delay: 100ms;
}

._mat-animation-noopable .mdc-tab__text-label {
  transition: none;
}

.mdc-tab-indicator {
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  justify-content: center;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
}

.mdc-tab-indicator__content {
  transition: var(--%NS%mat-tab-header-animation-duration, 250ms) transform cubic-bezier(0.4, 0, 0.2, 1);
  transform-origin: left;
  opacity: 0;
}

.mdc-tab-indicator__content--underline {
  align-self: flex-end;
  box-sizing: border-box;
  width: 100%;
  border-top-style: solid;
}

.mdc-tab-indicator--active .mdc-tab-indicator__content {
  opacity: 1;
}

._mat-animation-noopable .mdc-tab-indicator__content, .mdc-tab-indicator--no-transition .mdc-tab-indicator__content {
  transition: none;
}

.mat-mdc-tab-ripple.mat-mdc-tab-ripple {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  pointer-events: none;
}

.mat-mdc-tab-header {
  display: flex;
  overflow: hidden;
  position: relative;
  flex-shrink: 0;
}

.mdc-tab-indicator .mdc-tab-indicator__content {
  transition-duration: var(--%NS%mat-tab-header-animation-duration, 250ms);
}

.mat-mdc-tab-header-pagination {
  -webkit-user-select: none;
  user-select: none;
  position: relative;
  display: none;
  justify-content: center;
  align-items: center;
  min-width: 32px;
  cursor: pointer;
  z-index: 2;
  -webkit-tap-highlight-color: transparent;
  touch-action: none;
  box-sizing: content-box;
  outline: 0;
}
.mat-mdc-tab-header-pagination::-moz-focus-inner {
  border: 0;
}
.mat-mdc-tab-header-pagination .mat-ripple-element {
  opacity: 0.12;
  background-color: var(--%NS%mat-tab-inactive-ripple-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab-header-pagination-controls-enabled .mat-mdc-tab-header-pagination {
  display: flex;
}

.mat-mdc-tab-header-pagination-before,
.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-after {
  padding-left: 4px;
}
.mat-mdc-tab-header-pagination-before .mat-mdc-tab-header-pagination-chevron,
.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-after .mat-mdc-tab-header-pagination-chevron {
  transform: rotate(-135deg);
}

.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-before,
.mat-mdc-tab-header-pagination-after {
  padding-right: 4px;
}
.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-before .mat-mdc-tab-header-pagination-chevron,
.mat-mdc-tab-header-pagination-after .mat-mdc-tab-header-pagination-chevron {
  transform: rotate(45deg);
}

.mat-mdc-tab-header-pagination-chevron {
  border-style: solid;
  border-width: 2px 2px 0 0;
  height: 8px;
  width: 8px;
  border-color: var(--%NS%mat-tab-pagination-icon-color, var(--%NS%mat-sys-on-surface));
}

.mat-mdc-tab-header-pagination-disabled {
  box-shadow: none;
  cursor: default;
  pointer-events: none;
}
.mat-mdc-tab-header-pagination-disabled .mat-mdc-tab-header-pagination-chevron {
  opacity: 0.4;
}

.mat-mdc-tab-list {
  flex-grow: 1;
  position: relative;
  transition: transform 500ms cubic-bezier(0.35, 0, 0.25, 1);
}
._mat-animation-noopable .mat-mdc-tab-list {
  transition: none;
}

.mat-mdc-tab-links {
  display: flex;
  flex: 1 0 auto;
}
[mat-align-tabs=center] > .mat-mdc-tab-link-container .mat-mdc-tab-links {
  justify-content: center;
}
[mat-align-tabs=end] > .mat-mdc-tab-link-container .mat-mdc-tab-links {
  justify-content: flex-end;
}
.cdk-drop-list .mat-mdc-tab-links, .mat-mdc-tab-links.cdk-drop-list {
  min-height: var(--%NS%mat-tab-container-height, 48px);
}

.mat-mdc-tab-link-container {
  display: flex;
  flex-grow: 1;
  overflow: hidden;
  z-index: 1;
  border-bottom-style: solid;
  border-bottom-width: var(--%NS%mat-tab-divider-height, 1px);
  border-bottom-color: var(--%NS%mat-tab-divider-color, var(--%NS%mat-sys-surface-variant));
}

.mat-mdc-tab-nav-bar.mat-tabs-with-background > .mat-mdc-tab-link-container, .mat-mdc-tab-nav-bar.mat-tabs-with-background > .mat-mdc-tab-header-pagination {
  background-color: var(--%NS%mat-tab-background-color);
}
.mat-mdc-tab-nav-bar.mat-tabs-with-background.mat-primary > .mat-mdc-tab-link-container .mat-mdc-tab-link .mdc-tab__text-label {
  color: var(--%NS%mat-tab-foreground-color);
}
.mat-mdc-tab-nav-bar.mat-tabs-with-background.mat-primary > .mat-mdc-tab-link-container .mdc-tab-indicator__content--underline {
  border-color: var(--%NS%mat-tab-foreground-color);
}
.mat-mdc-tab-nav-bar.mat-tabs-with-background:not(.mat-primary) > .mat-mdc-tab-link-container .mat-mdc-tab-link:not(.mdc-tab--active) .mdc-tab__text-label {
  color: var(--%NS%mat-tab-foreground-color);
}
.mat-mdc-tab-nav-bar.mat-tabs-with-background:not(.mat-primary) > .mat-mdc-tab-link-container .mat-mdc-tab-link:not(.mdc-tab--active) .mdc-tab-indicator__content--underline {
  border-color: var(--%NS%mat-tab-foreground-color);
}
.mat-mdc-tab-nav-bar.mat-tabs-with-background > .mat-mdc-tab-link-container .mat-mdc-tab-header-pagination-chevron,
.mat-mdc-tab-nav-bar.mat-tabs-with-background > .mat-mdc-tab-link-container .mat-focus-indicator::before, .mat-mdc-tab-nav-bar.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-mdc-tab-header-pagination-chevron,
.mat-mdc-tab-nav-bar.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-focus-indicator::before {
  border-color: var(--%NS%mat-tab-foreground-color);
}
.mat-mdc-tab-nav-bar.mat-tabs-with-background > .mat-mdc-tab-link-container .mat-ripple-element, .mat-mdc-tab-nav-bar.mat-tabs-with-background > .mat-mdc-tab-link-container .mdc-tab__ripple::before, .mat-mdc-tab-nav-bar.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-ripple-element, .mat-mdc-tab-nav-bar.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mdc-tab__ripple::before {
  background-color: var(--%NS%mat-tab-foreground-color);
}
.mat-mdc-tab-nav-bar.mat-tabs-with-background > .mat-mdc-tab-link-container .mat-mdc-tab-header-pagination-chevron, .mat-mdc-tab-nav-bar.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-mdc-tab-header-pagination-chevron {
  color: var(--%NS%mat-tab-foreground-color);
}
`],encapsulation:2,changeDetection:1})}return n})();var Kn=(()=>{class n extends Qs{_tabNavBar=g$2(Xn);elementRef=g$2(it$2);_focusMonitor=g$2(Ot$1);_destroyed=new ee$3;_isActive=!1;_tabIndex=qe$3(()=>this._tabNavBar._focusedItem()===this?this.tabIndex:-1);get active(){return this._isActive}set active(e){e!==this._isActive&&(this._isActive=e,this._tabNavBar.updateActiveLink())}disabled=!1;get disableRipple(){return this._disableRipple()}set disableRipple(e){this._disableRipple.set(e)}_disableRipple=xe$3(!1);tabIndex=0;rippleConfig;get rippleDisabled(){return this.disabled||this.disableRipple||this._tabNavBar.disableRipple||!!this.rippleConfig.disabled}id=g$2(Pe$2).getId(`mat-tab-link-`);constructor(){super(),g$2($$2).load(Vt);let e=g$2(mt,{optional:!0}),t=g$2(new Tm$1(`tabindex`),{optional:!0});this.rippleConfig=e||{},this.tabIndex=t==null?0:parseInt(t)||0,ai$3()&&(this.rippleConfig.animation={enterDuration:0,exitDuration:0}),this._tabNavBar._fitInkBarToContent.pipe(ia$1(this._destroyed)).subscribe(i=>{this.fitInkBarToContent=i})}focus(){this.elementRef.nativeElement.focus()}ngAfterViewInit(){this._focusMonitor.monitor(this.elementRef)}ngOnDestroy(){this._destroyed.next(),this._destroyed.complete(),super.ngOnDestroy(),this._focusMonitor.stopMonitoring(this.elementRef)}_handleFocus(){this._tabNavBar.focusIndex=this._tabNavBar._items.toArray().indexOf(this)}_handleKeydown(e){(e.keyCode===32||e.keyCode===13)&&(this.disabled?e.preventDefault():this._tabNavBar.tabPanel&&(e.keyCode===32&&e.preventDefault(),this.elementRef.nativeElement.click()))}_getAriaControls(){return this._tabNavBar.tabPanel?this._tabNavBar.tabPanel?.id:this.elementRef.nativeElement.getAttribute(`aria-controls`)}_getAriaSelected(){return this._tabNavBar.tabPanel?this.active?`true`:`false`:this.elementRef.nativeElement.getAttribute(`aria-selected`)}_getAriaCurrent(){return this.active&&!this._tabNavBar.tabPanel?`page`:null}_getRole(){return this._tabNavBar.tabPanel?`tab`:this.elementRef.nativeElement.getAttribute(`role`)}static ɵfac=function(t){return new(t||n)};static ɵcmp=NC({type:n,selectors:[[``,`mat-tab-link`,``],[``,`matTabLink`,``]],hostAttrs:[1,`mdc-tab`,`mat-mdc-tab-link`,`mat-focus-indicator`],hostVars:11,hostBindings:function(t,i){t&1&&Ug(`focus`,function(){return i._handleFocus()})(`keydown`,function(r){return i._handleKeydown(r)}),t&2&&(Rg(`aria-controls`,i._getAriaControls())(`aria-current`,i._getAriaCurrent())(`aria-disabled`,i.disabled)(`aria-selected`,i._getAriaSelected())(`id`,i.id)(`tabIndex`,i._tabIndex())(`role`,i._getRole()),Jg(`mat-mdc-tab-disabled`,i.disabled)(`mdc-tab--active`,i.active))},inputs:{active:[2,`active`,`active`,mo$2],disabled:[2,`disabled`,`disabled`,mo$2],disableRipple:[2,`disableRipple`,`disableRipple`,mo$2],tabIndex:[2,`tabIndex`,`tabIndex`,e=>e==null?0:yl$1(e)],id:`id`},exportAs:[`matTabLink`],features:[Dg],ngContentSelectors:vn,decls:5,vars:2,consts:[[1,`mdc-tab__ripple`],[`mat-ripple`,``,1,`mat-mdc-tab-ripple`,3,`matRippleTrigger`,`matRippleDisabled`],[1,`mdc-tab__content`],[1,`mdc-tab__text-label`]],template:function(t,i){t&1&&(Uw(),kg(0,`span`,0)(1,`div`,1),cs$1(2,`span`,2)(3,`span`,3),Gw(4),Ju$1()()),t&2&&(lI(),Og(`matRippleTrigger`,i.elementRef.nativeElement)(`matRippleDisabled`,i.rippleDisabled))},dependencies:[Tn$1],styles:[`.mat-mdc-tab-link {
  -webkit-tap-highlight-color: transparent;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-decoration: none;
  background: none;
  height: var(--%NS%mat-tab-container-height, 48px);
  font-family: var(--%NS%mat-tab-label-text-font, var(--%NS%mat-sys-title-small-font));
  font-size: var(--%NS%mat-tab-label-text-size, var(--%NS%mat-sys-title-small-size));
  letter-spacing: var(--%NS%mat-tab-label-text-tracking, var(--%NS%mat-sys-title-small-tracking));
  line-height: var(--%NS%mat-tab-label-text-line-height, var(--%NS%mat-sys-title-small-line-height));
  font-weight: var(--%NS%mat-tab-label-text-weight, var(--%NS%mat-sys-title-small-weight));
}
.mat-mdc-tab-link.mdc-tab {
  flex-grow: 0;
}
.mat-mdc-tab-link .mdc-tab-indicator__content--underline {
  border-color: var(--%NS%mat-tab-active-indicator-color, var(--%NS%mat-sys-primary));
  border-top-width: var(--%NS%mat-tab-active-indicator-height, 2px);
  border-radius: var(--%NS%mat-tab-active-indicator-shape, 0);
}
.mat-mdc-tab-link:hover .mdc-tab__text-label {
  color: var(--%NS%mat-tab-inactive-hover-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab-link:focus .mdc-tab__text-label {
  color: var(--%NS%mat-tab-inactive-focus-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab-link.mdc-tab--active .mdc-tab__text-label {
  color: var(--%NS%mat-tab-active-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab-link.mdc-tab--active .mdc-tab__ripple::before,
.mat-mdc-tab-link.mdc-tab--active .mat-ripple-element {
  background-color: var(--%NS%mat-tab-active-ripple-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab-link.mdc-tab--%NS%active:hover .mdc-tab__text-label {
  color: var(--%NS%mat-tab-active-hover-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab-link.mdc-tab--%NS%active:hover .mdc-tab-indicator__content--underline {
  border-color: var(--%NS%mat-tab-active-hover-indicator-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-tab-link.mdc-tab--%NS%active:focus .mdc-tab__text-label {
  color: var(--%NS%mat-tab-active-focus-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab-link.mdc-tab--%NS%active:focus .mdc-tab-indicator__content--underline {
  border-color: var(--%NS%mat-tab-active-focus-indicator-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-tab-link.mat-mdc-tab-disabled {
  opacity: 0.4;
  pointer-events: none;
}
.mat-mdc-tab-link.mat-mdc-tab-disabled .mdc-tab__content {
  pointer-events: none;
}
.mat-mdc-tab-link.mat-mdc-tab-disabled .mdc-tab__ripple::before,
.mat-mdc-tab-link.mat-mdc-tab-disabled .mat-ripple-element {
  background-color: var(--%NS%mat-tab-disabled-ripple-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-tab-link .mdc-tab__ripple::before {
  content: "";
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0;
  pointer-events: none;
  background-color: var(--%NS%mat-tab-inactive-ripple-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab-link .mdc-tab__text-label {
  color: var(--%NS%mat-tab-inactive-label-text-color, var(--%NS%mat-sys-on-surface));
  display: inline-flex;
  align-items: center;
}
.mat-mdc-tab-link .mdc-tab__content {
  position: relative;
  pointer-events: auto;
}
.mat-mdc-tab-link:hover .mdc-tab__ripple::before {
  opacity: 0.04;
}
.mat-mdc-tab-link.cdk-program-focused .mdc-tab__ripple::before, .mat-mdc-tab-link.cdk-keyboard-focused .mdc-tab__ripple::before {
  opacity: 0.12;
}
.mat-mdc-tab-link .mat-ripple-element {
  opacity: 0.12;
  background-color: var(--%NS%mat-tab-inactive-ripple-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab-header.mat-mdc-tab-nav-bar-stretch-tabs .mat-mdc-tab-link {
  flex-grow: 1;
}
.mat-mdc-tab-link::before {
  margin: 5px;
}

@media (max-width: 599px) {
  .mat-mdc-tab-link {
    min-width: 72px;
  }
}
`],encapsulation:2})}return n})();var Ki=(()=>{class n{id=g$2(Pe$2).getId(`mat-tab-nav-panel-`);_activeTabId;static ɵfac=function(t){return new(t||n)};static ɵcmp=NC({type:n,selectors:[[`mat-tab-nav-panel`]],hostAttrs:[`role`,`tabpanel`,1,`mat-mdc-tab-nav-panel`],hostVars:2,hostBindings:function(t,i){t&2&&Rg(`aria-labelledby`,i._activeTabId)(`id`,i.id)},inputs:{id:`id`},exportAs:[`matTabNavPanel`],ngContentSelectors:vn,decls:1,vars:0,template:function(t,i){t&1&&(Uw(),Gw(0))},encapsulation:2})}return n})();function Vm(n,a){if(n&1&&kg(0,`mat-icon`,2),n&2)Og(`svgIcon`,Hw())}function Bm(n,a){if(n&1&&(cs$1(0,`mat-icon`,3),yb$1(1),Ju$1()),n&2){let e=Hw();lI(),im$1(e)}}function zm(n,a){if(n&1&&Nw(0,Vm,1,1,`mat-icon`,2)(1,Bm,2,1,`mat-icon`,3),n&2)xw(Hw().item().svgIcon?0:1)}function Hm(n,a){if(n&1&&kg(0,`mat-icon`,4),n&2)Og(`svgIcon`,Hw())}function jm(n,a){if(n&1&&(cs$1(0,`mat-icon`,5),yb$1(1),Ju$1()),n&2){let e=Hw();lI(),im$1(e)}}function Gm(n,a){if(n&1&&Nw(0,Hm,1,1,`mat-icon`,4)(1,jm,2,1,`mat-icon`,5),n&2)xw(Hw().item().svgIcon?0:1)}var Js=(()=>{class n{constructor(){this.item=Zj.required(),this.data=Zj(void 0),this.label=qe$3(()=>ye$2(this.item().label,this.data())),this.route=qe$3(()=>ye$2(this.item().route,this.data())??[]),this.suffixIcon=qe$3(()=>ye$2(this.item().suffixIcon,this.data())),this.prefixIcon=qe$3(()=>ye$2(this.item().prefixIcon,this.data()))}static{this.ɵfac=function(t){return new(t||n)}}static{this.ɵcmp=NC({type:n,selectors:[[`lab900-page-header-nav-item`]],inputs:{item:[1,`item`],data:[1,`data`]},decls:6,vars:8,consts:[[`rla`,`routerLinkActive`],[`mat-tab-link`,``,`routerLinkActive`,`active`,1,`lab900-page-header__nav__item`,3,`routerLink`,`queryParams`,`active`],[1,`lab900-page-header__nav__item__prefix-icon`,3,`svgIcon`],[1,`lab900-page-header__nav__item__prefix-icon`],[1,`lab900-page-header__nav__item__suffix-icon`,3,`svgIcon`],[1,`lab900-page-header__nav__item__suffix-icon`]],template:function(t,i){if(t&1&&(cs$1(0,`a`,1,0),Nw(2,zm,2,1),yb$1(3),kb$1(4,`translate`),Nw(5,Gm,2,1),Ju$1()),t&2){let o,r,u=Yw(1);Og(`routerLink`,i.route())(`queryParams`,i.item().queryParams)(`active`,u.isActive),lI(2),xw((o=i.prefixIcon())?2:-1,o),lI(),rl$1(` `,Lb$1(4,6,i.label()),` `),lI(2),xw((r=i.suffixIcon())?5:-1,r)}},dependencies:[wo$1,Mt$2,Kn,Fe,xn$4],styles:[`.lab900-page-header__nav__item{text-decoration:none}.lab900-page-header__nav__item__prefix-icon{margin-right:10px}.lab900-page-header__nav__item__suffix-icon{margin-left:10px}
`],encapsulation:2})}}return n})();function Wm(n,a){if(n&1&&(cs$1(0,`a`,0),yb$1(1),kb$1(2,`translate`),Ju$1()),n&2){let e=Hw();Og(`routerLink`,e.route())(`queryParams`,e.queryParams()),lI(),rl$1(` `,Lb$1(2,3,e.title()),` `)}}function qm(n,a){if(n&1&&(cs$1(0,`span`,1),yb$1(1),kb$1(2,`translate`),Ju$1()),n&2){let e=Hw();lI(),im$1(Lb$1(2,1,e.title()))}}var el=(()=>{class n{constructor(){this.item=Zj.required(),this.data=Zj(void 0),this.title=qe$3(()=>ye$2(this.item().title,this.data())),this.route=qe$3(()=>ye$2(this.item().route,this.data())),this.queryParams=qe$3(()=>ye$2(this.item().queryParams,this.data()))}static{this.ɵfac=function(t){return new(t||n)}}static{this.ɵcmp=NC({type:n,selectors:[[`lab900-bread-crumb-item`]],inputs:{item:[1,`item`],data:[1,`data`]},decls:2,vars:1,consts:[[1,`lab900-bread-crumb-item`,3,`routerLink`,`queryParams`],[1,`lab900-bread-crumb-item`,`lab900-bread-crumb-item--static`]],template:function(t,i){t&1&&Nw(0,Wm,3,5,`a`,0)(1,qm,3,3,`span`,1),t&2&&xw(i.route()?0:1)},dependencies:[Mt$2,xn$4],styles:[`.lab900-bread-crumb-item{text-decoration:none}.lab900-bread-crumb-item:visited{color:unset}
`],encapsulation:2})}}return n})();function $m(n,a){if(n&1&&(cs$1(0,`span`,3),yb$1(1),Ju$1()),n&2){let e=Hw().$implicit;lI(),im$1(e.divider||`>`)}}function Um(n,a){if(n&1&&(cs$1(0,`div`),kg(1,`lab900-bread-crumb-item`,2),Nw(2,$m,2,1,`span`,3),Ju$1()),n&2){let e=a.$implicit,t=a.$index,i=a.$count,o=Hw(2);Jg(`active`,t===i-1),lI(),Og(`item`,e)(`data`,o.data()),lI(),xw(t!==i-1?2:-1)}}function Qm(n,a){if(n&1&&(cs$1(0,`div`,0),Ow(1,Um,3,5,`div`,1,Rw),Ju$1()),n&2){let e=Hw();lI(),kw(e.breadCrumbs())}}var tl=(()=>{class n{constructor(){this.breadCrumbs=Zj.required(),this.data=Zj(void 0)}static{this.ɵfac=function(t){return new(t||n)}}static{this.ɵcmp=NC({type:n,selectors:[[`lab900-bread-crumbs`]],inputs:{breadCrumbs:[1,`breadCrumbs`],data:[1,`data`]},decls:1,vars:1,consts:[[1,`bread-crumbs`],[3,`active`],[3,`item`,`data`],[1,`divider`]],template:function(t,i){t&1&&Nw(0,Qm,3,0,`div`,0),t&2&&xw(i.breadCrumbs().length?0:-1)},dependencies:[el],styles:[`.bread-crumbs{display:flex;font-weight:700}.bread-crumbs .divider{margin:0 5px;font-weight:400}.bread-crumbs a{text-decoration:none}.bread-crumbs a:visited{color:unset}
`],encapsulation:2})}}return n})();var xn=(()=>{class n{constructor(){this.lastClickTime=null,this.throttleTimeInMs=Zj(500),this.throttledClickOutput=qj({alias:`throttledClick`})}onClick(e){let t=e.timeStamp||performance.now();if(this.lastClickTime!=null&&t-this.lastClickTime<this.throttleTimeInMs()){e.preventDefault();return}this.lastClickTime=t,this.throttledClickOutput.emit(e)}static{this.ɵfac=function(t){return new(t||n)}}static{this.ɵdir=En$3({type:n,selectors:[[``,`lab900PreventDoubleClick`,``]],hostBindings:function(t,i){t&1&&Ug(`click`,function(r){return i.onClick(r)})},inputs:{throttleTimeInMs:[1,`throttleTimeInMs`]},outputs:{throttledClickOutput:`throttledClick`}})}}return n})();function Zm(n,a){n&1&&Pg(0)}function Xm(n,a){if(n&1){let e=Vw();cs$1(0,`button`,9),kb$1(1,`translate`),Ug(`throttledClick`,function(i){Wd$1(e);return qd$1(Hw().btnClick.emit(i))}),Ig(2,Zm,1,0,`ng-container`,10),Ju$1()}if(n&2){let e=Hw(),t=Yw(10);sb$1(e.containerClass()??``),Jg(`prefixIcon`,!!e.prefixIcon())(`suffixIcon`,!!e.suffixIcon()),Og(`color`,e.color()??`primary`)(`disabled`,e.disabled())(`id`,e.buttonId())(`throttleTimeInMs`,e.throttleTimeInMs()),Rg(`type`,e.buttonType())(`aria-label`,e.ariaLabel()?Lb$1(1,13,e.ariaLabel()):null),lI(2),Og(`ngTemplateOutlet`,t)}}function Km(n,a){n&1&&Pg(0)}function Ym(n,a){if(n&1){let e=Vw();cs$1(0,`button`,11),kb$1(1,`translate`),Ug(`throttledClick`,function(i){Wd$1(e);return qd$1(Hw().btnClick.emit(i))}),Ig(2,Km,1,0,`ng-container`,10),Ju$1()}if(n&2){let e=Hw(),t=Yw(10);sb$1(e.containerClass()??``),Jg(`prefixIcon`,!!e.prefixIcon())(`suffixIcon`,!!e.suffixIcon()),Og(`color`,e.color()??`primary`)(`disabled`,e.disabled())(`id`,e.buttonId())(`throttleTimeInMs`,e.throttleTimeInMs()),Rg(`type`,e.buttonType())(`aria-label`,e.ariaLabel()?Lb$1(1,13,e.ariaLabel()):null),lI(2),Og(`ngTemplateOutlet`,t)}}function Jm(n,a){n&1&&Pg(0)}function ep(n,a){if(n&1){let e=Vw();cs$1(0,`button`,12),kb$1(1,`translate`),Ug(`throttledClick`,function(i){Wd$1(e);return qd$1(Hw().btnClick.emit(i))}),Ig(2,Jm,1,0,`ng-container`,10),Ju$1()}if(n&2){let e=Hw(),t=Yw(10);sb$1(e.containerClass()??``),Jg(`prefixIcon`,!!e.prefixIcon())(`suffixIcon`,!!e.suffixIcon()),Og(`color`,e.color()??`primary`)(`disabled`,e.disabled())(`id`,e.buttonId())(`throttleTimeInMs`,e.throttleTimeInMs()),Rg(`type`,e.buttonType())(`aria-label`,e.ariaLabel()?Lb$1(1,13,e.ariaLabel()):null),lI(2),Og(`ngTemplateOutlet`,t)}}function tp(n,a){n&1&&Pg(0)}function np(n,a){if(n&1){let e=Vw();cs$1(0,`button`,13),kb$1(1,`translate`),Ug(`throttledClick`,function(i){Wd$1(e);return qd$1(Hw().btnClick.emit(i))}),Ig(2,tp,1,0,`ng-container`,10),Ju$1()}if(n&2){let e=Hw(),t=Yw(8);sb$1(e.containerClass()),Og(`color`,e.color()??`primary`)(`disabled`,e.disabled())(`id`,e.buttonId())(`throttleTimeInMs`,e.throttleTimeInMs()),Rg(`type`,e.buttonType())(`aria-label`,Lb$1(1,9,e.ariaLabel()??e.label())),lI(2),Og(`ngTemplateOutlet`,t)}}function ip(n,a){n&1&&Pg(0)}function ap(n,a){if(n&1){let e=Vw();cs$1(0,`button`,14),kb$1(1,`translate`),Ug(`throttledClick`,function(i){Wd$1(e);return qd$1(Hw().btnClick.emit(i))}),Ig(2,ip,1,0,`ng-container`,10),Ju$1()}if(n&2){let e=Hw(),t=Yw(8);sb$1(e.containerClass()),Og(`color`,e.color()??`primary`)(`disabled`,e.disabled())(`id`,e.buttonId())(`throttleTimeInMs`,e.throttleTimeInMs()),Rg(`type`,e.buttonType())(`aria-label`,Lb$1(1,9,e.ariaLabel()??e.label())),lI(2),Og(`ngTemplateOutlet`,t)}}function op(n,a){n&1&&Pg(0)}function rp(n,a){if(n&1){let e=Vw();cs$1(0,`button`,15),kb$1(1,`translate`),Ug(`throttledClick`,function(i){Wd$1(e);return qd$1(Hw().btnClick.emit(i))}),Ig(2,op,1,0,`ng-container`,10),Ju$1()}if(n&2){let e=Hw(),t=Yw(8);sb$1(e.containerClass()),Og(`color`,e.color()??`primary`)(`disabled`,e.disabled())(`id`,e.buttonId())(`throttleTimeInMs`,e.throttleTimeInMs()),Rg(`type`,e.buttonType())(`aria-label`,Lb$1(1,9,e.ariaLabel()??e.label())),lI(2),Og(`ngTemplateOutlet`,t)}}function sp(n,a){n&1&&Pg(0)}function lp(n,a){if(n&1){let e=Vw();cs$1(0,`button`,16),kb$1(1,`translate`),Ug(`throttledClick`,function(i){Wd$1(e);return qd$1(Hw().btnClick.emit(i))}),Ig(2,sp,1,0,`ng-container`,10),Ju$1()}if(n&2){let e=Hw(),t=Yw(10);sb$1(e.containerClass()??``),Jg(`prefixIcon`,!!e.prefixIcon())(`suffixIcon`,!!e.suffixIcon()),Og(`color`,e.color()??`primary`)(`disabled`,e.disabled())(`id`,e.buttonId())(`throttleTimeInMs`,e.throttleTimeInMs()),Rg(`type`,e.buttonType())(`aria-label`,e.ariaLabel()?Lb$1(1,13,e.ariaLabel()):null),lI(2),Og(`ngTemplateOutlet`,t)}}function cp(n,a){if(n&1&&kg(0,`mat-icon`,17),n&2)Og(`svgIcon`,Hw(2).label())}function dp(n,a){if(n&1&&(cs$1(0,`mat-icon`,18),yb$1(1),Ju$1()),n&2){let e=Hw(2);lI(),im$1(e.label())}}function mp(n,a){if(n&1&&Nw(0,cp,1,1,`mat-icon`,17)(1,dp,2,1,`mat-icon`,18),n&2)xw(Hw().svgIcon()?0:1)}function pp(n,a){if(n&1&&kg(0,`mat-icon`,17),n&2)Og(`svgIcon`,Hw())}function up(n,a){if(n&1&&(cs$1(0,`mat-icon`,18),yb$1(1),Ju$1()),n&2){let e=Hw();lI(),im$1(e)}}function hp(n,a){if(n&1&&Nw(0,pp,1,1,`mat-icon`,17)(1,up,2,1,`mat-icon`,18),n&2)xw(Hw(2).svgIcon()?0:1)}function fp(n,a){if(n&1&&kg(0,`mat-icon`,17),n&2)Og(`svgIcon`,Hw())}function _p(n,a){if(n&1&&(cs$1(0,`mat-icon`,18),yb$1(1),Ju$1()),n&2){let e=Hw();lI(),im$1(e)}}function bp(n,a){if(n&1&&Nw(0,fp,1,1,`mat-icon`,17)(1,_p,2,1,`mat-icon`,18),n&2)xw(Hw(2).svgIcon()?0:1)}function gp(n,a){if(n&1&&(Nw(0,hp,2,1),yb$1(1),kb$1(2,`translate`),Nw(3,bp,2,1)),n&2){let e,t,i=Hw();xw((e=i.prefixIcon())?0:-1,e),lI(),rl$1(` `,Lb$1(2,3,i.label()),` `),lI(2),xw((t=i.suffixIcon())?3:-1,t)}}var Yi=(()=>{class n{constructor(){this.type=Zj(void 0),this.color=Zj(`primary`),this.suffixIcon=Zj(),this.prefixIcon=Zj(),this.label=Zj.required(),this.ariaLabel=Zj(),this.disabled=Zj(!1),this.svgIcon=Zj(!1),this.buttonType=Zj(`button`),this.containerClass=Zj(),this.buttonId=Zj(),this.throttleTimeInMs=Zj(500),this.btnClick=qj()}static{this.ɵfac=function(t){return new(t||n)}}static{this.ɵcmp=NC({type:n,selectors:[[`lab900-button`]],inputs:{type:[1,`type`],color:[1,`color`],suffixIcon:[1,`suffixIcon`],prefixIcon:[1,`prefixIcon`],label:[1,`label`],ariaLabel:[1,`ariaLabel`],disabled:[1,`disabled`],svgIcon:[1,`svgIcon`],buttonType:[1,`buttonType`],containerClass:[1,`containerClass`],buttonId:[1,`buttonId`],throttleTimeInMs:[1,`throttleTimeInMs`]},outputs:{btnClick:`btnClick`},decls:11,vars:1,consts:[[`iconOnly`,``],[`innerButton`,``],[`mat-raised-button`,``,`lab900PreventDoubleClick`,``,3,`class`,`color`,`disabled`,`prefixIcon`,`suffixIcon`,`id`,`throttleTimeInMs`],[`mat-stroked-button`,``,`lab900PreventDoubleClick`,``,3,`class`,`color`,`disabled`,`prefixIcon`,`suffixIcon`,`id`,`throttleTimeInMs`],[`mat-flat-button`,``,`lab900PreventDoubleClick`,``,3,`class`,`color`,`disabled`,`prefixIcon`,`suffixIcon`,`id`,`throttleTimeInMs`],[`mat-icon-button`,``,`lab900PreventDoubleClick`,``,3,`class`,`color`,`disabled`,`id`,`throttleTimeInMs`],[`mat-fab`,``,`lab900PreventDoubleClick`,``,3,`class`,`color`,`disabled`,`id`,`throttleTimeInMs`],[`mat-mini-fab`,``,`lab900PreventDoubleClick`,``,3,`class`,`color`,`disabled`,`id`,`throttleTimeInMs`],[`mat-button`,``,`lab900PreventDoubleClick`,``,3,`class`,`color`,`disabled`,`prefixIcon`,`suffixIcon`,`id`,`throttleTimeInMs`],[`mat-raised-button`,``,`lab900PreventDoubleClick`,``,3,`throttledClick`,`color`,`disabled`,`id`,`throttleTimeInMs`],[4,`ngTemplateOutlet`],[`mat-stroked-button`,``,`lab900PreventDoubleClick`,``,3,`throttledClick`,`color`,`disabled`,`id`,`throttleTimeInMs`],[`mat-flat-button`,``,`lab900PreventDoubleClick`,``,3,`throttledClick`,`color`,`disabled`,`id`,`throttleTimeInMs`],[`mat-icon-button`,``,`lab900PreventDoubleClick`,``,3,`throttledClick`,`color`,`disabled`,`id`,`throttleTimeInMs`],[`mat-fab`,``,`lab900PreventDoubleClick`,``,3,`throttledClick`,`color`,`disabled`,`id`,`throttleTimeInMs`],[`mat-mini-fab`,``,`lab900PreventDoubleClick`,``,3,`throttledClick`,`color`,`disabled`,`id`,`throttleTimeInMs`],[`mat-button`,``,`lab900PreventDoubleClick`,``,3,`throttledClick`,`color`,`disabled`,`id`,`throttleTimeInMs`],[`aria-hidden`,`true`,3,`svgIcon`],[`aria-hidden`,`true`]],template:function(t,i){if(t&1&&(Nw(0,Xm,3,15,`button`,2)(1,Ym,3,15,`button`,3)(2,ep,3,15,`button`,4)(3,np,3,11,`button`,5)(4,ap,3,11,`button`,6)(5,rp,3,11,`button`,7)(6,lp,3,15,`button`,8),Ig(7,mp,2,1,`ng-template`,null,0,jb$1)(9,gp,4,5,`ng-template`,null,1,jb$1)),t&2){let o;xw((o=i.type())===`raised`?0:o===`stroked`?1:o===`flat`?2:o===`icon`?3:o===`fab`?4:o===`mini-fab`?5:6)}},dependencies:[N_$1,de,ln,Fe,le,be,xn,xn$4],styles:[`button.suffixIcon .mdc-button__label,button.prefixIcon .mdc-button__label{display:inline-flex;align-items:center}button.suffixIcon .mat-icon,button.prefixIcon .mat-icon{font-size:18px;height:18px;width:18px}button.suffixIcon{padding-right:10px}button.suffixIcon .mat-icon{padding-left:4px}button.prefixIcon{padding-left:10px}button.prefixIcon .mat-icon{padding-right:4px}
`],encapsulation:2})}}return n})();var vp=[[[`mat-icon`],[``,`matMenuItemIcon`,``]],`*`];var xp=[`mat-icon, [matMenuItemIcon]`,`*`];function yp(n,a){n&1&&(sf$1(),cs$1(0,`svg`,2),kg(1,`polygon`,3),Ju$1())}var Cp=[`*`];function wp(n,a){if(n&1){let e=Vw();Xu$1(0,`div`,0),Gg(`click`,function(){Wd$1(e);return qd$1(Hw().closed.emit(`click`))})(`animationstart`,function(i){Wd$1(e);return qd$1(Hw()._onAnimationStart(i.animationName))})(`animationend`,function(i){Wd$1(e);return qd$1(Hw()._onAnimationDone(i.animationName))})(`animationcancel`,function(i){Wd$1(e);return qd$1(Hw()._onAnimationDone(i.animationName))}),Xu$1(1,`div`,1),Gw(2),el$1()()}if(n&2){let e=Hw();sb$1(e._classList),Jg(`mat-menu-panel-animations-disabled`,e._animationsDisabled)(`mat-menu-panel-exit-animation`,e._panelAnimationState===`void`)(`mat-menu-panel-animating`,e._isAnimating()),Hg(`id`,e.panelId),Rg(`aria-label`,e.ariaLabel||null)(`aria-labelledby`,e.ariaLabelledby||null)(`aria-describedby`,e.ariaDescribedby||null)}}var no=new S$1(`MAT_MENU_PANEL`);var qt=(()=>{class n{_elementRef=g$2(it$2);_document=g$2(Ne$3);_focusMonitor=g$2(Ot$1);_parentMenu=g$2(no,{optional:!0});_changeDetectorRef=g$2(Ls$1);role=`menuitem`;disabled=!1;disableRipple=!1;_hovered=new ee$3;_focused=new ee$3;_highlighted=!1;_triggersSubmenu=!1;constructor(){g$2($$2).load(Vt),this._parentMenu?.addItem?.(this)}focus(e,t){this._focusMonitor&&e?this._focusMonitor.focusVia(this._getHostElement(),e,t):this._getHostElement().focus(t),this._focused.next(this)}ngAfterViewInit(){this._focusMonitor&&this._focusMonitor.monitor(this._elementRef,!1)}ngOnDestroy(){this._focusMonitor&&this._focusMonitor.stopMonitoring(this._elementRef),this._parentMenu&&this._parentMenu.removeItem&&this._parentMenu.removeItem(this),this._hovered.complete(),this._focused.complete()}_getTabIndex(){return this.disabled?`-1`:`0`}_getHostElement(){return this._elementRef.nativeElement}_checkDisabled(e){this.disabled&&(e.preventDefault(),e.stopPropagation())}_handleMouseEnter(){this._hovered.next(this)}getLabel(){let e=this._elementRef.nativeElement.cloneNode(!0),t=e.querySelectorAll(`mat-icon, .material-icons`);for(let i=0;i<t.length;i++)t[i].remove();return e.textContent?.trim()||``}_setHighlighted(e){this._highlighted=e,this._changeDetectorRef.markForCheck()}_setTriggersSubmenu(e){this._triggersSubmenu=e,this._changeDetectorRef.markForCheck()}_hasFocus(){return this._document&&this._document.activeElement===this._getHostElement()}static ɵfac=function(t){return new(t||n)};static ɵcmp=NC({type:n,selectors:[[``,`mat-menu-item`,``]],hostAttrs:[1,`mat-mdc-menu-item`,`mat-focus-indicator`],hostVars:8,hostBindings:function(t,i){t&1&&Ug(`click`,function(r){return i._checkDisabled(r)})(`mouseenter`,function(){return i._handleMouseEnter()}),t&2&&(Rg(`role`,i.role)(`tabindex`,i._getTabIndex())(`aria-disabled`,i.disabled)(`disabled`,i.disabled||null),Jg(`mat-mdc-menu-item-highlighted`,i._highlighted)(`mat-mdc-menu-item-submenu-trigger`,i._triggersSubmenu))},inputs:{role:`role`,disabled:[2,`disabled`,`disabled`,mo$2],disableRipple:[2,`disableRipple`,`disableRipple`,mo$2]},exportAs:[`matMenuItem`],ngContentSelectors:xp,decls:5,vars:3,consts:[[1,`mat-mdc-menu-item-text`],[`matRipple`,``,1,`mat-mdc-menu-ripple`,3,`matRippleDisabled`,`matRippleTrigger`],[`viewBox`,`0 0 5 10`,`focusable`,`false`,`aria-hidden`,`true`,1,`mat-mdc-menu-submenu-icon`],[`points`,`0,0 5,5 0,10`]],template:function(t,i){t&1&&(Uw(vp),Gw(0),cs$1(1,`span`,0),Gw(2,1),Ju$1(),kg(3,`div`,1),Nw(4,yp,2,0,`:svg:svg`,2)),t&2&&(lI(3),Og(`matRippleDisabled`,i.disableRipple||i.disabled)(`matRippleTrigger`,i._getHostElement()),lI(),xw(i._triggersSubmenu?4:-1))},dependencies:[Tn$1],encapsulation:2})}return n})();var nl=new S$1(`MatMenuContent`);var ea=(()=>{class n{_template=g$2(rr$1);_appRef=g$2(fr);_injector=g$2(ne$1);_viewContainerRef=g$2(Dn$2);_document=g$2(Ne$3);_changeDetectorRef=g$2(Ls$1);_portal;_outlet;_attached=new ee$3;attach(e={}){this._portal||(this._portal=new Y$2(this._template,this._viewContainerRef)),this.detach(),this._outlet||(this._outlet=new ct$4(this._document.createElement(`div`),this._appRef,this._injector));let t=this._template.elementRef.nativeElement;t.parentNode.insertBefore(this._outlet.outletElement,t),this._changeDetectorRef.markForCheck(),this._portal.attach(this._outlet,e),this._attached.next()}detach(){this._portal?.isAttached&&this._portal.detach()}ngOnDestroy(){this.detach(),this._outlet?.dispose()}static ɵfac=function(t){return new(t||n)};static ɵdir=En$3({type:n,selectors:[[`ng-template`,`matMenuContent`,``]],features:[Mb$1([{provide:nl,useExisting:n}])]})}return n})();var kp=new S$1(`mat-menu-default-options`,{providedIn:`root`,factory:()=>({overlapTrigger:!1,xPosition:`after`,yPosition:`below`,backdropClass:`cdk-overlay-transparent-backdrop`})});var to=`_mat-menu-enter`;var Ji=`_mat-menu-exit`;var wt=(()=>{class n{_elementRef=g$2(it$2);_changeDetectorRef=g$2(Ls$1);_injector=g$2(ne$1);_keyManager;_xPosition;_yPosition;_firstItemFocusRef;_exitFallbackTimeout;_animationsDisabled=ai$3();_allItems;_directDescendantItems=new Ji$2;_classList={};_panelAnimationState=`void`;_animationDone=new ee$3;_isAnimating=xe$3(!1);parentMenu;direction;overlayPanelClass;backdropClass;ariaLabel;ariaLabelledby;ariaDescribedby;get xPosition(){return this._xPosition}set xPosition(e){this._xPosition=e,this.setPositionClasses()}get yPosition(){return this._yPosition}set yPosition(e){this._yPosition=e,this.setPositionClasses()}templateRef;items;lazyContent;overlapTrigger=!1;hasBackdrop;get panelClass(){return this._previousPanelClass}set panelClass(e){let t=this._previousPanelClass,i=q$2({},this._classList);t&&t.length&&t.split(` `).forEach(o=>{i[o]=!1}),this._previousPanelClass=e,e&&e.length&&(e.split(` `).forEach(o=>{i[o]=!0}),this._elementRef.nativeElement.className=``),this._classList=i}_previousPanelClass=``;get classList(){return this.panelClass}set classList(e){this.panelClass=e}closed=new Ke$2;close=this.closed;panelId=g$2(Pe$2).getId(`mat-menu-panel-`);constructor(){let e=g$2(kp);this.overlayPanelClass=e.overlayPanelClass||``,this._xPosition=e.xPosition,this._yPosition=e.yPosition,this.backdropClass=e.backdropClass,this.overlapTrigger=e.overlapTrigger,this.hasBackdrop=e.hasBackdrop}ngOnInit(){this.setPositionClasses()}ngAfterContentInit(){this._updateDirectDescendants(),this._keyManager=new xe$2(this._directDescendantItems).withWrap().withTypeAhead().withHomeAndEnd(),this._keyManager.tabOut.subscribe(()=>this.closed.emit(`tab`)),this._directDescendantItems.changes.pipe(Ky(this._directDescendantItems),ad$1(e=>Vy(...e.map(t=>t._focused)))).subscribe(e=>this._keyManager.updateActiveItem(e)),this._directDescendantItems.changes.subscribe(e=>{let t=this._keyManager;if(this._panelAnimationState===`enter`&&t.activeItem?._hasFocus()){let i=e.toArray(),o=Math.max(0,Math.min(i.length-1,t.activeItemIndex||0));i[o]&&!i[o].disabled?t.setActiveItem(o):t.setNextItemActive()}})}ngOnDestroy(){this._keyManager?.destroy(),this._directDescendantItems.destroy(),this.closed.complete(),this._firstItemFocusRef?.destroy(),clearTimeout(this._exitFallbackTimeout)}_hovered(){return this._directDescendantItems.changes.pipe(Ky(this._directDescendantItems),ad$1(t=>Vy(...t.map(i=>i._hovered))))}addItem(e){}removeItem(e){}_handleKeydown(e){let t=e.keyCode,i=this._keyManager;switch(t){case 27:_t$3(e)||(e.preventDefault(),this.closed.emit(`keydown`));break;case 37:this.parentMenu&&this.direction===`ltr`&&this.closed.emit(`keydown`);break;case 39:this.parentMenu&&this.direction===`rtl`&&this.closed.emit(`keydown`);break;default:(t===38||t===40)&&i.setFocusOrigin(`keyboard`),i.onKeydown(e);return}}focusFirstItem(e=`program`){this._firstItemFocusRef?.destroy(),this._firstItemFocusRef=hh$1(()=>{let t=this._resolvePanel();if(!t||!t.contains(document.activeElement)){let i=this._keyManager;i.setFocusOrigin(e).setFirstItemActive(),!i.activeItem&&t&&t.focus()}},{injector:this._injector})}resetActiveItem(){this._keyManager.setActiveItem(-1)}setElevation(e){}setPositionClasses(e=this.xPosition,t=this.yPosition){this._classList=Z$3(q$2({},this._classList),{"mat-menu-before":e===`before`,"mat-menu-after":e===`after`,"mat-menu-above":t===`above`,"mat-menu-below":t===`below`}),this._changeDetectorRef.markForCheck()}_onAnimationDone(e){let t=e===Ji;(t||e===to)&&(t&&(clearTimeout(this._exitFallbackTimeout),this._exitFallbackTimeout=void 0),this._animationDone.next(t?`void`:`enter`),this._isAnimating.set(!1))}_onAnimationStart(e){(e===to||e===Ji)&&this._isAnimating.set(!0)}_setIsOpen(e){if(this._panelAnimationState=e?`enter`:`void`,e){if(this._keyManager.activeItemIndex===0){let t=this._resolvePanel();t&&(t.scrollTop=0)}}else this._animationsDisabled||(this._exitFallbackTimeout=setTimeout(()=>this._onAnimationDone(Ji),200));this._animationsDisabled&&setTimeout(()=>{this._onAnimationDone(e?to:Ji)}),this._changeDetectorRef.markForCheck()}_updateDirectDescendants(){this._allItems.changes.pipe(Ky(this._allItems)).subscribe(e=>{this._directDescendantItems.reset(e.filter(t=>t._parentMenu===this)),this._directDescendantItems.notifyOnChanges()})}_resolvePanel(){let e=null;return this._directDescendantItems.length&&(e=this._directDescendantItems.first._getHostElement().closest(`[role="menu"]`)),e}static ɵfac=function(t){return new(t||n)};static ɵcmp=NC({type:n,selectors:[[`mat-menu`]],contentQueries:function(t,i,o){if(t&1&&Wg(o,nl,5)(o,qt,5)(o,qt,4),t&2){let r;Ww(r=qw())&&(i.lazyContent=r.first),Ww(r=qw())&&(i._allItems=r),Ww(r=qw())&&(i.items=r)}},viewQuery:function(t,i){if(t&1&&qg(rr$1,5),t&2){let o;Ww(o=qw())&&(i.templateRef=o.first)}},hostVars:3,hostBindings:function(t,i){t&2&&Rg(`aria-label`,null)(`aria-labelledby`,null)(`aria-describedby`,null)},inputs:{backdropClass:`backdropClass`,ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`],ariaDescribedby:[0,`aria-describedby`,`ariaDescribedby`],xPosition:`xPosition`,yPosition:`yPosition`,overlapTrigger:[2,`overlapTrigger`,`overlapTrigger`,mo$2],hasBackdrop:[2,`hasBackdrop`,`hasBackdrop`,e=>e==null?null:mo$2(e)],panelClass:[0,`class`,`panelClass`],classList:`classList`},outputs:{closed:`closed`,close:`close`},exportAs:[`matMenu`],features:[Mb$1([{provide:no,useExisting:n}])],ngContentSelectors:Cp,decls:1,vars:0,consts:[[`tabindex`,`-1`,`role`,`menu`,1,`mat-mdc-menu-panel`,3,`click`,`animationstart`,`animationend`,`animationcancel`,`id`],[1,`mat-mdc-menu-content`]],template:function(t,i){t&1&&(Uw(),Cg(0,wp,3,12,`ng-template`))},styles:[`mat-menu {
  display: none;
}

.mat-mdc-menu-content {
  margin: 0;
  padding: 8px 0;
  outline: 0;
}
.mat-mdc-menu-content,
.mat-mdc-menu-content .mat-mdc-menu-item .mat-mdc-menu-item-text {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  flex: 1;
  white-space: normal;
  font-family: var(--%NS%mat-menu-item-label-text-font, var(--%NS%mat-sys-label-large-font));
  line-height: var(--%NS%mat-menu-item-label-text-line-height, var(--%NS%mat-sys-label-large-line-height));
  font-size: var(--%NS%mat-menu-item-label-text-size, var(--%NS%mat-sys-label-large-size));
  letter-spacing: var(--%NS%mat-menu-item-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  font-weight: var(--%NS%mat-menu-item-label-text-weight, var(--%NS%mat-sys-label-large-weight));
}

@keyframes _mat-menu-enter {
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
@keyframes _mat-menu-exit {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.mat-mdc-menu-panel {
  min-width: 112px;
  max-width: 280px;
  overflow: auto;
  box-sizing: border-box;
  outline: 0;
  animation: _mat-menu-enter 120ms cubic-bezier(0, 0, 0.2, 1);
  border-radius: var(--%NS%mat-menu-container-shape, var(--%NS%mat-sys-corner-extra-small));
  background-color: var(--%NS%mat-menu-container-color, var(--%NS%mat-sys-surface-container));
  box-shadow: var(--%NS%mat-menu-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));
  will-change: transform, opacity;
}
.mat-mdc-menu-panel.mat-menu-panel-exit-animation {
  animation: _mat-menu-exit 100ms 25ms linear forwards;
}
.mat-mdc-menu-panel.mat-menu-panel-animations-disabled {
  animation: none;
}
.mat-mdc-menu-panel.mat-menu-panel-animating {
  pointer-events: none;
}
.mat-mdc-menu-panel.mat-menu-panel-animating:has(.mat-mdc-menu-content:empty) {
  display: none;
}
@media (forced-colors: active) {
  .mat-mdc-menu-panel {
    outline: solid 1px;
  }
}
.mat-mdc-menu-panel .mat-divider {
  border-top-color: var(--%NS%mat-menu-divider-color, var(--%NS%mat-sys-surface-variant));
  margin-bottom: var(--%NS%mat-menu-divider-bottom-spacing, 8px);
  margin-top: var(--%NS%mat-menu-divider-top-spacing, 8px);
}

.mat-mdc-menu-item {
  display: flex;
  position: relative;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
  padding: 0;
  cursor: pointer;
  width: 100%;
  text-align: left;
  box-sizing: border-box;
  color: inherit;
  font-size: inherit;
  background: none;
  text-decoration: none;
  margin: 0;
  min-height: 48px;
  padding-left: var(--%NS%mat-menu-item-leading-spacing, 12px);
  padding-right: var(--%NS%mat-menu-item-trailing-spacing, 12px);
  -webkit-user-select: none;
  user-select: none;
  cursor: pointer;
  outline: none;
  border: none;
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-menu-item::-moz-focus-inner {
  border: 0;
}
[dir=rtl] .mat-mdc-menu-item {
  padding-left: var(--%NS%mat-menu-item-trailing-spacing, 12px);
  padding-right: var(--%NS%mat-menu-item-leading-spacing, 12px);
}
.mat-mdc-menu-item:has(.material-icons, mat-icon, [matButtonIcon]) {
  padding-left: var(--%NS%mat-menu-item-with-icon-leading-spacing, 12px);
  padding-right: var(--%NS%mat-menu-item-with-icon-trailing-spacing, 12px);
}
[dir=rtl] .mat-mdc-menu-item:has(.material-icons, mat-icon, [matButtonIcon]) {
  padding-left: var(--%NS%mat-menu-item-with-icon-trailing-spacing, 12px);
  padding-right: var(--%NS%mat-menu-item-with-icon-leading-spacing, 12px);
}
.mat-mdc-menu-item, .mat-mdc-menu-item:visited, .mat-mdc-menu-item:link {
  color: var(--%NS%mat-menu-item-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-menu-item .mat-icon-no-color,
.mat-mdc-menu-item .mat-mdc-menu-submenu-icon {
  color: var(--%NS%mat-menu-item-icon-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-menu-item[disabled] {
  cursor: default;
  opacity: 0.38;
}
.mat-mdc-menu-item[disabled]::after {
  display: block;
  position: absolute;
  content: "";
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}
.mat-mdc-menu-item:focus {
  outline: 0;
}
.mat-mdc-menu-item .mat-icon {
  flex-shrink: 0;
  margin-right: var(--%NS%mat-menu-item-spacing, 12px);
  height: var(--%NS%mat-menu-item-icon-size, 24px);
  width: var(--%NS%mat-menu-item-icon-size, 24px);
}
[dir=rtl] .mat-mdc-menu-item {
  text-align: right;
}
[dir=rtl] .mat-mdc-menu-item .mat-icon {
  margin-right: 0;
  margin-left: var(--%NS%mat-menu-item-spacing, 12px);
}
.mat-mdc-menu-item:not([disabled]):hover {
  background-color: var(--%NS%mat-menu-item-hover-state-layer-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) calc(var(--%NS%mat-sys-hover-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-menu-item:not([disabled]).cdk-program-focused, .mat-mdc-menu-item:not([disabled]).cdk-keyboard-focused, .mat-mdc-menu-item:not([disabled]).mat-mdc-menu-item-highlighted {
  background-color: var(--%NS%mat-menu-item-focus-state-layer-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) calc(var(--%NS%mat-sys-focus-state-layer-opacity) * 100%), transparent));
}
@media (forced-colors: active) {
  .mat-mdc-menu-item {
    margin-top: 1px;
  }
}

.mat-mdc-menu-submenu-icon {
  width: var(--%NS%mat-menu-item-icon-size, 24px);
  height: 10px;
  fill: currentColor;
  padding-left: var(--%NS%mat-menu-item-spacing, 12px);
}
[dir=rtl] .mat-mdc-menu-submenu-icon {
  padding-right: var(--%NS%mat-menu-item-spacing, 12px);
  padding-left: 0;
}
[dir=rtl] .mat-mdc-menu-submenu-icon polygon {
  transform: scaleX(-1);
  transform-origin: center;
}
@media (forced-colors: active) {
  .mat-mdc-menu-submenu-icon {
    fill: CanvasText;
  }
}

.mat-mdc-menu-item .mat-mdc-menu-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}
`],encapsulation:2})}return n})();var Sp=new S$1(`mat-menu-scroll-strategy`,{providedIn:`root`,factory:()=>{let n=g$2(ne$1);return()=>U$3(n)}});var yn=new WeakMap;var Dp=(()=>{class n{_canHaveBackdrop;_element=g$2(it$2);_viewContainerRef=g$2(Dn$2);_menuItemInstance=g$2(qt,{optional:!0,self:!0});_dir=g$2(b$2,{optional:!0});_focusMonitor=g$2(Ot$1);_ngZone=g$2(U$4);_injector=g$2(ne$1);_scrollStrategy=g$2(Sp);_changeDetectorRef=g$2(Ls$1);_animationsDisabled=ai$3();_portal;_overlayRef=null;_menuOpen=!1;_closingActionsSubscription=V$3.EMPTY;_menuCloseSubscription=V$3.EMPTY;_pendingRemoval;_parentMaterialMenu;_parentInnerPadding;_openedBy=void 0;get _menu(){return this._menuInternal}set _menu(e){e!==this._menuInternal&&(this._menuInternal=e,this._menuCloseSubscription.unsubscribe(),e?(this._parentMaterialMenu,this._menuCloseSubscription=e.close.subscribe(t=>{this._destroyMenu(t),(t===`click`||t===`tab`)&&this._parentMaterialMenu&&this._parentMaterialMenu.closed.emit(t)})):this._destroyMenu(),this._menuItemInstance?._setTriggersSubmenu(this._triggersSubmenu()))}_menuInternal=null;constructor(e){this._canHaveBackdrop=e;let t=g$2(no,{optional:!0});this._parentMaterialMenu=t instanceof wt?t:void 0}ngOnDestroy(){this._menu&&this._ownsMenu(this._menu)&&yn.delete(this._menu),this._pendingRemoval?.unsubscribe(),this._menuCloseSubscription.unsubscribe(),this._closingActionsSubscription.unsubscribe(),this._overlayRef&&(this._overlayRef.dispose(),this._overlayRef=null)}get menuOpen(){return this._menuOpen}get dir(){return this._dir&&this._dir.value===`rtl`?`rtl`:`ltr`}_triggersSubmenu(){return!!(this._menuItemInstance&&this._parentMaterialMenu&&this._menu)}_closeMenu(){this._menu?.close.emit()}_openMenu(e){if(this._triggerIsAriaDisabled())return;let t=this._menu;if(this._menuOpen||!t)return;this._pendingRemoval?.unsubscribe();let i=yn.get(t);yn.set(t,this),i&&i!==this&&i._closeMenu();let o=this._createOverlay(t),r=o.getConfig(),u=r.positionStrategy;this._setPosition(t,u),this._canHaveBackdrop?r.hasBackdrop=t.hasBackdrop==null?!this._triggersSubmenu():t.hasBackdrop:r.hasBackdrop=t.hasBackdrop??!1,o.hasAttached()||(o.attach(this._getPortal(t)),t.lazyContent?.attach(this.menuData)),this._closingActionsSubscription=this._menuClosingActions().subscribe(()=>this._closeMenu()),t.parentMenu=this._triggersSubmenu()?this._parentMaterialMenu:void 0,t.direction=this.dir,e&&t.focusFirstItem(this._openedBy||`program`),this._setIsMenuOpen(!0),t instanceof wt&&(t._setIsOpen(!0),t._directDescendantItems.changes.pipe(ia$1(t.close)).subscribe(()=>{u.withLockedPosition(!1).reapplyLastPosition(),u.withLockedPosition(!0)}))}focus(e,t){this._focusMonitor&&e?this._focusMonitor.focusVia(this._element,e,t):this._element.nativeElement.focus(t)}_destroyMenu(e){let t=this._overlayRef,i=this._menu;!t||!this.menuOpen||(this._closingActionsSubscription.unsubscribe(),this._pendingRemoval?.unsubscribe(),i instanceof wt&&this._ownsMenu(i)?(this._pendingRemoval=i._animationDone.pipe(Rn$2(1)).subscribe(()=>{t.detach(),yn.has(i)||i.lazyContent?.detach()}),i._setIsOpen(!1)):(t.detach(),i?.lazyContent?.detach()),i&&this._ownsMenu(i)&&yn.delete(i),this.restoreFocus&&(e===`keydown`||!this._openedBy||!this._triggersSubmenu())&&this.focus(this._openedBy),this._openedBy=void 0,this._setIsMenuOpen(!1))}_setIsMenuOpen(e){e!==this._menuOpen&&(this._menuOpen=e,this._menuOpen?this.menuOpened.emit():this.menuClosed.emit(),this._triggersSubmenu()&&this._menuItemInstance._setHighlighted(e),this._changeDetectorRef.markForCheck())}_createOverlay(e){if(!this._overlayRef){let t=this._getOverlayConfig(e);this._subscribeToPositions(e,t.positionStrategy),this._overlayRef=K(this._injector,t),this._overlayRef.keydownEvents().subscribe(i=>{this._menu instanceof wt&&this._menu._handleKeydown(i)})}return this._overlayRef}_getOverlayConfig(e){return new G$2({positionStrategy:$$1(this._injector,this._getOverlayOrigin()).withLockedPosition().withGrowAfterOpen().withTransformOriginOn(`.mat-menu-panel, .mat-mdc-menu-panel`),backdropClass:e.backdropClass||`cdk-overlay-transparent-backdrop`,panelClass:e.overlayPanelClass,scrollStrategy:this._scrollStrategy(),direction:this._dir||`ltr`,disableAnimations:this._animationsDisabled})}_subscribeToPositions(e,t){e.setPositionClasses&&t.positionChanges.subscribe(i=>{this._ngZone.run(()=>{let o=i.connectionPair.overlayX===`start`?`after`:`before`,r=i.connectionPair.overlayY===`top`?`below`:`above`;e.setPositionClasses(o,r)})})}_setPosition(e,t){let[i,o]=e.xPosition===`before`?[`end`,`start`]:[`start`,`end`],[r,u]=e.yPosition===`above`?[`bottom`,`top`]:[`top`,`bottom`],[C,M]=[r,u],[U,ae]=[i,o],Pe=0;if(this._triggersSubmenu()){if(ae=i=e.xPosition===`before`?`start`:`end`,o=U=i===`end`?`start`:`end`,this._parentMaterialMenu){if(this._parentInnerPadding==null){let ht=this._parentMaterialMenu.items.first;this._parentInnerPadding=ht?ht._getHostElement().offsetTop:0}Pe=r===`bottom`?this._parentInnerPadding:-this._parentInnerPadding}}else e.overlapTrigger||(C=r===`top`?`bottom`:`top`,M=u===`top`?`bottom`:`top`);t.withPositions([{originX:i,originY:C,overlayX:U,overlayY:r,offsetY:Pe},{originX:o,originY:C,overlayX:ae,overlayY:r,offsetY:Pe},{originX:i,originY:M,overlayX:U,overlayY:u,offsetY:-Pe},{originX:o,originY:M,overlayX:ae,overlayY:u,offsetY:-Pe}])}_menuClosingActions(){let e=this._getOutsideClickStream(this._overlayRef),t=this._overlayRef.detachments();return Vy(e,this._parentMaterialMenu?this._parentMaterialMenu.closed:Ty(),this._parentMaterialMenu?this._parentMaterialMenu._hovered().pipe(Ir(r=>this._menuOpen&&r!==this._menuItemInstance)):Ty(),t)}_getPortal(e){return(!this._portal||this._portal.templateRef!==e.templateRef)&&(this._portal=new Y$2(e.templateRef,this._viewContainerRef)),this._portal}_ownsMenu(e){return yn.get(e)===this}_triggerIsAriaDisabled(){return mo$2(this._element.nativeElement.getAttribute(`aria-disabled`))}static ɵfac=function(t){YI()};static ɵdir=En$3({type:n})}return n})();var Dn=(()=>{class n extends Dp{_cleanupTouchstart;_hoverSubscription=V$3.EMPTY;get _deprecatedMatMenuTriggerFor(){return this.menu}set _deprecatedMatMenuTriggerFor(e){this.menu=e}get menu(){return this._menu}set menu(e){this._menu=e}menuData;restoreFocus=!0;menuOpened=new Ke$2;onMenuOpen=this.menuOpened;menuClosed=new Ke$2;onMenuClose=this.menuClosed;constructor(){super(!0);let e=g$2(gn$5);this._cleanupTouchstart=e.listen(this._element.nativeElement,`touchstart`,t=>{De$2(t)||(this._openedBy=`touch`)},{passive:!0})}triggersSubmenu(){return super._triggersSubmenu()}toggleMenu(){return this.menuOpen?this.closeMenu():this.openMenu()}openMenu(){this._openMenu(!0)}closeMenu(){this._closeMenu()}updatePosition(){this._overlayRef?.updatePosition()}ngAfterContentInit(){this._handleHover()}ngOnDestroy(){super.ngOnDestroy(),this._cleanupTouchstart(),this._hoverSubscription.unsubscribe()}_getOverlayOrigin(){return this._element}_getOutsideClickStream(e){return e.backdropClick()}_handleMousedown(e){Oe$2(e)||(this._openedBy=e.button===0?`mouse`:void 0,this.triggersSubmenu()&&e.preventDefault())}_handleKeydown(e){let t=e.keyCode;(t===13||t===32)&&(this._openedBy=`keyboard`),this.triggersSubmenu()&&(t===39&&this.dir===`ltr`||t===37&&this.dir===`rtl`)&&(this._openedBy=`keyboard`,this.openMenu())}_handleClick(e){this.triggersSubmenu()?(e.stopPropagation(),this.openMenu()):this.toggleMenu()}_handleHover(){this.triggersSubmenu()&&this._parentMaterialMenu&&(this._hoverSubscription=this._parentMaterialMenu._hovered().subscribe(e=>{e===this._menuItemInstance&&!e.disabled&&this._parentMaterialMenu?._panelAnimationState!==`void`&&(this._openedBy=`mouse`,this._openMenu(!1))}))}static ɵfac=function(t){return new(t||n)};static ɵdir=En$3({type:n,selectors:[[``,`mat-menu-trigger-for`,``],[``,`matMenuTriggerFor`,``]],hostAttrs:[1,`mat-mdc-menu-trigger`],hostVars:3,hostBindings:function(t,i){t&1&&Ug(`click`,function(r){return i._handleClick(r)})(`mousedown`,function(r){return i._handleMousedown(r)})(`keydown`,function(r){return i._handleKeydown(r)}),t&2&&Rg(`aria-haspopup`,i.menu?`menu`:null)(`aria-expanded`,i.menuOpen)(`aria-controls`,i.menuOpen?i.menu?.panelId:null)},inputs:{_deprecatedMatMenuTriggerFor:[0,`mat-menu-trigger-for`,`_deprecatedMatMenuTriggerFor`],menu:[0,`matMenuTriggerFor`,`menu`],menuData:[0,`matMenuTriggerData`,`menuData`],restoreFocus:[0,`matMenuTriggerRestoreFocus`,`restoreFocus`]},outputs:{menuOpened:`menuOpened`,onMenuOpen:`onMenuOpen`,menuClosed:`menuClosed`,onMenuClose:`onMenuClose`},exportAs:[`matMenuTrigger`],features:[Dg]})}return n})();var ta=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵmod=gg({type:n});static ɵinj=xa$1({imports:[ee,qe$2,U$5,j$5]})}return n})();var Tp=[`button`];var Mp=[`*`];function Np(n,a){if(n&1&&(cs$1(0,`div`,2),kg(1,`mat-pseudo-checkbox`,6),Ju$1()),n&2){let e=Hw();lI(),Og(`disabled`,e.disabled)}}var al=new S$1(`MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS`,{providedIn:`root`,factory:()=>({hideSingleSelectionIndicator:!1,hideMultipleSelectionIndicator:!1,disabledInteractive:!1})});var ol=new S$1(`MatButtonToggleGroup`);var Ip={provide:Qn,useExisting:ri$4(()=>io),multi:!0};var na=class{source;value;constructor(a,e){this.source=a,this.value=e}};var io=(()=>{class n{_changeDetector=g$2(Ls$1);_dir=g$2(b$2,{optional:!0});_multiple=!1;_disabled=!1;_disabledInteractive=!1;_selectionModel;_rawValue;_controlValueAccessorChangeFn=()=>{};_onTouched=()=>{};_buttonToggles;appearance;get name(){return this._name}set name(e){this._name=e,this._markButtonsForCheck()}_name=g$2(Pe$2).getId(`mat-button-toggle-group-`);vertical=!1;get value(){let e=this._selectionModel?this._selectionModel.selected:[];return this.multiple?e.map(t=>t.value):e[0]?e[0].value:void 0}set value(e){this._setSelectionByValue(e),this.valueChange.emit(this.value)}valueChange=new Ke$2;get selected(){let e=this._selectionModel?this._selectionModel.selected:[];return this.multiple?e:e[0]||null}get multiple(){return this._multiple}set multiple(e){this._multiple=e,this._markButtonsForCheck()}get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._markButtonsForCheck()}get disabledInteractive(){return this._disabledInteractive}set disabledInteractive(e){this._disabledInteractive=e,this._markButtonsForCheck()}get dir(){return this._dir&&this._dir.value===`rtl`?`rtl`:`ltr`}change=new Ke$2;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(e){this._hideSingleSelectionIndicator=e,this._markButtonsForCheck()}_hideSingleSelectionIndicator;get hideMultipleSelectionIndicator(){return this._hideMultipleSelectionIndicator}set hideMultipleSelectionIndicator(e){this._hideMultipleSelectionIndicator=e,this._markButtonsForCheck()}_hideMultipleSelectionIndicator;constructor(){let e=g$2(al,{optional:!0});this.appearance=e&&e.appearance?e.appearance:`standard`,this._hideSingleSelectionIndicator=e?.hideSingleSelectionIndicator??!1,this._hideMultipleSelectionIndicator=e?.hideMultipleSelectionIndicator??!1}ngOnInit(){this._selectionModel=new Ce$1(this.multiple,void 0,!1)}ngAfterContentInit(){this._selectionModel.select(...this._buttonToggles.filter(e=>e.checked)),this.multiple||this._initializeTabIndex()}writeValue(e){this.value=e,this._changeDetector.markForCheck()}registerOnChange(e){this._controlValueAccessorChangeFn=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e}_keydown(e){if(this.multiple||this.disabled||_t$3(e))return;let i=e.target.id,o=this._buttonToggles.toArray().findIndex(u=>u.buttonId===i),r=null;switch(e.keyCode){case 32:case 13:r=this._buttonToggles.get(o)||null;break;case 38:r=this._getNextButton(o,-1);break;case 37:r=this._getNextButton(o,this.dir===`ltr`?-1:1);break;case 40:r=this._getNextButton(o,1);break;case 39:r=this._getNextButton(o,this.dir===`ltr`?1:-1);break;default:return}r&&(e.preventDefault(),r._onButtonClick(),r.focus())}_emitChangeEvent(e){let t=new na(e,this.value);this._rawValue=t.value,this._controlValueAccessorChangeFn(t.value),this.change.emit(t)}_syncButtonToggle(e,t,i=!1,o=!1){!this.multiple&&this.selected&&!e.checked&&(this.selected.checked=!1),this._selectionModel?t?this._selectionModel.select(e):this._selectionModel.deselect(e):o=!0,o?Promise.resolve().then(()=>this._updateModelValue(e,i)):this._updateModelValue(e,i)}_isSelected(e){return this._selectionModel&&this._selectionModel.isSelected(e)}_isPrechecked(e){return typeof this._rawValue>`u`?!1:this.multiple&&Array.isArray(this._rawValue)?this._rawValue.some(t=>e.value!=null&&t===e.value):e.value===this._rawValue}_initializeTabIndex(){if(this._buttonToggles.forEach(e=>{e.tabIndex=-1}),this.selected)this.selected.tabIndex=0;else for(let e=0;e<this._buttonToggles.length;e++){let t=this._buttonToggles.get(e);if(!t.disabled){t.tabIndex=0;break}}}_getNextButton(e,t){let i=this._buttonToggles;for(let o=1;o<=i.length;o++){let r=(e+t*o+i.length)%i.length,u=i.get(r);if(u&&!u.disabled)return u}return null}_setSelectionByValue(e){if(this._rawValue=e,!this._buttonToggles)return;let t=this._buttonToggles.toArray();if(this.multiple&&e?(this._clearSelection(),e.forEach(i=>this._selectValue(i,t))):(this._clearSelection(),this._selectValue(e,t)),!this.multiple&&t.every(i=>i.tabIndex===-1)){for(let i of t)if(!i.disabled){i.tabIndex=0;break}}}_clearSelection(){this._selectionModel.clear(),this._buttonToggles.forEach(e=>{e.checked=!1,this.multiple||(e.tabIndex=-1)})}_selectValue(e,t){for(let i of t)if(i.value===e){i.checked=!0,this._selectionModel.select(i),this.multiple||(i.tabIndex=0);break}}_updateModelValue(e,t){t&&this._emitChangeEvent(e),this.valueChange.emit(this.value)}_markButtonsForCheck(){this._buttonToggles?.forEach(e=>e._markForCheck())}static ɵfac=function(t){return new(t||n)};static ɵdir=En$3({type:n,selectors:[[`mat-button-toggle-group`]],contentQueries:function(t,i,o){if(t&1&&Wg(o,ao,5),t&2){let r;Ww(r=qw())&&(i._buttonToggles=r)}},hostAttrs:[1,`mat-button-toggle-group`],hostVars:6,hostBindings:function(t,i){t&1&&Ug(`keydown`,function(r){return i._keydown(r)}),t&2&&(Rg(`role`,i.multiple?`group`:`radiogroup`)(`aria-disabled`,i.disabled),Jg(`mat-button-toggle-vertical`,i.vertical)(`mat-button-toggle-group-appearance-standard`,i.appearance===`standard`))},inputs:{appearance:`appearance`,name:`name`,vertical:[2,`vertical`,`vertical`,mo$2],value:`value`,multiple:[2,`multiple`,`multiple`,mo$2],disabled:[2,`disabled`,`disabled`,mo$2],disabledInteractive:[2,`disabledInteractive`,`disabledInteractive`,mo$2],hideSingleSelectionIndicator:[2,`hideSingleSelectionIndicator`,`hideSingleSelectionIndicator`,mo$2],hideMultipleSelectionIndicator:[2,`hideMultipleSelectionIndicator`,`hideMultipleSelectionIndicator`,mo$2]},outputs:{valueChange:`valueChange`,change:`change`},exportAs:[`matButtonToggleGroup`],features:[Mb$1([Ip,{provide:ol,useExisting:n}])]})}return n})();var ao=(()=>{class n{_changeDetectorRef=g$2(Ls$1);_elementRef=g$2(it$2);_focusMonitor=g$2(Ot$1);_idGenerator=g$2(Pe$2);_animationDisabled=ai$3();_checked=!1;ariaLabel;ariaLabelledby=null;_buttonElement;buttonToggleGroup;get buttonId(){return`${this.id}-button`}id;name;value;get tabIndex(){return this._tabIndex()}set tabIndex(e){this._tabIndex.set(e)}_tabIndex;disableRipple=!1;get appearance(){return this.buttonToggleGroup?this.buttonToggleGroup.appearance:this._appearance}set appearance(e){this._appearance=e}_appearance;get checked(){return this.buttonToggleGroup?this.buttonToggleGroup._isSelected(this):this._checked}set checked(e){e!==this._checked&&(this._checked=e,this.buttonToggleGroup&&this.buttonToggleGroup._syncButtonToggle(this,this._checked),this._changeDetectorRef.markForCheck())}get disabled(){return this._disabled||this.buttonToggleGroup&&this.buttonToggleGroup.disabled}set disabled(e){this._disabled=e}_disabled=!1;get disabledInteractive(){return this._disabledInteractive||this.buttonToggleGroup!==null&&this.buttonToggleGroup.disabledInteractive}set disabledInteractive(e){this._disabledInteractive=e}_disabledInteractive;change=new Ke$2;constructor(){g$2($$2).load(Vt);let e=g$2(ol,{optional:!0}),t=g$2(new Tm$1(`tabindex`),{optional:!0})||``,i=g$2(al,{optional:!0});this._tabIndex=xe$3(parseInt(t)||0),this.buttonToggleGroup=e,this._appearance=i&&i.appearance?i.appearance:`standard`,this._disabledInteractive=i?.disabledInteractive??!1}ngOnInit(){let e=this.buttonToggleGroup;this.id=this.id||this._idGenerator.getId(`mat-button-toggle-`),e&&(e._isPrechecked(this)?this.checked=!0:e._isSelected(this)!==this._checked&&e._syncButtonToggle(this,this._checked))}ngAfterViewInit(){this._animationDisabled||this._elementRef.nativeElement.classList.add(`mat-button-toggle-animations-enabled`),this._focusMonitor.monitor(this._elementRef,!0)}ngOnDestroy(){let e=this.buttonToggleGroup;this._focusMonitor.stopMonitoring(this._elementRef),e&&e._isSelected(this)&&e._syncButtonToggle(this,!1,!1,!0)}focus(e){this._buttonElement.nativeElement.focus(e)}_onButtonClick(){if(this.disabled)return;let e=this.isSingleSelector()?!0:!this._checked;if(e!==this._checked&&(this._checked=e,this.buttonToggleGroup&&(this.buttonToggleGroup._syncButtonToggle(this,this._checked,!0),this.buttonToggleGroup._onTouched())),this.isSingleSelector()){let t=this.buttonToggleGroup._buttonToggles.find(i=>i.tabIndex===0);t&&(t.tabIndex=-1),this.tabIndex=0}this.change.emit(new na(this,this.value))}_markForCheck(){this._changeDetectorRef.markForCheck()}_getButtonName(){return this.isSingleSelector()?this.buttonToggleGroup.name:this.name||null}isSingleSelector(){return this.buttonToggleGroup&&!this.buttonToggleGroup.multiple}static ɵfac=function(t){return new(t||n)};static ɵcmp=NC({type:n,selectors:[[`mat-button-toggle`]],viewQuery:function(t,i){if(t&1&&qg(Tp,5),t&2){let o;Ww(o=qw())&&(i._buttonElement=o.first)}},hostAttrs:[`role`,`presentation`,1,`mat-button-toggle`],hostVars:14,hostBindings:function(t,i){t&1&&Ug(`focus`,function(){return i.focus()}),t&2&&(Rg(`aria-label`,null)(`aria-labelledby`,null)(`id`,i.id)(`name`,null),Jg(`mat-button-toggle-standalone`,!i.buttonToggleGroup)(`mat-button-toggle-checked`,i.checked)(`mat-button-toggle-disabled`,i.disabled)(`mat-button-toggle-disabled-interactive`,i.disabledInteractive)(`mat-button-toggle-appearance-standard`,i.appearance===`standard`))},inputs:{ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`],id:`id`,name:`name`,value:`value`,tabIndex:`tabIndex`,disableRipple:[2,`disableRipple`,`disableRipple`,mo$2],appearance:`appearance`,checked:[2,`checked`,`checked`,mo$2],disabled:[2,`disabled`,`disabled`,mo$2],disabledInteractive:[2,`disabledInteractive`,`disabledInteractive`,mo$2]},outputs:{change:`change`},exportAs:[`matButtonToggle`],ngContentSelectors:Mp,decls:7,vars:13,consts:[[`button`,``],[`type`,`button`,1,`mat-button-toggle-button`,`mat-focus-indicator`,3,`click`,`id`,`disabled`],[1,`mat-button-toggle-checkbox-wrapper`],[1,`mat-button-toggle-label-content`],[1,`mat-button-toggle-focus-overlay`],[`matRipple`,``,1,`mat-button-toggle-ripple`,3,`matRippleTrigger`,`matRippleDisabled`],[`state`,`checked`,`aria-hidden`,`true`,`appearance`,`minimal`,3,`disabled`]],template:function(t,i){if(t&1&&(Uw(),cs$1(0,`button`,1,0),Ug(`click`,function(){return i._onButtonClick()}),Nw(2,Np,2,1,`div`,2),cs$1(3,`span`,3),Gw(4),Ju$1()(),kg(5,`span`,4)(6,`span`,5)),t&2){let o=Yw(1);Og(`id`,i.buttonId)(`disabled`,i.disabled&&!i.disabledInteractive||null),Rg(`role`,i.isSingleSelector()?`radio`:`button`)(`tabindex`,i.disabled&&!i.disabledInteractive?-1:i.tabIndex)(`aria-pressed`,i.isSingleSelector()?null:i.checked)(`aria-checked`,i.isSingleSelector()?i.checked:null)(`name`,i._getButtonName())(`aria-label`,i.ariaLabel)(`aria-labelledby`,i.ariaLabelledby)(`aria-disabled`,i.disabled&&i.disabledInteractive?`true`:null),lI(2),xw(i.buttonToggleGroup&&(!i.buttonToggleGroup.multiple&&!i.buttonToggleGroup.hideSingleSelectionIndicator||i.buttonToggleGroup.multiple&&!i.buttonToggleGroup.hideMultipleSelectionIndicator)?2:-1),lI(4),Og(`matRippleTrigger`,o)(`matRippleDisabled`,i.disableRipple||i.disabled)}},dependencies:[Tn$1,Ui],styles:[`.mat-button-toggle-standalone,
.mat-button-toggle-group {
  position: relative;
  display: inline-flex;
  flex-direction: row;
  white-space: nowrap;
  overflow: hidden;
  -webkit-tap-highlight-color: transparent;
  border-radius: var(--%NS%mat-button-toggle-legacy-shape);
  transform: translateZ(0);
}
.mat-button-toggle-standalone:not([class*=mat-elevation-z]),
.mat-button-toggle-group:not([class*=mat-elevation-z]) {
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
}
@media (forced-colors: active) {
  .mat-button-toggle-standalone,
  .mat-button-toggle-group {
    outline: solid 1px;
  }
}

.mat-button-toggle-standalone.mat-button-toggle-appearance-standard,
.mat-button-toggle-group-appearance-standard {
  border-radius: var(--%NS%mat-button-toggle-shape, var(--%NS%mat-sys-corner-extra-large));
  border: solid 1px var(--%NS%mat-button-toggle-divider-color, var(--%NS%mat-sys-outline));
}
.mat-button-toggle-standalone.mat-button-toggle-appearance-standard .mat-pseudo-checkbox,
.mat-button-toggle-group-appearance-standard .mat-pseudo-checkbox {
  --%NS%mat-pseudo-checkbox-minimal-selected-checkmark-color: var(--%NS%mat-button-toggle-selected-state-text-color, var(--%NS%mat-sys-on-secondary-container));
}
.mat-button-toggle-standalone.mat-button-toggle-appearance-standard:not([class*=mat-elevation-z]),
.mat-button-toggle-group-appearance-standard:not([class*=mat-elevation-z]) {
  box-shadow: none;
}
@media (forced-colors: active) {
  .mat-button-toggle-standalone.mat-button-toggle-appearance-standard,
  .mat-button-toggle-group-appearance-standard {
    outline: 0;
  }
}

.mat-button-toggle-vertical {
  flex-direction: column;
}
.mat-button-toggle-vertical .mat-button-toggle-label-content {
  display: block;
}

.mat-button-toggle {
  white-space: nowrap;
  position: relative;
  color: var(--%NS%mat-button-toggle-legacy-text-color);
  font-family: var(--%NS%mat-button-toggle-legacy-label-text-font);
  font-size: var(--%NS%mat-button-toggle-legacy-label-text-size);
  line-height: var(--%NS%mat-button-toggle-legacy-label-text-line-height);
  font-weight: var(--%NS%mat-button-toggle-legacy-label-text-weight);
  letter-spacing: var(--%NS%mat-button-toggle-legacy-label-text-tracking);
  --%NS%mat-pseudo-checkbox-minimal-selected-checkmark-color: var(--%NS%mat-button-toggle-legacy-selected-state-text-color);
}
.mat-button-toggle.cdk-keyboard-focused .mat-button-toggle-focus-overlay {
  opacity: var(--%NS%mat-button-toggle-legacy-focus-state-layer-opacity);
}
.mat-button-toggle .mat-icon svg {
  vertical-align: top;
}

.mat-button-toggle-checkbox-wrapper {
  display: inline-block;
  justify-content: flex-start;
  align-items: center;
  width: 0;
  height: 18px;
  line-height: 18px;
  overflow: hidden;
  box-sizing: border-box;
  position: absolute;
  top: 50%;
  left: 16px;
  transform: translate3d(0, -50%, 0);
}
[dir=rtl] .mat-button-toggle-checkbox-wrapper {
  left: auto;
  right: 16px;
}
.mat-button-toggle-appearance-standard .mat-button-toggle-checkbox-wrapper {
  left: 12px;
}
[dir=rtl] .mat-button-toggle-appearance-standard .mat-button-toggle-checkbox-wrapper {
  left: auto;
  right: 12px;
}
.mat-button-toggle-checked .mat-button-toggle-checkbox-wrapper {
  width: 18px;
}
.mat-button-toggle-animations-enabled .mat-button-toggle-checkbox-wrapper {
  transition: width 150ms 45ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-button-toggle-vertical .mat-button-toggle-checkbox-wrapper {
  transition: none;
}

.mat-button-toggle-checked {
  color: var(--%NS%mat-button-toggle-legacy-selected-state-text-color);
  background-color: var(--%NS%mat-button-toggle-legacy-selected-state-background-color);
}

.mat-button-toggle-disabled {
  pointer-events: none;
  color: var(--%NS%mat-button-toggle-legacy-disabled-state-text-color);
  background-color: var(--%NS%mat-button-toggle-legacy-disabled-state-background-color);
  --%NS%mat-pseudo-checkbox-minimal-disabled-selected-checkmark-color: var(--%NS%mat-button-toggle-legacy-disabled-state-text-color);
}
.mat-button-toggle-disabled.mat-button-toggle-checked {
  background-color: var(--%NS%mat-button-toggle-legacy-disabled-selected-state-background-color);
}

.mat-button-toggle-disabled-interactive {
  pointer-events: auto;
}

.mat-button-toggle-appearance-standard {
  color: var(--%NS%mat-button-toggle-text-color, var(--%NS%mat-sys-on-surface));
  background-color: var(--%NS%mat-button-toggle-background-color, transparent);
  font-family: var(--%NS%mat-button-toggle-label-text-font, var(--%NS%mat-sys-label-large-font));
  font-size: var(--%NS%mat-button-toggle-label-text-size, var(--%NS%mat-sys-label-large-size));
  line-height: var(--%NS%mat-button-toggle-label-text-line-height, var(--%NS%mat-sys-label-large-line-height));
  font-weight: var(--%NS%mat-button-toggle-label-text-weight, var(--%NS%mat-sys-label-large-weight));
  letter-spacing: var(--%NS%mat-button-toggle-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
}
.mat-button-toggle-group-appearance-standard .mat-button-toggle-appearance-standard + .mat-button-toggle-appearance-standard {
  border-left: solid 1px var(--%NS%mat-button-toggle-divider-color, var(--%NS%mat-sys-outline));
}
[dir=rtl] .mat-button-toggle-group-appearance-standard .mat-button-toggle-appearance-standard + .mat-button-toggle-appearance-standard {
  border-left: none;
  border-right: solid 1px var(--%NS%mat-button-toggle-divider-color, var(--%NS%mat-sys-outline));
}
.mat-button-toggle-group-appearance-standard.mat-button-toggle-vertical .mat-button-toggle-appearance-standard + .mat-button-toggle-appearance-standard {
  border-left: none;
  border-right: none;
  border-top: solid 1px var(--%NS%mat-button-toggle-divider-color, var(--%NS%mat-sys-outline));
}
.mat-button-toggle-appearance-standard.mat-button-toggle-checked {
  color: var(--%NS%mat-button-toggle-selected-state-text-color, var(--%NS%mat-sys-on-secondary-container));
  background-color: var(--%NS%mat-button-toggle-selected-state-background-color, var(--%NS%mat-sys-secondary-container));
}
.mat-button-toggle-appearance-standard.mat-button-toggle-disabled {
  color: var(--%NS%mat-button-toggle-disabled-state-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  background-color: var(--%NS%mat-button-toggle-disabled-state-background-color, transparent);
}
.mat-button-toggle-appearance-standard.mat-button-toggle-disabled .mat-pseudo-checkbox {
  --%NS%mat-pseudo-checkbox-minimal-disabled-selected-checkmark-color: var(--%NS%mat-button-toggle-disabled-selected-state-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-button-toggle-appearance-standard.mat-button-toggle-disabled.mat-button-toggle-checked {
  color: var(--%NS%mat-button-toggle-disabled-selected-state-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  background-color: var(--%NS%mat-button-toggle-disabled-selected-state-background-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mat-button-toggle-appearance-standard .mat-button-toggle-focus-overlay {
  background-color: var(--%NS%mat-button-toggle-state-layer-color, var(--%NS%mat-sys-on-surface));
}
.mat-button-toggle-appearance-standard:hover .mat-button-toggle-focus-overlay {
  opacity: var(--%NS%mat-button-toggle-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-button-toggle-appearance-standard.cdk-keyboard-focused .mat-button-toggle-focus-overlay {
  opacity: var(--%NS%mat-button-toggle-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
@media (hover: none) {
  .mat-button-toggle-appearance-standard:hover .mat-button-toggle-focus-overlay {
    display: none;
  }
}

.mat-button-toggle-label-content {
  -webkit-user-select: none;
  user-select: none;
  display: inline-block;
  padding: 0 16px;
  line-height: var(--%NS%mat-button-toggle-legacy-height);
  position: relative;
}
.mat-button-toggle-appearance-standard .mat-button-toggle-label-content {
  padding: 0 12px;
  line-height: var(--%NS%mat-button-toggle-height, 40px);
}

.mat-button-toggle-label-content > * {
  vertical-align: middle;
}

.mat-button-toggle-focus-overlay {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
  pointer-events: none;
  opacity: 0;
  background-color: var(--%NS%mat-button-toggle-legacy-state-layer-color);
}

@media (forced-colors: active) {
  .mat-button-toggle-checked .mat-button-toggle-focus-overlay {
    border-bottom: solid 500px;
    opacity: 0.5;
    height: 0;
  }
  .mat-button-toggle-checked:hover .mat-button-toggle-focus-overlay {
    opacity: 0.6;
  }
  .mat-button-toggle-checked.mat-button-toggle-appearance-standard .mat-button-toggle-focus-overlay {
    border-bottom: solid 500px;
  }
}
.mat-button-toggle .mat-button-toggle-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}

.mat-button-toggle-button {
  border: 0;
  background: none;
  color: inherit;
  padding: 0;
  margin: 0;
  font: inherit;
  outline: none;
  width: 100%;
  cursor: pointer;
}
.mat-button-toggle-animations-enabled .mat-button-toggle-button {
  transition: padding 150ms 45ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-button-toggle-vertical .mat-button-toggle-button {
  transition: none;
}
.mat-button-toggle-disabled .mat-button-toggle-button {
  cursor: default;
}
.mat-button-toggle-button::-moz-focus-inner {
  border: 0;
}
.mat-button-toggle-checked .mat-button-toggle-button:has(.mat-button-toggle-checkbox-wrapper) {
  padding-left: 30px;
}
[dir=rtl] .mat-button-toggle-checked .mat-button-toggle-button:has(.mat-button-toggle-checkbox-wrapper) {
  padding-left: 0;
  padding-right: 30px;
}

.mat-button-toggle-standalone.mat-button-toggle-appearance-standard {
  --%NS%mat-focus-indicator-border-radius: var(--%NS%mat-button-toggle-shape, var(--%NS%mat-sys-corner-extra-large));
}

.mat-button-toggle-group-appearance-standard:not(.mat-button-toggle-vertical) .mat-button-toggle:last-of-type .mat-button-toggle-button::before {
  border-top-right-radius: var(--%NS%mat-button-toggle-shape, var(--%NS%mat-sys-corner-extra-large));
  border-bottom-right-radius: var(--%NS%mat-button-toggle-shape, var(--%NS%mat-sys-corner-extra-large));
}
.mat-button-toggle-group-appearance-standard:not(.mat-button-toggle-vertical) .mat-button-toggle:first-of-type .mat-button-toggle-button::before {
  border-top-left-radius: var(--%NS%mat-button-toggle-shape, var(--%NS%mat-sys-corner-extra-large));
  border-bottom-left-radius: var(--%NS%mat-button-toggle-shape, var(--%NS%mat-sys-corner-extra-large));
}

.mat-button-toggle-group-appearance-standard.mat-button-toggle-vertical .mat-button-toggle:last-of-type .mat-button-toggle-button::before {
  border-bottom-right-radius: var(--%NS%mat-button-toggle-shape, var(--%NS%mat-sys-corner-extra-large));
  border-bottom-left-radius: var(--%NS%mat-button-toggle-shape, var(--%NS%mat-sys-corner-extra-large));
}
.mat-button-toggle-group-appearance-standard.mat-button-toggle-vertical .mat-button-toggle:first-of-type .mat-button-toggle-button::before {
  border-top-right-radius: var(--%NS%mat-button-toggle-shape, var(--%NS%mat-sys-corner-extra-large));
  border-top-left-radius: var(--%NS%mat-button-toggle-shape, var(--%NS%mat-sys-corner-extra-large));
}
`],encapsulation:2})}return n})();var $t=(()=>{class n{constructor(){this.action=Zj.required(),this._data=Zj(void 0,{alias:`data`}),this.data=qe$3(()=>this._data()),this.defaultTooltipPosition=`left`,this.tooltipPosition=qe$3(()=>this.action().tooltip?.position??this.defaultTooltipPosition),this.hidden=qe$3(()=>hi$2(this.action().hide,this.data)),this.disabled=qe$3(()=>hi$2(this.action().disabled,this.data)),this.label=qe$3(()=>ci$3(this.action().label,this.data)),this.ariaLabel=qe$3(()=>We$2(this.action().ariaLabel,this.data)),this.suffixIcon=qe$3(()=>We$2(this.action().suffixIcon,this.data)),this.prefixIcon=qe$3(()=>We$2(this.action().prefixIcon,this.data)),this.subActions=qe$3(()=>di$3(this.action().subActions,this.data))}doAction(e){this.action()?.keepMenuOpen&&e.stopPropagation(),this.action()?.action?.({event:e,data:this.data(),actionRef:this})}close(){}static{this.ɵfac=function(t){return new(t||n)}}static{this.ɵdir=En$3({type:n,selectors:[[``,`lab900Action`,``]],inputs:{action:[1,`action`],_data:[1,`data`,`_data`]},exportAs:[`lab900Action`]})}}return n})();var Ep=(n,a)=>a.label;function Ap(n,a){n&1&&(cs$1(0,`mat-icon`),yb$1(1),Ju$1()),n&2&&(lI(),im$1(a))}function Rp(n,a){n&1&&(cs$1(0,`mat-icon`),yb$1(1),Ju$1()),n&2&&(lI(),im$1(a))}function Fp(n,a){if(n&1){let e=Vw();cs$1(0,`mat-button-toggle`,3,0),Ug(`throttledClick`,function(i){Wd$1(e);return qd$1(Yw(1).doAction(i))}),Nw(2,Ap,2,1,`mat-icon`),cs$1(3,`span`),yb$1(4),kb$1(5,`translate`),Ju$1(),Nw(6,Rp,2,1,`mat-icon`),Ju$1()}if(n&2){let e,t,i=a.$implicit,o=Yw(1),r=Hw(3);Og(`action`,i)(`data`,r.data())(`value`,o.action())(`disabled`,r.disabled()||o.disabled()),lI(2),xw((e=o.prefixIcon())?2:-1,e),lI(2),im$1(Lb$1(5,7,o.label())),lI(2),xw((t=o.suffixIcon())?6:-1,t)}}function Pp(n,a){if(n&1&&(cs$1(0,`mat-button-toggle-group`,1),Ow(1,Fp,7,9,`mat-button-toggle`,2,Ep),Ju$1()),n&2){let e=Hw(2);Og(`value`,e.selected())(`disabled`,e.disabled())(`hideSingleSelectionIndicator`,e.hideSingleSelectionIndicator()),lI(),kw(e.visibleSubActions())}}function Op(n,a){if(n&1&&Nw(0,Pp,3,3,`mat-button-toggle-group`,1),n&2){let e=Hw().subActions();xw(e&&e?.length?0:-1)}}var rl=(()=>{class n extends $t{constructor(){super(...arguments),this.selected=il(()=>{let e=this.subActions();if(e){for(let t of e)if(hi$2(t.selected,this.data))return t}return null}),this.visibleSubActions=qe$3(()=>this.subActions()?.filter(e=>!hi$2(e.hide,this.data))??[]),this.hideSingleSelectionIndicator=qe$3(()=>hi$2(this.action().hideSelectionIndicator,this.data))}static{this.ɵfac=(()=>{let e;return function(i){return(e||(e=Cp$1(n)))(i||n)}})()}static{this.ɵcmp=NC({type:n,selectors:[[`lab900-action-button-toggle`]],features:[Dg],decls:1,vars:1,consts:[[`subAction`,`lab900Action`],[3,`value`,`disabled`,`hideSingleSelectionIndicator`],[`lab900Action`,``,`lab900PreventDoubleClick`,``,3,`action`,`data`,`value`,`disabled`],[`lab900Action`,``,`lab900PreventDoubleClick`,``,3,`throttledClick`,`action`,`data`,`value`,`disabled`]],template:function(t,i){t&1&&Nw(0,Op,1,1),t&2&&xw(i.hidden()?-1:0)},dependencies:[io,ao,Fe,xn,$t,xn$4],encapsulation:2})}}return n})();var Lp=(n,a)=>a.label;function Vp(n,a){n&1&&(cs$1(0,`mat-icon`),yb$1(1),Ju$1()),n&2&&(lI(),im$1(a))}function Bp(n,a){n&1&&(cs$1(0,`mat-icon`),yb$1(1),Ju$1()),n&2&&(lI(),im$1(a))}function zp(n,a){if(n&1&&(cs$1(0,`button`,5),kg(1,`lab900-action-button-menu-item`,6),Ju$1()),n&2){let e=a.$implicit,t=Hw(4);Og(`disabled`,t.disabled()),lI(),Og(`action`,e)(`data`,t.data())(`menuDisabled`,t.disabled())}}function Hp(n,a){if(n&1&&Ow(0,zp,2,4,`button`,5,Lp),n&2){Hw(2);kw(Cb$1(0))}}function jp(n,a){if(n&1){let e=Vw();cs$1(0,`button`,3,0),kb$1(2,`translate`),Ug(`mouseenter`,function(){Wd$1(e);return qd$1(Yw(1).openMenu())}),Nw(3,Vp,2,1,`mat-icon`),cs$1(4,`span`),yb$1(5),kb$1(6,`translate`),Ju$1(),Nw(7,Bp,2,1,`mat-icon`),Ju$1(),cs$1(8,`mat-menu`,null,1),Ig(10,Hp,2,0,`ng-template`,4),Ju$1()}if(n&2){let e,t,i=Yw(9),o=Hw(2);Og(`matMenuTriggerFor`,i)(`disabled`,o.menuItemDisabled())(`matTooltip`,o.tooltipValue()?Lb$1(2,7,o.tooltipValue()):``)(`matTooltipPosition`,o.tooltipPosition()),lI(3),xw((e=o.prefixIcon())?3:-1,e),lI(2),im$1(Lb$1(6,9,o.label())),lI(2),xw((t=o.suffixIcon())?7:-1,t)}}function Gp(n,a){n&1&&(cs$1(0,`mat-icon`),yb$1(1),Ju$1()),n&2&&(lI(),im$1(a))}function Wp(n,a){n&1&&(cs$1(0,`mat-icon`),yb$1(1),Ju$1()),n&2&&(lI(),im$1(a))}function qp(n,a){if(n&1){let e=Vw();cs$1(0,`button`,7),kb$1(1,`translate`),Ug(`throttledClick`,function(i){Wd$1(e);return qd$1(Hw(2).doAction(i))}),Nw(2,Gp,2,1,`mat-icon`),cs$1(3,`span`),yb$1(4),kb$1(5,`translate`),Ju$1(),Nw(6,Wp,2,1,`mat-icon`),Ju$1()}if(n&2){let e,t,i=Hw(2);Og(`disabled`,i.menuItemDisabled())(`matTooltip`,i.tooltipValue()?Lb$1(1,6,i.tooltipValue()):``)(`matTooltipPosition`,i.tooltipPosition()),lI(2),xw((e=i.prefixIcon())?2:-1,e),lI(2),im$1(Lb$1(5,8,i.label())),lI(2),xw((t=i.suffixIcon())?6:-1,t)}}function $p(n,a){if(n&1&&(dm$1(0),Nw(1,jp,11,11)(2,qp,7,10,`button`,2)),n&2){let e=Ib$1(Hw().subActions());lI(),xw(e&&e?.length?1:2)}}var sl=(()=>{class n extends $t{constructor(){super(...arguments),this.menuDisabled=Zj(!1),this.menuItemDisabled=qe$3(()=>this.menuDisabled()||this.disabled()),this.tooltipValue=qe$3(()=>ci$3(this.action().tooltip?.value,this.data))}static{this.ɵfac=(()=>{let e;return function(i){return(e||(e=Cp$1(n)))(i||n)}})()}static{this.ɵcmp=NC({type:n,selectors:[[`lab900-action-button-menu-item`]],inputs:{menuDisabled:[1,`menuDisabled`]},features:[Dg],decls:1,vars:1,consts:[[`trigger`,`matMenuTrigger`],[`sub`,`matMenu`],[`mat-menu-item`,``,`lab900PreventDoubleClick`,``,3,`disabled`,`matTooltip`,`matTooltipPosition`],[`mat-menu-item`,``,`lab900PreventDoubleClick`,``,3,`mouseenter`,`matMenuTriggerFor`,`disabled`,`matTooltip`,`matTooltipPosition`],[`matMenuContent`,``],[`mat-menu-item`,``,2,`padding`,`0`,3,`disabled`],[3,`action`,`data`,`menuDisabled`],[`mat-menu-item`,``,`lab900PreventDoubleClick`,``,3,`throttledClick`,`disabled`,`matTooltip`,`matTooltipPosition`]],template:function(t,i){t&1&&Nw(0,$p,3,2),t&2&&xw(i.hidden()?-1:0)},dependencies:[n,Vt$3,ta,wt,qt,ea,Dn,Fe,xn,xn$4],encapsulation:2})}}return n})();var Up=(n,a)=>a.label;function Qp(n,a){if(n&1&&(cs$1(0,`button`,5),kg(1,`lab900-action-button-menu-item`,6),Ju$1()),n&2){let e=a.$implicit,t=Hw(5);Og(`disabled`,t.disabled()),lI(),Og(`action`,e)(`data`,t.data())(`menuDisabled`,t.disabled())}}function Zp(n,a){if(n&1&&Ow(0,Qp,2,4,`button`,5,Up),n&2){Hw(2);kw(Cb$1(0))}}function Xp(n,a){if(n&1&&(cs$1(0,`lab900-button`,3),kb$1(1,`translate`),Ug(`click`,function(t){return t.stopPropagation()}),Ju$1(),cs$1(2,`mat-menu`,null,0),Ig(4,Zp,2,0,`ng-template`,4),Ju$1()),n&2){let e=Yw(3);Hw(2);let t=Cb$1(0),i=Hw();Og(`type`,t)(`matMenuTriggerFor`,e)(`label`,i.label())(`ariaLabel`,i.accessibleLabel())(`matTooltip`,i.tooltipValue()?Lb$1(1,11,i.tooltipValue()):``)(`prefixIcon`,i.prefixIcon())(`suffixIcon`,i.suffixIcon())(`matTooltipPosition`,i.tooltipPosition())(`svgIcon`,!!i.action().svgIcon)(`containerClass`,i.containerClass())(`id`,i.buttonId())}}function Kp(n,a){if(n&1){let e=Vw();cs$1(0,`lab900-button`,7),kb$1(1,`translate`),Ug(`btnClick`,function(i){Wd$1(e);return qd$1(Hw(3).doAction(i))}),Ju$1()}if(n&2){Hw(2);let e=Cb$1(0),t=Hw();Og(`type`,e)(`color`,t.themeColor())(`disabled`,t.disabled())(`label`,t.label())(`ariaLabel`,t.accessibleLabel())(`matTooltip`,t.tooltipValue()?Lb$1(1,12,t.tooltipValue()):``)(`prefixIcon`,t.prefixIcon())(`suffixIcon`,t.suffixIcon())(`matTooltipPosition`,t.tooltipPosition())(`svgIcon`,!!t.action().svgIcon)(`containerClass`,t.containerClass())(`id`,t.buttonId())}}function Yp(n,a){if(n&1&&(dm$1(0),Nw(1,Xp,5,13)(2,Kp,2,14,`lab900-button`,2)),n&2){let e=Ib$1(Hw(2).subActions());lI(),xw(e&&e?.length?1:2)}}function Jp(n,a){if(n&1&&kg(0,`lab900-action-button-toggle`,1),n&2){let e=Hw(2);Og(`action`,e.action())(`data`,e.data())}}function eu(n,a){if(n&1&&(dm$1(0),Nw(1,Yp,3,2)(2,Jp,1,2,`lab900-action-button-toggle`,1)),n&2){let e=Ib$1(Hw().buttonType());lI(),xw(e!==`toggle`?1:2)}}var Ft=(()=>{class n extends $t{constructor(){super(...arguments),this.defaultTooltipPosition=`above`,this.buttonType=qe$3(()=>di$3(this.action().type,this.data)),this.themeColor=qe$3(()=>di$3(this.action().color,this.data)),this.containerClass=qe$3(()=>We$2(this.action().containerClass,this.data)),this.buttonId=qe$3(()=>We$2(this.action().buttonId,this.data)),this.tooltipValue=qe$3(()=>ci$3(this.action().tooltip?.value,this.data)),this.accessibleLabel=qe$3(()=>{let e=this.buttonType(),t=e===`icon`||e===`fab`||e===`mini-fab`;return this.ariaLabel()||t&&this.tooltipValue()||void 0})}static{this.ɵfac=(()=>{let e;return function(i){return(e||(e=Cp$1(n)))(i||n)}})()}static{this.ɵcmp=NC({type:n,selectors:[[`lab900-action-button`]],features:[Dg],decls:1,vars:1,consts:[[`sub`,`matMenu`],[3,`action`,`data`],[3,`type`,`color`,`disabled`,`label`,`ariaLabel`,`matTooltip`,`prefixIcon`,`suffixIcon`,`matTooltipPosition`,`svgIcon`,`containerClass`,`id`],[3,`click`,`type`,`matMenuTriggerFor`,`label`,`ariaLabel`,`matTooltip`,`prefixIcon`,`suffixIcon`,`matTooltipPosition`,`svgIcon`,`containerClass`,`id`],[`matMenuContent`,``],[`mat-menu-item`,``,2,`padding`,`0`,3,`disabled`],[3,`action`,`data`,`menuDisabled`],[3,`btnClick`,`type`,`color`,`disabled`,`label`,`ariaLabel`,`matTooltip`,`prefixIcon`,`suffixIcon`,`matTooltipPosition`,`svgIcon`,`containerClass`,`id`]],template:function(t,i){t&1&&Nw(0,eu,3,2),t&2&&xw(i.hidden()?-1:0)},dependencies:[Yi,Vt$3,rl,sl,ta,wt,qt,ea,Dn,xn$4],encapsulation:2})}}return n})();function tu(n,a){if(n&1&&(cs$1(0,`h1`),yb$1(1),kb$1(2,`translate`),Ju$1()),n&2){let e=Hw(3);lI(),im$1(Pb$1(2,1,e.pageTitle,e.pageTitleArgs))}}function nu(n,a){if(n&1&&kg(0,`lab900-bread-crumbs`,4),n&2){let e=Hw(3);Og(`breadCrumbs`,e.breadCrumbs)(`data`,e.data)}}function iu(n,a){if(n&1&&(cs$1(0,`div`,3),Nw(1,tu,3,4,`h1`),Nw(2,nu,1,2,`lab900-bread-crumbs`,4),Ju$1()),n&2){let e=Hw(2);lI(),xw(e.pageTitle?1:-1),lI(),xw(e.breadCrumbs?.length?2:-1)}}function au(n,a){n&1&&kg(0,`mat-divider`,9)}function ou(n,a){if(n&1&&kg(0,`lab900-action-button`,8),n&2){let e=a.$implicit,t=Hw(5);Og(`action`,e)(`data`,t.data)}}function ru(n,a){if(n&1&&(cs$1(0,`div`,6),Nw(1,au,1,0,`mat-divider`,9),Ow(2,ou,1,2,`lab900-action-button`,8,Rw),Ju$1()),n&2){let e=a;lI(),xw(e?.length>0?1:-1),lI(),kw(e)}}function su(n,a){if(n&1&&kg(0,`lab900-action-button`,8),n&2){let e=a.$implicit,t=Hw(4);Og(`action`,e)(`data`,t.data)}}function lu(n,a){if(n&1&&(cs$1(0,`div`,5),Nw(1,ru,4,1,`div`,6),kb$1(2,`async`),cs$1(3,`div`,7),Ow(4,su,1,2,`lab900-action-button`,8,Rw),kb$1(6,`async`),Ju$1()()),n&2){let e,t=Hw(3);lI(),xw((e=Lb$1(2,1,t.leftActions$))?1:-1,e),lI(3),kw(Lb$1(6,3,t.rightActions$))}}function cu(n,a){n&1&&Nw(0,lu,7,5,`div`,5),n&2&&xw(a?.length?0:-1)}function du(n,a){if(n&1&&(cs$1(0,`div`,1),Nw(1,iu,3,2,`div`,3),Nw(2,cu,1,1),kb$1(3,`async`),Ju$1()),n&2){let e,t=Hw();lI(),xw(t.pageTitle||t.breadCrumbs?.length?1:-1),lI(),xw((e=Lb$1(3,2,t.actions$))?2:-1,e)}}function mu(n,a){if(n&1&&kg(0,`lab900-page-header-nav-item`,10),n&2){let e=a.$implicit,t=Hw(2);Og(`item`,e)(`data`,t.data)}}function pu(n,a){if(n&1&&(cs$1(0,`nav`,2),Ow(1,mu,1,2,`lab900-page-header-nav-item`,10,Rw),Ju$1()),n&2){let e=Hw();Og(`tabPanel`,e.tabPanel)(`fitInkBarToContent`,e.navFitInkBarToContent)(`mat-stretch-tabs`,e.navStretch),lI(),kw(e.navItems)}}var ia=(()=>{class n{constructor(){this.pageTitleArgs={},this.showActionsFixedOnMobile=!0,this.navFitInkBarToContent=!1,this.navStretch=!1,this._actions$=new Ft$4,this.actions$=this._actions$.asObservable(),this.leftActions$=this.actions$.pipe(Ye$2(([...e])=>e?.filter(t=>t.align===`left`))),this.rightActions$=this.actions$.pipe(Ye$2(([...e])=>e?.filter(t=>t.align!==`left`)))}set actions(e){this._actions$.next(e)}static{this.ɵfac=function(t){return new(t||n)}}static{this.ɵcmp=NC({type:n,selectors:[[`lab900-page-header`]],inputs:{pageTitle:`pageTitle`,pageTitleArgs:`pageTitleArgs`,navItems:`navItems`,tabPanel:`tabPanel`,showActionsFixedOnMobile:`showActionsFixedOnMobile`,navFitInkBarToContent:`navFitInkBarToContent`,actions:`actions`,data:`data`,breadCrumbs:`breadCrumbs`},decls:4,vars:6,consts:[[1,`lab900-page-header`],[1,`lab900-page-header__main`],[`mat-tab-nav-bar`,``,1,`lab900-page-header__nav`,3,`tabPanel`,`fitInkBarToContent`,`mat-stretch-tabs`],[1,`lab900-page-header__title`],[3,`breadCrumbs`,`data`],[1,`lab900-page-header__actions`],[1,`lab900-page-header__actions--left`],[1,`lab900-page-header__actions--right`],[3,`action`,`data`],[`vertical`,`true`,1,`lab900-page-header__divider`],[3,`item`,`data`]],template:function(t,i){t&1&&(cs$1(0,`header`,0),Nw(1,du,4,4,`div`,1),kb$1(2,`async`),Nw(3,pu,3,3,`nav`,2),Ju$1()),t&2&&(Jg(`fixed-mobile-action`,i.showActionsFixedOnMobile),lI(),xw(i.pageTitle||i.breadCrumbs?.length||Lb$1(2,4,i.actions$)?.length?1:-1),lI(2),xw(i.navItems?.length&&i.tabPanel?3:-1))},dependencies:[Js,tl,Ft,Ds,Xn,R_$1,xn$4],styles:[`.lab900-page-header__main h1{margin:0}@media screen and (min-width:960px){.lab900-page-header.fixed-mobile-action .lab900-page-header__main{display:flex;flex-wrap:wrap;gap:8px;align-items:center}}.lab900-page-header:not(.fixed-mobile-action) .lab900-page-header__main{display:flex;flex-wrap:wrap;gap:8px;align-items:center}.lab900-page-header .mat-divider{height:100%}.lab900-page-header__title{min-width:fit-content}.lab900-page-header__actions{min-width:unset!important;flex:1;display:flex;flex-direction:row;justify-content:space-between}.lab900-page-header__actions--left{display:flex;justify-content:flex-start;gap:8px;align-items:center}.lab900-page-header__actions--right{display:flex;justify-content:flex-end;flex-wrap:wrap;gap:8px;align-items:center}.lab900-page-header__actions .mat-mdc-icon-button{padding:0}@media screen and (min-width:960px){.lab900-page-header__nav{padding:0 50px}.lab900-page-header__main{padding:30px 50px}}@media screen and (max-width:959px){.lab900-page-header h1{font-size:1.4em}.lab900-page-header.fixed-mobile-action .lab900-page-header__main h1{padding:24px 16px 16px}.lab900-page-header.fixed-mobile-action .lab900-page-header__actions{padding:8px 16px;background:#fff;border-top:1px solid rgba(0,0,0,.2);z-index:10;position:fixed;bottom:0;left:0;right:0;align-items:center;justify-content:center}.lab900-page-header.fixed-mobile-action .lab900-page-header__divider{display:none}}@media screen and (max-width:600px){.lab900-page-header h1{font-size:1.6em}}
`],encapsulation:2})}}return n})();var ll=`
<?xml version="1.0" encoding="UTF-8" standalone="no"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<svg height="100%" style="fill-rule:nonzero;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="100%" xmlns:vectornator="http://vectornator.io" version="1.1" viewBox="0 0 24 24">
  <defs/>
  <g id="layer">
    <path d="M21.5185+16L17.5185+12L17.5185+15L2.51848+15L2.51848+17L17.5185+17L17.5185+20L21.5185+16Z" opacity="1" />
    <path d="M12+4.84375C9.85925+4.84375+8.125+6.578+8.125+8.71875C8.125+10.8595+9.85925+12.5937+12+12.5938C14.1407+12.5938+15.875+10.8595+15.875+8.71875C15.875+6.578+14.1407+4.84375+12+4.84375ZM12+5.84375C13.5885+5.84375+14.875+7.13029+14.875+8.71875C14.875+10.3072+13.5885+11.5937+12+11.5938C10.4115+11.5938+9.125+10.3072+9.125+8.71875C9.125+7.13029+10.4115+5.84375+12+5.84375Z" opacity="1" />
    <path d="M10.1594+9.06496L10.1594+8.17287L11.5608+8.17287L11.5608+6.7715L12.4597+6.7715L12.4597+8.17287L13.8611+8.17287L13.8611+9.06496L12.4597+9.06496L12.4597+10.4732L11.5608+10.4732L11.5608+9.06496L10.1594+9.06496Z" opacity="1" />
  </g>
</svg>
`;function uu(n,a){n&1&&Fg(0,`div`,2)}var hu=new S$1(`MAT_PROGRESS_BAR_DEFAULT_OPTIONS`);var aa=(()=>{class n{_elementRef=g$2(it$2);_ngZone=g$2(U$4);_changeDetectorRef=g$2(Ls$1);_renderer=g$2(gn$5);_cleanupTransitionEnd;constructor(){let e=tn$2(),t=g$2(hu,{optional:!0});this._isNoopAnimation=e===`di-disabled`,e===`reduced-motion`&&this._elementRef.nativeElement.classList.add(`mat-progress-bar-reduced-motion`),t&&(t.color&&(this.color=this._defaultColor=t.color),this.mode=t.mode||this.mode)}_isNoopAnimation;get color(){return this._color||this._defaultColor}set color(e){this._color=e}_color;_defaultColor=`primary`;get value(){return this._value}set value(e){this._value=cl(e||0),this._changeDetectorRef.markForCheck()}_value=0;get bufferValue(){return this._bufferValue||0}set bufferValue(e){this._bufferValue=cl(e||0),this._changeDetectorRef.markForCheck()}_bufferValue=0;animationEnd=new Ke$2;get mode(){return this._mode}set mode(e){this._mode=e,this._changeDetectorRef.markForCheck()}_mode=`determinate`;ngAfterViewInit(){this._ngZone.runOutsideAngular(()=>{this._cleanupTransitionEnd=this._renderer.listen(this._elementRef.nativeElement,`transitionend`,this._transitionendHandler)})}ngOnDestroy(){this._cleanupTransitionEnd?.()}_getPrimaryBarTransform(){return`scaleX(${this._isIndeterminate()?1:this.value/100})`}_getBufferBarFlexBasis(){return`${this.mode===`buffer`?this.bufferValue:100}%`}_isIndeterminate(){return this.mode===`indeterminate`||this.mode===`query`}_transitionendHandler=e=>{this.animationEnd.observers.length===0||!e.target||!e.target.classList.contains(`mdc-linear-progress__primary-bar`)||(this.mode===`determinate`||this.mode===`buffer`)&&this._ngZone.run(()=>this.animationEnd.next({value:this.value}))};static ɵfac=function(t){return new(t||n)};static ɵcmp=NC({type:n,selectors:[[`mat-progress-bar`]],hostAttrs:[`role`,`progressbar`,`aria-valuemin`,`0`,`aria-valuemax`,`100`,`tabindex`,`-1`,1,`mat-mdc-progress-bar`,`mdc-linear-progress`],hostVars:10,hostBindings:function(t,i){t&2&&(Rg(`aria-valuenow`,i._isIndeterminate()?null:i.value)(`mode`,i.mode),sb$1(`mat-`+i.color),Jg(`_mat-animation-noopable`,i._isNoopAnimation)(`mdc-linear-progress--animation-ready`,!i._isNoopAnimation)(`mdc-linear-progress--indeterminate`,i._isIndeterminate()))},inputs:{color:`color`,value:[2,`value`,`value`,yl$1],bufferValue:[2,`bufferValue`,`bufferValue`,yl$1],mode:`mode`},outputs:{animationEnd:`animationEnd`},exportAs:[`matProgressBar`],decls:7,vars:5,consts:[[`aria-hidden`,`true`,1,`mdc-linear-progress__buffer`],[1,`mdc-linear-progress__buffer-bar`],[1,`mdc-linear-progress__buffer-dots`],[`aria-hidden`,`true`,1,`mdc-linear-progress__bar`,`mdc-linear-progress__primary-bar`],[1,`mdc-linear-progress__bar-inner`],[`aria-hidden`,`true`,1,`mdc-linear-progress__bar`,`mdc-linear-progress__secondary-bar`]],template:function(t,i){t&1&&(Xu$1(0,`div`,0),Fg(1,`div`,1),Nw(2,uu,1,0,`div`,2),el$1(),Xu$1(3,`div`,3),Fg(4,`span`,4),el$1(),Xu$1(5,`div`,5),Fg(6,`span`,4),el$1()),t&2&&(lI(),Ms$1(`flex-basis`,i._getBufferBarFlexBasis()),lI(),xw(i.mode===`buffer`?2:-1),lI(),Ms$1(`transform`,i._getPrimaryBarTransform()))},styles:[`.mat-mdc-progress-bar {
  --%NS%mat-progress-bar-animation-multiplier: 1;
  display: block;
  text-align: start;
}
.mat-mdc-progress-bar[mode=query] {
  transform: scaleX(-1);
}
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__buffer-dots,
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__primary-bar,
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__secondary-bar,
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__bar-inner.mdc-linear-progress__bar-inner {
  animation: none;
}
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__primary-bar,
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__buffer-bar {
  transition: transform 1ms;
}

.mat-progress-bar-reduced-motion {
  --%NS%mat-progress-bar-animation-multiplier: 2;
}

.mdc-linear-progress {
  position: relative;
  width: 100%;
  transform: translateZ(0);
  outline: 1px solid transparent;
  overflow-x: hidden;
  transition: opacity 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
  height: max(var(--%NS%mat-progress-bar-track-height, 4px), var(--%NS%mat-progress-bar-active-indicator-height, 4px));
}
@media (forced-colors: active) {
  .mdc-linear-progress {
    outline-color: CanvasText;
  }
}

.mdc-linear-progress__bar {
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  width: 100%;
  animation: none;
  transform-origin: top left;
  transition: transform 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
  height: var(--%NS%mat-progress-bar-active-indicator-height, 4px);
}
.mdc-linear-progress--indeterminate .mdc-linear-progress__bar {
  transition: none;
}
[dir=rtl] .mdc-linear-progress__bar {
  right: 0;
  transform-origin: center right;
}

.mdc-linear-progress__bar-inner {
  display: inline-block;
  position: absolute;
  width: 100%;
  animation: none;
  border-top-style: solid;
  border-color: var(--%NS%mat-progress-bar-active-indicator-color, var(--%NS%mat-sys-primary));
  border-top-width: var(--%NS%mat-progress-bar-active-indicator-height, 4px);
}

.mdc-linear-progress__buffer {
  display: flex;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  width: 100%;
  overflow: hidden;
  height: var(--%NS%mat-progress-bar-track-height, 4px);
  border-radius: var(--%NS%mat-progress-bar-track-shape, var(--%NS%mat-sys-corner-none));
}

.mdc-linear-progress__buffer-dots {
  background-image: radial-gradient(circle, var(--%NS%mat-progress-bar-track-color, var(--%NS%mat-sys-surface-variant)) calc(var(--%NS%mat-progress-bar-track-height, 4px) / 2), transparent 0);
  background-repeat: repeat-x;
  background-size: calc(calc(var(--%NS%mat-progress-bar-track-height, 4px) / 2) * 5);
  background-position: left;
  flex: auto;
  transform: rotate(180deg);
  animation: mdc-linear-progress-buffering calc(250ms * var(--%NS%mat-progress-bar-animation-multiplier)) infinite linear;
}
@media (forced-colors: active) {
  .mdc-linear-progress__buffer-dots {
    background-color: ButtonBorder;
  }
}
[dir=rtl] .mdc-linear-progress__buffer-dots {
  animation: mdc-linear-progress-buffering-reverse calc(250ms * var(--%NS%mat-progress-bar-animation-multiplier)) infinite linear;
  transform: rotate(0);
}

.mdc-linear-progress__buffer-bar {
  flex: 0 1 100%;
  transition: flex-basis 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
  background-color: var(--%NS%mat-progress-bar-track-color, var(--%NS%mat-sys-surface-variant));
}

.mdc-linear-progress__primary-bar {
  transform: scaleX(0);
}
.mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar {
  left: -145.166611%;
}
.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar {
  animation: mdc-linear-progress-primary-indeterminate-translate calc(2s * var(--%NS%mat-progress-bar-animation-multiplier)) infinite linear;
}
.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar > .mdc-linear-progress__bar-inner {
  animation: mdc-linear-progress-primary-indeterminate-scale calc(2s * var(--%NS%mat-progress-bar-animation-multiplier)) infinite linear;
}
[dir=rtl] .mdc-linear-progress.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar {
  animation-name: mdc-linear-progress-primary-indeterminate-translate-reverse;
}
[dir=rtl] .mdc-linear-progress.mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar {
  right: -145.166611%;
  left: auto;
}

.mdc-linear-progress__secondary-bar {
  display: none;
}
.mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar {
  left: -54.888891%;
  display: block;
}
.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar {
  animation: mdc-linear-progress-secondary-indeterminate-translate calc(2s * var(--%NS%mat-progress-bar-animation-multiplier)) infinite linear;
}
.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar > .mdc-linear-progress__bar-inner {
  animation: mdc-linear-progress-secondary-indeterminate-scale calc(2s * var(--%NS%mat-progress-bar-animation-multiplier)) infinite linear;
}
[dir=rtl] .mdc-linear-progress.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar {
  animation-name: mdc-linear-progress-secondary-indeterminate-translate-reverse;
}
[dir=rtl] .mdc-linear-progress.mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar {
  right: -54.888891%;
  left: auto;
}

@keyframes mdc-linear-progress-buffering {
  from {
    transform: rotate(180deg) translateX(calc(var(--%NS%mat-progress-bar-track-height, 4px) * -2.5));
  }
}
@keyframes mdc-linear-progress-primary-indeterminate-translate {
  0% {
    transform: translateX(0);
  }
  20% {
    animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);
    transform: translateX(0);
  }
  59.15% {
    animation-timing-function: cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);
    transform: translateX(83.67142%);
  }
  100% {
    transform: translateX(200.611057%);
  }
}
@keyframes mdc-linear-progress-primary-indeterminate-scale {
  0% {
    transform: scaleX(0.08);
  }
  36.65% {
    animation-timing-function: cubic-bezier(0.334731, 0.12482, 0.785844, 1);
    transform: scaleX(0.08);
  }
  69.15% {
    animation-timing-function: cubic-bezier(0.06, 0.11, 0.6, 1);
    transform: scaleX(0.661479);
  }
  100% {
    transform: scaleX(0.08);
  }
}
@keyframes mdc-linear-progress-secondary-indeterminate-translate {
  0% {
    animation-timing-function: cubic-bezier(0.15, 0, 0.515058, 0.409685);
    transform: translateX(0);
  }
  25% {
    animation-timing-function: cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);
    transform: translateX(37.651913%);
  }
  48.35% {
    animation-timing-function: cubic-bezier(0.4, 0.627035, 0.6, 0.902026);
    transform: translateX(84.386165%);
  }
  100% {
    transform: translateX(160.277782%);
  }
}
@keyframes mdc-linear-progress-secondary-indeterminate-scale {
  0% {
    animation-timing-function: cubic-bezier(0.205028, 0.057051, 0.57661, 0.453971);
    transform: scaleX(0.08);
  }
  19.15% {
    animation-timing-function: cubic-bezier(0.152313, 0.196432, 0.648374, 1.004315);
    transform: scaleX(0.457104);
  }
  44.15% {
    animation-timing-function: cubic-bezier(0.257759, -0.003163, 0.211762, 1.38179);
    transform: scaleX(0.72796);
  }
  100% {
    transform: scaleX(0.08);
  }
}
@keyframes mdc-linear-progress-primary-indeterminate-translate-reverse {
  0% {
    transform: translateX(0);
  }
  20% {
    animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);
    transform: translateX(0);
  }
  59.15% {
    animation-timing-function: cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);
    transform: translateX(-83.67142%);
  }
  100% {
    transform: translateX(-200.611057%);
  }
}
@keyframes mdc-linear-progress-secondary-indeterminate-translate-reverse {
  0% {
    animation-timing-function: cubic-bezier(0.15, 0, 0.515058, 0.409685);
    transform: translateX(0);
  }
  25% {
    animation-timing-function: cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);
    transform: translateX(-37.651913%);
  }
  48.35% {
    animation-timing-function: cubic-bezier(0.4, 0.627035, 0.6, 0.902026);
    transform: translateX(-84.386165%);
  }
  100% {
    transform: translateX(-160.277782%);
  }
}
@keyframes mdc-linear-progress-buffering-reverse {
  from {
    transform: translateX(-10px);
  }
}
`],encapsulation:2})}return n})();function cl(n,a=0,e=100){return Math.max(a,Math.min(e,n))}var fu=[`*`];var oa=(()=>{class n{labelPosition=`after`;static ɵfac=function(t){return new(t||n)};static ɵcmp=NC({type:n,selectors:[[``,`mat-internal-form-field`,``]],hostAttrs:[1,`mdc-form-field`,`mat-internal-form-field`],hostVars:2,hostBindings:function(t,i){t&2&&Jg(`mdc-form-field--align-end`,i.labelPosition===`before`)},inputs:{labelPosition:`labelPosition`},ngContentSelectors:fu,decls:1,vars:0,template:function(t,i){t&1&&(Uw(),Gw(0))},styles:[`.mat-internal-form-field {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  display: inline-flex;
  align-items: center;
  vertical-align: middle;
}
.mat-internal-form-field > label, .mat-internal-form-field > .mat-internal-form-field-label {
  margin-left: 0;
  margin-right: auto;
  padding-left: 4px;
  padding-right: 0;
  order: 0;
}
[dir=rtl] .mat-internal-form-field > label, [dir=rtl] .mat-internal-form-field > .mat-internal-form-field-label {
  margin-left: auto;
  margin-right: 0;
  padding-left: 0;
  padding-right: 4px;
}

.mdc-form-field--align-end > label, .mdc-form-field--align-end > .mat-internal-form-field-label {
  margin-left: auto;
  margin-right: 0;
  padding-left: 0;
  padding-right: 4px;
  order: -1;
}
[dir=rtl] .mdc-form-field--align-end .mdc-form-field--align-end label, [dir=rtl] .mdc-form-field--align-end .mdc-form-field--align-end .mat-internal-form-field-label {
  margin-left: 0;
  margin-right: auto;
  padding-left: 4px;
  padding-right: 0;
}
`],encapsulation:2})}return n})();var _u=[`input`];var bu=[`formField`];var gu=[`*`];var oo=class{source;value;constructor(a,e){this.source=a,this.value=e}};var vu=new S$1(`MatRadioGroup`);var xu=new S$1(`mat-radio-default-options`,{providedIn:`root`,factory:()=>({color:`accent`,disabledInteractive:!1})});var dl=(()=>{class n{_elementRef=g$2(it$2);_changeDetector=g$2(Ls$1);_focusMonitor=g$2(Ot$1);_radioDispatcher=g$2(ut$2);_defaultOptions=g$2(xu,{optional:!0});_ngZone=g$2(U$4);_renderer=g$2(gn$5);_uniqueId=g$2(Pe$2).getId(`mat-radio-`);_cleanupClick;id=this._uniqueId;name;ariaLabel;ariaLabelledby;ariaDescribedby;disableRipple=!1;tabIndex=0;get checked(){return this._checked}set checked(e){this._checked!==e&&(this._checked=e,e&&this.radioGroup&&this.radioGroup.value!==this.value?this.radioGroup.selected=this:!e&&this.radioGroup&&this.radioGroup.value===this.value&&(this.radioGroup.selected=null),e&&this._radioDispatcher.notify(this.id,this.name),this._changeDetector.markForCheck())}get value(){return this._value}set value(e){this._value!==e&&(this._value=e,this.radioGroup!==null&&(this.checked||(this.checked=this.radioGroup.value===e),this.checked&&(this.radioGroup.selected=this)))}get labelPosition(){return this._labelPosition||this.radioGroup&&this.radioGroup.labelPosition||`after`}set labelPosition(e){this._labelPosition=e}_labelPosition;get disabled(){return this._disabled||this.radioGroup!==null&&this.radioGroup.disabled}set disabled(e){this._setDisabled(e)}get required(){return this._required||this.radioGroup&&this.radioGroup.required}set required(e){e!==this._required&&this._changeDetector.markForCheck(),this._required=e}get color(){return this._color||this.radioGroup&&this.radioGroup.color||this._defaultOptions&&this._defaultOptions.color||`accent`}set color(e){this._color=e}_color;get disabledInteractive(){return this._disabledInteractive||this.radioGroup!==null&&this.radioGroup.disabledInteractive}set disabledInteractive(e){this._disabledInteractive=e}_disabledInteractive;change=new Ke$2;radioGroup;get inputId(){return`${this.id||this._uniqueId}-input`}_checked=!1;_disabled=!1;_required=!1;_value=null;_removeUniqueSelectionListener=()=>{};_previousTabIndex;_inputElement;_rippleTrigger;_noopAnimations=ai$3();_injector=g$2(ne$1);constructor(){g$2($$2).load(Vt);let e=g$2(vu,{optional:!0}),t=g$2(new Tm$1(`tabindex`),{optional:!0});this.radioGroup=e,this._disabledInteractive=this._defaultOptions?.disabledInteractive??!1,t&&(this.tabIndex=yl$1(t,0))}focus(e,t){t?this._focusMonitor.focusVia(this._inputElement,t,e):this._inputElement.nativeElement.focus(e)}_markForCheck(){this._changeDetector.markForCheck()}ngOnInit(){this.radioGroup&&(this.checked=this.radioGroup.value===this._value,this.checked&&(this.radioGroup.selected=this),this.name=this.radioGroup.name),this._removeUniqueSelectionListener=this._radioDispatcher.listen((e,t)=>{e!==this.id&&t===this.name&&(this.checked=!1)})}ngDoCheck(){this._updateTabIndex()}ngAfterViewInit(){this._updateTabIndex(),this._focusMonitor.monitor(this._elementRef,!0).subscribe(e=>{!e&&this.radioGroup&&this.radioGroup._touch()}),this._ngZone.runOutsideAngular(()=>{this._cleanupClick=this._renderer.listen(this._inputElement.nativeElement,`click`,this._onInputClick)})}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._removeUniqueSelectionListener()}_emitChangeEvent(){this.change.emit(new oo(this,this._value))}_isRippleDisabled(){return this.disableRipple||this.disabled}_onInputInteraction(e){if(e.stopPropagation(),!this.checked&&!this.disabled){let t=this.radioGroup&&this.value!==this.radioGroup.value;this.checked=!0,this._emitChangeEvent(),this.radioGroup&&(this.radioGroup._controlValueAccessorChangeFn(this.value),t&&this.radioGroup._emitChangeEvent())}}_setDisabled(e){this._disabled!==e&&(this._disabled=e,this._changeDetector.markForCheck())}_onInputClick=e=>{this.disabled&&this.disabledInteractive&&e.preventDefault()};_updateTabIndex(){let e=this.radioGroup,t;if(!e||!e.selected||this.disabled?t=this.tabIndex:t=e.selected===this?this.tabIndex:-1,t!==this._previousTabIndex){let i=this._inputElement?.nativeElement;i&&(i.setAttribute(`tabindex`,t+``),this._previousTabIndex=t,hh$1(()=>{queueMicrotask(()=>{e&&e.selected&&e.selected!==this&&document.activeElement===i&&(e.selected?._inputElement.nativeElement.focus(),document.activeElement===i&&this._inputElement.nativeElement.blur())})},{injector:this._injector}))}}static ɵfac=function(t){return new(t||n)};static ɵcmp=NC({type:n,selectors:[[`mat-radio-button`]],viewQuery:function(t,i){if(t&1&&qg(_u,5)(bu,7,it$2),t&2){let o;Ww(o=qw())&&(i._inputElement=o.first),Ww(o=qw())&&(i._rippleTrigger=o.first)}},hostAttrs:[1,`mat-mdc-radio-button`],hostVars:19,hostBindings:function(t,i){t&1&&Ug(`focus`,function(){return i._inputElement.nativeElement.focus()}),t&2&&(Rg(`id`,i.id)(`tabindex`,null)(`aria-label`,null)(`aria-labelledby`,null)(`aria-describedby`,null),Jg(`mat-primary`,i.color===`primary`)(`mat-accent`,i.color===`accent`)(`mat-warn`,i.color===`warn`)(`mat-mdc-radio-checked`,i.checked)(`mat-mdc-radio-disabled`,i.disabled)(`mat-mdc-radio-disabled-interactive`,i.disabledInteractive)(`_mat-animation-noopable`,i._noopAnimations))},inputs:{id:`id`,name:`name`,ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`],ariaDescribedby:[0,`aria-describedby`,`ariaDescribedby`],disableRipple:[2,`disableRipple`,`disableRipple`,mo$2],tabIndex:[2,`tabIndex`,`tabIndex`,e=>e==null?0:yl$1(e)],checked:[2,`checked`,`checked`,mo$2],value:`value`,labelPosition:`labelPosition`,disabled:[2,`disabled`,`disabled`,mo$2],required:[2,`required`,`required`,mo$2],color:`color`,disabledInteractive:[2,`disabledInteractive`,`disabledInteractive`,mo$2]},outputs:{change:`change`},exportAs:[`matRadioButton`],ngContentSelectors:gu,decls:13,vars:17,consts:[[`formField`,``],[`input`,``],[`mat-internal-form-field`,``,3,`labelPosition`,`for`],[1,`mdc-radio`],[1,`mat-mdc-radio-touch-target`],[`type`,`radio`,`aria-invalid`,`false`,1,`mdc-radio__native-control`,3,`change`,`id`,`checked`,`disabled`,`required`],[`aria-hidden`,`true`,1,`mdc-radio__background`],[1,`mdc-radio__outer-circle`],[1,`mdc-radio__inner-circle`],[`mat-ripple`,``,`aria-hidden`,`true`,1,`mat-radio-ripple`,`mat-focus-indicator`,3,`matRippleTrigger`,`matRippleDisabled`,`matRippleCentered`],[1,`mat-ripple-element`,`mat-radio-persistent-ripple`],[1,`mat-internal-form-field-label`,`mdc-label`]],template:function(t,i){t&1&&(Uw(),cs$1(0,`label`,2,0)(2,`span`,3),kg(3,`span`,4),cs$1(4,`input`,5,1),Ug(`change`,function(r){return i._onInputInteraction(r)}),Ju$1(),cs$1(6,`span`,6),kg(7,`span`,7)(8,`span`,8),Ju$1(),cs$1(9,`span`,9),kg(10,`span`,10),Ju$1()(),cs$1(11,`span`,11),Gw(12),Ju$1()()),t&2&&(Og(`labelPosition`,i.labelPosition)(`for`,i.inputId),lI(2),Jg(`mdc-radio--disabled`,i.disabled),lI(2),Og(`id`,i.inputId)(`checked`,i.checked)(`disabled`,i.disabled&&!i.disabledInteractive)(`required`,i.required),Rg(`name`,i.name)(`value`,i.value)(`aria-label`,i.ariaLabel)(`aria-labelledby`,i.ariaLabelledby)(`aria-describedby`,i.ariaDescribedby)(`aria-disabled`,i.disabled&&i.disabledInteractive?`true`:null),lI(5),Og(`matRippleTrigger`,i._rippleTrigger.nativeElement)(`matRippleDisabled`,i._isRippleDisabled())(`matRippleCentered`,!0))},dependencies:[Tn$1,oa],styles:[`.mat-mdc-radio-button {
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-radio-button .mdc-radio {
  display: inline-block;
  position: relative;
  flex: 0 0 auto;
  box-sizing: content-box;
  width: 20px;
  height: 20px;
  will-change: opacity, transform, border-color, color;
  padding: calc((var(--%NS%mat-radio-state-layer-size, 40px) - 20px) / 2);
  cursor: pointer;
}
.mat-mdc-radio-button .mdc-radio:hover > .mdc-radio__native-control:not([disabled]):not(:focus) ~ .mdc-radio__background::before {
  opacity: 0.04;
  transform: scale(1);
}
.mat-mdc-radio-button .mdc-radio:hover > .mdc-radio__native-control:not([disabled]) ~ .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--%NS%mat-radio-unselected-hover-icon-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-radio-button .mdc-radio:hover > .mdc-radio__native-control:enabled:checked + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--%NS%mat-radio-selected-hover-icon-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-radio-button .mdc-radio:hover > .mdc-radio__native-control:enabled:checked + .mdc-radio__background > .mdc-radio__inner-circle {
  background-color: var(--%NS%mat-radio-selected-hover-icon-color, var(--%NS%mat-sys-primary, currentColor));
}
.mat-mdc-radio-button .mdc-radio:active > .mdc-radio__native-control:enabled:not(:checked) + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--%NS%mat-radio-unselected-pressed-icon-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-radio-button .mdc-radio:active > .mdc-radio__native-control:enabled:checked + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--%NS%mat-radio-selected-pressed-icon-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-radio-button .mdc-radio:active > .mdc-radio__native-control:enabled:checked + .mdc-radio__background > .mdc-radio__inner-circle {
  background-color: var(--%NS%mat-radio-selected-pressed-icon-color, var(--%NS%mat-sys-primary, currentColor));
}
.mat-mdc-radio-button .mdc-radio__background {
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  width: 20px;
  height: 20px;
}
.mat-mdc-radio-button .mdc-radio__background::before {
  position: absolute;
  transform: scale(0, 0);
  border-radius: 50%;
  opacity: 0;
  pointer-events: none;
  content: "";
  transition: opacity 90ms cubic-bezier(0.4, 0, 0.6, 1), transform 90ms cubic-bezier(0.4, 0, 0.6, 1);
  width: var(--%NS%mat-radio-state-layer-size, 40px);
  height: var(--%NS%mat-radio-state-layer-size, 40px);
  top: calc(-1 * (var(--%NS%mat-radio-state-layer-size, 40px) - 20px) / 2);
  left: calc(-1 * (var(--%NS%mat-radio-state-layer-size, 40px) - 20px) / 2);
}
.mat-mdc-radio-button .mdc-radio__outer-circle {
  position: absolute;
  top: 0;
  left: 0;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  border-width: 2px;
  border-style: solid;
  border-radius: 50%;
  transition: border-color 90ms cubic-bezier(0.4, 0, 0.6, 1);
}
.mat-mdc-radio-button .mdc-radio__inner-circle {
  position: absolute;
  top: 0;
  left: 0;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  transform: scale(0);
  border-radius: 50%;
  transition: transform 90ms cubic-bezier(0.4, 0, 0.6, 1), background-color 90ms cubic-bezier(0.4, 0, 0.6, 1);
}
@media (forced-colors: active) {
  .mat-mdc-radio-button .mdc-radio__inner-circle {
    background-color: CanvasText !important;
  }
}
.mat-mdc-radio-button .mdc-radio__native-control {
  position: absolute;
  margin: 0;
  padding: 0;
  opacity: 0;
  top: 0;
  right: 0;
  left: 0;
  cursor: inherit;
  z-index: 1;
  width: var(--%NS%mat-radio-state-layer-size, 40px);
  height: var(--%NS%mat-radio-state-layer-size, 40px);
}
.mat-mdc-radio-button .mdc-radio__native-control:checked + .mdc-radio__background, .mat-mdc-radio-button .mdc-radio__native-control:disabled + .mdc-radio__background {
  transition: opacity 90ms cubic-bezier(0, 0, 0.2, 1), transform 90ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-mdc-radio-button .mdc-radio__native-control:checked + .mdc-radio__background > .mdc-radio__outer-circle, .mat-mdc-radio-button .mdc-radio__native-control:disabled + .mdc-radio__background > .mdc-radio__outer-circle {
  transition: border-color 90ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-mdc-radio-button .mdc-radio__native-control:checked + .mdc-radio__background > .mdc-radio__inner-circle, .mat-mdc-radio-button .mdc-radio__native-control:disabled + .mdc-radio__background > .mdc-radio__inner-circle {
  transition: transform 90ms cubic-bezier(0, 0, 0.2, 1), background-color 90ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-mdc-radio-button .mdc-radio__native-control:focus + .mdc-radio__background::before {
  transform: scale(1);
  opacity: 0.12;
  transition: opacity 90ms cubic-bezier(0, 0, 0.2, 1), transform 90ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-mdc-radio-button .mdc-radio__native-control:disabled:not(:checked) + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--%NS%mat-radio-disabled-unselected-icon-color, var(--%NS%mat-sys-on-surface));
  opacity: var(--%NS%mat-radio-disabled-unselected-icon-opacity, 0.38);
}
.mat-mdc-radio-button .mdc-radio__native-control:disabled + .mdc-radio__background {
  cursor: default;
}
.mat-mdc-radio-button .mdc-radio__native-control:disabled + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--%NS%mat-radio-disabled-selected-icon-color, var(--%NS%mat-sys-on-surface));
  opacity: var(--%NS%mat-radio-disabled-selected-icon-opacity, 0.38);
}
.mat-mdc-radio-button .mdc-radio__native-control:disabled + .mdc-radio__background > .mdc-radio__inner-circle {
  background-color: var(--%NS%mat-radio-disabled-selected-icon-color, var(--%NS%mat-sys-on-surface, currentColor));
  opacity: var(--%NS%mat-radio-disabled-selected-icon-opacity, 0.38);
}
.mat-mdc-radio-button .mdc-radio__native-control:enabled:not(:checked) + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--%NS%mat-radio-unselected-icon-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-radio-button .mdc-radio__native-control:enabled:checked + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--%NS%mat-radio-selected-icon-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-radio-button .mdc-radio__native-control:enabled:checked + .mdc-radio__background > .mdc-radio__inner-circle {
  background-color: var(--%NS%mat-radio-selected-icon-color, var(--%NS%mat-sys-primary, currentColor));
}
.mat-mdc-radio-button .mdc-radio__native-control:enabled:focus:checked + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--%NS%mat-radio-selected-focus-icon-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-radio-button .mdc-radio__native-control:enabled:focus:checked + .mdc-radio__background > .mdc-radio__inner-circle {
  background-color: var(--%NS%mat-radio-selected-focus-icon-color, var(--%NS%mat-sys-primary, currentColor));
}
.mat-mdc-radio-button .mdc-radio__native-control:checked + .mdc-radio__background > .mdc-radio__inner-circle {
  transform: scale(0.5);
  transition: transform 90ms cubic-bezier(0, 0, 0.2, 1), background-color 90ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled {
  pointer-events: auto;
}
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control:not(:checked) + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--%NS%mat-radio-disabled-unselected-icon-color, var(--%NS%mat-sys-on-surface));
  opacity: var(--%NS%mat-radio-disabled-unselected-icon-opacity, 0.38);
}
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--%NS%disabled:hover .mdc-radio__native-control:checked + .mdc-radio__background > .mdc-radio__outer-circle,
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control:checked:focus + .mdc-radio__background > .mdc-radio__outer-circle,
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--%NS%mat-radio-disabled-selected-icon-color, var(--%NS%mat-sys-on-surface));
  opacity: var(--%NS%mat-radio-disabled-selected-icon-opacity, 0.38);
}
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--%NS%disabled:hover .mdc-radio__native-control:checked + .mdc-radio__background > .mdc-radio__inner-circle,
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control:checked:focus + .mdc-radio__background > .mdc-radio__inner-circle,
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control + .mdc-radio__background > .mdc-radio__inner-circle {
  background-color: var(--%NS%mat-radio-disabled-selected-icon-color, var(--%NS%mat-sys-on-surface, currentColor));
  opacity: var(--%NS%mat-radio-disabled-selected-icon-opacity, 0.38);
}
.mat-mdc-radio-button._mat-animation-noopable .mdc-radio__background::before,
.mat-mdc-radio-button._mat-animation-noopable .mdc-radio__outer-circle,
.mat-mdc-radio-button._mat-animation-noopable .mdc-radio__inner-circle {
  transition: none !important;
}
.mat-mdc-radio-button .mat-internal-form-field-label:empty {
  display: none;
}
.mat-mdc-radio-button .mdc-radio__background::before {
  background-color: var(--%NS%mat-radio-ripple-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-radio-button.mat-mdc-radio-checked .mat-ripple-element,
.mat-mdc-radio-button.mat-mdc-radio-checked .mdc-radio__background::before {
  background-color: var(--%NS%mat-radio-checked-ripple-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mat-ripple-element,
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__background::before {
  background-color: var(--%NS%mat-radio-ripple-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-radio-button .mat-internal-form-field {
  color: var(--%NS%mat-radio-label-text-color, var(--%NS%mat-sys-on-surface));
  font-family: var(--%NS%mat-radio-label-text-font, var(--%NS%mat-sys-body-medium-font));
  line-height: var(--%NS%mat-radio-label-text-line-height, var(--%NS%mat-sys-body-medium-line-height));
  font-size: var(--%NS%mat-radio-label-text-size, var(--%NS%mat-sys-body-medium-size));
  letter-spacing: var(--%NS%mat-radio-label-text-tracking, var(--%NS%mat-sys-body-medium-tracking));
  font-weight: var(--%NS%mat-radio-label-text-weight, var(--%NS%mat-sys-body-medium-weight));
  cursor: pointer;
}
.mat-mdc-radio-button .mdc-radio--disabled + .mat-internal-form-field-label {
  color: var(--%NS%mat-radio-disabled-label-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-radio-button .mat-radio-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: 50%;
}
.mat-mdc-radio-button .mat-radio-ripple > .mat-ripple-element {
  opacity: 0.14;
}
.mat-mdc-radio-button .mat-radio-ripple::before {
  border-radius: 50%;
}
.mat-mdc-radio-button .mdc-radio > .mdc-radio__native-control:focus:enabled:not(:checked) ~ .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--%NS%mat-radio-unselected-focus-icon-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-radio-button.cdk-focused .mat-focus-indicator::before {
  content: "";
}

.mat-mdc-radio-disabled {
  cursor: default;
  pointer-events: none;
}
.mat-mdc-radio-disabled.mat-mdc-radio-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-radio-touch-target {
  position: absolute;
  top: 50%;
  left: 50%;
  height: var(--%NS%mat-radio-touch-target-size, 48px);
  width: var(--%NS%mat-radio-touch-target-size, 48px);
  transform: translate(-50%, -50%);
  display: var(--%NS%mat-radio-touch-target-display, block);
}
[dir=rtl] .mat-mdc-radio-touch-target {
  left: auto;
  right: 50%;
  transform: translate(50%, -50%);
}
`],encapsulation:2})}return n})();var yu=[`customComponentContainer`];var Cu=(n,a)=>a.attribute;function wu(n,a){if(n&1&&(Xu$1(0,`div`,2)(1,`p`),yb$1(2),kb$1(3,`translate`),el$1(),Xu$1(4,`span`),yb$1(5),kb$1(6,`async`),kb$1(7,`translate`),el$1()()),n&2){let e=a.$implicit;lI(2),im$1(Lb$1(3,2,e.label)),lI(3),im$1(Lb$1(7,6,Lb$1(6,4,e.value)))}}function ku(n,a){n&1&&(Xu$1(0,`p`),yb$1(1),kb$1(2,`translate`),el$1()),n&2&&(lI(),im$1(Lb$1(2,1,a)))}function Su(n,a){if(n&1&&(Nw(0,ku,3,3,`p`),Xu$1(1,`span`,3),yb$1(2),kb$1(3,`async`),kb$1(4,`translate`),el$1()),n&2){let e,t=Hw(2);xw((e=t.config().label)?0:-1,e),lI(2),im$1(Lb$1(4,4,Lb$1(3,2,t.value())))}}function Du(n,a){if(n&1&&Ow(0,wu,8,8,`div`,2,Cu,!1,Su,5,6),n&2)kw(Hw().nestedValues())}function Tu(n,a){n&1&&Vg(0,null,0)}var ml=(()=>{class n{constructor(){this.config=Zj.required(),this.data=Zj.required(),this.active=Zj(!1),this.flexDirection=qe$3(()=>this.config().nextLine||this.config().nestedObject?`column`:`row`),this.nestedValues=qe$3(()=>{let e=this.config();return(e.nestedObject??[]).map(t=>({attribute:t.attribute,label:t.label??``,value:this.display(t,e.attribute)}))}),this.value=qe$3(()=>this.display(this.config())),this.customComponentContainer=Qj(`customComponentContainer`,{read:Dn$2}),this.customComponent=qe$3(()=>this.config().component),zr(()=>{let e=this.customComponentContainer(),t=this.customComponent();if(this.customComponentRef?.destroy(),this.customComponentRef=void 0,e&&t){let i=e.createComponent(t);i.setInput(`data`,Q$1(this.data)),i.location.nativeElement.style.width=`100%`,this.customComponentRef=i}}),zr(()=>{let e=this.data();this.customComponentRef?.setInput(`data`,e)})}display(e,t){let i=this.data(),o=t?i?.[t]?.[e.attribute]:i?.[e.attribute],r=e?.formatter?e.formatter(o):o;return My(r)?r:Ty(r)}static{this.ɵfac=function(t){return new(t||n)}}static{this.ɵcmp=NC({type:n,selectors:[[`lab900-merger-item`]],viewQuery:function(t,i){t&1&&Yg(i.customComponentContainer,yu,5,Dn$2),t&2&&Zw()},hostVars:2,hostBindings:function(t,i){t&2&&Jg(`selected`,i.active())},inputs:{config:[1,`config`],data:[1,`data`],active:[1,`active`]},decls:3,vars:9,consts:[[`customComponentContainer`,``],[1,`lab900-merger-item`],[1,`lab900-merger-item__sub`],[2,`text-align`,`right`]],template:function(t,i){t&1&&(Xu$1(0,`div`,1),Nw(1,Du,3,1)(2,Tu,2,0,`ng-container`),el$1()),t&2&&(Ms$1(`flex-direction`,i.flexDirection())(`align-items`,i.config().nextLine?``:`center`)(`justify-content`,i.config().nextLine?``:`space-between`),Jg(`selected`,i.active()),lI(),xw(i.config().component?2:1))},dependencies:[xn$4,R_$1],styles:[`[_nghost-%COMP%]{display:flex;flex-direction:column;flex:45 1 100%;max-width:45%;box-sizing:border-box}.lab900-merger-item[_ngcontent-%COMP%]{padding:1rem;border-top:1px solid lightgray;border-left:1px solid lightgray;border-right:1px solid lightgray;display:flex;flex:1}.lab900-merger-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .lab900-merger-item[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:0}.lab900-merger-item__sub[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;width:100%}`]})}}return n})();var Mu=(n,a)=>a.index;function Nu(n,a){n&1&&kg(0,`mat-progress-bar`,1)}function Iu(n,a){if(n&1&&(cs$1(0,`mat-icon`,11),yb$1(1,`trending_flat `),Ju$1()),n&2){let e=Hw().$implicit,t=Hw(2);Jg(`not-active`,!e.config.active)(`flip`,t.selectedSide()!==`right`)}}function Eu(n,a){if(n&1&&kg(0,`mat-icon`,12),n&2){let e=Hw().$implicit,t=Hw(2);Jg(`not-active`,!e.config.active)(`flip`,t.selectedSide()!==`right`)}}function Au(n,a){if(n&1){let e=Vw();cs$1(0,`div`,2),kg(1,`lab900-merger-item`,6),cs$1(2,`div`,7)(3,`button`,8),Ug(`click`,function(){let i=Wd$1(e).$implicit;return qd$1(Hw(2).toggleActive(i.index))}),Nw(4,Iu,2,4,`mat-icon`,9),Nw(5,Eu,1,4,`mat-icon`,10),Ju$1()(),kg(6,`lab900-merger-item`,6),Ju$1()}if(n&2){let e=a.$implicit,t=Hw(2);sb$1(e.config.rowClass),lI(),Og(`active`,t.selectedSide()===`left`)(`config`,e.config)(`data`,t.leftData()),lI(2),Og(`disableRipple`,!0)(`disabled`,!!e.config.disabled),lI(),xw(e.different?4:-1),lI(),xw(e.config.combine?5:-1),lI(),Og(`active`,t.selectedSide()===`right`)(`config`,e.config)(`data`,t.rightData())}}function Ru(n,a){if(n&1){let e=Vw();cs$1(0,`div`,2)(1,`div`,3)(2,`h2`),yb$1(3),Ju$1(),cs$1(4,`mat-radio-button`,4),Ug(`change`,function(){Wd$1(e);return qd$1(Hw().switchMaster())}),Ju$1()(),cs$1(5,`div`,3)(6,`h2`),yb$1(7),Ju$1(),cs$1(8,`mat-radio-button`,4),Ug(`change`,function(){Wd$1(e);return qd$1(Hw().switchMaster())}),Ju$1()()(),Ow(9,Au,7,12,`div`,5,Mu)}if(n&2){let e=Hw();lI(),Jg(`selected`,e.selectedSide()===`left`),lI(2),im$1(e.leftObject().title),lI(),Og(`checked`,e.selectedSide()===`left`)(`disabled`,e.fixed()),lI(),Jg(`selected`,e.selectedSide()===`right`),lI(2),im$1(e.rightObject().title),lI(),Og(`checked`,e.selectedSide()===`right`)(`disabled`,e.fixed()),lI(),kw(e.rows())}}var ra=(()=>{class n{constructor(){this.iconRegistry=g$2(Kt),this.sanitizer=g$2(hn$5),this.leftObject=Zj.required(),this.rightObject=Zj.required(),this.fixed=Zj(!1),this.loading=Zj(!1),this.schemaInput=Zj.required({alias:`schema`}),this.selectedSide=Yj(`right`),this.schema=il({source:()=>({schema:this.schemaInput(),leftObject:this.leftObject(),rightObject:this.rightObject(),selectedSide:this.selectedSide()}),computation:(e,t)=>t&&t.source.schema===e.schema?this.clearChoices(t.value):e.schema}),this.schemaChange=oH(iH(this.schema)),this.master=qe$3(()=>this.selectedSide()===`right`?this.rightObject():this.leftObject()),this.other=qe$3(()=>this.selectedSide()===`right`?this.leftObject():this.rightObject()),this.result=qe$3(()=>{let e=this.master().data,t=this.other().data,i=q$2({},e);return this.schema().forEach(o=>{o.active&&this.applyConfig(i,o,e,t)}),i}),this.resultChange=oH(iH(this.result)),this.showLoading=qe$3(()=>this.loading()||!this.leftObject()||!this.rightObject()||!this.schema()),this.leftData=qe$3(()=>this.selectedSide()===`left`?this.result():this.leftObject().data),this.rightData=qe$3(()=>this.selectedSide()===`right`?this.result():this.rightObject().data),this.rows=qe$3(()=>this.schema().map((e,t)=>({index:t,config:e,different:this.compare(e)}))),this.iconRegistry.addSvgIconLiteral(`merge`,this.sanitizer.bypassSecurityTrustHtml(ll))}reset(){this.schema.update(e=>this.clearChoices(e))}toggleActive(e){this.schema.update(t=>t.map((i,o)=>o===e?Z$3(q$2({},i),{active:!i.active}):i))}switchMaster(){this.selectedSide.update(e=>e===`right`?`left`:`right`)}clearChoices(e){return e.map(t=>t.disabled?t:Z$3(q$2({},t),{active:!1}))}applyConfig(e,t,i,o){if(t.attribute){let r=t.attribute;t.combine?e[r]=[...i[r],...o[r]]:e[r]=o[r]}else t.nestedObject?.forEach(r=>{let u=r.attribute;e[u]=o[u]})}compare(e){return e?.combine?!1:e?.nestedObject?e.nestedObject.some(t=>this.compareValues(t.attribute,e.attribute)):e.attribute?this.compareValues(e.attribute):!1}compareValues(e,t){let i=this.leftObject().data,o=this.rightObject().data;return hn(t?i[t]?.[e]:i[e],t?o[t]?.[e]:o[e])}static{this.ɵfac=function(t){return new(t||n)}}static{this.ɵcmp=NC({type:n,selectors:[[`lab900-merger`]],inputs:{leftObject:[1,`leftObject`],rightObject:[1,`rightObject`],fixed:[1,`fixed`],loading:[1,`loading`],schemaInput:[1,`schema`,`schemaInput`],selectedSide:[1,`selectedSide`]},outputs:{selectedSide:`selectedSideChange`,schemaChange:`schemaChange`,resultChange:`resultChange`},decls:3,vars:1,consts:[[1,`lab900-merger`],[`mode`,`indeterminate`],[1,`lab900-merger__row`],[1,`lab900-merger__row__header`],[`color`,`primary`,3,`change`,`checked`,`disabled`],[1,`lab900-merger__row`,3,`class`],[3,`active`,`config`,`data`],[1,`lab900-merger__row__icon`],[`mat-icon-button`,``,3,`click`,`disableRipple`,`disabled`],[`color`,`primary`,3,`not-active`,`flip`],[`color`,`primary`,`svgIcon`,`merge`,3,`not-active`,`flip`],[`color`,`primary`],[`color`,`primary`,`svgIcon`,`merge`]],template:function(t,i){t&1&&(cs$1(0,`div`,0),Nw(1,Nu,1,0,`mat-progress-bar`,1)(2,Ru,11,10),Ju$1()),t&2&&(lI(),xw(i.showLoading()?1:2))},dependencies:[aa,dl,ml,Fe,ln],styles:[`.lab900-merger__row[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:stretch}.lab900-merger__row__header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;padding:1rem;border-top:1px solid lightgray;border-left:1px solid lightgray;border-right:1px solid lightgray;border-radius:5px 5px 0 0;flex:45 1 100%;max-width:45%;box-sizing:border-box}.lab900-merger__row__header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .lab900-merger__row__header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:0}.lab900-merger__row__icon[_ngcontent-%COMP%]{display:flex;align-items:center}.lab900-merger__row__icon[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%]{cursor:pointer}.lab900-merger__row[_ngcontent-%COMP%]   button[disabled][_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%]{cursor:not-allowed}.lab900-merger__row[_ngcontent-%COMP%]:last-of-type     .lab900-merger-item{border-bottom:1px solid lightgray;border-radius:0 0 5px 5px}.not-active[_ngcontent-%COMP%]{color:#d3d3d3}.flip[_ngcontent-%COMP%]{transform:scaleX(-1)}`]})}}return n})();var Jn=(()=>{class n{static{this.ɵfac=function(t){return new(t||n)}}static{this.ɵdir=En$3({type:n,selectors:[[``,`lab900TableEmpty`,``]]})}}return n})();var ro=(()=>{class n{static{this.ɵfac=function(t){return new(t||n)}}static{this.ɵdir=En$3({type:n,selectors:[[``,`lab900TableDisabled`,``]]})}}return n})();var ei=(()=>{class n{static{this.ɵfac=function(t){return new(t||n)}}static{this.ɵdir=En$3({type:n,selectors:[[``,`lab900TableHeaderContent`,``]]})}}return n})();var ti=(()=>{class n{static{this.ɵfac=function(t){return new(t||n)}}static{this.ɵdir=En$3({type:n,selectors:[[``,`lab900TableTopContent`,``]]})}}return n})();var ni=(()=>{class n{constructor(){this.lab900TableRowDetailOf=Zj(void 0)}static ngTemplateContextGuard(e,t){return!0}static{this.ɵfac=function(t){return new(t||n)}}static{this.ɵdir=En$3({type:n,selectors:[[``,`lab900TableRowDetail`,``]],inputs:{lab900TableRowDetailOf:[1,`lab900TableRowDetailOf`]}})}}return n})();function co(n){let a=n.cloneNode(!0),e=a.querySelectorAll(`[id]`),t=n.nodeName.toLowerCase();a.removeAttribute(`id`);for(let i=0;i<e.length;i++)e[i].removeAttribute(`id`);return t===`canvas`?hl(n,a):(t===`input`||t===`select`||t===`textarea`)&&ul(n,a),pl(`canvas`,n,a,hl),pl(`input, textarea, select`,n,a,ul),a}function pl(n,a,e,t){let i=a.querySelectorAll(n);if(i.length){let o=e.querySelectorAll(n);for(let r=0;r<i.length;r++)t(i[r],o[r])}}var Fu=0;function ul(n,a){a.type!==`file`&&(a.value=n.value),a.type===`radio`&&a.name&&(a.name=`mat-clone-${a.name}-${Fu++}`)}function hl(n,a){let e=a.getContext(`2d`);if(e)try{e.drawImage(n,0,0)}catch(t){}}function _o(n){let a=n.getBoundingClientRect();return{top:a.top,right:a.right,bottom:a.bottom,left:a.left,width:a.width,height:a.height,x:a.x,y:a.y}}function mo(n,a,e){let{top:t,bottom:i,left:o,right:r}=n;return e>=t&&e<=i&&a>=o&&a<=r}function Pu(n,a){let e=a.left<n.left,t=a.left+a.width>n.right,i=a.top<n.top,o=a.top+a.height>n.bottom;return e||t||i||o}function oi(n,a,e){n.top+=a,n.bottom=n.top+n.height,n.left+=e,n.right=n.left+n.width}function fl(n,a,e,t){let{top:i,right:o,bottom:r,left:u,width:C,height:M}=n,U=C*a,ae=M*a;return t>i-ae&&t<r+ae&&e>u-U&&e<o+U}var sa=class{_document;positions=new Map;constructor(a){this._document=a}clear(){this.positions.clear()}cache(a){this.clear(),this.positions.set(this._document,{scrollPosition:this.getViewportScrollPosition()}),a.forEach(e=>{this.positions.set(e,{scrollPosition:{top:e.scrollTop,left:e.scrollLeft},clientRect:_o(e)})})}handleScroll(a){let e=M$1(a),t=this.positions.get(e);if(!t)return null;let i=t.scrollPosition,o,r;if(e===this._document){let M=this.getViewportScrollPosition();o=M.top,r=M.left}else o=e.scrollTop,r=e.scrollLeft;let u=i.top-o,C=i.left-r;return this.positions.forEach((M,U)=>{M.clientRect&&e!==U&&e.contains(U)&&oi(M.clientRect,u,C)}),i.top=o,i.left=r,{top:u,left:C}}getViewportScrollPosition(){return{top:window.scrollY,left:window.scrollX}}};function Tl(n,a){let e=n.rootNodes;if(e.length===1&&e[0].nodeType===a.ELEMENT_NODE)return e[0];let t=a.createElement(`div`);return e.forEach(i=>t.appendChild(i)),t}function bo(n,a,e){for(let t in a)if(a.hasOwnProperty(t)){let i=a[t];i?n.setProperty(t,i,e?.has(t)?`important`:``):n.removeProperty(t)}return n}function Tn(n,a){let e=a?``:`none`;bo(n.style,{"touch-action":a?``:`none`,"-webkit-user-drag":a?``:`none`,"-webkit-tap-highlight-color":a?``:`transparent`,"user-select":e,"-ms-user-select":e,"-webkit-user-select":e,"-moz-user-select":e})}function _l(n,a,e){bo(n.style,{position:a?``:`fixed`,top:a?``:`0`,opacity:a?``:`0`,left:a?``:`-999em`},e)}function la(n,a){return a&&a!=`none`?n+` `+a:n}function bl(n,a){n.style.width=`${a.width}px`,n.style.height=`${a.height}px`,n.style.transform=ri(a.left,a.top)}function ri(n,a){return`translate3d(${Math.round(n)}px, ${Math.round(a)}px, 0)`}var ii={capture:!0};var so={passive:!1,capture:!0};var Ou=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵcmp=NC({type:n,selectors:[[`ng-component`]],hostAttrs:[`cdk-drag-resets-container`,``],decls:0,vars:0,template:function(t,i){},styles:[`@layer cdk-resets {
  .cdk-drag-preview {
    background: none;
    border: none;
    padding: 0;
    color: inherit;
    overflow: visible;
    inset: auto;
  }
}
.cdk-drag-placeholder *,
.cdk-drag-preview * {
  pointer-events: none !important;
}
`],encapsulation:2})}return n})();var da=(()=>{class n{_ngZone=g$2(U$4);_document=g$2(Ne$3);_styleLoader=g$2($$2);_renderer=g$2(to$2).createRenderer(null,null);_cleanupDocumentTouchmove;_scroll=new ee$3;_dropInstances=new Set;_dragInstances=new Set;_activeDragInstances=xe$3([]);_globalListeners;_draggingPredicate=e=>e.isDragging();_domNodesToDirectives=null;pointerMove=new ee$3;pointerUp=new ee$3;registerDropContainer(e){this._dropInstances.has(e)||this._dropInstances.add(e)}registerDragItem(e){this._dragInstances.add(e),this._dragInstances.size===1&&this._ngZone.runOutsideAngular(()=>{this._cleanupDocumentTouchmove?.(),this._cleanupDocumentTouchmove=this._renderer.listen(this._document,`touchmove`,this._persistentTouchmoveListener,so)})}removeDropContainer(e){this._dropInstances.delete(e)}removeDragItem(e){this._dragInstances.delete(e),this.stopDragging(e),this._dragInstances.size===0&&this._cleanupDocumentTouchmove?.()}startDragging(e,t){if(!(this._activeDragInstances().indexOf(e)>-1)&&(this._styleLoader.load(Ou),this._activeDragInstances.update(i=>[...i,e]),this._activeDragInstances().length===1)){let i=t.type.startsWith(`touch`),o=u=>this.pointerUp.next(u),r=[[`scroll`,u=>this._scroll.next(u),ii],[`selectstart`,this._preventDefaultWhileDragging,so]];i?r.push([`touchend`,o,ii],[`touchcancel`,o,ii]):r.push([`mouseup`,o,ii]),i||r.push([`mousemove`,u=>this.pointerMove.next(u),so]),this._ngZone.runOutsideAngular(()=>{this._globalListeners=r.map(([u,C,M])=>this._renderer.listen(this._document,u,C,M))})}}stopDragging(e){this._activeDragInstances.update(t=>{let i=t.indexOf(e);return i>-1?(t.splice(i,1),[...t]):t}),this._activeDragInstances().length===0&&this._clearGlobalListeners()}isDragging(e){return this._activeDragInstances().indexOf(e)>-1}scrolled(e){let t=[this._scroll];return e&&e!==this._document&&t.push(new M$2(i=>this._ngZone.runOutsideAngular(()=>{let o=this._renderer.listen(e,`scroll`,r=>{this._activeDragInstances().length&&i.next(r)},ii);return()=>{o()}}))),Vy(...t)}registerDirectiveNode(e,t){this._domNodesToDirectives??=new WeakMap,this._domNodesToDirectives.set(e,t)}removeDirectiveNode(e){this._domNodesToDirectives?.delete(e)}getDragDirectiveForNode(e){return this._domNodesToDirectives?.get(e)||null}ngOnDestroy(){this._dragInstances.forEach(e=>this.removeDragItem(e)),this._dropInstances.forEach(e=>this.removeDropContainer(e)),this._domNodesToDirectives=null,this._clearGlobalListeners(),this.pointerMove.complete(),this.pointerUp.complete()}_preventDefaultWhileDragging=e=>{this._activeDragInstances().length>0&&e.preventDefault()};_persistentTouchmoveListener=e=>{this._activeDragInstances().length>0&&(this._activeDragInstances().some(this._draggingPredicate)&&e.preventDefault(),this.pointerMove.next(e))};_clearGlobalListeners(){this._globalListeners?.forEach(e=>e()),this._globalListeners=void 0}static ɵfac=function(t){return new(t||n)};static ɵprov=Oe$3({token:n,factory:n.ɵfac})}return n})();function gl(n){let a=n.toLowerCase().indexOf(`ms`)>-1?1:1e3;return parseFloat(n)*a}function Lu(n){let a=getComputedStyle(n),e=lo(a,`transition-property`),t=e.find(u=>u===`transform`||u===`all`);if(!t)return 0;let i=e.indexOf(t),o=lo(a,`transition-duration`),r=lo(a,`transition-delay`);return gl(o[i])+gl(r[i])}function lo(n,a){return n.getPropertyValue(a).split(`,`).map(t=>t.trim())}var Vu=new Set([`position`]);var po=class{_document;_rootElement;_direction;_initialDomRect;_previewTemplate;_previewClass;_pickupPositionOnPage;_initialTransform;_zIndex;_renderer;_previewEmbeddedView=null;_preview;get element(){return this._preview}constructor(a,e,t,i,o,r,u,C,M,U){this._document=a,this._rootElement=e,this._direction=t,this._initialDomRect=i,this._previewTemplate=o,this._previewClass=r,this._pickupPositionOnPage=u,this._initialTransform=C,this._zIndex=M,this._renderer=U}attach(a){this._preview=this._createPreview(),a.appendChild(this._preview),vl(this._preview)&&this._preview.showPopover()}destroy(){this._preview.remove(),this._previewEmbeddedView?.destroy(),this._preview=this._previewEmbeddedView=null}setTransform(a){this._preview.style.transform=a}getBoundingClientRect(){return this._preview.getBoundingClientRect()}addClass(a){this._preview.classList.add(a)}getTransitionDuration(){return Lu(this._preview)}addEventListener(a,e){return this._renderer.listen(this._preview,a,e)}_createPreview(){let a=this._previewTemplate,e=this._previewClass,t=a?a.template:null,i;if(t&&a){let o=a.matchSize?this._initialDomRect:null,r=a.viewContainer.createEmbeddedView(t,a.context);r.detectChanges(),i=Tl(r,this._document),this._previewEmbeddedView=r,a.matchSize?bl(i,o):i.style.transform=ri(this._pickupPositionOnPage.x,this._pickupPositionOnPage.y)}else i=co(this._rootElement),bl(i,this._initialDomRect),this._initialTransform&&(i.style.transform=this._initialTransform);return bo(i.style,{"pointer-events":`none`,margin:vl(i)?`0 auto 0 0`:`0`,position:`fixed`,top:`0`,left:`0`,"z-index":this._zIndex+``},Vu),Tn(i,!1),i.classList.add(`cdk-drag-preview`),i.setAttribute(`popover`,`manual`),i.setAttribute(`dir`,this._direction),e&&(Array.isArray(e)?e.forEach(o=>i.classList.add(o)):i.classList.add(e)),i}};function vl(n){return`showPopover`in n}var Bu={passive:!0};var xl={passive:!1};var zu={passive:!1,capture:!0};var Hu=800;var yl=`cdk-drag-placeholder`;var Cl=new Set([`position`]);function ju(n,a,e={dragStartThreshold:5,pointerDirectionChangeThreshold:5}){let t=n.get(gn$5,null,{optional:!0})||n.get(to$2).createRenderer(null,null);return new uo(a,e,n.get(Ne$3),n.get(U$4),n.get(st$4),n.get(da),t)}var uo=class{_config;_document;_ngZone;_viewportRuler;_dragDropRegistry;_renderer;_rootElementCleanups;_cleanupShadowRootSelectStart;_preview=null;_previewContainer;_placeholderRef=null;_placeholder;_pickupPositionInElement;_pickupPositionOnPage;_marker;_anchor=null;_passiveTransform={x:0,y:0};_activeTransform={x:0,y:0};_initialTransform;_hasStartedDragging=xe$3(!1);_hasMoved=!1;_initialContainer;_initialIndex;_parentPositions;_moveEvents=new ee$3;_pointerDirectionDelta;_pointerPositionAtLastDirectionChange;_lastKnownPointerPosition;_rootElement;_ownerSVGElement=null;_rootElementTapHighlight;_pointerMoveSubscription=V$3.EMPTY;_pointerUpSubscription=V$3.EMPTY;_scrollSubscription=V$3.EMPTY;_resizeSubscription=V$3.EMPTY;_lastTouchEventTime;_dragStartTime;_boundaryElement=null;_nativeInteractionsEnabled=!0;_initialDomRect;_previewRect;_boundaryRect;_previewTemplate;_placeholderTemplate;_handles=[];_disabledHandles=new Set;_dropContainer;_direction=`ltr`;_parentDragRef=null;_cachedShadowRoot;lockAxis=null;dragStartDelay=0;previewClass;scale=1;get disabled(){return this._disabled||!!(this._dropContainer&&this._dropContainer.disabled)}set disabled(a){a!==this._disabled&&(this._disabled=a,this._toggleNativeDragInteractions(),this._handles.forEach(e=>Tn(e,a)))}_disabled=!1;beforeStarted=new ee$3;started=new ee$3;released=new ee$3;ended=new ee$3;entered=new ee$3;exited=new ee$3;dropped=new ee$3;moved=this._moveEvents;data;constrainPosition;constructor(a,e,t,i,o,r,u){this._config=e,this._document=t,this._ngZone=i,this._viewportRuler=o,this._dragDropRegistry=r,this._renderer=u,this.withRootElement(a).withParent(e.parentDragRef||null),this._parentPositions=new sa(t),r.registerDragItem(this)}getPlaceholderElement(){return this._placeholder}getRootElement(){return this._rootElement}getVisibleElement(){return this.isDragging()?this.getPlaceholderElement():this.getRootElement()}withHandles(a){this._handles=a.map(t=>A$1(t)),this._handles.forEach(t=>Tn(t,this.disabled)),this._toggleNativeDragInteractions();let e=new Set;return this._disabledHandles.forEach(t=>{this._handles.indexOf(t)>-1&&e.add(t)}),this._disabledHandles=e,this}withPreviewTemplate(a){return this._previewTemplate=a,this}withPlaceholderTemplate(a){return this._placeholderTemplate=a,this}withRootElement(a){let e=A$1(a);if(e!==this._rootElement){this._removeRootElementListeners();let t=this._renderer;this._rootElementCleanups=this._ngZone.runOutsideAngular(()=>[t.listen(e,`mousedown`,this._pointerDown,xl),t.listen(e,`touchstart`,this._pointerDown,Bu),t.listen(e,`dragstart`,this._nativeDragStart,xl)]),this._initialTransform=void 0,this._rootElement=e}return typeof SVGElement<`u`&&this._rootElement instanceof SVGElement&&(this._ownerSVGElement=this._rootElement.ownerSVGElement),this}withBoundaryElement(a){return this._boundaryElement=a?A$1(a):null,this._resizeSubscription.unsubscribe(),a&&(this._resizeSubscription=this._viewportRuler.change(10).subscribe(()=>this._containInsideBoundaryOnResize())),this}withParent(a){return this._parentDragRef=a,this}dispose(){this._removeRootElementListeners(),this.isDragging()&&this._rootElement?.remove(),this._marker?.remove(),this._destroyPreview(),this._destroyPlaceholder(),this._dragDropRegistry.removeDragItem(this),this._removeListeners(),this.beforeStarted.complete(),this.started.complete(),this.released.complete(),this.ended.complete(),this.entered.complete(),this.exited.complete(),this.dropped.complete(),this._moveEvents.complete(),this._handles=[],this._disabledHandles.clear(),this._dropContainer=void 0,this._resizeSubscription.unsubscribe(),this._parentPositions.clear(),this._boundaryElement=this._rootElement=this._ownerSVGElement=this._placeholderTemplate=this._previewTemplate=this._marker=this._parentDragRef=null}isDragging(){return this._hasStartedDragging()&&this._dragDropRegistry.isDragging(this)}reset(){this._rootElement.style.transform=this._initialTransform||``,this._activeTransform={x:0,y:0},this._passiveTransform={x:0,y:0}}resetToBoundary(){if(this._boundaryElement&&this._rootElement&&Pu(this._boundaryElement.getBoundingClientRect(),this._rootElement.getBoundingClientRect())){let a=this._boundaryElement.getBoundingClientRect(),e=this._rootElement.getBoundingClientRect(),t=0,i=0;e.left<a.left?t=a.left-e.left:e.right>a.right&&(t=a.right-e.right),e.top<a.top?i=a.top-e.top:e.bottom>a.bottom&&(i=a.bottom-e.bottom);let o=this._activeTransform.x,r=this._activeTransform.y,u=o+t,C=r+i;this._rootElement.style.transform=ri(u,C),this._activeTransform={x:u,y:C},this._passiveTransform={x:u,y:C}}}disableHandle(a){!this._disabledHandles.has(a)&&this._handles.indexOf(a)>-1&&(this._disabledHandles.add(a),Tn(a,!0))}enableHandle(a){this._disabledHandles.has(a)&&(this._disabledHandles.delete(a),Tn(a,this.disabled))}withDirection(a){return this._direction=a,this}_withDropContainer(a){this._dropContainer=a}getFreeDragPosition(){let a=this.isDragging()?this._activeTransform:this._passiveTransform;return{x:a.x,y:a.y}}setFreeDragPosition(a){return this._activeTransform={x:0,y:0},this._passiveTransform.x=a.x,this._passiveTransform.y=a.y,this._dropContainer||this._applyRootElementTransform(a.x,a.y),this}withPreviewContainer(a){return this._previewContainer=a,this}_sortFromLastPointerPosition(){let a=this._lastKnownPointerPosition;a&&this._dropContainer&&this._updateActiveDropContainer(this._getConstrainedPointerPosition(a),a)}_removeListeners(){this._pointerMoveSubscription.unsubscribe(),this._pointerUpSubscription.unsubscribe(),this._scrollSubscription.unsubscribe(),this._cleanupShadowRootSelectStart?.(),this._cleanupShadowRootSelectStart=void 0}_destroyPreview(){this._preview?.destroy(),this._preview=null}_destroyPlaceholder(){this._anchor?.remove(),this._placeholder?.remove(),this._placeholderRef?.destroy(),this._placeholder=this._anchor=this._placeholderRef=null}_pointerDown=a=>{if(this.beforeStarted.next(),this._handles.length){let e=this._getTargetHandle(a);e&&!this._disabledHandles.has(e)&&!this.disabled&&this._initializeDragSequence(e,a)}else this.disabled||this._initializeDragSequence(this._rootElement,a)};_pointerMove=a=>{let e=this._getPointerPositionOnPage(a);if(!this._hasStartedDragging()){if(Math.abs(e.x-this._pickupPositionOnPage.x)+Math.abs(e.y-this._pickupPositionOnPage.y)>=this._config.dragStartThreshold){let u=Date.now()>=this._dragStartTime+this._getDragStartDelay(a),C=this._dropContainer;if(!u){this._endDragSequence(a);return}(!C||!C.isDragging()&&!C.isReceiving())&&(a.cancelable&&a.preventDefault(),this._hasStartedDragging.set(!0),this._ngZone.run(()=>this._startDragSequence(a)))}return}a.cancelable&&a.preventDefault();let t=this._getConstrainedPointerPosition(e);if(this._hasMoved=!0,this._lastKnownPointerPosition=e,this._updatePointerDirectionDelta(t),this._dropContainer)this._updateActiveDropContainer(t,e);else{let i=this.constrainPosition?this._initialDomRect:this._pickupPositionOnPage,o=this._activeTransform;o.x=t.x-i.x+this._passiveTransform.x,o.y=t.y-i.y+this._passiveTransform.y,this._applyRootElementTransform(o.x,o.y)}this._moveEvents.observers.length&&this._ngZone.run(()=>{this._moveEvents.next({source:this,pointerPosition:t,event:a,distance:this._getDragDistance(t),delta:this._pointerDirectionDelta})})};_pointerUp=a=>{this._endDragSequence(a)};_endDragSequence(a){if(this._dragDropRegistry.isDragging(this)&&(this._removeListeners(),this._dragDropRegistry.stopDragging(this),this._toggleNativeDragInteractions(),this._handles&&(this._rootElement.style.webkitTapHighlightColor=this._rootElementTapHighlight),!!this._hasStartedDragging()))if(this.released.next({source:this,event:a}),this._dropContainer)this._dropContainer._stopScrolling(),this._animatePreviewToPlaceholder().then(()=>{this._cleanupDragArtifacts(a),this._cleanupCachedDimensions(),this._dragDropRegistry.stopDragging(this)});else{this._passiveTransform.x=this._activeTransform.x;let e=this._getPointerPositionOnPage(a);this._passiveTransform.y=this._activeTransform.y,this._ngZone.run(()=>{this.ended.next({source:this,distance:this._getDragDistance(e),dropPoint:e,event:a})}),this._cleanupCachedDimensions(),this._dragDropRegistry.stopDragging(this)}}_startDragSequence(a){ai(a)&&(this._lastTouchEventTime=Date.now()),this._toggleNativeDragInteractions();let e=this._getShadowRoot(),t=this._dropContainer;if(e&&this._ngZone.runOutsideAngular(()=>{this._cleanupShadowRootSelectStart=this._renderer.listen(e,`selectstart`,Gu,zu)}),t){let i=this._rootElement,o=i.parentNode,r=this._placeholder=this._createPlaceholderElement(),u=this._marker=this._marker||this._document.createComment(``);o.insertBefore(u,i),this._initialTransform=i.style.transform||``,this._preview=new po(this._document,this._rootElement,this._direction,this._initialDomRect,this._previewTemplate||null,this.previewClass||null,this._pickupPositionOnPage,this._initialTransform,this._config.zIndex||1e3,this._renderer),this._preview.attach(this._getPreviewInsertionPoint(o,e)),_l(i,!1,Cl),this._document.body.appendChild(o.replaceChild(r,i)),this.started.next({source:this,event:a}),t.start(),this._initialContainer=t,this._initialIndex=t.getItemIndex(this)}else this.started.next({source:this,event:a}),this._initialContainer=this._initialIndex=void 0;this._parentPositions.cache(t?t.getScrollableParents():[])}_initializeDragSequence(a,e){this._parentDragRef&&e.stopPropagation();let t=this.isDragging(),i=ai(e),o=!i&&e.button!==0,r=this._rootElement,u=M$1(e),C=!i&&this._lastTouchEventTime&&this._lastTouchEventTime+Hu>Date.now(),M=i?De$2(e):Oe$2(e);if(u&&u.draggable&&e.type===`mousedown`&&e.preventDefault(),t||o||C||M)return;if(this._handles.length){let Pe=r.style;this._rootElementTapHighlight=Pe.webkitTapHighlightColor||``,Pe.webkitTapHighlightColor=`transparent`}this._hasMoved=!1,this._hasStartedDragging.set(this._hasMoved),this._removeListeners(),this._initialDomRect=this._rootElement.getBoundingClientRect(),this._pointerMoveSubscription=this._dragDropRegistry.pointerMove.subscribe(this._pointerMove),this._pointerUpSubscription=this._dragDropRegistry.pointerUp.subscribe(this._pointerUp),this._scrollSubscription=this._dragDropRegistry.scrolled(this._getShadowRoot()).subscribe(Pe=>this._updateOnScroll(Pe)),this._boundaryElement&&(this._boundaryRect=_o(this._boundaryElement));let U=this._previewTemplate;this._pickupPositionInElement=U&&U.template&&!U.matchSize?{x:0,y:0}:this._getPointerPositionInElement(this._initialDomRect,a,e);let ae=this._pickupPositionOnPage=this._lastKnownPointerPosition=this._getPointerPositionOnPage(e);this._pointerDirectionDelta={x:0,y:0},this._pointerPositionAtLastDirectionChange={x:ae.x,y:ae.y},this._dragStartTime=Date.now(),this._dragDropRegistry.startDragging(this,e)}_cleanupDragArtifacts(a){_l(this._rootElement,!0,Cl),this._marker.parentNode.replaceChild(this._rootElement,this._marker),this._destroyPreview(),this._destroyPlaceholder(),this._initialDomRect=this._boundaryRect=this._previewRect=this._initialTransform=void 0,this._ngZone.run(()=>{let e=this._dropContainer,t=e.getItemIndex(this),i=this._getPointerPositionOnPage(a),o=this._getDragDistance(i),r=e._isOverContainer(i.x,i.y);this.ended.next({source:this,distance:o,dropPoint:i,event:a}),this.dropped.next({item:this,currentIndex:t,previousIndex:this._initialIndex,container:e,previousContainer:this._initialContainer,isPointerOverContainer:r,distance:o,dropPoint:i,event:a}),e.drop(this,t,this._initialIndex,this._initialContainer,r,o,i,a),this._dropContainer=this._initialContainer})}_updateActiveDropContainer({x:a,y:e},{x:t,y:i}){let o=this._initialContainer._getSiblingContainerFromPosition(this,a,e);!o&&this._dropContainer!==this._initialContainer&&this._initialContainer._isOverContainer(a,e)&&(o=this._initialContainer),o&&o!==this._dropContainer&&this._ngZone.run(()=>{let r=this._dropContainer.getItemIndex(this),u=this._dropContainer.getItemAtIndex(r+1)?.getVisibleElement()||null;this.exited.next({item:this,container:this._dropContainer}),this._dropContainer.exit(this),this._conditionallyInsertAnchor(o,this._dropContainer,u),this._dropContainer=o,this._dropContainer.enter(this,a,e,o===this._initialContainer&&o.sortingDisabled?this._initialIndex:void 0),this.entered.next({item:this,container:o,currentIndex:o.getItemIndex(this)})}),this.isDragging()&&(this._dropContainer._startScrollingIfNecessary(t,i),this._dropContainer._sortItem(this,a,e,this._pointerDirectionDelta),this.constrainPosition?this._applyPreviewTransform(a,e):this._applyPreviewTransform(a-this._pickupPositionInElement.x,e-this._pickupPositionInElement.y))}_animatePreviewToPlaceholder(){if(!this._hasMoved)return Promise.resolve();let a=this._placeholder.getBoundingClientRect();this._preview.addClass(`cdk-drag-animating`),this._applyPreviewTransform(a.left,a.top);let e=this._preview.getTransitionDuration();return e===0?Promise.resolve():this._ngZone.runOutsideAngular(()=>new Promise(t=>{let i=u=>{(!u||this._preview&&M$1(u)===this._preview.element&&u.propertyName===`transform`)&&(r(),t(),clearTimeout(o))},o=setTimeout(i,e*1.5),r=this._preview.addEventListener(`transitionend`,i)}))}_createPlaceholderElement(){let a=this._placeholderTemplate,e=a?a.template:null,t;return e?(this._placeholderRef=a.viewContainer.createEmbeddedView(e,a.context),this._placeholderRef.detectChanges(),t=Tl(this._placeholderRef,this._document)):t=co(this._rootElement),t.style.pointerEvents=`none`,t.classList.add(yl),t}_getPointerPositionInElement(a,e,t){let i=e===this._rootElement?null:e,o=i?i.getBoundingClientRect():a,r=ai(t)?t.targetTouches[0]:t,u=this._getViewportScrollPosition(),C=r.pageX-o.left-u.left,M=r.pageY-o.top-u.top;return{x:o.left-a.left+C,y:o.top-a.top+M}}_getPointerPositionOnPage(a){let e=this._getViewportScrollPosition(),t=ai(a)?a.touches[0]||a.changedTouches[0]||{pageX:0,pageY:0}:a,i=t.pageX-e.left,o=t.pageY-e.top;if(this._ownerSVGElement){let r=this._ownerSVGElement.getScreenCTM();if(r){let u=this._ownerSVGElement.createSVGPoint();return u.x=i,u.y=o,u.matrixTransform(r.inverse())}}return{x:i,y:o}}_getConstrainedPointerPosition(a){let e=this._dropContainer?this._dropContainer.lockAxis:null,{x:t,y:i}=this.constrainPosition?this.constrainPosition(a,this,this._initialDomRect,this._pickupPositionInElement):a;if(this.lockAxis===`x`||e===`x`?i=this._pickupPositionOnPage.y-(this.constrainPosition?this._pickupPositionInElement.y:0):(this.lockAxis===`y`||e===`y`)&&(t=this._pickupPositionOnPage.x-(this.constrainPosition?this._pickupPositionInElement.x:0)),this._boundaryRect){let{x:o,y:r}=this.constrainPosition?{x:0,y:0}:this._pickupPositionInElement,u=this._boundaryRect,{width:C,height:M}=this._getPreviewRect(),U=u.top+r,ae=u.bottom-(M-r),Pe=u.left+o,ht=u.right-(C-o);t=wl(t,Pe,ht),i=wl(i,U,ae)}return{x:t,y:i}}_updatePointerDirectionDelta(a){let{x:e,y:t}=a,i=this._pointerDirectionDelta,o=this._pointerPositionAtLastDirectionChange,r=Math.abs(e-o.x),u=Math.abs(t-o.y);return r>this._config.pointerDirectionChangeThreshold&&(i.x=e>o.x?1:-1,o.x=e),u>this._config.pointerDirectionChangeThreshold&&(i.y=t>o.y?1:-1,o.y=t),i}_toggleNativeDragInteractions(){if(!this._rootElement||!this._handles)return;let a=this._handles.length>0||!this.isDragging();a!==this._nativeInteractionsEnabled&&(this._nativeInteractionsEnabled=a,Tn(this._rootElement,a))}_removeRootElementListeners(){this._rootElementCleanups?.forEach(a=>a()),this._rootElementCleanups=void 0}_applyRootElementTransform(a,e){let t=1/this.scale,i=ri(a*t,e*t),o=this._rootElement.style;this._initialTransform??=o.transform&&o.transform!=`none`?o.transform:``,o.transform=la(i,this._initialTransform)}_applyPreviewTransform(a,e){let t=this._previewTemplate?.template?void 0:this._initialTransform,i=ri(a,e);this._preview.setTransform(la(i,t))}_getDragDistance(a){let e=this._pickupPositionOnPage;return e?{x:a.x-e.x,y:a.y-e.y}:{x:0,y:0}}_cleanupCachedDimensions(){this._boundaryRect=this._previewRect=void 0,this._parentPositions.clear()}_containInsideBoundaryOnResize(){let{x:a,y:e}=this._passiveTransform;if(a===0&&e===0||this.isDragging()||!this._boundaryElement)return;let t=this._rootElement.getBoundingClientRect(),i=this._boundaryElement.getBoundingClientRect();if(i.width===0&&i.height===0||t.width===0&&t.height===0)return;let o=i.left-t.left,r=t.right-i.right,u=i.top-t.top,C=t.bottom-i.bottom;i.width>t.width?(o>0&&(a+=o),r>0&&(a-=r)):a=0,i.height>t.height?(u>0&&(e+=u),C>0&&(e-=C)):e=0,(a!==this._passiveTransform.x||e!==this._passiveTransform.y)&&this.setFreeDragPosition({y:e,x:a})}_getDragStartDelay(a){let e=this.dragStartDelay;return typeof e==`number`?e:ai(a)?e.touch:e?e.mouse:0}_updateOnScroll(a){let e=this._parentPositions.handleScroll(a);if(e){let t=M$1(a);this._boundaryRect&&t!==this._boundaryElement&&t.contains(this._boundaryElement)&&oi(this._boundaryRect,e.top,e.left),this._pickupPositionOnPage.x+=e.left,this._pickupPositionOnPage.y+=e.top,this._dropContainer||(this._activeTransform.x-=e.left,this._activeTransform.y-=e.top,this._applyRootElementTransform(this._activeTransform.x,this._activeTransform.y))}}_getViewportScrollPosition(){return this._parentPositions.positions.get(this._document)?.scrollPosition||this._parentPositions.getViewportScrollPosition()}_getShadowRoot(){return this._cachedShadowRoot===void 0&&(this._cachedShadowRoot=Fe$3(this._rootElement)),this._cachedShadowRoot}_getPreviewInsertionPoint(a,e){let t=this._previewContainer||`global`;if(t===`parent`)return a;if(t===`global`){let i=this._document;return e||i.fullscreenElement||i.webkitFullscreenElement||i.mozFullScreenElement||i.msFullscreenElement||i.body}return A$1(t)}_getPreviewRect(){return(!this._previewRect||!this._previewRect.width&&!this._previewRect.height)&&(this._previewRect=this._preview?this._preview.getBoundingClientRect():this._initialDomRect),this._previewRect}_nativeDragStart=a=>{if(this._handles.length){let e=this._getTargetHandle(a);e&&!this._disabledHandles.has(e)&&!this.disabled&&a.preventDefault()}else this.disabled||a.preventDefault()};_getTargetHandle(a){return this._handles.find(e=>a.target&&(a.target===e||e.contains(a.target)))}_conditionallyInsertAnchor(a,e,t){if(a===this._initialContainer)this._anchor?.remove(),this._anchor=null;else if(e===this._initialContainer&&e.hasAnchor){let i=this._anchor??=co(this._placeholder);i.classList.remove(yl),i.classList.add(`cdk-drag-anchor`),i.style.transform=``,t?t.before(i):A$1(e.element).appendChild(i)}}};function wl(n,a,e){return Math.max(a,Math.min(e,n))}function ai(n){return n.type[0]===`t`}function Gu(n){n.preventDefault()}function Mn(n,a,e){let t=kl(a,n.length-1),i=kl(e,n.length-1);if(t===i)return;let o=n[t],r=i<t?-1:1;for(let u=t;u!==i;u+=r)n[u]=n[u+r];n[i]=o}function kl(n,a){return Math.max(0,Math.min(a,n))}var ca=class{_dragDropRegistry;_element;_sortPredicate;_itemPositions=[];_activeDraggables;orientation=`vertical`;direction=`ltr`;constructor(a){this._dragDropRegistry=a}_previousSwap={drag:null,delta:0,overlaps:!1};start(a){this.withItems(a)}sort(a,e,t,i){let o=this._itemPositions,r=this._getItemIndexFromPointerPosition(a,e,t,i);if(r===-1&&o.length>0)return null;let u=this.orientation===`horizontal`,C=o.findIndex(Je=>Je.drag===a),M=o[r],U=o[C].clientRect,ae=M.clientRect,Pe=C>r?1:-1,ht=this._getItemOffsetPx(U,ae,Pe),qc=this._getSiblingOffsetPx(C,o,Pe),$c=o.slice();return Mn(o,C,r),o.forEach((Je,Uc)=>{if($c[Uc]===Je)return;let Po=Je.drag===a,Da=Po?ht:qc,Oo=Po?a.getPlaceholderElement():Je.drag.getRootElement();Je.offset+=Da;let Lo=Math.round(Je.offset*(1/Je.drag.scale));u?(Oo.style.transform=la(`translate3d(${Lo}px, 0, 0)`,Je.initialTransform),oi(Je.clientRect,0,Da)):(Oo.style.transform=la(`translate3d(0, ${Lo}px, 0)`,Je.initialTransform),oi(Je.clientRect,Da,0))}),this._previousSwap.overlaps=mo(ae,e,t),this._previousSwap.drag=M.drag,this._previousSwap.delta=u?i.x:i.y,{previousIndex:C,currentIndex:r}}enter(a,e,t,i){let o=this._activeDraggables,r=o.indexOf(a),u=a.getPlaceholderElement();r>-1&&o.splice(r,1);let C=i==null||i<0?this._getItemIndexFromPointerPosition(a,e,t):i,M=o[C];if(M===a&&(M=o[C+1]),!M&&(C==null||C===-1||C<o.length-1)&&this._shouldEnterAsFirstChild(e,t)&&(M=o[0]),M&&!this._dragDropRegistry.isDragging(M)){let U=M.getRootElement();U.parentElement.insertBefore(u,U),o.splice(C,0,a)}else this._element.appendChild(u),o.push(a);u.style.transform=``,this._cacheItemPositions()}withItems(a){this._activeDraggables=a.slice(),this._cacheItemPositions()}withSortPredicate(a){this._sortPredicate=a}reset(){this._activeDraggables?.forEach(a=>{let e=a.getRootElement();if(e){let t=this._itemPositions.find(i=>i.drag===a)?.initialTransform;e.style.transform=t||``}}),this._itemPositions=[],this._activeDraggables=[],this._previousSwap.drag=null,this._previousSwap.delta=0,this._previousSwap.overlaps=!1}getActiveItemsSnapshot(){return this._activeDraggables}getItemIndex(a){return this._getVisualItemPositions().findIndex(e=>e.drag===a)}getItemAtIndex(a){return this._getVisualItemPositions()[a]?.drag||null}updateOnScroll(a,e){this._itemPositions.forEach(({clientRect:t})=>{oi(t,a,e)}),this._itemPositions.forEach(({drag:t})=>{this._dragDropRegistry.isDragging(t)&&t._sortFromLastPointerPosition()})}withElementContainer(a){this._element=a}_cacheItemPositions(){let a=this.orientation===`horizontal`;this._itemPositions=this._activeDraggables.map(e=>{let t=e.getVisibleElement();return{drag:e,offset:0,initialTransform:t.style.transform||``,clientRect:_o(t)}}).sort((e,t)=>a?e.clientRect.left-t.clientRect.left:e.clientRect.top-t.clientRect.top)}_getVisualItemPositions(){return this.orientation===`horizontal`&&this.direction===`rtl`?this._itemPositions.slice().reverse():this._itemPositions}_getItemOffsetPx(a,e,t){let i=this.orientation===`horizontal`,o=i?e.left-a.left:e.top-a.top;return t===-1&&(o+=i?e.width-a.width:e.height-a.height),o}_getSiblingOffsetPx(a,e,t){let i=this.orientation===`horizontal`,o=e[a].clientRect,r=e[a+t*-1],u=o[i?`width`:`height`]*t;if(r){let C=i?`left`:`top`,M=i?`right`:`bottom`;t===-1?u-=r.clientRect[C]-o[M]:u+=o[C]-r.clientRect[M]}return u}_shouldEnterAsFirstChild(a,e){if(!this._activeDraggables.length)return!1;let t=this._itemPositions,i=this.orientation===`horizontal`;if(t[0].drag!==this._activeDraggables[0]){let r=t[t.length-1].clientRect;return i?a>=r.right:e>=r.bottom}else{let r=t[0].clientRect;return i?a<=r.left:e<=r.top}}_getItemIndexFromPointerPosition(a,e,t,i){let o=this.orientation===`horizontal`,r=this._itemPositions.findIndex(({drag:u,clientRect:C})=>{if(u===a)return!1;if(i){let M=o?i.x:i.y;if(u===this._previousSwap.drag&&this._previousSwap.overlaps&&M===this._previousSwap.delta)return!1}return o?e>=Math.floor(C.left)&&e<Math.floor(C.right):t>=Math.floor(C.top)&&t<Math.floor(C.bottom)});return r===-1||!this._sortPredicate(r,a)?-1:r}};var ho=class{_document;_dragDropRegistry;_element;_sortPredicate;_rootNode;_activeItems;_previousSwap={drag:null,deltaX:0,deltaY:0,overlaps:!1};_relatedNodes=[];constructor(a,e){this._document=a,this._dragDropRegistry=e}start(a){let e=this._element.childNodes;this._relatedNodes=[];for(let t=0;t<e.length;t++){let i=e[t];this._relatedNodes.push([i,i.nextSibling])}this.withItems(a)}sort(a,e,t,i){let o=this._getItemIndexFromPointerPosition(a,e,t),r=this._previousSwap;if(o===-1||this._activeItems[o]===a)return null;let u=this._activeItems[o];if(r.drag===u&&r.overlaps&&r.deltaX===i.x&&r.deltaY===i.y)return null;let C=this.getItemIndex(a),M=a.getPlaceholderElement(),U=u.getRootElement();o>C?U.after(M):U.before(M),Mn(this._activeItems,C,o);let ae=this._getRootNode().elementFromPoint(e,t);return r.deltaX=i.x,r.deltaY=i.y,r.drag=u,r.overlaps=U===ae||U.contains(ae),{previousIndex:C,currentIndex:o}}enter(a,e,t,i){let o=this._activeItems.indexOf(a);o>-1&&this._activeItems.splice(o,1);let r=i==null||i<0?this._getItemIndexFromPointerPosition(a,e,t):i;r===-1&&(r=this._getClosestItemIndexToPointer(a,e,t));let u=this._activeItems[r];u&&!this._dragDropRegistry.isDragging(u)?(this._activeItems.splice(r,0,a),u.getRootElement().before(a.getPlaceholderElement())):(this._activeItems.push(a),this._element.appendChild(a.getPlaceholderElement()))}withItems(a){this._activeItems=a.slice()}withSortPredicate(a){this._sortPredicate=a}reset(){let a=this._element,e=this._previousSwap;for(let t=this._relatedNodes.length-1;t>-1;t--){let[i,o]=this._relatedNodes[t];i.parentNode===a&&i.nextSibling!==o&&(o===null?a.appendChild(i):o.parentNode===a&&a.insertBefore(i,o))}this._relatedNodes=[],this._activeItems=[],e.drag=null,e.deltaX=e.deltaY=0,e.overlaps=!1}getActiveItemsSnapshot(){return this._activeItems}getItemIndex(a){return this._activeItems.indexOf(a)}getItemAtIndex(a){return this._activeItems[a]||null}updateOnScroll(){this._activeItems.forEach(a=>{this._dragDropRegistry.isDragging(a)&&a._sortFromLastPointerPosition()})}withElementContainer(a){a!==this._element&&(this._element=a,this._rootNode=void 0)}_getItemIndexFromPointerPosition(a,e,t){let i=this._getRootNode().elementFromPoint(Math.floor(e),Math.floor(t)),o=i?this._activeItems.findIndex(r=>{let u=r.getRootElement();return i===u||u.contains(i)}):-1;return o===-1||!this._sortPredicate(o,a)?-1:o}_getRootNode(){return this._rootNode||(this._rootNode=Fe$3(this._element)||this._document),this._rootNode}_getClosestItemIndexToPointer(a,e,t){if(this._activeItems.length===0)return-1;if(this._activeItems.length===1)return 0;let i=Infinity,o=-1;for(let r=0;r<this._activeItems.length;r++){let u=this._activeItems[r];if(u!==a){let{x:C,y:M}=u.getRootElement().getBoundingClientRect(),U=Math.hypot(e-C,t-M);U<i&&(i=U,o=r)}}return o}};var Sl=.05;var Ml=.05;var st=(function(n){return n[n.NONE=0]=`NONE`,n[n.UP=1]=`UP`,n[n.DOWN=2]=`DOWN`,n})(st||{});var qe=(function(n){return n[n.NONE=0]=`NONE`,n[n.LEFT=1]=`LEFT`,n[n.RIGHT=2]=`RIGHT`,n})(qe||{});function Wu(n,a){return new fo(a,n.get(da),n.get(Ne$3),n.get(U$4),n.get(st$4))}var fo=class{_dragDropRegistry;_ngZone;_viewportRuler;element;disabled=!1;sortingDisabled=!1;lockAxis=null;autoScrollDisabled=!1;autoScrollStep=2;hasAnchor=!1;enterPredicate=()=>!0;sortPredicate=()=>!0;beforeStarted=new ee$3;entered=new ee$3;exited=new ee$3;dropped=new ee$3;sorted=new ee$3;receivingStarted=new ee$3;receivingStopped=new ee$3;data;_container;_isDragging=!1;_parentPositions;_sortStrategy;_domRect;_draggables=[];_siblings=[];_activeSiblings=new Set;_viewportScrollSubscription=V$3.EMPTY;_verticalScrollDirection=st.NONE;_horizontalScrollDirection=qe.NONE;_scrollNode;_stopScrollTimers=new ee$3;_cachedShadowRoot=null;_document;_scrollableElements=[];_initialScrollSnap;_direction=`ltr`;constructor(a,e,t,i,o){this._dragDropRegistry=e,this._ngZone=i,this._viewportRuler=o;let r=this.element=A$1(a);this._document=t,this.withOrientation(`vertical`).withElementContainer(r),e.registerDropContainer(this),this._parentPositions=new sa(t)}dispose(){this._stopScrolling(),this._stopScrollTimers.complete(),this._viewportScrollSubscription.unsubscribe(),this.beforeStarted.complete(),this.entered.complete(),this.exited.complete(),this.dropped.complete(),this.sorted.complete(),this.receivingStarted.complete(),this.receivingStopped.complete(),this._activeSiblings.clear(),this._scrollNode=null,this._parentPositions.clear(),this._dragDropRegistry.removeDropContainer(this)}isDragging(){return this._isDragging}start(){this._draggingStarted(),this._notifyReceivingSiblings()}enter(a,e,t,i){this._draggingStarted(),i==null&&this.sortingDisabled&&(i=this._draggables.indexOf(a)),this._sortStrategy.enter(a,e,t,i),this._cacheParentPositions(),this._notifyReceivingSiblings(),this.entered.next({item:a,container:this,currentIndex:this.getItemIndex(a)})}exit(a){this._reset(),this.exited.next({item:a,container:this})}drop(a,e,t,i,o,r,u,C){this._reset(),this.dropped.next({item:a,currentIndex:e,previousIndex:t,container:this,previousContainer:i,isPointerOverContainer:o,distance:r,dropPoint:u,event:C})}withItems(a){let e=this._draggables;return this._draggables=a,a.forEach(t=>t._withDropContainer(this)),this.isDragging()&&(e.filter(i=>i.isDragging()).every(i=>a.indexOf(i)===-1)?this._reset():this._sortStrategy.withItems(this._draggables)),this}withDirection(a){return this._direction=a,this._sortStrategy instanceof ca&&(this._sortStrategy.direction=a),this}connectedTo(a){return this._siblings=a.slice(),this}withOrientation(a){if(a===`mixed`)this._sortStrategy=new ho(this._document,this._dragDropRegistry);else{let e=new ca(this._dragDropRegistry);e.direction=this._direction,e.orientation=a,this._sortStrategy=e}return this._sortStrategy.withElementContainer(this._container),this._sortStrategy.withSortPredicate((e,t)=>this.sortPredicate(e,t,this)),this}withScrollableParents(a){let e=this._container;return this._scrollableElements=a.indexOf(e)===-1?[e,...a]:a.slice(),this}withElementContainer(a){if(a===this._container)return this;A$1(this.element);let t=this._scrollableElements.indexOf(this._container),i=this._scrollableElements.indexOf(a);return t>-1&&this._scrollableElements.splice(t,1),i>-1&&this._scrollableElements.splice(i,1),this._sortStrategy&&this._sortStrategy.withElementContainer(a),this._cachedShadowRoot=null,this._scrollableElements.unshift(a),this._container=a,this}getScrollableParents(){return this._scrollableElements}getItemIndex(a){return this._isDragging?this._sortStrategy.getItemIndex(a):this._draggables.indexOf(a)}getItemAtIndex(a){return this._isDragging?this._sortStrategy.getItemAtIndex(a):this._draggables[a]||null}isReceiving(){return this._activeSiblings.size>0}_sortItem(a,e,t,i){if(this.sortingDisabled||!this._domRect||!fl(this._domRect,Sl,e,t))return;let o=this._sortStrategy.sort(a,e,t,i);o&&this.sorted.next({previousIndex:o.previousIndex,currentIndex:o.currentIndex,container:this,item:a})}_startScrollingIfNecessary(a,e){if(this.autoScrollDisabled)return;let t,i=st.NONE,o=qe.NONE;if(this._parentPositions.positions.forEach((r,u)=>{u===this._document||!r.clientRect||t||fl(r.clientRect,Sl,a,e)&&([i,o]=qu(u,r.clientRect,this._direction,a,e),(i||o)&&(t=u))}),!i&&!o){let{width:r,height:u}=this._viewportRuler.getViewportSize(),C={width:r,height:u,top:0,right:r,bottom:u,left:0};i=Nl(C,e),o=Il(C,a),t=window}t&&(i!==this._verticalScrollDirection||o!==this._horizontalScrollDirection||t!==this._scrollNode)&&(this._verticalScrollDirection=i,this._horizontalScrollDirection=o,this._scrollNode=t,(i||o)&&t?this._ngZone.runOutsideAngular(this._startScrollInterval):this._stopScrolling())}_stopScrolling(){this._stopScrollTimers.next()}_draggingStarted(){let a=this._container.style;this.beforeStarted.next(),this._isDragging=!0,this._initialScrollSnap=a.msScrollSnapType||a.scrollSnapType||``,a.scrollSnapType=a.msScrollSnapType=`none`,this._sortStrategy.start(this._draggables),this._cacheParentPositions(),this._viewportScrollSubscription.unsubscribe(),this._listenToScrollEvents()}_cacheParentPositions(){this._parentPositions.cache(this._scrollableElements),this._domRect=this._parentPositions.positions.get(this._container).clientRect}_reset(){this._isDragging=!1;let a=this._container.style;a.scrollSnapType=a.msScrollSnapType=this._initialScrollSnap,this._siblings.forEach(e=>e._stopReceiving(this)),this._sortStrategy.reset(),this._stopScrolling(),this._viewportScrollSubscription.unsubscribe(),this._parentPositions.clear()}_startScrollInterval=()=>{this._stopScrolling(),jy(0,_y).pipe(ia$1(this._stopScrollTimers)).subscribe(()=>{let a=this._scrollNode,e=this.autoScrollStep;this._verticalScrollDirection===st.UP?a.scrollBy(0,-e):this._verticalScrollDirection===st.DOWN&&a.scrollBy(0,e),this._horizontalScrollDirection===qe.LEFT?a.scrollBy(-e,0):this._horizontalScrollDirection===qe.RIGHT&&a.scrollBy(e,0)})};_isOverContainer(a,e){return this._domRect!=null&&mo(this._domRect,a,e)}_getSiblingContainerFromPosition(a,e,t){return this._siblings.find(i=>i._canReceive(a,e,t))}_canReceive(a,e,t){if(!this._domRect||!mo(this._domRect,e,t)||!this.enterPredicate(a,this))return!1;let i=this._getShadowRoot().elementFromPoint(e,t);return i?i===this._container||this._container.contains(i):!1}_startReceiving(a,e){let t=this._activeSiblings;!t.has(a)&&e.every(i=>this.enterPredicate(i,this)||this._draggables.indexOf(i)>-1)&&(t.add(a),this._cacheParentPositions(),this._listenToScrollEvents(),this.receivingStarted.next({initiator:a,receiver:this,items:e}))}_stopReceiving(a){this._activeSiblings.delete(a),this._viewportScrollSubscription.unsubscribe(),this.receivingStopped.next({initiator:a,receiver:this})}_listenToScrollEvents(){this._viewportScrollSubscription=this._dragDropRegistry.scrolled(this._getShadowRoot()).subscribe(a=>{if(this.isDragging()){let e=this._parentPositions.handleScroll(a);e&&this._sortStrategy.updateOnScroll(e.top,e.left)}else this.isReceiving()&&this._cacheParentPositions()})}_getShadowRoot(){if(!this._cachedShadowRoot){let a=Fe$3(this._container);this._cachedShadowRoot=a||this._document}return this._cachedShadowRoot}_notifyReceivingSiblings(){let a=this._sortStrategy.getActiveItemsSnapshot().filter(e=>e.isDragging());this._siblings.forEach(e=>e._startReceiving(this,a))}};function Nl(n,a){let{top:e,bottom:t,height:i}=n,o=i*Ml;return a>=e-o&&a<=e+o?st.UP:a>=t-o&&a<=t+o?st.DOWN:st.NONE}function Il(n,a){let{left:e,right:t,width:i}=n,o=i*Ml;return a>=e-o&&a<=e+o?qe.LEFT:a>=t-o&&a<=t+o?qe.RIGHT:qe.NONE}function qu(n,a,e,t,i){let o=Nl(a,i),r=Il(a,t),u=st.NONE,C=qe.NONE;if(o){let M=n.scrollTop;o===st.UP?M>0&&(u=st.UP):n.scrollHeight-M>n.clientHeight&&(u=st.DOWN)}if(r){let M=n.scrollLeft;e===`rtl`?r===qe.RIGHT?M<0&&(C=qe.RIGHT):n.scrollWidth+M>n.clientWidth&&(C=qe.LEFT):r===qe.LEFT?M>0&&(C=qe.LEFT):n.scrollWidth-M>n.clientWidth&&(C=qe.RIGHT)}return[u,C]}var si=new S$1(`CDK_DRAG_PARENT`);var El=new S$1(`CdkDragHandle`);var ma=(()=>{class n{element=g$2(it$2);_parentDrag=g$2(si,{optional:!0,skipSelf:!0});_dragDropRegistry=g$2(da);_stateChanges=new ee$3;get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._stateChanges.next(this)}_disabled=!1;constructor(){this._parentDrag?._addHandle(this)}ngAfterViewInit(){if(!this._parentDrag){let e=this.element.nativeElement.parentElement;for(;e;){let t=this._dragDropRegistry.getDragDirectiveForNode(e);if(t){this._parentDrag=t,t._addHandle(this);break}e=e.parentElement}}}ngOnDestroy(){this._parentDrag?._removeHandle(this),this._stateChanges.complete()}static ɵfac=function(t){return new(t||n)};static ɵdir=En$3({type:n,selectors:[[``,`cdkDragHandle`,``]],hostAttrs:[1,`cdk-drag-handle`],inputs:{disabled:[2,`cdkDragHandleDisabled`,`disabled`,mo$2]},features:[Mb$1([{provide:El,useExisting:n}])]})}return n})();var Al=new S$1(`CDK_DRAG_CONFIG`);var Rl=new S$1(`CdkDropList`);var pa=(()=>{class n{element=g$2(it$2);dropContainer=g$2(Rl,{optional:!0,skipSelf:!0});_ngZone=g$2(U$4);_viewContainerRef=g$2(Dn$2);_dir=g$2(b$2,{optional:!0});_changeDetectorRef=g$2(Ls$1);_selfHandle=g$2(El,{optional:!0,self:!0});_parentDrag=g$2(si,{optional:!0,skipSelf:!0});_dragDropRegistry=g$2(da);_destroyed=new ee$3;_handles=new gr([]);_previewTemplate=null;_placeholderTemplate=null;_dragRef;data;lockAxis=null;rootElementSelector;boundaryElement;dragStartDelay;freeDragPosition;get disabled(){return this._disabled||!!(this.dropContainer&&this.dropContainer.disabled)}set disabled(e){this._disabled=e,this._dragRef.disabled=this._disabled}_disabled=!1;constrainPosition;previewClass;previewContainer;scale=1;started=new Ke$2;released=new Ke$2;ended=new Ke$2;entered=new Ke$2;exited=new Ke$2;dropped=new Ke$2;moved=new M$2(e=>{let t=this._dragRef.moved.pipe(Ye$2(i=>({source:this,pointerPosition:i.pointerPosition,event:i.event,delta:i.delta,distance:i.distance}))).subscribe(e);return()=>{t.unsubscribe()}});_injector=g$2(ne$1);constructor(){let e=this.dropContainer,t=g$2(Al,{optional:!0});this._dragRef=ju(this._injector,this.element,{dragStartThreshold:t&&t.dragStartThreshold!=null?t.dragStartThreshold:5,pointerDirectionChangeThreshold:t&&t.pointerDirectionChangeThreshold!=null?t.pointerDirectionChangeThreshold:5,zIndex:t?.zIndex}),this._dragRef.data=this,this._dragDropRegistry.registerDirectiveNode(this.element.nativeElement,this),t&&this._assignDefaults(t),e&&(e.addItem(this),e._dropListRef.beforeStarted.pipe(ia$1(this._destroyed)).subscribe(()=>{this._dragRef.scale=this.scale})),this._syncInputs(this._dragRef),this._handleEvents(this._dragRef)}getPlaceholderElement(){return this._dragRef.getPlaceholderElement()}getRootElement(){return this._dragRef.getRootElement()}reset(){this._dragRef.reset()}resetToBoundary(){this._dragRef.resetToBoundary()}getFreeDragPosition(){return this._dragRef.getFreeDragPosition()}setFreeDragPosition(e){this._dragRef.setFreeDragPosition(e)}ngAfterViewInit(){hh$1(()=>{this._updateRootElement(),this._setupHandlesListener(),this._dragRef.scale=this.scale,this.freeDragPosition&&this._dragRef.setFreeDragPosition(this.freeDragPosition)},{injector:this._injector})}ngOnChanges(e){let t=e.rootElementSelector,i=e.freeDragPosition;t&&!t.firstChange&&this._updateRootElement(),this._dragRef.scale=this.scale,i&&!i.firstChange&&this.freeDragPosition&&this._dragRef.setFreeDragPosition(this.freeDragPosition)}ngOnDestroy(){this.dropContainer&&this.dropContainer.removeItem(this),this._dragDropRegistry.removeDirectiveNode(this.element.nativeElement),this._ngZone.runOutsideAngular(()=>{this._handles.complete(),this._destroyed.next(),this._destroyed.complete(),this._dragRef.dispose()})}_addHandle(e){let t=this._handles.getValue();t.push(e),this._handles.next(t)}_removeHandle(e){let t=this._handles.getValue(),i=t.indexOf(e);i>-1&&(t.splice(i,1),this._handles.next(t))}_setPreviewTemplate(e){this._previewTemplate=e}_resetPreviewTemplate(e){e===this._previewTemplate&&(this._previewTemplate=null)}_setPlaceholderTemplate(e){this._placeholderTemplate=e}_resetPlaceholderTemplate(e){e===this._placeholderTemplate&&(this._placeholderTemplate=null)}_updateRootElement(){let e=this.element.nativeElement,t=e;this.rootElementSelector&&(t=e.closest!==void 0?e.closest(this.rootElementSelector):e.parentElement?.closest(this.rootElementSelector)),this._dragRef.withRootElement(t||e)}_getBoundaryElement(){let e=this.boundaryElement;return e?typeof e==`string`?this.element.nativeElement.closest(e):A$1(e):null}_syncInputs(e){e.beforeStarted.subscribe(()=>{if(!e.isDragging()){let t=this._dir,i=this.dragStartDelay,o=this._placeholderTemplate?{template:this._placeholderTemplate.templateRef,context:this._placeholderTemplate.data,viewContainer:this._viewContainerRef}:null,r=this._previewTemplate?{template:this._previewTemplate.templateRef,context:this._previewTemplate.data,matchSize:this._previewTemplate.matchSize,viewContainer:this._viewContainerRef}:null;e.disabled=this.disabled,e.lockAxis=this.lockAxis,e.scale=this.scale,e.dragStartDelay=typeof i==`object`&&i?i:w$1(i),e.constrainPosition=this.constrainPosition,e.previewClass=this.previewClass,e.withBoundaryElement(this._getBoundaryElement()).withPlaceholderTemplate(o).withPreviewTemplate(r).withPreviewContainer(this.previewContainer||`global`),t&&e.withDirection(t.value)}}),e.beforeStarted.pipe(Rn$2(1)).subscribe(()=>{if(this._parentDrag){e.withParent(this._parentDrag._dragRef);return}let t=this.element.nativeElement.parentElement;for(;t;){let i=this._dragDropRegistry.getDragDirectiveForNode(t);if(i){e.withParent(i._dragRef);break}t=t.parentElement}})}_handleEvents(e){e.started.subscribe(t=>{this.started.emit({source:this,event:t.event}),this._changeDetectorRef.markForCheck()}),e.released.subscribe(t=>{this.released.emit({source:this,event:t.event})}),e.ended.subscribe(t=>{this.ended.emit({source:this,distance:t.distance,dropPoint:t.dropPoint,event:t.event}),this._changeDetectorRef.markForCheck()}),e.entered.subscribe(t=>{this.entered.emit({container:t.container.data,item:this,currentIndex:t.currentIndex})}),e.exited.subscribe(t=>{this.exited.emit({container:t.container.data,item:this})}),e.dropped.subscribe(t=>{this.dropped.emit({previousIndex:t.previousIndex,currentIndex:t.currentIndex,previousContainer:t.previousContainer.data,container:t.container.data,isPointerOverContainer:t.isPointerOverContainer,item:this,distance:t.distance,dropPoint:t.dropPoint,event:t.event})})}_assignDefaults(e){let{lockAxis:t,dragStartDelay:i,constrainPosition:o,previewClass:r,boundaryElement:u,draggingDisabled:C,rootElementSelector:M,previewContainer:U}=e;this.disabled=C??!1,this.dragStartDelay=i||0,this.lockAxis=t||null,o&&(this.constrainPosition=o),r&&(this.previewClass=r),u&&(this.boundaryElement=u),M&&(this.rootElementSelector=M),U&&(this.previewContainer=U)}_setupHandlesListener(){this._handles.pipe(cd$1(e=>{let t=e.map(i=>i.element);this._selfHandle&&this.rootElementSelector&&t.push(this.element),this._dragRef.withHandles(t)}),ad$1(e=>Vy(...e.map(t=>t._stateChanges.pipe(Ky(t))))),ia$1(this._destroyed)).subscribe(e=>{let t=this._dragRef,i=e.element.nativeElement;e.disabled?t.disableHandle(i):t.enableHandle(i)})}static ɵfac=function(t){return new(t||n)};static ɵdir=En$3({type:n,selectors:[[``,`cdkDrag`,``]],hostAttrs:[1,`cdk-drag`],hostVars:4,hostBindings:function(t,i){t&2&&Jg(`cdk-drag-disabled`,i.disabled)(`cdk-drag-dragging`,i._dragRef.isDragging())},inputs:{data:[0,`cdkDragData`,`data`],lockAxis:[0,`cdkDragLockAxis`,`lockAxis`],rootElementSelector:[0,`cdkDragRootElement`,`rootElementSelector`],boundaryElement:[0,`cdkDragBoundary`,`boundaryElement`],dragStartDelay:[0,`cdkDragStartDelay`,`dragStartDelay`],freeDragPosition:[0,`cdkDragFreeDragPosition`,`freeDragPosition`],disabled:[2,`cdkDragDisabled`,`disabled`,mo$2],constrainPosition:[0,`cdkDragConstrainPosition`,`constrainPosition`],previewClass:[0,`cdkDragPreviewClass`,`previewClass`],previewContainer:[0,`cdkDragPreviewContainer`,`previewContainer`],scale:[2,`cdkDragScale`,`scale`,yl$1]},outputs:{started:`cdkDragStarted`,released:`cdkDragReleased`,ended:`cdkDragEnded`,entered:`cdkDragEntered`,exited:`cdkDragExited`,dropped:`cdkDragDropped`,moved:`cdkDragMoved`},exportAs:[`cdkDrag`],features:[Mb$1([{provide:si,useExisting:n}]),sr$1]})}return n})();var Dl=new S$1(`CdkDropListGroup`);var ua=(()=>{class n{element=g$2(it$2);_changeDetectorRef=g$2(Ls$1);_scrollDispatcher=g$2(G$3);_dir=g$2(b$2,{optional:!0});_group=g$2(Dl,{optional:!0,skipSelf:!0});_latestSortedRefs;_destroyed=new ee$3;_scrollableParentsResolved=!1;static _dropLists=[];_dropListRef;connectedTo=[];data;orientation=`vertical`;id=g$2(Pe$2).getId(`cdk-drop-list-`);lockAxis=null;get disabled(){return this._disabled||!!this._group&&this._group.disabled}set disabled(e){this._dropListRef.disabled=this._disabled=e}_disabled=!1;sortingDisabled=!1;enterPredicate=()=>!0;sortPredicate=()=>!0;autoScrollDisabled=!1;autoScrollStep;elementContainerSelector=null;hasAnchor=!1;dropped=new Ke$2;entered=new Ke$2;exited=new Ke$2;sorted=new Ke$2;_unsortedItems=new Set;constructor(){let e=g$2(Al,{optional:!0}),t=g$2(ne$1);this._dropListRef=Wu(t,this.element),this._dropListRef.data=this,e&&this._assignDefaults(e),this._dropListRef.enterPredicate=(i,o)=>this.enterPredicate(i.data,o.data),this._dropListRef.sortPredicate=(i,o,r)=>this.sortPredicate(i,o.data,r.data),this._setupInputSyncSubscription(this._dropListRef),this._handleEvents(this._dropListRef),n._dropLists.push(this),this._group&&this._group._items.add(this)}addItem(e){this._unsortedItems.add(e),e._dragRef._withDropContainer(this._dropListRef),this._dropListRef.isDragging()&&this._syncItemsWithRef(this.getSortedItems().map(t=>t._dragRef))}removeItem(e){if(this._unsortedItems.delete(e),this._latestSortedRefs){let t=this._latestSortedRefs.indexOf(e._dragRef);t>-1&&(this._latestSortedRefs.splice(t,1),this._syncItemsWithRef(this._latestSortedRefs))}}getSortedItems(){return Array.from(this._unsortedItems).sort((e,t)=>e._dragRef.getVisibleElement().compareDocumentPosition(t._dragRef.getVisibleElement())&Node.DOCUMENT_POSITION_FOLLOWING?-1:1)}ngOnDestroy(){let e=n._dropLists.indexOf(this);e>-1&&n._dropLists.splice(e,1),this._group&&this._group._items.delete(this),this._latestSortedRefs=void 0,this._unsortedItems.clear(),this._dropListRef.dispose(),this._destroyed.next(),this._destroyed.complete()}_setupInputSyncSubscription(e){this._dir&&this._dir.change.pipe(Ky(this._dir.value),ia$1(this._destroyed)).subscribe(t=>e.withDirection(t)),e.beforeStarted.subscribe(()=>{let t=S$2(this.connectedTo).map(i=>{if(typeof i==`string`)return n._dropLists.find(r=>r.id===i);return i});if(this._group&&this._group._items.forEach(i=>{t.indexOf(i)===-1&&t.push(i)}),!this._scrollableParentsResolved){let i=this._scrollDispatcher.getAncestorScrollContainers(this.element).map(o=>o.getElementRef().nativeElement);this._dropListRef.withScrollableParents(i),this._scrollableParentsResolved=!0}if(this.elementContainerSelector){let i=this.element.nativeElement.querySelector(this.elementContainerSelector);e.withElementContainer(i)}e.disabled=this.disabled,e.lockAxis=this.lockAxis,e.sortingDisabled=this.sortingDisabled,e.autoScrollDisabled=this.autoScrollDisabled,e.autoScrollStep=w$1(this.autoScrollStep,2),e.hasAnchor=this.hasAnchor,e.connectedTo(t.filter(i=>i&&i!==this).map(i=>i._dropListRef)).withOrientation(this.orientation)})}_handleEvents(e){e.beforeStarted.subscribe(()=>{this._syncItemsWithRef(this.getSortedItems().map(t=>t._dragRef)),this._changeDetectorRef.markForCheck()}),e.entered.subscribe(t=>{this.entered.emit({container:this,item:t.item.data,currentIndex:t.currentIndex})}),e.exited.subscribe(t=>{this.exited.emit({container:this,item:t.item.data}),this._changeDetectorRef.markForCheck()}),e.sorted.subscribe(t=>{this.sorted.emit({previousIndex:t.previousIndex,currentIndex:t.currentIndex,container:this,item:t.item.data})}),e.dropped.subscribe(t=>{this.dropped.emit({previousIndex:t.previousIndex,currentIndex:t.currentIndex,previousContainer:t.previousContainer.data,container:t.container.data,item:t.item.data,isPointerOverContainer:t.isPointerOverContainer,distance:t.distance,dropPoint:t.dropPoint,event:t.event}),this._changeDetectorRef.markForCheck()}),Vy(e.receivingStarted,e.receivingStopped).subscribe(()=>this._changeDetectorRef.markForCheck())}_assignDefaults(e){let{lockAxis:t,draggingDisabled:i,sortingDisabled:o,listAutoScrollDisabled:r,listOrientation:u}=e;this.disabled=i??!1,this.sortingDisabled=o??!1,this.autoScrollDisabled=r??!1,this.orientation=u||`vertical`,this.lockAxis=t||null}_syncItemsWithRef(e){this._latestSortedRefs=e,this._dropListRef.withItems(e)}static ɵfac=function(t){return new(t||n)};static ɵdir=En$3({type:n,selectors:[[``,`cdkDropList`,``],[`cdk-drop-list`]],hostAttrs:[1,`cdk-drop-list`],hostVars:7,hostBindings:function(t,i){t&2&&(Rg(`id`,i.id),Jg(`cdk-drop-list-disabled`,i.disabled)(`cdk-drop-list-dragging`,i._dropListRef.isDragging())(`cdk-drop-list-receiving`,i._dropListRef.isReceiving()))},inputs:{connectedTo:[0,`cdkDropListConnectedTo`,`connectedTo`],data:[0,`cdkDropListData`,`data`],orientation:[0,`cdkDropListOrientation`,`orientation`],id:`id`,lockAxis:[0,`cdkDropListLockAxis`,`lockAxis`],disabled:[2,`cdkDropListDisabled`,`disabled`,mo$2],sortingDisabled:[2,`cdkDropListSortingDisabled`,`sortingDisabled`,mo$2],enterPredicate:[0,`cdkDropListEnterPredicate`,`enterPredicate`],sortPredicate:[0,`cdkDropListSortPredicate`,`sortPredicate`],autoScrollDisabled:[2,`cdkDropListAutoScrollDisabled`,`autoScrollDisabled`,mo$2],autoScrollStep:[0,`cdkDropListAutoScrollStep`,`autoScrollStep`],elementContainerSelector:[0,`cdkDropListElementContainer`,`elementContainerSelector`],hasAnchor:[2,`cdkDropListHasAnchor`,`hasAnchor`,mo$2]},outputs:{dropped:`cdkDropListDropped`,entered:`cdkDropListEntered`,exited:`cdkDropListExited`,sorted:`cdkDropListSorted`},exportAs:[`cdkDropList`],features:[Mb$1([{provide:Dl,useValue:void 0},{provide:Rl,useExisting:n}])]})}return n})();var $u=new S$1(`CdkDragPreview`);var Fl=(()=>{class n{templateRef=g$2(rr$1);_drag=g$2(si,{optional:!0});data;matchSize=!1;constructor(){this._drag?._setPreviewTemplate(this)}ngOnDestroy(){this._drag?._resetPreviewTemplate(this)}static ɵfac=function(t){return new(t||n)};static ɵdir=En$3({type:n,selectors:[[`ng-template`,`cdkDragPreview`,``]],inputs:{data:`data`,matchSize:[2,`matchSize`,`matchSize`,mo$2]},features:[Mb$1([{provide:$u,useExisting:n}])]})}return n})();var Uu=new S$1(`CdkDragPlaceholder`);var ha=(()=>{class n{templateRef=g$2(rr$1);_drag=g$2(si,{optional:!0});data;constructor(){this._drag?._setPlaceholderTemplate(this)}ngOnDestroy(){this._drag?._resetPlaceholderTemplate(this)}static ɵfac=function(t){return new(t||n)};static ɵdir=En$3({type:n,selectors:[[`ng-template`,`cdkDragPlaceholder`,``]],inputs:{data:`data`},features:[Mb$1([{provide:Uu,useExisting:n}])]})}return n})();var Qu=[`input`];var Zu=[`*`];var go={color:`accent`,clickAction:`check-indeterminate`,disabledInteractive:!1};var Xu=new S$1(`mat-checkbox-default-options`,{providedIn:`root`,factory:()=>go});var ze=(function(n){return n[n.Init=0]=`Init`,n[n.Checked=1]=`Checked`,n[n.Unchecked=2]=`Unchecked`,n[n.Indeterminate=3]=`Indeterminate`,n})(ze||{});var vo=class{source;checked};var fa=(()=>{class n{_elementRef=g$2(it$2);_changeDetectorRef=g$2(Ls$1);_ngZone=g$2(U$4);_animationsDisabled=ai$3();_options=g$2(Xu,{optional:!0});focus(){this._inputElement.nativeElement.focus()}_createChangeEvent(e){let t=new vo;return t.source=this,t.checked=e,t}_getAnimationTargetElement(){return this._inputElement?.nativeElement}_animationClasses={uncheckedToChecked:`mdc-checkbox--anim-unchecked-checked`,uncheckedToIndeterminate:`mdc-checkbox--anim-unchecked-indeterminate`,checkedToUnchecked:`mdc-checkbox--anim-checked-unchecked`,checkedToIndeterminate:`mdc-checkbox--anim-checked-indeterminate`,indeterminateToChecked:`mdc-checkbox--anim-indeterminate-checked`,indeterminateToUnchecked:`mdc-checkbox--anim-indeterminate-unchecked`};ariaLabel=``;ariaLabelledby=null;ariaDescribedby;ariaExpanded;ariaControls;ariaOwns;_uniqueId;id;get inputId(){return`${this.id||this._uniqueId}-input`}required=!1;labelPosition=`after`;name=null;change=new Ke$2;indeterminateChange=new Ke$2;value;disableRipple=!1;_inputElement;tabIndex;color;disabledInteractive;_onTouched=()=>{};_currentAnimationClass=``;_currentCheckState=ze.Init;_controlValueAccessorChangeFn=()=>{};_validatorChangeFn=()=>{};constructor(){g$2($$2).load(Vt);let e=g$2(new Tm$1(`tabindex`),{optional:!0});this._options=this._options||go,this.color=this._options.color||go.color,this.tabIndex=e==null?0:parseInt(e)||0,this.id=this._uniqueId=g$2(Pe$2).getId(`mat-mdc-checkbox-`),this.disabledInteractive=this._options?.disabledInteractive??!1}ngOnChanges(e){e.required&&this._validatorChangeFn()}ngAfterViewInit(){this._syncIndeterminate(this.indeterminate)}get checked(){return this._checked}set checked(e){e!=this.checked&&(this._checked=e,this._changeDetectorRef.markForCheck())}_checked=!1;get disabled(){return this._disabled}set disabled(e){e!==this.disabled&&(this._disabled=e,this._changeDetectorRef.markForCheck())}_disabled=!1;get indeterminate(){return this._indeterminate()}set indeterminate(e){let t=e!=this._indeterminate();this._indeterminate.set(e),t&&(e?this._transitionCheckState(ze.Indeterminate):this._transitionCheckState(this.checked?ze.Checked:ze.Unchecked),this.indeterminateChange.emit(e)),this._syncIndeterminate(e)}_indeterminate=xe$3(!1);_isRippleDisabled(){return this.disableRipple||this.disabled}_onLabelTextChange(){this._changeDetectorRef.detectChanges()}writeValue(e){this.checked=!!e}registerOnChange(e){this._controlValueAccessorChangeFn=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e}validate(e){return this.required&&e.value!==!0?{required:!0}:null}registerOnValidatorChange(e){this._validatorChangeFn=e}_transitionCheckState(e){let t=this._currentCheckState,i=this._getAnimationTargetElement();if(!(t===e||!i)&&(this._currentAnimationClass&&i.classList.remove(this._currentAnimationClass),this._currentAnimationClass=this._getAnimationClassForCheckStateTransition(t,e),this._currentCheckState=e,this._currentAnimationClass.length>0)){i.classList.add(this._currentAnimationClass);let o=this._currentAnimationClass;this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{i.classList.remove(o)},1e3)})}}_emitChangeEvent(){this._controlValueAccessorChangeFn(this.checked),this.change.emit(this._createChangeEvent(this.checked)),this._inputElement&&(this._inputElement.nativeElement.checked=this.checked)}toggle(){this.checked=!this.checked,this._controlValueAccessorChangeFn(this.checked)}_handleInputClick(){let e=this._options?.clickAction;!this.disabled&&e!==`noop`?(this.indeterminate&&e!==`check`&&Promise.resolve().then(()=>{this._indeterminate.set(!1),this.indeterminateChange.emit(!1)}),this._checked=!this._checked,this._transitionCheckState(this._checked?ze.Checked:ze.Unchecked),this._emitChangeEvent()):(this.disabled&&this.disabledInteractive||!this.disabled&&e===`noop`)&&(this._inputElement.nativeElement.checked=this.checked,this._inputElement.nativeElement.indeterminate=this.indeterminate)}_onInteractionEvent(e){e.stopPropagation()}_onBlur(){Promise.resolve().then(()=>{this._onTouched(),this._changeDetectorRef.markForCheck()})}_getAnimationClassForCheckStateTransition(e,t){if(this._animationsDisabled)return``;switch(e){case ze.Init:if(t===ze.Checked)return this._animationClasses.uncheckedToChecked;if(t==ze.Indeterminate)return this._checked?this._animationClasses.checkedToIndeterminate:this._animationClasses.uncheckedToIndeterminate;break;case ze.Unchecked:return t===ze.Checked?this._animationClasses.uncheckedToChecked:this._animationClasses.uncheckedToIndeterminate;case ze.Checked:return t===ze.Unchecked?this._animationClasses.checkedToUnchecked:this._animationClasses.checkedToIndeterminate;case ze.Indeterminate:return t===ze.Checked?this._animationClasses.indeterminateToChecked:this._animationClasses.indeterminateToUnchecked}return``}_syncIndeterminate(e){let t=this._inputElement;t&&(t.nativeElement.indeterminate=e)}_onInputClick(){this._handleInputClick()}_preventBubblingFromLabel(e){e.target&&this._inputElement&&e.target!==this._inputElement.nativeElement&&e.stopPropagation()}static ɵfac=function(t){return new(t||n)};static ɵcmp=NC({type:n,selectors:[[`mat-checkbox`]],viewQuery:function(t,i){if(t&1&&qg(Qu,5),t&2){let o;Ww(o=qw())&&(i._inputElement=o.first)}},hostAttrs:[1,`mat-mdc-checkbox`],hostVars:16,hostBindings:function(t,i){t&2&&(Hg(`id`,i.id),Rg(`tabindex`,null)(`aria-label`,null)(`aria-labelledby`,null),sb$1(i.color?`mat-`+i.color:`mat-accent`),Jg(`_mat-animation-noopable`,i._animationsDisabled)(`mdc-checkbox--disabled`,i.disabled)(`mat-mdc-checkbox-disabled`,i.disabled)(`mat-mdc-checkbox-checked`,i.checked)(`mat-mdc-checkbox-disabled-interactive`,i.disabledInteractive))},inputs:{ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`],ariaDescribedby:[0,`aria-describedby`,`ariaDescribedby`],ariaExpanded:[2,`aria-expanded`,`ariaExpanded`,mo$2],ariaControls:[0,`aria-controls`,`ariaControls`],ariaOwns:[0,`aria-owns`,`ariaOwns`],id:`id`,required:[2,`required`,`required`,mo$2],labelPosition:`labelPosition`,name:`name`,value:`value`,disableRipple:[2,`disableRipple`,`disableRipple`,mo$2],tabIndex:[2,`tabIndex`,`tabIndex`,e=>e==null?void 0:yl$1(e)],color:`color`,disabledInteractive:[2,`disabledInteractive`,`disabledInteractive`,mo$2],checked:[2,`checked`,`checked`,mo$2],disabled:[2,`disabled`,`disabled`,mo$2],indeterminate:[2,`indeterminate`,`indeterminate`,mo$2]},outputs:{change:`change`,indeterminateChange:`indeterminateChange`},exportAs:[`matCheckbox`],features:[Mb$1([{provide:Qn,useExisting:ri$4(()=>n),multi:!0},{provide:Zn,useExisting:n,multi:!0}]),sr$1],ngContentSelectors:Zu,decls:15,vars:23,consts:[[`checkbox`,``],[`input`,``],[`label`,``],[`mat-internal-form-field`,``,3,`click`,`labelPosition`,`for`],[1,`mdc-checkbox`],[`aria-hidden`,`true`,1,`mat-mdc-checkbox-touch-target`],[`type`,`checkbox`,1,`mdc-checkbox__native-control`,3,`blur`,`click`,`change`,`checked`,`indeterminate`,`disabled`,`id`,`required`,`tabIndex`],[`aria-hidden`,`true`,1,`mdc-checkbox__ripple`],[`aria-hidden`,`true`,1,`mdc-checkbox__background`],[`focusable`,`false`,`viewBox`,`0 0 24 24`,1,`mdc-checkbox__checkmark`],[`fill`,`none`,`d`,`M1.73,12.91 8.1,19.28 22.79,4.59`,1,`mdc-checkbox__checkmark-path`],[1,`mdc-checkbox__mixedmark`],[`mat-ripple`,``,`aria-hidden`,`true`,1,`mat-mdc-checkbox-ripple`,`mat-focus-indicator`,3,`matRippleTrigger`,`matRippleDisabled`,`matRippleCentered`],[1,`mat-internal-form-field-label`,`mdc-label`]],template:function(t,i){if(t&1&&(Uw(),cs$1(0,`label`,3),Ug(`click`,function(r){return i._preventBubblingFromLabel(r)}),cs$1(1,`span`,4,0),kg(3,`span`,5),cs$1(4,`input`,6,1),Ug(`blur`,function(){return i._onBlur()})(`click`,function(){return i._onInputClick()})(`change`,function(r){return i._onInteractionEvent(r)}),Ju$1(),kg(6,`span`,7),cs$1(7,`span`,8),sf$1(),cs$1(8,`svg`,9),kg(9,`path`,10),Ju$1(),af$1(),kg(10,`span`,11),Ju$1(),kg(11,`span`,12),Ju$1(),cs$1(12,`span`,13,2),Gw(14),Ju$1()()),t&2){let o=Yw(2);Og(`labelPosition`,i.labelPosition)(`for`,i.inputId),lI(4),Jg(`mdc-checkbox--selected`,i.checked),Og(`checked`,i.checked)(`indeterminate`,i.indeterminate)(`disabled`,i.disabled&&!i.disabledInteractive)(`id`,i.inputId)(`required`,i.required)(`tabIndex`,i.disabled&&!i.disabledInteractive?-1:i.tabIndex),Rg(`aria-label`,i.ariaLabel||null)(`aria-labelledby`,i.ariaLabelledby)(`aria-describedby`,i.ariaDescribedby)(`aria-checked`,i.indeterminate?`mixed`:null)(`aria-controls`,i.ariaControls)(`aria-disabled`,i.disabled&&i.disabledInteractive?!0:null)(`aria-expanded`,i.ariaExpanded)(`aria-owns`,i.ariaOwns)(`name`,i.name)(`value`,i.value),lI(7),Og(`matRippleTrigger`,o)(`matRippleDisabled`,i.disableRipple||i.disabled)(`matRippleCentered`,!0)}},dependencies:[Tn$1,oa],styles:[`.mdc-checkbox {
  display: inline-block;
  position: relative;
  flex: 0 0 18px;
  box-sizing: content-box;
  width: 18px;
  height: 18px;
  line-height: 0;
  white-space: nowrap;
  cursor: pointer;
  vertical-align: bottom;
  padding: calc((var(--%NS%mat-checkbox-state-layer-size, 40px) - 18px) / 2);
  margin: calc((var(--%NS%mat-checkbox-state-layer-size, 40px) - var(--%NS%mat-checkbox-state-layer-size, 40px)) / 2);
}
.mdc-checkbox:hover > .mdc-checkbox__ripple {
  opacity: var(--%NS%mat-checkbox-unselected-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
  background-color: var(--%NS%mat-checkbox-unselected-hover-state-layer-color, var(--%NS%mat-sys-on-surface));
}
.mdc-checkbox:hover > .mat-mdc-checkbox-ripple > .mat-ripple-element {
  background-color: var(--%NS%mat-checkbox-unselected-hover-state-layer-color, var(--%NS%mat-sys-on-surface));
}
.mdc-checkbox .mdc-checkbox__native-control:focus + .mdc-checkbox__ripple {
  opacity: var(--%NS%mat-checkbox-unselected-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
  background-color: var(--%NS%mat-checkbox-unselected-focus-state-layer-color, var(--%NS%mat-sys-on-surface));
}
.mdc-checkbox .mdc-checkbox__native-control:focus ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--%NS%mat-checkbox-unselected-focus-state-layer-color, var(--%NS%mat-sys-on-surface));
}
.mdc-checkbox:active > .mdc-checkbox__native-control + .mdc-checkbox__ripple {
  opacity: var(--%NS%mat-checkbox-unselected-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
  background-color: var(--%NS%mat-checkbox-unselected-pressed-state-layer-color, var(--%NS%mat-sys-primary));
}
.mdc-checkbox:active > .mdc-checkbox__native-control ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--%NS%mat-checkbox-unselected-pressed-state-layer-color, var(--%NS%mat-sys-primary));
}
.mdc-checkbox:hover > .mdc-checkbox__native-control:checked + .mdc-checkbox__ripple {
  opacity: var(--%NS%mat-checkbox-selected-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
  background-color: var(--%NS%mat-checkbox-selected-hover-state-layer-color, var(--%NS%mat-sys-primary));
}
.mdc-checkbox:hover > .mdc-checkbox__native-control:checked ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--%NS%mat-checkbox-selected-hover-state-layer-color, var(--%NS%mat-sys-primary));
}
.mdc-checkbox .mdc-checkbox__native-control:focus:checked + .mdc-checkbox__ripple {
  opacity: var(--%NS%mat-checkbox-selected-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
  background-color: var(--%NS%mat-checkbox-selected-focus-state-layer-color, var(--%NS%mat-sys-primary));
}
.mdc-checkbox .mdc-checkbox__native-control:focus:checked ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--%NS%mat-checkbox-selected-focus-state-layer-color, var(--%NS%mat-sys-primary));
}
.mdc-checkbox:active > .mdc-checkbox__native-control:checked + .mdc-checkbox__ripple {
  opacity: var(--%NS%mat-checkbox-selected-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
  background-color: var(--%NS%mat-checkbox-selected-pressed-state-layer-color, var(--%NS%mat-sys-on-surface));
}
.mdc-checkbox:active > .mdc-checkbox__native-control:checked ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--%NS%mat-checkbox-selected-pressed-state-layer-color, var(--%NS%mat-sys-on-surface));
}
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control ~ .mat-mdc-checkbox-ripple .mat-ripple-element,
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control + .mdc-checkbox__ripple {
  background-color: var(--%NS%mat-checkbox-unselected-hover-state-layer-color, var(--%NS%mat-sys-on-surface));
}
.mdc-checkbox .mdc-checkbox__native-control {
  position: absolute;
  margin: 0;
  padding: 0;
  opacity: 0;
  cursor: inherit;
  z-index: 1;
  width: var(--%NS%mat-checkbox-state-layer-size, 40px);
  height: var(--%NS%mat-checkbox-state-layer-size, 40px);
  top: calc((var(--%NS%mat-checkbox-state-layer-size, 40px) - var(--%NS%mat-checkbox-state-layer-size, 40px)) / 2);
  right: calc((var(--%NS%mat-checkbox-state-layer-size, 40px) - var(--%NS%mat-checkbox-state-layer-size, 40px)) / 2);
  left: calc((var(--%NS%mat-checkbox-state-layer-size, 40px) - var(--%NS%mat-checkbox-state-layer-size, 40px)) / 2);
}

.mdc-checkbox--disabled {
  cursor: default;
  pointer-events: none;
}

.mdc-checkbox__background {
  display: inline-flex;
  position: absolute;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 18px;
  height: 18px;
  border: 2px solid currentColor;
  border-radius: 2px;
  background-color: transparent;
  pointer-events: none;
  will-change: background-color, border-color;
  transition: background-color 90ms cubic-bezier(0.4, 0, 0.6, 1), border-color 90ms cubic-bezier(0.4, 0, 0.6, 1);
  -webkit-print-color-adjust: exact;
  color-adjust: exact;
  border-color: var(--%NS%mat-checkbox-unselected-icon-color, var(--%NS%mat-sys-on-surface-variant));
  top: calc((var(--%NS%mat-checkbox-state-layer-size, 40px) - 18px) / 2);
  left: calc((var(--%NS%mat-checkbox-state-layer-size, 40px) - 18px) / 2);
}

.mdc-checkbox__native-control:enabled:checked ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:enabled:indeterminate ~ .mdc-checkbox__background {
  border-color: var(--%NS%mat-checkbox-selected-icon-color, var(--%NS%mat-sys-primary));
  background-color: var(--%NS%mat-checkbox-selected-icon-color, var(--%NS%mat-sys-primary));
}

.mdc-checkbox--disabled .mdc-checkbox__background {
  border-color: var(--%NS%mat-checkbox-disabled-unselected-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mdc-checkbox--disabled .mdc-checkbox__background {
    border-color: GrayText;
  }
}

.mdc-checkbox__native-control:disabled:checked ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:disabled:indeterminate ~ .mdc-checkbox__background {
  background-color: var(--%NS%mat-checkbox-disabled-selected-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  border-color: transparent;
}
@media (forced-colors: active) {
  .mdc-checkbox__native-control:disabled:checked ~ .mdc-checkbox__background,
  .mdc-checkbox__native-control:disabled:indeterminate ~ .mdc-checkbox__background {
    border-color: GrayText;
  }
}

.mdc-checkbox:hover > .mdc-checkbox__native-control:not(:checked) ~ .mdc-checkbox__background,
.mdc-checkbox:hover > .mdc-checkbox__native-control:not(:indeterminate) ~ .mdc-checkbox__background {
  border-color: var(--%NS%mat-checkbox-unselected-hover-icon-color, var(--%NS%mat-sys-on-surface));
  background-color: transparent;
}

.mdc-checkbox:hover > .mdc-checkbox__native-control:checked ~ .mdc-checkbox__background,
.mdc-checkbox:hover > .mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background {
  border-color: var(--%NS%mat-checkbox-selected-hover-icon-color, var(--%NS%mat-sys-primary));
  background-color: var(--%NS%mat-checkbox-selected-hover-icon-color, var(--%NS%mat-sys-primary));
}

.mdc-checkbox__native-control:focus:focus:not(:checked) ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:focus:focus:not(:indeterminate) ~ .mdc-checkbox__background {
  border-color: var(--%NS%mat-checkbox-unselected-focus-icon-color, var(--%NS%mat-sys-on-surface));
}

.mdc-checkbox__native-control:focus:focus:checked ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:focus:focus:indeterminate ~ .mdc-checkbox__background {
  border-color: var(--%NS%mat-checkbox-selected-focus-icon-color, var(--%NS%mat-sys-primary));
  background-color: var(--%NS%mat-checkbox-selected-focus-icon-color, var(--%NS%mat-sys-primary));
}

.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox:hover > .mdc-checkbox__native-control ~ .mdc-checkbox__background,
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control:focus ~ .mdc-checkbox__background,
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__background {
  border-color: var(--%NS%mat-checkbox-disabled-unselected-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox:hover > .mdc-checkbox__native-control ~ .mdc-checkbox__background,
  .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control:focus ~ .mdc-checkbox__background,
  .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__background {
    border-color: GrayText;
  }
}
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__native-control:checked ~ .mdc-checkbox__background,
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background {
  background-color: var(--%NS%mat-checkbox-disabled-selected-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  border-color: transparent;
}

.mdc-checkbox__checkmark {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  opacity: 0;
  transition: opacity 180ms cubic-bezier(0.4, 0, 0.6, 1);
  color: var(--%NS%mat-checkbox-selected-checkmark-color, var(--%NS%mat-sys-on-primary));
}
@media (forced-colors: active) {
  .mdc-checkbox__checkmark {
    color: CanvasText;
  }
}

.mdc-checkbox--disabled .mdc-checkbox__checkmark, .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__checkmark {
  color: var(--%NS%mat-checkbox-disabled-selected-checkmark-color, var(--%NS%mat-sys-surface));
}
@media (forced-colors: active) {
  .mdc-checkbox--disabled .mdc-checkbox__checkmark, .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__checkmark {
    color: GrayText;
  }
}

.mdc-checkbox__checkmark-path {
  transition: stroke-dashoffset 180ms cubic-bezier(0.4, 0, 0.6, 1);
  stroke: currentColor;
  stroke-width: 3.12px;
  stroke-dashoffset: 29.7833385;
  stroke-dasharray: 29.7833385;
}

.mdc-checkbox__mixedmark {
  width: 100%;
  height: 0;
  transform: scaleX(0) rotate(0deg);
  border-width: 1px;
  border-style: solid;
  opacity: 0;
  transition: opacity 90ms cubic-bezier(0.4, 0, 0.6, 1), transform 90ms cubic-bezier(0.4, 0, 0.6, 1);
  border-color: var(--%NS%mat-checkbox-selected-checkmark-color, var(--%NS%mat-sys-on-primary));
}
@media (forced-colors: active) {
  .mdc-checkbox__mixedmark {
    margin: 0 1px;
  }
}

.mdc-checkbox--disabled .mdc-checkbox__mixedmark, .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__mixedmark {
  border-color: var(--%NS%mat-checkbox-disabled-selected-checkmark-color, var(--%NS%mat-sys-surface));
}
@media (forced-colors: active) {
  .mdc-checkbox--disabled .mdc-checkbox__mixedmark, .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__mixedmark {
    border-color: GrayText;
  }
}

.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__background,
.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__background,
.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__background,
.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__background {
  animation-duration: 180ms;
  animation-timing-function: linear;
}

.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__checkmark-path {
  animation: mdc-checkbox-unchecked-checked-checkmark-path 180ms linear;
  transition: none;
}

.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-unchecked-indeterminate-mixedmark 90ms linear;
  transition: none;
}

.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__checkmark-path {
  animation: mdc-checkbox-checked-unchecked-checkmark-path 90ms linear;
  transition: none;
}

.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__checkmark {
  animation: mdc-checkbox-checked-indeterminate-checkmark 90ms linear;
  transition: none;
}
.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-checked-indeterminate-mixedmark 90ms linear;
  transition: none;
}

.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__checkmark {
  animation: mdc-checkbox-indeterminate-checked-checkmark 500ms linear;
  transition: none;
}
.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-indeterminate-checked-mixedmark 500ms linear;
  transition: none;
}

.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-indeterminate-unchecked-mixedmark 300ms linear;
  transition: none;
}

.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background {
  transition: border-color 90ms cubic-bezier(0, 0, 0.2, 1), background-color 90ms cubic-bezier(0, 0, 0.2, 1);
}
.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background > .mdc-checkbox__checkmark > .mdc-checkbox__checkmark-path,
.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background > .mdc-checkbox__checkmark > .mdc-checkbox__checkmark-path {
  stroke-dashoffset: 0;
}

.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background > .mdc-checkbox__checkmark {
  transition: opacity 180ms cubic-bezier(0, 0, 0.2, 1), transform 180ms cubic-bezier(0, 0, 0.2, 1);
  opacity: 1;
}
.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background > .mdc-checkbox__mixedmark {
  transform: scaleX(1) rotate(-45deg);
}

.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background > .mdc-checkbox__checkmark {
  transform: rotate(45deg);
  opacity: 0;
  transition: opacity 90ms cubic-bezier(0.4, 0, 0.6, 1), transform 90ms cubic-bezier(0.4, 0, 0.6, 1);
}
.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background > .mdc-checkbox__mixedmark {
  transform: scaleX(1) rotate(0deg);
  opacity: 1;
}

@keyframes mdc-checkbox-unchecked-checked-checkmark-path {
  0%, 50% {
    stroke-dashoffset: 29.7833385;
  }
  50% {
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  100% {
    stroke-dashoffset: 0;
  }
}
@keyframes mdc-checkbox-unchecked-indeterminate-mixedmark {
  0%, 68.2% {
    transform: scaleX(0);
  }
  68.2% {
    animation-timing-function: cubic-bezier(0, 0, 0, 1);
  }
  100% {
    transform: scaleX(1);
  }
}
@keyframes mdc-checkbox-checked-unchecked-checkmark-path {
  from {
    animation-timing-function: cubic-bezier(0.4, 0, 1, 1);
    opacity: 1;
    stroke-dashoffset: 0;
  }
  to {
    opacity: 0;
    stroke-dashoffset: -29.7833385;
  }
}
@keyframes mdc-checkbox-checked-indeterminate-checkmark {
  from {
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    transform: rotate(0deg);
    opacity: 1;
  }
  to {
    transform: rotate(45deg);
    opacity: 0;
  }
}
@keyframes mdc-checkbox-indeterminate-checked-checkmark {
  from {
    animation-timing-function: cubic-bezier(0.14, 0, 0, 1);
    transform: rotate(45deg);
    opacity: 0;
  }
  to {
    transform: rotate(360deg);
    opacity: 1;
  }
}
@keyframes mdc-checkbox-checked-indeterminate-mixedmark {
  from {
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    transform: rotate(-45deg);
    opacity: 0;
  }
  to {
    transform: rotate(0deg);
    opacity: 1;
  }
}
@keyframes mdc-checkbox-indeterminate-checked-mixedmark {
  from {
    animation-timing-function: cubic-bezier(0.14, 0, 0, 1);
    transform: rotate(0deg);
    opacity: 1;
  }
  to {
    transform: rotate(315deg);
    opacity: 0;
  }
}
@keyframes mdc-checkbox-indeterminate-unchecked-mixedmark {
  0% {
    animation-timing-function: linear;
    transform: scaleX(1);
    opacity: 1;
  }
  32.8%, 100% {
    transform: scaleX(0);
    opacity: 0;
  }
}
.mat-mdc-checkbox {
  display: inline-block;
  position: relative;
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mat-mdc-checkbox-touch-target,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__native-control,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__ripple,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mat-mdc-checkbox-ripple::before,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__background,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__background > .mdc-checkbox__checkmark,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__background > .mdc-checkbox__checkmark > .mdc-checkbox__checkmark-path,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__background > .mdc-checkbox__mixedmark {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-checkbox label {
  cursor: pointer;
}
.mat-mdc-checkbox .mat-internal-form-field {
  color: var(--%NS%mat-checkbox-label-text-color, var(--%NS%mat-sys-on-surface));
  font-family: var(--%NS%mat-checkbox-label-text-font, var(--%NS%mat-sys-body-medium-font));
  line-height: var(--%NS%mat-checkbox-label-text-line-height, var(--%NS%mat-sys-body-medium-line-height));
  font-size: var(--%NS%mat-checkbox-label-text-size, var(--%NS%mat-sys-body-medium-size));
  letter-spacing: var(--%NS%mat-checkbox-label-text-tracking, var(--%NS%mat-sys-body-medium-tracking));
  font-weight: var(--%NS%mat-checkbox-label-text-weight, var(--%NS%mat-sys-body-medium-weight));
}
.mat-mdc-checkbox.mat-mdc-checkbox-disabled.mat-mdc-checkbox-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-checkbox.mat-mdc-checkbox-disabled.mat-mdc-checkbox-disabled-interactive input {
  cursor: default;
}
.mat-mdc-checkbox.mat-mdc-checkbox-disabled label {
  cursor: default;
}
.mat-mdc-checkbox.mat-mdc-checkbox-disabled .mat-internal-form-field-label {
  color: var(--%NS%mat-checkbox-disabled-label-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mat-mdc-checkbox.mat-mdc-checkbox-disabled .mat-internal-form-field-label {
    color: GrayText;
  }
}
.mat-mdc-checkbox .mat-internal-form-field-label:empty {
  display: none;
}
.mat-mdc-checkbox .mdc-checkbox__ripple {
  opacity: 0;
}

.mat-mdc-checkbox .mat-mdc-checkbox-ripple,
.mdc-checkbox__ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
}
.mat-mdc-checkbox .mat-mdc-checkbox-ripple:not(:empty),
.mdc-checkbox__ripple:not(:empty) {
  transform: translateZ(0);
}

.mat-mdc-checkbox-ripple .mat-ripple-element {
  opacity: 0.1;
}

.mat-mdc-checkbox-touch-target {
  position: absolute;
  top: 50%;
  left: 50%;
  height: var(--%NS%mat-checkbox-touch-target-size, 48px);
  width: var(--%NS%mat-checkbox-touch-target-size, 48px);
  transform: translate(-50%, -50%);
  display: var(--%NS%mat-checkbox-touch-target-display, block);
}

.mat-mdc-checkbox .mat-mdc-checkbox-ripple::before {
  border-radius: 50%;
}

.mdc-checkbox__native-control:focus-visible ~ .mat-focus-indicator::before {
  content: "";
}
`],encapsulation:2})}return n})();var xo=(n,a)=>a.key;function Ku(n,a){if(n&1){let e=Vw();cs$1(0,`div`,7),Ug(`click`,function(i){return Wd$1(e),i.stopPropagation(),qd$1(i.preventDefault())}),yb$1(1),kb$1(2,`translate`),Ju$1()}n&2&&(lI(),rl$1(` `,Lb$1(2,1,`ui.table.active_columns`),` `))}function Yu(n,a){if(n&1){let e=Vw();cs$1(0,`div`,9),Ug(`click`,function(i){let o=Wd$1(e).$implicit;return qd$1(Hw(4).handleCheckboxClick(i,o))}),cs$1(1,`div`,10)(2,`mat-checkbox`,11),yb$1(3),kb$1(4,`translate`),Ju$1()()()}if(n&2){let e=a.$implicit,t=Hw(4);lI(2),Og(`checked`,!e.hide)(`labelPosition`,`before`),lI(),rl$1(` `,Lb$1(4,3,t.getCellLabel(e)),` `)}}function Ju(n,a){if(n&1&&(cs$1(0,`div`,5),Ow(1,Yu,5,5,`div`,8,xo),Ju$1()),n&2){let e=Hw(3);lI(),kw(e.visibleCells())}}function eh(n,a){n&1&&(cs$1(0,`div`,19)(1,`mat-icon`,20),yb$1(2,`drag_handle `),Ju$1()())}function th(n,a){if(n&1&&(cs$1(0,`div`)(1,`mat-icon`,20),yb$1(2,`drag_handle `),Ju$1(),yb$1(3),kb$1(4,`translate`),Ju$1()),n&2){let e=Hw().$implicit,t=Hw(4);lI(3),rl$1(` `,Lb$1(4,1,t.getCellLabel(e)),` `)}}function nh(n,a){if(n&1){let e=Vw();cs$1(0,`div`,14),Ug(`click`,function(i){let o=Wd$1(e).$implicit;return qd$1(Hw(4).handleCheckboxClick(i,o))}),cs$1(1,`div`,15),Ig(2,eh,3,0,`div`,16)(3,th,5,3,`div`,17),cs$1(4,`mat-icon`,18),yb$1(5,` drag_handle `),Ju$1(),cs$1(6,`mat-checkbox`,11),yb$1(7),kb$1(8,`translate`),Ju$1()()()}if(n&2){let e=a.$implicit,t=Hw(4);lI(6),Og(`checked`,!e.hide)(`labelPosition`,`before`),lI(),rl$1(` `,Lb$1(8,3,t.getCellLabel(e)),` `)}}function ih(n,a){if(n&1){let e=Vw();cs$1(0,`div`,6)(1,`div`,12),Ug(`cdkDropListDropped`,function(i){Wd$1(e);return qd$1(Hw(3).drop(i))}),Ow(2,nh,9,5,`div`,13,xo),Ju$1()()}if(n&2){let e=Hw(3);lI(),Og(`cdkDropListData`,e.visibleCells()),lI(),kw(e.visibleCells())}}function ah(n,a){if(n&1&&(Nw(0,Ku,3,3,`div`,4),Nw(1,Ju,3,0,`div`,5)(2,ih,4,1,`div`,6)),n&2){let e=Hw(2);xw(e.showFilterHeader()&&e.visibleCells().length>0?0:-1),lI(),xw(e.toggleAndMoveColumns()?2:1)}}function oh(n,a){if(n&1){let e=Vw();cs$1(0,`div`,22),Ug(`click`,function(i){return Wd$1(e),i.stopPropagation(),qd$1(i.preventDefault())}),yb$1(1),kb$1(2,`translate`),Ju$1()}n&2&&(lI(),rl$1(` `,Lb$1(2,1,`ui.table.inactive_columns`),` `))}function rh(n,a){if(n&1){let e=Vw();cs$1(0,`div`,9),Ug(`click`,function(i){let o=Wd$1(e).$implicit;return qd$1(Hw(3).handleCheckboxClick(i,o))}),cs$1(1,`div`,10)(2,`mat-checkbox`,11),yb$1(3),kb$1(4,`translate`),Ju$1()()()}if(n&2){let e=a.$implicit,t=Hw(3);lI(2),Og(`checked`,!e.hide)(`labelPosition`,`before`),lI(),rl$1(` `,Lb$1(4,3,t.getCellLabel(e)),` `)}}function sh(n,a){if(n&1&&(Nw(0,oh,3,3,`div`,21),cs$1(1,`div`,5),Ow(2,rh,5,5,`div`,8,xo),Ju$1()),n&2){let e=Hw(2);xw(e.showFilterHeader()&&e.hiddenCells().length>0?0:-1),lI(2),kw(e.hiddenCells())}}function lh(n,a){if(n&1&&(cs$1(0,`div`,1)(1,`button`,2)(2,`mat-icon`),yb$1(3),Ju$1()(),cs$1(4,`mat-menu`,3,0),Nw(6,ah,3,2),Nw(7,sh,4,1),Ju$1()()),n&2){let e=Yw(5),t=Hw();lI(),Og(`matMenuTriggerFor`,e),lI(2),im$1(t.filterIcon()),lI(3),xw(t.visibleCells()?6:-1),lI(),xw(t.hiddenCells()?7:-1)}}var Pl=(()=>{class n{constructor(){this.table=g$2(ve),this.filterableTableCells=qe$3(()=>this.table.columns().filter(e=>!e.alwaysVisible)),this.visibleCells=qe$3(()=>this.filterableTableCells().filter(e=>!e.hide)),this.hiddenCells=qe$3(()=>this.filterableTableCells().filter(e=>!!e.hide)),this.filterIcon=Zj(`filter_alt`),this.showFilterHeader=Zj(!0),this.toggleAndMoveColumns=Zj(!1),this.filterChanged=qj()}getCellLabel(e){return ye$2(e.label,e)}handleCheckboxClick(e,t){e.stopPropagation(),e.preventDefault();let i=this.filterableTableCells(),o=i.findIndex(r=>r.key===t.key);i[o].hide=!i[o].hide,this.filterChanged.emit(i)}drop(e){let t=this.filterableTableCells(),i=this.visibleCells();Mn(i,e.previousIndex,e.currentIndex),i.forEach((o,r)=>{let u=t.findIndex(C=>C.key===o.key);t[u].columnOrder=r}),this.filterChanged.emit(t)}static{this.ɵfac=function(t){return new(t||n)}}static{this.ɵcmp=NC({type:n,selectors:[[`lab900-table-filter-menu`]],inputs:{filterIcon:[1,`filterIcon`],showFilterHeader:[1,`showFilterHeader`],toggleAndMoveColumns:[1,`toggleAndMoveColumns`]},outputs:{filterChanged:`filterChanged`},decls:1,vars:1,consts:[[`filterMenu`,``],[1,`lab900-table-filter-menu`],[`color`,`primary`,`mat-icon-button`,``,3,`matMenuTriggerFor`],[1,`lab900-table-filter-menu__mat-menu`],[1,`lab900-table-filter-menu__option`,`lab900-table-filter-menu__option--bold`,`lab900-table-filter-menu__title`],[1,`lab900-table-filter-menu__items-container`],[`cdkScrollable`,``,1,`lab900-table-filter-menu__items-container`],[1,`lab900-table-filter-menu__option`,`lab900-table-filter-menu__option--bold`,`lab900-table-filter-menu__title`,3,`click`],[1,`lab900-table-filter-menu__option`],[1,`lab900-table-filter-menu__option`,3,`click`],[1,`lab900-table-filter-menu__option--padding`],[`color`,`primary`,1,`lab900-table-filter-menu__checkbox`,3,`checked`,`labelPosition`],[`cdkDropList`,``,3,`cdkDropListDropped`,`cdkDropListData`],[`cdkDrag`,``,1,`lab900-table-filter-menu__option`],[`cdkDrag`,``,1,`lab900-table-filter-menu__option`,3,`click`],[1,`lab900-table-filter-menu__option--padding`,`center-row`],[`class`,`lab900-table-filter-menu__drag-placeholder`,4,`cdkDragPlaceholder`],[4,`cdkDragPreview`],[`cdkDragHandle`,``,1,`lab900-table-filter-menu__drag-icon`],[1,`lab900-table-filter-menu__drag-placeholder`],[1,`lab900-table-filter-menu__drag-icon`],[1,`lab900-table-filter-menu__option`,`lab900-table-filter-menu__option--bold`,`lab900-table-filter-menu__title`,`lab900-table-filter-menu__title--middle`],[1,`lab900-table-filter-menu__option`,`lab900-table-filter-menu__option--bold`,`lab900-table-filter-menu__title`,`lab900-table-filter-menu__title--middle`,3,`click`]],template:function(t,i){t&1&&Nw(0,lh,8,4,`div`,1),t&2&&xw(i.filterableTableCells()?0:-1)},dependencies:[ua,pa,ha,Fl,ma,Fe,ln,Dn,wt,fa,rt$2,xn$4],styles:[`.lab900-table-filter-menu>.mat-mdc-icon-button{display:flex;align-items:center;justify-content:center;padding:0}.lab900-table-filter-menu__mat-menu{overflow:hidden}::ng-deep .lab900-table-filter-menu__mat-menu.mat-mdc-menu-panel{height:fit-content!important;min-height:fit-content!important}::ng-deep .lab900-table-filter-menu__mat-menu.mat-mdc-menu-panel .mat-mdc-menu-content{padding:0}.lab900-table-filter-menu__items-container{max-height:205px;overflow:auto}.lab900-table-filter-menu__option{border-bottom:1px solid #dde6e9;cursor:pointer}.lab900-table-filter-menu__option--padding{padding:8px 16px}.lab900-table-filter-menu__option--padding.center-row{display:flex;align-items:center;justify-content:center}.lab900-table-filter-menu__option--bold{font-weight:700}.lab900-table-filter-menu__title{cursor:unset!important;padding:8px 16px}.lab900-table-filter-menu__title--middle{border-top:1px solid #dde6e9}.lab900-table-filter-menu__checkbox{width:100%}.lab900-table-filter-menu__checkbox ::ng-deep .mdc-form-field--align-end{width:100%;justify-content:space-between}.lab900-table-filter-menu__checkbox ::ng-deep .mdc-form-field--align-end>label{margin:0}.lab900-table-filter-menu__drag-icon{color:#dde6e9;margin-right:10px;cursor:move;align-self:center}.lab900-table-filter-menu__drag-placeholder{opacity:.4;background:#0003;padding:8px 16px;display:flex;align-content:center}.cdk-drop-dragging .cdk-drag{transition:transform .3s cubic-bezier(0,0,.2,1)}.cdk-drag-animating{transition:transform .35s cubic-bezier(0,0,.2,1)}
`],encapsulation:2})}}return n})();function ch(n,a){n&1&&Pg(0)}function dh(n,a){if(n&1&&Ig(0,ch,1,0,`ng-container`,3),n&2)Og(`ngTemplateOutlet`,Hw(2).tableHeaderContent())}function mh(n,a){if(n&1&&kg(0,`lab900-action-button`,4),n&2){let e=a.$implicit;Og(`action`,e)}}function ph(n,a){if(n&1&&(cs$1(0,`div`,1),Ow(1,mh,1,1,`lab900-action-button`,4,Rw),Ju$1()),n&2){let e=Hw(2);lI(),kw(e.tableHeaderActions())}}function uh(n,a){if(n&1){let e=Vw();cs$1(0,`lab900-table-filter-menu`,5),Ug(`filterChanged`,function(i){Wd$1(e);return qd$1(Hw(2).tableCellsFiltered.emit(i))}),Ju$1()}if(n&2){let e=Hw(2);Og(`filterIcon`,e.filterIcon())(`showFilterHeader`,e.showFilterHeader())(`toggleAndMoveColumns`,e.toggleAndMoveColumns())}}function hh(n,a){if(n&1&&(cs$1(0,`div`,0),Nw(1,dh,1,1,`ng-container`),Nw(2,ph,3,0,`div`,1),Nw(3,uh,1,3,`lab900-table-filter-menu`,2),Ju$1()),n&2){let e=Hw();lI(),xw(e.tableHeaderContent()?1:-1),lI(),xw(e.tableHeaderActions().length?2:-1),lI(),xw(e.showFilterMenu()?3:-1)}}var Ol=(()=>{class n{constructor(){this.tableHeaderContent=Zj(void 0),this.tableHeaderActions=Zj([]),this.filterIcon=Zj(`filter_alt`),this.showFilterHeader=Zj(!0),this.toggleAndMoveColumns=Zj(!1),this.toggleColumns=Zj(!0),this.tableCellsFiltered=qj(),this.showFilterMenu=qe$3(()=>this.toggleColumns()||this.toggleAndMoveColumns()),this.showHeader=qe$3(()=>this.showFilterMenu()||this.tableHeaderActions().length>0||!!this.tableHeaderContent())}static{this.ɵfac=function(t){return new(t||n)}}static{this.ɵcmp=NC({type:n,selectors:[[`lab900-table-header`]],inputs:{tableHeaderContent:[1,`tableHeaderContent`],tableHeaderActions:[1,`tableHeaderActions`],filterIcon:[1,`filterIcon`],showFilterHeader:[1,`showFilterHeader`],toggleAndMoveColumns:[1,`toggleAndMoveColumns`],toggleColumns:[1,`toggleColumns`]},outputs:{tableCellsFiltered:`tableCellsFiltered`},decls:1,vars:1,consts:[[1,`lab900-table-header`],[1,`lab900-table-header__action`],[3,`filterIcon`,`showFilterHeader`,`toggleAndMoveColumns`],[4,`ngTemplateOutlet`],[3,`action`],[3,`filterChanged`,`filterIcon`,`showFilterHeader`,`toggleAndMoveColumns`]],template:function(t,i){t&1&&Nw(0,hh,4,3,`div`,0),t&2&&xw(i.showHeader()?0:-1)},dependencies:[Pl,N_$1,Ft],styles:[`.lab900-table-header,.lab900-table-header__action{display:flex;flex-wrap:wrap;justify-content:flex-end;align-items:center;gap:8px}
`],encapsulation:2})}}return n})();var fh=(n,a)=>a.id;function _h(n,a){if(n&1){let e=Vw();Xu$1(0,`button`,2),Gg(`click`,function(){let i=Wd$1(e).$implicit;return qd$1(Hw(2).changeTable(i))}),Xu$1(1,`span`,3),yb$1(2),kb$1(3,`translate`),el$1()()}if(n&2){let e=a.$implicit,t=Hw(2);sb$1(bb$1(`tab `,e.id)),Jg(`active`,t.activeTabId()===e?.id),lI(2),im$1(Lb$1(3,6,e.label))}}function bh(n,a){if(n&1&&(Xu$1(0,`nav`,0),Ow(1,_h,4,8,`button`,1,fh),el$1()),n&2){let e=Hw();lI(),kw(e.tableTabs())}}var Ll=(()=>{class n{constructor(){this.tableTabs=Zj.required(),this.activeTabId=Yj.required()}changeTable(e){this.activeTabId.set(e.id)}static{this.ɵfac=function(t){return new(t||n)}}static{this.ɵcmp=NC({type:n,selectors:[[`lab900-table-tabs`]],inputs:{tableTabs:[1,`tableTabs`],activeTabId:[1,`activeTabId`]},outputs:{activeTabId:`activeTabIdChange`},decls:1,vars:1,consts:[[1,`lab900-table-tabs`],[3,`class`,`active`],[3,`click`],[1,`label`]],template:function(t,i){t&1&&Nw(0,bh,3,0,`nav`,0),t&2&&xw(i.tableTabs().length?0:-1)},dependencies:[xn$4],styles:[`.lab900-table-tabs{position:relative;z-index:1;white-space:nowrap;display:flex}.lab900-table-tabs button{position:relative;padding:0 calc(2em + 4px) 0 1em;cursor:pointer;overflow:hidden;border:1px solid #dde6e9;border-bottom:0;outline:0;border-top-right-radius:26px;border-top-left-radius:4px;display:flex;align-items:center;font-weight:700;height:26px}.lab900-table-tabs button .label{line-height:36px;display:block;margin-right:10px;font-size:12px}.lab900-table-tabs button:not(:first-child){margin-left:-.5em}.lab900-table-tabs button.active{background:#fff;z-index:2}
`],encapsulation:2})}}return n})();var gh=[`rowCheckbox`];var vh=[`selectAllCheckbox`];function xh(n,a){if(n&1){let e=Vw();cs$1(0,`mat-checkbox`,8,0),Ug(`change`,function(i){Wd$1(e);return qd$1(Hw(2).handleSelectAllCheckbox(i))})(`click`,function(i){return i.stopImmediatePropagation()}),Ju$1()}if(n&2){let e=Hw(2);Og(`color`,e.color())(`disabled`,e.disabled())(`checked`,e.allSelected())(`disableRipple`,!0)}}function yh(n,a){if(n&1&&(cs$1(0,`th`,6),Nw(1,xh,2,4,`mat-checkbox`,7),Ju$1()),n&2){let e=Hw();lI(),xw(e.showSelectAll()?1:-1)}}function Ch(n,a){if(n&1){let e=Vw();cs$1(0,`mat-checkbox`,11,1),Ug(`change`,function(){Wd$1(e);let i=Hw().$implicit;return qd$1(Hw().selectRow.emit(i))})(`click`,function(i){return i.stopImmediatePropagation()}),Ju$1()}if(n&2){let e=Hw().$implicit,t=Hw();Og(`color`,t.color())(`checked`,t.isChecked(e))(`disabled`,t.isDisabled(e))(`disableRipple`,!0)}}function wh(n,a){if(n&1&&(cs$1(0,`td`,9),Nw(1,Ch,2,4,`mat-checkbox`,10),Ju$1()),n&2){let e=a.$implicit;lI(),xw(e?._hideSelectableRow?-1:1)}}function kh(n,a){n&1&&kg(0,`td`,5)}function Sh(n,a){n&1&&Ig(0,kh,1,0,`td`,12)}var Vl=(()=>{class n{constructor(){this.table=g$2(Ge$1,{optional:!0,skipSelf:!0}),this.rowCheckboxes=Kj(`rowCheckbox`),this.selectAllCheckbox=Qj(`selectAllCheckbox`),this.columnDef=Qj(ci$2),this.showFooter=Zj(!1),this.selection=Zj.required(),this.allSelected=sH(iH(this.selection).pipe(Ir(e=>!!e),ad$1(e=>e.changed),Ye$2(e=>e?.source?.selected?.length===this.rowCheckboxes()?.length))),this.options=Zj.required(),this.color=qe$3(()=>this.options()?.checkBoxColor??`primary`),this.sticky=qe$3(()=>this.options()?.sticky?this.options()?.position:void 0),this.showSelectAll=qe$3(()=>this.options()?.showSelectAllCheckbox??!1),this.disabled=qe$3(()=>this.options()?.disabled??!1),this.selectRow=qj(),this.selectAll=qj()}ngOnInit(){let e=this.columnDef();this.table&&e&&this.table.addColumnDef(e)}ngOnDestroy(){let e=this.columnDef();this.table&&e&&this.table.removeColumnDef(e)}handleSelectAllCheckbox({checked:e}){this.rowCheckboxes().forEach(t=>t.checked=e),this.selectAll.emit(e)}isChecked(e){return!!this.selection()?.isSelected(e)}isDisabled(e){return this.isChecked(e)?!1:this.disabled()}static{this.ɵfac=function(t){return new(t||n)}}static{this.ɵcmp=NC({type:n,selectors:[[`lab900-table-cell-select`]],viewQuery:function(t,i){t&1&&Yg(i.rowCheckboxes,gh,5)(i.selectAllCheckbox,vh,5)(i.columnDef,ci$2,5),t&2&&Zw(3)},inputs:{showFooter:[1,`showFooter`],selection:[1,`selection`],options:[1,`options`]},outputs:{selectRow:`selectRow`,selectAll:`selectAll`},decls:4,vars:3,consts:[[`selectAllCheckbox`,``],[`rowCheckbox`,``],[`matColumnDef`,`select`,3,`sticky`,`stickyEnd`],[`mat-header-cell`,``,`class`,`checkbox-cell`,4,`matHeaderCellDef`],[`mat-cell`,``,`class`,`checkbox-cell`,4,`matCellDef`],[`mat-footer-cell`,``],[`mat-header-cell`,``,1,`checkbox-cell`],[3,`color`,`disabled`,`checked`,`disableRipple`],[3,`change`,`click`,`color`,`disabled`,`checked`,`disableRipple`],[`mat-cell`,``,1,`checkbox-cell`],[3,`color`,`checked`,`disabled`,`disableRipple`],[3,`change`,`click`,`color`,`checked`,`disabled`,`disableRipple`],[`mat-footer-cell`,``,4,`matFooterCellDef`]],template:function(t,i){t&1&&(tl$1(0,2),Ig(1,yh,2,1,`th`,3)(2,wh,2,1,`td`,4),Nw(3,Sh,1,0,`td`,5),Ss$1()),t&2&&(Og(`sticky`,i.sticky()===`left`)(`stickyEnd`,i.sticky()===`right`),lI(3),xw(i.showFooter()?3:-1))},dependencies:[fa,di$2,fi$1,hi$1,ci$2,ri$2,li$2,ai$2],encapsulation:2})}}return n})();var yo=(()=>{class n{constructor(){this.columnConfig=Zj.required(),this.disableSort=Zj(!1),this.renderOptions=qe$3(()=>this.columnConfig().headerRenderOptions),this.columnLabel=qe$3(()=>ye$2(this.columnConfig().label,this.columnConfig()))}static{this.ɵfac=function(t){return new(t||n)}}static{this.ɵdir=En$3({type:n,inputs:{columnConfig:[1,`columnConfig`],disableSort:[1,`disableSort`]}})}}return n})();function Dh(n,a){if(n&1&&(Xu$1(0,`span`,0),yb$1(1),el$1()),n&2){let e=Hw();lI(),rl$1(` `,e.svgIcon(),` `)}}var Co=(()=>{class n{constructor(){this.tableService=g$2(Y$3),this.columnConfig=Zj.required(),this.sortDirection=qe$3(()=>this.tableService.sort()?.find(t=>t.id===(this.columnConfig().sortKey??this.columnConfig().key))?.direction??``),this.svgIcon=qe$3(()=>{let e=this.sortDirection();return e===`asc`?`north`:e===`desc`?`south`:``})}static{this.ɵfac=function(t){return new(t||n)}}static{this.ɵcmp=NC({type:n,selectors:[[`lab900-column-header-sorting`]],inputs:{columnConfig:[1,`columnConfig`]},decls:1,vars:1,consts:[[`aria-hidden`,`true`,1,`material-icons`,`lab900-sort-arrow`]],template:function(t,i){t&1&&Nw(0,Dh,2,1,`span`,0),t&2&&xw(i.svgIcon().length?0:-1)},styles:[`.lab900-sort-arrow{font-size:12px;display:block;margin-left:4px}
`],encapsulation:2})}}return n})();function Th(n,a){if(n&1&&kg(0,`lab900-column-header-sorting`,1),n&2)Og(`columnConfig`,Hw().columnConfig())}var Bl=(()=>{class n extends yo{static{this.ɵfac=(()=>{let e;return function(i){return(e||(e=Cp$1(n)))(i||n)}})()}static{this.ɵcmp=NC({type:n,selectors:[[`lab900-default-column-header-renderer`]],features:[Dg],decls:4,vars:4,consts:[[1,`lab900-column-header`],[3,`columnConfig`]],template:function(t,i){t&1&&(cs$1(0,`div`,0),yb$1(1),kb$1(2,`translate`),Nw(3,Th,1,1,`lab900-column-header-sorting`,1),Ju$1()),t&2&&(lI(),rl$1(` `,Lb$1(2,2,i.columnLabel()),` `),lI(2),xw(i.disableSort()?-1:3))},dependencies:[Co,xn$4],styles:[`.lab900-column-header{display:flex;align-items:center}
`],encapsulation:2})}}return n})();var Mh=[`determinateSpinner`];function Nh(n,a){if(n&1&&(sf$1(),cs$1(0,`svg`,11),kg(1,`circle`,12),Ju$1()),n&2){let e=Hw();Rg(`viewBox`,e._viewBox()),lI(),Ms$1(`stroke-dasharray`,e._strokeCircumference(),`px`)(`stroke-dashoffset`,e._strokeCircumference()/2,`px`)(`stroke-width`,e._circleStrokeWidth(),`%`),Rg(`r`,e._circleRadius())}}var Ih=new S$1(`mat-progress-spinner-default-options`,{providedIn:`root`,factory:()=>({diameter:zl})});var zl=100;var Eh=10;var Hl=(()=>{class n{_elementRef=g$2(it$2);_noopAnimations;get color(){return this._color||this._defaultColor}set color(e){this._color=e}_color;_defaultColor=`primary`;_determinateCircle;constructor(){let e=g$2(Ih),t=tn$2(),i=this._elementRef.nativeElement;this._noopAnimations=t===`di-disabled`&&!!e&&!e._forceAnimations,this.mode=i.nodeName.toLowerCase()===`mat-spinner`?`indeterminate`:`determinate`,!this._noopAnimations&&t===`reduced-motion`&&i.classList.add(`mat-progress-spinner-reduced-motion`),e&&(e.color&&(this.color=this._defaultColor=e.color),e.diameter&&(this.diameter=e.diameter),e.strokeWidth&&(this.strokeWidth=e.strokeWidth))}mode;get value(){return this.mode===`determinate`?this._value:0}set value(e){this._value=Math.max(0,Math.min(100,e||0))}_value=0;get diameter(){return this._diameter}set diameter(e){this._diameter=e||0}_diameter=zl;get strokeWidth(){return this._strokeWidth??this.diameter/10}set strokeWidth(e){this._strokeWidth=e||0}_strokeWidth;_circleRadius(){return(this.diameter-Eh)/2}_viewBox(){let e=this._circleRadius()*2+this.strokeWidth;return`0 0 ${e} ${e}`}_strokeCircumference(){return 2*Math.PI*this._circleRadius()}_strokeDashOffset(){return this.mode===`determinate`?this._strokeCircumference()*(100-this._value)/100:null}_circleStrokeWidth(){return this.strokeWidth/this.diameter*100}static ɵfac=function(t){return new(t||n)};static ɵcmp=NC({type:n,selectors:[[`mat-progress-spinner`],[`mat-spinner`]],viewQuery:function(t,i){if(t&1&&qg(Mh,5),t&2){let o;Ww(o=qw())&&(i._determinateCircle=o.first)}},hostAttrs:[`role`,`progressbar`,`tabindex`,`-1`,1,`mat-mdc-progress-spinner`,`mdc-circular-progress`],hostVars:18,hostBindings:function(t,i){t&2&&(Rg(`aria-valuemin`,0)(`aria-valuemax`,100)(`aria-valuenow`,i.mode===`determinate`?i.value:null)(`mode`,i.mode),sb$1(`mat-`+i.color),Ms$1(`width`,i.diameter,`px`)(`height`,i.diameter,`px`)(`--%NS%mat-progress-spinner-size`,i.diameter+`px`)(`--%NS%mat-progress-spinner-active-indicator-width`,i.diameter+`px`),Jg(`_mat-animation-noopable`,i._noopAnimations)(`mdc-circular-progress--indeterminate`,i.mode===`indeterminate`))},inputs:{color:`color`,mode:`mode`,value:[2,`value`,`value`,yl$1],diameter:[2,`diameter`,`diameter`,yl$1],strokeWidth:[2,`strokeWidth`,`strokeWidth`,yl$1]},exportAs:[`matProgressSpinner`],decls:14,vars:11,consts:[[`circle`,``],[`determinateSpinner`,``],[`aria-hidden`,`true`,1,`mdc-circular-progress__determinate-container`],[`xmlns`,`http://www.w3.org/2000/svg`,`focusable`,`false`,1,`mdc-circular-progress__determinate-circle-graphic`],[`cx`,`50%`,`cy`,`50%`,1,`mdc-circular-progress__determinate-circle`],[`aria-hidden`,`true`,1,`mdc-circular-progress__indeterminate-container`],[1,`mdc-circular-progress__spinner-layer`],[1,`mdc-circular-progress__circle-clipper`,`mdc-circular-progress__circle-left`],[3,`ngTemplateOutlet`],[1,`mdc-circular-progress__gap-patch`],[1,`mdc-circular-progress__circle-clipper`,`mdc-circular-progress__circle-right`],[`xmlns`,`http://www.w3.org/2000/svg`,`focusable`,`false`,1,`mdc-circular-progress__indeterminate-circle-graphic`],[`cx`,`50%`,`cy`,`50%`]],template:function(t,i){if(t&1&&(Ig(0,Nh,2,8,`ng-template`,null,0,jb$1),cs$1(2,`div`,2,1),sf$1(),cs$1(4,`svg`,3),kg(5,`circle`,4),Ju$1()(),af$1(),cs$1(6,`div`,5)(7,`div`,6)(8,`div`,7),Pg(9,8),Ju$1(),cs$1(10,`div`,9),Pg(11,8),Ju$1(),cs$1(12,`div`,10),Pg(13,8),Ju$1()()()),t&2){let o=Yw(1);lI(4),Rg(`viewBox`,i._viewBox()),lI(),Ms$1(`stroke-dasharray`,i._strokeCircumference(),`px`)(`stroke-dashoffset`,i._strokeDashOffset(),`px`)(`stroke-width`,i._circleStrokeWidth(),`%`),Rg(`r`,i._circleRadius()),lI(4),Og(`ngTemplateOutlet`,o),lI(2),Og(`ngTemplateOutlet`,o),lI(2),Og(`ngTemplateOutlet`,o)}},dependencies:[N_$1],styles:[`.mat-mdc-progress-spinner {
  --%NS%mat-progress-spinner-animation-multiplier: 1;
  display: block;
  overflow: hidden;
  line-height: 0;
  position: relative;
  direction: ltr;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.6, 1);
}
.mat-mdc-progress-spinner circle {
  stroke-width: var(--%NS%mat-progress-spinner-active-indicator-width, 4px);
}
.mat-mdc-progress-spinner._mat-animation-noopable, .mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__determinate-circle {
  transition: none !important;
}
.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-circle-graphic,
.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__spinner-layer,
.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-container {
  animation: none !important;
}
.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-container circle {
  stroke-dasharray: 0 !important;
}
@media (forced-colors: active) {
  .mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic,
  .mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle {
    stroke: currentColor;
    stroke: CanvasText;
  }
}

.mat-progress-spinner-reduced-motion {
  --%NS%mat-progress-spinner-animation-multiplier: 1.25;
}

.mdc-circular-progress__determinate-container,
.mdc-circular-progress__indeterminate-circle-graphic,
.mdc-circular-progress__indeterminate-container,
.mdc-circular-progress__spinner-layer {
  position: absolute;
  width: 100%;
  height: 100%;
}

.mdc-circular-progress__determinate-container {
  transform: rotate(-90deg);
}
.mdc-circular-progress--indeterminate .mdc-circular-progress__determinate-container {
  opacity: 0;
}

.mdc-circular-progress__indeterminate-container {
  font-size: 0;
  letter-spacing: 0;
  white-space: nowrap;
  opacity: 0;
}
.mdc-circular-progress--indeterminate .mdc-circular-progress__indeterminate-container {
  opacity: 1;
  animation: mdc-circular-progress-container-rotate calc(1568.2352941176ms * var(--%NS%mat-progress-spinner-animation-multiplier)) linear infinite;
}

.mdc-circular-progress__determinate-circle-graphic,
.mdc-circular-progress__indeterminate-circle-graphic {
  fill: transparent;
}

.mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle,
.mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic {
  stroke: var(--%NS%mat-progress-spinner-active-indicator-color, var(--%NS%mat-sys-primary));
}
@media (forced-colors: active) {
  .mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle,
  .mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic {
    stroke: CanvasText;
  }
}

.mdc-circular-progress__determinate-circle {
  transition: stroke-dashoffset 500ms cubic-bezier(0, 0, 0.2, 1);
}

.mdc-circular-progress__gap-patch {
  position: absolute;
  top: 0;
  left: 47.5%;
  box-sizing: border-box;
  width: 5%;
  height: 100%;
  overflow: hidden;
}

.mdc-circular-progress__gap-patch .mdc-circular-progress__indeterminate-circle-graphic {
  left: -900%;
  width: 2000%;
  transform: rotate(180deg);
}
.mdc-circular-progress__circle-clipper .mdc-circular-progress__indeterminate-circle-graphic {
  width: 200%;
}
.mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic {
  left: -100%;
}
.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-left .mdc-circular-progress__indeterminate-circle-graphic {
  animation: mdc-circular-progress-left-spin calc(1333ms * var(--%NS%mat-progress-spinner-animation-multiplier)) cubic-bezier(0.4, 0, 0.2, 1) infinite both;
}
.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic {
  animation: mdc-circular-progress-right-spin calc(1333ms * var(--%NS%mat-progress-spinner-animation-multiplier)) cubic-bezier(0.4, 0, 0.2, 1) infinite both;
}

.mdc-circular-progress__circle-clipper {
  display: inline-flex;
  position: relative;
  width: 50%;
  height: 100%;
  overflow: hidden;
}

.mdc-circular-progress--indeterminate .mdc-circular-progress__spinner-layer {
  animation: mdc-circular-progress-spinner-layer-rotate calc(5332ms * var(--%NS%mat-progress-spinner-animation-multiplier)) cubic-bezier(0.4, 0, 0.2, 1) infinite both;
}

@keyframes mdc-circular-progress-container-rotate {
  to {
    transform: rotate(360deg);
  }
}
@keyframes mdc-circular-progress-spinner-layer-rotate {
  12.5% {
    transform: rotate(135deg);
  }
  25% {
    transform: rotate(270deg);
  }
  37.5% {
    transform: rotate(405deg);
  }
  50% {
    transform: rotate(540deg);
  }
  62.5% {
    transform: rotate(675deg);
  }
  75% {
    transform: rotate(810deg);
  }
  87.5% {
    transform: rotate(945deg);
  }
  100% {
    transform: rotate(1080deg);
  }
}
@keyframes mdc-circular-progress-left-spin {
  from {
    transform: rotate(265deg);
  }
  50% {
    transform: rotate(130deg);
  }
  to {
    transform: rotate(265deg);
  }
}
@keyframes mdc-circular-progress-right-spin {
  from {
    transform: rotate(-265deg);
  }
  50% {
    transform: rotate(-130deg);
  }
  to {
    transform: rotate(-265deg);
  }
}
`],encapsulation:2})}return n})();var Ah=[`.lab900-td`];var Rh=()=>[import(`./chunk-DON48R_I.js`).then(n=>n.TableCellInnerComponent),import(`./chunk-1q3LJlXS.js`).then(n=>n.TableCellEventsDirective)];var Fh=(n,a)=>({columnConfig:n,disableSort:a});function Ph(n,a){n&1&&Pg(0)}function Oh(n,a){if(n&1){let e=Vw();cs$1(0,`th`,4),kb$1(1,`translate`),Ug(`click`,function(){Wd$1(e);let i=Hw();return qd$1(i.handleHeaderClick(i.cell()))})(`keydown.enter`,function(i){Wd$1(e);let o=Hw();return qd$1(o.handleHeaderKeydown(i,o.cell()))})(`keydown.space`,function(i){Wd$1(e);let o=Hw();return qd$1(o.handleHeaderKeydown(i,o.cell()))}),Ig(2,Ph,1,0,`ng-container`,5),Ju$1()}if(n&2){let e=Hw();Ms$1(`width`,e.columnWidth())(`max-width`,e.columnMaxWidth()),Jg(`sortable`,e.sortable()),Og(`ngClass`,e.cellHeaderClass())(`matTooltipDisabled`,!e.cell().cellHeaderTooltip)(`matTooltip`,e.cell().cellHeaderTooltip?Lb$1(1,14,e.cell().cellHeaderTooltip):``)(`matTooltipPosition`,e.cell().cellHeaderTooltipPosition||`above`),Rg(`tabindex`,e.sortable()?0:null)(`aria-sort`,e.ariaSort()),lI(2),Og(`ngComponentOutlet`,e.columnHeaderTemplate())(`ngComponentOutletInputs`,Ab$1(16,Fh,e.cell(),e.disableSort()))}}function Lh(n,a){if(n&1){let e=Vw();cs$1(0,`lab900-table-cell-inner`,7),Ug(`valueChanged`,function(i){Wd$1(e);return qd$1(Hw(2).valueChanged.emit(i))}),Ju$1()}if(n&2){let e=Hw(),t=e.$implicit,i=e.dataIndex;Og(`cell`,Hw().cell())(`cellData`,t)(`rowValue`,t)(`rowIndex`,i)}}function Vh(n,a){n&1&&kg(0,`div`,8)}function Bh(n,a){if(n&1&&(cs$1(0,`td`,6),Cg(1,Lh,1,4)(2,Vh,1,0),Iw(3,1,Rh,null,2),ww(0,-1),Cw(),Ju$1()),n&2){let e=Hw();Ms$1(`width`,e.columnWidth())(`max-width`,e.columnMaxWidth())}}function zh(n,a){n&1&&kg(0,`mat-spinner`,12),n&2&&Ms$1(`margin`,`0 auto`)}function Hh(n,a){if(n&1&&kg(0,`div`,11),n&2)Og(`innerHTML`,Hw(3).cellFooter(),hE)}function jh(n,a){if(n&1&&(cs$1(0,`td`,3),Nw(1,zh,1,2,`mat-spinner`,10)(2,Hh,1,1,`div`,11),Ju$1()),n&2){let e=Hw(2);Og(`ngClass`,e.cell().footerCellClass),lI(),xw(e.cellFooterLoading()?1:2)}}function Gh(n,a){n&1&&Ig(0,jh,3,2,`td`,9)}var _a=(()=>{class n{constructor(){this.tableService=g$2(Y$3),this.table=g$2(Ge$1),this.className=`lab900-table-cell`,this.columnDef=Qj(ci$2),this.tdElement=Qj(`.lab900-td`),this.cell=Zj.required(),this.data=Zj.required(),this.disableSort=Zj(!1),this.maxColumnWidthFromTable=Zj(void 0),this.showFooterCell=Zj(!1),this.columnMaxWidth=qe$3(()=>this.cell().cellMaxWidth??this.maxColumnWidthFromTable()),this.columnHeaderTemplate=qe$3(()=>this.cell().headerRenderer??this.defaultHeaderRenderer),this.columnWidth=qe$3(()=>this.cell().width===`*`?`100%`:this.cell().width),this.sticky=qe$3(()=>!this.cell().hide&&this.cell().sticky),this.cellFooter=qe$3(()=>{let e=this.cell().footer,t;return!Qn$2(e)&&typeof e==`function`&&(e=e(this.data(),this.cell())),Qn$2(e)?t=e():typeof e==`string`&&(t=e),t}),this.cellFooterLoading=qe$3(()=>this.cell().footerLoading?.()??!1),this.cellHeaderClass=qe$3(()=>{let e=this.cell().cellHeaderClass;return e?ye$2(e,this.cell()):``}),this.headerClick=qj(),this.valueChanged=qj(),this.sort=this.tableService.sort,this.defaultHeaderRenderer=Bl,this.sortable=qe$3(()=>!this.disableSort()&&!!this.cell().sortable),this.ariaSort=qe$3(()=>{if(!this.sortable())return null;let e=this.cell(),t=this.sort()?.find(i=>i.id===(e.sortKey??e.key))?.direction;return t===`asc`?`ascending`:t===`desc`?`descending`:`none`})}ngOnInit(){let e=this.columnDef();this.table&&e&&this.table.addColumnDef(e)}ngOnDestroy(){let e=this.columnDef();this.table&&e&&this.table.removeColumnDef(e)}handleHeaderClick(e){this.disableSort()||this.headerClick.emit(e)}handleHeaderKeydown(e,t){this.sortable()&&(e.preventDefault(),this.handleHeaderClick(t))}closeEditor(){this.tableService.closeInlineEditing()}static{this.ɵfac=function(t){return new(t||n)}}static{this.ɵcmp=NC({type:n,selectors:[[`lab900-table-cell`,`cell`,``]],viewQuery:function(t,i){t&1&&Yg(i.columnDef,ci$2,5)(i.tdElement,Ah,5),t&2&&Zw(2)},hostVars:1,hostBindings:function(t,i){t&2&&Hg(`className`,i.className)},inputs:{cell:[1,`cell`],data:[1,`data`],disableSort:[1,`disableSort`],maxColumnWidthFromTable:[1,`maxColumnWidthFromTable`],showFooterCell:[1,`showFooterCell`]},outputs:{headerClick:`headerClick`,valueChanged:`valueChanged`},decls:4,vars:3,consts:[[3,`matColumnDef`,`sticky`],[`mat-header-cell`,``,`matTooltipClass`,`lab900-table__mat-tooltip`,3,`sortable`,`ngClass`,`matTooltipDisabled`,`matTooltip`,`matTooltipPosition`,`width`,`max-width`,`click`,`keydown.enter`,`keydown.space`,4,`matHeaderCellDef`],[`mat-cell`,``,`class`,`lab900-td`,3,`width`,`max-width`,4,`matCellDef`],[`mat-footer-cell`,``,3,`ngClass`],[`mat-header-cell`,``,`matTooltipClass`,`lab900-table__mat-tooltip`,3,`click`,`keydown.enter`,`keydown.space`,`ngClass`,`matTooltipDisabled`,`matTooltip`,`matTooltipPosition`],[4,`ngComponentOutlet`,`ngComponentOutletInputs`],[`mat-cell`,``,1,`lab900-td`],[`lab900TableCellEvents`,``,3,`valueChanged`,`cell`,`cellData`,`rowValue`,`rowIndex`],[1,`lab900-deferred-cell-placeholder`],[`mat-footer-cell`,``,3,`ngClass`,4,`matFooterCellDef`],[`diameter`,`20`,3,`margin`],[1,`lab900-footer-cell-content`,3,`innerHTML`],[`diameter`,`20`]],template:function(t,i){t&1&&(tl$1(0,0),Ig(1,Oh,3,19,`th`,1)(2,Bh,5,4,`td`,2),Nw(3,Gh,1,0,`td`,3),Ss$1()),t&2&&(Og(`matColumnDef`,i.cell().key)(`sticky`,i.sticky()),lI(3),xw(i.showFooterCell()?3:-1))},dependencies:[T_$1,S_$1,Vt$3,di$2,ci$2,fi$1,ri$2,hi$1,ai$2,li$2,Hl,xn$4],encapsulation:2})}}return n})();var jl=()=>[];var Wh=()=>[`lab900-row-detail`];var qh=()=>[`preFooterTitle`];var $h=(n,a)=>a.key;var Gl=(n,a)=>a.label;function Uh(n,a){n&1&&Pg(0)}function Qh(n,a){n&1&&Ig(0,Uh,1,0,`ng-container`,16),n&2&&Og(`ngTemplateOutlet`,a)}function Zh(n,a){if(n&1){let e=Vw();cs$1(0,`lab900-table-tabs`,17),Ug(`activeTabIdChange`,function(i){Wd$1(e);return qd$1(Hw(2).onActiveTabChange(i))}),Ju$1()}if(n&2){let e=Hw(2);Og(`tableTabs`,e.tabs())(`activeTabId`,e.tabId())}}function Xh(n,a){n&1&&kg(0,`mat-progress-bar`,4)}function Kh(n,a){if(n&1){let e=Vw();cs$1(0,`lab900-table-cell-select`,18),Ug(`selectAll`,function(i){Wd$1(e);return qd$1(Hw(2).handleSelectAll(i))})(`selectRow`,function(i){Wd$1(e);return qd$1(Hw(2).handleSelectRow(i))}),Ju$1()}if(n&2){let e=Hw(2);Og(`showFooter`,e.showCellFooters())(`options`,e.selectableRows())(`selection`,e.selection())}}function Yh(n,a){if(n&1){let e=Vw();cs$1(0,`lab900-table-cell`,19),Ug(`headerClick`,function(i){Wd$1(e);return qd$1(Hw(2).handleHeaderClick(i))})(`valueChanged`,function(i){Wd$1(e);return qd$1(Hw(2).cellValueChanged.emit(i))}),Ju$1()}if(n&2){let e=a.$implicit,t=Hw(2);Og(`cell`,e)(`disableSort`,t.disableSort())(`maxColumnWidthFromTable`,t.maxColumnWidth())(`data`,t.publicData()??Nb$1(5,jl))(`showFooterCell`,t.showCellFooters())}}function Jh(n,a){n&1&&kg(0,`th`,20)}function ef(n,a){if(n&1&&kg(0,`lab900-action-button`,23),n&2){let e=a.$implicit,t=Hw(2).$implicit;Og(`data`,t)(`action`,e)(`cdkDragHandleDisabled`,!e?.draggable)}}function tf(n,a){if(n&1&&(cs$1(0,`div`,22),Ow(1,ef,1,3,`lab900-action-button`,23,Gl),Ju$1()),n&2){let e=Hw(3);lI(),kw(e.tableActionsFront())}}function nf(n,a){if(n&1&&(cs$1(0,`td`,21),Ug(`click`,function(t){return t.stopPropagation()}),Nw(1,tf,3,0,`div`,22),Ju$1()),n&2){let e=Hw(2);lI(),xw(e.tableActionsFront().length?1:-1)}}function af(n,a){n&1&&kg(0,`td`,12)}function of(n,a){n&1&&Ig(0,af,1,0,`td`,24)}function rf(n,a){n&1&&kg(0,`th`,20)}function sf(n,a){if(n&1&&kg(0,`lab900-action-button`,23),n&2){let e=a.$implicit,t=Hw(2).$implicit;Og(`data`,t)(`action`,e)(`cdkDragHandleDisabled`,!e?.draggable)}}function lf(n,a){if(n&1&&(cs$1(0,`div`,25),Ow(1,sf,1,3,`lab900-action-button`,23,Gl),Ju$1()),n&2){let e=Hw(3);lI(),kw(e.tableActionsBack())}}function cf(n,a){if(n&1&&(cs$1(0,`td`,21),Ug(`click`,function(t){return t.stopPropagation()}),Nw(1,lf,3,0,`div`,25),Ju$1()),n&2){let e=Hw(2);lI(),xw(e.tableActionsBack().length?1:-1)}}function df(n,a){n&1&&kg(0,`td`,12)}function mf(n,a){n&1&&Ig(0,df,1,0,`td`,24)}function pf(n,a){n&1&&Pg(0)}function uf(n,a){if(n&1&&(cs$1(0,`div`,27),Wi$2(`lab900-row-detail-leave`),zi$2(`lab900-row-detail-enter`),Ig(1,pf,1,0,`ng-container`,28),Ju$1()),n&2){let e=Hw(),t=e.$implicit,i=e.dataIndex,o=Hw(2);lI(),Og(`ngTemplateOutlet`,o.rowDetailTemplate()??null)(`ngTemplateOutletContext`,o.getRowDetailContext(t,i))}}function hf(n,a){if(n&1&&(cs$1(0,`td`,26),Nw(1,uf,2,2,`div`,27),Ju$1()),n&2){let e=a.$implicit,t=a.dataIndex,i=Hw(2);Rg(`colspan`,i.displayedColumns().length),lI(),xw(i.isRowExpandedAt(e,t)?1:-1)}}function ff(n,a){n&1&&kg(0,`tr`,32)}function _f(n,a){if(n&1){let e=Vw();cs$1(0,`tr`,33),Ug(`click`,function(i){let o=Wd$1(e),r=o.$implicit,u=o.dataIndex;return qd$1(Hw(3).handleRowClick(i,r,u))})(`keydown.enter`,function(i){let o=Wd$1(e),r=o.$implicit,u=o.dataIndex;return qd$1(Hw(3).handleRowKeydown(i,r,u))})(`keydown.space`,function(i){let o=Wd$1(e),r=o.$implicit,u=o.dataIndex;return qd$1(Hw(3).handleRowKeydown(i,r,u))})(`cdkDragStarted`,function(){let i=Wd$1(e),o=i.$implicit,r=i.dataIndex;return qd$1(Hw(3).handleRowDragStarted(o,r))}),Ju$1()}if(n&2){let e=a.$implicit,t=a.dataIndex,i=Hw(3);sb$1(i.getRowClasses(e,t)),Ms$1(`background-color`,i.getRowColor(e)),Jg(`lab900-row-selected`,i.isRowSelected(e))(`lab900-row-expanded`,i.isRowExpandedAt(e,t)),Og(`cdkDragDisabled`,!i.draggableRows()),Rg(`aria-expanded`,i.isRowExpandable(e)?i.isRowExpandedAt(e,t):null)(`tabindex`,i.isRowExpandable(e)?0:null)}}function bf(n,a){if(n&1&&kg(0,`tr`,34),n&2){let e=a.$implicit,t=a.dataIndex,i=Hw(3);Ms$1(`background-color`,i.getRowColor(e)),Jg(`lab900-row-even`,t%2===0)(`lab900-row-odd`,t%2!==0)(`lab900-row-detail-expanded`,i.isRowExpandedAt(e,t))(`lab900-row-selected`,i.isRowSelected(e))}}function gf(n,a){if(n&1&&(cs$1(0,`td`,39),yb$1(1),kb$1(2,`translate`),Ju$1()),n&2){let e=Hw();Rg(`colspan`,Hw(4).visibleColumns().length+1),lI(),rl$1(` `,Lb$1(2,2,e),` `)}}function vf(n,a){if(n&1&&kg(0,`tr`,40),n&2)Og(`hidden`,!Hw(5).publicData()?.length)}function xf(n,a){n&1&&(tl$1(0,36),Ig(1,gf,3,4,`td`,37),Ss$1(),Ig(2,vf,1,1,`tr`,38)),n&2&&(lI(2),Og(`matFooterRowDef`,Nb$1(1,qh)))}function yf(n,a){if(n&1&&kg(0,`tr`,41),n&2)Og(`hidden`,!Hw(4).publicData()?.length)}function Cf(n,a){if(n&1&&(cs$1(0,`div`),Nw(1,xf,3,2),Ig(2,yf,1,1,`tr`,35),Ju$1()),n&2){let e,t=Hw(3);lI(),xw((e=t.preFooterTitle())?1:-1,e),lI(),Og(`matFooterRowDef`,t.displayedColumns())}}function wf(n,a){n&1&&kg(0,`div`)}function kf(n,a){n&1&&Ig(0,wf,1,0,`div`,42)}function Sf(n,a){if(n&1&&(Ig(0,ff,1,0,`tr`,29)(1,_f,1,11,`tr`,30)(2,bf,1,10,`tr`,31),Nw(3,Cf,3,2,`div`),Nw(4,kf,1,0,`div`)),n&2){let e=Hw(2);Og(`matHeaderRowDef`,e.displayedColumns())(`matHeaderRowDefSticky`,e.stickyHeader),lI(),Og(`matRowDefColumns`,e.displayedColumns()),lI(),Og(`matRowDefColumns`,Nb$1(7,Wh))(`matRowDefWhen`,e.hasRowDetail),lI(),xw(e.showCellFooters()?3:-1),lI(),xw(e.draggableRows()?4:-1)}}function Df(n,a){n&1&&Pg(0)}function Tf(n,a){n&1&&Ig(0,Df,1,0,`ng-container`,16),n&2&&Og(`ngTemplateOutlet`,a)}function Mf(n,a){n&1&&(cs$1(0,`h3`),yb$1(1),kb$1(2,`translate`),Ju$1(),cs$1(3,`p`),yb$1(4),kb$1(5,`translate`),Ju$1()),n&2&&(lI(),im$1(Lb$1(2,2,`GENERAL.NO_RESULTS.TITLE`)),lI(3),im$1(Lb$1(5,4,`GENERAL.NO_RESULTS.DESC`)))}function Nf(n,a){if(n&1&&(cs$1(0,`div`,43),Nw(1,Tf,1,1,`ng-container`)(2,Mf,6,6),Ju$1()),n&2){let e,t=Hw(3);lI(),xw((e=t.emptyTableTemplate())?1:2,e)}}function If(n,a){n&1&&Pg(0)}function Ef(n,a){n&1&&Ig(0,If,1,0,`ng-container`,16),n&2&&Og(`ngTemplateOutlet`,a)}function Af(n,a){n&1&&(cs$1(0,`h3`),yb$1(1),kb$1(2,`translate`),Ju$1(),cs$1(3,`p`),yb$1(4),kb$1(5,`translate`),Ju$1()),n&2&&(lI(),im$1(Lb$1(2,2,`GENERAL.DISABLED.TITLE`)),lI(3),im$1(Lb$1(5,4,`GENERAL.DISABLED.DESC`)))}function Rf(n,a){if(n&1&&(cs$1(0,`div`),Nw(1,Ef,1,1,`ng-container`)(2,Af,6,6),Ju$1()),n&2){let e,t=Hw(3);lI(),xw((e=t.disabledTableTemplate())?1:2,e)}}function Ff(n,a){if(n&1&&Nw(0,Nf,3,1,`div`,43)(1,Rf,3,1,`div`),n&2){let e=Hw(2);xw(!e.publicData()?.length&&!e.disabled()?0:e.disabled()?1:-1)}}function Pf(n,a){if(n&1){let e=Vw();cs$1(0,`div`)(1,`lab900-table-header`,1),Ug(`tableCellsFiltered`,function(i){Wd$1(e);return qd$1(Hw().onTableCellsFiltered(i))}),Ju$1(),Nw(2,Qh,1,1,`ng-container`),Nw(3,Zh,1,2,`lab900-table-tabs`,2),cs$1(4,`div`,3),Nw(5,Xh,1,0,`mat-progress-bar`,4),cs$1(6,`div`,5)(7,`table`,6),Ug(`cdkDropListDropped`,function(i){Wd$1(e);return qd$1(Hw().tableRowOrderChange.emit(i))}),Nw(8,Kh,1,3,`lab900-table-cell-select`,7),Ow(9,Yh,1,6,`lab900-table-cell`,8,$h),tl$1(11,9),Ig(12,Jh,1,0,`th`,10)(13,nf,2,1,`td`,11),Nw(14,of,1,0,`td`,12),Ss$1(),tl$1(15,13),Ig(16,rf,1,0,`th`,10)(17,cf,2,1,`td`,11),Nw(18,mf,1,0,`td`,12),Ss$1(),tl$1(19,14),Ig(20,hf,2,2,`td`,15),Ss$1(),Nw(21,Sf,5,8),Ju$1()(),Nw(22,Ff,2,1),Ju$1()()}if(n&2){let e,t=Hw();sb$1(bb$1(`lab900-table `,t.tableClass())),lI(),Og(`tableHeaderActions`,t.tableHeaderActions())(`toggleColumns`,t.toggleColumns())(`toggleAndMoveColumns`,t.toggleAndMoveColumns())(`filterIcon`,t.filterIcon())(`showFilterHeader`,t.showFilterHeader())(`tableHeaderContent`,t.tableHeaderContent()),lI(),xw((e=t.tableTopContent())?2:-1,e),lI(),xw(t.tabs().length?3:-1),lI(2),xw(t.loading()?5:-1),lI(),Jg(`sticky-header`,t.stickyHeader()),lI(),Jg(`has-back-actions`,t.tableActionsBack().length)(`has-front-actions`,t.tableActionsFront().length),Og(`cdkDropListDisabled`,!t.draggableRows())(`multiTemplateDataRows`,!0)(`trackBy`,t.trackByTableFn())(`dataSource`,t.publicData()??Nb$1(27,jl)),lI(),xw(t.selectableRows()?.enabled?8:-1),lI(),kw(t.visibleColumns()),lI(5),xw(t.showCellFooters()?14:-1),lI(4),xw(t.showCellFooters()?18:-1),lI(3),xw(t.displayedColumns()?21:-1),lI(),xw(t.publicData()?22:-1)}}var ve=(()=>{class n{set sort(e){this.tableService.updateSorting(e)}set disabledEditing(e){this.tableService.updateDisableEditing(e)}constructor(){this.tableService=g$2(Y$3),this._fixedWidths=Zj(!1,{alias:`fixedWidth`}),this.fixedWidths=qe$3(()=>this._fixedWidths()||this.visibleColumns().some(e=>!!e?.width)),this.table=Qj(Ge$1),this.tableCells=Yj.required(),this.columns=qe$3(()=>{let e=this.tableCells(),t=this.tableTabs(),i=this.tabId();if(t?.length){let o=i?t.find(r=>r.id===i):t?.[0];o?.tableCells&&(e=o?.tableCells)}return e.filter(o=>!!o.key).sort(Y$3.reorderColumnsFn)}),this.visibleColumns=qe$3(()=>this.columns().filter(e=>!e.hide)),this.showCellFooters=qe$3(()=>this.visibleColumns().some(e=>Object.hasOwn(e,`footer`))),this.tableTabs=Zj(void 0),this.activeTabId=Yj(void 0),this.tableClass=Zj(``),this.rowClass=Zj(void 0),this.rowColor=Zj(void 0),this.loading=Yj(!1),this.tableHeaderActions=Zj([]),this.tableFooterActions=Zj([]),this.tableActionsFront=Zj([]),this.tableActionsBack=Zj([]),this.draggableRows=qe$3(()=>this.tableActionsBack()?.some(e=>!!e?.draggable)||this.tableActionsFront()?.some(e=>!!e?.draggable)),this.selectableRows=Zj(void 0),this.selection=il({source:this.selectableRows,computation:(e,t)=>t?.value??(e?.enabled?new Ce$1(!e.singleSelect,e.selectedItems,!0,e.compareFn):void 0)}),this.expandableRows=Zj(void 0),this.expandedRows=Yj([]),this.expandedRowSet=qe$3(()=>new Set(this.expandedRows())),this.toggleColumns=Zj(!1),this.toggleAndMoveColumns=Zj(!1),this.filterIcon=Zj(`filter_alt`),this.showFilterHeader=Zj(!0),this.neverHideTable=Zj(!1),this.disabled=Yj(!1),this.multiSort=Zj(!1),this.disableSort=Zj(!1),this.maxColumnWidth=Zj(void 0),this.onRowClick=Zj(void 0),this.preFooterTitle=Zj(void 0),this.stickyHeader=Zj(!1),this.trackByTableFn=Zj.required(),this.selectionChanged=qj(),this.rowSelectToggle=qj(),this.tableCellsFiltered=qj(),this.tableRowOrderChange=qj(),this.cellValueChanged=qj(),this.sortChange=qj(),this.rowExpandToggle=qj(),this.emptyTableTemplate=Jj(Jn,{read:rr$1}),this.disabledTableTemplate=Jj(ro,{read:rr$1}),this.tableHeaderContent=Jj(ei,{read:rr$1}),this.tableTopContent=Jj(ti,{read:rr$1}),this.rowDetailTemplate=Jj(ni,{read:rr$1}),this.expandingEnabled=qe$3(()=>!!this.rowDetailTemplate()&&this.expandableRows()?.enabled!==!1),this.displayedColumns=qe$3(()=>this.getDisplayedColumns()),this.tabId=this.tableService.tabId,this.tabs=this.tableService.tabs,this.data=Yj(void 0),this.publicData=qe$3(()=>{let e=this.selectableRows()?.hideSelectableRow,t=this.data();return e&&(t=t?.map(i=>Z$3(q$2({},i),{_hideSelectableRow:e(i)}))),t}),this.hasRowDetail=(e,t)=>this.isRowExpandable(t),zr(()=>{let e=this.tableTabs();e&&this.tableService.updateTabs(e)}),zr(()=>{let e=this.activeTabId();e&&this.tableService.updateTabId(e)}),zr(()=>{let e=this.table();e&&(e.removeFooterRowDef(null),this.showCellFooters()&&e.renderRows())}),zr(()=>{let e=this.tabId();this.previousTabId!==void 0&&this.previousTabId!==e&&Q$1(()=>this.collapseAllRows()),this.previousTabId=e}),zr(()=>{let e=this.data();if(!e)return;let t=Q$1(this.expandedRows);if(!t.length)return;let o=!!Q$1(this.expandableRows)?.compareFn?void 0:new Set(e),r=t.filter(u=>o?.has(u)??e.some(C=>this.compareRows(C,u)));r.length!==t.length&&Q$1(()=>this.expandedRows.set(r))})}handleSelectAll(e){let t=this.selection();if(t){t.clear();let i=this.data();e?i?.length&&(t.select(...i.filter(o=>!o?._hideSelectableRow)),this.selectionChanged.emit(t)):this.selectionChanged.emit(t)}}handleSelectRow(e){let t=this.selection();t&&(t.toggle(e),this.selectionChanged.emit(t),this.rowSelectToggle.emit(e))}isRowSelected(e){return!!this.selection()?.isSelected(e)}isRowExpandable(e){if(!this.expandingEnabled())return!1;let t=this.expandableRows()?.isExpandable;return!t||t(e)}isRowExpanded(e){return this.expandableRows()?.compareFn?this.expandedRows().some(t=>this.compareRows(t,e)):this.expandedRowSet().has(e)}toggleRowExpansion(e){this.isRowExpanded(e)?this.collapseRow(e):this.expandRow(e)}expandRow(e){if(!this.isRowExpandable(e)||this.isRowExpanded(e))return;let t=this.expandableRows()?.multiple!==!1;this.expandedRows.update(i=>t?[...i,e]:[e]),this.rowExpandToggle.emit({row:e,expanded:!0})}collapseRow(e){this.isRowExpanded(e)&&(this.expandedRows.update(t=>t.filter(i=>!this.compareRows(i,e))),this.rowExpandToggle.emit({row:e,expanded:!1}))}collapseAllRows(){this.expandedRows().length&&this.expandedRows.set([])}getRowClasses(e,t){let i=[];(typeof this.onRowClick()==`function`||this.isRowExpandable(e))&&i.push(`lab900-row-clickable`),t%2===0?i.push(`lab900-row-even`):i.push(`lab900-row-odd`);let o=this.rowClass();return o&&i.push((typeof o==`function`?o(e):o)??``),i.join(` `)||``}getRowColor(e){let t=this.rowColor();return(typeof t==`function`?t(e):t)??``}handleRowClick(e,t,i){this.isRowExpandable(t)&&this.toggleRowExpansion(this.getSourceRow(t,i));let o=this.onRowClick();typeof o==`function`&&o(t,i,e)}handleHeaderClick(e){!this.disableSort()&&e.sortable&&this.tableService.updateColumnSorting(e,this.multiSort(),t=>this.sortChange.emit(t??[]))}onTableCellsFiltered(e){this.tableCells.set(e),this.tableCellsFiltered.emit(e)}onActiveTabChange(e){this.activeTabId.set(e)}handleRowKeydown(e,t,i){e.target===e.currentTarget&&this.isRowExpandable(t)&&(e.preventDefault(),this.toggleRowExpansion(this.getSourceRow(t,i)))}handleRowDragStarted(e,t){this.collapseRow(this.getSourceRow(e,t))}isRowExpandedAt(e,t){return this.isRowExpanded(this.getSourceRow(e,t))}getRowDetailContext(e,t){let i=this.getSourceRow(e,t);return{$implicit:i,index:t,collapse:()=>this.collapseRow(i)}}getSourceRow(e,t){return this.data()?.[t]??e}compareRows(e,t){let i=this.expandableRows()?.compareFn;return i?i(e,t):e===t}getDisplayedColumns(){let e=this.visibleColumns()?.map(t=>t.key);return this.tableActionsFront().length&&e.unshift(`actions-front`),this.tableActionsBack().length&&e.push(`actions-back`),this.selectableRows()?.enabled&&(this.selectableRows()?.position===`right`?e.push(`select`):e.unshift(`select`)),e}static{this.ɵfac=function(t){return new(t||n)}}static{this.ɵcmp=NC({type:n,selectors:[[`lab900-table`]],contentQueries:function(t,i,o){t&1&&Zg(o,i.emptyTableTemplate,Jn,5,rr$1)(o,i.disabledTableTemplate,ro,5,rr$1)(o,i.tableHeaderContent,ei,5,rr$1)(o,i.tableTopContent,ti,5,rr$1)(o,i.rowDetailTemplate,ni,5,rr$1),t&2&&Zw(5)},viewQuery:function(t,i){t&1&&Yg(i.table,Ge$1,5),t&2&&Zw()},inputs:{_fixedWidths:[1,`fixedWidth`,`_fixedWidths`],tableCells:[1,`tableCells`],tableTabs:[1,`tableTabs`],activeTabId:[1,`activeTabId`],tableClass:[1,`tableClass`],rowClass:[1,`rowClass`],rowColor:[1,`rowColor`],loading:[1,`loading`],tableHeaderActions:[1,`tableHeaderActions`],tableFooterActions:[1,`tableFooterActions`],tableActionsFront:[1,`tableActionsFront`],tableActionsBack:[1,`tableActionsBack`],selectableRows:[1,`selectableRows`],expandableRows:[1,`expandableRows`],expandedRows:[1,`expandedRows`],toggleColumns:[1,`toggleColumns`],toggleAndMoveColumns:[1,`toggleAndMoveColumns`],filterIcon:[1,`filterIcon`],showFilterHeader:[1,`showFilterHeader`],neverHideTable:[1,`neverHideTable`],disabled:[1,`disabled`],sort:`sort`,multiSort:[1,`multiSort`],disableSort:[1,`disableSort`],maxColumnWidth:[1,`maxColumnWidth`],onRowClick:[1,`onRowClick`],preFooterTitle:[1,`preFooterTitle`],stickyHeader:[1,`stickyHeader`],trackByTableFn:[1,`trackByTableFn`],disabledEditing:`disabledEditing`,data:[1,`data`]},outputs:{tableCells:`tableCellsChange`,activeTabId:`activeTabIdChange`,loading:`loadingChange`,expandedRows:`expandedRowsChange`,disabled:`disabledChange`,selectionChanged:`selectionChanged`,rowSelectToggle:`rowSelectToggle`,tableCellsFiltered:`tableCellsFiltered`,tableRowOrderChange:`tableRowOrderChange`,cellValueChanged:`cellValueChanged`,sortChange:`sortChange`,rowExpandToggle:`rowExpandToggle`,data:`dataChange`},features:[Mb$1([Y$3])],decls:1,vars:1,consts:[[3,`class`],[3,`tableCellsFiltered`,`tableHeaderActions`,`toggleColumns`,`toggleAndMoveColumns`,`filterIcon`,`showFilterHeader`,`tableHeaderContent`],[3,`tableTabs`,`activeTabId`],[2,`position`,`relative`],[`mode`,`indeterminate`,2,`position`,`absolute`,`top`,`0`,`left`,`0`,`right`,`0`,`z-index`,`1`],[1,`lab900-table-wrapper`],[`mat-table`,``,`cdkDropList`,``,1,`mat-elevation-z0`,3,`cdkDropListDropped`,`cdkDropListDisabled`,`multiTemplateDataRows`,`trackBy`,`dataSource`],[3,`showFooter`,`options`,`selection`],[3,`cell`,`disableSort`,`maxColumnWidthFromTable`,`data`,`showFooterCell`],[`matColumnDef`,`actions-front`],[`mat-header-cell`,``,4,`matHeaderCellDef`],[`mat-cell`,``,3,`click`,4,`matCellDef`],[`mat-footer-cell`,``],[`matColumnDef`,`actions-back`,`stickyEnd`,``],[`matColumnDef`,`lab900-row-detail`],[`mat-cell`,``,`class`,`lab900-row-detail-cell`,4,`matCellDef`],[4,`ngTemplateOutlet`],[3,`activeTabIdChange`,`tableTabs`,`activeTabId`],[3,`selectAll`,`selectRow`,`showFooter`,`options`,`selection`],[3,`headerClick`,`valueChanged`,`cell`,`disableSort`,`maxColumnWidthFromTable`,`data`,`showFooterCell`],[`mat-header-cell`,``],[`mat-cell`,``,3,`click`],[1,`table-row-actions-front`],[`cdkDragHandle`,``,3,`data`,`action`,`cdkDragHandleDisabled`],[`mat-footer-cell`,``,4,`matFooterCellDef`],[1,`table-row-actions-back`],[`mat-cell`,``,1,`lab900-row-detail-cell`],[1,`lab900-row-detail-content`],[4,`ngTemplateOutlet`,`ngTemplateOutletContext`],[`mat-header-row`,``,4,`matHeaderRowDef`,`matHeaderRowDefSticky`],[`mat-row`,``,`cdkDrag`,``,3,`class`,`lab900-row-selected`,`background-color`,`lab900-row-expanded`,`cdkDragDisabled`,`click`,`keydown.enter`,`keydown.space`,`cdkDragStarted`,4,`matRowDef`,`matRowDefColumns`],[`mat-row`,``,`class`,`lab900-row-detail`,3,`lab900-row-even`,`lab900-row-odd`,`lab900-row-detail-expanded`,`lab900-row-selected`,`background-color`,4,`matRowDef`,`matRowDefColumns`,`matRowDefWhen`],[`mat-header-row`,``],[`mat-row`,``,`cdkDrag`,``,3,`click`,`keydown.enter`,`keydown.space`,`cdkDragStarted`,`cdkDragDisabled`],[`mat-row`,``,1,`lab900-row-detail`],[`mat-footer-row`,``,3,`hidden`,4,`matFooterRowDef`],[`matColumnDef`,`preFooterTitle`],[`mat-footer-cell`,``,`class`,`lab900-table__pre-footer-title-cell`,4,`matFooterCellDef`],[`mat-footer-row`,``,`class`,`lab900-table__pre-footer-title-row`,3,`hidden`,4,`matFooterRowDef`],[`mat-footer-cell`,``,1,`lab900-table__pre-footer-title-cell`],[`mat-footer-row`,``,1,`lab900-table__pre-footer-title-row`,3,`hidden`],[`mat-footer-row`,``,3,`hidden`],[4,`cdkDragPlaceholder`],[1,`lab900-table__empty`]],template:function(t,i){t&1&&Nw(0,Pf,23,28,`div`,0),t&2&&xw(i.visibleColumns()?0:-1)},dependencies:[Ol,N_$1,Ll,ua,Vl,_a,ma,pa,ha,Ft,aa,Ge$1,ci$2,di$2,fi$1,hi$1,li$2,ai$2,ri$2,_i$1,yi$1,pi$1,ui$1,gi$1,mi$2,xn$4],styles:[`.lab900-table{width:100%}.lab900-table .lab900-cell-value{width:100%;text-overflow:ellipsis;overflow:hidden}.lab900-table .lab900-cell-value.value-is-placeholder{color:var(--%NS%lab900-table-placeholder-text-color)}.lab900-table.fixed-widths .mat-mdc-table{table-layout:fixed}.lab900-table.fixed-widths .mat-mdc-table:not(.has-back-actions) tr.mat-mdc-row>:last-child{width:100%}.lab900-table .lab900-table-wrapper{overflow:auto;position:relative;width:100%;z-index:0}.lab900-table th.mat-mdc-header-cell,.lab900-table td.mat-mdc-cell,.lab900-table td.mat-mdc-footer-cell{text-align:left;padding-right:16px;white-space:nowrap}.lab900-table th.mat-mdc-header-cell.checkbox-cell,.lab900-table td.mat-mdc-cell.checkbox-cell,.lab900-table td.mat-mdc-footer-cell.checkbox-cell{width:64px;padding:0 12px}.lab900-table th.mat-mdc-header-cell.center-cell,.lab900-table td.mat-mdc-cell.center-cell,.lab900-table td.mat-mdc-footer-cell.center-cell{text-align:center}.lab900-table th.mat-mdc-header-cell.sortable,.lab900-table td.mat-mdc-cell.sortable,.lab900-table td.mat-mdc-footer-cell.sortable{cursor:pointer}.lab900-table th.mat-mdc-header-cell.sortable:focus-visible,.lab900-table td.mat-mdc-cell.sortable:focus-visible,.lab900-table td.mat-mdc-footer-cell.sortable:focus-visible{outline:2px solid currentColor;outline-offset:-2px}.lab900-table th.mat-mdc-header-cell.edit-mode,.lab900-table td.mat-mdc-cell.edit-mode,.lab900-table td.mat-mdc-footer-cell.edit-mode{position:relative}.lab900-table th.mat-mdc-header-cell.editable,.lab900-table td.mat-mdc-cell.editable,.lab900-table td.mat-mdc-footer-cell.editable{cursor:text}.lab900-table .cdk-column-actions{padding-right:0!important}.lab900-table tr.mat-mdc-row.lab900-row-expanded>td.mat-mdc-cell{border-bottom-width:0}.lab900-table tr.mat-mdc-row.lab900-row-detail{height:auto}.lab900-table tr.mat-mdc-row.lab900-row-detail>td.lab900-row-detail-cell{padding:0;white-space:normal}.lab900-table tr.mat-mdc-row.lab900-row-detail:not(.lab900-row-detail-expanded)>td.lab900-row-detail-cell{border-bottom-width:0}.lab900-table .lab900-row-detail-content{padding:8px 16px 16px}.lab900-table .lab900-row-detail-enter{animation:lab900-row-detail-enter .15s ease-out}.lab900-table .lab900-row-detail-leave{animation:lab900-row-detail-enter .1s ease-in reverse}@media(prefers-reduced-motion:reduce){.lab900-table .lab900-row-detail-enter,.lab900-table .lab900-row-detail-leave{animation:none}}.lab900-table__empty{text-align:center;margin-bottom:8px}.lab900-table__mat-tooltip{min-width:fit-content}td.mat-mdc-cell.edit-mode{background:var(--%NS%lab900-table-edit-background)}td.mat-mdc-cell:focus{outline:none}@keyframes lab900-row-detail-enter{0%{opacity:0;transform:translateY(-4px)}to{opacity:1;transform:none}}.cdk-drag-preview{box-sizing:border-box;border-radius:4px;box-shadow:0 5px 5px -3px #0003,0 8px 10px 1px #00000024,0 3px 14px 2px #0000001f;background:#fff;display:table}.cdk-drag-preview td{flex-grow:2;font-size:14px;padding:4px;vertical-align:middle;border:none!important;background:#fff}.sticky-header{overflow:visible!important}.cdk-drag-placeholder{background-color:#ebebeb}.cdk-drag-animating{transition:transform .25s cubic-bezier(0,0,.2,1)}.cdk-drop-list-dragging .mat-mdc-row:not(.cdk-drag-placeholder){transition:transform .25s cubic-bezier(0,0,.2,1)}.cdk-column-actions-front{width:0;padding-left:0!important}.cdk-column-actions-back{width:0;padding-right:0!important}.lab900-cell-input{width:100%;border:none;border-radius:0;box-sizing:border-box;outline:none;position:absolute;display:inline-block;inset:0;padding:0 16px;font-family:var(--%NS%mat-table-row-item-label-text-font, Roboto, sans-serif);line-height:var(--%NS%mat-table-row-item-label-text-line-height);font-size:var(--%NS%mat-table-row-item-label-text-size, 14px);font-weight:var(--%NS%mat-table-row-item-label-text-weight);letter-spacing:var(--%NS%mat-table-row-item-label-text-tracking);background:transparent}.lab900-cell-input+.mat-datepicker-toggle{position:absolute;right:0;top:calc(50% - 24px)}.lab900-cell-input-toggle{position:absolute;right:0;top:calc(50% - 24px)}.lab900-table-select-editor{position:absolute;inset:0;display:flex!important;align-items:center}.lab900-table-select-editor .mat-mdc-select-trigger{padding:0 16px}.lab900-table-select-editor .mat-mdc-select-arrow-wrapper{display:none}
`],encapsulation:2})}}return n})();function Of(n,a){if(n&1){let e=Vw();cs$1(0,`button`,3),Ug(`click`,function(i){Wd$1(e);return qd$1(Hw().handleClear(i))}),cs$1(1,`mat-icon`),yb$1(2,`close`),Ju$1()()}n&2&&Og(`tabIndex`,-1)}var Wl=(()=>{class n extends be$2{constructor(){super(...arguments),this.tooltipWithHtml=qe$3(()=>this.tooltip()?.replace(/<[^>]*>/g,``)),this.canClear=qe$3(()=>this.hasCellValue()&&!this.disabled())}handleClear(e){e.preventDefault(),e.stopImmediatePropagation();let t=this.handleValueChanged();if(!t)throw Error(`No handleValueChanged method provided for column ${this.columnConfig().key}`);t(null,this.columnConfig(),this.data())}static{this.ɵfac=(()=>{let e;return function(i){return(e||(e=Cp$1(n)))(i||n)}})()}static{this.ɵcmp=NC({type:n,selectors:[[`lab900-cell-with-clearing-renderer`]],features:[Dg],decls:4,vars:6,consts:[[1,`lab900-cell-value`,`lab900-cell-value--with-icon`,3,`matTooltip`,`matTooltipPosition`],[1,`lab900-cell-value`,3,`innerHTML`],[`mat-icon-button`,``,2,`margin-left`,`6px`,3,`tabIndex`],[`mat-icon-button`,``,2,`margin-left`,`6px`,3,`click`,`tabIndex`]],template:function(t,i){t&1&&(cs$1(0,`div`,0),kg(1,`div`,1),kb$1(2,`translate`),Nw(3,Of,3,1,`button`,2),Ju$1()),t&2&&(Og(`matTooltip`,i.tooltipWithHtml())(`matTooltipPosition`,i.tooltipPosition()),lI(),Og(`innerHTML`,Lb$1(2,4,i.cellValueOrPlaceholder()),hE),lI(2),xw(i.canClear()?3:-1))},dependencies:[Fe,Vt$3,ln,xn$4],styles:[`.lab900-cell-value--with-icon{display:flex;align-items:center}.lab900-cell-value--with-icon button{padding:0!important;width:36px!important;height:36px!important}
`],encapsulation:2})}}return n})();var li=(()=>{class n{constructor(){this.tableCell=g$2(_a),this.elm=g$2(it$2),this.columnConfig=Zj.required(),this.data=Yj.required(),this.editOptions=qe$3(()=>this.columnConfig().cellEditorOptions),this.placeholder=qe$3(()=>this.editOptions()?.placeholder??``),this.cellValue=qe$3(()=>this.getUnformattedValue()??null)}ngAfterViewInit(){this.focusAfterViewInit()}focusAfterViewInit(){let e=this.elm.nativeElement?.querySelector(`.lab900-cell-input`);e&&e.focus()}getUnformattedValue(){let e=this.columnConfig(),t=Wt(this.data());if(e.key.includes(`.`)){let i=e.key.split(`.`),o=t;for(let r of i)o=o?.[r];return o}return t?.[e.key]}close(){this.resetTableCell()}isDifferent(e,t){return hn(e,t)}closeAndSave(e,t=!0){if(this.isDifferent(e,this.cellValue())){if(!this.handleValueChanged)throw Error(`No handleValueChanged method provided for column ${this.columnConfig().key}`);this.handleValueChanged(e,this.columnConfig(),this.data())}t&&this.resetTableCell()}resetTableCell(){this.tableCell.closeEditor()}static{this.ɵfac=function(t){return new(t||n)}}static{this.ɵdir=En$3({type:n,inputs:{columnConfig:[1,`columnConfig`],data:[1,`data`],handleValueChanged:`handleValueChanged`},outputs:{data:`dataChange`}})}}return n})();var wo=(()=>{class n extends li{isDifferent(e,t){return super.isDifferent(e??``,t??``)}static{this.ɵfac=(()=>{let e;return function(i){return(e||(e=Cp$1(n)))(i||n)}})()}static{this.ɵcmp=NC({type:n,selectors:[[`lab900-cell-edit-input-renderer`]],features:[Dg],decls:3,vars:6,consts:[[`input`,``],[1,`lab900-cell-input`,3,`blur`,`focus`,`keydown.enter`,`type`,`value`,`max`,`placeholder`]],template:function(t,i){if(t&1){let o=Vw();Xu$1(0,`input`,1,0),kb$1(2,`translate`),Gg(`blur`,function(){Wd$1(o);let u=Yw(1);return qd$1(i.closeAndSave(u.value))})(`focus`,function(){Wd$1(o);return qd$1(Yw(1).select())})(`keydown.enter`,function(){Wd$1(o);let u=Yw(1);return qd$1(i.closeAndSave(u.value))}),el$1()}t&2&&Hg(`type`,i.editOptions()?.type||`text`)(`value`,i.cellValue())(`max`,i.editOptions()?.maxLength)(`placeholder`,Lb$1(2,4,i.placeholder()))},dependencies:[xn$4],encapsulation:2})}}return n})();var ql=new S$1(``);var $l=(()=>{class n{value=null;stateChanges;id;placeholder;ngControl=null;focused=!1;empty=!1;shouldLabelFloat=!1;required=!1;disabled=!1;errorState=!1;controlType;autofilled;userAriaDescribedBy;disableAutomaticLabeling;describedByIds;static ɵfac=function(t){return new(t||n)};static ɵdir=En$3({type:n})}return n})();var Ul=new S$1(`MatFormField`);var Vf=[`text`];var Bf=[[[`mat-icon`]],`*`];var zf=[`mat-icon`,`*`];function Hf(n,a){if(n&1&&kg(0,`mat-pseudo-checkbox`,1),n&2){let e=Hw();Og(`disabled`,e.disabled)(`state`,e.selected?`checked`:`unchecked`)}}function jf(n,a){if(n&1&&kg(0,`mat-pseudo-checkbox`,3),n&2)Og(`disabled`,Hw().disabled)}function Gf(n,a){if(n&1&&(cs$1(0,`span`,4),yb$1(1),Ju$1()),n&2){let e=Hw();lI(),rl$1(`(`,e.group.label,`)`)}}var So=new S$1(`MAT_OPTION_PARENT_COMPONENT`);var Do=new S$1(`MatOptgroup`);var ko=class{source;isUserInput;constructor(a,e=!1){this.source=a,this.isUserInput=e}};var ba=(()=>{class n{_element=g$2(it$2);_changeDetectorRef=g$2(Ls$1);_parent=g$2(So,{optional:!0});group=g$2(Do,{optional:!0});_signalDisableRipple=!1;_selected=!1;_active=!1;_mostRecentViewValue=``;get multiple(){return this._parent&&this._parent.multiple}get selected(){return this._selected}value;id=g$2(Pe$2).getId(`mat-option-`);get disabled(){return this.group&&this.group.disabled||this._disabled()}set disabled(e){this._disabled.set(e)}_disabled=xe$3(!1);get disableRipple(){return this._signalDisableRipple?this._parent.disableRipple():!!this._parent?.disableRipple}get hideSingleSelectionIndicator(){return!!(this._parent&&this._parent.hideSingleSelectionIndicator)}onSelectionChange=new Ke$2;_text;_stateChanges=new ee$3;constructor(){let e=g$2($$2);e.load(Vt),e.load(ue$3),this._signalDisableRipple=!!this._parent&&Qn$2(this._parent.disableRipple)}get active(){return this._active}get viewValue(){return(this._text?.nativeElement.textContent||``).trim()}select(e=!0){this._selected||(this._selected=!0,this._changeDetectorRef.markForCheck(),e&&this._emitSelectionChangeEvent())}deselect(e=!0){this._selected&&(this._selected=!1,this._changeDetectorRef.markForCheck(),e&&this._emitSelectionChangeEvent())}focus(e,t){let i=this._getHostElement();typeof i.focus==`function`&&i.focus(t)}setActiveStyles(){this._active||(this._active=!0,this._changeDetectorRef.markForCheck())}setInactiveStyles(){this._active&&(this._active=!1,this._changeDetectorRef.markForCheck())}getLabel(){return this.viewValue}_handleKeydown(e){(e.keyCode===13||e.keyCode===32)&&!_t$3(e)&&(this._selectViaInteraction(),e.preventDefault())}_selectViaInteraction(){this.disabled||(this._selected=this.multiple?!this._selected:!0,this._changeDetectorRef.markForCheck(),this._emitSelectionChangeEvent(!0))}_getTabIndex(){return this.disabled?`-1`:`0`}_getHostElement(){return this._element.nativeElement}ngAfterViewChecked(){if(this._selected){let e=this.viewValue;e!==this._mostRecentViewValue&&(this._mostRecentViewValue&&this._stateChanges.next(),this._mostRecentViewValue=e)}}ngOnDestroy(){this._stateChanges.complete()}_emitSelectionChangeEvent(e=!1){this.onSelectionChange.emit(new ko(this,e))}static ɵfac=function(t){return new(t||n)};static ɵcmp=NC({type:n,selectors:[[`mat-option`]],viewQuery:function(t,i){if(t&1&&qg(Vf,7),t&2){let o;Ww(o=qw())&&(i._text=o.first)}},hostAttrs:[`role`,`option`,1,`mat-mdc-option`,`mdc-list-item`],hostVars:11,hostBindings:function(t,i){t&1&&Ug(`click`,function(){return i._selectViaInteraction()})(`keydown`,function(r){return i._handleKeydown(r)}),t&2&&(Hg(`id`,i.id),Rg(`aria-selected`,i.selected)(`aria-disabled`,i.disabled.toString()),Jg(`mdc-list-item--selected`,i.selected)(`mat-mdc-option-multiple`,i.multiple)(`mat-mdc-option-active`,i.active)(`mdc-list-item--disabled`,i.disabled))},inputs:{value:`value`,id:`id`,disabled:[2,`disabled`,`disabled`,mo$2]},outputs:{onSelectionChange:`onSelectionChange`},exportAs:[`matOption`],ngContentSelectors:zf,decls:8,vars:5,consts:[[`text`,``],[`aria-hidden`,`true`,1,`mat-mdc-option-pseudo-checkbox`,3,`disabled`,`state`],[1,`mdc-list-item__primary-text`],[`state`,`checked`,`aria-hidden`,`true`,`appearance`,`minimal`,1,`mat-mdc-option-pseudo-checkbox`,3,`disabled`],[1,`cdk-visually-hidden`],[`aria-hidden`,`true`,`mat-ripple`,``,1,`mat-mdc-option-ripple`,`mat-focus-indicator`,3,`matRippleTrigger`,`matRippleDisabled`]],template:function(t,i){t&1&&(Uw(Bf),Nw(0,Hf,1,2,`mat-pseudo-checkbox`,1),Gw(1),cs$1(2,`span`,2,0),Gw(4,1),Ju$1(),Nw(5,jf,1,1,`mat-pseudo-checkbox`,3),Nw(6,Gf,2,1,`span`,4),kg(7,`div`,5)),t&2&&(xw(i.multiple?0:-1),lI(5),xw(!i.multiple&&i.selected&&!i.hideSingleSelectionIndicator?5:-1),lI(),xw(i.group&&i.group._inert?6:-1),lI(),Og(`matRippleTrigger`,i._getHostElement())(`matRippleDisabled`,i.disabled||i.disableRipple))},dependencies:[Ui,Tn$1],styles:[`.mat-mdc-option {
  -webkit-user-select: none;
  user-select: none;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
  min-height: 48px;
  padding: 0 16px;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  color: var(--%NS%mat-option-label-text-color, var(--%NS%mat-sys-on-surface));
  font-family: var(--%NS%mat-option-label-text-font, var(--%NS%mat-sys-label-large-font));
  line-height: var(--%NS%mat-option-label-text-line-height, var(--%NS%mat-sys-label-large-line-height));
  font-size: var(--%NS%mat-option-label-text-size, var(--%NS%mat-sys-body-large-size));
  letter-spacing: var(--%NS%mat-option-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  font-weight: var(--%NS%mat-option-label-text-weight, var(--%NS%mat-sys-body-large-weight));
}
.mat-mdc-option:hover:not(.mdc-list-item--disabled) {
  background-color: var(--%NS%mat-option-hover-state-layer-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) calc(var(--%NS%mat-sys-hover-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-option:focus.mdc-list-item, .mat-mdc-option.mat-mdc-option-active.mdc-list-item {
  background-color: var(--%NS%mat-option-focus-state-layer-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) calc(var(--%NS%mat-sys-focus-state-layer-opacity) * 100%), transparent));
  outline: 0;
}
.mat-mdc-option.mdc-list-item--%NS%selected:not(.mdc-list-item--disabled):not(.mat-mdc-option-active, .mat-mdc-option-multiple, :focus, :hover) {
  background-color: var(--%NS%mat-option-selected-state-layer-color, var(--%NS%mat-sys-secondary-container));
}
.mat-mdc-option.mdc-list-item--%NS%selected:not(.mdc-list-item--disabled):not(.mat-mdc-option-active, .mat-mdc-option-multiple, :focus, :hover) .mdc-list-item__primary-text {
  color: var(--%NS%mat-option-selected-state-label-text-color, var(--%NS%mat-sys-on-secondary-container));
}
.mat-mdc-option .mat-pseudo-checkbox {
  --%NS%mat-pseudo-checkbox-minimal-selected-checkmark-color: var(--%NS%mat-option-selected-state-label-text-color, var(--%NS%mat-sys-on-secondary-container));
}
.mat-mdc-option.mdc-list-item {
  align-items: center;
  background: transparent;
}
.mat-mdc-option.mdc-list-item--disabled {
  cursor: default;
  pointer-events: none;
}
.mat-mdc-option.mdc-list-item--disabled .mat-mdc-option-pseudo-checkbox, .mat-mdc-option.mdc-list-item--disabled .mdc-list-item__primary-text, .mat-mdc-option.mdc-list-item--disabled > mat-icon {
  opacity: 0.38;
}
.mat-mdc-optgroup .mat-mdc-option:not(.mat-mdc-option-multiple) {
  padding-left: 32px;
}
[dir=rtl] .mat-mdc-optgroup .mat-mdc-option:not(.mat-mdc-option-multiple) {
  padding-left: 16px;
  padding-right: 32px;
}
.mat-mdc-option .mat-icon,
.mat-mdc-option .mat-pseudo-checkbox-full {
  margin-right: 16px;
  flex-shrink: 0;
}
[dir=rtl] .mat-mdc-option .mat-icon,
[dir=rtl] .mat-mdc-option .mat-pseudo-checkbox-full {
  margin-right: 0;
  margin-left: 16px;
}
.mat-mdc-option .mat-pseudo-checkbox-minimal {
  margin-left: 16px;
  flex-shrink: 0;
}
[dir=rtl] .mat-mdc-option .mat-pseudo-checkbox-minimal {
  margin-right: 16px;
  margin-left: 0;
}
.mat-mdc-option .mat-mdc-option-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}
.mat-mdc-option .mdc-list-item__primary-text {
  white-space: normal;
  font-size: inherit;
  font-weight: inherit;
  letter-spacing: inherit;
  line-height: inherit;
  font-family: inherit;
  text-decoration: inherit;
  text-transform: inherit;
  margin-right: auto;
}
[dir=rtl] .mat-mdc-option .mdc-list-item__primary-text {
  margin-right: 0;
  margin-left: auto;
}
@media (forced-colors: active) {
  .mat-mdc-option.mdc-list-item--%NS%selected:not(:has(.mat-mdc-option-pseudo-checkbox))::after {
    content: "";
    position: absolute;
    top: 50%;
    right: 16px;
    transform: translateY(-50%);
    width: 10px;
    height: 0;
    border-bottom: solid 10px;
    border-radius: 10px;
  }
  [dir=rtl] .mat-mdc-option.mdc-list-item--%NS%selected:not(:has(.mat-mdc-option-pseudo-checkbox))::after {
    right: auto;
    left: 16px;
  }
}

.mat-mdc-option-multiple {
  --%NS%mat-list-list-item-selected-container-color: var(--%NS%mat-list-list-item-container-color, transparent);
}

.mat-mdc-option-active .mat-focus-indicator::before {
  content: "";
}
`],encapsulation:2})}return n})();function Ql(n,a,e){if(e.length){let t=a.toArray(),i=e.toArray(),o=0;for(let r=0;r<n+1;r++)t[r].group&&t[r].group===i[o]&&o++;return o}return 0}function Zl(n,a,e,t){return n<e?n:n+a>e+t?Math.max(0,n-t+a):e}var Xl=(()=>{class n{isErrorState(e,t){return!!(e&&e.invalid&&(e.touched||t&&t.submitted))}isSignalErrorState(e){if(!e)return!1;let t=e().invalid(),i=e().touched();return t&&i}static ɵfac=function(t){return new(t||n)};static ɵprov=Oe$3({token:n,factory:n.ɵfac})}return n})();var ga=class{_defaultMatcher;_parentFormGroup;_parentForm;_stateChanges;errorState=!1;matcher;ngControl;formField;constructor(a,e,t,i,o){this._defaultMatcher=a,this._parentFormGroup=t,this._parentForm=i,this._stateChanges=o,e?Qn$2(e.field)&&!e.updateValueAndValidity?(this.formField=e,this.ngControl=null):(this.formField=null,this.ngControl=e):this.ngControl=this.formField=null}updateErrorState(){let a=this.errorState,e=this._getCurrentErrorState(this.matcher||this._defaultMatcher);e!==a&&(this.errorState=e,this._stateChanges.next())}_getCurrentErrorState(a){if(this.formField&&a?.isSignalErrorState)return a.isSignalErrorState(this.formField.field())??!1;let e=this._parentFormGroup||this._parentForm,t=this.ngControl?this.ngControl.control:null;return a?.isErrorState(t,e)??!1}};var qf=[`trigger`];var $f=[`panel`];var Uf=[[[`mat-select-trigger`]],`*`];var Qf=[`mat-select-trigger`,`*`];function Zf(n,a){if(n&1&&(cs$1(0,`span`,4),yb$1(1),Ju$1()),n&2){let e=Hw();lI(),im$1(e.placeholder)}}function Xf(n,a){n&1&&Gw(0)}function Kf(n,a){if(n&1&&(cs$1(0,`span`,11),yb$1(1),Ju$1()),n&2){let e=Hw(2);lI(),im$1(e.triggerValue)}}function Yf(n,a){if(n&1&&(cs$1(0,`span`,5),Nw(1,Xf,1,0)(2,Kf,2,1,`span`,11),Ju$1()),n&2){let e=Hw();lI(),xw(e.customTrigger?1:2)}}function Jf(n,a){if(n&1){let e=Vw();cs$1(0,`div`,12,1),Ug(`keydown`,function(i){Wd$1(e);return qd$1(Hw()._handleKeydown(i))}),Gw(2,1),Ju$1()}if(n&2){let e=Hw();sb$1(e.panelClass),Jg(`mat-select-panel-animations-enabled`,!e._animationsDisabled)(`mat-primary`,e._parentFormField?.color===`primary`)(`mat-accent`,e._parentFormField?.color===`accent`)(`mat-warn`,e._parentFormField?.color===`warn`)(`mat-undefined`,!e._parentFormField?.color),Rg(`id`,e.id+`-panel`)(`aria-multiselectable`,e.multiple)(`aria-label`,e.ariaLabel||null)(`aria-labelledby`,e._getPanelAriaLabelledby())}}var e_=new S$1(`mat-select-scroll-strategy`,{providedIn:`root`,factory:()=>{let n=g$2(ne$1);return()=>U$3(n)}});var t_=new S$1(`MAT_SELECT_CONFIG`);var n_=new S$1(`MatSelectTrigger`);var To=class{source;value;constructor(a,e){this.source=a,this.value=e}};var va=(()=>{class n{_viewportRuler=g$2(st$4);_changeDetectorRef=g$2(Ls$1);_elementRef=g$2(it$2);_dir=g$2(b$2,{optional:!0});_idGenerator=g$2(Pe$2);_renderer=g$2(gn$5);_parentFormField=g$2(Ul,{optional:!0});ngControl=g$2(Wi,{self:!0,optional:!0});_liveAnnouncer=g$2(Tn$4);_defaultOptions=g$2(t_,{optional:!0});_animationsDisabled=ai$3();_popoverLocation;_initialized=new ee$3;_cleanupDetach;options;optionGroups;customTrigger;_positions=[{originX:`start`,originY:`bottom`,overlayX:`start`,overlayY:`top`},{originX:`end`,originY:`bottom`,overlayX:`end`,overlayY:`top`},{originX:`start`,originY:`top`,overlayX:`start`,overlayY:`bottom`,panelClass:`mat-mdc-select-panel-above`},{originX:`end`,originY:`top`,overlayX:`end`,overlayY:`bottom`,panelClass:`mat-mdc-select-panel-above`}];_scrollOptionIntoView(e){let t=this.options.toArray()[e];if(t){let i=this.panel.nativeElement,o=Ql(e,this.options,this.optionGroups),r=t._getHostElement();e===0&&o===1?i.scrollTop=0:i.scrollTop=Zl(r.offsetTop,r.offsetHeight,i.scrollTop,i.offsetHeight)}}_positioningSettled(){this._scrollOptionIntoView(this._keyManager.activeItemIndex||0)}_getChangeEvent(e){return new To(this,e)}_scrollStrategyFactory=g$2(e_);_panelOpen=!1;_compareWith=(e,t)=>e===t;_uid=this._idGenerator.getId(`mat-select-`);_triggerAriaLabelledBy=null;_previousControl;_destroy=new ee$3;_errorStateTracker;stateChanges=new ee$3;disableAutomaticLabeling=!0;userAriaDescribedBy;_selectionModel;_keyManager;_preferredOverlayOrigin;_overlayWidth;_onChange=()=>{};_onTouched=()=>{};_valueId=this._idGenerator.getId(`mat-select-value-`);_scrollStrategy;_overlayPanelClass=this._defaultOptions?.overlayPanelClass||``;get focused(){return this._focused||this._panelOpen}_focused=!1;controlType=`mat-select`;trigger;panel;_overlayDir;panelClass;disabled=!1;get disableRipple(){return this._disableRipple()}set disableRipple(e){this._disableRipple.set(e)}_disableRipple=xe$3(!1);tabIndex=0;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(e){this._hideSingleSelectionIndicator=e,this._syncParentProperties()}_hideSingleSelectionIndicator=this._defaultOptions?.hideSingleSelectionIndicator??!1;get placeholder(){return this._placeholder}set placeholder(e){this._placeholder=e,this.stateChanges.next()}_placeholder;get required(){return this._required??this.ngControl?.control?.hasValidator(Un.required)??!1}set required(e){this._required=e,this.stateChanges.next()}_required;get multiple(){return this._multiple}set multiple(e){this._selectionModel,this._multiple=e}_multiple=!1;disableOptionCentering=this._defaultOptions?.disableOptionCentering??!1;get compareWith(){return this._compareWith}set compareWith(e){this._compareWith=e,this._selectionModel&&this._initializeSelection()}get value(){return this._value}set value(e){this._assignValue(e)&&this._onChange(e)}_value;ariaLabel=``;ariaLabelledby;get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}typeaheadDebounceInterval;sortComparator;get id(){return this._id}set id(e){this._id=e||this._uid,this.stateChanges.next()}_id;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}panelWidth=this._defaultOptions&&typeof this._defaultOptions.panelWidth<`u`?this._defaultOptions.panelWidth:`auto`;canSelectNullableOptions=this._defaultOptions?.canSelectNullableOptions??!1;optionSelectionChanges=Ly(()=>{let e=this.options;return e?e.changes.pipe(Ky(e),ad$1(()=>Vy(...e.map(t=>t.onSelectionChange)))):this._initialized.pipe(ad$1(()=>this.optionSelectionChanges))});openedChange=new Ke$2;_openedStream=this.openedChange.pipe(Ir(e=>e),Ye$2(()=>{}));_closedStream=this.openedChange.pipe(Ir(e=>!e),Ye$2(()=>{}));selectionChange=new Ke$2;valueChange=new Ke$2;constructor(){let e=g$2(Xl),t=g$2(Ua,{optional:!0}),i=g$2(Qa,{optional:!0}),o=g$2(new Tm$1(`tabindex`),{optional:!0}),r=g$2(Nt$3,{optional:!0}),u=g$2(ql,{optional:!0,self:!0});this.ngControl&&(this.ngControl.valueAccessor=this),this._defaultOptions?.typeaheadDebounceInterval!=null&&(this.typeaheadDebounceInterval=this._defaultOptions.typeaheadDebounceInterval),this._errorStateTracker=new ga(e,u||this.ngControl,i,t,this.stateChanges),this._scrollStrategy=this._scrollStrategyFactory(),this.tabIndex=o==null?0:parseInt(o)||0,this._popoverLocation=r?.usePopover===!1?null:`inline`,this.id=this.id}ngOnInit(){this._selectionModel=new Ce$1(this.multiple),this.stateChanges.next(),this._viewportRuler.change().pipe(ia$1(this._destroy)).subscribe(()=>{this.panelOpen&&(this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._changeDetectorRef.detectChanges())})}ngAfterContentInit(){this._initialized.next(),this._initialized.complete(),this._initKeyManager(),this._selectionModel.changed.pipe(ia$1(this._destroy)).subscribe(e=>{e.added.forEach(t=>t.select()),e.removed.forEach(t=>t.deselect())}),this.options.changes.pipe(Ky(null),ia$1(this._destroy)).subscribe(()=>{this._resetOptions(),this._initializeSelection()})}ngDoCheck(){let e=this._getTriggerAriaLabelledby(),t=this.ngControl;if(e!==this._triggerAriaLabelledBy){let i=this._elementRef.nativeElement;this._triggerAriaLabelledBy=e,e?i.setAttribute(`aria-labelledby`,e):i.removeAttribute(`aria-labelledby`)}t&&(this._previousControl!==t.control&&(this._previousControl!==void 0&&t.disabled!==null&&t.disabled!==this.disabled&&(this.disabled=t.disabled),this._previousControl=t.control),this.updateErrorState())}ngOnChanges(e){(e.disabled||e.userAriaDescribedBy)&&this.stateChanges.next(),e.typeaheadDebounceInterval&&this._keyManager&&this._keyManager.withTypeAhead(this.typeaheadDebounceInterval),e.panelClass&&this.panelClass instanceof Set&&(this.panelClass=Array.from(this.panelClass))}ngOnDestroy(){this._cleanupDetach?.(),this._keyManager?.destroy(),this._destroy.next(),this._destroy.complete(),this.stateChanges.complete()}toggle(){this.panelOpen?this.close():this.open()}open(){this._canOpen()&&(this._parentFormField&&(this._preferredOverlayOrigin=this._parentFormField.getConnectedOverlayOrigin()),this._cleanupDetach?.(),this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._panelOpen=!0,this._overlayDir.positionChange.pipe(Rn$2(1)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this._positioningSettled()}),this._overlayDir.attachOverlay(),this._keyManager.withHorizontalOrientation(null),this._highlightCorrectOption(),this._changeDetectorRef.markForCheck(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(!0)))}close(){this._panelOpen&&(this._panelOpen=!1,this._exitAndDetach(),this._keyManager.withHorizontalOrientation(this._isRtl()?`rtl`:`ltr`),this._changeDetectorRef.markForCheck(),this._onTouched(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(!1)))}_exitAndDetach(){if(this._animationsDisabled||!this.panel){this._detachOverlay();return}this._cleanupDetach?.(),this._cleanupDetach=()=>{t(),clearTimeout(i),this._cleanupDetach=void 0};let e=this.panel.nativeElement,t=this._renderer.listen(e,`animationend`,o=>{o.animationName===`_mat-select-exit`&&(this._cleanupDetach?.(),this._detachOverlay())}),i=setTimeout(()=>{this._cleanupDetach?.(),this._detachOverlay()},200);e.classList.add(`mat-select-panel-exit`)}_detachOverlay(){this._overlayDir.detachOverlay(),this._changeDetectorRef.markForCheck()}writeValue(e){this._assignValue(e)}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e,this._changeDetectorRef.markForCheck(),this.stateChanges.next()}get panelOpen(){return this._panelOpen}get selected(){return this.multiple?this._selectionModel?.selected||[]:this._selectionModel?.selected[0]}get triggerValue(){if(this.empty)return``;if(this._multiple){let e=this._selectionModel.selected.map(t=>t.viewValue);return this._isRtl()&&e.reverse(),e.join(`, `)}return this._selectionModel.selected[0].viewValue}updateErrorState(){this._errorStateTracker.updateErrorState()}_isRtl(){return this._dir?this._dir.value===`rtl`:!1}_handleKeydown(e){this.disabled||(this.panelOpen?this._handleOpenKeydown(e):this._handleClosedKeydown(e))}_handleClosedKeydown(e){let t=e.keyCode,i=t===40||t===38||t===37||t===39,o=t===13||t===32,r=this._keyManager;if(!r.isTyping()&&o&&!_t$3(e)||(this.multiple||e.altKey)&&i)e.preventDefault(),this.open();else if(!this.multiple){let u=this.selected;r.onKeydown(e);let C=this.selected;C&&u!==C&&this._liveAnnouncer.announce(C.viewValue,1e4)}}_handleOpenKeydown(e){let t=this._keyManager,i=e.keyCode,o=i===40||i===38,r=t.isTyping();if(o&&e.altKey)e.preventDefault(),this.close();else if(!r&&(i===13||i===32)&&t.activeItem&&!_t$3(e))e.preventDefault(),t.activeItem._selectViaInteraction();else if(!r&&this._multiple&&i===65&&e.ctrlKey){e.preventDefault();let u=this.options.some(C=>!C.disabled&&!C.selected);this.options.forEach(C=>{C.disabled||(u?C.select():C.deselect())})}else{let u=t.activeItemIndex;t.onKeydown(e),this._multiple&&o&&e.shiftKey&&t.activeItem&&t.activeItemIndex!==u&&t.activeItem._selectViaInteraction()}}_handleOverlayKeydown(e){e.keyCode===27&&!_t$3(e)&&(e.preventDefault(),this.close())}_onFocus(){this.disabled||(this._focused=!0,this.stateChanges.next())}_onBlur(){this._focused=!1,this._keyManager?.cancelTypeahead(),!this.disabled&&!this.panelOpen&&(this._onTouched(),this._changeDetectorRef.markForCheck(),this.stateChanges.next())}get empty(){return!this._selectionModel||this._selectionModel.isEmpty()}_initializeSelection(){Promise.resolve().then(()=>{this.ngControl&&(this._value=this.ngControl.value),this._setSelectionByValue(this._value),this.stateChanges.next()})}_setSelectionByValue(e){if(this.options.forEach(t=>t.setInactiveStyles()),this._selectionModel.clear(),this.multiple&&e)e.forEach(t=>this._selectOptionByValue(t)),this._sortValues();else{let t=this._selectOptionByValue(e);t?this._keyManager.updateActiveItem(t):this.panelOpen||this._keyManager.updateActiveItem(-1)}this._changeDetectorRef.markForCheck()}_selectOptionByValue(e){let t=this.options.find(i=>{if(this._selectionModel.isSelected(i))return!1;try{return(i.value!=null||this.canSelectNullableOptions)&&this._compareWith(i.value,e)}catch(o){return!1}});return t&&this._selectionModel.select(t),t}_assignValue(e){return e!==this._value||this._multiple&&Array.isArray(e)?(this.options&&this._setSelectionByValue(e),this._value=e,!0):!1}_skipPredicate=e=>this.panelOpen?!1:e.disabled;_getOverlayWidth(e){return this.panelWidth===`auto`?(e instanceof At$2?e.elementRef:e||this._elementRef).nativeElement.getBoundingClientRect().width:this.panelWidth===null?``:this.panelWidth}_syncParentProperties(){if(this.options)for(let e of this.options)e._changeDetectorRef.markForCheck()}_initKeyManager(){this._keyManager=new ke$2(this.options).withTypeAhead(this.typeaheadDebounceInterval).withVerticalOrientation().withHorizontalOrientation(this._isRtl()?`rtl`:`ltr`).withHomeAndEnd().withPageUpDown().withAllowedModifierKeys([`shiftKey`]).skipPredicate(this._skipPredicate),this._keyManager.tabOut.subscribe(()=>{this.panelOpen&&(!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction(),this.focus(),this.close())}),this._keyManager.change.subscribe(()=>{this._panelOpen&&this.panel?this._scrollOptionIntoView(this._keyManager.activeItemIndex||0):!this._panelOpen&&!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction()})}_resetOptions(){let e=Vy(this.options.changes,this._destroy);this.optionSelectionChanges.pipe(ia$1(e)).subscribe(t=>{this._onSelect(t.source,t.isUserInput),t.isUserInput&&!this.multiple&&this._panelOpen&&(this.close(),this.focus())}),Vy(...this.options.map(t=>t._stateChanges)).pipe(ia$1(e)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this.stateChanges.next()})}_onSelect(e,t){let i=this._selectionModel.isSelected(e);!this.canSelectNullableOptions&&e.value==null&&!this._multiple?(e.deselect(),this._selectionModel.clear(),this.value!=null&&this._propagateChanges(e.value)):(i!==e.selected&&(e.selected?this._selectionModel.select(e):this._selectionModel.deselect(e)),t&&this._keyManager.setActiveItem(e),this.multiple&&(this._sortValues(),t&&this.focus())),i!==this._selectionModel.isSelected(e)&&this._propagateChanges(),this.stateChanges.next()}_sortValues(){if(this.multiple){let e=this.options.toArray();this._selectionModel.sort((t,i)=>this.sortComparator?this.sortComparator(t,i,e):e.indexOf(t)-e.indexOf(i)),this.stateChanges.next()}}_propagateChanges(e){let t;this.multiple?t=this.selected.map(i=>i.value):t=this.selected?this.selected.value:e,this._value=t,this.valueChange.emit(t),this._onChange(t),this.selectionChange.emit(this._getChangeEvent(t)),this._changeDetectorRef.markForCheck()}_highlightCorrectOption(){if(this._keyManager)if(this.empty){let e=-1;for(let t=0;t<this.options.length;t++)if(!this.options.get(t).disabled){e=t;break}this._keyManager.setActiveItem(e)}else this._keyManager.setActiveItem(this._selectionModel.selected[0])}_canOpen(){return!this._panelOpen&&!this.disabled&&this.options?.length>0&&!!this._overlayDir}focus(e){this._elementRef.nativeElement.focus(e)}_getPanelAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId()||null,t=e?e+` `:``;return this.ariaLabelledby?t+this.ariaLabelledby:e}_getAriaActiveDescendant(){return this.panelOpen&&this._keyManager&&this._keyManager.activeItem?this._keyManager.activeItem.id:null}_getTriggerAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId()||``;return this.ariaLabelledby&&(e+=` `+this.ariaLabelledby),e||(e=this._valueId),e}get describedByIds(){return this._elementRef.nativeElement.getAttribute(`aria-describedby`)?.split(` `)||[]}setDescribedByIds(e){let t=this._elementRef.nativeElement;e.length?t.setAttribute(`aria-describedby`,e.join(` `)):t.removeAttribute(`aria-describedby`)}onContainerClick(e){let t=M$1(e);t&&(t.tagName===`MAT-OPTION`||t.classList.contains(`cdk-overlay-backdrop`)||t.closest(`.mat-mdc-select-panel`))||(this.focus(),this.open())}get shouldLabelFloat(){return this.panelOpen||!this.empty||this.focused&&!!this.placeholder}static ɵfac=function(t){return new(t||n)};static ɵcmp=NC({type:n,selectors:[[`mat-select`]],contentQueries:function(t,i,o){if(t&1&&Wg(o,n_,5)(o,ba,5)(o,Do,5),t&2){let r;Ww(r=qw())&&(i.customTrigger=r.first),Ww(r=qw())&&(i.options=r),Ww(r=qw())&&(i.optionGroups=r)}},viewQuery:function(t,i){if(t&1&&qg(qf,5)($f,5)(Ke$1,5),t&2){let o;Ww(o=qw())&&(i.trigger=o.first),Ww(o=qw())&&(i.panel=o.first),Ww(o=qw())&&(i._overlayDir=o.first)}},hostAttrs:[`role`,`combobox`,`aria-haspopup`,`listbox`,1,`mat-mdc-select`],hostVars:21,hostBindings:function(t,i){t&1&&Ug(`keydown`,function(r){return i._handleKeydown(r)})(`focus`,function(){return i._onFocus()})(`blur`,function(){return i._onBlur()}),t&2&&(Rg(`id`,i.id)(`tabindex`,i.disabled?-1:i.tabIndex)(`aria-controls`,i.panelOpen?i.id+`-panel`:null)(`aria-expanded`,i.panelOpen)(`aria-label`,i.ariaLabel||null)(`aria-required`,i.required.toString())(`aria-disabled`,i.disabled.toString())(`aria-invalid`,i.errorState)(`aria-activedescendant`,i._getAriaActiveDescendant()),Jg(`mat-mdc-select-disabled`,i.disabled)(`mat-mdc-select-invalid`,i.errorState)(`mat-mdc-select-required`,i.required)(`mat-mdc-select-empty`,i.empty)(`mat-mdc-select-multiple`,i.multiple)(`mat-select-open`,i.panelOpen))},inputs:{userAriaDescribedBy:[0,`aria-describedby`,`userAriaDescribedBy`],panelClass:`panelClass`,disabled:[2,`disabled`,`disabled`,mo$2],disableRipple:[2,`disableRipple`,`disableRipple`,mo$2],tabIndex:[2,`tabIndex`,`tabIndex`,e=>e==null?0:yl$1(e)],hideSingleSelectionIndicator:[2,`hideSingleSelectionIndicator`,`hideSingleSelectionIndicator`,mo$2],placeholder:`placeholder`,required:[2,`required`,`required`,mo$2],multiple:[2,`multiple`,`multiple`,mo$2],disableOptionCentering:[2,`disableOptionCentering`,`disableOptionCentering`,mo$2],compareWith:`compareWith`,value:`value`,ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`],errorStateMatcher:`errorStateMatcher`,typeaheadDebounceInterval:[2,`typeaheadDebounceInterval`,`typeaheadDebounceInterval`,yl$1],sortComparator:`sortComparator`,id:`id`,panelWidth:`panelWidth`,canSelectNullableOptions:[2,`canSelectNullableOptions`,`canSelectNullableOptions`,mo$2]},outputs:{openedChange:`openedChange`,_openedStream:`opened`,_closedStream:`closed`,selectionChange:`selectionChange`,valueChange:`valueChange`},exportAs:[`matSelect`],features:[Mb$1([{provide:$l,useExisting:n},{provide:So,useExisting:n}]),sr$1],ngContentSelectors:Qf,decls:11,vars:10,consts:[[`fallbackOverlayOrigin`,`cdkOverlayOrigin`,`trigger`,``],[`panel`,``],[`cdk-overlay-origin`,``,1,`mat-mdc-select-trigger`,3,`click`],[1,`mat-mdc-select-value`],[1,`mat-mdc-select-placeholder`,`mat-mdc-select-min-line`],[1,`mat-mdc-select-value-text`],[1,`mat-mdc-select-arrow-wrapper`],[1,`mat-mdc-select-arrow`],[`viewBox`,`0 0 24 24`,`width`,`24px`,`height`,`24px`,`focusable`,`false`,`aria-hidden`,`true`],[`d`,`M7 10l5 5 5-5z`],[`cdk-connected-overlay`,``,`cdkConnectedOverlayHasBackdrop`,``,`cdkConnectedOverlayBackdropClass`,`cdk-overlay-transparent-backdrop`,3,`detach`,`backdropClick`,`overlayKeydown`,`cdkConnectedOverlayDisableClose`,`cdkConnectedOverlayPanelClass`,`cdkConnectedOverlayScrollStrategy`,`cdkConnectedOverlayOrigin`,`cdkConnectedOverlayPositions`,`cdkConnectedOverlayWidth`,`cdkConnectedOverlayFlexibleDimensions`,`cdkConnectedOverlayUsePopover`],[1,`mat-mdc-select-min-line`],[`role`,`listbox`,`tabindex`,`-1`,1,`mat-mdc-select-panel`,`mdc-menu-surface`,`mdc-menu-surface--open`,3,`keydown`]],template:function(t,i){if(t&1&&(Uw(Uf),cs$1(0,`div`,2,0),Ug(`click`,function(){return i.open()}),cs$1(3,`div`,3),Nw(4,Zf,2,1,`span`,4)(5,Yf,3,1,`span`,5),Ju$1(),cs$1(6,`div`,6)(7,`div`,7),sf$1(),cs$1(8,`svg`,8),kg(9,`path`,9),Ju$1()()()(),Ig(10,Jf,3,16,`ng-template`,10),Ug(`detach`,function(){return i.close()})(`backdropClick`,function(){return i.close()})(`overlayKeydown`,function(r){return i._handleOverlayKeydown(r)})),t&2){let o=Yw(1);lI(3),Rg(`id`,i._valueId),lI(),xw(i.empty?4:5),lI(6),Og(`cdkConnectedOverlayDisableClose`,!0)(`cdkConnectedOverlayPanelClass`,i._overlayPanelClass)(`cdkConnectedOverlayScrollStrategy`,i._scrollStrategy)(`cdkConnectedOverlayOrigin`,i._preferredOverlayOrigin||o)(`cdkConnectedOverlayPositions`,i._positions)(`cdkConnectedOverlayWidth`,i._overlayWidth)(`cdkConnectedOverlayFlexibleDimensions`,!0)(`cdkConnectedOverlayUsePopover`,i._popoverLocation)}},dependencies:[At$2,Ke$1],styles:[`@keyframes _mat-select-enter {
  from {
    opacity: 0;
    transform: scaleY(0.8);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
@keyframes _mat-select-exit {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.mat-mdc-select {
  display: inline-block;
  width: 100%;
  outline: none;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  color: var(--%NS%mat-select-enabled-trigger-text-color, var(--%NS%mat-sys-on-surface));
  font-family: var(--%NS%mat-select-trigger-text-font, var(--%NS%mat-sys-body-large-font));
  line-height: var(--%NS%mat-select-trigger-text-line-height, var(--%NS%mat-sys-body-large-line-height));
  font-size: var(--%NS%mat-select-trigger-text-size, var(--%NS%mat-sys-body-large-size));
  font-weight: var(--%NS%mat-select-trigger-text-weight, var(--%NS%mat-sys-body-large-weight));
  letter-spacing: var(--%NS%mat-select-trigger-text-tracking, var(--%NS%mat-sys-body-large-tracking));
}

div.mat-mdc-select-panel {
  box-shadow: var(--%NS%mat-select-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));
}

.mat-mdc-select-disabled {
  color: var(--%NS%mat-select-disabled-trigger-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-select-disabled .mat-mdc-select-placeholder {
  color: var(--%NS%mat-select-disabled-trigger-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-select-trigger {
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  position: relative;
  box-sizing: border-box;
  width: 100%;
}
.mat-mdc-select-disabled .mat-mdc-select-trigger {
  -webkit-user-select: none;
  user-select: none;
  cursor: default;
}

.mat-mdc-select-value {
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.mat-mdc-select-value-text {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.mat-mdc-select-arrow-wrapper {
  height: 24px;
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
}
.mat-form-field-appearance-fill .mdc-text-field--no-label .mat-mdc-select-arrow-wrapper {
  transform: none;
}

.mat-mdc-form-field .mat-mdc-select.mat-mdc-select-invalid .mat-mdc-select-arrow,
.mat-form-field-invalid:not(.mat-form-field-disabled) .mat-mdc-form-field-infix::after {
  color: var(--%NS%mat-select-invalid-arrow-color, var(--%NS%mat-sys-error));
}

.mat-mdc-select-arrow {
  width: 10px;
  height: 5px;
  position: relative;
  color: var(--%NS%mat-select-enabled-arrow-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-form-field.mat-focused .mat-mdc-select-arrow {
  color: var(--%NS%mat-select-focused-arrow-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-form-field .mat-mdc-select.mat-mdc-select-disabled .mat-mdc-select-arrow {
  color: var(--%NS%mat-select-disabled-arrow-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-select-open .mat-mdc-select-arrow {
  transform: rotate(180deg);
}
.mat-form-field-animations-enabled .mat-mdc-select-arrow {
  transition: transform 80ms linear;
}
.mat-mdc-select-arrow svg {
  fill: currentColor;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
@media (forced-colors: active) {
  .mat-mdc-select-arrow svg {
    fill: CanvasText;
  }
  .mat-mdc-select-disabled .mat-mdc-select-arrow svg {
    fill: GrayText;
  }
}

div.mat-mdc-select-panel {
  width: 100%;
  max-height: 275px;
  outline: 0;
  overflow: auto;
  padding: 8px 0;
  box-sizing: border-box;
  transform-origin: top center;
  border-radius: 0 0 4px 4px;
  position: relative;
  background-color: var(--%NS%mat-select-panel-background-color, var(--%NS%mat-sys-surface-container));
}
.mat-mdc-select-panel-above div.mat-mdc-select-panel {
  border-radius: 4px 4px 0 0;
  transform-origin: bottom center;
}
@media (forced-colors: active) {
  div.mat-mdc-select-panel {
    outline: solid 1px;
  }
}

.mat-select-panel-animations-enabled {
  animation: _mat-select-enter 120ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-select-panel-animations-enabled.mat-select-panel-exit {
  animation: _mat-select-exit 100ms linear;
}

.mat-mdc-select-placeholder {
  transition: color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1);
  color: var(--%NS%mat-select-placeholder-text-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-form-field:not(.mat-form-field-animations-enabled) .mat-mdc-select-placeholder, ._mat-animation-noopable .mat-mdc-select-placeholder {
  transition: none;
}
.mat-form-field-hide-placeholder .mat-mdc-select-placeholder {
  color: transparent;
  -webkit-text-fill-color: transparent;
  transition: none;
  display: block;
}

.mat-mdc-form-field-type-mat-select:not(.mat-form-field-disabled) .mat-mdc-text-field-wrapper {
  cursor: pointer;
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-fill .mat-mdc-floating-label {
  max-width: calc(100% - 18px);
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-fill .mdc-floating-label--float-above {
  max-width: calc(100% / 0.75 - 24px);
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-outline .mdc-notched-outline__notch {
  max-width: calc(100% - 60px);
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-outline .mdc-text-field--label-floating .mdc-notched-outline__notch {
  max-width: calc(100% - 24px);
}

.mat-mdc-select-min-line:empty::before {
  content: " ";
  white-space: pre;
  width: 1px;
  display: inline-block;
  visibility: hidden;
}

.mat-form-field-appearance-fill .mat-mdc-select-arrow-wrapper {
  transform: var(--%NS%mat-select-arrow-transform, translateY(-8px));
}
`],encapsulation:2})}return n})();function i_(n,a){if(n&1&&(cs$1(0,`mat-option`,4),yb$1(1),kb$1(2,`translate`),Ju$1()),n&2){let e=a.$implicit,t=Hw(2);Og(`value`,e),lI(),rl$1(` `,Lb$1(2,2,t.editOptions()?.optionLabelFn(e)??e),` `)}}function a_(n,a){if(n&1){let e=Vw();cs$1(0,`mat-select`,2,0),kb$1(2,`translate`),Ug(`openedChange`,function(i){Wd$1(e);return qd$1(Hw().openChanged(i))}),kg(3,`mat-option`,3),Ow(4,i_,3,4,`mat-option`,4,Rw),Ju$1()}if(n&2){let e=Yw(1),t=Hw();Jg(`disable-td-event`,e.panelOpen),Og(`placeholder`,wb$1(Lb$1(2,8,t.placeholder())))(`value`,t.cellValue())(`compareWith`,t.editOptions()?.compareWithFn??t.defaultCompareFn)(`multiple`,t.editOptions()?.multiple??!1)(`panelWidth`,t.editOptions()?.panelWidth??`auto`),lI(4),kw(t.selectOptions())}}var Kl=(()=>{class n extends li{constructor(){super(),this.matSelect=Qj(va),this.selectOptions=qe$3(()=>{let e=this.editOptions(),t=this.data();return e?.options?typeof e.options==`function`?e.options(t):e.options:[]}),this.defaultCompareFn=(e,t)=>e===t,zr(()=>{let e=this.matSelect();e&&!e.panelOpen&&(e.focus(),e.open())})}openChanged(e){e||(this.closeAndSave(this.matSelect()?.value,!1),this.elm.nativeElement.parentElement?.parentElement?.parentElement?.focus(),this.close())}static{this.ɵfac=function(t){return new(t||n)}}static{this.ɵcmp=NC({type:n,selectors:[[`lab900-cell-select-editor`]],viewQuery:function(t,i){t&1&&Yg(i.matSelect,va,5),t&2&&Zw()},features:[Dg],decls:1,vars:1,consts:[[`matSelect`,``],[`panelClass`,`lab900-table-select-editor-panel`,1,`lab900-table-select-editor`,3,`placeholder`,`value`,`compareWith`,`multiple`,`panelWidth`,`disable-td-event`],[`panelClass`,`lab900-table-select-editor-panel`,1,`lab900-table-select-editor`,3,`openedChange`,`placeholder`,`value`,`compareWith`,`multiple`,`panelWidth`],[2,`display`,`none`],[3,`value`]],template:function(t,i){t&1&&Nw(0,a_,6,10,`mat-select`,1),t&2&&xw(i.editOptions()?0:-1)},dependencies:[va,ba,xn$4],encapsulation:2})}}return n})();var Mo=new S$1(`MAT_DATE_LOCALE`,{providedIn:`root`,factory:()=>g$2(Ns$1)});var Nn=`Method not implemented`;var ci=class{locale;_localeChanges=new ee$3;localeChanges=this._localeChanges;setTime(a,e,t,i){throw new Error(Nn)}getHours(a){throw new Error(Nn)}getMinutes(a){throw new Error(Nn)}getSeconds(a){throw new Error(Nn)}parseTime(a,e){throw new Error(Nn)}addSeconds(a,e){throw new Error(Nn)}getValidDateOrNull(a){return this.isDateInstance(a)&&this.isValid(a)?a:null}deserialize(a){return a==null||this.isDateInstance(a)&&this.isValid(a)?a:this.invalid()}setLocale(a){this.locale=a,this._localeChanges.next()}compareDate(a,e){return this.getYear(a)-this.getYear(e)||this.getMonth(a)-this.getMonth(e)||this.getDate(a)-this.getDate(e)}compareTime(a,e){return this.getHours(a)-this.getHours(e)||this.getMinutes(a)-this.getMinutes(e)||this.getSeconds(a)-this.getSeconds(e)}sameDate(a,e){if(a&&e){let t=this.isValid(a),i=this.isValid(e);return t&&i?!this.compareDate(a,e):t==i}return a==e}sameTime(a,e){if(a&&e){let t=this.isValid(a),i=this.isValid(e);return t&&i?!this.compareTime(a,e):t==i}return a==e}clampDate(a,e,t){return e&&this.compareDate(a,e)<0?e:t&&this.compareDate(a,t)>0?t:a}};var Yl=new S$1(`mat-date-formats`);var Jl={name:`angular-library-ui`,version:`22.1.1-alpha.1`,repository:`https://github.com/lab900/angular-library-ui`,homepage:`https://github.com/lab900/angular-library-ui`,author:`Lab900 <info@lab900.com> (https://lab900.com)`,license:`MIT`,scripts:{ng:`ng`,prestart:`npm run docs:api`,start:`ng serve`,prebuild:`npm run docs:api`,build:`ng build`,"build:ui":`ng build ui`,"build:ui:prod":`ng build ui --configuration production`,"docs:api":`node scripts/generate-api-docs.mjs`,"predeploy:showcase":`npm run docs:api`,"deploy:showcase":`ng deploy`,test:`jest`,"test:silent":`jest --silent`,lint:`ng lint`,prettier:`prettier --write .`,clean:`rm -rf node_modules/ && npm install`},engines:{node:`>=24`,npm:`>=12`},dependencies:{"@angular/cdk":`^22.1.1`,"@angular/common":`^22.1.1`,"@angular/compiler":`^22.1.1`,"@angular/core":`^22.1.1`,"@angular/forms":`^22.1.1`,"@angular/material":`^22.1.1`,"@angular/platform-browser":`^22.1.1`,"@angular/router":`^22.1.1`,"@ngx-translate/core":`^18.0.0`,"ngx-markdown":`^22.0.0`,prismjs:`^1.29.0`,rxjs:`~7.8.2`,tslib:`^2.0.0`,"zone.js":`~0.15.0`},devDependencies:{"@angular/build":`^22.1.3`,"@angular/cli":`^22.1.3`,"@angular/compiler-cli":`^22.1.1`,"@eslint/js":`^9.8.0`,"@types/jest":`^30.0.0`,"@types/node":`^20.11.1`,"angular-cli-ghpages":`^3.1.0`,"angular-eslint":`22.1.0`,eslint:`^9.28.0`,"eslint-config-prettier":`^9.1.0`,"eslint-plugin-prettier":`^5.2.1`,jest:`^30.4.2`,"jest-environment-jsdom":`^30.4.1`,"jest-preset-angular":`^17.0.0`,"ng-mocks":`^14.17.0`,"ng-packagr":`^22.1.1`,prettier:`^3.3.3`,typescript:`~6.0.3`,"typescript-eslint":`^8.67.0`},overrides:{"@parcel/watcher":`2.6.0`,esbuild:`0.28.2`,fsevents:`2.3.3`,lmdb:`3.5.6`,"msgpackr-extract":`3.0.4`,"unrs-resolver":`1.12.2`},allowScripts:{"@parcel/watcher@2.6.0":!0,"esbuild@0.28.2":!0,"fsevents@2.3.3":!0,"lmdb@3.5.6":!0,"msgpackr-extract@3.0.4":!0,"unrs-resolver@1.12.2":!0}};var ec=[`*`];var r_=[`content`];var s_=[[[`mat-drawer`],[`mat-sidenav`]],[[`mat-drawer-content`],[`mat-sidenav-content`]],`*`];var l_=[`mat-drawer, mat-sidenav`,`mat-drawer-content, mat-sidenav-content`,`*`];function c_(n,a){if(n&1){let e=Vw();cs$1(0,`div`,1),Ug(`click`,function(){Wd$1(e);return qd$1(Hw()._onBackdropClicked())}),Ju$1()}if(n&2)Jg(`mat-drawer-shown`,Hw()._isShowingBackdrop())}function d_(n,a){n&1&&(cs$1(0,`mat-drawer-content`),Gw(1,2),Ju$1())}var m_=new S$1(`MAT_DRAWER_DEFAULT_AUTOSIZE`,{providedIn:`root`,factory:()=>!1});var tc=new S$1(`MAT_DRAWER_CONTAINER`);var di=(()=>{class n extends rt$2{_platform=g$2(J$3);_changeDetectorRef=g$2(Ls$1);_element=g$2(it$2);_ngZone=g$2(U$4);_isInert=!1;_container=g$2(No);ngAfterContentInit(){this._container._contentMarginChanges.subscribe(()=>this._changeDetectorRef.markForCheck())}_drawerToggled(e){e.opened?this._ngZone.runOutsideAngular(()=>{e._animationEnd.pipe(Uy(50),Rn$2(1)).subscribe(()=>this._updateInert())}):this._updateInert()}_drawerModeChanged(){this._updateInert()}_updateInert(){let e=this._container._isShowingBackdrop();if(e!==this._isInert){let t=this._element.nativeElement;this._isInert=e,e?t.setAttribute(`inert`,`true`):t.removeAttribute(`inert`)}}_shouldBeHidden(){if(this._platform.isBrowser)return!1;let{start:e,end:t}=this._container;return e!=null&&e.mode!==`over`&&e.opened||t!=null&&t.mode!==`over`&&t.opened}static ɵfac=(()=>{let e;return function(i){return(e||(e=Cp$1(n)))(i||n)}})();static ɵcmp=NC({type:n,selectors:[[`mat-drawer-content`]],hostAttrs:[1,`mat-drawer-content`],hostVars:6,hostBindings:function(t,i){t&2&&(Ms$1(`margin-left`,i._container._contentMargins.left,`px`)(`margin-right`,i._container._contentMargins.right,`px`),Jg(`mat-drawer-content-hidden`,i._shouldBeHidden()))},features:[Mb$1([{provide:rt$2,useExisting:n}]),Dg],ngContentSelectors:ec,decls:1,vars:0,template:function(t,i){t&1&&(Uw(),Gw(0))},encapsulation:2})}return n})();var mi=(()=>{class n{_elementRef=g$2(it$2);_focusTrapFactory=g$2(vn$3);_focusMonitor=g$2(Ot$1);_platform=g$2(J$3);_ngZone=g$2(U$4);_renderer=g$2(gn$5);_interactivityChecker=g$2(St$2);_doc=g$2(Ne$3);_container=g$2(tc,{optional:!0});_focusTrap=null;_elementFocusedBeforeDrawerWasOpened=null;_eventCleanups;_isAttached=!1;_anchor=null;get position(){return this._position}set position(e){e=e===`end`?`end`:`start`,e!==this._position&&(this._isAttached&&this._updatePositionInParent(e),this._position=e,this.onPositionChanged.emit())}_position=`start`;get mode(){return this._mode}set mode(e){this._mode=e,this._updateFocusTrapState(),this._modeChanged.next(),this._getContent()?._drawerModeChanged()}_mode=`over`;get disableClose(){return this._disableClose}set disableClose(e){this._disableClose=C$3(e)}_disableClose=!1;get autoFocus(){return this._autoFocus??(this.mode===`side`?`dialog`:`first-tabbable`)}set autoFocus(e){(e===`true`||e===`false`||e==null)&&(e=C$3(e)),this._autoFocus=e}_autoFocus;get opened(){return this._opened()}set opened(e){this.toggle(C$3(e))}_opened=xe$3(!1);_openedVia=null;_animationStarted=new ee$3;_animationEnd=new ee$3;openedChange=new Ke$2(!0);_openedStream=this.openedChange.pipe(Ir(e=>e),Ye$2(()=>{}));openedStart=this._animationStarted.pipe(Ir(()=>this.opened),ta$1(void 0));_closedStream=this.openedChange.pipe(Ir(e=>!e),Ye$2(()=>{}));closedStart=this._animationStarted.pipe(Ir(()=>!this.opened),ta$1(void 0));_destroyed=new ee$3;onPositionChanged=new Ke$2;_content;_modeChanged=new ee$3;_injector=g$2(ne$1);_changeDetectorRef=g$2(Ls$1);constructor(){this.openedChange.pipe(ia$1(this._destroyed)).subscribe(e=>{e?(this._elementFocusedBeforeDrawerWasOpened=this._doc.activeElement,this._takeFocus()):this._isFocusWithinDrawer()&&this._restoreFocus(this._openedVia||`program`)}),this._eventCleanups=this._ngZone.runOutsideAngular(()=>{let e=this._renderer,t=this._elementRef.nativeElement;return[e.listen(t,`keydown`,i=>{i.keyCode===27&&!this.disableClose&&!_t$3(i)&&this._ngZone.run(()=>{this.close(),i.stopPropagation(),i.preventDefault()})}),e.listen(t,`transitionend`,this._handleTransitionEvent),e.listen(t,`transitioncancel`,this._handleTransitionEvent)]}),this._animationEnd.subscribe(()=>{this.openedChange.emit(this.opened)})}_focusByCssSelector(e,t){let i=this._elementRef.nativeElement.querySelector(e);i&&(this._interactivityChecker.isFocusable(i)||(i.tabIndex=-1,this._ngZone.runOutsideAngular(()=>{let o=()=>{r(),u(),i.removeAttribute(`tabindex`)},r=this._renderer.listen(i,`blur`,o),u=this._renderer.listen(i,`mousedown`,o)})),i.focus(t))}_takeFocus(){if(!this._focusTrap)return;let e=this._elementRef.nativeElement;switch(this.autoFocus){case!1:case`dialog`:return;case!0:case`first-tabbable`:hh$1(()=>{!this._focusTrap.focusInitialElement()&&typeof e.focus==`function`&&e.focus()},{injector:this._injector});break;case`first-heading`:this._focusByCssSelector(`h1, h2, h3, h4, h5, h6, [role="heading"]`);break;default:this._focusByCssSelector(this.autoFocus);break}}_restoreFocus(e){this.autoFocus!==`dialog`&&(this._elementFocusedBeforeDrawerWasOpened?this._focusMonitor.focusVia(this._elementFocusedBeforeDrawerWasOpened,e):this._elementRef.nativeElement.blur(),this._elementFocusedBeforeDrawerWasOpened=null)}_isFocusWithinDrawer(){let e=this._doc.activeElement;return!!e&&this._elementRef.nativeElement.contains(e)}ngAfterViewInit(){this._isAttached=!0,this._position===`end`&&this._updatePositionInParent(`end`),this._platform.isBrowser&&(this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement),this._updateFocusTrapState())}ngOnDestroy(){this._eventCleanups.forEach(e=>e()),this._focusTrap?.destroy(),this._anchor?.remove(),this._anchor=null,this._animationStarted.complete(),this._animationEnd.complete(),this._modeChanged.complete(),this._destroyed.next(),this._destroyed.complete()}open(e){return this.toggle(!0,e)}close(){return this.toggle(!1)}_closeViaBackdropClick(){return this._setOpen(!1,!0,`mouse`)}toggle(e=!this.opened,t){e&&t&&(this._openedVia=t);let i=this._setOpen(e,!e&&this._isFocusWithinDrawer(),this._openedVia||`program`);return e||(this._openedVia=null),i}_setOpen(e,t,i){return e===this.opened?Promise.resolve(e?`open`:`close`):(this._opened.set(e),this._getContent()?._drawerToggled(this),this._container?._transitionsEnabled?(this._setIsAnimating(!0),setTimeout(()=>this._animationStarted.next())):setTimeout(()=>{this._animationStarted.next(),this._animationEnd.next()}),this._elementRef.nativeElement.classList.toggle(`mat-drawer-opened`,e),!e&&t&&this._restoreFocus(i),this._changeDetectorRef.markForCheck(),this._updateFocusTrapState(),new Promise(o=>{this.openedChange.pipe(Rn$2(1)).subscribe(r=>o(r?`open`:`close`))}))}_getContent(){return this._container?._content||this._container?._userContent}_setIsAnimating(e){this._elementRef.nativeElement.classList.toggle(`mat-drawer-animating`,e)}_getWidth(){return this._elementRef.nativeElement.offsetWidth||0}_updateFocusTrapState(){this._focusTrap&&(this._focusTrap.enabled=this.opened&&!!this._container?._isShowingBackdrop())}_updatePositionInParent(e){if(!this._platform.isBrowser)return;let t=this._elementRef.nativeElement,i=t.parentNode;e===`end`?(this._anchor||(this._anchor=this._doc.createComment(`mat-drawer-anchor`),i.insertBefore(this._anchor,t)),i.appendChild(t)):this._anchor&&this._anchor.parentNode.insertBefore(t,this._anchor)}_handleTransitionEvent=e=>{let t=this._elementRef.nativeElement;e.target===t&&this._ngZone.run(()=>{e.type===`transitionend`&&this._setIsAnimating(!1),this._animationEnd.next(e)})};static ɵfac=function(t){return new(t||n)};static ɵcmp=NC({type:n,selectors:[[`mat-drawer`]],viewQuery:function(t,i){if(t&1&&qg(r_,5),t&2){let o;Ww(o=qw())&&(i._content=o.first)}},hostAttrs:[1,`mat-drawer`],hostVars:12,hostBindings:function(t,i){t&2&&(Rg(`align`,null)(`tabIndex`,i.mode!==`side`?`-1`:null),Ms$1(`visibility`,!i._container&&!i.opened?`hidden`:null),Jg(`mat-drawer-end`,i.position===`end`)(`mat-drawer-over`,i.mode===`over`)(`mat-drawer-push`,i.mode===`push`)(`mat-drawer-side`,i.mode===`side`))},inputs:{position:`position`,mode:`mode`,disableClose:`disableClose`,autoFocus:`autoFocus`,opened:`opened`},outputs:{openedChange:`openedChange`,_openedStream:`opened`,openedStart:`openedStart`,_closedStream:`closed`,closedStart:`closedStart`,onPositionChanged:`positionChanged`},exportAs:[`matDrawer`],ngContentSelectors:ec,decls:3,vars:0,consts:[[`content`,``],[`cdkScrollable`,``,1,`mat-drawer-inner-container`]],template:function(t,i){t&1&&(Uw(),cs$1(0,`div`,1,0),Gw(2),Ju$1())},dependencies:[rt$2],encapsulation:2})}return n})();var No=(()=>{class n{_dir=g$2(b$2,{optional:!0});_element=g$2(it$2);_ngZone=g$2(U$4);_changeDetectorRef=g$2(Ls$1);_animationDisabled=ai$3();_transitionsEnabled=!1;_allDrawers;_drawers=new Ji$2;_content;_userContent;get start(){return this._start}get end(){return this._end}get autosize(){return this._autosize}set autosize(e){this._autosize=C$3(e)}_autosize=g$2(m_);get hasBackdrop(){return this._drawerHasBackdrop(this._start)||this._drawerHasBackdrop(this._end)}set hasBackdrop(e){this._backdropOverride=e==null?null:C$3(e)}_backdropOverride=null;backdropClick=new Ke$2;_start=null;_end=null;_left=null;_right=null;_destroyed=new ee$3;_doCheckSubject=new ee$3;_contentMargins={left:null,right:null};_contentMarginChanges=new ee$3;get scrollable(){return this._userContent||this._content}_injector=g$2(ne$1);constructor(){let e=g$2(J$3),t=g$2(st$4);this._dir?.change.pipe(ia$1(this._destroyed)).subscribe(()=>{this._validateDrawers(),this.updateContentMargins()}),t.change().pipe(ia$1(this._destroyed)).subscribe(()=>this.updateContentMargins()),!this._animationDisabled&&e.isBrowser&&this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._element.nativeElement.classList.add(`mat-drawer-transition`),this._transitionsEnabled=!0},200)})}ngAfterContentInit(){this._allDrawers.changes.pipe(Ky(this._allDrawers),ia$1(this._destroyed)).subscribe(e=>{this._drawers.reset(e.filter(t=>!t._container||t._container===this)),this._drawers.notifyOnChanges()}),this._drawers.changes.pipe(Ky(null)).subscribe(()=>{this._validateDrawers(),this._drawers.forEach(e=>{this._watchDrawerToggle(e),this._watchDrawerPosition(e),this._watchDrawerMode(e)}),(!this._drawers.length||this._isDrawerOpen(this._start)||this._isDrawerOpen(this._end))&&this.updateContentMargins(),this._changeDetectorRef.markForCheck()}),this._ngZone.runOutsideAngular(()=>{this._doCheckSubject.pipe($y(10),ia$1(this._destroyed)).subscribe(()=>this.updateContentMargins())})}ngOnDestroy(){this._contentMarginChanges.complete(),this._doCheckSubject.complete(),this._drawers.destroy(),this._destroyed.next(),this._destroyed.complete()}open(){this._drawers.forEach(e=>e.open())}close(){this._drawers.forEach(e=>e.close())}updateContentMargins(){let e=0,t=0;if(this._left&&this._left.opened){if(this._left.mode==`side`)e+=this._left._getWidth();else if(this._left.mode==`push`){let i=this._left._getWidth();e+=i,t-=i}}if(this._right&&this._right.opened){if(this._right.mode==`side`)t+=this._right._getWidth();else if(this._right.mode==`push`){let i=this._right._getWidth();t+=i,e-=i}}e=e||null,t=t||null,(e!==this._contentMargins.left||t!==this._contentMargins.right)&&(this._contentMargins={left:e,right:t},this._ngZone.run(()=>this._contentMarginChanges.next(this._contentMargins)))}ngDoCheck(){this._autosize&&this._isPushed()&&this._ngZone.runOutsideAngular(()=>this._doCheckSubject.next())}_watchDrawerToggle(e){e._animationStarted.pipe(ia$1(this._drawers.changes)).subscribe(()=>{this.updateContentMargins(),this._changeDetectorRef.markForCheck()}),e.mode!==`side`&&e.openedChange.pipe(ia$1(this._drawers.changes)).subscribe(()=>this._setContainerClass(e.opened))}_watchDrawerPosition(e){e.onPositionChanged.pipe(ia$1(this._drawers.changes)).subscribe(()=>{hh$1({read:()=>this._validateDrawers()},{injector:this._injector})})}_watchDrawerMode(e){e._modeChanged.pipe(ia$1(Vy(this._drawers.changes,this._destroyed))).subscribe(()=>{this.updateContentMargins(),this._changeDetectorRef.markForCheck()})}_setContainerClass(e){let t=this._element.nativeElement.classList,i=`mat-drawer-container-has-open`;e?t.add(i):t.remove(i)}_validateDrawers(){this._start=this._end=null,this._drawers.forEach(e=>{e.position==`end`?(this._end,this._end=e):(this._start,this._start=e)}),this._right=this._left=null,this._dir&&this._dir.value===`rtl`?(this._left=this._end,this._right=this._start):(this._left=this._start,this._right=this._end)}_isPushed(){return this._isDrawerOpen(this._start)&&this._start.mode!=`over`||this._isDrawerOpen(this._end)&&this._end.mode!=`over`}_onBackdropClicked(){this.backdropClick.emit(),this._closeModalDrawersViaBackdrop()}_closeModalDrawersViaBackdrop(){[this._start,this._end].filter(e=>e&&!e.disableClose&&this._drawerHasBackdrop(e)).forEach(e=>e._closeViaBackdropClick())}_isShowingBackdrop(){return this._isDrawerOpen(this._start)&&this._drawerHasBackdrop(this._start)||this._isDrawerOpen(this._end)&&this._drawerHasBackdrop(this._end)}_isDrawerOpen(e){return e!=null&&e.opened}_drawerHasBackdrop(e){return this._backdropOverride==null?!!e&&e.mode!==`side`:this._backdropOverride}static ɵfac=function(t){return new(t||n)};static ɵcmp=NC({type:n,selectors:[[`mat-drawer-container`]],contentQueries:function(t,i,o){if(t&1&&Wg(o,di,5)(o,mi,5),t&2){let r;Ww(r=qw())&&(i._content=r.first),Ww(r=qw())&&(i._allDrawers=r)}},viewQuery:function(t,i){if(t&1&&qg(di,5),t&2){let o;Ww(o=qw())&&(i._userContent=o.first)}},hostAttrs:[1,`mat-drawer-container`],hostVars:2,hostBindings:function(t,i){t&2&&Jg(`mat-drawer-container-explicit-backdrop`,i._backdropOverride)},inputs:{autosize:`autosize`,hasBackdrop:`hasBackdrop`},outputs:{backdropClick:`backdropClick`},exportAs:[`matDrawerContainer`],features:[Mb$1([{provide:tc,useExisting:n}])],ngContentSelectors:l_,decls:4,vars:2,consts:[[1,`mat-drawer-backdrop`,3,`mat-drawer-shown`],[1,`mat-drawer-backdrop`,3,`click`]],template:function(t,i){t&1&&(Uw(s_),Nw(0,c_,1,2,`div`,0),Gw(1),Gw(2,1),Nw(3,d_,2,0,`mat-drawer-content`)),t&2&&(xw(i.hasBackdrop?0:-1),lI(3),xw(i._content?-1:3))},dependencies:[di],styles:[`.mat-drawer-container {
  position: relative;
  z-index: 1;
  color: var(--%NS%mat-sidenav-content-text-color, var(--%NS%mat-sys-on-background));
  background-color: var(--%NS%mat-sidenav-content-background-color, var(--%NS%mat-sys-background));
  box-sizing: border-box;
  display: block;
  overflow: hidden;
}
.mat-drawer-container[fullscreen] {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
}
.mat-drawer-container[fullscreen].mat-drawer-container-has-open {
  overflow: hidden;
}
.mat-drawer-container.mat-drawer-container-explicit-backdrop .mat-drawer-side {
  z-index: 3;
}
.mat-drawer-container.ng-animate-disabled .mat-drawer-backdrop,
.mat-drawer-container.ng-animate-disabled .mat-drawer-content, .ng-animate-disabled .mat-drawer-container .mat-drawer-backdrop,
.ng-animate-disabled .mat-drawer-container .mat-drawer-content {
  transition: none;
}

.mat-drawer-backdrop {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  display: block;
  z-index: 3;
  visibility: hidden;
}
.mat-drawer-backdrop.mat-drawer-shown {
  visibility: visible;
  background-color: var(--%NS%mat-sidenav-scrim-color, color-mix(in srgb, var(--%NS%mat-sys-neutral-variant20) 40%, transparent));
}
.mat-drawer-transition .mat-drawer-backdrop {
  transition-duration: 400ms;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-property: background-color, visibility;
}
@media (forced-colors: active) {
  .mat-drawer-backdrop {
    opacity: 0.5;
  }
}

.mat-drawer-content {
  position: relative;
  z-index: 1;
  display: block;
  height: 100%;
  overflow: auto;
}
.mat-drawer-content.mat-drawer-content-hidden {
  opacity: 0;
}
.mat-drawer-transition .mat-drawer-content {
  transition-duration: 400ms;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-property: transform, margin-left, margin-right;
}

.mat-drawer {
  position: relative;
  z-index: 4;
  color: var(--%NS%mat-sidenav-container-text-color, var(--%NS%mat-sys-on-surface-variant));
  box-shadow: var(--%NS%mat-sidenav-container-elevation-shadow, none);
  background-color: var(--%NS%mat-sidenav-container-background-color, var(--%NS%mat-sys-surface));
  border-top-right-radius: var(--%NS%mat-sidenav-container-shape, var(--%NS%mat-sys-corner-large));
  border-bottom-right-radius: var(--%NS%mat-sidenav-container-shape, var(--%NS%mat-sys-corner-large));
  width: var(--%NS%mat-sidenav-container-width, 360px);
  display: block;
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: 3;
  outline: 0;
  box-sizing: border-box;
  overflow-y: auto;
  transform: translate3d(-100%, 0, 0);
}
@media (forced-colors: active) {
  .mat-drawer, [dir=rtl] .mat-drawer.mat-drawer-end {
    border-right: solid 1px currentColor;
  }
}
@media (forced-colors: active) {
  [dir=rtl] .mat-drawer, .mat-drawer.mat-drawer-end {
    border-left: solid 1px currentColor;
    border-right: none;
  }
}
.mat-drawer.mat-drawer-side {
  z-index: 2;
}
.mat-drawer.mat-drawer-end {
  right: 0;
  transform: translate3d(100%, 0, 0);
  border-top-left-radius: var(--%NS%mat-sidenav-container-shape, var(--%NS%mat-sys-corner-large));
  border-bottom-left-radius: var(--%NS%mat-sidenav-container-shape, var(--%NS%mat-sys-corner-large));
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
[dir=rtl] .mat-drawer {
  border-top-left-radius: var(--%NS%mat-sidenav-container-shape, var(--%NS%mat-sys-corner-large));
  border-bottom-left-radius: var(--%NS%mat-sidenav-container-shape, var(--%NS%mat-sys-corner-large));
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  transform: translate3d(100%, 0, 0);
}
[dir=rtl] .mat-drawer.mat-drawer-end {
  border-top-right-radius: var(--%NS%mat-sidenav-container-shape, var(--%NS%mat-sys-corner-large));
  border-bottom-right-radius: var(--%NS%mat-sidenav-container-shape, var(--%NS%mat-sys-corner-large));
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  left: 0;
  right: auto;
  transform: translate3d(-100%, 0, 0);
}
.mat-drawer-transition .mat-drawer {
  transition: transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
}
.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating) {
  visibility: hidden;
  box-shadow: none;
}
.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating) .mat-drawer-inner-container {
  display: none;
}
.mat-drawer.mat-drawer-opened.mat-drawer-opened {
  transform: none;
}

.mat-drawer-side {
  box-shadow: none;
  border-right-color: var(--%NS%mat-sidenav-container-divider-color, transparent);
  border-right-width: 1px;
  border-right-style: solid;
}
.mat-drawer-side.mat-drawer-end {
  border-left-color: var(--%NS%mat-sidenav-container-divider-color, transparent);
  border-left-width: 1px;
  border-left-style: solid;
  border-right: none;
}
[dir=rtl] .mat-drawer-side {
  border-left-color: var(--%NS%mat-sidenav-container-divider-color, transparent);
  border-left-width: 1px;
  border-left-style: solid;
  border-right: none;
}
[dir=rtl] .mat-drawer-side.mat-drawer-end {
  border-right-color: var(--%NS%mat-sidenav-container-divider-color, transparent);
  border-right-width: 1px;
  border-right-style: solid;
  border-left: none;
}

.mat-drawer-inner-container {
  width: 100%;
  height: 100%;
  overflow: auto;
}

.mat-sidenav-fixed {
  position: fixed;
}
`],encapsulation:2})}return n})();var xa={title:`ui.title`,description:`ui.description`,icon:`widgets`,version:{name:`@lab900/ui`,version:`22.1.1-alpha.1`,author:`Lab900 <info@lab900.com> (https://lab900.com)`,license:`MIT`,peerDependencies:{"@angular/cdk":`>=22.0.0`,"@angular/common":`>=22.0.0`,"@angular/core":`>=22.0.0`,"@angular/material":`>=22.0.0`,"@angular/platform-browser":`>=22.0.0`,"@angular/router":`>=22.0.0`,"@ngx-translate/core":`>=18.0.0`,rxjs:`>=7.4.0`},repository:{type:`git`,url:`git://github.com/lab900/angular-library-ui.git`},dependencies:{tslib:`^2.0.0`}}.version};function Mt(n,a){n&&a&&n.close()}var ya=(n,a)=>[{label:xa?.title,items:[{label:`label.guides`,children:[{label:`label.getting-started`,route:`getting-started`,navigationFinished:()=>Mt(n,a)},{label:`label.ai-agents`,route:`ai-agents`,navigationFinished:()=>Mt(n,a)},{label:`label.changelog`,route:`changelog`,navigationFinished:()=>Mt(n,a)}]},{label:`label.components`,children:[{label:`Buttons`,route:`buttons`,navigationFinished:()=>Mt(n,a)},{label:`Nav List`,route:`nav-list`,navigationFinished:()=>Mt(n,a)},{label:`Alerts`,route:`alerts`,navigationFinished:()=>Mt(n,a)},{label:`Table`,route:`table`,navigationFinished:()=>Mt(n,a)},{label:`Page header`,route:`page-header`,navigationFinished:()=>Mt(n,a)},{label:`Merger`,route:`merger`,navigationFinished:()=>Mt(n,a)}]}]}];var u_=[`*`,[[`mat-toolbar-row`]]];var h_=[`*`,`mat-toolbar-row`];var f_=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵdir=En$3({type:n,selectors:[[`mat-toolbar-row`]],hostAttrs:[1,`mat-toolbar-row`],exportAs:[`matToolbarRow`]})}return n})();var ic=(()=>{class n{_elementRef=g$2(it$2);_platform=g$2(J$3);_document=g$2(Ne$3);color;_toolbarRows;ngAfterViewInit(){this._platform.isBrowser&&(this._checkToolbarMixedModes(),this._toolbarRows.changes.subscribe(()=>this._checkToolbarMixedModes()))}_checkToolbarMixedModes(){this._toolbarRows.length}static ɵfac=function(t){return new(t||n)};static ɵcmp=NC({type:n,selectors:[[`mat-toolbar`]],contentQueries:function(t,i,o){if(t&1&&Wg(o,f_,5),t&2){let r;Ww(r=qw())&&(i._toolbarRows=r)}},hostAttrs:[1,`mat-toolbar`],hostVars:6,hostBindings:function(t,i){t&2&&(sb$1(i.color?`mat-`+i.color:``),Jg(`mat-toolbar-multiple-rows`,i._toolbarRows.length>0)(`mat-toolbar-single-row`,i._toolbarRows.length===0))},inputs:{color:`color`},exportAs:[`matToolbar`],ngContentSelectors:h_,decls:2,vars:0,template:function(t,i){t&1&&(Uw(u_),Gw(0),Gw(1,1))},styles:[`.mat-toolbar {
  background: var(--%NS%mat-toolbar-container-background-color, var(--%NS%mat-sys-surface));
  color: var(--%NS%mat-toolbar-container-text-color, var(--%NS%mat-sys-on-surface));
}
.mat-toolbar, .mat-toolbar h1, .mat-toolbar h2, .mat-toolbar h3, .mat-toolbar h4, .mat-toolbar h5, .mat-toolbar h6 {
  font-family: var(--%NS%mat-toolbar-title-text-font, var(--%NS%mat-sys-title-large-font));
  font-size: var(--%NS%mat-toolbar-title-text-size, var(--%NS%mat-sys-title-large-size));
  line-height: var(--%NS%mat-toolbar-title-text-line-height, var(--%NS%mat-sys-title-large-line-height));
  font-weight: var(--%NS%mat-toolbar-title-text-weight, var(--%NS%mat-sys-title-large-weight));
  letter-spacing: var(--%NS%mat-toolbar-title-text-tracking, var(--%NS%mat-sys-title-large-tracking));
  margin: 0;
}
@media (forced-colors: active) {
  .mat-toolbar {
    outline: solid 1px;
  }
}
.mat-toolbar .mat-form-field-underline,
.mat-toolbar .mat-form-field-ripple,
.mat-toolbar .mat-focused .mat-form-field-ripple {
  background-color: currentColor;
}
.mat-toolbar .mat-form-field-label,
.mat-toolbar .mat-focused .mat-form-field-label,
.mat-toolbar .mat-select-value,
.mat-toolbar .mat-select-arrow,
.mat-toolbar .mat-form-field.mat-focused .mat-select-arrow {
  color: inherit;
}
.mat-toolbar .mat-input-element {
  caret-color: currentColor;
}
.mat-toolbar .mat-mdc-button-base.mat-mdc-button-base.mat-unthemed {
  --%NS%mat-button-text-label-text-color: var(--%NS%mat-toolbar-container-text-color, var(--%NS%mat-sys-on-surface));
  --%NS%mat-button-outlined-label-text-color: var(--%NS%mat-toolbar-container-text-color, var(--%NS%mat-sys-on-surface));
}

.mat-toolbar-row, .mat-toolbar-single-row {
  display: flex;
  box-sizing: border-box;
  padding: 0 16px;
  width: 100%;
  flex-direction: row;
  align-items: center;
  white-space: nowrap;
  height: var(--%NS%mat-toolbar-standard-height, 64px);
}
@media (max-width: 599px) {
  .mat-toolbar-row, .mat-toolbar-single-row {
    height: var(--%NS%mat-toolbar-mobile-height, 56px);
  }
}

.mat-toolbar-multiple-rows {
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  width: 100%;
  min-height: var(--%NS%mat-toolbar-standard-height, 64px);
}
@media (max-width: 599px) {
  .mat-toolbar-multiple-rows {
    min-height: var(--%NS%mat-toolbar-mobile-height, 56px);
  }
}
`],encapsulation:2})}return n})();var __=()=>[`/`];var ac=(()=>{class n{constructor(){this.drawer=Qj(mi),this.gitUrl=Jl.repository,this.navItemsGroups=qe$3(()=>{let e=this.drawer();return e?ya(e,this.sideNavMode()===`over`):[]}),this.sideNavMode=sH(g$2(Jt$3).observe(`(max-width: 959px)`).pipe(Ye$2(({matches:e})=>e?`over`:`side`))),this.sideNavOpened=qe$3(()=>this.sideNavMode()===`side`),g$2(Kt).addSvgIcon(`github`,g$2(hn$5).bypassSecurityTrustResourceUrl(`assets/images/github-logo.svg`))}static{this.ɵfac=function(t){return new(t||n)}}static{this.ɵcmp=NC({type:n,selectors:[[`lab900-root`]],viewQuery:function(t,i){t&1&&Yg(i.drawer,mi,5),t&2&&Zw()},decls:25,vars:17,consts:[[`drawer`,``],[1,`lab900-showcase`],[1,`lab900-showcase__header`],[1,`menu-button`],[`mat-icon-button`,``,3,`click`],[1,`lab900-showcase__header__logo`,3,`routerLink`],[`width`,`44`,`height`,`38`,3,`ngSrc`,`priority`,`alt`],[`target`,`_blank`,`mat-icon-button`,``,2,`display`,`block`,3,`href`],[`svgIcon`,`github`],[1,`lab900-showcase__content`],[1,`example-container`],[3,`mode`,`opened`],[3,`navItemGroups`,`showLevelArrows`]],template:function(t,i){if(t&1){let o=Vw();cs$1(0,`div`,1)(1,`mat-toolbar`,2)(2,`div`)(3,`div`)(4,`div`,3)(5,`button`,4),Ug(`click`,function(){Wd$1(o);return qd$1(Yw(20)?.toggle())}),cs$1(6,`mat-icon`),yb$1(7,`menu`),Ju$1()()(),cs$1(8,`a`,5),kg(9,`img`,6),kb$1(10,`translate`),cs$1(11,`h1`),yb$1(12),kb$1(13,`translate`),Ju$1()()(),cs$1(14,`div`)(15,`a`,7),kg(16,`mat-icon`,8),Ju$1()()()(),cs$1(17,`div`,9)(18,`mat-drawer-container`,10)(19,`mat-drawer`,11,0),kg(21,`lab900-nav-list`,12),Ju$1(),cs$1(22,`mat-drawer-content`)(23,`main`),kg(24,`router-outlet`),Ju$1()()()()()}t&2&&(lI(8),Og(`routerLink`,Nb$1(16,__)),lI(),Og(`alt`,wb$1(Lb$1(10,12,`app.title`)))(`ngSrc`,`assets/images/logo-dark-white.svg`)(`priority`,!0),lI(3),im$1(Lb$1(13,14,`app.title`)),lI(3),Og(`href`,wb$1(i.gitUrl),Kp$1),lI(4),Og(`mode`,i.sideNavMode()??`over`)(`opened`,i.sideNavOpened()),lI(2),Og(`navItemGroups`,i.navItemsGroups())(`showLevelArrows`,!0))},dependencies:[Mt$2,zB,cr,Qi,ic,Fe,ln,No,mi,di,xn$4],styles:[`.lab900-showcase__header[_ngcontent-%COMP%]{display:flex;align-items:center;z-index:10;position:relative;padding-left:0;box-shadow:0 4px 4px #0000001a}.lab900-showcase__header[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between}.lab900-showcase__header[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:first-child{display:flex}.lab900-showcase__header[_ngcontent-%COMP%]   .menu-button[_ngcontent-%COMP%]{height:70px;width:70px;display:flex;align-items:center;justify-content:center;margin-right:8px}@media screen and (max-width:599px){.lab900-showcase__header[_ngcontent-%COMP%]   .menu-button[_ngcontent-%COMP%]{height:56px;width:56px}}.lab900-showcase__header[_ngcontent-%COMP%]   .mat-mdc-icon-button[_ngcontent-%COMP%]{color:#343c57;transition:color .3s cubic-bezier(.4,0,.2,1)}.lab900-showcase__header[_ngcontent-%COMP%]   .mat-mdc-icon-button[_ngcontent-%COMP%]:hover{color:#ff5126}.lab900-showcase__header[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:100%}.lab900-showcase__header__logo[_ngcontent-%COMP%]{display:flex;align-items:center;text-decoration:none;color:#343c57}.lab900-showcase__header__logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:38px;margin-right:15px;display:block}.lab900-showcase__header__logo[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{margin-bottom:0;font-size:1.25rem;font-weight:600}@media screen and (max-width:599px){.lab900-showcase__header__logo[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{display:none}}`],changeDetection:1})}}return n})();var Ca=class{constructor(a,e=`/assets/i18n/`,t=`.json`){this.http=a,this.prefix=e,this.suffix=t}getTranslation(a){return this.http.get(`${this.prefix}${a}${this.suffix}`).pipe(Ye$2(e=>q$2({},e)))}};var b_=/^\d{4}-\d{2}-\d{2}(?:T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|(?:(?:\+|-)\d{2}:\d{2}))?)?$/;var g_=/^(\d?\d)[:.](\d?\d)(?:[:.](\d?\d))?\s*(AM|PM)?$/i;function Io(n,a){let e=Array(n);for(let t=0;t<n;t++)e[t]=a(t);return e}var v_=(()=>{class n extends ci{_matDateLocale=g$2(Mo,{optional:!0});constructor(){super();let e=g$2(Mo,{optional:!0});e!==void 0&&(this._matDateLocale=e),super.setLocale(this._matDateLocale)}getYear(e){return e.getFullYear()}getMonth(e){return e.getMonth()}getDate(e){return e.getDate()}getDayOfWeek(e){return e.getDay()}getMonthNames(e){let t=new Intl.DateTimeFormat(this.locale,{month:e,timeZone:`utc`});return Io(12,i=>this._format(t,new Date(2017,i,1)))}getDateNames(){let e=new Intl.DateTimeFormat(this.locale,{day:`numeric`,timeZone:`utc`});return Io(31,t=>this._format(e,new Date(2017,0,t+1)))}getDayOfWeekNames(e){let t=new Intl.DateTimeFormat(this.locale,{weekday:e,timeZone:`utc`});return Io(7,i=>this._format(t,new Date(2017,0,i+1)))}getYearName(e){let t=new Intl.DateTimeFormat(this.locale,{year:`numeric`,timeZone:`utc`});return this._format(t,e)}getFirstDayOfWeek(){if(typeof Intl<`u`&&Intl.Locale){let e=new Intl.Locale(this.locale),t=(e.getWeekInfo?.()||e.weekInfo)?.firstDay??0;return t===7?0:t}return 0}getNumDaysInMonth(e){return this.getDate(this._createDateWithOverflow(this.getYear(e),this.getMonth(e)+1,0))}clone(e){return new Date(e.getTime())}createDate(e,t,i){let o=this._createDateWithOverflow(e,t,i);return o.getMonth(),o}today(){return new Date}parse(e,t){return typeof e==`number`?new Date(e):e?new Date(Date.parse(e)):null}format(e,t){if(!this.isValid(e))throw Error(`NativeDateAdapter: Cannot format invalid date.`);let i=new Intl.DateTimeFormat(this.locale,Z$3(q$2({},t),{timeZone:`utc`}));return this._format(i,e)}addCalendarYears(e,t){return this.addCalendarMonths(e,t*12)}addCalendarMonths(e,t){let i=this._createDateWithOverflow(this.getYear(e),this.getMonth(e)+t,this.getDate(e));return this.getMonth(i)!=((this.getMonth(e)+t)%12+12)%12&&(i=this._createDateWithOverflow(this.getYear(i),this.getMonth(i),0)),i}addCalendarDays(e,t){return this._createDateWithOverflow(this.getYear(e),this.getMonth(e),this.getDate(e)+t)}toIso8601(e){return[e.getUTCFullYear(),this._2digit(e.getUTCMonth()+1),this._2digit(e.getUTCDate())].join(`-`)}deserialize(e){if(typeof e==`string`){if(!e)return null;if(b_.test(e)){let t=new Date(e);if(this.isValid(t))return t}}return super.deserialize(e)}isDateInstance(e){return e instanceof Date}isValid(e){return!isNaN(e.getTime())}invalid(){return new Date(NaN)}setTime(e,t,i,o){let r=this.clone(e);return r.setHours(t,i,o,0),r}getHours(e){return e.getHours()}getMinutes(e){return e.getMinutes()}getSeconds(e){return e.getSeconds()}parseTime(e,t){if(typeof e!=`string`)return e instanceof Date?new Date(e.getTime()):null;let i=e.trim();if(i.length===0)return null;let o=this._parseTimeString(i);if(o===null){let r=i.replace(/[^0-9:(AM|PM)]/gi,``).trim();r.length>0&&(o=this._parseTimeString(r))}return o||this.invalid()}addSeconds(e,t){return new Date(e.getTime()+t*1e3)}_createDateWithOverflow(e,t,i){let o=new Date;return o.setFullYear(e,t,i),o.setHours(0,0,0,0),o}_2digit(e){return(`00`+e).slice(-2)}_format(e,t){let i=new Date;return i.setUTCFullYear(t.getFullYear(),t.getMonth(),t.getDate()),i.setUTCHours(t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()),e.format(i)}_parseTimeString(e){let t=e.toUpperCase().match(g_);if(t){let i=parseInt(t[1]),o=parseInt(t[2]),r=t[3]==null?void 0:parseInt(t[3]),u=t[4];if(i===12?i=u===`AM`?0:i:u===`PM`&&(i+=12),Eo(i,0,23)&&Eo(o,0,59)&&(r==null||Eo(r,0,59)))return this.setTime(this.today(),i,o,r||0)}return null}static ɵfac=function(t){return new(t||n)};static ɵprov=Oe$3({token:n,factory:n.ɵfac,autoProvided:!1})}return n})();function Eo(n,a,e){return!isNaN(n)&&n>=a&&n<=e}var x_={parse:{dateInput:null,timeInput:null},display:{dateInput:{year:`numeric`,month:`numeric`,day:`numeric`},timeInput:{hour:`numeric`,minute:`numeric`},monthYearLabel:{year:`numeric`,month:`short`},dateA11yLabel:{year:`numeric`,month:`long`,day:`numeric`},monthYearA11yLabel:{year:`numeric`,month:`long`},timeOptionLabel:{hour:`numeric`,minute:`numeric`}}};function oc(n=x_){return[{provide:ci,useClass:v_},{provide:Yl,useValue:n}]}var y_=[`*`];var C_=[[[``,`mat-card-avatar`,``],[``,`matCardAvatar`,``]],[[`mat-card-title`],[`mat-card-subtitle`],[``,`mat-card-title`,``],[``,`mat-card-subtitle`,``],[``,`matCardTitle`,``],[``,`matCardSubtitle`,``]],`*`];var w_=[`[mat-card-avatar], [matCardAvatar]`,`mat-card-title, mat-card-subtitle,
      [mat-card-title], [mat-card-subtitle],
      [matCardTitle], [matCardSubtitle]`,`*`];var k_=new S$1(`MAT_CARD_CONFIG`);var rc=(()=>{class n{appearance;constructor(){let e=g$2(k_,{optional:!0});this.appearance=e?.appearance||`raised`}static ɵfac=function(t){return new(t||n)};static ɵcmp=NC({type:n,selectors:[[`mat-card`]],hostAttrs:[1,`mat-mdc-card`,`mdc-card`],hostVars:8,hostBindings:function(t,i){t&2&&Jg(`mat-mdc-card-outlined`,i.appearance===`outlined`)(`mdc-card--outlined`,i.appearance===`outlined`)(`mat-mdc-card-filled`,i.appearance===`filled`)(`mdc-card--filled`,i.appearance===`filled`)},inputs:{appearance:`appearance`},exportAs:[`matCard`],ngContentSelectors:y_,decls:1,vars:0,template:function(t,i){t&1&&(Uw(),Gw(0))},styles:[`.mat-mdc-card {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  position: relative;
  border-style: solid;
  border-width: 0;
  background-color: var(--%NS%mat-card-elevated-container-color, var(--%NS%mat-sys-surface-container-low));
  border-color: var(--%NS%mat-card-elevated-container-color, var(--%NS%mat-sys-surface-container-low));
  border-radius: var(--%NS%mat-card-elevated-container-shape, var(--%NS%mat-sys-corner-medium));
  box-shadow: var(--%NS%mat-card-elevated-container-elevation, var(--%NS%mat-sys-level1));
}
.mat-mdc-card::after {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: solid 1px transparent;
  content: "";
  display: block;
  pointer-events: none;
  box-sizing: border-box;
  border-radius: var(--%NS%mat-card-elevated-container-shape, var(--%NS%mat-sys-corner-medium));
}

.mat-mdc-card-outlined {
  background-color: var(--%NS%mat-card-outlined-container-color, var(--%NS%mat-sys-surface));
  border-radius: var(--%NS%mat-card-outlined-container-shape, var(--%NS%mat-sys-corner-medium));
  border-width: var(--%NS%mat-card-outlined-outline-width, 1px);
  border-color: var(--%NS%mat-card-outlined-outline-color, var(--%NS%mat-sys-outline-variant));
  box-shadow: var(--%NS%mat-card-outlined-container-elevation, var(--%NS%mat-sys-level0));
}
.mat-mdc-card-outlined::after {
  border: none;
}

.mat-mdc-card-filled {
  background-color: var(--%NS%mat-card-filled-container-color, var(--%NS%mat-sys-surface-container-highest));
  border-radius: var(--%NS%mat-card-filled-container-shape, var(--%NS%mat-sys-corner-medium));
  box-shadow: var(--%NS%mat-card-filled-container-elevation, var(--%NS%mat-sys-level0));
}

.mdc-card__media {
  position: relative;
  box-sizing: border-box;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
.mdc-card__media::before {
  display: block;
  content: "";
}
.mdc-card__media:first-child {
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
}
.mdc-card__media:last-child {
  border-bottom-left-radius: inherit;
  border-bottom-right-radius: inherit;
}

.mat-mdc-card-actions {
  display: flex;
  flex-direction: row;
  align-items: center;
  box-sizing: border-box;
  min-height: 52px;
  padding: 8px;
}

.mat-mdc-card-title {
  font-family: var(--%NS%mat-card-title-text-font, var(--%NS%mat-sys-title-large-font));
  line-height: var(--%NS%mat-card-title-text-line-height, var(--%NS%mat-sys-title-large-line-height));
  font-size: var(--%NS%mat-card-title-text-size, var(--%NS%mat-sys-title-large-size));
  letter-spacing: var(--%NS%mat-card-title-text-tracking, var(--%NS%mat-sys-title-large-tracking));
  font-weight: var(--%NS%mat-card-title-text-weight, var(--%NS%mat-sys-title-large-weight));
}

.mat-mdc-card-subtitle {
  color: var(--%NS%mat-card-subtitle-text-color, var(--%NS%mat-sys-on-surface));
  font-family: var(--%NS%mat-card-subtitle-text-font, var(--%NS%mat-sys-title-medium-font));
  line-height: var(--%NS%mat-card-subtitle-text-line-height, var(--%NS%mat-sys-title-medium-line-height));
  font-size: var(--%NS%mat-card-subtitle-text-size, var(--%NS%mat-sys-title-medium-size));
  letter-spacing: var(--%NS%mat-card-subtitle-text-tracking, var(--%NS%mat-sys-title-medium-tracking));
  font-weight: var(--%NS%mat-card-subtitle-text-weight, var(--%NS%mat-sys-title-medium-weight));
}

.mat-mdc-card-title,
.mat-mdc-card-subtitle {
  display: block;
  margin: 0;
}
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-title,
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-subtitle {
  padding: 16px 16px 0;
}

.mat-mdc-card-header {
  display: flex;
  padding: 16px 16px 0;
}

.mat-mdc-card-content {
  display: block;
  padding: 0 16px;
}
.mat-mdc-card-content:first-child {
  padding-top: 16px;
}
.mat-mdc-card-content:last-child {
  padding-bottom: 16px;
}

.mat-mdc-card-title-group {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.mat-mdc-card-avatar {
  height: 40px;
  width: 40px;
  border-radius: 50%;
  flex-shrink: 0;
  margin-bottom: 16px;
  object-fit: cover;
}
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-subtitle,
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-title {
  line-height: normal;
}

.mat-mdc-card-sm-image {
  width: 80px;
  height: 80px;
}

.mat-mdc-card-md-image {
  width: 112px;
  height: 112px;
}

.mat-mdc-card-lg-image {
  width: 152px;
  height: 152px;
}

.mat-mdc-card-xl-image {
  width: 240px;
  height: 240px;
}

.mat-mdc-card-subtitle ~ .mat-mdc-card-title,
.mat-mdc-card-title ~ .mat-mdc-card-subtitle,
.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-title,
.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-subtitle,
.mat-mdc-card-title-group .mat-mdc-card-title,
.mat-mdc-card-title-group .mat-mdc-card-subtitle {
  padding-top: 0;
}

.mat-mdc-card-content > :last-child:not(.mat-mdc-card-footer) {
  margin-bottom: 0;
}

.mat-mdc-card-actions-align-end {
  justify-content: flex-end;
}
`],encapsulation:2})}return n})();var sc=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵdir=En$3({type:n,selectors:[[`mat-card-title`],[``,`mat-card-title`,``],[``,`matCardTitle`,``]],hostAttrs:[1,`mat-mdc-card-title`]})}return n})();var lc=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵdir=En$3({type:n,selectors:[[`mat-card-content`]],hostAttrs:[1,`mat-mdc-card-content`]})}return n})();var cc=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵdir=En$3({type:n,selectors:[[`mat-card-subtitle`],[``,`mat-card-subtitle`,``],[``,`matCardSubtitle`,``]],hostAttrs:[1,`mat-mdc-card-subtitle`]})}return n})();var dc=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵcmp=NC({type:n,selectors:[[`mat-card-header`]],hostAttrs:[1,`mat-mdc-card-header`],ngContentSelectors:w_,decls:4,vars:0,consts:[[1,`mat-mdc-card-header-text`]],template:function(t,i){t&1&&(Uw(C_),Gw(0),Xu$1(1,`div`,0),Gw(2,1),el$1(),Gw(3,2))},encapsulation:2})}return n})();var S_=[`exampleComponent`];var D_=[`*`];function T_(n,a){if(n&1&&(cs$1(0,`mat-card-subtitle`),yb$1(1),Ju$1()),n&2){let e=Hw();lI(),im$1(e.exampleDescription())}}function M_(n,a){if(n&1&&(cs$1(0,`mat-tab`,7),kg(1,`markdown`,8),kb$1(2,`lowercase`),Ju$1()),n&2){let e=a.$implicit,t=Hw(2);Og(`label`,e),lI(),Og(`src`,t.examplePath()+Lb$1(2,3,e))(`start`,0)}}function N_(n,a){if(n&1&&(cs$1(0,`div`,4)(1,`mat-tab-group`,6),Ow(2,M_,3,5,`mat-tab`,7,Rw),Ju$1()()),n&2){let e=Hw();lI(2),kw(e.extensions())}}var mc=(()=>{class n{constructor(){this.extensions=Zj([`HTML`,`TS`,`SCSS`]),this.exampleTitle=Zj(`Example`),this.exampleDescription=Zj(void 0),this.exampleComponent=Qj(`exampleComponent`),this.exampleName=qe$3(()=>this.exampleComponent()?.nativeElement?.children?.[0]?.localName.replace(`lab900-`,``)),this.examplePath=qe$3(()=>`examples/`+this.exampleName()+`/`+this.exampleName()+`.component.`),this.showSource=xe$3(!1)}toggleSourceView(){this.showSource.set(!this.showSource())}static{this.ɵfac=function(t){return new(t||n)}}static{this.ɵcmp=NC({type:n,selectors:[[`lab900-example-viewer`]],viewQuery:function(t,i){t&1&&Yg(i.exampleComponent,S_,5),t&2&&Zw()},inputs:{extensions:[1,`extensions`],exampleTitle:[1,`exampleTitle`],exampleDescription:[1,`exampleDescription`]},ngContentSelectors:D_,decls:15,vars:6,consts:[[`exampleComponent`,``],[`appearance`,`outlined`,1,`lab900-card`],[2,`display`,`flex`,`justify-content`,`space-between`,`align-items`,`center`,`padding`,`8px 16px`],[`mat-icon-button`,``,`matTooltip`,`Toggle source`,3,`click`,`disabled`],[1,`example-source-wrapper`],[2,`padding`,`30px`],[`mat-stretch-tabs`,`false`],[3,`label`],[`lineNumbers`,``,3,`src`,`start`]],template:function(t,i){t&1&&(Uw(),cs$1(0,`mat-card`,1)(1,`mat-card-header`,2)(2,`mat-card-title`)(3,`mat-card-title`),yb$1(4),kb$1(5,`translate`),Ju$1(),Nw(6,T_,2,1,`mat-card-subtitle`),Ju$1(),cs$1(7,`button`,3),Ug(`click`,function(){return i.toggleSourceView()}),cs$1(8,`mat-icon`),yb$1(9,`code`),Ju$1()()(),cs$1(10,`mat-card-content`),Nw(11,N_,4,0,`div`,4),cs$1(12,`div`,5,0),Gw(14),Ju$1()()()),t&2&&(lI(4),im$1(Lb$1(5,4,i.exampleTitle())),lI(2),xw(i.exampleDescription()?6:-1),lI(),Og(`disabled`,i.extensions().length===0),lI(4),xw(i.showSource()&&i.exampleName()?11:-1))},dependencies:[sc,rc,dc,Vt$3,ln,Fe,lc,Ys,eo,ht,cc,xn$4,O_$1],encapsulation:2})}}return n})();var I_=[`symbolElement`];var kt=n=>({$implicit:n});var E_=n=>({$implicit:n,nested:!0});var pc=(n,a)=>a.title;var Ro=(n,a)=>a.name;function A_(n,a){n&1&&(cs$1(0,`p`,4),yb$1(1,` The API reference is missing. Run `),cs$1(2,`code`),yb$1(3,`npm run docs:api`),Ju$1(),yb$1(4,` to generate it from the library source. `),Ju$1())}function R_(n,a){if(n&1&&(cs$1(0,`p`,4),yb$1(1),Ju$1()),n&2){let e=Hw();lI(),rl$1(`Not found in the generated API reference: `,e.missing.join(`, `))}}function F_(n,a){n&1&&Pg(0)}function P_(n,a){if(n&1&&(cs$1(0,`p`,12),Ig(1,F_,1,0,`ng-container`,14),Ju$1()),n&2){let e=Hw().$implicit;Hw(2);let t=Yw(7);lI(),Og(`ngTemplateOutlet`,t)(`ngTemplateOutletContext`,xb$1(2,kt,e.description))}}function O_(n,a){n&1&&Pg(0)}function L_(n,a){if(n&1&&(cs$1(0,`article`,13,3),Ig(2,O_,1,0,`ng-container`,14),Ju$1()),n&2){let e=a.$implicit;Hw(3);let t=Yw(3);Og(`id`,e.anchor),lI(2),Og(`ngTemplateOutlet`,t)(`ngTemplateOutletContext`,xb$1(3,kt,e))}}function V_(n,a){if(n&1&&(cs$1(0,`section`,8)(1,`h2`,11),yb$1(2),Ju$1(),Nw(3,P_,2,4,`p`,12),Ow(4,L_,3,5,`article`,13,Ro),Ju$1()),n&2){let e=a.$implicit;Og(`id`,e.anchor),lI(2),im$1(e.title),lI(),xw(e.description.length?3:-1),lI(),kw(e.symbols)}}function B_(n,a){if(n&1&&(cs$1(0,`p`,4),yb$1(1),Ju$1()),n&2){let e=Hw(2);lI(),rl$1(`Nothing matches "`,e.filter(),`".`)}}function z_(n,a){if(n&1&&(kg(0,`wbr`),tl$1(1),yb$1(2),Ss$1()),n&2){let e=a.$implicit;lI(2),im$1(e)}}function H_(n,a){if(n&1){let e=Vw();cs$1(0,`li`)(1,`button`,17),Ug(`click`,function(){let i=Wd$1(e).$implicit;return qd$1(Hw(3).scrollTo(i.anchor))}),Ow(2,z_,3,1,null,null,Aw),Ju$1()()}if(n&2){let e=a.$implicit,t=Hw(3);lI(),Jg(`api-toc__link--active`,t.activeAnchor()===e.anchor),lI(),kw(e.nameWords)}}function j_(n,a){if(n&1){let e=Vw();cs$1(0,`button`,15),Ug(`click`,function(){let i=Wd$1(e).$implicit;return qd$1(Hw(2).scrollTo(i.anchor))}),yb$1(1),Ju$1(),cs$1(2,`ul`,16),Ow(3,H_,4,2,`li`,null,Ro),Ju$1()}if(n&2){let e=a.$implicit;lI(),im$1(e.title),lI(2),kw(e.symbols)}}function G_(n,a){if(n&1){let e=Vw();cs$1(0,`div`,5)(1,`div`,6)(2,`input`,7),Ug(`input`,function(i){Wd$1(e);return qd$1(Hw().onFilter(i))}),Ju$1(),Nw(3,R_,2,1,`p`,4),Ow(4,V_,6,3,`section`,8,pc,!1,B_,2,1,`p`,4),Ju$1(),cs$1(7,`nav`,9)(8,`p`,10),yb$1(9,`On this page`),Ju$1(),Ow(10,j_,5,1,null,null,pc),Ju$1()()}if(n&2){let e=a,t=Hw();lI(2),Og(`value`,t.filter()),lI(),xw(e.missing.length?3:-1),lI(),kw(e.sections),lI(6),kw(e.sections)}}function W_(n,a){if(n&1&&(cs$1(0,`h4`,19),yb$1(1),Ju$1()),n&2){let e=Hw().$implicit;Rg(`id`,e.elementId),lI(),rl$1(`Options: `,e.name)}}function q_(n,a){if(n&1&&(cs$1(0,`h3`,27),yb$1(1),Ju$1(),cs$1(2,`span`,28),yb$1(3),Ju$1()),n&2){let e=Hw().$implicit;lI(),im$1(e.name),lI(2),im$1(e.kind)}}function $_(n,a){n&1&&(cs$1(0,`span`,20),yb$1(1,`deprecated`),Ju$1())}function U_(n,a){if(n&1&&(cs$1(0,`a`,21),yb$1(1,`View source`),Ju$1()),n&2){let e=Hw().$implicit;Og(`href`,e.sourceUrl,Kp$1)}}function Q_(n,a){n&1&&Pg(0)}function Z_(n,a){if(n&1&&(cs$1(0,`p`,22),yb$1(1,` Deprecated: `),Ig(2,Q_,1,0,`ng-container`,14),Ju$1()),n&2){let e=Hw().$implicit;Hw();let t=Yw(7);lI(2),Og(`ngTemplateOutlet`,t)(`ngTemplateOutletContext`,xb$1(2,kt,e.deprecated))}}function X_(n,a){n&1&&Pg(0)}function K_(n,a){if(n&1&&(cs$1(0,`p`,23),Ig(1,X_,1,0,`ng-container`,14),Ju$1()),n&2){let e=Hw().$implicit;Hw();let t=Yw(7);lI(),Og(`ngTemplateOutlet`,t)(`ngTemplateOutletContext`,xb$1(2,kt,e.description))}}function Y_(n,a){if(n&1&&(cs$1(0,`dt`),yb$1(1,`Selector`),Ju$1(),cs$1(2,`dd`)(3,`code`),yb$1(4),Ju$1()()),n&2){let e=Hw(2).$implicit;lI(4),im$1(e.selector)}}function J_(n,a){n&1&&Pg(0)}function eb(n,a){if(n&1&&(cs$1(0,`dt`),yb$1(1,`Extends`),Ju$1(),cs$1(2,`dd`)(3,`code`),Ig(4,J_,1,0,`ng-container`,14),Ju$1()()),n&2){let e=a.$implicit;Hw(3);let t=Yw(5);lI(4),Og(`ngTemplateOutlet`,t)(`ngTemplateOutletContext`,xb$1(2,kt,e))}}function tb(n,a){if(n&1&&(cs$1(0,`dl`,24),Nw(1,Y_,5,1),Ow(2,eb,5,4,null,null,Aw),Ju$1()),n&2){let e=Hw().$implicit;lI(),xw(e.selector?1:-1),lI(),kw(e.extendsTokens)}}function nb(n,a){if(n&1&&(cs$1(0,`pre`,25)(1,`code`),yb$1(2),Ju$1()()),n&2){let e=Hw().$implicit;lI(2),im$1(e.usage)}}function ib(n,a){if(n&1&&(cs$1(0,`pre`,25)(1,`code`),yb$1(2),Ju$1()()),n&2){let e=Hw().$implicit;lI(2),im$1(e.example)}}function ab(n,a){n&1&&Pg(0)}function ob(n,a){if(n&1&&(cs$1(0,`pre`,25)(1,`code`),yb$1(2),Ig(3,ab,1,0,`ng-container`,14),Ju$1()()),n&2){let e=Hw(2).$implicit;Hw();let t=Yw(5);lI(2),rl$1(`enum `,e.name,` `),lI(),Og(`ngTemplateOutlet`,t)(`ngTemplateOutletContext`,xb$1(3,kt,e.typeTokens))}}function rb(n,a){n&1&&Pg(0)}function sb(n,a){if(n&1&&(cs$1(0,`pre`,25)(1,`code`),yb$1(2),Ig(3,rb,1,0,`ng-container`,14),Ju$1()()),n&2){let e=Hw(2).$implicit;Hw();let t=Yw(5);lI(2),rl$1(`type `,e.name,` = `),lI(),Og(`ngTemplateOutlet`,t)(`ngTemplateOutletContext`,xb$1(3,kt,e.typeTokens))}}function lb(n,a){if(n&1&&Nw(0,ob,4,5,`pre`,25)(1,sb,4,5,`pre`,25),n&2){let e=Hw().$implicit;xw(e.kind===`enum`?0:1)}}function cb(n,a){if(n&1&&(cs$1(0,`h4`,29),yb$1(1),Ju$1()),n&2){let e=Hw().$implicit;lI(),im$1(e.title)}}function db(n,a){n&1&&(cs$1(0,`span`,36),yb$1(1,`required`),Ju$1())}function mb(n,a){n&1&&(cs$1(0,`span`,20),yb$1(1,`deprecated`),Ju$1())}function pb(n,a){n&1&&Pg(0)}function ub(n,a){if(n&1&&(cs$1(0,`span`,38),yb$1(1),Ju$1()),n&2){let e=Hw().$implicit;lI(),im$1(e.reactiveHint)}}function hb(n,a){n&1&&Pg(0)}function fb(n,a){if(n&1&&(cs$1(0,`p`,22),yb$1(1,` Deprecated: `),Ig(2,hb,1,0,`ng-container`,14),Ju$1()),n&2){let e=Hw().$implicit;Hw(3);let t=Yw(7);lI(2),Og(`ngTemplateOutlet`,t)(`ngTemplateOutletContext`,xb$1(2,kt,e.deprecated))}}function _b(n,a){n&1&&Pg(0)}function bb(n,a){if(n&1&&(cs$1(0,`p`),Ig(1,_b,1,0,`ng-container`,14),Ju$1()),n&2){let e=Hw().$implicit;Hw(3);let t=Yw(7);lI(),Og(`ngTemplateOutlet`,t)(`ngTemplateOutletContext`,xb$1(2,kt,e.description))}}function gb(n,a){if(n&1&&(cs$1(0,`p`,40),yb$1(1,` Default: `),cs$1(2,`code`),yb$1(3),Ju$1()()),n&2){let e=Hw().$implicit;lI(3),im$1(e.default)}}function vb(n,a){if(n&1&&(cs$1(0,`p`,40),yb$1(1,` Example: `),cs$1(2,`code`),yb$1(3),Ju$1()()),n&2){let e=Hw().$implicit;lI(3),im$1(e.example)}}function xb(n,a){if(n&1&&(cs$1(0,`p`,40),yb$1(1),Ju$1()),n&2){let e=Hw().$implicit;lI(),rl$1(`Inherited from `,e.inheritedFrom)}}function yb(n,a){if(n&1&&(cs$1(0,`div`,32)(1,`div`,33)(2,`div`,34)(3,`code`,35),yb$1(4),Ju$1(),Nw(5,db,2,0,`span`,36),Nw(6,mb,2,0,`span`,20),Ju$1(),cs$1(7,`code`,37),Ig(8,pb,1,0,`ng-container`,14),Ju$1(),Nw(9,ub,2,1,`span`,38),Ju$1(),cs$1(10,`div`,39),Nw(11,fb,3,4,`p`,22),Nw(12,bb,2,4,`p`),Nw(13,gb,4,1,`p`,40),Nw(14,vb,4,1,`p`,40),Nw(15,xb,2,1,`p`,40),Ju$1()()),n&2){let e=a.$implicit;Hw(3);let t=Yw(5);Jg(`api-member--deprecated`,e.deprecated),lI(4),im$1(e.binding),lI(),xw(e.required?5:-1),lI(),xw(e.deprecated?6:-1),lI(2),Og(`ngTemplateOutlet`,t)(`ngTemplateOutletContext`,xb$1(13,kt,e.typeTokens)),lI(),xw(e.reactiveHint?9:-1),lI(2),xw(e.deprecated?.length?11:-1),lI(),xw(e.description.length?12:-1),lI(),xw(e.default?13:-1),lI(),xw(e.example?14:-1),lI(),xw(e.inheritedFrom?15:-1)}}function Cb(n,a){if(n&1&&(Nw(0,cb,2,1,`h4`,29),cs$1(1,`div`,30),Ow(2,yb,16,15,`div`,31,Ro),Ju$1()),n&2){let e=a.$implicit;xw(e.title?0:-1),lI(2),kw(e.members)}}function wb(n,a){n&1&&Pg(0)}function kb(n,a){if(n&1&&(cs$1(0,`div`,26),Ig(1,wb,1,0,`ng-container`,14),Ju$1()),n&2){let e=Hw().$implicit;Hw();let t=Yw(3);lI(),Og(`ngTemplateOutlet`,t)(`ngTemplateOutletContext`,xb$1(2,E_,e.options))}}function Sb(n,a){if(n&1&&(cs$1(0,`header`,18),Nw(1,W_,2,2,`h4`,19)(2,q_,4,2),Nw(3,$_,2,0,`span`,20),Nw(4,U_,2,1,`a`,21),Ju$1(),Nw(5,Z_,3,4,`p`,22),Nw(6,K_,2,4,`p`,23),Nw(7,tb,4,1,`dl`,24),Nw(8,nb,3,1,`pre`,25),Nw(9,ib,3,1,`pre`,25),Nw(10,lb,2,1),Ow(11,Cb,4,1,null,null,Aw),Nw(13,kb,2,4,`div`,26)),n&2){let e=a.$implicit,t=a.nested;lI(),xw(t?1:2),lI(2),xw(e.deprecated?3:-1),lI(),xw(t?-1:4),lI(),xw(e.deprecated?.length?5:-1),lI(),xw(e.description.length?6:-1),lI(),xw(e.selector||e.extendsTokens.length?7:-1),lI(),xw(e.usage?8:-1),lI(),xw(e.example?9:-1),lI(),xw(e.typeTokens.length?10:-1),lI(),kw(e.groups),lI(2),xw(e.options?13:-1)}}function Db(n,a){if(n&1){let e=Vw();cs$1(0,`button`,42),Ug(`click`,function(){Wd$1(e);let i=Hw().$implicit;return qd$1(Hw(2).scrollTo(i.link))}),yb$1(1),Ju$1()}if(n&2){let e=Hw().$implicit;lI(),im$1(e.text)}}function Tb(n,a){if(n&1&&(tl$1(0),yb$1(1),Ss$1()),n&2){let e=Hw().$implicit;lI(),im$1(e.text)}}function Mb(n,a){if(n&1&&Nw(0,Db,2,1,`button`,41)(1,Tb,2,1,`ng-container`),n&2){let e=a.$implicit;xw(e.link?0:1)}}function Nb(n,a){if(n&1&&Ow(0,Mb,2,1,null,null,Aw),n&2){let e=a.$implicit;kw(e)}}function Ib(n,a){if(n&1&&(cs$1(0,`code`),yb$1(1),Ju$1()),n&2){let e=Hw().$implicit;lI(),im$1(e.text)}}function Eb(n,a){if(n&1&&(tl$1(0),yb$1(1),Ss$1()),n&2){let e=Hw().$implicit;lI(),im$1(e.text)}}function Ab(n,a){if(n&1&&Nw(0,Ib,2,1,`code`)(1,Eb,2,1,`ng-container`),n&2){let e=a.$implicit;xw(e.code?0:1)}}function Rb(n,a){if(n&1&&Ow(0,Ab,2,1,null,null,Aw),n&2){let e=a.$implicit;kw(e)}}var Fb=`https://github.com/lab900/angular-library-ui`;var Pb={signal:`Also accepts a function of the data or a signal`,function:`Also accepts a function of the data`};var Ob=[{kind:`input`,title:`Inputs`},{kind:`model`,title:`Two-way bindings`},{kind:`output`,title:`Outputs`}];var hc=(()=>{class n{constructor(){if(this.destroyRef=g$2(X),this.symbolElements=Kj(`symbolElement`),this.sections=Zj.required(),this.docs=So$1(()=>`assets/api/api.json`),this.filter=xe$3(``),this.activeAnchor=xe$3(void 0),this.allSections=qe$3(()=>{let t=this.docs.value()?.symbols;if(!t)return;let i=this.sections().map(M=>({section:M,names:M.symbols.filter(U=>t[U])})),o=new Set(i.flatMap(M=>M.names)),r=new Set(o);for(let{names:M}of i.filter(U=>U.section.usage))M.forEach(U=>{let ae=bc(t[U],t);ae&&r.add(ae)});let u=this.sections().flatMap(M=>M.symbols).filter(M=>!t[M]);return{sections:i.map(({section:M,names:U})=>({title:M.title,anchor:wa(`section-${M.title}`),description:ka(M.description),symbols:U.map(ae=>fc(t[ae],{symbols:t,onPage:r,topLevel:o},M))})),missing:u}}),this.view=qe$3(()=>{let t=this.allSections(),i=this.filter().trim().toLowerCase();if(!t||!i)return t;let o=t.sections.map(r=>Z$3(q$2({},r),{symbols:r.symbols.map(u=>_c(u,i)).filter(u=>!!u)})).filter(r=>r.symbols.length);return Z$3(q$2({},t),{sections:o})}),typeof IntersectionObserver>`u`)return;let e=new IntersectionObserver(t=>{let i=t.filter(o=>o.isIntersecting).sort((o,r)=>o.boundingClientRect.top-r.boundingClientRect.top);i.length&&this.activeAnchor.set(i[0].target.id)},{rootMargin:`-80px 0px -70% 0px`});zr(()=>{e.disconnect(),this.symbolElements().forEach(t=>e.observe(t.nativeElement))}),this.destroyRef.onDestroy(()=>e.disconnect())}scrollTo(e){document.getElementById(e)?.scrollIntoView({behavior:`smooth`,block:`start`})}onFilter(e){this.filter.set(e.target.value)}static{this.ɵfac=function(t){return new(t||n)}}static{this.ɵcmp=NC({type:n,selectors:[[`lab900-api-docs`]],viewQuery:function(t,i){t&1&&Yg(i.symbolElements,I_,5),t&2&&Zw()},inputs:{sections:[1,`sections`]},decls:8,vars:1,consts:[[`symbolTpl`,``],[`typeTpl`,``],[`textTpl`,``],[`symbolElement`,``],[1,`api-docs__message`],[1,`api-docs`],[1,`api-docs__main`],[`type`,`search`,`placeholder`,`Filter by name, for example sortable`,`aria-label`,`Filter the API by name`,1,`api-docs__filter`,3,`input`,`value`],[1,`api-section`,3,`id`],[`aria-label`,`On this page`,1,`api-toc`],[1,`api-toc__title`],[1,`api-section__title`],[1,`api-section__description`],[1,`api-symbol`,3,`id`],[4,`ngTemplateOutlet`,`ngTemplateOutletContext`],[`type`,`button`,1,`api-toc__section`,3,`click`],[1,`api-toc__list`],[`type`,`button`,1,`api-toc__link`,3,`click`],[1,`api-symbol__header`],[1,`api-symbol__name`,`api-symbol__name--nested`],[1,`api-badge`,`api-badge--warn`],[`target`,`_blank`,`rel`,`noopener`,1,`api-symbol__source`,3,`href`],[1,`api-deprecated`],[1,`api-symbol__description`],[1,`api-symbol__meta`],[1,`api-code`],[1,`api-options`],[1,`api-symbol__name`],[1,`api-badge`],[1,`api-group__title`],[1,`api-members`],[1,`api-member`,3,`api-member--deprecated`],[1,`api-member`],[1,`api-member__signature`],[1,`api-member__name-row`],[1,`api-member__name`],[1,`api-badge`,`api-badge--required`],[1,`api-member__type`],[1,`api-member__hint`],[1,`api-member__body`],[1,`api-member__meta`],[`type`,`button`,1,`api-type-link`],[`type`,`button`,1,`api-type-link`,3,`click`]],template:function(t,i){if(t&1&&(Nw(0,A_,5,0,`p`,4)(1,G_,12,3,`div`,5),Ig(2,Sb,14,10,`ng-template`,null,0,jb$1)(4,Nb,2,0,`ng-template`,null,1,jb$1)(6,Rb,2,0,`ng-template`,null,2,jb$1)),t&2){let o;xw(i.docs.error()?0:(o=i.view())?1:-1,o)}},dependencies:[N_$1],styles:[`[_nghost-%COMP%]{display:block;container-type:inline-size}code[_ngcontent-%COMP%], pre[_ngcontent-%COMP%]{font-family:ui-monospace,SFMono-Regular,Menlo,Consolas,monospace;font-size:.875em}p[_ngcontent-%COMP%]   code[_ngcontent-%COMP%], dd[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{padding:1px 5px;border-radius:4px;background:#c0eae873}.api-docs[_ngcontent-%COMP%]{display:grid;grid-template-columns:minmax(0,1fr);gap:40px;padding-top:6px}@container (min-width: 900px){.api-docs[_ngcontent-%COMP%]{grid-template-columns:minmax(0,1fr) 220px}}.api-docs__message[_ngcontent-%COMP%]{padding:16px 0 0;color:#6a7089}.api-docs__filter[_ngcontent-%COMP%]{box-sizing:border-box;width:100%;padding:10px 14px;border:2px solid #343c57;border-radius:4px;color:#343c57;font:inherit}.api-docs__filter[_ngcontent-%COMP%]:focus{outline:none;border-color:#03ada5}.api-toc[_ngcontent-%COMP%]{display:none}@container (min-width: 900px){.api-toc[_ngcontent-%COMP%]{display:block;position:sticky;top:calc(var(--%NS%showcase-header-height, 0px) + 20px);align-self:start;max-height:calc(100vh - 110px);overflow-y:auto;padding-left:16px;border-left:1px solid #c0eae8}}.api-toc__title[_ngcontent-%COMP%]{margin:0 0 12px;color:#6a7089;font-size:.75rem;font-weight:600;letter-spacing:.06em;text-transform:uppercase}.api-toc__section[_ngcontent-%COMP%], .api-toc__link[_ngcontent-%COMP%]{display:block;width:100%;padding:3px 0;border:0;background:none;color:#343c57;font:inherit;text-align:left;cursor:pointer}.api-toc__section[_ngcontent-%COMP%]:hover, .api-toc__section[_ngcontent-%COMP%]:focus-visible, .api-toc__link[_ngcontent-%COMP%]:hover, .api-toc__link[_ngcontent-%COMP%]:focus-visible{color:#03ada5}.api-toc__section[_ngcontent-%COMP%]{margin-top:10px;font-weight:600}.api-toc__list[_ngcontent-%COMP%]{margin:0;padding:0;list-style:none}.api-toc__link[_ngcontent-%COMP%]{padding-left:10px;color:#6a7089;font-size:.85rem;overflow-wrap:anywhere}.api-toc__link--active[_ngcontent-%COMP%]{box-shadow:inset 2px 0 #ff5126;color:#343c57;font-weight:600}.api-section[_ngcontent-%COMP%]{scroll-margin-top:calc(var(--%NS%showcase-header-height, 0px) + 20px)}.api-section__title[_ngcontent-%COMP%]{margin:48px 0 4px;font-size:1.6rem;font-weight:600}.api-section__description[_ngcontent-%COMP%]{margin:0;color:#6a7089;font-size:1.05rem}.api-symbol[_ngcontent-%COMP%]{margin-top:24px;padding:24px;border:1px solid #c0eae8;border-radius:8px;scroll-margin-top:calc(var(--%NS%showcase-header-height, 0px) + 20px)}.api-symbol__header[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;align-items:center;gap:8px 10px}.api-symbol__name[_ngcontent-%COMP%]{margin:0;font-family:ui-monospace,SFMono-Regular,Menlo,Consolas,monospace;font-size:1.2rem;font-weight:600;overflow-wrap:anywhere}.api-symbol__name--nested[_ngcontent-%COMP%]{font-size:1rem;scroll-margin-top:calc(var(--%NS%showcase-header-height, 0px) + 20px)}.api-symbol__source[_ngcontent-%COMP%]{margin-left:auto;color:#03ada5;font-size:.85rem}.api-symbol__description[_ngcontent-%COMP%]{margin:12px 0 0;font-size:1rem;line-height:1.55}.api-symbol__meta[_ngcontent-%COMP%]{display:grid;grid-template-columns:max-content minmax(0,1fr);gap:6px 16px;margin:16px 0 0;font-size:.9rem}.api-symbol__meta[_ngcontent-%COMP%]   dt[_ngcontent-%COMP%]{color:#6a7089}.api-symbol__meta[_ngcontent-%COMP%]   dd[_ngcontent-%COMP%]{margin:0;overflow-wrap:anywhere}.api-code[_ngcontent-%COMP%]{margin:16px 0 0;padding:14px 16px;overflow-x:auto;border-radius:4px;background:#343c57;color:#fff;line-height:1.5}.api-code[_ngcontent-%COMP%]   .api-type-link[_ngcontent-%COMP%]{color:#c0eae8}.api-deprecated[_ngcontent-%COMP%]{margin:12px 0 0;padding:8px 12px;border-radius:4px;background:#fff3ab}.api-group__title[_ngcontent-%COMP%]{margin:28px 0 0;color:#6a7089;font-size:.8rem;font-weight:600;letter-spacing:.06em;text-transform:uppercase}.api-members[_ngcontent-%COMP%]{margin-top:8px;border-top:1px solid #c0eae8}.api-member[_ngcontent-%COMP%]{display:grid;grid-template-columns:minmax(0,1fr);gap:6px 24px;padding:14px 0;border-bottom:1px solid #c0eae8}@container (min-width: 640px){.api-member[_ngcontent-%COMP%]{grid-template-columns:minmax(0,5fr) minmax(0,6fr)}}.api-member--deprecated[_ngcontent-%COMP%]   .api-member__name[_ngcontent-%COMP%]{text-decoration:line-through;opacity:.7}.api-member__name-row[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;align-items:center;gap:6px 8px}.api-member__name[_ngcontent-%COMP%]{font-size:.95rem;font-weight:600}.api-member__type[_ngcontent-%COMP%]{display:block;margin-top:4px;color:#6a7089;font-size:.85rem;overflow-wrap:anywhere}.api-member__hint[_ngcontent-%COMP%]{display:block;margin-top:4px;color:#03ada5;font-size:.8rem}.api-member__body[_ngcontent-%COMP%]{font-size:.95rem;line-height:1.5}.api-member__body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0}.api-member__body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] + p[_ngcontent-%COMP%]{margin-top:6px}.api-member__meta[_ngcontent-%COMP%]{color:#6a7089;font-size:.85rem}.api-options[_ngcontent-%COMP%]{margin-top:20px;padding:16px;border-radius:4px;background:#c0eae833}.api-badge[_ngcontent-%COMP%]{display:inline-block;padding:0 8px;border-radius:28px;background:#c0eae8;color:#343c57;font-size:.72rem;line-height:1.7;white-space:nowrap}.api-badge--required[_ngcontent-%COMP%]{background:#fff0ed;color:#ff5126;font-weight:600}.api-badge--warn[_ngcontent-%COMP%]{background:#fff3ab}.api-type-link[_ngcontent-%COMP%]{padding:0;border:0;background:none;color:#03ada5;font:inherit;text-decoration:underline;text-underline-offset:2px;cursor:pointer}`]})}}return n})();function fc(n,a,e,t=!1){let{symbols:i,onPage:o}=a,r=n.kind===`component`||n.kind===`directive`,u=e?.usage,C=u?bc(n,i):void 0,M=n.members??[],U;return u&&r?U=[]:r?U=Ob.map(({kind:ae,title:Pe})=>({title:Pe,members:M.filter(ht=>(ht.kind??`input`)===ae).map(ht=>uc(ht,!0,o))})).filter(ae=>ae.members.length):U=M.length?[{members:M.map(ae=>uc(ae,!1,o))}]:[],{name:n.name,nameWords:n.name.split(/(?=[A-Z][a-z])/),kind:`${n.abstract?`abstract `:``}${n.kind}`,anchor:wa(n.name),elementId:t&&a.topLevel.has(n.name)?void 0:wa(n.name),sourceUrl:`${Fb}/blob/main/${n.source}`,selector:u?void 0:n.selector,deprecated:gc(n.deprecated),description:ka(n.description),example:n.example,extendsTokens:(n.extends??[]).map(ae=>Ao(ae,o)),typeTokens:n.type?Ao(n.type,o):[],groups:U,usage:u&&r?Lb(n.name,u,C?i[C]:void 0):void 0,options:C?fc(i[C],a,void 0,!0):void 0}}function uc(n,a,e){return{name:n.name,binding:a?Vb(n):n.name,typeTokens:Ao(a?n.type.replace(/\s*\|\s*undefined\b/g,``):n.type,e),required:!!n.required||!a&&!n.optional,deprecated:gc(n.deprecated),default:n.default,reactiveHint:n.reactive?Pb[n.reactive]:void 0,description:ka(n.description),example:n.example,inheritedFrom:n.inheritedFrom}}function Lb(n,a,e){let t=[`  key: 'myColumn',`,`  label: 'My column',`,`  ${a.classKey}: ${n},`];if(e){let i=(e.members??[]).filter(o=>!o.optional).map(o=>`${o.name}: ...`);t.push(`  ${a.optionsKey}: { ${i.length?i.join(`, `)+` `:``}}, // ${e.name}`)}return`const cell: TableCell = {
${t.join(`
`)}
};`}function _c(n,a){if(n.name.toLowerCase().includes(a))return n;let e=n.groups.map(i=>Z$3(q$2({},i),{members:i.members.filter(o=>o.name.toLowerCase().includes(a))})).filter(i=>i.members.length),t=n.options&&_c(n.options,a);return e.length||t?Z$3(q$2({},n),{groups:e,options:t}):void 0}function bc(n,a){let e=n.extends?.[0]?.match(/^[\w$]+<\s*([\w$]+)/)?.[1];return e&&a[e]?.kind===`interface`?e:void 0}function wa(n){return`api-${n.toLowerCase().replace(/[^a-z0-9]+/g,`-`)}`}function Vb(n){switch(n.kind){case`model`:return`[(${n.name})]`;case`output`:return`(${n.name})`;default:return`[${n.name}]`}}function gc(n){if(n)return n===!0?[]:ka(n)}function ka(n){return n?n.replace(/\s*\n\s*/g,` `).split(/`([^`]+)`/).map((a,e)=>e%2?{text:a,code:!0}:{text:a}).filter(a=>a.text):[]}function Ao(n,a){return n.split(/([A-Za-z_$][\w$]*)/).filter(Boolean).map(e=>a.has(e)?{text:e,link:wa(e)}:{text:e})}var vc=()=>[];var Bb=n=>({tab:n});function zb(n,a){if(n&1&&(cs$1(0,`a`,5),yb$1(1),Ju$1()),n&2){let e=a.$implicit,t=Hw(2);Og(`routerLink`,Nb$1(4,vc))(`queryParams`,xb$1(5,Bb,e))(`active`,t.currentTab()===e),lI(),rl$1(` `,t.tabLabels[e],` `)}}function Hb(n,a){if(n&1&&kg(0,`lab900-markdown-page`,7),n&2)Og(`filePath`,Hw(2).data()?.docFile)}function jb(n,a){if(n&1&&(cs$1(0,`lab900-example-viewer`,9),Pg(1,10),Ju$1()),n&2){let e=a.$implicit;Og(`extensions`,e.extensions)(`exampleTitle`,e.title??``)(`exampleDescription`,e.description),lI(),Og(`ngComponentOutlet`,e.component)}}function Gb(n,a){if(n&1&&Ow(0,jb,2,4,`lab900-example-viewer`,9,Rw),n&2)kw(Hw(2).data()?.examples)}function Wb(n,a){if(n&1&&kg(0,`lab900-api-docs`,8),n&2)Og(`sections`,Hw(2).data()?.api??Nb$1(1,vc))}function qb(n,a){if(n&1&&(cs$1(0,`div`,1)(1,`header`,2)(2,`h1`,3),yb$1(3),Ju$1(),cs$1(4,`nav`,4),Ow(5,zb,2,7,`a`,5,Rw),Ju$1()(),cs$1(7,`mat-tab-nav-panel`,6,0),Nw(9,Hb,1,1,`lab900-markdown-page`,7)(10,Gb,2,0)(11,Wb,1,2,`lab900-api-docs`,8),Ju$1()()),n&2){let e,t=Yw(8),i=Hw();lI(3),im$1(i.data()?.title),lI(),Og(`tabPanel`,t),lI(),kw(i.tabs()),lI(4),xw((e=i.currentTab())===`guide`?9:e===`examples`?10:e===`api`?11:-1)}}var xc=(()=>{class n{constructor(){this.activatedRoute=g$2(W),this.router=g$2(ue$1),this.tabLabels={guide:`Guide`,examples:`Examples`,api:`API`},this.queryParams=sH(this.activatedRoute.queryParams),this.currentTab=qe$3(()=>this.queryParams()?.tab??`examples`),this.data=sH(this.activatedRoute.data),this.tabs=qe$3(()=>{let t=this.data();return[...t?.docFile?[`guide`]:[],`examples`,...t?.api?.length?[`api`]:[]]});let e=g$2(rt$2,{optional:!0});zr(()=>{this.currentTab(),e?.scrollTo({top:0})}),zr(()=>{this.tabs().includes(Q$1(this.queryParams)?.tab)||this.router.navigate([],{relativeTo:this.activatedRoute,queryParams:{tab:this.data()?.docFile?`guide`:`examples`}})})}static{this.ɵfac=function(t){return new(t||n)}}static{this.ɵcmp=NC({type:n,selectors:[[`lab900-showcase-page`]],decls:1,vars:1,consts:[[`tabNavPanel`,``],[1,`showcase-page`],[1,`showcase-page__header`],[1,`showcase-page__title`],[`mat-tab-nav-bar`,``,`mat-stretch-tabs`,`false`,1,`showcase-page__tabs`,3,`tabPanel`],[`mat-tab-link`,``,3,`routerLink`,`queryParams`,`active`],[1,`showcase-page__content`],[3,`filePath`],[3,`sections`],[3,`extensions`,`exampleTitle`,`exampleDescription`],[3,`ngComponentOutlet`]],template:function(t,i){t&1&&Nw(0,qb,12,3,`div`,1),t&2&&xw(i.data()&&i.currentTab()?0:-1)},dependencies:[yr,mc,S_$1,Xn,Kn,Ki,Mt$2,hc],styles:[`.showcase-page[_ngcontent-%COMP%]{--%NS%showcase-header-height: 64px;box-sizing:border-box;max-width:1060px;margin:auto;padding:0 30px 50px}@media screen and (max-width:599px){.showcase-page[_ngcontent-%COMP%]{--%NS%showcase-header-height: 105px;padding:0 15px 30px}}.showcase-page__header[_ngcontent-%COMP%]{position:sticky;top:0;z-index:2;display:flex;flex-wrap:wrap;align-items:flex-end;column-gap:32px;padding-top:16px;border-bottom:1px solid rgba(52,60,87,.15);background:#fff}.showcase-page__title[_ngcontent-%COMP%]{flex:0 0 auto;margin:0;padding-bottom:12px;font-size:1.5rem;font-weight:600;line-height:1.2}.showcase-page__tabs[_ngcontent-%COMP%]{flex:1 1 auto;--%NS%mat-tab-divider-height: 0}@media screen and (max-width:599px){.showcase-page__tabs[_ngcontent-%COMP%]{flex-basis:100%}}.showcase-page__content[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:24px;padding-top:24px}.showcase-page__content[_ngcontent-%COMP%]     .markdown-page{max-width:100%;padding:0}.showcase-page__content[_ngcontent-%COMP%]     .markdown-page .page{padding:0}.showcase-page__content[_ngcontent-%COMP%]     .lab900-card{margin-bottom:0}`]})}}return n})();var Nt=class{constructor(a,e,t,i,o){this.path=a,this.component=xc,this.data={title:e,path:a,examples:t,docFile:i,api:o}}};var Re=class{constructor(a,e,t,i=[`TS`]){this.component=a,this.title=e,this.description=t,this.extensions=i}};var yc=(()=>{class n{constructor(){this.Alert=Hn}static{this.ɵfac=function(t){return new(t||n)}}static{this.ɵcmp=NC({type:n,selectors:[[`lab900-alerts-example`]],decls:9,vars:4,consts:[[1,`alerts`],[3,`type`]],template:function(t,i){t&1&&(cs$1(0,`div`,0)(1,`lab900-alert`,1),yb$1(2,`Something went wrong while saving.`),Ju$1(),cs$1(3,`lab900-alert`,1),yb$1(4,`You have unsaved changes.`),Ju$1(),cs$1(5,`lab900-alert`,1),yb$1(6,`Your changes are saved.`),Ju$1(),cs$1(7,`lab900-alert`,1),yb$1(8,`This page refreshes every 5 minutes.`),Ju$1()()),t&2&&(lI(),Og(`type`,i.Alert.Error),lI(2),Og(`type`,i.Alert.Warn),lI(2),Og(`type`,i.Alert.Success),lI(2),Og(`type`,i.Alert.Info))},dependencies:[Yr],styles:[`.alerts[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:16px}`]})}}return n})();var Cc=(()=>{class n{constructor(){this.matchOptions={paths:`exact`,queryParams:`subset`,matrixParams:`subset`,fragment:`ignored`},this.navItemGroups=[{label:`Links`,icon:{name:`link`,position:`right`},items:[{label:`Route: Table page`,route:`/table`,icon:{name:`table_chart`}},{label:`Route: this page (active)`,route:`/nav-list`},{label:`External, new tab`,href:{url:`https://angular.dev`,target:`_blank`},icon:{name:`open_in_new`,position:`right`}},{label:`External, same tab`,href:{url:`https://angular.dev`,target:`_self`}}]},{label:`Nested levels`,items:[{label:`Level 1`,icon:{name:`folder`},children:[{label:`Level 2: Buttons page`,route:`/buttons`},{label:`Level 2`,children:[{label:`Level 3: Alerts page`,route:`/alerts`},{label:`Level 3: this page (active)`,route:`/nav-list`}]}]}]},{label:`Route matching`,items:[{label:`Exact query params (inactive)`,route:`/nav-list`,routeQueryParams:{tab:`examples`,extraParam:`random`},routeMatchOptions:{paths:`exact`,queryParams:`exact`,matrixParams:`ignored`,fragment:`ignored`}},{label:`Query param subset (active)`,route:`/nav-list`,routeQueryParams:{tab:`examples`},routeMatchOptions:{paths:`subset`,queryParams:`subset`,matrixParams:`ignored`,fragment:`ignored`}}]}]}static{this.ɵfac=function(t){return new(t||n)}}static{this.ɵcmp=NC({type:n,selectors:[[`lab900-nav-list-example`]],decls:1,vars:3,consts:[[3,`navItemGroups`,`showLevelArrows`,`routeMatchOptions`]],template:function(t,i){t&1&&kg(0,`lab900-nav-list`,0),t&2&&Og(`navItemGroups`,i.navItemGroups)(`showLevelArrows`,!0)(`routeMatchOptions`,i.matchOptions)},dependencies:[Qi],encapsulation:2})}}return n})();var wc=(()=>{class n{constructor(){this.employees=[{id:1,name:`John Smith`,role:`Developer`,team:{name:`Platform`},startDate:new Date(2021,2,1)},{id:2,name:`Lucie Martin`,role:`Designer`,team:{name:`Product`},startDate:new Date(2019,8,15)},{id:3,name:`Rob Peeters`,role:`Developer`,team:{name:`Product`},startDate:new Date(2023,0,9)},{id:4,name:`Sarah Jansen`,role:`Team lead`,team:{name:`Platform`},startDate:new Date(2017,5,1)}],this.tableCells=[{key:`id`,label:`ID`,width:`60px`},{key:`name`,label:`Name`},{key:`role`,label:`Role`},{key:`team.name`,label:`Team`},{key:`startDate`,label:`Start date`,cellFormatter:e=>e.startDate.toLocaleDateString()}],this.trackById=(e,t)=>t.id}static{this.ɵfac=function(t){return new(t||n)}}static{this.ɵcmp=NC({type:n,selectors:[[`lab900-table-example`]],decls:1,vars:3,consts:[[3,`tableCells`,`data`,`trackByTableFn`]],template:function(t,i){t&1&&kg(0,`lab900-table`,0),t&2&&Og(`tableCells`,i.tableCells)(`data`,i.employees)(`trackByTableFn`,i.trackById)},dependencies:[ve],encapsulation:2})}}return n})();var kc=(()=>{class n{constructor(){this.lastAction=xe$3(void 0),this.pageData={invoiceNumber:`2026-042`},this.breadCrumbs=[{title:`Home`,route:`/`},{title:`Invoices`,route:`/page-header`},{title:e=>`Invoice ${e.invoiceNumber}`,route:`/page-header`,queryParams:e=>({invoice:e.invoiceNumber})}],this.navItems=[{label:`Details`,queryParams:{section:`details`},prefixIcon:`description`},{label:`Payments`,queryParams:{section:`payments`},suffixIcon:`warning`}],this.actions=[{label:`Cancel`,type:`stroked`,prefixIcon:`close`,action:()=>this.lastAction.set(`Cancel`)},{label:`Save`,type:`flat`,prefixIcon:`save`,action:()=>this.lastAction.set(`Save`)}]}static{this.ɵfac=function(t){return new(t||n)}}static{this.ɵcmp=NC({type:n,selectors:[[`lab900-page-header-example`]],decls:5,vars:6,consts:[[`tabNavPanel`,``],[`pageTitle`,`Invoice details`,3,`breadCrumbs`,`data`,`navItems`,`tabPanel`,`actions`]],template:function(t,i){if(t&1&&(kg(0,`lab900-page-header`,1)(1,`mat-tab-nav-panel`,null,0),cs$1(3,`p`),yb$1(4),Ju$1()),t&2){let o=Yw(2);Og(`breadCrumbs`,i.breadCrumbs)(`data`,i.pageData)(`navItems`,i.navItems)(`tabPanel`,o)(`actions`,i.actions),lI(4),rl$1(`Last action: `,i.lastAction()??`-`)}},dependencies:[ia,Ki],encapsulation:2})}}return n})();var Sc=(()=>{class n{constructor(){this.lastAction=xe$3(void 0),this.actions=[{label:`Delete`,type:`stroked`,align:`left`,action:()=>this.lastAction.set(`Delete`)},{label:`history`,type:`icon`,tooltip:{value:`Show history`},action:()=>this.lastAction.set(`Show history`)},{label:`Save`,type:`flat`,suffixIcon:`keyboard_arrow_down`,subActions:[{label:`Save and close`,action:()=>this.lastAction.set(`Save and close`)},{label:`Save as draft`,action:()=>this.lastAction.set(`Save as draft`)}]}]}static{this.ɵfac=function(t){return new(t||n)}}static{this.ɵcmp=NC({type:n,selectors:[[`lab900-page-header-actions-example`]],decls:3,vars:3,consts:[[`pageTitle`,`Edit customer`,3,`actions`,`showActionsFixedOnMobile`]],template:function(t,i){t&1&&(kg(0,`lab900-page-header`,0),cs$1(1,`p`),yb$1(2),Ju$1()),t&2&&(Og(`actions`,i.actions)(`showActionsFixedOnMobile`,!1),lI(2),rl$1(`Last action: `,i.lastAction()??`-`))},dependencies:[ia],encapsulation:2})}}return n})();var $b=(()=>{class n{constructor(){this.data=Zj()}static{this.ɵfac=function(t){return new(t||n)}}static{this.ɵcmp=NC({type:n,selectors:[[`lab900-merger-bio`]],inputs:{data:[1,`data`]},decls:2,vars:1,template:function(t,i){t&1&&(Xu$1(0,`p`),yb$1(1),el$1()),t&2&&(lI(),im$1(i.data()?.bio))},encapsulation:2})}}return n})();var Dc=(()=>{class n{constructor(){this.merger=Qj.required(ra),this.selectedSide=xe$3(`right`),this.result=xe$3(void 0),this.left={title:`Axelle Red, a title that is too long to fit in the box`,data:{name:`Axelle`,firstName:`Red`,address:{country:`Belgium`,street:`Example street`,number:12,box:`A`},languages:[`Dutch`,`English`]}},this.right={title:`Axelle Blue`,data:{name:`Axelle`,firstName:`Blue`,address:{country:`Netherlands`,street:`Example street`,number:13,box:`A`},languages:[`French`,`German`],bio:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum nunc vel convallis malesuada.`,dateOfBirth:new Date(1990,4,17)}},this.schema=[{attribute:`dateOfBirth`,label:`label.birthday`,formatter:e=>e?.toLocaleDateString()??``},{attribute:`address`,nestedObject:[{attribute:`country`,label:`label.country`},{attribute:`street`,label:`label.street`},{attribute:`number`,label:`label.number`},{attribute:`box`,label:`label.box`}]},{attribute:`languages`,label:`language`,formatter:e=>[...e].sort().join(`, `),nextLine:!0,combine:!0,active:!0,disabled:!0},{attribute:`bio`,component:$b},{nestedObject:[{attribute:`name`,label:`label.last-name`},{attribute:`firstName`,label:`label.first-name`}]}]}static{this.ɵfac=function(t){return new(t||n)}}static{this.ɵcmp=NC({type:n,selectors:[[`lab900-merger-example`]],viewQuery:function(t,i){t&1&&Yg(i.merger,ra,5),t&2&&Zw()},decls:12,vars:11,consts:[[1,`merger-example-header`],[`mat-flat-button`,``,3,`click`],[3,`selectedSideChange`,`resultChange`,`leftObject`,`rightObject`,`schema`,`selectedSide`]],template:function(t,i){t&1&&(cs$1(0,`div`,0)(1,`span`),yb$1(2),Ju$1(),cs$1(3,`button`,1),Ug(`click`,function(){return i.merger().reset()}),yb$1(4),kb$1(5,`translate`),Ju$1()(),cs$1(6,`lab900-merger`,2),um$1(`selectedSideChange`,function(r){return Eb$1(i.selectedSide,r)||(i.selectedSide=r),r}),Ug(`resultChange`,function(r){return i.result.set(r)}),Ju$1(),cs$1(7,`h4`),yb$1(8,`Result`),Ju$1(),cs$1(9,`pre`),yb$1(10),kb$1(11,`json`),Ju$1()),t&2&&(lI(2),rl$1(`Master side: `,i.selectedSide()),lI(2),im$1(Lb$1(5,7,`reset`)),lI(2),Og(`leftObject`,i.left)(`rightObject`,i.right)(`schema`,i.schema),cm$1(`selectedSide`,i.selectedSide),lI(4),im$1(Lb$1(11,9,i.result())))},dependencies:[ra,de,xn$4,F_$1],styles:[`.merger-example-header[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;align-items:center;gap:1rem;margin-bottom:1rem}`]})}}return n})();var Tc=(()=>{class n{constructor(){this.clicked=xe$3(void 0)}static{this.ɵfac=function(t){return new(t||n)}}static{this.ɵcmp=NC({type:n,selectors:[[`lab900-button-example`]],decls:43,vars:4,consts:[[1,`button-grid`],[1,`column-title`],[`type`,`raised`,`label`,`Save`,3,`btnClick`],[`type`,`raised`,`label`,`Save`,`prefixIcon`,`save`,3,`btnClick`],[`type`,`raised`,`label`,`Save`,3,`disabled`],[`type`,`stroked`,`label`,`Edit`,3,`btnClick`],[`type`,`stroked`,`label`,`Edit`,`prefixIcon`,`edit`,3,`btnClick`],[`type`,`stroked`,`label`,`Edit`,3,`disabled`],[`type`,`flat`,`label`,`Open`,3,`btnClick`],[`type`,`flat`,`label`,`Open`,`suffixIcon`,`open_in_new`,3,`btnClick`],[`type`,`flat`,`label`,`Open`,3,`disabled`],[`type`,`raised`,`color`,`accent`,`label`,`Accent`,3,`btnClick`],[`type`,`icon`,`label`,`delete`,3,`btnClick`],[`type`,`fab`,`label`,`add`,3,`btnClick`],[`type`,`mini-fab`,`label`,`add`,3,`btnClick`]],template:function(t,i){t&1&&(cs$1(0,`div`,0),kg(1,`span`),cs$1(2,`span`,1),yb$1(3,`Default`),Ju$1(),cs$1(4,`span`,1),yb$1(5,`With icon`),Ju$1(),cs$1(6,`span`,1),yb$1(7,`Disabled`),Ju$1(),cs$1(8,`span`,1),yb$1(9,`raised`),Ju$1(),cs$1(10,`lab900-button`,2),Ug(`btnClick`,function(){return i.clicked.set(`raised`)}),Ju$1(),cs$1(11,`lab900-button`,3),Ug(`btnClick`,function(){return i.clicked.set(`raised with icon`)}),Ju$1(),kg(12,`lab900-button`,4),cs$1(13,`span`,1),yb$1(14,`stroked`),Ju$1(),cs$1(15,`lab900-button`,5),Ug(`btnClick`,function(){return i.clicked.set(`stroked`)}),Ju$1(),cs$1(16,`lab900-button`,6),Ug(`btnClick`,function(){return i.clicked.set(`stroked with icon`)}),Ju$1(),kg(17,`lab900-button`,7),cs$1(18,`span`,1),yb$1(19,`flat`),Ju$1(),cs$1(20,`lab900-button`,8),Ug(`btnClick`,function(){return i.clicked.set(`flat`)}),Ju$1(),cs$1(21,`lab900-button`,9),Ug(`btnClick`,function(){return i.clicked.set(`flat with icon`)}),Ju$1(),kg(22,`lab900-button`,10),cs$1(23,`span`,1),yb$1(24,`accent`),Ju$1(),cs$1(25,`lab900-button`,11),Ug(`btnClick`,function(){return i.clicked.set(`accent`)}),Ju$1(),kg(26,`span`)(27,`span`),Ju$1(),cs$1(28,`p`),yb$1(29,`For the icon types, the label is the name of the Material icon.`),Ju$1(),cs$1(30,`div`,0)(31,`span`,1),yb$1(32,`icon`),Ju$1(),cs$1(33,`span`,1),yb$1(34,`fab`),Ju$1(),cs$1(35,`span`,1),yb$1(36,`mini-fab`),Ju$1(),kg(37,`span`),cs$1(38,`lab900-button`,12),Ug(`btnClick`,function(){return i.clicked.set(`icon`)}),Ju$1(),cs$1(39,`lab900-button`,13),Ug(`btnClick`,function(){return i.clicked.set(`fab`)}),Ju$1(),cs$1(40,`lab900-button`,14),Ug(`btnClick`,function(){return i.clicked.set(`mini-fab`)}),Ju$1()(),cs$1(41,`p`),yb$1(42),Ju$1()),t&2&&(lI(12),Og(`disabled`,!0),lI(5),Og(`disabled`,!0),lI(5),Og(`disabled`,!0),lI(20),rl$1(`Last clicked: `,i.clicked()??`-`))},dependencies:[Yi],styles:[`.button-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:80px repeat(3,max-content);gap:16px 24px;align-items:center}.column-title[_ngcontent-%COMP%]{font-weight:500}`]})}}return n})();var Mc=(()=>{class n{constructor(){this.sort=xe$3([{id:`role`,direction:`asc`}]),this.employees=[{id:1,name:`John Smith`,role:`Developer`,salary:4200},{id:2,name:`Lucie Martin`,role:`Designer`,salary:3900},{id:3,name:`Rob Peeters`,role:`Developer`,salary:3600},{id:4,name:`Sarah Jansen`,role:`Team lead`,salary:5100},{id:5,name:`Max De Smet`,role:`Designer`,salary:4100}],this.sortedEmployees=qe$3(()=>{let e=this.sort().filter(t=>t.direction);return[...this.employees].sort((t,i)=>{for(let{id:o,direction:r}of e){let u=o,C=t[u]<i[u]?-1:t[u]>i[u]?1:0;if(C!==0)return r===`asc`?C:-C}return 0})}),this.sortDescription=qe$3(()=>this.sort().filter(e=>e.direction).map(e=>`${e.id} ${e.direction}`).join(`, `)||`none`),this.tableCells=[{key:`name`,label:`Name`,sortable:!0},{key:`role`,label:`Role`,sortable:!0},{key:`salary`,label:`Salary`,sortable:!0,cellFormatter:e=>`\u20AC ${e.salary}`},{key:`id`,label:`ID`,width:`60px`}],this.trackById=(e,t)=>t.id}static{this.ɵfac=function(t){return new(t||n)}}static{this.ɵcmp=NC({type:n,selectors:[[`lab900-table-sorting-example`]],decls:3,vars:6,consts:[[3,`sortChange`,`tableCells`,`data`,`trackByTableFn`,`sort`,`multiSort`]],template:function(t,i){t&1&&(cs$1(0,`lab900-table`,0),Ug(`sortChange`,function(r){return i.sort.set(r)}),Ju$1(),cs$1(1,`p`),yb$1(2),Ju$1()),t&2&&(Og(`tableCells`,i.tableCells)(`data`,i.sortedEmployees())(`trackByTableFn`,i.trackById)(`sort`,i.sort())(`multiSort`,!0),lI(2),rl$1(`Current sort: `,i.sortDescription()))},dependencies:[ve],encapsulation:2})}}return n})();var Sa=[{id:1,name:`Platform`},{id:2,name:`Product`}];var Fo=n=>!!n?.archived;var Nc=(()=>{class n{constructor(){this.lastChange=xe$3(void 0),this.employees=xe$3([{id:1,name:`John Smith`,hoursPerWeek:38,team:Sa[0],archived:!1},{id:2,name:`Lucie Martin`,hoursPerWeek:32,team:Sa[1],archived:!1},{id:3,name:`Rob Peeters`,hoursPerWeek:38,team:null,archived:!1},{id:4,name:`Sarah Jansen`,hoursPerWeek:20,team:Sa[0],archived:!0}]),this.tableCells=[{key:`name`,label:`Name`,cellEditor:wo,cellEditorOptions:{placeholder:`Enter a name`,disabled:Fo}},{key:`hoursPerWeek`,label:`Hours per week`,cellEditor:wo,cellEditorOptions:{type:`number`,disabled:Fo}},{key:`team`,label:`Team`,width:`200px`,cellFormatter:e=>e.team?.name??``,cellRenderer:Wl,cellEditor:Kl,cellEditorOptions:{options:Sa,optionLabelFn:e=>e.name,compareWithFn:(e,t)=>e?.id===t?.id,placeholder:`Select a team`,disabled:Fo}},{key:`archived`,label:`Archived`,cellFormatter:e=>e.archived?`Yes`:`No`}],this.trackById=(e,t)=>t.id}updateEmployee({row:e,cell:t,value:i}){let o=t.key;this.employees.update(r=>r.map(u=>u.id===e.id?Z$3(q$2({},u),{[o]:i}):u)),this.lastChange.set(`${e.name}: ${t.key} = ${JSON.stringify(i)}`)}static{this.ɵfac=function(t){return new(t||n)}}static{this.ɵcmp=NC({type:n,selectors:[[`lab900-table-inline-editing-example`]],decls:5,vars:4,consts:[[3,`cellValueChanged`,`tableCells`,`data`,`trackByTableFn`]],template:function(t,i){t&1&&(cs$1(0,`p`),yb$1(1,`Click a cell to edit it. Archived rows can't be edited.`),Ju$1(),cs$1(2,`lab900-table`,0),Ug(`cellValueChanged`,function(r){return i.updateEmployee(r)}),Ju$1(),cs$1(3,`p`),yb$1(4),Ju$1()),t&2&&(lI(2),Og(`tableCells`,i.tableCells)(`data`,i.employees())(`trackByTableFn`,i.trackById),lI(2),rl$1(`Last change: `,i.lastChange()??`-`))},dependencies:[ve],encapsulation:2})}}return n})();function Ub(n,a){n&1&&(cs$1(0,`h4`,4),yb$1(1,`Orders`),Ju$1())}function Qb(n,a){n&1&&(cs$1(0,`p`),yb$1(1,`Overdue orders have a red background. Click a row to see the row click event.`),Ju$1())}function Zb(n,a){n&1&&(cs$1(0,`div`)(1,`p`),yb$1(2,`No orders yet.`),Ju$1()())}var Ic=[{id:1001,customer:`John Smith`,status:`paid`,amount:120},{id:1002,customer:`Lucie Martin`,status:`open`,amount:75.5},{id:1003,customer:`Rob Peeters`,status:`overdue`,amount:310},{id:1004,customer:`Sarah Jansen, a customer name that is too long for the column`,status:`paid`,amount:42}];var Ec=(()=>{class n{constructor(){this.lastEvent=xe$3(void 0),this.orders=xe$3(Ic),this.headerActions=[{label:`Clear rows`,type:`stroked`,action:()=>this.orders.set([])},{label:`Restore rows`,type:`flat`,action:()=>this.orders.set(Ic)}],this.tableCells=[{key:`id`,label:`Order`,width:`80px`,footer:`Total`},{key:`customer`,label:`Customer`},{key:`status`,label:`Status`,cellClass:e=>`status-cell--${e.status}`},{key:`amount`,label:`Amount`,cellFormatter:e=>`\u20AC ${e.amount.toFixed(2)}`,footer:e=>`\u20AC ${e.reduce((t,i)=>t+i.amount,0).toFixed(2)}`}],this.rowClass=e=>`order-row--${e.status}`,this.onRowClick=e=>this.lastEvent.set(`Clicked order ${e.id}`),this.trackById=(e,t)=>t.id}static{this.ɵfac=function(t){return new(t||n)}}static{this.ɵcmp=NC({type:n,selectors:[[`lab900-table-custom-content-example`]],decls:6,vars:9,consts:[[3,`tableCells`,`data`,`trackByTableFn`,`tableHeaderActions`,`toggleAndMoveColumns`,`rowClass`,`maxColumnWidth`,`onRowClick`],[`style`,`margin: 0;`,4,`lab900TableHeaderContent`],[4,`lab900TableTopContent`],[4,`lab900TableEmpty`],[2,`margin`,`0`]],template:function(t,i){t&1&&(cs$1(0,`lab900-table`,0),Ig(1,Ub,2,0,`h4`,1)(2,Qb,2,0,`p`,2)(3,Zb,3,0,`div`,3),Ju$1(),cs$1(4,`p`),yb$1(5),Ju$1()),t&2&&(Og(`tableCells`,i.tableCells)(`data`,i.orders())(`trackByTableFn`,i.trackById)(`tableHeaderActions`,i.headerActions)(`toggleAndMoveColumns`,!0)(`rowClass`,i.rowClass)(`maxColumnWidth`,`200px`)(`onRowClick`,i.onRowClick),lI(5),rl$1(`Last event: `,i.lastEvent()??`-`))},dependencies:[ve,ti,ei,Jn],styles:[`[_nghost-%COMP%]     .order-row--overdue{background-color:#ff000014}[_nghost-%COMP%]     .status-cell--paid{color:green}`]})}}return n})();var Ac=(()=>{class n{constructor(){this.lastAction=xe$3(void 0),this.invoices=[{id:1,customer:`John Smith`,attachments:[`invoice.pdf`],paid:!0},{id:2,customer:`Lucie Martin`,attachments:[`invoice.pdf`,`reminder.pdf`],paid:!1},{id:3,customer:`Rob Peeters`,attachments:[],paid:!1}],this.tableCells=[{key:`id`,label:`Invoice`,width:`80px`},{key:`customer`,label:`Customer`},{key:`paid`,label:`Paid`,cellFormatter:e=>e.paid?`Yes`:`No`}],this.actionsFront=[{type:`icon`,label:`check_circle`,tooltip:{value:e=>e.paid?`Already paid`:`Mark as paid`},disabled:e=>e.paid,action:({data:e})=>this.lastAction.set(`Invoice ${e.id} marked as paid`)}],this.actionsBack=[{type:`icon`,label:`attach_file`,tooltip:{value:`Download an attachment`},hide:e=>e.attachments.length===0,subActions:e=>e.attachments.map(t=>({label:t,action:({data:i})=>this.lastAction.set(`Downloaded ${t} of invoice ${i.id}`)}))},{type:`icon`,label:`delete`,tooltip:{value:`Delete`},action:({data:e})=>this.lastAction.set(`Deleted invoice ${e.id}`)}],this.trackById=(e,t)=>t.id}static{this.ɵfac=function(t){return new(t||n)}}static{this.ɵcmp=NC({type:n,selectors:[[`lab900-table-row-actions-example`]],decls:3,vars:6,consts:[[3,`tableCells`,`data`,`trackByTableFn`,`tableActionsFront`,`tableActionsBack`]],template:function(t,i){t&1&&(kg(0,`lab900-table`,0),cs$1(1,`p`),yb$1(2),Ju$1()),t&2&&(Og(`tableCells`,i.tableCells)(`data`,i.invoices)(`trackByTableFn`,i.trackById)(`tableActionsFront`,i.actionsFront)(`tableActionsBack`,i.actionsBack),lI(2),rl$1(`Last action: `,i.lastAction()??`-`))},dependencies:[ve],encapsulation:2})}}return n})();var Rc=(()=>{class n{constructor(){this.employees=[{id:1,name:`John Smith`,external:!1},{id:2,name:`Lucie Martin`,external:!1},{id:3,name:`Rob Peeters`,external:!0},{id:4,name:`Sarah Jansen`,external:!1}],this.selectedNames=xe$3(this.employees[0].name),this.selectableRows={enabled:!0,position:`left`,showSelectAllCheckbox:!0,selectedItems:[this.employees[0]],compareFn:(e,t)=>e.id===t.id,hideSelectableRow:e=>e.external},this.tableCells=[{key:`name`,label:`Name`},{key:`external`,label:`External`,cellFormatter:e=>e.external?`Yes`:`No`}],this.trackById=(e,t)=>t.id}onSelectionChanged(e){this.selectedNames.set(e.selected.map(t=>t.name).join(`, `))}static{this.ɵfac=function(t){return new(t||n)}}static{this.ɵcmp=NC({type:n,selectors:[[`lab900-table-selection-example`]],decls:3,vars:5,consts:[[3,`selectionChanged`,`tableCells`,`data`,`trackByTableFn`,`selectableRows`]],template:function(t,i){t&1&&(cs$1(0,`lab900-table`,0),Ug(`selectionChanged`,function(r){return i.onSelectionChanged(r)}),Ju$1(),cs$1(1,`p`),yb$1(2),Ju$1()),t&2&&(Og(`tableCells`,i.tableCells)(`data`,i.employees)(`trackByTableFn`,i.trackById)(`selectableRows`,i.selectableRows),lI(2),rl$1(`Selected: `,i.selectedNames()||`none`))},dependencies:[ve],encapsulation:2})}}return n})();var Fc=(()=>{class n{constructor(){this.tasks=xe$3([{id:1,title:`Write the release notes`},{id:2,title:`Review the pull request`},{id:3,title:`Update the dependencies`},{id:4,title:`Deploy to production`}]),this.order=qe$3(()=>this.tasks().map(e=>e.id).join(`, `)),this.actions=[{type:`icon`,label:`drag_indicator`,tooltip:{value:`Move row`},draggable:!0}],this.tableCells=[{key:`id`,label:`ID`,width:`60px`},{key:`title`,label:`Task`}],this.trackById=(e,t)=>t.id}moveTask(e){this.tasks.update(t=>{let i=[...t];return Mn(i,e.previousIndex,e.currentIndex),i})}static{this.ɵfac=function(t){return new(t||n)}}static{this.ɵcmp=NC({type:n,selectors:[[`lab900-table-drag-and-drop-example`]],decls:3,vars:5,consts:[[3,`tableRowOrderChange`,`tableCells`,`data`,`trackByTableFn`,`tableActionsBack`]],template:function(t,i){t&1&&(cs$1(0,`lab900-table`,0),Ug(`tableRowOrderChange`,function(r){return i.moveTask(r)}),Ju$1(),cs$1(1,`p`),yb$1(2),Ju$1()),t&2&&(Og(`tableCells`,i.tableCells)(`data`,i.tasks())(`trackByTableFn`,i.trackById)(`tableActionsBack`,i.actions),lI(2),rl$1(`Order: `,i.order()))},dependencies:[ve],encapsulation:2})}}return n})();var Xb={employees:[{id:1,name:`John Smith`,team:`Platform`},{id:2,name:`Lucie Martin`,team:`Product`}],contractors:[{id:3,name:`Rob Peeters`,company:`Peeters BV`,hourlyRate:85},{id:4,name:`Sarah Jansen`,company:`Jansen Consulting`,hourlyRate:95}]};var Pc=(()=>{class n{constructor(){this.activeTab=xe$3(`employees`),this.people=qe$3(()=>Xb[this.activeTab()]),this.tableCells=[{key:`name`,label:`Name`},{key:`team`,label:`Team`}],this.tabs=[{id:`employees`,label:`Employees`},{id:`contractors`,label:`Contractors`,tableCells:[{key:`name`,label:`Name`},{key:`company`,label:`Company`},{key:`hourlyRate`,label:`Hourly rate`,cellFormatter:e=>`\u20AC ${e.hourlyRate}`}]}],this.trackById=(e,t)=>t.id}static{this.ɵfac=function(t){return new(t||n)}}static{this.ɵcmp=NC({type:n,selectors:[[`lab900-table-tabs-example`]],decls:1,vars:5,consts:[[3,`activeTabIdChange`,`tableCells`,`tableTabs`,`activeTabId`,`data`,`trackByTableFn`]],template:function(t,i){t&1&&(cs$1(0,`lab900-table`,0),um$1(`activeTabIdChange`,function(r){return Eb$1(i.activeTab,r)||(i.activeTab=r),r}),Ju$1()),t&2&&(Og(`tableCells`,i.tableCells)(`tableTabs`,i.tabs),cm$1(`activeTabId`,i.activeTab),Og(`data`,i.people())(`trackByTableFn`,i.trackById))},dependencies:[ve],encapsulation:2})}}return n})();var Kb=(n,a)=>a.product;function Yb(n,a){if(n&1&&(cs$1(0,`li`),yb$1(1),Ju$1()),n&2){let e=a.$implicit;lI(),sm$1(``,e.quantity,` x `,e.product)}}function Jb(n,a){if(n&1){let e=Vw();cs$1(0,`ul`),Ow(1,Yb,2,2,`li`,null,Kb),Ju$1(),cs$1(3,`button`,2),Ug(`click`,function(){let i=Wd$1(e).collapse;return qd$1(i())}),yb$1(4,`Close`),Ju$1()}if(n&2){let e=a.$implicit;lI(),kw(e.lines)}}var Oc=(()=>{class n{constructor(){this.table=Qj.required(ve),this.expandedRows=xe$3([]),this.orders=[{id:1,customer:`John`,lines:[{product:`Keyboard`,quantity:1},{product:`Mouse`,quantity:2}]},{id:2,customer:`Lucie`,lines:[{product:`Monitor`,quantity:2}]},{id:3,customer:`Rob`,lines:[]}],this.tableCells=[{key:`id`,label:`ID`,width:`50px`},{key:`customer`,label:`Customer`},{key:`lines`,label:`Lines`,cellFormatter:e=>String(e.lines.length)}],this.expandableRows={multiple:!0,isExpandable:e=>e.lines.length>0},this.tableActionsFront=[{type:`icon`,label:e=>this.expandedRows().includes(e)?`expand_less`:`expand_more`,hide:e=>e.lines.length===0,action:({data:e})=>this.table().toggleRowExpansion(e)}],this.trackById=(e,t)=>t.id}static{this.ɵfac=function(t){return new(t||n)}}static{this.ɵcmp=NC({type:n,selectors:[[`lab900-table-expandable-rows-example`]],viewQuery:function(t,i){t&1&&Yg(i.table,ve,5),t&2&&Zw()},decls:2,vars:7,consts:[[3,`expandedRowsChange`,`tableCells`,`data`,`trackByTableFn`,`tableActionsFront`,`expandableRows`,`expandedRows`],[`lab900TableRowDetail`,``,3,`lab900TableRowDetailOf`],[`type`,`button`,3,`click`]],template:function(t,i){t&1&&(cs$1(0,`lab900-table`,0),um$1(`expandedRowsChange`,function(r){return Eb$1(i.expandedRows,r)||(i.expandedRows=r),r}),Ig(1,Jb,5,0,`ng-template`,1),Ju$1()),t&2&&(Og(`tableCells`,i.tableCells)(`data`,i.orders)(`trackByTableFn`,i.trackById)(`tableActionsFront`,i.tableActionsFront)(`expandableRows`,i.expandableRows),cm$1(`expandedRows`,i.expandedRows),lI(),Og(`lab900TableRowDetailOf`,i.orders))},dependencies:[ve,ni],encapsulation:2})}}return n})();var Lc=(()=>{class n{constructor(){this.lastAction=xe$3(void 0),this.view=xe$3(`list`),this.exporting=xe$3(!1),this.viewToggle={label:`View`,type:`toggle`,hideSelectionIndicator:!0,subActions:[{label:`List`,selected:qe$3(()=>this.view()===`list`),action:()=>this.selectView(`list`)},{label:`Grid`,selected:qe$3(()=>this.view()===`grid`),action:()=>this.selectView(`grid`)},{label:`Map`,disabled:!0}]},this.exportMenu={label:`Export`,type:`flat`,suffixIcon:`keyboard_arrow_down`,disabled:this.exporting,subActions:[{label:qe$3(()=>this.exporting()?`Exporting...`:`Export as PDF (keeps the menu open)`),keepMenuOpen:!0,action:({actionRef:e})=>{this.exporting.set(!0),setTimeout(()=>{this.exporting.set(!1),this.lastAction.set(`Exported as PDF`),e.close()},2e3)}},{label:`Export as CSV`,action:()=>this.lastAction.set(`Exported as CSV`)}]}}selectView(e){this.view.set(e),this.lastAction.set(`Switched to ${e} view`)}static{this.ɵfac=function(t){return new(t||n)}}static{this.ɵcmp=NC({type:n,selectors:[[`lab900-action-button-example`]],decls:8,vars:3,consts:[[3,`action`]],template:function(t,i){t&1&&(cs$1(0,`h4`),yb$1(1,`Toggle group`),Ju$1(),kg(2,`lab900-action-button`,0),cs$1(3,`h4`),yb$1(4,`Button with a menu`),Ju$1(),kg(5,`lab900-action-button`,0),cs$1(6,`p`),yb$1(7),Ju$1()),t&2&&(lI(2),Og(`action`,i.viewToggle),lI(3),Og(`action`,i.exportMenu),lI(2),rl$1(`Last action: `,i.lastAction()??`-`))},dependencies:[Ft],styles:[`h4[_ngcontent-%COMP%]{margin:24px 0 8px}h4[_ngcontent-%COMP%]:first-child{margin-top:0}`]})}}return n})();var Wc=[{path:``,loadComponent:()=>import(`./chunk-CwRlqxbI.js`),data:{config:xa,nav:ya()}},{path:`getting-started`,loadComponent:()=>import(`./chunk-Cfg390zw.js`),data:{filePath:`guides/getting-started.md`}},{path:`ai-agents`,loadComponent:()=>import(`./chunk-Cfg390zw.js`),data:{filePath:`guides/AGENTS.md`}},{path:`changelog`,loadComponent:()=>import(`./chunk-Cfg390zw.js`),data:{filePath:`CHANGELOG.md`}},new Nt(`buttons`,`Buttons`,[new Re(Tc,`Buttons`,`Every button type, with an icon and disabled. Clicks are throttled, 500 ms by default (throttleTimeInMs).`),new Re(Lc,`Action buttons`,`A config object instead of inputs. Every field accepts a value, a function of the data, or a signal.`)],void 0,[{title:`Components`,description:`Use lab900-button for one button with inputs, lab900-action-button for a button from a config object.`,symbols:[`Lab900ButtonComponent`,`Lab900ActionButtonComponent`,`Lab900ActionButtonToggleComponent`]},{title:`Configuration`,description:`An ActionButton configures one action button. The page header and the table take lists of them.`,symbols:[`ActionButton`,`ActionButtonEvent`,`Lab900ButtonType`]},{title:`Directives`,description:`The building blocks of the buttons, for your own elements.`,symbols:[`Lab900ActionDirective`,`PreventDoubleClickDirective`]}]),new Nt(`alerts`,`Alerts`,[new Re(yc,`Alerts`,`The four alert types. The content is projected.`)],void 0,[{title:`Component`,symbols:[`AlertComponent`]},{title:`Types`,symbols:[`Alert`]}]),new Nt(`nav-list`,`Nav list`,[new Re(Cc,`Nav list`,`Routes, external links, nested levels, and how routeMatchOptions decides which item is active.`)],void 0,[{title:`Components`,symbols:[`Lab900NavListComponent`,`IconComponent`]},{title:`Configuration`,description:`The list takes groups; a group holds items, and an item can hold more items.`,symbols:[`NavItemGroup`,`NavItem`,`Icon`]}]),new Nt(`table`,`Table`,[new Re(wc,`Basic table`,`The minimum: tableCells for the columns, data, and trackByTableFn. Nested keys and cellFormatter.`),new Re(Mc,`Sorting`,`Sortable columns with multiSort. The table emits sortChange; you sort the data.`),new Re(Nc,`Inline editing`,`Input and select editors per column, disabled per row. The table emits cellValueChanged; you save the value.`),new Re(Ec,`Custom content and styling`,`Header actions, content slots, an empty state, row and cell classes, footers and row clicks.`),new Re(Ac,`Row actions`,`Actions at the start and end of each row, with a tooltip, state and sub actions per row.`),new Re(Rc,`Selectable rows`,`Checkboxes with select all, an initial selection, and rows that cannot be selected.`),new Re(Fc,`Drag and drop rows`,`A draggable row action turns on drag and drop. The table emits tableRowOrderChange; you reorder the data.`),new Re(Pc,`Tabs`,`Tabs above the table, one with its own columns. Bind activeTabId to load the data of the tab.`),new Re(Oc,`Expandable rows`,`A lab900TableRowDetail template below a row. Click a row to expand it; bind expandedRows to control it.`)],void 0,[{title:`Component`,description:`The table itself. Only tableCells, data and trackByTableFn are needed; everything else is optional.`,symbols:[`Lab900TableComponent`]},{title:`Configuration`,description:`The objects you pass to the table inputs. A TableCell configures one column.`,symbols:[`TableCell`,`TableCellTooltip`,`TableRowAction`,`SelectableRows`,`ExpandableRows`,`Lab900TableTab`,`Lab900Sort`,`CellValueChangeEvent`]},{title:`Content slots`,description:"Structural directives for your own content. Put one on an element inside lab900-table, for example `<h4 *lab900TableHeaderContent>Orders</h4>`.",symbols:[`Lab900TableHeaderContentDirective`,`Lab900TableTopContentDirective`,`Lab900TableLeftFooterDirective`,`Lab900TableEmptyDirective`,`Lab900TableDisabledDirective`,`Lab900TableRowDetailDirective`,`Lab900TableRowDetailContext`]},{title:`Cell renderers`,description:`Change how a cell looks. Set them per column in the TableCell.`,usage:{classKey:`cellRenderer`,optionsKey:`cellRenderOptions`},symbols:[`DefaultCellRendererComponent`,`CellWithIconRendererComponent`,`CellWithAnchorRendererComponent`,`CheckboxCellRendererComponent`,`CellWithClearingRendererComponent`]},{title:`Cell editors`,description:`Make a cell editable inline. The table emits cellValueChanged when the value changes.`,usage:{classKey:`cellEditor`,optionsKey:`cellEditorOptions`},symbols:[`CellInputEditorComponent`,`CellSelectEditorComponent`,`CellDateEditorComponent`]},{title:`Header renderers`,description:`Change how a column header looks. Set them per column in the TableCell.`,usage:{classKey:`headerRenderer`,optionsKey:`headerRenderOptions`},symbols:[`DefaultColumnHeaderRendererComponent`,`ColumnHeaderWithIconRendererComponent`]},{title:`Custom renderers and editors`,description:`Extend one of these to write your own. The table sets the inputs; you only render them.`,symbols:[`CellRendererAbstract`,`CellEditorAbstract`,`ColumnHeaderRendererAbstract`,`CellEditorBaseOptions`]}]),new Nt(`page-header`,`Page header`,[new Re(kc,`Page header`,`A title, breadcrumbs built from data, tabs and actions. The tabs need a mat-tab-nav-panel.`),new Re(Sc,`Page header actions`,`Actions aligned left and right, an icon action and an action with a menu.`)],void 0,[{title:`Component`,description:`The actions are ActionButton configs, documented on the Buttons page.`,symbols:[`Lab900PageHeaderComponent`]},{title:`Configuration`,symbols:[`PageHeaderNavItem`,`BreadCrumb`]},{title:`Building blocks`,description:`The page header renders these itself. Use them on their own for a custom header.`,symbols:[`BreadCrumbsComponent`,`PageHeaderNavItemComponent`]}]),new Nt(`merger`,`Merger`,[new Re(Dc,`Merger`,`Compare two objects and pick values from the other side. The schema sets one row per property.`)],void 0,[{title:`Component`,symbols:[`Lab900MergerComponent`]},{title:`Configuration`,description:`Two MergeObjects to compare, and a schema of MergeConfigs: one row per config.`,symbols:[`MergeObject`,`MergeConfig`,`MergeConfigBase`]},{title:`Custom components`,description:"Set `component` in a MergeConfig to show a row with your own component.",symbols:[`MergerItemComponent`]},{title:`Building blocks`,description:`The merger renders one per side of each row. Use it on its own for a custom merger layout.`,symbols:[`Lab900MergerItemComponent`]}])];Xr.production;function eg(n){return new Ca(n,`./assets/i18n/`,`.json`)}gr$1(ac,{providers:[eV(),Vr(zr$1()),Ao$1(Wc),pr(),oc(),Pn$2({loader:{provide:H$3,useFactory:eg,deps:[Ye$3]},lang:`en`,fallbackLang:`en`})]}).catch(n=>console.error(n));export{W as a,xn$4 as c,Mt$2 as i,Y$3 as l,de as n,ki$1 as o,yr as r,Yo as s,Fe as t};