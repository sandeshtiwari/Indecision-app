class VisibilityToggle extends React.Component{

    constructor(props){
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state = {
            show: false
        };
    }

    handleToggleVisibility() {
        this.setState((prevState) => {
            return {
                show: !prevState.show
            }
        })
    }

    render() {
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.handleToggleVisibility}>{this.state.show ? 'Hide details': 'Show details'}</button>
                {this.state.show && <p>My details</p>}
            </div>
        );
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));

// const appRoot = document.getElementById('app');
// let show = false;

// const toggle = () => {
//     show = !show;
//     render();
// }

// const render = () => {

//     const template = (
//         <div>
//             <h1>Visibility Toggle</h1>
//             <button onClick={toggle}>{show ? 'Hide details': 'Show details'}</button>
//             {show && <p>My details</p>}
//         </div>
//     );

//     ReactDOM.render(template, appRoot);
// }

// render();