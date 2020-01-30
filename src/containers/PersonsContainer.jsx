import actions from './actions';
import { connect } from "react-redux";
import PersonsComponent from './PersonsComponent';

const mapStateToProps = state => {
  return {
    prs: state.persons
  };
};

const mapDispatchToProps = dispatch => {
  return {
    personAddedHandler: persons => dispatch(actions.addPerson(persons)),
    personDeletedHandler: (persons, personId) =>
      dispatch(actions.deletePerson(persons, personId))
  };
};

const PersonsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PersonsComponent);

export default PersonsContainer;
