package tn.esprit.user.control;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.*;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.*;
import tn.esprit.user.dto.LoginRequest;
import tn.esprit.user.dto.LoginResponse;
import tn.esprit.user.entity.User;
import tn.esprit.user.service.IUserService;
import tn.esprit.user.service.JwtBlacklistService;
import tn.esprit.user.service.jwt.CustomerServiceImpl;
import tn.esprit.user.utils.JwtUtil;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

@RestController
@AllArgsConstructor
@RequestMapping("/user")
@CrossOrigin("*")
public class UserRestController {
    private IUserService userSe;
    private  CustomerServiceImpl customerService;
    private  JwtUtil jwtUtil;
    private  AuthenticationManager authenticationManager;
    private JwtBlacklistService jwtBlacklistService;




    // http://localhost:8089/projetpi/User/retrieve-all-Users
    @GetMapping("/retrieve-all-Users")
    public List<User> getUsers() {
        List<User> listUsers = userSe.retrieveAllUsers();
        return listUsers;
    }

    // http://localhost:8089/projetpi/User/retrieve-User/8
    @GetMapping("/retrieve-User/{User-id}")
    public User retrieveUser(@PathVariable("User-id") Long chId) {
        User User = userSe.retrieveUser(chId);
        return User;
    }
//    @GetMapping("/retrieve-User/{User-mail}")
//    public User retrieveUsermail(@PathVariable("User-mail") String chId) {
//        User User = userSe.loadUserByUsername(chId);
//        return User;
//    }

    // http://localhost:8089/projetpi/User/add-User
    @PostMapping("/add-User")
    public User addUser(@RequestBody User c) {
        User User = userSe.addUser(c);
        return User;
    }

    // http://localhost:8089/projetpi/User/remove-User/{User-id}
    @DeleteMapping("/remove-User/{User-id}")
    public void removeUser(@PathVariable("User-id") Long chId) {
        userSe.removeUser(chId);
    }
    // http://localhost:8089/projetpi/User/modify-User
    @PutMapping("/modify-User")
    public User modifyUser(@RequestBody User c) {
        User User = userSe.modifyUser(c);
        return User;
    }
    @GetMapping("/fin/{useremail}")
    public ResponseEntity<User> getUserByUseremail(@PathVariable String useremail) {
        Optional<User> user = userSe.findByUseremail(useremail);
        if (user.isPresent()) {
            return ResponseEntity.ok(user.get());
        } else {
            return ResponseEntity.notFound().build();
        }
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
        System.out.println("user role: " + userDetails.getAuthorities());
        System.out.println("token" + jwt);

        return ResponseEntity.ok(new LoginResponse(jwt));
    }
    @PostMapping("/logout/{token}")
    public ResponseEntity<Void> logout(@PathVariable("token") String jwt) {
        jwtBlacklistService.add(jwt);

        SecurityContextHolder.clearContext();

        return ResponseEntity.ok().build();
    }


}
