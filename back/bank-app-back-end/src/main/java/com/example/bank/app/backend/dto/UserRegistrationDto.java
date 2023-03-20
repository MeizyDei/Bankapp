package com.example.bank.app.backend.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UserRegistrationDto {
    private String email;
    private String username;
    private String password;
    /*
    {
        email: "",
        username: "",
        password: ""
    }*/
}
