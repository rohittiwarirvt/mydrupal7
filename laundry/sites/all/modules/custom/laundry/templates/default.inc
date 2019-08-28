<?php



function _laundry_invoice_default_get_template_output($invoice, $type = NULL) {
  ob_start();

  // Create alias
  // Set full url path to template
  $path_to_template = _laundry_invoice_get_transfer_protocol() . '://' . $_SERVER['HTTP_HOST'] . base_path() . path_to_theme('module', 'laundry') . '/templates';

  // Invoice header
  echo '
  <table class="invoice-header">
  <thead>
  <tr class="one">
    <td class="one">
     <h1>' . t('Invoice') . '</h1>
     <div class="client-wrapper">';

  echo '
       <div class="address"><span class="street"> radheshwari</span> <span class="building-number"> a204</span></div>
       <div class="zipcode-city"><span class="zipcode">411014</span> <span class="city">Pune</span></div>
       <div class="state">State</div>
       <div class="country break">India</div>
     </div>
    </td>
    <td class="two">

    </td>
    <td class="three">
     <div class="supplier-wrapper">
       <div class="company-name"><img id="invoice-supplier-logo" src="'. $path_to_template .'/default_logo.png" alt="laundry name" /></div>
       <div class="address"><span class="street">test street</span> <span class="building-number">2033</span></div>
       <div class="zipcode-city"><span class="zipcode">43455</span> <span class="city">aurangabad</span></div>
       <div class="state">state test</div>
       <div class="country break">supplier country</div>
       <div class="phone">supplier phone</div>
       <div class="fax">fax dd</div>
       <div class="email">email</div>
       <div class="web">webbb</div>
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
          <strong>' . t('Date') . '</strong>
          <div>2/2/2019</div>
        </td>
        <td class="two">
          <strong>112</strong>
          <div>23333</div>
        </td>
        <td class="three">
         <strong>222</strong>
          <div>2334</div>
        </td>
      </tr>
    </thead>
  </table>';

  $node= $invoice;
  $laundry_items = field_collection_item_load($node->field_laundry_items['und'][0]['value']);
  $iron_laundry_type = field_collection_item_load($laundry_items->field_iron_laundry_type['und'][0]['value']);
  $washing_laundry_type = field_collection_item_load($laundry_items->field_washing_laundry_type['und'][0]['value']);

  // iron
  $iron_line_items  = $iron_laundry_type->field_iron_line_item['und'];
  $washing_laundry_line_items = $washing_laundry_type->field_washing_laundry_line_items['und'];

  foreach($iron_line_items as $item) {
    $iron_laundry_type_collection[] = field_collection_item_load($item['value']);
    #$description = array_reverse(taxonomy_get_parents_all(59));
  }

  // Invoice items
  echo '
    <table class="invoice-items">
      <tr class="one">
        <td colspan="4"> Iron</td>
      </tr>
      <tr class="two">
        <td >Items</td>
        <td >Quantity</td>
        <td >Rate per Unit</td>
        <td >Total </td>
      </tr>';

$final_total = 0;
  foreach($iron_line_items as $item) {
    $iron_laundry_item = field_collection_item_load($item['value']);
    $description_extract_terms = array_reverse(taxonomy_get_parents_all($iron_laundry_item->field_iron_cloth_type['und'][0]['tid']));
    $description_string ="";
    foreach( $description_extract_terms as $terms) {
     $description_string .= $terms->name . '>';
    }
    $description = trim($description_string,">");
    $rate = $iron_laundry_item->field_item_rate['und'][0]['value'];
    $final_total += $rate;
    echo  '<tr class="two">
      <td >'. $description .'</td>
      <td >1</td>
      <td >' . $rate . '</td>
      <td >' . $rate . ' </td>
      </tr>';

  }

  echo  '<tr class="one">
        <td colspan="4"> Drycleaning/Washing</td>
      </tr>';
  foreach($washing_laundry_line_items as $item) {
    $washing_laundry_item = field_collection_item_load($item['value']);
    $description_term = taxonomy_term_load($washing_laundry_item->field_laundry_type_washing['und'][0]['tid']);
    $description = $description_term->name;
    $weight = $washing_laundry_item->field_cloth_weight['und'][0]['value'];
    $rate = $washing_laundry_item->field_rate_per_kg['und'][0]['value'];
    $total = $rate*$weight;
    $final_total += $total;

    echo  '<tr class="two">
      <td >'. $description .'</td>
      <td >' . $weight . '</td>
      <td >' . $rate . '</td>
      <td >' . $total . ' </td>
      </tr>';

  }

  echo  '<tr class="one">
        <td colspan="4">Total: ' . $final_total . '</td>
      </tr>';

  echo ' </table>';



  $content = ob_get_contents();
  ob_end_clean();
  return $content;

}
