__d(function(g,r,i,a,m,e,d){'use strict';var t=r(d[0]),n=r(d[1]),o=r(d[2]),s=(function(){function s(n){var h=this;t(this,s),this._dataSource=new o({getRowData:n.getRowData,getSectionHeaderData:n.getSectionHeaderData,rowHasChanged:function(t,o){return t.id!==h._previousOpenRowID&&o.id===h._openRowID||t.id===h._previousOpenRowID&&o.id!==h._openRowID||n.rowHasChanged(t,o)},sectionHeaderHasChanged:n.sectionHeaderHasChanged})}return n(s,[{key:"cloneWithRowsAndSections",value:function(t,n,o){return this._dataSource=this._dataSource.cloneWithRowsAndSections(t,n,o),this._dataBlob=t,this.rowIdentities=this._dataSource.rowIdentities,this.sectionIdentities=this._dataSource.sectionIdentities,this}},{key:"getDataSource",value:function(){return this._dataSource}},{key:"getOpenRowID",value:function(){return this._openRowID}},{key:"getFirstRowID",value:function(){return this.rowIdentities?this.rowIdentities[0]&&this.rowIdentities[0][0]:Object.keys(this._dataBlob)[0]}},{key:"getLastRowID",value:function(){if(this.rowIdentities&&this.rowIdentities.length){var t=this.rowIdentities[this.rowIdentities.length-1];if(t&&t.length)return t[t.length-1]}return Object.keys(this._dataBlob)[this._dataBlob.length-1]}},{key:"setOpenRowID",value:function(t){return this._previousOpenRowID=this._openRowID,this._openRowID=t,this._dataSource=this._dataSource.cloneWithRowsAndSections(this._dataBlob,this.sectionIdentities,this.rowIdentities),this}}]),s})();m.exports=s},293,[15,16,235]);