function Filter({onDietFilter}) {
  return (
    <div className="flex flex-col w:full lg:w-2/4">
      <label htmlFor="dietFilter" className="dietaryFilter font-semibold">Filter dietary restrictions</label>
      <select id="dietFilter" className="dietaryFilter" onChange={(e)=> onDietFilter(e.target.value)}>
        <option value="all">All</option>
        <option value="kosher">Kosher</option>
        <option value="glutenFree">Gluten Free</option>
        <option value="sugarFree">Sugar Free</option>
        <option value="seasonal">Seasonal</option>
      </select>
    </div>
  );
}

export default Filter;
