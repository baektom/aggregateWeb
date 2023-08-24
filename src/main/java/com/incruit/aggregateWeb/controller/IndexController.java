package com.incruit.aggregateWeb.controller;

import com.incruit.aggregateWeb.db.dto.QnASearchDTO;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
@RequiredArgsConstructor
public class IndexController {
    @GetMapping("/")
    public String renderIndex(){
        return "index";
    }

    @GetMapping("/qna")
    public String renderQnAForm(){
        return "qna";
    }

    @GetMapping("/about_us")
    public String renderAboutUs(){
        return "about_us";
    }

}
