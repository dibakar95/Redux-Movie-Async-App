import React from "react";
import "./App.css";
import { connect } from "react-redux";
import updateMovies from "./store/actions/updateMovies";
import fetchUsers from "./store/actions/fetchUsers";
function App(props) {
  return (
    <div className="App">
      <h3>React MovieList App</h3>
      <br />
      <span style={{ color: "green" }}>
        Your Current Movie is: {props.movies.name}
      </span>
      <br />
      <button onClick={props.updateMovies}>Select New Movie</button>
      <br />
      {props.users.length === 0 ? (
        <p style={{ color: "Red" }}>There are no Users</p>
      ) : (
        props.users.map((user) => (
          <p key={user.id} >
            {user.first_name} - {user.email}
            <div><img src={user.avatar} alt= {user.first_name} height="80" width="80"/></div>
          </p>
        ))
      )}
      <br />
      <button onClick = {props.fetchUsers}>Fetch Users</button>
    </div>
  );
}
const MapStateToProps = (state) => {
  return {
    movies: state.movies,
    users: state.users
  };
};
const MapDispatchToProps = (dispatch) => {
  return {
    updateMovies: () => dispatch(updateMovies),
    fetchUsers: () => dispatch(fetchUsers)
  };
};
export default connect(MapStateToProps, MapDispatchToProps)(App);
