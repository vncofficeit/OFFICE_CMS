<?php
session_start();

if (isset($_SESSION['user_id'])) {
    if ($_SESSION['role'] === 'super_admin') {
        header('Location: super_admin/dashboard.php');
    } elseif ($_SESSION['role'] === 'admin') {
        header('Location: admin/dashboard.php');
    } elseif ($_SESSION['role'] === 'employee') {
        header('Location: employee/dashboard.php');
    }
    exit;
} else {
    header('Location: login.php');
    exit;
}
?>
