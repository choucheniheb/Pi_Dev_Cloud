package com.orientation.projectorientation.service;
import com.orientation.projectorientation.entity.Module;

import java.util.List;

public interface IModuleService {

    public List<Module> retrieveAllModules();
    public Module retrieveModule(Long idModule);
    public Module addModule(Module c);
    public void removeModule(Long idModule);
    public Module modifyModule(Module Module);
}