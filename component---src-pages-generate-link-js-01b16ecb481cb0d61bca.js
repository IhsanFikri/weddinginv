(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{ELqm:function(t,e,n){"use strict";n.r(e);var a=n("q1tI"),l=n("Zttt"),c=n("HaE+"),b=n("o0o1"),r=n.n(b),o=n("QrHz"),i=n("qKvR");var s=function(){var t=Object(a.useState)(1),e=t[0],n=t[1],l=Object(a.useState)(),b=l[0],s=l[1],u=Object(a.useState)(!1),d=u[0],p=u[1],j=Object(a.useState)(!1),O=j[0],m=j[1],f=Object(a.useState)(!1),v=f[0],g=f[1],h=Object(o.a)(),x=h.data,y=h.loading,k="https://zulvia-ihsan.my.id?to="+encodeURIComponent(b),N=function(t){s(t.target.value)},w=function(){var t=Object(c.a)(r.a.mark((function t(e,n){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return void 0===n&&(n=!1),t.prev=1,t.next=4,navigator.clipboard.writeText(e);case 4:m(!0),n&&alert("Berhasil"),t.next=13;break;case 8:t.prev=8,t.t0=t.catch(1),m(!1),alert(t.t0.message),alert("Failed to copy! :(");case 13:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e,n){return t.apply(this,arguments)}}();return Object(i.b)("div",null,Object(i.b)("h2",{className:"title"},"Generator of Link Invitation"),Object(i.b)("h3",{className:"title"},"Zulvia & ihsan Wedding"),y&&Object(i.b)("h4",{style:{textAlign:"center"}},"Memuat data.."),!y&&Object(i.b)(a.Fragment,null,Object(i.b)("div",{className:"row"},Object(i.b)("div",{className:"col-md-4 col-md-offset-4"},Object(i.b)("div",{class:"form-group"},Object(i.b)("label",{for:"exampleInputEmail1"},"Tipe Link"),Object(i.b)("select",{class:"form-control",value:e,onChange:function(t){n(parseInt(t.target.value,10)),p(!1)}},Object(i.b)("option",{value:1},"Individu"),Object(i.b)("option",{value:2},"Semua Undangan"))),1===e?Object(i.b)(a.Fragment,null,Object(i.b)("div",{class:"form-group"},Object(i.b)("label",{for:"exampleInputEmail1"},"Nama Tamu"),Object(i.b)("input",{value:b,onChange:N,type:"text",class:"form-control",placeholder:"Nama tamu.."})),Object(i.b)("button",{type:"submit",class:"btn btn-primary",onClick:function(){return p(!0)}},"Generate Link")):2===e?Object(i.b)(a.Fragment,null,Object(i.b)("div",{class:"checkbox"},Object(i.b)("label",null,Object(i.b)("input",{type:"checkbox",checked:v,onClick:function(){return g(!v)}})," Tipe Invitation (Datang offline)")),Object(i.b)("button",{type:"submit",class:"btn btn-primary",onClick:function(){return p(!0)}},"Generate Link")):void 0)),Object(i.b)("div",{className:"row"},d?1===e?Object(i.b)("div",{className:"col-md-4 col-md-offset-4"},Object(i.b)("div",{class:"alert alert-success",role:"alert",style:{marginTop:"20px"}},Object(i.b)("strong",null,"Berhasil!")," ",Object(i.b)("br",null),Object(i.b)("a",{href:k,target:"_blank",rel:"noreferrer",style:{color:"green",textDecoration:"underline"}},k),Object(i.b)("button",{type:"button",className:"btn btn-default btn-xs",style:{marginLeft:"8px"},onClick:function(){return w(k)}},O?"Tersalin":"Salin"))):2===e?Object(i.b)("div",{className:"col-md-10 col-md-offset-1",style:{marginTop:"28px"}},Object(i.b)("div",{class:"table-responsive"},Object(i.b)("table",{class:"table"},Object(i.b)("thead",null,Object(i.b)("tr",null,Object(i.b)("th",null,"No"),Object(i.b)("th",null,"Nama"),Object(i.b)("th",null,"Keterangan"),Object(i.b)("th",null,"Link"))),Object(i.b)("tbody",null,x.map((function(t,e){var n=v?"&type=invitation&code="+t.code:"",a="https://wedding.zulvia-ihsan.my.id?to="+encodeURIComponent(t.name)+n;return Object(i.b)("tr",null,Object(i.b)("td",null,e+1),Object(i.b)("td",null,t.name),Object(i.b)("td",null,t.desc),Object(i.b)("td",null,Object(i.b)("a",{href:a,target:"_blank",rel:"noreferrer",style:{textDecoration:"underline"}},a),Object(i.b)("button",{className:"btn btn-default btn-sm",style:{fontSize:"12px",padding:"4px 8px",marginLeft:"4px"},onClick:function(){return w(a,!0)}},"copy")))})))))):void 0:null)))};var u={name:"1djhtsf",styles:"padding:24px 8px 8px 8px;.title{text-align:center;}.title__sub{text-align:center;font-family:'Cookie',cursive;font-size:3em;}"};e.default=function(){return Object(i.b)(l.a,null,Object(i.b)("div",{css:u},Object(i.b)(s,null)))}}}]);
//# sourceMappingURL=component---src-pages-generate-link-js-01b16ecb481cb0d61bca.js.map