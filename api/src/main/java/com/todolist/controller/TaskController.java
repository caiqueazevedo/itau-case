package com.todolist.controller;

import com.todolist.model.dto.TaskDTO;
import com.todolist.model.entity.Task;
import com.todolist.service.TaskService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static org.springframework.http.HttpStatus.CREATED;
import static org.springframework.http.HttpStatus.OK;
import static org.springframework.http.ResponseEntity.status;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/tasks")
public class TaskController {

    private final TaskService service;

    @PostMapping
    public ResponseEntity<Task> newTask(@RequestBody TaskDTO taskDTO) {
        service.create(taskDTO);
        return status(CREATED).build();
    }

    @GetMapping
    public ResponseEntity<List<TaskDTO>> findAll() {
        var response = service.findAllTasks();
        return status(OK).body(response);
    }

    @GetMapping("/{id}")
    public ResponseEntity<TaskDTO> findById(@PathVariable String id) {
        var response = service.findById(id);
        return status(OK).body(response);
    }
}
