import React from 'react'

const filterData = [
    {
        filterType:"Location",
        array:["Delhi NCR" , "Bangalore" , "Hyderbad" ,"Pune" , "Mumbai"]
    },
    {
        filterType:"Industry",
        array:["Frontend Developer" , "Backend Developer" , "Fullstack Developer"]
    },
    {
        filterType:"Salary",
        array:["0-4k" , "42-11lakh" , "1lakh to 5lakh"]
    }

]

const FilterCard = () => {
  return (
    <div>
        <h1>Filter Jobs</h1>
        <hr className='mt-3'/>
    </div>
  )
}

export default FilterCard