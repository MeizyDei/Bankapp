package com.example.bank.app.backend.service;

import com.example.bank.app.backend.model.Task;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface TaskService {

    public Task saveTask(Task task);
    public Task updateTask(Task task);
    public List<Task> getAllTasks();



}

