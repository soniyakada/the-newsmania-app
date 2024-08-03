import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Covid = () => {
  const [covidData, setCovidData] = useState(null);

  useEffect(() => {
    axios.get('https://disease.sh/v3/covid-19/all')
      .then(response => {
        setCovidData(response.data);
      })
      .catch(error => {
        console.error('Error fetching the COVID-19 data', error);
      });
  }, []);

    return (
    <div className='text-white flex justify-center gap-5 mt-3 border-y-4 border-indigo-500 p-3'>
      <h1>COVID-19 Tracker</h1>
      {covidData ? (
        <div className='text-white  flex justify-between gap-8'>
          <p>Cases: {covidData.cases}</p>
          <p>Deaths: {covidData.deaths}</p>
          <p>Recovered: {covidData.recovered}</p>
        </div>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
};

export default Covid;