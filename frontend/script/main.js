$(document).ready(function(){
   $('#dataTable').DataTable();
});

const labelsLineDiagram = ['0-1 Thn','2-10 Thn','11-19 Thn','20-60 Thn','60 > Thn'];
const lineDiagramDatasets = [{
   label: 'Laki-Laki',
   backgroundColor: 'rgb(0, 100, 250)',
   borderColor: 'rgb(0, 100, 255)',
   data: [25, 13, 9, 16, 30,11],
},
{
   label: 'Perempuan',
   backgroundColor: 'rgb(255, 99, 132)',
   borderColor: 'rgb(255, 99, 132)',
   data: [12, 10, 5, 2, 20,25],
}
];

const labelsBarDiagram =['KIS','BPNT','PKH','KIP'];
const barDiagramCFG = {count:labelsBarDiagram.count,min:0,max:300};
const barDiagramDatasets=[
   {
      label: 'Jumlah Penerima',
      data: [50,20,125,15],
      borderColor: '#9AD0EC',
      backgroundColor: '#EFDAD7',
      borderWidth: 3,
      borderRadius: 25,
      borderSkipped: false,
   }];

   const dataLine = {
      labels : labelsLineDiagram,
      datasets: lineDiagramDatasets
   };

   const dataBar = {
      labels : labelsBarDiagram,
      datasets: barDiagramDatasets
   }
const configLine = {
   type: 'line',
   data: dataLine,
   options:{}
};

const configBar = {
   type: 'bar',
   data: dataBar,
   options: {
     responsive: true,
     plugins: {
       legend: {
         position: 'top',
       },
       title: {
         display: false,
         text: 'Chart.js Bar Chart'
       }
     }
   },
};

const lineDiagram = new Chart(document.getElementById('lineDiagram'),configLine);
const barDiagram = new Chart(document.getElementById('barDiagram'),configBar);

