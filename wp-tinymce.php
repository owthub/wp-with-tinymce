<?php
/*
Plugin Name: WP Tinymce Editor
Description: This is sample plugin by Online web tutor to learn Plugin development with TinyMCE Editor
Author: Online Web Tutor
*/

// mce_buttons: This is a filter hook used to attach buttons to tinyMCE editor
// mce_external_plugins : used to attach functionality with our custom added buttons

add_filter("mce_buttons","owt_attach_custom_tinymce_buttons");

function owt_attach_custom_tinymce_buttons($buttons){

  $buttons[] = "editor_console";
  $buttons[] = "editor_alert"; 
  $buttons[] = "editor_popup"; 
  return $buttons;
}

add_filter("mce_external_plugins","owt_attach_fns_custom_buttons");

function owt_attach_fns_custom_buttons($plugin_array){

   $plugin_array["mce_editor_js"] = plugin_dir_url(__FILE__)."editor.js";
   return $plugin_array;
}

?>









