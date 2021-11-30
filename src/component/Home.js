import Countries from "./Countries";
import ContainerDisplay from "./ContainerDisplay"

const Home = ({ countries }) => {
    return(
    <div>
        <ContainerDisplay/>
        <Countries countries={countries}/>
    </div>
    );
}

export default Home;