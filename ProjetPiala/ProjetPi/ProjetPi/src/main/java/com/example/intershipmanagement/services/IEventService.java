package com.example.intershipmanagement.services;

import com.example.intershipmanagement.entities.Event;

import java.util.List;

public interface IEventService {
    Event addEvent(Event event);
    List<Event> getAllEvent();
    Event getEventById(long idEvent);
    void deleteEvent(long idEvent);
    Event updateEvent(Event event);
    public List<Event> getEventsByUserOrderByParticipation(Long userId);

}
