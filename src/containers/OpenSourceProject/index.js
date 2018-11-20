import React from 'react';
import { withRouter } from 'react-router';
import Graph from '../Projects/Graph'

import constants from './constants'

function mapProject(project){
  console.log(constants[project]);
  return constants[project]
}

function OpenSourceProject(props){
  return React.createElement(mapProject(props.match.params.project))
}
export default withRouter(OpenSourceProject)