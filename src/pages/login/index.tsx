import { useLocation, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { RootState } from '../../store'

import styles from './index.module.scss'

const Login = () => {

  const params = useParams()
  const location = useLocation()
  console.log(params, location)

  const store = useSelector((state: RootState) => state.base)
  console.log(store)

  return (
    <div className={styles.root}>
      <div className="login">
        Login

        <input type="text" />
      </div>
    </div>
  )
}

export default Login
