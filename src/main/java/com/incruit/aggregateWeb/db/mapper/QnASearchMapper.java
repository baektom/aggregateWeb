package com.incruit.aggregateWeb.db.mapper;

import com.incruit.aggregateWeb.db.dto.QnASearchDTO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface QnASearchMapper {
    List<QnASearchDTO> findQnASearchList();

    QnASearchDTO findQnAData(int id);

    QnASearchDTO findMainPageData();

}
