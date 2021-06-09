package com.todolist.controller;

import com.todolist.model.dto.TaskDTO;
import com.todolist.model.entity.Task;
import com.todolist.service.TaskService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static org.springframework.http.HttpStatus.*;
import static org.springframework.http.ResponseEntity.status;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/tasks")
@CrossOrigin("*")
public class TaskController {

    private final TaskService service;


    @PostMapping
    public ResponseEntity<Task> save(@RequestParam String taskDescription) {
        service.create(taskDescription);
        return status(CREATED).build();
    }

    @GetMapping
    public ResponseEntity<List<TaskDTO>> index() {
        var response = service.findAllTasks();
        var tasks = service.taskMappingList(response);
        return status(OK).body(tasks);
    }

    @GetMapping("/{id}")
    public ResponseEntity<TaskDTO> show(@PathVariable String id) {
        var response = service.findById(id);
        var task = service.taskToTaskDTO(response);
        return status(OK).body(task);
    }

    @PutMapping
    public ResponseEntity<Task> update(@RequestBody TaskDTO taskDTO) {
        var task = service.taskDTOToTask(taskDTO);
        var response = service.updateById(task);
        return status(OK).body(response);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Task> delete(@PathVariable String id){
        service.delete(id);
        return status(NO_CONTENT).build();
    }
}
