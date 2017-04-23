<?php
/**
 * @file
 * The primary PHP file for this theme.
 */
function prohaktiv_preprocess_page(&$vars) {
  if(drupal_is_front_page()) {
    drupal_add_js(drupal_get_path('theme', 'prohaktiv') . '/js/jquery.coda-slider-3.0.min.js');
    drupal_add_js(drupal_get_path('theme', 'prohaktiv') . '/js/jquery.easing.1.2.js');
    drupal_add_js(drupal_get_path('theme', 'prohaktiv') . '/js/viewportchecker.js');
    drupal_add_js(drupal_get_path('theme', 'prohaktiv') . '/js/TweenMax.min.js');
    drupal_add_js(drupal_get_path('theme', 'prohaktiv') . '/js/icpl.js');
    drupal_add_js(drupal_get_path('theme', 'prohaktiv') . '/js/jquery.bxslider.js');
  }
}

function prohaktiv_preprocess_html(&$vars) {
  $path = drupal_get_path_alias();
  $aliases = explode('/', $path);
  foreach($aliases as $alias) {
    $vars['classes_array'][] = drupal_clean_css_identifier($alias);
  }
}
