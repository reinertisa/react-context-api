import SongList from "./components/SongList";
import Navbar from "./components/Navbar";
import ThemeContextProvider from "./contexts/ThemeContext";
import AuthContextProvider from "./contexts/AuthContext";
import SongContextProvider from "./contexts/SongContext";
import NewSongForm from "./components/SongForm";


function App() {
    return (
        <div className="App">
            <ThemeContextProvider>
                <AuthContextProvider>
                    <Navbar />
                    <SongContextProvider>
                        <SongList />
                        <NewSongForm />
                    </SongContextProvider>
                </AuthContextProvider>
            </ThemeContextProvider>
        </div>
    );
}

export default App;
