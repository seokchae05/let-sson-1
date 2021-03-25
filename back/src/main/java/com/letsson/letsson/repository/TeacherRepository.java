package com.letsson.letsson.repository;


import com.letsson.letsson.model.Student;
import com.letsson.letsson.model.Teacher;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TeacherRepository extends JpaRepository<Teacher,Long> {
    Teacher findByTel(String tel);

    Teacher findByTelAndName(String tel, String name);
    Teacher findByEmailAndName(String email,String name);

}
