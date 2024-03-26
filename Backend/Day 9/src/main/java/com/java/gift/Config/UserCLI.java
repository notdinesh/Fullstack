package com.java.gift.Config;

import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.java.gift.Repository.UserRepository;
import com.java.gift.model.User;
import com.java.gift.enumerate.Role;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Service
public class UserCLI implements CommandLineRunner {
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    @Override
    public void run(String... args) throws Exception {
       if(userRepository.count()>0){
        return; } 

        var admin = User.builder()  
                    .name("Admin")
                    .email("admin@gmail.com")
                    .password(passwordEncoder.encode("admin"))
                    .mobileNumber("9360679759")
                    .role(Role.ADMIN)
                    .build();
        userRepository.save(admin);
    }
    
}
