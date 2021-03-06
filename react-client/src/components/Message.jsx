import ReactDOM from 'react-dom';
import React from 'react';

class Message extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    };

  }

  handleChange(e) {
    this.setState({input: e.target.value});
    console.log(e.target.value);
  }

  render() {
    return (            
      <div className="form-group">
      <label for="textArea" className="col-lg-2 control-label">Message</label>
      <div className="col-md-8">
        <textarea className="form-control" rows="8" id="textArea" onChange={(e) => {this.handleChange(e)}}></textarea>
        <span className="help-block">Enter your text message here</span>
      </div>
      </div> 
    )

  }
}

export default Message;