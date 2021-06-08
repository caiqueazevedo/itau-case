package com.todolist.repository;

import com.todolist.model.entity.Task;
import org.socialsignin.spring.data.dynamodb.repository.EnableScan;
import org.springframework.data.repository.CrudRepository;

@EnableScan
public interface TaskRepository extends CrudRepository<Task, String> {
}
