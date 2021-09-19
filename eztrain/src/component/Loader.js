import React from 'react'
import { Dimmer, Loader } from 'semantic-ui-react'

const LoaderComponent = ({ text, icon }) => (
    <Dimmer active>
        <Loader indeterminate>{text}{icon}</Loader>
    </Dimmer>
)

export default LoaderComponent