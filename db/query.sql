CREATE DATABASE joyas;

CREATE TABLE inventario (id SERIAL, nombre VARCHAR(50), categoria
VARCHAR(50), metal VARCHAR(50), precio INT, stock INT);

INSERT INTO inventario VALUES
(DEFAULT, 'Collar Heart', 'collar', 'oro', 20000 , 2),
(DEFAULT, 'Collar History', 'collar', 'plata', 15000 , 5),
(DEFAULT, 'Aros Berry', 'aros', 'oro', 12000 , 10),
(DEFAULT, 'Aros Hook Blue', 'aros', 'oro', 25000 , 4),
(DEFAULT, 'Anillo Wish', 'aros', 'plata', 30000 , 4),
(DEFAULT, 'Anillo Cuarzo Greece', 'anillo', 'oro', 40000 , 2),
(DEFAULT, 'Collar Flower', 'collar', 'plata', 18000 , 3),
(DEFAULT, 'Collar Star', 'collar', 'plata', 16000 , 6),
(DEFAULT, 'Aros Diamond', 'aros', 'oro', 35000 , 8),
(DEFAULT, 'Aros Hoop Gold', 'aros', 'oro', 28000 , 5),
(DEFAULT, 'Anillo Eternal', 'anillo', 'plata', 22000 , 6),
(DEFAULT, 'Anillo Amethyst', 'anillo', 'oro', 45000 , 3),
(DEFAULT, 'Collar Pearl', 'collar', 'plata', 14000 , 7),
(DEFAULT, 'Collar Moonlight', 'collar', 'oro', 32000 , 4),
(DEFAULT, 'Aros Spiral', 'aros', 'plata', 18000 , 9),
(DEFAULT, 'Aros Crystal', 'aros', 'oro', 30000 , 6),
(DEFAULT, 'Anillo Serenity', 'anillo', 'plata', 26000 , 5),
(DEFAULT, 'Anillo Ruby', 'anillo', 'oro', 38000 , 3),
(DEFAULT, 'Collar Sunflower', 'collar', 'plata', 20000 , 4),
(DEFAULT, 'Collar Infinity', 'collar', 'oro', 42000 , 2);

select * from inventario;