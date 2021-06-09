package com.todolist.controller;

import com.todolist.mapper.TaskMapper;
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
public class TaskController {

    private final TaskService service;
    private final TaskMapper taskMapper;

    @PostMapping
    public ResponseEntity<Task> save(@RequestBody TaskDTO taskDTO) {
        var response = taskMapper.taskDTOToTask(taskDTO);
        service.create(response);
        return status(CREATED).build();
    }

    @GetMapping
    public ResponseEntity<List<TaskDTO>> index() {
        var response = service.findAllTasks();
        var tasks = taskMapper.taskMappingList(response);
        return status(OK).body(tasks);
    }

    @GetMapping("/{id}")
    public ResponseEntity<TaskDTO> show(@PathVariable String id) {
        var response = service.findById(id);
        var task = taskMapper.taskToTaskDTO(response);
        return status(OK).body(task);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Task> update(@PathVariable String id, @RequestBody TaskDTO taskDTO) {
        var task = taskMapper.taskDTOToTask(taskDTO);
        var response = service.updateById(id, task);
        return status(OK).body(response);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Task> delete(@PathVariable String id){
        service.delete(id);
        return status(NO_CONTENT).build();
    }
}
