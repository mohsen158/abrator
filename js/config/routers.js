/**
 * Created by mohsen on 9/20/2017.
 */
import {
    TabNavigator, StackNavigator
} from 'react-navigation';
import main from '../screen/main'
import main2 from '../screen/main'
import main3 from '../screen/main'
import main4 from '../screen/main'
import send from '../screen/send'
import receive from '../screen/receive'
import addMoney from '../screen/addMoney'
import pincode from '../screen/pin/pin-code'
import tellermap from '../screen/tellermap'
import withdrawpage from '../screen/withdraw'
export const addMoneyStack=StackNavigator({
    mainAddMoney:{screen:addMoney}
    ,
    tellermap:{screen:tellermap}
},{
    headerMode:'none'
})
export const withdrawstack=StackNavigator({
    mainAddMoney:{screen:withdrawpage}
    ,
    tellermap:{screen:tellermap}
},{
    headerMode:'none'
})

export const stack = StackNavigator({
    pincode: {screen: pincode},
    main: {screen: main2},
    send:{screen:send},
    receive:{screen:receive},
    addmoney:{screen:addMoneyStack},
    withdrawstack:{screen:withdrawstack}
});



export const TabBar = TabNavigator({
    Main: {screen: main3},
    Setup: {screen: stack},
});
