<?php
/**
 * Plugin Name: my-react-app
 * Plugin URI: a url
 * Description: A react application
 * Version: 0.1
 * Text Domain: my-react-app
 * Author: Julien Bras
 * Author URI: https://sidoine.org
 */

// First register resources with init 
function enrollment_init() {
    $path = "/frontend/static";
    if(getenv('WP_ENV')=="development") {
        $path = "/frontend/build/static";
    }
    wp_register_script("enrollment_js", plugins_url($path."/js/main.js", __FILE__), array(), "1.0", false);
    wp_register_style("enrollment_css", plugins_url($path."/css/main.css", __FILE__), array(), "1.0", "all");
}

add_action( 'init', 'enrollment_init' );

// Function for the short code that call React app
function enrollment() {
    wp_enqueue_script("enrollment_js", '1.0', true);
    wp_enqueue_style("enrollment_css");
    return "<div id=\"enrollment\"></div>";
}

add_shortcode('enrollment', 'enrollment');