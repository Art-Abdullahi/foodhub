import React, { Component } from "react";
import { InfoConsumer } from "./Context";
import { withRouter } from "react-router-dom";

import Switch from "./Tabs";
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
                      <div className="container details">
                        <div className="up">
                          <h1>{key.name}</h1>
                          <img
                            src={key.image}
                            alt="pic"
                            style={{
                              height: "40vh",
                              objectFit: "cover",
                              width: "100%",
                            }}
                          />
                        </div>
                        <div className="tabs mt-5">
                          <Switch
                            openingHours={key.openingHours}
                            category={key.category}
                            location={key.Location}
                            website={key.website}
                            phoneNumber={key.phoneNumber}
                            reviews={key.reviews}
                            longitude={key.longitude}
                            latitude={key.latitude}
                          />
                        </div>
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
