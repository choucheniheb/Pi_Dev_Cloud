package com.example.intershipmanagement.controllers;


import com.example.intershipmanagement.entities.Avis;
import com.example.intershipmanagement.entities.Reservation;
import com.example.intershipmanagement.repositories.AvisRepo;
import com.example.intershipmanagement.services.IAvisService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@AllArgsConstructor
@RequestMapping("/Avis")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class AvisController {

    IAvisService avisService;
    AvisRepo  avisRepo;


    @GetMapping("/retrieve-all-avis")
    public List<Avis> getAvis(){
        List<Avis> listAviss = avisService.retrieveAllAvis();
        return listAviss;
    }
    @GetMapping("/retrieve-avis/{idAvis}")
    public Avis retrieveAvis(@PathVariable("idAvis") Long avisId) {
        Avis avis = avisService.retrieveAvis(avisId);
        return avis;
    }


    @PostMapping("/add-avis")
    public Avis addAvis(@RequestBody Avis e) {
        Avis avis = avisService.addAvis(e);
        return avis;
    }

    @PostMapping("/assign/{idEvent}")
    public Avis AvisAndAssign(@RequestBody Avis avis, @PathVariable("idEvent") long idEvent) {
        return avisService.AvisAndAssign(avis, idEvent);
    }

    @DeleteMapping("/remove-avis/{avis-id}")
    public void removeChambre(@PathVariable("avis-id") Long avisId) {
        avisService.removeAvis(avisId);
    }

    @PutMapping("/modify-avis")
    public Avis modifyavis(@RequestBody Avis e) {
        Avis avis  = avisService.modifyAvis(e);
        return avis;

    }


    @GetMapping("/statEventparAvis")
    public Map<String, Integer> statReservationParEvenement(){
        return avisService.statAvisParEvenement();
    }





    @PostMapping("/analyse-avis/{avis-id}")
    public ResponseEntity<String> analyseAvis(@PathVariable("avis-id") Long avisId){
        Avis avis =avisRepo.findById(avisId).get();
        if (avis == null || avis.getContenu() == null || avis.getContenu().isEmpty()) {
            return ResponseEntity.badRequest().body("Le contenu de l'avis est vide.");
        }

        String tonalite = avisService.analyserTonalite(avis.getContenu());
        return ResponseEntity.ok(tonalite);
    }




}