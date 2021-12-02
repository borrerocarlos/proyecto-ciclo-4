import Cabecera from '../componentes/Cabecera';
import Menu from '../componentes/MenuAdmin';
import Pie from '../componentes/Pie';
import "../componentes/ListarOrdenes.css";

const Home = () => {
    return(
        <div>
            <Cabecera/>
            <Menu/>
            
            <Pie/>
        </div>
    )   
}

export default Home