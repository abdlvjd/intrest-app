import { useState } from 'react';
import './App.css';
import { TextField, Stack, Button } from '@mui/material';


function App() {
  const [interest, setInterest] = useState(0)
  const [principle, setPrinciple] = useState(0)
  const [rate, setRate] = useState(0)
  const [year, setYear] = useState(0)
  const [validPrinciple, setValidPrinciple] = useState(true)
  const [validRate, setValidRate] = useState(true)
  const [validYear, setValidYear] = useState(true)
  const handleCalculate = (e) => {
    e.preventDefault()
    if (!principle || !rate || !year) {
      alert("Please fill the form!!!")
    }
    else {
      setInterest(principle * rate / 100 * year)
    }
  }

  const validateUserInput = (e) => {
    // {key}=object
    const { name, value } = e.target
    if (!!value.match(/^[0-9]+$/)) {
      //valid expression
      if (name === "principle") {
        setPrinciple(value)
        setValidPrinciple(true)
      }

      else if (name === 'rate') {
        setRate(value)
        setValidRate(true)
      }

      else if (name === 'year') {
        setYear(value)
        setValidYear(true)
      }
    }

    else {
      //invalied expression
      if (name === "principle") {
        setPrinciple(value)
        setValidPrinciple(false)
      }

      if (name === "rate") {
        setRate(value)
        setValidRate(false)
      }

      if (name === "year") {
        setYear(value)
        setValidYear(false)
      }
    }
  }

  const handleReset = () => {
    setInterest(0)
    setPrinciple(0)
    setRate(0)
    setYear(0)
  }
  return (
    <div style={{ height: "100vh" }} className='d-flex justify-content-center align-items-center w-100 bg-dark'>
      <div style={{ width: "500px" }} className='bg-light p-5 rounded'>
        <h1>Simple Interest App</h1>
        <p>Calculate your simple intrest easily</p>
        <div style={{ height: "150px" }} className='interest-card w-100 bg-warning d-flex flex-column justify-content-center
         align-items-center rounded shadow text-light mt-5' >
          <h1> ₹ {''} {interest}</h1>
          <p>Total Simple Interest</p>
        </div>

        <form className='mt-5' onSubmit={handleCalculate}>
          <div className='mt-3'>
            <TextField className='w-100' id="outlined-basic1" label="₹ Principle Amount" variant="outlined" value={principle || ""} name='principle' onChange={(e) => validateUserInput(e)} />
          </div>

          {
            !validPrinciple &&
            <div className='mt-2 text-danger fw-bolder'>
              *Invalid principle Amount
            </div>
          }

          <div className='mt-3'>
            <TextField className='w-100' id="outlined-basic2" label="Rate of Intrest (p.a) %" variant="outlined" value={rate || ""} name='rate' onChange={(e) => validateUserInput(e)} />
          </div>

          {
            !validRate &&
            <div className="mt-2 text-danger fw-bolder">
              *Invalid Rate
            </div>
          }

          <div className='mt-3'>
            <TextField className='w-100' id="outlined-basic3" label="Time Period (Yr)" variant="outlined" value={year || ""} name='year' onChange={(e) => validateUserInput(e)} />
          </div>

          {
            !validYear &&
            <div className="mt-2 text-danger fw-bolder">
              *Invalid year
            </div>
          }

          <Stack className='mt-3' direction="row" spacing={2}>
            <Button type='submit' style={{ height: "70px", width: "250px" }} className='bg-dark' variant="contained" disabled={validPrinciple && validRate && validYear ? false : true}>Calculate</Button>
            <Button onClick={handleReset} style={{ height: "70px", width: "250px" }} variant="outlined">Reset</Button>
          </Stack>

        </form>

      </div>
    </div>
  );
}

export default App;
