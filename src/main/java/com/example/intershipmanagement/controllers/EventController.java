package com.example.intershipmanagement.controllers;

import com.cloudinary.Cloudinary;
import com.example.intershipmanagement.entities.EvenementStatistics;
import com.example.intershipmanagement.entities.Event;
import com.example.intershipmanagement.entities.QRCodeGenerator;
import com.example.intershipmanagement.repositories.IEventRepository;
import com.example.intershipmanagement.services.EventService;
import com.google.zxing.WriterException;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.ResponseEntity;

import java.io.IOException;
import java.util.List;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;


@AllArgsConstructor
@Slf4j
@RestController
    @RequestMapping("api/evenement")
@CrossOrigin(origins = "*", allowedHeaders = "*")

public class EventController {
    EventService eventService;
    private QRCodeGenerator qrCodeGenerator;
    private IEventRepository evenementRepository;

    /* private static String UPLOADED_FOLDER = "./main/java/com/example/intershipmanagement/assets/";*/

    @Autowired
    private Cloudinary cloudinary;
    private static final String UPLOAD_DIR = "./main/java/com.example.intershipmanagement/assets";



    @PostMapping("/add")
    public Event addEvent(@RequestBody Event event){
        return eventService.addEvent(event);
    }


    @GetMapping("/qrcode")
    public ResponseEntity<byte[]> generateQRCode(@RequestParam("id") long id) {
        try {
            Event event = eventService.getEventById(id);
            String fileAttributes = getFileAttributesString(event);

            byte[] qrCodeImage = qrCodeGenerator.generateQRCodeImage(fileAttributes);

            HttpHeaders headers = new HttpHeaders();
            headers.setContentType(MediaType.IMAGE_PNG);

            return ResponseEntity.ok().headers(headers).body(qrCodeImage);
        } catch (IOException | WriterException e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    private String getFileAttributesString(Event event) {
        StringBuilder sb = new StringBuilder();
        sb.append("Event ID: ").append(event.getId()).append("\n");
        sb.append("Event Nom: ").append(event.getNom()).append("\n");
        sb.append("Event Lieu: ").append(event.getLieu()).append("\n");
        sb.append("Event Type: ").append(event.getType()).append("\n");
        sb.append("Date début: ").append(event.getDate_deb()).append("\n");
        sb.append("Date fin: ").append(event.getDate_fin()).append("\n");
        int reservationsCount = event.getReservations().size(); // Utiliser la méthode size() pour obtenir le nombre de réservations
        sb.append("Reservations Count: ").append(reservationsCount).append("\n");

        return sb.toString();
    }

    // Order 2
    @GetMapping("/getAll")
    public List<Event> getAllEvent(){
        System.out.println("im here");
        for(Event e:eventService.getAllEvent())
        {
            System.out.println("reservation"+ e.getReservations());
        }
        return eventService.getAllEvent();
    }

    // Order 3
    @GetMapping("/get/{idEvent}")
    public Event getEvent(@PathVariable long idEvent){
        return eventService.getEventById(idEvent);
    }

    // Order 4
    @DeleteMapping("/delete/{idEvent}")
    public void deleteEvent(@PathVariable("idEvent") long idTicket){
        eventService.deleteEvent(idTicket);
    }

    // Order 5
    @PutMapping("/update")
    public Event updateEvent(@RequestBody Event event){
        return eventService.updateEvent(event);
    }

   ///upload Image///
   /*@PostMapping("/upload")
   public String singleFileUpload(@RequestParam("file") MultipartFile file, RedirectAttributes redirectAttributes) {

       if (file.isEmpty()) {
           redirectAttributes.addFlashAttribute("message", "Veuillez sélectionner un fichier à télécharger");
           return "redirect:uploadStatus";
       }

       try {
           byte[] bytes = file.getBytes();
           Path path = Paths.get(UPLOADED_FOLDER + file.getOriginalFilename());
           Files.write(path, bytes);

           redirectAttributes.addFlashAttribute("message",
                   "Vous avez réussi à télécharger '" + file.getOriginalFilename() + "'");

       } catch (IOException e) {
           e.printStackTrace();
       }

       return "redirect:/uploadStatus";
   }

    @RequestMapping("/uploadStatus")
    public String uploadStatus() {
        return "uploadStatus";
    }*/


    @GetMapping("/statistics")
    public ResponseEntity<List<EvenementStatistics>> getDataObjectStatistics() {
        List<EvenementStatistics> statistics = eventService.getEvenementStatistics();

        return ResponseEntity.ok(statistics);
    }



    @GetMapping("/eventsByUser/{userId}")
    public ResponseEntity<List<Event>> getEventsByUserOrderByParticipation(@PathVariable("userId") Long userId) {
        List<Event> events = eventService.getEventsByUserOrderByParticipation(userId);

        return ResponseEntity.ok(events);
    }
}







