import { useHistory } from 'react-router-dom';
import styles from './index.module.scss'

function Home() {

  const history = useHistory<{ from: string }>()

  const handleRouterPush = () => {
    history.push('/login', {
      from: 'home'
    })
  }

  return (
    <div className={styles.root}>
      <div className='home'>
        <button onClick={handleRouterPush}>跳转到Login</button>
      </div>
    </div>
  );
}

export default Home;
