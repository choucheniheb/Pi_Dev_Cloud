package com.esprit.elearningback.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@Table(name = "ressources")
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Ressources {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long idRessources;
    @Column(name = "ressource_name")
    private String ressourceName;
    private String ressourceType;

    @Lob
    private byte[] fileData; // New attribute to store the file data

    @ManyToOne
    @JoinColumn(name = "subject_id", nullable = true)
    private Subject subject;

    // Getters and setters

}