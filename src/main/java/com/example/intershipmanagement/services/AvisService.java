package com.example.intershipmanagement.services;

import com.example.intershipmanagement.entities.Avis;
import com.example.intershipmanagement.entities.Event;

import com.example.intershipmanagement.entities.Reservation;
import com.example.intershipmanagement.repositories.AvisRepo;
import com.example.intershipmanagement.repositories.IEventRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.*;



@Service
@AllArgsConstructor
public class AvisService implements IAvisService{
    IEventRepository eventRepository;
    AvisRepo avisRepo;

    @Override
    public List<Avis> retrieveAllAvis() {
        return avisRepo.findAll();
    }

    @Override
    public Avis retrieveAvis(Long avisId) {
        return avisRepo.findById(avisId).get();
    }

    @Override
    public Avis addAvis(Avis a) {


        return avisRepo.save(a);
    }

    @Override
    public void removeAvis(Long avisId) {
        avisRepo.deleteById(avisId);
    }

    @Override
    public Avis modifyAvis(Avis avis) {
        return avisRepo.save(avis);
    }

    @Override
    public Avis AvisAndAssign(Avis avis, long IdEvent) {
        Event event = eventRepository.findById(IdEvent).get();
        avis.setEvent(event);
        return avisRepo.save(avis);
    }

    @Override
    public Map<String, Integer> statAvisParEvenement() {
        Map<String, Integer> statResult = new HashMap<>();
        List<Event> evenements = eventRepository.findAll();

        for (Event evenement : evenements) {
            // Assuming 'reservations' is properly populated in the Evenement entity
            int avisCount = evenement.getAvis() != null ? evenement.getAvis().size() : 0;
            statResult.put(evenement.getNom(), avisCount);
        }

        return statResult;
    }

/*******************************   aviiisss anaalysseee   ****************************/



    // Méthode pour analyser la tonalité d'un commentaire
    public String analyserTonalite(String contenu) {
        // Prétraitement du contenu
        String contenuNettoye = pretraiterContenu(contenu);

        // Liste de mots-clés pour la tonalité positive, négative et neutre
        String[] motsClesPositifs = {"bien", "excellent", "merveilleux", "satisfait", "heureux"};
        String[] motsClesNegatifs = {"mauvais", "décevant", "problème", "déplorable", "insatisfait"};
        String[] motsClesNeutres = {"normal", "moyen", "correct", "acceptable"};

        // Analyse de la tonalité du contenu en fonction des mots-clés
        int countPositifs = countMotsCles(contenuNettoye, motsClesPositifs);
        int countNegatifs = countMotsCles(contenuNettoye, motsClesNegatifs);
        int countNeutres = countMotsCles(contenuNettoye, motsClesNeutres);

        // Détermination de la tonalité en fonction du nombre de mots-clés détectés
        if (countPositifs > countNegatifs && countPositifs > countNeutres) {
            return "positif";
        } else if (countNegatifs > countPositifs && countNegatifs > countNeutres) {
            return "négatif";
        } else {
            return "neutre";
        }
    }

    // Méthode de prétraitement du contenu
    public String pretraiterContenu(String contenu) {
        // Supprimer la ponctuation et mettre en minuscules
        String contenuNettoye = contenu.replaceAll("[^a-zA-Z0-9\\s]", "").toLowerCase();

        // Supprimer les mots vides (stop words)
        String[] motsVides = {"le", "l'","la", "les", "de", "du", "des", "un", "une", "dans", "sur", "avec", "par", "pour", "qui", "que", "ce", "cette", "ces", "ceux", "mais"};
        Set<String> setMotsVides = new HashSet<>(Arrays.asList(motsVides));
        String[] mots = contenuNettoye.split("\\s+");
        StringBuilder contenuFinal = new StringBuilder();
        for (String mot : mots) {
            if (!setMotsVides.contains(mot)) {
                contenuFinal.append(mot).append(" ");
            }
        }
        contenuNettoye = contenuFinal.toString().trim();

        // Lemmatisation des mots
////        Document doc = new Document(contenuNettoye);
////        StringBuilder contenuLemm = new StringBuilder();
////        for (Sentence sent : doc.sentences()) {
////            for (String lemma : sent.lemmas()) {
////                contenuLemm.append(lemma).append(" ");
////            }
////        }
//        contenuNettoye = contenuLemm.toString().trim();

        return contenuNettoye;
    }

    // Méthode pour compter le nombre de mots-clés dans un texte
    public int countMotsCles(String contenu, String[] motsCles) {
        int count = 0;
        for (String motCle : motsCles) {
            if (contenu.contains(motCle)) {
                count++;
            }
        }
        return count;
    }













}