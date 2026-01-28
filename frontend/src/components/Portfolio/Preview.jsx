import '../../styles/Portfolio/Preview.css';

function Preview({id,data,error}) {

    if (!id||!data) return (
      <>
      <div>
      <div className="portfolio-preview-box">
        <label>Portfolio Preview</label>
          <div className="portfolio-preview-content">
          <div className="portfolio-preview-image"></div>
          <p>CLICK PROJECT TO VIEW!</p>
          </div>
          </div>
          </div>
          </>);
    return(
        <>
        <div>
            <div className="portfolio-preview-box">
            <label>Portfolio Preview</label>
            <div className="portfolio-preview-content">
            <div className="portfolio-preview-image"></div>
            <div className="portfolio-preview-item">
            <h2 className="portfolio-preview-header">Project name</h2>
            <div className="portfolio-preview-text">{data.name}</div>
            </div>
            <div className="portfolio-preview-item">
            <h2 className="portfolio-preview-header">Role</h2>
            <div className="portfolio-preview-text">{data.role}</div>
            </div>
            <div className="portfolio-preview-item">
            <h2 className="portfolio-preview-header">Field</h2>
            <div className="portfolio-preview-text">{data.field}</div>
            </div>
            <div className="portfolio-preview-item">
            <h2 className="portfolio-preview-header">Description</h2>
            <div className="portfolio-preview-text">{data.description}</div>
            </div>
            <div className="portfolio-preview-item">
            <h2 className="portfolio-preview-header">Status</h2>
            <div className="portfolio-preview-text">{data.status}</div>
            </div>
            <div className="portfolio-preview-item">
            <h2 className="portfolio-preview-header">Time</h2>
            <div className="portfolio-preview-text">{data.timeline.start_year}</div>
            <div className="portfolio-preview-text">{data.timeline.end_year}</div>
            </div>
            </div>
            </div>
        </div>
        </>
    )
}

export default Preview;