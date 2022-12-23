<?php

/**
 * Plugin Name      : Altillo Blocks
 * Description      : Custom Block From AltilloStudioCreativo (ASC).
 * Plugin URI       : https://desdeelaltillo.com/
 * Version          : 0.0.1
 * Requires at least: 5.2
 * Requires PHP     : 7.2
 * Author           : Wily Ghostly
 * Author URI       : https://desdeelaltillo.com/
 * License          : GPL v2 or later
 * License URI      : https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain      : altillo-blocks
 * */

if (!defined('ABSPATH')) exit;

define('ASCB_PATH', plugin_dir_path(__FILE__));
define('ASCB_VERS', '1.0.1');

/**
 * SCRIPTS & STYLES
 * */
function asc_admin_editor_scripts()
{
    wp_enqueue_style('asc-admin-gutenberg', plugin_dir_url(__FILE__) . 'assets/blocks.css', array(), ASCB_VERS);
}
add_action('enqueue_block_editor_assets', 'asc_admin_editor_scripts');

/** 
 * BLOCKS 
 * */
require_once ASCB_PATH . '/blocks/accordion/core/index.php';
require_once ASCB_PATH . '/blocks/accordion/nested/index.php';
require_once ASCB_PATH . '/blocks/iframe/index.php';
require_once ASCB_PATH . '/blocks/posts/index.php';
