// jshint ignore: start

var React = require('react');
var $ = require('jquery');
var Font = require('./Font.js');

module.exports = React.createClass({
  modal: function(value) {
    this.props.setModal(value);
  },
  render: function() {
    var text = $('.text input').val();
    var start = this.props.start;
    var end = this.props.end;
    var fonts = this.props.data.slice(start, end);
    var children = [];

    while (fonts.length > 0) {
      var font = fonts.shift();
      children.push(<Font setModal={this.modal} key={fonts.length} font={font} text={text} />);
    }

    return (
      <div className="fontgroup">
        {children}
      </div>
    );
  }
});