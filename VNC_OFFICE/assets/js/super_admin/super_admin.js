document.addEventListener('DOMContentLoaded', function () {
    // Sidebar toggle
    const sidebarCollapse = document.getElementById('sidebarCollapse');
    const sidebar = document.getElementById('sidebar');

    sidebarCollapse.addEventListener('click', function () {
        sidebar.classList.toggle('active');
    });

    // Charts for projects and sales
    const ctxProjects = document.getElementById('projectsChart').getContext('2d');
    const ctxSales = document.getElementById('salesChart').getContext('2d');

    const projectsChart = new Chart(ctxProjects, {
        type: 'bar',
        data: {
            labels: ['2010', '2011', '2012', '2013', '2014', '2015'],
            datasets: [{
                label: 'Projects',
                data: [50, 60, 70, 80, 90, 100],
                backgroundColor: '#007bff'
            }]
        }
    });

    const salesChart = new Chart(ctxSales, {
        type: 'pie',
        data: {
            labels: ['Normal Sales', 'In-Site Sales', 'Mail-Order Sales'],
            datasets: [{
                data: [55, 22, 23],
                backgroundColor: ['#007bff', '#ffc107', '#28a745']
            }]
        }
    });
});
