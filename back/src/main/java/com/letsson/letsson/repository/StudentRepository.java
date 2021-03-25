package com.letsson.letsson.repository;

import com.letsson.letsson.model.Student;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StudentRepository extends JpaRepository<Student,Long> {
    Student findByTel(String tel);

    Student findByTelAndName(String tel, String name);
    Student findByEmailAndName(String email,String name);
}
//jpa 이용해서 데이터 베이스에 저장된 정보에 접근하능 하게 만들어 준다.