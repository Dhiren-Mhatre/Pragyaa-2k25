import { Routes, Route } from 'react-router-dom'; 
import DetailCompitation from './DetailCompitation';
import Compitation from './Compitations';

const CompitationSection = () => {
    return (
        <Routes>
            <Route path="/" element={<Compitation />} />
            <Route path="/title" element={<DetailCompitation />} />
        </Routes>
    );
}

export default CompitationSection;
