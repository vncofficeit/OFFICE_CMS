
CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    role ENUM('super_admin', 'admin', 'employee') NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO users (username, email, password, role) VALUES
('Super Admin', 'superadmin@example.com', 'password_hash_here', 'super_admin'),
('Admin', 'admin@example.com', 'password_hash_here', 'admin'),
('Employee', 'employee@example.com', 'password_hash_here', 'employee');
