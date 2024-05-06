package com.esprit.elearningback.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Data;

import java.util.List;

@Data
@Entity
@Table(name = "service")
public class Service {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long serviceId;

    private String serviceName;

    private String serviceDescription;

    @ManyToOne
    @JoinColumn(name = "subject_id" , nullable= true)
    private Subject subject;

    @JsonIgnore
    @OneToMany(mappedBy = "service", cascade = CascadeType.ALL)
    private List<Rating> Ratings;

}
