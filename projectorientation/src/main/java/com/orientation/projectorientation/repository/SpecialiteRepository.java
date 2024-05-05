package com.orientation.projectorientation.repository;
import com.orientation.projectorientation.entity.Specialite;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;


@Repository
public interface SpecialiteRepository extends JpaRepository<Specialite, Long> {



}
