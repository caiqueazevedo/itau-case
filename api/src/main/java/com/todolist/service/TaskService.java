package com.todolist.service;

import com.todolist.model.entity.Task;
import com.todolist.repository.TaskRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class TaskService {

    private final TaskRepository taskRepository;

    public void create(String taskDescription) {
        Task task = new Task();
        task.setTaskDescription(taskDescription);
        taskRepository.save(task);
    }

    public Task findById(String id) {
        return taskRepository.findById(id).orElseThrow(RuntimeException::new);
    }

    public Iterable<Task> findAllTasks() {
        return taskRepository.findAll();
    }

    public Task updateById(Task updatedTask) {
        return taskRepository.save(updatedTask);
    }

    public void delete(String id) {
        taskRepository.deleteById(id);
    }
}
