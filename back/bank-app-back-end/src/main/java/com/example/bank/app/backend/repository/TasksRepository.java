package com.example.bank.app.backend.repository;

import com.example.bank.app.backend.model.Task;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TasksRepository extends JpaRepository<Task, Long> {
}
