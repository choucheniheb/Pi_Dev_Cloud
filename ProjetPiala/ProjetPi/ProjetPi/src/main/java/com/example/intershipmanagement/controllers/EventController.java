package com.example.intershipmanagement.controllers;

import com.cloudinary.Cloudinary;
import com.cloudinary.utils.ObjectUtils;
import com.example.intershipmanagement.entities.EvenementStatistics;
import com.example.intershipmanagement.entities.Event;
import com.example.intershipmanagement.repositories.IEventRepository;
import com.example.intershipmanagement.services.EventService;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.hibernate.sql.results.graph.embeddable.EmbeddableLoadingLogger_$logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.http.ResponseEntity;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;
import java.util.Map;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;


@AllArgsConstructor
@Slf4j
@RestController
    @RequestMapping("api/evenement")
@CrossOrigin(origins = "*", allowedHeaders = "*")

public class EventController {
    EventService eventService;
    private IEventRepository evenementRepository;

    /* private static String UPLOADED_FOLDER = "./main/java/com/example/intershipmanagement/assets/";*/

    @Autowired
    private Cloudinary cloudinary;
    private static final String UPLOAD_DIR = "./main/java/com.example.intershipmanagement/assets";



    @PostMapping("/add")
    public Event addEvent(@RequestBody Event event){
        return eventService.addEvent(event);
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







