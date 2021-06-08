package com.todolist.service;

import com.todolist.mapper.TaskMapper;
import com.todolist.model.dto.TaskDTO;
import com.todolist.model.entity.Task;
import com.todolist.repository.TaskRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class TaskService {

    private final TaskRepository taskRepository;
    private final TaskMapper taskMapper;

    public List<TaskDTO> findAllTasks() {
        Iterable<Task> task = taskRepository.findAll();
        return taskMapper.taskMappingList(task);
    }

    public TaskDTO findById(String id) {
        Task task = taskRepository.findById(id).orElseThrow(RuntimeException::new);
        return taskMapper.taskToTaskDTO(task);
    }

    public void create(TaskDTO taskDTO) {
        Task task = taskMapper.taskDTOToTask(taskDTO);
        taskRepository.save(task);
    }

    public void delete(String id) {
        taskRepository.deleteById(id);
    }
}
