package com.esprit.elearningback.controller;

import com.esprit.elearningback.entity.Ressources;
import com.esprit.elearningback.service.RessourcesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/api/v1/ressources")
@CrossOrigin(origins = "*")
public class RessourcesController {

    @Autowired
    private RessourcesService service;

    @PostMapping("/uploadimage")
    @Transactional
    public ResponseEntity<?> uploadImage(
            @RequestParam("image") MultipartFile file,
            @RequestParam("subjectId") long subjectId) throws IOException {
        String uploadImage = service.uploadImage(file, subjectId);
        return ResponseEntity.status(HttpStatus.OK)
                .body(uploadImage);
    }

    @GetMapping("/getimagebyname/{fileName}")
    @Transactional
    public ResponseEntity<?> downloadImage(@PathVariable String fileName) {
        byte[] imageData = service.downloadImage(fileName);
        if (imageData != null) {
            return ResponseEntity.status(HttpStatus.OK)
                    .contentType(MediaType.IMAGE_PNG)
                    .body(imageData);
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND)
                    .body("Image not found");
        }
    }

    @GetMapping("/getressourcesbysubject/{subjectId}")
    @Transactional
    public ResponseEntity<List<Ressources>> getRessourcesBySubject(@PathVariable long subjectId) {
        List<Ressources> ressourcesList = service.getRessourcesBySubject(subjectId);
        return ResponseEntity.status(HttpStatus.OK)
                .body(ressourcesList);
    }
}