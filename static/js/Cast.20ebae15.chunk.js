"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[709],{247:function(t,e,r){r.r(e);var n=r(982),a=r(885),o=r(791),i=r(871),c=r(184);e.default=function(){var t=(0,o.useState)([]),e=(0,a.Z)(t,2),r=e[0],u=e[1],f=(0,i.UO)().movieId;return(0,o.useEffect)((function(){fetch("https://api.themoviedb.org/3/movie/".concat(f,"/credits?api_key=a4a29fffc470fecd93a30cf31010c680&language=en-US")).then((function(t){return t.ok?t.json():Promise.reject(new Error("\u041f\u043e \u0412\u0430\u0448\u043e\u043c\u0443 \u0437\u0430\u043f\u0438\u0442\u0443 \u043d\u0456\u0447\u043e\u0433\u043e \u043d\u0435 \u0437\u043d\u0430\u0439\u0434\u0435\u043d\u043e!"))})).then((function(t){u((function(){return(0,n.Z)(t.cast)}))}))}),[f]),(0,c.jsx)("div",{children:(0,c.jsx)("ul",{children:r&&r.map((function(t){return(0,c.jsxs)("li",{children:[(0,c.jsx)("img",{src:"https://image.tmdb.org/t/p/w400".concat(t.profile_path),width:"100px",alt:"Actor"}),(0,c.jsx)("p",{children:t.name}),(0,c.jsxs)("p",{children:["Character: ",t.character]})]},t.id)}))})})}},982:function(t,e,r){r.d(e,{Z:function(){return o}});var n=r(907);var a=r(181);function o(t){return function(t){if(Array.isArray(t))return(0,n.Z)(t)}(t)||function(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||(0,a.Z)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}}]);
//# sourceMappingURL=Cast.20ebae15.chunk.js.map