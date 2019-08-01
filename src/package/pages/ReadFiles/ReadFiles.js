import React, {Component} from 'react';
import PropTypes from 'prop-types';
import checkFilebinarysearch from '../../../helpers/checkFile/';

class ReadFiles extends Component {
    constructor() {
        super();
        this.state = {
            src: '',
            value: '',
        };
        this.handleClick = this.handleClick.bind(this);
        this.inputFileChanged = this.inputFileChanged.bind(this);
    };

    handleClick() {
        let input = this.refs._input;
        input.click();
    };

    inputFileChanged(event) {
        if (window.FileReader) {
            let file = event.target.files[0], reader = new FileReader(), self = this;
            reader.onload = function (read) {
                self.setState({
                    src: read.target.result
                });
            };
            reader.readAsDataURL(file);

            // check File from here
            // self.setState(checkFilebinarysearch(file));
            self.setState({value: reader});

        } else {
            alert('Soryy, your browser does\'nt support for preview');
        }
    }

    render() {
        const {accept, capture, multiple} = this.props, {src} = this.state;
        return (
            <div>
                <img src={src} height={80} width={80}/>
                <button onClick={this.handleClick}>Upload</button>
                <input type="file" ref="_input" accept={Array.isArray(accept) ? accept.join(',') : accept}
                       multiple={multiple} capture={capture} style={{display: 'none'}}
                       onChange={this.inputFileChanged}/>
            </div>
        );
    }
}

ReadFiles.defaultProps = {
    accept: '*',
    capture: true,
    multiple: false,
};

ReadFiles.propTypes = {
    // checkFilebinarysearch: func,
    accept: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.array
    ]),
    capture: PropTypes.bool,
    multiple: PropTypes.bool,
};

export default ReadFiles;
