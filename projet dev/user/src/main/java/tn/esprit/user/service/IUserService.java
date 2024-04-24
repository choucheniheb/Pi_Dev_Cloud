package tn.esprit.user.service;

import tn.esprit.user.entity.User;

import java.util.List;
import java.util.Optional;

public interface IUserService {
    public List<User> retrieveAllUsers();
    public User  retrieveUser(Long idUser);

    Optional<User> findByUseremail(String useremail);

    public User addUser(User u);
    public void removeUser(Long idUser);
    public User  modifyUser(User  user);


}
