package com.incruit.aggregateWeb.controller;

import com.incruit.aggregateWeb.db.dto.QnASearchDTO;
import com.incruit.aggregateWeb.service.QnASearchService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
@RequiredArgsConstructor
public class IndexController {

    private final QnASearchService qnaSearchService;

    @GetMapping("/")
    public String renderIndex(){
        return "index";
    }

    @GetMapping("/QNA")
    public String renderQnAForm(){
        return "QNA";
    }

    @GetMapping("/About_us")
    public String renderAboutUs(){
        return "About_us";
    }


    @GetMapping("/search")
    public String renderQnASearchForm(Model model, QnASearchDTO qnaDTO){
        return qnaSearchService.showQnAList(model,qnaDTO);
    }

}
