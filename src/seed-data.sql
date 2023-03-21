--- user
INSERT INTO myproject.User (officerId, firstName, lastName, phone, email, userName, password, role) VALUES
(0001, 'Wade', 'Nottage', '099-888-8888', 'WadeNottage@email.com', 10001, '888888', 'admin'),
(0002, 'Dave', 'Dallin', '099-888-8889', 'DaveDallin@email.com', 10002, '888888', 'admin'),
(0003, 'Daisy', 'Bagshaw', '099-888-8890', 'DaisyBagshaw@email.com', 10003, '888888', 'admin'),
(0004, 'Isabel', 'Damp', '099-888-8891', 'IsabelDamp@email.com', 10004, '888888', 'user'),
(0005, 'Stella', 'Dangerfield', '099-888-8892', 'StellaDangerfield@email.com', 10005, '888888', 'user'),
(0006, 'Seth', 'Ekins', '099-888-8893', 'SethEkins@email.com', 10006, '888888', 'user'),
(0007, 'Angela', 'Akerley', '099-888-8894', 'AngelaAkerley@email.com', 10007, '888888', 'user'),
(0008, 'Alberto', 'Akerley', '099-888-8895', 'AlbertoAkerley@email.com', 10008, '888888', 'user'),
(0009, 'Lucy', 'Ellithorpe', '099-888-8896', 'LucyEllithorpe@email.com', 10009, '888888', 'user'),
(10010, 'Gilbert', 'Fierman', '099-888-8897', 'GilbertFierman@email.com', 10010, '888888', 'user'),
(10011, 'Lauren', 'Fitton', '099-888-8898', 'LaurenFitton@email.com', 10011, '888888', 'user'),
(10012, 'Antonio', 'Hamons', '099-888-8899', 'AntonioHamons@email.com', 10012, '888888', 'user'),
(10013, 'Janet', 'Bailes', '099-888-8900', 'JanetBailes@email.com', 10013, '888888', 'user'),
(10014, 'Ramon', 'Halter', '099-888-8901', 'RamonHalter@email.com', 10014, '888888', 'user'),
(10015, 'Loretta', 'Cardwell', '099-888-8902', 'LorettaCardwell@email.com', 10015, '888888', 'user'),
(10016, 'Tracey', 'Addington', '099-888-8903', 'TraceyAddington@email.com', 10016, '888888', 'user'),
(10017, 'Liam', 'Garratt', '099-888-8904', 'LiamGarratt@email.com', 10017, '888888', 'user'),
(10018, 'Sabrina', 'Impson', '099-888-8905', 'SabrinaImpson@email.com', 10018, '888888', 'user'),
(10019, 'Joshua', 'Flaxman', '099-888-8906', 'JoshuaFlaxman@email.com', 10019, '888888', 'user'),
(10020, 'Melody', 'Albury', '099-888-8907', 'MelodyAlbury@email.com', 10020, '888888', 'user'),
(10021, 'Chrysta', 'Caris', '099-888-8908', 'ChrystaCaris@email.com', 10021, '888888', 'user'),
(10022, 'Vicki', 'Grace', '099-888-8909', 'VickiGrace@email.com', 10022, '888888', 'user'),
(10023, 'Molly', 'Ganger', '099-888-8910', 'MollyGanger@email.com', 10023, '888888', 'user'),
(10024, 'Katelynn', 'Camfield', '099-888-8911', 'KatelynnCamfield@email.com', 10024, '888888', 'user'),
(10025, 'Aidan', 'Bamford', '099-888-8912', 'AidanBamford@email.com', 10025, '888888', 'user'),
(10026, 'Perry', 'Leddon', '099-888-8913', 'PerryLeddon@email.com', 10026, '888888', 'user'),
(10027, 'Adrian', 'Addington', '099-888-8914', 'AdrianAddington@email.com', 10027, '888888', 'user'),
(10028, 'Katrina', 'Kidner', '099-888-8915', 'KatrinaKidner@email.com', 10028, '888888', 'user'),
(10029, 'Nicole', 'Matherson', '099-888-8916', 'NicoleMatherson@email.com', 10029, '888888', 'user'),
(10030, 'Alice', 'Halter', '099-888-8917', 'AliceHalter@email.com', 10030, '888888', 'user'),
(10031, 'Gerald', 'Maskell', '099-888-8918', 'GeraldMaskell@email.com', 10031, '888888', 'user'),
(10032, 'Kathie', 'Layfield', '099-888-8919', 'KathieLayfield@email.com', 10032, '888888', 'user'),
(10033, 'Luna', 'Kimball', '099-888-8920', 'LunaKimball@email.com', 10033, '888888', 'user'),
(10034, 'Walter', 'Barden', '099-888-8921', 'WalterBarden@email.com', 10034, '888888', 'user'),
(10035, 'Johnny', 'Irwin', '099-888-8922', 'JohnnyIrwin@email.com', 10035, '888888', 'user');

--- building

INSERT INTO myproject.Building (name)
VALUES ('Building A'),
       ('Building B'),
       ('Building C');

--- facility

INSERT INTO myproject.Facility (name) VALUES
('WIFI'),
('Projector'),
('Coffee')
('Speaker')
('Microphone')
('Pointer')
('Printer')
('Whiteboard')
('Extension Socket');

--- officeHour1

INSERT INTO myproject.OfficeHour1 (day, isOpen, openTime, closeTime)
VALUES 
  ('monday', TRUE, '12:00', '17:00'),
  ('tuesday', TRUE, '8:00', '17:00'),
  ('wednesday', TRUE, '8:00', '17:00'),
  ('thursday', TRUE, '8:00', '17:00'),
  ('friday', TRUE, '8:00', '12:00'),
  ('saturday', FALSE, '9:00', '18:00'),
  ('sunday', FALSE, '10:00', '19:00');

-- booking

INSERT INTO myproject.Booking (startDatetime, endDatetime, roomId, userId)
VALUES 
('2023-03-26 08:00:00', '2023-03-26 17:00:00', 1, 1),
('2023-03-26 08:00:01', '2023-03-26 17:00:01', 2, 2),
('2023-03-26 08:00:02', '2023-03-26 17:00:02', 3, 3),
('2023-03-26 08:00:03', '2023-03-26 17:00:03', 4, 4),
('2023-03-26 08:00:04', '2023-03-26 17:00:04', 5, 5),
('2023-03-24 08:00:00', '2023-03-24 11:00:00', 1, 1),
('2023-03-24 11:00:00', '2023-03-24 14:00:00', 2, 2),
('2023-03-23 08:00:00', '2023-03-23 15:00:00', 1, 3),
('2023-03-22 15:00:00', '2023-03-22 17:00:00', 2, 4),
('2023-03-22 08:00:00', '2023-03-22 11:00:00', 2, 5),
('2023-03-22 15:00:00', '2023-03-22 16:00:00', 4, 7),
('2023-03-22 15:00:00', '2023-03-22 17:00:00', 1, 1);