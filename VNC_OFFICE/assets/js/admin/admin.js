document.addEventListener('DOMContentLoaded', function () {
    // Sidebar toggle
    const sidebarCollapse = document.getElementById('sidebarCollapse');
    const sidebar = document.getElementById('sidebar');

    sidebarCollapse.addEventListener('click', function () {
        sidebar.classList.toggle('active');
    });

    // Charts for user engagement and task completion
    const ctxUserEngagement = document.getElementById('userEngagementChart').getContext('2d');
    const ctxTaskCompletion = document.getElementById('taskCompletionChart').getContext('2d');

    const userEngagementChart = new Chart(ctxUserEngagement, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            datasets: [{
                label: 'Engagement',
                data: [50, 60, 80, 70, 90, 100],
                borderColor: '#3498db',
                fill: false
            }]
        }
    });

    const taskCompletionChart = new Chart(ctxTaskCompletion, {
        type: 'doughnut',
        data: {
            labels: ['Completed', 'Pending'],
            datasets: [{
                data: [75, 25],
                backgroundColor: ['#2ecc71', '#e74c3c']
            }]
        }
    });
});
