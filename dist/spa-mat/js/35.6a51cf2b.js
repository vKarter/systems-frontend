(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[35],{"4Yag":function(t,a,e){"use strict";var i=e("Y9fb"),s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("form",{staticClass:"form-wrap"},[e("div",{staticClass:"form-top"},[t._t("form-top-item")],2),e("div",{staticClass:"form-middle"},[t._t("form-middle-item")],2),e("div",{staticClass:"form-bottom"},[t._t("form-bottom-item")],2)])},o=[],n={},l=n,r=(e("kVOQ"),e("KHd+")),c=Object(r["a"])(l,s,o,!1,null,"4a17f591",null),u=c.exports;e.d(a,"a",function(){return i["a"]}),e.d(a,!1,function(){return u})},"8cZj":function(t,a,e){},ERwe:function(t,a,e){"use strict";var i=e("SHnS"),s=e.n(i);s.a},Excf:function(t,a,e){"use strict";var i=e("yQ8e"),s=e.n(i);s.a},FYjI:function(t,a,e){},GmLm:function(t,a,e){},GsHD:function(t,a,e){"use strict";e.r(a);var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("card-full",[e("span",{attrs:{slot:"form-title"},slot:"form-title"},[t._v(t._s(t.$t("routes.users.manage.title")))]),e("p",{staticClass:"caption",attrs:{slot:"form-caption"},slot:"form-caption"},[t._v(t._s(t.$t("routes.users.manage.caption")))]),void 0!==t.payload?e("form-main",{attrs:{schema:t.schema},model:{value:t.payload,callback:function(a){t.payload=a},expression:"payload"}}):t._e()],1)},s=[],o=e("huk2"),n=e("4Yag"),l=e("ta7f"),r={components:{CardFull:o["a"],FormMain:n["a"]},data:function(){var t=this;return{schema:{fields:{name:{type:"text",label:"labels.name",errorLabel:"errors.field_required",validators:{required:l["required"],minLength:Object(l["minLength"])(2)}},email:{type:"text",label:"labels.email",errorLabel:"errors.invalid_email",validators:{required:l["required"],email:l["email"]}},location:{type:"text",label:"labels.location"},organisation:{type:"text",label:"labels.organisation"},password:{type:"password",label:"labels.password",errorLabel:"errors.invalid_password",attributes:{autocomplete:"section-login new-password"},validators:{minLength:Object(l["minLength"])(6)}},password_confirmation:{type:"password",label:"labels.password_confirmation",errorLabel:"errors.invalid_password_confirmation",attributes:{autocomplete:"section-login current-password-confirmation"},validators:{sameAsPassword:Object(l["sameAs"])("password")}}},submit:{handler:function(){return t.$store.dispatch("users/patch",[t.$store.state.auth.payload.userId,t.payload])},label:"buttons.save_changes",message:"messages.update_success"}},payload:t.$store.dispatch("users/get",t.$route.params.id)}}},c=r,u=(e("WHmK"),e("KHd+")),d=Object(u["a"])(c,i,s,!1,null,null,null);a["default"]=d.exports},OKdF:function(t,a,e){},SHnS:function(t,a,e){},VDrJ:function(t,a,e){"use strict";var i=e("wh9e"),s=e.n(i);s.a},WHmK:function(t,a,e){"use strict";var i=e("8cZj"),s=e.n(i);s.a},Y9fb:function(t,a,e){"use strict";var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("form",{on:{submit:function(a){return a.preventDefault(),t.handleSubmit(a)}}},[e("div",[t._l(t.fields,function(a,i){return t.loaded?[t.isType(a.type,"checkbox")?e("form-row-checkbox",{staticClass:"col-sm-12 no-margin",class:{"col-xl-6":!a.fullWidth,"col-12":a.fullWidth},attrs:{type:a.type,validation:t.$v.local[i],attributes:a.attributes,label:t.$t(a.label),"helper-label":t.$t(a.helperLabel),"error-label":t.$t(a.errorLabel)},model:{value:t.local[i],callback:function(a){t.$set(t.local,i,a)},expression:"local[key]"}}):e("form-row",{staticClass:"col-sm-12 no-margin",class:{"col-xl-6":!a.fullWidth,"col-12":a.fullWidth},attrs:{type:a.type,"select-options":a.options,validation:a.validators?t.$v.local[i]:void 0,attributes:a.attributes,label:t.$t(a.label),"helper-label":t.$t(a.helperLabel),"error-label":t.$t(a.errorLabel)},model:{value:t.local[i],callback:function(a){t.$set(t.local,i,a)},expression:"local[key]"}})]:t._e()})],2),e("div",{staticClass:"row xs-gutter full-width justify-end items-end"},[t._t("form-buttons-add"),t._t("form-buttons",[e("submit-button",{staticClass:"q-mt-md",attrs:{active:t.maySubmit}},[t._v(t._s(t.$t(t.schema.submit.label)||t.$t("buttons.submit")))])])],2),e("mb-notification-service")],1)},s=[],o=e("Kw5r"),n=e("Hc5T"),l=e.n(n),r=e("9oTK"),c=e.n(r),u=function(){var t=this,a=t.$createElement,e=t._self._c||a;return"hidden"===t.type?e("q-input",{attrs:{type:t.type},model:{value:t.local,callback:function(a){t.local=a},expression:"local"}}):e("q-field",{attrs:{dark:!0,label:t.fieldLabel,error:t.validation?t.validation.$error:void 0,"error-label":t.errorLabel,helper:t.helperLabel||""}},["select"===t.type?e("q-select",{attrs:{"float-label":t.label,dark:!0,options:t.selectOptions},model:{value:t.local,callback:function(a){t.local=a},expression:"local"}}):e("q-input",{attrs:{dark:!0,"float-label":t.label,type:t.type,attributes:t.attributes},model:{value:t.local,callback:function(a){t.local=a},expression:"local"}})],1)},d=[],m={props:["value","attributes","validation","type","label","fieldLabel","errorLabel","helperLabel","selectOptions"],data:function(){return{local:void 0}},computed:{error:function(){if("hidden"!==this.type)return this.validation&&this.validation.$error}},watch:{local:function(t){"hidden"!==this.type&&(this.validation&&this.validation.$touch(),this.$emit("input",t))}},created:function(){this.local=this.value,"hidden"!==this.type&&this.validation&&this.validation.$reset()}},f=m,p=(e("Excf"),e("KHd+")),h=Object(p["a"])(f,u,d,!1,null,null,null),b=h.exports,v=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("q-field",{attrs:{dark:!0,error:t.validation?t.validation.$error:void 0}},[e("q-checkbox",{attrs:{dark:!0,label:t.label,color:"primary"},model:{value:t.local,callback:function(a){t.local=a},expression:"local"}})],1)},g=[],y={props:["value","validation","type","label"],data:function(){return{local:!1}},computed:{error:function(){return this.validation&&this.validation.$error}},watch:{local:function(t){this.validation&&this.validation.$touch(),this.$emit("input",t)}},created:function(){this.local="boolean"===typeof this.value&&this.value}},_=y,$=(e("ERwe"),Object(p["a"])(_,v,g,!1,null,null,null)),k=$.exports,w=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("q-btn",{attrs:{dark:!0,outline:"","icon-right":"forward",color:t.active?"primary":"light",type:"submit",disabled:!t.active},on:{click:t.clickHandler}},[t._t("default")],2)},C=[],x={props:["active","click"],methods:{clickHandler:function(){if("function"===typeof this.click){for(var t=arguments.length,a=new Array(t),e=0;e<t;e++)a[e]=arguments[e];this.click(a)}}}},L=x,O=(e("jn02"),Object(p["a"])(L,w,C,!1,null,null,null)),j=O.exports,q=e("4IOb");o["a"].use(l.a);var S={components:{FormRow:b,FormRowCheckbox:k,SubmitButton:j},props:["value","schema"],data:function(){return{typemap:{password:"text"},local:void 0,loaded:!1}},mounted:function(){this.initForm()},computed:{initial:function(){var t={};for(var a in this.fields)this.fields[a].initial&&(t[a]=this.fields[a].initial);return this.$store.state.forms[this.schema.state]||t},fields:function(){return this.schema&&this.schema.fields?this.schema.fields:{}},validators:function(){var t={};for(var a in this.fields)this.fields[a].validators&&(t[a]=this.fields[a].validators);return t},isDirty:function(){var t=!1;if(this.$v&&this.$v.local){for(var a in this.local)this.$v.local[a]&&this.$v.local[a].$dirty&&(t=!0);return t}},maySubmit:function(){return!this.$v&&!this.$v.local||!this.$v.local.$invalid&&this.isDirty}},methods:{initForm:function(){var t=this;this.value&&this.value.then?this.value.then(function(a){t.local=a,t.loaded=!0}):(this.local=this.initial,this.loaded=!0)},handleSubmit:function(){if(this.maySubmit&&"function"===typeof this.schema.submit.handler){var t=this.$store,a=this.schema;q["d"].show({spinner:q["N"],spinnerSize:200,spinnerColor:"grey"}),c.a.resolve().then(a.submit.handler).then(function(e){var i=a.submit?a.submit.message:void 0;i=i||(e?e.message():"messages.submit_success"),q["d"].hide(),t.commit("notifications/addMessage",{body:i,type:"success"}),a.state&&t.commit("forms/".concat(a.state),null)}).catch(function(a){q["d"].hide(),console.debug("Form submit:",a),t.commit("notifications/addMessage",{body:a.message?"".concat(a.message).concat(a.code?" ("+a.code+")":""):"messages.submit_error",mode:"alert",type:"error"})})}},isType:function(t,a){return this.typemap[t]?this.typemap[t]===a:t===a}},watch:{local:{handler:function(t){t||this.initForm(),this.$emit("input",t),this.schema.state&&this.$store.commit("forms/".concat(this.schema.state),t)},deep:!0}},validations:function(){return{local:this.validators}}},F=S,H=(e("pb+S"),Object(p["a"])(F,i,s,!1,null,null,null));a["a"]=H.exports},b2zc:function(t,a,e){t.exports=e.p+"img/motionbank-logo.53196fd.png"},huk2:function(t,a,e){"use strict";var i=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"row justify-center items-center"},[i("div",{attrs:{id:"back-button"}},[t._t("backButton")],2),i("div",{staticClass:"column col-10"},[i("q-card",{staticClass:"full-width no-margin",attrs:{color:"dark"}},[i("div",{staticClass:"layout-padding"},[i("q-card-main",{staticClass:"no-margin"},[t._t("nav-button"),i("div",{staticClass:"row justify-between content-stretch"},[i("div",{staticClass:"column width-3of4"},[i("h5",{staticClass:"caption light-paragraph"},[t._t("form-title")],2),t._t("form-caption")],2),t._t("form-logo",[i("a",{staticClass:"gt-md logo",on:{click:function(a){t.openURL("http://www.motionbank.org")}}},[i("img",{staticClass:"responsive",attrs:{src:e("b2zc")}})])])],2)],2),i("q-card-main",{staticClass:"no-margin"},[t._t("default")],2)],1)]),i("site-footer")],1)])},s=[],o=e("4IOb"),n=e("vpOM"),l={components:{SiteFooter:n["a"]},data:function(){return{openURL:o["Ca"]}}},r=l,c=(e("VDrJ"),e("KHd+")),u=Object(c["a"])(r,i,s,!1,null,null,null);a["a"]=u.exports},jn02:function(t,a,e){"use strict";var i=e("GmLm"),s=e.n(i);s.a},kVOQ:function(t,a,e){"use strict";var i=e("OKdF"),s=e.n(i);s.a},kiQV:function(t){t.exports={b:"0.3.0",a:"MIT"}},n34Y:function(t,a,e){"use strict";var i=e("o89N"),s=e.n(i);s.a},o89N:function(t,a,e){},"pb+S":function(t,a,e){"use strict";var i=e("FYjI"),s=e.n(i);s.a},vpOM:function(t,a,e){"use strict";var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"row full-width light-paragraph justify-between items-center generic-margin"},[e("div",{staticClass:"group",class:{"absolute-bottom-left":t.positionCorners,"layout-padding":t.positionCorners}},[e("small",{staticClass:"generic-margin"},[t._v(t._s(t.$t("site.copyright")))]),e("small",{staticClass:"generic-margin"},[e("a",{on:{click:function(a){t.openURL("http://motionbank.org/de/content/impressum")}}},[t._v(t._s(t.$t("navigation.imprint")))])]),e("small",{staticClass:"generic-margin"},[e("a",{on:{click:function(a){t.openURL("http://motionbank.org/de/content/kontakt")}}},[t._v(t._s(t.$t("navigation.contact")))])]),e("small",{staticClass:"generic-margin"},[e("a",{on:{click:function(a){t.openURL("http://motionbank.org/de/content/impressum")}}},[t._v(t._s(t.$t("navigation.terms")))])])]),e("div",{staticClass:"group",class:{"absolute-bottom-right":t.positionCorners,"layout-padding":t.positionCorners}},[e("small",{staticClass:"generic-margin"},[e("a",{on:{click:function(a){t.openURL("https://github.com/motionbank")}}},[t._v(t._s(t.$t("navigation.github")))])]),e("small",[t._v(t._s(t.$t("site.version"))+": v"+t._s(t.version))]),e("small",[t._v(t._s(t.$t("site.license"))+": "+t._s(t.license))])])])},s=[],o=e("4IOb"),n=e("kiQV"),l={data:function(){return{openURL:o["Ca"],version:n["b"],license:n["a"]}},props:["positionCorners"]},r=l,c=(e("n34Y"),e("KHd+")),u=Object(c["a"])(r,i,s,!1,null,null,null);a["a"]=u.exports},wh9e:function(t,a,e){},yQ8e:function(t,a,e){}}]);