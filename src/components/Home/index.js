import React, { Component } from 'react';
import './index.scss';

export default class Home extends Component {
	componentDidMount() {}
	render() {
		return (
			<div className='home'>
				<div className='section definition'>
					<div className='grid-full-width'>
						<dl>
							<dt>
								<span className='word'>Co</span>
								<span className='bullet'> </span>
								<span className='word slide-this'> here </span>
								<span className='pronunciation'>
									{' '}
									/ko’hir/
									<strong>Verb</strong>
								</span>
							</dt>
							<dd>
								<sup>1.</sup> to be united; form a whole
							</dd>
							<dd>
								<sup>2.</sup> to be aesthetically and logically consistent
							</dd>
							<dd>
								<sup>3.</sup> to become united in principles, relationships or interests
							</dd>
						</dl>
					</div>
				</div>
			</div>
		);
	}
}

// <p>Codepen</span> </p>
//   <p>I'm Zayn</p>
//   <p><span class="#">Let's Code</span></p>
//   <p>I like web development</p>
//   <p>I love coding</p>
//   <p>PHP</p>
//   <p>PYTHON</p>
//   <p>JAVASCRIPT</p>
//   <p>CSS</p>
//   <p>Simple Landing Page</p>
//   <p>Ruby</p>
// 	<p>Most Powerful Typer</p>
// 	<p>Codepen</p>
// 	<p>Apple</p>
// 	<p>Facebook</p>
// 	<p>You can still add more</p>
