<?php

class UserInlineEntityFormController extends EntityInlineEntityFormController {

  public function __construct($entityType, array $settings) {
    parent::__construct($entityType, $settings);
    $this->settings['needs_save'] = 0;
  }


  /**
   * Overrides EntityInlineEntityFormController::labels().
   */
  public function labels() {
    return array_merge(parent::labels(), array('singular' => 'user', 'plural' => 'users'));
  }

  /**
   * Overrides EntityInlineEntityFormController::tableFields().
   */
  public function tableFields($bundles) {
    $metadata = entity_get_property_info($this->entityType);
    $label_key = 'name';

    return array(
      $label_key => array(
        'type' => 'property',
        'label' => $metadata ? $metadata['properties'][$label_key]['label'] : t('Label'),
        'weight' => 1,
      )
    );
  }

  /**
   * Overrides EntityInlineEntityFormController::entityForm().
   */
  public function entityForm($entity_form, &$form_state) {
    $entity_form = parent::entityForm($entity_form, $form_state);
    $account = $entity_form['#entity'];
    $entity_form['#user_category'] = 'account';
    if ($account->uid === FALSE) {
      $entity_form = user_register_form($entity_form, $form_state);
      // remove the submit hook of the user form to prevent double saving
      unset($entity_form['#submit'][array_search('user_register_submit', $entity_form['#submit'])]);

      $this->invokeAlterHooks('user_register_form',$entity_form,$form_state );
    }
    else {
      require_once drupal_get_path('module', 'user').'/user.pages.inc';
      $form_state['user'] = $account;
      $entity_form  = user_profile_form($entity_form,$form_state,$account);
      $this->invokeAlterHooks('user_profile_form',$entity_form,$form_state );
    }

    return $entity_form;
  }

  /**
   * Overrides EntityInlineEntityFormController::entityFormValidate().
   */
  public function entityFormValidate($entity_form, &$form_state) {
    parent::entityFormValidate($entity_form, $form_state);
    $child_form_state = $this->getFormState($form_state, $entity_form);
    drupal_static_reset('form_set_error:limit_validation_errors');
    if($form_state['triggering_element']['#value'] != t('Cancel')){
      user_account_form_validate($entity_form, $child_form_state);
    }
    entity_form_field_validate('user', $entity_form, $form_state);
  }

  /**
   * Overrides EntityInlineEntityFormController::entityFormSubmit().
   */
  public function entityFormSubmit(&$entity_form, &$form_state) {
    $entity_form['#parents'][] = 'account';
    parent::entityFormSubmit($entity_form, $form_state);
    $child_form_state = $this->getFormState($form_state, $entity_form);
    $account = &$entity_form['#entity'];

    if ($account->uid === FALSE || $account->uid == 0) {
      require_once drupal_get_path('module', 'user').'/user.pages.inc';
      $child_form_state['user']=$account;
      $this->invokeAdditionSubmits($entity_form, $child_form_state);
      entity_form_submit_build_entity('user', $account, $entity_form, $child_form_state);

      //user_profile_form_submit($entity_form, $child_form_state);
    }
    else {
      $this->invokeAdditionSubmits($entity_form, $child_form_state);
      $account->is_new = FALSE;
      $account->uid = $child_form_state['values']['uid'];
    }
  }

  private function invokeAlterHooks($form_id,&$entity_form,&$form_state) {
    $hooks = array('form');
    $hooks[] = 'form_' . $form_id;
    drupal_alter($hooks, $entity_form, $form_state, $form_id);
  }

  private function invokeAdditionSubmits($entity_form, &$child_form_state) {
    array_pop($entity_form['#submit']);
    //invoke addition submit handlers
    foreach($entity_form['#submit'] as $handler) {
      $handler($entity_form, $child_form_state);
    }
  }

  private function getFormState($form_state,$entity_form) {
    $child_form_state = form_state_defaults();
    if (end($entity_form['#parents']) != 'account') {
      $entity_form['#parents'][] = 'account';
    }
    $child_form_state['values'] = drupal_array_get_nested_value($form_state['values'], $entity_form['#parents']);
    $child_form_state['values']['administer_users'] = user_access('administer users');
    return $child_form_state;
  }

  /**
   * Overrides EntityInlineEntityFormController::save()
   * this is because the user_save of the user_form is running instead
   */
  public function save($entity, $context) {
    //the save callback used with entity_save specifically doesn't hash/save the
    // password so we must do it here
    require_once DRUPAL_ROOT . '/' . variable_get('password_inc', 'includes/password.inc');
    $entity->pass = user_hash_password(trim($entity->pass));

    entity_save($this->entityType, $entity);
  }

}
