import { FlatList, Text, TouchableOpacity, View } from "react-native";
import React from "react";

export default class App extends React.PureComponent {
    render() {
        return (
            <View style={{ marginTop: 24 }}>
                <MultiSelectList
                    data={[ //data is prop
                        { id: "1", title: "Moffitt Library - 1st Floor next to FSM Cafe"},
                        { id: "2", title: "Doe Library - Basement"},
                        { id: "3", title: "Mulford - Rooms 12, 40, 156"},
                        { id: "4", title: "Tang Center - Public Cooridors on Floors 1-3"},
                        { id: "5", title: "O'Brien - 4th Floor Across Elevator"},
                        { id: "6", title: "Donneer - Rooms 104, 153, 256"},
                        { id: "7", title: "Latimer - Lobby, Rooms 213, 215, 292"},
                        { id: "8", title: "Gilman - Across Room 118"},
                        { id: "9", title: "Birge - Across Room 50, B123"},
                        { id: "10", title: "Stephens - Next to Room 242, 342"},
                        { id: "11", title: "Moses - 1st Floor, Basement"},
                        { id: "12", title: "Cesar Chavez Student Center - Next to Room 59"},
                        { id: "13", title: "GBC - Next to ATM"},
                        { id: "14", title: "Wurster - Next to Room 403"},
                        { id: "15", title: "Boalt - Rooms 285, 309, 348, 350, 448, 450"},
                        { id: "16", title: "Simon - Rooms 496, 596, 696, 896"},
                        { id: "17", title: "Haviland - Room 318"},
                        { id: "18", title: "Dwinelle Hall - Room 132A, 155A"},
                        { id: "19", title: "Haorld E Jones Center - 1st Floor, Rooms 4, 30-A, 40-A"},
                        { id: "20", title: "Career Center - Room 2"},
                        { id: "21", title: "Dance Studio - 1st Floor"},
                        { id: "22", title: "Institutde for Research on Labor and Employment - 1st Floor"},
                        { id: "23", title: "Energy Institute at Haas - Floors 1-3"},
                        { id: "24", title: "Anna Head School - Rooms C-104, C-204, C-211, B-200, B-213"},
                        { id: "25", title: "Institute for Study of Societal Issues - Room B-104"},
                        { id: "26", title: "Davis Hall - Room 219, 335"},
                        { id: "27", title: "University hall, Room 74, 714F"},
                        { id: "28", title: "Piedmont Houses - 2222, 2224, 2232, 2240"},
                        { id: "29", title: "VLSB - Herbarium"},
                        { id: "30", title: "Barrows Hall - 8th Floor"},
                        { id: "31", title: "Wheeler Hall - Room 490"},
                        { id: "32", title: "Barker - Room 6, 102, 204"},
                        { id: "33", title: "South Hall - Basement, Rooms 301A/B"},
                        { id: "34", title: "Eshelman Hall - Basement 3, 4, 5"},
                        { id: "35", title: "MLK Student Union - Bear's Lair Restaurant"},
                        { id: "36", title: "Residential and Student Services - 4th Floor, across 461C"},
                    ]}
                />
            </View>
        );
    }
}

class MyListItem extends React.PureComponent { //Multi > MyList
    _onPress = () => {
        this.props.onPressItem(this.props.id); //my id got pressed, pass to parent
    };

    render() {
        const textColor = this.props.selected ? "red" : "black";
        return (
            <TouchableOpacity onPress={this._onPress}>
                <View>
                    <Text style={{ color: textColor, fontSize: 20, }}>
                        {this.props.title}
                    </Text>
                </View>
            </TouchableOpacity> //this.props.clapCount
        );
    }
}

class MultiSelectList extends React.PureComponent {
    state = { selected: (new Map(): Map<string, boolean>) }; //mutable, like loading

    _keyExtractor = (item, index) => item.id;

    _onPressItem = (id: string) => {
        // updater functions are preferred for transactional updates
        this.setState(state => { //clapcount gets updated
            // copy the map rather than modifying state.
            const selected = new Map(state.selected);
            selected.set(id, !selected.get(id)); // toggle
            return { selected };
        });
    };

    _renderItem = ({ item }) =>
        <MyListItem
            id={item.id}
            onPressItem={this._onPressItem}
            selected={!!this.state.selected.get(item.id)}
            title={item.title}
            //soapCount={0}
            //clapcount is located here
        />;

    render() {
        return (
            <FlatList
                data={this.props.data}
                extraData={this.state}
                keyExtractor={this._keyExtractor}
                renderItem={this._renderItem}
            />
        );
    }
}
