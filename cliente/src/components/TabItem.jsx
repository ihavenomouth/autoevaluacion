function TabItem({título,nombreTabs, svg, defaultChecked=false,children}) {
  return (
    <>
      <label className="tab">
        <input type="radio" name={nombreTabs} defaultChecked={defaultChecked}/>
        {svg}
        {título}
      </label>
      <div className="tab-content bg-base-100 border-base-300 p-6">{children}</div>
    </>
  );
}

export default TabItem;
