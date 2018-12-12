jQuery(function(){

  tinymce.PluginManager.add("mce_editor_js",function(editor){

       // adding custom buttons to tinymce editor

       editor.addButton("editor_console",{
           //text: "OWT Console",
           autofocus: false,
           classes: "owt-custom-class",
           disabled: false,
           hidden: false,
           image: "https://image.flaticon.com/icons/svg/733/733614.svg",
           tooltip: "OWT Console Button"
           //image: "<?php echo plugin_dir_url(__FILE__).''; ?>"
       });

       editor.addButton("editor_alert",{
           text:"OWT alert",
           tooltip: "OWT Alert Button"
       });

  });

});
