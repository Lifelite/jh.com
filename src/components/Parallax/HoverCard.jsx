export function HoverCard() {
    return (
        <div className="card">
            <div className="image">
                <img
                    src="http://1.bp.blogspot.com/-EhPr4LXcywE/Udr594sPHTI/AAAAAAAAAJ4/Tv4y4CBLTPM/s400/Cristina-Otero-2.jpg"/>
            </div>
            <div className="details">
                <div className="center">
                    <h1>Someone famous<br/><span>team leader</span></h1>
                    <p>Lorem ipsum is simple dummy text on the printing and typesetting industry.</p>
                    <ul>
                        <li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i className="fa fa-google-plus" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}