CREATE TABLE users (

    id INT AUTO_INCREMENT PRIMARY KEY,

    name VARCHAR(100) NOT NULL,

    email VARCHAR(150) NOT NULL UNIQUE,

    password VARCHAR(255) NOT NULL,

    student_id VARCHAR(50) NOT NULL UNIQUE,

    department VARCHAR(100),

    year INT,

    role ENUM('student', 'admin')
        DEFAULT 'student',

    created_at TIMESTAMP
        DEFAULT CURRENT_TIMESTAMP

);