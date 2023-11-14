package com.riki.contactappbackend.web;

import com.riki.contactappbackend.dto.response.PersonListResponseDTO;
import com.riki.contactappbackend.service.PersonService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class PersonResource {

    @Autowired
    private PersonService personService;

    @GetMapping("/person/list")
    public ResponseEntity<List<PersonListResponseDTO>> findPersonAll(
            @RequestParam(value = "full_name", required = false) String fullName
    ) {
        List<PersonListResponseDTO> dtos = personService.findPersonAll(fullName);
        return ResponseEntity.ok(dtos);
    }
}
