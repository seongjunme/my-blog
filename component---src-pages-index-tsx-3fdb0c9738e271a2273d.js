"use strict";(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[691],{4277:function(e,t,n){n.r(t),n.d(t,{default:function(){return B}});var r=n(6771),i=n(7294),o=n(4878),l=n(396);var a=(0,r.Z)(l.G,{target:"e1lerpm43"})({name:"xxdi8o",styles:"width:200px;height:200px;margin-bottom:30px;border-radius:50%"}),u=(0,r.Z)("div",{target:"e1lerpm42"})({name:"n2wwoa",styles:"height:100vh;display:flex;flex-direction:column;justify-content:center;align-items:center;width:1080px;margin:0 auto;padding:0px 100px"}),s=(0,r.Z)("div",{target:"e1lerpm41"})({name:"14jjcuz",styles:"font-size:24px;font-weight:400"}),c=(0,r.Z)("div",{target:"e1lerpm40"})({name:"6fqfz3",styles:"margin-top:5px;font-size:35px;font-weight:700"}),f=n(3431),d=function(e){var t=e.image;return(0,f.tZ)(u,null,(0,f.tZ)(a,{image:t,alt:"Profile Image"}),(0,f.tZ)(s,null,'"안녕하세요."'),(0,f.tZ)(c,null,'"프론트엔드를 사랑하는"'),(0,f.tZ)(c,null,'"웹 성능 개선을 좋아하는"'),(0,f.tZ)(c,null,'"협업에 진심인 주니어 개발자입니다."'))};var g=(0,r.Z)("ul",{target:"e1qe0k9l1"})({name:"nudzok",styles:"display:flex;flex-direction:row;justify-content:space-around;position:fixed;right:100px;width:300px;height:100px;align-items:center;z-index:100"}),m=(0,r.Z)("li",{target:"e1qe0k9l0"})("list-style:none;cursor:pointer;font-size:18px;font-weight:",(function(e){return e.isSelected?"bold":400}),";text-decoration:",(function(e){return e.isSelected?"underline":"none"}),";text-underline-position:under;"),p=function(e){var t=e.currentPageName,n=e.onClickNavBar;return(0,f.tZ)(g,null,(0,f.tZ)(m,{isSelected:"About"===t,onClick:n},"About"),(0,f.tZ)(m,{isSelected:"Project"===t,onClick:n},"Project"),(0,f.tZ)(m,{isSelected:"Blog"===t,onClick:n},"Blog"),(0,f.tZ)(m,{isSelected:"Contact"===t,onClick:n},"Contact"))};var v=(0,r.Z)("div",{target:"e1rwe9qh1"})({name:"1osvuqy",styles:"height:100vh;position:relative;display:flex;flex-direction:column"}),h=(0,r.Z)("div",{target:"e1rwe9qh0"})({name:"1rzu5pb",styles:"position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);line-height:24px;font-size:18px"}),Z=n(832),x=function(){return(0,f.tZ)(v,null,(0,f.tZ)(h,null,(0,f.tZ)("div",null,"Phone: 010-3292-7923"),(0,f.tZ)("div",null,"Mail: sjman223@naver.com"),(0,f.tZ)("div",null,"Github:",(0,f.tZ)("a",{href:"https://github.com/seongjunme"},"https://github.com/seongjunme"))),(0,f.tZ)(Z.Z,null))},y=n(7462),w=n(4369),b=n(1597);var k=(0,r.Z)("div",{target:"e1ss8j5b2"})({name:"viakpa",styles:"display:grid;justify-content:center;align-content:center;grid-template-columns:1fr 1fr 1fr;grid-gap:30px;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%)"}),j=(0,r.Z)("div",{target:"e1ss8j5b1"})({name:"c2b478",styles:"height:100vh;position:relative;margin:0 auto"}),C=(0,r.Z)(b.rU,{target:"e1ss8j5b0"})({name:"ntpw8m",styles:"position:absolute;top:-12%;right:1%;font-size:16px"}),z=function(e){var t=e.posts,n=e.moreURL;return(0,f.tZ)(j,null,(0,f.tZ)(k,null,t.slice(0,3).map((function(e){var t=e.node,n=t.id,r=t.fields.slug,i=t.frontmatter;return(0,f.tZ)(w.Z,(0,y.Z)({key:n,link:r},i))})),n&&(0,f.tZ)(C,{to:n},"more ",">")))},P=function(e,t){var n;return function(){for(var r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];clearTimeout(n),n=setTimeout((function(){return e.apply(void 0,i)}),t)}},S=["About","Project","Blog","Contact"],q=function(e){var t=e.maxPageCount,n=(0,i.useRef)(),r=(0,i.useRef)(0),o=(0,i.useState)(S[r.current]),l=o[0],a=o[1],u=function(){n.current.scrollTo({top:window.innerHeight*r.current,left:0,behavior:"smooth"})};(0,i.useEffect)((function(){var e,i=P((function(e){e.preventDefault();var n=e.deltaY;n>0&&r.current<t?(r.current+=1,u(),a(S[r.current])):n<0&&r.current>0&&(r.current-=1,u(),a(S[r.current]))}),50);return null===(e=n.current)||void 0===e||e.addEventListener("wheel",i),function(){var e;null===(e=n.current)||void 0===e||e.removeEventListener("wheel",i)}}),[]),(0,i.useEffect)((function(){return window.addEventListener("resize",u),function(){window.removeEventListener("resize",u)}}));return[n,l,function(e){var t=e.currentTarget.innerText;r.current=S.indexOf(t),u(),a(t)}]};var B=function(e){var t=e.data,n=t.allMarkdownRemark.edges,r=t.file.childImageSharp.gatsbyImageData,l=q({maxPageCount:3}),a=l[0],u=l[1],s=l[2],c=(0,i.useMemo)((function(){return n.filter((function(e){return"Project"===e.node.frontmatter.type}))}),[]),g=(0,i.useMemo)((function(){return n.filter((function(e){return"Blog"===e.node.frontmatter.type}))}),[]);return(0,f.tZ)(E,{ref:a,className:"outer"},(0,f.tZ)(p,{currentPageName:u,onClickNavBar:s}),(0,f.tZ)(d,{image:r}),(0,f.tZ)(z,{posts:c}),(0,f.tZ)(z,{posts:g,moreURL:"/blog"}),(0,f.tZ)(x,null),(0,f.tZ)(o.Z,null))},E=(0,r.Z)("div",{target:"ewcmato0"})({name:"do3bq",styles:"height:100vh;overflow-y:hidden;overflow-x:hidden;&::--webkit-scrollbar{display:none;}width:100%;background-color:#121212;color:#ffffff"})}}]);
//# sourceMappingURL=component---src-pages-index-tsx-3fdb0c9738e271a2273d.js.map