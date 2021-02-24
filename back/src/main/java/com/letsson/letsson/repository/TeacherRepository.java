package com.letsson.letsson.repository;


import com.letsson.letsson.model.TeacherDao;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface TeacherRepository extends JpaRepository<TeacherDao,Long> {
    Optional<TeacherDao> findByTel(String tel);
}
