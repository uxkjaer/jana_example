sap.ui.define([
  "sap/ui/core/UIComponent",
  "sap/ui/Device",
  "com/myorg/jana/model/models",
  "sap/ui/model/json/JSONModel"
], function(UIComponent, Device, models, JSONModel) {
  "use strict";

  return UIComponent.extend("com.myorg.jana.Component", {

    metadata: {
      manifest: "json"
    },

    /**
     * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
     * @public
     * @override
     */
    init: async function() {
      // call the base component's init function
      UIComponent.prototype.init.apply(this, arguments);

      var oModel = new JSONModel();


      fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => response.json())
  .then(data => {
    oModel.setData(data);

  });

      this.setModel(oModel, "local");

      // enable routing
      this.getRouter().initialize();

      // set the device model
      this.setModel(models.createDeviceModel(), "device");
    }
  });
});
