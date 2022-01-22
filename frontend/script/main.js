$(document).ready(function(){
   $('#dataTable').DataTable();
});

const labels = ['Dewasa','Remaja','Anak-anak','Balita','Bayi'];

const data = {
   labels : labels,
   datasets:[{
      label: 'Data Warga',
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(255, 99, 132)',
      data: [0, 10, 5, 2, 20,25],
   }]
};

const config = {
   type: 'line',
   data: data,
   options:{}
};

const diagram1 = new Chart(document.getElementById('diagram-1'),config);