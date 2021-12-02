import '../styles.css';

const Pie = () => {
    return (
        <footer>
            <div className="row fluid" id="footer">
                <div className="col-8">
                    <img src="./agente.jpg" alt="" id="call"/>
                    <p>Línea Nacional: 01 8000 37 94</p>
                </div>
                <div className="col 4" style={{ 'margin-top': '3%' }}>
                    <a href="#"><img src="./facebook.jpg" alt="faceboock" className="redes"/></a>
                    <a href="#"><img src="./instagram.jpg" alt="instagram" className="redes"/></a>
                    <a href="#"><img src="./twitter.jpg" alt="twitter" className="redes"/></a>
                </div>
            </div>
        </footer>
    )
}

export default Pie
