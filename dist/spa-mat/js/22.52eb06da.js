(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[22],{"2Gtw":function(t,e,n){"use strict";n("f3/d");var i=n("cDf5"),r=n.n(i),o=n("lwsE"),a=n.n(o),s=n("W8MJ"),u=n.n(s),l=n("ExVU"),c=n("9lTW"),d=n.n(c);l["Settings"].defaultLocale=l["DateTime"].local().resolvedLocaleOpts().locale;var h=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];a()(this,t),this._dateTime=e?l["DateTime"].local().toUTC():l["DateTime"].local()}return u()(t,[{key:"setToUTC",value:function(){this._dateTime=this._dateTime.toUTC()}},{key:"toString",value:function(){return this.isoString}},{key:"toFormat",value:function(t){return d.a.equal(r()(t),"string"),this._dateTime.toFormat(t)}},{key:"add",value:function(t){d()("number"===typeof t||"Duration"===t.constructor.name),this._dateTime=this._dateTime.plus(t)}},{key:"subtract",value:function(t){d()("number"===typeof t||"Duration"===t.constructor.name),this._dateTime=this._dateTime.minus(t)}},{key:"isoString",set:function(t){d.a.equal(r()(t),"string"),this._dateTime=l["DateTime"].fromISO(t)},get:function(){return this._dateTime.toISO()}},{key:"millis",set:function(t){d.a.equal(r()(t),"number"),this._dateTime=l["DateTime"].fromMillis(t)},get:function(){return this._dateTime.valueOf()}},{key:"dateTime",set:function(t){d()(t instanceof l["DateTime"]),this._dateTime=l["DateTime"].fromISO(t.toISO())},get:function(){return this._dateTime}}],[{key:"fromISOString",value:function(e){var n=new t;return n.isoString=e,n}},{key:"fromMilliseconds",value:function(e){var n=new t;return n.millis=e,n}},{key:"fromDateTime",value:function(e){var n=new t;return n.dateTime=e,n}},{key:"timeBetween",value:function(t,e){return d.a.equal(t.constructor.name,"TimelineSelector"),d.a.equal(e.constructor.name,"TimelineSelector"),l["Interval"].fromDateTimes(t.dateTime,e.dateTime).toDuration()}}]),t}();e["a"]=h},84:function(t,e){},JUnI:function(t,e,n){"use strict";var i={};n.d(i,"TimelineSelector",function(){return r["a"]});var r=n("2Gtw"),o=n("lwsE"),a=n.n(o),s=n("W8MJ"),u=n.n(s),l=function(){function t(){a()(this,t)}return u()(t,null,[{key:"sortOnTarget",value:function(t,e){var n=t.target&&t.target.selector?r["a"].fromISOString(t.target.selector.value):null,i=e.target&&e.target.selector?r["a"].fromISOString(e.target.selector.value):null;return n&&i&&n.dateTime>i.dateTime?1:n&&i&&n.dateTime<i.dateTime?-1:0}}]),t}(),c=l;e["a"]={selectors:i,Sorting:c}},Tjd0:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",[t._v(t._s(t.username))])},r=[],o=(n("f3/d"),n("ls82"),n("yXPU")),a=n.n(o),s={props:["uuid"],asyncComputed:{username:function(){var t=a()(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(this.uuid){t.next=2;break}return t.abrupt("return","---");case 2:return t.next=4,this.$store.dispatch("users/get",this.uuid);case 4:return e=t.sent,t.abrupt("return",e.name);case 6:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()}},u=s,l=n("KHd+"),c=Object(l["a"])(u,i,r,!1,null,null,null);e["a"]=c.exports},dx43:function(t,e,n){},hP65:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("video-player",{ref:"videoPlayer",staticClass:"video-player-box vjs-big-play-centered",attrs:{options:t.playerOptions,playsinline:!0,customEventName:"customstatechangedeventname"},on:{play:function(e){t.onPlayerEvent("play",e)},pause:function(e){t.onPlayerEvent("pause",e)},ended:function(e){t.onPlayerEvent("ended",e)},waiting:function(e){t.onPlayerEvent("waiting",e)},playing:function(e){t.onPlayerEvent("playing",e)},loadeddata:function(e){t.onPlayerEvent("data",e)},timeupdate:function(e){t.onPlayerEvent("time",e.currentTime())},canplay:function(e){t.onPlayerEvent("canplay",e)},canplaythrough:function(e){t.onPlayerEvent("canplaythrough",e)},statechanged:function(e){t.playerStateChange(e)},ready:t.onPlayerReady}})},r=[],o=n("1tPa");n("/aIJ"),n("RR9+"),n("49ep"),n("TG1J"),n("9aQL");var a={components:{videoPlayer:o["videoPlayer"]},data:function(){return{type:void 0,playerOptions:{fluid:!0,width:640,techOrder:["html5"],language:"en",playbackRates:[.25,.5,1,1.5,2],sources:[],poster:void 0,controlBar:{remainingTime:!0},plugins:{framebyframe:{fps:23.98,steps:[{text:"-1s",step:-24},{text:"-1f",step:-1},{text:"+1f",step:1},{text:"+1s",step:24}]}}}}},props:["src"],mounted:function(){this.src&&(this.type=this.guessType(this.src),"video/youtube"===this.type?this.playerOptions.techOrder=["youtube"]:"video/vimeo"===this.type&&(this.playerOptions.techOrder=["vimeo"]),this.setSources([{type:this.type,src:this.src.source}]))},watch:{src:function(t){this.type=this.guessType(t),t&&("video/youtube"===this.type?this.playerOptions.techOrder=["youtube"]:"video/vimeo"===this.type&&(this.playerOptions.techOrder=["vimeo"]),this.setSources([{type:this.type,src:t.source}]))}},computed:{player:function(){return this.$refs.videoPlayer.player}},methods:{guessType:function(t){return t.source.indexOf("youtube.com")>-1||t.source.indexOf("youtu.be")>-1?"video/youtube":t.source.indexOf("vimeo.com")>-1?"video/vimeo":null},onPlayerReady:function(t){this.$emit("ready",t),"video/youtube"===this.type||this.type},onPlayerEvent:function(t,e){this.$emit(t,e)},onPlayerStateChange:function(t){this.$emit("state-change",t)},setSources:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0;Array.isArray(t)||(t=[t]),this.playerOptions.sources=t,this.playerOptions.poster=e}}},s=a,u=n("KHd+"),l=Object(u["a"])(s,i,r,!1,null,null,null);e["a"]=l.exports},snHU:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{height:"calc(100vh - 52px)",overflow:"hidden"}},[n("q-layout",{attrs:{id:"video-annotate-wrap"}},[n("div",{attrs:{id:"btn-back"}},[n("q-btn",{attrs:{color:"grey",icon:"keyboard_backspace",round:"",flat:"",small:""},on:{click:function(e){t.$router.push("/piecemaker/groups/"+t.groupId+"/videos")}}}),t.fullscreen?t._e():n("q-btn",{attrs:{icon:"fullscreen",round:"",flat:"",small:""},on:{click:function(e){t.toggleFullscreen(),t.fullscreenHandler()}}}),t.fullscreen?n("q-btn",{attrs:{icon:"fullscreen_exit",round:"",flat:"",small:""},on:{click:function(e){t.toggleFullscreen(),t.fullscreenHandler()}}}):t._e()],1),n("div",{staticStyle:{height:"calc(100vh - 52px)",overflow:"hidden"}},[t.video?n("video-player",{attrs:{src:t.video},on:{ready:function(e){t.playerReady(e)},time:function(e){t.onPlayerTime(e)}}}):t._e()],1),n("div",{class:{activeCondition:t.active},attrs:{id:"pop-up"}},[t.active?t._e():n("div",{staticClass:"text-right outline",attrs:{color:"primary"},on:{click:function(e){t.toggleForm()}}},[t._v("Start typing or click here")]),t.active?n("div",[n("q-input",{attrs:{type:"textarea","float-label":"Start typing",autofocus:""},on:{keyup:[function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null;t.createAnnotation()},function(e){if(!("button"in e)&&t._k(e.keyCode,"esc",27,e.key,"Escape"))return null;t.toggleForm(),t.closePopUp()}]},model:{value:t.currentBody.value,callback:function(e){t.$set(t.currentBody,"value",e)},expression:"currentBody.value"}}),n("div",{staticClass:"row"},[n("div",{staticClass:"col-6"},[n("q-btn",{attrs:{small:""},on:{click:function(e){t.toggleForm()}}},[t._v("Esc")])],1),n("div",{staticClass:"col-6 text-right"},[n("q-btn",{attrs:{small:""},on:{click:function(e){t.createAnnotation()}}},[t._v("Enter")])],1)])],1):t._e()]),t.fullscreen?t._e():n("div",{attrs:{slot:"right",id:"annotation-wrap"},slot:"right"},[n("q-list",{staticClass:"no-border"},t._l(t.annotations,function(e,i){return n("q-item",{key:e.uuid,staticClass:"annotation",class:{highlight:i===t.currentIndex},attrs:{id:e.uuid}},[n("q-item-main",{staticClass:"row"},[n("q-item-tile",{staticClass:"col-6"},[e.target.selector?n("q-btn",{attrs:{small:""},on:{click:function(n){t.gotoSelector(e.target.selector.value),t.changeState()}}},[t._v(t._s(t.formatSelectorForList(e.target.selector.value)))]):t._e()],1),n("q-item-tile",{staticClass:"col-6"},[n("q-btn",{attrs:{small:""},on:{click:function(n){t.deleteAnnotation(e.uuid),t.changeState()}}},[t._v(t._s(t.$t("buttons.delete")))]),n("q-btn",{attrs:{small:""},on:{click:function(n){t.updateAnnotation(e),t.addKeypressListener()}}},[t._v(t._s(t.$t("buttons.save")))])],1),n("q-item-tile",{staticClass:"col-12 author"},[n("username",{attrs:{uuid:e.author}})],1),n("q-item-tile",{staticClass:"col-12"},[n("q-input",{attrs:{type:"textarea"},on:{click:function(e){t.changeState(),t.hideForm()}},model:{value:e.body.value,callback:function(n){t.$set(e.body,"value",n)},expression:"annotation.body.value"}})],1)],1)],1)}))],1)])],1)},r=[],o=(n("Vd3H"),n("4IOb")),a=n("GBbM"),s=n("4KWY"),u=n.n(s),l=n("hP65"),c=n("JUnI"),d=n("wbdi"),h=n("Tjd0"),m=c["a"].selectors.TimelineSelector,f={components:{VideoPlayer:l["a"],Username:h["a"]},mounted:function(){var t=this;this.$route.params.id&&this.getVideo().then(function(){return t.getAnnotations()}),window.addEventListener("keypress",this.toggleForm)},beforeDestroy:function(){window.removeEventListener("keypress",this.toggleForm),o["b"].exit()},data:function(){return{fullscreen:!1,player:void 0,playerTime:0,currentIndex:void 0,video:void 0,groupId:void 0,baseSelector:void 0,active:!1,annotations:[],currentBody:{value:void 0,purpose:"commenting",type:"TextualBody"},currentSelector:{type:"Fragment",value:void 0},filtertypes:[{title:"Comment"},{title:"Marker"}]}},methods:{toggleFullscreen:function(){o["b"].toggle()},changeState:function(){this.active=!1,this.currentSelector.value=void 0,this.currentBody.value=void 0,window.addEventListener("keypress",this.toggleForm)},hideForm:function(){window.removeEventListener("keypress",this.toggleForm)},addKeypressListener:function(){window.addEventListener("keypress",this.toggleForm)},fullscreenHandler:function(){this.fullscreen=!this.fullscreen},getVideo:function(){var t=this;return this.$store.dispatch("annotations/get",t.$route.params.id).then(function(e){e.body&&(t.groupId=e.target.id,t.video=e.body,t.baseSelector=m.fromISOString(e.target.selector.value))})},getAnnotations:function(){var t=this,e={"target.id":t.groupId,"target.type":d["a"].MAP_TYPE_TIMELINE,"body.type":"TextualBody"};return this.$store.dispatch("annotations/find",{query:e}).then(function(e){e&&(t.annotations=e.sort(c["a"].Sorting.sortOnTarget))})},toggleForm:function(){if(this.active)this.active=!1,this.currentSelector.value=void 0,this.currentBody.value=void 0,window.addEventListener("keypress",this.toggleForm);else{if(window.removeEventListener("keypress",this.toggleForm),!this.player)return;var t=m.fromDateTime(this.baseSelector.dateTime),e=this.player.currentTime();t.add(1e3*e),this.currentSelector.value=t.isoString,this.active=!0}},createAnnotation:function(){var t=this,e={author:t.$store.state.auth.payload.userId,body:a["ObjectUtil"].merge({},t.currentBody),target:{id:t.groupId,type:d["a"].MAP_TYPE_TIMELINE,selector:a["ObjectUtil"].merge({},t.currentSelector)}};return this.$store.dispatch("annotations/create",e).then(function(e){t.getAnnotations().then(function(){t.scrollToElement(e.uuid)})}).then(function(){return t.toggleForm()})},scrollToElement:function(t){window.location.href="#"+t},updateAnnotation:function(t){var e=this;return a["Assert"].isType(t,"object"),a["Assert"].ok(u()(t.uuid)),a["Assert"].isType(t.body.value,"string"),this.$store.dispatch("annotations/patch",[t.uuid,t]).then(function(){return e.getAnnotations()})},deleteAnnotation:function(t){var e=this;return a["Assert"].ok(u()(t)),this.$store.dispatch("annotations/remove",t).then(function(){return e.getAnnotations()})},gotoSelector:function(t){t=m.fromISOString(t),t.subtract(this.baseSelector.millis),this.player.currentTime(.001*t.millis)},playerReady:function(t){this.player=t},formatSelectorForList:function(t){var e=m.fromISOString(t);return e.toFormat(d["a"].TIMECODE_FORMAT)},onPlayerTime:function(t){this.playerTime=t,this.updateHighlight(t)},updateHighlight:function(t){if(this.annotations.length){var e,n=this.baseSelector.millis+1e3*t,i=this.annotations.length,r=0,o=!0;while(o&&this.annotations[r]){if(e=this.annotations[r].target.selector?m.fromISOString(this.annotations[r].target.selector.value):void 0,o=e&&n<e.millis,o||(this.currentIndex=r),r>=i)break;r++}o&&(this.currentIndex=void 0)}}}},v=f,p=(n("y4MB"),n("KHd+")),y=Object(p["a"])(v,i,r,!1,null,"0e5c2a2a",null);e["default"]=y.exports},wbdi:function(t,e,n){"use strict";var i="Timeline",r="2DGrid",o="HH:mm:ss:SSS";e["a"]={MAP_TYPE_TIMELINE:i,MAP_TYPE_2D_GRID:r,TIMECODE_FORMAT:o}},y4MB:function(t,e,n){"use strict";var i=n("dx43"),r=n.n(i);r.a}}]);