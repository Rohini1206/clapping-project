package com.clapping.controller;

import com.clapping.model.UserEntity;
import com.clapping.service.UserService;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/names")
public class UserController {
	
	private static final Logger logger = LoggerFactory.getLogger(UserController.class);

    @Autowired
    private UserService userService;

    @PostMapping
    public UserEntity insertName(@RequestBody UserEntity userEntity) {
    	 logger.info("Received UserEntity: {}", userEntity);
        return userService.saveName(userEntity);
    }

    @GetMapping
    public List<UserEntity> getAllNames() {
        return userService.getAllNames();
    }
}
