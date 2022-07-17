import FavePlaces from "./FavePlaces";

function MainContent(): JSX.Element{
    return(
        <main>
            <FavePlaces
                image={"https://chooseyourcyprus.com/images/Blog/Various/Cyprus-Unspoiled-Hideaway-Beaches-in-the-South-Coast/Tripiti-Beach-Zapalo-02.jpg"}
                title={"Cypriot Beaches"}
                location={"Karpasia, Cyprus"}
                description={"One of the best beaches in the world!"}
                mapLink={"https://goo.gl/maps/7hfZGGjHcoCDiWdv9"}
            />
            <FavePlaces
                image={"https://media2.hemisgalerie.com/21006-thickbox_default/0367046.jpg"}
                title={"Paris"}
                location={"Paris, France"}
                description={"It's such a fun and inspiring city!"}
                mapLink={"https://goo.gl/maps/z6pCs8iywmG61aGu8"}
            />    
        </main>
    )
}
export default MainContent 