package com.orientation.projectorientation.control;
import lombok.AllArgsConstructor;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.bind.annotation.*;
import com.orientation.projectorientation.entity.Specialite;
import com.orientation.projectorientation.service.ISpecialiteService;



import java.util.List;

@RestController
@AllArgsConstructor
@RequestMapping("/specialite")
@CrossOrigin("*")
public class SpecialiteRestController {
    ISpecialiteService SpecialiteService;
    // http://localhost:8089/tpfoyer/Specialite/retrieve-all-Specialites
    @GetMapping("/retrieve-all-Specialites")
    public List<Specialite> getSpecialites() {
        List<Specialite> listSpecialites = SpecialiteService.retrieveAllSpecialites();
        return listSpecialites;
    }
    // http://localhost:8089/tpfoyer/Specialite/retrieve-Specialite/8
    @GetMapping("/retrieve-Specialite/{Specialite-id}")
    public Specialite retrieveSpecialite(@PathVariable("Specialite-id") Long chId) {
        Specialite Specialite = SpecialiteService.retrieveSpecialite(chId);
        return Specialite;
    }
    // http://localhost:8089/tpfoyer/Specialite/add-Specialite
    @CrossOrigin("*")
    @PostMapping("/add-Specialite")
    public Specialite addSpecialite(@RequestBody Specialite c) {
        Specialite Specialite = SpecialiteService.addSpecialite(c);
        return Specialite;
    }
    // http://localhost:8089/tpfoyer/Specialite/remove-Specialite/{Specialite-id}
    @DeleteMapping("/remove-Specialite/{Specialite-id}")
    public void removeSpecialite(@PathVariable("Specialite-id") Long chId) {
        SpecialiteService.removeSpecialite(chId);
    }
    // http://localhost:8089/tpfoyer/Specialite/modify-Specialite
    @CrossOrigin("*")
    @PutMapping("/modify-Specialite/")
    public Specialite modifySpecialite(@RequestBody Specialite c) {
        Specialite Specialite = SpecialiteService.modifySpecialite(c);
        return Specialite;
    }
}

