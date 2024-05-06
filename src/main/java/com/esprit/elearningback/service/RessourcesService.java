package com.esprit.elearningback.service;

import com.esprit.elearningback.entity.Ressources;
import com.esprit.elearningback.entity.Subject;
import com.esprit.elearningback.repository.RessourcesRepository;
import com.esprit.elearningback.repository.SubjectRepository;
import com.esprit.elearningback.utils.FileUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@Component
public class RessourcesService {

    @Autowired
    private RessourcesRepository ressourcesRepository;

    @Autowired
    private SubjectRepository subjectRepository;

    public String uploadImage(MultipartFile file, Long subjectId) throws IOException {
        Subject subject = subjectRepository.findById(subjectId).orElse(null);
        if (subject == null) {
            // Handle the case when the subject with the given subjectId is not found
            return "Subject not found";
        }

        Ressources imageData = ressourcesRepository.save(Ressources.builder()
                .ressourceName(file.getOriginalFilename())
                .ressourceType(file.getContentType())
                .fileData(FileUtils.compressImage(file.getBytes()))
                .subject(subject) // Set the subject entity as the foreign key
                .build());

        if (imageData != null) {
            return "File uploaded successfully: " + file.getOriginalFilename();
        }

        return null;
    }

    public byte[] downloadImage(String ressourceName) {
        Ressources dbImageData = ressourcesRepository.findByRessourceName(ressourceName);
        if (dbImageData != null) {
            return FileUtils.decompressImage(dbImageData.getFileData());
        }
        return null;
    }

    public List<Ressources> getRessourcesBySubject(Long subjectId) {
        return ressourcesRepository.getRessourcesBySubject(subjectId);
    }
}