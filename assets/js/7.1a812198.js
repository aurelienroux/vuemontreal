(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{268:function(t,e,i){},363:function(t,e,i){"use strict";var n=i(268);i.n(n).a},371:function(t,e,i){"use strict";i.r(e);i(357),i(226),i(359),i(360),i(362),i(261),i(195),i(263),i(264),i(233),i(234),i(200),i(238);var n={props:{tags:{type:Array,required:!0},events:{type:Array,required:!0}},data:function(){return{activeFilters:[]}},computed:{filteredEvents:function(){var t=this;return this.events.filter((function(e){return e.datas.some((function(e){return e.tags.some((function(e){return t.activeFilters.includes(e)}))}))}))}},methods:{addFilter:function(t){var e=new Set(this.activeFilters);e.has(t)?e.delete(t):e.add(t),this.activeFilters=Array.from(e),this.updateRoute()},updateRoute:function(){window.location.hash="filters="+this.activeFilters.toString()},isIncluded:function(t){var e=!1;return this.filters.forEach((function(i){t.includes(i)&&(e=!0)})),e}},mounted:function(){if(window.location.hash.match("filters")){var t=window.location.hash.split("=")[1];if((t=t.split(","))[0]&&0===t[0].length)return;this.activeFilters=t}}},s=(i(363),i(2)),r=Object(s.a)(n,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.tags?i("div",[i("ul",{staticClass:"Tags"},t._l(t.tags,(function(e){return i("li",{key:e,staticClass:"Tag",class:{activeTag:t.activeFilters.includes(e)},on:{click:function(i){return t.addFilter(e)}}},[i("vp-icon",{attrs:{name:"tag"}}),t._v("\n      "+t._s(e)+"\n    ")],1)})),0),t._v(" "),i("hr",{staticClass:"Tags-hr"}),t._v(" "),t.activeFilters.length?i("ul",t._l(t.filteredEvents,(function(t,e){return i("li",{key:e,staticClass:"Preview-block"},[i("preview",{attrs:{meetup:t}})],1)})),0):i("div",{staticClass:"noFilter"},[t._v("No filters selected")])]):t._e()}),[],!1,null,null,null);e.default=r.exports}}]);