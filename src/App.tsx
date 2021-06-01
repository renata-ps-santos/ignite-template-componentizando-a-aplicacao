import { SideBar } from './components/SideBar';
// import { Content } from './components/Content';

import './styles/global.scss';

import './styles/content.scss';


export function App() {

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
     <SideBar />

     
    </div>
  )
}