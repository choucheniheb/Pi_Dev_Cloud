package com.orientation.projectorientation.service;


import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import com.orientation.projectorientation.entity.Specialite;
import com.orientation.projectorientation.repository.SpecialiteRepository;

import java.util.List;
@Service
@AllArgsConstructor
public class SpecialiteServiceImpl implements ISpecialiteService {
    SpecialiteRepository SpecialiteRepository;
    public List<Specialite> retrieveAllSpecialites() {
        return SpecialiteRepository.findAll();
    }
    public Specialite retrieveSpecialite(Long SpecialiteId) {
        return SpecialiteRepository.findById(SpecialiteId).get();
    }
    public Specialite addSpecialite(Specialite c) {
        return SpecialiteRepository.save(c);
    }
    public void removeSpecialite(Long SpecialiteId) {
        SpecialiteRepository.deleteById(SpecialiteId);
    }
    public Specialite modifySpecialite(Specialite specialite) {
        return SpecialiteRepository.save(specialite);
    }

    public Specialite updatePdfFile(Specialite specialite, String filePath) {
        specialite.setPdfFile(filePath);
        return SpecialiteRepository.save(specialite);
    }
}

