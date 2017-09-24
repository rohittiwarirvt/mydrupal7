<?php
/**
 * @file
 * Shopping cart template.
 */
?>

<div class="row">
  <div class="col-md-5 left-content" >
     <div class="wrapper">
       <div class="cart-icon"></div>
         <span class="cart_popup_count"><?php print $product_count; ?></span>
         <div id="cart-popup" style="display:none;">
           <?php print theme('commerce_cart_block', $variables['variables']); ?>
           <div class="popup-arrow"></div>
         </div>
     </div>
  </div>
  <div class="col-md-7 right-content">
    <h3 class="block-title">My Cart</h3>
    <span class="text">item(s) - Rs <?php print $product_total; ?></span>

  </div>
</div>
