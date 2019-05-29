import React, { Component } from "react";
import { Card, TextField, Button } from "@material-ui/core";
import LoadingDialog from "../dialogs/LoadingDialog";
import MultiReslutDialog from "../dialogs/MultiResultDialog";
import NavigationBar from '../transaction-layer/NavigationBar'
import NotFoundDialog from "../dialogs/NotFoundDialog";

export default class SearchContainer extends Component {
  constructor() {
    super();

    this.state = {
      token: 452587128647170,
      searchContent: "",
      searchID: "",
      loading: false,
      multiHeros : [],
      isMultiHeros : false,
      isHeroUnknown : false,
      isHeroFound : false,
      heroDetails : {}
    };

    this.handleChildReturn = this.handleChildReturn.bind(this);
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleChildReturn(hero) {
    if(hero === undefined){
      this.setState({isHeroUnknown : false})
    }
    else {
      this.setState( (prevState) =>{
        return({
          isMultiHeros : false,
          heroDetails : hero,
          isHeroFound : true,
        })
      })
    }
  }

  handleClick = (event, name) => {
    this.setState({ loading: true, isHeroFound : false});
    const uri = `https://cors-anywhere.herokuapp.com/https://superheroapi.com/api/${
      this.state.token
    }/search/${this.state.searchContent}`;
    fetch(uri)
      .then(res => res.json())
      .then(data => {

        if(data.results === undefined){
         this.setState({loading : false, isHeroUnknown : true})
        }
        else if(data.results.length > 1){
          const tempHeros = []
          data.results.map((res)=>{
            tempHeros.push(res)
            return null;
          })
          this.setState({
            loading: false,
            multiHeros : {tempHeros},
            isMultiHeros : true
            });
          
        }
        else if (data.results.length === 1){
          this.setState({
            loading : false,
            heroDetails : data.results[0],
            isHeroFound : true
          })

          console.log(this.state.isHeroFound)
        }
      });
  };

  render() {
    return (
      <div>
        {this.state.loading && <LoadingDialog />}
        {this.state.isMultiHeros && <MultiReslutDialog
          search = {this.state.searchContent}
          result = {this.state.multiHeros}
          handle = {this.handleChildReturn}/>}
          
        <div>
          <Card
            className="center card"
            style={{ marginTop: 20, height: "100px" }}
          >
            <div className="row">
              <div className="column" style={{ width: "60%", height: "100%" }}>
                <TextField
                  id="outlined-name"
                  name="searchContent"
                  onChange={this.handleChange}
                  value={this.state.searchContent}
                  style={{ margin: "20px", width: "90%", height: "80%" }}
                  label="Name"
                  variant="outlined"
                />
              </div>
              <div className="column" style={{ width: "40%", height: "100%" }}>
                <Button
                  variant="outlined"
                  color="primary"
                  style={{
                    margin: "20px",
                    width: "80%",
                    height: "60px"
                  }}
                  onClick={this.handleClick}
                >
                  Search
                </Button>
              </div>
            </div>
          </Card>
          {this.state.isHeroFound && <NavigationBar className="center" hero = {this.state.heroDetails}/>}
          {this.state.isHeroUnknown && <NotFoundDialog
           name = {this.state.searchContent}
           handle = {this.handleChildReturn}/>}
        </div>
      </div>
    );
  }
}
