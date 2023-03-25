


// chart 1

(async function() {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July','August','Septmeber','october',"Novmber","December"],
    datasets: [{
      label: 'Total Sale of Year',
      data: [65, 59, 80, 81, 26, 55, 100,25,2,50,30,60],
      fill: false,
      borderColor: '#10571b',
    }]
  };

    const plugin = {
        id: 'customCanvasBackgroundColor',
        beforeDraw: (chart, args, options) => {
          const {ctx} = chart;
          ctx.save();
          ctx.globalCompositeOperation = 'destination-over';
          ctx.fillStyle = options.color || '#99ffff';
          ctx.fillRect(0, 0, chart.width, chart.height);
          ctx.restore();
        }
      };

    new Chart(
    document.getElementById('acquisitions'),
    {
        type: 'line',
        data: data,
        scales: {
          y: { // defining min and max so hiding the dataset does not change scale range
            min: 0,
            max: 100
          }
        },
        options: {
            plugins: {
              customCanvasBackgroundColor: {
                color: '#fff',
              }
            }
          },
          plugins: [plugin],
    }
    );
})();

// chart 2

(async function() {
  const data = {
    labels: [
      'Open',
      'checked',
      'Buy'
    ],
    datasets: [{
      label: 'Customers',
      data: [300, 50, 100],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)'
      ],
      hoverOffset: 4
    }]
  };

    const plugin = {
        id: 'customCanvasBackgroundColor',
        beforeDraw: (chart, args, options) => {
          const {ctx} = chart;
          ctx.save();
          ctx.globalCompositeOperation = 'destination-over';
          ctx.fillStyle = options.color || '#99ffff';
          ctx.fillRect(0, 0, chart.width, chart.height);
          ctx.restore();
        }
      };

    new Chart(
    document.getElementById('pie'),
    {
        type: 'doughnut',
        data: data,
        options: {
            plugins: {
              customCanvasBackgroundColor: {
                color: '#fff',
              }
            }
          },
          plugins: [plugin],
    }
    );
})();

// chart 3 bar chat
(async function() {
  const data = {
    labels: [
      'Livestock',
      'Crop',
      'Poultry',
      "Seedline",
      "Fruits",
      "Feeds",
    ],
    datasets: [{
      label: 'Highest Product Purchased',
      data: [65, 59, 80, 81, 56, 55, 40],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(255, 205, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(201, 203, 207, 0.2)'
      ],
      borderColor: [
        'rgb(255, 99, 132)',
        'rgb(255, 159, 64)',
        'rgb(255, 205, 86)',
        'rgb(75, 192, 192)',
        'rgb(54, 162, 235)',
        'rgb(153, 102, 255)',
        'rgb(201, 203, 207)'
      ],
      borderWidth: 1,
      hoverOffset: 4
    }]
  };

    const plugin = {
        id: 'customCanvasBackgroundColor',
        beforeDraw: (chart, args, options) => {
          const {ctx} = chart;
          ctx.save();
          ctx.globalCompositeOperation = 'destination-over';
          ctx.fillStyle = options.color || '#99ffff';
          ctx.fillRect(0, 0, chart.width, chart.height);
          ctx.restore();
        }
      };

    new Chart(
    document.getElementById('bar'),
    {
        type: 'bar',
        data: data,
        options: {
            plugins: {
              customCanvasBackgroundColor: {
                color: '#fff',
              }
            },
          },
          plugins: [plugin],
    }
    );
})();
// chart 4 daliy chart
(async function() {
  const data = {
    labels: ['4/04/2023', '5/04/2023', '6/04/2023', '7/04/2023', '8/04/2023', ],
    datasets: [{
      label: 'Total Sale of Year',
      data: [5, 8, 10, 21, 40],
      fill: false,
      borderColor: '#10571b',
    }]
  };

    const plugin = {
        id: 'customCanvasBackgroundColor',
        beforeDraw: (chart, args, options) => {
          const {ctx} = chart;
          ctx.save();
          ctx.globalCompositeOperation = 'destination-over';
          ctx.fillStyle = options.color || '#99ffff';
          ctx.fillRect(0, 0, chart.width, chart.height);
          ctx.restore();
        }
      };

    new Chart(
    document.getElementById('daliy'),
    {
        type: 'line',
        data: data,
        scales: {
          y: { // defining min and max so hiding the dataset does not change scale range
            min: 0,
            max: 100
          }
        },
        options: {
            plugins: {
              customCanvasBackgroundColor: {
                color: '#fff',
              }
            }
          },
          plugins: [plugin],
    }
    );
})();
