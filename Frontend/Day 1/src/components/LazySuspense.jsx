import propTypes from 'prop-types'
import { Suspense } from 'react'
import loader from '../assets/images/loader.gif'


const LazySuspense = ({component:Component,...rest}) => {
  return (

      <Suspense fallback={<img src={loader} alt = 'Loader'/>}>
        <Component {...rest}/>
      </Suspense>

  )
}

LazySuspense.propTypes = {
    component : propTypes.element.isRequired
}

export default LazySuspense
