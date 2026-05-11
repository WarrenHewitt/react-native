import {
    createStackNavigator,
} from 'react-navigation';

import List from './List'
import Detail from './Detail'

const navigationConfig = {
    header: null
}

export default App = createStackNavigator({
    List: {
        screen: List,
        path: 'list/:id',
        navigationOptions: (navigation) => (navigationConfig)
    },
    Detail: { 
        screen: Detail,
        navigationOptions: (navigation) => ({
            title: '详情'
        })
    },
})