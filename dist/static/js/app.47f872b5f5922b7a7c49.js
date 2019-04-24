webpackJsonp([1],{EiPI:function(t,e){},NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i("xd7I"),n=i("Gir3"),r=i.n(n);i("hsAa");function l(t){return("00"+t).substr(t.length)}var o={name:"app",data:function(){return{charts:null,chartWidth:50,chartHeight:50,tableList:[]}},mounted:function(){this.$nextTick(function(){this.nextDrawPie()})},watch:{tableList:{handler:function(t,e){this.drawPie()},deep:!0}},methods:{handleInsert:function(t){var e=[],i=0;this.tableList.forEach(function(a,n){a.id===t.id&&e.push({id:i++,title:"",rangeTime:[]}),e.push({id:i++,title:a.title,rangeTime:a.rangeTime})}),this.tableList=e},handleRemove:function(t){this._removeAaary(this.tableList,t),this.nextDrawPie()},handleAdd:function(){this.tableList.push({id:this.tableList.length,title:"",rangeTime:[]}),this.nextDrawPie()},_removeAaary:function(t,e){for(var i=t.length,a=0;a<i;a++)if(t[a]==e)return 0==a?(t.shift(),t):a==i-1?(t.pop(),t):(t.splice(a,1),t)},nextDrawPie:function(t){var e=document.getElementById("main"),i=document.getElementById("chart-contain");i.innerHTML="";var a=document.createElement("div");a.setAttribute("id","chart"),a.style.width=this.chartWidth*(e.clientWidth-20)/50+"px",a.style.height=this.chartHeight*(e.clientHeight-40)/50+"px",i.appendChild(a),this.charts=echarts.init(document.getElementById("chart")),this.drawPie()},drawPie:function(){var t=[],e=[],i=[];this.tableList.forEach(function(a){t.push(a.title),a.rangeTime&&a.rangeTime.length>0&&(e.push(a.rangeTime[0]),i.push(a.rangeTime[1]))});var a={title:{text:"整体进展计划",left:10},legend:{data:[]},grid:{containLabel:!0,left:20},xAxis:{type:"time",key:"month",field:"month",timeFormat:"month",min:"dataMin",max:"dataMax",nameLocation:"start",axisLabel:{formatter:function(t){return function(t,e){/(y+)/.test(e)&&(e=e.replace(RegExp.$1,(t.getFullYear()+"").substr(4-RegExp.$1.length)));var i={"M+":t.getMonth()+1,"d+":t.getDate(),"h+":t.getHours(),"m+":t.getMinutes(),"s+":t.getSeconds()};for(var a in i)if(new RegExp("("+a+")").test(e)){var n=i[a]+"";e=e.replace(RegExp.$1,1===RegExp.$1.length?n:l(n))}return e}(new Date(t),"MM/dd")}}},yAxis:[{show:!1,data:t}],toolbox:{feature:{saveAsImage:{pixelRatio:2}}},series:[{name:"开始时间",type:"bar",barWidth:30,stack:"test1",itemStyle:{normal:{color:"rgba(0,0,0,0)"}},data:e},{name:"完成时间",type:"bar",barWidth:30,stack:"test1",label:{normal:{show:!0,position:"inside",distance:15,align:"left",verticalAlign:"left",rotate:0,color:"#333",formatter:"{b}",textStyle:{color:"#333"},fontSize:16}},itemStyle:{normal:{color:"#F98563"}},markLine:{symbol:"none",label:{normal:{fontSize:14,formatter:function(t){return"今天"}}},data:[{name:"Y 轴值为 100 的水平线",xAxis:new Date,lineStyle:{normal:{color:"green",width:1,type:"solid"}}}]},data:i}]};this.charts.setOption(a)}}},s={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"app"},[i("el-container",[i("el-container",{staticStyle:{height:"calc(100vh - 60px)"}},[i("el-aside",{attrs:{width:"700px"}},[i("el-table",{attrs:{data:t.tableList,border:"",size:"min"}},[i("el-table-column",{attrs:{prop:"title",label:"任务"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("el-input",{attrs:{size:"mini"},model:{value:e.row.title,callback:function(i){t.$set(e.row,"title",i)},expression:"scope.row.title"}})]}}])}),t._v(" "),i("el-table-column",{attrs:{prop:"rangeTime",label:"开始-结束日期",width:"380"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("el-date-picker",{attrs:{type:"daterange",size:"mini","start-placeholder":"开始日期","end-placeholder":"结束日期","default-time":["00:00:00","23:59:59"]},model:{value:e.row.rangeTime,callback:function(i){t.$set(e.row,"rangeTime",i)},expression:"scope.row.rangeTime"}})]}}])}),t._v(" "),i("el-table-column",{attrs:{fixed:"right",label:"操作",width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("el-button",{attrs:{type:"text",size:"mini"},on:{click:function(i){return t.handleInsert(e.row)}}},[t._v("插入")]),t._v(" "),i("el-button",{attrs:{type:"text",size:"mini"},on:{click:function(i){return t.handleRemove(e.row)}}},[t._v("移除")])]}}])})],1),t._v(" "),i("el-button",{attrs:{size:"small"},on:{click:t.handleAdd}},[t._v("新增")]),t._v(" "),i("div",{staticStyle:{position:"relative","margin-bottom":"10px",padding:"0 10px"}},[i("span",{staticStyle:{position:"absolute",left:"0px","line-height":"38px"}},[t._v("寬度调节")]),t._v(" "),i("el-slider",{staticStyle:{"margin-left":"80px"},on:{change:t.nextDrawPie},model:{value:t.chartWidth,callback:function(e){t.chartWidth=e},expression:"chartWidth"}}),t._v(" "),i("span",{staticStyle:{position:"absolute",left:"0px","line-height":"38px"}},[t._v("高度调节")]),t._v(" "),i("el-slider",{staticStyle:{"margin-left":"80px"},on:{change:t.nextDrawPie},model:{value:t.chartHeight,callback:function(e){t.chartHeight=e},expression:"chartHeight"}})],1)],1),t._v(" "),i("el-main",{attrs:{id:"main"}},[i("div",{attrs:{id:"chart-contain"}})])],1)],1)],1)},staticRenderFns:[]};var c=i("C7Lr")(o,s,!1,function(t){i("EiPI")},"data-v-ea4731ae",null).exports;a.default.config.productionTip=!1,a.default.use(r.a),new a.default({el:"#app",template:"<App/>",components:{App:c}})},hsAa:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.47f872b5f5922b7a7c49.js.map