

function getAllTickets() {
    fetch('/tickets')
        .then( response => {
            console.log(response);
            return response.json();
        }).then( ticketJSON => {

            console.log(ticketJSON);
            let tickets = ticketJSON.map( t => {
                return new Ticket(
                    {
                        id: t.id,
                description: t.description,
                reporter: t.reporter,
                priority: t.priority,
                dateReported: t.dateReported
                    }
                )
            });

            return tickets;
    }).then( tickets => {
        ticketViewModel.setTickets(tickets);
    });
}

function addNewTicket(ticket) {

    fetch('tickets',{
        body: JSON.stringify(ticket),
        headers: {
            'content-type': 'application/json'
        },
        method: 'POST'
    }).then( json => {
        console.log(json);
    })

}