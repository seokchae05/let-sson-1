package com.letsson.letsson.repository;


import com.letsson.letsson.model.TeacherDao;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TeacherRepository extends JpaRepository<TeacherDao,Long> {
    TeacherDao findByTel(String tel);
}
