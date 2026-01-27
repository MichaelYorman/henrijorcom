import '../../styles/Portfolio/List.css';

function List({currentSelectedItem,setCurrentSelectedItem,items}) {
  const handleSelectedItem = (id) => {
    // Toggle selection: deselect if clicked again
    setCurrentSelectedItem((prev) => (prev === id ? null : id));
  };
    return(
        <>
        <div>
            <div className="portfolio-list-box">
            <label>Portfolio List</label>
            <div className="portfolio-list-content">
            {items.length > 0 ? items.map(item => (
                <div className="portfolio-list-item" key={item.id} onClick={() => handleSelectedItem(item.id)}>
                <p>{item.name}</p>
                </div>
          )) : (
            <div className="portfolio-list-item">
            <h4>You have nothing here yet...</h4>
            </div>)}
            </div>
            </div>
        </div>
        </>
    )
}

export default List;