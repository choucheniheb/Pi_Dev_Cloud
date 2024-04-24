package tn.esprit.user.service;

import tn.esprit.user.entity.Permission;

import java.util.List;

public interface IPermissionService {
    public List<Permission> retrieveAllPermissions();
    public Permission retrievePermission(Long idPermission);
    public Permission addPermission(Permission c);
    public void removePermission(Long idPermission);
    public Permission modifyPermission(Permission permission);
}
