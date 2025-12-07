import WellcomeSection from './components/WellcomeSection';
import ProjectOverview from './components/ProjectOverview';
import Features from './components/Features';
import Screen from './components/Screen';

function App() {

  return (
    <div className='bg-white'>
      <WellcomeSection></WellcomeSection>
      <ProjectOverview></ProjectOverview>
      <Features></Features>
      <Screen></Screen>
    </div>
  )
}

export default App
