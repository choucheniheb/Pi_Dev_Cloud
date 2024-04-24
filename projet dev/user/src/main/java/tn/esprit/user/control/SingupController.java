package tn.esprit.user.control;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import tn.esprit.user.dto.SignupRequest;
import tn.esprit.user.service.AuthService;

@RestController
@RequestMapping("/singup")
public class SingupController {
    private final AuthService authService;
 @Autowired
    public SingupController(AuthService authService) {
        this.authService = authService;
    }


    @PostMapping("/D-User")
    public ResponseEntity<String> sinupUser(@RequestBody SignupRequest signupRequest)
    {
        boolean isUserCreated = authService.createUser(signupRequest);
        if (isUserCreated)
        {
            return ResponseEntity.status(HttpStatus.CREATED).body("user created suc");

        }else {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("faild");
        }




    }
}
