package com.example.intershipmanagement.repositories;

import com.example.intershipmanagement.entities.Event;
import com.example.intershipmanagement.entities.MonthlyStatistics;
import com.example.intershipmanagement.entities.Reservation;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import com.example.intershipmanagement.entities.MonthlyStatistics;



import java.time.LocalDate;
import java.util.List;
@ComponentScan
@Repository
public interface ReservRepository extends JpaRepository<Reservation,Long> {


}

