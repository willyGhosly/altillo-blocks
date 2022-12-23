<?php

if (!defined('ABSPATH')) exit;

function altillo_blocks_accordion_nested_blocks_init()
{
    register_block_type(__DIR__);
}
add_action('init', 'altillo_blocks_accordion_nested_blocks_init');
