<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <meta name="author" content="">
    <link rel="icon" href="../assets/bootstrap-4.0.0-alpha.6/docs/favicon.ico">

    <title>Product Service ID Creation</title>

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
          <li class="nav-item">
            <a class="nav-link" href="/dinamika/purchase">Validation Purchase</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/dinamika/renewal">Validation Renewal</a>
          </li>
          <li class="nav-item active">
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
	
    <div class="container" style="margin-top: 3%">
    	<div class="chooseConfig">
    		<button id="baseSid" class="btn btn-success">Base on SID</button>
			<button id="baseConfig" class="btn btn-primary" style="margin-left: 2%;">Base on Description</button>
    	</div>
    	
		<div class="serviceidCreation">
			<div class="fieldBaseSid" style="margin-top: 5%">
	    		<div class="row">
	    			<div class="form-group col-sm-6 sid">
				      <label>Service ID <span style="color: red;">*</span></label>
				      <input class="form-control" id="serviceid" name="serviceid" required="required">
				      <div id="invalidServiceid" style="display:none;">
				  		<p style="color: red;">Service ID can't be empty</p>
				      </div>
				    </div>
				    <div class="form-group col-sm-6">
				      <label>Count <span style="color: red;">*</span></label>
				      <input class="form-control" type="text" min="1" max="50" id="count" name="count" required="required">
				      <div id="invalidCount" style="display:none;">
				  		<p style="color: red;">Count can't be empty</p>
				      </div>	
				    </div>
				    <div class="form-group col-sm-6 config" style="display: none;">
				      <label>Product Name <span style="color: red;">*</span></label>
				      <input class="form-control" id="productname" name="productname" required="required">
				      <div id="invalidProductname" style="display:none;">
				  		<p style="color: red;">Product name can't be empty</p>
				      </div>
				    </div>
				    <div class="form-group col-sm-6 config" style="display: none;">
				      <label>Product Domain <span style="color: red;">*</span></label>
				      <input class="form-control" id="productdomain" name="productdomain" required="required" style="text-transform: uppercase;">
				      <div id="invalidProductdomain" style="display:none;">
				  		<p style="color: red;">Product domain can't be empty</p>
				      </div>
				    </div>
				    <div class="form-group col-sm-6 config" style="display: none;">
				      <label>Product Variant <span style="color: red;">*</span></label>
				      <input class="form-control" id="productvariant" name="productvariant" required="required" style="text-transform: uppercase;">
				      <div id="invalidProductvariant" style="display:none;">
				  		<p style="color: red;">Product variant can't be empty</p>
				      </div>
				    </div>
				    <div class="form-group col-sm-6 config" style="display: none;">
				      <label>Subscription Type </label>
				      <select class="form-control" id="subscriptiontype" name="subscriptiontype" required="required">
				      	<option> REC </option>
				      	<option> OTC </option>		
				      </select>
				    </div>
				    <div class="form-group col-sm-6 config" style="display: none;">
				      <label>Promo Type <span style="color: red;">*</span></label>
				      <input class="form-control" id="promotype" name="promotype" required="required" style="text-transform: uppercase;">
				      <div id="invalidPromotype" style="display:none;">
				  		<p style="color: red;">Promo type can't be empty</p>
				      </div>
				    </div>
				    <div class="form-group col-sm-6 config" style="display: none;">
				      <label>Benefit Type <span style="color: red;">*</span></label>
				      <input class="form-control" id="benefittype" name="benefittype" required="required" style="text-transform: uppercase;">
				      <div id="invalidBenefittype" style="display:none;">
				  		<p style="color: red;">Benefit type can't be empty</p>
				      </div>
				    </div>
				    <div class="form-group col-sm-6 config" style="display: none;">
				      <label>Benefit Consumption </label>
				      <select class="form-control" id="benefitconsumption" name="benefitconsumption" required="required">
				      	<option> UNLIMITED </option>
				      	<option> VOLUME </option>		
				      </select>
				    </div>
				    <div class="form-group col-sm-6">
				      <label>Created By <span style="color: red;">*</span></label>
				      <input class="form-control" id="createdby" name="createdby" required="required">
				      <div id="invalidCreatedby" style="display:none;">
				  		<p style="color: red;">Created by can't be empty</p>
				      </div>
				    </div>
				    <div class="form-group col-sm-6">
				      <label>Description <span style="color: red;">*</span></label>
				      <input class="form-control" id="description" name="description" required="required">
				      <div id="invalidDescription" style="display:none;">
				  		<p style="color: red;">Description can't be empty</p>
				      </div>	
				    </div>
	    		</div>
				<span style="font-weight: 100">Note : Field with mark (<span style="color: red">*</span>) is required!</span><br><br>
				<button id="check" class="btn btn-primary">Check</button><br><br><br>
			</div>
    	</div>
    	<div class="response">
    	
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
  	<script src="../assets/bootstrap-4.0.0-alpha.6/dist/js/serviceid.js"></script>
  	
  </body>
</html>
