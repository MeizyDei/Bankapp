package com.example.bank.app.backend.repository;

import com.example.bank.app.backend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
}
