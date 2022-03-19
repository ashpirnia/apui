import React from 'react';

class APIGW extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        error: null,
        isLoaded: false,
        response: ""
      };
    }

  componentDidMount() {
    fetch("https://8wpdedo54e.execute-api.ap-southeast-2.amazonaws.com/prod/helloworld?name=John&city=Melbourne")
    .then(res => res.json())
    .then(
        (result) => {
          this.setState({
            isLoaded: true,
            response: result.message
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <p> { this.state.response } </p>
      );
    }
  }
}

export default APIGW;
