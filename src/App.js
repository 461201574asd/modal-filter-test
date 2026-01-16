import GroupFilter from './GroupFilter/index';
import CommonModal from './CommonModal/index';
function App() {
    return (
        <div style={{ padding: '50px', minHeight: '100vh', background: '#f0f2f5' }}>
            <div style={{ marginBottom: 300 }}>
                <CommonModal  />
            </div>
            <GroupFilter />
        </div>
    );
}

export default App;

