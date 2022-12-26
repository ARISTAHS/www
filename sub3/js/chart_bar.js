const data = {
  labels: [
    '크레파스 제도',
    '상생펀드 & 물대지원펀드',
    '스마트공장구축 지원사입',
    '기타 외'
  ],
  datasets: [{
    label: 'My First Dataset',
    data: [60, 45, 55, 20],
    backgroundColor: [
      'rgb(255, 99, 132)',
      'rgb(54, 162, 235)',
      'rgb(255, 205, 86)',
      'rgb(51, 255, 51)',
    ],
    hoverOffset: 4
  }]
};
   
const config = {
  type: 'pie',
  data: data,
};

const myChart = new Chart(
      document.getElementById('myChart'),
      config
);


const data2 = {
  labels:  [
    '2014','2015','2016','2017','2018','2019','2020','2021'],

datasets: [{
label: 'CrePas:Creative Partnership',
data: [11,20, 32, 38, 40, 54, 70, 82],
fill: true,
borderColor: 'rgb(75, 192, 192)',
tension: 0.1
}]
};
      
const config2 = {
type: 'line',
data: data2,
};

const myChart2 = new Chart(
      document.getElementById('myChart2'),
      config2
);


const data3 = {
  labels:  [
    '2017','2018','2019','2020','2021'],

datasets: [{
label: '상생펀드 & 물대지원펀드',
data: [110,200,405,550,640],
fill: true,
borderColor: 'rgb(30,144,255)',
tension: 0.1
}]
};
      
const config3 = {
type: 'bar',
data: data3,
};

const myChart3 = new Chart(
      document.getElementById('myChart3'),
      config3
);


const data4 = {
  labels:  [
'공정 불량률 감소율','재고 비용 감소율 ','제조 과정 순환율','전체 공정 완성율'],
  datasets: [{
    label: '스마트공장 구축 지원사업',
    data: [31, 45, 80, 91],
    backgroundColor: [
      'rgba(255, 99, 132, 0.2)',
      'rgba(255, 159, 64, 0.2)',
      'rgba(255, 205, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)'
    ],
    borderColor: [
      'rgb(255, 99, 132)',
      'rgb(255, 159, 64)',
      'rgb(255, 205, 86)',
      'rgb(75, 192, 192)'
    ],
    borderWidth: 1
  }]
};
      
const config4 = {
  type: 'bar',
  data: data4,
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  },
};


const myChart4 = new Chart(
      document.getElementById('myChart4'),
      config4
);


