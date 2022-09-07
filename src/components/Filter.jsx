import React from 'react'

const Filter = ({filterBy, setFilterBy, categories}) => {
    function handleFilterChange(e){
        setFilterBy(e.target.value)
      }
      const categoryOptions = categories.map((cat)=>{
        return <option key={cat.id} value={cat.id}>{cat.title}</option>
    })
    return (
    <div  style={{textAlign: "center"}}>
        <label>
    <select className="filter" onChange={handleFilterChange} value={filterBy}>
      <option>All...</option>
      {categoryOptions}
    </select>
   </label></div>
  )
}

export default Filter