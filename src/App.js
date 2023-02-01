import './App.css';
import PetOwnerStore from "./PetOwnerStore";
import PetList from "./components/PetList";
import OwnerList from "./components/OwnerList";

function App() {
    const store = new PetOwnerStore();

    return (
        <div className="App">
            <h3>Pet List</h3>
            <PetList store={store} />
            <hr />
            <hr />
            <h3>Owner List</h3>
            <OwnerList store={store} />
        </div>
    );

}

export default App;
