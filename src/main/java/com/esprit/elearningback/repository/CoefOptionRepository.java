package com.esprit.elearningback.repository;

import com.esprit.elearningback.entity.CoefOption;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CoefOptionRepository extends JpaRepository<CoefOption, Long> {
}
