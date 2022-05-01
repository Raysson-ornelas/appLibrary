import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SignIn from '../pages/SignIn';
import Books from '../pages/Books';
import { propsNavigationStack } from './Models';

const Stack = createNativeStackNavigator<propsNavigationStack>();

export default function Routes() {
    return(
        <Stack.Navigator initialRouteName='SignIn'>
            <Stack.Screen
                name="SignIn"
                component={SignIn}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Books"
                component={Books}
                initialParams={{token: ''}}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    );
}