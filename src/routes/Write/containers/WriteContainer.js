import { connect } from 'react-redux'
import { createSelector } from 'reselect'
import { saving, saved, saveFailed, SAVE_SUCCESS, INITIAL_POST_ID } from '../modules/write'
import WriteView from '../components/WriteView'

const mapDispatchToProps = {
  saved, saving, saveFailed
}

const getUserId = (state) => state.auth.isAuth ? state.auth.profile.uid : ''
const getWriteState = (state) => state.write

const userIdListener = createSelector(
  [ getUserId ],
  (userId) => {
    return userId
  }
)
const writeStateListener = createSelector(
  [ getWriteState ],
  (writeState) => {
    return writeState
  }
)
const mapStateToProps = (state) => ({
  uid: userIdListener(state),
  currentState: writeStateListener(state).currentState || SAVE_SUCCESS,
  currentPostID: writeStateListener(state).currentPostID || INITIAL_POST_ID,
})

/*  Note: mapStateToProps is where you should use `reselect` to create selectors, ie:

    import { createSelector } from 'reselect'
    const counter = (state) => state.counter
    const tripleCount = createSelector(counter, (count) => count * 3)
    const mapStateToProps = (state) => ({
      counter: tripleCount(state)
    })

    Selectors can compute derived data, allowing Redux to store the minimal possible state.
    Selectors are efficient. A selector is not recomputed unless one of its arguments change.
    Selectors are composable. They can be used as input to other selectors.
    https://github.com/reactjs/reselect    */

export default connect(mapStateToProps, mapDispatchToProps)(WriteView)