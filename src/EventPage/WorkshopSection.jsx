import { Routes, Route } from 'react-router-dom'; 
import Workshop from './Workshop';
import DetailWorkshop from './DetailWorkshop'

const WorkshopSection = () => {
    return (
        <Routes>
            <Route path="/" element={<Workshop />} />
            <Route path="/detail/:title" element={<DetailWorkshop />} />
        </Routes>
    );
}

export default WorkshopSection;
