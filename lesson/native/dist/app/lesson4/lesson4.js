var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { FilterTodoListType } from "./models";
console.log('lesson 4 works');
var initialTodoLists = {
    0: {
        id: 0,
        title: 'Learn react',
        filter: 'All'
    },
    1: {
        id: 1,
        title: 'Learn CSS',
        filter: 'All'
    },
};
var initialTaskLists = {
    0: [
        {
            id: 0,
            title: 'Learn hooks',
            isDone: false
        },
        {
            id: 1,
            title: 'Learn useEffect',
            isDone: true,
        }
    ],
    1: [
        {
            id: 0,
            title: 'Learn SASS',
            isDone: false,
        },
        {
            id: 1,
            title: 'Learn LESS',
            isDone: true,
        }
    ],
};
var reducer = combineReducers({
    todoList: todoListReducer,
    taskList: taskListReducer,
});
function createStore(reducer) {
    // @ts-ignore
    var state = reducer();
    return {
        dispatch: function (action) { state = reducer(state, action); },
        getState: function () { return state; },
    };
}
function combineReducers(reducerMap) {
    return function combinationReducers(state, action) {
        return Object.entries(reducerMap).reduce(function (acc, _a) {
            var _b;
            var key = _a[0], reducer = _a[1];
            // @ts-ignore
            return __assign(__assign({}, acc), (_b = {}, _b[key] = state ? reducer(state[key], action) : reducer(undefined, { type: 'asdad', payload: {} }), _b));
        }, {});
    };
}
function todoListReducer(state, action) {
    var _a;
    if (state === void 0) { state = initialTodoLists; }
    if (action === void 0) { action = { type: 'sdgsgsg', payload: {} }; }
    switch (action.type) {
        case 'addTodoList': {
            return __assign(__assign({}, state), (_a = {}, _a[action.payload.id] = __assign({}, action.payload), _a));
        }
        default:
            return state;
    }
}
function taskListReducer(state, action) {
    if (state === void 0) { state = initialTaskLists; }
    switch (action.type) {
        default:
            return state;
    }
}
var store = createStore(reducer);
function createAction(type) {
    return function (payload) {
        return { type: type, payload: payload };
    };
}
var addTodoList = createAction('addTodoList');
store.dispatch(addTodoList({ id: 2, title: 'vlad', filter: FilterTodoListType.ALL }));
//1. add new todoList.
//2. add new task in according todoList.
//3. change filter type in according todoList.
//4. delete task in according todoList.
//5. change title in task in according todoList..
//6. change field isDone in task in according todoList.
//7. delete todoList by id.
//8. change title in todoList by id.
console.log(store.getState());
//# sourceMappingURL=lesson4.js.map