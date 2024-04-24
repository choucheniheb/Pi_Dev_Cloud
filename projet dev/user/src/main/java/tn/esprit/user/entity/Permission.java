package tn.esprit.user.entity;
import lombok.*;
import jakarta.persistence.*;

import java.util.Date;
import java.util.Set;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Permission {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idPermission;
    private String name;
    private String description;
    private String code;

    @ManyToMany(mappedBy = "permissions")
    private Set<Role> roles;
}
