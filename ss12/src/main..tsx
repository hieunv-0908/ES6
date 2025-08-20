import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ListCourse from './ListCourse'; 
import { Addition, Subtraction, Multiplication, Division } from './Calculation';
import PrintInfoUser from './UserInfo';
import './index.css'
import ColorBlock from './ColorBox.tsx';

createRoot(document.getElementById('ListCourse')!).render(
    <StrictMode>
       <ListCourse />
    </StrictMode>
);

createRoot(document.getElementById('Caculation')!).render(
    <StrictMode>
       <Addition a={10} b={5} />
       <Subtraction a={10} b={5} />
       <Multiplication a={10} b={5} />
       <Division a={10} b={5} />
    </StrictMode>
);


createRoot(document.getElementById('PrintUserInfo')!).render(
    <StrictMode>
        <PrintInfoUser />
    </StrictMode>
);

createRoot(document.getElementById('ColorBox')!).render(
    <StrictMode>
        <ColorBlock />
    </StrictMode>
);
    