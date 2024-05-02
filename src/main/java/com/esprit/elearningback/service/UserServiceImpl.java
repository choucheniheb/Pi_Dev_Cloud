package com.esprit.elearningback.service;

import com.esprit.elearningback.entity.User;
import com.esprit.elearningback.repository.UserRepository;
import lombok.AllArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class UserServiceImpl implements IUserService {
    UserRepository userRepository;
    private final PasswordEncoder passwordEncoder ;
    public List<User> retrieveAllUsers() {
        return userRepository.findAll();
    }

    public User retrieveUser(Long idUser) {
        return userRepository.findById(idUser).get();
    }

    @Override
    public Optional<User> findByUseremail(String useremail) {
        return userRepository.findByUseremail(useremail);
    }


    public User addUser(User User) {
       String hashPasword = passwordEncoder.encode(User.getPassword());
       User.setPassword(hashPasword);

        return userRepository.save(User);
    }

    public void removeUser(Long idUser) {
        userRepository.deleteById(idUser);
    }

    public User modifyUser(User User) {
        return userRepository.save(User);
    }


    public User modifyEtatUser(Long userId,boolean etat) {
        User user = userRepository.findById(userId).get();
        user.setUseretat(etat);
        return userRepository.save(user);
    }

}