package com.clapping.controller;

import com.clapping.model.SampleEntity;
import com.clapping.service.SampleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/samples")
public class SampleController {
    @Autowired
    private SampleService sampleService;

    @GetMapping
    public List<SampleEntity> getAllSamples() {
        return sampleService.findAll();
    }
}