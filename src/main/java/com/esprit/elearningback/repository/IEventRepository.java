package com.esprit.elearningback.repository;


import com.esprit.elearningback.entity.Event;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface IEventRepository extends JpaRepository<Event,Long> {

    @Query("SELECT e FROM Event e " +
            "LEFT JOIN e.reservations r " +
            "LEFT JOIN r.userr u " +
            "WHERE u.id = :userId OR u.id IS NULL " +
            "GROUP BY e.id, e.type " +
            "ORDER BY SUM(CASE " +
            "           WHEN u.id = :userId THEN 1 " +
            "           ELSE 0 " +
            "       END) DESC, e.type")
    List<Event> findEventsByUserOrderByParticipation(@Param("userId") Long userId);

}
