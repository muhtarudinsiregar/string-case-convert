import copy from 'copy-to-clipboard'
import React, { Component } from "react";

export default class extends Component {
    copyToClipboard(data) {
        copy(data)
    }

    render() {
        const data = this.props.result

        return (
            <div>
                <div className="column field is-grouped is-7 is-offset-one-quarter">
                    <p className="control is-expanded">
                        <textarea disabled={true} className="textarea" placeholder="Result" value={data}></textarea>
                    </p>
                    <p className="control">
                        <button className="button is-info" type="button" onClick={this.copyToClipboard(data)}>Copy</button>
                    </p>
                </div>
            </div >
        )
    }
}
