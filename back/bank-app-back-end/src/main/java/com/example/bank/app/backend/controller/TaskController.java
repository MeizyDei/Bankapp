package com.example.bank.app.backend.controller;

import com.example.bank.app.backend.dto.TaskDto;
import com.example.bank.app.backend.service.TaskService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/importanttasks")
public class TaskController {

    private final TaskService taskService;

    @GetMapping("/all")
    public List<TaskDto> getAllTasks() {
        return taskService.getAllTasks();
    }

    @PostMapping
    public String createTask(@RequestBody TaskDto task){
        return taskService.createTask(task);
    }

    public String createTask(@RequestParam("text") String text,
                             @RequestParam("completed") Boolean completed,
                             @RequestParam("createDate") LocalDateTime createDate) throws IOException {
        TaskDto dto = TaskDto.builder()
                .text(text)
                .completed(completed)
                .createDate(createDate)
                .build();
        return taskService.createTask(dto);
    }
}
