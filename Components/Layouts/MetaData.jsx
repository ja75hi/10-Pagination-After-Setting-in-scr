import React from 'react'
import { Helmet } from 'react-helmet-async'

const MetaData = ({Title}) => {
  return (
    
    <Helmet>
        <title>{`${Title}   - JVLcart`}</title>
    </Helmet>
    
  )
}

export default MetaData