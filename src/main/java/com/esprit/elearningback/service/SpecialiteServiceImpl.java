package com.esprit.elearningback.service;


import com.esprit.elearningback.entity.CoefOption;
import com.esprit.elearningback.entity.Specialite;
import com.esprit.elearningback.entity.UniteEnseignement;
import com.esprit.elearningback.repository.CoefOptionRepository;
import com.esprit.elearningback.repository.SpecialiteRepository;
import com.esprit.elearningback.repository.UniteEnseignementRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Set;

@Service
@AllArgsConstructor
public class SpecialiteServiceImpl implements ISpecialiteService {
    SpecialiteRepository specialiteRepository;
    UniteEnseignementRepository ueRepository;
    CoefOptionRepository coefOptionRepository;
    public List<Specialite> retrieveAllSpecialites() {
        return specialiteRepository.findAll();
    }
    public Specialite retrieveSpecialite(Long SpecialiteId) {
        return specialiteRepository.findById(SpecialiteId).get();
    }
        public Specialite addSpecialite(Specialite c) {
            Set<CoefOption> coefOptions = c.getCoefOptions();
            for (CoefOption coefOption : coefOptions) {
                UniteEnseignement ue= ueRepository.findById(coefOption.getUniteEnseignement().getId()).orElse(null);
                ue.getCoefOptions().add(coefOption);
                coefOption.setUniteEnseignement(ue);
                coefOption.setSpecialite(c);
                c.getCoefOptions().add(coefOption);
            }
            return specialiteRepository.save(c);
        }
    public void removeSpecialite(Long SpecialiteId) {
        specialiteRepository.deleteById(SpecialiteId);
    }
    public Specialite modifySpecialite(Specialite specialite) {
        for (CoefOption coefOption : specialite.getCoefOptions()) {
            coefOption.setSpecialite(specialite);
        }
        return specialiteRepository.save(specialite);
    }

    public Specialite updatePdfFile(Specialite specialite, String filePath) {
        specialite.setPdfFile(filePath);
        return specialiteRepository.save(specialite);
    }
}

