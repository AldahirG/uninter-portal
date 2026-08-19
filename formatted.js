import{
c as K,
X as re,
N as ce
}
from"./DnlOrqc8.js";
import{
B as W,
f as N,
c,
o,
a,
p as de,
b as m,
u as b,
F as A,
i as k,
j as M,
m as D,
t as f,
_ as B,
d as v,
D as Z,
r as w,
A as ee,
n as Y,
e as ue,
w as Q,
z as me,
l as pe
}
from"./CeenGvn5.js";
import{
_ as fe
}
from"./CqGuVr5c.js";
import{
B as ie
}
from"./D2fMBt6K.js";
import{
I as he
}
from"./Cp_bgkrF.js";
import{
G as ne
}
from"./mLg7QB8O.js";
import{
A as le
}
from"./B78hwE-p.js";
import{
U as be
}
from"./qCrSjVLI.js";
import{
G as H
}
from"./7iuqPrzW.js";
import{
S as _e
}
from"./DsX-D-gS.js";
import{
T as ae
}
from"./D7MdnulQ.js";
import{
b as ge,
c as ve,
m as S,
d as ye,
s as se,
f as Ce,
h as te,
F as Ie,
S as xe,
A as $e,
a as Ae,
C as ke
}
from"./Y2PH_RSd.js";
import{
A as X
}
from"./DOCRVelJ.js";
import{
C as Ee,
B as Le
}
from"./DLdEkcVW.js";
import{
P as Se
}
from"./BtSRnw0v.js";
import{
C as De
}
from"./du3ZlEw-.js";
import{
C as Me
}
from"./BUqC1F2J.js";
import{
F as Ne
}
from"./BNzd0g-N.js";
import{
P as Pe
}
from"./CnHWOdk8.js";
import{
F as Be
}
from"./2OTv_yF9.js";
import{
u as Re
}
from"./BPinr-cV.js";
import"./Cj6fDkGX.js";
import"./Bc28Z8Nl.js";
const ze=K("briefcase-business",
[["path",
{
d:"M12 12h.01",
key:"1mp3jc"
}
],
["path",
{
d:"M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2",
key:"1ksdt3"
}
],
["path",
{
d:"M22 13a18.15 18.15 0 0 1-20 0",
key:"12hx5q"
}
],
["rect",
{
width:"20",
height:"14",
x:"2",
y:"6",
rx:"2",
key:"i6l2r4"
}
]]);
const Oe=K("building-2",
[["path",
{
d:"M10 12h4",
key:"a56b0p"
}
],
["path",
{
d:"M10 8h4",
key:"1sr2af"
}
],
["path",
{
d:"M14 21v-3a2 2 0 0 0-4 0v3",
key:"1rgiei"
}
],
["path",
{
d:"M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2",
key:"secmi2"
}
],
["path",
{
d:"M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16",
key:"16ra0t"
}
]]);
const Te=K("palette",
[["path",
{
d:"M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z",
key:"e79jfc"
}
],
["circle",
{
cx:"13.5",
cy:"6.5",
r:".5",
fill:"currentColor",
key:"1okk4w"
}
],
["circle",
{
cx:"17.5",
cy:"10.5",
r:".5",
fill:"currentColor",
key:"f64h9f"
}
],
["circle",
{
cx:"6.5",
cy:"12.5",
r:".5",
fill:"currentColor",
key:"qy21gx"
}
],
["circle",
{
cx:"8.5",
cy:"7.5",
r:".5",
fill:"currentColor",
key:"fotxhn"
}
]]);
function Ue(e,
_,
d,
n){
return e.params.createElements&&Object.keys(n).forEach(i=>{
if(!d[i]&&d.auto===!0){
let r=ge(e.el,
`.${
n[i]
}
`)[0];
r||(r=ve("div",
n[i]),
r.className=n[i],
e.el.append(r)),
d[i]=r,
_[i]=r
}

}
),
d
}
function U(e=""){
return`.${
e.trim().replace(/([\.:!+\/()[\]#>~*^$|=,
'"@{

}
\\])/g,
"\\$1").replace(/ /g,
".")
}
`
}
function Fe({
swiper:e,
extendParams:_,
on:d,
emit:n
}
){
const i="swiper-pagination";
_({
pagination:{
el:null,
bulletElement:"span",
clickable:!1,
hideOnClick:!1,
renderBullet:null,
renderProgressbar:null,
renderFraction:null,
renderCustom:null,
progressbarOpposite:!1,
type:"bullets",
dynamicBullets:!1,
dynamicMainBullets:1,
formatFractionCurrent:s=>s,
formatFractionTotal:s=>s,
bulletClass:`${
i
}
-bullet`,
bulletActiveClass:`${
i
}
-bullet-active`,
modifierClass:`${
i
}
-`,
currentClass:`${
i
}
-current`,
totalClass:`${
i
}
-total`,
hiddenClass:`${
i
}
-hidden`,
progressbarFillClass:`${
i
}
-progressbar-fill`,
progressbarOppositeClass:`${
i
}
-progressbar-opposite`,
clickableClass:`${
i
}
-clickable`,
lockClass:`${
i
}
-lock`,
horizontalClass:`${
i
}
-horizontal`,
verticalClass:`${
i
}
-vertical`,
paginationDisabledClass:`${
i
}
-disabled`
}

}
),
e.pagination={
el:null,
bullets:[]
}
;
let r,
C=0;
function p(){
return!e.params.pagination.el||!e.pagination.el||Array.isArray(e.pagination.el)&&e.pagination.el.length===0
}
function R(s,
t){
const{
bulletActiveClass:l
}
=e.params.pagination;
s&&(s=s[`${
t==="prev"?"previous":"next"
}
ElementSibling`],
s&&(s.classList.add(`${
l
}
-${
t
}
`),
s=s[`${
t==="prev"?"previous":"next"
}
ElementSibling`],
s&&s.classList.add(`${
l
}
-${
t
}
-${
t
}
`)))
}
function F(s,
t,
l){
if(s=s%l,
t=t%l,
t===s+1)return"next";
if(t===s-1)return"previous"
}
function j(s){
const t=s.target.closest(U(e.params.pagination.bulletClass));
if(!t)return;
s.preventDefault();
const l=te(t)*e.params.slidesPerGroup;
if(e.params.loop){
if(e.realIndex===l)return;
const u=F(e.realIndex,
l,
e.slides.length);
u==="next"?e.slideNext():u==="previous"?e.slidePrev():e.slideToLoop(l)
}
else e.slideTo(l)
}
function E(){
const s=e.rtl,
t=e.params.pagination;
if(p())return;
let l=e.pagination.el;
l=S(l);
let u,
x;
const P=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.slides.length,
V=e.params.loop?Math.ceil(P/e.params.slidesPerGroup):e.snapGrid.length;
if(e.params.loop?(x=e.previousRealIndex||0,
u=e.params.slidesPerGroup>1?Math.floor(e.realIndex/e.params.slidesPerGroup):e.realIndex):typeof e.snapIndex<"u"?(u=e.snapIndex,
x=e.previousSnapIndex):(x=e.previousIndex||0,
u=e.activeIndex||0),
t.type==="bullets"&&e.pagination.bullets&&e.pagination.bullets.length>0){
const h=e.pagination.bullets;
let L,
$,
T;
if(t.dynamicBullets&&(r=Ce(h[0],
e.isHorizontal()?"width":"height"),
l.forEach(g=>{
g.style[e.isHorizontal()?"width":"height"]=`${
r*(t.dynamicMainBullets+4)
}
px`
}
),
t.dynamicMainBullets>1&&x!==void 0&&(C+=u-(x||0),
C>t.dynamicMainBullets-1?C=t.dynamicMainBullets-1:C<0&&(C=0)),
L=Math.max(u-C,
0),
$=L+(Math.min(h.length,
t.dynamicMainBullets)-1),
T=($+L)/2),
h.forEach(g=>{
const y=[...["",
"-next",
"-next-next",
"-prev",
"-prev-prev",
"-main"].map(I=>`${
t.bulletActiveClass
}
${
I
}
`)].map(I=>typeof I=="string"&&I.includes(" ")?I.split(" "):I).flat();
g.classList.remove(...y)
}
),
l.length>1)h.forEach(g=>{
const y=te(g);
y===u?g.classList.add(...t.bulletActiveClass.split(" ")):e.isElement&&g.setAttribute("part",
"bullet"),
t.dynamicBullets&&(y>=L&&y<=$&&g.classList.add(...`${
t.bulletActiveClass
}
-main`.split(" ")),
y===L&&R(g,
"prev"),
y===$&&R(g,
"next"))
}
);
else{
const g=h[u];
if(g&&g.classList.add(...t.bulletActiveClass.split(" ")),
e.isElement&&h.forEach((y,
I)=>{
y.setAttribute("part",
I===u?"bullet-active":"bullet")
}
),
t.dynamicBullets){
const y=h[L],
I=h[$];
for(let O=L;
O<=$;
O+=1)h[O]&&h[O].classList.add(...`${
t.bulletActiveClass
}
-main`.split(" "));
R(y,
"prev"),
R(I,
"next")
}

}
if(t.dynamicBullets){
const g=Math.min(h.length,
t.dynamicMainBullets+4),
y=(r*g-r)/2-T*r,
I=s?"right":"left";
h.forEach(O=>{
O.style[e.isHorizontal()?I:"top"]=`${
y
}
px`
}
)
}

}
l.forEach((h,
L)=>{
if(t.type==="fraction"&&(h.querySelectorAll(U(t.currentClass)).forEach($=>{
$.textContent=t.formatFractionCurrent(u+1)
}
),
h.querySelectorAll(U(t.totalClass)).forEach($=>{
$.textContent=t.formatFractionTotal(V)
}
)),
t.type==="progressbar"){
let $;
t.progressbarOpposite?$=e.isHorizontal()?"vertical":"horizontal":$=e.isHorizontal()?"horizontal":"vertical";
const T=(u+1)/V;
let g=1,
y=1;
$==="horizontal"?g=T:y=T,
h.querySelectorAll(U(t.progressbarFillClass)).forEach(I=>{
I.style.transform=`translate3d(0,
0,
0) scaleX(${
g
}
) scaleY(${
y
}
)`,
I.style.transitionDuration=`${
e.params.speed
}
ms`
}
)
}
t.type==="custom"&&t.renderCustom?(se(h,
t.renderCustom(e,
u+1,
V)),
L===0&&n("paginationRender",
h)):(L===0&&n("paginationRender",
h),
n("paginationUpdate",
h)),
e.params.watchOverflow&&e.enabled&&h.classList[e.isLocked?"add":"remove"](t.lockClass)
}
)
}
function z(){
const s=e.params.pagination;
if(p())return;
const t=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.grid&&e.params.grid.rows>1?e.slides.length/Math.ceil(e.params.grid.rows):e.slides.length;
let l=e.pagination.el;
l=S(l);
let u="";
if(s.type==="bullets"){
let x=e.params.loop?Math.ceil(t/e.params.slidesPerGroup):e.snapGrid.length;
e.params.freeMode&&e.params.freeMode.enabled&&x>t&&(x=t);
for(let P=0;
P<x;
P+=1)s.renderBullet?u+=s.renderBullet.call(e,
P,
s.bulletClass):u+=`<${
s.bulletElement
}
 ${
e.isElement?'part="bullet"':""
}
 class="${
s.bulletClass
}
"></${
s.bulletElement
}
>`
}
s.type==="fraction"&&(s.renderFraction?u=s.renderFraction.call(e,
s.currentClass,
s.totalClass):u=`<span class="${
s.currentClass
}
"></span> / <span class="${
s.totalClass
}
"></span>`),
s.type==="progressbar"&&(s.renderProgressbar?u=s.renderProgressbar.call(e,
s.progressbarFillClass):u=`<span class="${
s.progressbarFillClass
}
"></span>`),
e.pagination.bullets=[],
l.forEach(x=>{
s.type!=="custom"&&se(x,
u||""),
s.type==="bullets"&&e.pagination.bullets.push(...x.querySelectorAll(U(s.bulletClass)))
}
),
s.type!=="custom"&&n("paginationRender",
l[0])
}
function q(){
e.params.pagination=Ue(e,
e.originalParams.pagination,
e.params.pagination,
{
el:"swiper-pagination"
}
);
const s=e.params.pagination;
if(!s.el)return;
let t;
typeof s.el=="string"&&e.isElement&&(t=e.el.querySelector(s.el)),
!t&&typeof s.el=="string"&&(t=[...document.querySelectorAll(s.el)]),
t||(t=s.el),
!(!t||t.length===0)&&(e.params.uniqueNavElements&&typeof s.el=="string"&&Array.isArray(t)&&t.length>1&&(t=[...e.el.querySelectorAll(s.el)],
t.length>1&&(t=t.find(l=>ye(l,
".swiper")[0]===e.el))),
Array.isArray(t)&&t.length===1&&(t=t[0]),
Object.assign(e.pagination,
{
el:t
}
),
t=S(t),
t.forEach(l=>{
s.type==="bullets"&&s.clickable&&l.classList.add(...(s.clickableClass||"").split(" ")),
l.classList.add(s.modifierClass+s.type),
l.classList.add(e.isHorizontal()?s.horizontalClass:s.verticalClass),
s.type==="bullets"&&s.dynamicBullets&&(l.classList.add(`${
s.modifierClass
}
${
s.type
}
-dynamic`),
C=0,
s.dynamicMainBullets<1&&(s.dynamicMainBullets=1)),
s.type==="progressbar"&&s.progressbarOpposite&&l.classList.add(s.progressbarOppositeClass),
s.clickable&&l.addEventListener("click",
j),
e.enabled||l.classList.add(s.lockClass)
}
))
}
function G(){
const s=e.params.pagination;
if(p())return;
let t=e.pagination.el;
t&&(t=S(t),
t.forEach(l=>{
l.classList.remove(s.hiddenClass),
l.classList.remove(s.modifierClass+s.type),
l.classList.remove(e.isHorizontal()?s.horizontalClass:s.verticalClass),
s.clickable&&(l.classList.remove(...(s.clickableClass||"").split(" ")),
l.removeEventListener("click",
j))
}
)),
e.pagination.bullets&&e.pagination.bullets.forEach(l=>l.classList.remove(...s.bulletActiveClass.split(" ")))
}
d("changeDirection",
()=>{
if(!e.pagination||!e.pagination.el)return;
const s=e.params.pagination;
let{
el:t
}
=e.pagination;
t=S(t),
t.forEach(l=>{
l.classList.remove(s.horizontalClass,
s.verticalClass),
l.classList.add(e.isHorizontal()?s.horizontalClass:s.verticalClass)
}
)
}
),
d("init",
()=>{
e.params.pagination.enabled===!1?J():(q(),
z(),
E())
}
),
d("activeIndexChange",
()=>{
typeof e.snapIndex>"u"&&E()
}
),
d("snapIndexChange",
()=>{
E()
}
),
d("snapGridLengthChange",
()=>{
z(),
E()
}
),
d("destroy",
()=>{
G()
}
),
d("enable disable",
()=>{
let{
el:s
}
=e.pagination;
s&&(s=S(s),
s.forEach(t=>t.classList[e.enabled?"remove":"add"](e.params.pagination.lockClass)))
}
),
d("lock unlock",
()=>{
E()
}
),
d("click",
(s,
t)=>{
const l=t.target,
u=S(e.pagination.el);
if(e.params.pagination.el&&e.params.pagination.hideOnClick&&u&&u.length>0&&!l.classList.contains(e.params.pagination.bulletClass)){
if(e.navigation&&(e.navigation.nextEl&&l===e.navigation.nextEl||e.navigation.prevEl&&l===e.navigation.prevEl))return;
const x=u[0].classList.contains(e.params.pagination.hiddenClass);
n(x===!0?"paginationShow":"paginationHide"),
u.forEach(P=>P.classList.toggle(e.params.pagination.hiddenClass))
}

}
);
const oe=()=>{
e.el.classList.remove(e.params.pagination.paginationDisabledClass);
let{
el:s
}
=e.pagination;
s&&(s=S(s),
s.forEach(t=>t.classList.remove(e.params.pagination.paginationDisabledClass))),
q(),
z(),
E()
}
,
J=()=>{
e.el.classList.add(e.params.pagination.paginationDisabledClass);
let{
el:s
}
=e.pagination;
s&&(s=S(s),
s.forEach(t=>t.classList.add(e.params.pagination.paginationDisabledClass))),
G()
}
;
Object.assign(e.pagination,
{
enable:oe,
disable:J,
render:z,
update:E,
init:q,
destroy:G
}
)
}
const je=W("/images/hero/blur/2.jpg"),
qe={
class:"banner-hero-wrapper"
}
,
He={
class:"banner-section"
}
,
Ge={
class:"banner-slide"
}
,
Ve={
class:"banner-content uninter-container"
}
,
Ye={
class:"banner-inner"
}
,
Qe={
class:"banner-ctas"
}
,
Xe={
href:"#oferta-educativa",
class:"banner-btn banner-btn--stacked"
}
,
Ke={
href:"#formulario-registro",
class:"banner-btn banner-btn--stacked"
}
,
We={
class:"banner-stats-bar"
}
,
Ze={
class:"uninter-container banner-stats__inner"
}
,
Je={
class:"banner-stat__icon"
}
,
we={
class:"banner-stat__text"
}
,
ea={
class:"banner-stat__value"
}
,
aa={
class:"banner-stat__label"
}
,
sa=N({
__name:"HeroBanner",
setup(e){
const _=[{
value:"23",
label:"Licenciaturas",
icon:"GraduationCap"
}
,
{
value:"40+",
label:"Años de excelencia",
icon:"Award"
}
,
{
value:"71,
000+",
label:"Egresados",
icon:"Users"
}
,
{
value:"130+",
label:"Universidades aliadas",
icon:"Globe"
}
];
return(d,
n)=>(o(),
c("div",
qe,
[a("section",
He,
[a("div",
Ge,
[n[3]||(n[3]=a("img",
{
src:je,
alt:"Licenciaturas Presenciales UNINTER",
class:"banner-slide__img"
}
,
null,
-1)),
n[4]||(n[4]=a("div",
{
class:"banner-slide__overlay"
}
,
null,
-1)),
n[5]||(n[5]=a("div",
{
class:"banner-slide__overlay2"
}
,
null,
-1)),
a("div",
Ve,
[a("div",
Ye,
[n[2]||(n[2]=de('<div class="banner-eyebrow" data-v-5a0e54da><img src="'+fe+'" alt="UNINTER" class="banner-logo-full" data-v-5a0e54da></div><h1 class="banner-title" data-v-5a0e54da> Inicia tu proceso<br data-v-5a0e54da><span class="banner-title__accent" data-v-5a0e54da>de admisión</span></h1><p class="banner-subtitle" data-v-5a0e54da> Forma parte de una comunidad universitaria multicultural,
 con más de 40 años preparando profesionistas de excelencia. </p>',
3)),
a("div",
Qe,
[a("a",
Xe,
[m(b(ie),
{
size:24
}
),
n[0]||(n[0]=a("span",
null,
"Programas Disponibles",
-1))]),
a("a",
Ke,
[m(b(he),
{
size:24
}
),
n[1]||(n[1]=a("span",
null,
"Solicita Información",
-1))])])])])])]),
a("div",
We,
[a("div",
Ze,
[(o(),
c(A,
null,
k(_,
i=>a("div",
{
key:i.label,
class:"banner-stat"
}
,
[a("div",
Je,
[i.icon==="GraduationCap"?(o(),
M(b(ne),
{
key:0,
size:"28"
}
)):i.icon==="Award"?(o(),
M(b(le),
{
key:1,
size:"28"
}
)):i.icon==="Users"?(o(),
M(b(be),
{
key:2,
size:"28"
}
)):i.icon==="Globe"?(o(),
M(b(H),
{
key:3,
size:"28"
}
)):D("",
!0)]),
a("div",
we,
[a("span",
ea,
f(i.value),
1),
a("span",
aa,
f(i.label),
1)])])),
64))])])]))
}

}
),
ta=Object.assign(B(sa,
[["__scopeId",
"data-v-5a0e54da"]]),
{
__name:"LicPreseHeroBanner"
}
),
ia={
class:"welcome-section"
}
,
na={
class:"uninter-container"
}
,
la={
class:"welcome-top"
}
,
oa={
class:"welcome-pillars"
}
,
ra={
class:"pillar-num"
}
,
ca={
class:"pillar-title"
}
,
da={
class:"pillar-desc"
}
,
ua={
class:"welcome-stats"
}
,
ma={
class:"stat-card__icon"
}
,
pa={
class:"stat-card__value"
}
,
fa={
class:"stat-card__label"
}
,
ha=N({
__name:"History",
setup(e){
const _=[{
icon:_e,
value:"1980",
label:"Año de fundación"
}
,
{
icon:ne,
value:"71,
000+",
label:"Egresados mexicanos y extranjeros"
}
,
{
icon:H,
value:"130+",
label:"Universidades aliadas en el mundo"
}
,
{
icon:Oe,
value:"25",
label:"Países representados en campus"
}
],
d=[{
title:"Formación internacional",
desc:"Idiomas curriculares,
 materias en inglés y francés,
 y certificaciones internacionales incluidas en tu licenciatura."
}
,
{
title:"Conexión profesional",
desc:"Más de 1,
500 convenios empresariales para prácticas profesionales desde el primer año."
}
,
{
title:"Garantía de calidad",
desc:"Certificación ISO 9001:2015,
 acreditación FIMPES y más de 40 años en rankings de las mejores universidades."
}
];
return(n,
i)=>(o(),
c("section",
ia,
[a("div",
na,
[i[1]||(i[1]=a("div",
{
class:"section-eyebrow"
}
,
[a("span",
{
class:"eyebrow-line"
}
),
v(" COMUNIDAD UNINTER ")],
-1)),
a("div",
la,
[i[0]||(i[0]=a("div",
{
class:"welcome-text"
}
,
[a("h2",
{
class:"section-title"
}
,
[v(" Bienvenido a la"),
a("br"),
a("span",
{
class:"title-highlight"
}
,
"comunidad UNINTER")]),
a("p",
{
class:"section-desc"
}
,
[v(" Desde 1980,
 formamos profesionistas con conocimientos sólidos,
 pensamiento creativo y visión global. Únete a más de "),
a("strong",
null,
"71,
000 egresados mexicanos y extranjeros"),
v(" que hoy son líderes en sus industrias. ")])],
-1)),
a("div",
oa,
[(o(),
c(A,
null,
k(d,
(r,
C)=>a("div",
{
key:C,
class:"pillar-item"
}
,
[a("span",
ra,
"0"+f(C+1),
1),
a("div",
null,
[a("p",
ca,
f(r.title),
1),
a("p",
da,
f(r.desc),
1)])])),
64))])]),
a("div",
ua,
[(o(),
c(A,
null,
k(_,
r=>a("div",
{
key:r.label,
class:"stat-card"
}
,
[a("div",
ma,
[(o(),
M(Z(r.icon),
{
size:22
}
))]),
a("p",
pa,
f(r.value),
1),
a("p",
fa,
f(r.label),
1)])),
64))])])]))
}

}
),
ba=Object.assign(B(ha,
[["__scopeId",
"data-v-d5d4023c"]]),
{
__name:"LicPreseHistory"
}
),
_a=W("/images/oferta/ARQHOR.jpg"),
ga=W("/images/oferta/ARQ.jpg"),
va={
id:"oferta-educativa",
class:"oe-section uninter-section"
}
,
ya={
class:"uninter-container"
}
,
Ca={
class:"oe-grid"
}
,
Ia={
class:"oe-card__content-wrapper"
}
,
xa={
class:"oe-card__title"
}
,
$a={
class:"oe-card__list"
}
,
Aa=["onClick"],
ka={
class:"oe-card__text"
}
,
Ea={
key:0,
class:"oe-badge-excellence"
}
,
La={
key:0,
class:"oe-drawer-banner"
}
,
Sa={
class:"oe-drawer-header"
}
,
Da={
key:0,
class:"oe-drawer-badge"
}
,
Ma={
class:"oe-detail-title"
}
,
Na={
class:"oe-detail-desc"
}
,
Pa={
key:0,
class:"oe-drawer-mid-media"
}
,
Ba={
class:"oe-detail-actions"
}
,
Ra=["href"],
za=["href"],
Oa=N({
__name:"EducativeOfert",
setup(e){
const _=[{
title:"LICENCIATURAS EN CIENCIAS SOCIALES Y HUMANIDADES",
bachelors:[{
title:"Comunicacion (LCO)",
href:"/carreras/comunicacion",
trophy:!0,
brochure:"https://uninter.edu.mx/folletos/lco/"
}
,
{
title:"Comunicación y Relaciones Públicas (CORP)",
href:"/carreras/comunicacion-y-relaciones-publicas",
trophy:!0,
brochure:"https://uninter.edu.mx/folletos/corp/"
}
,
{
title:"Relaciones Internacionales (LRI)",
href:"/carreras/relaciones-internacionales",
trophy:!0,
brochure:"https://uninter.edu.mx/folletos/lri/"
}
,
{
title:"Relaciones Internacionales y Ciencias Politicas (RICP)",
href:"/carreras/relaciones-internacionales-y-ciencias-politicas",
trophy:!0,
brochure:"https://uninter.edu.mx/folletos/ricp/"
}
,
{
title:"Relaciones Internacionales y Economía (RIEC)",
href:"/carreras/relaciones-internacionales-y-economia",
trophy:!0,
brochure:"https://uninter.edu.mx/folletos/riec/"
}
,
{
title:"Ciencias Politicas y Gestión Pública (LCP)",
href:"/carreras/ciencias-politicas-y-gestion-publica",
brochure:"https://uninter.edu.mx/folletos/lcp/"
}
,
{
title:"Derecho (LED)",
href:"/carreras/derecho",
brochure:"https://uninter.edu.mx/folletos/led/"
}
,
{
title:"Idiomas (LID)",
href:"/carreras/idiomas",
brochure:"https://uninter.edu.mx/folletos/lid/"
}
,
{
title:"Pedagogía (LPE)",
href:"/carreras/pedagogia",
brochure:"https://uninter.edu.mx/folletos/lpe/"
}
,
{
title:"Psicología (LPS)",
href:"/carreras/psicologia",
brochure:"https://uninter.edu.mx/folletos/lps/"
}
]
}
,
{
title:"LICENCIATURAS EN NEGOCIOS Y ADMINISTRACIÓN",
bachelors:[{
title:"Administración de Empresas (LAE)",
href:"/carreras/administracion-de-empresas",
trophy:!0,
brochure:"https://uninter.edu.mx/folletos/lae/"
}
,
{
title:"Administración de Empresas Turísticas (LAET)",
href:"/carreras/administracion-de-empresas-turisticas",
trophy:!0,
brochure:"https://uninter.edu.mx/folletos/laet/"
}
,
{
title:"Administración de Negocios Internacionales (LANI)",
href:"/carreras/administracion-de-negocios-internacionales",
trophy:!0,
brochure:"https://uninter.edu.mx/folletos/lani/"
}
,
{
title:"Administracion y Mercadotecnia (LAM)",
href:"/carreras/administracion-y-mercadotecnia",
trophy:!0,
brochure:"https://uninter.edu.mx/folletos/lam/"
}
,
{
title:"Comercio Exterior (LCE)",
href:"/carreras/comercio-exterior",
brochure:"https://uninter.edu.mx/folletos/lce/"
}
,
{
title:"Economia y Finanzas (LEF)",
href:"/carreras/economia-y-finanzas",
trophy:!0,
brochure:"https://uninter.edu.mx/folletos/lef/"
}
,
{
title:"Mercadotecnia (LME)",
href:"/carreras/mercadotecnia",
trophy:!0,
brochure:"https://uninter.edu.mx/folletos/lme/"
}
,
{
title:"Mercadotecnia y Publicidad (LEMP)",
href:"/carreras/mercadotecnia-y-publicidad",
trophy:!0,
brochure:"https://uninter.edu.mx/folletos/lemp/"
}
]
}
,
{
title:"LICENCIATURAS EN DISEÑO Y ARTES",
bachelors:[{
title:"Arquitectura (ARQ)",
href:"/carreras/arquitectura",
trophy:!0,
brochure:"https://uninter.edu.mx/folletos/arq/"
}
,
{
title:"Animación y Diseño Digital (LADD)",
href:"/carreras/animacion-y-diseno-digital",
trophy:!0,
brochure:"https://uninter.edu.mx/folletos/ladd/"
}
,
{
title:"Diseño Gráfico (LDG)",
href:"/carreras/diseno-grafico",
trophy:!0,
brochure:"https://uninter.edu.mx/folletos/ldg/"
}
,
{
title:"Diseño Industrial (LDI)",
href:"/carreras/diseno-industrial",
trophy:!0,
brochure:"https://uninter.edu.mx/folletos/ldi/"
}
,
{
title:"Diseño de Modas y Tendencias Internacionales (LDM)",
href:"/carreras/diseno-de-modas-y-tendencias-internacionales",
trophy:!0,
brochure:"https://uninter.edu.mx/folletos/ldm/"
}
]
}
,
{
title:"LICENCIATURAS EN INGENIERÍA",
bachelors:[{
title:"Ambiental (IAM)",
href:"/carreras/ingenieria-ambiental",
brochure:"https://uninter.edu.mx/folletos/iam/"
}
,
{
title:"Civil (ICI)",
href:"/carreras/ingenieria-civil",
trophy:!0,
brochure:"https://uninter.edu.mx/folletos/ici/"
}
,
{
title:"Industrial y de Sistemas de Calidad (IISCA)",
href:"/carreras/ingenieria-industrial-y-de-sistemas-de-calidad",
brochure:"https://uninter.edu.mx/folletos/iisca/"
}
,
{
title:"Mecatronica (IME)",
href:"/carreras/mecatronica",
brochure:"https://uninter.edu.mx/folletos/ime/"
}
,
{
title:"Mecanica Industrial (IMI)",
href:"/carreras/ingenieria-mecanica-industrial",
brochure:"https://uninter.edu.mx/folletos/imi/"
}
,
{
title:"Sistemas Computacionales (ISC)",
href:"/carreras/sistemas-computacionales",
brochure:"https://uninter.edu.mx/folletos/isc/"
}
]
}
],
d=w(!1),
n=w(null),
i=C=>{
n.value=C,
d.value=!0,
typeof document<"u"&&(document.body.style.overflow="hidden")
}
,
r=()=>{
d.value=!1,
setTimeout(()=>{
n.value=null
}
,
400),
typeof document<"u"&&(document.body.style.overflow="")
}
;
return(C,
p)=>{
const R=ue;
return o(),
c("section",
va,
[a("div",
ya,
[p[2]||(p[2]=a("div",
{
class:"oe-header"
}
,
[a("div",
null,
[a("div",
{
class:"uninter-eyebrow"
}
,
"PROGRAMAS ACADÉMICOS"),
a("h2",
{
class:"uninter-section-title"
}
,
[v(" Elige tu"),
a("br"),
a("em",
null,
"licenciatura")])])],
-1)),
a("div",
Ca,
[(o(),
c(A,
null,
k(_,
(F,
j)=>a("div",
{
key:j,
class:"oe-card"
}
,
[a("div",
Ia,
[a("h3",
xa,
f(F.title),
1),
a("ul",
$a,
[(o(!0),
c(A,
null,
k(F.bachelors,
(E,
z)=>(o(),
c("li",
{
key:"bach-"+z
}
,
[a("button",
{
onClick:ee(q=>i(E),
["prevent"]),
class:"oe-card__link"
}
,
[p[1]||(p[1]=a("span",
{
class:"oe-card__bullet"
}
,
"•",
-1)),
a("span",
ka,
f(E.title),
1),
E.trophy?(o(),
c("div",
Ea,
[m(b(ae),
{
size:14
}
)])):D("",
!0)],
8,
Aa)]))),
128))])])])),
64))])]),
(o(),
M(me,
{
to:"body"
}
,
[a("div",
{
class:Y(["oe-drawer-overlay",
{
"is-open":d.value
}
]),
onClick:r
}
,
[a("div",
{
class:Y(["oe-drawer",
{
"is-open":d.value
}
]),
onClick:p[0]||(p[0]=ee(()=>{

}
,
["stop"]))
}
,
[a("button",
{
class:"oe-drawer-close",
onClick:r
}
,
[m(b(re),
{
size:24
}
)]),
n.value&&n.value.href==="/carreras/comunicacion"?(o(),
c("div",
La,
[...p[3]||(p[3]=[a("img",
{
src:_a,
alt:"Banner promocional",
class:"oe-drawer-banner-img"
}
,
null,
-1)])])):D("",
!0),
n.value?(o(),
c("div",
{
key:1,
class:Y(["oe-drawer-content",
{
"has-banner":n.value.href==="/carreras/comunicacion"
}
])
}
,
[a("div",
Sa,
[n.value.trophy?(o(),
c("div",
Da,
[m(b(ae),
{
size:16
}
),
p[4]||(p[4]=v(" Programa de Excelencia ",
-1))])):D("",
!0),
a("h3",
Ma,
f(n.value.title),
1)]),
a("p",
Na,
f(n.value.description||`Conoce todos los detalles sobre ${
n.value.title
}
. Descubre el perfil de ingreso,
 plan de estudios y las oportunidades profesionales que te esperan al estudiar en UNINTER.`),
1),
n.value.href==="/carreras/arquitectura"?(o(),
c("div",
Pa,
[...p[5]||(p[5]=[a("img",
{
src:ga,
alt:"Banner de Arquitectura",
class:"oe-drawer-mid-img"
}
,
null,
-1)])])):D("",
!0),
a("div",
Ba,
[a("a",
{
href:n.value.brochure,
target:"_blank",
class:"oe-btn oe-btn--outline"
}
,
[m(b(Ie),
{
size:16
}
),
p[6]||(p[6]=v(" Ver Folleto ",
-1))],
8,
Ra),
n.value.href.startsWith("/")?(o(),
M(R,
{
key:0,
to:n.value.href,
class:"oe-btn oe-btn--solid",
onClick:r
}
,
{
default:Q(()=>[p[7]||(p[7]=v(" Ver Detalles Completos ",
-1)),
m(b(X),
{
size:16
}
)]),
_:1
}
,
8,
["to"])):(o(),
c("a",
{
key:1,
href:n.value.href,
target:"_blank",
class:"oe-btn oe-btn--solid"
}
,
[p[8]||(p[8]=v(" Ver Detalles Completos ",
-1)),
m(b(X),
{
size:16
}
)],
8,
za))])],
2)):D("",
!0)],
2)],
2)]))])
}

}

}
),
Ta=Object.assign(B(Oa,
[["__scopeId",
"data-v-cc68a2a4"]]),
{
__name:"LicPreseEducativeOfert"
}
),
Ua={
class:"opt-section"
}
,
Fa={
class:"opt-reasons"
}
,
ja={
class:"uninter-container"
}
,
qa={
class:"opt-grid"
}
,
Ha={
class:"opt-card__title"
}
,
Ga={
class:"opt-card__list"
}
,
Va=N({
__name:"OptionUninter",
setup(e){
const _=[{
titulo:"Calidad y acreditaciones",
items:["Más de 40 años de calidad educativa.",
"Por décimo tercer año consecutivo en el ranking de las mejores universidades.",
"Certificación ISO 9001:2015 en todos nuestros procesos.",
"Acreditación FIMPES.",
"Titulación por Excelencia Académica,
 Tesis,
 Posgrado,
 CENEVAL y Experiencia Profesional.",
"Certificaciones y acreditaciones de acuerdo a cada licenciatura."]
}
,
{
titulo:"Internacionalización",
items:["Intercambios académicos y culturales con más de 130 Universidades en el mundo.",
"Ambiente multicultural con alumnos provenientes de 25 países.",
"49 Materias en Inglés y Francés.",
"Diploma Internacional.",
"Profesores extranjeros o con perfil internacional.",
"Certificado internacional: Francia (RIEC,
 RICP,
 LRI).",
"Idiomas curriculares: Inglés y Francés.",
"Idiomas Extracurriculares: Alemán,
 Chino,
 Ruso,
 Italiano y más.",
"Materias extracurriculares en el extranjero.",
"Miembros de asociaciones Internacionales para los estudios."]
}
,
{
titulo:"Desarrollo profesional",
items:["Más de 1,
500 vínculos empresariales para prácticas profesionales.",
"Enlace profesional y voluntariado Internacional.",
"Programa de tutores y programas personalizados de becas.",
"Asesorías académicas sin costo.",
"Congresos,
 ferias,
 exposiciones y simposios por licenciatura.",
"Realización de proyectos enfocados a soluciones reales."]
}
,
{
titulo:"Experiencia universitaria",
items:["Clases multidisciplinarias.",
"Talleres culturales y deportivos.",
"Certificación DELF (Diplome D´études en langue francaise).",
"Certificación TKT (Teaching Knowledge Test)."]
}
];
return(d,
n)=>(o(),
c("section",
Ua,
[a("div",
Fa,
[a("div",
ja,
[n[0]||(n[0]=a("div",
{
class:"opt-reasons__header"
}
,
[a("div",
{
class:"section-eyebrow"
}
,
[a("span",
{
class:"eyebrow-line"
}
),
v(" 25 RAZONES PARA ELEGIR UNINTER ")]),
a("h3",
{
class:"opt-reasons__title"
}
,
[v("Conócenos y "),
a("em",
null,
"compáranos")])],
-1)),
a("div",
qa,
[(o(),
c(A,
null,
k(_,
i=>a("div",
{
key:i.titulo,
class:"opt-card"
}
,
[a("h4",
Ha,
f(i.titulo),
1),
a("ul",
Ga,
[(o(!0),
c(A,
null,
k(i.items,
r=>(o(),
c("li",
{
key:r,
class:"opt-card__item"
}
,
[m(b(Ee),
{
size:15,
class:"opt-card__icon"
}
),
a("span",
null,
f(r),
1)]))),
128))])])),
64))])])])]))
}

}
),
Ya=Object.assign(B(Va,
[["__scopeId",
"data-v-b0af3906"]]),
{
__name:"LicPreseOptionUninter"
}
),
Qa={
class:"info-carousel-section"
}
,
Xa={
class:"uninter-container"
}
,
Ka={
class:"info-card"
}
,
Wa={
class:"info-card__img-wrapper"
}
,
Za=["src",
"alt"],
Ja={
class:"info-card__content"
}
,
wa={
class:"info-card__icon-box"
}
,
es={
class:"info-card__title"
}
,
as={
key:0,
class:"info-card__text"
}
,
ss={
key:1,
class:"info-card__links"
}
,
ts=["href"],
is={
key:2,
class:"info-card__action"
}
,
ns=["href"],
ls=N({
__name:"DinamicSection",
setup(e){
const _=[{
id:1,
title:"VIDA UNINTER",
icon:H,
text:"A través de actividades educativas,
 sociales,
 culturales,
 deportivas y de servicio a la comunidad,
 podrás adquirir una formación multicultural conviviendo con estudiantes nacionales y extranjeros. Podrás participar en viajes,
 congresos,
 conferencias,
 teatro,
 actividades altruistas y equipos deportivos,
 entre muchas otras cosas.",
image:"/images/heroMobile/8.jpg"
}
,
{
id:2,
title:"INTERNACIONALIZACIÓN Y MOVILIDAD",
icon:Se,
text:"Intercambios con más de 130 Universidades alrededor del Mundo y un Ambiente Multicultural con Alumnos provenientes de 25 Países.",
image:"/images/heroMobile/12.jpg",
btn:{
label:"Conoce más",
link:"https://universidad.uninter.edu.mx/Internacionalizaci%C3%B3n"
}

}
,
{
id:3,
title:"ENLACE PROFESIONAL",
icon:ze,
text:"Convenios con más de 1,
500 Empresas Nacionales e Internacionales para tu Desarrollo y Desempeño Profesional durante toda la licenciatura.",
image:"/images/heroMobile/10.jpg",
btn:{
label:"Ver convenios",
link:"#"
}

}
,
{
id:4,
title:"TALLERES DEPORTIVOS Y CULTURALES",
icon:Te,
links:[{
label:"Equipo de Fútbol Americano - Legionarios",
href:"#"
}
,
{
label:"Blog de Difusión Cultural",
href:"#"
}
,
{
label:"Blog de Filarmónica",
href:"#"
}
,
{
label:"Blog de Cheer Dance",
href:"#"
}
],
image:"/images/heroMobile/11.jpg"
}
];
return(d,
n)=>(o(),
c("section",
Qa,
[a("div",
Xa,
[n[1]||(n[1]=a("div",
{
class:"carousel-header"
}
,
[a("h2",
{
class:"uninter-section-title"
}
,
[v("Vive la "),
a("em",
null,
"Experiencia")])],
-1)),
m(b(Ae),
{
modules:[b($e),
b(Fe)],
"slides-per-view":1,
"space-between":30,
autoplay:{
delay:6e3,
disableOnInteraction:!1
}
,
pagination:{
clickable:!0
}
,
loop:!0,
speed:800,
class:"info-swiper"
}
,
{
default:Q(()=>[(o(),
c(A,
null,
k(_,
i=>m(b(xe),
{
key:i.id
}
,
{
default:Q(()=>[a("div",
Ka,
[a("div",
Wa,
[a("img",
{
src:i.image,
alt:i.title,
class:"info-card__img"
}
,
null,
8,
Za)]),
a("div",
Ja,
[a("div",
wa,
[(o(),
M(Z(i.icon),
{
size:28
}
))]),
a("h3",
es,
f(i.title),
1),
i.text?(o(),
c("p",
as,
f(i.text),
1)):D("",
!0),
i.links?(o(),
c("ul",
ss,
[(o(!0),
c(A,
null,
k(i.links,
(r,
C)=>(o(),
c("li",
{
key:C
}
,
[a("a",
{
href:r.href,
class:"info-link"
}
,
[n[0]||(n[0]=a("span",
{
class:"info-link__bullet"
}
,
"•",
-1)),
v(" "+f(r.label),
1)],
8,
ts)]))),
128))])):D("",
!0),
i.btn?(o(),
c("div",
is,
[a("a",
{
href:i.btn.link,
class:"info-btn"
}
,
[v(f(i.btn.label)+" ",
1),
m(b(De),
{
size:16
}
)],
8,
ns)])):D("",
!0)])])]),
_:2
}
,
1024)),
64))]),
_:1
}
,
8,
["modules"])])]))
}

}
),
os=Object.assign(B(ls,
[["__scopeId",
"data-v-a4effbf0"]]),
{
__name:"LicPreseDinamicSection"
}
),
rs={
class:"beca-section"
}
,
cs={
class:"beca-container"
}
,
ds={
class:"beca-info"
}
,
us={
class:"beca-highlights"
}
,
ms={
class:"beca-hl__icon"
}
,
ps={
class:"beca-hl__value"
}
,
fs={
class:"beca-hl__label"
}
,
hs={
class:"beca-benefits"
}
,
bs={
class:"beca-benefits__list"
}
,
_s={
class:"beca-form-wrap"
}
,
gs=N({
__name:"CalScholarship",
setup(e){
const _=[{
icon:le,
value:"Hasta 60%",
label:"de beca disponible"
}
,
{
icon:ie,
value:"23",
label:"licenciaturas presenciales"
}
,
{
icon:H,
value:"71,
000+",
label:"egresados en México y el mundo"
}
,
{
icon:ke,
value:"4 años",
label:"duración promedio"
}
],
d=["Colegiatura mensual con descuento garantizado",
"Acceso a instalaciones de clase mundial",
"Movilidad e intercambio internacional",
"Bolsa de trabajo Enlace Profesional UNINTER",
"Talleres deportivos y culturales incluidos"];
return(n,
i)=>(o(),
c("section",
rs,
[a("div",
cs,
[a("div",
ds,
[i[1]||(i[1]=a("p",
{
class:"beca-eyebrow"
}
,
"Apoyo económico",
-1)),
i[2]||(i[2]=a("h2",
{
class:"beca-title"
}
,
[v("Calcula tu"),
a("br"),
a("em",
null,
"porcentaje de beca")],
-1)),
i[3]||(i[3]=a("p",
{
class:"beca-desc"
}
,
" En UNINTER creemos que el talento no debe tener límites económicos. Completa el formulario y descubre de inmediato qué porcentaje de beca puedes obtener para iniciar tu licenciatura presencial. ",
-1)),
a("div",
us,
[(o(),
c(A,
null,
k(_,
r=>a("div",
{
key:r.label,
class:"beca-hl"
}
,
[a("div",
ms,
[(o(),
M(Z(r.icon),
{
size:20
}
))]),
a("div",
null,
[a("p",
ps,
f(r.value),
1),
a("p",
fs,
f(r.label),
1)])])),
64))]),
a("div",
hs,
[i[0]||(i[0]=a("p",
{
class:"beca-benefits__heading"
}
,
"Beneficios incluidos con tu beca",
-1)),
a("ul",
bs,
[(o(),
c(A,
null,
k(d,
r=>a("li",
{
key:r,
class:"beca-benefits__item"
}
,
[m(b(Me),
{
size:14,
class:"beca-benefits__check"
}
),
v(" "+f(r),
1)])),
64))])])]),
a("div",
_s,
[m(Le)])])]))
}

}
),
vs=Object.assign(B(gs,
[["__scopeId",
"data-v-43a41665"]]),
{
__name:"LicPreseCalScholarship"
}
),
ys={
class:"bl-section uninter-section"
}
,
Cs={
class:"uninter-container"
}
,
Is={
class:"bl-grid"
}
,
xs=["href"],
$s={
class:"bl-card__initials"
}
,
As={
class:"bl-card__body"
}
,
ks={
class:"bl-card__nombre"
}
,
Es={
class:"bl-card__link"
}
,
Ls=N({
__name:"SchoolUninter",
setup(e){
const _=[{
key:"daeya",
label:"DAEYA",
nombre:"Atención a Estudiantes UNINTER",
color:"#003B5C",
href:"https://blogs.uninter.edu.mx/daeya/"
}
,
{
key:"arq",
label:"ARQ-ICI",
nombre:"Arquitectura e Ingeniería Civil",
color:"#546E7A",
href:"https://blogs.uninter.edu.mx/arq-ici/"
}
,
{
key:"siu",
label:"SIU",
nombre:"Secundaria Internacional",
color:"#E65100",
href:"https://blogs.uninter.edu.mx/siu/"
}
,
{
key:"biu",
label:"BIU",
nombre:"Bachillerato Internacional",
color:"#2E7D32",
href:"https://blogs.uninter.edu.mx/biu/"
}
,
{
key:"escat",
label:"ESCAT",
nombre:"Ciencias,
 Artes y Tecnología",
color:"#6A1B9A",
href:"https://blogs.uninter.edu.mx/escat/"
}
,
{
key:"endecs",
label:"ENDECS",
nombre:"Negocios,
 Derecho y Ciencias Sociales",
color:"#0073B4",
href:"https://blogs.uninter.edu.mx/endecs/"
}
,
{
key:"ehli",
label:"EHLI",
nombre:"Humanidades,
 Lenguas e Internacional.",
color:"#00695C",
href:"https://blogs.uninter.edu.mx/ehli/"
}
,
{
key:"spanish",
label:"SS",
nombre:"Spanish School",
color:"#BF360C",
href:"https://spanishuninter.blog/"
}
];
return(d,
n)=>(o(),
c("section",
ys,
[a("div",
Cs,
[n[1]||(n[1]=a("div",
{
class:"bl-header"
}
,
[a("div",
null,
[a("div",
{
class:"uninter-eyebrow"
}
,
"Comunidad académica"),
a("h2",
{
class:"uninter-section-title"
}
,
"Blogs")]),
a("a",
{
href:"https://uninter.edu.mx/blogs",
target:"_blank",
class:"uninter-ver-mas"
}
,
"Ver todos →")],
-1)),
a("div",
Is,
[(o(),
c(A,
null,
k(_,
i=>a("a",
{
key:i.key,
href:i.href,
target:"_blank",
rel:"noopener",
class:"bl-card"
}
,
[a("div",
{
class:"bl-card__thumb",
style:pe(`background:${
i.color
}
`)
}
,
[a("span",
$s,
f(i.label),
1)],
4),
a("div",
As,
[a("p",
ks,
f(i.nombre),
1),
a("span",
Es,
[n[0]||(n[0]=v("Leer ",
-1)),
m(b(X),
{
size:11
}
)])])],
8,
xs)),
64))])])]))
}

}
),
Ss=Object.assign(B(Ls,
[["__scopeId",
"data-v-b27c477e"]]),
{
__name:"LicPreseSchoolUninter"
}
),
ws=N({
__name:"LicenciaturasPresenciales",
setup(e){
return Re({
title:"Licenciaturas Presenciales | UNINTER"
}
),
(_,
d)=>(o(),
c("div",
null,
[m(ce),
m(ta),
m(ba),
m(Ta),
m(vs),
m(Ya),
m(os),
m(Ne),
m(Ss),
m(Pe),
m(Be)]))
}

}
);
export{
ws as default
}
;

