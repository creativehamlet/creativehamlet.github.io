import logError from '../logging';
const AWS = require('aws-sdk');

const slideStore = {
    state: {
        slides: [],
        project: 'iredell-jail',
        category: 'municipality',
        isLoading: true,
    },
    mutations: {
        setSlides (state, val) {
            state.slides = val;
        },
        setProject (state, val) {
            state.project = val;
        },
        setCategory (state, val) {
            state.category = val;
        },
        setIsLoading (state, val) {
            state.isLoading = val;
        },
    },
    actions: {
        setIsLoading(context, loading) {
            context.commit('setIsLoading', loading);
        },
        async fetchSlides({ commit, dispatch }) {
            const s3 = new AWS.S3({
                accessKeyId: process.env.VUE_APP_S3_ACCESS_KEY,
                secretAccessKey: process.env.VUE_APP_S3_SECRET_KEY,
                region: 'us-east-2'
            });
            const params = {
                Bucket:process.env.VUE_APP_S3_BUCKET,
            };
            let response;
            await s3.listObjectsV2(params, async function (err, data) {
                if (err) {
                    await logError(err);
                }
                else {
                    commit('setSlides', data.Contents);
                    dispatch('purgeEmptySlides');
                }
            });
        },
        setProject(context, project) {
            context.commit('setProject', project);
        },
        setCategory(context, category) {
            context.commit('setCategory', category);
        },
        async purgeEmptySlides(context) {
            const result = await context.state.slides.filter(obj => obj.Size > 0);
            context.commit('setSlides', result);
        }
    },
    getters: { 
        slides(state) {
            let slides = [];
            state.slides.forEach(element => {

                // Split the Key (path) and get the object type
                const split = element.Key.split('/');
                const extension = element.Key.split('.')[1];
                const type = (extension === 'png' || extension === 'jpg') ? 'img' : 'video';

                // Push the element to the array if it's the correct project, and not empty (folder)
                if(split.indexOf(state.project) > -1 && element.Size !== 0) {
                    slides.push({
                        url: process.env.VUE_APP_S3_BASE_URL + element.Key,
                        type: type,
                    });
                }
            });
            return slides;
        },
        category: state => state.category,
        project: state => state.project,
        isLoading: state => state.isLoading,
    }
}

export default slideStore;
