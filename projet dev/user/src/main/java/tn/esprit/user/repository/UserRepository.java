package tn.esprit.user.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import tn.esprit.user.entity.User;


import java.util.List;
import java.util.Optional;

@Repository

public interface UserRepository extends JpaRepository<User,Long>{
    boolean existsByUseremail(String useremail);

    Optional<User> findByUseremail(String useremail);
    

}
