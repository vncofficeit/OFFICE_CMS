<?php
session_start();
include '../db.php';

// Check if the user is a super admin
if (!isset($_SESSION['user_id']) || $_SESSION['role'] !== 'super_admin') {
    header('Location: ../login.php');
    exit;
}

// Get the user ID from the query string
$user_id = isset($_GET['id']) ? intval($_GET['id']) : 0;

if ($user_id) {
    // Delete user from the database
    $sql = "DELETE FROM users WHERE id = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param('i', $user_id);

    if ($stmt->execute()) {
        $_SESSION['message'] = 'User deleted successfully!';
    } else {
        $_SESSION['error'] = 'Failed to delete user!';
    }
}

// Redirect to manage users page
header('Location: manage_users.php');
exit;
?>
