import Head from 'next/head'
import copy from 'copy-to-clipboard'

class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };

        this.handleChange = this.handleChange.bind(this);
        this.toUpperCase = this.toUpperCase.bind(this);
        this.toLowerCase = this.toLowerCase.bind(this);
        this.toCapitalize = this.toCapitalize.bind(this);
        this.copy = this.copy.bind(this);
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

    copy() {
        copy(this.state.data)
    }

    Mailbox() {
        return (
            <div>
                <p>{this.state.data}</p>
                <button className="button is-dark" type="button" onClick={this.copy}>Copy</button>
            </div>
        );
    }
    render() {
        return (
            <div>
                <Head>
                    <title>convert case string</title>
                    <meta name='viewport' content='initial-scale=1.0, maximum-scale=1, width=device-width' />
                    <link rel="apple-touch-icon" sizes='180x180' href='/static/apple-touch-icon.png' />
                    <link rel='icon' type='image/png' sizes='32x32' href='/static/favicon-32x32.png' />
                    <link rel='icon' type='image/png' sizes='16x16' href='/static/favicon-16x16.png' />
                    <link rel='manifest' href='/static/manifest.json' />
                    <link rel='mask-icon' href='/static/safari-pinned-tab.svg' color='#f9b05d' />
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.2/css/bulma.min.css"></link>
                    <meta name='theme-color' content='#904e95' />
                </Head>
                <div className="container has-text-centered">
                    <div className="column is-half is-offset-one-quarter">
                        <textarea className="textarea" rows="5" type="text" value={this.state.value} onChange={this.handleChange} placeholder="Write your sentence"></textarea>
                        <br></br>

                        <div className="buttons is-centered">
                            <button className="button is-info" type="button" onClick={this.toLowerCase}>Lowercase</button>
                            <button className="button is-info" type="button" onClick={this.toUpperCase}>UPPERCASE</button>
                            <button className="button is-info" type="button" onClick={this.toCapitalize}>Capitalize</button>
                        </div>
                    </div>

                    <div>
                        {this.state.data ? <div><p>{this.state.data}</p> <button className="button is-dark" type="button" onClick={this.copy}>Copy to Clipboard</button></div> : ""}
                    </div>

                </div>
            </div>
        );
    }
}
export default Index
