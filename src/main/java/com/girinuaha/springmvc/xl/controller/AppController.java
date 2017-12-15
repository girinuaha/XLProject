package com.girinuaha.springmvc.xl.controller;

import org.json.simple.JSONObject;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.girinuaha.springmvc.xl.function.HttpRequest;

@Controller
@SuppressWarnings("unchecked")
public class AppController {
	
	public HttpRequest request = new HttpRequest();
	
	@RequestMapping(value = "/dinamika/purchase", method = RequestMethod.GET)
	public String purchase() {
		return "purchase";
	}
	
	@RequestMapping(value = "/dinamika/purchase", method = RequestMethod.POST)
	@ResponseBody
	public String validationPurchase(
			@RequestParam("framework") String framework,
			@RequestParam("msisdn") String msisdn,
			@RequestParam("serviceid") String serviceid,
			@RequestParam("touchpoint") String touchpoint,
			@RequestParam("homepoc") String homepoc,
			@RequestParam("balance") int balance,
			@RequestParam("price") int price,
			@RequestParam("paymentcategory") String paymentcategory,
			@RequestParam("registrationdate") String registrationdate) {
		
		JSONObject dinamika = new JSONObject();
		String response = " ";
		
		try {
			
			dinamika.put("framework", framework);
			dinamika.put("msisdn", msisdn);
			dinamika.put("serviceid", serviceid);
			dinamika.put("touchpoint", touchpoint);
			dinamika.put("homepoc", homepoc);
			dinamika.put("balance", balance);
			dinamika.put("price", price);
			dinamika.put("paymentcategory", paymentcategory);
			dinamika.put("registrationdate", registrationdate);
			response = request.post("http://10.24.139.13:7777/dinamika/v1/validation/purchase", MediaType.APPLICATION_JSON, null, dinamika.toJSONString());
			return response;
			
		} catch (Exception e) {
			e.printStackTrace();
		}
		
		return null;
	}
	
	@RequestMapping(value = "/dinamika/renewal", method = RequestMethod.GET)
	public String renewal() {
		return "renewal";
	}
	
	@RequestMapping(value = "/dinamika/renewal", method = RequestMethod.POST)
	@ResponseBody
	public String validationRenewal(
			@RequestParam("framework") String framework,
			@RequestParam("msisdn") String msisdn,
			@RequestParam("serviceid") String serviceid,
			@RequestParam("touchpoint") String touchpoint,
			@RequestParam("homepoc") String homepoc,
			@RequestParam("balance") int balance,
			@RequestParam("price") int price,
			@RequestParam("checksubscribercount") String checksubscribercount,
			@RequestParam("subscriberdiscountcount") String subscriberdiscountcount,
			@RequestParam("paymentcategory") String paymentcategory,
			@RequestParam("registrationdate") String registrationdate,
			@RequestParam("recurringcount") int recurringcount,
			@RequestParam("expdate") String expdate) {
		
		JSONObject dinamika = new JSONObject();
		String response = " ";
		
		try {
			
			dinamika.put("framework", framework);
			dinamika.put("msisdn", msisdn);
			dinamika.put("serviceid", serviceid);
			dinamika.put("touchpoint", touchpoint);
			dinamika.put("homepoc", homepoc);
			dinamika.put("balance", balance);
			dinamika.put("price", price);
			dinamika.put("checksubscribercount", checksubscribercount);
			dinamika.put("subscriberdiscountcount", subscriberdiscountcount);
			dinamika.put("paymentcategory", paymentcategory);
			dinamika.put("registrationdate", registrationdate);
			dinamika.put("recurringcount", recurringcount);
			dinamika.put("expdate", expdate);
			response = request.post("http://10.24.139.13:7777/dinamika/v1/validation/renewal", MediaType.APPLICATION_JSON, null, dinamika.toJSONString());
			return response;
			
		} catch (Exception e) {
			e.printStackTrace();
		}
		
		return null;
	}
	
	@RequestMapping(value = "/product/serviceid", method = RequestMethod.GET)
	public String serviceid() {
		return "serviceid";
	}
	
	@RequestMapping(value = "/product/serviceid", method = RequestMethod.POST)
	@ResponseBody
	public String serviceidCreationSid(
			@RequestParam("serviceid") String serviceid,
			@RequestParam("count") String count,
			@RequestParam("productname") String productname,
			@RequestParam("productdomain") String productdomain,
			@RequestParam("productvariant") String productvariant,
			@RequestParam("subscriptiontype") String subscriptiontype,
			@RequestParam("promotype") String promotype,
			@RequestParam("benefittype") String benefittype,
			@RequestParam("benefitconsumption") String benefitconsumption,
			@RequestParam("createdby") String createdby,
			@RequestParam("description") String description) {
		
		JSONObject dinamika = new JSONObject();
		String response = " ";
		
		try {
			
			dinamika.put("serviceid", serviceid);
			dinamika.put("count", count);
			dinamika.put("productname", productname);
			dinamika.put("productdomain", productdomain);
			dinamika.put("productvariant", productvariant);
			dinamika.put("subscriptiontype", subscriptiontype);
			dinamika.put("promotype", promotype);
			dinamika.put("benefittype", benefittype);
			dinamika.put("benefitconsumption", benefitconsumption);
			dinamika.put("createdby", createdby);
			dinamika.put("description", description);
			response = request.post("http://10.24.139.13:7777/product/v1/sid", MediaType.APPLICATION_JSON, null, dinamika.toJSONString());
			return response;
			
		} catch (Exception e) {
			e.printStackTrace();
		}
		
		return null;
	}
	
	@RequestMapping(value = "/notification/validation", method = RequestMethod.GET)
	public String validation() {
		return "validation";
	}
	
	@RequestMapping(value = "/notification/validation", method = RequestMethod.POST)
	@ResponseBody
	public String validationResponse(
			@RequestParam("serviceid") String serviceid,
			@RequestParam("contactsource") String contactsource,
			@RequestParam("contacttype") String contacttype) {
		
		JSONObject dinamika = new JSONObject();
		String response = " ";
		
		try {
			
			dinamika.put("serviceid", serviceid);
			dinamika.put("contactsource", contactsource);
			dinamika.put("contacttype", contacttype);
			response = request.post("http://10.24.139.13:7777/notification/v1/validation", MediaType.APPLICATION_JSON, null, dinamika.toJSONString());
			return response;
			
		} catch (Exception e) {
			e.printStackTrace();
		}
		
		return null;
	}
	
	@RequestMapping(value = "/notification/history", method = RequestMethod.GET)
	public String history() {
		return "history";
	}
	
	@RequestMapping(value = "/notification/history", method = RequestMethod.POST)
	@ResponseBody
	public String validationHistory(
			@RequestParam("msisdn") String msisdn,
			@RequestParam("partition") String partition) {
		
		JSONObject dinamika = new JSONObject();
		String response = " ";
		
		try {
			
			dinamika.put("msisdn", msisdn);
			dinamika.put("partition", partition);
			response = request.post("http://10.24.139.13:7777/notification/v1/history", MediaType.APPLICATION_JSON, null, dinamika.toJSONString());
			return response;
			
		} catch (Exception e) {
			e.printStackTrace();
		}
		
		return null;
	}
}
