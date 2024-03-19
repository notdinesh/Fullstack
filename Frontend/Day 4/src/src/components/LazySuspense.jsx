import propTypes from 'prop-types'
import { Suspense } from 'react'
import loader from "../assets/images/loader.gif"

function LazySuspense ({component:Component, ...rest}) {
    return (
        <Suspense fallback={<img src={loader} alt='Loader'/>} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <Component {...rest}/>
        </Suspense>
    )
}

LazySuspense.propTypes = {
    component:propTypes.element.isRequired
}

export default LazySuspense
