<?php



function _laundry_invoice_default_get_template_output($invoice, $type = NULL) {
  ob_start();

  // Create alias
  // Set full url path to template
  $path_to_template = _laundry_invoice_get_transfer_protocol() . '://' . $_SERVER['HTTP_HOST'] . base_path() . path_to_theme('module', 'laundry') . '/templates';

  $node= $invoice;
  $created = $node->created;
  $last_modified = $node->changed;
  $pickup_date = $node->field_pickup_date['und'][0]['value'];
  $invoice_number = $node->nid;

  $customer = $node->field_customer['und'][0]['target_id'];
  if (isset($customer)) {
    $customer = user_load($customer);
    $customer_name = $customer->field_first_name['und'][0]['value'] .' '. $customer->field_last_name['und'][0]['value'];
    $address = $customer->field_address['und'][0]['value'];
    $phonenumber = $customer->field_phone_number['und'][0]['phonenumber'];

  }

  // Invoice header
  echo '
  <table class="invoice-header">
  <thead>
  <tr class="one">
    <td class="one">
     <h1>' . t('Invoice') . '</h1>
     <div class="client-wrapper">';
  echo '
       <div class="customer-name"><span class="name"> ' . $customer_name  .' </span></div>
       <div class="phonenumber"><span>' . $phonenumber .'</span></div>
       <div class="address"><span>'. $address  .'</span></div>
     </div>
    </td>
    <td class="two">

    </td>
    <td class="three">
     <div class="supplier-wrapper">
       <div class="company-name"><img id="invoice-supplier-logo" src="'. $path_to_template .'/default_logo.png" alt="laundry name" /></div>
       <div class="address"><span class="street">test street</span> <span class="building-number">C-233</span></div>
       <div class="zipcode-city"><span class="zipcode">411001</span> <span class="city">Pune</span></div>
       <div class="state">Maharashtra</div>
       <div class="country break">India</div>
       <div class="phone">9874561230</div>
       <div class="email">test@test.com</div>
       <div class="web">test.com</div>
     </div>
    </td>
  </tr>
  </thead>
  </table>';

  // Invoice details
  echo '<table class="invoice-details">
    <thead>
      <tr>
        <td class="one">
         <strong>Invoice Id</strong>
          <div>' . $invoice_number .'</div>
        </td>
        <td class="two">
          <strong>' . t('Created') . '</strong>
          <div> ' . format_date($created, "custom","j / n / Y") . '</div>
        </td>
        <td class="three">
          <strong>Pickup</strong>
          <div>' . $pickup_date. '</div>
        </td>

      </tr>
    </thead>
  </table>';


  $laundry_items = field_collection_item_load($node->field_laundry_items['und'][0]['value']);
  $iron_laundry_type = field_collection_item_load($laundry_items->field_iron_laundry_type['und'][0]['value']);

  // iron
  $iron_line_items  = $iron_laundry_type->field_iron_line_item['und'];

  // Invoice items
  echo '
    <table class="invoice-items">
      <tr class="one">
        <td colspan="4"> Iron</td>
      </tr>
      <tr class="two">
        <td >Items</td>
        <td >Quantity / Weight</td>
        <td >Rate per Unit</td>
        <td >Total </td>
      </tr>';

  $iron_line_item_total = 0;
  $final_total = 0;
  foreach($iron_line_items as $item) {
    $iron_laundry_item = field_collection_item_load($item['value']);
    $description_extract_terms = array_reverse(taxonomy_get_parents_all($iron_laundry_item->field_iron_cloth_type['und'][0]['tid']));
    $description_string ="";
    foreach( $description_extract_terms as $terms) {
     $description_string .= $terms->name . '>';
    }
    $description = trim($description_string,">");
    $quantity = $iron_laundry_item->field_quantity['und'][0]['value'];
    $rate = $iron_laundry_item->field_item_rate['und'][0]['value'];
    $line_item_total = $rate*$quantity;
    $iron_line_item_total += $line_item_total;
    echo  '<tr class="two">
      <td >'. $description .'</td>
      <td >' . $quantity .'</td>
      <td >' . $rate . '</td>
      <td >' . $line_item_total . ' </td>
      </tr>';

  }
  $final_total += $iron_line_item_total;

  echo "<tr><td colspan='4'> Total: " . $iron_line_item_total . "</td></tr>";

  // washing calculator
  $washing_laundry_type = field_collection_item_load($laundry_items->field_washing_laundry_type['und'][0]['value']);
  $washing_laundry_line_items = $washing_laundry_type->field_washing_laundry_line_items['und'];

  echo  '<tr class="one">
        <td colspan="4"> Drycleaning/Washing</td>
      </tr>';
  $washing_laundry_line_item_total = 0;
  foreach($washing_laundry_line_items as $item) {
    $washing_laundry_item = field_collection_item_load($item['value']);
    $description_term = taxonomy_term_load($washing_laundry_item->field_laundry_type_washing['und'][0]['tid']);
    $description = $description_term->name;
    $quantity = $washing_laundry_item->field_quantity['und'][0]['value'];
    $weight = $washing_laundry_item->field_cloth_weight['und'][0]['value'];
    $rate = $washing_laundry_item->field_rate_per_kg['und'][0]['value'];
    $line_item_total = $quantity*$rate*$weight;
    $washing_laundry_line_item_total += $line_item_total;
    echo  '<tr class="two">
      <td >'. $description .'</td>
      <td >' . $quantity . ' / ' .$weight . '</td>
      <td >' . $rate . '</td>
      <td >' . $line_item_total . ' </td>
      </tr>';

  }

  $final_total += $washing_laundry_line_item_total;
  echo "<tr><td colspan='4'> Total: " . $washing_laundry_line_item_total . "</td></tr>";

  $invoice_field_collection = field_collection_item_load($node->field_invoice_fc['und'][0]['value']);
  $gst_percent = $invoice_field_collection->field_gst['und'][0]['value'];
  $gst_on_total = ($final_total*$gst_percent)/100;
  $total_with_gst = $gst_on_total + $final_total;

  echo  '
    <tr><td colspan="4">&nbsp;</td></tr>
    <tr class="gst">
        <td colspan="2">GST % ' . $gst_percent . '</td>
        <td colspan="2">GST amount: ' . $gst_on_total . '</td>
      </tr>
    <tr class="one">
        <td colspan="4">Final Total: ' . $total_with_gst . '</td>
    </tr>';

  echo ' </table>';



  $content = ob_get_contents();
  ob_end_clean();
  return $content;

}
