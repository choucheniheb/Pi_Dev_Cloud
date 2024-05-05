package com.orientation.projectorientation.service;
import com.orientation.projectorientation.entity.Specialite;

import java.util.List;

public interface ISpecialiteService {

    public List<Specialite> retrieveAllSpecialites();
    public Specialite retrieveSpecialite(Long idSpecialite);
    public Specialite addSpecialite(Specialite c);
    public void removeSpecialite(Long idSpecialite);
    public Specialite modifySpecialite(Specialite specialite);

    public Specialite updatePdfFile(Specialite specialite, String filePath);
}