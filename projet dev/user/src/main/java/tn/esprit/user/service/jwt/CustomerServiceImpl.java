package tn.esprit.user.service.jwt;

import org.hibernate.cache.internal.CollectionCacheInvalidator;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import tn.esprit.user.entity.User;
import tn.esprit.user.repository.UserRepository;

import java.util.Collection;
import java.util.Collections;

@Service
public class CustomerServiceImpl implements UserDetailsService {
    private final UserRepository userRepository;

    public CustomerServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override

    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        User user = userRepository.findByUseremail(email)
                .orElseThrow(() -> new UsernameNotFoundException("user not found : " + email));
        return new org.springframework.security.core.userdetails.User(user.getUseremail(),user.getPassword(),Collections.emptyList());

    }
}
