package com.example.bank.app.backend.controller;

import com.example.bank.app.backend.model.Task;
import com.example.bank.app.backend.service.TaskService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@CrossOrigin
@RestController
@RequestMapping("/task")
public class TaskController {


    private final TaskService taskService;

    private TaskController(TaskService taskService){
        this.taskService = taskService;
    }

    @PostMapping("/add")
    public String add(@RequestBody Task task){
        taskService.saveTask(task);
        return "New Task is added" + task.getId();
    }

    @PutMapping("/update/{id}")
    public String update(@PathVariable Long id, @RequestBody Task task) {
        taskService.updateTask(task);
        return "Updated task" + task.getId();
    }
    @GetMapping("/getAll")
    public List<Task> getALlTasks(){
        return taskService.getAllTasks();
    }

}

