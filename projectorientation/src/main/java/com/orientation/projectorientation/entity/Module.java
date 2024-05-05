package com.orientation.projectorientation.entity;
import lombok.*;
import jakarta.persistence.*;

import java.util.HashSet;
import java.util.Set;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Module {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nom;
    private int coefficient;

    @Enumerated(EnumType.STRING)
    Matier matier;

    @ManyToMany(mappedBy = "modules")
    private Set<Specialite> specialites = new HashSet<>();
}
