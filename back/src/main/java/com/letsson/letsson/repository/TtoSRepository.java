package com.letsson.letsson.repository;

import com.letsson.letsson.model.TtoSMatching;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TtoSRepository extends JpaRepository<TtoSMatching,Long> {
}
