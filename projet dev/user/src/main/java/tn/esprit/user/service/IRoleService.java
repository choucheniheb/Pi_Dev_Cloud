package tn.esprit.user.service;

import tn.esprit.user.entity.Role;

import java.util.List;

public interface IRoleService {
    public List<Role> retrieveAllRoles();
    public Role retrieveRole(Long idRole);
    public Role addRole(Role r);
    public void removeRole(Long idRole);
    public Role modifyRole(Role role);
}
