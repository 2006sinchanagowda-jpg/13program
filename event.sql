CREATE TABLE events (

    id INT AUTO_INCREMENT PRIMARY KEY,

    title VARCHAR(200) NOT NULL,

    description TEXT,

    event_date DATE NOT NULL,

    event_time TIME,

    location VARCHAR(200),

    category VARCHAR(100),

    max_participants INT,

    created_at TIMESTAMP
        DEFAULT CURRENT_TIMESTAMP

);