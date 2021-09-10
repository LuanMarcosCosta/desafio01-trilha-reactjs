import { SideBar } from './components/SideBar';
import './styles/sidebar.scss';
import './styles/content.scss';
import './styles/global.scss';


export function App() {
    return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
        <SideBar />
    </div>)


}
