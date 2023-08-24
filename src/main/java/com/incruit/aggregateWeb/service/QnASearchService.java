package com.incruit.aggregateWeb.service;

import com.incruit.aggregateWeb.db.dto.QnASearchDTO;
import com.incruit.aggregateWeb.db.mapper.QnASearchMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.ui.Model;

import java.util.List;

@Service
@RequiredArgsConstructor
public class QnASearchService {

    private final QnASearchMapper qnaSearchMapper;

    public List<QnASearchDTO> getQnAList(){
        List<QnASearchDTO> list = qnaSearchMapper.findQnASearchList();
        return list;
    }

    public QnASearchDTO getQnA(int id){
        return qnaSearchMapper.findQnAData(id);
    }

}
