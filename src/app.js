//var Jumbotron = ReactBootstrap.Jumbotron;
//var Alert = ReactBootstrap.Alert;
//var ProgressBar = ReactBootstrap.ProgressBar;
//	<div><ProgressBar bsStyle="success" now={40} /></div>

$(function () {
 	$('[data-toggle="popover"]').popover()
})

const divStyle = {
  witdh: '30px',
};

class ButtonPopOver extends React.Component {
	render() {
		return (
			<div className="row justify-content-md-center">
				<button type="button" className="btn btn-lg btn-danger" data-toggle="popover" data-placement="bottom" title="TITLE" data-content="And here's some amazing content. It's very engaging. Right?">Click ttttttttttttttttttttt Me!</button>
			</div>
		)
	}
}

class UserIcon extends React.Component {
	render() {
		return (
			<svg className="svg-icon" viewBox="0 0 20 20" width="5vw">
				<path fill="#FE2EF7" d="M10,0.375c-5.229,0-9.469,4.239-9.469,9.469S4.771,19.312,10,19.312s9.469-4.239,9.469-9.469S15.229,0.375,10,0.375 M11.079,18.377c2.005-2.275,3.225-5.262,3.225-8.533c0-3.272-1.22-6.258-3.225-8.533c4.243,0.531,7.529,4.145,7.529,8.533C18.608,14.232,15.322,17.846,11.079,18.377"></path>
			</svg>
		)
	}
}

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }
  componentDidMount() {
    this.timerID = setInterval(() => this.tick(),1000);
  }
  componentWillUnmount() {
 		clearInterval(this.timerID);
  }
  tick() {
    this.setState({date: new Date()});
  }
  render() {
    return (
      <div className="alert alert-warning" role="alert">
				<strong>TIME</strong>:{this.state.date.toLocaleTimeString()}
      </div>
    );
  }
}


class Main extends React.Component {  
  render() {
    return (
		<div>
			<div className="jumbotron text-center">
				<h1 className="display-3">Hello, world!</h1>
				<UserIcon />
				<div className="alert alert-success" role="alert">
					<strong>Hello</strong> Dude!
				</div>
				<ButtonPopOver />
				<p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
				<hr className="my-4"></hr>
				<p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
				<p className="lead">
					<a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
				</p>		
				<Clock />
			</div>
		</div>
	);	
  }
}

ReactDOM.render(
  <Main />,
  document.getElementById('container')
); 