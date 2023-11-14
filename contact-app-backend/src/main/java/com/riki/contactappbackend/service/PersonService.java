package com.riki.contactappbackend.service;


import com.riki.contactappbackend.dto.response.PersonListResponseDTO;

import java.util.List;

public interface PersonService {

    List<PersonListResponseDTO> findPersonAll(String personName);
}
