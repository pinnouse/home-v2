(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5301:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return i(1103)}])},1103:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return y}});var o=i(5893),n=i(9008),r=i(4051),s=i.n(r),a=i(8100),c=i(6243),l=i(4840),h=i.n(l);function d(e,t,i,o,n,r,s){try{var a=e[r](s),c=a.value}catch(l){return void i(l)}a.done?t(c):Promise.resolve(c).then(o,n)}var u=i(3320),m=function(){var e,t=(e=s().mark((function e(t){var i,o;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:if((i=e.sent).ok){e.next=10;break}return o=new Error("An error occurred while fetching the data."),e.next=7,i.json();case 7:throw o.info=e.sent,o.status=i.status,o;case 10:return e.abrupt("return",i.json());case 11:case"end":return e.stop()}}),e)})),function(){var t=this,i=arguments;return new Promise((function(o,n){var r=e.apply(t,i);function s(e){d(r,o,n,s,a,"next",e)}function a(e){d(r,o,n,s,a,"throw",e)}s(void 0)}))});return function(e){return t.apply(this,arguments)}}(),g=function(e,t){return fetch(e,t).then((function(e){return e.text()}))};function p(e,t){var i=function(e){var t=(0,a.ZP)("https://api.github.com/repos/".concat(e),m,{shouldRetryOnError:!1}),i=t.data,o=t.error;return{data:i,isLoading:!o&&!i,isError:o}}(e.url),n=i.data,r=i.isLoading,s=i.isError,l=function(e){var t=(0,a.ZP)("https://api.github.com/repos/".concat(e,"/languages"),m,{shouldRetryOnError:!1}),i=t.data,o=t.error;return{languageData:i,isLoading:!o&&!i,isError:o}}(e.url),d=l.languageData,u=l.isLoading,g=l.isError;if(r||s||u||g||t.isLoading||t.isError)return(0,o.jsxs)("div",{className:h().card,children:[(0,o.jsx)("h3",{children:e.title}),(0,o.jsx)(c.Z,{options:{forceBlock:!0},children:e.description}),(0,o.jsx)("a",{href:"https://github.com/".concat(e.url),style:{justifySelf:"flex-end"},children:e.url})]},e.url);var p=Object.values(d).reduce((function(e,t){return e+t}),0);return(0,o.jsxs)("div",{className:h().card,children:[(0,o.jsx)("h3",{children:e.title}),(0,o.jsx)(c.Z,{options:{forceBlock:!0},children:e.description}),(0,o.jsxs)("div",{className:h().stats,children:[(0,o.jsxs)("div",{className:h().inlineStat,children:[(0,o.jsx)("img",{src:"/star.svg",alt:"Stars",width:16,height:16}),(0,o.jsx)("span",{children:n.stargazers_count})]}),(0,o.jsxs)("div",{className:h().inlineStat,children:[(0,o.jsx)("img",{src:"/fork.svg",alt:"Forks",width:16,height:16}),(0,o.jsx)("span",{children:n.forks_count})]})]}),(0,o.jsxs)("span",{children:["Primary Language: ",(0,o.jsx)("i",{children:n.language})]}),(0,o.jsx)("div",{className:h().colors,children:Object.entries(d).map((function(e){return function(e,t,i){var n=e[1];return(0,o.jsx)("div",{style:{backgroundColor:t[e[0]].color,height:"".concat(Math.round(n/i*1e4)/100,"%"),width:"100%"}},e[0])}(e,t.data,p)}))}),(0,o.jsx)("div",{className:h().colorsToolTip,children:Object.entries(d).map((function(e){return function(e,t){var i=e[1];return(0,o.jsx)("div",{style:{height:"".concat(Math.round(i/t*100),"%"),width:"100%"},children:(0,o.jsx)("span",{"data-language":e[0]})},e[0])}(e,p)}))}),(0,o.jsx)("a",{href:"https://github.com/".concat(e.url),style:{justifySelf:"flex-end"},children:e.url})]},e.url)}var f=function(e){var t=function(){var e=(0,a.ZP)("https://raw.githubusercontent.com/github/linguist/master/lib/linguist/languages.yml",g),t=e.data,i=e.error;return{data:u.load(t),isLoading:!i&&!t,isError:i}}();return(0,o.jsx)("div",{className:h().grid,children:e.repositories.map((function(e){return p(e,t)}))})},j=i(341),x=i.n(j);var w=function(){return(0,o.jsxs)("div",{className:x().grid,children:[(0,o.jsxs)("div",{className:x().card,children:[(0,o.jsx)("div",{className:x().image,children:(0,o.jsx)("img",{src:"/portfolio/chat.gif",alt:"AI Chatbot",width:1280,height:720})}),(0,o.jsxs)("div",{className:x().info,children:[(0,o.jsx)("h3",{children:"AI Chatbot"}),(0,o.jsx)("h4",{children:"Open domain AI powered conversational chatbot"}),(0,o.jsx)(c.Z,{options:{forceBlock:!0},children:"Ongoing learning and building of an open domain AI chatbot. Designed and built a lot of the architecture of the high level model. Continuing to prove with cutting-edge research and development in the NLP space."}),(0,o.jsx)("a",{href:"https://a.mada.moe",children:"Current Production Model"}),(0,o.jsx)("a",{href:"https://github.com/pinnouse/ReinaChat",children:"Older Model"})]})]}),(0,o.jsxs)("div",{className:x().card,children:[(0,o.jsx)("div",{className:x().image,children:(0,o.jsx)("img",{src:"/portfolio/oslyn.gif",alt:"ZeroTwo-Bot Home Page",width:1280,height:720})}),(0,o.jsxs)("div",{className:x().info,children:[(0,o.jsx)("h3",{children:"Oslyn"}),(0,o.jsx)("h4",{children:"Digital AI powered musician companion"}),(0,o.jsx)(c.Z,{options:{forceBlock:!0},children:"Was a lead developer in a lot of the backend and AI functionality, eventually pushing the project as the AI team lead. Worked together with a small group of passionate developers; mentoring, growing, and inspiring one another."}),(0,o.jsx)("a",{href:"https://oslyn.io",children:"Oslyn Website"})]})]}),(0,o.jsxs)("div",{className:x().card,children:[(0,o.jsx)("div",{className:x().image,children:(0,o.jsx)("img",{src:"/portfolio/ztb.gif",alt:"ZeroTwo-Bot Home Page",width:1280,height:720})}),(0,o.jsxs)("div",{className:x().info,children:[(0,o.jsx)("h3",{children:"ZeroTwo-Bot"}),(0,o.jsx)("h4",{children:"Discord bot serving millions of users"}),(0,o.jsx)(c.Z,{options:{forceBlock:!0},children:"Work as a web developer for a Discord bot serving millions of users (50+ million as of now!). Produced the home landing page, store page, and other designs to be used on the web."}),(0,o.jsx)("a",{href:"https://zerotwo.bot",children:"Home Page"}),(0,o.jsx)("a",{href:"https://store.zerotwo.bot",children:"Store Page"})]})]})]})},v=i(214),b=i.n(v),_=[{title:"ZeroTwo Bot",description:"My first large project. I learned the most from this project: developing software, deploying/hosting an application on the cloud, maintaining and scaling, interacting with APIs, and security/authentication. This project has given me lots of opportunity to explore technology and also expose me to a lot of great projects and developers.",url:"pinnouse/ZeroTwoBot"},{title:"Ani-SS",description:"Building an interface for WebGL shaders to behave on browsers. This project was inspired by bloc97's [Anime4K project](https://github.com/bloc97/Anime4K) that were intelligently crafted shaders to enhance or recover visual quality of a video or image.",url:"pinnouse/ani-ss"},{title:"Amadeus",description:"NLP AI chatbot based on Google's [performers](https://ai.googleblog.com/2020/10/rethinking-attention-with-performers.html) (transformers with the attention mechanism performing linearly). My attempt at reaching for the stars with lots of training data and a whole machine learning pipeline to bring the project to life.",url:"pinnouse/amadeus"},{title:"AWE (A WebAssembly Emulator)",description:"A project to bring emulators to the world wide web. With the advent of web assembly, software and technology has never been so accessible. In this project, I aim to use the computer skills I have learned to bring game console emulators to your web browser!",url:"pinnouse/awe"},{title:"Ruumi",description:"A service where you can watch shows together with friends. No more countdowns to sync up the timing, just join the room and enjoy together.",url:"pinnouse/ruumi"},{title:"Macaron",description:"[Macaron](https://devpost.com/software/macaron) is a hackathon project that sought to reduce the clutter of noise in today's media, and bring it down to bite-sized bits. This project won the hackathon's \"The Perfect Pitch\" award.",url:"the-macaron/macaron"},{title:"Bento",description:"[Bento](https://devpost.com/software/bento-rnqv4c) is a hackathon submission to Hack the North 2020++. In this project, we aimed to create a solution for teachers to navigate the online setting as they would their classroom.",url:"pinnouse/bento"},{title:"Solid Dots (*nix Dotfiles)",description:"A repository containing my riced configurations of Linux. Finding my way around and learning the ins and outs of Unix-like systems has been a fun treat and grow very comfortable with the terminal.",url:"pinnouse/SolidDots"},{title:"Competitive",description:"This repository contains my work in competitive programming.",url:"pinnouse/Competitive"}],y=function(){return(0,o.jsxs)("div",{className:b().container,children:[(0,o.jsxs)(n.default,{children:[(0,o.jsx)("title",{children:"Nicholas Wong"}),(0,o.jsx)("meta",{name:"description",content:"Nicholas Wong home page"}),(0,o.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,o.jsxs)("div",{className:b().leftBar,children:[(0,o.jsx)("img",{className:b().profile,src:"/pfp.png",alt:"Profile Picture",width:260,height:260}),(0,o.jsx)("h1",{children:"Nicholas Wong"}),(0,o.jsx)("p",{children:"Bringing ideas to life one line at a time."}),(0,o.jsx)("a",{className:b().link,href:"mailto:nichol.wong@mail.utoronto.ca",children:"\ud83d\udce7nichol.wong@mail.utoronto.ca"}),(0,o.jsxs)("a",{className:b().link,href:"https://github.com/pinnouse",children:[(0,o.jsx)("img",{src:"/GitHub-Mark-64px.png",alt:"GitHub Logo",width:16,height:16}),(0,o.jsx)("span",{children:"/pinnouse"})]}),(0,o.jsxs)("a",{className:b().link,href:"https://twitter.com/pinnouse",children:[(0,o.jsx)("img",{src:"/Twitter_Logo_Blue.png",alt:"Twitter Logo",width:16,height:16}),(0,o.jsx)("span",{children:"@pinnouse"})]}),(0,o.jsxs)("a",{className:b().link,href:"https://www.linkedin.com/in/nwong33/",children:[(0,o.jsx)("img",{src:"/LI-In-Bug.png",alt:"LinkedIn Logo",width:16,height:16}),(0,o.jsx)("span",{children:"/nwong33"})]}),(0,o.jsxs)("a",{className:b().link,children:[(0,o.jsx)("img",{src:"/f9bb9c4af2b9c32a2c5ee0014661546d.png",alt:"Discord Logo",width:16,height:16}),(0,o.jsx)("span",{children:"pinnouse#7766"})]})]}),(0,o.jsxs)("main",{className:b().main,children:[(0,o.jsx)("h1",{className:b().title,children:"Welcome!"}),(0,o.jsx)("h2",{className:b().subtitle,children:"About Myself"}),(0,o.jsxs)("p",{className:b().description,children:["Hi there \ud83d\udc4b! I'm Nicholas, but you can call me Nick. I'm a passionate developer with a drive to realize great solutions. Currently, I am pursuing a degree in Computer Science and Mathematics, leading into my 4th year at the University of Toronto.",(0,o.jsx)("br",{}),(0,o.jsx)("br",{}),"I have lots of interests and hobbies, some of the topics I love are: artificial intelligence, music, illustration, anime, and games. I enjoy playing and singing with my guitar and showing off my skills in StarCraft 2."]}),(0,o.jsx)("h2",{className:b().subtitle,children:"Large Projects"}),(0,o.jsx)("p",{className:b().description,children:"A list of projects I've done that I think best showcase my skillset and passion!"}),(0,o.jsx)(w,{}),(0,o.jsx)("h2",{className:b().subtitle,children:"Open Source Projects"}),(0,o.jsx)("p",{className:b().description,children:"The cards may take a moment to load based off GitHub's API. When loaded, you can hover over the colours to see which language it represents."}),(0,o.jsx)(f,{repositories:_})]}),(0,o.jsx)("footer",{className:b().footer,children:"\xa9 2022 Nicholas Wong"})]})}},4840:function(e){e.exports={grid:"Grid_grid__qWybJ",card:"Grid_card__vgV1h",stats:"Grid_stats__U3xd7",inlineStat:"Grid_inlineStat__TOiS7",colors:"Grid_colors__MqnBp",colorsToolTip:"Grid_colorsToolTip__W1Et6"}},214:function(e){e.exports={container:"Home_container__bCOhY",main:"Home_main__nLjiQ",footer:"Home_footer____T7K",title:"Home_title__T09hD",subtitle:"Home_subtitle__j4GMd",description:"Home_description__41Owk",leftBar:"Home_leftBar__oNOt0",link:"Home_link__mt0ji",profile:"Home_profile__trCrb"}},341:function(e){e.exports={grid:"Portfolio_grid__1jVPC",card:"Portfolio_card__GjiZY",image:"Portfolio_image__EKm1X",info:"Portfolio_info__EFh3p"}}},function(e){e.O(0,[495,774,888,179],(function(){return t=5301,e(e.s=t);var t}));var t=e.O();_N_E=t}]);