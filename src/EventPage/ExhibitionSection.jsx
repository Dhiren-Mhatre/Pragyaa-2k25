<<<<<<< HEAD
import { Routes, Route } from 'react-router-dom'; 
import Exhibition from './Exibision/Exhibition';
import DetailExhibition from './DetailExhibition';

const ExhibitionSection = () => {
    return (
        <Routes>
            <Route path="/" element={<Exhibition />} />
            <Route path="/title" element={<DetailExhibition />} />
        </Routes>
    );
}

=======
import { Routes, Route } from 'react-router-dom'; 
import Exhibition from './Exibision/Exhibition';
import DetailExhibition from './DetailExhibition';

const ExhibitionSection = () => {
    return (
        <Routes>
            <Route path="/" element={<Exhibition />} />
            <Route path="/title" element={<DetailExhibition />} />
        </Routes>
    );
}

>>>>>>> upstream/master
export default ExhibitionSection;