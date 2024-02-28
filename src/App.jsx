import Header from "./components/Header";
import RepeatText from "./components/RepeatText";
import List from "./components/List";
import Counter from "./components/Counter";
import Check from "./components/Check";
import Radio from "./components/Radio";

const App = () => {
    return (
        <>
        
        <Header headerText="Steg 4 avklarat" />
        <RepeatText count="7" text="EN liten text" />
        <List animalArray={["Häst", "Ko", "Hund", ]}/>
        <Counter />
        <Check />
        <Radio />
        </>

    )
};

export default App;