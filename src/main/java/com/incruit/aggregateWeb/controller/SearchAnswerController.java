package com.incruit.aggregateWeb.controller;

import com.incruit.aggregateWeb.db.dto.QnASearchDTO;
import com.incruit.aggregateWeb.service.QnASearchService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@Controller
@RequiredArgsConstructor
public class SearchAnswerController {
    private final QnASearchService qnaSearchService;

    @GetMapping("/searchAnswer/{id}")
    public String renderQnAForm(@PathVariable int id, Model model){
        QnASearchDTO qnaSearchDTO = qnaSearchService.getQnA(id);
        model.addAttribute("data",qnaSearchDTO);

        return "search_answer";
    }

}
