package com.example.bank.app.backend.service;

import com.example.bank.app.backend.dto.TaskDto;
import org.springframework.context.annotation.Bean;

import java.util.List;

public interface TaskService {

    List<TaskDto> getAllTasks();

    String createTask(TaskDto taskDto);
}
