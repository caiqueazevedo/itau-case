package com.todolist.api.usecases;

import com.todolist.api.entity.Task;
import com.todolist.api.repository.TaskRepository;
import com.todolist.api.usecases.mapper.TaskMapper;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TaskService {

    TaskMapper taskMapper;
    TaskRepository taskRepository;

    public Iterable<Task> findAll(){
        return taskRepository.findAll();
    }



    public void delete(Long id){
        taskRepository.deleteById(id);
    }



}
