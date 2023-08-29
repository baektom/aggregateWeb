package com.incruit.aggregateWeb.service;

import com.incruit.aggregateWeb.db.dto.HelpDTO;
import com.incruit.aggregateWeb.db.mapper.HelpItemMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class HelpService {

    private final HelpItemMapper helpItemMapper;

    public List<HelpDTO> getHelpList(){
        return helpItemMapper.findHelpList();
    }

    public HelpDTO getHelp(int id){
        return helpItemMapper.findHelp(id);
    }

    public HelpDTO getHeadView(){
        return helpItemMapper.findHeadView();
    }

}
