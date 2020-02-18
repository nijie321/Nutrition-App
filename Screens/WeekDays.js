import React from 'react';
import {ScrollView} from 'react-native';

import Day from './Day';



export default function({days}){
    return (
        <ScrollView>
            {
                days.map((day,index)=>{
                    return(
                        <Day day={day}/>
                    )
                })
            }
        </ScrollView>
    )
}

