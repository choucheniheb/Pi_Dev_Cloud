package tn.esprit.user.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import tn.esprit.user.entity.Permission;

@Repository

public interface PermissionRepository extends JpaRepository<Permission,Long>{
}
