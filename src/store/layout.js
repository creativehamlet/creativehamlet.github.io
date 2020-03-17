const layoutStore = {
    state: {
        layout: '',
    },
    mutations: {
        setLayout (state, val) {
            state.layout = val;
        },
    },
    actions: {
        setLayout(context, layout) {
            context.commit('setLayout', layout);
        },
    },
    getters: { 
        layout: state => state.layout,
    }
}

export default layoutStore;
