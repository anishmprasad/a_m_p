import React from 'react';
import { withRouter } from 'react-router';
import Graph from '../Projects/Graph'

import constants from './constants'

function mapProject(project){
  return constants[project]
}

function OpenSourceProject(props){
  return React.cloneElement(mapProject(props.match.params.project))
}
export default withRouter(OpenSourceProject)