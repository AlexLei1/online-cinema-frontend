import {actions} from './burger/burger.slice'
import * as userActions from './user/user.actions'
// import * as burgerActions from './burger/burger.actions'

export const allActions = {
	...userActions, 
	...actions
}
 