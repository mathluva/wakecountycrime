var crimedata = data;

    var age = [];
    var sex = [];
    var date=[];
    var loc =[];
    var dept=[];
    var charge=[];

    var sex_count = 0;
    var dept_count = 0;
    var charge_count =0;
    var age_count = 0;

// for (var i =0; i<crimedata.length; i++){ 
 crimedata.forEach((crime) => {
    age.push(crime.Age);
    sex.push(crime.Sex);
    date.push(crime.arrest_date);
    loc.push(crime.arrest_location);
    dept.push(crime.agency);
    charge.push(crime.Charge);   
 });
 

var histogram = [
    {
    labels: sex,
    type: 'pie'
 }
];

 var bar = [
    {
      x:dept,
      type:'histogram'
    }
  ];

var bubble =[
    {
    x: age,
    y: age,
    mode: 'markers',
    marker: {
      size: [40, 60, 80, 100]
    }
    }];

Plotly.newPlot('histogram', histogram);
Plotly.newPlot('bar', bar);
Plotly.newPlot('bubble', bubble);

  
