package com.example.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("")
public class TestContoller {

	@RequestMapping("")
	public String toStart() {
		return "start";
	}

    /**
     * 
     */
    @PostMapping("/startAjax")
    public ResponseEntity<Boolean> startAjax() {
    	Boolean result = true;
    	return new ResponseEntity<>(result, HttpStatus.OK);
    }
}
