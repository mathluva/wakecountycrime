var category = [];
var description = [];
var district=[];
var lat =[];
var long=[];
var month=[];
var day =[];
var year =[];
var wkday=[];
var hour =[];
var code =[];
var cat_count = 0;
var code_count = 0;
var distric_count =0;               

function init(){
fetch('https://services.arcgis.com/v400IkDOw1ad7Yad/arcgis/rest/services/Daily_Police_Incidents/FeatureServer/0/query?where=1%3D1&outFields=OBJECTID,CreationDate,crime_category,crime_code,crime_description,district,reported_year,reported_month,reported_day,reported_hour,reported_dayofwk,latitude,longitude&outSR=4326&f=json')
    .then(res => {
        if (res.ok)
        {
            console.log('SUCCESS')
        }
        else {
            console.log('NOT SUCCESSFUL')
        }
        res.json()
        .then(data =>{
            console.log(data);
                for(var i=0; i<data.features.length; i++){
                code.push((data.features[i].attributes.crime_code));
                category.push((data.features[i].attributes.crime_category));
                description.push((data.features[i].attributes.crime_description));
                district.push((data.features[i].attributes.district));
                lat.push((data.features[i].attributes.latitude));
                long.push((data.features[i].attributes.longitude));
                month.push((data.features[i].attributes.reported_month));
                day.push((data.features[i].attributes.reported_day));
                year.push((data.features[i].attributes.reported_year));
                wkday.push((data.features[i].attributes.reported_dayofwk));
                hour.push((data.features[i].attributes.reported_hour));
                }
                console.log(code);
             })
    .catch(error => console.log('ERROR'))
    })
}
init();


var histogram = [
    {
    labels: category,
    type: 'histogram'
 }
];

 var bar = [
    {
      x:district,
      type:'histogram'
    }
  ];

// var bubble =[
//     {
//     x: age,
//     y: age,
//     mode: 'markers',
//     marker: {
//       size: [40, 60, 80, 100]
//     }
//     }];

// var scatterpl = [
//   {
//     x: month,
//     y: index, 
//     mode:'markers+text',
//     text: dept
//   }
//   ];

// Plotly.newPlot('histogram', histogram);
// Plotly.newPlot('bar', bar);
// Plotly.newPlot('bubble', bubble);
// Plotly.newPlot('scatterpl', scatterpl);
