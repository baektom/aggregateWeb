package com.incruit.aggregateWeb.db.mapper;

import com.incruit.aggregateWeb.db.dto.QnASearchDTO;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import java.util.List;

@Mapper
public interface QnASearchMapper {
    @Select("select subject as question from kiwonsale.tguardsub where guardIDX2 = 4232")
    List<QnASearchDTO> findQnASearchList(QnASearchDTO qnaDTO);
}
