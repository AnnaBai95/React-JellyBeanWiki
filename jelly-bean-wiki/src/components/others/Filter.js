function Filter({onDietFilter}) {
  return (
    <div className="flex flex-col w-2/4">
      <label htmlFor="dietFilter" className="dietaryFilter">Filter</label>
      <select id="dietFilter" className="dietaryFilter" onChange={(e)=> onDietFilter(e.target.value)}>
        <option value="Kosher">All</option>
        <option value="Kosher">Kosher</option>
        <option value="Kosher">Gluten Free</option>
        <option value="Kosher">Sugar Free</option>
        <option value="Kosher">Seasonal</option>
      </select>
    </div>
  );
}

export default Filter;
