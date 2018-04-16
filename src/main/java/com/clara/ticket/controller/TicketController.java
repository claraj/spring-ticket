package com.clara.ticket.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Created by clara on 4/12/18.
 */

@Controller
public class TicketController {
    
    @RequestMapping("/")
    public String home() {
        return "index.html";   //index.html
    }
    
}
