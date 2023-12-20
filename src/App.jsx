import { useState } from 'react'
import useCurrencyInfo from "./Hooks/useCurrencyInfo.jsx";
import {InputBox} from "./component/index.jsx";

function App() {
const [amount,setAmount] = useState(0);
const [from , setFrom] = useState('pln');
const [to , setTo] = useState('azn');
const [convertedAmount , setConvertedAmount] = useState(0);

const currencyInfo = useCurrencyInfo(from);
const options =  Object.keys(currencyInfo)

const swap = () =>{
    setTo(from);
    setFrom(to);
    setConvertedAmount(amount);
    setAmount(convertedAmount)
}


    const convert = () => {
    setConvertedAmount( amount * currencyInfo[to])
    }


  return (
      <div className='w-full h-screen flex justify-center items-center bg-cover bg-no-repeat'
           style={{backgroundImage: `url(https://images.pexels.com/photos/534216/pexels-photo-534216.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)`}}>

          <div className='w-full'>
              <div className='w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30'>
                  <form onSubmit={(e) => {
                      e.preventDefault()
                      convert()
                  }}>
                      <div className='w-full mb-1'>
                          <InputBox
                              label={from}
                              amount={amount}
                              currencyOption={options}
                              onCurrencyChange={(currency) => setFrom(currency)}
                              onAmountChange={(amount) => setAmount(amount)}
                              selectedCurrency={from}
                          />
                      </div>

                      <div className='relative w-full h-0.5'>
                          <button
                              className='absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-05'
                              onClick={swap}
                          >SWAP
                          </button>
                      </div>


                      <div className='w-full mb-1'>
                          <InputBox
                              label={to}
                              amount={convertedAmount}
                              currencyOption={options}
                              onCurrencyChange={(currency)=>setTo(currency)}
                              selectedCurrency={to}
                              amountDisable={true}
                          />
                      </div>

                      <button
                            className='w-full bg-blue-600 text-white px-4 py-3 rounded-lg'
                            title='submit'
                      >Convert {from.toUpperCase()} to {to.toUpperCase()}</button>
                  </form>

              </div>
          </div>

      </div>


  )
}

export default App
