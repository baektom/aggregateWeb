package com.incruit.aggregateWeb.db.dto;


import lombok.Data;

@Data
public class QnASearchDTO {
    private long id;
    private String question;
    private String answer;
}
