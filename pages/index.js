class NameForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.toUpperCase = this.toUpperCase.bind(this);
        this.toLowerCase = this.toLowerCase.bind(this);
        this.toCapitalize = this.toCapitalize.bind(this);
    }

    handleChange(event) {
        this.setState({
            value: event.target.value
        });
    }

    getValue() {
        return this.state.value
    }

    // FOOBAR
    toUpperCase(event) {
        let sentence = this.getValue().toUpperCase()
        this.setState({
            data: sentence
        })
    }

    // foobar
    toLowerCase(event) {
        let sentence = this.getValue().toLowerCase()
        this.setState({
            data: sentence
        })
    }

    // Foo Bar
    toCapitalize(event) {
        let sentence = this.getValue().toLowerCase()
        this.setState({
            data: this.capitalizeLetter(sentence)
        })
    }

    // http://jsfiddle.net/marc05/r3got4vc/6
    capitalizeLetter(str) {
        return str.replace(/(^\S|\s\S)/g, function (match, g1, offset, origstr) {
            return g1.toUpperCase();
        });
    }


    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        // event.preventDefault();
    }

    render() {
        const divStyle = {
            color: 'blue',
            width: 100,
            height: 100
        };
        return (
            <div>
                <textarea style={divStyle} type="text" value={this.state.value} onChange={this.handleChange}></textarea>
                <br></br>
                <button type="button" onClick={this.toUpperCase}>UPPERCASE</button>
                <button type="button" onClick={this.toLowerCase}>Lowercase</button>
                <button type="button" onClick={this.toCapitalize}>Capitalize</button>
                <button type="button" onClick={this.handleSubmit}>snake_case</button>
                <button type="button" onClick={this.handleSubmit}>snake_case</button>

                <p>{this.state.data}</p>
            </div>
        );
    }
}
export default NameForm
