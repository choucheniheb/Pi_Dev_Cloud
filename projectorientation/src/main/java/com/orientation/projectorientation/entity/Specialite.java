package com.orientation.projectorientation.entity;
import lombok.*;
import jakarta.persistence.*;
import java.util.Date;
import java.util.Set;
import java.util.HashSet;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor

public class Specialite {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nom;
    @Column(length = 5000)
    private String description;
    private String pdfFile;


    @Enumerated(EnumType.STRING)
    CategorieSpecialite categorieSpecialite;


    @ManyToMany
    @JoinTable(
            name = "specialite_module",
            joinColumns = @JoinColumn(name = "specialite_id"),
            inverseJoinColumns = @JoinColumn(name = "module_id"))
    private Set<Module> modules = new HashSet<>();

}