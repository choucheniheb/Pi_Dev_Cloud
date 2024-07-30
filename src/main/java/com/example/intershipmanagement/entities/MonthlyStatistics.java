package com.example.intershipmanagement.entities;

import jakarta.persistence.Entity;
import lombok.*;
import lombok.experimental.FieldDefaults;

import java.time.LocalDate;


@Getter
@Setter



public class MonthlyStatistics {
    private LocalDate month;
    private Long count;

    // Constructeur, getters et setters
    public MonthlyStatistics(LocalDate month, Long count) {
        this.month = month;
        this.count = count;
    }

    // Getters and setters
    public LocalDate getMonth() {
        return month;
    }

    public void setMonth(LocalDate month) {
        this.month = month;
    }

    public Long getCount() {
        return count;
    }

    public void setCount(Long count) {
        this.count = count;
    }
}



