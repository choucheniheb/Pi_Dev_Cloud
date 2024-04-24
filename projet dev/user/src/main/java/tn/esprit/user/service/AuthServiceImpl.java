package tn.esprit.user.service;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import tn.esprit.user.control.UserRestController;
import tn.esprit.user.dto.SignupRequest;
import tn.esprit.user.entity.User;
import tn.esprit.user.repository.UserRepository;

@Service
public class AuthServiceImpl implements AuthService{
    private final UserRepository userRepository ;
    private final PasswordEncoder passwordEncoder ;
    @Autowired

    public AuthServiceImpl(UserRepository userRepository, PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }


    public boolean createUser(SignupRequest signupRequest) {
        if (userRepository.existsByUseremail(signupRequest.getEmail())) {
            return false;
        }
        User user = new User();
        BeanUtils.copyProperties(signupRequest,user);
        String hashPasword = passwordEncoder.encode(signupRequest.getPassword());
        user.setPassword(hashPasword);
        userRepository.save(user);
        return true;
    }
}
