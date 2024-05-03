package com.example.intershipmanagement.entities;


        import jakarta.persistence.*;
        import lombok.*;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString(exclude = "event")
public class Avis {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String contenu;

    @ManyToOne
    private Event event;

}
