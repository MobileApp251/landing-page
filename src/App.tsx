import WellcomeSection from './components/WellcomeSection';
import ProjectOverview from './components/ProjectOverview';
import Features from './components/Features';
import Screen from './components/Screen';
import Technology from './components/Technology';
import Team from './components/Team';

function App() {

  return (
    <div className='bg-white'>
      <WellcomeSection></WellcomeSection>
      <ProjectOverview></ProjectOverview>
      <Features></Features>
      <Screen></Screen>
      <Technology></Technology>
      <Team></Team>
    </div>
  )
}

export default App
