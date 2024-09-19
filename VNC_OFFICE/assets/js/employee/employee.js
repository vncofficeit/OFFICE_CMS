document.addEventListener('DOMContentLoaded', function () {
    // Sidebar toggle
    const sidebarCollapse = document.getElementById('sidebarCollapse');
    const sidebar = document.getElementById('sidebar');

    sidebarCollapse.addEventListener('click', function () {
        sidebar.classList.toggle('active');
    });

    // Charts for task progress and task statistics
    const ctxTaskProgress = document.getElementById('taskProgressChart').getContext('2d');
    const ctxTaskStats = document.getElementById('taskStatsChart').getContext('2d');

    const taskProgressChart = new Chart(ctxTaskProgress, {
        type: 'bar',
        data: {
            labels: ['Assigned', 'Completed', 'Pending'],
            datasets: [{
                label: 'Tasks',
                data: [5, 3, 2],
                backgroundColor: ['#17a2b8', '#28a745', '#ffc107']
            }]
        }
    });

    const taskStatsChart = new Chart(ctxTaskStats, {
        type: 'pie',
        data: {
            labels: ['Completed', 'Pending'],
            datasets: [{
                data: [60, 40],
                backgroundColor: ['#28a745', '#ffc107']
            }]
        }
    });
});
