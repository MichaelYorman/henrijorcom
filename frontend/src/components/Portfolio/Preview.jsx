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
            <div className="portfolio-preview-header">Project name</div>
            <div className="portfolio-preview-text">{data.name}</div>
            <div className="portfolio-preview-header">Role</div>
            <div className="portfolio-preview-text">{data.role}</div>
            <div className="portfolio-preview-header">Field</div>
            <div className="portfolio-preview-text">{data.field}</div>
            <div className="portfolio-preview-header">Description</div>
            <div className="portfolio-preview-text">{data.description}</div>
            <div className="portfolio-preview-header">Status</div>
            <div className="portfolio-preview-text">{data.status}</div>
            <div className="portfolio-preview-header">Time</div>
            <div className="portfolio-preview-text">{data.time}</div>
            </div>
            </div>
        </div>
        </>
    )
}

export default Preview;