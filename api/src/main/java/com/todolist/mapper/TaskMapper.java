package com.todolist.mapper;

import com.todolist.model.dto.TaskDTO;
import com.todolist.model.entity.Task;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import java.util.List;

@Mapper(componentModel = "spring")
public interface TaskMapper {

    @Mapping(target = "taskDescription", source = "taskDescription")
    @Mapping(target = "id", source = "id")
    TaskDTO taskToTaskDTO(Task task);

    @Mapping(target = "taskDescription", source = "taskDescription")
    @Mapping(target = "id", source = "id")
    Task taskDTOToTask(TaskDTO taskDTO);

    List<TaskDTO> taskMappingList(Iterable<Task> tasks);
}
