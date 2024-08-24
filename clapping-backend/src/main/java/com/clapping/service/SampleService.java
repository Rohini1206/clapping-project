package com.clapping.service;

import com.clapping.model.SampleEntity;
import com.clapping.repository.SampleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SampleService {
    @Autowired
    private SampleRepository sampleRepository;

    public List<SampleEntity> findAll() {
        return sampleRepository.findAll();
    }
}