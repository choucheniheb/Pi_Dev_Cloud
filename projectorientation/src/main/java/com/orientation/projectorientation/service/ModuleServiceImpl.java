package com.orientation.projectorientation.service;


import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import com.orientation.projectorientation.entity.Module;
import com.orientation.projectorientation.repository.ModuleRepository;

import java.util.List;
@Service
@AllArgsConstructor
public class ModuleServiceImpl implements IModuleService {
    ModuleRepository ModuleRepository;
    public List<Module> retrieveAllModules() {
        return ModuleRepository.findAll();
    }
    public Module retrieveModule(Long ModuleId) {
        return ModuleRepository.findById(ModuleId).get();
    }
    public Module addModule(Module c) {
        return ModuleRepository.save(c);
    }
    public void removeModule(Long ModuleId) {
        ModuleRepository.deleteById(ModuleId);
    }
    public Module modifyModule(Module module) {
        return ModuleRepository.save(module);
    }
}

