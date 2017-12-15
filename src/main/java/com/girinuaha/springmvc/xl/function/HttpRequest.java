package com.girinuaha.springmvc.xl.function;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.nio.charset.StandardCharsets;
import java.text.MessageFormat;
import java.util.Base64;
import java.util.HashMap;
import java.util.Map.Entry;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.client.RestClientException;
import org.springframework.web.client.RestTemplate;

public class HttpRequest {

	@SuppressWarnings("unused")
	private static final Logger logger = LoggerFactory.getLogger(HttpRequest.class);

	public String post(String endpoint, Object[] uriParams) throws RestClientException, Exception {
		String uri = endpoint;
		if (uriParams != null) {
			uri = MessageFormat.format(uri, uriParams);
		}
		System.out.println("Performing POST: " + uri);

		ResponseEntity<String> response = null;
		try {
			HttpHeaders headers = new HttpHeaders();
			headers.setContentType(MediaType.TEXT_PLAIN);
			// headers.add("Authorization", "Basic " + userPasswdCombo);
			headers.add("Accept-Charset", "UTF-8");
			HttpEntity<String> request = new HttpEntity<String>("", headers);
			RestTemplate rest = new RestTemplate();
			response = rest.postForEntity(uri, request, String.class);
		} catch (RestClientException e) { // mostly raised by timeout
			System.out.println(e.toString());
			throw new RestClientException(e.toString(), e);
		} catch (Exception e) {
			System.out.println(e.toString());
			throw new Exception(e);
		}

		HttpStatus status = response.getStatusCode();
		System.out.println("POST response status: " + status);
		if (status.equals(HttpStatus.OK)) {
			String responseBody = response.getBody();
			System.out.println("POST response body: \n" + responseBody);
			return responseBody;
		} else {
			return null;
		}
	}

	public String post(String endpoint, HashMap<String, String> headerParams) throws RestClientException {
		System.out.println("Performing POST: " + endpoint);

		ResponseEntity<String> response = null;
		try {
			HttpHeaders headers = new HttpHeaders();
			headers.setContentType(MediaType.TEXT_PLAIN);
			// headers.add("Authorization", "Basic " + userPasswdCombo);
			headers.add("Accept-Charset", "UTF-8");

			if (headerParams != null) {
				for (Entry<String, String> entry : headerParams.entrySet()) {
					headers.add(entry.getKey(), entry.getValue());
				}
				System.out.println("POST request header: " + headers.toString());
			}

			HttpEntity<String> request = new HttpEntity<String>("", headers);
			RestTemplate rest = new RestTemplate();
			response = rest.postForEntity(endpoint, request, String.class);
		} catch (RestClientException e) { // mostly raised by timeout
			System.out.println(e.toString());
			throw new RestClientException("Invalid url or timeout reached");
		} catch (Exception e) {
			System.out.println(e.toString());
			return null;
		}

		HttpStatus status = response.getStatusCode();
		System.out.println("POST response status: " + status);
		if (status.equals(HttpStatus.OK)) {
			String responseBody = response.getBody();
			System.out.println("POST response body: \n" + responseBody);
			return responseBody;
		} else {
			return null;
		}
	}

	public String post(String endpoint, MediaType contentType, HashMap<String, String> headerParams, String body)
			throws RestClientException {
		System.out.println("Performing POST: " + endpoint);

		ResponseEntity<String> response = null;
		try {
			byte[] message = "mukesh:m123".getBytes(StandardCharsets.UTF_8);
			String encoding = Base64.getEncoder().encodeToString(message);
			HttpHeaders headers = new HttpHeaders();
			headers.setContentType(contentType);
			headers.add("Authorization", "Basic " + encoding);
			headers.add("Accept-Charset", "UTF-8");

			if (headerParams != null) {
				for (Entry<String, String> entry : headerParams.entrySet()) {
					headers.add(entry.getKey(), entry.getValue());
				}
			}
			System.out.println("POST request header: " + headers.toString());
			if (body != null) {
				System.out.println("POST request body: " + body);
			}

			HttpEntity<String> request = new HttpEntity<String>(body, headers);
			RestTemplate rest = new RestTemplate();
			response = rest.postForEntity(endpoint, request, String.class);
		} catch (RestClientException e) { // mostly raised by timeout
			System.out.println(e.toString());
			throw new RestClientException("Invalid url or timeout reached");
		} catch (Exception e) {
			System.out.println(e.toString());
			return null;
		}

		HttpStatus status = response.getStatusCode();
		System.out.println("POST response status: " + status);
		if (status.equals(HttpStatus.OK)) {
			String responseBody = response.getBody();
			System.out.println("POST response body: \n" + responseBody);
			return responseBody;
		} else {
			return null;
		}
	}

	public String get(String urll) {
		String url = urll;

		try {
			URL obj = new URL(url);
			HttpURLConnection conn = (HttpURLConnection) obj.openConnection();

			// optional default is GET
			conn.setRequestMethod("GET");

			int responseCode = conn.getResponseCode();
			System.out.println("\nSending 'GET' request to URL : " + url);
			System.out.println("Response Code : " + responseCode);

			BufferedReader in = new BufferedReader(new InputStreamReader(conn.getInputStream()));
			String inputLine;
			StringBuffer response = new StringBuffer();

			while ((inputLine = in.readLine()) != null) {
				response.append(inputLine);
			}
			in.close();

			return response.toString();
		} catch (Exception e) {
			e.printStackTrace();
		}

		return null;
	}
}
