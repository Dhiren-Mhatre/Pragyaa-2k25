import { Routes, Route } from 'react-router-dom';
import Fungame from './Fungame';
import DetailFungame from './DetailFungame';

const FunGameSection = () => {
    return (
        <Routes>
            <Route path="/" element={<Fungame />} />
            <Route path="/detail/:title" element={<DetailFungame />} />
        </Routes>
    );
}

export default FunGameSection;