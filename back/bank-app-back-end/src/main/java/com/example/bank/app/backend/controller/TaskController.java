package com.example.bank.app.backend.controller;

import com.example.bank.app.backend.dto.TaskDto;
import com.example.bank.app.backend.service.TaskService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/tasks")
public class TaskController {

    private final TaskService taskService;

    @GetMapping("/all")
    public List<TaskDto>getAllTasks(){
        return taskService.getAllTasks();
    }

    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping
    public TaskDto createTask(@RequestBody TaskDto taskDto){
        return taskService.createTask(taskDto);
    }


}
