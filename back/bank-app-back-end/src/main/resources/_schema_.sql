create table user
(
    id         INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    email      VARCHAR(50) NOT NULL,
    password   VARCHAR(50) NOT NULL,
);