package com.orientation.projectorientation.control;

import com.orientation.projectorientation.entity.Specialite;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import com.orientation.projectorientation.repository.SpecialiteRepository;
import com.orientation.projectorientation.service.SpecialiteServiceImpl;

@RestController
@RequestMapping("/upload")
@CrossOrigin("*")
public class UploadController {

    @Autowired
    private SpecialiteServiceImpl specialiteService;

    @Autowired // Autowire SpecialiteRepository
    private SpecialiteRepository specialiteRepository;

    private static final String UPLOAD_DIR = "uploads/pdf/";

    @PostMapping("/pdf")
    public String uploadPDFFile(@RequestParam("file") MultipartFile file, @RequestParam("specialiteId") Long specialiteId) {
        if (file.isEmpty()) {
            return "Failed to upload PDF file: File is empty.";
        }

        try {
            // Save the PDF file to a specific location
            byte[] bytes = file.getBytes();
            Path path = Paths.get(UPLOAD_DIR + file.getOriginalFilename());
            Files.write(path, bytes);

            // Retrieve the Specialite entity from the database
            Specialite specialite = specialiteRepository.findById(specialiteId)
                    .orElseThrow(() -> new RuntimeException("Specialite not found"));

            // Update the pdfFile field in the Specialite entity with the file path
            specialite = specialiteService.updatePdfFile(specialite, path.toString());

            return "PDF file uploaded successfully!";
        } catch (IOException e) {
            e.printStackTrace();
            return "Failed to upload PDF file: " + e.getMessage();
        }
    }
}
