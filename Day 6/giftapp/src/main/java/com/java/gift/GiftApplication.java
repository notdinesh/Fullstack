package com.java.gift;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.security.crypto.password.PasswordEncoder;

import com.java.gift.Repository.UserRepository;
import com.java.gift.enumerate.Role;
import com.java.gift.model.User;

import lombok.RequiredArgsConstructor;

@SpringBootApplication
@RequiredArgsConstructor
@ComponentScan({"com.java.gift"})
@EntityScan({"com.java.gift.model"})                                                 
public class GiftApplication {

	private final PasswordEncoder passwordEncoder;

	public static void main(String[] args) {
		SpringApplication.run(GiftApplication.class, args);
	}

	@Bean
	public CommandLineRunner commandLineRunner(UserRepository userRepository){
		return args -> {
			if(userRepository.count() > 0) return;
			var admin = User.builder()
			.name("Admin")
			.email("admin@gmail.com")
			.password(passwordEncoder.encode("Admin@123"))
			.role(Role.ADMIN)
			.build();
			userRepository.save(admin);
		};
	}

}
