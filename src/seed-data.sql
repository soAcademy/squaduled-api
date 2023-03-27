--- user
INSERT INTO postgres."User"  ("officerId", "firstName", "lastName", "phone", "email", "userName", "password", "role","createdAt", "updatedAt") VALUES
('10001', 'Wade', 'Nottage', '099-888-8888', 'WadeNottage@email.com', '10001', '888888', 'admin',CURRENT_TIMESTAMP,CURRENT_TIMESTAMP),
('10002', 'Dave', 'Dallin', '099-888-8889', 'DaveDallin@email.com', '10002', '888888', 'admin',CURRENT_TIMESTAMP,CURRENT_TIMESTAMP),
('10003', 'Daisy', 'Bagshaw', '099-888-8890', 'DaisyBagshaw@email.com', '10003', '888888', 'admin',CURRENT_TIMESTAMP,CURRENT_TIMESTAMP),
('10004', 'Isabel', 'Damp', '099-888-8891', 'IsabelDamp@email.com', '10004', '888888', 'user',CURRENT_TIMESTAMP,CURRENT_TIMESTAMP),
('10005', 'Stella', 'Dangerfield', '099-888-8892', 'StellaDangerfield@email.com', '10005', '888888', 'user',CURRENT_TIMESTAMP,CURRENT_TIMESTAMP),
('10006', 'Seth', 'Ekins', '099-888-8893', 'SethEkins@email.com', '10006', '888888', 'user',CURRENT_TIMESTAMP,CURRENT_TIMESTAMP),
('10007', 'Angela', 'Akerley', '099-888-8894', 'AngelaAkerley@email.com', '10007', '888888', 'user',CURRENT_TIMESTAMP,CURRENT_TIMESTAMP),
('10008', 'Alberto', 'Akerley', '099-888-8895', 'AlbertoAkerley@email.com', '10008', '888888', 'user',CURRENT_TIMESTAMP,CURRENT_TIMESTAMP),
('10009', 'Lucy', 'Ellithorpe', '099-888-8896', 'LucyEllithorpe@email.com', '10009', '888888', 'user',CURRENT_TIMESTAMP,CURRENT_TIMESTAMP),
('10010', 'Gilbert', 'Fierman', '099-888-8897', 'GilbertFierman@email.com', '10010', '888888', 'user',CURRENT_TIMESTAMP,CURRENT_TIMESTAMP),
('10011', 'Lauren', 'Fitton', '099-888-8898', 'LaurenFitton@email.com', '10011', '888888', 'user',CURRENT_TIMESTAMP,CURRENT_TIMESTAMP),
('10012', 'Antonio', 'Hamons', '099-888-8899', 'AntonioHamons@email.com', '10012', '888888', 'user',CURRENT_TIMESTAMP,CURRENT_TIMESTAMP),
('10013', 'Janet', 'Bailes', '099-888-8900', 'JanetBailes@email.com', '10013', '888888', 'user',CURRENT_TIMESTAMP,CURRENT_TIMESTAMP),
('10014', 'Ramon', 'Halter', '099-888-8901', 'RamonHalter@email.com', '10014', '888888', 'user',CURRENT_TIMESTAMP,CURRENT_TIMESTAMP),
('10015', 'Loretta', 'Cardwell', '099-888-8902', 'LorettaCardwell@email.com', '10015', '888888', 'user',CURRENT_TIMESTAMP,CURRENT_TIMESTAMP),
('10016', 'Tracey', 'Addington', '099-888-8903', 'TraceyAddington@email.com', '10016', '888888', 'user',CURRENT_TIMESTAMP,CURRENT_TIMESTAMP),
('10017', 'Liam', 'Garratt', '099-888-8904', 'LiamGarratt@email.com', '10017', '888888', 'user',CURRENT_TIMESTAMP,CURRENT_TIMESTAMP)


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