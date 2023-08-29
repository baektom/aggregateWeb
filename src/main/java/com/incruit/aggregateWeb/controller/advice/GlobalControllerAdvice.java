package com.incruit.aggregateWeb.controller.advice;

import com.incruit.aggregateWeb.controller.IndexController;
import com.incruit.aggregateWeb.db.dto.HelpDTO;
import com.incruit.aggregateWeb.service.HelpService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ModelAttribute;

import java.util.List;

@ControllerAdvice(assignableTypes = {IndexController.class})
@RequiredArgsConstructor
public class GlobalControllerAdvice {

    private final HelpService helpService;

    @ModelAttribute("helpList")
    public List<HelpDTO> addHelpList() {
        return helpService.getHelpList();
    }

    @ModelAttribute("headerView")
    public HelpDTO addHeaderView() {
        return helpService.getHeadView();
    }

}