package com.clapping.service;

import com.clapping.model.UserEntity;
import com.clapping.repository.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public UserEntity saveName(UserEntity nameEntity) {
        return userRepository.save(nameEntity);
    }

    public List<UserEntity> getAllNames() {
        return userRepository.findAll();
    }
}
