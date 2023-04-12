import "./TeamCard.css"


export default function TeamCard({src,name,jobName}) {
  return (
    <div className="TeamCard-container">
        <img loading="lazy" src={src} alt="" />
        <div className="TeamCard-overlay">
    
        </div>
        <h3 className="TeamCard-name">{name}</h3>
        <p className="TeamCard-jobName">{jobName}</p>
    </div>
  )
}
