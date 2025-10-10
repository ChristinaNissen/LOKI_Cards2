import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ConsentForm from './Components/ConsentForm';
import StudyInfo1 from './Components/StudyInfo1';
import Welcome from './Components/Welcome';
import Login from './Components/Login';
import VotedBefore from './Components/VotedBefore';
import Voting from './Components/Voting';
import BallotConfirmation from './Components/BallotConfirmation';
import StudyInfo2 from './Components/StudyInfo2';
import VisualSelection from './Components/VisualSelection';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ConsentForm />} />
        <Route path="/studyinfo1" element={<StudyInfo1 />} />
        <Route path="/login" element={<Login />} />
        <Route path="/votedbefore" element={<VotedBefore />} />
        <Route path="/voting" element={<Voting />} />
        <Route path="/confirmation" element={<BallotConfirmation />} />
        <Route path="/studyinfo2" element={<StudyInfo2 />} />
        <Route path="/selection" element={<VisualSelection />} />
        <Route path="/welcome" element={<Welcome />} />



        </Routes>
    </Router>
  );
}

export default App;
