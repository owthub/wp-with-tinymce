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
           tooltip: "OWT Console Button",
           onclick: alert_from_outside
           //image: "<?php echo plugin_dir_url(__FILE__).''; ?>"
       });

       editor.addButton("editor_alert",{
           text:"OWT alert",
           tooltip: "OWT Alert Button",
	   cmd:"call_my_function"
       });

       editor.addCommand("call_my_function",function(){

          alert("I am running by the help of cmd property");
	});

       editor.addButton("editor_popup",{

	 text:"OWT Popup",
         cmd: "owt_open_popup"
      });

      editor.addCommand("owt_open_popup",function(){

         editor.windowManager.open({
             title: "Simple Modal",
             height:400,
             width: 500
         });

     });

  });

  function  alert_from_outside(){
	alert("Hi I am running");	
  }

});
