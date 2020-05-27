!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=21)}([function(e,t){e.exports=require("sequelize")},function(e,t){e.exports=require("yup")},function(e,t,r){"use strict";var n=r(0),o=r.n(n),a=r(11),i=r.n(a);function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t,r,n,o,a,i){try{var u=e[a](i),c=u.value}catch(e){return void r(e)}u.done?t(c):Promise.resolve(c).then(n,o)}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function l(e,t,r){return(l="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,r){var n=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=v(e)););return e}(e,t);if(n){var o=Object.getOwnPropertyDescriptor(n,t);return o.get?o.get.call(r):o.value}})(e,t,r||e)}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function d(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=v(e);if(t){var o=v(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return y(this,r)}}function y(e,t){return!t||"object"!==u(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function v(e){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var h=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(u,e);var t,r,n,a=d(u);function u(){return s(this,u),a.apply(this,arguments)}return t=u,n=[{key:"init",value:function(e){return l(v(u),"init",this).call(this,{name:o.a.STRING,email:o.a.STRING,password:o.a.VIRTUAL,password_hash:o.a.STRING,admin:o.a.BOOLEAN},{sequelize:e}),this.addHook("beforeSave",function(){var e,t=(e=regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.password){e.next=4;break}return e.next=3,i.a.hash(t.password,8);case 3:t.password_hash=e.sent;case 4:case"end":return e.stop()}}),e)})),function(){var t=this,r=arguments;return new Promise((function(n,o){var a=e.apply(t,r);function i(e){c(a,n,o,i,u,"next",e)}function u(e){c(a,n,o,i,u,"throw",e)}i(void 0)}))});return function(e){return t.apply(this,arguments)}}()),this}}],(r=[{key:"checkPassword",value:function(e){return i.a.compare(e,this.password_hash)}}])&&f(t.prototype,r),n&&f(t,n),u}(n.Model);t.a=h},function(e,t,r){"use strict";var n=r(0),o=r.n(n);function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t,r,n,o,a,i){try{var u=e[a](i),c=u.value}catch(e){return void r(e)}u.done?t(c):Promise.resolve(c).then(n,o)}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function s(e,t,r){return(s="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,r){var n=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=d(e)););return e}(e,t);if(n){var o=Object.getOwnPropertyDescriptor(n,t);return o.get?o.get.call(r):o.value}})(e,t,r||e)}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function l(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=d(e);if(t){var o=d(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return p(this,r)}}function p(e,t){return!t||"object"!==a(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var y=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(p,e);var t,r,n,a=l(p);function p(){return u(this,p),a.apply(this,arguments)}return t=p,n=[{key:"init",value:function(e){return s(d(p),"init",this).call(this,{title:o.a.STRING,brand:o.a.STRING,model:o.a.STRING,year_fab:o.a.STRING,year_mod:o.a.STRING,doors:o.a.STRING,transmission:o.a.STRING,fuel:o.a.STRING,mileage:o.a.STRING,value:o.a.STRING,value_per:o.a.STRING,short_description:o.a.STRING,slug:o.a.STRING,description:o.a.TEXT,optionals:o.a.TEXT,thumbimage_id:o.a.INTEGER},{sequelize:e,tableName:"vehicles"}),this.addHook("beforeSave",function(){var e,t=(e=regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.brand&&t.model&&t.year_fab&&(r="".concat(t.brand.toLowerCase()," ").concat(t.model.toLowerCase()," ").concat(t.year_fab.toLowerCase()," ").concat(t.year_mod.toLowerCase()),t.slug=r.replace(/\W+/g,"-"));case 1:case"end":return e.stop()}}),e)})),function(){var t=this,r=arguments;return new Promise((function(n,o){var a=e.apply(t,r);function u(e){i(a,n,o,u,c,"next",e)}function c(e){i(a,n,o,u,c,"throw",e)}u(void 0)}))});return function(e){return t.apply(this,arguments)}}()),this}},{key:"associate",value:function(e){this.belongsTo(e.User,{foreignKey:"user_id",as:"user"}),this.belongsTo(e.ThumbImage,{foreignKey:"thumbimage_id",as:"thumbimage"})}}],(r=null)&&c(t.prototype,r),n&&c(t,n),p}(n.Model);t.a=y},function(e,t,r){"use strict";var n=r(0),o=r.n(n),a=r(8);function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function s(e,t,r){return(s="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,r){var n=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=d(e)););return e}(e,t);if(n){var o=Object.getOwnPropertyDescriptor(n,t);return o.get?o.get.call(r):o.value}})(e,t,r||e)}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function l(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=d(e);if(t){var o=d(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return p(this,r)}}function p(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var y=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(p,e);var t,r,n,i=l(p);function p(){return u(this,p),i.apply(this,arguments)}return t=p,n=[{key:"init",value:function(e){return s(d(p),"init",this).call(this,{name:o.a.STRING,path:o.a.STRING,url:{type:o.a.VIRTUAL,get:function(){return"".concat(a.a,"/files/").concat(this.path)}}},{sequelize:e}),this}},{key:"associate",value:function(e){this.belongsTo(e.Vehicle,{foreignKey:"vehicle_id",as:"vehicle"})}}],(r=null)&&c(t.prototype,r),n&&c(t,n),p}(n.Model);t.a=y},function(e,t){e.exports=require("path")},function(e,t){e.exports=require("express")},function(e,t,r){"use strict";var n=r(0),o=r.n(n),a=r(8);function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function s(e,t,r){return(s="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,r){var n=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=d(e)););return e}(e,t);if(n){var o=Object.getOwnPropertyDescriptor(n,t);return o.get?o.get.call(r):o.value}})(e,t,r||e)}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function l(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=d(e);if(t){var o=d(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return p(this,r)}}function p(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var y=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(p,e);var t,r,n,i=l(p);function p(){return u(this,p),i.apply(this,arguments)}return t=p,n=[{key:"init",value:function(e){return s(d(p),"init",this).call(this,{name:o.a.STRING,path:o.a.STRING,url:{type:o.a.VIRTUAL,get:function(){return"".concat(a.a,"/files/").concat(this.path)}}},{sequelize:e}),this}}],(r=null)&&c(t.prototype,r),n&&c(t,n),p}(n.Model);t.a=y},function(e,t,r){"use strict";t.a="http://localhost:3333"},function(e,t){e.exports=require("multer")},function(e,t){e.exports=require("jsonwebtoken")},function(e,t){e.exports=require("bcryptjs")},function(e,t,r){"use strict";(function(e){var n=r(4),o=r(17),a=r.n(o),i=r(5);function u(e,t,r,n,o,a,i){try{var u=e[a](i),c=u.value}catch(e){return void r(e)}u.done?t(c):Promise.resolve(c).then(n,o)}function c(e){return function(){var t=this,r=arguments;return new Promise((function(n,o){var a=e.apply(t,r);function i(e){u(a,n,o,i,c,"next",e)}function c(e){u(a,n,o,i,c,"throw",e)}i(void 0)}))}}function s(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var f=function(){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t)}var r,o,u,f,l;return r=t,(o=[{key:"store",value:(l=c(regeneratorRuntime.mark((function e(t,r){var o,a,i;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=t.files,a=t.params.vehicleId,i=o.map((function(e){return{name:e.originalname,path:e.filename,vehicle_id:parseInt(a)}})),e.prev=3,i.forEach((function(e){n.a.create(e)})),e.abrupt("return",r.json({ok:!0,message:"Imagens adicionadas com sucesso!"}));case 8:return e.prev=8,e.t0=e.catch(3),e.abrupt("return",r.status(400).json({error:e.t0.message}));case 11:case"end":return e.stop()}}),e,null,[[3,8]])}))),function(e,t){return l.apply(this,arguments)})},{key:"remove",value:(f=c(regeneratorRuntime.mark((function t(r,o){var u,c,s;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return u=r.params.id,t.prev=1,t.next=4,n.a.findByPk(u);case 4:return c=t.sent,t.next=7,n.a.destroy({where:{id:u}});case 7:return s=Object(i.resolve)(e,"..","..","..","temp","uploads"),a.a.unlink("".concat(s,"/").concat(c.path),(function(e){if(e)throw e})),t.abrupt("return",o.json({ok:!0,message:"Imagem deletada!"}));case 12:return t.prev=12,t.t0=t.catch(1),t.abrupt("return",o.status(400).json({error:t.t0.message}));case 15:case"end":return t.stop()}}),t,null,[[1,12]])}))),function(e,t){return f.apply(this,arguments)})}])&&s(r.prototype,o),u&&s(r,u),t}();t.a=new f}).call(this,"/")},function(e,t,r){"use strict";(function(e){var n=r(6),o=r.n(n),a=r(5),i=r.n(a),u=r(14),c=r.n(u),s=r(20);r(8),r(22);function f(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var l=function(){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this.server=o()(),this.middlewares(),this.routes()}var r,n,a;return r=t,(n=[{key:"middlewares",value:function(){this.server.use(c()()),this.server.use(o.a.json()),this.server.use("/files",o.a.static(i.a.resolve(e,"..","temp","uploads")))}},{key:"routes",value:function(){this.server.use(s.a)}}])&&f(r.prototype,n),a&&f(r,a),t}();t.a=(new l).server}).call(this,"/")},function(e,t){e.exports=require("cors")},function(e,t,r){"use strict";(function(e){var n=r(9),o=r.n(n),a=r(16),i=r.n(a),u=r(5);t.a={storage:o.a.diskStorage({destination:Object(u.resolve)(e,"..","..","temp","uploads"),filename:function(e,t,r){i.a.randomBytes(16,(function(e,n){return e?r(e):r(null,n.toString("hex")+Object(u.extname)(t.originalname))}))}})}}).call(this,"/")},function(e,t){e.exports=require("crypto")},function(e,t){e.exports=require("fs")},function(e,t){e.exports=require("util")},function(e,t){e.exports={dialect:"mysql",host:"localhost",username:"root",password:"",database:"origem_db",define:{timestamps:!0,underscored:!0,underscoredAll:!0}}},function(e,t,r){"use strict";var n=r(6),o=r(9),a=r.n(o),i=r(15),u=r(1),c=r(2);function s(e,t,r,n,o,a,i){try{var u=e[a](i),c=u.value}catch(e){return void r(e)}u.done?t(c):Promise.resolve(c).then(n,o)}function f(e){return function(){var t=this,r=arguments;return new Promise((function(n,o){var a=e.apply(t,r);function i(e){s(a,n,o,i,u,"next",e)}function u(e){s(a,n,o,i,u,"throw",e)}i(void 0)}))}}function l(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var p=new(function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,r,n,o,a;return t=e,(r=[{key:"store",value:(a=f(regeneratorRuntime.mark((function e(t,r){var n,o,a,i,s,f;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=u.object().shape({name:u.string().required(),email:u.string().email().required(),password:u.string().required().min(6)}),e.next=3,n.isValid(t.body);case 3:if(e.sent){e.next=5;break}return e.abrupt("return",r.status(400).json({error:"Houve algum erro de validação"}));case 5:return e.next=7,c.a.findOne({where:{email:t.body.email}});case 7:if(!e.sent){e.next=10;break}return e.abrupt("return",r.status(400).json({error:"Usuário já existe"}));case 10:return e.next=12,c.a.create(t.body);case 12:return o=e.sent,a=o.id,i=o.name,s=o.email,f=o.admin,e.abrupt("return",r.json({id:a,name:i,email:s,admin:f}));case 18:case"end":return e.stop()}}),e)}))),function(e,t){return a.apply(this,arguments)})},{key:"update",value:(o=f(regeneratorRuntime.mark((function e(t,r){var n,o,a,i,s,f,l,p,d;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=u.object().shape({name:u.string(),email:u.string().email(),oldPassword:u.string().min(6),password:u.string().min(6).when("oldPassword",(function(e,t){return e?t.required():t})),confirmPassword:u.string().when("password",(function(e,t){return e?t.required().oneOf([u.ref("password")]):t}))}),e.next=3,n.isValid(t.body);case 3:if(e.sent){e.next=5;break}return e.abrupt("return",r.status(400).json({error:"Houve algum erro de validação na edição"}));case 5:return o=t.body,a=o.email,i=o.oldPassword,e.next=8,c.a.findByPk(t.userId);case 8:if(s=e.sent,!a||a===s.email){e.next=15;break}return e.next=12,c.a.findOne({where:{email:a}});case 12:if(!e.sent){e.next=15;break}return e.abrupt("return",r.status(400).json({error:"Usuário já existe"}));case 15:if(e.t0=i,!e.t0){e.next=20;break}return e.next=19,s.checkPassword(i);case 19:e.t0=!e.sent;case 20:if(!e.t0){e.next=22;break}return e.abrupt("return",r.status(401).json({error:"Senha não corresponde"}));case 22:return e.next=24,s.update(t.body);case 24:return f=e.sent,l=f.id,p=f.name,d=f.admin,e.abrupt("return",r.json({id:l,name:p,email:a,admin:d}));case 29:case"end":return e.stop()}}),e)}))),function(e,t){return o.apply(this,arguments)})}])&&l(t.prototype,r),n&&l(t,n),e}()),d=r(10),y=r.n(d),v="b7256732b5fd3bf62bf5a110edb385d4",h="7d";function m(e,t,r,n,o,a,i){try{var u=e[a](i),c=u.value}catch(e){return void r(e)}u.done?t(c):Promise.resolve(c).then(n,o)}function b(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var g=new(function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,r,n,o,a;return t=e,(r=[{key:"store",value:(o=regeneratorRuntime.mark((function e(t,r){var n,o,a,i,s,f,l,p;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=u.object().shape({email:u.string().email().required(),password:u.string().required()}),e.next=3,n.isValid(t.body);case 3:if(e.sent){e.next=5;break}return e.abrupt("return",r.status(400).json({error:"Houve algum erro de validação"}));case 5:return o=t.body,a=o.email,i=o.password,e.next=8,c.a.findOne({where:{email:a}});case 8:if(s=e.sent){e.next=11;break}return e.abrupt("return",r.status(401).json({error:"Usuário não existe"}));case 11:return e.next=13,s.checkPassword(i);case 13:if(e.sent){e.next=15;break}return e.abrupt("return",r.status(401).json({error:"Senha é inválida"}));case 15:return f=s.id,l=s.name,p=s.admin,e.abrupt("return",r.json({user:{id:f,name:l,email:a,admin:p},token:y.a.sign({id:f},v,{expiresIn:h})}));case 17:case"end":return e.stop()}}),e)})),a=function(){var e=this,t=arguments;return new Promise((function(r,n){var a=o.apply(e,t);function i(e){m(a,r,n,i,u,"next",e)}function u(e){m(a,r,n,i,u,"throw",e)}i(void 0)}))},function(e,t){return a.apply(this,arguments)})}])&&b(t.prototype,r),n&&b(t,n),e}()),w=r(12),x=r(3),j=r(7),R=r(4);function O(e,t,r,n,o,a,i){try{var u=e[a](i),c=u.value}catch(e){return void r(e)}u.done?t(c):Promise.resolve(c).then(n,o)}function k(e){return function(){var t=this,r=arguments;return new Promise((function(n,o){var a=e.apply(t,r);function i(e){O(a,n,o,i,u,"next",e)}function u(e){O(a,n,o,i,u,"throw",e)}i(void 0)}))}}function P(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var _=new(function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,r,n,o,a,i,u,c;return t=e,(r=[{key:"store",value:(c=k(regeneratorRuntime.mark((function e(t,r){var n,o,a,i,u,c,s,f;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(n=t.body).user_id=t.userId,e.next=4,x.a.create(n);case 4:return o=e.sent,a=o.id,i=o.title,u=o.brand,c=o.model,s=o.year_fab,f=o.year_mod,e.abrupt("return",r.json({id:a,title:i,brand:u,model:c,year_fab:s,year_mod:f}));case 12:case"end":return e.stop()}}),e)}))),function(e,t){return c.apply(this,arguments)})},{key:"patch",value:(u=k(regeneratorRuntime.mark((function e(t,r){var n,o,a,i,u;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n=t.params.vehicleId,e.next=4,x.a.findByPk(n);case 4:if(e.sent){e.next=7;break}throw new Error("Veículo não encontrado.");case 7:return o=t.file,a=o.originalname,i=o.filename,e.next=10,j.a.create({name:a,path:i});case 10:return u=e.sent,e.next=13,x.a.update({thumbimage_id:u.id},{where:{id:n}});case 13:r.json({ok:!0,message:"Imagem de destaque atualizada com sucesso."}),e.next=19;break;case 16:return e.prev=16,e.t0=e.catch(0),e.abrupt("return",r.status(400).json({error:e.t0.message}));case 19:case"end":return e.stop()}}),e,null,[[0,16]])}))),function(e,t){return u.apply(this,arguments)})},{key:"index",value:(i=k(regeneratorRuntime.mark((function e(t,r){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.findAll({order:["id"],attributes:["id","title","value","value_per","short_description","slug"],include:[{model:j.a,as:"thumbimage",attributes:["id","name","path","url"]}]});case 2:return n=e.sent,e.abrupt("return",r.json(n));case 4:case"end":return e.stop()}}),e)}))),function(e,t){return i.apply(this,arguments)})},{key:"detail",value:(a=k(regeneratorRuntime.mark((function e(t,r){var n,o,a;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n=t.params.vehicleId,e.next=4,x.a.findAll({where:{id:n},order:["id"],attributes:["id","title","brand","model","year_fab","year_mod","doors","transmission","fuel","mileage","value","value_per","short_description","slug","description","optionals"],include:[{model:j.a,as:"thumbimage",attributes:["id","name","path","url"]}]});case 4:if((o=e.sent).length){e.next=7;break}throw new Error("Veículo não encontrado.");case 7:return e.next=9,R.a.findAll({where:{vehicle_id:n},order:["id"],attributes:["id","url","path"]});case 9:return a=e.sent,e.abrupt("return",r.json({vehicle:o,images:a}));case 13:return e.prev=13,e.t0=e.catch(0),e.abrupt("return",r.status(400).json({error:e.t0.message}));case 16:case"end":return e.stop()}}),e,null,[[0,13]])}))),function(e,t){return a.apply(this,arguments)})},{key:"remove",value:(o=k(regeneratorRuntime.mark((function e(t,r){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.params.vehicleId,e.prev=1,e.next=4,x.a.destroy({where:{id:n}});case 4:return e.abrupt("return",r.json({ok:!0,message:"Veículo deletado!"}));case 7:return e.prev=7,e.t0=e.catch(1),e.abrupt("return",r.status(400).json({error:e.t0.message}));case 10:case"end":return e.stop()}}),e,null,[[1,7]])}))),function(e,t){return o.apply(this,arguments)})}])&&P(t.prototype,r),n&&P(t,n),e}()),S=r(18);function T(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],n=!0,o=!1,a=void 0;try{for(var i,u=e[Symbol.iterator]();!(n=(i=u.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(e){o=!0,a=e}finally{try{n||null==u.return||u.return()}finally{if(o)throw a}}return r}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return I(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return I(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function I(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function E(e,t,r,n,o,a,i){try{var u=e[a](i),c=u.value}catch(e){return void r(e)}u.done?t(c):Promise.resolve(c).then(n,o)}var q=function(){var e,t=(e=regeneratorRuntime.mark((function e(t,r,n){var o,a,i,u,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o=t.headers.authorization){e.next=3;break}return e.abrupt("return",r.status(401).json({error:"Usuário não autenticado!"}));case 3:return a=o.split(" "),i=T(a,2),u=i[1],e.prev=4,e.next=7,Object(S.promisify)(y.a.verify)(u,v);case 7:return c=e.sent,t.userId=c.id,e.abrupt("return",n());case 12:return e.prev=12,e.t0=e.catch(4),e.abrupt("return",r.status(401).json({error:"Token é inválido"}));case 15:case"end":return e.stop()}}),e,null,[[4,12]])})),function(){var t=this,r=arguments;return new Promise((function(n,o){var a=e.apply(t,r);function i(e){E(a,n,o,i,u,"next",e)}function u(e){E(a,n,o,i,u,"throw",e)}i(void 0)}))});return function(e,r,n){return t.apply(this,arguments)}}(),N=new n.Router,G=a()(i.a);N.post("/users",p.store),N.post("/sessions",g.store),N.get("/vehicles",_.index),N.get("/vehicles/:vehicleId",_.detail),N.use(q),N.put("/users",p.update),N.post("/vehicles",_.store),N.delete("/vehicle/remove/:vehicleId",_.remove),N.patch("/vehicles/:vehicleId",G.single("file"),_.patch),N.post("/files/vehicle/:vehicleId",G.array("files"),w.a.store),N.delete("/files/remove/:id",w.a.remove);t.a=N},function(e,t,r){"use strict";r.r(t),r(13).a.listen(3333)},function(e,t,r){"use strict";var n=r(0),o=r.n(n),a=r(19),i=r.n(a),u=r(2),c=r(4),s=r(3),f=r(7);function l(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var p=[u.a,c.a,s.a,f.a];new(function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.init()}var t,r,n;return t=e,(r=[{key:"init",value:function(){var e=this;this.connection=new o.a(i.a),p.map((function(t){return t.init(e.connection)})).map((function(t){return t.associate&&t.associate(e.connection.models)}))}}])&&l(t.prototype,r),n&&l(t,n),e}())}]);