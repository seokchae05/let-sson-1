package com.letsson.letsson.repository;

import com.letsson.letsson.model.Student;
import com.letsson.letsson.model.Teacher;
import com.letsson.letsson.model.TtoSMatching;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TtoSRepository extends JpaRepository<TtoSMatching,Long>
{
    List<TtoSMatching> findBySender(Teacher teacher);

    List<TtoSMatching> findByReceiver(Student student);

    TtoSMatching findBySenderAndReceiver(Teacher teacher,Student student);
}
