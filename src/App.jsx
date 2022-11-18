import { useState } from 'react'

function App() {
  const [item, setItem] = useState("")
  const [list, setList] = useState([])

  const addItem = () => {
    if (item !== "") {
      setList(list.concat(item))
      setItem("")
    }
  }

  return (
    <>
      <h1 className="flex justify-center mt-8 text-3xl tracking-widest">checkmark.</h1>

      <div className="flex justify-center mt-10">
          <input 
              type="text" 
              placeholder="What would you like to do?" 
              className="w-2/3 py-2 px-4 mr-2 rounded shadow-xl font-light focus:outline-none focus:shadow-lg focus:shadow-slate-200 duration-100 shadow-gray-100 lg:w-1/3" 
              onChange={(e) => {
                setItem(e.target.value)                
              }}
          />
          <button 
            className="px-4 rounded shadow-sm font-light outline-slate-300 bg-[#ECEBE7] hover:bg-[#E1DFDB] transition duration-300"
            onClick={addItem}
          >+</button>
      </div>

      <div className="flex mx-20 mt-10">
          <li className='flex flex-col'>
            {list}
          </li>
      </div>
    </>
  )
}

export default App