


// chart

(async function() {
    const data = [
    { month: "Jan", count: 5 },
    { month: "Feb", count: 30 },
    { month: "Mar", count: 2 },
    { month: "Apr", count: 20 },
    { month: "May", count: 22 },
    { month: "Jun", count: 14 },
    { month: "Jul", count: 28 },
    ];

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
        data: {
        labels: data.map(row => row.month),
        datasets: [
            {
            backgroundColor: '#000',
            label: 'Acquisitions by year',
            data: data.map(row => row.count)
            }
        ]
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
