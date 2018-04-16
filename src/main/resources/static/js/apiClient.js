// Talk to the server. JS fetch method, built-into modern browsers.

function getAllTickets() {
    fetch('/ticketsPriority')
        .then( response => {
            return response.json();

        }).then( ticketsJSON => {

        let tickets = ticketsJSON.map( t => {
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
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: 'POST'
    }).then( () => {
            ticketViewModel.updated();
        }
    )

}