import { useState } from 'react'

function App() {
  const [item, setItem] = useState("")
  const [list, setList] = useState([])

  const deleteItem = (text) => {
    const newList = list.filter((item) => {
      return item !== text;
    });
    setList(newList)
  }

  return (
    <>
      <h1 className="flex justify-center mt-8 text-3xl tracking-widest">check.</h1>

      <div className="box-border mx-auto w-80 m-10 md:w-96">
        <div className="flex">
          <input 
              type="text"
              value={item}
              placeholder="What would you like to do?" 
              className="w-full py-2 px-4 mr-2 rounded shadow-xl font-light focus:outline-none focus:shadow-lg focus:shadow-slate-200 duration-100 shadow-gray-100" 
              onChange={(e) => {
                setItem(e.target.value)
              }}
          />
          <button 
            className="px-4 rounded shadow-sm font-light outline-slate-300 bg-[#ECEBE7] hover:bg-[#E1DFDB] transition duration-300"
            onClick={() => {
              if (item !== "") {
                setList(list.concat(item))
                setItem("")
            }}
          }
          >+</button>
        </div>

        {list.length > 0 ? (
          <ul className="flex mt-10 flex-col gap-5">
            {list.map((item, index) => (
              <div className="flex ml-4">          
                <button 
                  className="px-2 mr-3 rounded shadow-sm font-light outline-slate-300 bg-[#ECEBE7] hover:bg-[#E1DFDB] transition duration-300"
                  onClick={() => {
                    deleteItem(item)
                  }}
                  >-</button>
                <li key={index} className="flex tracking-widest text-sm font-semibold items-center">{item}</li>
              </div>
            ))}
          </ul>) : (
            <h1 className="flex justify-center items-center text-sm tracking-widest font-semibold mt-12">finished</h1>
          )}
      </div>
    </>
  )
}

export default App