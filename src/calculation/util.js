//McCabe-Thiele graphical method for the number of theoretical stages required for a binary distillation
//Author: Dylan Au

//The functions below are utility functions that aid to transform data and to help generate the graph



var dataArray = [];
export function createLines(xStart,xEnd,yStart,yEnd) {
    var xPoints = [xStart,xEnd];
    var yPoints = [yStart,yEnd];
    return [xPoints,yPoints];
  }
  
export function jsonDataFormat(x,y,name,color) {
    if (name ==="") {
        var data =  {
            x:x,
            y:y,
            mode:"lines",
            type:"scatter",
  
            line: {
              color:color
  
            },
            showlegend:false
        };
    }
    else if (name ==="staircase") {
      data =  {
        x:x,
        y:y,
        mode:"lines",
        type:"scatter",

        line: {
          color:color

        },
        name:name,
        legendgroup:"staircase",
      }
    }
    else if (name ==="staircasehide") {
      data =  {
        x:x,
        y:y,
        mode:"lines",
        type:"scatter",

        line: {
          color:color

        },
        legendgroup:"staircase",
        showlegend:false
      }
    }
    else {
        data =  {
            x:x,
            y:y,
            mode:"lines",
            type:"scatter",
  
            line: {
              color:color
  
            },
            name:name
        };
    }
  
    return data;
  }
  
export function addDataArray(data) {
    dataArray.push(data);
    return dataArray;
  }

export function getDataArray() {
    return dataArray
}
  
export function renderChart(dataArray) {
    var layout = {
      title:"<b>McCabe-Thiele Y-X Diagram </b>",
      autosize:true,
      xaxis: {
          range: [0,1],
          title: {
            text: 'x',
            font: {
              family:  "Helvetica,Arial,sans-serif",
              size: 18,
              color: '#030303',
            },
          },
          linecolor: 'black',
          linewidth: 1,
          mirror: true,
        },
        yaxis: {
          range: [0,1],
          title: {
            text: 'y',
            font: {
              family: "Helvetica,Arial,sans-serif",
              size: 18,
              color: '#030303',
            },
          },
          linecolor: 'black',
          linewidth: 1,
          mirror: true,
        },
        paper_bgcolor:'#fff',
        borderwidth:"1px",
        bordercolor:"rgb(0,0,0)", 
        width: 800,
        height: 500,     
      }  
      
    return [dataArray,layout]
   }
  
export function resetData() {
  dataArray = []
}