package com.example.bank.app.backend.controller;

import com.example.bank.app.backend.dto.RegisteredUserDto;
import com.example.bank.app.backend.dto.UserRegistrationDto;
import com.example.bank.app.backend.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@RequiredArgsConstructor
@Controller
@RestController
@RequestMapping("/user")
public class UserController {

    private final UserService userService;

    @PostMapping("/register")
    public RegisteredUserDto registerNewUser(@RequestBody UserRegistrationDto userToRegister) {
        System.out.printf("I'm here!");
        return userService.registerUser(userToRegister);
    }


}
