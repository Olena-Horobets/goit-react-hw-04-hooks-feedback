(this["webpackJsonpgoit-react-hw-04-hooks-feedback"]=this["webpackJsonpgoit-react-hw-04-hooks-feedback"]||[]).push([[0],[,,function(t,e,a){t.exports={section:"Diagram_section__1KMYE",diagram:"Diagram_diagram__1EE-j",caption:"Diagram_caption__3BBn5",stat:"Diagram_stat__2Wqyl",goodStat:"Diagram_goodStat__29GhO Diagram_stat__2Wqyl",neutralStat:"Diagram_neutralStat__K0Hu4 Diagram_stat__2Wqyl",badStat:"Diagram_badStat__-9LaZ Diagram_stat__2Wqyl",emoji:"Diagram_emoji__31wXQ",goodEmoji:"Diagram_goodEmoji__GbllJ Diagram_emoji__31wXQ",neutralEmoji:"Diagram_neutralEmoji__2hqGE Diagram_emoji__31wXQ",badEmoji:"Diagram_badEmoji__1hYMW Diagram_emoji__31wXQ",goodVotesStat:"Diagram_goodVotesStat__3WiTb"}},function(t){t.exports=JSON.parse('{"good":"\ud83e\udd70","neutral":"\ud83e\udd28","bad":"\ud83e\udd74","no-feedback":"\ud83e\udd37\u200d\u2642\ufe0f"}')},function(t,e,a){t.exports={notification:"Notification_notification__1PgAl",message:"Notification_message__1DBv0",emoji:"Notification_emoji__1pRtO"}},,,function(t,e,a){t.exports={container:"App_container__1oqPO",wrapper:"App_wrapper__YxLNv"}},function(t,e,a){t.exports={section:"Section_section__7lrrc",title:"Section_title__29SuD",FeedbackOptions:"Section_FeedbackOptions__25Uht Section_section__7lrrc",Statistics:"Section_Statistics__2q0aI Section_section__7lrrc"}},function(t,e,a){t.exports={option:"Button_option__1efhx",emoji:"Button_emoji__1sWsG"}},function(t,e,a){t.exports={text:"Statistics_text__1m79U",textTotal:"Statistics_textTotal__3Y7zS Statistics_text__1m79U"}},,function(t,e,a){t.exports={feedbackOptions:"FeedbackOptions_feedbackOptions__1fkOl"}},,function(t,e,a){},,,,,,function(t,e,a){"use strict";a.r(e);a(13),a(14);var n=a(1),i=a.n(n),s=a(11),o=a.n(s),c=a(5),r=a(7),_=a.n(r),l=a(8),j=a.n(l),d=a(0);function m(t){var e=t.styleClass,a=t.title,n=void 0===a?"":a,i=t.children,s=void 0===i?null:i;return Object(d.jsxs)("div",{className:j.a[e],children:[n&&Object(d.jsx)("h2",{className:j.a.title,children:n}),s]})}var u=a(12),p=a.n(u),b=a(9),O=a.n(b),g=a(3);function x(t){var e=t.name,a=t.onClick;return Object(d.jsxs)("button",{type:"button",name:e,className:O.a.option,onClick:a,children:[Object(d.jsx)("span",{className:O.a.emoji,children:g[e]})," ",e]})}function f(t){var e=t.options,a=t.optionHandler;return Object(d.jsx)("div",{className:p.a.feedbackOptions,children:e.map((function(t){return Object(d.jsx)(x,{name:t,onClick:a},t)}))})}var h=a(10),v=a.n(h);function S(t){var e=t.options,a=t.stateData,n=t.total,i=void 0===n?0:n;return Object(d.jsxs)(d.Fragment,{children:[e.map((function(t){return Object(d.jsxs)("p",{className:v.a.text,children:[t.charAt(0).toUpperCase()+t.slice(1),":"," ",Object(d.jsx)("span",{children:a[t]})]},t)})),Object(d.jsxs)("p",{className:v.a.textTotal,children:["Total votes: ",Object(d.jsx)("span",{children:i})]})]})}var N=a(2),D=a.n(N);function k(t){var e=t.options,a=t.stateData,n=t.total,i=void 0===n?0:n,s=function(t,e,a){return t?"".concat(parseInt(100*e[a]/t),"%"):0};return Object(d.jsxs)("div",{className:D.a.section,children:[Object(d.jsxs)("div",{className:D.a.diagram,children:[Object(d.jsx)("span",{className:D.a.caption,children:"percentage"}),e.map((function(t){var e=s(i,a,t);return Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{className:D.a[t+"Stat"],style:{height:[e]}}),Object(d.jsx)("span",{className:D.a[t+"Emoji"],children:g[t]})]},t)}))]}),Object(d.jsxs)("p",{className:D.a.goodVotesStat,children:["Percentage of good votes:"," ",s(i,a,"good")]})]})}var w=a(4),y=a.n(w);function E(t){var e=t.message;return Object(d.jsxs)("div",{className:y.a.notification,children:[Object(d.jsx)("p",{className:y.a.message,children:e}),Object(d.jsx)("p",{className:y.a.emoji,children:g["no-feedback"]})]})}function C(){var t=Object(n.useState)(0),e=Object(c.a)(t,2),a=e[0],i=e[1],s=Object(n.useState)(0),o=Object(c.a)(s,2),r=o[0],l=o[1],j=Object(n.useState)(0),u=Object(c.a)(j,2),p=u[0],b=u[1],O={good:a,neutral:r,bad:p},g=function(){return Object.values(O).reduce((function(t,e){return t+e}),0)},x=Object.keys(O);return Object(d.jsxs)("div",{className:_.a.container,children:[Object(d.jsx)("h1",{className:"hidden",children:"Cafe Espresso review page"}),Object(d.jsxs)("div",{className:_.a.wrapper,children:[Object(d.jsx)(m,{title:"Please, leave your vote",styleClass:"FeedbackOptions",children:Object(d.jsx)(f,{options:x,optionHandler:function(t){switch(t.target.name){case"good":return i((function(t){return t+1}));case"neutral":return l((function(t){return t+1}));case"bad":return b((function(t){return t+1}))}}})}),Object(d.jsx)(m,{title:"Statistics",styleClass:"Statistics",children:g()?Object(d.jsx)(S,{options:x,stateData:O,total:g()}):Object(d.jsx)(E,{message:"No feedback is given yet"})})]}),Object(d.jsx)(k,{options:x,stateData:O,total:g()})]})}o.a.render(Object(d.jsx)(i.a.StrictMode,{children:Object(d.jsx)(C,{})}),document.getElementById("root"))}],[[20,1,2]]]);
//# sourceMappingURL=main.65028f47.chunk.js.map