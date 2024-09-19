<?php
// Enable error reporting for debugging (disable this in production)
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

// Database configuration
define('DB_HOST', 'localhost');   // Database host
define('DB_USER', 'root');        // Database username
define('DB_PASS', '');            // Database password
define('DB_NAME', 'vnc_office');  // Database name

// Start a session if not already started
if (session_status() == PHP_SESSION_NONE) {
    session_start();
}

// Establish a database connection
$conn = new mysqli(DB_HOST, DB_USER, DB_PASS, DB_NAME);

// Check the connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Function to check if a user is logged in
function is_logged_in() {
    return isset($_SESSION['user_id']);
}

// Function to check the role of the logged-in user
function is_super_admin() {
    return isset($_SESSION['role']) && $_SESSION['role'] === 'super_admin';
}

function is_admin() {
    return isset($_SESSION['role']) && $_SESSION['role'] === 'admin';
}

function is_employee() {
    return isset($_SESSION['role']) && $_SESSION['role'] === 'employee';
}
?>
