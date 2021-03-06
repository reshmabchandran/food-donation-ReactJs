import React, { Component } from "react";
import Donatornav from "./Donatornav";
import axios from "axios";

// const sampleJSON = {
//     "arrOfData":[
//         {"name":"asdf",
//         "location":"Calicut",
//         "waste_type":"cloth",
//         },

//         {"name":"zxc",
//         "location":"Kannur",
//         "waste_type":"book"},

//         {"name":"iop",
//         "location":"Calicut",
//         "waste_type":"food"},

//         {"name":"iop",
//         "location":"Calicut",
//         "waste_type":"food"}
//     ]
//   }

export default class view_donate_cloth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arrOfData: [
        // {"name":"asdf",
        // "location":"Calicut",
        // "waste_type":"cloth",
        // },
        // {"name":"zxc",
        // "location":"Kannur",
        // "waste_type":"book"},
        // {"name":"iop",
        // "location":"Calicut",
        // "waste_type":"food"},
        // {"name":"iop",
        // "location":"Calicut",
        // "waste_type":"food"}
      ],
    };
  }

  GetAllCloth = () => {
    const url = "http://localhost:5000/api/cloth/view-cloth";

    const header = {
      "Content-Type": "application/json",
    };

    axios
      .get(url, header)
      .then((response) => {
        console.log("VIEW CLOTH RESULT======", response);

        if (response.data.success == true) {
          this.setState({
            arrOfData: response.data.details,
          });

          console.log("cloth dataaaa", this.state.arrOfData);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  componentDidMount = () => {
    const documentData = JSON.parse(localStorage.getItem("logindata"));
    const session_data = window.sessionStorage.getItem("isLoggedIn");

    console.log("LOGIN_DATA====", documentData);
    console.log("SESSION_DATA====", session_data);

    this.GetAllCloth();
  };

  DeleteCloth = (id) => {
    console.log("IDD==", id);

    const url = "http://localhost:5000/api/cloth/delete-cloth/" + id;

    console.log("URL0", url);

    axios
      .get(url)
      .then((response) => {
        console.log("RESULT======", response);

        if (response.data.success == true) {
          this.setState({
            message: response.data.message,
          });

          alert(this.state.message);
          this.GetAllCloth();
        } else {
          alert("Something went Wrong!");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <div style={{ height: 390 }}>
        <Donatornav />
        {this.state.arrOfData.map((item, i) => {
          console.log("clothss : ", item);
          if (!(item.clothData.length == 0)) {
            return (
              <div style={{ width: "100%", paddingLeft: 60, padding: 45 }}>
                <div
                  class="card"
                  style={{
                    borderWidth: 2,
                    borderRadius: 12,
                    backgroundColor: "white",
                    width: "75%",
                    boxShadow: "10px 10px 25px ",
                  }}
                >
                  <div class="card-body">
                    <h4 class="card-title" key={i} style={{ color: "blue" }}>
                      {item.username}
                    </h4> <hr/>
                    {item.clothData.map((item1, i) => {
                      return (
                        <>
                          <h4 class="card-title" key={i}>
                           Item :  <strong>{item1.type}</strong>
                          </h4>
                          <h5 class="card-title" key={i}>
                           Gender : <strong>{item1.gender}</strong> 
                          </h5>
                          <h5 class="card-title" key={i}>
                           Quantity : <strong>{item1.quantity}</strong> 
                          </h5> 
                        
                    <div>
                      {item.status === "1" ? (
                        <h5 style={{ color: "green" }}>Item Collected</h5>
                      ) : null}
                      <a
                        onClick={() => this.DeleteCloth(item1._id)}
                        class="btn"
                        style={{ backgroundColor: "#0898c4", color: "white" }}
                      >
                        Delete
                      </a>
                      &emsp;&emsp;
                    </div><hr/>
                    </>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          }
        })}
      </div>
    );
  }
}
