package com.incruit.aggregateWeb.controller.advice;

import com.incruit.aggregateWeb.controller.AboutUsController;
import com.incruit.aggregateWeb.controller.IndexController;
import com.incruit.aggregateWeb.db.dto.QnASearchDTO;
import com.incruit.aggregateWeb.service.QnASearchService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ModelAttribute;

import java.util.List;

@ControllerAdvice(assignableTypes = {IndexController.class, AboutUsController.class})
@RequiredArgsConstructor
public class GlobalControllerAdvice {

    private final QnASearchService qnaSearchService;

    @ModelAttribute("list")
    public List<QnASearchDTO> addCommonData(QnASearchDTO qnaSearchDTO) {
        return qnaSearchService.getQnAList(qnaSearchDTO);
    }
}