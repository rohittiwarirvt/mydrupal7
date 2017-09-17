<?php

function tfs_common_form_alter(&$form, &$form_state, $form_id) {
  switch ($form_id) {
    case 'user_login_block':
      if (!drupal_match_path(current_path(), 'user/login'))  {
          unset($form['name']['#title']);
          $form['name']['#attributes']['placeholder'] = t("Email/Username");
          unset($form['pass']['#title']);
          $form['pass']['#attributes']['placeholder'] = t("Password");
          unset($form['links']);
          $form['actions'][] = array('#markup' => l(t('Forgotten Password'), 'user/password', array('attributes' => array('title' => t('Request new password via e-mail.')))), '#weight' => 10);

        }
      break;
      # code...
      break;
  }

  if (commerce_form_callback($form_id, $form_state) == "commerce_cart_add_to_cart_form") {
    $form['submit']['#attributes']['class'][] = "add-to-cart";
    $form['submit']['#icon']= NULL;
  }
}

