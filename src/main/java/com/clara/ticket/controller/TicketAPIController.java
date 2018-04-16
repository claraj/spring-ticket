package com.clara.ticket.controller;

import com.clara.ticket.repository.TicketRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;



@RestController
public class TicketAPIController {
    
    private TicketRepository repository;
    
    @Autowired
    TicketAPIController(TicketRepository repository) {
        this.repository = repository;
    }
    
    @GetMapping("/ticketsPriority")
    ResponseEntity getUnresolvedOrderByPriority() {
        return new ResponseEntity<>(
                repository.findTicketByResolvedOrderByPriorityAsc(false),
                HttpStatus.OK);
    }
}
