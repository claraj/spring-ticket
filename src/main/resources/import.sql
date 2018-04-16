
-- insert into PUBLIC.TICKET (ID, PRIORITY, REPORTER, DESCRIPTION) VALUES (1, 5, 'Me', 'mouse mat missing');
-- insert into PUBLIC.TICKET (ID, PRIORITY, REPORTER, DESCRIPTION) VALUES (2, 4, 'Earwig', 'word is weird');
-- insert into PUBLIC.TICKET (ID, PRIORITY, REPORTER, DESCRIPTION) VALUES (3, 1, 'Dog', 'printer is broken');
-- insert into PUBLIC.TICKET (ID, PRIORITY, REPORTER, DESCRIPTION) VALUES (4, 2, 'Cat', 'server was hacked');
-- insert into PUBLIC.TICKET (ID, PRIORITY, REPORTER, DESCRIPTION) VALUES (5, 3, 'Bob', 'wifi is not working');



insert into PUBLIC.TICKET (PRIORITY, REPORTER, DESCRIPTION, DATEREPORTED) VALUES ( 5, 'Me', 'mouse mat missing', '2018-09-09');


insert into PUBLIC.TICKET (PRIORITY, REPORTER, DESCRIPTION) VALUES ( 5, 'Me', 'mouse mat missing');
insert into PUBLIC.TICKET (PRIORITY, REPORTER, DESCRIPTION) VALUES ( 4, 'Earwig', 'word is weird');
insert into PUBLIC.TICKET (PRIORITY, REPORTER, DESCRIPTION) VALUES ( 1, 'Dog', 'printer is broken');
insert into PUBLIC.TICKET (PRIORITY, REPORTER, DESCRIPTION) VALUES ( 2, 'Cat', 'server was hacked');
insert into PUBLIC.TICKET (PRIORITY, REPORTER, DESCRIPTION) VALUES ( 3, 'Bob', 'wifi is not working');

-- dates in h2??
-- insert into PUBLIC.TICKET (ID, PRIORITY, REPORTER, DESCRIPTION, DATEREPORTED, DATERESOLVED, RESOLUTION)
--  VALUES  (10, 5, 'Me', 'mouse mat missing');
--
-- ,  (2, 4, 'Earwig', 'word is weird'),  (3, 1, 'Dog', 'printer is broken'),  (4, 'Cat', 'server was hacked'),  (5, 'Bob', 'wifi is not working');


--     private int priority;
--     private String reporter;  // person or department who reported problem
--     private String description;
--     private Date dateReported = new Date();
--     private Date dateResolved;
--     private String resolution;