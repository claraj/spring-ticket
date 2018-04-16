package com.clara.ticket.model;

import lombok.Data;
import org.hibernate.validator.constraints.Range;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;
import java.util.Date;


@Data
@Entity
public class Ticket {
    
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private long id;
    
    @NotNull
    @Min(1)
    @Max(5)
    private int priority;
    
    @NotNull
    private String reporter;  // person or department who reported problem
    
    @NotNull
    private String description;
    
    private Date dateReported = new Date();
    
    private boolean resolved = false;
    
    private Date dateResolved;
    private String resolution;
    
    // Zero-argument constructor required
    Ticket() {}
    
}
