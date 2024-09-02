import { current, createSlice } from '@reduxjs/toolkit';

const MarketSlice = createSlice({
    name: 'market',
    initialState: {
        bim:"",
        headerText:"",
        bimAktuel:[],
        bimNextAktuel:[],
        bimMarket:[],
        bimNextMarket:[],
        currentData:[],
        currentNextData:[],
        setState:"aktuel",
        a101ThisWeek:"",
        a101NextWeek:"",
        a101AktuelThisWeek:"",
        a101AktuelNextWeek:""
    },
    reducers: {
        
        setBim(state,data){
            state.bimAktuel=[]
            state.bimNextAktuel=[]
            state.bimMarket=[]
            state.bimNextMarket=[]
            state.bim = data.payload
            for (i = 1; i <= state.bim["aktuelThisWeekCount"]; i++) {
                state.bimAktuel.push(state.bim["aktuelThisWeek"].replace('number', i));
              }
              for (i = 1; i <= state.bim["aktuelNextWeekCount"]; i++) {
                state.bimNextAktuel.push(state.bim["aktuelNextWeek"].replace('number', i));
              }
              for (i = 1; i <= state.bim["thisWeekCount"]; i++) {
                state.bimMarket.push(state.bim["thisWeek"].replace('number', i));
              }
              for (i = 1; i <= state.bim["nextWeekCount"]; i++) {
                state.bimNextMarket.push(state.bim["nextWeek"].replace('number', i));
              }
        },
        setCurrentData(state,data){
            if(data.payload=="aktuel"){
                state.setState=data.payload
                state.currentData = state.bimAktuel
            } else if(data.payload=="market"){
                state.setState=data.payload
                state.currentData = state.bimMarket
            }else{
                state.currentData = state.bimAktuel
            }
            
        },
        setCurrentNextData(state,data){
            if(state.setState=="aktuel"){
                if(data.payload=="this"){
                    state.currentData=state.bimAktuel
                }else if (data.payload=="next"){
                    state.currentData = state.bimNextAktuel
                }
            }
            else if (state.setState == "market"){
                if(data.payload=="this"){
                    state.currentData=state.bimMarket
                }else if (data.payload=="next"){
                    state.currentData = state.bimNextMarket
                }
            }
        },setHeaderText(state,data){
            state.headerText = data.payload
            
        },
        setA101ThisWeek(state,data){
            state.a101ThisWeek = data.payload
        },
        setA101NextWeek(state,data){
            state.a101NextWeek = data.payload
        },
        setA101AktuelThisWeek(state,data){
            state.a101AktuelThisWeek = data.payload
            
        },
        setA101AktuelNextWeek(state,data){
            state.a101AktuelNextWeek = data.payload
        }
    },
});

export const {
    setBim,setCurrentData,setCurrentNextData,setHeaderText,setA101ThisWeek,setA101NextWeek,setA101AktuelThisWeek,setA101AktuelNextWeek
} = MarketSlice.actions;
export default MarketSlice;