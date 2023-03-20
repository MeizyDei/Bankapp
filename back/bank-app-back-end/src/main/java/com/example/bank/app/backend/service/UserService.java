package com.example.bank.app.backend.service;

import com.example.bank.app.backend.dto.RegisteredUserDto;
import com.example.bank.app.backend.dto.UserRegistrationDto;
import com.example.bank.app.backend.model.User;
import com.example.bank.app.backend.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service
public class UserService {

    private final UserRepository userRepository;


    public RegisteredUserDto registerUser(UserRegistrationDto userToRegister) {
        User newUser = new User();
        newUser.setEmail(userToRegister.getEmail());
        newUser.setPassword(userToRegister.getPassword());
        newUser.setUsername(userToRegister.getUsername());
        userRepository.save(newUser);

        RegisteredUserDto userDto = new RegisteredUserDto();
        userDto.setEmail(newUser.getEmail());
        userDto.setUsername(newUser.getUsername());
        return userDto;
    }
}
