package com.incruit.aggregateWeb.db.mapper;

import com.incruit.aggregateWeb.db.dto.HelpDTO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface HelpItemMapper {
    List<HelpDTO> findHelpList();

    HelpDTO findHelp(int id);

    HelpDTO findHeadView();

}
