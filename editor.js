jQuery(function(){

  tinymce.PluginManager.add("mce_editor_js",function(editor){

       // adding dropdown to tinyMCE toolbar
       editor.addButton("editor_dropdown",{

           text: "OWT Dropdown",
           tooltip: "This is sample dropdown",
           type:"menubutton",
           menu:[
              {
                 text: "Plugin Development",
                 value: "OWT Plugin Development",
                 onclick: function(){
                    editor.insertContent(this.value());
                 }
              },
              {
                 text: "Theme Development",
                 value: "OWT Theme Development",
                 onclick: function(){
                    editor.insertContent(this.value());
                 }
              },
              {
                 text: "Shortcodes Development",
                 value: "OWT Shortcodes Development",
                 onclick: function(){
                    editor.insertContent(this.value());
                 }
              },
              {
                 text: "OWT VueJS Development",
                 onclick: function(){
                    editor.insertContent("OWT VueJS Development");
                 }
              }
           ]
	});


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
