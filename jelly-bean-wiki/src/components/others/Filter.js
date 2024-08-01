function Filter() {
  return (
    <div className="flex flex-col w-2/4">
      <label className="dietaryFilter">Filter</label>
      <select className="dietaryFilter">
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
