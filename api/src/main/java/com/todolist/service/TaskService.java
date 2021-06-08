package com.todolist.service;

import com.todolist.model.entity.Task;
import com.todolist.repository.TaskRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class TaskService {

    private final TaskRepository taskRepository;

    public void create(Task task) {
        taskRepository.save(task);
    }

    public Task findById(String id) {
        return taskRepository.findById(id).orElseThrow(RuntimeException::new);
    }

    public Iterable<Task> findAllTasks() {
        return taskRepository.findAll();
    }

    public Task updateById(String id, Task updatedTask) {
        Task task = taskRepository.findById(id).orElseThrow(RuntimeException::new);
        task.setTaskDescription(updatedTask.getTaskDescription());
        return taskRepository.save(task);
    }

    public void delete(String id) {
        taskRepository.deleteById(id);
    }
}
