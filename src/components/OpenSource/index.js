import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import './index.scss'

import { fetchOpenSource } from '../../actions/OpenSource'

class OpenSource extends Component {
  state = {
    opensource:[]
  }
  componentDidMount(){
    this.props.fetchOpenSource(2)
    .then(response => {
      this.setState({opensource : response})
      console.log('fetchOpenSource',response);
    })
  }
  mapProjects(project,index){
    return(
      <article className="card cols-3" key={`project-${index}`}>
        <a href={project.url} id="b36828271" target="_blank">
              <img 
                src="https://mir-s3-cdn-cf.behance.net/projects/404/fefe0336828271.Y3JvcCwxMzE0LDEwMjgsMTg1LDMy.jpg" 
                alt="LaunchPad" 
                rel="noopener"
              />
              <div className="content">
                  <h3>LaunchPad</h3>
                  <small>
                        <span className="tag">UI/UX</span>
                        <span className="tag">Product Design</span>
                  </small>
              </div>
          </a>
      </article>
    )
  }
  render(){
    console.log(this.state.opensource);
    return(
      <div className="opensource">
        <div id="behance-projects" className="project grid-flex">
          {this.state.opensource.map(this.mapProjects)}
        </div>
      </div>
    )
  }
}
  // function mapStateToProps(state) {
  //   return{
  //       OpenSourceProjects : state.OpenSource
  //   }
  // }
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchOpenSource }, dispatch);
}
export default connect(
  null,
  mapDispatchToProps
)(OpenSource);





// <div id="behance-projects" class="grid-flex">
//        <article class="card cols-3">
//          <a href="https://www.behance.net/gallery/36828271/LaunchPad" id="b36828271" target="_blank">
//               <img src="https://mir-s3-cdn-cf.behance.net/projects/404/fefe0336828271.Y3JvcCwxMzE0LDEwMjgsMTg1LDMy.jpg" alt="LaunchPad">
//               <div class="content">
//                   <h3>LaunchPad</h3>
//                   <small>
//                         <span class="tag">UI/UX</span>
//                         <span class="tag">Product Design</span>
//                   </small>
//               </div>
//           </a>
//       </article>
//        <article class="card cols-3">
//          <a href="https://www.behance.net/gallery/22949811/FWC-2014-Coca-Cola" id="b22949811" target="_blank">
//               <img src="https://mir-s3-cdn-cf.behance.net/projects/404/22949811.54bfd433eecde.jpg" alt="FWC 2014 - Coca-Cola">
//               <div class="content">
//                   <h3>FWC 2014 - Coca-Cola</h3>
//                   <small>
//                         <span class="tag">Creative Direction</span>
//                         <span class="tag">Film</span>
//                         <span class="tag">Photography</span>
//                   </small>
//               </div>
//           </a>
//       </article>
//        <article class="card cols-3">
//          <a href="https://www.behance.net/gallery/38479985/Kenner-IxD-Motion" id="b38479985" target="_blank">
//               <img src="https://mir-s3-cdn-cf.behance.net/projects/404/33fb7138479985.Y3JvcCwxMzc5LDEwODAsNDg0LDA.jpg" alt="Kenner IxD &amp; Motion">
//               <div class="content">
//                   <h3>Kenner IxD &amp; Motion</h3>
//                   <small>
//                         <span class="tag">Creative Direction</span>
//                         <span class="tag">Interaction Design</span>
//                   </small>
//               </div>
//           </a>
//       </article>
//        <article class="card cols-3">
//          <a href="https://www.behance.net/gallery/36828873/FOODTOPIA" id="b36828873" target="_blank">
//               <img src="https://mir-s3-cdn-cf.behance.net/projects/404/348a2636828873.Y3JvcCwxMzczLDEwNzMsMCw2.jpg" alt="FOODTOPIA">
//               <div class="content">
//                   <h3>FOODTOPIA</h3>
//                   <small>
//                         <span class="tag">Entrepreneurship</span>
//                         <span class="tag">Product Design</span>
//                   </small>
//               </div>
//           </a>
//       </article>
//        <article class="card cols-3">
//          <a href="https://www.behance.net/gallery/23074515/Escola-SESC-ID" id="b23074515" target="_blank">
//               <img src="https://mir-s3-cdn-cf.behance.net/projects/404/da1b4523074515.Y3JvcCwxMzc5LDEwODAsMjcwLDA.jpg" alt="Escola SESC  ID">
//               <div class="content">
//                   <h3>Escola SESC  ID</h3>
//                   <small>
//                         <span class="tag">Branding</span>
//                         <span class="tag">Graphic Design</span>
//                   </small>
//               </div>
//           </a>
//       </article>
//        <article class="card cols-3">
//          <a href="https://www.behance.net/gallery/38488527/Webdesign-for-Business" id="b38488527" target="_blank">
//               <img src="https://mir-s3-cdn-cf.behance.net/projects/404/40af7438488527.Y3JvcCw2OTEsNTQwLDE1Miww.png" alt="Webdesign for Business">
//               <div class="content">
//                   <h3>Webdesign for Business</h3>
//                   <small>
//                         <span class="tag">UI/UX</span>
//                         <span class="tag">Web Design</span>
//                   </small>
//               </div>
//           </a>
//       </article>
//     </div>
