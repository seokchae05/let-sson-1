package com.letsson.letsson.repository;

import com.letsson.letsson.model.Matching;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MatchingRepository extends JpaRepository<Matching,Long> {
    Matching findById(String id);
    Matching findBySender(String sender);
    Matching findByReceiver(String receiver);
}
