import {configureStore} from '@reduxjs/toolkit'
import userSlice from './userSlice'
import movieSlice from './movieSlice'
import gptSerachSlice from './gptSerachSlice'
import appConfigSlice from './appConfigSlice'

const appStore= configureStore(
    {
        reducer:{
            user:userSlice,
            movies:movieSlice,
            gpt:gptSerachSlice,
            appConfig:appConfigSlice
        }
    }
)
export  default appStore