import React, { useState } from 'react'

const App = () => {
 
  const [title, setTitle] = useState('');
  const [details, setDetails] = useState('');

  const [task, setTask] = useState([]);

  const submitHandler = (e)=>{
      e.preventDefault();
      // console.log(title,details);

      const copyTask = [...task];
      copyTask.push({title,details});
      setTask(copyTask);
      console.log(task)

      setTitle('');
      setDetails('');
  }
  const deleteNote = (idx)=>{
    const copyTask = [...task];
    copyTask.splice(idx,1)
    setTask(copyTask);
  }
 
  return (
    <div className='h-screen lg:flex  bg-black text-white '>

        <form onSubmit={(e)=>{
          submitHandler(e);
        }} className='flex gap-4 lg:w-1/2 flex-col items-start p-10'>

              <h1 className='text-4xl font-bold'>Add Notes</h1>
              {/* Pehla input for heading */}

              <input
                type="text" 
                placeholder='Enter task heading' 
                className='p-5 w-full font-medium border-2 outline-none rounded' 
                value={title}
                onChange={(e)=>{
                  setTitle(e.target.value)
                }}
              />
              {/* Detail wala input */}
              <textarea 
                type="text"
                className='px-5 w-full h-32 py-2 font-medium flex items-start flex-row border-2 outline-none rounded'
                placeholder='Write Details Here'
                value={details}
                onChange={(e)=>{
                  setDetails(e.target.value);
                }}
              />
            <button className='bg-white w-full active:scale-95 font-medium text-black px-5 py-2 outline-none rounded'>Add Notes</button>
        </form>
        <div className='lg:w-1/2 p-10 lg:border-l-2'>
          <h1 className='text-4xl font-bold'>Recent Notes</h1>
          <div className='flex gap-5 items-start justify-start flex-wrap mt-5 overflow-auto h-[90%]'>
            {task.map(function(ele,idx){

            
              return <div key={idx} className='flex justify-between items-start flex-col relative h-52 w-40 rounded-2xl bg-cover text-black px-4 pt-9 pb-4 bg-[url("https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png")]'>
                <div>
                  <h3 className='leading-tight text-lg font-bold'>{ele.title}</h3>
                  <p className='mt-3 leading-tight text-xs font-semibold text-gray-600 max-h-20 overflow-y-auto'>{ele.details}</p>
                </div>
                <button onClick={()=>{
                    deleteNote(idx);
                }} className='bg-red-500 cursor-pointer active:scale-95 text-white w-full py-1 text-xs rounded font-bold '>Delete</button>
                
              </div>
            })}
          </div>
        </div>
    </div>
  )
}

export default App
