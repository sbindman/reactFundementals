var React = require('react');
var ReactDOM = require('react-dom');
var routes = require('./config/routes');

var USER_DATA = {
  name : 'Sarah b',
  username : 'sbindman',
  image : 'http://cdn2-www.dogtime.com/assets/uploads/gallery/30-impossibly-cute-puppies/impossibly-cute-puppy-8.jpg'
}


var ProfilePic = React.createClass({
    render: function () {
        return (
            <img src={this.props.image} style={{height:100, width:100}}/>
        )
    }
});

var Link = React.createClass({
  changeURL : function() {
    window.location.replace(this.props.href);
  },
  render: function () {
        return (
            <div onClick={this.changeURL}>
                {this.props.children}
            </div>
        )
    }
});

var ProfileLink = React.createClass({
    render: function () {
        return (
            <Link href={"https://www.github.com/" + this.props.username}>{this.props.username}</Link>
          )
    }
});

var ProfileName = React.createClass({
    render: function () {
        return (
            <div>{this.props.name}</div>
        )
    }
});

var Avatar = React.createClass({
  render: function() {
    return (
        <div>
          <ProfilePic image={this.props.user.image}/>
          <ProfileLink username={this.props.user.username}/>
          <ProfileName name={this.props.user.name}/>
        </div>

    )
  }
});

// ReactDOM.render(<Avatar user={USER_DATA}/>, document.getElementById('app'));

ReactDOM.render(routes, document.getElementById('app'));