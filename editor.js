jQuery(function(){

  tinymce.PluginManager.add("mce_editor_js",function(editor){

       // adding custom buttons to tinymce editor

       editor.addButton("editor_console",{
           text: "OWT Console"
       });

       editor.addButton("editor_alert",{
           text:"OWT alert"
       });

  });

});
