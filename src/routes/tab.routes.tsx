import React from "react";
import { View } from "react-native";
import { Home } from "@src/screens/Tab/Home";
import { Settings } from "@src/screens/Tab/Settings";
import { Statistic } from "@src/screens/Tab/Statistic";
import { Dashboard } from "@src/screens/Tab/Dashboard";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import theme from '../styles/theme'
import { GearIcon, WalletIcon, ChartDonutIcon, ChartLineIcon } from 'phosphor-react-native'

const { Navigator, Screen } = createBottomTabNavigator();

export const TabRoutes = () => {
    return (
        <Navigator
            id={undefined}
            initialRouteName='Home'
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarInactiveTintColor: theme.COLORS.GRAY4,
                tabBarActiveTintColor: theme.COLORS.GRAY1,
                tabBarStyle: {
                    position: 'absolute',
                    bottom: 40,
                    marginHorizontal: 20,
                    paddingHorizontal: 10,
                    borderRadius: 30,
                    backgroundColor: theme.COLORS.BLACK_200,
                    paddingTop: 17,
                    height: 75,
                    borderColor: 'transparent'
                }
            }}
        >
            <Screen
                name='Home'
                component={Home}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <View>
                                {focused ? (
                                    <WalletIcon
                                        size={36}
                                        weight="regular"
                                        color={focused ? theme.COLORS.BLUE_PURPLE : theme.COLORS.GRAY4}
                                    />
                                ) : (
                                    <WalletIcon
                                        size={33}
                                        weight="light"
                                        color={focused ? theme.COLORS.BLUE_PURPLE : theme.COLORS.GRAY4}
                                    />
                                )}
                            </View>
                        )
                    }
                }}
            />
            <Screen
                name='Dashboard'
                component={Dashboard}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <View>
                                {focused ? (
                                    <ChartDonutIcon
                                        size={36}
                                        weight="regular"
                                        color={focused ? theme.COLORS.BLUE_PURPLE : theme.COLORS.GRAY4}
                                    />
                                ) : (
                                    <ChartDonutIcon
                                        size={33}
                                        weight="light"
                                        color={focused ? theme.COLORS.BLUE_PURPLE : theme.COLORS.GRAY4}
                                    />
                                )}

                            </View>
                        )
                    }
                }}
            />
            <Screen
                name='Statistic'
                component={Statistic}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <View>
                                {focused ? (
                                    <ChartLineIcon
                                        size={36}
                                        weight="regular"
                                        color={focused ? theme.COLORS.BLUE_PURPLE : theme.COLORS.GRAY4}
                                    />
                                ) : (
                                    <ChartLineIcon
                                        size={33}
                                        weight="light"
                                        color={focused ? theme.COLORS.BLUE_PURPLE : theme.COLORS.GRAY4}
                                    />
                                )}
                            </View>
                        )
                    }
                }}
            />
            <Screen
                name='Settings'
                component={Settings}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <View>
                                {focused ? (
                                    <GearIcon
                                        size={36}
                                        weight="regular"
                                        color={focused ? theme.COLORS.BLUE_PURPLE : theme.COLORS.GRAY4}
                                    />
                                ) : (
                                    <GearIcon
                                        size={33}
                                        weight="light"
                                        color={focused ? theme.COLORS.BLUE_PURPLE : theme.COLORS.GRAY4}
                                    />
                                )}
                            </View>
                        )
                    }
                }}
            />
        </Navigator>
    )
}
