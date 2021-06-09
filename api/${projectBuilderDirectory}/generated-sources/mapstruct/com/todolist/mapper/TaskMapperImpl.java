package com.todolist.mapper;

import com.todolist.model.dto.TaskDTO;
import com.todolist.model.entity.Task;
import java.util.ArrayList;
import java.util.List;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2021-06-09T17:26:53-0300",
    comments = "version: 1.4.1.Final, compiler: javac, environment: Java 11.0.10 (Oracle Corporation)"
)
@Component
public class TaskMapperImpl implements TaskMapper {

    @Override
    public TaskDTO taskToTaskDTO(Task task) {
        if ( task == null ) {
            return null;
        }

        TaskDTO taskDTO = new TaskDTO();

        return taskDTO;
    }

    @Override
    public Task taskDTOToTask(TaskDTO taskDTO) {
        if ( taskDTO == null ) {
            return null;
        }

        Task task = new Task();

        return task;
    }

    @Override
    public List<TaskDTO> taskMappingList(Iterable<Task> tasks) {
        if ( tasks == null ) {
            return null;
        }

        List<TaskDTO> list = new ArrayList<TaskDTO>();
        for ( Task task : tasks ) {
            list.add( taskToTaskDTO( task ) );
        }

        return list;
    }
}
