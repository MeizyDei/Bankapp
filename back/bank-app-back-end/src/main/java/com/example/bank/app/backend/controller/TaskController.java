package com.example.bank.app.backend.controller;
import com.example.bank.app.backend.model.Task;
import com.example.bank.app.backend.service.TaskService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@CrossOrigin
@RestController
@RequiredArgsConstructor
@RequestMapping("/task")
public class TaskController {

    @Autowired
    private TaskService taskService;

    @PostMapping("/add")
    public String add(@RequestBody Task task){
        taskService.saveTask(task);
        return "New Task is added" + task.getId();
    }

    @GetMapping("/getAll")
    public List<Task> getALlTasks(){
        return taskService.getAllTasks();
    }

}

