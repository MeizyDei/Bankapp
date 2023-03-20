package com.example.bank.app.backend.dto;

import com.example.bank.app.backend.model.Task;
import lombok.Getter;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
public class RegisteredUserDto {
    private String email;
    private String username;
    private List<Task> taskList = new ArrayList<>();
}
