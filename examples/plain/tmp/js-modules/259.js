__d(function(g,r,i,a,m,e,d){'use strict';var t=r(d[0]),s=r(d[1]),n=r(d[2]),o=r(d[3]),p=r(d[4]),f=r(d[5]),c=r(d[6]),l=r(d[7]),u=(r(d[8]),r(d[9])),R=(r(d[10]),r(d[11])),h=c({},R.defaultProps,{stickySectionHeadersEnabled:!1}),L=(function(c){function h(){var t,n;s(this,h);for(var f=arguments.length,c=new Array(f),l=0;l<f;l++)c[l]=arguments[l];return(n=o(this,(t=p(h)).call.apply(t,[this].concat(c))))._captureRef=function(t){n._wrapperListRef=t},n}return f(h,c),n(h,[{key:"scrollToLocation",value:function(t){this._wrapperListRef.scrollToLocation(t)}},{key:"recordInteraction",value:function(){var t=this._wrapperListRef&&this._wrapperListRef.getListRef();t&&t.recordInteraction()}},{key:"flashScrollIndicators",value:function(){var t=this._wrapperListRef&&this._wrapperListRef.getListRef();t&&t.flashScrollIndicators()}},{key:"getScrollResponder",value:function(){var t=this._wrapperListRef&&this._wrapperListRef.getListRef();if(t)return t.getScrollResponder()}},{key:"getScrollableNode",value:function(){var t=this._wrapperListRef&&this._wrapperListRef.getListRef();if(t)return t.getScrollableNode()}},{key:"setNativeProps",value:function(t){var s=this._wrapperListRef&&this._wrapperListRef.getListRef();s&&s.setNativeProps(t)}},{key:"render",value:function(){var s=this.props.legacyImplementation?l:R;return u.createElement(s,t({},this.props,{ref:this._captureRef}))}}]),h})(u.PureComponent);L.defaultProps=h,m.exports=L},259,[26,15,16,17,20,21,59,232,57,61,237,260]);