import React from 'react';

class APIGW extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        error: null,
        isLoaded: false,
        items: []
      };
    }

  componentDidMount() {
    fetch("https://8wpdedo54e.execute-api.ap-southeast-2.amazonaws.com/prod/")
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result
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
        <p> { items } </p>
      );
    }
  }
}

export default APIGW;
