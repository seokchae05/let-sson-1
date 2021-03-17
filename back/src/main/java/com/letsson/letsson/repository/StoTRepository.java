package com.letsson.letsson.repository;

import com.letsson.letsson.model.StoTMatching;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StoTRepository extends JpaRepository<StoTMatching,Long> {
}
