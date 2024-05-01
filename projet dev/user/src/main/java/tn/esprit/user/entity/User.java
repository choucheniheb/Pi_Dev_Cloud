package tn.esprit.user.entity;
import lombok.*;
import jakarta.persistence.*;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.*;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "app_user")
public class User implements UserDetails {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idUser;
    private String usernam;
    private String userlastname;
    private String useremail;
    private Boolean useretat;
    private Long usertelephone;
    private Date userdate_birth;
    private String usernationaliter;
    @Enumerated(EnumType.STRING)
    private GenderUser usergenderr;
    private String password;
    @Enumerated(EnumType.STRING)
    private rle rle;

    @ManyToOne
    @JoinColumn(name = "role_id")
    private Role role;

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        if (this.rle != null) {
            return Collections.singletonList(new SimpleGrantedAuthority("ROLE_" + this.rle.name()));
        }
        return Collections.emptyList();
    }



    @Override
    public String getPassword() {
        return this.password;
    }

    @Override
    public String getUsername() {
        return useremail;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }
}
