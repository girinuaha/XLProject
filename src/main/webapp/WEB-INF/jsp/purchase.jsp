<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <meta name="author" content="">
    <link rel="icon" href="../assets/bootstrap-4.0.0-alpha.6/docs/favicon.ico">

    <title>Dinamik Validation Purchase</title>

    <!-- Bootstrap core CSS -->
    <link href="../assets/bootstrap-4.0.0-alpha.6/dist/css/bootstrap.css" rel="stylesheet" type="text/css">

    <!-- Custom styles for this template -->
    <link href="../assets/bootstrap-4.0.0-alpha.6/dist/css/navbar-top-fixed.css" rel="stylesheet" type="text/css">
  	<link href="https://cdnjs.cloudflare.com/ajax/libs/gijgo/1.7.0/combined/css/gijgo.min.css" rel="stylesheet" type="text/css" />
  </head>

  <body>

    <nav class="navbar navbar-toggleable-md navbar-inverse fixed-top bg-inverse">
      <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <span class="navbar-brand">DINAMIKA Quantum</span>
      <div class="collapse navbar-collapse" id="navbarCollapse">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="/dinamika/purchase">Validation Purchase</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/dinamika/renewal">Validation Renewal</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/product/serviceid">ServiceID Creation</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/notification/validation">Notification Validation</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/notification/history">History Notification</a>
          </li>
        </ul>
      </div>
    </nav>
	
    <div class="container" style="margin-top: 5%">
		  <div class="row">
		    <div class="form-group col-sm-6">
		      <label>Framework</label>
		      <select id="framework" class="form-control" required="required">
		      	<option> V1 </option>
		      	<option> V2 </option>
		      </select>
		    </div>
		    <div class="form-group col-sm-6">
		      <label>MSISDN <span style="color: red;">*</span></label>
		      <input class="form-control" id="msisdn" name="msisdn" required="required">
		      <div id="invalidMsisdn" style="display:none;">
		  		<p style="color: red;">MSISDN can't be empty</p>
		      </div>	
		    </div>
		  </div>
		  <div class="row">
		  	<div class="form-group col-sm-6">
		      <label>Service ID <span style="color: red;">*</span></label>
		      <input class="form-control" id="serviceid" required="required">
		      <div id="invalidService" style="display:none;">
		  		<p style="color: red;">Service ID can't be empty</p>
		      </div>
		    </div>
		    <div class="form-group col-sm-6">
		      <label>Touch Point <span style="color: red;">*</span></label>
		      <input class="form-control" id="touchpoint" required="required" style="text-transform: uppercase;">
		      <div id="invalidTouchpoint" style="display:none;">
		  		<p style="color: red;">Touchpoint can't be empty</p>
		      </div>
		    </div>
		  </div>
		  <div class="row">
		  	<div class="form-group col-sm-6">
		      <label>Homepoc <span style="color: red;">*</span></label>
		      <input class="form-control" id="homepoc" required="required">
		      <div id="invalidLocation" style="display:none;">
		  		<p style="color: red;">Homepoc can't be empty</p>
		      </div>
		    </div>
		    <div class="form-group col-sm-6">
		      <label>Balance <span style="color: red;">*</span></label>
		      <input class="form-control" id="balance" required="required">
		      <div id="invalidBalance" style="display:none;">
		  		<p style="color: red;">Balance can't be empty</p>
		      </div>
		    </div>
		  </div>
		  <div class="row">
		  	<div class="form-group col-sm-6">
		      <label>Price <span style="color: red;">*</span></label>
		      <input class="form-control" id="price" required="required">
		      <div id="invalidPrice" style="display:none;">
		  		<p style="color: red;">Price can't be empty</p>
		      </div>
		    </div>
		    <div class="form-group col-sm-6">
		      <label>Payment Category </label>
		      <select class="form-control" id="paymentcategory" required="required">
		      	<option>PRE</option>
		      	<option>POST</option>
		      </select>
		    </div>
		  </div>
		  <div class="row">
		  	<div class="form-group col-sm-6">
		      <label>Registration Date <span style="color: red;">*</span></label>
		      <input class="form-control" type="text" id="registrationdate" required="required" placeholder="YYYY-MM-DD">
		      <div id="invalidDate" style="display:none;">
		  		<p style="color: red;">Registration Date can't be empty</p>
		      </div>
		    </div>
		  </div>
		  <span style="font-weight: 100">Note : Field with mark (<span style="color: red">*</span>) is required!</span><br><br>
		  <button id="check" class="btn btn-primary">Check</button><br><br><br>
		
		<div class="validationPurchase">
			
    	</div>
    </div>


    <!-- Bootstrap core JavaScript
    ================================================== -->
    <!-- Placed at the end of the document so the pages load faster -->
    <script src="../assets/bootstrap-4.0.0-alpha.6/dist/js/jquery.min.js"></script>
    <script src="../assets/bootstrap-4.0.0-alpha.6/dist/js/tether.min.js"></script>
    <script src="../assets/bootstrap-4.0.0-alpha.6/dist/js/bootstrap.min.js"></script>
    <!-- IE10 viewport hack for Surface/desktop Windows 8 bug -->
    <script src="../assets/bootstrap-4.0.0-alpha.6/docs/assets/js/ie10-viewport-bug-workaround.js"></script>
  	<script src="../assets/bootstrap-4.0.0-alpha.6/dist/js/gijgo.min.js" type="text/javascript"></script>
  	<script src="../assets/bootstrap-4.0.0-alpha.6/dist/js/jquery.mask.min.js"></script>
  	<script src="../assets/bootstrap-4.0.0-alpha.6/dist/js/purchase.js"></script>
  	
  </body>
</html>
