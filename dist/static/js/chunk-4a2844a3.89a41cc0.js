(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4a2844a3"],{"11d6":function(t,e,o){"use strict";o.r(e);var a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("article-detail",{attrs:{"is-edit":!1}})},n=[],s=o("b11c"),r={name:"CreateArticle",components:{ArticleDetail:s["a"]}},i=r,l=o("2877"),c=Object(l["a"])(i,a,n,!1,null,null,null);e["default"]=c.exports},2423:function(t,e,o){"use strict";o.d(e,"d",(function(){return r})),o.d(e,"c",(function(){return i})),o.d(e,"a",(function(){return l})),o.d(e,"e",(function(){return c})),o.d(e,"b",(function(){return u}));var a=o("b775"),n=o("4328"),s=o.n(n);function r(t){return Object(a["a"])({url:"/articlelist",method:"get",params:t})}function i(t){return Object(a["a"])({url:"/articleOne",method:"get",params:{id:t}})}function l(t){return Object(a["a"])({url:"/articleAdd",method:"post",data:s.a.stringify(t)})}function c(t){return Object(a["a"])({url:"/articleUp",method:"post",data:s.a.stringify(t)})}function u(t){return Object(a["a"])({url:"/articleDel",method:"post",data:s.a.stringify(t)})}},3123:function(t,e,o){"use strict";o.d(e,"a",(function(){return n}));var a=o("b775");function n(){return Object(a["a"])({url:"/qiniu/upload/token",method:"get"})}},"6c23":function(t,e,o){},"8a1b":function(t,e,o){"use strict";o("6c23")},b11c:function(t,e,o){"use strict";var a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"createPost-container"},[o("el-form",{ref:"postForm",staticClass:"form-container",attrs:{model:t.postForm,rules:t.rules}},[o("sticky",{attrs:{"z-index":10,"class-name":"sub-navbar "+t.postForm.status}},[t.postForm.id?o("el-button",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticStyle:{"margin-left":"10px"},attrs:{type:"success"},on:{click:t.submitForm}},[t._v(" 发布 ")]):o("el-button",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticStyle:{"margin-left":"10px"},attrs:{type:"success"},on:{click:t.createForm}},[t._v(" 创建 ")])],1),o("div",{staticClass:"createPost-main-container"},[o("el-row",[o("el-col",{attrs:{span:24}},[o("el-form-item",{staticStyle:{"margin-bottom":"40px"},attrs:{prop:"title"}},[o("MDinput",{attrs:{maxlength:100,name:"name",required:""},model:{value:t.postForm.title,callback:function(e){t.$set(t.postForm,"title",e)},expression:"postForm.title"}},[t._v(" Title ")])],1),o("div",{staticClass:"postInfo-container"},[o("el-row",[o("el-col",{attrs:{span:8}},[o("el-form-item",{staticClass:"postInfo-container-item",attrs:{"label-width":"60px",label:"Author:"}},[o("el-select",{attrs:{placeholder:"请选择"},model:{value:t.postForm.author,callback:function(e){t.$set(t.postForm,"author",e)},expression:"postForm.author"}},t._l(t.options,(function(t){return o("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1)],1),o("el-col",{attrs:{span:10}},[o("el-form-item",{staticClass:"postInfo-container-item",attrs:{"label-width":"120px",label:"Publish Time:"}},[o("el-date-picker",{attrs:{type:"datetime",format:"yyyy-MM-dd HH:mm",placeholder:"Select date and time"},model:{value:t.displayTime,callback:function(e){t.displayTime=e},expression:"displayTime"}})],1)],1),o("el-col",{attrs:{span:6}},[o("el-form-item",{staticClass:"postInfo-container-item",attrs:{"label-width":"90px",label:"Importance:"}},[o("el-rate",{staticStyle:{display:"inline-block"},attrs:{max:3,colors:["#99A9BF","#F7BA2A","#FF9900"],"low-threshold":1,"high-threshold":3},model:{value:t.postForm.importance,callback:function(e){t.$set(t.postForm,"importance",e)},expression:"postForm.importance"}})],1)],1)],1)],1)],1)],1),o("el-form-item",{staticStyle:{"margin-bottom":"40px"},attrs:{"label-width":"70px",label:"Summary:"}},[o("el-input",{staticClass:"article-textarea",attrs:{rows:1,type:"textarea",autosize:"",placeholder:"Please enter the content"},model:{value:t.postForm.content_short,callback:function(e){t.$set(t.postForm,"content_short",e)},expression:"postForm.content_short"}}),o("span",{directives:[{name:"show",rawName:"v-show",value:t.contentShortLength,expression:"contentShortLength"}],staticClass:"word-counter"},[t._v(t._s(t.contentShortLength)+"words")])],1),o("el-form-item",{staticStyle:{"margin-bottom":"30px"},attrs:{prop:"content"}},[o("Tinymce",{ref:"editor",attrs:{height:400},model:{value:t.postForm.content,callback:function(e){t.$set(t.postForm,"content",e)},expression:"postForm.content"}})],1)],1)],1)],1)},n=[],s=o("8256"),r=o("70a2"),i=o("1aba"),l=o("b804"),c=o("61f7"),u=o("2423"),m=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},p=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("aside",[t._v(" Creating and editing pages cannot be cached by keep-alive because keep-alive include does not currently support caching based on routes, so it is currently cached based on component name. If you want to achieve a similar caching effect, you can use a browser caching scheme such as localStorage. Or do not use keep-alive include to cache all pages directly. See details "),o("a",{attrs:{href:"https://panjiachen.github.io/vue-element-admin-site/guide/essentials/tags-view.html",target:"_blank"}},[t._v("Document")])])}],d=o("2877"),f={},h=Object(d["a"])(f,m,p,!1,null,null,null),b=h.exports,g=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("el-dropdown",{attrs:{"show-timeout":100,trigger:"click"}},[o("el-button",{attrs:{plain:""}},[t._v(" "+t._s(t.comment_disabled?"Comment: closed":"Comment: opened")+" "),o("i",{staticClass:"el-icon-caret-bottom el-icon--right"})]),o("el-dropdown-menu",{staticClass:"no-padding",attrs:{slot:"dropdown"},slot:"dropdown"},[o("el-dropdown-item",[o("el-radio-group",{staticStyle:{padding:"10px"},model:{value:t.comment_disabled,callback:function(e){t.comment_disabled=e},expression:"comment_disabled"}},[o("el-radio",{attrs:{label:!0}},[t._v(" Close comment ")]),o("el-radio",{attrs:{label:!1}},[t._v(" Open comment ")])],1)],1)],1)],1)},v=[],y={props:{value:{type:Boolean,default:!1}},computed:{comment_disabled:{get:function(){return this.value},set:function(t){this.$emit("input",t)}}}},_=y,w=Object(d["a"])(_,g,v,!1,null,null,null),k=w.exports,F=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("el-dropdown",{attrs:{"hide-on-click":!1,"show-timeout":100,trigger:"click"}},[o("el-button",{attrs:{plain:""}},[t._v(" Platfroms("+t._s(t.platforms.length)+") "),o("i",{staticClass:"el-icon-caret-bottom el-icon--right"})]),o("el-dropdown-menu",{staticClass:"no-border",attrs:{slot:"dropdown"},slot:"dropdown"},[o("el-checkbox-group",{staticStyle:{padding:"5px 15px"},model:{value:t.platforms,callback:function(e){t.platforms=e},expression:"platforms"}},t._l(t.platformsOptions,(function(e){return o("el-checkbox",{key:e.key,attrs:{label:e.key}},[t._v(" "+t._s(e.name)+" ")])})),1)],1)],1)},x=[],O={props:{value:{required:!0,default:function(){return[]},type:Array}},data:function(){return{platformsOptions:[{key:"a-platform",name:"a-platform"},{key:"b-platform",name:"b-platform"},{key:"c-platform",name:"c-platform"}]}},computed:{platforms:{get:function(){return this.value},set:function(t){this.$emit("input",t)}}}},$=O,j=Object(d["a"])($,F,x,!1,null,null,null),C=j.exports,S=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("el-dropdown",{attrs:{"show-timeout":100,trigger:"click"}},[o("el-button",{attrs:{plain:""}},[t._v(" Link "),o("i",{staticClass:"el-icon-caret-bottom el-icon--right"})]),o("el-dropdown-menu",{staticClass:"no-padding no-border",staticStyle:{width:"400px"},attrs:{slot:"dropdown"},slot:"dropdown"},[o("el-form-item",{staticStyle:{"margin-bottom":"0px"},attrs:{"label-width":"0px",prop:"source_uri"}},[o("el-input",{attrs:{placeholder:"Please enter the content"},model:{value:t.source_uri,callback:function(e){t.source_uri=e},expression:"source_uri"}},[o("template",{slot:"prepend"},[t._v(" URL ")])],2)],1)],1)],1)},T=[],D={props:{value:{type:String,default:""}},computed:{source_uri:{get:function(){return this.value},set:function(t){this.$emit("input",t)}}}},E=D,A=Object(d["a"])(E,S,T,!1,null,null,null),P=A.exports,L={status:"draft",title:"",content:"",content_short:"",source_uri:"",image_uri:"",display_time:void 0,id:void 0,platforms:["a-platform"],comment_disabled:!1,importance:0},I={name:"ArticleDetail",components:{Tinymce:s["a"],MDinput:i["a"],Upload:r["a"],Sticky:l["a"],Warning:b,CommentDropdown:k,PlatformDropdown:C,SourceUrlDropdown:P},props:{isEdit:{type:Boolean,default:!1}},data:function(){var t=this,e=function(e,o,a){""===o?(t.$message({message:e.field+"为必传项",type:"error"}),a(new Error(e.field+"为必传项"))):a()},o=function(e,o,a){o?Object(c["b"])(o)?a():(t.$message({message:"外链url填写不正确",type:"error"}),a(new Error("外链url填写不正确"))):a()};return{postForm:Object.assign({},L),loading:!1,userListOptions:[],rules:{image_uri:[{validator:e}],title:[{validator:e}],content:[{validator:e}],source_uri:[{validator:o,trigger:"blur"}]},tempRoute:{},options:[{value:"jesonker",label:"jesonker"},{value:"jiekeliu",label:"jiekeliu"},{value:"刘杰",label:"刘杰"}]}},computed:{contentShortLength:function(){return this.postForm.content_short.length},displayTime:{get:function(){return+new Date(this.postForm.display_time)},set:function(t){this.postForm.display_time=new Date(t)}}},created:function(){if(this.isEdit){var t=this.$route.params&&this.$route.params.id;this.fetchData(t)}this.tempRoute=Object.assign({},this.$route)},methods:{fetchData:function(t){var e=this;Object(u["c"])(t).then((function(t){e.postForm=t.data,e.setTagsViewTitle(),e.setPageTitle()})).catch((function(t){console.log(t)}))},setTagsViewTitle:function(){var t="文章编辑 序号",e=Object.assign({},this.tempRoute,{title:"".concat(t,"-").concat(this.postForm.id)});this.$store.dispatch("tagsView/updateVisitedView",e)},setPageTitle:function(){var t="文章编辑 序号";document.title="".concat(t," - ").concat(this.postForm.id)},submitForm:function(){var t=this;Object(u["e"])(this.postForm).then((function(e){if("ok"!=e.status)return console.log("error submit!!"),!1;t.loading=!0,t.$notify({title:"成功",message:"发布文章成功",type:"success",duration:2e3}),t.postForm.status="published",t.loading=!1}))},createForm:function(){var t=this;0!==this.postForm.content.length&&0!==this.postForm.title.length?(this.postForm.platforms="",Object(u["a"])(this.postForm).then((function(e){"ok"==e.status?(t.$message({message:e.info,type:"success",showClose:!0,duration:1e3}),t.postForm.status="created"):t.$message({message:e.info,type:"error",showClose:!0,duration:1e3})}))):this.$message({message:"请填写必要的标题和内容",type:"warning"})}}},V=I,B=(o("fcd3"),o("8a1b"),Object(d["a"])(V,a,n,!1,null,"b923382e",null));e["a"]=B.exports},eb1c:function(t,e,o){},fcd3:function(t,e,o){"use strict";o("eb1c")}}]);