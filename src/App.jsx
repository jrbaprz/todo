import { useState } from 'react'

function App() {
  const [todo, setTodo] = useState("")

  return (
    <>
      <h1 className="flex justify-center mt-8 text-3xl tracking-widest">checkmark.</h1>
      
      <div className="flex justify-center mt-10">
          <input 
              type="text" 
              placeholder="What would you like to do?" 
              className="w-2/3 py-2 px-4 mr-2 rounded shadow-xl font-light focus:outline-none focus:shadow-lg focus:shadow-slate-200 duration-100 shadow-gray-100 lg:w-1/3" 
          />
          <button className="px-4 rounded shadow-sm font-light outline-slate-300 bg-[#ECEBE7] ">+</button>
      </div>
    </>
  )
}

export default App
