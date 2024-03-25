"use strict";(self.webpackChunksimplysf=self.webpackChunksimplysf||[]).push([[544],{6535:(e,t,s)=>{s.d(t,{A:()=>b});var r=s(6540),a=s(4164),l=s(781),n=s(4581),i=s(8774),o=s(1312),c=s(6347),m=s(9169);function d(e){const{pathname:t}=(0,c.zy)();return(0,r.useMemo)((()=>e.filter((e=>function(e,t){return!(e.unlisted&&!(0,m.ys)(e.permalink,t))}(e,t)))),[e,t])}const u={sidebar:"sidebar_re4s",sidebarItemTitle:"sidebarItemTitle_pO2u",sidebarItemList:"sidebarItemList_Yudw",sidebarItem:"sidebarItem__DBe",sidebarItemLink:"sidebarItemLink_mo7H",sidebarItemLinkActive:"sidebarItemLinkActive_I1ZP"};var h=s(4848);function g(e){let{sidebar:t}=e;const s=d(t.items);return(0,h.jsx)("aside",{className:"col col--3",children:(0,h.jsxs)("nav",{className:(0,a.A)(u.sidebar,"thin-scrollbar"),"aria-label":(0,o.T)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"}),children:[(0,h.jsx)("div",{className:(0,a.A)(u.sidebarItemTitle,"margin-bottom--md"),children:t.title}),(0,h.jsx)("ul",{className:(0,a.A)(u.sidebarItemList,"clean-list"),children:s.map((e=>(0,h.jsx)("li",{className:u.sidebarItem,children:(0,h.jsx)(i.A,{isNavLink:!0,to:e.permalink,className:u.sidebarItemLink,activeClassName:u.sidebarItemLinkActive,children:e.title})},e.permalink)))})]})})}var p=s(5600);function x(e){let{sidebar:t}=e;const s=d(t.items);return(0,h.jsx)("ul",{className:"menu__list",children:s.map((e=>(0,h.jsx)("li",{className:"menu__list-item",children:(0,h.jsx)(i.A,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active",children:e.title})},e.permalink)))})}function f(e){return(0,h.jsx)(p.GX,{component:x,props:e})}function j(e){let{sidebar:t}=e;const s=(0,n.l)();return t?.items.length?"mobile"===s?(0,h.jsx)(f,{sidebar:t}):(0,h.jsx)(g,{sidebar:t}):null}function b(e){const{sidebar:t,toc:s,children:r,...n}=e,i=t&&t.items.length>0;return(0,h.jsx)(l.A,{...n,children:(0,h.jsx)("div",{className:"container margin-vert--lg",children:(0,h.jsxs)("div",{className:"row",children:[(0,h.jsx)(j,{sidebar:t}),(0,h.jsx)("main",{className:(0,a.A)("col",{"col--7":i,"col--9 col--offset-1":!i}),itemScope:!0,itemType:"https://schema.org/Blog",children:r}),s&&(0,h.jsx)("div",{className:"col col--2",children:s})]})})})}},8258:(e,t,s)=>{s.d(t,{A:()=>B});s(6540);var r=s(4164),a=s(7131),l=s(6025),n=s(4848);function i(e){let{children:t,className:s}=e;const{frontMatter:r,assets:i,metadata:{description:o}}=(0,a.e)(),{withBaseUrl:c}=(0,l.h)(),m=i.image??r.image,d=r.keywords??[];return(0,n.jsxs)("article",{className:s,itemProp:"blogPost",itemScope:!0,itemType:"https://schema.org/BlogPosting",children:[o&&(0,n.jsx)("meta",{itemProp:"description",content:o}),m&&(0,n.jsx)("link",{itemProp:"image",href:c(m,{absolute:!0})}),d.length>0&&(0,n.jsx)("meta",{itemProp:"keywords",content:d.join(",")}),t]})}var o=s(8774);const c={title:"title_f1Hy"};function m(e){let{className:t}=e;const{metadata:s,isBlogPostPage:l}=(0,a.e)(),{permalink:i,title:m}=s,d=l?"h1":"h2";return(0,n.jsx)(d,{className:(0,r.A)(c.title,t),itemProp:"headline",children:l?m:(0,n.jsx)(o.A,{itemProp:"url",to:i,children:m})})}var d=s(1312),u=s(5846);const h={container:"container_mt6G"};function g(e){let{readingTime:t}=e;const s=function(){const{selectMessage:e}=(0,u.W)();return t=>{const s=Math.ceil(t);return e(s,(0,d.T)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:s}))}}();return(0,n.jsx)(n.Fragment,{children:s(t)})}function p(e){let{date:t,formattedDate:s}=e;return(0,n.jsx)("time",{dateTime:t,itemProp:"datePublished",children:s})}function x(){return(0,n.jsx)(n.Fragment,{children:" \xb7 "})}function f(e){let{className:t}=e;const{metadata:s}=(0,a.e)(),{date:l,formattedDate:i,readingTime:o}=s;return(0,n.jsxs)("div",{className:(0,r.A)(h.container,"margin-vert--md",t),children:[(0,n.jsx)(p,{date:l,formattedDate:i}),void 0!==o&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(x,{}),(0,n.jsx)(g,{readingTime:o})]})]})}function j(e){return e.href?(0,n.jsx)(o.A,{...e}):(0,n.jsx)(n.Fragment,{children:e.children})}function b(e){let{author:t,className:s}=e;const{name:a,title:l,url:i,imageURL:o,email:c}=t,m=i||c&&`mailto:${c}`||void 0;return(0,n.jsxs)("div",{className:(0,r.A)("avatar margin-bottom--sm",s),children:[o&&(0,n.jsx)(j,{href:m,className:"avatar__photo-link",children:(0,n.jsx)("img",{className:"avatar__photo",src:o,alt:a,itemProp:"image"})}),a&&(0,n.jsxs)("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person",children:[(0,n.jsx)("div",{className:"avatar__name",children:(0,n.jsx)(j,{href:m,itemProp:"url",children:(0,n.jsx)("span",{itemProp:"name",children:a})})}),l&&(0,n.jsx)("small",{className:"avatar__subtitle",itemProp:"description",children:l})]})]})}const v={authorCol:"authorCol_Hf19",imageOnlyAuthorRow:"imageOnlyAuthorRow_pa_O",imageOnlyAuthorCol:"imageOnlyAuthorCol_G86a"};function P(e){let{className:t}=e;const{metadata:{authors:s},assets:l}=(0,a.e)();if(0===s.length)return null;const i=s.every((e=>{let{name:t}=e;return!t}));return(0,n.jsx)("div",{className:(0,r.A)("margin-top--md margin-bottom--sm",i?v.imageOnlyAuthorRow:"row",t),children:s.map(((e,t)=>(0,n.jsx)("div",{className:(0,r.A)(!i&&"col col--6",i?v.imageOnlyAuthorCol:v.authorCol),children:(0,n.jsx)(b,{author:{...e,imageURL:l.authorsImageUrls[t]??e.imageURL}})},t)))})}function A(){return(0,n.jsxs)("header",{children:[(0,n.jsx)(m,{}),(0,n.jsx)(f,{}),(0,n.jsx)(P,{})]})}var N=s(440),_=s(5533);function k(e){let{children:t,className:s}=e;const{isBlogPostPage:l}=(0,a.e)();return(0,n.jsx)("div",{id:l?N.blogPostContainerID:void 0,className:(0,r.A)("markdown",s),itemProp:"articleBody",children:(0,n.jsx)(_.A,{children:t})})}var T=s(1943),w=s(2053);function y(){return(0,n.jsx)("b",{children:(0,n.jsx)(d.A,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts",children:"Read More"})})}function I(e){const{blogPostTitle:t,...s}=e;return(0,n.jsx)(o.A,{"aria-label":(0,d.T)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:t}),...s,children:(0,n.jsx)(y,{})})}const F={blogPostFooterDetailsFull:"blogPostFooterDetailsFull_mRVl"};function L(){const{metadata:e,isBlogPostPage:t}=(0,a.e)(),{tags:s,title:l,editUrl:i,hasTruncateMarker:o}=e,c=!t&&o,m=s.length>0;return m||c||i?(0,n.jsxs)("footer",{className:(0,r.A)("row docusaurus-mt-lg",t&&F.blogPostFooterDetailsFull),children:[m&&(0,n.jsx)("div",{className:(0,r.A)("col",{"col--9":c}),children:(0,n.jsx)(w.A,{tags:s})}),t&&i&&(0,n.jsx)("div",{className:"col margin-top--sm",children:(0,n.jsx)(T.A,{editUrl:i})}),c&&(0,n.jsx)("div",{className:(0,r.A)("col text--right",{"col--3":m}),children:(0,n.jsx)(I,{blogPostTitle:l,to:e.permalink})})]}):null}function B(e){let{children:t,className:s}=e;const l=function(){const{isBlogPostPage:e}=(0,a.e)();return e?void 0:"margin-bottom--xl"}();return(0,n.jsxs)(i,{className:(0,r.A)(l,s),children:[(0,n.jsx)(A,{}),(0,n.jsx)(k,{children:t}),(0,n.jsx)(L,{})]})}},7131:(e,t,s)=>{s.d(t,{e:()=>o,i:()=>i});var r=s(6540),a=s(9532),l=s(4848);const n=r.createContext(null);function i(e){let{children:t,content:s,isBlogPostPage:a=!1}=e;const i=function(e){let{content:t,isBlogPostPage:s}=e;return(0,r.useMemo)((()=>({metadata:t.metadata,frontMatter:t.frontMatter,assets:t.assets,toc:t.toc,isBlogPostPage:s})),[t,s])}({content:s,isBlogPostPage:a});return(0,l.jsx)(n.Provider,{value:i,children:t})}function o(){const e=(0,r.useContext)(n);if(null===e)throw new a.dV("BlogPostProvider");return e}},5846:(e,t,s)=>{s.d(t,{W:()=>c});var r=s(6540),a=s(4586);const l=["zero","one","two","few","many","other"];function n(e){return l.filter((t=>e.includes(t)))}const i={locale:"en",pluralForms:n(["one","other"]),select:e=>1===e?"one":"other"};function o(){const{i18n:{currentLocale:e}}=(0,a.A)();return(0,r.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:n(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),i}}),[e])}function c(){const e=o();return{selectMessage:(t,s)=>function(e,t,s){const r=e.split("|");if(1===r.length)return r[0];r.length>s.pluralForms.length&&console.error(`For locale=${s.locale}, a maximum of ${s.pluralForms.length} plural forms are expected (${s.pluralForms.join(",")}), but the message contains ${r.length}: ${e}`);const a=s.select(t),l=s.pluralForms.indexOf(a);return r[Math.min(l,r.length-1)]}(s,t,e)}}}}]);