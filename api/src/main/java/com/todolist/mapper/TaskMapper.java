package com.todolist.mapper;

import com.todolist.model.dto.TaskDTO;
import com.todolist.model.entity.Task;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface TaskMapper {

    TaskDTO taskToTaskDTO(Task task);

    Task taskDTOToTask(TaskDTO taskDTO);

    List<TaskDTO> taskMappingList(Iterable<Task> tasks);
}
