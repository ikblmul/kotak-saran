import{u as g}from"./useSocket.baf0e129.js";import{A as x}from"./AuthenticatedLayout.22801d64.js";import{r as t,d as l,j as r,a as s}from"./app.0b963a75.js";import{P as v}from"./FlashMessage.7487a345.js";import{T as i}from"./Typography.1e60e37c.js";import{T as S}from"./TextField.e42411c6.js";import{C as b}from"./Card.72744c5a.js";import{B as c}from"./useForwardedInput.a1a091b8.js";import{C as y}from"./Chip.b8579818.js";import"./ApplicationLogo.b8e2e676.js";import"./CssVarsProvider.9f8a6919.js";import"./useId.708cf8ef.js";const d=route("topic.index"),H=a=>{const[n,m]=t.exports.useState({}),[C,p]=t.exports.useState(""),[w,h]=t.exports.useState(a.topic.data);g({channel:"group",event:"GroupEvent"},e=>{e.type==="created"&&h(o=>[e.group,...o])});const u=t.exports.useCallback(e=>{m(o=>({...o,...e})),l.Inertia.get(d,e,{replace:!0,preserveState:!0,only:["topic"]})},[]);t.exports.useEffect(()=>{n.length>0&&l.Inertia.get(d,newQuery,{replace:!0,preserveState:!0,only:["data"]})},[n]);const f=_.debounce(e=>{p(e),u({page:1,q:e})},100);return r(x,{auth:a.auth,errors:a.errors,header:r(i,{fontWeight:"lg",level:"h5",children:"Invite Users"}),children:s("div",{className:"md:w-5/6 sm:w-full mx-auto mt-5",children:[r("div",{className:"d-flex",children:r("div",{className:"w-3/12 mb-9",children:r(S,{placeholder:"Search Here...",size:"lg",startDecorator:r(v,{className:"w-4"}),onChange:e=>f(e.target.value)})})}),topic.map(e=>r(b,{variant:"outlined",className:"mt-5",row:!0,sx:{minWidth:"320px",gap:2,"&:hover":{boxShadow:"md",borderColor:"neutral.outlinedHoverBorder"}},children:s(c,{children:[r(y,{variant:"outlined",color:"warning",size:"sm",className:"mb-3",sx:{pointerEvents:"none"},children:"Cool weather all day long"}),s(c,{sx:{ml:.5},children:[r(i,{level:"h2",fontSize:"lg",id:"card-description",mb:.5,children:e.title}),r(i,{fontSize:"sm","aria-describedby":"card-description",mb:1})]})]})}))]})})};export{H as default};
