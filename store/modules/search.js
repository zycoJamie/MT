const state={
    hotPlace:{

    }
}

const mutations={
    setHotPlace(state,hotPlace){
        state.hotPlace=hotPlace
    }
}

export default { namespaced:true,state,mutations}