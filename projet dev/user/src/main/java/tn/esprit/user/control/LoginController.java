package tn.esprit.user.control;

import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.*;
import tn.esprit.user.dto.LoginRequest;
import tn.esprit.user.dto.LoginResponse;
import tn.esprit.user.entity.User;
import tn.esprit.user.service.IUserService;
import tn.esprit.user.service.jwt.CustomerServiceImpl;
import tn.esprit.user.utils.JwtUtil;

import java.util.List;

@RestController
@RequestMapping("/login")
@CrossOrigin("*")
public class LoginController {

    private final AuthenticationManager authenticationManager;
    private final CustomerServiceImpl customerService;
    private final JwtUtil jwtUtil;


    @Autowired
    public LoginController(AuthenticationManager authenticationManager, CustomerServiceImpl customerService, JwtUtil jwtUtil) {
        this.authenticationManager = authenticationManager;
        this.customerService = customerService;
        this.jwtUtil = jwtUtil;
    }

    @PostMapping("/auth")
    public ResponseEntity<LoginResponse> login(@RequestBody LoginRequest loginRequest) {
        try {
            authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(loginRequest.getEmail(), loginRequest.getPassword())
            );
        } catch (AuthenticationException e) {
            // Log the authentication failure
            System.err.println("Authentication chy: " + e.getMessage());
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }

        UserDetails userDetails;
        try {
            userDetails = customerService.loadUserByUsername(loginRequest.getEmail());
        } catch (UsernameNotFoundException e) {
            // Log the user not found exception
            System.err.println("User not found: " + e.getMessage());
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }

        // Generate JWT token
        String jwt = jwtUtil.generateToken(userDetails);
        return ResponseEntity.ok(new LoginResponse(jwt));
    }
}

