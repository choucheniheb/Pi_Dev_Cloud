package tn.esprit.user.service;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import tn.esprit.user.entity.Role;
import tn.esprit.user.repository.RoleRepository;

import java.util.List;

@Service
@AllArgsConstructor
public class RoleServiceImpl implements IRoleService{
    RoleRepository roleRepository;

    public List<Role> retrieveAllRoles() {
        return roleRepository.findAll();
    }

    public Role retrieveRole(Long idRole) {
        return roleRepository.findById(idRole).get();
    }

    public Role addRole(Role Role) {
        return roleRepository.save(Role);
    }

    public void removeRole(Long idRole) {
        roleRepository.deleteById(idRole);
    }

    public Role modifyRole(Role Role) {
        return roleRepository.save(Role);
    }
}
