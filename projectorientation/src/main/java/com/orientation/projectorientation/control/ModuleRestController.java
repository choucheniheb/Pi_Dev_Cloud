package com.orientation.projectorientation.control;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;
import com.orientation.projectorientation.entity.Module;
import com.orientation.projectorientation.service.IModuleService;



import java.util.List;

@RestController
@AllArgsConstructor
@RequestMapping("/module")
@CrossOrigin("*")
public class ModuleRestController {
    IModuleService ModuleService;
    // http://localhost:8089/tpfoyer/Module/retrieve-all-Modules
    @GetMapping("/retrieve-all-Modules")
    public List<Module> getModules() {
        List<Module> listModules = ModuleService.retrieveAllModules();
        return listModules;
    }
    // http://localhost:8089/tpfoyer/Module/retrieve-Module/8
    @GetMapping("/retrieve-Module/{Module-id}")
    public Module retrieveModule(@PathVariable("Module-id") Long chId) {
        Module Module = ModuleService.retrieveModule(chId);
        return Module;
    }
    // http://localhost:8089/tpfoyer/Module/add-Module
    @PostMapping("/add-Module")
    public Module addModule(@RequestBody Module c) {
        Module Module = ModuleService.addModule(c);
        return Module;
    }
    // http://localhost:8089/tpfoyer/Module/remove-Module/{Module-id}
    @DeleteMapping("/remove-Module/{Module-id}")
    public void removeModule(@PathVariable("Module-id") Long chId) {
        ModuleService.removeModule(chId);
    }
    // http://localhost:8089/tpfoyer/Module/modify-Module
    @PutMapping("/modify-Module")
    public Module modifyModule(@RequestBody Module c) {
        Module Module = ModuleService.modifyModule(c);
        return Module;
    }
}

