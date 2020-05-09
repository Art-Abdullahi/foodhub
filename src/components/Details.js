import React, { Component } from "react";
import { InfoConsumer } from "./Context";
import { withRouter } from "react-router-dom";
class Details extends Component {
  render() {
    return (
      <InfoConsumer>
        {(value) => {
          const { resturants } = value;
          return (
            <React.Fragment>
              <div className="container-fluid align-items-center">
                {resturants.map((key) => (
                  <div key={key.id}>
                    {key.id === parseInt(this.props.match.params.id) ? (
                      <div>
                        <img
                          src={key.image}
                          alt="pic"
                          style={{
                            height: "350px",
                            objectFit: "cover",
                            width: "100%",
                          }}
                        />
                        <h1>{key.name}</h1>
                      </div>
                    ) : (
                      <span></span>
                    )}
                  </div>
                ))}
              </div>
            </React.Fragment>
          );
        }}
      </InfoConsumer>
    );
  }
}
export default withRouter(Details);
