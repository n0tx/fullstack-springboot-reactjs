package com.riki.contactappbackend.service.impl;

import com.riki.contactappbackend.domain.Person;
import com.riki.contactappbackend.dto.response.PersonListResponseDTO;
import com.riki.contactappbackend.repository.PersonRepository;
import com.riki.contactappbackend.service.PersonService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class PersonServiceImpl implements PersonService {

    @Autowired
    private PersonRepository personRepository;

    @Override
    public List<PersonListResponseDTO> findPersonAll(String personName) {
        List<Person> personList = personRepository.findAll();

        return personList.stream().map((person)-> {
            PersonListResponseDTO dto = new PersonListResponseDTO(
                    person.getId(),
                    person.getFullName(),
                    person.getBirthDate());
            return dto;
        }).collect(Collectors.toList());
    }
}
