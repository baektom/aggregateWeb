package com.incruit.aggregateWeb.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class AboutUsController {
    @GetMapping("/about_us")
    public String renderAboutUs(){
        return "about_us";
    }
}
