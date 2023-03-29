package com.example.bank.app.backend.service;

import ch.qos.logback.core.CoreConstants;
import com.example.bank.app.backend.dto.TaskDto;
import com.example.bank.app.backend.model.Task;
import com.example.bank.app.backend.repository.TasksRepository;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.Optional;

@RequiredArgsConstructor
@Service
public class TaskServiceImpl implements TaskService {

    private final TasksRepository tasksRepository;

    private final ModelMapper modelMapper = new ModelMapper();

    @Override
    public List<TaskDto> getAllTasks() {
        return tasksRepository.findAll().stream()
                .map(t -> modelMapper.map(t, TaskDto.class))
                .toList();
    }

    @Override
    public TaskDto createTask(TaskDto taskDto) {
        Task task = modelMapper.map(taskDto, Task.class);
        //task.setCreateDate(LocalDateTime.now());
        tasksRepository.save(task);

        return modelMapper.map(task, TaskDto.class);
    }
//needless
//    private List<TaskDto> mapToDto(Collection<Task> entities) {
//        return entities.stream()
//                .map(o -> TaskDto.builder()
//                        .id(o.getId())
//                        .text(o.getText())
//                        .createDate(buildCreateDateLabel(o.getCreateDate()))
//                        .build())
//                .collect(Collectors.toList());
//    }

//    private LocalDateTime buildCreateDateLabel(LocalDateTime createDate) {
//        LocalDateTime rawDate = Optional.ofNullable(createDate)
//                .orElseGet(LocalDateTime::now);
//        return LocalDateTime.parse(rawDate.format(DateTimeFormatter.ofPattern(CoreConstants.DAILY_DATE_PATTERN)));
//    }
}
