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

export default class view_donate_book extends Component {
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

  GetAllBook = () => {
    const url = "http://localhost:5000/api/book/view-book";

    const header = {
      "Content-Type": "application/json",
    };

    axios
      .get(url, header)
      .then((response) => {
        console.log("VIEW BOOK RESULT======", response);

        if (response.data.success == true) {
          this.setState({
            arrOfData: response.data.details,
          });

          console.log("book dataaaa", this.state.arrOfData);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  componentDidMount = async () => {
    const documentData = JSON.parse(localStorage.getItem("logindata"));
    const session_data = window.sessionStorage.getItem("isLoggedIn");

    console.log("LOGIN_DATA====", documentData);
    console.log("SESSION_DATA====", session_data);

    await this.GetAllBook();
  };

  // MoveToEdit=(bookid)=>{

  //     console.log("kittyyyyyy")

  //     this.props.history.push({
  //       pathname:"/donator_book_donation",
  //       state:{
  //          book_id:bookid,
  //          isEditbookprop:true
  //       }
  //     })
  // }

  DeleteBook = (id) => {
    console.log("iddddd===", id);

    const url = "http://localhost:5000/api/book/delete-book/" + id;

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
          this.GetAllBook();
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
          console.log("bookss", item);
          if (!(item.BookData.length == 0)) {
            return (
              <div style={{ width: "102%", paddingLeft: 60, padding: 45 }}>
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
                    {item.BookData.map((item1, i) => {
                      return (
                        <>
                          <h4 class="card-title" key={i}>
                           Book : <strong>{item1.category}</strong>
                          </h4>
                          <h5 class="card-title" key={i}>
                           Language : <strong>{item1.language}</strong> 
                          </h5>
                          
                       
                    
                    <div>
                      {item.status === "1" ? (
                        <h5 style={{ color: "green" }}>Item Collected</h5>
                      ) : null}
                      <a
                        onClick={() => this.DeleteBook(item1._id)}
                        class="btn"
                        style={{ backgroundColor: "#0898c4", color: "white" }}
                      >
                        Delete
                      </a>
                      &emsp;&emsp;
                    </div><hr/>  </>
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
