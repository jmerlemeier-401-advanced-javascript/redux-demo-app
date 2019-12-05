import React from 'react';
import { connect } from 'react-redux';

//pull in actions
import { actions } from '../../store/person.store.js'

class Changer extends React.Component {
  render(){
    return(
      <section>
        <div>
          {this.props.person.name}
        </div>
        <button onClick={() => this.props.handleChange(15)}>Change Name</button>
        <button onClick={this.props.handleReset}>reset</button>
      </section>
    )
  }
}

//maps state of this component to props
const mapStateToProps = state => ({
  person: state.person
})

//when we call handle change, we grab that num, pass to ur action, and dispatching action and passing to reducer. reducer will evaluate action and let us know the copy of the modified state.
const mapDispatchToProps = (dispatch, getState) => ({
  handleChange: num => dispatch(actions.changeName(num)), //num is a payload 
  handleReset: () => dispatch(actions.resetName())
});

export default connect(mapStateToProps, mapDispatchToProps)(Changer);