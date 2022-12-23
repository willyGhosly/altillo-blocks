<?php

// if (!defined('ABSPATH')) exit;

function altillo_blocks_narrativas_render_callback($attributes, $content, $block)
{
    $posts = get_posts(array(
        'post_type' => 'narrativas',
        'post_status' => 'publish',
        'posts_per_page' => -1,
        'post_parent' => 0,
    ));

    if ($posts) {
        $counter = 1;
        $render = '<ul class="wposts w__ul">';
        foreach ($posts as $post) {
            $id = $post->ID;
            $title = $post->post_title;
            $link = get_permalink($id);
            $country = get_post_field('pais', $id);
            $censored = get_post_field('establecer-como-contenido-censurado', $id);
            if ($censored === 'true') {
                $title = 'xxxxxx';
            }

            $render .= '<li class="wpost w__li">';
            $render .= '<a class="wpost__a" href="' . esc_url($link) . '">';
            $render .= '<p class="wpost__p">' . str_pad($counter, 2, '0', STR_PAD_LEFT) . '. ' . $country . '</p>';
            $render .= '<h2 class="wpost__h2">' . $title . '</h2>';
            $render .= '</a>';
            $render .= '</li> ';
            $counter++;
        }
        $render .= '</ul>';
        return $render;
    }
}

function altillo_blocks_narrativas_init()
{
    register_block_type(
        __DIR__,
        array(
            'render_callback' => 'altillo_blocks_narrativas_render_callback',
        ),
    );
}
add_action('init', 'altillo_blocks_narrativas_init');
