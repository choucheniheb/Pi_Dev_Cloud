package com.example.intershipmanagement.services;

import com.example.intershipmanagement.entities.EvenementStatistics;
import com.example.intershipmanagement.entities.Event;
import com.example.intershipmanagement.repositories.IEventRepository;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.experimental.FieldDefaults;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.Comparator;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
@Slf4j
@FieldDefaults(level = AccessLevel.PRIVATE)
public class EventService implements IEventService {
    IEventRepository iEventRepository;
    //private final Path fileStorageLocation;
    @Override
    public Event addEvent(Event event) {
        return iEventRepository.save(event);
    }

    @Override
    public List<Event> getAllEvent() {
        return iEventRepository.findAll();
    }

    @Override
    public Event getEventById(long idEvent) {
        return iEventRepository.findById(idEvent).get();
    }



    @Override
    public void deleteEvent(long idEvent) {
        iEventRepository.deleteById(idEvent);

    }

    @Override
    public Event updateEvent(Event event) {
        return iEventRepository.save(event);
    }



    public Event findById(Long id) {
        return iEventRepository.findById(id).orElseThrow(() -> new RuntimeException("Événement non trouvé"));
    }


    public List<EvenementStatistics> getEvenementStatistics() {
        List<Event> events = iEventRepository.findAll();

        return events.stream()
                .map(dataObject -> new EvenementStatistics(dataObject.getNom(), dataObject.getReservations().size()))
                .collect(Collectors.toList());
    }



    @Override
    public List<Event> getEventsByUserOrderByParticipation(Long userId) {
        return iEventRepository.findEventsByUserOrderByParticipation(userId);

    }
}



