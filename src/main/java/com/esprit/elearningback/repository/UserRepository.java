package com.esprit.elearningback.repository;

import com.esprit.elearningback.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository

public interface UserRepository extends JpaRepository<User,Long>{
    boolean existsByUseremail(String useremail);

    Optional<User> findByUseremail(String useremail);

    

}
