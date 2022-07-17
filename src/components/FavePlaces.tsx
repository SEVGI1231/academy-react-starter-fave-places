interface FavePlacesProps{
    image: string;
    title: string;
    location: string;
    description: string;
    mapLink: string;

}
function FavePlaces(props: FavePlacesProps): JSX.Element {
    return(
        <div className="section">
           <img src={props.image} className="image"/>
           <div className="title">
                <h2>{props.title}</h2>
            </div>
            <div className="location">
                <p>{props.location} <a href={props.mapLink} target="_blank">(map link)</a></p>
            </div>
            <div className="description">
                <p>{props.description}</p>
            </div>
        </div>
    )

}
export default FavePlaces