


// chart

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
