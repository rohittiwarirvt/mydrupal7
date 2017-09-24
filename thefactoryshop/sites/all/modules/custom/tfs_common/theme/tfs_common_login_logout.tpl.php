<div class="header-menu-login-logout">
<?php if ($is_logged_in): ?>
  <div class="logout">
    <div class="welcome"> Welcome, <span>  <?php print $user_name; ?></span> </div>
    <div class="user-logout"> <a href="/user/logout">Logout</a>
  </div>
<?php else: ?>
  <div class=" dropdown">

    <a class="btn  tfs-login dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
       SIGN IN
    </button>
    <a class="btn tfs-sign-up" href="/user/register">SIGN UP</a>
    <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
      <div class="row">
        <div class="col-sm-12 quick-login" >
          <?php print render($login_form); ?>
        </div>
      </div>
    </div>
<?php endif; ?>

