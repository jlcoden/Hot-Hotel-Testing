USE hoteldb;
INSERT INTO Rooms (roomType, description, imgUrl, roomCost) VALUES ("Standard", "WONDERFUL KING GUEST ROOM, 1 KING", "https://i.pointhacks.com/2019/04/23202609/03-W-Hotel-Singapore.jpg", 100);
INSERT INTO Rooms (roomType, description, imgUrl, roomCost) VALUES ("Standard", "SPECTACULAR KING GUEST ROOM, 1 KING, HARBOR VIEW", "https://cache.marriott.com/marriottassets/marriott/SINWH/sinwh-marvelous-suite-6144-hor-feat.jpg?downsize=1024px:*", 139);
INSERT INTO Rooms (roomType, description, imgUrl, roomCost) VALUES ("Double", "FABULOUS TWIN GUEST ROOM, 2 DOUBLE, POOL VIEW, BALCONY", "https://cache.marriott.com/marriottassets/marriott/SINWH/sinwh-fabulous-6686-hor-feat.jpg?download=2880px:*", 200);
INSERT INTO Rooms (roomType, description, imgUrl, roomCost) VALUES ("Deluxe", "EXTREME WOW SUITE KING 1 BEDROOM PRESIDENTIAL SUITE, 1 KING, BALCONY, PLUNGE POOL","http://static1.squarespace.com/static/52ccee75e4b00bc0dba03f46/52cd02c4e4b0ee5551498c4e/5b21c06f1ae6cf0f3f85737c/1528939481275/pf_act_hotel_whotel1.jpg?format=1500w", 300);

INSERT INTO Occupancies (date, occupied, RoomId, ClientId) VALUES (STR_TO_DATE( '13/12/2019', '%d/%m/%Y'), 1, 4, 1);
INSERT INTO Occupancies (date, occupied, RoomId, ClientId) VALUES (STR_TO_DATE( '14/12/2019', '%d/%m/%Y'), 0, 2, 3);
INSERT INTO Occupancies (date, occupied, RoomId, ClientId) VALUES (STR_TO_DATE( '15/12/2019', '%d/%m/%Y'), 1, 1, 6);
INSERT INTO Occupancies (date, occupied, RoomId, ClientId) VALUES (STR_TO_DATE( '16/12/2019', '%d/%m/%Y'), 0, 5, 4);
INSERT INTO Occupancies (date, occupied, RoomId, ClientId) VALUES (STR_TO_DATE( '17/12/2019', '%d/%m/%Y'), 1, 6, 5);
INSERT INTO Occupancies (date, occupied, RoomId, ClientId) VALUES (STR_TO_DATE( '18/12/2019', '%d/%m/%Y'), 0, 3, 2);
INSERT INTO Occupancies (date, occupied, RoomId, ClientId) VALUES (STR_TO_DATE( '19/12/2019', '%d/%m/%Y'), 0, 1, 1);

INSERT INTO Clients (firstName, lastName, email) VALUES ("John", "Smith", "john.smith@gmail.com");
INSERT INTO Clients (firstName, lastName, email) VALUES ("Christina", "Tang", "tang.xtina@gmail.com");
INSERT INTO Clients (firstName, lastName, email) VALUES ("Noelle", "Everage", "noelle.everage@gmail.com");
INSERT INTO Clients (firstName, lastName, email) VALUES ("Ray", "He", "ray.he@gmail.com");
INSERT INTO Clients (firstName, lastName, email) VALUES ("Josh", "Cosson", "josh.cosson@gmail.com");


INSERT INTO Reservations (checkIn, checkOut, totalCost, RoomId, ClientId, OccupancyId) VALUES (STR_TO_DATE('13/12/2019', '%d/%m/%Y'), (STR_TO_DATE('17/12/2019', '%d/%m/%Y')), 1500, 1, 1, 1);


