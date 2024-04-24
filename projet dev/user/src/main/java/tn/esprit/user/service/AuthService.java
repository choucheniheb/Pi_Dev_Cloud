package tn.esprit.user.service;

import org.springframework.http.ResponseEntity;
import tn.esprit.user.dto.SignupRequest;

public interface AuthService {
    boolean createUser(SignupRequest signupRequest);
}
