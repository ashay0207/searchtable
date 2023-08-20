import React from 'react'
import { createStoreHook } from 'react-redux'
import reducer from './Reducer/Reducer'

const store = createStoreHook(reducer);

export default store;