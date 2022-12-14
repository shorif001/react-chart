import logo from "./logo.svg";
import "./App.css";
import Chart from "react-apexcharts";
import { useEffect, useState } from "react";

function App() {
  const [countryname, setCountryname] = useState([]);
  const [medal, setMedal] = useState([]);

  useEffect(() => {
    const countryName = [];
    const getmedal = [];

    const getData = async () => {
      const reqData = await fetch("http://lljljlj.com/kljfds");
      const resData = await reqData.json();
      // console.log(resData)
      for (let i = 0; i < resData.length; i++) {
        countryName.push(resData[i].country);
        getmedal.push(parseInt(resData[i].medals));
      }
      // console.log(countryName)
      // console.log(getmedal)
      setCountryname(countryName);
      setMedal(getmedal);
    };
    getData();
  }, []);

  //   // var xAxis = staggerLabels.xAxis();
  //   const xaxis = new staggerLabels.xaxis();
  //   xaxis.staggerMode(true);
  // // adjusting settings for stagger mode
  // xaxis.staggerLines(2);

  return (
    <div className="App">
      <div>
        <p>
          https://apexcharts.com/javascript-chart-demos/ <br />
          npm install react-apexcharts apexcharts <br />
          import Chart from 'react-apexcharts'
        </p>
      </div>
      <div className="donutChart">
        <Chart
          type="donut"
          width={1349}
          height={550}
          // series={[20, 67]}
          series={medal}
          options={{
            // labels: ["usa", "china",],
            labels: countryname,
            title: {
              text: "Medal Country Name",
            },
            plotOptions: {
              pie: {
                donut: {
                  labels: {
                    show: true,
                    total: {
                      show: true,
                      fontSze: 30,
                      color: "red",
                    },
                  },
                },
              },
            },
            dataLabels: {
              enabled: false,
            },
          }}
        ></Chart>
      </div>

      <div className="pieChart">
        <Chart
          type="pie"
          width={600}
          height={600}
          series={[20, 67, 35]}
          options={{
            labels: ["usa", "china"],
            title: {
              text: "Medal Country Name",
            },
            plotOptions: {
              pie: {
                donut: {
                  labels: {
                    show: true,
                    total: {
                      show: true,
                      fontSze: 30,
                    },
                  },
                },
              },
            },
            dataLabels: {
              enabled: false,
            },
          }}
        ></Chart>
      </div>

      <div className="donutChart2">
        <Chart
          type="donut"
          width={600}
          height={600}
          series={[20, 67]}
          options={{
            labels: ["usa", "china"],
            title: {
              text: "Medal Country Name",
            },
            plotOptions: {
              pie: {
                donut: {
                  labels: {
                    show: true,
                    total: {
                      show: true,
                      fontSze: 30,
                      color: "red",
                    },
                  },
                },
              },
            },
            dataLabels: {
              enabled: false,
            },
          }}
        ></Chart>
      </div>

      <div className="barChart">
        <Chart
          type="bar"
          width={800}
          height={430}
          series={[
            {
              name: "HydroElectric",
              data: [45, 78, 98, 32, 65, 54],
              // color: "#006F40",
            },
            // {
            //   name: "HydroElectric",
            //   data: [145, 78, 98, 32, 65, 54],
            //   // color: "#006F40",
            // },
            // { name: "dfdfd", data: [54, 47, 49, 12, 35] },
          ]}
          options={{
            colors: [
              "#cc0000",
              "#ff4000",
              "#ffbf00",
              "#40ff00",
              "#00ffff",
              "#0000ff",
            ],
            title: {
              text: "Enegry consumption in years",
            },
            plotOptions: {
              bar: {
                horizontal: false,
                columnWidth: "50%",
                distributed: true,

                dataLabels: {
                  // orientation: 'horizontal',
                  position: "end",
                },
              },
            },
           
            
            dataLabels: {
              enabled: false,
              style: {
                fontSize: "12px",
                colors: ["#000"],
              },
            },

            xaxis: {
              categories: [
                ["2021-202", "প্রাক-প্রাথমিক"],
                ["2021-2022", "সহজ কোরআন শিক্ষা"],
                ["2021-2022", "সহজ কোরআন শিক্ষা (বয়স্ক)"],
              ],

              title: {
                // text: "energy consumption in year's",
              },
            },
            yaxis: {
              title: {
                text: "data in (K)",
              },
            },
          }}
        ></Chart>
      </div>

      <div className="lineChart">
        <Chart
          type="bar"
          width={600}
          height={300}
          series={[
            {
              name: "company 1",
              data: [145, 178, 198],
              // color: "#006F40",
            },
            {
              name: "company 2",
              data: [245, 278, 298],
            },
            {
              name: "company 3",
              data: [245, 278, 298],
            },
          ]}
          options={{
            colors: ["#ff0000", "#f0f", "#000"],
            title: {
              text: "Enegry consumption in years",
            },
            // chart: {
            //   stacked: true,
            // },

            plotOptions: {
              bar: {
                horizontal: true,
                columnWidth: "55%",
                dataLabels: {
                  position: "end",
                },
              },
            },
            // stroke: {
            //   show: true,
            //   width: 2,
            //   colors: ["#000"],
            // },
            dataLabels: {
              enabled: true,
              style: {
                fontSize: "12px",
                colors: ["#000"],
              },
            },
            // dataLabels: {
            //   enabled: false,
            //   offsetX: -6,
            //   style: {
            //     fontSize: "12px",
            //     colors: ["#fff"],
            //   },
            // },

            xaxis: {
              categories: [1, 2, 3],
              title: {
                // text: "energy consumption in year's"
              },
              // categories:['2017', '2018', '2020', '2021']
            },
            yaxis: {
              // title:{
              //   text:"data in (K)"
              // },
            },
            legend: {
              // position:"top"
            },

            grid: {
              show: true,
              // row: {
              //   colors: ['#F44336', '#E91E63', '#9C27B0']
              // },
              // column: {
              //   colors: ['#F44336', '#E91E63', '#9C27B0']
              // }
            },
          }}
        ></Chart>
      </div>
    </div>
  );
}

export default App;
