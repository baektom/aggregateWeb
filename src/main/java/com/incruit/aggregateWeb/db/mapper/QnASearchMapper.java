package com.incruit.aggregateWeb.db.mapper;

import com.incruit.aggregateWeb.db.dto.QnASearchDTO;

import java.util.List;

public interface QnASearchMapper {
    List<QnASearchDTO> findQnASearchList();

    QnASearchDTO findQnAData(int id);
}
