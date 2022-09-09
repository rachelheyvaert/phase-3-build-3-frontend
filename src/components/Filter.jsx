import React from 'react'

const Filter = ({filterBy, setFilterBy, categories, handleFilterChange }) => {

    function handleChange(e){
        // setFilterBy(e.target.value)
       handleFilterChange(e)
      }
      const categoryOptions = categories.map((cat)=>{
        return <option key={cat.id} value={cat.title}>{cat.title}</option>
    })
    return (
    <div  style={{textAlign: "center"}}>
        <label>
    <select className="filter" onChange={handleChange} value={filterBy}>
      <option>Filter by categories</option>
      {categoryOptions}
    </select>
   </label></div>
  )
}

export default Filter