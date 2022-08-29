import React from 'react'

const Filter = ({filterBy, setFilterBy}) => {
    function handleFilterChange(e){
        setFilterBy(e.target.value)
      }
    return (
    <div  style={{textAlign: "center"}}>
        <label>
    <select className="filter" onChange={handleFilterChange} value={filterBy}>
      <option value="All">Filter by...</option>
      <option value="Daily">Daily</option>
      <option value="Weekly">Weekly</option>
      <option value="Yearly">Yearly</option>
    </select>
   </label></div>
  )
}

export default Filter