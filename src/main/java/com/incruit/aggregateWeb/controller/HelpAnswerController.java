package com.incruit.aggregateWeb.controller;

import com.incruit.aggregateWeb.db.dto.HelpDTO;
import com.incruit.aggregateWeb.service.HelpService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@Controller
@RequiredArgsConstructor
public class HelpAnswerController {
    private final HelpService helpService;

    @GetMapping("/help/{id}")
    public String renderHelpForm(@PathVariable int id, Model model){
        HelpDTO helpDTO = helpService.getHelp(id);
        model.addAttribute("data",helpDTO);

        return "help_answer";
    }

}
