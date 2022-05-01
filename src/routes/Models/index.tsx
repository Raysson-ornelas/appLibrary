import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type propsNavigationStack= {
    SignIn: undefined,
    Books: {
        token?: string,
    }
}

export type propsStack = NativeStackNavigationProp<propsNavigationStack>