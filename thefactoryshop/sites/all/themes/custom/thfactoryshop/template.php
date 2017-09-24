<?php
/**
 * @file
 * The primary PHP file for this theme.
 */


function thefactoryshop_preprocess_views_view_unformatted(&$vars) {
  // $view = $vars['view'];
  // $rows = $vars['rows'];
  // switch ($view->name) {
  //   case 'home_page_catalog':
  //     foreach ($rows as  $id => $row) {
  //       //$vars['classes_array'][$key][]='col-md-4';
  //       if ($row_class = $view->style_plugin->getRowClass($id)) {
  //         dsm($row_class);
  //         $vars['rows'][$id]['attributes']->addClass($row_class);
  //       }
  //     }
  //     break;

  //   default:
  //     # code...
  //     break;
  // }
  // //dsm($vars['classes']);
  // dsm($vars['classes_array'][1]);
}



function thefactoryshop_cloud_zoom_image_gallery($variables) {
  flexslider_add('cloud-zoom-gallery-thumnail-flexlider','cloudzoomslider');
  return "<div id='cloud-zoom-gallery-thumnail-flexlider'>" .theme_cloud_zoom_image_gallery($variables) .'</div>';
}

