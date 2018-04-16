function Ticket(data) {
    this.id = data.id;
    this.description = ko.observable(data.description);
    this.reporter = ko.observable(data.reporter);
    this.priority = ko.observable(data.priority);
    this.dateReported = ko.observable(data.dateReported);
}


function TicketViewModel(){

    let self = this;

    self.tickets = ko.observableArray([]);

    self.newTicketDescription = ko.observable();
    self.newTicketReporter = ko.observable();
    self.newTicketPriority = ko.observable();

    self.createNewTicket = function() {
        let data = ko.toJSON( {
            description: self.newTicketDescription(),
            reporter: self.newTicketReporter(),
            priority: self.newTicketPriority()
        });

        addNewTicket(data);
    };

    self.loadAllTickets = function() {
      getAllTickets();
    };


    self.setTickets = function(tickets) {
        self.tickets(tickets);
    };

    self.loadAllTickets();

}

let ticketViewModel = new TicketViewModel();
ko.applyBindings(ticketViewModel);