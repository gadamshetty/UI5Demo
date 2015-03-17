sap.ui.jsview("ui5demo.app", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf ui5demo.app
	*/ 
	getControllerName : function() {
		return "ui5demo.app";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf ui5demo.app
	*/ 
	createContent : function(oController) {
		
		var customerOrders = new sap.m.StandardTile('customerordertile',{
			title:"Customer Orders Demo",
			type: sap.m.StandardTileType.None,
			info:"customer orders",
			icon:"sap-icon://customer-order-entry",
			press: oController.openCustOrders
		});
		
		var tileContainer = new sap.m.TileContainer('tilecontainer',{
			editable: false
		});
		
		tileContainer.addTile(customerOrders);
		
 		return new sap.m.Page({
			title: "UI5 Demo Applications by Naresh G",
			enableScrolling: false,
			content: [
			          	tileContainer
			]
		});
	}

});