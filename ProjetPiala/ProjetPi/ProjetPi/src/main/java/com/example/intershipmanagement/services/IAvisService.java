package com.example.intershipmanagement.services;

import com.example.intershipmanagement.entities.Avis;
import com.example.intershipmanagement.entities.Reservation;

import java.util.List;
import java.util.Map;

public interface IAvisService {
    public List<Avis> retrieveAllAvis();
    public Avis retrieveAvis (Long avis);
    public Avis addAvis (Avis a);
    public void removeAvis (Long avis);
    public Avis modifyAvis (Avis avis);
    Avis AvisAndAssign(Avis avis, long IdEvent);

    public Map<String, Integer> statAvisParEvenement();


    public int countMotsCles(String contenu, String[] motsCles);
    public String pretraiterContenu(String contenu);
    public String analyserTonalite(String contenu);
}
