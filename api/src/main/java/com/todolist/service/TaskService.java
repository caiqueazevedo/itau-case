package com.todolist.service;

import com.todolist.model.dto.TaskDTO;
import com.todolist.model.entity.Task;
import com.todolist.repository.TaskRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

@Service
@RequiredArgsConstructor
public class TaskService {

    private final TaskRepository taskRepository;

    public void create(String taskDescription) {
        Task task = new Task();
        task.setTaskDescription(taskDescription);
        taskRepository.save(task);
    }

    public List<TaskDTO> taskMappingList(Iterable<Task> tasks){
        List taskList = new ArrayList();
        Iterator var3 = tasks.iterator();

        while(var3.hasNext()) {
            Task task = (Task)var3.next();
            taskList.add(this.taskToTaskDTO(task));
        }

        return taskList;
    }

    public TaskDTO taskToTaskDTO(Task task){
        TaskDTO taskDTO = new TaskDTO();
        taskDTO.setTaskDescription(task.getTaskDescription());
        taskDTO.setId(task.getId());
        return taskDTO;
    }

    public Task taskDTOToTask(TaskDTO taskDTO){
        Task task = new Task();
        task.setTaskDescription(taskDTO.getTaskDescription());
        task.setId(taskDTO.getId());
        return task;
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
